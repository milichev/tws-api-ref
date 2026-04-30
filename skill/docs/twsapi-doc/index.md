<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>TWS API Documentation</title>
    <style>
body {
  font-family: sans-serif;
  line-height: 1.6;
  padding: 2rem;
  color: #1a1a1a;
  max-width: 900px;
  margin: auto;
}
pre {
  background: #f6f8fa;
  padding: 1rem;
  border-radius: 6px;
  overflow-x: auto;
  border: 1px solid #d0d7de;
}
code {
  font-family: monospace;
  font-size: 85%;
}
img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 1rem 0;
}
table {
  border-collapse: collapse;
  width: 100%;
  margin: 1rem 0;
}
th,
td {
  border: 1px solid #d0d7de;
  padding: 8px 12px;
  text-align: left;
}
th {
  background: #f6f8fa;
}

.toc {
  ul {
    list-style: none;
    padding-inline-start: 0;
  }

  li ul {
    margin-inline-start: 40px;
  }

  .toc-text {
    display: flex;
    align-items: center;
    gap: 0.3rem;

    a {
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }
  }
}

.breadcrumb {
  display: flex;
  list-style: none;
  padding: 0 0 1em 0;
  margin: 0;
  font-size: 0.6rem;
  flex-wrap: wrap;
  border-bottom: 1px solid #bbb;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
  white-space: nowrap;

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
}

.breadcrumb-item:not(:last-child)::after {
  content: "›";
  margin: 0 0.25rem;
}

.breadcrumb-item:last-child a {
  font-weight: bold;
}

.breadcrumb-item:last-child a:hover {
  text-decoration: none;
}

</style>
  </head>
  <body>
      [../index.html](IBKR TWS API) -> 
      [index.md](TWS API Documentation) -> 
    
    # TWS API Documentation
    
    - [01 Introduction](./01-api-introduction.md)
    
    - [02 Notes &amp; Limitations](./02-notes-and-limitations.md)
    - [02.01 Requirements](./02.01-tws-api-requirements.html)
    
    - [02.02 Supported Two Factor Authentication (2FA)](./02.02-supported-2fa.html)
    
    - [02.03 Limitations](./02.03-limitations.html)
    - [02.03.01 C# for MacOS](./02.03.01-csharp-macos.html)
    
    - [02.03.02 C++ DLLs and Static Linking](./02.03.02-cpp-static-linking.html)
    
    - [02.03.03 Canadian Residents Restricted From Programmatically Trading Canadian Products](./02.03.03-canadian-trading.html)
    
    - [02.03.04 Paper Trading](./02.03.04-paper-trading-limitations.html)
    
    
    
    - [03 Download TWS or IB Gateway](./03-tws-download.md)
    - [03.01 TWS Online or Offline Version?](./03.01-tws-offline.html)
    
    
    - [04 TWS Settings](./04-tws-settings.md)
    - [04.01 TWS Configuration For API Use](./04.01-tws-config-api.html)
    
    - [04.02 Best Practice: Configure TWS / IB Gateway](./04.02-tws-config.html)
    - [04.02.01 &quot;Never Lock Trader Workstation&quot; Setting](./04.02.01-nltws.html)
    
    - [04.02.02 Memory Allocation](./04.02.02-bp-memory-alloc.html)
    
    - [04.02.03 Daily &amp; Weekly Reauthentication](./04.02.03-bp-reauthenticate.html)
    
    - [04.02.04 Order Precautions](./04.02.04-bp-order-precautions.html)
    
    - [04.02.05 Connected IB Server Location in TWS](./04.02.05-bp-ib-servers.html)
    
    - [04.02.06 SMART Algorithm](./04.02.06-bp-smart-algo.html)
    
    - [04.02.07 Allocation Setup (For Financial Advisors)](./04.02.07-bp-alloc-setup.html)
    
    
    - [04.03 Intelligent Order Resubmission](./04.03-int-order-resubmit.html)
    
    - [04.04 Disconnect on Invalid Format](./04.04-invalid-format-disconnect.html)
    
    
    - [05 Download the TWS API](./05-find-the-api.md)
    - [05.01 Install the TWS API on Windows](./05.01-windows-install.html)
    
    - [05.02 Install the TWS API on MacOs / Linux](./05.02-unix-install.html)
    
    - [05.03 TWS API File Location &amp; Tools](./05.03-tws-api-folder-files-tools.html)
    
    
    - [06 TWSAPI Basics Tutorial](./06-twsapi-tutorial.md)
    
    - [07 Third Party API Platforms](./07-third-party-platforms.md)
    - [07.01 Non-Standard TWS API Languages and Packages](./07.01-non-tws-api-support.html)
    - [07.01.01 ib_insync and ib_async](./07.01.01-ib-insync.html)
    
    
    
    - [08 Unique Configurations](./08-unqiue-configurations.md)
    - [08.01 Implementing the Intel Decimal Library for MacOS and Linux](./08.01-cpp-linux.html)
    
    - [08.02 Updating The Python Interpreter](./08.02-setup-python.html)
    - [08.02.01 1. Open Command Prompt or Terminal](./08.02.01-setup-py-terminal.html)
    
    - [08.02.02 2. Navigate to Python Source](./08.02.02-setup-py-navigate.html)
    
    - [08.02.03 3. Run The setup.py File](./08.02.03-setup-py-run.html)
    
    - [08.02.04 4. Confirm Updates](./08.02.04-setup-py-updates.html)
    
    - [08.02.05 5. Confirm your installation](./08.02.05-setup-py-confirm-install.html)
    
    - [08.02.06 Protobuf UserWarning messages](./08.02.06-protobuf-warning.html)
    
    
    - [08.03 Implementing Visual Basic .NET](./08.03-vb-impl.html)
    
    
    - [09 Troubleshooting &amp; Support](./09-troubleshooting.md)
    - [09.01 Log Files](./09.01-log-files.html)
    - [09.01.01 API Logs](./09.01.01-api-logs.html)
    
    - [09.01.02 How To Enable Debug Logging](./09.01.02-debug-logging.html)
    
    - [09.01.03 Location of Interactive Brokers Logs](./09.01.03-log-location.html)
    
    - [09.01.04 How To Delete Logs](./09.01.04-delete-logs.html)
    
    - [09.01.05 Uploading Logs](./09.01.05-log-upload.html)
    
    - [09.01.06 Exporting Logs](./09.01.06-export-logs.html)
    
    - [09.01.07 Reading Exported Logs](./09.01.07-reading-logs.html)
    
    
    - [09.02 Unset Values](./09.02-unset-values.html)
    
    
    - [10 Architecture](./10-architecture.md)
    - [10.01 The Trader Workstation](./10.01-The-Trader-Workstation.html)
    - [10.01.01 The IB Gateway](./10.01.01-The-IB-Gateway.html)
    
    
    
    - [11 Pacing Limitations](./11-requests-limitations.md)
    - [11.01 Pacing Behavior](./11.01-paceapi.html)
    
    
    - [12 Connectivity](./12-connectivity.md)
    - [12.01 Establishing an API connection](./12.01-establish-connection.html)
    
    - [12.02 Verify API Connection](./12.02-verify-connection.html)
    
    - [12.03 The EReader Thread](./12.03-The-EReader-Thread.html)
    - [12.03.01 C++, C#, and Java Implementations](./12.03.01-.html)
    
    - [12.03.02 Python Implementation](./12.03.02-.html)
    
    
    - [12.04 Remote TWS API Connections with Trader Workstation](./12.04-remote-connection.html)
    
    - [12.05 Accepting an API connection from TWS](./12.05-incoming-api-connections.html)
    
    - [12.06 Logging into multiple applications](./12.06-Logging-into-multiple-applications.html)
    
    - [12.07 Broken API socket connection](./12.07-broken-socket-connection.html)
    
    
    - [13 Synchronous API](./13-sync-api.md)
    - [13.01 TWSSyncWrapper Class](./13.01-sync-class.html)
    
    - [13.02 Connect &amp; Start Connection](./13.02-sync-connect.html)
    
    - [13.03 Disconnect &amp; Stop Connection](./13.03-sync-disconnect.html)
    
    - [13.04 Current Time](./13.04-sync-time.html)
    
    - [13.05 Next Valid ID](./13.05-sync-valid-id.html)
    
    - [13.06 Account Summary](./13.06-sync-account-summary.html)
    
    - [13.07 Contract Details](./13.07-sync-contract.html)
    
    - [13.08 Live Market Data](./13.08-sync-live-data.html)
    
    - [13.09 Historical Market Data](./13.09-sync-historical-data.html)
    
    - [13.10 Place Order](./13.10-sync-place-order.html)
    
    - [13.11 Cancel Order](./13.11-sync-cancel-order.html)
    
    - [13.12 Open Orders](./13.12-sync-open-orders.html)
    
    - [13.13 Executions](./13.13-sync-executions.html)
    
    - [13.14 Positions](./13.14-sync-positions.html)
    
    - [13.15 Portfolio](./13.15-sync-portfolio.html)
    
    
    - [14 Account &amp; Portfolio Data](./14-accounts.md)
    - [14.01 Account Summary](./14.01-account-summary.html)
    - [14.01.01 Requesting Account Summary](./14.01.01-requesting-account-summary.html)
    
    - [14.01.02 Account Summary Tags](./14.01.02-account-summary-tags.html)
    
    - [14.01.03 Receiving Account Summary](./14.01.03-receiving-account-summary.html)
    
    - [14.01.04 Cancel Account Summary](./14.01.04-cancel-account-summary.html)
    
    
    - [14.02 Account Updates](./14.02-account-updates.html)
    - [14.02.01 Requesting Account Updates](./14.02.01-request-account-updates.html)
    
    - [14.02.02 Receiving Account Updates](./14.02.02-receive-account-updates.html)
    
    - [14.02.03 Account Value Keys](./14.02.03-account-value-keys.html)
    
    - [14.02.04 Cancel Account Updates](./14.02.04-cancel-account-updates.html)
    
    
    - [14.03 Account Update by Model](./14.03-model-account-update.html)
    - [14.03.01 Requesting Account Update by Model](./14.03.01-request-model-account-update.html)
    
    - [14.03.02 Receiving Account Updates by Model](./14.03.02-receive-model-account-update.html)
    
    - [14.03.03 Cancel Account Updates by Model](./14.03.03-cancel-model-account-update.html)
    
    
    - [14.04 Family Codes](./14.04-family-codes.html)
    - [14.04.01 Request Family Codes](./14.04.01-request-family-code.html)
    
    - [14.04.02 Receive Family Codes](./14.04.02-receive-family-code.html)
    
    
    - [14.05 Managed Accounts](./14.05-managed-accounts.html)
    - [14.05.01 Request Managed Accounts](./14.05.01-request-managed-accounts.html)
    
    - [14.05.02 Receive Managed Accounts](./14.05.02-receive-managed-accounts.html)
    
    
    - [14.06 Positions](./14.06-positions.html)
    - [14.06.01 Request Positions](./14.06.01-request-positions.html)
    
    - [14.06.02 Receive Positions](./14.06.02-receive-positions.html)
    
    - [14.06.03 Cancel Positions Request](./14.06.03-cancel-positions-request.html)
    
    
    - [14.07 Positions By Model](./14.07-positions-multi.html)
    - [14.07.01 Request Positions By Model](./14.07.01-request-positions-multi.html)
    
    - [14.07.02 Receive Positions By Model](./14.07.02-receive-positions-multi.html)
    
    - [14.07.03 Cancel Positions By Model](./14.07.03-cancel-positions-multi.html)
    
    
    - [14.08 Profit &amp; Loss (PnL)](./14.08-pnl.html)
    - [14.08.01 Request P&amp;L for individual positions](./14.08.01-request-pnl-position.html)
    
    - [14.08.02 Receive P&amp;L for individual positions](./14.08.02-receive-pnl-position.html)
    
    - [14.08.03 Cancel P&amp;L request for individual positions](./14.08.03-cancel-pnl-position.html)
    
    - [14.08.04 Request P&amp;L for accounts](./14.08.04-request-pnl-account.html)
    
    - [14.08.05 Receive P&amp;L for accounts](./14.08.05-receive-pnl-account.html)
    
    - [14.08.06 Cancel P&amp;L subscription requests for accounts](./14.08.06-cancel-pnl-account.html)
    
    
    - [14.09 White Branding User Info](./14.09-white-branding.html)
    - [14.09.01 Requesting White Branding Info](./14.09.01-request-white-brand.html)
    
    - [14.09.02 Receiving White Branding Info](./14.09.02-receive-white-brand.html)
    
    
    
    - [15 Bulletins](./15-bulletins.md)
    - [15.01 Request IB Bulletins](./15.01-request-ib-bulletins.html)
    
    - [15.02 Receive IB Bulletins](./15.02-receive-ib-bulletins.html)
    
    - [15.03 Cancel Bulletin Request](./15.03-cancel-ib-bulletins.html)
    
    
    - [16 Contracts (Financial Instruments)](./16-contracts.md)
    - [16.01 The Contract Object](./16.01-contract-object.html)
    
    - [16.02 Finding Contract Details in Trader Workstation](./16.02-tws-contract-details.html)
    
    - [16.03 Contract Details](./16.03-contract-details.html)
    - [16.03.01 Request Contract Details](./16.03.01-request-contract-details.html)
    
    - [16.03.02 Receive Contract Details](./16.03.02-receive-contract-details.html)
    
    - [16.03.03 Receive Bond Details](./16.03.03-receive-bond-details.html)
    
    
    - [16.04 Option Chains](./16.04-option-chain.html)
    - [16.04.01 Request Option Chains](./16.04.01-request-opt-chain.html)
    
    - [16.04.02 Receive Option Chains](./16.04.02-receive-opt-chain.html)
    
    
    - [16.05 Stock Symbol Search](./16.05-stock-symbol-search.html)
    - [16.05.01 Request Stock Contract Search](./16.05.01-request-stock-symbol.html)
    
    - [16.05.02 Receive Searched Stock Contract](./16.05.02-receive-stock-symbol.html)
    
    
    
    - [17 Event Trading](./17-ec.md)
    - [17.01 Introduction](./17.01-ec-intro.html)
    - [17.01.01 ForecastEx Forecast Contracts](./17.01.01-ec-forecastex.html)
    
    - [17.01.02 CME Event Contracts](./17.01.02-ec-cme.html)
    
    
    - [17.02 Contract Definition &amp; Discovery](./17.02-ec-contracts.html)
    - [17.02.01 ForecastEx Contract Example](./17.02.01-ec-contract-example.html)
    
    
    - [17.03 Market Data](./17.03-ec-market-data.html)
    
    - [17.04 Order Submission](./17.04-ec-orders.html)
    - [17.04.01 Order Example](./17.04.01-ec-order-example.html)
    
    
    - [17.05 Other Functionality](./17.05-ec-misc.html)
    
    
    - [18 Error Handling](./18-error-handling.md)
    - [18.01 Understanding Message Codes](./18.01-understanding-error-codes.html)
    
    - [18.02 System Message Codes](./18.02-system-message-codes.html)
    
    - [18.03 Error Codes](./18.03-api-error-codes.html)
    
    - [18.04 Receiving Error Messages](./18.04-error.html)
    
    - [18.05 Common Error Resolution](./18.05-common-errors.html)
    - [18.05.01 Market data farm connection is OK](./18.05.01-error-md-farm.html)
    
    - [18.05.02 Requested market data requires additional subscription for API. See link in &#x27;Market Data Connections&#x27; dialog for more details.Delayed market data is available.](./18.05.02-error-add-subs.html)
    
    
    
    - [19 Financial Advisors](./19-financial-advisors.md)
    - [19.01 Request FA Groups and Profiles](./19.01-request-fa.html)
    
    - [19.02 Receiving FA Groups and Profiles](./19.02-receive-fa.html)
    
    - [19.03 Replace FA Allocations](./19.03-replace-fa.html)
    
    - [19.04 Allocation Methods and Groups](./19.04-fa-allocation-methods.html)
    
    - [19.05 Allocation Method XML Format](./19.05-allocation-format.html)
    - [19.05.01 Available Equity](./19.05.01-available-equity-xml.html)
    
    - [19.05.02 Contracts Or Shares](./19.05.02-shares-xml.html)
    
    - [19.05.03 Equal Quantity](./19.05.03-equal-quantity-xml.html)
    
    - [19.05.04 MonetaryAmount](./19.05.04-cash-xml.html)
    
    - [19.05.05 Net Liquidation Value](./19.05.05-nlv-xml.html)
    
    - [19.05.06 Percentages](./19.05.06-percentage-xml.html)
    
    - [19.05.07 Ratios](./19.05.07-ratio-xml.html)
    
    
    - [19.06 Model Portfolios and the API](./19.06-model-portfolios.html)
    
    - [19.07 Unification of Groups and Profiles](./19.07-unification-groups-profiles.html)
    
    - [19.08 Order Placement](./19.08-fa-orders.html)
    
    
    - [20 Market Data: Delayed](./20-delayed-market-data.md)
    - [20.01 Market Data Type Behavior](./20.01-md-type-behavior.html)
    
    - [20.02 Request Market Data Type](./20.02-request-md-type.html)
    
    - [20.03 Receive Market Data Type](./20.03-receive-md-type.html)
    
    
    - [21 Market Data: Historical](./21-hist-md.md)
    - [21.01 Historical Data Limitations](./21.01-historical-limitations.html)
    - [21.01.01 Historical Data Filtering](./21.01.01-filtered-hist-data.html)
    
    - [21.01.02 Historical Volume Scaling](./21.01.02-hist-volume.html)
    
    - [21.01.03 Pacing Violations for Small Bars (30 secs or less)](./21.01.03-historical-pacing-limitations.html)
    
    - [21.01.04 Unavailable Historical Data](./21.01.04-unavailable-historical-data.html)
    
    
    - [21.02 Finding the Earliest Available Data Point](./21.02-earliest-data.html)
    - [21.02.01 Requesting the Earliest Data Point](./21.02.01-requesting-earliest-data.html)
    
    - [21.02.02 Receiving the Earliest Data Point](./21.02.02-receiving-earliest-data.html)
    
    - [21.02.03 Cancelling Timestamp Requests](./21.02.03-cancelling-earliest-data.html)
    
    
    - [21.03 Historical Bars](./21.03-historical-bars.html)
    - [21.03.01 Requesting Historical Bars](./21.03.01-requesting-historical-bars.html)
    
    - [21.03.02 Duration](./21.03.02-hist-duration.html)
    
    - [21.03.03 Historical Bar Sizes](./21.03.03-hist-bar-size.html)
    
    - [21.03.04 Step Sizes](./21.03.04-hist-step-size.html)
    
    - [21.03.05 Max Duration Per Bar Size](./21.03.05-duration-per-bar.html)
    
    - [21.03.06 Format Date Received](./21.03.06-hist-format-date.html)
    
    - [21.03.07 Keep Up To Date](./21.03.07-hist-keepUp-date.html)
    
    - [21.03.08 Receiving Historical Bars](./21.03.08-receiving-historical-bars.html)
    
    
    - [21.04 Historical Bar whatToShow](./21.04-historical-whattoshow.html)
    - [21.04.01 AGGTRADES](./21.04.01-hist-aggtrades .html)
    
    - [21.04.02 ADJUSTED_LAST](./21.04.02-hist-adj-last.html)
    
    - [21.04.03 ASK](./21.04.03-hist-ask.html)
    
    - [21.04.04 BID](./21.04.04-hist-bid .html)
    
    - [21.04.05 BID_ASK](./21.04.05-hist-bid-ask.html)
    
    - [21.04.06 FEE_RATE](./21.04.06-hist-fee-rate.html)
    
    - [21.04.07 HISTORICAL_VOLATILITY](./21.04.07-hist-volatility.html)
    
    - [21.04.08 MIDPOINT](./21.04.08-hist-midpoint.html)
    
    - [21.04.09 OPTION_IMPLIED_VOLATILITY](./21.04.09-hist-opt-imp-vol.html)
    
    - [21.04.10 SCHEDULE](./21.04.10-hist-schedule.html)
    
    - [21.04.11 TRADES](./21.04.11-hist-trades.html)
    
    - [21.04.12 YIELD_ASK](./21.04.12-hist-yield-ask.html)
    
    - [21.04.13 YIELD_BID](./21.04.13-hist-yield-bid.html)
    
    - [21.04.14 YIELD_BID_ASK](./21.04.14-hist-yield-bid-ask.html)
    
    - [21.04.15 YIELD_LAST](./21.04.15-hist-yield-last.html)
    
    
    - [21.05 Histogram Data](./21.05-histograms.html)
    - [21.05.01 Requesting Histogram Data](./21.05.01-requesting-histogram-data.html)
    
    - [21.05.02 Receiving Histogram Data](./21.05.02-receiving-histogram-data.html)
    
    - [21.05.03 Cancelling Histogram Data](./21.05.03-cancelling-histogram-data.html)
    
    
    - [21.06 Historical Time &amp; Sales](./21.06-historical-time-and-sales.html)
    - [21.06.01 Requesting Time and Sales data](./21.06.01-requesting-time-and-sales.html)
    
    - [21.06.02 Receiving Time and Sales data](./21.06.02-receiving-time-and-sales.html)
    
    - [21.06.03 Historical Halted and Unhalted ticks](./21.06.03-halted-and-unhalted-ticks.html)
    
    
    - [21.07 Historical Date Formatting](./21.07-hist-date-format.html)
    - [21.07.01 Operator Time Zone](./21.07.01-operator-tz.html)
    
    - [21.07.02 Exchange Time Zone](./21.07.02-exchange-tz.html)
    
    - [21.07.03 Coordinated Universal Time (UTC)](./21.07.03-utc-tz.html)
    
    
    - [21.08 Modifying Returned Date](./21.08-modify-return-date.html)
    
    
    - [22 Market Data: Live](./22-live-md.md)
    - [22.01 Live Data Limitations](./22.01-live-data-limitations.html)
    
    - [22.02 5 Second Bars](./22.02-live-bars.html)
    - [22.02.01 Request Real Time Bars](./22.02.01-request-live-bars.html)
    
    - [22.02.02 Receive Real Time Bars](./22.02.02-receive-live-bars.html)
    
    - [22.02.03 Cancel Real Time Bars](./22.02.03-cancel-live-bars.html)
    
    
    - [22.03 Component Exchanges](./22.03-component-exchange.html)
    - [22.03.01 Request Component Exchanges](./22.03.01-request-component-exchange.html)
    
    - [22.03.02 Receive Component Exchanges](./22.03.02-receive-component-exchange.html)
    
    
    - [22.04 Market Depth Exchanges](./22.04-market-depth-exchanges.html)
    - [22.04.01 Requesting Market Depth Exchanges](./22.04.01-request-depth-exchanges.html)
    
    - [22.04.02 Receive Market Depth Exchanges](./22.04.02-receive-depth-exchanges.html)
    
    
    - [22.05 Market Depth (L2)](./22.05-market-depth.html)
    - [22.05.01 Request Market Depth](./22.05.01-request-market-depth.html)
    
    - [22.05.02 Receive Market Depth](./22.05.02-receive-market-depth.html)
    
    - [22.05.03 Cancel Market Depth](./22.05.03-cancel-market-depth.html)
    
    
    - [22.06 Market Indicators](./22.06-indicators.html)
    - [22.06.01 NYSE Advance-Decline](./22.06.01-ad-indicator.html)
    
    - [22.06.02 NYSE Volume Index](./22.06.02-ad-indicator.html)
    
    - [22.06.03 NYSE Trading Index (TRIN)](./22.06.03-ad-indicator.html)
    
    - [22.06.04 NYSE TICK Index](./22.06.04-ad-indicator.html)
    
    
    - [22.07 Option Greeks](./22.07-option-greeks.html)
    - [22.07.01 Request Options Greeks](./22.07.01-request-option-greeks.html)
    
    - [22.07.02 Calculating option prices](./22.07.02-calc-opt-price.html)
    
    - [22.07.03 Calculating historical volatility](./22.07.03-calc-historical-volatility.html)
    
    - [22.07.04 Receiving Options Data](./22.07.04-receive-options-data.html)
    
    
    - [22.08 Top of Book (L1)](./22.08-watchlist-data.html)
    - [22.08.01 Request Watchlist Data](./22.08.01-request-watchlist-data.html)
    
    - [22.08.02 Market Data Update Frequency](./22.08.02-md-update-freq.html)
    
    - [22.08.03 Generic Tick Types](./22.08.03-generic-tick-types.html)
    
    - [22.08.04 Streaming Data Snapshots](./22.08.04-streaming-data-snapshot.html)
    
    - [22.08.05 Regulatory Snapshots](./22.08.05-regulatory-snapshot.html)
    
    - [22.08.06 Receive Live Data](./22.08.06-receive-live-data.html)
    
    - [22.08.07 Exchange Component Mapping](./22.08.07-exchange-component-mapping.html)
    
    - [22.08.08 Re-Routing CFDs](./22.08.08-re-route-cfds.html)
    
    - [22.08.09 Cancel Watchlist Data](./22.08.09-cancel-mkt-data.html)
    
    
    - [22.09 Available Tick Types](./22.09-available-tick-types.html)
    - [22.09.01 Halted](./22.09.01-halted.html)
    
    - [22.09.02 Shortable](./22.09.02-shortable.html)
    
    - [22.09.03 Volume Data](./22.09.03-volume-data.html)
    
    - [22.09.04 RT Volume](./22.09.04-rt-volume.html)
    
    - [22.09.05 IB Dividends](./22.09.05-ib-dividends.html)
    
    
    - [22.10 Tick By Tick Data](./22.10-tick-by-tick.html)
    - [22.10.01 Request Tick By Tick Data](./22.10.01-request-tick-data.html)
    
    - [22.10.02 Receive Tick By Tick Data](./22.10.02-receive-tick-data.html)
    
    - [22.10.03 Cancel Tick By Tick Data](./22.10.03-cancel-tick-data.html)
    
    - [22.10.04 Halted and Unhalted ticks](./22.10.04-halted-ticks.html)
    
    
    
    - [23 Market Scanner](./23-market-scanner.md)
    - [23.01 Market Scanner Parameters](./23.01-market-scan-params.html)
    - [23.01.01 Request Market Scanner Parameters](./23.01.01-request-market-scan-params.html)
    
    - [23.01.02 Receive Market Scanner Parameters](./23.01.02-receive-market-scan-params.html)
    
    
    - [23.02 Market Scanner Subscription](./23.02-market-scanner-subscription.html)
    - [23.02.01 Request Market Scanner Subscription](./23.02.01-request-scanner-subscription.html)
    
    - [23.02.02 Receive Market Scanner Subscription](./23.02.02-receive-scanner-subscription.html)
    
    - [23.02.03 Cancel Market Scanner Subscription](./23.02.03-cancel-scanner-subscription.html)
    
    
    
    - [24 News](./24-news.md)
    - [24.01 News Providers](./24.01-news-providers.html)
    - [24.01.01 Request News Providers](./24.01.01-request-news-providers.html)
    
    - [24.01.02 Receive News Providers](./24.01.02-receive-news-providers.html)
    
    
    - [24.02 Live News Headlines](./24.02-contract-specific-news.html)
    - [24.02.01 Request Contract Specific News](./24.02.01-request-contract-specific-news.html)
    
    - [24.02.02 Request BroadTape News](./24.02.02-request-broadtape-news.html)
    
    - [24.02.03 Receive Live News Headlines](./24.02.03-receive-live-news-headlines.html)
    
    
    - [24.03 Historical News Headlines](./24.03-historical-news.html)
    - [24.03.01 Requesting Historical News](./24.03.01-request-historical-news.html)
    
    - [24.03.02 Receive Historical News](./24.03.02-receive-historical-news.html)
    
    
    - [24.04 News Articles](./24.04-news-articles.html)
    - [24.04.01 Request News Articles](./24.04.01-request-news-articles.html)
    
    - [24.04.02 Receive News Articles](./24.04.02-receive-news-articles.html)
    
    
    
    - [25 Next Valid ID](./25-next-valid-id.md)
    - [25.01 Request Next Valid ID](./25.01-request-next-valid-id.html)
    
    - [25.02 Receive Next Valid ID](./25.02-receive-next-valid-id.html)
    
    - [25.03 Reset Order ID Sequence](./25.03-reset-id-sequence..html)
    
    
    - [26 Order Management](./26-order-management.md)
    - [26.01 ClientId 0 and the Master Client ID](./26.01-master-client-id.html)
    
    - [26.02 Commission And Fees Report](./26.02-commission-report.html)
    
    - [26.03 Execution Details](./26.03-exec-details.html)
    - [26.03.01 ExecID Behavior](./26.03.01-exec-id.html)
    
    - [26.03.02 The Execution Object](./26.03.02-execution-object.html)
    
    - [26.03.03 Request Execution Details](./26.03.03-request-exec-details.html)
    
    - [26.03.04 Receive Execution Details](./26.03.04-receive-exec-details.html)
    
    
    - [26.04 Open Orders](./26.04-open-orders.html)
    
    - [26.05 Order Status](./26.05-order-status.html)
    - [26.05.01 Understanding Order Status Message](./26.05.01-order-status-message.html)
    
    
    - [26.06 Requesting Currently Active Orders](./26.06-request-active-orders.html)
    - [26.06.01 API client&#x27;s orders](./26.06.01-request-api-orders.html)
    
    - [26.06.02 All submitted orders](./26.06.02-request-all-orders.html)
    
    - [26.06.03 Manually Submitted TWS Orders](./26.06.03-receive-tws-orders.html)
    
    - [26.06.04 Order Binding Notification](./26.06.04-order-bound-notification.html)
    
    
    - [26.07 Retrieving Completed Orders](./26.07-completed-orders.html)
    - [26.07.01 Requesting Completed Orders](./26.07.01-req-completed-orders.html)
    
    - [26.07.02 Receiving Completed Orders](./26.07.02-rec-completed-orders.html)
    
    
    
    - [27 Orders](./27-orders.md)
    - [27.01 The Order Object](./27.01-order-object.html)
    
    - [27.02 Cancelling an Order](./27.02-cancel-order.html)
    - [27.02.01 Cancel Individual Order](./27.02.01-cancel-order.html)
    
    - [27.02.02 Cancel All Open Orders](./27.02.02-global-order-cancel.html)
    
    
    - [27.03 Exercise Options](./27.03-exercise-options.html)
    
    - [27.04 Minimum Price Increment](./27.04-market-price-increment.html)
    - [27.04.01 Request Market Rule](./27.04.01-request-market-rule.html)
    
    - [27.04.02 Receive Market Rule](./27.04.02-receive-market-rule.html)
    
    
    - [27.05 MiFIR Transaction Reporting Fields](./27.05-mifir-reporting.html)
    
    - [27.06 Modifying Orders](./27.06-modify-order.html)
    
    - [27.07 Place Order](./27.07-place-order.html)
    - [27.07.01 Adding a Profit Taker and Stop Loss](./27.07.01-pt-sl.html)
    
    - [27.07.02 Combo Orders](./27.07.02-combo-order.html)
    
    - [27.07.03 Trading The Overnight Session](./27.07.03-overnight-trading.html)
    
    - [27.07.04 Understanding Order Precautions](./27.07.04-precaution-settings.html)
    
    - [27.07.05 Order Placement Considerations](./27.07.05-order-considerations.html)
    
    
    - [27.08 Pre-Borrow Shares For Shorting](./27.08-preborrow.html)
    
    - [27.09 Test Order Impact (WhatIf)](./27.09-whatif.html)
    
    - [27.10 Trigger Methods](./27.10-trigger-methods.html)
    
    
    - [28 Setting Management](./28-setting-management.md)
    - [28.01 Request Configuration](./28.01-req-config.html)
    
    - [28.02 Receive Configuration](./28.02-receive-config.html)
    
    - [28.03 Request Configuration Update](./28.03-req-config-update.html)
    
    - [28.04 Receive Configuration Update](./28.04-receive-config-update.html)
    
    
    - [29 TWS UI Display Groups](./29-display-groups.md)
    - [29.01 Query Display Groups](./29.01-query-display-groups.html)
    - [29.01.01 Request Query Display Groups](./29.01.01-request-query-display-groups.html)
    
    - [29.01.02 Receive Query Display Groups](./29.01.02-receive-query-display-groups.html)
    
    
    - [29.02 Subscribe To Group Events](./29.02-subscribe-display-groups.html)
    - [29.02.01 Request Group Events Subscription](./29.02.01-request-subscribe-display-groups.html)
    
    - [29.02.02 Receive Group Events Subscription](./29.02.02-receive-subscribe-display-groups.html)
    
    - [29.02.03 Unsubscribe From Group Events](./29.02.03-cancel-display-groups.html)
    
    
    - [29.03 Update Display Group](./29.03-update-display-groups.html)
    
    
    - [30 Wall Street Horizon](./30-wsh.md)
    - [30.01 Meta Data](./30.01-meta-data.html)
    - [30.01.01 Meta Data Filters](./30.01.01-meta-data-filters.html)
    
    - [30.01.02 Requesting Meta Data](./30.01.02-request-meta-data.html)
    
    - [30.01.03 Receive Meta Data](./30.01.03-receive-meta-data.html)
    
    - [30.01.04 Cancel Meta Data](./30.01.04-cancel-meta-data.html)
    
    
    - [30.02 Event Data](./30.02-event-data.html)
    - [30.02.01 WshEventData Object](./30.02.01-wsheventdata-object.html)
    
    - [30.02.02 Request Event Data](./30.02.02-request-event-data.html)
    
    - [30.02.03 Receive Event Data](./30.02.03-receive-event-data.html)
    
    - [30.02.04 Cancel Event Data](./30.02.04-cancel-event-data.html)
    
    
    
    
  </body>
</html>
