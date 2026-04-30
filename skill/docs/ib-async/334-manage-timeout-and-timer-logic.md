### Manage Timeout and Timer Logic

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Handles asynchronous timeout logic using loop call_later. It calculates delays based on the last activity time and emits events when timeouts occur.

```python
def _setTimer(self, delay: float = 0):
    if self.lastTime == datetime.min:
        return
    now = datetime.now(self.defaultTimezone)
    diff = (now - self.lastTime).total_seconds()
    if not delay:
        delay = self._timeout - diff
    if delay > 0:
        loop = getLoop()
        self._timeoutHandle = loop.call_later(delay, self._setTimer)
    else:
        self._logger.debug("Timeout")
        self.setTimeout(0)
        self.ib.timeoutEvent.emit(diff)
```
