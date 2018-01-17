package com.contidio.sdk.api.servertasks;

import java.util.LinkedList;
import java.util.List;

import com.contidio.sdk.proto.MetadataProtocol.BackendErrorCode;
import com.contidio.sdk.proto.MetadataProtocol.ServerTaskType;

public class ServerTaskStoreTask {
	private String uuid;
	private int completedPercentage;
	private boolean isError = false;
	private BackendErrorCode backendErrorCode;
	private String backendErrorMessage;
	private Long issuedTimestamp;
	private ServerTaskType serverTaskType;
	private List<ServerTaskStoreTask> tasks = new LinkedList<ServerTaskStoreTask>();
	private boolean isAlreadyReported = false;
	
	public ServerTaskStoreTask() {
		
	}

	public String getUuid() {
		return uuid;
	}

	public void setUuid(String uuid) {
		this.uuid = uuid;
	}

	public int getCompletedPercentage() {
		return completedPercentage;
	}

	public void setCompletedPercentage(int completedPercentage) {
		this.completedPercentage = completedPercentage;
		
		isAlreadyReported = false;
	}

	public boolean getIsError() {
		return isError;
	}

	public void setIsError(boolean isError) {
		this.isError = isError;
		
		isAlreadyReported = false;
	}

	public BackendErrorCode getBackendErrorCode() {
		return backendErrorCode;
	}

	public void setBackendErrorCode(BackendErrorCode backendErrorCode) {
		this.backendErrorCode = backendErrorCode;
		
		isAlreadyReported = false;
	}

	public String getBackendErrorMessage() {
		return backendErrorMessage;
	}

	public void setBackendErrorMessage(String backendErrorMessage) {
		this.backendErrorMessage = backendErrorMessage;
		
		isAlreadyReported = false;
	}

	public Long getIssuedTimestamp() {
		return issuedTimestamp;
	}

	public void setIssuedTimestamp(Long issuedTimestamp) {
		this.issuedTimestamp = issuedTimestamp;
	}

	public ServerTaskType getServerTaskType() {
		return serverTaskType;
	}

	public void setServerTaskType(ServerTaskType serverTaskType) {
		this.serverTaskType = serverTaskType;
	}

	public List<ServerTaskStoreTask> getTasks() {
		return tasks;
	}
	
	protected void setReported() {
		isAlreadyReported = true;
	}
	
	protected boolean isAlreadyReported() {
		return isAlreadyReported;
	}	
}
