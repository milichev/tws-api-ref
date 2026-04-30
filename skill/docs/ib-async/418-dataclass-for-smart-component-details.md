### Dataclass for Smart Component Details

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/objects.html

Stores details about a smart component, including its bit number and associated exchange information. This is likely used for specific trading component identification.

```python
from dataclasses import dataclass


[docs]
@dataclass(slots=True, frozen=True)
class SmartComponent:
    bitNumber: int
    exchange: str
    exchangeLetter: str
```
