### Get All Tickers (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves a list of all available ticker objects. This includes tickers for all contracts for which market data has been requested.

```python
def tickers(self) -> list[Ticker]:
    """Get a list of all tickers."""
    return list(self.wrapper.tickers.values())
```
