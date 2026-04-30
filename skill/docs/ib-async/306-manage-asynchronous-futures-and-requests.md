### Manage Asynchronous Futures and Requests

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Methods to handle the lifecycle of asynchronous requests using asyncio.Future objects. It supports tracking request IDs, mapping them to contracts, and resolving futures upon completion.

```python
def _endReq(self, key, result=None, success=True):
    future = self._futures.pop(key, None)
    self._reqId2Contract.pop(key, None)
    if future:
        if result is None:
            result = self._results.pop(key, [])
        if not future.done():
            if success:
                future.set_result(result)
            else:
                future.set_exception(result)
```
