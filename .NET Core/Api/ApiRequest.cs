using com.contidio.sdk.proto;
using System.Threading;

namespace Contidio.Sdk.Api
{
    public sealed class ApiRequest : AbstractApiRequest<ApiRequest>
    {
        internal ApiRequest(ApiClient apiClient, string brandUuid)
            : base(apiClient, brandUuid)
        {
        }
		
		/**
		* Gets metadata for a license request.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	licenseRequestUuid The UUID of the license request
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<LicenseRequest>
		*/
		public async System.Threading.Tasks.Task<LicenseRequest> GetLicenseRequestAsync(string licenseRequestUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/licenseRequests/:id/";
			string pathParameter = licenseRequestUuid;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false, cancellationToken).ConfigureAwait(false);
			return GetLicenseRequest(result);
		}

		/**
		* Creates an license request.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	licenseRequestCreateSet Information for creating the license request
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<LicenseRequest>
		*/
		public async System.Threading.Tasks.Task<LicenseRequest> CreateLicenseRequestAsync(LicenseRequestCreateSet licenseRequestCreateSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/licenseRequests/";
			string pathParameter = null;
			byte[] bodyParameter = licenseRequestCreateSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetLicenseRequest(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<LicenseRequest>
		*/
		public async System.Threading.Tasks.Task<LicenseRequest> RejectLicenseRequestAsync(string licenseRequestUuid, LicenseRequestRejectSet licenseRequestRejectSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/licenseRequests/:id/reject/";
			string pathParameter = licenseRequestUuid;
			byte[] bodyParameter = licenseRequestRejectSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetLicenseRequest(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<LicenseRequest>
		*/
		public async System.Threading.Tasks.Task<LicenseRequest> AcceptLicenseRequestAsync(string licenseRequestUuid, LicenseRequestAcceptSet licenseRequestAcceptSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/licenseRequests/:id/accept/";
			string pathParameter = licenseRequestUuid;
			byte[] bodyParameter = licenseRequestAcceptSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetLicenseRequest(result);
		}

		/**
		* Gets metadata for a access request.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	accessRequestUuid The UUID of the access request
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<AccessRequest>
		*/
		public async System.Threading.Tasks.Task<AccessRequest> GetAccessRequestAsync(string accessRequestUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/accessRequests/:id/";
			string pathParameter = accessRequestUuid;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false, cancellationToken).ConfigureAwait(false);
			return GetAccessRequest(result);
		}

		/**
		* Creates an access request.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	accessRequestCreateSet Information for creating the access request
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> CreateAccessRequestAsync(AccessRequestCreateSet accessRequestCreateSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/accessRequests/";
			string pathParameter = null;
			byte[] bodyParameter = accessRequestCreateSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<AccessRequest>
		*/
		public async System.Threading.Tasks.Task<AccessRequest> RejectAccessRequestAsync(string accessRequestUuid, AccessRequestRejectSet accessRequestRejectSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/accessRequests/:id/reject/";
			string pathParameter = accessRequestUuid;
			byte[] bodyParameter = accessRequestRejectSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetAccessRequest(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> AcceptAccessRequestAsync(string accessRequestUuid, AccessRequestAcceptSet accessRequestAcceptSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/accessRequests/:id/accept/";
			string pathParameter = accessRequestUuid;
			byte[] bodyParameter = accessRequestAcceptSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<AccessRequests>
		*/
		public async System.Threading.Tasks.Task<AccessRequests> GetAccessRequestsForEndUserGroupAsync(string brandUuid, string endUserGroupUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/brands/:id/endUserGroups/:groupId/accessRequests/";
			string pathParameter = brandUuid;
			byte[] bodyParameter = null;
			apiPath = ReplaceUserGroupUuid(apiPath, endUserGroupUuid);
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false, cancellationToken).ConfigureAwait(false);
			return GetAccessRequests(result);
		}

		/**
		* Gets metadata for a join request.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	joinRequestUuid The UUID of the join request
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<JoinRequest>
		*/
		public async System.Threading.Tasks.Task<JoinRequest> GetJoinRequestAsync(string joinRequestUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/joinRequests/:id/";
			string pathParameter = joinRequestUuid;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false, cancellationToken).ConfigureAwait(false);
			return GetJoinRequest(result);
		}

		/**
		* Creates an join request.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	joinRequestCreateSet Information for creating the join request
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<JoinRequest>
		*/
		public async System.Threading.Tasks.Task<JoinRequest> CreateJoinRequestAsync(JoinRequestCreateSet joinRequestCreateSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/joinRequests/";
			string pathParameter = null;
			byte[] bodyParameter = joinRequestCreateSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetJoinRequest(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<JoinRequest>
		*/
		public async System.Threading.Tasks.Task<JoinRequest> RejectJoinRequestAsync(string joinRequestUuid, JoinRequestRejectSet joinRequestRejectSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/joinRequests/:id/reject/";
			string pathParameter = joinRequestUuid;
			byte[] bodyParameter = joinRequestRejectSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetJoinRequest(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> AcceptJoinRequestAsync(string joinRequestUuid, JoinRequestAcceptSet joinRequestAcceptSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/joinRequests/:id/accept/";
			string pathParameter = joinRequestUuid;
			byte[] bodyParameter = joinRequestAcceptSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
		}

		/**
		* Gets metadata for an publish request.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	publishRequestUuid The UUID of the publish request
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<PublishRequest>
		*/
		public async System.Threading.Tasks.Task<PublishRequest> GetPublishRequestAsync(string publishRequestUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/publishRequests/:id/";
			string pathParameter = publishRequestUuid;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false, cancellationToken).ConfigureAwait(false);
			return GetPublishRequest(result);
		}

		/**
		* Creates an publish request.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	publishRequestCreateSet Information for creating the publish request
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<PublishRequest>
		*/
		public async System.Threading.Tasks.Task<PublishRequest> CreatePublishRequestAsync(PublishRequestCreateSet publishRequestCreateSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/publishRequests/";
			string pathParameter = null;
			byte[] bodyParameter = publishRequestCreateSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetPublishRequest(result);
		}

		/**
		* Rejects an publish request.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	publishRequestUuid The UUID of the publish request
		* @param	publishRequestRejectSet Information for rejecting the publish request
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<PublishRequest>
		*/
		public async System.Threading.Tasks.Task<PublishRequest> RejectPublishRequestAsync(string publishRequestUuid, PublishRequestRejectSet publishRequestRejectSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/publishRequests/:id/reject/";
			string pathParameter = publishRequestUuid;
			byte[] bodyParameter = publishRequestRejectSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetPublishRequest(result);
		}

		/**
		* Accepts an publish request.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	publishRequestUuid The UUID of the publish request
		* @param	publishRequestAcceptSet Information for accepting the publish request
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> AcceptPublishRequestAsync(string publishRequestUuid, PublishRequestAcceptSet publishRequestAcceptSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/publishRequests/:id/accept/";
			string pathParameter = publishRequestUuid;
			byte[] bodyParameter = publishRequestAcceptSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
		}

		/**
		* Gets metadata for an purchase credits request.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	purchaseCreditsRequestUuid The UUID of the purchase credits request
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<PurchaseCreditsRequest>
		*/
		public async System.Threading.Tasks.Task<PurchaseCreditsRequest> GetPurchaseCreditsRequestAsync(string purchaseCreditsRequestUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/purchaseCreditsRequests/:id/";
			string pathParameter = purchaseCreditsRequestUuid;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false, cancellationToken).ConfigureAwait(false);
			return GetPurchaseCreditsRequest(result);
		}

		/**
		* Creates an purchase credits request.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	purchaseCreditsRequestCreateSet Information for creating the purchase credits request
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<PurchaseCreditsRequest>
		*/
		public async System.Threading.Tasks.Task<PurchaseCreditsRequest> CreatePurchaseCreditsRequestAsync(PurchaseCreditsRequestCreateSet purchaseCreditsRequestCreateSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/purchaseCreditsRequests/";
			string pathParameter = null;
			byte[] bodyParameter = purchaseCreditsRequestCreateSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetPurchaseCreditsRequest(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<PurchaseCreditsRequest>
		*/
		public async System.Threading.Tasks.Task<PurchaseCreditsRequest> RejectPurchaseCreditsRequestAsync(string purchaseCreditsRequestUuid, PurchaseCreditsRequestRejectSet purchaseCreditsRequestRejectSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/purchaseCreditsRequests/:id/reject/";
			string pathParameter = purchaseCreditsRequestUuid;
			byte[] bodyParameter = purchaseCreditsRequestRejectSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetPurchaseCreditsRequest(result);
		}

		/**
		* Gets metadata for an upgrade plan request.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	upgradePlanRequestUuid The UUID of the upgrade plan request
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<UpgradePlanRequest>
		*/
		public async System.Threading.Tasks.Task<UpgradePlanRequest> GetUpgradePlanRequestAsync(string upgradePlanRequestUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/upgradePlanRequests/:id/";
			string pathParameter = upgradePlanRequestUuid;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false, cancellationToken).ConfigureAwait(false);
			return GetUpgradePlanRequest(result);
		}

		/**
		* Creates an upgrade plan request.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	upgradePlanRequestCreateSet Information for creating the upgrade plan request
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<UpgradePlanRequest>
		*/
		public async System.Threading.Tasks.Task<UpgradePlanRequest> CreateUpgradePlanRequestAsync(UpgradePlanRequestCreateSet upgradePlanRequestCreateSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/upgradePlanRequests/";
			string pathParameter = null;
			byte[] bodyParameter = upgradePlanRequestCreateSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetUpgradePlanRequest(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> AcceptUpgradePlanRequestAsync(string upgradePlanRequestUuid, UpgradePlanRequestAcceptSet upgradePlanRequestAcceptSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/upgradePlanRequests/:id/accept/";
			string pathParameter = upgradePlanRequestUuid;
			byte[] bodyParameter = upgradePlanRequestAcceptSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<UpgradePlanRequest>
		*/
		public async System.Threading.Tasks.Task<UpgradePlanRequest> RejectUpgradePlanRequestAsync(string upgradePlanRequestUuid, UpgradePlanRequestRejectSet upgradePlanRequestRejectSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/upgradePlanRequests/:id/reject/";
			string pathParameter = upgradePlanRequestUuid;
			byte[] bodyParameter = upgradePlanRequestRejectSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetUpgradePlanRequest(result);
		}

		/**
		* Gets metadata for an approval request.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	approvalRequestUuid The UUID of the approval request
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ApprovalRequest>
		*/
		public async System.Threading.Tasks.Task<ApprovalRequest> GetApprovalRequestAsync(string approvalRequestUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/approvalRequests/:id/";
			string pathParameter = approvalRequestUuid;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false, cancellationToken).ConfigureAwait(false);
			return GetApprovalRequest(result);
		}

		/**
		* Creates an approval request.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	approvalRequestCreateSet Information for creating the approval request
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ApprovalRequest>
		*/
		public async System.Threading.Tasks.Task<ApprovalRequest> CreateApprovalRequestAsync(ApprovalRequestCreateSet approvalRequestCreateSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/approvalRequests/";
			string pathParameter = null;
			byte[] bodyParameter = approvalRequestCreateSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetApprovalRequest(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> AcceptApprovalRequestAsync(string approvalRequestUuid, ApprovalRequestAcceptSet approvalRequestAcceptSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/approvalRequests/:id/accept/";
			string pathParameter = approvalRequestUuid;
			byte[] bodyParameter = approvalRequestAcceptSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ApprovalRequest>
		*/
		public async System.Threading.Tasks.Task<ApprovalRequest> RejectApprovalRequestAsync(string approvalRequestUuid, ApprovalRequestRejectSet approvalRequestRejectSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/approvalRequests/:id/reject/";
			string pathParameter = approvalRequestUuid;
			byte[] bodyParameter = approvalRequestRejectSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetApprovalRequest(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<CollectedEntity>
		*/
		public async System.Threading.Tasks.Task<CollectedEntity> CreateCollectedEntityInProjectAsync(string projectUuid, CollectedEntityCreateSet collectedEntityCreateSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/projects/:id/collectedEntities/";
			string pathParameter = projectUuid;
			byte[] bodyParameter = collectedEntityCreateSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetCollectedEntity(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<CollectedEntities>
		*/
		public async System.Threading.Tasks.Task<CollectedEntities> CreateCollectedEntitiesInProjectAsync(string projectUuid, CollectedEntityCreateSets collectedEntityCreateSets, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/projects/:id/collectedEntities/bulk/";
			string pathParameter = projectUuid;
			byte[] bodyParameter = collectedEntityCreateSets.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetCollectedEntities(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<CollectedEntity>
		*/
		public async System.Threading.Tasks.Task<CollectedEntity> UpdateCollectedEntityInProjectAsync(string projectUuid, CollectedEntityChangeSet collectedEntityChangeSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/projects/:id/collectedEntities/";
			string pathParameter = projectUuid;
			byte[] bodyParameter = collectedEntityChangeSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false, cancellationToken).ConfigureAwait(false);
			return GetCollectedEntity(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<CollectedEntities>
		*/
		public async System.Threading.Tasks.Task<CollectedEntities> UpdateCollectedEntitiesInProjectAsync(string projectUuid, CollectedEntityChangeSets collectedEntityChangeSets, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/projects/:id/collectedEntities/bulk/";
			string pathParameter = projectUuid;
			byte[] bodyParameter = collectedEntityChangeSets.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false, cancellationToken).ConfigureAwait(false);
			return GetCollectedEntities(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		*/
		public async System.Threading.Tasks.Task DeleteCollectedEntityFromProjectAsync(string projectUuid, CollectedEntityDeleteSet collectedEntityDeleteSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/projects/:id/collectedEntities/";
			string pathParameter = projectUuid;
			byte[] bodyParameter = collectedEntityDeleteSet.ToByteArray();
			await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.DELETE, false, cancellationToken).ConfigureAwait(false);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		*/
		public async System.Threading.Tasks.Task DeleteCollectedEntitiesFromProjectAsync(string projectUuid, CollectedEntityDeleteSets collectedEntityDeleteSets, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/projects/:id/collectedEntities/bulk/";
			string pathParameter = projectUuid;
			byte[] bodyParameter = collectedEntityDeleteSets.ToByteArray();
			await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.DELETE, false, cancellationToken).ConfigureAwait(false);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<CollectedEntity>
		*/
		public async System.Threading.Tasks.Task<CollectedEntity> CopyCollectedEntityFromProjectToShoppingCartAsync(string projectUuid, CollectedEntityCopySet collectedEntityCopySet, string shoppingCartUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/projects/:id/collectedEntities/copyToShoppingCart/:shoppingCartId/";
			string pathParameter = projectUuid;
			byte[] bodyParameter = collectedEntityCopySet.ToByteArray();
			apiPath = ReplaceShoppingCartUuid(apiPath, shoppingCartUuid);
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false, cancellationToken).ConfigureAwait(false);
			return GetCollectedEntity(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<CollectedEntity>
		*/
		public async System.Threading.Tasks.Task<CollectedEntity> CopyCollectedEntityFromProjectToCurrentShoppingCartAsync(string projectUuid, CollectedEntityCopySet collectedEntityCopySet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/projects/:id/collectedEntities/copyToShoppingCart/";
			string pathParameter = projectUuid;
			byte[] bodyParameter = collectedEntityCopySet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false, cancellationToken).ConfigureAwait(false);
			return GetCollectedEntity(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<CollectedEntities>
		*/
		public async System.Threading.Tasks.Task<CollectedEntities> CopyAllCollectedEntitiesFromProjectToShoppingCartAsync(string projectUuid, string shoppingCartUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/projects/:id/collectedEntities/copyToShoppingCart/:shoppingCartId/bulk/all/";
			string pathParameter = projectUuid;
			byte[] bodyParameter = null;
			apiPath = ReplaceShoppingCartUuid(apiPath, shoppingCartUuid);
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false, cancellationToken).ConfigureAwait(false);
			return GetCollectedEntities(result);
		}

		/**
		* Copies all collected entities from a project to the current user's shopping cart.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	projectUuid The UUID of the project entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<CollectedEntities>
		*/
		public async System.Threading.Tasks.Task<CollectedEntities> CopyAllCollectedEntitiesFromProjectToCurrentShoppingCartAsync(string projectUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/projects/:id/collectedEntities/copyToShoppingCart/all/";
			string pathParameter = projectUuid;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false, cancellationToken).ConfigureAwait(false);
			return GetCollectedEntities(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<CollectedEntities>
		*/
		public async System.Threading.Tasks.Task<CollectedEntities> CopyCollectedEntitiesFromProjectToShoppingCartAsync(string projectUuid, CollectedEntityCopySets collectedEntityCopySets, string shoppingCartUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/projects/:id/collectedEntities/copyToShoppingCart/:shoppingCartId/bulk/";
			string pathParameter = projectUuid;
			byte[] bodyParameter = collectedEntityCopySets.ToByteArray();
			apiPath = ReplaceShoppingCartUuid(apiPath, shoppingCartUuid);
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false, cancellationToken).ConfigureAwait(false);
			return GetCollectedEntities(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<CollectedEntities>
		*/
		public async System.Threading.Tasks.Task<CollectedEntities> CopyCollectedEntitiesFromProjectToCurrentShoppingCartAsync(string projectUuid, CollectedEntityCopySets collectedEntityCopySets, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/projects/:id/collectedEntities/copyToShoppingCart/bulk/";
			string pathParameter = projectUuid;
			byte[] bodyParameter = collectedEntityCopySets.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false, cancellationToken).ConfigureAwait(false);
			return GetCollectedEntities(result);
		}

		/**
		* Gets all collected entities from a project which have been already acquired.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	projectUuid The UUID of the project entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<CollectedEntities>
		*/
		public async System.Threading.Tasks.Task<CollectedEntities> GetAcquiredCollectedEntitiesForProjectAsync(string projectUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/projects/:id/acquiredCollectedEntities/";
			string pathParameter = projectUuid;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false, cancellationToken).ConfigureAwait(false);
			return GetCollectedEntities(result);
		}

		/**
		* Gets all collected entities from a project which have not yet been acquired.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	projectUuid The UUID of the project entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<CollectedEntities>
		*/
		public async System.Threading.Tasks.Task<CollectedEntities> GetNotAcquiredCollectedEntitiesForProjectAsync(string projectUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/projects/:id/notAcquiredCollectedEntities/";
			string pathParameter = projectUuid;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false, cancellationToken).ConfigureAwait(false);
			return GetCollectedEntities(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<CollectedEntity>
		*/
		public async System.Threading.Tasks.Task<CollectedEntity> MoveCollectedEntityFromShoppingCartToProjectAsync(string shoppingCartUuid, CollectedEntityMoveSet collectedEntityMoveSet, string projectUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/shoppingCarts/:id/moveToProject/:projectId/";
			string pathParameter = shoppingCartUuid;
			byte[] bodyParameter = collectedEntityMoveSet.ToByteArray();
			apiPath = ReplaceProjectUuid(apiPath, projectUuid);
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false, cancellationToken).ConfigureAwait(false);
			return GetCollectedEntity(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<CollectedEntity>
		*/
		public async System.Threading.Tasks.Task<CollectedEntity> MoveCollectedEntityFromCurrentShoppingCartToProjectAsync(CollectedEntityMoveSet collectedEntityMoveSet, string projectUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/shoppingCarts/moveToProject/:projectId/";
			string pathParameter = null;
			byte[] bodyParameter = collectedEntityMoveSet.ToByteArray();
			apiPath = ReplaceProjectUuid(apiPath, projectUuid);
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false, cancellationToken).ConfigureAwait(false);
			return GetCollectedEntity(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<CollectedEntities>
		*/
		public async System.Threading.Tasks.Task<CollectedEntities> MoveCollectedEntitiesFromShoppingCartToProjectAsync(string shoppingCartUuid, CollectedEntityMoveSets collectedEntityMoveSets, string projectUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/shoppingCarts/:id/moveToProject/:projectId/bulk/";
			string pathParameter = shoppingCartUuid;
			byte[] bodyParameter = collectedEntityMoveSets.ToByteArray();
			apiPath = ReplaceProjectUuid(apiPath, projectUuid);
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false, cancellationToken).ConfigureAwait(false);
			return GetCollectedEntities(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<CollectedEntities>
		*/
		public async System.Threading.Tasks.Task<CollectedEntities> MoveCollectedEntitiesFromCurrentShoppingCartToProjectAsync(CollectedEntityMoveSets collectedEntityMoveSets, string projectUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/shoppingCarts/moveToProject/:projectId/bulk/";
			string pathParameter = null;
			byte[] bodyParameter = collectedEntityMoveSets.ToByteArray();
			apiPath = ReplaceProjectUuid(apiPath, projectUuid);
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false, cancellationToken).ConfigureAwait(false);
			return GetCollectedEntities(result);
		}

		/**
		* Gets all collected entities for a shopping cart.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	shoppingCartUuid The UUID of the shopping cart
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<CollectedEntities>
		*/
		public async System.Threading.Tasks.Task<CollectedEntities> GetCollectedEntitiesForShoppingCartAsync(string shoppingCartUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/shoppingCarts/:id/collectedEntities/";
			string pathParameter = shoppingCartUuid;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false, cancellationToken).ConfigureAwait(false);
			return GetCollectedEntities(result);
		}

		/**
		* Gets all collected entities for the user's shopping cart.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<CollectedEntities>
		*/
		public async System.Threading.Tasks.Task<CollectedEntities> GetCollectedEntitiesForCurrentShoppingCartAsync(CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/shoppingCarts/collectedEntities/";
			string pathParameter = null;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false, cancellationToken).ConfigureAwait(false);
			return GetCollectedEntities(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<CollectedEntity>
		*/
		public async System.Threading.Tasks.Task<CollectedEntity> CreateCollectedEntityInShoppingCartAsync(string shoppingCartUuid, CollectedEntityCreateSet collectedEntityCreateSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/shoppingCarts/:id/collectedEntities/";
			string pathParameter = shoppingCartUuid;
			byte[] bodyParameter = collectedEntityCreateSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetCollectedEntity(result);
		}

		/**
		* Creates an collected entity in the user's shopping cart.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	collectedEntityCreateSet Information for creating the collected entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<CollectedEntity>
		*/
		public async System.Threading.Tasks.Task<CollectedEntity> CreateCollectedEntityInCurrentShoppingCartAsync(CollectedEntityCreateSet collectedEntityCreateSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/shoppingCarts/collectedEntities/";
			string pathParameter = null;
			byte[] bodyParameter = collectedEntityCreateSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetCollectedEntity(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<CollectedEntities>
		*/
		public async System.Threading.Tasks.Task<CollectedEntities> CreateCollectedEntitiesInShoppingCartAsync(string shoppingCartUuid, CollectedEntityCreateSets collectedEntityCreateSets, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/shoppingCarts/:id/collectedEntities/bulk/";
			string pathParameter = shoppingCartUuid;
			byte[] bodyParameter = collectedEntityCreateSets.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetCollectedEntities(result);
		}

		/**
		* Creates a bulk collected entities in the user's shopping cart.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	collectedEntityCreateSets Information for creating a bulk of collected entities
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<CollectedEntities>
		*/
		public async System.Threading.Tasks.Task<CollectedEntities> CreateCollectedEntitiesInCurrentShoppingCartAsync(CollectedEntityCreateSets collectedEntityCreateSets, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/shoppingCarts/collectedEntities/bulk/";
			string pathParameter = null;
			byte[] bodyParameter = collectedEntityCreateSets.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetCollectedEntities(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<CollectedEntity>
		*/
		public async System.Threading.Tasks.Task<CollectedEntity> UpdateCollectedEntityInShoppingCartAsync(string shoppingCartUuid, CollectedEntityChangeSet collectedEntityChangeSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/shoppingCarts/:id/collectedEntities/";
			string pathParameter = shoppingCartUuid;
			byte[] bodyParameter = collectedEntityChangeSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false, cancellationToken).ConfigureAwait(false);
			return GetCollectedEntity(result);
		}

		/**
		* Updates an collected entity in the user's shopping cart.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	collectedEntityChangeSet Information for changing the collected entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<CollectedEntity>
		*/
		public async System.Threading.Tasks.Task<CollectedEntity> UpdateCollectedEntityInCurrentShoppingCartAsync(CollectedEntityChangeSet collectedEntityChangeSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/shoppingCarts/collectedEntities/";
			string pathParameter = null;
			byte[] bodyParameter = collectedEntityChangeSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false, cancellationToken).ConfigureAwait(false);
			return GetCollectedEntity(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<CollectedEntities>
		*/
		public async System.Threading.Tasks.Task<CollectedEntities> UpdateCollectedEntitiesInShoppingCartAsync(string shoppingCartUuid, CollectedEntityChangeSets collectedEntityChangeSets, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/shoppingCarts/:id/collectedEntities/bulk/";
			string pathParameter = shoppingCartUuid;
			byte[] bodyParameter = collectedEntityChangeSets.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false, cancellationToken).ConfigureAwait(false);
			return GetCollectedEntities(result);
		}

		/**
		* Updates a bulk of collected entities in the user's shopping cart.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	collectedEntityChangeSets Information for changing a bulk of collected entities
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<CollectedEntities>
		*/
		public async System.Threading.Tasks.Task<CollectedEntities> UpdateCollectedEntitiesInCurrentShoppingCartAsync(CollectedEntityChangeSets collectedEntityChangeSets, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/shoppingCarts/collectedEntities/bulk/";
			string pathParameter = null;
			byte[] bodyParameter = collectedEntityChangeSets.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false, cancellationToken).ConfigureAwait(false);
			return GetCollectedEntities(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		*/
		public async System.Threading.Tasks.Task DeleteCollectedEntityFromShoppingCartAsync(string shoppingCartUuid, CollectedEntityDeleteSet collectedEntityDeleteSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/shoppingCarts/:id/collectedEntities/";
			string pathParameter = shoppingCartUuid;
			byte[] bodyParameter = collectedEntityDeleteSet.ToByteArray();
			await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.DELETE, false, cancellationToken).ConfigureAwait(false);
		}

		/**
		* Deletes an collected entity from the user's shopping cart.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	collectedEntityDeleteSet Information for deleting the collected entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		*/
		public async System.Threading.Tasks.Task DeleteCollectedEntityFromCurrentShoppingCartAsync(CollectedEntityDeleteSet collectedEntityDeleteSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/shoppingCarts/collectedEntities/";
			string pathParameter = null;
			byte[] bodyParameter = collectedEntityDeleteSet.ToByteArray();
			await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.DELETE, false, cancellationToken).ConfigureAwait(false);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		*/
		public async System.Threading.Tasks.Task DeleteCollectedEntitiesFromShoppingCartAsync(string shoppingCartUuid, CollectedEntityDeleteSets collectedEntityDeleteSets, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/shoppingCarts/:id/collectedEntities/bulk/";
			string pathParameter = shoppingCartUuid;
			byte[] bodyParameter = collectedEntityDeleteSets.ToByteArray();
			await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.DELETE, false, cancellationToken).ConfigureAwait(false);
		}

		/**
		* Deletes a bulk of collected entities from the user's shopping cart.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	collectedEntityDeleteSets Information for deleting a bulk of collected entities
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		*/
		public async System.Threading.Tasks.Task DeleteCollectedEntitiesFromCurrentShoppingCartAsync(CollectedEntityDeleteSets collectedEntityDeleteSets, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/shoppingCarts/collectedEntities/bulk/";
			string pathParameter = null;
			byte[] bodyParameter = collectedEntityDeleteSets.ToByteArray();
			await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.DELETE, false, cancellationToken).ConfigureAwait(false);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<CreditTransaction>
		*/
		public async System.Threading.Tasks.Task<CreditTransaction> GetCreditTransactionForBrandAsync(string brandUuid, string creditTransactionUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/brands/:id/creditTransactions/:creditTransactionId/";
			string pathParameter = brandUuid;
			byte[] bodyParameter = null;
			apiPath = ReplaceCreditTransactionUuid(apiPath, creditTransactionUuid);
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false, cancellationToken).ConfigureAwait(false);
			return GetCreditTransaction(result);
		}

		/**
		* Gets all credit transactions for a brand. Please specify desired credit transaction types through query data.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	brandUuid The UUID of the brand entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<CreditTransactions>
		*/
		public async System.Threading.Tasks.Task<CreditTransactions> GetCreditTransactionsForBrandAsync(string brandUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/brands/:id/creditTransactions/";
			string pathParameter = brandUuid;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false, cancellationToken).ConfigureAwait(false);
			return GetCreditTransactions(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<CreditTransactions>
		*/
		public async System.Threading.Tasks.Task<CreditTransactions> GetSubCreditTransactionsForBrandCreditTransactionAsync(string brandUuid, string parentCreditTransactionUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/brands/:id/creditTransactions/:creditTransactionId/childs/";
			string pathParameter = brandUuid;
			byte[] bodyParameter = null;
			apiPath = ReplaceCreditTransactionUuid(apiPath, parentCreditTransactionUuid);
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false, cancellationToken).ConfigureAwait(false);
			return GetCreditTransactions(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> CreateBrandCreditTransactionDownloadTaskAsync(string brandUuid, CreditTransactionCreateDownloadTaskSet creditTransactionCreateDownloadTaskSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/brands/:id/creditTransactions/createDownloadTask/";
			string pathParameter = brandUuid;
			byte[] bodyParameter = creditTransactionCreateDownloadTaskSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> CreateBrandCreditTransactionDownloadTaskForCreditTransactionAsync(string brandUuid, CreditTransactionCreateDownloadTaskSet creditTransactionCreateDownloadTaskSet, string creditTransactionUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/brands/:id/creditTransactions/:creditTransactionId/createDownloadTask/";
			string pathParameter = brandUuid;
			byte[] bodyParameter = creditTransactionCreateDownloadTaskSet.ToByteArray();
			apiPath = ReplaceCreditTransactionUuid(apiPath, creditTransactionUuid);
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Entity>
		*/
		public async System.Threading.Tasks.Task<Entity> GetEntityAsync(EntityType entityType, string entityUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = GetUuidApiPath(entityType);
			string pathParameter = entityUuid;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, true, cancellationToken).ConfigureAwait(false);
			return GetEntity(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Entities>
		*/
		public async System.Threading.Tasks.Task<Entities> GetChildEntitiesAsync(EntityType entityType, string entityUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = GetChildsApiPath(entityType);
			string pathParameter = entityUuid;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, true, cancellationToken).ConfigureAwait(false);
			return GetEntities(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Entities>
		*/
		public async System.Threading.Tasks.Task<Entities> GetChildEntitiesPostAsync(EntityType entityType, string entityUuid, QueryData queryData, CancellationToken? cancellationToken = null)
		{
			string apiPath = GetChildsApiPath(entityType);
			string pathParameter = entityUuid;
			byte[] bodyParameter = queryData.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, true, cancellationToken).ConfigureAwait(false);
			return GetEntities(result);
		}

		/**
		* Creates a new entity with given type.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	entityType The type of the entity
		* @param	entityChangeSet Information for creating or updating an entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> CreateEntityAsync(EntityType entityType, EntityChangeSet entityChangeSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = GetNonUuidApiPath(entityType);
			string pathParameter = null;
			byte[] bodyParameter = entityChangeSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
		}

		/**
		* Creates a new entity with given type, and uploads binaries that will be attached to the entity.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	entityType The type of the entity
		* @param	entityChangeSet Information for creating or updating an entity
		* @param	binaries List of binaries for upload. Please note that in entity metadata you have to give the metadata for the binaries you upload
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> CreateEntityWithBinariesAsync(EntityType entityType, EntityChangeSet entityChangeSet, string[] binaries, CancellationToken? cancellationToken = null)
		{
			string apiPath = GetNonUuidApiPath(entityType);
			string pathParameter = null;
			byte[] bodyParameter = entityChangeSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_CW, apiPath, pathParameter, bodyParameter, binaries, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
		}

		/**
		* Creates a bulk of new entities with given type.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	entityType The type of the entity
		* @param	entityChangeSets Information for creating or updating a bulk of entities
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponses>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponses> CreateEntitiesAsync(EntityType entityType, EntityChangeSets entityChangeSets, CancellationToken? cancellationToken = null)
		{
			string apiPath = GetMultiApiPath(entityType);
			string pathParameter = null;
			byte[] bodyParameter = entityChangeSets.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponses(result);
		}

		/**
		* Creates a bulk of new entities with mixed type.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	entityChangeSets Information for creating or updating a bulk of entities
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponses>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponses> CreateEntitiesMixedAsync(EntityChangeSets entityChangeSets, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/entities/";
			string pathParameter = null;
			byte[] bodyParameter = entityChangeSets.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponses(result);
		}

		/**
		* Updates an entity with given type and UUID.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	entityType The type of the entity
		* @param	entityUuid The UUID of the entity
		* @param	entityChangeSet Information for creating or updating an entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> UpdateEntityAsync(EntityType entityType, string entityUuid, EntityChangeSet entityChangeSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = GetUuidApiPath(entityType);
			string pathParameter = entityUuid;
			byte[] bodyParameter = entityChangeSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> UpdateEntityWithBinariesAsync(EntityType entityType, string entityUuid, EntityChangeSet entityChangeSet, string[] binaries, CancellationToken? cancellationToken = null)
		{
			string apiPath = GetUuidApiPath(entityType);
			string pathParameter = entityUuid;
			byte[] bodyParameter = entityChangeSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_CW, apiPath, pathParameter, bodyParameter, binaries, ApiClient.Method.PUT, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
		}

		/**
		* Updates a bulk of entities with given type.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	entityType The type of the entity
		* @param	entityChangeSets Information for creating or updating a bulk of entities
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponses>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponses> UpdateEntitiesAsync(EntityType entityType, EntityChangeSets entityChangeSets, CancellationToken? cancellationToken = null)
		{
			string apiPath = GetMultiApiPath(entityType);
			string pathParameter = null;
			byte[] bodyParameter = entityChangeSets.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponses(result);
		}

		/**
		* Updates a bulk of new entities with mixed type.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	entityChangeSets Information for creating or updating a bulk of entities
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponses>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponses> UpdateEntitiesMixedAsync(EntityChangeSets entityChangeSets, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/entities/";
			string pathParameter = null;
			byte[] bodyParameter = entityChangeSets.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponses(result);
		}

		/**
		* Deletes an entity with given type and UUID.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	entityType The type of the entity
		* @param	entityUuid The UUID of the entity
		* @param	entityDeleteSet Information for deleting an entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> DeleteEntityAsync(EntityType entityType, string entityUuid, EntityDeleteSet entityDeleteSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = GetUuidApiPath(entityType);
			string pathParameter = entityUuid;
			byte[] bodyParameter = entityDeleteSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.DELETE, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
		}

		/**
		* Deletes a bulk of entities with given type.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	entityType The type of the entity
		* @param	entityDeleteSets Information for deleting a bulk of entities
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponses>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponses> DeleteEntitiesAsync(EntityType entityType, EntityDeleteSets entityDeleteSets, CancellationToken? cancellationToken = null)
		{
			string apiPath = GetMultiApiPath(entityType);
			string pathParameter = null;
			byte[] bodyParameter = entityDeleteSets.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.DELETE, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponses(result);
		}

		/**
		* Gets a list of all brands.
		*
		* This method supports anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Entities>
		*/
		public async System.Threading.Tasks.Task<Entities> GetAllBrandsAsync(CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/brands/";
			string pathParameter = null;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, true, cancellationToken).ConfigureAwait(false);
			return GetEntities(result);
		}

		/**
		* Gets a list of all brands. Uses the request body instead of the URL to specify query parameter data.
		*
		* This method supports anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	queryData The query parameter data
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Entities>
		*/
		public async System.Threading.Tasks.Task<Entities> GetAllBrandsPostAsync(QueryData queryData, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/brands/";
			string pathParameter = null;
			byte[] bodyParameter = queryData.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, true, cancellationToken).ConfigureAwait(false);
			return GetEntities(result);
		}

		/**
		* Gets an brand entity with given UUID.
		*
		* This method supports anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	brandUuid The UUID of the brand entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Entity>
		*/
		public async System.Threading.Tasks.Task<Entity> GetBrandAsync(string brandUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/brands/:id/";
			string pathParameter = brandUuid;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, true, cancellationToken).ConfigureAwait(false);
			return GetEntity(result);
		}

		/**
		* Gets an brand entity with given subdomain.
		*
		* This method supports anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	brandSubdomain The subdomain of the brand entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Entity>
		*/
		public async System.Threading.Tasks.Task<Entity> GetBrandBySubdomainAsync(string brandSubdomain, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/brands/bySubdomain/:id/";
			string pathParameter = brandSubdomain;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, true, cancellationToken).ConfigureAwait(false);
			return GetEntity(result);
		}

		/**
		* Gets metadata for the child entities of an brand entity with given UUID.
		*
		* This method supports anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	brandUuid The UUID of the brand entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Entities>
		*/
		public async System.Threading.Tasks.Task<Entities> GetBrandChildEntitiesAsync(string brandUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/brands/:id/childs/";
			string pathParameter = brandUuid;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, true, cancellationToken).ConfigureAwait(false);
			return GetEntities(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Entities>
		*/
		public async System.Threading.Tasks.Task<Entities> GetBrandChildEntitiesPostAsync(string brandUuid, QueryData queryData, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/brands/:id/childs/";
			string pathParameter = brandUuid;
			byte[] bodyParameter = queryData.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, true, cancellationToken).ConfigureAwait(false);
			return GetEntities(result);
		}

		/**
		* Creates a new brand entity.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	entityChangeSet Information for creating or updating an entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> CreateBrandAsync(EntityChangeSet entityChangeSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/brands/";
			string pathParameter = null;
			byte[] bodyParameter = entityChangeSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
		}

		/**
		* Creates a new brand entity, and uploads binaries that will be attached to the brand entity.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	entityChangeSet Information for creating or updating an entity
		* @param	binaries List of binaries for upload. Please note that in entity metadata you have to give the metadata for the binaries you upload
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> CreateBrandWithBinariesAsync(EntityChangeSet entityChangeSet, string[] binaries, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/brands/";
			string pathParameter = null;
			byte[] bodyParameter = entityChangeSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_CW, apiPath, pathParameter, bodyParameter, binaries, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
		}

		/**
		* Updates an brand entity with given UUID.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	brandUuid The UUID of the brand entity
		* @param	entityChangeSet Information for creating or updating an entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> UpdateBrandAsync(string brandUuid, EntityChangeSet entityChangeSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/brands/:id/";
			string pathParameter = brandUuid;
			byte[] bodyParameter = entityChangeSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
		}

		/**
		* Updates an brand entity with given UUID. Allows changing the metadata of binary uploads, and uploads binaries that will be attached to the entity.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	entityUuid The UUID of the entity
		* @param	entityChangeSet Information for creating or updating an entity
		* @param	binaries List of binaries for upload. Please note that in entity metadata you have to give the metadata for the binaries you upload
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> UpdateBrandWithBinariesAsync(string entityUuid, EntityChangeSet entityChangeSet, string[] binaries, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/brands/:id/";
			string pathParameter = entityUuid;
			byte[] bodyParameter = entityChangeSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_CW, apiPath, pathParameter, bodyParameter, binaries, ApiClient.Method.PUT, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
		}

		/**
		* Gets an trash entity with given UUID.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	trashUuid The UUID of the trash entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Entity>
		*/
		public async System.Threading.Tasks.Task<Entity> GetTrashAsync(string trashUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/trash/:id/";
			string pathParameter = trashUuid;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false, cancellationToken).ConfigureAwait(false);
			return GetEntity(result);
		}

		/**
		* Gets metadata for the child entities of an trash entity with given UUID.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	trashUuid The UUID of the trash entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Entities>
		*/
		public async System.Threading.Tasks.Task<Entities> GetTrashChildEntitiesAsync(string trashUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/trash/:id/childs/";
			string pathParameter = trashUuid;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false, cancellationToken).ConfigureAwait(false);
			return GetEntities(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Entities>
		*/
		public async System.Threading.Tasks.Task<Entities> GetTrashChildEntitiesPostAsync(string trashUuid, QueryData queryData, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/trash/:id/childs/";
			string pathParameter = trashUuid;
			byte[] bodyParameter = queryData.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetEntities(result);
		}

		/**
		* Restores an entity from the trash to its original location.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	trashUuid The UUID of the trash entity
		* @param	entityRestoreSet Information for restoring an entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> RestoreEntityAsync(string trashUuid, EntityRestoreSet entityRestoreSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/trash/:id/";
			string pathParameter = trashUuid;
			byte[] bodyParameter = entityRestoreSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
		}

		/**
		* Gets an folder entity with given UUID.
		*
		* This method supports anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	folderUuid The UUID of the folder entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Entity>
		*/
		public async System.Threading.Tasks.Task<Entity> GetFolderAsync(string folderUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/folders/:id/";
			string pathParameter = folderUuid;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, true, cancellationToken).ConfigureAwait(false);
			return GetEntity(result);
		}

		/**
		* Gets metadata for the child entities of an folder entity with given UUID.
		*
		* This method supports anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	folderUuid The UUID of the folder entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Entities>
		*/
		public async System.Threading.Tasks.Task<Entities> GetFolderChildEntitiesAsync(string folderUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/folders/:id/childs/";
			string pathParameter = folderUuid;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, true, cancellationToken).ConfigureAwait(false);
			return GetEntities(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Entities>
		*/
		public async System.Threading.Tasks.Task<Entities> GetFolderChildEntitiesPostAsync(string folderUuid, QueryData queryData, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/folders/:id/childs/";
			string pathParameter = folderUuid;
			byte[] bodyParameter = queryData.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, true, cancellationToken).ConfigureAwait(false);
			return GetEntities(result);
		}

		/**
		* Creates a new folder entity.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	entityChangeSet Information for creating or updating an entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> CreateFolderAsync(EntityChangeSet entityChangeSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/folders/";
			string pathParameter = null;
			byte[] bodyParameter = entityChangeSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
		}

		/**
		* Creates a new folder entity, and uploads binaries that will be attached to the folder entity.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	entityChangeSet Information for creating or updating an entity
		* @param	binaries List of binaries for upload. Please note that in entity metadata you have to give the metadata for the binaries you upload
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> CreateFolderWithBinariesAsync(EntityChangeSet entityChangeSet, string[] binaries, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/folders/";
			string pathParameter = null;
			byte[] bodyParameter = entityChangeSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_CW, apiPath, pathParameter, bodyParameter, binaries, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
		}

		/**
		* Updates an folder entity with given UUID.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	folderUuid The UUID of the folder entity
		* @param	entityChangeSet Information for creating or updating an entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> UpdateFolderAsync(string folderUuid, EntityChangeSet entityChangeSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/folders/:id/";
			string pathParameter = folderUuid;
			byte[] bodyParameter = entityChangeSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
		}

		/**
		* Updates an folder entity with given UUID. Allows changing the metadata of binary uploads, and uploads binaries that will be attached to the entity.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	entityUuid The UUID of the entity
		* @param	entityChangeSet Information for creating or updating an entity
		* @param	binaries List of binaries for upload. Please note that in entity metadata you have to give the metadata for the binaries you upload
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> UpdateFolderWithBinariesAsync(string entityUuid, EntityChangeSet entityChangeSet, string[] binaries, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/folders/:id/";
			string pathParameter = entityUuid;
			byte[] bodyParameter = entityChangeSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_CW, apiPath, pathParameter, bodyParameter, binaries, ApiClient.Method.PUT, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
		}

		/**
		* Deletes an folder entity with given UUID.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	folderUuid The UUID of the folder entity
		* @param	entityDeleteSet Information for deleting an entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> DeleteFolderAsync(string folderUuid, EntityDeleteSet entityDeleteSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/folders/:id/";
			string pathParameter = folderUuid;
			byte[] bodyParameter = entityDeleteSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.DELETE, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
		}

		/**
		* Gets an asset entity with given UUID.
		*
		* This method supports anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	assetUuid The UUID of the asset entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Entity>
		*/
		public async System.Threading.Tasks.Task<Entity> GetAssetAsync(string assetUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/assets/:id/";
			string pathParameter = assetUuid;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, true, cancellationToken).ConfigureAwait(false);
			return GetEntity(result);
		}

		/**
		* Creates a new asset entity.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	entityChangeSet Information for creating or updating an entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> CreateAssetAsync(EntityChangeSet entityChangeSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/assets/";
			string pathParameter = null;
			byte[] bodyParameter = entityChangeSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
		}

		/**
		* Creates a new asset entity, and uploads binaries that will be attached to the asset entity.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	entityChangeSet Information for creating or updating an entity
		* @param	binaries List of binaries for upload. Please note that in entity metadata you have to give the metadata for the binaries you upload
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> CreateAssetWithBinariesAsync(EntityChangeSet entityChangeSet, string[] binaries, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/assets/";
			string pathParameter = null;
			byte[] bodyParameter = entityChangeSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_CW, apiPath, pathParameter, bodyParameter, binaries, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
		}

		/**
		* Updates an asset entity with given UUID.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	assetUuid The UUID of the asset entity
		* @param	entityChangeSet Information for creating or updating an entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> UpdateAssetAsync(string assetUuid, EntityChangeSet entityChangeSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/assets/:id/";
			string pathParameter = assetUuid;
			byte[] bodyParameter = entityChangeSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
		}

		/**
		* Updates an asset entity with given UUID. Allows changing the metadata of binary uploads, and uploads binaries that will be attached to the entity.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	entityUuid The UUID of the entity
		* @param	entityChangeSet Information for creating or updating an entity
		* @param	binaries List of binaries for upload. Please note that in entity metadata you have to give the metadata for the binaries you upload
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> UpdateAssetWithBinariesAsync(string entityUuid, EntityChangeSet entityChangeSet, string[] binaries, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/assets/:id/";
			string pathParameter = entityUuid;
			byte[] bodyParameter = entityChangeSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_CW, apiPath, pathParameter, bodyParameter, binaries, ApiClient.Method.PUT, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
		}

		/**
		* Deletes an asset entity with given UUID.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	assetUuid The UUID of the asset entity
		* @param	entityDeleteSet Information for deleting an entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> DeleteAssetAsync(string assetUuid, EntityDeleteSet entityDeleteSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/assets/:id/";
			string pathParameter = assetUuid;
			byte[] bodyParameter = entityDeleteSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.DELETE, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
		}

		/**
		* Gets an jobs entity with given UUID.
		*
		* This method supports anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	jobsUuid The UUID of the jobs entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Entity>
		*/
		public async System.Threading.Tasks.Task<Entity> GetJobsAsync(string jobsUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/_jobs/:id/";
			string pathParameter = jobsUuid;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, true, cancellationToken).ConfigureAwait(false);
			return GetEntity(result);
		}

		/**
		* Gets metadata for the child entities of an jobs entity with given UUID.
		*
		* This method supports anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	jobsUuid The UUID of the jobs entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Entities>
		*/
		public async System.Threading.Tasks.Task<Entities> GetJobsChildEntitiesAsync(string jobsUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/_jobs/:id/childs/";
			string pathParameter = jobsUuid;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, true, cancellationToken).ConfigureAwait(false);
			return GetEntities(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Entities>
		*/
		public async System.Threading.Tasks.Task<Entities> GetJobsChildEntitiesPostAsync(string jobsUuid, QueryData queryData, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/_jobs/:id/childs/";
			string pathParameter = jobsUuid;
			byte[] bodyParameter = queryData.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, true, cancellationToken).ConfigureAwait(false);
			return GetEntities(result);
		}

		/**
		* Updates an jobs entity with given UUID.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	jobsUuid The UUID of the jobs entity
		* @param	entityChangeSet Information for creating or updating an entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> UpdateJobsAsync(string jobsUuid, EntityChangeSet entityChangeSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/_jobs/:id/";
			string pathParameter = jobsUuid;
			byte[] bodyParameter = entityChangeSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
		}

		/**
		* Updates an jobs entity with given UUID. Allows changing the metadata of binary uploads, and uploads binaries that will be attached to the entity.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	entityUuid The UUID of the entity
		* @param	entityChangeSet Information for creating or updating an entity
		* @param	binaries List of binaries for upload. Please note that in entity metadata you have to give the metadata for the binaries you upload
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> UpdateJobsWithBinariesAsync(string entityUuid, EntityChangeSet entityChangeSet, string[] binaries, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/_jobs/:id/";
			string pathParameter = entityUuid;
			byte[] bodyParameter = entityChangeSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_CW, apiPath, pathParameter, bodyParameter, binaries, ApiClient.Method.PUT, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
		}

		/**
		* Gets an job entity with given UUID.
		*
		* This method supports anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	jobUuid The UUID of the job entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Entity>
		*/
		public async System.Threading.Tasks.Task<Entity> GetJobAsync(string jobUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/jobs/:id/";
			string pathParameter = jobUuid;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, true, cancellationToken).ConfigureAwait(false);
			return GetEntity(result);
		}

		/**
		* Gets metadata for the child entities of an job entity with given UUID.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	jobUuid The UUID of the job entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Entities>
		*/
		public async System.Threading.Tasks.Task<Entities> GetJobChildEntitiesAsync(string jobUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/jobs/:id/childs/";
			string pathParameter = jobUuid;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false, cancellationToken).ConfigureAwait(false);
			return GetEntities(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Entities>
		*/
		public async System.Threading.Tasks.Task<Entities> GetJobChildEntitiesPostAsync(string jobUuid, QueryData queryData, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/jobs/:id/childs/";
			string pathParameter = jobUuid;
			byte[] bodyParameter = queryData.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetEntities(result);
		}

		/**
		* Creates a new job entity.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	entityChangeSet Information for creating or updating an entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> CreateJobAsync(EntityChangeSet entityChangeSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/jobs/";
			string pathParameter = null;
			byte[] bodyParameter = entityChangeSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
		}

		/**
		* Creates a new job entity, and uploads binaries that will be attached to the job entity.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	entityChangeSet Information for creating or updating an entity
		* @param	binaries List of binaries for upload. Please note that in entity metadata you have to give the metadata for the binaries you upload
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> CreateJobWithBinariesAsync(EntityChangeSet entityChangeSet, string[] binaries, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/jobs/";
			string pathParameter = null;
			byte[] bodyParameter = entityChangeSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_CW, apiPath, pathParameter, bodyParameter, binaries, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
		}

		/**
		* Updates an job entity with given UUID.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	jobUuid The UUID of the job entity
		* @param	entityChangeSet Information for creating or updating an entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> UpdateJobAsync(string jobUuid, EntityChangeSet entityChangeSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/jobs/:id/";
			string pathParameter = jobUuid;
			byte[] bodyParameter = entityChangeSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
		}

		/**
		* Updates an job entity with given UUID. Allows changing the metadata of binary uploads, and uploads binaries that will be attached to the entity.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	entityUuid The UUID of the entity
		* @param	entityChangeSet Information for creating or updating an entity
		* @param	binaries List of binaries for upload. Please note that in entity metadata you have to give the metadata for the binaries you upload
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> UpdateJobWithBinariesAsync(string entityUuid, EntityChangeSet entityChangeSet, string[] binaries, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/jobs/:id/";
			string pathParameter = entityUuid;
			byte[] bodyParameter = entityChangeSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_CW, apiPath, pathParameter, bodyParameter, binaries, ApiClient.Method.PUT, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
		}

		/**
		* Deletes an job entity with given UUID.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	jobUuid The UUID of the job entity
		* @param	entityDeleteSet Information for deleting an entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> DeleteJobAsync(string jobUuid, EntityDeleteSet entityDeleteSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/jobs/:id/";
			string pathParameter = jobUuid;
			byte[] bodyParameter = entityDeleteSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.DELETE, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
		}

		/**
		* Applies for participation in a job with given UUID.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	jobUuid The UUID of the job entity
		* @param	jobApplicationSet Information for applying for participating in a job
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> ApplyForJobAsync(string jobUuid, JobApplicationSet jobApplicationSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/jobs/:id/apply/";
			string pathParameter = jobUuid;
			byte[] bodyParameter = jobApplicationSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
		}

		/**
		* Participates in a job with given UUID.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	jobUuid The UUID of the job entity
		* @param	jobParticipationSet Information for participating in a job
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> ParticipateInJobAsync(string jobUuid, JobParticipationSet jobParticipationSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/jobs/:id/participate/";
			string pathParameter = jobUuid;
			byte[] bodyParameter = jobParticipationSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
		}

		/**
		* Closes a job with given UUID.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	jobUuid The UUID of the job entity
		* @param	jobCloseSet Information for closing a job
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> CloseJobAsync(string jobUuid, JobCloseSet jobCloseSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/jobs/:id/close/";
			string pathParameter = jobUuid;
			byte[] bodyParameter = jobCloseSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
		}

		/**
		* Gets an participations entity with given UUID.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	participationsUuid The UUID of the participations entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Entity>
		*/
		public async System.Threading.Tasks.Task<Entity> GetParticipationsAsync(string participationsUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/_participations/:id/";
			string pathParameter = participationsUuid;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false, cancellationToken).ConfigureAwait(false);
			return GetEntity(result);
		}

		/**
		* Gets metadata for the child entities of an participations entity with given UUID.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	participationsUuid The UUID of the participations entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Entities>
		*/
		public async System.Threading.Tasks.Task<Entities> GetParticipationsChildEntitiesAsync(string participationsUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/_participations/:id/childs/";
			string pathParameter = participationsUuid;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false, cancellationToken).ConfigureAwait(false);
			return GetEntities(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Entities>
		*/
		public async System.Threading.Tasks.Task<Entities> GetParticipationsChildEntitiesPostAsync(string participationsUuid, QueryData queryData, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/_participations/:id/childs/";
			string pathParameter = participationsUuid;
			byte[] bodyParameter = queryData.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetEntities(result);
		}

		/**
		* Updates an participations entity with given UUID.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	participationsUuid The UUID of the participations entity
		* @param	entityChangeSet Information for creating or updating an entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> UpdateParticipationsAsync(string participationsUuid, EntityChangeSet entityChangeSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/_participations/:id/";
			string pathParameter = participationsUuid;
			byte[] bodyParameter = entityChangeSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
		}

		/**
		* Gets an participation entity with given UUID.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	participationUuid The UUID of the participation entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Entity>
		*/
		public async System.Threading.Tasks.Task<Entity> GetParticipationAsync(string participationUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/participations/:id/";
			string pathParameter = participationUuid;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false, cancellationToken).ConfigureAwait(false);
			return GetEntity(result);
		}

		/**
		* Gets metadata for the child entities of an participation entity with given UUID.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	participationUuid The UUID of the participation entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Entities>
		*/
		public async System.Threading.Tasks.Task<Entities> GetParticipationChildEntitiesAsync(string participationUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/participations/:id/childs/";
			string pathParameter = participationUuid;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false, cancellationToken).ConfigureAwait(false);
			return GetEntities(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Entities>
		*/
		public async System.Threading.Tasks.Task<Entities> GetParticipationChildEntitiesPostAsync(string participationUuid, QueryData queryData, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/participations/:id/childs/";
			string pathParameter = participationUuid;
			byte[] bodyParameter = queryData.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetEntities(result);
		}

		/**
		* Updates an participation entity with given UUID.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	participationUuid The UUID of the participation entity
		* @param	entityChangeSet Information for creating or updating an entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> UpdateParticipationAsync(string participationUuid, EntityChangeSet entityChangeSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/participations/:id/";
			string pathParameter = participationUuid;
			byte[] bodyParameter = entityChangeSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
		}

		/**
		* Deletes an participation entity with given UUID.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	participationUuid The UUID of the participation entity
		* @param	entityDeleteSet Information for deleting an entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> DeleteParticipationAsync(string participationUuid, EntityDeleteSet entityDeleteSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/participations/:id/";
			string pathParameter = participationUuid;
			byte[] bodyParameter = entityDeleteSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.DELETE, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
		}

		/**
		* Submits an participation entity with given UUID to the job issuer.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	participationUuid The UUID of the participation entity
		* @param	jobParticipationSubmitSet Information for submitting an participation entity to the job issuer
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> SubmitParticipationAsync(string participationUuid, JobParticipationSubmitSet jobParticipationSubmitSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/participations/:id/submit/";
			string pathParameter = participationUuid;
			byte[] bodyParameter = jobParticipationSubmitSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
		}

		/**
		* Rejects an participation entity with given UUID from the job issuer back to the participant.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	participationUuid The UUID of the participation entity
		* @param	jobParticipationRejectSet Information for rejecting an participation entity from the job issuer back to the participant
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> RejectParticipationAsync(string participationUuid, JobParticipationRejectSet jobParticipationRejectSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/participations/:id/reject/";
			string pathParameter = participationUuid;
			byte[] bodyParameter = jobParticipationRejectSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
		}

		/**
		* Accepting an participation entity with given UUID for participation in the job.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	participationUuid The UUID of the participation entity
		* @param	jobApplicationAcceptSet Information for accepting an participation entity for participation in the job
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> AcceptJobApplicationAsync(string participationUuid, JobApplicationAcceptSet jobApplicationAcceptSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/participations/:id/accept/";
			string pathParameter = participationUuid;
			byte[] bodyParameter = jobApplicationAcceptSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
		}

		/**
		* Gets an projects entity with given UUID.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	projectsUuid The UUID of the projects entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Entity>
		*/
		public async System.Threading.Tasks.Task<Entity> GetProjectsAsync(string projectsUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/_projects/:id/";
			string pathParameter = projectsUuid;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false, cancellationToken).ConfigureAwait(false);
			return GetEntity(result);
		}

		/**
		* Gets metadata for the child entities of an projects entity with given UUID.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	projectsUuid The UUID of the projects entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Entities>
		*/
		public async System.Threading.Tasks.Task<Entities> GetProjectsChildEntitiesAsync(string projectsUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/_projects/:id/childs/";
			string pathParameter = projectsUuid;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false, cancellationToken).ConfigureAwait(false);
			return GetEntities(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Entities>
		*/
		public async System.Threading.Tasks.Task<Entities> GetProjectsChildEntitiesPostAsync(string projectsUuid, QueryData queryData, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/_projects/:id/childs/";
			string pathParameter = projectsUuid;
			byte[] bodyParameter = queryData.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetEntities(result);
		}

		/**
		* Updates an projects entity with given UUID.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	projectsUuid The UUID of the projects entity
		* @param	entityChangeSet Information for creating or updating an entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> UpdateProjectsAsync(string projectsUuid, EntityChangeSet entityChangeSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/_projects/:id/";
			string pathParameter = projectsUuid;
			byte[] bodyParameter = entityChangeSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
		}

		/**
		* Gets an project entity with given UUID.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	projectUuid The UUID of the project entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Entity>
		*/
		public async System.Threading.Tasks.Task<Entity> GetProjectAsync(string projectUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/projects/:id/";
			string pathParameter = projectUuid;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false, cancellationToken).ConfigureAwait(false);
			return GetEntity(result);
		}

		/**
		* Creates a new project entity.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	entityChangeSet Information for creating or updating an entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> CreateProjectAsync(EntityChangeSet entityChangeSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/projects/";
			string pathParameter = null;
			byte[] bodyParameter = entityChangeSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
		}

		/**
		* Creates a new project entity, and uploads binaries that will be attached to the project entity.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	entityChangeSet Information for creating or updating an entity
		* @param	binaries List of binaries for upload. Please note that in entity metadata you have to give the metadata for the binaries you upload
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> CreateProjectWithBinariesAsync(EntityChangeSet entityChangeSet, string[] binaries, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/projects/";
			string pathParameter = null;
			byte[] bodyParameter = entityChangeSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_CW, apiPath, pathParameter, bodyParameter, binaries, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
		}

		/**
		* Updates an project entity with given UUID.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	projectUuid The UUID of the project entity
		* @param	entityChangeSet Information for creating or updating an entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> UpdateProjectAsync(string projectUuid, EntityChangeSet entityChangeSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/projects/:id/";
			string pathParameter = projectUuid;
			byte[] bodyParameter = entityChangeSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
		}

		/**
		* Updates an project entity with given UUID. Allows changing the metadata of binary uploads, and uploads binaries that will be attached to the entity.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	entityUuid The UUID of the entity
		* @param	entityChangeSet Information for creating or updating an entity
		* @param	binaries List of binaries for upload. Please note that in entity metadata you have to give the metadata for the binaries you upload
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> UpdateProjectWithBinariesAsync(string entityUuid, EntityChangeSet entityChangeSet, string[] binaries, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/projects/:id/";
			string pathParameter = entityUuid;
			byte[] bodyParameter = entityChangeSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_CW, apiPath, pathParameter, bodyParameter, binaries, ApiClient.Method.PUT, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
		}

		/**
		* Deletes an project entity with given UUID.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	projectUuid The UUID of the project entity
		* @param	entityDeleteSet Information for deleting an entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> DeleteProjectAsync(string projectUuid, EntityDeleteSet entityDeleteSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/projects/:id/";
			string pathParameter = projectUuid;
			byte[] bodyParameter = entityDeleteSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.DELETE, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
		}

		/**
		* Gets all brand's projects that are currently open for the user to collect entities to.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	brandUuid The UUID of the brand entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Entities>
		*/
		public async System.Threading.Tasks.Task<Entities> GetCollectableProjectsForBrandAsync(string brandUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/brands/:id/projects/";
			string pathParameter = brandUuid;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false, cancellationToken).ConfigureAwait(false);
			return GetEntities(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Entities>
		*/
		public async System.Threading.Tasks.Task<Entities> GetCollectableProjectsForBrandPostAsync(string brandUuid, QueryData queryData, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/brands/:id/projects/";
			string pathParameter = brandUuid;
			byte[] bodyParameter = queryData.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetEntities(result);
		}

		/**
		* Searches the complete entity index based on filter criteria. The filter criteria is given through query parameter data.
		*
		* This method supports anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Entities>
		*/
		public async System.Threading.Tasks.Task<Entities> SearchEntitiesAsync(CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/searchEntities/";
			string pathParameter = null;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, true, cancellationToken).ConfigureAwait(false);
			return GetEntities(result);
		}

		/**
		* Searches the complete entity index based on filter criteria. The filter criteria is given through query parameter data. Uses the request body instead of the URL to specify query parameter data.
		*
		* This method supports anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	queryData The query parameter data
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Entities>
		*/
		public async System.Threading.Tasks.Task<Entities> SearchEntitiesPostAsync(QueryData queryData, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/searchEntities/";
			string pathParameter = null;
			byte[] bodyParameter = queryData.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, true, cancellationToken).ConfigureAwait(false);
			return GetEntities(result);
		}

		/**
		* Searches the child entities of an entity with given UUID based on filter criteria. The filter criteria is given through query parameter data.
		*
		* This method supports anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	parentEntityUuid The UUID of the parent entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Entities>
		*/
		public async System.Threading.Tasks.Task<Entities> SearchEntitiesWithinEntityAsync(string parentEntityUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/searchEntities/:id/childs/";
			string pathParameter = parentEntityUuid;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, true, cancellationToken).ConfigureAwait(false);
			return GetEntities(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Entities>
		*/
		public async System.Threading.Tasks.Task<Entities> SearchEntitiesWithinEntityPostAsync(string parentEntityUuid, QueryData queryData, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/searchEntities/:id/childs/";
			string pathParameter = parentEntityUuid;
			byte[] bodyParameter = queryData.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, true, cancellationToken).ConfigureAwait(false);
			return GetEntities(result);
		}

		/**
		* Takes user input and returns a list of matching user groups, users, brands or licenses. The input needs to be given in 'terms' query parameter, the types of entities can be specified in query data as well.
		*
		* This method supports anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<AutocompletedEntities>
		*/
		public async System.Threading.Tasks.Task<AutocompletedEntities> SearchAutocompletedEntitiesAsync(CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/searchAutocompletedEntities/";
			string pathParameter = null;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, true, cancellationToken).ConfigureAwait(false);
			return GetAutocompletedEntities(result);
		}

		/**
		* Takes user input and returns a list of matching user groups, users, brands or licenses. The input needs to be given in 'terms' query parameter, the types of entities can be specified in query data as well. Uses the request body instead of the URL to specify query parameter data.
		*
		* This method supports anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	queryData The query parameter data
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<AutocompletedEntities>
		*/
		public async System.Threading.Tasks.Task<AutocompletedEntities> SearchAutocompletedEntitiesPostAsync(QueryData queryData, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/searchAutocompletedEntities/";
			string pathParameter = null;
			byte[] bodyParameter = queryData.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, true, cancellationToken).ConfigureAwait(false);
			return GetAutocompletedEntities(result);
		}

		/**
		* Gets the licenses for a brand entity with given UUID.
		*
		* This method supports anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	brandUuid The UUID of the brand entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Licenses>
		*/
		public async System.Threading.Tasks.Task<Licenses> GetLicensesForBrandAsync(string brandUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/brands/:id/licenses/";
			string pathParameter = brandUuid;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, true, cancellationToken).ConfigureAwait(false);
			return GetLicenses(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Licenses>
		*/
		public async System.Threading.Tasks.Task<Licenses> GetLicensesForBrandPostAsync(string brandUuid, QueryData queryData, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/brands/:id/licenses/";
			string pathParameter = brandUuid;
			byte[] bodyParameter = queryData.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, true, cancellationToken).ConfigureAwait(false);
			return GetLicenses(result);
		}

		/**
		* Gets a shopping cart.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	shoppingCartUuid The UUID of the shopping cart
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ShoppingCart>
		*/
		public async System.Threading.Tasks.Task<ShoppingCart> GetShoppingCartAsync(string shoppingCartUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/shoppingCarts/:id/";
			string pathParameter = shoppingCartUuid;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false, cancellationToken).ConfigureAwait(false);
			return GetShoppingCart(result);
		}

		/**
		* Gets the user's shopping cart.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ShoppingCart>
		*/
		public async System.Threading.Tasks.Task<ShoppingCart> GetCurrentShoppingCartAsync(CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/shoppingCarts/";
			string pathParameter = null;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false, cancellationToken).ConfigureAwait(false);
			return GetShoppingCart(result);
		}

		/**
		* Submits the user's shopping cart to it's brand for purchase approval.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	shoppingCartSubmitToBrandSet Information for submitting a shopping cart to it's brand for purchase approval
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ShoppingCart>
		*/
		public async System.Threading.Tasks.Task<ShoppingCart> SubmitShoppingCartToBrandAsync(ShoppingCartSubmitToBrandSet shoppingCartSubmitToBrandSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/shoppingCarts/submitToBrand/";
			string pathParameter = null;
			byte[] bodyParameter = shoppingCartSubmitToBrandSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetShoppingCart(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> AcquireShoppingCartAsync(string shoppingCartUuid, ShoppingCartAcquireSet shoppingCartAcquireSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/shoppingCarts/:id/acquire/";
			string pathParameter = shoppingCartUuid;
			byte[] bodyParameter = shoppingCartAcquireSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ShoppingCart>
		*/
		public async System.Threading.Tasks.Task<ShoppingCart> RejectShoppingCartAcquisitionAsync(string shoppingCartUuid, ShoppingCartRejectAcquisitionSet shoppingCartRejectAcquisitionSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/shoppingCarts/:id/rejectAcquisition/";
			string pathParameter = shoppingCartUuid;
			byte[] bodyParameter = shoppingCartRejectAcquisitionSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetShoppingCart(result);
		}

		/**
		* Get an tag entity with given UUID.
		*
		* This method supports anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	tagUuid The UUID of the tag entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Tag>
		*/
		public async System.Threading.Tasks.Task<Tag> GetTagAsync(string tagUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/tags/:id/";
			string pathParameter = tagUuid;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, true, cancellationToken).ConfigureAwait(false);
			return GetTag(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> CreateAssetDownloadTaskAsync(string assetUuid, AssetCreateDownloadTaskSet assetCreateDownloadTaskSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/assets/:id/createDownloadTask/";
			string pathParameter = assetUuid;
			byte[] bodyParameter = assetCreateDownloadTaskSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, true, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
		}

		/**
		* Gets user information for an user with given UUID.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	userUuid The UUID of the user
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<User>
		*/
		public async System.Threading.Tasks.Task<User> GetUserAsync(string userUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/users/:id/";
			string pathParameter = userUuid;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false, cancellationToken).ConfigureAwait(false);
			return GetUser(result);
		}

		/**
		* Gets the current user's information.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<User>
		*/
		public async System.Threading.Tasks.Task<User> GetCurrentUserAsync(CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/users/";
			string pathParameter = null;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false, cancellationToken).ConfigureAwait(false);
			return GetUser(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Users>
		*/
		public async System.Threading.Tasks.Task<Users> GetUsersForEndUserGroupAsync(string brandUuid, string endUserGroupUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/brands/:id/endUserGroups/:groupId/users/";
			string pathParameter = brandUuid;
			byte[] bodyParameter = null;
			apiPath = ReplaceUserGroupUuid(apiPath, endUserGroupUuid);
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false, cancellationToken).ConfigureAwait(false);
			return GetUsers(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Users>
		*/
		public async System.Threading.Tasks.Task<Users> GetUsersForEndUserGroupPostAsync(string brandUuid, QueryData queryData, string endUserGroupUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/brands/:id/endUserGroups/:groupId/users/";
			string pathParameter = brandUuid;
			byte[] bodyParameter = queryData.ToByteArray();
			apiPath = ReplaceUserGroupUuid(apiPath, endUserGroupUuid);
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetUsers(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Entities>
		*/
		public async System.Threading.Tasks.Task<Entities> GetBrandsForEndUserGroupAsync(string brandUuid, string endUserGroupUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/brands/:id/endUserGroups/:groupId/brands/";
			string pathParameter = brandUuid;
			byte[] bodyParameter = null;
			apiPath = ReplaceUserGroupUuid(apiPath, endUserGroupUuid);
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false, cancellationToken).ConfigureAwait(false);
			return GetEntities(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Entities>
		*/
		public async System.Threading.Tasks.Task<Entities> GetBrandsForEndUserGroupPostAsync(string brandUuid, QueryData queryData, string endUserGroupUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/brands/:id/endUserGroups/:groupId/brands/";
			string pathParameter = brandUuid;
			byte[] bodyParameter = queryData.ToByteArray();
			apiPath = ReplaceUserGroupUuid(apiPath, endUserGroupUuid);
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetEntities(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Users>
		*/
		public async System.Threading.Tasks.Task<Users> GetUsersForAdminUserGroupAsync(string brandUuid, string adminUserGroupUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/brands/:id/adminUserGroups/:groupId/users/";
			string pathParameter = brandUuid;
			byte[] bodyParameter = null;
			apiPath = ReplaceUserGroupUuid(apiPath, adminUserGroupUuid);
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false, cancellationToken).ConfigureAwait(false);
			return GetUsers(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Users>
		*/
		public async System.Threading.Tasks.Task<Users> GetUsersForAdminUserGroupPostAsync(string brandUuid, QueryData queryData, string adminUserGroupUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/brands/:id/adminUserGroups/:groupId/users/";
			string pathParameter = brandUuid;
			byte[] bodyParameter = queryData.ToByteArray();
			apiPath = ReplaceUserGroupUuid(apiPath, adminUserGroupUuid);
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetUsers(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<UserGroup>
		*/
		public async System.Threading.Tasks.Task<UserGroup> GetEndUserGroupAsync(string brandUuid, string endUserGroupUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/brands/:id/endUserGroups/:groupId/";
			string pathParameter = brandUuid;
			byte[] bodyParameter = null;
			apiPath = ReplaceUserGroupUuid(apiPath, endUserGroupUuid);
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false, cancellationToken).ConfigureAwait(false);
			return GetUserGroup(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<UserGroup>
		*/
		public async System.Threading.Tasks.Task<UserGroup> GetEndUserGroupReadAsync(string brandUuid, string endUserGroupUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/brands/:id/endUserGroups/:groupId/";
			string pathParameter = brandUuid;
			byte[] bodyParameter = null;
			apiPath = ReplaceUserGroupUuid(apiPath, endUserGroupUuid);
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDR, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false, cancellationToken).ConfigureAwait(false);
			return GetUserGroup(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<UserGroup>
		*/
		public async System.Threading.Tasks.Task<UserGroup> GetAdminUserGroupAsync(string brandUuid, string adminUserGroupUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/brands/:id/adminUserGroups/:groupId/";
			string pathParameter = brandUuid;
			byte[] bodyParameter = null;
			apiPath = ReplaceUserGroupUuid(apiPath, adminUserGroupUuid);
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false, cancellationToken).ConfigureAwait(false);
			return GetUserGroup(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<UserGroup>
		*/
		public async System.Threading.Tasks.Task<UserGroup> GetAdminUserGroupReadAsync(string brandUuid, string adminUserGroupUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/brands/:id/adminUserGroups/:groupId/";
			string pathParameter = brandUuid;
			byte[] bodyParameter = null;
			apiPath = ReplaceUserGroupUuid(apiPath, adminUserGroupUuid);
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDR, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false, cancellationToken).ConfigureAwait(false);
			return GetUserGroup(result);
		}

		/**
		* Updates an user.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	userUuid The UUID of the user
		* @param	userChangeSet Information for creating or updating an user within our main identity database
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ServerTaskResponse>
		*/
		public async System.Threading.Tasks.Task<ServerTaskResponse> UpdateUserAsync(string userUuid, UserChangeSet userChangeSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/users/:id/";
			string pathParameter = userUuid;
			byte[] bodyParameter = userChangeSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false, cancellationToken).ConfigureAwait(false);
			return GetServerTaskResponse(result);
		}

		/**
		* Reserves an user UUID within our main identity database. Requires extended permissions, please contact us to get more information.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	userReserveSet Information for reserving an user UUID within our main identity database
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<User>
		*/
		public async System.Threading.Tasks.Task<User> ReserveIdentityUserAsync(UserReserveSet userReserveSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/users/reserve/";
			string pathParameter = null;
			byte[] bodyParameter = userReserveSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_ID, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetUser(result);
		}

		/**
		* Reserves a bulk of user UUIDs within our main identity database. Requires extended permissions, please contact us to get more information.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	userReserveSets Information for reserving a bulk of user UUIDs within our main identity database
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<User>
		*/
		public async System.Threading.Tasks.Task<User> ReserveIdentityUsersAsync(UserReserveSets userReserveSets, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/users/reserve/bulk/";
			string pathParameter = null;
			byte[] bodyParameter = userReserveSets.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_ID, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetUser(result);
		}

		/**
		* Creates an user within our main identity database. Requires extended permissions, please contact us to get more information.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	userChangeSet Information for creating or updating an user within our main identity database
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<User>
		*/
		public async System.Threading.Tasks.Task<User> CreateIdentityUserAsync(UserChangeSet userChangeSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/users/";
			string pathParameter = null;
			byte[] bodyParameter = userChangeSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_ID, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetUser(result);
		}

		/**
		* Creates a bulk of users within our main identity database. Requires extended permissions, please contact us to get more information.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	userChangeSets Information for creating or updating a bulk of users within our main identity database
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Users>
		*/
		public async System.Threading.Tasks.Task<Users> CreateIdentityUsersAsync(UserChangeSets userChangeSets, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/users/bulk/";
			string pathParameter = null;
			byte[] bodyParameter = userChangeSets.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_ID, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetUsers(result);
		}

		/**
		* Updates an user within our main identity database. Requires extended permissions, please contact us to get more information.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	userUuid The UUID of the user
		* @param	userChangeSet Information for creating or updating an user within our main identity database
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<User>
		*/
		public async System.Threading.Tasks.Task<User> UpdateIdentityUserAsync(string userUuid, UserChangeSet userChangeSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/users/:id/";
			string pathParameter = userUuid;
			byte[] bodyParameter = userChangeSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_ID, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false, cancellationToken).ConfigureAwait(false);
			return GetUser(result);
		}

		/**
		* Updates a bulk of users within our main identity database. Requires extended permissions, please contact us to get more information.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	userChangeSets Information for creating or updating a bulk of users within our main identity database
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Users>
		*/
		public async System.Threading.Tasks.Task<Users> UpdateIdentityUsersAsync(UserChangeSets userChangeSets, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/users/bulk/";
			string pathParameter = null;
			byte[] bodyParameter = userChangeSets.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_ID, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false, cancellationToken).ConfigureAwait(false);
			return GetUsers(result);
		}

		/**
		* Gets user information for an user with given UUID from our main identity database. Requires extended permissions, please contact us to get more information.
		*
		* This method does NOT support anonymous invocation.
		*
		* @param	userUuid The UUID of the user
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<User>
		*/
		public async System.Threading.Tasks.Task<User> GetIdentityUserAsync(string userUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/users/:id/";
			string pathParameter = userUuid;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_ID, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false, cancellationToken).ConfigureAwait(false);
			return GetUser(result);
		}

		/**
		* Gets the follow settings for the current user.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<UserFollowSettings>
		*/
		public async System.Threading.Tasks.Task<UserFollowSettings> GetUserFollowSettingsAsync(CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/userFollowSettings/";
			string pathParameter = null;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false, cancellationToken).ConfigureAwait(false);
			return GetUserFollowSettings(result);
		}

		/**
		* Creates a follow setting for the current user.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	userFollowSettingCreateSet Information for creating a follow setting for an user
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<UserFollowSetting>
		*/
		public async System.Threading.Tasks.Task<UserFollowSetting> CreateUserFollowSettingAsync(UserFollowSettingCreateSet userFollowSettingCreateSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/userFollowSettings/";
			string pathParameter = null;
			byte[] bodyParameter = userFollowSettingCreateSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetUserFollowSetting(result);
		}

		/**
		* Deletes a follow setting with given UUID for the current user.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	userFollowSettingUuid The UUID of the user follow setting
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		*/
		public async System.Threading.Tasks.Task DeleteUserFollowSettingAsync(string userFollowSettingUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/userFollowSettings/:id/";
			string pathParameter = userFollowSettingUuid;
			byte[] bodyParameter = null;
			await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.DELETE, false, cancellationToken).ConfigureAwait(false);
		}

		/**
		* Gets all end user groups for a brand with given UUID.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	brandUuid The UUID of the brand entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<UserGroups>
		*/
		public async System.Threading.Tasks.Task<UserGroups> GetEndUserGroupsForBrandAsync(string brandUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/brands/:id/endUserGroups/";
			string pathParameter = brandUuid;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false, cancellationToken).ConfigureAwait(false);
			return GetUserGroups(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<UserGroups>
		*/
		public async System.Threading.Tasks.Task<UserGroups> GetEndUserGroupsForBrandReadAsync(string brandUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/brands/:id/endUserGroups/";
			string pathParameter = brandUuid;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDR, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false, cancellationToken).ConfigureAwait(false);
			return GetUserGroups(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<UserGroups>
		*/
		public async System.Threading.Tasks.Task<UserGroups> GetEndUserGroupsForBrandPostAsync(string brandUuid, QueryData queryData, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/brands/:id/endUserGroups/";
			string pathParameter = brandUuid;
			byte[] bodyParameter = queryData.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetUserGroups(result);
		}

		/**
		* Gets all admin user groups for a brand with given UUID.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	brandUuid The UUID of the brand entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<UserGroups>
		*/
		public async System.Threading.Tasks.Task<UserGroups> GetAdminUserGroupsForBrandAsync(string brandUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/brands/:id/adminUserGroups/";
			string pathParameter = brandUuid;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false, cancellationToken).ConfigureAwait(false);
			return GetUserGroups(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<UserGroups>
		*/
		public async System.Threading.Tasks.Task<UserGroups> GetAdminUserGroupsForBrandReadAsync(string brandUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/brands/:id/adminUserGroups/";
			string pathParameter = brandUuid;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDR, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false, cancellationToken).ConfigureAwait(false);
			return GetUserGroups(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<UserGroups>
		*/
		public async System.Threading.Tasks.Task<UserGroups> GetAdminUserGroupsForBrandPostAsync(string brandUuid, QueryData queryData, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/brands/:id/adminUserGroups/";
			string pathParameter = brandUuid;
			byte[] bodyParameter = queryData.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetUserGroups(result);
		}

		/**
		* Gets the current user's settings.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<UserSetting>
		*/
		public async System.Threading.Tasks.Task<UserSetting> GetUserSettingAsync(CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/userSetting/";
			string pathParameter = null;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false, cancellationToken).ConfigureAwait(false);
			return GetUserSetting(result);
		}

		/**
		* Updates the current user's settings.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	userSettingChangeSet Information for updating the current user's settings
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<UserSetting>
		*/
		public async System.Threading.Tasks.Task<UserSetting> UpdateUserSettingAsync(UserSettingChangeSet userSettingChangeSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/userSetting/";
			string pathParameter = null;
			byte[] bodyParameter = userSettingChangeSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false, cancellationToken).ConfigureAwait(false);
			return GetUserSetting(result);
		}

		/**
		* Gets history event data for a record.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	historySelectSet Specify record type and record UUID of the record you want to get history events for. Request interactive data (e.g. messages) by setting the requestInteractive flag
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<HistoryEvents>
		*/
		public async System.Threading.Tasks.Task<HistoryEvents> GetHistoryEventsAsync(HistorySelectSet historySelectSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/history/";
			string pathParameter = null;
			byte[] bodyParameter = historySelectSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetHistoryEvents(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<CreditTransactionCostCalculation>
		*/
		public async System.Threading.Tasks.Task<CreditTransactionCostCalculation> GetCreditBalanceCostCalculationAsync(string brandUuid, CreditBalanceChangeSet creditBalanceChangeSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/brands/:id/creditBalanceCostCalculation/";
			string pathParameter = brandUuid;
			byte[] bodyParameter = creditBalanceChangeSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetCreditTransactionCostCalculation(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<CreditTransactions>
		*/
		public async System.Threading.Tasks.Task<CreditTransactions> UpdateCreditBalanceAsync(string brandUuid, CreditBalanceChangeSet creditBalanceChangeSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/brands/:id/creditBalance/";
			string pathParameter = brandUuid;
			byte[] bodyParameter = creditBalanceChangeSet.ToByteArray();
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetCreditTransactions(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		*/
		public async System.Threading.Tasks.Task SendContactFormAsync(string brandUuid, ContactFormSendSet contactFormSendSet, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/brands/:id/sendContactForm/";
			string pathParameter = brandUuid;
			byte[] bodyParameter = contactFormSendSet.ToByteArray();
			await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, true, cancellationToken).ConfigureAwait(false);
		}

		/**
		* Gets all notifications for a brand.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	brandUuid The UUID of the brand entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<Notifications>
		*/
		public async System.Threading.Tasks.Task<Notifications> GetNotificationsForBrandAsync(string brandUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/brands/:id/notifications/";
			string pathParameter = brandUuid;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false, cancellationToken).ConfigureAwait(false);
			return GetNotifications(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ExternalContentProviderSetup>
		*/
		public async System.Threading.Tasks.Task<ExternalContentProviderSetup> SetupExternalContentProviderAsync(string brandUuid, ExternalContentProviderSetupSet externalContentProviderSetupSet, ExternalContentProvider providerId, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/brands/:id/externalContentProviders/:providerId/setup/";
			string pathParameter = brandUuid;
			byte[] bodyParameter = externalContentProviderSetupSet.ToByteArray();
			apiPath = ReplaceProviderId(apiPath, providerId);
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetExternalContentProviderSetup(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ExternalContentProviderConfiguration>
		*/
		public async System.Threading.Tasks.Task<ExternalContentProviderConfiguration> ConfigureExternalContentProviderAsync(string brandUuid, ExternalContentProviderConfigureSet externalContentProviderConfigureSet, ExternalContentProvider providerId, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/brands/:id/externalContentProviders/:providerId/configure/";
			string pathParameter = brandUuid;
			byte[] bodyParameter = externalContentProviderConfigureSet.ToByteArray();
			apiPath = ReplaceProviderId(apiPath, providerId);
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetExternalContentProviderConfiguration(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ExternalContentProviderConfiguration>
		*/
		public async System.Threading.Tasks.Task<ExternalContentProviderConfiguration> UpdateExternalContentProviderConfigurationAsync(string brandUuid, ExternalContentProviderConfigurationChangeSet externalContentProviderConfigurationChangeSet, ExternalContentProvider providerId, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/brands/:id/externalContentProviders/:providerId/";
			string pathParameter = brandUuid;
			byte[] bodyParameter = externalContentProviderConfigurationChangeSet.ToByteArray();
			apiPath = ReplaceProviderId(apiPath, providerId);
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.PUT, false, cancellationToken).ConfigureAwait(false);
			return GetExternalContentProviderConfiguration(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ExternalContentProviderConfiguration>
		*/
		public async System.Threading.Tasks.Task<ExternalContentProviderConfiguration> RefreshExternalContentProviderConfigurationAsync(string brandUuid, ExternalContentProviderRefreshSet externalContentProviderRefreshSet, ExternalContentProvider providerId, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/brands/:id/externalContentProviders/:providerId/";
			string pathParameter = brandUuid;
			byte[] bodyParameter = externalContentProviderRefreshSet.ToByteArray();
			apiPath = ReplaceProviderId(apiPath, providerId);
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.POST, false, cancellationToken).ConfigureAwait(false);
			return GetExternalContentProviderConfiguration(result);
		}

		/**
		* Gets all external content provider data for a brand.
		*
		* This method does NOT support anonymous invocation.
		*
		* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
		*
		* @param	brandUuid The UUID of the brand entity
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ExternalContentProviderConfigurations>
		*/
		public async System.Threading.Tasks.Task<ExternalContentProviderConfigurations> GetExternalContentProviderConfigurationsAsync(string brandUuid, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/brands/:id/externalContentProviders/";
			string pathParameter = brandUuid;
			byte[] bodyParameter = null;
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false, cancellationToken).ConfigureAwait(false);
			return GetExternalContentProviderConfigurations(result);
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
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		* @return	System.Threading.Tasks.Task<ExternalContentProviderProducts>
		*/
		public async System.Threading.Tasks.Task<ExternalContentProviderProducts> GetExternalContentProviderProductsAsync(string brandUuid, ExternalContentProvider providerId, CancellationToken? cancellationToken = null)
		{
			string apiPath = "/api/v1/brands/:id/externalContentProviders/:providerId/products/";
			string pathParameter = brandUuid;
			byte[] bodyParameter = null;
			apiPath = ReplaceProviderId(apiPath, providerId);
			byte[] result = await ProcessAsync(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, false, cancellationToken).ConfigureAwait(false);
			return GetExternalContentProviderProducts(result);
		}

		/**
		* Used to test a transport error contidion.
		*
		* This method supports anonymous invocation.
		*
		* @param	cancellationToken A cancellation token to cancel the call or NULL
		*/
		public async System.Threading.Tasks.Task TestTransportErrorAsync(CancellationToken? cancellationToken = null)
		{
			string apiPath = "https://path.to.invalid.server.com";
			string pathParameter = null;
			byte[] bodyParameter = null;
			await ProcessAsync(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, ApiClient.Method.GET, true, cancellationToken).ConfigureAwait(false);
		}

    }
}
