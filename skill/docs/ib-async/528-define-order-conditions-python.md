### Define Order Conditions (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/order.html

Defines a base class for order conditions and specific subclasses for Price, Time, Margin, Execution, Volume, and Percent Change conditions. Includes a factory method to create condition objects based on type.

```python
@dataclass
class OrderCondition:

    @staticmethod
    def createClass(condType):
        d = {
            1: PriceCondition,
            3: TimeCondition,
            4: MarginCondition,
            5: ExecutionCondition,
            6: VolumeCondition,
            7: PercentChangeCondition,
        }
        return d[condType]

    def And(self):
        self.conjunction = "a"
        return self

    def Or(self):
        self.conjunction = "o"
        return self

@dataclass
class PriceCondition(OrderCondition):
    condType: int = 1
    conjunction: str = "a"
    isMore: bool = True
    price: float = 0.0
    conId: int = 0
    exch: str = ""
    triggerMethod: int = 0

@dataclass
class TimeCondition(OrderCondition):
    condType: int = 3
    conjunction: str = "a"
    isMore: bool = True
    time: str = ""

@dataclass
class MarginCondition(OrderCondition):
    condType: int = 4
    conjunction: str = "a"
    isMore: bool = True
    percent: int = 0

@dataclass
class ExecutionCondition(OrderCondition):
    condType: int = 5
    conjunction: str = "a"
    secType: str = ""
    exch: str = ""
    symbol: str = ""

@dataclass
class VolumeCondition(OrderCondition):
    condType: int = 6
    conjunction: str = "a"
    isMore: bool = True
    volume: int = 0
    conId: int = 0
    exch: str = ""

@dataclass
class PercentChangeCondition(OrderCondition):
    condType: int = 7
    conjunction: str = "a"
    isMore: bool = True
    changePercent: float = 0.0
    conId: int = 0
    exch: str = ""
```
