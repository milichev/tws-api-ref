### Request Historical News Data - Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Initiates a request for historical news data. Requires connection to the IB API. Parameters include request ID, contract details, date range, total results, and historical news options.

```python
def reqHistoricalNews(
        self,
        reqId,
        conId,
        providerCodes,
        startDateTime,
        endDateTime,
        totalResults,
        historicalNewsOptions,
    ):
        self.send(
            86,
            reqId,
            conId,
            providerCodes,
            startDateTime,
            endDateTime,
            totalResults,
            historicalNewsOptions,
        )
```
