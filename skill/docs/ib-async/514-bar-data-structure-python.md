### Bar Data Structure (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ticker.html

Defines the Bar data structure using Python's dataclass. It holds OHLC (Open, High, Low, Close) prices, volume, and tick count for a financial bar. Default values are set to NaN for prices and 0 for volume/count.

```python
@dataclass
class Bar:
    time: datetime | None
    open: float = nan
    high: float = nan
    low: float = nan
    close: float = nan
    volume: int = 0
    count: int = 0
```
