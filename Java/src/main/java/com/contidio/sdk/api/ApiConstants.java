package com.contidio.sdk.api;

public class ApiConstants {
	public static final String CONTIDIO_SDK_IDENTIFIER = "1.0-Java";
	
	// APIs
	
	public static final String PUBLIC_API_PATH = "/api/v1/";

	public static final String CHILDS_SUFFIX = "childs/";
	
	public static final String ENTITIES_API_PATH = PUBLIC_API_PATH + "entities/";
	
	public static final String BRAND_API_PATH = PUBLIC_API_PATH + "brands/";
	public static final String BRAND_API_BY_SUBDOMAIN_ID_PATH = BRAND_API_PATH + "bySubdomain/:id/";
	
	public static final String BRAND_API_ID_PATH = BRAND_API_PATH + ":id/";		
	public static final String BRAND_API_ID_CHILDS_PATH = BRAND_API_ID_PATH + CHILDS_SUFFIX;
	public static final String BRAND_API_ID_ADMIN_USER_GROUP_PATH = BRAND_API_ID_PATH + "adminUserGroups/";
	public static final String BRAND_API_ID_END_USER_GROUP_PATH = BRAND_API_ID_PATH + "endUserGroups/";
	public static final String BRAND_API_ID_CREDIT_TRANSACTIONS_PATH = BRAND_API_ID_PATH + "creditTransactions/";
	public static final String BRAND_API_ID_CREDIT_TRANSACTIONS_CREATE_DOWNLOAD_TASK_PATH = BRAND_API_ID_CREDIT_TRANSACTIONS_PATH + "createDownloadTask/";
	public static final String BRAND_API_ID_CREDIT_TRANSACTIONS_ID_PATH = BRAND_API_ID_CREDIT_TRANSACTIONS_PATH + ":creditTransactionId/";
    public static final String BRAND_API_ID_CREDIT_TRANSACTIONS_ID_CREATE_DOWNLOAD_TASK_PATH = BRAND_API_ID_CREDIT_TRANSACTIONS_ID_PATH + "createDownloadTask/";
    public static final String BRAND_API_ID_CREDIT_TRANSACTIONS_ID_CHILDS_PATH = BRAND_API_ID_CREDIT_TRANSACTIONS_ID_PATH + CHILDS_SUFFIX;
	public static final String BRAND_API_ID_ADMIN_USER_GROUP_ID_PATH = BRAND_API_ID_ADMIN_USER_GROUP_PATH + ":groupId/";
	public static final String BRAND_API_ID_ADMIN_USER_GROUP_ID_USERS_PATH = BRAND_API_ID_ADMIN_USER_GROUP_ID_PATH + "users/";
	public static final String BRAND_API_ID_END_USER_GROUP_ID_PATH = BRAND_API_ID_END_USER_GROUP_PATH + ":groupId/";
	public static final String BRAND_API_ID_END_USER_GROUP_ID_USERS_PATH = BRAND_API_ID_END_USER_GROUP_ID_PATH + "users/";
	public static final String BRAND_API_ID_END_USER_GROUP_ID_BRANDS_PATH = BRAND_API_ID_END_USER_GROUP_ID_PATH + "brands/";
	public static final String BRAND_API_ID_END_USER_GROUP_ID_ACCESS_REQUESTS_PATH = BRAND_API_ID_END_USER_GROUP_ID_PATH + "accessRequests/";
	public static final String BRAND_API_ID_PURCHASE_CREDITS_REQUESTS_PATH = BRAND_API_ID_PATH + "purchaseCreditsRequests/";
	public static final String BRAND_API_ID_LICENSE_PATH = BRAND_API_ID_PATH + "licenses/";
	public static final String BRAND_API_ID_LICENSE_ID_PATH = BRAND_API_ID_LICENSE_PATH + ":licenseId/";
	public static final String BRAND_API_ID_PROJECT_PATH = BRAND_API_ID_PATH + "projects/";
	public static final String BRAND_API_ID_CREDIT_BALANCE_PATH = BRAND_API_ID_PATH + "creditBalance/";
	public static final String BRAND_API_ID_CREDIT_BALANCE_COST_CALCULATION_PATH = BRAND_API_ID_PATH + "creditBalanceCostCalculation/";
	public static final String BRAND_API_ID_SEND_CONTACT_FORM_PATH = BRAND_API_ID_PATH + "sendContactForm/";
	public static final String BRAND_API_ID_NOTIFICATIONS_PATH = BRAND_API_ID_PATH + "notifications/"; 
	public static final String BRAND_API_ID_EXTERNAL_CONTENT_PROVIDERS_PATH = BRAND_API_ID_PATH + "externalContentProviders/";
	public static final String BRAND_API_ID_EXTERNAL_CONTENT_PROVIDERS_ID_PATH = BRAND_API_ID_EXTERNAL_CONTENT_PROVIDERS_PATH + ":providerId/";
    public static final String BRAND_API_ID_EXTERNAL_CONTENT_PROVIDERS_ID_SETUP_PATH = BRAND_API_ID_EXTERNAL_CONTENT_PROVIDERS_ID_PATH + "setup/";
    public static final String BRAND_API_ID_EXTERNAL_CONTENT_PROVIDERS_ID_CONFIGURE_PATH = BRAND_API_ID_EXTERNAL_CONTENT_PROVIDERS_ID_PATH + "configure/";
    public static final String BRAND_API_ID_EXTERNAL_CONTENT_PROVIDERS_ID_REFRESH_PATH = BRAND_API_ID_EXTERNAL_CONTENT_PROVIDERS_ID_PATH + "refresh/";
    public static final String BRAND_API_ID_EXTERNAL_CONTENT_PROVIDERS_ID_PRODUCTS_PATH = BRAND_API_ID_EXTERNAL_CONTENT_PROVIDERS_ID_PATH + "products/";
    public static final String BRAND_API_ID_EXTERNAL_CONTENT_PROVIDERS_ID_PRODUCTS_ID_PATH = BRAND_API_ID_EXTERNAL_CONTENT_PROVIDERS_ID_PRODUCTS_PATH + ":productId/";    
    
	public static final String FOLDER_API_PATH = PUBLIC_API_PATH + "folders/";
	public static final String FOLDER_API_ID_PATH = FOLDER_API_PATH + ":id/";	
	public static final String FOLDER_API_PATH_MULTI = FOLDER_API_PATH + "bulk/";
	public static final String FOLDER_API_ID_CHILDS_PATH = FOLDER_API_ID_PATH + CHILDS_SUFFIX;
	
	public static final String ASSET_API_PATH = PUBLIC_API_PATH + "assets/";
	public static final String ASSET_API_ID_PATH = ASSET_API_PATH + ":id/";
	public static final String ASSET_API_ID_CREATE_DOWNLOAD_TASK_PATH = ASSET_API_ID_PATH + "createDownloadTask/";
	public static final String ASSET_API_PATH_MULTI = ASSET_API_PATH + "bulk/";
	
	public static final String TRASH_API_PATH = PUBLIC_API_PATH + "trash/";
	public static final String TRASH_API_ID_PATH = TRASH_API_PATH + ":id/";	
	public static final String TRASH_API_ID_PATH_MULTI = TRASH_API_ID_PATH + "bulk/";
	public static final String TRASH_API_ID_CHILDS_PATH = TRASH_API_ID_PATH + CHILDS_SUFFIX;
	
	public static final String JOBS_API_PATH = PUBLIC_API_PATH + "_jobs/";
	public static final String JOBS_API_ID_PATH = JOBS_API_PATH + ":id/";
	public static final String JOBS_API_ID_CHILDS_PATH = JOBS_API_ID_PATH + CHILDS_SUFFIX;
	
	public static final String JOB_API_PATH = PUBLIC_API_PATH + "jobs/";
	public static final String JOB_API_ID_PATH = JOB_API_PATH + ":id/";		
	public static final String JOB_API_ID_CHILDS_PATH = JOB_API_ID_PATH + CHILDS_SUFFIX;
	public static final String JOB_API_ID_PARTICIPATE_PATH = JOB_API_ID_PATH + "participate/";		
	public static final String JOB_API_ID_CLOSE_PATH = JOB_API_ID_PATH + "close/";	
	public static final String JOB_API_ID_APPLY_PATH = JOB_API_ID_PATH + "apply/";
	
	public static final String PARTICIPATIONS_API_PATH = PUBLIC_API_PATH + "_participations/";
	public static final String PARTICIPATIONS_API_ID_PATH = PARTICIPATIONS_API_PATH + ":id/";
	public static final String PARTICIPATIONS_API_ID_CHILDS_PATH = PARTICIPATIONS_API_ID_PATH + CHILDS_SUFFIX;
	
	public static final String PARTICIPATION_API_PATH = PUBLIC_API_PATH + "participations/";
	public static final String PARTICIPATION_API_ID_PATH = PARTICIPATION_API_PATH + ":id/";
	public static final String PARTICIPATION_API_ID_CHILDS_PATH = PARTICIPATION_API_ID_PATH + CHILDS_SUFFIX;
	public static final String PARTICIPATION_API_ID_SUBMIT_PATH = PARTICIPATION_API_ID_PATH + "submit/";
	public static final String PARTICIPATION_API_ID_REJECT_PATH = PARTICIPATION_API_ID_PATH + "reject/";
	public static final String PARTICIPATION_API_ID_ACCEPT_PATH = PARTICIPATION_API_ID_PATH + "accept/";
	
	public static final String PROJECTS_API_PATH = PUBLIC_API_PATH + "_projects/";
	public static final String PROJECTS_API_ID_PATH = PROJECTS_API_PATH + ":id/";
	public static final String PROJECTS_API_ID_CHILDS_PATH = PROJECTS_API_ID_PATH + CHILDS_SUFFIX;
	
	public static final String PROJECT_API_PATH = PUBLIC_API_PATH + "projects/";
	public static final String PROJECT_API_ID_PATH = PROJECT_API_PATH + ":id/";	
	public static final String PROJECT_API_ID_COLLECTED_ENTITIES_PATH = PROJECT_API_ID_PATH + "collectedEntities/";
	public static final String PROJECT_API_ID_COLLECTED_ENTITIES_ACQUIRED_PATH = PROJECT_API_ID_PATH + "acquiredCollectedEntities/";
	public static final String PROJECT_API_ID_COLLECTED_ENTITIES_NOT_ACQUIRED_PATH = PROJECT_API_ID_PATH + "notAcquiredCollectedEntities/";
	public static final String PROJECT_API_ID_COLLECTED_ENTITIES_PATH_MULTI = PROJECT_API_ID_COLLECTED_ENTITIES_PATH + "bulk/";
	public static final String PROJECT_API_ID_COLLECTED_ENTITIES_COPY_PATH = PROJECT_API_ID_COLLECTED_ENTITIES_PATH + "copyToShoppingCart/";
	public static final String PROJECT_API_ID_COLLECTED_ENTITIES_COPY_PATH_MULTI = PROJECT_API_ID_COLLECTED_ENTITIES_COPY_PATH + "bulk/";
	public static final String PROJECT_API_ID_COLLECTED_ENTITIES_COPY_PATH_ALL = PROJECT_API_ID_COLLECTED_ENTITIES_COPY_PATH + "all/";
	public static final String PROJECT_API_ID_COLLECTED_ENTITIES_COPY_ID_PATH = PROJECT_API_ID_COLLECTED_ENTITIES_COPY_PATH + ":shoppingCartId/";
	public static final String PROJECT_API_ID_COLLECTED_ENTITIES_COPY_ID_PATH_MULTI = PROJECT_API_ID_COLLECTED_ENTITIES_COPY_ID_PATH + "bulk/";
	public static final String PROJECT_API_ID_COLLECTED_ENTITIES_COPY_ID_PATH_ALL = PROJECT_API_ID_COLLECTED_ENTITIES_COPY_ID_PATH_MULTI + "all/";
	
	public static final String SHOPPING_CART_API_PATH = PUBLIC_API_PATH + "shoppingCarts/";
	public static final String SHOPPING_CART_API_ID_PATH = SHOPPING_CART_API_PATH + ":id/";	
	public static final String SHOPPING_CART_API_COLLECTED_ENTITIES_PATH = SHOPPING_CART_API_PATH + "collectedEntities/";
	public static final String SHOPPING_CART_API_COLLECTED_ENTITIES_PATH_MULTI = SHOPPING_CART_API_COLLECTED_ENTITIES_PATH + "bulk/";
	public static final String SHOPPING_CART_API_ID_COLLECTED_ENTITIES_PATH = SHOPPING_CART_API_ID_PATH + "collectedEntities/";
	public static final String SHOPPING_CART_API_ID_COLLECTED_ENTITIES_PATH_MULTI = SHOPPING_CART_API_ID_COLLECTED_ENTITIES_PATH + "bulk/";
	public static final String SHOPPING_CART_API_SUBMIT_TO_BRAND_PATH = SHOPPING_CART_API_PATH + "submitToBrand/";
	public static final String SHOPPING_CART_API_ID_REJECT_ACQUISITION_PATH = SHOPPING_CART_API_ID_PATH + "rejectAcquisition/";
	public static final String SHOPPING_CART_API_MOVE_TO_PROJECT_PATH = SHOPPING_CART_API_PATH + "moveToProject/";
	public static final String SHOPPING_CART_API_ID_MOVE_TO_PROJECT_PATH = SHOPPING_CART_API_ID_PATH + "moveToProject/";
	public static final String SHOPPING_CART_API_MOVE_TO_PROJECT_ID_PATH = SHOPPING_CART_API_MOVE_TO_PROJECT_PATH + ":projectId/";
	public static final String SHOPPING_CART_API_MOVE_TO_PROJECT_ID_PATH_MULTI = SHOPPING_CART_API_MOVE_TO_PROJECT_ID_PATH + "bulk/";
	public static final String SHOPPING_CART_API_ID_MOVE_TO_PROJECT_ID_PATH = SHOPPING_CART_API_ID_MOVE_TO_PROJECT_PATH + ":projectId/";
	public static final String SHOPPING_CART_API_ID_MOVE_TO_PROJECT_ID_PATH_MULTI = SHOPPING_CART_API_ID_MOVE_TO_PROJECT_ID_PATH + "bulk/";
	public static final String SHOPPING_CART_API_ACQUIRE_PATH = SHOPPING_CART_API_PATH + "acquire/";
	public static final String SHOPPING_CART_API_ID_ACQUIRE_PATH = SHOPPING_CART_API_ID_PATH + "acquire/";
	
	public static final String TAG_API_PATH = PUBLIC_API_PATH + "tags/";
	public static final String TAG_API_ID_PATH = TAG_API_PATH + ":id/";
	
	public static final String ANONYMOUS_ACCESS_SUFFIX = "anonymous/";
	
	public static final String SEARCH_ENTITIES_API_PATH = PUBLIC_API_PATH + "searchEntities/";
	public static final String SEARCH_ENTITIES_API_ID_PATH = SEARCH_ENTITIES_API_PATH + ":id/";	
	public static final String SEARCH_ENTITIES_API_ID_CHILDS_PATH = SEARCH_ENTITIES_API_ID_PATH + CHILDS_SUFFIX;
	
	public static final String SEARCH_AUTOCOMPLETED_ENTITIES_API_PATH = PUBLIC_API_PATH + "searchAutocompletedEntities/";
	
	public static final String USER_API_PATH = PUBLIC_API_PATH + "users/";
	public static final String USER_API_ID_PATH = USER_API_PATH + ":id/";
	public static final String USER_API_PATH_MULTI = USER_API_PATH + "bulk/";
	public static final String USER_API_RESERVE_PATH = USER_API_PATH + "reserve/";
	public static final String USER_API_RESERVE_PATH_MULTI = USER_API_RESERVE_PATH + "bulk/";
	
	public static final String USER_SETTING_API_PATH = PUBLIC_API_PATH + "userSetting/";
	
	public static final String USER_FOLLOW_SETTINGS_API_PATH = PUBLIC_API_PATH + "userFollowSettings/";
	public static final String USER_FOLLOW_SETTINGS_API_ID_PATH = USER_FOLLOW_SETTINGS_API_PATH + ":id/";
	
	public static final String LICENSE_REQUEST_API_PATH = PUBLIC_API_PATH + "licenseRequests/";
	public static final String LICENSE_REQUEST_API_ID_PATH = LICENSE_REQUEST_API_PATH + ":id/";
	public static final String LICENSE_REQUEST_API_ID_REJECT_PATH = LICENSE_REQUEST_API_ID_PATH + "reject/";
	public static final String LICENSE_REQUEST_API_ID_ACCEPT_PATH = LICENSE_REQUEST_API_ID_PATH + "accept/";
	
	public static final String ACCESS_REQUEST_API_PATH = PUBLIC_API_PATH + "accessRequests/";
	public static final String ACCESS_REQUEST_API_ID_PATH = ACCESS_REQUEST_API_PATH + ":id/";
	public static final String ACCESS_REQUEST_API_ID_REJECT_PATH = ACCESS_REQUEST_API_ID_PATH + "reject/";
	public static final String ACCESS_REQUEST_API_ID_ACCEPT_PATH = ACCESS_REQUEST_API_ID_PATH + "accept/";
	
	public static final String JOIN_REQUEST_API_PATH = PUBLIC_API_PATH + "joinRequests/";
	public static final String JOIN_REQUEST_API_ID_PATH = JOIN_REQUEST_API_PATH + ":id/";
	public static final String JOIN_REQUEST_API_ID_REJECT_PATH = JOIN_REQUEST_API_ID_PATH + "reject/";
	public static final String JOIN_REQUEST_API_ID_ACCEPT_PATH = JOIN_REQUEST_API_ID_PATH + "accept/";
	
	public static final String PUBLISH_REQUEST_API_PATH = PUBLIC_API_PATH + "publishRequests/";
	public static final String PUBLISH_REQUEST_API_ID_PATH = PUBLISH_REQUEST_API_PATH + ":id/";
	public static final String PUBLISH_REQUEST_API_ID_REJECT_PATH = PUBLISH_REQUEST_API_ID_PATH + "reject/";
	public static final String PUBLISH_REQUEST_API_ID_ACCEPT_PATH = PUBLISH_REQUEST_API_ID_PATH + "accept/";
	
	public static final String PURCHASE_CREDITS_REQUEST_API_PATH = PUBLIC_API_PATH + "purchaseCreditsRequests/";
	public static final String PURCHASE_CREDITS_REQUEST_API_ID_PATH = PURCHASE_CREDITS_REQUEST_API_PATH + ":id/";
	public static final String PURCHASE_CREDITS_REQUEST_API_ID_REJECT_PATH = PURCHASE_CREDITS_REQUEST_API_ID_PATH + "reject/";
	
	public static final String UPGRADE_PLAN_REQUEST_API_PATH = PUBLIC_API_PATH + "upgradePlanRequests/";
	public static final String UPGRADE_PLAN_REQUEST_API_ID_PATH = UPGRADE_PLAN_REQUEST_API_PATH + ":id/";
	public static final String UPGRADE_PLAN_REQUEST_API_ID_REJECT_PATH = UPGRADE_PLAN_REQUEST_API_ID_PATH + "reject/";
	public static final String UPGRADE_PLAN_REQUEST_API_ID_ACCEPT_PATH = UPGRADE_PLAN_REQUEST_API_ID_PATH + "accept/";
	
	public static final String APPROVAL_REQUEST_API_PATH = PUBLIC_API_PATH + "approvalRequests/";
	public static final String APPROVAL_REQUEST_API_ID_PATH = APPROVAL_REQUEST_API_PATH + ":id/";
	public static final String APPROVAL_REQUEST_API_ID_REJECT_PATH = APPROVAL_REQUEST_API_ID_PATH + "reject/";
	public static final String APPROVAL_REQUEST_API_ID_ACCEPT_PATH = APPROVAL_REQUEST_API_ID_PATH + "accept/";
	
	public static final String HISTORY_API_PATH = PUBLIC_API_PATH + "history/";	
	
	public static final String SERVER_TASK_API_PATH = PUBLIC_API_PATH + "serverTasks/";
	
	public static final String EVENTBUS_API_PATH = PUBLIC_API_PATH + "eventBus/";
	
	// query
	
	public static final String GET_PARAMETER_QUERY_START_INDEX = "startIndex";
	public static final String GET_PARAMETER_QUERY_COUNT = "count";
	public static final String GET_PARAMETER_QUERY_ORDER_BY = "orderBy";
	public static final String GET_PARAMETER_QUERY_ORDER_DIRECTION = "orderDirection";
	public static final String GET_PARAMETER_QUERY_PUBLISHING_STATE = "publishingState";
	public static final String GET_PARAMETER_QUERY_TERMS = "terms";
	public static final String GET_PARAMETER_QUERY_TERMS_AND = "termsAnd";	
	public static final String GET_PARAMETER_QUERY_RECURSIVE = "recursive";
	public static final String GET_PARAMETER_QUERY_LOCALE = "locale";
	public static final String GET_PARAMETER_QUERY_TYPES = "types";	
	
	public static final String GET_PARAMETER_QUERY_BINARY_TYPES = "binaryTypes";
	public static final String GET_PARAMETER_QUERY_LOCALES = "locales";
	public static final String GET_PARAMETER_QUERY_DIMENSIONS = "dimensions";
	public static final String GET_PARAMETER_QUERY_UPLOADED = "uploaded";
	public static final String GET_PARAMETER_QUERY_ORIENTATIONS = "orientations";
	
	public static final String GET_PARAMETER_QUERY_VIDEO_FORMATS = "videoFormats";
	public static final String GET_PARAMETER_QUERY_VIDEO_ASPECT_RATIOS = "videoAspectRatios";
	
	public static final String GET_PARAMETER_QUERY_DURATIONS = "durations";
	
	public static final String GET_PARAMETER_QUERY_PAGE_COUNTS = "pageCounts";
	
	public static final String GET_PARAMETER_QUERY_SOURCE = "source";
	
	public static final String GET_PARAMETER_QUERY_LICENSE_IDS = "licenseIds";	
	public static final String GET_PARAMETER_QUERY_MULTI_PARENT_IDS = "multiParentIds";	
	
	public static final String GET_PARAMETER_QUERY_INCLUDE_CONTIDIO = "include";
	
	public static final String GET_PARAMETER_QUERY_PROJECT_STATES = "projectStates";
	
	public static final String GET_PARAMETER_QUERY_CREDIT_TRANSACTION_TYPES = "creditTransactionTypes";
	
	public static final String GET_PARAMETER_QUERY_FROM_CREATED_TIMESTAMP = "fromCreated";
	public static final String GET_PARAMETER_QUERY_TO_CREATED_TIMESTAMP = "toCreated";
	
	public static final String GET_PARAMETER_QUERY_FROM_LAST_UPDATED_TIMESTAMP = "fromLastUpdated";
	public static final String GET_PARAMETER_QUERY_TO_LAST_UPDATED_TIMESTAMP = "toLastUpdated";
	
	public static final String GET_PARAMETER_QUERY_FROM_LAST_COMMITTED_TIMESTAMP = "fromLastCommitted";
	public static final String GET_PARAMETER_QUERY_TO_LAST_COMMITTED_TIMESTAMP = "toLastCommitted";
	
	public static final String GET_PARAMETER_QUERY_AUTOCOMPLETED_ENTITY_TYPES = "autocompletedEntityTypes";
	
	public static final String GET_PARAMETER_QUERY_BRAND_TYPES = "brandTypes";
	
	public static final String GET_PARAMETER_QUERY_ASSET_TYPES = "assetTypes";
	
	public static final String GET_PARAMETER_QUERY_JOB_TYPES = "jobTypes";
	public static final String GET_PARAMETER_QUERY_JOB_STATES = "jobStates";
	public static final String GET_PARAMETER_QUERY_PARTICIPATION_STATES = "participationStates";
	
	public static final String GET_PARAMETER_QUERY_NOTIFICATION_TYPES = "notificationTypes";
	public static final String GET_PARAMETER_QUERY_NOTIFICATION_STATES = "notificationStates";
	
	public static final String GET_PARAMETER_QUERY_CONTENT_CATEGORIES = "contentCategories";
	
	public static final String GET_PARAMETER_QUERY_REVIEW_STATES = "reviewStates";
	
	public static final String GET_PARAMETER_QUERY_INCLUDE_INACTIVE = "includeInactive";
	
	// others
	
	public static final String GET_PARAMETER_INCLUSION_FLAGS = "flags";
	
	public static final String REQUEST_HEADER_BRAND_UUID = "X-Brand-Uuid";
	public static final String REQUEST_HEADER_WEBSOCKET_ADDRESS = "X-WS-Addr";
	public static final String REQUEST_HEADER_TRANSACTION_UUID = "X-T-Uuid";
	public static final String REQUEST_HEADER_CONTIDIO_SDK = "X-Contidio-Sdk";
	public static final String REQUEST_HEADER_SUBSCRIPTION_KEY = "Ocp-Apim-Subscription-Key";
	public static final String REQUEST_HEADER_INSTANCE_ID = "X-Instance-Id";
}
