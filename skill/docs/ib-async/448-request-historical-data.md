### Request Historical Data

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Requests historical market data for a contract. It supports complex contract types like 'BAG' by appending combo leg details to the request fields.

```python
def reqHistoricalData(
    self,
    reqId,
    contract,
    endDateTime,
    durationStr,
    barSizeSetting,
    whatToShow,
    useRTH,
    formatDate,
    keepUpToDate,
    chartOptions,
):
    fields = [
        20,
        reqId,
        contract,
        contract.includeExpired,
        endDateTime,
        barSizeSetting,
        durationStr,
        useRTH,
        whatToShow,
        formatDate,
    ]

    if contract.secType == "BAG":
        legs = contract.comboLegs or []
        fields += [len(legs)]
        for leg in legs:
            fields += [leg.conId, leg.ratio, leg.action, leg.exchange]

    fields += [keepUpToDate, chartOptions]
    self.send(*fields)
```
