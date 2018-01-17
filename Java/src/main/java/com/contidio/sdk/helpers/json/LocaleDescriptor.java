package com.contidio.sdk.helpers.json;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class LocaleDescriptor<TLocalePayload, TBinarySetPayload> {	
	private Map<Integer, BinarySetDescriptor<TBinarySetPayload>> map = 
			new HashMap<Integer, BinarySetDescriptor<TBinarySetPayload>>();
	
	private String locale;
	private String entityLocaleName;
	private TLocalePayload payload;	
	
	public LocaleDescriptor(String locale, String entityLocaleName, ZipDescriptor zipDescriptor) 
		throws Exception 
	{
		addZipDescriptor(zipDescriptor);
		
		this.locale = locale;
		this.entityLocaleName = entityLocaleName;
	}

	public void addZipDescriptor(ZipDescriptor zipDescriptor) 
		throws Exception 
	{
		Integer binarySetUuid = zipDescriptor.getBinarySetUuid();
		
		if (!map.containsKey(binarySetUuid))
			map.put(binarySetUuid, new BinarySetDescriptor<TBinarySetPayload>(
					binarySetUuid, zipDescriptor.getBinarySetName(), zipDescriptor));
		else
			throw new Exception("Duplicate binary set binary found");
	}

	public int getBinaryCount() {
		return map.size();
	}
	
	public Set<Integer> getBinarySetUuids() {
		return map.keySet();
	}
	
	public Map<Integer, BinarySetDescriptor<TBinarySetPayload>> getMap() {
		return map;
	}

	public TLocalePayload getPayload() {
		return payload;
	}

	public void setPayload(TLocalePayload payload) {
		this.payload = payload;
	}
	
	public String getLocale() {
		return locale;
	}
	
	public String getEntityLocaleName() {
		return entityLocaleName;
	}
}
