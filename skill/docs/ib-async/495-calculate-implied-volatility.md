### Calculate Implied Volatility

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Calculates the implied volatility of an option given its price and the underlier's price. This is a blocking method that takes a Contract object, option price, underlier price, and optional parameters. It returns an OptionComputation object.

```python
def calculateImpliedVolatility(
        self,
        contract: Contract,
        optionPrice: float,
        underPrice: float,
        implVolOptions: list[TagValue] = [],
    ) -> OptionComputation:
        """
        Calculate the volatility given the option price.

        Args:
            contract: Option contract.
            optionPrice: Option price to use in calculation.
            underPrice: Price of the underlier to use in calculation
            implVolOptions: Unknown
        """
        return self._run(
            self.calculateImpliedVolatilityAsync(
                contract, optionPrice, underPrice, implVolOptions
            )
        )
```
