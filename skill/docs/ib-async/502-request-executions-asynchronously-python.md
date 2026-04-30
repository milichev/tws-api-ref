### Request Executions Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves execution details asynchronously, optionally filtered by `ExecutionFilter`. It generates a request ID and returns a future that resolves to a list of `Fill` objects.

```python
def reqExecutionsAsync(
    self,
    execFilter: ExecutionFilter | None = None
) -> Awaitable[list[Fill]]:
    execFilter = execFilter or ExecutionFilter()
    reqId = self.client.getReqId()
    future = self.wrapper.startReq(reqId)
    self.client.reqExecutions(reqId, execFilter)
    return future
```
