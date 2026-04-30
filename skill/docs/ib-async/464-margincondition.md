### MarginCondition

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents a margin-based order condition. Allows setting conditions based on a percentage of margin.

```APIDOC
## MarginCondition

### Description
Represents a margin-based order condition.

### Attributes
- `condType` (int): Condition type (default: 4).
- `conjunction` (str): Conjunction type (default: 'a').
- `isMore` (bool): Whether the condition is 'greater than' the specified percentage (default: True).
- `percent` (int): The margin percentage threshold (default: 0).

### Methods
- `dict()`: Returns dataclass values as a dictionary.
- `nonDefaults()`: Returns fields that differ from default values as a dictionary.
- `tuple()`: Returns dataclass values as a tuple.
- `update(*srcObjs, **kwargs)`: Updates fields from source objects or keyword arguments.
```
