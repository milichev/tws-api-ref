### VolumeCondition Attributes and Methods (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents a volume-based condition for an order, including the volume amount and associated exchange or contract details. It includes standard dataclass utility methods.

```Python
class VolumeCondition(OrderCondition):
    condType: int = 6
    conjunction: str = 'a'
    isMore: bool = True
    volume: int = 0
    conId: int = 0
    exch: str = ''

    # Inherits dict(), nonDefaults(), tuple(), update()
```
