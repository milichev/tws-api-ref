### Order Condition Base Class Methods (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Provides methods for converting dataclass instances to dictionaries, retrieving non-default fields, converting to tuples, and updating object fields. These methods are common across various order condition types.

```Python
class OrderCondition:
    # ... (other methods and attributes)

    def dict(self) -> dict:
        """
        Return dataclass values as `dict`. This is a non-recursive variant of `dataclasses.asdict`.
        """
        pass

    def nonDefaults(self) -> dict[str, Any]:
        """
        For a `dataclass` instance get the fields that are different from the default values and return as `dict`.
        """
        pass

    def tuple(self) -> tuple:
        """
        Return dataclass values as `tuple`. This is a non-recursive variant of `dataclasses.astuple`.
        """
        pass

    def update(self, *srcObjs, **kwargs):
        """
        Update fields of the given `dataclass` object from zero or more `dataclass` source objects and/or from keyword arguments.
        """
        pass
```
