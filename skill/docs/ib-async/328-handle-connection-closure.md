### Handle Connection Closure

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Manages the cleanup process when a socket connection is lost. It marks all pending futures as failed with a ConnectionError and triggers a full state reset.

```python
def connectionClosed(self):
	error = ConnectionError("Socket disconnect")
	for future in self._futures.values():
		if not future.done():
			future.set_exception(error)

	globalErrorEvent.emit(error)
	self.reset()
```
