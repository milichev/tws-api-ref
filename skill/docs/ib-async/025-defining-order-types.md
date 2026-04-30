### Defining Order Types

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Examples of initializing various order types within the ib-async framework. These classes inherit from base structures to provide specific trading functionality like Limit, Market, and Stop orders.

```python
from ib_async.order import LimitOrder, MarketOrder, StopOrder, StopLimitOrder

# Initialize a Limit Order
limit_order = LimitOrder(action='BUY', totalQuantity=100, lmtPrice=150.0)

# Initialize a Market Order
market_order = MarketOrder(action='SELL', totalQuantity=50)

# Initialize a Stop Order
stop_order = StopOrder(action='BUY', totalQuantity=100, stopPrice=155.0)

# Initialize a Stop Limit Order
stop_limit_order = StopLimitOrder(action='BUY', totalQuantity=100, lmtPrice=150.0, stopPrice=155.0)
```
