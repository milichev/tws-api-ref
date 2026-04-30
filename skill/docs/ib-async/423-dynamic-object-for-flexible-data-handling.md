### Dynamic Object for Flexible Data Handling

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/objects.html

A generic class that allows dynamic attribute assignment using keyword arguments during initialization. It provides a flexible way to create objects with arbitrary properties.

```python
class DynamicObject:
    def __init__(self, **kwargs):
        self.__dict__.update(kwargs)

    def __repr__(self):
        clsName = self.__class__.__name__
        kwargs = ", ".join(f"{k}={v!r}" for k, v in self.__dict__.items())
        return f"{clsName}({kwargs})"
```
