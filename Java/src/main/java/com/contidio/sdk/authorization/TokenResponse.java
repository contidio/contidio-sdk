package com.contidio.sdk.authorization;

import org.apache.commons.lang3.StringUtils;
import org.json.JSONException;
import org.json.JSONObject;

import com.contidio.sdk.helpers.json.JsonNode;

public class TokenResponse {
	private JsonNode json;
	
	private boolean isHttpError;
	private int httpErrorStatusCode;
	private String httpErrorReason;	
	
	public TokenResponse(JsonNode json) {
		this.json = json;
	}
	
	public TokenResponse(int statusCode, String reason) {
		isHttpError = true;
		httpErrorStatusCode = statusCode;
		httpErrorReason = reason;
	}
	
	public boolean isHttpError() {
		return isHttpError;
	}
	
	public int getHttpErrorStatusCode() {
		return httpErrorStatusCode;
	}
	
	public String getHttpErrorReason() {
		return httpErrorReason;
	}
	
	public String getAccessToken() {
		return getStringOrNull("access_token");
	}
	
	public String getIdentityToken() {
		return getStringOrNull("id_token");
	}
	
	public String getError() {
		return getStringOrNull("error");
	}
	
	public boolean getIsError() {
		return isHttpError || !StringUtils.isEmpty(getStringOrNull("error"));
	}
	
	public Long getExpiresIn() {
		return getLongOrNull("expires_in");
	}
	
	public String getTokenType() {
		return getStringOrNull("token_type");
	}
	
	public String getRefreshToken() {
		return getStringOrNull("refresh_token");
	}
	
	private String getStringOrNull(String name) {
		JSONObject object = json.getObject();
		
		if (object.has(name)) {
			try {
				return object.getString(name);
			} catch (JSONException e) {
				return null;
			}
		}
		
		return null;
	}
	
	private Long getLongOrNull(String name) {
		JSONObject object = json.getObject();
		
		if (object.has(name)) {
			try {
				return object.getLong(name);
			} catch (JSONException e) {
				return null;
			}
		}
		
		return null;
	}
}
