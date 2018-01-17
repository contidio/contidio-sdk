package com.contidio.sdk.exceptions;

import org.apache.commons.httpclient.HttpStatus;

import com.contidio.sdk.proto.MetadataProtocol.BackendErrorCode;

@SuppressWarnings("serial")
public class PostponeExecutionBackendException extends BackendException {

	public PostponeExecutionBackendException() {
		super(BackendErrorCode.POSTPONE_EXECUTION, "Please try later", "PostponeExecutionBackendException", 
				HttpStatus.SC_NOT_ACCEPTABLE);
	}

}
