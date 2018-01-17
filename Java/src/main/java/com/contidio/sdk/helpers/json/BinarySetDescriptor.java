package com.contidio.sdk.helpers.json;

public class BinarySetDescriptor<TBinarySetPayload> {
	private ZipDescriptor zipDescriptor;
	
	private int binarySetUuid;
	private String binarySetName;
	private TBinarySetPayload payload;
	
	public BinarySetDescriptor(int binarySetUuid, String binarySetName, ZipDescriptor zipDescriptor) {
		this.zipDescriptor = zipDescriptor;
		
		this.binarySetUuid = binarySetUuid;
		this.binarySetName = binarySetName;
	}
	
	public ZipDescriptor getZipDescriptor() {
		return zipDescriptor;
	}

	public TBinarySetPayload getPayload() {
		return payload;
	}

	public void setPayload(TBinarySetPayload payload) {
		this.payload = payload;
	}
	
	public int getBinarySetUuid() {
		return binarySetUuid;
	}
	
	public String getBinarySetName() {
		return binarySetName;
	}
}
