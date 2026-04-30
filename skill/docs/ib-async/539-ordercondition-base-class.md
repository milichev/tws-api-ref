### OrderCondition Base Class

Source: https://ib-api-reloaded.github.io/ib_async/api.html

The base class for all order conditions. It provides common methods for converting condition data to dictionaries or tuples, and for updating condition fields.

```APIDOC
## OrderCondition

### Description
Base class for order conditions. Provides methods for data conversion and updates.

### Methods
- `dict()`: Returns dataclass values as a dictionary.
- `nonDefaults()`: Returns fields that differ from default values as a dictionary.
- `tuple()`: Returns dataclass values as a tuple.
- `update(*srcObjs, **kwargs)`: Updates fields from source objects or keyword arguments.
```
