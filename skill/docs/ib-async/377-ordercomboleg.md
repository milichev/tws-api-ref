### OrderComboLeg

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents a leg within an order combo, primarily used for specifying the price of the leg.

```APIDOC
## OrderComboLeg

### Description
Represents a single leg within an order combo (e.g., a spread). It mainly stores the price associated with this specific leg. Utility methods for data conversion are available.

### Properties
- `price` (float): The price of this combo leg.

### Methods
- `dict()`: Converts the order combo leg object to a dictionary.
- `nonDefaults()`: Returns a dictionary of non-default values.
- `tuple()`: Converts the order combo leg object to a tuple.
- `update(**kwargs)`: Updates the order combo leg object with new values.
```
