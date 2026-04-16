## Contracts (Financial Instruments)

An IBApi.Contract object represents trading instruments such as a stocks, futures or options. Every time a new request that requires a contract (i.e. market data, order placing, etc.) is sent to TWS, the platform will try to match the provided contract object with a single candidate.

### The Contract Object

The Contract object is an object used throughout the TWS API to define the target of your requests. Contract objects will be used for market data, portfolios, orders, executions, and even some news request. This is the staple structure used for all of the TWS API.

In all contracts, the minimum viable structure requires at least a conId and exchange; or a symbol, secType, exchange, primaryExchange, and currency. Derivatives will require additional fields, such as lastTradeDateOrExpiration, tradingClass, multiplier, strikes, and so on.

The values to the right represent the most common Contract values to pass for complete contracts. For a more comprehensive list of contract structures, please see [the Contracts page](https://www.interactivebrokers.com/campus/ibkr-api-page/contracts/).

#### Contract()

**ConId:** int. Identifier to specify an exact contract.

**Symbol:** String. Ticker symbol of the underlying instrument.

**SecType:** String. Security type of the traded instrument.

**Exchange:** String. Exchange for which data or trades should be routed.

**PrimaryExchange:** String. Primary listing exchange of the instrument.

**Currency:** String. Base currency the instrument is traded on.

**LastTradeDateOrContractMonth:** String. For derivatives, the expiration date of the contract.

**Strike:** double. For derivatives, the strike price of the instrument.

**Right:** String. For derivatives, the right (P/C) of the instrument.

**TradingClass:** String. For derivatives, the trading class of the instrument.  
May be used to indicate between a monthly or a weekly contract.

Given additional structures for contracts are ever evolving, it is recommended to review the relevant Contract class in your programming language for a comprehensive review of what fields are available.

[Contract Class Reference](https://www.interactivebrokers.com/campus/ibkr-api-page/twsapi-ref/#contract-ref)

### Finding Contract Details in Trader Workstation

If there is more than one contract matching the same description, TWS will return an error notifying you there is an ambiguity. In these cases the TWS needs further information to narrow down the list of contracts matching the provided description to a single element.

The best way of finding a contract’s description is within TWS itself. Within TWS, you can easily check a contract’s description either by double clicking it or through the Financial Instrument Info -> Description menu, which you access by right-clicking a contract in TWS:

![Right click menu containing Financial Instrument Info.](./images/financial_instr-description.png)

The description will then appear:

Note: you can see the extended contract details by choosing Contract Info -> Details. This option will open a web page showing all available information on the contract.

![Contract Description Window](./images/contract_description.png)

Whenever a contract description is provided via the TWS API, the TWS will try to match the given description to a single contract. This mechanism allows for great flexibility since it gives the possibility to define the same contract in multiple ways.

The simplest way to define a contract is by providing its symbol, security type, currency, exchange, and primary exchange. The vast majority of stocks, CFDs, Indexes or FX pairs can be uniquely defined through these four attributes. More complex contracts such as options and futures require some extra information due to their nature. Below are several examples for different types of instruments.

### Contract Details

Complete details about a contract in IB’s database can be retrieved using the function [IBApi.EClient.reqContractDetails](#request-contract-details). This includes information about a contract’s conID, symbol, local symbol, currency, etc. which is returned in a IBApi.ContractDetails object. reqContractDetails takes as an argument a Contract object which may uniquely match one contract, and unlike other API functions it can also take a Contract object which matches multiple contracts in IB’s database. When there are multiple matches, they will each be returned individually to the function [IBApi::EWrapper::contractDetails.](#receive-contract-details)

Request for Bond details will be returned to [IBApi::EWrapper::bondContractDetails](#receive-bond-details) instead. Because of bond market data license restrictions, there are only a few available fields to be returned in a bond contract description, namely the minTick, exchange, and short name.

Notes:

*   Invoking reqContractDetails with a Contract object which has currency = USD will only return US contracts, even if there are non-US instruments which have the USD currency.
*   Derivative contract requests are internally paced. Attempts to query Options, Warrants, or Futures Options must contain their maximum level of detail such as Symbol, SecType, Exchange, Currency, Strike, Right, LastTradeDateOrExpiration, and potentially TradingClass.  
    

Another function of IBApi::EClient::reqContractDetails is to request the trading schedule of an instrument via the TradingHours and LiquidHours fields. The corresponding timeZoneId field will then indicate the time zone for the trading schedule of the instrument. TWS sends these timeZoneId strings to the API from the schedule responses as-is, and may not exactly match the time zones displayed in the TWS contract description.

Possible timeZoneId values are:

*   Europe/Riga
*   Australia/NSW
*   Europe/Warsaw
*   US/Pacific
*   Europe/Tallinn
*   Japan
*   US/Eastern
*   Europe/London
*   Africa/Johannesburg
*   Israel
*   Europe/Vilnius
*   MET
*   Europe/Helsinki
*   US/Central
*   Europe/Budapest
*   Asia/Calcutta
*   Hongkong
*   Europe/Moscow
*   GMT

### Request Contract Details

#### EClient.reqContractDetails (

**reqId:** int. Request identifier to track data.

**contract:** ContractDetails. the contract used as sample to query the available contracts.  
Typically contains at least the Symbol, SecType, Exchange, and Currency.  
)

Upon requesting EClient.reqContractDetails, all contracts matching the requested [Contract Object](https://www.interactivebrokers.com/campus/ibkr-api-page/twsapi-ref/#contract-ref) will be returned to [EWrapper.contractDetails](https://www.interactivebrokers.com/campus/ibkr-api-page/twsapi-doc/#receive-contract-details) or [EWrapper.bondContractDetails](https://www.interactivebrokers.com/campus/ibkr-api-page/twsapi-doc/#receive-bond-details).

self.reqContractDetails(reqId, contract)

### Receive Contract Details

#### EWrapper.contractDetails (

**reqId:** int. Request identifier to track data.

**contract:** ContractDetails. Contains the full contract object contents including all information about a specific traded instrument.  
)

Receives the full contract’s definitions This method will return all contracts matching the requested via EClientSocket::reqContractDetails. For example, one can obtain the whole option chain with it.

def contractDetails(self, reqId: int, contractDetails: ContractDetails):
  print(reqId, contractDetails)

#### EWrapper.contractDetailsEnd (

**reqId:** int. Request identifier to track data.  
)

After all contracts matching the request were returned, this method will mark the end of their reception.

def contractDetailsEnd(self, reqId: int):
	print("ContractDetailsEnd. ReqId:", reqId)

### Receive Bond Details

#### EWrapper.bondContractDetails (

**reqId:** int. Request identifier to track data.

**contract:** ContractDetails. Contains the full contract object contents including all information about a specific traded instrument.  
)

Delivers the Bond contract data after this has been requested via reqContractDetails.

def bondContractDetails(self, reqId: int, contractDetails: ContractDetails):
  printinstance(reqId, contractDetails)

### Option Chains

The option chain for a given security can be returned using the function [EClient.reqContractDetails](https://www.interactivebrokers.com/campus/ibkr-api-page/twsapi-doc/#request-contract-details). If an option contract is incompletely defined (for instance with the strike undefined) and used as an argument to [EClient.reqContractDetails](https://www.interactivebrokers.com/campus/ibkr-api-page/twsapi-doc/#request-contract-details), a list of all matching option contracts will be returned.

One limitation of this technique is that the return of option chains will be throttled and take a longer time the more ambiguous the contract definition. The function [EClient.reqSecDefOptParams](https://www.interactivebrokers.com/campus/ibkr-api-page/twsapi-doc/#request-opt-chain) was introduced that does not have the throttling limitation.

*   It is not recommended to use [EClient.reqContractDetails](https://www.interactivebrokers.com/campus/ibkr-api-page/twsapi-doc/#request-contract-details) to receive complete option chains on an underlying, e.g. all combinations of strikes/rights/expiries.
*   For very large option chains returned from [EClient.reqContractDetails](https://www.interactivebrokers.com/campus/ibkr-api-page/twsapi-doc/#request-contract-details), unchecking the setting in TWS Global Configuration at API -> Settings -> “Expose entire trading schedule to the API” will decrease the amount of data returned per option and help to return the contract list more quickly.

[EClient.reqSecDefOptParams](https://www.interactivebrokers.com/campus/ibkr-api-page/twsapi-doc/#request-opt-chain) returns a list of expiries and a list of strike prices. In some cases, it is possible there are combinations of strike and expiry that would not give a valid option contract.

### Request Option Chains

#### EClient.reqSecDefOptParams (

**reqId:** int. The ID chosen for the request

**underlyingSymbol:** String. Contract symbol of the underlying.

**futFopExchange:** String. The exchange on which the returned options are trading. Can be set to the empty string “” for all exchanges.

**underlyingSecType:** String. The type of the underlying security, i.e. STK

**underlyingConId:** int. The contract ID of the underlying security.  
)

Requests security definition option parameters for viewing a contract’s option chain.

self.reqSecDefOptParams(0, "IBM", "", "STK", 8314)

### Receive Option Chains

#### EWrapper.securityDefinitionOptionParameter (

**reqId:** int. ID of the request initiating the callback.

**underlyingConId:** int. The conID of the underlying security.

**tradingClass:** String. The option trading class.

**multiplier:** String. The option multiplier.

**exchange:** String. Exchange for which the derivative is hosted.

**expirations:** HashSet. A list of the expiries for the options of this underlying on this exchange.

**strikes:** HashSet. A list of the possible strikes for options of this underlying on this exchange.  
)

Returns the option chain for an underlying on an exchange specified in reqSecDefOptParams There will be multiple callbacks to securityDefinitionOptionParameter if multiple exchanges are specified in reqSecDefOptParams

def securityDefinitionOptionParameter(self, reqId: int, exchange: str, underlyingConId: int, tradingClass: str, multiplier: str, expirations: SetOfString, strikes: SetOfFloat):
  print("SecurityDefinitionOptionParameter.", "ReqId:", reqId, "Exchange:", exchange, "Underlying conId:", underlyingConId, "TradingClass:", tradingClass, "Multiplier:", multiplier, "Expirations:", expirations, "Strikes:", strikes)

### Stock Symbol Search

The function IBApi::EClient::reqMatchingSymbols is available to search for stock contracts. The input can be either the first few letters of the ticker symbol, or for longer strings, a character sequence matching a word in the security name. For instance to search for the stock symbol ‘IBKR’, the input ‘I’ or ‘IB’ can be used, as well as the word ‘Interactive’. Up to 16 matching results are returned.

There must be an interval of at least 1 second between successive calls to reqMatchingSymbols

Matching stock contracts are returned to IBApi::EWrapper::symbolSamples with information about types of derivative contracts which exist (warrants, options, dutch warrants, futures).

### Request Stock Contract Search

#### EClient.reqMatchingSymbols ( 

**reqId:** int. Request identifier used to track data.

**pattern:** String. Either start of ticker symbol or (for larger strings) company name.  
)

Requests matching stock symbols.

self.reqMatchingSymbols(reqId, "IBM")

### Receive Searched Stock Contract

#### EWrapper.symbolSamples (

**reqID:** int. Request identifier used to track data.

**contractDescription:** ContractDescription\[\]. Provide an array of contract objects matching the requested descriptoin.  
)

Returns array of sample contract descriptions

def symbolSamples(self, reqId: int, contractDescriptions: ListOfContractDescription):
	print("Symbol Samples. Request Id: ", reqId)
	for contractDescription in contractDescriptions:
		derivSecTypes = ""
		for derivSecType in contractDescription.derivativeSecTypes:
			derivSecTypes += " "
			derivSecTypes += derivSecType
			print("Contract: conId:%s, symbol:%s, secType:%s primExchange:%s, "
				"currency:%s, derivativeSecTypes:%s, description:%s, issuerId:%s" % (
				contractDescription.contract.conId,
				contractDescription.contract.symbol,
				contractDescription.contract.secType,
				contractDescription.contract.primaryExchange,
				contractDescription.contract.currency, derivSecTypes,
				contractDescription.contract.description,
				contractDescription.contract.issuerId))