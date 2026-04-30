### Manage Network Events and Timeouts

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Methods to synchronize with network updates and manage session timeouts. These functions allow developers to wait for specific events or implement polling loops with timeout constraints.

```python
def waitOnUpdate(self, timeout: float = 0) -> bool:
    if timeout:
        try:
            util.run(asyncio.wait_for(self.updateEvent, timeout))
        except asyncio.TimeoutError:
            return False
    else:
        util.run(self.updateEvent)
    return True

def setTimeout(self, timeout: float = 60):
    self.wrapper.setTimeout(timeout)
```
