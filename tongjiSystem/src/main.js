import Vue from 'vue' // 引入 Vue 主文件
import VueRouter from 'vue-router'
import App from './App' // 引入 APP 主文件
import store from './store/store'
import './assets/js/base' // 一些基础功能引入
import './assets/js/html.fontSize' // 适配不同设备,修改根字号
import './assets/js/ajax' // ajax
import './api' // 接口
import routes from './router' // 引入路由
import './style/common.less' // 自定义样式初始化
import './assets/js/filters' //  自定义过滤器
import FastClick from 'fastclick'
import { LoadingPlugin, AlertPlugin, ConfirmPlugin } from 'vux'

Vue.use(LoadingPlugin)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)

//使用 fastclick 解决移动端 300ms 点击延迟
FastClick.attach(document.body);
Vue.config.productionTip = false
    // 自定义 title 指令
Vue.directive('title', {
    inserted: (el, binding) => {
        document.title = binding.value
    }
})

Vue.use(VueRouter)
const router = new VueRouter({
        // mode: 'history',
        // base: __dirname,
        routes
    })
    // 初始一个 vue 实例,在路由钩子里需要调用ajax请求接口
const _vm = new Vue();
//全局钩子 判断是否登录
router.beforeEach((to, from, next) => {
    store.commit('updateLoadingStatus', { isLoading: true })
    if (to.meta.requireAuth) {
        _vm.$http.post(_vm.Api().isLogin)
            .then((res) => {
                if (res.data.resCode == 100 && localStorage.doctorId && localStorage.mobile) {
                    localStorage.doctorId = res.data.data.doctorId
                    console.log('登录正常');
                    next();
                } else {
                    store.commit('updateLoadingStatus', { isLoading: false });
                    _vm.$vux.alert.show({
                        content: '请您先登录哦！',
                        onHide() {
                            next({
                                name: 'login',
                                query: {
                                    redirect: to.fullPath // 将跳转的路由 path 作为参数,登录后可以直接跳转到该路由
                                }
                            })
                        }
                    })
                }
            }, (response) => {
                alert("网络状态不佳,请重试")
            })
    } else {
        next();
    }
});
router.afterEach((to, from, next) => {
    // 延迟关闭动画
    setTimeout(() => {
        store.commit('updateLoadingStatus', { isLoading: false })
    }, 200)
})


// 页面实例初始并挂载
const vm = new Vue({
    el: '#app',
    router,
    render: (h) => h(App)
}).$mount('#app')