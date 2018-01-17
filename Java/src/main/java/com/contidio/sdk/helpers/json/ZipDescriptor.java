package com.contidio.sdk.helpers.json;

import java.util.HashMap;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.json.JSONArray;
import org.json.JSONObject;

import com.contidio.sdk.proto.MetadataProtocol.BackendErrorCode;
import com.contidio.sdk.proto.MetadataProtocol.CreditTransactionType;
import com.contidio.sdk.proto.MetadataProtocol.Source;

public class ZipDescriptor {
	private String entityUuid;
	private String entityLocale;
	private String entityLocaleName;
	private int binarySetUuid;
	private String binarySetName;
	private String author;
	private String parentCreditTransactionUuid;
	private CreditTransactionType parentCreditTransactionType;
	private String creditTransactionUuid;
	private CreditTransactionType creditTransactionType;
	private String binaryMimeType;
	private String path;
	private Long fileSize;
	private String fileName;
	private String licensePath;
	private String relatedToJobUuid;
	private String relatedToProjectUuid;
	private String relatedToAdminUserGroupUuid;
	private String costCenterId;
	private Long fulfilledTimestamp;
	private BackendErrorCode fulfillmentError;
	private Long entityVersion;
	private Long workingSetVersion;
	private Source source;	
	
	public ZipDescriptor() {
	}
	
	private ZipDescriptor(JSONObject jsonObject) 
		throws Exception
	{	
		if (!jsonObject.has("EntityUuid"))
			throw new Exception("Entity UUID is missing");
		
		entityUuid = jsonObject.getString("EntityUuid");
		
		if (StringUtils.isEmpty(entityUuid))
			throw new Exception("Entity UUID is empty");
		
		if (jsonObject.has("EntityLocale"))
			entityLocale = jsonObject.getString("EntityLocale");
		
		if (jsonObject.has("EntityLocaleName"))
			entityLocaleName = jsonObject.getString("EntityLocaleName");
		
		if (jsonObject.has("BinarySetUuid"))
			binarySetUuid = jsonObject.getInt("BinarySetUuid");
		
		if (jsonObject.has("BinarySetName"))
			binarySetName = jsonObject.getString("BinarySetName");
		
		if (jsonObject.has("Author"))
			author = jsonObject.getString("Author");
		
		if (jsonObject.has("ParentCreditTransactionUuid"))
			parentCreditTransactionUuid = jsonObject.getString("ParentCreditTransactionUuid");
		
		if (jsonObject.has("ParentCreditTransactionType")) {
			parentCreditTransactionType = CreditTransactionType.valueOf(
					jsonObject.getInt("ParentCreditTransactionType"));
			
			if (parentCreditTransactionType == null)
				parentCreditTransactionType = CreditTransactionType.CTT_UNKNOWN;
		}
		
		if (jsonObject.has("CreditTransactionUuid"))
			creditTransactionUuid = jsonObject.getString("CreditTransactionUuid");
		
		if (jsonObject.has("CreditTransactionType")) {
			creditTransactionType = CreditTransactionType.valueOf(
					jsonObject.getInt("CreditTransactionType"));
			
			if (creditTransactionType == null)
				creditTransactionType = CreditTransactionType.CTT_UNKNOWN;
		}
		
		if (jsonObject.has("BinaryMimeType"))
			binaryMimeType = jsonObject.getString("BinaryMimeType");
		
		if (jsonObject.has("Path"))
			path = jsonObject.getString("Path");
		
		if (jsonObject.has("FileSize"))
			fileSize = jsonObject.getLong("FileSize");
		
		if (jsonObject.has("FileName"))
			fileName = jsonObject.getString("FileName");
		
		if (jsonObject.has("LicensePath"))
			licensePath = jsonObject.getString("LicensePath");
		
		if (jsonObject.has("RelatedToJobUuid"))
			relatedToJobUuid = jsonObject.getString("RelatedToJobUuid");
		
		if (jsonObject.has("RelatedToProjectUuid"))
			relatedToProjectUuid = jsonObject.getString("RelatedToProjectUuid");
		
		if (jsonObject.has("RelatedToAdminUserGroupUuid"))
			relatedToAdminUserGroupUuid = jsonObject.getString("RelatedToAdminUserGroupUuid");
		
		if (jsonObject.has("CostCenterId"))
			costCenterId = jsonObject.getString("CostCenterId");
		
		if (jsonObject.has("FulfilledTimestamp"))
			fulfilledTimestamp = jsonObject.getLong("FulfilledTimestamp");
		
		if (jsonObject.has("FulfillmentError"))  {
			fulfillmentError = BackendErrorCode.valueOf(
					jsonObject.getInt("FulfillmentError"));
			
			if (fulfillmentError == null)
				fulfillmentError = BackendErrorCode.UNKNOWN;
		}
		
		if (jsonObject.has("EntityVersion"))
			entityVersion = jsonObject.getLong("EntityVersion");
		
		if (jsonObject.has("WorkingSetVersion"))
			workingSetVersion = jsonObject.getLong("WorkingSetVersion");
		
		if (jsonObject.has("Source")) {
			source = Source.valueOf(
					jsonObject.getInt("Source"));
			
			if (source == null)
				source = Source.OTHER;
		}
	}

	public String getEntityUuid() {
		return entityUuid;
	}

	public String getEntityLocale() {
		return entityLocale;
	}
	
	public String getEntityLocaleName() {
		return entityLocaleName;
	}

	public int getBinarySetUuid() {
		return binarySetUuid;
	}
	
	public String getBinarySetName() {
		return binarySetName;
	}
	
	public String getAuthor() {
		return author;
	}

	public String getParentCreditTransactionUuid() {
		return parentCreditTransactionUuid;
	}

	public CreditTransactionType getParentCreditTransactionType() {
		return parentCreditTransactionType;
	}

	public String getCreditTransactionUuid() {
		return creditTransactionUuid;
	}

	public CreditTransactionType getCreditTransactionType() {
		return creditTransactionType;
	}

	public String getBinaryMimeType() {
		return binaryMimeType;
	}

	public String getPath() {
		return path;
	}

	public Long getFileSize() {
		return fileSize;
	}

	public String getFileName() {
		return fileName;
	}

	public String getLicensePath() {
		return licensePath;
	}

	public String getRelatedToJobUuid() {
		return relatedToJobUuid;
	}
	
	public String getRelatedToProjectUuid() {
		return relatedToProjectUuid;
	}

	public String getRelatedToAdminUserGroupUuid() {
		return relatedToAdminUserGroupUuid;
	}

	public String getCostCenterId() {
		return costCenterId;
	}

	public Long getFulfilledTimestamp() {
		return fulfilledTimestamp;
	}

	public BackendErrorCode getFulfillmentError() {
		return fulfillmentError;
	}

	public Long getEntityVersion() {
		return entityVersion;
	}

	public Long getWorkingSetVersion() {
		return workingSetVersion;
	}

	public Source getSource() {
		return source;
	}
	
	public interface MappingFilter {

		boolean mapZipDescriptor(ZipDescriptor zipDescriptor);
		
	}
	
	public static <TEntityPayload, TLocalePayload, TBinarySetPayload> 
		Map<String, EntityDescriptor<TEntityPayload, TLocalePayload, TBinarySetPayload>> mapFromJson
			(String json, MappingFilter mappingFilter) 
		throws ZipDescriptorParsingException
	{
		Map<String, EntityDescriptor<TEntityPayload, TLocalePayload, TBinarySetPayload>> map = 
				new HashMap<String, EntityDescriptor<TEntityPayload, TLocalePayload, TBinarySetPayload>>();
		
		try {
			JSONArray jsonArray = new JSONArray(json);
			
			if (jsonArray.length() > 0) {
				for (int i = 0; i < jsonArray.length(); i++) {
					JSONObject jsonObject = jsonArray.getJSONObject(i);
					
					ZipDescriptor zipDescriptor = new ZipDescriptor(jsonObject);
							
					String entityUuid = zipDescriptor.getEntityUuid();
					String entityLocale = zipDescriptor.getEntityLocale();
					Integer binarySetUuid = zipDescriptor.getBinarySetUuid();
					
					if (!StringUtils.isEmpty(entityUuid) && 
						!StringUtils.isEmpty(entityLocale) &&
						binarySetUuid != null) 
					{
						if (mappingFilter != null && !mappingFilter.mapZipDescriptor(zipDescriptor))
							continue;
						
						if (!map.containsKey(entityUuid))
							map.put(entityUuid, 
								new EntityDescriptor<TEntityPayload, TLocalePayload, TBinarySetPayload>(
									entityUuid, zipDescriptor));
						else
							map.get(entityUuid).addZipDescriptor(zipDescriptor);
					}
				}
			}
		} catch (Exception e) {
			throw new ZipDescriptorParsingException("Issue in parsing ZIP descriptor", e);
		}
		
		return map;
	}
}
