using com.contidio.sdk.proto;
using Contidio.Sdk.Exceptions;
using System;
using System.Globalization;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading;
using System.Threading.Tasks;

namespace Contidio.Sdk.Api
{
    public class ApiClient : IDisposable         
    {
        public enum Method
        {
            GET,
            PUT,
            POST,
            DELETE
        }

        private HttpClient _httpClient;

        private bool _handleAsError;
        private HttpStatusCode _errorStatusCode;
        private string _errorReason;
        private string _bearerToken;        

        private ApiEnvironment _environment;

        private string _subscriptionKey;

        public static ApiEndpoint ENDPOINT_WWW = new ApiEndpoint(true, "www", 31442, true);        
        public static ApiEndpoint ENDPOINT_ID = new ApiEndpoint(true, "id", 31443, false);
        public static ApiEndpoint ENDPOINT_CW = new ApiEndpoint(true, "cw", 31444, false);
        public static ApiEndpoint ENDPOINT_CR = new ApiEndpoint(true, "cr", 31444, false);
        public static ApiEndpoint ENDPOINT_MDW = new ApiEndpoint(true, "mdw", 31445, false);
        public static ApiEndpoint ENDPOINT_MDR = new ApiEndpoint(true, "mdr", 31445, false);
        public static ApiEndpoint ENDPOINT_MDIDX = new ApiEndpoint(true, "mdidx", 31446, false);        

        public string WebSocketAddress { get; set; }

        public string InstanceId { get; set; }

        public ApiClient(string subscriptionKey)
        {            
            _environment = ApiEnvironment.DEVELOPMENT;

            _subscriptionKey = subscriptionKey;

            WebSocketAddress = null;
            InstanceId = null;
        }

        public ApiClient(string subscriptionKey, string bearerToken)
            : this(subscriptionKey)
        {
            _bearerToken = bearerToken;
        }

        public ApiClient(string subscriptionKey, ApiEnvironment environment)
        {
            _subscriptionKey = subscriptionKey;
            _environment = environment;

            WebSocketAddress = null;
            InstanceId = null;
        }

        public ApiClient(string subscriptionKey, ApiEnvironment environment, string bearerToken)
            : this(subscriptionKey, environment)
        {            
            _bearerToken = bearerToken;            
        }

        public ApiRequest CreateApiRequest(string brandUuid)
        {
            return new ApiRequest(this, brandUuid);
        }

        internal string GetBearerToken()
        {
            return _bearerToken;
        }

        internal async Task<byte[]> ProcessAsync(bool apiManagement, ApiEndpoint apiEndpoint, string brandUuid, 
            string transactionUuid, string url, byte[] gpbContent, string[] binaries, Method method, CancellationToken? cancellationToken = null)
        {
            string apiUrl = apiEndpoint.GetApiEndpointUrl(_environment, apiManagement);

            apiUrl += url;

            _httpClient = new HttpClient();
            _httpClient.Timeout = TimeSpan.FromMinutes(2);

            _httpClient.DefaultRequestHeaders.Accept.Clear();
            _httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/x-protobuf"));            

            if (!string.IsNullOrEmpty(_bearerToken))
                _httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", _bearerToken);

            if (!string.IsNullOrEmpty(brandUuid))
                _httpClient.DefaultRequestHeaders.Add(ApiConstants.REQUEST_HEADER_BRAND_UUID, brandUuid);

            if (!string.IsNullOrEmpty(WebSocketAddress))
                _httpClient.DefaultRequestHeaders.Add(ApiConstants.REQUEST_HEADER_WEBSOCKET_ADDRESS, WebSocketAddress);

            if (!string.IsNullOrEmpty(transactionUuid))
                _httpClient.DefaultRequestHeaders.Add(ApiConstants.REQUEST_HEADER_TRANSACTION_UUID, transactionUuid);

            if (!string.IsNullOrEmpty(_subscriptionKey))
                _httpClient.DefaultRequestHeaders.Add(ApiConstants.REQUEST_HEADER_SUBSCRIPTION_KEY, _subscriptionKey);

            if (!string.IsNullOrEmpty(InstanceId))
                _httpClient.DefaultRequestHeaders.Add(ApiConstants.REQUEST_HEADER_INSTANCE_ID, InstanceId);

            _httpClient.DefaultRequestHeaders.Add(ApiConstants.REQUEST_HEADER_CONTIDIO_SDK, ApiConstants.CONTIDIO_SDK_IDENTIFIER);

            HttpResponseMessage response = null;

            try
            {                
                if (binaries == null || binaries.Length == 0)
                {
                    HttpContent httpContent = null;

                    try
                    {
                        if (gpbContent != null)
                        {
                            httpContent = new ByteArrayContent(gpbContent);
                        }
                        else
                        {
                            httpContent = new ByteArrayContent(new byte[] { });
                        }

                        switch (method)
                        {
                            case Method.GET:
                                if (cancellationToken != null)
                                    response = await _httpClient.GetAsync(apiUrl, (CancellationToken)cancellationToken)
                                        .ConfigureAwait(false);
                                else
                                    response = await _httpClient.GetAsync(apiUrl)
                                        .ConfigureAwait(false);
                                break;
                            case Method.POST:
                                if (cancellationToken != null)
                                    response = await _httpClient.PostAsync(apiUrl, httpContent, (CancellationToken)cancellationToken)
                                        .ConfigureAwait(false);
                                else
                                    response = await _httpClient.PostAsync(apiUrl, httpContent)
                                        .ConfigureAwait(false);
                                break;
                            case Method.PUT:
                                if (cancellationToken != null)
                                    response = await _httpClient.PutAsync(apiUrl, httpContent, (CancellationToken)cancellationToken)
                                        .ConfigureAwait(false);
                                else
                                    response = await _httpClient.PutAsync(apiUrl, httpContent)
                                        .ConfigureAwait(false);
                                break;
                            case Method.DELETE:
                                HttpRequestMessage request = new HttpRequestMessage
                                {
                                    Content = httpContent,
                                    Method = HttpMethod.Delete,
                                    RequestUri = new Uri(apiUrl)
                                };

                                if (cancellationToken != null)
                                    response = await _httpClient.SendAsync(request, (CancellationToken)cancellationToken)
                                        .ConfigureAwait(false);
                                else
                                    response = await _httpClient.SendAsync(request)
                                        .ConfigureAwait(false);
                                break;
                            default:
                                throw new InternalErrorBackendException("Invalid HTTP method found");
                        }
                    }
                    catch (Exception e)
                    {
                        throw e;
                    }
                    finally
                    {
                        try
                        {
                            if (httpContent != null)
                                httpContent.Dispose();
                        }
                        catch (Exception)
                        {
                            // ignore...
                        }
                    }
                } else
                {
                    if (method != Method.POST && method != Method.PUT)
                        throw new InternalErrorBackendException("Invalid HTTP method found");

                    MultipartFormDataContent multipartContent = null;

                    try
                    {
                        multipartContent = new MultipartFormDataContent("Upload----" + DateTime.Now.ToString(CultureInfo.InvariantCulture));

                        string gpbContentEncoded = null;

                        if (gpbContent != null)
                            gpbContentEncoded = Convert.ToBase64String(gpbContent);
                        else
                            gpbContentEncoded = Convert.ToBase64String(new byte[] { });

                        multipartContent.Add(new StringContent(gpbContentEncoded), "gpb");                        

                        foreach (string binary in binaries)
                        {
                            FileStream fileStream = null;

                            try
                            {
                                if (!File.Exists(binary))
                                    throw new InternalErrorBackendException("Binary with path '" + binary + " was not found");                                

                                fileStream = File.OpenRead(binary);
                                var streamContent = new StreamContent(fileStream);
                                streamContent.Headers.Add("Content-Type", "application/octet-stream");
                                streamContent.Headers.Add("Content-Disposition", "form-data; name=\"files\"; filename=\"" +
                                    Path.GetFileName(binary) + "\"");

                                multipartContent.Add(streamContent, "files", Path.GetFileName(binary));
                            } catch (Exception)
                            {
                                try { 
                                    if (fileStream != null)
                                        fileStream.Dispose();
                                }
                                catch (Exception)
                                {
                                    // ignore...
                                }
                            }
                        }

                        switch (method)
                        {
                            case Method.POST:
                                if (cancellationToken != null)
                                    response = await _httpClient.PostAsync(apiUrl, multipartContent, (CancellationToken)cancellationToken)
                                        .ConfigureAwait(false);
                                else
                                    response = await _httpClient.PostAsync(apiUrl, multipartContent)
                                        .ConfigureAwait(false);
                                break;
                            case Method.PUT:
                                if (cancellationToken != null)
                                    response = await _httpClient.PutAsync(apiUrl, multipartContent, (CancellationToken)cancellationToken)
                                        .ConfigureAwait(false);
                                else
                                    response = await _httpClient.PutAsync(apiUrl, multipartContent)
                                        .ConfigureAwait(false);
                                break;
                            default:
                                throw new InternalErrorBackendException("Invalid HTTP method found");
                        }
                    }
                    catch (Exception e)
                    {
                        throw e;
                    }
                    finally
                    {
                        try
                        {
                            if (multipartContent != null)
                                multipartContent.Dispose();
                        }
                        catch (Exception)
                        {
                            // ignore...
                        }
                    }
                }
                
                if (response.StatusCode == HttpStatusCode.NoContent)
                {
                    _handleAsError = false;
                    return new byte[] { };
                }

                if (!response.IsSuccessStatusCode)
                {
                    _handleAsError = true;
                    _errorStatusCode = response.StatusCode;
                    _errorReason = response.ReasonPhrase;
                }
                else
                {
                    _handleAsError = false;
                }

                byte[] result = await response.Content.ReadAsByteArrayAsync()
                    .ConfigureAwait(false);

                if (_handleAsError)
                {
                    if (GetResponseIsProtobuf(response))
                    {
                        Error error = Error.ParseFrom(result);

                        throw BackendException.GetTransientExceptionFor(error);
                    } else
                    {
                        throw new InternalErrorBackendException(
                            "The server responded with HTTP error status code " + _errorStatusCode + " (" + 
                                (string.IsNullOrEmpty(_errorReason) ? "unknown reason" : _errorReason) + ")");
                    }
                }
                else
                {
                    return result;
                }
            }
            catch (Exception e)
            {
                throw e;
            }
            finally
            {
                try
                {
                    if (response != null)
                        response.Dispose();
                }
                catch (Exception)
                {
                    // ignore...
                }
            }
        }

        private bool GetResponseIsProtobuf(HttpResponseMessage response)
        {
            if (response.Content.Headers != null && response.Content.Headers.ContentType != null)
            {
                string contentType = response.Content.Headers.ContentType.MediaType;
                return contentType.StartsWith("application/x-protobuf");
            }

            return false;
        }        

        public void Dispose()
        {
            if (_httpClient != null)
            {
                _httpClient.Dispose();
                _httpClient = null;
            }
        }
    }
}
