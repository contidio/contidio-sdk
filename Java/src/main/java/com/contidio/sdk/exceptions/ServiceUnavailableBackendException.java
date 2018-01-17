package com.contidio.sdk.exceptions;

import org.apache.commons.httpclient.HttpStatus;

import com.contidio.sdk.proto.MetadataProtocol.BackendErrorCode;

@SuppressWarnings("serial")
public class ServiceUnavailableBackendException extends BackendException {
	public ServiceUnavailableBackendException(String message) {
		super(BackendErrorCode.TEMPORARY_UNAVAILABLE, message, "ServiceUnavailableBackendException", 
				HttpStatus.SC_SERVICE_UNAVAILABLE);
	}	
}
