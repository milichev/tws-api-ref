### PercentChangeCondition

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Defines a condition based on the percentage change of a contract's price.

```APIDOC
## PercentChangeCondition

### Description
Represents an order condition based on the percentage change of a contract's price. It allows setting a percentage change threshold and specifying the logical conjunction.

### Properties
- `condType` (str): The type of condition (e.g., 'PercentChange').
- `conjunction` (str): The logical conjunction ('AND' or 'OR') used with other conditions.
- `isMore` (bool): True if the condition is 'greater than', False if 'less than'.
- `changePercent` (float): The percentage change threshold.

### Methods
- `dict()`: Converts the percent change condition object to a dictionary.
- `nonDefaults()`: Returns a dictionary of non-default values.
- `tuple()`: Converts the percent change condition object to a tuple.
- `update(**kwargs)`: Updates the percent change condition object with new values.
```
