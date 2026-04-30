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
