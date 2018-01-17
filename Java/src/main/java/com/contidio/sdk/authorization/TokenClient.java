package com.contidio.sdk.authorization;

import org.apache.commons.httpclient.HttpStatus;
import org.apache.commons.lang3.StringUtils;
import org.asynchttpclient.AsyncHttpClient;
import org.asynchttpclient.Realm;
import org.asynchttpclient.Realm.AuthScheme;
import org.asynchttpclient.Realm.Builder;
import org.asynchttpclient.Response;

import com.contidio.sdk.helpers.json.JsonNode;

// ported from IdSrv3 .NET -> Java
// see https://github.com/IdentityModel/IdentityModel/blob/master/source/IdentityModel.Shared/Client/TokenClient.cs
// v1.0.0

public class TokenClient {
	private String address;
	private String clientId;
	private String clientSecret;
	
	private AsyncHttpClient asyncHttpClient;
	
	public TokenClient(AsyncHttpClient asyncHttpClient, String address, String clientId, String clientSecret) 
		throws Exception
	{
		if (address == null) throw new Exception("address is null");
		if (StringUtils.isEmpty(clientId)) throw new Exception("clientId is empty");
		
		this.address = address;
		this.clientId = clientId;
		this.clientSecret = clientSecret;
		
		this.asyncHttpClient = asyncHttpClient;
	}
	
	public TokenResponse requestRefreshToken(String refreshToken) 
		throws Exception 
	{
		Realm realm = new Builder(clientId, clientSecret)
                .setUsePreemptiveAuth(true)
                .setScheme(AuthScheme.BASIC)
                .build();
		
		Response response = asyncHttpClient.preparePost(address)
			.setRealm(realm)
			.addHeader("Accept", "application/json")
			.addFormParam("grant_type", "refresh_token")
			.addFormParam("refresh_token", refreshToken)
			.execute()
			.get();
		
		if (response.getStatusCode() == HttpStatus.SC_OK || response.getStatusCode() == HttpStatus.SC_BAD_REQUEST)
        {
			JsonNode jsonNode = new JsonNode(response.getResponseBody());
			
            return new TokenResponse(jsonNode);
        }
        else
        {
            return new TokenResponse(response.getStatusCode(), response.getStatusText());
        }
	}
}
