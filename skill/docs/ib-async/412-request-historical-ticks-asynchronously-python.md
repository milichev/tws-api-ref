### Request Historical Ticks Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously fetches historical tick data for a contract within a specified date/time range. Returns an Awaitable resolving to a list of ticks.

```python
reqHistoricalTicksAsync(_contract_ , _startDateTime_ , _endDateTime_ , _numberOfTicks_ , _whatToShow_ , _useRth_ , _ignoreSize =False_, _miscOptions =[]_)
```
