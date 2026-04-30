### Initialize and Connect to IB Gateway

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Defines the event initialization, context manager lifecycle methods, and the primary connection method for the IB Async API. The connect method is blocking and handles synchronization with the TWS/Gateway instance.

```python
def __init__(self):
    self.pendingTickersEvent = Event("pendingTickersEvent")
    self.errorEvent = Event("errorEvent")
    # ... additional events

def __enter__(self):
    return self

def __exit__(self, *_exc):
    self.disconnect()

def connect(self, host="127.0.0.1", port=7497, clientId=1, timeout=4, readonly=False, account="", raiseSyncErrors=False, fetchFields=StartupFetchALL):
    return self._run(
        self.connectAsync(host, port, clientId, timeout, readonly, account, raiseSyncErrors, fetchFields)
    )
```
