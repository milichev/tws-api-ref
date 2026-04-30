[IBKR TWS API](../../SKILL.md) · [TWS API Reference](index.md) · [13 EReaderSignal Interface Reference](13-ers-ref.md)


## EReaderSignal Interface Reference

Notifies the thread reading information from the TWS whenever there are messages ready to be consumed. Not currently used in Python API.

### Public Member Functions

| Name | Type | Description |
| --- | --- | --- |
| issueSignal () | void | Issues a signal to the consuming thread when there are things to be consumed. |
| waitForSignal () | void | Makes the consuming thread waiting until a signal is issued. |
