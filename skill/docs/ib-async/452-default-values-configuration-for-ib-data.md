### Default Values Configuration for IB Data

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/objects.html

A dataclass to manage default values used when populating data from the IB API. It allows customization of empty price/size values and unset values, as well as the timezone for log history.

```python
from dataclasses import dataclass
from typing import Any
from datetime import timezone
from tzinfo import tzinfo
from math import nan


[docs]
@dataclass
class IBDefaults:
    """A simple way to provide default values when populating API data."""

    # optionally replace IBKR using -1 price and 0 size when quotes don't exist
    emptyPrice: Any = -1
    emptySize: Any = 0

    # optionally replace ib_async default for all instance variable values before popualted from API updates
    unset: Any = nan

    # optionally change the timezone used for log history events in objects (no impact on orders or data processing)
    timezone: tzinfo = timezone.utc
```
