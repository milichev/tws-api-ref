### Run Event Loop

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Manages the execution of the asyncio event loop. By default, it runs indefinitely. It can also run until specified awaitables (Tasks, Futures, or coroutines) complete, with an optional timeout to prevent indefinite waiting.

```python
_static _run(_*_, _timeout=None_)
```
