import ApiClient, {ApiMethod, CancelToken} from "./apiClient";
import ApiConstants from "./apiConstants";
import ApiEndpoint from "./apiEndpoint";
import {stringNullOrEmpty} from "./validator";
import Proto from "../proto";
import {erroneousPromise} from "./apiPromise";
import {NoAnonymousAccessError} from "../errors/errors";

import Long = require('long');

const DEFAULT_TIMEOUT = 10000;

export interface ProgressHandler {
  (progressEvent: any): void;
}

export default class AbstractApiRequest {

  private _client: ApiClient;

  private _anonymous: boolean;
  private _flags: Long;
  private _timeout: number;
  private _queryData: Proto.QueryData = {};
  private _cancelToken: CancelToken = new CancelToken;
  private _brandUuid: string;
  private _progressHandler: ProgressHandler;

  private _transactionUuid: string;

  protected constructor(client: ApiClient, brandUuid: string) {
    this._client = client;

    this._anonymous = false;
    this._flags = Long.fromNumber(0);
    this._timeout = DEFAULT_TIMEOUT;
    this._progressHandler = null;
    this._brandUuid = brandUuid;

    this._transactionUuid = this.guid();
  }

  protected guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

  get transactionUuid() {
    return this._transactionUuid;
  }

  set transactionUuid(transactionUuid: string) {
    this._transactionUuid = transactionUuid;
  }

  setTransactionUuid(transactionUuid: string): this {
    this.transactionUuid = transactionUuid;

    return this;
  }

  get flags() {
    return this._flags;
  }

  set flags(flags: Long) {
    this._flags = flags;
  }

  setFlags(flags: Long): this {
    this.flags = flags;

    return this;
  }

  get anonymous(): boolean {
    return this._anonymous;
  }

  set anonymous(anonymous: boolean) {
    this._anonymous = anonymous;
  }

  setAnonymous(anonymous: boolean): this {
    this.anonymous = anonymous;

    return this;
  }

  get timeout(): number {
    return this._timeout;
  }

  set timeout(timeout: number) {
    this._timeout = timeout;
  }

  setTimeout(timeout: number): this {
    this.timeout = timeout;

    return this;
  }

  get progressHandler(): ProgressHandler {
    return this._progressHandler;
  }

  set progressHandler(progressHandler: ProgressHandler) {
    this._progressHandler = progressHandler;
  }

  setProgressHandler(progressHandler: ProgressHandler): this {
    this.progressHandler = progressHandler;

    return this;
  }

  get queryData(): Proto.QueryData {
    return this._queryData;
  }

  set queryData(queryData: Proto.QueryData) {
    this._queryData = queryData;
  }

  setQueryData(queryData: Proto.QueryData): this {
    this.queryData = queryData;

    return this;
  }

  get cancelToken(): any {
    return this._cancelToken;
  }

  set cancelToken(cancelToken: any) {
    this._cancelToken = cancelToken;
  }

  setCancelToken(cancelToken: any): this {
    this.cancelToken = cancelToken;

    return this;
  }

  protected replaceUuid(apiPath: string, uuid: string): string {
    return stringNullOrEmpty(uuid) ? apiPath : apiPath.replace(':id', uuid);
  }

  protected replaceUserGroupUuid(apiPath: string, userGroupUuid: string): string {
    return stringNullOrEmpty(userGroupUuid) ? apiPath : apiPath.replace(':groupId', userGroupUuid);
  }

  protected replaceLicenseUuid(apiPath: string, licenseUuid: string) {
    return stringNullOrEmpty(licenseUuid) ? apiPath : apiPath.replace(':licenseId', licenseUuid);
  }

  protected replaceCollectedEntityUuid(apiPath: string, collectedEntityUuid: string) {
    return stringNullOrEmpty(collectedEntityUuid) ? apiPath : apiPath.replace(':collectedEntityId', collectedEntityUuid);
  }

  protected replaceProjectUuid(apiPath: string, projectUuid: string) {
    return stringNullOrEmpty(projectUuid) ? apiPath : apiPath.replace(':projectId', projectUuid);
  }

  protected replaceShoppingCartUuid(apiPath: string, shoppingCartUuid: string) {
    return stringNullOrEmpty(shoppingCartUuid) ? apiPath : apiPath.replace(':shoppingCartId', shoppingCartUuid);
  }

  protected replaceCreditTransactionUuid(apiPath: string, creditTransactionUuid: string) {
    return stringNullOrEmpty(creditTransactionUuid) ? apiPath : apiPath.replace(':creditTransactionId', creditTransactionUuid);
  }

  protected replaceProviderId(apiPath: string, provider: Proto.ExternalContentProvider) {
    return provider == null ? apiPath : apiPath.replace(':providerId', provider.toString());
  }

  protected replaceProductId(apiPath: string, productId: string) {
    return stringNullOrEmpty(productId) ? apiPath : apiPath.replace(':productId', productId);
  }

  protected createGetParameter(name: string, value: any) {

    if (value != null) {
      if (typeof(value) === 'number') {
        return '&' + name + '=' + value;
      }

      if (typeof(value) === 'string' && !stringNullOrEmpty(value)) {
        return '&' + name + '=' + encodeURIComponent(value);
      }

      if (typeof(value) === 'boolean') {
        return '&' + name + '=' + (value ? 1 : 0);
      }

      if (value instanceof Long) {
        return '&' + name + '=' + value.toString();
      }

      if (value instanceof Array && value.length > 0) {
        return '&' + name + '=' +
          value.map((arrValue) => {
            if (typeof(arrValue) === 'string' && !stringNullOrEmpty(arrValue)) {
              return encodeURIComponent(arrValue);
            }

            return arrValue;
          }).join(',');
      }
    }

    return '';

  }

  buildApiUrl(apiPath: string, uuid: string, supportsAnonymous: boolean) {

    let url: string = this.replaceUuid(apiPath, uuid);

    if (this.anonymous || stringNullOrEmpty(this._client.bearerToken)) {
      if (supportsAnonymous) {
        url += ApiConstants.ANONYMOUS_ACCESS_SUFFIX;
      } else {
        throw new NoAnonymousAccessError();
      }
    }

    url += '?' + ApiConstants.GET_PARAMETER_INCLUSION_FLAGS + '=' + this.flags.toString();

    if (this.queryData instanceof Object) {

      url += this.createGetParameter(ApiConstants.GET_PARAMETER_QUERY_START_INDEX, this.queryData.startIndex);
      url += this.createGetParameter(ApiConstants.GET_PARAMETER_QUERY_COUNT, this.queryData.count);
      url += this.createGetParameter(ApiConstants.GET_PARAMETER_QUERY_ORDER_BY, this.queryData.orderBy);
      url += this.createGetParameter(ApiConstants.GET_PARAMETER_QUERY_ORDER_DIRECTION, this.queryData.orderDirection);
      url += this.createGetParameter(ApiConstants.GET_PARAMETER_QUERY_PUBLISHING_STATE, this.queryData.publishingState);
      url += this.createGetParameter(ApiConstants.GET_PARAMETER_QUERY_TERMS, this.queryData.terms);
      url += this.createGetParameter(ApiConstants.GET_PARAMETER_QUERY_TERMS_AND, this.queryData.termsAnd);
      url += this.createGetParameter(ApiConstants.GET_PARAMETER_QUERY_RECURSIVE, this.queryData.recursive);
      url += this.createGetParameter(ApiConstants.GET_PARAMETER_QUERY_LOCALE, this.queryData.locale);
      url += this.createGetParameter(ApiConstants.GET_PARAMETER_QUERY_TYPES, this.queryData.type);
      url += this.createGetParameter(ApiConstants.GET_PARAMETER_QUERY_BINARY_TYPES, this.queryData.binaryType);
      url += this.createGetParameter(ApiConstants.GET_PARAMETER_QUERY_LOCALES, this.queryData.locales);
      url += this.createGetParameter(ApiConstants.GET_PARAMETER_QUERY_DIMENSIONS, this.queryData.dimension);
      url += this.createGetParameter(ApiConstants.GET_PARAMETER_QUERY_UPLOADED, this.queryData.uploaded);
      url += this.createGetParameter(ApiConstants.GET_PARAMETER_QUERY_ORIENTATIONS, this.queryData.orientation);
      url += this.createGetParameter(ApiConstants.GET_PARAMETER_QUERY_VIDEO_FORMATS, this.queryData.videoFormat);
      url += this.createGetParameter(ApiConstants.GET_PARAMETER_QUERY_VIDEO_ASPECT_RATIOS, this.queryData.videoAspectRatio);
      url += this.createGetParameter(ApiConstants.GET_PARAMETER_QUERY_DURATIONS, this.queryData.duration);
      url += this.createGetParameter(ApiConstants.GET_PARAMETER_QUERY_PAGE_COUNTS, this.queryData.pageCount);
      url += this.createGetParameter(ApiConstants.GET_PARAMETER_QUERY_SOURCE, this.queryData.source);
      url += this.createGetParameter(ApiConstants.GET_PARAMETER_QUERY_LICENSE_IDS, this.queryData.licenseId);
      url += this.createGetParameter(ApiConstants.GET_PARAMETER_QUERY_MULTI_PARENT_IDS, this.queryData.multiParentId);
      url += this.createGetParameter(ApiConstants.GET_PARAMETER_QUERY_INCLUDE_CONTIDIO, this.queryData.includeContidio);
      url += this.createGetParameter(ApiConstants.GET_PARAMETER_QUERY_PROJECT_STATES, this.queryData.projectState);
      url += this.createGetParameter(ApiConstants.GET_PARAMETER_QUERY_CREDIT_TRANSACTION_TYPES, this.queryData.creditTransactionType);
      url += this.createGetParameter(ApiConstants.GET_PARAMETER_QUERY_FROM_CREATED_TIMESTAMP, this.queryData.fromCreatedTimestamp);
      url += this.createGetParameter(ApiConstants.GET_PARAMETER_QUERY_TO_CREATED_TIMESTAMP, this.queryData.toCreatedTimestamp);
      url += this.createGetParameter(ApiConstants.GET_PARAMETER_QUERY_FROM_LAST_UPDATED_TIMESTAMP, this.queryData.fromLastUpdatedTimestamp);
      url += this.createGetParameter(ApiConstants.GET_PARAMETER_QUERY_TO_LAST_UPDATED_TIMESTAMP, this.queryData.toLastUpdatedTimestamp);
      url += this.createGetParameter(ApiConstants.GET_PARAMETER_QUERY_FROM_LAST_COMMITTED_TIMESTAMP, this.queryData.fromLastCommittedTimestamp);
      url += this.createGetParameter(ApiConstants.GET_PARAMETER_QUERY_TO_LAST_COMMITTED_TIMESTAMP, this.queryData.toLastCommittedTimestamp);
      url += this.createGetParameter(ApiConstants.GET_PARAMETER_QUERY_AUTOCOMPLETED_ENTITY_TYPES, this.queryData.autocompletedEntityType);
      url += this.createGetParameter(ApiConstants.GET_PARAMETER_QUERY_BRAND_TYPES, this.queryData.brandType);
      url += this.createGetParameter(ApiConstants.GET_PARAMETER_QUERY_ASSET_TYPES, this.queryData.assetType);
      url += this.createGetParameter(ApiConstants.GET_PARAMETER_QUERY_JOB_TYPES, this.queryData.jobType);
      url += this.createGetParameter(ApiConstants.GET_PARAMETER_QUERY_JOB_STATES, this.queryData.jobState);
      url += this.createGetParameter(ApiConstants.GET_PARAMETER_QUERY_PARTICIPATION_STATES, this.queryData.participationState);
      url += this.createGetParameter(ApiConstants.GET_PARAMETER_QUERY_NOTIFICATION_TYPES, this.queryData.notificationType);
      url += this.createGetParameter(ApiConstants.GET_PARAMETER_QUERY_NOTIFICATION_STATES, this.queryData.notificationState);
      url += this.createGetParameter(ApiConstants.GET_PARAMETER_QUERY_CONTENT_CATEGORIES, this.queryData.contentCategory);
      url += this.createGetParameter(ApiConstants.GET_PARAMETER_QUERY_REVIEW_STATES, this.queryData.reviewState);
      url += this.createGetParameter(ApiConstants.GET_PARAMETER_QUERY_INCLUDE_INACTIVE, this.queryData.includeInactive);
    }

    return url;

  }

  protected process(apiManagement: boolean, endpoint: ApiEndpoint, apiPath: string, uuid: string, inputJson: Proto.Message,
                    binaries: File[], method: ApiMethod, supportsAnonymous: boolean) {
    let url: string;

    // set default locale
    if (!this.queryData.locale && this._client.locale) {
      this.queryData.locale = this._client.locale;
    }

    try {
      url = this.buildApiUrl(apiPath, uuid, supportsAnonymous);
    } catch (error) {
      return erroneousPromise(error);
    }

    return this._client.process(apiManagement, endpoint, this._brandUuid, this.transactionUuid,
      url, inputJson, binaries, method, this.timeout, this.cancelToken, this.progressHandler);

  }

  protected getNonUuidApiPath(entityType: Proto.EntityType): string {
    let apiPath: string = null;

    switch (entityType) {
      case Proto.EntityType.BRAND:
        apiPath = ApiConstants.BRAND_API_PATH;
        break;
      case Proto.EntityType.FOLDER:
        apiPath = ApiConstants.FOLDER_API_PATH;
        break;
      case Proto.EntityType.ASSET:
        apiPath = ApiConstants.ASSET_API_PATH;
        break;
      case Proto.EntityType.TRASH:
        apiPath = ApiConstants.TRASH_API_PATH;
        break;
      case Proto.EntityType.JOBS:
        apiPath = ApiConstants.JOBS_API_PATH;
        break;
      case Proto.EntityType.JOB:
        apiPath = ApiConstants.JOB_API_PATH;
        break;
      case Proto.EntityType.PARTICIPATIONS:
        apiPath = ApiConstants.PARTICIPATIONS_API_PATH;
        break;
      case Proto.EntityType.PARTICIPATION:
        apiPath = ApiConstants.PARTICIPATION_API_PATH;
        break;
      case Proto.EntityType.PROJECTS:
        apiPath = ApiConstants.PROJECTS_API_PATH;
        break;
      case Proto.EntityType.PROJECT:
        apiPath = ApiConstants.PROJECT_API_PATH;
        break;
      default:
        throw new Error('This entity type is not supported');
    }

    return apiPath;
  }

  protected getUuidApiPath(entityType: Proto.EntityType): string {
    let apiPath: string = null;

    switch (entityType) {
      case Proto.EntityType.BRAND:
        apiPath = ApiConstants.BRAND_API_ID_PATH;
        break;
      case Proto.EntityType.FOLDER:
        apiPath = ApiConstants.FOLDER_API_ID_PATH;
        break;
      case Proto.EntityType.ASSET:
        apiPath = ApiConstants.ASSET_API_ID_PATH;
        break;
      case Proto.EntityType.TRASH:
        apiPath = ApiConstants.TRASH_API_ID_PATH;
        break;
      case Proto.EntityType.JOBS:
        apiPath = ApiConstants.JOBS_API_ID_PATH;
        break;
      case Proto.EntityType.JOB:
        apiPath = ApiConstants.JOB_API_ID_PATH;
        break;
      case Proto.EntityType.PARTICIPATIONS:
        apiPath = ApiConstants.PARTICIPATIONS_API_ID_PATH;
        break;
      case Proto.EntityType.PARTICIPATION:
        apiPath = ApiConstants.PARTICIPATION_API_ID_PATH;
        break;
      case Proto.EntityType.PROJECTS:
        apiPath = ApiConstants.PROJECTS_API_ID_PATH;
        break;
      case Proto.EntityType.PROJECT:
        apiPath = ApiConstants.PROJECT_API_ID_PATH;
        break;
      default:
        throw new Error('This entity type is not supported');
    }

    return apiPath;
  }

  protected getChildsApiPath(entityType: Proto.EntityType): string {
    let apiPath: string = null;

    switch (entityType) {
      case Proto.EntityType.BRAND:
        apiPath = ApiConstants.BRAND_API_ID_CHILDS_PATH;
        break;
      case Proto.EntityType.FOLDER:
        apiPath = ApiConstants.FOLDER_API_ID_CHILDS_PATH;
        break;
      case Proto.EntityType.TRASH:
        apiPath = ApiConstants.TRASH_API_ID_CHILDS_PATH;
        break;
      case Proto.EntityType.JOBS:
        apiPath = ApiConstants.JOBS_API_ID_CHILDS_PATH;
        break;
      case Proto.EntityType.JOB:
        apiPath = ApiConstants.JOB_API_ID_CHILDS_PATH;
        break;
      case Proto.EntityType.PARTICIPATIONS:
        apiPath = ApiConstants.PARTICIPATIONS_API_ID_CHILDS_PATH;
        break;
      case Proto.EntityType.PARTICIPATION:
        apiPath = ApiConstants.PARTICIPATION_API_ID_CHILDS_PATH;
        break;
      case Proto.EntityType.PROJECTS:
        apiPath = ApiConstants.PROJECTS_API_ID_CHILDS_PATH;
        break;
      default:
        throw new Error('This entity type is not supported');
    }

    return apiPath;
  }

  protected getMultiApiPath(entityType: Proto.EntityType): string {
    let apiPath: string = null;

    switch (entityType) {
      case Proto.EntityType.FOLDER:
        apiPath = ApiConstants.FOLDER_API_PATH_MULTI;
        break;
      case Proto.EntityType.ASSET:
        apiPath = ApiConstants.ASSET_API_PATH_MULTI;
        break;
      case Proto.EntityType.TRASH:
        apiPath = ApiConstants.TRASH_API_ID_PATH_MULTI;
        break;
      default:
        throw new Error('This entity type is not supported');
    }

    return apiPath;
  }

}
