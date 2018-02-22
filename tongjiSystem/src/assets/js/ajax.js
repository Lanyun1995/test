import Vue from 'vue' // 引入 Vue 主文件
import axios from 'axios' // 引入 axios 发请求
import qs from 'qs' // axios 序列化

// axios 默认是 json 发送,需进行序列化处理
Vue.prototype.$http = axios.create({
    timeout: 10000,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    transformRequest: [
        data => { return qs.stringify(data) }
    ]
})