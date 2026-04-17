*   [TWS API](../index.md)
*   [TWS API Documentation](index.md)
*   [05 Download the TWS API](05-find-the-api.md)

## Download the TWS API

It is recommended for API users to use same TWS API version to make sure the TWS version and TWS API version are synced in order to prevent version conflict issue.

Running the Windows version of the API installer creates a directory “C:\\\\TWS API\\” for the API source code in addition to automatically copying two files into the Windows directory for the DDE and C++ APIs. **_It is important that the API installs to the C: drive_**, as otherwise API applications may not be able to find the associated files. The Windows installer also copies compiled dynamic linked libraries (DLL) of the ActiveX control TWSLib.dll, C# API CSharpAPI.dll, and C++ API TwsSocketClient.dll. Starting in API version **973.07**, running the API installer is designed to install an ActiveX control TWSLib.dll, and TwsRtdServer control TwsRTDServer.dll which are compatible with both 32 and 64 bit applications.

It is important to know that the TWS API is **only** available through the interactivebrokers.github.io MSI or ZIP file. Any other resource, including pip, NuGet, or any other online repository is not hosted, endorsed, supported, or connected to Interactive Brokers. As such, updates to the installation should always be downloaded from the github directly.

[TWS API Download Page](https://interactivebrokers.github.io)