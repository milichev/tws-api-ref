### Custom List for Real-Time Bar Data

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/objects.html

A specialized list for `RealTimeBar` objects that preserves request parameters and includes an `updateEvent`. This is designed for handling streaming real-time bar data.

```python
from dataclasses import dataclass
from typing import Any, List
from ib_insync import Contract, TagValue
from ib_insync.ticker import RealTimeBar
from ib_insync.event import Event


[docs]
class RealTimeBarList(list[RealTimeBar]):
    """
    List of :class:`.RealTimeBar` that also stores all request parameters.

    Events:

        * ``updateEvent``
          (bars: :class:`.RealTimeBarList`, hasNewBar: bool)
    """

    reqId: int
    contract: Contract
    barSize: int
    whatToShow: str
    useRTH: bool
    realTimeBarsOptions: list[TagValue]

    def __init__(self, *args):
        super().__init__(*args)
        self.updateEvent = Event("updateEvent")

    def __eq__(self, other):
        return self is other
```
