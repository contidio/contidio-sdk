export default class ApiConstants {
  public static readonly CONTIDIO_SDK_IDENTIFIER: string = '1.0-JS';

  // APIs

  public static readonly PUBLIC_API_PATH:string = '/api/v1/';

  public static readonly CHILDS_SUFFIX:string = 'childs/';

  public static readonly ENTITIES_API_PATH = ApiConstants.PUBLIC_API_PATH + 'entities/';

  public static readonly BRAND_API_PATH = ApiConstants.PUBLIC_API_PATH + 'brands/'
  public static readonly BRAND_API_BY_SUBDOMAIN_ID_PATH = ApiConstants.BRAND_API_PATH + 'bySubdomain/:id/';

  public static readonly BRAND_API_ID_PATH = ApiConstants.BRAND_API_PATH + ':id/';
  public static readonly BRAND_API_ID_CHILDS_PATH = ApiConstants.BRAND_API_ID_PATH + ApiConstants.CHILDS_SUFFIX;

  public static readonly FOLDER_API_PATH = ApiConstants.PUBLIC_API_PATH + 'folders/';
  public static readonly FOLDER_API_ID_PATH = ApiConstants.FOLDER_API_PATH + ':id/';
  public static readonly FOLDER_API_PATH_MULTI = ApiConstants.FOLDER_API_PATH + 'bulk/';
  public static readonly FOLDER_API_ID_CHILDS_PATH = ApiConstants.FOLDER_API_ID_PATH + ApiConstants.CHILDS_SUFFIX;

  public static readonly ASSET_API_PATH = ApiConstants.PUBLIC_API_PATH + 'assets/';
  public static readonly ASSET_API_ID_PATH = ApiConstants.ASSET_API_PATH + ':id/';
  public static readonly ASSET_API_PATH_MULTI = ApiConstants.ASSET_API_PATH + 'bulk/';

  public static readonly TRASH_API_PATH = ApiConstants.PUBLIC_API_PATH + 'trash/';
  public static readonly TRASH_API_ID_PATH = ApiConstants.TRASH_API_PATH + ':id/';
  public static readonly TRASH_API_ID_PATH_MULTI = ApiConstants.TRASH_API_ID_PATH + 'bulk/';
  public static readonly TRASH_API_ID_CHILDS_PATH = ApiConstants.TRASH_API_ID_PATH + ApiConstants.CHILDS_SUFFIX;

  public static readonly JOBS_API_PATH = ApiConstants.PUBLIC_API_PATH + '_jobs/';
  public static readonly JOBS_API_ID_PATH = ApiConstants.JOBS_API_PATH + ':id/';
  public static readonly JOBS_API_ID_CHILDS_PATH = ApiConstants.JOBS_API_ID_PATH + ApiConstants.CHILDS_SUFFIX;

  public static readonly JOB_API_PATH = ApiConstants.PUBLIC_API_PATH + 'jobs/';
  public static readonly JOB_API_ID_PATH = ApiConstants.JOB_API_PATH + ':id/';
  public static readonly JOB_API_ID_CHILDS_PATH = ApiConstants.JOB_API_ID_PATH + ApiConstants.CHILDS_SUFFIX;

  public static readonly PARTICIPATIONS_API_PATH = ApiConstants.PUBLIC_API_PATH + '_participations/';
  public static readonly PARTICIPATIONS_API_ID_PATH = ApiConstants.PARTICIPATIONS_API_PATH + ':id/';
  public static readonly PARTICIPATIONS_API_ID_CHILDS_PATH = ApiConstants.PARTICIPATIONS_API_ID_PATH + ApiConstants.CHILDS_SUFFIX;

  public static readonly PARTICIPATION_API_PATH = ApiConstants.PUBLIC_API_PATH + 'participations/';
  public static readonly PARTICIPATION_API_ID_PATH = ApiConstants.PARTICIPATION_API_PATH + ':id/';
  public static readonly PARTICIPATION_API_ID_CHILDS_PATH = ApiConstants.PARTICIPATION_API_ID_PATH + ApiConstants.CHILDS_SUFFIX;

  public static readonly PROJECTS_API_PATH = ApiConstants.PUBLIC_API_PATH + '_projects/';
  public static readonly PROJECTS_API_ID_PATH = ApiConstants.PROJECTS_API_PATH + ':id/';
  public static readonly PROJECTS_API_ID_CHILDS_PATH = ApiConstants.PROJECTS_API_ID_PATH + ApiConstants.CHILDS_SUFFIX;

  public static readonly PROJECT_API_PATH = ApiConstants.PUBLIC_API_PATH + 'projects/';
  public static readonly PROJECT_API_ID_PATH = ApiConstants.PROJECT_API_PATH + ':id/';

  public static readonly ANONYMOUS_ACCESS_SUFFIX:string = 'anonymous/';

  // query

  public static readonly GET_PARAMETER_QUERY_START_INDEX: string = 'startIndex';
  public static readonly GET_PARAMETER_QUERY_COUNT: string = 'count';
  public static readonly GET_PARAMETER_QUERY_ORDER_BY: string = 'orderBy';
  public static readonly GET_PARAMETER_QUERY_ORDER_DIRECTION: string = 'orderDirection';
  public static readonly GET_PARAMETER_QUERY_PUBLISHING_STATE: string = 'publishingState';
  public static readonly GET_PARAMETER_QUERY_TERMS: string = 'terms';
  public static readonly GET_PARAMETER_QUERY_TERMS_AND: string = 'termsAnd';
  public static readonly GET_PARAMETER_QUERY_RECURSIVE: string = 'recursive';
  public static readonly GET_PARAMETER_QUERY_LOCALE: string = 'locale';
  public static readonly GET_PARAMETER_QUERY_TYPES: string = 'types';

  public static readonly GET_PARAMETER_QUERY_BINARY_TYPES: string = 'binaryTypes';
  public static readonly GET_PARAMETER_QUERY_LOCALES: string = 'locales';
  public static readonly GET_PARAMETER_QUERY_DIMENSIONS: string = 'dimensions';
  public static readonly GET_PARAMETER_QUERY_UPLOADED: string = 'uploaded';
  public static readonly GET_PARAMETER_QUERY_ORIENTATIONS: string = 'orientations';

  public static readonly GET_PARAMETER_QUERY_VIDEO_FORMATS: string = 'videoFormats';
  public static readonly GET_PARAMETER_QUERY_VIDEO_ASPECT_RATIOS: string = 'videoAspectRatios';

  public static readonly GET_PARAMETER_QUERY_DURATIONS: string = 'durations';

  public static readonly GET_PARAMETER_QUERY_PAGE_COUNTS: string = 'pageCounts';

  public static readonly GET_PARAMETER_QUERY_SOURCE: string = 'source';

  public static readonly GET_PARAMETER_QUERY_LICENSE_IDS: string = 'licenseIds';
  public static readonly GET_PARAMETER_QUERY_MULTI_PARENT_IDS: string = 'multiParentIds';

  public static readonly GET_PARAMETER_QUERY_INCLUDE_CONTIDIO: string = 'include';

  public static readonly GET_PARAMETER_QUERY_PROJECT_STATES: string = 'projectStates';

  public static readonly GET_PARAMETER_QUERY_CREDIT_TRANSACTION_TYPES: string = 'creditTransactionTypes';

  public static readonly GET_PARAMETER_QUERY_FROM_CREATED_TIMESTAMP: string = 'fromCreated';
  public static readonly GET_PARAMETER_QUERY_TO_CREATED_TIMESTAMP: string = 'toCreated';

  public static readonly GET_PARAMETER_QUERY_FROM_LAST_UPDATED_TIMESTAMP: string = 'fromLastUpdated';
  public static readonly GET_PARAMETER_QUERY_TO_LAST_UPDATED_TIMESTAMP: string = 'toLastUpdated';

  public static readonly GET_PARAMETER_QUERY_FROM_LAST_COMMITTED_TIMESTAMP: string = 'fromLastCommitted';
  public static readonly GET_PARAMETER_QUERY_TO_LAST_COMMITTED_TIMESTAMP: string = 'toLastCommitted';

  public static readonly GET_PARAMETER_QUERY_AUTOCOMPLETED_ENTITY_TYPES: string = 'autocompletedEntityTypes';

  public static readonly GET_PARAMETER_QUERY_BRAND_TYPES: string = 'brandTypes';

  public static readonly GET_PARAMETER_QUERY_ASSET_TYPES: string = 'assetTypes';

  public static readonly GET_PARAMETER_QUERY_JOB_TYPES: string = 'jobTypes';
  public static readonly GET_PARAMETER_QUERY_JOB_STATES: string = 'jobStates';
  public static readonly GET_PARAMETER_QUERY_PARTICIPATION_STATES: string = 'participationStates';

  public static readonly GET_PARAMETER_QUERY_NOTIFICATION_TYPES: string = 'notificationTypes';
  public static readonly GET_PARAMETER_QUERY_NOTIFICATION_STATES: string = 'notificationStates';

  public static readonly GET_PARAMETER_QUERY_CONTENT_CATEGORIES: string = 'contentCategories';

  public static readonly GET_PARAMETER_QUERY_REVIEW_STATES: string = "reviewStates";

  public static readonly GET_PARAMETER_QUERY_INCLUDE_INACTIVE: string = 'includeInactive';

  // others

  public static readonly GET_PARAMETER_INCLUSION_FLAGS: string = 'flags';

  public static readonly REQUEST_HEADER_BRAND_UUID: string = 'X-Brand-Uuid';
  public static readonly REQUEST_HEADER_WEBSOCKET_ADDRESS: string = 'X-WS-Addr';
  public static readonly REQUEST_HEADER_TRANSACTION_UUID: string = 'X-T-Uuid';
  public static readonly REQUEST_HEADER_CONTIDIO_SDK: string = 'X-Contidio-Sdk';
  public static readonly REQUEST_HEADER_SUBSCRIPTION_KEY: string = 'Ocp-Apim-Subscription-Key';
  public static readonly REQUEST_HEADER_INSTANCE_ID: string = 'X-Instance-Id';
}
