### Request WSH Metadata - Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Requests Watchlist & Scanner (WSH) metadata. This function is part of the IB API client and requires a request ID.

```python
def reqWshMetaData(self, reqId):
        self.send(100, reqId)
```
