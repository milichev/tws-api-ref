### Watchdog Control Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Methods to control the lifecycle of the Watchdog and the monitored application.

```APIDOC
## Watchdog Control Methods

### Description

Provides methods to start, stop, and run the Watchdog in an asynchronous manner, along with utility methods for data retrieval and updates.

### Methods

#### `start()`

*   **Description**: Starts the Watchdog process, initiating connection and monitoring.
*   **Method**: `start`
*   **Endpoint**: N/A (Instance method)
*   **Parameters**: None
*   **Request Example**: `watchdog.start()`
*   **Response**: None

#### `stop()`

*   **Description**: Stops the Watchdog process and disconnects the IB application.
*   **Method**: `stop`
*   **Endpoint**: N/A (Instance method)
*   **Parameters**: None
*   **Request Example**: `watchdog.stop()`
*   **Response**: None

#### `runAsync()`

*   **Description**: Runs the Watchdog in an asynchronous event loop.
*   **Method**: `runAsync`
*   **Endpoint**: N/A (Instance method)
*   **Parameters**: None
*   **Request Example**: `await watchdog.runAsync()`
*   **Response**: None

#### `dict()`

*   **Description**: Returns the Watchdog's current state and configuration as a dictionary.
*   **Method**: `dict`
*   **Endpoint**: N/A (Instance method)
*   **Parameters**: None
*   **Request Example**: `watchdog_data = watchdog.dict()`
*   **Response**: `dict` - A dictionary containing the Watchdog's attributes.

#### `nonDefaults()`

*   **Description**: Returns a dictionary of Watchdog attributes that differ from their default values.
*   **Method**: `nonDefaults`
*   **Endpoint**: N/A (Instance method)
*   **Parameters**: None
*   **Request Example**: `non_default_params = watchdog.nonDefaults()`
*   **Response**: `dict[str, Any]` - A dictionary of non-default attributes.

#### `tuple()`

*   **Description**: Returns the Watchdog's current state and configuration as a tuple.
*   **Method**: `tuple`
*   **Endpoint**: N/A (Instance method)
*   **Parameters**: None
*   **Request Example**: `watchdog_tuple = watchdog.tuple()`
*   **Response**: `tuple[Any, ...]` - A tuple containing the Watchdog's attributes.

#### `update(*srcObjs, **kwargs)`

*   **Description**: Updates the Watchdog's attributes from source objects or keyword arguments.
*   **Method**: `update`
*   **Endpoint**: N/A (Instance method)
*   **Parameters**: 
    *   `*srcObjs` (object) - Zero or more source objects to update from.
    *   `**kwargs` (object) - Keyword arguments to update specific fields.
*   **Request Example**: `watchdog.update(port=4003, appTimeout=30)`
*   **Response**: `object` - The updated Watchdog instance.
```
