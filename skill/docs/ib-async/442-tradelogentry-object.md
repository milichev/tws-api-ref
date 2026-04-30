### TradeLogEntry Object

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents a single entry in a trade log, containing status, message, and error code information.

```APIDOC
## TradeLogEntry Object

### Description
Represents a single entry in a trade log, containing status, message, and error code information.

### Class Definition
`ib_async.objects.TradeLogEntry(time, status='', message='', errorCode=0)`

### Fields
- **time** (`datetime`) - The timestamp of the log entry.
- **status** (`str`, optional) - The status of the trade log entry. Defaults to ''.
- **message** (`str`, optional) - A descriptive message for the log entry. Defaults to ''.
- **errorCode** (`int`, optional) - An error code associated with the log entry. Defaults to 0.

### Methods
#### `dict()`
Returns the dataclass values as a dictionary. This is a non-recursive variant of `dataclasses.asdict`.

#### `nonDefaults()`
Returns fields that differ from their default values as a dictionary.

#### `tuple()`
Returns the dataclass values as a tuple. This is a non-recursive variant of `dataclasses.astuple`.

#### `update(*srcObjs, **kwargs)`
Updates fields of the dataclass object from source objects or keyword arguments.
```
