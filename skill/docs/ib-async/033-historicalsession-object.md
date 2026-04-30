### HistoricalSession Object

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents a historical trading session with start and end times.

```APIDOC
## HistoricalSession Object

### Description
Represents a historical trading session with start and end times.

### Class Definition
`ib_async.objects.HistoricalSession(startDateTime='', endDateTime='', refDate='')`

### Fields
- **startDateTime** (`str`, optional) - The start date and time of the session. Defaults to ''.
- **endDateTime** (`str`, optional) - The end date and time of the session. Defaults to ''.
- **refDate** (`str`, optional) - The reference date for the session. Defaults to ''.

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
