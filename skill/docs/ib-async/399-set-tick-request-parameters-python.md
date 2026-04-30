### Set Tick Request Parameters (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Sets specific parameters for a tick request, including minimum tick size, the BBO exchange, and snapshot permissions. This function retrieves the relevant ticker object using the request ID and updates its properties directly.

```python
def tickReqParams(self, reqId: int, minTick: float, bboExchange: str, snapshotPermissions: int):
    ticker = self.reqId2Ticker.get(reqId)
    if not ticker:
        return

    ticker.minTick = minTick
    ticker.bboExchange = bboExchange
    ticker.snapshotPermissions = snapshotPermissions
```
