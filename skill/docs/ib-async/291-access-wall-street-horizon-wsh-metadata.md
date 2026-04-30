### Access Wall Street Horizon (WSH) Metadata

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Methods to request and cancel Wall Street Horizon metadata. Note that metadata must be requested before attempting to fetch specific event data.

```python
def reqWshMetaData(self):
    if self.wrapper.wshMetaReqId:
        self._logger.warning("reqWshMetaData already active")
    else:
        reqId = self.client.getReqId()
        self.wrapper.wshMetaReqId = reqId
        self.client.reqWshMetaData(reqId)

def cancelWshMetaData(self):
    reqId = self.wrapper.wshMetaReqId
    if not reqId:
        self._logger.warning("reqWshMetaData not active")
    else:
        self.client.cancelWshMetaData(reqId)
        self.wrapper.wshMetaReqId = 0
```
