package com.contidio.sdk.exceptions;

import org.apache.commons.httpclient.HttpStatus;

import com.contidio.sdk.proto.MetadataProtocol.BackendErrorCode;

@SuppressWarnings("serial")
public class InternalErrorBackendException extends BackendException {
	public InternalErrorBackendException(String message) {
		super(BackendErrorCode.GENERIC_ERROR, message, "InternalErrorBackendException", HttpStatus.SC_INTERNAL_SERVER_ERROR);
	}	
}
