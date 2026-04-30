### Request Contract and Market Data

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Blocking methods to retrieve contract details, matching symbols based on patterns, and market rule price increments.

```python
def reqContractDetails(self, contract: Contract) -> list[ContractDetails]:
	return self._run(self.reqContractDetailsAsync(contract))

def reqMatchingSymbols(self, pattern: str) -> list[ContractDescription]:
	return self._run(self.reqMatchingSymbolsAsync(pattern))

def reqMarketRule(self, marketRuleId: int) -> PriceIncrement:
	return self._run(self.reqMarketRuleAsync(marketRuleId))
```
