### Process Tick-by-Tick Market Data in Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Methods to handle real-time tick-by-tick updates for bid/ask, last trade, and mid-point data. These functions update the internal ticker state and append new tick objects to the ticker's history.

```python
def tickByTickAllLast(self, reqId: int, tickType: int, time: int, price: float, size: float, tickAttribLast: TickAttribLast, exchange, specialConditions):
    ticker = self.reqId2Ticker.get(reqId)
    if not ticker: return
    ticker.last, ticker.lastSize = price, size
    tick = TickByTickAllLast(tickType, self.lastTime, price, size, tickAttribLast, exchange, specialConditions)
    ticker.tickByTicks.append(tick)
    self.pendingTickers.add(ticker)

def tickByTickBidAsk(self, reqId: int, time: int, bidPrice: float, askPrice: float, bidSize: float, askSize: float, tickAttribBidAsk: TickAttribBidAsk):
    ticker = self.reqId2Ticker.get(reqId)
    if not ticker: return
    ticker.bid, ticker.ask = bidPrice, askPrice
    ticker.bidSize, ticker.askSize = bidSize, askSize
    tick = TickByTickBidAsk(self.lastTime, bidPrice, askPrice, bidSize, askSize, tickAttribBidAsk)
    ticker.tickByTicks.append(tick)
    self.pendingTickers.add(ticker)
```
