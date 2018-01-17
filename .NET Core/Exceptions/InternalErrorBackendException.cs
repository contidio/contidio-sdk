using com.contidio.sdk.proto;
using System.Net;

namespace Contidio.Sdk.Exceptions
{
    public class InternalErrorBackendException : BackendException
    {
        public InternalErrorBackendException(string message)
            : base(BackendErrorCode.GENERIC_ERROR, message, "InternalErrorBackendException", HttpStatusCode.InternalServerError)
        {
        }
    }
}
