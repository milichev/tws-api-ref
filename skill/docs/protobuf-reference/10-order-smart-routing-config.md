[IBKR TWS API](../../SKILL.md) · [Protobuf Reference](index.md) · [10 OrdersSmartRoutingConfig](10-order-smart-routing-config.md)


## OrdersSmartRoutingConfig

**seekPriceImprovement**: `Boolean` – Enables the smart routing algorithm to actively search for better execution prices across available market venues.

**doNotRouteToDarkPools**: `Boolean` – Prevents the smart routing system from directing orders to dark pool venues for execution.

```generic
ordersSmartRoutingConfigProto.seekPriceImprovement = True
ordersSmartRoutingConfigProto.doNotRouteToDarkPools = True
```
