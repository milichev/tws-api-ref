### Patch Asyncio for Nested Loops

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Applies the `nest_asyncio` patch to the asyncio library, enabling the execution of nested event loops. This is particularly useful in environments like Jupyter notebooks or when integrating asyncio with other frameworks that might already be running an event loop.

```python
[docs]
def patchAsyncio():
    """Patch asyncio to allow nested event loops."""
    import nest_asyncio

    nest_asyncio.apply()
```
