### Configure Financial Advisor (FA) Settings

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Methods to request and replace Financial Advisor configuration settings, such as groups, profiles, and account aliases. These operations involve XML-formatted configuration strings.

```python
def requestFA(self, faDataType: int):
    return self._run(self.requestFAAsync(faDataType))

def replaceFA(self, faDataType: int, xml: str):
    reqId = self.client.getReqId()
    self.client.replaceFA(reqId, faDataType, xml)
```
