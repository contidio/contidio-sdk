package com.contidio.sdk.api.eventbus;

import com.contidio.sdk.proto.MetadataProtocol.EventBusMessage;

public interface ApiEventBusEventProcessor {

	void onEventBusMessage(String address, EventBusMessage eventBusMessage);

}
