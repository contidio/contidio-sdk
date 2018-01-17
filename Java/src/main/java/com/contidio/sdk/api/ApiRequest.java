package com.contidio.sdk.api;

import java.io.File;

import com.contidio.sdk.exceptions.BackendException;
import com.contidio.sdk.proto.MetadataProtocol.LicenseRequest;
import com.contidio.sdk.proto.MetadataProtocol.LicenseRequestAcceptSet;
import com.contidio.sdk.proto.MetadataProtocol.LicenseRequestCreateSet;
import com.contidio.sdk.proto.MetadataProtocol.LicenseRequestRejectSet;
import com.contidio.sdk.proto.MetadataProtocol.AccessRequest;
import com.contidio.sdk.proto.MetadataProtocol.AccessRequestAcceptSet;
import com.contidio.sdk.proto.MetadataProtocol.AccessRequestCreateSet;
import com.contidio.sdk.proto.MetadataProtocol.AccessRequestRejectSet;
import com.contidio.sdk.proto.MetadataProtocol.AccessRequests;
import com.contidio.sdk.proto.MetadataProtocol.JoinRequest;
import com.contidio.sdk.proto.MetadataProtocol.JoinRequestAcceptSet;
import com.contidio.sdk.proto.MetadataProtocol.JoinRequestCreateSet;
import com.contidio.sdk.proto.MetadataProtocol.JoinRequestRejectSet;
import com.contidio.sdk.proto.MetadataProtocol.AutocompletedEntities;
import com.contidio.sdk.proto.MetadataProtocol.PublishRequest;
import com.contidio.sdk.proto.MetadataProtocol.PublishRequestAcceptSet;
import com.contidio.sdk.proto.MetadataProtocol.PublishRequestCreateSet;
import com.contidio.sdk.proto.MetadataProtocol.PublishRequestRejectSet;
import com.contidio.sdk.proto.MetadataProtocol.PurchaseCreditsRequest;
import com.contidio.sdk.proto.MetadataProtocol.PurchaseCreditsRequestCreateSet;
import com.contidio.sdk.proto.MetadataProtocol.PurchaseCreditsRequestRejectSet;
import com.contidio.sdk.proto.MetadataProtocol.CollectedEntities;
import com.contidio.sdk.proto.MetadataProtocol.CollectedEntity;
import com.contidio.sdk.proto.MetadataProtocol.CollectedEntityChangeSet;
import com.contidio.sdk.proto.MetadataProtocol.CollectedEntityChangeSets;
import com.contidio.sdk.proto.MetadataProtocol.CollectedEntityCopySet;
import com.contidio.sdk.proto.MetadataProtocol.CollectedEntityCopySets;
import com.contidio.sdk.proto.MetadataProtocol.CollectedEntityCreateSet;
import com.contidio.sdk.proto.MetadataProtocol.CollectedEntityCreateSets;
import com.contidio.sdk.proto.MetadataProtocol.CollectedEntityDeleteSet;
import com.contidio.sdk.proto.MetadataProtocol.CollectedEntityDeleteSets;
import com.contidio.sdk.proto.MetadataProtocol.CollectedEntityMoveSet;
import com.contidio.sdk.proto.MetadataProtocol.CollectedEntityMoveSets;
import com.contidio.sdk.proto.MetadataProtocol.ContactFormSendSet;
import com.contidio.sdk.proto.MetadataProtocol.CreditBalanceChangeSet;
import com.contidio.sdk.proto.MetadataProtocol.CreditTransaction;
import com.contidio.sdk.proto.MetadataProtocol.CreditTransactionCostCalculation;
import com.contidio.sdk.proto.MetadataProtocol.CreditTransactions;
import com.contidio.sdk.proto.MetadataProtocol.CreditTransactionCreateDownloadTaskSet;
import com.contidio.sdk.proto.MetadataProtocol.AssetCreateDownloadTaskSet;
import com.contidio.sdk.proto.MetadataProtocol.Entities;
import com.contidio.sdk.proto.MetadataProtocol.Entity;
import com.contidio.sdk.proto.MetadataProtocol.EntityChangeSet;
import com.contidio.sdk.proto.MetadataProtocol.EntityChangeSets;
import com.contidio.sdk.proto.MetadataProtocol.EntityDeleteSet;
import com.contidio.sdk.proto.MetadataProtocol.EntityDeleteSets;
import com.contidio.sdk.proto.MetadataProtocol.EntityRestoreSet;
import com.contidio.sdk.proto.MetadataProtocol.EntityType;
import com.contidio.sdk.proto.MetadataProtocol.HistoryEvents;
import com.contidio.sdk.proto.MetadataProtocol.HistorySelectSet;
import com.contidio.sdk.proto.MetadataProtocol.JobApplicationAcceptSet;
import com.contidio.sdk.proto.MetadataProtocol.JobApplicationSet;
import com.contidio.sdk.proto.MetadataProtocol.JobCloseSet;
import com.contidio.sdk.proto.MetadataProtocol.JobParticipationRejectSet;
import com.contidio.sdk.proto.MetadataProtocol.JobParticipationSet;
import com.contidio.sdk.proto.MetadataProtocol.JobParticipationSubmitSet;
import com.contidio.sdk.proto.MetadataProtocol.Licenses;
import com.contidio.sdk.proto.MetadataProtocol.QueryData;
import com.contidio.sdk.proto.MetadataProtocol.ServerTaskResponse;
import com.contidio.sdk.proto.MetadataProtocol.ServerTaskResponses;
import com.contidio.sdk.proto.MetadataProtocol.ShoppingCart;
import com.contidio.sdk.proto.MetadataProtocol.ShoppingCartAcquireSet;
import com.contidio.sdk.proto.MetadataProtocol.ShoppingCartRejectAcquisitionSet;
import com.contidio.sdk.proto.MetadataProtocol.ShoppingCartSubmitToBrandSet;
import com.contidio.sdk.proto.MetadataProtocol.Tag;
import com.contidio.sdk.proto.MetadataProtocol.User;
import com.contidio.sdk.proto.MetadataProtocol.UserFollowSetting;
import com.contidio.sdk.proto.MetadataProtocol.UserFollowSettingCreateSet;
import com.contidio.sdk.proto.MetadataProtocol.UserFollowSettings;
import com.contidio.sdk.proto.MetadataProtocol.UserReserveSet;
import com.contidio.sdk.proto.MetadataProtocol.UserReserveSets;
import com.contidio.sdk.proto.MetadataProtocol.UserChangeSet;
import com.contidio.sdk.proto.MetadataProtocol.UserChangeSets;
import com.contidio.sdk.proto.MetadataProtocol.UserGroup;
import com.contidio.sdk.proto.MetadataProtocol.UserGroups;
import com.contidio.sdk.proto.MetadataProtocol.UserSetting;
import com.contidio.sdk.proto.MetadataProtocol.UserSettingChangeSet;
import com.contidio.sdk.proto.MetadataProtocol.Users;
import com.contidio.sdk.proto.MetadataProtocol.UpgradePlanRequest;
import com.contidio.sdk.proto.MetadataProtocol.UpgradePlanRequestAcceptSet;
import com.contidio.sdk.proto.MetadataProtocol.UpgradePlanRequestCreateSet;
import com.contidio.sdk.proto.MetadataProtocol.UpgradePlanRequestRejectSet;
import com.contidio.sdk.proto.MetadataProtocol.ApprovalRequest;
import com.contidio.sdk.proto.MetadataProtocol.ApprovalRequestAcceptSet;
import com.contidio.sdk.proto.MetadataProtocol.ApprovalRequestCreateSet;
import com.contidio.sdk.proto.MetadataProtocol.ApprovalRequestRejectSet;
import com.contidio.sdk.proto.MetadataProtocol.Notifications;
import com.contidio.sdk.proto.MetadataProtocol.ExternalContentProvider;
import com.contidio.sdk.proto.MetadataProtocol.ExternalContentProviderConfiguration;
import com.contidio.sdk.proto.MetadataProtocol.ExternalContentProviderConfigurations;
import com.contidio.sdk.proto.MetadataProtocol.ExternalContentProviderSetupSet;
import com.contidio.sdk.proto.MetadataProtocol.ExternalContentProviderSetup;
import com.contidio.sdk.proto.MetadataProtocol.ExternalContentProviderConfigureSet;
import com.contidio.sdk.proto.MetadataProtocol.ExternalContentProviderRefreshSet;
import com.contidio.sdk.proto.MetadataProtocol.ExternalContentProviderProducts;
import com.contidio.sdk.proto.MetadataProtocol.ExternalContentProviderConfigurationChangeSet;

public final class ApiRequest extends AbstractApiRequest<ApiRequest> {
	protected ApiRequest(ApiClient apiClient, String brandUuid) {
		super(apiClient, brandUuid);
	}
	
	/**
	* Gets metadata for a license request.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	licenseRequestUuid The UUID of the license request
	* @return	LicenseRequest
	*/
	public LicenseRequest getLicenseRequest(String licenseRequestUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/licenseRequests/:id/";
		String pathParameter = licenseRequestUuid;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false);
		return getLicenseRequest(result);
	}

	/**
	* Creates an license request.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	licenseRequestCreateSet Information for creating the license request
	* @return	LicenseRequest
	*/
	public LicenseRequest createLicenseRequest(LicenseRequestCreateSet licenseRequestCreateSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/licenseRequests/";
		String pathParameter = null;
		byte[] bodyParameter = licenseRequestCreateSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getLicenseRequest(result);
	}

	/**
	* Rejects an license request.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	licenseRequestUuid The UUID of the license request
	* @param	licenseRequestRejectSet Information for rejecting the license request
	* @return	LicenseRequest
	*/
	public LicenseRequest rejectLicenseRequest(String licenseRequestUuid, LicenseRequestRejectSet licenseRequestRejectSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/licenseRequests/:id/reject/";
		String pathParameter = licenseRequestUuid;
		byte[] bodyParameter = licenseRequestRejectSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getLicenseRequest(result);
	}

	/**
	* Accepts an license request.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	licenseRequestUuid The UUID of the license request
	* @param	licenseRequestAcceptSet Information for accepting the license request
	* @return	LicenseRequest
	*/
	public LicenseRequest acceptLicenseRequest(String licenseRequestUuid, LicenseRequestAcceptSet licenseRequestAcceptSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/licenseRequests/:id/accept/";
		String pathParameter = licenseRequestUuid;
		byte[] bodyParameter = licenseRequestAcceptSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getLicenseRequest(result);
	}

	/**
	* Gets metadata for a access request.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	accessRequestUuid The UUID of the access request
	* @return	AccessRequest
	*/
	public AccessRequest getAccessRequest(String accessRequestUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/accessRequests/:id/";
		String pathParameter = accessRequestUuid;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false);
		return getAccessRequest(result);
	}

	/**
	* Creates an access request.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	accessRequestCreateSet Information for creating the access request
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse createAccessRequest(AccessRequestCreateSet accessRequestCreateSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/accessRequests/";
		String pathParameter = null;
		byte[] bodyParameter = accessRequestCreateSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getServerTaskResponse(result);
	}

	/**
	* Rejects an access request.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	accessRequestUuid The UUID of the access request
	* @param	accessRequestRejectSet Information for rejecting the access request
	* @return	AccessRequest
	*/
	public AccessRequest rejectAccessRequest(String accessRequestUuid, AccessRequestRejectSet accessRequestRejectSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/accessRequests/:id/reject/";
		String pathParameter = accessRequestUuid;
		byte[] bodyParameter = accessRequestRejectSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getAccessRequest(result);
	}

	/**
	* Accepts an access request.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	accessRequestUuid The UUID of the access request
	* @param	accessRequestAcceptSet Information for accepting the access request
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse acceptAccessRequest(String accessRequestUuid, AccessRequestAcceptSet accessRequestAcceptSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/accessRequests/:id/accept/";
		String pathParameter = accessRequestUuid;
		byte[] bodyParameter = accessRequestAcceptSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getServerTaskResponse(result);
	}

	/**
	* Gets all access requests for a brand's end user group.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @param	endUserGroupUuid The UUID of the end user group
	* @return	AccessRequests
	*/
	public AccessRequests getAccessRequestsForEndUserGroup(String brandUuid, String endUserGroupUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/brands/:id/endUserGroups/:groupId/accessRequests/";
		String pathParameter = brandUuid;
		byte[] bodyParameter = null;
		apiPath = replaceUserGroupUuid(apiPath, endUserGroupUuid);
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false);
		return getAccessRequests(result);
	}

	/**
	* Gets metadata for a join request.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	joinRequestUuid The UUID of the join request
	* @return	JoinRequest
	*/
	public JoinRequest getJoinRequest(String joinRequestUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/joinRequests/:id/";
		String pathParameter = joinRequestUuid;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false);
		return getJoinRequest(result);
	}

	/**
	* Creates an join request.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	joinRequestCreateSet Information for creating the join request
	* @return	JoinRequest
	*/
	public JoinRequest createJoinRequest(JoinRequestCreateSet joinRequestCreateSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/joinRequests/";
		String pathParameter = null;
		byte[] bodyParameter = joinRequestCreateSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getJoinRequest(result);
	}

	/**
	* Rejects an join request.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	joinRequestUuid The UUID of the join request
	* @param	joinRequestRejectSet Information for rejecting the join request
	* @return	JoinRequest
	*/
	public JoinRequest rejectJoinRequest(String joinRequestUuid, JoinRequestRejectSet joinRequestRejectSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/joinRequests/:id/reject/";
		String pathParameter = joinRequestUuid;
		byte[] bodyParameter = joinRequestRejectSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getJoinRequest(result);
	}

	/**
	* Accepts an join request.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	joinRequestUuid The UUID of the join request
	* @param	joinRequestAcceptSet Information for accepting the join request
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse acceptJoinRequest(String joinRequestUuid, JoinRequestAcceptSet joinRequestAcceptSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/joinRequests/:id/accept/";
		String pathParameter = joinRequestUuid;
		byte[] bodyParameter = joinRequestAcceptSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getServerTaskResponse(result);
	}

	/**
	* Gets metadata for an publish request.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	publishRequestUuid The UUID of the publish request
	* @return	PublishRequest
	*/
	public PublishRequest getPublishRequest(String publishRequestUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/publishRequests/:id/";
		String pathParameter = publishRequestUuid;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false);
		return getPublishRequest(result);
	}

	/**
	* Creates an publish request.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	publishRequestCreateSet Information for creating the publish request
	* @return	PublishRequest
	*/
	public PublishRequest createPublishRequest(PublishRequestCreateSet publishRequestCreateSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/publishRequests/";
		String pathParameter = null;
		byte[] bodyParameter = publishRequestCreateSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getPublishRequest(result);
	}

	/**
	* Rejects an publish request.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	publishRequestUuid The UUID of the publish request
	* @param	publishRequestRejectSet Information for rejecting the publish request
	* @return	PublishRequest
	*/
	public PublishRequest rejectPublishRequest(String publishRequestUuid, PublishRequestRejectSet publishRequestRejectSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/publishRequests/:id/reject/";
		String pathParameter = publishRequestUuid;
		byte[] bodyParameter = publishRequestRejectSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getPublishRequest(result);
	}

	/**
	* Accepts an publish request.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	publishRequestUuid The UUID of the publish request
	* @param	publishRequestAcceptSet Information for accepting the publish request
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse acceptPublishRequest(String publishRequestUuid, PublishRequestAcceptSet publishRequestAcceptSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/publishRequests/:id/accept/";
		String pathParameter = publishRequestUuid;
		byte[] bodyParameter = publishRequestAcceptSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getServerTaskResponse(result);
	}

	/**
	* Gets metadata for an purchase credits request.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	purchaseCreditsRequestUuid The UUID of the purchase credits request
	* @return	PurchaseCreditsRequest
	*/
	public PurchaseCreditsRequest getPurchaseCreditsRequest(String purchaseCreditsRequestUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/purchaseCreditsRequests/:id/";
		String pathParameter = purchaseCreditsRequestUuid;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false);
		return getPurchaseCreditsRequest(result);
	}

	/**
	* Creates an purchase credits request.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	purchaseCreditsRequestCreateSet Information for creating the purchase credits request
	* @return	PurchaseCreditsRequest
	*/
	public PurchaseCreditsRequest createPurchaseCreditsRequest(PurchaseCreditsRequestCreateSet purchaseCreditsRequestCreateSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/purchaseCreditsRequests/";
		String pathParameter = null;
		byte[] bodyParameter = purchaseCreditsRequestCreateSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getPurchaseCreditsRequest(result);
	}

	/**
	* Rejects an purchase credits request.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	purchaseCreditsRequestUuid The UUID of the purchase credits request
	* @param	purchaseCreditsRequestRejectSet Information for rejecting the purchase credits request
	* @return	PurchaseCreditsRequest
	*/
	public PurchaseCreditsRequest rejectPurchaseCreditsRequest(String purchaseCreditsRequestUuid, PurchaseCreditsRequestRejectSet purchaseCreditsRequestRejectSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/purchaseCreditsRequests/:id/reject/";
		String pathParameter = purchaseCreditsRequestUuid;
		byte[] bodyParameter = purchaseCreditsRequestRejectSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getPurchaseCreditsRequest(result);
	}

	/**
	* Gets metadata for an upgrade plan request.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	upgradePlanRequestUuid The UUID of the upgrade plan request
	* @return	UpgradePlanRequest
	*/
	public UpgradePlanRequest getUpgradePlanRequest(String upgradePlanRequestUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/upgradePlanRequests/:id/";
		String pathParameter = upgradePlanRequestUuid;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false);
		return getUpgradePlanRequest(result);
	}

	/**
	* Creates an upgrade plan request.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	upgradePlanRequestCreateSet Information for creating the upgrade plan request
	* @return	UpgradePlanRequest
	*/
	public UpgradePlanRequest createUpgradePlanRequest(UpgradePlanRequestCreateSet upgradePlanRequestCreateSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/upgradePlanRequests/";
		String pathParameter = null;
		byte[] bodyParameter = upgradePlanRequestCreateSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getUpgradePlanRequest(result);
	}

	/**
	* Accepts an upgrade plan request.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	upgradePlanRequestUuid The UUID of the upgrade plan request
	* @param	upgradePlanRequestAcceptSet Information for accepting the upgrade plan request
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse acceptUpgradePlanRequest(String upgradePlanRequestUuid, UpgradePlanRequestAcceptSet upgradePlanRequestAcceptSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/upgradePlanRequests/:id/accept/";
		String pathParameter = upgradePlanRequestUuid;
		byte[] bodyParameter = upgradePlanRequestAcceptSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getServerTaskResponse(result);
	}

	/**
	* Rejects an upgrade plan request.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	upgradePlanRequestUuid The UUID of the upgrade plan request
	* @param	upgradePlanRequestRejectSet Information for rejecting the upgrade plan request
	* @return	UpgradePlanRequest
	*/
	public UpgradePlanRequest rejectUpgradePlanRequest(String upgradePlanRequestUuid, UpgradePlanRequestRejectSet upgradePlanRequestRejectSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/upgradePlanRequests/:id/reject/";
		String pathParameter = upgradePlanRequestUuid;
		byte[] bodyParameter = upgradePlanRequestRejectSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getUpgradePlanRequest(result);
	}

	/**
	* Gets metadata for an approval request.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	approvalRequestUuid The UUID of the approval request
	* @return	ApprovalRequest
	*/
	public ApprovalRequest getApprovalRequest(String approvalRequestUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/approvalRequests/:id/";
		String pathParameter = approvalRequestUuid;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false);
		return getApprovalRequest(result);
	}

	/**
	* Creates an approval request.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	approvalRequestCreateSet Information for creating the approval request
	* @return	ApprovalRequest
	*/
	public ApprovalRequest createApprovalRequest(ApprovalRequestCreateSet approvalRequestCreateSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/approvalRequests/";
		String pathParameter = null;
		byte[] bodyParameter = approvalRequestCreateSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getApprovalRequest(result);
	}

	/**
	* Accepts an approval request.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	approvalRequestUuid The UUID of the approval request
	* @param	approvalRequestAcceptSet Information for accepting the approval request
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse acceptApprovalRequest(String approvalRequestUuid, ApprovalRequestAcceptSet approvalRequestAcceptSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/approvalRequests/:id/accept/";
		String pathParameter = approvalRequestUuid;
		byte[] bodyParameter = approvalRequestAcceptSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getServerTaskResponse(result);
	}

	/**
	* Rejects an approval request.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	approvalRequestUuid The UUID of the approval request
	* @param	approvalRequestRejectSet Information for rejecting the approval request
	* @return	ApprovalRequest
	*/
	public ApprovalRequest rejectApprovalRequest(String approvalRequestUuid, ApprovalRequestRejectSet approvalRequestRejectSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/approvalRequests/:id/reject/";
		String pathParameter = approvalRequestUuid;
		byte[] bodyParameter = approvalRequestRejectSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getApprovalRequest(result);
	}

	/**
	* Creates an collected entity within a project.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	projectUuid The UUID of the project entity
	* @param	collectedEntityCreateSet Information for creating the collected entity
	* @return	CollectedEntity
	*/
	public CollectedEntity createCollectedEntityInProject(String projectUuid, CollectedEntityCreateSet collectedEntityCreateSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/projects/:id/collectedEntities/";
		String pathParameter = projectUuid;
		byte[] bodyParameter = collectedEntityCreateSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getCollectedEntity(result);
	}

	/**
	* Creates a bulk of collected entities within a project.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	projectUuid The UUID of the project entity
	* @param	collectedEntityCreateSets Information for creating a bulk of collected entities
	* @return	CollectedEntities
	*/
	public CollectedEntities createCollectedEntitiesInProject(String projectUuid, CollectedEntityCreateSets collectedEntityCreateSets)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/projects/:id/collectedEntities/bulk/";
		String pathParameter = projectUuid;
		byte[] bodyParameter = collectedEntityCreateSets.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getCollectedEntities(result);
	}

	/**
	* Updates an collected entity within a project.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	projectUuid The UUID of the project entity
	* @param	collectedEntityChangeSet Information for changing the collected entity
	* @return	CollectedEntity
	*/
	public CollectedEntity updateCollectedEntityInProject(String projectUuid, CollectedEntityChangeSet collectedEntityChangeSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/projects/:id/collectedEntities/";
		String pathParameter = projectUuid;
		byte[] bodyParameter = collectedEntityChangeSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false);
		return getCollectedEntity(result);
	}

	/**
	* Updates a bulk of collected entities within a project.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	projectUuid The UUID of the project entity
	* @param	collectedEntityChangeSets Information for changing a bulk of collected entities
	* @return	CollectedEntities
	*/
	public CollectedEntities updateCollectedEntitiesInProject(String projectUuid, CollectedEntityChangeSets collectedEntityChangeSets)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/projects/:id/collectedEntities/bulk/";
		String pathParameter = projectUuid;
		byte[] bodyParameter = collectedEntityChangeSets.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false);
		return getCollectedEntities(result);
	}

	/**
	* Deletes an collected entity from a project.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	projectUuid The UUID of the project entity
	* @param	collectedEntityDeleteSet Information for deleting the collected entity
	*/
	public void deleteCollectedEntityFromProject(String projectUuid, CollectedEntityDeleteSet collectedEntityDeleteSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/projects/:id/collectedEntities/";
		String pathParameter = projectUuid;
		byte[] bodyParameter = collectedEntityDeleteSet.toByteArray();
		process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.DELETE, false);
	}

	/**
	* Deletes a bulk of collected entities from a project.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	projectUuid The UUID of the project entity
	* @param	collectedEntityDeleteSets Information for deleting a bulk of collected entities
	*/
	public void deleteCollectedEntitiesFromProject(String projectUuid, CollectedEntityDeleteSets collectedEntityDeleteSets)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/projects/:id/collectedEntities/bulk/";
		String pathParameter = projectUuid;
		byte[] bodyParameter = collectedEntityDeleteSets.toByteArray();
		process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.DELETE, false);
	}

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
	* @return	CollectedEntity
	*/
	public CollectedEntity copyCollectedEntityFromProjectToShoppingCart(String projectUuid, CollectedEntityCopySet collectedEntityCopySet, String shoppingCartUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/projects/:id/collectedEntities/copyToShoppingCart/:shoppingCartId/";
		String pathParameter = projectUuid;
		byte[] bodyParameter = collectedEntityCopySet.toByteArray();
		apiPath = replaceShoppingCartUuid(apiPath, shoppingCartUuid);
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false);
		return getCollectedEntity(result);
	}

	/**
	* Copies an collected entity from a project to the current user's shopping cart.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	projectUuid The UUID of the project entity
	* @param	collectedEntityCopySet Information for copying the collected entity
	* @return	CollectedEntity
	*/
	public CollectedEntity copyCollectedEntityFromProjectToCurrentShoppingCart(String projectUuid, CollectedEntityCopySet collectedEntityCopySet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/projects/:id/collectedEntities/copyToShoppingCart/";
		String pathParameter = projectUuid;
		byte[] bodyParameter = collectedEntityCopySet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false);
		return getCollectedEntity(result);
	}

	/**
	* Copies all collected entities from a project to a shopping cart.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	projectUuid The UUID of the project entity
	* @param	shoppingCartUuid The UUID of the shopping cart
	* @return	CollectedEntities
	*/
	public CollectedEntities copyAllCollectedEntitiesFromProjectToShoppingCart(String projectUuid, String shoppingCartUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/projects/:id/collectedEntities/copyToShoppingCart/:shoppingCartId/bulk/all/";
		String pathParameter = projectUuid;
		byte[] bodyParameter = null;
		apiPath = replaceShoppingCartUuid(apiPath, shoppingCartUuid);
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false);
		return getCollectedEntities(result);
	}

	/**
	* Copies all collected entities from a project to the current user's shopping cart.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	projectUuid The UUID of the project entity
	* @return	CollectedEntities
	*/
	public CollectedEntities copyAllCollectedEntitiesFromProjectToCurrentShoppingCart(String projectUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/projects/:id/collectedEntities/copyToShoppingCart/all/";
		String pathParameter = projectUuid;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false);
		return getCollectedEntities(result);
	}

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
	* @return	CollectedEntities
	*/
	public CollectedEntities copyCollectedEntitiesFromProjectToShoppingCart(String projectUuid, CollectedEntityCopySets collectedEntityCopySets, String shoppingCartUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/projects/:id/collectedEntities/copyToShoppingCart/:shoppingCartId/bulk/";
		String pathParameter = projectUuid;
		byte[] bodyParameter = collectedEntityCopySets.toByteArray();
		apiPath = replaceShoppingCartUuid(apiPath, shoppingCartUuid);
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false);
		return getCollectedEntities(result);
	}

	/**
	* Copies a bulk of collected entities from a project to the current user's shopping cart.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	projectUuid The UUID of the project entity
	* @param	collectedEntityCopySets Information for copying a bulk of collected entities
	* @return	CollectedEntities
	*/
	public CollectedEntities copyCollectedEntitiesFromProjectToCurrentShoppingCart(String projectUuid, CollectedEntityCopySets collectedEntityCopySets)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/projects/:id/collectedEntities/copyToShoppingCart/bulk/";
		String pathParameter = projectUuid;
		byte[] bodyParameter = collectedEntityCopySets.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false);
		return getCollectedEntities(result);
	}

	/**
	* Gets all collected entities from a project which have been already acquired.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	projectUuid The UUID of the project entity
	* @return	CollectedEntities
	*/
	public CollectedEntities getAcquiredCollectedEntitiesForProject(String projectUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/projects/:id/acquiredCollectedEntities/";
		String pathParameter = projectUuid;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false);
		return getCollectedEntities(result);
	}

	/**
	* Gets all collected entities from a project which have not yet been acquired.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	projectUuid The UUID of the project entity
	* @return	CollectedEntities
	*/
	public CollectedEntities getNotAcquiredCollectedEntitiesForProject(String projectUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/projects/:id/notAcquiredCollectedEntities/";
		String pathParameter = projectUuid;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false);
		return getCollectedEntities(result);
	}

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
	* @return	CollectedEntity
	*/
	public CollectedEntity moveCollectedEntityFromShoppingCartToProject(String shoppingCartUuid, CollectedEntityMoveSet collectedEntityMoveSet, String projectUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/shoppingCarts/:id/moveToProject/:projectId/";
		String pathParameter = shoppingCartUuid;
		byte[] bodyParameter = collectedEntityMoveSet.toByteArray();
		apiPath = replaceProjectUuid(apiPath, projectUuid);
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false);
		return getCollectedEntity(result);
	}

	/**
	* Moves an collected entity from the user's shopping cart to a project.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	collectedEntityMoveSet Information for moving the collected entity
	* @param	projectUuid The UUID of the project entity
	* @return	CollectedEntity
	*/
	public CollectedEntity moveCollectedEntityFromCurrentShoppingCartToProject(CollectedEntityMoveSet collectedEntityMoveSet, String projectUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/shoppingCarts/moveToProject/:projectId/";
		String pathParameter = null;
		byte[] bodyParameter = collectedEntityMoveSet.toByteArray();
		apiPath = replaceProjectUuid(apiPath, projectUuid);
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false);
		return getCollectedEntity(result);
	}

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
	* @return	CollectedEntities
	*/
	public CollectedEntities moveCollectedEntitiesFromShoppingCartToProject(String shoppingCartUuid, CollectedEntityMoveSets collectedEntityMoveSets, String projectUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/shoppingCarts/:id/moveToProject/:projectId/bulk/";
		String pathParameter = shoppingCartUuid;
		byte[] bodyParameter = collectedEntityMoveSets.toByteArray();
		apiPath = replaceProjectUuid(apiPath, projectUuid);
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false);
		return getCollectedEntities(result);
	}

	/**
	* Moves a bulk of collected entities from the user's shopping cart to a project.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	collectedEntityMoveSets Information for moving a bulk of collected entities
	* @param	projectUuid The UUID of the project entity
	* @return	CollectedEntities
	*/
	public CollectedEntities moveCollectedEntitiesFromCurrentShoppingCartToProject(CollectedEntityMoveSets collectedEntityMoveSets, String projectUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/shoppingCarts/moveToProject/:projectId/bulk/";
		String pathParameter = null;
		byte[] bodyParameter = collectedEntityMoveSets.toByteArray();
		apiPath = replaceProjectUuid(apiPath, projectUuid);
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false);
		return getCollectedEntities(result);
	}

	/**
	* Gets all collected entities for a shopping cart.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	shoppingCartUuid The UUID of the shopping cart
	* @return	CollectedEntities
	*/
	public CollectedEntities getCollectedEntitiesForShoppingCart(String shoppingCartUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/shoppingCarts/:id/collectedEntities/";
		String pathParameter = shoppingCartUuid;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false);
		return getCollectedEntities(result);
	}

	/**
	* Gets all collected entities for the user's shopping cart.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @return	CollectedEntities
	*/
	public CollectedEntities getCollectedEntitiesForCurrentShoppingCart()
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/shoppingCarts/collectedEntities/";
		String pathParameter = null;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false);
		return getCollectedEntities(result);
	}

	/**
	* Creates an collected entity in a shopping cart.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	shoppingCartUuid The UUID of the shopping cart
	* @param	collectedEntityCreateSet Information for creating the collected entity
	* @return	CollectedEntity
	*/
	public CollectedEntity createCollectedEntityInShoppingCart(String shoppingCartUuid, CollectedEntityCreateSet collectedEntityCreateSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/shoppingCarts/:id/collectedEntities/";
		String pathParameter = shoppingCartUuid;
		byte[] bodyParameter = collectedEntityCreateSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getCollectedEntity(result);
	}

	/**
	* Creates an collected entity in the user's shopping cart.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	collectedEntityCreateSet Information for creating the collected entity
	* @return	CollectedEntity
	*/
	public CollectedEntity createCollectedEntityInCurrentShoppingCart(CollectedEntityCreateSet collectedEntityCreateSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/shoppingCarts/collectedEntities/";
		String pathParameter = null;
		byte[] bodyParameter = collectedEntityCreateSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getCollectedEntity(result);
	}

	/**
	* Creates a bulk of collected entities in a shopping cart.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	shoppingCartUuid The UUID of the shopping cart
	* @param	collectedEntityCreateSets Information for creating a bulk of collected entities
	* @return	CollectedEntities
	*/
	public CollectedEntities createCollectedEntitiesInShoppingCart(String shoppingCartUuid, CollectedEntityCreateSets collectedEntityCreateSets)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/shoppingCarts/:id/collectedEntities/bulk/";
		String pathParameter = shoppingCartUuid;
		byte[] bodyParameter = collectedEntityCreateSets.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getCollectedEntities(result);
	}

	/**
	* Creates a bulk collected entities in the user's shopping cart.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	collectedEntityCreateSets Information for creating a bulk of collected entities
	* @return	CollectedEntities
	*/
	public CollectedEntities createCollectedEntitiesInCurrentShoppingCart(CollectedEntityCreateSets collectedEntityCreateSets)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/shoppingCarts/collectedEntities/bulk/";
		String pathParameter = null;
		byte[] bodyParameter = collectedEntityCreateSets.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getCollectedEntities(result);
	}

	/**
	* Updates an collected entity in a shopping cart.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	shoppingCartUuid The UUID of the shopping cart
	* @param	collectedEntityChangeSet Information for changing the collected entity
	* @return	CollectedEntity
	*/
	public CollectedEntity updateCollectedEntityInShoppingCart(String shoppingCartUuid, CollectedEntityChangeSet collectedEntityChangeSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/shoppingCarts/:id/collectedEntities/";
		String pathParameter = shoppingCartUuid;
		byte[] bodyParameter = collectedEntityChangeSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false);
		return getCollectedEntity(result);
	}

	/**
	* Updates an collected entity in the user's shopping cart.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	collectedEntityChangeSet Information for changing the collected entity
	* @return	CollectedEntity
	*/
	public CollectedEntity updateCollectedEntityInCurrentShoppingCart(CollectedEntityChangeSet collectedEntityChangeSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/shoppingCarts/collectedEntities/";
		String pathParameter = null;
		byte[] bodyParameter = collectedEntityChangeSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false);
		return getCollectedEntity(result);
	}

	/**
	* Updates a bulk of collected entities in a shopping cart.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	shoppingCartUuid The UUID of the shopping cart
	* @param	collectedEntityChangeSets Information for changing a bulk of collected entities
	* @return	CollectedEntities
	*/
	public CollectedEntities updateCollectedEntitiesInShoppingCart(String shoppingCartUuid, CollectedEntityChangeSets collectedEntityChangeSets)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/shoppingCarts/:id/collectedEntities/bulk/";
		String pathParameter = shoppingCartUuid;
		byte[] bodyParameter = collectedEntityChangeSets.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false);
		return getCollectedEntities(result);
	}

	/**
	* Updates a bulk of collected entities in the user's shopping cart.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	collectedEntityChangeSets Information for changing a bulk of collected entities
	* @return	CollectedEntities
	*/
	public CollectedEntities updateCollectedEntitiesInCurrentShoppingCart(CollectedEntityChangeSets collectedEntityChangeSets)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/shoppingCarts/collectedEntities/bulk/";
		String pathParameter = null;
		byte[] bodyParameter = collectedEntityChangeSets.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false);
		return getCollectedEntities(result);
	}

	/**
	* Deletes an collected entity from a shopping cart.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	shoppingCartUuid The UUID of the shopping cart
	* @param	collectedEntityDeleteSet Information for deleting the collected entity
	*/
	public void deleteCollectedEntityFromShoppingCart(String shoppingCartUuid, CollectedEntityDeleteSet collectedEntityDeleteSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/shoppingCarts/:id/collectedEntities/";
		String pathParameter = shoppingCartUuid;
		byte[] bodyParameter = collectedEntityDeleteSet.toByteArray();
		process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.DELETE, false);
	}

	/**
	* Deletes an collected entity from the user's shopping cart.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	collectedEntityDeleteSet Information for deleting the collected entity
	*/
	public void deleteCollectedEntityFromCurrentShoppingCart(CollectedEntityDeleteSet collectedEntityDeleteSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/shoppingCarts/collectedEntities/";
		String pathParameter = null;
		byte[] bodyParameter = collectedEntityDeleteSet.toByteArray();
		process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.DELETE, false);
	}

	/**
	* Deletes a bulk of collected entities from a shopping cart.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	shoppingCartUuid The UUID of the shopping cart
	* @param	collectedEntityDeleteSets Information for deleting a bulk of collected entities
	*/
	public void deleteCollectedEntitiesFromShoppingCart(String shoppingCartUuid, CollectedEntityDeleteSets collectedEntityDeleteSets)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/shoppingCarts/:id/collectedEntities/bulk/";
		String pathParameter = shoppingCartUuid;
		byte[] bodyParameter = collectedEntityDeleteSets.toByteArray();
		process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.DELETE, false);
	}

	/**
	* Deletes a bulk of collected entities from the user's shopping cart.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	collectedEntityDeleteSets Information for deleting a bulk of collected entities
	*/
	public void deleteCollectedEntitiesFromCurrentShoppingCart(CollectedEntityDeleteSets collectedEntityDeleteSets)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/shoppingCarts/collectedEntities/bulk/";
		String pathParameter = null;
		byte[] bodyParameter = collectedEntityDeleteSets.toByteArray();
		process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.DELETE, false);
	}

	/**
	* Gets a credit transaction of a brand.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @param	creditTransactionUuid The UUID of the credit transaction
	* @return	CreditTransaction
	*/
	public CreditTransaction getCreditTransactionForBrand(String brandUuid, String creditTransactionUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/brands/:id/creditTransactions/:creditTransactionId/";
		String pathParameter = brandUuid;
		byte[] bodyParameter = null;
		apiPath = replaceCreditTransactionUuid(apiPath, creditTransactionUuid);
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false);
		return getCreditTransaction(result);
	}

	/**
	* Gets all credit transactions for a brand. Please specify desired credit transaction types through query data.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @return	CreditTransactions
	*/
	public CreditTransactions getCreditTransactionsForBrand(String brandUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/brands/:id/creditTransactions/";
		String pathParameter = brandUuid;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false);
		return getCreditTransactions(result);
	}

	/**
	* Gets all credit transactions that belong to a certain credit transaction of a brand. Please specify desired credit transaction types through query data.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @param	parentCreditTransactionUuid The UUID of the parent credit transaction
	* @return	CreditTransactions
	*/
	public CreditTransactions getSubCreditTransactionsForBrandCreditTransaction(String brandUuid, String parentCreditTransactionUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/brands/:id/creditTransactions/:creditTransactionId/childs/";
		String pathParameter = brandUuid;
		byte[] bodyParameter = null;
		apiPath = replaceCreditTransactionUuid(apiPath, parentCreditTransactionUuid);
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false);
		return getCreditTransactions(result);
	}

	/**
	* Creates a task which will generate downloads associated to all credit transactions of a brand.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @param	creditTransactionCreateDownloadTaskSet Information for creating a download task for a credit transaction
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse createBrandCreditTransactionDownloadTask(String brandUuid, CreditTransactionCreateDownloadTaskSet creditTransactionCreateDownloadTaskSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/brands/:id/creditTransactions/createDownloadTask/";
		String pathParameter = brandUuid;
		byte[] bodyParameter = creditTransactionCreateDownloadTaskSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getServerTaskResponse(result);
	}

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
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse createBrandCreditTransactionDownloadTaskForCreditTransaction(String brandUuid, CreditTransactionCreateDownloadTaskSet creditTransactionCreateDownloadTaskSet, String creditTransactionUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/brands/:id/creditTransactions/:creditTransactionId/createDownloadTask/";
		String pathParameter = brandUuid;
		byte[] bodyParameter = creditTransactionCreateDownloadTaskSet.toByteArray();
		apiPath = replaceCreditTransactionUuid(apiPath, creditTransactionUuid);
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getServerTaskResponse(result);
	}

	/**
	* Gets metadata for an entity with given type and UUID.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	entityType The type of the entity
	* @param	entityUuid The UUID of the entity
	* @return	Entity
	*/
	public Entity getEntity(EntityType entityType, String entityUuid)
		throws BackendException, Exception
	{
		String apiPath = getUuidApiPath(entityType);
		String pathParameter = entityUuid;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, true);
		return getEntity(result);
	}

	/**
	* Gets metadata for the child entities of an entity with given type and UUID.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	entityType The type of the entity
	* @param	entityUuid The UUID of the entity
	* @return	Entities
	*/
	public Entities getChildEntities(EntityType entityType, String entityUuid)
		throws BackendException, Exception
	{
		String apiPath = getChildsApiPath(entityType);
		String pathParameter = entityUuid;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, true);
		return getEntities(result);
	}

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
	* @return	Entities
	*/
	public Entities getChildEntitiesPost(EntityType entityType, String entityUuid, QueryData queryData)
		throws BackendException, Exception
	{
		String apiPath = getChildsApiPath(entityType);
		String pathParameter = entityUuid;
		byte[] bodyParameter = queryData.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, true);
		return getEntities(result);
	}

	/**
	* Creates a new entity with given type.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityType The type of the entity
	* @param	entityChangeSet Information for creating or updating an entity
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse createEntity(EntityType entityType, EntityChangeSet entityChangeSet)
		throws BackendException, Exception
	{
		String apiPath = getNonUuidApiPath(entityType);
		String pathParameter = null;
		byte[] bodyParameter = entityChangeSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getServerTaskResponse(result);
	}

	/**
	* Creates a new entity with given type, and uploads binaries that will be attached to the entity.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityType The type of the entity
	* @param	entityChangeSet Information for creating or updating an entity
	* @param	binaries List of binaries for upload. Please note that in entity metadata you have to give the metadata for the binaries you upload
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse createEntityWithBinaries(EntityType entityType, EntityChangeSet entityChangeSet, File[] binaries)
		throws BackendException, Exception
	{
		String apiPath = getNonUuidApiPath(entityType);
		String pathParameter = null;
		byte[] bodyParameter = entityChangeSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_CW, apiPath, pathParameter, bodyParameter, binaries, ApiClient.Method.POST, false);
		return getServerTaskResponse(result);
	}

	/**
	* Creates a bulk of new entities with given type.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityType The type of the entity
	* @param	entityChangeSets Information for creating or updating a bulk of entities
	* @return	ServerTaskResponses
	*/
	public ServerTaskResponses createEntities(EntityType entityType, EntityChangeSets entityChangeSets)
		throws BackendException, Exception
	{
		String apiPath = getMultiApiPath(entityType);
		String pathParameter = null;
		byte[] bodyParameter = entityChangeSets.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getServerTaskResponses(result);
	}

	/**
	* Creates a bulk of new entities with mixed type.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityChangeSets Information for creating or updating a bulk of entities
	* @return	ServerTaskResponses
	*/
	public ServerTaskResponses createEntitiesMixed(EntityChangeSets entityChangeSets)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/entities/";
		String pathParameter = null;
		byte[] bodyParameter = entityChangeSets.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getServerTaskResponses(result);
	}

	/**
	* Updates an entity with given type and UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityType The type of the entity
	* @param	entityUuid The UUID of the entity
	* @param	entityChangeSet Information for creating or updating an entity
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse updateEntity(EntityType entityType, String entityUuid, EntityChangeSet entityChangeSet)
		throws BackendException, Exception
	{
		String apiPath = getUuidApiPath(entityType);
		String pathParameter = entityUuid;
		byte[] bodyParameter = entityChangeSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false);
		return getServerTaskResponse(result);
	}

	/**
	* Updates an entity with given type and UUID. Allows changing the metadata of binary uploads, and uploads binaries that will be attached to the entity.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityType The type of the entity
	* @param	entityUuid The UUID of the entity
	* @param	entityChangeSet Information for creating or updating an entity
	* @param	binaries List of binaries for upload. Please note that in entity metadata you have to give the metadata for the binaries you upload
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse updateEntityWithBinaries(EntityType entityType, String entityUuid, EntityChangeSet entityChangeSet, File[] binaries)
		throws BackendException, Exception
	{
		String apiPath = getUuidApiPath(entityType);
		String pathParameter = entityUuid;
		byte[] bodyParameter = entityChangeSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_CW, apiPath, pathParameter, bodyParameter, binaries, ApiClient.Method.PUT, false);
		return getServerTaskResponse(result);
	}

	/**
	* Updates a bulk of entities with given type.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityType The type of the entity
	* @param	entityChangeSets Information for creating or updating a bulk of entities
	* @return	ServerTaskResponses
	*/
	public ServerTaskResponses updateEntities(EntityType entityType, EntityChangeSets entityChangeSets)
		throws BackendException, Exception
	{
		String apiPath = getMultiApiPath(entityType);
		String pathParameter = null;
		byte[] bodyParameter = entityChangeSets.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false);
		return getServerTaskResponses(result);
	}

	/**
	* Updates a bulk of new entities with mixed type.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityChangeSets Information for creating or updating a bulk of entities
	* @return	ServerTaskResponses
	*/
	public ServerTaskResponses updateEntitiesMixed(EntityChangeSets entityChangeSets)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/entities/";
		String pathParameter = null;
		byte[] bodyParameter = entityChangeSets.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false);
		return getServerTaskResponses(result);
	}

	/**
	* Deletes an entity with given type and UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityType The type of the entity
	* @param	entityUuid The UUID of the entity
	* @param	entityDeleteSet Information for deleting an entity
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse deleteEntity(EntityType entityType, String entityUuid, EntityDeleteSet entityDeleteSet)
		throws BackendException, Exception
	{
		String apiPath = getUuidApiPath(entityType);
		String pathParameter = entityUuid;
		byte[] bodyParameter = entityDeleteSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.DELETE, false);
		return getServerTaskResponse(result);
	}

	/**
	* Deletes a bulk of entities with given type.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityType The type of the entity
	* @param	entityDeleteSets Information for deleting a bulk of entities
	* @return	ServerTaskResponses
	*/
	public ServerTaskResponses deleteEntities(EntityType entityType, EntityDeleteSets entityDeleteSets)
		throws BackendException, Exception
	{
		String apiPath = getMultiApiPath(entityType);
		String pathParameter = null;
		byte[] bodyParameter = entityDeleteSets.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.DELETE, false);
		return getServerTaskResponses(result);
	}

	/**
	* Gets a list of all brands.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @return	Entities
	*/
	public Entities getAllBrands()
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/brands/";
		String pathParameter = null;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, true);
		return getEntities(result);
	}

	/**
	* Gets a list of all brands. Uses the request body instead of the URL to specify query parameter data.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	queryData The query parameter data
	* @return	Entities
	*/
	public Entities getAllBrandsPost(QueryData queryData)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/brands/";
		String pathParameter = null;
		byte[] bodyParameter = queryData.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, true);
		return getEntities(result);
	}

	/**
	* Gets an brand entity with given UUID.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @return	Entity
	*/
	public Entity getBrand(String brandUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/brands/:id/";
		String pathParameter = brandUuid;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, true);
		return getEntity(result);
	}

	/**
	* Gets an brand entity with given subdomain.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandSubdomain The subdomain of the brand entity
	* @return	Entity
	*/
	public Entity getBrandBySubdomain(String brandSubdomain)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/brands/bySubdomain/:id/";
		String pathParameter = brandSubdomain;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, true);
		return getEntity(result);
	}

	/**
	* Gets metadata for the child entities of an brand entity with given UUID.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @return	Entities
	*/
	public Entities getBrandChildEntities(String brandUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/brands/:id/childs/";
		String pathParameter = brandUuid;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, true);
		return getEntities(result);
	}

	/**
	* Gets metadata for the child entities of an brand entity with given UUID. Uses the request body instead of the URL to specify query parameter data.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @param	queryData The query parameter data
	* @return	Entities
	*/
	public Entities getBrandChildEntitiesPost(String brandUuid, QueryData queryData)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/brands/:id/childs/";
		String pathParameter = brandUuid;
		byte[] bodyParameter = queryData.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, true);
		return getEntities(result);
	}

	/**
	* Creates a new brand entity.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityChangeSet Information for creating or updating an entity
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse createBrand(EntityChangeSet entityChangeSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/brands/";
		String pathParameter = null;
		byte[] bodyParameter = entityChangeSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getServerTaskResponse(result);
	}

	/**
	* Creates a new brand entity, and uploads binaries that will be attached to the brand entity.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityChangeSet Information for creating or updating an entity
	* @param	binaries List of binaries for upload. Please note that in entity metadata you have to give the metadata for the binaries you upload
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse createBrandWithBinaries(EntityChangeSet entityChangeSet, File[] binaries)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/brands/";
		String pathParameter = null;
		byte[] bodyParameter = entityChangeSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_CW, apiPath, pathParameter, bodyParameter, binaries, ApiClient.Method.POST, false);
		return getServerTaskResponse(result);
	}

	/**
	* Updates an brand entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	brandUuid The UUID of the brand entity
	* @param	entityChangeSet Information for creating or updating an entity
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse updateBrand(String brandUuid, EntityChangeSet entityChangeSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/brands/:id/";
		String pathParameter = brandUuid;
		byte[] bodyParameter = entityChangeSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false);
		return getServerTaskResponse(result);
	}

	/**
	* Updates an brand entity with given UUID. Allows changing the metadata of binary uploads, and uploads binaries that will be attached to the entity.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityUuid The UUID of the entity
	* @param	entityChangeSet Information for creating or updating an entity
	* @param	binaries List of binaries for upload. Please note that in entity metadata you have to give the metadata for the binaries you upload
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse updateBrandWithBinaries(String entityUuid, EntityChangeSet entityChangeSet, File[] binaries)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/brands/:id/";
		String pathParameter = entityUuid;
		byte[] bodyParameter = entityChangeSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_CW, apiPath, pathParameter, bodyParameter, binaries, ApiClient.Method.PUT, false);
		return getServerTaskResponse(result);
	}

	/**
	* Gets an trash entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	trashUuid The UUID of the trash entity
	* @return	Entity
	*/
	public Entity getTrash(String trashUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/trash/:id/";
		String pathParameter = trashUuid;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false);
		return getEntity(result);
	}

	/**
	* Gets metadata for the child entities of an trash entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	trashUuid The UUID of the trash entity
	* @return	Entities
	*/
	public Entities getTrashChildEntities(String trashUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/trash/:id/childs/";
		String pathParameter = trashUuid;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false);
		return getEntities(result);
	}

	/**
	* Gets metadata for the child entities of an trash entity with given UUID. Uses the request body instead of the URL to specify query parameter data.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	trashUuid The UUID of the trash entity
	* @param	queryData The query parameter data
	* @return	Entities
	*/
	public Entities getTrashChildEntitiesPost(String trashUuid, QueryData queryData)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/trash/:id/childs/";
		String pathParameter = trashUuid;
		byte[] bodyParameter = queryData.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getEntities(result);
	}

	/**
	* Restores an entity from the trash to its original location.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	trashUuid The UUID of the trash entity
	* @param	entityRestoreSet Information for restoring an entity
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse restoreEntity(String trashUuid, EntityRestoreSet entityRestoreSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/trash/:id/";
		String pathParameter = trashUuid;
		byte[] bodyParameter = entityRestoreSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getServerTaskResponse(result);
	}

	/**
	* Gets an folder entity with given UUID.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	folderUuid The UUID of the folder entity
	* @return	Entity
	*/
	public Entity getFolder(String folderUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/folders/:id/";
		String pathParameter = folderUuid;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, true);
		return getEntity(result);
	}

	/**
	* Gets metadata for the child entities of an folder entity with given UUID.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	folderUuid The UUID of the folder entity
	* @return	Entities
	*/
	public Entities getFolderChildEntities(String folderUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/folders/:id/childs/";
		String pathParameter = folderUuid;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, true);
		return getEntities(result);
	}

	/**
	* Gets metadata for the child entities of an folder entity with given UUID. Uses the request body instead of the URL to specify query parameter data.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	folderUuid The UUID of the folder entity
	* @param	queryData The query parameter data
	* @return	Entities
	*/
	public Entities getFolderChildEntitiesPost(String folderUuid, QueryData queryData)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/folders/:id/childs/";
		String pathParameter = folderUuid;
		byte[] bodyParameter = queryData.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, true);
		return getEntities(result);
	}

	/**
	* Creates a new folder entity.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityChangeSet Information for creating or updating an entity
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse createFolder(EntityChangeSet entityChangeSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/folders/";
		String pathParameter = null;
		byte[] bodyParameter = entityChangeSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getServerTaskResponse(result);
	}

	/**
	* Creates a new folder entity, and uploads binaries that will be attached to the folder entity.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityChangeSet Information for creating or updating an entity
	* @param	binaries List of binaries for upload. Please note that in entity metadata you have to give the metadata for the binaries you upload
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse createFolderWithBinaries(EntityChangeSet entityChangeSet, File[] binaries)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/folders/";
		String pathParameter = null;
		byte[] bodyParameter = entityChangeSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_CW, apiPath, pathParameter, bodyParameter, binaries, ApiClient.Method.POST, false);
		return getServerTaskResponse(result);
	}

	/**
	* Updates an folder entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	folderUuid The UUID of the folder entity
	* @param	entityChangeSet Information for creating or updating an entity
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse updateFolder(String folderUuid, EntityChangeSet entityChangeSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/folders/:id/";
		String pathParameter = folderUuid;
		byte[] bodyParameter = entityChangeSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false);
		return getServerTaskResponse(result);
	}

	/**
	* Updates an folder entity with given UUID. Allows changing the metadata of binary uploads, and uploads binaries that will be attached to the entity.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityUuid The UUID of the entity
	* @param	entityChangeSet Information for creating or updating an entity
	* @param	binaries List of binaries for upload. Please note that in entity metadata you have to give the metadata for the binaries you upload
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse updateFolderWithBinaries(String entityUuid, EntityChangeSet entityChangeSet, File[] binaries)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/folders/:id/";
		String pathParameter = entityUuid;
		byte[] bodyParameter = entityChangeSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_CW, apiPath, pathParameter, bodyParameter, binaries, ApiClient.Method.PUT, false);
		return getServerTaskResponse(result);
	}

	/**
	* Deletes an folder entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	folderUuid The UUID of the folder entity
	* @param	entityDeleteSet Information for deleting an entity
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse deleteFolder(String folderUuid, EntityDeleteSet entityDeleteSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/folders/:id/";
		String pathParameter = folderUuid;
		byte[] bodyParameter = entityDeleteSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.DELETE, false);
		return getServerTaskResponse(result);
	}

	/**
	* Gets an asset entity with given UUID.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	assetUuid The UUID of the asset entity
	* @return	Entity
	*/
	public Entity getAsset(String assetUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/assets/:id/";
		String pathParameter = assetUuid;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, true);
		return getEntity(result);
	}

	/**
	* Creates a new asset entity.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityChangeSet Information for creating or updating an entity
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse createAsset(EntityChangeSet entityChangeSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/assets/";
		String pathParameter = null;
		byte[] bodyParameter = entityChangeSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getServerTaskResponse(result);
	}

	/**
	* Creates a new asset entity, and uploads binaries that will be attached to the asset entity.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityChangeSet Information for creating or updating an entity
	* @param	binaries List of binaries for upload. Please note that in entity metadata you have to give the metadata for the binaries you upload
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse createAssetWithBinaries(EntityChangeSet entityChangeSet, File[] binaries)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/assets/";
		String pathParameter = null;
		byte[] bodyParameter = entityChangeSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_CW, apiPath, pathParameter, bodyParameter, binaries, ApiClient.Method.POST, false);
		return getServerTaskResponse(result);
	}

	/**
	* Updates an asset entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	assetUuid The UUID of the asset entity
	* @param	entityChangeSet Information for creating or updating an entity
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse updateAsset(String assetUuid, EntityChangeSet entityChangeSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/assets/:id/";
		String pathParameter = assetUuid;
		byte[] bodyParameter = entityChangeSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false);
		return getServerTaskResponse(result);
	}

	/**
	* Updates an asset entity with given UUID. Allows changing the metadata of binary uploads, and uploads binaries that will be attached to the entity.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityUuid The UUID of the entity
	* @param	entityChangeSet Information for creating or updating an entity
	* @param	binaries List of binaries for upload. Please note that in entity metadata you have to give the metadata for the binaries you upload
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse updateAssetWithBinaries(String entityUuid, EntityChangeSet entityChangeSet, File[] binaries)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/assets/:id/";
		String pathParameter = entityUuid;
		byte[] bodyParameter = entityChangeSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_CW, apiPath, pathParameter, bodyParameter, binaries, ApiClient.Method.PUT, false);
		return getServerTaskResponse(result);
	}

	/**
	* Deletes an asset entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	assetUuid The UUID of the asset entity
	* @param	entityDeleteSet Information for deleting an entity
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse deleteAsset(String assetUuid, EntityDeleteSet entityDeleteSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/assets/:id/";
		String pathParameter = assetUuid;
		byte[] bodyParameter = entityDeleteSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.DELETE, false);
		return getServerTaskResponse(result);
	}

	/**
	* Gets an jobs entity with given UUID.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	jobsUuid The UUID of the jobs entity
	* @return	Entity
	*/
	public Entity getJobs(String jobsUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/_jobs/:id/";
		String pathParameter = jobsUuid;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, true);
		return getEntity(result);
	}

	/**
	* Gets metadata for the child entities of an jobs entity with given UUID.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	jobsUuid The UUID of the jobs entity
	* @return	Entities
	*/
	public Entities getJobsChildEntities(String jobsUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/_jobs/:id/childs/";
		String pathParameter = jobsUuid;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, true);
		return getEntities(result);
	}

	/**
	* Gets metadata for the child entities of an jobs entity with given UUID. Uses the request body instead of the URL to specify query parameter data.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	jobsUuid The UUID of the jobs entity
	* @param	queryData The query parameter data
	* @return	Entities
	*/
	public Entities getJobsChildEntitiesPost(String jobsUuid, QueryData queryData)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/_jobs/:id/childs/";
		String pathParameter = jobsUuid;
		byte[] bodyParameter = queryData.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, true);
		return getEntities(result);
	}

	/**
	* Updates an jobs entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	jobsUuid The UUID of the jobs entity
	* @param	entityChangeSet Information for creating or updating an entity
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse updateJobs(String jobsUuid, EntityChangeSet entityChangeSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/_jobs/:id/";
		String pathParameter = jobsUuid;
		byte[] bodyParameter = entityChangeSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false);
		return getServerTaskResponse(result);
	}

	/**
	* Updates an jobs entity with given UUID. Allows changing the metadata of binary uploads, and uploads binaries that will be attached to the entity.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityUuid The UUID of the entity
	* @param	entityChangeSet Information for creating or updating an entity
	* @param	binaries List of binaries for upload. Please note that in entity metadata you have to give the metadata for the binaries you upload
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse updateJobsWithBinaries(String entityUuid, EntityChangeSet entityChangeSet, File[] binaries)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/_jobs/:id/";
		String pathParameter = entityUuid;
		byte[] bodyParameter = entityChangeSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_CW, apiPath, pathParameter, bodyParameter, binaries, ApiClient.Method.PUT, false);
		return getServerTaskResponse(result);
	}

	/**
	* Gets an job entity with given UUID.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	jobUuid The UUID of the job entity
	* @return	Entity
	*/
	public Entity getJob(String jobUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/jobs/:id/";
		String pathParameter = jobUuid;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, true);
		return getEntity(result);
	}

	/**
	* Gets metadata for the child entities of an job entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	jobUuid The UUID of the job entity
	* @return	Entities
	*/
	public Entities getJobChildEntities(String jobUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/jobs/:id/childs/";
		String pathParameter = jobUuid;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false);
		return getEntities(result);
	}

	/**
	* Gets metadata for the child entities of an job entity with given UUID. Uses the request body instead of the URL to specify query parameter data.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	jobUuid The UUID of the job entity
	* @param	queryData The query parameter data
	* @return	Entities
	*/
	public Entities getJobChildEntitiesPost(String jobUuid, QueryData queryData)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/jobs/:id/childs/";
		String pathParameter = jobUuid;
		byte[] bodyParameter = queryData.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getEntities(result);
	}

	/**
	* Creates a new job entity.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityChangeSet Information for creating or updating an entity
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse createJob(EntityChangeSet entityChangeSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/jobs/";
		String pathParameter = null;
		byte[] bodyParameter = entityChangeSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getServerTaskResponse(result);
	}

	/**
	* Creates a new job entity, and uploads binaries that will be attached to the job entity.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityChangeSet Information for creating or updating an entity
	* @param	binaries List of binaries for upload. Please note that in entity metadata you have to give the metadata for the binaries you upload
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse createJobWithBinaries(EntityChangeSet entityChangeSet, File[] binaries)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/jobs/";
		String pathParameter = null;
		byte[] bodyParameter = entityChangeSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_CW, apiPath, pathParameter, bodyParameter, binaries, ApiClient.Method.POST, false);
		return getServerTaskResponse(result);
	}

	/**
	* Updates an job entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	jobUuid The UUID of the job entity
	* @param	entityChangeSet Information for creating or updating an entity
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse updateJob(String jobUuid, EntityChangeSet entityChangeSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/jobs/:id/";
		String pathParameter = jobUuid;
		byte[] bodyParameter = entityChangeSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false);
		return getServerTaskResponse(result);
	}

	/**
	* Updates an job entity with given UUID. Allows changing the metadata of binary uploads, and uploads binaries that will be attached to the entity.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityUuid The UUID of the entity
	* @param	entityChangeSet Information for creating or updating an entity
	* @param	binaries List of binaries for upload. Please note that in entity metadata you have to give the metadata for the binaries you upload
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse updateJobWithBinaries(String entityUuid, EntityChangeSet entityChangeSet, File[] binaries)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/jobs/:id/";
		String pathParameter = entityUuid;
		byte[] bodyParameter = entityChangeSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_CW, apiPath, pathParameter, bodyParameter, binaries, ApiClient.Method.PUT, false);
		return getServerTaskResponse(result);
	}

	/**
	* Deletes an job entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	jobUuid The UUID of the job entity
	* @param	entityDeleteSet Information for deleting an entity
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse deleteJob(String jobUuid, EntityDeleteSet entityDeleteSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/jobs/:id/";
		String pathParameter = jobUuid;
		byte[] bodyParameter = entityDeleteSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.DELETE, false);
		return getServerTaskResponse(result);
	}

	/**
	* Applies for participation in a job with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	jobUuid The UUID of the job entity
	* @param	jobApplicationSet Information for applying for participating in a job
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse applyForJob(String jobUuid, JobApplicationSet jobApplicationSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/jobs/:id/apply/";
		String pathParameter = jobUuid;
		byte[] bodyParameter = jobApplicationSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getServerTaskResponse(result);
	}

	/**
	* Participates in a job with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	jobUuid The UUID of the job entity
	* @param	jobParticipationSet Information for participating in a job
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse participateInJob(String jobUuid, JobParticipationSet jobParticipationSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/jobs/:id/participate/";
		String pathParameter = jobUuid;
		byte[] bodyParameter = jobParticipationSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getServerTaskResponse(result);
	}

	/**
	* Closes a job with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	jobUuid The UUID of the job entity
	* @param	jobCloseSet Information for closing a job
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse closeJob(String jobUuid, JobCloseSet jobCloseSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/jobs/:id/close/";
		String pathParameter = jobUuid;
		byte[] bodyParameter = jobCloseSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getServerTaskResponse(result);
	}

	/**
	* Gets an participations entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	participationsUuid The UUID of the participations entity
	* @return	Entity
	*/
	public Entity getParticipations(String participationsUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/_participations/:id/";
		String pathParameter = participationsUuid;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false);
		return getEntity(result);
	}

	/**
	* Gets metadata for the child entities of an participations entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	participationsUuid The UUID of the participations entity
	* @return	Entities
	*/
	public Entities getParticipationsChildEntities(String participationsUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/_participations/:id/childs/";
		String pathParameter = participationsUuid;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false);
		return getEntities(result);
	}

	/**
	* Gets metadata for the child entities of an participations entity with given UUID. Uses the request body instead of the URL to specify query parameter data.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	participationsUuid The UUID of the participations entity
	* @param	queryData The query parameter data
	* @return	Entities
	*/
	public Entities getParticipationsChildEntitiesPost(String participationsUuid, QueryData queryData)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/_participations/:id/childs/";
		String pathParameter = participationsUuid;
		byte[] bodyParameter = queryData.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getEntities(result);
	}

	/**
	* Updates an participations entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	participationsUuid The UUID of the participations entity
	* @param	entityChangeSet Information for creating or updating an entity
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse updateParticipations(String participationsUuid, EntityChangeSet entityChangeSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/_participations/:id/";
		String pathParameter = participationsUuid;
		byte[] bodyParameter = entityChangeSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false);
		return getServerTaskResponse(result);
	}

	/**
	* Gets an participation entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	participationUuid The UUID of the participation entity
	* @return	Entity
	*/
	public Entity getParticipation(String participationUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/participations/:id/";
		String pathParameter = participationUuid;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false);
		return getEntity(result);
	}

	/**
	* Gets metadata for the child entities of an participation entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	participationUuid The UUID of the participation entity
	* @return	Entities
	*/
	public Entities getParticipationChildEntities(String participationUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/participations/:id/childs/";
		String pathParameter = participationUuid;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false);
		return getEntities(result);
	}

	/**
	* Gets metadata for the child entities of an participation entity with given UUID. Uses the request body instead of the URL to specify query parameter data.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	participationUuid The UUID of the participation entity
	* @param	queryData The query parameter data
	* @return	Entities
	*/
	public Entities getParticipationChildEntitiesPost(String participationUuid, QueryData queryData)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/participations/:id/childs/";
		String pathParameter = participationUuid;
		byte[] bodyParameter = queryData.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getEntities(result);
	}

	/**
	* Updates an participation entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	participationUuid The UUID of the participation entity
	* @param	entityChangeSet Information for creating or updating an entity
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse updateParticipation(String participationUuid, EntityChangeSet entityChangeSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/participations/:id/";
		String pathParameter = participationUuid;
		byte[] bodyParameter = entityChangeSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false);
		return getServerTaskResponse(result);
	}

	/**
	* Deletes an participation entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	participationUuid The UUID of the participation entity
	* @param	entityDeleteSet Information for deleting an entity
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse deleteParticipation(String participationUuid, EntityDeleteSet entityDeleteSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/participations/:id/";
		String pathParameter = participationUuid;
		byte[] bodyParameter = entityDeleteSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.DELETE, false);
		return getServerTaskResponse(result);
	}

	/**
	* Submits an participation entity with given UUID to the job issuer.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	participationUuid The UUID of the participation entity
	* @param	jobParticipationSubmitSet Information for submitting an participation entity to the job issuer
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse submitParticipation(String participationUuid, JobParticipationSubmitSet jobParticipationSubmitSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/participations/:id/submit/";
		String pathParameter = participationUuid;
		byte[] bodyParameter = jobParticipationSubmitSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getServerTaskResponse(result);
	}

	/**
	* Rejects an participation entity with given UUID from the job issuer back to the participant.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	participationUuid The UUID of the participation entity
	* @param	jobParticipationRejectSet Information for rejecting an participation entity from the job issuer back to the participant
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse rejectParticipation(String participationUuid, JobParticipationRejectSet jobParticipationRejectSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/participations/:id/reject/";
		String pathParameter = participationUuid;
		byte[] bodyParameter = jobParticipationRejectSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getServerTaskResponse(result);
	}

	/**
	* Accepting an participation entity with given UUID for participation in the job.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	participationUuid The UUID of the participation entity
	* @param	jobApplicationAcceptSet Information for accepting an participation entity for participation in the job
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse acceptJobApplication(String participationUuid, JobApplicationAcceptSet jobApplicationAcceptSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/participations/:id/accept/";
		String pathParameter = participationUuid;
		byte[] bodyParameter = jobApplicationAcceptSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getServerTaskResponse(result);
	}

	/**
	* Gets an projects entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	projectsUuid The UUID of the projects entity
	* @return	Entity
	*/
	public Entity getProjects(String projectsUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/_projects/:id/";
		String pathParameter = projectsUuid;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false);
		return getEntity(result);
	}

	/**
	* Gets metadata for the child entities of an projects entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	projectsUuid The UUID of the projects entity
	* @return	Entities
	*/
	public Entities getProjectsChildEntities(String projectsUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/_projects/:id/childs/";
		String pathParameter = projectsUuid;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false);
		return getEntities(result);
	}

	/**
	* Gets metadata for the child entities of an projects entity with given UUID. Uses the request body instead of the URL to specify query parameter data.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	projectsUuid The UUID of the projects entity
	* @param	queryData The query parameter data
	* @return	Entities
	*/
	public Entities getProjectsChildEntitiesPost(String projectsUuid, QueryData queryData)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/_projects/:id/childs/";
		String pathParameter = projectsUuid;
		byte[] bodyParameter = queryData.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getEntities(result);
	}

	/**
	* Updates an projects entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	projectsUuid The UUID of the projects entity
	* @param	entityChangeSet Information for creating or updating an entity
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse updateProjects(String projectsUuid, EntityChangeSet entityChangeSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/_projects/:id/";
		String pathParameter = projectsUuid;
		byte[] bodyParameter = entityChangeSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false);
		return getServerTaskResponse(result);
	}

	/**
	* Gets an project entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	projectUuid The UUID of the project entity
	* @return	Entity
	*/
	public Entity getProject(String projectUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/projects/:id/";
		String pathParameter = projectUuid;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false);
		return getEntity(result);
	}

	/**
	* Creates a new project entity.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityChangeSet Information for creating or updating an entity
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse createProject(EntityChangeSet entityChangeSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/projects/";
		String pathParameter = null;
		byte[] bodyParameter = entityChangeSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getServerTaskResponse(result);
	}

	/**
	* Creates a new project entity, and uploads binaries that will be attached to the project entity.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityChangeSet Information for creating or updating an entity
	* @param	binaries List of binaries for upload. Please note that in entity metadata you have to give the metadata for the binaries you upload
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse createProjectWithBinaries(EntityChangeSet entityChangeSet, File[] binaries)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/projects/";
		String pathParameter = null;
		byte[] bodyParameter = entityChangeSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_CW, apiPath, pathParameter, bodyParameter, binaries, ApiClient.Method.POST, false);
		return getServerTaskResponse(result);
	}

	/**
	* Updates an project entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	projectUuid The UUID of the project entity
	* @param	entityChangeSet Information for creating or updating an entity
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse updateProject(String projectUuid, EntityChangeSet entityChangeSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/projects/:id/";
		String pathParameter = projectUuid;
		byte[] bodyParameter = entityChangeSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false);
		return getServerTaskResponse(result);
	}

	/**
	* Updates an project entity with given UUID. Allows changing the metadata of binary uploads, and uploads binaries that will be attached to the entity.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityUuid The UUID of the entity
	* @param	entityChangeSet Information for creating or updating an entity
	* @param	binaries List of binaries for upload. Please note that in entity metadata you have to give the metadata for the binaries you upload
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse updateProjectWithBinaries(String entityUuid, EntityChangeSet entityChangeSet, File[] binaries)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/projects/:id/";
		String pathParameter = entityUuid;
		byte[] bodyParameter = entityChangeSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_CW, apiPath, pathParameter, bodyParameter, binaries, ApiClient.Method.PUT, false);
		return getServerTaskResponse(result);
	}

	/**
	* Deletes an project entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	projectUuid The UUID of the project entity
	* @param	entityDeleteSet Information for deleting an entity
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse deleteProject(String projectUuid, EntityDeleteSet entityDeleteSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/projects/:id/";
		String pathParameter = projectUuid;
		byte[] bodyParameter = entityDeleteSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.DELETE, false);
		return getServerTaskResponse(result);
	}

	/**
	* Gets all brand's projects that are currently open for the user to collect entities to.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @return	Entities
	*/
	public Entities getCollectableProjectsForBrand(String brandUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/brands/:id/projects/";
		String pathParameter = brandUuid;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false);
		return getEntities(result);
	}

	/**
	* Gets all brand's projects that are currently open for the user to collect entities to. Uses the request body instead of the URL to specify query parameter data.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @param	queryData The query parameter data
	* @return	Entities
	*/
	public Entities getCollectableProjectsForBrandPost(String brandUuid, QueryData queryData)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/brands/:id/projects/";
		String pathParameter = brandUuid;
		byte[] bodyParameter = queryData.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getEntities(result);
	}

	/**
	* Searches the complete entity index based on filter criteria. The filter criteria is given through query parameter data.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @return	Entities
	*/
	public Entities searchEntities()
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/searchEntities/";
		String pathParameter = null;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, true);
		return getEntities(result);
	}

	/**
	* Searches the complete entity index based on filter criteria. The filter criteria is given through query parameter data. Uses the request body instead of the URL to specify query parameter data.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	queryData The query parameter data
	* @return	Entities
	*/
	public Entities searchEntitiesPost(QueryData queryData)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/searchEntities/";
		String pathParameter = null;
		byte[] bodyParameter = queryData.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, true);
		return getEntities(result);
	}

	/**
	* Searches the child entities of an entity with given UUID based on filter criteria. The filter criteria is given through query parameter data.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	parentEntityUuid The UUID of the parent entity
	* @return	Entities
	*/
	public Entities searchEntitiesWithinEntity(String parentEntityUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/searchEntities/:id/childs/";
		String pathParameter = parentEntityUuid;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, true);
		return getEntities(result);
	}

	/**
	* Searches the child entities of an entity with given UUID based on filter criteria. The filter criteria is given through query parameter data. Uses the request body instead of the URL to specify query parameter data.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	parentEntityUuid The UUID of the parent entity
	* @param	queryData The query parameter data
	* @return	Entities
	*/
	public Entities searchEntitiesWithinEntityPost(String parentEntityUuid, QueryData queryData)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/searchEntities/:id/childs/";
		String pathParameter = parentEntityUuid;
		byte[] bodyParameter = queryData.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, true);
		return getEntities(result);
	}

	/**
	* Takes user input and returns a list of matching user groups, users, brands or licenses. The input needs to be given in 'terms' query parameter, the types of entities can be specified in query data as well.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @return	AutocompletedEntities
	*/
	public AutocompletedEntities searchAutocompletedEntities()
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/searchAutocompletedEntities/";
		String pathParameter = null;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, true);
		return getAutocompletedEntities(result);
	}

	/**
	* Takes user input and returns a list of matching user groups, users, brands or licenses. The input needs to be given in 'terms' query parameter, the types of entities can be specified in query data as well. Uses the request body instead of the URL to specify query parameter data.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	queryData The query parameter data
	* @return	AutocompletedEntities
	*/
	public AutocompletedEntities searchAutocompletedEntitiesPost(QueryData queryData)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/searchAutocompletedEntities/";
		String pathParameter = null;
		byte[] bodyParameter = queryData.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, true);
		return getAutocompletedEntities(result);
	}

	/**
	* Gets the licenses for a brand entity with given UUID.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @return	Licenses
	*/
	public Licenses getLicensesForBrand(String brandUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/brands/:id/licenses/";
		String pathParameter = brandUuid;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, true);
		return getLicenses(result);
	}

	/**
	* Gets the licenses for a brand entity with given UUID. Uses the request body instead of the URL to specify query parameter data.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @param	queryData The query parameter data
	* @return	Licenses
	*/
	public Licenses getLicensesForBrandPost(String brandUuid, QueryData queryData)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/brands/:id/licenses/";
		String pathParameter = brandUuid;
		byte[] bodyParameter = queryData.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, true);
		return getLicenses(result);
	}

	/**
	* Gets a shopping cart.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	shoppingCartUuid The UUID of the shopping cart
	* @return	ShoppingCart
	*/
	public ShoppingCart getShoppingCart(String shoppingCartUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/shoppingCarts/:id/";
		String pathParameter = shoppingCartUuid;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false);
		return getShoppingCart(result);
	}

	/**
	* Gets the user's shopping cart.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @return	ShoppingCart
	*/
	public ShoppingCart getCurrentShoppingCart()
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/shoppingCarts/";
		String pathParameter = null;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false);
		return getShoppingCart(result);
	}

	/**
	* Submits the user's shopping cart to it's brand for purchase approval.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	shoppingCartSubmitToBrandSet Information for submitting a shopping cart to it's brand for purchase approval
	* @return	ShoppingCart
	*/
	public ShoppingCart submitShoppingCartToBrand(ShoppingCartSubmitToBrandSet shoppingCartSubmitToBrandSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/shoppingCarts/submitToBrand/";
		String pathParameter = null;
		byte[] bodyParameter = shoppingCartSubmitToBrandSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getShoppingCart(result);
	}

	/**
	* Acquire all collected entities within a shopping cart.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	shoppingCartUuid The UUID of the shopping cart
	* @param	shoppingCartAcquireSet Information for acquiring all collected entities within a shopping cart
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse acquireShoppingCart(String shoppingCartUuid, ShoppingCartAcquireSet shoppingCartAcquireSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/shoppingCarts/:id/acquire/";
		String pathParameter = shoppingCartUuid;
		byte[] bodyParameter = shoppingCartAcquireSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getServerTaskResponse(result);
	}

	/**
	* Reject the purchase approval for a shopping cart.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	shoppingCartUuid The UUID of the shopping cart
	* @param	shoppingCartRejectAcquisitionSet Information for rejecting the purchase approval for a shopping cart
	* @return	ShoppingCart
	*/
	public ShoppingCart rejectShoppingCartAcquisition(String shoppingCartUuid, ShoppingCartRejectAcquisitionSet shoppingCartRejectAcquisitionSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/shoppingCarts/:id/rejectAcquisition/";
		String pathParameter = shoppingCartUuid;
		byte[] bodyParameter = shoppingCartRejectAcquisitionSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getShoppingCart(result);
	}

	/**
	* Get an tag entity with given UUID.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	tagUuid The UUID of the tag entity
	* @return	Tag
	*/
	public Tag getTag(String tagUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/tags/:id/";
		String pathParameter = tagUuid;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, true);
		return getTag(result);
	}

	/**
	* Creates a task which will generate downloads associated to an asset.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	assetUuid The UUID of the asset entity
	* @param	assetCreateDownloadTaskSet Information for creating a download task for an asset
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse createAssetDownloadTask(String assetUuid, AssetCreateDownloadTaskSet assetCreateDownloadTaskSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/assets/:id/createDownloadTask/";
		String pathParameter = assetUuid;
		byte[] bodyParameter = assetCreateDownloadTaskSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, true);
		return getServerTaskResponse(result);
	}

	/**
	* Gets user information for an user with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	userUuid The UUID of the user
	* @return	User
	*/
	public User getUser(String userUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/users/:id/";
		String pathParameter = userUuid;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false);
		return getUser(result);
	}

	/**
	* Gets the current user's information.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @return	User
	*/
	public User getCurrentUser()
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/users/";
		String pathParameter = null;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false);
		return getUser(result);
	}

	/**
	* Gets all users for the end user group of a brand with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @param	endUserGroupUuid The UUID of the end user group
	* @return	Users
	*/
	public Users getUsersForEndUserGroup(String brandUuid, String endUserGroupUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/brands/:id/endUserGroups/:groupId/users/";
		String pathParameter = brandUuid;
		byte[] bodyParameter = null;
		apiPath = replaceUserGroupUuid(apiPath, endUserGroupUuid);
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false);
		return getUsers(result);
	}

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
	* @return	Users
	*/
	public Users getUsersForEndUserGroupPost(String brandUuid, QueryData queryData, String endUserGroupUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/brands/:id/endUserGroups/:groupId/users/";
		String pathParameter = brandUuid;
		byte[] bodyParameter = queryData.toByteArray();
		apiPath = replaceUserGroupUuid(apiPath, endUserGroupUuid);
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getUsers(result);
	}

	/**
	* Gets all brands which are members of the end user group of a brand with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @param	endUserGroupUuid The UUID of the end user group
	* @return	Entities
	*/
	public Entities getBrandsForEndUserGroup(String brandUuid, String endUserGroupUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/brands/:id/endUserGroups/:groupId/brands/";
		String pathParameter = brandUuid;
		byte[] bodyParameter = null;
		apiPath = replaceUserGroupUuid(apiPath, endUserGroupUuid);
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false);
		return getEntities(result);
	}

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
	* @return	Entities
	*/
	public Entities getBrandsForEndUserGroupPost(String brandUuid, QueryData queryData, String endUserGroupUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/brands/:id/endUserGroups/:groupId/brands/";
		String pathParameter = brandUuid;
		byte[] bodyParameter = queryData.toByteArray();
		apiPath = replaceUserGroupUuid(apiPath, endUserGroupUuid);
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getEntities(result);
	}

	/**
	* Gets all users for the admin user group of a brand with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @param	adminUserGroupUuid The UUID of the admin user group
	* @return	Users
	*/
	public Users getUsersForAdminUserGroup(String brandUuid, String adminUserGroupUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/brands/:id/adminUserGroups/:groupId/users/";
		String pathParameter = brandUuid;
		byte[] bodyParameter = null;
		apiPath = replaceUserGroupUuid(apiPath, adminUserGroupUuid);
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false);
		return getUsers(result);
	}

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
	* @return	Users
	*/
	public Users getUsersForAdminUserGroupPost(String brandUuid, QueryData queryData, String adminUserGroupUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/brands/:id/adminUserGroups/:groupId/users/";
		String pathParameter = brandUuid;
		byte[] bodyParameter = queryData.toByteArray();
		apiPath = replaceUserGroupUuid(apiPath, adminUserGroupUuid);
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getUsers(result);
	}

	/**
	* Gets an end user group entity with given UUID of a brand with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @param	endUserGroupUuid The UUID of the end user group
	* @return	UserGroup
	*/
	public UserGroup getEndUserGroup(String brandUuid, String endUserGroupUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/brands/:id/endUserGroups/:groupId/";
		String pathParameter = brandUuid;
		byte[] bodyParameter = null;
		apiPath = replaceUserGroupUuid(apiPath, endUserGroupUuid);
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false);
		return getUserGroup(result);
	}

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
	* @return	UserGroup
	*/
	public UserGroup getEndUserGroupRead(String brandUuid, String endUserGroupUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/brands/:id/endUserGroups/:groupId/";
		String pathParameter = brandUuid;
		byte[] bodyParameter = null;
		apiPath = replaceUserGroupUuid(apiPath, endUserGroupUuid);
		byte[] result = process(true, ApiClient.ENDPOINT_MDR, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false);
		return getUserGroup(result);
	}

	/**
	* Gets an admin user group entity with given UUID of a brand with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @param	adminUserGroupUuid The UUID of the admin user group
	* @return	UserGroup
	*/
	public UserGroup getAdminUserGroup(String brandUuid, String adminUserGroupUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/brands/:id/adminUserGroups/:groupId/";
		String pathParameter = brandUuid;
		byte[] bodyParameter = null;
		apiPath = replaceUserGroupUuid(apiPath, adminUserGroupUuid);
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false);
		return getUserGroup(result);
	}

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
	* @return	UserGroup
	*/
	public UserGroup getAdminUserGroupRead(String brandUuid, String adminUserGroupUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/brands/:id/adminUserGroups/:groupId/";
		String pathParameter = brandUuid;
		byte[] bodyParameter = null;
		apiPath = replaceUserGroupUuid(apiPath, adminUserGroupUuid);
		byte[] result = process(true, ApiClient.ENDPOINT_MDR, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false);
		return getUserGroup(result);
	}

	/**
	* Updates an user.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	userUuid The UUID of the user
	* @param	userChangeSet Information for creating or updating an user within our main identity database
	* @return	ServerTaskResponse
	*/
	public ServerTaskResponse updateUser(String userUuid, UserChangeSet userChangeSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/users/:id/";
		String pathParameter = userUuid;
		byte[] bodyParameter = userChangeSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false);
		return getServerTaskResponse(result);
	}

	/**
	* Reserves an user UUID within our main identity database. Requires extended permissions, please contact us to get more information.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	userReserveSet Information for reserving an user UUID within our main identity database
	* @return	User
	*/
	public User reserveIdentityUser(UserReserveSet userReserveSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/users/reserve/";
		String pathParameter = null;
		byte[] bodyParameter = userReserveSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_ID, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getUser(result);
	}

	/**
	* Reserves a bulk of user UUIDs within our main identity database. Requires extended permissions, please contact us to get more information.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	userReserveSets Information for reserving a bulk of user UUIDs within our main identity database
	* @return	User
	*/
	public User reserveIdentityUsers(UserReserveSets userReserveSets)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/users/reserve/bulk/";
		String pathParameter = null;
		byte[] bodyParameter = userReserveSets.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_ID, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getUser(result);
	}

	/**
	* Creates an user within our main identity database. Requires extended permissions, please contact us to get more information.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	userChangeSet Information for creating or updating an user within our main identity database
	* @return	User
	*/
	public User createIdentityUser(UserChangeSet userChangeSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/users/";
		String pathParameter = null;
		byte[] bodyParameter = userChangeSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_ID, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getUser(result);
	}

	/**
	* Creates a bulk of users within our main identity database. Requires extended permissions, please contact us to get more information.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	userChangeSets Information for creating or updating a bulk of users within our main identity database
	* @return	Users
	*/
	public Users createIdentityUsers(UserChangeSets userChangeSets)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/users/bulk/";
		String pathParameter = null;
		byte[] bodyParameter = userChangeSets.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_ID, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getUsers(result);
	}

	/**
	* Updates an user within our main identity database. Requires extended permissions, please contact us to get more information.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	userUuid The UUID of the user
	* @param	userChangeSet Information for creating or updating an user within our main identity database
	* @return	User
	*/
	public User updateIdentityUser(String userUuid, UserChangeSet userChangeSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/users/:id/";
		String pathParameter = userUuid;
		byte[] bodyParameter = userChangeSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_ID, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false);
		return getUser(result);
	}

	/**
	* Updates a bulk of users within our main identity database. Requires extended permissions, please contact us to get more information.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	userChangeSets Information for creating or updating a bulk of users within our main identity database
	* @return	Users
	*/
	public Users updateIdentityUsers(UserChangeSets userChangeSets)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/users/bulk/";
		String pathParameter = null;
		byte[] bodyParameter = userChangeSets.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_ID, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false);
		return getUsers(result);
	}

	/**
	* Gets user information for an user with given UUID from our main identity database. Requires extended permissions, please contact us to get more information.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	userUuid The UUID of the user
	* @return	User
	*/
	public User getIdentityUser(String userUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/users/:id/";
		String pathParameter = userUuid;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_ID, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false);
		return getUser(result);
	}

	/**
	* Gets the follow settings for the current user.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @return	UserFollowSettings
	*/
	public UserFollowSettings getUserFollowSettings()
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/userFollowSettings/";
		String pathParameter = null;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false);
		return getUserFollowSettings(result);
	}

	/**
	* Creates a follow setting for the current user.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	userFollowSettingCreateSet Information for creating a follow setting for an user
	* @return	UserFollowSetting
	*/
	public UserFollowSetting createUserFollowSetting(UserFollowSettingCreateSet userFollowSettingCreateSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/userFollowSettings/";
		String pathParameter = null;
		byte[] bodyParameter = userFollowSettingCreateSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getUserFollowSetting(result);
	}

	/**
	* Deletes a follow setting with given UUID for the current user.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	userFollowSettingUuid The UUID of the user follow setting
	*/
	public void deleteUserFollowSetting(String userFollowSettingUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/userFollowSettings/:id/";
		String pathParameter = userFollowSettingUuid;
		byte[] bodyParameter = null;
		process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.DELETE, false);
	}

	/**
	* Gets all end user groups for a brand with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @return	UserGroups
	*/
	public UserGroups getEndUserGroupsForBrand(String brandUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/brands/:id/endUserGroups/";
		String pathParameter = brandUuid;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false);
		return getUserGroups(result);
	}

	/**
	* Gets all end user groups for a brand with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method reads from our main read infrastructure. Data might be out of date by a few seconds.
	* Use of the main read infrastructure should be limited, prefer reading from the indexing infrastructure.
	*
	* @param	brandUuid The UUID of the brand entity
	* @return	UserGroups
	*/
	public UserGroups getEndUserGroupsForBrandRead(String brandUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/brands/:id/endUserGroups/";
		String pathParameter = brandUuid;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDR, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false);
		return getUserGroups(result);
	}

	/**
	* Gets all end user groups for a brand with given UUID. Uses the request body instead of the URL to specify query parameter data.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @param	queryData The query parameter data
	* @return	UserGroups
	*/
	public UserGroups getEndUserGroupsForBrandPost(String brandUuid, QueryData queryData)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/brands/:id/endUserGroups/";
		String pathParameter = brandUuid;
		byte[] bodyParameter = queryData.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getUserGroups(result);
	}

	/**
	* Gets all admin user groups for a brand with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @return	UserGroups
	*/
	public UserGroups getAdminUserGroupsForBrand(String brandUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/brands/:id/adminUserGroups/";
		String pathParameter = brandUuid;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false);
		return getUserGroups(result);
	}

	/**
	* Gets all admin user groups for a brand with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method reads from our main read infrastructure. Data might be out of date by a few seconds.
	* Use of the main read infrastructure should be limited, prefer reading from the indexing infrastructure.
	*
	* @param	brandUuid The UUID of the brand entity
	* @return	UserGroups
	*/
	public UserGroups getAdminUserGroupsForBrandRead(String brandUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/brands/:id/adminUserGroups/";
		String pathParameter = brandUuid;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDR, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false);
		return getUserGroups(result);
	}

	/**
	* Gets all admin user groups for a brand with given UUID. Uses the request body instead of the URL to specify query parameter data.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @param	queryData The query parameter data
	* @return	UserGroups
	*/
	public UserGroups getAdminUserGroupsForBrandPost(String brandUuid, QueryData queryData)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/brands/:id/adminUserGroups/";
		String pathParameter = brandUuid;
		byte[] bodyParameter = queryData.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getUserGroups(result);
	}

	/**
	* Gets the current user's settings.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @return	UserSetting
	*/
	public UserSetting getUserSetting()
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/userSetting/";
		String pathParameter = null;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false);
		return getUserSetting(result);
	}

	/**
	* Updates the current user's settings.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	userSettingChangeSet Information for updating the current user's settings
	* @return	UserSetting
	*/
	public UserSetting updateUserSetting(UserSettingChangeSet userSettingChangeSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/userSetting/";
		String pathParameter = null;
		byte[] bodyParameter = userSettingChangeSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false);
		return getUserSetting(result);
	}

	/**
	* Gets history event data for a record.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	historySelectSet Specify record type and record UUID of the record you want to get history events for. Request interactive data (e.g. messages) by setting the requestInteractive flag
	* @return	HistoryEvents
	*/
	public HistoryEvents getHistoryEvents(HistorySelectSet historySelectSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/history/";
		String pathParameter = null;
		byte[] bodyParameter = historySelectSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getHistoryEvents(result);
	}

	/**
	* Gets the cost calculation for performing a credit balance change of a brand. Does not modify any data.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @param	creditBalanceChangeSet Information about the credit balance change
	* @return	CreditTransactionCostCalculation
	*/
	public CreditTransactionCostCalculation getCreditBalanceCostCalculation(String brandUuid, CreditBalanceChangeSet creditBalanceChangeSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/brands/:id/creditBalanceCostCalculation/";
		String pathParameter = brandUuid;
		byte[] bodyParameter = creditBalanceChangeSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getCreditTransactionCostCalculation(result);
	}

	/**
	* Updates the credit balance of a brand, and returns the resulting credit transactions.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @param	creditBalanceChangeSet Information about the credit balance change
	* @return	CreditTransactions
	*/
	public CreditTransactions updateCreditBalance(String brandUuid, CreditBalanceChangeSet creditBalanceChangeSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/brands/:id/creditBalance/";
		String pathParameter = brandUuid;
		byte[] bodyParameter = creditBalanceChangeSet.toByteArray();
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getCreditTransactions(result);
	}

	/**
	* Sends contents of a contact form to the brand.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @param	contactFormSendSet Information about the contact form contents
	*/
	public void sendContactForm(String brandUuid, ContactFormSendSet contactFormSendSet)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/brands/:id/sendContactForm/";
		String pathParameter = brandUuid;
		byte[] bodyParameter = contactFormSendSet.toByteArray();
		process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, true);
	}

	/**
	* Gets all notifications for a brand.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @return	Notifications
	*/
	public Notifications getNotificationsForBrand(String brandUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/brands/:id/notifications/";
		String pathParameter = brandUuid;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false);
		return getNotifications(result);
	}

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
	* @return	ExternalContentProviderSetup
	*/
	public ExternalContentProviderSetup setupExternalContentProvider(String brandUuid, ExternalContentProviderSetupSet externalContentProviderSetupSet, ExternalContentProvider providerId)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/brands/:id/externalContentProviders/:providerId/setup/";
		String pathParameter = brandUuid;
		byte[] bodyParameter = externalContentProviderSetupSet.toByteArray();
		apiPath = replaceProviderId(apiPath, providerId);
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getExternalContentProviderSetup(result);
	}

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
	* @return	ExternalContentProviderConfiguration
	*/
	public ExternalContentProviderConfiguration configureExternalContentProvider(String brandUuid, ExternalContentProviderConfigureSet externalContentProviderConfigureSet, ExternalContentProvider providerId)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/brands/:id/externalContentProviders/:providerId/configure/";
		String pathParameter = brandUuid;
		byte[] bodyParameter = externalContentProviderConfigureSet.toByteArray();
		apiPath = replaceProviderId(apiPath, providerId);
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getExternalContentProviderConfiguration(result);
	}

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
	* @return	ExternalContentProviderConfiguration
	*/
	public ExternalContentProviderConfiguration updateExternalContentProviderConfiguration(String brandUuid, ExternalContentProviderConfigurationChangeSet externalContentProviderConfigurationChangeSet, ExternalContentProvider providerId)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/brands/:id/externalContentProviders/:providerId/";
		String pathParameter = brandUuid;
		byte[] bodyParameter = externalContentProviderConfigurationChangeSet.toByteArray();
		apiPath = replaceProviderId(apiPath, providerId);
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false);
		return getExternalContentProviderConfiguration(result);
	}

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
	* @return	ExternalContentProviderConfiguration
	*/
	public ExternalContentProviderConfiguration refreshExternalContentProviderConfiguration(String brandUuid, ExternalContentProviderRefreshSet externalContentProviderRefreshSet, ExternalContentProvider providerId)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/brands/:id/externalContentProviders/:providerId/";
		String pathParameter = brandUuid;
		byte[] bodyParameter = externalContentProviderRefreshSet.toByteArray();
		apiPath = replaceProviderId(apiPath, providerId);
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false);
		return getExternalContentProviderConfiguration(result);
	}

	/**
	* Gets all external content provider data for a brand.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @return	ExternalContentProviderConfigurations
	*/
	public ExternalContentProviderConfigurations getExternalContentProviderConfigurations(String brandUuid)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/brands/:id/externalContentProviders/";
		String pathParameter = brandUuid;
		byte[] bodyParameter = null;
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false);
		return getExternalContentProviderConfigurations(result);
	}

	/**
	* Gets all products for an external content provider for a brand.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @param	brandUuid The UUID of the brand entity
	* @param	providerId The ID of the external content provider
	* @return	ExternalContentProviderProducts
	*/
	public ExternalContentProviderProducts getExternalContentProviderProducts(String brandUuid, ExternalContentProvider providerId)
		throws BackendException, Exception
	{
		String apiPath = "/api/v1/brands/:id/externalContentProviders/:providerId/products/";
		String pathParameter = brandUuid;
		byte[] bodyParameter = null;
		apiPath = replaceProviderId(apiPath, providerId);
		byte[] result = process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false);
		return getExternalContentProviderProducts(result);
	}

	/**
	* Used to test a transport error contidion.
	*
	* This method supports anonymous invocation.
	*
	*/
	public void testTransportError()
		throws BackendException, Exception
	{
		String apiPath = "https://path.to.invalid.server.com";
		String pathParameter = null;
		byte[] bodyParameter = null;
		process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, true);
	}

}
