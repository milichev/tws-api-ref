### Request Market Rule Data - Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Fetches market rule data for a specific market rule ID. This function is part of the IB API client and requires the marketRuleId.

```python
def reqMarketRule(self, marketRuleId):
        self.send(91, marketRuleId)
```
