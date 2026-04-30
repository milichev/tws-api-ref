### Handle Historical Ticks Bid/Ask (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Processes historical bid and ask ticks, appending them to the results list for the given request ID. The 'done' flag indicates the completion of the data stream for this request.

```python
def historicalTicksBidAsk(
        self, reqId: int, ticks: list[HistoricalTickBidAsk], done: bool
    ):
        result = self._results.get(reqId)
        if result is not None:
            result += ticks

        if done:
            self._endReq(reqId)
```
