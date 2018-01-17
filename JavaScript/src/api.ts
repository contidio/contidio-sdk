import ApiClient, {CancelToken, CancelError} from "./api/apiClient";
import ApiEndpoint from "./api/apiEndpoint";
import {ApiEnvironment} from "./api/apiEnvironment";
import ApiRequest from "./api/apiRequest";
import AbstractApiRequest from './api/abstractApiRequest';
import SdkConstants from "./sdk/sdkConstants";
import {stringNullOrEmpty} from "./api/validator";
import {makeCancelable} from "./api/apiPromise";
import * as Long from "long";
import Proto from "./proto";

export {
  ApiClient,
  ApiEndpoint,
  ApiEnvironment,
  ApiRequest,
  SdkConstants,
  stringNullOrEmpty,
  makeCancelable,
  CancelToken,
  CancelError,
  Proto,
  AbstractApiRequest
};

export * from './errors/errors';

export function parseLong(value: Long | number | string | {low: number, high: number, unsigned: boolean}): Long {
  return Long.fromValue(value);
}

export function longToNumber(value: Long | number | string | {low: number, high: number, unsigned: boolean}): number {
  return parseLong(value).toNumber();
}

export function getEnumByString(enumObject: any, key: string): number {
  return enumObject[key];
}
