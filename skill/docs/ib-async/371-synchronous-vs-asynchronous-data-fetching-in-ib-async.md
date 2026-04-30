### Synchronous vs. Asynchronous Data Fetching in ib_async

Source: https://ib-api-reloaded.github.io/ib_async/readme.html

Illustrates the difference between synchronous and asynchronous methods for requesting historical data using the `ib_async` library. The synchronous method blocks execution until data is received, while the asynchronous method yields control to the event loop, allowing for non-blocking operations.

```python
# Synchronous (blocks until complete)
bars = ib.reqHistoricalData(contract, ...)

# Asynchronous (yields to event loop)
bars = await ib.reqHistoricalDataAsync(contract, ...)

```
