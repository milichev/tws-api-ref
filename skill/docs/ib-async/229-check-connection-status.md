### Check Connection Status

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Provides a simple interface to verify if the client is currently connected and ready to process requests.

```python
def isConnected(self) -> bool:
    """Is there an API connection to TWS or IB gateway?"""
    return self.client.isReady()
```
