import axios, {AxiosError, AxiosResponse, AxiosRequestConfig} from "axios";
import {ApiEnvironment} from "./apiEnvironment";
import ApiEndpoint from "./apiEndpoint";
import ApiConstants from "./apiConstants";
import ApiRequest from "./apiRequest";
import {stringNullOrEmpty} from "./validator";
import {LowLevelError, BackendError, getTransientErrorFor, InternalErrorBackendError} from "../errors/errors";
import Proto from "../proto";
import {ProgressHandler} from "./abstractApiRequest";
let Long = require('long');
import {BaseError} from 'make-error';

interface Long {
  toJSON: () => string;
}

Long.prototype.toJSON = function(){
  return this.toString();
};

export type ApiMethod = 'get' | 'put' | 'post' | 'delete';

export class CancelError extends BaseError {}

export class CancelToken {
  cancel(reason?: any) {}
}



export default class ApiClient {

  readonly subscriptionKey: string;
  readonly environment: ApiEnvironment;
  readonly bearerToken: string;

  readonly locale: string;

  public static ENDPOINT_WWW: ApiEndpoint = new ApiEndpoint('www', 31442, true);
  public static ENDPOINT_ID: ApiEndpoint = new ApiEndpoint('id', 31443, false);
  public static ENDPOINT_CW: ApiEndpoint = new ApiEndpoint('cw', 31444, false);
  public static ENDPOINT_CR: ApiEndpoint = new ApiEndpoint('cr', 31444, false);
  public static ENDPOINT_MDW: ApiEndpoint = new ApiEndpoint('mdw', 31445, false);
  public static ENDPOINT_MDR: ApiEndpoint = new ApiEndpoint('mdr', 31445, false);
  public static ENDPOINT_MDIDX: ApiEndpoint = new ApiEndpoint('mdidx', 31446, false);

  private _webSocketAddress: string;

  private _instanceId: string;

  constructor(subscriptionKey: string, environment?: ApiEnvironment, bearerToken?: string, locale?: string) {
    if (environment != null) {
      this.environment = environment;
    } else {
      this.environment = ApiEnvironment.DEVELOPMENT;
    }

    this.subscriptionKey = subscriptionKey;
    this.bearerToken = bearerToken;
    this.locale = locale;

    this._webSocketAddress = null;
    this._instanceId = null;
  }

  get webSocketAddress(): string {
    return this._webSocketAddress;
  }

  set webSocketAddress(webSocketAddress: string) {
    this._webSocketAddress = webSocketAddress;
  }

  get instanceId(): string {
    return this._instanceId;
  }

  set instanceId(instanceId: string) {
    this._instanceId = instanceId;
  }

  createApiRequest(brandUuid: string): ApiRequest {
    return new ApiRequest(this, brandUuid);
  }

  process(apiManagement: boolean, apiEndpoint: ApiEndpoint, brandUuid: string, transactionUuid: string,
          url: string, jsonContent: Proto.Message, binaries: File[], method: ApiMethod, timeout: number, cancelToken: CancelToken,
          progressHandler: ProgressHandler): Promise<any> {
    let apiUrl: string = apiEndpoint.getApiEndpointUrl(this.environment, apiManagement);

    apiUrl += url;

    let headers: any = {
      'Accept': 'application/json'
    };

    if (!stringNullOrEmpty(this.bearerToken)) {
      headers['Authorization'] = 'Bearer ' + this.bearerToken;
    }

    if (!stringNullOrEmpty(brandUuid)) {
      headers[ApiConstants.REQUEST_HEADER_BRAND_UUID] = brandUuid;
    }

    if (!stringNullOrEmpty(this._webSocketAddress)) {
      headers[ApiConstants.REQUEST_HEADER_WEBSOCKET_ADDRESS] = this._webSocketAddress;
    }

    if (!stringNullOrEmpty(transactionUuid)) {
      headers[ApiConstants.REQUEST_HEADER_TRANSACTION_UUID] = transactionUuid;
    }

    if (this.subscriptionKey && this.subscriptionKey.length > 0) {
      headers[ApiConstants.REQUEST_HEADER_SUBSCRIPTION_KEY] = this.subscriptionKey;
    }

    if (!stringNullOrEmpty(this._instanceId)) {
      headers[ApiConstants.REQUEST_HEADER_INSTANCE_ID] = this._instanceId;
    }

    headers[ApiConstants.REQUEST_HEADER_CONTIDIO_SDK] = ApiConstants.CONTIDIO_SDK_IDENTIFIER;

    let data: any = null;

    if (binaries != null) {
      let formData: FormData = new FormData();

      formData.append('json', JSON.stringify(jsonContent));

      binaries.forEach((binary) => {
        formData.append('files', binary);
      });

      data = formData;
    } else {
      data = jsonContent;
    }

    let AxiosCancelToken = axios.CancelToken;
    let source = AxiosCancelToken.source();

    return new Promise((resolve, reject) => {

      let hasCanceled = false;

      let config: AxiosRequestConfig = {
        url: apiUrl, method, headers, data, timeout: timeout, cancelToken: source.token
      };

      if (progressHandler) {
        let cancelableProgressHandler = (progressEvent: any) => {
          if (!hasCanceled) {
            progressHandler(progressEvent);
          }
        };
        config.onUploadProgress = cancelableProgressHandler;
        config.onDownloadProgress = cancelableProgressHandler;
      }

      axios.request(config).then((response: AxiosResponse) => {

        let statusCode = response.status;

        if (statusCode == 200 || statusCode == 204) {
          // ignore 204 (empty body)

          if (cancelToken) {
            cancelToken.cancel = () => {};
          }

          resolve(response.data);
        } else {
          this.handleAsError(reject, response);
        }
      }).catch((error: AxiosError) => {
        let isLowLevelError: boolean = !error.response;

        if (cancelToken) {
          cancelToken.cancel = () => {
          };
        }

        if (!isLowLevelError) {
          this.handleAsError(reject, error.response);
        } else {
          let lowLevelError = new LowLevelError(error.message, error.config, error.code, error.response);
          reject(lowLevelError);
        }
      });

      if (cancelToken) {
        cancelToken.cancel = () => {
          hasCanceled = true;
          reject(new CancelError('Cancelled request'));
          source.cancel();
        };
      }

    });

  }

  private handleAsError(reject: (error?: any) => void, response: AxiosResponse) {
    if (this.getResponseIsJson(response)) {
      let error: Proto.Error = response.data;
      let backendError: BackendError = getTransientErrorFor(error);

      reject(backendError);
    } else {
      let backendError: BackendError = new InternalErrorBackendError(
        Proto.BackendErrorCode.GENERIC_ERROR,
        'The server responded with HTTP error status code ' + response.status + ' (' +
        (stringNullOrEmpty(response.statusText) ? 'unknown reason' : response.statusText) + ')',
        'InternalErrorBackendException', 500);

      reject(backendError);
    }
  }

  private getResponseIsJson(response: AxiosResponse): boolean {
    let contentType: string = response.headers['content-type'];
    return (!stringNullOrEmpty(contentType) && contentType.indexOf('application/json') == 0);
  }
}
