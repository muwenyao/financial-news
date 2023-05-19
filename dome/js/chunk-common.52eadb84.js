(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-common"], {
    1695: function(e, n, t) {
        "use strict";
        (function(e) {
            t.d(n, "d", (function() {
                return i
            }
            )),
            t.d(n, "c", (function() {
                return a
            }
            )),
            t.d(n, "b", (function() {
                return r
            }
            )),
            t.d(n, "a", (function() {
                return c
            }
            ));
            t("7db0"),
            t("acd8"),
            t("b680"),
            t("d3b7"),
            t("25f0"),
            t("c975"),
            t("e25e");
            function i(e) {
                var n = []
                  , t = 0;
                if (e.arr)
                    for (var i = function(t) {
                        var i = e.resultArr.find((function(n) {
                            return n.code === e.arr[t]
                        }
                        ));
                        i && n.push(i)
                    }, a = 0; a < e.arr.length; a++)
                        i(a);
                else
                    n = e.resultArr;
                if (n.length > 0)
                    for (var r = 0; r < n.length; r++)
                        n[r] && n[r].up_rose && (t += n[r] && n[r].up_rose && 0 !== n[r].up_rose ? "" : 0 === n[r].up_rose ? 0 : parseFloat(n[r].up_rose) / 100);
                else
                    t = "";
                return "returnList" === e.returnType ? n : "returnRose" === e.returnType ? "" === t ? "" : parseFloat(t / n.length).toFixed(2) : void 0
            }
            function a(e) {
                e *= 1e4;
                var n = e.toString()
                  , t = "";
                t = -1 !== n.indexOf(".") ? n.substring(0, n.indexOf(".")) : n;
                var i = t.length;
                return parseInt(t) < 0 && (i -= 1),
                t = i > 8 ? (t / 1e8).toFixed(2) + "亿" : 4 < i < 9 ? t / 1e4 + "万" : parseFloat(t).toFixed(2) + "元",
                t
            }
            function r(n, t) {
                var i = {
                    json_head: {
                        function_id: 10002,
                        attrs: 0,
                        length: 11
                    },
                    json_body: {
                        sequence_no: 12345,
                        list_range: 1,
                        op_type: 0,
                        code_lnum: n.length,
                        code_list: n,
                        op_type1: 279,
                        op_type2: 96,
                        op_type3: 0
                    }
                };
                n.length > 0 && e.ajax({
                    url: "https://ehq.htsec.com",
                    data: JSON.stringify(i),
                    type: "POST",
                    timeout: 15e3,
                    success: function(e) {
                        var n = e.json_body
                          , i = n.error_code;
                        if (0 == i) {
                            var a = n && n.cycle_content;
                            t && t(a)
                        }
                    },
                    error: function(e) {
                        return !1
                    }
                })
            }
            var o = 1;
            function c(n, t) {
                var i = new Date(parseInt(n)).getFullYear()
                  , a = new Date(parseInt(n)).getMonth() + 1;
                a < 10 && (a = "0" + a);
                var r = new Date(parseInt(n)).getDate();
                r < 10 && (r = "0" + r);
                var s = i + "" + a + r
                  , u = {
                    json_head: {
                        function_id: 3e4,
                        attrs: 0,
                        length: 11
                    },
                    json_body: {
                        sequence_no: 12345,
                        key: "FUND_ALL_" + s + "_3",
                        key_type: 1,
                        data_pos: 0,
                        req_num: 1e3
                    }
                };
                e.ajax({
                    url: "https://ehqex.htsec.com:8002",
                    data: JSON.stringify(u),
                    type: "POST",
                    timeout: 15e3,
                    headers: {
                        "Authentication-Control": "ht6b6c1774c25193e7"
                    },
                    success: function(e) {
                        var i = e.json_body
                          , a = i.error_code;
                        if (0 == a) {
                            var r = i && i.cycle_content;
                            t && t(r)
                        } else
                            o++,
                            o < 3 && c(n, t)
                    },
                    error: function(e) {
                        o++,
                        o < 3 && c(n, t)
                    }
                })
            }
        }
        ).call(this, t("1157"))
    },
    "271c": function(e, n, t) {
        "use strict";
        (function(e) {
            t.d(n, "k", (function() {
                return g
            }
            )),
            t.d(n, "g", (function() {
                return w
            }
            )),
            t.d(n, "h", (function() {
                return v
            }
            )),
            t.d(n, "d", (function() {
                return i
            }
            )),
            t.d(n, "a", (function() {
                return a
            }
            )),
            t.d(n, "i", (function() {
                return r
            }
            )),
            t.d(n, "n", (function() {
                return c
            }
            )),
            t.d(n, "m", (function() {
                return s
            }
            )),
            t.d(n, "b", (function() {
                return u
            }
            )),
            t.d(n, "f", (function() {
                return l
            }
            )),
            t.d(n, "j", (function() {
                return d
            }
            )),
            t.d(n, "e", (function() {
                return f
            }
            )),
            t.d(n, "c", (function() {
                return p
            }
            )),
            t.d(n, "l", (function() {
                return m
            }
            ));
            t("ac1f"),
            t("841c"),
            t("c975"),
            t("1276"),
            t("466d"),
            t("4ec9"),
            t("d3b7"),
            t("3ca3"),
            t("ddb0"),
            t("4de4"),
            t("acd8"),
            t("25f0"),
            t("498a"),
            t("5319"),
            t("4d63"),
            t("e25e"),
            t("b680");
            function i() {
                var e = location.search
                  , n = {};
                if (-1 != e.indexOf("?"))
                    for (var t = e.substr(1), i = t.split("&"), a = 0; a < i.length; a++)
                        n[i[a].split("=")[0]] = i[a].split("=")[1];
                return n
            }
            function a() {
                window.navigator.userAgent.toLowerCase();
                var e = navigator.userAgent
                  , n = (navigator.appVersion,
                {
                    trident: e.indexOf("Trident") > -1,
                    presto: e.indexOf("Presto") > -1,
                    webKit: e.indexOf("AppleWebKit") > -1,
                    gecko: e.indexOf("Gecko") > -1 && -1 == e.indexOf("KHTML"),
                    mobile: !!e.match(/AppleWebKit.*Mobile.*/) || !!e.match(/AppleWebKit/),
                    ios: !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                    android: e.indexOf("Android") > -1 || e.indexOf("Linux") > -1,
                    iPhone: e.indexOf("iPhone") > -1 || e.indexOf("Mac") > -1,
                    iPad: e.indexOf("iPad") > -1,
                    webApp: -1 == e.indexOf("Safari"),
                    samsung: e.indexOf("SAMSUNG") > -1 || e.indexOf("SM-") > -1,
                    lenovo: e.indexOf("lenovo") > -1 || e.indexOf("Lenovo") > -1,
                    honor: e.indexOf("honor") > -1 || e.indexOf("Honor") > -1,
                    nexus: e.indexOf("nexus") > -1 || e.indexOf("Nexus") > -1
                });
                (navigator.browserLanguage || navigator.language).toLowerCase();
                n.ios || n.iPhone || n.iPad ? window.location = "https://itunes.apple.com/us/app/hai-tonge-hai-tong-cai/id916257651" : window.location.href = "https://a.app.qq.com/o/simple.jsp?pkgname=com.android.haitong"
            }
            function r() {
                var e = navigator.userAgent.toLowerCase();
                return "micromessenger" == e.match(/MicroMessenger/i)
            }
            var o = t("4e12");
            function c(e, n) {
                var t = navigator.userAgent.toLowerCase()
                  , i = "https://stockinfo.htsec.com:19091/htsecNewsDetail/img/app_logo.png"
                  , a = location.href.split("#")[0] || "";
                if ("micromessenger" == t.match(/MicroMessenger/i)) {
                    var r = {
                        title: e,
                        desc: n,
                        link: a,
                        imgUrl: i
                    };
                    o.wxShare(r)
                }
            }
            function s(e, n) {
                var t = navigator.userAgent.toLowerCase()
                  , i = "https://stockinfo.htsec.com:19091/htsecNewsDetail/img/app_logo.png"
                  , a = window.location.href;
                if ("micromessenger" == t.match(/MicroMessenger/i)) {
                    var r = {
                        title: e,
                        desc: n,
                        link: a,
                        imgUrl: i
                    };
                    o.wxShare(r)
                }
            }
            function u(e, n) {
                e = e || window.location.href;
                var t = {}
                  , i = e.split("?");
                if (1 == i.length)
                    return i[0];
                for (var a = i[1].split("&"), r = i[0] + "?", o = 0; o < a.length; o++) {
                    var c = a[o].split("=");
                    if (n.indexOf(c[0]) > -1)
                        ;
                    else {
                        if (!c[0] || !c[1])
                            continue;
                        t[c[0] || ""] = c[1] || "",
                        r = r + (0 == o ? "" : "&") + c[0] + "=" + c[1]
                    }
                }
                return r
            }
            function l(n) {
                for (var t = [], i = [], a = 0; a < n.length; a++)
                    if (-1 === t.indexOf(e(n[a].time).format("YYYY-MM-DD")))
                        i.push({
                            time: e(n[a].time).format("YYYY-MM-DD"),
                            list: [n[a]]
                        }),
                        t.push(e(n[a].time).format("YYYY-MM-DD"));
                    else
                        for (var r = 0; r < i.length; r++)
                            e(i[r].time).format("YYYY-MM-DD") == e(n[a].time).format("YYYY-MM-DD") && i[r].list.push(n[a]);
                return i
            }
            function d(e) {
                var n = parseFloat(e);
                if (isNaN(n))
                    return alert("传递参数错误，请检查！"),
                    !1;
                n = Math.round(100 * e) / 100;
                var t = n.toString()
                  , i = t.indexOf(".");
                i < 0 && (i = t.length,
                t += ".");
                while (t.length <= i + 2)
                    t += "0";
                return t
            }
            function f(e, n) {
                if (e) {
                    if (e = e.trim(),
                    e && e.length > 0) {
                        e = e.replace(/-/g, "/");
                        var t = new Date(e)
                          , i = t.getMonth() + 1;
                        i < 10 && (i = "0" + i);
                        var a = t.getDate();
                        a < 10 && (a = "0" + a);
                        var r = t.getHours();
                        r < 10 && (r = "0" + r);
                        var o = t.getMinutes();
                        o < 10 && (o = "0" + o);
                        var c = t.getFullYear() + "-" + i + "-" + a;
                        n = n.replace(/-/g, "/");
                        var s = new Date(n).getFullYear()
                          , u = new Date(n).getMonth() + 1;
                        u < 10 && (u = "0" + u);
                        var l = new Date(n).getDate();
                        l < 10 && (l = "0" + l);
                        var d = s + "-" + u + "-" + l
                          , f = new RegExp("^((([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29))$");
                        if (f.test(e.replace(/\//g, "-")))
                            return t.getFullYear() === s ? i + "-" + a : t.getFullYear() + "-" + i + "-" + a;
                        if (t.getFullYear() === s)
                            if (c === d)
                                var p = r + ":" + o;
                            else
                                p = i + "-" + a + " " + r + ":" + o;
                        else
                            p = t.getFullYear() + "-" + i + "-" + a + " " + r + ":" + o;
                        return p
                    }
                    return ""
                }
                return ""
            }
            function p(e, n) {
                var t, i, a, r, o = h(e), c = n, s = new Date(o), u = s.getFullYear(), l = s.getMonth() + 1, d = s.getDate(), f = s.getHours(), p = s.getMinutes(), g = s.getSeconds();
                l < 10 && (l = "0" + l),
                d < 10 && (d = "0" + d),
                f < 10 && (f = "0" + f),
                p < 10 && (p = "0" + p),
                g < 10 && (g = "0" + g),
                r = (c - o) / 1e3,
                a = parseInt(r / 86400),
                i = parseInt(r / 3600),
                t = parseInt(r / 60),
                parseInt(r);
                var m = u + "-" + l + "-" + d
                  , w = new Date(parseInt(n)).getFullYear()
                  , v = new Date(parseInt(n)).getMonth() + 1;
                v < 10 && (v = "0" + v);
                var b = new Date(parseInt(n)).getDate();
                b < 10 && (b = "0" + b);
                var O = w + "-" + v + "-" + b
                  , S = new RegExp("^((([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29))$");
                return S.test(e) ? '<i class="numFamily">'.concat(u === w ? l + "-" + d : u + "-" + l + "-" + d, "</i>") : u !== w ? '<i class="numFamily">'.concat(u + "-" + l + "-" + d, "</i>") : m !== O ? '<i class="numFamily">'.concat(l + "-" + d + " " + f + ":" + p, "</i>") : a > 0 ? '<i class="numFamily">'.concat(f + ":" + p, "</i>") : a <= 0 && i > 0 ? '<i class="numFamily">'.concat(i, "</i>小时前") : i <= 0 && t > 0 ? '<i class="numFamily">'.concat(t, "</i>分钟前") : void 0
            }
            function h(e) {
                return Date.parse(e && e.replace(/-/gi, "/"))
            }
            function g(e) {
                var n = e.curTimeStamp ? e.curTimeStamp : 1
                  , t = e.pageCount ? e.pageCount : 10
                  , i = !!e.lock && e.lock
                  , a = !!e.pageLoading && e.pageLoading
                  , r = e.callBack ? e.callBack : null
                  , o = document.querySelector(".ul_list")
                  , c = document.documentElement.scrollTop || document.body.scrollTop
                  , s = document.documentElement.clientHeight || document.body.clientHeight
                  , u = document.documentElement.scrollHeight || document.body.scrollHeight;
                if (c > 0 && u > s && Math.ceil(c + s) >= u) {
                    if (o.length > 1 || i)
                        return !1;
                    i = !0,
                    a = !0,
                    "function" === typeof r && r(n, t, i, a)
                }
            }
            function m(e) {
                var n = e.curPage ? e.curPage : 1
                  , t = e.pageCount ? e.pageCount : 10
                  , i = !!e.lock && e.lock
                  , a = !!e.pageLoading && e.pageLoading
                  , r = e.callBack ? e.callBack : null
                  , o = document.getElementsByClassName("ul_list")
                  , c = document.documentElement.scrollTop || document.body.scrollTop
                  , s = document.documentElement.clientHeight || document.body.clientHeight
                  , u = document.body.scrollHeight > document.documentElement.scrollHeight ? document.body.scrollHeight : document.documentElement.scrollHeight;
                if (c > 0 && u > s && Math.ceil(c + s) >= u) {
                    if (o.length > 1 || i)
                        return !1;
                    i = !0,
                    a = !0,
                    "function" === typeof r && r(n, t, i, a)
                }
            }
            function w(e) {
                var n, t = parseInt(e).toString().length;
                return n = t > 8 ? (e / 1e8).toFixed(2) + "亿" : t > 4 && t < 9 ? (e / 1e4).toFixed(2) + "万" : parseFloat(e),
                n
            }
            function v() {
                var e = navigator.userAgent.indexOf("Android") > -1 || navigator.userAgent.indexOf("Adr") > -1
                  , n = (window.navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                -1 != window.navigator.userAgent.indexOf("/ehtsec") || -1 != window.navigator.userAgent.indexOf("crhappnewClient") || window.WebViewJavascriptBridge || window.WVJBCallbacks)
                  , t = i() && i().version ? i().version : "";
                return !(n && e && parseFloat(t) >= 9)
            }
        }
        ).call(this, t("5a0c"))
    },
    "4e12": function(e, n, t) {
        "use strict";
        t.r(n),
        function(e) {
            t.d(n, "wxShare", (function() {
                return o
            }
            ));
            t("ac1f"),
            t("1276"),
            t("9911");
            var i = t("7147");
            function a(n, t) {
                e.ajax({
                    url: "https://stockinfo.htsec.com:19089/api/ShareSDK",
                    type: "POST",
                    data: JSON.stringify({
                        reshareUrl: location.href.split("#")[0]
                    }),
                    contentType: "application/json",
                    success: function(e) {
                        n(e.appID, e.timeStamp, e.nonceStr, e.signature, t)
                    },
                    error: function(e) {
                        console.log(JSON.stringify(e))
                    }
                })
            }
            function r(e, n, t, a, r) {
                wx.config({
                    debug: !!i.getRequest().isDebug,
                    appId: e,
                    timestamp: n,
                    nonceStr: t,
                    signature: a,
                    jsApiList: ["updateAppMessageShareData", "updateTimelineShareData", "onMenuShareAppMessage", "onMenuShareTimeline", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone"]
                }),
                wx.ready((function() {
                    wx.onMenuShareAppMessage ? (wx.onMenuShareAppMessage(r),
                    wx.onMenuShareQQ(r)) : wx.updateAppMessageShareData(r),
                    wx.onMenuShareTimeline ? (wx.onMenuShareTimeline(r),
                    wx.onMenuShareQZone(r)) : wx.updateTimelineShareData(r),
                    wx.onMenuShareWeibo(r)
                }
                ))
            }
            function o(e) {
                var n = {
                    title: e.title || "",
                    desc: e.desc || "",
                    link: e.link || "",
                    imgUrl: e.imgUrl || "",
                    success: e.success || function() {}
                    ,
                    cancel: e.cancel || function() {}
                };
                a(r, n)
            }
        }
        .call(this, t("1157"))
    },
    7147: function(e, n, t) {
        "use strict";
        t.r(n),
        t.d(n, "getRequest", (function() {
            return i
        }
        )),
        t.d(n, "disclaimerHtml", (function() {
            return a
        }
        )),
        t.d(n, "moduleTitle", (function() {
            return r
        }
        )),
        t.d(n, "DownLoad", (function() {
            return o
        }
        )),
        t.d(n, "delUrl", (function() {
            return c
        }
        )),
        t.d(n, "keepTwoDecimalFull", (function() {
            return s
        }
        )),
        t.d(n, "getResultData", (function() {
            return l
        }
        )),
        t.d(n, "unique", (function() {
            return d
        }
        ));
        t("ac1f"),
        t("841c"),
        t("c975"),
        t("1276"),
        t("99af"),
        t("466d"),
        t("acd8"),
        t("d3b7"),
        t("25f0"),
        t("4ec9"),
        t("3ca3"),
        t("ddb0"),
        t("4de4");
        function i() {
            var e = location.search
              , n = {}
              , t = "";
            if (-1 != e.indexOf("?")) {
                var i = e.substr(1);
                t = i.split("&");
                for (var a = 0; a < t.length; a++)
                    n[t[a].split("=")[0]] = t[a].split("=")[1]
            }
            return n
        }
        function a() {
            return '<div class="disclaimer">\n        <p>免责声明：市场有风险，投资需谨慎。本资讯中的内容和意见仅供参考，并不构成对所述证券买卖做出保证。投资者不应将本资讯作为投资决策的唯一参考因素。亦不应以本资讯取代自己的判断。在任何情况下，海通证券不对任何人因使用本平台中的内容所引致的任何损失负任何责任。盘中宝资讯内容由财联社提供，与海通证券无关。</p>\n    </div>'
        }
        function r(e) {
            return '<div class="module-title clearfix">\n      <div class="module-title-left">\n        <span>'.concat(e.titleStr ? e.titleStr : "", '</span>\n      </div>\n      <div class="module-title-right">\n        <span>').concat(e.moreStr ? e.moreStr : "", '</span>\n        <img src="').concat(e.iconStr ? e.iconStr : "", '" alt=""/>\n      </div>\n    </div>')
        }
        function o() {
            window.navigator.userAgent.toLowerCase();
            var e = navigator.userAgent
              , n = (navigator.appVersion,
            {
                trident: e.indexOf("Trident") > -1,
                presto: e.indexOf("Presto") > -1,
                webKit: e.indexOf("AppleWebKit") > -1,
                gecko: e.indexOf("Gecko") > -1 && -1 == e.indexOf("KHTML"),
                mobile: !!e.match(/AppleWebKit.*Mobile.*/) || !!e.match(/AppleWebKit/),
                ios: !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                android: e.indexOf("Android") > -1 || e.indexOf("Linux") > -1,
                iPhone: e.indexOf("iPhone") > -1 || e.indexOf("Mac") > -1,
                iPad: e.indexOf("iPad") > -1,
                webApp: -1 == e.indexOf("Safari"),
                samsung: e.indexOf("SAMSUNG") > -1 || e.indexOf("SM-") > -1,
                lenovo: e.indexOf("lenovo") > -1 || e.indexOf("Lenovo") > -1,
                honor: e.indexOf("honor") > -1 || e.indexOf("Honor") > -1,
                nexus: e.indexOf("nexus") > -1 || e.indexOf("Nexus") > -1
            });
            (navigator.browserLanguage || navigator.language).toLowerCase();
            n.ios || n.iPhone || n.iPad ? window.location = "https://itunes.apple.com/us/app/hai-tonge-hai-tong-cai/id916257651" : window.location.href = "https://a.app.qq.com/o/simple.jsp?pkgname=com.android.haitong"
        }
        function c(e, n) {
            e = e || window.location.href;
            var t = {}
              , i = e.split("?");
            if (1 == i.length)
                return i[0];
            for (var a = i[1].split("&"), r = i[0] + "?", o = 0; o < a.length; o++) {
                var c = a[o].split("=");
                if (n.indexOf(c[0]) > -1)
                    ;
                else {
                    if (!c[0] || !c[1])
                        continue;
                    t[c[0] || ""] = c[1] || "",
                    r = r + (0 == o ? "" : "&") + c[0] + "=" + c[1]
                }
            }
            return r
        }
        function s(e) {
            var n = parseFloat(e);
            if (isNaN(n))
                return alert("传递参数错误，请检查！"),
                !1;
            n = Math.round(100 * e) / 100;
            var t = n.toString()
              , i = t.indexOf(".");
            i < 0 && (i = t.length,
            t += ".");
            while (t.length <= i + 2)
                t += "0";
            return t
        }
        function u(e, n) {
            for (var t = {}, i = 0; i < e.length; i++)
                t[e[i]] = n[i];
            return t
        }
        function l(e, n) {
            var t = [];
            e = e || [],
            n = n || [];
            for (var i = 0; i < n.length; i++)
                t.push(u(e, n[i]));
            return t
        }
        function d(e) {
            var n = new Map;
            return e.filter((function(e) {
                return !n.has(e.articleId) && n.set(e.articleId, 1)
            }
            ))
        }
    },
    a545: function(e, n, t) {
        "use strict";
        t.d(n, "a", (function() {
            return k
        }
        ));
        t("ace4"),
        t("d3b7"),
        t("5cc6"),
        t("9a8c"),
        t("a975"),
        t("735e"),
        t("c1ac"),
        t("d139"),
        t("3a7b"),
        t("d5d6"),
        t("82f8"),
        t("e91f"),
        t("60bd"),
        t("5f96"),
        t("3280"),
        t("3fcc"),
        t("ca91"),
        t("25a1"),
        t("cd26"),
        t("3c5d"),
        t("2954"),
        t("649e"),
        t("219c"),
        t("170b"),
        t("b39a"),
        t("72f7"),
        t("fb6a"),
        t("e25e"),
        t("25f0"),
        t("a15b"),
        t("ac1f"),
        t("466d"),
        t("5319");
        var i = 0
          , a = "ehtczxvip1234567";
        function r(e, n) {
            return e[n] << 24 | e[n + 1] << 16 | e[n + 2] << 8 | e[n + 3]
        }
        function o(e, n, t) {
            n[t] = e >>> 24,
            n[t + 1] = e >>> 16,
            n[t + 2] = e >>> 8,
            n[t + 3] = e
        }
        function c(e, n) {
            var t = (4294967295 & e) << n
              , i = e >>> 32 - n;
            return t | i
        }
        var s = [[214, 144, 233, 254, 204, 225, 61, 183, 22, 182, 20, 194, 40, 251, 44, 5], [43, 103, 154, 118, 42, 190, 4, 195, 170, 68, 19, 38, 73, 134, 6, 153], [156, 66, 80, 244, 145, 239, 152, 122, 51, 84, 11, 67, 237, 207, 172, 98], [228, 179, 28, 169, 201, 8, 232, 149, 128, 223, 148, 250, 117, 143, 63, 166], [71, 7, 167, 252, 243, 115, 23, 186, 131, 89, 60, 25, 230, 133, 79, 168], [104, 107, 129, 178, 113, 100, 218, 139, 248, 235, 15, 75, 112, 86, 157, 53], [30, 36, 14, 94, 99, 88, 209, 162, 37, 34, 124, 59, 1, 33, 120, 135], [212, 0, 70, 87, 159, 211, 39, 82, 76, 54, 2, 231, 160, 196, 200, 158], [234, 191, 138, 210, 64, 199, 56, 181, 163, 247, 242, 206, 249, 97, 21, 161], [224, 174, 93, 164, 155, 52, 26, 85, 173, 147, 50, 48, 245, 140, 177, 227], [29, 246, 226, 46, 130, 102, 202, 96, 192, 41, 35, 171, 13, 83, 78, 111], [213, 219, 55, 69, 222, 253, 142, 47, 3, 255, 106, 114, 109, 108, 91, 81], [141, 27, 175, 146, 187, 221, 188, 127, 17, 217, 92, 65, 31, 16, 90, 216], [10, 193, 49, 136, 165, 205, 123, 189, 45, 116, 208, 18, 184, 229, 180, 176], [137, 105, 151, 74, 12, 150, 119, 126, 101, 185, 241, 9, 197, 110, 198, 132], [24, 240, 125, 236, 58, 220, 77, 32, 121, 238, 95, 62, 215, 203, 57, 72]]
          , u = [2746333894, 1453994832, 1736282519, 2993693404]
          , l = [462357, 472066609, 943670861, 1415275113, 1886879365, 2358483617, 2830087869, 3301692121, 3773296373, 4228057617, 404694573, 876298825, 1347903077, 1819507329, 2291111581, 2762715833, 3234320085, 3705924337, 4177462797, 337322537, 808926789, 1280531041, 1752135293, 2223739545, 2695343797, 3166948049, 3638552301, 4110090761, 269950501, 741554753, 1213159005, 1684763257];
        function d(e) {
            var n = e >>> 4
              , t = e % 16;
            return s[n][t]
        }
        function f(e) {
            var n = 0
              , t = 0
              , i = new Uint8Array(4)
              , a = new Array(4);
            return o(e, i, 0),
            a[0] = d(i[0]),
            a[1] = d(i[1]),
            a[2] = d(i[2]),
            a[3] = d(i[3]),
            n = r(a, 0),
            t = n ^ c(n, 2) ^ c(n, 10) ^ c(n, 18) ^ c(n, 24),
            t
        }
        function p(e, n, t, i, a) {
            return e ^ f(n ^ t ^ i ^ a)
        }
        function h(e) {
            var n = 0
              , t = 0
              , i = new Uint8Array(4)
              , a = new Array(4);
            return o(e, i, 0),
            a[0] = d(i[0]),
            a[1] = d(i[1]),
            a[2] = d(i[2]),
            a[3] = d(i[3]),
            n = r(a, 0),
            t = n ^ c(n, 13) ^ c(n, 23),
            t
        }
        function g(e, n) {
            var t = new Array(4)
              , i = new Array(36)
              , a = 0;
            for (t[0] = r(n, 0),
            t[1] = r(n, 4),
            t[2] = r(n, 8),
            t[3] = r(n, 12),
            i[0] = t[0] ^ u[0],
            i[1] = t[1] ^ u[1],
            i[2] = t[2] ^ u[2],
            i[3] = t[3] ^ u[3]; a < 32; a++)
                i[a + 4] = i[a] ^ h(i[a + 1] ^ i[a + 2] ^ i[a + 3] ^ l[a]),
                e[a] = i[a + 4]
        }
        function m(e, n, t) {
            var i = 0
              , a = new Array(36);
            a[0] = r(n, 0),
            a[1] = r(n, 4),
            a[2] = r(n, 8),
            a[3] = r(n, 12);
            while (i < 32)
                a[i + 4] = p(a[i], a[i + 1], a[i + 2], a[i + 3], e[i]),
                i++;
            o(a[35], t, 0),
            o(a[34], t, 4),
            o(a[33], t, 8),
            o(a[32], t, 12)
        }
        function w(e, n) {
            var t = e[n];
            e[n] = e[31 - n],
            e[31 - n] = t
        }
        function v(e, n) {
            e.mode = i,
            g(e.sk, n);
            for (var t = 0; t < 16; t++)
                w(e.sk, t)
        }
        function b(e, n) {
            var t = 0
              , i = n.length
              , a = [];
            while (i > 0) {
                var r = n.slice(t, t + 16)
                  , o = new Uint8Array(16);
                m(e.sk, r, o);
                for (var c = 0; c < 16; c++)
                    a[t + c] = o[c];
                t += 16,
                i -= 16
            }
            return a
        }
        function O(e) {
            for (var n = [], t = 0; t < e.length; t++) {
                var i = e.charCodeAt(t);
                i >= 65536 && i <= 1114111 ? (n.push(i >> 18 & 7 | 240),
                n.push(i >> 12 & 63 | 128),
                n.push(i >> 6 & 63 | 128),
                n.push(63 & i | 128)) : i >= 2048 && i <= 65535 ? (n.push(i >> 12 & 15 | 224),
                n.push(i >> 6 & 63 | 128),
                n.push(63 & i | 128)) : i >= 128 && i <= 2047 ? (n.push(i >> 6 & 31 | 192),
                n.push(63 & i | 128)) : n.push(255 & i)
            }
            return n
        }
        function S(e) {
            if ("string" === typeof e)
                return e;
            for (var n = "", t = e, i = 0; i < t.length; i++) {
                var a = t[i].toString(2)
                  , r = a.match(/^1+?(?=0)/);
                if (r && 8 === a.length) {
                    for (var o = r[0].length, c = t[i].toString(2).slice(7 - o), s = 1; s < o; s++)
                        c += t[s + i] && t[s + i].toString(2).slice(2);
                    n += String.fromCharCode(parseInt(c, 2)),
                    i += o - 1
                } else
                    n += String.fromCharCode(t[i])
            }
            return n
        }
        var x = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        function y(e) {
            var n, t, i, a, r, o, c, s = [], u = 0;
            e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            while (u < e.length)
                a = x.indexOf(e.charAt(u++)),
                r = x.indexOf(e.charAt(u++)),
                o = x.indexOf(e.charAt(u++)),
                c = x.indexOf(e.charAt(u++)),
                n = a << 2 | r >> 4,
                t = (15 & r) << 4 | o >> 2,
                i = (3 & o) << 6 | c,
                s.push(n),
                64 !== o && s.push(t),
                64 !== c && s.push(i);
            return s
        }
        function A(e) {
            if (!e)
                return a;
            e = e.replace(/[^\x00-\xff]/g, "00");
            var n = e.length;
            if (16 === n)
                return e;
            if (n > 16)
                return e.substring(0, 16);
            for (var t = 0; t < 16 - n; t++)
                e = "0" + e;
            return e
        }
        var D = [];
        function M(e) {
            var n = JSON.parse(JSON.stringify(e))
              , t = n.length;
            0 == n[t - 1] && M(n.slice(0, t - 1)),
            D.push(t)
        }
        function k(e, n) {
            D = [];
            var t = {
                mode: 0,
                sk: []
            };
            t.mode = i;
            var a = O(A(n));
            v(t, a);
            var r = y(e)
              , o = b(t, r);
            return M(o),
            S(o.slice(0, D[0]))
        }
    },
    b284: function(e, n, t) {
        "use strict";
        t.d(n, "b", (function() {
            return a
        }
        )),
        t.d(n, "a", (function() {
            return r
        }
        ));
        t("4795"),
        t("ac1f"),
        t("466d"),
        t("c975"),
        t("acd8"),
        t("9911"),
        t("e25e");
        var i = t("271c");
        function a(e) {
            if (window.WebViewJavascriptBridge)
                return e(window.WebViewJavascriptBridge);
            if (window.WVJBCallbacks)
                return window.WVJBCallbacks.push(e);
            window.WVJBCallbacks = [e];
            var n = document.createElement("iframe");
            n.style.display = "none",
            n.src = "wvjbscheme://__BRIDGE_LOADED__",
            document.documentElement.appendChild(n),
            setTimeout((function() {
                document.documentElement.removeChild(n)
            }
            ), 0)
        }
        var r = {
            isIos: !!window.navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
            isAndroid: navigator.userAgent.indexOf("Android") > -1 || navigator.userAgent.indexOf("Adr") > -1,
            inApp: -1 != window.navigator.userAgent.indexOf("/ehtsec") || -1 != window.navigator.userAgent.indexOf("crhappnewClient") || window.WebViewJavascriptBridge || window.WVJBCallbacks,
            zxStatSAEvent: function(e) {
                var n = this;
                n.isIos ? a((function(n) {
                    n.callHandler("ht_log", {
                        event: "bannerClick",
                        properties: {
                            clickKey: "51781",
                            bannerPage: "资讯h5",
                            bannerId: e.bannerId,
                            bannerName: e.bannerName
                        }
                    })
                }
                )) : window && window.appData && window.appData.statSAEvent && window.appData.statSAEvent("bannerClick", JSON.stringify({
                    clickKey: "51781",
                    bannerPage: "资讯h5",
                    bannerId: e.bannerId,
                    bannerName: e.bannerName
                }))
            },
            statBuriedPointSAEvent: function(e) {
                var n = this;
                n.isIos ? a((function(n) {
                    n.callHandler("ht_log", {
                        event: e.eventName,
                        properties: e.params
                    })
                }
                )) : window && window.appData && window.appData.statSAEvent && window.appData.statSAEvent(e.eventName, JSON.stringify(e.params))
            },
            htChangeFavorStatus: function(e) {
                var n = this;
                n.isIos ? a((function(n) {
                    n.callHandler("htChangeFavorStatus", e)
                }
                )) : "pc" !== Object(i["d"])().channel && (window.location.href = "ehtsec://collectionStatus=" + e)
            },
            htGetFavorStatus: function(e) {
                var n = this;
                n.isIos && a((function(n) {
                    n.callHandler("htGetFavorStatus", e)
                }
                ))
            },
            htRefreshFavorStatus: function(e) {
                var n = this;
                n.isIos && a((function(n) {
                    n.registerHandler("htRefreshFavorStatus", e)
                }
                ))
            },
            login: function() {
                var e = this;
                e.inApp && (e.isIos ? a((function(e) {
                    e.callHandler("communityLogin", (function(e) {}
                    ))
                }
                )) : squareLoginObj && (parseFloat(Object(i["d"])().version) > 8.01 ? squareLoginObj.communityLoginWithFinish() : "pc" !== Object(i["d"])().channel && (window.location.href = "ehtsec://funid=10088&communityLogin=1&path=request%3Dpersonal-message")))
            },
            communityLogin: function(e) {
                var n = this;
                n.inApp && (n.isIos ? a((function(n) {
                    n.callHandler("communityLogin", (function(e) {}
                    )),
                    n.registerHandler("updateCommunity", (function(n) {
                        e(n)
                    }
                    ))
                }
                )) : window.squareLoginObj && (window.updateCommunity = function(n, t) {
                    var i = {
                        token: n,
                        account: t
                    };
                    e(i)
                }
                ,
                parseFloat(Object(i["d"])().version) > 8.01 ? squareLoginObj.communityLoginWithFinish() : "pc" !== Object(i["d"])().channel && (window.location.href = "ehtsec://funid=10088&communityLogin=1&path=request%3Dpersonal-message")))
            },
            getUpdateCommunity: function(e) {
                var n = this;
                n.inApp && (n.isIos ? a((function(n) {
                    n.registerHandler("updateCommunity", (function(n) {
                        e && e(n)
                    }
                    ))
                }
                )) : window.updateCommunity = function(n, t) {
                    var i = {
                        token: n,
                        account: t
                    };
                    e && e(i)
                }
                )
            },
            updateShareData: function(e) {
                var n = this;
                n.isIos ? a((function(n) {
                    parseFloat(Object(i["d"])().version) > 8.01 ? n.callHandler("updateShareData", e) : n.registerHandler("GotoShareHandler", (function(n, t) {
                        t(e)
                    }
                    ))
                }
                )) : (window.gotoShare = function() {
                    window.shareObj && (parseFloat(Object(i["d"])().version) > 8.01 ? window.shareObj.setShareData(JSON.stringify({
                        title: e.title || "",
                        summary: e.content || "",
                        source: e.sourceStr || "",
                        linkUrl: e.link || "",
                        coverUrl: e.imgUrl || "",
                        time: e.date || "",
                        businessType: e.businessType || "",
                        newsId: e.newsId || ""
                    })) : shareObj.setShareData(e.title || "", e.content || "", e.link || "", e.imgUrl || ""))
                }
                ,
                window && window.shareObj && window.shareObj.updateShareData && window.shareObj.updateShareData(JSON.stringify({
                    title: e.title || "",
                    summary: e.content || "",
                    source: e.sourceStr || "",
                    linkUrl: e.link || "",
                    time: e.date || "",
                    coverUrl: e.imgUrl || "",
                    businessType: e.businessType || "",
                    newsId: e.newsId || ""
                })))
            },
            updateCollectData: function(e) {
                window.shareObj && window.shareObj.updateCollectData && window.shareObj.updateCollectData(JSON.stringify({
                    title: e.title || "",
                    summary: e.content || "",
                    source: e.sourceStr || "",
                    linkUrl: e.linkUrl || "",
                    time: e.dateStr || "",
                    coverUrl: e.imgUrl || "",
                    newsId: e.id
                }))
            },
            htChangeReadStatus: function(e) {
                var n = this;
                n.inApp && (n.isIos ? a((function(n) {
                    n.callHandler("htChangeReadStatus", {
                        id: e
                    })
                }
                )) : squareLoginObj && squareLoginObj.setInfoReadStatus && squareLoginObj.setInfoReadStatus(e))
            },
            getInfoReadStatus: function(e, n) {
                var t = this;
                t.inApp && t.isIos && a((function(t) {
                    t.callHandler("htGetReadStatus", {
                        id: e
                    }, n)
                }
                ))
            },
            getCommunityAccount: function(e) {
                var n = this;
                if (n.isIos)
                    a((function(n) {
                        n.callHandler("getCommunityAccount", e)
                    }
                    ));
                else if (window.squareDataObj) {
                    var t = {
                        token: window.squareDataObj.getToken(),
                        account: window.squareDataObj.getAccount()
                    };
                    e(t)
                } else
                    console.error("当前webView未注入社区模块")
            },
            sendH5Info: function(e) {
                var n = this;
                n.isIos ? a((function(n) {
                    n.callHandler("ht_sendH5Info", e)
                }
                )) : window && window.appData && window.appData.sendH5Info && window.appData.sendH5Info(JSON.stringify(e))
            },
            htShareAction: function(e) {
                var n = this;
                n.isIos ? a((function(n) {
                    n.callHandler("htShareAction", e)
                }
                )) : shareObj && shareObj.setShareData && shareObj.setShareData(parseInt(e.shareOptions), e.title, e.content, e.link, e.imgUrl)
            },
            syncCollectionStatus: function(e) {
                var n = this;
                n.isAndroid && (window.syncCollectionStatus = function(n) {
                    e(n)
                }
                )
            },
            doComment: function(e, n) {
                var t = this;
                t.inApp && (t.isIos ? a((function(t) {
                    t.callHandler("community_doComment", e, n)
                }
                )) : window.squareDataObj ? (window && window.squareDataObj && window.squareDataObj.doComment && window.squareDataObj.doComment(JSON.stringify(e)),
                window && window.appData && window.appData.sendH5Info && window.appData.sendH5Info(JSON.stringify({
                    callJsWhenResume: e.callJsWhenResume
                }))) : console.error("当前webView未注入社区模块"))
            }
        }
    }
}]);
