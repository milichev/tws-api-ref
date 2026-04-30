### Synchronous vs Asynchronous Execution in ib_async

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Illustrates the difference between synchronous and asynchronous methods for requesting historical data in ib_async. Synchronous calls block until completion, while asynchronous calls yield control to the event loop, allowing for non-blocking operations.

```python
# Synchronous (blocks until complete)
bars = ib.reqHistoricalData(contract, ...)

# Asynchronous (yields to event loop)
bars = await ib.reqHistoricalDataAsync(contract, ...)
```
