### ExecutionCondition

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents an execution-based order condition. Allows setting conditions based on security type, exchange, and symbol.

```APIDOC
## ExecutionCondition

### Description
Represents an execution-based order condition.

### Attributes
- `condType` (int): Condition type (default: 5).
- `conjunction` (str): Conjunction type (default: 'a').
- `secType` (str): Security type (default: '').
- `exch` (str): Exchange (default: '').
- `symbol` (str): Symbol (default: '').

### Methods
- `dict()`: Returns dataclass values as a dictionary.
- `nonDefaults()`: Returns fields that differ from default values as a dictionary.
- `tuple()`: Returns dataclass values as a tuple.
- `update(*srcObjs, **kwargs)`: Updates fields from source objects or keyword arguments.
```
