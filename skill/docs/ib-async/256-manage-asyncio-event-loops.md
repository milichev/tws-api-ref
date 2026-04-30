### Manage Asyncio Event Loops

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Functions to ensure a valid asyncio event loop is running. This includes logic to replace closed loops and initialize nested loops for environments like Jupyter notebooks.

```python
if loop.is_closed():
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)

def startLoop():
    """Use nested asyncio event loop for Jupyter notebooks."""
    patchAsyncio()
```
