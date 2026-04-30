### Request Historical Schedule and Ticks

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Methods to fetch historical trading schedules and specific tick data for contracts. These methods return an awaitable future that resolves once the data is received.

```python
def reqHistoricalScheduleAsync(self, contract, numDays, endDateTime="", useRTH=True) -> Awaitable[HistoricalSchedule]:
    reqId = self.client.getReqId()
    future = self.wrapper.startReq(reqId, contract)
    end = util.formatIBDatetime(endDateTime)
    self.client.reqHistoricalData(reqId, contract, end, f"{numDays} D", "1 day", "SCHEDULE", useRTH, 1, False, None)
    return future

def reqHistoricalTicksAsync(self, contract, startDateTime, endDateTime, numberOfTicks, whatToShow, useRth, ignoreSize=False, miscOptions=[]) -> Awaitable[list]:
    reqId = self.client.getReqId()
    future = self.wrapper.startReq(reqId, contract)
    start = util.formatIBDatetime(startDateTime)
    end = util.formatIBDatetime(endDateTime)
    self.client.reqHistoricalTicks(reqId, contract, start, end, numberOfTicks, whatToShow, useRth, ignoreSize, miscOptions)
    return future
```
