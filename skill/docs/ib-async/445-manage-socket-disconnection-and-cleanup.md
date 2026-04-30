### Manage Socket Disconnection and Cleanup

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Handles socket disconnection events by logging errors, updating the wrapper state, and emitting API signals. It ensures the connection state is reset and notifies the application of the closure.

```python
def _onSocketDisconnected(self, msg):
    wasReady = self.isReady()
    if not self.isConnected():
        self._logger.info("Disconnected.")
    elif not msg:
        msg = "Peer closed connection."
        if not wasReady:
            msg += f" clientId {self.clientId} already in use?"

    if msg:
        self._logger.error(msg)
        self.apiError.emit(msg)

    self.wrapper.setEventsDone()
    if wasReady:
        self.wrapper.connectionClosed()

    self.reset()

    if wasReady:
        self.apiEnd.emit()
```
