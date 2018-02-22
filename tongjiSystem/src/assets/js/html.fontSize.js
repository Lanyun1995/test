(function(doc, win) {
    var docEl = doc.documentElement,
        isIOS = navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
        dpr = isIOS ? Math.min(win.devicePixelRatio, 3) : 1,
        dpr = window.top === window.self ? dpr : 1, //被iframe引用时，禁止缩放
        resizeEvt = "orientationchange" in window ? "orientationchange" : "resize";
    docEl.dataset.dpr = dpr;
    var recalc = function() {
        var width = docEl.clientWidth;
        if (width / dpr > 375) {
            width = 375 * dpr;
        }
        docEl.dataset.width = width
        docEl.dataset.percent = width / 7.5; //设计图是750，平分7.5份,每份就是1rem
        docEl.style.fontSize = width / 7.5 + "px";
    };
    recalc()
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
})(document, window);