### Process Histogram Data (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Handles histogram data received for a request. It creates a new list of HistogramData objects and ends the request with the processed data.

```python
def histogramData(self, reqId: int, items: list[HistogramData]):
        result = [HistogramData(item.price, item.count) for item in items]
        self._endReq(reqId, result)
```
