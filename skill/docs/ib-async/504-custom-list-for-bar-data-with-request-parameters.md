### Custom List for Bar Data with Request Parameters

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/objects.html

Extends the built-in list to store `BarData` objects and retain all parameters used in the data request. It also includes an `updateEvent` for notifying listeners of new data.

```python
from dataclasses import dataclass
from datetime import datetime
from typing import Any, List, Optional
from ib_insync import Contract, TagValue
from ib_insync.util import date_ 
from ib_insync.ticker import BarData
from ib_insync.event import Event


[docs]
class BarDataList(list[BarData]):
    """
    List of :class:`.BarData` that also stores all request parameters.

    Events:

        * ``updateEvent``
          (bars: :class:`.BarDataList`, hasNewBar: bool)
    """

    reqId: int
    contract: Contract
    endDateTime: datetime | date_ | str | None
    durationStr: str
    barSizeSetting: str
    whatToShow: str
    useRTH: bool
    formatDate: int
    keepUpToDate: bool
    chartOptions: list[TagValue]

    def __init__(self, *args):
        super().__init__(*args)
        self.updateEvent = Event("updateEvent")

    def __eq__(self, other) -> bool:
        return self is other
```
