### Request Account Updates Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Initiates an asynchronous request for account updates. It takes an account identifier and returns a future. The `True` argument typically signifies enabling updates.

```python
def reqAccountUpdatesAsync(self, account: str) -> Awaitable[None]:
    future = self.wrapper.startReq("accountValues")
    self.client.reqAccountUpdates(True, account)
    return future
```
