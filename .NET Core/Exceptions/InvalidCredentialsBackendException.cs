using com.contidio.sdk.proto;
using System.Net;

namespace Contidio.Sdk.Exceptions
{
    public class InvalidCredentialsBackendException : BackendException
    {
        public InvalidCredentialsBackendException()
            : base(BackendErrorCode.INVALID_CREDENTIALS, "Invalid credentials", "InvalidCredentialsBackendException", HttpStatusCode.Unauthorized)
        {
        }
    }
}
