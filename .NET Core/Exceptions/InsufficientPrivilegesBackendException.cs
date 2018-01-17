using com.contidio.sdk.proto;
using System.Net;

namespace Contidio.Sdk.Exceptions
{
    public class InsufficientPrivilegesBackendException : BackendException
    {
        public InsufficientPrivilegesBackendException()
            : base(BackendErrorCode.INSUFFICIENT_PRIVILEGES, "Insufficient privileges", "InsufficientPrivilegesBackendException", HttpStatusCode.Forbidden)
        {
        }
    }
}
