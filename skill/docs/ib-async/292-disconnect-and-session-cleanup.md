### Disconnect and Session Cleanup

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Handles the graceful disconnection from the IB API, including logging connection statistics, resetting the internal wrapper state, and emitting a disconnection event.

```python
def disconnect(self) -> str | None:
    if not self.client.isConnected():
        return None
    stats = self.client.connectionStats()
    self._logger.info(f"Disconnecting... {stats}")
    self.client.disconnect()
    self.disconnectedEvent.emit()
    self.wrapper.reset()
    return status
```
