### Cancel Market Data Subscription (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Unsubscribes from real-time streaming tick data for a previously subscribed ticker. It returns True if the cancellation was successful, and False if the contract was not found. Requires the Contract object of the ticker to unsubscribe.

```python
def cancelMktData(self, contract: Contract) -> bool:
    """
    Unsubscribe from realtime streaming tick data.

    Args:
        contract: The contract of a previously subscribed ticker to unsubscribe.

    Returns:
        Returns True if cancel was successful.
        Returns False if 'contract' was not found.
    """
    ticker = self.ticker(contract)
    reqId = self.wrapper.endTicker(ticker, "mktData") if ticker else 0

    if reqId:
        self.client.cancelMktData(reqId)
        return True

    self._logger.error(f"cancelMktData: No reqId found for contract {contract}")

    return False
```
