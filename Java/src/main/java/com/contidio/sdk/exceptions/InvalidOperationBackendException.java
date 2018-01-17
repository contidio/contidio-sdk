package com.contidio.sdk.exceptions;

import org.apache.commons.httpclient.HttpStatus;

import com.contidio.sdk.proto.MetadataProtocol.BackendErrorCode;

@SuppressWarnings("serial")
public class InvalidOperationBackendException extends BackendException {
	public InvalidOperationBackendException(BackendErrorCode errorCode, String message) {
		super(errorCode, message, "InvalidOperationBackendException", HttpStatus.SC_BAD_REQUEST);
	}	
}
