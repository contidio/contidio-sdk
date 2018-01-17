package com.contidio.sdk.api.servertasks;

import com.contidio.sdk.api.ApiClient;
import com.contidio.sdk.proto.MetadataProtocol.ServerTaskResponse;

public interface ServerTaskRunnable {

	ServerTaskResponse[] run(ApiClient apiClient) throws Exception;
	
}
