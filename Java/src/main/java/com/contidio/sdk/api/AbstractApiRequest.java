package com.contidio.sdk.api;

import java.io.File;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.List;
import java.util.UUID;

import org.apache.commons.lang3.StringUtils;

import com.contidio.sdk.exceptions.InternalErrorBackendException;
import com.contidio.sdk.proto.MetadataProtocol.LicenseRequest;
import com.contidio.sdk.proto.MetadataProtocol.LicenseRequests;
import com.contidio.sdk.proto.MetadataProtocol.AccessRequest;
import com.contidio.sdk.proto.MetadataProtocol.AccessRequests;
import com.contidio.sdk.proto.MetadataProtocol.JoinRequest;
import com.contidio.sdk.proto.MetadataProtocol.JoinRequests;
import com.contidio.sdk.proto.MetadataProtocol.AutocompletedEntities;
import com.contidio.sdk.proto.MetadataProtocol.PublishRequest;
import com.contidio.sdk.proto.MetadataProtocol.PublishRequests;
import com.contidio.sdk.proto.MetadataProtocol.PurchaseCreditsRequest;
import com.contidio.sdk.proto.MetadataProtocol.PurchaseCreditsRequests;
import com.contidio.sdk.proto.MetadataProtocol.CollectedEntity;
import com.contidio.sdk.proto.MetadataProtocol.CollectedEntities;
import com.contidio.sdk.proto.MetadataProtocol.Entities;
import com.contidio.sdk.proto.MetadataProtocol.Entity;
import com.contidio.sdk.proto.MetadataProtocol.EntityType;
import com.contidio.sdk.proto.MetadataProtocol.HistoryEvents;
import com.contidio.sdk.proto.MetadataProtocol.Tag;
import com.contidio.sdk.proto.MetadataProtocol.Tags;
import com.contidio.sdk.proto.MetadataProtocol.User;
import com.contidio.sdk.proto.MetadataProtocol.UserGroups;
import com.contidio.sdk.proto.MetadataProtocol.Licenses;
import com.contidio.sdk.proto.MetadataProtocol.Notifications;
import com.contidio.sdk.proto.MetadataProtocol.UserSetting;
import com.contidio.sdk.proto.MetadataProtocol.UserFollowSetting;
import com.contidio.sdk.proto.MetadataProtocol.UserFollowSettings;
import com.contidio.sdk.proto.MetadataProtocol.UserGroup;
import com.contidio.sdk.proto.MetadataProtocol.Users;
import com.contidio.sdk.proto.MetadataProtocol.UpgradePlanRequest;
import com.contidio.sdk.proto.MetadataProtocol.UpgradePlanRequests;
import com.contidio.sdk.proto.MetadataProtocol.ApprovalRequest;
import com.contidio.sdk.proto.MetadataProtocol.ApprovalRequests;
import com.contidio.sdk.proto.MetadataProtocol.ShoppingCart;
import com.contidio.sdk.proto.MetadataProtocol.ShoppingCarts;
import com.contidio.sdk.proto.MetadataProtocol.ExternalContentProviderConfiguration;
import com.contidio.sdk.proto.MetadataProtocol.ExternalContentProviderSetup;
import com.contidio.sdk.proto.MetadataProtocol.ExternalContentProviderConfigurations;
import com.contidio.sdk.proto.MetadataProtocol.ExternalContentProvider;
import com.contidio.sdk.proto.MetadataProtocol.ExternalContentProviderProduct;
import com.contidio.sdk.proto.MetadataProtocol.ExternalContentProviderProducts;
import com.contidio.sdk.proto.MetadataProtocol.CreditTransaction;
import com.contidio.sdk.proto.MetadataProtocol.CreditTransactionCostCalculation;
import com.contidio.sdk.proto.MetadataProtocol.CreditTransactions;
import com.contidio.sdk.proto.MetadataProtocol.QueryData;
import com.contidio.sdk.proto.MetadataProtocol.ServerTaskResponse;
import com.contidio.sdk.proto.MetadataProtocol.ServerTaskResponses;
import com.google.protobuf.InvalidProtocolBufferException;
import com.google.protobuf.ProtocolMessageEnum;

public abstract class AbstractApiRequest<T extends AbstractApiRequest<T>> {
	private ApiClient apiClient;
	
	private boolean anonymous;
	private long flags;
	private String appendToUrl;
	private QueryData queryData;
	private String brandUuid;
	
	private String transactionUuid;
	
	protected AbstractApiRequest(ApiClient apiClient, String brandUuid) {
		this.apiClient = apiClient;
		
		anonymous = false;
		flags = 0;
		appendToUrl = null;
		
		this.brandUuid = brandUuid;
		
		transactionUuid = UUID.randomUUID().toString();
	}
		
	public String getTransactionUuid() {
		return transactionUuid;
	}
	
	@SuppressWarnings("unchecked")
	public T setTransactionUuid(String transactionUuid) {
		this.transactionUuid = transactionUuid;
		
		return (T) this;
	}

	public long getFlags() {
		return flags;
	}

	@SuppressWarnings("unchecked")
	public T setFlags(long flags) {
		this.flags = flags;
		
		return (T) this;
	}

	public String getAppendToUrl() {
		return appendToUrl;
	}

	@SuppressWarnings("unchecked")
	public T setAppendToUrl(String appendToUrl) {
		this.appendToUrl = appendToUrl;
		
		return (T) this;
	}
	
	public boolean getAnonymous() {
		return anonymous;
	}

	@SuppressWarnings("unchecked")
	public T setAnonymous() {
		this.anonymous = true;
		
		return (T) this;
	}
	
	public QueryData getQueryData() {
		return queryData;
	}
	
	@SuppressWarnings("unchecked")
	public T setQueryData(QueryData queryData) {
		this.queryData = queryData;
		
		return (T) this;
	}
	
	protected String replaceUuid(String finalApiPath, String uuid) {
		if (!StringUtils.isEmpty(uuid))
			finalApiPath = StringUtils.replace(finalApiPath, ":id", uuid);
		
		return finalApiPath;
	}
	
	protected String replaceUserGroupUuid(String finalApiPath, String userGroupUuid) {
		if (!StringUtils.isEmpty(userGroupUuid))
			finalApiPath = StringUtils.replace(finalApiPath, ":groupId", userGroupUuid);
		
		return finalApiPath;
	}
	
	protected String replaceLicenseUuid(String finalApiPath, String licenseUuid) {
		if (!StringUtils.isEmpty(licenseUuid))
			finalApiPath = StringUtils.replace(finalApiPath, ":licenseId", licenseUuid);
		
		return finalApiPath;
	}
	
	protected String replaceCollectedEntityUuid(String finalApiPath, String collectedEntityUuid) {
		if (!StringUtils.isEmpty(collectedEntityUuid))
			finalApiPath = StringUtils.replace(finalApiPath, ":collectedEntityId", collectedEntityUuid);
		
		return finalApiPath;
	}
	
	protected String replaceProjectUuid(String finalApiPath, String projectUuid) {
		if (!StringUtils.isEmpty(projectUuid))
			finalApiPath = StringUtils.replace(finalApiPath, ":projectId", projectUuid);
		
		return finalApiPath;
	}
	
	protected String replaceShoppingCartUuid(String finalApiPath, String shoppingCartUuid) {
		if (!StringUtils.isEmpty(shoppingCartUuid))
			finalApiPath = StringUtils.replace(finalApiPath, ":shoppingCartId", shoppingCartUuid);
		
		return finalApiPath;
	}
	
	protected String replaceCreditTransactionUuid(String finalApiPath, String creditTransactionUuid) {
		if (!StringUtils.isEmpty(creditTransactionUuid))
			finalApiPath = StringUtils.replace(finalApiPath, ":creditTransactionId", creditTransactionUuid);
		
		return finalApiPath;
	}
	
	protected String replaceProviderId(String finalApiPath, ExternalContentProvider provider) {
		if (provider != null)
			finalApiPath = StringUtils.replace(finalApiPath, ":providerId", String.valueOf(provider.getNumber()));
		
		return finalApiPath;
	}
	
	protected String replaceProductId(String finalApiPath, String productId) {
		if (!StringUtils.isEmpty(productId))
			finalApiPath = StringUtils.replace(finalApiPath, ":productId", productId);
		
		return finalApiPath;
	}
	
	private void putAnonymous(StringBuilder apiPath, boolean supportsAnonymous) 
		throws InternalErrorBackendException 
	{
		if (anonymous || StringUtils.isEmpty(apiClient.getBearerToken())) {
			if (supportsAnonymous)
				apiPath.append(ApiConstants.ANONYMOUS_ACCESS_SUFFIX);
			else
				throw new InternalErrorBackendException("This API supports no anonymous invocation");
		}
	}
	
	private void putGetParameter(StringBuilder apiPath, String getParameterName, String value) {
		if (!StringUtils.isEmpty(value)) {
			try {
				apiPath.append("&").append(getParameterName).append("=").append(URLEncoder.encode(value, "UTF-8"));
			} catch (UnsupportedEncodingException e) {
				throw new RuntimeException(e);
			}
		}
	}
	
	private void putGetParameter(StringBuilder apiPath, String getParameterName, int value) {
		putGetParameter(apiPath, getParameterName, String.valueOf(value));
	}
	
	private void putGetParameter(StringBuilder apiPath, String getParameterName, long value) {
		putGetParameter(apiPath, getParameterName, String.valueOf(value));
	}
	
	private void putGetParameter(StringBuilder apiPath, String getParameterName, boolean value) {
		putGetParameter(apiPath, getParameterName, value ? "1" : "0");
	}
	
	private String buildEnumValue(List<? extends ProtocolMessageEnum> values) {
		StringBuilder enumBuilder = new StringBuilder();
		
		boolean isFirst = true;
		
		for (ProtocolMessageEnum value : values) {
			if (isFirst) 
				enumBuilder.append(value.getNumber());
			else
				enumBuilder.append(",").append(value.getNumber());
			
			isFirst = false;
		}
			
		return enumBuilder.toString();
	}
	
	private String buildStringValue(List<String> values) {
		StringBuilder enumBuilder = new StringBuilder();
		
		boolean isFirst = true;
		
		try {
			for (String value : values) {
				if (isFirst)
					enumBuilder.append(URLEncoder.encode(value, "UTF-8"));
				else
					enumBuilder.append(",").append(URLEncoder.encode(value, "UTF-8"));
				
				isFirst = false;
			}
		} catch (UnsupportedEncodingException e) {
			throw new RuntimeException(e);
		}
			
		return enumBuilder.toString();
	}
	
	private void putEnumListGetParameter(StringBuilder apiPath, String getParameterName, List<? extends ProtocolMessageEnum> values) {
		putGetParameter(apiPath, getParameterName, buildEnumValue(values));
	}
	
	private void putStringListGetParameter(StringBuilder apiPath, String getParameterName, List<String> values) {
		putGetParameter(apiPath, getParameterName, buildStringValue(values));
	}
	
	private void putFlags(StringBuilder apiPath) {
		apiPath.append("?").append(ApiConstants.GET_PARAMETER_INCLUSION_FLAGS).append("=").append(flags);
	}
	
	private void putAppendToUrl(StringBuilder apiPath) {
		if (!StringUtils.isEmpty(appendToUrl))
			apiPath.append("&").append(appendToUrl);
	}
	
	private void putQueryData(StringBuilder apiPath) {
		if (queryData != null) {			
			if (queryData.hasStartIndex())
				putGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_START_INDEX, queryData.getStartIndex());
			
			if (queryData.hasCount())
				putGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_COUNT, queryData.getCount());
			
			if (queryData.hasOrderBy())
				putGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_ORDER_BY, queryData.getOrderBy().getNumber());
			
			if (queryData.hasOrderDirection())
				putGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_ORDER_DIRECTION, queryData.getOrderDirection().getNumber());
			
			if (queryData.hasTerms())
				putGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_TERMS, queryData.getTerms());
			
			if (queryData.hasTermsAnd())
				putGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_TERMS_AND, queryData.getTermsAnd());
			
			if (queryData.hasRecursive())
				putGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_RECURSIVE, queryData.getRecursive());
			
			if (queryData.hasLocale())
				putGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_LOCALE, queryData.getLocale());
			
			if (queryData.getTypeCount() > 0)
				putEnumListGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_TYPES, queryData.getTypeList());
			
			if (queryData.getBinaryTypeCount() > 0)
				putEnumListGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_BINARY_TYPES, queryData.getBinaryTypeList());
			
			if (queryData.getLocalesCount() > 0)
				putStringListGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_LOCALES, queryData.getLocalesList());
			
			if (queryData.getDimensionCount() > 0)
				putEnumListGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_DIMENSIONS, queryData.getDimensionList());
			
			if (queryData.hasUploaded())
				putGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_UPLOADED, queryData.getUploaded().getNumber());
		
			if (queryData.getOrientationCount() > 0)
				putEnumListGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_ORIENTATIONS, queryData.getOrientationList());
			
			if (queryData.getVideoFormatCount() > 0)
				putEnumListGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_VIDEO_FORMATS, queryData.getVideoFormatList());
			
			if (queryData.getVideoAspectRatioCount() > 0)
				putEnumListGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_VIDEO_ASPECT_RATIOS, queryData.getVideoAspectRatioList());
			
			if (queryData.getDurationCount() > 0)
				putEnumListGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_DURATIONS, queryData.getDurationList());
			
			if (queryData.getPageCountCount() > 0)
				putEnumListGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_PAGE_COUNTS, queryData.getPageCountList());
			
			if (queryData.hasSource())
				putGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_SOURCE, queryData.getSource().getNumber());
			
			if (queryData.getLicenseIdCount() > 0)
				putStringListGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_LICENSE_IDS, queryData.getLicenseIdList());
			
			if (queryData.getMultiParentIdCount() > 0)
				putStringListGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_MULTI_PARENT_IDS, queryData.getMultiParentIdList());
			
			if (queryData.hasIncludeContidio())
				putGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_INCLUDE_CONTIDIO, queryData.getIncludeContidio());
			
			if (queryData.getProjectStateCount() > 0)
				putEnumListGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_PROJECT_STATES, queryData.getProjectStateList());
			
			if (queryData.getCreditTransactionTypeCount() > 0)
				putEnumListGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_CREDIT_TRANSACTION_TYPES, queryData.getCreditTransactionTypeList());
			
			if (queryData.hasFromCreatedTimestamp())
				putGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_FROM_CREATED_TIMESTAMP, queryData.getFromCreatedTimestamp());
			
			if (queryData.hasToCreatedTimestamp())
				putGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_TO_CREATED_TIMESTAMP, queryData.getToCreatedTimestamp());
			
			if (queryData.hasFromLastUpdatedTimestamp())
				putGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_FROM_LAST_UPDATED_TIMESTAMP, queryData.getFromLastUpdatedTimestamp());
			
			if (queryData.hasToLastUpdatedTimestamp())
				putGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_TO_LAST_UPDATED_TIMESTAMP, queryData.getToLastUpdatedTimestamp());
			
			if (queryData.hasFromLastCommittedTimestamp())
				putGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_FROM_LAST_COMMITTED_TIMESTAMP, queryData.getFromLastCommittedTimestamp());
			
			if (queryData.hasToLastCommittedTimestamp())
				putGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_TO_LAST_COMMITTED_TIMESTAMP, queryData.getToLastCommittedTimestamp());
			
			if (queryData.getAutocompletedEntityTypeCount() > 0)
				putEnumListGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_AUTOCOMPLETED_ENTITY_TYPES, queryData.getAutocompletedEntityTypeList());
			
			if (queryData.getBrandTypeCount() > 0)
				putEnumListGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_BRAND_TYPES, queryData.getBrandTypeList());
			
			if (queryData.getAssetTypeCount() > 0)
				putEnumListGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_ASSET_TYPES, queryData.getAssetTypeList());
			
			if (queryData.getJobTypeCount() > 0)
				putEnumListGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_JOB_TYPES, queryData.getJobTypeList());
			
			if (queryData.getJobStateCount() > 0)
				putEnumListGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_JOB_STATES, queryData.getJobStateList());
			
			if (queryData.getParticipationStateCount() > 0)
				putEnumListGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_PARTICIPATION_STATES, queryData.getParticipationStateList());
			
			if (queryData.getNotificationTypeCount() > 0)
				putEnumListGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_NOTIFICATION_TYPES, queryData.getNotificationTypeList());
			
			if (queryData.getNotificationStateCount() > 0)
				putEnumListGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_NOTIFICATION_STATES, queryData.getNotificationStateList());
			
			if (queryData.getContentCategoryCount() > 0)
				putEnumListGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_CONTENT_CATEGORIES, queryData.getContentCategoryList());
			
			if (queryData.getReviewStateCount() > 0)
				putEnumListGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_REVIEW_STATES, queryData.getReviewStateList());
			
			if (queryData.hasIncludeInactive())
				putGetParameter(apiPath, ApiConstants.GET_PARAMETER_QUERY_INCLUDE_INACTIVE, queryData.getIncludeInactive());
		}
	}
	
	protected void putAnonymousFlagsAppendToUrl(StringBuilder apiPath, boolean supportsAnonymous) 
		throws InternalErrorBackendException 
	{
		putAnonymous(apiPath, supportsAnonymous);
		putFlags(apiPath);
		putAppendToUrl(apiPath);
		putQueryData(apiPath);
	}
	
	protected String buildApiUrl(String originalApiPath, String uuid, boolean supportsAnonymous) 
		throws InternalErrorBackendException 
	{
		originalApiPath = replaceUuid(originalApiPath, uuid);
		
		StringBuilder apiPath = new StringBuilder(originalApiPath);
		putAnonymousFlagsAppendToUrl(apiPath, supportsAnonymous);
		
		String resultApiPath = apiPath.toString();
		
		if (resultApiPath.contains("/:"))
            throw new InternalErrorBackendException("API path contains unresolved parameter");
		
		return resultApiPath;
	}
	
	protected byte[] process(boolean apiManagement, ApiEndpoint apiEndpoint, String apiPath, String uuid, byte[] inputGpb,
			File[] binaries, ApiClient.Method method, boolean supportsAnonymous) 
		throws Exception
	{
		String apiUrl = buildApiUrl(apiPath, uuid, supportsAnonymous);
		
		byte[] result = apiClient.process(apiManagement, apiEndpoint, brandUuid, transactionUuid,
				apiUrl, inputGpb, binaries, method);
		
		return result;
	}
	
	public Entity getEntity(byte[] result)
		throws InvalidProtocolBufferException 
    {
        return Entity.parseFrom(result);
    }
	
	public Tag getTag(byte[] result)
		throws InvalidProtocolBufferException 
    {
        return Tag.parseFrom(result);
    }
	
	public Tags getTags(byte[] result)
		throws InvalidProtocolBufferException 
    {
        return Tags.parseFrom(result);
    }
	
	public Entities getEntities(byte[] result)
		throws InvalidProtocolBufferException 
    {
        return Entities.parseFrom(result);
    }
	
	protected User getUser(byte[] result) 
		throws InvalidProtocolBufferException 
	{
		return User.parseFrom(result);
	}

	public Users getUsers(byte[] result) 
		throws InvalidProtocolBufferException 
	{
		return Users.parseFrom(result);
	}
	
	public UserGroup getUserGroup(byte[] result) 
		throws InvalidProtocolBufferException 
	{
		return UserGroup.parseFrom(result);
	}

	public UserGroups getUserGroups(byte[] result) 
		throws InvalidProtocolBufferException 
	{
		return UserGroups.parseFrom(result);
	}
	
	public Licenses getLicenses(byte[] result) 
		throws InvalidProtocolBufferException 
	{
		return Licenses.parseFrom(result);
	}
	
	protected UserSetting getUserSetting(byte[] result)
		throws InvalidProtocolBufferException
    {
        return UserSetting.parseFrom(result);
    }
	
	public LicenseRequest getLicenseRequest(byte[] result) 
		throws InvalidProtocolBufferException 
	{
		return LicenseRequest.parseFrom(result);
	}
	
	public LicenseRequests getLicenseRequests(byte[] result) 
		throws InvalidProtocolBufferException 
	{
		return LicenseRequests.parseFrom(result);
	}
	
	public AccessRequest getAccessRequest(byte[] result) 
		throws InvalidProtocolBufferException 
	{
		return AccessRequest.parseFrom(result);
	}
	
	public AccessRequests getAccessRequests(byte[] result) 
		throws InvalidProtocolBufferException 
	{
		return AccessRequests.parseFrom(result);
	}
	
	public JoinRequest getJoinRequest(byte[] result) 
		throws InvalidProtocolBufferException 
	{
		return JoinRequest.parseFrom(result);
	}
	
	public JoinRequests getJoinRequests(byte[] result) 
		throws InvalidProtocolBufferException 
	{
		return JoinRequests.parseFrom(result);
	}
	
	public PublishRequest getPublishRequest(byte[] result) 
		throws InvalidProtocolBufferException 
	{
		return PublishRequest.parseFrom(result);
	}
	
	public PublishRequests getPublishRequests(byte[] result) 
		throws InvalidProtocolBufferException 
	{
		return PublishRequests.parseFrom(result);
	}
	
	public PurchaseCreditsRequest getPurchaseCreditsRequest(byte[] result) 
		throws InvalidProtocolBufferException 
	{
		return PurchaseCreditsRequest.parseFrom(result);
	}
	
	public PurchaseCreditsRequests getPurchaseCreditsRequests(byte[] result) 
		throws InvalidProtocolBufferException 
	{
		return PurchaseCreditsRequests.parseFrom(result);
	}
	
	public UpgradePlanRequest getUpgradePlanRequest(byte[] result) 
		throws InvalidProtocolBufferException 
	{
		return UpgradePlanRequest.parseFrom(result);
	}
	
	public UpgradePlanRequests getUpgradePlanRequests(byte[] result) 
		throws InvalidProtocolBufferException 
	{
		return UpgradePlanRequests.parseFrom(result);
	}
	
	public ApprovalRequest getApprovalRequest(byte[] result) 
		throws InvalidProtocolBufferException 
	{
		return ApprovalRequest.parseFrom(result);
	}
	
	public ApprovalRequests getApprovalRequests(byte[] result) 
		throws InvalidProtocolBufferException 
	{
		return ApprovalRequests.parseFrom(result);
	}
	
	public CollectedEntity getCollectedEntity(byte[] result) 
		throws InvalidProtocolBufferException 
	{
		return CollectedEntity.parseFrom(result);
	}
	
	public CollectedEntities getCollectedEntities(byte[] result) 
		throws InvalidProtocolBufferException 
	{
		return CollectedEntities.parseFrom(result);
	}
	
	public ShoppingCart getShoppingCart(byte[] result) 
		throws InvalidProtocolBufferException 
	{
		return ShoppingCart.parseFrom(result);
	}
	
	public ShoppingCarts getShoppingCarts(byte[] result) 
		throws InvalidProtocolBufferException 
	{
		return ShoppingCarts.parseFrom(result);
	}
	
	public CreditTransaction getCreditTransaction(byte[] result) 
		throws InvalidProtocolBufferException 
	{
		return CreditTransaction.parseFrom(result);
	}
	
	public CreditTransactionCostCalculation getCreditTransactionCostCalculation(byte[] result) 
		throws InvalidProtocolBufferException 
	{
		return CreditTransactionCostCalculation.parseFrom(result);
	}
	
	public CreditTransactions getCreditTransactions(byte[] result) 
		throws InvalidProtocolBufferException 
	{
		return CreditTransactions.parseFrom(result);
	}
	
	protected UserFollowSetting getUserFollowSetting(byte[] result)
		throws InvalidProtocolBufferException
    {
        return UserFollowSetting.parseFrom(result);
    }
	
	protected UserFollowSettings getUserFollowSettings(byte[] result)
		throws InvalidProtocolBufferException
    {
        return UserFollowSettings.parseFrom(result);
    }
	
	public HistoryEvents getHistoryEvents(byte[] result) 
		throws InvalidProtocolBufferException 
	{
		return HistoryEvents.parseFrom(result);
	}
	
	public AutocompletedEntities getAutocompletedEntities(byte[] result)
		throws InvalidProtocolBufferException 
	{
		return AutocompletedEntities.parseFrom(result);
	}
	
	public ServerTaskResponse getServerTaskResponse(byte[] result)
		throws InvalidProtocolBufferException
	{
		return ServerTaskResponse.parseFrom(result);
	}
	
	public ServerTaskResponses getServerTaskResponses(byte[] result)
		throws InvalidProtocolBufferException
	{
		return ServerTaskResponses.parseFrom(result);
	}
	
	public Notifications getNotifications(byte[] result)
		throws InvalidProtocolBufferException
	{
		return Notifications.parseFrom(result);
	}
	
	public ExternalContentProviderConfiguration getExternalContentProviderConfiguration(byte[] result)
		throws InvalidProtocolBufferException
	{
		return ExternalContentProviderConfiguration.parseFrom(result);
	}
	
	public ExternalContentProviderConfigurations getExternalContentProviderConfigurations(byte[] result)
		throws InvalidProtocolBufferException
	{
		return ExternalContentProviderConfigurations.parseFrom(result);
	}

	public ExternalContentProviderSetup getExternalContentProviderSetup(byte[] result)
		throws InvalidProtocolBufferException
	{
		return ExternalContentProviderSetup.parseFrom(result);
	}
	
	public ExternalContentProviderProduct getExternalContentProviderProduct(byte[] result)
		throws InvalidProtocolBufferException
	{
		return ExternalContentProviderProduct.parseFrom(result);
	}
	
	public ExternalContentProviderProducts getExternalContentProviderProducts(byte[] result)
		throws InvalidProtocolBufferException
	{
		return ExternalContentProviderProducts.parseFrom(result);
	}

	protected String getNonUuidApiPath(EntityType entityType) 
		throws InternalErrorBackendException 
	{
		return getNonUuidApiPath(entityType, null);
	}
	
	protected String getNonUuidApiPath(EntityType entityType, String suffix) 
		throws InternalErrorBackendException 
	{
		String apiPath = null;
		
		switch (entityType) {
			case BRAND:
				apiPath = ApiConstants.BRAND_API_PATH;
				break;
			case FOLDER:
				apiPath = ApiConstants.FOLDER_API_PATH;
				break;
			case ASSET:
				apiPath = ApiConstants.ASSET_API_PATH;
				break;
			case TRASH:
				apiPath = ApiConstants.TRASH_API_PATH;
				break;
			case JOBS:
				apiPath = ApiConstants.JOBS_API_PATH;
				break;
			case JOB:
				apiPath = ApiConstants.JOB_API_PATH;
				break;
			case PARTICIPATIONS:
				apiPath = ApiConstants.PARTICIPATIONS_API_PATH;
				break;
			case PARTICIPATION:
				apiPath = ApiConstants.PARTICIPATION_API_PATH;
				break;
			case PROJECTS:
				apiPath = ApiConstants.PROJECTS_API_PATH;
				break;
			case PROJECT:
				apiPath = ApiConstants.PROJECT_API_PATH;
				break;
			default:
				throw new InternalErrorBackendException("This entity type is not supported");
		}
		
		return apiPath + (!StringUtils.isEmpty(suffix) ? suffix : "");
	}
	
	protected String getUuidApiPath(EntityType entityType) 
		throws InternalErrorBackendException 
	{
		return getUuidApiPath(entityType, null);
	}
	
	protected String getUuidApiPath(EntityType entityType, String suffix) 
		throws InternalErrorBackendException 
	{
		String apiPath = null;
		
		switch (entityType) {
			case BRAND:
				apiPath = ApiConstants.BRAND_API_ID_PATH;
				break;
			case FOLDER:
				apiPath = ApiConstants.FOLDER_API_ID_PATH;
				break;
			case ASSET:
				apiPath = ApiConstants.ASSET_API_ID_PATH;
				break;
			case TRASH:
				apiPath = ApiConstants.TRASH_API_ID_PATH;
				break;
			case JOBS:
				apiPath = ApiConstants.JOBS_API_ID_PATH;
				break;
			case JOB:
				apiPath = ApiConstants.JOB_API_ID_PATH;
				break;
			case PARTICIPATIONS:
				apiPath = ApiConstants.PARTICIPATIONS_API_ID_PATH;
				break;
			case PARTICIPATION:
				apiPath = ApiConstants.PARTICIPATION_API_ID_PATH;
				break;
			case PROJECTS:
				apiPath = ApiConstants.PROJECTS_API_ID_PATH;
				break;
			case PROJECT:
				apiPath = ApiConstants.PROJECT_API_ID_PATH;
				break;
			default:
				throw new InternalErrorBackendException("This entity type is not supported");
		}
		
		return apiPath + (!StringUtils.isEmpty(suffix) ? suffix : "");
	}
		
	protected String getChildsApiPath(EntityType entityType) 
		throws InternalErrorBackendException 
	{
		String apiPath = null;
		
		switch (entityType) {
			case BRAND:
				apiPath = ApiConstants.BRAND_API_ID_CHILDS_PATH;
				break;
			case FOLDER:
				apiPath = ApiConstants.FOLDER_API_ID_CHILDS_PATH;
				break;
			case TRASH:
				apiPath = ApiConstants.TRASH_API_ID_CHILDS_PATH;
				break;
			case JOBS:
				apiPath = ApiConstants.JOBS_API_ID_CHILDS_PATH;
				break;
			case JOB:
				apiPath = ApiConstants.JOB_API_ID_CHILDS_PATH;
				break;
			case PARTICIPATIONS:
				apiPath = ApiConstants.PARTICIPATIONS_API_ID_CHILDS_PATH;
				break;
			case PARTICIPATION:
				apiPath = ApiConstants.PARTICIPATION_API_ID_CHILDS_PATH;
				break;
			case PROJECTS:
				apiPath = ApiConstants.PROJECTS_API_ID_CHILDS_PATH;
				break;
			default:
				throw new InternalErrorBackendException("This entity type is not supported");
		}
		
		return apiPath;
	}
	
	protected String getMultiApiPath(EntityType entityType) 
		throws InternalErrorBackendException 
	{
		String apiPath = null;
		
		switch (entityType) {
			case FOLDER:
				apiPath = ApiConstants.FOLDER_API_PATH_MULTI;
				break;
			case ASSET:
				apiPath = ApiConstants.ASSET_API_PATH_MULTI;
				break;
			case TRASH:
				apiPath = ApiConstants.TRASH_API_ID_PATH_MULTI;
				break;			
			default:
				throw new InternalErrorBackendException("This entity type is not supported");
		}
		
		return apiPath;
	}
}
