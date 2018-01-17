package com.contidio.sdk.api;

public final class ApiEndpoint {
	private String endpoint;
	private int port;	
	
	private String protocol;
	
	private boolean isFrontend;
	
	ApiEndpoint(boolean isHttps, String endpoint, int port, boolean isFrontend) {
		this.endpoint = endpoint;
		this.port = port;
		
		if (isHttps)
			protocol = "https";
		else
			protocol = "http";
		
		this.isFrontend = isFrontend;
	}
	
	String getEndpoint() {
		return endpoint;
	}
	
	int getPort() {
		return port;
	}
	
	boolean isFrontend() {
		return isFrontend;
	}

	public String getApiEndpointUrl(
			ApiEnvironment environment, 
			boolean apiManagement) 
	{
		if (apiManagement) {
			switch (environment) {
				case DEVELOPMENT:
					return
						protocol + "://" + getEndpoint() + "-dev.contidio.com:" + getPort();					
				case STAGING:
					return
						protocol + "://" + getEndpoint() + "-staging.contidio.com:" + getPort();
				case DEMO:
					return
						protocol + "://" + getEndpoint() + "-demo.contidio.com";
				default:
					return
						protocol + "://" + getEndpoint() + ".contidio.com";
			}
		} else {
			switch (environment) {
				case DEVELOPMENT:
					return
						protocol + "://" + getEndpoint() + "-dev.contidio.com:" + getPort();
				case STAGING:
					return
						protocol + "://" + getEndpoint() + "-staging.contidio.com:" + getPort();					
				case DEMO:
					return
						protocol + "://" + getEndpoint() + "-demo.contidio.com";
				default:
					return
						protocol + "://" + getEndpoint() + ".contidio.com";
			}
		}
	}
}
