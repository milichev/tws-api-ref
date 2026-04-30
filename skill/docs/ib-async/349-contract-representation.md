### Contract Representation

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Defines the string representation for Contract objects, including subclasses. It provides a clear and informative output for debugging and logging.

```python
    def __repr__(self):
        attrs = util.dataclassNonDefaults(self)

        if self.__class__ is not Contract:
            attrs.pop("secType", "")

        clsName = self.__class__.__qualname__
        kwargs = ", ".join(f"{k}={v!r}" for k, v in attrs.items())

        return f"{clsName}({kwargs})"

    __str__ = __repr__
```
