### Option Computation Calculations

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Provides methods for calculating option-related values. `calculateImpliedVolatility` computes implied volatility given option and underlying prices, while `calculateOptionPrice` computes the option price given volatility and underlying price. Both are blocking methods.

```python
def calculateImpliedVolatility(_contract_ , _optionPrice_ , _underPrice_ , _implVolOptions =[]_):
    """
    Calculate the volatility given the option price.
    This method is blocking.
    https://interactivebrokers.github.io/tws-api/option_computations.html 

    Parameters:
        contract (Contract): Option contract.
        optionPrice (float): Option price to use in calculation.
        underPrice (float): Price of the underlier to use in calculation
        implVolOptions (list[TagValue]): Unknown
    Return type:
        OptionComputation
    """
    pass

def calculateOptionPrice(_contract_ , _volatility_ , _underPrice_ , _optPrcOptions =[]_):
    """
    Calculate the option price given the volatility.
    This method is blocking.
    https://interactivebrokers.github.io/tws-api/option_computations.html 

    Parameters:
        contract (Contract): Option contract.
        volatility (float): Option volatility to use in calculation.
        underPrice (float): Price of the underlier to use in calculation
        implVolOptions: Unknown
    Return type:
        OptionComputation
    """
    pass
```
