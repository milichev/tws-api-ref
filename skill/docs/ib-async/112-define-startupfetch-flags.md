### Define StartupFetch Flags

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Defines the StartupFetch flag enumeration used to specify which data components should be fetched upon initialization of the IB connection.

```python
from enum import Flag, auto

class StartupFetch(Flag):
    POSITIONS = auto()
    ORDERS_OPEN = auto()
    ORDERS_COMPLETE = auto()
    ACCOUNT_UPDATES = auto()
    SUB_ACCOUNT_UPDATES = auto()
    EXECUTIONS = auto()

StartupFetchNONE = StartupFetch(0)

StartupFetchALL = (
    StartupFetch.POSITIONS
    | StartupFetch.ORDERS_OPEN
    | StartupFetch.ORDERS_COMPLETE
    | StartupFetch.ACCOUNT_UPDATES
    | StartupFetch.SUB_ACCOUNT_UPDATES
    | StartupFetch.EXECUTIONS
)
```
