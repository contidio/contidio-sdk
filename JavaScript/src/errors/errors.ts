import Proto from "../proto";
import {AxiosResponse, AxiosRequestConfig} from "axios";
import {BaseError} from 'make-error';

export class LowLevelError extends BaseError {
  readonly config: AxiosRequestConfig;
  readonly code?: string;
  readonly response?: AxiosResponse;

  constructor(message: string, config: AxiosRequestConfig, code?: string, response?: AxiosResponse) {
    super(message);

    this.message = message;
    this.config = config;
    this.code = code;
    this.response = response;
  }
}

export class BackendError extends BaseError {
  readonly errorCode: Proto.BackendErrorCode;
  readonly transientClass: string;
  readonly httpErrorCode: number;

  constructor(backendErrorCode: Proto.BackendErrorCode, message: string, transientClass: string, httpErrorCode?: number) {
    super(message);

    this.message = message;
    this.errorCode = backendErrorCode;
    this.transientClass = transientClass;
    this.httpErrorCode = httpErrorCode || 500;
  }
}

export class AlreadyExistsBackendError extends BackendError {
}

export class InsufficientPrivilegesBackendError extends BackendError {
}

export class InternalErrorBackendError extends BackendError {
}

export class InvalidCredentialsBackendError extends BackendError {
}

export class InvalidOperationBackendError extends BackendError {
}

export class NotFoundBackendError extends BackendError {
}

export class OptimisticLockingBackendError extends BackendError {
}

export class PostponeExecutionBackendError extends BackendError {
}

export class ServiceUnavailableBackendError extends BackendError {
}

export class StopExecutionBackendError extends BackendError {
}

export function getTransientErrorFor(error: Proto.Error): BackendError {
  let exceptionClass: string = error.exceptionType;
  if (exceptionClass === 'AlreadyExistsBackendException')
    return new AlreadyExistsBackendError(error.backendErrorCode, error.errorMessage, exceptionClass, error.httpStatusCode);
  else if (exceptionClass === 'NotFoundBackendException')
    return new NotFoundBackendError(error.backendErrorCode, error.errorMessage, exceptionClass, error.httpStatusCode);
  else if (exceptionClass === 'InsufficientPrivilegesBackendException')
    return new InsufficientPrivilegesBackendError(error.backendErrorCode, error.errorMessage, exceptionClass, error.httpStatusCode);
  else if (exceptionClass === 'InvalidCredentialsBackendException')
    return new InvalidCredentialsBackendError(error.backendErrorCode, error.errorMessage, exceptionClass, error.httpStatusCode);
  else if (exceptionClass === 'InternalErrorBackendException')
    return new InternalErrorBackendError(error.backendErrorCode, error.errorMessage, exceptionClass, error.httpStatusCode);
  else if (exceptionClass === 'InvalidOperationBackendException')
    return new InvalidOperationBackendError(error.backendErrorCode, error.errorMessage, exceptionClass, error.httpStatusCode);
  else if (exceptionClass === 'OptimisticLockingBackendException')
    return new OptimisticLockingBackendError(error.backendErrorCode, error.errorMessage, exceptionClass, error.httpStatusCode);
  else if (exceptionClass === 'ServiceUnavailableBackendException')
    return new ServiceUnavailableBackendError(error.backendErrorCode, error.errorMessage, exceptionClass, error.httpStatusCode);
  else if (exceptionClass === 'PostponeExecutionBackendException')
    return new PostponeExecutionBackendError(error.backendErrorCode, error.errorMessage, exceptionClass, error.httpStatusCode);
  else if (exceptionClass === 'StopExecutionBackendException')
    return new StopExecutionBackendError(error.backendErrorCode, error.errorMessage, exceptionClass, error.httpStatusCode);
  else
    return new ServiceUnavailableBackendError(Proto.BackendErrorCode.TEMPORARY_UNAVAILABLE, 'Invalid error data received from service: ' +
      error.errorMessage, 'ServiceUnavailableBackendException', 503);
}

export class NoAnonymousAccessError extends Error {

}
