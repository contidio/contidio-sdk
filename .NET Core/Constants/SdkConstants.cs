using System;

namespace Contidio.Sdk.Constants
{
    public class SdkConstants
    {
        public const int COLLECTION_FLAG_INCLUDE_NONE = 0x0;

        public const long COLLECTION_FLAG_INCLUDE_METADATA_BASIC = 1;
        public const long COLLECTION_FLAG_INCLUDE_METADATA_EXTENDED = COLLECTION_FLAG_INCLUDE_METADATA_BASIC * 2;
        public const long COLLECTION_FLAG_INCLUDE_PRIVATE_WORKINGSET_DATA = COLLECTION_FLAG_INCLUDE_METADATA_EXTENDED * 2;
        public const long COLLECTION_FLAG_INCLUDE_PUBLIC_WORKINGSET_DATA = COLLECTION_FLAG_INCLUDE_PRIVATE_WORKINGSET_DATA * 2;        
        public const long COLLECTION_FLAG_INCLUDE_WORKINGSET_METADATA_EXTENDED = COLLECTION_FLAG_INCLUDE_PUBLIC_WORKINGSET_DATA * 2;
        public const long COLLECTION_FLAG_INCLUDE_WORKINGSET_BINARIES = COLLECTION_FLAG_INCLUDE_WORKINGSET_METADATA_EXTENDED * 2;
        public const long COLLECTION_FLAG_INCLUDE_BINARY_METATAGS_BASIC = COLLECTION_FLAG_INCLUDE_WORKINGSET_BINARIES * 2;
        public const long COLLECTION_FLAG_INCLUDE_BINARY_METATAGS_EXTENDED = COLLECTION_FLAG_INCLUDE_BINARY_METATAGS_BASIC * 2;
        public const long COLLECTION_FLAG_INCLUDE_ACCESS = COLLECTION_FLAG_INCLUDE_BINARY_METATAGS_EXTENDED * 2;
        public const long COLLECTION_FLAG_INCLUDE_TAGS = COLLECTION_FLAG_INCLUDE_ACCESS * 2;        
        public const long COLLECTION_FLAG_INCLUDE_LICENSING = COLLECTION_FLAG_INCLUDE_TAGS * 2;        
        public const long COLLECTION_FLAG_INCLUDE_RELATED_BRAND_DATA = COLLECTION_FLAG_INCLUDE_LICENSING * 2;
        public const long COLLECTION_FLAG_INCLUDE_PRIVATE_JOB_DATA = COLLECTION_FLAG_INCLUDE_RELATED_BRAND_DATA * 2;
        public const long COLLECTION_FLAG_INCLUDE_PUBLIC_JOB_DATA = COLLECTION_FLAG_INCLUDE_PRIVATE_JOB_DATA * 2;        
        public const long COLLECTION_FLAG_INCLUDE_ACQUISITION_DATA = COLLECTION_FLAG_INCLUDE_PUBLIC_JOB_DATA * 2;
        public const long COLLECTION_FLAG_INCLUDE_PROJECT_DATA = COLLECTION_FLAG_INCLUDE_ACQUISITION_DATA * 2;
        public const long COLLECTION_FLAG_INCLUDE_PARTICIPATION_DATA = COLLECTION_FLAG_INCLUDE_PROJECT_DATA * 2;
        public const long COLLECTION_FLAG_INCLUDE_RESOLVED_METADATA_EXTENDED = COLLECTION_FLAG_INCLUDE_PARTICIPATION_DATA * 2;
        public const long COLLECTION_FLAG_INCLUDE_RESOLVED_TAGS = COLLECTION_FLAG_INCLUDE_RESOLVED_METADATA_EXTENDED * 2;        
        public const long COLLECTION_FLAG_INCLUDE_RESOLVED_AVAILABLE_LICENSES = COLLECTION_FLAG_INCLUDE_RESOLVED_TAGS * 2;
        public const long COLLECTION_FLAG_INCLUDE_RESOLVED_ACCESS = COLLECTION_FLAG_INCLUDE_RESOLVED_AVAILABLE_LICENSES * 2;
        public const long COLLECTION_FLAG_INCLUDE_UNRESOLVED_METADATA_EXTENDED = COLLECTION_FLAG_INCLUDE_RESOLVED_ACCESS * 2;
        public const long COLLECTION_FLAG_INCLUDE_UNRESOLVED_TAGS = COLLECTION_FLAG_INCLUDE_UNRESOLVED_METADATA_EXTENDED * 2;        
        public const long COLLECTION_FLAG_INCLUDE_UNRESOLVED_AVAILABLE_LICENSES = COLLECTION_FLAG_INCLUDE_UNRESOLVED_TAGS * 2;
        public const long COLLECTION_FLAG_INCLUDE_UNRESOLVED_ACCESS = COLLECTION_FLAG_INCLUDE_UNRESOLVED_AVAILABLE_LICENSES * 2;        
        public const long COLLECTION_FLAG_INCLUDE_PARENTS = COLLECTION_FLAG_INCLUDE_UNRESOLVED_ACCESS * 2;
        public const long COLLECTION_FLAG_INCLUDE_DEREFERENCED_DATA = COLLECTION_FLAG_INCLUDE_PARENTS * 2;
        public const long COLLECTION_FLAG_INCLUDE_AGGREGATIONS = COLLECTION_FLAG_INCLUDE_DEREFERENCED_DATA * 2;
        public const long COLLECTION_FLAG_INCLUDE_QUERY_DATA_BASIC = COLLECTION_FLAG_INCLUDE_AGGREGATIONS * 2;
        public const long COLLECTION_FLAG_INCLUDE_QUERY_DATA_EXTENDED = COLLECTION_FLAG_INCLUDE_QUERY_DATA_BASIC * 2;
        public const long COLLECTION_FLAG_INCLUDE_CREDIT_BALANCE = COLLECTION_FLAG_INCLUDE_QUERY_DATA_EXTENDED * 2;
        public const long COLLECTION_FLAG_INCLUDE_DOWNLOAD_LINKS = COLLECTION_FLAG_INCLUDE_CREDIT_BALANCE * 2;
        public const long COLLECTION_FLAG_INCLUDE_BRAND_QUERY_DATA_EXTENDED = COLLECTION_FLAG_INCLUDE_DOWNLOAD_LINKS * 2;
        public const long COLLECTION_FLAG_INCLUDE_FOLLOW_DATA = COLLECTION_FLAG_INCLUDE_BRAND_QUERY_DATA_EXTENDED * 2;
        public const long COLLECTION_FLAG_INCLUDE_LICENSE_REQUESTS = COLLECTION_FLAG_INCLUDE_FOLLOW_DATA * 2;
        public const long COLLECTION_FLAG_INCLUDE_ACCESS_REQUESTS = COLLECTION_FLAG_INCLUDE_LICENSE_REQUESTS * 2;
        public const long COLLECTION_FLAG_INCLUDE_PUBLISH_REQUESTS = COLLECTION_FLAG_INCLUDE_ACCESS_REQUESTS * 2;
        public const long COLLECTION_FLAG_INCLUDE_COLLECTED_ENTITIES = COLLECTION_FLAG_INCLUDE_PUBLISH_REQUESTS * 2;
        public const long COLLECTION_FLAG_INCLUDE_NEWS_INDICATOR = COLLECTION_FLAG_INCLUDE_COLLECTED_ENTITIES * 2;
        public const long COLLECTION_FLAG_INCLUDE_UPGRADE_PLAN_REQUESTS = COLLECTION_FLAG_INCLUDE_NEWS_INDICATOR * 2;
        public const long COLLECTION_FLAG_INCLUDE_JOIN_REQUESTS = COLLECTION_FLAG_INCLUDE_UPGRADE_PLAN_REQUESTS * 2;
        public const long COLLECTION_FLAG_INCLUDE_LAYOUTS = COLLECTION_FLAG_INCLUDE_JOIN_REQUESTS * 2;
        public const long COLLECTION_FLAG_INCLUDE_RESOLVED_LAYOUTS = COLLECTION_FLAG_INCLUDE_LAYOUTS * 2;
        public const long COLLECTION_FLAG_INCLUDE_UNRESOLVED_LAYOUTS = COLLECTION_FLAG_INCLUDE_RESOLVED_LAYOUTS * 2;
        public const long COLLECTION_FLAG_INCLUDE_APPROVAL_REQUESTS = COLLECTION_FLAG_INCLUDE_UNRESOLVED_LAYOUTS * 2;
        public const long COLLECTION_FLAG_INCLUDE_PUBLISH_CONDITIONS = COLLECTION_FLAG_INCLUDE_APPROVAL_REQUESTS * 2;
        public const long COLLECTION_FLAG_INCLUDE_UNRESOLVED_PUBLISH_CONDITIONS = COLLECTION_FLAG_INCLUDE_PUBLISH_CONDITIONS * 2;
        public const long COLLECTION_FLAG_INCLUDE_RESOLVED_PUBLISH_CONDITIONS = COLLECTION_FLAG_INCLUDE_UNRESOLVED_PUBLISH_CONDITIONS * 2;
        public const long COLLECTION_FLAG_INCLUDE_TAG_TRANSLATIONS = COLLECTION_FLAG_INCLUDE_RESOLVED_PUBLISH_CONDITIONS * 2;
        public const long COLLECTION_FLAG_INCLUDE_EXTERNAL_CONTENT_PROVIDERS = COLLECTION_FLAG_INCLUDE_TAG_TRANSLATIONS * 2;

        public const long COLLECTION_FLAG_NON_AREA_ADMIN_EXCLUSION_MASK =
                ~COLLECTION_FLAG_INCLUDE_PRIVATE_WORKINGSET_DATA &                
                ~COLLECTION_FLAG_INCLUDE_BINARY_METATAGS_EXTENDED &
                ~COLLECTION_FLAG_INCLUDE_ACCESS &
                ~COLLECTION_FLAG_INCLUDE_TAGS &                
                ~COLLECTION_FLAG_INCLUDE_LICENSING &
                ~COLLECTION_FLAG_INCLUDE_RELATED_BRAND_DATA &
                ~COLLECTION_FLAG_INCLUDE_PRIVATE_JOB_DATA &                                
                ~COLLECTION_FLAG_INCLUDE_PROJECT_DATA &
                ~COLLECTION_FLAG_INCLUDE_PARTICIPATION_DATA &
                ~COLLECTION_FLAG_INCLUDE_UNRESOLVED_METADATA_EXTENDED &
                ~COLLECTION_FLAG_INCLUDE_UNRESOLVED_TAGS &                
                ~COLLECTION_FLAG_INCLUDE_UNRESOLVED_AVAILABLE_LICENSES &
                ~COLLECTION_FLAG_INCLUDE_UNRESOLVED_ACCESS &                
                ~COLLECTION_FLAG_INCLUDE_CREDIT_BALANCE &
                ~COLLECTION_FLAG_INCLUDE_PUBLISH_REQUESTS &
                ~COLLECTION_FLAG_INCLUDE_UPGRADE_PLAN_REQUESTS &
                ~COLLECTION_FLAG_INCLUDE_UNRESOLVED_LAYOUTS &
                ~COLLECTION_FLAG_INCLUDE_APPROVAL_REQUESTS &
                ~COLLECTION_FLAG_INCLUDE_UNRESOLVED_PUBLISH_CONDITIONS &
                ~COLLECTION_FLAG_INCLUDE_TAG_TRANSLATIONS &
                ~COLLECTION_FLAG_INCLUDE_EXTERNAL_CONTENT_PROVIDERS;

        public const long COLLECTION_FLAG_INCLUDE_ALL =
                COLLECTION_FLAG_INCLUDE_METADATA_BASIC |
                COLLECTION_FLAG_INCLUDE_METADATA_EXTENDED |
                COLLECTION_FLAG_INCLUDE_PRIVATE_WORKINGSET_DATA |
                COLLECTION_FLAG_INCLUDE_PUBLIC_WORKINGSET_DATA |                
                COLLECTION_FLAG_INCLUDE_WORKINGSET_METADATA_EXTENDED |
                COLLECTION_FLAG_INCLUDE_WORKINGSET_BINARIES |
                COLLECTION_FLAG_INCLUDE_BINARY_METATAGS_BASIC |
                COLLECTION_FLAG_INCLUDE_BINARY_METATAGS_EXTENDED |
                COLLECTION_FLAG_INCLUDE_ACCESS |
                COLLECTION_FLAG_INCLUDE_TAGS |                
                COLLECTION_FLAG_INCLUDE_LICENSING |
                COLLECTION_FLAG_INCLUDE_RELATED_BRAND_DATA |
                COLLECTION_FLAG_INCLUDE_PRIVATE_JOB_DATA |
                COLLECTION_FLAG_INCLUDE_PUBLIC_JOB_DATA |                
                COLLECTION_FLAG_INCLUDE_ACQUISITION_DATA |
                COLLECTION_FLAG_INCLUDE_PROJECT_DATA |
                COLLECTION_FLAG_INCLUDE_PARTICIPATION_DATA |
                COLLECTION_FLAG_INCLUDE_RESOLVED_METADATA_EXTENDED |
                COLLECTION_FLAG_INCLUDE_RESOLVED_TAGS |                
                COLLECTION_FLAG_INCLUDE_RESOLVED_AVAILABLE_LICENSES |
                COLLECTION_FLAG_INCLUDE_RESOLVED_ACCESS |
                COLLECTION_FLAG_INCLUDE_UNRESOLVED_METADATA_EXTENDED |
                COLLECTION_FLAG_INCLUDE_UNRESOLVED_TAGS |                
                COLLECTION_FLAG_INCLUDE_UNRESOLVED_AVAILABLE_LICENSES |
                COLLECTION_FLAG_INCLUDE_UNRESOLVED_ACCESS |                
                COLLECTION_FLAG_INCLUDE_PARENTS |
                COLLECTION_FLAG_INCLUDE_DEREFERENCED_DATA |
                COLLECTION_FLAG_INCLUDE_AGGREGATIONS |
                COLLECTION_FLAG_INCLUDE_QUERY_DATA_BASIC |
                COLLECTION_FLAG_INCLUDE_QUERY_DATA_EXTENDED |
                COLLECTION_FLAG_INCLUDE_CREDIT_BALANCE |
                COLLECTION_FLAG_INCLUDE_DOWNLOAD_LINKS |
                COLLECTION_FLAG_INCLUDE_BRAND_QUERY_DATA_EXTENDED |
                COLLECTION_FLAG_INCLUDE_FOLLOW_DATA |
                COLLECTION_FLAG_INCLUDE_LICENSE_REQUESTS |
                COLLECTION_FLAG_INCLUDE_ACCESS_REQUESTS |
                COLLECTION_FLAG_INCLUDE_PUBLISH_REQUESTS |
                COLLECTION_FLAG_INCLUDE_COLLECTED_ENTITIES |
                COLLECTION_FLAG_INCLUDE_NEWS_INDICATOR |
                COLLECTION_FLAG_INCLUDE_UPGRADE_PLAN_REQUESTS |
                COLLECTION_FLAG_INCLUDE_JOIN_REQUESTS |
                COLLECTION_FLAG_INCLUDE_LAYOUTS |
                COLLECTION_FLAG_INCLUDE_RESOLVED_LAYOUTS |
                COLLECTION_FLAG_INCLUDE_UNRESOLVED_LAYOUTS |
                COLLECTION_FLAG_INCLUDE_APPROVAL_REQUESTS |
                COLLECTION_FLAG_INCLUDE_PUBLISH_CONDITIONS |
                COLLECTION_FLAG_INCLUDE_RESOLVED_PUBLISH_CONDITIONS |
                COLLECTION_FLAG_INCLUDE_UNRESOLVED_PUBLISH_CONDITIONS |
                COLLECTION_FLAG_INCLUDE_TAG_TRANSLATIONS |
                COLLECTION_FLAG_INCLUDE_EXTERNAL_CONTENT_PROVIDERS;

        // leave spaces to be able to introduce something later
        // read is implicit if user has any of the other permissions
        public const int ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_READ = 1;
        public const int ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_SHARE = ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_READ * 2;
        public const int ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_PUBLISH_UNPUBLISH = ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_SHARE * 2;
        public const int ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_EDIT = ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_PUBLISH_UNPUBLISH * 2;
        public const int ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_CREATE = ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_EDIT * 2;
        public const int ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_DELETE_AND_RESTORE = ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_CREATE * 2;
        public const int ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_MANAGE_PERMISSIONS = ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_DELETE_AND_RESTORE * 2;

        public const int ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_MANAGE_END_USERS = ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_MANAGE_PERMISSIONS * 2;
        public const int ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_MANAGE_ADMIN_USERS = ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_MANAGE_END_USERS * 2;
        public const int ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_MANAGE_LICENSES = ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_MANAGE_ADMIN_USERS * 2;
        public const int ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_ACQUIRE = ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_MANAGE_LICENSES * 2;
        public const int ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_PURCHASE_CREDITS = ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_ACQUIRE * 2;

        public const int ADMIN_USER_ACCESS_BITMASK_FLAG_JOBS_MANAGE_JOB_PARTICIPATIONS = ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_PURCHASE_CREDITS * 2;

        public const int ADMIN_USER_ACCESS_BITMASK_FLAG_PARTICIPATIONS_PARTICIPATE_IN_JOBS = ADMIN_USER_ACCESS_BITMASK_FLAG_JOBS_MANAGE_JOB_PARTICIPATIONS * 2;

        public const int ADMIN_USER_ACCESS_BITMASK_FLAG_SPECIAL_APPLY_FOR_BRAND_ACCESS = ADMIN_USER_ACCESS_BITMASK_FLAG_PARTICIPATIONS_PARTICIPATE_IN_JOBS * 2;
        public const int ADMIN_USER_ACCESS_BITMASK_FLAG_SPECIAL_CAN_USE_BRAND_ACCESS = ADMIN_USER_ACCESS_BITMASK_FLAG_SPECIAL_APPLY_FOR_BRAND_ACCESS * 2;
        public const int ADMIN_USER_ACCESS_BITMASK_FLAG_SPECIAL_CAN_DOWNLOAD_ACQUIRED_ASSETS = ADMIN_USER_ACCESS_BITMASK_FLAG_SPECIAL_CAN_USE_BRAND_ACCESS * 2;

        public const int ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_CAN_CONFIGURE_EXTERNAL_CONTENT_PROVIDERS = ADMIN_USER_ACCESS_BITMASK_FLAG_SPECIAL_CAN_DOWNLOAD_ACQUIRED_ASSETS * 2;
        public const int ADMIN_USER_ACCESS_BITMASK_FLAG_SPECIAL_CAN_USE_EXTERNAL_CONTENT_PROVIDERS = ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_CAN_CONFIGURE_EXTERNAL_CONTENT_PROVIDERS * 2;

        public const int ADMIN_USER_ACCESS_BITMASK_FLAG_WORLD_ADMIN = ADMIN_USER_ACCESS_BITMASK_FLAG_SPECIAL_CAN_USE_EXTERNAL_CONTENT_PROVIDERS * 2;

        public const int ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_CAN_CONFIGURE_CUSTOM_SUBDOMAIN = ADMIN_USER_ACCESS_BITMASK_FLAG_WORLD_ADMIN * 2;

        public const int ADMIN_USER_ACCESS_BITMASK_FLAG_SPECIAL_CAN_SEE_EXTERNAL_CONTENT_PROVIDER_PRICES = ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_CAN_CONFIGURE_CUSTOM_SUBDOMAIN * 2;

        public const int ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_MANAGE_TRANSACTIONS = ADMIN_USER_ACCESS_BITMASK_FLAG_SPECIAL_CAN_SEE_EXTERNAL_CONTENT_PROVIDER_PRICES * 2;

        public const int ADMIN_USER_ACCESS_BITMASK_EVERYTHING =
                ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_READ |
                ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_SHARE |
                ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_PUBLISH_UNPUBLISH |
                ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_EDIT |
                ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_CREATE |
                ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_DELETE_AND_RESTORE |
                ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_MANAGE_PERMISSIONS |
                ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_MANAGE_END_USERS |
                ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_MANAGE_ADMIN_USERS |
                ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_MANAGE_LICENSES |
                ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_ACQUIRE |
                ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_PURCHASE_CREDITS |
                ADMIN_USER_ACCESS_BITMASK_FLAG_JOBS_MANAGE_JOB_PARTICIPATIONS |
                ADMIN_USER_ACCESS_BITMASK_FLAG_PARTICIPATIONS_PARTICIPATE_IN_JOBS |
                ADMIN_USER_ACCESS_BITMASK_FLAG_SPECIAL_APPLY_FOR_BRAND_ACCESS |
                ADMIN_USER_ACCESS_BITMASK_FLAG_SPECIAL_CAN_USE_BRAND_ACCESS |
                ADMIN_USER_ACCESS_BITMASK_FLAG_SPECIAL_CAN_DOWNLOAD_ACQUIRED_ASSETS |
                ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_CAN_CONFIGURE_EXTERNAL_CONTENT_PROVIDERS |
                ADMIN_USER_ACCESS_BITMASK_FLAG_SPECIAL_CAN_USE_EXTERNAL_CONTENT_PROVIDERS |
                ADMIN_USER_ACCESS_BITMASK_FLAG_WORLD_ADMIN |
                ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_CAN_CONFIGURE_CUSTOM_SUBDOMAIN |
                ADMIN_USER_ACCESS_BITMASK_FLAG_SPECIAL_CAN_SEE_EXTERNAL_CONTENT_PROVIDER_PRICES |
                ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_MANAGE_TRANSACTIONS;

        public const int ADMIN_USER_BITMASK_PERMISSIONS_GIVE_FULL_READ_ACCESS =
                ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_READ |
                ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_PUBLISH_UNPUBLISH |
                ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_EDIT |
                ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_CREATE |
                ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_DELETE_AND_RESTORE |
                ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_MANAGE_PERMISSIONS |
                ADMIN_USER_ACCESS_BITMASK_FLAG_JOBS_MANAGE_JOB_PARTICIPATIONS |
                ADMIN_USER_ACCESS_BITMASK_FLAG_PARTICIPATIONS_PARTICIPATE_IN_JOBS |
                ADMIN_USER_ACCESS_BITMASK_FLAG_WORLD_ADMIN;        

        // History

        public const string KEY_PREVIEW_SIZE = "previewSize";
	    public const string KEY_READ_ACCESS_MODEL = "readAccess/readAccessModel";
	    public const string KEY_PUBLIC_READ_ACCESS_PERMISSION = "readAccess/publicReadAccessPermission";
	    public const string KEY_LICENSING_MODEL = "licensing/licensingModel";
        public const string KEY_LICENSING_ALLOW_ANONYMOUS_DOWNLOAD = "licensing/allowAnonymousDownload";
	    public const string KEY_WRITE_ACCESS_MODEL = "writeAccess/writeAccessModel";
	    public const string KEY_BRAND_DEFAULT_LOCALE = "brandDefaultLocale";
        public const string KEY_BRAND_OVERRIDE_DEFAULT_LOCALE_FOR_CHILDS = "brandOverrideDefaultLocaleForChilds";
        public const string KEY_BRAND_DEFAULT_CONTENT_CATEGORY = "brandDefaultContentCategory";
        public const string KEY_BRAND_TYPE = "brandType";
        public const string KEY_BRAND_CUSTOM_DESIGN_COLOR_1 = "brandCustomDesign/color1";
	    public const string KEY_BRAND_CUSTOM_DESIGN_COLOR_2 = "brandCustomDesign/color2";
        public const string KEY_BRAND_CUSTOM_SUBDOMAIN_SUBDOMAIN = "customSubdomain/subdomain";        
        public const string KEY_BRAND_COMPANY_INFO_COMPANY_NAME = "brandCompanyInfo/companyName";
	    public const string KEY_BRAND_COMPANY_INFO_CONTACT_PERSON_FAMILY_NAME = "brandCompanyInfo/contactPersonFamilyName";
        public const string KEY_BRAND_COMPANY_INFO_CONTACT_PERSON_GIVEN_NAME = "brandCompanyInfo/contactPersonGivenName";
        public const string KEY_BRAND_COMPANY_INFO_CONTACT_PERSON_JOB_TITLE = "brandCompanyInfo/contactPersonJobTitle";
        public const string KEY_BRAND_COMPANY_INFO_STREET = "brandCompanyInfo/street";
	    public const string KEY_BRAND_COMPANY_INFO_POSTAL_CODE = "brandCompanyInfo/postalCode";
	    public const string KEY_BRAND_COMPANY_INFO_CITY = "brandCompanyInfo/city";
	    public const string KEY_BRAND_COMPANY_INFO_COUNTRY_CODE = "brandCompanyInfo/countryCode";
	    public const string KEY_BRAND_COMPANY_INFO_VAT = "brandCompanyInfo/vat";
	    public const string KEY_BRAND_COMPANY_INFO_EMAIL = "brandCompanyInfo/email";
        public const string KEY_BRAND_SHOW_CONTACT_EMAIL_ADDRESS = "showContactEmailAddress";
        public const string KEY_BRAND_COMPANY_INFO_PUBLICATION_NAME = "brandCompanyInfo/publicationName";
        public const string KEY_BRAND_BILLING_COMPANY_INFO_COMPANY_NAME = "brandBillingCompanyInfo/companyName";
        public const string KEY_BRAND_BILLING_COMPANY_INFO_CONTACT_PERSON_FAMILY_NAME = "brandBillingCompanyInfo/contactPersonFamilyName";
        public const string KEY_BRAND_BILLING_COMPANY_INFO_CONTACT_PERSON_GIVEN_NAME = "brandBillingCompanyInfo/contactPersonGivenName";
        public const string KEY_BRAND_BILLING_COMPANY_INFO_CONTACT_PERSON_JOB_TITLE = "brandBillingCompanyInfo/contactPersonJobTitle";
        public const string KEY_BRAND_BILLING_COMPANY_INFO_STREET = "brandBillingCompanyInfo/street";
        public const string KEY_BRAND_BILLING_COMPANY_INFO_POSTAL_CODE = "brandBillingCompanyInfo/postalCode";
        public const string KEY_BRAND_BILLING_COMPANY_INFO_CITY = "brandBillingCompanyInfo/city";
        public const string KEY_BRAND_BILLING_COMPANY_INFO_COUNTRY_CODE = "brandBillingCompanyInfo/countryCode";
        public const string KEY_BRAND_BILLING_COMPANY_INFO_VAT = "brandBillingCompanyInfo/vat";
        public const string KEY_BRAND_BILLING_COMPANY_INFO_EMAIL = "brandBillingCompanyInfo/email";
        public const string KEY_BRAND_APPROVED = "approved";
        public const string KEY_BRAND_BILLING_INFO_OVERRIDE = "brandBillingInfoOverride";
	    public const string KEY_BRAND_LAND_LAYOUT = "brandLandLayout";
	    public const string KEY_FEATURE_PRIORITY = "featurePriority";
        public const string KEY_APPLY_WATERMARK = "applyWatermark";
	    public const string KEY_ORDER = "order";

        public const string KEY_PUBLISH_CONDITION_MODEL = "publishCondition/publishConditionModel";
	    public const string KEY_PUBLISH_CONDITION_PUBLISH_FROM_TIMESTAMP = "publishCondition/publishFromTimestamp";
	    public const string KEY_PUBLISH_CONDITION_PUBLISH_TO_TIMESTAMP = "publishCondition/publishToTimestamp";
		
	    public const string KEY_FOLDER_LAYOUT_MODEL = "folderLayout/folderLayoutModel";
	    public const string KEY_FOLDER_LAYOUT_LIST_VIEW_LAYOUT = "folderLayout/listViewLayout";
	    public const string KEY_FOLDER_LAYOUT_INNER_LAYOUT = "folderLayout/innerLayout";

        public const string KEY_CONTENT_CATEGORY = "contentCategory";

        public const string KEY_DEFAULT_LOCALE = "defaultLocale";
        public const string KEY_OVERRIDE_DEFAULT_LOCALE_FOR_CHILDS = "overrideDefaultLocaleForChilds";

        public const string KEY_ADMIN_USER_GROUP_ACCESS_FLAGS = "accessFlags";	
	    public const string KEY_ADMIN_USER_GROUP_CANNOT_BE_DELETED = "adminUserGroupCannotBeDeleted";
	    public const string KEY_ADMIN_USER_GROUP_CANNOT_BE_CHANGED = "cannotBeChanged";
	    public const string KEY_BINARY_IMAGE_CROP = "imagePresets/crop";
        public const string KEY_BINARY_IMAGE_FOREGROUND_COLOR = "imagePresets/foregroundColor";
        public const string KEY_BINARY_IMAGE_BACKGROUND_COLOR = "imagePresets/backgroundColor";	    
	    public const string KEY_BINARY_VIDEO_THUMBNAIL_GENERATION_PERCENTAGE = "videoPresets/thumbnailPercentage";
	    public const string KEY_BINARY_DOCUMENT_PREVIEW_PAGE = "documentPresets/previewPage";
        public const string KEY_BINARY_DOCUMENT_LIMIT_PREVIEW_TO_ONE_PAGER = "documentPresets/limitPreviewToOnePager";
        public const string KEY_BINARY_DOCUMENT_NUMBER_OF_PREVIEW_PARAGRAPHS = "documentPresets/numberOfPreviewParagraphs";
        public const string KEY_PROJECT_STATE = "projectState";        
	    public const string KEY_TRANSLATION_TEXT = "text";
	    public const string KEY_USER_GROUP_USER_ADDED = "userAdded";
	    public const string KEY_USER_GROUP_USER_REMOVED = "userRemoved";
	    public const string KEY_USER_GROUP_LOCALE_NAME = "userGroupLocaleName";
	    public const string KEY_USER_GROUP_LOCALE_DESCRIPTION = "userGroupLocaleDescription";        
        public const string KEY_USER_GROUP_CANNOT_BE_DELETED = "userGroupCannotBeDeleted";
	    public const string KEY_USER_GROUP_MUST_CONTAIN_AT_LEAST_ONE_ENTRY = "mustContainOneEntry";
	    public const string KEY_LICENSE_LOCALE_NAME = "licenseLocaleName";
        public const string KEY_LICENSE_LOCALE_SUMMARY = "licenseLocaleSummary";
	    public const string KEY_LICENSE_EXCLUSIVITY_TYPE = "exclusivityType";	
	    public const string KEY_LICENSE_VALIDITY_PERIOD_DAYS = "validityPeriodDays";
        public const string KEY_LICENSE_IMAGE_PRICE = "licenseImagePrice";
	    public const string KEY_LICENSE_VIDEO_PRICE = "licenseVideoPrice";
	    public const string KEY_LICENSE_AUDIO_PRICE = "licenseAudioPrice";
	    public const string KEY_LICENSE_DOCUMENT_PRICE = "licenseDocumentPrice";
	    public const string KEY_LICENSE_OF_IMAGE_PRICE_IS_TRANSACTION_FEE = "ofImagePriceIsTransactionFee";
	    public const string KEY_LICENSE_OF_VIDEO_PRICE_IS_TRANSACTION_FEE = "ofVideoPriceIsTransactionFee";
	    public const string KEY_LICENSE_OF_AUDIO_PRICE_IS_TRANSACTION_FEE = "ofAudioPriceIsTransactionFee";
	    public const string KEY_LICENSE_OF_DOCUMENT_PRICE_IS_TRANSACTION_FEE = "ofDocumentPriceIsTransactionFee";
	    public const string KEY_LICENSE_TRANSACTION_FEE = "transactionFee";
	    public const string KEY_LICENSE_LOCALE_TERMS_OF_USE = "termsOfUse";
	    public const string KEY_LICENSE_LOCALE_RESTRICTED_PUBLISHING_TOPICS = "restrictedPublishingTopics";
	    public const string KEY_LICENSE_LOCALE_RESTRICTED_INDUSTRIES = "restrictedIndustries";
	    public const string KEY_LICENSE_LOCALE_RESTRICTED_GEO_USE = "restrictedGeoUse";
	    public const string KEY_ENTITY_LOCALE_NAME = "entityLocaleName";
	    public const string KEY_ENTITY_LOCALE_DESCRIPTION = "entityLocaleDescription";
	    public const string KEY_ENTITY_LOCALE_EDITORIAL_TEXT = "editorialText";
        public const string KEY_ENTITY_LOCALE_CONTEXT_TEXT_1 = "contextText1";
        public const string KEY_ENTITY_LOCALE_CONTACT_INFO_FACEBOOK_LINK = "contactInfo/facebookLink";
	    public const string KEY_ENTITY_LOCALE_CONTACT_INFO_TWITTER_LINK = "contactInfo/twitterLink";
	    public const string KEY_ENTITY_LOCALE_CONTACT_INFO_GOOGLE_PLUS_LINK = "contactInfo/googlePlusLink";
	    public const string KEY_ENTITY_LOCALE_CONTACT_INFO_NAME = "contactInfo/name";
	    public const string KEY_ENTITY_LOCALE_CONTACT_INFO_STREET = "contactInfo/street";
	    public const string KEY_ENTITY_LOCALE_CONTACT_INFO_POSTAL_CODE = "contactInfo/postalCode";
	    public const string KEY_ENTITY_LOCALE_CONTACT_INFO_CITY = "contactInfo/city";
	    public const string KEY_ENTITY_LOCALE_CONTACT_INFO_COUNTRY_CODE = "contactInfo/countryCode";
	    public const string KEY_ENTITY_LOCALE_CONTACT_INFO_PHONE = "contactInfo/phone";
	    public const string KEY_ENTITY_LOCALE_CONTACT_INFO_WEBSITE = "contactInfo/website";
	    public const string KEY_ENTITY_LOCALE_CONTACT_INFO_EMAIL = "contactInfo/email";
	    public const string KEY_BRAND_LINK_NAME = "brandLinkName";
	    public const string KEY_BRAND_LINK_LINK = "brandLinkLink";
	    public const string KEY_ENTITY_BINARY_SET_NAME = "binarySetName";
        public const string KEY_ENTITY_BINARY_SET_AUTHOR = "binarySetAuthor";
        public const string KEY_REQUIRES_MANUAL_COMMIT = "requiresManualCommit";
        public const string KEY_REQUIRES_APPLICATION_MESSAGE = "requiresApplicationMessage";
        public const string KEY_COST_CENTER_ID = "costCenterId";
        public const string KEY_JOB_TYPE = "type";
	    public const string KEY_JOB_PRICING_TYPE = "pricingType";
	    public const string KEY_JOB_PARTICIPATION_TYPE = "participationType";
	    public const string KEY_JOB_STATE = "state";
	    public const string KEY_JOB_LICENSE_ID = "jobLicenseId";
	    public const string KEY_JOB_END_TIMESTAMP = "endTimestamp";
	    public const string KEY_JOB_REWARD = "reward";
	    public const string KEY_PARTICIPATION_PRICE = "price";

        public const string KEY_ASSET_LAYOUT_MODEL = "assetLayout/assetLayoutModel";
	    public const string KEY_ASSET_LAYOUT_RICHTEXT_LIST_VIEW_LAYOUT = "assetLayout/richtextListViewLayout";
	    public const string KEY_ASSET_LAYOUT_INNER_LAYOUT = "assetLayout/innerLayout";
	
	    public const string KEY_ASSET_PUBLICATION_TIMESTAMP = "publicationTimestamp";

        public const string KEY_ASSET_REVIEW_STATE = "reviewState";
	    public const string KEY_ASSET_RELEASE_REFERENCE = "releaseReference";
        public const string KEY_ASSET_CANONICAL_URL = "canonicalUrl";
	
        public const string KEY_ECP_PRICING_MODEL = "pricingModel";
	
	    public const string KEY_ECP_IMAGE_EXTERNAL_CREDIT_PRICE_FULL = "imageExternalCreditPriceFull";
        public const string KEY_ECP_IMAGE_EXTERNAL_CREDIT_PRICE_MEDIUM = "imageExternalCreditPriceMedium";
        public const string KEY_ECP_IMAGE_EXTERNAL_CREDIT_PRICE_SMALL = "imageExternalCreditPriceSmall";
        public const string KEY_ECP_VIDEO_EXTERNAL_CREDIT_PRICE_4K = "videoExternalCreditPrice4K";
        public const string KEY_ECP_VIDEO_EXTERNAL_CREDIT_PRICE_HD = "videoExternalCreditPriceHD";
        public const string KEY_ECP_VIDEO_EXTERNAL_CREDIT_PRICE_SD = "videoExternalCreditPriceSD";
        public const string KEY_ECP_VIDEO_EXTERNAL_CREDIT_PRICE_LR = "videoExternalCreditPriceLR";
        public const string KEY_ECP_AUDIO_EXTERNAL_CREDIT_PRICE = "audioExternalCreditPrice";
	    public const string KEY_ECP_DOCUMENT_EXTERNAL_CREDIT_PRICE = "documentExternalCreditPrice";
	
	    public const string KEY_ECP_IMAGE_MONETARY_PRICE_FULL = "imageMonetaryPriceFull";
        public const string KEY_ECP_IMAGE_MONETARY_PRICE_MEDIUM = "imageMonetaryPriceMedium";
        public const string KEY_ECP_IMAGE_MONETARY_PRICE_SMALL = "imageMonetaryPriceSmall";
        public const string KEY_ECP_VIDEO_MONETARY_PRICE_4K = "videoMonetaryPrice4K";
        public const string KEY_ECP_VIDEO_MONETARY_PRICE_HD = "videoMonetaryPriceHD";
        public const string KEY_ECP_VIDEO_MONETARY_PRICE_SD = "videoMonetaryPriceSD";
        public const string KEY_ECP_VIDEO_MONETARY_PRICE_LR = "videoMonetaryPriceLR";
        public const string KEY_ECP_AUDIO_MONETARY_PRICE = "audioMonetaryPrice";
	    public const string KEY_ECP_DOCUMENT_MONETARY_PRICE = "documentMonetaryPrice";
	
	    public const string KEY_ECP_WARNING_LIMIT_DOWNLOADS = "warningLimitDownloads";
        public const string KEY_ECP_WARNING_LIMIT_CREDITS = "warningLimitCredits";

        public const string KEY_COLLECTED_ENTITY_LICENSE_UUID = "licenseUuid";
	    public const string KEY_COLLECTED_ENTITY_RELATED_TO_ADMIN_USER_GROUP_UUID = "relatedToAdminUserGroupUuid";

        // Precalculated metatag fields

        public const string METATAG_BASIC_PREFIX = "MT_";
        public const string METATAG_ADVANCED_PREFIX = "MA_";

        public const string METATAG_WIDTH = METATAG_BASIC_PREFIX + "Width";
        public const string METATAG_HEIGHT = METATAG_BASIC_PREFIX + "Height";
        public const string METATAG_ASPECT_RATIO = METATAG_BASIC_PREFIX + "AspectRatio";
        public const string METATAG_DPIX = METATAG_BASIC_PREFIX + "DpiX";
        public const string METATAG_DPIY = METATAG_BASIC_PREFIX + "DpiY";
        public const string METATAG_COLORSPACE_NAME = METATAG_BASIC_PREFIX + "ColorSpaceName";
        public const string METATAG_PAGECOUNT = METATAG_BASIC_PREFIX + "PageCount";
        public const string METATAG_FILESIZE = METATAG_BASIC_PREFIX + "FileSize";
        public const string METATAG_MIMETYPE = METATAG_BASIC_PREFIX + "MimeType";
        public const string METATAG_DURATION = METATAG_BASIC_PREFIX + "Duration";
        public const string METATAG_FRAME_RATE = METATAG_BASIC_PREFIX + "FrameRate";
        public const string METATAG_CODEC = METATAG_BASIC_PREFIX + "Codec";
        public const string METATAG_SCAN_TYPE = METATAG_BASIC_PREFIX + "ScanType";
        public const string METATAG_ORIGINAL_FILE_NAME = METATAG_BASIC_PREFIX + "OriginalFileName";
        public const string METATAG_UPLOAD_TIMESTAMP = METATAG_BASIC_PREFIX + "UploadTimestamp";
        public const string METATAG_SOURCE = METATAG_BASIC_PREFIX + "Source";

        public const string METATAG_DESCRIPTION = METATAG_ADVANCED_PREFIX + "Description";
	    public const string METATAG_KEYWORDS = METATAG_ADVANCED_PREFIX + "Keywords";
        public const string METATAG_AUTHOR = METATAG_ADVANCED_PREFIX + "Author";

        // sources

        public const int SOURCE_CONTIDIO = 1;

        // mime types

        public const string MIME_TYPE_IMAGE_JPG = "image/jpeg";
	    public const string MIME_TYPE_IMAGE_GIF = "image/gif";
	    public const string MIME_TYPE_IMAGE_PNG = "image/png";

	    public const string MIME_TYPE_IMAGE_WEBP = "image/webp";
	    public const string MIME_TYPE_IMAGE_TIFF = "image/tiff";
	
	    public const string MIME_TYPE_VIDEO_MP4 = "video/mp4";
	    public const string MIME_TYPE_VIDEO_WEBM = "video/webm";
	    public const string MIME_TYPE_VIDEO_OGG = "video/ogg";        
        public const string MIME_TYPE_VIDEO_MKV = "video/x-matroska";
        public const string MIME_TYPE_VIDEO_MOV = "video/quicktime";
        public const string MIME_TYPE_VIDEO_3GPP = "video/3gpp";
        public const string MIME_TYPE_VIDEO_WMV = "video/x-ms-wmv";

        public const string MIME_TYPE_AUDIO_M4A = "audio/m4a";
	    public const string MIME_TYPE_AUDIO_XM4A = "audio/x-m4a";
	    public const string MIME_TYPE_AUDIO_MP3 = "audio/mp3";
        public const string MIME_TYPE_AUDIO_MP4 = "audio/mp4";
        public const string MIME_TYPE_AUDIO_MPEG = "audio/mpeg";
	    public const string MIME_TYPE_AUDIO_OGG = "audio/ogg";
	    public const string MIME_TYPE_AUDIO_WAV = "audio/wav";
	    public const string MIME_TYPE_AUDIO_WEBM = "audio/webm";
        public const string MIME_TYPE_AUDIO_WMA = "audio/x-ms-wma";


        public const string MIME_TYPE_DOCUMENT_PDF = "application/pdf";
        public const string MIME_TYPE_DOCUMENT_HTML = "text/html";
        public const string MIME_TYPE_DOCUMENT_TXT_PLAIN = "text/plain";

        // only supported by ECP at the moment

        public const string MIME_TYPE_IMAGE_EPS = "image/eps";
        public const string MIME_TYPE_IMAGE_SVG = "image/svg+xml";
	    public const string MIME_TYPE_IMAGE_APPLICATION_ILLUSTRATOR = "application/illustrator";

        // read permissions

        public const int READ_PERMISSION_READ_FULL = 4;
        public const int READ_PERMISSION_READ_PRE_LICENSED = 3;
        public const int READ_PERMISSION_READ_QUALITY_RESTRICTED = 2;
        public const int READ_PERMISSION_ONLY_ALLOW_REGISTRATION = 1;
        public const int READ_PERMISSION_DENIED = 0;       

	    // aggregation keys
	
	    public const string AGGREGATION_KEY_TAG = "tag";
	    public const string AGGREGATION_KEY_TYPE = "type";
        public const string AGGREGATION_KEY_CONTENT_CATEGORY = "contentCategory";
        public const string AGGREGATION_KEY_BINARY_TYPE = "binaryType";
        public const string AGGREGATION_KEY_LOCALES = "locales";	    
	    public const string AGGREGATION_KEY_DIMENSION = "dimension";
	    public const string AGGREGATION_KEY_UPLOADED = "uploaded";
	    public const string AGGREGATION_KEY_ORIENTATION = "orientation";
	
	    public const string AGGREGATION_KEY_VIDEO_FORMAT = "videoFormat";
	    public const string AGGREGATION_KEY_VIDEO_ASPECT_RATIO = "videoAspectRatio";
	
	    public const string AGGREGATION_KEY_DURATION = "duration";
	
	    public const string AGGREGATION_KEY_PAGE_COUNT = "pageCount";

        public const string AGGREGATION_KEY_SOURCE = "source";
        
        public const string AGGREGATION_KEY_LICENSE_ID = "licenseId";

        public const string AGGREGATION_KEY_REVIEW_STATE = "reviewState";
	
        // fixed UUIDs

        public const string CONTIDIO_BRAND_UUID = "300000011";
	    public const string CONTIDIO_PRIVATE_USE_SHARED_NON_EXCLUSIVE_LICENSE_UUID = "200000021";
        public const string CONTIDIO_EDITORIAL_USE_SHARED_NON_EXCLUSIVE_LICENSE_FREE_UUID = "200000022";
	    public const string CONTIDIO_EDITORIAL_USE_SHARED_NON_EXCLUSIVE_LICENSE_STANDARD_UUID = "200000023";
        public const string CONTIDIO_EDITORIAL_USE_SHARED_NON_EXCLUSIVE_LICENSE_PREMIUM_UUID = "200000024";
        public const string CONTIDIO_COMMERCIAL_USE_SHARED_NON_EXCLUSIVE_LICENSE_FREE_UUID = "200000025";
        public const string CONTIDIO_COMMERCIAL_USE_SHARED_NON_EXCLUSIVE_LICENSE_STANDARD_UUID = "200000026";
        public const string CONTIDIO_COMMERCIAL_USE_SHARED_NON_EXCLUSIVE_LICENSE_PREMIUM_UUID = "200000027";
        public const string CONTIDIO_COMMERCIAL_USE_EXCLUSIVE_LICENSE_UUID = "200000028";        
       
        public const string CONTIDIO_ACCREDITED_JOURNALISTS_USER_GROUP_UUID = "100000031";
	    public const string CONTIDIO_CONFIRMED_PROFESSIONALS_USER_GROUP_UUID = "100000032";
	    public const string CONTIDIO_CONFIRMED_BRANDS_USER_GROUP_UUID = "100000033";

        // string keys

        public const string STRING_KEY_DEFAULT_PROJECT_NAME = "++STRING_KEY_DEFAULT_PROJECT_NAME++";
	    public const string STRING_KEY_ADMINS_GROUP_NAME = "++STRING_KEY_ADMINS_NAME++";
	    public const string STRING_KEY_ADMINS_GROUP_DESCRIPTION = "++STRING_KEY_ADMINS_DESCRIPTION++";

        // text max length

        public const int MAX_LENGTH_ENTITY_BRAND_NAME = 50;
        public const int MAX_LENGTH_ENTITY_OTHER_NAME = 80;
        public const int MAX_LENGTH_ENTITY_BRAND_DESCRIPTION = 80;
        public const int MAX_LENGTH_ENTITY_OTHER_DESCRIPTION = 80;
        public const int MAX_LENGTH_ENTITY_CONTEXT_TEXT_1 = 50;

        public const int MAX_LENGTH_USER_GROUP_NAME = 50;
        public const int MAX_LENGTH_LICENSE_NAME = 50;
        public const int MAX_LENGTH_BRAND_LINK_NAME = 30;
        public const int MAX_LENGTH_ENTITY_BINARY_SET_NAME = 50;

        public const int MAX_LENGTH_LICENSE_SUMMARY = 150;

        public const int MAX_LENGTH_EMAIL = 254;

        public const int MAX_LENGTH_COST_CENTER_ID = 50;

        // contact form length

        public const int MIN_LENGTH_CONTACT_FORM_SUBJECT = 5;
        public const int MAX_LENGTH_CONTACT_FORM_SUBJECT = 150;

        public const int MIN_LENGTH_CONTACT_FORM_MESSAGE = 10;
        public const int MAX_LENGTH_CONTACT_FORM_MESSAGE = 6000;

        // reserved output IDs

        public const int OUTPUT_ID_DEFAULT = -1;
        public const int OUTPUT_ID_ORIGINAL_PREVIEW = -2;

        // uploads

        public const int VIDEO_FILE_SIZE_LIMIT = 1073741824; // 1 GiB
        public const int AUDIO_FILE_SIZE_LIMIT = 134217728; // 128 MiB
        public const int IMAGE_FILE_SIZE_LIMIT = 134217728; // 128 MiB
        public const int DOCUMENT_FILE_SIZE_LIMIT = 134217728; // 128 MiB

        // richtext

        public const int RICHTEXT_BINARY_SET_ID = 10000;

        // locales

        public const string WILDCARD_LOCALE = "*";
	
        static SdkConstants()
        {
            if (COLLECTION_FLAG_INCLUDE_EXTERNAL_CONTENT_PROVIDERS != 562949953421312L)
                throw new Exception("Something is wrong with the inclusion flags");

            if (ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_MANAGE_TRANSACTIONS != 4194304)
                throw new Exception("Something is wrong with the permission flags");
        }
    }
}
