### Handle Ticker Subscriptions

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Functions to initiate and terminate market data ticker subscriptions. These methods manage the mapping between request IDs, contract objects, and ticker instances.

```python
def startTicker(self, reqId: int, contract: Contract, tickType: int | str):
    ticker = self.tickers.get(hash(contract))
    if not ticker:
        ticker = Ticker(contract=contract, defaults=self.defaults)
        self.tickers[hash(contract)] = ticker
    self.reqId2Ticker[reqId] = ticker
    self._reqId2Contract[reqId] = contract
    self.ticker2ReqId[tickType][ticker] = reqId
    return ticker

def endTicker(self, ticker: Ticker, tickType: int | str):
    reqId = self.ticker2ReqId[tickType].pop(ticker, 0)
    self._reqId2Contract.pop(reqId, None)
    return reqId
```
