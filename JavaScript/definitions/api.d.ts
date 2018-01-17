export enum ApiEnvironment {
  DEVELOPMENT,
  STAGING,
  DEMO,
  PRODUCTION
}

export class ApiEndpoint {
  constructor(endpoint: string, port: number);
  getApiEndpointUrl(environment: ApiEnvironment, apiManagement: boolean): string;
}

export interface ProgressHandler {
  (progressEvent: any): void;
}

export class ApiClient {
  readonly subscriptionKey: string;
  readonly environment: ApiEnvironment;
  readonly bearerToken: string;
  readonly locale: string;
  webSocketAddress: string;
  instanceId: string;
  public static ENDPOINT_WWW: ApiEndpoint;
  public static ENDPOINT_ID: ApiEndpoint;
  public static ENDPOINT_CW: ApiEndpoint;
  public static ENDPOINT_CR: ApiEndpoint;
  public static ENDPOINT_MDW: ApiEndpoint;
  public static ENDPOINT_MDR: ApiEndpoint;
  public static ENDPOINT_MDIDX: ApiEndpoint;
  public static ENDPOINT_REL: ApiEndpoint;
  constructor(subscriptionKey: string, environment?: ApiEnvironment, bearerToken?: string, locale?: string);
  createApiRequest(brandUuid: string): ApiRequest;
}

export class AbstractApiRequest {
  protected constructor(client: ApiClient, brandUuid: string);
  flags: Long;
  setFlags(flags: Long): this;
  anonymous: boolean;
  setAnonymous(anonymous: boolean): this;
  timeout: number;
  setTimeout(timeout: number): this;
  progressHandler: ProgressHandler;
  setProgressHandler(progressHandler: ProgressHandler): this;
  transactionUuid: string;
  setTransactionUuid(transactionUuid: string): this;
  queryData: Proto.QueryData;
  setQueryData(queryData: Proto.QueryData): this;
  cancelToken: CancelToken;
  setCancelToken(cancelToken: CancelToken): this;
  buildApiUrl(apiPath: string, uuid: string, supportsAnonymous: boolean): string;
  protected getUuidApiPath(entityType: Proto.EntityType): string;
  protected getChildsApiPath(entityType: Proto.EntityType): string;
}

export declare class CancelToken {
  cancel: (reason?: any) => void;
}


declare global {
  interface Promise<T> {
    finally<TResult>(callback: () => void): Promise<TResult>;
  }
}

export declare class CancelError extends BaseError {}

import {AxiosRequestConfig, AxiosResponse} from "axios";
export declare class LowLevelError extends BaseError {
  readonly config: AxiosRequestConfig;
  readonly code?: string;
  readonly response?: AxiosResponse;
  constructor(message:string, config:AxiosRequestConfig, code?:string, response?: AxiosResponse)
}

export declare class BackendError extends BaseError {
  readonly errorCode: Proto.BackendErrorCode;
  readonly transientClass: string;
  readonly httpErrorCode: number;
  constructor(backendErrorCode: Proto.BackendErrorCode, message: string, transientClass: string, httpErrorCode: number);
}
export declare class AlreadyExistsBackendError extends BackendError {
}
export declare class InsufficientPrivilegesBackendError extends BackendError {
}
export declare class InternalErrorBackendError extends BackendError {
}
export declare class InvalidCredentialsBackendError extends BackendError {
}
export declare class InvalidOperationBackendError extends BackendError {
}
export declare class NotFoundBackendError extends BackendError {
}
export declare class OptimisticLockingBackendError extends BackendError {
}
export declare class PostponeExecutionBackendError extends BackendError {
}
export declare class ServiceUnavailableBackendError extends BackendError {
}
export declare class StopExecutionBackendError extends BackendError {
}
export declare function getTransientErrorFor(error: Proto.Error): BackendError;

export declare function stringNullOrEmpty(str: string): boolean;


export declare function parseLong(value: Long | number | string | {low: number, high: number, unsigned: boolean}): Long;

export declare function longToNumber(value: Long | number | string | {low: number, high: number, unsigned: boolean}): number;

export declare function getEnumByString(enumObject: any, key: string): number;
