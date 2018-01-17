using com.contidio.sdk.proto;
using System.Net;

namespace Contidio.Sdk.Exceptions
{
    public class PostponeExecutionBackendException : BackendException
    {
        public PostponeExecutionBackendException()
            : base(BackendErrorCode.POSTPONE_EXECUTION, "Please try later", "PostponeExecutionBackendException", HttpStatusCode.NotAcceptable)
        {
        }
    }
}
