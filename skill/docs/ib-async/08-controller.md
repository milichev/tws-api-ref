[IBKR TWS API](../../SKILL.md) · [ib_async Reference](index.md) · [IBC &amp; Controller](08-controller.md)


# IBC & Controller

### Initialize and Start Watchdog

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Example of initializing IBC and IB instances, setting up a connection event handler, and starting the Watchdog to manage the connection. Ensure the IB instance is not connected before passing it to Watchdog.

```python
def onConnected():
    print(ib.accountValues())

ibc = IBC(974, gateway=True, tradingMode='paper')
ib = IB()
ib.connectedEvent += onConnected
watchdog = Watchdog(ibc, ib, port=4002)
watchdog.start()
ib.run()

```

---

### Watchdog Example Usage

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ibcontroller.html

Demonstrates how to initialize and start the Watchdog to manage the TWS or gateway application. This includes setting up event handlers and running the IB instance.

```python
def onConnected():
    print(ib.accountValues())

ibc = IBC(974, gateway=True, tradingMode='paper')
ib = IB()
ib.connectedEvent += onConnected
watchdog = Watchdog(ibc, ib, port=4002)
watchdog.start()
ib.run()
```

---

### Example Usage

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Demonstrates how to initialize and use the Watchdog class within an event-driven application.

```APIDOC
```python
def onConnected():
    print(ib.accountValues())

ibc = IBC(974, gateway=True, tradingMode='paper')
ib = IB()
ib.connectedEvent += onConnected
watchdog = Watchdog(ibc, ib, port=4002)
watchdog.start()
ib.run()
```
```

---

### Start TWS/Gateway using IBC

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ibcontroller.html

The start method launches the TWS or Gateway client. It internally uses an asynchronous method to manage the process.

```python
util.run(self.startAsync())
```

---

### Initialize and Start IBC

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ibcontroller.html

Instantiate the IBC class with necessary parameters and start the TWS/Gateway client. Ensure IB.run() is called to process events.

```python
ibc = IBC(976, gateway=True, tradingMode='live',
    userid='edemo', password='demouser')
ibc.start()
IB.run()
```

---

### Watchdog Start - Watchdog.start()

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Starts the watchdog. In version 0.9.42, this method was rewritten to not require util.patchAsyncio and is no longer blocking.

```python
Watchdog.start()
```

---

### Application Initialization and Startup

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ibcontroller.html

Initializes the IBC, IB, and Watchdog components and starts the application's main loop. Requires IB.run() to be called.

```python
if __name__ == "__main__":
    ibc = IBC(1012, gateway=True, tradingMode="paper")
    ib = IB()
    app = Watchdog(ibc, ib, appStartupTime=15)
    app.start()
    IB.run()
```

---

### Start Watchdog Service

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ibcontroller.html

Initiates the Watchdog's monitoring process by scheduling its asynchronous run method. Emits a 'startingEvent' before starting the background task.

```python
self._logger.info("Starting")
        self.startingEvent.emit(self)
        self._runner = asyncio.ensure_future(self.runAsync())
        return self._runner
```

---

### Add IBController

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Introduces the `IBController` class for managing IB connections.

```python
IBController
```

---

### Run IBC and IBController Directly

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

The `IBC` and `IBController` can now be run directly, rather than through a shell command.

```python
IBC()
```

```python
IBController()
```

---

### New Event System

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

A new event system is introduced, intended to supersede the older `IB.setCallback()` method. Notebooks have been updated to utilize this new system. The `Watchdog` class now requires an `IB` instance.

```python
IB.setCallback()
```

---

### IBC Initialization

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Initialize the IBC class to control TWS/Gateway. It's recommended to set sensitive credentials in a secured IBC config file.

```APIDOC
## IBC Initialization

### Description
Initializes the Interactive Brokers Controller (IBC) to programmatically start and stop TWS or IB Gateway. Sensitive credentials like username and password should ideally be stored in a secured IBC configuration file.

### Parameters

#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Initialization Parameters

- **twsVersion** (int) - Required - The major version number for TWS or gateway.
- **gateway** (bool) - Optional - Set to True to use the gateway, False for TWS. Defaults to False.
- **tradingMode** (str) - Optional - Specifies the trading mode, either 'live' or 'paper'. Defaults to an empty string.
- **userid** (str) - Optional - Your IB account username. Recommended to use a secured config file.
- **password** (str) - Optional - Your IB account password. Recommended to use a secured config file.
- **twsPath** (str) - Optional - Path to the TWS installation folder. Defaults vary by OS (Linux: ~/Jts, OS X: ~/Applications, Windows: C:\Jts).
- **twsSettingsPath** (str) - Optional - Path to the TWS settings folder. Defaults vary by OS (Linux: ~/Jts, OS X: ~/Jts, Windows: Not available).
- **ibcPath** (str) - Optional - Path to the IBC installation folder. Defaults vary by OS (Linux: /opt/ibc, OS X: /opt/ibc, Windows: C:\IBC).
- **ibcIni** (str) - Optional - Path to the IBC configuration file. Defaults vary by OS (Linux: ~/ibc/config.ini, OS X: ~/ibc/config.ini, Windows: %%HOMEPATH%%\DocumentsIBC\config.ini).
- **javaPath** (str) - Optional - Path to the Java executable. Defaults to the Java VM included with TWS/gateway.
- **fixuserid** (str) - Optional - FIX account user ID (only applicable for gateway).
- **fixpassword** (str) - Optional - FIX account password (only applicable for gateway).
- **on2fatimeout** (str) - Optional - Action to take if 2-factor authentication times out. Can be 'restart' or 'exit'.

### Example Usage
```python
import asyncio

# Required for Windows users
# asyncio.set_event_loop(asyncio.ProactorEventLoop())

from ib_async import IBC

ibc = IBC(976, gateway=True, tradingMode='live',
            userid='edemo', password='demouser')
ibc.start()
# IB.run() # Assuming IB is imported and configured elsewhere
```
```

---

### Watchdog Class Initialization

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Initializes the Watchdog class with various parameters to control connection behavior, timeouts, and retry mechanisms.

```APIDOC
## Watchdog Class

### Description
Starts, connects, and monitors the TWS or Gateway application to keep it running. Intended for event-driven applications that initialize upon reconnection. Not suitable for notebooks or imperative code.

### Parameters

- **controller** (IBC) - Required - IBC instance.
- **ib** (IB) - Required - IB instance to be used. Do not connect this instance as Watchdog handles the connection.
- **host** (str) - Optional - Host for connecting the IB instance. Defaults to '127.0.0.1'.
- **port** (int) - Optional - Port for connecting the IB instance. Defaults to 7497.
- **clientId** (int) - Optional - Client ID for connecting the IB instance. Defaults to 1.
- **connectTimeout** (float) - Optional - Timeout in seconds for establishing the connection. Defaults to 2.
- **readonly** (bool) - Optional - Specifies if the connection should be read-only. Defaults to False.
- **appStartupTime** (float) - Optional - Time in seconds allowed for the app to start up. Defaults to 30.
- **appTimeout** (float) - Optional - Timeout in seconds for network traffic idle time. Defaults to 20.
- **retryDelay** (float) - Optional - Time in seconds to wait before restarting the app after a failure. Defaults to 2.
- **probeContract** (Contract) - Optional - Contract used for historical data probe requests. Defaults to Forex('EURUSD', exchange='IDEALPRO').
- **probeTimeout** (float) - Optional - Timeout in seconds for the probe request. Defaults to 4.
- **account** (str) - Optional - Account identifier.
- **raiseSyncErrors** (bool) - Optional - Whether to raise synchronous errors.
```

---

### Add IBC

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Introduces the `IBC` component to the library.

```python
IBC
```

---

### Watchdog Class

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

The `Watchdog` class has been added to the library for monitoring.

```python
Watchdog
```

---

### Set asyncio event loop for Windows

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ibcontroller.html

On Windows, the proactor event loop must be set for IBC to function correctly. This is typically done at the beginning of your script.

```python
import asyncio
asyncio.set_event_loop(asyncio.ProactorEventLoop())
```

---

### Watchdog

Source: https://ib-api-reloaded.github.io/ib_async/api.html

A watchdog component for monitoring and managing IB API connections.

```APIDOC
## Watchdog

### Event and Controller
- **events**: Event handlers for watchdog.
- **controller**: The controller managing the watchdog.
- **ib**: The IB API instance.

### Connection Parameters
- **host** (str) - Hostname of the TWS/Gateway.
- **port** (int) - Port number for the connection.
- **clientId** (int) - Client ID for the connection.
- **connectTimeout** (int) - Timeout for establishing a connection.
- **appStartupTime** (int) - Startup time for the application.
- **appTimeout** (int) - Timeout for the application.
- **retryDelay** (int) - Delay between connection retries.
- **readonly** (bool) - Whether the connection is read-only.
- **account** (str) - The account to connect with.
- **raiseSyncErrors** (bool) - Whether to raise synchronous errors.

### Contract Probing
- **probeContract**: Whether to probe contracts.
- **probeTimeout** (int) - Timeout for contract probing.

### Connection Management
- **start()**: Starts the watchdog and connection.
- **stop()**: Stops the watchdog and connection.
- **runAsync()**: Runs the watchdog asynchronously.

### Object Management
- **dict()**: Converts the Watchdog object to a dictionary.
- **nonDefaults()**: Returns a dictionary of non-default values.
- **tuple()**: Converts the Watchdog object to a tuple.
- **update(**kwargs)**: Updates Watchdog object attributes.
```

---

### Run Shell Command Asynchronously

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ibcontroller.html

Executes a shell command asynchronously and captures its standard output. Ensure the command and its arguments are correctly passed as a list.

```python
self._proc = await asyncio.create_subprocess_exec(
            *cmd, stdout=asyncio.subprocess.PIPE
        )
        self._monitor = asyncio.ensure_future(self.monitorAsync())
```
