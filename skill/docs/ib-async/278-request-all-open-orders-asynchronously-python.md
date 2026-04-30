### Request All Open Orders Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves all open orders asynchronously, potentially including those not typically shown. It returns a future that resolves to a list of `Trade` objects.

```python
def reqAllOpenOrdersAsync(self) -> Awaitable[list[Trade]]:
    future = self.wrapper.startReq("openOrders")
    self.client.reqAllOpenOrders()
    return future
```
