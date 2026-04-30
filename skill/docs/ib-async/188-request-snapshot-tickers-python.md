### Request Snapshot Tickers (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Requests and returns a list of snapshot tickers for the specified contracts. This method is blocking and returns only when all requested tickers are ready. It can optionally request regulatory snapshots which may incur a fee.

```python
def reqTickers(self, *contracts: Contract, regulatorySnapshot: bool = False) -> list[Ticker]:
    """
    Request and return a list of snapshot tickers.
    The list is returned when all tickers are ready.

    This method is blocking.

    Args:
        contracts: Contracts to get tickers for.
        regulatorySnapshot: Request NBBO snapshots (may incur a fee).
    """
    return self._run(self.reqTickersAsync(*contracts, regulatorySnapshot=regulatorySnapshot))
```
