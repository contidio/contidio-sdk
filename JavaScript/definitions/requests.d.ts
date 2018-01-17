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