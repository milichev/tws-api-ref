### TimeCondition

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Defines a condition based on the time of day.

```APIDOC
## TimeCondition

### Description
Represents an order condition based on a specific time. It allows setting a time threshold and specifying the logical conjunction.

### Properties
- `condType` (str): The type of condition (e.g., 'Time').
- `conjunction` (str): The logical conjunction ('AND' or 'OR') used with other conditions.
- `isMore` (bool): True if the condition is 'after', False if 'before'.
- `time` (str): The time threshold in 'HH:MM:SS' format.

### Methods
- `dict()`: Converts the time condition object to a dictionary.
- `nonDefaults()`: Returns a dictionary of non-default values.
- `tuple()`: Converts the time condition object to a tuple.
- `update(**kwargs)`: Updates the time condition object with new values.
```
