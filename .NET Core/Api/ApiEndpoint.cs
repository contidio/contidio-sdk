namespace Contidio.Sdk.Api
{
    public sealed class ApiEndpoint
    {
        internal string Endpoint { private set; get; }
        internal int Port { private set; get; }
        internal string Protocol { private set; get; }
        internal bool IsFrontend { private set; get; }

        internal ApiEndpoint(bool isHttps, string endpoint, int port, bool isFrontend)
        {
            Endpoint = endpoint;
            Port = port;

            if (isHttps)
                Protocol = "https";
            else
                Protocol = "http";

            IsFrontend = isFrontend;
        }

        public string GetApiEndpointUrl(
            ApiEnvironment environment,
            bool apiManagement)
        {
            if (apiManagement)
            {
                switch (environment)
                {
                    case ApiEnvironment.DEVELOPMENT:
                        return
                            Protocol + "://" + Endpoint + "-dev.contidio.com:" + Port;
                    case ApiEnvironment.STAGING:
                        return
                            Protocol + "://" + Endpoint + "-staging.contidio.com:" + Port;
                    case ApiEnvironment.DEMO:
                        return
                            Protocol + "://" + Endpoint + "-demo.contidio.com";                                            
                    default:
                        return
                            Protocol + "://" + Endpoint + ".contidio.com";
                }
            }
            else
            {
                switch (environment)
                {
                    case ApiEnvironment.DEVELOPMENT:
                        return
                            Protocol + "://" + Endpoint + "-dev.contidio.com:" + Port;
                    case ApiEnvironment.STAGING:
                        return
                            Protocol + "://" + Endpoint + "-staging.contidio.com:" + Port;
                    case ApiEnvironment.DEMO:
                        return
                            Protocol + "://" + Endpoint + "-demo.contidio.com";
                    default:
                        return
                            Protocol + "://" + Endpoint + ".contidio.com";
                }
            }
        }        
    }
}
