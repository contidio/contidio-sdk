import Long = require('long');

namespace Proto {
	export interface Message {
	}
}


namespace Proto {

  export interface Entity extends Proto.Message {

    type?: Proto.EntityType;
    uuid?: string;
    publishFlag?: boolean;
    committedSet?: Proto.WorkingSet;
    workingSet?: Proto.WorkingSet;
    previewElementsAreReady?: boolean;
    previewSize?: Proto.PreviewSize;
    tags?: Proto.Tags;
    licensing?: Proto.Licensing;
    readAccess?: Proto.ReadAccess;
    writeAccess?: Proto.WriteAccess;
    resolvedInheritedData?: Proto.InheritedData;
    unresolvedInheritedData?: Proto.InheritedData;
    entityPath?: Proto.Entities[];
    deleted?: boolean;
    version?: Long;
    brand?: Proto.Brand;
    folder?: Proto.Folder;
    asset?: Proto.Asset;
    trash?: Proto.Trash;
    job?: Proto.Job;
    participation?: Proto.Participation;
    project?: Proto.Project;
    orderInParent?: string;
    featurePriority?: number;
    dereferencedData?: Proto.DereferencedData;
    createdTimestamp?: Long;
    lastUpdatedTimestamp?: Long;
    lastCommittedTimestamp?: Long;
    redirectUserForRegistration?: boolean;
    name?: string;
    description?: string;
    editorialText?: string;
    previewBinarySet?: Proto.BinarySet[];
    binarySetCount?: number;
    workingSetBinaryType?: Proto.BinaryType;
    availableLocale?: string[];
    hasUnpublishedChanges?: boolean;
    score?: number;
    userReadPermission?: Long;
    userWritePermission?: Long;
    userFollowSettingUuid?: string;
    publishRequestInfo?: Proto.PublishRequestInfo;
    collectedEntityInfo?: Proto.CollectedEntityInfo[];
    licenseRequestInfo?: Proto.LicenseRequestInfo[];
    contextText1?: string;
    applyWatermark?: boolean;
    userAccessUuid?: string[];
    folderLayout?: Proto.FolderLayout;
    assetLayout?: Proto.AssetLayout;
    richtextListViewLayout?: Proto.RichtextListViewLayout;
    publishCondition?: Proto.PublishCondition;
    publishConditionState?: Proto.PublishConditionState;
    publicationTimestamp?: Long;
    isUnlocked?: boolean;
    external?: Proto.External;
    released?: boolean;
    canonicalUrl?: string;
    
}

}


namespace Proto {

  export interface EntityChangeSet extends Proto.Message {

    entityType?: Proto.EntityType;
    uuid?: string;
    putLocale?: Proto.EntityLocaleChangeSet[];
    removeLocale?: Proto.EntityLocaleChangeSet[];
    previewSize?: Proto.PreviewSize;
    putNewTag?: Proto.NewTag[];
    putTagUuid?: string[];
    removeTagUuid?: string[];
    licensing?: Proto.LicensingChangeSet;
    readAccess?: Proto.ReadAccessChangeSet;
    writeAccess?: Proto.WriteAccessChangeSet;
    addParent?: Proto.EntityReference[];
    changeParentOrder?: Proto.EntityReference[];
    removeParent?: Proto.EntityReference[];
    version?: Long;
    entityActions?: Proto.EntityActions;
    brand?: Proto.BrandChangeSet;
    folder?: Proto.FolderChangeSet;
    asset?: Proto.AssetChangeSet;
    trash?: Proto.TrashChangeSet;
    job?: Proto.JobChangeSet;
    participation?: Proto.ParticipationChangeSet;
    project?: Proto.ProjectChangeSet;
    featurePriority?: number;
    applyWatermark?: boolean;
    removeApplyWatermark?: boolean;
    folderLayout?: Proto.FolderLayoutChangeSet;
    assetLayout?: Proto.AssetLayoutChangeSet;
    publishCondition?: Proto.PublishConditionChangeSet;
    
}

}


namespace Proto {

  export interface EntityReference extends Proto.Message {

    type?: Proto.EntityType;
    uuid?: string;
    order?: string;
    
}

}


namespace Proto {

  export interface EntityActions extends Proto.Message {

    publishAction?: Proto.PublishAction;
    extractKeywords?: boolean;
    extractDescription?: boolean;
    
}

}


namespace Proto {

  export interface EntityDeleteSet extends Proto.Message {

    uuid?: string;
    allowFinalDelete?: boolean;
    version?: Long;
    
}

}


namespace Proto {

  export interface EntityRestoreSet extends Proto.Message {

    uuid?: string;
    restoreEntityUuid?: string;
    version?: Long;
    
}

}


namespace Proto {

  export interface Entities extends Proto.Message {

    entity?: Proto.Entity[];
    summary?: Proto.QuerySummary;
    
}

}


namespace Proto {

  export interface EntityChangeSets extends Proto.Message {

    entityChangeSet?: Proto.EntityChangeSet[];
    
}

}


namespace Proto {

  export interface EntityRestoreSets extends Proto.Message {

    entityRestoreSet?: Proto.EntityRestoreSet[];
    
}

}


namespace Proto {

  export interface EntityDeleteSets extends Proto.Message {

    entityDeleteSet?: Proto.EntityDeleteSet[];
    
}

}


namespace Proto {

  export interface FolderLayout extends Proto.Message {

    layoutModel?: Proto.LayoutModel;
    listViewLayout?: Proto.FolderListViewLayout;
    innerLayout?: Proto.FolderInnerLayout;
    
}

}


namespace Proto {

  export interface FolderLayoutChangeSet extends Proto.Message {

    layoutModel?: Proto.LayoutModel;
    listViewLayout?: Proto.FolderListViewLayout;
    innerLayout?: Proto.FolderInnerLayout;
    
}

}


namespace Proto {

  export interface AssetLayout extends Proto.Message {

    layoutModel?: Proto.LayoutModel;
    richtextListViewLayout?: Proto.RichtextListViewLayout;
    innerLayout?: Proto.AssetInnerLayout;
    
}

}


namespace Proto {

  export interface AssetLayoutChangeSet extends Proto.Message {

    layoutModel?: Proto.LayoutModel;
    richtextListViewLayout?: Proto.RichtextListViewLayout;
    innerLayout?: Proto.AssetInnerLayout;
    
}

}


namespace Proto {

  export interface PublishCondition extends Proto.Message {

    publishConditionModel?: Proto.PublishConditionModel;
    publishFromTimestamp?: Long;
    publishToTimestamp?: Long;
    
}

}


namespace Proto {

  export interface PublishConditionChangeSet extends Proto.Message {

    publishConditionModel?: Proto.PublishConditionModel;
    publishFromTimestamp?: Long;
    removePublishFromTimestamp?: boolean;
    publishToTimestamp?: Long;
    removePublishToTimestamp?: boolean;
    
}

}


namespace Proto {

  export interface WorkingSet extends Proto.Message {

    version?: Long;
    locale?: Proto.EntityLocale[];
    workingSetBinaryType?: Proto.BinaryType;
    minBinarySetUuid?: number;
    
}

}


namespace Proto {

  export interface EntityLocale extends Proto.Message {

    locale?: string;
    name?: string;
    description?: string;
    editorialText?: string;
    contactInfo?: Proto.ContactInfo;
    binarySet?: Proto.BinarySet[];
    contextText1?: string;
    
}

}


namespace Proto {

  export interface EntityLocaleChangeSet extends Proto.Message {

    locale?: string;
    name?: string;
    description?: string;
    editorialText?: string;
    contactInfo?: Proto.ContactInfoChangeSet;
    putBinarySet?: Proto.BinarySetChangeSet[];
    removeBinarySet?: Proto.BinarySetChangeSet[];
    contextText1?: string;
    
}

}


namespace Proto {

  export interface ContactInfo extends Proto.Message {

    brandLink?: Proto.BrandLink[];
    facebookLink?: string;
    twitterLink?: string;
    googlePlusLink?: string;
    name?: string;
    street?: string;
    postalCode?: string;
    city?: string;
    countryCode?: string;
    phone?: string;
    website?: string;
    email?: string;
    countryName?: string;
    
}

}


namespace Proto {

  export interface ContactInfoChangeSet extends Proto.Message {

    putBrandLink?: Proto.BrandLink[];
    removeBrandLink?: Proto.BrandLink[];
    facebookLink?: string;
    twitterLink?: string;
    googlePlusLink?: string;
    name?: string;
    street?: string;
    postalCode?: string;
    city?: string;
    countryCode?: string;
    phone?: string;
    website?: string;
    email?: string;
    
}

}


namespace Proto {

  export interface BrandLink extends Proto.Message {

    uuid?: number;
    name?: string;
    link?: string;
    
}

}


namespace Proto {

  export interface BinarySet extends Proto.Message {

    uuid?: number;
    name?: string;
    uploadedBinary?: Proto.Binary[];
    calculatedBinary?: Proto.Binary[];
    binarySetBinaryType?: Proto.BinaryType;
    sourceLocale?: string;
    author?: string;
    
}

}


namespace Proto {

  export interface BinarySetChangeSet extends Proto.Message {

    uuid?: number;
    name?: string;
    putUploadedBinary?: Proto.Binary[];
    removeUploadedBinary?: Proto.Binary[];
    author?: string;
    
}

}


namespace Proto {

  export interface Users extends Proto.Message {

    user?: Proto.User[];
    summary?: Proto.QuerySummary;
    
}

}


namespace Proto {

  export interface Licensing extends Proto.Message {

    licensingModel?: Proto.LicensingModel;
    availableLicenseInfo?: Proto.LicenseInfo[];
    allowAnonymousDownload?: boolean;
    
}

}


namespace Proto {

  export interface LicenseInfo extends Proto.Message {

    licenseUuid?: string;
    licenseType?: Proto.LicenseType;
    userPersonaValid?: boolean;
    released?: boolean;
    downloadSpec?: Proto.DownloadSpec;
    
}

}


namespace Proto {

  export interface LicensingChangeSet extends Proto.Message {

    licensingModel?: Proto.LicensingModel;
    addAvailableLicenseId?: string[];
    removeAvailableLicenseId?: string[];
    allowAnonymousDownload?: boolean;
    
}

}


namespace Proto {

  export interface License extends Proto.Message {

    licenseUuid?: string;
    licenseType?: Proto.LicenseType;
    locale?: Proto.LicenseLocale[];
    typeOfUse?: Proto.LicenseTypeOfUse[];
    exclusivityType?: Proto.LicenseExclusivityType;
    validityPeriodDays?: number;
    imagePrice?: number;
    ofImagePriceIsTransactionFee?: number;
    videoPrice?: number;
    ofVideoPriceIsTransactionFee?: number;
    audioPrice?: number;
    ofAudioPriceIsTransactionFee?: number;
    documentPrice?: number;
    ofDocumentPriceIsTransactionFee?: number;
    name?: string;
    summary?: string;
    termsOfUse?: string;
    restrictedPublishingTopics?: string;
    restrictedIndustries?: string;
    restrictedGeoUse?: string;
    score?: number;
    userReadPermission?: Long;
    userWritePermission?: Long;
    userPersonaValid?: boolean;
    externalPricingModel?: Proto.ExternalPricingModel;
    externalCreditPrice?: number;
    externalMonetaryPrice?: number;
    externalLink?: Proto.ExternalLink[];
    external?: Proto.External;
    groupingKey?: string;
    
}

}


namespace Proto {

  export interface Licenses extends Proto.Message {

    license?: Proto.License[];
    summary?: Proto.QuerySummary;
    
}

}


namespace Proto {

  export interface LicenseChangeSet extends Proto.Message {

    licenseUuid?: string;
    licenseType?: Proto.LicenseType;
    putLocale?: Proto.LicenseLocaleChangeSet[];
    removeLocale?: Proto.LicenseLocaleChangeSet[];
    putTypeOfUse?: Proto.LicenseTypeOfUse[];
    removeTypeOfUse?: Proto.LicenseTypeOfUse[];
    exclusivityType?: Proto.LicenseExclusivityType;
    validityPeriodDays?: number;
    imagePrice?: number;
    ofImagePriceIsTransactionFee?: number;
    videoPrice?: number;
    ofVideoPriceIsTransactionFee?: number;
    audioPrice?: number;
    ofAudioPriceIsTransactionFee?: number;
    documentPrice?: number;
    ofDocumentPriceIsTransactionFee?: number;
    
}

}


namespace Proto {

  export interface LicenseLocale extends Proto.Message {

    locale?: string;
    name?: string;
    summary?: string;
    termsOfUse?: string;
    restrictedPublishingTopics?: string;
    restrictedIndustries?: string;
    restrictedGeoUse?: string;
    
}

}


namespace Proto {

  export interface LicenseLocaleChangeSet extends Proto.Message {

    locale?: string;
    name?: string;
    summary?: string;
    termsOfUse?: string;
    restrictedPublishingTopics?: string;
    restrictedIndustries?: string;
    restrictedGeoUse?: string;
    
}

}


namespace Proto {

  export interface DownloadSpec extends Proto.Message {

    bitDepth?: string;
    compression?: string;
    contentType?: string;
    format?: string;
    frameRate?: string;
    frameSize?: string;
    height?: number;
    width?: number;
    interlaced?: boolean;
    bytes?: Long;
    downloadLink?: string;
    assetKey?: string;
    isEditorial?: boolean;
    productType?: string;
    isComp?: boolean;
    isPremium?: boolean;
    sizeName?: string;
    binaryType?: Proto.BinaryType;
    source?: Proto.Source;
    
}

}


namespace Proto {

  export interface LicensedLicense extends Proto.Message {

    license?: Proto.License;
    issuerBrandUuid?: string;
    issuerCompanyInfo?: Proto.CompanyInfo;
    licensorBrandUuid?: string;
    licensorCompanyInfo?: Proto.CompanyInfo;
    licensorIsUser?: boolean;
    licenseAcceptedByUserUuid?: string;
    acceptedAndLicensedTimestamp?: Long;
    licenseValidUntilTimestamp?: Long;
    externalLicensedLicense?: Proto.ExternalLicensedLicense;
    downloadSpec?: Proto.DownloadSpec;
    
}

}


namespace Proto {

  export interface LicensedAsset extends Proto.Message {

    entity?: Proto.Entity;
    participationUuid?: string;
    
}

}


namespace Proto {

  export interface InheritedData extends Proto.Message {

    tags?: Proto.Tags;
    availableLicenseInfo?: Proto.LicenseInfo[];
    readAccessPermission?: Proto.ReadAccessPermission[];
    publicReadAccessPermission?: Proto.PublicReadAccessPermission;
    readAccessDefinedOnParent?: Proto.EntityReference;
    readAccessIsActive?: boolean;
    writeAccessPermission?: Proto.WriteAccessPermission[];
    published?: boolean;
    trashed?: boolean;
    deleted?: boolean;
    brandUuid?: string;
    brandType?: Proto.BrandType;
    brandWorldAdminUserGroupUuid?: string;
    defaultLocale?: string;
    contentCategory?: Proto.ContentCategory[];
    applyWatermark?: boolean;
    folderLayout?: Proto.FolderLayout;
    assetLayout?: Proto.AssetLayout;
    publishCondition?: Proto.PublishCondition;
    allowAnonymousDownload?: boolean;
    
}

}


namespace Proto {

  export interface DereferencedData extends Proto.Message {

    endUserGroup?: Proto.UserGroup[];
    endUser?: Proto.User[];
    adminUserGroup?: Proto.UserGroup[];
    license?: Proto.License[];
    entity?: Proto.Entity[];
    accessRequest?: Proto.AccessRequest[];
    publishRequest?: Proto.PublishRequest[];
    licenseRequest?: Proto.LicenseRequest[];
    creditTransaction?: Proto.CreditTransaction[];
    shoppingCart?: Proto.ShoppingCart[];
    purchaseCreditsRequest?: Proto.PurchaseCreditsRequest[];
    upgradePlanRequest?: Proto.UpgradePlanRequest[];
    joinRequest?: Proto.JoinRequest[];
    approvalRequest?: Proto.ApprovalRequest[];
    
}

}


namespace Proto {

  export interface AutocompletedEntities extends Proto.Message {

    endUserGroup?: Proto.UserGroup[];
    endUser?: Proto.User[];
    adminUserGroup?: Proto.UserGroup[];
    license?: Proto.License[];
    entity?: Proto.Entity[];
    tag?: Proto.Tag[];
    
}

}


namespace Proto {

  export interface Binary extends Proto.Message {

    binaryPurpose?: Proto.BinaryPurpose;
    outputId?: number;
    width?: number;
    height?: number;
    foregroundColor?: number;
    metatagsBasic?: Proto.BinaryMetatags;
    metatagsExtended?: Proto.BinaryMetatags;
    binaryType?: Proto.BinaryType;
    imagePresets?: Proto.ImagePresets;
    videoPresets?: Proto.VideoPresets;
    audioPresets?: Proto.AudioPresets;
    documentPresets?: Proto.DocumentPresets;
    fingerprint?: string;
    calculatedFromBinaryPurpose?: Proto.BinaryPurpose;
    calculatedFromFingerprint?: string;
    binaryProcessingFailed?: boolean;
    binaryProcessingFailedErrorCode?: Proto.BackendErrorCode;
    binaryProcessingFailedReason?: string;
    downloadLink?: string;
    
}

}


namespace Proto {

  export interface BinaryMetatags extends Proto.Message {

    metatag?: Proto.BinaryMetatag[];
    
}

}


namespace Proto {

  export interface BinaryMetatag extends Proto.Message {

    name?: string;
    intValue?: number;
    longValue?: Long;
    stringValue?: string;
    bytesValue?: string;
    boolValue?: boolean;
    floatValue?: number;
    doubleValue?: number;
    stringSetValue?: string[];
    
}

}


namespace Proto {

  export interface ImagePresets extends Proto.Message {

    transformationInfo?: Proto.ImageTransformationInfo;
    
}

}


namespace Proto {

  export interface ImageTransformationInfo extends Proto.Message {

    crop?: Proto.Crop;
    foregroundColor?: number;
    backgroundColor?: number;
    
}

}


namespace Proto {

  export interface Crop extends Proto.Message {

    x?: number;
    y?: number;
    width?: number;
    height?: number;
    
}

}


namespace Proto {

  export interface VideoPresets extends Proto.Message {

    thumbnailGenerationInfo?: Proto.VideoThumbnailGenerationInfo;
    
}

}


namespace Proto {

  export interface VideoThumbnailGenerationInfo extends Proto.Message {

    thumbnailPercentage?: number;
    
}

}


namespace Proto {

  export interface AudioPresets extends Proto.Message {

    
}

}


namespace Proto {

  export interface DocumentPresets extends Proto.Message {

    previewPage?: number;
    limitPreviewToOnePager?: boolean;
    numberOfPreviewParagraphs?: number;
    
}

}


namespace Proto {

  export interface Brand extends Proto.Message {

    defaultLocale?: string;
    brandType?: Proto.BrandType;
    order?: string;
    worldAdminUserGroupUuid?: string;
    defaultProjectUuid?: string;
    userPersona?: Proto.UserPersona[];
    trashEntityUuid?: string;
    jobsEntityUuid?: string;
    participationsEntityUuid?: string;
    projectsEntityUuid?: string;
    customDesign?: Proto.CustomDesign;
    contactInfo?: Proto.ContactInfo;
    companyInfo?: Proto.CompanyInfo;
    billingCompanyInfo?: Proto.CompanyInfo;
    purchaseCreditBalance?: number;
    payoutCreditBalance?: number;
    approved?: boolean;
    transactionLimit?: number;
    purchaseCreditBalancePositiveLimit?: number;
    purchaseCreditBalanceNegativeLimit?: number;
    instantChargeTrustedLimit?: number;
    showContactEmailAddress?: boolean;
    newNotificationCount?: number;
    defaultContentCategory?: Proto.ContentCategory;
    brandPlan?: Proto.BrandPlan;
    transactionsLocked?: boolean;
    uploadLocked?: boolean;
    connectExternalContentProvidersLocked?: boolean;
    jobServicesLocked?: boolean;
    upgradePlanRequestInfo?: Proto.UpgradePlanRequestInfo;
    joinRequestInfo?: Proto.JoinRequestInfo;
    billingInfoOverride?: boolean;
    brandLandLayout?: Proto.BrandLandLayout;
    approvalRequestInfo?: Proto.ApprovalRequestInfo;
    customSubdomain?: Proto.CustomSubdomain;
    customSubdomainLocked?: boolean;
    externalContentProviderInfo?: Proto.ExternalContentProviderInfo[];
    checkOutContentLocked?: boolean;
    reportingLocked?: boolean;
    publishContentLocked?: boolean;
    versioningLocked?: boolean;
    multiLevelAdminManagementLocked?: boolean;
    externalUserManagementLocked?: boolean;
    multiLevelExternalUserManagementLocked?: boolean;
    overrideDefaultLocaleForChilds?: string;
    
}

}


namespace Proto {

  export interface BrandChangeSet extends Proto.Message {

    putEndUserGroup?: Proto.UserGroupChangeSet[];
    removeEndUserGroup?: Proto.UserGroupChangeSet[];
    putAdminUserGroup?: Proto.UserGroupChangeSet[];
    removeAdminUserGroup?: Proto.UserGroupChangeSet[];
    putLicense?: Proto.LicenseChangeSet[];
    removeLicense?: Proto.LicenseChangeSet[];
    defaultLocale?: string;
    brandType?: Proto.BrandType;
    order?: string;
    customDesign?: Proto.CustomDesignChangeSet;
    companyInfo?: Proto.CompanyInfoChangeSet;
    billingCompanyInfo?: Proto.CompanyInfoChangeSet;
    showContactEmailAddress?: boolean;
    defaultContentCategory?: Proto.ContentCategory;
    billingInfoOverride?: boolean;
    brandLandLayout?: Proto.BrandLandLayout;
    customSubdomain?: Proto.CustomSubdomainChangeSet;
    overrideDefaultLocaleForChilds?: string;
    
}

}


namespace Proto {

  export interface CompanyInfo extends Proto.Message {

    companyName?: string;
    contactPersonGivenName?: string;
    contactPersonFamilyName?: string;
    contactPersonJobTitle?: string;
    street?: string;
    postalCode?: string;
    city?: string;
    countryCode?: string;
    email?: string;
    vat?: string;
    emailConfirmed?: boolean;
    countryName?: string;
    contactPersonName?: string;
    publicationName?: string;
    
}

}


namespace Proto {

  export interface CompanyInfoChangeSet extends Proto.Message {

    companyName?: string;
    contactPersonGivenName?: string;
    contactPersonFamilyName?: string;
    contactPersonJobTitle?: string;
    street?: string;
    postalCode?: string;
    city?: string;
    countryCode?: string;
    email?: string;
    vat?: string;
    publicationName?: string;
    
}

}


namespace Proto {

  export interface CustomDesign extends Proto.Message {

    color1?: number;
    color2?: number;
    
}

}


namespace Proto {

  export interface CustomDesignChangeSet extends Proto.Message {

    color1?: number;
    color2?: number;
    
}

}


namespace Proto {

  export interface CustomSubdomain extends Proto.Message {

    subdomain?: string;
    
}

}


namespace Proto {

  export interface CustomSubdomainChangeSet extends Proto.Message {

    subdomain?: string;
    
}

}


namespace Proto {

  export interface Folder extends Proto.Message {

    contentCategory?: Proto.ContentCategory;
    defaultLocale?: string;
    overrideDefaultLocaleForChilds?: string;
    
}

}


namespace Proto {

  export interface FolderChangeSet extends Proto.Message {

    contentCategory?: Proto.ContentCategory;
    removeContentCategory?: boolean;
    defaultLocale?: string;
    overrideDefaultLocaleForChilds?: string;
    
}

}


namespace Proto {

  export interface Asset extends Proto.Message {

    participationAsset?: Proto.ParticipationAsset;
    jobAsset?: Proto.JobAsset;
    acquiredAsset?: Proto.AcquiredAsset[];
    type?: Proto.AssetType;
    publicationTimestamp?: Long;
    reviewState?: Proto.AssetReviewState;
    releaseReference?: string;
    lastReleaseReference?: string;
    canonicalUrl?: string;
    defaultLocale?: string;
    
}

}


namespace Proto {

  export interface AssetChangeSet extends Proto.Message {

    type?: Proto.AssetType;
    publicationTimestamp?: Long;
    removePublicationTimestamp?: boolean;
    reviewState?: Proto.AssetReviewState;
    releaseReference?: string;
    canonicalUrl?: string;
    defaultLocale?: string;
    
}

}


namespace Proto {

  export interface ParticipationAsset extends Proto.Message {

    state?: Proto.ParticipationState;
    creditTransactionUuid?: string;
    fulfilledTimestamp?: Long;
    licensedLicense?: Proto.LicensedLicense;
    jobUuid?: string;
    jobIssuerBrandUuid?: string;
    participantBrandUuid?: string;
    jobIssuerCopy?: boolean;
    originalParticipationUuid?: string;
    
}

}


namespace Proto {

  export interface JobAsset extends Proto.Message {

    state?: Proto.JobState;
    
}

}


namespace Proto {

  export interface AcquiredAsset extends Proto.Message {

    creditTransactionUuid?: string;
    fulfilledTimestamp?: Long;
    licensedLicense?: Proto.LicensedLicense;
    fulfillmentError?: Proto.BackendErrorCode;
    
}

}


namespace Proto {

  export interface Trash extends Proto.Message {

    
}

}


namespace Proto {

  export interface TrashChangeSet extends Proto.Message {

    
}

}


namespace Proto {

  export interface Job extends Proto.Message {

    type?: Proto.JobType;
    pricingType?: Proto.JobPricingType;
    participationType?: Proto.JobParticipationType;
    state?: Proto.JobState;
    licenseId?: string;
    endTimestamp?: Long;
    reward?: number;
    
}

}


namespace Proto {

  export interface JobChangeSet extends Proto.Message {

    type?: Proto.JobType;
    pricingType?: Proto.JobPricingType;
    participationType?: Proto.JobParticipationType;
    state?: Proto.JobState;
    licenseId?: string;
    endTimestamp?: Long;
    reward?: number;
    jobActions?: Proto.JobActions;
    
}

}


namespace Proto {

  export interface JobActions extends Proto.Message {

    
}

}


namespace Proto {

  export interface JobApplicationSet extends Proto.Message {

    applicationMessage?: string;
    price?: number;
    version?: Long;
    
}

}


namespace Proto {

  export interface JobParticipationSet extends Proto.Message {

    participationMessage?: string;
    version?: Long;
    
}

}


namespace Proto {

  export interface JobApplicationAcceptSet extends Proto.Message {

    acceptMessage?: string;
    version?: Long;
    
}

}


namespace Proto {

  export interface JobParticipationSubmitSet extends Proto.Message {

    submitMessage?: string;
    version?: Long;
    
}

}


namespace Proto {

  export interface JobParticipationRejectSet extends Proto.Message {

    rejectionReason?: string;
    version?: Long;
    
}

}


namespace Proto {

  export interface JobCloseSet extends Proto.Message {

    closeReason?: string;
    version?: Long;
    
}

}


namespace Proto {

  export interface Participation extends Proto.Message {

    state?: Proto.ParticipationState;
    creditTransactionUuid?: string;
    fulfilledTimestamp?: Long;
    rejectedTimestamp?: Long;
    jobUuid?: string;
    jobIssuerBrandUuid?: string;
    participantBrandUuid?: string;
    jobIssuerCopy?: boolean;
    originalParticipationUuid?: string;
    price?: number;
    
}

}


namespace Proto {

  export interface ParticipationChangeSet extends Proto.Message {

    price?: number;
    
}

}


namespace Proto {

  export interface Project extends Proto.Message {

    state?: Proto.ProjectState;
    isDefaultProject?: boolean;
    
}

}


namespace Proto {

  export interface ProjectChangeSet extends Proto.Message {

    state?: Proto.ProjectState;
    
}

}


namespace Proto {

  export interface ShoppingCart extends Proto.Message {

    uuid?: string;
    state?: Proto.ShoppingCartState;
    brandUuid?: string;
    userUuid?: string;
    creditTransactionUuid?: string;
    createdTimestamp?: Long;
    lastUpdatedTimestamp?: Long;
    deleted?: boolean;
    dereferencedData?: Proto.DereferencedData;
    userCompanyInfo?: Proto.CompanyInfo;
    version?: Long;
    
}

}


namespace Proto {

  export interface ShoppingCarts extends Proto.Message {

    shoppingCart?: Proto.ShoppingCart[];
    summary?: Proto.QuerySummary;
    
}

}


namespace Proto {

  export interface ShoppingCartSubmitToBrandSet extends Proto.Message {

    submitMessage?: string;
    version?: Long;
    
}

}


namespace Proto {

  export interface ShoppingCartRejectAcquisitionSet extends Proto.Message {

    rejectionReason?: string;
    version?: Long;
    
}

}


namespace Proto {

  export interface ShoppingCartAcquireSet extends Proto.Message {

    autoFollow?: boolean;
    version?: Long;
    
}

}


namespace Proto {

  export interface CreditTransactionCostCalculation extends Proto.Message {

    monetaryValue?: number;
    monetaryCurrency?: Proto.CreditTransactionCurrency;
    costPerCredit?: number;
    isReverseCharge?: boolean;
    vatRate?: number;
    vatAmount?: number;
    monetaryValueVatInclusive?: number;
    billingCompanyInfo?: Proto.CompanyInfo;
    
}

}


namespace Proto {

  export interface CreditTransaction extends Proto.Message {

    uuid?: string;
    type?: Proto.CreditTransactionType;
    billingUuid?: string;
    relatedToProjectUuid?: string;
    relatedToJobUuid?: string;
    entityReference?: Proto.EntityReference;
    licenseUuid?: string;
    workingSetVersion?: Long;
    creditsTransferred?: number;
    ofCreditsTransferredIsFee?: number;
    startBalanceCredits?: number;
    endBalanceCredits?: number;
    monetaryValue?: number;
    monetaryCurrency?: Proto.CreditTransactionCurrency;
    costPerCredit?: number;
    payoutPerCredit?: number;
    monetaryPaymentMethod?: Proto.CreditTransactionPaymentMethod;
    monetaryTransferUuid?: string;
    additionalMonetaryTransferUuid?: string;
    userUuid?: string;
    dereferencedData?: Proto.DereferencedData;
    userCompanyInfo?: Proto.CompanyInfo;
    projectName?: string;
    jobName?: string;
    licenseName?: string;
    entityName?: string;
    createdTimestamp?: Long;
    lastUpdatedTimestamp?: Long;
    cancelledTimestamp?: Long;
    paidTimestamp?: Long;
    fulfilledTimestamp?: Long;
    cancellationReason?: string;
    message?: string;
    childCount?: number;
    customerCompanyInfo?: Proto.CompanyInfo;
    billingCompanyInfo?: Proto.CompanyInfo;
    licensedLicense?: Proto.LicensedLicense;
    isReverseCharge?: boolean;
    vatRate?: number;
    vatAmount?: number;
    monetaryValueVatInclusive?: number;
    version?: Long;
    external?: Proto.External;
    externalPricingModel?: Proto.ExternalPricingModel;
    externalCreditPrice?: number;
    externalMonetaryPrice?: number;
    fulfillmentError?: Proto.BackendErrorCode;
    fulfillmentErrorMessage?: string;
    fulfillmentRetryCount?: number;
    relatedToAdminUserGroupUuid?: string;
    costCenterId?: string;
    adminUserGroupName?: string;
    hasNewerEntityVersion?: boolean;
    onBehalfOfUserUuid?: string;
    onBehalfOfUserCompanyInfo?: Proto.CompanyInfo;
    historicDataImportId?: number;
    
}

}


namespace Proto {

  export interface CreditTransactions extends Proto.Message {

    creditTransaction?: Proto.CreditTransaction[];
    summary?: Proto.QuerySummary;
    
}

}


namespace Proto {

  export interface CreditBalanceChangeSet extends Proto.Message {

    creditTransactionType?: Proto.CreditTransactionType;
    changeAmount?: number;
    monetaryCurrency?: Proto.CreditTransactionCurrency;
    monetaryPaymentMethod?: Proto.CreditTransactionPaymentMethod;
    monetaryTransferUuid?: string;
    additionalMonetaryTransferUuid?: string;
    message?: string;
    startBalanceCredits?: number;
    fulfillsPurchaseCreditsRequestUuid?: string;
    planId?: number;
    promoCode?: string;
    
}

}


namespace Proto {

  export interface CreditTransactionCreateDownloadTaskSet extends Proto.Message {

    downloadType?: Proto.CreditTransactionDownloadType;
    downloadOriginalEntityVersion?: boolean;
    
}

}


namespace Proto {

  export interface AssetCreateDownloadTaskSet extends Proto.Message {

    licenseUuid?: string;
    autoFollow?: boolean;
    
}

}


namespace Proto {

  export interface User extends Proto.Message {

    uuid?: string;
    allUserGroupUuid?: string[];
    brandUuid?: string[];
    brandUser?: Proto.BrandUser[];
    entityReference?: Proto.EntityReference[];
    companyInfo?: Proto.CompanyInfo;
    createdTimestamp?: Long;
    lastUpdatedTimestamp?: Long;
    userPersona?: Proto.UserPersona[];
    dereferencedData?: Proto.DereferencedData;
    deleted?: boolean;
    newNotificationCount?: number;
    version?: Long;
    disabled?: boolean;
    approved?: boolean;
    userType?: Proto.UserType;
    ssoSecret?: string;
    
}

}


namespace Proto {

  export interface UserReserveSet extends Proto.Message {

    email?: string;
    
}

}


namespace Proto {

  export interface UserChangeSet extends Proto.Message {

    uuid?: string;
    companyInfo?: Proto.CompanyInfoChangeSet;
    userAction?: Proto.UserAction;
    version?: Long;
    userType?: Proto.UserType;
    regenerateSsoSecret?: boolean;
    defaultLocale?: string;
    
}

}


namespace Proto {

  export interface BrandUser extends Proto.Message {

    brandUuid?: string;
    brandEndUserGroupUuid?: string[];
    brandAdminUserGroupUuid?: string[];
    brandDirectEndUserGroupUuid?: string[];
    
}

}


namespace Proto {

  export interface UserSetting extends Proto.Message {

    userUuid?: string;
    interval?: Proto.EmailNotificationInterval;
    defaultLocale?: string;
    createdTimestamp?: Long;
    lastUpdatedTimestamp?: Long;
    version?: Long;
    
}

}


namespace Proto {

  export interface UserSettingChangeSet extends Proto.Message {

    interval?: Proto.EmailNotificationInterval;
    defaultLocale?: string;
    version?: Long;
    
}

}


namespace Proto {

  export interface UserFollowSetting extends Proto.Message {

    uuid?: string;
    userUuid?: string;
    brandUuid?: string;
    entityBrandUuid?: string;
    entity?: Proto.EntityReference;
    entitiesAddedSinceLastRead?: number;
    entitiesUpdatedSinceLastRead?: number;
    createdTimestamp?: Long;
    dereferencedData?: Proto.DereferencedData;
    
}

}


namespace Proto {

  export interface UserFollowSettings extends Proto.Message {

    userFollowSetting?: Proto.UserFollowSetting[];
    summary?: Proto.QuerySummary;
    
}

}


namespace Proto {

  export interface UserFollowSettingCreateSet extends Proto.Message {

    entity?: Proto.EntityReference;
    
}

}


namespace Proto {

  export interface UserReserveSets extends Proto.Message {

    userReserveSet?: Proto.UserReserveSet[];
    
}

}


namespace Proto {

  export interface UserChangeSets extends Proto.Message {

    userChangeSet?: Proto.UserChangeSet[];
    
}

}


namespace Proto {

  export interface Tag extends Proto.Message {

    uuid?: string;
    text?: string;
    score?: number;
    version?: Long;
    translations?: Proto.Translations;
    
}

}


namespace Proto {

  export interface NewTag extends Proto.Message {

    locale?: string;
    text?: string;
    
}

}


namespace Proto {

  export interface Tags extends Proto.Message {

    tag?: Proto.Tag[];
    summary?: Proto.QuerySummary;
    
}

}


namespace Proto {

  export interface ReadAccess extends Proto.Message {

    readAccessModel?: Proto.ReadAccessModel;
    readAccessDefinedOnParent?: Proto.EntityReference;
    readAccessPermission?: Proto.ReadAccessPermission[];
    publicReadAccessPermission?: Proto.PublicReadAccessPermission;
    
}

}


namespace Proto {

  export interface ReadAccessChangeSet extends Proto.Message {

    readAccessModel?: Proto.ReadAccessModel;
    putReadAccessPermission?: Proto.ReadAccessPermissionChangeSet[];
    removeReadAccessPermission?: Proto.ReadAccessPermissionChangeSet[];
    publicReadAccessPermission?: Proto.PublicReadAccessPermission;
    
}

}


namespace Proto {

  export interface WriteAccess extends Proto.Message {

    writeAccessModel?: Proto.WriteAccessModel;
    writeAccessPermission?: Proto.WriteAccessPermission[];
    
}

}


namespace Proto {

  export interface WriteAccessChangeSet extends Proto.Message {

    writeAccessModel?: Proto.WriteAccessModel;
    putWriteAccessPermission?: Proto.WriteAccessPermissionChangeSet[];
    removeWriteAccessPermission?: Proto.WriteAccessPermissionChangeSet[];
    
}

}


namespace Proto {

  export interface ReadAccessPermission extends Proto.Message {

    targetUuid?: string;
    type?: Proto.ReadAccessPermissionType;
    
}

}


namespace Proto {

  export interface ReadAccessPermissionChangeSet extends Proto.Message {

    targetUuid?: string;
    type?: Proto.ReadAccessPermissionType;
    targetUuidIsEmailAddress?: boolean;
    
}

}


namespace Proto {

  export interface WriteAccessPermission extends Proto.Message {

    adminUserGroupUuid?: string;
    accessFlags?: Long;
    cannotBeDeleted?: boolean;
    cannotBeChanged?: boolean;
    
}

}


namespace Proto {

  export interface WriteAccessPermissionChangeSet extends Proto.Message {

    adminUserGroupUuid?: string;
    accessFlags?: Long;
    cannotBeDeleted?: boolean;
    cannotBeChanged?: boolean;
    adminUserGroupUuidIsEmailAddress?: boolean;
    
}

}


namespace Proto {

  export interface UserGroup extends Proto.Message {

    userGroupUuid?: string;
    locale?: Proto.UserGroupLocale[];
    cannotBeDeleted?: boolean;
    mustContainAtLeastOneEntry?: boolean;
    requiresMembershipInUserGroupUuid?: string[];
    requiresManualCommit?: boolean;
    isAdminUserGroup?: boolean;
    brandUuid?: string[];
    dereferencedData?: Proto.DereferencedData;
    name?: string;
    description?: string;
    score?: number;
    userReadPermission?: Long;
    userWritePermission?: Long;
    numberOfUsers?: number;
    numberOfBrandUsers?: number;
    totalNumberOfUsers?: number;
    brandUuidResolved?: string;
    accessRequestInfo?: Proto.AccessRequestInfo;
    requiresApplicationMessage?: boolean;
    costCenterId?: string;
    
}

}


namespace Proto {

  export interface UserGroupChangeSet extends Proto.Message {

    userGroupUuid?: string;
    putLocale?: Proto.UserGroupLocaleChangeSet[];
    removeLocale?: Proto.UserGroupLocaleChangeSet[];
    cannotBeDeleted?: boolean;
    mustContainAtLeastOneEntry?: boolean;
    addRequiresMembershipInUserGroupUuid?: string[];
    removeRequiresMembershipInUserGroupUuid?: string[];
    requiresManualCommit?: boolean;
    addUserEmailAddress?: string[];
    removeUserUuid?: string[];
    addBrandUuid?: string[];
    removeBrandUuid?: string[];
    requiresApplicationMessage?: boolean;
    costCenterId?: string;
    doNotSendNotificationEmails?: boolean;
    
}

}


namespace Proto {

  export interface UserGroups extends Proto.Message {

    userGroup?: Proto.UserGroup[];
    summary?: Proto.QuerySummary;
    
}

}


namespace Proto {

  export interface UserGroupLocale extends Proto.Message {

    locale?: string;
    name?: string;
    description?: string;
    
}

}


namespace Proto {

  export interface UserGroupLocaleChangeSet extends Proto.Message {

    locale?: string;
    name?: string;
    description?: string;
    
}

}


namespace Proto {

  export interface AccessRequest extends Proto.Message {

    uuid?: string;
    applyingBrandUuid?: string;
    applyingUserUuid?: string;
    state?: Proto.AccessRequestState;
    targetEntity?: Proto.EntityReference;
    targetEndUserGroupUuid?: string;
    targetBrandUuid?: string;
    createdTimestamp?: Long;
    lastUpdatedTimestamp?: Long;
    acceptedTimestamp?: Long;
    rejectedTimestamp?: Long;
    deleted?: boolean;
    dereferencedData?: Proto.DereferencedData;
    applyingBrandName?: string;
    applyingUserCompanyInfo?: Proto.CompanyInfo;
    targetEndUserGroupName?: string;
    targetEntityName?: string;
    version?: Long;
    
}

}


namespace Proto {

  export interface AccessRequestInfo extends Proto.Message {

    accessRequestUuid?: string;
    acceptedTimestamp?: Long;
    rejectedTimestamp?: Long;
    state?: Proto.AccessRequestState;
    
}

}


namespace Proto {

  export interface AccessRequests extends Proto.Message {

    accessRequest?: Proto.AccessRequest[];
    summary?: Proto.QuerySummary;
    
}

}


namespace Proto {

  export interface AccessRequestCreateSet extends Proto.Message {

    applicationMessage?: string;
    targetEndUserGroupUuid?: string;
    targetEntity?: Proto.EntityReference;
    
}

}


namespace Proto {

  export interface AccessRequestRejectSet extends Proto.Message {

    rejectionReason?: string;
    isFinal?: boolean;
    version?: Long;
    
}

}


namespace Proto {

  export interface AccessRequestAcceptSet extends Proto.Message {

    version?: Long;
    
}

}


namespace Proto {

  export interface JoinRequest extends Proto.Message {

    uuid?: string;
    applyingUserUuid?: string;
    state?: Proto.JoinRequestState;
    targetBrandUuid?: string;
    createdTimestamp?: Long;
    lastUpdatedTimestamp?: Long;
    acceptedTimestamp?: Long;
    rejectedTimestamp?: Long;
    deleted?: boolean;
    dereferencedData?: Proto.DereferencedData;
    applyingUserCompanyInfo?: Proto.CompanyInfo;
    targetBrandName?: string;
    version?: Long;
    
}

}


namespace Proto {

  export interface JoinRequestInfo extends Proto.Message {

    joinRequestUuid?: string;
    acceptedTimestamp?: Long;
    rejectedTimestamp?: Long;
    state?: Proto.JoinRequestState;
    
}

}


namespace Proto {

  export interface JoinRequests extends Proto.Message {

    joinRequest?: Proto.JoinRequest[];
    summary?: Proto.QuerySummary;
    
}

}


namespace Proto {

  export interface JoinRequestCreateSet extends Proto.Message {

    applicationMessage?: string;
    targetBrandUuid?: string;
    
}

}


namespace Proto {

  export interface JoinRequestRejectSet extends Proto.Message {

    rejectionReason?: string;
    isFinal?: boolean;
    version?: Long;
    
}

}


namespace Proto {

  export interface JoinRequestAcceptSet extends Proto.Message {

    version?: Long;
    adminUserGroupUuid?: string;
    
}

}


namespace Proto {

  export interface LicenseRequest extends Proto.Message {

    uuid?: string;
    applyingBrandUuid?: string;
    applyingUserUuid?: string;
    state?: Proto.LicenseRequestState;
    targetEntity?: Proto.EntityReference;
    targetLicenseUuid?: string;
    targetBrandUuid?: string;
    createdTimestamp?: Long;
    lastUpdatedTimestamp?: Long;
    acceptedTimestamp?: Long;
    rejectedTimestamp?: Long;
    deleted?: boolean;
    dereferencedData?: Proto.DereferencedData;
    applyingBrandName?: string;
    applyingUserCompanyInfo?: Proto.CompanyInfo;
    targetLicenseName?: string;
    targetEntityName?: string;
    version?: Long;
    
}

}


namespace Proto {

  export interface LicenseRequestInfo extends Proto.Message {

    licenseRequestUuid?: string;
    targetLicenseUuid?: string;
    acceptedTimestamp?: Long;
    rejectedTimestamp?: Long;
    state?: Proto.LicenseRequestState;
    
}

}


namespace Proto {

  export interface LicenseRequests extends Proto.Message {

    licenseRequest?: Proto.LicenseRequest[];
    summary?: Proto.QuerySummary;
    
}

}


namespace Proto {

  export interface LicenseRequestCreateSet extends Proto.Message {

    applicationMessage?: string;
    targetLicenseUuid?: string;
    targetEntity?: Proto.EntityReference;
    
}

}


namespace Proto {

  export interface LicenseRequestRejectSet extends Proto.Message {

    rejectionReason?: string;
    isFinal?: boolean;
    version?: Long;
    
}

}


namespace Proto {

  export interface LicenseRequestAcceptSet extends Proto.Message {

    version?: Long;
    
}

}


namespace Proto {

  export interface PublishRequest extends Proto.Message {

    uuid?: string;
    brandUuid?: string;
    userUuid?: string;
    state?: Proto.PublishRequestState;
    targetEntity?: Proto.EntityReference;
    targetBrandUuid?: string;
    createdTimestamp?: Long;
    lastUpdatedTimestamp?: Long;
    acceptedTimestamp?: Long;
    rejectedTimestamp?: Long;
    deleted?: boolean;
    dereferencedData?: Proto.DereferencedData;
    userCompanyInfo?: Proto.CompanyInfo;
    targetEntityName?: string;
    version?: Long;
    
}

}


namespace Proto {

  export interface PublishRequestInfo extends Proto.Message {

    publishRequestUuid?: string;
    acceptedTimestamp?: Long;
    rejectedTimestamp?: Long;
    state?: Proto.PublishRequestState;
    
}

}


namespace Proto {

  export interface PublishRequests extends Proto.Message {

    publishRequest?: Proto.PublishRequest[];
    summary?: Proto.QuerySummary;
    
}

}


namespace Proto {

  export interface PublishRequestCreateSet extends Proto.Message {

    applicationMessage?: string;
    targetEntity?: Proto.EntityReference;
    
}

}


namespace Proto {

  export interface PublishRequestRejectSet extends Proto.Message {

    rejectionReason?: string;
    version?: Long;
    
}

}


namespace Proto {

  export interface PublishRequestAcceptSet extends Proto.Message {

    version?: Long;
    
}

}


namespace Proto {

  export interface PurchaseCreditsRequest extends Proto.Message {

    uuid?: string;
    brandUuid?: string;
    userUuid?: string;
    state?: Proto.PurchaseCreditsRequestState;
    requiredAmount?: number;
    createdTimestamp?: Long;
    lastUpdatedTimestamp?: Long;
    acceptedTimestamp?: Long;
    rejectedTimestamp?: Long;
    deleted?: boolean;
    dereferencedData?: Proto.DereferencedData;
    userCompanyInfo?: Proto.CompanyInfo;
    version?: Long;
    
}

}


namespace Proto {

  export interface PurchaseCreditsRequestInfo extends Proto.Message {

    purchaseCreditsRequestUuid?: string;
    acceptedTimestamp?: Long;
    rejectedTimestamp?: Long;
    state?: Proto.PurchaseCreditsRequestState;
    
}

}


namespace Proto {

  export interface PurchaseCreditsRequests extends Proto.Message {

    purchaseCreditsRequest?: Proto.PurchaseCreditsRequest[];
    summary?: Proto.QuerySummary;
    
}

}


namespace Proto {

  export interface PurchaseCreditsRequestCreateSet extends Proto.Message {

    applicationMessage?: string;
    requiredAmount?: number;
    
}

}


namespace Proto {

  export interface PurchaseCreditsRequestRejectSet extends Proto.Message {

    rejectionReason?: string;
    version?: Long;
    
}

}


namespace Proto {

  export interface UpgradePlanRequest extends Proto.Message {

    uuid?: string;
    brandUuid?: string;
    userUuid?: string;
    state?: Proto.UpgradePlanRequestState;
    planId?: number;
    currency?: Proto.CreditTransactionCurrency;
    createdTimestamp?: Long;
    lastUpdatedTimestamp?: Long;
    acceptedTimestamp?: Long;
    rejectedTimestamp?: Long;
    deleted?: boolean;
    dereferencedData?: Proto.DereferencedData;
    brandName?: string;
    userCompanyInfo?: Proto.CompanyInfo;
    version?: Long;
    promoCode?: string;
    
}

}


namespace Proto {

  export interface UpgradePlanRequestInfo extends Proto.Message {

    upgradePlanRequestUuid?: string;
    acceptedTimestamp?: Long;
    rejectedTimestamp?: Long;
    state?: Proto.UpgradePlanRequestState;
    planId?: number;
    promoCode?: string;
    
}

}


namespace Proto {

  export interface UpgradePlanRequests extends Proto.Message {

    upgradePlanRequest?: Proto.UpgradePlanRequest[];
    summary?: Proto.QuerySummary;
    
}

}


namespace Proto {

  export interface UpgradePlanRequestCreateSet extends Proto.Message {

    message?: string;
    planId?: number;
    currency?: Proto.CreditTransactionCurrency;
    promoCode?: string;
    
}

}


namespace Proto {

  export interface UpgradePlanRequestRejectSet extends Proto.Message {

    rejectionReason?: string;
    version?: Long;
    
}

}


namespace Proto {

  export interface UpgradePlanRequestAcceptSet extends Proto.Message {

    version?: Long;
    planId?: number;
    includedBrands?: number;
    includedListedAssets?: number;
    connectExternalContentProviders?: number;
    jobServices?: boolean;
    customWatermark?: boolean;
    currency?: Proto.CreditTransactionCurrency;
    period?: Proto.CreditTransactionPeriod;
    costPerPeriod?: number;
    promoCode?: string;
    customSubdomain?: boolean;
    checkOutContent?: boolean;
    reporting?: boolean;
    publishContent?: boolean;
    versioning?: boolean;
    multiLevelAdminManagement?: boolean;
    externalUserManagement?: boolean;
    multiLevelExternalUserManagement?: boolean;
    includedAcquisitionVolume?: number;
    includedTotalTransactions?: number;
    includedTotalStorageGb?: number;
    
}

}


namespace Proto {

  export interface ApprovalRequest extends Proto.Message {

    uuid?: string;
    brandUuid?: string;
    userUuid?: string;
    state?: Proto.ApprovalRequestState;
    createdTimestamp?: Long;
    lastUpdatedTimestamp?: Long;
    acceptedTimestamp?: Long;
    rejectedTimestamp?: Long;
    deleted?: boolean;
    dereferencedData?: Proto.DereferencedData;
    brandName?: string;
    userCompanyInfo?: Proto.CompanyInfo;
    version?: Long;
    
}

}


namespace Proto {

  export interface ApprovalRequestInfo extends Proto.Message {

    approvalRequestUuid?: string;
    acceptedTimestamp?: Long;
    rejectedTimestamp?: Long;
    state?: Proto.ApprovalRequestState;
    
}

}


namespace Proto {

  export interface ApprovalRequests extends Proto.Message {

    approvalRequest?: Proto.ApprovalRequest[];
    summary?: Proto.QuerySummary;
    
}

}


namespace Proto {

  export interface ApprovalRequestCreateSet extends Proto.Message {

    message?: string;
    
}

}


namespace Proto {

  export interface ApprovalRequestRejectSet extends Proto.Message {

    rejectionReason?: string;
    version?: Long;
    
}

}


namespace Proto {

  export interface ApprovalRequestAcceptSet extends Proto.Message {

    version?: Long;
    
}

}


namespace Proto {

  export interface CollectedEntity extends Proto.Message {

    uuid?: string;
    relatedToProjectUuid?: string;
    relatedToJobUuid?: string;
    entityReference?: Proto.EntityReference;
    licenseUuid?: string;
    createdTimestamp?: Long;
    lastUpdatedTimestamp?: Long;
    deleted?: boolean;
    dereferencedData?: Proto.DereferencedData;
    projectName?: string;
    jobName?: string;
    licenseName?: string;
    entityName?: string;
    entityWorkingSetBinaryType?: Proto.BinaryType;
    version?: Long;
    external?: Proto.External;
    relatedToAdminUserGroupUuid?: string;
    costCenterId?: string;
    adminUserGroupName?: string;
    licenseGroupingKey?: string;
    
}

}


namespace Proto {

  export interface CollectedEntityInfo extends Proto.Message {

    collectedEntityUuid?: string;
    projectUuid?: string;
    shoppingCartUuid?: string;
    licenseUuid?: string;
    
}

}


namespace Proto {

  export interface CollectedEntities extends Proto.Message {

    collectedEntity?: Proto.CollectedEntity[];
    summary?: Proto.QuerySummary;
    
}

}


namespace Proto {

  export interface CollectedEntityCreateSet extends Proto.Message {

    targetEntity?: Proto.EntityReference;
    licenseUuid?: string;
    adminUserGroupUuid?: string;
    
}

}


namespace Proto {

  export interface CollectedEntityCreateSets extends Proto.Message {

    collectedEntityCreateSet?: Proto.CollectedEntityCreateSet[];
    
}

}


namespace Proto {

  export interface CollectedEntityChangeSet extends Proto.Message {

    collectedEntityUuid?: string;
    licenseUuid?: string;
    version?: Long;
    adminUserGroupUuid?: string;
    removeAdminUserGroup?: boolean;
    
}

}


namespace Proto {

  export interface CollectedEntityChangeSets extends Proto.Message {

    collectedEntityChangeSet?: Proto.CollectedEntityChangeSet[];
    
}

}


namespace Proto {

  export interface CollectedEntityCopySet extends Proto.Message {

    collectedEntityUuid?: string;
    version?: Long;
    
}

}


namespace Proto {

  export interface CollectedEntityCopySets extends Proto.Message {

    collectedEntityCopySet?: Proto.CollectedEntityCopySet[];
    
}

}


namespace Proto {

  export interface CollectedEntityMoveSet extends Proto.Message {

    collectedEntityUuid?: string;
    version?: Long;
    
}

}


namespace Proto {

  export interface CollectedEntityMoveSets extends Proto.Message {

    collectedEntityMoveSet?: Proto.CollectedEntityMoveSet[];
    
}

}


namespace Proto {

  export interface CollectedEntityDeleteSet extends Proto.Message {

    collectedEntityUuid?: string;
    version?: Long;
    
}

}


namespace Proto {

  export interface CollectedEntityDeleteSets extends Proto.Message {

    collectedEntityDeleteSet?: Proto.CollectedEntityDeleteSet[];
    
}

}


namespace Proto {

  export interface ContactFormSendSet extends Proto.Message {

    email?: string;
    subject?: string;
    message?: string;
    recaptchaResponse?: string;
    
}

}


namespace Proto {

  export interface HistorySelectSet extends Proto.Message {

    recordType?: Proto.HistoryRecordType;
    recordUuid?: string;
    requestInteractive?: boolean;
    
}

}


namespace Proto {

  export interface HistoryEvent extends Proto.Message {

    id?: Long;
    userUuid?: string;
    brandUuid?: string;
    timestamp?: Long;
    recordType?: Proto.HistoryRecordType;
    recordUuid?: string;
    recordVersion?: Long;
    activity?: Proto.HistoryActivity[];
    userData?: Proto.HistoryUserData;
    
}

}


namespace Proto {

  export interface HistoryEvents extends Proto.Message {

    event?: Proto.HistoryEvent[];
    summary?: Proto.QuerySummary;
    
}

}


namespace Proto {

  export interface HistoryActivity extends Proto.Message {

    type?: Proto.HistoryActivity.ActivityType;
    userGroupData?: Proto.HistoryUserGroupData[];
    licenseData?: Proto.HistoryLicenseData[];
    userData?: Proto.HistoryUserData[];
    entityData?: Proto.HistoryEntityData[];
    localeData?: string[];
    licenseTypeOfUseData?: Proto.LicenseTypeOfUse[];
    tagData?: Proto.HistoryTagData[];
    translationData?: string[];
    workingSetData?: Long[];
    binarySetData?: Proto.HistoryBinarySetData[];
    binaryData?: Proto.BinaryPurpose[];
    participationData?: Proto.HistoryParticipationData[];
    shoppingCartData?: string[];
    collectedEntityData?: string[];
    creditBalanceData?: string[];
    creditTransactionData?: string[];
    brandLinkData?: Proto.HistoryBrandLinkData[];
    relatedUserGroupData?: Proto.HistoryUserGroupData[];
    valueChange?: Proto.HistoryValueChange[];
    message?: string;
    price?: number;
    startPurchaseCredits?: number;
    endPurchaseCredits?: number;
    startPayoutCredits?: number;
    endPayoutCredits?: number;
    isInteractive?: boolean;
    externalContentProviderData?: Proto.HistoryExternalContentProviderData;
    externalContentProviderProductData?: string;
    
}

}

namespace Proto.HistoryActivity {
	export const enum ActivityType {
		ENTITY_CREATED = 0,
		PROPERTY_CHANGED = 1,
		TAGS_ADDED = 2,
		TAGS_CHANGED = 3,
		TAGS_REMOVED = 4,
		READ_ACCESS_PERMISSION_END_USER_GROUP_ADDED = 5,
		READ_ACCESS_PERMISSION_END_USER_GROUP_REMOVED = 6,
		WRITE_ACCESS_PERMISSION_ADMIN_USER_GROUP_ADDED = 8,
		WRITE_ACCESS_PERMISSION_ADMIN_USER_GROUP_CHANGED = 9,
		WRITE_ACCESS_PERMISSION_ADMIN_USER_GROUP_REMOVED = 10,
		AVAILABLE_LICENSE_ADDED = 11,
		AVAILABLE_LICENSE_REMOVED = 12,
		BINARIES_ADDED = 13,
		BINARIES_CHANGED = 14,
		BINARIES_REMOVED = 15,
		PARENTS_ADDED = 16,
		PARENTS_REMOVED = 17,
		END_USER_GROUP_ADDED = 18,
		END_USER_GROUP_CHANGED = 19,
		END_USER_GROUP_REMOVED = 20,
		ADMIN_USER_GROUP_ADDED = 21,
		ADMIN_USER_GROUP_CHANGED = 22,
		ADMIN_USER_GROUP_REMOVED = 23,
		BINARY_VERSION_ADDED = 24,
		ENTITY_MOVED_TO_TRASH = 25,
		ENTITY_DELETED = 26,
		ENTITY_RESTORED = 27,
		ENTITY_LOCALE_ADDED = 28,
		ENTITY_LOCALE_REMOVED = 29,
		ENTITY_LOCALE_CHANGED = 30,
		USER_GROUP_LOCALE_ADDED = 31,
		USER_GROUP_LOCALE_REMOVED = 32,
		USER_GROUP_LOCALE_CHANGED = 33,
		NEW_WORKING_SET_ADDED = 37,
		TAG_CREATED = 38,
		TAG_TRANSLATION_ADDED = 39,
		TAG_TRANSLATION_CHANGED = 40,
		TAG_TRANSLATION_REMOVED = 41,
		TAG_CONFIRMED = 42,
		TAG_UNCONFIRMED = 43,
		TAG_DELETED = 44,
		BINARY_SET_ADDED = 45,
		BINARY_SET_CHANGED = 46,
		BINARY_SET_REMOVED = 47,
		ENTITY_COPIED = 48,
		ENTITY_COPIED_FROM_ENTITY = 49,
		STARTED_PARTICIPATION = 50,
		PARTICIPATION_SUBMITTED = 51,
		ENTITY_TRASHED = 52,
		PARTICIPATION_REJECTED = 53,
		PARTICIPATION_FINALLY_REJECTED = 54,
		PARTICIPATION_ACQUIRED = 55,
		PARTICIPATION_ACCEPTED = 56,
		JOB_CLOSED = 57,
		WORKINGSET_COMMITTED = 58,
		ASSET_ACQUIRED = 60,
		LICENSE_ADDED = 61,
		LICENSE_REMOVED = 62,
		LICENSE_CHANGED = 63,
		LICENSE_LOCALE_ADDED = 64,
		LICENSE_LOCALE_REMOVED = 65,
		LICENSE_LOCALE_CHANGED = 66,
		LICENSE_TYPE_OF_USE_ADDED = 67,
		LICENSE_TYPE_OF_USE_REMOVED = 68,
		USER_GROUP_REQUIRED_MEMBERSHIP_ADDED = 69,
		USER_GROUP_REQUIRED_MEMBERSHIP_REMOVED = 70,
		SUBMITTED_APPLICATION = 71,
		APPLICATION_REJECTED = 72,
		APPLICATION_ACCEPTED = 73,
		READ_ACCESS_PERMISSION_USER_ADDED = 74,
		READ_ACCESS_PERMISSION_USER_REMOVED = 75,
		READ_ACCESS_PERMISSION_BRAND_ADDED = 76,
		READ_ACCESS_PERMISSION_BRAND_REMOVED = 77,
		MANUAL_ACCESS_REQUEST_INITIATED = 78,
		MANUAL_ACCESS_REQUEST_ACCEPTED = 79,
		MANUAL_ACCESS_REQUEST_REJECTED = 80,
		MANUAL_ACCESS_REQUEST_FINALLY_REJECTED = 81,
		AUTOMATIC_ACCESS_REQUEST_INITIATED_AND_ACCEPTED = 82,
		END_USER_GROUP_BRAND_ADDED = 83,
		END_USER_GROUP_BRAND_REMOVED = 84,
		ENTITY_COPIED_TO_ENTITY = 85,
		COLLECTED_ENTITY_CREATED = 86,
		COLLECTED_ENTITY_DELETED = 87,
		COLLECTED_ENTITIES_CREATED = 88,
		COLLECTED_ENTITIES_DELETED = 89,
		SHOPPING_CART_SUBMITTED_TO_BRAND = 90,
		COLLECTED_ENTITY_COPIED_TO_SHOPPING_CART = 91,
		COLLECTED_ENTITIES_COPIED_TO_SHOPPING_CART = 92,
		COLLECTED_ENTITY_MOVED_TO_PROJECT = 93,
		COLLECTED_ENTITY_MOVED_TO_PROJECT_BY_DELETION = 94,
		COLLECTED_ENTITIES_MOVED_TO_PROJECT = 95,
		SHOPPING_CART_REJECTED = 96,
		SHOPPING_CART_ACQUIRED = 97,
		SHOPPING_CART_FULFILLED = 98,
		BRAND_LINK_ADDED = 100,
		BRAND_LINK_CHANGED = 101,
		BRAND_LINK_REMOVED = 102,
		ENTITY_PUBLISHED = 103,
		ENTITY_UNPUBLISHED = 104,
		CREDITS_INCREASED = 105,
		CREDITS_REDUCED = 106,
		CREDIT_BALANCE_PREPAID_CHARGE_STARTED = 107,
		CREDIT_BALANCE_PREPAID_CHARGE_PAID_AND_FULFILLED = 108,
		CREDIT_BALANCE_INSTANT_CHARGE_STARTED_AND_FULFILLED = 109,
		CREDIT_BALANCE_INSTANT_CHARGE_STARTED_PAID_AND_FULFILLED = 110,
		CREDIT_BALANCE_INSTANT_CHARGE_PAID = 111,
		CREDIT_BALANCE_PAID_OUT = 112,
		CREDIT_BALANCE_FEE_STARTED_AND_PAID = 113,
		PUBLISH_REQUEST_INITIATED = 114,
		PUBLISH_REQUEST_ACCEPTED = 115,
		PUBLISH_REQUEST_REJECTED = 116,
		LICENSE_REQUEST_INITIATED = 117,
		LICENSE_REQUEST_ACCEPTED = 118,
		LICENSE_REQUEST_REJECTED = 119,
		LICENSE_REQUEST_FINALLY_REJECTED = 120,
		PURCHASE_CREDITS_REQUEST_INITIATED = 121,
		PURCHASE_CREDITS_REQUEST_REJECTED = 122,
		PURCHASE_CREDITS_REQUEST_FULFILLED = 123,
		PURCHASE_CREDITS_REQUEST_ACCEPTED = 124,
		UPGRADE_PLAN_REQUEST_INITIATED = 125,
		UPGRADE_PLAN_REQUEST_ACCEPTED = 126,
		UPGRADE_PLAN_REQUEST_REJECTED = 127,
		JOIN_REQUEST_INITIATED = 128,
		JOIN_REQUEST_ACCEPTED = 129,
		JOIN_REQUEST_REJECTED = 130,
		JOIN_REQUEST_FINALLY_REJECTED = 131,
		CREDIT_BALANCE_FEE_STARTED = 132,
		CREDIT_BALANCE_FEE_PAID = 133,
		APPROVAL_REQUEST_INITIATED = 134,
		APPROVAL_REQUEST_ACCEPTED = 135,
		APPROVAL_REQUEST_REJECTED = 136,
		EXTERNAL_CONTENT_PROVIDER_SETUP_STARTED = 137,
		EXTERNAL_CONTENT_PROVIDER_CONFIGURED = 138,
		EXTERNAL_CONTENT_PROVIDER_CONFIGURATION_ERROR = 139,
		EXTERNAL_CONTENT_PROVIDER_REFRESHED = 140,
		EXTERNAL_CONTENT_PROVIDER_REFRESHED_MANUALLY = 141,
		EXTERNAL_CONTENT_PROVIDER_EXPIRED = 142,
		EXTERNAL_CONTENT_PROVIDER_CHANGED = 143,
		EXTERNAL_CONTENT_PROVIDER_PRODUCT_CHANGED = 144,
		COLLECTED_ENTITY_CHANGED = 145,
		
}
}



namespace Proto {

  export interface HistoryBinarySetData extends Proto.Message {

    uuid?: number;
    name?: string;
    
}

}


namespace Proto {

  export interface HistoryBrandLinkData extends Proto.Message {

    uuid?: number;
    name?: string;
    
}

}


namespace Proto {

  export interface HistoryUserGroupData extends Proto.Message {

    userGroupUuid?: string;
    names?: Proto.Translations;
    
}

}


namespace Proto {

  export interface HistoryLicenseData extends Proto.Message {

    licenseUuid?: string;
    names?: Proto.Translations;
    
}

}


namespace Proto {

  export interface HistoryUserData extends Proto.Message {

    userUuid?: string;
    companyInfo?: Proto.CompanyInfo;
    
}

}


namespace Proto {

  export interface HistoryParticipationData extends Proto.Message {

    participationUuid?: string;
    brandUuid?: string;
    brandNames?: Proto.Translations;
    
}

}


namespace Proto {

  export interface HistoryEntityData extends Proto.Message {

    entityUuid?: string;
    entityType?: Proto.EntityType;
    names?: Proto.Translations;
    
}

}


namespace Proto {

  export interface HistoryTagData extends Proto.Message {

    tagUuid?: string;
    names?: Proto.Translations;
    
}

}


namespace Proto {

  export interface HistoryExternalContentProviderData extends Proto.Message {

    provider?: Proto.ExternalContentProvider;
    backendErrorCode?: Proto.BackendErrorCode;
    
}

}


namespace Proto {

  export interface HistoryValueChange extends Proto.Message {

    propertyName?: string;
    from?: Proto.HistoryValue;
    to?: Proto.HistoryValue;
    
}

}


namespace Proto {

  export interface HistoryValue extends Proto.Message {

    longValue?: Long;
    stringValue?: string;
    bytesValue?: string;
    boolValue?: boolean;
    floatValue?: number;
    doubleValue?: number;
    
}

}


namespace Proto {

  export interface Translation extends Proto.Message {

    locale?: string;
    synonymKey?: Proto.Translation.SynonymKey;
    text?: string;
    
}

}

namespace Proto.Translation {
	export const enum SynonymKey {
		DEFAULT = 1,
		SYNONYM_1 = 2,
		SYNONYM_2 = 3,
		SYNONYM_3 = 4,
		
}
}



namespace Proto {

  export interface Translations extends Proto.Message {

    translation?: Proto.Translation[];
    
}

}


namespace Proto {

  export interface QueryData extends Proto.Message {

    startIndex?: number;
    count?: number;
    orderBy?: Proto.QueryOrderBy;
    orderDirection?: Proto.QueryOrderDirection;
    terms?: string;
    termsAnd?: boolean;
    recursive?: boolean;
    locale?: string;
    type?: Proto.EntityType[];
    locales?: string[];
    dimension?: Proto.Dimension[];
    binaryType?: Proto.BinaryType[];
    uploaded?: Proto.Uploaded;
    orientation?: Proto.Orientation[];
    videoFormat?: Proto.VideoFormat[];
    videoAspectRatio?: Proto.VideoAspectRatio[];
    duration?: Proto.Duration[];
    pageCount?: Proto.PageCount[];
    source?: Proto.Source;
    licenseId?: string[];
    multiParentId?: string[];
    includeContidio?: boolean;
    projectState?: Proto.ProjectState[];
    creditTransactionType?: Proto.CreditTransactionType[];
    fromCreatedTimestamp?: Long;
    toCreatedTimestamp?: Long;
    fromLastUpdatedTimestamp?: Long;
    toLastUpdatedTimestamp?: Long;
    fromLastCommittedTimestamp?: Long;
    toLastCommittedTimestamp?: Long;
    autocompletedEntityType?: Proto.AutocompletedEntityType[];
    jobType?: Proto.JobType[];
    jobState?: Proto.JobState[];
    participationState?: Proto.ParticipationState[];
    notificationType?: Proto.NotificationType[];
    notificationState?: Proto.NotificationState[];
    contentCategory?: Proto.ContentCategory[];
    publishingState?: Proto.QueryPublishingState;
    assetType?: Proto.AssetType[];
    brandType?: Proto.BrandType[];
    reviewState?: Proto.QueryReviewState[];
    includeInactive?: boolean;
    
}

}


namespace Proto {

  export interface QueryAggregation extends Proto.Message {

    key?: string;
    count?: Long;
    from?: string;
    to?: string;
    
}

}


namespace Proto {

  export interface QueryAggregations extends Proto.Message {

    key?: string;
    aggregation?: Proto.QueryAggregation[];
    
}

}


namespace Proto {

  export interface QuerySummary extends Proto.Message {

    totalCount?: Long;
    aggregation?: Proto.QueryAggregations[];
    queryData?: Proto.QueryData;
    
}

}


namespace Proto {

  export interface Notification extends Proto.Message {

    notificationId?: Long;
    isDerivedFromNotificationUuid?: Long;
    type?: Proto.NotificationType;
    state?: Proto.NotificationState;
    entityReference?: Proto.EntityReference;
    underlyingObjectUuid?: string;
    createdTimestamp?: Long;
    lastUpdatedTimestamp?: Long;
    targetBrandUuid?: string;
    targetUserUuid?: string;
    message?: string;
    deleted?: boolean;
    brandUuid?: string;
    userUuid?: string;
    dereferencedData?: Proto.DereferencedData;
    brandName?: string;
    userCompanyInfo?: Proto.CompanyInfo;
    entityName?: string;
    userGroupName?: string;
    version?: Long;
    externalNotificationData?: Proto.ExternalNotificationData;
    
}

}


namespace Proto {

  export interface Notifications extends Proto.Message {

    notification?: Proto.Notification[];
    summary?: Proto.QuerySummary;
    
}

}


namespace Proto {

  export interface BrandPlan extends Proto.Message {

    brandPlanId?: number;
    includedBrands?: number;
    includedListedAssets?: number;
    connectExternalContentProviders?: number;
    jobServices?: boolean;
    customWatermark?: boolean;
    currentlyListedAssets?: number;
    lastCountTimestamp?: Long;
    currency?: Proto.CreditTransactionCurrency;
    period?: Proto.CreditTransactionPeriod;
    costPerPeriod?: number;
    promoCode?: string;
    promoCodeActiveUntil?: Long;
    customSubdomain?: boolean;
    checkOutContent?: boolean;
    reporting?: boolean;
    publishContent?: boolean;
    versioning?: boolean;
    multiLevelAdminManagement?: boolean;
    externalUserManagement?: boolean;
    multiLevelExternalUserManagement?: boolean;
    includedAcquisitionVolume?: number;
    includedTotalTransactions?: number;
    includedTotalStorageGb?: number;
    
}

}


namespace Proto {

  export interface ExternalContentProviderSetupSet extends Proto.Message {

    version?: Long;
    
}

}


namespace Proto {

  export interface ExternalContentProviderSetup extends Proto.Message {

    redirectToUrl?: string;
    
}

}


namespace Proto {

  export interface ExternalContentProviderConfigureSet extends Proto.Message {

    state?: string;
    accessToken?: string;
    refreshToken?: string;
    expiresIn?: number;
    error?: string;
    userName?: string;
    password?: string;
    code?: string;
    version?: Long;
    
}

}


namespace Proto {

  export interface ExternalContentProviderRefreshSet extends Proto.Message {

    alsoRefreshPricingInformation?: boolean;
    version?: Long;
    
}

}


namespace Proto {

  export interface ExternalContentProviderConfiguration extends Proto.Message {

    provider?: Proto.ExternalContentProvider;
    state?: Proto.ExternalContentProviderState;
    setupStartedTimestamp?: Long;
    setupCompletedTimestamp?: Long;
    lastRefreshTimestamp?: Long;
    lastRefreshWasManual?: boolean;
    userUuid?: string;
    expiryTimestamp?: Long;
    backendErrorCode?: Proto.BackendErrorCode;
    dereferencedData?: Proto.DereferencedData;
    externalUserName?: string;
    userCompanyInfo?: Proto.CompanyInfo;
    version?: Long;
    
}

}


namespace Proto {

  export interface ExternalContentProviderConfigurationChangeSet extends Proto.Message {

    putProviderProduct?: Proto.ExternalContentProviderProductChangeSet[];
    version?: Long;
    
}

}


namespace Proto {

  export interface ExternalContentProviderConfigurations extends Proto.Message {

    externalContentProviderConfiguration?: Proto.ExternalContentProviderConfiguration[];
    summary?: Proto.QuerySummary;
    
}

}


namespace Proto {

  export interface ExternalContentProviderProduct extends Proto.Message {

    productId?: string;
    creditsRemaining?: number;
    downloadLimit?: number;
    downloadLimitEndTimestamp?: Long;
    downloadLimitResetTimestamp?: Long;
    downloadsRemaining?: number;
    expirationTimestamp?: Long;
    name?: string;
    state?: string;
    type?: string;
    agreementName?: string;
    resolution?: string;
    noteRequired?: boolean;
    projectCodeRequired?: boolean;
    overageLimit?: number;
    overageRemaining?: number;
    overageCount?: number;
    overageReached?: boolean;
    pricingModel?: Proto.ExternalPricingModel;
    imageExternalCreditPriceFull?: number;
    imageMonetaryPriceFull?: number;
    videoExternalCreditPrice4K?: number;
    videoMonetaryPrice4K?: number;
    audioExternalCreditPrice?: number;
    audioMonetaryPrice?: number;
    documentExternalCreditPrice?: number;
    documentMonetaryPrice?: number;
    warningLimitDownloads?: number;
    format?: Proto.ExternalContentProviderProductFormat[];
    warningLimitDownloadsCurrentUsage?: number;
    isCreditPack?: boolean;
    videoExternalCreditPriceHD?: number;
    videoMonetaryPriceHD?: number;
    videoExternalCreditPriceSD?: number;
    videoMonetaryPriceSD?: number;
    videoExternalCreditPriceLR?: number;
    videoMonetaryPriceLR?: number;
    isInactive?: boolean;
    imageExternalCreditPriceMedium?: number;
    imageMonetaryPriceMedium?: number;
    imageExternalCreditPriceSmall?: number;
    imageMonetaryPriceSmall?: number;
    warningLimitCredits?: number;
    warningLimitCreditsCurrentUsage?: number;
    
}

}


namespace Proto {

  export interface ExternalContentProviderProductChangeSet extends Proto.Message {

    productId?: string;
    pricingModel?: Proto.ExternalPricingModel;
    imageExternalCreditPriceFull?: number;
    imageMonetaryPriceFull?: number;
    videoExternalCreditPrice4K?: number;
    videoMonetaryPrice4K?: number;
    audioExternalCreditPrice?: number;
    audioMonetaryPrice?: number;
    documentExternalCreditPrice?: number;
    documentMonetaryPrice?: number;
    warningLimitDownloads?: number;
    removeWarningLimitDownloads?: boolean;
    videoExternalCreditPriceHD?: number;
    videoMonetaryPriceHD?: number;
    videoExternalCreditPriceSD?: number;
    videoMonetaryPriceSD?: number;
    videoExternalCreditPriceLR?: number;
    videoMonetaryPriceLR?: number;
    imageExternalCreditPriceMedium?: number;
    imageMonetaryPriceMedium?: number;
    imageExternalCreditPriceSmall?: number;
    imageMonetaryPriceSmall?: number;
    warningLimitCredits?: number;
    removeWarningLimitCredits?: boolean;
    
}

}


namespace Proto {

  export interface ExternalContentProviderProducts extends Proto.Message {

    product?: Proto.ExternalContentProviderProduct[];
    summary?: Proto.QuerySummary;
    
}

}


namespace Proto {

  export interface ExternalContentProviderProductFormat extends Proto.Message {

    size?: string;
    format?: string;
    mediaType?: string;
    minResolution?: number;
    description?: string;
    
}

}


namespace Proto {

  export interface ExternalContentProviderInfo extends Proto.Message {

    provider?: Proto.ExternalContentProvider;
    state?: Proto.ExternalContentProviderState;
    
}

}


namespace Proto {

  export interface External extends Proto.Message {

    source?: Proto.Source;
    link?: string;
    
}

}


namespace Proto {

  export interface ExternalLicensedLicense extends Proto.Message {

    productId?: string;
    productType?: string;
    agreementName?: string;
    accountName?: string;
    
}

}


namespace Proto {

  export interface ExternalLink extends Proto.Message {

    name?: string;
    link?: string;
    
}

}


namespace Proto {

  export interface ExternalNotificationData extends Proto.Message {

    provider?: Proto.ExternalContentProvider;
    productId?: string;
    productName?: string;
    warningLimitDownloadsCurrentUsage?: number;
    warningLimitDownloads?: number;
    warningLimitCreditsCurrentUsage?: number;
    warningLimitCredits?: number;
    
}

}


namespace Proto {

  export interface Error extends Proto.Message {

    httpStatusCode?: number;
    backendErrorCode?: Proto.BackendErrorCode;
    exceptionType?: string;
    errorMessage?: string;
    
}

}


namespace Proto {

  export interface ServerTask extends Proto.Message {

    taskUuid?: string;
    issuedTimestamp?: Long;
    type?: Proto.ServerTaskType;
    completedPercentage?: number;
    
}

}


namespace Proto {

  export interface ServerTaskProgress extends Proto.Message {

    transactionUuid?: string;
    serverTaskProgressTask?: Proto.ServerTask[];
    serverTaskCreated?: Proto.ServerTask[];
    backendErrorCode?: Proto.BackendErrorCode;
    backendErrorMessage?: string;
    hasError?: boolean;
    
}

}


namespace Proto {

  export interface EventBusMessage extends Proto.Message {

    serverTaskProgress?: Proto.ServerTaskProgress;
    
}

}


namespace Proto {

  export interface ServerTaskResponse extends Proto.Message {

    uuid?: string;
    entityType?: Proto.EntityType;
    version?: Long;
    transactionUuid?: string;
    serverTaskCreated?: Proto.ServerTask[];
    resultLink?: string;
    createdAdminUserGroupUuid?: string[];
    createdEndUserGroupUuid?: string[];
    createdLicenseUuid?: string[];
    
}

}


namespace Proto {

  export interface ServerTaskResponses extends Proto.Message {

    serverTaskResponse?: Proto.ServerTaskResponse[];
    
}

}


namespace Proto {
	export const enum PublishAction {
		PA_PUBLISH = 1,
		PA_UNPUBLISH = 2,
		
}
}


namespace Proto {
	export  enum EntityType {
		BRAND = 0,
		FOLDER = 1,
		ASSET = 2,
		TRASH = 3,
		JOBS = 4,
		JOB = 5,
		PARTICIPATIONS = 6,
		PARTICIPATION = 7,
		PROJECTS = 8,
		PROJECT = 9,
		
}
}


namespace Proto {
	export const enum AssetType {
		AT_FILE = 1,
		AT_RICHTEXT = 2,
		
}
}


namespace Proto {
	export const enum BrandLandLayout {
		BLL_STANDARD = 0,
		
}
}


namespace Proto {
	export const enum FolderListViewLayout {
		FLVL_STANDARD = 0,
		
}
}


namespace Proto {
	export const enum RichtextListViewLayout {
		RLVL_SPLITVIEW = 0,
		RLVL_IMAGE = 1,
		
}
}


namespace Proto {
	export const enum FolderInnerLayout {
		FIL_STANDARD = 0,
		
}
}


namespace Proto {
	export const enum AssetInnerLayout {
		AIL_STANDARD = 0,
		
}
}


namespace Proto {
	export const enum LayoutModel {
		INHERIT_LAYOUT_FROM_PARENT = 0,
		OVERRIDE_LAYOUT = 2,
		
}
}


namespace Proto {
	export const enum PublishConditionState {
		PCS_NOT_YET_PUBLISHED = 1,
		PCS_ACTIVE = 2,
		PCS_NO_LONGER_PUBLISHED = 3,
		
}
}


namespace Proto {
	export const enum PublishConditionModel {
		INHERIT_PUBLISH_CONDITION_FROM_PARENT = 0,
		OVERRIDE_PUBLISH_CONTIDION = 2,
		
}
}


namespace Proto {
	export const enum LicensingModel {
		INHERIT_LICENSING_FROM_PARENT = 0,
		OVERRIDE_LICENSING = 2,
		
}
}


namespace Proto {
	export const enum LicenseType {
		PRIVATE_USE = 1,
		EDITORIAL_USE = 2,
		COMMERCIAL_USE = 3,
		CUSTOM = 4,
		EXTERNAL = 5,
		
}
}


namespace Proto {
	export const enum LicenseExclusivityType {
		SHARED_NON_EXCLUSIVE = 1,
		SHARED_NON_EXCLUSIVE_EXCLUSIVE_POSSIBLE = 2,
		EXCLUSIVE_ONLY = 3,
		
}
}


namespace Proto {
	export const enum LicenseTypeOfUse {
		ONLINE_ELECTRONIC = 1,
		PRINT = 2,
		
}
}


namespace Proto {
	export const enum AutocompletedEntityType {
		AET_END_USER_GROUP = 1,
		AET_END_USER = 2,
		AET_ADMIN_USER_GROUP = 3,
		AET_LICENSE = 4,
		AET_BRAND = 5,
		AET_TAG = 6,
		
}
}


namespace Proto {
	export const enum PreviewSize {
		NORMAL = 1000,
		
}
}


namespace Proto {
	export  enum BinaryPurpose {
		BRAND_LOGO = 100,
		BRAND_ASSET = 150,
		BRAND_BACKGROUND = 200,
		BRAND_BACKGROUND_TALL = 250,
		BRAND_WATERMARK = 300,
		FOLDER_ASSET = 1000,
		FOLDER_BACKGROUND = 1100,
		FOLDER_BACKGROUND_TALL = 1150,
		FOLDER_LIST_PREVIEW = 1200,
		JOBS_ASSET = 1500,
		JOBS_BACKGROUND = 1600,
		JOBS_BACKGROUND_TALL = 1650,
		JOBS_LIST_PREVIEW = 1700,
		JOB_ASSET = 2000,
		JOB_BACKGROUND = 2100,
		JOB_BACKGROUND_TALL = 2150,
		JOB_LIST_PREVIEW = 2200,
		PROJECT_ASSET = 3000,
		PROJECT_BACKGROUND = 3100,
		PROJECT_BACKGROUND_TALL = 3150,
		PROJECT_LIST_PREVIEW = 3200,
		ASSET_ASSET = 10000,
		ASSET_BASE = 10001,
		ASSET_LIST_PREVIEW = 19000,
		ASSET_PREVIEW = 19001,
		ASSET_ADVANCED_LIST_PREVIEW_IMAGE = 19002,
		ASSET_ADVANCED_LIST_PREVIEW = 19003,
		ASSET_ADVANCED_PREVIEW_IMAGE = 19004,
		ASSET_ADVANCED_PREVIEW = 19005,
		ASSET_COVER = 19006,
		ASSET_BACKGROUND_ASSET = 19007,
		ASSET_BACKGROUND = 19008,
		ASSET_BACKGROUND_TALL = 19009,
		ASSET_HEADER = 19010,
		ASSET_SPLITVIEW_LIST_PREVIEW = 19011,
		
}
}


namespace Proto {
	export  enum BinaryType {
		IMAGE = 1,
		AUDIO = 2,
		VIDEO = 3,
		DOCUMENT = 4,
		
}
}


namespace Proto {
	export const enum BrandType {
		BRAND_TYPE_SYSTEM = 1,
		BRAND_TYPE_USER = 2,
		BRAND_TYPE_CUSTOM = 3,
		BRAND_TYPE_CP_CORPORATE = 4,
		BRAND_TYPE_CP_BLOGGER = 5,
		BRAND_TYPE_CP_PHOTOGRAPHER = 6,
		BRAND_TYPE_CP_WRITER = 7,
		BRAND_TYPE_CP_VIDEOGRAPHER = 8,
		BRAND_TYPE_CP_STOCK = 9,
		BRAND_TYPE_CP_OTHER = 40,
		BRAND_TYPE_PROCUREMENT = 50,
		
}
}


namespace Proto {
	export  enum ContentCategory {
		CC_MARKETING_CONTENT = 1,
		CC_PRESS_CONTENT = 2,
		CC_PRODUCT_INFORMATION = 3,
		CC_PROFESSIONAL_CREATIVE_CONTENT = 4,
		CC_BRAND_CREATIVE_CONTENT = 5,
		CC_STOCK_CONTENT = 6,
		
}
}


namespace Proto {
	export const enum AssetReviewState {
		ARS_NO_RELEASE_NECESSARY = 1,
		ARS_MAYBE_RELEASE_NECESSARY = 2,
		ARS_RELEASE_NECESSARY = 3,
		
}
}


namespace Proto {
	export const enum JobState {
		CREATED = 1,
		CLOSED_DEAL = 2,
		CLOSED_NO_DEAL = 3,
		
}
}


namespace Proto {
	export const enum JobPricingType {
		JOB_ISSUER_DEFINES_REWARD = 1,
		PARTICIPANT_SUGGESTS_PRICE = 2,
		
}
}


namespace Proto {
	export const enum JobParticipationType {
		JOB_IS_OPEN = 1,
		JOB_NEEDS_CONFIRMATION = 2,
		
}
}


namespace Proto {
	export const enum JobType {
		PHOTOGRAPHY = 1,
		TRANSLATION = 2,
		
}
}


namespace Proto {
	export const enum ParticipationState {
		CONFIRMATION_PENDING = 1,
		CONFIRMATION_REJECTED = 2,
		PARTICIPATING_EDITING = 3,
		HANDIN_HANDED_IN = 4,
		HANDIN_REJECTED = 5,
		HANDIN_FINAL_REJECTED = 6,
		HANDIN_ACQUIRED = 7,
		
}
}


namespace Proto {
	export const enum ProjectState {
		OPEN = 1,
		CLOSED = 2,
		
}
}


namespace Proto {
	export const enum ShoppingCartState {
		SC_OPEN = 1,
		SC_SUBMITTED_TO_BRAND = 2,
		SC_REJECTED = 3,
		SC_ACQUIRED = 4,
		SC_FULFILLED = 5,
		
}
}


namespace Proto {
	export const enum CreditTransactionCurrency {
		CTC_EUR = 1,
		CTC_USD = 2,
		
}
}


namespace Proto {
	export const enum CreditTransactionPaymentMethod {
		CTPM_MANUAL = 1,
		
}
}


namespace Proto {
	export const enum CreditTransactionPeriod {
		CTP_MONTH = 1,
		
}
}


namespace Proto {
	export  enum CreditTransactionType {
		CTT_UNKNOWN = 0,
		CTT_PREPAID_CHARGE = 1,
		CTT_INSTANT_CHARGE = 2,
		CTT_SPEND = 3,
		CTT_PAYOUT = 4,
		CTT_LOCK = 5,
		CTT_UNLOCK = 6,
		CTT_FEE = 7,
		CTT_ASSET = 8,
		CTT_PARTICIPATION_ASSET = 9,
		
}
}


namespace Proto {
	export const enum CreditTransactionDownloadType {
		CTDT_INVOICE = 1,
		CTDT_VOUCHER = 2,
		CTDT_LICENSE = 3,
		CTDT_REPORT = 4,
		CTDT_ASSET = 5,
		
}
}


namespace Proto {
	export const enum UserPersona {
		UP_BRAND = 1,
		UP_JOURNALIST = 2,
		UP_PROFESSIONAL = 3,
		UP_ENTHUSIAST = 4,
		
}
}


namespace Proto {
	export const enum UserType {
		UT_BRAND_MEMBER = 1,
		UT_AGENCY_MEMBER = 2,
		UT_INFLUENCER = 3,
		UT_JOURNALIST = 4,
		UT_CONTENT_PROFESSIONAL = 5,
		
}
}


namespace Proto {
	export const enum UserAction {
		UA_DISABLE = 1,
		UA_ENABLE = 2,
		
}
}


namespace Proto {
	export const enum EmailNotificationInterval {
		NEVER = 1,
		HOURLY = 2,
		IMMEDIATELY = 3,
		
}
}


namespace Proto {
	export const enum ReadAccessModel {
		INHERIT_MODEL_FROM_PARENT = 0,
		PUBLIC = 1,
		ONLY_PERMITTED_GROUPS_OR_USERS = 2,
		
}
}


namespace Proto {
	export const enum PublicReadAccessPermission {
		PRE_LICENSED_INHERIT = 0,
		PREVIEW_INHERIT = 1,
		PREVIEW_NO_INHERIT = 2,
		ONLY_ALLOWS_REGISTRATION = 3,
		NO_ACCESS = 4,
		
}
}


namespace Proto {
	export const enum ReadAccessPermissionType {
		RPT_END_USER_GROUP = 1,
		RPT_USER = 3,
		RPT_BRAND = 4,
		
}
}


namespace Proto {
	export const enum WriteAccessModel {
		INHERIT_WRITE_FROM_PARENT = 0,
		AS_SPECIFIED = 1,
		
}
}


namespace Proto {
	export const enum AccessRequestState {
		ARS_REQUEST_INITIATED = 1,
		ARS_REQUEST_REJECTED = 2,
		ARS_REQUEST_FINAL_REJECTED = 3,
		ARS_REQUEST_ACCEPTED = 4,
		
}
}


namespace Proto {
	export const enum JoinRequestState {
		JRS_REQUEST_INITIATED = 1,
		JRS_REQUEST_REJECTED = 2,
		JRS_REQUEST_FINAL_REJECTED = 3,
		JRS_REQUEST_ACCEPTED = 4,
		
}
}


namespace Proto {
	export const enum LicenseRequestState {
		LRS_REQUEST_INITIATED = 1,
		LRS_REQUEST_REJECTED = 2,
		LRS_REQUEST_FINAL_REJECTED = 3,
		LRS_REQUEST_ACCEPTED = 4,
		
}
}


namespace Proto {
	export const enum PublishRequestState {
		PRS_REQUEST_INITIATED = 1,
		PRS_REQUEST_REJECTED = 2,
		PRS_REQUEST_ACCEPTED = 3,
		
}
}


namespace Proto {
	export const enum PurchaseCreditsRequestState {
		PCRS_REQUEST_INITIATED = 1,
		PCRS_REQUEST_REJECTED = 2,
		PCRS_REQUEST_ACCEPTED = 3,
		
}
}


namespace Proto {
	export const enum UpgradePlanRequestState {
		UPRS_REQUEST_INITIATED = 1,
		UPRS_REQUEST_REJECTED = 2,
		UPRS_REQUEST_ACCEPTED = 3,
		
}
}


namespace Proto {
	export const enum ApprovalRequestState {
		APRS_REQUEST_INITIATED = 1,
		APRS_REQUEST_REJECTED = 2,
		APRS_REQUEST_ACCEPTED = 3,
		
}
}


namespace Proto {
	export const enum HistoryRecordType {
		HRT_BRAND = 0,
		HRT_FOLDER = 1,
		HRT_ASSET = 2,
		HRT_TRASH = 3,
		HRT_JOBS = 4,
		HRT_JOB = 5,
		HRT_PARTICIPATIONS = 6,
		HRT_PARTICIPATION = 7,
		HRT_PROJECTS = 8,
		HRT_PROJECT = 9,
		HRT_TAG = 10,
		HRT_SHOPPING_CART = 11,
		HRT_COLLECTED_ENTITY = 12,
		HRT_ACCESS_REQUEST = 13,
		HRT_PUBLISH_REQUEST = 14,
		HRT_LICENSE_REQUEST = 15,
		HRT_PURCHASE_CREDITS_REQUEST = 16,
		HRT_UPGRADE_PLAN_REQUEST = 17,
		HRT_JOIN_REQUEST = 18,
		HRT_APPROVAL_REQUEST = 19,
		HRT_EXTERNAL_CONTENT_PROVIDER = 20,
		
}
}


namespace Proto {
	export const enum QueryOrderBy {
		NATURAL_ORDER = 1,
		MATCH_SCORE = 2,
		LOCAL_FEATURING = 3,
		GLOBAL_FEATURING = 4,
		CREATED_TIMESTAMP = 5,
		LAST_UPDATED_TIMESTAMP = 6,
		LAST_COMMITTED_TIMESTAMP = 7,
		
}
}


namespace Proto {
	export const enum QueryOrderDirection {
		ASC = 1,
		DESC = 2,
		
}
}


namespace Proto {
	export const enum QueryPublishingState {
		NO_UNPUBLISHED_CHANGED = 1,
		UNPUBLISHED_CHANGES = 2,
		
}
}


namespace Proto {
	export  enum QueryReviewState {
		QRS_NOT_REVIEWED = 1,
		QRS_REVIEWED_NO_RELEASE_NECESSARY = 2,
		QRS_REVIEWED_MAYBE_RELEASE_NECESSARY_RELEASE_NOT_PRESENT = 3,
		QRS_REVIEWED_MAYBE_RELEASE_NECESSARY_RELEASE_PRESENT = 4,
		QRS_REVIEWED_RELEASE_NECESSARY_RELEASE_NOT_PRESENT = 5,
		QRS_REVIEWED_RELEASE_NECESSARY_RELEASE_PRESENT = 6,
		
}
}


namespace Proto {
	export  enum Dimension {
		SMALL = 1,
		MEDIUM = 2,
		LARGE = 3,
		XLARGE = 4,
		XXLARGE = 5,
		
}
}


namespace Proto {
	export  enum Uploaded {
		ALL_TIME = 1,
		TODAY = 2,
		THIS_WEEK = 3,
		THIS_MONTH = 4,
		LAST_3_MONTHS = 5,
		LAST_6_MONTHS = 6,
		
}
}


namespace Proto {
	export  enum Orientation {
		PORTRAIT = 1,
		LANDSCAPE = 2,
		SQUARE = 3,
		
}
}


namespace Proto {
	export  enum Source {
		OTHER = 0,
		CONTIDIO = 1,
		GETTY = 2,
		SHUTTERSTOCK = 3,
		ISTOCK = 4,
		THINKSTOCK = 5,
		ADOBESTOCK = 6,
		SHUTTERSTOCK_CONTIDIO = 7,
		
}
}


namespace Proto {
	export  enum VideoFormat {
		HD = 1,
		FULL_HD = 2,
		FOUR_K = 3,
		EIGHT_K = 4,
		OTHER_FORMAT = 5,
		
}
}


namespace Proto {
	export  enum VideoAspectRatio {
		FOUR_TO_THREE = 1,
		SIXTEEN_TO_NINE = 2,
		OTHER_RATIO = 3,
		
}
}


namespace Proto {
	export  enum Duration {
		SHORT = 1,
		MEDIUM_LENGTH = 2,
		LONG = 3,
		
}
}


namespace Proto {
	export  enum PageCount {
		ZERO_OR_ONE_PAGE = 1,
		TWO_TO_FIVE_PAGES = 2,
		SIX_TO_TEN_PAGES = 3,
		ELEVEN_TO_FIFTY_PAGES = 4,
		ABOVE_FIFTY_PAGES = 5,
		
}
}


namespace Proto {
	export const enum NotificationState {
		NS_DECISION_REQUIRED = 1,
		NS_ACTION_REQUIRED = 2,
		NS_FEEDBACK = 3,
		NS_INFORMATIONAL = 4,
		NS_DISMISSED = 5,
		NS_WARNING = 6,
		
}
}


namespace Proto {
	export const enum NotificationType {
		ACCESS_REQUEST_INITIATED = 1,
		ACCESS_REQUEST_ACCEPTED = 2,
		ACCESS_REQUEST_REJECTED = 3,
		ACCESS_REQUEST_FINALLY_REJECTED = 4,
		SHOPPING_CART_SUBMITTED_TO_BRAND = 5,
		SHOPPING_CART_ACQUISITION_REJECTED = 6,
		SHOPPING_CART_ACQUISITION_FULFILLED = 7,
		CREDIT_BALANCE_PREPAID_CHARGE_STARTED = 8,
		CREDIT_BALANCE_PREPAID_CHARGE_PAID_AND_FULFILLED = 9,
		CREDIT_BALANCE_INSTANT_CHARGE_STARTED_AND_FULFILLED = 10,
		CREDIT_BALANCE_INSTANT_CHARGE_STARTED_PAID_AND_FULFILLED = 11,
		CREDIT_BALANCE_INSTANT_CHARGE_PAID = 12,
		CREDIT_BALANCE_PAID_OUT = 13,
		CREDIT_BALANCE_FEE_STARTED_AND_PAID = 14,
		PUBLISH_REQUEST_INITIATED = 15,
		PUBLISH_REQUEST_ACCEPTED = 16,
		PUBLISH_REQUEST_REJECTED = 17,
		LICENSE_REQUEST_INITIATED = 18,
		LICENSE_REQUEST_ACCEPTED = 19,
		LICENSE_REQUEST_REJECTED = 20,
		LICENSE_REQUEST_FINALLY_REJECTED = 21,
		PURCHASE_CREDITS_REQUEST_INITIATED = 22,
		PURCHASE_CREDITS_REQUEST_FULFILLED = 23,
		PURCHASE_CREDITS_REQUEST_REJECTED = 24,
		PURCHASE_CREDITS_REQUEST_ACCEPTED = 25,
		ENTITY_CREATED = 26,
		ENTITY_CHANGED = 27,
		ENTITY_READ_BRAND_ACCESS_GRANTED = 28,
		END_USER_GROUP_BRAND_ACCESS_GRANTED = 29,
		ENTITY_READ_INDIVIDUAL_ACCESS_GRANTED = 30,
		END_USER_GROUP_INDIVIDUAL_ACCESS_GRANTED = 31,
		ADMIN_USER_GROUP_INDIVIDUAL_ACCESS_GRANTED = 32,
		ENTITY_READ_INDIVIDUAL_ACCESS_INVITATION = 33,
		END_USER_GROUP_INDIVIDUAL_ACCESS_INVITATION = 34,
		ADMIN_USER_GROUP_INDIVIDUAL_ACCESS_INVITATION = 35,
		UPGRADE_PLAN_REQUEST_INITIATED = 36,
		UPGRADE_PLAN_REQUEST_ACCEPTED = 37,
		UPGRADE_PLAN_REQUEST_REJECTED = 38,
		JOIN_REQUEST_INITIATED = 39,
		JOIN_REQUEST_ACCEPTED = 40,
		JOIN_REQUEST_REJECTED = 41,
		JOIN_REQUEST_FINALLY_REJECTED = 42,
		CREDIT_BALANCE_FEE_STARTED = 43,
		CREDIT_BALANCE_FEE_PAID = 44,
		APPROVAL_REQUEST_INITIATED = 45,
		APPROVAL_REQUEST_ACCEPTED = 46,
		APPROVAL_REQUEST_REJECTED = 47,
		EXTERNAL_CONTENT_PROVIDER_PRODUCT_NO_MORE_WARNING = 48,
		EXTERNAL_CONTENT_PROVIDER_PRODUCT_NEW_WARNING = 49,
		
}
}


namespace Proto {
	export const enum BrandPlanBrandType {
		BPBT_CUSTOM = 1,
		BPBT_CONTENT_PUBLISHER = 2,
		BPBT_PROCUREMENT = 3,
		
}
}


namespace Proto {
	export const enum ExternalContentProvider {
		ECP_GETTY = 1,
		ECP_SHUTTERSTOCK = 2,
		ECP_ISTOCK = 3,
		ECP_THINKSTOCK = 4,
		ECP_ADOBESTOCK = 5,
		
}
}


namespace Proto {
	export const enum ExternalContentProviderState {
		ECPS_CREATED = 1,
		ECPS_SETUP = 2,
		ECPS_ACTIVE = 3,
		ECPS_EXPIRED = 4,
		ECPS_ERROR = 5,
		
}
}


namespace Proto {
	export const enum ExternalPricingModel {
		EPM_NO_PRICE = 1,
		EPM_EXTERNAL_CREDITS = 2,
		EPM_EUR = 3,
		EPM_USD = 4,
		
}
}


namespace Proto {
	export const enum BackendErrorCode {
		UNKNOWN = 0,
		INSUFFICIENT_PRIVILEGES = 1,
		INVALID_CREDENTIALS = 2,
		WOULD_CAUSE_SELF_LOCKOUT = 3,
		WOULD_CAUSE_CIRCULAR_DEPENDENCY = 4,
		SYSTEM_GENERATED_CHANGE_NOT_POSSIBLE = 5,
		DELETE_CONFIRMATION_MISSING = 6,
		TRASH_DELETE_RESTORE_ONLY_ON_TOP_LEVEL = 7,
		OPTIMISTIC_LOCKING_FAILED = 8,
		TEMPORARY_UNAVAILABLE = 9,
		WRONG_API = 10,
		UUID_INVALID = 11,
		SYSTEM_VALUE_USE_NOT_POSSIBLE = 12,
		BRAND_UUID_MISSING = 13,
		BRAND_UUID_NOT_ALLOWED = 14,
		ACCOUNT_IS_NOT_APPROVED = 15,
		RECAPTCHA_INVALID = 16,
		RECAPTCHA_VALIDATION_ISSUE = 17,
		BRAND_UUID_INVALID = 18,
		ENTITY_EXTERNALLY_MANAGED = 19,
		ENTITY_TYPE_INVALID = 1000,
		ENTITY_NOT_PUBLISHED = 1001,
		ENTITY_TRASHED = 1002,
		ENTITY_STILL_IN_USE = 1003,
		ENTITY_NOT_FOUND = 1004,
		ENTITY_ALREADY_EXISTS = 1005,
		ENTITY_ALREADY_DELETED = 1006,
		ASSET_TYPE_INVALID = 1100,
		ANONYMOUS_DOWNLOAD_NOT_POSSIBLE = 1150,
		ANONYMOUS_DOWNLOAD_LICENSE_MISSING = 1151,
		ANONYMOUS_DOWNLOAD_LICENSE_NOT_AVAILABLE = 1152,
		ANONYMOUS_DOWNLOAD_LICENSE_INVALID = 1153,
		TAG_ALREADY_EXISTS = 2000,
		TAG_NOT_CONFIRMED = 2001,
		TAG_NOT_FOUND = 2002,
		USER_ALREADY_EXISTS = 2500,
		USER_NOT_FOUND = 2501,
		USER_ALREADY_DISABLED = 2502,
		USER_ALREADY_ENABLED = 2503,
		ACCESS_REQUEST_NOT_FOUND = 2600,
		ACCESS_REQUEST_ALREADY_EXISTS = 2601,
		ACCESS_REQUEST_PREREQUISITE_NOT_SATISFIED = 2602,
		ACCESS_REQUEST_ALREADY_ACCEPTED = 2603,
		ACCESS_REQUEST_ALREADY_REJECTED = 2604,
		ACCESS_REQUEST_ENTITY_REFERENCE_MISSING = 2605,
		ACCESS_REQUEST_READ_PERMISSION_ALREADY_PRESENT = 2606,
		ACCESS_REQUEST_ALREADY_MEMBER_OF_GROUP = 2607,
		ACCESS_REQUEST_WILL_NOT_GIVE_ADDITIONAL_PERMISSIONS = 2608,
		ACCESS_REQUEST_APPLICATION_MESSAGE_MISSING = 2609,
		NOTIFICATION_NOT_FOUND = 2700,
		NOTIFICATION_ALREADY_EXISTS = 2701,
		COLLECTED_ENTITY_NOT_FOUND = 2800,
		COLLECTED_ENTITY_ALREADY_EXISTS = 2801,
		COLLECTED_ENTITY_IS_OWN_ENTITY = 2802,
		COLLECTED_ENTITY_ONLY_JOB_OR_ASSET_ALLOWED = 2803,
		COLLECTED_ENTITY_ASSET_TYPE_INVALID = 2804,
		COLLECTED_ENTITY_LICENSE_NOT_AVAILABLE = 2805,
		COLLECTED_ENTITY_LICENSE_NOT_ALLOWED = 2806,
		COLLECTED_ENTITY_TARGET_BRAND_INVALID = 2807,
		COLLECTED_ENTITY_ONLY_PARTICIPATION_OR_ASSET_ALLOWED = 2808,
		COLLECTED_ENTITY_LICENSE_MISSING = 2809,
		COLLECTED_ENTITY_NO_LICENSE_FOR_PARTICIPATIONS_ALLOWED = 2810,
		COLLECTED_ENTITY_PARTICIPATION_IS_NO_JOB_ISSUER_COPY = 2811,
		COLLECTED_ENTITY_PARTICIPATION_STATE_INVALID = 2812,
		COLLECTED_ENTITY_NO_LICENSE_FOR_JOBS_ALLOWED = 2813,
		COLLECTED_ENTITY_JOB_ALREADY_CLOSED = 2814,
		COLLECTED_ENTITY_WAS_ACQUIRED_IN_THE_MEANWHILE = 2815,
		COLLECTED_ENTITY_PREVIEW_BINARIES_NOT_READY = 2816,
		COLLECTED_ENTITY_LICENSE_NOT_RELEASED = 2817,
		SHOPPING_CART_NOT_FOUND = 2900,
		SHOPPING_CART_ALREADY_EXISTS = 2901,
		SHOPPING_CART_NOT_OPEN = 2902,
		SHOPPING_CART_NOT_SUBMITTED = 2903,
		SHOPPING_CART_NOT_READY_FOR_SUBMIT = 2904,
		SHOPPING_CART_IS_EMPTY = 2905,
		CREDIT_BALANCE_NOT_FOUND = 3000,
		CREDIT_BALANCE_ALREADY_EXISTS = 3001,
		CREDIT_BALANCE_CHANGE_AMOUNT_INVALID = 3002,
		CREDIT_BALANCE_CHANGE_TRANSACTION_TYPE_NOT_POSSIBLE = 3003,
		CREDIT_BALANCE_NOT_ENOUGH_CREDITS = 3004,
		CREDIT_BALANCE_MONETARY_CURRENCY_MISSING = 3005,
		CREDIT_BALANCE_MONETARY_PAYMENT_METHOD_MISSING = 3006,
		CREDIT_BALANCE_MONETARY_PAYMENT_METHOD_NOT_ALLOWED = 3007,
		CREDIT_BALANCE_MONETARY_TRANSFER_UUID_MISSING = 3008,
		CREDIT_BALANCE_MONETARY_TRANSFER_UUID_NOT_ALLOWED = 3009,
		CREDIT_BALANCE_MONETARY_TRANSFER_UUID_INVALID = 3010,
		CREDIT_BALANCE_ADDITIONAL_MONETARY_TRANSFER_UUID_NOT_ALLOWED = 3011,
		CREDIT_BALANCE_BRAND_NOT_TRUSTED = 3012,
		CREDIT_BALANCE_POSITIVE_LIMIT_EXCEEDED = 3013,
		CREDIT_BALANCE_TRANSACTION_LIMIT_EXCEEDED = 3014,
		CREDIT_BALANCE_INSTANT_CHARGE_TRUSTED_LIMIT_EXCEEDED = 3015,
		CREDIT_TRANSACTION_NOT_FOUND = 3100,
		CREDIT_TRANSACTION_ALREADY_EXISTS = 3101,
		CREDIT_TRANSACTION_TYPE_INVALID = 3102,
		CREDIT_TRANSACTION_IS_ALREADY_PAID = 3103,
		USER_FOLLOW_SETTING_NOT_FOUND = 3200,
		USER_FOLLOW_SETTING_ALREADY_EXISTS = 3201,
		PUBLISH_REQUEST_NOT_FOUND = 3300,
		PUBLISH_REQUEST_ALREADY_EXISTS = 3301,
		PUBLISH_REQUEST_PREREQUISITE_NOT_SATISFIED = 3302,
		PUBLISH_REQUEST_ALREADY_ACCEPTED = 3303,
		PUBLISH_REQUEST_ALREADY_REJECTED = 3304,
		PUBLISH_REQUEST_ENTITY_REFERENCE_MISSING = 3305,
		PUBLISH_REQUEST_NO_CHANGES_TO_PUBLISH = 3306,
		PUBLISH_REQUEST_SELF_PUBLISH_POSSIBLE = 3307,
		LICENSE_REQUEST_NOT_FOUND = 3400,
		LICENSE_REQUEST_ALREADY_EXISTS = 3401,
		LICENSE_REQUEST_CANNOT_BE_LICENSED = 3402,
		LICENSE_REQUEST_ALREADY_ACCEPTED = 3403,
		LICENSE_REQUEST_ALREADY_REJECTED = 3404,
		LICENSE_REQUEST_ENTITY_REFERENCE_MISSING = 3405,
		LICENSE_REQUEST_LICENSE_ALREADY_PRESENT = 3406,
		LICENSE_REQUEST_APPLICATION_MESSAGE_INVALID = 3407,
		PARENT_REQUIRED = 3500,
		CROSS_BRAND_RELATION_NOT_POSSIBLE = 3501,
		TOO_MANY_PARENTS = 3502,
		NO_PARENTS_POSSIBLE = 3503,
		CANNOT_REMOVE_PARENTS_WHILE_CREATING = 3504,
		PARENT_CHILD_RELATION_INVALID = 3505,
		PARENT_CHILD_RELATION_ALREADY_EXISTS = 3506,
		PARENT_CHILD_RELATION_NOT_FOUND = 3507,
		TOO_MANY_CHILDS = 3508,
		PURCHASE_CREDITS_REQUEST_NOT_FOUND = 3600,
		PURCHASE_CREDITS_REQUEST_ALREADY_ACCEPTED = 3601,
		PURCHASE_CREDITS_REQUEST_ALREADY_REJECTED = 3602,
		PURCHASE_CREDITS_REQUEST_SELF_PURCHASE_POSSIBLE = 3603,
		PURCHASE_CREDITS_REQUEST_ALREADY_EXISTS = 3604,
		PURCHASE_CREDITS_REQUEST_REQUIRED_AMOUNT_INVALID = 3605,
		PURCHASE_CREDITS_REQUEST_AMOUNT_ALREADY_AVAILABLE = 3606,
		PURCHASE_CREDITS_REQUEST_TRANSACTION_LIMIT_EXCEEDED = 3607,
		PURCHASE_CREDITS_REQUEST_NOT_FULFILLED = 3608,
		PLAN_NOT_FOUND = 3700,
		BRAND_PLAN_NOT_FOUND = 3800,
		BRAND_PLAN_ALREADY_EXISTS = 3801,
		BRAND_PLAN_INCLUDED_BRANDS_EXCEEDED = 3802,
		BRAND_PLAN_INCLUDED_LISTED_ASSETS_EXCEEDED = 3803,
		BRAND_PLAN_CONNECT_EXTERNAL_CONTENT_PROVIDERS_NOT_ALLOWED = 3804,
		BRAND_PLAN_JOB_SERVICES_NOT_ALLOWED = 3805,
		BRAND_PLAN_CUSTOM_SUBDOMAIN_NOT_ALLOWED = 3806,
		BRAND_TRANSACTIONS_LOCKED = 3900,
		BRAND_UPLOAD_LOCKED = 3901,
		BRAND_CONNECT_EXTERNAL_CONTENT_PROVIDERS_LOCKED = 3902,
		BRAND_JOB_SERVICES_LOCKED = 3903,
		BRAND_LISTED_ASSET_QUOTA_EXCEEDED = 3904,
		BRAND_JOB_SERVICES_NOT_IN_PLAN = 3905,
		BRAND_CONNECT_EXTERNAL_CONTENT_PROVIDERS_NOT_IN_PLAN = 3906,
		BRAND_CUSTOM_WATERMARK_NOT_IN_PLAN = 3907,
		BRAND_CUSTOM_SUBDOMAIN_LOCKED = 3908,
		BRAND_CUSTOM_SUBDOMAIN_NOT_IN_PLAN = 3909,
		BRAND_CHECK_OUT_CONTENT_LOCKED = 3910,
		BRAND_CHECK_OUT_CONTENT_NOT_IN_PLAN = 3911,
		BRAND_REPORTING_LOCKED = 3912,
		BRAND_REPORTING_NOT_IN_PLAN = 3913,
		BRAND_PUBLISH_CONTENT_LOCKED = 3914,
		BRAND_PUBLISH_CONTENT_NOT_IN_PLAN = 3915,
		BRAND_VERSIONING_LOCKED = 3916,
		BRAND_VERSIONING_NOT_IN_PLAN = 3917,
		BRAND_MULTI_LEVEL_ADMIN_MANAGEMENT_LOCKED = 3918,
		BRAND_MULTI_LEVEL_ADMIN_MANAGEMENT_NOT_IN_PLAN = 3919,
		BRAND_EXTERNAL_USER_MANAGEMENT_LOCKED = 3920,
		BRAND_EXTERNAL_USER_MANAGEMENT_NOT_IN_PLAN = 3921,
		BRAND_MULTI_LEVEL_EXTERNAL_USER_MANAGEMENT_LOCKED = 3922,
		BRAND_MULTI_LEVEL_EXTERNAL_USER_MANAGEMENT_NOT_IN_PLAN = 3923,
		RESTORE_ENTITY_NOT_FOUND = 4000,
		RESTORE_PARENTS_NOT_FOUND = 4001,
		UPGRADE_PLAN_REQUEST_NOT_FOUND = 4100,
		UPGRADE_PLAN_REQUEST_ALREADY_EXISTS = 4101,
		UPGRADE_PLAN_REQUEST_ALREADY_ACCEPTED = 4102,
		UPGRADE_PLAN_REQUEST_ALREADY_REJECTED = 4103,
		UPGRADE_PLAN_REQUEST_PLAN_INVALID = 4104,
		UPGRADE_PLAN_REQUEST_ALREADY_ON_SAME_OR_BETTER_PLAN = 4105,
		UPGRADE_PLAN_REQUEST_PROMO_CODE_INVALID = 4106,
		JOIN_REQUEST_NOT_FOUND = 4200,
		JOIN_REQUEST_ALREADY_EXISTS = 4201,
		JOIN_REQUEST_PREREQUISITE_NOT_SATISFIED = 4202,
		JOIN_REQUEST_ALREADY_ACCEPTED = 4203,
		JOIN_REQUEST_ALREADY_REJECTED = 4204,
		JOIN_REQUEST_ALREADY_MEMBER_OF_BRAND = 4205,
		JOIN_REQUEST_ALREADY_MEMBER_OF_GROUP = 4206,
		JOIN_REQUEST_USER_GROUP_IS_NO_ADMIN_USER_GROUP = 4207,
		APPROVAL_REQUEST_NOT_FOUND = 4300,
		APPROVAL_REQUEST_ALREADY_EXISTS = 4301,
		APPROVAL_REQUEST_ALREADY_ACCEPTED = 4302,
		APPROVAL_REQUEST_ALREADY_REJECTED = 4303,
		APPROVAL_REQUEST_ALREADY_APPROVED = 4304,
		FOLDER_LAYOUT_MODEL_MISSING = 4400,
		ASSET_LAYOUT_MODEL_MISSING = 4500,
		ASSET_CANONICAL_URL_INVALID = 4501,
		PUBLISH_CONDITION_MODEL_MISSING = 4600,
		PUBLISH_CONDITION_FROM_TIMESTAMP_MUST_BE_BEFORE_TO_TIMESTAMP = 4601,
		PUBLISH_CONDITION_TO_TIMESTAMP_MUST_BE_AFTER_FROM_TIMESTAMP = 4602,
		PUBLISH_CONDITION_NOT_POSSIBLE_ON_BRAND_LEVEL = 4603,
		BRAND_NOT_FOUND = 5000,
		FOLDER_NOT_FOUND = 5001,
		ASSET_NOT_FOUND = 5002,
		TRASH_NOT_FOUND = 5003,
		JOBS_NOT_FOUND = 5004,
		JOB_NOT_FOUND = 5005,
		PARTICIPATIONS_NOT_FOUND = 5006,
		PARTICIPATION_NOT_FOUND = 5007,
		PROJECTS_NOT_FOUND = 5008,
		PROJECT_NOT_FOUND = 5009,
		USER_GROUP_CANNOT_DELETE_LAST_USER = 6000,
		USER_GROUP_UUID_INVALID = 6001,
		USER_GROUP_LOCALE_MISSING = 6002,
		USER_GROUP_UUID_IN_USE = 6003,
		USER_GROUP_USER_ALREADY_EXISTS = 6004,
		USER_GROUP_USER_NOT_FOUND = 6005,
		USER_GROUP_NAME_INVALID = 6006,
		USER_GROUP_NOT_FOUND = 6007,
		USER_GROUP_ALREADY_EXISTS = 6008,
		USER_GROUP_STILL_IN_USE_BY_USERS = 6009,
		USER_GROUP_STILL_IN_USE_BY_ENTITIES = 6011,
		USER_GROUP_STILL_IN_USE_BY_USER_GROUPS = 6012,
		USER_GROUP_DOES_NOT_SUPPORT_DEPENDENCIES = 6013,
		USER_GROUP_ALREADY_DELETED = 6014,
		USER_GROUP_NAME_TOO_LONG = 6015,
		USER_GROUP_DOES_NOT_SUPPORT_REQUIRES_MANUAL_COMMIT = 6016,
		USER_GROUP_DOES_NOT_SUPPORT_REQUIRES_APPLICATION_MESSAGE = 6017,
		USER_GROUP_APPLICATION_MESSAGES_ONLY_POSSIBLE_FOR_MANUAL_COMMITS = 6018,
		USER_GROUP_DOES_NOT_SUPPORT_COST_CENTER = 6019,
		USER_GROUP_COST_CENTER_ID_TOO_LONG = 6020,
		USER_UUID_INVALID = 6500,
		USER_EMAIL_MISSING = 6501,
		USER_EMAIL_INVALID = 6502,
		TARGET_UUID_INVALID = 6600,
		CONTACT_FORM_EMAIL_MISSING = 6700,
		CONTACT_FORM_EMAIL_INVALID = 6701,
		CONTACT_FORM_EMAIL_NOT_NECESSARY = 6702,
		CONTACT_FORM_SUBJECT_TOO_SHORT = 6703,
		CONTACT_FORM_SUBJECT_TOO_LONG = 6704,
		CONTACT_FORM_SUBJECT_INVALID = 6705,
		CONTACT_FORM_MESSAGE_TOO_SHORT = 6706,
		CONTACT_FORM_MESSAGE_TOO_LONG = 6707,
		CONTACT_FORM_MESSAGE_INVALID = 6708,
		CONTACT_FORM_NO_RECIPIENT_AVAILABLE = 6709,
		ADMIN_USER_GROUP_ACCESS_FLAGS_INVALID = 7000,
		BINARY_CONTAINER_NAME_INVALID = 9000,
		BINARY_FILE_NAME_INVALID = 9001,
		BINARY_FILE_EXTENSION_INVALID = 9002,
		COMPANY_INFO_MISSING = 10000,
		COMPANY_INFO_COMPANY_NAME_MISSING = 10001,
		COMPANY_INFO_CONTACT_PERSON_GIVEN_NAME_MISSING = 10002,
		COMPANY_INFO_CONTACT_PERSON_FAMILY_NAME_MISSING = 10003,
		COMPANY_INFO_CONTACT_PERSON_JOB_TITLE_MISSING = 10004,
		COMPANY_INFO_STREET_MISSING = 10005,
		COMPANY_INFO_POSTAL_CODE_MISSING = 10006,
		COMPANY_INFO_CITY_MISSING = 10007,
		COMPANY_INFO_COUNTRY_CODE_MISSING = 10008,
		COMPANY_INFO_COUNTRY_CODE_INVALID = 10009,
		COMPANY_INFO_EMAIL_MISSING = 10010,
		COMPANY_INFO_EMAIL_INVALID = 10011,
		COMPANY_INFO_WEBSITE_INVALID = 10012,
		COMPANY_INFO_PUBLICATION_NAME_MISSING = 10013,
		BILLING_INFO_MISSING = 10250,
		BILLING_INFO_COMPANY_NAME_MISSING = 10251,
		BILLING_INFO_CONTACT_PERSON_GIVEN_NAME_MISSING = 10252,
		BILLING_INFO_CONTACT_PERSON_FAMILY_NAME_MISSING = 10253,
		BILLING_INFO_CONTACT_PERSON_JOB_TITLE_MISSING = 10254,
		BILLING_INFO_STREET_MISSING = 10255,
		BILLING_INFO_POSTAL_CODE_MISSING = 10256,
		BILLING_INFO_CITY_MISSING = 10257,
		BILLING_INFO_COUNTRY_CODE_MISSING = 10258,
		BILLING_INFO_COUNTRY_CODE_INVALID = 10259,
		BILLING_INFO_EMAIL_MISSING = 10260,
		BILLING_INFO_EMAIL_INVALID = 10261,
		BILLING_INFO_WEBSITE_INVALID = 10262,
		USER_TYPE_MISSING = 10500,
		COUNTRY_NOT_FOUND = 11000,
		TRANSLATION_TEXT_INVALID = 12000,
		WORKING_SET_LOCALE_MISSING = 13000,
		WORKING_SET_NAME_MISSING = 13001,
		WORKING_SET_DESCRIPTION_MISSING = 13002,
		WORKING_SET_BINARY_MISSING = 13003,
		WORKING_SET_MISSING = 13004,
		WORKING_SET_ENTITY_LOCALE_MISSING = 13005,
		WORKING_SET_CONTACT_INFO_NAME_MISSING = 13006,
		WORKING_SET_CONTACT_INFO_STREET_MISSING = 13007,
		WORKING_SET_CONTACT_INFO_POSTAL_CODE_MISSING = 13008,
		WORKING_SET_CONTACT_INFO_CITY_MISSING = 13009,
		WORKING_SET_CONTACT_INFO_COUNTRY_CODE_MISSING = 13010,
		WORKING_SET_CONTACT_INFO_COUNTRY_CODE_INVALID = 13011,
		WORKING_SET_CONTACT_INFO_EMAIL_MISSING = 13012,
		WORKING_SET_CONTACT_INFO_EMAIL_INVALID = 13013,
		WORKING_SET_CONTACT_INFO_WEBSITE_INVALID = 13014,
		WORKING_SET_NAME_TOO_LONG = 13015,
		WORKING_SET_DESCRIPTION_TOO_LONG = 13016,
		WORKING_SET_CONTEXT_TEXT_1_TOO_LONG = 13017,
		WORKING_SET_BINARY_SET_NAME_TOO_LONG = 13018,
		WORKING_SET_BINARY_SET_MISSING = 13019,
		WORKING_SET_ASSET_BINARY_MISSING = 13020,
		WORKING_SET_LOGO_MISSING = 13021,
		WORKING_SET_BRAND_BACKGROUND_MISSING = 13022,
		WORKING_SET_BRAND_BACKGROUND_TALL_MISSING = 13023,
		WORKING_SET_FOLDER_BACKGROUND_MISSING = 13024,
		WORKING_SET_FOLDER_BACKGROUND_TALL_MISSING = 13025,
		WORKING_SET_FOLDER_LIST_PREVIEW_MISSING = 13026,
		FEATURE_PRIORITY_INVALID = 14000,
		BRAND_TYPE_INVALID = 15000,
		BRAND_CUSTOM_SUBDOMAIN_INVALID = 15250,
		BRAND_CUSTOM_SUBDOMAIN_ALREADY_IN_USE = 15251,
		CONTENT_CATEGORY_INVALID = 15500,
		ORDER_INVALID = 16000,
		COLOR_INVALID = 16001,
		BRAND_LINK_NAME_INVALID = 16500,
		BRAND_LINK_LINK_INVALID = 16501,
		BRAND_LINK_NAME_TOO_LONG = 16502,
		READ_ACCESS_MODEL_CHANGE_NOT_POSSIBLE = 17000,
		READ_ACCESS_MODEL_NOT_POSSIBLE = 17001,
		READ_ACCESS_MODEL_MISSING = 17002,
		WRITE_ACCESS_MODEL_CHANGE_NOT_POSSIBLE = 18000,
		WRITE_ACCESS_MODEL_MISSING = 18001,
		PUBLISH_FLAG_CHANGE_NOT_POSSIBLE = 19000,
		LOCALE_NOT_SUPPORTED = 20000,
		BRAND_SET_MISSING = 21000,
		JOB_SET_MISSING = 21001,
		PROJECT_SET_MISSING = 21002,
		DELETE_SET_INVALID = 22000,
		RESTORE_SET_INVALID = 22001,
		CHANGE_SET_INVALID = 22002,
		PARTICIPATION_SET_INVALID = 22003,
		CLOSE_SET_INVALID = 22004,
		SUBMIT_SET_INVALID = 22005,
		REJECT_SET_INVALID = 22006,
		ACCEPT_SET_INVALID = 22007,
		HISTORY_ENTRY_GROUP_INVALID = 22008,
		APPLICATION_SET_INVALID = 22009,
		CREATE_SET_INVALID = 22010,
		COPY_SET_INVALID = 22011,
		MOVE_SET_INVALID = 22012,
		ACQUIRE_SET_INVALID = 22013,
		SELECT_SET_INVALID = 22014,
		PAID_SET_INVALID = 22015,
		COMPLETED_SET_INVALID = 22016,
		PROGRESS_SET_INVALID = 22017,
		SEND_SET_INVALID = 22018,
		MERGE_SET_INVALID = 22019,
		SETUP_SET_INVALID = 22020,
		CONFIGURE_SET_INVALID = 22021,
		REFRESH_SET_INVALID = 22022,
		IMPORT_SET_INVALID = 22023,
		BINARY_MIME_TYPE_INVALID = 23000,
		BINARY_TYPE_INVALID = 23001,
		BINARY_METATAGS_MISSING = 23002,
		BINARY_FILE_MISSING = 23003,
		BINARY_TOO_MANY_BINARY_FILES = 23004,
		BINARY_RESOLUTION_TOO_LOW = 23005,
		BINARY_LENGTH_TOO_LOW = 23006,
		BINARY_INVALID_PRESET_CROP_INVALID = 23007,
		BINARY_INVALID_PRESET_THUMBNAIL_PERCENTAGE_INVALID = 23008,
		BINARY_INVALID_PRESET_THUMBNAIL_NOT_POSSIBLE = 23009,
		BINARY_INVALID_PRESET_PREVIEW_PAGE = 23010,
		BINARY_PURPOSE_INVALID = 23011,
		BINARY_CANNOT_REMOVE_WHILE_CREATING = 23012,
		BINARY_ANALYZATION_ISSUE = 23013,
		BINARY_NAME_INVALID = 23014,
		BINARY_EMPTY = 23015,
		BINARY_METADATA_TO_FILES_COUNT_DOES_NOT_MATCH = 23016,
		BINARY_UPDATE_BINARY_NOT_FOUND = 23017,
		BINARY_WIDTH_NOT_EVEN = 23018,
		BINARY_HEIGHT_NOT_EVEN = 23019,
		BINARY_INVALID_PRESET_LIMIT_PREVIEW_NOT_POSSIBLE = 23020,
		BINARY_TOO_MANY_PAGES = 23021,
		BINARY_IMAGE_FILE_SIZE_EXCEEDED = 23022,
		BINARY_VIDEO_FILE_SIZE_EXCEEDED = 23023,
		BINARY_AUDIO_FILE_SIZE_EXCEEDED = 23024,
		BINARY_DOCUMENT_FILE_SIZE_EXCEEDED = 23025,
		BINARY_INVALID_PRESET_NUMBER_OF_PREVIEW_PARAGRAPHS_NOT_POSSIBLE = 23026,
		BINARY_INVALID_NUMBER_OF_PREVIEW_PARAGRAPHS = 23027,
		JOB_HAS_PARTICIPATIONS = 24000,
		JOB_ALREADY_ENDED = 24001,
		JOB_ALREADY_CLOSED = 24002,
		JOB_RUNNING = 24003,
		JOB_TYPE_INVALID = 24004,
		JOB_LICENSE_INVALID = 24005,
		JOB_END_TIMESTAMP_INVALID = 24006,
		JOB_REWARD_MISSING = 24007,
		JOB_REWARD_NOT_ALLOWED = 24008,
		JOB_REWARD_INVALID = 24009,
		JOB_PRICE_INVALID = 24010,
		JOB_PRICING_TYPE_INVALID = 24011,
		JOB_PARTICIPATION_TYPE_INVALID = 24012,
		JOB_CLOSE_REASON_INVALID = 24013,
		JOB_REJECTION_REASON_INVALID = 24014,
		JOB_NO_HANDIN_ASSETS = 24015,
		JOB_PARENT_CHANGE_NOT_POSSIBLE = 24016,
		JOB_CANNOT_BE_CLOSED = 24017,
		JOB_CANNOT_BE_PUBLISHED_BECAUSE_JOB_ASSET_IS_NOT_COMMITTED = 24018,
		JOBS_CHANGE_NOT_POSSIBLE = 26000,
		PARTICIPATIONS_CHANGE_NOT_POSSIBLE = 27000,
		PARTICIPATION_READ_ONLY = 28000,
		PARTICIPATION_NOT_ACQUIRED = 28001,
		PARTICIPATION_STATE_INVALID = 28002,
		PARTICIPATION_PRICE_DEFINED_BY_JOB_ISSUER = 28003,
		PARTICIPATION_PRICE_ALREADY_AGREED = 28004,
		PARTICIPATION_PRICE_INVALID = 28005,
		PARTICIPATION_NOT_POSSIBLE = 28006,
		PARTICIPATION_NOT_CONFIRMED = 28007,
		PARTICIPATION_PREVIEW_BINARIES_NOT_READY = 28008,
		APPLICATION_STATE_INVALID = 28500,
		APPLICATION_PRICE_INVALID = 28501,
		APPLICATION_NOT_POSSIBLE = 28502,
		TAG_TEXT_AMBIGUOUS = 29000,
		TAG_TRANSLATION_MISSING = 29001,
		ACQUISITION_NOT_ENOUGH_CREDITS = 31000,
		PROJECTS_CHANGE_NOT_POSSIBLE = 32000,
		PROJECT_CANNOT_BE_DELETED = 33000,
		PROJECT_NOT_OPEN = 33001,
		PROJECT_NAME_MISSING = 33002,
		PROJECT_CANNOT_BE_COMMITTED = 33003,
		LICENSING_MODEL_CHANGE_NOT_POSSIBLE = 34000,
		LICENSING_MODEL_MISSING = 34001,
		LICENSE_UUID_INVALID = 35000,
		LICENSE_LOCALE_MISSING = 35001,
		LICENSE_UUID_IN_USE = 35002,
		LICENSE_NAME_INVALID = 35003,
		LICENSE_TYPE_MISSING = 35004,
		LICENSE_TYPE_OF_USE_MISSING = 35005,
		LICENSE_NOT_ALLOWED = 35006,
		LICENSE_TERMS_OF_USE_INVALID = 35007,
		LICENSE_RESTRICTED_PUBLISHING_TOPICS_INVALID = 35008,
		LICENSE_RESTRICTED_INDUSTRIES_INVALID = 35009,
		LICENSE_RESTRICTED_GEO_USE_INVALID = 35010,
		LICENSE_NOT_FOUND = 35011,
		LICENSE_ALREADY_EXISTS = 35012,
		LICENSE_IMAGE_PRICE_INVALID = 35013,
		LICENSE_VIDEO_PRICE_INVALID = 35014,
		LICENSE_AUDIO_PRICE_INVALID = 35015,
		LICENSE_DOCUMENT_PRICE_INVALID = 35016,
		LICENSE_IMAGE_TRANSACTION_FEE_INVALID = 35017,
		LICENSE_VIDEO_TRANSACTION_FEE_INVALID = 35018,
		LICENSE_AUDIO_TRANSACTION_FEE_INVALID = 35019,
		LICENSE_DOCUMENT_TRANSACTION_FEE_INVALID = 35020,
		LICENSE_STILL_IN_USE_BY_ENTITIES = 35021,
		LICENSE_ALREADY_DELETED = 35022,
		LICENSE_EXCLUSIVITY_TYPE_NOT_ALLOWED = 35023,
		LICENSE_NAME_TOO_LONG = 35024,
		LICENSE_SUMMARY_TOO_LONG = 35025,
		ECP_ALREADY_SETUP = 36000,
		ECP_ACCESS_TOKEN_MISSING = 36001,
		ECP_ACCESS_TOKEN_INVALID = 36002,
		ECP_REFRESH_TOKEN_MISSING = 36003,
		ECP_REFRESH_TOKEN_INVALID = 36004,
		ECP_STATE_INVALID = 36005,
		ECP_ACCESS_TOKEN_EXPIRED = 36006,
		ECP_REFRESH_TOKEN_EXPIRED = 36007,
		ECP_NOT_FOUND = 36008,
		ECP_ALREADY_EXISTS = 36009,
		ECP_USER_NAME_MISSING = 36010,
		ECP_USER_NAME_INVALID = 36011,
		ECP_PASSWORD_MISSING = 36012,
		ECP_PASSWORD_INVALID = 36013,
		ECP_CREDENTIALS_INVALID = 36014,
		ECP_VALIDATION_ISSUE = 36015,
		ECP_CODE_MISSING = 36016,
		ECP_CODE_INVALID = 36017,
		ECP_AUTHORIZATION_DENIED = 36018,
		ECP_ACCOUNT_NOT_ELIGIBLE = 36019,
		ECP_NOT_CONFIGURED = 36020,
		ECP_NOT_CORRECTLY_CONFIGURED = 36021,
		ECP_REFRESH_ISSUE = 36022,
		ECP_SEARCH_ISSUE = 36023,
		ECP_GET_ISSUE = 36024,
		ECP_PROVIDER_INVALID = 36025,
		ECP_PRODUCT_NOT_FOUND = 36026,
		ECP_PRODUCT_WARNING_VALUE_DOWNLOADS_INVALID = 36027,
		ECP_PRODUCT_IMAGE_EXTERNAL_CREDIT_PRICE_FULL_INVALID = 36028,
		ECP_PRODUCT_VIDEO_EXTERNAL_CREDIT_PRICE_4K_INVALID = 36031,
		ECP_PRODUCT_IMAGE_MONETARY_PRICE_FULL_INVALID = 36029,
		ECP_PRODUCT_VIDEO_MONETARY_PRICE_4K_INVALID = 36032,
		ECP_PRODUCT_AUDIO_EXTERNAL_CREDIT_PRICE_INVALID = 36034,
		ECP_PRODUCT_AUDIO_MONETARY_PRICE_INVALID = 36035,
		ECP_PRODUCT_DOCUMENT_EXTERNAL_CREDIT_PRICE_INVALID = 36037,
		ECP_PRODUCT_DOCUMENT_MONETARY_PRICE_INVALID = 36038,
		ECP_PRODUCT_ALREADY_EXISTS = 36040,
		ECP_PRODUCT_INVALID = 36041,
		ECP_ID_INVALID = 36042,
		ECP_GET_PRODUCT_ISSUE = 36043,
		ECP_NO_PRODUCTS_AVAILABLE = 36044,
		ECP_PRODUCT_FORMAT_NOT_FOUND = 36045,
		ECP_PRODUCT_FORMAT_ALREADY_EXISTS = 36046,
		ECP_GET_USER_ISSUE = 36047,
		ECP_LICENSE_NOT_AVAILABLE_ANYMORE = 36048,
		ECP_FULFILLMENT_DOWNLOAD_ISSUE = 36049,
		ECP_FULFILLMENT_DOWNLOAD_QUOTA_EXCEEDED = 36050,
		ECP_FULFILLMENT_AUTHORIZATION_ISSUE = 36051,
		ECP_FULFILLMENT_GENERIC_ISSUE = 36052,
		ECP_ACQUISITION_DOWNLOAD_QUOTA_EXCEEDED = 36053,
		ECP_ACQUISITION_CREDIT_BALANCE_TOO_LOW = 36054,
		ECP_FULFILLMENT_CREDIT_BALANCE_TOO_LOW = 36055,
		ECP_PRODUCT_VIDEO_EXTERNAL_CREDIT_PRICE_HD_INVALID = 36056,
		ECP_PRODUCT_VIDEO_EXTERNAL_CREDIT_PRICE_SD_INVALID = 36057,
		ECP_PRODUCT_VIDEO_EXTERNAL_CREDIT_PRICE_LR_INVALID = 36058,
		ECP_PRODUCT_VIDEO_MONETARY_PRICE_HD_INVALID = 36059,
		ECP_PRODUCT_VIDEO_MONETARY_PRICE_SD_INVALID = 36060,
		ECP_PRODUCT_VIDEO_MONETARY_PRICE_LR_INVALID = 36061,
		ECP_PRODUCT_IMAGE_EXTERNAL_CREDIT_PRICE_MEDIUM_INVALID = 36062,
		ECP_PRODUCT_IMAGE_EXTERNAL_CREDIT_PRICE_SMALL_INVALID = 36063,
		ECP_PRODUCT_IMAGE_MONETARY_PRICE_MEDIUM_INVALID = 36064,
		ECP_PRODUCT_IMAGE_MONETARY_PRICE_SMALL_INVALID = 36065,
		ECP_ACQUISITION_NO_PURCHASE_POSSIBLE_THROUGH_CONTIDIO = 36066,
		ECP_PRODUCT_WARNING_VALUE_CREDITS_INVALID = 36067,
		ECP_IMPORT_ISSUE = 36068,
		ECP_GET_DOWNLOADS_ISSUE = 36069,
		ECP_COMPANY_DOWNLOADS_NOT_POSSIBLE = 36070,
		ECP_IMPORT_START_TIMESTAMP_INVALID = 36071,
		ECP_IMPORT_END_TIMESTAMP_INVALID = 36072,
		ECP_IMPORT_START_TIMESTAMP_MUST_BE_BEFORE_END_TIMESTAMP = 36073,
		ECP_IMPORT_IMPORT_ID_INVALID = 36074,
		ECP_FULFILLMENT_REDOWNLOAD_ISSUE = 36075,
		FULFILLMENT_NOTHING_TO_FULFILL = 37000,
		TASK_INVALID = 50000,
		TASK_NOT_SUPPORTED = 50001,
		POSTPONE_EXECUTION = 50002,
		STOP_EXECUTION = 50003,
		QUERY_START_INDEX_INVALID = 60000,
		QUERY_COUNT_INVALID = 60001,
		QUERY_ORDER_BY_INVALID = 60002,
		QUERY_ORDER_DIRECTION_INVALID = 60003,
		QUERY_TYPE_INVALID = 60004,
		QUERY_LOCALE_INVALID = 60005,
		QUERY_DIMENSION_INVALID = 60006,
		QUERY_BINARY_TYPE_INVALID = 60007,
		QUERY_UPLOADED_INVALID = 60008,
		QUERY_ORIENTATION_INVALID = 60009,
		QUERY_VIDEO_FORMAT_INVALID = 60010,
		QUERY_VIDEO_ASPECT_RATIO_INVALID = 60011,
		QUERY_DURATION_INVALID = 60012,
		QUERY_PAGE_COUNT_INVALID = 60013,
		QUERY_SOURCE_INVALID = 60014,
		QUERY_LICENSE_ID_INVALID = 60015,
		QUERY_MULTI_PARENT_ID_INVALID = 60016,
		QUERY_TERMS_INVALID = 60017,
		QUERY_PROJECT_STATE_INVALID = 60018,
		QUERY_CREDIT_TRANSACTION_TYPE_INVALID = 60019,
		QUERY_FROM_CREATED_TIMESTAMP_INVALID = 60020,
		QUERY_TO_CREATED_TIMESTAMP_INVALID = 60021,
		QUERY_FROM_LAST_UPDATED_TIMESTAMP_INVALID = 60022,
		QUERY_TO_LAST_UPDATED_TIMESTAMP_INVALID = 60023,
		QUERY_CREATED_TIMESTAMPS_INVALID = 60024,
		QUERY_LAST_UPDATED_TIMESTAMPS_INVALID = 60025,
		QUERY_CANNOT_FILTER_BY_DIFFERENT_TIMESTAMP_CRITERIA = 60026,
		QUERY_AUTOCOMPLETED_ENTITY_TYPES_INVALID = 60027,
		QUERY_JOB_TYPE_INVALID = 60028,
		QUERY_JOB_STATE_INVALID = 60029,
		QUERY_PARTICIPATION_STATE_INVALID = 60030,
		QUERY_NOTIFICATION_TYPE_INVALID = 60031,
		QUERY_NOTIFICATION_STATE_INVALID = 60032,
		QUERY_FROM_LAST_COMMITTED_TIMESTAMP_INVALID = 60033,
		QUERY_TO_LAST_COMMITTED_TIMESTAMP_INVALID = 60034,
		QUERY_LAST_COMMITTED_TIMESTAMPS_INVALID = 60035,
		QUERY_CONTENT_CATEGORY_INVALID = 60036,
		QUERY_PUBLISHING_STATE_INVALID = 60037,
		QUERY_ASSET_TYPE_INVALID = 60038,
		QUERY_BRAND_TYPE_INVALID = 60039,
		QUERY_REVIEW_STATE_INVALID = 60040,
		QUERY_INVALID = 60999,
		DOWNLOAD_NOT_AVAILABLE = 61000,
		SDK_IDENTIFIER_MISSING = 65534,
		NOT_SUPPORTED = 65535,
		GENERIC_ERROR = 65536,
		
}
}


namespace Proto {
	export  enum ServerTaskType {
		STT_UNKNOWN = 0,
		STT_ENTITY_CHANGE = 1,
		STT_ENTITY_CHANGE_AFFECTS_SUBTREE = 2,
		STT_BINARY_CHANGE = 3,
		STT_TAG_CHANGE = 4,
		STT_TAG_CHANGE_AFFECTS_SUBTREE = 5,
		STT_USER_CHANGE = 6,
		STT_FULFILL_ACQUISITION = 7,
		STT_PREPARE_DOWNLOAD = 8,
		
}
}


export default Proto;

