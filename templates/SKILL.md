---
name: ibkr-tws-api
description: Reference for Python development with IBKR TWS/Gateway API and ib_insync/ib_async.
---

# IBKR TWS API

## When to use

- Developing Python apps via `ibapi` or `ib_async` (ib_insync).
- Validating `EClient` requests or `EWrapper` callbacks.
- Checking contract definitions, order types, or error codes.

## How to use

- **Async Pattern:** TWS is asynchronous. Requests trigger separate callbacks.
- **ib_async:** Prefer this for `asyncio` workflows over raw `ibapi`.
- **Reference:** Use the TOC below to find specific method parameters or patterns.

## Contents

{{TOC}}
