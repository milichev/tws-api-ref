### Exercise Options Contract

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Executes an option contract exercise. This function requires the option contract details, exercise action (exercise or lapse), quantity, account, and an override flag. It sends the exercise request to the client.

```python
def exerciseOptions(
        self,
        contract: Contract,
        exerciseAction: int,
        exerciseQuantity: int,
        account: str,
        override: int,
    ):
        """
        Exercise an options contract.

        Args:
            contract: The option contract to be exercised.
            exerciseAction:
                * 1 = exercise the option
                * 2 = let the option lapse
            exerciseQuantity: Number of contracts to be exercised.
            account: Destination account.
            override:
                * 0 = no override
                * 1 = override the system's natural action
        """
        reqId = self.client.getReqId()
        self.client.exerciseOptions(
            reqId, contract, exerciseAction, exerciseQuantity, account, override
        )
```
