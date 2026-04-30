  [index.html](IBKR TWS API) -> 
  [15-exec-ref.md](15 Execution Class Reference) -> 

 15 Execution Class Reference


## Execution Class Reference

Class describing an order’s execution.

| Name | Type | Description |
| --- | --- | --- |
| OrderId | int | The API client’s order Id. May not be unique to an account. |
| ClientId | int | The API client identifier which placed the order which originated this execution. |
| ExecId | string | The execution’s identifier. Each partial fill has a separate ExecId. A correction is indicated by an ExecId which differs from a previous ExecId in only the digits after the final period |
| Time | string | The execution’s server time. |
| AcctNumber | string | The account to which the order was allocated. |
| Exchange | string | The exchange where the execution took place. |
| Side | string | Specifies if the transaction was buy or sale BOT for bought |
| Shares | decimal | The number of shares filled. |
| Price | double | The order’s execution price excluding commissions. |
| PermId | int | The TWS order identifier. The PermId can be 0 for trades originating outside IB. |
| Liquidation | int | Identifies whether an execution occurred because of an IB-initiated liquidation. |
| CumQty | decimal | Cumulative quantity. Used in regular trades |
| AvgPrice | double | Average price. Used in regular trades |
| OrderRef | string | The OrderRef is a user-customizable string that can be set from the API or TWS and will be associated with an order for its lifetime. |
| EvRule | string | The Economic Value Rule name and the respective optional argument. The two values should be separated by a colon. For example |
| EvMultiplier | double | Tells you approximately how much the market value of a contract would change if the price were to change by 1. It cannot be used to get market value by multiplying the price by the approximate multiplier. |
| ModelCode | string | model code |
| LastLiquidity | Liquidity | The liquidity type of the execution. Requires TWS 968+ and API v973.05+. Python API specifically requires API v973.06+. |
| PendingPriceRevision | bool | pending price revision |

### Public Member Functions

| Name | Type | Description |
| --- | --- | --- |
| Equals (object obj) | override bool |  |
| GetHashCode () | override int |  |
