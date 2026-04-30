[IBKR TWS API](../../SKILL.md) · [TWS API Reference](index.md) · [02 AccountSummaryTags Class](02-acctsumtags-ref.md)


## AccountSummaryTags Class

Class containing all existing values being reported by EClientSocket::reqAccountSummary.

Public Attributes

| Name | Type | Description |
| --- | --- | --- |
| AccountType = “AccountType” | string |  |
| NetLiquidation = “NetLiquidation” | string |  |
| TotalCashValue = “TotalCashValue” | string | Total cash including futures pnl |
| SettledCash = “SettledCash” | string | For cash accounts, this is the same as TotalCashValue |
| AccruedCash = “AccruedCash” | string | Net accrued interest |
| BuyingPower = “BuyingPower” | string | The maximum amount of marginable US stocks the account can buy |
| EquityWithLoanValue = “EquityWithLoanValue” | string | Cash + stocks + bonds + mutual funds |
| PreviousDayEquityWithLoanValue = “PreviousDayEquityWithLoanValue” | string |  |
| GrossPositionValue = “GrossPositionValue” | string | The sum of the absolute value of all stock and equity option positions |
| ReqTEquity = “ReqTEquity” | string |  |
| ReqTMargin = “ReqTMargin” | string |  |
| SMA = “SMA” | string | Special Memorandum Account |
| InitMarginReq = “InitMarginReq” | string |  |
| MaintMarginReq = “MaintMarginReq” | string |  |
| AvailableFunds = “AvailableFunds” | string |  |
| ExcessLiquidity = “ExcessLiquidity” | string |  |
| Cushion = “Cushion” | string | Excess liquidity as a percentage of net liquidation value |
| FullInitMarginReq = “FullInitMarginReq” | string |  |
| FullMaintMarginReq = “FullMaintMarginReq” | string |  |
| FullAvailableFunds = “FullAvailableFunds” | string |  |
| FullExcessLiquidity = “FullExcessLiquidity” | string |  |
| LookAheadNextChange = “LookAheadNextChange” | string | Time when look-ahead values take effect |
| LookAheadInitMarginReq = “LookAheadInitMarginReq” | string |  |
| LookAheadMaintMarginReq = “LookAheadMaintMarginReq” | string |  |
| LookAheadAvailableFunds = “LookAheadAvailableFunds” | string |  |
| LookAheadExcessLiquidity = “LookAheadExcessLiquidity” | string |  |
| HighestSeverity = “HighestSeverity” | string | A measure of how close the account is to liquidation |
| DayTradesRemaining = “DayTradesRemaining” | string | The Number of Open/Close trades one could do before Pattern Day Trading is detected; a value of “-1” means user can do unlimited day trades. |
| Leverage = “Leverage” | string | GrossPositionValue / NetLiquidation |

### Static Public Member Functions

| Name | Type | Description |
| --- | --- | --- |
| GetAllTags () | static string | Returns All Tags |
