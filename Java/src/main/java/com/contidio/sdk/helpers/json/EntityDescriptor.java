package com.contidio.sdk.helpers.json;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class EntityDescriptor<TEntityPayload, TLocalePayload, TBinarySetPayload> {
	private Map<String, LocaleDescriptor<TLocalePayload, TBinarySetPayload>> map = 
			new HashMap<String, LocaleDescriptor<TLocalePayload, TBinarySetPayload>>();
	
	private String entityUuid;
	private TEntityPayload payload;
	
	public EntityDescriptor(String entityUuid, ZipDescriptor zipDescriptor) 
		throws Exception 
	{
		addZipDescriptor(zipDescriptor);
		
		this.entityUuid = entityUuid; 
	}

	public void addZipDescriptor(ZipDescriptor zipDescriptor) 
		throws Exception 
	{
		String entityLocale = zipDescriptor.getEntityLocale();
		
		if (!map.containsKey(entityLocale))
			map.put(entityLocale, new LocaleDescriptor<TLocalePayload, TBinarySetPayload>(
					entityLocale, zipDescriptor.getEntityLocaleName(), zipDescriptor));
		else
			map.get(entityLocale).addZipDescriptor(zipDescriptor);
	}
	
	public int getLocaleCount() {
		return map.size();
	}
	
	public int getBinarySetCount() {
		return getBinarySetUuids().size();
	}
	
	public Set<Integer> getBinarySetUuids() {
		Set<Integer> binarySetUuids = new HashSet<Integer>();
		
		for (LocaleDescriptor<TLocalePayload, TBinarySetPayload> localeDescriptor : map.values()) {
			binarySetUuids.addAll(localeDescriptor.getBinarySetUuids());
		}
		
		return binarySetUuids;
	}

	public int getBinaryCount() {
		int binaryCount = 0;
		
		for (LocaleDescriptor<TLocalePayload, TBinarySetPayload> localeDescriptor : map.values()) {
			binaryCount += localeDescriptor.getBinaryCount();
		}
		
		return binaryCount;
	}
	
	public Map<String, LocaleDescriptor<TLocalePayload, TBinarySetPayload>> getMap() {
		return map;
	}

	public TEntityPayload getPayload() {
		return payload;
	}

	public void setPayload(TEntityPayload payload) {
		this.payload = payload;
	}
	
	public String getEntityUuid() {
		return entityUuid;
	}
}