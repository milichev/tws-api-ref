### Order Class Attributes and State Constants

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Defines the attributes for the Order class, such as permId, parentId, lastFillPrice, clientId, whyHeld, and mktCapPrice. It also lists class variables representing various order states like PendingSubmit, Submitted, Cancelled, and Filled, along with sets for DoneStates, ActiveStates, WaitingStates, and WorkingStates.

```python
permId_: `int`__ = 0_

parentId _: `int`__ = 0_

lastFillPrice _: `float`__ = 0.0_

clientId _: `int`__ = 0_

whyHeld _: `str`__ = ''_

mktCapPrice _: `float`__ = 0.0_

_property _total _: float_
    
Helper property to return the total size of this requested order. 

PendingSubmit _: `ClassVar`[`str`]__ = 'PendingSubmit'_
     
PendingCancel _: `ClassVar`[`str`]__ = 'PendingCancel'_
     
PreSubmitted _: `ClassVar`[`str`]__ = 'PreSubmitted'_
     
Submitted _: `ClassVar`[`str`]__ = 'Submitted'_
     
ApiPending _: `ClassVar`[`str`]__ = 'ApiPending'_
     
ApiCancelled _: `ClassVar`[`str`]__ = 'ApiCancelled'_
     
ApiUpdate _: `ClassVar`[`str`]__ = 'ApiUpdate'_
     
Cancelled _: `ClassVar`[`str`]__ = 'Cancelled'_
     
Filled _: `ClassVar`[`str`]__ = 'Filled'_
     
Inactive _: `ClassVar`[`str`]__ = 'Inactive'_
     
ValidationError _: `ClassVar`[`str`]__ = 'ValidationError'_
     
DoneStates _: `ClassVar`[`frozenset`[`str`]]__ = frozenset({'ApiCancelled', 'Cancelled', 'Filled', 'Inactive'})_
     
ActiveStates _: `ClassVar`[`frozenset`[`str`]]__ = frozenset({'ApiPending', 'ApiUpdate', 'PendingSubmit', 'PreSubmitted', 'Submitted', 'ValidationError'})_
     
WaitingStates _: `ClassVar`[`frozenset`[`str`]]__ = frozenset({'ApiPending', 'PendingSubmit', 'PreSubmitted'})_
     
WorkingStates _: `ClassVar`[`frozenset`[`str`]]__ = frozenset({'ApiUpdate', 'Submitted', 'ValidationError'})_
```
