import Long = require('long');

export default class SdkConstants {
  public static readonly COLLECTION_FLAG_INCLUDE_NONE: Long = Long.fromNumber(0);

  public static readonly COLLECTION_FLAG_INCLUDE_METADATA_BASIC: Long = Long.fromNumber(1);
  public static readonly COLLECTION_FLAG_INCLUDE_METADATA_EXTENDED: Long = SdkConstants.COLLECTION_FLAG_INCLUDE_METADATA_BASIC.mul(2);
  public static readonly COLLECTION_FLAG_INCLUDE_PRIVATE_WORKINGSET_DATA: Long = SdkConstants.COLLECTION_FLAG_INCLUDE_METADATA_EXTENDED.mul(2);
  public static readonly COLLECTION_FLAG_INCLUDE_PUBLIC_WORKINGSET_DATA: Long = SdkConstants.COLLECTION_FLAG_INCLUDE_PRIVATE_WORKINGSET_DATA.mul(2);
  public static readonly COLLECTION_FLAG_INCLUDE_WORKINGSET_METADATA_EXTENDED: Long = SdkConstants.COLLECTION_FLAG_INCLUDE_PUBLIC_WORKINGSET_DATA.mul(2);
  public static readonly COLLECTION_FLAG_INCLUDE_WORKINGSET_BINARIES: Long = SdkConstants.COLLECTION_FLAG_INCLUDE_WORKINGSET_METADATA_EXTENDED.mul(2);
  public static readonly COLLECTION_FLAG_INCLUDE_BINARY_METATAGS_BASIC: Long = SdkConstants.COLLECTION_FLAG_INCLUDE_WORKINGSET_BINARIES.mul(2);
  public static readonly COLLECTION_FLAG_INCLUDE_BINARY_METATAGS_EXTENDED: Long = SdkConstants.COLLECTION_FLAG_INCLUDE_BINARY_METATAGS_BASIC.mul(2);
  public static readonly COLLECTION_FLAG_INCLUDE_ACCESS: Long = SdkConstants.COLLECTION_FLAG_INCLUDE_BINARY_METATAGS_EXTENDED.mul(2);
  public static readonly COLLECTION_FLAG_INCLUDE_TAGS: Long = SdkConstants.COLLECTION_FLAG_INCLUDE_ACCESS.mul(2);
  public static readonly COLLECTION_FLAG_INCLUDE_LICENSING: Long = SdkConstants.COLLECTION_FLAG_INCLUDE_TAGS.mul(2);
  public static readonly COLLECTION_FLAG_INCLUDE_RELATED_BRAND_DATA: Long = SdkConstants.COLLECTION_FLAG_INCLUDE_LICENSING.mul(2);
  public static readonly COLLECTION_FLAG_INCLUDE_PRIVATE_JOB_DATA: Long = SdkConstants.COLLECTION_FLAG_INCLUDE_RELATED_BRAND_DATA.mul(2);
  public static readonly COLLECTION_FLAG_INCLUDE_PUBLIC_JOB_DATA: Long = SdkConstants.COLLECTION_FLAG_INCLUDE_PRIVATE_JOB_DATA.mul(2);
  public static readonly COLLECTION_FLAG_INCLUDE_ACQUISITION_DATA: Long = SdkConstants.COLLECTION_FLAG_INCLUDE_PUBLIC_JOB_DATA.mul(2);
  public static readonly COLLECTION_FLAG_INCLUDE_PROJECT_DATA: Long = SdkConstants.COLLECTION_FLAG_INCLUDE_ACQUISITION_DATA.mul(2);
  public static readonly COLLECTION_FLAG_INCLUDE_PARTICIPATION_DATA: Long = SdkConstants.COLLECTION_FLAG_INCLUDE_PROJECT_DATA.mul(2);
  public static readonly COLLECTION_FLAG_INCLUDE_RESOLVED_METADATA_EXTENDED: Long = SdkConstants.COLLECTION_FLAG_INCLUDE_PARTICIPATION_DATA.mul(2);
  public static readonly COLLECTION_FLAG_INCLUDE_RESOLVED_TAGS: Long = SdkConstants.COLLECTION_FLAG_INCLUDE_RESOLVED_METADATA_EXTENDED.mul(2);
  public static readonly COLLECTION_FLAG_INCLUDE_RESOLVED_AVAILABLE_LICENSES: Long = SdkConstants.COLLECTION_FLAG_INCLUDE_RESOLVED_TAGS.mul(2);
  public static readonly COLLECTION_FLAG_INCLUDE_RESOLVED_ACCESS: Long = SdkConstants.COLLECTION_FLAG_INCLUDE_RESOLVED_AVAILABLE_LICENSES.mul(2);
  public static readonly COLLECTION_FLAG_INCLUDE_UNRESOLVED_METADATA_EXTENDED: Long = SdkConstants.COLLECTION_FLAG_INCLUDE_RESOLVED_ACCESS.mul(2);
  public static readonly COLLECTION_FLAG_INCLUDE_UNRESOLVED_TAGS: Long = SdkConstants.COLLECTION_FLAG_INCLUDE_UNRESOLVED_METADATA_EXTENDED.mul(2);
  public static readonly COLLECTION_FLAG_INCLUDE_UNRESOLVED_AVAILABLE_LICENSES: Long = SdkConstants.COLLECTION_FLAG_INCLUDE_UNRESOLVED_TAGS.mul(2);
  public static readonly COLLECTION_FLAG_INCLUDE_UNRESOLVED_ACCESS: Long = SdkConstants.COLLECTION_FLAG_INCLUDE_UNRESOLVED_AVAILABLE_LICENSES.mul(2);
  public static readonly COLLECTION_FLAG_INCLUDE_PARENTS: Long = SdkConstants.COLLECTION_FLAG_INCLUDE_UNRESOLVED_ACCESS.mul(2);
  public static readonly COLLECTION_FLAG_INCLUDE_DEREFERENCED_DATA: Long = SdkConstants.COLLECTION_FLAG_INCLUDE_PARENTS.mul(2);
  public static readonly COLLECTION_FLAG_INCLUDE_AGGREGATIONS: Long = SdkConstants.COLLECTION_FLAG_INCLUDE_DEREFERENCED_DATA.mul(2);
  public static readonly COLLECTION_FLAG_INCLUDE_QUERY_DATA_BASIC: Long = SdkConstants.COLLECTION_FLAG_INCLUDE_AGGREGATIONS.mul(2);
  public static readonly COLLECTION_FLAG_INCLUDE_QUERY_DATA_EXTENDED: Long = SdkConstants.COLLECTION_FLAG_INCLUDE_QUERY_DATA_BASIC.mul(2);
  public static readonly COLLECTION_FLAG_INCLUDE_CREDIT_BALANCE: Long = SdkConstants.COLLECTION_FLAG_INCLUDE_QUERY_DATA_EXTENDED.mul(2);
  public static readonly COLLECTION_FLAG_INCLUDE_DOWNLOAD_LINKS: Long = SdkConstants.COLLECTION_FLAG_INCLUDE_CREDIT_BALANCE.mul(2);
  public static readonly COLLECTION_FLAG_INCLUDE_BRAND_QUERY_DATA_EXTENDED: Long = SdkConstants.COLLECTION_FLAG_INCLUDE_DOWNLOAD_LINKS.mul(2);
  public static readonly COLLECTION_FLAG_INCLUDE_FOLLOW_DATA: Long = SdkConstants.COLLECTION_FLAG_INCLUDE_BRAND_QUERY_DATA_EXTENDED.mul(2);
  public static readonly COLLECTION_FLAG_INCLUDE_LICENSE_REQUESTS: Long =  SdkConstants.COLLECTION_FLAG_INCLUDE_FOLLOW_DATA.mul(2);
  public static readonly COLLECTION_FLAG_INCLUDE_ACCESS_REQUESTS: Long =  SdkConstants.COLLECTION_FLAG_INCLUDE_LICENSE_REQUESTS.mul(2);
  public static readonly COLLECTION_FLAG_INCLUDE_PUBLISH_REQUESTS: Long =  SdkConstants.COLLECTION_FLAG_INCLUDE_ACCESS_REQUESTS.mul(2);
  public static readonly COLLECTION_FLAG_INCLUDE_COLLECTED_ENTITIES: Long =  SdkConstants.COLLECTION_FLAG_INCLUDE_PUBLISH_REQUESTS.mul(2);
  public static readonly COLLECTION_FLAG_INCLUDE_NEWS_INDICATOR: Long =  SdkConstants.COLLECTION_FLAG_INCLUDE_COLLECTED_ENTITIES.mul(2);
  public static readonly COLLECTION_FLAG_INCLUDE_UPGRADE_PLAN_REQUESTS: Long = SdkConstants.COLLECTION_FLAG_INCLUDE_NEWS_INDICATOR.mul(2);
  public static readonly COLLECTION_FLAG_INCLUDE_JOIN_REQUESTS: Long = SdkConstants.COLLECTION_FLAG_INCLUDE_UPGRADE_PLAN_REQUESTS.mul(2);
  public static readonly COLLECTION_FLAG_INCLUDE_LAYOUTS: Long = SdkConstants.COLLECTION_FLAG_INCLUDE_JOIN_REQUESTS.mul(2);
  public static readonly COLLECTION_FLAG_INCLUDE_RESOLVED_LAYOUTS: Long = SdkConstants.COLLECTION_FLAG_INCLUDE_LAYOUTS.mul(2);
  public static readonly COLLECTION_FLAG_INCLUDE_UNRESOLVED_LAYOUTS: Long = SdkConstants.COLLECTION_FLAG_INCLUDE_RESOLVED_LAYOUTS.mul(2);
  public static readonly COLLECTION_FLAG_INCLUDE_APPROVAL_REQUESTS: Long = SdkConstants.COLLECTION_FLAG_INCLUDE_UNRESOLVED_LAYOUTS.mul(2);
  public static readonly COLLECTION_FLAG_INCLUDE_PUBLISH_CONDITIONS: Long = SdkConstants.COLLECTION_FLAG_INCLUDE_APPROVAL_REQUESTS.mul(2);
  public static readonly COLLECTION_FLAG_INCLUDE_UNRESOLVED_PUBLISH_CONDITIONS: Long = SdkConstants.COLLECTION_FLAG_INCLUDE_PUBLISH_CONDITIONS.mul(2);
  public static readonly COLLECTION_FLAG_INCLUDE_RESOLVED_PUBLISH_CONDITIONS: Long = SdkConstants.COLLECTION_FLAG_INCLUDE_UNRESOLVED_PUBLISH_CONDITIONS.mul(2);
  public static readonly COLLECTION_FLAG_INCLUDE_TAG_TRANSLATIONS: Long = SdkConstants.COLLECTION_FLAG_INCLUDE_RESOLVED_PUBLISH_CONDITIONS.mul(2);
  public static readonly COLLECTION_FLAG_INCLUDE_EXTERNAL_CONTENT_PROVIDERS: Long = SdkConstants.COLLECTION_FLAG_INCLUDE_TAG_TRANSLATIONS.mul(2);

  public static readonly COLLECTION_FLAG_INCLUDE_ALL =
    SdkConstants.COLLECTION_FLAG_INCLUDE_METADATA_BASIC
      .or(SdkConstants.COLLECTION_FLAG_INCLUDE_METADATA_EXTENDED)
      .or(SdkConstants.COLLECTION_FLAG_INCLUDE_PRIVATE_WORKINGSET_DATA)
      .or(SdkConstants.COLLECTION_FLAG_INCLUDE_PUBLIC_WORKINGSET_DATA)
      .or(SdkConstants.COLLECTION_FLAG_INCLUDE_WORKINGSET_METADATA_EXTENDED)
      .or(SdkConstants.COLLECTION_FLAG_INCLUDE_WORKINGSET_BINARIES)
      .or(SdkConstants.COLLECTION_FLAG_INCLUDE_BINARY_METATAGS_BASIC)
      .or(SdkConstants.COLLECTION_FLAG_INCLUDE_BINARY_METATAGS_EXTENDED)
      .or(SdkConstants.COLLECTION_FLAG_INCLUDE_ACCESS)
      .or(SdkConstants.COLLECTION_FLAG_INCLUDE_TAGS)
      .or(SdkConstants.COLLECTION_FLAG_INCLUDE_LICENSING)
      .or(SdkConstants.COLLECTION_FLAG_INCLUDE_RELATED_BRAND_DATA)
      .or(SdkConstants.COLLECTION_FLAG_INCLUDE_PRIVATE_JOB_DATA)
      .or(SdkConstants.COLLECTION_FLAG_INCLUDE_PUBLIC_JOB_DATA)
      .or(SdkConstants.COLLECTION_FLAG_INCLUDE_ACQUISITION_DATA)
      .or(SdkConstants.COLLECTION_FLAG_INCLUDE_PROJECT_DATA)
      .or(SdkConstants.COLLECTION_FLAG_INCLUDE_PARTICIPATION_DATA)
      .or(SdkConstants.COLLECTION_FLAG_INCLUDE_RESOLVED_METADATA_EXTENDED)
      .or(SdkConstants.COLLECTION_FLAG_INCLUDE_RESOLVED_TAGS)
      .or(SdkConstants.COLLECTION_FLAG_INCLUDE_RESOLVED_AVAILABLE_LICENSES)
      .or(SdkConstants.COLLECTION_FLAG_INCLUDE_RESOLVED_ACCESS)
      .or(SdkConstants.COLLECTION_FLAG_INCLUDE_UNRESOLVED_METADATA_EXTENDED)
      .or(SdkConstants.COLLECTION_FLAG_INCLUDE_UNRESOLVED_TAGS)
      .or(SdkConstants.COLLECTION_FLAG_INCLUDE_UNRESOLVED_AVAILABLE_LICENSES)
      .or(SdkConstants.COLLECTION_FLAG_INCLUDE_UNRESOLVED_ACCESS)
      .or(SdkConstants.COLLECTION_FLAG_INCLUDE_PARENTS)
      .or(SdkConstants.COLLECTION_FLAG_INCLUDE_DEREFERENCED_DATA)
      .or(SdkConstants.COLLECTION_FLAG_INCLUDE_AGGREGATIONS)
      .or(SdkConstants.COLLECTION_FLAG_INCLUDE_QUERY_DATA_BASIC)
      .or(SdkConstants.COLLECTION_FLAG_INCLUDE_QUERY_DATA_EXTENDED)
      .or(SdkConstants.COLLECTION_FLAG_INCLUDE_CREDIT_BALANCE)
      .or(SdkConstants.COLLECTION_FLAG_INCLUDE_DOWNLOAD_LINKS)
      .or(SdkConstants.COLLECTION_FLAG_INCLUDE_BRAND_QUERY_DATA_EXTENDED)
      .or(SdkConstants.COLLECTION_FLAG_INCLUDE_FOLLOW_DATA)
      .or(SdkConstants.COLLECTION_FLAG_INCLUDE_LICENSE_REQUESTS)
      .or(SdkConstants.COLLECTION_FLAG_INCLUDE_ACCESS_REQUESTS)
      .or(SdkConstants.COLLECTION_FLAG_INCLUDE_PUBLISH_REQUESTS)
      .or(SdkConstants.COLLECTION_FLAG_INCLUDE_COLLECTED_ENTITIES)
      .or(SdkConstants.COLLECTION_FLAG_INCLUDE_NEWS_INDICATOR)
      .or(SdkConstants.COLLECTION_FLAG_INCLUDE_UPGRADE_PLAN_REQUESTS)
      .or(SdkConstants.COLLECTION_FLAG_INCLUDE_JOIN_REQUESTS)
      .or(SdkConstants.COLLECTION_FLAG_INCLUDE_LAYOUTS)
      .or(SdkConstants.COLLECTION_FLAG_INCLUDE_RESOLVED_LAYOUTS)
      .or(SdkConstants.COLLECTION_FLAG_INCLUDE_UNRESOLVED_LAYOUTS)
      .or(SdkConstants.COLLECTION_FLAG_INCLUDE_APPROVAL_REQUESTS)
      .or(SdkConstants.COLLECTION_FLAG_INCLUDE_PUBLISH_CONDITIONS)
      .or(SdkConstants.COLLECTION_FLAG_INCLUDE_RESOLVED_PUBLISH_CONDITIONS)
      .or(SdkConstants.COLLECTION_FLAG_INCLUDE_UNRESOLVED_PUBLISH_CONDITIONS)
      .or(SdkConstants.COLLECTION_FLAG_INCLUDE_TAG_TRANSLATIONS)
      .or(SdkConstants.COLLECTION_FLAG_INCLUDE_EXTERNAL_CONTENT_PROVIDERS);

  // leave spaces to be able to introduce something later
  // read is implicit if user has any of the other permissions
  public static readonly ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_READ: number = 1;
  public static readonly ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_SHARE: number = SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_READ * 2;
  public static readonly ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_PUBLISH_UNPUBLISH: number = SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_SHARE * 2;
  public static readonly ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_EDIT: number = SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_PUBLISH_UNPUBLISH * 2;
  public static readonly ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_CREATE: number = SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_EDIT * 2;
  public static readonly ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_DELETE_AND_RESTORE: number = SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_CREATE * 2;
  public static readonly ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_MANAGE_PERMISSIONS: number = SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_DELETE_AND_RESTORE * 2;

  public static readonly ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_MANAGE_END_USERS: number = SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_MANAGE_PERMISSIONS * 2;
  public static readonly ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_MANAGE_ADMIN_USERS: number = SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_MANAGE_END_USERS * 2;
  public static readonly ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_MANAGE_LICENSES: number = SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_MANAGE_ADMIN_USERS * 2;
  public static readonly ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_ACQUIRE: number = SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_MANAGE_LICENSES * 2;
  public static readonly ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_PURCHASE_CREDITS: number = SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_ACQUIRE * 2;

  public static readonly ADMIN_USER_ACCESS_BITMASK_FLAG_JOBS_MANAGE_JOB_PARTICIPATIONS: number = SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_PURCHASE_CREDITS * 2;

  public static readonly ADMIN_USER_ACCESS_BITMASK_FLAG_PARTICIPATIONS_PARTICIPATE_IN_JOBS: number = SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_JOBS_MANAGE_JOB_PARTICIPATIONS * 2;

  public static readonly ADMIN_USER_ACCESS_BITMASK_FLAG_SPECIAL_APPLY_FOR_BRAND_ACCESS: number = SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_PARTICIPATIONS_PARTICIPATE_IN_JOBS * 2;
  public static readonly ADMIN_USER_ACCESS_BITMASK_FLAG_SPECIAL_CAN_USE_BRAND_ACCESS: number = SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_SPECIAL_APPLY_FOR_BRAND_ACCESS * 2;
  public static readonly ADMIN_USER_ACCESS_BITMASK_FLAG_SPECIAL_CAN_DOWNLOAD_ACQUIRED_ASSETS: number = SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_SPECIAL_CAN_USE_BRAND_ACCESS * 2;

  public static readonly ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_CAN_CONFIGURE_EXTERNAL_CONTENT_PROVIDERS: number = SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_SPECIAL_CAN_DOWNLOAD_ACQUIRED_ASSETS * 2;
  public static readonly ADMIN_USER_ACCESS_BITMASK_FLAG_SPECIAL_CAN_USE_EXTERNAL_CONTENT_PROVIDERS: number = SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_CAN_CONFIGURE_EXTERNAL_CONTENT_PROVIDERS * 2;

  public static readonly ADMIN_USER_ACCESS_BITMASK_FLAG_WORLD_ADMIN: number = SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_SPECIAL_CAN_USE_EXTERNAL_CONTENT_PROVIDERS * 2;

  public static readonly ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_CAN_CONFIGURE_CUSTOM_SUBDOMAIN: number = SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_WORLD_ADMIN * 2;

  public static readonly ADMIN_USER_ACCESS_BITMASK_FLAG_SPECIAL_CAN_SEE_EXTERNAL_CONTENT_PROVIDER_PRICES: number = SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_CAN_CONFIGURE_CUSTOM_SUBDOMAIN * 2;

  public static readonly ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_MANAGE_TRANSACTIONS: number = SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_SPECIAL_CAN_SEE_EXTERNAL_CONTENT_PROVIDER_PRICES * 2;

  public static readonly ADMIN_USER_ACCESS_BITMASK_EVERYTHING: number =
    SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_READ |
    SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_SHARE |
    SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_PUBLISH_UNPUBLISH |
    SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_EDIT |
    SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_CREATE |
    SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_DELETE_AND_RESTORE |
    SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_MANAGE_PERMISSIONS |
    SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_MANAGE_END_USERS |
    SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_MANAGE_ADMIN_USERS |
    SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_MANAGE_LICENSES |
    SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_ACQUIRE |
    SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_PURCHASE_CREDITS |
    SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_JOBS_MANAGE_JOB_PARTICIPATIONS |
    SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_PARTICIPATIONS_PARTICIPATE_IN_JOBS |
    SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_SPECIAL_APPLY_FOR_BRAND_ACCESS |
    SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_SPECIAL_CAN_USE_BRAND_ACCESS |
    SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_SPECIAL_CAN_DOWNLOAD_ACQUIRED_ASSETS |
    SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_CAN_CONFIGURE_EXTERNAL_CONTENT_PROVIDERS |
    SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_SPECIAL_CAN_USE_EXTERNAL_CONTENT_PROVIDERS |
    SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_WORLD_ADMIN |
    SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_CAN_CONFIGURE_CUSTOM_SUBDOMAIN |
    SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_SPECIAL_CAN_SEE_EXTERNAL_CONTENT_PROVIDER_PRICES |
    SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_MANAGE_TRANSACTIONS;

  public static readonly ADMIN_USER_BITMASK_PERMISSIONS_GIVE_FULL_READ_ACCESS: number =
    SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_READ |
    SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_PUBLISH_UNPUBLISH |
    SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_EDIT |
    SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_CREATE |
    SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_DELETE_AND_RESTORE |
    SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_MANAGE_PERMISSIONS |
    SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_JOBS_MANAGE_JOB_PARTICIPATIONS |
    SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_PARTICIPATIONS_PARTICIPATE_IN_JOBS |
    SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_WORLD_ADMIN;

  public static readonly ADMIN_USER_BITMASK_PERMISSIONS_GIVE_AREA_ADMIN_ACCESS_ON_BRAND_NODE: number =
    SdkConstants.ADMIN_USER_BITMASK_PERMISSIONS_GIVE_FULL_READ_ACCESS |
    SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_MANAGE_END_USERS |
    SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_MANAGE_ADMIN_USERS |
    SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_MANAGE_LICENSES |
    SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_ACQUIRE |
    SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_PURCHASE_CREDITS |
    SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_CAN_CONFIGURE_EXTERNAL_CONTENT_PROVIDERS |
    SdkConstants.ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_CAN_CONFIGURE_CUSTOM_SUBDOMAIN;

  // History

  public static readonly KEY_PREVIEW_SIZE: string = "previewSize";
  public static readonly KEY_READ_ACCESS_MODEL: string = "readAccess/readAccessModel";
  public static readonly KEY_PUBLIC_READ_ACCESS_PERMISSION: string = "readAccess/publicReadAccessPermission";
  public static readonly KEY_LICENSING_MODEL: string = "licensing/licensingModel";
  public static readonly KEY_LICENSING_ALLOW_ANONYMOUS_DOWNLOAD: string = "licensing/allowAnonymousDownload";
  public static readonly KEY_WRITE_ACCESS_MODEL: string = "writeAccess/writeAccessModel";
  public static readonly KEY_BRAND_DEFAULT_LOCALE: string = "brandDefaultLocale";
  public static readonly KEY_BRAND_OVERRIDE_DEFAULT_LOCALE_FOR_CHILDS: string = "brandOverrideDefaultLocaleForChilds";
  public static readonly KEY_BRAND_DEFAULT_CONTENT_CATEGORY: string = "brandDefaultContentCategory";
  public static readonly KEY_BRAND_TYPE: string = "brandType";
  public static readonly KEY_BRAND_CUSTOM_DESIGN_COLOR_1: string = "brandCustomDesign/color1";
  public static readonly KEY_BRAND_CUSTOM_DESIGN_COLOR_2: string = "brandCustomDesign/color2";
  public static readonly KEY_BRAND_CUSTOM_SUBDOMAIN_SUBDOMAIN: string = "customSubdomain/subdomain";
  public static readonly KEY_BRAND_COMPANY_INFO_COMPANY_NAME: string = "brandCompanyInfo/companyName";
  public static readonly KEY_BRAND_COMPANY_INFO_CONTACT_PERSON_FAMILY_NAME: string = "brandCompanyInfo/contactPersonFamilyName";
  public static readonly KEY_BRAND_COMPANY_INFO_CONTACT_PERSON_GIVEN_NAME: string = "brandCompanyInfo/contactPersonGivenName";
  public static readonly KEY_BRAND_COMPANY_INFO_CONTACT_PERSON_JOB_TITLE: string = "brandCompanyInfo/contactPersonJobTitle";
  public static readonly KEY_BRAND_COMPANY_INFO_STREET: string = "brandCompanyInfo/street";
  public static readonly KEY_BRAND_COMPANY_INFO_POSTAL_CODE: string = "brandCompanyInfo/postalCode";
  public static readonly KEY_BRAND_COMPANY_INFO_CITY: string = "brandCompanyInfo/city";
  public static readonly KEY_BRAND_COMPANY_INFO_COUNTRY_CODE: string = "brandCompanyInfo/countryCode";
  public static readonly KEY_BRAND_COMPANY_INFO_VAT: string = "brandCompanyInfo/vat";
  public static readonly KEY_BRAND_COMPANY_INFO_EMAIL: string = "brandCompanyInfo/email";
  public static readonly KEY_BRAND_COMPANY_INFO_PUBLICATION_NAME: string = "brandCompanyInfo/publicationName";
  public static readonly KEY_BRAND_SHOW_CONTACT_EMAIL_ADDRESS: string = "showContactEmailAddress";
  public static readonly KEY_BRAND_BILLING_COMPANY_INFO_COMPANY_NAME: string = "brandBillingCompanyInfo/companyName";
  public static readonly KEY_BRAND_BILLING_COMPANY_INFO_CONTACT_PERSON_FAMILY_NAME: string = "brandBillingCompanyInfo/contactPersonFamilyName";
  public static readonly KEY_BRAND_BILLING_COMPANY_INFO_CONTACT_PERSON_GIVEN_NAME: string = "brandBillingCompanyInfo/contactPersonGivenName";
  public static readonly KEY_BRAND_BILLING_COMPANY_INFO_CONTACT_PERSON_JOB_TITLE: string = "brandBillingCompanyInfo/contactPersonJobTitle";
  public static readonly KEY_BRAND_BILLING_COMPANY_INFO_STREET: string = "brandBillingCompanyInfo/street";
  public static readonly KEY_BRAND_BILLING_COMPANY_INFO_POSTAL_CODE: string = "brandBillingCompanyInfo/postalCode";
  public static readonly KEY_BRAND_BILLING_COMPANY_INFO_CITY: string = "brandBillingCompanyInfo/city";
  public static readonly KEY_BRAND_BILLING_COMPANY_INFO_COUNTRY_CODE: string = "brandBillingCompanyInfo/countryCode";
  public static readonly KEY_BRAND_BILLING_COMPANY_INFO_VAT: string = "brandBillingCompanyInfo/vat";
  public static readonly KEY_BRAND_BILLING_COMPANY_INFO_EMAIL: string = "brandBillingCompanyInfo/email";
  public static readonly KEY_BRAND_APPROVED: string = "approved";
  public static readonly KEY_BRAND_BILLING_INFO_OVERRIDE: string = "brandBillingInfoOverride";
  public static readonly KEY_BRAND_LAND_LAYOUT: string = "brandLandLayout";
  public static readonly KEY_FEATURE_PRIORITY: string = "featurePriority";
  public static readonly KEY_APPLY_WATERMARK: string = "applyWatermark";
  public static readonly KEY_ORDER: string = "order";

  public static readonly KEY_PUBLISH_CONDITION_MODEL: string = "publishCondition/publishConditionModel";
  public static readonly KEY_PUBLISH_CONDITION_PUBLISH_FROM_TIMESTAMP: string = "publishCondition/publishFromTimestamp";
  public static readonly KEY_PUBLISH_CONDITION_PUBLISH_TO_TIMESTAMP: string = "publishCondition/publishToTimestamp";

  public static readonly KEY_FOLDER_LAYOUT_MODEL: string = "folderLayout/folderLayoutModel";
  public static readonly KEY_FOLDER_LAYOUT_LIST_VIEW_LAYOUT: string = "folderLayout/listViewLayout";
  public static readonly KEY_FOLDER_LAYOUT_INNER_LAYOUT: string = "folderLayout/innerLayout";

  public static readonly KEY_CONTENT_CATEGORY: string = "contentCategory";

  public static readonly KEY_DEFAULT_LOCALE: string = "defaultLocale";
  public static readonly KEY_OVERRIDE_DEFAULT_LOCALE_FOR_CHILDS: string = "overrideDefaultLocaleForChilds";

  public static readonly KEY_ADMIN_USER_GROUP_ACCESS_FLAGS: string = "accessFlags";
  public static readonly KEY_ADMIN_USER_GROUP_CANNOT_BE_DELETED: string = "adminUserGroupCannotBeDeleted";
  public static readonly KEY_ADMIN_USER_GROUP_CANNOT_BE_CHANGED: string = "cannotBeChanged";
  public static readonly KEY_BINARY_IMAGE_CROP: string = "imagePresets/crop";
  public static readonly KEY_BINARY_IMAGE_FOREGROUND_COLOR = "imagePresets/foregroundColor";
  public static readonly KEY_BINARY_IMAGE_BACKGROUND_COLOR = "imagePresets/backgroundColor";
  public static readonly KEY_BINARY_VIDEO_THUMBNAIL_GENERATION_PERCENTAGE: string = "videoPresets/thumbnailPercentage";
  public static readonly KEY_BINARY_DOCUMENT_PREVIEW_PAGE: string = "documentPresets/previewPage";
  public static readonly KEY_BINARY_DOCUMENT_LIMIT_PREVIEW_TO_ONE_PAGER: string = "documentPresets/limitPreviewToOnePager";
  public static readonly KEY_BINARY_DOCUMENT_NUMBER_OF_PREVIEW_PARAGRAPHS: string = "documentPresets/numberOfPreviewParagraphs";
  public static readonly KEY_PROJECT_STATE: string = "projectState";
  public static readonly KEY_TRANSLATION_TEXT: string = "text";
  public static readonly KEY_USER_GROUP_USER_ADDED: string = "userAdded";
  public static readonly KEY_USER_GROUP_USER_REMOVED: string = "userRemoved";
  public static readonly KEY_USER_GROUP_LOCALE_NAME: string = "userGroupLocaleName";
  public static readonly KEY_USER_GROUP_LOCALE_DESCRIPTION: string = "userGroupLocaleDescription";
  public static readonly KEY_USER_GROUP_CANNOT_BE_DELETED: string = "userGroupCannotBeDeleted";
  public static readonly KEY_USER_GROUP_MUST_CONTAIN_AT_LEAST_ONE_ENTRY: string = "mustContainOneEntry";
  public static readonly KEY_LICENSE_LOCALE_NAME: string = "licenseLocaleName";
  public static readonly KEY_LICENSE_LOCALE_SUMMARY:string = "licenseLocaleSummary";
  public static readonly KEY_LICENSE_EXCLUSIVITY_TYPE: string = "exclusivityType";
  public static readonly KEY_LICENSE_VALIDITY_PERIOD_DAYS: string = "validityPeriodDays";
  public static readonly KEY_LICENSE_IMAGE_PRICE: string = "licenseImagePrice";
  public static readonly KEY_LICENSE_VIDEO_PRICE: string = "licenseVideoPrice";
  public static readonly KEY_LICENSE_AUDIO_PRICE: string = "licenseAudioPrice";
  public static readonly KEY_LICENSE_DOCUMENT_PRICE: string = "licenseDocumentPrice";
  public static readonly KEY_LICENSE_OF_IMAGE_PRICE_IS_TRANSACTION_FEE: string = "ofImagePriceIsTransactionFee";
  public static readonly KEY_LICENSE_OF_VIDEO_PRICE_IS_TRANSACTION_FEE: string = "ofVideoPriceIsTransactionFee";
  public static readonly KEY_LICENSE_OF_AUDIO_PRICE_IS_TRANSACTION_FEE: string = "ofAudioPriceIsTransactionFee";
  public static readonly KEY_LICENSE_OF_DOCUMENT_PRICE_IS_TRANSACTION_FEE: string = "ofDocumentPriceIsTransactionFee";
  public static readonly KEY_LICENSE_LOCALE_TERMS_OF_USE: string = "termsOfUse";
  public static readonly KEY_LICENSE_LOCALE_RESTRICTED_PUBLISHING_TOPICS: string = "restrictedPublishingTopics";
  public static readonly KEY_LICENSE_LOCALE_RESTRICTED_INDUSTRIES: string = "restrictedIndustries";
  public static readonly KEY_LICENSE_LOCALE_RESTRICTED_GEO_USE: string = "restrictedGeoUse";
  public static readonly KEY_ENTITY_LOCALE_NAME: string = "entityLocaleName";
  public static readonly KEY_ENTITY_LOCALE_DESCRIPTION: string = "entityLocaleDescription";
  public static readonly KEY_ENTITY_LOCALE_EDITORIAL_TEXT: string = "editorialText";
  public static readonly KEY_ENTITY_LOCALE_CONTEXT_TEXT_1: string = "contextText1";
  public static readonly KEY_ENTITY_LOCALE_CONTACT_INFO_FACEBOOK_LINK: string = "contactInfo/facebookLink";
  public static readonly KEY_ENTITY_LOCALE_CONTACT_INFO_TWITTER_LINK: string = "contactInfo/twitterLink";
  public static readonly KEY_ENTITY_LOCALE_CONTACT_INFO_GOOGLE_PLUS_LINK: string = "contactInfo/googlePlusLink";
  public static readonly KEY_ENTITY_LOCALE_CONTACT_INFO_NAME: string = "contactInfo/name";
  public static readonly KEY_ENTITY_LOCALE_CONTACT_INFO_STREET: string = "contactInfo/street";
  public static readonly KEY_ENTITY_LOCALE_CONTACT_INFO_POSTAL_CODE: string = "contactInfo/postalCode";
  public static readonly KEY_ENTITY_LOCALE_CONTACT_INFO_CITY: string = "contactInfo/city";
  public static readonly KEY_ENTITY_LOCALE_CONTACT_INFO_COUNTRY_CODE: string = "contactInfo/countryCode";
  public static readonly KEY_ENTITY_LOCALE_CONTACT_INFO_PHONE: string = "contactInfo/phone";
  public static readonly KEY_ENTITY_LOCALE_CONTACT_INFO_WEBSITE: string = "contactInfo/website";
  public static readonly KEY_ENTITY_LOCALE_CONTACT_INFO_EMAIL: string = "contactInfo/email";
  public static readonly KEY_BRAND_LINK_NAME: string = "brandLinkName";
  public static readonly KEY_BRAND_LINK_LINK: string = "brandLinkLink";
  public static readonly KEY_ENTITY_BINARY_SET_NAME: string = "binarySetName";
  public static readonly KEY_ENTITY_BINARY_SET_AUTHOR: string = "binarySetAuthor";
  public static readonly KEY_REQUIRES_MANUAL_COMMIT: string = "requiresManualCommit";
  public static readonly KEY_REQUIRES_APPLICATION_MESSAGE: string = "requiresApplicationMessage";
  public static readonly KEY_COST_CENTER_ID: string = "costCenterId";
  public static readonly KEY_JOB_TYPE: string = "type";
  public static readonly KEY_JOB_PRICING_TYPE: string = "pricingType";
  public static readonly KEY_JOB_PARTICIPATION_TYPE: string = "participationType";
  public static readonly KEY_JOB_STATE: string = "state";
  public static readonly KEY_JOB_LICENSE_ID: string = "jobLicenseId";
  public static readonly KEY_JOB_END_TIMESTAMP: string = "endTimestamp";
  public static readonly KEY_JOB_REWARD: string = "reward";
  public static readonly KEY_PARTICIPATION_PRICE: string = "price";

  public static readonly KEY_ASSET_LAYOUT_MODEL: string = "assetLayout/assetLayoutModel";
  public static readonly KEY_ASSET_LAYOUT_RICHTEXT_LIST_VIEW_LAYOUT: string = "assetLayout/richtextListViewLayout";
  public static readonly KEY_ASSET_LAYOUT_INNER_LAYOUT: string = "assetLayout/innerLayout";

  public static readonly KEY_ASSET_PUBLICATION_TIMESTAMP: string = "publicationTimestamp";

  public static readonly KEY_ASSET_REVIEW_STATE: string = "reviewState";
  public static readonly KEY_ASSET_RELEASE_REFERENCE: string = "releaseReference";
  public static readonly KEY_ASSET_CANONICAL_URL: string = "canonicalUrl";

  public static readonly KEY_ECP_PRICING_MODEL: string = "pricingModel";

  public static readonly KEY_ECP_IMAGE_EXTERNAL_CREDIT_PRICE_FULL: string = "imageExternalCreditPriceFull";
  public static readonly KEY_ECP_IMAGE_EXTERNAL_CREDIT_PRICE_MEDIUM: string = "imageExternalCreditPriceMedium";
  public static readonly KEY_ECP_IMAGE_EXTERNAL_CREDIT_PRICE_SMALL: string = "imageExternalCreditPriceSmall";
  public static readonly KEY_ECP_VIDEO_EXTERNAL_CREDIT_PRICE_4K: string = "videoExternalCreditPrice4K";
  public static readonly KEY_ECP_VIDEO_EXTERNAL_CREDIT_PRICE_HD: string = "videoExternalCreditPriceHD";
  public static readonly KEY_ECP_VIDEO_EXTERNAL_CREDIT_PRICE_SD: string = "videoExternalCreditPriceSD";
  public static readonly KEY_ECP_VIDEO_EXTERNAL_CREDIT_PRICE_LR: string = "videoExternalCreditPriceLR";
  public static readonly KEY_ECP_AUDIO_EXTERNAL_CREDIT_PRICE: string = "audioExternalCreditPrice";
  public static readonly KEY_ECP_DOCUMENT_EXTERNAL_CREDIT_PRICE: string = "documentExternalCreditPrice";

  public static readonly KEY_ECP_IMAGE_MONETARY_PRICE_FULL: string = "imageMonetaryPriceFull";
  public static readonly KEY_ECP_IMAGE_MONETARY_PRICE_MEDIUM: string = "imageMonetaryPriceMedium";
  public static readonly KEY_ECP_IMAGE_MONETARY_PRICE_SMALL: string = "imageMonetaryPriceSmall";
  public static readonly KEY_ECP_VIDEO_MONETARY_PRICE_4K: string = "videoMonetaryPrice4K";
  public static readonly KEY_ECP_VIDEO_MONETARY_PRICE_HD: string = "videoMonetaryPriceHD";
  public static readonly KEY_ECP_VIDEO_MONETARY_PRICE_SD: string = "videoMonetaryPriceSD";
  public static readonly KEY_ECP_VIDEO_MONETARY_PRICE_LR: string = "videoMonetaryPriceLR";
  public static readonly KEY_ECP_AUDIO_MONETARY_PRICE: string = "audioMonetaryPrice";
  public static readonly KEY_ECP_DOCUMENT_MONETARY_PRICE: string = "documentMonetaryPrice";

  public static readonly KEY_ECP_WARNING_LIMIT_DOWNLOADS: string = "warningLimitDownloads";
  public static readonly KEY_ECP_WARNING_LIMIT_CREDITS: string = "warningLimitCredits";

  public static readonly KEY_COLLECTED_ENTITY_LICENSE_UUID: string = "licenseUuid";
  public static readonly KEY_COLLECTED_ENTITY_RELATED_TO_ADMIN_USER_GROUP_UUID: string = "relatedToAdminUserGroupUuid";

  // Precalculated metatag fields

  public static readonly METATAG_BASIC_PREFIX: string = "MT_";
  public static readonly METATAG_ADVANCED_PREFIX: string = "MA_";

  public static readonly METATAG_WIDTH: string = SdkConstants.METATAG_BASIC_PREFIX + "Width";
  public static readonly METATAG_HEIGHT: string = SdkConstants.METATAG_BASIC_PREFIX + "Height";
  public static readonly METATAG_ASPECT_RATIO: string = SdkConstants.METATAG_BASIC_PREFIX + "AspectRatio";
  public static readonly METATAG_DPIX: string = SdkConstants.METATAG_BASIC_PREFIX + "DpiX";
  public static readonly METATAG_DPIY: string = SdkConstants.METATAG_BASIC_PREFIX + "DpiY";
  public static readonly METATAG_COLORSPACE_NAME: string = SdkConstants.METATAG_BASIC_PREFIX + "ColorSpaceName";
  public static readonly METATAG_PAGECOUNT: string = SdkConstants.METATAG_BASIC_PREFIX + "PageCount";
  public static readonly METATAG_FILESIZE: string = SdkConstants.METATAG_BASIC_PREFIX + "FileSize";
  public static readonly METATAG_MIMETYPE: string = SdkConstants.METATAG_BASIC_PREFIX + "MimeType";
  public static readonly METATAG_DURATION: string = SdkConstants.METATAG_BASIC_PREFIX + "Duration";
  public static readonly METATAG_FRAME_RATE: string = SdkConstants.METATAG_BASIC_PREFIX + "FrameRate";
  public static readonly METATAG_CODEC: string = SdkConstants.METATAG_BASIC_PREFIX + "Codec";
  public static readonly METATAG_SCAN_TYPE: string = SdkConstants.METATAG_BASIC_PREFIX + "ScanType";
  public static readonly METATAG_ORIGINAL_FILE_NAME: string = SdkConstants.METATAG_BASIC_PREFIX + "OriginalFileName";
  public static readonly METATAG_UPLOAD_TIMESTAMP: string = SdkConstants.METATAG_BASIC_PREFIX + "UploadTimestamp";
  public static readonly METATAG_SOURCE: string = SdkConstants.METATAG_BASIC_PREFIX + "Source";

  public static readonly METATAG_DESCRIPTION: string = SdkConstants.METATAG_ADVANCED_PREFIX + "Description";
  public static readonly METATAG_KEYWORDS: string = SdkConstants.METATAG_ADVANCED_PREFIX + "Keywords";
  public static readonly METATAG_AUTHOR: string = SdkConstants.METATAG_ADVANCED_PREFIX + "Author";

  // mime types

  public static readonly MIME_TYPE_IMAGE_JPG: string = "image/jpeg";
  public static readonly MIME_TYPE_IMAGE_GIF: string = "image/gif";
  public static readonly MIME_TYPE_IMAGE_PNG: string = "image/png";

  public static readonly MIME_TYPE_IMAGE_WEBP: string = "image/webp";
  public static readonly MIME_TYPE_IMAGE_TIFF: string = "image/tiff";

  public static readonly MIME_TYPE_VIDEO_MP4: string = "video/mp4";
  public static readonly MIME_TYPE_VIDEO_WEBM: string = "video/webm";
  public static readonly MIME_TYPE_VIDEO_OGG: string = "video/ogg";
  public static readonly MIME_TYPE_VIDEO_MKV: string = "video/x-matroska";
  public static readonly MIME_TYPE_VIDEO_MOV: string = "video/quicktime";
  public static readonly MIME_TYPE_VIDEO_3GPP: string = "video/3gpp";
  public static readonly MIME_TYPE_VIDEO_WMV: string = "video/x-ms-wmv";

  public static readonly MIME_TYPE_AUDIO_M4A: string = "audio/m4a";
  public static readonly MIME_TYPE_AUDIO_XM4A: string = "audio/x-m4a";
  public static readonly MIME_TYPE_AUDIO_MP3: string = "audio/mp3";
  public static readonly MIME_TYPE_AUDIO_MP4: string = "audio/mp4";
  public static readonly MIME_TYPE_AUDIO_MPEG: string = "audio/mpeg";
  public static readonly MIME_TYPE_AUDIO_OGG: string = "audio/ogg";
  public static readonly MIME_TYPE_AUDIO_WAV: string = "audio/wav";
  public static readonly MIME_TYPE_AUDIO_WEBM: string = "audio/webm";
  public static readonly MIME_TYPE_AUDIO_WMA: string = "audio/x-ms-wma";

  public static readonly MIME_TYPE_DOCUMENT_PDF: string = "application/pdf";
  public static readonly MIME_TYPE_DOCUMENT_HTML: string = "text/html";
  public static readonly MIME_TYPE_DOCUMENT_TXT_PLAIN: string = "text/plain";

  // only supported by ECP at the moment

  public static readonly MIME_TYPE_IMAGE_EPS: string = "image/eps";
  public static readonly MIME_TYPE_IMAGE_SVG: string = "image/svg+xml";
  public static readonly MIME_TYPE_IMAGE_APPLICATION_ILLUSTRATOR: string = "application/illustrator";

  // read permissions

  public static readonly READ_PERMISSION_READ_FULL: number = 4;
  public static readonly READ_PERMISSION_READ_PRE_LICENSED: number = 3;
  public static readonly READ_PERMISSION_READ_QUALITY_RESTRICTED: number = 2;
  public static readonly READ_PERMISSION_ONLY_ALLOW_REGISTRATION: number = 1;
  public static readonly READ_PERMISSION_DENIED: number = 0;

  // aggregation keys

  public static readonly AGGREGATION_KEY_TAG: string = "tag";
  public static readonly AGGREGATION_KEY_TYPE: string = "type";
  public static readonly AGGREGATION_KEY_CONTENT_CATEGORY: string = "contentCategory";
  public static readonly AGGREGATION_KEY_BINARY_TYPE: string = "binaryType";
  public static readonly AGGREGATION_KEY_LOCALES: string = "locales";
  public static readonly AGGREGATION_KEY_DIMENSION: string = "dimension";
  public static readonly AGGREGATION_KEY_UPLOADED: string = "uploaded";
  public static readonly AGGREGATION_KEY_ORIENTATION: string = "orientation";

  public static readonly AGGREGATION_KEY_VIDEO_FORMAT: string = "videoFormat";
  public static readonly AGGREGATION_KEY_VIDEO_ASPECT_RATIO: string = "videoAspectRatio";

  public static readonly AGGREGATION_KEY_DURATION: string = "duration";

  public static readonly AGGREGATION_KEY_PAGE_COUNT: string = "pageCount";

  public static readonly AGGREGATION_KEY_SOURCE: string = "source";

  public static readonly AGGREGATION_KEY_LICENSE_ID: string = "licenseId";

  public static readonly AGGREGATION_KEY_REVIEW_STATE: string = "reviewState";
  
  // fixed UUIDs

  public static readonly CONTIDIO_BRAND_UUID: string = "300000011";
  public static readonly CONTIDIO_PRIVATE_USE_SHARED_NON_EXCLUSIVE_LICENSE_UUID: string = "200000021";
  public static readonly CONTIDIO_EDITORIAL_USE_SHARED_NON_EXCLUSIVE_LICENSE_FREE_UUID: string = "200000022";
  public static readonly CONTIDIO_EDITORIAL_USE_SHARED_NON_EXCLUSIVE_LICENSE_STANDARD_UUID: string = "200000023";
  public static readonly CONTIDIO_EDITORIAL_USE_SHARED_NON_EXCLUSIVE_LICENSE_PREMIUM_UUID: string = "200000024";
  public static readonly CONTIDIO_COMMERCIAL_USE_SHARED_NON_EXCLUSIVE_LICENSE_FREE_UUID: string = "200000025";
  public static readonly CONTIDIO_COMMERCIAL_USE_SHARED_NON_EXCLUSIVE_LICENSE_STANDARD_UUID: string = "200000026";
  public static readonly CONTIDIO_COMMERCIAL_USE_SHARED_NON_EXCLUSIVE_LICENSE_PREMIUM_UUID: string = "200000027";
  public static readonly CONTIDIO_COMMERCIAL_USE_EXCLUSIVE_LICENSE_UUID: string = "200000028";

  public static readonly CONTIDIO_ACCREDITED_JOURNALISTS_USER_GROUP_UUID: string = "100000031";
  public static readonly CONTIDIO_CONFIRMED_PROFESSIONALS_USER_GROUP_UUID: string = "100000032";
  public static readonly CONTIDIO_CONFIRMED_BRANDS_USER_GROUP_UUID: string = "100000033";

  // string keys

  public static readonly STRING_KEY_DEFAULT_PROJECT_NAME: string = "++STRING_KEY_DEFAULT_PROJECT_NAME++";
  public static readonly STRING_KEY_ADMINS_GROUP_NAME: string = "++STRING_KEY_ADMINS_NAME++";
  public static readonly STRING_KEY_ADMINS_GROUP_DESCRIPTION: string = "++STRING_KEY_ADMINS_DESCRIPTION++";

  // text max length

  public static readonly MAX_LENGTH_ENTITY_BRAND_NAME: number = 50;
  public static readonly MAX_LENGTH_ENTITY_OTHER_NAME: number = 80;
  public static readonly MAX_LENGTH_ENTITY_BRAND_DESCRIPTION: number = 80;
  public static readonly MAX_LENGTH_ENTITY_OTHER_DESCRIPTION: number = 80;
  public static readonly MAX_LENGTH_ENTITY_CONTEXT_TEXT_1: number = 50;

  public static readonly MAX_LENGTH_USER_GROUP_NAME: number = 50;
  public static readonly MAX_LENGTH_LICENSE_NAME: number = 50;
  public static readonly MAX_LENGTH_BRAND_LINK_NAME: number = 30;
  public static readonly MAX_LENGTH_ENTITY_BINARY_SET_NAME: number = 50;

  public static readonly MAX_LENGTH_LICENSE_SUMMARY: number = 150;

  public static readonly MAX_LENGTH_EMAIL: number = 254;

  public static readonly MAX_LENGTH_COST_CENTER_ID: number = 50;

  // contact form length

  public static readonly MIN_LENGTH_CONTACT_FORM_SUBJECT: number = 5;
  public static readonly MAX_LENGTH_CONTACT_FORM_SUBJECT: number = 150;

  public static readonly MIN_LENGTH_CONTACT_FORM_MESSAGE: number = 10;
  public static readonly MAX_LENGTH_CONTACT_FORM_MESSAGE: number = 6000;

  // reserved output IDs

  public static readonly OUTPUT_ID_DEFAULT: number = -1;
  public static readonly OUTPUT_ID_ORIGINAL_PREVIEW: number = -2;

  // uploads

  public static readonly VIDEO_FILE_SIZE_LIMIT: number = 1073741824; // 1 GiB
  public static readonly AUDIO_FILE_SIZE_LIMIT: number = 134217728; // 128 MiB
  public static readonly IMAGE_FILE_SIZE_LIMIT: number = 134217728; // 128 MiB
  public static readonly DOCUMENT_FILE_SIZE_LIMIT: number = 134217728; // 128 MiB

  // richtext

  public static readonly RICHTEXT_BINARY_SET_ID: number = 10000;

  // locales

  public static readonly WILDCARD_LOCALE: string = "*";
}
