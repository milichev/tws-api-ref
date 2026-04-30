### Watchdog Initialization

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Initializes the Watchdog instance with various parameters to control its behavior and connection settings.

```APIDOC
## Watchdog Class

### Description

Initializes the Watchdog to manage and monitor the TWS or Gateway application. It ensures the application remains connected and responsive by automatically restarting it upon detecting inactivity or errors.

### Parameters

#### Path Parameters

None

#### Query Parameters

None

#### Request Body

*   **controller** (IBC) - Required - The IBC instance to use.
*   **ib** (IB) - Required - The IB instance to manage. Do not connect this instance beforehand.
*   **host** (str) - Optional - The host address for connecting the IB instance. Defaults to '127.0.0.1'.
*   **port** (int) - Optional - The port for connecting the IB instance. Defaults to 7497.
*   **clientId** (int) - Optional - The client ID for the IB connection. Defaults to 1.
*   **connectTimeout** (float) - Optional - The timeout in seconds for establishing a connection. Defaults to 2.
*   **appStartupTime** (float) - Optional - The time in seconds allowed for the application to start up. Defaults to 30.
*   **appTimeout** (float) - Optional - The timeout in seconds for network traffic idle time. Defaults to 20.
*   **retryDelay** (float) - Optional - The time in seconds to wait before retrying after a failure. Defaults to 2.
*   **readonly** (bool) - Optional - Whether to connect in read-only mode. Defaults to False.
*   **account** (str) - Optional - The account to use. Defaults to ''.
*   **raiseSyncErrors** (bool) - Optional - Whether to raise synchronous errors. Defaults to False.
*   **probeContract** (Contract) - Optional - The contract to use for probing. Defaults to Forex('EURUSD', exchange='IDEALPRO').
*   **probeTimeout** (float) - Optional - The timeout in seconds for probe requests. Defaults to 4.

### Request Example

```python
from ib_async import IB, IBC, Watchdog, Forex

def onConnected():
    print(ib.accountValues())

ibc = IBC(974, gateway=True, tradingMode='paper')
ib = IB()
ib.connectedEvent += onConnected
watchdog = Watchdog(ibc, ib, port=4002)
watchdog.start()
ib.run()
```

### Response

#### Success Response (200)

This method does not return a value upon successful initialization.

#### Response Example

None
```
