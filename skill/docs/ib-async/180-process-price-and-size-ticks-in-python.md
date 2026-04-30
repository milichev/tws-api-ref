### Process Price and Size Ticks in Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Handles incoming price and size updates for financial instruments. It maps specific tick types to bid, ask, or last price attributes, includes logic to normalize empty values, and maintains a history of tick data.

```python
def priceSizeTick(self, reqId: int, tickType: int, price: float, size: float):
	ticker = self.reqId2Ticker.get(reqId)
	if not ticker:
		self._logger.error(f"priceSizeTick: Unknown reqId: {reqId}")
		return

	if tickType in {1, 66}:
		if size == 0:
			price = self.defaultEmptyPrice
			size = self.defaultEmptySize
		ticker.prevBid = ticker.bid
		ticker.prevBidSize = ticker.bidSize
		ticker.bid = price
		ticker.bidSize = size
	elif tickType in {2, 67}:
		if size == 0:
			price = self.defaultEmptyPrice
			size = self.defaultEmptySize
		ticker.prevAsk = ticker.ask
		ticker.prevAskSize = ticker.askSize
		ticker.ask = price
		ticker.askSize = size
	elif tickType in {4, 68}:
		if price == -1 and size == 0 and ticker.close > 0:
			price = self.defaultEmptyPrice
			size = self.defaultEmptySize
		ticker.prevLast = ticker.last
		ticker.prevLastSize = ticker.lastSize
		ticker.last = price
		ticker.lastSize = size
	else:
		assert tickType in PRICE_TICK_MAP
		setattr(ticker, PRICE_TICK_MAP[tickType], price)

	if price or size:
		tick = TickData(self.lastTime, tickType, price, size)
		ticker.ticks.append(tick)

	self.pendingTickers.add(ticker)
```
