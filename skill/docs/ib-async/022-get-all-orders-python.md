### Get All Orders (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves a list of all orders placed during the current session. This includes both open and closed orders.

```python
def orders(self) -> list[Order]:
    """List of all orders from this session."""
    return list(trade.order for trade in self.wrapper.trades.values())
```
