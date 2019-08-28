// user
changeEmail = async function (email_u) {
    await authenticateUserAcct()
    await reqA('POST', '/change_email', {
        new_email: email_u
    })
}

forgotPassword = async function (email) {
    await authenticateUserAcct()
    await reqA('POST', '/forgot_password', {
        email: email
    })
}

changePassword = async function (old_p, new_p) {
    await authenticateUserAcct()
    await reqA('POST', '/change_password',{
        old_password: old_p,
        new_password: new_p
    })
}


// chart
chartList = async function (repo = 'stable') {
    await authenticateUserAcct()
    const list = await reqA('GET', '/chart/list', {chart_repo: repo})
    console.log(list)
} 

chartDetail = async function (repo, name, ver) {
    await authenticateUserAcct()
    path = '/chart/detail/' + repo + '/' + name + '/' + ver
    const chart_detail1 = await reqA('GET', path)
    console.log(chart_detail1)
}

chartDownload = async function (repo, name, ver) {
    await authenticateUserAcct()
    path = '/chart/download/' + repo + '/' + name + '/' + ver
    const file = await reqA('GET', path)
    console.log(file)
}

chartDelete = async function (name, ver) {
    await authenticateUserAcct()
    delete_path = '/chart/delete/' + 'user' + '/' + name + '/' + ver
    await reqA('DELETE', delete_path)
}

chartUpload = async function (repo, name, ver, file) {
    await authenticateUserAcct()
    const upload_path = '/chart/upload/' + repo + '/' + name + '/' + ver
    await reqA('POST', upload_path,{
        chart_file: file
    })
}


// dc
dcList = async function () {
    await authenticateUserAcct()
    const list = await reqA('GET', '/dc/list')
    console.log(list)
}

dcNetworkInfo = async function () {
    await authenticateUserAcct()
    const networkInfo = await reqA('GET', '/dc/networkinfo')
    console.log(networkInfo)
}

myDc = async function () {
    await authenticateUserAcct()
    const cluster = await reqA('GET', '/dc/mydc')
    console.log(cluster)
}

dcReset = async function (reset_name) {
    await authenticateUserAcct()
    const cluster = await reqA('POST', '/dc/reset' , {
    cluster_name: reset_name})
    console.log(cluster)
}

// namespace
namespaceList = async function () {
    await authenticateUserAcct()
    const nsList = await reqA('GET', '/namespace/list')
    console.log(nsList)
}

namespaceCreate  = async function (ns_name, ns_cpu_limit, ns_mem_limit, ns_storage_limit) {
    await authenticateUserAcct()
    const namespace = await reqA('POST', '/namespace/create', {
        ns_name: ns_name,
        ns_cpu_limit: ns_cpu_limit,
        ns_mem_limit: ns_mem_limit,
        ns_storage_limit: ns_storage_limit
    })
    console.log(namespace)
}

namespaceDelete = async function (ns_id) {
    await authenticateUserAcct()
    path = '/namespace/delete/' + ns_id
    await reqA('DELETE', path)
}

namespaceUpdate = async function (ns_id, cpu_u, mem_u, storage_u) {
    await authenticateUserAcct()
    await reqA('POST', '/namespace/update', {
        ns_id: ns_id,
        ns_cpu_limit: cpu_u,
        ns_mem_limit: mem_u,
        ns_storage_limit: storage_u
    })
}

// app
appList = async function () {
    await authenticateUserAcct()
    const appList = await reqA('GET', '/app/list')
    console.log(appList)
}

appCreate = async function (app_name, chart_repo, chart_name, chart_ver, ns_id, custom_values = []) {
    await authenticateUserAcct()
    const app = await reqA('POST', '/app/create', {
        app_name: app_name,
        chart: {
            chart_name: chart_name,
            chart_repo: chart_repo,
            chart_ver: chart_ver
        },
        ns_id: ns_id,              
        custom_values: custom_values
        })
    console.log(app)
}

appCancel = async function (app_id) {
    await authenticateUserAcct()
    path_cancel = '/app/cancel/' + app_id
    await reqA('POST', path_cancel)
}

appPurge = async function (app_id) {
    await authenticateUserAcct()
    path_purge = '/app/cancel/' + app_id
    await reqA('DELETE', path_purge)
}

appUpdate = async function (app_id, app_name_u, chart_name_u, chart_repo_u, chart_ver_u) {
    await authenticateUserAcct()
    path = '/app/update/' + app_id
    await reqA('POST', path, {
        app_name: app_name_u,
        chart_name: chart_name_u,
        chart_repo: chart_repo_u,
        chart_ver: chart_ver_u
    })
}

appDetail = async function (app_id) {
    await authenticateUserAcct()
    path = "/app/detail/" + app_id
    const detail = await reqA('GET', path)
    console.log(detail)
}




module.exports = {
    //user
    changeEmail,
    forgotPassword,
    changePassword,

    // chart
    chartList,
    chartDetail,
    chartDownload,
    chartDelete,
    chartUpload,





    // namespace
    namespaceList,
    namespaceCreate,
    namespaceDelete,
    namespaceUpdate,


    // dc
    dcList,
    dcNetworkInfo,
    myDc,
    dcReset,


    
    // app
    appList,
    appCreate,
    appCancel,
    appPurge,
    appUpdate,
    appDetail,


}
