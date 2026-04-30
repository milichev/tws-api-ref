### Qualify Contract Details Asynchronously

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously retrieves and qualifies details for a list of contracts. It handles ambiguous contract requests by either returning None or a list of possible contracts if `returnAll` is True. It also includes a fix for IBKR returning incorrect contract types.

```python
async def qualifyContractsAsync(
        self, *contracts: Contract, returnAll: bool = False
    ) -> list[Contract | list[Contract | None] | None]:
        """Looks up all contract details, but only returns matching Contract objects.

        If 'returnAll' is True, instead of returning 'None' on an ambiguous contract request,
        the return slot will have a list of the matching contracts. Previously the conflicts
        were only sent to the log, which isn't useful if you are logging to a file and not watching
        immediately.

        Note: return value has elements in same position as input request. If a contract
              cannot be qualified (bad values, ambiguous), the return value for the contract
              position in the result is None.
        """
        detailsLists = await asyncio.gather(
            *[self.reqContractDetailsAsync(c) for c in contracts]
        )

        # self._logger.warning(f"Got details: {detailsLists=}")

        result: list[Contract | list[Contract | None] | None] = []
        for contract, detailsList in zip(contracts, detailsLists):
            if not detailsList:
                self._logger.warning(f"Unknown contract: {contract}")
                result.append(None)
            elif len(detailsList) > 1:
                # BUG FIX:
                #  - IBKR is returning EC _and_ FOP contracts for only FOP requests,
                #    which is clearly incorrect, so now if an input request has `secType`
                #    defined, we only return matching `secType` contracts.
                if contract.secType:
                    possibles = [
                        details.contract
                        for details in detailsList
                        if contract.secType == details.contract.secType  # type: ignore
                    ]

                    # if our match instrument type filter resolved to only _one_ matching
                    # contract, then we found a single usable result to add.
                    if len(possibles) == 1:
                        c = possibles[0]
                        if contract.exchange == "SMART":
                            # Allow contracts to become more generic if SMART requested as input
                            c.exchange = contract.exchange  # type: ignore

                        util.dataclassUpdate(contract, c)
                        result.append(contract)
                        continue
                else:
                    # else, return all matches if no specific secType requested
                    possibles = [details.contract for details in detailsList]

                self._logger.warning(
                    f"Ambiguous contract: {contract}, possibles are {possibles}"
                )

                if returnAll:
                    result.append(possibles)
                else:
                    result.append(None)
            else:
                c = detailsList[0].contract
                assert c
                if contract.exchange == "SMART":
                    # overwriting 'SMART' exchange can create invalid contract
                    c.exchange = contract.exchange

                util.dataclassUpdate(contract, c)
                result.append(contract)

        return result
```
