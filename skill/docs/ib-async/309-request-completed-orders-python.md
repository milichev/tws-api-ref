### Request Completed Orders (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Requests and returns a list of completed trades. It accepts a boolean argument to filter for API-only orders.

```python
def reqCompletedOrders(self, apiOnly: bool) -> list[Trade]:
        """
        Request and return a list of completed trades.

        Args:
            apiOnly: Request only API orders (not manually placed TWS orders).
        """
        return self._run(self.reqCompletedOrdersAsync(apiOnly))
```
