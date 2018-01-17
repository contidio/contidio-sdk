/// <reference types="core-js" />
/// <reference types="long" />
/// <reference types="bytebuffer" />

import Long = require('long');
import ByteBuffer = require('bytebuffer');
import {BaseError} from 'make-error';

declare namespace Proto {
	export interface Message {
	}
}


declare namespace Proto {

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


declare namespace Proto {

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


declare namespace Proto {

  export interface EntityReference extends Proto.Message {

    type?: Proto.EntityType;
    uuid?: string;
    order?: string;
    
}

}


declare namespace Proto {

  export interface EntityActions extends Proto.Message {

    publishAction?: Proto.PublishAction;
    extractKeywords?: boolean;
    extractDescription?: boolean;
    
}

}


declare namespace Proto {

  export interface EntityDeleteSet extends Proto.Message {

    uuid?: string;
    allowFinalDelete?: boolean;
    version?: Long;
    
}

}


declare namespace Proto {

  export interface EntityRestoreSet extends Proto.Message {

    uuid?: string;
    restoreEntityUuid?: string;
    version?: Long;
    
}

}


declare namespace Proto {

  export interface Entities extends Proto.Message {

    entity?: Proto.Entity[];
    summary?: Proto.QuerySummary;
    
}

}


declare namespace Proto {

  export interface EntityChangeSets extends Proto.Message {

    entityChangeSet?: Proto.EntityChangeSet[];
    
}

}


declare namespace Proto {

  export interface EntityRestoreSets extends Proto.Message {

    entityRestoreSet?: Proto.EntityRestoreSet[];
    
}

}


declare namespace Proto {

  export interface EntityDeleteSets extends Proto.Message {

    entityDeleteSet?: Proto.EntityDeleteSet[];
    
}

}


declare namespace Proto {

  export interface FolderLayout extends Proto.Message {

    layoutModel?: Proto.LayoutModel;
    listViewLayout?: Proto.FolderListViewLayout;
    innerLayout?: Proto.FolderInnerLayout;
    
}

}


declare namespace Proto {

  export interface FolderLayoutChangeSet extends Proto.Message {

    layoutModel?: Proto.LayoutModel;
    listViewLayout?: Proto.FolderListViewLayout;
    innerLayout?: Proto.FolderInnerLayout;
    
}

}


declare namespace Proto {

  export interface AssetLayout extends Proto.Message {

    layoutModel?: Proto.LayoutModel;
    richtextListViewLayout?: Proto.RichtextListViewLayout;
    innerLayout?: Proto.AssetInnerLayout;
    
}

}


declare namespace Proto {

  export interface AssetLayoutChangeSet extends Proto.Message {

    layoutModel?: Proto.LayoutModel;
    richtextListViewLayout?: Proto.RichtextListViewLayout;
    innerLayout?: Proto.AssetInnerLayout;
    
}

}


declare namespace Proto {

  export interface PublishCondition extends Proto.Message {

    publishConditionModel?: Proto.PublishConditionModel;
    publishFromTimestamp?: Long;
    publishToTimestamp?: Long;
    
}

}


declare namespace Proto {

  export interface PublishConditionChangeSet extends Proto.Message {

    publishConditionModel?: Proto.PublishConditionModel;
    publishFromTimestamp?: Long;
    removePublishFromTimestamp?: boolean;
    publishToTimestamp?: Long;
    removePublishToTimestamp?: boolean;
    
}

}


declare namespace Proto {

  export interface WorkingSet extends Proto.Message {

    version?: Long;
    locale?: Proto.EntityLocale[];
    workingSetBinaryType?: Proto.BinaryType;
    minBinarySetUuid?: number;
    
}

}


declare namespace Proto {

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


declare namespace Proto {

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


declare namespace Proto {

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


declare namespace Proto {

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


declare namespace Proto {

  export interface BrandLink extends Proto.Message {

    uuid?: number;
    name?: string;
    link?: string;
    
}

}


declare namespace Proto {

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


declare namespace Proto {

  export interface BinarySetChangeSet extends Proto.Message {

    uuid?: number;
    name?: string;
    putUploadedBinary?: Proto.Binary[];
    removeUploadedBinary?: Proto.Binary[];
    author?: string;
    
}

}


declare namespace Proto {

  export interface Users extends Proto.Message {

    user?: Proto.User[];
    summary?: Proto.QuerySummary;
    
}

}


declare namespace Proto {

  export interface Licensing extends Proto.Message {

    licensingModel?: Proto.LicensingModel;
    availableLicenseInfo?: Proto.LicenseInfo[];
    allowAnonymousDownload?: boolean;
    
}

}


declare namespace Proto {

  export interface LicenseInfo extends Proto.Message {

    licenseUuid?: string;
    licenseType?: Proto.LicenseType;
    userPersonaValid?: boolean;
    released?: boolean;
    downloadSpec?: Proto.DownloadSpec;
    
}

}


declare namespace Proto {

  export interface LicensingChangeSet extends Proto.Message {

    licensingModel?: Proto.LicensingModel;
    addAvailableLicenseId?: string[];
    removeAvailableLicenseId?: string[];
    allowAnonymousDownload?: boolean;
    
}

}


declare namespace Proto {

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


declare namespace Proto {

  export interface Licenses extends Proto.Message {

    license?: Proto.License[];
    summary?: Proto.QuerySummary;
    
}

}


declare namespace Proto {

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


declare namespace Proto {

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


declare namespace Proto {

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


declare namespace Proto {

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


declare namespace Proto {

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


declare namespace Proto {

  export interface LicensedAsset extends Proto.Message {

    entity?: Proto.Entity;
    participationUuid?: string;
    
}

}


declare namespace Proto {

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


declare namespace Proto {

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


declare namespace Proto {

  export interface AutocompletedEntities extends Proto.Message {

    endUserGroup?: Proto.UserGroup[];
    endUser?: Proto.User[];
    adminUserGroup?: Proto.UserGroup[];
    license?: Proto.License[];
    entity?: Proto.Entity[];
    tag?: Proto.Tag[];
    
}

}


declare namespace Proto {

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


declare namespace Proto {

  export interface BinaryMetatags extends Proto.Message {

    metatag?: Proto.BinaryMetatag[];
    
}

}


declare namespace Proto {

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


declare namespace Proto {

  export interface ImagePresets extends Proto.Message {

    transformationInfo?: Proto.ImageTransformationInfo;
    
}

}


declare namespace Proto {

  export interface ImageTransformationInfo extends Proto.Message {

    crop?: Proto.Crop;
    foregroundColor?: number;
    backgroundColor?: number;
    
}

}


declare namespace Proto {

  export interface Crop extends Proto.Message {

    x?: number;
    y?: number;
    width?: number;
    height?: number;
    
}

}


declare namespace Proto {

  export interface VideoPresets extends Proto.Message {

    thumbnailGenerationInfo?: Proto.VideoThumbnailGenerationInfo;
    
}

}


declare namespace Proto {

  export interface VideoThumbnailGenerationInfo extends Proto.Message {

    thumbnailPercentage?: number;
    
}

}


declare namespace Proto {

  export interface AudioPresets extends Proto.Message {

    
}

}


declare namespace Proto {

  export interface DocumentPresets extends Proto.Message {

    previewPage?: number;
    limitPreviewToOnePager?: boolean;
    numberOfPreviewParagraphs?: number;
    
}

}


declare namespace Proto {

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


declare namespace Proto {

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


declare namespace Proto {

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


declare namespace Proto {

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


declare namespace Proto {

  export interface CustomDesign extends Proto.Message {

    color1?: number;
    color2?: number;
    
}

}


declare namespace Proto {

  export interface CustomDesignChangeSet extends Proto.Message {

    color1?: number;
    color2?: number;
    
}

}


declare namespace Proto {

  export interface CustomSubdomain extends Proto.Message {

    subdomain?: string;
    
}

}


declare namespace Proto {

  export interface CustomSubdomainChangeSet extends Proto.Message {

    subdomain?: string;
    
}

}


declare namespace Proto {

  export interface Folder extends Proto.Message {

    contentCategory?: Proto.ContentCategory;
    defaultLocale?: string;
    overrideDefaultLocaleForChilds?: string;
    
}

}


declare namespace Proto {

  export interface FolderChangeSet extends Proto.Message {

    contentCategory?: Proto.ContentCategory;
    removeContentCategory?: boolean;
    defaultLocale?: string;
    overrideDefaultLocaleForChilds?: string;
    
}

}


declare namespace Proto {

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


declare namespace Proto {

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


declare namespace Proto {

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


declare namespace Proto {

  export interface JobAsset extends Proto.Message {

    state?: Proto.JobState;
    
}

}


declare namespace Proto {

  export interface AcquiredAsset extends Proto.Message {

    creditTransactionUuid?: string;
    fulfilledTimestamp?: Long;
    licensedLicense?: Proto.LicensedLicense;
    fulfillmentError?: Proto.BackendErrorCode;
    
}

}


declare namespace Proto {

  export interface Trash extends Proto.Message {

    
}

}


declare namespace Proto {

  export interface TrashChangeSet extends Proto.Message {

    
}

}


declare namespace Proto {

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


declare namespace Proto {

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


declare namespace Proto {

  export interface JobActions extends Proto.Message {

    
}

}


declare namespace Proto {

  export interface JobApplicationSet extends Proto.Message {

    applicationMessage?: string;
    price?: number;
    version?: Long;
    
}

}


declare namespace Proto {

  export interface JobParticipationSet extends Proto.Message {

    participationMessage?: string;
    version?: Long;
    
}

}


declare namespace Proto {

  export interface JobApplicationAcceptSet extends Proto.Message {

    acceptMessage?: string;
    version?: Long;
    
}

}


declare namespace Proto {

  export interface JobParticipationSubmitSet extends Proto.Message {

    submitMessage?: string;
    version?: Long;
    
}

}


declare namespace Proto {

  export interface JobParticipationRejectSet extends Proto.Message {

    rejectionReason?: string;
    version?: Long;
    
}

}


declare namespace Proto {

  export interface JobCloseSet extends Proto.Message {

    closeReason?: string;
    version?: Long;
    
}

}


declare namespace Proto {

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


declare namespace Proto {

  export interface ParticipationChangeSet extends Proto.Message {

    price?: number;
    
}

}


declare namespace Proto {

  export interface Project extends Proto.Message {

    state?: Proto.ProjectState;
    isDefaultProject?: boolean;
    
}

}


declare namespace Proto {

  export interface ProjectChangeSet extends Proto.Message {

    state?: Proto.ProjectState;
    
}

}


declare namespace Proto {

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


declare namespace Proto {

  export interface ShoppingCarts extends Proto.Message {

    shoppingCart?: Proto.ShoppingCart[];
    summary?: Proto.QuerySummary;
    
}

}


declare namespace Proto {

  export interface ShoppingCartSubmitToBrandSet extends Proto.Message {

    submitMessage?: string;
    version?: Long;
    
}

}


declare namespace Proto {

  export interface ShoppingCartRejectAcquisitionSet extends Proto.Message {

    rejectionReason?: string;
    version?: Long;
    
}

}


declare namespace Proto {

  export interface ShoppingCartAcquireSet extends Proto.Message {

    autoFollow?: boolean;
    version?: Long;
    
}

}


declare namespace Proto {

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


declare namespace Proto {

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


declare namespace Proto {

  export interface CreditTransactions extends Proto.Message {

    creditTransaction?: Proto.CreditTransaction[];
    summary?: Proto.QuerySummary;
    
}

}


declare namespace Proto {

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


declare namespace Proto {

  export interface CreditTransactionCreateDownloadTaskSet extends Proto.Message {

    downloadType?: Proto.CreditTransactionDownloadType;
    downloadOriginalEntityVersion?: boolean;
    
}

}


declare namespace Proto {

  export interface AssetCreateDownloadTaskSet extends Proto.Message {

    licenseUuid?: string;
    autoFollow?: boolean;
    
}

}


declare namespace Proto {

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


declare namespace Proto {

  export interface UserReserveSet extends Proto.Message {

    email?: string;
    
}

}


declare namespace Proto {

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


declare namespace Proto {

  export interface BrandUser extends Proto.Message {

    brandUuid?: string;
    brandEndUserGroupUuid?: string[];
    brandAdminUserGroupUuid?: string[];
    brandDirectEndUserGroupUuid?: string[];
    
}

}


declare namespace Proto {

  export interface UserSetting extends Proto.Message {

    userUuid?: string;
    interval?: Proto.EmailNotificationInterval;
    defaultLocale?: string;
    createdTimestamp?: Long;
    lastUpdatedTimestamp?: Long;
    version?: Long;
    
}

}


declare namespace Proto {

  export interface UserSettingChangeSet extends Proto.Message {

    interval?: Proto.EmailNotificationInterval;
    defaultLocale?: string;
    version?: Long;
    
}

}


declare namespace Proto {

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


declare namespace Proto {

  export interface UserFollowSettings extends Proto.Message {

    userFollowSetting?: Proto.UserFollowSetting[];
    summary?: Proto.QuerySummary;
    
}

}


declare namespace Proto {

  export interface UserFollowSettingCreateSet extends Proto.Message {

    entity?: Proto.EntityReference;
    
}

}


declare namespace Proto {

  export interface UserReserveSets extends Proto.Message {

    userReserveSet?: Proto.UserReserveSet[];
    
}

}


declare namespace Proto {

  export interface UserChangeSets extends Proto.Message {

    userChangeSet?: Proto.UserChangeSet[];
    
}

}


declare namespace Proto {

  export interface Tag extends Proto.Message {

    uuid?: string;
    text?: string;
    score?: number;
    version?: Long;
    translations?: Proto.Translations;
    
}

}


declare namespace Proto {

  export interface NewTag extends Proto.Message {

    locale?: string;
    text?: string;
    
}

}


declare namespace Proto {

  export interface Tags extends Proto.Message {

    tag?: Proto.Tag[];
    summary?: Proto.QuerySummary;
    
}

}


declare namespace Proto {

  export interface ReadAccess extends Proto.Message {

    readAccessModel?: Proto.ReadAccessModel;
    readAccessDefinedOnParent?: Proto.EntityReference;
    readAccessPermission?: Proto.ReadAccessPermission[];
    publicReadAccessPermission?: Proto.PublicReadAccessPermission;
    
}

}


declare namespace Proto {

  export interface ReadAccessChangeSet extends Proto.Message {

    readAccessModel?: Proto.ReadAccessModel;
    putReadAccessPermission?: Proto.ReadAccessPermissionChangeSet[];
    removeReadAccessPermission?: Proto.ReadAccessPermissionChangeSet[];
    publicReadAccessPermission?: Proto.PublicReadAccessPermission;
    
}

}


declare namespace Proto {

  export interface WriteAccess extends Proto.Message {

    writeAccessModel?: Proto.WriteAccessModel;
    writeAccessPermission?: Proto.WriteAccessPermission[];
    
}

}


declare namespace Proto {

  export interface WriteAccessChangeSet extends Proto.Message {

    writeAccessModel?: Proto.WriteAccessModel;
    putWriteAccessPermission?: Proto.WriteAccessPermissionChangeSet[];
    removeWriteAccessPermission?: Proto.WriteAccessPermissionChangeSet[];
    
}

}


declare namespace Proto {

  export interface ReadAccessPermission extends Proto.Message {

    targetUuid?: string;
    type?: Proto.ReadAccessPermissionType;
    
}

}


declare namespace Proto {

  export interface ReadAccessPermissionChangeSet extends Proto.Message {

    targetUuid?: string;
    type?: Proto.ReadAccessPermissionType;
    targetUuidIsEmailAddress?: boolean;
    
}

}


declare namespace Proto {

  export interface WriteAccessPermission extends Proto.Message {

    adminUserGroupUuid?: string;
    accessFlags?: Long;
    cannotBeDeleted?: boolean;
    cannotBeChanged?: boolean;
    
}

}


declare namespace Proto {

  export interface WriteAccessPermissionChangeSet extends Proto.Message {

    adminUserGroupUuid?: string;
    accessFlags?: Long;
    cannotBeDeleted?: boolean;
    cannotBeChanged?: boolean;
    adminUserGroupUuidIsEmailAddress?: boolean;
    
}

}


declare namespace Proto {

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


declare namespace Proto {

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


declare namespace Proto {

  export interface UserGroups extends Proto.Message {

    userGroup?: Proto.UserGroup[];
    summary?: Proto.QuerySummary;
    
}

}


declare namespace Proto {

  export interface UserGroupLocale extends Proto.Message {

    locale?: string;
    name?: string;
    description?: string;
    
}

}


declare namespace Proto {

  export interface UserGroupLocaleChangeSet extends Proto.Message {

    locale?: string;
    name?: string;
    description?: string;
    
}

}


declare namespace Proto {

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


declare namespace Proto {

  export interface AccessRequestInfo extends Proto.Message {

    accessRequestUuid?: string;
    acceptedTimestamp?: Long;
    rejectedTimestamp?: Long;
    state?: Proto.AccessRequestState;
    
}

}


declare namespace Proto {

  export interface AccessRequests extends Proto.Message {

    accessRequest?: Proto.AccessRequest[];
    summary?: Proto.QuerySummary;
    
}

}


declare namespace Proto {

  export interface AccessRequestCreateSet extends Proto.Message {

    applicationMessage?: string;
    targetEndUserGroupUuid?: string;
    targetEntity?: Proto.EntityReference;
    
}

}


declare namespace Proto {

  export interface AccessRequestRejectSet extends Proto.Message {

    rejectionReason?: string;
    isFinal?: boolean;
    version?: Long;
    
}

}


declare namespace Proto {

  export interface AccessRequestAcceptSet extends Proto.Message {

    version?: Long;
    
}

}


declare namespace Proto {

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


declare namespace Proto {

  export interface JoinRequestInfo extends Proto.Message {

    joinRequestUuid?: string;
    acceptedTimestamp?: Long;
    rejectedTimestamp?: Long;
    state?: Proto.JoinRequestState;
    
}

}


declare namespace Proto {

  export interface JoinRequests extends Proto.Message {

    joinRequest?: Proto.JoinRequest[];
    summary?: Proto.QuerySummary;
    
}

}


declare namespace Proto {

  export interface JoinRequestCreateSet extends Proto.Message {

    applicationMessage?: string;
    targetBrandUuid?: string;
    
}

}


declare namespace Proto {

  export interface JoinRequestRejectSet extends Proto.Message {

    rejectionReason?: string;
    isFinal?: boolean;
    version?: Long;
    
}

}


declare namespace Proto {

  export interface JoinRequestAcceptSet extends Proto.Message {

    version?: Long;
    adminUserGroupUuid?: string;
    
}

}


declare namespace Proto {

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


declare namespace Proto {

  export interface LicenseRequestInfo extends Proto.Message {

    licenseRequestUuid?: string;
    targetLicenseUuid?: string;
    acceptedTimestamp?: Long;
    rejectedTimestamp?: Long;
    state?: Proto.LicenseRequestState;
    
}

}


declare namespace Proto {

  export interface LicenseRequests extends Proto.Message {

    licenseRequest?: Proto.LicenseRequest[];
    summary?: Proto.QuerySummary;
    
}

}


declare namespace Proto {

  export interface LicenseRequestCreateSet extends Proto.Message {

    applicationMessage?: string;
    targetLicenseUuid?: string;
    targetEntity?: Proto.EntityReference;
    
}

}


declare namespace Proto {

  export interface LicenseRequestRejectSet extends Proto.Message {

    rejectionReason?: string;
    isFinal?: boolean;
    version?: Long;
    
}

}


declare namespace Proto {

  export interface LicenseRequestAcceptSet extends Proto.Message {

    version?: Long;
    
}

}


declare namespace Proto {

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


declare namespace Proto {

  export interface PublishRequestInfo extends Proto.Message {

    publishRequestUuid?: string;
    acceptedTimestamp?: Long;
    rejectedTimestamp?: Long;
    state?: Proto.PublishRequestState;
    
}

}


declare namespace Proto {

  export interface PublishRequests extends Proto.Message {

    publishRequest?: Proto.PublishRequest[];
    summary?: Proto.QuerySummary;
    
}

}


declare namespace Proto {

  export interface PublishRequestCreateSet extends Proto.Message {

    applicationMessage?: string;
    targetEntity?: Proto.EntityReference;
    
}

}


declare namespace Proto {

  export interface PublishRequestRejectSet extends Proto.Message {

    rejectionReason?: string;
    version?: Long;
    
}

}


declare namespace Proto {

  export interface PublishRequestAcceptSet extends Proto.Message {

    version?: Long;
    
}

}


declare namespace Proto {

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


declare namespace Proto {

  export interface PurchaseCreditsRequestInfo extends Proto.Message {

    purchaseCreditsRequestUuid?: string;
    acceptedTimestamp?: Long;
    rejectedTimestamp?: Long;
    state?: Proto.PurchaseCreditsRequestState;
    
}

}


declare namespace Proto {

  export interface PurchaseCreditsRequests extends Proto.Message {

    purchaseCreditsRequest?: Proto.PurchaseCreditsRequest[];
    summary?: Proto.QuerySummary;
    
}

}


declare namespace Proto {

  export interface PurchaseCreditsRequestCreateSet extends Proto.Message {

    applicationMessage?: string;
    requiredAmount?: number;
    
}

}


declare namespace Proto {

  export interface PurchaseCreditsRequestRejectSet extends Proto.Message {

    rejectionReason?: string;
    version?: Long;
    
}

}


declare namespace Proto {

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


declare namespace Proto {

  export interface UpgradePlanRequestInfo extends Proto.Message {

    upgradePlanRequestUuid?: string;
    acceptedTimestamp?: Long;
    rejectedTimestamp?: Long;
    state?: Proto.UpgradePlanRequestState;
    planId?: number;
    promoCode?: string;
    
}

}


declare namespace Proto {

  export interface UpgradePlanRequests extends Proto.Message {

    upgradePlanRequest?: Proto.UpgradePlanRequest[];
    summary?: Proto.QuerySummary;
    
}

}


declare namespace Proto {

  export interface UpgradePlanRequestCreateSet extends Proto.Message {

    message?: string;
    planId?: number;
    currency?: Proto.CreditTransactionCurrency;
    promoCode?: string;
    
}

}


declare namespace Proto {

  export interface UpgradePlanRequestRejectSet extends Proto.Message {

    rejectionReason?: string;
    version?: Long;
    
}

}


declare namespace Proto {

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


declare namespace Proto {

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


declare namespace Proto {

  export interface ApprovalRequestInfo extends Proto.Message {

    approvalRequestUuid?: string;
    acceptedTimestamp?: Long;
    rejectedTimestamp?: Long;
    state?: Proto.ApprovalRequestState;
    
}

}


declare namespace Proto {

  export interface ApprovalRequests extends Proto.Message {

    approvalRequest?: Proto.ApprovalRequest[];
    summary?: Proto.QuerySummary;
    
}

}


declare namespace Proto {

  export interface ApprovalRequestCreateSet extends Proto.Message {

    message?: string;
    
}

}


declare namespace Proto {

  export interface ApprovalRequestRejectSet extends Proto.Message {

    rejectionReason?: string;
    version?: Long;
    
}

}


declare namespace Proto {

  export interface ApprovalRequestAcceptSet extends Proto.Message {

    version?: Long;
    
}

}


declare namespace Proto {

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


declare namespace Proto {

  export interface CollectedEntityInfo extends Proto.Message {

    collectedEntityUuid?: string;
    projectUuid?: string;
    shoppingCartUuid?: string;
    licenseUuid?: string;
    
}

}


declare namespace Proto {

  export interface CollectedEntities extends Proto.Message {

    collectedEntity?: Proto.CollectedEntity[];
    summary?: Proto.QuerySummary;
    
}

}


declare namespace Proto {

  export interface CollectedEntityCreateSet extends Proto.Message {

    targetEntity?: Proto.EntityReference;
    licenseUuid?: string;
    adminUserGroupUuid?: string;
    
}

}


declare namespace Proto {

  export interface CollectedEntityCreateSets extends Proto.Message {

    collectedEntityCreateSet?: Proto.CollectedEntityCreateSet[];
    
}

}


declare namespace Proto {

  export interface CollectedEntityChangeSet extends Proto.Message {

    collectedEntityUuid?: string;
    licenseUuid?: string;
    version?: Long;
    adminUserGroupUuid?: string;
    removeAdminUserGroup?: boolean;
    
}

}


declare namespace Proto {

  export interface CollectedEntityChangeSets extends Proto.Message {

    collectedEntityChangeSet?: Proto.CollectedEntityChangeSet[];
    
}

}


declare namespace Proto {

  export interface CollectedEntityCopySet extends Proto.Message {

    collectedEntityUuid?: string;
    version?: Long;
    
}

}


declare namespace Proto {

  export interface CollectedEntityCopySets extends Proto.Message {

    collectedEntityCopySet?: Proto.CollectedEntityCopySet[];
    
}

}


declare namespace Proto {

  export interface CollectedEntityMoveSet extends Proto.Message {

    collectedEntityUuid?: string;
    version?: Long;
    
}

}


declare namespace Proto {

  export interface CollectedEntityMoveSets extends Proto.Message {

    collectedEntityMoveSet?: Proto.CollectedEntityMoveSet[];
    
}

}


declare namespace Proto {

  export interface CollectedEntityDeleteSet extends Proto.Message {

    collectedEntityUuid?: string;
    version?: Long;
    
}

}


declare namespace Proto {

  export interface CollectedEntityDeleteSets extends Proto.Message {

    collectedEntityDeleteSet?: Proto.CollectedEntityDeleteSet[];
    
}

}


declare namespace Proto {

  export interface ContactFormSendSet extends Proto.Message {

    email?: string;
    subject?: string;
    message?: string;
    recaptchaResponse?: string;
    
}

}


declare namespace Proto {

  export interface HistorySelectSet extends Proto.Message {

    recordType?: Proto.HistoryRecordType;
    recordUuid?: string;
    requestInteractive?: boolean;
    
}

}


declare namespace Proto {

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


declare namespace Proto {

  export interface HistoryEvents extends Proto.Message {

    event?: Proto.HistoryEvent[];
    summary?: Proto.QuerySummary;
    
}

}


declare namespace Proto {

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

declare namespace Proto.HistoryActivity {
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



declare namespace Proto {

  export interface HistoryBinarySetData extends Proto.Message {

    uuid?: number;
    name?: string;
    
}

}


declare namespace Proto {

  export interface HistoryBrandLinkData extends Proto.Message {

    uuid?: number;
    name?: string;
    
}

}


declare namespace Proto {

  export interface HistoryUserGroupData extends Proto.Message {

    userGroupUuid?: string;
    names?: Proto.Translations;
    
}

}


declare namespace Proto {

  export interface HistoryLicenseData extends Proto.Message {

    licenseUuid?: string;
    names?: Proto.Translations;
    
}

}


declare namespace Proto {

  export interface HistoryUserData extends Proto.Message {

    userUuid?: string;
    companyInfo?: Proto.CompanyInfo;
    
}

}


declare namespace Proto {

  export interface HistoryParticipationData extends Proto.Message {

    participationUuid?: string;
    brandUuid?: string;
    brandNames?: Proto.Translations;
    
}

}


declare namespace Proto {

  export interface HistoryEntityData extends Proto.Message {

    entityUuid?: string;
    entityType?: Proto.EntityType;
    names?: Proto.Translations;
    
}

}


declare namespace Proto {

  export interface HistoryTagData extends Proto.Message {

    tagUuid?: string;
    names?: Proto.Translations;
    
}

}


declare namespace Proto {

  export interface HistoryExternalContentProviderData extends Proto.Message {

    provider?: Proto.ExternalContentProvider;
    backendErrorCode?: Proto.BackendErrorCode;
    
}

}


declare namespace Proto {

  export interface HistoryValueChange extends Proto.Message {

    propertyName?: string;
    from?: Proto.HistoryValue;
    to?: Proto.HistoryValue;
    
}

}


declare namespace Proto {

  export interface HistoryValue extends Proto.Message {

    longValue?: Long;
    stringValue?: string;
    bytesValue?: string;
    boolValue?: boolean;
    floatValue?: number;
    doubleValue?: number;
    
}

}


declare namespace Proto {

  export interface Translation extends Proto.Message {

    locale?: string;
    synonymKey?: Proto.Translation.SynonymKey;
    text?: string;
    
}

}

declare namespace Proto.Translation {
	export const enum SynonymKey {
		DEFAULT = 1,
		SYNONYM_1 = 2,
		SYNONYM_2 = 3,
		SYNONYM_3 = 4,
		
}
}



declare namespace Proto {

  export interface Translations extends Proto.Message {

    translation?: Proto.Translation[];
    
}

}


declare namespace Proto {

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


declare namespace Proto {

  export interface QueryAggregation extends Proto.Message {

    key?: string;
    count?: Long;
    from?: string;
    to?: string;
    
}

}


declare namespace Proto {

  export interface QueryAggregations extends Proto.Message {

    key?: string;
    aggregation?: Proto.QueryAggregation[];
    
}

}


declare namespace Proto {

  export interface QuerySummary extends Proto.Message {

    totalCount?: Long;
    aggregation?: Proto.QueryAggregations[];
    queryData?: Proto.QueryData;
    
}

}


declare namespace Proto {

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


declare namespace Proto {

  export interface Notifications extends Proto.Message {

    notification?: Proto.Notification[];
    summary?: Proto.QuerySummary;
    
}

}


declare namespace Proto {

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


declare namespace Proto {

  export interface ExternalContentProviderSetupSet extends Proto.Message {

    version?: Long;
    
}

}


declare namespace Proto {

  export interface ExternalContentProviderSetup extends Proto.Message {

    redirectToUrl?: string;
    
}

}


declare namespace Proto {

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


declare namespace Proto {

  export interface ExternalContentProviderRefreshSet extends Proto.Message {

    alsoRefreshPricingInformation?: boolean;
    version?: Long;
    
}

}


declare namespace Proto {

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


declare namespace Proto {

  export interface ExternalContentProviderConfigurationChangeSet extends Proto.Message {

    putProviderProduct?: Proto.ExternalContentProviderProductChangeSet[];
    version?: Long;
    
}

}


declare namespace Proto {

  export interface ExternalContentProviderConfigurations extends Proto.Message {

    externalContentProviderConfiguration?: Proto.ExternalContentProviderConfiguration[];
    summary?: Proto.QuerySummary;
    
}

}


declare namespace Proto {

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


declare namespace Proto {

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


declare namespace Proto {

  export interface ExternalContentProviderProducts extends Proto.Message {

    product?: Proto.ExternalContentProviderProduct[];
    summary?: Proto.QuerySummary;
    
}

}


declare namespace Proto {

  export interface ExternalContentProviderProductFormat extends Proto.Message {

    size?: string;
    format?: string;
    mediaType?: string;
    minResolution?: number;
    description?: string;
    
}

}


declare namespace Proto {

  export interface ExternalContentProviderInfo extends Proto.Message {

    provider?: Proto.ExternalContentProvider;
    state?: Proto.ExternalContentProviderState;
    
}

}


declare namespace Proto {

  export interface External extends Proto.Message {

    source?: Proto.Source;
    link?: string;
    
}

}


declare namespace Proto {

  export interface ExternalLicensedLicense extends Proto.Message {

    productId?: string;
    productType?: string;
    agreementName?: string;
    accountName?: string;
    
}

}


declare namespace Proto {

  export interface ExternalLink extends Proto.Message {

    name?: string;
    link?: string;
    
}

}


declare namespace Proto {

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


declare namespace Proto {

  export interface Error extends Proto.Message {

    httpStatusCode?: number;
    backendErrorCode?: Proto.BackendErrorCode;
    exceptionType?: string;
    errorMessage?: string;
    
}

}


declare namespace Proto {

  export interface ServerTask extends Proto.Message {

    taskUuid?: string;
    issuedTimestamp?: Long;
    type?: Proto.ServerTaskType;
    completedPercentage?: number;
    
}

}


declare namespace Proto {

  export interface ServerTaskProgress extends Proto.Message {

    transactionUuid?: string;
    serverTaskProgressTask?: Proto.ServerTask[];
    serverTaskCreated?: Proto.ServerTask[];
    backendErrorCode?: Proto.BackendErrorCode;
    backendErrorMessage?: string;
    hasError?: boolean;
    
}

}


declare namespace Proto {

  export interface EventBusMessage extends Proto.Message {

    serverTaskProgress?: Proto.ServerTaskProgress;
    
}

}


declare namespace Proto {

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


declare namespace Proto {

  export interface ServerTaskResponses extends Proto.Message {

    serverTaskResponse?: Proto.ServerTaskResponse[];
    
}

}


declare namespace Proto {
	export const enum PublishAction {
		PA_PUBLISH = 1,
		PA_UNPUBLISH = 2,
		
}
}


declare namespace Proto {
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


declare namespace Proto {
	export const enum AssetType {
		AT_FILE = 1,
		AT_RICHTEXT = 2,
		
}
}


declare namespace Proto {
	export const enum BrandLandLayout {
		BLL_STANDARD = 0,
		
}
}


declare namespace Proto {
	export const enum FolderListViewLayout {
		FLVL_STANDARD = 0,
		
}
}


declare namespace Proto {
	export const enum RichtextListViewLayout {
		RLVL_SPLITVIEW = 0,
		RLVL_IMAGE = 1,
		
}
}


declare namespace Proto {
	export const enum FolderInnerLayout {
		FIL_STANDARD = 0,
		
}
}


declare namespace Proto {
	export const enum AssetInnerLayout {
		AIL_STANDARD = 0,
		
}
}


declare namespace Proto {
	export const enum LayoutModel {
		INHERIT_LAYOUT_FROM_PARENT = 0,
		OVERRIDE_LAYOUT = 2,
		
}
}


declare namespace Proto {
	export const enum PublishConditionState {
		PCS_NOT_YET_PUBLISHED = 1,
		PCS_ACTIVE = 2,
		PCS_NO_LONGER_PUBLISHED = 3,
		
}
}


declare namespace Proto {
	export const enum PublishConditionModel {
		INHERIT_PUBLISH_CONDITION_FROM_PARENT = 0,
		OVERRIDE_PUBLISH_CONTIDION = 2,
		
}
}


declare namespace Proto {
	export const enum LicensingModel {
		INHERIT_LICENSING_FROM_PARENT = 0,
		OVERRIDE_LICENSING = 2,
		
}
}


declare namespace Proto {
	export const enum LicenseType {
		PRIVATE_USE = 1,
		EDITORIAL_USE = 2,
		COMMERCIAL_USE = 3,
		CUSTOM = 4,
		EXTERNAL = 5,
		
}
}


declare namespace Proto {
	export const enum LicenseExclusivityType {
		SHARED_NON_EXCLUSIVE = 1,
		SHARED_NON_EXCLUSIVE_EXCLUSIVE_POSSIBLE = 2,
		EXCLUSIVE_ONLY = 3,
		
}
}


declare namespace Proto {
	export const enum LicenseTypeOfUse {
		ONLINE_ELECTRONIC = 1,
		PRINT = 2,
		
}
}


declare namespace Proto {
	export const enum AutocompletedEntityType {
		AET_END_USER_GROUP = 1,
		AET_END_USER = 2,
		AET_ADMIN_USER_GROUP = 3,
		AET_LICENSE = 4,
		AET_BRAND = 5,
		AET_TAG = 6,
		
}
}


declare namespace Proto {
	export const enum PreviewSize {
		NORMAL = 1000,
		
}
}


declare namespace Proto {
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


declare namespace Proto {
	export  enum BinaryType {
		IMAGE = 1,
		AUDIO = 2,
		VIDEO = 3,
		DOCUMENT = 4,
		
}
}


declare namespace Proto {
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


declare namespace Proto {
	export  enum ContentCategory {
		CC_MARKETING_CONTENT = 1,
		CC_PRESS_CONTENT = 2,
		CC_PRODUCT_INFORMATION = 3,
		CC_PROFESSIONAL_CREATIVE_CONTENT = 4,
		CC_BRAND_CREATIVE_CONTENT = 5,
		CC_STOCK_CONTENT = 6,
		
}
}


declare namespace Proto {
	export const enum AssetReviewState {
		ARS_NO_RELEASE_NECESSARY = 1,
		ARS_MAYBE_RELEASE_NECESSARY = 2,
		ARS_RELEASE_NECESSARY = 3,
		
}
}


declare namespace Proto {
	export const enum JobState {
		CREATED = 1,
		CLOSED_DEAL = 2,
		CLOSED_NO_DEAL = 3,
		
}
}


declare namespace Proto {
	export const enum JobPricingType {
		JOB_ISSUER_DEFINES_REWARD = 1,
		PARTICIPANT_SUGGESTS_PRICE = 2,
		
}
}


declare namespace Proto {
	export const enum JobParticipationType {
		JOB_IS_OPEN = 1,
		JOB_NEEDS_CONFIRMATION = 2,
		
}
}


declare namespace Proto {
	export const enum JobType {
		PHOTOGRAPHY = 1,
		TRANSLATION = 2,
		
}
}


declare namespace Proto {
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


declare namespace Proto {
	export const enum ProjectState {
		OPEN = 1,
		CLOSED = 2,
		
}
}


declare namespace Proto {
	export const enum ShoppingCartState {
		SC_OPEN = 1,
		SC_SUBMITTED_TO_BRAND = 2,
		SC_REJECTED = 3,
		SC_ACQUIRED = 4,
		SC_FULFILLED = 5,
		
}
}


declare namespace Proto {
	export const enum CreditTransactionCurrency {
		CTC_EUR = 1,
		CTC_USD = 2,
		
}
}


declare namespace Proto {
	export const enum CreditTransactionPaymentMethod {
		CTPM_MANUAL = 1,
		
}
}


declare namespace Proto {
	export const enum CreditTransactionPeriod {
		CTP_MONTH = 1,
		
}
}


declare namespace Proto {
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


declare namespace Proto {
	export const enum CreditTransactionDownloadType {
		CTDT_INVOICE = 1,
		CTDT_VOUCHER = 2,
		CTDT_LICENSE = 3,
		CTDT_REPORT = 4,
		CTDT_ASSET = 5,
		
}
}


declare namespace Proto {
	export const enum UserPersona {
		UP_BRAND = 1,
		UP_JOURNALIST = 2,
		UP_PROFESSIONAL = 3,
		UP_ENTHUSIAST = 4,
		
}
}


declare namespace Proto {
	export const enum UserType {
		UT_BRAND_MEMBER = 1,
		UT_AGENCY_MEMBER = 2,
		UT_INFLUENCER = 3,
		UT_JOURNALIST = 4,
		UT_CONTENT_PROFESSIONAL = 5,
		
}
}


declare namespace Proto {
	export const enum UserAction {
		UA_DISABLE = 1,
		UA_ENABLE = 2,
		
}
}


declare namespace Proto {
	export const enum EmailNotificationInterval {
		NEVER = 1,
		HOURLY = 2,
		IMMEDIATELY = 3,
		
}
}


declare namespace Proto {
	export const enum ReadAccessModel {
		INHERIT_MODEL_FROM_PARENT = 0,
		PUBLIC = 1,
		ONLY_PERMITTED_GROUPS_OR_USERS = 2,
		
}
}


declare namespace Proto {
	export const enum PublicReadAccessPermission {
		PRE_LICENSED_INHERIT = 0,
		PREVIEW_INHERIT = 1,
		PREVIEW_NO_INHERIT = 2,
		ONLY_ALLOWS_REGISTRATION = 3,
		NO_ACCESS = 4,
		
}
}


declare namespace Proto {
	export const enum ReadAccessPermissionType {
		RPT_END_USER_GROUP = 1,
		RPT_USER = 3,
		RPT_BRAND = 4,
		
}
}


declare namespace Proto {
	export const enum WriteAccessModel {
		INHERIT_WRITE_FROM_PARENT = 0,
		AS_SPECIFIED = 1,
		
}
}


declare namespace Proto {
	export const enum AccessRequestState {
		ARS_REQUEST_INITIATED = 1,
		ARS_REQUEST_REJECTED = 2,
		ARS_REQUEST_FINAL_REJECTED = 3,
		ARS_REQUEST_ACCEPTED = 4,
		
}
}


declare namespace Proto {
	export const enum JoinRequestState {
		JRS_REQUEST_INITIATED = 1,
		JRS_REQUEST_REJECTED = 2,
		JRS_REQUEST_FINAL_REJECTED = 3,
		JRS_REQUEST_ACCEPTED = 4,
		
}
}


declare namespace Proto {
	export const enum LicenseRequestState {
		LRS_REQUEST_INITIATED = 1,
		LRS_REQUEST_REJECTED = 2,
		LRS_REQUEST_FINAL_REJECTED = 3,
		LRS_REQUEST_ACCEPTED = 4,
		
}
}


declare namespace Proto {
	export const enum PublishRequestState {
		PRS_REQUEST_INITIATED = 1,
		PRS_REQUEST_REJECTED = 2,
		PRS_REQUEST_ACCEPTED = 3,
		
}
}


declare namespace Proto {
	export const enum PurchaseCreditsRequestState {
		PCRS_REQUEST_INITIATED = 1,
		PCRS_REQUEST_REJECTED = 2,
		PCRS_REQUEST_ACCEPTED = 3,
		
}
}


declare namespace Proto {
	export const enum UpgradePlanRequestState {
		UPRS_REQUEST_INITIATED = 1,
		UPRS_REQUEST_REJECTED = 2,
		UPRS_REQUEST_ACCEPTED = 3,
		
}
}


declare namespace Proto {
	export const enum ApprovalRequestState {
		APRS_REQUEST_INITIATED = 1,
		APRS_REQUEST_REJECTED = 2,
		APRS_REQUEST_ACCEPTED = 3,
		
}
}


declare namespace Proto {
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


declare namespace Proto {
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


declare namespace Proto {
	export const enum QueryOrderDirection {
		ASC = 1,
		DESC = 2,
		
}
}


declare namespace Proto {
	export const enum QueryPublishingState {
		NO_UNPUBLISHED_CHANGED = 1,
		UNPUBLISHED_CHANGES = 2,
		
}
}


declare namespace Proto {
	export  enum QueryReviewState {
		QRS_NOT_REVIEWED = 1,
		QRS_REVIEWED_NO_RELEASE_NECESSARY = 2,
		QRS_REVIEWED_MAYBE_RELEASE_NECESSARY_RELEASE_NOT_PRESENT = 3,
		QRS_REVIEWED_MAYBE_RELEASE_NECESSARY_RELEASE_PRESENT = 4,
		QRS_REVIEWED_RELEASE_NECESSARY_RELEASE_NOT_PRESENT = 5,
		QRS_REVIEWED_RELEASE_NECESSARY_RELEASE_PRESENT = 6,
		
}
}


declare namespace Proto {
	export  enum Dimension {
		SMALL = 1,
		MEDIUM = 2,
		LARGE = 3,
		XLARGE = 4,
		XXLARGE = 5,
		
}
}


declare namespace Proto {
	export  enum Uploaded {
		ALL_TIME = 1,
		TODAY = 2,
		THIS_WEEK = 3,
		THIS_MONTH = 4,
		LAST_3_MONTHS = 5,
		LAST_6_MONTHS = 6,
		
}
}


declare namespace Proto {
	export  enum Orientation {
		PORTRAIT = 1,
		LANDSCAPE = 2,
		SQUARE = 3,
		
}
}


declare namespace Proto {
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


declare namespace Proto {
	export  enum VideoFormat {
		HD = 1,
		FULL_HD = 2,
		FOUR_K = 3,
		EIGHT_K = 4,
		OTHER_FORMAT = 5,
		
}
}


declare namespace Proto {
	export  enum VideoAspectRatio {
		FOUR_TO_THREE = 1,
		SIXTEEN_TO_NINE = 2,
		OTHER_RATIO = 3,
		
}
}


declare namespace Proto {
	export  enum Duration {
		SHORT = 1,
		MEDIUM_LENGTH = 2,
		LONG = 3,
		
}
}


declare namespace Proto {
	export  enum PageCount {
		ZERO_OR_ONE_PAGE = 1,
		TWO_TO_FIVE_PAGES = 2,
		SIX_TO_TEN_PAGES = 3,
		ELEVEN_TO_FIFTY_PAGES = 4,
		ABOVE_FIFTY_PAGES = 5,
		
}
}


declare namespace Proto {
	export const enum NotificationState {
		NS_DECISION_REQUIRED = 1,
		NS_ACTION_REQUIRED = 2,
		NS_FEEDBACK = 3,
		NS_INFORMATIONAL = 4,
		NS_DISMISSED = 5,
		NS_WARNING = 6,
		
}
}


declare namespace Proto {
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


declare namespace Proto {
	export const enum BrandPlanBrandType {
		BPBT_CUSTOM = 1,
		BPBT_CONTENT_PUBLISHER = 2,
		BPBT_PROCUREMENT = 3,
		
}
}


declare namespace Proto {
	export const enum ExternalContentProvider {
		ECP_GETTY = 1,
		ECP_SHUTTERSTOCK = 2,
		ECP_ISTOCK = 3,
		ECP_THINKSTOCK = 4,
		ECP_ADOBESTOCK = 5,
		
}
}


declare namespace Proto {
	export const enum ExternalContentProviderState {
		ECPS_CREATED = 1,
		ECPS_SETUP = 2,
		ECPS_ACTIVE = 3,
		ECPS_EXPIRED = 4,
		ECPS_ERROR = 5,
		
}
}


declare namespace Proto {
	export const enum ExternalPricingModel {
		EPM_NO_PRICE = 1,
		EPM_EXTERNAL_CREDITS = 2,
		EPM_EUR = 3,
		EPM_USD = 4,
		
}
}


declare namespace Proto {
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


declare namespace Proto {
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




export class SdkConstants {
  static readonly COLLECTION_FLAG_INCLUDE_NONE: Long;
  static readonly COLLECTION_FLAG_INCLUDE_METADATA_BASIC: Long;
  static readonly COLLECTION_FLAG_INCLUDE_METADATA_EXTENDED: Long;
  static readonly COLLECTION_FLAG_INCLUDE_PRIVATE_WORKINGSET_DATA: Long;
  static readonly COLLECTION_FLAG_INCLUDE_PUBLIC_WORKINGSET_DATA: Long;
  static readonly COLLECTION_FLAG_INCLUDE_WORKINGSET_METADATA_EXTENDED: Long;
  static readonly COLLECTION_FLAG_INCLUDE_WORKINGSET_BINARIES: Long;
  static readonly COLLECTION_FLAG_INCLUDE_BINARY_METATAGS_BASIC: Long;
  static readonly COLLECTION_FLAG_INCLUDE_BINARY_METATAGS_EXTENDED: Long;
  static readonly COLLECTION_FLAG_INCLUDE_ACCESS: Long;
  static readonly COLLECTION_FLAG_INCLUDE_TAGS: Long;
  static readonly COLLECTION_FLAG_INCLUDE_LICENSING: Long;
  static readonly COLLECTION_FLAG_INCLUDE_RELATED_BRAND_DATA: Long;
  static readonly COLLECTION_FLAG_INCLUDE_PRIVATE_JOB_DATA: Long;
  static readonly COLLECTION_FLAG_INCLUDE_PUBLIC_JOB_DATA: Long;
  static readonly COLLECTION_FLAG_INCLUDE_ACQUISITION_DATA: Long;
  static readonly COLLECTION_FLAG_INCLUDE_PROJECT_DATA: Long;
  static readonly COLLECTION_FLAG_INCLUDE_PARTICIPATION_DATA: Long;
  static readonly COLLECTION_FLAG_INCLUDE_RESOLVED_METADATA_EXTENDED: Long;
  static readonly COLLECTION_FLAG_INCLUDE_RESOLVED_TAGS: Long;
  static readonly COLLECTION_FLAG_INCLUDE_RESOLVED_AVAILABLE_LICENSES: Long;
  static readonly COLLECTION_FLAG_INCLUDE_RESOLVED_ACCESS: Long;
  static readonly COLLECTION_FLAG_INCLUDE_UNRESOLVED_METADATA_EXTENDED: Long;
  static readonly COLLECTION_FLAG_INCLUDE_UNRESOLVED_TAGS: Long;
  static readonly COLLECTION_FLAG_INCLUDE_UNRESOLVED_AVAILABLE_LICENSES: Long;
  static readonly COLLECTION_FLAG_INCLUDE_UNRESOLVED_ACCESS: Long;
  static readonly COLLECTION_FLAG_INCLUDE_PARENTS: Long;
  static readonly COLLECTION_FLAG_INCLUDE_DEREFERENCED_DATA: Long;
  static readonly COLLECTION_FLAG_INCLUDE_AGGREGATIONS: Long;
  static readonly COLLECTION_FLAG_INCLUDE_QUERY_DATA_BASIC: Long;
  static readonly COLLECTION_FLAG_INCLUDE_QUERY_DATA_EXTENDED: Long;
  static readonly COLLECTION_FLAG_INCLUDE_CREDIT_BALANCE: Long;
  static readonly COLLECTION_FLAG_INCLUDE_DOWNLOAD_LINKS: Long;
  static readonly COLLECTION_FLAG_INCLUDE_BRAND_QUERY_DATA_EXTENDED: Long;
  static readonly COLLECTION_FLAG_INCLUDE_FOLLOW_DATA: Long;
  static readonly COLLECTION_FLAG_INCLUDE_LICENSE_REQUESTS: Long;
  static readonly COLLECTION_FLAG_INCLUDE_ACCESS_REQUESTS: Long;
  static readonly COLLECTION_FLAG_INCLUDE_PUBLISH_REQUESTS: Long;
  static readonly COLLECTION_FLAG_INCLUDE_COLLECTED_ENTITIES: Long;
  static readonly COLLECTION_FLAG_INCLUDE_NEWS_INDICATOR: Long;
  static readonly COLLECTION_FLAG_INCLUDE_UPGRADE_PLAN_REQUESTS: Long;
  static readonly COLLECTION_FLAG_INCLUDE_APPROVAL_REQUESTS: Long;
  static readonly COLLECTION_FLAG_INCLUDE_JOIN_REQUESTS: Long;
  static readonly COLLECTION_FLAG_INCLUDE_LAYOUTS: Long;
  static readonly COLLECTION_FLAG_INCLUDE_RESOLVED_LAYOUTS: Long;
  static readonly COLLECTION_FLAG_INCLUDE_UNRESOLVED_LAYOUTS: Long;
  static readonly COLLECTION_FLAG_INCLUDE_PUBLISH_CONDITIONS: Long;
  static readonly COLLECTION_FLAG_INCLUDE_UNRESOLVED_PUBLISH_CONDITIONS: Long;
  static readonly COLLECTION_FLAG_INCLUDE_RESOLVED_PUBLISH_CONDITIONS: Long;
  static readonly COLLECTION_FLAG_INCLUDE_TAG_TRANSLATIONS: Long;
  static readonly COLLECTION_FLAG_INCLUDE_EXTERNAL_CONTENT_PROVIDERS: Long;
  static readonly COLLECTION_FLAG_INCLUDE_ALL: Long;
  static readonly ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_READ: number;
  static readonly ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_SHARE: number;
  static readonly ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_PUBLISH_UNPUBLISH: number;
  static readonly ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_EDIT: number;
  static readonly ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_CREATE: number;
  static readonly ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_DELETE_AND_RESTORE: number;
  static readonly ADMIN_USER_ACCESS_BITMASK_FLAG_TREE_MANAGE_PERMISSIONS: number;
  static readonly ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_MANAGE_END_USERS: number;
  static readonly ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_MANAGE_ADMIN_USERS: number;
  static readonly ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_MANAGE_LICENSES: number;
  static readonly ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_ACQUIRE: number;
  static readonly ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_PURCHASE_CREDITS: number;
  static readonly ADMIN_USER_ACCESS_BITMASK_FLAG_JOBS_MANAGE_JOB_PARTICIPATIONS: number;
  static readonly ADMIN_USER_ACCESS_BITMASK_FLAG_PARTICIPATIONS_PARTICIPATE_IN_JOBS: number;
  static readonly ADMIN_USER_ACCESS_BITMASK_FLAG_SPECIAL_APPLY_FOR_BRAND_ACCESS: number;
  static readonly ADMIN_USER_ACCESS_BITMASK_FLAG_SPECIAL_CAN_USE_BRAND_ACCESS: number;
  static readonly ADMIN_USER_ACCESS_BITMASK_FLAG_SPECIAL_CAN_DOWNLOAD_ACQUIRED_ASSETS: number;
  static readonly ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_CAN_CONFIGURE_EXTERNAL_CONTENT_PROVIDERS: number;
  static readonly ADMIN_USER_ACCESS_BITMASK_FLAG_SPECIAL_CAN_USE_EXTERNAL_CONTENT_PROVIDERS: number;
  static readonly ADMIN_USER_ACCESS_BITMASK_FLAG_WORLD_ADMIN: number;
  static readonly ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_CAN_CONFIGURE_CUSTOM_SUBDOMAIN: number;
  static readonly ADMIN_USER_ACCESS_BITMASK_FLAG_SPECIAL_CAN_SEE_EXTERNAL_CONTENT_PROVIDER_PRICES: number;
  static readonly ADMIN_USER_ACCESS_BITMASK_FLAG_BRAND_MANAGE_TRANSACTIONS: number;
  static readonly ADMIN_USER_ACCESS_BITMASK_EVERYTHING: number;
  static readonly ADMIN_USER_BITMASK_PERMISSIONS_GIVE_FULL_READ_ACCESS: number;
  static readonly ADMIN_USER_BITMASK_PERMISSIONS_GIVE_AREA_ADMIN_ACCESS_ON_BRAND_NODE: number;
  static readonly KEY_PREVIEW_SIZE: string;
  static readonly KEY_READ_ACCESS_MODEL: string;
  static readonly KEY_PUBLIC_READ_ACCESS_PERMISSION: string;
  static readonly KEY_LICENSING_MODEL: string;
  static readonly KEY_LICENSING_ALLOW_ANONYMOUS_DOWNLOAD: string;
  static readonly KEY_WRITE_ACCESS_MODEL: string;
  static readonly KEY_BRAND_DEFAULT_LOCALE: string;
  static readonly KEY_BRAND_OVERRIDE_DEFAULT_LOCALE_FOR_CHILDS: string;
  static readonly KEY_BRAND_DEFAULT_CONTENT_CATEGORY: string;
  static readonly KEY_BRAND_TYPE: string;
  static readonly KEY_BRAND_CUSTOM_DESIGN_COLOR_1: string;
  static readonly KEY_BRAND_CUSTOM_DESIGN_COLOR_2: string;
  static readonly KEY_BRAND_CUSTOM_SUBDOMAIN_SUBDOMAIN: string;
  static readonly KEY_BRAND_COMPANY_INFO_COMPANY_NAME: string;
  static readonly KEY_BRAND_COMPANY_INFO_CONTACT_PERSON_NAME: string;
  static readonly KEY_BRAND_COMPANY_INFO_STREET: string;
  static readonly KEY_BRAND_COMPANY_INFO_POSTAL_CODE: string;
  static readonly KEY_BRAND_COMPANY_INFO_CITY: string;
  static readonly KEY_BRAND_COMPANY_INFO_COUNTRY: string;
  static readonly KEY_BRAND_COMPANY_INFO_VAT: string;
  static readonly KEY_BRAND_COMPANY_INFO_EMAIL: string;
  static readonly KEY_BRAND_COMPANY_INFO_PUBLICATION_NAME: string;
  static readonly KEY_BRAND_SHOW_CONTACT_EMAIL_ADDRESS: string;
  static readonly KEY_BRAND_APPROVED: string;
  static readonly KEY_BRAND_BILLING_INFO_OVERRIDE: string;
  static readonly KEY_BRAND_LAND_LAYOUT: string;
  static readonly KEY_FEATURE_PRIORITY: string;
  static readonly KEY_APPLY_WATERMARK: string;
  static readonly KEY_ORDER: string;
  static readonly KEY_PUBLISH_CONDITION_MODEL: string;
  static readonly KEY_PUBLISH_CONDITION_PUBLISH_FROM_TIMESTAMP: string;
  static readonly KEY_PUBLISH_CONDITION_PUBLISH_TO_TIMESTAMP: string;
  static readonly KEY_FOLDER_LAYOUT_MODEL: string;
  static readonly KEY_FOLDER_LAYOUT_LIST_VIEW_LAYOUT: string;
  static readonly KEY_FOLDER_LAYOUT_INNER_LAYOUT: string;
  static readonly KEY_CONTENT_CATEGORY: string;
  static readonly KEY_DEFAULT_LOCALE: string;
  static readonly KEY_OVERRIDE_DEFAULT_LOCALE_FOR_CHILDS: string;
  static readonly KEY_ADMIN_USER_GROUP_ACCESS_FLAGS: string;
  static readonly KEY_ADMIN_USER_GROUP_CANNOT_BE_DELETED: string;
  static readonly KEY_ADMIN_USER_GROUP_CANNOT_BE_CHANGED: string;
  static readonly KEY_BINARY_IMAGE_CROP: string;
  static readonly KEY_BINARY_IMAGE_FOREGROUND_COLOR: string;
  static readonly KEY_BINARY_IMAGE_BACKGROUND_COLOR: string;
  static readonly KEY_BINARY_VIDEO_THUMBNAIL_GENERATION_PERCENTAGE: string;
  static readonly KEY_BINARY_DOCUMENT_PREVIEW_PAGE: string;
  static readonly KEY_BINARY_DOCUMENT_LIMIT_PREVIEW_TO_ONE_PAGER: string;
  static readonly KEY_BINARY_DOCUMENT_NUMBER_OF_PREVIEW_PARAGRAPHS: string;
  static readonly KEY_PROJECT_STATE: string;
  static readonly KEY_TRANSLATION_TEXT: string;
  static readonly KEY_USER_GROUP_USER_ADDED: string;
  static readonly KEY_USER_GROUP_USER_REMOVED: string;
  static readonly KEY_USER_GROUP_LOCALE_NAME: string;
  static readonly KEY_USER_GROUP_LOCALE_DESCRIPTION: string;
  static readonly KEY_USER_GROUP_CANNOT_BE_DELETED: string;
  static readonly KEY_USER_GROUP_MUST_CONTAIN_AT_LEAST_ONE_ENTRY: string;
  static readonly KEY_LICENSE_LOCALE_NAME: string;
  static readonly KEY_LICENSE_EXCLUSIVITY_TYPE: string;
  static readonly KEY_LICENSE_VALIDITY_PERIOD_DAYS: string;
  static readonly KEY_LICENSE_IMAGE_PRICE: string;
  static readonly KEY_LICENSE_VIDEO_PRICE: string;
  static readonly KEY_LICENSE_AUDIO_PRICE: string;
  static readonly KEY_LICENSE_DOCUMENT_PRICE: string;
  static readonly KEY_LICENSE_OF_IMAGE_PRICE_IS_TRANSACTION_FEE: string;
  static readonly KEY_LICENSE_OF_VIDEO_PRICE_IS_TRANSACTION_FEE: string;
  static readonly KEY_LICENSE_OF_AUDIO_PRICE_IS_TRANSACTION_FEE: string;
  static readonly KEY_LICENSE_OF_DOCUMENT_PRICE_IS_TRANSACTION_FEE: string;
  static readonly KEY_LICENSE_LOCALE_TERMS_OF_USE: string;
  static readonly KEY_LICENSE_LOCALE_RESTRICTED_PUBLISHING_TOPICS: string;
  static readonly KEY_LICENSE_LOCALE_RESTRICTED_INDUSTRIES: string;
  static readonly KEY_LICENSE_LOCALE_RESTRICTED_GEO_USE: string;
  static readonly KEY_ENTITY_LOCALE_NAME: string;
  static readonly KEY_ENTITY_LOCALE_DESCRIPTION: string;
  static readonly KEY_ENTITY_LOCALE_EDITORIAL_TEXT: string;
  static readonly KEY_ENTITY_LOCALE_CONTEXT_TEXT_1: string;
  static readonly KEY_ENTITY_LOCALE_CONTACT_INFO_FACEBOOK_LINK: string;
  static readonly KEY_ENTITY_LOCALE_CONTACT_INFO_TWITTER_LINK: string;
  static readonly KEY_ENTITY_LOCALE_CONTACT_INFO_GOOGLE_PLUS_LINK: string;
  static readonly KEY_ENTITY_LOCALE_CONTACT_INFO_NAME: string;
  static readonly KEY_ENTITY_LOCALE_CONTACT_INFO_STREET: string;
  static readonly KEY_ENTITY_LOCALE_CONTACT_INFO_POSTAL_CODE: string;
  static readonly KEY_ENTITY_LOCALE_CONTACT_INFO_CITY: string;
  static readonly KEY_ENTITY_LOCALE_CONTACT_INFO_COUNTRY: string;
  static readonly KEY_ENTITY_LOCALE_CONTACT_INFO_PHONE: string;
  static readonly KEY_ENTITY_LOCALE_CONTACT_INFO_WEBSITE: string;
  static readonly KEY_ENTITY_LOCALE_CONTACT_INFO_EMAIL: string;
  static readonly KEY_BRAND_LINK_NAME: string;
  static readonly KEY_BRAND_LINK_LINK: string;
  static readonly KEY_ENTITY_BINARY_SET_NAME: string;
  static readonly KEY_ENTITY_BINARY_SET_AUTHOR: string;
  static readonly KEY_REQUIRES_MANUAL_COMMIT: string;
  static readonly KEY_REQUIRES_APPLICATION_MESSAGE: string;
  static readonly KEY_COST_CENTER_ID: string;
  static readonly KEY_JOB_TYPE: string;
  static readonly KEY_JOB_PRICING_TYPE: string;
  static readonly KEY_JOB_PARTICIPATION_TYPE: string;
  static readonly KEY_JOB_STATE: string;
  static readonly KEY_JOB_LICENSE_ID: string;
  static readonly KEY_JOB_END_TIMESTAMP: string;
  static readonly KEY_JOB_REWARD: string;
  static readonly KEY_PARTICIPATION_PRICE: string;
  static readonly KEY_ASSET_LAYOUT_MODEL: string;
  static readonly KEY_ASSET_LAYOUT_RICHTEXT_LIST_VIEW_LAYOUT: string;
  static readonly KEY_ASSET_LAYOUT_INNER_LAYOUT: string;
  static readonly KEY_ASSET_PUBLICATION_TIMESTAMP: string;
  static readonly KEY_ASSET_REVIEW_STATE: string;
  static readonly KEY_ASSET_RELEASE_REFERENCE: string;
  static readonly KEY_ASSET_CANONICAL_URL: string;
  static readonly KEY_ECP_PRICING_MODEL: string;
  static readonly KEY_ECP_IMAGE_EXTERNAL_CREDIT_PRICE_FULL: string;
  static readonly KEY_ECP_IMAGE_EXTERNAL_CREDIT_PRICE_MEDIUM: string;
  static readonly KEY_ECP_IMAGE_EXTERNAL_CREDIT_PRICE_SMALL: string;
  static readonly KEY_ECP_VIDEO_EXTERNAL_CREDIT_PRICE_4K: string;
  static readonly KEY_ECP_VIDEO_EXTERNAL_CREDIT_PRICE_HD: string;
  static readonly KEY_ECP_VIDEO_EXTERNAL_CREDIT_PRICE_SD: string;
  static readonly KEY_ECP_VIDEO_EXTERNAL_CREDIT_PRICE_LR: string;
  static readonly KEY_ECP_AUDIO_EXTERNAL_CREDIT_PRICE: string;
  static readonly KEY_ECP_DOCUMENT_EXTERNAL_CREDIT_PRICE: string;
  static readonly KEY_ECP_IMAGE_MONETARY_PRICE_FULL: string;
  static readonly KEY_ECP_IMAGE_MONETARY_PRICE_MEDIUM: string;
  static readonly KEY_ECP_IMAGE_MONETARY_PRICE_SMALL: string;
  static readonly KEY_ECP_VIDEO_MONETARY_PRICE_4K: string;
  static readonly KEY_ECP_VIDEO_MONETARY_PRICE_HD: string;
  static readonly KEY_ECP_VIDEO_MONETARY_PRICE_SD: string;
  static readonly KEY_ECP_VIDEO_MONETARY_PRICE_LR: string;
  static readonly KEY_ECP_AUDIO_MONETARY_PRICE: string;
  static readonly KEY_ECP_DOCUMENT_MONETARY_PRICE: string;
  static readonly KEY_ECP_WARNING_LIMIT_DOWNLOADS: string;
  static readonly KEY_ECP_WARNING_LIMIT_CREDITS: string;
  static readonly KEY_COLLECTED_ENTITY_LICENSE_UUID: string;
  static readonly KEY_COLLECTED_ENTITY_RELATED_TO_ADMIN_USER_GROUP_UUID: string;
  static readonly METATAG_BASIC_PREFIX: string;
  static readonly METATAG_ADVANCED_PREFIX: string;
  static readonly METATAG_WIDTH: string;
  static readonly METATAG_HEIGHT: string;
  static readonly METATAG_ASPECT_RATIO: string;
  static readonly METATAG_DPIX: string;
  static readonly METATAG_DPIY: string;
  static readonly METATAG_COLORSPACE_NAME: string;
  static readonly METATAG_PAGECOUNT: string;
  static readonly METATAG_FILESIZE: string;
  static readonly METATAG_MIMETYPE: string;
  static readonly METATAG_DURATION: string;
  static readonly METATAG_FRAME_RATE: string;
  static readonly METATAG_CODEC: string;
  static readonly METATAG_SCAN_TYPE: string;
  static readonly METATAG_ORIGINAL_FILE_NAME: string;
  static readonly METATAG_UPLOAD_TIMESTAMP: string;
  static readonly METATAG_SOURCE: string;
  static readonly METATAG_DESCRIPTION: string;
  static readonly METATAG_KEYWORDS: string;
  static readonly METATAG_AUTHOR: string;
  static readonly MIME_TYPE_IMAGE_JPG: string;
  static readonly MIME_TYPE_IMAGE_GIF: string;
  static readonly MIME_TYPE_IMAGE_PNG: string;
  static readonly MIME_TYPE_IMAGE_WEBP: string;
  static readonly MIME_TYPE_IMAGE_TIFF: string;
  static readonly MIME_TYPE_VIDEO_MP4: string;
  static readonly MIME_TYPE_VIDEO_WEBM: string;
  static readonly MIME_TYPE_VIDEO_OGG: string;
  static readonly MIME_TYPE_VIDEO_MKV: string;
  static readonly MIME_TYPE_VIDEO_MOV: string;
  static readonly MIME_TYPE_VIDEO_3GPP: string;
  static readonly MIME_TYPE_VIDEO_WMV: string;
  static readonly MIME_TYPE_AUDIO_M4A: string;
  static readonly MIME_TYPE_AUDIO_XM4A: string;
  static readonly MIME_TYPE_AUDIO_MP3: string;
  static readonly MIME_TYPE_AUDIO_MP4: string;
  static readonly MIME_TYPE_AUDIO_MPEG: string;
  static readonly MIME_TYPE_AUDIO_OGG: string;
  static readonly MIME_TYPE_AUDIO_WAV: string;
  static readonly MIME_TYPE_AUDIO_WEBM: string;
  static readonly MIME_TYPE_AUDIO_WMA: string;
  static readonly MIME_TYPE_DOCUMENT_PDF: string;
  static readonly MIME_TYPE_DOCUMENT_HTML: string;
  static readonly MIME_TYPE_DOCUMENT_TXT_PLAIN: string;
  static readonly MIME_TYPE_IMAGE_EPS: string;
  static readonly MIME_TYPE_IMAGE_SVG: string;
  static readonly MIME_TYPE_IMAGE_APPLICATION_ILLUSTRATOR: string;
  static readonly READ_PERMISSION_READ_FULL: number;
  static readonly READ_PERMISSION_READ_PRE_LICENSED: number;
  static readonly READ_PERMISSION_READ_QUALITY_RESTRICTED: number;
  static readonly READ_PERMISSION_ONLY_ALLOW_REGISTRATION: number;
  static readonly READ_PERMISSION_DENIED: number;
  static readonly AGGREGATION_KEY_TAG: string;
  static readonly AGGREGATION_KEY_TYPE: string;
  static readonly AGGREGATION_KEY_CONTENT_CATEGORY: string;
  static readonly AGGREGATION_KEY_BINARY_TYPE: string;
  static readonly AGGREGATION_KEY_LOCALES: string;
  static readonly AGGREGATION_KEY_DIMENSION: string;
  static readonly AGGREGATION_KEY_UPLOADED: string;
  static readonly AGGREGATION_KEY_ORIENTATION: string;
  static readonly AGGREGATION_KEY_VIDEO_FORMAT: string;
  static readonly AGGREGATION_KEY_VIDEO_ASPECT_RATIO: string;
  static readonly AGGREGATION_KEY_DURATION: string;
  static readonly AGGREGATION_KEY_PAGE_COUNT: string;
  static readonly AGGREGATION_KEY_SOURCE: string;
  static readonly AGGREGATION_KEY_LICENSE_ID: string;
  static readonly AGGREGATION_KEY_REVIEW_STATE: string;
  static readonly CONTIDIO_BRAND_UUID: string;
  static readonly CONTIDIO_PRIVATE_USE_SHARED_NON_EXCLUSIVE_LICENSE_UUID: string;
  static readonly CONTIDIO_EDITORIAL_USE_SHARED_NON_EXCLUSIVE_LICENSE_FREE_UUID: string;
  static readonly CONTIDIO_EDITORIAL_USE_SHARED_NON_EXCLUSIVE_LICENSE_STANDARD_UUID: string;
  static readonly CONTIDIO_EDITORIAL_USE_SHARED_NON_EXCLUSIVE_LICENSE_PREMIUM_UUID: string;
  static readonly CONTIDIO_COMMERCIAL_USE_SHARED_NON_EXCLUSIVE_LICENSE_FREE_UUID: string;
  static readonly CONTIDIO_COMMERCIAL_USE_SHARED_NON_EXCLUSIVE_LICENSE_STANDARD_UUID: string;
  static readonly CONTIDIO_COMMERCIAL_USE_SHARED_NON_EXCLUSIVE_LICENSE_PREMIUM_UUID: string;
  static readonly CONTIDIO_COMMERCIAL_USE_EXCLUSIVE_LICENSE_UUID: string;
  static readonly CONTIDIO_ACCREDITED_JOURNALISTS_USER_GROUP_UUID: string;
  static readonly CONTIDIO_CONFIRMED_PROFESSIONALS_USER_GROUP_UUID: string;
  static readonly CONTIDIO_CONFIRMED_BRANDS_USER_GROUP_UUID: string;
  static readonly STRING_KEY_DEFAULT_PROJECT_NAME: string;
  static readonly STRING_KEY_ADMINS_GROUP_NAME: string;
  static readonly STRING_KEY_ADMINS_GROUP_DESCRIPTION: string;
  static readonly MAX_LENGTH_ENTITY_BRAND_NAME: number;
  static readonly MAX_LENGTH_ENTITY_OTHER_NAME: number;
  static readonly MAX_LENGTH_ENTITY_BRAND_DESCRIPTION: number;
  static readonly MAX_LENGTH_ENTITY_OTHER_DESCRIPTION: number;
  static readonly MAX_LENGTH_ENTITY_CONTEXT_TEXT_1: number;
  static readonly MAX_LENGTH_USER_GROUP_NAME: number;
  static readonly MAX_LENGTH_LICENSE_NAME: number;
  static readonly MAX_LENGTH_BRAND_LINK_NAME: number;
  static readonly MAX_LENGTH_ENTITY_BINARY_SET_NAME: number;
  static readonly MAX_LENGTH_LICENSE_SUMMARY: number;
  static readonly MAX_LENGTH_EMAIL: number;
  static readonly MAX_LENGTH_COST_CENTER_ID: number;
  static readonly MIN_LENGTH_CONTACT_FORM_SUBJECT: number;
  static readonly MAX_LENGTH_CONTACT_FORM_SUBJECT: number;
  static readonly MIN_LENGTH_CONTACT_FORM_MESSAGE: number;
  static readonly MAX_LENGTH_CONTACT_FORM_MESSAGE: number;
  static readonly OUTPUT_ID_DEFAULT: number;
  static readonly OUTPUT_ID_ORIGINAL_PREVIEW: number;
  static readonly VIDEO_FILE_SIZE_LIMIT: number;
  static readonly AUDIO_FILE_SIZE_LIMIT: number;
  static readonly IMAGE_FILE_SIZE_LIMIT: number;
  static readonly DOCUMENT_FILE_SIZE_LIMIT: number;
  static readonly RICHTEXT_BINARY_SET_ID: number;
  static readonly WILDCARD_LOCALE: string;
}

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

export class ApiRequest extends AbstractApiRequest {

    constructor(client: ApiClient, brandUuid: string);
    
	/**
	* Gets metadata for a license request.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	licenseRequestUuid The UUID of the license request
	* @return	Promise<Proto.LicenseRequest>
	*/
	getLicenseRequest(licenseRequestUuid: string) : Promise<Proto.LicenseRequest>;

	/**
	* Creates an license request.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	licenseRequestCreateSet Information for creating the license request
	* @return	Promise<Proto.LicenseRequest>
	*/
	createLicenseRequest(licenseRequestCreateSet: Proto.LicenseRequestCreateSet) : Promise<Proto.LicenseRequest>;

	/**
	* Rejects an license request.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	licenseRequestUuid The UUID of the license request
	* @param	licenseRequestRejectSet Information for rejecting the license request
	* @return	Promise<Proto.LicenseRequest>
	*/
	rejectLicenseRequest(licenseRequestUuid: string, licenseRequestRejectSet: Proto.LicenseRequestRejectSet) : Promise<Proto.LicenseRequest>;

	/**
	* Accepts an license request.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	licenseRequestUuid The UUID of the license request
	* @param	licenseRequestAcceptSet Information for accepting the license request
	* @return	Promise<Proto.LicenseRequest>
	*/
	acceptLicenseRequest(licenseRequestUuid: string, licenseRequestAcceptSet: Proto.LicenseRequestAcceptSet) : Promise<Proto.LicenseRequest>;

	/**
	* Gets metadata for a access request.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	accessRequestUuid The UUID of the access request
	* @return	Promise<Proto.AccessRequest>
	*/
	getAccessRequest(accessRequestUuid: string) : Promise<Proto.AccessRequest>;

	/**
	* Creates an access request.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	accessRequestCreateSet Information for creating the access request
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	createAccessRequest(accessRequestCreateSet: Proto.AccessRequestCreateSet) : Promise<Proto.ServerTaskResponse>;

	/**
	* Rejects an access request.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	accessRequestUuid The UUID of the access request
	* @param	accessRequestRejectSet Information for rejecting the access request
	* @return	Promise<Proto.AccessRequest>
	*/
	rejectAccessRequest(accessRequestUuid: string, accessRequestRejectSet: Proto.AccessRequestRejectSet) : Promise<Proto.AccessRequest>;

	/**
	* Accepts an access request.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	accessRequestUuid The UUID of the access request
	* @param	accessRequestAcceptSet Information for accepting the access request
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	acceptAccessRequest(accessRequestUuid: string, accessRequestAcceptSet: Proto.AccessRequestAcceptSet) : Promise<Proto.ServerTaskResponse>;

	/**
	* Gets all access requests for a brand's end user group.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @param	endUserGroupUuid The UUID of the end user group
	* @return	Promise<Proto.AccessRequests>
	*/
	getAccessRequestsForEndUserGroup(brandUuid: string, endUserGroupUuid: string) : Promise<Proto.AccessRequests>;

	/**
	* Gets metadata for a join request.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	joinRequestUuid The UUID of the join request
	* @return	Promise<Proto.JoinRequest>
	*/
	getJoinRequest(joinRequestUuid: string) : Promise<Proto.JoinRequest>;

	/**
	* Creates an join request.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	joinRequestCreateSet Information for creating the join request
	* @return	Promise<Proto.JoinRequest>
	*/
	createJoinRequest(joinRequestCreateSet: Proto.JoinRequestCreateSet) : Promise<Proto.JoinRequest>;

	/**
	* Rejects an join request.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	joinRequestUuid The UUID of the join request
	* @param	joinRequestRejectSet Information for rejecting the join request
	* @return	Promise<Proto.JoinRequest>
	*/
	rejectJoinRequest(joinRequestUuid: string, joinRequestRejectSet: Proto.JoinRequestRejectSet) : Promise<Proto.JoinRequest>;

	/**
	* Accepts an join request.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	joinRequestUuid The UUID of the join request
	* @param	joinRequestAcceptSet Information for accepting the join request
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	acceptJoinRequest(joinRequestUuid: string, joinRequestAcceptSet: Proto.JoinRequestAcceptSet) : Promise<Proto.ServerTaskResponse>;

	/**
	* Gets metadata for an publish request.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	publishRequestUuid The UUID of the publish request
	* @return	Promise<Proto.PublishRequest>
	*/
	getPublishRequest(publishRequestUuid: string) : Promise<Proto.PublishRequest>;

	/**
	* Creates an publish request.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	publishRequestCreateSet Information for creating the publish request
	* @return	Promise<Proto.PublishRequest>
	*/
	createPublishRequest(publishRequestCreateSet: Proto.PublishRequestCreateSet) : Promise<Proto.PublishRequest>;

	/**
	* Rejects an publish request.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	publishRequestUuid The UUID of the publish request
	* @param	publishRequestRejectSet Information for rejecting the publish request
	* @return	Promise<Proto.PublishRequest>
	*/
	rejectPublishRequest(publishRequestUuid: string, publishRequestRejectSet: Proto.PublishRequestRejectSet) : Promise<Proto.PublishRequest>;

	/**
	* Accepts an publish request.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	publishRequestUuid The UUID of the publish request
	* @param	publishRequestAcceptSet Information for accepting the publish request
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	acceptPublishRequest(publishRequestUuid: string, publishRequestAcceptSet: Proto.PublishRequestAcceptSet) : Promise<Proto.ServerTaskResponse>;

	/**
	* Gets metadata for an purchase credits request.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	purchaseCreditsRequestUuid The UUID of the purchase credits request
	* @return	Promise<Proto.PurchaseCreditsRequest>
	*/
	getPurchaseCreditsRequest(purchaseCreditsRequestUuid: string) : Promise<Proto.PurchaseCreditsRequest>;

	/**
	* Creates an purchase credits request.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	purchaseCreditsRequestCreateSet Information for creating the purchase credits request
	* @return	Promise<Proto.PurchaseCreditsRequest>
	*/
	createPurchaseCreditsRequest(purchaseCreditsRequestCreateSet: Proto.PurchaseCreditsRequestCreateSet) : Promise<Proto.PurchaseCreditsRequest>;

	/**
	* Rejects an purchase credits request.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	purchaseCreditsRequestUuid The UUID of the purchase credits request
	* @param	purchaseCreditsRequestRejectSet Information for rejecting the purchase credits request
	* @return	Promise<Proto.PurchaseCreditsRequest>
	*/
	rejectPurchaseCreditsRequest(purchaseCreditsRequestUuid: string, purchaseCreditsRequestRejectSet: Proto.PurchaseCreditsRequestRejectSet) : Promise<Proto.PurchaseCreditsRequest>;

	/**
	* Gets metadata for an upgrade plan request.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	upgradePlanRequestUuid The UUID of the upgrade plan request
	* @return	Promise<Proto.UpgradePlanRequest>
	*/
	getUpgradePlanRequest(upgradePlanRequestUuid: string) : Promise<Proto.UpgradePlanRequest>;

	/**
	* Creates an upgrade plan request.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	upgradePlanRequestCreateSet Information for creating the upgrade plan request
	* @return	Promise<Proto.UpgradePlanRequest>
	*/
	createUpgradePlanRequest(upgradePlanRequestCreateSet: Proto.UpgradePlanRequestCreateSet) : Promise<Proto.UpgradePlanRequest>;

	/**
	* Accepts an upgrade plan request.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	upgradePlanRequestUuid The UUID of the upgrade plan request
	* @param	upgradePlanRequestAcceptSet Information for accepting the upgrade plan request
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	acceptUpgradePlanRequest(upgradePlanRequestUuid: string, upgradePlanRequestAcceptSet: Proto.UpgradePlanRequestAcceptSet) : Promise<Proto.ServerTaskResponse>;

	/**
	* Rejects an upgrade plan request.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	upgradePlanRequestUuid The UUID of the upgrade plan request
	* @param	upgradePlanRequestRejectSet Information for rejecting the upgrade plan request
	* @return	Promise<Proto.UpgradePlanRequest>
	*/
	rejectUpgradePlanRequest(upgradePlanRequestUuid: string, upgradePlanRequestRejectSet: Proto.UpgradePlanRequestRejectSet) : Promise<Proto.UpgradePlanRequest>;

	/**
	* Gets metadata for an approval request.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	approvalRequestUuid The UUID of the approval request
	* @return	Promise<Proto.ApprovalRequest>
	*/
	getApprovalRequest(approvalRequestUuid: string) : Promise<Proto.ApprovalRequest>;

	/**
	* Creates an approval request.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	approvalRequestCreateSet Information for creating the approval request
	* @return	Promise<Proto.ApprovalRequest>
	*/
	createApprovalRequest(approvalRequestCreateSet: Proto.ApprovalRequestCreateSet) : Promise<Proto.ApprovalRequest>;

	/**
	* Accepts an approval request.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	approvalRequestUuid The UUID of the approval request
	* @param	approvalRequestAcceptSet Information for accepting the approval request
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	acceptApprovalRequest(approvalRequestUuid: string, approvalRequestAcceptSet: Proto.ApprovalRequestAcceptSet) : Promise<Proto.ServerTaskResponse>;

	/**
	* Rejects an approval request.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	approvalRequestUuid The UUID of the approval request
	* @param	approvalRequestRejectSet Information for rejecting the approval request
	* @return	Promise<Proto.ApprovalRequest>
	*/
	rejectApprovalRequest(approvalRequestUuid: string, approvalRequestRejectSet: Proto.ApprovalRequestRejectSet) : Promise<Proto.ApprovalRequest>;

	/**
	* Creates an collected entity within a project.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	projectUuid The UUID of the project entity
	* @param	collectedEntityCreateSet Information for creating the collected entity
	* @return	Promise<Proto.CollectedEntity>
	*/
	createCollectedEntityInProject(projectUuid: string, collectedEntityCreateSet: Proto.CollectedEntityCreateSet) : Promise<Proto.CollectedEntity>;

	/**
	* Creates a bulk of collected entities within a project.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	projectUuid The UUID of the project entity
	* @param	collectedEntityCreateSets Information for creating a bulk of collected entities
	* @return	Promise<Proto.CollectedEntities>
	*/
	createCollectedEntitiesInProject(projectUuid: string, collectedEntityCreateSets: Proto.CollectedEntityCreateSets) : Promise<Proto.CollectedEntities>;

	/**
	* Updates an collected entity within a project.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	projectUuid The UUID of the project entity
	* @param	collectedEntityChangeSet Information for changing the collected entity
	* @return	Promise<Proto.CollectedEntity>
	*/
	updateCollectedEntityInProject(projectUuid: string, collectedEntityChangeSet: Proto.CollectedEntityChangeSet) : Promise<Proto.CollectedEntity>;

	/**
	* Updates a bulk of collected entities within a project.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	projectUuid The UUID of the project entity
	* @param	collectedEntityChangeSets Information for changing a bulk of collected entities
	* @return	Promise<Proto.CollectedEntities>
	*/
	updateCollectedEntitiesInProject(projectUuid: string, collectedEntityChangeSets: Proto.CollectedEntityChangeSets) : Promise<Proto.CollectedEntities>;

	/**
	* Deletes an collected entity from a project.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	projectUuid The UUID of the project entity
	* @param	collectedEntityDeleteSet Information for deleting the collected entity
	* @return	Promise<void>
	*/
	deleteCollectedEntityFromProject(projectUuid: string, collectedEntityDeleteSet: Proto.CollectedEntityDeleteSet) : Promise<null>;

	/**
	* Deletes a bulk of collected entities from a project.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	projectUuid The UUID of the project entity
	* @param	collectedEntityDeleteSets Information for deleting a bulk of collected entities
	* @return	Promise<void>
	*/
	deleteCollectedEntitiesFromProject(projectUuid: string, collectedEntityDeleteSets: Proto.CollectedEntityDeleteSets) : Promise<null>;

	/**
	* Copies an collected entity from a project to a shopping cart.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	projectUuid The UUID of the project entity
	* @param	collectedEntityCopySet Information for copying the collected entity
	* @param	shoppingCartUuid The UUID of the shopping cart
	* @return	Promise<Proto.CollectedEntity>
	*/
	copyCollectedEntityFromProjectToShoppingCart(projectUuid: string, collectedEntityCopySet: Proto.CollectedEntityCopySet, shoppingCartUuid: string) : Promise<Proto.CollectedEntity>;

	/**
	* Copies an collected entity from a project to the current user's shopping cart.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	projectUuid The UUID of the project entity
	* @param	collectedEntityCopySet Information for copying the collected entity
	* @return	Promise<Proto.CollectedEntity>
	*/
	copyCollectedEntityFromProjectToCurrentShoppingCart(projectUuid: string, collectedEntityCopySet: Proto.CollectedEntityCopySet) : Promise<Proto.CollectedEntity>;

	/**
	* Copies all collected entities from a project to a shopping cart.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	projectUuid The UUID of the project entity
	* @param	shoppingCartUuid The UUID of the shopping cart
	* @return	Promise<Proto.CollectedEntities>
	*/
	copyAllCollectedEntitiesFromProjectToShoppingCart(projectUuid: string, shoppingCartUuid: string) : Promise<Proto.CollectedEntities>;

	/**
	* Copies all collected entities from a project to the current user's shopping cart.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	projectUuid The UUID of the project entity
	* @return	Promise<Proto.CollectedEntities>
	*/
	copyAllCollectedEntitiesFromProjectToCurrentShoppingCart(projectUuid: string) : Promise<Proto.CollectedEntities>;

	/**
	* Copies a bulk of collected entities from a project to a shopping cart.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	projectUuid The UUID of the project entity
	* @param	collectedEntityCopySets Information for copying a bulk of collected entities
	* @param	shoppingCartUuid The UUID of the shopping cart
	* @return	Promise<Proto.CollectedEntities>
	*/
	copyCollectedEntitiesFromProjectToShoppingCart(projectUuid: string, collectedEntityCopySets: Proto.CollectedEntityCopySets, shoppingCartUuid: string) : Promise<Proto.CollectedEntities>;

	/**
	* Copies a bulk of collected entities from a project to the current user's shopping cart.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	projectUuid The UUID of the project entity
	* @param	collectedEntityCopySets Information for copying a bulk of collected entities
	* @return	Promise<Proto.CollectedEntities>
	*/
	copyCollectedEntitiesFromProjectToCurrentShoppingCart(projectUuid: string, collectedEntityCopySets: Proto.CollectedEntityCopySets) : Promise<Proto.CollectedEntities>;

	/**
	* Gets all collected entities from a project which have been already acquired.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	projectUuid The UUID of the project entity
	* @return	Promise<Proto.CollectedEntities>
	*/
	getAcquiredCollectedEntitiesForProject(projectUuid: string) : Promise<Proto.CollectedEntities>;

	/**
	* Gets all collected entities from a project which have not yet been acquired.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	projectUuid The UUID of the project entity
	* @return	Promise<Proto.CollectedEntities>
	*/
	getNotAcquiredCollectedEntitiesForProject(projectUuid: string) : Promise<Proto.CollectedEntities>;

	/**
	* Moves an collected entity from a shopping cart to a project.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	shoppingCartUuid The UUID of the shopping cart
	* @param	collectedEntityMoveSet Information for moving the collected entity
	* @param	projectUuid The UUID of the project entity
	* @return	Promise<Proto.CollectedEntity>
	*/
	moveCollectedEntityFromShoppingCartToProject(shoppingCartUuid: string, collectedEntityMoveSet: Proto.CollectedEntityMoveSet, projectUuid: string) : Promise<Proto.CollectedEntity>;

	/**
	* Moves an collected entity from the user's shopping cart to a project.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	collectedEntityMoveSet Information for moving the collected entity
	* @param	projectUuid The UUID of the project entity
	* @return	Promise<Proto.CollectedEntity>
	*/
	moveCollectedEntityFromCurrentShoppingCartToProject(collectedEntityMoveSet: Proto.CollectedEntityMoveSet, projectUuid: string) : Promise<Proto.CollectedEntity>;

	/**
	* Moves a bulk of collected entities from a shopping cart to a project.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	shoppingCartUuid The UUID of the shopping cart
	* @param	collectedEntityMoveSets Information for moving a bulk of collected entities
	* @param	projectUuid The UUID of the project entity
	* @return	Promise<Proto.CollectedEntities>
	*/
	moveCollectedEntitiesFromShoppingCartToProject(shoppingCartUuid: string, collectedEntityMoveSets: Proto.CollectedEntityMoveSets, projectUuid: string) : Promise<Proto.CollectedEntities>;

	/**
	* Moves a bulk of collected entities from the user's shopping cart to a project.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	collectedEntityMoveSets Information for moving a bulk of collected entities
	* @param	projectUuid The UUID of the project entity
	* @return	Promise<Proto.CollectedEntities>
	*/
	moveCollectedEntitiesFromCurrentShoppingCartToProject(collectedEntityMoveSets: Proto.CollectedEntityMoveSets, projectUuid: string) : Promise<Proto.CollectedEntities>;

	/**
	* Gets all collected entities for a shopping cart.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	shoppingCartUuid The UUID of the shopping cart
	* @return	Promise<Proto.CollectedEntities>
	*/
	getCollectedEntitiesForShoppingCart(shoppingCartUuid: string) : Promise<Proto.CollectedEntities>;

	/**
	* Gets all collected entities for the user's shopping cart.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @return	Promise<Proto.CollectedEntities>
	*/
	getCollectedEntitiesForCurrentShoppingCart() : Promise<Proto.CollectedEntities>;

	/**
	* Creates an collected entity in a shopping cart.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	shoppingCartUuid The UUID of the shopping cart
	* @param	collectedEntityCreateSet Information for creating the collected entity
	* @return	Promise<Proto.CollectedEntity>
	*/
	createCollectedEntityInShoppingCart(shoppingCartUuid: string, collectedEntityCreateSet: Proto.CollectedEntityCreateSet) : Promise<Proto.CollectedEntity>;

	/**
	* Creates an collected entity in the user's shopping cart.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	collectedEntityCreateSet Information for creating the collected entity
	* @return	Promise<Proto.CollectedEntity>
	*/
	createCollectedEntityInCurrentShoppingCart(collectedEntityCreateSet: Proto.CollectedEntityCreateSet) : Promise<Proto.CollectedEntity>;

	/**
	* Creates a bulk of collected entities in a shopping cart.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	shoppingCartUuid The UUID of the shopping cart
	* @param	collectedEntityCreateSets Information for creating a bulk of collected entities
	* @return	Promise<Proto.CollectedEntities>
	*/
	createCollectedEntitiesInShoppingCart(shoppingCartUuid: string, collectedEntityCreateSets: Proto.CollectedEntityCreateSets) : Promise<Proto.CollectedEntities>;

	/**
	* Creates a bulk collected entities in the user's shopping cart.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	collectedEntityCreateSets Information for creating a bulk of collected entities
	* @return	Promise<Proto.CollectedEntities>
	*/
	createCollectedEntitiesInCurrentShoppingCart(collectedEntityCreateSets: Proto.CollectedEntityCreateSets) : Promise<Proto.CollectedEntities>;

	/**
	* Updates an collected entity in a shopping cart.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	shoppingCartUuid The UUID of the shopping cart
	* @param	collectedEntityChangeSet Information for changing the collected entity
	* @return	Promise<Proto.CollectedEntity>
	*/
	updateCollectedEntityInShoppingCart(shoppingCartUuid: string, collectedEntityChangeSet: Proto.CollectedEntityChangeSet) : Promise<Proto.CollectedEntity>;

	/**
	* Updates an collected entity in the user's shopping cart.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	collectedEntityChangeSet Information for changing the collected entity
	* @return	Promise<Proto.CollectedEntity>
	*/
	updateCollectedEntityInCurrentShoppingCart(collectedEntityChangeSet: Proto.CollectedEntityChangeSet) : Promise<Proto.CollectedEntity>;

	/**
	* Updates a bulk of collected entities in a shopping cart.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	shoppingCartUuid The UUID of the shopping cart
	* @param	collectedEntityChangeSets Information for changing a bulk of collected entities
	* @return	Promise<Proto.CollectedEntities>
	*/
	updateCollectedEntitiesInShoppingCart(shoppingCartUuid: string, collectedEntityChangeSets: Proto.CollectedEntityChangeSets) : Promise<Proto.CollectedEntities>;

	/**
	* Updates a bulk of collected entities in the user's shopping cart.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	collectedEntityChangeSets Information for changing a bulk of collected entities
	* @return	Promise<Proto.CollectedEntities>
	*/
	updateCollectedEntitiesInCurrentShoppingCart(collectedEntityChangeSets: Proto.CollectedEntityChangeSets) : Promise<Proto.CollectedEntities>;

	/**
	* Deletes an collected entity from a shopping cart.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	shoppingCartUuid The UUID of the shopping cart
	* @param	collectedEntityDeleteSet Information for deleting the collected entity
	* @return	Promise<void>
	*/
	deleteCollectedEntityFromShoppingCart(shoppingCartUuid: string, collectedEntityDeleteSet: Proto.CollectedEntityDeleteSet) : Promise<null>;

	/**
	* Deletes an collected entity from the user's shopping cart.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	collectedEntityDeleteSet Information for deleting the collected entity
	* @return	Promise<void>
	*/
	deleteCollectedEntityFromCurrentShoppingCart(collectedEntityDeleteSet: Proto.CollectedEntityDeleteSet) : Promise<null>;

	/**
	* Deletes a bulk of collected entities from a shopping cart.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	shoppingCartUuid The UUID of the shopping cart
	* @param	collectedEntityDeleteSets Information for deleting a bulk of collected entities
	* @return	Promise<void>
	*/
	deleteCollectedEntitiesFromShoppingCart(shoppingCartUuid: string, collectedEntityDeleteSets: Proto.CollectedEntityDeleteSets) : Promise<null>;

	/**
	* Deletes a bulk of collected entities from the user's shopping cart.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	collectedEntityDeleteSets Information for deleting a bulk of collected entities
	* @return	Promise<void>
	*/
	deleteCollectedEntitiesFromCurrentShoppingCart(collectedEntityDeleteSets: Proto.CollectedEntityDeleteSets) : Promise<null>;

	/**
	* Gets a credit transaction of a brand.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @param	creditTransactionUuid The UUID of the credit transaction
	* @return	Promise<Proto.CreditTransaction>
	*/
	getCreditTransactionForBrand(brandUuid: string, creditTransactionUuid: string) : Promise<Proto.CreditTransaction>;

	/**
	* Gets all credit transactions for a brand. Please specify desired credit transaction types through query data.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @return	Promise<Proto.CreditTransactions>
	*/
	getCreditTransactionsForBrand(brandUuid: string) : Promise<Proto.CreditTransactions>;

	/**
	* Gets all credit transactions that belong to a certain credit transaction of a brand. Please specify desired credit transaction types through query data.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @param	parentCreditTransactionUuid The UUID of the parent credit transaction
	* @return	Promise<Proto.CreditTransactions>
	*/
	getSubCreditTransactionsForBrandCreditTransaction(brandUuid: string, parentCreditTransactionUuid: string) : Promise<Proto.CreditTransactions>;

	/**
	* Creates a task which will generate downloads associated to all credit transactions of a brand.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @param	creditTransactionCreateDownloadTaskSet Information for creating a download task for a credit transaction
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	createBrandCreditTransactionDownloadTask(brandUuid: string, creditTransactionCreateDownloadTaskSet: Proto.CreditTransactionCreateDownloadTaskSet) : Promise<Proto.ServerTaskResponse>;

	/**
	* Creates a task which will generate downloads associated to the selected credit transaction.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @param	creditTransactionCreateDownloadTaskSet Information for creating a download task for a credit transaction
	* @param	creditTransactionUuid The UUID of the credit transaction
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	createBrandCreditTransactionDownloadTaskForCreditTransaction(brandUuid: string, creditTransactionCreateDownloadTaskSet: Proto.CreditTransactionCreateDownloadTaskSet, creditTransactionUuid: string) : Promise<Proto.ServerTaskResponse>;

	/**
	* Gets metadata for an entity with given type and UUID.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	entityType The type of the entity
	* @param	entityUuid The UUID of the entity
	* @return	Promise<Proto.Entity>
	*/
	getEntity(entityType: Proto.EntityType, entityUuid: string) : Promise<Proto.Entity>;

	/**
	* Gets metadata for the child entities of an entity with given type and UUID.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	entityType The type of the entity
	* @param	entityUuid The UUID of the entity
	* @return	Promise<Proto.Entities>
	*/
	getChildEntities(entityType: Proto.EntityType, entityUuid: string) : Promise<Proto.Entities>;

	/**
	* Gets metadata for the child entities of an entity with given type and UUID. Uses the request body instead of the URL to specify query parameter data.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	entityType The type of the entity
	* @param	entityUuid The UUID of the entity
	* @param	queryData The query parameter data
	* @return	Promise<Proto.Entities>
	*/
	getChildEntitiesPost(entityType: Proto.EntityType, entityUuid: string, queryData: Proto.QueryData) : Promise<Proto.Entities>;

	/**
	* Creates a new entity with given type.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityType The type of the entity
	* @param	entityChangeSet Information for creating or updating an entity
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	createEntity(entityType: Proto.EntityType, entityChangeSet: Proto.EntityChangeSet) : Promise<Proto.ServerTaskResponse>;

	/**
	* Creates a new entity with given type, and uploads binaries that will be attached to the entity.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityType The type of the entity
	* @param	entityChangeSet Information for creating or updating an entity
	* @param	binaries List of binaries for upload. Please note that in entity metadata you have to give the metadata for the binaries you upload
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	createEntityWithBinaries(entityType: Proto.EntityType, entityChangeSet: Proto.EntityChangeSet, binaries: File[]) : Promise<Proto.ServerTaskResponse>;

	/**
	* Creates a bulk of new entities with given type.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityType The type of the entity
	* @param	entityChangeSets Information for creating or updating a bulk of entities
	* @return	Promise<Proto.ServerTaskResponses>
	*/
	createEntities(entityType: Proto.EntityType, entityChangeSets: Proto.EntityChangeSets) : Promise<Proto.ServerTaskResponses>;

	/**
	* Creates a bulk of new entities with mixed type.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityChangeSets Information for creating or updating a bulk of entities
	* @return	Promise<Proto.ServerTaskResponses>
	*/
	createEntitiesMixed(entityChangeSets: Proto.EntityChangeSets) : Promise<Proto.ServerTaskResponses>;

	/**
	* Updates an entity with given type and UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityType The type of the entity
	* @param	entityUuid The UUID of the entity
	* @param	entityChangeSet Information for creating or updating an entity
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	updateEntity(entityType: Proto.EntityType, entityUuid: string, entityChangeSet: Proto.EntityChangeSet) : Promise<Proto.ServerTaskResponse>;

	/**
	* Updates an entity with given type and UUID. Allows changing the metadata of binary uploads, and uploads binaries that will be attached to the entity.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityType The type of the entity
	* @param	entityUuid The UUID of the entity
	* @param	entityChangeSet Information for creating or updating an entity
	* @param	binaries List of binaries for upload. Please note that in entity metadata you have to give the metadata for the binaries you upload
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	updateEntityWithBinaries(entityType: Proto.EntityType, entityUuid: string, entityChangeSet: Proto.EntityChangeSet, binaries: File[]) : Promise<Proto.ServerTaskResponse>;

	/**
	* Updates a bulk of entities with given type.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityType The type of the entity
	* @param	entityChangeSets Information for creating or updating a bulk of entities
	* @return	Promise<Proto.ServerTaskResponses>
	*/
	updateEntities(entityType: Proto.EntityType, entityChangeSets: Proto.EntityChangeSets) : Promise<Proto.ServerTaskResponses>;

	/**
	* Updates a bulk of new entities with mixed type.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityChangeSets Information for creating or updating a bulk of entities
	* @return	Promise<Proto.ServerTaskResponses>
	*/
	updateEntitiesMixed(entityChangeSets: Proto.EntityChangeSets) : Promise<Proto.ServerTaskResponses>;

	/**
	* Deletes an entity with given type and UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityType The type of the entity
	* @param	entityUuid The UUID of the entity
	* @param	entityDeleteSet Information for deleting an entity
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	deleteEntity(entityType: Proto.EntityType, entityUuid: string, entityDeleteSet: Proto.EntityDeleteSet) : Promise<Proto.ServerTaskResponse>;

	/**
	* Deletes a bulk of entities with given type.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityType The type of the entity
	* @param	entityDeleteSets Information for deleting a bulk of entities
	* @return	Promise<Proto.ServerTaskResponses>
	*/
	deleteEntities(entityType: Proto.EntityType, entityDeleteSets: Proto.EntityDeleteSets) : Promise<Proto.ServerTaskResponses>;

	/**
	* Gets a list of all brands.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @return	Promise<Proto.Entities>
	*/
	getAllBrands() : Promise<Proto.Entities>;

	/**
	* Gets a list of all brands. Uses the request body instead of the URL to specify query parameter data.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	queryData The query parameter data
	* @return	Promise<Proto.Entities>
	*/
	getAllBrandsPost(queryData: Proto.QueryData) : Promise<Proto.Entities>;

	/**
	* Gets an brand entity with given UUID.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @return	Promise<Proto.Entity>
	*/
	getBrand(brandUuid: string) : Promise<Proto.Entity>;

	/**
	* Gets an brand entity with given subdomain.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandSubdomain The subdomain of the brand entity
	* @return	Promise<Proto.Entity>
	*/
	getBrandBySubdomain(brandSubdomain: string) : Promise<Proto.Entity>;

	/**
	* Gets metadata for the child entities of an brand entity with given UUID.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @return	Promise<Proto.Entities>
	*/
	getBrandChildEntities(brandUuid: string) : Promise<Proto.Entities>;

	/**
	* Gets metadata for the child entities of an brand entity with given UUID. Uses the request body instead of the URL to specify query parameter data.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @param	queryData The query parameter data
	* @return	Promise<Proto.Entities>
	*/
	getBrandChildEntitiesPost(brandUuid: string, queryData: Proto.QueryData) : Promise<Proto.Entities>;

	/**
	* Creates a new brand entity.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityChangeSet Information for creating or updating an entity
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	createBrand(entityChangeSet: Proto.EntityChangeSet) : Promise<Proto.ServerTaskResponse>;

	/**
	* Creates a new brand entity, and uploads binaries that will be attached to the brand entity.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityChangeSet Information for creating or updating an entity
	* @param	binaries List of binaries for upload. Please note that in entity metadata you have to give the metadata for the binaries you upload
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	createBrandWithBinaries(entityChangeSet: Proto.EntityChangeSet, binaries: File[]) : Promise<Proto.ServerTaskResponse>;

	/**
	* Updates an brand entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	brandUuid The UUID of the brand entity
	* @param	entityChangeSet Information for creating or updating an entity
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	updateBrand(brandUuid: string, entityChangeSet: Proto.EntityChangeSet) : Promise<Proto.ServerTaskResponse>;

	/**
	* Updates an brand entity with given UUID. Allows changing the metadata of binary uploads, and uploads binaries that will be attached to the entity.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityUuid The UUID of the entity
	* @param	entityChangeSet Information for creating or updating an entity
	* @param	binaries List of binaries for upload. Please note that in entity metadata you have to give the metadata for the binaries you upload
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	updateBrandWithBinaries(entityUuid: string, entityChangeSet: Proto.EntityChangeSet, binaries: File[]) : Promise<Proto.ServerTaskResponse>;

	/**
	* Gets an trash entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	trashUuid The UUID of the trash entity
	* @return	Promise<Proto.Entity>
	*/
	getTrash(trashUuid: string) : Promise<Proto.Entity>;

	/**
	* Gets metadata for the child entities of an trash entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	trashUuid The UUID of the trash entity
	* @return	Promise<Proto.Entities>
	*/
	getTrashChildEntities(trashUuid: string) : Promise<Proto.Entities>;

	/**
	* Gets metadata for the child entities of an trash entity with given UUID. Uses the request body instead of the URL to specify query parameter data.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	trashUuid The UUID of the trash entity
	* @param	queryData The query parameter data
	* @return	Promise<Proto.Entities>
	*/
	getTrashChildEntitiesPost(trashUuid: string, queryData: Proto.QueryData) : Promise<Proto.Entities>;

	/**
	* Restores an entity from the trash to its original location.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	trashUuid The UUID of the trash entity
	* @param	entityRestoreSet Information for restoring an entity
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	restoreEntity(trashUuid: string, entityRestoreSet: Proto.EntityRestoreSet) : Promise<Proto.ServerTaskResponse>;

	/**
	* Gets an folder entity with given UUID.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	folderUuid The UUID of the folder entity
	* @return	Promise<Proto.Entity>
	*/
	getFolder(folderUuid: string) : Promise<Proto.Entity>;

	/**
	* Gets metadata for the child entities of an folder entity with given UUID.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	folderUuid The UUID of the folder entity
	* @return	Promise<Proto.Entities>
	*/
	getFolderChildEntities(folderUuid: string) : Promise<Proto.Entities>;

	/**
	* Gets metadata for the child entities of an folder entity with given UUID. Uses the request body instead of the URL to specify query parameter data.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	folderUuid The UUID of the folder entity
	* @param	queryData The query parameter data
	* @return	Promise<Proto.Entities>
	*/
	getFolderChildEntitiesPost(folderUuid: string, queryData: Proto.QueryData) : Promise<Proto.Entities>;

	/**
	* Creates a new folder entity.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityChangeSet Information for creating or updating an entity
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	createFolder(entityChangeSet: Proto.EntityChangeSet) : Promise<Proto.ServerTaskResponse>;

	/**
	* Creates a new folder entity, and uploads binaries that will be attached to the folder entity.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityChangeSet Information for creating or updating an entity
	* @param	binaries List of binaries for upload. Please note that in entity metadata you have to give the metadata for the binaries you upload
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	createFolderWithBinaries(entityChangeSet: Proto.EntityChangeSet, binaries: File[]) : Promise<Proto.ServerTaskResponse>;

	/**
	* Updates an folder entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	folderUuid The UUID of the folder entity
	* @param	entityChangeSet Information for creating or updating an entity
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	updateFolder(folderUuid: string, entityChangeSet: Proto.EntityChangeSet) : Promise<Proto.ServerTaskResponse>;

	/**
	* Updates an folder entity with given UUID. Allows changing the metadata of binary uploads, and uploads binaries that will be attached to the entity.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityUuid The UUID of the entity
	* @param	entityChangeSet Information for creating or updating an entity
	* @param	binaries List of binaries for upload. Please note that in entity metadata you have to give the metadata for the binaries you upload
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	updateFolderWithBinaries(entityUuid: string, entityChangeSet: Proto.EntityChangeSet, binaries: File[]) : Promise<Proto.ServerTaskResponse>;

	/**
	* Deletes an folder entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	folderUuid The UUID of the folder entity
	* @param	entityDeleteSet Information for deleting an entity
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	deleteFolder(folderUuid: string, entityDeleteSet: Proto.EntityDeleteSet) : Promise<Proto.ServerTaskResponse>;

	/**
	* Gets an asset entity with given UUID.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	assetUuid The UUID of the asset entity
	* @return	Promise<Proto.Entity>
	*/
	getAsset(assetUuid: string) : Promise<Proto.Entity>;

	/**
	* Creates a new asset entity.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityChangeSet Information for creating or updating an entity
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	createAsset(entityChangeSet: Proto.EntityChangeSet) : Promise<Proto.ServerTaskResponse>;

	/**
	* Creates a new asset entity, and uploads binaries that will be attached to the asset entity.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityChangeSet Information for creating or updating an entity
	* @param	binaries List of binaries for upload. Please note that in entity metadata you have to give the metadata for the binaries you upload
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	createAssetWithBinaries(entityChangeSet: Proto.EntityChangeSet, binaries: File[]) : Promise<Proto.ServerTaskResponse>;

	/**
	* Updates an asset entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	assetUuid The UUID of the asset entity
	* @param	entityChangeSet Information for creating or updating an entity
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	updateAsset(assetUuid: string, entityChangeSet: Proto.EntityChangeSet) : Promise<Proto.ServerTaskResponse>;

	/**
	* Updates an asset entity with given UUID. Allows changing the metadata of binary uploads, and uploads binaries that will be attached to the entity.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityUuid The UUID of the entity
	* @param	entityChangeSet Information for creating or updating an entity
	* @param	binaries List of binaries for upload. Please note that in entity metadata you have to give the metadata for the binaries you upload
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	updateAssetWithBinaries(entityUuid: string, entityChangeSet: Proto.EntityChangeSet, binaries: File[]) : Promise<Proto.ServerTaskResponse>;

	/**
	* Deletes an asset entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	assetUuid The UUID of the asset entity
	* @param	entityDeleteSet Information for deleting an entity
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	deleteAsset(assetUuid: string, entityDeleteSet: Proto.EntityDeleteSet) : Promise<Proto.ServerTaskResponse>;

	/**
	* Gets an jobs entity with given UUID.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	jobsUuid The UUID of the jobs entity
	* @return	Promise<Proto.Entity>
	*/
	getJobs(jobsUuid: string) : Promise<Proto.Entity>;

	/**
	* Gets metadata for the child entities of an jobs entity with given UUID.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	jobsUuid The UUID of the jobs entity
	* @return	Promise<Proto.Entities>
	*/
	getJobsChildEntities(jobsUuid: string) : Promise<Proto.Entities>;

	/**
	* Gets metadata for the child entities of an jobs entity with given UUID. Uses the request body instead of the URL to specify query parameter data.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	jobsUuid The UUID of the jobs entity
	* @param	queryData The query parameter data
	* @return	Promise<Proto.Entities>
	*/
	getJobsChildEntitiesPost(jobsUuid: string, queryData: Proto.QueryData) : Promise<Proto.Entities>;

	/**
	* Updates an jobs entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	jobsUuid The UUID of the jobs entity
	* @param	entityChangeSet Information for creating or updating an entity
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	updateJobs(jobsUuid: string, entityChangeSet: Proto.EntityChangeSet) : Promise<Proto.ServerTaskResponse>;

	/**
	* Updates an jobs entity with given UUID. Allows changing the metadata of binary uploads, and uploads binaries that will be attached to the entity.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityUuid The UUID of the entity
	* @param	entityChangeSet Information for creating or updating an entity
	* @param	binaries List of binaries for upload. Please note that in entity metadata you have to give the metadata for the binaries you upload
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	updateJobsWithBinaries(entityUuid: string, entityChangeSet: Proto.EntityChangeSet, binaries: File[]) : Promise<Proto.ServerTaskResponse>;

	/**
	* Gets an job entity with given UUID.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	jobUuid The UUID of the job entity
	* @return	Promise<Proto.Entity>
	*/
	getJob(jobUuid: string) : Promise<Proto.Entity>;

	/**
	* Gets metadata for the child entities of an job entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	jobUuid The UUID of the job entity
	* @return	Promise<Proto.Entities>
	*/
	getJobChildEntities(jobUuid: string) : Promise<Proto.Entities>;

	/**
	* Gets metadata for the child entities of an job entity with given UUID. Uses the request body instead of the URL to specify query parameter data.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	jobUuid The UUID of the job entity
	* @param	queryData The query parameter data
	* @return	Promise<Proto.Entities>
	*/
	getJobChildEntitiesPost(jobUuid: string, queryData: Proto.QueryData) : Promise<Proto.Entities>;

	/**
	* Creates a new job entity.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityChangeSet Information for creating or updating an entity
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	createJob(entityChangeSet: Proto.EntityChangeSet) : Promise<Proto.ServerTaskResponse>;

	/**
	* Creates a new job entity, and uploads binaries that will be attached to the job entity.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityChangeSet Information for creating or updating an entity
	* @param	binaries List of binaries for upload. Please note that in entity metadata you have to give the metadata for the binaries you upload
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	createJobWithBinaries(entityChangeSet: Proto.EntityChangeSet, binaries: File[]) : Promise<Proto.ServerTaskResponse>;

	/**
	* Updates an job entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	jobUuid The UUID of the job entity
	* @param	entityChangeSet Information for creating or updating an entity
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	updateJob(jobUuid: string, entityChangeSet: Proto.EntityChangeSet) : Promise<Proto.ServerTaskResponse>;

	/**
	* Updates an job entity with given UUID. Allows changing the metadata of binary uploads, and uploads binaries that will be attached to the entity.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityUuid The UUID of the entity
	* @param	entityChangeSet Information for creating or updating an entity
	* @param	binaries List of binaries for upload. Please note that in entity metadata you have to give the metadata for the binaries you upload
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	updateJobWithBinaries(entityUuid: string, entityChangeSet: Proto.EntityChangeSet, binaries: File[]) : Promise<Proto.ServerTaskResponse>;

	/**
	* Deletes an job entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	jobUuid The UUID of the job entity
	* @param	entityDeleteSet Information for deleting an entity
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	deleteJob(jobUuid: string, entityDeleteSet: Proto.EntityDeleteSet) : Promise<Proto.ServerTaskResponse>;

	/**
	* Applies for participation in a job with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	jobUuid The UUID of the job entity
	* @param	jobApplicationSet Information for applying for participating in a job
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	applyForJob(jobUuid: string, jobApplicationSet: Proto.JobApplicationSet) : Promise<Proto.ServerTaskResponse>;

	/**
	* Participates in a job with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	jobUuid The UUID of the job entity
	* @param	jobParticipationSet Information for participating in a job
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	participateInJob(jobUuid: string, jobParticipationSet: Proto.JobParticipationSet) : Promise<Proto.ServerTaskResponse>;

	/**
	* Closes a job with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	jobUuid The UUID of the job entity
	* @param	jobCloseSet Information for closing a job
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	closeJob(jobUuid: string, jobCloseSet: Proto.JobCloseSet) : Promise<Proto.ServerTaskResponse>;

	/**
	* Gets an participations entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	participationsUuid The UUID of the participations entity
	* @return	Promise<Proto.Entity>
	*/
	getParticipations(participationsUuid: string) : Promise<Proto.Entity>;

	/**
	* Gets metadata for the child entities of an participations entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	participationsUuid The UUID of the participations entity
	* @return	Promise<Proto.Entities>
	*/
	getParticipationsChildEntities(participationsUuid: string) : Promise<Proto.Entities>;

	/**
	* Gets metadata for the child entities of an participations entity with given UUID. Uses the request body instead of the URL to specify query parameter data.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	participationsUuid The UUID of the participations entity
	* @param	queryData The query parameter data
	* @return	Promise<Proto.Entities>
	*/
	getParticipationsChildEntitiesPost(participationsUuid: string, queryData: Proto.QueryData) : Promise<Proto.Entities>;

	/**
	* Updates an participations entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	participationsUuid The UUID of the participations entity
	* @param	entityChangeSet Information for creating or updating an entity
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	updateParticipations(participationsUuid: string, entityChangeSet: Proto.EntityChangeSet) : Promise<Proto.ServerTaskResponse>;

	/**
	* Gets an participation entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	participationUuid The UUID of the participation entity
	* @return	Promise<Proto.Entity>
	*/
	getParticipation(participationUuid: string) : Promise<Proto.Entity>;

	/**
	* Gets metadata for the child entities of an participation entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	participationUuid The UUID of the participation entity
	* @return	Promise<Proto.Entities>
	*/
	getParticipationChildEntities(participationUuid: string) : Promise<Proto.Entities>;

	/**
	* Gets metadata for the child entities of an participation entity with given UUID. Uses the request body instead of the URL to specify query parameter data.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	participationUuid The UUID of the participation entity
	* @param	queryData The query parameter data
	* @return	Promise<Proto.Entities>
	*/
	getParticipationChildEntitiesPost(participationUuid: string, queryData: Proto.QueryData) : Promise<Proto.Entities>;

	/**
	* Updates an participation entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	participationUuid The UUID of the participation entity
	* @param	entityChangeSet Information for creating or updating an entity
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	updateParticipation(participationUuid: string, entityChangeSet: Proto.EntityChangeSet) : Promise<Proto.ServerTaskResponse>;

	/**
	* Deletes an participation entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	participationUuid The UUID of the participation entity
	* @param	entityDeleteSet Information for deleting an entity
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	deleteParticipation(participationUuid: string, entityDeleteSet: Proto.EntityDeleteSet) : Promise<Proto.ServerTaskResponse>;

	/**
	* Submits an participation entity with given UUID to the job issuer.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	participationUuid The UUID of the participation entity
	* @param	jobParticipationSubmitSet Information for submitting an participation entity to the job issuer
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	submitParticipation(participationUuid: string, jobParticipationSubmitSet: Proto.JobParticipationSubmitSet) : Promise<Proto.ServerTaskResponse>;

	/**
	* Rejects an participation entity with given UUID from the job issuer back to the participant.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	participationUuid The UUID of the participation entity
	* @param	jobParticipationRejectSet Information for rejecting an participation entity from the job issuer back to the participant
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	rejectParticipation(participationUuid: string, jobParticipationRejectSet: Proto.JobParticipationRejectSet) : Promise<Proto.ServerTaskResponse>;

	/**
	* Accepting an participation entity with given UUID for participation in the job.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	participationUuid The UUID of the participation entity
	* @param	jobApplicationAcceptSet Information for accepting an participation entity for participation in the job
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	acceptJobApplication(participationUuid: string, jobApplicationAcceptSet: Proto.JobApplicationAcceptSet) : Promise<Proto.ServerTaskResponse>;

	/**
	* Gets an projects entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	projectsUuid The UUID of the projects entity
	* @return	Promise<Proto.Entity>
	*/
	getProjects(projectsUuid: string) : Promise<Proto.Entity>;

	/**
	* Gets metadata for the child entities of an projects entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	projectsUuid The UUID of the projects entity
	* @return	Promise<Proto.Entities>
	*/
	getProjectsChildEntities(projectsUuid: string) : Promise<Proto.Entities>;

	/**
	* Gets metadata for the child entities of an projects entity with given UUID. Uses the request body instead of the URL to specify query parameter data.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	projectsUuid The UUID of the projects entity
	* @param	queryData The query parameter data
	* @return	Promise<Proto.Entities>
	*/
	getProjectsChildEntitiesPost(projectsUuid: string, queryData: Proto.QueryData) : Promise<Proto.Entities>;

	/**
	* Updates an projects entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	projectsUuid The UUID of the projects entity
	* @param	entityChangeSet Information for creating or updating an entity
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	updateProjects(projectsUuid: string, entityChangeSet: Proto.EntityChangeSet) : Promise<Proto.ServerTaskResponse>;

	/**
	* Gets an project entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	projectUuid The UUID of the project entity
	* @return	Promise<Proto.Entity>
	*/
	getProject(projectUuid: string) : Promise<Proto.Entity>;

	/**
	* Creates a new project entity.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityChangeSet Information for creating or updating an entity
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	createProject(entityChangeSet: Proto.EntityChangeSet) : Promise<Proto.ServerTaskResponse>;

	/**
	* Creates a new project entity, and uploads binaries that will be attached to the project entity.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityChangeSet Information for creating or updating an entity
	* @param	binaries List of binaries for upload. Please note that in entity metadata you have to give the metadata for the binaries you upload
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	createProjectWithBinaries(entityChangeSet: Proto.EntityChangeSet, binaries: File[]) : Promise<Proto.ServerTaskResponse>;

	/**
	* Updates an project entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	projectUuid The UUID of the project entity
	* @param	entityChangeSet Information for creating or updating an entity
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	updateProject(projectUuid: string, entityChangeSet: Proto.EntityChangeSet) : Promise<Proto.ServerTaskResponse>;

	/**
	* Updates an project entity with given UUID. Allows changing the metadata of binary uploads, and uploads binaries that will be attached to the entity.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityUuid The UUID of the entity
	* @param	entityChangeSet Information for creating or updating an entity
	* @param	binaries List of binaries for upload. Please note that in entity metadata you have to give the metadata for the binaries you upload
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	updateProjectWithBinaries(entityUuid: string, entityChangeSet: Proto.EntityChangeSet, binaries: File[]) : Promise<Proto.ServerTaskResponse>;

	/**
	* Deletes an project entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	projectUuid The UUID of the project entity
	* @param	entityDeleteSet Information for deleting an entity
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	deleteProject(projectUuid: string, entityDeleteSet: Proto.EntityDeleteSet) : Promise<Proto.ServerTaskResponse>;

	/**
	* Gets all brand's projects that are currently open for the user to collect entities to.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @return	Promise<Proto.Entities>
	*/
	getCollectableProjectsForBrand(brandUuid: string) : Promise<Proto.Entities>;

	/**
	* Gets all brand's projects that are currently open for the user to collect entities to. Uses the request body instead of the URL to specify query parameter data.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @param	queryData The query parameter data
	* @return	Promise<Proto.Entities>
	*/
	getCollectableProjectsForBrandPost(brandUuid: string, queryData: Proto.QueryData) : Promise<Proto.Entities>;

	/**
	* Searches the complete entity index based on filter criteria. The filter criteria is given through query parameter data.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @return	Promise<Proto.Entities>
	*/
	searchEntities() : Promise<Proto.Entities>;

	/**
	* Searches the complete entity index based on filter criteria. The filter criteria is given through query parameter data. Uses the request body instead of the URL to specify query parameter data.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	queryData The query parameter data
	* @return	Promise<Proto.Entities>
	*/
	searchEntitiesPost(queryData: Proto.QueryData) : Promise<Proto.Entities>;

	/**
	* Searches the child entities of an entity with given UUID based on filter criteria. The filter criteria is given through query parameter data.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	parentEntityUuid The UUID of the parent entity
	* @return	Promise<Proto.Entities>
	*/
	searchEntitiesWithinEntity(parentEntityUuid: string) : Promise<Proto.Entities>;

	/**
	* Searches the child entities of an entity with given UUID based on filter criteria. The filter criteria is given through query parameter data. Uses the request body instead of the URL to specify query parameter data.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	parentEntityUuid The UUID of the parent entity
	* @param	queryData The query parameter data
	* @return	Promise<Proto.Entities>
	*/
	searchEntitiesWithinEntityPost(parentEntityUuid: string, queryData: Proto.QueryData) : Promise<Proto.Entities>;

	/**
	* Takes user input and returns a list of matching user groups, users, brands or licenses. The input needs to be given in 'terms' query parameter, the types of entities can be specified in query data as well.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @return	Promise<Proto.AutocompletedEntities>
	*/
	searchAutocompletedEntities() : Promise<Proto.AutocompletedEntities>;

	/**
	* Takes user input and returns a list of matching user groups, users, brands or licenses. The input needs to be given in 'terms' query parameter, the types of entities can be specified in query data as well. Uses the request body instead of the URL to specify query parameter data.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	queryData The query parameter data
	* @return	Promise<Proto.AutocompletedEntities>
	*/
	searchAutocompletedEntitiesPost(queryData: Proto.QueryData) : Promise<Proto.AutocompletedEntities>;

	/**
	* Gets the licenses for a brand entity with given UUID.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @return	Promise<Proto.Licenses>
	*/
	getLicensesForBrand(brandUuid: string) : Promise<Proto.Licenses>;

	/**
	* Gets the licenses for a brand entity with given UUID. Uses the request body instead of the URL to specify query parameter data.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @param	queryData The query parameter data
	* @return	Promise<Proto.Licenses>
	*/
	getLicensesForBrandPost(brandUuid: string, queryData: Proto.QueryData) : Promise<Proto.Licenses>;

	/**
	* Gets a shopping cart.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	shoppingCartUuid The UUID of the shopping cart
	* @return	Promise<Proto.ShoppingCart>
	*/
	getShoppingCart(shoppingCartUuid: string) : Promise<Proto.ShoppingCart>;

	/**
	* Gets the user's shopping cart.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @return	Promise<Proto.ShoppingCart>
	*/
	getCurrentShoppingCart() : Promise<Proto.ShoppingCart>;

	/**
	* Submits the user's shopping cart to it's brand for purchase approval.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	shoppingCartSubmitToBrandSet Information for submitting a shopping cart to it's brand for purchase approval
	* @return	Promise<Proto.ShoppingCart>
	*/
	submitShoppingCartToBrand(shoppingCartSubmitToBrandSet: Proto.ShoppingCartSubmitToBrandSet) : Promise<Proto.ShoppingCart>;

	/**
	* Acquire all collected entities within a shopping cart.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	shoppingCartUuid The UUID of the shopping cart
	* @param	shoppingCartAcquireSet Information for acquiring all collected entities within a shopping cart
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	acquireShoppingCart(shoppingCartUuid: string, shoppingCartAcquireSet: Proto.ShoppingCartAcquireSet) : Promise<Proto.ServerTaskResponse>;

	/**
	* Reject the purchase approval for a shopping cart.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	shoppingCartUuid The UUID of the shopping cart
	* @param	shoppingCartRejectAcquisitionSet Information for rejecting the purchase approval for a shopping cart
	* @return	Promise<Proto.ShoppingCart>
	*/
	rejectShoppingCartAcquisition(shoppingCartUuid: string, shoppingCartRejectAcquisitionSet: Proto.ShoppingCartRejectAcquisitionSet) : Promise<Proto.ShoppingCart>;

	/**
	* Get an tag entity with given UUID.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	tagUuid The UUID of the tag entity
	* @return	Promise<Proto.Tag>
	*/
	getTag(tagUuid: string) : Promise<Proto.Tag>;

	/**
	* Creates a task which will generate downloads associated to an asset.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	assetUuid The UUID of the asset entity
	* @param	assetCreateDownloadTaskSet Information for creating a download task for an asset
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	createAssetDownloadTask(assetUuid: string, assetCreateDownloadTaskSet: Proto.AssetCreateDownloadTaskSet) : Promise<Proto.ServerTaskResponse>;

	/**
	* Gets user information for an user with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	userUuid The UUID of the user
	* @return	Promise<Proto.User>
	*/
	getUser(userUuid: string) : Promise<Proto.User>;

	/**
	* Gets the current user's information.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @return	Promise<Proto.User>
	*/
	getCurrentUser() : Promise<Proto.User>;

	/**
	* Gets all users for the end user group of a brand with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @param	endUserGroupUuid The UUID of the end user group
	* @return	Promise<Proto.Users>
	*/
	getUsersForEndUserGroup(brandUuid: string, endUserGroupUuid: string) : Promise<Proto.Users>;

	/**
	* Gets all users for the end user group of a brand with given UUID. Uses the request body instead of the URL to specify query parameter data.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @param	queryData The query parameter data
	* @param	endUserGroupUuid The UUID of the end user group
	* @return	Promise<Proto.Users>
	*/
	getUsersForEndUserGroupPost(brandUuid: string, queryData: Proto.QueryData, endUserGroupUuid: string) : Promise<Proto.Users>;

	/**
	* Gets all brands which are members of the end user group of a brand with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @param	endUserGroupUuid The UUID of the end user group
	* @return	Promise<Proto.Entities>
	*/
	getBrandsForEndUserGroup(brandUuid: string, endUserGroupUuid: string) : Promise<Proto.Entities>;

	/**
	* Gets all brands which are members of the end user group of a brand with given UUID. Uses the request body instead of the URL to specify query parameter data.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @param	queryData The query parameter data
	* @param	endUserGroupUuid The UUID of the end user group
	* @return	Promise<Proto.Entities>
	*/
	getBrandsForEndUserGroupPost(brandUuid: string, queryData: Proto.QueryData, endUserGroupUuid: string) : Promise<Proto.Entities>;

	/**
	* Gets all users for the admin user group of a brand with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @param	adminUserGroupUuid The UUID of the admin user group
	* @return	Promise<Proto.Users>
	*/
	getUsersForAdminUserGroup(brandUuid: string, adminUserGroupUuid: string) : Promise<Proto.Users>;

	/**
	* Gets all users for the admin user group of a brand with given UUID. Uses the request body instead of the URL to specify query parameter data.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @param	queryData The query parameter data
	* @param	adminUserGroupUuid The UUID of the admin user group
	* @return	Promise<Proto.Users>
	*/
	getUsersForAdminUserGroupPost(brandUuid: string, queryData: Proto.QueryData, adminUserGroupUuid: string) : Promise<Proto.Users>;

	/**
	* Gets an end user group entity with given UUID of a brand with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @param	endUserGroupUuid The UUID of the end user group
	* @return	Promise<Proto.UserGroup>
	*/
	getEndUserGroup(brandUuid: string, endUserGroupUuid: string) : Promise<Proto.UserGroup>;

	/**
	* Gets an end user group entity with given UUID of a brand with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method reads from our main read infrastructure. Data might be out of date by a few seconds.
	* Use of the main read infrastructure should be limited, prefer reading from the indexing infrastructure.
	*
	* @param	brandUuid The UUID of the brand entity
	* @param	endUserGroupUuid The UUID of the end user group
	* @return	Promise<Proto.UserGroup>
	*/
	getEndUserGroupRead(brandUuid: string, endUserGroupUuid: string) : Promise<Proto.UserGroup>;

	/**
	* Gets an admin user group entity with given UUID of a brand with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @param	adminUserGroupUuid The UUID of the admin user group
	* @return	Promise<Proto.UserGroup>
	*/
	getAdminUserGroup(brandUuid: string, adminUserGroupUuid: string) : Promise<Proto.UserGroup>;

	/**
	* Gets an admin user group entity with given UUID of a brand with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method reads from our main read infrastructure. Data might be out of date by a few seconds.
	* Use of the main read infrastructure should be limited, prefer reading from the indexing infrastructure.
	*
	* @param	brandUuid The UUID of the brand entity
	* @param	adminUserGroupUuid The UUID of the admin user group
	* @return	Promise<Proto.UserGroup>
	*/
	getAdminUserGroupRead(brandUuid: string, adminUserGroupUuid: string) : Promise<Proto.UserGroup>;

	/**
	* Updates an user.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	userUuid The UUID of the user
	* @param	userChangeSet Information for creating or updating an user within our main identity database
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	updateUser(userUuid: string, userChangeSet: Proto.UserChangeSet) : Promise<Proto.ServerTaskResponse>;

	/**
	* Reserves an user UUID within our main identity database. Requires extended permissions, please contact us to get more information.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	userReserveSet Information for reserving an user UUID within our main identity database
	* @return	Promise<Proto.User>
	*/
	reserveIdentityUser(userReserveSet: Proto.UserReserveSet) : Promise<Proto.User>;

	/**
	* Reserves a bulk of user UUIDs within our main identity database. Requires extended permissions, please contact us to get more information.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	userReserveSets Information for reserving a bulk of user UUIDs within our main identity database
	* @return	Promise<Proto.User>
	*/
	reserveIdentityUsers(userReserveSets: Proto.UserReserveSets) : Promise<Proto.User>;

	/**
	* Creates an user within our main identity database. Requires extended permissions, please contact us to get more information.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	userChangeSet Information for creating or updating an user within our main identity database
	* @return	Promise<Proto.User>
	*/
	createIdentityUser(userChangeSet: Proto.UserChangeSet) : Promise<Proto.User>;

	/**
	* Creates a bulk of users within our main identity database. Requires extended permissions, please contact us to get more information.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	userChangeSets Information for creating or updating a bulk of users within our main identity database
	* @return	Promise<Proto.Users>
	*/
	createIdentityUsers(userChangeSets: Proto.UserChangeSets) : Promise<Proto.Users>;

	/**
	* Updates an user within our main identity database. Requires extended permissions, please contact us to get more information.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	userUuid The UUID of the user
	* @param	userChangeSet Information for creating or updating an user within our main identity database
	* @return	Promise<Proto.User>
	*/
	updateIdentityUser(userUuid: string, userChangeSet: Proto.UserChangeSet) : Promise<Proto.User>;

	/**
	* Updates a bulk of users within our main identity database. Requires extended permissions, please contact us to get more information.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	userChangeSets Information for creating or updating a bulk of users within our main identity database
	* @return	Promise<Proto.Users>
	*/
	updateIdentityUsers(userChangeSets: Proto.UserChangeSets) : Promise<Proto.Users>;

	/**
	* Gets user information for an user with given UUID from our main identity database. Requires extended permissions, please contact us to get more information.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	userUuid The UUID of the user
	* @return	Promise<Proto.User>
	*/
	getIdentityUser(userUuid: string) : Promise<Proto.User>;

	/**
	* Gets the follow settings for the current user.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @return	Promise<Proto.UserFollowSettings>
	*/
	getUserFollowSettings() : Promise<Proto.UserFollowSettings>;

	/**
	* Creates a follow setting for the current user.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	userFollowSettingCreateSet Information for creating a follow setting for an user
	* @return	Promise<Proto.UserFollowSetting>
	*/
	createUserFollowSetting(userFollowSettingCreateSet: Proto.UserFollowSettingCreateSet) : Promise<Proto.UserFollowSetting>;

	/**
	* Deletes a follow setting with given UUID for the current user.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	userFollowSettingUuid The UUID of the user follow setting
	* @return	Promise<void>
	*/
	deleteUserFollowSetting(userFollowSettingUuid: string) : Promise<null>;

	/**
	* Gets all end user groups for a brand with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @return	Promise<Proto.UserGroups>
	*/
	getEndUserGroupsForBrand(brandUuid: string) : Promise<Proto.UserGroups>;

	/**
	* Gets all end user groups for a brand with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method reads from our main read infrastructure. Data might be out of date by a few seconds.
	* Use of the main read infrastructure should be limited, prefer reading from the indexing infrastructure.
	*
	* @param	brandUuid The UUID of the brand entity
	* @return	Promise<Proto.UserGroups>
	*/
	getEndUserGroupsForBrandRead(brandUuid: string) : Promise<Proto.UserGroups>;

	/**
	* Gets all end user groups for a brand with given UUID. Uses the request body instead of the URL to specify query parameter data.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @param	queryData The query parameter data
	* @return	Promise<Proto.UserGroups>
	*/
	getEndUserGroupsForBrandPost(brandUuid: string, queryData: Proto.QueryData) : Promise<Proto.UserGroups>;

	/**
	* Gets all admin user groups for a brand with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @return	Promise<Proto.UserGroups>
	*/
	getAdminUserGroupsForBrand(brandUuid: string) : Promise<Proto.UserGroups>;

	/**
	* Gets all admin user groups for a brand with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method reads from our main read infrastructure. Data might be out of date by a few seconds.
	* Use of the main read infrastructure should be limited, prefer reading from the indexing infrastructure.
	*
	* @param	brandUuid The UUID of the brand entity
	* @return	Promise<Proto.UserGroups>
	*/
	getAdminUserGroupsForBrandRead(brandUuid: string) : Promise<Proto.UserGroups>;

	/**
	* Gets all admin user groups for a brand with given UUID. Uses the request body instead of the URL to specify query parameter data.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @param	queryData The query parameter data
	* @return	Promise<Proto.UserGroups>
	*/
	getAdminUserGroupsForBrandPost(brandUuid: string, queryData: Proto.QueryData) : Promise<Proto.UserGroups>;

	/**
	* Gets the current user's settings.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @return	Promise<Proto.UserSetting>
	*/
	getUserSetting() : Promise<Proto.UserSetting>;

	/**
	* Updates the current user's settings.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	userSettingChangeSet Information for updating the current user's settings
	* @return	Promise<Proto.UserSetting>
	*/
	updateUserSetting(userSettingChangeSet: Proto.UserSettingChangeSet) : Promise<Proto.UserSetting>;

	/**
	* Gets history event data for a record.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	historySelectSet Specify record type and record UUID of the record you want to get history events for. Request interactive data (e.g. messages) by setting the requestInteractive flag
	* @return	Promise<Proto.HistoryEvents>
	*/
	getHistoryEvents(historySelectSet: Proto.HistorySelectSet) : Promise<Proto.HistoryEvents>;

	/**
	* Gets the cost calculation for performing a credit balance change of a brand. Does not modify any data.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @param	creditBalanceChangeSet Information about the credit balance change
	* @return	Promise<Proto.CreditTransactionCostCalculation>
	*/
	getCreditBalanceCostCalculation(brandUuid: string, creditBalanceChangeSet: Proto.CreditBalanceChangeSet) : Promise<Proto.CreditTransactionCostCalculation>;

	/**
	* Updates the credit balance of a brand, and returns the resulting credit transactions.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @param	creditBalanceChangeSet Information about the credit balance change
	* @return	Promise<Proto.CreditTransactions>
	*/
	updateCreditBalance(brandUuid: string, creditBalanceChangeSet: Proto.CreditBalanceChangeSet) : Promise<Proto.CreditTransactions>;

	/**
	* Sends contents of a contact form to the brand.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @param	contactFormSendSet Information about the contact form contents
	* @return	Promise<void>
	*/
	sendContactForm(brandUuid: string, contactFormSendSet: Proto.ContactFormSendSet) : Promise<null>;

	/**
	* Gets all notifications for a brand.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @return	Promise<Proto.Notifications>
	*/
	getNotificationsForBrand(brandUuid: string) : Promise<Proto.Notifications>;

	/**
	* Starts set up of an external content provider for a brand.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @param	externalContentProviderSetupSet Information about which external content provider to set up
	* @param	providerId The ID of the external content provider
	* @return	Promise<Proto.ExternalContentProviderSetup>
	*/
	setupExternalContentProvider(brandUuid: string, externalContentProviderSetupSet: Proto.ExternalContentProviderSetupSet, providerId: Proto.ExternalContentProvider) : Promise<Proto.ExternalContentProviderSetup>;

	/**
	* Configures a external content provider for a brand.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @param	externalContentProviderConfigureSet Configuration data for the external content provider to set up
	* @param	providerId The ID of the external content provider
	* @return	Promise<Proto.ExternalContentProviderConfiguration>
	*/
	configureExternalContentProvider(brandUuid: string, externalContentProviderConfigureSet: Proto.ExternalContentProviderConfigureSet, providerId: Proto.ExternalContentProvider) : Promise<Proto.ExternalContentProviderConfiguration>;

	/**
	* Updates a external content provider for a brand.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @param	externalContentProviderConfigurationChangeSet Configuration data for the external content provider to change
	* @param	providerId The ID of the external content provider
	* @return	Promise<Proto.ExternalContentProviderConfiguration>
	*/
	updateExternalContentProviderConfiguration(brandUuid: string, externalContentProviderConfigurationChangeSet: Proto.ExternalContentProviderConfigurationChangeSet, providerId: Proto.ExternalContentProvider) : Promise<Proto.ExternalContentProviderConfiguration>;

	/**
	* Refreshes a external content provider for a brand.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @param	externalContentProviderRefreshSet Refresh information for the external content provider to refresh
	* @param	providerId The ID of the external content provider
	* @return	Promise<Proto.ExternalContentProviderConfiguration>
	*/
	refreshExternalContentProviderConfiguration(brandUuid: string, externalContentProviderRefreshSet: Proto.ExternalContentProviderRefreshSet, providerId: Proto.ExternalContentProvider) : Promise<Proto.ExternalContentProviderConfiguration>;

	/**
	* Gets all external content provider data for a brand.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @return	Promise<Proto.ExternalContentProviderConfigurations>
	*/
	getExternalContentProviderConfigurations(brandUuid: string) : Promise<Proto.ExternalContentProviderConfigurations>;

	/**
	* Gets all products for an external content provider for a brand.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @param	providerId The ID of the external content provider
	* @return	Promise<Proto.ExternalContentProviderProducts>
	*/
	getExternalContentProviderProducts(brandUuid: string, providerId: Proto.ExternalContentProvider) : Promise<Proto.ExternalContentProviderProducts>;

	/**
	* Used to test a transport error contidion.
	*
	* This method supports anonymous invocation.
	*
	* @return	Promise<void>
	*/
	testTransportError() : Promise<null>;

}