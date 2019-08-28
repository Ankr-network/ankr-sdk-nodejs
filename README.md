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

### Namespace
1. `namespacelist( )`
List all namespaces in your account.

2. `namespacecreate(ns_name, ns_cpu_limit, ns_mem_limit, ns_storage_limit)`
Create a namespace.

3. `namespacedelete(ns_id)`
delete a namespace by ns_id.

4. `namespaceupdate(ns_id, cpu_u, mem_u, storage_u)`
update a namespace by ns_id.

### App
1. `applist( )`
List all apps in your account.

2. `appcreate(app_name, chart_repo, chart_name, chart_ver, ns_id [, custom_values])`
Create an application on a running namespace.

3. `appcancel(app_id)`
Cancel an application by app_id.

4. `apppurge(app_id)`
Purge an application by app_id.

5. `appupdate(app_id, app_name_u, chart_name_u, chart_repo_u, chart_ver_u)`
Update an application by app_id.

6. `appdetail(app_id)`
Show details of an application by app_id. 


### User
1. 
2. 
