### Retrieve market depth and contract rules with Python

Source: https://ib-api-reloaded.github.io/ib_async/_sources/recipes.rst.txt

Demonstrates accessing the order book (DOM) for a forex pair and querying market rule IDs to understand price increments.

```python
# Order book
eurusd = Forex('EURUSD')
ticker = ib.reqMktDepth(eurusd)
while ib.sleep(5):
    print([d.price for d in ticker.domBids], [d.price for d in ticker.domAsks])

# Market rules
usdjpy = Forex('USDJPY')
cd = ib.reqContractDetails(usdjpy)[0]
rules = [ib.reqMarketRule(ruleId) for ruleId in cd.marketRuleIds.split(',')]
```
