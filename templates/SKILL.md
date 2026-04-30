---
name: ibkr-tws-api
description: Reference for Python development with IBKR TWS/Gateway API and ib_async.
---

# IBKR TWS/Gateway API

## When to use

- Developing Python apps via `ibapi` or `ib_async`.
- Validating `EClient` requests or `EWrapper` callbacks.
- Checking contract definitions, ticker types, order types, or error codes.
- Setting up market data subscriptions, options chains, account and portfolio management.

## How to use

- **Async Pattern:** TWS is asynchronous. Requests trigger separate callbacks.
- **ib_async:** Prefer this for `asyncio` workflows. This package is a wrapper around `ibapi`.
- **Reference:** Use the TOC below to find specific method parameters or patterns.

## Contents

{{> toc-level-md children}}
