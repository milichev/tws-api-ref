### Request Account Summary Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Initiates an asynchronous request for detailed account summary information. It generates a request ID and returns a future. The method specifies a comprehensive list of tags to retrieve for account summaries.

```python
def reqAccountSummaryAsync(self) -> Awaitable[None]:
    reqId = self.client.getReqId()
    future = self.wrapper.startReq(reqId)
    tags = (
        "AccountType,NetLiquidation,TotalCashValue,SettledCash,"
        "AccruedCash,BuyingPower,EquityWithLoanValue,"
        "PreviousDayEquityWithLoanValue,GrossPositionValue,RegTEquity,"
        "RegTMargin,SMA,InitMarginReq,MaintMarginReq,AvailableFunds,"
        "ExcessLiquidity,Cushion,FullInitMarginReq,FullMaintMarginReq,"
        "FullAvailableFunds,FullExcessLiquidity,LookAheadNextChange,"
        "LookAheadInitMarginReq,LookAheadMaintMarginReq,"
        "LookAheadAvailableFunds,LookAheadExcessLiquidity,"
        "HighestSeverity,DayTradesRemaining,DayTradesRemainingT+1,"
        "DayTradesRemainingT+2,DayTradesRemainingT+3,"
        "DayTradesRemainingT+4,Leverage,$LEDGER:ALL"
    )
    self.client.reqAccountSummary(reqId, "All", tags)
    return future
```
