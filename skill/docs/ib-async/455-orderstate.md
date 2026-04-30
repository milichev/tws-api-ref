### OrderState

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Details the state of an order, including margin information, commissions, and completion status. It offers methods for transformation and data conversion.

```APIDOC
## OrderState

### Description
Represents the detailed state of an order at a specific point in time. It includes pre-trade and post-trade margin calculations, commission details, and completion timestamps and status. Utility methods for data manipulation are also provided.

### Properties
- `status` (str): The current status of the order.
- `initMarginBefore` (float): Initial margin requirement before the order.
- `maintMarginBefore` (float): Maintenance margin requirement before the order.
- `equityWithLoanBefore` (float): Equity with loan before the order.
- `initMarginChange` (float): Change in initial margin.
- `maintMarginChange` (float): Change in maintenance margin.
- `equityWithLoanChange` (float): Change in equity with loan.
- `initMarginAfter` (float): Initial margin requirement after the order.
- `maintMarginAfter` (float): Maintenance margin requirement after the order.
- `equityWithLoanAfter` (float): Equity with loan after the order.
- `commission` (float): The commission charged for the order.
- `minCommission` (float): The minimum commission applicable.
- `maxCommission` (float): The maximum commission applicable.
- `commissionCurrency` (str): The currency of the commission.
- `warningText` (str): Any warning messages associated with the order state.
- `completedTime` (str): The time when the order was completed.
- `completedStatus` (str): The status upon completion.

### Methods
- `transform()`: Transforms the order state data.
- `numeric()`: Returns a numeric representation of the order state.
- `formatted()`: Returns a formatted string representation of the order state.
- `dict()`: Converts the order state object to a dictionary.
- `nonDefaults()`: Returns a dictionary of non-default values.
- `tuple()`: Converts the order state object to a tuple.
- `update(**kwargs)`: Updates the order state object with new values.
```
