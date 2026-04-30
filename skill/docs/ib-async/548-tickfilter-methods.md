### Tickfilter Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

This section outlines the methods of the Tickfilter class, used for filtering and processing tick data.

```APIDOC
## Tickfilter Methods

This section describes the methods of the `Tickfilter` class, which allows for filtering and processing of tick data streams.

### Methods

- **on_source(_ticker_)**
  Emits a new value to all connected listeners.
  * **Parameters**:
    - `_ticker_` (object) - The ticker object to source data from.
  * **Description**: This method is used internally to connect a tick filter to a data source.

- **timebars(_timer_)**
  Processes time bars based on a timer.
  * **Parameters**:
    - `_timer_` (object) - The timer object to use for time bar processing.
```
