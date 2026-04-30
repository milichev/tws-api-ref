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
