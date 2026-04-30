<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>05 Download the TWS API</title>
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
      [05-find-the-api.md](05 Download the TWS API) -> 
    
     05 Download the TWS API
    
    
    ## Download the TWS API
    
    It is recommended for API users to use same TWS API version to make sure the TWS version and TWS API version are synced in order to prevent version conflict issue.
    
    Running the Windows version of the API installer creates a directory “C:\\\\TWS API\\” for the API source code in addition to automatically copying two files into the Windows directory for the DDE and C++ APIs. **_It is important that the API installs to the C: drive_**, as otherwise API applications may not be able to find the associated files. The Windows installer also copies compiled dynamic linked libraries (DLL) of the ActiveX control TWSLib.dll, C# API CSharpAPI.dll, and C++ API TwsSocketClient.dll. Starting in API version **973.07**, running the API installer is designed to install an ActiveX control TWSLib.dll, and TwsRtdServer control TwsRTDServer.dll which are compatible with both 32 and 64 bit applications.
    
    It is important to know that the TWS API is **only** available through the interactivebrokers.github.io MSI or ZIP file. Any other resource, including pip, NuGet, or any other online repository is not hosted, endorsed, supported, or connected to Interactive Brokers. As such, updates to the installation should always be downloaded from the github directly.
    
    [TWS API Download Page](https://interactivebrokers.github.io)
  </body>
</html>
