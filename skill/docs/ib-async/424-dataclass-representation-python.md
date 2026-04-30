### Dataclass Representation (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Generates a concise string representation for a dataclass instance, showing only fields with non-default values. This helps in creating cleaner logs and debugging output. Raises a TypeError if the input is not a dataclass.

```python
def dataclassRepr(obj) -> str:
    """
    Provide a culled representation of the given ``dataclass`` instance,
    showing only the fields with a non-default value.
    """
    attrs = dataclassNonDefaults(obj)
    clsName = obj.__class__.__qualname__
    kwargs = ", ".join(f"{k}={v!r}" for k, v in attrs.items())
    return f"{clsName}({kwargs})"

```
