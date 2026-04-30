### Request Option Chain Parameters

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves the option chain for a given underlying security. This blocking method requires the underlying symbol, future/option exchange, underlying security type, and underlying contract ID. It returns a list of OptionChain objects.

```python
def reqSecDefOptParams(
        self,
        underlyingSymbol: str,
        futFopExchange: str,
        underlyingSecType: str,
        underlyingConId: int,
    ) -> list[OptionChain]:
        """
        Get the option chain.

        Args:
            underlyingSymbol: Symbol of underlier contract.
            futFopExchange: Exchange (only for ``FuturesOption``, otherwise
                leave blank).
            underlyingSecType: The type of the underlying security, like
                'STK' or 'FUT'.
            underlyingConId: conId of the underlying contract.
        """
        return self._run(
            self.reqSecDefOptParamsAsync(
                underlyingSymbol, futFopExchange, underlyingSecType, underlyingConId
            )
        )
```
