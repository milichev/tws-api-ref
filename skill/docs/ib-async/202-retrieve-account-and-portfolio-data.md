### Retrieve Account and Portfolio Data

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Functions to fetch account summaries, portfolio items, and positions from the IB API. These methods support filtering by account name and provide access to current financial data.

```python
def accountValues(self, account: str = "") -> list[AccountValue]:
    if account:
        return [v for v in self.wrapper.accountValues.values() if v.account == account]
    return list(self.wrapper.accountValues.values())

def portfolio(self, account: str = "") -> list[PortfolioItem]:
    if account:
        return list(self.wrapper.portfolio[account].values())
    return [v for d in self.wrapper.portfolio.values() for v in d.values()]
```
