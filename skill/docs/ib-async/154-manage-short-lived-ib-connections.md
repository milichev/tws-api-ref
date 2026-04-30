### Manage Short-Lived IB Connections

Source: https://ib-api-reloaded.github.io/ib_async/recipes.html

Demonstrates how to handle short-lived connections to the IB API. It includes connecting, submitting orders, adding a small delay before disconnecting to ensure data flushing, and finally disconnecting.

```python
ib = IB()
ib.connect()

...  # create and submit some orders

ib.sleep(1)  # added delay
ib.disconnect()
```
