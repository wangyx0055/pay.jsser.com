;
(function() {

    var params = {
        version: "1.0"
    };
    if (document) {
        params.domain = document.domain || '';
        params.url = document.URL || '';
        params.title = document.title || '';
        params.referrer = document.referrer || '';
    }

    if (window && window.screen) {
        params.sh = window.screen.height || 0;
        params.sw = window.screen.width || 0;
        params.cd = window.screen.colorDepth || 0;
    }

    if (navigator) {
        params.lang = navigator.language || '';
    }
    var queryStringMap = (function() {
        var sc = document.getElementsByTagName('script');
        var src = sc[sc.length - 1].src; //split("?")[1].split('&');
        var arr = [];
        if (src.indexOf('?') > -1) {
            arr = src.split("?")[1].split("&");
        }
        var obj = {},
            param;
        for (var i = 0; i < arr.length; i++) {
            param = arr[i].split('=');
            var k = param[0],
                v = (typeof param[1] == 'undefined' ? '' : param[1]);
            if (typeof obj[k] == 'undefined') {
                obj[k] = v;
            }
        }
        return obj;
    });
    var extend = function(o, n, override) {
        for (var p in n) {
            if (n.hasOwnProperty(p) && (!o.hasOwnProperty(p) || override)) o[p] = n[p];
        }
    };
    var qs = queryStringMap();
    extend(params, qs);
    var args = '';
    for (var i in params) {
        if (args != '') {
            args += '&';
        }
        args += i + '=' + encodeURIComponent(params[i]);
    }
    args += '&_t=' + encodeURIComponent((new Date()).valueOf());

    var domainList = [
        'localhost',
        '127.0.0.1',
        'blog.jsser.com',
        'jsser.com',
        'pay.jsser.com'
    ];

    var check = false;
    for (var i = 0; i < domainList.length; i++) {
        if (domainList[i] == params.domain) {
            check = true;
            break;
        }
    }

    if (check) {
        var img = new Image(1, 1);
        img.src = '//log.jsser.com/ga.gif?' + args;
    }
})();