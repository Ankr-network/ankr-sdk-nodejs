// user

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

appUpdate = async function (app_id, app_name_update, chart_name_update, chart_repo_update, chart_ver_update) {
    path = '/app/update/' + app_id
    await reqA('POST', path, {
        app_name: app_name_update,
        chart_name: chart_name_update,
        chart_repo: chart_repo_update,
        chart_ver: chart_ver_update
    })
}



module.exports = {
    // app
    appList,
    appCreate,
    appCancel,
    appPurge,
    appUpdate,

}
