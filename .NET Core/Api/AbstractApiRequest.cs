using com.contidio.sdk.proto;
using Contidio.Sdk.Exceptions;
using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Encodings.Web;
using System.Threading;
using System.Threading.Tasks;

namespace Contidio.Sdk.Api
{
    public abstract class AbstractApiRequest<TRequestType>
        where TRequestType : AbstractApiRequest<TRequestType>
    {
        public ApiClient ApiClient;
        
        public bool Anonymous { get; private set; }
        public long Flags { get; private set; }
        public string AppendToUrl { get; private set; }       
        
        public QueryData QueryData { get; private set; }

        private string _brandUuid;
        
        public string TransactionUuid { get; private set; }

        internal AbstractApiRequest(ApiClient apiClient, string brandUuid)
        {
            ApiClient = apiClient;

            Anonymous = false;
            Flags = 0;
            AppendToUrl = null;

            _brandUuid = brandUuid;

            TransactionUuid = Guid.NewGuid().ToString();
        }

        public TRequestType SetTransactionUuid(string transactionUuid)
        {
            TransactionUuid = transactionUuid;

            return (TRequestType) this;
        }

        public TRequestType SetFlags(long flags)
        {
            Flags = flags;

            return (TRequestType) this;
        }

        public TRequestType SetAppendToUrl(string appendToUrl)
        {
            AppendToUrl = appendToUrl;

            return (TRequestType) this;
        }

        public TRequestType SetAnonymous()
        {
            Anonymous = true;

            return (TRequestType) this;
        }

        public TRequestType SetQueryData(QueryData queryData)
        {
            QueryData = queryData;

            return (TRequestType) this;
        }

        protected string ReplaceUuid(string finalApiPath, string uuid)
        {
            if (!string.IsNullOrEmpty(uuid))
                finalApiPath = finalApiPath.Replace(":id", uuid);

            return finalApiPath;
        }

        protected string ReplaceUserGroupUuid(string finalApiPath, string userGroupUuid)
        {
            if (!string.IsNullOrEmpty(userGroupUuid))
                finalApiPath = finalApiPath.Replace(":groupId", userGroupUuid);

            return finalApiPath;
        }

        protected string ReplaceLicenseUuid(string finalApiPath, string licenseUuid)
        {
            if (!string.IsNullOrEmpty(licenseUuid))
                finalApiPath = finalApiPath.Replace(":licenseId", licenseUuid);

            return finalApiPath;
        }

        protected string ReplaceCollectedEntityUuid(string finalApiPath, string collectedEntityUuid)
        {
            if (!string.IsNullOrEmpty(collectedEntityUuid))
                finalApiPath = finalApiPath.Replace(":collectedEntityId", collectedEntityUuid);

            return finalApiPath;
        }

        protected string ReplaceProjectUuid(string finalApiPath, string projectUuid)
        {
            if (!string.IsNullOrEmpty(projectUuid))
                finalApiPath = finalApiPath.Replace(":projectId", projectUuid);

            return finalApiPath;
        }

        protected string ReplaceShoppingCartUuid(string finalApiPath, string shoppingCartUuid)
        {
            if (!string.IsNullOrEmpty(shoppingCartUuid))
                finalApiPath = finalApiPath.Replace(":shoppingCartId", shoppingCartUuid);

            return finalApiPath;
        }

        protected string ReplaceCreditTransactionUuid(string finalApiPath, string creditTransactionUuid)
        {
            if (!string.IsNullOrEmpty(creditTransactionUuid))
                finalApiPath = finalApiPath.Replace(":creditTransactionId", creditTransactionUuid);

            return finalApiPath;
        }

        protected string ReplaceProviderId(string finalApiPath, ExternalContentProvider provider)
        {            
            finalApiPath = finalApiPath.Replace(":providerId", Convert.ToString((int)provider));

            return finalApiPath;
        }

        protected string ReplaceProductId(string finalApiPath, string productId)
        {
            if (!string.IsNullOrEmpty(productId))
                finalApiPath = finalApiPath.Replace(":productId", productId);

            return finalApiPath;
        }

        private void PutAnonymous(StringBuilder apiUrl, bool supportsAnonymous)
        {
            if (Anonymous || string.IsNullOrEmpty(ApiClient.GetBearerToken()))
            {
                if (supportsAnonymous)
                    apiUrl.Append(ApiConstants.ANONYMOUS_ACCESS_SUFFIX);
                else
                    throw new InternalErrorBackendException("This API supports no anonymous invocation");
            }
        }

        private void PutGetParameter(StringBuilder apiPath, string getParameterName, string value)
        {
            if (!string.IsNullOrEmpty(value))
                apiPath.Append("&").Append(getParameterName).Append("=").Append(UrlEncoder.Default.Encode(value));
        }

        private void PutGetParameter(StringBuilder apiPath, string getParameterName, int value)
        {
            PutGetParameter(apiPath, getParameterName, Convert.ToString(value));
        }

        private void PutGetParameter(StringBuilder apiPath, string getParameterName, long value)
        {
            PutGetParameter(apiPath, getParameterName, Convert.ToString(value));
        }

        private void PutGetParameter(StringBuilder apiPath, string getParameterName, bool value)
        {
            PutGetParameter(apiPath, getParameterName, value ? "1" : "0");
        }

        private string BuildEnumValue<T>(IEnumerable<T> values) where T : IConvertible
        {
            StringBuilder enumBuilder = new StringBuilder();            

            bool isFirst = true;

            foreach (T value in values)
            {
                if (isFirst)
                    enumBuilder.Append(Convert.ToInt32(value));
                else
                    enumBuilder.Append(",").Append(Convert.ToInt32(value));

                isFirst = false;
            }

            return enumBuilder.ToString();
        }

        private string BuildStringValue(IList<string> values)
        {
            StringBuilder enumBuilder = new StringBuilder();

            bool isFirst = true;

            foreach (string value in values)
            {
                if (isFirst)
                    enumBuilder.Append(UrlEncoder.Default.Encode(value));
                else
                    enumBuilder.Append(",").Append(UrlEncoder.Default.Encode(value));

                isFirst = false;
            }
            
            return enumBuilder.ToString();
        }

        private void PutEnumListGetParameter<T>(StringBuilder apiPath, string getParameterName, IEnumerable<T> values) where T : IConvertible
        {
            PutGetParameter(apiPath, getParameterName, BuildEnumValue(values));
        }

        private void PutStringListGetParameter(StringBuilder apiPath, string getParameterName, IList<String> values)
        {
            PutGetParameter(apiPath, getParameterName, BuildStringValue(values));
        }

        private void PutFlags(StringBuilder apiUrl)
        {
            apiUrl.Append("?").Append(ApiConstants.GET_PARAMETER_INCLUSION_FLAGS).Append("=").Append(Flags);            
        }

        private void PutAppendToUrl(StringBuilder apiUrl)
        {
            if (!string.IsNullOrEmpty(AppendToUrl))
                apiUrl.Append("&").Append(AppendToUrl);            
        }

        private void PutQueryData(StringBuilder apiPath)
        {
            if (QueryData != null)
            {
                if (QueryData.HasStartIndex)
                    PutGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_START_INDEX, QueryData.StartIndex);

                if (QueryData.HasCount)
                    PutGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_COUNT, QueryData.Count);

                if (QueryData.HasOrderBy)
                    PutGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_ORDER_BY, Convert.ToInt32(QueryData.OrderBy));

                if (QueryData.HasOrderDirection)
                    PutGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_ORDER_DIRECTION, Convert.ToInt32(QueryData.OrderDirection));

                if (QueryData.HasPublishingState)
                    PutGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_PUBLISHING_STATE, Convert.ToInt32(QueryData.PublishingState));

                if (QueryData.HasTerms)
                    PutGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_TERMS, QueryData.Terms);

                if (QueryData.HasTermsAnd)
                    PutGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_TERMS_AND, QueryData.TermsAnd);

                if (QueryData.HasRecursive)
                    PutGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_RECURSIVE, QueryData.Recursive);

                if (QueryData.HasLocale)
                    PutGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_LOCALE, QueryData.Locale);

                if (QueryData.TypeCount > 0)
                    PutEnumListGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_TYPES, QueryData.TypeList);

                if (QueryData.BinaryTypeCount > 0)
                    PutEnumListGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_BINARY_TYPES, QueryData.BinaryTypeList);

                if (QueryData.LocalesCount > 0)
                    PutStringListGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_LOCALES, QueryData.LocalesList);

                if (QueryData.DimensionCount > 0)
                    PutEnumListGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_DIMENSIONS, QueryData.DimensionList);

                if (QueryData.HasUploaded)
                    PutGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_UPLOADED, Convert.ToInt32(QueryData.Uploaded));

                if (QueryData.OrientationCount > 0)
                    PutEnumListGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_ORIENTATIONS, QueryData.OrientationList);

                if (QueryData.VideoFormatCount > 0)
                    PutEnumListGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_VIDEO_FORMATS, QueryData.VideoFormatList);

                if (QueryData.VideoAspectRatioCount > 0)
                    PutEnumListGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_VIDEO_ASPECT_RATIOS, QueryData.VideoAspectRatioList);

                if (QueryData.DurationCount > 0)
                    PutEnumListGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_DURATIONS, QueryData.DurationList);

                if (QueryData.PageCountCount > 0)
                    PutEnumListGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_PAGE_COUNTS, QueryData.PageCountList);

                if (QueryData.HasSource)
                    PutGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_SOURCE, Convert.ToInt32(QueryData.Source));

                if (QueryData.LicenseIdCount > 0)
                    PutStringListGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_LICENSE_IDS, QueryData.LicenseIdList);

                if (QueryData.MultiParentIdCount > 0)
                    PutStringListGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_MULTI_PARENT_IDS, QueryData.MultiParentIdList);

                if (QueryData.HasIncludeContidio)
                    PutGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_INCLUDE_CONTIDIO, QueryData.IncludeContidio);

                if (QueryData.ProjectStateCount > 0)
                    PutEnumListGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_PROJECT_STATES, QueryData.ProjectStateList);

                if (QueryData.CreditTransactionTypeCount > 0)
                    PutEnumListGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_CREDIT_TRANSACTION_TYPES, QueryData.CreditTransactionTypeList);

                if (QueryData.HasFromCreatedTimestamp)
                    PutGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_FROM_CREATED_TIMESTAMP, QueryData.FromCreatedTimestamp);

                if (QueryData.HasToCreatedTimestamp)
                    PutGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_TO_CREATED_TIMESTAMP, QueryData.ToCreatedTimestamp);

                if (QueryData.HasFromLastUpdatedTimestamp)
                    PutGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_FROM_LAST_UPDATED_TIMESTAMP, QueryData.FromLastUpdatedTimestamp);

                if (QueryData.HasToLastUpdatedTimestamp)
                    PutGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_TO_LAST_UPDATED_TIMESTAMP, QueryData.ToLastUpdatedTimestamp);

                if (QueryData.HasFromLastCommittedTimestamp)
                    PutGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_FROM_LAST_COMMITTED_TIMESTAMP, QueryData.FromLastCommittedTimestamp);

                if (QueryData.HasToLastCommittedTimestamp)
                    PutGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_TO_LAST_COMMITTED_TIMESTAMP, QueryData.ToLastCommittedTimestamp);

                if (QueryData.AutocompletedEntityTypeCount > 0)
                    PutEnumListGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_AUTOCOMPLETED_ENTITY_TYPES, QueryData.AutocompletedEntityTypeList);

                if (QueryData.BrandTypeCount > 0)
                    PutEnumListGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_BRAND_TYPES, QueryData.BrandTypeList);

                if (QueryData.AssetTypeCount > 0)
                    PutEnumListGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_ASSET_TYPES, QueryData.AssetTypeList);

                if (QueryData.JobTypeCount > 0)
                    PutEnumListGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_JOB_TYPES, QueryData.JobTypeList);

                if (QueryData.JobStateCount > 0)
                    PutEnumListGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_JOB_STATES, QueryData.JobStateList);

                if (QueryData.ParticipationStateCount > 0)
                    PutEnumListGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_PARTICIPATION_STATES, QueryData.ParticipationStateList);

                if (QueryData.NotificationTypeCount > 0)
                    PutEnumListGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_NOTIFICATION_TYPES, QueryData.NotificationTypeList);

                if (QueryData.NotificationStateCount > 0)
                    PutEnumListGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_NOTIFICATION_STATES, QueryData.NotificationStateList);

                if (QueryData.ContentCategoryCount > 0)
                    PutEnumListGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_CONTENT_CATEGORIES, QueryData.ContentCategoryList);

                if (QueryData.ReviewStateCount > 0)
                    PutEnumListGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_REVIEW_STATES, QueryData.ReviewStateList);

                if (QueryData.HasIncludeInactive)
                    PutGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_INCLUDE_INACTIVE, QueryData.IncludeInactive);
            }
        }        

        protected void PutAnonymousFlagsAppendToUrl(StringBuilder apiUrl, bool supportsAnonymous)
        {
            PutAnonymous(apiUrl, supportsAnonymous);
            PutFlags(apiUrl);
            PutAppendToUrl(apiUrl);
            PutQueryData(apiUrl);
        }

        protected virtual string BuildApiUrl(string originalApiPath, string uuid, bool supportsAnonymous)
        {
            originalApiPath = ReplaceUuid(originalApiPath, uuid);

            StringBuilder apiPath = new StringBuilder(originalApiPath);
            PutAnonymousFlagsAppendToUrl(apiPath, supportsAnonymous);

            string resultApiPath = apiPath.ToString();

            if (resultApiPath.Contains("/:"))
                throw new InternalErrorBackendException("API path contains unresolved parameter");

            return resultApiPath;
        }

        protected async Task<byte[]> ProcessAsync(bool apiManagement, ApiEndpoint apiEndpoint, string apiPath, string uuid, byte[] inputGpb, 
            string[] binaries, ApiClient.Method method, bool supportsAnonymous, CancellationToken? cancellationToken = null)
        {
            string apiUrl = BuildApiUrl(apiPath, uuid, supportsAnonymous);

            byte[] result = await ApiClient.ProcessAsync(apiManagement, apiEndpoint, _brandUuid, TransactionUuid,
                apiUrl, inputGpb, binaries, method, cancellationToken)
                .ConfigureAwait(false);

            return result;
        }

        public Entity GetEntity(byte[] result)
        {
            return Entity.ParseFrom(result);
        }

        public Entities GetEntities(byte[] result)
        {
            return Entities.ParseFrom(result);
        }        

        public Tag GetTag(byte[] result)
        {
            return Tag.ParseFrom(result);
        }

        public Tags GetTags(byte[] result)
        {
            return Tags.ParseFrom(result);
        }
        
        public User GetUser(byte[] result)
        {
            return User.ParseFrom(result);
        }

        public Users GetUsers(byte[] result)
        {
            return Users.ParseFrom(result);
        }

        public UserGroup GetUserGroup(byte[] result)
        {
            return UserGroup.ParseFrom(result);
        }

        public UserGroups GetUserGroups(byte[] result)
        {
            return UserGroups.ParseFrom(result);
        }

        public Licenses GetLicenses(byte[] result)
        {
            return Licenses.ParseFrom(result);
        }

        public UserSetting GetUserSetting(byte[] result)
        {
            return UserSetting.ParseFrom(result);
        }

        public LicenseRequest GetLicenseRequest(byte[] result)
        {
            return LicenseRequest.ParseFrom(result);
        }

        public LicenseRequests GetLicenseRequests(byte[] result)
        {
            return LicenseRequests.ParseFrom(result);
        }

        public AccessRequest GetAccessRequest(byte[] result)
        {
            return AccessRequest.ParseFrom(result);
        }

        public AccessRequests GetAccessRequests(byte[] result)
        {
            return AccessRequests.ParseFrom(result);
        }

        public JoinRequest GetJoinRequest(byte[] result)
        {
            return JoinRequest.ParseFrom(result);
        }

        public JoinRequests GetJoinRequests(byte[] result)
        {
            return JoinRequests.ParseFrom(result);
        }

        public PublishRequest GetPublishRequest(byte[] result)
        {
            return PublishRequest.ParseFrom(result);
        }

        public PublishRequests GetPublishRequests(byte[] result)
        {
            return PublishRequests.ParseFrom(result);
        }

        public PurchaseCreditsRequest GetPurchaseCreditsRequest(byte[] result)
        {
            return PurchaseCreditsRequest.ParseFrom(result);
        }

        public PurchaseCreditsRequests GetPurchaseCreditsRequests(byte[] result)
        {
            return PurchaseCreditsRequests.ParseFrom(result);
        }

        public UpgradePlanRequest GetUpgradePlanRequest(byte[] result)
        {
            return UpgradePlanRequest.ParseFrom(result);
        }

        public UpgradePlanRequests GetUpgradePlanRequests(byte[] result)
        {
            return UpgradePlanRequests.ParseFrom(result);
        }

        public ApprovalRequest GetApprovalRequest(byte[] result)
        {
            return ApprovalRequest.ParseFrom(result);
        }

        public ApprovalRequests GetApprovalRequests(byte[] result)
        {
            return ApprovalRequests.ParseFrom(result);
        }

        public CollectedEntity GetCollectedEntity(byte[] result)
        {
            return CollectedEntity.ParseFrom(result);
        }

        public CollectedEntities GetCollectedEntities(byte[] result)
        {
            return CollectedEntities.ParseFrom(result);
        }

        public ShoppingCart GetShoppingCart(byte[] result)
        {
            return ShoppingCart.ParseFrom(result);
        }

        public ShoppingCarts GetShoppingCarts(byte[] result)
        {
            return ShoppingCarts.ParseFrom(result);
        }

        public CreditTransaction GetCreditTransaction(byte[] result)
        {
            return CreditTransaction.ParseFrom(result);
        }

        public CreditTransactionCostCalculation GetCreditTransactionCostCalculation(byte[] result)
        {
            return CreditTransactionCostCalculation.ParseFrom(result);
        }

        public CreditTransactions GetCreditTransactions(byte[] result)
        {
            return CreditTransactions.ParseFrom(result);
        }

        public UserFollowSetting GetUserFollowSetting(byte[] result)
        {
            return UserFollowSetting.ParseFrom(result);
        }

        public UserFollowSettings GetUserFollowSettings(byte[] result)
        {
            return UserFollowSettings.ParseFrom(result);
        }

        public HistoryEvents GetHistoryEvents(byte[] result)
        {
            return HistoryEvents.ParseFrom(result);
        }

        public AutocompletedEntities GetAutocompletedEntities(byte[] result)
        {
            return AutocompletedEntities.ParseFrom(result);
        }

        public ServerTaskResponse GetServerTaskResponse(byte[] result)
        {
            return ServerTaskResponse.ParseFrom(result);
        }

        public ServerTaskResponses GetServerTaskResponses(byte[] result)
        {
            return ServerTaskResponses.ParseFrom(result);
        }

        public Notifications GetNotifications(byte[] result)
        {
            return Notifications.ParseFrom(result);
        }

        public ExternalContentProviderConfiguration GetExternalContentProviderConfiguration(byte[] result)
        {
            return ExternalContentProviderConfiguration.ParseFrom(result);
        }

        public ExternalContentProviderConfigurations GetExternalContentProviderConfigurations(byte[] result)
        {
            return ExternalContentProviderConfigurations.ParseFrom(result);
        }

        public ExternalContentProviderSetup GetExternalContentProviderSetup(byte[] result)
        {
            return ExternalContentProviderSetup.ParseFrom(result);
        }

        public ExternalContentProviderProduct GetExternalContentProviderProduct(byte[] result)
        {
            return ExternalContentProviderProduct.ParseFrom(result);
        }

        public ExternalContentProviderProducts GetExternalContentProviderProducts(byte[] result)
        {
            return ExternalContentProviderProducts.ParseFrom(result);
        }

        protected string GetNonUuidApiPath(EntityType entityType)
        {
            return GetNonUuidApiPath(entityType, null);
        }

        protected string GetNonUuidApiPath(EntityType entityType, string suffix)
        {
            string apiPath = null;

            switch (entityType)
            {
                case EntityType.BRAND:
                    apiPath = ApiConstants.BRAND_API_PATH;
                    break;
                case EntityType.FOLDER:
                    apiPath = ApiConstants.FOLDER_API_PATH;
                    break;
                case EntityType.ASSET:
                    apiPath = ApiConstants.ASSET_API_PATH;
                    break;
                case EntityType.TRASH:
                    apiPath = ApiConstants.TRASH_API_PATH;
                    break;
                case EntityType.JOBS:
                    apiPath = ApiConstants.JOBS_API_PATH;
                    break;
                case EntityType.JOB:
                    apiPath = ApiConstants.JOB_API_PATH;
                    break;
                case EntityType.PARTICIPATIONS:
                    apiPath = ApiConstants.PARTICIPATIONS_API_PATH;
                    break;
                case EntityType.PARTICIPATION:
                    apiPath = ApiConstants.PARTICIPATION_API_PATH;
                    break;
                case EntityType.PROJECTS:
                    apiPath = ApiConstants.PROJECTS_API_PATH;
                    break;
                case EntityType.PROJECT:
                    apiPath = ApiConstants.PROJECT_API_PATH;
                    break;
                default:
                    throw new InternalErrorBackendException("This entity type is not supported");
            }

            return apiPath + (!string.IsNullOrEmpty(suffix) ? suffix : "");
        }

        protected string GetUuidApiPath(EntityType entityType)
        {
            return GetUuidApiPath(entityType, null);
        }

        protected string GetUuidApiPath(EntityType entityType, string suffix)
        { 
            string apiPath = null;

            switch (entityType)
            {
                case EntityType.BRAND:
                    apiPath = ApiConstants.BRAND_API_ID_PATH;
                    break;
                case EntityType.FOLDER:
                    apiPath = ApiConstants.FOLDER_API_ID_PATH;
                    break;
                case EntityType.ASSET:
                    apiPath = ApiConstants.ASSET_API_ID_PATH;
                    break;
                case EntityType.TRASH:
                    apiPath = ApiConstants.TRASH_API_ID_PATH;
                    break;
                case EntityType.JOBS:
                    apiPath = ApiConstants.JOBS_API_ID_PATH;
                    break;
                case EntityType.JOB:
                    apiPath = ApiConstants.JOB_API_ID_PATH;
                    break;
                case EntityType.PARTICIPATIONS:
                    apiPath = ApiConstants.PARTICIPATIONS_API_ID_PATH;
                    break;
                case EntityType.PARTICIPATION:
                    apiPath = ApiConstants.PARTICIPATION_API_ID_PATH;
                    break;
                case EntityType.PROJECTS:
                    apiPath = ApiConstants.PROJECTS_API_ID_PATH;
                    break;
                case EntityType.PROJECT:
                    apiPath = ApiConstants.PROJECT_API_ID_PATH;
                    break;
                default:
                    throw new InternalErrorBackendException("This entity type is not supported");
            }

            return apiPath + (!string.IsNullOrEmpty(suffix) ? suffix : "");
        }

        protected string GetChildsApiPath(EntityType entityType)
        {
            string apiPath = null;

            switch (entityType)
            {
                case EntityType.BRAND:
                    apiPath = ApiConstants.BRAND_API_ID_CHILDS_PATH;
                    break;
                case EntityType.FOLDER:
                    apiPath = ApiConstants.FOLDER_API_ID_CHILDS_PATH;
                    break;
                case EntityType.TRASH:
                    apiPath = ApiConstants.TRASH_API_ID_CHILDS_PATH;
                    break;
                case EntityType.JOBS:
                    apiPath = ApiConstants.JOBS_API_ID_CHILDS_PATH;
                    break;
                case EntityType.JOB:
                    apiPath = ApiConstants.JOB_API_ID_CHILDS_PATH;
                    break;
                case EntityType.PARTICIPATIONS:
                    apiPath = ApiConstants.PARTICIPATIONS_API_ID_CHILDS_PATH;
                    break;
                case EntityType.PARTICIPATION:
                    apiPath = ApiConstants.PARTICIPATION_API_ID_CHILDS_PATH;
                    break;
                case EntityType.PROJECTS:
                    apiPath = ApiConstants.PROJECTS_API_ID_CHILDS_PATH;
                    break;
                default:
                    throw new InternalErrorBackendException("This entity type is not supported");
            }

            return apiPath;
        }

        protected string GetMultiApiPath(EntityType entityType)
        {
            string apiPath = null;

            switch (entityType)
            {
                case EntityType.FOLDER:
                    apiPath = ApiConstants.FOLDER_API_PATH_MULTI;
                    break;
                case EntityType.ASSET:
                    apiPath = ApiConstants.ASSET_API_PATH_MULTI;
                    break;
                case EntityType.TRASH:
                    apiPath = ApiConstants.TRASH_API_ID_PATH_MULTI;
                    break;
                default:
                    throw new InternalErrorBackendException("This entity type is not supported");
            }

            return apiPath;
        }
    }
}
