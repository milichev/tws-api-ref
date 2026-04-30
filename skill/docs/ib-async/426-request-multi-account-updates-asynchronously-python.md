### Request Multi-Account Updates Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Requests updates for multiple accounts asynchronously, allowing for an optional model code. It generates a request ID and returns a future representing the operation's outcome.

```python
def reqAccountUpdatesMultiAsync(
    self, account: str, modelCode: str = ""
) -> Awaitable[None]:
    reqId = self.client.getReqId()
    future = self.wrapper.startReq(reqId)
    self.client.reqAccountUpdatesMulti(reqId, account, modelCode, False)
    return future
```
