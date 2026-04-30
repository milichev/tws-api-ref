### Process Tick Size Updates in Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Updates the size component of bid or ask prices. It performs validation to prevent redundant updates and handles the transition to default empty values when size is zero.

```python
def tickSize(self, reqId: int, tickType: int, size: float):
	ticker = self.reqId2Ticker.get(reqId)
	if not ticker:
		self._logger.error(f"tickSize: Unknown reqId: {reqId}")
		return

	if tickType in {0, 69}:
		if size == ticker.bidSize:
			return
		ticker.prevBidSize = ticker.bidSize
		if size == 0:
			ticker.bid = self.defaultEmptyPrice
			ticker.bidSize = self.defaultEmptySize
		else:
			ticker.bidSize = size
	elif tickType in {3, 70}:
		if size == ticker.askSize:
			return
		ticker.prevAskSize = ticker.askSize
		if size == 0:
			ticker.ask = self.defaultEmptyPrice
			ticker.askSize = self.defaultEmptySize
		else:
			ticker.askSize = size
```
