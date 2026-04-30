<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>11 Pacing Limitations</title>
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
      [11-requests-limitations.md](11 Pacing Limitations) -> 
    
     11 Pacing Limitations
    
    
    ## Pacing Limitations
    
    Pacing Limitations with regards to the TWS API are based on the number of requests submitted by a client connection. A “request” is a user-submitted query to retrieve some form of data.
    
    An example of a request is a query to retrieve [live watchlist data](../undefined/index.md). While you may make a single request for market data, you will receive market data until the subscription is cancelled or your session is disconnected. Only the original request to begin the flow of data will contribute to the pacing limitation.
    
    The maximum number of API requests that can be submitted are equivalent to your [Maximum Market Data Lines](/campus/ibkr-api-page/market-data-subscriptions/#costs-and-fees) divided by 2, per second.
    
    By default, all users maintain 100 market data lines. Therefore, users have a pacing limitation of (100/2)= **50 requests per second**.
    
    Clients that have increased their market data lines to 200, by way of commission or [Quote Booster Subscription](/campus/ibkr-api-page/market-data-subscriptions/#quote-max), would receive (200/2)= 100 requests per second, and this would increment as your market data lines increase or decrease.
    
    In some use cases, if you plan to send more than 50 requests per second, some orders may be queued and delayed. For this scenario, please consider switching to FIX API.
    
    For FIX API users in IB Gateway, the limitation is 250 messages per second.
    
    For FIX API users without using IB Gateway or TWS, there is no limitation on messages per second, but less is better.
  </body>
</html>
