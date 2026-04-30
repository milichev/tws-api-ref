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

--------------------------------

### Install Everything with Poetry

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Install all dependencies for ib_async, including those for documentation and development testing, using Poetry.

```bash
poetry install --with=docs,dev

```

--------------------------------

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

--------------------------------

### Install All Dependencies for Development

Source: https://ib-api-reloaded.github.io/ib_async/readme.html

Installs all dependencies required for local development, including development, documentation, and testing tools.

```bash
poetry install --with=dev,docs

```

--------------------------------

### Install ib_async with Poetry

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Install the ib_async library using Poetry. This command installs only the library dependencies.

```bash
poetry install

```

--------------------------------

### Install ib_async

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Install the ib_async library using pip. Requires Python 3.10 or higher.

```bash
pip install ib_async

```

--------------------------------

### Basic ib_async Setup and Report Usage

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/flexreport.html

Demonstrates basic setup for logging and using the FlexReport class to download and print available topics from a report.

```python
if __name__ == "__main__":
    util.logToConsole()
    report = FlexReport("945692423458902392892687", "272555")
    print(report.topics())
```

--------------------------------

### Basic Connection Example

Source: https://ib-api-reloaded.github.io/ib_async/index.html

A simple example to establish a connection to TWS or IB Gateway and print a confirmation message. Includes disconnecting after the operation.

```python
from ib_async import *

# Connect to TWS or IB Gateway
ib = IB()
ib.connect('127.0.0.1', 7497, clientId=1)
print("Connected")

# Disconnect when done
ib.disconnect()
```

--------------------------------

### Install Development Dependencies

Source: https://ib-api-reloaded.github.io/ib_async/readme.html

Installs the necessary dependencies for development, including testing tools.

```bash
poetry install --with=dev

```

--------------------------------

### Bracket Order Setup

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Initiates the setup for a bracket order, specifying the action, quantity, and potentially other parameters for the main order and its accompanying stop-limit orders.

```python
def bracketOrder(
        self,
        action: str,
        quantity: float,

```

--------------------------------

### Submit Bracket Order Example

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Example of how to submit a bracket order created by the bracketOrder function.

```python
for o in bracket:
    ib.placeOrder(contract, o)
```

--------------------------------

### Install All Dependencies with Poetry

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Installs all project dependencies, including those for development and documentation, using Poetry. This command is used after cloning the repository.

```bash
poetry install --with=dev,docs
```

--------------------------------

### Install Development Dependencies

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Installs project dependencies including development tools using Poetry. This command is used for setting up the development environment.

```bash
poetry install --with=dev
```

--------------------------------

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

--------------------------------

### Example Contract Instantiations

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Illustrates various ways to create contract objects using keyword arguments or specialized constructors. Examples cover stocks, forex, options, futures, and bonds, demonstrating the flexibility in defining contract details.

```python
Contract(conId=270639)
Stock('AMD', 'SMART', 'USD')
Stock('INTC', 'SMART', 'USD', primaryExchange='NASDAQ')
Forex('EURUSD')
CFD('IBUS30')
Future('ES', '20180921', 'GLOBEX')
Option('SPY', '20170721', 240, 'C', 'SMART')
Bond(secIdType='ISIN', secId='US03076KAA60')
Crypto('BTC', 'PAXOS', 'USD')
```

--------------------------------

### Start TWS/Gateway using IBC

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ibcontroller.html

The start method launches the TWS or Gateway client. It internally uses an asynchronous method to manage the process.

```python
util.run(self.startAsync())
```

--------------------------------

### Initialize and Start IBC

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ibcontroller.html

Instantiate the IBC class with necessary parameters and start the TWS/Gateway client. Ensure IB.run() is called to process events.

```python
ibc = IBC(976, gateway=True, tradingMode='live',
    userid='edemo', password='demouser')
ibc.start()
IB.run()
```

--------------------------------

### Generate Documentation with Poetry

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Install documentation dependencies and build the HTML documentation for ib_async using Poetry and Sphinx.

```bash
poetry install --with=docs
poetry run sphinx-build -b html docs html

```

--------------------------------

### Install Poetry

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Install or upgrade Poetry, a dependency management tool for Python. This is a prerequisite for building the library manually.

```bash
pip install poetry -U

```

--------------------------------

### Jupyter Notebook Connection Pattern

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Specific setup for using ib_async within a Jupyter Notebook environment. Requires starting the asyncio event loop using `util.startLoop()`.

```python
from ib_async import *
util.startLoop()  # Required for notebooks

ib = IB()
ib.connect('127.0.0.1', 7497, clientId=1)
# Your code here - no need to call ib.run()
```

--------------------------------

### Asynchronous Start for IBC

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ibcontroller.html

This asynchronous method prepares and executes the command to start the TWS/Gateway client. It constructs the command-line arguments based on the instance's configuration.

```python
if self._proc:
    return
self._logger.info("Starting")

# map from field names to cmd arguments; key=(UnixArg, WindowsArg)
args = dict(
    twsVersion=("", ""),
    gateway=('--gateway', '/Gateway'),
    tradingMode=('--mode=', '/Mode:'),
    twsPath=('--tws-path=', '/TwsPath:'),
    twsSettingsPath=('--tws-settings-path=', ''),
    ibcPath=('--ibc-path=', '/IbcPath:'),
    ibcIni=('--ibc-ini=', '/Config:'),
    javaPath=('--java-path=', '/JavaPath:'),
    userid=('--user=', '/User:'),
    password=('--pw=', '/PW:'),
    fixuserid=('--fix-user=', '/FIXUser:'),
    fixpassword=('--fix-pw=', '/FIXPW:'),
    on2fatimeout=('--on2fatimeout=', '/On2FATimeout:'),
)

# create shell command
cmd = [
    (
        f"{self.ibcPath}\\scripts\\StartIBC.bat"
        if self._isWindows
        else f"{self.ibcPath}/scripts/ibcstart.sh"
    )
]
for k, v in util.dataclassAsDict(self).items():
    arg = args[k][self._isWindows]
    if v:
        if arg.endswith("=") or arg.endswith(":"):
            cmd.append(f"{arg}{v}")
        elif arg:
            cmd.append(arg)
        else:
            cmd.append(str(v))
```

--------------------------------

### Watchdog Start - Watchdog.start()

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Starts the watchdog. In version 0.9.42, this method was rewritten to not require util.patchAsyncio and is no longer blocking.

```python
Watchdog.start()
```

--------------------------------

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

--------------------------------

### Start API Connection

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Initiates the API connection. Requires client ID and optional capabilities.

```python
def startApi(self):
        self.send(71, 2, self.clientId, self.optCapab)
```

--------------------------------

### Basic Script Connection and Disconnection

Source: https://ib-api-reloaded.github.io/ib_async/index.html

A fundamental example demonstrating how to initialize the IB object, connect to the API, perform operations, and then disconnect cleanly.

```python
from ib_async import *

ib = IB()
ib.connect('127.0.0.1', 7497, clientId=1)
# Your code here
ib.disconnect()
```

--------------------------------

### Upload Package to PyPI with Poetry

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Install dependencies, configure your PyPI token, and publish the ib_async package to PyPI using Poetry.

```bash
poetry install
poetry config pypi-token.pypi your-api-token
poetry publish --build

```

--------------------------------

### Start Watchdog Service

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ibcontroller.html

Initiates the Watchdog's monitoring process by scheduling its asynchronous run method. Emits a 'startingEvent' before starting the background task.

```python
self._logger.info("Starting")
        self.startingEvent.emit(self)
        self._runner = asyncio.ensure_future(self.runAsync())
        return self._runner
```

--------------------------------

### Specialized Contract Examples

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Examples of creating specialized contract objects for different financial instrument types.

```APIDOC
## Specialized Contract Creation Examples

```python
# Stock
Stock('AMD', 'SMART', 'USD')
Stock('INTC', 'SMART', 'USD', primaryExchange='NASDAQ')

# Forex
Forex('EURUSD')

# CFD
CFD('IBUS30')

# Future
Future('ES', '20180921', 'GLOBEX')

# Option
Option('SPY', '20170721', 240, 'C', 'SMART')

# Bond
Bond(secIdType='ISIN', secId='US03076KAA60')

# Crypto
Crypto('BTC', 'PAXOS', 'USD')
```
```

--------------------------------

### Connect and Disconnect IB API

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Basic example demonstrating how to connect to the IB API, set debug mode, log to console, and then disconnect. Ensure the IB Gateway or TWS is running and accessible.

```python
if __name__ == "__main__":
    loop = util.getLoop()
    loop.set_debug(True)
    util.logToConsole(logging.DEBUG)
    ib = IB()
    ib.connect("127.0.0.1", 7497, clientId=1)
    ib.disconnect()
```

--------------------------------

### Start Asyncio Event Loop for Jupyter

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Initializes and starts the asyncio event loop, specifically designed for use within Jupyter notebooks. It ensures proper patching for asynchronous operations in this environment.

```python
def startLoop():
    """Use nested asyncio event loop for Jupyter notebooks."""
    patchAsyncio()
```

--------------------------------

### Create a Bracket Order

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Illustrates the setup for a bracket order, which includes a parent order and associated stop-loss and take-profit orders. Note that `transmit=False` is used for parent and child orders, requiring explicit transmission.

```python
from ib_async import *

ib = IB()
ib.connect('127.0.0.1', 7497, clientId=1)

# Create a bracket order (entry + stop loss + take profit)
contract = Stock('TSLA', 'SMART', 'USD')

# Parent order
parent = LimitOrder('BUY', 100, 250.00)
parent.orderId = ib.client.getReqId()
parent.transmit = False

# Stop loss
stopLoss = StopOrder('SELL', 100, 240.00)
stopLoss.orderId = ib.client.getReqId()
stopLoss.parentId = parent.orderId
stopLoss.transmit = False

```

--------------------------------

### Get All Fills

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Returns a list of all fills from the current session.

```python
def fills(self) -> list[Fill]:
    """List of all fills from this session."""
    return list(self.wrapper.fills.values())
```

--------------------------------

### Get All Tickers

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Returns a list of all available tickers.

```python
def tickers(self) -> list[Ticker]:
    """Get a list of all tickers."""
    return list(self.wrapper.tickers.values())
```

--------------------------------

### Get News Bulletins

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Returns a list of IB news bulletins.

```python
def newsBulletins(self) -> list[NewsBulletin]:
    """List of IB news bulletins."""
    return list(self.wrapper.msgId2NewsBulletin.values())
```

--------------------------------

### Event Handling with Callbacks

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Shows how to subscribe to events using callback functions. This example demonstrates updating when an order status changes or when ticker data is updated. Event handlers can be defined as regular functions or async functions.

```python
# Subscribe to events
def onOrderUpdate(trade):
    print(f"Order update: {trade.orderStatus.status}")

ib.orderStatusEvent += onOrderUpdate

# Or with async
async def onTicker(ticker):
    print(f"Price update: {ticker.last}")

ticker.updateEvent += onTicker
```

--------------------------------

### Get Portfolio Items

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves a list of portfolio items for a specified account, or all retrieved items if no account is specified.

```python
def portfolio(self, account: str = "") -> list[PortfolioItem]:
        """
        List of portfolio items for the given account,
        or of all retrieved portfolio items if account is left blank.

        Args:
            account: If specified, filter for this account name.
        """
        if account:
            return list(self.wrapper.portfolio[account].values())

        return [v for d in self.wrapper.portfolio.values() for v in d.values()]
```

--------------------------------

### Get Positions

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves a list of positions for a specified account, or for all accounts if no account is specified.

```python
def positions(self, account: str = "") -> list[Position]:
        """
        List of positions for the given account,
        or of all accounts if account is left blank.

        Args:
            account: If specified, filter for this account name.
        """
        if account:
            return list(self.wrapper.positions[account].values())

        return [v for d in self.wrapper.positions.values() for v in d.values()]
```

--------------------------------

### Start Ticker Subscription

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Initiates a ticker subscription for a given contract, managing ticker objects and their associations with request IDs and tick types.

```python
def startTicker(self, reqId: int, contract: Contract, tickType: int | str):
        """
        Start a tick request that has the reqId associated with the contract.
        Return the ticker.
        """
        ticker = self.tickers.get(hash(contract))
        if not ticker:
            ticker = Ticker(contract=contract, defaults=self.defaults)
            self.tickers[hash(contract)] = ticker

        self.reqId2Ticker[reqId] = ticker
        self._reqId2Contract[reqId] = contract
        self.ticker2ReqId[tickType][ticker] = reqId
        return ticker
```

--------------------------------

### Get User Info

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves the White Branding ID of the user.

```python
return self._run(self.reqUserInfoAsync())
```

--------------------------------

### Get Account Values

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves a list of account values for a specified account, or for all accounts if no account is specified.

```python
def accountValues(self, account: str = "") -> list[AccountValue]:
        """
        List of account values for the given account,
        or of all accounts if account is left blank.

        Args:
            account: If specified, filter for this account name.
        """
        if account:
            return [
                v for v in self.wrapper.accountValues.values() if v.account == account
            ]

        return list(self.wrapper.accountValues.values())
```

--------------------------------

### Get All Trades

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Returns a list of all order trades from the current session.

```python
def trades(self) -> list[Trade]:
    """List of all order trades from this session."""
    return list(self.wrapper.trades.values())
```

--------------------------------

### Get All Orders

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Returns a list of all orders from the current session, extracting the order object from each trade.

```python
def orders(self) -> list[Order]:
    """List of all orders from this session."""
    return list(trade.order for trade in self.wrapper.trades.values())
```

--------------------------------

### IB Async API - Startup Fetch Options

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Defines the available options for the StartupFetch functionality in the IB Async API.

```APIDOC
## StartupFetch Options

### Description
Enumerates the types of data that can be fetched during the startup process.

### Options
- **POSITIONS**: Fetch account positions.
- **ORDERS_OPEN**: Fetch open orders.
- **ORDERS_COMPLETE**: Fetch completed orders.
- **ACCOUNT_UPDATES**: Fetch account updates.
- **SUB_ACCOUNT_UPDATES**: Fetch sub-account updates.
- **EXECUTIONS**: Fetch executed trades.
```

--------------------------------

### Add util.useQtAlt for Nested Event Loops on Windows

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Introduces `util.useQtAlt()` for using nested event loops on Windows with Qt.

```python
util.useQtAlt()
```

--------------------------------

### TradingSession NamedTuple

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Represents a trading session with start and end datetimes.

```python
class TradingSession(NamedTuple):
    start: dt.datetime
    end: dt.datetime
```

--------------------------------

### Get Account Summary

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously retrieves a summary of account information, optionally filtered by account ID.

```APIDOC
## GET /api/accountSummary

### Description
Provides a comprehensive summary of account financial details. If no account is specified, it returns summaries for all accessible accounts.

### Method
GET

### Endpoint
/api/accountSummary

### Parameters
#### Query Parameters
- **account** (str) - Optional - The specific account ID to retrieve the summary for. If omitted, all account summaries are returned.

### Response
#### Success Response (200)
- **list[AccountValue]** - A list of AccountValue objects containing the summary details for the specified or all accounts.

#### Response Example
```json
[
  {
    "account": "DU12345",
    "NetLiquidation": 100000.0,
    "TotalCashValue": 50000.0
    // ... other fields
  }
]
```
```

--------------------------------

### Get FlexReport Topics

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Retrieves the set of available topics that can be extracted from a FlexReport.

```python
topics()
```

--------------------------------

### Get Server Version

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Returns the current server version of the Interactive Brokers API. This is useful for compatibility checks.

```python
def serverVersion(self) -> int:
        return self._serverVersion

```

--------------------------------

### HistoricalSession Object

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents a historical trading session with a start and end date/time.

```APIDOC
## HistoricalSession Object

### Description
Represents a historical trading session with a start and end date/time.

### Fields
- **startDateTime** (str) - The start date and time of the session. Defaults to ''.
- **endDateTime** (str) - The end date and time of the session. Defaults to ''.
- **refDate** (str) - The reference date for the session. Defaults to ''.

### Methods
- **dict()**: Returns the dataclass values as a dictionary.
- **nonDefaults()**: Returns fields that differ from default values as a dictionary.
- **tuple()**: Returns the dataclass values as a tuple.
- **update(\*srcObjs, \*\*kwargs)**: Updates fields of the dataclass object from source objects or keyword arguments.
```

--------------------------------

### Get User Info Async

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Retrieves the White Branding ID of the current user. This function is asynchronous.

```python
reqUserInfo()
```

--------------------------------

### Connection Error Handling

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Provides an example of handling potential connection errors when establishing a connection to the TWS or Gateway. It specifically catches `ConnectionRefusedError` and general exceptions.

```python
try:
    ib.connect('127.0.0.1', 7497, clientId=1)
except ConnectionRefusedError:
    print("TWS/Gateway not running or API not enabled")
except Exception as e:
    print(f"Connection error: {e}")
```

--------------------------------

### Get All Executions

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Returns a list of all executions from the current session, extracting the execution object from each fill.

```python
def executions(self) -> list[Execution]:
    """List of all executions from this session."""
    return list(fill.execution for fill in self.wrapper.fills.values())
```

--------------------------------

### Subscribe to PnL Events

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Starts a subscription for profit and loss events for a given account and optionally a model code. Returns a PnL object that is kept live updated.

```python
def reqPnL(self, account: str, modelCode: str = "") -> PnL:
        """
        Start a subscription for profit and loss events.

        Returns a :class:`.PnL` object that is kept live updated.
        The result can also be queried from :meth:`.pnl`.

        https://interactivebrokers.github.io/tws-api/pnl.html

        Args:
            account: Subscribe to this account.
            modelCode: If specified, filter for this account model.
        """
        key = (account, modelCode)
        assert key not in self.wrapper.pnlKey2ReqId

        reqId = self.client.getReqId()
        self.wrapper.pnlKey2ReqId[key] = reqId
        pnl = PnL(account, modelCode)
        self.wrapper.reqId2PnL[reqId] = pnl
        self.client.reqPnL(reqId, account, modelCode)

        return pnl
```

--------------------------------

### Subscribe to Single PnL Events

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Starts a subscription for profit and loss events for a single position, identified by account, model code, and contract ID. Returns a PnLSingle object.

```python
def reqPnLSingle(self, account: str, modelCode: str, conId: int) -> PnLSingle:
        """
        Start a subscription for profit and loss events for single positions.

        Returns a :class:`.PnLSingle` object that is kept live updated.
        The result can also be queried from :meth:`.pnlSingle`.

        https://interactivebrokers.github.io/tws-api/pnl.html

        Args:
            account: Subscribe to this account.
            modelCode: Filter for this account model.
            conId: Filter for this contract ID.
        """
        key = (account, modelCode, conId)
        assert key not in self.wrapper.pnlSingleKey2ReqId

        reqId = self.client.getReqId()
        self.wrapper.pnlSingleKey2ReqId[key] = reqId
        pnlSingle = PnLSingle(account, modelCode, conId)
        self.wrapper.reqId2PnlSingle[reqId] = pnlSingle
        self.client.reqPnLSingle(reqId, account, modelCode, conId)

        return pnlSingle
```

--------------------------------

### Build Package with Poetry

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Build the distribution package for ib_async using Poetry.

```bash
poetry build

```

--------------------------------

### Get Forex Pair Name - Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Returns the combined symbol and currency as the currency pair name.

```python
    def pair(self) -> str:
        """Short name of pair."""
        return self.symbol + self.currency
```

--------------------------------

### Get Web Socket Handler Meta Data Async

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously retrieves metadata for the Web Socket Handler.

```APIDOC
## GET /api/wshMetaData

### Description
Asynchronously retrieves metadata required for the Web Socket Handler. It first cancels any existing metadata request and then initiates a new one.

### Method
GET

### Endpoint
/api/wshMetaData

### Parameters
None

### Request Example
None

### Response
#### Success Response (200)
- **wshMetaData** (str) - The metadata string for the Web Socket Handler.

#### Response Example
```json
{
  "wshMetaData": "<xml>...</xml>"
}
```
```

--------------------------------

### Logging Utilities

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Utilities for setting up logging.

```APIDOC
## ib_async.util.logToFile

### Description
Create a log handler that logs to the given file.

### Method
N/A

### Endpoint
N/A

### Parameters
#### Query Parameters
- **path** (str) - Required - The path to the log file.
- **level** (int) - Optional - The logging level, defaults to 20 (INFO).
```

```APIDOC
## ib_async.util.logToConsole

### Description
Create a log handler that logs to the console.

### Method
N/A

### Endpoint
N/A

### Parameters
#### Query Parameters
- **level** (int) - Optional - The logging level, defaults to 20 (INFO).
```

--------------------------------

### Start New IB Request

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Initiates a new request to the IB API. It returns a future object that will be resolved when the request is completed or an error occurs. Optional contract and container arguments can be provided.

```python
def startReq(self, key, contract=None, container=None):
        """
        Start a new request and return the future that is associated
        with the key and container. The container is a list by default.
        """
```

--------------------------------

### Event Class Replacement

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

The 'Event' class has been replaced with the one from the 'eventkit' library, starting in version 0.9.46.

```python
Event
```

--------------------------------

### Get Pending Tickers

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Returns a list of tickers that have pending ticks or DOM (Depth of Market) ticks.

```python
def pendingTickers(self) -> list[Ticker]:
    """Get a list of all tickers that have pending ticks or domTicks."""
    return list(self.wrapper.pendingTickers)
```

--------------------------------

### Initiate What-If Order Asynchronously

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Creates a copy of the provided order and prepares it for a 'what-if' simulation. This is useful for checking order validity and potential outcomes without actually placing the order.

```python
def whatIfOrderAsync(
        self,
        contract: Contract,
        order: Order
    ) -> Awaitable[OrderState]:
        whatIfOrder = copy.copy(order)
```

--------------------------------

### HistoricalSchedule Object

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents a historical schedule, including start and end times, timezone, and a list of historical sessions.

```APIDOC
## HistoricalSchedule Object

### Description
Represents a historical schedule, including start and end times, timezone, and a list of historical sessions.

### Fields
- **startDateTime** (str) - The overall start date and time for the schedule. Defaults to ''.
- **endDateTime** (str) - The overall end date and time for the schedule. Defaults to ''.
- **timeZone** (str) - The timezone of the schedule. Defaults to ''.
- **sessions** (list[HistoricalSession]) - A list of historical sessions within the schedule.

### Methods
- **dict()**: Returns the dataclass values as a dictionary.
- **nonDefaults()**: Returns fields that differ from default values as a dictionary.
- **tuple()**: Returns the dataclass values as a tuple.
- **update(\*srcObjs, \*\*kwargs)**: Updates fields of the dataclass object from source objects or keyword arguments.
```

--------------------------------

### Place Order (What-If)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Initiates an order with the 'whatIf' flag set to true, allowing simulation without actual placement.

```APIDOC
## POST /api/orders/whatIf

### Description
Simulates placing an order without executing it. Useful for checking order validity and potential impact.

### Method
POST

### Endpoint
/api/orders/whatIf

### Parameters
#### Request Body
- **contract** (Contract) - Required - The contract details for the order.
- **whatIfOrder** (object) - Required - Order details with `whatIf` set to `True`.

### Request Example
```json
{
  "contract": {
    "symbol": "AAPL",
    "secType": "STK",
    "exchange": "SMART",
    "currency": "USD"
  },
  "whatIfOrder": {
    "action": "BUY",
    "totalQuantity": 100,
    "orderType": "MKT",
    "whatIf": true
  }
}
```

### Response
#### Success Response (200)
- **future** (Awaitable) - An awaitable object that resolves to the result of the simulated order placement.

#### Response Example
```json
{
  "future": "<awaitable_object>"
}
```
```

--------------------------------

### Initialize FlexReport with Token and Query ID

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/flexreport.html

Instantiate FlexReport to download a report using a provided token and query ID. Ensure the token and queryId are valid for the Interactive Brokers account.

```python
report = FlexReport("945692423458902392892687", "272555")
```

--------------------------------

### Get Real-time Bars

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves a list of all live updated bars. These can be 5-second real-time bars or live updated historical bars.

```python
def realtimeBars(self) -> list[BarDataList | RealTimeBarList]:
    """
    Get a list of all live updated bars. These can be 5 second realtime
    bars or live updated historical bars.
    """
    return list(self.wrapper.reqId2Subscriber.values())
```

--------------------------------

### Initialize VolumeBars

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ticker.html

Initializes VolumeBars to aggregate ticks into bars based on a specified volume. Requires a source for tick data.

```python
class VolumeBars(Op):
    __slots__ = ("_volume", "bars")
    __doc__ = Tickfilter.volumebars.__doc__

    bars: BarList

    def __init__(self, volume, source=None):
        Op.__init__(self, source)
        self._volume = volume
        self.bars = BarList()
```

--------------------------------

### Connect to IB API Async

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously establishes a connection to the IB API. Allows configuration of host, port, client ID, timeout, and other connection parameters.

```python
_async _connectAsync(_host='127.0.0.1'_ , _port=7497_ , _clientId=1_ , _timeout=4_ , _readonly=False_ , _account=''_ , _raiseSyncErrors=False_ , _fetchFields= <StartupFetch.POSITIONS|ORDERS_OPEN|ORDERS_COMPLETE|ACCOUNT_UPDATES|SUB_ACCOUNT_UPDATES|EXECUTIONS: 63>_)
```

--------------------------------

### Get Account Summary (Blocking)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves account summary values. This method is blocking on the first run and non-blocking subsequently. Filters by account name if provided.

```python
def accountSummary(self, account: str = "") -> list[AccountValue]:
        """
        List of account values for the given account,
        or of all accounts if account is left blank.

        This method is blocking on first run, non-blocking after that.

        Args:
            account: If specified, filter for this account name.
        """
        return self._run(self.accountSummaryAsync(account))
```

--------------------------------

### ConnectionStats Data Structure

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Provides statistics about an API connection, including start time, duration, and message/byte counts.

```APIDOC
## ConnectionStats

### Description
Statistics related to an API connection.

### Fields
- **startTime** (datetime) - The start time of the connection.
- **duration** (int) - The duration of the connection in seconds.
- **numBytesRecv** (int) - The total number of bytes received.
- **numBytesSent** (int) - The total number of bytes sent.
- **numMsgRecv** (int) - The total number of messages received.
- **numMsgSent** (int) - The total number of messages sent.
```

--------------------------------

### Get Managed Account Names

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Retrieves the list of account names currently under management. Raises ConnectionError if not connected.

```python
def getAccounts(self) -> list[str]:
        """Get the list of account names that are under management."""
        if not self.isReady():
            raise ConnectionError("Not connected")
        return self._accounts
```

--------------------------------

### Get Open Trades

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Returns a list of all open order trades. Trades are considered open if their status is not in OrderStatus.DoneStates.

```python
def openTrades(self) -> list[Trade]:
    """List of all open order trades."""
    return [
        v
        for v in self.wrapper.trades.values()
        if v.orderStatus.status not in OrderStatus.DoneStates
    ]
```

--------------------------------

### Integrate Qt Event Loop with Asyncio

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Combines Qt's event loop with asyncio for seamless integration. Supports multiple Qt bindings (PyQt5, PyQt6, PySide2, PySide6) and allows configuration of the polling period. Requires importing Qt modules and setting up a QApplication instance.

```python
def useQt(qtLib: str = "PyQt5", period: float = 0.01):
    """
    Run combined Qt5/asyncio event loop.

    Args:
        qtLib: Name of Qt library to use:

          * PyQt5
          * PyQt6
          * PySide2
          * PySide6
        period: Period in seconds to poll Qt.
    """

    def qt_step():
        loop.call_later(period, qt_step)
        if not stack:
            qloop = qc.QEventLoop()
            timer = qc.QTimer()
            timer.timeout.connect(qloop.quit)
            stack.append((qloop, timer))
        qloop, timer = stack.pop()
        timer.start(0)
        qloop.exec() if qtLib == "PyQt6" else qloop.exec_()
        timer.stop()
        stack.append((qloop, timer))
        qApp.processEvents()  # type: ignore

    if qtLib not in {"PyQt5", "PyQt6", "PySide2", "PySide6"}:
        raise RuntimeError(f"Unknown Qt library: {qtLib}")
    from importlib import import_module

    qc = import_module(qtLib + ".QtCore")
    qw = import_module(qtLib + ".QtWidgets")
    global qApp
    qApp = (
        qw.QApplication.instance() or qw.QApplication(sys.argv)  # type: ignore
    )  # type: ignore
    loop = getLoop()
    stack: list = []
    qt_step()
```

--------------------------------

### Get Open Orders

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Returns a list of all open orders. Orders are considered open if their associated trade's status is not in OrderStatus.DoneStates.

```python
def openOrders(self) -> list[Order]:
    """List of all open orders."""
    return [
        trade.order
        for trade in self.wrapper.trades.values()
        if trade.orderStatus.status not in OrderStatus.DoneStates
    ]
```

--------------------------------

### Request Historical Ticks Async

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously requests historical tick data between specified start and end times.

```python
def reqHistoricalTicksAsync(
        self,
        contract: Contract,
        startDateTime: str | datetime.date,
        endDateTime: str | datetime.date,
        numberOfTicks: int,
        whatToShow: str,
        useRth: bool,
        ignoreSize: bool = False,
        miscOptions: list[TagValue] = [],
    ) -> Awaitable[list]:
        reqId = self.client.getReqId()
        future = self.wrapper.startReq(reqId, contract)
        start = util.formatIBDatetime(startDateTime)
        end = util.formatIBDatetime(endDateTime)
        self.client.reqHistoricalTicks(
            reqId,
            contract,
            start,
            end,
            numberOfTicks,
            whatToShow,
            useRth,
            ignoreSize,
            miscOptions,
        )
        return future

```

--------------------------------

### Run Asyncio Event Loop

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Starts the asyncio event loop, which is necessary for the client to process network events and run asynchronously. This method blocks until the loop is stopped.

```python
def run(self):
        loop = getLoop()
        loop.run_forever()

```

--------------------------------

### Client Class Initialization

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Initializes the asynchronous client for Interactive Brokers. It supports request throttling and version compatibility.

```APIDOC
## Client Class

### Description
Socket client for communicating with Interactive Brokers, designed as an asynchronous replacement for `ibapi.client.EClient`.

### Parameters
- **MaxRequests** (int) - Throttle the number of requests to `MaxRequests` per `RequestsInterval` seconds. Set to 0 to disable throttling. (Default: 45)
- **RequestsInterval** (float) - Time interval (in seconds) for request throttling. (Default: 1)
- **MinClientVersion** (int) - Minimum client protocol version. (Default: 157)
- **MaxClientVersion** (int) - Maximum client protocol version. (Default: 178)

### Events
- `apiStart` ()
- `apiEnd` ()
- `apiError` (errorMsg: str)
- `throttleStart` ()
- `throttleEnd` ()
```

--------------------------------

### Use Qt Event Loop - util.useQt()

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Rewritten utility to work with any asyncio event loop, supporting PyQt5 and PySide2 without quamash. This change was part of version 0.9.31.

```python
util.useQt()
```

--------------------------------

### Request Head Time Stamp

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Gets the datetime of the earliest available historical data for the contract.

```APIDOC
## POST /api/historical/headtimestamp

### Description
Gets the datetime of the earliest available historical data for the contract.

### Method
POST

### Endpoint
/api/historical/headtimestamp

### Parameters
#### Request Body
- **contract** (Contract) - Required - Contract of interest.
- **whatToShow** (str) - Required - Specifies the type of data to show (e.g., 'Bid_Ask', 'Midpoint', 'Trades').
- **useRTH** (bool) - Required - If True then only show data from within Regular Trading Hours, if False then show all data.
- **formatDate** (int) - Optional - If set to 2 then the result is returned as a timezone-aware datetime.datetime with UTC timezone. Defaults to 1.

### Request Example
```json
{
  "contract": {
    "symbol": "MSFT",
    "secType": "STK",
    "exchange": "SMART"
  },
  "whatToShow": "Midpoint",
  "useRTH": true,
  "formatDate": 2
}
```

### Response
#### Success Response (200)
- **headTimestamp** (datetime.datetime) - The datetime of the earliest available historical data.

#### Response Example
```json
{
  "headTimestamp": "2023-01-01T09:30:00Z"
}
```
```

--------------------------------

### Clone ib_async Repository

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Clones the `ib_async` project repository from GitHub to a local machine. This is the first step in setting up the project for local development.

```bash
git clone https://github.com/ib-api-reloaded/ib_async.git
cd ib_async
```

--------------------------------

### Get Web Socket Handler Event Data Async

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously retrieves event data from the Web Socket Handler.

```APIDOC
## POST /api/wshEventData

### Description
Asynchronously retrieves event data from the Web Socket Handler. It cancels any existing event data request before initiating a new one, and then cancels the request after retrieval.

### Method
POST

### Endpoint
/api/wshEventData

### Parameters
#### Request Body
- **data** (WshEventData) - Required - The event data object specifying the event to retrieve.

### Request Example
```json
{
  "data": {
    "eventType": "MarketData",
    "symbol": "AAPL"
  }
}
```

### Response
#### Success Response (200)
- **wshEventData** (str) - The retrieved event data string.

#### Response Example
```json
{
  "wshEventData": "<event>...</event>"
}
```
```

--------------------------------

### Initialize ib_async Client

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Initializes the asynchronous client with a wrapper object. It sets up event handlers and internal state for connection management and request throttling.

```python
class Client:
    """
    Replacement for ``ibapi.client.EClient`` that uses asyncio.

    The client is fully asynchronous and has its own
    event-driven networking code that replaces the
    networking code of the standard EClient.
    It also replaces the infinite loop of ``EClient.run()``
    with the asyncio event loop. It can be used as a drop-in
    replacement for the standard EClient as provided by IBAPI.

    Compared to the standard EClient this client has the following
    additional features:

    * ``client.connect()`` will block until the client is ready to
      serve requests; It is not necessary to wait for ``nextValidId``
      to start requests as the client has already done that.
      The reqId is directly available with :py:meth:`.getReqId()`.

    * ``client.connectAsync()`` is a coroutine for connecting asynchronously.

    * When blocking, ``client.connect()`` can be made to time out with
      the timeout parameter (default 2 seconds).

    * Optional ``wrapper.priceSizeTick(reqId, tickType, price, size)`` that
      combines price and size instead of the two wrapper methods
      priceTick and sizeTick.

    * Automatic request throttling.

    * Optional ``wrapper.tcpDataArrived()`` method;
      If the wrapper has this method it is invoked directly after
      a network packet has arrived.
      A possible use is to timestamp all data in the packet with
      the exact same time.

    * Optional ``wrapper.tcpDataProcessed()`` method;
      If the wrapper has this method it is invoked after the
      network packet's data has been handled.
      A possible use is to write or evaluate the newly arrived data in
      one batch instead of item by item.

    Parameters:
      MaxRequests (int):
        Throttle the number of requests to ``MaxRequests`` per
        ``RequestsInterval`` seconds. Set to 0 to disable throttling.
      RequestsInterval (float):
        Time interval (in seconds) for request throttling.
      MinClientVersion (int):
        Client protocol version.
      MaxClientVersion (int):
        Client protocol version.

    Events:
      * ``apiStart`` ()
      * ``apiEnd`` ()
      * ``apiError`` (errorMsg: str)
      * ``throttleStart`` ()
      * ``throttleEnd`` ()
    """

    events = ("apiStart", "apiEnd", "apiError", "throttleStart", "throttleEnd")

    MaxRequests = 45
    RequestsInterval = 1

    MinClientVersion = 157
    MaxClientVersion = 178

    DISCONNECTED, CONNECTING, CONNECTED = range(3)

    def __init__(self, wrapper):
        self.wrapper = wrapper
        self.decoder = Decoder(wrapper, 0)
        self.apiStart = Event("apiStart")
        self.apiEnd = Event("apiEnd")
        self.apiError = Event("apiError")
        self.throttleStart = Event("throttleStart")
        self.throttleEnd = Event("throttleEnd")
        self._logger = logging.getLogger("ib_async.client")

        self.conn = Connection()
        self.conn.hasData += self._onSocketHasData
        self.conn.disconnected += self._onSocketDisconnected

        # extra optional wrapper methods
        self._priceSizeTick = getattr(wrapper, "priceSizeTick", None)
        self._tcpDataArrived = getattr(wrapper, "tcpDataArrived", None)
        self._tcpDataProcessed = getattr(wrapper, "tcpDataProcessed", None)

        self.host = ""
        self.port = -1
        self.clientId = -1
        self.optCapab = ""
        self.connectOptions = b""
        self.reset()

```

--------------------------------

### Get WSH Meta Data Async

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously retrieves WSH meta data. It first cancels any existing request and then initiates a new one, waiting for the future to complete. Requires `asyncio`.

```python
async def getWshMetaDataAsync(self) -> str:
        if self.wrapper.wshMetaReqId:
            self.cancelWshMetaData()

        self.reqWshMetaData()
        future = self.wrapper.startReq(self.wrapper.wshMetaReqId, container="")
        await future

        return future.result()
```

--------------------------------

### Initialize FlexReport from File Path

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/flexreport.html

Load an existing Flex report from a specified XML file path. This is useful for processing previously downloaded statements.

```python
report = FlexReport(path="path/to/your/report.xml")
```

--------------------------------

### Subscribe to Market Depth Data

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Subscribes to market depth data for a given contract. Use this to get real-time bid and ask prices. The number of depth levels is limited to 5.

```python
def reqMktDepth(
        self,
        contract: Contract,
        numRows: int = 5,
        isSmartDepth: bool = False,
        mktDepthOptions=None,
    ) -> Ticker:
        """
        Subscribe to market depth data (a.k.a. DOM, L2 or order book).

        https://interactivebrokers.github.io/tws-api/market_depth.html

        Args:
            contract: Contract of interest.
            numRows: Number of depth level on each side of the order book
                (5 max).
            isSmartDepth: Consolidate the order book across exchanges.
            mktDepthOptions: Unknown.

        Returns:
            The Ticker that holds the market depth in ``ticker.domBids``
            and ``ticker.domAsks`` and the list of MktDepthData in
            ``ticker.domTicks``.
        """
        reqId = self.client.getReqId()
        ticker = self.wrapper.startTicker(reqId, contract, "mktDepth")
        ticker.domBids.clear()
        ticker.domAsks.clear()
        ticker.domBidsDict.clear()
        ticker.domAsksDict.clear()
        self.client.reqMktDepth(reqId, contract, numRows, isSmartDepth, mktDepthOptions)
        return ticker
```

--------------------------------

### Downloading a Flex Report

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/flexreport.html

Demonstrates how to download a Flex Report using a token and query ID.

```APIDOC
## POST /AccountManagement/FlexWebService/SendRequest

### Description
Initiates the download of a Flex Report from Interactive Brokers using provided credentials.

### Method
POST (Implicitly via `urlopen` in the `download` method)

### Endpoint
`https://ndcdyn.interactivebrokers.com/AccountManagement/FlexWebService/SendRequest?t={token}&q={queryId}&v=3`

### Parameters
#### Query Parameters
- **t** (string) - Required - The authentication token for the Flex Web Service.
- **q** (string) - Required - The query ID for the specific report requested.
- **v** (string) - Required - The API version, typically '3'.

### Request Example
```python
from ib_async import FlexReport

token = "YOUR_TOKEN"
queryId = "YOUR_QUERY_ID"

try:
    report = FlexReport(token=token, queryId=queryId)
    print("Report downloaded successfully.")
except Exception as e:
    print(f"Error downloading report: {e}")
```

### Response
#### Success Response (200)
Upon successful initiation, the service prepares the report. The `download` method then polls for the report's availability.

#### Response Example (Status Check)
```xml
<Status>Success</Status>
<ReferenceCode>...</ReferenceCode>
<Url>...</Url>
```

#### Error Response
- **ErrorCode** (string) - The error code.
- **ErrorMessage** (string) - A description of the error.

#### Error Response Example
```xml
<Status>Error</Status>
<ErrorCode>1234</ErrorCode>
<ErrorMessage>Invalid token or query ID</ErrorMessage>
```
```

--------------------------------

### TimeBars Initialization and Timer Connection

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ticker.html

Initializes TimeBars, connecting to a timer event for bar creation. Manages a BarList and emits updates.

```python
def __init__(self, timer, source=None):
        Op.__init__(self, source)
        self._timer = timer
        self._timer.connect(self._on_timer, None, self._on_timer_done)
        self.bars = BarList()
```

--------------------------------

### Handle Timer Event for New Bar

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ticker.html

Processes timer events to finalize the current bar and start a new one. Handles edge cases for empty or incomplete bars and emits bar completion events.

```python
def _on_timer(self, time):
        if self.bars:
            bar = self.bars[-1]
            if isNan(bar.close) and len(self.bars) > 1:
                bar.open = bar.high = bar.low = bar.close = self.bars[-2].close

            self.bars.updateEvent.emit(self.bars, True)
            self.emit(bar)

        self.bars.append(Bar(time))
```

--------------------------------

### Initialize Index Contract - Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Represents an index contract. Requires symbol, exchange, and currency.

```python
class Index(Contract):
    def __init__(self, symbol: str = "", exchange: str = "", currency: str = "", **kwargs):
        """
        Index.

        Args:
            symbol: Symbol name.
            exchange: Destination exchange.
            currency: Underlying currency.
        """
        Contract.__init__(
            self, "IND", symbol=symbol, exchange=exchange, currency=currency, **kwargs
        )
```

--------------------------------

### Get Flex Report URL

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/flexreport.html

Retrieve the base URL for the Flex Web Service. It defaults to a predefined URL but can be overridden by the IB_FLEXREPORT_URL environment variable.

```python
def is_valid_url(url: str) -> bool:
            try:
                result = urlparse(url)
                # Must have scheme (http/https) and netloc (domain)
                return all([result.scheme, result.netloc])
            except Exception:
                return False

        _url = os.getenv("IB_FLEXREPORT_URL", FLEXREPORT_URL)
        if is_valid_url(_url):
            return _url
        raise FlexError(
            "Invalid URL, please check that env variable IB_FLEXREPORT_URL is set correctly."
        )
```

--------------------------------

### Get Available Topics from Report

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/flexreport.html

Retrieve a set of all available topics (data categories) within the loaded Flex report. This helps in identifying what data can be extracted.

```python
print(report.topics())
```

--------------------------------

### Import Order Conditions

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Order conditions are now imported into the `ib_async` namespace.

```python
Import order conditions
```

--------------------------------

### IB Async API - Account and Portfolio Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Covers methods for retrieving account details, portfolio information, and PnL data.

```APIDOC
## Account and Portfolio Methods

### Description
Methods for querying account information, portfolio holdings, and profit/loss details.

### Methods
- **IB.managedAccounts()**: Retrieves a list of managed accounts.
- **IB.accountValues()**: Fetches account values.
- **IB.accountSummary()**: Retrieves an account summary.
- **IB.accountSummaryAsync()**: Retrieves an account summary asynchronously.
- **IB.portfolio()**: Fetches portfolio details.
- **IB.positions()**: Retrieves current positions.
- **IB.pnl()**: Fetches profit and loss data.
- **IB.pnlSingle()**: Fetches single PnL data.
- **IB.cancelPnL()**: Cancels PnL requests.
- **IB.reqPnLSingle()**: Requests single PnL data.
- **IB.cancelPnLSingle()**: Cancels single PnL requests.
- **IB.reqAccountUpdates()**: Requests account updates.
- **IB.reqAccountUpdatesAsync()**: Requests account updates asynchronously.
- **IB.reqAccountUpdatesMulti()**: Requests multi-account updates.
- **IB.reqAccountUpdatesMultiAsync()**: Requests multi-account updates asynchronously.
- **IB.reqAccountSummary()**: Requests an account summary.
- **IB.reqAccountSummaryAsync()**: Requests an account summary asynchronously.
- **IB.reqPositions()**: Requests current positions.
- **IB.reqPositionsAsync()**: Requests current positions asynchronously.
- **IB.reqPnL()**: Requests profit and loss data.
- **IB.reqPnLSingle()**: Requests single PnL data.
- **IB.qualifyContracts()**: Qualifies contracts.
- **IB.qualifyContractsAsync()**: Qualifies contracts asynchronously.
```

--------------------------------

### Fetch Historical Data with ib_async

Source: https://ib-api-reloaded.github.io/ib_async/readme.html

Fetches historical stock data for different timeframes (daily and 5-minute) and calculates a 20-day Simple Moving Average. Requires connection to IB TWS/Gateway.

```python
from ib_async import *
import pandas as pd

ib = IB()
ib.connect('127.0.0.1', 7497, clientId=1)

# Get multiple timeframes
contract = Stock('SPY', 'SMART', 'USD')

# Daily bars for 1 year
daily_bars = ib.reqHistoricalData(
    contract, endDateTime='', durationStr='1 Y',
    barSizeSetting='1 day', whatToShow='TRADES', useRTH=True)

# 5-minute bars for last 5 days
intraday_bars = ib.reqHistoricalData(
    contract, endDateTime='', durationStr='5 D',
    barSizeSetting='5 mins', whatToShow='TRADES', useRTH=True)

# Convert to DataFrames
daily_df = util.df(daily_bars)
intraday_df = util.df(intraday_bars)

print(f"Daily bars: {len(daily_df)} rows")
print(f"Intraday bars: {len(intraday_df)} rows")

# Calculate simple moving average
daily_df['SMA_20'] = daily_df['close'].rolling(20).mean()
print(daily_df[['date', 'close', 'SMA_20']].tail())

ib.disconnect()

```

--------------------------------

### Get PnL Data

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves a list of subscribed PnL (profit and loss) objects, optionally filtered by account and/or model code.

```python
def pnl(self, account="", modelCode="") -> list[PnL]:
        """
        List of subscribed :class:`.PnL` objects (profit and loss),
        optionally filtered by account and/or modelCode.
        """
```

--------------------------------

### Loading a Flex Report from File

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/flexreport.html

Shows how to load an existing Flex Report from a local XML file.

```APIDOC
## Load Flex Report from File

### Description
Loads a previously downloaded Flex Report from a local XML file.

### Method
N/A (Class method)

### Endpoint
N/A

### Parameters
#### Initialization Parameter
- **path** (string) - Required - The file path to the local XML report file.

### Request Example
```python
from ib_async import FlexReport

file_path = "/path/to/your/report.xml"

try:
    report = FlexReport(path=file_path)
    print(f"Report loaded from {file_path} successfully.")
except FileNotFoundError:
    print(f"Error: File not found at {file_path}")
except Exception as e:
    print(f"Error loading report: {e}")
```

### Response
N/A (Data is loaded into the `FlexReport` object's attributes.)
```

--------------------------------

### Event Handling in ib_async

Source: https://ib-api-reloaded.github.io/ib_async/readme.html

Demonstrates how to subscribe to and handle events, such as order status updates and real-time ticker updates, using callbacks.

```python
# Subscribe to events
def onOrderUpdate(trade):
    print(f"Order update: {trade.orderStatus.status}")

ib.orderStatusEvent += onOrderUpdate

# Or with async
async def onTicker(ticker):
    print(f"Price update: {ticker.last}")

ticker.updateEvent += onTicker

```

--------------------------------

### Handle Historical Schedule Data

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Processes and stores historical schedule data, including start and end times, timezone, and a list of historical sessions.

```python
def historicalSchedule(
        self, reqId: int,
        startDateTime: str,
        endDateTime: str,
        timeZone: str,
        sessions: list[HistoricalSession],
    ):
        schedule = HistoricalSchedule(startDateTime, endDateTime, timeZone, sessions)
        self._endReq(reqId, schedule)
```

--------------------------------

### Integrate IB API with PyGame Event Loop

Source: https://ib-api-reloaded.github.io/ib_async/_sources/recipes.rst.txt

This example shows how to use ib_async within a PyGame application. Call `ib.sleep()` periodically to update the IB connection while also processing PyGame events.

```python
import ib_async as ibi
import pygame


def onTicker(ticker):
    screen.fill(bg_color)
    text = f'bid: {ticker.bid}   ask: {ticker.ask}'
    quote = font.render(text, True, fg_color)
    screen.blit(quote, (40, 40))
    pygame.display.flip()


pygame.init()
screen = pygame.display.set_mode((800, 600))
font = pygame.font.SysFont('arial', 48)
bg_color = (255, 255, 255)
fg_color = (0, 0, 0)

ib = ibi.IB()
ib.connect()
contract = ibi.Forex('EURUSD')
ticker = ib.reqMktData(contract)
ticker.updateEvent += onTicker

running = True
while running:
    # This updates IB-insync:
    ib.sleep(0.03)

    # This updates PyGame:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
            pygame.quit()
```

--------------------------------

### Enable Auto Open Orders

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Configure the client to automatically bind to open orders.

```python
ib.reqAutoOpenOrders(_autoBind =True_)
```

--------------------------------

### Place a Simple Market Order

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Demonstrates placing a simple market order to buy 100 shares of AAPL. It includes monitoring the order status until it's completed.

```python
from ib_async import *

ib = IB()
ib.connect('127.0.0.1', 7497, clientId=1)

# Create a contract and order
contract = Stock('AAPL', 'SMART', 'USD')
order = MarketOrder('BUY', 100)

# Place the order
trade = ib.placeOrder(contract, order)
print(f"Order placed: {trade}")

# Monitor order status
while not trade.isDone():
    ib.sleep(1)
    print(f"Order status: {trade.orderStatus.status}")

ib.disconnect()
```

--------------------------------

### Async Application Connection

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Demonstrates how to use ib_async within an asynchronous Python application using `asyncio`. Requires using `connectAsync` and `await` for connection.

```python
import asyncio
from ib_async import *

async def main():
    ib = IB()
    await ib.connectAsync('127.0.0.1', 7497, clientId=1)
    # Your async code here
    ib.disconnect()

asyncio.run(main())
```

--------------------------------

### Get New Request ID

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Generates and returns a new unique request ID. Raises a ConnectionError if the client is not connected.

```python
def getReqId(self) -> int:
        """Get new request ID."""
        if not self.isReady():
            raise ConnectionError("Not connected")

        newId = self._reqIdSeq
        self._reqIdSeq += 1
        return newId
```

--------------------------------

### Request Market Data Tickers Asynchronously

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously requests market data tickers for one or more contracts. It initiates requests, starts ticker tracking, and gathers futures to ensure all data is received before returning the ticker objects.

```python
async def reqTickersAsync(
        self,
        *contracts: Contract, regulatorySnapshot: bool = False
    ) -> list[Ticker]:
        futures = []
        tickers = []
        reqIds = []
        for contract in contracts:
            reqId = self.client.getReqId()
            reqIds.append(reqId)
            future = self.wrapper.startReq(reqId, contract)
            futures.append(future)
            ticker = self.wrapper.startTicker(reqId, contract, "snapshot")
            tickers.append(ticker)
            self.client.reqMktData(reqId, contract, "", True, regulatorySnapshot, [])

        await asyncio.gather(*futures)

        for ticker in tickers:
            self.wrapper.endTicker(ticker, "snapshot")

        return tickers
```

--------------------------------

### Get asyncio event loop

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Retrieves the asyncio event loop, handling different contexts (running, thread-specific, or creating a new one). Avoids deprecation warnings and stale loop issues.

```python
def getLoop():
    """
    Get asyncio event loop with smart fallback handling.

    This function is designed for use in synchronous contexts or when the
    execution context is unknown. It will:
    1. Try to get the currently running event loop (if in async context)
    2. Fall back to getting the current thread's event loop via policy
    3. Create a new event loop if none exists or if the existing one is closed

    For performance-critical async code paths, prefer using
    asyncio.get_running_loop() directly instead of this function.

    Note: This function does NOT cache the loop to avoid stale loop bugs
    when loops are closed and recreated (e.g., in testing, Jupyter notebooks).
    """
    try:
        # Fast path: we're in an async context (coroutine or callback)
        loop = asyncio.get_running_loop()
        return loop
    except RuntimeError:
        pass

    # We're in a sync context or no loop is running
    # Use the event loop policy to get the loop for this thread
    # This avoids deprecation warnings from get_event_loop() in Python 3.10+
    try:
        loop = asyncio.get_event_loop_policy().get_event_loop()
    except RuntimeError:
        # No event loop exists for this thread, create one
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        return loop
```

--------------------------------

### Get or Create Asyncio Event Loop

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Use this function in synchronous contexts or when the execution context is unknown. It attempts to retrieve the current event loop, falls back to the thread's policy, or creates a new one if necessary. Avoid using this for performance-critical async code paths; prefer asyncio.get_running_loop() directly. This function does not cache the loop to prevent stale loop issues.

```python
ib_async.util.startLoop()
```

--------------------------------

### Default Arguments for connect and reqMktData

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Provides default arguments for the `ib.connect()` and `ib.reqMktData()` methods.

```python
ib.connect()
```

```python
ib.reqMktData()
```

--------------------------------

### Wrapper Methods

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Placeholder methods for common IB API callbacks.

```APIDOC
## Wrapper Methods

### Description
Placeholder methods for common IB API callbacks.

### Method
Callback methods like `connectAck`, `nextValidId`, `managedAccounts`, `updateAccountTime`, `updateAccountValue`.

### Endpoint
N/A (Callback Methods)

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Request Example
None

### Response
#### Success Response (200)
None

#### Response Example
None
```

--------------------------------

### timeRange

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

An iterator that yields datetime objects at specified time intervals between a start and end time. It waits until each time point is reached.

```APIDOC
## timeRange

### Description
Iterator that waits periodically until certain time points are reached while yielding those time points.

### Method
`timeRange`

### Parameters
#### Arguments
- **start** (Time_t) - Required - Start time, can be specified as datetime.datetime, or as datetime.time in which case today is used as the date.
- **end** (Time_t) - Required - End time, can be specified as datetime.datetime, or as datetime.time in which case today is used as the date.
- **step** (float) - Required - The number of seconds of each period.

### Response Example
```json
{
  "yielded_times": [
    "2023-10-27T10:00:00",
    "2023-10-27T10:05:00"
  ]
}
```
```

--------------------------------

### Request Historical Data

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Requests historical bar data for a specified contract. The example shows how to request 30 days of hourly midpoint data for EURUSD and convert the result into a pandas DataFrame.

```python
from ib_async import *
# util.startLoop()  # uncomment this line when in a notebook

ib = IB()
ib.connect('127.0.0.1', 7497, clientId=1)

# Request historical data
contract = Forex('EURUSD')
bars = ib.reqHistoricalData(
    contract, endDateTime='', durationStr='30 D',
    barSizeSetting='1 hour', whatToShow='MIDPOINT', useRTH=True)

# Convert to pandas dataframe (pandas needs to be installed):
df = util.df(bars)
print(df.head())

ib.disconnect()
```

--------------------------------

### Get PnLSingle Data

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves a list of PnLSingle objects, optionally filtered by account, model code, or conId. These objects represent profit and loss for single positions and are kept live updated.

```python
def pnlSingle(self, account: str = "", modelCode: str = "", conId: int = 0) -> list[PnLSingle]:
    """
    List of subscribed :class:`.PnLSingle` objects (profit and loss for
    single positions).

    The :class:`.PnLSingle` objects are kept live updated.

    Args:
        account: If specified, filter for this account name.
        modelCode: If specified, filter for this account model.
        conId: If specified, filter for this contract ID.
    """
    return [
        v
        for v in self.wrapper.reqId2PnlSingle.values()
        if (not account or v.account == account)
        and (not modelCode or v.modelCode == modelCode)
        and (not conId or v.conId == conId)
    ]
```

--------------------------------

### run

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Runs asyncio event loop with or without awaitables.

```APIDOC
## Run Asyncio Event Loop

### Description
Manages the execution of the asyncio event loop. It can run the loop indefinitely if no awaitables are provided, or run until specified awaitables (tasks, futures, coroutines) complete. It also supports an optional timeout.

### Method
`run(*awaitables: Awaitable, timeout: float | None = None)`

### Parameters
- **`*awaitables`** (Awaitable) - One or more awaitable objects to run.
- **`timeout`** (float | None, optional) - The maximum time in seconds to wait for the awaitables to complete. If `None`, there is no timeout. If the timeout is reached, `asyncio.TimeoutError` is raised.

### Behavior
- If no `awaitables` are provided:
    - If the event loop is already running, it returns immediately.
    - Otherwise, it runs the event loop forever until interrupted.
    - It attempts to cancel any pending tasks upon exit.
- If `awaitables` are provided:
    - It runs the event loop until all provided awaitables are completed.
    - If a `timeout` is specified, it wraps the execution in `asyncio.wait_for`.

### Returns
- The results of the completed awaitables if provided, otherwise `None`.

### Example
```python
import asyncio

async def my_coroutine(name, delay):
    print(f"Starting {name}")
    await asyncio.sleep(delay)
    print(f"Finished {name}")
    return f"{name} result"

# Run a single coroutine with a timeout
try:
    result = run(my_coroutine("Task 1", 2), timeout=3)
    print(f"Single task result: {result}")
except asyncio.TimeoutError:
    print("Task timed out")

# Run multiple coroutines concurrently
results = run(
    my_coroutine("Task A", 1),
    my_coroutine("Task B", 3)
)
print(f"Multiple tasks results: {results}")

# Run the event loop indefinitely (e.g., for a server)
# run() 
```
```

--------------------------------

### Add IBController

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Introduces the `IBController` class for managing IB connections.

```python
IBController
```

--------------------------------

### Get Wall Street Horizon Event Data

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Retrieves Wall Street Horizon event data as a JSON string. `getWshMetaData()` must be called first. A subscription is required. This is a blocking convenience method.

```python
# For IBM (with conId=8314) query the:
#   - Earnings Dates (wshe_ed)
```

--------------------------------

### Load FlexReport from File

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Loads a FlexReport from a specified XML file path.

```python
load(_path_)
```

--------------------------------

### Get Connection Statistics

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Retrieves statistics about the current connection, such as the number of messages received and bytes transferred. Requires the API to be ready.

```python
def connectionStats(self) -> ConnectionStats:
        """Get statistics about the connection."""
        if not self.isReady():

```

--------------------------------

### Get WSH Metadata

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves Wall Street Horizon metadata, including available filters and event types, as a JSON string. A Wall Street Horizon subscription is required.

```python
# Get the list of available filters and event types:
meta = ib.getWshMetaData()
print(meta)
```

--------------------------------

### Utility Functions

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Functions for managing asyncio event loops and Qt integration.

```APIDOC
## ib_async.util.startLoop()

### Description
Use nested asyncio event loop for Jupyter notebooks. This function is designed for use in synchronous contexts or when the execution context is unknown. It will:
1. Try to get the currently running event loop (if in async context)
2. Fall back to getting the current thread’s event loop via policy
3. Create a new event loop if none exists or if the existing one is closed

For performance-critical async code paths, prefer using asyncio.get_running_loop() directly instead of this function.

Note: This function does NOT cache the loop to avoid stale loop bugs when loops are closed and recreated (e.g., in testing, Jupyter notebooks).

### Method
N/A (Function call)

### Endpoint
N/A

### Parameters
None

### Request Example
N/A

### Response
N/A
```

```APIDOC
## ib_async.util.useQt(_qtLib ='PyQt5'_, _period =0.01_)

### Description
Run combined Qt5/asyncio event loop.

### Method
N/A (Function call)

### Endpoint
N/A

### Parameters
#### Query Parameters
- **qtLib** (str) - Required - Name of Qt library to use: PyQt5, PyQt6, PySide2, PySide6
- **period** (float) - Required - Period in seconds to poll Qt.

### Request Example
N/A

### Response
N/A
```

```APIDOC
## ib_async.util.formatIBDatetime(_t_)

### Description
Format date or datetime to string that IB uses.

### Method
N/A (Function call)

### Endpoint
N/A

### Parameters
#### Path Parameters
- **t** (date | datetime) - Required - The date or datetime object to format.

### Request Example
N/A

### Response
#### Success Response (200)
- **formatted_string** (str) - The formatted date or datetime string.

### Response Example
N/A
```

```APIDOC
## ib_async.util.parseIBDatetime(_s_)

### Description
Parse string in IB date or datetime format to datetime.

### Method
N/A (Function call)

### Endpoint
N/A

### Parameters
#### Path Parameters
- **s** (str) - Required - The string to parse.

### Request Example
N/A

### Response
#### Success Response (200)
- **parsed_datetime** (date | datetime) - The parsed date or datetime object.

### Response Example
N/A
```

--------------------------------

### OrderStateNumeric Type Helper

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Use this type helper for mypy to check against when converting OrderState to .numeric(). Example: state_numeric: OrderStateNumeric = state.numeric(digits=2)

```python
state_numeric: OrderStateNumeric = state.numeric(digits=2)
```

--------------------------------

### Log to File

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Configures a file handler for logging. If logger handlers exist, it sets the log level for 'ib_async'. Otherwise, it initializes the logger with the specified level and a file handler.

```python
import logging

def logToFile(path, level=logging.INFO):
    """Create a log handler that logs to the given file."""
    logger = logging.getLogger()
    if logger.handlers:
        logging.getLogger("ib_async").setLevel(level)
    else:
        logger.setLevel(level)

    formatter = logging.Formatter("%(asctime)s %(name)s %(levelname)s %(message)s")
    handler = logging.FileHandler(path)
    handler.setFormatter(formatter)
    logger.addHandler(handler)
```

--------------------------------

### Request Account Summary Async

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously requests a detailed account summary. Returns an Awaitable that resolves to None. Includes a comprehensive list of tags for account data.

```python
def reqAccountSummaryAsync(self) -> Awaitable[None]:
        reqId = self.client.getReqId()
        future = self.wrapper.startReq(reqId)
        tags = (
            "AccountType,NetLiquidation,TotalCashValue,SettledCash,AccruedCash,BuyingPower,EquityWithLoanValue,PreviousDayEquityWithLoanValue,GrossPositionValue,RegTEquity,RegTMargin,SMA,InitMarginReq,MaintMarginReq,AvailableFunds,ExcessLiquidity,Cushion,FullInitMarginReq,FullMaintMarginReq,FullAvailableFunds,FullExcessLiquidity,LookAheadNextChange,LookAheadInitMarginReq,LookAheadMaintMarginReq,LookAheadAvailableFunds,LookAheadExcessLiquidity,HighestSeverity,DayTradesRemaining,DayTradesRemainingT+1,DayTradesRemainingT+2,DayTradesRemainingT+3,DayTradesRemainingT+4,Leverage,$LEDGER:ALL"
        )
        self.client.reqAccountSummary(reqId, "All", tags)
        return future
```

--------------------------------

### Initialize TickBars

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ticker.html

Initializes TickBars to aggregate ticks into bars based on a specified count. Requires a source for tick data.

```python
class TickBars(Op):
    __slots__ = ("_count", "bars")
    __doc__ = Tickfilter.tickbars.__doc__

    bars: BarList

    def __init__(self, count, source=None):
        Op.__init__(self, source)
        self._count = count
        self.bars = BarList()
```

--------------------------------

### Get News Ticks

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Returns a list of ticks containing headline news. The full article content can be retrieved using the `reqNewsArticle` method.

```python
def newsTicks(self) -> list[NewsTick]:
    """
    List of ticks with headline news.
    The article itself can be retrieved with :meth:`.reqNewsArticle`.
    """
    return self.wrapper.newsTicks
```

--------------------------------

### Initialize Commodity Contract - Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Represents a commodity contract. Requires symbol, exchange, and currency.

```python
class Commodity(Contract):
    def __init__(self, symbol: str = "", exchange: str = "", currency: str = "", **kwargs):
        """
        Commodity.

        Args:
            symbol: Symbol name.
            exchange: Destination exchange.
            currency: Underlying currency.
        """
        Contract.__init__(
            self, "CMDTY", symbol=symbol, exchange=exchange, currency=currency, **kwargs
        )
```

--------------------------------

### Get PnL Data

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves a list of PnL objects, optionally filtered by account or model code. These objects are kept live updated.

```python
def pnl(self, account: str = "", modelCode: str = "") -> list[PnL]:
    """
    List of subscribed :class:`.PnL` objects (profit and loss).

    The :class:`.PnL` objects are kept live updated.

    Args:
        account: If specified, filter for this account name.
        modelCode: If specified, filter for this account model.
    """
    return [
        v
        for v in self.wrapper.reqId2PnL.values()
        if (not account or v.account == account)
        and (not modelCode or v.modelCode == modelCode)
    ]
```

--------------------------------

### Request All Open Orders - ib.reqAllOpenOrders()

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

This method is used to request all currently open orders. No specific version requirements are mentioned, but it's part of the order management features.

```python
ib.reqAllOpenOrders()
```

--------------------------------

### Get WSH Event Calendar Data

Source: https://ib-api-reloaded.github.io/ib_async/_sources/recipes.rst.txt

Retrieves corporate event data (e.g., Earnings Dates, Board of Directors meetings) for specified instruments using a Wall Street Horizon subscription. Requires qualifying the contract first.

```python
from ib_async import *

ib = IB()
ib.connect('127.0.0.1', 7497, clientId=1)

# Get the conId of an instrument (IBM in this case):
ibm = Stock('IBM', 'SMART', 'USD')
ib.qualifyContracts(ibm)
print(ibm.conId)  # is 8314

# Get the list of available filters and event types:
meta = ib.getWshMetaData()
print(meta)

# For IBM (with conId=8314) query the:
#   - Earnings Dates (wshe_ed)
#   - Board of Directors meetings (wshe_bod)
data = WshEventData(
    filter = '''{
      "country": "All",
      "watchlist": ["8314"],
      "limit_region": 10,
      "limit": 10,
      "wshe_ed": "true",
      "wshe_bod": "true"
    }''')
events = ib.getWshEventData(data)
print(events)
```

--------------------------------

### Create Contract from Keyword Arguments

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Use the general `Contract` constructor with keyword arguments to define any contract. This method is flexible when specific contract types are not needed or when all parameters are known.

```python
Contract(_secType=''_ , _conId=0_ , _symbol=''_ , _lastTradeDateOrContractMonth=''_ , _strike=0.0_ , _right=''_ , _multiplier=''_ , _exchange=''_ , _primaryExchange=''_ , _currency=''_ , _localSymbol=''_ , _tradingClass=''_ , _includeExpired=False_ , _secIdType=''_ , _secId=''_ , _description=''_ , _issuerId=''_ , _comboLegsDescrip=''_ , _comboLegs= <factory>_, _deltaNeutralContract=None_)
```

--------------------------------

### Get Dataclass Fields with Non-Default Values

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Retrieves fields from a dataclass instance that differ from their default values. Returns a dictionary of these fields and their values.

```python
def dataclassNonDefaults(obj) -> dict[str, Any]:
    """
    For a ``dataclass`` instance get the fields that are different from the
    default values and return as ``dict``.
    """
    if not is_dataclass(obj):
        raise TypeError(f"Object {obj} is not a dataclass")

    values = [getattr(obj, field.name) for field in fields(obj)]

    return {
        field.name: value
        for field, value in zip(fields(obj), values)
        if value is not None
        and value != field.default
        and value == value
        and not (
            (isinstance(value, list) and value == [])
            or (isinstance(value, dict) and value == {})
        )
    }
```

--------------------------------

### Connect to IB API Asynchronously

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Establishes an asynchronous connection to the IB API. Handles initial data fetching for positions, orders, and account updates based on specified startup fetch options.

```python
clientId = int(clientId)
self.wrapper.clientId = clientId
timeout = timeout or None
try:
    # establish API connection
    await self.client.connectAsync(host, port, clientId, timeout)

    # autobind manual orders
    if clientId == 0:
        self.reqAutoOpenOrders(True)

    accounts = self.client.getAccounts()
    if not account and len(accounts) == 1:
        account = accounts[0]

    # prepare initializing requests
    # name -> request
    reqs: dict[str, Awaitable[Any]] = {}
    reqs["positions"] = self.reqPositionsAsync()
    if not readonly:
        if fetchFields & StartupFetch.ORDERS_OPEN:
            reqs["open orders"] = self.reqOpenOrdersAsync()

    if not readonly and self.client.serverVersion() >= 150:
        if fetchFields & StartupFetch.ORDERS_COMPLETE:
            reqs["completed orders"] = self.reqCompletedOrdersAsync(False)

    if account:
        if fetchFields & StartupFetch.ACCOUNT_UPDATES:
            reqs["account updates"] = self.reqAccountUpdatesAsync(account)

    if len(accounts) <= self.MaxSyncedSubAccounts:
        if fetchFields & StartupFetch.SUB_ACCOUNT_UPDATES:
            for acc in accounts:
                reqs[f"account updates for {acc}"] = (
                    self.reqAccountUpdatesMultiAsync(acc)
                )

    # run initializing requests concurrently and log if any times out
    tasks = [asyncio.wait_for(req, timeout) for req in reqs.values()]
    errors = []
    resps = await asyncio.gather(*tasks, return_exceptions=True)
    for name, resp in zip(reqs, resps):
        if isinstance(resp, asyncio.TimeoutError):
            msg = f"{name} request timed out"
            errors.append(msg)
            self._logger.error(msg)

    # the request for executions must come after all orders are in
    if fetchFields & StartupFetch.EXECUTIONS:
```

--------------------------------

### Place Bracket Order

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Demonstrates placing a bracket order, which includes a parent order, a stop-loss order, and a take-profit order. Ensure `parent`, `stopLoss`, and `takeProfit` order objects are properly defined before execution.

```python
takeProfit = LimitOrder('SELL', 100, 260.00)
takeProfit.orderId = ib.client.getReqId()
takeProfit.parentId = parent.orderId
takeProfit.transmit = True

trades = []
trades.append(ib.placeOrder(contract, parent))
trades.append(ib.placeOrder(contract, stopLoss))
trades.append(ib.placeOrder(contract, takeProfit))

print(f"Bracket order placed: {len(trades)} orders")
ib.disconnect()
```

--------------------------------

### Forex Contract

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents a foreign exchange currency pair. It includes methods to get pair information, convert to dictionary or tuple, and update fields.

```APIDOC
## class ib_async.contract.Forex

### Description
Foreign exchange currency pair.

### Parameters
- **pair** (str) - Shortcut for specifying symbol and currency, like ‘EURUSD’.
- **exchange** (str) - Destination exchange.
- **symbol** (str) - Base currency.
- **currency** (str) - Quote currency.

### Methods
#### pair()
Short name of pair.

Return type:
`str`

#### dict()
Return dataclass values as `dict`. This is a non-recursive variant of `dataclasses.asdict`.

Return type:
`dict`

#### nonDefaults()
For a `dataclass` instance get the fields that are different from the default values and return as `dict`.

Return type:
`dict`[`str`, `Any`]

#### tuple()
Return dataclass values as `tuple`. This is a non-recursive variant of `dataclasses.astuple`.

Return type:
`tuple`[`Any`, `...`]

#### update(_* srcObjs_, _** kwargs_)
Update fields of the given `dataclass` object from zero or more `dataclass` source objects and/or from keyword arguments.

Return type:
`object`
```

--------------------------------

### Request User Info Async

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Initiates an asynchronous request for user information. Returns an awaitable future.

```python
def reqUserInfoAsync(self):
        reqId = self.client.getReqId()
        future = self.wrapper.startReq(reqId)
        self.client.reqUserInfo(reqId)
        return future
```

--------------------------------

### Place What-If Order Async

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Initiates a 'what-if' order request. Requires contract and order details. Returns a future representing the order's outcome.

```python
whatIfOrder.whatIf = True
        reqId = self.client.getReqId()
        future = self.wrapper.startReq(reqId, contract)
        self.client.placeOrder(reqId, contract, whatIfOrder)
        return future
```

--------------------------------

### Account Summary Async

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously retrieves account summary data. If no account is specified, it returns all account summaries. Loads data on demand.

```python
async def accountSummaryAsync(self, account: str = "") -> list[AccountValue]:
        if not self.wrapper.acctSummary:
            # loaded on demand since it takes ca. 250 ms
            await self.reqAccountSummaryAsync()

        if account:
            return [
                v for v in self.wrapper.acctSummary.values() if v.account == account
            ]

        return list(self.wrapper.acctSummary.values())
```

--------------------------------

### Run IBC and IBController Directly

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

The `IBC` and `IBController` can now be run directly, rather than through a shell command.

```python
IBC()
```

```python
IBController()
```

--------------------------------

### Simulate Order Placement (What-If)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Retrieve commission and margin impact for an order without actually placing it. The original order remains unmodified. This method is blocking.

```python
ib.whatIfOrder(_contract_ , _order_)
```

--------------------------------

### Specialized Contract Types Returned

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Starting from version 0.9.31, request results return specialized contract types (e.g., Stock) instead of generic Contract objects.

```python
Stock
```

--------------------------------

### Market Order Constructor

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/order.html

Initializes a Market Order. Inherits from the base Order class.

```python
class MarketOrder(Order):
    def __init__(self, action: str, totalQuantity: float, **kwargs):
        Order.__init__(
            self, orderType="MKT", action=action, totalQuantity=totalQuantity, **kwargs
        )
```

--------------------------------

### Request Smart Components Async

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously requests smart component information for a given BBO exchange.

```python
def reqSmartComponentsAsync(self, bboExchange):
        reqId = self.client.getReqId()

        future = self.wrapper.startReq(reqId)
        self.client.reqSmartComponents(reqId, bboExchange)
        return future

```

--------------------------------

### Request Market Depth Exchanges

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieve a list of exchanges that have multiple market makers. This function is used to get descriptions of exchanges suitable for market depth data.

```python
def reqMktDepthExchanges(self) -> list[DepthMktDataDescription]:
    """
    Get those exchanges that have have multiple market makers
    
```

--------------------------------

### Get Ticker by Contract

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves the ticker for a specific contract. The contract must have been previously requested with reqMktData. The ticker might not be ready immediately after requesting market data.

```python
def ticker(self, contract: Contract) -> Ticker | None:
    """
    Get ticker of the given contract. It must have been requested before
    with reqMktData with the same contract object. The ticker may not be
    ready yet if called directly after :meth:`.reqMktData`.

    Args:
        contract: Contract to get ticker for.
    """
    return self.wrapper.tickers.get(hash(contract))
```

--------------------------------

### IB Async API - WSH and User Info Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Details methods for interacting with the WSH (Websocket Handler) and retrieving user information.

```APIDOC
## WSH and User Info Methods

### Description
APIs for managing WSH metadata and events, and retrieving user-specific information.

### Methods
- **IB.reqWshMetaData()**: Requests WSH metadata.
- **IB.cancelWshMetaData()**: Cancels WSH metadata requests.
- **IB.reqWshEventData()**: Requests WSH event data.
- **IB.cancelWshEventData()**: Cancels WSH event data requests.
- **IB.getWshMetaData()**: Retrieves WSH metadata.
- **IB.getWshMetaDataAsync()**: Retrieves WSH metadata asynchronously.
- **IB.getWshEventData()**: Retrieves WSH event data.
- **IB.getWshEventDataAsync()**: Retrieves WSH event data asynchronously.
- **IB.reqUserInfo()**: Requests user information.
- **IB.reqUserInfoAsync()**: Requests user information asynchronously.
```

--------------------------------

### Core Principle: Avoid Blocking

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Highlights the critical rule for using the IB class: user code should not block the framework for extended periods.

```APIDOC
## The One Rule: Avoid Blocking

### Description
User code interacting with the IB class must not block the framework for too long to ensure continuous message handling and prevent state synchronization issues. IB request methods themselves are exempt from this rule.

### Guidelines
- **Avoid long-running calculations or `time.sleep()`**: These can prevent the framework from processing incoming messages.
- **Use `IB.sleep(0)` for delays**: This method allows the framework to handle pending work while introducing a pause.
- **Consider alternative processes**: For very long operations, offload them to a separate process.
- **Be aware of state changes**: `IB.sleep(0)` may update the current state.
```

--------------------------------

### IBKR Message Sending with Throttling

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Manages sending messages to the IBKR connection, implementing request throttling to respect server limits. Emits signals for throttling start and end.

```python
def sendMsg(self, msg: str):
        loop = getLoop()
        t = loop.time()
        times = self._timeQ
        msgs = self._msgQ
        while times and t - times[0] > self.RequestsInterval:
            times.popleft()

        if msg:
            msgs.append(msg)

        while msgs and (len(times) < self.MaxRequests or not self.MaxRequests):
            msg = msgs.popleft()
            self.conn.sendMsg(self._prefix(msg.encode()))
            times.append(t)
            if self._logger.isEnabledFor(logging.DEBUG):
                self._logger.debug(">>> %s", msg[:-1].replace("\0", ","))

        if msgs:
            if not self._isThrottling:
                self._isThrottling = True
                self.throttleStart.emit()
                self._logger.debug("Started to throttle requests")
            loop.call_at(times[0] + self.RequestsInterval, self.sendMsg, None)
        else:
            if self._isThrottling:
                self._isThrottling = False
                self.throttleEnd.emit()
                self._logger.debug("Stopped to throttle requests")
```

--------------------------------

### Place Order (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Use `placeOrder` to submit orders to the exchange. It requires an `orderId`, `contract` details, and an `order` object. A workaround for IBKR's 'volatility' field bug is included.

```python
def placeOrder(self, orderId, contract, order):
    version = self.serverVersion()

    # IBKR API BUG FIX:
    # IBKR sometimes back-populates the 'volatility' field into live orders, but then if we try to
    # modify an order using cached order objects, IBKR rejects modifications because 'volatility'
    # is not allowed to be set (even though _they_ added it to our previously submitted order).
    # Solution: if an order is NOT a VOL order, delete the 'volatility' value to prevent this error.
    if not order.orderType.startswith("VOL"):
        # ONLY volatility orders can have 'volatility' set when sending API data.
        order.volatility = None

    # The IBKR API protocol is just a series of in-order arguments denoted by position.
    # The upstream API parses all fields based on the first value (the message type).
    fields = [
        3,  # PLACE_ORDER message type
        orderId,
        contract,
        contract.secIdType,
        contract.secId,
        order.action,
        order.totalQuantity,
        order.orderType,
        order.lmtPrice,
        order.auxPrice,
        order.tif,
        order.ocaGroup,
        order.account,
        order.openClose,
        order.origin,
        order.orderRef,
        order.transmit,
        order.parentId,
        order.blockOrder,
        order.sweepToFill,
        order.displaySize,
        order.triggerMethod,
        order.outsideRth,
        order.hidden,
    ]

    if contract.secType == "BAG":
        legs = contract.comboLegs or []
        fields += [len(legs)]
        for leg in legs:
            fields += [
                leg.conId,
                leg.ratio,
                leg.action,
                leg.exchange,
                leg.openClose,
                leg.shortSaleSlot,
                leg.designatedLocation,
                leg.exemptCode,
            ]

        legs = order.orderComboLegs or []
        fields += [len(legs)]
        for leg in legs:
            fields += [leg.price]

        params = order.smartComboRoutingParams or []
        fields += [len(params)]
        for param in params:
            fields += [param.tag, param.value]

    fields += [
        "",
        order.discretionaryAmt,
        order.goodAfterTime,
        order.goodTillDate,
        order.faGroup,
        order.faMethod,
        order.faPercentage,
    ]

    if version < 177:
        fields += [order.faProfile]

    fields += [
        order.modelCode,
        order.shortSaleSlot,
        order.designatedLocation,
        order.exemptCode,
        order.ocaType,
        order.rule80A,
        order.settlingFirm,
        order.allOrNone,
        order.minQty,
        order.percentOffset,
        order.eTradeOnly,  # always False
        order.firmQuoteOnly,  # always False
        order.nbboPriceCap,  # always UNSET
        order.auctionStrategy,
        order.startingPrice,
        order.stockRefPrice,
        order.delta,
    ]
    self.send(*fields)
```

--------------------------------

### Create Bracket Order

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Create a limit order bracketed by take-profit and stop-loss orders. The resulting bracket order can be submitted using ib.placeOrder().

```python
ib.bracketOrder(_action_ , _quantity_ , _limitPrice_ , _takeProfitPrice_ , _stopLossPrice_ , _** kwargs_)
```

--------------------------------

### Request Scanner Data (Streaming)

Source: https://ib-api-reloaded.github.io/ib_async/_sources/recipes.rst.txt

Sets up a streaming scanner subscription and processes incoming data via a callback function. The subscription is cancelled after a specified duration.

```python
def onScanData(scanData):
    print(scanData[0])
    print(len(scanData))

sub = ScannerSubscription(
    instrument='FUT.US',
    locationCode='FUT.GLOBEX',
    scanCode='TOP_PERC_GAIN')
scanData = ib.reqScannerSubscription(sub)
scanData.updateEvent += onScanData
ib.sleep(60)
ib.cancelScannerSubscription(scanData)
```

--------------------------------

### Initialize IB Defaults

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Extracts default values for timezone, empty price, and empty size from the IBDefaults object for local use.

```python
self.defaultTimezone = self.defaults.timezone
        self.defaultEmptyPrice = self.defaults.emptyPrice
        self.defaultEmptySize = self.defaults.emptySize
```

--------------------------------

### Format Code with Ruff

Source: https://ib-api-reloaded.github.io/ib_async/readme.html

Applies code formatting rules using ruff.

```bash
poetry run ruff format

```

--------------------------------

### Request Account Summary

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Request and maintain live updates for account values across all accounts. It is recommended to use `accountSummary()` instead. This method is blocking until the summary is filled.

```python
ib.reqAccountSummary()
```

--------------------------------

### Connection Options

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Method for setting additional connection options.

```APIDOC
## POST /connectOptions

### Description
Set additional connect options for the client connection.

### Method
POST

### Endpoint
/connectOptions

### Parameters
#### Query Parameters
- **connectOptions** (string) - Required - Additional options string. Use "+PACEAPI" to enable request-pacing for TWS/gateway 974+ (obsolete).

### Request Example
```json
{
  "connectOptions": "+PACEAPI"
}
```

### Response
#### Success Response (200)
- **status** (string) - Indicates that connection options have been set.

#### Response Example
```json
{
  "status": "Connection options set"
}
```
```

--------------------------------

### Utility Methods

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Utility methods for retrieving IDs and setting server log levels.

```APIDOC
## POST /api/ids/req

### Description
Requests a specified number of unique IDs.

### Method
POST

### Endpoint
/api/ids/req

### Parameters
#### Request Body
- **numIds** (integer) - Required - The number of IDs to request.

### Request Example
```json
{
  "numIds": 10
}
```

### Response
#### Success Response (200)
- **ids** (array) - An array of unique IDs.

#### Response Example
```json
{
  "ids": [101, 102, 103, 104, 105, 106, 107, 108, 109, 110]
}
```
```

```APIDOC
## POST /api/server-log-level/set

### Description
Sets the server log level.

### Method
POST

### Endpoint
/api/server-log-level/set

### Parameters
#### Request Body
- **logLevel** (integer) - Required - The desired log level (e.g., 0: SYSTEM, 1: FUNDAMENTAL DATA, 2: DATA TYPE 2, etc.).

### Request Example
```json
{
  "logLevel": 1
}
```

### Response
#### Success Response (200)
- **status** (string) - Indicates the success of the operation.

#### Response Example
```json
{
  "status": "success"
}
```
```

--------------------------------

### What-If Order Async

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Simulates an order without actually placing it, returning the expected OrderState.

```APIDOC
## def whatIfOrderAsync(self, contract: Contract, order: Order) -> Awaitable[OrderState]:

### Description
Simulates an order for a given contract. This method returns an awaitable that resolves to the expected state of the order if it were placed, without actually executing the order.

### Method
POST

### Endpoint
/whatIfOrderAsync

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
- **contract** (Contract) - Required - The contract for which the order is intended.
- **order** (Order) - Required - The order details to simulate.

### Request Example
```json
{
  "contract": {
    "symbol": "IBM",
    "secType": "STK",
    "exchange": "SMART",
    "currency": "USD"
  },
  "order": {
    "action": "BUY",
    "totalQuantity": 100,
    "orderType": "LMT",
    "lmtPrice": 150.00
  }
}
```

### Response
#### Success Response (200)
- **orderState** (OrderState) - An object representing the state of the order if it were placed.

#### Response Example
```json
{
  "commission": 1.50,
  "maxCommission": null,
  "minCommission": null,
  "initMargin": 1500.00,
  "maintMargin": 750.00,
  "equityWithLoan": 15000.00,
  "realQuantity": 100,
  "funds": null,
  "არის": null,
  "initialMarginPercent": null,
  "maintMarginPercent": null,
  "equityWithLoanPercent": null
}
```
```

--------------------------------

### Client Class Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Details the events available in the Client class.

```APIDOC
## Client Class Methods

### Description
Provides access to events emitted by the Client class.

### Methods
- **Client.events**: Access to various event handlers for the client.
```

--------------------------------

### Initialize CFD Contract - Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Represents a Contract For Difference (CFD). Requires symbol, exchange, and currency.

```python
class CFD(Contract):
    def __init__(self, symbol: str = "", exchange: str = "", currency: str = "", **kwargs):
        """
        Contract For Difference.

        Args:
            symbol: Symbol name.
            exchange: Destination exchange.
            currency: Underlying currency.
        """
        Contract.__init__(
            self, "CFD", symbol=symbol, exchange=exchange, currency=currency, **kwargs
        )
```

--------------------------------

### Initialize FlexReport

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Initializes the FlexReport class to access account statement webservice. Obtain a token via the web portal settings. You can provide a token and queryId for direct download, or a path to load from an XML file. The default URL can be overridden by setting the IB_FLEXREPORT_URL environment variable.

```python
ib_async.flexreport.FlexReport(_token =None_, _queryId =None_, _path =None_)
```

--------------------------------

### Download FlexReport

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Downloads a FlexReport using a provided token and query ID.

```python
download(_token_ , _queryId_)
```

--------------------------------

### Get WSH Event Data Async

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously retrieves WSH event data for a given `WshEventData` object. It handles cancellation of previous requests and ensures the current request is cancelled afterwards. Requires `asyncio`.

```python
async def getWshEventDataAsync(self, data: WshEventData) -> str:
        if self.wrapper.wshEventReqId:
            self.cancelWshEventData()

        self.reqWshEventData(data)
        future = self.wrapper.startReq(self.wrapper.wshEventReqId, container="")
        await future

        self.cancelWshEventData()
        return future.result()
```

--------------------------------

### New Event System

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

A new event system is introduced, intended to supersede the older `IB.setCallback()` method. Notebooks have been updated to utilize this new system. The `Watchdog` class now requires an `IB` instance.

```python
IB.setCallback()
```

--------------------------------

### Initialize Forex Contract - Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Represents a foreign exchange currency pair. Can be initialized with a 'pair' string (e.g., 'EURUSD') or individual symbol and currency. Defaults to IDEALPRO exchange.

```python
class Forex(Contract):
    def __init__(
        self,
        pair: str = "",
        exchange: str = "IDEALPRO",
        symbol: str = "",
        currency: str = "",
        **kwargs,
    ):
        """
        Foreign exchange currency pair.

        Args:
            pair: Shortcut for specifying symbol and currency, like 'EURUSD'.
            exchange: Destination exchange.
            symbol: Base currency.
            currency: Quote currency.
        """
        if pair:
            assert len(pair) == 6
            symbol = symbol or pair[:3]
            currency = currency or pair[3:]

        Contract.__init__(
            self, "CASH", symbol=symbol, exchange=exchange, currency=currency, **kwargs
        )

    def __repr__(self):
        attrs = util.dataclassNonDefaults(self)
        attrs.pop("secType")
        s = "Forex("
        if "symbol" in attrs and "currency" in attrs:
            pair = attrs.pop("symbol")
            pair += attrs.pop("currency")
            s += "'" + pair + "'" + (", " if attrs else "")
        s += ", ".join(f"{k}={v!r}" for k, v in attrs.items())
        s += ")"
        return s

    __str__ = __repr__
```

--------------------------------

### Request Real-time Bars

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Use this method to request real-time 5-second bars for a given contract. Ensure the barSize is set to 5. The `whatToShow` parameter specifies the data source (e.g., 'TRADES', 'MIDPOINT').

```python
def reqRealTimeBars(
        self,
        contract: Contract,
        barSize: int,
        whatToShow: str,
        useRTH: bool,
        realTimeBarsOptions: list[TagValue] = [],
    ) -> RealTimeBarList:
        """
        Request realtime 5 second bars.

        https://interactivebrokers.github.io/tws-api/realtime_bars.html

        Args:
            contract: Contract of interest.
            barSize: Must be 5.
            whatToShow: Specifies the source for constructing bars.
                Can be 'TRADES', 'MIDPOINT', 'BID' or 'ASK'.
            useRTH: If True then only show data from within Regular
                Trading Hours, if False then show all data.
            realTimeBarsOptions: Unknown.
        """
        reqId = self.client.getReqId()
        bars = RealTimeBarList()
        bars.reqId = reqId
        bars.contract = contract
        bars.barSize = barSize
        bars.whatToShow = whatToShow
        bars.useRTH = useRTH
        bars.realTimeBarsOptions = realTimeBarsOptions or []
        self.wrapper.startSubscription(reqId, bars, contract)
        self.client.reqRealTimeBars(
            reqId, contract, barSize, whatToShow, useRTH, realTimeBarsOptions
        )
        return bars
```

--------------------------------

### Run Combined Qt5/Asyncio Event Loop

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Enables running a combined Qt5 and asyncio event loop, particularly useful for Jupyter notebooks. Specify the Qt library (e.g., 'PyQt5') and the polling period in seconds.

```python
ib_async.util.useQt(_qtLib ='PyQt5'_, _period =0.01_)
```

--------------------------------

### Object Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Common methods available for various IB Async objects.

```APIDOC
## Object Methods

### Description
Provides utility methods for dataclass objects.

### Methods
- **dict()**: Returns the object's values as a dictionary.
- **nonDefaults()**: Returns a dictionary of fields that differ from their default values.
- **tuple()**: Returns the object's values as a tuple.
- **update(\*srcObjs, \**kwargs)**: Updates the object's fields from source objects or keyword arguments.
```

--------------------------------

### Qualify Contract Details Asynchronously

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously looks up contract details and returns matching Contract objects. If 'returnAll' is True, it returns a list of possible contracts for ambiguous requests instead of None.

```python
async def qualifyContractsAsync(
        self,
        *contracts: Contract, returnAll: bool = False
    ) -> list[Contract | list[Contract | None] | None]:
        """Looks up all contract details, but only returns matching Contract objects.

        If 'returnAll' is True, instead of returning 'None' on an ambiguous contract request,
        the return slot will have a list of the matching contracts. Previously the conflicts
        were only sent to the log, which isn't useful if you are logging to a file and not watching
        immediately.

        Note: return value has elements in same position as input request. If a contract
              cannot be qualified (bad values, ambiguous), the return value for the contract
              position in the result is None.
        """
        detailsLists = await asyncio.gather(
            *[self.reqContractDetailsAsync(c) for c in contracts]
        )

        # self._logger.warning(f"Got details: {detailsLists=}")

        result: list[Contract | list[Contract | None] | None] = []
        for contract, detailsList in zip(contracts, detailsLists):
            if not detailsList:
                self._logger.warning(f"Unknown contract: {contract}")
                result.append(None)
            elif len(detailsList) > 1:
                # BUG FIX:
                #  - IBKR is returning EC _and_ FOP contracts for only FOP requests,
                #    which is clearly incorrect, so now if an input request has `secType`
                #    defined, we only return matching `secType` contracts.
                if contract.secType:
                    possibles = [
                        details.contract
                        for details in detailsList
                        if contract.secType == details.contract.secType  # type: ignore
                    ]

                    # if our match instrument type filter resolved to only _one_ matching
                    # contract, then we found a single usable result to add.
                    if len(possibles) == 1:
                        c = possibles[0]
                        if contract.exchange == "SMART":
                            # Allow contracts to become more generic if SMART requested as input
                            c.exchange = contract.exchange  # type: ignore

                        util.dataclassUpdate(contract, c)
                        result.append(contract)
                        continue
                else:
                    # else, return all matches if no specific secType requested
                    possibles = [details.contract for details in detailsList]

                self._logger.warning(
                    f"Ambiguous contract: {contract}, possibles are {possibles}"
                )

                if returnAll:
                    result.append(possibles)
                else:
                    result.append(None)
            else:
                c = detailsList[0].contract
                assert c
                if contract.exchange == "SMART":
                    # overwriting 'SMART' exchange can create invalid contract
                    c.exchange = contract.exchange

                util.dataclassUpdate(contract, c)
                result.append(contract)

        return result
```

--------------------------------

### Create Bracket Order

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Constructs a bracket order consisting of a parent limit order and two child orders for take profit and stop loss. Ensure the action is either 'BUY' or 'SELL'.

```python
def createBracketOrder(
        self,
        action: str,
        quantity: int,
        limitPrice: float,
        takeProfitPrice: float,
        stopLossPrice: float,
        **kwargs,
    ) -> BracketOrder:
        """
        Create a limit order that is bracketed by a take-profit order and
        a stop-loss order. Submit the bracket like:

        .. code-block:: python

            for o in bracket:
                ib.placeOrder(contract, o)

        https://interactivebrokers.github.io/tws-api/bracket_order.html

        Args:
            action: 'BUY' or 'SELL'.
            quantity: Size of order.
            limitPrice: Limit price of entry order.
            takeProfitPrice: Limit price of profit order.
            stopLossPrice: Stop price of loss order.
        """
        assert action in ("BUY", "SELL")
        reverseAction = "BUY" if action == "SELL" else "SELL"
        parent = LimitOrder(
            action,
            quantity,
            limitPrice,
            orderId=self.client.getReqId(),
            transmit=False,
            **kwargs,
        )
        takeProfit = LimitOrder(
            reverseAction,
            quantity,
            takeProfitPrice,
            orderId=self.client.getReqId(),
            transmit=False,
            parentId=parent.orderId,
            **kwargs,
        )
        stopLoss = StopOrder(
            reverseAction,
            quantity,
            stopLossPrice,
            orderId=self.client.getReqId(),
            transmit=True,
            parentId=parent.orderId,
            **kwargs,
        )

        return BracketOrder(parent, takeProfit, stopLoss)
```

--------------------------------

### Client Connection and Management Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Methods for managing the client connection, including reset, version check, running the client, and connection status.

```APIDOC
## Client Connection and Management Methods

### Description
Methods to control and query the client's connection and operational status.

### Methods
- `Client.reset()`: Resets the client to its initial state.
- `Client.serverVersion()`: Retrieves the server version.
- `Client.run()`: Starts the client's main loop.
- `Client.isConnected()`: Checks if the client is currently connected.
- `Client.isReady()`: Checks if the client is ready to process requests.
- `Client.connectionStats()`: Retrieves statistics about the current connection.
- `Client.getReqId()`: Gets the next available request ID.
- `Client.updateReqId()`: Updates the request ID.
- `Client.setConnectOptions()`: Sets connection options.
- `Client.connect()`: Initiates a connection to the server.
- `Client.connectAsync()`: Initiates an asynchronous connection to the server.
- `Client.disconnect()`: Disconnects the client from the server.
```

--------------------------------

### Qualify Contracts Async

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Looks up all contract details and returns matching Contract objects. If 'returnAll' is True, ambiguous contracts will return a list of possible matches instead of None.

```APIDOC
## async def qualifyContractsAsync(self, *contracts: Contract, returnAll: bool = False) -> list[Contract | list[Contract | None] | None]:

### Description
Looks up all contract details, but only returns matching Contract objects. If 'returnAll' is True, instead of returning 'None' on an ambiguous contract request, the return slot will have a list of the matching contracts. Previously the conflicts were only sent to the log, which isn't useful if you are logging to a file and not watching immediately.

Note: return value has elements in same position as input request. If a contract cannot be qualified (bad values, ambiguous), the return value for the contract position in the result is None.

### Method
GET

### Endpoint
/qualifyContractsAsync

### Parameters
#### Path Parameters
None

#### Query Parameters
- **returnAll** (bool) - Optional - If True, ambiguous contracts will return a list of possible matches.

#### Request Body
- **contracts** (Contract) - Required - A variable number of Contract objects to qualify.

### Request Example
```json
{
  "contracts": [
    {
      "symbol": "AAPL",
      "secType": "STK",
      "exchange": "SMART",
      "currency": "USD"
    }
  ],
  "returnAll": false
}
```

### Response
#### Success Response (200)
- **contracts** (list[Contract | list[Contract | None] | None]) - A list of qualified contracts, or lists of possible contracts if returnAll is True and ambiguity exists.

#### Response Example
```json
[
  {
    "symbol": "AAPL",
    "secType": "STK",
    "exchange": "SMART",
    "currency": "USD",
    "conId": 12345678,
    "multiplier": 1,
    "primaryExch": "NASDAQ"
  }
]
```
```

--------------------------------

### Initialize CRYPTO Contract

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Initializes a Crypto currency contract. Requires symbol, exchange, and currency. Inherits from the base Contract class.

```python
def __init__(self,
        symbol: str = "", exchange: str = "", currency: str = "", **kwargs
    ):
        """
        Crypto currency contract.

        Args:
            symbol: Symbol name.
            exchange: Destination exchange.
            currency: Underlying currency.
        """
        Contract.__init__(
            self,
            secType="CRYPTO",
            symbol=symbol,
            exchange=exchange,
            currency=currency,
            **kwargs,
        )
```

--------------------------------

### Real-time P&L Tracking

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Sets up a callback function to receive and print real-time Profit & Loss updates for an account. The script runs indefinitely until interrupted, continuously listening for P&L changes.

```python
from ib_async import *

def onPnL(pnl):
    print(f"P&L Update: Unrealized: ${pnl.unrealizedPnL:.2f}, Realized: ${pnl.realizedPnL:.2f}")

ib = IB()
ib.connect('127.0.0.1', 7497, clientId=1)

# Subscribe to P&L updates
account = ib.managedAccounts()[0]
pnl = ib.reqPnL(account)
pnl.updateEvent += onPnL

# Keep running to receive updates
try:
    ib.run()  # Run until interrupted
except KeyboardInterrupt:
    ib.disconnect()
```

--------------------------------

### Qualify Contracts Async

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously looks up contract details and returns matching Contract objects. If 'returnAll' is True, it returns a list of matching contracts for ambiguous requests instead of None.

```python
_async _qualifyContractsAsync(_* contracts_, _returnAll =False_)
```

--------------------------------

### BracketOrder Initialization

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents a bracket order, which includes a parent order along with take profit and stop loss orders.

```python
_class _ib_async.order.BracketOrder(_parent_ , _takeProfit_ , _stopLoss_)[source]
```

--------------------------------

### Initialize FUND Contract

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Initializes a FUND contract. Inherits from the base Contract class.

```python
def __init__(self, **kwargs):
    """Mutual fund."""
    Contract.__init__(self, "FUND", **kwargs)
```

--------------------------------

### Data Structures and Initialization

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Details the primary data structures used within the wrapper for managing account data, positions, trades, and market data, along with initialization and reset functionalities.

```APIDOC
## IB Async Wrapper Data Structures

### Description
This section describes the key data structures and attributes within the `ib_async.wrapper` class, which are used to store and manage various types of financial data received from the Interactive Brokers API.

### Initialization and Reset

- **`__post_init__(self)`**: Initializes default values for timezone, empty price, and empty size based on `IBDefaults`.
- **`reset(self)`**: Resets all internal data structures to their default states. This includes clearing dictionaries and lists for account values, portfolio, positions, trades, tickers, and other managed data. It also resets connection-related attributes like `clientId` and timeout values.

### Data Attributes

- **`accountValues`** (dict[str, dict[int, AccountValue]]) - Stores account values, mapped by account ID.
- **`acctSummary`** (dict[str, dict[str, AcctSummary]]) - Stores account summary information.
- **`portfolio`** (dict[str, dict[int, PortfolioItem]]) - Stores portfolio details, keyed by account ID and then by contract ID.
- **`positions`** (dict[str, dict[int, Position]]) - Stores position details, keyed by account ID and then by contract ID.
- **`trades`** (dict[OrderKeyType, Trade]) - Stores trade information, keyed by order key (client ID and order ID) or perm ID.
- **`permId2Trade`** (dict[int, Trade]) - Maps permanent trade IDs to `Trade` objects.
- **`fills`** (dict[str, Fill]) - Stores trade fills, keyed by execution ID.
- **`newsTicks`** (list[NewsTick]) - A list of news tick data.
- **`msgId2NewsBulletin`** (dict[int, NewsBulletin]) - Maps message IDs to `NewsBulletin` objects.
- **`tickers`** (dict[int, Ticker]) - Stores `Ticker` objects, keyed by the hash of the `Contract`.
- **`pendingTickers`** (set[Ticker]) - A set of tickers that are pending processing.
- **`reqId2Ticker`** (dict[int, Ticker]) - Maps request IDs to `Ticker` objects.
- **`ticker2ReqId`** (dict[int | str, dict[Ticker, int]]) - Maps tick types to a dictionary of `Ticker` objects and their corresponding request IDs.
- **`reqId2Subscriber`** (dict[int, Any]) - Maps request IDs to live data subscribers (e.g., for bars or scan data).
- **`reqId2PnL`** (dict[int, PnL]) - Maps request IDs to PnL (Profit and Loss) data.
- **`reqId2PnlSingle`** (dict[int, PnLSingle]) - Maps request IDs to single PnL data.
- **`pnlKey2ReqId`** (dict[tuple, int]) - Maps a tuple key (account, modelCode) to a request ID for PnL requests.
- **`pnlSingleKey2ReqId`** (dict[tuple, int]) - Maps a tuple key (account, modelCode, conId) to a request ID for single PnL requests.
- **`lastTime`** (datetime) - The UTC time of the last network packet arrival.
- **`time`** (float) - The time of the last network packet arrival in Unix timestamp format.
- **`accounts`** (list[str]) - A list of account IDs.
- **`clientId`** (int) - The client ID assigned to this connection.
- **`wshMetaReqId`** (int) - Request ID for WebSocket metadata.
- **`wshEventReqId`** (int) - Request ID for WebSocket events.
- **`_reqId2Contract`** (dict[int, Contract]) - Internal mapping of request IDs to `Contract` objects.
- **`_timeout`** (float) - Timeout value for requests.
- **`_futures`** (dict[Any, asyncio.Future]) - Internal dictionary storing asyncio Futures, linked by key to `_results`.
- **`_results`** (dict[Any, Any]) - Internal dictionary storing results of asynchronous operations, linked by key to `_futures`.
- **`_logger`** (logging.Logger) - Logger instance for the wrapper.
- **`_timeoutHandle`** (asyncio.TimerHandle | None) - Handle for the timeout timer.
- **`defaults`** (IBDefaults) - Default values configuration.
```

--------------------------------

### Set Additional Connection Options

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Sets additional connection options as a string, which will be encoded to bytes. Use '+PACEAPI' for request-pacing with TWS/gateway 974+ (obsolete).

```python
def setConnectOptions(self, connectOptions: str):
        """
        Set additional connect options.

        Args:
            connectOptions: Use "+PACEAPI" to use request-pacing built
                into TWS/gateway 974+ (obsolete).
        """
        self.connectOptions = connectOptions.encode()
```

--------------------------------

### IB Async API - Contract and Option Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Details methods for contract details, option calculations, and related functions.

```APIDOC
## Contract and Option Methods

### Description
APIs for retrieving contract details, performing option calculations, and managing option-related requests.

### Methods
- **IB.reqContractDetails()**: Requests contract details.
- **IB.reqContractDetailsAsync()**: Requests contract details asynchronously.
- **IB.reqMatchingSymbols()**: Requests matching symbols.
- **IB.reqMatchingSymbolsAsync()**: Requests matching symbols asynchronously.
- **IB.reqMarketRule()**: Requests market rule details.
- **IB.reqMarketRuleAsync()**: Requests market rule details asynchronously.
- **IB.calculateImpliedVolatility()**: Calculates implied volatility.
- **IB.calculateImpliedVolatilityAsync()**: Calculates implied volatility asynchronously.
- **IB.calculateOptionPrice()**: Calculates option price.
- **IB.calculateOptionPriceAsync()**: Calculates option price asynchronously.
- **IB.reqSecDefOptParams()**: Requests security definition option parameters.
- **IB.reqSecDefOptParamsAsync()**: Requests security definition option parameters asynchronously.
- **IB.exerciseOptions()**: Exercises options.
```

--------------------------------

### IB Defaults and Utility Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Provides details on the IBDefaults class, its default values, and utility methods like dict(), nonDefaults(), tuple(), and update().

```APIDOC
## IBDefaults Class

### Description
A simple way to provide default values when populating API data.

### Attributes
- **emptyPrice** (Any) - Default value for empty price.
- **emptySize** (Any) - Default value for empty size.
- **unset** (Any) - Represents an unset value.
- **timezone** (tzinfo) - Default timezone, defaults to datetime.timezone.utc.

### Methods
#### dict()
- **Description**: Return dataclass values as `dict`. This is a non-recursive variant of `dataclasses.asdict`.
- **Return type**: `dict`

#### nonDefaults()
- **Description**: For a `dataclass` instance get the fields that are different from the default values and return as `dict`.
- **Return type**: `dict`[`str`, `Any`]

#### tuple()
- **Description**: Return dataclass values as `tuple`. This is a non-recursive variant of `dataclasses.astuple`.
- **Return type**: `tuple`[`Any`, `...`]

#### update(_* srcObjs_, _** kwargs_)
- **Description**: Update fields of the given `dataclass` object from zero or more `dataclass` source objects and/or from keyword arguments.
- **Return type**: `object`
```

--------------------------------

### Initialize Ticker Data

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ticker.html

The `__post_init__` method initializes ticker attributes using default values. It ensures that initialization logic runs only once to prevent overwriting data.

```python
def __post_init__(self):
        # when copying a dataclass, the __post_init__ runs again, so we
        # want to make sure if this was _already_ created, we don't overwrite
        # everything with _another_ post_init clear.
        if not self.created:
            self.updateEvent = TickerUpdateEvent("updateEvent")
            self.minTick = self.defaults.unset
            self.bid = self.defaults.unset
            self.bidSize = self.defaults.unset
            self.ask = self.defaults.unset
            self.askSize = self.defaults.unset
            self.last = self.defaults.unset
            self.lastSize = self.defaults.unset
            self.prevBid = self.defaults.unset
            self.prevBidSize = self.defaults.unset
            self.prevAsk = self.defaults.unset
            self.prevAskSize = self.defaults.unset
            self.prevLast = self.defaults.unset
            self.prevLastSize = self.defaults.unset
            self.volume = self.defaults.unset
            self.open = self.defaults.unset
            self.high = self.defaults.unset
            self.low = self.defaults.unset
            self.close = self.defaults.unset
            self.vwap = self.defaults.unset
            self.low13week = self.defaults.unset
            self.high13week = self.defaults.unset
            self.low26week = self.defaults.unset
            self.high26week = self.defaults.unset
            self.low52week = self.defaults.unset
            self.high52week = self.defaults.unset
            self.bidYield = self.defaults.unset
            self.askYield = self.defaults.unset
            self.lastYield = self.defaults.unset
            self.markPrice = self.defaults.unset
            self.halted = self.defaults.unset
            self.rtHistVolatility = self.defaults.unset
            self.rtVolume = self.defaults.unset
            self.rtTradeVolume = self.defaults.unset
            self.avVolume = self.defaults.unset
            self.tradeCount = self.defaults.unset
            self.tradeRate = self.defaults.unset
            self.volumeRate = self.defaults.unset
            self.volumeRate3Min = self.defaults.unset
            self.volumeRate5Min = self.defaults.unset
            self.volumeRate10Min = self.defaults.unset
            self.shortable = self.defaults.unset
            self.shortableShares = self.defaults.unset
            self.indexFuturePremium = self.defaults.unset
            self.futuresOpenInterest = self.defaults.unset
            self.putOpenInterest = self.defaults.unset
            self.callOpenInterest = self.defaults.unset
            self.putVolume = self.defaults.unset
            self.callVolume = self.defaults.unset
            self.avOptionVolume = self.defaults.unset
            self.histVolatility = self.defaults.unset
            self.impliedVolatility = self.defaults.unset
            self.auctionVolume = self.defaults.unset
            self.auctionPrice = self.defaults.unset
            self.auctionImbalance = self.defaults.unset
            self.regulatoryImbalance = self.defaults.unset
            self.openInterest = self.defaults.unset
            self.lastRthTrade = self.defaults.unset
            self.bondFactorMultiplier = self.defaults.unset
            self.creditmanMarkPrice = self.defaults.unset
            self.creditmanSlowMarkPrice = self.defaults.unset
            self.delayedHalted = self.defaults.unset
            self.etfNavClose = self.defaults.unset
            self.etfNavPriorClose = self.defaults.unset
            self.etfNavBid = self.defaults.unset
            self.etfNavAsk = self.defaults.unset
            self.etfNavLast = self.defaults.unset
            self.etfFrozenNavLast = self.defaults.unset
            self.etfNavHigh = self.defaults.unset
            self.etfNavLow = self.defaults.unset
            self.estimatedIpoMidpoint = self.defaults.unset
            self.finalIpoLast = self.defaults.unset

            self.created = True
```

--------------------------------

### Set Connection Options - Client.setConnectOptions()

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Allows setting connection options, specifically mentioned for PACEAPI compatibility. This method was introduced in version 0.9.36.

```python
Client.setConnectOptions()
```

--------------------------------

### Contract Creation and Recreation

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

This section details how to create and recreate contract objects, including specific types like Stock, Option, and Future.

```APIDOC
## Contract Class

### Description
Base class for all contract types. Provides methods for contract creation and comparison.

### Methods

#### `Contract.create(**kwargs)`
Creates a contract instance based on provided arguments, inferring the specific contract type from `secType`.

#### `Contract.recreate(c)`
Recreates a generic Contract into its most specific type.

### `isHashable()`

Checks if a contract can be hashed by its `conId`. Note that Bag contracts have a synthetic hash.

### `__eq__(other)`

Compares two Contract objects for equality. Equality is determined by `conId` if present, otherwise by comparing all attributes.

### `__hash__()`

Generates a hash for the contract. For Bag contracts, it's based on leg details. For others, it uses `conId` (inverted for CONTFUT).

### `__repr__()` and `__str__()`

Returns a string representation of the contract object.

## Stock Contract

### Description
Represents a Stock contract.

### `__init__(symbol: str = '', exchange: str = '', currency: str = '', **kwargs)`
Initializes a Stock contract.

- **symbol** (str) - Required - Symbol name.
- **exchange** (str) - Optional - Destination exchange.
- **currency** (str) - Optional - Underlying currency.

## Option Contract

### Description
Represents an Option contract.

### `__init__(symbol: str = '', lastTradeDateOrContractMonth: str = '', strike: float = 0.0, right: str = '', exchange: str = '', multiplier: str = '', currency: str = '', **kwargs)`
Initializes an Option contract.

- **symbol** (str) - Required - Symbol name.
- **lastTradeDateOrContractMonth** (str) - Required - The option's last trading day or contract month (YYYYMM or YYYYMMDD format).
- **strike** (float) - Required - The option's strike price.
- **right** (str) - Required - Put or call option ('P', 'PUT', 'C', or 'CALL').
- **exchange** (str) - Optional - Destination exchange.
- **multiplier** (str) - Optional - The contract multiplier.
- **currency** (str) - Optional - Underlying currency.

## Future Contract

### Description
Represents a Future contract.

### `__init__(symbol: str = '', lastTradeDateOrContractMonth: str = '', exchange: str = '', localSymbol: str = '', multiplier: str = '', currency: str = '', **kwargs)`
Initializes a Future contract.

- **symbol** (str) - Required - Symbol name.
- **lastTradeDateOrContractMonth** (str) - Required - The option's last trading day or contract month (YYYYMM or YYYYMMDD format).
- **exchange** (str) - Optional - Destination exchange.
- **localSymbol** (str) - Optional - The contract's symbol within its primary exchange.
- **multiplier** (str) - Optional - The contract multiplier.
- **currency** (str) - Optional - Underlying currency.
```

--------------------------------

### Account Value Callbacks Added

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

New callbacks `accountValue` and `accountSummary` have been added for retrieving account-related information.

```python
accountValue
```

```python
accountSummary
```

--------------------------------

### reqSmartComponentsAsync

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously requests smart components for a given BBO exchange.

```APIDOC
## POST /api/smartComponents

### Description
Asynchronously requests smart components for a given BBO exchange.

### Method
POST

### Endpoint
/api/smartComponents

### Parameters
#### Query Parameters
- **bboExchange** (str) - Required - The BBO exchange for which to retrieve smart components.

### Request Example
```json
{
  "bboExchange": "NASDAQ"
}
```

### Response
#### Success Response (200)
- **future** (Awaitable[list]) - An awaitable object that resolves to a list of smart components.

#### Response Example
```json
[
  {"exchange": "NASDAQ", "localSymbol": "AAPL", "marketName": "NASDAQ"}
]
```
```

--------------------------------

### Stock Contract Initialization

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Initializes a Stock contract with symbol, exchange, and currency. Inherits from the base Contract class.

```python
Stock(
            symbol='IBM',
            exchange='SMART',
            currency='USD'
        )
```

--------------------------------

### Create Specialized Contract Instance

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Use the `create` static method to instantiate a specialized contract object based on the provided `secType`. If `secType` is not specified, a general `Contract` object is returned. This method acts as a factory for various contract types like Stock, Option, Future, etc.

```python
secType = kwargs.get("secType", "")
cls = {
    "": Contract,
    "STK": Stock,
    "OPT": Option,
    "FUT": Future,
    "CONTFUT": ContFuture,
    "CASH": Forex,
    "IND": Index,
    "CFD": CFD,
    "BOND": Bond,
    "CMDTY": Commodity,
    "FOP": FuturesOption,
    "FUND": MutualFund,
    "WAR": Warrant,
    "IOPT": Warrant,
    "BAG": Bag,
    "CRYPTO": Crypto,
```

--------------------------------

### Request User Info Async

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously requests user information.

```APIDOC
## GET /api/userInfo

### Description
Asynchronously requests information about the currently logged-in user.

### Method
GET

### Endpoint
/api/userInfo

### Parameters
None

### Request Example
None

### Response
#### Success Response (200)
- **userInfo** (any) - An object containing the user's information.

#### Response Example
```json
{
  "userInfo": {
    "userId": "user123",
    "userName": "John Doe",
    "permissions": ["read", "write"]
  }
}
```
```

--------------------------------

### timeit Context Manager

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

A context manager for timing code execution.

```APIDOC
## Timeit Context Manager

### Description
Provides a simple way to measure the execution time of a block of code. It prints the elapsed time to the console, formatted using SI prefixes.

### Usage
Use as a `with` statement.

### Parameters
- **title** (str, optional) - A title to display before the timing information. Defaults to "Run".

### Example
```python
import time

class timeit:
    """Context manager for timing."""

    def __init__(self, title="Run"):
        self.title = title

    def __enter__(self):
        self.t0 = time.time()

    def __exit__(self, *_args):
        print(self.title + " took " + formatSI(time.time() - self.t0) + "s")

# Example usage:
with timeit("Data Processing"):
    # Simulate some work
    time.sleep(2)
    result = sum(i*i for i in range(1000000))
```
```

--------------------------------

### Request Financial Advisor Data Async

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously requests financial advisor data based on the `faDataType`. Includes a timeout and error handling. Requires `asyncio`.

```python
async def requestFAAsync(self, faDataType: int):
        future = self.wrapper.startReq("requestFA")
        self.client.requestFA(faDataType)
        try:
            await asyncio.wait_for(future, 4)
            return future.result()
        except asyncio.TimeoutError:
            self._logger.error("requestFAAsync: Timeout")
```

--------------------------------

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

--------------------------------

### Add FlexReport

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Introduces the `FlexReport` class for handling IB Flex reports.

```python
FlexReport
```

--------------------------------

### Simulate Order Impact (What-If)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Tests an order to retrieve its commission and margin impact without actually placing it. The original order remains unmodified.

```python
def whatIfOrder(self, contract: Contract, order: Order) -> OrderState:
        """
        Retrieve commission and margin impact without actually
        placing the order. The given order will not be modified in any way.

        This method is blocking.

        Args:
            contract: Contract to test.
            order: Order to test.
        """
        return self._run(self.whatIfOrderAsync(contract, order))
```

--------------------------------

### Initialize Futures Option Contract - Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Represents an option on a futures contract. Requires symbol, last trade date, strike, right (put/call), exchange, multiplier, and currency.

```python
class FuturesOption(Contract):
    def __init__(
        self,
        symbol: str = "",
        lastTradeDateOrContractMonth: str = "",
        strike: float = 0.0,
        right: str = "",
        exchange: str = "",
        multiplier: str = "",
        currency: str = "",
        **kwargs,
    ):
        """
        Option on a futures contract.

        Args:
            symbol: Symbol name.
            lastTradeDateOrContractMonth: The option's last trading day
                or contract month.

                * YYYYMM format: To specify last month
                * YYYYMMDD format: To specify last trading day
            strike: The option's strike price.
            right: Put or call option.
                Valid values are 'P', 'PUT', 'C' or 'CALL'.
            exchange: Destination exchange.
            multiplier: The contract multiplier.
            currency: Underlying currency.
        """
        Contract.__init__(
            self,
            "FOP",
            symbol=symbol,
            lastTradeDateOrContractMonth=lastTradeDateOrContractMonth,
            strike=strike,
            right=right,
            exchange=exchange,
            multiplier=multiplier,
            currency=currency,
            **kwargs,
        )
```

--------------------------------

### Trade Class Initialization and Properties

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Tracks an order, its status, and all its fills. It includes properties for contract, order, status, fills, log, and advanced error messages. Events like statusEvent, modifyEvent, and fillEvent are also defined.

```python
_class _ib_async.order.Trade(_contract= <factory>_, _order= <factory>_, _orderStatus= <factory>_, _fills= <factory>_, _log= <factory>_, _advancedError=''_)[source]
```

--------------------------------

### Request Security Definition Option Parameters Async

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously requests definition parameters for options on a specific underlying. Returns an awaitable that resolves to a list of option chains.

```python
def reqSecDefOptParamsAsync(
        self,
        underlyingSymbol: str,
        futFopExchange: str,
        underlyingSecType: str,
        underlyingConId: int,
    ) -> Awaitable[list[OptionChain]]:
        reqId = self.client.getReqId()

        future = self.wrapper.startReq(reqId)
        self.client.reqSecDefOptParams(
            reqId, underlyingSymbol, futFopExchange, underlyingSecType, underlyingConId
        )
        return future
```

--------------------------------

### OrderComboLeg Initialization

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents an order combo leg. The price attribute is a float or Decimal.

```python
_class _ib_async.order.OrderComboLeg(_price =1.7976931348623157e+308_)[source]
```

--------------------------------

### Register Live Subscription

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Registers a live subscription, associating a request ID with a subscriber and optionally a contract.

```python
def startSubscription(self, reqId, subscriber, contract=None):
        """Register a live subscription."""
        self._reqId2Contract[reqId] = contract
        self.reqId2Subscriber[reqId] = subscriber
```

--------------------------------

### Documentation Moved to Readthedocs

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Documentation has been moved to readthedocs.org due to the cessation of rawgit.com's operation, as announced in version 0.9.47.

```none
readthedocs
```

--------------------------------

### Limit Order Constructor

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/order.html

Initializes a Limit Order with a specific limit price. Inherits from the base Order class.

```python
class LimitOrder(Order):
    def __init__(self, action: str, totalQuantity: float, lmtPrice: float, **kwargs):
        Order.__init__(
            self,
            orderType="LMT",
            action=action,
            totalQuantity=totalQuantity,
            lmtPrice=lmtPrice,
            **kwargs,
        )
```

--------------------------------

### IB Async API - Order and Trade Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Details methods for managing and querying orders and trades.

```APIDOC
## Order and Trade Methods

### Description
Functions for placing, canceling, and retrieving order and trade information.

### Methods
- **IB.trades()**: Retrieves executed trades.
- **IB.openTrades()**: Retrieves open trades.
- **IB.orders()**: Retrieves all orders.
- **IB.openOrders()**: Retrieves open orders.
- **IB.completedOrders()**: Retrieves completed orders.
- **IB.fills()**: Retrieves order fills.
- **IB.executions()**: Retrieves execution details.
- **IB.executionsAsync()**: Retrieves execution details asynchronously.
- **IB.reqOpenOrders()**: Requests open orders.
- **IB.reqAllOpenOrders()**: Requests all open orders.
- **IB.reqCompletedOrders()**: Requests completed orders.
- **IB.reqExecutions()**: Requests execution details.
- **IB.bracketOrder()**: Creates a bracket order.
- **IB.oneCancelsAll()**: Creates an OCO order.
- **IB.whatIfOrder()**: Creates a what-if order.
- **IB.whatIfOrderAsync()**: Creates a what-if order asynchronously.
- **IB.placeOrder()**: Places an order.
- **IB.cancelOrder()**: Cancels an order.
- **IB.reqGlobalCancel()**: Cancels all orders globally.
- **IB.reqAutoOpenOrders()**: Requests auto-open orders.
```

--------------------------------

### Account Values for Multiple Accounts

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

The `ib.accountValues()` function now supports use with multiple accounts.

```python
ib.accountValues()
```

--------------------------------

### Request Account Updates

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Request and maintain live updates for account and portfolio values. This is typically called at startup and is blocking until initial data is received.

```python
ib.reqAccountUpdates(_account =''_)
```

--------------------------------

### Connect to IB Gateway/TWS

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Establishes a connection to a running TWS or IB Gateway application. This method is blocking and ensures the client is fully synchronized upon completion. It allows configuration of host, port, client ID, timeout, read-only mode, and account details.

```python
def connect(
        self,
        host: str = "127.0.0.1",
        port: int = 7497,
        clientId: int = 1,
        timeout: float = 4,
        readonly: bool = False,
        account: str = "",
        raiseSyncErrors: bool = False,
        fetchFields: StartupFetch = StartupFetchALL,
    ):
        """
        Connect to a running TWS or IB gateway application.
        After the connection is made the client is fully synchronized
        and ready to serve requests.

        This method is blocking.

        Args:
            host: Host name or IP address.
            port: Port number.
            clientId: ID number to use for this client; must be unique per
              connection. Setting clientId=0 will automatically merge manual
              TWS trading with this client.
            timeout: If establishing the connection takes longer than
              ``timeout`` seconds then the ``asyncio.TimeoutError`` exception
              is raised. Set to 0 to disable timeout.
            readonly: Set to ``True`` when API is in read-only mode.
            account: Main account to receive updates for.
            raiseSyncErrors: When ``True`` this will cause an initial
              sync request error to raise a `ConnectionError`.
              When ``False`` the error will only be logged at error level.
           fetchFields: By default, all account data is loaded and cached
              when a new connection is made. You can optionally disable all
              or some of the account attribute fetching during a connection
              using the StartupFetch field flags. See ``StartupFetch`` in ``ib.py``
              for member details. There is also StartupFetchNONE and StartupFetchALL
              as shorthand. Individual flag field members can be added or removed
              to the ``fetchFields`` parameter as needed.
        """
        return self._run(
            self.connectAsync(
                host,
                port,
                clientId,
                timeout,
                readonly,
                account,
                raiseSyncErrors,
                fetchFields,
            )
        )
```

--------------------------------

### Initialize Continuous Future Contract - Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Used to represent a continuous future contract. Requires symbol, exchange, and currency among other parameters.

```python
class ContFuture(Contract):
    def __init__(
        self,
        symbol: str = "",
        exchange: str = "",
        localSymbol: str = "",
        multiplier: str = "",
        currency: str = "",
        **kwargs,
    ):
        """
        Continuous future contract.

        Args:
            symbol: Symbol name.
            exchange: Destination exchange.
            localSymbol: The contract's symbol within its primary exchange.
            multiplier: The contract multiplier.
            currency: Underlying currency.
        """
        Contract.__init__(
            self,
            "CONTFUT",
            symbol=symbol,
            exchange=exchange,
            localSymbol=localSymbol,
            multiplier=multiplier,
            currency=currency,
            **kwargs,
        )
```

--------------------------------

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

--------------------------------

### Handle Tick Request Parameters

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Stores minimum tick size, BBO exchange, and snapshot permissions for a given request ID.

```python
ticker.minTick = minTick
ticker.bboExchange = bboExchange
ticker.snapshotPermissions = snapshotPermissions
```

--------------------------------

### Add IBC

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Introduces the `IBC` component to the library.

```python
IBC
```

--------------------------------

### Initialize Warrant Contract

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Initializes a Warrant contract. Inherits from the base Contract class.

```python
def __init__(self, **kwargs):
    """Warrant option."""
    Contract.__init__(self, "WAR", **kwargs)
```

--------------------------------

### Event Handling and Connection Management

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Covers methods for managing subscription events and handling connection closures, ensuring proper cleanup and error propagation.

```APIDOC
## Event Handling and Connection Management

### Description
This section details the methods responsible for managing asynchronous events and handling connection state changes within the IB API wrapper.

### Methods

- **`setEventsDone(self)`**: Sets all subscription-type events as done. This includes update events for tickers and subscribers, as well as various events related to trades (status, modify, fill, commission, cancel).

- **`connectionClosed(self)`**: Handles the event when the connection to the IB server is closed. It emits a `ConnectionError` through the `globalErrorEvent`, sets all pending futures to raise this exception, and then resets the wrapper's internal state by calling `self.reset()`.
```

--------------------------------

### Account Summary Async

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously retrieves account summary information. Can be filtered by account.

```python
_async _accountSummaryAsync(_account =''_)
```

--------------------------------

### Check API Readiness

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Indicates whether the API connection is fully established and ready to serve requests. This is typically true after a successful connection and handshake.

```python
def isReady(self) -> bool:
        """Is the API connection up and running?"""
        return self._apiReady

```

--------------------------------

### Request Security Definition Options Parameters Async

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously requests parameters for defining options on a specific underlying security.

```APIDOC
## GET /api/secDefOptParams

### Description
Asynchronously requests parameters required to define options for a given underlying security, including exchange and underlying type.

### Method
GET

### Endpoint
/api/secDefOptParams

### Parameters
#### Query Parameters
- **underlyingSymbol** (str) - Required - The symbol of the underlying asset.
- **futFopExchange** (str) - Required - The exchange for futures and options.
- **underlyingSecType** (str) - Required - The security type of the underlying asset (e.g., 'STK', 'FUT').
- **underlyingConId** (int) - Required - The contract ID of the underlying asset.

### Request Example
`GET /api/secDefOptParams?underlyingSymbol=AAPL&futFopExchange=SMART&underlyingSecType=STK&underlyingConId=12345`

### Response
#### Success Response (200)
- **optionChains** (list[OptionChain]) - A list of available option chains for the specified parameters.

#### Response Example
```json
{
  "optionChains": [
    {
      "conId": 123456,
      "symbol": "AAPL",
      "exchange": "SMART",
      "lastTradeDateOrContractMonth": "20240621",
      "strikes": [160, 170, 180],
      "right": "Call"
    }
  ]
}
```
```

--------------------------------

### Utilities

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Helper functions and utilities for common tasks.

```APIDOC
## Utilities

### Event Handlers
- **globalErrorEvent**: Global event handler for errors.

### Data Conversion
- **df()**: Converts data to a pandas DataFrame.
- **dataclassAsDict()**: Converts a dataclass instance to a dictionary.
- **dataclassAsTuple()**: Converts a dataclass instance to a tuple.
- **dataclassNonDefaults()**: Returns non-default fields of a dataclass.
- **dataclassUpdate(**kwargs)**: Updates a dataclass instance.
- **dataclassRepr()**: Returns a string representation of a dataclass.
- **isnamedtupleinstance()**: Checks if an object is a named tuple instance.

### Tree and Plotting
- **tree()**: Displays data in a tree structure.
- **barplot()**: Creates a bar plot.

### Control Flow and Logging
- **allowCtrlC()**: Allows Ctrl+C interruption.
- **logToFile()**: Logs messages to a file.
- **logToConsole()**: Logs messages to the console.

### Nan and SI Formatting
- **isNan()**: Checks if a value is NaN.
- **formatSI()**: Formats a number using SI prefixes.

### Time and Scheduling
- **timeit**: Context manager for timing code execution.
- **run()**: Runs a function.
- **schedule()**: Schedules a function to run.
- **sleep()**: Pauses execution.
- **timeRange()**: Generates a range of times.
- **waitUntil()**: Waits until a condition is met.
- **timeRangeAsync()**: Asynchronously generates a range of times.
- **waitUntilAsync()**: Asynchronously waits until a condition is met.

### Asyncio Utilities
- **patchAsyncio()**: Patches asyncio for compatibility.
- **getLoop()**: Gets the current asyncio event loop.
- **startLoop()**: Starts an asyncio event loop.
- **useQt()**: Configures asyncio to use Qt event loop.

### Date and Time Formatting
- **formatIBDatetime()**: Formats datetime objects for IB.
- **parseIBDatetime()**: Parses datetime strings from IB.
```

--------------------------------

### IB Async API - News and FA Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Covers methods for retrieving news articles, bulletins, and managing Financial Advisor (FA) accounts.

```APIDOC
## News and FA Methods

### Description
APIs for fetching news content and managing financial advisor account configurations.

### Methods
- **IB.newsTicks()**: Retrieves news ticks.
- **IB.newsBulletins()**: Retrieves news bulletins.
- **IB.cancelNewsBulletins()**: Cancels news bulletin subscriptions.
- **IB.reqNewsProviders()**: Requests news providers.
- **IB.reqNewsProvidersAsync()**: Requests news providers asynchronously.
- **IB.reqNewsArticle()**: Requests a news article.
- **IB.reqNewsArticleAsync()**: Requests a news article asynchronously.
- **IB.reqHistoricalNews()**: Requests historical news.
- **IB.reqHistoricalNewsAsync()**: Requests historical news asynchronously.
- **IB.reqNewsBulletins()**: Requests news bulletins.
- **IB.requestFA()**: Requests Financial Advisor configuration.
- **IB.requestFAAsync()**: Requests Financial Advisor configuration asynchronously.
- **IB.replaceFA()**: Replaces Financial Advisor configuration.
```

--------------------------------

### Create Contract Instance

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Factory method to create a contract instance based on its security type. Handles specific contract types and their arguments.

```python
Contract.create(
            secType='STK',
            symbol='IBM',
            exchange='SMART',
            currency='USD'
        )
```

--------------------------------

### Open Order Callback

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Adds the `openOrder` callback for receiving open order information.

```python
openOrder
```

--------------------------------

### Log to Console

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Configures a stream handler for console logging. If a stream handler already exists, it adjusts the log level for 'ib_async'. Otherwise, it creates a new handler and adds it to the logger.

```python
import logging
import sys

def logToConsole(level=logging.INFO):
    """Create a log handler that logs to the console."""
    logger = logging.getLogger()
    stdHandlers = [
        h
        for h in logger.handlers
        if type(h) is logging.StreamHandler and h.stream is sys.stderr
    ]

    if stdHandlers:
        # if a standard stream handler already exists, use it and
        # set the log level for the ib_async namespace only
        logging.getLogger("ib_async").setLevel(level)
    else:
        # else create a new handler
        logger.setLevel(level)
        formatter = logging.Formatter("%(asctime)s %(name)s %(levelname)s %(message)s")
        handler = logging.StreamHandler()
        handler.setFormatter(formatter)
        logger.addHandler(handler)
```

--------------------------------

### Request Account Summary

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Requests account values for all accounts and keeps them updated. It is recommended to use the `.accountSummary` method instead. This method is blocking and returns when the summary is filled.

```python
self._run(self.reqAccountSummaryAsync())
```

--------------------------------

### Run Tests with Poetry

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Executes the project's tests using Poetry. This command ensures that all tests pass after making changes.

```bash
poetry run pytest
```

--------------------------------

### IB Class Initialization

Source: https://ib-api-reloaded.github.io/ib_async/api.html

The IB class provides an interface to the IB API. It can be initialized with several parameters to configure its behavior.

```APIDOC
## IB Class Initialization

### Description
Initializes the IB class with optional parameters to configure request timeouts, error handling, sub-account limits, and TWS timezone.

### Parameters
- **RequestTimeout** (float) - Timeout in seconds for blocking requests. Default is 0 (wait indefinitely). Not used for `*Async` methods.
- **RaiseRequestErrors** (bool) - If `True`, raises `RequestError` on API request failures. If `False`, returns an empty result silently. Default is `True`.
- **MaxSyncedSubAccounts** (int) - Maximum number of sub-accounts to sync. Default is 50.
- **TimezoneTWS** (str) - The timezone of the TWS or Gateway application. Defaults to the local system timezone.
```

--------------------------------

### Connect and Disconnect with Delay

Source: https://ib-api-reloaded.github.io/ib_async/_sources/recipes.rst.txt

Use this pattern for long-lived connections to ensure data is flushed before disconnecting. Add a one-second delay before calling disconnect.

```python
ib = IB()
ib.connect()

...  # create and submit some orders

ib.sleep(1)  # added delay
ib.disconnect()
```

--------------------------------

### IB Async API - Market Data Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Covers methods for requesting and managing real-time and historical market data.

```APIDOC
## Market Data Methods

### Description
APIs for subscribing to real-time market data, historical data, and related information.

### Methods
- **IB.ticker()**: Retrieves ticker information.
- **IB.tickers()**: Retrieves multiple ticker informations.
- **IB.pendingTickers()**: Retrieves pending tickers.
- **IB.realtimeBars()**: Subscribes to real-time bars.
- **IB.reqTickers()**: Requests ticker data.
- **IB.reqTickersAsync()**: Requests ticker data asynchronously.
- **IB.reqRealTimeBars()**: Requests real-time bars.
- **IB.cancelRealTimeBars()**: Cancels real-time bar subscriptions.
- **IB.reqHistoricalData()**: Requests historical data.
- **IB.reqHistoricalDataAsync()**: Requests historical data asynchronously.
- **IB.cancelHistoricalData()**: Cancels historical data requests.
- **IB.reqHistoricalSchedule()**: Requests historical schedule data.
- **IB.reqHistoricalScheduleAsync()**: Requests historical schedule data asynchronously.
- **IB.reqHistoricalTicks()**: Requests historical ticks.
- **IB.reqHistoricalTicksAsync()**: Requests historical ticks asynchronously.
- **IB.reqHeadTimeStamp()**: Requests the head timestamp for bars.
- **IB.reqHeadTimeStampAsync()**: Requests the head timestamp for bars asynchronously.
- **IB.reqMktData()**: Requests market data.
- **IB.cancelMktData()**: Cancels market data subscriptions.
- **IB.reqTickByTickData()**: Requests tick-by-tick data.
- **IB.cancelTickByTickData()**: Cancels tick-by-tick data subscriptions.
- **IB.reqMktDepth()**: Requests market depth data.
- **IB.cancelMktDepth()**: Cancels market depth subscriptions.
- **IB.reqMktDepthExchanges()**: Requests market depth exchanges.
- **IB.reqMktDepthExchangesAsync()**: Requests market depth exchanges asynchronously.
- **IB.reqHistogramData()**: Requests histogram data.
- **IB.reqHistogramDataAsync()**: Requests histogram data asynchronously.
- **IB.reqScannerData()**: Requests scanner data.
- **IB.reqScannerDataAsync()**: Requests scanner data asynchronously.
- **IB.reqScannerSubscription()**: Subscribes to scanner data.
- **IB.cancelScannerSubscription()**: Cancels scanner data subscriptions.
- **IB.reqScannerParameters()**: Requests scanner parameters.
- **IB.reqScannerParametersAsync()**: Requests scanner parameters asynchronously.
```

--------------------------------

### Request Financial Advisor Data Async

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously requests financial advisor data based on the data type.

```APIDOC
## GET /api/requestFA

### Description
Asynchronously requests financial advisor data. The type of data requested is specified by `faDataType`.

### Method
GET

### Endpoint
/api/requestFA

### Parameters
#### Query Parameters
- **faDataType** (int) - Required - Specifies the type of financial advisor data to request (e.g., 1 for Profile, 2 for Watchlist).

### Request Example
`GET /api/requestFA?faDataType=1`

### Response
#### Success Response (200)
- **financialAdvisorData** (any) - The requested financial advisor data. The structure depends on the `faDataType`.

#### Response Example
```json
{
  "financialAdvisorData": {
    "profile": {
      "name": "John Doe",
      "accounts": ["Account1", "Account2"]
    }
  }
}
```
```

--------------------------------

### Request Contract Details Async

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously requests detailed information for a given contract. Returns an Awaitable that resolves to a list of ContractDetails objects.

```python
def reqContractDetailsAsync(
        self,
        contract: Contract
    ) -> Awaitable[list[ContractDetails]]:
        reqId = self.client.getReqId()
        future = self.wrapper.startReq(reqId, contract)
        self.client.reqContractDetails(reqId, contract)
        return future
```

--------------------------------

### Create Specialized Contract Dynamically

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Use the static `_create` method to dynamically instantiate a specialized contract based on provided keyword arguments, including `secType`. If `secType` is omitted, a general `Contract` is returned.

```python
Contract._create(**kwargs)
```

--------------------------------

### Request Account Summary Async

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously requests account summary data. This function is typically used to initiate a stream of updates.

```python
reqAccountSummaryAsync()
```

--------------------------------

### Option Contract Initialization

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Initializes an Option contract with various parameters including symbol, expiration, strike, right, and exchange. Inherits from the base Contract class.

```python
Option(
            symbol='IBM',
            lastTradeDateOrContractMonth='20240315',
            strike=100.0,
            right='C',
            exchange='SMART',
            currency='USD'
        )
```

--------------------------------

### Order Class Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Methods available for the Order class.

```APIDOC
## Order Class Methods

### Description
Methods for interacting with and manipulating Order objects.

### Methods
- **dict()**
  - Description: Return dataclass values as `dict`. This is a non-recursive variant of `dataclasses.asdict`.
  - Return type: `dict`
- **nonDefaults()**
  - Description: For a `dataclass` instance get the fields that are different from the default values and return as `dict`.
  - Return type: `dict`[`str`, `Any`]
- **tuple()**
  - Description: Return dataclass values as `tuple`. This is a non-recursive variant of `dataclasses.astuple`.
  - Return type: `tuple`[`Any`, `...`]
- **update(\* srcObjs, \*\* kwargs)**
  - Description: Update fields of the given `dataclass` object from zero or more `dataclass` source objects and/or from keyword arguments.
  - Return type: `object`
```

--------------------------------

### Format Code with Ruff

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Applies code formatting rules to the project using Ruff. This command ensures consistent code style.

```bash
poetry run ruff format
```

--------------------------------

### Connect to TWS or Gateway

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Establishes a connection to the Interactive Brokers TWS or Gateway. Ensure TWS/Gateway is running and the API is enabled. Ports 7497 for TWS and 4001 for Gateway are common defaults.

```python
# Make sure TWS/Gateway is running and API is enabled
# Check that ports match (7497 for TWS, 4001 for Gateway)
ib.connect('127.0.0.1', 7497, clientId=1)  # TWS
ib.connect('127.0.0.1', 4001, clientId=1)  # Gateway
```

--------------------------------

### Timing Utilities

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Utilities for timing code execution.

```APIDOC
## ib_async.util.timeit

### Description
Context manager for timing code execution.

### Method
N/A

### Endpoint
N/A

### Parameters
#### Query Parameters
- **title** (str) - Optional - A title for the timing output, defaults to 'Run'.
```

--------------------------------

### Synchronous vs. Asynchronous Data Fetching

Source: https://ib-api-reloaded.github.io/ib_async/readme.html

Illustrates the difference between blocking synchronous calls and non-blocking asynchronous calls for fetching historical data.

```python
# Synchronous (blocks until complete)
bars = ib.reqHistoricalData(contract, ...)

# Asynchronous (yields to event loop)
bars = await ib.reqHistoricalDataAsync(contract, ...)

```

--------------------------------

### Request Minimum Price Increments and Market Rules

Source: https://ib-api-reloaded.github.io/ib_async/_sources/recipes.rst.txt

Retrieves contract details to find market rule IDs and then requests the details for each market rule, which includes minimum price increments.

```python
usdjpy = Forex('USDJPY')
cd = ib.reqContractDetails(usdjpy)[0]
print(cd.marketRuleIds)

rules = [
    ib.reqMarketRule(ruleId)
    for ruleId in cd.marketRuleIds.split(',')]
print(rules)
```

--------------------------------

### Initialize BAG Contract

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Initializes a BAG contract. Inherits from the base Contract class.

```python
def __init__(self, **kwargs):
    """Bag contract."""
    Contract.__init__(self, "BAG", **kwargs)
```

--------------------------------

### Initialize Bond Contract - Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Represents a bond contract. Initializes with default 'BOND' secType and accepts other parameters via kwargs.

```python
class Bond(Contract):
    def __init__(self, **kwargs):
        """Bond."""
        Contract.__init__(self, "BOND", **kwargs)
```

--------------------------------

### Open Order Handling

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Processes open orders, including updates from TWS or other clients. Handles 'whatIf' orders separately.

```python
def openOrder(
    self, orderId: int, contract: Contract, order: Order, orderState: OrderState
):
    """
    This wrapper is called to:

    * feed in open orders at startup;
    * feed in open orders or order updates from other clients and TWS
      if clientId=master id;
    * feed in manual orders and order updates from TWS if clientId=0;
    * handle openOrders and allOpenOrders responses.
    """
    if order.whatIf:
        # response to whatIfOrder
        if float(orderState.initMarginChange) != UNSET_DOUBLE:
            self._endReq(order.orderId, orderState)
    else:
        key = self.orderKey(order.clientId, order.orderId, order.permId)
        trade = self.trades.get(key)
        if trade:
            trade.order.permId = order.permId
            trade.order.totalQuantity = order.totalQuantity
            trade.order.lmtPrice = order.lmtPrice
            trade.order.auxPrice = order.auxPrice
```

--------------------------------

### Request Market Data (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Use `reqMktData` to request real-time market data. It accepts a contract object and various options for data granularity and snapshots. Ensure the contract object is correctly populated.

```python
def reqMktData(
    self,
    reqId,
    contract,
    genericTickList,
    snapshot,
    regulatorySnapshot,
    mktDataOptions,
):
    fields = [1, 11, reqId, contract]

    if contract.secType == "BAG":
        legs = contract.comboLegs or []
        fields += [len(legs)]
        for leg in legs:
            fields += [leg.conId, leg.ratio, leg.action, leg.exchange]

    dnc = contract.deltaNeutralContract
    if dnc:
        fields += [True, dnc.conId, dnc.delta, dnc.price]
    else:
        fields += [False]

    fields += [genericTickList, snapshot, regulatorySnapshot, mktDataOptions]
    self.send(*fields)
```

--------------------------------

### Connection Management

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

APIs for establishing and terminating connections to the IB Gateway or TWS.

```APIDOC
## POST /connect

### Description
Connects to a running TWS or IB gateway application. After the connection is made, the client is fully synchronized and ready to serve requests. This method is blocking.

### Method
POST

### Endpoint
/connect

### Parameters
#### Query Parameters
- **host** (str) - Optional - Host name or IP address. Defaults to "127.0.0.1".
- **port** (int) - Optional - Port number. Defaults to 7497.
- **clientId** (int) - Optional - ID number to use for this client; must be unique per connection. Setting clientId=0 will automatically merge manual TWS trading with this client. Defaults to 1.
- **timeout** (float) - Optional - If establishing the connection takes longer than ``timeout`` seconds, then the ``asyncio.TimeoutError`` exception is raised. Set to 0 to disable timeout. Defaults to 4.
- **readonly** (bool) - Optional - Set to ``True`` when API is in read-only mode. Defaults to False.
- **account** (str) - Optional - Main account to receive updates for. Defaults to "".
- **raiseSyncErrors** (bool) - Optional - When ``True``, this will cause an initial sync request error to raise a `ConnectionError``. When ``False``, the error will only be logged at error level. Defaults to False.
- **fetchFields** (StartupFetch) - Optional - By default, all account data is loaded and cached when a new connection is made. You can optionally disable all or some of the account attribute fetching during a connection using the StartupFetch field flags. See ``StartupFetch`` in ``ib.py`` for member details. There is also StartupFetchNONE and StartupFetchALL as shorthand. Individual flag field members can be added or removed to the ``fetchFields`` parameter as needed. Defaults to StartupFetchALL.

### Request Example
```json
{
  "host": "127.0.0.1",
  "port": 7497,
  "clientId": 1,
  "timeout": 4,
  "readonly": false,
  "account": "",
  "raiseSyncErrors": false,
  "fetchFields": "StartupFetchALL"
}
```

### Response
#### Success Response (200)
- **status** (str) - A message indicating the connection status.

#### Response Example
```json
{
  "status": "Successfully connected to 127.0.0.1:7497"
}
```

## DELETE /disconnect

### Description
Disconnects from a TWS or IB gateway application. This will clear all session state.

### Method
DELETE

### Endpoint
/disconnect

### Response
#### Success Response (200)
- **status** (str) - A message summarizing the disconnection statistics, including bytes sent/received, message counts, and session duration.

#### Response Example
```json
{
  "status": "Disconnecting from 127.0.0.1:7497, 1.23KB sent in 5 messages, 4.56KB received in 10 messages, session time 60s."
}
```
```

--------------------------------

### Request Positions

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Requests all open positions for the connected account. No parameters are needed.

```python
def reqPositions(self):
        self.send(61, 1)
```

--------------------------------

### Request News Providers Async

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously requests a list of available news providers.

```APIDOC
## GET /api/newsProviders

### Description
Asynchronously retrieves a list of news providers that can be used to fetch news articles.

### Method
GET

### Endpoint
/api/newsProviders

### Parameters
None

### Request Example
None

### Response
#### Success Response (200)
- **newsProviders** (list[NewsProvider]) - A list of available news providers, each with a code and name.

#### Response Example
```json
{
  "newsProviders": [
    {"providerCode": "BZ", "name": "Benzinga"},
    {"providerCode": "FLY", "name": "Fly on the Wall"}
  ]
}
```
```

--------------------------------

### Request Smart Components Async

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously requests smart component information for a given exchange. The purpose and return type are not fully detailed in the source.

```python
reqSmartComponentsAsync(_bboExchange_)
```

--------------------------------

### Request All Open Orders

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Requests and returns a list of all open orders across all clients. Orders from other clients are not kept in sync unless the master clientId mechanism is used.

```python
return self._run(self.reqAllOpenOrdersAsync())
```

--------------------------------

### Asynchronous Option Chain and News Providers

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Functions for retrieving option chain details and news provider information asynchronously.

```APIDOC
## reqSecDefOptParamsAsync

### Description
Retrieves parameters for an option chain for a given underlying contract asynchronously.

### Method
ASYNC

### Endpoint
N/A (Client-side function)

### Parameters
- **_underlyingSymbol** (str) - The symbol of the underlying asset.
- **_futFopExchange** (str) - The exchange for futures or options.
- **_underlyingSecType** (str) - The security type of the underlying.
- **_underlyingConId** (int) - The conId of the underlying.

### Response
#### Return Type
Awaitable[list[OptionChain]]

### Response Example
```python
[OptionChain(conId=456, symbol='IBM', ...), ...]
```

## reqNewsProvidersAsync

### Description
Retrieves a list of available news providers asynchronously.

### Method
ASYNC

### Endpoint
N/A (Client-side function)

### Response
#### Return Type
Awaitable[list[NewsProvider]]

### Response Example
```python
[NewsProvider(providerCode='BZ', providerName='Bloomberg'), ...]
```
```

--------------------------------

### Bracket Order Creation

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Initiates the creation of a bracket order, a common trading strategy involving an entry order and two opposing limit orders.

```APIDOC
## POST /bracketOrder

### Description
Initiates the creation of a bracket order.

### Method
POST

### Endpoint
/bracketOrder

### Parameters
#### Request Body
- **action** (str) - Required - The action for the bracket order (e.g., BUY, SELL).
- **quantity** (float) - Required - The quantity for the main order.

### Request Example
{
  "action": "BUY",
  "quantity": 100
}

### Response
#### Success Response (200)
- **[Details of the created bracket order]**
```

--------------------------------

### Request Financial Advisor Data

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Requests financial advisor configuration data. Requires a `faData` type specifier.

```python
def requestFA(self, faData):
        self.send(18, 1, faData)
```

--------------------------------

### Portfolio

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Fetches portfolio items, optionally filtered by account name.

```APIDOC
## portfolio

### Description
List of portfolio items for the given account, or of all retrieved portfolio items if account is left blank.

### Method
`portfolio(account: str = "") -> list[PortfolioItem]`

### Parameters
#### Arguments
- **account** (str) - Optional - If specified, filter for this account name.

### Returns
- **list[PortfolioItem]** - A list of PortfolioItem objects.
```

--------------------------------

### Request Open Orders

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously retrieves a list of currently open orders.

```APIDOC
## GET /api/orders/open

### Description
Fetches a list of all orders that are currently open and not yet filled or cancelled.

### Method
GET

### Endpoint
/api/orders/open

### Response
#### Success Response (200)
- **future** (Awaitable[list[Trade]]) - An awaitable object that resolves to a list of Trade objects representing open orders.

#### Response Example
```json
{
  "future": "<awaitable_list_of_trades>"
}
```
```

--------------------------------

### Realtime Bar Wrapper Fix

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

A fix has been implemented for the `realtimeBar` wrapper.

```python
realtimeBar wrapper
```

--------------------------------

### StartupFetch Enum

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Enum values for the StartupFetch class, used to specify which data to fetch during startup.

```APIDOC
## StartupFetch Enum

### Description
Enumeration for specifying data types to fetch during IB API startup.

### Values
- `POSITIONS` (1): Fetch account positions.
- `ORDERS_OPEN` (2): Fetch open orders.
- `ORDERS_COMPLETE` (4): Fetch completed orders.
- `ACCOUNT_UPDATES` (8): Fetch account updates.
- `SUB_ACCOUNT_UPDATES` (16): Fetch sub-account updates.
- `EXECUTIONS` (32): Fetch execution details.
```

--------------------------------

### Request Management

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Explains the method used to initiate new requests and manage their associated asynchronous futures.

```APIDOC
## Request Management

### Description
This section describes the method used to initiate new requests and retrieve the associated asynchronous future.

### Method

- **`startReq(self, key, contract=None, container=None)`**: Starts a new request identified by a `key`. Optionally accepts a `contract` object and a `container` (defaults to a list). Returns the `asyncio.Future` associated with this request, allowing for asynchronous handling of the response.
```

--------------------------------

### Request Account Summary

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously requests a detailed summary of account information, including various financial metrics.

```APIDOC
## GET /api/accountSummary/request

### Description
Initiates a request to fetch detailed account summary data, including metrics like NetLiquidation, BuyingPower, and margin requirements.

### Method
GET

### Endpoint
/api/accountSummary/request

### Response
#### Success Response (200)
- **future** (Awaitable[None]) - An awaitable object that completes when the account summary request is processed.

#### Response Example
```json
{
  "future": "<awaitable_object>"
}
```
```

--------------------------------

### Request Open Orders

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Requests and returns a list of open orders. This method can provide stale information and it is recommended to use `.openTrades` or `.openOrders` instead. This method is blocking.

```python
return self._run(self.reqOpenOrdersAsync())
```

--------------------------------

### Utility Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Miscellaneous utility methods for the client.

```APIDOC
## Utility Methods

### reset

Resets the client's state.

### run

Starts the client's event loop. This method should typically be called after connecting.

### getAccounts

Get the list of account names that are under management.

Return type:
    list[str]

### send

Serialize and send the given fields using the IB socket protocol.

#### Parameters
- **fields** (*fields) - The fields to send.
- **makeEmpty** (bool) - If True (default), then the IBKR values representing ‘no value’ become the empty string.

### sendMsg

Send a raw message to the IB socket connection.
```

--------------------------------

### Asynchronous User Info Request

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Fetches user information asynchronously.

```APIDOC
## GET /reqUserInfoAsync

### Description
Fetches user information asynchronously.

### Method
GET

### Endpoint
/reqUserInfoAsync
```

--------------------------------

### Request Scanner Parameters

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Requests the available parameters for market scanner subscriptions.

```python
def reqScannerParameters(self):

```

--------------------------------

### Request News Providers

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Requests a list of available news providers. No parameters are needed.

```python
def reqNewsProviders(self):
        self.send(85)
```

--------------------------------

### Connection Refused Error

Source: https://ib-api-reloaded.github.io/ib_async/readme.html

Troubleshoot 'Connection Refused' errors by ensuring the IB Gateway or TWS application is running and API is enabled.

```python
# Make sure TWS/Gateway is running and API is enabled

```

--------------------------------

### IB Async API - Core IB Class Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Details the core methods available in the IB class for managing connections and asynchronous operations.

```APIDOC
## IB Class Core Methods

### Description
Provides essential methods for managing the IB connection, handling events, and controlling asynchronous tasks.

### Methods
- **IB.events**: Access to various event handlers.
- **IB.RequestTimeout**: Configuration for request timeouts.
- **IB.RaiseRequestErrors**: Configuration for raising request errors.
- **IB.MaxSyncedSubAccounts**: Maximum number of sub-accounts that can be synced.
- **IB.TimezoneTWS**: Timezone of the TWS connection.
- **IB.connect()**: Establishes a connection to IB.
- **IB.disconnect()**: Disconnects from IB.
- **IB.isConnected()**: Checks if the connection is active.
- **IB.run()**: Runs the event loop.
- **IB.schedule()**: Schedules a function to run at a specific time.
- **IB.sleep()**: Pauses execution for a specified duration.
- **IB.timeRange()**: Defines a time range.
- **IB.timeRangeAsync()**: Defines a time range asynchronously.
- **IB.waitUntil()**: Waits until a condition is met.
- **IB.waitOnUpdate()**: Waits for an update.
- **IB.loopUntil()**: Loops until a condition is met.
- **IB.setTimeout()**: Sets a timeout for an operation.
- **IB.connectAsync()**: Establishes a connection to IB asynchronously.
```

--------------------------------

### Request Scanner Parameters and Data (Blocking)

Source: https://ib-api-reloaded.github.io/ib_async/recipes.html

Fetch all available scanner parameters and then request specific scanner data based on a ScannerSubscription. This method is blocking.

```python
allParams = ib.reqScannerParameters()
print(allParams)

sub = ScannerSubscription(
    instrument='FUT.US',
    locationCode='FUT.GLOBEX',
    scanCode='TOP_PERC_GAIN')
scanData = ib.reqScannerData(sub)
print(scanData)
```

--------------------------------

### Account Download End

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Signals the completion of account value updates. Call this after all account value updates have been processed.

```python
def accountDownloadEnd(self, _account: str):
    # sent after updateAccountValue and updatePortfolio both finished
    self._endReq("accountValues")
```

--------------------------------

### Request Market Scan Data (Blocking)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Performs a market scan by initiating a subscription and then canceling it once the initial results are received. This method is blocking.

```python
def reqScannerData(
        self,
        subscription: ScannerSubscription,
        scannerSubscriptionOptions: list[TagValue] = [],
        scannerSubscriptionFilterOptions: list[TagValue] = [],
    ) -> ScanDataList:
        """
        Do a blocking market scan by starting a subscription and canceling it
        after the initial list of results are in.

        This method is blocking.

        https://interactivebrokers.github.io/tws-api/market_scanners.html

        Args:
            subscription: Basic filters.
            scannerSubscriptionOptions: Unknown.
            scannerSubscriptionFilterOptions: Advanced generic filters.
        """
        return self._run(
            self.reqScannerDataAsync(
                subscription,
                scannerSubscriptionOptions,
                scannerSubscriptionFilterOptions,
            )
        )
```

--------------------------------

### Client Monitoring of Other Clients' Orders

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Clients with a master clientId can now monitor orders and trades of other clients.

```python
master clientId
```

--------------------------------

### Connect to IB Gateway/TWS

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Establishes a connection to a running TWS or IB gateway application. Handles connection timeouts and logs connection status. Ensure the API port is open on TWS/IBG.

```python
def connect(self, host: str, port: int, clientId: int, timeout: float | None = 2.0):
        """Connect to a running TWS or IB gateway application.

        Args:
            host: Host name or IP address.
            port: Port number.
            clientId: ID number to use for this client; must be unique per
                connection.
            timeout: If establishing the connection takes longer than
                ``timeout`` seconds then the ``asyncio.TimeoutError`` exception
                is raised. Set to 0 to disable timeout.
        """
        run(self.connectAsync(host, port, clientId, timeout))
```

```python
async def connectAsync(self, host, port, clientId, timeout=2.0):
        try:
            self._logger.info(
                f"Connecting to {host}:{port} with clientId {clientId}..."
            )
            self.host = host
            self.port = int(port)
            self.clientId = int(clientId)
            self.connState = Client.CONNECTING
            timeout = timeout or None
            await asyncio.wait_for(self.conn.connectAsync(host, port), timeout)
            self._logger.info("Connected")
            msg = b"API\0" + self._prefix(
                b"v%d..%d%s" 
                % (
                    self.MinClientVersion,
                    self.MaxClientVersion,
                    b" " + self.connectOptions if self.connectOptions else b"",
                )
            )
            self.conn.sendMsg(msg)
            await asyncio.wait_for(self.apiStart, timeout)
            self._logger.info("API connection ready")
        except BaseException as e:
            self.disconnect()
            msg = f"API connection failed: {e!r}"
            self._logger.error(msg)
            self.apiError.emit(msg)
            if isinstance(e, ConnectionRefusedError):
                self._logger.error("Make sure API port on TWS/IBG is open")
            raise
```

--------------------------------

### Event Loop and Scheduling Utilities

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Utility functions for managing the asyncio event loop and scheduling callbacks.

```APIDOC
## Event Loop and Scheduling Utilities

### Description
This section provides utility functions for interacting with the asyncio event loop and scheduling tasks.

### `_run`

#### Description
By default run the event loop forever. When awaitables (like Tasks, Futures or coroutines) are given then run the event loop until each has completed and return their results. An optional timeout (in seconds) can be given that will raise `asyncio.TimeoutError` if the awaitables are not ready within the timeout period.

#### Method
`_run(_*_, timeout=None)`

#### Parameters
- `*args`: Awaitables to run.
- `timeout` (`float` | `None`): Optional timeout in seconds.

### `_schedule`

#### Description
Schedule the callback to be run at the given time with the given arguments. This will return the Event Handle.

#### Method
`_schedule(time, callback, *args)`

#### Parameters
- **time** (`time` | `datetime`) - Time to run callback. If given as `datetime.time` then use today as date.
- **callback** (`Callable`) - Callable scheduled to run.
- **args** - Arguments for to call callback with.

### `_sleep`

#### Description
Wait for the given amount of seconds while everything still keeps processing in the background. Never use `time.sleep()`.

#### Method
`_sleep(secs)`

#### Parameters
- **secs** (`float`) - Time in seconds to wait.

#### Return Type
`bool`

### `_timeRange`

#### Description
Helper function to calculate a time range.

#### Method
`_timeRange(end, step)`

#### Parameters
- **end**: The end of the time range.
- **step**: The step interval.
```

--------------------------------

### Request Matching Symbols Async

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously searches for contracts matching a given pattern. Returns a list of ContractDescription objects or None.

```python
_async _reqMatchingSymbolsAsync(_pattern_)
```

--------------------------------

### Request News Providers Async

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously retrieves a list of available news providers. This is a simple, non-blocking request.

```python
def reqNewsProvidersAsync(self) -> Awaitable[list[NewsProvider]]:
        future = self.wrapper.startReq("newsProviders")
        self.client.reqNewsProviders()
        return future
```

--------------------------------

### Request Market Depth Exchanges Async

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously requests a list of exchanges available for market depth data.

```python
def reqMktDepthExchangesAsync(self) -> Awaitable[list[DepthMktDataDescription]]:
        future = self.wrapper.startReq("mktDepthExchanges")
        self.client.reqMktDepthExchanges()
        return future

```

--------------------------------

### Request Account Summary

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Requests a summary of account information. Requires a request ID, group name, and a list of tags.

```python
def reqAccountSummary(self, reqId, groupName, tags):
        self.send(62, 1, reqId, groupName, tags)
```

--------------------------------

### Request Scanner Parameters Async

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Initiates a request for scanner parameters. This method is non-blocking and returns an awaitable future.

```python
def reqScannerParametersAsync(self) -> Awaitable[str]:
        future = self.wrapper.startReq("scannerParams")
        self.client.reqScannerParameters()
        return future
```

--------------------------------

### Request Smart Components

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Requests smart component information for a given exchange. Requires a request ID and the exchange.

```python
def reqSmartComponents(self, reqId, bboExchange):
        self.send(83, reqId, bboExchange)
```

--------------------------------

### Request Positions

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Requests and returns a list of positions. It is recommended to use the `.positions` method instead.

```python
return self._run(self.reqPositionsAsync())
```

--------------------------------

### Download Flex Report

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/flexreport.html

Download a Flex report from Interactive Brokers using a provided token and query ID. The report is downloaded in XML format and parsed.

```python
resp = urlopen(url)
        data = resp.read()

        root = et.fromstring(data)
        elem = root.find("Status")
        if elem is not None and elem.text == "Success":
            elem = root.find("ReferenceCode")
            assert elem is not None
            code = elem.text
            elem = root.find("Url")
            assert elem is not None
            baseUrl = elem.text
            _logger.info("Statement is being prepared...")
        else:
            elem = root.find("ErrorCode")
            errorCode = elem.text if elem is not None else ""
            elem = root.find("ErrorMessage")
            errorMsg = elem.text if elem is not None else ""
            raise FlexError(f"{errorCode}: {errorMsg}")

        while True:
            time.sleep(1)
            url = f"{baseUrl}?q={code}&t={token}&v=3"
            resp = urlopen(url)
            self.data = resp.read()
            self.root = et.fromstring(self.data)
            if self.root[0].tag == "code":
                msg = self.root[0].text
                if msg and msg.startswith("Statement generation in progress"):
                    _logger.info("still working...")
                    continue
                else:
                    raise FlexError(msg)
            break
        _logger.info("Statement retrieved.")
```

--------------------------------

### Compatibility with ibapi v97.4

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Version 0.9.38 requires ibapi v97.4. Version 0.9.36 also mentions compatibility with ibapi v974.

```none
ibapi v97.4
```

```none
ibapi v974
```

--------------------------------

### Request Market Depth (Order Book)

Source: https://ib-api-reloaded.github.io/ib_async/_sources/recipes.rst.txt

Requests and prints the bid and ask prices from the market depth for a given Forex instrument. The data is printed periodically.

```python
eurusd = Forex('EURUSD')
ticker = ib.reqMktDepth(eurusd)
while ib.sleep(5):
    print(
        [d.price for d in ticker.domBids],
        [d.price for d in ticker.domAsks])
```

--------------------------------

### Bracket Order Creation

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Creates a limit order that is bracketed by a take-profit order and a stop-loss order. The bracket orders are submitted after the parent order.

```APIDOC
## Create Bracket Order

### Description
Creates a limit order that is bracketed by a take-profit order and a stop-loss order. The bracket orders are submitted after the parent order.

### Method
`createBracketOrder` (within an Order class)

### Parameters
- **action** (string) - Required - 'BUY' or 'SELL'.
- **quantity** (float) - Required - Size of order.
- **limitPrice** (float) - Required - Limit price of entry order.
- **takeProfitPrice** (float) - Required - Limit price of profit order.
- **stopLossPrice** (float) - Required - Stop price of loss order.

### Request Example
```python
# Assuming 'contract' is defined and 'ib' is an initialized IB client instance
# Example usage within a class context:
# bracket = self.createBracketOrder('BUY', 100, 10.0, 12.0, 8.0)
# for o in bracket:
#     ib.placeOrder(contract, o)
```

### Response
- **BracketOrder** - An object containing the parent, takeProfit, and stopLoss orders.
```

--------------------------------

### Monitor Portfolio Positions and Open Orders

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Retrieves and displays the current positions held in the account, including symbol, quantity, and average cost. It also lists any currently open orders.

```python
from ib_async import *

ib = IB()
ib.connect('127.0.0.1', 7497, clientId=1)

# Get current positions
positions = ib.positions()
print("Current Positions:")
for pos in positions:
    print(f"{pos.contract.symbol}: {pos.position} @ {pos.avgCost}")

# Get open orders
orders = ib.openTrades()
print(f"\nOpen Orders: {len(orders)}")
for trade in orders:
    print(f"{trade.contract.symbol}: {trade.order.action} {trade.order.totalQuantity}")

ib.disconnect()
```

--------------------------------

### Request Matching Symbols Async

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously searches for contracts matching a given pattern. Includes a timeout for the request and logs an error if it times out. Returns a list of ContractDescription or None.

```python
async def reqMatchingSymbolsAsync(
        self,
        pattern: str
    ) -> list[ContractDescription] | None:
        reqId = self.client.getReqId()
        future = self.wrapper.startReq(reqId)
        self.client.reqMatchingSymbols(reqId, pattern)
        try:
            await asyncio.wait_for(future, 4)
            return future.result()
        except asyncio.TimeoutError:
            self._logger.error("reqMatchingSymbolsAsync: Timeout")
            return None
```

--------------------------------

### Request Open Orders Async

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously requests a list of currently open orders. Returns an Awaitable that resolves to a list of Trade objects.

```python
def reqOpenOrdersAsync(self) -> Awaitable[list[Trade]]:
        future = self.wrapper.startReq("openOrders")
        self.client.reqOpenOrders()
        return future
```

--------------------------------

### RealTimeBar Object Properties and Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Properties and methods for the RealTimeBar object, representing real-time bar data.

```APIDOC
## RealTimeBar Object Properties and Methods

### Description
Represents real-time bar data, including time, open, high, low, close, volume, weighted average price (wap), and tick count. Includes methods for data conversion and updates.

### Properties
- `RealTimeBar.time` (int): The timestamp of the bar.
- `RealTimeBar.endTime` (int): The end timestamp of the bar.
- `RealTimeBar.open_` (float): The opening price.
- `RealTimeBar.high` (float): The highest price.
- `RealTimeBar.low` (float): The lowest price.
- `RealTimeBar.close` (float): The closing price.
- `RealTimeBar.volume` (int): The volume.
- `RealTimeBar.wap` (float): The weighted average price.
- `RealTimeBar.count` (int): The number of ticks in the bar.

### Methods
- `RealTimeBar.dict()`: Converts the RealTimeBar object to a dictionary.
- `RealTimeBar.nonDefaults()`: Returns non-default fields of the RealTimeBar object.
- `RealTimeBar.tuple()`: Converts the RealTimeBar object to a tuple.
- `RealTimeBar.update()`: Updates the RealTimeBar object.
```

--------------------------------

### OrderState Class Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Methods available for the OrderState class.

```APIDOC
## OrderState Class Methods

### Description
Methods for transforming and formatting OrderState data.

### Methods
- **transform(transformer)**
  - Description: Convert the numeric values of this OrderState into a new OrderState transformed by ‘using’.
- **numeric(digits = 2)**
  - Description: Return a new OrderState with the current values converted to floats instead of strings as returned from IBKR directly.
  - Return type: `OrderStateNumeric`
- **formatted(digits = 2)**
  - Description: Return a new OrderState with the current values as formatted strings.
- **dict()**
  - Description: Return dataclass values as `dict`. This is a non-recursive variant of `dataclasses.asdict`.
  - Return type: `dict`
- **nonDefaults()**
  - Description: For a `dataclass` instance get the fields that are different from the default values and return as `dict`.
  - Return type: `dict`[`str`, `Any`]
- **tuple()**
  - Description: Return dataclass values as `tuple`. This is a non-recursive variant of `dataclasses.astuple`.
  - Return type: `tuple`[`Any`, `...`]
- **update(\* srcObjs, \*\* kwargs)**
  - Description: Update fields of the given `dataclass` object from zero or more `dataclass` source objects and/or from keyword arguments.
  - Return type: `object`
```

--------------------------------

### BarList Initialization

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ticker.html

Initializes a list to hold Bar objects and an update event. Defines equality based on object identity.

```python
class BarList(list[Bar]):
    def __init__(self, *args):
        super().__init__(*args)
        self.updateEvent = Event("updateEvent")

    def __eq__(self, other) -> bool:
        return self is other
```

--------------------------------

### Perform Type Checking with Poetry

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Runs MyPy for static type checking on the `ib_async` library using Poetry. This helps catch type-related errors.

```bash
poetry run mypy ib_async
```

--------------------------------

### Client Properties and Constants

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Properties and constants related to the client's configuration and connection status.

```APIDOC
## Client Properties and Constants

### Description
These are properties and constants associated with the client for managing requests and connection states.

### Properties
- `Client.MaxRequests` (int) - Maximum number of requests allowed.
- `Client.RequestsInterval` (int) - Interval between requests in milliseconds.
- `Client.MinClientVersion` (int) - Minimum client version supported.
- `Client.MaxClientVersion` (int) - Maximum client version supported.

### Connection Status Constants
- `Client.DISCONNECTED` (int) - Represents the disconnected state.
- `Client.CONNECTING` (int) - Represents the connecting state.
- `Client.CONNECTED` (int) - Represents the connected state.
```

--------------------------------

### Receive Financial Advisor Data

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Handles the reception of financial advisor data, typically used for account management and reporting.

```python
def receiveFA(self, _faDataType: int, faXmlData: str):
        self._endReq("requestFA", faXmlData)
```

--------------------------------

### Dynamic and Fundamental Objects

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Information about generic dynamic objects and specific fundamental ratio objects.

```APIDOC
## DynamicObject Class

### Description
A generic object that can hold dynamic key-value pairs.

## FundamentalRatios Class

### Description
Represents fundamental ratios for a financial instrument.

### See Also
- https://web.archive.org/web/20200725010343/https://interactivebrokers.github.io/tws-api/fundamental_ratios_tags.html
```

--------------------------------

### Place an Advanced Bracket Order

Source: https://ib-api-reloaded.github.io/ib_async/readme.html

Creates and places a bracket order, which includes a parent order with a stop-loss and a take-profit order. Orders are placed with `transmit=False` initially, except for the last one.

```python
from ib_async import *

ib = IB()
ib.connect('127.0.0.1', 7497, clientId=1)

# Create a bracket order (entry + stop loss + take profit)
contract = Stock('TSLA', 'SMART', 'USD')

# Parent order
parent = LimitOrder('BUY', 100, 250.00)
parent.orderId = ib.client.getReqId()
parent.transmit = False

# Stop loss
stopLoss = StopOrder('SELL', 100, 240.00)
stopLoss.orderId = ib.client.getReqId()
stopLoss.parentId = parent.orderId
stopLoss.transmit = False

# Take profit
takeProfit = LimitOrder('SELL', 100, 260.00)
takeProfit.orderId = ib.client.getReqId()
takeProfit.parentId = parent.orderId
takeProfit.transmit = True

# Place bracket order
trades = []
trades.append(ib.placeOrder(contract, parent))
trades.append(ib.placeOrder(contract, stopLoss))
trades.append(ib.placeOrder(contract, takeProfit))

print(f"Bracket order placed: {len(trades)} orders")
ib.disconnect()
```

--------------------------------

### Request Tickers Async

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Requests market data for a list of contracts and returns Ticker objects.

```APIDOC
## async def reqTickersAsync(self, *contracts: Contract, regulatorySnapshot: bool = False) -> list[Ticker]:

### Description
Requests market data for a list of contracts. If 'regulatorySnapshot' is True, a regulatory snapshot is requested.

### Method
GET

### Endpoint
/reqTickersAsync

### Parameters
#### Path Parameters
None

#### Query Parameters
- **regulatorySnapshot** (bool) - Optional - If True, requests a regulatory snapshot.

#### Request Body
- **contracts** (Contract) - Required - A variable number of Contract objects for which to request tickers.

### Request Example
```json
{
  "contracts": [
    {
      "symbol": "GOOG",
      "secType": "STK",
      "exchange": "SMART",
      "currency": "USD"
    }
  ],
  "regulatorySnapshot": false
}
```

### Response
#### Success Response (200)
- **tickers** (list[Ticker]) - A list of Ticker objects containing market data for the requested contracts.

#### Response Example
```json
[
  {
    "symbol": "GOOG",
    "lastPrice": 1500.00,
    "bidPrice": 1499.50,
    "askPrice": 1500.50,
    "volume": 1000000
  }
]
```
```

--------------------------------

### Request Market Scanner Subscription

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Initiates a market data scan. Requires a ScanDataList object to be returned.

```python
def reqScannerSubscription(self,
            subscription: ScanSubscription,
            scannerSubscriptionOptions: list[TagValue] = None,
            scannerSubscriptionFilterOptions: list[TagValue] = None,
    ) -> ScanDataList:
        """
        Request market data scans.

        https://interactivebrokers.github.io/tws-api/market_scanners.html

        Args:
            subscription: What to scan for.
            scannerSubscriptionOptions: Unknown.
            scannerSubscriptionFilterOptions: Unknown.
        """
        reqId = self.client.getReqId()
        dataList = ScanDataList()
        dataList.reqId = reqId
        dataList.subscription = subscription
        dataList.scannerSubscriptionOptions = scannerSubscriptionOptions or []
        dataList.scannerSubscriptionFilterOptions = (
            scannerSubscriptionFilterOptions or []
        )
        self.wrapper.startSubscription(reqId, dataList)
        self.client.reqScannerSubscription(
            reqId,
            subscription,
            scannerSubscriptionOptions,
            scannerSubscriptionFilterOptions,
        )
        return dataList

```

--------------------------------

### Request All Open Orders

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Requests all currently open orders associated with the account.

```python
def reqAllOpenOrders(self):
        self.send(16, 1)
```

--------------------------------

### Request News Providers and Historical News

Source: https://ib-api-reloaded.github.io/ib_async/_sources/recipes.rst.txt

Fetches a list of available news providers, then requests historical news headlines for a specified contract, and finally retrieves a specific news article.

```python
newsProviders = ib.reqNewsProviders()
print(newsProviders)
codes = '+'.join(np.code for np in newsProviders)

amd = Stock('AMD', 'SMART', 'USD')
ib.qualifyContracts(amd)
headlines = ib.reqHistoricalNews(amd.conId, codes, '', '', 10)
latest = headlines[0]
print(latest)
article = ib.reqNewsArticle(latest.providerCode, latest.articleId)
print(article)
```

--------------------------------

### Request Fundamental Ratios

Source: https://ib-api-reloaded.github.io/ib_async/_sources/recipes.rst.txt

Requests market data for a stock contract and then prints the fundamental ratios available in the ticker object.

```python
contract = Stock('IBM', 'SMART', 'USD')
ticker = ib.reqMktData(contract, '258')
ib.sleep(2)
print(ticker.fundamentalRatios)
```

--------------------------------

### Object Conversion

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Utilities for converting objects into different structures.

```APIDOC
## ib_async.util.tree

### Description
Convert object to a tree of lists, dicts and simple values. The result can be serialized to JSON.

### Method
N/A

### Endpoint
N/A

### Response
#### Success Response (200)
- **tree** (Any) - A tree structure representing the object.
```

--------------------------------

### Request Executions API

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Request and return a list of fills. It is recommended to use :meth:`.fills` or :meth:`.executions` instead. This method is blocking.

```APIDOC
## reqExecutions

### Description
Request and return a list of fills.

It is recommended to use :meth:`.fills` or :meth:`.executions` instead.

This method is blocking.

### Method
GET

### Endpoint
/api/reqExecutions

### Parameters
#### Query Parameters
- **execFilter** (object) - Optional. If specified, return executions that match the filter.
  - **time** (string) - Filter by time (e.g., "20231027").
  - **symbol** (string) - Filter by symbol.
  - **exchange** (string) - Filter by exchange.
  - **clientIds** (array) - Filter by client IDs.

### Request Example
```json
{
  "message": "Requesting executions with filter"
}
```

### Response
#### Success Response (200)
- **fills** (array) - A list of fill objects.
  - **execId** (string) - The execution ID.
  - **time** (string) - The time of the execution.
  - **symbol** (string) - The symbol of the traded asset.
  - **side** (string) - The side of the execution (BUY/SELL).
  - **shares** (integer) - The number of shares executed.
  - **price** (number) - The price of the execution.

#### Response Example
```json
{
  "fills": [
    {
      "execId": "00000001",
      "time": "2023-10-27T11:00:00Z",
      "symbol": "IBM",
      "side": "BUY",
      "shares": 50,
      "price": 140.50
    }
  ]
}
```
```

--------------------------------

### Verify Request

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Initiates a verification request for API authentication. Requires API name and version.

```python
def verifyRequest(self, apiName, apiVersion):
        self.send(65, 1, apiName, apiVersion)
```

--------------------------------

### Add util.tree Method

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Introduces the `util.tree()` method for displaying data structures in a tree format.

```python
util.tree()
```

--------------------------------

### Request News Article Async

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously fetches a specific news article by its provider code and article ID. Returns an awaitable for the `NewsArticle` object.

```python
def reqNewsArticleAsync(
        self, providerCode: str, articleId: str, newsArticleOptions: list[TagValue] = []
    ) -> Awaitable[NewsArticle]:
        reqId = self.client.getReqId()

        future = self.wrapper.startReq(reqId)
        self.client.reqNewsArticle(reqId, providerCode, articleId, newsArticleOptions)
        return future
```

--------------------------------

### Client Management of Manual TWS Orders

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Clients with `clientId=0` can now manage manual TWS orders. Clients with a master clientId can monitor manual TWS orders.

```python
Client(clientId=0)
```

--------------------------------

### Request All Open Orders

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously retrieves all open orders across all accounts accessible by the client.

```APIDOC
## GET /api/orders/open/all

### Description
Retrieves all open orders associated with the client's account(s).

### Method
GET

### Endpoint
/api/orders/open/all

### Response
#### Success Response (200)
- **future** (Awaitable[list[Trade]]) - An awaitable object that resolves to a list of Trade objects for all open orders.

#### Response Example
```json
{
  "future": "<awaitable_list_of_trades>"
}
```
```

--------------------------------

### Execution Details

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Handles incoming execution details, which can be from live fills or responses to historical execution requests (`reqExecutions`).

```APIDOC
## execDetails

### Description
Processes execution details received from the Interactive Brokers API. This method handles both live fills generated during trading and the results returned when requesting historical executions (e.g., via `reqExecutions`). It associates executions with existing trades or creates new trade objects if necessary.

### Method
`execDetails(reqId: int, contract: Contract, execution: Execution)`

### Parameters
- **reqId** (int) - The request identifier. Used to determine if this is a live fill or a response to a historical request.
- **contract** (Contract) - The contract details associated with the execution.
- **execution** (Execution) - The execution details, including execution ID, order ID, quantity, price, time, etc.

### Request Example
(This method is typically called internally by the API wrapper upon receiving data from the IB gateway/TWS.)

### Response Example
(This method primarily updates internal state and potentially emits events. No direct response body is returned to the caller.)

### Notes
- Handles a known TWS bug where manual order executions might have an `orderId` of `UNSET_INTEGER`, defaulting it to 0.
- Includes a TODO comment regarding potential issues with spread contracts not having fully detailed legs in `execDetails` compared to `orderStatus`.
```

--------------------------------

### Request Market Data - ib.reqMktData()

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

This method is used for requesting market data. In version 0.9.31, the 'isSmartDepth' parameter was added, and redundant bid/ask ticks were dropped from this request in version 0.9.42.

```python
ib.reqMktData
```

--------------------------------

### Logical Conditions

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Classes for creating logical combinations of order conditions.

```APIDOC
## Logical Conditions

### Description
Provides methods for creating logical AND and OR conditions.

### Methods
- **And()**: Creates an AND condition.
- **Or()**: Creates an OR condition.
```

--------------------------------

### Account and Order Management

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Methods for managing account updates, open orders, and financial advisor configurations.

```APIDOC
## POST /api/accounts/updates

### Description
Requests updates for account information. Allows subscribing or unsubscribing to account data.

### Method
POST

### Endpoint
/api/accounts/updates

### Parameters
#### Query Parameters
- **subscribe** (boolean) - Required - Whether to subscribe to account updates.
- **acctCode** (string) - Required - The account code for which to request updates.

### Request Example
```json
{
  "subscribe": true,
  "acctCode": "DU12345"
}
```

### Response
#### Success Response (200)
- **status** (string) - Indicates the success of the request.

#### Response Example
```json
{
  "status": "success"
}
```
```

```APIDOC
## POST /api/orders/open

### Description
Requests all currently open orders.

### Method
POST

### Endpoint
/api/orders/open

### Parameters
None

### Response
#### Success Response (200)
- **orders** (array) - A list of open orders.

#### Response Example
```json
{
  "orders": [
    {
      "orderId": 1,
      "symbol": "AAPL",
      "quantity": 100,
      "price": 150.00
    }
  ]
}
```
```

```APIDOC
## POST /api/fa/request

### Description
Requests financial advisor configuration data.

### Method
POST

### Endpoint
/api/fa/request

### Parameters
#### Request Body
- **faData** (string) - Required - Specifies the type of FA data to request (e.g., 'P', 'M', 'F').

### Request Example
```json
{
  "faData": "P"
}
```

### Response
#### Success Response (200)
- **data** (string) - The requested financial advisor data.

#### Response Example
```json
{
  "data": "<XML_DATA>"
}
```
```

```APIDOC
## POST /api/fa/replace

### Description
Replaces financial advisor configuration data.

### Method
POST

### Endpoint
/api/fa/replace

### Parameters
#### Request Body
- **reqId** (integer) - Required - The request ID.
- **faData** (string) - Required - Specifies the type of FA data to replace.
- **cxml** (string) - Required - The XML content for the new FA configuration.

### Request Example
```json
{
  "reqId": 1,
  "faData": "P",
  "cxml": "<XML_DATA>"
}
```

### Response
#### Success Response (200)
- **status** (string) - Indicates the success of the replacement.

#### Response Example
```json
{
  "status": "success"
}
```
```

```APIDOC
## POST /api/orders/auto-open

### Description
Enables or disables auto-binding of orders.

### Method
POST

### Endpoint
/api/orders/auto-open

### Parameters
#### Request Body
- **bAutoBind** (boolean) - Required - True to enable auto-binding, False to disable.

### Request Example
```json
{
  "bAutoBind": true
}
```

### Response
#### Success Response (200)
- **status** (string) - Indicates the success of the operation.

#### Response Example
```json
{
  "status": "success"
}
```
```

```APIDOC
## POST /api/accounts/managed

### Description
Requests a list of managed accounts.

### Method
POST

### Endpoint
/api/accounts/managed

### Parameters
None

### Response
#### Success Response (200)
- **accounts** (array) - A list of managed account codes.

#### Response Example
```json
{
  "accounts": ["DU12345", "DU67890"]
}
```
```

--------------------------------

### Request Open Orders - Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Sends a request to the API to retrieve all currently open orders. This function requires no arguments.

```python
def reqOpenOrders(self):
        self.send(5, 1)
```

--------------------------------

### Asynchronous Connection Management

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Handles the asynchronous connection to the Interactive Brokers API, including initial data fetching.

```APIDOC
## POST /connectAsync

### Description
Establishes an asynchronous connection to the Interactive Brokers API and performs initial data fetching for orders, accounts, and executions.

### Method
POST

### Endpoint
/connectAsync

### Parameters
#### Request Body
- **host** (string) - Optional - The host address for the connection. Defaults to "127.0.0.1".
- **port** (integer) - Optional - The port for the connection. Defaults to 7497.
- **clientId** (integer) - Optional - The client ID for the connection. Defaults to 1.
- **timeout** (float | null) - Optional - The timeout for the connection in seconds. Defaults to 4.
- **readonly** (boolean) - Optional - If true, the connection is read-only. Defaults to false.
- **account** (string) - Optional - The specific account to subscribe to updates for. If not provided and only one account exists, it will be used.
- **raiseSyncErrors** (boolean) - Optional - Whether to raise synchronous errors. Defaults to false.
- **fetchFields** (StartupFetch) - Optional - Specifies which initial data fields to fetch. Defaults to StartupFetchALL.

### Response
#### Success Response (200)
- **None** - Indicates a successful connection and initialization.

#### Response Example
```json
{
  "example": "Connection established successfully."
}
```
```

--------------------------------

### Handle Smart Components Response

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Ends a request for smart components, passing the request ID and the received components.

```python
self._endReq(reqId, components)
```

--------------------------------

### Request Security Definition Option Parameters Async

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously requests parameters for option chains, such as expirations and strikes, for a given underlying symbol and contract.

```python
reqSecDefOptParamsAsync(_underlyingSymbol_ , _futFopExchange_ , _underlyingSecType_ , _underlyingConId_)
```

--------------------------------

### Subscribe to Market Data or Request Snapshot

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Subscribes to tick data for a contract or requests a single snapshot. Returns a Ticker object that will be populated with market data. Options for generic ticks, snapshots, and regulatory snapshots are available.

```python
return self.reqMktData(contract, genericTickList, snapshot, regulatorySnapshot, mktDataOptions)
```

--------------------------------

### Request Multi-Account Updates

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Request and maintain live updates for account values across multiple accounts or models. It is recommended to use `accountValues()` instead.

```python
ib.reqAccountUpdatesMulti(_account =''_, _modelCode =''_)
```

--------------------------------

### Account Summary

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Processes and stores account summary information, emitting an event upon receipt. Handles summary data for a specific account and tag.

```python
key = (account, tag, currency)
acctVal = AccountValue(account, tag, value, currency, "")
self.acctSummary[key] = acctVal
self.ib.accountSummaryEvent.emit(acctVal)
```

--------------------------------

### Request Contract Details

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously requests detailed information for a given contract.

```APIDOC
## POST /api/contracts/details

### Description
Retrieves detailed specifications and information for a specified financial contract.

### Method
POST

### Endpoint
/api/contracts/details

### Parameters
#### Request Body
- **contract** (Contract) - Required - The contract object for which to fetch details.

### Response
#### Success Response (200)
- **future** (Awaitable[list[ContractDetails]]) - An awaitable object that resolves to a list of ContractDetails objects.

#### Response Example
```json
{
  "future": "<awaitable_list_of_contract_details>"
}
```
```

--------------------------------

### Add setTimeout

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Introduces the `ib.setTimeout()` function for setting timeouts.

```python
ib.setTimeout()
```

--------------------------------

### Handle User Info Request

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Completes a user info request. This function is called after user information has been retrieved.

```python
def userInfo(self, reqId: int, whiteBrandingId: str):
        self._endReq(reqId)
```

--------------------------------

### Asyncio Patching and Loop Management

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Utilities for patching asyncio and managing the event loop.

```APIDOC
## ib_async.util.patchAsyncio

### Description
Patch asyncio to allow nested event loops.

### Method
N/A

### Endpoint
N/A
```

```APIDOC
## ib_async.util.getLoop

### Description
Get asyncio event loop with smart fallback handling.

### Method
N/A

### Endpoint
N/A

### Response
#### Success Response (200)
- **loop** (asyncio.AbstractEventLoop) - The asyncio event loop.
```

--------------------------------

### Add ContFuture Class

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Introduces the `ContFuture` class for handling continuous futures contracts.

```python
ContFuture
```

--------------------------------

### Request Scanner Parameters

Source: https://ib-api-reloaded.github.io/ib_async/_sources/recipes.rst.txt

Requests and prints all available parameters for the scanner functionality. This is a blocking call.

```python
allParams = ib.reqScannerParameters()
print(allParams)
```

--------------------------------

### Run Tests with Pytest

Source: https://ib-api-reloaded.github.io/ib_async/readme.html

Executes the test suite using pytest.

```bash
poetry run pytest

```

--------------------------------

### Place Order API

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

This function is used to place various types of orders with detailed parameters. It handles different order types, conditions, and advanced settings based on the API version.

```APIDOC
## Place Order API

### Description
This function is used to place various types of orders with detailed parameters. It handles different order types, conditions, and advanced settings based on the API version.

### Method
POST (Implied by `self.send`)

### Endpoint
Not explicitly defined, but part of the IB API.

### Parameters
This function takes a single `order` object and a `contract` object as input, along with an optional `version` parameter.

#### Request Body
(Details are inferred from the code's field population)
- **order.stockRangeLower** (double) - Optional - Lower bound for stock range.
- **order.stockRangeUpper** (double) - Optional - Upper bound for stock range.
- **order.overridePercentageConstraints** (bool) - Optional - Whether to override percentage constraints.
- **order.volatility** (double) - Optional - Volatility value.
- **order.volatilityType** (int) - Optional - Type of volatility.
- **order.deltaNeutralOrderType** (string) - Optional - Delta neutral order type.
- **order.deltaNeutralAuxPrice** (double) - Optional - Auxiliary price for delta neutral orders.
- **order.deltaNeutralConId** (int) - Optional - Contract ID for delta neutral orders.
- **order.deltaNeutralSettlingFirm** (string) - Optional - Settling firm for delta neutral orders.
- **order.deltaNeutralClearingAccount** (string) - Optional - Clearing account for delta neutral orders.
- **order.deltaNeutralClearingIntent** (string) - Optional - Clearing intent for delta neutral orders.
- **order.deltaNeutralOpenClose** (string) - Optional - Open/close status for delta neutral orders.
- **order.deltaNeutralShortSale** (bool) - Optional - Whether it's a short sale for delta neutral orders.
- **order.deltaNeutralShortSaleSlot** (string) - Optional - Short sale slot for delta neutral orders.
- **order.deltaNeutralDesignatedLocation** (string) - Optional - Designated location for delta neutral orders.
- **order.continuousUpdate** (bool) - Optional - Whether to continuously update.
- **order.referencePriceType** (int) - Optional - Reference price type.
- **order.trailStopPrice** (double) - Optional - Trail stop price.
- **order.trailingPercent** (double) - Optional - Trailing percentage.
- **order.scaleInitLevelSize** (int) - Optional - Initial scale level size.
- **order.scaleSubsLevelSize** (int) - Optional - Subsequent scale level size.
- **order.scalePriceIncrement** (double) - Optional - Scale price increment.
- **order.scalePriceAdjustValue** (double) - Optional - Scale price adjustment value.
- **order.scalePriceAdjustInterval** (int) - Optional - Scale price adjustment interval.
- **order.scaleProfitOffset** (double) - Optional - Scale profit offset.
- **order.scaleAutoReset** (bool) - Optional - Whether to auto-reset scale.
- **order.scaleInitPosition** (int) - Optional - Initial scale position.
- **order.scaleInitFillQty** (int) - Optional - Initial scale fill quantity.
- **order.scaleRandomPercent** (double) - Optional - Scale random percentage.
- **order.scaleTable** (string) - Optional - Scale table.
- **order.activeStartTime** (string) - Optional - Active start time.
- **order.activeStopTime** (string) - Optional - Active stop time.
- **order.hedgeType** (string) - Optional - Hedge type.
- **order.hedgeParam** (string) - Optional - Hedge parameter.
- **order.optOutSmartRouting** (bool) - Optional - Whether to opt out of smart routing.
- **order.clearingAccount** (string) - Optional - Clearing account.
- **order.clearingIntent** (string) - Optional - Clearing intent.
- **order.notHeld** (bool) - Optional - Whether the order is not held.
- **contract.deltaNeutralContract** (object) - Optional - Delta neutral contract details.
- **order.algoStrategy** (string) - Optional - Algorithm strategy.
- **order.algoParams** (list of objects) - Optional - Parameters for the algorithm strategy.
- **order.algoId** (string) - Optional - Algorithm ID.
- **order.whatIf** (bool) - Optional - Whether it's a what-if order.
- **order.orderMiscOptions** (list of strings) - Optional - Miscellaneous order options.
- **order.solicited** (bool) - Optional - Whether the order is solicited.
- **order.randomizeSize** (bool) - Optional - Whether to randomize order size.
- **order.randomizePrice** (bool) - Optional - Whether to randomize order price.
- **order.referenceContractId** (int) - Optional - Reference contract ID for certain order types.
- **order.isPeggedChangeAmountDecrease** (bool) - Optional - Whether pegged change amount is a decrease.
- **order.peggedChangeAmount** (double) - Optional - Pegged change amount.
- **order.referenceChangeAmount** (double) - Optional - Reference change amount.
- **order.referenceExchangeId** (string) - Optional - Reference exchange ID.
- **order.conditions** (list of objects) - Optional - Order conditions.
- **order.conditionsIgnoreRth** (bool) - Optional - Whether to ignore RTH for conditions.
- **order.conditionsCancelOrder** (bool) - Optional - Whether to cancel order if conditions are not met.
- **order.adjustedOrderType** (string) - Optional - Adjusted order type.
- **order.triggerPrice** (double) - Optional - Trigger price.
- **order.lmtPriceOffset** (double) - Optional - Limit price offset.
- **order.adjustedStopPrice** (double) - Optional - Adjusted stop price.
- **order.adjustedStopLimitPrice** (double) - Optional - Adjusted stop limit price.
- **order.adjustedTrailingAmount** (double) - Optional - Adjusted trailing amount.
- **order.adjustableTrailingUnit** (int) - Optional - Adjustable trailing unit.
- **order.extOperator** (int) - Optional - External operator.
- **order.softDollarTier.name** (string) - Optional - Soft dollar tier name.
- **order.softDollarTier.val** (string) - Optional - Soft dollar tier value.
- **order.cashQty** (double) - Optional - Cash quantity.
- **order.mifid2DecisionMaker** (string) - Optional - MIFID2 decision maker.
- **order.mifid2DecisionAlgo** (string) - Optional - MIFID2 decision algorithm.
- **order.mifid2ExecutionTrader** (string) - Optional - MIFID2 execution trader.
- **order.mifid2ExecutionAlgo** (string) - Optional - MIFID2 execution algorithm.
- **order.dontUseAutoPriceForHedge** (bool) - Optional - Whether to not use auto price for hedge.
- **order.isOmsContainer** (bool) - Optional - Whether it's an OMS container.
- **order.discretionaryUpToLimitPrice** (bool) - Optional - Whether discretionary is up to limit price.
- **order.usePriceMgmtAlgo** (bool) - Optional - Whether to use price management algorithm.
- **order.duration** (string) - Optional - Order duration (API version >= 158).
- **order.postToAts** (bool) - Optional - Whether to post to ATS (API version >= 160).
- **order.autoCancelParent** (bool) - Optional - Whether to auto-cancel parent (API version >= 162).
- **order.advancedErrorOverride** (string) - Optional - Advanced error override (API version >= 166).
- **order.manualOrderTime** (string) - Optional - Manual order time (API version >= 169).
- **order.minTradeQty** (int) - Optional - Minimum trade quantity (for IBKRATS exchange, API version >= 170).
- **order.minCompeteSize** (int) - Optional - Minimum compete size (for PEG BEST/PEGBEST, API version >= 170).
- **order.competeAgainstBestOffset** (double) - Optional - Compete against best offset (for PEG BEST/PEGBEST, API version >= 170).
- **order.midOffsetAtWhole** (double) - Optional - Mid offset at whole (for PEGBEST/PEGMID, API version >= 170).
- **order.midOffsetAtHalf** (double) - Optional - Mid offset at half (for PEGBEST/PEGMID, API version >= 170).

### Request Example
```json
{
  "order": {
    "orderType": "LMT",
    "lmtPrice": 100.0,
    "action": "BUY",
    "totalQuantity": 100
  },
  "contract": {
    "symbol": "AAPL",
    "secType": "STK",
    "exchange": "SMART",
    "currency": "USD"
  },
  "version": 170
}
```

### Response
(Success response details are not explicitly defined in the provided text, but typically involve an order ID or confirmation.)

#### Success Response (200)
- **orderId** (int) - The unique identifier for the placed order.

#### Response Example
```json
{
  "orderId": 123456789
}
```
```

--------------------------------

### Request Tickers Async

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously requests ticker information for specified contracts. Supports requesting a regulatory snapshot.

```python
_async _reqTickersAsync(_* contracts_, _regulatorySnapshot =False_)
```

--------------------------------

### Contract Details and Symbol Samples

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Retrieves and processes contract details and symbol samples from the IB API.

```APIDOC
## GET /api/contracts/{reqId}

### Description
Retrieves detailed information for a specific contract identified by `reqId`. The results are stored and can be accessed via the `_results` dictionary.

### Method
GET

### Endpoint
/api/contracts/{reqId}

### Parameters
#### Path Parameters
- **reqId** (int) - Required - The request ID for retrieving contract details.

### Response
#### Success Response (200)
- **contractDetails** (list[ContractDetails]) - A list of contract details.

#### Response Example
```json
{
  "contractDetails": [
    {
      "contractMonthYear": "202312",
      "right": "C",
      "strike": 100.0,
      "localSymbol": "ESZ3",
      "tradingClass": "ES",
      "contractId": 12345,
      "multiplier": 50.0,
      "exchange": "CME",
      "currency": "USD",
      "lastTradeDateOrContractMonth": "20231215",
      "serialNumber": 0,
      "symbol": "ES",
      "primaryExchange": "NASDAQ"
    }
  ]
}
```

## GET /api/symbolSamples/{reqId}

### Description
Retrieves sample contract descriptions for a given request ID. This is typically used to get examples of contracts for a given symbol.

### Method
GET

### Endpoint
/api/symbolSamples/{reqId}

### Parameters
#### Path Parameters
- **reqId** (int) - Required - The request ID for retrieving symbol samples.

### Response
#### Success Response (200)
- **contractDescriptions** (list[ContractDescription]) - A list of contract descriptions.

#### Response Example
```json
{
  "contractDescriptions": [
    {
      "contractId": 12345,
      "symbol": "AAPL",
      "secType": "STK",
      "exchange": "SMART",
      "primaryExchange": "NASDAQ",
      "currency": "USD",
      "description": "Apple Inc.",
      "issuer": "US"
    }
  ]
}
```
```

--------------------------------

### Process News Providers

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Processes and returns a list of available news providers, creating new NewsProvider objects. This is typically called after requesting the list of news providers.

```python
def newsProviders(self, newsProviders: list[NewsProvider]):
        newsProviders = [NewsProvider(code=p.code, name=p.name) for p in newsProviders]
        self._endReq("newsProviders", newsProviders)
```

--------------------------------

### Exercise Options

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Executes the exercise or lapse action for an options contract. This method does not return a value.

```python
def exerciseOptions(
        self,
        contract: Contract,
        exerciseAction: int,
        exerciseQuantity: int,
        account: str,
        override: int,
    ):
        """
        Exercise an options contract.

        https://interactivebrokers.github.io/tws-api/options.html

        Args:
            contract: The option contract to be exercised.
            exerciseAction:
                * 1 = exercise the option
                * 2 = let the option lapse
            exerciseQuantity: Number of contracts to be exercised.
            account: Destination account.
            override:
                * 0 = no override
                * 1 = override the system's natural action
        """
        reqId = self.client.getReqId()
        self.client.exerciseOptions(
            reqId, contract, exerciseAction, exerciseQuantity, account, override
        )

```

--------------------------------

### Recreate Contract from Existing

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Static method to recreate a generic Contract into its most specific type. Useful for converting existing contract objects.

```python
Contract.recreate(c)
```

--------------------------------

### logToConsole

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Configures logging to output messages to the console (stderr).

```APIDOC
## Log to Console

### Description
Sets up a stream handler for the logger to direct log messages to the standard error console. It allows setting the logging level and ensures only one handler is added if one already exists.

### Method
`logToConsole(level: int = logging.INFO)`

### Parameters
- **level** (int, optional) - The minimum logging level to display on the console. Defaults to `logging.INFO`.

### Example
```python
import logging
import sys

def logToConsole(level=logging.INFO):
    """Create a log handler that logs to the console."""
    logger = logging.getLogger()
    stdHandlers = [
        h
        for h in logger.handlers
        if type(h) is logging.StreamHandler and h.stream is sys.stderr
    ]

    if stdHandlers:
        logging.getLogger("ib_async").setLevel(level)
    else:
        logger.setLevel(level)
        formatter = logging.Formatter("%(asctime)s %(name)s %(levelname)s %(message)s")
        handler = logging.StreamHandler()
        handler.setFormatter(formatter)
        logger.addHandler(handler)

# Configure logging to the console
logToConsole(level=logging.DEBUG)
logging.info("This message will appear on the console.")
```
```

--------------------------------

### Event Handling

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Utilities for managing global error events.

```APIDOC
## ib_async.util.globalErrorEvent

### Description
Event to emit global exceptions.

### Method
N/A (Event)

### Endpoint
N/A
```

--------------------------------

### Request News Providers

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Requests a list of available news providers. The return type is a list of NewsProvider objects.

```python
def reqNewsProviders(self) -> list[NewsProvider]:
        """

```

--------------------------------

### Tick By Tick Bid/Ask Data Structure

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/objects.html

Represents tick-by-tick bid and ask data.

```APIDOC
## TickByTickBidAsk

### Description
Represents tick-by-tick bid and ask data.

### Fields
- **time** (datetime) - The timestamp of the data.
- **bidPrice** (float) - The current bid price.
- **askPrice** (float) - The current ask price.
- **bidSize** (float) - The current bid size.
- **askSize** (float) - The current ask size.
- **tickAttribBidAsk** (TickAttribBidAsk) - Attributes related to bid/ask data.
```

--------------------------------

### Allow Control-C

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Enables the default handling of Control-C signals to terminate the program.

```python
import signal

def allowCtrlC():
    """Allow Control-C to end program."""
    signal.signal(signal.SIGINT, signal.SIG_DFL)
```

--------------------------------

### Stop Order Constructor

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/order.html

Initializes a Stop Order with a specified stop price. Inherits from the base Order class.

```python
class StopOrder(Order):
    def __init__(self, action: str, totalQuantity: float, stopPrice: float, **kwargs):
        Order.__init__(
            self,
            orderType="STP",
            action=action,
            totalQuantity=totalQuantity,
            auxPrice=stopPrice,
            **kwargs,
        )
```

--------------------------------

### Request Contract Details

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Retrieves detailed information for a given contract. Includes optional issuer ID for newer server versions.

```python
def reqContractDetails(self, reqId, contract):
        fields = [
            9,
            8,
            reqId,
            contract,
            contract.includeExpired,
            contract.secIdType,
            contract.secId,
        ]

        if self.serverVersion() >= 176:
            fields += [contract.issuerId]

        self.send(*fields)
```

--------------------------------

### Watchdog Class

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

The `Watchdog` class has been added to the library for monitoring.

```python
Watchdog
```

--------------------------------

### Order Management

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Methods for placing and canceling orders.

```APIDOC
## Order Management

### placeOrder

Place an order.

#### Parameters
- **orderId** (int) - The ID for the order.
- **contract** (Contract) - The contract for the order.
- **order** (Order) - The order details.

### cancelOrder

Cancel an existing order.

#### Parameters
- **orderId** (int) - The ID of the order to cancel.
- **manualCancelOrderTime** (str) - The time of manual cancellation (optional).
```

--------------------------------

### Request Auto Open Orders

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Enables or disables automatic binding of incoming orders. Requires a boolean flag.

```python
def reqAutoOpenOrders(self, bAutoBind):
        self.send(15, 1, bAutoBind)
```

--------------------------------

### Check Types with Poetry

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Perform static type checking on the ib_async library using MyPy via Poetry.

```bash
poetry run mypy ib_async

```

--------------------------------

### Connect to TWS or Gateway

Source: https://ib-api-reloaded.github.io/ib_async/readme.html

Connects to the Interactive Brokers TWS or Gateway. Ensure the correct port is used (7497 for TWS, 4001 for Gateway).

```python
from ib_async import *

ib = IB()
ib.connect('127.0.0.1', 7497, clientId=1)
```

```python
from ib_async import *

ib = IB()
ib.connect('127.0.0.1', 4001, clientId=1)
```

--------------------------------

### logToFile

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Configures logging to write messages to a specified file.

```APIDOC
## Log to File

### Description
Sets up a file handler for the logger to direct log messages to a specified file path. It also allows setting the logging level.

### Method
`logToFile(path: str, level: int = logging.INFO)`

### Parameters
- **path** (str) - The file path where log messages will be written.
- **level** (int, optional) - The minimum logging level to record. Defaults to `logging.INFO`.

### Example
```python
import logging

def logToFile(path, level=logging.INFO):
    """Create a log handler that logs to the given file."""
    logger = logging.getLogger()
    if logger.handlers:
        logging.getLogger("ib_async").setLevel(level)
    else:
        logger.setLevel(level)

    formatter = logging.Formatter("%(asctime)s %(name)s %(levelname)s %(message)s")
    handler = logging.FileHandler(path)
    handler.setFormatter(formatter)
    logger.addHandler(handler)

# Configure logging to a file
logToFile("app.log", level=logging.DEBUG)
logging.info("This is an informational message.")
logging.warning("This is a warning message.")
```
```

--------------------------------

### Dividend Data Handling

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Improvements were made in version 0.9.39 to handle partially filled dividend data.

```python
dividend data
```

--------------------------------

### Contract Details and Options

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Endpoints for requesting contract details and exercising options.

```APIDOC
## POST /api/contract-details/req

### Description
Requests detailed information about a contract.

### Method
POST

### Endpoint
/api/contract-details/req

### Parameters
#### Request Body
- **reqId** (integer) - Required - The request ID.
- **contract** (object) - Required - Contract details.
  - **conId** (integer) - Optional - The IB contract ID.
  - **symbol** (string) - Optional - The symbol of the contract.
  - **secType** (string) - Optional - The security type (e.g., 'STK', 'FUT').
  - **exchange** (string) - Optional - The exchange where the contract trades.
  - **currency** (string) - Optional - The currency of the contract.
  - **lastTradeDateOrContractMonth** (string) - Optional - The last trade date or contract month.
  - **strike** (number) - Optional - The strike price for options.
  - **right** (string) - Optional - The right for options ('CALL' or 'PUT').
  - **multiplier** (number) - Optional - The contract multiplier.
  - **tradingClass** (string) - Optional - The trading class.
  - **includeExpired** (boolean) - Optional - Whether to include expired contracts.
  - **secIdType** (string) - Optional - Type of security ID.
  - **secId** (string) - Optional - Security ID.
  - **issuerId** (string) - Optional - Issuer ID (for certain instruments).

### Request Example
```json
{
  "reqId": 1,
  "contract": {
    "symbol": "AAPL",
    "secType": "STK",
    "exchange": "SMART",
    "currency": "USD"
  }
}
```

### Response
#### Success Response (200)
- **contractDetails** (array) - An array of contract detail objects.
  - **conId** (integer) - IB contract ID.
  - **symbol** (string) - Symbol.
  - **secType** (string) - Security type.
  - **exchange** (string) - Exchange.
  - **description** (string) - Contract description.
  - **tradingClass** (string) - Trading class.
  - **strike** (number) - Strike price.
  - **right** (string) - Option right.
  - **expiry** (string) - Expiry date.

#### Response Example
```json
{
  "contractDetails": [
    {
      "conId": 26075056,
      "symbol": "AAPL",
      "secType": "STK",
      "exchange": "SMART",
      "description": "Apple Inc.",
      "tradingClass": "STK",
      "strike": 0,
      "right": "",
      "expiry": ""
    }
  ]
}
```
```

```APIDOC
## POST /api/options/exercise

### Description
Exercises an option contract.

### Method
POST

### Endpoint
/api/options/exercise

### Parameters
#### Request Body
- **reqId** (integer) - Required - The request ID.
- **contract** (object) - Required - Contract details (similar to historical data request).
- **exerciseAction** (integer) - Required - The action to perform (1 for exercise, 2 for liquidate).
- **exerciseQuantity** (integer) - Required - The quantity to exercise.
- **account** (string) - Required - The account for which to exercise the option.
- **override** (integer) - Required - Override parameters (e.g., 0 for default).

### Request Example
```json
{
  "reqId": 1,
  "contract": {
    "conId": 123456,
    "symbol": "O:XYZ",
    "secType": "OPT",
    "exchange": "SMART"
  },
  "exerciseAction": 1,
  "exerciseQuantity": 10,
  "account": "DU12345",
  "override": 0
}
```

### Response
#### Success Response (200)
- **status** (string) - Indicates the success of the exercise operation.

#### Response Example
```json
{
  "status": "success"
}
```
```

--------------------------------

### Watchdog Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Methods available for controlling and interacting with the Watchdog instance.

```APIDOC
## Watchdog Methods

### start()

Starts the watchdog process.

### stop()

Stops the watchdog process.

### runAsync()

Asynchronously runs the watchdog process.

### dict()

Returns dataclass values as a dictionary (non-recursive).

### nonDefaults()

Returns fields that differ from their default values as a dictionary.

### tuple()

Returns dataclass values as a tuple.

### update(*srcObjs, **kwargs)

Updates fields of the Watchdog object from source objects or keyword arguments.
```

--------------------------------

### Request Fundamental Data - Client.reqFundamentalData()

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

This method is used to request fundamental data. A fix was implemented in version 0.9.48.

```python
Client.reqFundamentalData
```

--------------------------------

### Request News Bulletins

Source: https://ib-api-reloaded.github.io/ib_async/_sources/recipes.rst.txt

Enables the reception of news bulletins and prints the current list of bulletins after a short delay.

```python
ib.reqNewsBulletins(True)
ib.sleep(5)
print(ib.newsBulletins())
```

--------------------------------

### Ticker Utility Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

This section describes utility methods available for ticker objects, such as checking for bid/ask availability, calculating the midpoint, and retrieving data in different formats.

```APIDOC
## Ticker Utility Methods

This section describes utility methods available for ticker objects, such as checking for bid/ask availability, calculating the midpoint, and retrieving data in different formats.

### Methods

#### isUnset(_value_)

Checks if a value is unset.

- **Parameters**:
  - `_value_` (Any) - The value to check.
- **Return type**:
  - `bool`

#### hasBidAsk()

See if this ticker has a valid bid and ask.

- **Return type**:
  - `bool`

#### midpoint()

Return average of bid and ask, or defaults.unset if no valid bid and ask are available.

- **Return type**:
  - `float`

#### marketPrice()

Return the first available one of:
  * last price if within current bid/ask or no bid/ask available;
  * average of bid and ask (midpoint).

- **Return type**:
  - `float`

#### dict()

Return dataclass values as `dict`. This is a non-recursive variant of `dataclasses.asdict`.

- **Return type**:
  - `dict`

#### nonDefaults()

For a `dataclass` instance get the fields that are different from the default values and return as `dict`.

- **Return type**:
  - `dict[str, Any]`

#### tuple()

Return dataclass values as `tuple`. This is a non-recursive variant of `dataclasses.astuple`.

- **Return type**:
  - `tuple[Any, ...]`

#### update(_* srcObjs_, _** kwargs_)

Update fields of the given `dataclass` object from zero or more `dataclass` source objects and/or from keyword arguments.

- **Parameters**:
  - `* srcObjs` - Source objects to update from.
  - `** kwargs` - Keyword arguments to update with.
- **Return type**:
  - `object`
```

--------------------------------

### Generate Order Key

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Generates a unique key for an order based on client ID, order ID, and perm ID. Uses perm ID for manually placed orders.

```python
def orderKey(self, clientId: int, orderId: int, permId: int) -> OrderKeyType:
        key: OrderKeyType
        if orderId <= 0:
            # order is placed manually from TWS
            key = permId
        else:
            key = (clientId, orderId)
        return key
```

--------------------------------

### Initialize Event Handlers

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Initializes various event handlers for different types of updates from the IB API. These events are used to signal specific occurrences like new orders, account updates, or errors.

```python
self.pendingTickersEvent = Event("pendingTickersEvent")
        self.barUpdateEvent = Event("barUpdateEvent")
        self.newOrderEvent = Event("newOrderEvent")
        self.orderModifyEvent = Event("orderModifyEvent")
        self.cancelOrderEvent = Event("cancelOrderEvent")
        self.openOrderEvent = Event("openOrderEvent")
        self.orderStatusEvent = Event("orderStatusEvent")
        self.execDetailsEvent = Event("execDetailsEvent")
        self.commissionReportEvent = Event("commissionReportEvent")
        self.updatePortfolioEvent = Event("updatePortfolioEvent")
        self.positionEvent = Event("positionEvent")
        self.accountValueEvent = Event("accountValueEvent")
        self.accountSummaryEvent = Event("accountSummaryEvent")
        self.pnlEvent = Event("pnlEvent")
        self.pnlSingleEvent = Event("pnlSingleEvent")
        self.scannerDataEvent = Event("scannerDataEvent")
        self.tickNewsEvent = Event("tickNewsEvent")
        self.newsBulletinEvent = Event("newsBulletinEvent")
        self.wshMetaEvent = Event("wshMetaEvent")
        self.wshEvent = Event("wshEvent")
        self.errorEvent = Event("errorEvent")
        self.timeoutEvent = Event("timeoutEvent")
```

--------------------------------

### Request Scanner Subscription Async

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously requests scanner data based on a provided subscription and filter options.

```python
async def reqScannerDataAsync(
        self,
        subscription: ScannerSubscription,
        scannerSubscriptionOptions: list[TagValue] = [],
        scannerSubscriptionFilterOptions: list[TagValue] = [],
    ) -> ScanDataList:
        dataList = self.reqScannerSubscription(
            subscription,
            scannerSubscriptionOptions or [],
            scannerSubscriptionFilterOptions or [],
        )


```

--------------------------------

### Stop Limit Order Constructor

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/order.html

Initializes a Stop Limit Order with both a limit price and a stop price. Inherits from the base Order class.

```python
class StopLimitOrder(Order):
    def __init__(
        self,
        action: str,
        totalQuantity: float,
        lmtPrice: float,
        stopPrice: float,
        **kwargs,
    ):
        Order.__init__(
            self,
            orderType="STP LMT",
            action=action,
            totalQuantity=totalQuantity,
            lmtPrice=lmtPrice,
            auxPrice=stopPrice,
            **kwargs,
        )
```

--------------------------------

### Request All Open Orders API

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Request and return a list of all open orders over all clients. Note that the orders of other clients will not be kept in sync, use the master clientId mechanism instead to see other client's orders that are kept in sync.

```APIDOC
## reqAllOpenOrders

### Description
Request and return a list of all open orders over all clients.

Note that the orders of other clients will not be kept in sync, use the master clientId mechanism instead to see other client's orders that are kept in sync.

### Method
GET

### Endpoint
/api/reqAllOpenOrders

### Parameters
None

### Request Example
```json
{
  "message": "Requesting all open orders across all clients"
}
```

### Response
#### Success Response (200)
- **orders** (array) - A list of open trade objects across all clients.
  - **orderId** (integer) - The ID of the order.
  - **symbol** (string) - The symbol of the traded asset.
  - **action** (string) - The action taken (BUY/SELL).
  - **quantity** (integer) - The quantity of the order.
  - **orderStatus** (string) - The current status of the order.

#### Response Example
```json
{
  "orders": [
    {
      "orderId": 12345,
      "symbol": "AAPL",
      "action": "BUY",
      "quantity": 10,
      "orderStatus": "Submitted"
    },
    {
      "orderId": 67890,
      "symbol": "GOOG",
      "action": "SELL",
      "quantity": 5,
      "orderStatus": "PendingSubmit"
    }
  ]
}
```
```

--------------------------------

### PnLSingle Object

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents a single P&L (Profit and Loss) entry for an account. It includes daily, unrealized, and realized P&L, as well as position and value.

```APIDOC
## PnLSingle Object

### Description
Represents a single P&L (Profit and Loss) entry for an account. It includes daily, unrealized, and realized P&L, as well as position and value.

### Fields
- **account** (str) - The account identifier. Defaults to ''.
- **modelCode** (str) - The model code associated with the P&L. Defaults to ''.
- **conId** (int) - The contract identifier. Defaults to 0.
- **dailyPnL** (float) - The daily P&L. Defaults to NaN.
- **unrealizedPnL** (float) - The unrealized P&L. Defaults to NaN.
- **realizedPnL** (float) - The realized P&L. Defaults to NaN.
- **position** (int) - The current position. Defaults to 0.
- **value** (float) - The current value. Defaults to NaN.

### Methods
- **dict()**: Returns the dataclass values as a dictionary.
- **nonDefaults()**: Returns fields that differ from default values as a dictionary.
- **tuple()**: Returns the dataclass values as a tuple.
- **update(\*srcObjs, \*\*kwargs)**: Updates fields of the dataclass object from source objects or keyword arguments.
```

--------------------------------

### Asynchronous Position and Contract Details

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Functions for fetching current positions and detailed contract information asynchronously.

```APIDOC
## reqPositionsAsync

### Description
Retrieves the current positions asynchronously.

### Method
ASYNC

### Endpoint
N/A (Client-side function)

### Response
#### Return Type
Awaitable[list[Position]]

### Response Example
```python
[Position(conId=123, symbol='IBM', position=10.0, ...), ...]
```

## reqContractDetailsAsync

### Description
Retrieves detailed information for a given contract asynchronously.

### Method
ASYNC

### Endpoint
N/A (Client-side function)

### Parameters
- **_contract** (Contract) - The contract for which to retrieve details.

### Response
#### Return Type
Awaitable[list[ContractDetails]]

### Response Example
```python
[ContractDetails(conId=123, symbol='IBM', ...), ...]
```
```

--------------------------------

### Request Multi-Positions

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Requests positions for a specific account and model code. Requires a request ID, account, and model code.

```python
def reqPositionsMulti(self, reqId, account, modelCode):
        self.send(74, 1, reqId, account, modelCode)
```

--------------------------------

### Subscribe to Market Scanner - IB.scannerDataEvent

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

This event is emitted when market scanner data is received. In version 0.9.33, it was updated to emit the full list of ScanData. In version 0.9.31, IB.scannerDataEvent was added.

```python
IB.scannerDataEvent
```

--------------------------------

### Profit and Loss Functionality

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Adds Profit and Loss (PnL) functionality to the library.

```python
PnL
```

--------------------------------

### Future Contract Initialization

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Initializes a Future contract with symbol, expiration, exchange, and local symbol. Inherits from the base Contract class.

```python
Future(
            symbol='ES',
            lastTradeDateOrContractMonth='202403',
            exchange='SMART',
            localSymbol='ESH4',
            currency='USD'
        )
```

--------------------------------

### Request Executions

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Requests and returns a list of fills. It is recommended to use `.fills` or `.executions` instead. This method is blocking and can filter by execution details.

```python
return self._run(self.reqExecutionsAsync(execFilter))
```

--------------------------------

### Asynchronous Connection and Contract Operations

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Functions for establishing asynchronous connections and qualifying contract details.

```APIDOC
## _async _connectAsync

### Description
Establishes an asynchronous connection to the IB gateway or TWS.

### Method
ASYNC

### Endpoint
N/A (Client-side function)

### Parameters
- **_host** (str) - Optional - The hostname or IP address of the IB gateway/TWS.
- **_port** (int) - Optional - The port number for the connection.
- **_clientId** (int) - Optional - A unique client identifier.
- **_timeout** (int) - Optional - Connection timeout in seconds.
- **_readonly** (bool) - Optional - If True, the connection is read-only.
- **_account** (str) - Optional - The account to connect with.
- **_raiseSyncErrors** (bool) - Optional - Whether to raise synchronous errors.
- **_fetchFields** (StartupFetch) - Optional - Specifies which data to fetch on startup.

### Response Example
(Connection object)

## _async _qualifyContractsAsync

### Description
Looks up all contract details, returning matching Contract objects. If 'returnAll' is True, ambiguous contracts will return a list of matching contracts instead of None.

### Method
ASYNC

### Endpoint
N/A (Client-side function)

### Parameters
- **_contracts** (*Contract) - Variable number of Contract objects to qualify.
- **returnAll** (bool) - Optional - If True, return lists for ambiguous contracts.

### Response
#### Return Type
list[Contract | list[Contract | None] | None]

### Response Example
```python
[Contract(...), None, [Contract(...), Contract(...)], ...]
```
```

--------------------------------

### Retrieve Historical Data and Calculate SMA

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Fetches historical market data for different timeframes (daily and intraday) and converts it into pandas DataFrames. It then calculates and displays the 20-day Simple Moving Average (SMA). Requires `pandas` and `ib_async` libraries.

```python
from ib_async import *
import pandas as pd

ib = IB()
ib.connect('127.0.0.1', 7497, clientId=1)

contract = Stock('SPY', 'SMART', 'USD')

daily_bars = ib.reqHistoricalData(
    contract, endDateTime='', durationStr='1 Y',
    barSizeSetting='1 day', whatToShow='TRADES', useRTH=True)

intraday_bars = ib.reqHistoricalData(
    contract, endDateTime='', durationStr='5 D',
    barSizeSetting='5 mins', whatToShow='TRADES', useRTH=True)

daily_df = util.df(daily_bars)
intraday_df = util.df(intraday_bars)

print(f"Daily bars: {len(daily_df)} rows")
print(f"Intraday bars: {len(intraday_df)} rows")

daily_df['SMA_20'] = daily_df['close'].rolling(20).mean()
print(daily_df[['date', 'close', 'SMA_20']].tail())

ib.disconnect()
```

--------------------------------

### Order Error Handling Fix

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

A fix related to order error handling was implemented in version 0.9.26.

```none
order error handling
```

--------------------------------

### Connection Management

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Methods for establishing, maintaining, and disconnecting from the IB gateway or TWS.

```APIDOC
## POST /connect

### Description
Connect to a running TWS or IB gateway application.

### Method
POST

### Endpoint
/connect

### Parameters
#### Query Parameters
- **host** (string) - Required - Host name or IP address.
- **port** (integer) - Required - Port number.
- **clientId** (integer) - Required - ID number to use for this client; must be unique per connection.
- **timeout** (float) - Optional - If establishing the connection takes longer than ``timeout`` seconds then the ``asyncio.TimeoutError`` exception is raised. Set to 0 to disable timeout. Defaults to 2.0.

### Request Example
```json
{
  "host": "127.0.0.1",
  "port": 7497,
  "clientId": 1,
  "timeout": 5.0
}
```

### Response
#### Success Response (200)
- **status** (string) - Indicates successful connection.

#### Response Example
```json
{
  "status": "Connected successfully"
}
```

## POST /disconnect

### Description
Disconnect from the IB connection.

### Method
POST

### Endpoint
/disconnect

### Response
#### Success Response (200)
- **status** (string) - Indicates successful disconnection.

#### Response Example
```json
{
  "status": "Disconnected successfully"
}
```
```

```APIDOC
## POST /connectAsync

### Description
Asynchronously connect to a running TWS or IB gateway application.

### Method
POST

### Endpoint
/connectAsync

### Parameters
#### Query Parameters
- **host** (string) - Required - Host name or IP address.
- **port** (integer) - Required - Port number.
- **clientId** (integer) - Required - ID number to use for this client; must be unique per connection.
- **timeout** (float) - Optional - If establishing the connection takes longer than ``timeout`` seconds then the ``asyncio.TimeoutError`` exception is raised. Set to 0 to disable timeout. Defaults to 2.0.

### Request Example
```json
{
  "host": "127.0.0.1",
  "port": 7497,
  "clientId": 1,
  "timeout": 5.0
}
```

### Response
#### Success Response (200)
- **status** (string) - Indicates successful asynchronous connection.

#### Response Example
```json
{
  "status": "Asynchronous connection established"
}
```
```

--------------------------------

### Contract Class and Creation

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

The `Contract` class serves as a base for all financial instrument definitions. It can be instantiated directly with keyword arguments or used to create specialized contract types.

```APIDOC
## Contract Class

### Description

The `Contract` class is a versatile data structure used to represent financial instruments within the Interactive Brokers API. It accepts various attributes to define a contract, such as symbol, security type, exchange, currency, and more. Specialized subclasses exist for common instrument types to simplify instantiation.

### Attributes

- **secType** (str) - The security type (e.g., 'STK', 'OPT', 'FUT', 'CASH').
- **conId** (int) - The unique IB contract identifier.
- **symbol** (str) - The contract or its underlying symbol.
- **lastTradeDateOrContractMonth** (str) - The contract's last trading day or contract month (YYYYMMDD or YYYYMM).
- **strike** (float) - The option's strike price.
- **right** (str) - Put or Call ('P', 'PUT', 'C', 'CALL').
- **multiplier** (str) - The instrument's multiplier.
- **exchange** (str) - The destination exchange.
- **primaryExchange** (str) - The contract's primary exchange.
- **currency** (str) - The underlying's currency.
- **localSymbol** (str) - The contract's symbol within its primary exchange.
- **tradingClass** (str) - The trading class name for this contract.
- **includeExpired** (bool) - Whether to include expired futures contracts.
- **secIdType** (str) - Security identifier type (e.g., 'ISIN', 'CUSIP').
- **secId** (str) - Security identifier.
- **description** (str) - Description of the contract.
- **issuerId** (str) - Issuer identifier.
- **comboLegsDescrip** (str) - Description of combo legs.
- **comboLegs** (List[ComboLeg]) - The legs of a combined contract definition.
- **deltaNeutralContract** (DeltaNeutralContract) - Delta and underlying price for Delta-Neutral combo orders.

### Method

`Contract.create(**kwargs)`

### Description

Creates and returns a specialized contract object based on the provided `secType`, or a general `Contract` object if `secType` is not specified.

### Parameters

- **kwargs** (dict) - Keyword arguments used to define the contract. The `secType` argument determines the specific contract class to instantiate.

### Request Example

```python
from ib_async.contract import Contract, Stock, Forex, Option

# Create a stock contract using the create method
stock_contract = Contract.create(symbol='AMD', secType='STK', exchange='SMART', currency='USD')
print(stock_contract)

# Create a Forex contract directly
forex_contract = Forex('EURUSD')
print(forex_contract)

# Create an Option contract with specific details
option_contract = Option('SPY', '20170721', 240, 'C', 'SMART')
print(option_contract)

# Create a Bond contract using secIdType and secId
bond_contract = Contract.create(secIdType='ISIN', secId='US03076KAA60', secType='BOND')
print(bond_contract)
```

### Response Example

```json
{
  "secType": "STK",
  "symbol": "AMD",
  "exchange": "SMART",
  "currency": "USD",
  "conId": 0
}
{
  "secType": "CASH",
  "symbol": "EURUSD",
  "exchange": "",
  "currency": "",
  "conId": 0
}
{
  "secType": "OPT",
  "symbol": "SPY",
  "lastTradeDateOrContractMonth": "20170721",
  "strike": 240.0,
  "right": "C",
  "exchange": "SMART",
  "currency": "",
  "conId": 0
}
{
  "secType": "BOND",
  "secIdType": "ISIN",
  "secId": "US03076KAA60",
  "exchange": "",
  "currency": "",
  "conId": 0
}
```
```

--------------------------------

### What-If Order Async

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously calculates the potential state of an order without submitting it. Requires a contract and an order object.

```python
whatIfOrderAsync(_contract_ , _order_)
```

--------------------------------

### Query Display Groups

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Requests a list of available display groups. Requires a request ID.

```python
def queryDisplayGroups(self, reqId):
        self.send(67, 1, reqId)
```

--------------------------------

### Financial Advisor (FA) API

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Request and replace Financial Advisor configurations.

```APIDOC
## GET /api/fa/config

### Description
Requests to change the FA configuration.

### Method
GET

### Endpoint
/api/fa/config

### Parameters
#### Query Parameters
- **faDataType** (integer) - Required - Type of FA data to request:
    * 1 = Groups
    * 2 = Profiles
    * 3 = Account Aliases

## PUT /api/fa/config

### Description
Replaces Financial Advisor's settings.

### Method
PUT

### Endpoint
/api/fa/config

### Parameters
#### Request Body
- **faDataType** (integer) - Required - Type of FA data to replace (1=Groups, 2=Profiles, 3=Account Aliases).
- **xml** (string) - Required - The XML-formatted configuration string.
```

--------------------------------

### Request Multi-Account Updates Async

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously requests multi-account updates. Requires an account ID and an optional model code. Returns an Awaitable that resolves to None.

```python
def reqAccountUpdatesMultiAsync(
        self,
        account: str,
        modelCode: str = ""
    ) -> Awaitable[None]:
        reqId = self.client.getReqId()
        future = self.wrapper.startReq(reqId)
        self.client.reqAccountUpdatesMulti(reqId, account, modelCode, False)
        return future
```

--------------------------------

### Handle News Bulletin Event

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Processes incoming news bulletins and stores them. Emits a news bulletin event for further processing.

```python
def receiveNewsBulletin(self, msgId: int, msgType: int, message: str, origExchange: str):
        bulletin = NewsBulletin(msgId, msgType, message, origExchange)
        self.msgId2NewsBulletin[msgId] = bulletin
        self.ib.newsBulletinEvent.emit(bulletin)
```

--------------------------------

### Handle Real-time Bars

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Processes real-time bar data, appends it to subscribers, and emits update events. Use for streaming intraday bar data.

```python
def realtimeBar(
        self,
        reqId: int,
        time: int,
        open_: float,
        high: float,
        low: float,
        close: float,
        volume: float,
        wap: float,
        count: int,
    ):
        dt = datetime.fromtimestamp(time, self.defaultTimezone)
        bar = RealTimeBar(dt, -1, open_, high, low, close, volume, wap, count)
        bars = self.reqId2Subscriber.get(reqId)
        if bars is not None:
            bars.append(bar)
            self.ib.barUpdateEvent.emit(bars, True)
            bars.updateEvent.emit(bars, True)
```

--------------------------------

### Subscription Management

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Manages live subscriptions, registering and unregistering subscribers with associated request IDs and contracts.

```APIDOC
## Subscription Management

### Description
Manages live subscriptions, registering and unregistering subscribers with associated request IDs and contracts.

### Method
Internal methods for managing subscriptions.

### Endpoint
N/A (Internal Class Methods)

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Request Example
None

### Response
#### Success Response (200)
None

#### Response Example
None
```

--------------------------------

### Retrieve Account Summary

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Fetches and displays the account summary information. It retrieves the first managed account and then iterates through its summary tags and values.

```python
from ib_async import *

ib = IB()
ib.connect('127.0.0.1', 7497, clientId=1)

# Get account summary
account = ib.managedAccounts()[0]
summary = ib.accountSummary(account)
for item in summary:
    print(f"{item.tag}: {item.value}")

ib.disconnect()
```

--------------------------------

### Request Historical Data Async

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Placeholder for requesting historical data asynchronously. Requires contract, date/time, duration, bar size, what to show, and RTH flag.

```python
async def reqHistoricalDataAsync(
        self,
        contract: Contract,
        endDateTime: datetime.datetime | datetime.date | str | None,
        durationStr: str,
        barSizeSetting: str,
        whatToShow: str,
        useRTH: bool,

```

--------------------------------

### Set Server Log Level

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Sets the logging level for the IB server. Requires a valid log level integer.

```python
def setServerLogLevel(self, logLevel):
        self.send(14, 1, logLevel)
```

--------------------------------

### Schedule Task - util.schedule()

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Utility for scheduling tasks. In version 0.9.28, it was updated to accept tz-aware datetimes.

```python
util.schedule()
```

--------------------------------

### Verify and Authenticate Request

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Verifies and authenticates an API request. Requires API name, version, and an opaque key.

```python
def verifyAndAuthRequest(self, apiName, apiVersion, opaqueIsvKey):
        self.send(72, 1, apiName, apiVersion, opaqueIsvKey)
```

--------------------------------

### Request All Open Orders Async

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously requests all open orders, potentially including those not accessible via the standard openOrders request. Returns an Awaitable that resolves to a list of Trade objects.

```python
def reqAllOpenOrdersAsync(self) -> Awaitable[list[Trade]]:
        future = self.wrapper.startReq("openOrders")
        self.client.reqAllOpenOrders()
        return future
```

--------------------------------

### Financial Advisor Configuration API

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Endpoints for requesting and replacing Financial Advisor (FA) settings.

```APIDOC
## GET /api/fa/request

### Description
Requests to change the FA configuration.

### Method
GET

### Endpoint
/api/fa/request

### Query Parameters
- **faDataType** (int) - Required - Specifies the type of FA data to request:
  * 1 = Groups: Offer traders a way to create a group of accounts and apply a single allocation method to all accounts in the group.
  * 2 = Profiles: Let you allocate shares on an account-by-account basis using a predefined calculation value.
  * 3 = Account Aliases: Let you easily identify the accounts by meaningful names rather than account numbers.

### Response
#### Success Response (200)
- **faData** (str) - The FA configuration data in XML format.

#### Response Example
```json
{
  "faData": "<Groups>...</Groups>"
}
```
```

```APIDOC
## PUT /api/fa/replace

### Description
Replaces Financial Advisor’s settings.

### Method
PUT

### Endpoint
/api/fa/replace

### Query Parameters
- **faDataType** (int) - Required - Specifies the type of FA data to replace (See `requestFA()` for values).

### Request Body
- **xml** (str) - Required - The XML-formatted configuration string.

### Request Example
```json
{
  "xml": "<Groups>...</Groups>"
}
```

### Response
#### Success Response (200)
- **message** (str) - Confirmation message.

#### Response Example
```json
{
  "message": "Financial Advisor settings replaced successfully."
}
```
```

--------------------------------

### Request Market Depth Exchanges

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Requests a list of exchanges available for market depth data. No parameters are needed.

```python
def reqMktDepthExchanges(self):
        self.send(82)
```

--------------------------------

### Update Market Depth (Simplified)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

A simplified method to update market depth, calling the L2 update function with default parameters.

```python
self.updateMktDepthL2(reqId, position, "", operation, side, price, size)
```

--------------------------------

### Flake8-compliant Code Formatting

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Version 0.9.31 notes extensive documentation overhaul and flake8-compliant code formatting.

```python
flake8
```

--------------------------------

### User Information

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves user-specific information.

```APIDOC
## GET /reqUserInfo

### Description
Gets the White Branding ID of the user.

### Method
GET

### Endpoint
/reqUserInfo

### Parameters
None

### Response
#### Success Response (200)
- **string** - The White Branding ID of the user.

#### Response Example
```json
{
  "example": "[User White Branding ID]"
}
```
```

--------------------------------

### RealTimeBar Object

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents real-time bar data, including time, open, high, low, close prices, volume, weighted average price (wap), and trade count.

```APIDOC
## RealTimeBar Object

### Description
Represents a real-time data bar, providing up-to-the-minute market data.

### Fields
- **time** (datetime) - The timestamp of the bar. Defaults to January 1, 1970, UTC.
- **endTime** (int) - The end time of the bar in milliseconds. Defaults to -1.
- **open** (float) - The opening price for the bar.
- **high** (float) - The highest price during the bar's interval.
- **low** (float) - The lowest price during the bar's interval.
- **close** (float) - The closing price for the bar.
- **volume** (float) - The volume traded during the bar's interval.
- **wap** (float) - The weighted average price during the bar's interval.
- **count** (int) - The number of trades that occurred during the bar's interval.

### Methods
- **dict()**: Returns the object's values as a dictionary.
- **nonDefaults()**: Returns a dictionary of fields that differ from their default values.
- **tuple()**: Returns the object's values as a tuple.
- **update(\*srcObjs, \*\*kwargs)**: Updates the object's fields from source objects or keyword arguments.
```

--------------------------------

### Control Flow Utilities

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Utilities for controlling program execution.

```APIDOC
## ib_async.util.allowCtrlC

### Description
Allow Control-C to end program.

### Method
N/A

### Endpoint
N/A
```

--------------------------------

### Plotting Utilities

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Utilities for creating plots.

```APIDOC
## ib_async.util.barplot

### Description
Create candlestick plot for the given bars. The bars can be given as a DataFrame or as a list of bar objects.

### Method
N/A

### Endpoint
N/A

### Parameters
#### Query Parameters
- **bars** (DataFrame | list) - Required - The data for the bars.
- **title** (str) - Optional - The title of the plot.
- **upColor** (str) - Optional - The color for upward bars, defaults to 'blue'.
- **downColor** (str) - Optional - The color for downward bars, defaults to 'red'.
```

--------------------------------

### Account and Position Management

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Endpoints for retrieving and managing account and position information.

```APIDOC
## POST /reqManagedAccts

### Description
Requests managed accounts.

### Method
POST

### Endpoint
/reqManagedAccts
```

```APIDOC
## POST /reqPositions

### Description
Requests current positions.

### Method
POST

### Endpoint
/reqPositions
```

```APIDOC
## POST /cancelPositions

### Description
Cancels current positions.

### Method
POST

### Endpoint
/cancelPositions
```

```APIDOC
## POST /reqAccountSummary

### Description
Requests account summary.

### Method
POST

### Endpoint
/reqAccountSummary

### Parameters
#### Path Parameters
- **_reqId_** (integer) - Required - The request ID.
- **_groupName_** (string) - Required - The group name for the summary.
- **_tags_** (string) - Required - Comma-separated tags for the summary.
```

```APIDOC
## POST /cancelAccountSummary

### Description
Cancels account summary requests.

### Method
POST

### Endpoint
/cancelAccountSummary

### Parameters
#### Path Parameters
- **_reqId_** (integer) - Required - The request ID.
```

```APIDOC
## POST /reqPositionsMulti

### Description
Requests multi-account positions.

### Method
POST

### Endpoint
/reqPositionsMulti

### Parameters
#### Path Parameters
- **_reqId_** (integer) - Required - The request ID.
- **_account_** (string) - Required - The account identifier.
- **_modelCode_** (string) - Required - The model code.
```

```APIDOC
## POST /cancelPositionsMulti

### Description
Cancels multi-account position requests.

### Method
POST

### Endpoint
/cancelPositionsMulti

### Parameters
#### Path Parameters
- **_reqId_** (integer) - Required - The request ID.
```

```APIDOC
## POST /reqAccountUpdatesMulti

### Description
Requests multi-account updates.

### Method
POST

### Endpoint
/reqAccountUpdatesMulti

### Parameters
#### Path Parameters
- **_reqId_** (integer) - Required - The request ID.
- **_account_** (string) - Required - The account identifier.
- **_modelCode_** (string) - Required - The model code.
- **_ledgerAndNLV_** (boolean) - Required - Whether to include ledger and Net Liquidation Value.
```

```APIDOC
## POST /cancelAccountUpdatesMulti

### Description
Cancels multi-account update requests.

### Method
POST

### Endpoint
/cancelAccountUpdatesMulti

### Parameters
#### Path Parameters
- **_reqId_** (integer) - Required - The request ID.
```

```APIDOC
## POST /reqPnL

### Description
Requests Profit and Loss (PnL) data.

### Method
POST

### Endpoint
/reqPnL

### Parameters
#### Path Parameters
- **_reqId_** (integer) - Required - The request ID.
- **_account_** (string) - Required - The account identifier.
- **_modelCode_** (string) - Required - The model code.
```

```APIDOC
## POST /cancelPnL

### Description
Cancels PnL requests.

### Method
POST

### Endpoint
/cancelPnL

### Parameters
#### Path Parameters
- **_reqId_** (integer) - Required - The request ID.
```

```APIDOC
## POST /reqPnLSingle

### Description
Requests single PnL data.

### Method
POST

### Endpoint
/reqPnLSingle

### Parameters
#### Path Parameters
- **_reqId_** (integer) - Required - The request ID.
- **_account_** (string) - Required - The account identifier.
- **_modelCode_** (string) - Required - The model code.
- **_conid_** (integer) - Required - The contract ID.
```

```APIDOC
## POST /cancelPnLSingle

### Description
Cancels single PnL requests.

### Method
POST

### Endpoint
/cancelPnLSingle

### Parameters
#### Path Parameters
- **_reqId_** (integer) - Required - The request ID.
```

--------------------------------

### Request Completed Orders - ib.reqCompletedOrders()

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Use this method to request completed orders. Requires TWS/gateway version 976 or higher. Completed orders are automatically synced upon connection and include fill and commission information.

```python
ib.reqCompletedOrders()
```

--------------------------------

### Time Range and Waiting Functions

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Functions for creating time ranges, waiting for specific times, and handling network updates with timeouts.

```APIDOC
## Iterator that waits periodically until certain time points are reached while yielding those time points.

### Parameters
#### Path Parameters
- **start** (time | datetime) – Start time, can be specified as datetime.datetime, or as datetime.time in which case today is used as the date
- **end** (time | datetime) – End time, can be specified as datetime.datetime, or as datetime.time in which case today is used as the date
- **step** (float) – The number of seconds of each period

### Return type
`Iterator`[`datetime`]

## Async version of `timeRange()`.

### Return type
`AsyncIterator`[`datetime`]

## Wait until the given time t is reached.

### Parameters
#### Path Parameters
- **t** (time | datetime) – The time t can be specified as datetime.datetime, or as datetime.time in which case today is used as the date.

### Return type
`bool`

## Wait on any new update to arrive from the network.

### Parameters
#### Query Parameters
- **timeout** (float) – Maximum time in seconds to wait. If 0 then no timeout is used.

### Note
A loop with `waitOnUpdate` should not be used to harvest tick data from tickers, since some ticks can go missing. This happens when multiple updates occur almost simultaneously; The ticks from the first update are then cleared. Use events instead to prevent this.

### Return type
`bool`
Returns: `True` if not timed-out, `False` otherwise.

## Iterate until condition is met, with optional timeout in seconds. The yielded value is that of the condition or False when timed out.

### Parameters
#### Query Parameters
- **condition** – Predicate function that is tested after every network update.
- **timeout** (float) – Maximum time in seconds to wait. If 0 then no timeout is used.

### Return type
`Iterator`[`object`]

## Set a timeout for receiving messages from TWS/IBG, emitting `timeoutEvent` if there is no incoming data for too long.
The timeout fires once per connected session but can be set again after firing or after a reconnect.

### Parameters
#### Query Parameters
- **timeout** (float) – Timeout in seconds.
```

--------------------------------

### Request Account Updates Async

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously requests account updates for a specific account. Returns an Awaitable that resolves to None.

```python
def reqAccountUpdatesAsync(self, account: str) -> Awaitable[None]:
        future = self.wrapper.startReq("accountValues")
        self.client.reqAccountUpdates(True, account)
        return future
```

--------------------------------

### Request Real-Time Bars

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Subscribes to real-time bar data for a given contract. Requires a request ID, contract details, bar size, and display options.

```python
def reqRealTimeBars(
        self, reqId, contract, barSize, whatToShow, useRTH, realTimeBarsOptions
    ):
        self.send(
            50, 3, reqId, contract, barSize, whatToShow, useRTH, realTimeBarsOptions
        )
```

--------------------------------

### Request Realtime Bars

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Requests real-time 5-second bars for a given contract. This function initiates a subscription to receive live bar data.

```APIDOC
## POST /api/realtimebars

### Description
Request realtime 5 second bars.

### Method
POST

### Endpoint
/api/realtimebars

### Parameters
#### Request Body
- **contract** (Contract) - Required - Contract of interest.
- **barSize** (int) - Required - Must be 5.
- **whatToShow** (str) - Required - Specifies the source for constructing bars. Can be 'TRADES', 'MIDPOINT', 'BID' or 'ASK'.
- **useRTH** (bool) - Required - If True then only show data from within Regular Trading Hours, if False then show all data.
- **realTimeBarsOptions** (list[TagValue]) - Optional - Unknown.

### Response
#### Success Response (200)
- **reqId** (int) - The unique request identifier.
- **contract** (Contract) - The contract for which bars are requested.
- **barSize** (int) - The size of each bar.
- **whatToShow** (str) - The data source for the bars.
- **useRTH** (bool) - Indicates if data is restricted to Regular Trading Hours.
- **realTimeBarsOptions** (list[TagValue]) - Options applied to the real-time bars request.

### Request Example
{
  "contract": {"symbol": "AAPL", "secType": "STK", "exchange": "SMART", "currency": "USD"},
  "barSize": 5,
  "whatToShow": "TRADES",
  "useRTH": true,
  "realTimeBarsOptions": []
}

### Response Example
{
  "reqId": 1,
  "contract": {"symbol": "AAPL", "secType": "STK", "exchange": "SMART", "currency": "USD"},
  "barSize": 5,
  "whatToShow": "TRADES",
  "useRTH": true,
  "realTimeBarsOptions": []
}
```

--------------------------------

### OrderComboLeg

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents a combo leg for an order.

```APIDOC
## OrderComboLeg

### Description
Represents a combo leg for an order.

### Attributes
- **_price** (float | Decimal)

### Methods
- **dict()**: Return dataclass values as `dict`.
- **nonDefaults()**: Return fields that are different from default values as `dict`.
- **tuple()**: Return dataclass values as `tuple`.
- **update(\*srcObjs, \**kwargs)**: Update fields of the dataclass object.
```

--------------------------------

### Request Scanner Parameters Async

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously requests scanner parameters from the API.

```APIDOC
## GET /api/scannerParams

### Description
Asynchronously retrieves the available parameters for market scanners.

### Method
GET

### Endpoint
/api/scannerParams

### Parameters
None

### Request Example
None

### Response
#### Success Response (200)
- **scannerParams** (list[str]) - A list of available scanner parameters.

#### Response Example
{
  "scannerParams": ["Active Stocks", "Top Gainers"]
}
```

--------------------------------

### getLoop

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Retrieves the asyncio event loop, handling different contexts (synchronous, asynchronous, new loop creation).

```APIDOC
## getLoop

### Description
Get asyncio event loop with smart fallback handling. This function is designed for use in synchronous contexts or when the execution context is unknown. It will:
1. Try to get the currently running event loop (if in async context)
2. Fall back to getting the current thread's event loop via policy
3. Create a new event loop if none exists or if the existing one is closed

For performance-critical async code paths, prefer using `asyncio.get_running_loop()` directly instead of this function.

Note: This function does NOT cache the loop to avoid stale loop bugs when loops are closed and recreated (e.g., in testing, Jupyter notebooks).

### Method
`getLoop`

### Parameters
No parameters.

### Response Example
```json
{
  "event_loop": "<asyncio.BaseEventLoop object>"
}
```
```

--------------------------------

### Request Account Updates

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Requests and maintains updates for account and portfolio values. This method is blocking and typically called at startup. It filters for a specific account if provided.

```python
self._run(self.reqAccountUpdatesAsync(account))
```

--------------------------------

### TickByTickBidAsk Object

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents tick-by-tick data for bid and ask prices and sizes.

```APIDOC
## TickByTickBidAsk Object

### Description
Represents tick-by-tick data for bid and ask prices and sizes, including time and bid/ask attributes.

### Fields
- **time** (datetime) - The timestamp of the bid/ask update.
- **bidPrice** (float) - The current bid price.
- **askPrice** (float) - The current ask price.
- **bidSize** (float) - The current bid size.
- **askSize** (float) - The current ask size.
- **tickAttribBidAsk** (TickAttribBidAsk) - Attributes related to the bid/ask tick.
```

--------------------------------

### FlexReport

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Utilities for accessing and processing IB Flex Query data.

```APIDOC
## FlexReport

### Constants and Errors
- **FLEXREPORT_URL**: The base URL for Flex queries.
- **FlexError**: Custom exception for Flex query errors.

### FlexReport Class
Handles fetching and processing of Flex Query reports.

- **data** (any) - The raw data from the Flex query.
- **root** (xml.etree.ElementTree.Element) - The root element of the parsed XML data.
- **topics()**: Returns a list of available topics in the report.
- **extract()**: Extracts data based on specified criteria.
- **df()**: Returns the extracted data as a pandas DataFrame.
- **get_url()**: Generates the URL for a Flex query.
- **download()**: Downloads a Flex query report.
- **load()**: Loads a Flex query report from a file.
- **save()**: Saves a Flex query report to a file.
```

--------------------------------

### Request Positions Async

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously requests current position data. Returns an Awaitable that resolves to a list of Position objects.

```python
def reqPositionsAsync(self) -> Awaitable[list[Position]]:
        future = self.wrapper.startReq("positions")
        self.client.reqPositions()
        return future
```

--------------------------------

### Calculate Option Price Async

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously calculates the theoretical price of an option contract. Requires contract details, volatility, and underlying price.

```python
_async _calculateOptionPriceAsync(_contract_ , _volatility_ , _underPrice_ , _optPrcOptions =[]_)
```

--------------------------------

### Asynchronous Order and Execution Data

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Functions for retrieving open, completed orders, and execution details asynchronously.

```APIDOC
## reqOpenOrdersAsync

### Description
Retrieves a list of all open orders asynchronously.

### Method
ASYNC

### Endpoint
N/A (Client-side function)

### Response
#### Return Type
Awaitable[list[Trade]]

### Response Example
```python
[Trade(orderId=1, clientOrderId=1, ...), ...]
```

## reqAllOpenOrdersAsync

### Description
Retrieves all open orders, including those not yet confirmed, asynchronously.

### Method
ASYNC

### Endpoint
N/A (Client-side function)

### Response
#### Return Type
Awaitable[list[Trade]]

### Response Example
```python
[Trade(orderId=1, clientOrderId=1, ...), ...]
```

## reqCompletedOrdersAsync

### Description
Retrieves a list of completed orders asynchronously.

### Method
ASYNC

### Endpoint
N/A (Client-side function)

### Parameters
- **apiOnly** (bool) - Optional - If True, only returns orders placed via the API.

### Response
#### Return Type
Awaitable[list[Trade]]

### Response Example
```python
[Trade(orderId=2, clientOrderId=2, ...), ...]
```

## reqExecutionsAsync

### Description
Retrieves execution details asynchronously, with optional filtering.

### Method
ASYNC

### Endpoint
N/A (Client-side function)

### Parameters
- **execFilter** (ExecutionFilter) - Optional - Filter criteria for executions.

### Response
#### Return Type
Awaitable[list[Fill]]

### Response Example
```python
[Fill(execId='...', orderId=1, ...), ...]
```
```

--------------------------------

### BarList Class

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ticker.html

A list specifically designed to hold Bar objects and manage updates.

```APIDOC
## BarList Class

### Description
Extends the standard Python list to manage a collection of `Bar` objects. It includes an `updateEvent` to notify listeners of changes.

### Methods

- **__init__(self, *args)**: Initializes the BarList.
- **__eq__(self, other)**: Compares this BarList with another object.
```

--------------------------------

### Contract Details and Market Depth

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Methods for requesting contract details and market depth information.

```APIDOC
## Contract Details and Market Depth

### reqContractDetails

Request details for a specific contract.

#### Parameters
- **reqId** (int) - The ID for the request.
- **contract** (Contract) - The contract for which to request details.

### reqMktDepth

Request market depth information.

#### Parameters
- **reqId** (int) - The ID for the request.
- **contract** (Contract) - The contract for which to request market depth.
- **numRows** (int) - The number of rows to return.
- **isSmartDepth** (bool) - If True, use Smart Depth.
- **mktDepthOptions** (list) - Options for market depth requests.

### cancelMktDepth

Cancel market depth requests.

#### Parameters
- **reqId** (int) - The ID of the request to cancel.
- **isSmartDepth** (bool) - If True, cancel Smart Depth.
```

--------------------------------

### Request Scanner Parameters

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves an XML list of available scanner parameters. This method is blocking.

```python
def reqScannerParameters(self) -> str:
        """
        Requests an XML list of scanner parameters.

        This method is blocking.
        """
        return self._run(self.reqScannerParametersAsync())

```

--------------------------------

### Request Smart Components

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Obtain a mapping from single-letter codes to exchange names. This request requires the exchanges to be open; otherwise, an empty list is returned.

```python
def reqSmartComponents(self, bboExchange: str) -> list[SmartComponent]:
    """
    Obtain mapping from single letter codes to exchange names.

    Note: The exchanges must be open when using this request, otherwise an
    empty list is returned.
    """
    return self._run(self.reqSmartComponentsAsync(bboExchange))
```

--------------------------------

### Request Ticker Snapshot

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Request a snapshot of tickers for specified contracts. This method is blocking and returns when all tickers are ready. Ensure contracts have been previously requested with reqMktData.

```python
ib.reqTickers(_* contracts_, _regulatorySnapshot =False_)
```

--------------------------------

### Request Option Chain Parameters

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves the option chain for a given underlying security. This method is blocking.

```python
def reqSecDefOptParams(
        self,
        underlyingSymbol: str,
        futFopExchange: str,
        underlyingSecType: str,
        underlyingConId: int,
    ) -> list[OptionChain]:
        """
        Get the option chain.

        This method is blocking.

        https://interactivebrokers.github.io/tws-api/options.html

        Args:
            underlyingSymbol: Symbol of underlier contract.
            futFopExchange: Exchange (only for ``FuturesOption``, otherwise
                leave blank).
            underlyingSecType: The type of the underlying security, like
                'STK' or 'FUT'.
            underlyingConId: conId of the underlying contract.
        """
        return self._run(
            self.reqSecDefOptParamsAsync(
                underlyingSymbol, futFopExchange, underlyingSecType, underlyingConId
            )
        )

```

--------------------------------

### Fix ib.schedule

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

A fix has been implemented for the `ib.schedule()` function.

```python
ib.schedule()
```

--------------------------------

### Request Market Depth

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Requests market depth data for a contract. Supports smart depth and custom options.

```python
def reqMktDepth(self, reqId, contract, numRows, isSmartDepth, mktDepthOptions):
        self.send(
            10,
            5,
            reqId,
            contract.conId,
            contract.symbol,
            contract.secType,
            contract.lastTradeDateOrContractMonth,
            contract.strike,
            contract.right,
            contract.multiplier,
            contract.exchange,
            contract.primaryExchange,
            contract.currency,
            contract.localSymbol,
            contract.tradingClass,
            numRows,
            isSmartDepth,
            mktDepthOptions,
        )
```

--------------------------------

### Request Open Orders API

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Request and return a list of open orders. This method can give stale information. It is recommended to use the more reliable and much faster :meth:`.openTrades` or :meth:`.openOrders` methods instead. This method is blocking.

```APIDOC
## reqOpenOrders

### Description
Request and return a list of open orders.

This method can give stale information where a new open order is not reported or an already filled or cancelled order is reported as open. It is recommended to use the more reliable and much faster :meth:`.openTrades` or :meth:`.openOrders` methods instead.

This method is blocking.

### Method
GET

### Endpoint
/api/reqOpenOrders

### Parameters
None

### Request Example
```json
{
  "message": "Requesting open orders"
}
```

### Response
#### Success Response (200)
- **orders** (array) - A list of open trade objects.
  - **orderId** (integer) - The ID of the order.
  - **symbol** (string) - The symbol of the traded asset.
  - **action** (string) - The action taken (BUY/SELL).
  - **quantity** (integer) - The quantity of the order.
  - **orderStatus** (string) - The current status of the order.

#### Response Example
```json
{
  "orders": [
    {
      "orderId": 12345,
      "symbol": "AAPL",
      "action": "BUY",
      "quantity": 10,
      "orderStatus": "Submitted"
    }
  ]
}
```
```

--------------------------------

### Request Contract Details

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves a list of contract details matching the provided contract. This method is blocking. An empty list indicates the contract is unknown, while multiple entries suggest ambiguity.

```python
def reqContractDetails(self, contract: Contract) -> list[ContractDetails]:
        """
        Get a list of contract details that match the given contract.
        If the returned list is empty then the contract is not known;
        If the list has multiple values then the contract is ambiguous.

        The fully qualified contract is available in the the
        ContractDetails.contract attribute.

        This method is blocking.

        https://interactivebrokers.github.io/tws-api/contract_details.html

        Args:
            contract: The contract to get details for.
        """
```

--------------------------------

### Define Option Security Parameters

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Stores option chain details including exchange, underlying contract ID, trading class, multiplier, expirations, and strikes. This is part of defining security parameters for options.

```python
def securityDefinitionOptionParameter(
        self,
        reqId: int,
        exchange: str,
        underlyingConId: int,
        tradingClass: str,
        multiplier: str,
        expirations: list[str],
        strikes: list[float],
    ):
        chain = OptionChain(
            exchange, underlyingConId, tradingClass, multiplier, expirations, strikes
        )
        self._results[reqId].append(chain)
```

--------------------------------

### Handle Soft Dollar Tiers

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Placeholder function for handling soft dollar tiers. Currently, no action is taken upon receiving this data.

```python
def softDollarTiers(self, reqId: int, tiers: list[SoftDollarTier]):
        pass
```

--------------------------------

### Dataclass Conversion Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Provides standard methods for converting dataclass instances to dictionaries or tuples, and for retrieving non-default fields.

```python
dict()
```

```python
nonDefaults()
```

```python
tuple()
```

```python
update(_* srcObjs_, _** kwargs_)
```

--------------------------------

### IBC Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Methods available for controlling TWS/Gateway instances managed by IBC.

```APIDOC
## IBC Methods

### Description
Provides methods to manage the lifecycle and state of TWS/Gateway instances controlled by the IBC class.

### Methods

#### `start()`
Launches TWS/IB Gateway.

- **Method**: `start`
- **Endpoint**: N/A (Instance method)

#### `terminate()`
Terminates the TWS/IB Gateway process.

- **Method**: `terminate`
- **Endpoint**: N/A (Instance method)

#### `startAsync()`
Asynchronously launches TWS/IB Gateway.

- **Method**: `startAsync`
- **Endpoint**: N/A (Instance method)

#### `terminateAsync()`
Asynchronously terminates the TWS/IB Gateway process.

- **Method**: `terminateAsync`
- **Endpoint**: N/A (Instance method)

#### `monitorAsync()`
Asynchronously monitors the TWS/IB Gateway process.

- **Method**: `monitorAsync`
- **Endpoint**: N/A (Instance method)

#### `dict()`
Returns the current dataclass values as a dictionary. This is a non-recursive variant of `dataclasses.asdict`.

- **Method**: `dict`
- **Endpoint**: N/A (Instance method)
- **Return Type**: `dict`

#### `nonDefaults()`
Returns a dictionary of fields whose values differ from their default values.

- **Method**: `nonDefaults`
- **Endpoint**: N/A (Instance method)
- **Return Type**: `dict[str, Any]`

#### `tuple()`
Returns the current dataclass values as a tuple. This is a non-recursive variant of `dataclasses.astuple`.

- **Method**: `tuple`
- **Endpoint**: N/A (Instance method)
- **Return Type**: `tuple[Any, ...]`

#### `update(*srcObjs, **kwargs)`
Updates fields of the IBC object from source objects or keyword arguments.

- **Method**: `update`
- **Endpoint**: N/A (Instance method)
- **Parameters**:
  - `*srcObjs`: Zero or more source dataclass objects.
  - `**kwargs`: Keyword arguments to update fields.
- **Return Type**: `object`
```

--------------------------------

### Handle Market Depth Exchanges Response

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Ends a request for market depth exchanges, passing a fixed identifier and the list of descriptions.

```python
self._endReq("mktDepthExchanges", depthMktDataDescriptions)
```

--------------------------------

### Open Order Processing Logic

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Handles the processing of newly opened orders. It either updates an existing trade or creates a new one, logging the event and emitting signals. It also ensures that client-issued order IDs do not conflict with existing ones.

```python
def openOrder(self, orderId: int, contract: Contract, order: Order, orderState: OrderState):
            trade = self.trades.get(self.orderKey(order.clientId, orderId, order.permId))
            if trade:
                # update order
                trade.order.orderStatus = OrderStatus(
                    orderId=orderId, status=orderState.status
                )
                trade.order.orderRef = order.orderRef
            else:
                # ignore '?' values in the order
                order = Order(
                    **{k: v for k, v in dataclassAsDict(order).items() if v != "?"}
                )
                contract = Contract.recreate(contract)
                orderStatus = OrderStatus(orderId=orderId, status=orderState.status)
                trade = Trade(contract, order, orderStatus, [], [])
                self.trades[key] = trade
                self._logger.info(f"openOrder: {trade}")

            self.permId2Trade.setdefault(order.permId, trade)
            results = self._results.get("openOrders")

            if results is None:
                self.ib.openOrderEvent.emit(trade)
            else:
                # response to reqOpenOrders or reqAllOpenOrders
                results.append(trade)

        # make sure that the client issues order ids larger than any
        # order id encountered (even from other clients) to avoid
        # "Duplicate order id" error
        self.ib.client.updateReqId(orderId + 1)
```

--------------------------------

### Set Market Data Type

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Configures the type of market data to be received. Use type 3 for free delayed data, type 4 for delayed frozen data, and type 1 for real-time data which requires a subscription.

```python
# For free delayed data (no subscription required)
ib.reqMarketDataType(3)  # Delayed
ib.reqMarketDataType(4)  # Delayed frozen

# For real-time data (requires subscription)
ib.reqMarketDataType(1)  # Real-time
```

--------------------------------

### Request Snapshot Tickers (Blocking)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Requests and returns a list of snapshot tickers. This method is blocking and returns the list once all requested tickers are ready. It supports requesting regulatory snapshots which may incur a fee.

```python
def reqTickers(self, *contracts: Contract, regulatorySnapshot: bool = False) -> list[Ticker]:
    """
    Request and return a list of snapshot tickers.
    The list is returned when all tickers are ready.

    This method is blocking.

    Args:
        contracts: Contracts to get tickers for.
        regulatorySnapshot: Request NBBO snapshots (may incur a fee).
    """
    return self._run(
        self.reqTickersAsync(*contracts, regulatorySnapshot=regulatorySnapshot)
    )
```

--------------------------------

### Ticker.rtVolume Added

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

The `Ticker` object now includes a `rtVolume` attribute for real-time volume.

```python
Ticker.rtVolume
```

--------------------------------

### Process TickByTickBidAsk Data

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Handles tick-by-tick Bid/Ask data, updating bid and ask prices and sizes, and appending the tick to the ticker's history.

```python
    def tickByTickBidAsk(
        self,
        reqId: int,
        time: int,
        bidPrice: float,
        askPrice: float,
        bidSize: float,
        askSize: float,
        tickAttribBidAsk: TickAttribBidAsk,
    ):
        ticker = self.reqId2Ticker.get(reqId)
        if not ticker:
            self._logger.error(f"tickByTickBidAsk: Unknown reqId: {reqId}")
            return

        if bidPrice != ticker.bid:
            ticker.prevBid = ticker.bid
            ticker.bid = bidPrice if bidPrice > 0 else self.defaultEmptyPrice

        if bidSize != ticker.bidSize:
            ticker.prevBidSize = ticker.bidSize
            ticker.bidSize = bidSize if bidSize > 0 else self.defaultEmptySize

        if askPrice != ticker.ask:
            ticker.prevAsk = ticker.ask
            ticker.ask = askPrice if askPrice > 0 else self.defaultEmptyPrice

        if askSize != ticker.askSize:
            ticker.prevAskSize = ticker.askSize
            ticker.askSize = askSize if askSize > 0 else self.defaultEmptySize

        tick = TickByTickBidAsk(
            self.lastTime, bidPrice, askPrice, bidSize, askSize, tickAttribBidAsk
        )

        ticker.tickByTicks.append(tick)
        self.pendingTickers.add(ticker)
```

--------------------------------

### Fixed Conditional Orders

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

A fix has been implemented for handling conditional orders.

```python
conditional orders
```

--------------------------------

### Request Historical Schedule Async

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously requests historical schedule data for a contract over a specified number of days.

```python
def reqHistoricalScheduleAsync(
        self,
        contract: Contract,
        numDays: int,
        endDateTime: datetime.datetime | datetime.date | str | None = "",
        useRTH: bool = True,
    ) -> Awaitable[HistoricalSchedule]:
        reqId = self.client.getReqId()
        future = self.wrapper.startReq(reqId, contract)
        end = util.formatIBDatetime(endDateTime)
        self.client.reqHistoricalData(
            reqId,
            contract,
            end,
            f"{numDays} D",
            "1 day",
            "SCHEDULE",
            useRTH,
            1,
            False,
            None,
        )

        return future

```

--------------------------------

### List Managed Accounts

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Returns a list of account names that are managed by the current connection.

```python
def managedAccounts(self) -> list[str]:
        """List of account names."""
        return list(self.wrapper.accounts)
```

--------------------------------

### Order Management Endpoints

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Endpoints for creating, placing, and managing orders.

```APIDOC
## POST /bracketOrder

### Description
Create a limit order that is bracketed by a take-profit order and a stop-loss order. Submit the bracket like:
```python
for o in bracket:
    ib.placeOrder(contract, o)
```

### Method
POST

### Endpoint
/bracketOrder

### Parameters
#### Request Body
- **action** (str) - Required - ‘BUY’ or ‘SELL’.
- **quantity** (float) - Required - Size of order.
- **limitPrice** (float) - Required - Limit price of entry order.
- **takeProfitPrice** (float) - Required - Limit price of profit order.
- **stopLossPrice** (float) - Required - Stop price of loss order.

### Request Example
```json
{
  "action": "BUY",
  "quantity": 100,
  "limitPrice": 100.0,
  "takeProfitPrice": 105.0,
  "stopLossPrice": 95.0
}
```

### Response
#### Success Response (200)
- **bracketOrder** (BracketOrder) - The created bracket order.

#### Response Example
```json
{
  "bracketOrder": {
    "field1": "value1"
  }
}
```
```

```APIDOC
## POST /oneCancelsAll

### Description
Place the trades in the same One Cancels All (OCA) group.

### Method
POST

### Endpoint
/oneCancelsAll

### Parameters
#### Request Body
- **orders** (list[Order]) - Required - The orders that are to be placed together.
- **ocaGroup** (str) - Required - The name of the OCA group.
- **ocaType** (int) - Required - The type of OCA group (1: Cancel with submission, 2: Do not cancel, 3: Reduce, 4: Decrement).

### Request Example
```json
{
  "orders": [
    {
      "field1": "value1"
    }
  ],
  "ocaGroup": "MyOCAGroup",
  "ocaType": 1
}
```

### Response
#### Success Response (200)
- **ocaOrders** (list[Order]) - A list of orders placed in the OCA group.

#### Response Example
```json
{
  "ocaOrders": [
    {
      "field1": "value1"
    }
  ]
}
```
```

```APIDOC
## POST /whatIfOrder

### Description
Retrieve commission and margin impact without actually placing the order. The given order will not be modified in any way. This method is blocking.

### Method
POST

### Endpoint
/whatIfOrder

### Parameters
#### Request Body
- **contract** (Contract) - Required - Contract to test.
- **order** (Order) - Required - Order to test.

### Request Example
```json
{
  "contract": {
    "field1": "value1"
  },
  "order": {
    "field1": "value1"
  }
}
```

### Response
#### Success Response (200)
- **orderState** (OrderState) - The state of the order including commission and margin impact.

#### Response Example
```json
{
  "orderState": {
    "commission": 1.50,
    "marginRemaining": 10000.0
  }
}
```
```

```APIDOC
## POST /placeOrder

### Description
Place a new order or modify an existing order. Returns a Trade that is kept live updated with status changes, fills, etc.

### Method
POST

### Endpoint
/placeOrder

### Parameters
#### Request Body
- **contract** (Contract) - Required - Contract to use for order.
- **order** (Order) - Required - The order to be placed.

### Request Example
```json
{
  "contract": {
    "field1": "value1"
  },
  "order": {
    "field1": "value1"
  }
}
```

### Response
#### Success Response (200)
- **trade** (Trade) - The placed trade object.

#### Response Example
```json
{
  "trade": {
    "orderId": 12345,
    "status": "Submitted"
  }
}
```
```

```APIDOC
## DELETE /cancelOrder

### Description
Cancel the order and return the Trade it belongs to.

### Method
DELETE

### Endpoint
/cancelOrder

### Parameters
#### Query Parameters
- **order** (Order) - Required - The order to be canceled.
- **manualCancelOrderTime** (str) - Optional - For audit trail.

### Response
#### Success Response (200)
- **trade** (Trade | None) - The trade object of the canceled order, or None if not found.

#### Response Example
```json
{
  "trade": {
    "orderId": 12345,
    "status": "Canceled"
  }
}
```
```

```APIDOC
## POST /reqGlobalCancel

### Description
Cancel all active trades including those placed by other clients or TWS/IB gateway.

### Method
POST

### Endpoint
/reqGlobalCancel

### Response
#### Success Response (200)
- **message** (string) - Confirmation message.

#### Response Example
```json
{
  "message": "All active trades canceled successfully."
}
```
```

--------------------------------

### What-If Order Simulation

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves commission and margin impact for an order without actually placing it. This method is blocking.

```APIDOC
## What-If Order

### Description
Retrieves commission and margin impact for an order without actually placing it. The provided order will not be modified.

### Method
`whatIfOrder`

### Parameters
- **contract** (Contract) - Required - The contract for which to test the order.
- **order** (Order) - Required - The order to test.

### Request Example
```python
# Assuming 'contract' and 'order' are defined and 'ib' is an initialized IB client instance
# order_state = ib.whatIfOrder(contract, order)
# print(f"Commission: {order_state.commission}")
# print(f"Margin: {order_state.marginLevel}")
```

### Response
- **OrderState** - An object containing the simulated commission and margin impact.
```

--------------------------------

### Request Account Updates

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Subscribes to or unsubscribes from account and portfolio updates. Requires account code.

```python
def reqAccountUpdates(self, subscribe, acctCode):
        self.send(6, 2, subscribe, acctCode)
```

--------------------------------

### Asynchronous Head Timestamp and Market Depth

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Functions for retrieving head timestamp, market depth exchanges, and histogram data asynchronously.

```APIDOC
## _async _reqHeadTimeStampAsync

### Description
Retrieves the head timestamp for a contract and data type asynchronously.

### Method
ASYNC

### Endpoint
N/A (Client-side function)

### Parameters
- **_contract** (Contract) - The contract.
- **_whatToShow** (str) - Type of data to show.
- **_useRTH** (bool) - Whether to use regular trading hours.
- **_formatDate** (int) - Date format.

### Response
#### Return Type
datetime

### Response Example
```python
datetime.datetime(2023, 10, 26, 16, 0, 0)
```

## reqMktDepthExchangesAsync

### Description
Retrieves a list of exchanges available for market depth data asynchronously.

### Method
ASYNC

### Endpoint
N/A (Client-side function)

### Response
#### Return Type
Awaitable[list[DepthMktDataDescription]]

### Response Example
```python
[DepthMktDataDescription(exchange='NASDAQ', ...), ...]
```

## reqHistogramDataAsync

### Description
Retrieves histogram data for a contract asynchronously.

### Method
ASYNC

### Endpoint
N/A (Client-side function)

### Parameters
- **_contract** (Contract) - The contract.
- **_useRTH** (bool) - Whether to use regular trading hours.
- **_period** (str) - The period for the histogram data (e.g., "1 day").

### Response
#### Return Type
Awaitable[list[HistogramData]]

### Response Example
```python
[HistogramData(price=150.0, count=50, ...), ...]
```
```

--------------------------------

### Request Positions API

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Request and return a list of positions. It is recommended to use :meth:`.positions` instead.

```APIDOC
## reqPositions

### Description
Request and return a list of positions.

It is recommended to use :meth:`.positions` instead.

### Method
GET

### Endpoint
/api/reqPositions

### Parameters
None

### Request Example
```json
{
  "message": "Requesting account positions"
}
```

### Response
#### Success Response (200)
- **positions** (array) - A list of position objects.
  - **account** (string) - The account associated with the position.
  - **symbol** (string) - The symbol of the asset.
  - **quantity** (integer) - The quantity held.
  - **marketPrice** (number) - The current market price of the asset.
  - **averageCost** (number) - The average cost basis for the position.
  - **marketValue** (number) - The total market value of the position.

#### Response Example
```json
{
  "positions": [
    {
      "account": "DU12345",
      "symbol": "AAPL",
      "quantity": 100,
      "marketPrice": 170.00,
      "averageCost": 165.50,
      "marketValue": 17000.00
    }
  ]
}
```
```

--------------------------------

### Place or Modify Order

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Place a new order or modify an existing one. Returns a Trade object that is updated with status changes and fills.

```python
ib.placeOrder(_contract_ , _order_)
```

--------------------------------

### Scanner Parameters

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Callback for receiving scanner parameters in XML format.

```APIDOC
## POST /api/scanner/parameters

### Description
Receives scanner parameters in XML format.

### Method
POST

### Endpoint
/api/scanner/parameters

### Parameters
#### Request Body
- **xml** (string) - Required - The XML string containing scanner parameters.

### Request Example
```json
{
  "xml": "<parameters>...</parameters>"
}
```

### Response
#### Success Response (200)
- **status** (string) - Indicates the success of the operation.

#### Response Example
```json
{
  "status": "success"
}
```
```

--------------------------------

### Asynchronous Market Data and Symbol Lookup

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Functions for looking up symbols, market rules, and historical data asynchronously.

```APIDOC
## _async _reqMatchingSymbolsAsync

### Description
Finds symbols that match the given pattern asynchronously.

### Method
ASYNC

### Endpoint
N/A (Client-side function)

### Parameters
- **_pattern** (str) - The pattern to match symbols against.

### Response
#### Return Type
list[ContractDescription] | None

### Response Example
```python
[ContractDescription(symbol='IBM', conId=123, ...), ...]
```

## _async _reqMarketRuleAsync

### Description
Retrieves market rule details for a given market rule ID asynchronously.

### Method
ASYNC

### Endpoint
N/A (Client-side function)

### Parameters
- **_marketRuleId** (int) - The ID of the market rule.

### Response
#### Return Type
list[PriceIncrement] | None

### Response Example
```python
[PriceIncrement(lowEdge=0.0, highEdge=10.0, increment=0.01), ...]
```

## _async _reqHistoricalDataAsync

### Description
Retrieves historical bar data for a contract asynchronously.

### Method
ASYNC

### Endpoint
N/A (Client-side function)

### Parameters
- **_contract** (Contract) - The contract for historical data.
- **_endDateTime** (str) - The end date and time for the data.
- **_durationStr** (str) - The duration of the historical data (e.g., "1 M" for 1 month).
- **_barSizeSetting** (str) - The bar size (e.g., "1 day", "1 hour").
- **_whatToShow** (str) - Type of data to show (e.g., "TRADES", "MIDPOINT").
- **_useRTH** (bool) - Whether to use regular trading hours.
- **_formatDate** (int) - Optional - Date format (default is 1).
- **_keepUpToDate** (bool) - Optional - If True, keeps data up-to-date.
- **_chartOptions** (list) - Optional - Charting options.
- **_timeout** (int) - Optional - Timeout in seconds (default is 60).

### Response
#### Return Type
BarDataList

### Response Example
```python
BarDataList([BarData(date='20231026 16:00:00', open=150.0, high=151.0, low=149.0, close=150.5, volume=10000, ...), ...])
```
```

--------------------------------

### TickByTickBidAsk Data Structure

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents tick-by-tick bid and ask data, including time, prices, sizes, and tick attributes.

```APIDOC
## TickByTickBidAsk

### Description
Represents tick-by-tick bid and ask data.

### Fields
- **time** (datetime) - The timestamp of the tick.
- **bidPrice** (float) - The bid price.
- **askPrice** (float) - The ask price.
- **bidSize** (int) - The bid size.
- **askSize** (int) - The ask size.
- **tickAttribBidAsk** (TickAttribBidAsk) - Attributes related to the bid/ask tick.
```

--------------------------------

### Ticker.avVolume Handling Fixed

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Fixed handling for the `ticker.avVolume` attribute.

```python
ticker.avVolume
```

--------------------------------

### Data Structures

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/objects.html

This section outlines various data structures used within the IB API Reloaded library for organizing and representing financial data.

```APIDOC
## Data Structures

This section details various data structures used within the IB API Reloaded library for organizing and representing financial data.

### NewsArticle
Represents a news article.

- **articleType** (int) - The type of the article.
- **articleText** (str) - The text content of the article.

### HistoricalNews
Represents historical news data.

- **time** (datetime) - The timestamp of the news.
- **providerCode** (str) - The code of the news provider.
- **articleId** (str) - The unique identifier for the article.
- **headline** (str) - The headline of the news article.

### NewsTick
Represents a tick of news data.

- **timeStamp** (int) - The timestamp of the news tick.
- **providerCode** (str) - The code of the news provider.
- **articleId** (str) - The unique identifier for the article.
- **headline** (str) - The headline of the news article.
- **extraData** (str) - Additional data associated with the news tick.

### NewsBulletin
Represents a news bulletin message.

- **msgId** (int) - The message ID.
- **msgType** (int) - The type of the message.
- **message** (str) - The content of the message.
- **origExchange** (str) - The originating exchange of the message.

### FamilyCode
Represents a family code for account identification.

- **accountID** (str) - The account ID.
- **familyCodeStr** (str) - The string representation of the family code.

### SmartComponent
Represents a smart component with exchange details.

- **bitNumber** (int) - The bit number associated with the component.
- **exchange** (str) - The exchange where the component is active.
- **exchangeLetter** (str) - The exchange letter associated with the component.

### ConnectionStats
Represents statistics about a connection.

- **startTime** (float) - The start time of the connection.
- **duration** (float) - The duration of the connection.
- **numBytesRecv** (int) - The number of bytes received.
- **numBytesSent** (int) - The number of bytes sent.
- **numMsgRecv** (int) - The number of messages received.
- **numMsgSent** (int) - The number of messages sent.

### BarDataList
List of :class:`.BarData` that also stores all request parameters.

Events:

    * ``updateEvent``
      (bars: :class:`.BarDataList`, hasNewBar: bool)

- **reqId** (int) - The request ID.
- **contract** (Contract) - The contract details.
- **endDateTime** (datetime | date_ | str | None) - The end date and time for the data.
- **durationStr** (str) - The duration string for the data.
- **barSizeSetting** (str) - The bar size setting.
- **whatToShow** (str) - Specifies what data to show.
- **useRTH** (bool) - Whether to use Regular Trading Hours.
- **formatDate** (int) - The date format.
- **keepUpToDate** (bool) - Whether to keep the data up-to-date.
- **chartOptions** (list[TagValue]) - Options for chart display.

### RealTimeBarList
List of :class:`.RealTimeBar` that also stores all request parameters.

Events:
    * ``updateEvent`` (bars: :class:`.RealTimeBarList`, hasNewBar: bool)

- **reqId** (int) - The request ID.
- **contract** (Contract) - The contract details.
- **barSize** (int) - The size of the bars.
- **whatToShow** (str) - Specifies what data to show.
- **useRTH** (bool) - Whether to use Regular Trading Hours.
- **realTimeBarsOptions** (list[TagValue]) - Options for real-time bars.

### ScanDataList
List of :class:`.ScanData` that also stores all request parameters.

Events:
    * ``updateEvent`` (:class:`.ScanDataList`)

- **reqId** (int) - The request ID.
- **subscription** (ScannerSubscription) - The scanner subscription details.
- **scannerSubscriptionOptions** (list[TagValue]) - Options for the scanner subscription.
- **scannerSubscriptionFilterOptions** (list[TagValue]) - Filter options for the scanner subscription.

### DynamicObject
A dynamic object that can hold arbitrary key-value pairs.

### FundamentalRatios
Represents fundamental ratios for a financial instrument.
See: https://web.archive.org/web/20200725010343/https://interactivebrokers.github.io/tws-api/fundamental_ratios_tags.html

### IBDefaults
A simple way to provide default values when populating API data.

- **emptyPrice** (Any) - Default value for empty prices, defaults to -1.
- **emptySize** (Any) - Default value for empty sizes, defaults to 0.
- **unset** (Any) - Default value for unset instance variables, defaults to `nan`.
- **timezone** (tzinfo) - Timezone used for log history events, defaults to UTC.
```

--------------------------------

### Fix PnLSingle Request

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

A fix has been implemented for the `ib.reqPnLSingle()` function.

```python
ib.reqPnLSingle()
```

--------------------------------

### Request Scanner Parameters Async

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously retrieves the available parameters for scanner subscriptions.

```python
reqScannerParametersAsync()
```

--------------------------------

### Request News Article Async

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously requests a specific news article by its provider code and article ID.

```APIDOC
## GET /api/newsArticle

### Description
Asynchronously retrieves a specific news article using its provider code and unique article identifier. Additional options can be provided for filtering or customization.

### Method
GET

### Endpoint
/api/newsArticle

### Parameters
#### Query Parameters
- **providerCode** (str) - Required - The code of the news provider.
- **articleId** (str) - Required - The unique identifier of the news article.
- **newsArticleOptions** (list[TagValue]) - Optional - Additional options for retrieving the news article.

### Request Example
`GET /api/newsArticle?providerCode=BZ&articleId=12345abc&newsArticleOptions=[{"tag": 1, "value": "summary"}]`

### Response
#### Success Response (200)
- **newsArticle** (NewsArticle) - The requested news article details, including headline, time, and text.

#### Response Example
```json
{
  "newsArticle": {
    "headline": "Example Headline",
    "time": "2023-10-27 10:00:00",
    "text": "This is the full text of the news article."
  }
}
```
```

--------------------------------

### Connection Management

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Methods for managing the connection to the Interactive Brokers TWS or gateway.

```APIDOC
## Connection Methods

### connect

Connect to a running TWS or IB gateway application.

#### Parameters
- **host** (str) - Host name or IP address.
- **port** (int) - Port number.
- **clientId** (int) - ID number to use for this client; must be unique per connection.
- **timeout** (float | None) - If establishing the connection takes longer than `timeout` seconds then the `asyncio.TimeoutError` exception is raised. Set to 0 to disable timeout. (Default: 2.0)

### connectAsync

Coroutine for connecting asynchronously.

#### Parameters
- **host** (str) - Host name or IP address.
- **port** (int) - Port number.
- **clientId** (int) - ID number to use for this client; must be unique per connection.
- **timeout** (float | None) - If establishing the connection takes longer than `timeout` seconds then the `asyncio.TimeoutError` exception is raised. Set to 0 to disable timeout. (Default: 2.0)

### disconnect

Disconnect from IB connection.

### isConnected

Check if the client is currently connected.

### isReady

Is the API connection up and running?

Return type:
    bool

### connectionStats

Get statistics about the connection.

Return type:
    ConnectionStats

### setConnectOptions

Set additional connect options.

#### Parameters
- **connectOptions** (str) - Use ‘+PACEAPI’ to use request-pacing built into TWS/gateway 974+ (obsolete).
```

--------------------------------

### Parse Liquid Sessions from ContractDetails

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Parses the liquid hours string from ContractDetails into a list of TradingSession objects. Requires timeZoneId to be set.

```python
def liquidSessions(self) -> list[TradingSession]:
    return self._parseSessions(self.liquidHours)
```

--------------------------------

### Asynchronous Execution

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Utilities for running asynchronous operations.

```APIDOC
## ib_async.util.run

### Description
By default run the event loop forever. When awaitables (like Tasks, Futures or coroutines) are given then run the event loop until each has completed and return their results. An optional timeout (in seconds) can be given that will raise asyncio.TimeoutError if the awaitables are not ready within the timeout period.

### Method
N/A

### Endpoint
N/A

### Parameters
#### Query Parameters
- **awaitables** (*Awaitable) - Required - The awaitable objects to run.
- **timeout** (float | None) - Optional - The timeout in seconds.
```

```APIDOC
## ib_async.util.schedule

### Description
Schedule the callback to be run at the given time with the given arguments. This will return the Event Handle.

### Method
N/A

### Endpoint
N/A

### Parameters
#### Query Parameters
- **time** (time | datetime) - Required - Time to run callback. If given as `datetime.time` then use today as date.
- **callback** (Callable) - Required - Callable scheduled to run.
- **args** (*Any) - Optional - Arguments for to call callback with.
```

```APIDOC
## ib_async.util.sleep

### Description
Wait for the given amount of seconds while everything still keeps processing in the background. Never use time.sleep().

### Method
N/A

### Endpoint
N/A

### Parameters
#### Query Parameters
- **secs** (float) - Optional - Time in seconds to wait, defaults to 0.02.
```

```APIDOC
## ib_async.util.timeRange

### Description
Iterator that waits periodically until certain time points are reached while yielding those time points.

### Method
N/A

### Endpoint
N/A

### Parameters
#### Query Parameters
- **start** (time | datetime) - Required - Start time, can be specified as datetime.datetime, or as datetime.time in which case today is used as the date.
- **end** (time | datetime) - Required - End time, can be specified as datetime.datetime, or as datetime.time in which case today is used as the date.
- **step** (float) - Required - The number of seconds of each period.
```

```APIDOC
## ib_async.util.waitUntil

### Description
Wait until the given time t is reached.

### Method
N/A

### Endpoint
N/A

### Parameters
#### Query Parameters
- **t** (time | datetime) - Required - The time t can be specified as datetime.datetime, or as datetime.time in which case today is used as the date.
```

```APIDOC
## ib_async.util.timeRangeAsync

### Description
Async version of `timeRange()`.

### Method
N/A

### Endpoint
N/A

### Parameters
#### Query Parameters
- **start** (time | datetime) - Required - Start time, can be specified as datetime.datetime, or as datetime.time in which case today is used as the date.
- **end** (time | datetime) - Required - End time, can be specified as datetime.datetime, or as datetime.time in which case today is used as the date.
- **step** (float) - Required - The number of seconds of each period.

### Response
#### Success Response (200)
- **AsyncIterator** (AsyncIterator[datetime]) - An asynchronous iterator yielding datetime objects.
```

```APIDOC
## ib_async.util.waitUntilAsync

### Description
Async version of `waitUntil()`.

### Method
N/A

### Endpoint
N/A

### Parameters
#### Query Parameters
- **t** (time | datetime) - Required - The time t can be specified as datetime.datetime, or as datetime.time in which case today is used as the date.

### Response
#### Success Response (200)
- **bool** (bool) - True if the time has been reached, False otherwise.
```

--------------------------------

### Account and Execution Data

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Methods for requesting account updates and execution details.

```APIDOC
## Account and Execution Data

### reqAccountUpdates

Subscribe to or unsubscribe from account updates.

#### Parameters
- **subscribe** (bool) - True to subscribe, False to unsubscribe.
- **acctCode** (str) - The account code to subscribe to (optional).

### reqExecutions

Request execution details.

#### Parameters
- **reqId** (int) - The ID for the request.
- **execFilter** (ExecutionFilter) - Filter for execution details.
```

--------------------------------

### Run Asyncio Event Loop

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Manages the asyncio event loop. If no awaitables are provided, it runs the loop indefinitely or until tasks are cancelled. If awaitables are given, it runs them to completion, optionally with a timeout.

```python
import asyncio
from typing import Awaitable

# Assuming getLoop() is defined elsewhere and returns the event loop
def getLoop():
    try:
        return asyncio.get_running_loop()
    except RuntimeError:
        return asyncio.new_event_loop()

def run(*awaitables: Awaitable, timeout: float | None = None):
    """
    By default run the event loop forever.

    When awaitables (like Tasks, Futures or coroutines) are given then
    run the event loop until each has completed and return their results.

    An optional timeout (in seconds) can be given that will raise
    asyncio.TimeoutError if the awaitables are not ready within the
    timeout period.
    """
    loop = getLoop()
    if not awaitables:
        if loop.is_running():
            return

        loop.run_forever()
        result = None
        all_tasks = asyncio.all_tasks(loop)  # type: ignore

        if all_tasks:
            # cancel pending tasks
            f = asyncio.gather(*all_tasks)
            f.cancel()
            try:
                loop.run_until_complete(f)
            except asyncio.CancelledError:
                pass
    else:
        if len(awaitables) == 1:
            future = awaitables[0]
        else:
            future = asyncio.gather(*awaitables)

        if timeout:
            future = asyncio.wait_for(future, timeout)
```

--------------------------------

### Portfolio Item Data Structure

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/objects.html

Represents an item within a user's portfolio.

```APIDOC
## PortfolioItem

### Description
Represents an item within a user's portfolio.

### Fields
- **contract** (Contract) - The contract details of the portfolio item.
- **position** (float) - The current position size.
- **marketPrice** (float) - The current market price.
- **marketValue** (float) - The current market value of the position.
- **averageCost** (float) - The average cost basis of the position.
- **unrealizedPNL** (float) - The unrealized profit or loss.
- **realizedPNL** (float) - The realized profit or loss.
- **account** (str) - The account identifier for this portfolio item.
```

--------------------------------

### Order Management

Source: https://ib-api-reloaded.github.io/ib_async/api.html

APIs for managing and binding orders, including automatic binding for TWS.

```APIDOC
## POST /api/orders/bind

### Description
Bind manual TWS orders so that they can be managed from this client. The clientId must be 0 and the TWS API setting “Use negative numbers to bind automatic orders” must be checked. This request is automatically called when clientId=0.

### Method
POST

### Endpoint
/api/orders/bind

### Parameters
#### Query Parameters
- **autoBind** (bool) - Required - Set binding on or off.

### Request Example
```json
{
  "autoBind": true
}
```

### Response
#### Success Response (200)
- **message** (string) - Confirmation message.

#### Response Example
```json
{
  "message": "Orders bound successfully."
}
```
```

--------------------------------

### Utility and Control Endpoints

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Endpoints for API control, verification, and utility functions.

```APIDOC
## POST /api/currentTime

### Description
Requests the current time from the API server.

### Method
POST

### Endpoint
/api/currentTime

### Parameters
#### Request Body
(No specific parameters required for this request)

### Request Example
```json
{
  "message": "Requesting current time"
}
```

### Response
#### Success Response (200)
- **time** (string) - The current server time.

#### Response Example
```json
{
  "time": "2023-10-27 10:00:00"
}
```
```

```APIDOC
## POST /api/globalCancel

### Description
Cancels all active requests.

### Method
POST

### Endpoint
/api/globalCancel

### Parameters
#### Request Body
(No specific parameters required for this request)

### Request Example
```json
{
  "message": "Initiating global cancel"
}
```

### Response
#### Success Response (200)
- **status** (string) - Confirmation of global cancellation.

#### Response Example
```json
{
  "status": "All active requests cancelled successfully."
}
```
```

```APIDOC
## POST /api/marketDataType

### Description
Sets the market data type for subsequent requests.

### Method
POST

### Endpoint
/api/marketDataType

### Parameters
#### Request Body
- **marketDataType** (string) - Required - The desired market data type (e.g., "RealTime", "Frozen", "Delayed", "DelayedFrozen").

### Request Example
```json
{
  "marketDataType": "RealTime"
}
```

### Response
#### Success Response (200)
- **status** (string) - Confirmation of market data type setting.

#### Response Example
```json
{
  "status": "Market data type set to RealTime."
}
```
```

```APIDOC
## POST /api/verifyRequest

### Description
Verifies an API request with the server.

### Method
POST

### Endpoint
/api/verifyRequest

### Parameters
#### Request Body
- **apiName** (string) - Required - The name of the API.
- **apiVersion** (string) - Required - The version of the API.

### Request Example
```json
{
  "apiName": "IBAPI",
  "apiVersion": "1.0"
}
```

### Response
#### Success Response (200)
- **verificationId** (int) - The ID for the verification.

#### Response Example
```json
{
  "verificationId": 101
}
```
```

```APIDOC
## POST /api/verifyMessage

### Description
Verifies a message with the server using a verification ID.

### Method
POST

### Endpoint
/api/verifyMessage

### Parameters
#### Request Body
- **apiData** (string) - Required - The data to verify.

### Request Example
```json
{
  "apiData": "some_verification_data"
}
```

### Response
#### Success Response (200)
- **status** (string) - The verification status.

#### Response Example
```json
{
  "status": "Verified"
}
```
```

```APIDOC
## POST /api/queryDisplayGroups

### Description
Queries available display groups.

### Method
POST

### Endpoint
/api/queryDisplayGroups

### Parameters
#### Request Body
- **reqId** (int) - Required - Unique identifier for the request.

### Request Example
```json
{
  "reqId": 16
}
```

### Response
#### Success Response (200)
- **groups** (array) - Array of display group data.

#### Response Example
```json
{
  "groups": [
    {
      "groupId": 1,
      "name": "Group A"
    }
  ]
}
```
```

```APIDOC
## POST /api/subscribeToGroupEvents

### Description
Subscribes to events for a specific display group.

### Method
POST

### Endpoint
/api/subscribeToGroupEvents

### Parameters
#### Request Body
- **reqId** (int) - Required - Unique identifier for the request.
- **groupId** (int) - Required - The ID of the group to subscribe to.

### Request Example
```json
{
  "reqId": 17,
  "groupId": 1
}
```

### Response
#### Success Response (200)
- **status** (string) - Confirmation of subscription.

#### Response Example
```json
{
  "status": "Subscribed to group events successfully."
}
```
```

```APIDOC
## POST /api/updateDisplayGroup

### Description
Updates a display group with new contract information.

### Method
POST

### Endpoint
/api/updateDisplayGroup

### Parameters
#### Request Body
- **reqId** (int) - Required - Unique identifier for the request.
- **contractInfo** (object) - Required - Contract details to update the group with.

### Request Example
```json
{
  "reqId": 18,
  "contractInfo": {
    "conId": 12345,
    "symbol": "AAPL"
  }
}
```

### Response
#### Success Response (200)
- **status** (string) - Confirmation of update.

#### Response Example
```json
{
  "status": "Display group updated successfully."
}
```
```

```APIDOC
## POST /api/startApi

### Description
Starts the API connection with client ID and capabilities.

### Method
POST

### Endpoint
/api/startApi

### Parameters
#### Request Body
- **clientId** (int) - Required - The client ID for the connection.
- **optCapab** (object) - Required - Optional capabilities for the API connection.

### Request Example
```json
{
  "clientId": 100,
  "optCapab": {
    "realTimeBars": true
  }
}
```

### Response
#### Success Response (200)
- **status** (string) - Confirmation of API start.

#### Response Example
```json
{
  "status": "API started successfully."
}
```
```

```APIDOC
## POST /api/verifyAndAuthRequest

### Description
Verifies and authenticates an API request.

### Method
POST

### Endpoint
/api/verifyAndAuthRequest

### Parameters
#### Request Body
- **apiName** (string) - Required - The name of the API.
- **apiVersion** (string) - Required - The version of the API.
- **opaqueIsvKey** (string) - Required - The opaque ISV key for authentication.

### Request Example
```json
{
  "apiName": "IBAPI",
  "apiVersion": "1.0",
  "opaqueIsvKey": "your_isv_key"
}
```

### Response
#### Success Response (200)
- **authId** (string) - The authentication ID.

#### Response Example
```json
{
  "authId": "auth_token_123"
}
```
```

```APIDOC
## POST /api/verifyAndAuthMessage

### Description
Verifies and authenticates a message using previous authentication.

### Method
POST

### Endpoint
/api/verifyAndAuthMessage

### Parameters
#### Request Body
- **apiData** (string) - Required - The data to verify and authenticate.
- **xyzResponse** (string) - Required - The response from XYZ verification.

### Request Example
```json
{
  "apiData": "message_data",
  "xyzResponse": "xyz_response_data"
}
```

### Response
#### Success Response (200)
- **status** (string) - The authentication status.

#### Response Example
```json
{
  "status": "Authenticated"
}
```
```

--------------------------------

### Request Market Rule Async

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously retrieves market rule details for a given market rule ID. Includes a short timeout and logs an error if it occurs. Returns a list of PriceIncrement or None.

```python
async def reqMarketRuleAsync(
        self,
        marketRuleId: int
    ) -> list[PriceIncrement] | None:
        future = self.wrapper.startReq(f"marketRule-{marketRuleId}")
        try:
            self.client.reqMarketRule(marketRuleId)
            await asyncio.wait_for(future, 1)
            return future.result()
        except asyncio.TimeoutError:
            self._logger.error("reqMarketRuleAsync: Timeout")
            return None
```

--------------------------------

### Request Matching Symbols

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously searches for contracts matching a given pattern.

```APIDOC
## GET /api/symbols/matching

### Description
Finds and returns a list of contract descriptions that match the provided pattern. Includes a timeout for the request.

### Method
GET

### Endpoint
/api/symbols/matching

### Parameters
#### Query Parameters
- **pattern** (str) - Required - The pattern to search for among contract symbols.

### Response
#### Success Response (200)
- **list[ContractDescription] | None** - A list of ContractDescription objects matching the pattern, or None if a timeout occurs.

#### Response Example
```json
[
  {
    "conId": 12345,
    "symbol": "AAPL",
    "secType": "STK"
  }
]
```
```

--------------------------------

### Handle Contract Details

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Stores contract details received for a given request ID. Use when detailed contract information is required.

```python
def contractDetails(self, reqId: int, contractDetails: ContractDetails):
        self._results[reqId].append(contractDetails)

bondContractDetails = contractDetails
```

--------------------------------

### Schedule Timer Callback

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Schedules a timer callback using the event loop. Calculates delay based on elapsed time and configured timeout.

```python
def _setTimer(self, delay: float = 0):
        if self.lastTime == datetime.min:
            return

        now = datetime.now(self.defaultTimezone)
        diff = (now - self.lastTime).total_seconds()

        if not delay:
            delay = self._timeout - diff

        if delay > 0:
            loop = getLoop()
            self._timeoutHandle = loop.call_later(delay, self._setTimer)
        else:
            self._logger.debug("Timeout")
            self.setTimeout(0)
            self.ib.timeoutEvent.emit(diff)
```

--------------------------------

### Request Security Definition Options Parameters

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Requests parameters for security definition options. Requires a request ID, underlying symbol, exchange, underlying security type, and underlying conId.

```python
def reqSecDefOptParams(
        self,
        reqId,
        underlyingSymbol,
        futFopExchange,
        underlyingSecType,
        underlyingConId,
    ):
        self.send(
            78,
            reqId,
            underlyingSymbol,
            futFopExchange,
            underlyingSecType,
            underlyingConId,
        )
```

--------------------------------

### Send Order Details - Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Constructs and sends a comprehensive list of order fields to the API. This function handles various order types and conditional logic based on order parameters and API version. Ensure all required order attributes are correctly populated before calling.

```python
fields += [
            order.stockRangeLower,
            order.stockRangeUpper,
            order.overridePercentageConstraints,
            order.volatility,
            order.volatilityType,
            order.deltaNeutralOrderType,
            order.deltaNeutralAuxPrice,
        ]

        if order.deltaNeutralOrderType:
            fields += [
                order.deltaNeutralConId,
                order.deltaNeutralSettlingFirm,
                order.deltaNeutralClearingAccount,
                order.deltaNeutralClearingIntent,
                order.deltaNeutralOpenClose,
                order.deltaNeutralShortSale,
                order.deltaNeutralShortSaleSlot,
                order.deltaNeutralDesignatedLocation,
            ]

        fields += [
            order.continuousUpdate,
            order.referencePriceType,
            order.trailStopPrice,
            order.trailingPercent,
            order.scaleInitLevelSize,
            order.scaleSubsLevelSize,
            order.scalePriceIncrement,
        ]

        if 0 < order.scalePriceIncrement < UNSET_DOUBLE:
            fields += [
                order.scalePriceAdjustValue,
                order.scalePriceAdjustInterval,
                order.scaleProfitOffset,
                order.scaleAutoReset,
                order.scaleInitPosition,
                order.scaleInitFillQty,
                order.scaleRandomPercent,
            ]

        fields += [
            order.scaleTable,
            order.activeStartTime,
            order.activeStopTime,
            order.hedgeType,
        ]

        if order.hedgeType:
            fields += [order.hedgeParam]

        fields += [
            order.optOutSmartRouting,
            order.clearingAccount,
            order.clearingIntent,
            order.notHeld,
        ]

        dnc = contract.deltaNeutralContract
        if dnc:
            fields += [True, dnc.conId, dnc.delta, dnc.price]
        else:
            fields += [False]

        fields += [order.algoStrategy]
        if order.algoStrategy:
            params = order.algoParams or []
            fields += [len(params)]
            for param in params:
                fields += [param.tag, param.value]

        fields += [
            order.algoId,
            order.whatIf,
            order.orderMiscOptions,
            order.solicited,
            order.randomizeSize,
            order.randomizePrice,
        ]

        if order.orderType in {"PEG BENCH", "PEGBENCH"}:
            fields += [
                order.referenceContractId,
                order.isPeggedChangeAmountDecrease,
                order.peggedChangeAmount,
                order.referenceChangeAmount,
                order.referenceExchangeId,
            ]

        fields += [len(order.conditions)]
        if order.conditions:
            for cond in order.conditions:
                fields += dataclassAsTuple(cond)
            fields += [order.conditionsIgnoreRth, order.conditionsCancelOrder]

        fields += [
            order.adjustedOrderType,
            order.triggerPrice,
            order.lmtPriceOffset,
            order.adjustedStopPrice,
            order.adjustedStopLimitPrice,
            order.adjustedTrailingAmount,
            order.adjustableTrailingUnit,
            order.extOperator,
            order.softDollarTier.name,
            order.softDollarTier.val,
            order.cashQty,
            order.mifid2DecisionMaker,
            order.mifid2DecisionAlgo,
            order.mifid2ExecutionTrader,
            order.mifid2ExecutionAlgo,
            order.dontUseAutoPriceForHedge,
            order.isOmsContainer,
            order.discretionaryUpToLimitPrice,
            order.usePriceMgmtAlgo,
        ]

        if version >= 158:
            fields += [order.duration]

        if version >= 160:
            fields += [order.postToAts]

        if version >= 162:
            fields += [order.autoCancelParent]

        if version >= 166:
            fields += [order.advancedErrorOverride]

        if version >= 169:
            fields += [order.manualOrderTime]

        if version >= 170:
            if contract.exchange == "IBKRATS":
                fields += [order.minTradeQty]
            if order.orderType in {"PEG BEST", "PEGBEST"}:
                fields += [order.minCompeteSize, order.competeAgainstBestOffset]
                if order.competeAgainstBestOffset == math.inf:
                    fields += [order.midOffsetAtWhole, order.midOffsetAtHalf]
            elif order.orderType in {"PEG MID", "PEGMID"}:
                fields += [order.midOffsetAtWhole, order.midOffsetAtHalf]

        self.send(*fields)
```

--------------------------------

### News Bulletin Handling

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Handles the reception and processing of news bulletins, storing them and emitting an event.

```APIDOC
## POST /newsBulletin

### Description
Processes incoming news bulletins, stores them, and emits a news bulletin event.

### Method
POST

### Endpoint
/newsBulletin

### Parameters
#### Request Body
- **msgId** (int) - Required - The unique identifier for the message.
- **msgType** (int) - Required - The type of the message.
- **message** (str) - Required - The content of the news bulletin.
- **origExchange** (str) - Required - The originating exchange of the news bulletin.
```

--------------------------------

### Asynchronous Time and Account Data Retrieval

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Functions for fetching the current time and account-related information asynchronously.

```APIDOC
## reqCurrentTimeAsync

### Description
Retrieves the current time from the IB server asynchronously.

### Method
ASYNC

### Endpoint
N/A (Client-side function)

### Response
#### Return Type
Awaitable[datetime]

### Response Example
```python
datetime.datetime(2023, 10, 27, 10, 30, 0)
```

## reqAccountUpdatesAsync

### Description
Requests asynchronous updates for a specific account.

### Method
ASYNC

### Endpoint
N/A (Client-side function)

### Parameters
- **_account** (str) - The account ID for which to request updates.

### Response
#### Return Type
Awaitable[None]

## reqAccountUpdatesMultiAsync

### Description
Requests asynchronous updates for multiple accounts, with an optional model code.

### Method
ASYNC

### Endpoint
N/A (Client-side function)

### Parameters
- **_account** (str) - The account ID.
- **_modelCode** (str) - Optional - The model code.

### Response
#### Return Type
Awaitable[None]

## _async _accountSummaryAsync

### Description
Retrieves account summary information asynchronously.

### Method
ASYNC

### Endpoint
N/A (Client-side function)

### Parameters
- **_account** (str) - Optional - The account ID.

### Response
#### Return Type
list[AccountValue]

### Response Example
```python
[AccountValue(tag='NetLiquidation', value='100000.0', currency='USD'), ...]
```

## reqAccountSummaryAsync

### Description
Requests asynchronous updates for account summary.

### Method
ASYNC

### Endpoint
N/A (Client-side function)

### Response
#### Return Type
Awaitable[None]

```

--------------------------------

### Option Chain API

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Retrieves option chain details for a given underlying asset. This method is blocking.

```APIDOC
## GET /api/option/chain

### Description
Retrieves the option chain for a specified underlying asset. This is a blocking operation.

### Method
GET

### Endpoint
/api/option/chain

### Parameters
#### Query Parameters
- **underlyingSymbol** (str) - Required - The symbol of the underlying contract.
- **futFopExchange** (str) - Optional - The exchange (only for `FuturesOption`, otherwise leave blank).
- **underlyingSecType** (str) - Required - The type of the underlying security (e.g., 'STK', 'FUT').
- **underlyingConId** (int) - Required - The conId of the underlying contract.

### Response
#### Success Response (200)
- **chain** (list[OptionChain]) - A list of OptionChain objects.

#### Response Example
{
  "chain": [
    {
      "contract": {"symbol": "AAPL", "secType": "OPT", "exchange": "SMART", "lastTradeDateOrContractMonth": "20240315", "strike": 170.0, "right": "C"},
      "optionHtmlLink": "..."
    }
  ]
}
```

--------------------------------

### Request Current Time

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously retrieves the current time from the IB server.

```APIDOC
## GET /api/currentTime

### Description
Fetches the current system time from the Interactive Brokers server asynchronously.

### Method
GET

### Endpoint
/api/currentTime

### Response
#### Success Response (200)
- **future** (Awaitable[datetime.datetime]) - An awaitable object that resolves to the current datetime.

#### Response Example
```json
{
  "future": "<awaitable_datetime_object>"
}
```
```

--------------------------------

### Handle Client ID Conflicts

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Each connection to the IB API must have a unique client ID. Use different numbers for multiple simultaneous connections to avoid conflicts.

```python
# Each connection needs a unique client ID
ib.connect('127.0.0.1', 7497, clientId=1)  # Use different numbers for multiple connections
```

--------------------------------

### Request Auto Open Orders

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Binds manual TWS orders for management by this client. Requires specific TWS API settings and is automatically called when clientId is 0. Allows enabling or disabling the binding.

```python
self.client.reqAutoOpenOrders(autoBind)
```

--------------------------------

### User Info Request

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Handles requests for user information, specifically the white-branding ID.

```APIDOC
## POST /userInfo

### Description
Processes a request for user information, returning the white-branding identifier.

### Method
POST

### Endpoint
/userInfo

### Parameters
#### Request Body
- **reqId** (int) - Required - The request identifier.
- **whiteBrandingId** (str) - Required - The white-branding identifier for the user.
```

--------------------------------

### Market Scanner Subscription Improvement

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Market scanner subscriptions were improved in version 0.9.33.

```python
Market scanner subscription
```

--------------------------------

### Request Real-Time Bars

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Subscribes to real-time bar data for a given contract. This method is blocking.

```APIDOC
## POST /api/realTimeBars

### Description
Subscribes to real-time bar data for a specified contract. This method is blocking.

### Method
POST

### Endpoint
/api/realTimeBars

### Parameters
#### Path Parameters
None

#### Query Parameters
* **contract** (Contract) - Required - The contract of interest.
* **barSize** (int) - Required - The bar size in seconds. Must be 5.
* **whatToShow** (str) - Required - Specifies the source for constructing bars. Can be ‘TRADES’, ‘MIDPOINT’, ‘BID’ or ‘ASK’.
* **useRTH** (bool) - Required - If True, only show data from within Regular Trading Hours; if False, show all data.
* **realTimeBarsOptions** (list[TagValue]) - Optional - Unknown.

### Request Body
None

### Request Example
```json
{
  "contract": {"symbol": "IBM", "secType": "STK", "exchange": "SMART"},
  "barSize": 5,
  "whatToShow": "TRADES",
  "useRTH": true
}
```

### Response
#### Success Response (200)
- **RealTimeBarList** (list) - A list of real-time bar data.

#### Response Example
```json
[
  {
    "time": 1678886400000,
    "open": 130.50,
    "high": 130.75,
    "low": 130.25,
    "close": 130.60,
    "volume": 10000,
    "wap": 130.55,
    "count": 50
  }
]
```
```

--------------------------------

### Server Log Level

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Method to set the server log level.

```APIDOC
## Server Log Level

### setServerLogLevel

Set the server log level.

#### Parameters
- **logLevel** (int) - The desired log level.
```

--------------------------------

### Request Matching Symbols

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Requests a list of symbols that match a given pattern. Requires a request ID and the pattern.

```python
def reqMatchingSymbols(self, reqId, pattern):
        self.send(81, reqId, pattern)
```

--------------------------------

### Request Market Rule Async

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously retrieves details about a specific market rule by its ID. Returns a list of PriceIncrement objects or None.

```python
_async _reqMarketRuleAsync(_marketRuleId_)
```

--------------------------------

### Connection Management API

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Functions for establishing, maintaining, and closing connections to the TWS or IB Gateway.

```APIDOC
## Connection Management API

### Description
This section covers the core functions for managing your connection to the Interactive Brokers TWS or IB Gateway.

### `connect`

#### Description
Connect to a running TWS or IB gateway application. After the connection is made the client is fully synchronized and ready to serve requests. This method is blocking.

#### Method
`connect`

#### Parameters
- **host** (`str`) - Required - Host name or IP address.
- **port** (`int`) - Required - Port number.
- **clientId** (`int`) - Required - ID number to use for this client; must be unique per connection. Setting clientId=0 will automatically merge manual TWS trading with this client.
- **timeout** (`float`) - Optional - If establishing the connection takes longer than `timeout` seconds then the `asyncio.TimeoutError` exception is raised. Set to 0 to disable timeout.
- **readonly** (`bool`) - Optional - Set to `True` when API is in read-only mode.
- **account** (`str`) - Optional - Main account to receive updates for.
- **raiseSyncErrors** (`bool`) - Optional - When `True` this will cause an initial sync request error to raise a `ConnectionError`. When `False` the error will only be logged at error level.
- **fetchFields** (`StartupFetch`) - Optional - By default, all account data is loaded and cached when a new connection is made. You can optionally disable all or some of the account attribute fetching during a connection using the `StartupFetch` field flags. See `StartupFetch` in `ib.py` for member details. There is also `StartupFetchNONE` and `StartupFetchALL` as shorthand. Individual flag field members can be added or removed to the `fetchFields` parameter as needed.

### `disconnect`

#### Description
Disconnect from a TWS or IB gateway application. This will clear all session state.

#### Method
`disconnect`

#### Return Type
`str` | `None`

### `isConnected`

#### Description
Is there an API connection to TWS or IB gateway?

#### Method
`isConnected`

#### Return Type
`bool`
```

--------------------------------

### ContractDetails Object

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Provides detailed information about a financial contract.

```APIDOC
## ContractDetails Object

### Description
Represents detailed specifications and attributes of a financial contract.

### Fields
- `minSize` (float) - Minimum tradable size for the contract.
- `sizeIncrement` (float) - The increment by which the size can be adjusted.
- `suggestedSizeIncrement` (float) - Suggested size increment for trading.
- `cusip` (string) - CUSIP identifier for the contract.
- `ratings` (object) - Contains rating information for the contract.
- `descAppend` (string) - Additional descriptive information.
- `bondType` (string) - Type of bond (e.g., 'CORP', 'GOVT').
- `couponType` (string) - Type of coupon payment (e.g., 'FIXED', 'FLOAT').
- `callable` (bool) - Indicates if the bond is callable.
- `putable` (bool) - Indicates if the bond is puttable.
- `coupon` (float) - The coupon rate of the bond.
- `convertible` (bool) - Indicates if the bond is convertible.
- `maturity` (string) - Maturity date of the contract (YYYY-MM-DD).
- `issueDate` (string) - Issue date of the contract (YYYY-MM-DD).
- `nextOptionDate` (string) - Date of the next option (YYYY-MM-DD).
- `nextOptionType` (string) - Type of the next option.
- `nextOptionPartial` (string) - Details about partial option exercise.
- `notes` (string) - Additional notes about the contract.

### Methods
- `tradingSessions()` - Returns available trading sessions.
- `liquidSessions()` - Returns liquid trading sessions.
- `dict()` - Returns the contract details as a dictionary.
- `nonDefaults()` - Returns fields that are not set to their default values.
- `tuple()` - Returns the contract details as a tuple.
- `update()` - Updates the contract details.
```

--------------------------------

### OrderStateNumeric Type Helper

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/order.html

A type hint helper class for OrderState objects after conversion to numeric (float) types. Useful for static analysis with mypy.

```python
@dataclass
class OrderStateNumeric(OrderState):
    """Just a type helper for mypy to check against if you convert OrderState to .numeric().

    Usage:

    state_numeric: OrderStateNumeric = state.numeric(digits=2)"""

    initMarginBefore: float = float("nan")  # type: ignore
    maintMarginBefore: float = float("nan")  # type: ignore
    equityWithLoanBefore: float = float("nan")  # type: ignore
    initMarginChange: float = float("nan")  # type: ignore
    maintMarginChange: float = float("nan")  # type: ignore
    equityWithLoanChange: float = float("nan")  # type: ignore
    initMarginAfter: float = float("nan")  # type: ignore
    maintMarginAfter: float = float("nan")  # type: ignore
    equityWithLoanAfter: float = float("nan")  # type: ignore
```

--------------------------------

### Request Account Summary API

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Request account values for all accounts and keep them updated. Returns when account summary is filled. This method is blocking.

```APIDOC
## reqAccountSummary

### Description
Request account values for all accounts and keep them updated. Returns when account summary is filled.

This method is blocking.

### Method
GET

### Endpoint
/api/reqAccountSummary

### Parameters
None

### Request Example
```json
{
  "message": "Requesting account summary"
}
```

### Response
#### Success Response (200)
- **summary** (array) - A list of account summary objects.
  - **accountName** (string) - The name of the account.
  - **tag** (string) - The summary tag (e.g., "NetLiquidation").
  - **value** (string) - The value for the tag.

#### Response Example
```json
{
  "summary": [
    {
      "accountName": "DU12345",
      "tag": "NetLiquidation",
      "value": "150000.50"
    },
    {
      "accountName": "DU12345",
      "tag": "BuyingPower",
      "value": "50000.00"
    }
  ]
}
```
```

--------------------------------

### Fetch WSH Event Data Async

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Retrieves WSH event data based on specified filters. Ensure the WshEventData object is correctly configured.

```python
data = WshEventData(
    filter = '''{
      "country": "All",
      "watchlist": ["8314"],
      "limit_region": 10,
      "limit": 10,
      "wshe_ed": "true",
      "wshe_bod": "true"
    }''')
events = ib.getWshEventData(data)
print(events)
```

--------------------------------

### Subscribe to Market Scan Data

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Subscribes to real-time market scan data based on the provided subscription filters. This method is intended for ongoing subscriptions.

```python
def reqScannerSubscription(
        self,
        subscription: ScannerSubscription,
        scannerSubscriptionOptions: list[TagValue] = [],
        scannerSubscriptionFilterOptions: list[TagValue] = [],
    ) -> ScanDataList:
        """
        Subscribe to market scan data.
        
```

--------------------------------

### Subscribe to Live Market Data

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Subscribes to live market data for a given stock contract (AAPL) and prints the last traded price, bid, and ask for 30 seconds. Requires a market data subscription.

```python
from ib_async import *
import time

ib = IB()
ib.connect('127.0.0.1', 7497, clientId=1)

# Subscribe to live market data
contract = Stock('AAPL', 'SMART', 'USD')
ticker = ib.reqMktData(contract, '', False, False)

# Print live quotes for 30 seconds
for i in range(30):
    ib.sleep(1)  # Wait 1 second
    if ticker.last:
        print(f"AAPL: ${ticker.last} (bid: ${ticker.bid}, ask: ${ticker.ask})")

ib.disconnect()
```

--------------------------------

### Asynchronous Financial Data Request

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Fetches financial data asynchronously based on the specified data type.

```APIDOC
## POST /requestFAAsync

### Description
Fetches financial data asynchronously.

### Method
POST

### Endpoint
/requestFAAsync

### Parameters
#### Query Parameters
- **_faDataType_** (string) - Required - The type of financial data to retrieve.
```

--------------------------------

### Wait for Network Update

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Waits for any new update to arrive from the network. A loop using this should not harvest tick data due to potential missing ticks during simultaneous updates; use events instead.

```python
def waitOnUpdate(self, timeout: float = 0) -> bool:
        """
        Wait on any new update to arrive from the network.

        Args:
            timeout: Maximum time in seconds to wait.
                If 0 then no timeout is used.

        .. note::
            A loop with ``waitOnUpdate`` should not be used to harvest
            tick data from tickers, since some ticks can go missing.
            This happens when multiple updates occur almost simultaneously;
            The ticks from the first update are then cleared.
            Use events instead to prevent this.

        Returns:
            ``True`` if not timed-out, ``False`` otherwise.
        """
        if timeout:
            try:
                util.run(asyncio.wait_for(self.updateEvent, timeout))
            except asyncio.TimeoutError:
                return False
        else:
            util.run(self.updateEvent)

        return True
```

--------------------------------

### Request Positions Async

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously retrieves current position data.

```python
reqPositionsAsync()
```

--------------------------------

### Exercise Options

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Exercises options contracts. Requires contract details, action, quantity, account, and override flag.

```python
def exerciseOptions(
        self, reqId, contract, exerciseAction, exerciseQuantity, account, override
    ):
        self.send(
            21,
            2,
            reqId,
            contract.conId,
            contract.symbol,
            contract.secType,
            contract.lastTradeDateOrContractMonth,
            contract.strike,
            contract.right,
            contract.multiplier,
            contract.exchange,
            contract.currency,
            contract.localSymbol,
            contract.tradingClass,
            exerciseAction,
            exerciseQuantity,
            account,
            override,
        )
```

--------------------------------

### Historical Ticks and Realtime Bars Time in UTC

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Historical ticks and real-time bars now return timestamps in UTC.

```python
historical ticks
```

```python
realtime bars
```

--------------------------------

### Account Management - Managed Accounts

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Parses a comma-separated string of account IDs and stores them in the accounts list.

```python
def managedAccounts(self, accountsList: str):
        self.accounts = [a for a in accountsList.split(",") if a]
```

--------------------------------

### Fills and Executions Data Retrieval

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves lists of all fills and executions from the current session.

```APIDOC
## GET /fills

### Description
Retrieves a list of all fills from this session.

### Method
GET

### Endpoint
/fills

### Response
#### Success Response (200)
- **list[Fill]** - A list of Fill objects.
```

```APIDOC
## GET /executions

### Description
Retrieves a list of all executions from this session.

### Method
GET

### Endpoint
/executions

### Response
#### Success Response (200)
- **list[Execution]** - A list of Execution objects.
```

--------------------------------

### Handle Execution Fills

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Processes execution fills, adding them to trade logs and emitting events. Use when an execution is received.

```python
fill = Fill(contract, execution, CommissionReport(), time)
        if execId not in self.fills:
            # first time we see this execution so add it
            self.fills[execId] = fill
            if trade:
                trade.fills.append(fill)
                logEntry = TradeLogEntry(
                    time,
                    trade.orderStatus.status,
                    f"Fill {execution.shares}@{execution.price}",
                )
                trade.log.append(logEntry)
                if isLive:
                    self._logger.info(f"execDetails: {fill}")
                    self.ib.execDetailsEvent.emit(trade, fill)
                    trade.fillEvent(trade, fill)

        if not isLive:
            self._results[reqId].append(fill)
```

--------------------------------

### Handle Historical Ticks Bid/Ask

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Appends historical bid/ask ticks to the results for a given request ID. Use when retrieving historical bid/ask tick data.

```python
def historicalTicksBidAsk(
        self, reqId: int, ticks: list[HistoricalTickBidAsk], done: bool
    ):
        result = self._results.get(reqId)
        if result is not None:
            result += ticks

        if done:
            self._endReq(reqId)
```

--------------------------------

### Asynchronous Connection and Data Handling

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ibcontroller.html

Manages the asynchronous connection to Interactive Brokers, handles various events like timeouts, errors, and disconnections, and periodically probes the connection with historical data requests. Includes retry logic on failure.

```python
async def runAsync(self):
        def onTimeout(idlePeriod):
            if not waiter.done():
                waiter.set_result(None)

        def onError(reqId, errorCode, errorString, contract):
            if errorCode in {100, 1100} and not waiter.done():
                waiter.set_exception(Warning(f"Error {errorCode}"))

        def onDisconnected():
            if not waiter.done():
                waiter.set_exception(Warning("Disconnected"))

        while self._runner:
            try:
                await self.controller.startAsync()
                await asyncio.sleep(self.appStartupTime)
                await self.ib.connectAsync(
                    self.host,
                    self.port,
                    self.clientId,
                    self.connectTimeout,
                    self.readonly,
                    self.account,
                    self.raiseSyncErrors,
                )
                self.startedEvent.emit(self)
                self.ib.setTimeout(self.appTimeout)
                self.ib.timeoutEvent += onTimeout
                self.ib.errorEvent += onError
                self.ib.disconnectedEvent += onDisconnected

                while self._runner:
                    waiter: asyncio.Future = asyncio.Future()
                    await waiter
                    # soft timeout, probe the app with a historical request
                    self._logger.debug("Soft timeout")
                    self.softTimeoutEvent.emit(self)
                    probe = self.ib.reqHistoricalDataAsync(
                        self.probeContract, "", "30 S", "5 secs", "MIDPOINT", False
                    )
                    bars = None
                    with suppress(asyncio.TimeoutError):
                        bars = await asyncio.wait_for(probe, self.probeTimeout)
                    if not bars:
                        self.hardTimeoutEvent.emit(self)
                        raise Warning("Hard timeout")
                    self.ib.setTimeout(self.appTimeout)

            except ConnectionRefusedError:
                pass
            except Warning as w:
                self._logger.warning(w)
            except Exception as e:
                self._logger.exception(e)
            finally:
                self.ib.timeoutEvent -= onTimeout
                self.ib.errorEvent -= onError
                self.ib.disconnectedEvent -= onDisconnected
                await self.controller.terminateAsync()
                self.stoppedEvent.emit(self)
                if self._runner:
                    await asyncio.sleep(self.retryDelay)
```

--------------------------------

### schedule

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Schedules a callback function to be executed at a specific time with given arguments. Returns an Event Handle.

```APIDOC
## schedule

### Description
Schedules the callback to be run at the given time with the given arguments. This will return the Event Handle.

### Method
`schedule`

### Parameters
#### Arguments
- **time** (Time_t) - Required - Time to run callback. If given as `datetime.time` then use today as date.
- **callback** (Callable) - Required - Callable scheduled to run.
- **args** - Required - Arguments for to call callback with.

### Response Example
```json
{
  "event_handle": "<Event Handle>"
}
```
```

--------------------------------

### reqFundamentalDataAsync

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously requests fundamental data for a contract.

```APIDOC
## POST /api/fundamentalData

### Description
Asynchronously requests fundamental data for a contract.

### Method
POST

### Endpoint
/api/fundamentalData

### Parameters
#### Query Parameters
- **contract** (Contract) - Required - The contract for which to fetch fundamental data.
- **reportType** (str) - Required - The type of fundamental data report (e.g., "ReportsFinSummary", "ReportsConsolidated").
- **fundamentalDataOptions** (list[TagValue]) - Optional - Options for fundamental data requests.

### Request Example
```json
{
  "contract": {"symbol": "AAPL", "secType": "STK", "exchange": "SMART", "currency": "USD"},
  "reportType": "ReportsFinSummary",
  "fundamentalDataOptions": []
}
```

### Response
#### Success Response (200)
- **Awaitable[str]** - An awaitable object that resolves to the fundamental data as a string.

#### Response Example
```json
"<fundamentalData>...</fundamentalData>"
```
```

--------------------------------

### Dataclass Utilities

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Utilities for working with dataclass objects.

```APIDOC
## ib_async.util.dataclassAsDict

### Description
Return dataclass values as `dict`. This is a non-recursive variant of `dataclasses.asdict`.

### Method
N/A

### Endpoint
N/A

### Response
#### Success Response (200)
- **dict** (dict) - Dictionary representation of the dataclass.
```

```APIDOC
## ib_async.util.dataclassAsTuple

### Description
Return dataclass values as `tuple`. This is a non-recursive variant of `dataclasses.astuple`.

### Method
N/A

### Endpoint
N/A

### Response
#### Success Response (200)
- **tuple** (tuple[Any, ...]) - Tuple representation of the dataclass.
```

```APIDOC
## ib_async.util.dataclassNonDefaults

### Description
For a `dataclass` instance get the fields that are different from the default values and return as `dict`.

### Method
N/A

### Endpoint
N/A

### Response
#### Success Response (200)
- **dict** (dict[str, Any]) - Dictionary of fields with non-default values.
```

```APIDOC
## ib_async.util.dataclassUpdate

### Description
Update fields of the given `dataclass` object from zero or more `dataclass` source objects and/or from keyword arguments.

### Method
N/A

### Endpoint
N/A

### Response
#### Success Response (200)
- **object** (object) - The updated dataclass object.
```

```APIDOC
## ib_async.util.dataclassRepr

### Description
Provide a culled representation of the given `dataclass` instance, showing only the fields with a non-default value.

### Method
N/A

### Endpoint
N/A

### Response
#### Success Response (200)
- **str** (str) - A string representation of the dataclass with non-default fields.
```

--------------------------------

### FlexReport Class

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/flexreport.html

The FlexReport class provides methods to download, load, save, and extract data from Interactive Brokers' Flex Web Service reports.

```APIDOC
## Class: FlexReport

### Description
Provides access to account statement webservice for downloading and processing financial reports.

### Initialization
- `__init__(self, token=None, queryId=None, path=None)`: Initializes the FlexReport. Downloads a report if `token` and `queryId` are provided, or loads from a file if `path` is provided.

### Methods
- `topics(self)`: Returns a set of topics (XML tags with attributes) available in the report.
- `extract(self, topic: str, parseNumbers=True)`: Extracts items of a given `topic` and returns them as a list of objects. `parseNumbers` attempts to convert values to float or int.
- `df(self, topic: str, parseNumbers=True)`: Similar to `extract`, but returns the result as a pandas DataFrame.
- `get_url(self)`: Generates the base URL for the Flex Web Service, using the `IB_FLEXREPORT_URL` environment variable if set, otherwise using the default URL.
- `download(self, token, queryId)`: Downloads a report using the provided `token` and `queryId`. It handles the asynchronous nature of report generation and retries until the report is ready.
- `load(self, path)`: Loads report data from an XML file at the specified `path`.
- `save(self, path)`: Saves the current report data to an XML file at the specified `path`.

### Error Handling
- `FlexError`: Custom exception raised for errors during download or processing.
```

--------------------------------

### Process Ticks for VolumeBars

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ticker.html

Processes incoming ticks to form bars. A new bar is created when the volume reaches the specified limit, or an existing bar is updated. Emits an update event when a bar is completed.

```python
    def on_source(self, time, price, size):
        if not self.bars or self.bars[-1].volume >= self._volume:
            bar = Bar(time, price, price, price, price, size, 1)
            self.bars.append(bar)
        else:
            bar = self.bars[-1]
            bar.high = max(bar.high, price)
            bar.low = min(bar.low, price)
            bar.close = price
            bar.volume += size
            bar.count += 1
        if bar.volume >= self._volume:
            self.bars.updateEvent.emit(self.bars, True)
            self.emit(self.bars)
```

--------------------------------

### Request Scanner Subscription

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Subscribes to real-time market scanner results. Requires a request ID, subscription details, and optional filter/options.

```python
def reqScannerSubscription(
        self,
        reqId,
        subscription,
        scannerSubscriptionOptions,
        scannerSubscriptionFilterOptions,
    ):
        sub = subscription
        self.send(
            22,
            reqId,
            sub.numberOfRows,
            sub.instrument,
            sub.locationCode,
            sub.scanCode,
            sub.abovePrice,
            sub.belowPrice,
            sub.aboveVolume,
            sub.marketCapAbove,
            sub.marketCapBelow,
            sub.moodyRatingAbove,
            sub.moodyRatingBelow,
            sub.spRatingAbove,
            sub.spRatingBelow,
            sub.maturityDateAbove,
            sub.maturityDateBelow,
            sub.couponRateAbove,
            sub.couponRateBelow,
            sub.excludeConvertible,
            sub.averageOptionVolumeAbove,
            sub.scannerSettingPairs,
            sub.stockTypeFilter,
            scannerSubscriptionFilterOptions,
            scannerSubscriptionOptions,
        )
```

--------------------------------

### User Info

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Requests user information.

```APIDOC
## POST /api/userInfo

### Description
Requests information about the currently logged-in user.

### Method
POST

### Endpoint
/api/userInfo

### Parameters
#### Request Body
- **reqId** (int) - Required - Unique request identifier.

### Request Example
```json
{
  "reqId": 9
}
```

### Response
#### Success Response (200)
- **userInfo** (dict) - Dictionary containing user information.
  - **userId** (int) - The user's unique identifier.
  - **userName** (str) - The user's name.
  - **ldots** (str) - Additional user details.

#### Response Example
```json
{
  "userInfo": {
    "userId": 12345,
    "userName": "JohnDoe",
    "ldots": "Additional user info"
  }
}
```
```

--------------------------------

### Asynchronous Fundamental Data and Scanner Operations

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Functions for retrieving fundamental data, scanner parameters, and running scanner queries asynchronously.

```APIDOC
## reqFundamentalDataAsync

### Description
Retrieves fundamental data for a contract asynchronously.

### Method
ASYNC

### Endpoint
N/A (Client-side function)

### Parameters
- **_contract** (Contract) - The contract.
- **_reportType** (str) - The type of report (e.g., "Financials", "Ownership").
- **_fundamentalDataOptions** (list) - Optional - Options for fundamental data.

### Response
#### Return Type
Awaitable[str]

### Response Example
```python
"<fundamentalData>...</fundamentalData>"
```

## reqScannerParametersAsync

### Description
Retrieves the available scanner parameters asynchronously.

### Method
ASYNC

### Endpoint
N/A (Client-side function)

### Response
#### Return Type
Awaitable[str]

### Response Example
```python
"<scannerParameters>...</scannerParameters>"
```

## _async _reqScannerDataAsync

### Description
Executes a scanner query and returns the results asynchronously.

### Method
ASYNC

### Endpoint
N/A (Client-side function)

### Parameters
- **_subscription** (ScannerSubscription) - The scanner subscription parameters.
- **_scannerSubscriptionOptions** (list) - Optional - Options for the scanner subscription.
- **_scannerSubscriptionFilterOptions** (list) - Optional - Filter options for the scanner results.

### Response
#### Return Type
ScanDataList

### Response Example
```python
ScanDataList([ScanData(rank=1, contractDetails=ContractDetails(...), ...), ...])
```
```

--------------------------------

### Subscribe to Group Events

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Subscribes to real-time events for a specific display group. Requires a request ID and group ID.

```python
def subscribeToGroupEvents(self, reqId, groupId):
        self.send(68, 1, reqId, groupId)
```

--------------------------------

### Contract Base Classes

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Base classes for different contract types.

```APIDOC
## Contract Base Classes

### Fund Contract
```python
class Fund(Contract):
    def __init__(self, **kwargs):
        """Mutual fund."""
        Contract.__init__(self, "FUND", **kwargs)
```

### Warrant Contract
```python
class Warrant(Contract):
    def __init__(self, **kwargs):
        """Warrant option."""
        Contract.__init__(self, "WAR", **kwargs)
```

### Bag Contract
```python
class Bag(Contract):
    def __init__(self, **kwargs):
        """Bag contract."""
        Contract.__init__(self, "BAG", **kwargs)
```

### Crypto Contract
```python
class Crypto(Contract):
    def __init__(self,
        symbol: str = "", exchange: str = "", currency: str = "", **kwargs
    ):
        """
        Crypto currency contract.

        Args:
            symbol: Symbol name.
            exchange: Destination exchange.
            currency: Underlying currency.
        """
        Contract.__init__(
            self,
            secType="CRYPTO",
            symbol=symbol,
            exchange=exchange,
            currency=currency,
            **kwargs,
        )
```
```

--------------------------------

### Process Ticker for Midpoints

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ticker.html

Processes ticker data to emit midpoint ticks. Emits the time, midpoint price, and a size of 0 if ticks are present.

```python
def on_source(self, ticker):
        if ticker.ticks:
            self.emit(ticker.time, ticker.midpoint(), 0)
```

--------------------------------

### Request Smart Components

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Obtains a mapping from single-letter codes to exchange names.

```APIDOC
## Request Smart Components

### Description
Obtain mapping from single letter codes to exchange names. Note: The exchanges must be open when using this request, otherwise an empty list is returned.

### Method
GET

### Endpoint
`/reqSmartComponents`

### Parameters
#### Query Parameters
- **bboExchange** (str) - Required - The BBO exchange code.
```

--------------------------------

### Asynchronous Option Computation

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Functions for calculating implied volatility and option prices asynchronously.

```APIDOC
## _async _calculateImpliedVolatilityAsync

### Description
Calculates the implied volatility for an option contract asynchronously.

### Method
ASYNC

### Endpoint
N/A (Client-side function)

### Parameters
- **_contract** (Contract) - The option contract.
- **_optionPrice** (float) - The current market price of the option.
- **_underPrice** (float) - The current market price of the underlying asset.
- **_implVolOptions** (list) - Optional - Options for implied volatility calculation.

### Response
#### Return Type
OptionComputation | None

### Response Example
```python
OptionComputation(impliedVolatility=0.25, ...)
```

## _async _calculateOptionPriceAsync

### Description
Calculates the theoretical price of an option contract asynchronously.

### Method
ASYNC

### Endpoint
N/A (Client-side function)

### Parameters
- **_contract** (Contract) - The option contract.
- **_volatility** (float) - The implied volatility to use for pricing.
- **_underPrice** (float) - The current market price of the underlying asset.
- **_optPrcOptions** (list) - Optional - Options for option price calculation.

### Response
#### Return Type
OptionComputation | None

### Response Example
```python
OptionComputation(optionPrice=5.50, ...)
```
```

--------------------------------

### Account Summary

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves a summary of account values, optionally filtered by account name. This method is blocking on the first run.

```APIDOC
## accountSummary

### Description
List of account values for the given account, or of all accounts if account is left blank.

### Method
`accountSummary(account: str = "") -> list[AccountValue]`

### Parameters
#### Arguments
- **account** (str) - Optional - If specified, filter for this account name.

### Returns
- **list[AccountValue]** - A list of AccountValue objects.

### Notes
This method is blocking on first run, non-blocking after that.
```

--------------------------------

### Options Chain API

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

API to retrieve option chain details for a given underlying asset.

```APIDOC
## GET /api/options/chain

### Description
Retrieves the option chain for a specified underlying security.

### Method
GET

### Endpoint
/api/options/chain

### Parameters
#### Query Parameters
- **underlyingSymbol** (string) - Required - The symbol of the underlying asset.
- **futFopExchange** (string) - Optional - The exchange, required only for Futures Options.
- **underlyingSecType** (string) - Required - The security type of the underlying (e.g., 'STK', 'FUT').
- **underlyingConId** (integer) - Required - The contract ID of the underlying asset.

### Response
#### Success Response (200)
- **optionChains** (array) - A list of option chain objects.
  - **exchange** (string) - The exchange where the option is traded.
  - **symbol** (string) - The option symbol.
  - **conId** (integer) - The contract ID of the option.
  - **strike** (float) - The strike price of the option.
  - **lastTradeDateOrContractMonth** (string) - The expiration date or contract month.
  - **right** (string) - The type of option ('Call' or 'Put').

#### Response Example
```json
{
  "optionChains": [
    {
      "exchange": "SMART",
      "symbol": "AAPL240621C00170000",
      "conId": 12345678,
      "strike": 170.0,
      "lastTradeDateOrContractMonth": "20240621",
      "right": "Call"
    },
    {
      "exchange": "SMART",
      "symbol": "AAPL240621P00170000",
      "conId": 87654321,
      "strike": 170.0,
      "lastTradeDateOrContractMonth": "20240621",
      "right": "Put"
    }
  ]
}
```
```

--------------------------------

### Realtime Bars and News Data Retrieval

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves lists of real-time bars, news ticks, and news bulletins.

```APIDOC
## GET /realtimeBars

### Description
Get a list of all live updated bars. These can be 5 second realtime bars or live updated historical bars.

### Method
GET

### Endpoint
/realtimeBars

### Response
#### Success Response (200)
- **list[BarDataList | RealTimeBarList]** - A list of real-time bar data.
```

```APIDOC
## GET /newsTicks

### Description
List of ticks with headline news. The article itself can be retrieved with reqNewsArticle.

### Method
GET

### Endpoint
/newsTicks

### Response
#### Success Response (200)
- **list[NewsTick]** - A list of NewsTick objects.
```

```APIDOC
## GET /newsBulletins

### Description
List of IB news bulletins.

### Method
GET

### Endpoint
/newsBulletins

### Response
#### Success Response (200)
- **list[NewsBulletin]** - A list of NewsBulletin objects.
```

--------------------------------

### Load Flex Report from XML

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/flexreport.html

Load a Flex report from an XML file. This method reads the file content and parses it into an ElementTree object for further processing.

```python
with open(path, "rb") as f:
            self.data = f.read()
            self.root = et.fromstring(self.data)
```

--------------------------------

### Request Historical News Async

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously requests historical news articles for a given contract ID within a specified date range and provider codes. Includes a timeout and error handling. Requires `asyncio`.

```python
async def reqHistoricalNewsAsync(
        self,
        conId: int,
        providerCodes: str,
        startDateTime: str | datetime.date,
        endDateTime: str | datetime.date,
        totalResults: int,
        historicalNewsOptions: list[TagValue] = [],
    ) -> HistoricalNews | None:
        reqId = self.client.getReqId()

        future = self.wrapper.startReq(reqId)
        start = util.formatIBDatetime(startDateTime)
        end = util.formatIBDatetime(endDateTime)
        self.client.reqHistoricalNews(
            reqId, conId, providerCodes, start, end, totalResults, historicalNewsOptions
        )
        try:
            await asyncio.wait_for(future, 4)
            return future.result()
        except asyncio.TimeoutError:
            self._logger.error("reqHistoricalNewsAsync: Timeout")
            return None
```

--------------------------------

### Calculate Option Price Async

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously calculates the price of an option. This method incorporates a timeout and ensures the request is cancelled. Requires `asyncio`.

```python
async def calculateOptionPriceAsync(
        self,
        contract: Contract,
        volatility: float,
        underPrice: float,
        optPrcOptions: list[TagValue] = [],
    ) -> OptionComputation | None:
        reqId = self.client.getReqId()
        future = self.wrapper.startReq(reqId, contract)
        self.client.calculateOptionPrice(
            reqId, contract, volatility, underPrice, optPrcOptions
        )
        try:
            await asyncio.wait_for(future, 4)
            return future.result()
        except asyncio.TimeoutError:
            self._logger.error("calculateOptionPriceAsync: Timeout")
            return None
        finally:
            self.client.cancelCalculateOptionPrice(reqId)
```

--------------------------------

### Option Exercise API

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

API for exercising or letting options contracts lapse.

```APIDOC
## POST /api/options/exercise

### Description
Executes an action on an options contract, either exercising it or letting it lapse.

### Method
POST

### Endpoint
/api/options/exercise

### Parameters
#### Request Body
- **contract** (object) - Required - The option contract to be exercised.
- **exerciseAction** (integer) - Required - Action to perform: 1 for exercise, 2 for lapse.
- **exerciseQuantity** (integer) - Required - The number of contracts to exercise.
- **account** (string) - Required - The destination account for the action.
- **override** (integer) - Required - Override flag: 0 for no override, 1 for override.

### Request Example
```json
{
  "contract": {
    "symbol": "AAPL",
    "secType": "OPT",
    "exchange": "SMART",
    "lastTradeDateOrContractMonth": "20240621",
    "right": "C",
    "strike": 170.0,
    "conId": 12345678
  },
  "exerciseAction": 1,
  "exerciseQuantity": 10,
  "account": "DU1234567",
  "override": 0
}
```

### Response
#### Success Response (200)
- **message** (string) - Confirmation of the exercise request.

#### Response Example
```json
{
  "message": "Option exercise request submitted successfully."
}
```
```

--------------------------------

### reqMktDepthExchangesAsync

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously requests a list of exchanges available for market depth data.

```APIDOC
## GET /api/marketDepthExchanges

### Description
Asynchronously requests a list of exchanges available for market depth data.

### Method
GET

### Endpoint
/api/marketDepthExchanges

### Parameters
None

### Request Example
```json
{}
```

### Response
#### Success Response (200)
- **list[DepthMktDataDescription]** - A list of available market depth data descriptions.

#### Response Example
```json
[
  {"exchange": "SMART", "symbol": "AAPL", "secType": "STK"},
  {"exchange": "NASDAQ", "symbol": "AAPL", "secType": "STK"}
]
```
```

--------------------------------

### Profit and Loss (PnL)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Lists subscribed PnL objects, optionally filtered by account and model code.

```APIDOC
## pnl

### Description
List of subscribed :class:`.PnL` objects (profit and loss), optionally filtered by account and/or modelCode.

### Method
`pnl(account="", modelCode="") -> list[PnL]`

### Parameters
#### Arguments
- **account** (str) - Optional - Filter by account name.
- **modelCode** (str) - Optional - Filter by model code.

### Returns
- **list[PnL]** - A list of PnL objects.
```

--------------------------------

### Place Order

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Places a new order or modifies an existing order. Returns a Trade object that is updated with status changes and fills.

```APIDOC
## Place Order

### Description
Places a new order or modifies an existing order. Returns a Trade object that is kept live and updated with status changes, fills, etc.

### Method
`placeOrder`

### Parameters
- **contract** (Contract) - Required - The contract to use for the order.
- **order** (Order) - Required - The order to be placed or modified.

### Request Example
```python
# Assuming 'contract' and 'order' are defined and 'ib' is an initialized IB client instance
# trade = ib.placeOrder(contract, order)
# print(f"Order placed with ID: {trade.orderStatus.orderId}")
```

### Response
- **Trade** - A Trade object representing the placed or modified order, including its status and contract details.
```

--------------------------------

### Profit and Loss (PnL) Subscription

Source: https://ib-api-reloaded.github.io/ib_async/api.html

APIs for subscribing to and cancelling PnL updates.

```APIDOC
## POST /api/pnl/subscribe

### Description
Start a subscription for profit and loss events. Returns a `PnL` object that is kept live updated. The result can also be queried from `pnl()`.

### Method
POST

### Endpoint
/api/pnl/subscribe

### Parameters
#### Request Body
- **account** (str) - Required - Subscribe to this account.
- **modelCode** (str) - Optional - If specified, filter for this account model.

### Request Example
```json
{
  "account": "DU1234567",
  "modelCode": "MODEL1"
}
```

### Response
#### Success Response (200)
- **pnlData** (PnL) - The PnL object with live updated data.

#### Response Example
```json
{
  "pnlData": {
    "unrealizedPnL": 150.75,
    "realizedPnL": 50.00
  }
}
```
```

```APIDOC
## DELETE /api/pnl/cancel

### Description
Cancel PnL subscription.

### Method
DELETE

### Endpoint
/api/pnl/cancel

### Parameters
#### Request Body
- **account** (str) - Required - Cancel for this account.
- **modelCode** (str) - Optional - If specified, cancel for this account model.

### Request Example
```json
{
  "account": "DU1234567",
  "modelCode": "MODEL1"
}
```

### Response
#### Success Response (200)
- **message** (string) - Confirmation message.

#### Response Example
```json
{
  "message": "PnL subscription cancelled."
}
```
```

--------------------------------

### Request Positions

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously retrieves a list of current positions held in the account.

```APIDOC
## GET /api/positions

### Description
Fetches a list of all open positions currently held across all accounts.

### Method
GET

### Endpoint
/api/positions

### Response
#### Success Response (200)
- **future** (Awaitable[list[Position]]) - An awaitable object that resolves to a list of Position objects.

#### Response Example
```json
{
  "future": "<awaitable_list_of_positions>"
}
```
```

--------------------------------

### Order Key Generation

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Generates a unique key for orders based on client ID, order ID, and permanent ID.

```APIDOC
## Order Key Generation

### Description
Generates a unique key for orders based on client ID, order ID, and permanent ID.

### Method
`orderKey`

### Endpoint
N/A (Internal Class Method)

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Request Example
None

### Response
#### Success Response (200)
- **key** (OrderKeyType) - The generated order key.

#### Response Example
```json
{
  "key": "(clientId, orderId)" 
}
```
```

--------------------------------

### StopLimitOrder

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents a stop-limit order with specified limit and stop prices.

```APIDOC
## StopLimitOrder

### Description
Represents a stop-limit order with specified limit and stop prices.

### Class Definition
```python
class StopLimitOrder(_action: str, _totalQuantity: float, _lmtPrice: float, _stopPrice: float, **kwargs)
```

### Methods
- `dict()`: Returns dataclass values as a dictionary.
- `nonDefaults()`: Returns fields that differ from default values as a dictionary.
- `tuple()`: Returns dataclass values as a tuple.
- `update(**kwargs)`: Updates fields of the object from keyword arguments.
```

--------------------------------

### Real-Time Bars API

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Endpoint for requesting real-time 5-second bars.

```APIDOC
## GET /api/marketdata/realtimebars

### Description
Request realtime 5 second bars.

### Method
GET

### Endpoint
/api/marketdata/realtimebars

### Parameters
#### Query Parameters
- **contract** (Contract) - Required - The contract to get real-time bars for.
- **barSize** (int) - Required - The size of the bars in seconds (must be 5 for real-time).
- **whatToShow** (str) - Required - Specifies the data to be returned (e.g., "TRADES", "MIDPOINT", "BID_ASK", "HISTORICAL_VOLATILITY", "OPTION_IMPLIED_VOLATILITY").
- **useRTH** (bool) - Required - Specifies whether to use regular trading hours only.
- **realTimeBarsOptions** (list[str]) - Optional - Additional options for real-time bars.

### Response
#### Success Response (200)
- **bars** (list[Bar]) - A list of real-time bars.

#### Response Example
```json
{
  "bars": [
    {
      "time": "2023-10-27 10:00:00",
      "open": 175.00,
      "high": 175.50,
      "low": 174.80,
      "close": 175.20,
      "volume": 100000,
      "count": 500,
      "wap": 175.10,
      "hasGaps": false
    }
  ]
}
```
```

--------------------------------

### Dataclass Utilities

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Provides methods for converting dataclass instances to dictionaries and tuples, and for updating dataclass objects.

```APIDOC
## Dataclass Utilities

### Description
Provides methods for converting dataclass instances to dictionaries and tuples, and for updating dataclass objects.

### Methods

#### `dict()`

##### Description
Return dataclass values as `dict`. This is a non-recursive variant of `dataclasses.asdict`.

##### Return Type
`dict`

#### `nonDefaults()`

##### Description
For a `dataclass` instance get the fields that are different from the default values and return as `dict`.

##### Return Type
`dict`[`str`, `Any`]

#### `tuple()`

##### Description
Return dataclass values as `tuple`. This is a non-recursive variant of `dataclasses.astuple`.

##### Return Type
`tuple`[`Any`, `...`]

#### `update(_* srcObjs_, _** kwargs_)`

##### Description
Update fields of the given `dataclass` object from zero or more `dataclass` source objects and/or from keyword arguments.

##### Return Type
`object`
```

--------------------------------

### Set asyncio event loop for Windows

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ibcontroller.html

On Windows, the proactor event loop must be set for IBC to function correctly. This is typically done at the beginning of your script.

```python
import asyncio
asyncio.set_event_loop(asyncio.ProactorEventLoop())
```

--------------------------------

### VolumeBars Object Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Methods for the VolumeBars object, used for accessing volume-based bar data.

```APIDOC
## VolumeBars Object Methods

### Description
Provides access to a collection of volume-based bars and a method to filter them by source.

### Properties
- `VolumeBars.bars`: A list of Bar objects.

### Methods
- `VolumeBars.on_source()`: Filters volumebars based on the source.
```

--------------------------------

### Security Definition Option Parameter

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Receives security definition option parameters, including exchange, underlying contract ID, trading class, multiplier, expirations, and strikes.

```APIDOC
## POST /api/security/option_parameters

### Description
Receives security definition option parameters, including exchange, underlying contract ID, trading class, multiplier, expirations, and strikes.

### Method
POST

### Endpoint
/api/security/option_parameters

### Parameters
#### Query Parameters
- **reqId** (integer) - Required - The request ID for the security definition.

#### Request Body
- **exchange** (string) - Required - The exchange where the option is traded.
- **underlyingConId** (integer) - Required - The contract ID of the underlying asset.
- **tradingClass** (string) - Required - The trading class of the option.
- **multiplier** (string) - Required - The contract multiplier.
- **expirations** (array of strings) - Required - A list of expiration dates.
- **strikes** (array of floats) - Required - A list of strike prices.

### Request Example
```json
{
  "reqId": 112,
  "exchange": "SMART",
  "underlyingConId": 12345,
  "tradingClass": "XYZ",
  "multiplier": "100",
  "expirations": ["20231117", "20231215"],
  "strikes": [100.0, 105.0, 110.0]
}
```

### Response
#### Success Response (200)
- **status** (string) - Indicates the success of the operation.

#### Response Example
```json
{
  "status": "success"
}
```
```

--------------------------------

### Option Computation API

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

APIs for calculating implied volatility and option prices.

```APIDOC
## POST /api/options/implied-volatility

### Description
Calculates the implied volatility of an option given its price and the underlying asset's price.

### Method
POST

### Endpoint
/api/options/implied-volatility

### Parameters
#### Request Body
- **contract** (object) - Required - The option contract details.
- **optionPrice** (float) - Required - The current market price of the option.
- **underPrice** (float) - Required - The current market price of the underlying asset.
- **implVolOptions** (array) - Optional - Additional options for the calculation.

### Request Example
```json
{
  "contract": {
    "symbol": "AAPL",
    "secType": "OPT",
    "exchange": "SMART",
    "lastTradeDateOrContractMonth": "20240621",
    "right": "C",
    "strike": 170.0
  },
  "optionPrice": 2.50,
  "underPrice": 172.0,
  "implVolOptions": [
    {"tag": 10, "value": "1"} 
  ]
}
```

### Response
#### Success Response (200)
- **impliedVolatility** (float) - The calculated implied volatility.
- **discrepancy** (float) - The difference between the model price and the option price.
- **modelPrice** (float) - The theoretical option price calculated by the model.

#### Response Example
```json
{
  "impliedVolatility": 0.15,
  "discrepancy": 0.01,
  "modelPrice": 2.49
}
```
```

```APIDOC
## POST /api/options/option-price

### Description
Calculates the theoretical price of an option given its volatility and the underlying asset's price.

### Method
POST

### Endpoint
/api/options/option-price

### Parameters
#### Request Body
- **contract** (object) - Required - The option contract details.
- **volatility** (float) - Required - The implied volatility to use for the calculation.
- **underPrice** (float) - Required - The current market price of the underlying asset.
- **optPrcOptions** (array) - Optional - Additional options for the calculation.

### Request Example
```json
{
  "contract": {
    "symbol": "AAPL",
    "secType": "OPT",
    "exchange": "SMART",
    "lastTradeDateOrContractMonth": "20240621",
    "right": "C",
    "strike": 170.0
  },
  "volatility": 0.15,
  "underPrice": 172.0,
  "optPrcOptions": []
}
```

### Response
#### Success Response (200)
- **modelPrice** (float) - The calculated theoretical option price.
- **discrepancy** (float) - The difference between the model price and the market price (if available).

#### Response Example
```json
{
  "modelPrice": 2.49,
  "discrepancy": 0.01
}
```
```

--------------------------------

### Request and ID Management

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Methods for managing request IDs and server status.

```APIDOC
## Request and ID Management

### serverVersion

Get the current server version.

Return type:
    int

### getReqId

Get a new request ID.

Return type:
    int

### updateReqId

Update the next reqId to be at least `minReqId`.

#### Parameters
- **minReqId** (int) - The minimum request ID to set.
```

--------------------------------

### PyGame Integration for Real-time Data

Source: https://ib-api-reloaded.github.io/ib_async/recipes.html

Integrates IB-insync with PyGame by periodically calling `ib.sleep` within the PyGame event loop to update market data and maintain responsiveness.

```python
import ib_async as ibi
import pygame


def onTicker(ticker):
    screen.fill(bg_color)
    text = f'bid: {ticker.bid}   ask: {ticker.ask}'
    quote = font.render(text, True, fg_color)
    screen.blit(quote, (40, 40))
    pygame.display.flip()


pygame.init()
screen = pygame.display.set_mode((800, 600))
font = pygame.font.SysFont('arial', 48)
bg_color = (255, 255, 255)
fg_color = (0, 0, 0)

ib = ibi.IB()
ib.connect()
contract = ibi.Forex('EURUSD')
ticker = ib.reqMktData(contract)
ticker.updateEvent += onTicker

running = True
while running:
    # This updates IB-insync:
    ib.sleep(0.03)

    # This updates PyGame:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
            pygame.quit()


```

--------------------------------

### Handle IB API Validation Warning

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Logs a validation warning for a live trade, updates its order status, and emits relevant events. Use when an order has validation issues but is still active.

```python
if trade:
                status = trade.orderStatus.status = OrderStatus.ValidationError
                logEntry = TradeLogEntry(self.lastTime, status, msg, errorCode)
                trade.log.append(logEntry)
                self._logger.warning(f"IBKR API validation warning: {trade}")
                self.ib.orderStatusEvent.emit(trade)
                trade.statusEvent.emit(trade)
            else:
                # else, this is a non-trade-related warning message
                self._logger.info(msg)
```

--------------------------------

### Synchronous vs. Asynchronous Data Request

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Illustrates the difference between synchronous and asynchronous methods for requesting historical data. The synchronous method blocks until completion, while the asynchronous method yields to the event loop.

```python
# Synchronous (blocks until complete)
bars = ib.reqHistoricalData(contract, ...)

# Asynchronous (yields to event loop)
bars = await ib.reqHistoricalDataAsync(contract, ...)
```

--------------------------------

### barUpdate Event for reqRealTimeBars

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

The `barUpdate` event is now used for `reqRealTimeBars` responses. `reqRealTimeBars` will return `RealTimeBarList` instead of a list.

```python
barUpdate event
```

```python
reqRealTimeBars
```

```python
RealTimeBarList
```

--------------------------------

### Request Market Rule

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Introduces the `reqMarketRule` function for requesting market rule information.

```python
ib.reqMarketRule()
```

--------------------------------

### Request Head Timestamp Async

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously retrieves the timestamp of the first available data point for a contract, based on specified data type and trading hours.

```python
_async _reqHeadTimeStampAsync(_contract_ , _whatToShow_ , _useRTH_ , _formatDate_)
```

--------------------------------

### Request Historical Data Async

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously retrieves historical market data for a contract. Allows specifying date/time ranges, bar size, and data type.

```python
_async _reqHistoricalDataAsync(_contract_ , _endDateTime_ , _durationStr_ , _barSizeSetting_ , _whatToShow_ , _useRTH_ , _formatDate =1_, _keepUpToDate =False_, _chartOptions =[]_, _timeout =60_)
```

--------------------------------

### Time Code Execution

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

A context manager for timing code blocks. Prints the execution time with SI prefix formatting upon exiting the block.

```python
import time

class timeit:
    """Context manager for timing."""

    def __init__(self, title="Run"):
        self.title = title

    def __enter__(self):
        self.t0 = time.time()

    def __exit__(self, *_args):
        print(self.title + " took " + formatSI(time.time() - self.t0) + "s")
```

--------------------------------

### Calculate Option Price Async

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously calculates the price of an option based on volatility and underlying price.

```APIDOC
## POST /api/calculateOptionPrice

### Description
Asynchronously calculates the theoretical price of an option given its volatility, the underlying asset's price, and contract details. Includes a timeout for the operation.

### Method
POST

### Endpoint
/api/calculateOptionPrice

### Parameters
#### Request Body
- **contract** (Contract) - Required - The option contract details.
- **volatility** (float) - Required - The implied volatility of the option.
- **underPrice** (float) - Required - The current market price of the underlying asset.
- **optPrcOptions** (list[TagValue]) - Optional - Additional options for option price calculation.

### Request Example
```json
{
  "contract": {
    "symbol": "AAPL",
    "lastTradeDateOrContractMonth": "20240621",
    "strike": 170,
    "right": "Call",
    "exchange": "SMART"
  },
  "volatility": 0.15,
  "underPrice": 175.00,
  "optPrcOptions": [
    {"tag": 1, "value": "1"}
  ]
}
```

### Response
#### Success Response (200)
- **optionPrice** (OptionComputation | None) - The calculated option price or None if an error occurred or timed out.

#### Response Example
```json
{
  "optionPrice": {
    "optionPrice": 2.50,
    "delta": 0.6,
    "gamma": 0.05,
    "vega": 0.1,
    "theta": -0.02,
    "rho": 0.01
  }
}
```
```

--------------------------------

### Order Base Class and Order Types

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/order.html

Details the base Order class and its derived classes for Limit, Market, Stop, and Stop Limit orders.

```APIDOC
## Order Base Class and Derived Types

### Description
This section describes the base `Order` class and its specialized subclasses for different order types.

### Order Class Attributes (Example)
These are some of the attributes that can be set for an order:

- **dontUseAutoPriceForHedge** (bool) - Optional - If true, do not use auto-price for hedging.
- **isOmsContainer** (bool) - Optional - Indicates if the order is part of an OMS container.
- **discretionaryUpToLimitPrice** (bool) - Optional - Allows discretionary pricing up to the limit price.
- **autoCancelDate** (str) - Optional - Date for automatic cancellation.
- **filledQuantity** (float | Decimal) - Optional - The quantity that has been filled.
- **refFuturesConId** (int) - Optional - The conId of the reference futures contract.
- **autoCancelParent** (bool) - Optional - If true, the parent order will be automatically cancelled.
- **shareholder** (str) - Optional - Shareholder information.
- **imbalanceOnly** (bool) - Optional - If true, the order is imbalance only.
- **routeMarketableToBbo** (bool) - Optional - Route marketable orders to BBO.
- **parentPermId** (int) - Optional - The permanent ID of the parent order.
- **usePriceMgmtAlgo** (bool) - Optional - Use price management algorithm.
- **duration** (int) - Optional - Duration of the order in seconds.
- **postToAts** (int) - Optional - Post to ATS.
- **advancedErrorOverride** (str) - Optional - Advanced error override message.
- **manualOrderTime** (str) - Optional - Manual order time.
- **minTradeQty** (int) - Optional - Minimum trade quantity.
- **minCompeteSize** (int) - Optional - Minimum competing size.
- **competeAgainstBestOffset** (float | Decimal) - Optional - Offset to compete against the best bid/ask.
- **midOffsetAtWhole** (float | Decimal) - Optional - Midpoint offset at whole price.
- **midOffsetAtHalf** (float | Decimal) - Optional - Midpoint offset at half price.

### LimitOrder

#### Description
Represents a Limit Order.

#### Method
`__init__`

#### Parameters
- **action** (str) - Required - The action for the order (e.g., BUY, SELL).
- **totalQuantity** (float) - Required - The total quantity of the order.
- **lmtPrice** (float) - Required - The limit price for the order.

### MarketOrder

#### Description
Represents a Market Order.

#### Method
`__init__`

#### Parameters
- **action** (str) - Required - The action for the order (e.g., BUY, SELL).
- **totalQuantity** (float) - Required - The total quantity of the order.

### StopOrder

#### Description
Represents a Stop Order.

#### Method
`__init__`

#### Parameters
- **action** (str) - Required - The action for the order (e.g., BUY, SELL).
- **totalQuantity** (float) - Required - The total quantity of the order.
- **stopPrice** (float) - Required - The stop price for the order.

### StopLimitOrder

#### Description
Represents a Stop Limit Order.

#### Method
`__init__`

#### Parameters
- **action** (str) - Required - The action for the order (e.g., BUY, SELL).
- **totalQuantity** (float) - Required - The total quantity of the order.
- **lmtPrice** (float) - Required - The limit price for the order.
- **stopPrice** (float) - Required - The stop price for the order.

```

--------------------------------

### DepthMktDataDescription Object

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Describes market data depth, including exchange and security type.

```APIDOC
## DepthMktDataDescription Object

### Description
Provides a description for market data depth requests, specifying parameters like exchange, security type, and aggregation group.

### Attributes
- **exchange** (str) - The exchange where the instrument is traded.
- **secType** (str) - The type of security (e.g., 'STK', 'FUT').
- **listingExch** (str) - The exchange where the security is listed.
- **serviceDataType** (str) - The type of data service.
- **aggGroup** (int) - The aggregation group for market data.

### Methods
#### dict()

Returns the object's attributes as a dictionary.

Return type:
`dict`

#### nonDefaults()

Returns a dictionary of fields that have values different from their default values.

Return type:
`dict`[`str`, `Any`]

#### tuple()

Returns the object's attributes as a tuple.

Return type:
`tuple`[`Any`, `...`]

#### update(_* srcObjs_, _** kwargs_)

Updates the object's fields from source objects or keyword arguments.

Return type:
`object`
```

--------------------------------

### Short-lived Connection with Delay

Source: https://ib-api-reloaded.github.io/ib_async/recipes.html

For short connections, add a one-second delay before disconnecting to ensure all data is flushed.

```python
ib = IB()
ib.connect()

...  # create and submit some orders

ib.sleep(1)  # added delay
ib.disconnect()

```

--------------------------------

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

--------------------------------

### Request Fundamental Data Async

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously requests fundamental data for a contract, specifying the report type.

```python
def reqFundamentalDataAsync(
        self,
        contract: Contract,
        reportType: str,
        fundamentalDataOptions: list[TagValue] = [],
    ) -> Awaitable[str]:
        reqId = self.client.getReqId()

        future = self.wrapper.startReq(reqId, contract)
        self.client.reqFundamentalData(
            reqId, contract, reportType, fundamentalDataOptions
        )
        return future

```

--------------------------------

### Type Checking Utilities

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Utilities for checking object types.

```APIDOC
## ib_async.util.isnamedtupleinstance

### Description
Check if an object is an instance of a named tuple. Based on https://stackoverflow.com/a/2166841/6067848

### Method
N/A

### Endpoint
N/A

### Response
#### Success Response (200)
- **bool** (bool) - True if the object is a named tuple instance, False otherwise.
```

--------------------------------

### SoftDollarTier Object Properties and Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Properties and methods for the SoftDollarTier object, used for representing soft dollar tiers.

```APIDOC
## SoftDollarTier Object Properties and Methods

### Description
Represents a soft dollar tier with properties for name, value, and display name. Includes methods for data conversion and updates.

### Properties
- `SoftDollarTier.name` (string): The name of the tier.
- `SoftDollarTier.val` (string): The value of the tier.
- `SoftDollarTier.displayName` (string): The display name of the tier.

### Methods
- `SoftDollarTier.dict()`: Converts the SoftDollarTier object to a dictionary.
- `SoftDollarTier.nonDefaults()`: Returns non-default fields of the SoftDollarTier object.
- `SoftDollarTier.tuple()`: Converts the SoftDollarTier object to a tuple.
- `SoftDollarTier.update()`: Updates the SoftDollarTier object.
```

--------------------------------

### New IB Events

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Introduces new event types for connection status and order management: `disconnectedEvent`, `newOrderEvent`, `orderModifyEvent`, and `cancelOrderEvent`.

```python
IB.disconnectedEvent
```

```python
IB.newOrderEvent
```

```python
IB.orderModifyEvent
```

```python
IB.cancelOrderEvent
```

--------------------------------

### Account Information

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Method for retrieving the list of managed account names.

```APIDOC
## GET /accounts

### Description
Get the list of account names that are under management.

### Method
GET

### Endpoint
/accounts

### Response
#### Success Response (200)
- **accounts** (list[string]) - A list of account names.

#### Response Example
```json
{
  "accounts": ["Account1", "Account2"]
}
```
```

--------------------------------

### Replace Financial Advisor Data

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Replaces financial advisor configuration data. Requires a request ID, FA data type, and XML content.

```python
def replaceFA(self, reqId, faData, cxml):
        self.send(19, 1, faData, cxml, reqId)
```

--------------------------------

### Generate FlexReport URL

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Generates the URL for accessing a specific FlexReport based on the provided credentials or configuration.

```python
get_url()
```

--------------------------------

### Miscellaneous

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Other utility endpoints.

```APIDOC
## POST /reqCurrentTime

### Description
Requests the current time from the server.

### Method
POST

### Endpoint
/reqCurrentTime
```

--------------------------------

### PnL Subscription API

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

APIs for subscribing and unsubscribing to real-time Profit and Loss (PnL) events for accounts and specific contracts.

```APIDOC
## POST /api/pnl

### Description
Starts a subscription for profit and loss events for a given account. Returns a PnL object that is kept live updated.

### Method
POST

### Endpoint
/api/pnl

### Parameters
#### Query Parameters
- **account** (string) - Required - The account to subscribe to.
- **modelCode** (string) - Optional - If specified, filter for this account model.

### Request Example
```json
{
  "account": "YOUR_ACCOUNT_ID",
  "modelCode": "OPTIONAL_MODEL_CODE"
}
```

### Response
#### Success Response (200)
- **PnL Object** - A live updated PnL object.

#### Response Example
```json
{
  "account": "YOUR_ACCOUNT_ID",
  "modelCode": "OPTIONAL_MODEL_CODE",
  "unrealizedPnL": 100.50,
  "realizedPnL": 50.25
}
```
```

```APIDOC
## DELETE /api/pnl

### Description
Cancels the PnL subscription for the specified account and model code.

### Method
DELETE

### Endpoint
/api/pnl

### Parameters
#### Query Parameters
- **account** (string) - Required - The account for which to cancel the subscription.
- **modelCode** (string) - Optional - If specified, cancel for this account model.

### Request Example
```json
{
  "account": "YOUR_ACCOUNT_ID",
  "modelCode": "OPTIONAL_MODEL_CODE"
}
```

### Response
#### Success Response (200)
- **Status** (string) - Indicates if the cancellation was successful.

#### Response Example
```json
{
  "status": "PnL subscription cancelled successfully."
}
```
```

```APIDOC
## POST /api/pnlSingle

### Description
Starts a subscription for profit and loss events for a single position. Returns a PnLSingle object that is kept live updated.

### Method
POST

### Endpoint
/api/pnlSingle

### Parameters
#### Query Parameters
- **account** (string) - Required - Subscribe to this account.
- **modelCode** (string) - Required - Filter for this account model.
- **conId** (integer) - Required - Filter for this contract ID.

### Request Example
```json
{
  "account": "YOUR_ACCOUNT_ID",
  "modelCode": "YOUR_MODEL_CODE",
  "conId": 12345678
}
```

### Response
#### Success Response (200)
- **PnLSingle Object** - A live updated PnLSingle object.

#### Response Example
```json
{
  "account": "YOUR_ACCOUNT_ID",
  "modelCode": "YOUR_MODEL_CODE",
  "conId": 12345678,
  "unrealizedPnL": 25.75,
  "realizedPnL": 10.00
}
```
```

```APIDOC
## DELETE /api/pnlSingle

### Description
Cancels the PnLSingle subscription for the given account, modelCode, and conId.

### Method
DELETE

### Endpoint
/api/pnlSingle

### Parameters
#### Query Parameters
- **account** (string) - Required - Cancel for this account name.
- **modelCode** (string) - Required - Cancel for this account model.
- **conId** (integer) - Required - Cancel for this contract ID.

### Request Example
```json
{
  "account": "YOUR_ACCOUNT_ID",
  "modelCode": "YOUR_MODEL_CODE",
  "conId": 12345678
}
```

### Response
#### Success Response (200)
- **Status** (string) - Indicates if the cancellation was successful.

#### Response Example
```json
{
  "status": "PnLSingle subscription cancelled successfully."
}
```
```

--------------------------------

### Handle IB API Bust Event (Error Code 10225)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Resubscribes to real-time bars or historical data when a bust event (error code 10225) occurs, deactivating the current subscription. Use to re-establish data feeds after a bust.

```python
elif errorCode == 10225:
            # Bust event occurred, current subscription is deactivated.
            # Please resubscribe real-time bars immediately
            bars = self.reqId2Subscriber.get(reqId)
            if isinstance(bars, RealTimeBarList):
                self.ib.client.cancelRealTimeBars(reqId)
                self.ib.client.reqRealTimeBars(
                    reqId,
                    bars.contract,
                    bars.barSize,
                    bars.whatToShow,
                    bars.useRTH,
                    bars.realTimeBarsOptions,
                )
            elif isinstance(bars, BarDataList):
                self.ib.client.cancelHistoricalData(reqId)
                self.ib.client.reqHistoricalData(
                    reqId,
                    bars.contract,
                    bars.endDateTime,
                    bars.durationStr,
                    bars.barSizeSetting,
                    bars.whatToShow,
                    bars.useRTH,
                    bars.formatDate,
                    bars.keepUpToDate,
                    bars.chartOptions,
                )
```

--------------------------------

### Numerical Utilities

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Utilities for numerical operations.

```APIDOC
## ib_async.util.isNan

### Description
Not a number test.

### Method
N/A

### Endpoint
N/A

### Response
#### Success Response (200)
- **bool** (bool) - True if the input is NaN, False otherwise.
```

```APIDOC
## ib_async.util.formatSI

### Description
Format the integer or float n to 3 significant digits + SI prefix.

### Method
N/A

### Endpoint
N/A

### Parameters
#### Query Parameters
- **n** (int | float) - Required - The number to format.
```

--------------------------------

### Data Request Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Methods for requesting various types of market and account data.

```APIDOC
## Data Request Methods

### Description
Methods used to request different types of data from the IB server.

### Methods
- `Client.getAccounts()`: Retrieves account information.
- `Client.send(message)`: Sends a generic message to the server.
- `Client.sendMsg(message)`: Sends a specific message to the server.
- `Client.reqMktData(tickerId, contract, ...)`: Requests market data.
- `Client.cancelMktData(tickerId)`: Cancels market data requests.
- `Client.reqOpenOrders()`: Requests all open orders.
- `Client.reqAccountUpdates()`: Requests account updates.
- `Client.reqExecutions()`: Requests execution details.
- `Client.reqIds()`: Requests new IDs.
- `Client.reqContractDetails(reqId, contract)`: Requests details for a contract.
- `Client.reqMktDepth(tickerId, contract, ...)`: Requests market depth data.
- `Client.cancelMktDepth(tickerId)`: Cancels market depth requests.
- `Client.reqNewsBulletins()`: Requests news bulletins.
- `Client.cancelNewsBulletins()`: Cancels news bulletins.
- `Client.setServerLogLevel(level)`: Sets the server log level.
- `Client.reqAutoOpenOrders(bAutoAcceptOrders)`: Requests auto-open orders.
- `Client.reqAllOpenOrders()`: Requests all open orders.
- `Client.reqManagedAccts()`: Requests managed accounts.
- `Client.requestFA(faDataType)`: Requests Financial Advisor data.
- `Client.replaceFA(faDataType, xml)`: Replaces Financial Advisor data.
- `Client.reqHistoricalData(tickerId, contract, ...)`: Requests historical data.
- `Client.exerciseOptions(tickerId, contract, ...)`: Exercises options.
- `Client.reqScannerSubscription(tickerId, scanCode, ...)`: Subscribes to scanner data.
- `Client.cancelScannerSubscription(tickerId)`: Cancels scanner subscription.
- `Client.reqScannerParameters()`: Requests scanner parameters.
- `Client.cancelHistoricalData(tickerId)`: Cancels historical data requests.
- `Client.reqCurrentTime()`: Requests the current time from the server.
- `Client.reqRealTimeBars(tickerId, contract, ...)`: Requests real-time bars.
- `Client.cancelRealTimeBars(tickerId)`: Cancels real-time bar requests.
- `Client.reqFundamentalData(tickerId, contract, ...)`: Requests fundamental data.
- `Client.cancelFundamentalData(tickerId)`: Cancels fundamental data requests.
- `Client.calculateImpliedVolatility(tickerId, contract, ...)`: Calculates implied volatility.
- `Client.calculateOptionPrice(tickerId, contract, ...)`: Calculates option price.
- `Client.cancelCalculateImpliedVolatility(tickerId)`: Cancels implied volatility calculation.
- `Client.cancelCalculateOptionPrice(tickerId)`: Cancels option price calculation.
- `Client.reqGlobalCancel()`: Sends a global cancel request.
- `Client.reqMarketDataType(marketDataType)`: Sets the market data type.
- `Client.reqPositions()`: Requests current positions.
- `Client.reqAccountSummary()`: Requests account summary.
- `Client.cancelAccountSummary(reqId)`: Cancels account summary request.
- `Client.cancelPositions()`: Cancels positions request.
- `Client.verifyRequest()`: Verifies a request.
- `Client.verifyMessage()`: Verifies a message.
- `Client.queryDisplayGroups(reqId)`: Queries display groups.
- `Client.subscribeToGroupEvents(reqId, groupId)`: Subscribes to group events.
- `Client.updateDisplayGroup(reqId, contractInfo)`: Updates a display group.
- `Client.unsubscribeFromGroupEvents(reqId)`: Unsubscribes from group events.
- `Client.startApi()`: Starts the API.
- `Client.verifyAndAuthRequest(ப்புகள்)`: Verifies and authenticates a request.
- `Client.verifyAndAuthMessage(authData)`: Verifies and authenticates a message.
- `Client.reqPositionsMulti(reqId, account, modelCode)`: Requests multi-account positions.
- `Client.cancelPositionsMulti(reqId)`: Cancels multi-account positions request.
- `Client.reqAccountUpdatesMulti(reqId, account, modelCode)`: Requests multi-account updates.
- `Client.cancelAccountUpdatesMulti(reqId)`: Cancels multi-account updates request.
- `Client.reqSecDefOptParams(reqId, underlyingSymbol, futPfut, optionType)`: Requests security definition option parameters.
- `Client.reqSoftDollarTiers(reqId,étaire,`): Requests soft dollar tiers.
- `Client.reqFamilyCodes()`: Requests family codes.
- `Client.reqMatchingSymbols(pattern)`: Requests matching symbols.
- `Client.reqMktDepthExchanges(tickerId)`: Requests market depth exchanges.
- `Client.reqSmartComponents(reqId, mktPoint)`: Requests smart components.
- `Client.reqNewsArticle(providerCode, articleId)`: Requests a news article.
- `Client.reqNewsProviders()`: Requests news providers.
- `Client.reqHistoricalNews(providerCodes, timeBegin, timeEnd,ồi)`: Requests historical news.
- `Client.reqHeadTimeStamp(tickerId, contract,`): Requests head timestamp.
- `Client.reqHistogramData(tickerId)`: Requests histogram data.
- `Client.cancelHistogramData(tickerId)`: Cancels histogram data request.
- `Client.cancelHeadTimeStamp(tickerId)`: Cancels head timestamp request.
- `Client.reqMarketRule(marketRuleId)`: Requests market rule.
- `Client.reqPnL(reqId, account, modelCode)`: Requests PnL.
- `Client.cancelPnL(reqId)`: Cancels PnL request.
- `Client.reqPnLSingle(reqId, account, modelCode, conId)`: Requests single PnL.
- `Client.cancelPnLSingle(reqId)`: Cancels single PnL request.
- `Client.reqHistoricalTicks(tickerId, contract, startDateTime, endDateTime, ticksTypes)`: Requests historical ticks.
- `Client.reqTickByTickData(tickerId, contract, startDateTime, endDateTime, tickType, ...)`: Requests tick-by-tick data.
- `Client.cancelTickByTickData(tickerId)`: Cancels tick-by-tick data request.
- `Client.reqCompletedOrders(bApiOnly)`: Requests completed orders.
- `Client.reqWshMetaData(reqId, `): Requests WSH metadata.
- `Client.cancelWshMetaData(reqId)`: Cancels WSH metadata request.
- `Client.reqWshEventData(reqId, `): Requests WSH event data.
- `Client.cancelWshEventData(reqId)`: Cancels WSH event data request.
- `Client.reqUserInfo()`: Requests user info.
```

--------------------------------

### OrderBase Fields

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Common fields for order types.

```APIDOC
## OrderBase Fields

### Description
Common fields available across various order types.

### Fields
- `autoCancelDate` (str): Date for automatic cancellation.
- `filledQuantity` (float | Decimal): The quantity that has been filled.
- `refFuturesConId` (int): Reference futures contract ID.
- `autoCancelParent` (bool): Flag for automatic cancellation of parent order.
- `shareholder` (str): Shareholder information.
- `imbalanceOnly` (bool): Indicates if the order is imbalance only.
- `routeMarketableToBbo` (bool): Route marketable orders to BBO.
- `parentPermId` (int): Permanent ID of the parent order.
- `usePriceMgmtAlgo` (bool): Use price management algorithm.
- `duration` (int): Duration of the order.
- `postToAts` (int): Post to ATS indicator.
- `advancedErrorOverride` (str): Advanced error override setting.
- `manualOrderTime` (str): Manual order time.
- `minTradeQty` (int): Minimum trade quantity.
- `minCompeteSize` (int): Minimum competing size.
- `competeAgainstBestOffset` (float | Decimal): Offset for competing against the best bid/ask.
- `midOffsetAtWhole` (float | Decimal): Mid-offset at whole price level.
- `midOffsetAtHalf` (float | Decimal): Mid-offset at half price level.
```

--------------------------------

### News Bulletin Event - IB.newsBulletinEvent

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

The IB.newsBulletinEvent was added in version 0.9.35 to provide access to news bulletins.

```python
IB.newsBulletinEvent
```

--------------------------------

### Patch Asyncio - util.patchAsyncio()

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Utility to patch asyncio for compatibility. Updated for Python 3.7 in version 0.9.29.

```python
util.patchAsyncio()
```

--------------------------------

### Handle Head Timestamp

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Parses and returns the head timestamp for historical data requests. Use to determine the earliest available data point.

```python
def headTimestamp(self, reqId: int, headTimestamp: str):
        try:
            dt = parseIBDatetime(headTimestamp)
            self._endReq(reqId, dt)
        except ValueError as exc:
            self._endReq(reqId, exc, False)
```

--------------------------------

### Handle WSH Metadata Event

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Emits a WSH metadata event with the provided JSON data. Used for receiving metadata related to Watchlist Streaming.

```python
def wshMetaData(self, reqId: int, dataJson: str):
        self.ib.wshMetaEvent.emit(dataJson)
        self._endReq(reqId, dataJson)
```

--------------------------------

### Autocompletion Working Again

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Autocompletion support, particularly for Jedi plugin in IDEs like Spyder and VS Code, was restored in version 0.9.32.

```python
Autocompletion
```

--------------------------------

### Account Information Endpoints

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Endpoints for retrieving account and portfolio information.

```APIDOC
## GET /currentTime

### Description
Request TWS current time. This method is blocking.

### Method
GET

### Endpoint
/currentTime

### Response
#### Success Response (200)
- **currentTime** (datetime) - The current time from TWS.

#### Response Example
```json
{
  "currentTime": "2023-10-27T10:30:00Z"
}
```
```

```APIDOC
## POST /reqAccountUpdates

### Description
Request account and portfolio values of the account and keep updated. Returns when both account values and portfolio are filled. This is called at startup - no need to call again.

### Method
POST

### Endpoint
/reqAccountUpdates

### Parameters
#### Request Body
- **account** (str) - Optional - If specified, filter for this account name.

### Request Example
```json
{
  "account": "DU12345"
}
```

### Response
#### Success Response (200)
- **accountUpdates** (AccountUpdateList) - List of account and portfolio values.

#### Response Example
```json
{
  "accountUpdates": [
    {
      "account": "DU12345",
      "balance": 100000.0
    }
  ]
}
```
```

```APIDOC
## POST /reqAccountUpdatesMulti

### Description
Request account values of multiple accounts and keep updated. This method is blocking.

### Method
POST

### Endpoint
/reqAccountUpdatesMulti

### Parameters
#### Request Body
- **account** (str) - Optional - If specified, filter for this account name.
- **modelCode** (str) - Optional - If specified, filter for this account model.

### Request Example
```json
{
  "account": "DU12345",
  "modelCode": "MODEL1"
}
```

### Response
#### Success Response (200)
- **accountValues** (AccountValueList) - List of account values.

#### Response Example
```json
{
  "accountValues": [
    {
      "key": "NetLiquidation",
      "value": "100000.0"
    }
  ]
}
```
```

```APIDOC
## POST /reqAccountSummary

### Description
Request account values for all accounts and keep them updated. Returns when account summary is filled. This method is blocking.

### Method
POST

### Endpoint
/reqAccountSummary

### Response
#### Success Response (200)
- **accountSummary** (AccountSummaryList) - List of account summary values.

#### Response Example
```json
{
  "accountSummary": [
    {
      "account": "DU12345",
      "tag": "TotalCashBalance",
      "value": "50000.0"
    }
  ]
}
```
```

```APIDOC
## POST /reqAutoOpenOrders

### Description
Enable or disable auto-opening of orders.

### Method
POST

### Endpoint
/reqAutoOpenOrders

### Parameters
#### Request Body
- **autoBind** (bool) - Optional - Whether to auto-open orders. Defaults to True.

### Request Example
```json
{
  "autoBind": true
}
```

### Response
#### Success Response (200)
- **message** (string) - Confirmation message.

#### Response Example
```json
{
  "message": "Auto open orders setting updated."
}
```
```

--------------------------------

### Request Historical Schedule (Blocking)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Makes a blocking call to request the historical schedule for a contract. Specify the number of days and optionally an end date/time and trading hours preference.

```python
return self._run(
            self.reqHistoricalScheduleAsync(contract, numDays, endDateTime, useRTH)
        )
```

--------------------------------

### Format Datetime for IB

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Formats a date or datetime object into the string format used by Interactive Brokers.

```python
ib_async.util.formatIBDatetime(_t_)
```

--------------------------------

### Format Datetime for IB API

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Converts Python datetime or date objects into the string format expected by the Interactive Brokers API. Handles timezone conversion to UTC and formats the output string accordingly. Accepts None, datetime, date, or string inputs.

```python
def formatIBDatetime(t: dt.date | dt.datetime | str | None) -> str:
    """Format date or datetime to string that IB uses."""
    if not t:
        s = ""
    elif isinstance(t, dt.datetime):
        # convert to UTC timezone
        t = t.astimezone(tz=dt.timezone.utc)
        s = t.strftime("%Y%m%d %H:%M:%S UTC")
    elif isinstance(t, dt.date):
        t = dt.datetime(t.year, t.month, t.day, 23, 59, 59).astimezone(
            tz=dt.timezone.utc
        )
        s = t.strftime("%Y%m%d %H:%M:%S UTC")
    else:
        s = t

    return s
```

--------------------------------

### Asynchronous News Article Request

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Fetches a specific news article asynchronously using its provider code and article ID.

```APIDOC
## POST /reqNewsArticleAsync

### Description
Fetches a specific news article asynchronously.

### Method
POST

### Endpoint
/reqNewsArticleAsync

### Parameters
#### Query Parameters
- **_providerCode_** (string) - Required - The code of the news provider.
- **_articleId_** (string) - Required - The ID of the news article.
- **_newsArticleOptions_** (list) - Optional - Additional options for fetching the news article.

### Response
#### Success Response (200)
- **NewsArticle** - An object containing the news article details.
```

--------------------------------

### ComboLeg Object

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents a leg of a combo order. Contains details like conId, ratio, action, etc.

```APIDOC
## ComboLeg Object

### Description
Represents a leg of a combo order.

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
- **conId** (int) - Optional - The contract identifier for the leg. Defaults to 0.
- **ratio** (int) - Optional - The ratio of the leg. Defaults to 0.
- **action** (str) - Optional - The action for the leg (e.g., BUY, SELL). Defaults to ''.
- **exchange** (str) - Optional - The exchange for the leg. Defaults to ''.
- **openClose** (int) - Optional - Specifies if the leg is an opening or closing transaction. Defaults to 0.
- **shortSaleSlot** (int) - Optional - The short sale slot. Defaults to 0.
- **designatedLocation** (str) - Optional - The designated location for the leg. Defaults to ''.
- **exemptCode** (int) - Optional - The exempt code. Defaults to -1.

### Request Example
```json
{
  "conId": 12345,
  "ratio": 1,
  "action": "BUY",
  "exchange": "SMART",
  "openClose": 1,
  "shortSaleSlot": 1,
  "designatedLocation": "",
  "exemptCode": -1
}
```

### Response
#### Success Response (200)
This object represents a ComboLeg.

#### Response Example
```json
{
  "conId": 12345,
  "ratio": 1,
  "action": "BUY",
  "exchange": "SMART",
  "openClose": 1,
  "shortSaleSlot": 1,
  "designatedLocation": "",
  "exemptCode": -1
}
```
```

--------------------------------

### Order State Constants

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Constants representing different states of an order.

```APIDOC
## Order State Constants

### Description
Constants defining the possible states an order can be in.

### Constants
- **PendingSubmit** (str)
- **PendingCancel** (str)
- **PreSubmitted** (str)
- **Submitted** (str)
- **ApiPending** (str)
- **ApiCancelled** (str)
- **ApiUpdate** (str)
- **Cancelled** (str)
- **Filled** (str)
- **Inactive** (str)
- **ValidationError** (str)

### Frozen Sets
- **DoneStates** (frozenset[str]) - Set of states indicating a completed order.
- **ActiveStates** (frozenset[str]) - Set of states indicating an active order.
- **WaitingStates** (frozenset[str]) - Set of states indicating an order that is waiting to be processed.
- **WorkingStates** (frozenset[str]) - Set of states indicating an order that is currently being worked on.
```

--------------------------------

### Parse Trading Sessions from ContractDetails

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Parses the trading hours string from ContractDetails into a list of TradingSession objects. Requires timeZoneId to be set.

```python
def tradingSessions(self) -> list[TradingSession]:
    return self._parseSessions(self.tradingHours)
```

--------------------------------

### Request Current Time Async

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously requests the current server time. Returns an Awaitable that resolves to a datetime object.

```python
def reqCurrentTimeAsync(self) -> Awaitable[datetime.datetime]:
        future = self.wrapper.startReq("currentTime")
        self.client.reqCurrentTime()
        return future
```

--------------------------------

### Run Shell Command Asynchronously

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ibcontroller.html

Executes a shell command asynchronously and captures its standard output. Ensure the command and its arguments are correctly passed as a list.

```python
self._proc = await asyncio.create_subprocess_exec(
            *cmd, stdout=asyncio.subprocess.PIPE
        )
        self._monitor = asyncio.ensure_future(self.monitorAsync())
```

--------------------------------

### Wait for Any Event - Event.any()

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

This method waits for any of the specified events to occur. It was added in version 0.9.44.

```python
Event.any()
```

--------------------------------

### Qualify Contracts (Blocking)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Fully qualifies the given contracts in-place, filling in missing fields like conId. This is a blocking method that returns a list of successfully qualified contracts.

```python
def qualifyContracts(self, *contracts: Contract) -> list[Contract]:
    """
    Fully qualify the given contracts in-place. This will fill in
    the missing fields in the contract, especially the conId.

    Returns a list of contracts that have been successfully qualified.

    This method is blocking.

    Args:
        contracts: Contracts to qualify.
    """
    return self._run(self.qualifyContractsAsync(*contracts))
```

--------------------------------

### Execution Details and Commission Reports

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Handles incoming execution details and commission reports, updating trade logs and emitting relevant events.

```APIDOC
## POST /api/fills

### Description
Processes incoming execution fills and updates trade information. If it's the first time an execution ID is encountered, it's added to the fills dictionary. If a trade object is associated, the fill is appended to the trade's fills, and a log entry is created. For live executions, an info log is generated, and an `execDetailsEvent` is emitted. For non-live executions, the fill is added to the results.

Handles incoming commission reports, associating them with existing fills and emitting `commissionReportEvent` if a trade is found.

### Method
POST

### Endpoint
/api/fills

### Parameters
#### Request Body
- **fill** (Fill) - Required - The fill object containing execution details.
- **execution** (Execution) - Required - The execution object.
- **commissionReport** (CommissionReport) - Optional - The commission report associated with the fill.
- **time** (datetime) - Required - The timestamp of the event.
- **execId** (str) - Required - The unique identifier for the execution.
- **trade** (Trade) - Optional - The trade object associated with the fill.
- **isLive** (bool) - Required - Flag indicating if the execution is live.

### Request Example
```json
{
  "fill": { ... },
  "execution": { ... },
  "commissionReport": { ... },
  "time": "2023-10-27T10:00:00Z",
  "execId": "exec123",
  "trade": { ... },
  "isLive": true
}
```

### Response
#### Success Response (200)
- **status** (str) - Indicates the success of the operation.

#### Response Example
```json
{
  "status": "success"
}
```
```

--------------------------------

### WSH Metadata and Event Data Retrieval (Blocking)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Blocking convenience methods to retrieve WSH metadata and event data.

```APIDOC
## GET /getWshMetaData

### Description
Retrieves the WSH metadata (available filters and event types) as a JSON string. A Wall Street Horizon subscription is required.

### Method
GET

### Endpoint
/getWshMetaData

### Parameters
None

### Response
#### Success Response (200)
- **string** - A JSON string containing the WSH metadata.

#### Response Example
```json
{
  "example": "[JSON string of WSH metadata]"
}
```

## POST /getWshEventData

### Description
Retrieves the WSH event data as a JSON string. `getWshMetaData` must be called first. A Wall Street Horizon subscription is required.

### Method
POST

### Endpoint
/getWshEventData

### Parameters
#### Request Body
- **data** (WshEventData) - Required - The data object specifying the filters for WSH events.

### Request Example
```json
{
  "filter": "{\"country\": \"All\", \"watchlist\": [\"8314\"], \"limit_region\": 10, \"limit\": 10, \"wshe_ed\": \"true\", \"wshe_bod\": \"true\"}"
}
```

### Response
#### Success Response (200)
- **string** - A JSON string containing the WSH event data.

#### Response Example
```json
{
  "example": "[JSON string of WSH event data]"
}
```
```

--------------------------------

### Request Market Data Type

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Sets the type of market data to be received. Requires a market data type code.

```python
def reqMarketDataType(self, marketDataType):
        self.send(59, 1, marketDataType)
```

--------------------------------

### Place Order

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Places a new order or modifies an existing one. Handles complex order types and contract details.

```APIDOC
## POST /api/orders/place

### Description
Places a new order or modifies an existing one. Handles complex order types and contract details.

### Method
POST

### Endpoint
/api/orders/place

### Parameters
#### Request Body
- **orderId** (int) - Required - Unique identifier for the order.
- **contract** (object) - Required - Contract details.
  - **secType** (string) - Required - Security type (e.g., 'STK', 'FUT', 'BAG').
  - **symbol** (string) - Required - Security symbol.
  - **exchange** (string) - Required - Exchange code.
  - **currency** (string) - Required - Currency code.
  - **secIdType** (string) - Optional - Security ID type.
  - **secId** (string) - Optional - Security ID.
  - **comboLegs** (array) - Optional - List of combo legs for 'BAG' contracts.
    - **conId** (int) - Required - Contract ID of the leg.
    - **ratio** (int) - Required - Ratio of the leg.
    - **action** (string) - Required - Action for the leg (e.g., 'BUY', 'SELL').
    - **exchange** (string) - Required - Exchange for the leg.
    - **openClose** (string) - Optional - Open/Close status.
    - **shortSaleSlot** (int) - Optional - Short sale slot.
    - **designatedLocation** (string) - Optional - Designated location.
    - **exemptCode** (int) - Optional - Exempt code.
- **order** (object) - Required - Order details.
  - **action** (string) - Required - Order action (e.g., 'BUY', 'SELL').
  - **totalQuantity** (int) - Required - Total quantity.
  - **orderType** (string) - Required - Type of order (e.g., 'MKT', 'LMT', 'VOL').
  - **lmtPrice** (float) - Optional - Limit price.
  - **auxPrice** (float) - Optional - Auxiliary price.
  - **tif** (string) - Optional - Time in force (e.g., 'DAY', 'GTC').
  - **ocaGroup** (string) - Optional - OCA group.
  - **account** (string) - Optional - Account number.
  - **openClose** (string) - Optional - Open/Close status.
  - **origin** (string) - Optional - Order origin.
  - **orderRef** (string) - Optional - Order reference.
  - **transmit** (bool) - Required - Whether to transmit the order.
  - **parentId** (int) - Optional - Parent order ID for bracket orders.
  - **blockOrder** (bool) - Optional - Whether it's a block order.
  - **sweepToFill** (bool) - Optional - Whether to sweep to fill.
  - **displaySize** (int) - Optional - Display size for iceberg orders.
  - **triggerMethod** (int) - Optional - Trigger method for stop orders.
  - **outsideRth** (bool) - Optional - Whether the order is outside regular trading hours.
  - **hidden** (bool) - Optional - Whether the order is hidden.
  - **orderComboLegs** (array) - Optional - List of order combo legs.
    - **price** (float) - Required - Price for the combo leg.
  - **smartComboRoutingParams** (array) - Optional - Smart combo routing parameters.
    - **tag** (string) - Required - Parameter tag.
    - **value** (string) - Required - Parameter value.
  - **discretionaryAmt** (float) - Optional - Discretionary amount.
  - **goodAfterTime** (string) - Optional - Time after which the order is effective (format: 'YYYYMMDD HH:MM:SS').
  - **goodTillDate** (string) - Optional - Date until which the order is effective (format: 'YYYYMMDD HH:MM:SS').
  - **faGroup** (string) - Optional - Financial advisor group.
  - **faMethod** (string) - Optional - Financial advisor method.
  - **faPercentage** (string) - Optional - Financial advisor percentage.
  - **faProfile** (string) - Optional - Financial advisor profile (used for older server versions).
  - **modelCode** (string) - Optional - Model code for allocation.
  - **shortSaleSlot** (int) - Optional - Short sale slot.
  - **designatedLocation** (string) - Optional - Designated location.
  - **exemptCode** (int) - Optional - Exempt code.
  - **ocaType** (int) - Optional - OCA type.
  - **rule80A** (string) - Optional - Rule 80A classification.
  - **settlingFirm** (string) - Optional - Settling firm.
  - **allOrNone** (bool) - Optional - Whether the order is all or none.
  - **minQty** (int) - Optional - Minimum quantity for an order.
  - **percentOffset** (float) - Optional - Percentage offset for an order.
  - **eTradeOnly** (bool) - Optional - Whether the order is eTrade only (always false).
  - **firmQuoteOnly** (bool) - Optional - Whether the order is firm quote only (always false).
  - **nbboPriceCap** (float) - Optional - NBBO price cap (always UNSET).
  - **auctionStrategy** (int) - Optional - Auction strategy.
  - **startingPrice** (float) - Optional - Starting price for VWAP orders.
  - **stockRefPrice** (float) - Optional - Stock reference price for stock orders.
  - **delta** (float) - Optional - Delta for option orders.

### Request Example
```json
{
  "orderId": 1,
  "contract": {
    "secType": "STK",
    "symbol": "IBM",
    "exchange": "SMART",
    "currency": "USD"
  },
  "order": {
    "action": "BUY",
    "totalQuantity": 100,
    "orderType": "LMT",
    "lmtPrice": 150.00,
    "tif": "DAY",
    "transmit": true
  }
}
```

### Response
#### Success Response (200)
- **status** (string) - Indicates the status of the order placement.

#### Response Example
```json
{
  "status": "Submitted"
}
```
```

--------------------------------

### ibapi Package No Longer Needed

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

As of version 0.9.47, the 'ibapi' package from IB is no longer required, as ib_async now handles its own socket protocol encoding and decoding.

```python
ibapi
```

--------------------------------

### Data Structures

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Details on various data list structures used for storing API data, including BarDataList, RealTimeBarList, and ScanDataList.

```APIDOC
## BarDataList Class

### Description
List of `BarData` that also stores all request parameters.

### Events
- `updateEvent` (bars: `BarDataList`, hasNewBar: bool)

### Attributes
- **reqId** (`int`)
- **contract** (`Contract`)
- **endDateTime** (`datetime` | `date` | `str` | `None`)
- **durationStr** (`str`)
- **barSizeSetting** (`str`)
- **whatToShow** (`str`)
- **useRTH** (`bool`)
- **formatDate** (`int`)
- **keepUpToDate** (`bool`)
- **chartOptions** (`list`[`TagValue`])

## RealTimeBarList Class

### Description
List of `RealTimeBar` that also stores all request parameters.

### Events
- `updateEvent` (bars: `RealTimeBarList`, hasNewBar: bool)

### Attributes
- **reqId** (`int`)
- **contract** (`Contract`)
- **barSize** (`int`)
- **whatToShow** (`str`)
- **useRTH** (`bool`)
- **realTimeBarsOptions** (`list`[`TagValue`])

## ScanDataList Class

### Description
List of `ScanData` that also stores all request parameters.

### Events
- `updateEvent` (`ScanDataList`)

### Attributes
- **reqId** (`int`)
- **subscription** (`ScannerSubscription`)
- **scannerSubscriptionOptions** (`list`[`TagValue`])
- **scannerSubscriptionFilterOptions** (`list`[`TagValue`])
```

--------------------------------

### Emit Bid and Ask Ticks

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ticker.html

Filters and emits both bid and ask ticks from a ticker event. Combines codes for bid and ask tick types.

```python
def bidasks(self) -> "Tickfilter":
        """Emit bid and ask ticks."""
        return Tickfilter((0, 1, 66, 69, 2, 3, 67, 70), self)
```