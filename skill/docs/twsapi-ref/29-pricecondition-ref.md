  [index.html](IBKR TWS API) -> 
  [29-pricecondition-ref.md](29 PriceCondition Class Reference) -> 

 29 PriceCondition Class Reference


## PriceCondition Class Reference

Used with conditional orders to cancel or submit order based on price of an instrument.

| Name | Type | Description |
| --- | --- | --- |
| Value | override string |  |
| Price | string | Price field used in conditional order logic. |
| TriggerMethod | TriggerMethod |  |

### Public Member Functions

| Name | Type | Description |
| --- | --- | --- |
| ToString() | override string | Returns string to display. |
| Equals (object obj) | override bool |  |
| GetHashCode () | override int |  |
| Deserialize (IDecoder inStream) | override void |  |
| Serialize (BinaryWriter outStream) | override void |  |

### Protected Member Functions

| Name | Type | Description |
| --- | --- | --- |
| TryParse(string cond) | override bool | Validates the price condition format is valid. |
