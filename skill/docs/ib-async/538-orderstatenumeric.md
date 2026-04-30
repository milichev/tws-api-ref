### OrderStateNumeric

Source: https://ib-api-reloaded.github.io/ib_async/api.html

A specialized version of OrderState focusing on numeric values for margin and equity calculations.

```APIDOC
## OrderStateNumeric

### Description
Represents the numeric aspects of an order's state, primarily focusing on margin and equity calculations before and after the order execution. It provides methods for data conversion and updates.

### Properties
- `initMarginBefore` (float): Initial margin requirement before the order.
- `maintMarginBefore` (float): Maintenance margin requirement before the order.
- `equityWithLoanBefore` (float): Equity with loan before the order.
- `initMarginChange` (float): Change in initial margin.
- `maintMarginChange` (float): Change in maintenance margin.
- `equityWithLoanChange` (float): Change in equity with loan.
- `initMarginAfter` (float): Initial margin requirement after the order.
- `maintMarginAfter` (float): Maintenance margin requirement after the order.
- `equityWithLoanAfter` (float): Equity with loan after the order.

### Methods
- `dict()`: Converts the order state numeric object to a dictionary.
- `nonDefaults()`: Returns a dictionary of non-default values.
- `tuple()`: Converts the order state numeric object to a tuple.
- `update(**kwargs)`: Updates the order state numeric object with new values.
```
