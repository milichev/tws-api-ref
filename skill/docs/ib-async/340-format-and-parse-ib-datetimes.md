### Format and Parse IB Datetimes

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Functions to convert between Python datetime objects and the specific string format required by the Interactive Brokers API.

```python
from ib_async.util import formatIBDatetime, parseIBDatetime
from datetime import datetime

# Format to IB string
ib_str = formatIBDatetime(datetime.now())

# Parse back to datetime
dt = parseIBDatetime(ib_str)
```
