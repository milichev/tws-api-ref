[IBKR TWS API](../../SKILL.md) · [TWS API Reference](index.md) · [24 OrderAllocation Class Reference](24-orderallocation-ref.md)


## OrderAllocation Class Reference

The OrderAllocation class to denote an advisor’s allocations while trading subaccounts.

| Name | Type | Description |
| --- | --- | --- |
| Account | String | References the Account ID, i.e. U1234567, being allocated to. |
| Position | Decimal | References the current position of the account being allocated to. |
| PositionDesired | Decimal | States the full position increase intended by the current trade. |
| PosiionAfter | Decimal | References the increase to position from the current trade. Unless the order is partially filled, this should reflect the PositionDesired value. |
| DesiredAllocQty | Decimal | Reference the quantity to increase by based on allocation. |
| AllowedAllocQty | Decimal | References the maximum allowed quantity increase. |
| IsMonetary | Boolean | Denotes whether the order is a monetary allocation (true) or whole share allocation (false). |
