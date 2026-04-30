### RequestError Exception for IB API Errors (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Defines a custom exception `RequestError` for handling errors reported by the IB API that are specific to a single request. It stores the request ID, error code, and message for detailed error reporting.

```Python
class RequestError(Exception):
    """Exception to raise when the API reports an error that can be tied to
    a single request.
    """

    def __init__(self, reqId: int, code: int, message: str):
        """
        Args:
          reqId: Original request ID.
          code: Original error code.
          message: Original error message.
        """
        super().__init__(f"[reqId {reqId}] API error: {code}: {message}")
        self.reqId = reqId
        self.code = code
        self.message = message
```
