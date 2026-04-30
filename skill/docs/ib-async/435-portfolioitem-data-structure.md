### PortfolioItem Data Structure

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents an item within a portfolio, detailing contract information, position, market values, and P&L.

```APIDOC
## PortfolioItem Data Structure

### Description
Represents an item within a portfolio, detailing contract information, position, market values, and P&L.

### Fields
- **contract** (Contract) - The contract details.
- **position** (float) - The current position quantity.
- **marketPrice** (float) - The current market price of the contract.
- **marketValue** (float) - The total market value of the position.
- **averageCost** (float) - The average cost basis of the position.
- **unrealizedPNL** (float) - The unrealized Profit and Loss.
- **realizedPNL** (float) - The realized Profit and Loss.
- **account** (string) - The account identifier for this portfolio item.
```
