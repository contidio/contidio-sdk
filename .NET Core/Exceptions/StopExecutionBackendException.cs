using com.contidio.sdk.proto;
using System.Net;

namespace Contidio.Sdk.Exceptions
{
    public class StopExecutionBackendException : BackendException
    {
        public StopExecutionBackendException()
            : base(BackendErrorCode.STOP_EXECUTION, "Abandon this task", "StopExecutionBackendException", HttpStatusCode.NotAcceptable)
        {
        }
    }
}
