### Get All Trades (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves a list of all order trades from the current session. This includes both open and closed trades.

```python
def trades(self) -> list[Trade]:
    """List of all order trades from this session."""
    return list(self.wrapper.trades.values())
```
