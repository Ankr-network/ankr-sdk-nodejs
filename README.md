# ankr-sdk-nodejs

## Introduction
This is a sdk tool that helps users use Ankr's APIs more conveniently.

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
1. `changeemail(email_u)`
Change email address.

2. `forgotpassword(email)`
Send a reset password email to your email address.

3. `changepassword(old_p, new_p)`
Change the password of your account.

### Chart
1. `chartlist(repo)`
List charts, choose the chart repo (default = 'stable') you want to list.

2. `chartdetail(repo, name, ver)`
Show details of a specific chart.

3. `chartdownload(repo, name, ver)`
Download a specific chart.

4. `chartdelete(name, ver)`
Delete a chart.(Only a chart with repo = ‘user’ can be deleted, users cannot delete a chart with repo = 'stable' )

5. `chartupload(repo, name, ver, file)`
Upload a chart.


### Namespace
1. `namespacelist( )`
List all namespaces in your account.

2. `namespacecreate(ns_name, ns_cpu_limit, ns_mem_limit, ns_storage_limit)`
Create a namespace.

3. `namespacedelete(ns_id)`
delete a namespace by ns_id.

4. `namespaceupdate(ns_id, cpu_u, mem_u, storage_u)`
update a namespace by ns_id.

### DataCenter
1. `dclist( )`
List all data centers.

2. `dcnetworkinfo( )`
Get the networkinfo of the data center.

3. `mydc( )`
Get your data center infomation.

4. `dcreset( )`
Reset the data center.


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

