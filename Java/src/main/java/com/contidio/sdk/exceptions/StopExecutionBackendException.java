package com.contidio.sdk.exceptions;

import org.apache.commons.httpclient.HttpStatus;

import com.contidio.sdk.proto.MetadataProtocol.BackendErrorCode;

@SuppressWarnings("serial")
public class StopExecutionBackendException extends BackendException {

	public StopExecutionBackendException() {
		super(BackendErrorCode.STOP_EXECUTION, "Abandon this task", "StopExecutionBackendException", 
				HttpStatus.SC_NOT_ACCEPTABLE);
	}

}
