### Get Ticker by Contract (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves the ticker information for a specific contract. The contract must have been previously requested using reqMktData. The ticker may not be immediately available after requesting market data.

```python
def ticker(self, contract: Contract) -> Ticker | None:
    """
    Get ticker of the given contract. It must have been requested before
    with reqMktData with the same contract object. The ticker may not be
    ready yet if called directly after :meth:`.reqMktData`.

    Args:
        contract: Contract to get ticker for.
    """
    return self.wrapper.tickers.get(hash(contract))
```
