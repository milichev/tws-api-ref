### Request Completed Orders - Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Retrieves a list of completed orders. This function is part of the IB API client and takes a flag indicating whether to retrieve API-only orders.

```python
def reqCompletedOrders(self, apiOnly):
        self.send(99, apiOnly)
```
