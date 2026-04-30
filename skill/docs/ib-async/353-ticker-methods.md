### Ticker Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

This section describes the methods available on the Ticker class for checking data validity and retrieving aggregated values.

```APIDOC
## Ticker Methods

This section describes the methods available on the Ticker class for data validation and aggregation.

### Methods

- **isUnset(_value_)**
  Checks if a value is unset.
  * **Parameters**:
    - `_value_` (any) - The value to check.
  * **Return type**: `bool`

- **hasBidAsk()**
  Checks if the ticker has a valid bid and ask price.
  * **Return type**: `bool`

- **midpoint()**
  Returns the average of the bid and ask prices, or `nan` if no valid bid and ask are available.
  * **Return type**: `float`

- **marketPrice()**
  Returns the market price, prioritizing the last trade price if within the bid/ask range, otherwise the midpoint.
  * **Return type**: `float`

- **dict()**
  Returns the Ticker object's values as a dictionary (non-recursive).
  * **Return type**: `dict`

- **nonDefaults()**
  Returns a dictionary of fields that have values different from their defaults.
  * **Return type**: `dict[str, Any]`

- **tuple()**
  Returns the Ticker object's values as a tuple (non-recursive).
  * **Return type**: `tuple[Any, ...]`

- **update(*srcObjs, **kwargs)**
  Updates the Ticker object's fields from source objects or keyword arguments.
  * **Parameters**:
    - `*srcObjs` (object) - Zero or more source objects to update from.
    - `**kwargs` (object) - Keyword arguments to update fields.
  * **Return type**: `object`
```
