[IBKR TWS API](../../SKILL.md) · [TWS API Documentation](index.md) · [22 Market Data: Live](22-live-md.md)


## Market Data: Live

### Live Data Limitations

For all data, besides [Delayed Watchlist Data](../undefined/index.md), a paid data subscription is required to receive market data through the API. See the [Market Data Subscriptions](/campus/ibkr-api-page/market-data-subscriptions/) page for more information.

*   Live market data and historical bars are currently not available from the API for the exchange **OSE**. Only 15 minute delayed streaming data will be available for this exchange.
    
*   Some [Available Tick Types](../undefined/index.md) may not be provided due to the contract details, the time that you run the code…… ,etc. To verify whether the specific Available Tick Type is provided, it is suggested to manually check the data in TWS.
*   Different [Available Tick Types](../undefined/index.md) have different updating frequency.

The bid, ask, and last size quotes are displayed in shares instead of lots.

API users have the option to configure the TWS API to work in compatibility mode for older programs, but we recommend migrating to “quotes in shares” at your earliest convenience.

To display quotes as lots, from the Global Configuration > API > Settings page, check “Bypass US Stocks market data in shares warning for API orders.”

![Highlights the "Bypass US Stocks market data in shares warning for API Orders" under API Precautions.](./images/bypass_usstk_api_shares-700x398.png)

### 5 Second Bars

Real time and historical data functionality is combined through the EClient.reqRealTimeBars request. reqRealTimeBars will create an active subscription that will return a single bar in real time every five seconds that has the OHLC values over that period. reqRealTimeBars can only be used with a bar size of 5 seconds.

**Important:** real time bars subscriptions combine the limitations of both, top and historical market data. Make sure you observe Market Data Lines and [Pacing Violations for Small Bars (30 secs or less)](https://www.interactivebrokers.com/campus/ibkr-api-page/trader-workstation-api/#historical-pacing-limitations). For example, no more than 60 **\*new\*** requests for real time bars can be made in 10 minutes, and the total number of active active subscriptions of all types cannot exceed the maximum allowed market data lines for the user.

### Request Real Time Bars

#### 22.02.01 Request Real Time Bars

**tickerId:** int. Request identifier used to track data.

**contract:** Contract. The Contract object for which the depth is being requested

**barSize:** int. Currently being ignored

**whatToShow:** String. The nature of the data being retrieved:  
Available Values: TRADES, MIDPOINT, BID, ASK

**useRTH:** int. Set to 0 to obtain the data which was also generated outside of the Regular Trading Hours, set to 1 to obtain only the RTH data  
)

**realTimeBarOptions**: List<TagValue>. Internal use only.

Requests real time bars.

Only 5 seconds bars are provided. This request is subject to the same pacing as any historical data request: no more than 60 API queries in more than 600 seconds.

Real time bars subscriptions are also included in the calculation of the number of Level 1 market data subscriptions allowed in an account.

```python
self.reqRealTimeBars(3001, contract, 5, "MIDPOINT", 0, [])
```

Code example:

```python
from ibapi.client import *
from ibapi.wrapper import *
from ibapi.contract import Contract
import time

class TradeApp(EWrapper, EClient): 
    def __init__(self): 
        EClient.__init__(self, self) 

    def realtimeBar(self, reqId: TickerId, time:int, open_: float, high: float, low: float, close: float, volume: Decimal, wap: Decimal, count: int):
        print("RealTimeBar. TickerId:", reqId, RealTimeBar(time, -1, open_, high, low, close, volume, wap, count))
    
app = TradeApp()      
app.connect("127.0.0.1", 7496, clientId=1)

contract = Contract() 
contract.symbol = "AAPL" 
contract.secType = "STK" 
contract.currency = "USD" 
contract.exchange = "SMART" 

app.reqRealTimeBars(3001, contract, 5, "TRADES", 0, [])

app.run()
```

### Receive Real Time Bars

#### 22.02.02 Receive Real Time Bars

**reqId:** int. Request identifier used to track data.

**time:** long. The bar’s start date and time (Epoch/Unix time)

**open:** double. The bar’s open point

**high:** double. The bar’s high point

**low:** double. The bar’s low point

**close:** double. The bar’s closing point

**volume:** decimal. The bar’s traded volume (only returned for TRADES data)

**WAP:** decimal. The bar’s Weighted Average Price rounded to minimum increment (only available for TRADES).

**count:** int. The number of trades during the bar’s timespan (only available for TRADES).  
)

Receives the real time 5 second bars.

```python
def realtimeBar(self, reqId: TickerId, time:int, open_: float, high: float, low: float, close: float, volume: Decimal, wap: Decimal, count: int):
	print("RealTimeBar. TickerId:", reqId, RealTimeBar(time, -1, open_, high, low, close, volume, wap, count))
```

### Cancel Real Time Bars

#### 22.02.03 Cancel Real Time Bars

**tickerId:** int. Request identifier used to track data.  
)

Cancels Real Time Bars’ subscription.

```python
self.cancelRealTimeBars(3001)
```

### Component Exchanges

A single data request from the API can receive aggregate quotes from multiple exchanges. The tick types ‘bidExch’ (tick type 32), ‘askExch’ (tick type 33), ‘lastExch’ (tick type 84) are used to identify the source of a quote. To preserve bandwidth, the data returned to these tick types consists of a sequence of capital letters rather than a long list of exchange names for every returned exchange name field. To find the full exchange name corresponding to a single letter code returned in tick types 32, 33, or 84, and API function IBApi::[EClient::reqSmartComponents](22.08.07-exchange-component-mapping) is available. Note: This function can only be used when the exchange is open.

Different IB contracts have a different exchange map containing the set of exchanges on which they trade. Each exchange map has a different code, such as “a6” or “a9”. This exchange mapping code is returned to [EWrapper.tickReqParams](22.08.07-exchange-component-mapping) immediately after a market data request is made by a user with market data subscriptions. To find a particular map of single letter codes to full exchange names, the function reqSmartComponents is invoked with the exchange mapping code returned to tickReqParams.

For instance, a market data request for the IBKR US contract may return the exchange mapping identifier “a6” to [EWrapper.tickReqParams](22.08.07-exchange-component-mapping) . Invoking the function [EClient.reqSmartComponents](22.08.07-exchange-component-mapping) with the symbol “a9” will reveal the list of exchanges offering market data for the IBKR US contract, and their single letter codes. The code for “ARCA” may be “P”. In that case if “P” is returned to the exchange tick types, that would indicate the quote was provided by ARCA.

### Request Component Exchanges

#### 22.03.01 Request Component Exchanges

**reqId:** int. Request identifier used to track data.

**bboExchange:** String. Mapping identifier received from EWrapper.tickReqParams  
)

Returns the mapping of single letter codes to exchange names given the mapping identifier.

```python
self.reqSmartComponents(1018, "a6")
```

### Receive Component Exchanges

#### 22.03.02 Receive Component Exchanges

**reqId:** int. Request identifier used to track data.

**smartComponentMap:** SmartComponentMap. Unique object containing a map of all key-value pairs  
)

Containing a bit number to exchange + exchange abbreviation dictionary. All IDs can be initially retrieved using [reqTickParams](22.08.07-exchange-component-mapping).

```python
def smartComponents(self, reqId:int, smartComponentMap:SmartComponentMap):
	print("SmartComponents:")
	for smartComponent in smartComponentMap:
		print("SmartComponent.", smartComponent)
```

### Market Depth Exchanges

To check which exchanges offer deep book data, the function EClient.reqMktDepthExchanges can be invoked. It will return a list of exchanges from where market depth is available if the user has the appropriate market data subscription.

API ‘Exchange’ fields for which a market depth request would return market maker information and result in a callback to EWrapper.updateMktDepthL2 will be indicated in the results from the EWrapper.mktDepthExchanges field by a ‘True’ value in the ‘isL2’ field:

### Requesting Market Depth Exchanges

#### 22.04.01 Requesting Market Depth Exchanges

Requests venues for which market data is returned to updateMktDepthL2 (those with market makers).

```python
self.reqMktDepthExchanges()
```

### Receive Market Depth Exchanges

#### 22.04.02 Receive Market Depth Exchanges

**depthMktDataDescriptions:** DepthMktDataDescription\[\]. A list containing all available exchanges offering market depth.  
)

Called when receives Depth Market Data Descriptions.

```python
def mktDepthExchanges(self, depthMktDataDescriptions:ListOfDepthExchanges):
	print("MktDepthExchanges:")
	for desc in depthMktDataDescriptions:
		print("DepthMktDataDescription.", desc)
```

### Market Depth (L2)

Market depth data, also known as level II, represents an instrument’s order book. Via the TWS API it is possible to obtain this information with the [EClient.reqMarketDepth](../undefined/index.md) function.

Unlike [Top Market Data (Level I)](../undefined/index.md), market depth data is sent without sampling or filtering, however we cannot guarantee that every price quoted for a particular security will be displayed. In particular, odd lot orders are not included.

It is possible to Smart-route a [EClient.reqMarketDepth](../undefined/index.md) request to receive aggregated data from all available exchanges.

An integral part of processing the incoming data is monitoring [EWrapper.error](../undefined/index.md) for message 317 “Market depth data has been RESET. Please empty deep book contents before applying any new entries.” and handling it appropriately, otherwise the update process would be corrupted.

Market Depth is not support for Calendar Spreads or Combos.

### Request Market Depth

**Important:** Please note that the languages use different method names for requesting market depth.

The C# and Visual Basic APIs use **reqMarketDepth()**.

The Python, Java, and C++ APIs use **reqMktDepth()**.

#### 22.05.01 Request Market Depth

**tickerId:** int. Request identifier used to track data.

**contract:** Contract. The Contract for which the depth is being requested.

**numRows:** int. The number of rows on each side of the order book.

**isSmartDepth:** bool. Flag indicates that this is a Smart-routed market depth request. Supplying true will return data identical to the [TWS Book Trader](https://www.ibkrguides.com/traderworkstation/booktrader.htm) while False returns direct routed data similar to the [TWS Market Depth tool](https://www.ibkrguides.com/traderworkstation/level-ii-market-depth.htm).

**mktDepthOptions:** List. Internal use only. Leave an empty array or None type.  
)

Requests the contract’s market depth (order book).

```python
self.reqMktDepth(2001, contract, 5, False, [])
```

### Receive Market Depth

#### 22.05.02 Receive Market Depth

**tickerId:** int. Request identifier used to track data.

**position:** int. The order book’s row being updated

**operation:** int. Indicates a change in the row’s value.:

*   0 = insert (insert new price into the row)·
*   1 = update (update the existing order in the row)·
*   2 = delete (delete the existing order at the row).

**side:** int. 0 for ask, 1 for bid

**price:** double. The order’s price

**size:** decimal. The order’s size  
)

Returns the order book. Used for direct routed requests only.  
 

```python
def updateMktDepth(self, reqId: TickerId, position: int, operation: int, side: int, price: float, size: Decimal):
		print("UpdateMarketDepth. ReqId:", reqId, "Position:", position, "Operation:", operation, "Side:", side, "Price:", floatMaxString(price), "Size:", decimalMaxString(size))
```

#### EWrapper.updateMktDepthL2 (

**tickerId:** int. Request identifier used to track data.

**position:** int. The order book’s row being updated.

**marketMaker:** String. The exchange holding the order if isSmartDepth is True, otherwise the MPID of the market maker.

**operation:** int. Indicates a change in the row’s value.:

*   0 = insert (insert new price into the row)·
*   1 = update (update the existing order in the row)·
*   2 = delete (delete the existing order at the row).

**side:** int. 0 for ask, 1 for bid

**price:** double. The order’s price

**size:** decimal. The order’s size

**isSmartDepth:** bool. Flag indicating if this is smart depth response (True) or the MPID of the market maker.  
)

Returns the order book.  
 

```python
def updateMktDepthL2(self, reqId: TickerId, position: int, marketMaker: str, operation: int, side: int, price: float, size: Decimal, isSmartDepth: bool):
	print("UpdateMarketDepthL2. ReqId:", reqId, "Position:", position, "MarketMaker:", marketMaker, "Operation:", operation, "Side:", side, "Price:", floatMaxString(price), "Size:", decimalMaxString(size), "isSmartDepth:", isSmartDepth)
```

### Cancel Market Depth

#### 22.05.03 Cancel Market Depth

**tickerId:** int. Request identifier used to track data.

**isSmartDepth:** bool. Flag indicates that this is smart depth request.

)

Cancel’s market depth’s request.

```python
self.cancelMktDepth(2001, False)
```

### Market Indicators

Most indicators made available within the Trader Workstation are unavailable in the API. For more information on data not being available in via API, see [here](/campus/ibkr-api-page/market-data-subscriptions/#tws-vs-api).

Some indicators are an exception to this rule. such as:

*   NYSE Advance-Decline
*   NYSE Volume
*   NYSE TICK Index
*   NYSE Trading (TRIN or Arms) Index

### NYSE Advance-Decline

The Advanced-Decline index must be requested with [EClient.reqMktData()](../undefined/index.md) where:

*   Advancing values correlate to the “BID” and “BID\_SIZE”.
*   Declining values correlate to the “ASK” and “ASK\_SIZE”.

```generic
Symbol = "AD-NYSE"
SecType = "IND"
Exchange = "NYSE"
Currency = "USD"
```

### NYSE Volume Index

The Volume index must be requested with [EClient.reqMktData()](../undefined/index.md) where:

*   Bid Price correlates to “UP Volume”
*   Ask Price correlates to “Down Volume”
*   Bid Size correlates to “Unchanged Volume”
*   Ask Size will always return as 1.

```generic
Symbol = "VOL-NYSE"
SecType = "IND"
Exchange = "NYSE"
Currency = "USD"
```

### NYSE Trading Index (TRIN)

The Trade index must be requested with [EClient.reqMktData()](../undefined/index.md) where:

*   Last Price correlates to calculation of (Advancing Issues / Declining Issues) / (Advancing Volume / Declining Volume)
*   Close price correlates to the final calculation of the value from the previous day.
*   Bid, Ask, and all Size data that returns will come as -1 or 0. These values are passed automatically and are non-representative.

```generic
Symbol = "TRIN-NYSE"
SecType = "IND"
Exchange = "NYSE"
Currency = "USD"
```

### NYSE TICK Index

The TICK index must be requested with [EClient.reqMktData()](../undefined/index.md) where:

*   Last Price correlates to the calculation of rising stocks minus declining stocks.
*   Bid, Ask, Close, and all Size data that returns will come as -1 or 0. These values are passed automatically and are non-representative.

```generic
Symbol = "TICK-NYSE"
SecType = "IND"
Exchange = "NYSE"
Currency = "USD"
```

### Option Greeks

The option greek values- delta, gamma, theta, vega- are returned by default following a reqMktData() request for the option. See Available Tick Types

Tick types “Bid Option Computation” (#10), “Ask Option Computation” (#11), “Last Option Computation” (#12), and “Model Option Computation” (#13) return all Greeks (delta, gamma, vega, theta), the underlying price and the stock and option reference price when requested.

MODEL\_OPTION\_COMPUTATION also returns model implied volatility.

Note that to receive live greek values it is necessary to have market data subscriptions for both the option and the underlying contract.

The implied volatility for an option given its price and the price of the underlying can be calculated with the function EClient.calculateImpliedVolatility.

Alternatively, given the price of the underlying and an implied volatility it is possible to calculate the option price using the function EClient.calculateOptionPrice.

After the request, the option specific information will be delivered via the EWrapper.tickOptionComputation method.

### Request Options Greeks

#### 22.07.01 Request Options Greeks

**reqId:** int. Request identifier for tracking data.

**contract:** Contract. Contract object used for specifying an instrument.

**genericTickList:** String. Comma separated ids of the available generic ticks.

**snapshot:** bool. Set to True for snapshot data with a relevant subscription or False for live data.

**regulatorySnapshot:** bool. Set to True for a paid, regulatory snapshot or False for live data.

**mktDataOptions:** List<TagValue>. Internal use only.  
)

Greeks are requested automatically when pulling market data for an Options contract.  
Users that do not have a valid [Market Data Subscription](/campus/ibkr-api-page/market-data-subscriptions/#popular-md-subscriptions) for the underlying contract will receive an error that Market Data Is Not Subscribed. This error can be ignored if Greeks are not wanted.  
 

```python
self.reqMktData(reqId, OptionContract, "", False, False, [])
```

### Calculating option prices

#### 22.07.02 Calculating option prices

**reqId:** int. Request identifier used to track data.

**contract:** Contract. The Contract object for which the depth is being requested

**volatility:** double. Hypothetical volatility.

**underPrice:** double. Hypothetical option’s underlying price.

**optionPriceOptions:** List<TagValue>. Internal use only. Send an empty tag value list.  
)

Calculates an option’s price based on the provided volatility and its underlying’s price.

```python
self.calculateOptionPrice(5002, OptionContract, 0.6, 55, [])
```

### Calculating historical volatility

#### 22.07.03 Calculating historical volatility

**reqId:** int. Request identifier used to track data.

**contract:** Contract. The Contract object for which the depth is being requested

**optionPrice:** double. Hypothetical option price.

**underPrice:** double. Hypothetical option’s underlying price.

**impliedVolatilityOptions:** List<TagValue>. Internal use only. Send an empty tag value list.  
)

Calculate the volatility for an option. Request the calculation of the implied volatility based on hypothetical option and its underlying prices.

```python
self.calculateImpliedVolatility(5001, OptionContract, 0.5, 55, [])
```

### Receiving Options Data

#### 22.07.04 Receiving Options Data

**tickerId** the request’s unique identifier.

**field:** int. Specifies the type of option computation.  
Pass the field value into  
TickType.getField(int tickType) to retrieve the field description. For example, a field value of 13 will map to modelOptComp, etc. 10 = Bid 11 = Ask 12 = Last

**tickAttrib:** int. 0 – return based, 1- price based.

**impliedVolatility:** double. the implied volatility calculated by the TWS option modeler, using the specified tick type value.

**delta:** double. The option delta value.

**optPrice:** double. The option price.

**pvDividend:** double. The present value of dividends expected on the option’s underlying.

**gamma:** double. The option gamma value.

**vega:** double. The option vega value.

**theta:** double. The option theta value.

**undPrice:** double. The price of the underlying.  
)

Receives option specific market data. This method is called when the market in an option or its underlier moves. TWS’s option model volatilities, prices, and deltas, along with the present value of dividends expected on that options underlier are received.

```python
def tickOptionComputation(self, reqId: TickerId, tickType: TickType, tickAttrib: int, impliedVol: float, delta: float, optPrice: float, pvDividend: float, gamma: float, vega: float, theta: float, undPrice: float):
	print("TickOptionComputation. TickerId:", reqId, "TickType:", tickType, "TickAttrib:", intMaxString(tickAttrib), "ImpliedVolatility:", floatMaxString(impliedVol), "Delta:", floatMaxString(delta), "OptionPrice:", floatMaxString(optPrice), "pvDividend:", floatMaxString(pvDividend), "Gamma: ", floatMaxString(gamma), "Vega:", floatMaxString(vega), "Theta:", floatMaxString(theta), "UnderlyingPrice:", floatMaxString(undPrice))
```

### Top of Book (L1)

Streaming market data values corresponding to data shown in TWS watchlists is available via the EClient.reqMktData. This data is not tick-by-tick but consists of aggregate snapshots taken several times per second. A set of ‘default’ tick types are returned by default from a call to EClient.reqMktData, and additional tick types are available by specifying the corresponding generic tick type in the market data request. Including the generic tick types many, but not all, types of data are available that can be displayed in TWS watchlists by adding additional columns.

### Request Watchlist Data

#### 22.08.01 Request Watchlist Data

**reqId:** int. Request identifier for tracking data.

**contract:** Contract. Contract object used for specifying an instrument.

**[genericTickList](22.08.03-generic-tick-types):** String. Comma separated ids of the available generic ticks.

[**snapshot:**](22.08.04-streaming-data-snapshot) bool. Used to retrieve a single snapshot of data for those with an existing market data subscirption.

[**regulatorySnapshot:**](22.08.05-regulatory-snapshot) bool. Used to retrieve a single snapshot of paid data. Each snapshot costs $0.01.  
See [here](/campus/ibkr-api-page/market-data-subscriptions/#reg-snapshot) for more information about Regulatory Snapshots and Market Data.

**mktDataOptions:** List<TagValue>. Internal use only.  
)

Requests real time market data. Returns market data for an instrument either in real time or [10-15 minutes delayed data.](https://www.interactivebrokers.com/campus/ibkr-api-page/trader-workstation-api/#delayed-market-data)

```python
self.reqMktData(reqId, contract, "", False, False, [])
```

### Market Data Update Frequency

Watchlist market data at Interactive Brokers is derived from time-based snapshot intervals which vary by product and region. This means that a given tick will only update as frequently as its interval allows. See the table for more details on product specifics.

| Product | Frequency |
| --- | --- |
| United States |
| Stocks, Futures, Bonds, Indices | 250ms |
| Options | 100ms |
| Forex | 5ms |
| Europe |
| All Products | 250ms |
| Asia |
| All Products | 250ms |

### Generic Tick Types

The most common tick types are delivered automatically after a successful market data request. There are however other tick types available by explicit request: the generic tick types. When invoking IBApi.EClient.reqMktData, specific generic ticks can be requested via the genericTickList parameter of the function:

See the [Available Tick Types](22.09-available-tick-types) section for more information on generic ticks.

### Streaming Data Snapshots

With an exchange market data subscription, such as Network A (NYSE), Network B(ARCA), or Network C(NASDAQ) for US stocks, it is possible to request a snapshot of the current state of the market once instead of requesting a stream of updates continuously as market values change. By invoking the EClient.reqMktData function passing in true for the snapshot parameter, the client application will receive the currently available market data once before a EWrapper.tickSnapshotEnd event is sent 11 seconds later. Snapshot requests can only be made for the default tick types; no generic ticks can be specified. It is important to note that a snapshot request will only return available data over the 11 second span; in some cases values may not be returned for all tick types.

#### 22.08.04 Streaming Data Snapshots

**tickerId:** int. Request identifier used to track data.  
)

When requesting market data snapshots, this market will indicate the snapshot reception is finished. Expected to occur 11 seconds after beginning of request.

```python
def tickSnapshotEnd(self, reqId: int):
  print("TickSnapshotEnd. TickerId:", reqId)
```

### Regulatory Snapshots

The fifth argument to reqMktData specifies a regulatory snapshot request to US stocks and options.

For stocks, there are individual exchange-specific market data subscriptions necessary to receive streaming quotes. For instance, for NYSE stocks this subscription is known as “Network A”, for ARCA/AMEX stocks it is called “Network B” and for NASDAQ stocks it is “Network C”. Each subscription is added a la carte and has a separate market data fee.

Alternatively, there is also a “US Securities Snapshot Bundle” subscription which does not provide streaming data but which allows for real time calculated snapshots of US market NBBO prices. By setting the 5th parameter in the function EClient::reqMktData to **True**, a regulatory snapshot request can be made from the API. The returned value is a calculation of the current market state based on data from all available exchanges.

**Important: Each regulatory snapshot made will incur a fee of 0.01 USD to the account. This applies to both live _and_ paper accounts.**. If the monthly fee for regulatory snapshots reaches the price of a particular ‘Network’ subscription, the user will automatically be subscribed to that Network subscription for continuous streaming quotes and charged the associated fee for that month. At the end of the month the subscription will be terminated. Each listing exchange will be capped independently and will not be combined across listing exchanges.

Requesting regulatory snapshots is subject to pacing limitations:

*   No more than one request per second.

The following table lists the cost and maximum allocation for regulatory snapshot quotes:

| Listed Network Feed | Price per reqSnapshot request | Pro or non-Pro | Max reqSnapshot request |
| --- | --- | --- | --- |
| NYSE (Network A/CTA) | 0.01 USD | Pro | 4500 |
| NYSE (Network A/CTA) | 0.01 USD | Non-Pro | 150 |
| AMEX (Network B/CTA) | 0.01 USD | Pro | 2300 |
| AMEX (Network B/CTA) | 0.01 USD | Non-Pro | 150 |
| NASDAQ (Network C/UTP) | 0.01 USD | Pro | 2300 |
| NASDAQ (Network C/UTP) | 0.01 USD | Non-Pro | 150 |

### Receive Live Data

**Note:** Please be aware that in the event subsequent orders are received with the same price value, but different size values, no new tickPrice value should be returned. Only an updated tickSize will denote that a new order was retrieved with the assumption the last tickPrice value will also correlate with the new size.

#### 22.08.06 Receive Live Data

**tickerId:** int. Request identifier used to track data.

**field:** int. The type of tick being received.

**value:** double. Return value corresponding to value. See Available Tick Types for more details.  
)

Returns generic data back to requester. Used for an array of tick types and is used to represent general evaluations.

```python
def tickGeneric(self, reqId: TickerId, tickType: TickType, value: float):
	print("TickGeneric. TickerId:", reqId, "TickType:", tickType, "Value:", floatMaxString(value))
```

#### EWrapper.tickPrice (

**tickerId:** int. Request identifier used to track data.

**tickType:** int. The type of the price being received (See Tick ID field in [Available Tick Types](../undefined/index.md)).

**price:** double. The monetary value for the given tick type.

**attribs:** TickAttrib. A TickAttrib object that contains price attributes such as TickAttrib::CanAutoExecute, TickAttrib::PastLimit and TickAttrib::PreOpen.  
)

Market data tick price callback. Handles all price related ticks. Every tickPrice callback is followed by a tickSize. A tickPrice value of -1 or 0 followed by a tickSize of 0 indicates there is no data for this field currently available, whereas a tickPrice with a positive tickSize indicates an active quote of 0 (typically for a combo contract).

```python
def tickPrice(self, reqId: TickerId, tickType: TickType, price: float, attrib: TickAttrib):
	print(reqId, tickType, price, attrib)
```

#### EWrapper.tickSize (

**tickerId:** int. Request identifier used to track data.

**field:** int. the type of size being received (i.e. bid size)

**size:** Decimal. the actual size. US stocks have a multiplier of 100.  
)

Market data tick size callback. Handles all size-related ticks.

```python
def tickSize(self, reqId: TickerId, tickType: TickType, size: Decimal):
	print("TickSize. TickerId:", reqId, "TickType:", tickType, "Size: ", decimalMaxString(size))
```

#### EWrapper.tickString (

**tickerId:** int. Request identifier used to track data.

**field:** int. The type of the tick being received

**value:** String. Variable containining message response.  
)

Market data callback.

**Note:** Every tickPrice is followed by a tickSize. There are also independent tickSize callbacks anytime the tickSize changes, and so there will be duplicate tickSize messages following a tickPrice.

```python
def tickString(self, reqId: TickerId, tickType: TickType, value: str):
	print("TickString. TickerId:", reqId, "Type:", tickType, "Value:", value)
```

### Exchange Component Mapping

A market data request is able to return data from multiple exchanges. After a market data request is made for an instrument covered by market data subscriptions, a message will be sent to function IBApi::EWrapper::tickReqParams with information about ‘minTick’, BBO exchange mapping, and available snapshot permissions.

The exchange mapping identifier bboExchange will be a symbol such as “a6” which can be used to decode the single letter exchange abbreviations returned to the bidExch, askExch, and lastExch fields by invoking the function IBApi::EClient::reqSmartComponents. More information about Component Exchanges.

The minTick returned to tickReqParams indicates the minimum increment in market data values returned to the API. It can differ from the minTick value in the ContractDetails class. For instance, combos will often have a minimum increment of 0.01 for market data and a minTick of 0.05 for order placement.

#### 22.08.07 Exchange Component Mapping

**tickerId:** int. Request identifier used to track data.

**minTick:** Minimum tick for the contract on the exchange.

**bboExchange:** String. Exchange offering the best bid offer.

**snapshotPermissions:** Based on the snapshot parameter in EClient.reqMktData.  
)

Displays the ticker with BBO exchange.

```python
def tickReqParams(self, tickerId:int, minTick:float, bboExchange:str, snapshotPermissions:int):
	print("TickReqParams. TickerId:", tickerId, "MinTick:", floatMaxString(minTick), "BboExchange:", bboExchange, "SnapshotPermissions:", intMaxString(snapshotPermissions))
```

### Re-Routing CFDs

IB does not provide market data for certain types of instruments, such as stock CFDs and forex CFDs. If a stock CFD or forex CFD is entered into a TWS watchlist, TWS will automatically display market data for the underlying ticker and show a ‘U’ icon next to the instrument name to indicate that the data is for the underlying instrument.

From the API, when level 1 or level 2 market data is requested for a stock CFD or a forex CFD, a callback is made to the functions EWrapper.rerouteMktDataReq or EWrapper.rerouteMktDepthReq respectively with details about the underlying instrument in IB’s database which does have market data.

#### 22.08.08 Re-Routing CFDs

**reqId:** int. Request identifier used to track data.

**conId:** int. Contract identifier of the underlying instrument which has market data.

**exchange:** int. Primary exchange of the underlying.  
)

Returns conid and exchange for CFD market data request re-route.

```python
def rerouteMktDataReq(self, reqId: int, conId: int, exchange: str):
	print("Re-route market data request. ReqId:", reqId, "ConId:", conId, "Exchange:", exchange)
```

#### EWrapper.rerouteMktDepthReq (

**reqId:** int. Request identifier used to track data.

**conId:** int. Contract identifier of the underlying instrument which has market data.

**exchange:** int. Primary exchange of the underlying.  
)

Returns the conId and exchange for an underlying contract when a request is made for level 2 data for an instrument which does not have data in IB’s database. For example stock CFDs and index CFDs.

```python
def rerouteMktDepthReq(self, reqId: int, conId: int, exchange: str):
	print("Re-route market depth request. ReqId:", reqId, "ConId:", conId, "Exchange:", exchange)
```

### Cancel Watchlist Data

#### 22.08.09 Cancel Watchlist Data

**tickerId:** int. Request identifier used to track data.  
)

Cancels a watchlist market data request.

```python
self.cancelMktData(2001)
```

### Available Tick Types

EClient.reqMktData will return data to various methods such as EWrapper.tickPrice, EWrapper.tickSize, EWrapper.tickString, etc. The values returned are dependent upon the generic tick requested and the type of data returned. The table below references which tick ID will be returned upon requesting a given generic tick.

\*RDD: These tick types are provided only when the user makes a request to [EClient.reqMarketDataType(3)](../undefined/index.md) prior to their market data request.

– : These ticks are returned by default and do not have any generic tick requirements.

| Tick Name | Description | Generic tick required | Delivery Method | Tick Id |
| --- | --- | --- | --- | --- |
| Disable Default Market Data | Disables standard market data stream and allows the TWS & API feed to prioritize other listed generic tick types. | mdoff | – | – |
| Bid Size | Number of contracts or lots offered at the bid price. | – | IBApi.EWrapper.tickSize | 0 |
| Bid Price | Highest priced bid for the contract. | – | IBApi.EWrapper.tickPrice | 1 |
| Ask Price | Lowest price offer on the contract. | – | IBApi.EWrapper.tickPrice | 2 |
| Ask Size | Number of contracts or lots offered at the ask price. | – | IBApi.EWrapper.tickSize | 3 |
| Last Price | Last price at which the contract traded (does not include some trades in RTVolume). | – | IBApi.EWrapper.tickPrice | 4 |
| Last Size | Number of contracts or lots traded at the last price. | – | IBApi.EWrapper.tickSize | 5 |
| High | High price for the day. | – | IBApi.EWrapper.tickPrice | 6 |
| Low | Low price for the day. | – | IBApi.EWrapper.tickPrice | 7 |
| Volume | Trading volume for the day for the selected contract (US Stocks volume is display as Round Lots). | – | IBApi.EWrapper.tickSize | 8 |
| Close Price | “The last available closing price for the previous day. For US Equities we use corporate action processing to get the closing price so the close price is adjusted to reflect forward and reverse splits and cash and stock dividends.” | – | IBApi.EWrapper.tickPrice | 9 |
| Bid Option Computation | Computed Greeks and implied volatility based on the underlying stock price and the option bid price. See Option Greeks | – | IBApi.EWrapper.tickOptionComputation | 10 |
| Ask Option Computation | Computed Greeks and implied volatility based on the underlying stock price and the option ask price. See Option Greeks | – | IBApi.EWrapper.tickOptionComputation | 11 |
| Last Option Computation | Computed Greeks and implied volatility based on the underlying stock price and the option last traded price. See Option Greeks | – | IBApi.EWrapper.tickOptionComputation | 12 |
| Model Option Computation | Computed Greeks and implied volatility based on the underlying stock price and the option model price. Correspond to greeks shown in TWS. See Option Greeks | – | IBApi.EWrapper.tickOptionComputation | 13 |
| Open Tick | Current session’s opening price. Before open will refer to previous day. The official opening price requires a market data subscription to the native exchange of the instrument. | – | IBApi.EWrapper.tickPrice | 14 |
| Low 13 Weeks | Lowest price for the last 13 weeks. For stocks only. | 165 | IBApi.EWrapper.tickPrice | 15 |
| High 13 Weeks | Highest price for the last 13 weeks. For stocks only. | 165 | IBApi.EWrapper.tickPrice | 16 |
| Low 26 Weeks | Lowest price for the last 26 weeks. For stocks only. | 165 | IBApi.EWrapper.tickPrice | 17 |
| High 26 Weeks | Highest price for the last 26 weeks. For stocks only. | 165 | IBApi.EWrapper.tickPrice | 18 |
| Low 52 Weeks | Lowest price for the last 52 weeks. For stocks only. | 165 | IBApi.EWrapper.tickPrice | 19 |
| High 52 Weeks | Highest price for the last 52 weeks. For stocks only. | 165 | IBApi.EWrapper.tickPrice | 20 |
| Average Volume | The average daily trading volume over 90 days. Multiplier of 100. For stocks only. | 165 | IBApi.EWrapper.tickSize | 21 |
| Open Interest | “(Deprecated not currently in use) Total number of options that are not closed.” | – | IBApi.EWrapper.tickSize | 22 |
| Option Historical Volatility | The 30-day historical volatility (currently for stocks). | 104 | IBApi.EWrapper.tickGeneric | 23 |
| Option Implied Volatility | “A prediction of how volatile an underlying will be in the future. The IB 30-day volatility is the at-market volatility estimated for a maturity thirty calendar days forward of the current trading day and is based on option prices from two consecutive expiration months.” | 106 | IBApi.EWrapper.tickGeneric | 24 |
| Option Bid Exchange | Not Used. | – | IBApi.EWrapper.tickString | 25 |
| Option Ask Exchange | Not Used. | – | IBApi.EWrapper.tickString | 26 |
| Option Call Open Interest | Call option open interest. | 101 | IBApi.EWrapper.tickSize | 27 |
| Option Put Open Interest | Put option open interest. | 101 | IBApi.EWrapper.tickSize | 28 |
| Option Call Volume | Call option volume for the trading day. | 100 | IBApi.EWrapper.tickSize | 29 |
| Option Put Volume | Put option volume for the trading day. | 100 | IBApi.EWrapper.tickSize | 30 |
| Index Future Premium | The number of points that the index is over the cash index. | 162 | IBApi.EWrapper.tickGeneric | 31 |
| Bid Exchange | “For stock and options identifies the exchange(s) posting the bid price. See Component Exchanges” | – | IBApi.EWrapper.tickString | 32 |
| Ask Exchange | “For stock and options identifies the exchange(s) posting the ask price. See Component Exchanges” | – | IBApi.EWrapper.tickString | 33 |
| Auction Volume | The number of shares that would trade if no new orders were received and the auction were held now. | 225 | IBApi.EWrapper.tickSize | 34 |
| Auction Price | The price at which the auction would occur if no new orders were received and the auction were held now- the indicative price for the auction. Typically received after Auction imbalance (tick type 36) | 225 | IBApi.EWrapper.tickPrice | 35 |
| Auction Imbalance | The number of unmatched shares for the next auction; returns how many more shares are on one side of the auction than the other. Typically received after Auction Volume (tick type 34) | 225 | IBApi.EWrapper.tickSize | 36 |
| Mark Price | “The mark price is the current theoretical calculated value of an instrument. Since it is a calculated value it will typically have many digits of precision.” | 232 | IBApi.EWrapper.tickPrice | 37 |
| Bid EFP Computation | Computed EFP bid price | – | IBApi.EWrapper.tickEFP | 38 |
| Ask EFP Computation | Computed EFP ask price | – | IBApi.EWrapper.tickEFP | 39 |
| Last EFP Computation | Computed EFP last price | – | IBApi.EWrapper.tickEFP | 40 |
| Open EFP Computation | Computed EFP open price | – | IBApi.EWrapper.tickEFP | 41 |
| High EFP Computation | Computed high EFP traded price for the day | – | IBApi.EWrapper.tickEFP | 42 |
| Low EFP Computation | Computed low EFP traded price for the day | – | IBApi.EWrapper.tickEFP | 43 |
| Close EFP Computation | Computed closing EFP price for previous day | – | IBApi.EWrapper.tickEFP | 44 |
| Last Timestamp | Time of the last trade (in UNIX time). | – | IBApi.EWrapper.tickString | 45 |
| Shortable | Describes the level of difficulty with which the contract can be sold short. See Shortable | 236 | IBApi.EWrapper.tickGeneric | 46 |
| RT Volume (Time & Sales) | “Last trade details (Including both “”Last”” and “”Unreportable Last”” trades). See RT Volume” | 233 | IBApi.EWrapper.tickString | 48 |
| Halted | Indicates if a contract is halted. See Halted | – | IBApi.EWrapper.tickGeneric | 49 |
| Bid Yield | Implied yield of the bond if it is purchased at the current bid. | – | IBApi.EWrapper.tickPrice | 50 |
| Ask Yield | Implied yield of the bond if it is purchased at the current ask. | – | IBApi.EWrapper.tickPrice | 51 |
| Last Yield | Implied yield of the bond if it is purchased at the last price. | – | IBApi.EWrapper.tickPrice | 52 |
| Custom Option Computation | Greek values are based off a user customized price. | – | IBApi.EWrapper.tickOptionComputation | 53 |
| Trade Count | Trade count for the day. | 293 | IBApi.EWrapper.tickGeneric | 54 |
| Trade Rate | Trade count per minute. | 294 | IBApi.EWrapper.tickGeneric | 55 |
| Volume Rate | Volume per minute. | 295 | IBApi.EWrapper.tickGeneric | 56 |
| Last RTH Trade | Last Regular Trading Hours traded price. | 318 | IBApi.EWrapper.tickPrice | 57 |
| RT Historical Volatility | 30-day real time historical volatility. | 411 | IBApi.EWrapper.tickGeneric | 58 |
| IB Dividends | Contract’s dividends. See IB Dividends. | 456 | IBApi.EWrapper.tickString | 59 |
| Bond Factor Multiplier | The bond factor is a number that indicates the ratio of the current bond principal to the original principal | 460 | IBApi.EWrapper.tickGeneric | 60 |
| Regulatory Imbalance | The imbalance that is used to determine which at-the-open or at-the-close orders can be entered following the publishing of the regulatory imbalance. | 225 | IBApi.EWrapper.tickSize | 61 |
| News | Contract’s news feed. | 292 | IBApi.EWrapper.tickString | 62 |
| Short-Term Volume 3 Minutes | The past three minutes volume. Interpolation may be applied. For stocks only. | 595 | IBApi.EWrapper.tickSize | 63 |
| Short-Term Volume 5 Minutes | The past five minutes volume. Interpolation may be applied. For stocks only. | 595 | IBApi.EWrapper.tickSize | 64 |
| Short-Term Volume 10 Minutes | The past ten minutes volume. Interpolation may be applied. For stocks only. | 595 | IBApi.EWrapper.tickSize | 65 |
| Delayed Bid | Delayed bid price. See Market Data Types. | *RDD | IBApi.EWrapper.tickPrice | 66 |
| Delayed Ask | Delayed ask price. See Market Data Types. | *RDD | IBApi.EWrapper.tickPrice | 67 |
| Delayed Last | Delayed last traded price. See Market Data Types. | *RDD | IBApi.EWrapper.tickPrice | 68 |
| Delayed Bid Size | Delayed bid size. See Market Data Types. | *RDD | IBApi.EWrapper.tickSize | 69 |
| Delayed Ask Size | Delayed ask size. See Market Data Types. | *RDD | IBApi.EWrapper.tickSize | 70 |
| Delayed Last Size | Delayed last size. See Market Data Types. | *RDD | IBApi.EWrapper.tickSize | 71 |
| Delayed High Price | Delayed highest price of the day. See Market Data Types. | *RDD | IBApi.EWrapper.tickPrice | 72 |
| Delayed Low Price | Delayed lowest price of the day. See Market Data Types | *RDD | IBApi.EWrapper.tickPrice | 73 |
| Delayed Volume | Delayed traded volume of the day. See Market Data Types | *RDD | IBApi.EWrapper.tickSize | 74 |
| Delayed Close | The prior day’s closing price. | *RDD | IBApi.EWrapper.tickPrice | 75 |
| Delayed Open | Displays the current day’s Open price. The price will return 15 minutes after the Open price is made available. | *RDD | IBApi.EWrapper.tickPrice | 76 |
| RT Trade Volume | “Last trade details that excludes “”Unreportable Trades””. See RT Trade Volume” | 375 | IBApi.EWrapper.tickString | 77 |
| Creditman mark price | Not currently available | – | IBApi.EWrapper.tickPrice | 78 |
| Creditman slow mark price | Slower mark price update used in system calculations | 619 | IBApi.EWrapper.tickPrice | 79 |
| Delayed Bid Option | Computed greeks based on delayed bid price. See Market Data Types and Option Greeks. | *RDD | IBApi.EWrapper.tickOptionComputation | 80 |
| Delayed Ask Option | Computed greeks based on delayed ask price. See Market Data Types and Option Greeks. | *RDD | IBApi.EWrapper.tickOptionComputation | 81 |
| Delayed Last Option | Computed greeks based on delayed last price. See Market Data Types and Option Greeks. | *RDD | IBApi.EWrapper.tickOptionComputation | 82 |
| Delayed Model Option | Computed Greeks and model’s implied volatility based on delayed stock and option prices. | *RDD | IBApi.EWrapper.tickOptionComputation | 83 |
| Last Exchange | Exchange of last traded price | – | IBApi.EWrapper.tickString | 84 |
| Last Regulatory Time | Timestamp (in Unix ms time) of last trade returned with regulatory snapshot | – | IBApi.EWrapper.tickString | 85 |
| Futures Open Interest | Total number of outstanding futures contracts. *HSI open interest requested with generic tick 101 | 588 | IBApi.EWrapper.tickSize | 86 |
| Average Option Volume | Average volume of the corresponding option contracts(TWS Build 970+ is required) | 105 | IBApi.EWrapper.tickSize | 87 |
| Delayed Last Timestamp | Delayed time of the last trade (in UNIX time) (TWS Build 970+ is required) | *RDD | IBApi.EWrapper.tickString | 88 |
| Shortable Shares | Number of shares available to short (TWS Build 974+ is required) | 236 | IBApi.EWrapper.tickSize | 89 |
| ETF Nav Last | The last price of Net Asset Value (NAV). For ETFs: Calculation is based on prices of ETF’s underlying securities. For NextShares: Value is provided by NASDAQ | 577 | IBApi.EWrapper.tickPrice | 96 |
| ETF Nav Frozen Last | ETF Nav Last for Frozen data | 623 | IBApi.EWrapper.tickPrice | 97 |
| ETF Nav High | The high price of ETF’s Net Asset Value (NAV) | 614 | IBApi.EWrapper.tickPrice | 98 |
| ETF Nav Low | The low price of ETF’s Net Asset Value (NAV) | 614 | IBApi.EWrapper.tickPrice | 99 |
| Estimated IPO – Midpoint | Midpoint is calculated based on IPO price range | 586 | IBApi.EWrapper.tickGeneric | 101 |
| Final IPO Price | Final price for IPO | 586 | IBApi.EWrapper.tickGeneric | 102 |
| Delayed Yield Bid | Delayed implied yield of the bond if it is purchased at the current bid. | *RDD | IBApi.EWrapper.tickPrice | 103 |
| Delayed Yield Ask | Delayed implied yield of the bond if it is purchased at the current ask. | *RDD | IBApi.EWrapper.tickPrice | 104 |
| Odd Lot Bid Price | Returns bid price of odd lots. Requires TWS & API version 10.46 or higher. | 787 | IBApi.EWrapper.tickPrice | 105 |
| Odd Lot Ask Price | Returns ask price of odd lots. Requires TWS & API version 10.46 or higher. | 787 | IBApi.EWrapper.tickPrice | 106 |
| Odd Lot Bid Size | Returns bid size of odd lots. Requires TWS & API version 10.46 or higher. | 787 | IBApi.EWrapper.tickSize | 107 |
| Odd Lot Ask Size | Returns ask size of odd lots. Requires TWS & API version 10.46 or higher. | 787 | IBApi.EWrapper.tickSize | 108 |
| Odd Lot Bid Exchange | Returns exchange of lastest odd lots bid order. Requires TWS & API version 10.46 or higher. | 787 | IBApi.EWrapper.tickString | 109 |
| Odd Lot Ask Exchange | Returns exchange of lastest odd lots ask order. Requires TWS & API version 10.46 or higher. | 787 | IBApi.EWrapper.tickString | 110 |

### Halted

The Halted tick type indicates if a contract has been halted for trading. It can have the following values:

| Value | Description |
| --- | --- |
| -1 | Halted status not available. Usually returned with frozen data. |
| 0 | Not halted. This value will only be returned if the contract is in a TWS watchlist. |
| 1 | General halt. Trading halt is imposed for purely regulatory reasons with/without volatility halt. |
| 2 | Volatility halt. Trading halt is imposed by the exchange to protect against extreme volatility. |

### Shortable

The shortable tick is an indicative on the amount of shares which can be sold short for the contract:

For detailed information about shortability data (shortable shares, fee rate) available outside of TWS, see [Short Securities Availability](/en/trading/short-securities-availability.php)

| Range | Description |
| --- | --- |
| Value higher than 2.5 | There are at least 1000 shares available for short selling. |
| Value higher than 1.5 | This contract will be available for short selling if shares can be located. |
| 1.5 or less | Contract is not available for short selling. |

### Volume Data

The API reports the current day’s volume in several ways. They are summarized as follows:

*   Volume tick type 8: The ‘native volume’. This includes delayed transactions, busted trades, and combos, but will not update with every tick.
*   RTVolume: highest number, includes non-reportable trades such as odd lots, average price and derivative trades.
*   RTTradeVolume: only includes ‘last’ ticks, similar to number also used in charts/historical data.

### RT Volume

The RT Volume tick type corresponds to the TWS’ Time & Sales window and contains the last trade’s price, size and time along with current day’s total traded volume, Volume Weighted Average Price (VWAP) and whether or not the trade was filled by a single market maker.

There is a setting in TWS which displays tick-by-tick data in the TWS Time & Sales Window. If this setting is checked, it will provide a higher granularity of data than RTVolume.

Example: 701.28;1;1348075471534;67854;701.46918464;true

As volume for US stocks is reported in lots, a volume of 0 reported in RTVolume will typically indicate an odd lot data point (less than 100 shares).

It is important to note that while the TWS Time & Sales Window also has information about trade conditions available with data points, this data is not available through the API. So for instance, the ‘unreportable’ trade status displayed with points in the Time & Sales Window is not available through the API, and that trade data will appear in the API just as any other data point. As always, an API application needs to exercise caution in responding to single data points.

**Note:** Please be aware that RT Volume is not supported with Cryptocurrencies.

RT Trade Volume

The RT Trade Volume is similar to RT Volume, but designed to avoid relaying back “Unreportable Trades” shown in TWS Time&Sales via the API. RT Trade Volume will not contain average price or derivative trades which are included in RTVolume.

### IB Dividends

This tick type provides four different comma-separated elements:

*   The sum of dividends for the past 12 months (0.83 in the example below).
*   The sum of dividends for the next 12 months (0.92 from the example below).
*   The next dividend date (20130219 in the example below).
*   The next single dividend amount (0.23 from the example below).

**Example:** 0.83,0.92,20130219,0.23

To receive dividend information it is sometimes necessary to direct-route rather than smart-route market data requests.

### Tick By Tick Data

In TWS, tick-by-tick data is available in the Time & Sales Window.

The maximum number of simultaneous tick-by-tick subscriptions allowed for a user is 5% of the user’s total market data lines. See [Specialized Market Data Lines](/campus/ibkr-api-page/market-data-subscriptions/#market-data-lines) for more information.

*   Real time tick-by-tick data is currently not available for options. Historical tick-by-tick data is available.
    
*   The tick type field is case sensitive – it must be BidAsk, Last, AllLast, MidPoint. AllLast has additional trade types such as combos, derivatives, and average price trades which are not included in Last.
    
*   Tick-by-tick data for options is currently only available historically and not in real time.
*   Tick-by-tick data for indices is only provided for indices which are on CME.
*   Tick-by-tick data is not available for combos.
*   No more than 1 tick-by-tick request can be made for the same instrument within 15 seconds.
*   Time & Sales data requires a Level 1, Top Of Book market data subscription. This would be the same subscription as [EClient.reqMktData()](/campus/ibkr-api-page/trader-workstation-api/#watchlist-data) or [EClient.reqHistoricalData()](/campus/ibkr-api-page/trader-workstation-api/#historical-bars).

### Request Tick By Tick Data

#### 22.10.01 Request Tick By Tick Data

**reqId:** int. unique identifier of the request.

**contract:** Contract. the contract for which tick-by-tick data is requested.

**tickType:** String. tick-by-tick data type: “Last”, “AllLast”, “BidAsk” or “MidPoint”.

**numberOfTicks:** int. If a non-zero value is entered, then historical tick data is first returned via one of the  [Historical Time and Sales Ewrapper Methods](https://www.interactivebrokers.com/campus/ibkr-api-page/trader-workstation-api/#receiving-time-and-sales)  respectively. (Max number of historical Ticks is 1000)

**ignoreSize:** bool. Omit updates that reflect only changes in size, and not price. _Applicable to Bid\_Ask data requests_.  
)

Requests tick by tick or Time & Sales data.

Note:

The maximum number of simultaneous tick-by-tick subscriptions allowed for a user is 5% of the user’s total market data lines. See [Specialized Market Data Lines](/campus/ibkr-api-page/market-data-subscriptions/#market-data-lines) for more information.

```python
self.reqTickByTickData(19001, contract, "Last", 0, True)
```

### Receive Tick By Tick Data

#### 22.10.02 Receive Tick By Tick Data

**reqId:** int. unique identifier of the request.

**tickType:** int. 1: “Last” or 2: “AllLast”.

**time:** long. tick-by-tick real-time tick timestamp.

**price:** double. tick-by-tick real-time tick last price.

**size:** decimal. tick-by-tick real-time tick last size.

**tickAttribLast:** TickAttribLast. tick-by-tick real-time last tick attribs (bit 0 – past limit, bit 1 – unreported).

**exchange:** String. tick-by-tick real-time tick exchange.

**specialConditions:** String. tick-by-tick real-time tick special conditions. Conditions under which the operation took place (Refer to [Trade Conditions Page](https://www.interactivebrokers.com/en/index.php?f=7235))  
)

Returns “Last” or “AllLast” tick-by-tick real-time tick.

```python
def tickByTickAllLast(self, reqId: int, tickType: int, time: int, price: float, size: Decimal, tickAtrribLast: TickAttribLast, exchange: str,specialConditions: str):
	print(" ReqId:", reqId, "Time:", time, "Price:", floatMaxString(price), "Size:", size, "Exch:" , exchange, "Spec Cond:", specialConditions, "PastLimit:", tickAtrribLast.pastLimit, "Unreported:", tickAtrribLast.unreported)
```

#### EWrapper.tickByTickBidAsk (

**reqId:** int. unique identifier of the request.

**time:** long. timestamp of the tick.

**bidPrice:** double. bid price of the tick.

**askPrice:** double. ask price of the tick.

**bidSize:** decimal. bid size of the tick.

**askSize:** decimal. ask size of the tick.

**tickAttribBidAsk:** TickAttribBidAsk. tick-by-tick real-time bid/ask tick attribs (bit 0 – bid past low, bit 1 – ask past high).  
)

Returns “BidAsk” tick-by-tick real-time tick.

```python
 def tickByTickBidAsk(self, reqId: int, time: int, bidPrice: float, askPrice: float, bidSize: Decimal, askSize: Decimal, tickAttribBidAsk: TickAttribBidAsk):
	print("BidAsk. ReqId:", reqId, "Time:", time, "BidPrice:", floatMaxString(bidPrice), "AskPrice:", floatMaxString(askPrice), "BidSize:", decimalMaxString(bidSize), "AskSize:", decimalMaxString(askSize), "BidPastLow:", tickAttribBidAsk.bidPastLow, "AskPastHigh:", tickAttribBidAsk.askPastHigh)
```

#### EWrapper.tickByTickMidPoint (

**reqId:** int. Request identifier used to track data.

**time:** long. Timestamp of the tick.

**midPoint:** double. Mid point value of the tick.  
)

Returns “MidPoint” tick-by-tick real-time tick.

```python
def tickByTickMidPoint(self, reqId: int, time: int, midPoint: float):
	print("Midpoint. ReqId:", reqId, "Time:", time, "MidPoint:", floatMaxString(midPoint))
```

### Cancel Tick By Tick Data

#### 22.10.03 Cancel Tick By Tick Data

**requestId:** int. Request identifier used to track data.  
)

Cancels specified tick-by-tick data.

```python
self.cancelTickByTickData(19001)
```

### Halted and Unhalted ticks

The Tick-By-Tick attribute has been introduced. The tick attribute _pastLimit_ is also returned with historical Tick-By-Tick responses.

*   If tick has zero price, zero size and pastLimit flag is set – this is “Halted” tick.
*   If tick has zero price, zero size and followed immediately after “Halted” tick – this is “Unhalted” tick.
