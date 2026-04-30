[IBKR TWS API](../../SKILL.md) · [TWS API Reference](index.md) · [17 ExecutionFilter Class Reference](17-execfilter-ref.md)


## ExecutionFilter Class Reference

When requesting executions, a filter can be specified to receive only a subset of them.  
 

| Name | Type | Description |
| --- | --- | --- |
| AcctCode | String | Account identifier that executed the trade. |
| ClientId | Integer | Client identifier the order was submitted through. |
| Exchange | string | Exchange where the symbol was traded. |
| LastNDays | Integer | Number of previous days to receive trades for. Maximum 7. |
| SecType | string | Asset type being monitored. |
| Side | String | Determine if only Buy or Sell orders are returned. |
| SpecificDates | Array of Integers | Retrieve a specific date within the past week to receive executions for. May be used with Time, but only the executions on the Specified Dates will return.Array formatted as [YYYYMMDD] |
| Symbol | string | Instrument’s symbol. |
| Time | String | Declare the date/time to receive executions at and after the designated time. Can be used in combination with LastNDays or SpecificDates.Requests should be formatted as “YYYYMMDD HH:mm:ss TMZ” or in UTC as “YYYYMMDD-HH:mm:ss”.If no date is passed, the current date is assumed. |

### Public Member Functions

| Name | Type | Description |
| --- | --- | --- |
| Equals (object obj) | override bool |  |
| GetHashCode () | override int |  |
