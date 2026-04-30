[IBKR TWS API](../../SKILL.md) · [TWS API Reference](index.md) · [16 ExecutionCondition Class Reference](16-execcondition-ref.md)


## ExecutionCondition Class Reference

This class represents a condition requiring a specific execution event to be fulfilled. Orders can be activated or canceled if a set of given conditions is met. An ExecutionCondition is met whenever a trade occurs on a certain product at the given exchange.

| Name | Type | Description |
| --- | --- | --- |
| Exchange | string | Exchange where the symbol is being monitored. |
| SecType | string | Asset type being monitored. |
| Symbol | string | Instrument’s symbol. |

Inheritance diagram for ExecutionCondition:

![](./images/classIBApi_1_1ExecutionCondition.png)

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
