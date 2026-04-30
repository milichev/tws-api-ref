### Request Global Cancel (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Initiates a global cancellation request for all active trades, including those managed by other clients or TWS/IB gateway. It logs the action after the request is made.

```python
def reqGlobalCancel(self):
        """
        Cancel all active trades including those placed by other
        clients or TWS/IB gateway.
        """
        self.client.reqGlobalCancel()
        self._logger.info("reqGlobalCancel")
```
