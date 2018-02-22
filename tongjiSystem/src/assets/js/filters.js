/**
 * Created by YYVZB on 2017/4/24.
 * 全局自定义过滤器
 */

import Vue from 'vue'

Vue.filter('MD', function(input) {
    var formatInput = input.replace(/-/g, "/")

    function timeFunc(ele) {
        return ele < 10 ? "0" + ele : ele;
    }
    var oDate = new Date(formatInput);
    return timeFunc(oDate.getDate())
});
Vue.filter('format', function(input) {
    return input.replace(/\-/g, "/")
});
Vue.filter('Mobile', function(input) {
    if (input) {
        return input.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
    }
});

Vue.filter('data', function(input) {
    if (input) {
        var showList = []
        input.forEach(function(obj, index) {
            showList.push({
                src: obj + '?imageView2/0/w/1024/q/50'
            })
        })
    }
    return showList
});
// 自定义根据索引删除数组元素
Array.prototype.delete = function(delIndex) {
    var temArray = [];
    for (var i = 0; i < this.length; i++) {
        if (i != delIndex) {
            temArray.push(this[i]);
        }
    }
    return temArray;
}