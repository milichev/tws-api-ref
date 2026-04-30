  [index.html](IBKR TWS API) -> 
  [33-tickattrib-ref.md](33 TickAttrib Class Reference) -> 

 33 TickAttrib Class Reference


## TickAttrib Class Reference

Tick attributes that describes additional information for price ticks

| Name | Type | Description |
| --- | --- | --- |
| CanAutoExecute | bool | Used with tickPrice callback from reqMktData. Specifies whether the price tick is available for automatic execution (1) or not (0). |
| PastLimit | bool | Used with tickPrice to indicate if the bid price is lower than the day’s lowest value or the ask price is higher than the highest ask. |
| PreOpen | bool | Indicates whether the bid/ask price tick is from pre-open session. |
| Unreported | bool | Used with tick-by-tick data to indicate if a trade is classified as ‘unreportable’ (odd lots |
| BidPastLow | bool | Used with real time tick-by-tick. Indicates if bid is lower than day’s lowest low. |
| AskPastHigh | bool | Used with real time tick-by-tick. Indicates if ask is higher than day’s highest ask. |

### Public Member Functions

| Name | Type | Description |
| --- | --- | --- |
| ToString() | override string | Returns string to display. |
