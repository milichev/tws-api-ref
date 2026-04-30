### Request Historical Data Asynchronously

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves historical bar data for a given contract. It handles request timeouts and optional real-time updates using an asyncio future.

```python
async def reqHistoricalDataAsync(self, contract, endDateTime, durationStr, barSizeSetting, whatToShow, useRTH=True, formatDate=1, keepUpToDate=False, chartOptions=[], timeout=60) -> BarDataList:
    reqId = self.client.getReqId()
    bars = BarDataList()
    future = self.wrapper.startReq(reqId, contract, container=bars)
    if keepUpToDate:
        self.wrapper.startSubscription(reqId, bars, contract)
    end = util.formatIBDatetime(endDateTime)
    self.client.reqHistoricalData(reqId, contract, end, durationStr, barSizeSetting, whatToShow, useRTH, formatDate, keepUpToDate, chartOptions)
    task = asyncio.wait_for(future, timeout) if timeout else future
    try:
        await task
    except asyncio.TimeoutError:
        self.client.cancelHistoricalData(reqId)
        bars.clear()
    return bars
```
