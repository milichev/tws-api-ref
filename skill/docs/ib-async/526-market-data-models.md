### Market Data Models

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Definitions for market data objects including tick attributes, historical ticks, and depth market data.

```APIDOC
## Data Model: TickAttrib

### Description
Represents attributes associated with a market tick.

### Fields
- **canAutoExecute** (bool) - Indicates if the tick can auto-execute.
- **pastLimit** (bool) - Indicates if the tick is past the limit.
- **preOpen** (bool) - Indicates if the tick occurred pre-open.

### Methods
- **dict()**: Returns the object as a dictionary.
- **nonDefaults()**: Returns fields that differ from default values.
- **tuple()**: Returns the object as a tuple.
- **update()**: Updates the object fields.
```

```APIDOC
## Data Model: HistoricalTickLast

### Description
Represents a historical last trade tick.

### Fields
- **time** (int) - Timestamp of the tick.
- **tickAttribLast** (TickAttribLast) - Attributes of the last tick.
- **price** (float) - Price of the trade.
- **size** (int) - Size of the trade.
- **exchange** (str) - Exchange where the trade occurred.
- **specialConditions** (str) - Any special trade conditions.
```
