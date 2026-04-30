### MarginCondition

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Defines a condition based on the margin percentage.

```APIDOC
## MarginCondition

### Description
Represents an order condition based on the margin percentage. It allows setting a margin percentage threshold and specifying the logical conjunction.

### Properties
- `condType` (str): The type of condition (e.g., 'Margin').
- `conjunction` (str): The logical conjunction ('AND' or 'OR') used with other conditions.
- `isMore` (bool): True if the condition is 'greater than', False if 'less than'.
- `percent` (float): The margin percentage threshold.

### Methods
- `dict()`: Converts the margin condition object to a dictionary.
- `nonDefaults()`: Returns a dictionary of non-default values.
- `tuple()`: Converts the margin condition object to a tuple.
- `update(**kwargs)`: Updates the margin condition object with new values.
```
