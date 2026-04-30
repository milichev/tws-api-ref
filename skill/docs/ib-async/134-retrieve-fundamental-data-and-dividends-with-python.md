### Retrieve fundamental data and dividends with Python

Source: https://ib-api-reloaded.github.io/ib_async/_sources/recipes.rst.txt

Fetches market data specifically for dividends and fundamental ratios using ticker requests.

```python
# Dividends
contract = Stock('INTC', 'SMART', 'USD')
ticker = ib.reqMktData(contract, '456')
ib.sleep(2)
print(ticker.dividends)

# Fundamental ratios
ticker = ib.reqMktData(contract, '258')
ib.sleep(2)
print(ticker.fundamentalRatios)
```
