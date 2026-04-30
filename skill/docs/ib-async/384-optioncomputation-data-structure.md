### OptionComputation Data Structure

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Provides option computation data, including implied volatility, Greeks, and underlying price.

```APIDOC
## OptionComputation Data Structure

### Description
Provides option computation data, including implied volatility, Greeks, and underlying price.

### Fields
- **tickAttrib** (TickAttrib) - Tick attributes related to option computations.
- **impliedVol** (float) - The implied volatility.
- **delta** (float) - The delta of the option.
- **optPrice** (float) - The theoretical option price.
- **pvDividend** (float) - The present value of dividends.
- **gamma** (float) - The gamma of the option.
- **vega** (float) - The vega of the option.
- **theta** (float) - The theta of the option.
- **undPrice** (float) - The price of the underlying asset.
```
