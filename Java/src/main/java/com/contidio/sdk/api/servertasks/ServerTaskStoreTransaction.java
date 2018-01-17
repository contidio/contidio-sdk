package com.contidio.sdk.api.servertasks;

import java.util.LinkedList;
import java.util.List;

public class ServerTaskStoreTransaction {
	private String uuid;
	private long createdTimestamp = System.currentTimeMillis();
	private List<ServerTaskStoreTask> tasks = new LinkedList<ServerTaskStoreTask>();
	
	public ServerTaskStoreTransaction() {
		
	}

	public String getUuid() {
		return uuid;
	}

	public void setUuid(String uuid) {
		this.uuid = uuid;
	}

	public long getCreatedTimestamp() {
		return createdTimestamp;
	}

	public List<ServerTaskStoreTask> getTasks() {
		return tasks;
	}
}
