### Calculate Option Price

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Calculates the theoretical price of an option given its volatility and the underlier's price. This blocking method requires a Contract object, volatility, underlier price, and optional parameters. It returns an OptionComputation object.

```python
def calculateOptionPrice(
        self,
        contract: Contract,
        volatility: float,
        underPrice: float,
        optPrcOptions: list[TagValue] = [],
    ) -> OptionComputation:
        """
        Calculate the option price given the volatility.

        Args:
            contract: Option contract.
            volatility: Option volatility to use in calculation.
            underPrice: Price of the underlier to use in calculation
            implVolOptions: Unknown
        """
        return self._run(
            self.calculateOptionPriceAsync(
                contract, volatility, underPrice, optPrcOptions
            )
        )
```
