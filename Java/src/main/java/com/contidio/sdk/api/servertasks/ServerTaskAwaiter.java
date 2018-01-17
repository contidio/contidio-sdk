package com.contidio.sdk.api.servertasks;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;

import com.contidio.sdk.api.ApiClient;
import com.contidio.sdk.exceptions.BackendException;
import com.contidio.sdk.proto.MetadataProtocol.ServerTaskProgress;
import com.contidio.sdk.proto.MetadataProtocol.ServerTaskResponse;

public class ServerTaskAwaiter {
	private ServerTaskProcessor serverTaskProcessor;
	
	private Map<String, ServerTaskSummary> summaries = new HashMap<String, ServerTaskSummary>();
	
	private Object summariesMutex = new Object();
	
	private Object completedLatch = new Object();
	
	private String address;
	
	private ServerTaskResponse[] serverTaskResponses;
	
	protected ServerTaskAwaiter(ServerTaskProcessor serverTaskProcessor) {
		this.serverTaskProcessor = serverTaskProcessor;
	}

	protected void awaitServerTaskRunnable(
			ApiClient apiClient, ServerTaskRunnable runnable, long timeoutMs) 
		throws Exception
	{
		address = apiClient.getWebSocketAddress();
		
		if (StringUtils.isEmpty(address))
			throw new Exception("The web socket address of the API client is not set up correctly");
		
		serverTaskResponses = runnable.run(apiClient);
		
		// initialize all tasks, if not yet received on event bus
		
		int tasksToWaitFor = 0;
		
		synchronized (summariesMutex) {
			for (ServerTaskResponse serverTaskResponse : serverTaskResponses) {
				if (serverTaskResponse.getServerTaskCreatedCount() > 0) {
					tasksToWaitFor ++;
					
					summaries.put(serverTaskResponse.getTransactionUuid(), new ServerTaskSummary());
					
					serverTaskProcessor.handleServerTaskProgress(
							address,
							ServerTaskProgress.newBuilder()
								.setTransactionUuid(serverTaskResponse.getTransactionUuid())
								.addAllServerTaskCreated(serverTaskResponse.getServerTaskCreatedList())
								.build());
				}
			}
		}
		
		if (tasksToWaitFor > 0) {
			synchronized(completedLatch) {
				completedLatch.wait(timeoutMs);
			}
		}
	}

	protected void onServerTaskStoreUpdate(
			String address, ServerTaskStore serverTaskStore) 
	{
		synchronized(summariesMutex) {
			if (!StringUtils.equals(this.address, address))
				return;
			
			List<ServerTaskStoreTransaction> transactions = new LinkedList<ServerTaskStoreTransaction>();
			
			for (String transactionUuid : summaries.keySet()) {
				ServerTaskStoreTransaction serverTaskStoreTransaction = 
						serverTaskStore.getTransaction(transactionUuid);
				
				if (serverTaskStoreTransaction != null)
					transactions.add(serverTaskStoreTransaction);
			}			
			
			for (ServerTaskStoreTransaction transaction : transactions) {
				ServerTaskSummary summary = new ServerTaskSummary();
				
				for (ServerTaskStoreTask task : transaction.getTasks()) {				
					sumTask(summary, task);
				}
				
				summaries.put(transaction.getUuid(), summary);
			}		
		
			if (isCompleted()) {
				synchronized(completedLatch) {
					completedLatch.notify();
				}
			}
		}
	}
	
	private void sumTask(ServerTaskSummary summary, ServerTaskStoreTask task) {
		summary.setTotalPercentage(summary.getTotalPercentage() + 100);
		
		if (task.getIsError()) {
			BackendException backendException = new BackendException(task.getBackendErrorCode(), task.getBackendErrorMessage(),
					null, 500);
			
			summary.getExceptions().add(backendException);			
		} else {
			summary.setCompletedPercentage(summary.getCompletedPercentage() + task.getCompletedPercentage());
			
			for (ServerTaskStoreTask subTask : task.getTasks()) {
				sumTask(summary, subTask);
			}
		}
	}
	
	public boolean isCompleted() {
		synchronized(summariesMutex) {
			for (ServerTaskSummary summary : summaries.values()) {
				if (!summary.isCompleted() && !summary.hasExceptions())
					return false;
			}
			
			return true;
		}
	}
	
	public boolean hasExceptions() {
		synchronized(summariesMutex) {
			for (ServerTaskSummary summary : summaries.values()) {
				if (summary.hasExceptions())
					return true;
			}
			
			return false;
		}
	}
	
	public List<BackendException> getExceptions() {
		List<BackendException> copy = new LinkedList<BackendException>();
		
		synchronized(summariesMutex) {
			for (ServerTaskSummary summary : summaries.values()) {
				if (summary.hasExceptions())
					copy.addAll(summary.getExceptions());
			}
		}
		
		return copy;
	}
	
	public Map<String, ServerTaskSummary> getSummaries() {
		Map<String, ServerTaskSummary> copy = new HashMap<String, ServerTaskSummary>();
		
		synchronized(summariesMutex) {
			for (String key : summaries.keySet()) {
				ServerTaskSummary summary = summaries.get(key);
				ServerTaskSummary summaryCopy = summary.copy();
				
				copy.put(key, summaryCopy);
			}
		}
		
		return copy;
	}
	
	public ServerTaskResponse[] getServerTaskResponses() {
		return serverTaskResponses;
	}
}
