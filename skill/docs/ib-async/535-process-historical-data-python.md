### Process Historical Data (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Appends historical bar data to the results list for a given request ID. It parses the date string from the BarData object into a datetime object before appending.

```python
def historicalData(self, reqId: int, bar: BarData):
        results = self._results.get(reqId)
        if results is not None:
            bar.date = parseIBDatetime(bar.date)  # type: ignore
            results.append(bar)
```
