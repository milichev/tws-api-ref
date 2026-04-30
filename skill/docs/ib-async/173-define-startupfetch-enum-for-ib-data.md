### Define StartupFetch Enum for IB Data

Source: https://ib-api-reloaded.github.io/ib_async/api.html

The StartupFetch class is an enumeration used to specify which data types should be fetched upon initialization of the IB connection.

```python
from ib_async import StartupFetch

# Example usage of StartupFetch flags
fetch_options = StartupFetch.POSITIONS | StartupFetch.ORDERS_OPEN
```
