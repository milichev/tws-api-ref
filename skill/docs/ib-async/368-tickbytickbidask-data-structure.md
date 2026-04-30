### TickByTickBidAsk Data Structure

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents Bid/Ask tick data, including time, prices, sizes, and attributes.

```APIDOC
## TickByTickBidAsk Data Structure

### Description
Represents Bid/Ask tick data, including time, prices, sizes, and attributes.

### Fields
- **time** (string) - The timestamp of the tick.
- **bidPrice** (float) - The bid price.
- **askPrice** (float) - The ask price.
- **bidSize** (integer) - The bid size.
- **askSize** (integer) - The ask size.
- **tickAttribBidAsk** (TickAttribBidAsk) - Attributes related to the Bid/Ask tick.
```
