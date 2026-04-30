### Handle Market Rule Data (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Processes market rule data, specifically price increments, for a given market rule ID. It ends the request by associating the price increments with a uniquely identified market rule.

```python
def marketRule(self, marketRuleId: int, priceIncrements: list[PriceIncrement]):
        self._endReq(f"marketRule-{marketRuleId}", priceIncrements)
```
