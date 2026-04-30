### Handle Fundamental Data (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Processes fundamental data received for a given request ID. It calls an internal method to end the request and return the data.

```python
def fundamentalData(self, reqId: int, data: str):
        self._endReq(reqId, data)
```
