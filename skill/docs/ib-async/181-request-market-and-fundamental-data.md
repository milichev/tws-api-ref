### Request Market and Fundamental Data

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Utility methods for fetching head timestamps, market depth exchanges, histogram data, and fundamental reports asynchronously.

```python
async def reqHeadTimeStampAsync(self, contract, whatToShow, useRTH, formatDate) -> datetime.datetime:
    reqId = self.client.getReqId()
    future = self.wrapper.startReq(reqId, contract)
    self.client.reqHeadTimeStamp(reqId, contract, whatToShow, useRTH, formatDate)
    await future
    self.client.cancelHeadTimeStamp(reqId)
    return future.result()

def reqFundamentalDataAsync(self, contract, reportType, fundamentalDataOptions=[]) -> Awaitable[str]:
    reqId = self.client.getReqId()
    future = self.wrapper.startReq(reqId, contract)
    self.client.reqFundamentalData(reqId, contract, reportType, fundamentalDataOptions)
    return future
```
