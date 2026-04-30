### Configure Market Data Type

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Sets the type of market data to be received. Type 3 provides free delayed data, Type 4 provides delayed frozen data, and Type 1 provides real-time data which requires a subscription.

```python
from ib_async import *

# For free delayed data (no subscription required)
ib.reqMarketDataType(3)  # Delayed
ib.reqMarketDataType(4)  # Delayed frozen

# For real-time data (requires subscription)
ib.reqMarketDataType(1)  # Real-time
```
