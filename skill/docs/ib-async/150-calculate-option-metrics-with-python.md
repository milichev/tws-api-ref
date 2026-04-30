### Calculate option metrics with Python

Source: https://ib-api-reloaded.github.io/ib_async/_sources/recipes.rst.txt

Uses the ib-async library to calculate implied volatility or theoretical option prices based on underlying price and other parameters.

```python
option = Option('EOE', '20171215', 490, 'P', 'FTA', multiplier=100)

calc = ib.calculateImpliedVolatility(
    option, optionPrice=6.1, underPrice=525)
print(calc)

calc = ib.calculateOptionPrice(
    option, volatility=0.14, underPrice=525)
print(calc)
```
