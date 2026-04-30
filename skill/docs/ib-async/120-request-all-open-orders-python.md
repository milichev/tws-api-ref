### Request All Open Orders (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Requests and returns a list of all open orders across all clients. Orders from other clients are not kept in sync; use the master clientId mechanism for synchronized order visibility.

```python
def reqAllOpenOrders(self) -> list[Trade]:
        """
        Request and return a list of all open orders over all clients.
        Note that the orders of other clients will not be kept in sync,
        use the master clientId mechanism instead to see other
        client's orders that are kept in sync.
        """
        return self._run(self.reqAllOpenOrdersAsync())
```
