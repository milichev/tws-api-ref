### Configure Market Data Types

Source: https://ib-api-reloaded.github.io/ib_async/readme.html

Sets the market data type to distinguish between delayed, frozen, and real-time data. Real-time data requires a subscription, while delayed data is available for free.

```python
ib.reqMarketDataType(3)  # Delayed
ib.reqMarketDataType(4)  # Delayed frozen
ib.reqMarketDataType(1)  # Real-time
```
