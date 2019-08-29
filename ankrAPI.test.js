var test = require('./index.js')

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

describe('Ankr Sdk Nodejs', () => {
    context('Ankr APIs', () => {
        it('App_API', async () => {
            // login at first
            // test.setAccount('liyifan.work@gmail.com', 'Boid12345')
            test.setAccount('ankrsdknodejs@mailinator.com', 'Ankr@1234')
            
            // applist
            applist_rsp = await test.applist()
            expect(applist_rsp.app_reports.length).to.be.at.least(0)
            console.log('applist pass!')

            // appcreate
            appcreate_rsp = await test.appcreate(app_name = 'test', chart_repo = 'stable', chart_name = 'boid', chart_version = '0.1.0', ns_id = 'ns-734e1ada-7300-4630-be1c-607a7f0f5918')
            expect(appcreate_rsp.app_id.length).to.be.at.least(1)
            console.log('appcreate pass!')
            
            // appdetail
            appdetail_rsp = await test.appdetail(appcreate_rsp.app_id)
            expect(appdetail_rsp.app_report.app_deployment.app_id.length).to.be.at.least(1)
            console.log('appdetail pass!')
        }).timeout(200000)

        it('Namespace_API', async () => {
            // login at first
            //await timeout(60000)
            test.setAccount('ankrsdknodejs@mailinator.com', 'Ankr@1234')

            // namespacelist
            namespacelist_rsp = await test.namespacelist()
            expect(namespacelist_rsp.ns_reports.length).to.be.at.least(0)
            console.log('namespacelist pass!')

            // namespacecreate
            namespacecreate_rsp = await test.namespacecreate(ns_name = 'SdkTest', ns_cpu_limit = 1000, ns_mem_limit = 2000, ns_storage_limit = 50000)
            expect(namespacecreate_rsp.ns_id.length).to.be.at.least(1)
            console.log('namespacecreate pass!')
        }).timeout(200000)

        it('Chart_API', async () => {
            //await timeout(60000)
            // login at first
            test.setAccount('ankrsdknodejs@mailinator.com', 'Ankr@1234')

            // chartlist
            chartlist_rsp = await test.chartlist()
            expect(chartlist_rsp.charts.length).to.be.at.least(0)
            console.log('chartlist pass!')

            // chartdetail
            chartdetail_rsp = await test.chartdetail(repo = 'stable', name = 'boid', ver = '0.1.0')
            expect(chartdetail_rsp.chart_name.length).to.be.at.least(1)
            expect(chartdetail_rsp.chart_version_details.length).to.be.at.least(1)
            console.log('chartdetail pass!')

            // chartdownload
            chartdownload_rsp = await test.chartdownload(repo = 'stable', name = 'boid', ver = '0.1.0')
            expect(chartdownload_rsp.chart_file.length).to.be.at.least(1)
            console.log('chartdownload pass!')
        }).timeout(200000)
    })
})

