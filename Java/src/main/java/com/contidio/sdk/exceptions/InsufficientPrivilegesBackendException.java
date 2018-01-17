package com.contidio.sdk.exceptions;

import org.apache.commons.httpclient.HttpStatus;

import com.contidio.sdk.proto.MetadataProtocol.BackendErrorCode;

@SuppressWarnings("serial")
public class InsufficientPrivilegesBackendException extends BackendException {
	public InsufficientPrivilegesBackendException() {
		super(BackendErrorCode.INSUFFICIENT_PRIVILEGES, "Insufficient privileges", "InsufficientPrivilegesBackendException", 
				HttpStatus.SC_FORBIDDEN);
	}
}
