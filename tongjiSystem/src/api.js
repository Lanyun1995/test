import Vue from 'vue'

// 本地
var host = '/api';

// 打包
//var host = '/ydyproxy';

Vue.prototype.Api = function() {
    return {
        // 判断医生是否登录接口
        isLogin: host + '/doct/islogin',
        // 退出接口
        outLogin: host + '/doct/out-login',
        //登录接口
        Login: host + '/doct/login',
        //验证码接口
        getSmscode: host + '/p/account/get-verify-code',
    }
}