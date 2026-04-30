### Contract Details

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Provides detailed information about a financial contract, including market data, trading parameters, and identifiers.

```APIDOC
## Class: ContractDetails

### Description
Represents detailed information about a financial contract, including market name, tick size, order types, valid exchanges, and more.

### Fields
- **contract** (Contract | None) - The contract object itself.
- **marketName** (str) - The name of the market.
- **minTick** (float) - The minimum tick size for the contract.
- **orderTypes** (str) - Comma-separated list of order types supported for the contract.
- **validExchanges** (str) - Comma-separated list of valid exchanges for the contract.
- **priceMagnifier** (int) - Price magnifier for the contract.
- **underConId** (int) - Contract ID of the underlying asset.
- **longName** (str) - The long name of the contract.
- **contractMonth** (str) - The contract month.
- **industry** (str) - The industry sector of the contract.
- **category** (str) - The category of the contract.
- **subcategory** (str) - The subcategory of the contract.
- **timeZoneId** (str) - The time zone ID for the contract.
- **tradingHours** (str) - Trading hours for the contract.
- **liquidHours** (str) - Liquid hours for the contract.
- **evRule** (str) - Event rule identifier.
- **evMultiplier** (int) - Event multiplier.
- **mdSizeMultiplier** (int) - Market data size multiplier.
- **aggGroup** (int) - Aggregation group.
- **underSymbol** (str) - Symbol of the underlying asset.
- **underSecType** (str) - Security type of the underlying asset.
- **marketRuleIds** (str) - Comma-separated list of market rule IDs.
- **secIdList** (list[TagValue]) - List of security ID tags and values.
- **realExpirationDate** (str) - The real expiration date.
- **lastTradeTime** (str) - The last trade time.
- **stockType** (str) - The type of stock.
- **minSize** (float) - The minimum order size.
- **sizeIncrement** (float) - The size increment for orders.
- **suggestedSizeIncrement** (float) - Suggested size increment for orders.
- **cusip** (str) - CUSIP identifier.
- **ratings** (str) - Ratings information.
- **descAppend** (str) - Description append.
- **bondType** (str) - Bond type.
- **couponType** (str) - Coupon type.
- **callable** (bool) - Indicates if the bond is callable.
- **putable** (bool) - Indicates if the bond is putable.
- **coupon** (float) - The coupon rate of the bond.
- **convertible** (bool) - Indicates if the bond is convertible.
- **maturity** (str) - The maturity date of the bond.
- **issueDate** (str) - The issue date of the bond.
- **nextOptionDate** (str) - The next option date.
- **nextOptionType** (str) - The type of the next option.
- **nextOptionPartial** (bool) - Indicates if the next option is partial.
- **notes** (str) - Additional notes.

### Methods
- **tradingSessions()** -> list[TradingSession]: Returns a list of trading sessions for the contract.
- **liquidSessions()** -> list[TradingSession]: Returns a list of liquid sessions for the contract.
- **dict()** -> dict: Returns the dataclass values as a dictionary.
- **nonDefaults()** -> dict[str, Any]: Returns fields that differ from default values as a dictionary.
- **tuple()** -> tuple[Any, ...]: Returns the dataclass values as a tuple.

```
