### OrderCondition

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Base class for various order conditions, providing common methods for data manipulation.

```APIDOC
## OrderCondition

### Description
Base class for all order conditions. It defines common methods for creating, combining (AND/OR), and converting condition objects to different formats. Specific condition types inherit from this class.

### Methods
- `createClass()`: Factory method to create specific condition instances.
- `And()`: Creates a logical AND condition.
- `Or()`: Creates a logical OR condition.
- `dict()`: Converts the order condition object to a dictionary.
- `nonDefaults()`: Returns a dictionary of non-default values.
- `tuple()`: Converts the order condition object to a tuple.
- `update(**kwargs)`: Updates the order condition object with new values.
```
