package com.contidio.sdk.api.servertasks;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

public class ServerTaskStore {
	private Map<String, ServerTaskStoreTransaction> serverTaskStore = 
			new HashMap<String, ServerTaskStoreTransaction>();

	public ServerTaskStoreTransaction getTransaction(String transactionUuid) {
		return serverTaskStore.get(transactionUuid);
	}

	public void putTransaction(
			String transactionUuid, ServerTaskStoreTransaction serverTaskStoreTransaction) 
	{
		serverTaskStore.put(transactionUuid, serverTaskStoreTransaction);
	}

	public Collection<ServerTaskStoreTransaction> getTransactions() {
		return serverTaskStore.values();
	}		
	
	public void cleanupServerTaskStore() {
		// after 15 minutes we'll not need the tasks anymore
		
		long now = System.currentTimeMillis();
		
		serverTaskStore.entrySet().removeIf(serverTaskStoreTransaction ->
			now - serverTaskStoreTransaction.getValue().getCreatedTimestamp() > 1000 * 60 * 15);
	}
}
