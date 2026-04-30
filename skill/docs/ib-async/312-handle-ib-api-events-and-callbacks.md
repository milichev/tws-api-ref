### Handle IB API Events and Callbacks

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

A collection of methods to process incoming API messages such as news bulletins, market data ticks (EFP), historical schedules, and system errors. These methods update internal state objects and emit events to the main application loop.

```python
def updateNewsBulletin(self, msgId: int, msgType: int, message: str, origExchange: str):
    bulletin = NewsBulletin(msgId, msgType, message, origExchange)
    self.msgId2NewsBulletin[msgId] = bulletin
    self.ib.newsBulletinEvent.emit(bulletin)

def tickEFP(self, reqId: int, tickType: int, basisPoints: float, formattedBasisPoints: str, totalDividends: float, holdDays: int, futureLastTradeDate: str, dividendImpact: float, dividendsToLastTradeDate: float):
    ticker = self.reqId2Ticker.get(reqId)
    if not ticker:
        return
    efpData = EfpData(basisPoints=basisPoints, formattedBasisPoints=formattedBasisPoints, impliedFuture=totalDividends, holdDays=holdDays, futureLastTradeDate=futureLastTradeDate, dividendImpact=dividendImpact, dividendsToLastTradeDate=dividendsToLastTradeDate)
    if tickType in EFP_TICK_MAP:
        setattr(ticker, EFP_TICK_MAP[tickType], efpData)
        self.pendingTickers.add(ticker)

def error(self, reqId: int, errorCode: int, errorString: str, advancedOrderRejectJson: str):
    isRequest = reqId in self._futures
    trade = self.trades.get((self.clientId, reqId)) if reqId != -1 else None
    warningCodes = frozenset({105, 110, 165, 321, 329, 399, 404, 434, 492, 10167})
    isWarning = errorCode in warningCodes or 2100 <= errorCode < 2200
    msg = f"{'Warning' if isWarning else 'Error'} {errorCode}, reqId {reqId}: {errorString}"
    # ... logic for handling specific error codes
```
