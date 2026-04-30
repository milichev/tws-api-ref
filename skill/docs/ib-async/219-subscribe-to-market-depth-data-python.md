### Subscribe to Market Depth Data (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Subscribes to market depth data, also known as DOM, L2, or order book. It takes a contract, number of rows, and smart depth option as input. Returns a Ticker object containing bid and ask data.

```python
def reqMktDepth(
        self,
        contract: Contract,
        numRows: int = 5,
        isSmartDepth: bool = False,
        mktDepthOptions=None,
    ) -> Ticker:
        """
        Subscribe to market depth data (a.k.a. DOM, L2 or order book).

        https://interactivebrokers.github.io/tws-api/market_depth.html

        Args:
            contract: Contract of interest.
            numRows: Number of depth level on each side of the order book
                (5 max).
            isSmartDepth: Consolidate the order book across exchanges.
            mktDepthOptions: Unknown.

        Returns:
            The Ticker that holds the market depth in ``ticker.domBids``
            and ``ticker.domAsks`` and the list of MktDepthData in
            ``ticker.domTicks``.
        """
        reqId = self.client.getReqId()
        ticker = self.wrapper.startTicker(reqId, contract, "mktDepth")
        ticker.domBids.clear()
        ticker.domAsks.clear()
        ticker.domBidsDict.clear()
        ticker.domAsksDict.clear()
        self.client.reqMktDepth(reqId, contract, numRows, isSmartDepth, mktDepthOptions)
        return ticker
```
