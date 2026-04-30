### TimeCondition

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents a time-based order condition. Allows setting conditions based on a specific time.

```APIDOC
## TimeCondition

### Description
Represents a time-based order condition.

### Attributes
- `condType` (int): Condition type (default: 3).
- `conjunction` (str): Conjunction type (default: 'a').
- `isMore` (bool): Whether the condition is 'after' the specified time (default: True).
- `time` (str): The time threshold (default: '').

### Methods
- `dict()`: Returns dataclass values as a dictionary.
- `nonDefaults()`: Returns fields that differ from default values as a dictionary.
- `tuple()`: Returns dataclass values as a tuple.
- `update(*srcObjs, **kwargs)`: Updates fields from source objects or keyword arguments.
```
