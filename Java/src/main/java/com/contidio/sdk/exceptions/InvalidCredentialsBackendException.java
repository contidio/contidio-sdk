package com.contidio.sdk.exceptions;

import org.apache.commons.httpclient.HttpStatus;

import com.contidio.sdk.proto.MetadataProtocol.BackendErrorCode;

@SuppressWarnings("serial")
public class InvalidCredentialsBackendException extends BackendException {
	public InvalidCredentialsBackendException() {
		super(BackendErrorCode.INVALID_CREDENTIALS, "Invalid credentials", "InvalidCredentialsBackendException", 
				HttpStatus.SC_UNAUTHORIZED);
	}
}
