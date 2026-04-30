### Minimum price increments

Source: https://ib-api-reloaded.github.io/ib_async/recipes.html

Fetches contract details to identify market rule IDs, then retrieves the specific market rules defining minimum price increments.

```python
usdjpy = Forex('USDJPY')
cd = ib.reqContractDetails(usdjpy)[0]
print(cd.marketRuleIds)

rules = [
    ib.reqMarketRule(ruleId)
    for ruleId in cd.marketRuleIds.split(',')]
print(rules)
```
