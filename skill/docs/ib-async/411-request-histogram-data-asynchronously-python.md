### Request Histogram Data Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously fetches histogram data for a contract, specifying the period and whether to use RTH. Returns an Awaitable resolving to a list of HistogramData objects.

```python
reqHistogramDataAsync(_contract_ , _useRTH_ , _period_)
```
