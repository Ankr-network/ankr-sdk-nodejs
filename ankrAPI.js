// user


// namespace
namespaceList = async function () {
    await authenticateWithTestAcct()
    const nsList = await reqA('GET', '/namespace/list')
    console.log(nsList)
}

namespaceCreate  = async function (ns_name, ns_cpu_limit, ns_mem_limit, ns_storage_limit) {
    await authenticateWithTestAcct()
    const namespace = await reqA('POST', '/namespace/create', {
        ns_name: ns_name,
        ns_cpu_limit: ns_cpu_limit,
        ns_mem_limit: ns_mem_limit,
        ns_storage_limit: ns_storage_limit
    })
    console.log(namespace)
}

namespaceDelete = async function (ns_id) {
    await authenticateWithTestAcct()
    path = '/namespace/delete/' + ns_id
    await reqA('DELETE', path)
}

namespaceUpdate = async function (ns_id, cpu_u, mem_u, storage_u) {
    await authenticateWithTestAcct()
    await reqA('POST', '/namespace/update', {
        ns_id: ns_id,
        ns_cpu_limit: cpu_u,
        ns_mem_limit: mem_u,
        ns_storage_limit: storage_u
    })
}

// app
appList = async function () {
    await authenticateWithTestAcct()
    const appList = await reqA('GET', '/app/list')
    console.log(appList)
}

appCreate = async function (app_name, chart_repo, chart_name, chart_ver, ns_id, custom_values = []) {
    await authenticateWithTestAcct()
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
    await authenticateWithTestAcct()
    path_cancel = '/app/cancel/' + app_id
    await reqA('POST', path_cancel)
}

appPurge = async function (app_id) {
    await authenticateWithTestAcct()
    path_purge = '/app/cancel/' + app_id
    await reqA('DELETE', path_purge)
}

appUpdate = async function (app_id, app_name_u, chart_name_u, chart_repo_u, chart_ver_u) {
    await authenticateWithTestAcct()
    path = '/app/update/' + app_id
    await reqA('POST', path, {
        app_name: app_name_u,
        chart_name: chart_name_u,
        chart_repo: chart_repo_u,
        chart_ver: chart_ver_u
    })
}

appDetail = async function (app_id) {
    await authenticateWithTestAcct()
    path = "/app/detail/" + app_id
    const detail = await reqA('GET', path)
    console.log(detail)
}




module.exports = {
    
    // namespace
    namespaceList,
    namespaceCreate,
    namespaceDelete,
    namespaceUpdate,





    
    // app
    appList,
    appCreate,
    appCancel,
    appPurge,
    appUpdate,
    appDetail,


}
