using com.contidio.sdk.proto;
using System;
using System.Net;

namespace Contidio.Sdk.Exceptions
{
    public class BackendException : Exception
    {
        public BackendErrorCode ErrorCode { get; private set; }
        public String TransientClass { get; private set; }
        public HttpStatusCode HttpErrorCode { get; private set; }

        public BackendException(BackendErrorCode errorCode, String message, String transientClass, HttpStatusCode httpErrorCode) 
            : base(message)
        {
            ErrorCode = errorCode;
            TransientClass = transientClass;
            HttpErrorCode = httpErrorCode;
        }

        public static Exception GetTransientExceptionFor(Error error)
        {
            string exceptionClass = error.ExceptionType;
            if (string.Equals(exceptionClass, "AlreadyExistsBackendException"))
                return new AlreadyExistsBackendException(error.BackendErrorCode, error.ErrorMessage);
            else if (string.Equals(exceptionClass, "NotFoundBackendException"))
                return new NotFoundBackendException(error.BackendErrorCode, error.ErrorMessage);
            else if (string.Equals(exceptionClass, "InsufficientPrivilegesBackendException"))
                return new InsufficientPrivilegesBackendException();
            else if (string.Equals(exceptionClass, "InvalidCredentialsBackendException"))
                return new InvalidCredentialsBackendException();
            else if (string.Equals(exceptionClass, "InternalErrorBackendException"))
                return new InternalErrorBackendException(error.ErrorMessage);
            else if (string.Equals(exceptionClass, "InvalidOperationBackendException"))
                return new InvalidOperationBackendException(error.BackendErrorCode, error.ErrorMessage);
            else if (string.Equals(exceptionClass, "OptimisticLockingBackendException"))
                return new OptimisticLockingBackendException(error.ErrorMessage);
            else if (string.Equals(exceptionClass, "ServiceUnavailableBackendException"))
                return new ServiceUnavailableBackendException(error.ErrorMessage);
            else if (string.Equals(exceptionClass, "PostponeExecutionBackendException"))
                return new PostponeExecutionBackendException();
            else if (string.Equals(exceptionClass, "StopExecutionBackendException"))
                return new StopExecutionBackendException();
            else
                return new ServiceUnavailableBackendException("Invalid error data received from service: " +
                    error.ErrorMessage);            
        }
    }
}
