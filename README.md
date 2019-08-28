# ankr-sdk-nodejs

## Introduction
This is a tool to help users use Ankr's API more conveniently.

## Installation
### Install npm
```
npm install
```
### Install Ankr’s sdk
```
npm install ankr-sdk-nodejs
```

## Set configuration
### If need, change to the domain you need
1. our default domain is 'https://gateway-stage.dccn.ankr.com'
2. If you want to use the 'dev' context，call `setDomain(domain)` function with the parameter `domain = '-dev'`

### Before use Ankr's APIs, log in with your account
1. If you don't have an account, please go to Ankr's website https://app-stage.ankr.com/ (or in dev context, https://app-dev.ankr.com/ ) to register your own account.

2. If you already have Ankr account, please call `setAccount(email,password)` function to login before you use other Ankr's APIs. For example: `setAccount('example@ankr.com', 'Example@1234')`

## Ankr's APIs provided
### User
1. 
2. 

### App
1. `applist( )`
List apps in your account.

2. `appcreate(app_name, chart_repo, chart_name, chart_ver, ns_id [, custom_values])`
Create an application on a running namespace.

3. `appcancel(app_id)`
Cancel an application.

4. `apppurge(app_id)`
Purge an application.

5. `appupdate(app_id, app_name_update, chart_name_update, chart_repo_update, chart_ver_update)`
Update an application.



### Namespace
1. 
2. 

### User
1. 
2. 
