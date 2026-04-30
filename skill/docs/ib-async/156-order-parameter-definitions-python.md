### Order Parameter Definitions (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

This snippet defines various order parameters used in the IB API. It includes settings for order duration, quantity constraints, pricing adjustments, trailing stops, and more. These parameters are crucial for customizing order behavior and execution.

```python
goodTillDate: str = ''
rule80A: str = ''
allOrNone: bool = False
minQty: int = 2147483647
percentOffset: float | Decimal = 1.7976931348623157e+308
overridePercentageConstraints: bool = False
trailStopPrice: float | Decimal = 1.7976931348623157e+308
trailingPercent: float | Decimal = 1.7976931348623157e+308
faGroup: str = ''
faProfile: str = ''
faMethod: str = ''
faPercentage: str = ''
designatedLocation: str = ''
openClose: str = 'O'
origin: int = 0
shortSaleSlot: int = 0
exemptCode: int = -1
discretionaryAmt: float = 0.0
eTradeOnly: bool = False
firmQuoteOnly: bool = False
nbboPriceCap: float | Decimal = 1.7976931348623157e+308
optOutSmartRouting: bool = False
auctionStrategy: int = 0
startingPrice: float | Decimal = 1.7976931348623157e+308
stockRefPrice: float | Decimal = 1.7976931348623157e+308
delta: float | Decimal = 1.7976931348623157e+308
stockRangeLower: float | Decimal = 1.7976931348623157e+308
stockRangeUpper: float | Decimal = 1.7976931348623157e+308
randomizePrice: bool = False
randomizeSize: bool = False
volatility: float | Decimal = 1.7976931348623157e+308
volatilityType: int = 2147483647
deltaNeutralOrderType: str = ''
deltaNeutralAuxPrice: float | Decimal = 1.7976931348623157e+308
deltaNeutralConId: int = 0
deltaNeutralSettlingFirm: str = ''
deltaNeutralClearingAccount: str = ''
deltaNeutralClearingIntent: str = ''
deltaNeutralOpenClose: str = ''
deltaNeutralShortSale: bool = False
deltaNeutralShortSaleSlot: int = 0
deltaNeutralDesignatedLocation: str = ''
continuousUpdate: bool = False
referencePriceType: int = 2147483647
basisPoints: float | Decimal = 1.7976931348623157e+308
basisPointsType: int = 2147483647
scaleInitLevelSize: int = 2147483647
scaleSubsLevelSize: int = 2147483647
scalePriceIncrement: float | Decimal = 1.7976931348623157e+308
scalePriceAdjustValue: float | Decimal = 1.7976931348623157e+308
scalePriceAdjustInterval: int = 2147483647
scaleProfitOffset: float | Decimal = 1.7976931348623157e+308
scaleAutoReset: bool = False
scaleInitPosition: int = 2147483647
scaleInitFillQty: int = 2147483647
scaleRandomPercent: bool = False
scaleTable: str = ''
hedgeType: str = ''
hedgeParam: str = ''
account: str = ''
settlingFirm: str = ''
clearingAccount: str = ''
clearingIntent: str = ''
algoStrategy: str = ''
algoParams: list[TagValue]
smartComboRoutingParams: list[TagValue]
algoId: str = ''
whatIf: bool = False
notHeld: bool = False
solicited: bool = False
modelCode: str = ''
orderComboLegs: list[OrderComboLeg]
orderMiscOptions: list[TagValue]
referenceContractId: int = 0
peggedChangeAmount: float = 0.0
isPeggedChangeAmountDecrease: bool = False
referenceChangeAmount: float = 0.0
referenceExchangeId: str = ''
adjustedOrderType: str = ''
triggerPrice: float | Decimal | None = 1.7976931348623157e+308
adjustedStopPrice: float | Decimal = 1.7976931348623157e+308
adjustedStopLimitPrice: float | Decimal = 1.7976931348623157e+308
adjustedTrailingAmount: float | Decimal = 1.7976931348623157e+308
adjustableTrailingUnit: int = 0
lmtPriceOffset: float | Decimal = 1.7976931348623157e+308
conditions: list[OrderCondition]
conditionsCancelOrder: bool = False
conditionsIgnoreRth: bool = False
extOperator: str = ''
softDollarTier: SoftDollarTier
cashQty: float | Decimal = 1.7976931348623157e+308
mifid2DecisionMaker: str = ''
mifid2DecisionAlgo: str = ''
mifid2ExecutionTrader: str = ''
mifid2ExecutionAlgo: str = ''
dontUseAutoPriceForHedge: bool = False
isOmsContainer: bool = False
discretionaryUpToLimitPrice: bool = False
```
