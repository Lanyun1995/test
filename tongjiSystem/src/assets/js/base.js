import Vue from 'vue'

(function() {
    Vue.prototype.$u = {
        isWeixin: function() {
            var ua = window.navigator.userAgent.toLowerCase();
            if (ua.match(/MicroMessenger/i) == 'micromessenger') {
                return true;
            } else {
                return false;
            }
        },
        getCookie: function(name) {
            var v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
            return v ? v[2] : null;
        },
        setCookie: function(name, value, days) {
            var d = new Date;
            d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
            window.document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
        },
        getCookieUn: function(name) {
            var v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
            var res = v ? v[2] : null;
            return res ? JSON.parse(unescape(res)) : "";
        },
        setCookieEn: function(name, value, days) {
            value = escape(JSON.stringify(value));
            var d = new Date;
            d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
            window.document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
        },
        clearCookie: function(name) {
            this.setCookie(name, "", -1);
        },
        setPageTitle: function(title) {
            //动态获取标题
            var $body = $("body");
            document.title = title;
            var $iframe = $('<iframe src="../../../static/icon_xiala.png" style="opacity:0;"></iframe>')
                .on("load", function() {
                    setTimeout(function() {
                        $iframe.off("load").remove();
                    }, 0);
                })
                .appendTo($body);
        }
    };
})()