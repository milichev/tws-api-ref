### Order Dataclass Utility Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Common utility methods implemented across order classes to handle data conversion and state management. These methods allow for exporting order data to dictionaries or tuples and updating order fields dynamically.

```python
def dict(self):
    """Return dataclass values as dict. Non-recursive variant of dataclasses.asdict."""
    return {k: v for k, v in self.__dict__.items()}

def nonDefaults(self):
    """Get fields that are different from default values."""
    return {k: v for k, v in self.__dict__.items() if v != self.__class__.__dict__.get(k)}

def update(self, *srcObjs, **kwargs):
    """Update fields from source objects or keyword arguments."""
    for obj in srcObjs:
        self.__dict__.update(obj.__dict__)
    self.__dict__.update(kwargs)
    return self
```
