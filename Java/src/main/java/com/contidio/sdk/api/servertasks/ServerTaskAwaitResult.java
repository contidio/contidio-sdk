package com.contidio.sdk.api.servertasks;

import java.util.Map;

import com.contidio.sdk.proto.MetadataProtocol.ServerTaskResponse;

public class ServerTaskAwaitResult {
	private ServerTaskResponse[] serverTaskResponses;
	
	private Map<String, ServerTaskSummary> summaries;
	
	public ServerTaskAwaitResult(ServerTaskResponse[] serverTaskResponses, Map<String, ServerTaskSummary> summaries) {
		this.serverTaskResponses = serverTaskResponses;
		this.summaries = summaries;
	}
	
	public ServerTaskResponse[] getServerTaskResponses() {
		return serverTaskResponses;
	}
	
	public Map<String, ServerTaskSummary> getSummaries() {
		return summaries;
	}
}
