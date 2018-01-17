namespace Contidio.Sdk.Api
{
    public class ApiConstants
    {
        public const string CONTIDIO_SDK_IDENTIFIER = "1.0-CSharp";

        // APIs

        public const string PUBLIC_API_PATH = "/api/v1/";

	    public const string CHILDS_SUFFIX = "childs/";

        public const string ENTITIES_API_PATH = PUBLIC_API_PATH + "entities/";

	    public const string BRAND_API_PATH = PUBLIC_API_PATH + "brands/";
        public const string BRAND_API_BY_SUBDOMAIN_ID_PATH = BRAND_API_PATH + "bySubdomain/:id/";

	    public const string BRAND_API_ID_PATH = BRAND_API_PATH + ":id/";	
	    public const string BRAND_API_ID_CHILDS_PATH = BRAND_API_ID_PATH + CHILDS_SUFFIX;
	    public const string BRAND_API_ID_ADMIN_USER_GROUP_PATH = BRAND_API_ID_PATH + "adminUserGroups/";
	    public const string BRAND_API_ID_END_USER_GROUP_PATH = BRAND_API_ID_PATH + "endUserGroups/";	    
	    public const string BRAND_API_ID_CREDIT_TRANSACTIONS_PATH = BRAND_API_ID_PATH + "creditTransactions/";
        public const string BRAND_API_ID_CREDIT_TRANSACTIONS_CREATE_DOWNLOAD_TASK_PATH = BRAND_API_ID_CREDIT_TRANSACTIONS_PATH + "createDownloadTask/";
        public const string BRAND_API_ID_CREDIT_TRANSACTIONS_ID_PATH = BRAND_API_ID_CREDIT_TRANSACTIONS_PATH + ":creditTransactionId/";
        public const string BRAND_API_ID_CREDIT_TRANSACTIONS_ID_CREATE_DOWNLOAD_TASK_PATH = BRAND_API_ID_CREDIT_TRANSACTIONS_ID_PATH + "createDownloadTask/";
        public const string BRAND_API_ID_CREDIT_TRANSACTIONS_ID_CHILDS_PATH = BRAND_API_ID_CREDIT_TRANSACTIONS_ID_PATH + CHILDS_SUFFIX;
	    public const string BRAND_API_ID_ADMIN_USER_GROUP_ID_PATH = BRAND_API_ID_ADMIN_USER_GROUP_PATH + ":groupId/";
	    public const string BRAND_API_ID_ADMIN_USER_GROUP_ID_USERS_PATH = BRAND_API_ID_ADMIN_USER_GROUP_ID_PATH + "users/";
	    public const string BRAND_API_ID_END_USER_GROUP_ID_PATH = BRAND_API_ID_END_USER_GROUP_PATH + ":groupId/";
	    public const string BRAND_API_ID_END_USER_GROUP_ID_USERS_PATH = BRAND_API_ID_END_USER_GROUP_ID_PATH + "users/";
	    public const string BRAND_API_ID_END_USER_GROUP_ID_BRANDS_PATH = BRAND_API_ID_END_USER_GROUP_ID_PATH + "brands/";
	    public const string BRAND_API_ID_END_USER_GROUP_ID_ACCESS_REQUESTS_PATH = BRAND_API_ID_END_USER_GROUP_ID_PATH + "accessRequests/";	    
        public const string BRAND_API_ID_PURCHASE_CREDITS_REQUESTS_PATH = BRAND_API_ID_PATH + "purchaseCreditsRequests/";
        public const string BRAND_API_ID_LICENSE_PATH = BRAND_API_ID_PATH + "licenses/";
	    public const string BRAND_API_ID_LICENSE_ID_PATH = BRAND_API_ID_LICENSE_PATH + ":licenseId/";
	    public const string BRAND_API_ID_PROJECT_PATH = BRAND_API_ID_PATH + "projects/";
        public const string BRAND_API_ID_CREDIT_BALANCE_PATH = BRAND_API_ID_PATH + "creditBalance/";
        public const string BRAND_API_ID_CREDIT_BALANCE_COST_CALCULATION_PATH = BRAND_API_ID_PATH + "creditBalanceCostCalculation/";
        public const string BRAND_API_ID_SEND_CONTACT_FORM_PATH = BRAND_API_ID_PATH + "sendContactForm/";
        public const string BRAND_API_ID_NOTIFICATIONS_PATH = BRAND_API_ID_PATH + "notifications/";
        public const string BRAND_API_ID_EXTERNAL_CONTENT_PROVIDERS_PATH = BRAND_API_ID_PATH + "externalContentProviders/";
	    public const string BRAND_API_ID_EXTERNAL_CONTENT_PROVIDERS_ID_PATH = BRAND_API_ID_EXTERNAL_CONTENT_PROVIDERS_PATH + ":providerId/";
        public const string BRAND_API_ID_EXTERNAL_CONTENT_PROVIDERS_ID_SETUP_PATH = BRAND_API_ID_EXTERNAL_CONTENT_PROVIDERS_ID_PATH + "setup/";
        public const string BRAND_API_ID_EXTERNAL_CONTENT_PROVIDERS_ID_CONFIGURE_PATH = BRAND_API_ID_EXTERNAL_CONTENT_PROVIDERS_ID_PATH + "configure/";
        public const string BRAND_API_ID_EXTERNAL_CONTENT_PROVIDERS_ID_REFRESH_PATH = BRAND_API_ID_EXTERNAL_CONTENT_PROVIDERS_ID_PATH + "refresh/";
        public const string BRAND_API_ID_EXTERNAL_CONTENT_PROVIDERS_ID_PRODUCTS_PATH = BRAND_API_ID_EXTERNAL_CONTENT_PROVIDERS_ID_PATH + "products/";
        public const string BRAND_API_ID_EXTERNAL_CONTENT_PROVIDERS_ID_PRODUCTS_ID_PATH = BRAND_API_ID_EXTERNAL_CONTENT_PROVIDERS_ID_PRODUCTS_PATH + ":productId/";

        public const string FOLDER_API_PATH = PUBLIC_API_PATH + "folders/";
	    public const string FOLDER_API_ID_PATH = FOLDER_API_PATH + ":id/";	
	    public const string FOLDER_API_PATH_MULTI = FOLDER_API_PATH + "bulk/";
	    public const string FOLDER_API_ID_CHILDS_PATH = FOLDER_API_ID_PATH + CHILDS_SUFFIX;
	
	    public const string ASSET_API_PATH = PUBLIC_API_PATH + "assets/";
	    public const string ASSET_API_ID_PATH = ASSET_API_PATH + ":id/";
        public const string ASSET_API_ID_CREATE_DOWNLOAD_TASK_PATH = ASSET_API_ID_PATH + "createDownloadTask/";
	    public const string ASSET_API_PATH_MULTI = ASSET_API_PATH + "bulk/";
	
	    public const string TRASH_API_PATH = PUBLIC_API_PATH + "trash/";
	    public const string TRASH_API_ID_PATH = TRASH_API_PATH + ":id/";	
	    public const string TRASH_API_ID_PATH_MULTI = TRASH_API_ID_PATH + "bulk/";
	    public const string TRASH_API_ID_CHILDS_PATH = TRASH_API_ID_PATH + CHILDS_SUFFIX;
	
	    public const string JOBS_API_PATH = PUBLIC_API_PATH + "_jobs/";
	    public const string JOBS_API_ID_PATH = JOBS_API_PATH + ":id/";
	    public const string JOBS_API_ID_CHILDS_PATH = JOBS_API_ID_PATH + CHILDS_SUFFIX;
	
	    public const string JOB_API_PATH = PUBLIC_API_PATH + "jobs/";
	    public const string JOB_API_ID_PATH = JOB_API_PATH + ":id/";		
	    public const string JOB_API_ID_CHILDS_PATH = JOB_API_ID_PATH + CHILDS_SUFFIX;
	    public const string JOB_API_ID_PARTICIPATE_PATH = JOB_API_ID_PATH + "participate/";		
	    public const string JOB_API_ID_CLOSE_PATH = JOB_API_ID_PATH + "close/";	
	    public const string JOB_API_ID_APPLY_PATH = JOB_API_ID_PATH + "apply/";
	
	    public const string PARTICIPATIONS_API_PATH = PUBLIC_API_PATH + "_participations/";
	    public const string PARTICIPATIONS_API_ID_PATH = PARTICIPATIONS_API_PATH + ":id/";
	    public const string PARTICIPATIONS_API_ID_CHILDS_PATH = PARTICIPATIONS_API_ID_PATH + CHILDS_SUFFIX;
	
	    public const string PARTICIPATION_API_PATH = PUBLIC_API_PATH + "participations/";
	    public const string PARTICIPATION_API_ID_PATH = PARTICIPATION_API_PATH + ":id/";
	    public const string PARTICIPATION_API_ID_CHILDS_PATH = PARTICIPATION_API_ID_PATH + CHILDS_SUFFIX;
	    public const string PARTICIPATION_API_ID_SUBMIT_PATH = PARTICIPATION_API_ID_PATH + "submit/";
	    public const string PARTICIPATION_API_ID_REJECT_PATH = PARTICIPATION_API_ID_PATH + "reject/";
	    public const string PARTICIPATION_API_ID_ACCEPT_PATH = PARTICIPATION_API_ID_PATH + "accept/";
	
	    public const string PROJECTS_API_PATH = PUBLIC_API_PATH + "_projects/";
	    public const string PROJECTS_API_ID_PATH = PROJECTS_API_PATH + ":id/";
	    public const string PROJECTS_API_ID_CHILDS_PATH = PROJECTS_API_ID_PATH + CHILDS_SUFFIX;
	
	    public const string PROJECT_API_PATH = PUBLIC_API_PATH + "projects/";
	    public const string PROJECT_API_ID_PATH = PROJECT_API_PATH + ":id/";	
	    public const string PROJECT_API_ID_COLLECTED_ENTITIES_PATH = PROJECT_API_ID_PATH + "collectedEntities/";
	    public const string PROJECT_API_ID_COLLECTED_ENTITIES_ACQUIRED_PATH = PROJECT_API_ID_PATH + "acquiredCollectedEntities/";
	    public const string PROJECT_API_ID_COLLECTED_ENTITIES_NOT_ACQUIRED_PATH = PROJECT_API_ID_PATH + "notAcquiredCollectedEntities/";
	    public const string PROJECT_API_ID_COLLECTED_ENTITIES_PATH_MULTI = PROJECT_API_ID_COLLECTED_ENTITIES_PATH + "bulk/";
	    public const string PROJECT_API_ID_COLLECTED_ENTITIES_COPY_PATH = PROJECT_API_ID_COLLECTED_ENTITIES_PATH + "copyToShoppingCart/";
	    public const string PROJECT_API_ID_COLLECTED_ENTITIES_COPY_PATH_MULTI = PROJECT_API_ID_COLLECTED_ENTITIES_COPY_PATH + "bulk/";
	    public const string PROJECT_API_ID_COLLECTED_ENTITIES_COPY_PATH_ALL = PROJECT_API_ID_COLLECTED_ENTITIES_COPY_PATH + "all/";
	    public const string PROJECT_API_ID_COLLECTED_ENTITIES_COPY_ID_PATH = PROJECT_API_ID_COLLECTED_ENTITIES_COPY_PATH + ":shoppingCartId/";
	    public const string PROJECT_API_ID_COLLECTED_ENTITIES_COPY_ID_PATH_MULTI = PROJECT_API_ID_COLLECTED_ENTITIES_COPY_ID_PATH + "bulk/";
	    public const string PROJECT_API_ID_COLLECTED_ENTITIES_COPY_ID_PATH_ALL = PROJECT_API_ID_COLLECTED_ENTITIES_COPY_ID_PATH_MULTI + "all/";
	
	    public const string SHOPPING_CART_API_PATH = PUBLIC_API_PATH + "shoppingCarts/";
	    public const string SHOPPING_CART_API_ID_PATH = SHOPPING_CART_API_PATH + ":id/";	
	    public const string SHOPPING_CART_API_COLLECTED_ENTITIES_PATH = SHOPPING_CART_API_PATH + "collectedEntities/";
	    public const string SHOPPING_CART_API_COLLECTED_ENTITIES_PATH_MULTI = SHOPPING_CART_API_COLLECTED_ENTITIES_PATH + "bulk/";
	    public const string SHOPPING_CART_API_ID_COLLECTED_ENTITIES_PATH = SHOPPING_CART_API_ID_PATH + "collectedEntities/";
	    public const string SHOPPING_CART_API_ID_COLLECTED_ENTITIES_PATH_MULTI = SHOPPING_CART_API_ID_COLLECTED_ENTITIES_PATH + "bulk/";
	    public const string SHOPPING_CART_API_SUBMIT_TO_BRAND_PATH = SHOPPING_CART_API_PATH + "submitToBrand/";
	    public const string SHOPPING_CART_API_ID_REJECT_ACQUISITION_PATH = SHOPPING_CART_API_ID_PATH + "rejectAcquisition/";
	    public const string SHOPPING_CART_API_MOVE_TO_PROJECT_PATH = SHOPPING_CART_API_PATH + "moveToProject/";
	    public const string SHOPPING_CART_API_ID_MOVE_TO_PROJECT_PATH = SHOPPING_CART_API_ID_PATH + "moveToProject/";
	    public const string SHOPPING_CART_API_MOVE_TO_PROJECT_ID_PATH = SHOPPING_CART_API_MOVE_TO_PROJECT_PATH + ":projectId/";
	    public const string SHOPPING_CART_API_MOVE_TO_PROJECT_ID_PATH_MULTI = SHOPPING_CART_API_MOVE_TO_PROJECT_ID_PATH + "bulk/";
	    public const string SHOPPING_CART_API_ID_MOVE_TO_PROJECT_ID_PATH = SHOPPING_CART_API_ID_MOVE_TO_PROJECT_PATH + ":projectId/";
	    public const string SHOPPING_CART_API_ID_MOVE_TO_PROJECT_ID_PATH_MULTI = SHOPPING_CART_API_ID_MOVE_TO_PROJECT_ID_PATH + "bulk/";
	    public const string SHOPPING_CART_API_ACQUIRE_PATH = SHOPPING_CART_API_PATH + "acquire/";
	    public const string SHOPPING_CART_API_ID_ACQUIRE_PATH = SHOPPING_CART_API_ID_PATH + "acquire/";
	
	    public const string TAG_API_PATH = PUBLIC_API_PATH + "tags/";
	    public const string TAG_API_ID_PATH = TAG_API_PATH + ":id/";
	
	    public const string ANONYMOUS_ACCESS_SUFFIX = "anonymous/";
	
	    public const string SEARCH_ENTITIES_API_PATH = PUBLIC_API_PATH + "searchEntities/";
	    public const string SEARCH_ENTITIES_API_ID_PATH = SEARCH_ENTITIES_API_PATH + ":id/";	
	    public const string SEARCH_ENTITIES_API_ID_CHILDS_PATH = SEARCH_ENTITIES_API_ID_PATH + CHILDS_SUFFIX;

        public const string SEARCH_AUTOCOMPLETED_ENTITIES_API_PATH = PUBLIC_API_PATH + "searchAutocompletedEntities/";
	
	    public const string USER_API_PATH = PUBLIC_API_PATH + "users/";
	    public const string USER_API_ID_PATH = USER_API_PATH + ":id/";
        public const string USER_API_PATH_MULTI = USER_API_PATH + "bulk/";
	    public const string USER_API_RESERVE_PATH = USER_API_PATH + "reserve/";
        public const string USER_API_RESERVE_PATH_MULTI = USER_API_RESERVE_PATH + "bulk/";
	
	    public const string USER_SETTING_API_PATH = PUBLIC_API_PATH + "userSetting/";

        public const string USER_FOLLOW_SETTINGS_API_PATH = PUBLIC_API_PATH + "userFollowSettings/";
	    public const string USER_FOLLOW_SETTINGS_API_ID_PATH = USER_FOLLOW_SETTINGS_API_PATH + ":id/";

        public const string LICENSE_REQUEST_API_PATH = PUBLIC_API_PATH + "licenseRequests/";
        public const string LICENSE_REQUEST_API_ID_PATH = LICENSE_REQUEST_API_PATH + ":id/";
        public const string LICENSE_REQUEST_API_ID_REJECT_PATH = LICENSE_REQUEST_API_ID_PATH + "reject/";
        public const string LICENSE_REQUEST_API_ID_ACCEPT_PATH = LICENSE_REQUEST_API_ID_PATH + "accept/";

        public const string ACCESS_REQUEST_API_PATH = PUBLIC_API_PATH + "accessRequests/";
	    public const string ACCESS_REQUEST_API_ID_PATH = ACCESS_REQUEST_API_PATH + ":id/";
	    public const string ACCESS_REQUEST_API_ID_REJECT_PATH = ACCESS_REQUEST_API_ID_PATH + "reject/";
	    public const string ACCESS_REQUEST_API_ID_ACCEPT_PATH = ACCESS_REQUEST_API_ID_PATH + "accept/";

        public const string JOIN_REQUEST_API_PATH = PUBLIC_API_PATH + "joinRequests/";
        public const string JOIN_REQUEST_API_ID_PATH = JOIN_REQUEST_API_PATH + ":id/";
        public const string JOIN_REQUEST_API_ID_REJECT_PATH = JOIN_REQUEST_API_ID_PATH + "reject/";
        public const string JOIN_REQUEST_API_ID_ACCEPT_PATH = JOIN_REQUEST_API_ID_PATH + "accept/";

        public const string PUBLISH_REQUEST_API_PATH = PUBLIC_API_PATH + "publishRequests/";
	    public const string PUBLISH_REQUEST_API_ID_PATH = PUBLISH_REQUEST_API_PATH + ":id/";
	    public const string PUBLISH_REQUEST_API_ID_REJECT_PATH = PUBLISH_REQUEST_API_ID_PATH + "reject/";
	    public const string PUBLISH_REQUEST_API_ID_ACCEPT_PATH = PUBLISH_REQUEST_API_ID_PATH + "accept/";

        public const string PURCHASE_CREDITS_REQUEST_API_PATH = PUBLIC_API_PATH + "purchaseCreditsRequests/";
        public const string PURCHASE_CREDITS_REQUEST_API_ID_PATH = PURCHASE_CREDITS_REQUEST_API_PATH + ":id/";
        public const string PURCHASE_CREDITS_REQUEST_API_ID_REJECT_PATH = PURCHASE_CREDITS_REQUEST_API_ID_PATH + "reject/";

        public const string UPGRADE_PLAN_REQUEST_API_PATH = PUBLIC_API_PATH + "upgradePlanRequests/";
	    public const string UPGRADE_PLAN_REQUEST_API_ID_PATH = UPGRADE_PLAN_REQUEST_API_PATH + ":id/";
	    public const string UPGRADE_PLAN_REQUEST_API_ID_REJECT_PATH = UPGRADE_PLAN_REQUEST_API_ID_PATH + "reject/";
	    public const string UPGRADE_PLAN_REQUEST_API_ID_ACCEPT_PATH = UPGRADE_PLAN_REQUEST_API_ID_PATH + "accept/";

        public const string APPROVAL_REQUEST_API_PATH = PUBLIC_API_PATH + "approvalRequests/";
        public const string APPROVAL_REQUEST_API_ID_PATH = APPROVAL_REQUEST_API_PATH + ":id/";
        public const string APPROVAL_REQUEST_API_ID_REJECT_PATH = APPROVAL_REQUEST_API_ID_PATH + "reject/";
        public const string APPROVAL_REQUEST_API_ID_ACCEPT_PATH = APPROVAL_REQUEST_API_ID_PATH + "accept/";

        public const string HISTORY_API_PATH = PUBLIC_API_PATH + "history/";

        public const string SERVER_TASK_API_PATH = PUBLIC_API_PATH + "serverTasks/";

        public const string EVENTBUS_API_PATH = PUBLIC_API_PATH + "eventBus/";

        // query

        public const string GET_PARAMETER_QUERY_START_INDEX = "startIndex";
	    public const string GET_PARAMETER_QUERY_COUNT = "count";
	    public const string GET_PARAMETER_QUERY_ORDER_BY = "orderBy";
	    public const string GET_PARAMETER_QUERY_ORDER_DIRECTION = "orderDirection";
        public const string GET_PARAMETER_QUERY_PUBLISHING_STATE = "publishingState";
        public const string GET_PARAMETER_QUERY_TERMS = "terms";
	    public const string GET_PARAMETER_QUERY_TERMS_AND = "termsAnd";	
	    public const string GET_PARAMETER_QUERY_RECURSIVE = "recursive";
	    public const string GET_PARAMETER_QUERY_LOCALE = "locale";
	    public const string GET_PARAMETER_QUERY_TYPES = "types";	
	
	    public const string GET_PARAMETER_QUERY_BINARY_TYPES = "binaryTypes";
	    public const string GET_PARAMETER_QUERY_LOCALES = "locales";
	    public const string GET_PARAMETER_QUERY_DIMENSIONS = "dimensions";
	    public const string GET_PARAMETER_QUERY_UPLOADED = "uploaded";
	    public const string GET_PARAMETER_QUERY_ORIENTATIONS = "orientations";
	
	    public const string GET_PARAMETER_QUERY_VIDEO_FORMATS = "videoFormats";
	    public const string GET_PARAMETER_QUERY_VIDEO_ASPECT_RATIOS = "videoAspectRatios";
	
	    public const string GET_PARAMETER_QUERY_DURATIONS = "durations";
	
	    public const string GET_PARAMETER_QUERY_PAGE_COUNTS = "pageCounts";
	
	    public const string GET_PARAMETER_QUERY_SOURCE = "source";
	
	    public const string GET_PARAMETER_QUERY_LICENSE_IDS = "licenseIds";	
	    public const string GET_PARAMETER_QUERY_MULTI_PARENT_IDS = "multiParentIds";
	
	    public const string GET_PARAMETER_QUERY_INCLUDE_CONTIDIO = "include";
	
	    public const string GET_PARAMETER_QUERY_PROJECT_STATES = "projectStates";

        public const string GET_PARAMETER_QUERY_CREDIT_TRANSACTION_TYPES = "creditTransactionTypes";

        public const string GET_PARAMETER_QUERY_FROM_CREATED_TIMESTAMP = "fromCreated";
	    public const string GET_PARAMETER_QUERY_TO_CREATED_TIMESTAMP = "toCreated";
	
	    public const string GET_PARAMETER_QUERY_FROM_LAST_UPDATED_TIMESTAMP = "fromLastUpdated";
	    public const string GET_PARAMETER_QUERY_TO_LAST_UPDATED_TIMESTAMP = "toLastUpdated";

        public const string GET_PARAMETER_QUERY_FROM_LAST_COMMITTED_TIMESTAMP = "fromLastCommitted";
        public const string GET_PARAMETER_QUERY_TO_LAST_COMMITTED_TIMESTAMP = "toLastCommitted";

        public const string GET_PARAMETER_QUERY_AUTOCOMPLETED_ENTITY_TYPES = "autocompletedEntityTypes";

        public const string GET_PARAMETER_QUERY_BRAND_TYPES = "brandTypes";

        public const string GET_PARAMETER_QUERY_ASSET_TYPES = "assetTypes";

        public const string GET_PARAMETER_QUERY_JOB_TYPES = "jobTypes";
        public const string GET_PARAMETER_QUERY_JOB_STATES = "jobStates";
        public const string GET_PARAMETER_QUERY_PARTICIPATION_STATES = "participationStates";

        public const string GET_PARAMETER_QUERY_NOTIFICATION_TYPES = "notificationTypes";
	    public const string GET_PARAMETER_QUERY_NOTIFICATION_STATES = "notificationStates";

        public const string GET_PARAMETER_QUERY_CONTENT_CATEGORIES = "contentCategories";

        public const string GET_PARAMETER_QUERY_REVIEW_STATES = "reviewStates";

        public const string GET_PARAMETER_QUERY_INCLUDE_INACTIVE = "includeInactive";

        // others

        public const string GET_PARAMETER_INCLUSION_FLAGS = "flags";
	
	    public const string REQUEST_HEADER_BRAND_UUID = "X-Brand-Uuid";
        public const string REQUEST_HEADER_WEBSOCKET_ADDRESS = "X-WS-Addr";
	    public const string REQUEST_HEADER_TRANSACTION_UUID = "X-T-Uuid";
	    public const string REQUEST_HEADER_CONTIDIO_SDK = "X-Contidio-Sdk";
	    public const string REQUEST_HEADER_SUBSCRIPTION_KEY = "Ocp-Apim-Subscription-Key";
        public const string REQUEST_HEADER_INSTANCE_ID = "X-Instance-Id";
    }
}
