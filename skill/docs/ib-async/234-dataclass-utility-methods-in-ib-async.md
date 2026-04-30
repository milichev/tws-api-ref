### Dataclass Utility Methods in ib_async

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Standardized methods implemented across ib_async dataclasses to facilitate data conversion and object updates. These methods allow for non-recursive serialization and partial field updates.

```python
def dict(self) -> dict:
    """Return dataclass values as dict. Non-recursive variant of dataclasses.asdict."""
    pass

def nonDefaults(self) -> dict[str, Any]:
    """Get fields that are different from the default values and return as dict."""
    pass

def tuple(self) -> tuple[Any, ...]:
    """Return dataclass values as tuple. Non-recursive variant of dataclasses.astuple."""
    pass

def update(self, *srcObjs, **kwargs) -> object:
    """Update fields from zero or more source objects and/or keyword arguments."""
    pass
```
