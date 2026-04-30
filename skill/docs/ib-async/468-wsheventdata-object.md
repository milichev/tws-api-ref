### WshEventData Object

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents data for a watchlist event, including contract ID, filters, and date ranges.

```APIDOC
## WshEventData Object

### Description
Represents data for a watchlist event, including contract ID, filters, and date ranges.

### Class Definition
`ib_async.objects.WshEventData(conId=2147483647, filter='', fillWatchlist=False, fillPortfolio=False, fillCompetitors=False, startDate='', endDate='', totalLimit=2147483647)`

### Fields
- **conId** (`int`, optional) - The contract identifier. Defaults to `2147483647`.
- **filter** (`str`, optional) - A filter string for the event data. Defaults to ''.
- **fillWatchlist** (`bool`, optional) - Whether to fill watchlist data. Defaults to `False`.
- **fillPortfolio** (`bool`, optional) - Whether to fill portfolio data. Defaults to `False`.
- **fillCompetitors** (`bool`, optional) - Whether to fill competitor data. Defaults to `False`.
- **startDate** (`str`, optional) - The start date for the event data. Defaults to ''.
- **endDate** (`str`, optional) - The end date for the event data. Defaults to ''.
- **totalLimit** (`int`, optional) - The total limit for the event data. Defaults to `2147483647`.

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
