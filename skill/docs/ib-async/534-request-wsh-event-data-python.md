### Request WSH Event Data - Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Requests Watchlist & Scanner (WSH) event data. This function is part of the IB API client and requires a request ID and WshEventData object. Conditional parameters are added based on server version.

```python
def reqWshEventData(self, reqId, data: WshEventData):
        fields = [102, reqId, data.conId]
        if self.serverVersion() >= 171:
            fields += [
                data.filter,
                data.fillWatchlist,
                data.fillPortfolio,
                data.fillCompetitors,
            ]
        if self.serverVersion() >= 173:
            fields += [data.startDate, data.endDate, data.totalLimit]
        self.send(*fields, makeEmpty=False)
```
