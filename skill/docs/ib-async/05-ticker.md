[IBKR TWS API](../../SKILL.md) · [ib_async Reference](index.md) · [Ticker Module](05-ticker.md)


# Ticker Module

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

---

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

---

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

---

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

---

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

---

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

---

### Synchronous vs. Asynchronous Data Fetching

Source: https://ib-api-reloaded.github.io/ib_async/readme.html

Illustrates the difference between blocking synchronous calls and non-blocking asynchronous calls for fetching historical data.

```python
# Synchronous (blocks until complete)
bars = ib.reqHistoricalData(contract, ...)

# Asynchronous (yields to event loop)
bars = await ib.reqHistoricalDataAsync(contract, ...)

```

---

### Realtime Bar Wrapper Fix

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

A fix has been implemented for the `realtimeBar` wrapper.

```python
realtimeBar wrapper
```

---

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

---

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

---

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

---

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

---

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

---

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

---

### Historical Ticks and Realtime Bars Time in UTC

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Historical ticks and real-time bars now return timestamps in UTC.

```python
historical ticks
```

```python
realtime bars
```

---

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

---

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

---

### Process Ticker for Midpoints

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ticker.html

Processes ticker data to emit midpoint ticks. Emits the time, midpoint price, and a size of 0 if ticks are present.

```python
def on_source(self, ticker):
        if ticker.ticks:
            self.emit(ticker.time, ticker.midpoint(), 0)
```

---

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

---

### Synchronous vs. Asynchronous Data Request

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Illustrates the difference between synchronous and asynchronous methods for requesting historical data. The synchronous method blocks until completion, while the asynchronous method yields to the event loop.

```python
# Synchronous (blocks until complete)
bars = ib.reqHistoricalData(contract, ...)

# Asynchronous (yields to event loop)
bars = await ib.reqHistoricalDataAsync(contract, ...)
```

---

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

---

### Request Historical Data Async

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously retrieves historical market data for a contract. Allows specifying date/time ranges, bar size, and data type.

```python
_async _reqHistoricalDataAsync(_contract_ , _endDateTime_ , _durationStr_ , _barSizeSetting_ , _whatToShow_ , _useRTH_ , _formatDate =1_, _keepUpToDate =False_, _chartOptions =[]_, _timeout =60_)
```

---

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

---

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

---

### Emit Bid and Ask Ticks

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ticker.html

Filters and emits both bid and ask ticks from a ticker event. Combines codes for bid and ask tick types.

```python
def bidasks(self) -> "Tickfilter":
        """Emit bid and ask ticks."""
        return Tickfilter((0, 1, 66, 69, 2, 3, 67, 70), self)
```
