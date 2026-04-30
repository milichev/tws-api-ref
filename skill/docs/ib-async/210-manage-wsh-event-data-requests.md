### Manage WSH Event Data Requests

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Methods to request and cancel Wall Street Horizon event data subscriptions. These methods require an active Wall Street Horizon subscription.

```python
def cancelWshEventData(self):
    """Cancel active WHS event data."""
    reqId = self.wrapper.wshEventReqId
    if not reqId:
        self._logger.warning("reqWshEventData not active")
    else:
        self.client.cancelWshEventData(reqId)
        self.wrapper.wshEventReqId = 0
```
