### Set Market Data Type

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Configures the market data type for subsequent requests, allowing the user to choose between live, frozen, or delayed data streams.

```python
def reqMarketDataType(self, marketDataType: int):
	self.client.reqMarketDataType(marketDataType)
```
