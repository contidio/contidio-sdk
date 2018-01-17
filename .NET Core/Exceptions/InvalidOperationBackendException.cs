using com.contidio.sdk.proto;
using System.Net;

namespace Contidio.Sdk.Exceptions
{
    public class InvalidOperationBackendException : BackendException
    {
        public InvalidOperationBackendException(BackendErrorCode errorCode, string message)
            : base(errorCode, message, "InvalidOperationBackendException", HttpStatusCode.BadRequest)
        {
        }
    }
}
