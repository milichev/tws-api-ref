  [index.html](IBKR TWS API) -> 
  [04-comboleg-ref.md](04 ComboLeg Class Reference) -> 

 04 ComboLeg Class Reference


## ComboLeg Class Reference

Class representing a leg within combo orders.

| Name | Type | Description |
| --- | --- | --- |
| ConId | int | The Contract’s IB’s unique id. |
| Ratio | int | Select the relative number of contracts for the leg you are constructing. To help determine the ratio for a specific combination order |
| Action | string | The side (buy or sell) of the leg:  
For individual accounts, only BUY and SELL are available. SSHORT is for institutions. |
| Exchange | string | The destination exchange to which the order will be routed. |
| OpenClose | int | Specifies whether an order is an open or closing order. For institutional customers to determine if this order is to open or close a position. 0 – Same as the parent security. This is the only option for retail customers.  
1 – Open. This value is only valid for institutional customers.  
2 – Close. This value is only valid for institutional customers.  
3 – Unknown. |
| ShortSaleSlot | int | For stock legs when doing short selling.
Set to 1 = clearing broker, 2 = third party



 |
| DesignatedLocation | string | 

When ShortSaleSlot is 2, this field shall contain the designated location.



 |
| ExemptCode | int | Mark order as exempt from short sale uptick rule.  
Possible values:  
0 – Does not apply the rule.  
\-1 – Applies the short sale uptick rule. |

### Public Member Functions

| Name | Type | Description |
| --- | --- | --- |
| SAME = 0 | static int | 
Same as the parent security. This is the only option for retail customers.



 |
| OPEN = 1 | static int | 

Open. This value is only valid for institutional customers.



 |
| CLOSE = 2 | static int | 

Close. This value is only valid for institutional customers.



 |
| UNKNOWN = 3 | static int | 

Unknown



 |
