  [index.html](IBKR TWS API) -> 
  [06-contract-ref.md](06 Contract Class Reference) -> 

 06 Contract Class Reference


## Contract Class Reference

Class describing an instrument’s definition.

| Name | Type | Description |
| --- | --- | --- |
| ConId | int | The unique IB contract identifier. |
| Symbol | string | The underlying’s asset symbol. |
| SecType | string | The security’s type: STK – stock (or ETF) OPT – option FUT – future IND – index FOP – futures option CASH – forex pair BAG – combo WAR – warrant BOND- bond CMDTY- commodity NEWS- news FUND- mutual fund. |
| LastTradeDateOrContractMonth | string | The contract’s last trading day or contract month (for Options and Futures). Strings with format YYYYMM will be interpreted as the Contract Month whereas YYYYMMDD will be interpreted as Last Trading Day. |
| LastTradeDate | string | The contract’s last trading day. |
| Strike | double | The option’s strike price. |
| Right | string | 
Either Put or Call (i.e. Options). Valid values are P, PUT, C, CALL.



 |
| Multiplier | string | 

The instrument’s multiplier (i.e. options, futures).



 |
| Exchange | string | The destination exchange. |
| Currency | string | The underlying’s currency. |
| LocalSymbol | string | The contract’s symbol within its primary exchange. For options, this will be the OCC symbol |
| PrimaryExch | string | The contract’s primary exchange. For smart routed contracts, used to define contract in case of ambiguity.Should be defined as native exchange of contract. For exchanges which contain a period in name, will only be part of exchange name prior to period, i.e. ENEXT for ENEXT.BE |
| TradingClass | string | The trading class name for this contract. Available in TWS contract description window as well. For example, GBL Dec ’13 future’s trading class is “FGBL” |
| IncludeExpired | bool | If set to true, contract details requests and historical data queries can be performed pertaining to expired futures contracts. Expired options or other instrument types are not available. |
| SecIdType | string | Security’s identifier when querying contract’s details or placing orders ISIN – Example: Apple: US0378331005 CUSIP – Example: Apple: 037833100. |
| SecId | string | Identifier of the security type. More… |
| Description | string | Description of the contract. |
| IssuerId | string | IssuerId of the contract. |
| ComboLegsDescription | string | Description of the combo legs. |
| ComboLegs | List | The legs of a combined contract definition. More… |
| DeltaNeutralContract | DeltaNeutralContract | Delta and underlying price for Delta-Neutral combo orders. Underlying (STK or FUT) |

### Public Member Functions

| Name | Type | Description |
| --- | --- | --- |
| ToString() | override string |  |
