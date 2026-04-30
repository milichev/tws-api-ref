### Initialize an Order object

Source: https://ib-api-reloaded.github.io/ib_async/api.html

This snippet demonstrates how to instantiate the Order class. It highlights the extensive list of parameters available for configuring specific trading behaviors, such as limit prices, order types, and time-in-force settings.

```python
from ib_async import Order

# Create a basic limit order
order = Order(
    action='BUY',
    totalQuantity=100,
    orderType='LMT',
    lmtPrice=150.50,
    tif='DAY'
)

# Accessing order attributes
print(f"Order Type: {order.orderType}")
print(f"Quantity: {order.totalQuantity}")
```
