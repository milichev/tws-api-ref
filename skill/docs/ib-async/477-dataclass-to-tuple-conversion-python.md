### Dataclass to Tuple Conversion (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Converts a dataclass instance into a tuple. This is a non-recursive variant, similar to dataclasses.astuple. Raises a TypeError if the input is not a dataclass. Useful for ordered data extraction from dataclasses.

```python
def dataclassAsTuple(obj) -> tuple[Any, ...]:
    """
    Return dataclass values as ``tuple``.
    This is a non-recursive variant of ``dataclasses.astuple``.
    """
    if not is_dataclass(obj):
        raise TypeError(f"Object {obj} is not a dataclass")

    return tuple(getattr(obj, field.name) for field in fields(obj))

```
