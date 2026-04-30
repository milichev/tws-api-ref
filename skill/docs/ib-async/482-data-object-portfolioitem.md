### Data Object: PortfolioItem

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents an item within a trading portfolio, including position and P&L data.

```APIDOC
## Data Object: PortfolioItem

### Description
Contains details about a specific position held in a portfolio.

### Fields
- **contract** (Contract) - The associated contract object.
- **position** (float) - The current position size.
- **marketPrice** (float) - The current market price.
- **marketValue** (float) - The total market value.
- **averageCost** (float) - The average cost of the position.
- **unrealizedPNL** (float) - Unrealized profit and loss.
- **realizedPNL** (float) - Realized profit and loss.
- **account** (str) - The account identifier.
```
