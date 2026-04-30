### Request Historical Data Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Initiates an asynchronous request for historical market data. This method requires contract details, date/time range, bar size, data to show, and RTH (Regular Trading Hours) flag. The return type is an `Awaitable` that resolves to historical data.

```python
async def reqHistoricalDataAsync(
    self,
    contract: Contract,
    endDateTime: datetime.datetime | datetime.date | str | None,
    durationStr: str,
    barSizeSetting: str,
    whatToShow: str,
    useRTH: bool,

```
