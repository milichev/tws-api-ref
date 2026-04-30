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
