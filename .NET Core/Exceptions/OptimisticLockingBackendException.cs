using com.contidio.sdk.proto;
using System.Net;

namespace Contidio.Sdk.Exceptions
{
    public class OptimisticLockingBackendException : BackendException
    {
        public OptimisticLockingBackendException(long l, long m)
            : base(BackendErrorCode.OPTIMISTIC_LOCKING_FAILED,
				"The optimistic locking versions are different (" + l + 
					" - " + m + ")",
                "OptimisticLockingBackendException", 
                HttpStatusCode.Conflict)
        {
        }

        public OptimisticLockingBackendException(string message)
            : base(BackendErrorCode.OPTIMISTIC_LOCKING_FAILED, message, "OptimisticLockingBackendException", HttpStatusCode.Conflict)
        {
        }
    }
}
