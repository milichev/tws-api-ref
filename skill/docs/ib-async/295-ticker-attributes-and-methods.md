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
