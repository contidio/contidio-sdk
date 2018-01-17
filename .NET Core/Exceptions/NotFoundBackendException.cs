using com.contidio.sdk.proto;
using System.Net;

namespace Contidio.Sdk.Exceptions
{
    public class NotFoundBackendException : BackendException
    {
        public NotFoundBackendException(BackendErrorCode errorCode, string message)
            : base(errorCode, message, "NotFoundBackendException", HttpStatusCode.NotFound)
        {
        }
    }
}
