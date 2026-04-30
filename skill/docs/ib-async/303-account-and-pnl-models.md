### Account and PnL Models

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Definitions for Profit and Loss (PnL) and account value data structures.

```APIDOC
## Data Model: PnL

### Description
Represents Profit and Loss data for an account.

### Fields
- **account** (str) - Account identifier.
- **modelCode** (str) - Model code associated with the account.
- **dailyPnL** (float) - Daily PnL value.
- **unrealizedPnL** (float) - Unrealized PnL value.
- **realizedPnL** (float) - Realized PnL value.

### Methods
- **dict()**: Returns the object as a dictionary.
- **update()**: Updates the object fields.
```
