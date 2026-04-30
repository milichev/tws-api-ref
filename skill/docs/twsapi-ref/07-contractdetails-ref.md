  [index.html](IBKR TWS API) -> 
  [07-contractdetails-ref.md](07 ContractDetails Class Reference) -> 

 07 ContractDetails Class Reference


## ContractDetails Class Reference

Extended contract details.

| Name | Type | Description |
| --- | --- | --- |
| Contract | Contract | A fully-defined Contract object. |
| MarketName | string | The market name for this product. |
| MinTick | double | The minimum allowed price variation. Note that many securities vary their minimum tick size according to their price. This value will only show the smallest of the different minimum tick sizes regardless of the product’s price. Full information about the minimum increment price structure can be obtained with the reqMarketRule function or the IB Contract and Security Search site. |
| PriceMagnifier | int | Allows execution and strike prices to be reported consistently with market data |
| OrderTypes | string | Supported order types for this product. |
| ValidExchanges | string | Valid exchange fields when placing an order for this contract. |
| None | The list of exchanges will is provided in the same order as the corresponding MarketRuleIds list. | None |
| UnderConId | int | For derivatives |
| LongName | string | Descriptive name of the product. |
| ContractMonth | string | Typically the contract month of the underlying for a Future contract. |
| Industry | string | The industry classification of the underlying/product. For example |
| Category | string | The industry category of the underlying. For example |
| Subcategory | string | The industry subcategory of the underlying. For example |
| TimeZoneId | string | The time zone for the trading hours of the product. For example |
| TradingHours | string | The trading hours of the product. This value will contain the trading hours of the current day as well as the next’s. For example |
| LiquidHours | string | The liquid hours of the product. This value will contain the liquid hours (regular trading hours) of the contract on the specified exchange. Format for TWS versions until 969: 20090507:0700-1830 |
| EvRule | string | Contains the Economic Value Rule name and the respective optional argument. The two values should be separated by a colon. For example |
| EvMultiplier | double | Tells you approximately how much the market value of a contract would change if the price were to change by 1. It cannot be used to get market value by multiplying the price by the approximate multiplier. |
| AggGroup | int | Aggregated group Indicates the smart-routing group to which a contract belongs. contracts which cannot be smart-routed have aggGroup = -1. |
| SecIdList | List | A list of contract identifiers that the customer is allowed to view. CUSIP/ISIN/etc. For US stocks |
| UnderSymbol | string | For derivatives |
| UnderSecType | string | For derivatives |
| MarketRuleIds | string | The list of market rule IDs separated by comma Market rule IDs can be used to determine the minimum price increment at a given price. |
| RealExpirationDate | string | Real expiration date. Requires TWS 968+ and API v973.04+. Python API specifically requires API v973.06+. |
| LastTradeTime | string | Last trade time. |
| StockType | string | Stock type. |
| Cusip | string | The nine-character bond CUSIP. For Bonds only. Receiving CUSIPs requires a CUSIP market data subscription. |
| Ratings | string | Identifies the credit rating of the issuer. This field is not currently available from the TWS API. For Bonds only. A higher credit rating generally indicates a less risky investment. Bond ratings are from Moody’s and S&P respectively. Not currently implemented due to bond market data restrictions. |
| DescAppend | string | A description string containing further descriptive information about the bond. For Bonds only. |
| BondType | string | The type of bond |
| CouponType | string | The type of bond coupon. This field is currently not available from the TWS API. For Bonds only. |
| Callable | bool | If true |
| Putable | bool | Values are True or False. If true |
| Coupon | double | The interest rate used to calculate the amount you will receive in interest payments over the course of the year. This field is currently not available from the TWS API. For Bonds only. |
| Convertible | bool | Values are True or False. If true |
| Maturity | string | he date on which the issuer must repay the face value of the bond. This field is currently not available from the TWS API. For Bonds only. Not currently implemented due to bond market data restrictions. |
| IssueDate | string | The date the bond was issued. This field is currently not available from the TWS API. For Bonds only. Not currently implemented due to bond market data restrictions. |
| NextOptionDate | string | Only if bond has embedded options. This field is currently not available from the TWS API. Refers to callable bonds and puttable bonds. Available in TWS description window for bonds. |
| NextOptionType | string | Type of embedded option. This field is currently not available from the TWS API. Only if bond has embedded options. |
| NextOptionPartial | bool | Only if bond has embedded options. This field is currently not available from the TWS API. For Bonds only. |
| Notes | string | If populated for the bond in IB’s database. For Bonds only. |
| MinSize | decimal | Order’s minimal size. |
| SizeIncrement | decimal | Order’s size increment. |
| SuggestedSizeIncrement | decimal | Order’s suggested size increment. |
| FundName | string | Fund’s name. |
| FundFamily | string | Fund’s family. |
| FundType | string | Fund’s type. |
| FundFrontLoad | string | Fund’s front load. |
| FundBackLoad | string | Fund’s back load. |
| FundBackLoadTimeInterval | string | Fund’s back load time interval. |
| FundManagementFee | string | Fund’s management fee. |
| FundClosed | bool | Fund closed flag. |
| FundClosedForNewInvestors | bool | Fund closed for new investors flag. |
| FundClosedForNewMoney | bool | Fund closed for new money flag. |
| FundNotifyAmount | string | Fund’s notify amount. |
| FundMinimumInitialPurchase | string | Fund’s minimum initial purchase. |
| FundSubsequentMinimumPurchase | string | Fund’s subsequent minimum purchase. |
| FundBlueSkyStates | string | Fund’s blue sky states. |
| FundBlueSkyTerritories | string | Fund’s blue sky territories. |
| FundDistributionPolicyIndicator | FundDistributionPolicyIndicator | Fund’s distribution policy indicator. |
| FundAssetType | FundAssetType | Fund’s asset type. |
