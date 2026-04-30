[IBKR TWS API](../../SKILL.md) · [ib_async Reference](index.md) · [Objects &amp; Types](06-objects.md)


# Objects & Types

### Asynchronous Start for IBC

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ibcontroller.html

This asynchronous method prepares and executes the command to start the TWS/Gateway client. It constructs the command-line arguments based on the instance's configuration.

```python
if self._proc:
    return
self._logger.info("Starting")

# map from field names to cmd arguments; key=(UnixArg, WindowsArg)
args = dict(
    twsVersion=("", ""),
    gateway=('--gateway', '/Gateway'),
    tradingMode=('--mode=', '/Mode:'),
    twsPath=('--tws-path=', '/TwsPath:'),
    twsSettingsPath=('--tws-settings-path=', ''),
    ibcPath=('--ibc-path=', '/IbcPath:'),
    ibcIni=('--ibc-ini=', '/Config:'),
    javaPath=('--java-path=', '/JavaPath:'),
    userid=('--user=', '/User:'),
    password=('--pw=', '/PW:'),
    fixuserid=('--fix-user=', '/FIXUser:'),
    fixpassword=('--fix-pw=', '/FIXPW:'),
    on2fatimeout=('--on2fatimeout=', '/On2FATimeout:'),
)

# create shell command
cmd = [
    (
        f"{self.ibcPath}\\scripts\\StartIBC.bat"
        if self._isWindows
        else f"{self.ibcPath}/scripts/ibcstart.sh"
    )
]
for k, v in util.dataclassAsDict(self).items():
    arg = args[k][self._isWindows]
    if v:
        if arg.endswith("=") or arg.endswith(":"):
            cmd.append(f"{arg}{v}")
        elif arg:
            cmd.append(arg)
        else:
            cmd.append(str(v))
```

---

### HistoricalSession Object

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents a historical trading session with a start and end date/time.

```APIDOC
## HistoricalSession Object

### Description
Represents a historical trading session with a start and end date/time.

### Fields
- **startDateTime** (str) - The start date and time of the session. Defaults to ''.
- **endDateTime** (str) - The end date and time of the session. Defaults to ''.
- **refDate** (str) - The reference date for the session. Defaults to ''.

### Methods
- **dict()**: Returns the dataclass values as a dictionary.
- **nonDefaults()**: Returns fields that differ from default values as a dictionary.
- **tuple()**: Returns the dataclass values as a tuple.
- **update(\*srcObjs, \*\*kwargs)**: Updates fields of the dataclass object from source objects or keyword arguments.
```

---

### HistoricalSchedule Object

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents a historical schedule, including start and end times, timezone, and a list of historical sessions.

```APIDOC
## HistoricalSchedule Object

### Description
Represents a historical schedule, including start and end times, timezone, and a list of historical sessions.

### Fields
- **startDateTime** (str) - The overall start date and time for the schedule. Defaults to ''.
- **endDateTime** (str) - The overall end date and time for the schedule. Defaults to ''.
- **timeZone** (str) - The timezone of the schedule. Defaults to ''.
- **sessions** (list[HistoricalSession]) - A list of historical sessions within the schedule.

### Methods
- **dict()**: Returns the dataclass values as a dictionary.
- **nonDefaults()**: Returns fields that differ from default values as a dictionary.
- **tuple()**: Returns the dataclass values as a tuple.
- **update(\*srcObjs, \*\*kwargs)**: Updates fields of the dataclass object from source objects or keyword arguments.
```

---

### Get Dataclass Fields with Non-Default Values

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Retrieves fields from a dataclass instance that differ from their default values. Returns a dictionary of these fields and their values.

```python
def dataclassNonDefaults(obj) -> dict[str, Any]:
    """
    For a ``dataclass`` instance get the fields that are different from the
    default values and return as ``dict``.
    """
    if not is_dataclass(obj):
        raise TypeError(f"Object {obj} is not a dataclass")

    values = [getattr(obj, field.name) for field in fields(obj)]

    return {
        field.name: value
        for field, value in zip(fields(obj), values)
        if value is not None
        and value != field.default
        and value == value
        and not (
            (isinstance(value, list) and value == [])
            or (isinstance(value, dict) and value == {})
        )
    }
```

---

### Object Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Common methods available for various IB Async objects.

```APIDOC
## Object Methods

### Description
Provides utility methods for dataclass objects.

### Methods
- **dict()**: Returns the object's values as a dictionary.
- **nonDefaults()**: Returns a dictionary of fields that differ from their default values.
- **tuple()**: Returns the object's values as a tuple.
- **update(\*srcObjs, \**kwargs)**: Updates the object's fields from source objects or keyword arguments.
```

---

### IB Defaults and Utility Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Provides details on the IBDefaults class, its default values, and utility methods like dict(), nonDefaults(), tuple(), and update().

```APIDOC
## IBDefaults Class

### Description
A simple way to provide default values when populating API data.

### Attributes
- **emptyPrice** (Any) - Default value for empty price.
- **emptySize** (Any) - Default value for empty size.
- **unset** (Any) - Represents an unset value.
- **timezone** (tzinfo) - Default timezone, defaults to datetime.timezone.utc.

### Methods
#### dict()
- **Description**: Return dataclass values as `dict`. This is a non-recursive variant of `dataclasses.asdict`.
- **Return type**: `dict`

#### nonDefaults()
- **Description**: For a `dataclass` instance get the fields that are different from the default values and return as `dict`.
- **Return type**: `dict`[`str`, `Any`]

#### tuple()
- **Description**: Return dataclass values as `tuple`. This is a non-recursive variant of `dataclasses.astuple`.
- **Return type**: `tuple`[`Any`, `...`]

#### update(_* srcObjs_, _** kwargs_)
- **Description**: Update fields of the given `dataclass` object from zero or more `dataclass` source objects and/or from keyword arguments.
- **Return type**: `object`
```

---

### Order Class Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Methods available for the Order class.

```APIDOC
## Order Class Methods

### Description
Methods for interacting with and manipulating Order objects.

### Methods
- **dict()**
  - Description: Return dataclass values as `dict`. This is a non-recursive variant of `dataclasses.asdict`.
  - Return type: `dict`
- **nonDefaults()**
  - Description: For a `dataclass` instance get the fields that are different from the default values and return as `dict`.
  - Return type: `dict`[`str`, `Any`]
- **tuple()**
  - Description: Return dataclass values as `tuple`. This is a non-recursive variant of `dataclasses.astuple`.
  - Return type: `tuple`[`Any`, `...`]
- **update(\* srcObjs, \*\* kwargs)**
  - Description: Update fields of the given `dataclass` object from zero or more `dataclass` source objects and/or from keyword arguments.
  - Return type: `object`
```

---

### OrderState Class Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Methods available for the OrderState class.

```APIDOC
## OrderState Class Methods

### Description
Methods for transforming and formatting OrderState data.

### Methods
- **transform(transformer)**
  - Description: Convert the numeric values of this OrderState into a new OrderState transformed by ‘using’.
- **numeric(digits = 2)**
  - Description: Return a new OrderState with the current values converted to floats instead of strings as returned from IBKR directly.
  - Return type: `OrderStateNumeric`
- **formatted(digits = 2)**
  - Description: Return a new OrderState with the current values as formatted strings.
- **dict()**
  - Description: Return dataclass values as `dict`. This is a non-recursive variant of `dataclasses.asdict`.
  - Return type: `dict`
- **nonDefaults()**
  - Description: For a `dataclass` instance get the fields that are different from the default values and return as `dict`.
  - Return type: `dict`[`str`, `Any`]
- **tuple()**
  - Description: Return dataclass values as `tuple`. This is a non-recursive variant of `dataclasses.astuple`.
  - Return type: `tuple`[`Any`, `...`]
- **update(\* srcObjs, \*\* kwargs)**
  - Description: Update fields of the given `dataclass` object from zero or more `dataclass` source objects and/or from keyword arguments.
  - Return type: `object`
```

---

### Tick By Tick Bid/Ask Data Structure

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/objects.html

Represents tick-by-tick bid and ask data.

```APIDOC
## TickByTickBidAsk

### Description
Represents tick-by-tick bid and ask data.

### Fields
- **time** (datetime) - The timestamp of the data.
- **bidPrice** (float) - The current bid price.
- **askPrice** (float) - The current ask price.
- **bidSize** (float) - The current bid size.
- **askSize** (float) - The current ask size.
- **tickAttribBidAsk** (TickAttribBidAsk) - Attributes related to bid/ask data.
```

---

### Watchdog Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Methods available for controlling and interacting with the Watchdog instance.

```APIDOC
## Watchdog Methods

### start()

Starts the watchdog process.

### stop()

Stops the watchdog process.

### runAsync()

Asynchronously runs the watchdog process.

### dict()

Returns dataclass values as a dictionary (non-recursive).

### nonDefaults()

Returns fields that differ from their default values as a dictionary.

### tuple()

Returns dataclass values as a tuple.

### update(*srcObjs, **kwargs)

Updates fields of the Watchdog object from source objects or keyword arguments.
```

---

### Ticker Utility Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

This section describes utility methods available for ticker objects, such as checking for bid/ask availability, calculating the midpoint, and retrieving data in different formats.

```APIDOC
## Ticker Utility Methods

This section describes utility methods available for ticker objects, such as checking for bid/ask availability, calculating the midpoint, and retrieving data in different formats.

### Methods

#### isUnset(_value_)

Checks if a value is unset.

- **Parameters**:
  - `_value_` (Any) - The value to check.
- **Return type**:
  - `bool`

#### hasBidAsk()

See if this ticker has a valid bid and ask.

- **Return type**:
  - `bool`

#### midpoint()

Return average of bid and ask, or defaults.unset if no valid bid and ask are available.

- **Return type**:
  - `float`

#### marketPrice()

Return the first available one of:
  * last price if within current bid/ask or no bid/ask available;
  * average of bid and ask (midpoint).

- **Return type**:
  - `float`

#### dict()

Return dataclass values as `dict`. This is a non-recursive variant of `dataclasses.asdict`.

- **Return type**:
  - `dict`

#### nonDefaults()

For a `dataclass` instance get the fields that are different from the default values and return as `dict`.

- **Return type**:
  - `dict[str, Any]`

#### tuple()

Return dataclass values as `tuple`. This is a non-recursive variant of `dataclasses.astuple`.

- **Return type**:
  - `tuple[Any, ...]`

#### update(_* srcObjs_, _** kwargs_)

Update fields of the given `dataclass` object from zero or more `dataclass` source objects and/or from keyword arguments.

- **Parameters**:
  - `* srcObjs` - Source objects to update from.
  - `** kwargs` - Keyword arguments to update with.
- **Return type**:
  - `object`
```

---

### PnLSingle Object

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents a single P&L (Profit and Loss) entry for an account. It includes daily, unrealized, and realized P&L, as well as position and value.

```APIDOC
## PnLSingle Object

### Description
Represents a single P&L (Profit and Loss) entry for an account. It includes daily, unrealized, and realized P&L, as well as position and value.

### Fields
- **account** (str) - The account identifier. Defaults to ''.
- **modelCode** (str) - The model code associated with the P&L. Defaults to ''.
- **conId** (int) - The contract identifier. Defaults to 0.
- **dailyPnL** (float) - The daily P&L. Defaults to NaN.
- **unrealizedPnL** (float) - The unrealized P&L. Defaults to NaN.
- **realizedPnL** (float) - The realized P&L. Defaults to NaN.
- **position** (int) - The current position. Defaults to 0.
- **value** (float) - The current value. Defaults to NaN.

### Methods
- **dict()**: Returns the dataclass values as a dictionary.
- **nonDefaults()**: Returns fields that differ from default values as a dictionary.
- **tuple()**: Returns the dataclass values as a tuple.
- **update(\*srcObjs, \*\*kwargs)**: Updates fields of the dataclass object from source objects or keyword arguments.
```

---

### OrderComboLeg

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents a combo leg for an order.

```APIDOC
## OrderComboLeg

### Description
Represents a combo leg for an order.

### Attributes
- **_price** (float | Decimal)

### Methods
- **dict()**: Return dataclass values as `dict`.
- **nonDefaults()**: Return fields that are different from default values as `dict`.
- **tuple()**: Return dataclass values as `tuple`.
- **update(\*srcObjs, \**kwargs)**: Update fields of the dataclass object.
```

---

### Dataclass Conversion Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Provides standard methods for converting dataclass instances to dictionaries or tuples, and for retrieving non-default fields.

```python
dict()
```

```python
nonDefaults()
```

```python
tuple()
```

```python
update(_* srcObjs_, _** kwargs_)
```

---

### IBC Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Methods available for controlling TWS/Gateway instances managed by IBC.

```APIDOC
## IBC Methods

### Description
Provides methods to manage the lifecycle and state of TWS/Gateway instances controlled by the IBC class.

### Methods

#### `start()`
Launches TWS/IB Gateway.

- **Method**: `start`
- **Endpoint**: N/A (Instance method)

#### `terminate()`
Terminates the TWS/IB Gateway process.

- **Method**: `terminate`
- **Endpoint**: N/A (Instance method)

#### `startAsync()`
Asynchronously launches TWS/IB Gateway.

- **Method**: `startAsync`
- **Endpoint**: N/A (Instance method)

#### `terminateAsync()`
Asynchronously terminates the TWS/IB Gateway process.

- **Method**: `terminateAsync`
- **Endpoint**: N/A (Instance method)

#### `monitorAsync()`
Asynchronously monitors the TWS/IB Gateway process.

- **Method**: `monitorAsync`
- **Endpoint**: N/A (Instance method)

#### `dict()`
Returns the current dataclass values as a dictionary. This is a non-recursive variant of `dataclasses.asdict`.

- **Method**: `dict`
- **Endpoint**: N/A (Instance method)
- **Return Type**: `dict`

#### `nonDefaults()`
Returns a dictionary of fields whose values differ from their default values.

- **Method**: `nonDefaults`
- **Endpoint**: N/A (Instance method)
- **Return Type**: `dict[str, Any]`

#### `tuple()`
Returns the current dataclass values as a tuple. This is a non-recursive variant of `dataclasses.astuple`.

- **Method**: `tuple`
- **Endpoint**: N/A (Instance method)
- **Return Type**: `tuple[Any, ...]`

#### `update(*srcObjs, **kwargs)`
Updates fields of the IBC object from source objects or keyword arguments.

- **Method**: `update`
- **Endpoint**: N/A (Instance method)
- **Parameters**:
  - `*srcObjs`: Zero or more source dataclass objects.
  - `**kwargs`: Keyword arguments to update fields.
- **Return Type**: `object`
```

---

### Portfolio Item Data Structure

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/objects.html

Represents an item within a user's portfolio.

```APIDOC
## PortfolioItem

### Description
Represents an item within a user's portfolio.

### Fields
- **contract** (Contract) - The contract details of the portfolio item.
- **position** (float) - The current position size.
- **marketPrice** (float) - The current market price.
- **marketValue** (float) - The current market value of the position.
- **averageCost** (float) - The average cost basis of the position.
- **unrealizedPNL** (float) - The unrealized profit or loss.
- **realizedPNL** (float) - The realized profit or loss.
- **account** (str) - The account identifier for this portfolio item.
```

---

### Dataclass Utilities

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Utilities for working with dataclass objects.

```APIDOC
## ib_async.util.dataclassAsDict

### Description
Return dataclass values as `dict`. This is a non-recursive variant of `dataclasses.asdict`.

### Method
N/A

### Endpoint
N/A

### Response
#### Success Response (200)
- **dict** (dict) - Dictionary representation of the dataclass.
```

```APIDOC
## ib_async.util.dataclassAsTuple

### Description
Return dataclass values as `tuple`. This is a non-recursive variant of `dataclasses.astuple`.

### Method
N/A

### Endpoint
N/A

### Response
#### Success Response (200)
- **tuple** (tuple[Any, ...]) - Tuple representation of the dataclass.
```

```APIDOC
## ib_async.util.dataclassNonDefaults

### Description
For a `dataclass` instance get the fields that are different from the default values and return as `dict`.

### Method
N/A

### Endpoint
N/A

### Response
#### Success Response (200)
- **dict** (dict[str, Any]) - Dictionary of fields with non-default values.
```

```APIDOC
## ib_async.util.dataclassUpdate

### Description
Update fields of the given `dataclass` object from zero or more `dataclass` source objects and/or from keyword arguments.

### Method
N/A

### Endpoint
N/A

### Response
#### Success Response (200)
- **object** (object) - The updated dataclass object.
```

```APIDOC
## ib_async.util.dataclassRepr

### Description
Provide a culled representation of the given `dataclass` instance, showing only the fields with a non-default value.

### Method
N/A

### Endpoint
N/A

### Response
#### Success Response (200)
- **str** (str) - A string representation of the dataclass with non-default fields.
```

---

### StopLimitOrder

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents a stop-limit order with specified limit and stop prices.

```APIDOC
## StopLimitOrder

### Description
Represents a stop-limit order with specified limit and stop prices.

### Class Definition
```python
class StopLimitOrder(_action: str, _totalQuantity: float, _lmtPrice: float, _stopPrice: float, **kwargs)
```

### Methods
- `dict()`: Returns dataclass values as a dictionary.
- `nonDefaults()`: Returns fields that differ from default values as a dictionary.
- `tuple()`: Returns dataclass values as a tuple.
- `update(**kwargs)`: Updates fields of the object from keyword arguments.
```

---

### Dataclass Utilities

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Provides methods for converting dataclass instances to dictionaries and tuples, and for updating dataclass objects.

```APIDOC
## Dataclass Utilities

### Description
Provides methods for converting dataclass instances to dictionaries and tuples, and for updating dataclass objects.

### Methods

#### `dict()`

##### Description
Return dataclass values as `dict`. This is a non-recursive variant of `dataclasses.asdict`.

##### Return Type
`dict`

#### `nonDefaults()`

##### Description
For a `dataclass` instance get the fields that are different from the default values and return as `dict`.

##### Return Type
`dict`[`str`, `Any`]

#### `tuple()`

##### Description
Return dataclass values as `tuple`. This is a non-recursive variant of `dataclasses.astuple`.

##### Return Type
`tuple`[`Any`, `...`]

#### `update(_* srcObjs_, _** kwargs_)`

##### Description
Update fields of the given `dataclass` object from zero or more `dataclass` source objects and/or from keyword arguments.

##### Return Type
`object`
```
