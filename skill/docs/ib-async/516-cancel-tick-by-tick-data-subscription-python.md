### Cancel Tick-by-Tick Data Subscription (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Unsubscribes from tick-by-tick data for a given contract and tick type. Returns True if the cancellation was successful, and False if the contract was not found. Requires the Contract and tickType of the subscription to cancel.

```python
def cancelTickByTickData(self, contract: Contract, tickType: str) -> bool:
    """
    Unsubscribe from tick-by-tick data

    Args:
        contract: The contract of a previously subscribed ticker to unsubscribe.

    Returns:
        Returns True if cancel was successful.
        Returns False if 'contract' was not found.
    """
    ticker = self.ticker(contract)
    reqId = self.wrapper.endTicker(ticker, tickType) if ticker else 0

    if reqId:
        self.client.cancelTickByTickData(reqId)
        return True

    self._logger.error(f"cancelMktData: No reqId found for contract {contract}")
    return False
```
