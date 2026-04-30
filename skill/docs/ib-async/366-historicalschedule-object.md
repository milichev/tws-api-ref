### HistoricalSchedule Object

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents a historical schedule, including date ranges, time zone, and a list of trading sessions.

```APIDOC
## HistoricalSchedule Object

### Description
Represents a historical schedule, including date ranges, time zone, and a list of trading sessions.

### Class Definition
`ib_async.objects.HistoricalSchedule(startDateTime='', endDateTime='', timeZone='', sessions=<factory>)`

### Fields
- **startDateTime** (`str`, optional) - The overall start date and time for the schedule. Defaults to ''.
- **endDateTime** (`str`, optional) - The overall end date and time for the schedule. Defaults to ''.
- **timeZone** (`str`, optional) - The time zone for the schedule. Defaults to ''.
- **sessions** (`list[HistoricalSession]`, optional) - A list of `HistoricalSession` objects. Defaults to an empty list.

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
