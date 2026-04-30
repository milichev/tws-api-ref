### OptionChain Data Structure

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents an option chain, including exchange, underlying ID, expirations, and strikes.

```APIDOC
## OptionChain Data Structure

### Description
Represents an option chain, including exchange, underlying ID, expirations, and strikes.

### Fields
- **exchange** (string) - The exchange where the options are listed.
- **underlyingConId** (integer) - The conId of the underlying contract.
- **tradingClass** (string) - The trading class for the options.
- **multiplier** (float) - The contract multiplier.
- **expirations** (list) - A list of expiration dates.
- **strikes** (list) - A list of strike prices.
```
