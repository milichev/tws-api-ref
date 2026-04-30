### TimeCondition Attributes and Methods (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents a time-based condition for an order, specifying a time and whether it should be 'more than' or 'less than' that time. It includes standard dataclass utility methods.

```Python
class TimeCondition(OrderCondition):
    condType: int = 3
    conjunction: str = 'a'
    isMore: bool = True
    time: str = ''

    # Inherits dict(), nonDefaults(), tuple(), update()
```
