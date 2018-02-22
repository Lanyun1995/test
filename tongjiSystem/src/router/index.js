import App from '../App.vue'

// 创建路由
export default [{
    path: '/',
    component: App,
    redirect: {
        path: '/index',
    },
    meta: {
        requireAuth: true
    },
    children: [{
            path: '/index',
            name: 'index',
            meta: {
                // requireAuth: true
            },
            component: r => require.ensure([], () => r(
                require(('../view/home')), 'index'
            ))
        },
        {
            path: '/index/selectAchie',
            name: 'selectAchie',
            meta: {
                // requireAuth: true
            },
            component: r => require.ensure([], () => r(
                require(('../view/achievement/selectAchie')), 'selectAchie'
            ))
        },
        {
            path: '/index/selectAchie/achieDetail',
            name: 'achieDetail',
            meta: {
                // requireAuth: true
            },
            component: r => require.ensure([], () => r(
                require(('../view/achievement/achieDetail')), 'achieDetail'
            ))
        },
        {
            path: '/myHospital',
            name: 'myHospital',
            meta: {
                // requireAuth: true
            },
            component: r => require.ensure([], () => r(
                require(('../view/hospital/myHospital')), 'myHospital'
            )),
        },
        {
            path: '/myHospital/addHospital',
            name: 'addHospital',
            meta: {
                // requireAuth: true
            },
            component: r => require.ensure([], () => r(
                require(('../view/hospital/addHospital')), 'addHospital'
            ))
        },
        {
            path: '/myMedicine',
            name: 'myMedicine',
            meta: {
                // requireAuth: true
            },
            component: r => require.ensure([], () => r(
                require(('../view/medicine/myMedicine')), 'myMedicine'
            )),
        },
        {
            path: '/myMedicine/addMedicine',
            name: 'addMedicine',
            meta: {
                // requireAuth: true
            },
            component: r => require.ensure([], () => r(
                require(('../view/medicine/addMedicine')), 'addMedicine'
            )),
        }
    ]
}]