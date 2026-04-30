### Request Historical Ticks Data - Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Initiates a request for historical tick data. This function is part of the IB API client and requires a request ID, contract, date range, number of ticks, show type, use RTH flag, ignore size flag, and miscellaneous options.

```python
def reqHistoricalTicks(
        self,
        reqId,
        contract,
        startDateTime,
        endDateTime,
        numberOfTicks,
        whatToShow,
        useRth,
        ignoreSize,
        miscOptions,
    ):
        self.send(
            96,
            reqId,
            contract,
            contract.includeExpired,
            startDateTime,
            endDateTime,
            numberOfTicks,
            whatToShow,
            useRth,
            ignoreSize,
            miscOptions,
        )
```
