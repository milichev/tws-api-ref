## Download the TWS API

It is recommended for API users to use same TWS API version to make sure the TWS version and TWS API version are synced in order to prevent version conflict issue.

Running the Windows version of the API installer creates a directory “C:\\\\TWS API\\” for the API source code in addition to automatically copying two files into the Windows directory for the DDE and C++ APIs. **_It is important that the API installs to the C: drive_**, as otherwise API applications may not be able to find the associated files. The Windows installer also copies compiled dynamic linked libraries (DLL) of the ActiveX control TWSLib.dll, C# API CSharpAPI.dll, and C++ API TwsSocketClient.dll. Starting in API version **973.07**, running the API installer is designed to install an ActiveX control TWSLib.dll, and TwsRtdServer control TwsRTDServer.dll which are compatible with both 32 and 64 bit applications.

It is important to know that the TWS API is **only** available through the interactivebrokers.github.io MSI or ZIP file. Any other resource, including pip, NuGet, or any other online repository is not hosted, endorsed, supported, or connected to Interactive Brokers. As such, updates to the installation should always be downloaded from the github directly.

[TWS API Download Page](https://interactivebrokers.github.io)

### Install the TWS API on Windows

### Windows:

1.  Download the IB API for Windows to your local machine
2.  This will direct you to Interactive Brokers **API License Agreement**, please review it
3.  Once you have clicked “_**I Agree**_**“**, refer to the _Windows_ section to download the API Software version of your preference
4.  ![Highlights the TWS API versions for Windows. ](./images/twsapi-download-screenshot-700x421.jpg)
5.  This will download **TWS API** folder to your computer
6.  Go to your IDE and Open Terminal
7.  Navigate to the directory where the installer has been downloaded (normally it should be your C: drive or D: drive) and confirm the file is present. Now, let’s take an example: install TWS API Python
    
     **$**  _**cd ~/TWS API/source/pythonclient**_  
     **$**  _**python3 setup.py install**_
    

### Install the TWS API on MacOs / Linux

### Unix/ Linux:

1.  Download the IB API for Mac/Unix zip file to your local machine
2.  This will direct you to Interactive Brokers **API License Agreement**, please review it
3.  Once you have clicked “_**I Agree**_**“**, refer to the _Mac / Unix_ section to download the API Software version of your preference  
    ![Highlights the TWS API versions for Mac/Unix. ](./images/API_Download.png)

4.  This will download **twsapi\_macunix.<Major Version>.<Minor Version>.zip** to your computer  
    _(where <Major Version> and <Minor Version> are the major and minor version numbers respectively)_
5.  Open Terminal (**Ctrl+Alt+T** on most distributions)
6.  Navigate to the directory where the installer has been downloaded (normally it should be the Download folder within your home folder) and confirm the file is present
    
     **$**  _**cd ~/Downloads**_  
     **$**  _**ls**_
    

7.  Unzip the contents the installer into your home folder with the following command _(if prompted, enter your password):  
    _**NOTE:** replace the values ‘n.m’ with the name of your installed file.  
    **$  _sudo unzip twsapi\_macunix.n.m.zip -d $HOME/  
    ![Highlights the zip file name in command prompt.](./images/ibkb2484_install1b.png)_**
8.  To access the sample and source files, navigate to the **IBJts** directory and confirm the subfolders samples and source are present**$  _cd ~/IBJts_$  _ls_**

Note:

*   When running “_**python3 setup.py install**_“,  you may get “_**ModuleNotFoundError: No Module named ‘setuptools’**_“. As “**setuptools**” is deprecated, please grant the write permission on the target folder (e.g. **source/pythonclient**) using “_**sudo chmod -R 777**_” in order to avoid “_**error: could not create ‘ibapi.egg-info’: Permission denied**_“. After that, run “_**python3 -m pip install .**_“

### MacOS:

1.  Download the IB API for Mac/Unix zip file to your local machine
2.  This will direct you to Interactive Brokers **API License Agreement**, please review it
3.  Once you have clicked “_**I Agree**_**“**, refer to the _Mac / Unix_ section to download the API Software version of your preference  
    ![Highlights the TWS API versions for Mac/Unix.](./images/API_Download.png)
4.  This will download **twsapi\_macunix.<Major Version>.<Minor Version>.zip** to your computer  
    _(where <Major Version> and <Minor Version> are the major and minor version numbers respectively)_
5.  Open MacOS Terminal (_**Command+Space** to launch Spotlight, then type **terminal** and press **Return**)_
6.  Go to find the zipped TWS API file and Copy the zipped TWS API file path.
    
7.  Run the following command in MacOS Terminal.
    *   **$ unzip** **twsapi\_macunix.<Major Version>.<Minor Version>.zip**

Note: On MacOS, if you directly open the **twsapi\_macunix.<Major Version>.<Minor Version>.zip** file, you will get an error: “**Unable to expand…… It is an unsupported format**“. It is required for users to unzip the zipped TWS API file using the above MacOS Terminal command.

### TWS API File Location & Tools

#### TWS API Folder Files Explanation:

*   **“API\_VersionNum.txt”**

**File Path:** ~\\TWS API\\API\_VersionNum.txt 

You can check your API version in this file.

*   **“IBSampleApp.exe”**

**File Path:** ~\\TWS API\\samples\\CSharp\\IBSampleApp\\bin\\Release\\IBSampleApp.exe

You can manually use the IBSampleApp to test the API functions.

*   **“ApiDemo.jar”**

**File Path:** ~\\TWS API\\samples\\Java\\ApiDemo.jar

This is built with Java. Java users can use it to quickly test the IB TWS API functions.