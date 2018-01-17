package com.contidio.sdk.api.servertasks;

import com.contidio.sdk.exceptions.BackendException;

public abstract class ServerTaskCompletedListener {

	protected ServerTaskCompletedListener() {
	}
	
	protected abstract void onServerTaskCompleted(
			String address, String transactionUuid, ServerTaskStoreTask task, ServerTaskSummary summary);

	protected void onServerTaskStoreUpdate(
			String address, ServerTaskStore serverTaskStore) 
	{
		for (ServerTaskStoreTransaction transaction : serverTaskStore.getTransactions()) {
			ServerTaskSummary summary = new ServerTaskSummary();
			
			for (ServerTaskStoreTask task : transaction.getTasks()) {				
				sumTask(summary, task);
				
				if ((summary.isCompleted() || summary.hasExceptions()) &&
					!task.isAlreadyReported()) 
				{					
					onServerTaskCompleted(
						address, transaction.getUuid(), task, summary);
					
					task.setReported();
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
}
