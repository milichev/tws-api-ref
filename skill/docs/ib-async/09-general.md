[IBKR TWS API](../../SKILL.md) · [ib_async Reference](index.md) · [General Reference](09-general.md)


# General Reference

### Install Everything with Poetry

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Install all dependencies for ib_async, including those for documentation and development testing, using Poetry.

```bash
poetry install --with=docs,dev

```

---

### Install All Dependencies for Development

Source: https://ib-api-reloaded.github.io/ib_async/readme.html

Installs all dependencies required for local development, including development, documentation, and testing tools.

```bash
poetry install --with=dev,docs

```

---

### Install ib_async with Poetry

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Install the ib_async library using Poetry. This command installs only the library dependencies.

```bash
poetry install

```

---

### Install ib_async

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Install the ib_async library using pip. Requires Python 3.10 or higher.

```bash
pip install ib_async

```

---

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

---

### Install Development Dependencies

Source: https://ib-api-reloaded.github.io/ib_async/readme.html

Installs the necessary dependencies for development, including testing tools.

```bash
poetry install --with=dev

```

---

### Submit Bracket Order Example

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Example of how to submit a bracket order created by the bracketOrder function.

```python
for o in bracket:
    ib.placeOrder(contract, o)
```

---

### Install All Dependencies with Poetry

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Installs all project dependencies, including those for development and documentation, using Poetry. This command is used after cloning the repository.

```bash
poetry install --with=dev,docs
```

---

### Install Development Dependencies

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Installs project dependencies including development tools using Poetry. This command is used for setting up the development environment.

```bash
poetry install --with=dev
```

---

### Generate Documentation with Poetry

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Install documentation dependencies and build the HTML documentation for ib_async using Poetry and Sphinx.

```bash
poetry install --with=docs
poetry run sphinx-build -b html docs html

```

---

### Install Poetry

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Install or upgrade Poetry, a dependency management tool for Python. This is a prerequisite for building the library manually.

```bash
pip install poetry -U

```

---

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

---

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

---

### Upload Package to PyPI with Poetry

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Install dependencies, configure your PyPI token, and publish the ib_async package to PyPI using Poetry.

```bash
poetry install
poetry config pypi-token.pypi your-api-token
poetry publish --build

```

---

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

---

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

---

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

---

### Add util.useQtAlt for Nested Event Loops on Windows

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Introduces `util.useQtAlt()` for using nested event loops on Windows with Qt.

```python
util.useQtAlt()
```

---

### Get User Info Async

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Retrieves the White Branding ID of the current user. This function is asynchronous.

```python
reqUserInfo()
```

---

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

---

### Build Package with Poetry

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Build the distribution package for ib_async using Poetry.

```bash
poetry build

```

---

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

---

### Event Class Replacement

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

The 'Event' class has been replaced with the one from the 'eventkit' library, starting in version 0.9.46.

```python
Event
```

---

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

---

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

---

### Use Qt Event Loop - util.useQt()

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Rewritten utility to work with any asyncio event loop, supporting PyQt5 and PySide2 without quamash. This change was part of version 0.9.31.

```python
util.useQt()
```

---

### Clone ib_async Repository

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Clones the `ib_async` project repository from GitHub to a local machine. This is the first step in setting up the project for local development.

```bash
git clone https://github.com/ib-api-reloaded/ib_async.git
cd ib_async
```

---

### Import Order Conditions

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Order conditions are now imported into the `ib_async` namespace.

```python
Import order conditions
```

---

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

---

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

---

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

---

### Enable Auto Open Orders

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Configure the client to automatically bind to open orders.

```python
ib.reqAutoOpenOrders(_autoBind =True_)
```

---

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

---

### Default Arguments for connect and reqMktData

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Provides default arguments for the `ib.connect()` and `ib.reqMktData()` methods.

```python
ib.connect()
```

```python
ib.reqMktData()
```

---

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

---

### Get Wall Street Horizon Event Data

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Retrieves Wall Street Horizon event data as a JSON string. `getWshMetaData()` must be called first. A subscription is required. This is a blocking convenience method.

```python
# For IBM (with conId=8314) query the:
#   - Earnings Dates (wshe_ed)
```

---

### OrderStateNumeric Type Helper

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Use this type helper for mypy to check against when converting OrderState to .numeric(). Example: state_numeric: OrderStateNumeric = state.numeric(digits=2)

```python
state_numeric: OrderStateNumeric = state.numeric(digits=2)
```

---

### Request All Open Orders - ib.reqAllOpenOrders()

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

This method is used to request all currently open orders. No specific version requirements are mentioned, but it's part of the order management features.

```python
ib.reqAllOpenOrders()
```

---

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

---

### Simulate Order Placement (What-If)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Retrieve commission and margin impact for an order without actually placing it. The original order remains unmodified. This method is blocking.

```python
ib.whatIfOrder(_contract_ , _order_)
```

---

### Specialized Contract Types Returned

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Starting from version 0.9.31, request results return specialized contract types (e.g., Stock) instead of generic Contract objects.

```python
Stock
```

---

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

---

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

---

### Create Bracket Order

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Create a limit order bracketed by take-profit and stop-loss orders. The resulting bracket order can be submitted using ib.placeOrder().

```python
ib.bracketOrder(_action_ , _quantity_ , _limitPrice_ , _takeProfitPrice_ , _stopLossPrice_ , _** kwargs_)
```

---

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

---

### Initialize IB Defaults

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Extracts default values for timezone, empty price, and empty size from the IBDefaults object for local use.

```python
self.defaultTimezone = self.defaults.timezone
        self.defaultEmptyPrice = self.defaults.emptyPrice
        self.defaultEmptySize = self.defaults.emptySize
```

---

### Format Code with Ruff

Source: https://ib-api-reloaded.github.io/ib_async/readme.html

Applies code formatting rules using ruff.

```bash
poetry run ruff format

```

---

### Request Account Summary

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Request and maintain live updates for account values across all accounts. It is recommended to use `accountSummary()` instead. This method is blocking until the summary is filled.

```python
ib.reqAccountSummary()
```

---

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

---

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

---

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

---

### Qualify Contracts Async

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously looks up contract details and returns matching Contract objects. If 'returnAll' is True, it returns a list of matching contracts for ambiguous requests instead of None.

```python
_async _qualifyContractsAsync(_* contracts_, _returnAll =False_)
```

---

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

---

### Set Connection Options - Client.setConnectOptions()

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Allows setting connection options, specifically mentioned for PACEAPI compatibility. This method was introduced in version 0.9.36.

```python
Client.setConnectOptions()
```

---

### Account Value Callbacks Added

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

New callbacks `accountValue` and `accountSummary` have been added for retrieving account-related information.

```python
accountValue
```

```python
accountSummary
```

---

### Register Live Subscription

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Registers a live subscription, associating a request ID with a subscriber and optionally a contract.

```python
def startSubscription(self, reqId, subscriber, contract=None):
        """Register a live subscription."""
        self._reqId2Contract[reqId] = contract
        self.reqId2Subscriber[reqId] = subscriber
```

---

### Documentation Moved to Readthedocs

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Documentation has been moved to readthedocs.org due to the cessation of rawgit.com's operation, as announced in version 0.9.47.

```none
readthedocs
```

---

### Account Values for Multiple Accounts

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

The `ib.accountValues()` function now supports use with multiple accounts.

```python
ib.accountValues()
```

---

### Request Account Updates

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Request and maintain live updates for account and portfolio values. This is typically called at startup and is blocking until initial data is received.

```python
ib.reqAccountUpdates(_account =''_)
```

---

### Handle Tick Request Parameters

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Stores minimum tick size, BBO exchange, and snapshot permissions for a given request ID.

```python
ticker.minTick = minTick
ticker.bboExchange = bboExchange
ticker.snapshotPermissions = snapshotPermissions
```

---

### Account Summary Async

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously retrieves account summary information. Can be filtered by account.

```python
_async _accountSummaryAsync(_account =''_)
```

---

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

---

### Open Order Callback

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Adds the `openOrder` callback for receiving open order information.

```python
openOrder
```

---

### Run Tests with Poetry

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Executes the project's tests using Poetry. This command ensures that all tests pass after making changes.

```bash
poetry run pytest
```

---

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

---

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

---

### Create Specialized Contract Dynamically

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Use the static `_create` method to dynamically instantiate a specialized contract based on provided keyword arguments, including `secType`. If `secType` is omitted, a general `Contract` is returned.

```python
Contract._create(**kwargs)
```

---

### Request Account Summary Async

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously requests account summary data. This function is typically used to initiate a stream of updates.

```python
reqAccountSummaryAsync()
```

---

### Format Code with Ruff

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Applies code formatting rules to the project using Ruff. This command ensures consistent code style.

```bash
poetry run ruff format
```

---

### Connect to TWS or Gateway

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Establishes a connection to the Interactive Brokers TWS or Gateway. Ensure TWS/Gateway is running and the API is enabled. Ports 7497 for TWS and 4001 for Gateway are common defaults.

```python
# Make sure TWS/Gateway is running and API is enabled
# Check that ports match (7497 for TWS, 4001 for Gateway)
ib.connect('127.0.0.1', 7497, clientId=1)  # TWS
ib.connect('127.0.0.1', 4001, clientId=1)  # Gateway
```

---

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

---

### Request Smart Components Async

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously requests smart component information for a given exchange. The purpose and return type are not fully detailed in the source.

```python
reqSmartComponentsAsync(_bboExchange_)
```

---

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

---

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

---

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

---

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

---

### Connection Refused Error

Source: https://ib-api-reloaded.github.io/ib_async/readme.html

Troubleshoot 'Connection Refused' errors by ensuring the IB Gateway or TWS application is running and API is enabled.

```python
# Make sure TWS/Gateway is running and API is enabled

```

---

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

---

### Account Download End

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Signals the completion of account value updates. Call this after all account value updates have been processed.

```python
def accountDownloadEnd(self, _account: str):
    # sent after updateAccountValue and updatePortfolio both finished
    self._endReq("accountValues")
```

---

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

---

### Request Matching Symbols Async

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously searches for contracts matching a given pattern. Returns a list of ContractDescription objects or None.

```python
_async _reqMatchingSymbolsAsync(_pattern_)
```

---

### Compatibility with ibapi v97.4

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Version 0.9.38 requires ibapi v97.4. Version 0.9.36 also mentions compatibility with ibapi v974.

```none
ibapi v97.4
```

```none
ibapi v974
```

---

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

---

### Perform Type Checking with Poetry

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Runs MyPy for static type checking on the `ib_async` library using Poetry. This helps catch type-related errors.

```bash
poetry run mypy ib_async
```

---

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

---

### Receive Financial Advisor Data

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Handles the reception of financial advisor data, typically used for account management and reporting.

```python
def receiveFA(self, _faDataType: int, faXmlData: str):
        self._endReq("requestFA", faXmlData)
```

---

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

---

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

---

### Request Fundamental Ratios

Source: https://ib-api-reloaded.github.io/ib_async/_sources/recipes.rst.txt

Requests market data for a stock contract and then prints the fundamental ratios available in the ticker object.

```python
contract = Stock('IBM', 'SMART', 'USD')
ticker = ib.reqMktData(contract, '258')
ib.sleep(2)
print(ticker.fundamentalRatios)
```

---

### Add util.tree Method

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Introduces the `util.tree()` method for displaying data structures in a tree format.

```python
util.tree()
```

---

### Client Management of Manual TWS Orders

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Clients with `clientId=0` can now manage manual TWS orders. Clients with a master clientId can monitor manual TWS orders.

```python
Client(clientId=0)
```

---

### Request Market Data - ib.reqMktData()

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

This method is used for requesting market data. In version 0.9.31, the 'isSmartDepth' parameter was added, and redundant bid/ask ticks were dropped from this request in version 0.9.42.

```python
ib.reqMktData
```

---

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

---

### Handle Smart Components Response

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Ends a request for smart components, passing the request ID and the received components.

```python
self._endReq(reqId, components)
```

---

### Request Security Definition Option Parameters Async

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously requests parameters for option chains, such as expirations and strikes, for a given underlying symbol and contract.

```python
reqSecDefOptParamsAsync(_underlyingSymbol_ , _futFopExchange_ , _underlyingSecType_ , _underlyingConId_)
```

---

### Request Multi-Account Updates

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Request and maintain live updates for account values across multiple accounts or models. It is recommended to use `accountValues()` instead.

```python
ib.reqAccountUpdatesMulti(_account =''_, _modelCode =''_)
```

---

### Account Summary

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Processes and stores account summary information, emitting an event upon receipt. Handles summary data for a specific account and tag.

```python
key = (account, tag, currency)
acctVal = AccountValue(account, tag, value, currency, "")
self.acctSummary[key] = acctVal
self.ib.accountSummaryEvent.emit(acctVal)
```

---

### Add setTimeout

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Introduces the `ib.setTimeout()` function for setting timeouts.

```python
ib.setTimeout()
```

---

### Handle User Info Request

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Completes a user info request. This function is called after user information has been retrieved.

```python
def userInfo(self, reqId: int, whiteBrandingId: str):
        self._endReq(reqId)
```

---

### Add ContFuture Class

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Introduces the `ContFuture` class for handling continuous futures contracts.

```python
ContFuture
```

---

### Request Scanner Parameters

Source: https://ib-api-reloaded.github.io/ib_async/_sources/recipes.rst.txt

Requests and prints all available parameters for the scanner functionality. This is a blocking call.

```python
allParams = ib.reqScannerParameters()
print(allParams)
```

---

### Run Tests with Pytest

Source: https://ib-api-reloaded.github.io/ib_async/readme.html

Executes the test suite using pytest.

```bash
poetry run pytest

```

---

### Request Tickers Async

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously requests ticker information for specified contracts. Supports requesting a regulatory snapshot.

```python
_async _reqTickersAsync(_* contracts_, _regulatorySnapshot =False_)
```

---

### Process News Providers

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Processes and returns a list of available news providers, creating new NewsProvider objects. This is typically called after requesting the list of news providers.

```python
def newsProviders(self, newsProviders: list[NewsProvider]):
        newsProviders = [NewsProvider(code=p.code, name=p.name) for p in newsProviders]
        self._endReq("newsProviders", newsProviders)
```

---

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

---

### Check Types with Poetry

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Perform static type checking on the ib_async library using MyPy via Poetry.

```bash
poetry run mypy ib_async

```

---

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

---

### Dividend Data Handling

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Improvements were made in version 0.9.39 to handle partially filled dividend data.

```python
dividend data
```

---

### Request Fundamental Data - Client.reqFundamentalData()

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

This method is used to request fundamental data. A fix was implemented in version 0.9.48.

```python
Client.reqFundamentalData
```

---

### Request News Bulletins

Source: https://ib-api-reloaded.github.io/ib_async/_sources/recipes.rst.txt

Enables the reception of news bulletins and prints the current list of bulletins after a short delay.

```python
ib.reqNewsBulletins(True)
ib.sleep(5)
print(ib.newsBulletins())
```

---

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

---

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

---

### Subscribe to Market Scanner - IB.scannerDataEvent

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

This event is emitted when market scanner data is received. In version 0.9.33, it was updated to emit the full list of ScanData. In version 0.9.31, IB.scannerDataEvent was added.

```python
IB.scannerDataEvent
```

---

### Profit and Loss Functionality

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Adds Profit and Loss (PnL) functionality to the library.

```python
PnL
```

---

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

---

### Order Error Handling Fix

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

A fix related to order error handling was implemented in version 0.9.26.

```none
order error handling
```

---

### What-If Order Async

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously calculates the potential state of an order without submitting it. Requires a contract and an order object.

```python
whatIfOrderAsync(_contract_ , _order_)
```

---

### Handle News Bulletin Event

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Processes incoming news bulletins and stores them. Emits a news bulletin event for further processing.

```python
def receiveNewsBulletin(self, msgId: int, msgType: int, message: str, origExchange: str):
        bulletin = NewsBulletin(msgId, msgType, message, origExchange)
        self.msgId2NewsBulletin[msgId] = bulletin
        self.ib.newsBulletinEvent.emit(bulletin)
```

---

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

---

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

---

### Schedule Task - util.schedule()

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Utility for scheduling tasks. In version 0.9.28, it was updated to accept tz-aware datetimes.

```python
util.schedule()
```

---

### Update Market Depth (Simplified)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

A simplified method to update market depth, calling the L2 update function with default parameters.

```python
self.updateMktDepthL2(reqId, position, "", operation, side, price, size)
```

---

### Flake8-compliant Code Formatting

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Version 0.9.31 notes extensive documentation overhaul and flake8-compliant code formatting.

```python
flake8
```

---

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

---

### Request Completed Orders - ib.reqCompletedOrders()

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Use this method to request completed orders. Requires TWS/gateway version 976 or higher. Completed orders are automatically synced upon connection and include fill and commission information.

```python
ib.reqCompletedOrders()
```

---

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

---

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

---

### Calculate Option Price Async

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously calculates the theoretical price of an option contract. Requires contract details, volatility, and underlying price.

```python
_async _calculateOptionPriceAsync(_contract_ , _volatility_ , _underPrice_ , _optPrcOptions =[]_)
```

---

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

---

### Request Ticker Snapshot

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Request a snapshot of tickers for specified contracts. This method is blocking and returns when all tickers are ready. Ensure contracts have been previously requested with reqMktData.

```python
ib.reqTickers(_* contracts_, _regulatorySnapshot =False_)
```

---

### Fix ib.schedule

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

A fix has been implemented for the `ib.schedule()` function.

```python
ib.schedule()
```

---

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

---

### Handle Soft Dollar Tiers

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Placeholder function for handling soft dollar tiers. Currently, no action is taken upon receiving this data.

```python
def softDollarTiers(self, reqId: int, tiers: list[SoftDollarTier]):
        pass
```

---

### Handle Market Depth Exchanges Response

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Ends a request for market depth exchanges, passing a fixed identifier and the list of descriptions.

```python
self._endReq("mktDepthExchanges", depthMktDataDescriptions)
```

---

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

---

### Ticker.rtVolume Added

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

The `Ticker` object now includes a `rtVolume` attribute for real-time volume.

```python
Ticker.rtVolume
```

---

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

---

### Fixed Conditional Orders

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

A fix has been implemented for handling conditional orders.

```python
conditional orders
```

---

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

---

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

---

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

---

### Ticker.avVolume Handling Fixed

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Fixed handling for the `ticker.avVolume` attribute.

```python
ticker.avVolume
```

---

### Fix PnLSingle Request

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

A fix has been implemented for the `ib.reqPnLSingle()` function.

```python
ib.reqPnLSingle()
```

---

### Request Scanner Parameters Async

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously retrieves the available parameters for scanner subscriptions.

```python
reqScannerParametersAsync()
```

---

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

---

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

---

### Handle Contract Details

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Stores contract details received for a given request ID. Use when detailed contract information is required.

```python
def contractDetails(self, reqId: int, contractDetails: ContractDetails):
        self._results[reqId].append(contractDetails)

bondContractDetails = contractDetails
```

---

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

---

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

---

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

---

### Handle Client ID Conflicts

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Each connection to the IB API must have a unique client ID. Use different numbers for multiple simultaneous connections to avoid conflicts.

```python
# Each connection needs a unique client ID
ib.connect('127.0.0.1', 7497, clientId=1)  # Use different numbers for multiple connections
```

---

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

---

### Market Scanner Subscription Improvement

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Market scanner subscriptions were improved in version 0.9.33.

```python
Market scanner subscription
```

---

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

---

### Request Market Rule Async

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously retrieves details about a specific market rule by its ID. Returns a list of PriceIncrement objects or None.

```python
_async _reqMarketRuleAsync(_marketRuleId_)
```

---

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

---

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

---

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

---

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

---

### Request Positions Async

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously retrieves current position data.

```python
reqPositionsAsync()
```

---

### Account Management - Managed Accounts

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Parses a comma-separated string of account IDs and stores them in the accounts list.

```python
def managedAccounts(self, accountsList: str):
        self.accounts = [a for a in accountsList.split(",") if a]
```

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

### Request Market Rule

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Introduces the `reqMarketRule` function for requesting market rule information.

```python
ib.reqMarketRule()
```

---

### Request Head Timestamp Async

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously retrieves the timestamp of the first available data point for a contract, based on specified data type and trading hours.

```python
_async _reqHeadTimeStampAsync(_contract_ , _whatToShow_ , _useRTH_ , _formatDate_)
```

---

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

---

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

---

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

---

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

---

### News Bulletin Event - IB.newsBulletinEvent

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

The IB.newsBulletinEvent was added in version 0.9.35 to provide access to news bulletins.

```python
IB.newsBulletinEvent
```

---

### Patch Asyncio - util.patchAsyncio()

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Utility to patch asyncio for compatibility. Updated for Python 3.7 in version 0.9.29.

```python
util.patchAsyncio()
```

---

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

---

### Handle WSH Metadata Event

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Emits a WSH metadata event with the provided JSON data. Used for receiving metadata related to Watchlist Streaming.

```python
def wshMetaData(self, reqId: int, dataJson: str):
        self.ib.wshMetaEvent.emit(dataJson)
        self._endReq(reqId, dataJson)
```

---

### Autocompletion Working Again

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Autocompletion support, particularly for Jedi plugin in IDEs like Spyder and VS Code, was restored in version 0.9.32.

```python
Autocompletion
```

---

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

---

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

---

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

---

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

---

### Wait for Any Event - Event.any()

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

This method waits for any of the specified events to occur. It was added in version 0.9.44.

```python
Event.any()
```

---

### ibapi Package No Longer Needed

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

As of version 0.9.47, the 'ibapi' package from IB is no longer required, as ib_async now handles its own socket protocol encoding and decoding.

```python
ibapi
```
