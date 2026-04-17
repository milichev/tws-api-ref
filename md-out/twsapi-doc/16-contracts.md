*   [TWS API](../index.md)
*   [TWS API Documentation](index.md)
*   [16 Contracts (Financial Instruments)](16-contracts.md)

## Contracts (Financial Instruments)

An IBApi.Contract object represents trading instruments such as a stocks, futures or options. Every time a new request that requires a contract (i.e. market data, order placing, etc.) is sent to TWS, the platform will try to match the provided contract object with a single candidate.