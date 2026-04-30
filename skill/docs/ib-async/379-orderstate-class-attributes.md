### OrderState Class Attributes

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Defines the attributes for the OrderState class, which captures the state of an order. It includes fields for status, margin details before and after changes (initMargin, maintMargin, equityWithLoan), commission information, warning text, and completion timestamps and status.

```python
_class _ib_async.order.OrderState(_status =''_, _initMarginBefore =''_, _maintMarginBefore =''_, _equityWithLoanBefore =''_, _initMarginChange =''_, _maintMarginChange =''_, _equityWithLoanChange =''_, _initMarginAfter =''_, _maintMarginAfter =''_, _equityWithLoanAfter =''_, _commission =1.7976931348623157e+308_, _minCommission =1.7976931348623157e+308_, _maxCommission =1.7976931348623157e+308_, _commissionCurrency =''_, _warningText =''_, _completedTime =''_, _completedStatus =''_)[source]
     

status _: `str`__ = ''_
     

initMarginBefore _: `str`__ = ''_
     

maintMarginBefore _: `str`__ = ''_
     

equityWithLoanBefore _: `str`__ = ''_
     

initMarginChange _: `str`__ = ''_
     

maintMarginChange _: `str`__ = ''_
     

equityWithLoanChange _: `str`__ = ''_
     

initMarginAfter _: `str`__ = ''_
     

maintMarginAfter _: `str`__ = ''_
     

equityWithLoanAfter _: `str`__ = ''_
     

commission _: `float`__ = 1.7976931348623157e+308_
     

minCommission _: `float`__ = 1.7976931348623157e+308_
     

maxCommission _: `float`__ = 1.7976931348623157e+308_
     

commissionCurrency _: `str`__ = ''_
     

warningText _: `str`__ = ''_
     

completedTime _: `str`__ = ''_
     

completedStatus _: `str`__ = ''_
```
