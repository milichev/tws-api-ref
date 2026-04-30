### Request Open Orders (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Requests and returns a list of open orders. This method may provide stale information and it is recommended to use `.openTrades` or `.openOrders` instead. This method is blocking.

```python
def reqOpenOrders(self) -> list[Trade]:
        """
        Request and return a list of open orders.

        This method can give stale information where a new open order is not
        reported or an already filled or cancelled order is reported as open.
        It is recommended to use the more reliable and much faster
        :meth:`.openTrades` or :meth:`.openOrders` methods instead.

        This method is blocking.
        """
        return self._run(self.reqOpenOrdersAsync())
```
