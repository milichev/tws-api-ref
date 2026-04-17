*   [TWS API](../index.md)
*   [TWS API Documentation](index.md)
*   [20 Market Data: Delayed](20-delayed-market-data.md)

## Market Data: Delayed

Delayed market data can **only** be used with [EClient.reqMktData](22.08-watchlist-data.md) and [EClient.reqHistoricalData](21.03-historical-bars.md). This does not function for tick data.

The API can request Live, Frozen, Delayed and Delayed Frozen market data from Trader Workstation by switching market data type via the [EClient.reqMarketDataType](20.02-request-md-type.md) before making a market data request. A successful switch to a different (non-live) market data type for a particular market data request will be indicated by a callback to [EWrapper.marketDataType](20.03-receive-md-type.md) with the ticker ID of the market data request which is returning a different type of data.

*   A [EClient.reqMarketDataType](20.02-request-md-type.md) callback of **1** will occur automatically after invoking reqMktData if the user has live data permissions for the instrument.

| Market Data Type | ID | Description |
| --- | --- | --- |
| Live | 1 | Live market data is streaming data relayed back in real time. Market data subscriptions are required to receive live market data. |
| Frozen | 2 | Frozen market data is the last data recorded at market close. In TWS, Frozen data is displayed in gray numbers. When you set the market data type to Frozen, you are asking TWS to send the last available quote when there is not one currently available. For instance, if a market is currently closed and real time data is requested, -1 values will commonly be returned for the bid and ask prices to indicate there is no current bid/ask data available. TWS will often show a ‘frozen’ bid/ask which represents the last value recorded by the system. To receive the last know bid/ask price before the market close, switch to market data type 2 from the API before requesting market data. API frozen data requires TWS/IBG v.962 or higher and the same market data subscriptions necessary for real time streaming data. |
| Delayed | 3 | 
Free, delayed data is 15 – 20 minutes delayed. In TWS, delayed data is displayed in brown background. When you set market data type to delayed, you are telling TWS to automatically switch to delayed market data if the user does not have the necessary real time data subscription. If live data is available a request for delayed data would be ignored by TWS. Delayed market data is returned with delayed [Tick Types](22.09-available-tick-types.md) (Tick ID 66~76).

 |
| Delayed Frozen | 4 | Requests delayed “frozen” data for a user without market data subscriptions. |