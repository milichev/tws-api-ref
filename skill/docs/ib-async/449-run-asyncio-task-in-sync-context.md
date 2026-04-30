### Run Asyncio Task in Sync Context

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Executes an asyncio task within a synchronous context, handling cancellation and potential errors. It explicitly passes the event loop to `asyncio.ensure_future` to avoid deprecation warnings in Python 3.10+.

```python
        task = asyncio.ensure_future(future, loop=loop)

        def onError(_):
            task.cancel()

        globalErrorEvent.connect(onError)
        try:
            result = loop.run_until_complete(task)
        except asyncio.CancelledError as e:
            raise globalErrorEvent.value() or e
        finally:
            globalErrorEvent.disconnect(onError)

    return result
```
