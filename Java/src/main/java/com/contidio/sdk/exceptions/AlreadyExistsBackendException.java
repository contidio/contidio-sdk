package com.contidio.sdk.exceptions;

import org.apache.commons.httpclient.HttpStatus;

import com.contidio.sdk.proto.MetadataProtocol.BackendErrorCode;

@SuppressWarnings("serial")
public class AlreadyExistsBackendException extends BackendException {
	public AlreadyExistsBackendException(BackendErrorCode errorCode, String message) {
		super(errorCode, message, "AlreadyExistsBackendException", HttpStatus.SC_CONFLICT);
	}	
}
