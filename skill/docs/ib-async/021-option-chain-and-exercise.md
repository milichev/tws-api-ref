### Option Chain and Exercise

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Functions for retrieving option chains and exercising options. `reqSecDefOptParams` gets the option chain for a given underlying, and `exerciseOptions` allows for exercising or letting options lapse. Both are blocking.

```python
def reqSecDefOptParams(_underlyingSymbol_ , _futFopExchange_ , _underlyingSecType_ , _underlyingConId_):
    """
    Get the option chain.
    This method is blocking.
    https://interactivebrokers.github.io/tws-api/options.html 

    Parameters:
        underlyingSymbol (str): Symbol of underlier contract.
        futFopExchange (str): Exchange (only for `FuturesOption`, otherwise leave blank).
        underlyingSecType (str): The type of the underlying security, like ‘STK’ or ‘FUT’.
        underlyingConId (int): conId of the underlying contract.
    Return type:
        list[OptionChain]
    """
    pass

def exerciseOptions(_contract_ , _exerciseAction_ , _exerciseQuantity_ , _account_ , _override_):
    """
    Exercise an options contract.
    https://interactivebrokers.github.io/tws-api/options.html 

    Parameters:
        contract (Contract): The option contract to be exercised.
        exerciseAction (int):
            * 1 = exercise the option
            * 2 = let the option lapse
        exerciseQuantity (int): Number of contracts to be exercised.
        account (str): Destination account.
        override (int):
    """
    pass
```
