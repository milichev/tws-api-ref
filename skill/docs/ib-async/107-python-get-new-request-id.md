### Python: Get New Request ID

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Generates and returns a unique request ID for outgoing API requests. It ensures that the client is connected before generating a new ID and increments an internal sequence counter.

```python
def getReqId(self) -> int:
        """Get new request ID."""
        if not self.isReady():
            raise ConnectionError("Not connected")

        newId = self._reqIdSeq
        self._reqIdSeq += 1
        return newId
```
