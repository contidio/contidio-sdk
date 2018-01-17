package com.contidio.sdk.api;

import java.io.File;
import java.util.Base64;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.ExecutionException;

import org.apache.commons.httpclient.HttpStatus;
import org.apache.commons.lang3.StringUtils;
import org.asynchttpclient.AsyncHttpClient;
import org.asynchttpclient.BoundRequestBuilder;
import org.asynchttpclient.Response;
import org.asynchttpclient.request.body.multipart.FilePart;
import org.asynchttpclient.request.body.multipart.StringPart;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.contidio.sdk.api.eventbus.ApiEventBus;
import com.contidio.sdk.api.eventbus.ApiEventBusCallback;
import com.contidio.sdk.api.eventbus.ApiEventBusEventProcessor;
import com.contidio.sdk.exceptions.BackendException;
import com.contidio.sdk.exceptions.InternalErrorBackendException;

public class ApiClient {
	private static final Logger logger = LoggerFactory.getLogger(ApiClient.class);
	
	public enum Method
    {
        GET,
        PUT,
        POST,
        DELETE
    }
	
	private boolean handleAsError;
	private String bearerToken;
	
	private int errorStatusCode;
	private String errorReason;
	
	private ApiEnvironment environment;
	
	private String subscriptionKey;
	
	public static ApiEndpoint ENDPOINT_WWW = new ApiEndpoint(true, "www", 31442, true);
	public static ApiEndpoint ENDPOINT_ID = new ApiEndpoint(true, "id", 31443, false);
	public static ApiEndpoint ENDPOINT_CW = new ApiEndpoint(true, "cw", 31444, false);
	public static ApiEndpoint ENDPOINT_CR = new ApiEndpoint(true, "cr", 31444, false);
	public static ApiEndpoint ENDPOINT_MDW = new ApiEndpoint(true, "mdw", 31445, false);
	public static ApiEndpoint ENDPOINT_MDR = new ApiEndpoint(true, "mdr", 31445, false);
	public static ApiEndpoint ENDPOINT_MDIDX = new ApiEndpoint(true, "mdidx", 31446, false);
	
	private String webSocketAddress;
	
	private AsyncHttpClient asyncHttpClient;
	
	private ApiEventBus apiEventBus;
	
	private Object apiEventBusMutex = new Object();
	
	private String instanceId;
	
	public ApiClient(AsyncHttpClient asyncHttpClient, String subscriptionKey) {
		environment = ApiEnvironment.DEVELOPMENT;
		
		this.subscriptionKey = subscriptionKey;
		
		this.webSocketAddress = null;
		this.instanceId = null;
		
		this.asyncHttpClient = asyncHttpClient;
	}
	
	public ApiClient(AsyncHttpClient asyncHttpClient, String subscriptionKey, String bearerToken) {
		this(asyncHttpClient, subscriptionKey);
				
		this.bearerToken = bearerToken;
	}
	
	public ApiClient(AsyncHttpClient asyncHttpClient, String subscriptionKey, ApiEnvironment environment) {
		this.subscriptionKey = subscriptionKey;
		this.environment = environment;
		
		this.webSocketAddress = null;
		
		this.asyncHttpClient = asyncHttpClient;
	}
	
	public ApiClient(AsyncHttpClient asyncHttpClient, String subscriptionKey, ApiEnvironment environment, String bearerToken) {
		this(asyncHttpClient, subscriptionKey, environment);
		
		this.bearerToken = bearerToken;
	}
	
	public String getWebSocketAddress() {
		return webSocketAddress;
	}

	public void setWebSocketAddress(String webSocketAddress) {
		this.webSocketAddress = webSocketAddress;
	}

	public ApiRequest createRequest(String brandUuid) {
		return new ApiRequest(this, brandUuid);
	}
	
	public String getBearerToken() {
		return bearerToken;
	}
	
	public void setInstanceId(String instanceId) {
		this.instanceId = instanceId;
	}
	
	public String getInstanceId() {
		return instanceId;
	}
	
	byte[] process(boolean apiManagement, ApiEndpoint apiEndpoint, String brandUuid, String transactionUuid,
			String url, byte[] gpbContent, File[] binaries, Method method)
		throws Exception
	{
		String apiUrl = apiEndpoint.getApiEndpointUrl(environment, apiManagement);
		
		apiUrl += url;
				
		BoundRequestBuilder requestBuilder = null;
		
		if (binaries == null || binaries.length == 0) {
			switch(method) {
				case GET:
					requestBuilder = asyncHttpClient.prepareGet(apiUrl);
					break;
				case POST:
					requestBuilder = asyncHttpClient.preparePost(apiUrl);
					
					if (gpbContent != null)
						requestBuilder.setBody(gpbContent);
					else
						requestBuilder.setBody(new byte[] {});
					
					break;
				case PUT:
					requestBuilder = asyncHttpClient.preparePut(apiUrl);
					
					if (gpbContent != null)
						requestBuilder.setBody(gpbContent);
					else
						requestBuilder.setBody(new byte[] {});
					
					break;
				case DELETE:
					requestBuilder = asyncHttpClient.prepareDelete(apiUrl);
					
					if (gpbContent != null)
						requestBuilder.setBody(gpbContent);
					else
						requestBuilder.setBody(new byte[] {});
					
					break;
				default:
					throw new InternalErrorBackendException("Invalid HTTP method found");
			}
		} else {
			String gpbContentEncoded = null;
			if (gpbContent != null)
				gpbContentEncoded = Base64.getEncoder().encodeToString(gpbContent);
			else
				gpbContentEncoded = Base64.getEncoder().encodeToString(new byte[] {});
			
			switch(method) {
				case POST:
					requestBuilder = asyncHttpClient.preparePost(apiUrl);
										
					requestBuilder.addBodyPart(new StringPart("gpb", gpbContentEncoded));
										
					break;
				case PUT:
					requestBuilder = asyncHttpClient.preparePut(apiUrl);
					
					requestBuilder.addBodyPart(new StringPart("gpb", gpbContentEncoded));					
					
					break;
				default:
					throw new InternalErrorBackendException("Invalid HTTP method found");
			}
			
			for (File binary : binaries) {
				if (!binary.exists())
					throw new InternalErrorBackendException("Binary with path '" + binary.getAbsolutePath() + " was not found");
				
				if (!binary.canRead())
					throw new InternalErrorBackendException("Binary with path '" + binary.getAbsolutePath() + " cannot be read");
				
				requestBuilder.addBodyPart(new FilePart("files", binary));
			}
		}
		
		requestBuilder.addHeader("Accept", "application/x-protobuf");
		
		if (!StringUtils.isEmpty(bearerToken))
			requestBuilder.addHeader("Authorization", "Bearer " + bearerToken);	
		
		if (!StringUtils.isEmpty(brandUuid))
			requestBuilder.addHeader(ApiConstants.REQUEST_HEADER_BRAND_UUID, brandUuid);
		
		if (!StringUtils.isEmpty(webSocketAddress))
			requestBuilder.addHeader(ApiConstants.REQUEST_HEADER_WEBSOCKET_ADDRESS, webSocketAddress);
		
		if (!StringUtils.isEmpty(transactionUuid))
			requestBuilder.addHeader(ApiConstants.REQUEST_HEADER_TRANSACTION_UUID, transactionUuid);
		
		if (!StringUtils.isEmpty(subscriptionKey))
			requestBuilder.addHeader(ApiConstants.REQUEST_HEADER_SUBSCRIPTION_KEY, subscriptionKey);
		
		if (!StringUtils.isEmpty(instanceId))
			requestBuilder.addHeader(ApiConstants.REQUEST_HEADER_INSTANCE_ID, instanceId);
		
		requestBuilder.addHeader(ApiConstants.REQUEST_HEADER_CONTIDIO_SDK, ApiConstants.CONTIDIO_SDK_IDENTIFIER);
		
		Response response = null;
		
		try {
			response = requestBuilder.execute().get();
			
			int statusCode = response.getStatusCode();
			
			if (statusCode == HttpStatus.SC_NO_CONTENT) {
				handleAsError = false;
				return new byte[] { };
			}
			
			if (statusCode != HttpStatus.SC_OK) {
				handleAsError = true;
				errorStatusCode = response.getStatusCode();
				errorReason = response.getStatusText();
			} else {
				handleAsError = false;
			}
			
			byte[] result = response.getResponseBodyAsBytes();
			
			if (handleAsError) {
				if (getResponseIsProtobuf(response)) {
					com.contidio.sdk.proto.MetadataProtocol.Error error = com.contidio.sdk.proto.MetadataProtocol.Error
							.parseFrom(result);
					
					throw BackendException.getTransientExceptionFor(error);						
				} else {
					throw new InternalErrorBackendException(
							"The server responded with HTTP error status code " + errorStatusCode + " (" + 
								(StringUtils.isEmpty(errorReason) ? "unknown reason" : errorReason) + ")");
				}
			} else {
				return result;
			}
		} catch (Exception e) {
			throw e;
		} finally {			
			// nothing to do
		}		
	}

	private boolean getResponseIsProtobuf(Response response) {
		if (response.getContentType() != null) {
			String contentType = response.getContentType();
			return StringUtils.startsWith(contentType, "application/x-protobuf");
		}
		
		return false;
	}
	
	public void connectToEventBus(ApiEventBusCallback apiEventBusCallback) 
		throws InterruptedException, ExecutionException 
	{
		connectToEventBus(apiEventBusCallback, null, null);
	}
	
	public void connectToEventBus(
			ApiEventBusCallback apiEventBusCallback, 
			ApiEventBusEventProcessor apiEventBusEventProcessor) 
		throws InterruptedException, ExecutionException
	{
		connectToEventBus(apiEventBusCallback, apiEventBusEventProcessor, null);
	}
		
	public void connectToEventBus(
			ApiEventBusCallback apiEventBusCallback, 
			ApiEventBusEventProcessor apiEventBusEventProcessor,
			Set<String> webSocketAddresses) 
		throws InterruptedException, ExecutionException 
	{
		logger.info("Connecting to event bus");
		
		synchronized (apiEventBusMutex) {
			if (StringUtils.isEmpty(webSocketAddress))
				webSocketAddress = UUID.randomUUID().toString();
			
			if (webSocketAddresses == null)
				webSocketAddresses = new HashSet<String>();
			
			webSocketAddresses.add(webSocketAddress);
			
			disconnectFromEventBus();
			
			String endpoint = ENDPOINT_MDIDX.getApiEndpointUrl(environment, false);
									
			apiEventBus = new ApiEventBus(
					asyncHttpClient, 
					endpoint, 
					apiEventBusCallback, 
					apiEventBusEventProcessor,
					webSocketAddresses);
			
			apiEventBus.connect();
		}
		
		logger.info("Connected to event bus");
	}
	
	public void disconnectFromEventBus() {
		logger.info("Disconnecting from event bus");
		
		synchronized (apiEventBusMutex) {
			if (apiEventBus != null) {
				apiEventBus.disconnect();
				
				apiEventBus = null;
			}
		}
		
		logger.info("Disconnected from event bus");
	}
}
