package com.contidio.sdk.api.eventbus;

import java.io.IOException;
import java.util.HashSet;
import java.util.Set;
import java.util.Timer;
import java.util.TimerTask;
import java.util.concurrent.ExecutionException;

import org.asynchttpclient.AsyncHttpClient;
import org.asynchttpclient.ws.WebSocket;
import org.asynchttpclient.ws.WebSocketByteListener;
import org.asynchttpclient.ws.WebSocketUpgradeHandler;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.contidio.sdk.proto.MetadataProtocol.EventBusMessage;
import com.googlecode.protobuf.format.JsonFormat;
import org.apache.commons.lang3.StringUtils;

public class ApiEventBus extends TimerTask implements WebSocketByteListener {
	private static final Logger logger = LoggerFactory.getLogger(ApiEventBus.class);
	
	private AsyncHttpClient asyncHttpClient;
	
	private Set<String> webSocketAddresses = new HashSet<String>();
	
	private ApiEventBusCallback apiEventBusCallback;
	private ApiEventBusEventProcessor apiEventBusEventProcessor;	
	
	private String endpoint;
	
	private WebSocket webSocket;
	private Timer timer;	
	
	private Object webSocketMutex = new Object();
	
	public ApiEventBus(
			AsyncHttpClient asyncHttpClient, 
			String endpoint, 
			ApiEventBusCallback apiEventBusCallback, 
			ApiEventBusEventProcessor apiEventBusEventProcessor,
			Set<String> webSocketAddresses) 
	{
		this.asyncHttpClient = asyncHttpClient;
		
		this.webSocketAddresses = webSocketAddresses;
		
		this.apiEventBusCallback = apiEventBusCallback;
		this.apiEventBusEventProcessor = apiEventBusEventProcessor;
	
		this.endpoint = endpoint.replace("https://", "wss://") + "/api/v1/eventBus/websocket";
	}		

	public void connect() 
		throws InterruptedException, ExecutionException 
	{		
		logger.info("Connecting to event bus");
		
		synchronized (webSocketMutex) {			
			cancelTimer();
			
			unregisterHandlers();
			
			webSocket = asyncHttpClient.prepareGet(endpoint)
				.execute(new WebSocketUpgradeHandler.Builder().addWebSocketListener(this).build())
				.get();
			
			registerHandlers();
			
			sendPing();						
			
			timer = new Timer();
			timer.scheduleAtFixedRate(this, 5000L, 5000L);
		}
		
		logger.info("Connected to event bus");
	}

	public void disconnect() {
		logger.info("Disconnecting from event bus");
		
		synchronized (webSocketMutex) {
			cancelTimer();

			if (webSocket != null) {
				try {
					webSocket.close();
				} catch (IOException e) {
					// ignore ...
				}
				
				webSocket = null;
			}						
		}
		
		logger.info("Disconnected from event bus");
	}
	
	@Override
	public void onOpen(WebSocket webSocket) {
		if (apiEventBusCallback != null)
			apiEventBusCallback.onOpen();
	}
	
	@Override
	public void run() {
		synchronized(webSocketMutex) {
			sendPing();
		}
	}
	
	@Override
	public void onClose(WebSocket webSocket) {
		if (apiEventBusCallback != null)
			apiEventBusCallback.onClose();
	}

	@Override
	public void onError(Throwable throwable) {
		if (apiEventBusCallback != null)
			apiEventBusCallback.onError(throwable);
	}

	@Override
	public void onMessage(byte[] message) {
		JSONObject jsonObject;
		
		try {
			String str = new String(message, "UTF-8");

			logger.debug("Received message: {}", str);
			
			jsonObject = new JSONObject(str);
		} catch (Exception e) {
			logger.warn("Received invalid message: {}", e);
			
			return;
		} 
		
		String type = jsonObject.has("type") ? jsonObject.getString("type") : null;
			
		if (StringUtils.isEmpty(type)) {
			logger.warn("Received message with empty type");
			
			return;
		}
		
		String address = jsonObject.has("address") ? jsonObject.getString("address") : null;
		
		if (StringUtils.isEmpty(address)) {
			logger.warn("Received message with empty address");
			
			return;
		}
		
		String body = jsonObject.has("body") ?  jsonObject.getString("body") : null;
		
		if (body == null) {
			logger.warn("Received message with missing body");
			
			return;
		}
		
		if (apiEventBusCallback != null)
			apiEventBusCallback.onMessage(address, body);
		
		if (apiEventBusEventProcessor != null) {
			EventBusMessage eventBusMessage = parseEventBusMessage(body);
			
			if (eventBusMessage != null)
				apiEventBusEventProcessor.onEventBusMessage(address, eventBusMessage);
		}
	}	
	
	private void registerHandlers() {
		if (webSocket != null) {
			for (String webSocketAddress : webSocketAddresses) {
				logger.info("Registering for address " + webSocketAddress);
				
				JSONObject jsonObject = new JSONObject();
				
				jsonObject.put("type", "register");
				jsonObject.put("address", webSocketAddress);
				
				webSocket.sendMessage(jsonObject.toString());
			}
		} else {
			logger.warn("Websocket is closed, cannot send registration");
		}
	}
	
	private void unregisterHandlers() {
		if (webSocket != null) {
			for (String webSocketAddress : webSocketAddresses) {
				logger.info("Unregistering from address " + webSocketAddress);
				
				JSONObject jsonObject = new JSONObject();
				
				jsonObject.put("type", "unregister");
				jsonObject.put("address", webSocketAddress);
				
				webSocket.sendMessage(jsonObject.toString());
			}
		} 
	}
	
	private void sendPing() {
		if (webSocket != null) {
			logger.debug("Sending ping");
			
			JSONObject jsonObject = new JSONObject();
			
			jsonObject.put("type", "ping");
			
			webSocket.sendMessage(jsonObject.toString());
			
			logger.debug("Ping sent");
		} else {
			logger.warn("Websocket is closed, cannot send ping");
		}
	}
	
	private void cancelTimer() {
		if (timer != null) {
			timer.cancel();
			
			timer = null;
		}
	}
	
	private EventBusMessage parseEventBusMessage(String body) {
		EventBusMessage.Builder eventBusMessageBuilder = EventBusMessage.newBuilder();
		
		try {
			JsonFormat.merge(body, eventBusMessageBuilder);
			
			return eventBusMessageBuilder.build();
		} catch (Exception e) {
			logger.info("Invalid input format in message: {}", e);
			
			return null;
		}
	}
}
