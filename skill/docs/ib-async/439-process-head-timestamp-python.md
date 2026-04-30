### Process Head Timestamp (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Retrieves the head timestamp for historical data requests. It parses the timestamp string into a datetime object and ends the request, returning the datetime object or an exception if parsing fails.

```python
def headTimestamp(self, reqId: int, headTimestamp: str):
        try:
            dt = parseIBDatetime(headTimestamp)
            self._endReq(reqId, dt)
        except ValueError as exc:
            self._endReq(reqId, exc, False)
```
