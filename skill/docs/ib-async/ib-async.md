### Development Environment Setup

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Commands to install Poetry and set up the development environment, including optional dependencies for documentation and testing.

```bash
pip install poetry -U
poetry install
poetry install --with=docs,dev
```

--------------------------------

### Install All Dependencies with Poetry

Source: https://ib-api-reloaded.github.io/ib_async/readme.html

Installs all project dependencies, including those required for development and documentation generation, using `poetry`. This command ensures that all necessary packages are available for local setup.

```bash
poetry install --with=dev,docs

```

--------------------------------

### Launch TWS/Gateway using IBC

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ibcontroller.html

Initializes the IBC controller with specific version and account credentials, then starts the application process. This example demonstrates the standard setup for a live gateway session.

```python
ibc = IBC(976, gateway=True, tradingMode='live',
    userid='edemo', password='demouser')
ibc.start()
IB.run()
```

--------------------------------

### Install ib_async Library

Source: https://ib-api-reloaded.github.io/ib_async/readme.html

Standard installation command for the ib_async library using pip.

```bash
pip install ib_async
```

--------------------------------

### Installing ib_async Dependencies with Poetry

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Instructions for installing all necessary dependencies for ib_async, including those for development and documentation, using Poetry.

```bash
poetry install --with=dev,docs
```

--------------------------------

### Bracket Order Setup (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Initiates the setup for a bracket order. This typically involves specifying the action (buy/sell), quantity, and potentially other parameters for the primary order and its associated stop-limit and take-profit orders.

```python
def bracketOrder(
    self,
    action: str,
    quantity: float,

```

--------------------------------

### Install Development Dependencies with Poetry

Source: https://ib-api-reloaded.github.io/ib_async/readme.html

This command installs the necessary dependencies for developing the `ib_async` library, including development and testing tools. It uses `poetry`, a dependency management tool, to ensure a consistent development environment.

```bash
poetry install --with=dev

```

--------------------------------

### Initialize and Start TWS/Gateway with IBC

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Initializes the IBC controller with specified parameters and starts the TWS or Gateway application. Requires user credentials and trading mode. On Windows, an asyncio ProactorEventLoop must be set.

```python
import asyncio
asyncio.set_event_loop(asyncio.ProactorEventLoop())

from ib_async import IBC

ibc = IBC(976, gateway=True, tradingMode='live',
    userid='edemo', password='demouser')
ibc.start()
IB.run()
```

--------------------------------

### Jupyter Notebook ib-async Usage

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Provides the setup for using ib-async within a Jupyter Notebook environment. It requires starting the event loop using `util.startLoop()` and does not need `ib.run()`.

```python
from ib_async import *
util.startLoop()  # Required for notebooks

ib = IB()
ib.connect('127.0.0.1', 7497, clientId=1)
# Your code here - no need to call ib.run()
```

--------------------------------

### Manage Development Environment with Poetry

Source: https://ib-api-reloaded.github.io/ib_async/readme.html

Commands to install dependencies, build documentation, and manage the project environment using Poetry.

```bash
pip install poetry -U
poetry install
poetry install --with=docs,dev
poetry install --with=docs
poetry run sphinx-build -b html docs html
```

--------------------------------

### Troubleshoot Connection Issues

Source: https://ib-api-reloaded.github.io/ib_async/readme.html

Example check for connection issues when interacting with the IB Gateway or TWS.

```python
# Make sure TWS/Gateway is running and API is enabled
```

--------------------------------

### POST /reqPnL

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Starts a live subscription for profit and loss events for a specific account.

```APIDOC
## POST /reqPnL

### Description
Start a subscription for profit and loss events. Returns a PnL object that is kept live updated.

### Method
POST

### Endpoint
/reqPnL

### Parameters
#### Query Parameters
- **account** (str) - Required - The account ID to subscribe to.
- **modelCode** (str) - Optional - Filter for a specific account model.

### Response
#### Success Response (200)
- **pnl** (PnL) - A live-updated PnL object.

#### Response Example
{
  "dailyPnL": 150.50,
  "unrealizedPnL": 20.00
}
```

--------------------------------

### Get Account Summary Information

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Retrieves and prints the account summary details. It first gets the managed accounts and then fetches the summary for the first account. Requires an active connection.

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

### Basic Connection and Disconnection

Source: https://ib-api-reloaded.github.io/ib_async/index.html

A simple example demonstrating how to establish a connection to IB TWS or Gateway and then disconnect. This is the most basic usage pattern for the library.

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

### Running Tests with Poetry

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Instructions for running tests within the ib_async project using Poetry. It includes installing development dependencies and executing the pytest command.

```bash
poetry install --with=dev
poetry run pytest
```

--------------------------------

### Initialize IB Async Event System

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Demonstrates the initialization of the IB Async client, including the setup of internal events and the wrapper connection. It shows how the class structure manages event registration and client communication.

```python
import logging

class IBAsync:
    def __init__(self, defaults=None):
        self._createEvents()
        self.wrapper = Wrapper(self, defaults=defaults)
        self.client = Client(self.wrapper)
        self.errorEvent += self._onError
        self.client.apiEnd += self.disconnectedEvent
        self._logger = logging.getLogger("ib_async.ib")

    def _createEvents(self):
        self.connectedEvent = Event("connectedEvent")
        self.disconnectedEvent = Event("disconnectedEvent")
        self.updateEvent = Event("updateEvent")
```

--------------------------------

### Request Historical Data

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Fetches historical market data for a specified contract. This example requests hourly midpoint data for EURUSD for the last 30 days and converts it into a pandas DataFrame. Ensure pandas is installed.

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
```

--------------------------------

### Define Financial Contract Dataclasses in Python

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Examples of initializing various financial contract types such as Stock, Option, Future, and Continuous Future using the ib_async library.

```python
from ib_async.contract import Stock, Option, Future, ContFuture

stock = Stock(symbol='AAPL', exchange='SMART', currency='USD')
option = Option(symbol='AAPL', lastTradeDateOrContractMonth='20231215', strike=150.0, right='C')
future = Future(symbol='ES', lastTradeDateOrContractMonth='202312', exchange='GLOBEX')
cont_future = ContFuture(symbol='ES', exchange='GLOBEX')
```

--------------------------------

### Retrieve Account and Market Data

Source: https://ib-api-reloaded.github.io/ib_async/readme.html

Examples for fetching account summaries, historical market data, and live market data updates. Historical data can be converted into pandas DataFrames for analysis.

```python
# Account Summary
account = ib.managedAccounts()[0]
summary = ib.accountSummary(account)

# Historical Data
contract = Forex('EURUSD')
bars = ib.reqHistoricalData(contract, endDateTime='', durationStr='30 D', barSizeSetting='1 hour', whatToShow='MIDPOINT', useRTH=True)
df = util.df(bars)

# Live Market Data
ticker = ib.reqMktData(Stock('AAPL', 'SMART', 'USD'), '', False, False)
```

--------------------------------

### Example Dataclass Definition: TickAttribBidAsk

Source: https://ib-api-reloaded.github.io/ib_async/api.html

An example of a specific ib_async object structure. It demonstrates how standard dataclass fields are defined with default values.

```python
from dataclasses import dataclass

@dataclass
class TickAttribBidAsk:
    bidPastLow: bool = False
    askPastHigh: bool = False
```

--------------------------------

### Option Chain and Exercise

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Functions for retrieving option chains and exercising options. `reqSecDefOptParams` gets the option chain for a given underlying, and `exerciseOptions` allows for exercising or letting options lapse. Both are blocking.

```python
def reqSecDefOptParams(_underlyingSymbol_ , _futFopExchange_ , _underlyingSecType_ , _underlyingConId_):
    """
    Get the option chain.
    This method is blocking.
    https://interactivebrokers.github.io/tws-api/options.html 

    Parameters:
        underlyingSymbol (str): Symbol of underlier contract.
        futFopExchange (str): Exchange (only for `FuturesOption`, otherwise leave blank).
        underlyingSecType (str): The type of the underlying security, like ‘STK’ or ‘FUT’.
        underlyingConId (int): conId of the underlying contract.
    Return type:
        list[OptionChain]
    """
    pass

def exerciseOptions(_contract_ , _exerciseAction_ , _exerciseQuantity_ , _account_ , _override_):
    """
    Exercise an options contract.
    https://interactivebrokers.github.io/tws-api/options.html 

    Parameters:
        contract (Contract): The option contract to be exercised.
        exerciseAction (int):
            * 1 = exercise the option
            * 2 = let the option lapse
        exerciseQuantity (int): Number of contracts to be exercised.
        account (str): Destination account.
        override (int):
    """
    pass
```

--------------------------------

### Get All Orders (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves a list of all orders placed during the current session. This includes both open and closed orders.

```python
def orders(self) -> list[Order]:
    """List of all orders from this session."""
    return list(trade.order for trade in self.wrapper.trades.values())
```

--------------------------------

### GET /account/summary

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Retrieves account-related data including values, portfolio items, and positions.

```APIDOC
## GET /account/summary

### Description
Retrieves a list of account values, portfolio items, or positions. Can be filtered by account name.

### Method
GET

### Parameters
#### Query Parameters
- **account** (string) - Optional - The account name to filter by.

### Response
#### Success Response (200)
- **data** (list) - List of AccountValue, PortfolioItem, or Position objects.

### Response Example
{
  "data": [{"account": "U123456", "value": 1000.0}]
}
```

--------------------------------

### Get Account List

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Fetches a list of account names managed by the connected IB client.

```python
accounts = client.getAccounts()
```

--------------------------------

### Defining Order Types

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Examples of initializing various order types within the ib-async framework. These classes inherit from base structures to provide specific trading functionality like Limit, Market, and Stop orders.

```python
from ib_async.order import LimitOrder, MarketOrder, StopOrder, StopLimitOrder

# Initialize a Limit Order
limit_order = LimitOrder(action='BUY', totalQuantity=100, lmtPrice=150.0)

# Initialize a Market Order
market_order = MarketOrder(action='SELL', totalQuantity=50)

# Initialize a Stop Order
stop_order = StopOrder(action='BUY', totalQuantity=100, stopPrice=155.0)

# Initialize a Stop Limit Order
stop_limit_order = StopLimitOrder(action='BUY', totalQuantity=100, lmtPrice=150.0, stopPrice=155.0)
```

--------------------------------

### GET /scanner-data

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Performs a market scan based on provided subscription filters.

```APIDOC
## GET /scanner-data

### Description
Executes a blocking market scan by starting a subscription and returning the initial result set.

### Method
GET

### Endpoint
/scanner-data

### Parameters
#### Query Parameters
- **subscription** (ScannerSubscription) - Required - Basic scan filters.
- **scannerSubscriptionOptions** (list) - Optional - Generic options.

### Response
#### Success Response (200)
- **results** (ScanDataList) - List of scan results.

### Response Example
{
  "results": [{"symbol": "AAPL", "change": "+1.2%"}]
}
```

--------------------------------

### Event Handling in ib_async (Order and Ticker Updates)

Source: https://ib-api-reloaded.github.io/ib_async/readme.html

Demonstrates how to subscribe to and handle events in `ib_async`. This includes setting up callback functions for order status updates and real-time ticker data. The examples show both standard function callbacks and asynchronous event handlers.

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

### Manage market scanner data with Python

Source: https://ib-api-reloaded.github.io/ib_async/_sources/recipes.rst.txt

Shows both blocking and streaming approaches to retrieve market scanner data. The streaming example uses an event-driven pattern to handle updates.

```python
# Blocking
allParams = ib.reqScannerParameters()
sub = ScannerSubscription(
    instrument='FUT.US',
    locationCode='FUT.GLOBEX',
    scanCode='TOP_PERC_GAIN')
scanData = ib.reqScannerData(sub)
print(scanData)

# Streaming
def onScanData(scanData):
    print(scanData[0])

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

### TradingSession

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Defines a trading session with a start and end time.

```APIDOC
## Class: TradingSession

### Description
Represents a trading session with a defined start and end time.

### Fields
- **start** (datetime) - The start time of the trading session.
- **end** (datetime) - The end time of the trading session.

### Methods
- **__init__(start, end)**: Creates a new instance of TradingSession.

```

--------------------------------

### Error Handling for ib_async Connection

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Provides an example of how to implement error handling when connecting to the TWS or Gateway using ib_async. It specifically catches ConnectionRefusedError if the TWS/Gateway is not running or API is not enabled, and a general Exception for other connection issues.

```python
try:
    ib.connect('127.0.0.1', 7497, clientId=1)
except ConnectionRefusedError:
    print("TWS/Gateway not running or API not enabled")
except Exception as e:
    print(f"Connection error: {e}")
```

--------------------------------

### GET /reqContractDetails

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Retrieves detailed information for a specific contract.

```APIDOC
## GET /reqContractDetails

### Description
Get a list of contract details that match the given contract. If the list is empty, the contract is unknown.

### Method
GET

### Endpoint
/reqContractDetails

### Parameters
#### Request Body
- **contract** (Contract) - Required - The contract object to query.

### Response
#### Success Response (200)
- **details** (list[ContractDetails]) - A list of matching contract details.

#### Response Example
[
  { "symbol": "AAPL", "secType": "STK", "exchange": "SMART" }
]
```

--------------------------------

### Get Open Orders (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves a list of all currently open orders. Orders are considered open if their status is not in the 'DoneStates'.

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

### HistoricalSession Object

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents a historical trading session with start and end times.

```APIDOC
## HistoricalSession Object

### Description
Represents a historical trading session with start and end times.

### Class Definition
`ib_async.objects.HistoricalSession(startDateTime='', endDateTime='', refDate='')`

### Fields
- **startDateTime** (`str`, optional) - The start date and time of the session. Defaults to ''.
- **endDateTime** (`str`, optional) - The end date and time of the session. Defaults to ''.
- **refDate** (`str`, optional) - The reference date for the session. Defaults to ''.

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

--------------------------------

### Get All Trades (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves a list of all order trades from the current session. This includes both open and closed trades.

```python
def trades(self) -> list[Trade]:
    """List of all order trades from this session."""
    return list(self.wrapper.trades.values())
```

--------------------------------

### Time-Based Bar Aggregation (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ticker.html

Implements the aggregation of ticks into time-based bars. It uses a timer event to determine when a new bar should start. The `on_source` method updates the current bar with incoming tick data, and `_on_timer` finalizes the previous bar and starts a new one.

```python
class TimeBars(Op):
    __slots__ = (
        "_timer",
        "bars",
    )
    __doc__ = Tickfilter.timebars.__doc__

    bars: BarList

    def __init__(self, timer, source=None):
        Op.__init__(self, source)
        self._timer = timer
        self._timer.connect(self._on_timer, None, self._on_timer_done)
        self.bars = BarList()



    def on_source(self, time, price, size):
        if not self.bars:
            return
        bar = self.bars[-1]

        if isNan(bar.open):
            bar.open = bar.high = bar.low = price

        bar.high = max(bar.high, price)
        bar.low = min(bar.low, price)
        bar.close = price
        bar.volume += size
        bar.count += 1
        self.bars.updateEvent.emit(self.bars, False)


    def _on_timer(self, time):
        if self.bars:
            bar = self.bars[-1]
            if isNan(bar.close) and len(self.bars) > 1:
                bar.open = bar.high = bar.low = bar.close = self.bars[-2].close

            self.bars.updateEvent.emit(self.bars, True)
            self.emit(bar)

        self.bars.append(Bar(time))

    def _on_timer_done(self, timer):
        self._timer = None
        self.set_done()
```

--------------------------------

### Get News Bulletins (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves a list of Interactive Brokers news bulletins. These are official announcements and updates from IB.

```python
def newsBulletins(self) -> list[NewsBulletin]:
    """List of IB news bulletins."""
    return list(self.wrapper.msgId2NewsBulletin.values())
```

--------------------------------

### Place a Simple Market Order

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Demonstrates how to place a market order to buy 100 shares of AAPL. It includes placing the order and monitoring its status until it's completed.

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

### Time Range Iterator

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

An iterator that yields datetime objects at specified intervals between a start and end time. It ensures that the iteration starts from the current time or later and waits until each specified time point is reached.

```python
[docs]
def timeRange(start: Time_t, end: Time_t, step: float) -> Iterator[dt.datetime]:
    """
    Iterator that waits periodically until certain time points are
    reached while yielding those time points.

    Args:
        start: Start time, can be specified as datetime.datetime,
            or as datetime.time in which case today is used as the date
        end: End time, can be specified as datetime.datetime,
            or as datetime.time in which case today is used as the date
        step (float): The number of seconds of each period
    """
    assert step > 0
    delta = dt.timedelta(seconds=step)
    t = _fillDate(start)
    tz = dt.timezone.utc if t.tzinfo else None
    now = dt.datetime.now(tz)
    while t < now:
        t += delta

    while t <= _fillDate(end):
        waitUntil(t)
        yield t
        t += delta
```

--------------------------------

### GET /fundamental-data

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Requests fundamental data reports for a specific contract.

```APIDOC
## GET /fundamental-data

### Description
Retrieves fundamental data such as financial statements or reports for a contract.

### Method
GET

### Parameters
#### Request Body
- **contract** (Contract) - Required - The financial instrument contract.
- **reportType** (str) - Required - The type of fundamental report (e.g., 'FinancialSummary').

### Response
#### Success Response (200)
- **data** (str) - The fundamental data in XML or string format.
```

--------------------------------

### GET /trades/orders

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Retrieves lists of trades, orders, and execution data for the current session.

```APIDOC
## GET /trades/orders

### Description
Fetches all trades, open trades, orders, open orders, fills, or executions associated with the current session.

### Method
GET

### Response
#### Success Response (200)
- **items** (list) - List of Trade, Order, Fill, or Execution objects.

### Response Example
{
  "items": [{"orderId": 1, "status": "Filled"}]
}
```

--------------------------------

### GET /reqOpenOrders

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Requests and returns a list of open orders. Note that this method is blocking and may return stale information.

```APIDOC
## GET /reqOpenOrders

### Description
Request and return a list of open orders. It is recommended to use `openTrades()` or `openOrders()` instead for faster, more reliable data.

### Method
GET

### Endpoint
/reqOpenOrders

### Response
#### Success Response (200)
- **orders** (list[Trade]) - A list of currently open trade objects.

#### Response Example
[
  { "orderId": 123, "status": "Submitted" }
]
```

--------------------------------

### Get Real-time Bars (Python)

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

### GET /market-depth

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Subscribe to real-time market depth (L2/Order Book) data for a specific contract.

```APIDOC
## GET /market-depth

### Description
Subscribe to market depth data (DOM) for a given contract. Returns a Ticker object containing bids, asks, and depth ticks.

### Method
GET

### Endpoint
/market-depth

### Parameters
#### Query Parameters
- **contract** (Contract) - Required - The contract of interest.
- **numRows** (int) - Optional - Number of depth levels (max 5).
- **isSmartDepth** (bool) - Optional - Consolidate order book across exchanges.

### Response
#### Success Response (200)
- **Ticker** (Object) - Ticker object containing domBids, domAsks, and domTicks.

### Response Example
{
  "ticker": "TickerObject",
  "domBids": [],
  "domAsks": []
}
```

--------------------------------

### GET /fundamental-data

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves fundamental financial data for a contract in XML format.

```APIDOC
## GET /fundamental-data

### Description
Fetches fundamental data reports such as financial summaries, ownership, or statements for a specific contract.

### Method
GET

### Endpoint
/fundamental-data

### Parameters
#### Query Parameters
- **contract** (Contract) - Required - The contract to query.
- **reportType** (string) - Required - Type of report (e.g., 'ReportsFinSummary', 'ReportsOwnership', 'ReportSnapshot').

### Response
#### Success Response (200)
- **data** (string) - XML formatted fundamental data.

### Response Example
{
  "data": "<xml>...</xml>"
}
```

--------------------------------

### GET /isConnected

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Checks the current status of the API connection to the TWS or IB Gateway.

```APIDOC
## GET /isConnected

### Description
Returns a boolean indicating whether the client is currently connected to the TWS or IB Gateway.

### Method
GET

### Endpoint
/isConnected

### Response
#### Success Response (200)
- **connected** (bool) - True if connected, false otherwise
```

--------------------------------

### Timing Context Manager

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

A context manager for timing code execution. It records the start time upon entering the context and prints the elapsed time (formatted with SI prefixes) upon exiting.

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

### Integrate IB API with PyQt5/PySide2 for Real-time Data and Requests

Source: https://ib-api-reloaded.github.io/ib_async/recipes.html

Shows how to integrate IB API's real-time streaming and synchronous requests within a single-threaded Qt application using PyQt5 or PySide2. It ensures the UI remains responsive during API calls, such as qualifying contracts to get unique identifiers.

```python
# Example assumes PyQt5 is installed and configured.
# For PySide2, uncomment the relevant lines.

# import PyQt5.QtWidgets as QtWidgets
# import PyQt5.QtCore as QtCore
# import ib_async as ib
# import util

# util.useQt(util.PYQT5)

# class TickerTable(QtWidgets.QWidget):
#     def __init__(self):
#         super().__init__()
#         self.ib = ib.IB()
#         self.ib.connect()
#         self.initUI()

#     def initUI(self):
#         # ... UI setup ...
#         contract = ib.Stock('IBM', 'SMART', 'USD')
#         self.ticker = self.ib.reqMktData(contract)
#         self.ticker.updateEvent += self.onTicker

#     def onTicker(self, ticker):
#         # ... update UI with ticker data ...
#         pass

#     def closeEvent(self, event):
#         self.ib.disconnect()
#         event.accept()

# if __name__ == '__main__':
#     app = QtWidgets.QApplication([])
#     table = TickerTable()
#     table.show()
#     app.exec_()
```

--------------------------------

### Get All Tickers (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves a list of all available ticker objects. This includes tickers for all contracts for which market data has been requested.

```python
def tickers(self) -> list[Ticker]:
    """Get a list of all tickers."""
    return list(self.wrapper.tickers.values())
```

--------------------------------

### Package Build and Distribution

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Commands for building the library package and publishing it to PyPI.

```bash
poetry build
poetry install
poetry config pypi-token.pypi your-api-token
poetry publish --build
```

--------------------------------

### Error Handling for IBKR API Connection

Source: https://ib-api-reloaded.github.io/ib_async/readme.html

Provides a Python example for robustly handling potential connection errors when establishing a connection to the Interactive Brokers TWS or Gateway API using `ib_async`. It specifically catches `ConnectionRefusedError` and general exceptions.

```python
try:
    ib.connect('127.0.0.1', 7497, clientId=1)
except ConnectionRefusedError:
    print("TWS/Gateway not running or API not enabled")
except Exception as e:
    print(f"Connection error: {e}")

```

--------------------------------

### Order Placement and Portfolio Management

Source: https://ib-api-reloaded.github.io/ib_async/readme.html

Covers placing simple market orders, monitoring order status, and managing complex bracket orders. Also includes snippets for retrieving current positions and open trades.

```python
# Simple Order
order = MarketOrder('BUY', 100)
trade = ib.placeOrder(Stock('AAPL', 'SMART', 'USD'), order)

# Portfolio Monitoring
positions = ib.positions()
orders = ib.openTrades()

# Real-time P&L
pnl = ib.reqPnL(account)
pnl.updateEvent += onPnL
```

--------------------------------

### GET /historical-data

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Requests historical bar data for a specific contract asynchronously.

```APIDOC
## GET /historical-data

### Description
Retrieves historical bar data for a given contract. Supports real-time updates via the keepUpToDate flag.

### Method
GET

### Parameters
#### Request Body
- **contract** (Contract) - Required - The financial instrument contract.
- **endDateTime** (str) - Required - The end date and time for the data.
- **durationStr** (str) - Required - The duration of the data (e.g., '1 D').
- **barSizeSetting** (str) - Required - The size of the bars (e.g., '1 min').
- **whatToShow** (str) - Required - Type of data (e.g., 'TRADES').
- **useRTH** (bool) - Required - Use Regular Trading Hours.
- **keepUpToDate** (bool) - Optional - Whether to subscribe to real-time updates.

### Response
#### Success Response (200)
- **BarDataList** (object) - A list containing the requested historical bars.
```

--------------------------------

### Get All Executions (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves a list of all executions from the current session. An execution is the result of a fill and contains details about the trade.

```python
def executions(self) -> list[Execution]:
    """List of all executions from this session."""
    return list(fill.execution for fill in self.wrapper.fills.values())
```

--------------------------------

### Get All Fills (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves a list of all completed fills (executions) from the current session. A fill represents a partially or fully executed order.

```python
def fills(self) -> list[Fill]:
    """List of all fills from this session."""
    return list(self.wrapper.fills.values())
```

--------------------------------

### Initialize IB Async Client

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Instantiates the IB Async Client, replacing the standard EClient. It allows configuration of request throttling and client version compatibility.

```python
from ib_async import client

client = client.Client(wrapper=None, MaxRequests=45, RequestsInterval=1, MinClientVersion=157, MaxClientVersion=178)
```

--------------------------------

### ConnectionStats Data Structure

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Provides statistics about an API connection, including start time, duration, and message/byte counts.

```APIDOC
## ConnectionStats Data Structure

### Description
Provides statistics about an API connection, including start time, duration, and message/byte counts.

### Fields
- **startTime** (string) - The start time of the connection.
- **duration** (integer) - The duration of the connection in seconds.
- **numBytesRecv** (integer) - The total number of bytes received.
- **numBytesSent** (integer) - The total number of bytes sent.
- **numMsgRecv** (integer) - The total number of messages received.
- **numMsgSent** (integer) - The total number of messages sent.
```

--------------------------------

### Get Open Trades (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves a list of all currently open order trades. Trades are considered open if their status is not in the 'DoneStates'.

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

### GET /historical-ticks

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Requests historical tick data for a specific contract within a time range.

```APIDOC
## GET /historical-ticks

### Description
Fetches historical tick data for a contract between two timestamps.

### Method
GET

### Parameters
#### Request Body
- **contract** (Contract) - Required - The financial instrument contract.
- **startDateTime** (str) - Required - Start time.
- **endDateTime** (str) - Required - End time.
- **numberOfTicks** (int) - Required - Number of ticks to retrieve.
- **whatToShow** (str) - Required - Type of tick data.

### Response
#### Success Response (200)
- **list** (array) - A list of historical tick objects.
```

--------------------------------

### Get Request ID

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Retrieves a unique identifier for new requests to the IB API. This is automatically managed by the client.

```python
req_id = client.getReqId()
```

--------------------------------

### Run the asyncio event loop

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Starts the asyncio event loop to manage asynchronous operations. This method should be called after connecting the client to allow it to process network events and requests.

```python
client.run()
```

--------------------------------

### Place Bracket Order using ib_async

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Demonstrates how to place a bracket order, which includes a primary order along with a take-profit and stop-loss order. This is achieved by creating individual order objects and then placing them using the ib.placeOrder() method. The function returns a list of placed orders.

```python
from ib_async import * 

ib = IB()
ib.connect('127.0.0.1', 7497, clientId=1)

# Assume contract, parent, and stopLoss are defined elsewhere
# contract = Stock('SPY', 'SMART', 'USD')
# parent = MarketOrder('BUY', 100)
# stopLoss = StopOrder('SELL', 100, 100.00)

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

### Clone ib-async Repository

Source: https://ib-api-reloaded.github.io/ib_async/readme.html

Clones the `ib_async` project repository from GitHub to your local machine. This is the first step in setting up the project for local development.

```bash
git clone https://github.com/ib-api-reloaded/ib_async.git
cd ib_async

```

--------------------------------

### Get Pending Tickers (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves a list of tickers that have pending updates, including those with pending ticks or depth of market (DOM) ticks.

```python
def pendingTickers(self) -> list[Ticker]:
    """Get a list of all tickers that have pending ticks or domTicks."""
    return list(self.wrapper.pendingTickers)
```

--------------------------------

### Get Asyncio Event Loop

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Retrieves the current asyncio event loop, providing a robust fallback mechanism. It first attempts to get the running loop, then falls back to the thread's current loop via the policy, and finally creates a new loop if necessary. This function is designed for synchronous contexts or when the loop status is uncertain.

```python
[docs]
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

### Initialize an Order object

Source: https://ib-api-reloaded.github.io/ib_async/api.html

This snippet demonstrates how to instantiate the Order class. It highlights the extensive list of parameters available for configuring specific trading behaviors, such as limit prices, order types, and time-in-force settings.

```python
from ib_async import Order

# Create a basic limit order
order = Order(
    action='BUY',
    totalQuantity=100,
    orderType='LMT',
    lmtPrice=150.50,
    tif='DAY'
)

# Accessing order attributes
print(f"Order Type: {order.orderType}")
print(f"Quantity: {order.totalQuantity}")
```

--------------------------------

### Documentation and Quality Assurance

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Commands for generating project documentation using Sphinx and performing static type checking with mypy.

```bash
poetry install --with=docs
poetry run sphinx-build -b html docs html
poetry run mypy ib_async
```

--------------------------------

### Forex Contract Initialization (ib_async.contract)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Initializes a Forex contract object. Parameters include pair, exchange, symbol, and currency. The `pair` parameter is a shortcut for `symbol` and `currency`. Additional keyword arguments can be passed.

```python
from ib_async.contract import Forex

forex = Forex(pair='EURUSD', exchange='IDEALPRO', symbol='EUR', currency='USD')
```

--------------------------------

### Python: Set Connection Options

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Allows setting additional connection options as a string. These options are encoded and used during the connection handshake. An example provided is '+PACEAPI' for enabling request pacing in newer TWS/Gateway versions.

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

### Index Contract Initialization (ib_async.contract)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Initializes an Index contract object. Parameters include symbol, exchange, and currency. Additional keyword arguments can be passed.

```python
from ib_async.contract import Index

index = Index(symbol='SPX', exchange='SMART', currency='USD')
```

--------------------------------

### Get Non-Default Fields of IBC Dataclass

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Retrieves and returns a dictionary containing only the fields of the IBC dataclass instance that have been modified from their default values.

```python
non_default_fields = ibc.nonDefaults()
```

--------------------------------

### Request Head Timestamp

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves the earliest available historical data timestamp for a specific contract. Useful for determining the start of available data history.

```python
def reqHeadTimeStamp(self, contract: Contract, whatToShow: str, useRTH: bool, formatDate: int = 1) -> datetime.datetime:
	return self._run(
		self.reqHeadTimeStampAsync(contract, whatToShow, useRTH, formatDate)
	)
```

--------------------------------

### Get Non-Default Dataclass Fields

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Retrieves fields from a dataclass instance that differ from their default values, returning them as a dictionary. This is useful for identifying changed attributes.

```python
from ib_async.objects import IBDefaults

def nonDefaults(self):
    """
    For a `dataclass` instance get the fields that are different from the default values and return as `dict`.

    Return type:
        
    `dict`[`str`, `Any`]
    """
    pass
```

--------------------------------

### Basic ib-async Script Usage

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Demonstrates the fundamental structure for using the ib-async library in a standard Python script. It involves initializing the IB object, connecting to the API, executing trading logic, and finally disconnecting.

```python
from ib_async import *

ib = IB()
ib.connect('127.0.0.1', 7497, clientId=1)
# Your code here
ib.disconnect()
```

--------------------------------

### Get PnL Objects (Python)

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

### SoftDollarTier Object Definition and Methods (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Defines the SoftDollarTier object with name, value, and display name. Provides methods for converting the object to a dictionary, getting non-default fields, converting to a tuple, and updating the object's properties.

```python
class SoftDollarTier:
    def __init__(self, name='', val='', displayName=''):
        # ... attributes ...
        pass

    def dict(self) -> dict:
        # ... implementation ...
        pass

    def nonDefaults(self) -> dict:
        # ... implementation ...
        pass

    def tuple(self) -> tuple:
        # ... implementation ...
        pass

    def update(self, *srcObjs, **kwargs):
        # ... implementation ...
        pass
```

--------------------------------

### POST /connect

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Establishes a connection to a running TWS or IB Gateway application and synchronizes account data.

```APIDOC
## POST /connect

### Description
Connects the client to a TWS or IB Gateway instance. This method is blocking and initializes the synchronization of account data and orders.

### Method
POST

### Endpoint
/connect

### Parameters
#### Request Body
- **host** (str) - Optional - Host name or IP address (default: 127.0.0.1)
- **port** (int) - Optional - Port number (default: 7497)
- **clientId** (int) - Optional - Unique ID for the connection (default: 1)
- **timeout** (float) - Optional - Connection timeout in seconds (default: 4)
- **readonly** (bool) - Optional - Set to true for read-only mode (default: false)
- **account** (str) - Optional - Main account identifier

### Request Example
{
  "host": "127.0.0.1",
  "port": 7497,
  "clientId": 1
}

### Response
#### Success Response (200)
- **status** (string) - Connection status confirmation
```

--------------------------------

### Get User White Branding ID (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Retrieves the White Branding ID for the current user. This function is essential for identifying user-specific branding configurations within the system.

```python
reqUserInfo()
```

--------------------------------

### Execution Patterns for Scripts, Notebooks, and Async Apps

Source: https://ib-api-reloaded.github.io/ib_async/readme.html

Provides standard templates for running ib-async code in different environments. Includes basic scripts, Jupyter notebook event loops, and async/await application structures.

```python
# Basic Script
from ib_async import *
ib = IB()
ib.connect('127.0.0.1', 7497, clientId=1)
ib.disconnect()

# Jupyter Notebook
util.startLoop()
ib = IB()
ib.connect('127.0.0.1', 7497, clientId=1)

# Async Application
import asyncio
async def main():
    ib = IB()
    await ib.connectAsync('127.0.0.1', 7497, clientId=1)
    ib.disconnect()
asyncio.run(main())
```

--------------------------------

### Get Ticker for Contract - Python

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Retrieves the ticker for a given contract. The contract must have been previously requested with `reqMktData`. The ticker might not be immediately available after calling `reqMktData`.

```python
ib.ticker(contract)
```

--------------------------------

### Get Ticker by Contract (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves the ticker information for a specific contract. The contract must have been previously requested using reqMktData. The ticker may not be immediately available after requesting market data.

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

### Perform Quality Assurance and Build

Source: https://ib-api-reloaded.github.io/ib_async/readme.html

Commands for running type checking with mypy, building the package, and publishing to PyPI.

```bash
poetry run mypy ib_async
poetry build
poetry publish --build
```

--------------------------------

### News articles and bulletins

Source: https://ib-api-reloaded.github.io/ib_async/recipes.html

Demonstrates how to fetch historical news headlines for a contract and retrieve detailed article content, as well as how to monitor general news bulletins.

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

# Bulletins
ib.reqNewsBulletins(True)
ib.sleep(5)
print(ib.newsBulletins())
```

--------------------------------

### Get Single PnL Objects (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves a list of PnLSingle objects, optionally filtered by account, model code, or contract ID. These objects represent profit and loss for single positions and are kept live updated.

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

### Create Bracket Order - Python

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Creates a limit order that is bracketed by a take-profit and a stop-loss order. The bracketed orders can then be submitted using `ib.placeOrder`.

```python
ib.bracketOrder(action, quantity, limitPrice, takeProfitPrice, stopLossPrice, **kwargs)
```

--------------------------------

### Get Account Summary Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves account summary data asynchronously. If the data is not already loaded, it first calls `reqAccountSummaryAsync`. It can filter results by a specific account or return all summary values.

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

### Get News Ticks (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves a list of news ticks, which contain headlines for news articles. The full article content can be fetched using the `reqNewsArticle` method.

```python
def newsTicks(self) -> list[NewsTick]:
    """
    List of ticks with headline news.
    The article itself can be retrieved with :meth:`.reqNewsArticle`.
    """
    return self.wrapper.newsTicks
```

--------------------------------

### Connect to Interactive Brokers TWS or Gateway

Source: https://ib-api-reloaded.github.io/ib_async/readme.html

Demonstrates how to establish a connection to the Interactive Brokers platform. It highlights the importance of using unique client IDs for multiple connections and distinguishes between TWS and Gateway port configurations.

```python
from ib_async import *

ib = IB()
ib.connect('127.0.0.1', 7497, clientId=1)  # TWS
ib.connect('127.0.0.1', 4001, clientId=1)  # Gateway
print("Connected")
ib.disconnect()
```

--------------------------------

### Get server version and connection statistics

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Retrieves the server version of the Interactive Brokers API and detailed statistics about the network connection. These are useful for diagnostics and monitoring the client's performance.

```python
server_version = client.serverVersion()
stats = client.connectionStats()

print(f"Server Version: {server_version}")
print(f"Connection Stats: {stats}")
```

--------------------------------

### Code Formatting and Linting with Ruff

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Shows how to format code and fix linting issues in the ib_async project using Ruff. This ensures consistent code style across the project.

```bash
poetry run ruff format
poetry run ruff check --fix
```

--------------------------------

### Get Non-Default Dataclass Fields as Dictionary (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Retrieves fields from a dataclass instance that have values different from their default settings, returning them as a dictionary. This is useful for identifying changes or sending only modified data.

```python
from ib_async.objects import TradeLogEntry

entry = TradeLogEntry(time='2023-10-27', status='Filled', message='Order executed', errorCode=100)
non_defaults = entry.nonDefaults()
print(non_defaults)
```

```python
from ib_async.objects import PnLSingle

pnl_data = PnLSingle(account='DU12345', realizedPnL=100.50, unrealizedPnL=50.25)
non_defaults = pnl_data.nonDefaults()
print(non_defaults)
```

```python
from ib_async.objects import HistoricalSession

session = HistoricalSession(startDateTime='2023-10-27T09:00:00', endDateTime='2023-10-27T17:00:00', refDate='2023-10-27')
non_defaults = session.nonDefaults()
print(non_defaults)
```

```python
from ib_async.objects import HistoricalSchedule

schedule = HistoricalSchedule(startDateTime='2023-10-27T00:00:00', endDateTime='2023-10-28T00:00:00', timeZone='EST')
non_defaults = schedule.nonDefaults()
print(non_defaults)
```

```python
from ib_async.objects import WshEventData

ws_event = WshEventData(conId=12345, fillWatchlist=True)
non_defaults = ws_event.nonDefaults()
print(non_defaults)
```

--------------------------------

### Create Specialized Contracts using Contract Class

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Demonstrates how to create various financial instrument contracts using the Contract class and its specialized subclasses. This includes Stocks, Forex, Futures, Options, Bonds, and Cryptocurrencies, specifying parameters like symbol, exchange, currency, and dates.

```python
from ib_async import Contract, Stock, Forex, Future, Option, Bond, Crypto

# Example usage:
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

### Get Non-Default Fields as Dictionary (ib_async.contract)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Retrieves fields from a dataclass instance that differ from their default values, returning them as a dictionary. This method is useful for identifying modified fields. It is available across multiple contract types.

```python
forex_instance.nonDefaults()
index_instance.nonDefaults()
cfd_instance.nonDefaults()
commodity_instance.nonDefaults()
bond_instance.nonDefaults()
```

--------------------------------

### Create or Recreate Contract Objects

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Shows how to use static methods `_create` and `_recreate` of the Contract class. `_create` generates a specialized contract based on provided arguments, while `_recreate` converts a generic Contract object into its most specific type.

```python
from ib_async import Contract

# Example usage of _create:
specialized_contract = Contract._create(_secType='STK', _symbol='MSFT', _exchange='NASDAQ', _currency='USD')

# Example usage of _recreate (assuming 'generic_contract' is a Contract object):
# specific_contract = Contract._recreate(generic_contract)
```

--------------------------------

### Python: Get Managed Account List

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Retrieves the list of account names currently managed by the client. It requires an active connection to the IB API and returns a list of strings, where each string is an account name.

```python
def getAccounts(self) -> list[str]:
        """Get the list of account names that are under management."""
        if not self.isReady():
            raise ConnectionError("Not connected")
        return self._accounts
```

--------------------------------

### Initialize ib_async.client.Client

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Initializes the asynchronous client for Interactive Brokers. It sets up event handlers, a decoder, and connection statistics. Optional wrapper methods for price/size ticks, and TCP data arrival/processing can be provided.

```python
client = Client(wrapper)
# Optional: Configure throttling
client.MaxRequests = 45
client.RequestsInterval = 1
```

--------------------------------

### Dataclass for Connection Statistics

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/objects.html

Holds statistics related to a network connection, such as start time, duration, and byte/message counts for sent and received data. Useful for monitoring connection health.

```python
from dataclasses import dataclass


[docs]
@dataclass(slots=True, frozen=True)
class ConnectionStats:
    startTime: float
    duration: float
    numBytesRecv: int
    numBytesSent: int
    numMsgRecv: int
    numMsgSent: int
```

--------------------------------

### Commodity Contract Initialization (ib_async.contract)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Initializes a Commodity contract object. Parameters include symbol, exchange, and currency. Additional keyword arguments can be passed.

```python
from ib_async.contract import Commodity

commodity = Commodity(symbol='CL', exchange='NYMEX', currency='USD')
```

--------------------------------

### Create Bracket Order

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Instantiates a BracketOrder which bundles a parent order with specific take-profit and stop-loss orders.

```python
bracket = BracketOrder(parent=parent_order, takeProfit=tp_order, stopLoss=sl_order)
```

--------------------------------

### Manage API Request Throttling

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Implements a queue-based throttling system to ensure outgoing messages do not exceed defined rate limits. It uses an asynchronous loop to track timestamps and emit signals when throttling starts or ends.

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

	if msgs:
		if not self._isThrottling:
			self._isThrottling = True
			self.throttleStart.emit()
		loop.call_at(times[0] + self.RequestsInterval, self.sendMsg, None)
```

--------------------------------

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

--------------------------------

### CFD Contract Initialization (ib_async.contract)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Initializes a Contract For Difference (CFD) object. Parameters include symbol, exchange, and currency. Additional keyword arguments can be passed.

```python
from ib_async.contract import CFD

cfd = CFD(symbol='ES', exchange='NYMEX', currency='USD')
```

--------------------------------

### Handle Account and Portfolio Updates

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Methods to process account value, summary, and portfolio updates. These functions update internal dictionaries and emit events to notify subscribers of changes in account data.

```python
def accountUpdateMulti(self, reqId, account, modelCode, tag, val, currency):
    key = (account, tag, currency, modelCode)
    acctVal = AccountValue(account, tag, val, currency, modelCode)
    self.accountValues[key] = acctVal
    self.ib.accountValueEvent.emit(acctVal)

def updatePortfolio(self, contract, posSize, marketPrice, marketValue, averageCost, unrealizedPNL, realizedPNL, account):
    contract = Contract.recreate(contract)
    portfItem = PortfolioItem(contract, posSize, marketPrice, marketValue, averageCost, unrealizedPNL, realizedPNL, account)
    portfolioItems = self.portfolio[account]
    if posSize == 0:
        portfolioItems.pop(contract.conId, None)
    else:
        portfolioItems[contract.conId] = portfItem
    self.ib.updatePortfolioEvent.emit(portfItem)
```

--------------------------------

### Asynchronous Time Range Iterator

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

An asynchronous iterator that yields datetime objects at specified intervals between a start and end time. It uses `await` for waiting, making it suitable for non-blocking operations within an async context.

```python
[docs]
async def timeRangeAsync(
    start: Time_t, end: Time_t, step: float
) -> AsyncIterator[dt.datetime]:
    """Async version of :meth:`timeRange`."""
    assert step > 0

    delta = dt.timedelta(seconds=step)
    t = _fillDate(start)
    tz = dt.timezone.utc if t.tzinfo else None
    now = dt.datetime.now(tz)
    while t < now:
        t += delta

    while t <= _fillDate(end):
        await waitUntilAsync(t)
        yield t
        t += delta
```

--------------------------------

### Process News Providers (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Handles a list of news providers. It creates new NewsProvider objects with code and name attributes and ends the request with the processed list.

```python
def newsProviders(self, newsProviders: list[NewsProvider]):
        newsProviders = [NewsProvider(code=p.code, name=p.name) for p in newsProviders]
        self._endReq("newsProviders", newsProviders)
```

--------------------------------

### Retrieve market depth and contract rules with Python

Source: https://ib-api-reloaded.github.io/ib_async/_sources/recipes.rst.txt

Demonstrates accessing the order book (DOM) for a forex pair and querying market rule IDs to understand price increments.

```python
# Order book
eurusd = Forex('EURUSD')
ticker = ib.reqMktDepth(eurusd)
while ib.sleep(5):
    print([d.price for d in ticker.domBids], [d.price for d in ticker.domAsks])

# Market rules
usdjpy = Forex('USDJPY')
cd = ib.reqContractDetails(usdjpy)[0]
rules = [ib.reqMarketRule(ruleId) for ruleId in cd.marketRuleIds.split(',')]
```

--------------------------------

### Create Contracts Dynamically with Contract(**kwargs)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Illustrates the flexibility of the Contract class by creating contracts using arbitrary keyword arguments. This method allows for the creation of any contract type by specifying its attributes directly.

```python
from ib_async import Contract

# Example usage:
contract_instance = Contract(_secType='STK', _symbol='AAPL', _exchange='SMART', _currency='USD')
```

--------------------------------

### Python: Get New Request ID

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Generates and returns a unique request ID for outgoing API requests. It ensures that the client is connected before generating a new ID and increments an internal sequence counter.

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

### Type Checking with Poetry and Mypy

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Demonstrates how to perform type checking on the ib_async library using Poetry and Mypy. This command helps ensure code quality and identify potential type-related errors.

```bash
poetry run mypy ib_async
```

--------------------------------

### Bond Contract Initialization (ib_async.contract)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Initializes a Bond contract object. This class primarily accepts keyword arguments for its initialization.

```python
from ib_async.contract import Bond

bond = Bond(symbol='USGG100M', exchange='US')
```

--------------------------------

### Manage PnL Subscriptions

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Methods to initiate and cancel live PnL and PnL-Single event subscriptions. These functions track subscription state using unique keys and return live-updating objects.

```python
def reqPnL(self, account: str, modelCode: str = "") -> PnL:
	key = (account, modelCode)
	assert key not in self.wrapper.pnlKey2ReqId
	reqId = self.client.getReqId()
	self.wrapper.pnlKey2ReqId[key] = reqId
	pnl = PnL(account, modelCode)
	self.wrapper.reqId2PnL[reqId] = pnl
	self.client.reqPnL(reqId, account, modelCode)
	return pnl

def cancelPnL(self, account, modelCode: str = ""):
	key = (account, modelCode)
	reqId = self.wrapper.pnlKey2ReqId.pop(key, None)
	if reqId:
		self.client.cancelPnL(reqId)
		self.wrapper.reqId2PnL.pop(reqId, None)
	else:
		self._logger.error(f"cancelPnL: No subscription for account {account}, modelCode {modelCode}")
```

--------------------------------

### Retrieve and Analyze Historical Data with ib_async

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Shows how to fetch historical market data for different timeframes (daily and 5-minute) using ib_async. The retrieved data is converted into pandas DataFrames for analysis, including calculating a Simple Moving Average (SMA). Requires pandas library.

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

### Define StartupFetch Flags

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Defines the StartupFetch flag enumeration used to specify which data components should be fetched upon initialization of the IB connection.

```python
from enum import Flag, auto

class StartupFetch(Flag):
    POSITIONS = auto()
    ORDERS_OPEN = auto()
    ORDERS_COMPLETE = auto()
    ACCOUNT_UPDATES = auto()
    SUB_ACCOUNT_UPDATES = auto()
    EXECUTIONS = auto()

StartupFetchNONE = StartupFetch(0)

StartupFetchALL = (
    StartupFetch.POSITIONS
    | StartupFetch.ORDERS_OPEN
    | StartupFetch.ORDERS_COMPLETE
    | StartupFetch.ACCOUNT_UPDATES
    | StartupFetch.SUB_ACCOUNT_UPDATES
    | StartupFetch.EXECUTIONS
)
```

--------------------------------

### Configure Financial Advisor (FA) Settings

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Methods to request and replace Financial Advisor configuration settings, such as groups, profiles, and account aliases. These operations involve XML-formatted configuration strings.

```python
def requestFA(self, faDataType: int):
    return self._run(self.requestFAAsync(faDataType))

def replaceFA(self, faDataType: int, xml: str):
    reqId = self.client.getReqId()
    self.client.replaceFA(reqId, faDataType, xml)
```

--------------------------------

### Manage Open Orders

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Processes open order events, including initial startup feeds and real-time order updates. It distinguishes between 'what-if' orders and standard trade management.

```python
def openOrder(self, orderId, contract, order, orderState):
    if order.whatIf:
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

### Configure File Logging

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Sets up a file handler for logging messages. It configures the logger's level and adds a file handler with a specific format. This is useful for persistent logging.

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

### Place Order Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Initiates an order placement request asynchronously. It requires a contract, order details, and returns a future object representing the pending result. The `whatIf` parameter controls whether the order is a simulated 'what-if' order.

```python
whatIfOrder.whatIf = True
reqId = self.client.getReqId()
future = self.wrapper.startReq(reqId, contract)
self.client.placeOrder(reqId, contract, whatIfOrder)
return future
```

--------------------------------

### Monitor Portfolio Positions and Open Orders

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Retrieves and displays the current positions held in the portfolio, including the symbol, quantity, and average cost. It also lists any currently open orders.

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

### Request Market Scanner Subscription

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Initiates a request for market scanner data based on a provided subscription. It prepares the necessary data structures and forwards the request to the client and wrapper. Dependencies include ScanDataList, client, and wrapper objects.

```python
def reqScannerSubscription(self, subscription, scannerSubscriptionOptions, scannerSubscriptionFilterOptions):
        """
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

### Manage Subscription Events

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Iterates through active tickers, subscribers, and trades to mark all associated update events as completed.

```python
def setEventsDone(self):
	"""Set all subscription-type events as done."""
	events = [ticker.updateEvent for ticker in self.tickers.values()]
	events += [sub.updateEvent for sub in self.reqId2Subscriber.values()]
	for trade in self.trades.values():
		events += [
			trade.statusEvent,
			trade.modifyEvent,
			trade.fillEvent,
			trade.filledEvent,
			trade.commissionReportEvent,
			trade.cancelEvent,
			trade.cancelledEvent,
		]
	for event in events:
		event.set_done()
```

--------------------------------

### Request All Open Orders (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Requests and returns a list of all open orders across all clients. Orders from other clients are not kept in sync; use the master clientId mechanism for synchronized order visibility.

```python
def reqAllOpenOrders(self) -> list[Trade]:
        """
        Request and return a list of all open orders over all clients.
        Note that the orders of other clients will not be kept in sync,
        use the master clientId mechanism instead to see other
        client's orders that are kept in sync.
        """
        return self._run(self.reqAllOpenOrdersAsync())
```

--------------------------------

### Async Application with ib-async

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Shows how to integrate ib-async into an asynchronous Python application using `asyncio`. This pattern is suitable for applications requiring non-blocking I/O operations.

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

### Run Tests with Pytest

Source: https://ib-api-reloaded.github.io/ib_async/readme.html

Executes the test suite for the `ib_async` project using `pytest`. This command ensures that all functionalities are working as expected and helps maintain code quality.

```bash
poetry run pytest

```

--------------------------------

### Request Account Updates - Python

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Requests account and portfolio values for the specified account and keeps them updated. This method is blocking and should typically only be called at startup.

```python
ib.reqAccountUpdates(account='')
```

--------------------------------

### Format Code with Ruff

Source: https://ib-api-reloaded.github.io/ib_async/readme.html

Applies code formatting rules to the `ib_async` project using `ruff`. This command ensures consistent code style across the entire codebase, making it more readable and maintainable.

```bash
poetry run ruff format

```

--------------------------------

### Request News Providers Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously retrieves a list of available news providers. Returns an Awaitable resolving to a list of NewsProvider objects.

```python
reqNewsProvidersAsync()
```

--------------------------------

### Place an Order

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Submits an order to buy or sell a contract. Requires a unique orderId, contract details, and order specifications.

```python
client.placeOrder(orderId=1, contract=contract_object, order=order_object)
```

--------------------------------

### Scanner data retrieval (blocking and streaming)

Source: https://ib-api-reloaded.github.io/ib_async/recipes.html

Shows how to perform both blocking requests for scanner data and event-driven streaming updates using ScannerSubscription objects.

```python
# Blocking
allParams = ib.reqScannerParameters()
print(allParams)

sub = ScannerSubscription(
    instrument='FUT.US',
    locationCode='FUT.GLOBEX',
    scanCode='TOP_PERC_GAIN')
scanData = ib.reqScannerData(sub)
print(scanData)

# Streaming
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

### Connect to IB TWS or Gateway

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Establishes a connection to either the Trader Workstation (TWS) or IB Gateway. Ensure TWS/Gateway is running and the API is enabled. The port number must match the running application (7497 for TWS, 4001 for Gateway). Each connection requires a unique clientId.

```python
from ib_async import *

ib = IB()
ib.connect('127.0.0.1', 7497, clientId=1)  # TWS
ib.connect('127.0.0.1', 4001, clientId=1)  # Gateway
```

--------------------------------

### Manage IB Connection Lifecycle

Source: https://ib-api-reloaded.github.io/ib_async/_sources/recipes.rst.txt

Demonstrates the recommended practice of adding a sleep delay before disconnecting to ensure all pending data is flushed during short-lived connections.

```python
ib = IB()
ib.connect()

# create and submit some orders

ib.sleep(1)  # added delay
ib.disconnect()
```

--------------------------------

### Manage Event Loops with ib-async

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Utilities for handling asyncio event loops, including support for nested loops in Jupyter and integration with Qt event loops.

```python
import ib_async.util

# Get or create an event loop
loop = ib_async.util.startLoop()

# Integrate with Qt
ib_async.util.useQt(qtLib='PyQt5', period=0.01)
```

--------------------------------

### Initialize and Connect to IB Gateway

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Defines the event initialization, context manager lifecycle methods, and the primary connection method for the IB Async API. The connect method is blocking and handles synchronization with the TWS/Gateway instance.

```python
def __init__(self):
    self.pendingTickersEvent = Event("pendingTickersEvent")
    self.errorEvent = Event("errorEvent")
    # ... additional events

def __enter__(self):
    return self

def __exit__(self, *_exc):
    self.disconnect()

def connect(self, host="127.0.0.1", port=7497, clientId=1, timeout=4, readonly=False, account="", raiseSyncErrors=False, fetchFields=StartupFetchALL):
    return self._run(
        self.connectAsync(host, port, clientId, timeout, readonly, account, raiseSyncErrors, fetchFields)
    )
```

--------------------------------

### Event Handling in ib_async

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Demonstrates how to subscribe to and handle events in ib_async, specifically for order status updates and real-time ticker updates. This involves defining callback functions and attaching them to the respective event handlers.

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

### Asynchronous Connection to IB Gateway (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Establishes an asynchronous connection to the Interactive Brokers Gateway. It allows configuration of host, port, client ID, timeout, read-only mode, account, and synchronization error handling.

```python
_async _connectAsync(_host='127.0.0.1'_ , _port=7497_ , _clientId=1_ , _timeout=4_ , _readonly=False_ , _account=''_ , _raiseSyncErrors=False_ , _fetchFields= <StartupFetch.POSITIONS|ORDERS_OPEN|ORDERS_COMPLETE|ACCOUNT_UPDATES|SUB_ACCOUNT_UPDATES|EXECUTIONS: 63>_)
```

--------------------------------

### Retrieve fundamental data and dividends with Python

Source: https://ib-api-reloaded.github.io/ib_async/_sources/recipes.rst.txt

Fetches market data specifically for dividends and fundamental ratios using ticker requests.

```python
# Dividends
contract = Stock('INTC', 'SMART', 'USD')
ticker = ib.reqMktData(contract, '456')
ib.sleep(2)
print(ticker.dividends)

# Fundamental ratios
ticker = ib.reqMktData(contract, '258')
ib.sleep(2)
print(ticker.fundamentalRatios)
```

--------------------------------

### Request All Account Summaries Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously requests summaries for all accounts. Returns an Awaitable that resolves to None.

```python
reqAccountSummaryAsync()
```

--------------------------------

### Request Open Orders (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Requests and returns a list of open orders. This method may provide stale information and it is recommended to use `.openTrades` or `.openOrders` instead. This method is blocking.

```python
def reqOpenOrders(self) -> list[Trade]:
        """
        Request and return a list of open orders.

        This method can give stale information where a new open order is not
        reported or an already filled or cancelled order is reported as open.
        It is recommended to use the more reliable and much faster
        :meth:`.openTrades` or :meth:`.openOrders` methods instead.

        This method is blocking.
        """
        return self._run(self.reqOpenOrdersAsync())
```

--------------------------------

### Connect to IB Gateway/TWS (Asynchronous)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Establishes an asynchronous connection to a running TWS or IB gateway using asyncio. This coroutine allows the program to continue executing other tasks while the connection is being established.

```python
await client.connectAsync(host='127.0.0.1', port=7497, clientId=1, timeout=2.0)
```

--------------------------------

### Configure Market Data Types

Source: https://ib-api-reloaded.github.io/ib_async/readme.html

Sets the market data type to distinguish between delayed, frozen, and real-time data. Real-time data requires a subscription, while delayed data is available for free.

```python
ib.reqMarketDataType(3)  # Delayed
ib.reqMarketDataType(4)  # Delayed frozen
ib.reqMarketDataType(1)  # Real-time
```

--------------------------------

### Check API Readiness

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Determines if the API connection is fully established and ready to accept requests.

```python
is_ready = client.isReady()
```

--------------------------------

### Connect to IB Gateway/TWS

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Establishes a connection to a running TWS or IB Gateway application. This method is blocking and synchronizes the client upon successful connection. It allows configuration of host, port, client ID, timeout, read-only mode, account, and error handling for synchronization requests. It also supports fetching specific account data upon connection.

```python
connect(_host='127.0.0.1', _port=7497, _clientId=1, _timeout=4, _readonly=False, _account='', _raiseSyncErrors=False, _fetchFields=<StartupFetch.POSITIONS|ORDERS_OPEN|ORDERS_COMPLETE|ACCOUNT_UPDATES|SUB_ACCOUNT_UPDATES|EXECUTIONS: 63>)
```

--------------------------------

### Request Account Summary (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Requests account values for all accounts and keeps them updated. It is recommended to use the `.accountSummary` method instead. This method is blocking and returns when the account summary is filled.

```python
def reqAccountSummary(self):
        """
        It is recommended to use :meth:`.accountSummary` instead.

        Request account values for all accounts and keep them updated. Returns when account summary is filled.

        This method is blocking.
        """
        self._run(self.reqAccountSummaryAsync())
```

--------------------------------

### Connect and Disconnect IB API using Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

This Python snippet demonstrates how to establish a connection to the Interactive Brokers API and then disconnect. It utilizes the `IB` class and utility functions for managing the event loop and logging. Ensure the IB Gateway or TWS is running and accessible at the specified host and port.

```python
from ib_insync import *
import logging

if __name__ == "__main__":
    loop = util.getLoop()
    loop.set_debug(True)
    util.logToConsole(logging.DEBUG)
    ib = IB()
    ib.connect("127.0.0.1", 7497, clientId=1)
    ib.disconnect()
```

--------------------------------

### Request News Providers

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Fetches a list of available news providers from the Interactive Brokers system. This method returns a list of NewsProvider objects, each containing information about a news source.

```python
def reqNewsProviders(self) -> list[NewsProvider]:
        """
        
```

--------------------------------

### Create Bracket Order in Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Creates a bracket order consisting of a parent limit order and two child orders for take-profit and stop-loss. This function is useful for managing risk and profit targets simultaneously. It requires action, quantity, limit price, take-profit price, and stop-loss price as input.

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

### Create Advanced Bracket Order

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Illustrates the creation of a bracket order, which includes a parent order (limit buy) and associated child orders for stop-loss and take-profit. The `transmit` flag is set to `False` for parent and child orders, indicating they are not sent immediately.

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

# Take profit (example - not fully shown in snippet)
```

--------------------------------

### Request Market Scan Data (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Performs a blocking market scan by initiating a subscription and then canceling it after receiving the initial results. Requires a ScannerSubscription object and optional scanner subscription options.

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

### Request Smart Components Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously requests smart component information for a given BBO exchange. This function is used for retrieving specific market data components.

```python
reqSmartComponentsAsync(_bboExchange_)
```

--------------------------------

### Handle Symbol Samples (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Processes symbol samples, which are a list of ContractDescription objects. It ends the request by passing the received contractDescriptions. This is used for retrieving sample contracts based on a symbol.

```python
def symbolSamples(
        self, reqId: int, contractDescriptions: list[ContractDescription]
    ):
        self._endReq(reqId, contractDescriptions)
```

--------------------------------

### Handle Ticker Subscriptions

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Functions to initiate and terminate market data ticker subscriptions. These methods manage the mapping between request IDs, contract objects, and ticker instances.

```python
def startTicker(self, reqId: int, contract: Contract, tickType: int | str):
    ticker = self.tickers.get(hash(contract))
    if not ticker:
        ticker = Ticker(contract=contract, defaults=self.defaults)
        self.tickers[hash(contract)] = ticker
    self.reqId2Ticker[reqId] = ticker
    self._reqId2Contract[reqId] = contract
    self.ticker2ReqId[tickType][ticker] = reqId
    return ticker

def endTicker(self, ticker: Ticker, tickType: int | str):
    reqId = self.ticker2ReqId[tickType].pop(ticker, 0)
    self._reqId2Contract.pop(reqId, None)
    return reqId
```

--------------------------------

### Calculate option metrics with Python

Source: https://ib-api-reloaded.github.io/ib_async/_sources/recipes.rst.txt

Uses the ib-async library to calculate implied volatility or theoretical option prices based on underlying price and other parameters.

```python
option = Option('EOE', '20171215', 490, 'P', 'FTA', multiplier=100)

calc = ib.calculateImpliedVolatility(
    option, optionPrice=6.1, underPrice=525)
print(calc)

calc = ib.calculateOptionPrice(
    option, volatility=0.14, underPrice=525)
print(calc)
```

--------------------------------

### Handle Execution Fills and Trade Updates (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Processes execution fills, updates trade objects, and logs trade activity. Emits events for live executions and stores results for non-live scenarios. Dependencies include Fill, TradeLogEntry, and logging utilities.

```python
def execDetails(self, execId, contract, execution, commissionReport, time):
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

### Subscribe to Market Scan Data (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Subscribes to market scan data. This method initiates a continuous stream of market scan results based on the provided subscription criteria and optional filters.

```python
def reqScannerSubscription(
        self,
        subscription: ScannerSubscription,
        scannerSubscriptionOptions: list[TagValue] = [],
        scannerSubscriptionFilterOptions: list[TagValue] = [],
    ) -> ScanDataList:
        """
        Subscribe to market scan data.
        """
```

--------------------------------

### Simulate Order Execution Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously simulates the execution of an order for a given contract without actually placing it. Returns the expected OrderState.

```python
whatIfOrderAsync(_contract_ , _order_)
```

--------------------------------

### Manage Short-Lived IB Connections

Source: https://ib-api-reloaded.github.io/ib_async/recipes.html

Demonstrates how to handle short-lived connections to the IB API. It includes connecting, submitting orders, adding a small delay before disconnecting to ensure data flushing, and finally disconnecting.

```python
ib = IB()
ib.connect()

...  # create and submit some orders

ib.sleep(1)  # added delay
ib.disconnect()
```

--------------------------------

### POST /placeOrder

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Places a new order in the Interactive Brokers system.

```APIDOC
## POST /placeOrder

### Description
Submits a new order to the exchange. Handles complex order types including combo legs and algorithmic routing.

### Method
POST

### Endpoint
/placeOrder

### Parameters
#### Request Body
- **orderId** (int) - Required - Unique identifier for the order.
- **contract** (object) - Required - The contract to trade.
- **order** (object) - Required - The order details including quantity, type, and price.

### Request Example
{
  "orderId": 5001,
  "contract": { "conId": 12345, "secType": "STK" },
  "order": { "action": "BUY", "totalQuantity": 100, "orderType": "LMT", "lmtPrice": 150.00 }
}
```

--------------------------------

### Order Parameter Definitions (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

This snippet defines various order parameters used in the IB API. It includes settings for order duration, quantity constraints, pricing adjustments, trailing stops, and more. These parameters are crucial for customizing order behavior and execution.

```python
goodTillDate: str = ''
rule80A: str = ''
allOrNone: bool = False
minQty: int = 2147483647
percentOffset: float | Decimal = 1.7976931348623157e+308
overridePercentageConstraints: bool = False
trailStopPrice: float | Decimal = 1.7976931348623157e+308
trailingPercent: float | Decimal = 1.7976931348623157e+308
faGroup: str = ''
faProfile: str = ''
faMethod: str = ''
faPercentage: str = ''
designatedLocation: str = ''
openClose: str = 'O'
origin: int = 0
shortSaleSlot: int = 0
exemptCode: int = -1
discretionaryAmt: float = 0.0
eTradeOnly: bool = False
firmQuoteOnly: bool = False
nbboPriceCap: float | Decimal = 1.7976931348623157e+308
optOutSmartRouting: bool = False
auctionStrategy: int = 0
startingPrice: float | Decimal = 1.7976931348623157e+308
stockRefPrice: float | Decimal = 1.7976931348623157e+308
delta: float | Decimal = 1.7976931348623157e+308
stockRangeLower: float | Decimal = 1.7976931348623157e+308
stockRangeUpper: float | Decimal = 1.7976931348623157e+308
randomizePrice: bool = False
randomizeSize: bool = False
volatility: float | Decimal = 1.7976931348623157e+308
volatilityType: int = 2147483647
deltaNeutralOrderType: str = ''
deltaNeutralAuxPrice: float | Decimal = 1.7976931348623157e+308
deltaNeutralConId: int = 0
deltaNeutralSettlingFirm: str = ''
deltaNeutralClearingAccount: str = ''
deltaNeutralClearingIntent: str = ''
deltaNeutralOpenClose: str = ''
deltaNeutralShortSale: bool = False
deltaNeutralShortSaleSlot: int = 0
deltaNeutralDesignatedLocation: str = ''
continuousUpdate: bool = False
referencePriceType: int = 2147483647
basisPoints: float | Decimal = 1.7976931348623157e+308
basisPointsType: int = 2147483647
scaleInitLevelSize: int = 2147483647
scaleSubsLevelSize: int = 2147483647
scalePriceIncrement: float | Decimal = 1.7976931348623157e+308
scalePriceAdjustValue: float | Decimal = 1.7976931348623157e+308
scalePriceAdjustInterval: int = 2147483647
scaleProfitOffset: float | Decimal = 1.7976931348623157e+308
scaleAutoReset: bool = False
scaleInitPosition: int = 2147483647
scaleInitFillQty: int = 2147483647
scaleRandomPercent: bool = False
scaleTable: str = ''
hedgeType: str = ''
hedgeParam: str = ''
account: str = ''
settlingFirm: str = ''
clearingAccount: str = ''
clearingIntent: str = ''
algoStrategy: str = ''
algoParams: list[TagValue]
smartComboRoutingParams: list[TagValue]
algoId: str = ''
whatIf: bool = False
notHeld: bool = False
solicited: bool = False
modelCode: str = ''
orderComboLegs: list[OrderComboLeg]
orderMiscOptions: list[TagValue]
referenceContractId: int = 0
peggedChangeAmount: float = 0.0
isPeggedChangeAmountDecrease: bool = False
referenceChangeAmount: float = 0.0
referenceExchangeId: str = ''
adjustedOrderType: str = ''
triggerPrice: float | Decimal | None = 1.7976931348623157e+308
adjustedStopPrice: float | Decimal = 1.7976931348623157e+308
adjustedStopLimitPrice: float | Decimal = 1.7976931348623157e+308
adjustedTrailingAmount: float | Decimal = 1.7976931348623157e+308
adjustableTrailingUnit: int = 0
lmtPriceOffset: float | Decimal = 1.7976931348623157e+308
conditions: list[OrderCondition]
conditionsCancelOrder: bool = False
conditionsIgnoreRth: bool = False
extOperator: str = ''
softDollarTier: SoftDollarTier
cashQty: float | Decimal = 1.7976931348623157e+308
mifid2DecisionMaker: str = ''
mifid2DecisionAlgo: str = ''
mifid2ExecutionTrader: str = ''
mifid2ExecutionAlgo: str = ''
dontUseAutoPriceForHedge: bool = False
isOmsContainer: bool = False
discretionaryUpToLimitPrice: bool = False
```

--------------------------------

### POST /reqPositions

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Requests the current portfolio positions.

```APIDOC
## POST /reqPositions

### Description
Requests the current positions for the account associated with the client.

### Method
POST

### Endpoint
/reqPositions

### Request Example
{}

### Response
#### Success Response (200)
- **positions** (array) - List of current holdings.
```

--------------------------------

### POST /system/timeout

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Configures network timeout settings for the TWS/IBG connection.

```APIDOC
## POST /system/timeout

### Description
Sets a timeout for receiving messages from TWS/IBG. Emits a timeoutEvent if no data is received within the specified duration.

### Method
POST

### Request Body
- **timeout** (float) - Required - Timeout in seconds.

### Response
#### Success Response (200)
- **status** (string) - Confirmation of timeout setting.
```

--------------------------------

### Define Option Security Parameters (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Processes security definition parameters for options, including exchange, underlying contract ID, trading class, multiplier, expirations, and strikes. It creates an OptionChain object and adds it to the results for the given request ID.

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

### Request Real-Time Bars (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Requests real-time 5-second bars for a given contract. It requires specifying the bar size (must be 5), the data source ('TRADES', 'MIDPOINT', 'BID', or 'ASK'), and whether to use Regular Trading Hours. This method initiates a subscription and returns a RealTimeBarList object.

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

### Integrate Qt Event Loop with Asyncio

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Enables the execution of a combined Qt and asyncio event loop. It supports multiple Qt libraries (PyQt5/6, PySide2/6) and uses a polling mechanism to keep both loops responsive.

```python
def useQt(qtLib: str = "PyQt5", period: float = 0.01):
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
        qApp.processEvents()

    # ... initialization logic ...
```

--------------------------------

### Request Account Summary - Python

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Requests account values for all accounts and keeps them updated. It is recommended to use `accountSummary()` instead. This method is blocking.

```python
ib.reqAccountSummary()
```

--------------------------------

### POST /reqAccountSummary

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Requests account summary data for a specific account group.

```APIDOC
## POST /reqAccountSummary

### Description
Requests account summary data for a specified group and set of tags.

### Method
POST

### Endpoint
/reqAccountSummary

### Parameters
#### Request Body
- **reqId** (int) - Required - Unique request ID.
- **groupName** (string) - Required - Account group name.
- **tags** (string) - Required - Comma-separated list of account tags.

### Request Example
{
  "reqId": 1,
  "groupName": "All",
  "tags": "NetLiquidation,TotalCashValue"
}
```

--------------------------------

### Initialize OrderStateNumeric Helper

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Demonstrates the usage of OrderStateNumeric as a type helper for mypy when converting order states to a numeric representation with specific precision.

```python
state_numeric: OrderStateNumeric = state.numeric(digits=2)
```

--------------------------------

### Contract Creation and Recreation

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Defines the base Contract class with methods for creating and recreating contract objects. It handles different security types and ensures proper initialization.

```python
class Contract:
    # ... (previous code)

    @staticmethod
    def create(**kwargs) -> "Contract":
        """Create a Contract object from keyword arguments."""
        secType = kwargs.get("secType", "Contract")
        cls = {
            "NEWS": Contract,
            "EVENT": Contract,
            "EC": Contract,  # Event Contracts (binary yes/no results)
        }.get(secType, Contract)

        if cls is not Contract:
            kwargs.pop("secType", "")

        return cls(**kwargs)


    @staticmethod
    def recreate(c) -> "Contract":
        """Comply an existing generic Contract into its most specific type."""
        return Contract.create(**util.dataclassAsDict(c))
```

--------------------------------

### Process Market Depth Ticks (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Handles incoming market depth ticks, creating MktDepthData objects and adding them to a ticker. It also manages pending tickers for further processing.

```python
def tickMktDepth(self,
            reqId: int,
            pos: int,
            operation: int,
            side: int,
            price: float,
            size: int,
    ):
        # TODO: add optional debugging check. In a correctly working system, we should
        #       technically always have sequential bid and ask position entries, but
        #       in the past we have seen gaps or missing values.

        tick = MktDepthData(
            self.lastTime, position, marketMaker, operation, side, price, size
        )
        ticker.domTicks.append(tick)
        self.pendingTickers.add(ticker)
```

--------------------------------

### POST /reqRealTimeBars

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Requests real-time bar data for a specific contract. Returns a RealTimeBarList object.

```APIDOC
## POST /reqRealTimeBars

### Description
Requests real-time bar data for a specific contract. The barSize must be 5.

### Method
POST

### Parameters
#### Request Body
- **contract** (Contract) - Required - Contract of interest.
- **barSize** (int) - Required - Must be 5.
- **whatToShow** (str) - Required - Source for bars: 'TRADES', 'MIDPOINT', 'BID', or 'ASK'.
- **useRTH** (bool) - Required - If True, only Regular Trading Hours data.
- **realTimeBarsOptions** (list) - Optional - Additional tag values.

### Response
#### Success Response (200)
- **RealTimeBarList** (Object) - The list of real-time bars.
```

--------------------------------

### Configure Console Logging

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Sets up a stream handler for logging messages to the console (stderr). It checks for existing handlers and either reuses them or creates a new one with a specified format and level.

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

### Python: Asynchronous Connection and Event Handling

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ibcontroller.html

Manages asynchronous connection to the IB gateway, sets up event handlers for timeouts, errors, and disconnections, and probes the application for activity. It includes logic for retrying connections after delays and gracefully handling various exceptions.

```python
import asyncio
from ib_insync import *
from contextlib import suppress

class IBC:
    def __init__(self, clientId, gateway=False, tradingMode="paper"):
        self._logger = logging.getLogger(__name__)
        self.stoppingEvent = Event()
        self.startedEvent = Event()
        self.stoppedEvent = Event()
        self.softTimeoutEvent = Event()
        self.hardTimeoutEvent = Event()
        self.ib = IB()
        self.controller = IBController(self.ib)
        self.host = "127.0.0.1"
        self.port = 7497 if not gateway else 4002
        self.clientId = clientId
        self.connectTimeout = 10
        self.readonly = False
        self.account = ""
        self.raiseSyncErrors = False
        self.appStartupTime = 5
        self.appTimeout = 30
        self.probeTimeout = 5
        self.retryDelay = 5
        self._runner = None
        self.probeContract = Contract()
        self.probeContract.symbol = "EUR"
        self.probeContract.secType = "STK"
        self.probeContract.exchange = "SMART"

    def stop(self):
        self._logger.info("Stopping")
        self.stoppingEvent.emit(self)
        self.ib.disconnect()
        self._runner = None

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


class Watchdog:
    def __init__(self, ibc, ib, appStartupTime=15):
        self.ibc = ibc
        self.ib = ib
        self.appStartupTime = appStartupTime

    def start(self):
        self.ibc._runner = True
        asyncio.ensure_future(self.ibc.runAsync())


if __name__ == "__main__":
    logging.basicConfig(level=logging.DEBUG)
    ibc = IBC(1012, gateway=True, tradingMode="paper")
    ib = IB()
    app = Watchdog(ibc, ib, appStartupTime=15)
    app.start()
    IB.run()

```

--------------------------------

### Request Account Summary Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously retrieves the account summary for a specified account. Returns a list of AccountValue objects.

```python
_async _accountSummaryAsync(_account =''_)
```

--------------------------------

### Order book and market depth

Source: https://ib-api-reloaded.github.io/ib_async/recipes.html

Retrieves real-time market depth (DOM) for a specified contract and prints the current bid and ask prices in a loop.

```python
eurusd = Forex('EURUSD')
ticker = ib.reqMktDepth(eurusd)
while ib.sleep(5):
    print(
        [d.price for d in ticker.domBids],
        [d.price for d in ticker.domAsks])
```

--------------------------------

### Subscribe to Live Market Data

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Subscribes to real-time market data for a given stock contract (AAPL). It then prints the last traded price, bid, and ask for 30 seconds. Requires an active connection and potentially a market data subscription.

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

### Define StartupFetch Enum for IB Data

Source: https://ib-api-reloaded.github.io/ib_async/api.html

The StartupFetch class is an enumeration used to specify which data types should be fetched upon initialization of the IB connection.

```python
from ib_async import StartupFetch

# Example usage of StartupFetch flags
fetch_options = StartupFetch.POSITIONS | StartupFetch.ORDERS_OPEN
```

--------------------------------

### Define and Manage ib-async Data Objects

Source: https://ib-api-reloaded.github.io/ib_async/api.html

The ib-async library utilizes dataclasses to represent financial data structures. These objects include helper methods like dict(), nonDefaults(), tuple(), and update() to facilitate data manipulation and state management.

```python
from ib_async.objects import CommissionReport, ExecutionFilter, BarData, RealTimeBar, TickAttrib

# Example: Creating and updating a BarData object
bar = BarData(open=100.0, close=105.0)
bar.update(volume=1000)

# Get fields that differ from defaults
changes = bar.nonDefaults()

# Convert to dictionary or tuple
bar_dict = bar.dict()
bar_tuple = bar.tuple()
```

--------------------------------

### FlexReport Class: Download and Load Account Statements (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/flexreport.html

The FlexReport class facilitates downloading account statements from Interactive Brokers using a token and query ID, or loading them from a local XML file. It includes methods for parsing and extracting data from the statements.

```python
"""Access to account statement webservice."""

import logging
import os
import time
import xml.etree.ElementTree as et
from contextlib import suppress
from typing import Final
from urllib.parse import urlparse
from urllib.request import urlopen

from ib_async import util
from ib_async.objects import DynamicObject

_logger = logging.getLogger("ib_async.flexreport")

FLEXREPORT_URL: Final = (
    "https://ndcdyn.interactivebrokers.com/AccountManagement/"
    "FlexWebService/SendRequest?"
)
"""
https://www.interactivebrokers.com/campus/ibkr-api-page/flex-web-service/#flex-generate-report
"""




[docs]
class FlexError(Exception):
    pass






[docs]
class FlexReport:
    """
    To obtain a token:

    * Login to web portal
    * Go to Settings
    * Click on "Configure Flex Web Service"
    * Generate token
    """

    data: bytes
    root: et.Element

    def __init__(self, token=None, queryId=None, path=None):
        """
        Download a report by giving a valid ``token`` and ``queryId``,
        or load from file by giving a valid ``path``.

        To overwrite default URL, set env variable ``IB_FLEXREPORT_URL``.
        """
        if token and queryId:
            self.download(token, queryId)
        elif path:
            self.load(path)




    def topics(self):
        """Get the set of topics that can be extracted from this report."""
        return set(node.tag for node in self.root.iter() if node.attrib)





    def extract(self, topic: str, parseNumbers=True) -> list:
        """
        Extract items of given topic and return as list of objects.

        The topic is a string like TradeConfirm, ChangeInDividendAccrual,
        Order, etc.
        """
        cls = type(topic, (DynamicObject,), {})
        results = [cls(**node.attrib) for node in self.root.iter(topic)]
        if parseNumbers:
            for obj in results:
                d = obj.__dict__
                for k, v in d.items():
                    with suppress(ValueError):
                        d[k] = float(v)
                        d[k] = int(v)
        return results




    def df(self, topic: str, parseNumbers=True):
        """Same as extract but return the result as a pandas DataFrame."""
        return util.df(self.extract(topic, parseNumbers))




    def get_url(self):
        """Generate flexreport URL."""

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




    def download(self, token, queryId):
        """Download report for the given ``token`` and ``queryId``."""
        base_url = self.get_url()
        query = f"t={token}&q={queryId}&v=3"
        url = base_url + query

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




    def load(self, path):
        """Load report from XML file."""
        with open(path, "rb") as f:
            self.data = f.read()
            self.root = et.fromstring(self.data)




    def save(self, path):
        """Save report to XML file."""
        with open(path, "wb") as f:
            f.write(self.data)




if __name__ == "__main__":
    util.logToConsole()
    report = FlexReport("945692423458902392892687", "272555")
    print(report.topics())

```

--------------------------------

### What-If Order Simulation - Python

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Retrieves commission and margin impact for an order without actually placing it. The original order remains unmodified. This method is blocking.

```python
ib.whatIfOrder(contract, order)
```

--------------------------------

### Retrieve Wall Street Horizon Event Data

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Demonstrates how to query corporate event data for a specific contract after initializing WSH metadata.

```python
# For IBM (with conId=8314) query the:
#   - Earnings Dates (wshe_ed)
```

--------------------------------

### Request Smart Components (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Obtains a mapping from single-letter codes to exchange names. This request requires the exchanges to be open; otherwise, an empty list will be returned. It returns a list of SmartComponent objects.

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

### Configure Market Data Type

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Sets the type of market data to be received. Type 3 provides free delayed data, Type 4 provides delayed frozen data, and Type 1 provides real-time data which requires a subscription.

```python
from ib_async import *

# For free delayed data (no subscription required)
ib.reqMarketDataType(3)  # Delayed
ib.reqMarketDataType(4)  # Delayed frozen

# For real-time data (requires subscription)
ib.reqMarketDataType(1)  # Real-time
```

--------------------------------

### Process Price and Size Ticks in Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Handles incoming price and size updates for financial instruments. It maps specific tick types to bid, ask, or last price attributes, includes logic to normalize empty values, and maintains a history of tick data.

```python
def priceSizeTick(self, reqId: int, tickType: int, price: float, size: float):
	ticker = self.reqId2Ticker.get(reqId)
	if not ticker:
		self._logger.error(f"priceSizeTick: Unknown reqId: {reqId}")
		return

	if tickType in {1, 66}:
		if size == 0:
			price = self.defaultEmptyPrice
			size = self.defaultEmptySize
		ticker.prevBid = ticker.bid
		ticker.prevBidSize = ticker.bidSize
		ticker.bid = price
		ticker.bidSize = size
	elif tickType in {2, 67}:
		if size == 0:
			price = self.defaultEmptyPrice
			size = self.defaultEmptySize
		ticker.prevAsk = ticker.ask
		ticker.prevAskSize = ticker.askSize
		ticker.ask = price
		ticker.askSize = size
	elif tickType in {4, 68}:
		if price == -1 and size == 0 and ticker.close > 0:
			price = self.defaultEmptyPrice
			size = self.defaultEmptySize
		ticker.prevLast = ticker.last
		ticker.prevLastSize = ticker.lastSize
		ticker.last = price
		ticker.lastSize = size
	else:
		assert tickType in PRICE_TICK_MAP
		setattr(ticker, PRICE_TICK_MAP[tickType], price)

	if price or size:
		tick = TickData(self.lastTime, tickType, price, size)
		ticker.ticks.append(tick)

	self.pendingTickers.add(ticker)
```

--------------------------------

### Request Market and Fundamental Data

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Utility methods for fetching head timestamps, market depth exchanges, histogram data, and fundamental reports asynchronously.

```python
async def reqHeadTimeStampAsync(self, contract, whatToShow, useRTH, formatDate) -> datetime.datetime:
    reqId = self.client.getReqId()
    future = self.wrapper.startReq(reqId, contract)
    self.client.reqHeadTimeStamp(reqId, contract, whatToShow, useRTH, formatDate)
    await future
    self.client.cancelHeadTimeStamp(reqId)
    return future.result()

def reqFundamentalDataAsync(self, contract, reportType, fundamentalDataOptions=[]) -> Awaitable[str]:
    reqId = self.client.getReqId()
    future = self.wrapper.startReq(reqId, contract)
    self.client.reqFundamentalData(reqId, contract, reportType, fundamentalDataOptions)
    return future
```

--------------------------------

### Initialize and Validate Ticker Data

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ticker.html

The Ticker class uses a post-init hook to initialize market data fields to default unset values. It includes helper methods like hasBidAsk to verify if valid market liquidity exists for a given ticker.

```python
def __post_init__(self):
    if not self.created:
        self.updateEvent = TickerUpdateEvent("updateEvent")
        self.bid = self.defaults.unset
        self.ask = self.defaults.unset
        # ... additional field initializations ...
        self.created = True

def isUnset(self, value) -> bool:
    dev = self.defaults.unset
    return (dev != dev and value != value) or (value == dev)

def hasBidAsk(self) -> bool:
    """See if this ticker has a valid bid and ask."""
    return (
        self.bid != -1
        and not self.isUnset(self.bid)
        and self.bidSize > 0
        and self.ask != -1
        and not self.isUnset(self.ask)
        and self.askSize > 0
    )
```

--------------------------------

### Connect to IB Gateway/TWS (Blocking)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Establishes a blocking connection to a running TWS or IB gateway. The connection will wait until the client is ready to serve requests, with an optional timeout.

```python
client.connect(host='127.0.0.1', port=7497, clientId=1, timeout=2.0)
```

--------------------------------

### Request Open Orders Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously requests a list of all currently open orders. Returns an Awaitable that resolves to a list of Trade objects.

```python
reqOpenOrdersAsync()
```

--------------------------------

### Process News Article (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Handles a news article, including its type and text content. It creates a NewsArticle object and ends the request with the article.

```python
def newsArticle(self, reqId: int, articleType: int, articleText: str):
        article = NewsArticle(articleType, articleText)
        self._endReq(reqId, article)
```

--------------------------------

### Initialize and Reset Wrapper State

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Defines the data structures used to track IB API entities and provides a reset method to clear all internal caches and dictionaries to their default states.

```python
def reset(self):
	self.accountValues = {}
	self.acctSummary = {}
	self.portfolio = defaultdict(dict)
	self.positions = defaultdict(dict)
	self.trades = {}
	self.permId2Trade = {}
	self.fills = {}
	self.newsTicks = []
	self.msgId2NewsBulletin = {}
	self.tickers = {}
	self.pendingTickers = set()
	self.reqId2Ticker = {}
	self.ticker2ReqId = defaultdict(dict)
	self.reqId2Subscriber = {}
	self.reqId2PnL = {}
	self.reqId2PnlSingle = {}
	self.pnlKey2ReqId = {}
	self.pnlSingleKey2ReqId = {}
	self.lastTime = datetime.min
	self.time = -1
	self.accounts = []
	self.clientId = -1
	self.wshMetaReqId = 0
	self.wshEventReqId = 0
	self._reqId2Contract = {}
	self._timeout = 0
	self._futures = {}
	self._results = {}
	self.setTimeout(0)
```

--------------------------------

### Option Computation Calculations

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Provides methods for calculating option-related values. `calculateImpliedVolatility` computes implied volatility given option and underlying prices, while `calculateOptionPrice` computes the option price given volatility and underlying price. Both are blocking methods.

```python
def calculateImpliedVolatility(_contract_ , _optionPrice_ , _underPrice_ , _implVolOptions =[]_):
    """
    Calculate the volatility given the option price.
    This method is blocking.
    https://interactivebrokers.github.io/tws-api/option_computations.html 

    Parameters:
        contract (Contract): Option contract.
        optionPrice (float): Option price to use in calculation.
        underPrice (float): Price of the underlier to use in calculation
        implVolOptions (list[TagValue]): Unknown
    Return type:
        OptionComputation
    """
    pass

def calculateOptionPrice(_contract_ , _volatility_ , _underPrice_ , _optPrcOptions =[]_):
    """
    Calculate the option price given the volatility.
    This method is blocking.
    https://interactivebrokers.github.io/tws-api/option_computations.html 

    Parameters:
        contract (Contract): Option contract.
        volatility (float): Option volatility to use in calculation.
        underPrice (float): Price of the underlier to use in calculation
        implVolOptions: Unknown
    Return type:
        OptionComputation
    """
    pass
```

--------------------------------

### Request Snapshot Tickers (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Requests and returns a list of snapshot tickers for the specified contracts. This method is blocking and returns only when all requested tickers are ready. It can optionally request regulatory snapshots which may incur a fee.

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
    return self._run(self.reqTickersAsync(*contracts, regulatorySnapshot=regulatorySnapshot))
```

--------------------------------

### Place Orders with Protocol Handling

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Serializes and sends order data to the IBKR server. Includes a critical bug fix to strip 'volatility' fields from non-volatility orders to prevent API rejection during modifications.

```python
def placeOrder(self, orderId, contract, order):
    version = self.serverVersion()
    if not order.orderType.startswith("VOL"):
        order.volatility = None

    fields = [
        3, orderId, contract, contract.secIdType, contract.secId,
        order.action, order.totalQuantity, order.orderType,
        order.lmtPrice, order.auxPrice, order.tif, order.ocaGroup,
        order.account, order.openClose, order.origin, order.orderRef,
        order.transmit, order.parentId, order.blockOrder,
        order.sweepToFill, order.displaySize, order.triggerMethod,
        order.outsideRth, order.hidden
    ]
    # ... (additional logic for BAG and FA parameters omitted for brevity)
    self.send(*fields)
```

--------------------------------

### Asynchronous API Connection and Initialization

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Handles the asynchronous connection to the TWS API and performs concurrent initialization of account updates, open orders, and positions.

```python
async def connectAsync(
    self,
    host: str = "127.0.0.1",
    port: int = 7497,
    clientId: int = 1,
    timeout: float | None = 4,
    readonly: bool = False,
    account: str = "",
    raiseSyncErrors: bool = False,
    fetchFields: StartupFetch = StartupFetchALL,
):
    clientId = int(clientId)
    self.wrapper.clientId = clientId
    timeout = timeout or None
    try:
        await self.client.connectAsync(host, port, clientId, timeout)
        if clientId == 0:
            self.reqAutoOpenOrders(True)
        accounts = self.client.getAccounts()
        if not account and len(accounts) == 1:
            account = accounts[0]
        reqs: dict[str, Awaitable[Any]] = {}
        reqs["positions"] = self.reqPositionsAsync()
        if not readonly:
            if fetchFields & StartupFetch.ORDERS_OPEN:
                reqs["open orders"] = self.reqOpenOrdersAsync()
        # ... (additional initialization logic)
```

--------------------------------

### Fetch News Article Asynchronously

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Retrieves a specific news article based on the provider code and article ID. Returns an awaitable NewsArticle object.

```python
async def reqNewsArticleAsync(providerCode, articleId, newsArticleOptions=[]):
    # Implementation logic for fetching news article
    pass
```

--------------------------------

### Request Positions (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Requests and returns a list of current positions. It is recommended to use the `.positions` method instead.

```python
def reqPositions(self) -> list[Position]:
        """
        It is recommended to use :meth:`.positions` instead.
        
```

--------------------------------

### Initialize IB Connection

Source: https://ib-api-reloaded.github.io/ib_async/api.html

The IB class is initialized to manage the connection to TWS or IB Gateway. It supports configuration of timeouts, error handling, and timezone settings.

```python
from ib_async import IB

ib = IB()
ib.connect('127.0.0.1', 7497, clientId=1)

# Use IB.sleep(0) to allow the event loop to process pending tasks
ib.sleep(0)
```

--------------------------------

### Qualify Contract Details Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously looks up and qualifies contract details. It returns matching Contract objects or a list of contracts if the request is ambiguous and 'returnAll' is True. Returns None for unqualified contracts.

```python
_async _qualifyContractsAsync(_* contracts_, _returnAll =False_)
```

--------------------------------

### Access news and corporate events with Python

Source: https://ib-api-reloaded.github.io/ib_async/_sources/recipes.rst.txt

Retrieves news articles, bulletins, and Wall Street Horizon corporate event data for specific instruments.

```python
# News articles
newsProviders = ib.reqNewsProviders()
codes = '+'.join(np.code for np in newsProviders)
amd = Stock('AMD', 'SMART', 'USD')
ib.qualifyContracts(amd)
headlines = ib.reqHistoricalNews(amd.conId, codes, '', '', 10)
article = ib.reqNewsArticle(headlines[0].providerCode, headlines[0].articleId)

# WSH Event Calendar
data = WshEventData(filter = '{"country": "All", "watchlist": ["8314"], "wshe_ed": "true"}')
events = ib.getWshEventData(data)
```

--------------------------------

### Real-time P&L Tracking

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Subscribes to real-time Profit and Loss (P&L) updates for a specified account. It defines a callback function `onPnL` to process and print these updates. The script runs indefinitely until interrupted.

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

### Minimum price increments

Source: https://ib-api-reloaded.github.io/ib_async/recipes.html

Fetches contract details to identify market rule IDs, then retrieves the specific market rules defining minimum price increments.

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

### Fetch Historical Data and Calculate SMA with ib_async

Source: https://ib-api-reloaded.github.io/ib_async/readme.html

This Python snippet demonstrates how to connect to the IBKR API, request historical data for different timeframes (daily and 5-minute bars), convert the data into pandas DataFrames, and calculate a 20-day Simple Moving Average (SMA). It uses the `ib_async` library for API interaction and `pandas` for data manipulation.

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

### Request Contract Details

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Fetches detailed information for a specific financial contract. It includes conditional logic to handle server versioning for issuer ID support.

```python
def reqContractDetails(self, reqId, contract):
    fields = [
        9,
        8,
        reqId,
        contract,
        contract.includeExpired,
        contract.secType,
        contract.secId,
    ]

    if self.serverVersion() >= 176:
        fields += [contract.issuerId]

    self.send(*fields)
```

--------------------------------

### Connect to Interactive Brokers API

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Establishes a connection to the Interactive Brokers API. The `connect` method blocks until the client is ready, and `connectAsync` provides an asynchronous alternative. Connection options and timeouts can be specified.

```python
# Blocking connection
client.connect(host='127.0.0.1', port=7497, clientId=0)

# Asynchronous connection (requires running within an asyncio event loop)
# await client.connectAsync(host='127.0.0.1', port=7497, clientId=0, timeout=2.0)
```

--------------------------------

### Order Object Documentation

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Provides a comprehensive overview of the Order object, including its attributes and their data types, used for defining trading orders.

```APIDOC
## Order Object

### Description
Represents an order for trading contracts on the Interactive Brokers platform. This object contains numerous parameters to specify order details such as action, quantity, price, time-in-force, and advanced trading strategies.

### Endpoint
N/A (This is a data structure documentation)

### Parameters

#### Core Order Parameters
- **orderId** (int) - Unique identifier for the order.
- **clientId** (int) - Identifier for the client application submitting the order.
- **permId** (int) - Permanent identifier for the order.
- **action** (str) - The action to be taken (e.g., 'BUY', 'SELL').
- **totalQuantity** (float) - The total number of shares or contracts to trade.
- **orderType** (str) - The type of order (e.g., 'MKT', 'LMT', 'STP').
- **lmtPrice** (float | Decimal | None) - The limit price for limit orders.
- **auxPrice** (float | Decimal | None) - Auxiliary price, often used for stop orders or other specific order types.
- **tif** (str) - Time-in-force (e.g., 'DAY', 'GTC').
- **activeStartTime** (str) - The start time for an active order.
- **activeStopTime** (str) - The stop time for an active order.
- **ocaGroup** (str) - Order Grouping for One-Cancels-All (OCA) orders.
- **ocaType** (int) - Type of OCA order.
- **orderRef** (str) - Reference string for the order.
- **transmit** (bool) - Whether to transmit the order immediately.
- **parentId** (int) - Identifier for a parent order in a bracket order.
- **blockOrder** (bool) - Indicates if this is a block order.
- **sweepToFill** (bool) - Whether to sweep to fill the order.
- **displaySize** (int) - The size to display for the order.
- **triggerMethod** (int) - Method used to trigger the order.
- **outsideRth** (bool) - Whether the order can be executed outside regular trading hours.
- **hidden** (bool) - Whether the order is hidden.
- **goodAfterTime** (str) - The time after which the order becomes effective.

_... (Many more parameters exist for advanced order types, options, futures, and algorithmic trading. Refer to the official documentation for a complete list.)_

### Request Example
```json
{
  "orderId": 1,
  "clientId": 100,
  "action": "BUY",
  "totalQuantity": 100.0,
  "orderType": "LMT",
  "lmtPrice": 50.50,
  "tif": "DAY"
}
```

### Response
#### Success Response (200)
- **orderId** (int) - The ID of the successfully placed order.
- **status** (str) - The status of the order (e.g., 'Submitted', 'Filled').

#### Response Example
```json
{
  "orderId": 1,
  "status": "Submitted"
}
```

### Further Information
For a complete list of all order parameters and their specific uses, please refer to the [official Interactive Brokers API documentation](https://interactivebrokers.github.io/tws-api/available_orders.html).
```

--------------------------------

### Retrieve Account and Portfolio Data

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Functions to fetch account summaries, portfolio items, and positions from the IB API. These methods support filtering by account name and provide access to current financial data.

```python
def accountValues(self, account: str = "") -> list[AccountValue]:
    if account:
        return [v for v in self.wrapper.accountValues.values() if v.account == account]
    return list(self.wrapper.accountValues.values())

def portfolio(self, account: str = "") -> list[PortfolioItem]:
    if account:
        return list(self.wrapper.portfolio[account].values())
    return [v for d in self.wrapper.portfolio.values() for v in d.values()]
```

--------------------------------

### Exercise Options Contract

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Executes an option contract exercise. This function requires the option contract details, exercise action (exercise or lapse), quantity, account, and an override flag. It sends the exercise request to the client.

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

### Request Contract and Market Data

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Blocking methods to retrieve contract details, matching symbols based on patterns, and market rule price increments.

```python
def reqContractDetails(self, contract: Contract) -> list[ContractDetails]:
	return self._run(self.reqContractDetailsAsync(contract))

def reqMatchingSymbols(self, pattern: str) -> list[ContractDescription]:
	return self._run(self.reqMatchingSymbolsAsync(pattern))

def reqMarketRule(self, marketRuleId: int) -> PriceIncrement:
	return self._run(self.reqMarketRuleAsync(marketRuleId))
```

--------------------------------

### Request Market Data and Cancel Subscriptions

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Methods to initiate market data requests for specific contracts and cancel existing subscriptions. It supports complex contract types like 'BAG' (combos) and delta-neutral configurations.

```python
def reqMktData(self, reqId, contract, genericTickList, snapshot, regulatorySnapshot, mktDataOptions):
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

def cancelMktData(self, reqId):
    self.send(2, 2, reqId)
```

--------------------------------

### Request All Open Orders Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously requests a list of all open orders, potentially including those not typically shown. Returns an Awaitable resolving to a list of Trade objects.

```python
reqAllOpenOrdersAsync()
```

--------------------------------

### Qualify Contracts (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Fully qualifies the provided contracts in-place, filling in missing fields like the contract ID (conId). This method is blocking and returns a list of successfully qualified contracts.

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

### Ticker Class Initialization and Data Attributes

Source: https://ib-api-reloaded.github.io/ib_async/api.html

This snippet outlines the initialization parameters and various data attributes of the Ticker class. It covers market data like bid, ask, last price, volume, and historical data, as well as option-specific Greeks and event-related attributes. The class is designed to hold comprehensive real-time market information.

```python
class Ticker(_contract=None, _time=None, _timestamp=None, _marketDataType=1, _minTick=nan, _bid=nan, _bidSize=nan, _bidExchange='', _ask=nan, _askSize=nan, _askExchange='', _last=nan, _lastSize=nan, _lastExchange='', _lastTimestamp=None, _prevBid=nan, _prevBidSize=nan, _prevAsk=nan, _prevAskSize=nan, _prevLast=nan, _prevLastSize=nan, _volume=nan, _open=nan, _high=nan, _low=nan, _close=nan, _vwap=nan, _low13week=nan, _high13week=nan, _low26week=nan, _high26week=nan, _low52week=nan, _high52week=nan, _bidYield=nan, _askYield=nan, _lastYield=nan, _markPrice=nan, _halted=nan, _rtHistVolatility=nan, _rtVolume=nan, _rtTradeVolume=nan, _rtTime=None, _avVolume=nan, _tradeCount=nan, _tradeRate=nan, _volumeRate=nan, _volumeRate3Min=nan, _volumeRate5Min=nan, _volumeRate10Min=nan, _shortable=nan, _shortableShares=nan, _indexFuturePremium=nan, _futuresOpenInterest=nan, _putOpenInterest=nan, _callOpenInterest=nan, _putVolume=nan, _callVolume=nan, _avOptionVolume=nan, _histVolatility=nan, _impliedVolatility=nan, _openInterest=nan, _lastRthTrade=nan, _lastRegTime='', _optionBidExch='', _optionAskExch='', _bondFactorMultiplier=nan, _creditmanMarkPrice=nan, _creditmanSlowMarkPrice=nan, _delayedLastTimestamp=None, _delayedHalted=nan, _reutersMutualFunds='', _etfNavClose=nan, _etfNavPriorClose=nan, _etfNavBid=nan, _etfNavAsk=nan, _etfNavLast=nan, _etfFrozenNavLast=nan, _etfNavHigh=nan, _etfNavLow=nan, _socialMarketAnalytics='', _estimatedIpoMidpoint=nan, _finalIpoLast=nan, _dividends=None, _fundamentalRatios=None, _ticks=<factory>, _tickByTicks=<factory>, _domBids=<factory>, _domBidsDict=<factory>, _domAsks=<factory>, _domAsksDict=<factory>, _domTicks=<factory>, _bidGreeks=None, _askGreeks=None, _lastGreeks=None, _modelGreeks=None, _custGreeks=None, _bidEfp=None, _askEfp=None, _lastEfp=None, _openEfp=None, _highEfp=None, _lowEfp=None, _closeEfp=None, _auctionVolume=nan, _auctionPrice=nan, _auctionImbalance=nan, _regulatoryImbalance=nan, _bboExchange='', _snapshotPermissions=0, _defaults=<factory>, _created=False)
```

--------------------------------

### Lint and Fix Code with Ruff

Source: https://ib-api-reloaded.github.io/ib_async/readme.html

Checks the `ib_async` codebase for linting issues and automatically attempts to fix them using `ruff`. This command helps maintain code quality and adherence to style guidelines.

```bash
poetry run ruff check --fix

```

--------------------------------

### Manage WSH Event Data Requests

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Methods to request and cancel Wall Street Horizon event data subscriptions. These methods require an active Wall Street Horizon subscription.

```python
def cancelWshEventData(self):
    """Cancel active WHS event data."""
    reqId = self.wrapper.wshEventReqId
    if not reqId:
        self._logger.warning("reqWshEventData not active")
    else:
        self.client.cancelWshEventData(reqId)
        self.wrapper.wshEventReqId = 0
```

--------------------------------

### Dataclass Utility Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Common utility methods available on ib_async order classes for converting data to dictionaries, tuples, or identifying non-default fields and performing updates.

```python
# Convert to dict
data = obj.dict()

# Get non-default fields
changes = obj.nonDefaults()

# Convert to tuple
tup = obj.tuple()

# Update from other objects or kwargs
obj.update(other_obj, field=value)
```

--------------------------------

### Request Contract Details Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously requests detailed information for a given contract. Returns an Awaitable resolving to a list of ContractDetails objects.

```python
reqContractDetailsAsync(_contract_)
```

--------------------------------

### Request Market Data

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Subscribes to real-time market data or requests a snapshot for a contract. Returns a Ticker object that updates as data arrives.

```python
def reqMktData(self, contract: Contract, genericTickList: str = "", snapshot: bool = False, regulatorySnapshot: bool = False, mktDataOptions: list[TagValue] = []) -> Ticker:
	return self._run(
		self.reqMktDataAsync(contract, genericTickList, snapshot, regulatorySnapshot, mktDataOptions)
	)
```

--------------------------------

### Request Snapshot Tickers - Python

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Requests and returns a list of snapshot tickers for specified contracts. This method is blocking and returns only when all tickers are ready. It can optionally request NBBO snapshots which may incur a fee.

```python
ib.reqTickers(*contracts, regulatorySnapshot=False)
```

--------------------------------

### Retrieve Wall Street Horizon Metadata

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Demonstrates how to fetch WSH metadata, including available filters and event types, using the blocking getWshMetaData method.

```python
# Get the list of available filters and event types:
meta = ib.getWshMetaData()
print(meta)
```

--------------------------------

### Process Real-Time Volume Ticks

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Parses complex real-time volume tick strings from the API. It extracts price, size, volume, and VWAP data, updating the ticker object accordingly.

```python
def _processRtVolumeTick(self, ticker: Ticker, tickType: int, value: str) -> tuple[float, float] | None:
    priceStr, sizeStr, rtTime, volume, vwap, _ = value.split(";")
    if volume:
        volumeField = RT_VOLUME_TICK_MAP[tickType]
        setattr(ticker, volumeField, float(volume))
    if vwap:
        ticker.vwap = float(vwap)
    if rtTime:
        ticker.rtTime = datetime.fromtimestamp(int(rtTime) / 1000, self.defaultTimezone)
    if priceStr == "":
        return None
    return (float(priceStr), float(sizeStr))
```

--------------------------------

### ScannerSubscription Object Definition and Methods (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Defines the ScannerSubscription object with various parameters for market scanning. Includes methods to convert the object to a dictionary, retrieve non-default values as a dictionary, convert to a tuple, and update its fields.

```python
class ScannerSubscription:
    def __init__(self, _numberOfRows=-1, _instrument='', _locationCode='', _scanCode='', _abovePrice=1.7976931348623157e+308, _belowPrice=1.7976931348623157e+308, _aboveVolume=2147483647, _marketCapAbove=1.7976931348623157e+308, _marketCapBelow=1.7976931348623157e+308, _moodyRatingAbove='', _moodyRatingBelow='', _spRatingAbove='', _spRatingBelow='', _maturityDateAbove='', _maturityDateBelow='', _couponRateAbove=1.7976931348623157e+308, _couponRateBelow=1.7976931348623157e+308, _excludeConvertible=False, _averageOptionVolumeAbove=2147483647, _scannerSettingPairs='', _stockTypeFilter=''):
        # ... attributes ...
        pass

    def dict(self) -> dict:
        # ... implementation ...
        pass

    def nonDefaults(self) -> dict:
        # ... implementation ...
        pass

    def tuple(self) -> tuple:
        # ... implementation ...
        pass

    def update(self, *srcObjs, **kwargs):
        # ... implementation ...
        pass
```

--------------------------------

### Order Class Utility Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Provides utility methods for the Order class, including `dict()` to return dataclass values as a dictionary, `nonDefaults()` to return fields that differ from their default values as a dictionary, and `tuple()` to return dataclass values as a tuple. The `update()` method allows modifying the object's fields from source objects or keyword arguments.

```python
dict()
    
Return dataclass values as `dict`. This is a non-recursive variant of `dataclasses.asdict`.

Return type:
    
`dict` 

nonDefaults()
    
For a `dataclass` instance get the fields that are different from the default values and return as `dict`. 

Return type:
    
`dict`[`str`, `Any`] 

tuple()
    
Return dataclass values as `tuple`. This is a non-recursive variant of `dataclasses.astuple`.

Return type:
    
`tuple`[`Any`, `...`] 

update(_* srcObjs_, _** kwargs_)
    
Update fields of the given `dataclass` object from zero or more `dataclass` source objects and/or from keyword arguments. 

Return type:
    
`object`
```

--------------------------------

### Subscribe to Market Depth Data (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Subscribes to market depth data, also known as DOM, L2, or order book. It takes a contract, number of rows, and smart depth option as input. Returns a Ticker object containing bid and ask data.

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

### Fetch consecutive historical data with Python

Source: https://ib-api-reloaded.github.io/ib_async/_sources/recipes.rst.txt

Demonstrates how to iteratively request historical bar data for a contract by moving backward in time. It collects the data into a list and exports the final result to a CSV file.

```python
import datetime
from ib_async import *

ib = IB()
ib.connect('127.0.0.1', 7497, clientId=1)

contract = Stock('TSLA', 'SMART', 'USD')

dt = ''
barsList = []
while True:
    bars = ib.reqHistoricalData(
        contract,
        endDateTime=dt,
        durationStr='10 D',
        barSizeSetting='1 min',
        whatToShow='MIDPOINT',
        useRTH=True,
        formatDate=1)
    if not bars:
        break
    barsList.append(bars)
    dt = bars[0].date
    print(dt)

allBars = [b for bars in reversed(barsList) for b in bars]
df = util.df(allBars)
df.to_csv(contract.symbol + '.csv', index=False)
```

--------------------------------

### Configure Windows Event Loop for IBC

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ibcontroller.html

When running IBC on Windows, it is necessary to explicitly set the event loop to ProactorEventLoop to ensure compatibility with the underlying subprocess management.

```python
import asyncio
asyncio.set_event_loop(asyncio.ProactorEventLoop())
```

--------------------------------

### Request User Information Asynchronously

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Retrieves the current user's information from the API.

```python
async def reqUserInfoAsync():
    # Implementation logic for user info request
    pass
```

--------------------------------

### Perform Type Checking with MyPy

Source: https://ib-api-reloaded.github.io/ib_async/readme.html

Runs static type checking on the `ib_async` codebase using `mypy`. This helps catch type-related errors early in the development process, improving code reliability.

```bash
poetry run mypy ib_async

```

--------------------------------

### Request Market Data (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Subscribes to real-time streaming tick data for a given contract. It returns a Ticker object that will hold the incoming data. Requires a Contract object and optional parameters for snapshotting and regulatory data.

```python
def reqMktData(
    self,
    contract: Contract,
    genericTickList: str,
    snapshot: bool,
    regulatorySnapshot: bool,
    mktDataOptions: dict,
) -> Ticker:
    """
    Request real-time streaming tick data.

    Args:
        contract: Contract of interest.
        genericTickList: Comma-separated list of generic tick field IDs.
        snapshot: If True then request a one-time snapshot, otherwise
            subscribe to a stream of realtime tick data.
        regulatorySnapshot: Request NBBO snapshot (may incur a fee).
        mktDataOptions: Unknown
    """
    reqId = self.client.getReqId()
    ticker = self.wrapper.startTicker(reqId, contract, "mktData")
    self.client.reqMktData(
        reqId,
        contract,
        genericTickList,
        snapshot,
        regulatorySnapshot,
        mktDataOptions,
    )
    return ticker
```

--------------------------------

### Request Market Depth Exchanges Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously retrieves a list of exchanges available for market depth data. Returns an Awaitable resolving to a list of DepthMktDataDescription objects.

```python
reqMktDepthExchangesAsync()
```

--------------------------------

### Access Interactive Brokers FlexReport

Source: https://ib-api-reloaded.github.io/ib_async/api.html

The FlexReport class allows downloading, loading, and parsing account statement reports from the IB Flex Web Service.

```python
from ib_async.flexreport import FlexReport

# Initialize and download report
fr = FlexReport(token='YOUR_TOKEN', queryId='YOUR_QUERY_ID')
fr.download(token='YOUR_TOKEN', queryId='YOUR_QUERY_ID')

# Extract data as list or DataFrame
trades = fr.extract('TradeConfirm')
df = fr.df('TradeConfirm')
```

--------------------------------

### Update Market Depth (Simplified) (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Provides a simplified interface for updating market depth, primarily calling the more detailed `updateMktDepthL2` function. This method is useful when the `marketMaker` information is not relevant or available.

```python
def updateMktDepth(
        self,
        reqId: int,
        position: int,
        operation: int,
        side: int,
        price: float,
        size: float,
    ):
        self.updateMktDepthL2(reqId, position, "", operation, side, price, size)
```

--------------------------------

### Request Contract Details

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Retrieves detailed information about a specific financial contract.

```python
client.reqContractDetails(reqId=1, contract=contract_object)
```

--------------------------------

### Check Connection Status

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Provides a simple interface to verify if the client is currently connected and ready to process requests.

```python
def isConnected(self) -> bool:
    """Is there an API connection to TWS or IB gateway?"""
    return self.client.isReady()
```

--------------------------------

### Request Open Orders

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Retrieves a list of all currently open orders associated with the client.

```python
client.reqOpenOrders()
```

--------------------------------

### Request Executions (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Requests and returns a list of fills. It is recommended to use `.fills` or `.executions` instead. This method is blocking and can optionally filter executions based on provided criteria.

```python
def reqExecutions(self, execFilter: ExecutionFilter | None = None) -> list[Fill]:
        """
        It is recommended to use :meth:`.fills`  or
        :meth:`.executions` instead.

        Request and return a list of fills.

        This method is blocking.

        Args:
            execFilter: If specified, return executions that match the filter.
        """
        return self._run(self.reqExecutionsAsync(execFilter))
```

--------------------------------

### Request Account Updates (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Requests account and portfolio values, keeping them updated. This method is blocking and is typically called at startup. It can optionally filter for a specific account.

```python
def reqAccountUpdates(self, account: str = ""):
        """
        This is called at startup - no need to call again.

        Request account and portfolio values of the account
        and keep updated. Returns when both account values and portfolio
        are filled.

        This method is blocking.

        Args:
            account: If specified, filter for this account name.
        """
        self._run(self.reqAccountUpdatesAsync(account))
```

--------------------------------

### Request Market Data Tickers Asynchronously

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously requests market data tickers for a list of contracts. It manages request IDs, initiates asynchronous requests for ticker data, and collects the ticker information. Supports regulatory snapshot requests.

```python
async def reqTickersAsync(
        self, *contracts: Contract, regulatorySnapshot: bool = False
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

### Dataclass Utility Methods in ib_async

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Standardized methods implemented across ib_async dataclasses to facilitate data conversion and object updates. These methods allow for non-recursive serialization and partial field updates.

```python
def dict(self) -> dict:
    """Return dataclass values as dict. Non-recursive variant of dataclasses.asdict."""
    pass

def nonDefaults(self) -> dict[str, Any]:
    """Get fields that are different from the default values and return as dict."""
    pass

def tuple(self) -> tuple[Any, ...]:
    """Return dataclass values as tuple. Non-recursive variant of dataclasses.astuple."""
    pass

def update(self, *srcObjs, **kwargs) -> object:
    """Update fields from zero or more source objects and/or keyword arguments."""
    pass
```

--------------------------------

### Manage Asynchronous Subprocesses

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ibcontroller.html

Methods for executing, monitoring, and terminating external processes asynchronously. It handles platform-specific termination logic for Windows and Unix-like systems.

```python
async def terminateAsync(self):
    if not self._proc:
        return
    self._logger.info("Terminating")
    if self._monitor:
        self._monitor.cancel()
        self._monitor = None
    if self._isWindows:
        import subprocess
        subprocess.call(["taskkill", "/F", "/T", "/PID", str(self._proc.pid)])
    else:
        with suppress(ProcessLookupError):
            self._proc.terminate()
            await self._proc.wait()
    self._proc = None

async def monitorAsync(self):
    while self._proc:
        line = await self._proc.stdout.readline()
        if not line:
            break
        self._logger.log(IBC.IbcLogLevel, line.strip().decode())
```

--------------------------------

### Handle Smart Components Response (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Processes the response for smart components, typically used for routing information. This method calls a generic `_endReq` function, indicating the completion of a request identified by `reqId` and passing the received `components` data.

```python
def smartComponents(self, reqId, components):
    self._endReq(reqId, components)
```

--------------------------------

### Qualify Contracts - Python

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Fully qualifies the given contracts in-place, filling in missing fields like `conId`. Returns a list of successfully qualified contracts. This method is blocking.

```python
ib.qualifyContracts(*contracts)
```

--------------------------------

### Process Scanner Parameters (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Handles the XML string containing scanner parameters. It calls an internal method to end the request with the provided XML data.

```python
def scannerParameters(self, xml: str):
        self._endReq("scannerParams", xml)
```

--------------------------------

### Contract Hashing and Equality

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Implements methods for checking if a contract is hashable and defines equality and hashing behavior for Contract objects. It handles special cases like 'BAG' and 'CONTFUT' contracts.

```python
    def isHashable(self) -> bool:
        """
        See if this contract can be hashed by conId.

        Note: Bag contracts always get conId=28812380, so they're not hashable by conId,
              but we generate a synthetic hash for them based on leg details instead.
        """
        return bool(self.conId)

    def __eq__(self, other):
        return isinstance(other, Contract) and (
            self.conId
            and self.conId == other.conId
            or util.dataclassAsDict(self) == util.dataclassAsDict(other)
        )

    def __hash__(self) -> int:
        if self.secType == "BAG":
            return hash(
                tuple(
                    [
                        util.dataclassAsTuple(b)
                        for b in sorted(self.comboLegs, key=lambda x: x.conId)
                    ]
                    + [self.symbol, self.exchange]
                )
            )

        if not self.isHashable():
            raise ValueError(
                f"Contract {self} can't be hashed because no 'conId' value exists. Qualify contract to populate 'conId'."
            )

        if self.secType == "CONTFUT":
            # CONTFUT gets the same conId as the front contract, invert it here
            h = -self.conId
        else:
            h = self.conId

        return h
```

--------------------------------

### Simulate Order Execution Asynchronously

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Initiates an asynchronous 'what-if' order simulation for a given contract and order. This method creates a copy of the order to avoid modifying the original and returns an awaitable object representing the order state.

```python
def whatIfOrderAsync(
        self, contract: Contract, order: Order
    ) -> Awaitable[OrderState]:
        whatIfOrder = copy.copy(order)
        # Note: The actual implementation for sending the what-if order and awaiting its state is omitted here.
```

--------------------------------

### Option Contract Definition (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Defines the Option contract, inheriting from the base Contract class. It initializes an option with its symbol, expiration, strike, right, and other relevant details.

```python
class Option(Contract):
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
        Option contract.

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
            "OPT",
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

### Request Account Updates Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously requests updates for a specific account. Returns an Awaitable that resolves to None upon completion.

```python
reqAccountUpdatesAsync(_account_)
```

--------------------------------

### Market Data and PnL Requests

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Endpoints for requesting historical data, PnL updates, and market rules.

```APIDOC
## GET /reqPnL

### Description
Requests Profit and Loss (PnL) updates for a specific account or model.

### Method
GET

### Parameters
#### Query Parameters
- **reqId** (int) - Required - Unique identifier for the request.
- **account** (string) - Required - The account ID.
- **modelCode** (string) - Optional - The model code for the account.

### Response
#### Success Response (200)
- **status** (string) - Confirmation of PnL subscription.
```

--------------------------------

### Fetching consecutive historical data with ib_async

Source: https://ib-api-reloaded.github.io/ib_async/recipes.html

Demonstrates how to iteratively request historical bar data by updating the endDateTime until no more data is returned. The results are aggregated and converted into a pandas DataFrame for CSV export.

```python
import datetime
from ib_async import *

ib = IB()
ib.connect('127.0.0.1', 7497, clientId=1)

contract = Stock('TSLA', 'SMART', 'USD')

dt = ''
barsList = []
while True:
    bars = ib.reqHistoricalData(
        contract,
        endDateTime=dt,
        durationStr='10 D',
        barSizeSetting='1 min',
        whatToShow='MIDPOINT',
        useRTH=True,
        formatDate=1)
    if not bars:
        break
    barsList.append(bars)
    dt = bars[0].date
    print(dt)

# save to CSV file
allBars = [b for bars in reversed(barsList) for b in bars]
df = util.df(allBars)
df.to_csv(contract.symbol + '.csv', index=False)
```

--------------------------------

### Request Multi Account Updates - Python

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Requests account values for multiple accounts and keeps them updated. It is recommended to use `accountValues()` instead. This method is blocking.

```python
ib.reqAccountUpdatesMulti(account='', modelCode='')
```

--------------------------------

### Option and Contract Details

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Endpoints for exercising options, retrieving option parameters, and family codes.

```APIDOC
## POST /exerciseOptions

### Description
Exercises options for a given contract.

### Method
POST

### Endpoint
/exerciseOptions

### Parameters
#### Query Parameters
- **_reqId_** (integer) - Required - Unique identifier for the request.
- **_contract_** (object) - Required - Contract details of the option.
- **_exerciseAction_** (string) - Required - Action to perform ('EXERCISE' or 'ASSIGN').
- **_exerciseQuantity_** (integer) - Required - Quantity to exercise.
- **_account_** (string) - Required - The account identifier.
- **_override_** (integer) - Optional - Override settings (0 for false, 1 for true).

### Response
#### Success Response (200)
- **exerciseStatus** (string) - Status of the option exercise request.

#### Response Example
```json
{
  "exerciseStatus": "Submitted"
}
```

## POST /reqSecDefOptParams

### Description
Requests option parameters for a given underlying contract.

### Method
POST

### Endpoint
/reqSecDefOptParams

### Parameters
#### Query Parameters
- **_reqId_** (integer) - Required - Unique identifier for the request.
- **_underlyingSymbol_** (string) - Required - The underlying symbol.
- **_futFopExchange_** (string) - Required - The exchange for futures and options.
- **_underlyingSecType_** (string) - Required - The security type of the underlying (e.g., 'STK').
- **_underlyingConId_** (integer) - Required - The contract ID of the underlying.

### Response
#### Success Response (200)
- **optionParams** (array) - List of available option parameters (e.g., 'right', 'multiplier').

#### Response Example
```json
{
  "optionParams": [
    {
      "right": "Call",
      "multiplier": 100
    }
  ]
}
```

## POST /reqFamilyCodes

### Description
Retrieves a list of family codes used for grouping contracts.

### Method
POST

### Endpoint
/reqFamilyCodes

### Response
#### Success Response (200)
- **familyCodes** (array) - List of family code objects.

#### Response Example
```json
{
  "familyCodes": [
    {
      "familyCode": "EU.OPTS",
      "description": "European Options"
    }
  ]
}
```

## POST /reqMatchingSymbols

### Description
Finds matching symbols based on a pattern.

### Method
POST

### Endpoint
/reqMatchingSymbols

### Parameters
#### Query Parameters
- **_reqId_** (integer) - Required - Unique identifier for the request.
- **_pattern_
```

--------------------------------

### Request News Bulletins

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Subscribes to real-time news bulletins from Interactive Brokers. Can fetch all messages or specific ones.

```python
client.reqNewsBulletins(allMsgs=True)
```

--------------------------------

### Request Option Chain Parameters Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously requests parameters for an option chain for a given underlying symbol and contract. Returns an Awaitable resolving to a list of OptionChain objects.

```python
reqSecDefOptParamsAsync(_underlyingSymbol_ , _futFopExchange_ , _underlyingSecType_ , _underlyingConId_)
```

--------------------------------

### Manage TCP Data Lifecycle

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Manages the lifecycle of TCP data arrival and processing, resetting pending ticker states and emitting update events to the IB client.

```python
def tcpDataArrived(self):
    self.lastTime = datetime.now(self.defaultTimezone)
    self.time = time.time()
    for ticker in self.pendingTickers:
        ticker.ticks = []
        ticker.tickByTicks = []
        ticker.domTicks = []
    self.pendingTickers = set()

def tcpDataProcessed(self):
    self.ib.updateEvent.emit()
    if self.pendingTickers:
        for ticker in self.pendingTickers:
            ticker.time = self.lastTime
            ticker.timestamp = self.time
            ticker.updateEvent.emit(ticker)
        self.ib.pendingTickersEvent.emit(self.pendingTickers)
```

--------------------------------

### Wrapper Class for IB API Message Handling (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

The `Wrapper` class serves as an implementation for handling incoming messages from the IB API. It holds a reference to the main `IB` instance and initializes dictionaries for storing account values and summary data.

```Python
@dataclass
class Wrapper:
    """Wrapper implementation for use with the IB class."""

    # reference back to IB so wrapper can access API methods
    ib: "IB"

    accountValues: dict[tuple, AccountValue] = field(init=False)
    """ (account, tag, currency, modelCode) -> AccountValue """

    acctSummary: dict[tuple, AccountValue] = field(init=False)
```

--------------------------------

### Request Account Summary Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Initiates an asynchronous request for detailed account summary information. It generates a request ID and returns a future. The method specifies a comprehensive list of tags to retrieve for account summaries.

```python
def reqAccountSummaryAsync(self) -> Awaitable[None]:
    reqId = self.client.getReqId()
    future = self.wrapper.startReq(reqId)
    tags = (
        "AccountType,NetLiquidation,TotalCashValue,SettledCash,"
        "AccruedCash,BuyingPower,EquityWithLoanValue,"
        "PreviousDayEquityWithLoanValue,GrossPositionValue,RegTEquity,"
        "RegTMargin,SMA,InitMarginReq,MaintMarginReq,AvailableFunds,"
        "ExcessLiquidity,Cushion,FullInitMarginReq,FullMaintMarginReq,"
        "FullAvailableFunds,FullExcessLiquidity,LookAheadNextChange,"
        "LookAheadInitMarginReq,LookAheadMaintMarginReq,"
        "LookAheadAvailableFunds,LookAheadExcessLiquidity,"
        "HighestSeverity,DayTradesRemaining,DayTradesRemainingT+1,"
        "DayTradesRemainingT+2,DayTradesRemainingT+3,"
        "DayTradesRemainingT+4,Leverage,$LEDGER:ALL"
    )
    self.client.reqAccountSummary(reqId, "All", tags)
    return future
```

--------------------------------

### Format and Parse IB Datetime Strings

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Utility functions to convert Python date/datetime objects into the specific string format required by the Interactive Brokers API and vice versa. Handles various input formats including UTC timestamps and timezone-aware strings.

```python
def formatIBDatetime(t: dt.date | dt.datetime | str | None) -> str:
    if not t:
        s = ""
    elif isinstance(t, dt.datetime):
        t = t.astimezone(tz=dt.timezone.utc)
        s = t.strftime("%Y%m%d %H:%M:%S UTC")
    return s

def parseIBDatetime(s: str) -> dt.date | dt.datetime:
    if len(s) == 8:
        return dt.date(int(s[0:4]), int(s[4:6]), int(s[6:8]))
    # ... additional parsing logic ...
```

--------------------------------

### Qualify Contract Details Asynchronously

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously retrieves and qualifies details for a list of contracts. It handles ambiguous contract requests by either returning None or a list of possible contracts if `returnAll` is True. It also includes a fix for IBKR returning incorrect contract types.

```python
async def qualifyContractsAsync(
        self, *contracts: Contract, returnAll: bool = False
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

### Auto Open Orders - Python

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Controls whether to automatically bind open orders. By default, it is set to `True`.

```python
ib.reqAutoOpenOrders(autoBind=True)
```

--------------------------------

### Fetch Wall Street Horizon Data

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Retrieves metadata and event data for Wall Street Horizon. Returns string representations of the requested data.

```python
async def getWshMetaDataAsync():
    # Implementation logic for WSH metadata
    pass

async def getWshEventDataAsync(data):
    # Implementation logic for WSH event data
    pass
```

--------------------------------

### Manage Asyncio Event Loops

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Functions to ensure a valid asyncio event loop is running. This includes logic to replace closed loops and initialize nested loops for environments like Jupyter notebooks.

```python
if loop.is_closed():
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)

def startLoop():
    """Use nested asyncio event loop for Jupyter notebooks."""
    patchAsyncio()
```

--------------------------------

### Request Auto Open Orders Binding (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Binds manual TWS orders for management by this client. This requires clientId to be 0 and a specific TWS API setting. The request is automatically called when clientId is 0. It allows enabling or disabling the binding.

```python
def reqAutoOpenOrders(self, autoBind: bool = True):
        """
        Bind manual TWS orders so that they can be managed from this client.
        The clientId must be 0 and the TWS API setting "Use negative numbers
        to bind automatic orders" must be checked.

        This request is automatically called when clientId=0.

        https://interactivebrokers.github.io/tws-api/open_orders.html
        https://interactivebrokers.github.io/tws-api/modifying_orders.html

        Args:
            autoBind: Set binding on or off.
        """
        self.client.reqAutoOpenOrders(autoBind)
```

--------------------------------

### Process Tick-by-Tick Market Data in Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Methods to handle real-time tick-by-tick updates for bid/ask, last trade, and mid-point data. These functions update the internal ticker state and append new tick objects to the ticker's history.

```python
def tickByTickAllLast(self, reqId: int, tickType: int, time: int, price: float, size: float, tickAttribLast: TickAttribLast, exchange, specialConditions):
    ticker = self.reqId2Ticker.get(reqId)
    if not ticker: return
    ticker.last, ticker.lastSize = price, size
    tick = TickByTickAllLast(tickType, self.lastTime, price, size, tickAttribLast, exchange, specialConditions)
    ticker.tickByTicks.append(tick)
    self.pendingTickers.add(ticker)

def tickByTickBidAsk(self, reqId: int, time: int, bidPrice: float, askPrice: float, bidSize: float, askSize: float, tickAttribBidAsk: TickAttribBidAsk):
    ticker = self.reqId2Ticker.get(reqId)
    if not ticker: return
    ticker.bid, ticker.ask = bidPrice, askPrice
    ticker.bidSize, ticker.askSize = bidSize, askSize
    tick = TickByTickBidAsk(self.lastTime, bidPrice, askPrice, bidSize, askSize, tickAttribBidAsk)
    ticker.tickByTicks.append(tick)
    self.pendingTickers.add(ticker)
```

--------------------------------

### Market Scanner Subscription and Cancellation

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Handles market scanner subscriptions. `reqScannerData` performs a blocking scan and returns results, while `reqScannerSubscription` subscribes to live data. `cancelScannerSubscription` is used to stop an active subscription.

```python
def reqScannerData(_subscription_ , _scannerSubscriptionOptions =[]_, _scannerSubscriptionFilterOptions =[]_):
    """
    Do a blocking market scan by starting a subscription and canceling it after the initial list of results are in.
    This method is blocking.
    https://interactivebrokers.github.io/tws-api/market_scanners.html 

    Parameters:
        subscription (ScannerSubscription): Basic filters.
        scannerSubscriptionOptions (list[TagValue]): Unknown.
        scannerSubscriptionFilterOptions (list[TagValue]): Advanced generic filters.
    Return type:
        ScanDataList
    """
    pass

def reqScannerSubscription(_subscription_ , _scannerSubscriptionOptions =[]_, _scannerSubscriptionFilterOptions =[]_):
    """
    Subscribe to market scan data.
    https://interactivebrokers.github.io/tws-api/market_scanners.html 

    Parameters:
        subscription (ScannerSubscription): What to scan for.
        scannerSubscriptionOptions (list[TagValue]): Unknown.
        scannerSubscriptionFilterOptions (list[TagValue]): Unknown.
    Return type:
        ScanDataList
    """
    pass

def cancelScannerSubscription(_dataList_):
    """
    Cancel market data subscription.
    https://interactivebrokers.github.io/tws-api/market_scanners.html 

    Parameters:
        dataList (ScanDataList): The scan data list that was obtained from `reqScannerSubscription()`.
    """
    pass
```

--------------------------------

### Request Current Time Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously retrieves the current time from the IB server. Returns an Awaitable that resolves to a datetime object.

```python
reqCurrentTimeAsync()
```

--------------------------------

### Request Matching Symbols Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously searches for symbols matching a given pattern. Returns a list of ContractDescription objects or None if no matches are found.

```python
_async _reqMatchingSymbolsAsync(_pattern_)
```

--------------------------------

### Place Order - Python

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Places a new order or modifies an existing one. Returns a `Trade` object that is kept updated with status changes and fills.

```python
ib.placeOrder(contract, order)
```

--------------------------------

### Process Position and PnL Updates

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Functions for tracking position changes and PnL calculations. They handle the lifecycle of position tracking and update PnL objects based on request IDs.

```python
def position(self, account, contract, posSize, avgCost):
    contract = Contract.recreate(contract)
    position = Position(account, contract, posSize, avgCost)
    positions = self.positions[account]
    if posSize == 0:
        positions.pop(contract.conId, None)
    else:
        positions[contract.conId] = position
    self.ib.positionEvent.emit(position)

def pnl(self, reqId, dailyPnL, unrealizedPnL, realizedPnL):
    pnl = self.reqId2PnL.get(reqId)
    if pnl:
        pnl.dailyPnL = dailyPnL
        pnl.unrealizedPnL = unrealizedPnL
        pnl.realizedPnL = realizedPnL
        self.ib.pnlEvent.emit(pnl)
```

--------------------------------

### Request Tickers Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously requests ticker information for specified contracts. Supports regulatory snapshot requests. Returns a list of Ticker objects.

```python
_async _reqTickersAsync(_* contracts_, _regulatorySnapshot =False_)
```

--------------------------------

### Request Multi Account Updates (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Requests account values for multiple accounts, keeping them updated. It is recommended to use the `.accountValues` method instead. This method is blocking and allows filtering by account name or model code.

```python
def reqAccountUpdatesMulti(self, account: str = "", modelCode: str = ""):
        """
        It is recommended to use :meth:`.accountValues` instead.

        Request account values of multiple accounts and keep updated.

        This method is blocking.

        Args:
            account: If specified, filter for this account name.
            modelCode: If specified, filter for this account model.
        """
        self._run(self.reqAccountUpdatesMultiAsync(account, modelCode))
```

--------------------------------

### Process News Ticks (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Handles incoming news ticks, including timestamp, provider code, article ID, headline, and extra data. It creates a NewsTick object, appends it to a list, and emits a news tick event.

```python
def tickNews(
            self,
            _reqId: int,
            timeStamp: int,
            providerCode: str,
            articleId: str,
            headline: str,
            extraData: str,
    ):
        news = NewsTick(timeStamp, providerCode, articleId, headline, extraData)
        self.newsTicks.append(news)
        self.ib.tickNewsEvent.emit(news)
```

--------------------------------

### Create Specialized Contract Objects in Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

This function allows for the creation of specialized contract objects based on the provided security type (secType). If no secType is specified, a general Contract object is returned. It simplifies contract instantiation by mapping secType strings to corresponding contract classes.

```python
from ib_async.contract import Contract, Stock, Option, Future, Forex, CFD, Bond, Crypto

# Example usage:
stock_contract = Contract.create(secType='STK', symbol='AAPL', exchange='SMART', currency='USD')
option_contract = Contract.create(secType='OPT', symbol='SPY', lastTradeDateOrContractMonth='20231215', strike=450.0, right='C', exchange='SMART')
forex_contract = Contract.create(secType='CASH', symbol='EUR', currency='USD')

print(stock_contract)
print(option_contract)
print(forex_contract)
```

--------------------------------

### Handle Commission Reports (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Processes commission reports, updating fill objects with commission details and PnL. Emits commission report events for trades. Handles cases where the fill might not be found or the order was filled before connection.

```python
def commissionReport(self, commissionReport: CommissionReport):
        if commissionReport.yield_ == UNSET_DOUBLE:
            commissionReport.yield_ = 0.0

        if commissionReport.realizedPNL == UNSET_DOUBLE:
            commissionReport.realizedPNL = 0.0

        fill = self.fills.get(commissionReport.execId)
        if fill:
            report = dataclassUpdate(fill.commissionReport, commissionReport)
            self._logger.info(f"commissionReport: {report}")
            trade = self.permId2Trade.get(fill.execution.permId)
            if trade:
                self.ib.commissionReportEvent.emit(trade, fill, report)
                trade.commissionReportEvent.emit(trade, fill, report)
            else:
                # this is not a live execution and the order was filled
                # before this connection started
                pass
        else:
            # commission report is not for this client
            pass
```

--------------------------------

### Handle Market Rule Data (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Processes market rule data, specifically price increments, for a given market rule ID. It ends the request by associating the price increments with a uniquely identified market rule.

```python
def marketRule(self, marketRuleId: int, priceIncrements: list[PriceIncrement]):
        self._endReq(f"marketRule-{marketRuleId}", priceIncrements)
```

--------------------------------

### Initialize Watchdog for IB Applications

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ibcontroller.html

The Watchdog class monitors the health of an IB connection by tracking idle network traffic and performing historical data probes. It automatically restarts the application if it becomes unresponsive.

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

### Request Positions Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously retrieves current positions. Returns an Awaitable resolving to a list of Position objects.

```python
reqPositionsAsync()
```

--------------------------------

### Format Number with SI Prefix

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Formats a number (integer or float) to three significant digits, appending an appropriate SI prefix (yotta, zetta, ..., kilo, mega, ...). Handles negative numbers and very small values.

```python
import math

def formatSI(n: float) -> str:
    """Format the integer or float n to 3 significant digits + SI prefix."""
    s = ""
    if n < 0:
        n = -n
        s += "-"

    if isinstance(n, int) and n < 1000:
        s = str(n) + " "
    elif n < 1e-22:
        s = "0.00 "
    else:
        assert n < 9.99e26
        log = int(math.floor(math.log10(n)))
        i, j = divmod(log, 3)
        for _try in range(2):
            templ = f"%.{2 - j}f"
            val = templ % (n * 10 ** (-3 * i))
            if val != "1000":
                break
            i += 1
            j = 0
        s += val + " "
        if i != 0:
            s += "yzafpnum kMGTPEZY"[i + 8]

    return s
```

--------------------------------

### POST /reqMktData

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Requests market data for a specific contract. Supports snapshot requests and combo legs.

```APIDOC
## POST /reqMktData

### Description
Subscribes to market data for a given contract. The request can be configured for snapshots or regulatory snapshots.

### Method
POST

### Endpoint
/reqMktData

### Parameters
#### Request Body
- **reqId** (int) - Required - Unique identifier for the market data request.
- **contract** (object) - Required - The contract object containing symbol, exchange, and security type.
- **genericTickList** (string) - Required - Comma-separated list of generic tick types.
- **snapshot** (bool) - Required - If true, returns a single snapshot instead of a stream.
- **regulatorySnapshot** (bool) - Required - If true, includes regulatory snapshot data.
- **mktDataOptions** (list) - Required - Additional market data options.

### Request Example
{
  "reqId": 1001,
  "contract": { "symbol": "AAPL", "secType": "STK", "exchange": "SMART" },
  "genericTickList": "100,101",
  "snapshot": false,
  "regulatorySnapshot": false,
  "mktDataOptions": []
}
```

--------------------------------

### Order Dataclass Utility Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Common utility methods implemented across order classes to handle data conversion and state management. These methods allow for exporting order data to dictionaries or tuples and updating order fields dynamically.

```python
def dict(self):
    """Return dataclass values as dict. Non-recursive variant of dataclasses.asdict."""
    return {k: v for k, v in self.__dict__.items()}

def nonDefaults(self):
    """Get fields that are different from default values."""
    return {k: v for k, v in self.__dict__.items() if v != self.__class__.__dict__.get(k)}

def update(self, *srcObjs, **kwargs):
    """Update fields from source objects or keyword arguments."""
    for obj in srcObjs:
        self.__dict__.update(obj.__dict__)
    self.__dict__.update(kwargs)
    return self
```

--------------------------------

### POST /cancelMktData

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Cancels an active market data subscription.

```APIDOC
## POST /cancelMktData

### Description
Stops the market data stream for the specified request ID.

### Method
POST

### Endpoint
/cancelMktData

### Parameters
#### Request Body
- **reqId** (int) - Required - The ID of the market data request to cancel.

### Request Example
{
  "reqId": 1001
}
```

--------------------------------

### Convert Dataclass to Dictionary (ib_async.contract)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Converts dataclass instance values into a dictionary. This is a non-recursive operation, similar to `dataclasses.asdict`. It is available across multiple contract types.

```python
forex_instance.dict()
index_instance.dict()
cfd_instance.dict()
commodity_instance.dict()
bond_instance.dict()
```

--------------------------------

### Python: Asynchronous Connection to IB Gateway

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Establishes an asynchronous connection to the IB Gateway or TWS. It handles connection state, sends the initial API handshake message, and waits for the API connection to be ready. Includes error handling for connection failures.

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

### Request All Open Orders Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves all open orders asynchronously, potentially including those not typically shown. It returns a future that resolves to a list of `Trade` objects.

```python
def reqAllOpenOrdersAsync(self) -> Awaitable[list[Trade]]:
    future = self.wrapper.startReq("openOrders")
    self.client.reqAllOpenOrders()
    return future
```

--------------------------------

### Market Order Initialization (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/order.html

Initializes a Market Order with a specified action and total quantity. It inherits from the base Order class and sets the orderType to 'MKT'.

```python
class MarketOrder(Order):
    def __init__(self, action: str, totalQuantity: float, **kwargs):
        Order.__init__(
            self,
            orderType="MKT",
            action=action,
            totalQuantity=totalQuantity,
            **kwargs,
        )
```

--------------------------------

### Manage Network Events and Timeouts

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Methods to synchronize with network updates and manage session timeouts. These functions allow developers to wait for specific events or implement polling loops with timeout constraints.

```python
def waitOnUpdate(self, timeout: float = 0) -> bool:
    if timeout:
        try:
            util.run(asyncio.wait_for(self.updateEvent, timeout))
        except asyncio.TimeoutError:
            return False
    else:
        util.run(self.updateEvent)
    return True

def setTimeout(self, timeout: float = 60):
    self.wrapper.setTimeout(timeout)
```

--------------------------------

### Request Scanner Parameters

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Requests an XML list of available scanner parameters. This is a blocking method that returns a string containing the scanner parameters.

```python
def reqScannerParameters():
    """
    Requests an XML list of scanner parameters.
    This method is blocking.
    Return type:
        str
    """
    pass
```

--------------------------------

### Handle Order Status Updates and Execution Details

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Methods for processing order status changes and execution details from the IB API. These functions update local trade objects, emit events for status transitions, and ensure synchronization between the client and the exchange.

```python
def orderStatus(self, orderId: int, status: str, filled: float, remaining: float, avgFillPrice: float, permId: int, parentId: int, lastFillPrice: float, clientId: int, whyHeld: str, mktCapPrice: float = 0.0):
	key = self.orderKey(clientId, orderId, permId)
	trade = self.trades.get(key)
	if trade:
		oldStatus = trade.orderStatus.status
		new = dict(status=status, filled=filled, remaining=remaining, avgFillPrice=avgFillPrice, permId=permId, parentId=parentId, lastFillPrice=lastFillPrice, clientId=clientId, whyHeld=whyHeld, mktCapPrice=mktCapPrice)
		dataclassUpdate(trade.orderStatus, **new)
		if status != oldStatus:
			if status == OrderStatus.Filled:
				trade.filledEvent.emit(trade)
			elif status == OrderStatus.Cancelled:
				trade.cancelledEvent.emit(trade)

def execDetails(self, reqId: int, contract: Contract, execution: Execution):
	self._logger.info(f"execDetails {execution}")
	if execution.orderId == UNSET_INTEGER:
		execution.orderId = 0
	trade = self.permId2Trade.get(execution.permId)
	if not trade:
		key = self.orderKey(execution.clientId, execution.orderId, execution.permId)
		trade = self.trades.get(key)
```

--------------------------------

### Process Real-Time Tick Data (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Processes incoming real-time tick data, updating ticker information for price, size, and historical ticks. It handles different tick types, including regular price/size updates and dividend information. Dependencies include `TickData` and `Dividends` classes, and a `parseIBDatetime` function.

```python
result = self._processRtVolumeTick(ticker, tickType, value)
if result:
    price, size = result
    ticker.prevLast = ticker.last
    ticker.prevLastSize = ticker.lastSize
    ticker.last = price
    ticker.lastSize = size
    tick = TickData(self.lastTime, tickType, price, size)
    ticker.ticks.append(tick)
elif tickType == 59:
    # Dividend tick:
    # https://interactivebrokers.github.io/tws-api/tick_types.html#ib_dividends
    # example value: '0.83,0.92,20130219,0.23'
    past12, next12, nextDate, nextAmount = value.split(",")
    ticker.dividends = Dividends(
        float(past12) if past12 else None,
        float(next12) if next12 else None,
        parseIBDatetime(nextDate) if nextDate else None,
        float(nextAmount) if nextAmount else None,
    )
else:
    self._logger.error(
        f"tickString with tickType {tickType}: unhandled value: {value!r}"
    )

self.pendingTickers.add(ticker)
except ValueError:
    self._logger.error(
        f"tickString with tickType {tickType}: malformed value: {value!r}"
    )
```

--------------------------------

### Request Scanner Parameters Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously retrieves the available parameters for scanner subscriptions. Returns an Awaitable resolving to a string.

```python
reqScannerParametersAsync()
```

--------------------------------

### Perform What-If Order Analysis in Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves commission and margin impact for an order without actually placing it. This method is blocking and returns an OrderState object. It's useful for pre-trade analysis to understand the financial implications of an order. It requires a contract and an order object as input.

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

### Define Forex Contract (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Defines a Forex (Foreign Exchange) contract. It allows specifying a currency pair directly or by providing base and quote currencies. It includes a method to retrieve the pair string.

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



    def pair(self) -> str:
        """Short name of pair."""
        return self.symbol + self.currency
```

--------------------------------

### Retrieve WSH Metadata and Event Data

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Blocking convenience methods to fetch WSH metadata (filters/event types) and specific event data as JSON strings. Requires a valid Wall Street Horizon subscription.

```python
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

### IB Async API Events

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

This section details the various events emitted by the IB Async API, which are crucial for real-time data handling and notifications from the TWS/gateway.

```APIDOC
## IB Async API Events

### Description
This API provides a comprehensive set of events that are triggered by the connection to the TWS/gateway. These events allow for real-time monitoring and handling of various data streams and state changes.

### Events

*   **connectedEvent** (): Emitted after successfully connecting and synchronizing with TWS/gateway.
*   **disconnectedEvent** (): Emitted after disconnecting from TWS/gateway.
*   **updateEvent** (): Emitted after a network packet has been handled.
*   **pendingTickersEvent** (tickers: Set[:class:`.Ticker`]): Emits the set of tickers that have been updated during the last update and for which there are new ticks, tickByTicks or domTicks.
*   **barUpdateEvent** (bars: :class:`.BarDataList`, hasNewBar: bool): Emits the bar list that has been updated in real time. If a new bar has been added then hasNewBar is True, when the last bar has changed it is False.
*   **newOrderEvent** (trade: :class:`.Trade`): Emits a newly placed trade.
*   **orderModifyEvent** (trade: :class:`.Trade`): Emits when an order is modified.
*   **cancelOrderEvent** (trade: :class:`.Trade`): Emits a trade directly after requesting for it to be cancelled.
*   **openOrderEvent** (trade: :class:`.Trade`): Emits the trade with an open order.
*   **orderStatusEvent** (trade: :class:`.Trade`): Emits the changed order status of the ongoing trade.
*   **execDetailsEvent** (trade: :class:`.Trade`, fill: :class:`.Fill`): Emits the fill together with the ongoing trade it belongs to.
*   **commissionReportEvent** (trade: :class:`.Trade`, fill: :class:`.Fill`, report: :class:`.CommissionReport`): The commission report is emitted after the fill that it belongs to.
*   **updatePortfolioEvent** (item: :class:`.PortfolioItem`): A portfolio item has changed.
*   **positionEvent** (position: :class:`.Position`): A position has changed.
*   **accountValueEvent** (value: :class:`.AccountValue`): An account value has changed.
*   **accountSummaryEvent** (value: :class:`.AccountValue`): An account value has changed.
*   **pnlEvent** (entry: :class:`.PnL`): A profit- and loss entry is updated.
*   **pnlSingleEvent** (entry: :class:`.PnLSingle`): A profit- and loss entry for a single position is updated.
*   **tickNewsEvent** (news: :class:`.NewsTick`): Emit a new news headline.
*   **newsBulletinEvent** (bulletin: :class:`.NewsBulletin`): Emit a new news bulletin.
*   **scannerDataEvent** (data: :class:`.ScanDataList`): Emit data from a scanner subscription.
*   **wshMetaEvent** (dataJson: str): Emit WSH metadata.
*   **wshEvent** (dataJson: str): Emit WSH event data (such as earnings dates, dividend dates, options expiration dates, splits, spinoffs and conferences).
*   **errorEvent** (reqId: int, errorCode: int, errorString: str, contract: :class:`.Contract`): Emits the reqId/orderId and TWS error code and string together with the contract the error applies to (or None if no contract applies).
*   **timeoutEvent** (idlePeriod: float): Is emitted if no data is received for longer than the timeout period specified with :meth:`.setTimeout`. The value emitted is the period in seconds since the last update.

### Important Note
It is not advisable to place new requests inside an event handler as it may lead to too much recursion.
```

--------------------------------

### Stock Contract Definition (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Defines the Stock contract, inheriting from the base Contract class. It initializes a stock with its symbol, exchange, and currency.

```python
class Stock(Contract):
    def __init__(
        self,
        symbol: str = "",
        exchange: str = "",
        currency: str = "",
        **kwargs,
    ):
        """
        Stock contract.

        Args:
            symbol: Symbol name.
            exchange: Destination exchange.
            currency: Underlying currency.
        """
        Contract.__init__(
            self,
            secType="STK",
            symbol=symbol,
            exchange=exchange,
            currency=currency,
            **kwargs,
        )
```

--------------------------------

### Request Market Depth Exchanges (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves a list of exchanges that have multiple market makers. This information is useful for understanding market depth data availability. The function returns a list of DepthMktDataDescription objects.

```python
def reqMktDepthExchanges(self) -> list[DepthMktDataDescription]:
    """
    Get those exchanges that have have multiple market makers
    """
```

--------------------------------

### Access Wall Street Horizon (WSH) Metadata

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Methods to request and cancel Wall Street Horizon metadata. Note that metadata must be requested before attempting to fetch specific event data.

```python
def reqWshMetaData(self):
    if self.wrapper.wshMetaReqId:
        self._logger.warning("reqWshMetaData already active")
    else:
        reqId = self.client.getReqId()
        self.wrapper.wshMetaReqId = reqId
        self.client.reqWshMetaData(reqId)

def cancelWshMetaData(self):
    reqId = self.wrapper.wshMetaReqId
    if not reqId:
        self._logger.warning("reqWshMetaData not active")
    else:
        self.client.cancelWshMetaData(reqId)
        self.wrapper.wshMetaReqId = 0
```

--------------------------------

### Disconnect and Session Cleanup

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Handles the graceful disconnection from the IB API, including logging connection statistics, resetting the internal wrapper state, and emitting a disconnection event.

```python
def disconnect(self) -> str | None:
    if not self.client.isConnected():
        return None
    stats = self.client.connectionStats()
    self._logger.info(f"Disconnecting... {stats}")
    self.client.disconnect()
    self.disconnectedEvent.emit()
    self.wrapper.reset()
    return status
```

--------------------------------

### Dataclass Utility Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Common utility methods available on ib_async dataclass objects to retrieve data as dictionaries, tuples, or filtered non-default values.

```APIDOC
## Method: nonDefaults()

### Description
Returns a dictionary containing only the fields of the dataclass instance that differ from their default values.

### Response
- **Returns** (dict[str, Any]) - A dictionary of modified fields.

---

## Method: dict()

### Description
Returns the dataclass values as a dictionary. This is a non-recursive variant of `dataclasses.asdict`.

### Response
- **Returns** (dict) - The object representation as a dictionary.

---

## Method: tuple()

### Description
Returns the dataclass values as a tuple. This is a non-recursive variant of `dataclasses.astuple`.

### Response
- **Returns** (tuple) - The object representation as a tuple.

---

## Method: update(*srcObjs, **kwargs)

### Description
Updates the fields of the current dataclass object using values from provided source objects or keyword arguments.

### Parameters
- **srcObjs** (list) - Optional - Zero or more dataclass objects to pull values from.
- **kwargs** (dict) - Optional - Key-value pairs to update specific fields.

### Response
- **Returns** (object) - The updated dataclass instance.
```

--------------------------------

### Parse String-based Tick Attributes

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Handles incoming string-based tick data, including timestamp conversions and fundamental ratio parsing. It uses mapping dictionaries to route data to the appropriate ticker attributes.

```python
def tickString(self, reqId: int, tickType: int, value: str):
    if not (ticker := self.reqId2Ticker.get(reqId)): return
    if tickType in STRING_TICK_MAP:
        setattr(ticker, STRING_TICK_MAP[tickType], value)
    elif tickType == 47:
        d = dict(t.split("=") for t in value.split(";") if t)
        ticker.fundamentalRatios = FundamentalRatios(**d)
```

--------------------------------

### Ticker Attributes and Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

This section outlines the extensive attributes and methods of the Ticker object, used for real-time market data. It includes price information (bid, ask, last), volume data, historical prices, volatility measures, options data, and more. Methods like ticks(), tickByTicks(), domBids(), domAsks(), and bidGreeks() provide granular market insights.

```python
class Ticker:
    events: TickerEvents
    contract: Contract
    time: int
    timestamp: int
    marketDataType: int
    minTick: float
    bid: float
    bidSize: int
    bidExchange: str
    ask: float
    askSize: int
    askExchange: str
    last: float
    lastSize: int
    lastExchange: str
    lastTimestamp: int
    prevBid: float
    prevBidSize: int
    prevAsk: float
    prevAskSize: int
    prevLast: float
    prevLastSize: int
    volume: int
    open: float
    high: float
    low: float
    close: float
    vwap: float
    low13week: float
    high13week: float
    low26week: float
    high26week: float
    low52week: float
    high52week: float
    bidYield: float
    askYield: float
    lastYield: float
    markPrice: float
    halted: bool
    rtHistVolatility: float
    rtVolume: int
    rtTradeVolume: int
    rtTime: int
    avVolume: int
    tradeCount: int
    tradeRate: float
    volumeRate: float
    volumeRate3Min: float
    volumeRate5Min: float
    volumeRate10Min: float
    shortable: bool
    shortableShares: int
    indexFuturePremium: float
    futuresOpenInterest: int
    putOpenInterest: int
    callOpenInterest: int
    putVolume: int
    callVolume: int
    avOptionVolume: int
    histVolatility: float
    impliedVolatility: float
    openInterest: int
    lastRthTrade: float
    lastRegTime: int
    optionBidExch: str
    optionAskExch: str
    bondFactorMultiplier: float
    creditmanMarkPrice: float
    creditmanSlowMarkPrice: float
    delayedLastTimestamp: int
    delayedHalted: bool
    reutersMutualFunds: bool
    etfNavClose: float
    etfNavPriorClose: float
    etfNavBid: float
    etfNavAsk: float
    etfNavLast: float
    etfFrozenNavLast: float
    etfNavHigh: float
    etfNavLow: float
    socialMarketAnalytics: dict
    estimatedIpoMidpoint: float
    finalIpoLast: float
    dividends: list
    fundamentalRatios: dict
    ticks: list
    tickByTicks: list
    domBids: list
    domBidsDict: dict
    domAsks: list
    domAsksDict: dict
    domTicks: list
    bidGreeks: dict
    askGreeks: dict
    lastGreeks: dict
    modelGreeks: dict
    custGreeks: dict
    bidEfp: float
    askEfp: float
    lastEfp: float
    openEfp: float
    highEfp: float
    lowEfp: float
    closeEfp: float
    auctionVolume: int
    auctionPrice: float
    auctionImbalance: float
    regulatoryImbalance: float
    bboExchange: str
    snapshotPermissions: int
    defaults: dict

    def ticks(self) -> list:
        """Returns a list of ticks for the current ticker."""
        pass

    def tickByTicks(self) -> list:
        """Returns a list of tick-by-tick data."""
        pass

    def domBids(self) -> list:
        """Returns the depth of market bids."""
        pass

    def domBidsDict(self) -> dict:
        """Returns the depth of market bids as a dictionary."""
        pass

    def domAsks(self) -> list:
        """Returns the depth of market asks."""
        pass

    def domAsksDict(self) -> dict:
        """Returns the depth of market asks as a dictionary."""
        pass

    def domTicks(self) -> list:
        """Returns depth of market ticks."""
        pass

    def bidGreeks(self) -> dict:
        """Returns Greeks for the bid price."""
        pass

    def askGreeks(self) -> dict:
        """Returns Greeks for the ask price."""
        pass

    def lastGreeks(self) -> dict:
        """Returns Greeks for the last traded price."""
        pass

    def modelGreeks(self) -> dict:
        """Returns model Greeks."""
        pass

    def custGreeks(self) -> dict:
        """Returns custom Greeks."""
        pass

    def defaults(self) -> dict:
        """Returns default values for the ticker."""
        pass
```

--------------------------------

### Request Option Chain Parameters

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves the option chain for a given underlying security. This blocking method requires the underlying symbol, future/option exchange, underlying security type, and underlying contract ID. It returns a list of OptionChain objects.

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

### Retrieve News Articles and Historical Data

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Methods to fetch news provider lists, specific article content, and historical news headlines. These functions wrap asynchronous calls into blocking operations for easier integration.

```python
def reqNewsArticle(self, providerCode: str, articleId: str, newsArticleOptions: list[TagValue] = []) -> NewsArticle:
    return self._run(self.reqNewsArticleAsync(providerCode, articleId, newsArticleOptions))

def reqHistoricalNews(self, conId: int, providerCodes: str, startDateTime: str | datetime.date, endDateTime: str | datetime.date, totalResults: int, historicalNewsOptions: list[TagValue] = []) -> HistoricalNews:
    return self._run(self.reqHistoricalNewsAsync(conId, providerCodes, startDateTime, endDateTime, totalResults, historicalNewsOptions))
```

--------------------------------

### Python: Synchronous Connection Wrapper

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Provides a synchronous wrapper for the asynchronous connection method. This function blocks until the asynchronous connection process is complete or times out. It's useful for integrating asynchronous operations into synchronous code flows.

```python
def connect(self, host: str, port: int, clientId: int, timeout: float | None = 2.0):
        """
        Connect to a running TWS or IB gateway application.

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

--------------------------------

### Realtime Bars API

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

This API allows you to request real-time streaming bar data for a specified contract. You can configure the bar size, data source, and whether to use regular trading hours.

```APIDOC
## POST /api/realtimeBars

### Description
Request realtime 5 second bars.

### Method
POST

### Endpoint
/api/realtimeBars

### Parameters
#### Path Parameters
None

#### Query Parameters
* **contract** (Contract) - Required - Contract of interest.
* **barSize** (int) - Required - Must be 5.
* **whatToShow** (str) - Required - Specifies the source for constructing bars. Can be 'TRADES', 'MIDPOINT', 'BID' or 'ASK'.
* **useRTH** (bool) - Required - If True then only show data from within Regular Trading Hours, if False then show all data.
* **realTimeBarsOptions** (list[TagValue]) - Optional - Unknown.

### Request Example
```json
{
  "contract": {"symbol": "AAPL", "secType": "STK", "exchange": "SMART", "currency": "USD"},
  "barSize": 5,
  "whatToShow": "TRADES",
  "useRTH": true,
  "realTimeBarsOptions": []
}
```

### Response
#### Success Response (200)
- **reqId** (int) - The unique ID for the request.
- **contract** (Contract) - The contract details.
- **barSize** (int) - The bar size requested.
- **whatToShow** (str) - The data source used.
- **useRTH** (bool) - Whether regular trading hours were used.
- **realTimeBarsOptions** (list[TagValue]) - Options used for the request.

#### Response Example
```json
{
  "reqId": 1,
  "contract": {"symbol": "AAPL", "secType": "STK", "exchange": "SMART", "currency": "USD"},
  "barSize": 5,
  "whatToShow": "TRADES",
  "useRTH": true,
  "realTimeBarsOptions": []
}
```
```

--------------------------------

### Compute and Handle Option Greeks (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Processes tick data for option computations, including implied volatility, delta, gamma, vega, theta, and underlying price. It maps tick types to specific attributes and handles responses from volatility/price calculation requests.

```python
def tickOptionComputation(
            self,
            reqId: int,
            tickType: int,
            tickAttrib: int,
            impliedVol: float,
            delta: float,
            optPrice: float,
            pvDividend: float,
            gamma: float,
            vega: float,
            theta: float,
            undPrice: float,
    ):
        comp = OptionComputation(
            tickAttrib,
            impliedVol if impliedVol != -1 else None,
            delta if delta != -2 else None,
            optPrice if optPrice != -1 else None,
            pvDividend if pvDividend != -1 else None,
            gamma if gamma != -2 else None,
            vega if vega != -2 else vega,
            theta if theta != -2 else theta,
            undPrice if undPrice != -1 else None,
        )
        ticker = self.reqId2Ticker.get(reqId)
        if ticker:
            # reply from reqMktData
            # https://interactivebrokers.github.io/tws-api/tick_types.html

            assert tickType in GREEKS_TICK_MAP, (
                f"Received tick {tickType=} {tickAttrib=} but we don't have an attribute mapping for it? Triggered from {ticker.contract=}"
            )

            setattr(ticker, GREEKS_TICK_MAP[tickType], comp)
            self.pendingTickers.add(ticker)
        elif reqId in self._futures:
            # reply from calculateImpliedVolatility or calculateOptionPrice
            self._endReq(reqId, comp)
        else:
            self._logger.error(f"tickOptionComputation: Unknown reqId: {reqId}")
```

--------------------------------

### Define Contract Subclasses (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Defines subclasses of the Contract class for specific financial instruments like Mutual Fund, Warrant, Bag, and Crypto. Each subclass initializes the base Contract class with a specific security type.

```python
class Warrant(Contract):
    def __init__(self, **kwargs):
        """Warrant option."""
        Contract.__init__(self, "WAR", **kwargs)




[docs]
class Bag(Contract):
    def __init__(self, **kwargs):
        """Bag contract."""
        Contract.__init__(self, "BAG", **kwargs)




[docs]
class Crypto(Contract):
    def __init__(
        self, symbol: str = "", exchange: str = "", currency: str = "", **kwargs
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

### Request Market Rule Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously retrieves market rule details for a given market rule ID. Returns a list of PriceIncrement objects or None.

```python
_async _reqMarketRuleAsync(_marketRuleId_)
```

--------------------------------

### Account and PnL Models

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Definitions for Profit and Loss (PnL) and account value data structures.

```APIDOC
## Data Model: PnL

### Description
Represents Profit and Loss data for an account.

### Fields
- **account** (str) - Account identifier.
- **modelCode** (str) - Model code associated with the account.
- **dailyPnL** (float) - Daily PnL value.
- **unrealizedPnL** (float) - Unrealized PnL value.
- **realizedPnL** (float) - Realized PnL value.

### Methods
- **dict()**: Returns the object as a dictionary.
- **update()**: Updates the object fields.
```

--------------------------------

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

--------------------------------

### Request User Info - Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Requests user information. This function is part of the IB API client and requires a request ID.

```python
def reqUserInfo(self, reqId):
        self.send(104, reqId)
```

--------------------------------

### Manage Asynchronous Futures and Requests

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Methods to handle the lifecycle of asynchronous requests using asyncio.Future objects. It supports tracking request IDs, mapping them to contracts, and resolving futures upon completion.

```python
def _endReq(self, key, result=None, success=True):
    future = self._futures.pop(key, None)
    self._reqId2Contract.pop(key, None)
    if future:
        if result is None:
            result = self._results.pop(key, [])
        if not future.done():
            if success:
                future.set_result(result)
            else:
                future.set_exception(result)
```

--------------------------------

### Handle Historical Ticks Bid/Ask (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Processes historical bid and ask ticks, appending them to the results list for the given request ID. The 'done' flag indicates the completion of the data stream for this request.

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

### PnLSingle Object

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents single PnL (Profit and Loss) data for an account, model, or contract.

```APIDOC
## PnLSingle Object

### Description
Represents single PnL (Profit and Loss) data for an account, model, or contract.

### Class Definition
`ib_async.objects.PnLSingle(account='', modelCode='', conId=0, dailyPnL=nan, unrealizedPnL=nan, realizedPnL=nan, position=0, value=nan)`

### Fields
- **account** (`str`, optional) - The account identifier. Defaults to ''.
- **modelCode** (`str`, optional) - The model code. Defaults to ''.
- **conId** (`int`, optional) - The contract identifier. Defaults to 0.
- **dailyPnL** (`float`, optional) - The daily PnL. Defaults to `nan`.
- **unrealizedPnL** (`float`, optional) - The unrealized PnL. Defaults to `nan`.
- **realizedPnL** (`float`, optional) - The realized PnL. Defaults to `nan`.
- **position** (`int`, optional) - The current position. Defaults to 0.
- **value** (`float`, optional) - The value of the position. Defaults to `nan`.

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

--------------------------------

### Request Completed Orders (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Requests and returns a list of completed trades. It accepts a boolean argument to filter for API-only orders.

```python
def reqCompletedOrders(self, apiOnly: bool) -> list[Trade]:
        """
        Request and return a list of completed trades.

        Args:
            apiOnly: Request only API orders (not manually placed TWS orders).
        """
        return self._run(self.reqCompletedOrdersAsync(apiOnly))
```

--------------------------------

### Dataclass Conversion and Update Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

This section covers methods for converting dataclass instances to dictionaries and tuples, retrieving fields with non-default values, and updating dataclass objects.

```APIDOC
## Dataclass Methods

### Description
Provides methods to convert dataclass instances into dictionaries or tuples, retrieve fields that differ from their default values, and update dataclass fields.

### Methods

#### `dict()`
- **Description**: Returns dataclass values as a dictionary. This is a non-recursive variant of `dataclasses.asdict`.
- **Return Type**: `dict`

#### `nonDefaults()`
- **Description**: For a dataclass instance, gets the fields that are different from the default values and returns them as a dictionary.
- **Return Type**: `dict`[`str`, `Any`]

#### `tuple()`
- **Description**: Returns dataclass values as a tuple. This is a non-recursive variant of `dataclasses.astuple`.
- **Return Type**: `tuple`[`Any`, `...`]

#### `update(_* srcObjs_, _** kwargs_)`
- **Description**: Updates fields of the given dataclass object from zero or more dataclass source objects and/or from keyword arguments.
- **Return Type**: `object`
```

--------------------------------

### Define Bond Contract (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Defines a Bond contract. It inherits from the base Contract class and accepts arbitrary keyword arguments for its initialization.

```python
class Bond(Contract):
    def __init__(self, **kwargs):
        """Bond."""
        Contract.__init__(self, "BOND", **kwargs)
```

--------------------------------

### Handle IB API Events and Callbacks

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

A collection of methods to process incoming API messages such as news bulletins, market data ticks (EFP), historical schedules, and system errors. These methods update internal state objects and emit events to the main application loop.

```python
def updateNewsBulletin(self, msgId: int, msgType: int, message: str, origExchange: str):
    bulletin = NewsBulletin(msgId, msgType, message, origExchange)
    self.msgId2NewsBulletin[msgId] = bulletin
    self.ib.newsBulletinEvent.emit(bulletin)

def tickEFP(self, reqId: int, tickType: int, basisPoints: float, formattedBasisPoints: str, totalDividends: float, holdDays: int, futureLastTradeDate: str, dividendImpact: float, dividendsToLastTradeDate: float):
    ticker = self.reqId2Ticker.get(reqId)
    if not ticker:
        return
    efpData = EfpData(basisPoints=basisPoints, formattedBasisPoints=formattedBasisPoints, impliedFuture=totalDividends, holdDays=holdDays, futureLastTradeDate=futureLastTradeDate, dividendImpact=dividendImpact, dividendsToLastTradeDate=dividendsToLastTradeDate)
    if tickType in EFP_TICK_MAP:
        setattr(ticker, EFP_TICK_MAP[tickType], efpData)
        self.pendingTickers.add(ticker)

def error(self, reqId: int, errorCode: int, errorString: str, advancedOrderRejectJson: str):
    isRequest = reqId in self._futures
    trade = self.trades.get((self.clientId, reqId)) if reqId != -1 else None
    warningCodes = frozenset({105, 110, 165, 321, 329, 399, 404, 434, 492, 10167})
    isWarning = errorCode in warningCodes or 2100 <= errorCode < 2200
    msg = f"{'Warning' if isWarning else 'Error'} {errorCode}, reqId {reqId}: {errorString}"
    # ... logic for handling specific error codes
```

--------------------------------

### Process Tick Size Updates in Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Updates the size component of bid or ask prices. It performs validation to prevent redundant updates and handles the transition to default empty values when size is zero.

```python
def tickSize(self, reqId: int, tickType: int, size: float):
	ticker = self.reqId2Ticker.get(reqId)
	if not ticker:
		self._logger.error(f"tickSize: Unknown reqId: {reqId}")
		return

	if tickType in {0, 69}:
		if size == ticker.bidSize:
			return
		ticker.prevBidSize = ticker.bidSize
		if size == 0:
			ticker.bid = self.defaultEmptyPrice
			ticker.bidSize = self.defaultEmptySize
		else:
			ticker.bidSize = size
	elif tickType in {3, 70}:
		if size == ticker.askSize:
			return
		ticker.prevAskSize = ticker.askSize
		if size == 0:
			ticker.ask = self.defaultEmptyPrice
			ticker.askSize = self.defaultEmptySize
		else:
			ticker.askSize = size
```

--------------------------------

### Request Multi-Account Updates Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously requests updates for multiple accounts, optionally specifying a model code. Returns an Awaitable that resolves to None.

```python
reqAccountUpdatesMultiAsync(_account_ , _modelCode =''_)
```

--------------------------------

### IB API Tick Data Mappings (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

These dictionaries map integer tick type IDs to their corresponding string names for various categories of market data, including price, size, generic, Greeks, EFP, string, timestamp, and real-time volume. These mappings are crucial for interpreting raw tick data received from the IB API.

```Python
PRICE_TICK_MAP: Final[TickDict] = {
    6: "high",
    72: "high",
    7: "low",
    73: "low",
    9: "close",
    75: "close",
    14: "open",
    76: "open",
    15: "low13week",
    16: "high13week",
    17: "low26week",
    18: "high26week",
    19: "low52week",
    20: "high52week",
    35: "auctionPrice",
    37: "markPrice",
    50: "bidYield",
    103: "bidYield",
    51: "askYield",
    104: "askYield",
    52: "lastYield",
    57: "lastRthTrade",
    78: "creditmanMarkPrice",
    79: "creditmanSlowMarkPrice",
    92: "etfNavClose",
    93: "etfNavPriorClose",
    94: "etfNavBid",
    95: "etfNavAsk",
    96: "etfNavLast",
    97: "etfFrozenNavLast",
    98: "etfNavHigh",
    99: "etfNavLow",
    101: "estimatedIpoMidpoint",
    102: "finalIpoLast",
}


SIZE_TICK_MAP: Final[TickDict] = {
    8: "volume",
    74: "volume",
    63: "volumeRate3Min",
    64: "volumeRate5Min",
    65: "volumeRate10Min",
    21: "avVolume",
    22: "openInterest",
    27: "callOpenInterest",
    28: "putOpenInterest",
    29: "callVolume",
    30: "putVolume",
    34: "auctionVolume",
    36: "auctionImbalance",
    61: "regulatoryImbalance",
    86: "futuresOpenInterest",
    87: "avOptionVolume",
    89: "shortableShares",
}

GENERIC_TICK_MAP: Final[TickDict] = {
    23: "histVolatility",
    24: "impliedVolatility",
    31: "indexFuturePremium",
    46: "shortable",
    49: "halted",
    54: "tradeCount",
    55: "tradeRate",
    56: "volumeRate",
    58: "rtHistVolatility",
    60: "bondFactorMultiplier",
    90: "delayedHalted",
}

GREEKS_TICK_MAP: Final[TickDict] = {
    10: "bidGreeks",
    80: "bidGreeks",
    11: "askGreeks",
    81: "askGreeks",
    12: "lastGreeks",
    82: "lastGreeks",
    13: "modelGreeks",
    83: "modelGreeks",
    53: "custGreeks",
}

EFP_TICK_MAP: Final[TickDict] = {
    38: "bidEfp",
    39: "askEfp",
    40: "lastEfp",
    41: "openEfp",
    42: "highEfp",
    43: "lowEfp",
    44: "closeEfp",
}

STRING_TICK_MAP: Final[TickDict] = {
    25: "optionBidExch",
    26: "optionAskExch",
    32: "bidExchange",
    33: "askExchange",
    84: "lastExchange",
    85: "lastRegTime",
    91: "reutersMutualFunds",
    100: "socialMarketAnalytics",
}

TIMESTAMP_TICK_MAP: Final[TickDict] = {
    45: "lastTimestamp",
    88: "delayedLastTimestamp",
}

RT_VOLUME_TICK_MAP: Final[TickDict] = {
    48: "rtVolume",
    77: "rtTradeVolume",
}
```

--------------------------------

### Synchronous vs Asynchronous Execution in ib_async

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Illustrates the difference between synchronous and asynchronous methods for requesting historical data in ib_async. Synchronous calls block until completion, while asynchronous calls yield control to the event loop, allowing for non-blocking operations.

```python
# Synchronous (blocks until complete)
bars = ib.reqHistoricalData(contract, ...)

# Asynchronous (yields to event loop)
bars = await ib.reqHistoricalDataAsync(contract, ...)
```

--------------------------------

### Asynchronous Option Pricing and Volatility Calculation

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Methods to calculate implied volatility and option prices asynchronously. These functions use a 4-second timeout and ensure cleanup of requests via the finally block.

```python
async def calculateImpliedVolatilityAsync(self, contract: Contract, optionPrice: float, underPrice: float, implVolOptions: list[TagValue] = []) -> OptionComputation | None:
	reqId = self.client.getReqId()
	future = self.wrapper.startReq(reqId, contract)
	self.client.calculateImpliedVolatility(reqId, contract, optionPrice, underPrice, implVolOptions)
	try:
		await asyncio.wait_for(future, 4)
		return future.result()
	except asyncio.TimeoutError:
		self._logger.error("calculateImpliedVolatilityAsync: Timeout")
		return None
	finally:
		self.client.cancelCalculateImpliedVolatility(reqId)
```

```python
async def calculateOptionPriceAsync(self, contract: Contract, volatility: float, underPrice: float, optPrcOptions: list[TagValue] = []) -> OptionComputation | None:
	reqId = self.client.getReqId()
	future = self.wrapper.startReq(reqId, contract)
	self.client.calculateOptionPrice(reqId, contract, volatility, underPrice, optPrcOptions)
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

### Request Historical Schedule and Ticks

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Methods to fetch historical trading schedules and specific tick data for contracts. These methods return an awaitable future that resolves once the data is received.

```python
def reqHistoricalScheduleAsync(self, contract, numDays, endDateTime="", useRTH=True) -> Awaitable[HistoricalSchedule]:
    reqId = self.client.getReqId()
    future = self.wrapper.startReq(reqId, contract)
    end = util.formatIBDatetime(endDateTime)
    self.client.reqHistoricalData(reqId, contract, end, f"{numDays} D", "1 day", "SCHEDULE", useRTH, 1, False, None)
    return future

def reqHistoricalTicksAsync(self, contract, startDateTime, endDateTime, numberOfTicks, whatToShow, useRth, ignoreSize=False, miscOptions=[]) -> Awaitable[list]:
    reqId = self.client.getReqId()
    future = self.wrapper.startReq(reqId, contract)
    start = util.formatIBDatetime(startDateTime)
    end = util.formatIBDatetime(endDateTime)
    self.client.reqHistoricalTicks(reqId, contract, start, end, numberOfTicks, whatToShow, useRth, ignoreSize, miscOptions)
    return future
```

--------------------------------

### Order Class Attributes and State Constants

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Defines the attributes for the Order class, such as permId, parentId, lastFillPrice, clientId, whyHeld, and mktCapPrice. It also lists class variables representing various order states like PendingSubmit, Submitted, Cancelled, and Filled, along with sets for DoneStates, ActiveStates, WaitingStates, and WorkingStates.

```python
permId_: `int`__ = 0_

parentId _: `int`__ = 0_

lastFillPrice _: `float`__ = 0.0_

clientId _: `int`__ = 0_

whyHeld _: `str`__ = ''_

mktCapPrice _: `float`__ = 0.0_

_property _total _: float_
    
Helper property to return the total size of this requested order. 

PendingSubmit _: `ClassVar`[`str`]__ = 'PendingSubmit'_
     
PendingCancel _: `ClassVar`[`str`]__ = 'PendingCancel'_
     
PreSubmitted _: `ClassVar`[`str`]__ = 'PreSubmitted'_
     
Submitted _: `ClassVar`[`str`]__ = 'Submitted'_
     
ApiPending _: `ClassVar`[`str`]__ = 'ApiPending'_
     
ApiCancelled _: `ClassVar`[`str`]__ = 'ApiCancelled'_
     
ApiUpdate _: `ClassVar`[`str`]__ = 'ApiUpdate'_
     
Cancelled _: `ClassVar`[`str`]__ = 'Cancelled'_
     
Filled _: `ClassVar`[`str`]__ = 'Filled'_
     
Inactive _: `ClassVar`[`str`]__ = 'Inactive'_
     
ValidationError _: `ClassVar`[`str`]__ = 'ValidationError'_
     
DoneStates _: `ClassVar`[`frozenset`[`str`]]__ = frozenset({'ApiCancelled', 'Cancelled', 'Filled', 'Inactive'})_
     
ActiveStates _: `ClassVar`[`frozenset`[`str`]]__ = frozenset({'ApiPending', 'ApiUpdate', 'PendingSubmit', 'PreSubmitted', 'Submitted', 'ValidationError'})_
     
WaitingStates _: `ClassVar`[`frozenset`[`str`]]__ = frozenset({'ApiPending', 'PendingSubmit', 'PreSubmitted'})_
     
WorkingStates _: `ClassVar`[`frozenset`[`str`]]__ = frozenset({'ApiUpdate', 'Submitted', 'ValidationError'})_
```

--------------------------------

### Set Market Data Type

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Configures the market data type for subsequent requests, allowing the user to choose between live, frozen, or delayed data streams.

```python
def reqMarketDataType(self, marketDataType: int):
	self.client.reqMarketDataType(marketDataType)
```

--------------------------------

### Request Historical Data (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Requests historical bar data for a specified contract. This is a blocking method. It requires parameters like end date/time, duration, bar size, data source, and whether to use Regular Trading Hours. Optional parameters include date formatting, keeping data up-to-date, chart options, and a timeout.

```python
def reqHistoricalData(
        self,
        contract: Contract,
        endDateTime: datetime.datetime | datetime.date | str | None,
        durationStr: str,
        barSizeSetting: str,
        whatToShow: str,
        useRTH: bool,
        formatDate: int = 1,
        keepUpToDate: bool = False,
        chartOptions: list[TagValue] = [],
        timeout: float = 60,
    ) -> BarDataList:
        """
        Request historical bar data.

        This method is blocking.

        https://interactivebrokers.github.io/tws-api/historical_bars.html

        Args:
            contract: Contract of interest.
            endDateTime: Can be set to '' to indicate the current time,
                or it can be given as a datetime.date or datetime.datetime,
                or it can be given as a string in 'yyyyMMdd HH:mm:ss' format.
                If no timezone is given then the TWS login timezone is used.
            durationStr: Time span of all the bars. Examples:
                '60 S', '30 D', '13 W', '6 M', '10 Y'.
            barSizeSetting: Time period of one bar. Must be one of:
                '1 secs', '5 secs', '10 secs' 15 secs', '30 secs',
                '1 min', '2 mins', '3 mins', '5 mins', '10 mins', '15 mins',
                '20 mins', '30 mins',
                '1 hour', '2 hours', '3 hours', '4 hours', '8 hours',
                '1 day', '1 week', '1 month'.
            whatToShow: Specifies the source for constructing bars.
                Must be one of:
                'TRADES', 'MIDPOINT', 'BID', 'ASK', 'BID_ASK',
                'ADJUSTED_LAST', 'HISTORICAL_VOLATILITY',
                'OPTION_IMPLIED_VOLATILITY', 'REBATE_RATE', 'FEE_RATE',
                'YIELD_BID', 'YIELD_ASK', 'YIELD_BID_ASK', 'YIELD_LAST'.
                For 'SCHEDULE' use :meth:`.reqHistoricalSchedule`.
            useRTH: If True then only show data from within Regular
                Trading Hours, if False then show all data.
            formatDate: For an intraday request setting to 2 will cause
                the returned date fields to be timezone-aware
                datetime.datetime with UTC timezone, instead of local timezone
                as used by TWS.
            keepUpToDate: If True then a realtime subscription is started
                to keep the bars updated; ``endDateTime`` must be set
                empty ('') then.
            chartOptions: Unknown.
            timeout: Timeout in seconds after which to cancel the request
                and return an empty bar series. Set to ``0`` to wait
                indefinitely.
        """
        return self._run(
            self.reqHistoricalDataAsync(
                contract,
                endDateTime,
                durationStr,
                barSizeSetting,
                whatToShow,
                useRTH,
                formatDate,
                keepUpToDate,
                chartOptions,
                timeout,
            )
        )
```

--------------------------------

### Request Executions

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Retrieves execution reports based on a provided filter object. The filter contains parameters like client ID, account code, and symbol to narrow down the report results.

```python
def reqExecutions(self, reqId, execFilter):
    self.send(
        7,
        3,
        reqId,
        execFilter.clientId,
        execFilter.acctCode,
        execFilter.time,
        execFilter.symbol,
        execFilter.secType,
        execFilter.exchange,
        execFilter.side,
    )
```

--------------------------------

### Define Index Contract (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Defines an Index contract. It inherits from the base Contract class and requires parameters such as symbol, exchange, and currency.

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

### Request Fundamental Data Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously retrieves fundamental data for a contract based on a specified report type. Returns an Awaitable resolving to a string containing the data.

```python
reqFundamentalDataAsync(_contract_ , _reportType_ , _fundamentalDataOptions =[]_)
```

--------------------------------

### WSH Event Calendar

Source: https://ib-api-reloaded.github.io/ib_async/recipes.html

Queries corporate event data such as earnings dates and board meetings using the Wall Street Horizon API integration.

```python
from ib_async import *
ib = IB()
ib.connect('127.0.0.1', 7497, clientId=1)

ibm = Stock('IBM', 'SMART', 'USD')
ib.qualifyContracts(ibm)

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

### Define Futures Option Contract (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Defines a Futures Option (FOP) contract. It includes parameters specific to options such as last trade date, strike price, right (put/call), exchange, multiplier, and currency.

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

### Request Open Orders Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Fetches currently open orders asynchronously. This method returns a future that will resolve with a list of `Trade` objects representing the open orders.

```python
def reqOpenOrdersAsync(self) -> Awaitable[list[Trade]]:
    future = self.wrapper.startReq("openOrders")
    self.client.reqOpenOrders()
    return future
```

--------------------------------

### Handle Connection Closure

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Manages the cleanup process when a socket connection is lost. It marks all pending futures as failed with a ConnectionError and triggers a full state reset.

```python
def connectionClosed(self):
	error = ConnectionError("Socket disconnect")
	for future in self._futures.values():
		if not future.done():
			future.set_exception(error)

	globalErrorEvent.emit(error)
	self.reset()
```

--------------------------------

### Request Historical Data Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously fetches historical bar data for a contract. Supports various parameters like date/time, duration, bar size, and data type. Returns a BarDataList.

```python
_async _reqHistoricalDataAsync(_contract_ , _endDateTime_ , _durationStr_ , _barSizeSetting_ , _whatToShow_ , _useRTH_ , _formatDate =1_, _keepUpToDate =False_, _chartOptions =[]_, _timeout =60_)
```

--------------------------------

### Asynchronous News Retrieval

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Functions to fetch news providers, specific articles, and historical news data asynchronously. Historical news includes date formatting and timeout handling.

```python
def reqNewsProvidersAsync(self) -> Awaitable[list[NewsProvider]]:
	future = self.wrapper.startReq("newsProviders")
	self.client.reqNewsProviders()
	return future

def reqNewsArticleAsync(self, providerCode: str, articleId: str, newsArticleOptions: list[TagValue] = []) -> Awaitable[NewsArticle]:
	reqId = self.client.getReqId()
	future = self.wrapper.startReq(reqId)
	self.client.reqNewsArticle(reqId, providerCode, articleId, newsArticleOptions)
	return future
```

--------------------------------

### Asynchronous WSH Data Retrieval

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Methods to fetch Wall Street Horizon (WSH) metadata and event data. These methods manage request cancellation to prevent overlapping subscriptions.

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

### Request Scanner Data Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously requests data from the scanner based on a subscription and optional filters. Returns a ScanDataList.

```python
_async _reqScannerDataAsync(_subscription_ , _scannerSubscriptionOptions =[]_, _scannerSubscriptionFilterOptions =[]_)
```

--------------------------------

### Request Account Updates

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Subscribes to real-time updates for account information. Can be filtered by account code.

```python
client.reqAccountUpdates(subscribe=True, acctCode='')
```

--------------------------------

### Manage Timeout and Timer Logic

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Handles asynchronous timeout logic using loop call_later. It calculates delays based on the last activity time and emits events when timeouts occur.

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

### Check Connection Status

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Verifies if the client is currently connected to the IB gateway or TWS.

```python
is_connected = client.isConnected()
```

--------------------------------

### Process Historical News (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Handles historical news data, including time, provider code, article ID, and headline. It parses the timestamp, creates a HistoricalNews object, and appends it to the results for the given request ID.

```python
def historicalNews(
            self, reqId: int, time: str, providerCode: str, articleId: str, headline: str
    ):
        dt = parseIBDatetime(time)
        dt = cast(datetime, dt)
        article = HistoricalNews(dt, providerCode, articleId, headline)
        self._results[reqId].append(article)
```

--------------------------------

### Request Scanner Parameters

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Requests an XML string containing available scanner parameters. This method is blocking and internally calls an asynchronous version to fetch the data. The return type is a string representing the XML parameters.

```python
def reqScannerParameters(self) -> str:
        """
        Requests an XML list of scanner parameters.

        This method is blocking.
        """
        return self._run(self.reqScannerParametersAsync())
```

--------------------------------

### Request Global Cancel (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Initiates a global cancellation request for all active trades, including those managed by other clients or TWS/IB gateway. It logs the action after the request is made.

```python
def reqGlobalCancel(self):
        """
        Cancel all active trades including those placed by other
        clients or TWS/IB gateway.
        """
        self.client.reqGlobalCancel()
        self._logger.info("reqGlobalCancel")
```

--------------------------------

### Historical Data and Ticks

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Endpoints for retrieving historical tick data and head timestamps.

```APIDOC
## GET /reqHistoricalTicks

### Description
Requests historical tick data for a specific contract within a defined time range.

### Method
GET

### Parameters
#### Query Parameters
- **reqId** (int) - Required - Unique request identifier.
- **contract** (object) - Required - Contract details.
- **startDateTime** (string) - Required - Start time of the range.
- **endDateTime** (string) - Required - End time of the range.

### Response
#### Success Response (200)
- **ticks** (array) - List of historical tick data points.
```

--------------------------------

### Format and Parse IB Datetimes

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Functions to convert between Python datetime objects and the specific string format required by the Interactive Brokers API.

```python
from ib_async.util import formatIBDatetime, parseIBDatetime
from datetime import datetime

# Format to IB string
ib_str = formatIBDatetime(datetime.now())

# Parse back to datetime
dt = parseIBDatetime(ib_str)
```

--------------------------------

### ContractDetails Attributes and Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

This section details the attributes and methods available for the ContractDetails object. It includes properties like minSize, sizeIncrement, cusip, ratings, and methods such as tradingSessions(), liquidSessions(), dict(), nonDefaults(), tuple(), and update(). These are used to retrieve and manipulate detailed contract information.

```python
class ContractDetails:
    minSize: float
    sizeIncrement: float
    suggestedSizeIncrement: float
    cusip: str
    ratings: dict
    descAppend: str
    bondType: str
    couponType: str
    callable: bool
    putable: bool
    coupon: float
    convertible: bool
    maturity: str
    issueDate: str
    nextOptionDate: str
    nextOptionType: str
    nextOptionPartial: str
    notes: str

    def tradingSessions(self) -> list:
        """Returns trading sessions for the contract."""
        pass

    def liquidSessions(self) -> list:
        """Returns liquid sessions for the contract."""
        pass

    def dict(self) -> dict:
        """Returns a dictionary representation of the contract details."""
        pass

    def nonDefaults(self) -> dict:
        """Returns a dictionary of non-default attributes."""
        pass

    def tuple(self) -> tuple:
        """Returns a tuple representation of the contract details."""
        pass

    def update(self, **kwargs):
        """Updates contract details with provided keyword arguments."""
        pass
```

--------------------------------

### Calculate Option Price Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously calculates the theoretical price of an option contract given its volatility and the underlying price. Returns an OptionComputation object or None.

```python
_async _calculateOptionPriceAsync(_contract_ , _volatility_ , _underPrice_ , _optPrcOptions =[]_)
```

--------------------------------

### OrderState Transformation and Formatting Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Details methods for transforming and formatting OrderState objects. `transform()` applies a given transformer to numeric values. `numeric()` converts string numeric values to floats, while `formatted()` formats numeric values into strings. `dict()`, `nonDefaults()`, `tuple()`, and `update()` provide data conversion and modification capabilities similar to the Order class.

```python
transform(_transformer_)[source]
    
Convert the numeric values of this OrderState into a new OrderState transformed by ‘using’ 

numeric(_digits =2_)[source]
    
Return a new OrderState with the current values values to floats instead of strings as returned from IBKR directly. 

Return type:
    
`OrderStateNumeric` 

formatted(_digits =2_)[source]
    
Return a new OrderState with the current values as formatted strings. 

dict()
    
Return dataclass values as `dict`. This is a non-recursive variant of `dataclasses.asdict`.

Return type:
    
`dict` 

nonDefaults()
    
For a `dataclass` instance get the fields that are different from the default values and return as `dict`. 

Return type:
    
`dict`[`str`, `Any`] 

tuple()
    
Return dataclass values as `tuple`. This is a non-recursive variant of `dataclasses.astuple`.

Return type:
    
`tuple`[`Any`, `...`] 

update(_* srcObjs_, _** kwargs_)
    
Update fields of the given `dataclass` object from zero or more `dataclass` source objects and/or from keyword arguments. 

Return type:
    
`object`
```

--------------------------------

### Limit Order Initialization (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/order.html

Initializes a Limit Order with a specified action, total quantity, and limit price. It inherits from the base Order class and sets the orderType to 'LMT'.

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

### Request Market Depth Data

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Subscribes to market depth (Level 2) data for a contract, showing bid and ask quantities at different price levels.

```python
client.reqMktDepth(reqId=1, contract=contract_object, numRows=5, isSmartDepth=False, mktDepthOptions=None)
```

--------------------------------

### Request Contract Details Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves detailed information for a given contract asynchronously. It requires a `Contract` object and returns a future that resolves to a list of `ContractDetails`.

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

### WSH Event Data API

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Endpoints for managing Wall Street Horizon (WSH) event data requests.

```APIDOC
## GET /reqWshEventData

### Description
Retrieves Wall Street Horizon event data based on provided filters and event criteria.

### Method
GET

### Parameters
#### Query Parameters
- **reqId** (int) - Required - Unique request identifier.
- **data** (WshEventData) - Required - Object containing conId, filter, and date ranges.

### Request Example
{
  "reqId": 1,
  "data": {
    "conId": 12345,
    "startDate": "20230101",
    "endDate": "20231231"
  }
}

### Response
#### Success Response (200)
- **data** (object) - WSH event details.
```

--------------------------------

### Send Order Details to IB API (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

This function constructs and sends a comprehensive list of order fields to the Interactive Brokers API. It dynamically includes fields based on the order type, contract details, and API version, handling complex order types like delta-neutral and pegged orders, as well as conditional orders.

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

### Contract Representation

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Defines the string representation for Contract objects, including subclasses. It provides a clear and informative output for debugging and logging.

```python
    def __repr__(self):
        attrs = util.dataclassNonDefaults(self)

        if self.__class__ is not Contract:
            attrs.pop("secType", "")

        clsName = self.__class__.__qualname__
        kwargs = ", ".join(f"{k}={v!r}" for k, v in attrs.items())

        return f"{clsName}({kwargs})"

    __str__ = __repr__
```

--------------------------------

### Extract Trades from Report

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/flexreport.html

This snippet demonstrates how to extract trade records from a report object using the extract method. It returns a collection of trade data which is then printed to the console.

```python
trades = report.extract("Trade")
print(trades)
```

--------------------------------

### ContractDescription Attributes and Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

This section covers the ContractDescription object, outlining its attributes and methods. Key attributes include contract and derivativeSecTypes, while methods like dict(), nonDefaults(), tuple(), and update() allow for data retrieval and modification. This object provides descriptive information about a contract.

```python
class ContractDescription:
    contract: Contract
    derivativeSecTypes: list

    def dict(self) -> dict:
        """Returns a dictionary representation of the contract description."""
        pass

    def nonDefaults(self) -> dict:
        """Returns a dictionary of non-default attributes."""
        pass

    def tuple(self) -> tuple:
        """Returns a tuple representation of the contract description."""
        pass

    def update(self, **kwargs):
        """Updates contract description with provided keyword arguments."""
        pass
```

--------------------------------

### Create Pandas DataFrame from Objects (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Generates a pandas DataFrame from a sequence of objects. It supports dataclasses, DynamicObjects, tuples, and other record-like objects. Optionally filters columns based on provided labels. Requires the pandas library.

```python
import asyncio
import datetime as dt
import logging
import math
import signal
import sys
import time
from collections.abc import AsyncIterator, Awaitable, Callable, Iterator
from dataclasses import fields, is_dataclass
from typing import (
    Any,
    Final,
    TypeAlias,
)
from zoneinfo import ZoneInfo

import eventkit as ev

globalErrorEvent = ev.Event()

EPOCH: Final = dt.datetime(1970, 1, 1, tzinfo=dt.timezone.utc)
UNSET_INTEGER: Final = 2**31 - 1
UNSET_DOUBLE: Final = sys.float_info.max

Time_t: TypeAlias = dt.time | dt.datetime


def df(objs, labels: list[str] | None = None):
    """
    Create pandas DataFrame from the sequence of same-type objects.

    Args:
      labels: If supplied, retain only the given labels and drop the rest.
    """
    import pandas as pd

    from .objects import DynamicObject

    if objs:
        objs = list(objs)
        obj = objs[0]
        if is_dataclass(obj):
            df = pd.DataFrame.from_records(dataclassAsTuple(o) for o in objs)
            df.columns = [field.name for field in fields(obj)]
        elif isinstance(obj, DynamicObject):
            df = pd.DataFrame.from_records(o.__dict__ for o in objs)
        else:
            df = pd.DataFrame.from_records(objs)

        if isinstance(obj, tuple):
            _fields = getattr(obj, "_fields", None)
            if _fields:
                # assume it's a namedtuple
                df.columns = _fields
    else:
        df = None

    if labels:
        exclude = [label for label in df if label not in labels]
        df = df.drop(exclude, axis=1)

    return df

```

--------------------------------

### Ticker Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

This section describes the methods available on the Ticker class for checking data validity and retrieving aggregated values.

```APIDOC
## Ticker Methods

This section describes the methods available on the Ticker class for data validation and aggregation.

### Methods

- **isUnset(_value_)**
  Checks if a value is unset.
  * **Parameters**:
    - `_value_` (any) - The value to check.
  * **Return type**: `bool`

- **hasBidAsk()**
  Checks if the ticker has a valid bid and ask price.
  * **Return type**: `bool`

- **midpoint()**
  Returns the average of the bid and ask prices, or `nan` if no valid bid and ask are available.
  * **Return type**: `float`

- **marketPrice()**
  Returns the market price, prioritizing the last trade price if within the bid/ask range, otherwise the midpoint.
  * **Return type**: `float`

- **dict()**
  Returns the Ticker object's values as a dictionary (non-recursive).
  * **Return type**: `dict`

- **nonDefaults()**
  Returns a dictionary of fields that have values different from their defaults.
  * **Return type**: `dict[str, Any]`

- **tuple()**
  Returns the Ticker object's values as a tuple (non-recursive).
  * **Return type**: `tuple[Any, ...]`

- **update(*srcObjs, **kwargs)**
  Updates the Ticker object's fields from source objects or keyword arguments.
  * **Parameters**:
    - `*srcObjs` (object) - Zero or more source objects to update from.
    - `**kwargs` (object) - Keyword arguments to update fields.
  * **Return type**: `object`
```

--------------------------------

### Order Management

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Endpoints for managing and retrieving open orders, completed orders, and auto-opening orders.

```APIDOC
## POST /reqAutoOpenOrders

### Description
Retrieves automatically opened orders.

### Method
POST

### Endpoint
/reqAutoOpenOrders

### Parameters
#### Query Parameters
- **_bAutoBind_** (boolean) - Optional - Indicates whether to auto-bind orders.

### Request Example
```json
{
  "_bAutoBind_": true
}
```

### Response
#### Success Response (200)
- **orders** (array) - List of automatically opened orders.

#### Response Example
```json
{
  "orders": [
    {
      "orderId": 12345,
      "action": "BUY",
      "quantity": 100,
      "orderType": "LMT",
      "limitPrice": 100.50
    }
  ]
}
```

## POST /reqAllOpenOrders

### Description
Retrieves all currently open orders.

### Method
POST

### Endpoint
/reqAllOpenOrders

### Response
#### Success Response (200)
- **orders** (array) - List of all open orders.

#### Response Example
```json
{
  "orders": [
    {
      "orderId": 12346,
      "action": "SELL",
      "quantity": 50,
      "orderType": "MKT"
    }
  ]
}
```

## POST /reqCompletedOrders

### Description
Retrieves completed orders.

### Method
POST

### Endpoint
/reqCompletedOrders

### Parameters
#### Query Parameters
- **_apiOnly_** (boolean) - Optional - Filters for orders placed via API.

### Response
#### Success Response (200)
- **orders** (array) - List of completed orders.

#### Response Example
```json
{
  "orders": [
    {
      "orderId": 12347,
      "status": "Filled",
      "averagePrice": 99.75
    }
  ]
}
```
```

--------------------------------

### Process Real-Time Bars (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Handles incoming real-time bar data. It converts the timestamp to a datetime object, creates a RealTimeBar object, and appends it to the subscriber's list. Emits bar update events to the main IB object and the bars object itself.

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

### Dataclass Utility Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Common utility methods implemented across contract classes to facilitate data transformation and state management. Includes methods for dictionary/tuple conversion, retrieving non-default fields, and bulk updating attributes.

```python
contract = FuturesOption(symbol='ES')

# Convert to dict
data = contract.dict()

# Get only modified fields
changes = contract.nonDefaults()

# Update from another object or kwargs
contract.update(exchange='GLOBEX')
```

--------------------------------

### Integrate ib_async with PyGame Loop

Source: https://ib-api-reloaded.github.io/ib_async/_sources/recipes.rst.txt

Shows how to integrate ib_async into a PyGame application by calling ib.sleep within the main game loop to keep the connection updated while processing game events.

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

### Convert Dataclass to Tuple (ib_async.contract)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Converts dataclass instance values into a tuple. This is a non-recursive operation, similar to `dataclasses.astuple`. It is available across multiple contract types.

```python
forex_instance.tuple()
index_instance.tuple()
cfd_instance.tuple()
commodity_instance.tuple()
bond_instance.tuple()
```

--------------------------------

### Request Market Rule Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Fetches market rule details for a given `marketRuleId` asynchronously. It implements a short timeout and returns a list of `PriceIncrement` objects or `None` on timeout.

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

### Request Tick-by-Tick Data (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Subscribes to tick-by-tick data for a specified contract and tick type. It returns a Ticker object that will contain the ticks in its `tickByTicks` attribute. Supports options for the number of ticks and ignoring size for bid/ask ticks.

```python
def reqTickByTickData(
    self,
    contract: Contract,
    tickType: str,
    numberOfTicks: int = 0,
    ignoreSize: bool = False,
) -> Ticker:
    """
    Subscribe to tick-by-tick data and return the Ticker that
    holds the ticks in ticker.tickByTicks.

    https://interactivebrokers.github.io/tws-api/tick_data.html

    Args:
        contract: Contract of interest.
        tickType: One of  'Last', 'AllLast', 'BidAsk' or 'MidPoint'.
        numberOfTicks: Number of ticks or 0 for unlimited.
        ignoreSize: Ignore bid/ask ticks that only update the size.
    """
    reqId = self.client.getReqId()
    ticker = self.wrapper.startTicker(reqId, contract, tickType)

    self.client.reqTickByTickData(
        reqId, contract, tickType, numberOfTicks, ignoreSize
    )

    return ticker
```

--------------------------------

### Calculate Option Price

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Calculates the theoretical price of an option given its volatility and the underlier's price. This blocking method requires a Contract object, volatility, underlier price, and optional parameters. It returns an OptionComputation object.

```python
def calculateOptionPrice(
        self,
        contract: Contract,
        volatility: float,
        underPrice: float,
        optPrcOptions: list[TagValue] = [],
    ) -> OptionComputation:
        """
        Calculate the option price given the volatility.

        Args:
            contract: Option contract.
            volatility: Option volatility to use in calculation.
            underPrice: Price of the underlier to use in calculation
            implVolOptions: Unknown
        """
        return self._run(
            self.calculateOptionPriceAsync(
                contract, volatility, underPrice, optPrcOptions
            )
        )
```

--------------------------------

### Request Open Orders (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

This function sends a request to the Interactive Brokers API to retrieve all currently open orders. It's a simple call that initiates the data retrieval process from the server.

```python
    def reqOpenOrders(self):
        self.send(5, 1)
```

--------------------------------

### POST /disconnect

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Terminates the connection to the TWS or IB Gateway and clears session state.

```APIDOC
## POST /disconnect

### Description
Disconnects from the TWS or IB Gateway and resets all internal session state.

### Method
POST

### Endpoint
/disconnect

### Response
#### Success Response (200)
- **message** (string) - Disconnection confirmation
```

--------------------------------

### Set Server Log Level

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Configures the logging level for messages received from the IB server.

```python
client.setServerLogLevel(logLevel=1)
```

--------------------------------

### Schedule Callback with Delay

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Schedules a callback function to be executed after a specified delay. It handles time inputs that might only specify time, defaulting to the current date. Returns an event handle for the scheduled callback.

```python
def _fillDate(time: Time_t) -> dt.datetime:
    # use today if date is absent
    if isinstance(time, dt.time):
        t = dt.datetime.combine(dt.date.today(), time)
    else:
        t = time
    return t




[docs]
def schedule(time: Time_t, callback: Callable, *args):
    """
    Schedule the callback to be run at the given time with
    the given arguments.

    This will return the Event Handle.

    Args:
        time: Time to run callback. If given as :py:class:`datetime.time`
            then use today as date.
        callback: Callable scheduled to run.
        args: Arguments for to call callback with.
    """
    t = _fillDate(time)
    now = dt.datetime.now(t.tzinfo)
    delay = (t - now).total_seconds()
    loop = getLoop()
    return loop.call_later(delay, callback, *args)
```

--------------------------------

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

--------------------------------

### Define a General Contract Object in Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

The `Contract` dataclass serves as a base class for all financial instruments. It can be instantiated directly with various attributes or used as a general container when a more specific type is not required. It supports numerous parameters to define a contract's properties.

```python
from ib_async.contract import Contract

# Creating a contract with specific details
contract_details = {
    "conId": 270639,
    "symbol": "IBM",
    "secType": "STK",
    "exchange": "SMART",
    "currency": "USD"
}

my_contract = Contract(**contract_details)

print(f"Contract ID: {my_contract.conId}")
print(f"Symbol: {my_contract.symbol}")
print(f"Security Type: {my_contract.secType}")
print(f"Exchange: {my_contract.exchange}")
print(f"Currency: {my_contract.currency}")
```

--------------------------------

### TickByTickBidAsk Data Structure

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents Bid/Ask tick data, including time, prices, sizes, and attributes.

```APIDOC
## TickByTickBidAsk Data Structure

### Description
Represents Bid/Ask tick data, including time, prices, sizes, and attributes.

### Fields
- **time** (string) - The timestamp of the tick.
- **bidPrice** (float) - The bid price.
- **askPrice** (float) - The ask price.
- **bidSize** (integer) - The bid size.
- **askSize** (integer) - The ask size.
- **tickAttribBidAsk** (TickAttribBidAsk) - Attributes related to the Bid/Ask tick.
```

--------------------------------

### Forex Pair Short Name (ib_async.contract)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Retrieves the short name of the Forex currency pair. This method returns a string representing the pair, such as 'EURUSD'.

```python
forex_instance.pair()
```

--------------------------------

### IBDefaults Class Definition

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Provides default values for common API data fields, such as prices, sizes, unset values, and timezones. This class simplifies data population by offering predefined constants.

```python
from ib_async.objects import IBDefaults

_class _ib_async.objects.IBDefaults(_emptyPrice =-1_, _emptySize =0_, _unset =nan_, _timezone =datetime.timezone.utc_)[source]
    
    A simple way to provide default values when populating API data. 

    emptyPrice _: `Any`__ = -1_ 
    
    emptySize _: `Any`__ = 0_ 
    
    unset _: `Any`__ = nan_ 
    
    timezone _: `tzinfo`__ = datetime.timezone.utc_ 
    
```

--------------------------------

### Synchronous vs. Asynchronous Data Fetching in ib_async

Source: https://ib-api-reloaded.github.io/ib_async/readme.html

Illustrates the difference between synchronous and asynchronous methods for requesting historical data using the `ib_async` library. The synchronous method blocks execution until data is received, while the asynchronous method yields control to the event loop, allowing for non-blocking operations.

```python
# Synchronous (blocks until complete)
bars = ib.reqHistoricalData(contract, ...)

# Asynchronous (yields to event loop)
bars = await ib.reqHistoricalDataAsync(contract, ...)

```

--------------------------------

### Serialize and Format IB API Messages

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Uses a dictionary of lambda functions to convert various Python types into IBKR protocol-compliant strings. It iterates through fields, applies the appropriate converter, and buffers the result with null-byte delimiters.

```python
FORMAT_HANDLERS = {
	int: lambda f: "" if makeEmpty and f == UNSET_INTEGER else str(f),
	type(None): lambda _: "",
	str: lambda s: s,
	bool: lambda b: "1" if b else "0",
	list: lambda lst: "".join([f"{v.tag}={v.value};" for v in lst]),
}

msg = io.StringIO()
for field in fields:
	convert = FORMAT_HANDLERS.get(Contract if isinstance(field, Contract) else type(field), str)
	msg.write(convert(field))
	msg.write("\0")
generated = msg.getvalue()
```

--------------------------------

### OrderStatus Properties and States (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/order.html

Defines the OrderStatus dataclass with fields for order details and provides helper properties like 'total' and class variables for various order states (e.g., PendingSubmit, Filled, DoneStates, ActiveStates).

```python
@dataclass
class OrderStatus:
    orderId: int = 0
    status: str = ""
    filled: float = 0.0
    remaining: float = 0.0
    avgFillPrice: float = 0.0
    permId: int = 0
    parentId: int = 0
    lastFillPrice: float = 0.0
    clientId: int = 0
    whyHeld: str = ""
    mktCapPrice: float = 0.0

    @property
    def total(self) -> float:
        """Helper property to return the total size of this requested order."""
        return self.filled + self.remaining

    PendingSubmit: ClassVar[str] = "PendingSubmit"
    PendingCancel: ClassVar[str] = "PendingCancel"
    PreSubmitted: ClassVar[str] = "PreSubmitted"
    Submitted: ClassVar[str] = "Submitted"
    ApiPending: ClassVar[str] = "ApiPending"
    ApiCancelled: ClassVar[str] = "ApiCancelled"
    ApiUpdate: ClassVar[str] = "ApiUpdate"
    Cancelled: ClassVar[str] = "Cancelled"
    Filled: ClassVar[str] = "Filled"
    Inactive: ClassVar[str] = "Inactive"
    ValidationError: ClassVar[str] = "ValidationError"

    # order has either been completed, cancelled, or destroyed by IBKR's risk management
    DoneStates: ClassVar[frozenset[str]] = frozenset(
        ["Filled", "Cancelled", "ApiCancelled", "Inactive"]
    )

    # order is capable of executing at sometime in the future
    ActiveStates: ClassVar[frozenset[str]] = frozenset(
        [
            "PendingSubmit",
            "ApiPending",
            "PreSubmitted",
            "Submitted",
            "ValidationError",
            "ApiUpdate",
        ]
    )

    # order hasn't triggered "live" yet (but it could become live and execute before we receive a notice)
    WaitingStates: ClassVar[frozenset[str]] = frozenset(
        [
            "PendingSubmit",
            "ApiPending",
            "PreSubmitted",
        ]
    )

    # order is live and "working" at the broker against public exchanges
    WorkingStates: ClassVar[frozenset[str]] = frozenset(
        [
            "Submitted",
            # ValidationError can happen on submit or modify.
            # If ValidationError happens on submit, the states go PreSubmitted -> ValidationError -> Submitted (if it can be ignored automatically), so order is still live.
            # If ValidationError happens on modify, the update is just ValidationError with no new Submitted, so the previous order state remains active.

```

--------------------------------

### Set Market Data Type

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Configures the market data type for subsequent reqMktData calls. Options include Live, Frozen, Delayed, and Delayed Frozen data.

```python
ib.reqMarketDataType(1)  # Set to Live data
```

--------------------------------

### Ticker Data Serialization

Source: https://ib-api-reloaded.github.io/ib_async/api.html

This section covers methods for serializing ticker data into different formats. The `dict()` method returns the dataclass values as a dictionary, while `nonDefaults()` returns only the fields that differ from their default values. The `tuple()` method returns the values as a tuple.

```python
dict()
    
Return dataclass values as `dict`. This is a non-recursive variant of `dataclasses.asdict`.

Return type:
    
`dict` 

nonDefaults()
    
For a `dataclass` instance get the fields that are different from the default values and return as `dict`.

Return type:
    
`dict`[`str`, `Any`] 

tuple()
    
Return dataclass values as `tuple`. This is a non-recursive variant of `dataclasses.astuple`.

Return type:
    
`tuple`[`Any`, `...`]

```

--------------------------------

### End Option Security Definition Parameters (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Signals the end of security definition parameters for options for a given request ID. It calls the internal method to end the request.

```python
def securityDefinitionOptionParameterEnd(self, reqId: int):
        self._endReq(reqId)
```

--------------------------------

### OrderComboLeg

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents a leg within an order combo, primarily used for specifying the price of the leg.

```APIDOC
## OrderComboLeg

### Description
Represents a single leg within an order combo (e.g., a spread). It mainly stores the price associated with this specific leg. Utility methods for data conversion are available.

### Properties
- `price` (float): The price of this combo leg.

### Methods
- `dict()`: Converts the order combo leg object to a dictionary.
- `nonDefaults()`: Returns a dictionary of non-default values.
- `tuple()`: Converts the order combo leg object to a tuple.
- `update(**kwargs)`: Updates the order combo leg object with new values.
```

--------------------------------

### Request Fundamental Data (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves fundamental data for a contract in XML format. This is a blocking method. It requires the contract, report type, and optional fundamental data options.

```python
def reqFundamentalData(
        self,
        contract: Contract,
        reportType: str,
        fundamentalDataOptions: list[TagValue] = [],
    ) -> str:
        """
        Get fundamental data of a contract in XML format.

        This method is blocking.

        https://interactivebrokers.github.io/tws-api/fundamentals.html

        Args:
            contract: Contract to query.
            reportType:

                * 'ReportsFinSummary': Financial summary
                * 'ReportsOwnership': Company's ownership
                * 'ReportSnapshot': Company's financial overview
                * 'ReportsFinStatements': Financial Statements
                * 'RESC': Analyst Estimates
                * 'CalendarReport': Company's calendar
            fundamentalDataOptions: Unknown
        """
        return self._run(
            self.reqFundamentalDataAsync(contract, reportType, fundamentalDataOptions)
        )
```

--------------------------------

### OrderState Class Attributes

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Defines the attributes for the OrderState class, which captures the state of an order. It includes fields for status, margin details before and after changes (initMargin, maintMargin, equityWithLoan), commission information, warning text, and completion timestamps and status.

```python
_class _ib_async.order.OrderState(_status =''_, _initMarginBefore =''_, _maintMarginBefore =''_, _equityWithLoanBefore =''_, _initMarginChange =''_, _maintMarginChange =''_, _equityWithLoanChange =''_, _initMarginAfter =''_, _maintMarginAfter =''_, _equityWithLoanAfter =''_, _commission =1.7976931348623157e+308_, _minCommission =1.7976931348623157e+308_, _maxCommission =1.7976931348623157e+308_, _commissionCurrency =''_, _warningText =''_, _completedTime =''_, _completedStatus =''_)[source]
     

status _: `str`__ = ''_
     

initMarginBefore _: `str`__ = ''_
     

maintMarginBefore _: `str`__ = ''_
     

equityWithLoanBefore _: `str`__ = ''_
     

initMarginChange _: `str`__ = ''_
     

maintMarginChange _: `str`__ = ''_
     

equityWithLoanChange _: `str`__ = ''_
     

initMarginAfter _: `str`__ = ''_
     

maintMarginAfter _: `str`__ = ''_
     

equityWithLoanAfter _: `str`__ = ''_
     

commission _: `float`__ = 1.7976931348623157e+308_
     

minCommission _: `float`__ = 1.7976931348623157e+308_
     

maxCommission _: `float`__ = 1.7976931348623157e+308_
     

commissionCurrency _: `str`__ = ''_
     

warningText _: `str`__ = ''_
     

completedTime _: `str`__ = ''_
     

completedStatus _: `str`__ = ''_
```

--------------------------------

### Implement Volume-Based Bar Aggregation

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ticker.html

The VolumeBars class groups tick data into bars based on cumulative volume. When the accumulated volume of a bar meets or exceeds the defined threshold, the bar is finalized and emitted.

```python
class VolumeBars(Op):
    __slots__ = ("_volume", "bars")
    bars: BarList

    def __init__(self, volume, source=None):
        Op.__init__(self, source)
        self._volume = volume
        self.bars = BarList()

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

### Request Account Updates Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Initiates an asynchronous request for account updates. It takes an account identifier and returns a future. The `True` argument typically signifies enabling updates.

```python
def reqAccountUpdatesAsync(self, account: str) -> Awaitable[None]:
    future = self.wrapper.startReq("accountValues")
    self.client.reqAccountUpdates(True, account)
    return future
```

--------------------------------

### Cancel Market Data Subscription (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Unsubscribes from real-time streaming tick data for a previously subscribed ticker. It returns True if the cancellation was successful, and False if the contract was not found. Requires the Contract object of the ticker to unsubscribe.

```python
def cancelMktData(self, contract: Contract) -> bool:
    """
    Unsubscribe from realtime streaming tick data.

    Args:
        contract: The contract of a previously subscribed ticker to unsubscribe.

    Returns:
        Returns True if cancel was successful.
        Returns False if 'contract' was not found.
    """
    ticker = self.ticker(contract)
    reqId = self.wrapper.endTicker(ticker, "mktData") if ticker else 0

    if reqId:
        self.client.cancelMktData(reqId)
        return True

    self._logger.error(f"cancelMktData: No reqId found for contract {contract}")

    return False
```

--------------------------------

### Request Histogram Data (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Requests histogram data for a given contract. This is a blocking method. It requires the contract, a boolean indicating regular trading hours, and the desired period.

```python
def reqHistogramData(
        self, contract: Contract, useRTH: bool, period: str
    ) -> list[HistogramData]:
        """
        Request histogram data.

        This method is blocking.

        https://interactivebrokers.github.io/tws-api/histograms.html

        Args:
            contract: Contract to query.
            useRTH: If True then only show data from within Regular
                Trading Hours, if False then show all data.
            period: Period of which data is being requested, for example
                '3 days'.
        """
        return self._run(self.reqHistogramDataAsync(contract, useRTH, period))
```

--------------------------------

### OptionComputation Data Structure

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Provides option computation data, including implied volatility, Greeks, and underlying price.

```APIDOC
## OptionComputation Data Structure

### Description
Provides option computation data, including implied volatility, Greeks, and underlying price.

### Fields
- **tickAttrib** (TickAttrib) - Tick attributes related to option computations.
- **impliedVol** (float) - The implied volatility.
- **delta** (float) - The delta of the option.
- **optPrice** (float) - The theoretical option price.
- **pvDividend** (float) - The present value of dividends.
- **gamma** (float) - The gamma of the option.
- **vega** (float) - The vega of the option.
- **theta** (float) - The theta of the option.
- **undPrice** (float) - The price of the underlying asset.
```

--------------------------------

### Request Historical Ticks

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves historical tick data with one-second resolution for a given contract. It supports filtering by time range, tick count, and data type (e.g., Bid_Ask, Trades).

```python
def reqHistoricalTicks(self, contract: Contract, startDateTime: str | datetime.date, endDateTime: str | datetime.date, numberOfTicks: int, whatToShow: str, useRth: bool, ignoreSize: bool = False, miscOptions: list[TagValue] = []) -> list:
	return self._run(
		self.reqHistoricalTicksAsync(contract, startDateTime, endDateTime, numberOfTicks, whatToShow, useRth, ignoreSize, miscOptions)
	)
```

--------------------------------

### Request Market Data

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Subscribes to real-time market data for a specified contract. Requires a unique requestId, contract details, and tick list.

```python
client.reqMktData(reqId=1, contract=contract_object, genericTickList='', snapshot=False, regulatorySnapshot=False, mktDataOptions=None)
```

--------------------------------

### Request Matching Symbols Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously searches for contract symbols matching a given pattern. It includes a timeout mechanism and returns a list of `ContractDescription` objects or `None` if a timeout occurs.

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

### Cancel Order with Manual Time (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

This function cancels an existing order on the Interactive Brokers platform. It requires the order ID and an optional manual cancellation time. The manual time field is only included if the server version is 169 or higher.

```python
    def cancelOrder(self, orderId, manualCancelOrderTime=""):
        fields = [4, 1, orderId]
        if self.serverVersion() >= 169:
            fields += [manualCancelOrderTime]
        self.send(*fields)
```

--------------------------------

### Check Contract Hashability

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Demonstrates the `isHashable` method, which checks if a contract can be hashed by its `conId`. This is important for using contracts in sets or as dictionary keys. Note that Bag contracts have special handling.

```python
from ib_async import Contract

# Example usage:
stock_contract = Contract(conId=12345, _secType='STK')
print(stock_contract.isHashable()) # Output: True

# Bag contracts might return False or handle hashing differently
bag_contract = Contract(conId=28812380, _secType='BAG') # Example conId for Bag
print(bag_contract.isHashable()) # Output: False (or depends on internal logic)
```

--------------------------------

### Schedule Callback Execution

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Schedules a callback function to be executed at a specified time with given arguments. This function returns an Event Handle, which can be used to manage the scheduled event.

```python
_static _schedule(_callback_, _* args_)
```

--------------------------------

### Define Commodity Contract (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Defines a Commodity contract. It inherits from the base Contract class and requires symbol, exchange, and currency parameters.

```python
class Commodity(Contract):
    def __init__(
        self,
        symbol: str = "",
        exchange: str = "",
        currency: str = "",
        **kwargs,
    ):
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

### Place or Modify Order in Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Places a new order or modifies an existing one. It returns a Trade object that is updated with status changes and fills. If an order ID is not provided, a new one is generated. This function is central to executing trades via the API. It requires a contract and an order object.

```python
def placeOrder(self, contract: Contract, order: Order) -> Trade:
        """
        Place a new order or modify an existing order.
        Returns a Trade that is kept live updated with
        status changes, fills, etc.

        Args:
            contract: Contract to use for order.
            order: The order to be placed.
        """
        orderId = order.orderId or self.client.getReqId()
        self.client.placeOrder(orderId, contract, order)
        now = datetime.datetime.now(self.wrapper.defaultTimezone)
        key = self.wrapper.orderKey(self.wrapper.clientId, orderId, order.permId)
        trade = self.wrapper.trades.get(key)
        if trade:
            # this is a modification of an existing order
            assert trade.orderStatus.status not in OrderStatus.DoneStates
            logEntry = TradeLogEntry(now, trade.orderStatus.status, "Modify")
            trade.log.append(logEntry)
            self._logger.info(f"placeOrder: Modify order {trade}")
            trade.modifyEvent.emit(trade)
            self.orderModifyEvent.emit(trade)
        else:
            # this is a new order
            order.clientId = self.wrapper.clientId
            order.orderId = orderId
            orderStatus = OrderStatus(orderId=orderId, status=OrderStatus.PendingSubmit)
            logEntry = TradeLogEntry(now, orderStatus.status)
            trade = Trade(contract, order, orderStatus, [], [logEntry])
            self.wrapper.trades[key] = trade
            self._logger.info(f"placeOrder: New order {trade}")
            self.newOrderEvent.emit(trade)

        return trade
```

--------------------------------

### Ticker Data Fields Initialization

Source: https://ib-api-reloaded.github.io/ib_async/api.html

This section outlines the initialization of various data fields for a ticker object. These fields represent different market data points such as prices, volumes, open interest, and more. They are typically initialized to default values like NaN for floats or empty strings for strings.

```python
shortableShares_: `float`__ = nan_
     

indexFuturePremium _: `float`__ = nan_
     

futuresOpenInterest _: `float`__ = nan_
     

putOpenInterest _: `float`__ = nan_
     

callOpenInterest _: `float`__ = nan_
     

putVolume _: `float`__ = nan_
     

callVolume _: `float`__ = nan_
     

avOptionVolume _: `float`__ = nan_
     

histVolatility _: `float`__ = nan_
     

impliedVolatility _: `float`__ = nan_
     

openInterest _: `float`__ = nan_
     

lastRthTrade _: `float`__ = nan_
     

lastRegTime _: `str`__ = ''_
     

optionBidExch _: `str`__ = ''_
     

optionAskExch _: `str`__ = ''_
     
bondFactorMultiplier _: `float`__ = nan_
     
creditmanMarkPrice _: `float`__ = nan_
     
creditmanSlowMarkPrice _: `float`__ = nan_
     
delayedLastTimestamp _: `datetime` | `None`__ = None_
     
delayedHalted _: `float`__ = nan_
     
reutersMutualFunds _: `str`__ = ''_
     
etfNavClose _: `float`__ = nan_
     
etfNavPriorClose _: `float`__ = nan_
     
etfNavBid _: `float`__ = nan_
     
etfNavAsk _: `float`__ = nan_
     
etfNavLast _: `float`__ = nan_
     
etfFrozenNavLast _: `float`__ = nan_
     
etfNavHigh _: `float`__ = nan_
     
etfNavLow _: `float`__ = nan_
     
socialMarketAnalytics _: `str`__ = ''_
     
estimatedIpoMidpoint _: `float`__ = nan_
     
finalIpoLast _: `float`__ = nan_
     
dividends _: `Dividends` | `None`__ = None_
     
fundamentalRatios _: `FundamentalRatios` | `None`__ = None_
     
ticks _: `list`[`TickData`]_
     
tickByTicks _: `list`[`TickByTickAllLast` | `TickByTickBidAsk` | `TickByTickMidPoint`]_
     
domBids _: `list`[`DOMLevel`]_
     
domBidsDict _: `dict`[`int`, `DOMLevel`]_
     
domAsks _: `list`[`DOMLevel`]_
     
domAsksDict _: `dict`[`int`, `DOMLevel`]_
     
domTicks _: `list`[`MktDepthData`]_
     
bidGreeks _: `OptionComputation` | `None`__ = None_
     
askGreeks _: `OptionComputation` | `None`__ = None_
     
lastGreeks _: `OptionComputation` | `None`__ = None_
     
modelGreeks _: `OptionComputation` | `None`__ = None_
     
custGreeks _: `OptionComputation` | `None`__ = None_
     
bidEfp _: `EfpData` | `None`__ = None_
     
askEfp _: `EfpData` | `None`__ = None_
     
lastEfp _: `EfpData` | `None`__ = None_
     
openEfp _: `EfpData` | `None`__ = None_
     
highEfp _: `EfpData` | `None`__ = None_
     
lowEfp _: `EfpData` | `None`__ = None_
     
closeEfp _: `EfpData` | `None`__ = None_
     
auctionVolume _: `float`__ = nan_
     
auctionPrice _: `float`__ = nan_
     
auctionImbalance _: `float`__ = nan_
     
regulatoryImbalance _: `float`__ = nan_
     
bboExchange _: `str`__ = ''_
     
snapshotPermissions _: `int`__ = 0_
     
defaults _: `IBDefaults`_
     
created _: `bool`__ = False_
```

--------------------------------

### Stop Limit Order Initialization (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/order.html

Initializes a Stop Limit Order with action, total quantity, limit price, and stop price. It inherits from the base Order class and sets the orderType to 'STP LMT', using auxPrice for the stop price.

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

### Request Historical Schedule Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously retrieves the historical schedule for a contract over a specified number of days. Returns an Awaitable resolving to a HistoricalSchedule object.

```python
reqHistoricalScheduleAsync(_contract_ , _numDays_ , _endDateTime =''_, _useRTH =True_)
```

--------------------------------

### Manage News Bulletins

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Functions to subscribe to and cancel IB news bulletins. These methods interact directly with the client to control the flow of incoming news messages.

```python
def reqNewsBulletins(self, allMessages: bool):
    self.client.reqNewsBulletins(allMessages)

def cancelNewsBulletins(self):
    self.client.cancelNewsBulletins()
```

--------------------------------

### Request PnL Data - Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Initiates a request for Profit and Loss (PnL) data. This function is part of the IB API client and requires a request ID, account identifier, and model code.

```python
def reqPnL(self, reqId, account, modelCode):
        self.send(92, reqId, account, modelCode)
```

--------------------------------

### ContractDetails Object

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Provides comprehensive metadata for a specific contract, including trading hours, market rules, and industry classification.

```APIDOC
## GET /ContractDetails

### Description
Retrieves detailed market information for a given contract, including valid order types and trading hours.

### Method
GET

### Parameters
#### Query Parameters
- **conId** (int) - Required - The contract ID to fetch details for

### Response
#### Success Response (200)
- **marketName** (string) - The market name
- **minTick** (float) - Minimum price increment
- **orderTypes** (string) - Comma-separated list of supported order types
- **tradingHours** (string) - Available trading hours

### Response Example
{
  "marketName": "NASDAQ",
  "minTick": 0.01,
  "orderTypes": "LIMIT,MARKET",
  "tradingHours": "0930-1600"
}
```

--------------------------------

### Set Tick Request Parameters (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Sets specific parameters for a tick request, including minimum tick size, the BBO exchange, and snapshot permissions. This function retrieves the relevant ticker object using the request ID and updates its properties directly.

```python
def tickReqParams(self, reqId: int, minTick: float, bboExchange: str, snapshotPermissions: int):
    ticker = self.reqId2Ticker.get(reqId)
    if not ticker:
        return

    ticker.minTick = minTick
    ticker.bboExchange = bboExchange
    ticker.snapshotPermissions = snapshotPermissions
```

--------------------------------

### Request Historical Data Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Initiates an asynchronous request for historical market data. This method requires contract details, date/time range, bar size, data to show, and RTH (Regular Trading Hours) flag. The return type is an `Awaitable` that resolves to historical data.

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

### Check connection status

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Provides methods to check the current state of the client's connection to the Interactive Brokers API. `isConnected` returns whether the socket connection is active, and `isReady` indicates if the API is fully operational and ready to serve requests.

```python
if client.isConnected():
    print("Socket is connected.")

if client.isReady():
    print("API is ready to serve requests.")
```

--------------------------------

### Request WSH Metadata - Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Requests Watchlist & Scanner (WSH) metadata. This function is part of the IB API client and requires a request ID.

```python
def reqWshMetaData(self, reqId):
        self.send(100, reqId)
```

--------------------------------

### OptionChain Data Structure

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents an option chain, including exchange, underlying ID, expirations, and strikes.

```APIDOC
## OptionChain Data Structure

### Description
Represents an option chain, including exchange, underlying ID, expirations, and strikes.

### Fields
- **exchange** (string) - The exchange where the options are listed.
- **underlyingConId** (integer) - The conId of the underlying contract.
- **tradingClass** (string) - The trading class for the options.
- **multiplier** (float) - The contract multiplier.
- **expirations** (list) - A list of expiration dates.
- **strikes** (list) - A list of strike prices.
```

--------------------------------

### Define Data Structures (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Defines several data structures using Python's typing and dataclass features. These include NamedTuples for simple key-value pairs and session data, and dataclasses for more complex objects like ComboLeg, DeltaNeutralContract, ContractDetails, ContractDescription, and ScanData.

```python
class TagValue(NamedTuple):
    tag: str
    value: str




[docs]
@dataclass
class ComboLeg:
    conId: int = 0
    ratio: int = 0
    action: str = ""
    exchange: str = ""
    openClose: int = 0
    shortSaleSlot: int = 0
    designatedLocation: str = ""
    exemptCode: int = -1




[docs]
@dataclass
class DeltaNeutralContract:
    conId: int = 0
    delta: float = 0.0
    price: float = 0.0




[docs]
class TradingSession(NamedTuple):
    start: dt.datetime
    end: dt.datetime




[docs]
@dataclass
class ContractDetails:
    contract: Contract | None = None
    marketName: str = ""
    minTick: float = 0.0
    orderTypes: str = ""
    validExchanges: str = ""
    priceMagnifier: int = 0
    underConId: int = 0
    longName: str = ""
    contractMonth: str = ""
    industry: str = ""
    category: str = ""
    subcategory: str = ""
    timeZoneId: str = ""
    tradingHours: str = ""
    liquidHours: str = ""
    evRule: str = ""
    evMultiplier: int = 0
    mdSizeMultiplier: int = 1  # obsolete
    aggGroup: int = 0
    underSymbol: str = ""
    underSecType: str = ""
    marketRuleIds: str = ""
    secIdList: list[TagValue] = field(default_factory=list)
    realExpirationDate: str = ""
    lastTradeTime: str = ""
    stockType: str = ""
    minSize: float = 0.0
    sizeIncrement: float = 0.0
    suggestedSizeIncrement: float = 0.0
    # minCashQtySize: float = 0.0
    cusip: str = ""
    ratings: str = ""
    descAppend: str = ""
    bondType: str = ""
    couponType: str = ""
    callable: bool = False
    putable: bool = False
    coupon: float = 0
    convertible: bool = False
    maturity: str = ""
    issueDate: str = ""
    nextOptionDate: str = ""
    nextOptionType: str = ""
    nextOptionPartial: bool = False
    notes: str = ""




[docs]
    def tradingSessions(self) -> list[TradingSession]:
        return self._parseSessions(self.tradingHours)





[docs]
    def liquidSessions(self) -> list[TradingSession]:
        return self._parseSessions(self.liquidHours)

    def _parseSessions(self, s: str) -> list[TradingSession]:
        """Parse the IBKR session date range text format into native Python objects.

        Note: The IBKR date range format looks like:
            timeZoneId='US/Eastern',
            tradingHours='20240721:CLOSED;20240722:0400-20240722:2000;20240723:0400-20240723:'
                '2000;20240724:0400-20240724:2000;20240725:0400-20240725:2000;' 
                '20240726:0400-20240726:2000',
            liquidHours='20240721:CLOSED;20240722:0930-20240722:1600;20240723:0930-20240723:'
                '1600;20240724:0930-20240724:1600;20240725:0930-20240725:1600;' 
                '20240726:0930-20240726:1600',
        """

        # if the time values don't exist, we can't parse anything, so return nothing.
        if not (s or self.timeZoneId):
            return []

        tz = util.ZoneInfo(self.timeZoneId)
        sessions = []
        for sess in s.split(";"):
            if not sess or "CLOSED" in sess:
                continue
            sessions.append(
                TradingSession(
                    *[
                        dt.datetime.strptime(t, "%Y%m%d:%H%M").replace(tzinfo=tz)
                        for t in sess.split("-")
                    ]
                )
            )
        return sessions




[docs]
@dataclass
class ContractDescription:
    contract: Contract | None = None
    derivativeSecTypes: list[str] = field(default_factory=list)




[docs]
@dataclass
class ScanData:
    rank: int
    contractDetails: ContractDetails
    distance: str
    benchmark: str
    projection: str
    legsStr: str
```

--------------------------------

### Define ComboLeg and TagValue

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Helper classes for defining specific contract components. ComboLeg is used for complex order legs, while TagValue provides a simple key-value structure for metadata.

```python
from ib_async.contract import ComboLeg, TagValue

leg = ComboLeg(conId=12345, ratio=1, action='BUY')
tag = TagValue(tag='Description', value='Example Tag')
```

--------------------------------

### Request Completed Orders Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously retrieves a list of completed orders. Can filter for API-only orders. Returns an Awaitable resolving to a list of Trade objects.

```python
reqCompletedOrdersAsync(_apiOnly_)
```

--------------------------------

### Request Historical News Data - Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Initiates a request for historical news data. Requires connection to the IB API. Parameters include request ID, contract details, date range, total results, and historical news options.

```python
def reqHistoricalNews(
        self,
        reqId,
        conId,
        providerCodes,
        startDateTime,
        endDateTime,
        totalResults,
        historicalNewsOptions,
    ):
        self.send(
            86,
            reqId,
            conId,
            providerCodes,
            startDateTime,
            endDateTime,
            totalResults,
            historicalNewsOptions,
        )
```

--------------------------------

### Integrate IB API with PyGame for Periodic Updates

Source: https://ib-api-reloaded.github.io/ib_async/recipes.html

Illustrates how to keep the IB API synchronized within a PyGame application's main loop. By periodically calling `ib.sleep`, the application can receive market data updates while simultaneously handling PyGame events.

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

### Configure One Cancels All (OCA) Group in Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Assigns orders to a One Cancels All (OCA) group, ensuring that if one order in the group is executed, all other orders in the group are canceled. This is useful for strategies involving multiple contingent orders. It takes a list of orders, an OCA group name, and an OCA type as input.

```python
@staticmethod
def oneCancelsAll(orders: list[Order], ocaGroup: str, ocaType: int) -> list[Order]:
        """
        Place the trades in the same One Cancels All (OCA) group.

        https://interactivebrokers.github.io/tws-api/oca.html

        Args:
            orders: The orders that are to be placed together.
        """
        for o in orders:
            o.ocaGroup = ocaGroup
            o.ocaType = ocaType
        return orders
```

--------------------------------

### Handle Market Depth Exchanges Response (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Processes the response containing descriptions for market depth exchanges. It utilizes a generic `_endReq` method to finalize the request, passing a string identifier 'mktDepthExchanges' and the list of `DepthMktDataDescription` objects.

```python
def mktDepthExchanges(
        self, depthMktDataDescriptions: list[DepthMktDataDescription]
    ):
        self._endReq("mktDepthExchanges", depthMktDataDescriptions)
```

--------------------------------

### Request Histogram Data Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously fetches histogram data for a contract, specifying the period and whether to use RTH. Returns an Awaitable resolving to a list of HistogramData objects.

```python
reqHistogramDataAsync(_contract_ , _useRTH_ , _period_)
```

--------------------------------

### Request Historical Ticks Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously fetches historical tick data for a contract within a specified date/time range. Returns an Awaitable resolving to a list of ticks.

```python
reqHistoricalTicksAsync(_contract_ , _startDateTime_ , _endDateTime_ , _numberOfTicks_ , _whatToShow_ , _useRth_ , _ignoreSize =False_, _miscOptions =[]_)
```

--------------------------------

### Unsubscribe from Market Depth Data (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Unsubscribes from market depth data. Requires the contract object that was used for subscription. It cancels the market data request and clears the associated ticker data.

```python
def cancelMktDepth(self, contract: Contract, isSmartDepth=False):
        """
        Unsubscribe from market depth data.

        Args:
            contract: The exact contract object that was used to
                subscribe with.
        """
        ticker = self.ticker(contract)
        reqId = self.wrapper.endTicker(ticker, "mktDepth") if ticker else 0
        if ticker and reqId:
            self.client.cancelMktDepth(reqId, isSmartDepth)

            # clear market depth state from live ticker since it is not longer
            # being updated after the cancel request.
            ticker.domBids.clear()
            ticker.domAsks.clear()
            ticker.domBidsDict.clear()
            ticker.domAsksDict.clear()
        else:
            self._logger.error(
                f"cancelMktDepth: No reqId found for contract {contract}"
            )
```

--------------------------------

### Define Continuous Future Contract (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Defines a ContFut (Continuous Future) contract. It inherits from the base Contract class and accepts parameters like symbol, exchange, localSymbol, multiplier, and currency.

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

### Order Condition Base Class Methods (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Provides methods for converting dataclass instances to dictionaries, retrieving non-default fields, converting to tuples, and updating object fields. These methods are common across various order condition types.

```Python
class OrderCondition:
    # ... (other methods and attributes)

    def dict(self) -> dict:
        """
        Return dataclass values as `dict`. This is a non-recursive variant of `dataclasses.asdict`.
        """
        pass

    def nonDefaults(self) -> dict[str, Any]:
        """
        For a `dataclass` instance get the fields that are different from the default values and return as `dict`.
        """
        pass

    def tuple(self) -> tuple:
        """
        Return dataclass values as `tuple`. This is a non-recursive variant of `dataclasses.astuple`.
        """
        pass

    def update(self, *srcObjs, **kwargs):
        """
        Update fields of the given `dataclass` object from zero or more `dataclass` source objects and/or from keyword arguments.
        """
        pass
```

--------------------------------

### Request Executions Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously retrieves execution data, optionally filtered. Returns an Awaitable resolving to a list of Fill objects.

```python
reqExecutionsAsync(_execFilter =None_)
```

--------------------------------

### Request Account Updates

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Subscribes to or unsubscribes from account updates for a specific account code. It sends a message to the server to initiate or terminate the data stream.

```python
def reqAccountUpdates(self, subscribe, acctCode):
    self.send(6, 2, subscribe, acctCode)
```

--------------------------------

### Dataclass for Smart Component Details

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/objects.html

Stores details about a smart component, including its bit number and associated exchange information. This is likely used for specific trading component identification.

```python
from dataclasses import dataclass


[docs]
@dataclass(slots=True, frozen=True)
class SmartComponent:
    bitNumber: int
    exchange: str
    exchangeLetter: str
```

--------------------------------

### Stop Order Initialization (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/order.html

Initializes a Stop Order with a specified action, total quantity, and stop price. It inherits from the base Order class and sets the orderType to 'STP', using auxPrice for the stop price.

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

### BracketOrder

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents a bracket order, which includes a parent order and associated take-profit and stop-loss orders.

```APIDOC
## BracketOrder

### Description
Represents a bracket order, a type of order that simultaneously places a primary order along with two secondary orders: a take-profit order and a stop-loss order. When the primary order is filled, the secondary orders are placed. If either secondary order is executed, the remaining order is cancelled.

### Properties
- `parent` (Order): The primary order of the bracket.
- `takeProfit` (Order): The take-profit order.
- `stopLoss` (Order): The stop-loss order.
```

--------------------------------

### PriceCondition Attributes and Methods (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Defines a price condition for an order, including attributes like price, exchange, and trigger method. It inherits common dataclass conversion and update methods.

```Python
class PriceCondition(OrderCondition):
    condType: int = 1
    conjunction: str = 'a'
    isMore: bool = True
    price: float = 0.0
    conId: int = 0
    exch: str = ''
    triggerMethod: int = 0

    # Inherits dict(), nonDefaults(), tuple(), update()
```

--------------------------------

### Account Management

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Endpoints for managing and retrieving account information, positions, and summaries.

```APIDOC
## POST /reqManagedAccts

### Description
Retrieves a list of managed accounts.

### Method
POST

### Endpoint
/reqManagedAccts

### Response
#### Success Response (200)
- **accounts** (array) - List of managed account identifiers.

#### Response Example
```json
{
  "accounts": [
    "DU123456",
    "DU789012"
  ]
}
```

## POST /reqPositions

### Description
Retrieves current positions across all accounts.

### Method
POST

### Endpoint
/reqPositions

### Response
#### Success Response (200)
- **positions** (array) - List of current positions.

#### Response Example
```json
{
  "positions": [
    {
      "account": "DU123456",
      "symbol": "AAPL",
      "quantity": 100,
      "marketPrice": 150.00
    }
  ]
}
```

## POST /cancelPositions

### Description
Cancels the retrieval of current positions.

### Method
POST

### Endpoint
/cancelPositions

## POST /reqAccountSummary

### Description
Retrieves a summary of account information.

### Method
POST

### Endpoint
/reqAccountSummary

### Parameters
#### Query Parameters
- **_reqId_** (integer) - Required - Unique identifier for the request.
- **_groupName_** (string) - Optional - The name of the account group to summarize.
- **_tags_** (string) - Optional - Comma-separated list of tags for specific summary fields.

### Response
#### Success Response (200)
- **summary** (object) - Account summary details.

#### Response Example
```json
{
  "summary": {
    "NetLiquidation": 100000.00,
    "BuyingPower": 50000.00
  }
}
```

## POST /cancelAccountSummary

### Description
Cancels the retrieval of account summary information.

### Method
POST

### Endpoint
/cancelAccountSummary

### Parameters
#### Query Parameters
- **_reqId_** (integer) - Required - Unique identifier for the request to cancel.

## POST /reqPositionsMulti

### Description
Retrieves positions for a specific account and model.

### Method
POST

### Endpoint
/reqPositionsMulti

### Parameters
#### Query Parameters
- **_reqId_** (integer) - Required - Unique identifier for the request.
- **_account_** (string) - Required - The account identifier.
- **_modelCode_** (string) - Optional - The model code for filtering positions.

### Response
#### Success Response (200)
- **positions** (array) - List of positions for the specified account and model.

#### Response Example
```json
{
  "positions": [
    {
      "symbol": "IBM",
      "quantity": 50,
      "marketPrice": 130.00
    }
  ]
}
```

## POST /cancelPositionsMulti

### Description
Cancels the retrieval of multi-account positions.

### Method
POST

### Endpoint
/cancelPositionsMulti

### Parameters
#### Query Parameters
- **_reqId_** (integer) - Required - Unique identifier for the request to cancel.

## POST /reqAccountUpdatesMulti

### Description
Subscribes to account updates for a specific account and model.

### Method
POST

### Endpoint
/reqAccountUpdatesMulti

### Parameters
#### Query Parameters
- **_reqId_** (integer) - Required - Unique identifier for the request.
- **_account_** (string) - Required - The account identifier.
- **_modelCode_** (string) - Optional - The model code for filtering updates.
- **_ledgerAndNLV_** (boolean) - Optional - Whether to include ledger and Net Liquidation Value updates.

### Response
#### Success Response (200)
- **update** (object) - Account update information.

#### Response Example
```json
{
  "update": {
    "account": "DU123456",
    "equity": 105000.00,
    "realtimePnL": 500.00
  }
}
```

## POST /cancelAccountUpdatesMulti

### Description
Cancels the subscription to multi-account updates.

### Method
POST

### Endpoint
/cancelAccountUpdatesMulti

### Parameters
#### Query Parameters
- **_reqId_** (integer) - Required - Unique identifier for the request to cancel.

## POST /reqPnL

### Description
Retrieves Profit and Loss (PnL) information for an account.

### Method
POST

### Endpoint
/reqPnL

### Parameters
#### Query Parameters
- **_reqId_** (integer) - Required - Unique identifier for the request.
- **_account_** (string) - Required - The account identifier.
- **_modelCode_** (string) - Optional - The model code for filtering PnL.

### Response
#### Success Response (200)
- **pnl** (array) - List of PnL data.

#### Response Example
```json
{
  "pnl": [
    {
      "conid": 12345678,
      "pnl": 250.75,
      "dayPnL": 50.25
    }
  ]
}
```

## POST /cancelPnL

### Description
Cancels the retrieval of PnL information.

### Method
POST

### Endpoint
/cancelPnL

### Parameters
#### Query Parameters
- **_reqId_** (integer) - Required - Unique identifier for the request to cancel.

## POST /reqPnLSingle

### Description
Retrieves single PnL information for a specific contract within an account.

### Method
POST

### Endpoint
/reqPnLSingle

### Parameters
#### Query Parameters
- **_reqId_** (integer) - Required - Unique identifier for the request.
- **_account_** (string) - Required - The account identifier.
- **_modelCode_** (string) - Optional - The model code for filtering PnL.
- **_conid_** (integer) - Required - The contract identifier.

### Response
#### Success Response (200)
- **pnlSingle** (object) - Single PnL data for the specified contract.

#### Response Example
```json
{
  "pnlSingle": {
    "conid": 12345678,
    "pnl": 120.50,
    "dayPnL": 20.00
  }
}
```

## POST /cancelPnLSingle

### Description
Cancels the retrieval of single PnL information.

### Method
POST

### Endpoint
/cancelPnLSingle

### Parameters
#### Query Parameters
- **_reqId_** (integer) - Required - Unique identifier for the request to cancel.

## POST /reqCompletedOrders

### Description
Retrieves completed orders.

### Method
POST

### Endpoint
/reqCompletedOrders

### Parameters
#### Query Parameters
- **_apiOnly_** (boolean) - Optional - Filters for orders placed via API.

### Response
#### Success Response (200)
- **orders** (array) - List of completed orders.

#### Response Example
```json
{
  "orders": [
    {
      "orderId": 12347,
      "status": "Filled",
      "averagePrice": 99.75
    }
  ]
}
```
```

--------------------------------

### Dynamic Object for Flexible Data Handling

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/objects.html

A generic class that allows dynamic attribute assignment using keyword arguments during initialization. It provides a flexible way to create objects with arbitrary properties.

```python
class DynamicObject:
    def __init__(self, **kwargs):
        self.__dict__.update(kwargs)

    def __repr__(self):
        clsName = self.__class__.__name__
        kwargs = ", ".join(f"{k}={v!r}" for k, v in self.__dict__.items())
        return f"{clsName}({kwargs})"
```

--------------------------------

### Dataclass Representation (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Generates a concise string representation for a dataclass instance, showing only fields with non-default values. This helps in creating cleaner logs and debugging output. Raises a TypeError if the input is not a dataclass.

```python
def dataclassRepr(obj) -> str:
    """
    Provide a culled representation of the given ``dataclass`` instance,
    showing only the fields with a non-default value.
    """
    attrs = dataclassNonDefaults(obj)
    clsName = obj.__class__.__qualname__
    kwargs = ", ".join(f"{k}={v!r}" for k, v in attrs.items())
    return f"{clsName}({kwargs})"

```

--------------------------------

### Request Financial Advisor Data

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Requests data related to financial advisor accounts based on the provided data type.

```python
async def requestFAAsync(faDataType):
    # Implementation logic for FA data request
    pass
```

--------------------------------

### Request Multi-Account Updates Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Requests updates for multiple accounts asynchronously, allowing for an optional model code. It generates a request ID and returns a future representing the operation's outcome.

```python
def reqAccountUpdatesMultiAsync(
    self, account: str, modelCode: str = ""
) -> Awaitable[None]:
    reqId = self.client.getReqId()
    future = self.wrapper.startReq(reqId)
    self.client.reqAccountUpdatesMulti(reqId, account, modelCode, False)
    return future
```

--------------------------------

### Ticker Data Storage and Access

Source: https://ib-api-reloaded.github.io/ib_async/api.html

This section explains how the Ticker class stores different types of streaming market data. Level-1 ticks are in `ticks`, level-2 ticks (order book) are in `domTicks`, `domBids`, and `domAsks`. Tick-by-tick data is in `tickByTicks`. Option Greeks are stored in `bidGreeks`, `askGreeks`, `lastGreeks`, and `modelGreeks`.

```python
Streaming level-1 ticks of type `TickData` are stored in the `ticks` list.
Streaming level-2 ticks of type `MktDepthData` are stored in the `domTicks` list. The order book (DOM) is available as lists of `DOMLevel` in `domBids` and `domAsks`.
Streaming tick-by-tick ticks are stored in `tickByTicks`.
For options the `OptionComputation` values for the bid, ask, resp. last price are stored in the `bidGreeks`, `askGreeks` resp. `lastGreeks` attributes. There is also `modelGreeks` that conveys the greeks as calculated by Interactive Brokers’ option model.
```

--------------------------------

### Base Class for Fundamental Ratios

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/objects.html

An empty class inheriting from `DynamicObject`, intended as a base for specific fundamental ratio data structures. It serves as a placeholder for future extensions.

```python
class FundamentalRatios(DynamicObject):
    """
    See:
    https://web.archive.org/web/20200725010343/https://interactivebrokers.github.io/tws-api/fundamental_ratios_tags.html
    """

    pass
```

--------------------------------

### Request Tick-by-Tick Data

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Subscribes to granular tick-by-tick data such as 'Last', 'AllLast', 'BidAsk', or 'MidPoint'. Returns a Ticker object containing the tick stream.

```python
ticker = ib.reqTickByTickData(contract, 'Last', numberOfTicks=0)
```

--------------------------------

### Request Market Rule Data - Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Fetches market rule data for a specific market rule ID. This function is part of the IB API client and requires the marketRuleId.

```python
def reqMarketRule(self, marketRuleId):
        self.send(91, marketRuleId)
```

--------------------------------

### Request Market Depth

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Subscribes to Level 2 order book data (DOM). Returns a Ticker object populated with domBids and domAsks.

```python
ticker = ib.reqMktDepth(contract, numRows=5, isSmartDepth=True)
```

--------------------------------

### Implement OptionComputation Dataclass

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/objects.html

A dataclass representing option Greeks and pricing metrics. It includes operator overloading for addition, subtraction, and multiplication to facilitate arithmetic operations on option data.

```python
@dataclass(slots=True, frozen=True)
class OptionComputation:
    tickAttrib: int
    impliedVol: float | None = None
    delta: float | None = None
    optPrice: float | None = None
    pvDividend: float | None = None
    gamma: float | None = None
    vega: float | None = None
    theta: float | None = None
    undPrice: float | None = None

    def __add__(self, other: OptionComputation) -> OptionComputation:
        if not isinstance(other, self.__class__):
            raise TypeError(f"Cannot add {type(self)} and {type(other)}")
        return self.__class__(tickAttrib=0, impliedVol=(self.impliedVol or 0) + (other.impliedVol or 0), delta=(self.delta or 0) + (other.delta or 0), optPrice=(self.optPrice or 0) + (other.optPrice or 0), gamma=(self.gamma or 0) + (other.gamma or 0), vega=(self.vega or 0) + (other.vega or 0), theta=(self.theta or 0) + (other.theta or 0), undPrice=self.undPrice)
```

--------------------------------

### Cancel Order and Emit Events (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Handles the cancellation of an order, updates its status, logs the event, and emits various trade-related events. It logs an error if the orderId is unknown. This function returns the trade object.

```python
newStatus = OrderStatus.Cancelled
                else:
                    newStatus = OrderStatus.PendingCancel

                logEntry = TradeLogEntry(now, newStatus)
                trade.log.append(logEntry)
                trade.orderStatus.status = newStatus
                self._logger.info(f"cancelOrder: {trade}")
                trade.cancelEvent.emit(trade)
                trade.statusEvent.emit(trade)
                self.cancelOrderEvent.emit(trade)
                self.orderStatusEvent.emit(trade)
                if newStatus == OrderStatus.Cancelled:
                    trade.cancelledEvent.emit(trade)
        else:
            self._logger.error(f"cancelOrder: Unknown orderId {order.orderId}")

        return trade
```

--------------------------------

### Request Historical Schedule

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Requests the trading schedule for a specific contract over a defined number of days. This is a blocking method that returns a HistoricalSchedule object.

```python
def reqHistoricalSchedule(self, contract: Contract, numDays: int, endDateTime: datetime.datetime | datetime.date | str | None = "", useRTH: bool = True) -> HistoricalSchedule:
	return self._run(
		self.reqHistoricalScheduleAsync(contract, numDays, endDateTime, useRTH)
	)
```

--------------------------------

### PortfolioItem Data Structure

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents an item within a portfolio, detailing contract information, position, market values, and P&L.

```APIDOC
## PortfolioItem Data Structure

### Description
Represents an item within a portfolio, detailing contract information, position, market values, and P&L.

### Fields
- **contract** (Contract) - The contract details.
- **position** (float) - The current position quantity.
- **marketPrice** (float) - The current market price of the contract.
- **marketValue** (float) - The total market value of the position.
- **averageCost** (float) - The average cost basis of the position.
- **unrealizedPNL** (float) - The unrealized Profit and Loss.
- **realizedPNL** (float) - The realized Profit and Loss.
- **account** (string) - The account identifier for this portfolio item.
```

--------------------------------

### Ticker Utility Functions

Source: https://ib-api-reloaded.github.io/ib_async/api.html

This section details utility functions for ticker objects. These functions help in checking the validity of data, such as whether bid and ask prices are available, and in calculating derived values like the midpoint between bid and ask.

```python
isUnset(_value_)[source]
     
Return type:
    
`bool` 

hasBidAsk()[source]
    
See if this ticker has a valid bid and ask. 

Return type:
    
`bool` 

midpoint()[source]
    
Return average of bid and ask, or defaults.unset if no valid bid and ask are available. 

Return type:
    
`float` 

marketPrice()[source]
    
Return the first available one of :rtype: `float`
  * last price if within current bid/ask or no bid/ask available;
  * average of bid and ask (midpoint).

```

--------------------------------

### Request Positions Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Fetches current positions asynchronously. This method returns a future that will resolve with a list of `Position` objects.

```python
def reqPositionsAsync(self) -> Awaitable[list[Position]]:
    future = self.wrapper.startReq("positions")
    self.client.reqPositions()
    return future
```

--------------------------------

### Send IB API Requests

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

These methods encapsulate the communication logic for the Interactive Brokers API. They utilize a central 'send' function to transmit specific request codes and parameters to the server.

```python
def cancelHistoricalData(self, reqId):
    self.send(25, 1, reqId)

def reqCurrentTime(self):
    self.send(49, 1)

def reqRealTimeBars(self, reqId, contract, barSize, whatToShow, useRTH, realTimeBarsOptions):
    self.send(50, 3, reqId, contract, barSize, whatToShow, useRTH, realTimeBarsOptions)

def reqFundamentalData(self, reqId, contract, reportType, fundamentalDataOptions):
    options = fundamentalDataOptions or []
    self.send(52, 2, reqId, contract.conId, contract.symbol, contract.secType, contract.exchange, contract.primaryExchange, contract.currency, contract.localSymbol, reportType, len(options), options)

def startApi(self):
    self.send(71, 2, self.clientId, self.optCapab)
```

--------------------------------

### Process Head Timestamp (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Retrieves the head timestamp for historical data requests. It parses the timestamp string into a datetime object and ends the request, returning the datetime object or an exception if parsing fails.

```python
def headTimestamp(self, reqId: int, headTimestamp: str):
        try:
            dt = parseIBDatetime(headTimestamp)
            self._endReq(reqId, dt)
        except ValueError as exc:
            self._endReq(reqId, exc, False)
```

--------------------------------

### Ticker Class

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Provides access to realtime market information. This class holds current market data such as bid, ask, last price, etc. for a contract.

```APIDOC
## Ticker Class

### Description
Access to realtime market information. This class holds current market data such as bid, ask, last price, etc. for a contract. Streaming level-1 ticks of type `TickData` are stored in the `ticks` list. Streaming level-2 ticks of type `MktDepthData` are stored in the `domTicks` list. The order book (DOM) is available as lists of `DOMLevel` in `domBids` and `domAsks`. Streaming tick-by-tick ticks are stored in `tickByTicks`. For options the `OptionComputation` values for the bid, ask, resp. last price are stored in the `bidGreeks`, `askGreeks` resp. `lastGreeks` attributes. There is also `modelGreeks` that conveys the greeks as calculated by Interactive Brokers’ option model.

### Events
* `updateEvent` (ticker: `Ticker`)

### Attributes
* **contract** (`Contract` | `None`): The contract associated with the ticker.
* **time** (`datetime` | `None`): The time of the market data.
* **timestamp** (`float` | `None`): The timestamp of the market data.
* **marketDataType** (`int`): The market data type.
* **minTick** (`float`): The minimum tick value.
* **bid** (`float`): The bid price.
* **bidSize** (`float`): The bid size.
* **bidExchange** (`str`): The exchange for the bid price.
* **ask** (`float`): The ask price.
* **askSize** (`float`): The ask size.
* **askExchange** (`str`): The exchange for the ask price.
* **last** (`float`): The last traded price.
* **lastSize** (`float`): The size of the last trade.
* **lastExchange** (`str`): The exchange for the last trade.
* **lastTimestamp** (`datetime` | `None`): The timestamp of the last trade.
* **prevBid** (`float`): The previous bid price.
* **prevBidSize** (`float`): The previous bid size.
* **prevAsk** (`float`): The previous ask price.
* **prevAskSize** (`float`): The previous ask size.
* **prevLast** (`float`): The previous last traded price.
* **prevLastSize** (`float`): The previous size of the last trade.
* **volume** (`float`): The trading volume.
* **open** (`float`): The opening price.
* **high** (`float`): The highest price.
* **low** (`float`): The lowest price.
* **close** (`float`): The closing price.
* **vwap** (`float`): The volume-weighted average price.
* **low13week** (`float`): The 13-week low price.
* **high13week** (`float`): The 13-week high price.
* **low26week** (`float`): The 26-week low price.
* **high26week** (`float`): The 26-week high price.
* **low52week** (`float`): The 52-week low price.
* **high52week** (`float`): The 52-week high price.
* **bidYield** (`float`): The bid yield.
* **askYield** (`float`): The ask yield.
* **lastYield** (`float`): The last yield.
* **markPrice** (`float`): The mark price.
* **halted** (`float`): Indicates if the market is halted.
* **rtHistVolatility** (`float`): Real-time historical volatility.
* **rtVolume** (`float`): Real-time volume.
* **rtTradeVolume** (`float`): Real-time trade volume.
* **rtTime** (`datetime` | `None`): The time of the real-time data.
* **avVolume** (`float`): Average volume.
* **tradeCount** (`float`): The number of trades.
* **tradeRate** (`float`): The trade rate.
* **volumeRate** (`float`): The volume rate.
* **volumeRate3Min** (`float`): The 3-minute volume rate.
* **volumeRate5Min** (`float`): The 5-minute volume rate.
* **volumeRate10Min** (`float`): The 10-minute volume rate.
* **shortable** (`float`): Indicates if the security is shortable.
* **shortableShares** (`float`): The number of shortable shares.
* **indexFuturePremium** (`float`): The index future premium.
* **futuresOpenInterest** (`float`): The futures open interest.
* **putOpenInterest** (`float`): The put open interest.
* **callOpenInterest** (`float`): The call open interest.
* **putVolume** (`float`): The put volume.
* **callVolume** (`float`): The call volume.
* **avOptionVolume** (`float`): Average option volume.
* **histVolatility** (`float`): Historical volatility.
* **impliedVolatility** (`float`): Implied volatility.
* **openInterest** (`float`): Open interest.
* **lastRthTrade** (`float`): Last regular trading hours trade.
* **lastRegTime** (`str`): The time of the last regular trade.
* **optionBidExch** (`str`): The exchange for the option bid.
* **optionAskExch** (`str`): The exchange for the option ask.
* **bondFactorMultiplier** (`float`): The bond factor multiplier.
* **creditmanMarkPrice** (`float`): The creditman mark price.
* **creditmanSlowMarkPrice** (`float`): The creditman slow mark price.
* **delayedLastTimestamp** (`datetime` | `None`): The timestamp of the delayed last trade.
* **delayedHalted** (`float`): Indicates if the market is delayed and halted.
* **reutersMutualFunds** (`str`): Reuters mutual fund data.
* **etfNavClose** (`float`): ETF NAV closing price.
* **etfNavPriorClose** (`float`): ETF NAV prior closing price.
* **etfNavBid** (`float`): ETF NAV bid price.
* **etfNavAsk** (`float`): ETF NAV ask price.
* **etfNavLast** (`float`): ETF NAV last price.
* **etfFrozenNavLast** (`float`): ETF frozen NAV last price.
* **etfNavHigh** (`float`): ETF NAV high price.
* **etfNavLow** (`float`): ETF NAV low price.
* **socialMarketAnalytics** (`str`): Social market analytics data.
* **estimatedIpoMidpoint** (`float`): Estimated IPO midpoint price.
* **finalIpoLast** (`float`): Final IPO last price.
* **dividends** (`None`): Dividend information.
* **fundamentalRatios** (`None`): Fundamental ratios.
* **ticks** (`factory`): Factory for streaming level-1 ticks.
* **tickByTicks** (`factory`): Factory for streaming tick-by-tick ticks.
* **domBids** (`factory`): Factory for DOM bids.
* **domBidsDict** (`factory`): Factory for DOM bids dictionary.
* **domAsks** (`factory`): Factory for DOM asks.
* **domAsksDict** (`factory`): Factory for DOM asks dictionary.
* **domTicks** (`factory`): Factory for streaming level-2 ticks.
* **bidGreeks** (`None`): Greeks for the bid price.
* **askGreeks** (`None`): Greeks for the ask price.
* **lastGreeks** (`None`): Greeks for the last price.
* **modelGreeks** (`None`): Greeks from the option model.
* **custGreeks** (`None`): Custom Greeks.
* **bidEfp** (`None`): EFP for the bid price.
* **askEfp** (`None`): EFP for the ask price.
* **lastEfp** (`None`): EFP for the last price.
* **openEfp** (`None`): EFP for the open price.
* **highEfp** (`None`): EFP for the high price.
* **lowEfp** (`None`): EFP for the low price.
* **closeEfp** (`None`): EFP for the close price.
* **auctionVolume** (`float`): Auction volume.
* **auctionPrice** (`float`): Auction price.
* **auctionImbalance** (`float`): Auction imbalance.
* **regulatoryImbalance** (`float`): Regulatory imbalance.
* **bboExchange** (`str`): Best Bid and Offer exchange.
* **snapshotPermissions** (`int`): Snapshot permissions.
* **defaults** (`factory`): Factory for default values.
* **created** (`bool`): Indicates if the object was created.
```

--------------------------------

### Historical Data API

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

This API allows you to request historical bar data for a specified contract. You can define the end date/time, duration, bar size, data source, and whether to use regular trading hours.

```APIDOC
## POST /api/historicalData

### Description
Request historical bar data. This method is blocking.

### Method
POST

### Endpoint
/api/historicalData

### Parameters
#### Path Parameters
None

#### Query Parameters
* **contract** (Contract) - Required - Contract of interest.
* **endDateTime** (datetime.datetime | datetime.date | str | None) - Optional - Can be set to '' to indicate the current time, or it can be given as a datetime.date or datetime.datetime, or it can be given as a string in 'yyyyMMdd HH:mm:ss' format. If no timezone is given then the TWS login timezone is used.
* **durationStr** (str) - Required - Time span of all the bars. Examples: '60 S', '30 D', '13 W', '6 M', '10 Y'.
* **barSizeSetting** (str) - Required - Time period of one bar. Must be one of: '1 secs', '5 secs', '10 secs' 15 secs', '30 secs', '1 min', '2 mins', '3 mins', '5 mins', '10 mins', '15 mins', '20 mins', '30 mins', '1 hour', '2 hours', '3 hours', '4 hours', '8 hours', '1 day', '1 week', '1 month'.
* **whatToShow** (str) - Required - Specifies the source for constructing bars. Must be one of: 'TRADES', 'MIDPOINT', 'BID', 'ASK', 'BID_ASK', 'ADJUSTED_LAST', 'HISTORICAL_VOLATILITY', 'OPTION_IMPLIED_VOLATILITY', 'REBATE_RATE', 'FEE_RATE', 'YIELD_BID', 'YIELD_ASK', 'YIELD_BID_ASK', 'YIELD_LAST'. For 'SCHEDULE' use :meth:`.reqHistoricalSchedule`.
* **useRTH** (bool) - Required - If True then only show data from within Regular Trading Hours, if False then show all data.
* **formatDate** (int) - Optional - For an intraday request setting to 2 will cause the returned date fields to be timezone-aware datetime.datetime with UTC timezone, instead of local timezone as used by TWS. Defaults to 1.
* **keepUpToDate** (bool) - Optional - If True then a realtime subscription is started to keep the bars updated; ``endDateTime`` must be set empty ('') then. Defaults to False.
* **chartOptions** (list[TagValue]) - Optional - Unknown.
* **timeout** (float) - Optional - Timeout in seconds after which to cancel the request and return an empty bar series. Set to ``0`` to wait indefinitely. Defaults to 60.

### Request Example
```json
{
  "contract": {"symbol": "IBM", "secType": "STK", "exchange": "SMART", "currency": "USD"},
  "endDateTime": "",
  "durationStr": "1 M",
  "barSizeSetting": "1 day",
  "whatToShow": "TRADES",
  "useRTH": true,
  "formatDate": 1,
  "keepUpToDate": false,
  "chartOptions": [],
  "timeout": 60
}
```

### Response
#### Success Response (200)
- **bars** (BarDataList) - A list of historical bar data.

#### Response Example
```json
{
  "bars": [
    {
      "date": "20230101 00:00:00",
      "open": 130.0,
      "high": 131.0,
      "low": 129.5,
      "close": 130.5,
      "volume": 1000000,
      "barCount": 1,
      "average": 130.25,
      "hasGaps": false
    }
  ]
}
```
```

--------------------------------

### TradeLogEntry Object

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents a single entry in a trade log, containing status, message, and error code information.

```APIDOC
## TradeLogEntry Object

### Description
Represents a single entry in a trade log, containing status, message, and error code information.

### Class Definition
`ib_async.objects.TradeLogEntry(time, status='', message='', errorCode=0)`

### Fields
- **time** (`datetime`) - The timestamp of the log entry.
- **status** (`str`, optional) - The status of the trade log entry. Defaults to ''.
- **message** (`str`, optional) - A descriptive message for the log entry. Defaults to ''.
- **errorCode** (`int`, optional) - An error code associated with the log entry. Defaults to 0.

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

--------------------------------

### Run Event Loop

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Manages the execution of the asyncio event loop. By default, it runs indefinitely. It can also run until specified awaitables (Tasks, Futures, or coroutines) complete, with an optional timeout to prevent indefinite waiting.

```python
_static _run(_*_, _timeout=None_)
```

--------------------------------

### Process Histogram Data (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Handles histogram data received for a request. It creates a new list of HistogramData objects and ends the request with the processed data.

```python
def histogramData(self, reqId: int, items: list[HistogramData]):
        result = [HistogramData(item.price, item.count) for item in items]
        self._endReq(reqId, result)
```

--------------------------------

### Manage Socket Disconnection and Cleanup

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Handles socket disconnection events by logging errors, updating the wrapper state, and emitting API signals. It ensures the connection state is reset and notifies the application of the closure.

```python
def _onSocketDisconnected(self, msg):
    wasReady = self.isReady()
    if not self.isConnected():
        self._logger.info("Disconnected.")
    elif not msg:
        msg = "Peer closed connection."
        if not wasReady:
            msg += f" clientId {self.clientId} already in use?"

    if msg:
        self._logger.error(msg)
        self.apiError.emit(msg)

    self.wrapper.setEventsDone()
    if wasReady:
        self.wrapper.connectionClosed()

    self.reset()

    if wasReady:
        self.apiEnd.emit()
```

--------------------------------

### Cancel Real-Time Bars Subscription (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Cancels an existing real-time bar subscription. It takes a RealTimeBarList object, which was previously obtained from `reqRealTimeBars`, as input to identify the subscription to cancel.

```python
def cancelRealTimeBars(self, bars: RealTimeBarList):
        """
        Cancel the realtime bars subscription.

        Args:
            bars: The bar list that was obtained from ``reqRealTimeBars``.
        """
        self.client.cancelRealTimeBars(bars.reqId)
        self.wrapper.endSubscription(bars)
```

--------------------------------

### Request Market Data

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Subscribes to real-time tick data or requests a one-time snapshot for a specific contract. Returns a Ticker object that is populated asynchronously.

```python
ticker = ib.reqMktData(contract, genericTickList='100,101', snapshot=False)
ib.sleep(2)
print(ticker.marketPrice())
```

--------------------------------

### Request Historical Data

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Requests historical market data for a contract. It supports complex contract types like 'BAG' by appending combo leg details to the request fields.

```python
def reqHistoricalData(
    self,
    reqId,
    contract,
    endDateTime,
    durationStr,
    barSizeSetting,
    whatToShow,
    useRTH,
    formatDate,
    keepUpToDate,
    chartOptions,
):
    fields = [
        20,
        reqId,
        contract,
        contract.includeExpired,
        endDateTime,
        barSizeSetting,
        durationStr,
        useRTH,
        whatToShow,
        formatDate,
    ]

    if contract.secType == "BAG":
        legs = contract.comboLegs or []
        fields += [len(legs)]
        for leg in legs:
            fields += [leg.conId, leg.ratio, leg.action, leg.exchange]

    fields += [keepUpToDate, chartOptions]
    self.send(*fields)
```

--------------------------------

### Run Asyncio Task in Sync Context

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Executes an asyncio task within a synchronous context, handling cancellation and potential errors. It explicitly passes the event loop to `asyncio.ensure_future` to avoid deprecation warnings in Python 3.10+.

```python
        task = asyncio.ensure_future(future, loop=loop)

        def onError(_):
            task.cancel()

        globalErrorEvent.connect(onError)
        try:
            result = loop.run_until_complete(task)
        except asyncio.CancelledError as e:
            raise globalErrorEvent.value() or e
        finally:
            globalErrorEvent.disconnect(onError)

    return result
```

--------------------------------

### Execution Object Definition and Methods (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Defines the Execution object, capturing details of a trade execution. Includes attributes for execution ID, time, account, exchange, side, shares, price, and more. Offers methods to convert to a dictionary, retrieve non-default values, convert to a tuple, and update the object.

```python
import datetime

class Execution:
    def __init__(self, execId='', time=datetime.datetime(1970, 1, 1, 0, 0, tzinfo=datetime.timezone.utc), acctNumber='', exchange='', side='', shares=0.0, price=0.0, permId=0, clientId=0, orderId=0, liquidation=0, cumQty=0.0, avgPrice=0.0, orderRef='', evRule='', evMultiplier=0.0, modelCode='', lastLiquidity=0, pendingPriceRevision=False):
        # ... attributes ...
        pass

    def dict(self) -> dict:
        # ... implementation ...
        pass

    def nonDefaults(self) -> dict:
        # ... implementation ...
        pass

    def tuple(self) -> tuple:
        # ... implementation ...
        pass

    def update(self, *srcObjs, **kwargs):
        # ... implementation ...
        pass
```

--------------------------------

### Reset client state

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Resets the client to its initial disconnected state. This is useful for cleaning up resources or preparing for a new connection. It clears internal buffers and resets connection-related flags.

```python
client.reset()
```

--------------------------------

### Default Values Configuration for IB Data

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/objects.html

A dataclass to manage default values used when populating data from the IB API. It allows customization of empty price/size values and unset values, as well as the timezone for log history.

```python
from dataclasses import dataclass
from typing import Any
from datetime import timezone
from tzinfo import tzinfo
from math import nan


[docs]
@dataclass
class IBDefaults:
    """A simple way to provide default values when populating API data."""

    # optionally replace IBKR using -1 price and 0 size when quotes don't exist
    emptyPrice: Any = -1
    emptySize: Any = 0

    # optionally replace ib_async default for all instance variable values before popualted from API updates
    unset: Any = nan

    # optionally change the timezone used for log history events in objects (no impact on orders or data processing)
    timezone: tzinfo = timezone.utc
```

--------------------------------

### Request Single PnL Data - Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Requests Profit and Loss (PnL) data for a single position. This function is part of the IB API client and requires a request ID, account, model code, and contract ID.

```python
def reqPnLSingle(self, reqId, account, modelCode, conid):
        self.send(94, reqId, account, modelCode, conid)
```

--------------------------------

### Basic Barplot Function (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

A placeholder function for creating a barplot. It accepts a list of bars and optional title, up color, and down color parameters. The actual plotting logic is not implemented in this snippet.

```python
def barplot(bars, title="", upColor="blue", downColor="red"):
    pass

```

--------------------------------

### OrderState

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Details the state of an order, including margin information, commissions, and completion status. It offers methods for transformation and data conversion.

```APIDOC
## OrderState

### Description
Represents the detailed state of an order at a specific point in time. It includes pre-trade and post-trade margin calculations, commission details, and completion timestamps and status. Utility methods for data manipulation are also provided.

### Properties
- `status` (str): The current status of the order.
- `initMarginBefore` (float): Initial margin requirement before the order.
- `maintMarginBefore` (float): Maintenance margin requirement before the order.
- `equityWithLoanBefore` (float): Equity with loan before the order.
- `initMarginChange` (float): Change in initial margin.
- `maintMarginChange` (float): Change in maintenance margin.
- `equityWithLoanChange` (float): Change in equity with loan.
- `initMarginAfter` (float): Initial margin requirement after the order.
- `maintMarginAfter` (float): Maintenance margin requirement after the order.
- `equityWithLoanAfter` (float): Equity with loan after the order.
- `commission` (float): The commission charged for the order.
- `minCommission` (float): The minimum commission applicable.
- `maxCommission` (float): The maximum commission applicable.
- `commissionCurrency` (str): The currency of the commission.
- `warningText` (str): Any warning messages associated with the order state.
- `completedTime` (str): The time when the order was completed.
- `completedStatus` (str): The status upon completion.

### Methods
- `transform()`: Transforms the order state data.
- `numeric()`: Returns a numeric representation of the order state.
- `formatted()`: Returns a formatted string representation of the order state.
- `dict()`: Converts the order state object to a dictionary.
- `nonDefaults()`: Returns a dictionary of non-default values.
- `tuple()`: Converts the order state object to a tuple.
- `update(**kwargs)`: Updates the order state object with new values.
```

--------------------------------

### Handle Historical Data Updates (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Manages updates to historical data. It parses the date, checks if the new bar is more recent than the last one, and updates or appends the bar accordingly. Emits bar update events.

```python
def historicalDataUpdate(self, reqId: int, bar: BarData):
        bars = self.reqId2Subscriber.get(reqId)
        if not bars:
            return

        bar.date = parseIBDatetime(bar.date)  # type: ignore
        lastDate = bars[-1].date
        if bar.date < lastDate:
            return

        hasNewBar = len(bars) == 0 or bar.date > lastDate
        if hasNewBar:
            bars.append(bar)
        elif bars[-1] != bar:
            bars[-1] = bar
        else:
            return

        self.ib.barUpdateEvent.emit(bars, hasNewBar)
        bars.updateEvent.emit(bars, hasNewBar)
```

--------------------------------

### Request Executions

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Fetches details of executed trades based on a provided execution filter.

```python
client.reqExecutions(reqId=1, execFilter=execution_filter_object)
```

--------------------------------

### Handle Fundamental Data (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Processes fundamental data received for a given request ID. It calls an internal method to end the request and return the data.

```python
def fundamentalData(self, reqId: int, data: str):
        self._endReq(reqId, data)
```

--------------------------------

### BarData Object

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents historical bar data for financial instruments.

```APIDOC
## BarData Object

### Description
Contains OHLCV (Open, High, Low, Close, Volume) data for a specific time interval.

### Fields
- **date** (datetime) - Timestamp of the bar.
- **open** (float) - Opening price.
- **high** (float) - Highest price.
- **low** (float) - Lowest price.
- **close** (float) - Closing price.
- **volume** (float) - Trading volume.
- **average** (float) - Average price.
- **barCount** (int) - Number of trades in the bar.
```

--------------------------------

### Monitor TWS/Gateway Status Asynchronously with IBC

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously monitors the status of the TWS or Gateway application. This method is part of the IBC controller's background operations.

```python
await ibc._monitorAsync()
```

--------------------------------

### Cancel Market Data Subscriptions

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Methods to unsubscribe from previously requested market data streams, including standard tick data, tick-by-tick data, and market depth.

```python
ib.cancelMktData(contract)
ib.cancelTickByTickData(contract, 'Last')
ib.cancelMktDepth(contract, isSmartDepth=True)
```

--------------------------------

### Define Market Data and Portfolio NamedTuples

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/objects.html

A collection of NamedTuple definitions representing various market data points and portfolio states. These structures provide immutable, lightweight containers for data received from the IB API.

```python
class HistoricalTickLast(NamedTuple):
    time: datetime
    tickAttribLast: TickAttribLast
    price: float
    size: float
    exchange: str
    specialConditions: str

class TickByTickAllLast(NamedTuple):
    tickType: int
    time: datetime
    price: float
    size: float
    tickAttribLast: TickAttribLast
    exchange: str
    specialConditions: str

class PortfolioItem(NamedTuple):
    contract: Contract
    position: float
    marketPrice: float
    marketValue: float
    averageCost: float
    unrealizedPNL: float
    realizedPNL: float
    account: str
```

--------------------------------

### Handle Socket Data and Protocol Decoding

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Processes incoming raw TCP data by reading a 4-byte length prefix to reconstruct messages. It decodes the payload, splits fields by null characters, and manages the API handshake and state transitions.

```python
def _onSocketHasData(self, data):
	self._data += data
	while True:
		if len(self._data) <= 4: break
		msgEnd = 4 + struct.unpack(">I", self._data[:4])[0]
		if len(self._data) < msgEnd: break
		msg = self._data[4:msgEnd].decode(errors="backslashreplace")
		self._data = self._data[msgEnd:]
		fields = msg.split("\0")
		fields.pop()
```

--------------------------------

### MarginCondition

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents a margin-based order condition. Allows setting conditions based on a percentage of margin.

```APIDOC
## MarginCondition

### Description
Represents a margin-based order condition.

### Attributes
- `condType` (int): Condition type (default: 4).
- `conjunction` (str): Conjunction type (default: 'a').
- `isMore` (bool): Whether the condition is 'greater than' the specified percentage (default: True).
- `percent` (int): The margin percentage threshold (default: 0).

### Methods
- `dict()`: Returns dataclass values as a dictionary.
- `nonDefaults()`: Returns fields that differ from default values as a dictionary.
- `tuple()`: Returns dataclass values as a tuple.
- `update(*srcObjs, **kwargs)`: Updates fields from source objects or keyword arguments.
```

--------------------------------

### Request Current Time Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Fetches the current server time asynchronously. This method does not require specific parameters beyond initiating the request and returns a future that will resolve with the current datetime.

```python
def reqCurrentTimeAsync(self) -> Awaitable[datetime.datetime]:
    future = self.wrapper.startReq("currentTime")
    self.client.reqCurrentTime()
    return future
```

--------------------------------

### Fetch Historical News Asynchronously

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Retrieves historical news data within a specified timeframe. Returns a HistoricalNews object or None if no data is found.

```python
async def reqHistoricalNewsAsync(conId, providerCodes, startDateTime, endDateTime, totalResults, historicalNewsOptions=[]):
    # Implementation logic for fetching historical news
    pass
```

--------------------------------

### Patch Asyncio for Nested Loops

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Applies the `nest_asyncio` patch to the asyncio library, enabling the execution of nested event loops. This is particularly useful in environments like Jupyter notebooks or when integrating asyncio with other frameworks that might already be running an event loop.

```python
[docs]
def patchAsyncio():
    """Patch asyncio to allow nested event loops."""
    import nest_asyncio

    nest_asyncio.apply()
```

--------------------------------

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

--------------------------------

### TickByTickMidPoint Data Structure

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents Midpoint tick data, including time and the midpoint price.

```APIDOC
## TickByTickMidPoint Data Structure

### Description
Represents Midpoint tick data, including time and the midpoint price.

### Fields
- **time** (string) - The timestamp of the tick.
- **midPoint** (float) - The midpoint price.
```

--------------------------------

### ScanData Attributes and Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

This section details the ScanData object, which represents results from a market scan. It includes attributes such as rank, contractDetails, distance, benchmark, projection, and legsStr. Methods like dict(), nonDefaults(), tuple(), and update() are available for data manipulation and retrieval.

```python
class ScanData:
    rank: int
    contractDetails: ContractDetails
    distance: float
    benchmark: str
    projection: float
    legsStr: str

    def dict(self) -> dict:
        """Returns a dictionary representation of the scan data."""
        pass

    def nonDefaults(self) -> dict:
        """Returns a dictionary of non-default attributes."""
        pass

    def tuple(self) -> tuple:
        """Returns a tuple representation of the scan data."""
        pass

    def update(self, **kwargs):
        """Updates scan data with provided keyword arguments."""
        pass
```

--------------------------------

### Define CFD Contract (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Defines a CFD (Contract For Difference) contract. It inherits from the base Contract class and accepts symbol, exchange, and currency as parameters.

```python
class CFD(Contract):
    def __init__(self,
        symbol: str = "",
        exchange: str = "",
        currency: str = "",
        **kwargs,
    ):
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

### Request Completed Orders Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Fetches completed orders asynchronously. It takes a boolean `apiOnly` parameter to filter results and returns a future that resolves to a list of `Trade` objects.

```python
def reqCompletedOrdersAsync(self, apiOnly: bool) -> Awaitable[list[Trade]]:
    future = self.wrapper.startReq("completedOrders")
    self.client.reqCompletedOrders(apiOnly)
    return future
```

--------------------------------

### Handle Contract Details (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Stores contract details received for a given request ID. This function is also aliased as bondContractDetails. It appends the received ContractDetails object to the results list associated with the request ID.

```python
def contractDetails(self, reqId: int, contractDetails: ContractDetails):
        self._results[reqId].append(contractDetails)

bondContractDetails = contractDetails
```

--------------------------------

### POST /reqHistoricalData

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Requests historical bar data for a given contract. This is a blocking call.

```APIDOC
## POST /reqHistoricalData

### Description
Retrieves historical bar data. Supports keepUpToDate for real-time updates.

### Method
POST

### Parameters
#### Request Body
- **contract** (Contract) - Required - Contract of interest.
- **endDateTime** (str) - Required - End time in 'yyyyMMdd HH:mm:ss' format.
- **durationStr** (str) - Required - Time span (e.g., '60 S', '10 Y').
- **barSizeSetting** (str) - Required - Time period of one bar.
- **whatToShow** (str) - Required - Data source type.
- **useRTH** (bool) - Required - Filter by Regular Trading Hours.
- **keepUpToDate** (bool) - Optional - Start real-time subscription.

### Response
#### Success Response (200)
- **BarDataList** (Object) - Historical bar data series.
```

--------------------------------

### Request Tick-by-Tick Data - Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Requests tick-by-tick data for a given contract. This function is part of the IB API client and requires a request ID, contract, tick type, number of ticks, and ignore size flag.

```python
def reqTickByTickData(self, reqId, contract, tickType, numberOfTicks, ignoreSize):
        self.send(97, reqId, contract, tickType, numberOfTicks, ignoreSize)
```

--------------------------------

### Tick Filtering and Aggregation Operators (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ticker.html

Defines the Tickfilter class for filtering ticks based on their type and provides methods to aggregate these ticks into different bar types (time-based, tick-count-based, volume-based). It emits aggregated bars when conditions are met. Dependencies include the Event and Op classes.

```python
class Tickfilter(Op):
    """Tick filtering event operators that ``emit(time, price, size)``."""

    __slots__ = ("_tickTypes",)

    def __init__(self, tickTypes, source=None):
        Op.__init__(self, source)
        self._tickTypes = set(tickTypes))



    def on_source(self, ticker):
        for t in ticker.ticks:
            if t.tickType in self._tickTypes:
                self.emit(t.time, t.price, t.size)



    def timebars(self, timer: Event) -> "TimeBars":
        """
        Aggregate ticks into time bars, where the timing of new bars
        is derived from a timer event.
        Emits a completed :class:`Bar`.

        This event stores a :class:`BarList` of all created bars in the
        ``bars`` property.

        Args:
            timer: Event for timing when a new bar starts.
        """
        return TimeBars(timer, self)



    def tickbars(self, count: int) -> "TickBars":
        """
        Aggregate ticks into bars that have the same number of ticks.
        Emits a completed :class:`Bar`.

        This event stores a :class:`BarList` of all created bars in the
        ``bars`` property.

        Args:
            count: Number of ticks to use to form one bar.
        """
        return TickBars(count, self)



    def volumebars(self, volume: int) -> "VolumeBars":
        """
        Aggregate ticks into bars that have the same volume.
        Emits a completed :class:`Bar`.

        This event stores a :class:`BarList` of all created bars in the
        ``bars`` property.

        Args:
            count: Number of ticks to use to form one bar.
        """
        return VolumeBars(volume, self)
```

--------------------------------

### Dataclass to Tuple Conversion (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Converts a dataclass instance into a tuple. This is a non-recursive variant, similar to dataclasses.astuple. Raises a TypeError if the input is not a dataclass. Useful for ordered data extraction from dataclasses.

```python
def dataclassAsTuple(obj) -> tuple[Any, ...]:
    """
    Return dataclass values as ``tuple``.
    This is a non-recursive variant of ``dataclasses.astuple``.
    """
    if not is_dataclass(obj):
        raise TypeError(f"Object {obj} is not a dataclass")

    return tuple(getattr(obj, field.name) for field in fields(obj))

```

--------------------------------

### TimeCondition Attributes and Methods (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents a time-based condition for an order, specifying a time and whether it should be 'more than' or 'less than' that time. It includes standard dataclass utility methods.

```Python
class TimeCondition(OrderCondition):
    condType: int = 3
    conjunction: str = 'a'
    isMore: bool = True
    time: str = ''

    # Inherits dict(), nonDefaults(), tuple(), update()
```

--------------------------------

### Fill Data Structure

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents a trade fill, including contract, execution details, commission report, and time.

```APIDOC
## Fill Data Structure

### Description
Represents a trade fill, including contract, execution details, commission report, and time.

### Fields
- **contract** (Contract) - The contract details of the fill.
- **execution** (Execution) - Details of the execution.
- **commissionReport** (CommissionReport) - The commission report for this fill.
- **time** (string) - The timestamp of the fill.
```

--------------------------------

### Run Asynchronous Tasks

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Manages the execution of asynchronous tasks (coroutines, Tasks, Futures). It can run the event loop indefinitely, run until specified awaitables complete, or enforce a timeout. Dependencies include asyncio.

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

### Allow Control-C Interrupt Handling

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Enables the program to be interrupted by a Control-C signal. This function modifies the signal handling behavior for SIGINT.

```python
import signal

def allowCtrlC():
    """Allow Control-C to end program."""
    signal.signal(signal.SIGINT, signal.SIG_DFL)
```

--------------------------------

### Data Object: PortfolioItem

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents an item within a trading portfolio, including position and P&L data.

```APIDOC
## Data Object: PortfolioItem

### Description
Contains details about a specific position held in a portfolio.

### Fields
- **contract** (Contract) - The associated contract object.
- **position** (float) - The current position size.
- **marketPrice** (float) - The current market price.
- **marketValue** (float) - The total market value.
- **averageCost** (float) - The average cost of the position.
- **unrealizedPNL** (float) - Unrealized profit and loss.
- **realizedPNL** (float) - Realized profit and loss.
- **account** (str) - The account identifier.
```

--------------------------------

### Calculate Implied Volatility Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously calculates the implied volatility for an option contract given its price and the underlying price. Returns an OptionComputation object or None.

```python
_async _calculateImpliedVolatilityAsync(_contract_ , _optionPrice_ , _underPrice_ , _implVolOptions =[]_)
```

--------------------------------

### Ticker Event Tick Filtering (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ticker.html

Provides methods to filter specific types of ticks (trades, bids, asks, bid-asks, midpoints) from a ticker event. It utilizes a Tickfilter class which takes a set of tick types to include. This allows for selective processing of market data.

```python
class TickerUpdateEvent(Event):
    __slots__ = ()



    def trades(self) -> "Tickfilter":
        """Emit trade ticks."""
        return Tickfilter((4, 5, 48, 68, 71), self)



    def bids(self) -> "Tickfilter":
        """Emit bid ticks."""
        return Tickfilter((0, 1, 66, 69), self)



    def asks(self) -> "Tickfilter":
        """Emit ask ticks."""
        return Tickfilter((2, 3, 67, 70), self)



    def bidasks(self) -> "Tickfilter":
        """Emit bid and ask ticks."""
        return Tickfilter((0, 1, 66, 69, 2, 3, 67, 70), self)



    def midpoints(self) -> "Tickfilter":
        """Emit midpoint ticks."""
        return Midpoints((), self)
```

--------------------------------

### Contract Details

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Provides detailed information about a financial contract, including market data, trading parameters, and identifiers.

```APIDOC
## Class: ContractDetails

### Description
Represents detailed information about a financial contract, including market name, tick size, order types, valid exchanges, and more.

### Fields
- **contract** (Contract | None) - The contract object itself.
- **marketName** (str) - The name of the market.
- **minTick** (float) - The minimum tick size for the contract.
- **orderTypes** (str) - Comma-separated list of order types supported for the contract.
- **validExchanges** (str) - Comma-separated list of valid exchanges for the contract.
- **priceMagnifier** (int) - Price magnifier for the contract.
- **underConId** (int) - Contract ID of the underlying asset.
- **longName** (str) - The long name of the contract.
- **contractMonth** (str) - The contract month.
- **industry** (str) - The industry sector of the contract.
- **category** (str) - The category of the contract.
- **subcategory** (str) - The subcategory of the contract.
- **timeZoneId** (str) - The time zone ID for the contract.
- **tradingHours** (str) - Trading hours for the contract.
- **liquidHours** (str) - Liquid hours for the contract.
- **evRule** (str) - Event rule identifier.
- **evMultiplier** (int) - Event multiplier.
- **mdSizeMultiplier** (int) - Market data size multiplier.
- **aggGroup** (int) - Aggregation group.
- **underSymbol** (str) - Symbol of the underlying asset.
- **underSecType** (str) - Security type of the underlying asset.
- **marketRuleIds** (str) - Comma-separated list of market rule IDs.
- **secIdList** (list[TagValue]) - List of security ID tags and values.
- **realExpirationDate** (str) - The real expiration date.
- **lastTradeTime** (str) - The last trade time.
- **stockType** (str) - The type of stock.
- **minSize** (float) - The minimum order size.
- **sizeIncrement** (float) - The size increment for orders.
- **suggestedSizeIncrement** (float) - Suggested size increment for orders.
- **cusip** (str) - CUSIP identifier.
- **ratings** (str) - Ratings information.
- **descAppend** (str) - Description append.
- **bondType** (str) - Bond type.
- **couponType** (str) - Coupon type.
- **callable** (bool) - Indicates if the bond is callable.
- **putable** (bool) - Indicates if the bond is putable.
- **coupon** (float) - The coupon rate of the bond.
- **convertible** (bool) - Indicates if the bond is convertible.
- **maturity** (str) - The maturity date of the bond.
- **issueDate** (str) - The issue date of the bond.
- **nextOptionDate** (str) - The next option date.
- **nextOptionType** (str) - The type of the next option.
- **nextOptionPartial** (bool) - Indicates if the next option is partial.
- **notes** (str) - Additional notes.

### Methods
- **tradingSessions()** -> list[TradingSession]: Returns a list of trading sessions for the contract.
- **liquidSessions()** -> list[TradingSession]: Returns a list of liquid sessions for the contract.
- **dict()** -> dict: Returns the dataclass values as a dictionary.
- **nonDefaults()** -> dict[str, Any]: Returns fields that differ from default values as a dictionary.
- **tuple()** -> tuple[Any, ...]: Returns the dataclass values as a tuple.

```

--------------------------------

### Future Contract Definition (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Defines the Future contract, inheriting from the base Contract class. It initializes a future with its symbol, expiration, exchange, and other relevant details.

```python
class Future(Contract):
    def __init__(
        self,
        symbol: str = "",
        lastTradeDateOrContractMonth: str = "",
        exchange: str = "",
        localSymbol: str = "",
        multiplier: str = "",
        currency: str = "",
        **kwargs,
    ):
        """
        Future contract.

        Args:
            symbol: Symbol name.
            lastTradeDateOrContractMonth: The option's last trading day
                or contract month.

                * YYYYMM format: To specify last month
                * YYYYMMDD format: To specify last trading day
            exchange: Destination exchange.
            localSymbol: The contract's symbol within its primary exchange.
            multiplier: The contract multiplier.
            currency: Underlying currency.
        """
        Contract.__init__(
            self,
            "FUT",
            symbol=symbol,
            lastTradeDateOrContractMonth=lastTradeDateOrContractMonth,
            exchange=exchange,
            localSymbol=localSymbol,
            multiplier=multiplier,

```

--------------------------------

### Bar List Management (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ticker.html

Represents a list of Bar objects, inheriting from Python's built-in list. It includes an updateEvent for signaling changes and overrides the equality operator for identity comparison. This class manages collections of aggregated bars.

```python
class BarList(list[Bar]):
    def __init__(self, *args):
        super().__init__(*args)
        self.updateEvent = Event("updateEvent")

    def __eq__(self, other) -> bool:
        return self is other
```

--------------------------------

### Create Candlestick Plot with Matplotlib

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Generates a candlestick plot from provided bar data. Accepts data as a pandas DataFrame or a list of bar objects. Outputs a matplotlib figure. Dependencies include matplotlib and pandas.

```python
import matplotlib.pyplot as plt
import pandas as pd
from matplotlib.lines import Line2D
from matplotlib.patches import Rectangle

def create_candlestick_plot(bars, title, upColor, downColor):
    """Create candlestick plot for the given bars. The bars can be given as
    a DataFrame or as a list of bar objects.
    """
    if isinstance(bars, pd.DataFrame):
        ohlcTups = [tuple(v) for v in bars["open", "high", "low", "close"]].values
    elif bars and hasattr(bars[0], "open_"):
        ohlcTups = [(b.open_, b.high, b.low, b.close) for b in bars]
    else:
        ohlcTups = [(b.open, b.high, b.low, b.close) for b in bars]

    fig, ax = plt.subplots()
    ax.set_title(title)
    ax.grid(True)
    fig.set_size_inches(10, 6)
    for n, (open_, high, low, close) in enumerate(ohlcTups):
        if close >= open_:
            color = upColor
            bodyHi, bodyLo = close, open_
        else:
            color = downColor
            bodyHi, bodyLo = open_, close
        line = Line2D(xdata=(n, n), ydata=(low, bodyLo), color=color, linewidth=1)
        ax.add_line(line)
        line = Line2D(xdata=(n, n), ydata=(high, bodyHi), color=color, linewidth=1)
        ax.add_line(line)
        rect = Rectangle(
            xy=(n - 0.3, bodyLo),
            width=0.6,
            height=bodyHi - bodyLo,
            edgecolor=color,
            facecolor=color,
            alpha=0.4,
            antialiased=True,
        )
        ax.add_patch(rect)

    ax.autoscale_view()
    return fig
```

--------------------------------

### Custom List for Scan Data with Subscription Details

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/objects.html

A list subclass for `ScanData` that stores subscription details and request parameters. It features an `updateEvent` for notifying about new scan results.

```python
from dataclasses import dataclass
from typing import Any, List
from ib_insync import ScannerSubscription, TagValue
from ib_insync.scanner import ScanData
from ib_insync.event import Event


[docs]
class ScanDataList(list[ScanData]):
    """
    List of :class:`.ScanData` that also stores all request parameters.

    Events:
        * ``updateEvent`` (:class:`.ScanDataList`)
    """

    reqId: int
    subscription: ScannerSubscription
    scannerSubscriptionOptions: list[TagValue]
    scannerSubscriptionFilterOptions: list[TagValue]

    def __init__(self, *args):
        super().__init__(*args)
        self.updateEvent = Event("updateEvent")

    def __eq__(self, other):
        return self is other
```

--------------------------------

### Handle Generic Tick Updates (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Updates ticker attributes with generic tick values. This function converts the input value to a float, ensuring it's positive, and then uses a mapping (`GENERIC_TICK_MAP`) to set the corresponding attribute on the ticker object. It also logs any malformed values and adds a `TickData` object to the ticker's history.

```python
def tickGeneric(self, reqId: int, tickType: int, value: float):
    ticker = self.reqId2Ticker.get(reqId)
    if not ticker:
        return

    try:
        value = float(value)
        value = value if value > 0 else self.defaultEmptySize
    except ValueError:
        self._logger.error(
            f"[tickType {tickType}] genericTick: malformed value: {value!r}"
        )
        return

    assert tickType in GENERIC_TICK_MAP, (
        f"Received tick {tickType=} {value=} but we don't have an attribute mapping for it? Triggered from {ticker.contract=}"
    )

    setattr(ticker, GENERIC_TICK_MAP[tickType], value)

    tick = TickData(self.lastTime, tickType, value, 0)
    ticker.ticks.append(tick)
    self.pendingTickers.add(ticker)
```

--------------------------------

### Update Dataclass Fields (ib_async.contract)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Updates fields of a dataclass object using one or more source dataclass objects and/or keyword arguments. This method allows for flexible modification of contract details. It is available across multiple contract types.

```python
forex_instance.update(other_forex_instance, new_field='value')
index_instance.update(other_index_instance, new_field='value')
cfd_instance.update(other_cfd_instance, new_field='value')
commodity_instance.update(other_commodity_instance, new_field='value')
bond_instance.update(other_bond_instance, new_field='value')
```

--------------------------------

### Request Histogram Data - Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Initiates a request for histogram data. This function is used with the IB API client and requires a ticker ID, contract, real-time data flag, and time period.

```python
def reqHistogramData(self, tickerId, contract, useRTH, timePeriod):
        self.send(88, tickerId, contract, contract.includeExpired, useRTH, timePeriod)
```

--------------------------------

### OrderCondition

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Base class for various order conditions, providing common methods for data manipulation.

```APIDOC
## OrderCondition

### Description
Base class for all order conditions. It defines common methods for creating, combining (AND/OR), and converting condition objects to different formats. Specific condition types inherit from this class.

### Methods
- `createClass()`: Factory method to create specific condition instances.
- `And()`: Creates a logical AND condition.
- `Or()`: Creates a logical OR condition.
- `dict()`: Converts the order condition object to a dictionary.
- `nonDefaults()`: Returns a dictionary of non-default values.
- `tuple()`: Converts the order condition object to a tuple.
- `update(**kwargs)`: Updates the order condition object with new values.
```

--------------------------------

### Terminate TWS/Gateway using IBC

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Provides methods to asynchronously terminate the running TWS or Gateway application managed by the IBC controller.

```python
await ibc.terminateAsync()
```

--------------------------------

### Calculate Implied Volatility

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Calculates the implied volatility of an option given its price and the underlier's price. This is a blocking method that takes a Contract object, option price, underlier price, and optional parameters. It returns an OptionComputation object.

```python
def calculateImpliedVolatility(
        self,
        contract: Contract,
        optionPrice: float,
        underPrice: float,
        implVolOptions: list[TagValue] = [],
    ) -> OptionComputation:
        """
        Calculate the volatility given the option price.

        Args:
            contract: Option contract.
            optionPrice: Option price to use in calculation.
            underPrice: Price of the underlier to use in calculation
            implVolOptions: Unknown
        """
        return self._run(
            self.calculateImpliedVolatilityAsync(
                contract, optionPrice, underPrice, implVolOptions
            )
        )
```

--------------------------------

### Request Current Time (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Requests the current time from the TWS. This method is blocking and relies on an asynchronous call to fetch the time.

```python
def reqCurrentTime(self) -> datetime.datetime:
        """
        Request TWS current time.

        This method is blocking.
        """
        return self._run(self.reqCurrentTimeAsync())
```

--------------------------------

### Determine Market Price (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ticker.html

Determines the market price based on available bid, ask, and last prices. It prioritizes the last price if it falls within the bid-ask spread or if no bid/ask data is available. Otherwise, it uses the calculated midpoint. This function is crucial for real-time price tracking.

```python
def marketPrice(self) -> float:
    """
    Return the first available one of

    * last price if within current bid/ask or no bid/ask available;
    * average of bid and ask (midpoint).
    """
    if self.hasBidAsk():
        if self.bid <= self.last <= self.ask:
            price = self.last
        else:
            price = self.midpoint()
    else:
        price = self.last

    return price
```

--------------------------------

### DOMLevel Data Structure

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents a single level in the Depth of Market (DOM), including price, size, and market maker.

```APIDOC
## DOMLevel Data Structure

### Description
Represents a single level in the Depth of Market (DOM), including price, size, and market maker.

### Fields
- **price** (float) - The price of this DOM level.
- **size** (integer) - The total size available at this price level.
- **marketMaker** (string) - The market maker identifier for this level.
```

--------------------------------

### Data Object: TickData

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents real-time market tick data including price and size information.

```APIDOC
## Data Object: TickData

### Description
Standard tick data structure for real-time market updates.

### Fields
- **time** (datetime) - Timestamp of the tick.
- **tickType** (int) - The type of tick.
- **price** (float) - The price of the tick.
- **size** (float) - The size of the tick.
```

--------------------------------

### Request Head Timestamp Data - Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Requests head timestamp data for a given contract. This function is part of the IB API client. It takes a request ID, contract object, show type, use real-time data flag, and date format as input.

```python
def reqHeadTimeStamp(self, reqId, contract, whatToShow, useRTH, formatDate):
        self.send(
            87, reqId, contract, contract.includeExpired, useRTH, whatToShow, formatDate
        )
```

--------------------------------

### Implement Tick-Based Bar Aggregation

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ticker.html

The Tickbars class aggregates raw tick data into bars based on a fixed count of ticks. It maintains a list of bars and emits an update event whenever a bar reaches the specified tick count threshold.

```python
class Tickbars(Op):
    __slots__ = ("_count", "bars")
    bars: BarList

    def __init__(self, count, source=None):
        Op.__init__(self, source)
        self._count = count
        self.bars = BarList()

    def on_source(self, time, price, size):
        if not self.bars or self.bars[-1].count == self._count:
            bar = Bar(time, price, price, price, price, size, 1)
            self.bars.append(bar)
        else:
            bar = self.bars[-1]
            bar.high = max(bar.high, price)
            bar.low = min(bar.low, price)
            bar.close = price
            bar.volume += size
            bar.count += 1
        if bar.count == self._count:
            self.bars.updateEvent.emit(self.bars, True)
            self.emit(self.bars)
```

--------------------------------

### Request Executions Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves execution details asynchronously, optionally filtered by `ExecutionFilter`. It generates a request ID and returns a future that resolves to a list of `Fill` objects.

```python
def reqExecutionsAsync(
    self,
    execFilter: ExecutionFilter | None = None
) -> Awaitable[list[Fill]]:
    execFilter = execFilter or ExecutionFilter()
    reqId = self.client.getReqId()
    future = self.wrapper.startReq(reqId)
    self.client.reqExecutions(reqId, execFilter)
    return future
```

--------------------------------

### Request Head Timestamp Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously requests the head timestamp for historical data of a contract. Returns a datetime object.

```python
_async _reqHeadTimeStampAsync(_contract_ , _whatToShow_ , _useRTH_ , _formatDate_)
```

--------------------------------

### Custom List for Bar Data with Request Parameters

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/objects.html

Extends the built-in list to store `BarData` objects and retain all parameters used in the data request. It also includes an `updateEvent` for notifying listeners of new data.

```python
from dataclasses import dataclass
from datetime import datetime
from typing import Any, List, Optional
from ib_insync import Contract, TagValue
from ib_insync.util import date_ 
from ib_insync.ticker import BarData
from ib_insync.event import Event


[docs]
class BarDataList(list[BarData]):
    """
    List of :class:`.BarData` that also stores all request parameters.

    Events:

        * ``updateEvent``
          (bars: :class:`.BarDataList`, hasNewBar: bool)
    """

    reqId: int
    contract: Contract
    endDateTime: datetime | date_ | str | None
    durationStr: str
    barSizeSetting: str
    whatToShow: str
    useRTH: bool
    formatDate: int
    keepUpToDate: bool
    chartOptions: list[TagValue]

    def __init__(self, *args):
        super().__init__(*args)
        self.updateEvent = Event("updateEvent")

    def __eq__(self, other) -> bool:
        return self is other
```

--------------------------------

### Data Object: AccountValue

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents an account value entry containing details about account balances and currency.

```APIDOC
## Data Object: AccountValue

### Description
Represents a specific value associated with an account, such as balance or margin requirements.

### Fields
- **account** (str) - The account ID.
- **tag** (str) - The attribute tag.
- **value** (str) - The value of the attribute.
- **currency** (str) - The currency of the value.
- **modelCode** (str) - The model code associated with the account.

### Methods
- **dict()**: Returns dataclass values as a dictionary.
- **nonDefaults()**: Returns fields different from default values as a dictionary.
- **tuple()**: Returns dataclass values as a tuple.
```

--------------------------------

### Define Financial Contract Classes

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Classes representing various financial instruments such as FuturesOption, Crypto, MutualFund, and Warrant. These classes inherit from dataclasses and provide standardized interfaces for contract attributes.

```python
from ib_async.contract import FuturesOption, Crypto, MutualFund, Warrant

# Example instantiation
option = FuturesOption(symbol='ES', strike=4000.0, right='C')
crypto = Crypto(symbol='BTC', exchange='PAXOS', currency='USD')
```

--------------------------------

### Contract Data Structure

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Defines the core Contract object and its associated properties used for identifying and configuring financial instruments.

```APIDOC
## GET /Contract

### Description
Represents a financial instrument contract with properties for identification, exchange routing, and specific asset details.

### Method
GET

### Parameters
#### Request Body
- **secType** (string) - Required - The security type (e.g., STK, OPT, FUT)
- **symbol** (string) - Required - The ticker symbol
- **exchange** (string) - Required - The destination exchange
- **currency** (string) - Required - The currency code
- **conId** (int) - Optional - Unique contract identifier

### Response
#### Success Response (200)
- **dict()** (method) - Returns object as a dictionary
- **tuple()** (method) - Returns object as a tuple
- **nonDefaults()** (method) - Returns only fields that differ from default values

### Response Example
{
  "secType": "STK",
  "symbol": "AAPL",
  "exchange": "SMART",
  "currency": "USD"
}
```

--------------------------------

### Request Historical Data Asynchronously

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves historical bar data for a given contract. It handles request timeouts and optional real-time updates using an asyncio future.

```python
async def reqHistoricalDataAsync(self, contract, endDateTime, durationStr, barSizeSetting, whatToShow, useRTH=True, formatDate=1, keepUpToDate=False, chartOptions=[], timeout=60) -> BarDataList:
    reqId = self.client.getReqId()
    bars = BarDataList()
    future = self.wrapper.startReq(reqId, contract, container=bars)
    if keepUpToDate:
        self.wrapper.startSubscription(reqId, bars, contract)
    end = util.formatIBDatetime(endDateTime)
    self.client.reqHistoricalData(reqId, contract, end, durationStr, barSizeSetting, whatToShow, useRTH, formatDate, keepUpToDate, chartOptions)
    task = asyncio.wait_for(future, timeout) if timeout else future
    try:
        await task
    except asyncio.TimeoutError:
        self.client.cancelHistoricalData(reqId)
        bars.clear()
    return bars
```

--------------------------------

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

--------------------------------

### SmartComponent Data Structure

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents a smart component, including its bit number, exchange, and exchange letter.

```APIDOC
## SmartComponent Data Structure

### Description
Represents a smart component, including its bit number, exchange, and exchange letter.

### Fields
- **bitNumber** (integer) - The bit number associated with the component.
- **exchange** (string) - The exchange where the component is listed.
- **exchangeLetter** (string) - The exchange letter identifier.
```

--------------------------------

### Check Order Status (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/order.html

Provides methods to determine the current state of an order, such as whether it is waiting for submission, actively being worked on, or has been completed (filled or cancelled). These methods rely on the orderStatus attribute.

```python
def isWaiting(self) -> bool:
    """True if sent to IBKR but not "Submitted" for live execution yet."""
    return self.orderStatus.status in OrderStatus.WaitingStates

def isWorking(self) -> bool:
    """True if sent to IBKR but not "Submitted" for live execution yet."""
    return self.orderStatus.status in OrderStatus.WorkingStates

def isActive(self) -> bool:
    """True if eligible for execution, false otherwise."""
    return self.orderStatus.status in OrderStatus.ActiveStates

def isDone(self) -> bool:
    """True if completely filled or cancelled, false otherwise."""
    return self.orderStatus.status in OrderStatus.DoneStates
```

--------------------------------

### Request Completed Orders - Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Retrieves a list of completed orders. This function is part of the IB API client and takes a flag indicating whether to retrieve API-only orders.

```python
def reqCompletedOrders(self, apiOnly):
        self.send(99, apiOnly)
```

--------------------------------

### Calculate Midpoint Price (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ticker.html

Calculates the midpoint price by averaging the bid and ask prices. Returns a default unset value if valid bid and ask prices are not available. This is a core component for determining market prices when direct bid/ask data is present.

```python
def midpoint(self) -> float:
    """
    Return average of bid and ask, or defaults.unset if no valid bid and ask
    are available.
    """
    return (self.bid + self.ask) * 0.5 if self.hasBidAsk() else self.defaults.unset
```

--------------------------------

### Bar Data Structure (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ticker.html

Defines the Bar data structure using Python's dataclass. It holds OHLC (Open, High, Low, Close) prices, volume, and tick count for a financial bar. Default values are set to NaN for prices and 0 for volume/count.

```python
@dataclass
class Bar:
    time: datetime | None
    open: float = nan
    high: float = nan
    low: float = nan
    close: float = nan
    volume: int = 0
    count: int = 0
```

--------------------------------

### ContractDescription Class

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents a contract description with associated derivative security types.

```APIDOC
## ContractDescription Class

### Description
Represents a contract description, optionally initialized with a Contract object and a list of derivative security types.

### Attributes
- **contract** (`Contract` | `None`) - The associated Contract object.
- **derivativeSecTypes** (`list[str]`) - A list of derivative security types.

### Methods
#### dict()
Returns dataclass values as a dictionary. This is a non-recursive variant of `dataclasses.asdict`.

Return type:
    `dict`

#### nonDefaults()
For a dataclass instance, gets the fields that are different from the default values and returns them as a dictionary.

Return type:
    `dict[str, Any]`

#### tuple()
Returns dataclass values as a tuple. This is a non-recursive variant of `dataclasses.astuple`.

Return type:
    `tuple[Any, ...]`

#### update(_* srcObjs_, _** kwargs_)
Updates fields of the given dataclass object from zero or more source objects and/or keyword arguments.

Return type:
    `object`
```

--------------------------------

### Cancel Tick-by-Tick Data Subscription (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Unsubscribes from tick-by-tick data for a given contract and tick type. Returns True if the cancellation was successful, and False if the contract was not found. Requires the Contract and tickType of the subscription to cancel.

```python
def cancelTickByTickData(self, contract: Contract, tickType: str) -> bool:
    """
    Unsubscribe from tick-by-tick data

    Args:
        contract: The contract of a previously subscribed ticker to unsubscribe.

    Returns:
        Returns True if cancel was successful.
        Returns False if 'contract' was not found.
    """
    ticker = self.ticker(contract)
    reqId = self.wrapper.endTicker(ticker, tickType) if ticker else 0

    if reqId:
        self.client.cancelTickByTickData(reqId)
        return True

    self._logger.error(f"cancelMktData: No reqId found for contract {contract}")
    return False
```

--------------------------------

### POST /reqHistoricalTicks

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Requests historical tick data with one-second resolution.

```APIDOC
## POST /reqHistoricalTicks

### Description
Requests historical ticks for a contract. Returns a list of tick data.

### Method
POST

### Parameters
#### Request Body
- **contract** (Contract) - Required - Contract to query.
- **startDateTime** (str) - Required - Start time.
- **endDateTime** (str) - Required - End time.
- **numberOfTicks** (int) - Required - Max 1000 ticks.
- **whatToShow** (str) - Required - 'Bid_Ask', 'Midpoint', or 'Trades'.

### Response
#### Success Response (200)
- **list** (Array) - List of historical ticks.
```

--------------------------------

### VolumeCondition Attributes and Methods (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents a volume-based condition for an order, including the volume amount and associated exchange or contract details. It includes standard dataclass utility methods.

```Python
class VolumeCondition(OrderCondition):
    condType: int = 6
    conjunction: str = 'a'
    isMore: bool = True
    volume: int = 0
    conId: int = 0
    exch: str = ''

    # Inherits dict(), nonDefaults(), tuple(), update()
```

--------------------------------

### TimeCondition

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Defines a condition based on the time of day.

```APIDOC
## TimeCondition

### Description
Represents an order condition based on a specific time. It allows setting a time threshold and specifying the logical conjunction.

### Properties
- `condType` (str): The type of condition (e.g., 'Time').
- `conjunction` (str): The logical conjunction ('AND' or 'OR') used with other conditions.
- `isMore` (bool): True if the condition is 'after', False if 'before'.
- `time` (str): The time threshold in 'HH:MM:SS' format.

### Methods
- `dict()`: Converts the time condition object to a dictionary.
- `nonDefaults()`: Returns a dictionary of non-default values.
- `tuple()`: Converts the time condition object to a tuple.
- `update(**kwargs)`: Updates the time condition object with new values.
```

--------------------------------

### Process Scanner Data (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Receives and processes data from a scanner request. It creates ScanData objects and appends them to a list associated with the request ID, clearing the list if it's the first result (rank 0).

```python
def scannerData(
            self,
            reqId: int,
            rank: int,
            contractDetails: ContractDetails,
            distance: str,
            benchmark: str,
            projection: str,
            legsStr: str,
    ):
        data = ScanData(rank, contractDetails, distance, benchmark, projection, legsStr)
        dataList = self.reqId2Subscriber.get(reqId)
        if dataList is None:
            dataList = self._results.get(reqId)

        if dataList is not None:
            if rank == 0:
                dataList.clear()
            dataList.append(data)
```

--------------------------------

### PercentChangeCondition

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Defines a condition based on the percentage change of a contract's price.

```APIDOC
## PercentChangeCondition

### Description
Represents an order condition based on the percentage change of a contract's price. It allows setting a percentage change threshold and specifying the logical conjunction.

### Properties
- `condType` (str): The type of condition (e.g., 'PercentChange').
- `conjunction` (str): The logical conjunction ('AND' or 'OR') used with other conditions.
- `isMore` (bool): True if the condition is 'greater than', False if 'less than'.
- `changePercent` (float): The percentage change threshold.

### Methods
- `dict()`: Converts the percent change condition object to a dictionary.
- `nonDefaults()`: Returns a dictionary of non-default values.
- `tuple()`: Converts the percent change condition object to a tuple.
- `update(**kwargs)`: Updates the percent change condition object with new values.
```

--------------------------------

### Python: Send Data via IB Socket Protocol

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Serializes and sends data fields using the IB socket protocol. It handles the conversion of various data types, including Contracts and floats, to their string representations suitable for the IB API. Optionally converts 'unset' values to empty strings.

```python
def send(self, *fields, makeEmpty=True):
        """Serialize and send the given fields using the IB socket protocol.

        if 'makeEmpty' is True (default), then the IBKR values representing "no value"
        become the empty string."""
        if not self.isConnected():
            raise ConnectionError("Not connected")

        # fmt: off
        FORMAT_HANDLERS: dict[Any, Callable[[Any], str]] = {
            # Contracts are formatted in IBKR null delimiter format
            Contract: lambda c: "\0".join([
                str(f)
                for f in (
                    c.conId,
                    c.symbol,
                    c.secType,
                    c.lastTradeDateOrContractMonth,
                    c.strike,
                    c.right,
                    c.multiplier,
                    c.exchange,
                    c.primaryExchange,
                    c.currency,
                    c.localSymbol,
                    c.tradingClass,
                )
            ]),

            # Float conversion has 3 stages:
            #  - Convert 'IBKR unset' double to empty (if requested)
            #  - Convert infinity to 'Infinite' string (if appropriate)
            #  - else, convert float to string normally
            float: lambda f: "" 
            if (makeEmpty and f == UNSET_DOUBLE)
            else ("Infinite" if (f == math.inf) else str(f)),

            # Int conversion has 2 stages:
            #  - Convert 'IBKR unset' to empty (if requested)

```

--------------------------------

### Request Historical Ticks Data - Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Initiates a request for historical tick data. This function is part of the IB API client and requires a request ID, contract, date range, number of ticks, show type, use RTH flag, ignore size flag, and miscellaneous options.

```python
def reqHistoricalTicks(
        self,
        reqId,
        contract,
        startDateTime,
        endDateTime,
        numberOfTicks,
        whatToShow,
        useRth,
        ignoreSize,
        miscOptions,
    ):
        self.send(
            96,
            reqId,
            contract,
            contract.includeExpired,
            startDateTime,
            endDateTime,
            numberOfTicks,
            whatToShow,
            useRth,
            ignoreSize,
            miscOptions,
        )
```

--------------------------------

### Calculate Filled and Remaining Shares (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/order.html

Calculates the total number of shares that have been filled for an order and the remaining quantity to be filled. It handles special cases for 'BAG' security types and accounts for fills on leg contracts.

```python
def filled(self) -> float:
    """Number of shares filled."""
    fills = self.fills
    if self.contract.secType == "BAG":
        # don't count fills for the leg contracts
        fills = [f for f in fills if f.contract.secType == "BAG"]

    return sum([f.execution.shares for f in fills])

def remaining(self) -> float:
    """Number of shares remaining to be filled."""
    return float(self.order.totalQuantity) - self.filled()
```

--------------------------------

### Tick Count-Based Bar Aggregation (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ticker.html

Represents the aggregation of ticks into bars based on a fixed number of ticks. The TickBars class inherits from Op and is initialized with a count. It processes ticks and forms a new bar once the specified tick count is reached.

```python
class TickBars(Op):

```

--------------------------------

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

--------------------------------

### RequestError Exception for IB API Errors (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Defines a custom exception `RequestError` for handling errors reported by the IB API that are specific to a single request. It stores the request ID, error code, and message for detailed error reporting.

```Python
class RequestError(Exception):
    """Exception to raise when the API reports an error that can be tied to
    a single request.
    """

    def __init__(self, reqId: int, code: int, message: str):
        """
        Args:
          reqId: Original request ID.
          code: Original error code.
          message: Original error message.
        """
        super().__init__(f"[reqId {reqId}] API error: {code}: {message}")
        self.reqId = reqId
        self.code = code
        self.message = message
```

--------------------------------

### Define Order Conditions (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/order.html

Defines a base class for order conditions and specific subclasses for Price, Time, Margin, Execution, Volume, and Percent Change conditions. Includes a factory method to create condition objects based on type.

```python
@dataclass
class OrderCondition:

    @staticmethod
    def createClass(condType):
        d = {
            1: PriceCondition,
            3: TimeCondition,
            4: MarginCondition,
            5: ExecutionCondition,
            6: VolumeCondition,
            7: PercentChangeCondition,
        }
        return d[condType]

    def And(self):
        self.conjunction = "a"
        return self

    def Or(self):
        self.conjunction = "o"
        return self

@dataclass
class PriceCondition(OrderCondition):
    condType: int = 1
    conjunction: str = "a"
    isMore: bool = True
    price: float = 0.0
    conId: int = 0
    exch: str = ""
    triggerMethod: int = 0

@dataclass
class TimeCondition(OrderCondition):
    condType: int = 3
    conjunction: str = "a"
    isMore: bool = True
    time: str = ""

@dataclass
class MarginCondition(OrderCondition):
    condType: int = 4
    conjunction: str = "a"
    isMore: bool = True
    percent: int = 0

@dataclass
class ExecutionCondition(OrderCondition):
    condType: int = 5
    conjunction: str = "a"
    secType: str = ""
    exch: str = ""
    symbol: str = ""

@dataclass
class VolumeCondition(OrderCondition):
    condType: int = 6
    conjunction: str = "a"
    isMore: bool = True
    volume: int = 0
    conId: int = 0
    exch: str = ""

@dataclass
class PercentChangeCondition(OrderCondition):
    condType: int = 7
    conjunction: str = "a"
    isMore: bool = True
    changePercent: float = 0.0
    conId: int = 0
    exch: str = ""
```

--------------------------------

### One Cancels All Orders - Python

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Groups orders to be placed in the same One Cancels All (OCA) group. This ensures that if one order in the group is executed, all other orders in the group are canceled.

```python
ib.oneCancelsAll(orders, ocaGroup, ocaType)
```

--------------------------------

### TimeCondition

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents a time-based order condition. Allows setting conditions based on a specific time.

```APIDOC
## TimeCondition

### Description
Represents a time-based order condition.

### Attributes
- `condType` (int): Condition type (default: 3).
- `conjunction` (str): Conjunction type (default: 'a').
- `isMore` (bool): Whether the condition is 'after' the specified time (default: True).
- `time` (str): The time threshold (default: '').

### Methods
- `dict()`: Returns dataclass values as a dictionary.
- `nonDefaults()`: Returns fields that differ from default values as a dictionary.
- `tuple()`: Returns dataclass values as a tuple.
- `update(*srcObjs, **kwargs)`: Updates fields from source objects or keyword arguments.
```

--------------------------------

### Tickfilter Class and Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

The `Tickfilter` class is used for filtering and emitting tick data. It takes tick types and an optional source during initialization. The `on_source` method emits values to listeners, and `timebars` can be used for time-based bar generation.

```python
_class _ib_async.ticker.Tickfilter(_tickTypes_ , _source =None_)[source]
    
Tick filtering event operators that `emit(time, price, size)`. 

on_source(_ticker_)[source]
    
Emit a new value to all connected listeners. 

Parameters:
    
**args** – Argument values to emit to listeners. 

timebars(_timer_)[source]
    

```

--------------------------------

### Define Ticker Data Structure in Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ticker.html

The Ticker class uses Python dataclasses to store comprehensive market information, including price levels, volume, Greeks, and order book data. It maintains lists for streaming ticks and provides an updateEvent for real-time monitoring.

```python
@dataclass
class Ticker:
    """Current market data such as bid, ask, last price, etc. for a contract."""
    events: ClassVar = ("updateEvent",)
    contract: Contract | None = None
    bid: float = nan
    ask: float = nan
    last: float = nan
    ticks: list[TickData] = field(default_factory=list)
    domBids: list[DOMLevel] = field(default_factory=list)
    domAsks: list[DOMLevel] = field(default_factory=list)
    bidGreeks: OptionComputation | None = None
```

--------------------------------

### ExecutionCondition

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents an execution-based order condition. Allows setting conditions based on security type, exchange, and symbol.

```APIDOC
## ExecutionCondition

### Description
Represents an execution-based order condition.

### Attributes
- `condType` (int): Condition type (default: 5).
- `conjunction` (str): Conjunction type (default: 'a').
- `secType` (str): Security type (default: '').
- `exch` (str): Exchange (default: '').
- `symbol` (str): Symbol (default: '').

### Methods
- `dict()`: Returns dataclass values as a dictionary.
- `nonDefaults()`: Returns fields that differ from default values as a dictionary.
- `tuple()`: Returns dataclass values as a tuple.
- `update(*srcObjs, **kwargs)`: Updates fields from source objects or keyword arguments.
```

--------------------------------

### Request WSH Event Data - Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Requests Watchlist & Scanner (WSH) event data. This function is part of the IB API client and requires a request ID and WshEventData object. Conditional parameters are added based on server version.

```python
def reqWshEventData(self, reqId, data: WshEventData):
        fields = [102, reqId, data.conId]
        if self.serverVersion() >= 171:
            fields += [
                data.filter,
                data.fillWatchlist,
                data.fillPortfolio,
                data.fillCompetitors,
            ]
        if self.serverVersion() >= 173:
            fields += [data.startDate, data.endDate, data.totalLimit]
        self.send(*fields, makeEmpty=False)
```

--------------------------------

### Process Historical Data (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Appends historical bar data to the results list for a given request ID. It parses the date string from the BarData object into a datetime object before appending.

```python
def historicalData(self, reqId: int, bar: BarData):
        results = self._results.get(reqId)
        if results is not None:
            bar.date = parseIBDatetime(bar.date)  # type: ignore
            results.append(bar)
```

--------------------------------

### Dataclass Utility Methods in Python

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Common utility methods available on contract objects to manipulate data, including exporting to dict/tuple, filtering non-default values, and updating fields.

```python
# Convert to dict or tuple
data_dict = contract.dict()
data_tuple = contract.tuple()

# Get fields that differ from default values
changed_fields = contract.nonDefaults()

# Update contract fields from other objects or kwargs
contract.update(other_contract, symbol='NEW_SYM')
```

--------------------------------

### Aggregate Ticks into Bars

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Methods for aggregating raw tick data into structured bars based on time intervals, tick counts, or volume thresholds. These methods emit completed Bar objects and maintain a history in a BarList.

```python
from ib_async.ticker import TimeBars, TickBars, VolumeBars

# Time-based aggregation
time_bars = TimeBars(timer=my_timer_event)

# Tick-based aggregation
tick_bars = TickBars(count=100)

# Volume-based aggregation
volume_bars = VolumeBars(volume=1000)
```

--------------------------------

### OrderStateNumeric

Source: https://ib-api-reloaded.github.io/ib_async/api.html

A specialized version of OrderState focusing on numeric values for margin and equity calculations.

```APIDOC
## OrderStateNumeric

### Description
Represents the numeric aspects of an order's state, primarily focusing on margin and equity calculations before and after the order execution. It provides methods for data conversion and updates.

### Properties
- `initMarginBefore` (float): Initial margin requirement before the order.
- `maintMarginBefore` (float): Maintenance margin requirement before the order.
- `equityWithLoanBefore` (float): Equity with loan before the order.
- `initMarginChange` (float): Change in initial margin.
- `maintMarginChange` (float): Change in maintenance margin.
- `equityWithLoanChange` (float): Change in equity with loan.
- `initMarginAfter` (float): Initial margin requirement after the order.
- `maintMarginAfter` (float): Maintenance margin requirement after the order.
- `equityWithLoanAfter` (float): Equity with loan after the order.

### Methods
- `dict()`: Converts the order state numeric object to a dictionary.
- `nonDefaults()`: Returns a dictionary of non-default values.
- `tuple()`: Converts the order state numeric object to a tuple.
- `update(**kwargs)`: Updates the order state numeric object with new values.
```

--------------------------------

### OrderCondition Base Class

Source: https://ib-api-reloaded.github.io/ib_async/api.html

The base class for all order conditions. It provides common methods for converting condition data to dictionaries or tuples, and for updating condition fields.

```APIDOC
## OrderCondition

### Description
Base class for order conditions. Provides methods for data conversion and updates.

### Methods
- `dict()`: Returns dataclass values as a dictionary.
- `nonDefaults()`: Returns fields that differ from default values as a dictionary.
- `tuple()`: Returns dataclass values as a tuple.
- `update(*srcObjs, **kwargs)`: Updates fields from source objects or keyword arguments.
```

--------------------------------

### Update Market Depth (L2) (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Updates the Level 2 market depth data for a given ticker. It handles insert, update, and delete operations on bids and asks, maintaining the order book. The function updates internal dictionaries (`domBidsDict`, `domAsksDict`) and then converts the values into lists for user consumption.

```python
def updateMktDepthL2(
        self,
        reqId: int,
        position: int,
        marketMaker: str,
        operation: int,
        side: int,
        price: float,
        size: float,
        isSmartDepth: bool = False,
    ):
        # operation: 0 = insert, 1 = update, 2 = delete
        # side: 0 = ask, 1 = bid
        ticker = self.reqId2Ticker[reqId]

        # 'dom' is a dict so we can address position updates directly
        dom = ticker.domBidsDict if side else ticker.domAsksDict

        if operation in {0, 1}:
            # '0' is INSERT NEW
            # '1' is UPDATE EXISTING
            # We are using the same operation for "insert or overwrite" directly.
            dom[position] = DOMLevel(price, size, marketMaker)
        elif operation == 2:
            # '2' is DELETE EXISTING
            size = 0
            try:
                level = dom.pop(position)
                price = level.price
            except Exception as _: 
                # invalid position requested for removal, so ignore the request
                pass

        # To retain the original API structure, we convert all sorted dict
        # values into lists for users to consume.
        # Users can also read ticker.domBidsDict or ticker.domAsksDict directly.
        values = list(dom.values())
        if side:
            # Update BID for users
            ticker.domBids = values
        else:
            # Update ASK for users
            ticker.domAsks = values
```

--------------------------------

### PercentChangeCondition Dataclass

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Defines the PercentChangeCondition dataclass with its fields and associated methods.

```APIDOC
## `ib_async.order.PercentChangeCondition`

### Description
Represents a condition based on percentage change, used in order management.

### Fields

- **condType** (`int`) - Default: 7 - The type of condition.
- **conjunction** (`str`) - Default: 'a' - The conjunction used for the condition.
- **isMore** (`bool`) - Default: True - Specifies if the condition is 'greater than'.
- **changePercent** (`float`) - Default: 0.0 - The percentage change threshold.
- **conId** (`int`) - Default: 0 - The contract identifier.
- **exch** (`str`) - Default: '' - The exchange identifier.

### Methods

#### `dict()`
- **Description**: Returns dataclass values as a dictionary. This is a non-recursive variant of `dataclasses.asdict`.
- **Return Type**: `dict`

#### `nonDefaults()`
- **Description**: For a dataclass instance, gets the fields that are different from the default values and returns them as a dictionary.
- **Return Type**: `dict`[`str`, `Any`]

#### `tuple()`
- **Description**: Returns dataclass values as a tuple. This is a non-recursive variant of `dataclasses.astuple`.
- **Return Type**: `tuple`[`Any`, `...`]

#### `update(_* srcObjs_, _** kwargs_)`
- **Description**: Updates fields of the given dataclass object from zero or more dataclass source objects and/or from keyword arguments.
- **Return Type**: `object`
```

--------------------------------

### Midpoint Tick Emission (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ticker.html

A specialized Tickfilter that emits midpoint ticks. It processes the ticker event and emits the time and midpoint price, with a size of 0. This is used for specific midpoint-related data streams.

```python
class Midpoints(Tickfilter):
    __slots__ = ()



    def on_source(self, ticker):
        if ticker.ticks:
            self.emit(ticker.time, ticker.midpoint(), 0)
```

--------------------------------

### Cancel Order - Python

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Cancels an existing order and returns the associated `Trade` object. An optional `manualCancelOrderTime` can be provided for audit trail purposes.

```python
ib.cancelOrder(order, manualCancelOrderTime='')
```

--------------------------------

### MarginCondition

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Defines a condition based on the margin percentage.

```APIDOC
## MarginCondition

### Description
Represents an order condition based on the margin percentage. It allows setting a margin percentage threshold and specifying the logical conjunction.

### Properties
- `condType` (str): The type of condition (e.g., 'Margin').
- `conjunction` (str): The logical conjunction ('AND' or 'OR') used with other conditions.
- `isMore` (bool): True if the condition is 'greater than', False if 'less than'.
- `percent` (float): The margin percentage threshold.

### Methods
- `dict()`: Converts the margin condition object to a dictionary.
- `nonDefaults()`: Returns a dictionary of non-default values.
- `tuple()`: Converts the margin condition object to a tuple.
- `update(**kwargs)`: Updates the margin condition object with new values.
```

--------------------------------

### Track Trade Lifecycle and Events

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/order.html

The Trade class acts as a container for order details, status, and execution fills. It supports an event-driven architecture to notify listeners of status changes, fills, and commission reports.

```python
@dataclass
class Trade:
    contract: Contract = field(default_factory=Contract)
    order: Order = field(default_factory=Order)
    orderStatus: OrderStatus = field(default_factory=OrderStatus)
    fills: list[Fill] = field(default_factory=list)
    log: list[TradeLogEntry] = field(default_factory=list)
    advancedError: str = ""
```

--------------------------------

### Dataclass for Family Code Information

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/objects.html

Represents a family code, linking an account ID with its corresponding family code string. This is used for account management and grouping.

```python
from dataclasses import dataclass


[docs]
@dataclass(slots=True, frozen=True)
class FamilyCode:
    accountID: str
    familyCodeStr: str
```

--------------------------------

### Custom List for Real-Time Bar Data

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/objects.html

A specialized list for `RealTimeBar` objects that preserves request parameters and includes an `updateEvent`. This is designed for handling streaming real-time bar data.

```python
from dataclasses import dataclass
from typing import Any, List
from ib_insync import Contract, TagValue
from ib_insync.ticker import RealTimeBar
from ib_insync.event import Event


[docs]
class RealTimeBarList(list[RealTimeBar]):
    """
    List of :class:`.RealTimeBar` that also stores all request parameters.

    Events:

        * ``updateEvent``
          (bars: :class:`.RealTimeBarList`, hasNewBar: bool)
    """

    reqId: int
    contract: Contract
    barSize: int
    whatToShow: str
    useRTH: bool
    realTimeBarsOptions: list[TagValue]

    def __init__(self, *args):
        super().__init__(*args)
        self.updateEvent = Event("updateEvent")

    def __eq__(self, other):
        return self is other
```

--------------------------------

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