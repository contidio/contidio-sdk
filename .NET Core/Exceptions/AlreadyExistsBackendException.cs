using com.contidio.sdk.proto;
using System.Net;

namespace Contidio.Sdk.Exceptions
{
    public class AlreadyExistsBackendException : BackendException
    {
        public AlreadyExistsBackendException(BackendErrorCode errorCode, string message)
            : base(errorCode, message, "AlreadyExistsBackendException", HttpStatusCode.Conflict)
        {
        }
    }
}
