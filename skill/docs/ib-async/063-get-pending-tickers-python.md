### Get Pending Tickers (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves a list of tickers that have pending updates, including those with pending ticks or depth of market (DOM) ticks.

```python
def pendingTickers(self) -> list[Ticker]:
    """Get a list of all tickers that have pending ticks or domTicks."""
    return list(self.wrapper.pendingTickers)
```
