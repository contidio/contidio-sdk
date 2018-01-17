package com.contidio.sdk.exceptions;

import org.apache.commons.httpclient.HttpStatus;

import com.contidio.sdk.proto.MetadataProtocol.BackendErrorCode;

@SuppressWarnings("serial")
public class NotFoundBackendException extends BackendException {
	public NotFoundBackendException(BackendErrorCode errorCode, String message) {
		super(errorCode, message, "NotFoundBackendException", HttpStatus.SC_NOT_FOUND);
	}
}
