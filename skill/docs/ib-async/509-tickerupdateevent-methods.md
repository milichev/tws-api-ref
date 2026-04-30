### TickerUpdateEvent Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

This section details the methods related to the TickerUpdateEvent class, used for emitting different types of ticks.

```APIDOC
## TickerUpdateEvent Methods

This section describes the methods of the `TickerUpdateEvent` class, which are used to emit specific types of tick data.

### Methods

- **trades()**
  Emits trade ticks.
  * **Return type**: `Tickfilter`

- **bids()**
  Emits bid ticks.
  * **Return type**: `Tickfilter`

- **asks()**
  Emits ask ticks.
  * **Return type**: `Tickfilter`

- **bidasks()**
  Emits both bid and ask ticks.
  * **Return type**: `Tickfilter`

- **midpoints()**
  Emits midpoint ticks.
  * **Return type**: `Tickfilter`
```
