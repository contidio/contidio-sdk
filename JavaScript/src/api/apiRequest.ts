import AbstractApiRequest from "./abstractApiRequest";
import ApiClient from "./apiClient";

import Proto from '../proto';
import { Promise } from 'core-js';

export default class ApiRequest extends AbstractApiRequest {

    constructor(client: ApiClient, brandUuid: string) {
        super(client, brandUuid);
    }
    
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
	getLicenseRequest(licenseRequestUuid: string) : Promise<Proto.LicenseRequest>
	{
		let apiPath: string = '/api/v1/licenseRequests/:id/';
		let pathParameter: string = licenseRequestUuid;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', false);
	}

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
	createLicenseRequest(licenseRequestCreateSet: Proto.LicenseRequestCreateSet) : Promise<Proto.LicenseRequest>
	{
		let apiPath: string = '/api/v1/licenseRequests/';
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = licenseRequestCreateSet;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', false);
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
	* @return	Promise<Proto.LicenseRequest>
	*/
	rejectLicenseRequest(licenseRequestUuid: string, licenseRequestRejectSet: Proto.LicenseRequestRejectSet) : Promise<Proto.LicenseRequest>
	{
		let apiPath: string = '/api/v1/licenseRequests/:id/reject/';
		let pathParameter: string = licenseRequestUuid;
		let bodyParameter: Proto.Message = licenseRequestRejectSet;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', false);
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
	* @return	Promise<Proto.LicenseRequest>
	*/
	acceptLicenseRequest(licenseRequestUuid: string, licenseRequestAcceptSet: Proto.LicenseRequestAcceptSet) : Promise<Proto.LicenseRequest>
	{
		let apiPath: string = '/api/v1/licenseRequests/:id/accept/';
		let pathParameter: string = licenseRequestUuid;
		let bodyParameter: Proto.Message = licenseRequestAcceptSet;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', false);
	}

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
	getAccessRequest(accessRequestUuid: string) : Promise<Proto.AccessRequest>
	{
		let apiPath: string = '/api/v1/accessRequests/:id/';
		let pathParameter: string = accessRequestUuid;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', false);
	}

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
	createAccessRequest(accessRequestCreateSet: Proto.AccessRequestCreateSet) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = '/api/v1/accessRequests/';
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = accessRequestCreateSet;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', false);
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
	* @return	Promise<Proto.AccessRequest>
	*/
	rejectAccessRequest(accessRequestUuid: string, accessRequestRejectSet: Proto.AccessRequestRejectSet) : Promise<Proto.AccessRequest>
	{
		let apiPath: string = '/api/v1/accessRequests/:id/reject/';
		let pathParameter: string = accessRequestUuid;
		let bodyParameter: Proto.Message = accessRequestRejectSet;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', false);
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
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	acceptAccessRequest(accessRequestUuid: string, accessRequestAcceptSet: Proto.AccessRequestAcceptSet) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = '/api/v1/accessRequests/:id/accept/';
		let pathParameter: string = accessRequestUuid;
		let bodyParameter: Proto.Message = accessRequestAcceptSet;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', false);
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
	* @return	Promise<Proto.AccessRequests>
	*/
	getAccessRequestsForEndUserGroup(brandUuid: string, endUserGroupUuid: string) : Promise<Proto.AccessRequests>
	{
		let apiPath: string = '/api/v1/brands/:id/endUserGroups/:groupId/accessRequests/';
		let pathParameter: string = brandUuid;
		let bodyParameter: Proto.Message = null;
		apiPath = super.replaceUserGroupUuid(apiPath, endUserGroupUuid);
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', false);
	}

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
	getJoinRequest(joinRequestUuid: string) : Promise<Proto.JoinRequest>
	{
		let apiPath: string = '/api/v1/joinRequests/:id/';
		let pathParameter: string = joinRequestUuid;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', false);
	}

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
	createJoinRequest(joinRequestCreateSet: Proto.JoinRequestCreateSet) : Promise<Proto.JoinRequest>
	{
		let apiPath: string = '/api/v1/joinRequests/';
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = joinRequestCreateSet;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', false);
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
	* @return	Promise<Proto.JoinRequest>
	*/
	rejectJoinRequest(joinRequestUuid: string, joinRequestRejectSet: Proto.JoinRequestRejectSet) : Promise<Proto.JoinRequest>
	{
		let apiPath: string = '/api/v1/joinRequests/:id/reject/';
		let pathParameter: string = joinRequestUuid;
		let bodyParameter: Proto.Message = joinRequestRejectSet;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', false);
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
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	acceptJoinRequest(joinRequestUuid: string, joinRequestAcceptSet: Proto.JoinRequestAcceptSet) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = '/api/v1/joinRequests/:id/accept/';
		let pathParameter: string = joinRequestUuid;
		let bodyParameter: Proto.Message = joinRequestAcceptSet;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', false);
	}

	/**
	* Gets metadata for an publish request.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	publishRequestUuid The UUID of the publish request
	* @return	Promise<Proto.PublishRequest>
	*/
	getPublishRequest(publishRequestUuid: string) : Promise<Proto.PublishRequest>
	{
		let apiPath: string = '/api/v1/publishRequests/:id/';
		let pathParameter: string = publishRequestUuid;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, 'get', false);
	}

	/**
	* Creates an publish request.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	publishRequestCreateSet Information for creating the publish request
	* @return	Promise<Proto.PublishRequest>
	*/
	createPublishRequest(publishRequestCreateSet: Proto.PublishRequestCreateSet) : Promise<Proto.PublishRequest>
	{
		let apiPath: string = '/api/v1/publishRequests/';
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = publishRequestCreateSet;
		return super.process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, 'post', false);
	}

	/**
	* Rejects an publish request.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	publishRequestUuid The UUID of the publish request
	* @param	publishRequestRejectSet Information for rejecting the publish request
	* @return	Promise<Proto.PublishRequest>
	*/
	rejectPublishRequest(publishRequestUuid: string, publishRequestRejectSet: Proto.PublishRequestRejectSet) : Promise<Proto.PublishRequest>
	{
		let apiPath: string = '/api/v1/publishRequests/:id/reject/';
		let pathParameter: string = publishRequestUuid;
		let bodyParameter: Proto.Message = publishRequestRejectSet;
		return super.process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, 'post', false);
	}

	/**
	* Accepts an publish request.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	publishRequestUuid The UUID of the publish request
	* @param	publishRequestAcceptSet Information for accepting the publish request
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	acceptPublishRequest(publishRequestUuid: string, publishRequestAcceptSet: Proto.PublishRequestAcceptSet) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = '/api/v1/publishRequests/:id/accept/';
		let pathParameter: string = publishRequestUuid;
		let bodyParameter: Proto.Message = publishRequestAcceptSet;
		return super.process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, 'post', false);
	}

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
	getPurchaseCreditsRequest(purchaseCreditsRequestUuid: string) : Promise<Proto.PurchaseCreditsRequest>
	{
		let apiPath: string = '/api/v1/purchaseCreditsRequests/:id/';
		let pathParameter: string = purchaseCreditsRequestUuid;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', false);
	}

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
	createPurchaseCreditsRequest(purchaseCreditsRequestCreateSet: Proto.PurchaseCreditsRequestCreateSet) : Promise<Proto.PurchaseCreditsRequest>
	{
		let apiPath: string = '/api/v1/purchaseCreditsRequests/';
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = purchaseCreditsRequestCreateSet;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', false);
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
	* @return	Promise<Proto.PurchaseCreditsRequest>
	*/
	rejectPurchaseCreditsRequest(purchaseCreditsRequestUuid: string, purchaseCreditsRequestRejectSet: Proto.PurchaseCreditsRequestRejectSet) : Promise<Proto.PurchaseCreditsRequest>
	{
		let apiPath: string = '/api/v1/purchaseCreditsRequests/:id/reject/';
		let pathParameter: string = purchaseCreditsRequestUuid;
		let bodyParameter: Proto.Message = purchaseCreditsRequestRejectSet;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', false);
	}

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
	getUpgradePlanRequest(upgradePlanRequestUuid: string) : Promise<Proto.UpgradePlanRequest>
	{
		let apiPath: string = '/api/v1/upgradePlanRequests/:id/';
		let pathParameter: string = upgradePlanRequestUuid;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', false);
	}

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
	createUpgradePlanRequest(upgradePlanRequestCreateSet: Proto.UpgradePlanRequestCreateSet) : Promise<Proto.UpgradePlanRequest>
	{
		let apiPath: string = '/api/v1/upgradePlanRequests/';
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = upgradePlanRequestCreateSet;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', false);
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
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	acceptUpgradePlanRequest(upgradePlanRequestUuid: string, upgradePlanRequestAcceptSet: Proto.UpgradePlanRequestAcceptSet) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = '/api/v1/upgradePlanRequests/:id/accept/';
		let pathParameter: string = upgradePlanRequestUuid;
		let bodyParameter: Proto.Message = upgradePlanRequestAcceptSet;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', false);
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
	* @return	Promise<Proto.UpgradePlanRequest>
	*/
	rejectUpgradePlanRequest(upgradePlanRequestUuid: string, upgradePlanRequestRejectSet: Proto.UpgradePlanRequestRejectSet) : Promise<Proto.UpgradePlanRequest>
	{
		let apiPath: string = '/api/v1/upgradePlanRequests/:id/reject/';
		let pathParameter: string = upgradePlanRequestUuid;
		let bodyParameter: Proto.Message = upgradePlanRequestRejectSet;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', false);
	}

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
	getApprovalRequest(approvalRequestUuid: string) : Promise<Proto.ApprovalRequest>
	{
		let apiPath: string = '/api/v1/approvalRequests/:id/';
		let pathParameter: string = approvalRequestUuid;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', false);
	}

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
	createApprovalRequest(approvalRequestCreateSet: Proto.ApprovalRequestCreateSet) : Promise<Proto.ApprovalRequest>
	{
		let apiPath: string = '/api/v1/approvalRequests/';
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = approvalRequestCreateSet;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', false);
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
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	acceptApprovalRequest(approvalRequestUuid: string, approvalRequestAcceptSet: Proto.ApprovalRequestAcceptSet) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = '/api/v1/approvalRequests/:id/accept/';
		let pathParameter: string = approvalRequestUuid;
		let bodyParameter: Proto.Message = approvalRequestAcceptSet;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', false);
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
	* @return	Promise<Proto.ApprovalRequest>
	*/
	rejectApprovalRequest(approvalRequestUuid: string, approvalRequestRejectSet: Proto.ApprovalRequestRejectSet) : Promise<Proto.ApprovalRequest>
	{
		let apiPath: string = '/api/v1/approvalRequests/:id/reject/';
		let pathParameter: string = approvalRequestUuid;
		let bodyParameter: Proto.Message = approvalRequestRejectSet;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', false);
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
	* @return	Promise<Proto.CollectedEntity>
	*/
	createCollectedEntityInProject(projectUuid: string, collectedEntityCreateSet: Proto.CollectedEntityCreateSet) : Promise<Proto.CollectedEntity>
	{
		let apiPath: string = '/api/v1/projects/:id/collectedEntities/';
		let pathParameter: string = projectUuid;
		let bodyParameter: Proto.Message = collectedEntityCreateSet;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', false);
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
	* @return	Promise<Proto.CollectedEntities>
	*/
	createCollectedEntitiesInProject(projectUuid: string, collectedEntityCreateSets: Proto.CollectedEntityCreateSets) : Promise<Proto.CollectedEntities>
	{
		let apiPath: string = '/api/v1/projects/:id/collectedEntities/bulk/';
		let pathParameter: string = projectUuid;
		let bodyParameter: Proto.Message = collectedEntityCreateSets;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', false);
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
	* @return	Promise<Proto.CollectedEntity>
	*/
	updateCollectedEntityInProject(projectUuid: string, collectedEntityChangeSet: Proto.CollectedEntityChangeSet) : Promise<Proto.CollectedEntity>
	{
		let apiPath: string = '/api/v1/projects/:id/collectedEntities/';
		let pathParameter: string = projectUuid;
		let bodyParameter: Proto.Message = collectedEntityChangeSet;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'put', false);
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
	* @return	Promise<Proto.CollectedEntities>
	*/
	updateCollectedEntitiesInProject(projectUuid: string, collectedEntityChangeSets: Proto.CollectedEntityChangeSets) : Promise<Proto.CollectedEntities>
	{
		let apiPath: string = '/api/v1/projects/:id/collectedEntities/bulk/';
		let pathParameter: string = projectUuid;
		let bodyParameter: Proto.Message = collectedEntityChangeSets;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'put', false);
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
	* @return	Promise<void>
	*/
	deleteCollectedEntityFromProject(projectUuid: string, collectedEntityDeleteSet: Proto.CollectedEntityDeleteSet) : Promise<null>
	{
		let apiPath: string = '/api/v1/projects/:id/collectedEntities/';
		let pathParameter: string = projectUuid;
		let bodyParameter: Proto.Message = collectedEntityDeleteSet;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'delete', false);
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
	* @return	Promise<void>
	*/
	deleteCollectedEntitiesFromProject(projectUuid: string, collectedEntityDeleteSets: Proto.CollectedEntityDeleteSets) : Promise<null>
	{
		let apiPath: string = '/api/v1/projects/:id/collectedEntities/bulk/';
		let pathParameter: string = projectUuid;
		let bodyParameter: Proto.Message = collectedEntityDeleteSets;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'delete', false);
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
	* @return	Promise<Proto.CollectedEntity>
	*/
	copyCollectedEntityFromProjectToShoppingCart(projectUuid: string, collectedEntityCopySet: Proto.CollectedEntityCopySet, shoppingCartUuid: string) : Promise<Proto.CollectedEntity>
	{
		let apiPath: string = '/api/v1/projects/:id/collectedEntities/copyToShoppingCart/:shoppingCartId/';
		let pathParameter: string = projectUuid;
		let bodyParameter: Proto.Message = collectedEntityCopySet;
		apiPath = super.replaceShoppingCartUuid(apiPath, shoppingCartUuid);
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'put', false);
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
	* @return	Promise<Proto.CollectedEntity>
	*/
	copyCollectedEntityFromProjectToCurrentShoppingCart(projectUuid: string, collectedEntityCopySet: Proto.CollectedEntityCopySet) : Promise<Proto.CollectedEntity>
	{
		let apiPath: string = '/api/v1/projects/:id/collectedEntities/copyToShoppingCart/';
		let pathParameter: string = projectUuid;
		let bodyParameter: Proto.Message = collectedEntityCopySet;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'put', false);
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
	* @return	Promise<Proto.CollectedEntities>
	*/
	copyAllCollectedEntitiesFromProjectToShoppingCart(projectUuid: string, shoppingCartUuid: string) : Promise<Proto.CollectedEntities>
	{
		let apiPath: string = '/api/v1/projects/:id/collectedEntities/copyToShoppingCart/:shoppingCartId/bulk/all/';
		let pathParameter: string = projectUuid;
		let bodyParameter: Proto.Message = null;
		apiPath = super.replaceShoppingCartUuid(apiPath, shoppingCartUuid);
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'put', false);
	}

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
	copyAllCollectedEntitiesFromProjectToCurrentShoppingCart(projectUuid: string) : Promise<Proto.CollectedEntities>
	{
		let apiPath: string = '/api/v1/projects/:id/collectedEntities/copyToShoppingCart/all/';
		let pathParameter: string = projectUuid;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'put', false);
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
	* @return	Promise<Proto.CollectedEntities>
	*/
	copyCollectedEntitiesFromProjectToShoppingCart(projectUuid: string, collectedEntityCopySets: Proto.CollectedEntityCopySets, shoppingCartUuid: string) : Promise<Proto.CollectedEntities>
	{
		let apiPath: string = '/api/v1/projects/:id/collectedEntities/copyToShoppingCart/:shoppingCartId/bulk/';
		let pathParameter: string = projectUuid;
		let bodyParameter: Proto.Message = collectedEntityCopySets;
		apiPath = super.replaceShoppingCartUuid(apiPath, shoppingCartUuid);
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'put', false);
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
	* @return	Promise<Proto.CollectedEntities>
	*/
	copyCollectedEntitiesFromProjectToCurrentShoppingCart(projectUuid: string, collectedEntityCopySets: Proto.CollectedEntityCopySets) : Promise<Proto.CollectedEntities>
	{
		let apiPath: string = '/api/v1/projects/:id/collectedEntities/copyToShoppingCart/bulk/';
		let pathParameter: string = projectUuid;
		let bodyParameter: Proto.Message = collectedEntityCopySets;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'put', false);
	}

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
	getAcquiredCollectedEntitiesForProject(projectUuid: string) : Promise<Proto.CollectedEntities>
	{
		let apiPath: string = '/api/v1/projects/:id/acquiredCollectedEntities/';
		let pathParameter: string = projectUuid;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', false);
	}

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
	getNotAcquiredCollectedEntitiesForProject(projectUuid: string) : Promise<Proto.CollectedEntities>
	{
		let apiPath: string = '/api/v1/projects/:id/notAcquiredCollectedEntities/';
		let pathParameter: string = projectUuid;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', false);
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
	* @return	Promise<Proto.CollectedEntity>
	*/
	moveCollectedEntityFromShoppingCartToProject(shoppingCartUuid: string, collectedEntityMoveSet: Proto.CollectedEntityMoveSet, projectUuid: string) : Promise<Proto.CollectedEntity>
	{
		let apiPath: string = '/api/v1/shoppingCarts/:id/moveToProject/:projectId/';
		let pathParameter: string = shoppingCartUuid;
		let bodyParameter: Proto.Message = collectedEntityMoveSet;
		apiPath = super.replaceProjectUuid(apiPath, projectUuid);
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'put', false);
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
	* @return	Promise<Proto.CollectedEntity>
	*/
	moveCollectedEntityFromCurrentShoppingCartToProject(collectedEntityMoveSet: Proto.CollectedEntityMoveSet, projectUuid: string) : Promise<Proto.CollectedEntity>
	{
		let apiPath: string = '/api/v1/shoppingCarts/moveToProject/:projectId/';
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = collectedEntityMoveSet;
		apiPath = super.replaceProjectUuid(apiPath, projectUuid);
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'put', false);
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
	* @return	Promise<Proto.CollectedEntities>
	*/
	moveCollectedEntitiesFromShoppingCartToProject(shoppingCartUuid: string, collectedEntityMoveSets: Proto.CollectedEntityMoveSets, projectUuid: string) : Promise<Proto.CollectedEntities>
	{
		let apiPath: string = '/api/v1/shoppingCarts/:id/moveToProject/:projectId/bulk/';
		let pathParameter: string = shoppingCartUuid;
		let bodyParameter: Proto.Message = collectedEntityMoveSets;
		apiPath = super.replaceProjectUuid(apiPath, projectUuid);
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'put', false);
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
	* @return	Promise<Proto.CollectedEntities>
	*/
	moveCollectedEntitiesFromCurrentShoppingCartToProject(collectedEntityMoveSets: Proto.CollectedEntityMoveSets, projectUuid: string) : Promise<Proto.CollectedEntities>
	{
		let apiPath: string = '/api/v1/shoppingCarts/moveToProject/:projectId/bulk/';
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = collectedEntityMoveSets;
		apiPath = super.replaceProjectUuid(apiPath, projectUuid);
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'put', false);
	}

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
	getCollectedEntitiesForShoppingCart(shoppingCartUuid: string) : Promise<Proto.CollectedEntities>
	{
		let apiPath: string = '/api/v1/shoppingCarts/:id/collectedEntities/';
		let pathParameter: string = shoppingCartUuid;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', false);
	}

	/**
	* Gets all collected entities for the user's shopping cart.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @return	Promise<Proto.CollectedEntities>
	*/
	getCollectedEntitiesForCurrentShoppingCart() : Promise<Proto.CollectedEntities>
	{
		let apiPath: string = '/api/v1/shoppingCarts/collectedEntities/';
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', false);
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
	* @return	Promise<Proto.CollectedEntity>
	*/
	createCollectedEntityInShoppingCart(shoppingCartUuid: string, collectedEntityCreateSet: Proto.CollectedEntityCreateSet) : Promise<Proto.CollectedEntity>
	{
		let apiPath: string = '/api/v1/shoppingCarts/:id/collectedEntities/';
		let pathParameter: string = shoppingCartUuid;
		let bodyParameter: Proto.Message = collectedEntityCreateSet;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', false);
	}

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
	createCollectedEntityInCurrentShoppingCart(collectedEntityCreateSet: Proto.CollectedEntityCreateSet) : Promise<Proto.CollectedEntity>
	{
		let apiPath: string = '/api/v1/shoppingCarts/collectedEntities/';
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = collectedEntityCreateSet;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', false);
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
	* @return	Promise<Proto.CollectedEntities>
	*/
	createCollectedEntitiesInShoppingCart(shoppingCartUuid: string, collectedEntityCreateSets: Proto.CollectedEntityCreateSets) : Promise<Proto.CollectedEntities>
	{
		let apiPath: string = '/api/v1/shoppingCarts/:id/collectedEntities/bulk/';
		let pathParameter: string = shoppingCartUuid;
		let bodyParameter: Proto.Message = collectedEntityCreateSets;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', false);
	}

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
	createCollectedEntitiesInCurrentShoppingCart(collectedEntityCreateSets: Proto.CollectedEntityCreateSets) : Promise<Proto.CollectedEntities>
	{
		let apiPath: string = '/api/v1/shoppingCarts/collectedEntities/bulk/';
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = collectedEntityCreateSets;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', false);
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
	* @return	Promise<Proto.CollectedEntity>
	*/
	updateCollectedEntityInShoppingCart(shoppingCartUuid: string, collectedEntityChangeSet: Proto.CollectedEntityChangeSet) : Promise<Proto.CollectedEntity>
	{
		let apiPath: string = '/api/v1/shoppingCarts/:id/collectedEntities/';
		let pathParameter: string = shoppingCartUuid;
		let bodyParameter: Proto.Message = collectedEntityChangeSet;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'put', false);
	}

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
	updateCollectedEntityInCurrentShoppingCart(collectedEntityChangeSet: Proto.CollectedEntityChangeSet) : Promise<Proto.CollectedEntity>
	{
		let apiPath: string = '/api/v1/shoppingCarts/collectedEntities/';
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = collectedEntityChangeSet;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'put', false);
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
	* @return	Promise<Proto.CollectedEntities>
	*/
	updateCollectedEntitiesInShoppingCart(shoppingCartUuid: string, collectedEntityChangeSets: Proto.CollectedEntityChangeSets) : Promise<Proto.CollectedEntities>
	{
		let apiPath: string = '/api/v1/shoppingCarts/:id/collectedEntities/bulk/';
		let pathParameter: string = shoppingCartUuid;
		let bodyParameter: Proto.Message = collectedEntityChangeSets;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'put', false);
	}

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
	updateCollectedEntitiesInCurrentShoppingCart(collectedEntityChangeSets: Proto.CollectedEntityChangeSets) : Promise<Proto.CollectedEntities>
	{
		let apiPath: string = '/api/v1/shoppingCarts/collectedEntities/bulk/';
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = collectedEntityChangeSets;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'put', false);
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
	* @return	Promise<void>
	*/
	deleteCollectedEntityFromShoppingCart(shoppingCartUuid: string, collectedEntityDeleteSet: Proto.CollectedEntityDeleteSet) : Promise<null>
	{
		let apiPath: string = '/api/v1/shoppingCarts/:id/collectedEntities/';
		let pathParameter: string = shoppingCartUuid;
		let bodyParameter: Proto.Message = collectedEntityDeleteSet;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'delete', false);
	}

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
	deleteCollectedEntityFromCurrentShoppingCart(collectedEntityDeleteSet: Proto.CollectedEntityDeleteSet) : Promise<null>
	{
		let apiPath: string = '/api/v1/shoppingCarts/collectedEntities/';
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = collectedEntityDeleteSet;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'delete', false);
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
	* @return	Promise<void>
	*/
	deleteCollectedEntitiesFromShoppingCart(shoppingCartUuid: string, collectedEntityDeleteSets: Proto.CollectedEntityDeleteSets) : Promise<null>
	{
		let apiPath: string = '/api/v1/shoppingCarts/:id/collectedEntities/bulk/';
		let pathParameter: string = shoppingCartUuid;
		let bodyParameter: Proto.Message = collectedEntityDeleteSets;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'delete', false);
	}

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
	deleteCollectedEntitiesFromCurrentShoppingCart(collectedEntityDeleteSets: Proto.CollectedEntityDeleteSets) : Promise<null>
	{
		let apiPath: string = '/api/v1/shoppingCarts/collectedEntities/bulk/';
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = collectedEntityDeleteSets;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'delete', false);
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
	* @return	Promise<Proto.CreditTransaction>
	*/
	getCreditTransactionForBrand(brandUuid: string, creditTransactionUuid: string) : Promise<Proto.CreditTransaction>
	{
		let apiPath: string = '/api/v1/brands/:id/creditTransactions/:creditTransactionId/';
		let pathParameter: string = brandUuid;
		let bodyParameter: Proto.Message = null;
		apiPath = super.replaceCreditTransactionUuid(apiPath, creditTransactionUuid);
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', false);
	}

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
	getCreditTransactionsForBrand(brandUuid: string) : Promise<Proto.CreditTransactions>
	{
		let apiPath: string = '/api/v1/brands/:id/creditTransactions/';
		let pathParameter: string = brandUuid;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', false);
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
	* @return	Promise<Proto.CreditTransactions>
	*/
	getSubCreditTransactionsForBrandCreditTransaction(brandUuid: string, parentCreditTransactionUuid: string) : Promise<Proto.CreditTransactions>
	{
		let apiPath: string = '/api/v1/brands/:id/creditTransactions/:creditTransactionId/childs/';
		let pathParameter: string = brandUuid;
		let bodyParameter: Proto.Message = null;
		apiPath = super.replaceCreditTransactionUuid(apiPath, parentCreditTransactionUuid);
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', false);
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
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	createBrandCreditTransactionDownloadTask(brandUuid: string, creditTransactionCreateDownloadTaskSet: Proto.CreditTransactionCreateDownloadTaskSet) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = '/api/v1/brands/:id/creditTransactions/createDownloadTask/';
		let pathParameter: string = brandUuid;
		let bodyParameter: Proto.Message = creditTransactionCreateDownloadTaskSet;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', false);
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
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	createBrandCreditTransactionDownloadTaskForCreditTransaction(brandUuid: string, creditTransactionCreateDownloadTaskSet: Proto.CreditTransactionCreateDownloadTaskSet, creditTransactionUuid: string) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = '/api/v1/brands/:id/creditTransactions/:creditTransactionId/createDownloadTask/';
		let pathParameter: string = brandUuid;
		let bodyParameter: Proto.Message = creditTransactionCreateDownloadTaskSet;
		apiPath = super.replaceCreditTransactionUuid(apiPath, creditTransactionUuid);
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', false);
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
	* @return	Promise<Proto.Entity>
	*/
	getEntity(entityType: Proto.EntityType, entityUuid: string) : Promise<Proto.Entity>
	{
		let apiPath: string = super.getUuidApiPath(entityType);
		let pathParameter: string = entityUuid;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', true);
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
	* @return	Promise<Proto.Entities>
	*/
	getChildEntities(entityType: Proto.EntityType, entityUuid: string) : Promise<Proto.Entities>
	{
		let apiPath: string = super.getChildsApiPath(entityType);
		let pathParameter: string = entityUuid;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', true);
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
	* @return	Promise<Proto.Entities>
	*/
	getChildEntitiesPost(entityType: Proto.EntityType, entityUuid: string, queryData: Proto.QueryData) : Promise<Proto.Entities>
	{
		let apiPath: string = super.getChildsApiPath(entityType);
		let pathParameter: string = entityUuid;
		let bodyParameter: Proto.Message = queryData;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', true);
	}

	/**
	* Creates a new entity with given type.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityType The type of the entity
	* @param	entityChangeSet Information for creating or updating an entity
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	createEntity(entityType: Proto.EntityType, entityChangeSet: Proto.EntityChangeSet) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = super.getNonUuidApiPath(entityType);
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = entityChangeSet;
		return super.process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, 'post', false);
	}

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
	createEntityWithBinaries(entityType: Proto.EntityType, entityChangeSet: Proto.EntityChangeSet, binaries: File[]) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = super.getNonUuidApiPath(entityType);
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = entityChangeSet;
		return super.process(true, ApiClient.ENDPOINT_CW, apiPath, pathParameter, bodyParameter, binaries, 'post', false);
	}

	/**
	* Creates a bulk of new entities with given type.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityType The type of the entity
	* @param	entityChangeSets Information for creating or updating a bulk of entities
	* @return	Promise<Proto.ServerTaskResponses>
	*/
	createEntities(entityType: Proto.EntityType, entityChangeSets: Proto.EntityChangeSets) : Promise<Proto.ServerTaskResponses>
	{
		let apiPath: string = super.getMultiApiPath(entityType);
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = entityChangeSets;
		return super.process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, 'post', false);
	}

	/**
	* Creates a bulk of new entities with mixed type.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityChangeSets Information for creating or updating a bulk of entities
	* @return	Promise<Proto.ServerTaskResponses>
	*/
	createEntitiesMixed(entityChangeSets: Proto.EntityChangeSets) : Promise<Proto.ServerTaskResponses>
	{
		let apiPath: string = '/api/v1/entities/';
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = entityChangeSets;
		return super.process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, 'post', false);
	}

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
	updateEntity(entityType: Proto.EntityType, entityUuid: string, entityChangeSet: Proto.EntityChangeSet) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = super.getUuidApiPath(entityType);
		let pathParameter: string = entityUuid;
		let bodyParameter: Proto.Message = entityChangeSet;
		return super.process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, 'put', false);
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
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	updateEntityWithBinaries(entityType: Proto.EntityType, entityUuid: string, entityChangeSet: Proto.EntityChangeSet, binaries: File[]) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = super.getUuidApiPath(entityType);
		let pathParameter: string = entityUuid;
		let bodyParameter: Proto.Message = entityChangeSet;
		return super.process(true, ApiClient.ENDPOINT_CW, apiPath, pathParameter, bodyParameter, binaries, 'put', false);
	}

	/**
	* Updates a bulk of entities with given type.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityType The type of the entity
	* @param	entityChangeSets Information for creating or updating a bulk of entities
	* @return	Promise<Proto.ServerTaskResponses>
	*/
	updateEntities(entityType: Proto.EntityType, entityChangeSets: Proto.EntityChangeSets) : Promise<Proto.ServerTaskResponses>
	{
		let apiPath: string = super.getMultiApiPath(entityType);
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = entityChangeSets;
		return super.process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, 'put', false);
	}

	/**
	* Updates a bulk of new entities with mixed type.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityChangeSets Information for creating or updating a bulk of entities
	* @return	Promise<Proto.ServerTaskResponses>
	*/
	updateEntitiesMixed(entityChangeSets: Proto.EntityChangeSets) : Promise<Proto.ServerTaskResponses>
	{
		let apiPath: string = '/api/v1/entities/';
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = entityChangeSets;
		return super.process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, 'put', false);
	}

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
	deleteEntity(entityType: Proto.EntityType, entityUuid: string, entityDeleteSet: Proto.EntityDeleteSet) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = super.getUuidApiPath(entityType);
		let pathParameter: string = entityUuid;
		let bodyParameter: Proto.Message = entityDeleteSet;
		return super.process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, 'delete', false);
	}

	/**
	* Deletes a bulk of entities with given type.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityType The type of the entity
	* @param	entityDeleteSets Information for deleting a bulk of entities
	* @return	Promise<Proto.ServerTaskResponses>
	*/
	deleteEntities(entityType: Proto.EntityType, entityDeleteSets: Proto.EntityDeleteSets) : Promise<Proto.ServerTaskResponses>
	{
		let apiPath: string = super.getMultiApiPath(entityType);
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = entityDeleteSets;
		return super.process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, 'delete', false);
	}

	/**
	* Gets a list of all brands.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @return	Promise<Proto.Entities>
	*/
	getAllBrands() : Promise<Proto.Entities>
	{
		let apiPath: string = '/api/v1/brands/';
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', true);
	}

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
	getAllBrandsPost(queryData: Proto.QueryData) : Promise<Proto.Entities>
	{
		let apiPath: string = '/api/v1/brands/';
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = queryData;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', true);
	}

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
	getBrand(brandUuid: string) : Promise<Proto.Entity>
	{
		let apiPath: string = '/api/v1/brands/:id/';
		let pathParameter: string = brandUuid;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', true);
	}

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
	getBrandBySubdomain(brandSubdomain: string) : Promise<Proto.Entity>
	{
		let apiPath: string = '/api/v1/brands/bySubdomain/:id/';
		let pathParameter: string = brandSubdomain;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', true);
	}

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
	getBrandChildEntities(brandUuid: string) : Promise<Proto.Entities>
	{
		let apiPath: string = '/api/v1/brands/:id/childs/';
		let pathParameter: string = brandUuid;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', true);
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
	* @return	Promise<Proto.Entities>
	*/
	getBrandChildEntitiesPost(brandUuid: string, queryData: Proto.QueryData) : Promise<Proto.Entities>
	{
		let apiPath: string = '/api/v1/brands/:id/childs/';
		let pathParameter: string = brandUuid;
		let bodyParameter: Proto.Message = queryData;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', true);
	}

	/**
	* Creates a new brand entity.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityChangeSet Information for creating or updating an entity
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	createBrand(entityChangeSet: Proto.EntityChangeSet) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = '/api/v1/brands/';
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = entityChangeSet;
		return super.process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, 'post', false);
	}

	/**
	* Creates a new brand entity, and uploads binaries that will be attached to the brand entity.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityChangeSet Information for creating or updating an entity
	* @param	binaries List of binaries for upload. Please note that in entity metadata you have to give the metadata for the binaries you upload
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	createBrandWithBinaries(entityChangeSet: Proto.EntityChangeSet, binaries: File[]) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = '/api/v1/brands/';
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = entityChangeSet;
		return super.process(true, ApiClient.ENDPOINT_CW, apiPath, pathParameter, bodyParameter, binaries, 'post', false);
	}

	/**
	* Updates an brand entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	brandUuid The UUID of the brand entity
	* @param	entityChangeSet Information for creating or updating an entity
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	updateBrand(brandUuid: string, entityChangeSet: Proto.EntityChangeSet) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = '/api/v1/brands/:id/';
		let pathParameter: string = brandUuid;
		let bodyParameter: Proto.Message = entityChangeSet;
		return super.process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, 'put', false);
	}

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
	updateBrandWithBinaries(entityUuid: string, entityChangeSet: Proto.EntityChangeSet, binaries: File[]) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = '/api/v1/brands/:id/';
		let pathParameter: string = entityUuid;
		let bodyParameter: Proto.Message = entityChangeSet;
		return super.process(true, ApiClient.ENDPOINT_CW, apiPath, pathParameter, bodyParameter, binaries, 'put', false);
	}

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
	getTrash(trashUuid: string) : Promise<Proto.Entity>
	{
		let apiPath: string = '/api/v1/trash/:id/';
		let pathParameter: string = trashUuid;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', false);
	}

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
	getTrashChildEntities(trashUuid: string) : Promise<Proto.Entities>
	{
		let apiPath: string = '/api/v1/trash/:id/childs/';
		let pathParameter: string = trashUuid;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', false);
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
	* @return	Promise<Proto.Entities>
	*/
	getTrashChildEntitiesPost(trashUuid: string, queryData: Proto.QueryData) : Promise<Proto.Entities>
	{
		let apiPath: string = '/api/v1/trash/:id/childs/';
		let pathParameter: string = trashUuid;
		let bodyParameter: Proto.Message = queryData;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', false);
	}

	/**
	* Restores an entity from the trash to its original location.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	trashUuid The UUID of the trash entity
	* @param	entityRestoreSet Information for restoring an entity
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	restoreEntity(trashUuid: string, entityRestoreSet: Proto.EntityRestoreSet) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = '/api/v1/trash/:id/';
		let pathParameter: string = trashUuid;
		let bodyParameter: Proto.Message = entityRestoreSet;
		return super.process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, 'post', false);
	}

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
	getFolder(folderUuid: string) : Promise<Proto.Entity>
	{
		let apiPath: string = '/api/v1/folders/:id/';
		let pathParameter: string = folderUuid;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', true);
	}

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
	getFolderChildEntities(folderUuid: string) : Promise<Proto.Entities>
	{
		let apiPath: string = '/api/v1/folders/:id/childs/';
		let pathParameter: string = folderUuid;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', true);
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
	* @return	Promise<Proto.Entities>
	*/
	getFolderChildEntitiesPost(folderUuid: string, queryData: Proto.QueryData) : Promise<Proto.Entities>
	{
		let apiPath: string = '/api/v1/folders/:id/childs/';
		let pathParameter: string = folderUuid;
		let bodyParameter: Proto.Message = queryData;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', true);
	}

	/**
	* Creates a new folder entity.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityChangeSet Information for creating or updating an entity
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	createFolder(entityChangeSet: Proto.EntityChangeSet) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = '/api/v1/folders/';
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = entityChangeSet;
		return super.process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, 'post', false);
	}

	/**
	* Creates a new folder entity, and uploads binaries that will be attached to the folder entity.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityChangeSet Information for creating or updating an entity
	* @param	binaries List of binaries for upload. Please note that in entity metadata you have to give the metadata for the binaries you upload
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	createFolderWithBinaries(entityChangeSet: Proto.EntityChangeSet, binaries: File[]) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = '/api/v1/folders/';
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = entityChangeSet;
		return super.process(true, ApiClient.ENDPOINT_CW, apiPath, pathParameter, bodyParameter, binaries, 'post', false);
	}

	/**
	* Updates an folder entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	folderUuid The UUID of the folder entity
	* @param	entityChangeSet Information for creating or updating an entity
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	updateFolder(folderUuid: string, entityChangeSet: Proto.EntityChangeSet) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = '/api/v1/folders/:id/';
		let pathParameter: string = folderUuid;
		let bodyParameter: Proto.Message = entityChangeSet;
		return super.process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, 'put', false);
	}

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
	updateFolderWithBinaries(entityUuid: string, entityChangeSet: Proto.EntityChangeSet, binaries: File[]) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = '/api/v1/folders/:id/';
		let pathParameter: string = entityUuid;
		let bodyParameter: Proto.Message = entityChangeSet;
		return super.process(true, ApiClient.ENDPOINT_CW, apiPath, pathParameter, bodyParameter, binaries, 'put', false);
	}

	/**
	* Deletes an folder entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	folderUuid The UUID of the folder entity
	* @param	entityDeleteSet Information for deleting an entity
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	deleteFolder(folderUuid: string, entityDeleteSet: Proto.EntityDeleteSet) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = '/api/v1/folders/:id/';
		let pathParameter: string = folderUuid;
		let bodyParameter: Proto.Message = entityDeleteSet;
		return super.process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, 'delete', false);
	}

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
	getAsset(assetUuid: string) : Promise<Proto.Entity>
	{
		let apiPath: string = '/api/v1/assets/:id/';
		let pathParameter: string = assetUuid;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', true);
	}

	/**
	* Creates a new asset entity.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityChangeSet Information for creating or updating an entity
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	createAsset(entityChangeSet: Proto.EntityChangeSet) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = '/api/v1/assets/';
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = entityChangeSet;
		return super.process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, 'post', false);
	}

	/**
	* Creates a new asset entity, and uploads binaries that will be attached to the asset entity.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityChangeSet Information for creating or updating an entity
	* @param	binaries List of binaries for upload. Please note that in entity metadata you have to give the metadata for the binaries you upload
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	createAssetWithBinaries(entityChangeSet: Proto.EntityChangeSet, binaries: File[]) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = '/api/v1/assets/';
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = entityChangeSet;
		return super.process(true, ApiClient.ENDPOINT_CW, apiPath, pathParameter, bodyParameter, binaries, 'post', false);
	}

	/**
	* Updates an asset entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	assetUuid The UUID of the asset entity
	* @param	entityChangeSet Information for creating or updating an entity
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	updateAsset(assetUuid: string, entityChangeSet: Proto.EntityChangeSet) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = '/api/v1/assets/:id/';
		let pathParameter: string = assetUuid;
		let bodyParameter: Proto.Message = entityChangeSet;
		return super.process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, 'put', false);
	}

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
	updateAssetWithBinaries(entityUuid: string, entityChangeSet: Proto.EntityChangeSet, binaries: File[]) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = '/api/v1/assets/:id/';
		let pathParameter: string = entityUuid;
		let bodyParameter: Proto.Message = entityChangeSet;
		return super.process(true, ApiClient.ENDPOINT_CW, apiPath, pathParameter, bodyParameter, binaries, 'put', false);
	}

	/**
	* Deletes an asset entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	assetUuid The UUID of the asset entity
	* @param	entityDeleteSet Information for deleting an entity
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	deleteAsset(assetUuid: string, entityDeleteSet: Proto.EntityDeleteSet) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = '/api/v1/assets/:id/';
		let pathParameter: string = assetUuid;
		let bodyParameter: Proto.Message = entityDeleteSet;
		return super.process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, 'delete', false);
	}

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
	getJobs(jobsUuid: string) : Promise<Proto.Entity>
	{
		let apiPath: string = '/api/v1/_jobs/:id/';
		let pathParameter: string = jobsUuid;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', true);
	}

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
	getJobsChildEntities(jobsUuid: string) : Promise<Proto.Entities>
	{
		let apiPath: string = '/api/v1/_jobs/:id/childs/';
		let pathParameter: string = jobsUuid;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', true);
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
	* @return	Promise<Proto.Entities>
	*/
	getJobsChildEntitiesPost(jobsUuid: string, queryData: Proto.QueryData) : Promise<Proto.Entities>
	{
		let apiPath: string = '/api/v1/_jobs/:id/childs/';
		let pathParameter: string = jobsUuid;
		let bodyParameter: Proto.Message = queryData;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', true);
	}

	/**
	* Updates an jobs entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	jobsUuid The UUID of the jobs entity
	* @param	entityChangeSet Information for creating or updating an entity
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	updateJobs(jobsUuid: string, entityChangeSet: Proto.EntityChangeSet) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = '/api/v1/_jobs/:id/';
		let pathParameter: string = jobsUuid;
		let bodyParameter: Proto.Message = entityChangeSet;
		return super.process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, 'put', false);
	}

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
	updateJobsWithBinaries(entityUuid: string, entityChangeSet: Proto.EntityChangeSet, binaries: File[]) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = '/api/v1/_jobs/:id/';
		let pathParameter: string = entityUuid;
		let bodyParameter: Proto.Message = entityChangeSet;
		return super.process(true, ApiClient.ENDPOINT_CW, apiPath, pathParameter, bodyParameter, binaries, 'put', false);
	}

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
	getJob(jobUuid: string) : Promise<Proto.Entity>
	{
		let apiPath: string = '/api/v1/jobs/:id/';
		let pathParameter: string = jobUuid;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', true);
	}

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
	getJobChildEntities(jobUuid: string) : Promise<Proto.Entities>
	{
		let apiPath: string = '/api/v1/jobs/:id/childs/';
		let pathParameter: string = jobUuid;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', false);
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
	* @return	Promise<Proto.Entities>
	*/
	getJobChildEntitiesPost(jobUuid: string, queryData: Proto.QueryData) : Promise<Proto.Entities>
	{
		let apiPath: string = '/api/v1/jobs/:id/childs/';
		let pathParameter: string = jobUuid;
		let bodyParameter: Proto.Message = queryData;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', false);
	}

	/**
	* Creates a new job entity.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityChangeSet Information for creating or updating an entity
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	createJob(entityChangeSet: Proto.EntityChangeSet) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = '/api/v1/jobs/';
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = entityChangeSet;
		return super.process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, 'post', false);
	}

	/**
	* Creates a new job entity, and uploads binaries that will be attached to the job entity.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityChangeSet Information for creating or updating an entity
	* @param	binaries List of binaries for upload. Please note that in entity metadata you have to give the metadata for the binaries you upload
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	createJobWithBinaries(entityChangeSet: Proto.EntityChangeSet, binaries: File[]) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = '/api/v1/jobs/';
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = entityChangeSet;
		return super.process(true, ApiClient.ENDPOINT_CW, apiPath, pathParameter, bodyParameter, binaries, 'post', false);
	}

	/**
	* Updates an job entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	jobUuid The UUID of the job entity
	* @param	entityChangeSet Information for creating or updating an entity
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	updateJob(jobUuid: string, entityChangeSet: Proto.EntityChangeSet) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = '/api/v1/jobs/:id/';
		let pathParameter: string = jobUuid;
		let bodyParameter: Proto.Message = entityChangeSet;
		return super.process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, 'put', false);
	}

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
	updateJobWithBinaries(entityUuid: string, entityChangeSet: Proto.EntityChangeSet, binaries: File[]) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = '/api/v1/jobs/:id/';
		let pathParameter: string = entityUuid;
		let bodyParameter: Proto.Message = entityChangeSet;
		return super.process(true, ApiClient.ENDPOINT_CW, apiPath, pathParameter, bodyParameter, binaries, 'put', false);
	}

	/**
	* Deletes an job entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	jobUuid The UUID of the job entity
	* @param	entityDeleteSet Information for deleting an entity
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	deleteJob(jobUuid: string, entityDeleteSet: Proto.EntityDeleteSet) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = '/api/v1/jobs/:id/';
		let pathParameter: string = jobUuid;
		let bodyParameter: Proto.Message = entityDeleteSet;
		return super.process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, 'delete', false);
	}

	/**
	* Applies for participation in a job with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	jobUuid The UUID of the job entity
	* @param	jobApplicationSet Information for applying for participating in a job
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	applyForJob(jobUuid: string, jobApplicationSet: Proto.JobApplicationSet) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = '/api/v1/jobs/:id/apply/';
		let pathParameter: string = jobUuid;
		let bodyParameter: Proto.Message = jobApplicationSet;
		return super.process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, 'post', false);
	}

	/**
	* Participates in a job with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	jobUuid The UUID of the job entity
	* @param	jobParticipationSet Information for participating in a job
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	participateInJob(jobUuid: string, jobParticipationSet: Proto.JobParticipationSet) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = '/api/v1/jobs/:id/participate/';
		let pathParameter: string = jobUuid;
		let bodyParameter: Proto.Message = jobParticipationSet;
		return super.process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, 'post', false);
	}

	/**
	* Closes a job with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	jobUuid The UUID of the job entity
	* @param	jobCloseSet Information for closing a job
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	closeJob(jobUuid: string, jobCloseSet: Proto.JobCloseSet) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = '/api/v1/jobs/:id/close/';
		let pathParameter: string = jobUuid;
		let bodyParameter: Proto.Message = jobCloseSet;
		return super.process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, 'post', false);
	}

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
	getParticipations(participationsUuid: string) : Promise<Proto.Entity>
	{
		let apiPath: string = '/api/v1/_participations/:id/';
		let pathParameter: string = participationsUuid;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', false);
	}

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
	getParticipationsChildEntities(participationsUuid: string) : Promise<Proto.Entities>
	{
		let apiPath: string = '/api/v1/_participations/:id/childs/';
		let pathParameter: string = participationsUuid;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', false);
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
	* @return	Promise<Proto.Entities>
	*/
	getParticipationsChildEntitiesPost(participationsUuid: string, queryData: Proto.QueryData) : Promise<Proto.Entities>
	{
		let apiPath: string = '/api/v1/_participations/:id/childs/';
		let pathParameter: string = participationsUuid;
		let bodyParameter: Proto.Message = queryData;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', false);
	}

	/**
	* Updates an participations entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	participationsUuid The UUID of the participations entity
	* @param	entityChangeSet Information for creating or updating an entity
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	updateParticipations(participationsUuid: string, entityChangeSet: Proto.EntityChangeSet) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = '/api/v1/_participations/:id/';
		let pathParameter: string = participationsUuid;
		let bodyParameter: Proto.Message = entityChangeSet;
		return super.process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, 'put', false);
	}

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
	getParticipation(participationUuid: string) : Promise<Proto.Entity>
	{
		let apiPath: string = '/api/v1/participations/:id/';
		let pathParameter: string = participationUuid;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', false);
	}

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
	getParticipationChildEntities(participationUuid: string) : Promise<Proto.Entities>
	{
		let apiPath: string = '/api/v1/participations/:id/childs/';
		let pathParameter: string = participationUuid;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', false);
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
	* @return	Promise<Proto.Entities>
	*/
	getParticipationChildEntitiesPost(participationUuid: string, queryData: Proto.QueryData) : Promise<Proto.Entities>
	{
		let apiPath: string = '/api/v1/participations/:id/childs/';
		let pathParameter: string = participationUuid;
		let bodyParameter: Proto.Message = queryData;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', false);
	}

	/**
	* Updates an participation entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	participationUuid The UUID of the participation entity
	* @param	entityChangeSet Information for creating or updating an entity
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	updateParticipation(participationUuid: string, entityChangeSet: Proto.EntityChangeSet) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = '/api/v1/participations/:id/';
		let pathParameter: string = participationUuid;
		let bodyParameter: Proto.Message = entityChangeSet;
		return super.process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, 'put', false);
	}

	/**
	* Deletes an participation entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	participationUuid The UUID of the participation entity
	* @param	entityDeleteSet Information for deleting an entity
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	deleteParticipation(participationUuid: string, entityDeleteSet: Proto.EntityDeleteSet) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = '/api/v1/participations/:id/';
		let pathParameter: string = participationUuid;
		let bodyParameter: Proto.Message = entityDeleteSet;
		return super.process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, 'delete', false);
	}

	/**
	* Submits an participation entity with given UUID to the job issuer.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	participationUuid The UUID of the participation entity
	* @param	jobParticipationSubmitSet Information for submitting an participation entity to the job issuer
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	submitParticipation(participationUuid: string, jobParticipationSubmitSet: Proto.JobParticipationSubmitSet) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = '/api/v1/participations/:id/submit/';
		let pathParameter: string = participationUuid;
		let bodyParameter: Proto.Message = jobParticipationSubmitSet;
		return super.process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, 'post', false);
	}

	/**
	* Rejects an participation entity with given UUID from the job issuer back to the participant.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	participationUuid The UUID of the participation entity
	* @param	jobParticipationRejectSet Information for rejecting an participation entity from the job issuer back to the participant
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	rejectParticipation(participationUuid: string, jobParticipationRejectSet: Proto.JobParticipationRejectSet) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = '/api/v1/participations/:id/reject/';
		let pathParameter: string = participationUuid;
		let bodyParameter: Proto.Message = jobParticipationRejectSet;
		return super.process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, 'post', false);
	}

	/**
	* Accepting an participation entity with given UUID for participation in the job.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	participationUuid The UUID of the participation entity
	* @param	jobApplicationAcceptSet Information for accepting an participation entity for participation in the job
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	acceptJobApplication(participationUuid: string, jobApplicationAcceptSet: Proto.JobApplicationAcceptSet) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = '/api/v1/participations/:id/accept/';
		let pathParameter: string = participationUuid;
		let bodyParameter: Proto.Message = jobApplicationAcceptSet;
		return super.process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, 'post', false);
	}

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
	getProjects(projectsUuid: string) : Promise<Proto.Entity>
	{
		let apiPath: string = '/api/v1/_projects/:id/';
		let pathParameter: string = projectsUuid;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', false);
	}

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
	getProjectsChildEntities(projectsUuid: string) : Promise<Proto.Entities>
	{
		let apiPath: string = '/api/v1/_projects/:id/childs/';
		let pathParameter: string = projectsUuid;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', false);
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
	* @return	Promise<Proto.Entities>
	*/
	getProjectsChildEntitiesPost(projectsUuid: string, queryData: Proto.QueryData) : Promise<Proto.Entities>
	{
		let apiPath: string = '/api/v1/_projects/:id/childs/';
		let pathParameter: string = projectsUuid;
		let bodyParameter: Proto.Message = queryData;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', false);
	}

	/**
	* Updates an projects entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	projectsUuid The UUID of the projects entity
	* @param	entityChangeSet Information for creating or updating an entity
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	updateProjects(projectsUuid: string, entityChangeSet: Proto.EntityChangeSet) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = '/api/v1/_projects/:id/';
		let pathParameter: string = projectsUuid;
		let bodyParameter: Proto.Message = entityChangeSet;
		return super.process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, 'put', false);
	}

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
	getProject(projectUuid: string) : Promise<Proto.Entity>
	{
		let apiPath: string = '/api/v1/projects/:id/';
		let pathParameter: string = projectUuid;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', false);
	}

	/**
	* Creates a new project entity.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityChangeSet Information for creating or updating an entity
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	createProject(entityChangeSet: Proto.EntityChangeSet) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = '/api/v1/projects/';
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = entityChangeSet;
		return super.process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, 'post', false);
	}

	/**
	* Creates a new project entity, and uploads binaries that will be attached to the project entity.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	entityChangeSet Information for creating or updating an entity
	* @param	binaries List of binaries for upload. Please note that in entity metadata you have to give the metadata for the binaries you upload
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	createProjectWithBinaries(entityChangeSet: Proto.EntityChangeSet, binaries: File[]) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = '/api/v1/projects/';
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = entityChangeSet;
		return super.process(true, ApiClient.ENDPOINT_CW, apiPath, pathParameter, bodyParameter, binaries, 'post', false);
	}

	/**
	* Updates an project entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	projectUuid The UUID of the project entity
	* @param	entityChangeSet Information for creating or updating an entity
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	updateProject(projectUuid: string, entityChangeSet: Proto.EntityChangeSet) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = '/api/v1/projects/:id/';
		let pathParameter: string = projectUuid;
		let bodyParameter: Proto.Message = entityChangeSet;
		return super.process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, 'put', false);
	}

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
	updateProjectWithBinaries(entityUuid: string, entityChangeSet: Proto.EntityChangeSet, binaries: File[]) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = '/api/v1/projects/:id/';
		let pathParameter: string = entityUuid;
		let bodyParameter: Proto.Message = entityChangeSet;
		return super.process(true, ApiClient.ENDPOINT_CW, apiPath, pathParameter, bodyParameter, binaries, 'put', false);
	}

	/**
	* Deletes an project entity with given UUID.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	projectUuid The UUID of the project entity
	* @param	entityDeleteSet Information for deleting an entity
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	deleteProject(projectUuid: string, entityDeleteSet: Proto.EntityDeleteSet) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = '/api/v1/projects/:id/';
		let pathParameter: string = projectUuid;
		let bodyParameter: Proto.Message = entityDeleteSet;
		return super.process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, 'delete', false);
	}

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
	getCollectableProjectsForBrand(brandUuid: string) : Promise<Proto.Entities>
	{
		let apiPath: string = '/api/v1/brands/:id/projects/';
		let pathParameter: string = brandUuid;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', false);
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
	* @return	Promise<Proto.Entities>
	*/
	getCollectableProjectsForBrandPost(brandUuid: string, queryData: Proto.QueryData) : Promise<Proto.Entities>
	{
		let apiPath: string = '/api/v1/brands/:id/projects/';
		let pathParameter: string = brandUuid;
		let bodyParameter: Proto.Message = queryData;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', false);
	}

	/**
	* Searches the complete entity index based on filter criteria. The filter criteria is given through query parameter data.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @return	Promise<Proto.Entities>
	*/
	searchEntities() : Promise<Proto.Entities>
	{
		let apiPath: string = '/api/v1/searchEntities/';
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', true);
	}

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
	searchEntitiesPost(queryData: Proto.QueryData) : Promise<Proto.Entities>
	{
		let apiPath: string = '/api/v1/searchEntities/';
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = queryData;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', true);
	}

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
	searchEntitiesWithinEntity(parentEntityUuid: string) : Promise<Proto.Entities>
	{
		let apiPath: string = '/api/v1/searchEntities/:id/childs/';
		let pathParameter: string = parentEntityUuid;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', true);
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
	* @return	Promise<Proto.Entities>
	*/
	searchEntitiesWithinEntityPost(parentEntityUuid: string, queryData: Proto.QueryData) : Promise<Proto.Entities>
	{
		let apiPath: string = '/api/v1/searchEntities/:id/childs/';
		let pathParameter: string = parentEntityUuid;
		let bodyParameter: Proto.Message = queryData;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', true);
	}

	/**
	* Takes user input and returns a list of matching user groups, users, brands or licenses. The input needs to be given in 'terms' query parameter, the types of entities can be specified in query data as well.
	*
	* This method supports anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @return	Promise<Proto.AutocompletedEntities>
	*/
	searchAutocompletedEntities() : Promise<Proto.AutocompletedEntities>
	{
		let apiPath: string = '/api/v1/searchAutocompletedEntities/';
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', true);
	}

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
	searchAutocompletedEntitiesPost(queryData: Proto.QueryData) : Promise<Proto.AutocompletedEntities>
	{
		let apiPath: string = '/api/v1/searchAutocompletedEntities/';
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = queryData;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', true);
	}

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
	getLicensesForBrand(brandUuid: string) : Promise<Proto.Licenses>
	{
		let apiPath: string = '/api/v1/brands/:id/licenses/';
		let pathParameter: string = brandUuid;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', true);
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
	* @return	Promise<Proto.Licenses>
	*/
	getLicensesForBrandPost(brandUuid: string, queryData: Proto.QueryData) : Promise<Proto.Licenses>
	{
		let apiPath: string = '/api/v1/brands/:id/licenses/';
		let pathParameter: string = brandUuid;
		let bodyParameter: Proto.Message = queryData;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', true);
	}

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
	getShoppingCart(shoppingCartUuid: string) : Promise<Proto.ShoppingCart>
	{
		let apiPath: string = '/api/v1/shoppingCarts/:id/';
		let pathParameter: string = shoppingCartUuid;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', false);
	}

	/**
	* Gets the user's shopping cart.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @return	Promise<Proto.ShoppingCart>
	*/
	getCurrentShoppingCart() : Promise<Proto.ShoppingCart>
	{
		let apiPath: string = '/api/v1/shoppingCarts/';
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', false);
	}

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
	submitShoppingCartToBrand(shoppingCartSubmitToBrandSet: Proto.ShoppingCartSubmitToBrandSet) : Promise<Proto.ShoppingCart>
	{
		let apiPath: string = '/api/v1/shoppingCarts/submitToBrand/';
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = shoppingCartSubmitToBrandSet;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', false);
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
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	acquireShoppingCart(shoppingCartUuid: string, shoppingCartAcquireSet: Proto.ShoppingCartAcquireSet) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = '/api/v1/shoppingCarts/:id/acquire/';
		let pathParameter: string = shoppingCartUuid;
		let bodyParameter: Proto.Message = shoppingCartAcquireSet;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', false);
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
	* @return	Promise<Proto.ShoppingCart>
	*/
	rejectShoppingCartAcquisition(shoppingCartUuid: string, shoppingCartRejectAcquisitionSet: Proto.ShoppingCartRejectAcquisitionSet) : Promise<Proto.ShoppingCart>
	{
		let apiPath: string = '/api/v1/shoppingCarts/:id/rejectAcquisition/';
		let pathParameter: string = shoppingCartUuid;
		let bodyParameter: Proto.Message = shoppingCartRejectAcquisitionSet;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', false);
	}

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
	getTag(tagUuid: string) : Promise<Proto.Tag>
	{
		let apiPath: string = '/api/v1/tags/:id/';
		let pathParameter: string = tagUuid;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', true);
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
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	createAssetDownloadTask(assetUuid: string, assetCreateDownloadTaskSet: Proto.AssetCreateDownloadTaskSet) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = '/api/v1/assets/:id/createDownloadTask/';
		let pathParameter: string = assetUuid;
		let bodyParameter: Proto.Message = assetCreateDownloadTaskSet;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', true);
	}

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
	getUser(userUuid: string) : Promise<Proto.User>
	{
		let apiPath: string = '/api/v1/users/:id/';
		let pathParameter: string = userUuid;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', false);
	}

	/**
	* Gets the current user's information.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @return	Promise<Proto.User>
	*/
	getCurrentUser() : Promise<Proto.User>
	{
		let apiPath: string = '/api/v1/users/';
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', false);
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
	* @return	Promise<Proto.Users>
	*/
	getUsersForEndUserGroup(brandUuid: string, endUserGroupUuid: string) : Promise<Proto.Users>
	{
		let apiPath: string = '/api/v1/brands/:id/endUserGroups/:groupId/users/';
		let pathParameter: string = brandUuid;
		let bodyParameter: Proto.Message = null;
		apiPath = super.replaceUserGroupUuid(apiPath, endUserGroupUuid);
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', false);
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
	* @return	Promise<Proto.Users>
	*/
	getUsersForEndUserGroupPost(brandUuid: string, queryData: Proto.QueryData, endUserGroupUuid: string) : Promise<Proto.Users>
	{
		let apiPath: string = '/api/v1/brands/:id/endUserGroups/:groupId/users/';
		let pathParameter: string = brandUuid;
		let bodyParameter: Proto.Message = queryData;
		apiPath = super.replaceUserGroupUuid(apiPath, endUserGroupUuid);
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', false);
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
	* @return	Promise<Proto.Entities>
	*/
	getBrandsForEndUserGroup(brandUuid: string, endUserGroupUuid: string) : Promise<Proto.Entities>
	{
		let apiPath: string = '/api/v1/brands/:id/endUserGroups/:groupId/brands/';
		let pathParameter: string = brandUuid;
		let bodyParameter: Proto.Message = null;
		apiPath = super.replaceUserGroupUuid(apiPath, endUserGroupUuid);
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', false);
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
	* @return	Promise<Proto.Entities>
	*/
	getBrandsForEndUserGroupPost(brandUuid: string, queryData: Proto.QueryData, endUserGroupUuid: string) : Promise<Proto.Entities>
	{
		let apiPath: string = '/api/v1/brands/:id/endUserGroups/:groupId/brands/';
		let pathParameter: string = brandUuid;
		let bodyParameter: Proto.Message = queryData;
		apiPath = super.replaceUserGroupUuid(apiPath, endUserGroupUuid);
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', false);
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
	* @return	Promise<Proto.Users>
	*/
	getUsersForAdminUserGroup(brandUuid: string, adminUserGroupUuid: string) : Promise<Proto.Users>
	{
		let apiPath: string = '/api/v1/brands/:id/adminUserGroups/:groupId/users/';
		let pathParameter: string = brandUuid;
		let bodyParameter: Proto.Message = null;
		apiPath = super.replaceUserGroupUuid(apiPath, adminUserGroupUuid);
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', false);
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
	* @return	Promise<Proto.Users>
	*/
	getUsersForAdminUserGroupPost(brandUuid: string, queryData: Proto.QueryData, adminUserGroupUuid: string) : Promise<Proto.Users>
	{
		let apiPath: string = '/api/v1/brands/:id/adminUserGroups/:groupId/users/';
		let pathParameter: string = brandUuid;
		let bodyParameter: Proto.Message = queryData;
		apiPath = super.replaceUserGroupUuid(apiPath, adminUserGroupUuid);
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', false);
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
	* @return	Promise<Proto.UserGroup>
	*/
	getEndUserGroup(brandUuid: string, endUserGroupUuid: string) : Promise<Proto.UserGroup>
	{
		let apiPath: string = '/api/v1/brands/:id/endUserGroups/:groupId/';
		let pathParameter: string = brandUuid;
		let bodyParameter: Proto.Message = null;
		apiPath = super.replaceUserGroupUuid(apiPath, endUserGroupUuid);
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', false);
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
	* @return	Promise<Proto.UserGroup>
	*/
	getEndUserGroupRead(brandUuid: string, endUserGroupUuid: string) : Promise<Proto.UserGroup>
	{
		let apiPath: string = '/api/v1/brands/:id/endUserGroups/:groupId/';
		let pathParameter: string = brandUuid;
		let bodyParameter: Proto.Message = null;
		apiPath = super.replaceUserGroupUuid(apiPath, endUserGroupUuid);
		return super.process(true, ApiClient.ENDPOINT_MDR, apiPath, pathParameter, bodyParameter, null, 'get', false);
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
	* @return	Promise<Proto.UserGroup>
	*/
	getAdminUserGroup(brandUuid: string, adminUserGroupUuid: string) : Promise<Proto.UserGroup>
	{
		let apiPath: string = '/api/v1/brands/:id/adminUserGroups/:groupId/';
		let pathParameter: string = brandUuid;
		let bodyParameter: Proto.Message = null;
		apiPath = super.replaceUserGroupUuid(apiPath, adminUserGroupUuid);
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', false);
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
	* @return	Promise<Proto.UserGroup>
	*/
	getAdminUserGroupRead(brandUuid: string, adminUserGroupUuid: string) : Promise<Proto.UserGroup>
	{
		let apiPath: string = '/api/v1/brands/:id/adminUserGroups/:groupId/';
		let pathParameter: string = brandUuid;
		let bodyParameter: Proto.Message = null;
		apiPath = super.replaceUserGroupUuid(apiPath, adminUserGroupUuid);
		return super.process(true, ApiClient.ENDPOINT_MDR, apiPath, pathParameter, bodyParameter, null, 'get', false);
	}

	/**
	* Updates an user.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	userUuid The UUID of the user
	* @param	userChangeSet Information for creating or updating an user within our main identity database
	* @return	Promise<Proto.ServerTaskResponse>
	*/
	updateUser(userUuid: string, userChangeSet: Proto.UserChangeSet) : Promise<Proto.ServerTaskResponse>
	{
		let apiPath: string = '/api/v1/users/:id/';
		let pathParameter: string = userUuid;
		let bodyParameter: Proto.Message = userChangeSet;
		return super.process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, 'put', false);
	}

	/**
	* Reserves an user UUID within our main identity database. Requires extended permissions, please contact us to get more information.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	userReserveSet Information for reserving an user UUID within our main identity database
	* @return	Promise<Proto.User>
	*/
	reserveIdentityUser(userReserveSet: Proto.UserReserveSet) : Promise<Proto.User>
	{
		let apiPath: string = '/api/v1/users/reserve/';
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = userReserveSet;
		return super.process(true, ApiClient.ENDPOINT_ID, apiPath, pathParameter, bodyParameter, null, 'post', false);
	}

	/**
	* Reserves a bulk of user UUIDs within our main identity database. Requires extended permissions, please contact us to get more information.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	userReserveSets Information for reserving a bulk of user UUIDs within our main identity database
	* @return	Promise<Proto.User>
	*/
	reserveIdentityUsers(userReserveSets: Proto.UserReserveSets) : Promise<Proto.User>
	{
		let apiPath: string = '/api/v1/users/reserve/bulk/';
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = userReserveSets;
		return super.process(true, ApiClient.ENDPOINT_ID, apiPath, pathParameter, bodyParameter, null, 'post', false);
	}

	/**
	* Creates an user within our main identity database. Requires extended permissions, please contact us to get more information.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	userChangeSet Information for creating or updating an user within our main identity database
	* @return	Promise<Proto.User>
	*/
	createIdentityUser(userChangeSet: Proto.UserChangeSet) : Promise<Proto.User>
	{
		let apiPath: string = '/api/v1/users/';
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = userChangeSet;
		return super.process(true, ApiClient.ENDPOINT_ID, apiPath, pathParameter, bodyParameter, null, 'post', false);
	}

	/**
	* Creates a bulk of users within our main identity database. Requires extended permissions, please contact us to get more information.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	userChangeSets Information for creating or updating a bulk of users within our main identity database
	* @return	Promise<Proto.Users>
	*/
	createIdentityUsers(userChangeSets: Proto.UserChangeSets) : Promise<Proto.Users>
	{
		let apiPath: string = '/api/v1/users/bulk/';
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = userChangeSets;
		return super.process(true, ApiClient.ENDPOINT_ID, apiPath, pathParameter, bodyParameter, null, 'post', false);
	}

	/**
	* Updates an user within our main identity database. Requires extended permissions, please contact us to get more information.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	userUuid The UUID of the user
	* @param	userChangeSet Information for creating or updating an user within our main identity database
	* @return	Promise<Proto.User>
	*/
	updateIdentityUser(userUuid: string, userChangeSet: Proto.UserChangeSet) : Promise<Proto.User>
	{
		let apiPath: string = '/api/v1/users/:id/';
		let pathParameter: string = userUuid;
		let bodyParameter: Proto.Message = userChangeSet;
		return super.process(true, ApiClient.ENDPOINT_ID, apiPath, pathParameter, bodyParameter, null, 'put', false);
	}

	/**
	* Updates a bulk of users within our main identity database. Requires extended permissions, please contact us to get more information.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	userChangeSets Information for creating or updating a bulk of users within our main identity database
	* @return	Promise<Proto.Users>
	*/
	updateIdentityUsers(userChangeSets: Proto.UserChangeSets) : Promise<Proto.Users>
	{
		let apiPath: string = '/api/v1/users/bulk/';
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = userChangeSets;
		return super.process(true, ApiClient.ENDPOINT_ID, apiPath, pathParameter, bodyParameter, null, 'put', false);
	}

	/**
	* Gets user information for an user with given UUID from our main identity database. Requires extended permissions, please contact us to get more information.
	*
	* This method does NOT support anonymous invocation.
	*
	* @param	userUuid The UUID of the user
	* @return	Promise<Proto.User>
	*/
	getIdentityUser(userUuid: string) : Promise<Proto.User>
	{
		let apiPath: string = '/api/v1/users/:id/';
		let pathParameter: string = userUuid;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_ID, apiPath, pathParameter, bodyParameter, null, 'get', false);
	}

	/**
	* Gets the follow settings for the current user.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @return	Promise<Proto.UserFollowSettings>
	*/
	getUserFollowSettings() : Promise<Proto.UserFollowSettings>
	{
		let apiPath: string = '/api/v1/userFollowSettings/';
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', false);
	}

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
	createUserFollowSetting(userFollowSettingCreateSet: Proto.UserFollowSettingCreateSet) : Promise<Proto.UserFollowSetting>
	{
		let apiPath: string = '/api/v1/userFollowSettings/';
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = userFollowSettingCreateSet;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', false);
	}

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
	deleteUserFollowSetting(userFollowSettingUuid: string) : Promise<null>
	{
		let apiPath: string = '/api/v1/userFollowSettings/:id/';
		let pathParameter: string = userFollowSettingUuid;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'delete', false);
	}

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
	getEndUserGroupsForBrand(brandUuid: string) : Promise<Proto.UserGroups>
	{
		let apiPath: string = '/api/v1/brands/:id/endUserGroups/';
		let pathParameter: string = brandUuid;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', false);
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
	* @return	Promise<Proto.UserGroups>
	*/
	getEndUserGroupsForBrandRead(brandUuid: string) : Promise<Proto.UserGroups>
	{
		let apiPath: string = '/api/v1/brands/:id/endUserGroups/';
		let pathParameter: string = brandUuid;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDR, apiPath, pathParameter, bodyParameter, null, 'get', false);
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
	* @return	Promise<Proto.UserGroups>
	*/
	getEndUserGroupsForBrandPost(brandUuid: string, queryData: Proto.QueryData) : Promise<Proto.UserGroups>
	{
		let apiPath: string = '/api/v1/brands/:id/endUserGroups/';
		let pathParameter: string = brandUuid;
		let bodyParameter: Proto.Message = queryData;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', false);
	}

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
	getAdminUserGroupsForBrand(brandUuid: string) : Promise<Proto.UserGroups>
	{
		let apiPath: string = '/api/v1/brands/:id/adminUserGroups/';
		let pathParameter: string = brandUuid;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', false);
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
	* @return	Promise<Proto.UserGroups>
	*/
	getAdminUserGroupsForBrandRead(brandUuid: string) : Promise<Proto.UserGroups>
	{
		let apiPath: string = '/api/v1/brands/:id/adminUserGroups/';
		let pathParameter: string = brandUuid;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDR, apiPath, pathParameter, bodyParameter, null, 'get', false);
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
	* @return	Promise<Proto.UserGroups>
	*/
	getAdminUserGroupsForBrandPost(brandUuid: string, queryData: Proto.QueryData) : Promise<Proto.UserGroups>
	{
		let apiPath: string = '/api/v1/brands/:id/adminUserGroups/';
		let pathParameter: string = brandUuid;
		let bodyParameter: Proto.Message = queryData;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', false);
	}

	/**
	* Gets the current user's settings.
	*
	* This method does NOT support anonymous invocation.
	*
	* This method works with entity data from our indexing infrastructure, which can be out of date by a few minutes.
	*
	* @return	Promise<Proto.UserSetting>
	*/
	getUserSetting() : Promise<Proto.UserSetting>
	{
		let apiPath: string = '/api/v1/userSetting/';
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', false);
	}

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
	updateUserSetting(userSettingChangeSet: Proto.UserSettingChangeSet) : Promise<Proto.UserSetting>
	{
		let apiPath: string = '/api/v1/userSetting/';
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = userSettingChangeSet;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'put', false);
	}

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
	getHistoryEvents(historySelectSet: Proto.HistorySelectSet) : Promise<Proto.HistoryEvents>
	{
		let apiPath: string = '/api/v1/history/';
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = historySelectSet;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', false);
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
	* @return	Promise<Proto.CreditTransactionCostCalculation>
	*/
	getCreditBalanceCostCalculation(brandUuid: string, creditBalanceChangeSet: Proto.CreditBalanceChangeSet) : Promise<Proto.CreditTransactionCostCalculation>
	{
		let apiPath: string = '/api/v1/brands/:id/creditBalanceCostCalculation/';
		let pathParameter: string = brandUuid;
		let bodyParameter: Proto.Message = creditBalanceChangeSet;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', false);
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
	* @return	Promise<Proto.CreditTransactions>
	*/
	updateCreditBalance(brandUuid: string, creditBalanceChangeSet: Proto.CreditBalanceChangeSet) : Promise<Proto.CreditTransactions>
	{
		let apiPath: string = '/api/v1/brands/:id/creditBalance/';
		let pathParameter: string = brandUuid;
		let bodyParameter: Proto.Message = creditBalanceChangeSet;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', false);
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
	* @return	Promise<void>
	*/
	sendContactForm(brandUuid: string, contactFormSendSet: Proto.ContactFormSendSet) : Promise<null>
	{
		let apiPath: string = '/api/v1/brands/:id/sendContactForm/';
		let pathParameter: string = brandUuid;
		let bodyParameter: Proto.Message = contactFormSendSet;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', true);
	}

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
	getNotificationsForBrand(brandUuid: string) : Promise<Proto.Notifications>
	{
		let apiPath: string = '/api/v1/brands/:id/notifications/';
		let pathParameter: string = brandUuid;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', false);
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
	* @return	Promise<Proto.ExternalContentProviderSetup>
	*/
	setupExternalContentProvider(brandUuid: string, externalContentProviderSetupSet: Proto.ExternalContentProviderSetupSet, providerId: Proto.ExternalContentProvider) : Promise<Proto.ExternalContentProviderSetup>
	{
		let apiPath: string = '/api/v1/brands/:id/externalContentProviders/:providerId/setup/';
		let pathParameter: string = brandUuid;
		let bodyParameter: Proto.Message = externalContentProviderSetupSet;
		apiPath = super.replaceProviderId(apiPath, providerId);
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', false);
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
	* @return	Promise<Proto.ExternalContentProviderConfiguration>
	*/
	configureExternalContentProvider(brandUuid: string, externalContentProviderConfigureSet: Proto.ExternalContentProviderConfigureSet, providerId: Proto.ExternalContentProvider) : Promise<Proto.ExternalContentProviderConfiguration>
	{
		let apiPath: string = '/api/v1/brands/:id/externalContentProviders/:providerId/configure/';
		let pathParameter: string = brandUuid;
		let bodyParameter: Proto.Message = externalContentProviderConfigureSet;
		apiPath = super.replaceProviderId(apiPath, providerId);
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', false);
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
	* @return	Promise<Proto.ExternalContentProviderConfiguration>
	*/
	updateExternalContentProviderConfiguration(brandUuid: string, externalContentProviderConfigurationChangeSet: Proto.ExternalContentProviderConfigurationChangeSet, providerId: Proto.ExternalContentProvider) : Promise<Proto.ExternalContentProviderConfiguration>
	{
		let apiPath: string = '/api/v1/brands/:id/externalContentProviders/:providerId/';
		let pathParameter: string = brandUuid;
		let bodyParameter: Proto.Message = externalContentProviderConfigurationChangeSet;
		apiPath = super.replaceProviderId(apiPath, providerId);
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'put', false);
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
	* @return	Promise<Proto.ExternalContentProviderConfiguration>
	*/
	refreshExternalContentProviderConfiguration(brandUuid: string, externalContentProviderRefreshSet: Proto.ExternalContentProviderRefreshSet, providerId: Proto.ExternalContentProvider) : Promise<Proto.ExternalContentProviderConfiguration>
	{
		let apiPath: string = '/api/v1/brands/:id/externalContentProviders/:providerId/';
		let pathParameter: string = brandUuid;
		let bodyParameter: Proto.Message = externalContentProviderRefreshSet;
		apiPath = super.replaceProviderId(apiPath, providerId);
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'post', false);
	}

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
	getExternalContentProviderConfigurations(brandUuid: string) : Promise<Proto.ExternalContentProviderConfigurations>
	{
		let apiPath: string = '/api/v1/brands/:id/externalContentProviders/';
		let pathParameter: string = brandUuid;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', false);
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
	* @return	Promise<Proto.ExternalContentProviderProducts>
	*/
	getExternalContentProviderProducts(brandUuid: string, providerId: Proto.ExternalContentProvider) : Promise<Proto.ExternalContentProviderProducts>
	{
		let apiPath: string = '/api/v1/brands/:id/externalContentProviders/:providerId/products/';
		let pathParameter: string = brandUuid;
		let bodyParameter: Proto.Message = null;
		apiPath = super.replaceProviderId(apiPath, providerId);
		return super.process(true, ApiClient.ENDPOINT_MDIDX, apiPath, pathParameter, bodyParameter, null, 'get', false);
	}

	/**
	* Used to test a transport error contidion.
	*
	* This method supports anonymous invocation.
	*
	* @return	Promise<void>
	*/
	testTransportError() : Promise<null>
	{
		let apiPath: string = 'https://path.to.invalid.server.com';
		let pathParameter: string = null;
		let bodyParameter: Proto.Message = null;
		return super.process(true, ApiClient.ENDPOINT_MDW, apiPath, pathParameter, bodyParameter, null, 'get', true);
	}

}