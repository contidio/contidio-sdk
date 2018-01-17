using com.contidio.sdk.proto;
using System.Net;

namespace Contidio.Sdk.Exceptions
{
    public class ServiceUnavailableBackendException : BackendException
    {
        public ServiceUnavailableBackendException(string message)
            : base(BackendErrorCode.TEMPORARY_UNAVAILABLE, message, "ServiceUnavailableBackendException", HttpStatusCode.ServiceUnavailable)
        {
        }
    }
}
