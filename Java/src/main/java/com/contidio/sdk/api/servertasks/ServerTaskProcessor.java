package com.contidio.sdk.api.servertasks;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.contidio.sdk.api.ApiClient;
import com.contidio.sdk.api.eventbus.ApiEventBusEventProcessor;
import com.contidio.sdk.proto.MetadataProtocol.EventBusMessage;
import com.contidio.sdk.proto.MetadataProtocol.ServerTask;
import com.contidio.sdk.proto.MetadataProtocol.ServerTaskProgress;

public class ServerTaskProcessor implements ApiEventBusEventProcessor {
	private static final Logger logger = LoggerFactory.getLogger(ServerTaskProcessor.class);
	
	private Map<String, ServerTaskStore> serverTaskStores = new HashMap<String, ServerTaskStore>();
			
	private List<ServerTaskAwaiter> serverTaskAwaiters = new LinkedList<ServerTaskAwaiter>();
	private List<ServerTaskCompletedListener> serverTaskCompletedListeners = new LinkedList<ServerTaskCompletedListener>();
	
	public ServerTaskProcessor() {
		
	}

	@Override
	public void onEventBusMessage(String address, EventBusMessage eventBusMessage) {
		if (!eventBusMessage.hasServerTaskProgress())
			return;
		
		ServerTaskProgress serverTaskProgress = eventBusMessage.getServerTaskProgress();
		
		handleServerTaskProgress(address, serverTaskProgress);
	}

	protected void handleServerTaskProgress(String address, ServerTaskProgress serverTaskProgress) {
		synchronized(serverTaskStores) {			
			ServerTaskStore serverTaskStore =
					serverTaskStores.get(address);
			
			if (serverTaskStore == null) {
				serverTaskStore = new ServerTaskStore();
				
				serverTaskStores.put(address, serverTaskStore);
			}
			
			if (serverTaskProgress.hasTransactionUuid()) {
				String transactionUuid = serverTaskProgress.getTransactionUuid();
				
				ServerTaskStoreTransaction existingServerTaskStoreTransaction = 
						serverTaskStore.getTransaction(transactionUuid);
				
				if (existingServerTaskStoreTransaction == null) {
					existingServerTaskStoreTransaction = new ServerTaskStoreTransaction();
					
					existingServerTaskStoreTransaction.setUuid(transactionUuid);
					
					serverTaskStore.putTransaction(transactionUuid, existingServerTaskStoreTransaction);
					
					logger.debug("Adding new transaction " + transactionUuid + 
							" (created " + existingServerTaskStoreTransaction.getCreatedTimestamp() + ")");
				}
				
				handleServerTaskTransaction(serverTaskProgress, existingServerTaskStoreTransaction);
			}
			
			serverTaskStore.cleanupServerTaskStore();
			
			for (ServerTaskAwaiter serverTaskAwaiter : serverTaskAwaiters)
				serverTaskAwaiter.onServerTaskStoreUpdate(address, serverTaskStore);
			
			for (ServerTaskCompletedListener serverTaskCompletedListener : serverTaskCompletedListeners)
				serverTaskCompletedListener.onServerTaskStoreUpdate(address, serverTaskStore);
		}
	}
	
	private void handleServerTaskTransaction(ServerTaskProgress serverTaskProgress, ServerTaskStoreTransaction serverTaskStoreTransaction) {
		if (serverTaskProgress.getServerTaskProgressTaskCount() > 0) {
			for (ServerTask entry : serverTaskProgress.getServerTaskProgressTaskList()) {
				ServerTaskStoreTask existingServerTaskStoreTask = findServerTaskStoreTask(serverTaskStoreTransaction, entry.getTaskUuid());
				
				if (existingServerTaskStoreTask != null) {
					if (entry.getCompletedPercentage() >= existingServerTaskStoreTask.getCompletedPercentage()) {
						existingServerTaskStoreTask.setCompletedPercentage(entry.getCompletedPercentage());
						
						boolean hasError = serverTaskProgress.hasHasError() && serverTaskProgress.getHasError();
						
						existingServerTaskStoreTask.setIsError(hasError);
						
						if (hasError) {
							// returns UNKNOWN if not known (first value in list)
							
							existingServerTaskStoreTask.setBackendErrorCode(serverTaskProgress.getBackendErrorCode());
							
							if (serverTaskProgress.hasBackendErrorMessage()) 
								existingServerTaskStoreTask.setBackendErrorMessage(serverTaskProgress.getBackendErrorMessage());
						}
					} else {
						logger.debug("New task is older than existing task, ignoring");
						
						return;
					}
				} else {
					existingServerTaskStoreTask = new ServerTaskStoreTask();
					
					existingServerTaskStoreTask.setUuid(entry.getTaskUuid());
					existingServerTaskStoreTask.setCompletedPercentage(entry.getCompletedPercentage());
					
					boolean hasError = serverTaskProgress.hasHasError() && serverTaskProgress.getHasError();
					
					existingServerTaskStoreTask.setIsError(hasError);
					
					if (hasError) {
						// returns UNKNOWN if not known (first value in list)
						
						existingServerTaskStoreTask.setBackendErrorCode(serverTaskProgress.getBackendErrorCode());
						
						if (serverTaskProgress.hasBackendErrorMessage()) 
							existingServerTaskStoreTask.setBackendErrorMessage(serverTaskProgress.getBackendErrorMessage());
					}
					
					existingServerTaskStoreTask.setIssuedTimestamp(entry.getIssuedTimestamp());
					
					// returns STT_UNKNOWN if not known (first value in list)
					existingServerTaskStoreTask.setServerTaskType(entry.getType());
					
					serverTaskStoreTransaction.getTasks().add(existingServerTaskStoreTask);
				}
				
				handleServerTasksCreatedTasks(serverTaskStoreTransaction, serverTaskProgress, 
						existingServerTaskStoreTask.getTasks(), existingServerTaskStoreTask.getUuid());
			}
		} else {
			handleServerTasksCreatedTasks(serverTaskStoreTransaction, serverTaskProgress, 
					serverTaskStoreTransaction.getTasks(), null);
		}
	}
	
	private void handleServerTasksCreatedTasks(ServerTaskStoreTransaction serverTaskStoreTransaction,
			ServerTaskProgress serverTaskProgress, List<ServerTaskStoreTask> serverTaskStoreTasks, String parentUuid) 
	{
		if (serverTaskProgress.getServerTaskCreatedCount() > 0) {
			for (ServerTask createdEntry : serverTaskProgress.getServerTaskCreatedList()) {
				ServerTaskStoreTask existingServerTaskStoreTask = findServerTaskStoreTask(
						serverTaskStoreTransaction, createdEntry.getTaskUuid());
				
				if (existingServerTaskStoreTask == null) {
					logger.debug("Adding new created task " + createdEntry.getTaskUuid() + " to " + 
							(parentUuid != null ? parentUuid : "transaction"));
					
					ServerTaskStoreTask newServerTaskStoreTask = new ServerTaskStoreTask();
					
					newServerTaskStoreTask.setUuid(createdEntry.getTaskUuid());
					newServerTaskStoreTask.setCompletedPercentage(0);
					newServerTaskStoreTask.setIssuedTimestamp(createdEntry.getIssuedTimestamp());
					
					// returns STT_UNKNOWN if not known (first value in list)
					newServerTaskStoreTask.setServerTaskType(createdEntry.getType());
					
					serverTaskStoreTasks.add(newServerTaskStoreTask);
				}
			}
		}
	}

	private ServerTaskStoreTask findServerTaskStoreTask(ServerTaskStoreTransaction serverTaskStoreTransaction, String serverTaskUuid) {
		logger.debug("Searching for " + serverTaskUuid + " in transaction");

		for (ServerTaskStoreTask entry : serverTaskStoreTransaction.getTasks()) {
			if (entry.getUuid().equals(serverTaskUuid))
				return entry;
			  
			ServerTaskStoreTask foundServerTaskStoreTask = findServerTaskStoreTaskChild(entry, serverTaskUuid);
		    if (foundServerTaskStoreTask != null)
		    	return foundServerTaskStoreTask;
	    }

		return null;
	}
	
	private ServerTaskStoreTask findServerTaskStoreTaskChild(ServerTaskStoreTask serverTaskStoreTask, String serverTaskUuid) {
		logger.debug("Searching for " + serverTaskUuid + " in " + serverTaskStoreTask.getUuid());

		for (ServerTaskStoreTask entry : serverTaskStoreTask.getTasks()) {
			if (entry.getUuid().equals(serverTaskUuid))
				return entry;
			  
			ServerTaskStoreTask foundServerTaskStoreTask = findServerTaskStoreTaskChild(entry, serverTaskUuid);
		    if (foundServerTaskStoreTask != null)
		    	return foundServerTaskStoreTask;
		}
		
		return null;
	}
	
	public ServerTaskAwaitResult awaitServerTaskRunnable(
			ApiClient apiClient, ServerTaskRunnable runnable, long timeoutMs) 
		throws Exception
	{		
		ServerTaskAwaiter serverTaskAwaiter = new ServerTaskAwaiter(this);
		
		try {
			registerServerTaskAwaiter(serverTaskAwaiter);
			
			serverTaskAwaiter.awaitServerTaskRunnable(apiClient, runnable, timeoutMs);
		} catch (Exception e) {
			throw e;
		} finally {
			unregisterServerTaskAwaiter(serverTaskAwaiter);
		}
		
		return new ServerTaskAwaitResult(serverTaskAwaiter.getServerTaskResponses(), serverTaskAwaiter.getSummaries());
	}		

	private void registerServerTaskAwaiter(ServerTaskAwaiter serverTaskAwaiter) {
		synchronized(serverTaskStores) {
			if (!serverTaskAwaiters.contains(serverTaskAwaiter))
				serverTaskAwaiters.add(serverTaskAwaiter);
		}
	}
	
	private void unregisterServerTaskAwaiter(ServerTaskAwaiter serverTaskAwaiter) {
		synchronized(serverTaskStores) {
			if (serverTaskAwaiters.contains(serverTaskAwaiter))
				serverTaskAwaiters.remove(serverTaskAwaiter);
		}
	}
	
	public void registerServerTaskCompletedListener(ServerTaskCompletedListener serverTaskCompletedListener) {
		synchronized(serverTaskStores) {
			if (!serverTaskCompletedListeners.contains(serverTaskCompletedListener))
				serverTaskCompletedListeners.add(serverTaskCompletedListener);
		}
	}
	
	public void unregisterServerTaskCompletedListener(ServerTaskCompletedListener serverTaskCompletedListener) {
		synchronized(serverTaskStores) {
			if (serverTaskCompletedListeners.contains(serverTaskCompletedListener))
				serverTaskCompletedListeners.remove(serverTaskCompletedListener);
		}
	}
}
