### Unsubscribe from Market Depth Data (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Unsubscribes from market depth data. Requires the contract object that was used for subscription. It cancels the market data request and clears the associated ticker data.

```python
def cancelMktDepth(self, contract: Contract, isSmartDepth=False):
        """
        Unsubscribe from market depth data.

        Args:
            contract: The exact contract object that was used to
                subscribe with.
        """
        ticker = self.ticker(contract)
        reqId = self.wrapper.endTicker(ticker, "mktDepth") if ticker else 0
        if ticker and reqId:
            self.client.cancelMktDepth(reqId, isSmartDepth)

            # clear market depth state from live ticker since it is not longer
            # being updated after the cancel request.
            ticker.domBids.clear()
            ticker.domAsks.clear()
            ticker.domBidsDict.clear()
            ticker.domAsksDict.clear()
        else:
            self._logger.error(
                f"cancelMktDepth: No reqId found for contract {contract}"
            )
```
