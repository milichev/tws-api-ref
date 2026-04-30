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
