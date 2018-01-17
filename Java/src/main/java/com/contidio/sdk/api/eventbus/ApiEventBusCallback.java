package com.contidio.sdk.api.eventbus;

public interface ApiEventBusCallback {
	
	void onOpen();
	void onClose();
	void onError(Throwable throwable);
	void onMessage(String address, String body);
	
}
