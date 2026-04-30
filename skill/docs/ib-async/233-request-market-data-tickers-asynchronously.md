### Request Market Data Tickers Asynchronously

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously requests market data tickers for a list of contracts. It manages request IDs, initiates asynchronous requests for ticker data, and collects the ticker information. Supports regulatory snapshot requests.

```python
async def reqTickersAsync(
        self, *contracts: Contract, regulatorySnapshot: bool = False
    ) -> list[Ticker]:
        futures = []
        tickers = []
        reqIds = []
        for contract in contracts:
            reqId = self.client.getReqId()
            reqIds.append(reqId)
            future = self.wrapper.startReq(reqId, contract)
            futures.append(future)
            ticker = self.wrapper.startTicker(reqId, contract, "snapshot")
            tickers.append(ticker)
            self.client.reqMktData(reqId, contract, "", True, regulatorySnapshot, [])

        await asyncio.gather(*futures)

        for ticker in tickers:
            self.wrapper.endTicker(ticker, "snapshot")

        return tickers
```
