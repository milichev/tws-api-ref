## Market Data: Delayed

Delayed market data can **only** be used with [EClient.reqMktData](https://www.interactivebrokers.com/campus/ibkr-api-page/trader-workstation-api/#watchlist-data) and [EClient.reqHistoricalData](https://www.interactivebrokers.com/campus/ibkr-api-page/trader-workstation-api/#historical-bars). This does not function for tick data.

The API can request Live, Frozen, Delayed and Delayed Frozen market data from Trader Workstation by switching market data type via the [EClient.reqMarketDataType](#request-md-type) before making a market data request. A successful switch to a different (non-live) market data type for a particular market data request will be indicated by a callback to [EWrapper.marketDataType](#receive-md-type "Returns the market data type (real-time, frozen, delayed, delayed-frozen) of ticker sent by EClientSo...") with the ticker ID of the market data request which is returning a different type of data.

*   A [EClient.reqMarketDataType](#request-md-type) callback of **1** will occur automatically after invoking reqMktData if the user has live data permissions for the instrument.

| Market Data Type | ID | Description |
| --- | --- | --- |
| Live | 1 | Live market data is streaming data relayed back in real time. Market data subscriptions are required to receive live market data. |
| Frozen | 2 | Frozen market data is the last data recorded at market close. In TWS, Frozen data is displayed in gray numbers. When you set the market data type to Frozen, you are asking TWS to send the last available quote when there is not one currently available. For instance, if a market is currently closed and real time data is requested, -1 values will commonly be returned for the bid and ask prices to indicate there is no current bid/ask data available. TWS will often show a ‘frozen’ bid/ask which represents the last value recorded by the system. To receive the last know bid/ask price before the market close, switch to market data type 2 from the API before requesting market data. API frozen data requires TWS/IBG v.962 or higher and the same market data subscriptions necessary for real time streaming data. |
| Delayed | 3 | 
Free, delayed data is 15 – 20 minutes delayed. In TWS, delayed data is displayed in brown background. When you set market data type to delayed, you are telling TWS to automatically switch to delayed market data if the user does not have the necessary real time data subscription. If live data is available a request for delayed data would be ignored by TWS. Delayed market data is returned with delayed [Tick Types](#available-tick-types) (Tick ID 66~76).

 |
| Delayed Frozen | 4 | Requests delayed “frozen” data for a user without market data subscriptions. |

### Market Data Type Behavior

1) If user sends reqMarketDataType(1) – TWS will start sending only regular (1) market data.

2) If user sends reqMarketDataType(2) – frozen, TWS will start sending regular (1) as default and frozen (2) market data. TWS sends marketDataType callback (1 or 2) indicating what market data will be sent after this callback. It can be regular or frozen.

3) If user sends reqMarketDataType(3) – delayed, TWS will start sending regular (1) as default and delayed (3) market data.

4) If user sends reqMarketDataType(4) – delayed-frozen, TWS will start sending regular (1) as default, delayed (3) and delayed-frozen (4) market data.

Interactive Brokers data will always try to provide the most up to date market data possible, but will permit additional delayed or frozen data if available upon request.

### Request Market Data Type

#### EClient.reqMarketDataType (

**marketDataType:** int. Type of market data to retrieve.  
)

Switches data type returned from reqMktData request to Live (1), Frozen (2), Delayed (3), or Frozen-Delayed (4).

self.reqMarketDataType(3)

### Receive Market Data Type

#### EWrapper.marketDataType (

**reqId:** int. Request identifier used to track data.

**marketDataType:** int. Type of market data to retrieve.  
)

def marketDataType(self, reqId: TickerId, marketDataType: int):
	print("MarketDataType. ReqId:", reqId, "Type:", marketDataType)