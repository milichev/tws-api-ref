### Request Completed Orders Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Fetches completed orders asynchronously. It takes a boolean `apiOnly` parameter to filter results and returns a future that resolves to a list of `Trade` objects.

```python
def reqCompletedOrdersAsync(self, apiOnly: bool) -> Awaitable[list[Trade]]:
    future = self.wrapper.startReq("completedOrders")
    self.client.reqCompletedOrders(apiOnly)
    return future
```
