### Request PnL Data - Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Initiates a request for Profit and Loss (PnL) data. This function is part of the IB API client and requires a request ID, account identifier, and model code.

```python
def reqPnL(self, reqId, account, modelCode):
        self.send(92, reqId, account, modelCode)
```
