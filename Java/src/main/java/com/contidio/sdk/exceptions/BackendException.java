package com.contidio.sdk.exceptions;

import org.apache.commons.lang3.StringUtils;

import com.contidio.sdk.proto.MetadataProtocol.BackendErrorCode;
import com.contidio.sdk.proto.MetadataProtocol.Error;

@SuppressWarnings("serial")
public class BackendException extends Exception {
	private BackendErrorCode errorCode;	
	private String transientClass;
	private int httpErrorCode;
	
	public BackendException(BackendErrorCode errorCode, String message, String transientClass, int httpErrorCode) {
		super(message);
		
		this.errorCode = errorCode;		
		this.transientClass = transientClass;
		this.httpErrorCode = httpErrorCode;
	}
	
	public BackendErrorCode getErrorCode() {
		return errorCode;
	}
	
	public String getTransientClass() {
		return transientClass;
	}
		
	public int getHttpErrorCode() {
		return httpErrorCode;
	}

	public static Exception getTransientExceptionFor(Error error) {
		String exceptionClass = error.getExceptionType();
        if (StringUtils.equals(exceptionClass, "AlreadyExistsBackendException"))
            return new AlreadyExistsBackendException(error.getBackendErrorCode(), error.getErrorMessage());
        else if (StringUtils.equals(exceptionClass, "NotFoundBackendException"))
            return new NotFoundBackendException(error.getBackendErrorCode(), error.getErrorMessage());
        else if (StringUtils.equals(exceptionClass, "InsufficientPrivilegesBackendException"))
            return new InsufficientPrivilegesBackendException();
        else if (StringUtils.equals(exceptionClass, "InvalidCredentialsBackendException"))
            return new InvalidCredentialsBackendException();
        else if (StringUtils.equals(exceptionClass, "InternalErrorBackendException"))
            return new InternalErrorBackendException(error.getErrorMessage());
        else if (StringUtils.equals(exceptionClass, "InvalidOperationBackendException"))
            return new InvalidOperationBackendException(error.getBackendErrorCode(), error.getErrorMessage());
        else if (StringUtils.equals(exceptionClass, "OptimisticLockingBackendException"))
            return new OptimisticLockingBackendException(error.getErrorMessage());
        else if (StringUtils.equals(exceptionClass, "ServiceUnavailableBackendException"))
            return new ServiceUnavailableBackendException(error.getErrorMessage());
        else if (StringUtils.equals(exceptionClass, "PostponeExecutionBackendException"))
            return new PostponeExecutionBackendException();
        else if (StringUtils.equals(exceptionClass, "StopExecutionBackendException"))
            return new StopExecutionBackendException();
        else
            return new ServiceUnavailableBackendException("Invalid error data received from service: " +
                error.getErrorMessage());       
	}
}
