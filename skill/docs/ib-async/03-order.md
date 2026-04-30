  [index.html](IBKR TWS API) -> 
  [03-order.md](Order Module) -> 

 Order Module


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

---

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

---

### Connect to IB API Async

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously establishes a connection to the IB API. Allows configuration of host, port, client ID, timeout, and other connection parameters.

```python
_async _connectAsync(_host='127.0.0.1'_ , _port=7497_ , _clientId=1_ , _timeout=4_ , _readonly=False_ , _account=''_ , _raiseSyncErrors=False_ , _fetchFields= <StartupFetch.POSITIONS|ORDERS_OPEN|ORDERS_COMPLETE|ACCOUNT_UPDATES|SUB_ACCOUNT_UPDATES|EXECUTIONS: 63>_)
```

---

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

---

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

---

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

---

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

---

### Get or Create Asyncio Event Loop

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Use this function in synchronous contexts or when the execution context is unknown. It attempts to retrieve the current event loop, falls back to the thread's policy, or creates a new one if necessary. Avoid using this for performance-critical async code paths; prefer asyncio.get_running_loop() directly. This function does not cache the loop to prevent stale loop issues.

```python
ib_async.util.startLoop()
```

---

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

---

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

---

### Create Contract from Keyword Arguments

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Use the general `Contract` constructor with keyword arguments to define any contract. This method is flexible when specific contract types are not needed or when all parameters are known.

```python
Contract(_secType=''_ , _conId=0_ , _symbol=''_ , _lastTradeDateOrContractMonth=''_ , _strike=0.0_ , _right=''_ , _multiplier=''_ , _exchange=''_ , _primaryExchange=''_ , _currency=''_ , _localSymbol=''_ , _tradingClass=''_ , _includeExpired=False_ , _secIdType=''_ , _secId=''_ , _description=''_ , _issuerId=''_ , _comboLegsDescrip=''_ , _comboLegs= <factory>_, _deltaNeutralContract=None_)
```

---

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

---

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

---

### BracketOrder Initialization

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents a bracket order, which includes a parent order along with take profit and stop loss orders.

```python
_class _ib_async.order.BracketOrder(_parent_ , _takeProfit_ , _stopLoss_)[source]
```

---

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

---

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

---

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

---

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

---

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

---

### Trade Class Initialization and Properties

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Tracks an order, its status, and all its fills. It includes properties for contract, order, status, fills, log, and advanced error messages. Events like statusEvent, modifyEvent, and fillEvent are also defined.

```python
_class _ib_async.order.Trade(_contract= <factory>_, _order= <factory>_, _orderStatus= <factory>_, _fills= <factory>_, _log= <factory>_, _advancedError=''_)[source]
```

---

### OrderComboLeg Initialization

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents an order combo leg. The price attribute is a float or Decimal.

```python
_class _ib_async.order.OrderComboLeg(_price =1.7976931348623157e+308_)[source]
```

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

### Client Monitoring of Other Clients' Orders

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Clients with a master clientId can now monitor orders and trades of other clients.

```python
master clientId
```

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

### Place or Modify Order

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Place a new order or modify an existing one. Returns a Trade object that is updated with status changes and fills.

```python
ib.placeOrder(_contract_ , _order_)
```

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

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
