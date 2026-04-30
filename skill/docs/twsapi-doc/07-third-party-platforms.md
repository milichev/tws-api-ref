[IBKR TWS API](../../SKILL.md) · [TWS API Documentation](index.md) · [07 Third Party API Platforms](07-third-party-platforms.md)


## Third Party API Platforms

Third party software vendors make use of the TWS’ programming interface (API) to integrate their platforms with Interactive Broker’s. Thanks to the TWS API, well known platforms such as Ninja Trader or Multicharts can interact with the TWS to fetch market data, place orders and/or manage account and portfolio information.

**It is important to keep in mind that most third party API platforms are not compatible with all IBKR account structures**. Always check first with the software vendor before opening a specific account type or converting an IBKR account type. For instance, many third party API platforms such as NinjaTrader and TradeNavigator are **not** compatible with IBKR linked account structures, so it is highly recommended to first check with the third party vendor before linking your IBKR accounts.

An ongoing list of common [Third Party Connections](https://www.interactivebrokers.com/campus/ibkr-api-page/third-party-connections/) are available within our documentation. This resource will also link out to connection guides detailing how a user can connect with a given platform.

A non-exhaustive list of third party platforms implementing our interface can be found in our [Investor’s Marketplace](https://www.interactivebrokers.com/Universal/servlet/MarketPlace.MarketPlaceServlet). As stated in the marketplace, the vendors’ list is in no way a recommendation from Interactive Brokers. If you are interested in a given platform that is not listed, please contact the platform’s vendor directly for further information.

### Non-Standard TWS API Languages and Packages

Noted in further depth through our [Architecture](../undefined/index.md) section, the TWS API is built using standardized socket protocol. As a result, users may develop or access alternative third party modules and classes in place of Interactive Brokers default modules through the [TWS API Download](../undefined/index.md). While the API is adaptable for client implementations, please understand that **Interactive Brokers API Support cannot provide support for non-standard implementations.** While we can review your [API logs](../undefined/index.md) to affirm what content is being submitted, any further assistance will need to take place with the module’s original developer.

_This is neither an endorsement or admonishment of third party implementations. Interactive Brokers will always advise clients use our direct TWS API implementation whenever possible._

### ib\_insync and ib\_async

While Interactive Brokers’ API Support is aware of the ib\_insync package, we [cannot provide coding assistance](../undefined/index.md) for the package.

With that in mind, users should be aware that the original ib\_insync package is built using a legacy release of the TWS API and is no longer updated. Users who wish to implement the ib\_insync structure using supported releases of the Trader Workstation should migrate to the [ib\_async package](https://pypi.org/project/ib_async/), which is a modernized implementation of the package by one of its original developers.

_This is neither an endorsement or admonishment of either the ib\_insync or ib\_async library. Interactive Brokers will always advise clients use our direct TWS API implementation whenever possible._
