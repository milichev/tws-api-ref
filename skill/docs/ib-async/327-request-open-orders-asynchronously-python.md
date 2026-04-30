### Request Open Orders Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Fetches currently open orders asynchronously. This method returns a future that will resolve with a list of `Trade` objects representing the open orders.

```python
def reqOpenOrdersAsync(self) -> Awaitable[list[Trade]]:
    future = self.wrapper.startReq("openOrders")
    self.client.reqOpenOrders()
    return future
```
