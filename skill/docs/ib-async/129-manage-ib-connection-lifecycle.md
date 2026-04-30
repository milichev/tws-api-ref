### Manage IB Connection Lifecycle

Source: https://ib-api-reloaded.github.io/ib_async/_sources/recipes.rst.txt

Demonstrates the recommended practice of adding a sleep delay before disconnecting to ensure all pending data is flushed during short-lived connections.

```python
ib = IB()
ib.connect()

# create and submit some orders

ib.sleep(1)  # added delay
ib.disconnect()
```
