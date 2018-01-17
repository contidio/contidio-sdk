package com.contidio.sdk.exceptions;

import org.apache.commons.httpclient.HttpStatus;

import com.contidio.sdk.proto.MetadataProtocol.BackendErrorCode;

@SuppressWarnings("serial")
public class OptimisticLockingBackendException extends BackendException {
	public OptimisticLockingBackendException(long l, long m) {
		super(BackendErrorCode.OPTIMISTIC_LOCKING_FAILED, 
				"The optimistic locking versions are different (" + l + 
					" - " + m + ")", 
				"OptimisticLockingBackendException", 
				HttpStatus.SC_CONFLICT);
	}	
	
	public OptimisticLockingBackendException(String message) {
		super(BackendErrorCode.OPTIMISTIC_LOCKING_FAILED, message, "OptimisticLockingBackendException",
				HttpStatus.SC_CONFLICT);
	}	
}
