### Handle Account and Portfolio Updates

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Methods to process account value, summary, and portfolio updates. These functions update internal dictionaries and emit events to notify subscribers of changes in account data.

```python
def accountUpdateMulti(self, reqId, account, modelCode, tag, val, currency):
    key = (account, tag, currency, modelCode)
    acctVal = AccountValue(account, tag, val, currency, modelCode)
    self.accountValues[key] = acctVal
    self.ib.accountValueEvent.emit(acctVal)

def updatePortfolio(self, contract, posSize, marketPrice, marketValue, averageCost, unrealizedPNL, realizedPNL, account):
    contract = Contract.recreate(contract)
    portfItem = PortfolioItem(contract, posSize, marketPrice, marketValue, averageCost, unrealizedPNL, realizedPNL, account)
    portfolioItems = self.portfolio[account]
    if posSize == 0:
        portfolioItems.pop(contract.conId, None)
    else:
        portfolioItems[contract.conId] = portfItem
    self.ib.updatePortfolioEvent.emit(portfItem)
```
