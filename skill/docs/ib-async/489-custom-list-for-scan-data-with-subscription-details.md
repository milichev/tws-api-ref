### Custom List for Scan Data with Subscription Details

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/objects.html

A list subclass for `ScanData` that stores subscription details and request parameters. It features an `updateEvent` for notifying about new scan results.

```python
from dataclasses import dataclass
from typing import Any, List
from ib_insync import ScannerSubscription, TagValue
from ib_insync.scanner import ScanData
from ib_insync.event import Event


[docs]
class ScanDataList(list[ScanData]):
    """
    List of :class:`.ScanData` that also stores all request parameters.

    Events:
        * ``updateEvent`` (:class:`.ScanDataList`)
    """

    reqId: int
    subscription: ScannerSubscription
    scannerSubscriptionOptions: list[TagValue]
    scannerSubscriptionFilterOptions: list[TagValue]

    def __init__(self, *args):
        super().__init__(*args)
        self.updateEvent = Event("updateEvent")

    def __eq__(self, other):
        return self is other
```
