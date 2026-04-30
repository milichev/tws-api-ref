### Request Single PnL Data - Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Requests Profit and Loss (PnL) data for a single position. This function is part of the IB API client and requires a request ID, account, model code, and contract ID.

```python
def reqPnLSingle(self, reqId, account, modelCode, conid):
        self.send(94, reqId, account, modelCode, conid)
```
