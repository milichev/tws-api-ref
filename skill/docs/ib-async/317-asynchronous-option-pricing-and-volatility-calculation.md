### Asynchronous Option Pricing and Volatility Calculation

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Methods to calculate implied volatility and option prices asynchronously. These functions use a 4-second timeout and ensure cleanup of requests via the finally block.

```python
async def calculateImpliedVolatilityAsync(self, contract: Contract, optionPrice: float, underPrice: float, implVolOptions: list[TagValue] = []) -> OptionComputation | None:
	reqId = self.client.getReqId()
	future = self.wrapper.startReq(reqId, contract)
	self.client.calculateImpliedVolatility(reqId, contract, optionPrice, underPrice, implVolOptions)
	try:
		await asyncio.wait_for(future, 4)
		return future.result()
	except asyncio.TimeoutError:
		self._logger.error("calculateImpliedVolatilityAsync: Timeout")
		return None
	finally:
		self.client.cancelCalculateImpliedVolatility(reqId)
```

```python
async def calculateOptionPriceAsync(self, contract: Contract, volatility: float, underPrice: float, optPrcOptions: list[TagValue] = []) -> OptionComputation | None:
	reqId = self.client.getReqId()
	future = self.wrapper.startReq(reqId, contract)
	self.client.calculateOptionPrice(reqId, contract, volatility, underPrice, optPrcOptions)
	try:
		await asyncio.wait_for(future, 4)
		return future.result()
	except asyncio.TimeoutError:
		self._logger.error("calculateOptionPriceAsync: Timeout")
		return None
	finally:
		self.client.cancelCalculateOptionPrice(reqId)
```
