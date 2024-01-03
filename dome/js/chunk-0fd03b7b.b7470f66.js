(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-0fd03b7b"], {
    "06c5": function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return r
        }
        ));
        n("fb6a"),
        n("d3b7"),
        n("b0c0"),
        n("a630"),
        n("3ca3");
        var i = n("6b75");
        function r(t, e) {
            if (t) {
                if ("string" === typeof t)
                    return Object(i["a"])(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Object(i["a"])(t, e) : void 0
            }
        }
    },
    "0a06": function(t, e, n) {
        "use strict";
        var i = n("c532")
          , r = n("30b5")
          , o = n("f6b4")
          , s = n("5270")
          , a = n("4a7b")
          , u = n("83b9")
          , c = n("848b")
          , l = c.validators;
        function d(t) {
            this.defaults = t,
            this.interceptors = {
                request: new o,
                response: new o
            }
        }
        d.prototype.request = function(t, e) {
            "string" === typeof t ? (e = e || {},
            e.url = t) : e = t || {},
            e = a(this.defaults, e),
            e.method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
            var n = e.transitional;
            void 0 !== n && c.assertOptions(n, {
                silentJSONParsing: l.transitional(l.boolean),
                forcedJSONParsing: l.transitional(l.boolean),
                clarifyTimeoutError: l.transitional(l.boolean)
            }, !1);
            var i = []
              , r = !0;
            this.interceptors.request.forEach((function(t) {
                "function" === typeof t.runWhen && !1 === t.runWhen(e) || (r = r && t.synchronous,
                i.unshift(t.fulfilled, t.rejected))
            }
            ));
            var o, u = [];
            if (this.interceptors.response.forEach((function(t) {
                u.push(t.fulfilled, t.rejected)
            }
            )),
            !r) {
                var d = [s, void 0];
                Array.prototype.unshift.apply(d, i),
                d = d.concat(u),
                o = Promise.resolve(e);
                while (d.length)
                    o = o.then(d.shift(), d.shift());
                return o
            }
            var f = e;
            while (i.length) {
                var p = i.shift()
                  , h = i.shift();
                try {
                    f = p(f)
                } catch (m) {
                    h(m);
                    break
                }
            }
            try {
                o = s(f)
            } catch (m) {
                return Promise.reject(m)
            }
            while (u.length)
                o = o.then(u.shift(), u.shift());
            return o
        }
        ,
        d.prototype.getUri = function(t) {
            t = a(this.defaults, t);
            var e = u(t.baseURL, t.url);
            return r(e, t.params, t.paramsSerializer)
        }
        ,
        i.forEach(["delete", "get", "head", "options"], (function(t) {
            d.prototype[t] = function(e, n) {
                return this.request(a(n || {}, {
                    method: t,
                    url: e,
                    data: (n || {}).data
                }))
            }
        }
        )),
        i.forEach(["post", "put", "patch"], (function(t) {
            function e(e) {
                return function(n, i, r) {
                    return this.request(a(r || {}, {
                        method: t,
                        headers: e ? {
                            "Content-Type": "multipart/form-data"
                        } : {},
                        url: n,
                        data: i
                    }))
                }
            }
            d.prototype[t] = e(),
            d.prototype[t + "Form"] = e(!0)
        }
        )),
        t.exports = d
    },
    "0a1c": function(t, e, n) {
        "use strict";
        n("803d")
    },
    "0df6": function(t, e, n) {
        "use strict";
        t.exports = function(t) {
            return function(e) {
                return t.apply(null, e)
            }
        }
    },
    "18f8": function(t, e, n) {
        "use strict";
        var i = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "module-title clearfix",
                on: {
                    click: t.goToHomepage
                }
            }, [n("div", {
                staticClass: "module-title-left"
            }, [n("span", [t._v(t._s(t.titleData.titleStr ? t.titleData.titleStr : ""))])]), n("div", {
                staticClass: "module-title-right"
            }, [n("span", [t._v(t._s(t.titleData.moreStr ? t.titleData.moreStr : ""))]), n("img", {
                attrs: {
                    src: t.titleData.iconStr ? t.titleData.iconStr : "",
                    alt: ""
                }
            })])])
        }
          , r = []
          , o = {
            name: "TitleModule",
            data: function() {
                return {}
            },
            props: ["titleData"],
            methods: {
                goToHomepage: function() {
                    var t = {
                        10: "dehydration",
                        tuoshui: "dehydration",
                        1: "tradingNews",
                        pzb: "tradingNews"
                    }
                      , e = "http://ops.htsec.com:19188/" + t[this.$getRequest().type ? this.$getRequest().type : "pzb"] + "/index.html#/?";
                    this.$HTBridge.inApp ? window.location.href = "@redirect=info&url=" + encodeURIComponent(e + "version=" + this.$getRequest().version + "&channel=" + this.$getRequest().channel + "&theme=" + this.$getRequest().theme) : window.location.href = e + "version=" + this.$getRequest().version + "&channel=" + this.$getRequest().channel + "&theme=" + this.$getRequest().theme
                }
            },
            mounted: function() {}
        }
          , s = o
          , a = (n("c15a"),
        n("2877"))
          , u = Object(a["a"])(s, i, r, !1, null, null, null);
        e["a"] = u.exports
    },
    "1d2b": function(t, e, n) {
        "use strict";
        t.exports = function(t, e) {
            return function() {
                for (var n = new Array(arguments.length), i = 0; i < n.length; i++)
                    n[i] = arguments[i];
                return t.apply(e, n)
            }
        }
    },
    "1fb5": function(t, e, n) {
        "use strict";
        e.byteLength = l,
        e.toByteArray = f,
        e.fromByteArray = m;
        for (var i = [], r = [], o = "undefined" !== typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, u = s.length; a < u; ++a)
            i[a] = s[a],
            r[s.charCodeAt(a)] = a;
        function c(t) {
            var e = t.length;
            if (e % 4 > 0)
                throw new Error("Invalid string. Length must be a multiple of 4");
            var n = t.indexOf("=");
            -1 === n && (n = e);
            var i = n === e ? 0 : 4 - n % 4;
            return [n, i]
        }
        function l(t) {
            var e = c(t)
              , n = e[0]
              , i = e[1];
            return 3 * (n + i) / 4 - i
        }
        function d(t, e, n) {
            return 3 * (e + n) / 4 - n
        }
        function f(t) {
            var e, n, i = c(t), s = i[0], a = i[1], u = new o(d(t, s, a)), l = 0, f = a > 0 ? s - 4 : s;
            for (n = 0; n < f; n += 4)
                e = r[t.charCodeAt(n)] << 18 | r[t.charCodeAt(n + 1)] << 12 | r[t.charCodeAt(n + 2)] << 6 | r[t.charCodeAt(n + 3)],
                u[l++] = e >> 16 & 255,
                u[l++] = e >> 8 & 255,
                u[l++] = 255 & e;
            return 2 === a && (e = r[t.charCodeAt(n)] << 2 | r[t.charCodeAt(n + 1)] >> 4,
            u[l++] = 255 & e),
            1 === a && (e = r[t.charCodeAt(n)] << 10 | r[t.charCodeAt(n + 1)] << 4 | r[t.charCodeAt(n + 2)] >> 2,
            u[l++] = e >> 8 & 255,
            u[l++] = 255 & e),
            u
        }
        function p(t) {
            return i[t >> 18 & 63] + i[t >> 12 & 63] + i[t >> 6 & 63] + i[63 & t]
        }
        function h(t, e, n) {
            for (var i, r = [], o = e; o < n; o += 3)
                i = (t[o] << 16 & 16711680) + (t[o + 1] << 8 & 65280) + (255 & t[o + 2]),
                r.push(p(i));
            return r.join("")
        }
        function m(t) {
            for (var e, n = t.length, r = n % 3, o = [], s = 16383, a = 0, u = n - r; a < u; a += s)
                o.push(h(t, a, a + s > u ? u : a + s));
            return 1 === r ? (e = t[n - 1],
            o.push(i[e >> 2] + i[e << 4 & 63] + "==")) : 2 === r && (e = (t[n - 2] << 8) + t[n - 1],
            o.push(i[e >> 10] + i[e >> 4 & 63] + i[e << 2 & 63] + "=")),
            o.join("")
        }
        r["-".charCodeAt(0)] = 62,
        r["_".charCodeAt(0)] = 63
    },
    "277d": function(t, e, n) {
        var i = n("23e7")
          , r = n("e8b5");
        i({
            target: "Array",
            stat: !0
        }, {
            isArray: r
        })
    },
    2909: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return u
        }
        ));
        n("277d");
        var i = n("6b75");
        function r(t) {
            if (Array.isArray(t))
                return Object(i["a"])(t)
        }
        n("a4d3"),
        n("e01a"),
        n("d3b7"),
        n("d28b"),
        n("3ca3"),
        n("ddb0"),
        n("a630");
        function o(t) {
            if ("undefined" !== typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
                return Array.from(t)
        }
        var s = n("06c5");
        function a() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        function u(t) {
            return r(t) || o(t) || Object(s["a"])(t) || a()
        }
    },
    "2e67": function(t, e, n) {
        "use strict";
        t.exports = function(t) {
            return !(!t || !t.__CANCEL__)
        }
    },
    "30b5": function(t, e, n) {
        "use strict";
        var i = n("c532");
        function r(t) {
            return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
        }
        t.exports = function(t, e, n) {
            if (!e)
                return t;
            var o;
            if (n)
                o = n(e);
            else if (i.isURLSearchParams(e))
                o = e.toString();
            else {
                var s = [];
                i.forEach(e, (function(t, e) {
                    null !== t && "undefined" !== typeof t && (i.isArray(t) ? e += "[]" : t = [t],
                    i.forEach(t, (function(t) {
                        i.isDate(t) ? t = t.toISOString() : i.isObject(t) && (t = JSON.stringify(t)),
                        s.push(r(e) + "=" + r(t))
                    }
                    )))
                }
                )),
                o = s.join("&")
            }
            if (o) {
                var a = t.indexOf("#");
                -1 !== a && (t = t.slice(0, a)),
                t += (-1 === t.indexOf("?") ? "?" : "&") + o
            }
            return t
        }
    },
    3934: function(t, e, n) {
        "use strict";
        var i = n("c532");
        t.exports = i.isStandardBrowserEnv() ? function() {
            var t, e = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
            function r(t) {
                var i = t;
                return e && (n.setAttribute("href", i),
                i = n.href),
                n.setAttribute("href", i),
                {
                    href: n.href,
                    protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                    host: n.host,
                    search: n.search ? n.search.replace(/^\?/, "") : "",
                    hash: n.hash ? n.hash.replace(/^#/, "") : "",
                    hostname: n.hostname,
                    port: n.port,
                    pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
                }
            }
            return t = r(window.location.href),
            function(e) {
                var n = i.isString(e) ? r(e) : e;
                return n.protocol === t.protocol && n.host === t.host
            }
        }() : function() {
            return function() {
                return !0
            }
        }()
    },
    "417e": function(t, e, n) {
        "use strict";
        var i = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isShoApplyFor,
                    expression: "isShoApplyFor"
                }],
                staticClass: "appy-for-cont"
            }, [t.isShowSkuList && t.sku_list.length > 0 ? n("div", {
                staticClass: "selectBg",
                on: {
                    click: t.closeSelectList
                }
            }) : t._e(), n("div", {
                staticClass: "appy-for-box"
            }, [t.isShowSkuList && t.sku_list.length > 0 ? n("div", {
                staticClass: "selectListBox"
            }, [n("div", {
                staticClass: "selectTitle"
            }, [n("span", [t._v("数量选择")]), n("b", {
                on: {
                    click: t.closeSelectList
                }
            })]), n("div", {
                staticClass: "selectListScroll"
            }, [n("ul", {
                staticClass: "selectList clearfix",
                style: {
                    width: 2.38 * t.sku_list.length + "rem"
                }
            }, t._l(t.sku_list, (function(e, i) {
                return n("li", {
                    key: i,
                    class: {
                        selectActive: "1" === e.is_default
                    },
                    on: {
                        click: function(n) {
                            return t.choseSelectList(e.sku_id)
                        }
                    }
                }, [n("div", [n("span", {
                    staticClass: "duration"
                }, [t._v(t._s(e.sku_name))]), n("span", {
                    staticClass: "youhuijia"
                }, [t._v(t._s(e.sku_price_list && e.sku_price_list[0] ? "￥" + t.$keepTwoDecimalFull(e.sku_price_list[0].sell_price) : ""))]), n("span", {
                    staticClass: "yuanjia"
                }, [t._v(t._s(e.market_price ? "￥" + t.$keepTwoDecimalFull(e.market_price) : ""))])])])
            }
            )), 0)]), "1" === t.sku_list[t.sku_list.findIndex((function(t) {
                return "1" === t.is_default
            }
            ))].sku_price_list[0].user_level ? n("div", {
                staticClass: "bindingAccount",
                on: {
                    click: t.bindingAccountClick
                }
            }, [n("p", [t._v("立即绑定资金账号，享白银会员价"), n("span", {
                staticClass: "jiage"
            }, [t._v(t._s(t.sku_list[t.sku_list.findIndex((function(t) {
                return "1" === t.is_default
            }
            ))].sku_price_list[0].next_level_sell_price ? "￥" + t.$keepTwoDecimalFull(t.sku_list[t.sku_list.findIndex((function(t) {
                return "1" === t.is_default
            }
            ))].sku_price_list[0].next_level_sell_price) : ""))])])]) : t._e()]) : t._e(), n("div", {
                staticClass: "appy-for immediate-apply clearfix"
            }, [n("div", {
                staticClass: "appy-for-left"
            }, [n("div", {
                staticClass: "top clearfix"
            }, [n("span", {
                staticClass: "top-left"
            }, [t._v(t._s(t.vipNewsType[t.$getRequest().type ? t.$getRequest().type : "pzb"].title))]), n("div", {
                staticClass: "top-right"
            }, [t.sku_list.length > 0 ? n("div", {
                class: ["selected ", {
                    zhankai: t.isShowSkuList
                }],
                on: {
                    click: t.selectedClickFunc
                }
            }, [n("span", [t._v(t._s(t.sku_list[t.sku_list.findIndex((function(t) {
                return "1" === t.is_default
            }
            ))].sku_name ? t.sku_list[t.sku_list.findIndex((function(t) {
                return "1" === t.is_default
            }
            ))].sku_name : "1个月"))]), n("b")]) : t._e()])]), t.sku_list.length > 0 ? n("div", {
                staticClass: "bottom"
            }, [n("span", {
                staticClass: "preferentialPrice"
            }, [t._v(t._s(t.sku_list[t.sku_list.findIndex((function(t) {
                return "1" === t.is_default
            }
            ))].sku_price_list[0].sell_price ? "￥" + t.$keepTwoDecimalFull(t.sku_list[t.sku_list.findIndex((function(t) {
                return "1" === t.is_default
            }
            ))].sku_price_list[0].sell_price) : ""))]), n("span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.sku_list[t.sku_list.findIndex((function(t) {
                        return "1" === t.is_default
                    }
                    ))].sku_price_list[0].sell_price !== t.sku_list[t.sku_list.findIndex((function(t) {
                        return "1" === t.is_default
                    }
                    ))].market_price,
                    expression: "sku_list[sku_list.findIndex(citem=>{return citem.is_default==='1'})].sku_price_list[0].sell_price!==sku_list[sku_list.findIndex(citem=>{return citem.is_default==='1'})].market_price"
                }],
                staticClass: "originalPrice"
            }, [t._v(t._s(t.sku_list[t.sku_list.findIndex((function(t) {
                return "1" === t.is_default
            }
            ))].market_price ? "￥" + t.$keepTwoDecimalFull(t.sku_list[t.sku_list.findIndex((function(t) {
                return "1" === t.is_default
            }
            ))].market_price) : ""))])]) : t._e()]), n("div", {
                staticClass: "appy-for-right immediate-apply-btn"
            }, [n("span", {
                on: {
                    click: t.childGoToColumnOrderPage
                }
            }, [t._v("立即订阅")]), n("b", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isShowDiscountCoupon && parseInt(t.isShowDiscountCoupon) > 0,
                    expression: "isShowDiscountCoupon && parseInt(isShowDiscountCoupon)>0"
                }],
                staticClass: "discountCoupon"
            })])])])])
        }
          , r = []
          , o = n("c885")
          , s = o["a"]
          , a = (n("8099"),
        n("2877"))
          , u = Object(a["a"])(s, i, r, !1, null, null, null);
        e["a"] = u.exports
    },
    "428f": function(t, e, n) {
        var i = n("da84");
        t.exports = i
    },
    4362: function(t, e, n) {
        e.nextTick = function(t) {
            var e = Array.prototype.slice.call(arguments);
            e.shift(),
            setTimeout((function() {
                t.apply(null, e)
            }
            ), 0)
        }
        ,
        e.platform = e.arch = e.execPath = e.title = "browser",
        e.pid = 1,
        e.browser = !0,
        e.env = {},
        e.argv = [],
        e.binding = function(t) {
            throw new Error("No such module. (Possibly not yet loaded)")
        }
        ,
        function() {
            var t, i = "/";
            e.cwd = function() {
                return i
            }
            ,
            e.chdir = function(e) {
                t || (t = n("df7c")),
                i = t.resolve(e, i)
            }
        }(),
        e.exit = e.kill = e.umask = e.dlopen = e.uptime = e.memoryUsage = e.uvCounters = function() {}
        ,
        e.features = {}
    },
    4581: function(t, e) {
        t.exports = null
    },
    "467f": function(t, e, n) {
        "use strict";
        var i = n("7917");
        t.exports = function(t, e, n) {
            var r = n.config.validateStatus;
            n.status && r && !r(n.status) ? e(new i("Request failed with status code " + n.status,[i.ERR_BAD_REQUEST, i.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],n.config,n.request,n)) : t(n)
        }
    },
    "4a7b": function(t, e, n) {
        "use strict";
        var i = n("c532");
        t.exports = function(t, e) {
            e = e || {};
            var n = {};
            function r(t, e) {
                return i.isPlainObject(t) && i.isPlainObject(e) ? i.merge(t, e) : i.isPlainObject(e) ? i.merge({}, e) : i.isArray(e) ? e.slice() : e
            }
            function o(n) {
                return i.isUndefined(e[n]) ? i.isUndefined(t[n]) ? void 0 : r(void 0, t[n]) : r(t[n], e[n])
            }
            function s(t) {
                if (!i.isUndefined(e[t]))
                    return r(void 0, e[t])
            }
            function a(n) {
                return i.isUndefined(e[n]) ? i.isUndefined(t[n]) ? void 0 : r(void 0, t[n]) : r(void 0, e[n])
            }
            function u(n) {
                return n in e ? r(t[n], e[n]) : n in t ? r(void 0, t[n]) : void 0
            }
            var c = {
                url: s,
                method: s,
                data: s,
                baseURL: a,
                transformRequest: a,
                transformResponse: a,
                paramsSerializer: a,
                timeout: a,
                timeoutMessage: a,
                withCredentials: a,
                adapter: a,
                responseType: a,
                xsrfCookieName: a,
                xsrfHeaderName: a,
                onUploadProgress: a,
                onDownloadProgress: a,
                decompress: a,
                maxContentLength: a,
                maxBodyLength: a,
                beforeRedirect: a,
                transport: a,
                httpAgent: a,
                httpsAgent: a,
                cancelToken: a,
                socketPath: a,
                responseEncoding: a,
                validateStatus: u
            };
            return i.forEach(Object.keys(t).concat(Object.keys(e)), (function(t) {
                var e = c[t] || o
                  , r = e(t);
                i.isUndefined(r) && e !== u || (n[t] = r)
            }
            )),
            n
        }
    },
    "4c3d": function(t, e, n) {
        "use strict";
        (function(e) {
            var i = n("c532")
              , r = n("c8af")
              , o = n("7917")
              , s = n("cafa")
              , a = n("e467")
              , u = {
                "Content-Type": "application/x-www-form-urlencoded"
            };
            function c(t, e) {
                !i.isUndefined(t) && i.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e)
            }
            function l() {
                var t;
                return ("undefined" !== typeof XMLHttpRequest || "undefined" !== typeof e && "[object process]" === Object.prototype.toString.call(e)) && (t = n("b50d")),
                t
            }
            function d(t, e, n) {
                if (i.isString(t))
                    try {
                        return (e || JSON.parse)(t),
                        i.trim(t)
                    } catch (r) {
                        if ("SyntaxError" !== r.name)
                            throw r
                    }
                return (n || JSON.stringify)(t)
            }
            var f = {
                transitional: s,
                adapter: l(),
                transformRequest: [function(t, e) {
                    if (r(e, "Accept"),
                    r(e, "Content-Type"),
                    i.isFormData(t) || i.isArrayBuffer(t) || i.isBuffer(t) || i.isStream(t) || i.isFile(t) || i.isBlob(t))
                        return t;
                    if (i.isArrayBufferView(t))
                        return t.buffer;
                    if (i.isURLSearchParams(t))
                        return c(e, "application/x-www-form-urlencoded;charset=utf-8"),
                        t.toString();
                    var n, o = i.isObject(t), s = e && e["Content-Type"];
                    if ((n = i.isFileList(t)) || o && "multipart/form-data" === s) {
                        var u = this.env && this.env.FormData;
                        return a(n ? {
                            "files[]": t
                        } : t, u && new u)
                    }
                    return o || "application/json" === s ? (c(e, "application/json"),
                    d(t)) : t
                }
                ],
                transformResponse: [function(t) {
                    var e = this.transitional || f.transitional
                      , n = e && e.silentJSONParsing
                      , r = e && e.forcedJSONParsing
                      , s = !n && "json" === this.responseType;
                    if (s || r && i.isString(t) && t.length)
                        try {
                            return JSON.parse(t)
                        } catch (a) {
                            if (s) {
                                if ("SyntaxError" === a.name)
                                    throw o.from(a, o.ERR_BAD_RESPONSE, this, null, this.response);
                                throw a
                            }
                        }
                    return t
                }
                ],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                maxBodyLength: -1,
                env: {
                    FormData: n("4581")
                },
                validateStatus: function(t) {
                    return t >= 200 && t < 300
                },
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    }
                }
            };
            i.forEach(["delete", "get", "head"], (function(t) {
                f.headers[t] = {}
            }
            )),
            i.forEach(["post", "put", "patch"], (function(t) {
                f.headers[t] = i.merge(u)
            }
            )),
            t.exports = f
        }
        ).call(this, n("4362"))
    },
    "4cb0": function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAANqADAAQAAAABAAAANgAAAADzQy6kAAACOElEQVRoBe2Zv0vDQBTH75JWC6IU0U3c3HQJdnF0chAEJ2cbTEBcuzn5JwiS1Ni/QJzFwa2b6aKbTiI4dGjRRfsj5x1aSKVpau4ncje011zvvff53vX68gKAbloBrYBWQCugFdAKKKcAZBGRbR8tQfhxghBYgxDcI1Q4DoLTFxa2s9qgBqtUKrOtVvsBIbQcC6KZy5mbnuc9xK4J7Rq03trt9u4vKGJysdfr37quu0prP+t8ajCE4FyCc6lw1GCGAa4hhJ+qwVGD+b7/iFftEIMhleCowQhMEPgXABiuSnDUp2J8lWzbOQAg8vC1JLvCTsukAOLx/qmvChxzMKKCCnBcwFSA4wYmG44rmEw47mCy4ISAyYAziVMRrdEIQ8sqveIEZRv7GyXoTBSBcqm0fheG4RNtTKMc0NocOz/9rwB1oihaqNVq72MNpQwySalSfAwN4/SrOj79glP5fH5/aFKGD8LBMsSYaYpwsEm2YrfbrWWiiU0SCpYGRe7rTNPcof19Eb5cDJJrNw0KO2+apsGsTiLkVJwEinXxhzuYDCiy9biCyYLiCiYTihuYbCguYCpAMQdTBYopmEpQzMAwVBmX3c6xwaRTVljZjUCRlhTI9+gEr47jrEQRwo+O0HTC14VDkTioc0V8c7ilGhQTMAjRm0orNYiFesWKxeIVzsqfBwZ/3qVsv3gM1DWPer3esayNSwh789hwHz+qvQGgsFetnlHXLeKB6r5WQCugFdAKaAW0Av9AgS9HTxpK6rXlQwAAAABJRU5ErkJggg=="
    },
    "4df4": function(t, e, n) {
        "use strict";
        var i = n("0366")
          , r = n("7b0b")
          , o = n("9bdd")
          , s = n("e95a")
          , a = n("50c4")
          , u = n("8418")
          , c = n("9a1f")
          , l = n("35a1");
        t.exports = function(t) {
            var e, n, d, f, p, h, m = r(t), y = "function" == typeof this ? this : Array, g = arguments.length, _ = g > 1 ? arguments[1] : void 0, v = void 0 !== _, w = l(m), b = 0;
            if (v && (_ = i(_, g > 2 ? arguments[2] : void 0, 2)),
            void 0 == w || y == Array && s(w))
                for (e = a(m.length),
                n = new y(e); e > b; b++)
                    h = v ? _(m[b], b) : m[b],
                    u(n, b, h);
            else
                for (f = c(m, w),
                p = f.next,
                n = new y; !(d = p.call(f)).done; b++)
                    h = v ? o(f, _, [d.value, b], !0) : d.value,
                    u(n, b, h);
            return n.length = b,
            n
        }
    },
    5270: function(t, e, n) {
        "use strict";
        var i = n("c532")
          , r = n("c401")
          , o = n("2e67")
          , s = n("4c3d")
          , a = n("fb60");
        function u(t) {
            if (t.cancelToken && t.cancelToken.throwIfRequested(),
            t.signal && t.signal.aborted)
                throw new a
        }
        t.exports = function(t) {
            u(t),
            t.headers = t.headers || {},
            t.data = r.call(t, t.data, t.headers, t.transformRequest),
            t.headers = i.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers),
            i.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(e) {
                delete t.headers[e]
            }
            ));
            var e = t.adapter || s.adapter;
            return e(t).then((function(e) {
                return u(t),
                e.data = r.call(t, e.data, e.headers, t.transformResponse),
                e
            }
            ), (function(e) {
                return o(e) || (u(t),
                e && e.response && (e.response.data = r.call(t, e.response.data, e.response.headers, t.transformResponse))),
                Promise.reject(e)
            }
            ))
        }
    },
    "5bac": function(t, e, n) {},
    "5cce": function(t, e) {
        t.exports = {
            version: "0.27.2"
        }
    },
    "5ce8": function(t, e, n) {
        "use strict";
        (function(t) {
            var i = n("2909")
              , r = n("b85c")
              , o = (n("277d"),
            n("e25e"),
            n("b64b"),
            n("b680"),
            n("acd8"),
            n("d81d"),
            n("99af"),
            n("a15b"),
            n("4795"),
            n("c740"),
            n("18f8"))
              , s = n("271c")
              , a = (n("b7d4"),
            n("1695"));
            n("bc3a");
            window.goToDetail = 0,
            e["a"] = {
                name: "Recommendation",
                data: function() {
                    return {
                        titleData: {
                            titleStr: "相关推荐",
                            moreStr: "更多",
                            iconStr: n("8596")("./icon_jinru_" + ("night" === this.$getRequest().theme ? "black" : "white") + ".png")
                        },
                        commonApiUrl: {
                            testOut: "http://120.86.70.45:19088/api/",
                            gray: "http://139.9.106.64:19088/api/",
                            prod: "https://stockinfo.htsec.com:19089/api/",
                            testHtmlUrl: "http://120.86.70.45:8082",
                            prodHtmlUrl: "https://account.htsec.com:444",
                            testOrderConfirmUrl: {
                                pzb: "http://120.86.70.39:8082/emall/#/order-confirm?out_pid=P202103110040",
                                tuoshui: "http://120.86.70.39:8082/emall/#/order-confirm?out_pid=P1118",
                                1: "http://120.86.70.39:8082/emall/#/order-confirm?out_pid=P202103110040",
                                10: "http://120.86.70.39:8082/emall/#/order-confirm?out_pid=P1118"
                            },
                            prodOrderConfirmUrl: {
                                pzb: "https://htstore.htsec.com/emall/#/order-confirm?out_pid=P202106110005",
                                tuoshui: "https://htstore.htsec.com/emall/#/order-confirm?out_pid=P1118",
                                1: "https://htstore.htsec.com/emall/#/order-confirm?out_pid=P202106110005",
                                10: "https://htstore.htsec.com/emall/#/order-confirm?out_pid=P1118"
                            },
                            couponSelectUrl: {
                                pzb: "https://htstore.htsec.com/coupons/#/couponSelect?out_pid=P202106110005",
                                tuoshui: "https://htstore.htsec.com/coupons/#/couponSelect?out_pid=P1118",
                                1: "https://htstore.htsec.com/coupons/#/couponSelect?out_pid=P202106110005",
                                10: "https://htstore.htsec.com/coupons/#/couponSelect?out_pid=P1118"
                            }
                        },
                        newArr: [],
                        commentToken: "",
                        commentAccountId: "",
                        PZDJPointList: [{
                            equityCode: "1114",
                            articleId: "cls_pzb-861160",
                            startTime: "",
                            endTime: ""
                        }],
                        marketTreasureNewsRecord: [],
                        todayStamp: "",
                        isListItemClick: !1,
                        theme: this.$getRequest().theme,
                        newsRelateStockCodeResult: [],
                        newsRelateStockCode: [],
                        equityCode: {
                            pzb: "1114",
                            tuoshui: "1117",
                            1: "1114",
                            10: "1117"
                        }
                    }
                },
                props: ["appCommunityData", "upDateAuthCheck", "skuUnusedCodeNums", "skuId"],
                components: {
                    TitleModule: o["a"]
                },
                methods: {
                    arrOfOneDimension: function(t) {
                        var e, n = Object(r["a"])(t);
                        try {
                            for (n.s(); !(e = n.n()).done; ) {
                                var i = e.value;
                                Array.isArray(i) ? this.arrOfOneDimension(i) : this.newArr.push(i)
                            }
                        } catch (o) {
                            n.e(o)
                        } finally {
                            n.f()
                        }
                        return this.newArr
                    },
                    arrayToObj: function(t, e) {
                        for (var n = {}, i = 0; i < t.length; i++)
                            n[t[i]] = e[i];
                        return n
                    },
                    getResultData: function(t, e) {
                        var n = [];
                        t = t || [],
                        e = e || [];
                        for (var i = 0; i < e.length; i++)
                            n.push(this.arrayToObj(t, e[i]));
                        return n
                    },
                    getDateStr: function(t) {
                        var e = new Date(parseInt(t)).getFullYear()
                          , n = new Date(parseInt(t)).getMonth() + 1;
                        n < 10 && (n = "0" + n);
                        var i = new Date(parseInt(t)).getDate();
                        return i < 10 && (i = "0" + i),
                        e + "-" + n + "-" + i
                    },
                    setHaveRead: function(t) {
                        this.$HTBridge.isIos ? this.$HTBridge.getInfoReadStatus(t, (function(t) {
                            t[Object.keys(t)[0]] ? document.getElementById(Object.keys(t)[0]).className = "list-item have-read" : document.getElementById(Object.keys(t)[0]).className = "list-item"
                        }
                        )) : this.$HTBridge.inApp && squareLoginObj && squareLoginObj.getInfoReadStatus && (1 === parseInt(squareLoginObj.getInfoReadStatus(t)) ? document.getElementById(t).className = "list-item have-read" : document.getElementById(t).className = "list-item")
                    },
                    set_up_rose: function(t) {
                        var e = parseFloat(parseFloat(t) / 100).toFixed(2)
                          , n = "+" + e + "%";
                        return (parseFloat(e) < 0 || 0 == parseFloat(e)) && (n = e + "%"),
                        void 0 === t && (n = "--"),
                        n
                    },
                    get_related_recommendation: function() {
                        var e = this
                          , n = this
                          , r = "";
                        r = 10 == this.$getRequest().type || "tuoshui" === this.$getRequest().type ? "tuoshui" : (1 == this.$getRequest().type || this.$getRequest().type,
                        "pzb"),
                        t.ajax({
                            url: this.commonApiUrl.prod + "MarketTreasureNews?sourceType=" + r + "&type=2&pageSize=5&pageNum=1&id=" + n.$getRequest().id + "&version=" + n.$getRequest().version + "&channel=" + n.$getRequest().channel,
                            type: "GET",
                            dataType: "json",
                            timeout: 15e3,
                            success: function(t) {
                                var r, o = t && t.content && t.content.marketTreasureNewsField ? t.content.marketTreasureNewsField : [], u = t && t.content && t.content.marketTreasureNewsRecord ? t.content.marketTreasureNewsRecord : [], c = n.getResultData(o, u), l = t && t.content && t.content.isEncrypted ? t.content.isEncrypted : "";
                                n.todayStamp = t && t.content && t && t.content.todayStamp ? t.content.todayStamp : "";
                                for (var d = 0; d < c.length; d++)
                                    c[d]["isBuy"] = !1,
                                    c[d].relateStock && c[d].relateStock.length > 0 && "1" === l && (c[d].relateStock = c[d].relateStock.map((function(t) {
                                        return n.$decrypt_ECB(t)
                                    }
                                    ))),
                                    e.newsRelateStockCode.push(c && c[d] && c[d].relateStock && c[d].relateStock);
                                e.newsRelateStockCode = (r = []).concat.apply(r, Object(i["a"])(e.newsRelateStockCode)),
                                Object(a["b"])(e.newsRelateStockCode, (function(t) {
                                    n.newsRelateStockCodeResult = t
                                }
                                )),
                                n.marketTreasureNewsRecord = Object(s["f"])(c)
                            },
                            error: function(t) {
                                n.marketTreasureNewsRecord = []
                            }
                        })
                    },
                    relatedStocksLiClick: function(e, n, i, r) {
                        window.loginType = 1,
                        e.stopPropagation(),
                        "quick" != this.$getRequest().channel && (this.$HTBridge.inApp ? n && (window.location.href = "@stk=" + i + "&stks=" + r.join(",")) : Object(s["i"])() ? (t(".userLead-box").css("display", "block"),
                        t(".userLead_bg").css("display", "block"),
                        t(".userLead").css("display", "block")) : Object(s["a"])())
                    },
                    recommendationListItem: function(t, e, n, i) {
                        t.stopPropagation(),
                        window.loginType = 1;
                        var r = this;
                        r.$HTBridge.htChangeReadStatus(e),
                        this.setHaveRead(e);
                        var o = t.currentTarget;
                        o.style.background = "night" === r.$getRequest().theme ? "#050505" : "#f5f6fa",
                        setTimeout((function() {
                            o.style.background = "none",
                            r.$HTBridge.inApp ? (window.location.href = "@redirect=info&url=" + encodeURIComponent(n + "&version=" + r.$getRequest().version + "&channel=" + r.$getRequest().channel + "&theme=" + r.$getRequest().theme) + "&Id=" + e + "&Title=" + i,
                            window.loginType = 1) : window.location.href = n + "&version=" + r.$getRequest().version + "&channel=" + r.$getRequest().channel + "&theme=" + r.$getRequest().theme + "&Id=" + e + "&Title=" + encodeURIComponent(i)
                        }
                        ), 300)
                    },
                    deblockingClick: function(e, n, i, r) {
                        var o = this;
                        if (window.btnType = "",
                        window.title = r,
                        window.id = i,
                        window.applyBtnType = "relatedRecommendation",
                        window.detailUrl = n,
                        o.$HTBridge.inApp)
                            if (o.$HTBridge.statBuriedPointSAEvent({
                                eventName: "statPZBFuncClick",
                                params: {
                                    clickKey: "51994",
                                    funcName: "列表单篇解锁"
                                }
                            }),
                            o.commentToken && o.commentAccountId)
                                if (window.loginType = 1,
                                e)
                                    window.location.href = "@redirect=info&url=" + encodeURIComponent(n + "&version=" + o.$getRequest().version + "&channel=" + o.$getRequest().channel + "&theme=" + o.$getRequest().theme) + "&Id=" + i + "&Title=" + r;
                                else {
                                    var a = o.skuUnusedCodeNums && parseInt(o.skuUnusedCodeNums) > 0 ? "&sku_id=" + o.skuId : ""
                                      , u = o.commonApiUrl[o.skuUnusedCodeNums && parseInt(o.skuUnusedCodeNums) > 0 ? "couponSelectUrl" : "prodOrderConfirmUrl"][o.$getRequest().type ? o.$getRequest().type : "pzb"] + "&supplier_code=local&article_id=" + (i || "") + "&article_title=" + (r ? encodeURIComponent(encodeURIComponent(r)) : "") + a;
                                    window.location.href = "ehtsec://funid=10088&communityLogin=1&navigationBarHidden=1&path=" + encodeURIComponent(u)
                                }
                            else
                                o.$HTBridge.communityLogin((function(t) {
                                    o.commentToken = t && t.token ? t.token : "",
                                    o.commentAccountId = t && t.account ? t.account : "",
                                    0 === window.loginType && o.$emit("upDateAuthCheck", {
                                        commentAccountId: o.commentAccountId,
                                        commentToken: o.commentToken
                                    })
                                }
                                ));
                        else
                            Object(s["i"])() ? (t(".userLead-box").css("display", "block"),
                            t(".userLead_bg").css("display", "block"),
                            t(".userLead").css("display", "block")) : Object(s["a"])()
                    },
                    setBuyStatus: function(t, e) {
                        var n = this;
                        if (t)
                            for (var i = 0; i < this.marketTreasureNewsRecord.length; i++)
                                for (var r = 0; r < this.marketTreasureNewsRecord[i].list.length; r++)
                                    this.marketTreasureNewsRecord[i].list[r].isBuy = !!t;
                        else if (e.length > 0)
                            for (var o = function(t) {
                                for (var i = function(i) {
                                    var r = e.findIndex((function(e) {
                                        if (e.equityCode === n.equityCode[n.$getRequest().type ? n.$getRequest().type : "pzb"])
                                            return e.articleId === n.marketTreasureNewsRecord[t].list[i].id
                                    }
                                    ));
                                    n.marketTreasureNewsRecord[t].list[i].isBuy = r > -1
                                }, r = 0; r < n.marketTreasureNewsRecord[t].list.length; r++)
                                    i(r)
                            }, s = 0; s < n.marketTreasureNewsRecord.length; s++)
                                o(s)
                    }
                },
                created: function() {
                    this.get_related_recommendation()
                },
                mounted: function() {
                    var t = this;
                    this.getData()
                    this.$HTBridge.inApp && this.$HTBridge.getCommunityAccount((function(e) {
                        t.commentToken = e && e.token ? e.token : "",
                        t.commentAccountId = e && e.account ? e.account : ""
                    }
                    ))
                },
                computed: {
                    setMarketData: function() {
                        var t = this.appCommunityData
                          , e = this.marketTreasureNewsRecord;
                        return {
                            appCommunityData: t,
                            marketTreasureNewsRecord: e
                        }
                    }
                },
                watch: {
                    setMarketData: {
                        handler: function(t) {
                            this.commentToken = t.appCommunityData.token,
                            this.commentAccountId = t.appCommunityData.accountId,
                            t.marketTreasureNewsRecord.length > 0 && (t.appCommunityData.isBuyColumns ? this.setBuyStatus(t.appCommunityData.isBuyColumns, []) : t.appCommunityData.yidingyue.length > 0 && this.setBuyStatus(t.appCommunityData.isBuyColumns, t.appCommunityData.yidingyue))
                        },
                        deep: !0,
                        immediate: !0
                    }
                }
            }
        }
        ).call(this, n("1157"))
    },
    "5f02": function(t, e, n) {
        "use strict";
        var i = n("c532");
        t.exports = function(t) {
            return i.isObject(t) && !0 === t.isAxiosError
        }
    },
    6650: function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAANqADAAQAAAABAAAANgAAAADzQy6kAAACDElEQVRoBe3ZP0/CQBQA8HvUVJHopJtxc9MvwcRiGsCYEjZNjImfwckvYTS6IcQIhLg4+QncYHMzbm4qIkV59jSXVELS0vs7XAdaoPfu/d61V3IQYjdbAVsBWwFbAVsBWwHjKgAiMmo2m2ufATkhCFsEsLvgkuNyufwsInbaGNywTqez9P7x1SNI1lkSAOQlA5D3/VKPfaZ6n+HtsN//LkVRNB4iWR0j3jcarU3e+Gnbc8NCxvK0znXjuGHouncAMDQNxw2r7mw/AoGjEIcm4bhhFFOpFC8Q4NAkHPesGB2lWqN9AIiniDg1rsrZcmoC0WRnPTYFJxxGC2ECTgrMBJw0mG6cVJhOnHSYLpwSmA6ckAc0TTxuq/rFs/iHOHm4um4V4mIl+V7ZiLFk4h8FEOQWnRXP895YmzR7ZSPGkosfOXQHg/EeOz/tXjksbaKztlMOS3IpZrOZy1khk+crhSVADYnjhLcX3/1FkXOTUlnv41F0nYTk/V1PyDqJklkxGUrs4o90mA4UveqkwnShpMJ0oqTBdKOkwExACYeZghIKMwklDFavt/eR4LkJy24URTfu6b52c7sBo1E3RM3/hfz/qnItMdoz908qCIJCuLZtFIoCBfwIhtdopdixrpFi/XPDcjmnFV7QTywg3etG/eYQTSjtsYl/1aa12Ha2ArYCtgK2ArYCtgISK/ADM4Zq1OB5eRgAAAAASUVORK5CYII="
    },
    "696a": function(t, e, n) {
        "use strict";
        (function(t) {
            n("ac1f"),
            n("5319"),
            n("c740"),
            n("e25e"),
            n("4de4"),
            n("acd8"),
            n("c975");
            var i = n("683b")
              , r = n("271c")
              , o = n("a073")
              , s = n("b7d4")
              , a = n("660d")
              , u = n("fb4f")
              , c = n("417e")
              , l = n("18f8")
              , d = n("5a0c")
              , f = n.n(d)
              , p = n("f40f")
              , h = n("2cd8")
              , m = n("a94d")
              , y = n("b284")
              , g = n("2246");
            p["a"].use(h["a"]),
            p["a"].use(m["a"]),
            window.loginType = 0,
            window.btnType = "",
            window.title = "",
            e["a"] = {
                name: "VipNewsDetail",
                data: function() {
                    return {
                        isShowNoDataHtml: !1,
                        vipNewsType: {
                            pzb: {
                                equityCode: "1114",
                                title: "盘中宝",
                                text: "把握市场先机，一览题材风口！"
                            },
                            tuoshui: {
                                equityCode: "1117",
                                title: "脱水研报",
                                text: "博采百家之长，捕捉投资线索！"
                            },
                            1: {
                                equityCode: "1114",
                                title: "盘中宝",
                                text: "把握市场先机，一览题材风口！"
                            },
                            10: {
                                equityCode: "1117",
                                title: "脱水研报",
                                text: "博采百家之长，捕捉投资线索！"
                            }
                        },
                        titleData: {
                            titleStr: "所属栏目",
                            moreStr: "更多",
                            iconStr: n("8596")("./icon_jinru_" + ("night" === this.$getRequest().theme ? "black" : "white") + ".png")
                        },
                        isLoading: !0,
                        commonApiUrl: {
                            testOut: "http://120.86.70.45:19088/api/",
                            gray: "http://139.9.106.64:19088/api/",
                            prod: "https://stockinfo.htsec.com:19089/api/",
                            testHtmlUrl: "http://120.86.70.45:8082",
                            prodHtmlUrl: "https://account.htsec.com:444",
                            testOrderConfirmUrl: {
                                pzb: "http://120.86.70.39:8082/emall/#/order-confirm?out_pid=P202103110040",
                                tuoshui: "http://120.86.70.39:8082/emall/#/order-confirm?out_pid=P1118",
                                1: "http://120.86.70.39:8082/emall/#/order-confirm?out_pid=P202103110040",
                                10: "http://120.86.70.39:8082/emall/#/order-confirm?out_pid=P1118"
                            },
                            prodOrderConfirmUrl: {
                                pzb: "https://htstore.htsec.com/emall/#/order-confirm?out_pid=P202106110005",
                                tuoshui: "https://htstore.htsec.com/emall/#/order-confirm?out_pid=P1118",
                                1: "https://htstore.htsec.com/emall/#/order-confirm?out_pid=P202106110005",
                                10: "https://htstore.htsec.com/emall/#/order-confirm?out_pid=P1118"
                            },
                            couponSelectUrl: {
                                pzb: "https://htstore.htsec.com/coupons/#/couponSelect?out_pid=P202106110005",
                                tuoshui: "https://htstore.htsec.com/coupons/#/couponSelect?out_pid=P1118",
                                1: "https://htstore.htsec.com/coupons/#/couponSelect?out_pid=P202106110005",
                                10: "https://htstore.htsec.com/coupons/#/couponSelect?out_pid=P1118"
                            }
                        },
                        newsDetailObj: {},
                        stockList: [],
                        paramTitle: "",
                        paramDesc: "",
                        paramLink: "",
                        modifyDate: "",
                        mediaName: "",
                        commentToken: "",
                        commentAccountId: "",
                        emallProductDetail: {},
                        singleSkuList: [],
                        single_price_type: "",
                        defaultPrice: "",
                        isBuyColumns: !1,
                        isBuyCurrtSingle: !1,
                        yidingyueDate: "",
                        phaseSelectList: [],
                        yidingyueList: [],
                        isShow: !1,
                        scroll: "",
                        isShoApplyFor: !1,
                        shareData: {},
                        isShowSkuList: "",
                        isShowDiscountCoupon: !1,
                        sku_id: "",
                        product_id: "",
                        sku_unused_code_nums: "",
                        prod_unused_code_nums: ""
                    }
                },
                components: {
                    UserLead: i["a"],
                    Recommendation: o["a"],
                    RelatedStocks: a["a"],
                    ShareModule: u["a"],
                    AppyForModule: c["a"],
                    TitleModule: l["a"],
                    NoDataHtml: g["a"]
                },
                methods: {
                    toChangeSHoucang: function(t) {
                        this.isShow = t
                    },
                    getData: function(e) {
                        debugger
                        var n = this
                          , i = this;
                        this.isLoading = !0;
                        var o = {
                            newsStream: "NewsStreamDetail",
                            crosspzb: "NewsDetail"
                        };
                        let testres={"code":"0","message":"返回成功","content":{"title":"【盘中宝】电子产品的“心脏”，光模块需搭配的高阶产品价格提升10-20倍，这家公司拥有全产业链自主生产能力","summarylink":"9cMh+IIXAzOXLslkpCg4Ekt0X8jq/ZOW+AlIhNFKurFSbQ0EQfaNOKqOd3pema4FQrJmKWjx+vIaUC5qGJcSyRU6nWaIqRDN2Zon8922oXbwUmwgBv7HM9nikd4kU9Uk/GUlrHXNebSE5Nz4pSqd8o0BgFY/18+P27iOWbr2ucPm158/2me7NHRJEb2Isfb0zx5B62hzI7o8UawEYDK2hGPXR+QvIOUsGWI9pPmU5uoOEw8BOBhszTOXjLD7rOsrSsBdr5ixBV/B/Z38OIdyHKFKuOFgj1Jrdbg8pIUKSNf8n2sm2MSN81EW//H3jUXgPbS1A44VoqAKbZUwk2j5l/+cthkcirqVwXB3fCpTgFCXw59OyOgFDVgm7/EIESnIB5jEC5b/TAd0fLJsWWO56T8W6RvdybilclbCmcUXj+dlkoiVBE9QVP9BiRpFjbtir/or/4O8wtHPNZv6EprqSXUNooxUsY4/7JVVuABpbs+EZcuu8X1CQBU3zu9K7RysPFtW+37O9X0rAPopkXpvYEq4E4TSWESXsik2gMhYrz/Gg0xZpYUiX4IwFmMTMvqL2TDHKOxt5GzJ5wF+8P14G7gSpzio+YzAYTUfC6hR5jEiHumGPoLJtloSjQGQIPDpoJ3c6FXWgWmUo7+b0/MC00uYy0OJfWAzqEZ2vVTx4WklePYpf+R1Qk+ysL3LPYfAKo52BlaFgNg6mk4NdgDgl7zoF01n9TFcsapoJEUpnRpGhk9mCoiBltdJccJFBVNUHTg8N3FRSH7Vb0mbbusROO7cS62zvTR8ktmeMCZbThMo9Hpm8Pv42RFaDnsNxrGMzqW7z9Z+uYLEzoE08h5h+bGwAbxTggDNezIaPS/Tdrw7Is4GLPPWJiFDmPY0hSs9Kqnkavz5RVd2Ukdzg9OfqwFzEwoRBSK3Hq4ts6rmtS4/RB2wFIG0/awLdSZkuIHFPrh9/cEe6mqWoDk5dX0SLY76iUC/FnOcIoH+vTtR7Z7Gg0xZpYUiX4IwFmMTMvqLjvWjP4gi2ZUDXKWleXSzxDN+/MXTUh90dcbN/U1UqBdHW6nmcjR6jI+KyMZk4YiNJLuYue+VD/VgmxLRddx/9ZV26p2Xuga+M7lOQC8IH0AG5FzV/VmXj48w0ll+i1+yNJaum4PqGHiBGDP+A5czdoXp+MpoPnVf0TKwj/2Ycyr6wUCE0mjPBS2xYDMHp1POmpnp+L2c1/TUq11+rhnZY20ECRKTUIJPajhooPnGJZ5qOo12vdwPdvTJk7oUMYmS4uflzbSx9eQUXw5B7PhIudjPmeVVF7XkSyZ6Ra3r7hurgYvyw81pVYXFl4ZsR6fK/vIjnIvYh9d/WEWcRBttfVhblUCAmQ4WAIUW7fpWfrSx3ZoTPTjw1ajl0W5XeHRht8p95nViPs3yh9Vun1vB7n9QnfOzgu2HEhZ5p16vcwfRM7r8b7mYBb9YO1PuhKiRedHWjAJePOMNyYqNbhVhnRUi5V0qtKXMueVd5LUIc3GNXaBSkuVTdH8dDyXIag12GqQtJQd+4I0/8uqbqa6x3bkse4Gglenl6vbtE8WBHkDrqckARF75MJBDXL42pUOwFDmwfjZB6bl5ohhQb00k4lg8dRVkyeaVyRBoHv2OJutvEhfXprN3MBpIUUA5DABIX84f3/a7FAYiD1wIgIa/Bo/cmoskVJg6JB7QelalS+l22fWA7iv3zipn9q5rSHZ2HOgyWahsdVDezUKs1eG+Bqiyi7NVOzG1As4mqUVr31VtCHuGnsn4zF1OpAUpFysWgQ+UUCZnfAFCTM5k/117GNC6JtFad2BOIQSNUlaB7skuj7y30AH68FsUv71SQKgmMCH5q8BFdnAnoJIp/oVQeOuGplHuMKP8GcUGS2QumIHwMkOu8jEcZYh+zpkDylflMyTkLWNSdOwdxRA9m8lQUUsNILOBKWxhGKsojmes2yLvZxfHOhXizlfqRf1OkqtnEUwWtV5+jDqI1FkdncniwReAxLGUa8BAdOSR7+EHgoinDILUoe6iMSFaVgOBxjTgiKzWwkM8OGGGnAAMwFtqHbKsGW8npVuaAIa0Dhn4ajQbmpDXzeGztUnzRV5WC46Hyr2H6dRBU407ML3w6IW/320Bx64oVrRN92gPeXy2GQtefobGZ4WERg2KgFKcCUsj1D/ob4+3sSLmIqszxOf6wm9anvwzQCerjtZjyo/QY0Uto3x+GNZDH6ugCwygrdLoNMSVB1O4RFGWizBanniXvOMx3yiw/RK3ECfeHUYyHzN5UKMub3DgdhoIei3MG1MSli1XTsAkg6T5UO+kydkOc7U8CpyXl89VOIU7IHmxng+RECN5abzg4HQ4Bn6DQ4FAY2yD2CYSEoCJutsYeFsYDufuVF9E5TH+M4+wTKDlc+/dmF+nmhdzi1bYMiZYoDQWMInCPB9muadnuP0qzXsltGGeJfdUXp1z81rwU82+FXmnYPeA9Usj19+kldlT3gIaOj7dnqqvDWrvDXeHk612UY253O4ouakcuTOi1UTf3dP/zAtKfqO2QAQn/ll7CkDPRV9iz/pZAe7NJ4WAnSrA+7aH7ha48rmUBucEm9C48ASFfdV0Oo6cJxtcVyE3iM2GbmMrYW/5eGK5RSfEqv/dJBsvzTUCKmMKjwc9Uw/MDvO0IN0G7pRuTVHB7oRZ++/qAd76s/alY/kCTc0KMMNcw2Ra5gk/WJHwy/PP8qgKvoDLQU9+19z1e+uPNr4yuPi53RdGDBokXGYOKG5hNdYibvvp5GmNzFtTc6QrNfAcadXzRSxl6ZfwkNZ1f6//Y5SkEEaC9tQXqsr8N/N8n2bkGv2Q9Y7xweUn2+SNM2tL8hTOWp7w0McvgXF7RLQKtuof/+oK3fZy23FoxQAtJURD78xrrUI1gA3Kj2cdOliJYga+73SY37hHApW8k5jyQpZ9+C27DcYaQV41Fs0oVOUlHKM5318z09kESJkjgTRa4nuX37Uh4YBvFkA65qhCiFtaW+i8vdsx8aSGu6vPVwFB7Coaz4H1hIg17u48q80rYlP3keOYeMigZ3DGNlliuLiXl9+1IeGAbxZAOuaoQohbWvajlYZbWHzJ4RypRygCzv4rGHe69WsWA/zf1j8J51GlY07O6lZseJrE8HHWv6dWcZfftSHhgG8WQDrmqEKIW1r/kXTTDXvDdELKsvhuVheYdhTJZylo91QyyBpa6vz7uJ9lLawk0FJNdDeybSCEepaBravgiHtqhpxyXWGjO9JUjAIX/19AZ3/r90wOAgO37UsGaZieK13dW+xtaMFvYtCwJ0Qgx/prB9cvfNE/tp8ZumVt504TxRkgN2eX4kIWBtyhlDurfSsuLHUjwIRVpjnR83z0iDE1f9L10gxqoBwjGEP33CGyjAY/NI3LYbr1kWMRT+Mzao2IDek+IPGw0sD6z7YmxIqTGArt+HmnmK1qb2B8RJqSUrHoQFGNTjqghG3krqaiSN4ZQ50Ojl4fLiJhPeO0eDXZHiTAud+hH06u224XQj34BTiXUCowls/acQ9KfD7x/6grHmfri96lRfft9NrCFsxs5snKHtWy4oY89gVaP25sk0VWTHewEc2RumFG1SF11NGicdgjF0k7wtx7+1fUTwqDq7X0sjvGr5X0NjcFGX9disf7/p0GRUgKHX5Es6u9A9t2W5+qlq4ccaDwURHqeRJ+S0+TCy+rvotibMLOkdUOjx6NdbtusB3xMrC7gBBo44pvn2SBEj8xHx5pM6EXzxJEd/yffrYIl6vYzUCKSxoWmGw3mLv0QjdOsnrlyVwyZqQEAma2o/+Ts1PEftkWXa7kxeIt0L2+nvW8CBf8kBAY7v8MKdal1a/aqB0Q4JMM0rSeKkbjwIXOANc5hRAyvEs9NlIB/fMlHYR2tE5whov7p+Kz10jLTDsL4tm15HEwCIqVC5rixLsIiDOAzznAq1qo68nm9onR77lcUt3wzAaF2W22P/8i2LTzstennEhIJ7b/dP0p6vJZRBk1UQqKu8Q2cfy3tGQC5PaWfIIhjBYdC6VFkQRDgGVtjkzddzMG9RXhxrbUToIVMOh5aee/9LbL7mGh4tyXk6GDKz6COmQ3Tlm6zAZmNAmF09sVia1ARYGXD7VzaCHYmjX4RFoYojxut8uwuYx/JOm0bQBN/J6FnWXP9E+VYCBQBcBRTF0EartIEffaLafkwwJVNMHdhw/SwPB8bnTqNVg9Na2G18kXM4hDTCBHNoufN+77IjokRJSxPkGQdrMZjU1pYYaJj/B/jSKWeYSdb40mecEHDrCfU6RFn8hbDl18/N1DuOUf4of79vVxyuOBlx97Gkc70IWi7HLHOMcuH3XaWq6y6ndEGdKp3+DxTSVOGigTsWiuzZTUtMxO38pBzCtlSIlIOwqq1ruz3HCGORBfv4qWxIRSvIi/A/DdCWB7OvDJbYb57SQEWjfnGmnDsTTuheNHsX/Qp7FwwVYqCsuK+QmTRXETxYF3udlI+rbTsc02Opleub7e2O6RLfPlal5HLkfLp6JExj8Ze9At67jA5hPX/by86uK7pBVOYMKpAwQsFhLnnYYBv+2zYxJw4m2Y0aGc1XCAmMMOD7cFlq7Zew5N3i09hYOx7nKviM7lDHWZPFhkX000ovt1SQdPqbY5gcJskvLPKAkmphd96839xabiG3XlwBGzZkoHSrdgjuB3bEme51+XWgSbvqpyCtrYshYf8cFujEUMrofhDJuRA8p/u6napxshmK1HDztu3fzI2M5j2PblORgUOMpyen0=","summary":"至2025年或处于供不应求状态，电子产品中必不可少的元器件，可广泛应用于人工智能方向。这家公司拥有全产业链自主生产能力。","modifyDate":"2023-06-21 14:21:40","mediaName":"财联社","type":"5","relate_stock":["4DTgV/x6QszLaQdhiVZwJg==","/o/UuDC0sGnbq6W4kbzW0Q==","mDpZnMYX/fc1rpemFzE6ng=="],"is_free":"0","date":"2023-06-21 15:41:08"}}
                        console.log(i.$decrypt_ECB(testres.content.summarylink))
                        t.ajax({
                            url: this.commonApiUrl.prod + o[this.$getRequest().sourcetype] + "?sourcetype=" + this.$getRequest().sourcetype + "&id=" + Object(r["d"])().id + "&version=" + Object(r["d"])().version + "&channel=" + Object(r["d"])().channel,
                            type: "GET",
                            dataType: "json",
                            timeout: 15e3,
                            success: function(t) {
                                if (n.isLoading = !1,
                                t && "0" === t.code)
                                    if ("{}" !== JSON.stringify(t && t.content)) {
                                        n.isShowNoDataHtml = !1;
                                        var o = t && t.content;
                                        i.modifyDate = Object(r["e"])(o && o.modifyDate, "crosspzb" === i.$getRequest().sourcetype ? o.date : "newsStream" === i.$getRequest().sourcetype ? f()(1e3 * o.todayStamp).format("YYYY-MM-DD HH:mm:ss") : ""),
                                        i.mediaName = o && o.mediaName ? o.mediaName : "",
                                        window.title = o.title,
                                        o["isPhaseSelect"] = !1;
                                        var a = "";
                                        if ("crosspzb" === i.$getRequest().sourcetype) {
                                            i.stockList = o.relate_stock ? o.relate_stock : [];
                                            for (var u = 0; u < o.relate_stock.length; u++)
                                                o.relate_stock[u] = i.$decrypt_ECB(o.relate_stock[u]);
                                            a = o.summary ? o.summary : o.summarylink ? i.$decrypt_ECB(o.summarylink) : ""
                                        } else
                                            "newsStream" === i.$getRequest().sourcetype && (i.stockList = o.relateStock ? o.relateStock : [],
                                            a = o.summary ? o.summary : o.content ? o.content : "");
                                        if (i.paramTitle = o.title ? o.title.replace(/<[^>]+>/g, "") : "",
                                        i.paramLink = window.location.href,
                                        a && "" !== a && null !== a) {
                                            a = a.replace(/<[^>]+>/g, "").replace(/^\s*|(\s*$)/g, "").replace(/&nbsp;/gi, "").replace(/\r|\n/gi, "");
                                            var c = "null" === a ? "" : a.substring(0, 120) + "...";
                                            i.paramDesc = c
                                        }
                                        s["a"].getPhaseSelectList((function(t) {
                                            if (t.length > 0) {
                                                for (var e = 0; e < t.length; e++) {
                                                    var n = t.findIndex((function(t) {
                                                        return t.ORG_ART_ID === Object(r["d"])().id
                                                    }
                                                    ));
                                                    o["isPhaseSelect"] = n > -1,
                                                    i.phaseSelectList.push({
                                                        equityCode: i.vipNewsType[i.$getRequest().type ? i.$getRequest().type : "pzb"].equityCode,
                                                        articleId: t[e].ORG_ART_ID,
                                                        startTime: "",
                                                        endTime: ""
                                                    })
                                                }
                                                i.newsDetailObj = o
                                            } else
                                                i.newsDetailObj = o
                                        }
                                        )),
                                        s["a"].getViewList4News({
                                            accountId: e && e.accountId ? e.accountId : "",
                                            token: e && e.token ? e.token : "",
                                            title: i.paramTitle,
                                            date: o.modifyDate ? o.modifyDate : ""
                                        }),
                                        i.shareData = {
                                            paramTitle: i.paramTitle,
                                            paramDesc: i.paramDesc,
                                            paramLink: window.location.href,
                                            sourceStr: i.mediaName,
                                            dateStr: i.modifyDate
                                        };
                                        var l = {
                                            title: i.paramTitle,
                                            content: i.paramDesc,
                                            link: window.location.href,
                                            imgUrl: "https://stockinfo.htsec.com:19091/htsecNewsDetail/img/app_logo.png",
                                            contentType: 0,
                                            shareOptions: 0,
                                            source: i.mediaName,
                                            date: i.modifyDate,
                                            showMoreMenu: !0
                                        };
                                        i.$HTBridge.updateShareData(l),
                                        i.$HTBridge.updateCollectData({
                                            title: i.paramTitle,
                                            summary: i.paramDesc,
                                            source: i.mediaName,
                                            linkUrl: window.location.href,
                                            dateStr: i.modifyDate,
                                            coverUrl: "https://stockinfo.htsec.com:19091/htsecNewsDetail/img/app_logo.png",
                                            newsId: i.$getRequest().id
                                        })
                                    } else
                                        n.newsDetailObj = {},
                                        n.isShowNoDataHtml = !0;
                                else
                                    n.newsDetailObj = {},
                                    n.isShowNoDataHtml = !0;
                                Object(r["n"])(n.paramTitle, n.paramDesc)
                            },
                            error: function(t) {
                                n.isLoading = !1,
                                n.newsDetailObj = {},
                                n.isShowNoDataHtml = !0
                            }
                        })
                    },
                    get_pzdj_authCheck: function(e) {
                        var n = this
                          , i = "https://unifygateway.htsec.com/user-audit/auth_check.json"
                          , o = {
                            pzb: "1114",
                            tuoshui: "1117",
                            1: "1114",
                            10: "1117"
                        };
                        t.ajax({
                            type: "POST",
                            url: i,
                            data: JSON.stringify({
                                account: e && e.accountId,
                                equityCode: o[this.$getRequest().type ? this.$getRequest().type : "pzb"],
                                articleId: Object(r["d"])().id ? Object(r["d"])().id : "",
                                deviceinfo: "",
                                channel: Object(r["d"])().channel ? Object(r["d"])().channel : "",
                                requestor: "newsCenter"
                            }),
                            dataType: "json",
                            timeout: 15e3,
                            contentType: "application/json",
                            success: function(t) {
                                if (t && "0" === t.code) {
                                    var i = t && t.jsonMessage && t.jsonMessage.isEntireEquity
                                      , r = t && t.jsonMessage && t.jsonMessage.isValid
                                      , o = t && t.jsonMessage && t.jsonMessage.articleId
                                      , a = t && t.jsonMessage && t.jsonMessage.endTime;
                                    1 === parseInt(i) && 1 === parseInt(r) ? (n.isBuyColumns = !0,
                                    n.yidingyueDate = a,
                                    n.isBuyCurrtSingle = !1,
                                    n.isShoApplyFor = !1,
                                    window.removeEventListener("scroll", n.appyForBoxIsShow, {
                                        passive: !1
                                    }),
                                    (window.btnType || window.applyBtnType) && n.checKHasCoupon({
                                        commentAccountId: e.accountId,
                                        commentToken: e.token
                                    }),
                                    "relatedRecommendation" === window.applyBtnType && 0 === window.loginType && (window.location.href = "@redirect=info&url=" + encodeURIComponent(window.detailUrl + "&version=" + n.$getRequest().version + "&channel=" + n.$getRequest().channel + "&theme=" + n.$getRequest().theme) + "&Id=" + e.id + "&Title=" + e.title,
                                    window.loginType = 1)) : 0 === parseInt(i) && 1 === parseInt(r) ? (o === n.$getRequest().id && (n.isBuyColumns = !1,
                                    n.isBuyCurrtSingle = !0),
                                    s["a"].getArticle({
                                        accountId: e.accountId,
                                        callBackFun: function(t) {
                                            n.yidingyueList = t;
                                            var i = t.findIndex((function(t) {
                                                t.articleId,
                                                e.id
                                            }
                                            ));
                                            "relatedRecommendation" === window.applyBtnType && 0 === window.loginType && (i > -1 ? (n.checKHasCoupon({
                                                commentAccountId: e.accountId,
                                                commentToken: e.token
                                            }),
                                            window.location.href = "@redirect=info&url=" + encodeURIComponent(window.detailUrl + "&version=" + n.$getRequest().version + "&channel=" + n.$getRequest().channel + "&theme=" + n.$getRequest().theme) + "&Id=" + e.id + "&Title=" + e.title) : n.checKHasCoupon({
                                                commentAccountId: e.accountId,
                                                commentToken: e.token,
                                                callBack: function() {
                                                    var t = n.sku_unused_code_nums && parseInt(n.sku_unused_code_nums) > 0 ? "&sku_id=" + n.sku_id : ""
                                                      , i = n.commonApiUrl[n.sku_unused_code_nums && parseInt(n.sku_unused_code_nums) > 0 ? "couponSelectUrl" : "prodOrderConfirmUrl"][n.$getRequest().type ? n.$getRequest().type : "pzb"] + "&supplier_code=local&article_id=" + (e.id ? e.id : "") + "&article_title=" + (e.title ? encodeURIComponent(encodeURIComponent(e.title)) : "") + t;
                                                    window.location.href = "ehtsec://funid=10088&communityLogin=1&navigationBarHidden=1&path=" + encodeURIComponent(i)
                                                }
                                            }),
                                            window.loginType = 1)
                                        }
                                    })) : (n.isBuyColumns = !1,
                                    n.isBuyCurrtSingle = !1,
                                    n.setAuthCheckError(e))
                                } else
                                    n.isBuyColumns = !1,
                                    n.isBuyCurrtSingle = !1,
                                    n.setAuthCheckError(e)
                            },
                            error: function(t) {
                                n.isBuyColumns = !1,
                                n.isBuyCurrtSingle = !1,
                                n.setAuthCheckError(e)
                            }
                        })
                    },
                    setSingleSkuList: function(t, e) {
                        var n = this
                          , i = this
                          , r = t && t.sku_list ? t.sku_list : [];
                        this.singleSkuList = r.filter((function(t) {
                            return "4" === t.sku_unit
                        }
                        )),
                        this.single_price_type = this.singleSkuList[0] && this.singleSkuList[0].sku_price_list && this.singleSkuList[0].sku_price_list.length > 0 && this.singleSkuList[0].sku_price_list.findIndex((function(t) {
                            return e && n.singleSkuList[0].sku_price_list && n.singleSkuList[0].sku_price_list.length > 1 ? "1" === t.price_type : "0" === t.price_type
                        }
                        )),
                        i.sku_id = this.singleSkuList && this.singleSkuList[0] && this.singleSkuList[0].sku_id ? this.singleSkuList[0].sku_id : "",
                        i.product_id = this.singleSkuList && this.singleSkuList[0] && this.singleSkuList[0].product_id ? this.singleSkuList[0].product_id : "",
                        e && s["b"].communityToken({
                            tokenStr: e,
                            skuId: i.product_id + "_" + i.sku_id,
                            callBackFun: function(t) {
                                t && "0" === t.error_no ? t.res_map && (i.sku_unused_code_nums = t.res_map.sku_unused_code_nums ? t.res_map.sku_unused_code_nums : "",
                                i.prod_unused_code_nums = t.res_map.prod_unused_code_nums ? t.res_map.prod_unused_code_nums : "") : (i.sku_unused_code_nums = "",
                                i.prod_unused_code_nums = "")
                            }
                        })
                    },
                    setDefaultPrice: function(t, e) {
                        var n = t && t.sku_list ? t.sku_list : []
                          , i = n.filter((function(t) {
                            return "1" === t.is_default
                        }
                        ));
                        if (i.length > 0) {
                            var r = i[0].sku_price_list && i[0].sku_price_list.length > 0 && i[0].sku_price_list.filter((function(t) {
                                return e && i[0].sku_price_list && i[0].sku_price_list.length > 1 ? "1" === t.price_type : "0" === t.price_type
                            }
                            ));
                            this.defaultPrice = r[0].sell_price
                        }
                    },
                    buyColumnsClickFun: function(e, n) {
                        window.btnType = e,
                        window.title = n;
                        var i = this;
                        window.id = this.$getRequest().id;
                        var o = t(".immediate-apply-btn").attr("data-skuid") ? t(".immediate-apply-btn").attr("data-skuid") : ""
                          , s = this.commonApiUrl[this.prod_unused_code_nums && parseInt(this.prod_unused_code_nums) > 0 ? "couponSelectUrl" : "prodOrderConfirmUrl"][this.$getRequest().type ? this.$getRequest().type : "pzb"] + "&sku_id=" + (o || "");
                        if (this.$HTBridge.inApp)
                            if (this.commentToken && this.commentAccountId) {
                                if (window.loginType = 1,
                                "columnBtn" === e)
                                    window.location.href = "ehtsec://funid=10088&communityLogin=1&navigationBarHidden=1&path=" + encodeURIComponent(s),
                                    this.$HTBridge.statBuriedPointSAEvent({
                                        eventName: "statPZBFuncClick",
                                        params: {
                                            clickKey: "51994",
                                            funcName: "详情订阅栏目"
                                        }
                                    });
                                else if ("singleBtn" === e) {
                                    var a = this.sku_unused_code_nums && parseInt(this.sku_unused_code_nums) > 0 ? "&sku_id=" + this.sku_id : ""
                                      , u = this.commonApiUrl[this.sku_unused_code_nums && parseInt(this.sku_unused_code_nums) > 0 ? "couponSelectUrl" : "prodOrderConfirmUrl"][this.$getRequest().type ? this.$getRequest().type : "pzb"] + "&supplier_code=local&article_id=" + (window.id ? window.id : "") + "&article_title=" + (window.title ? encodeURIComponent(encodeURIComponent(window.title)) : "") + a;
                                    window.location.href = "ehtsec://funid=10088&communityLogin=1&navigationBarHidden=1&path=" + encodeURIComponent(u),
                                    this.$HTBridge.statBuriedPointSAEvent({
                                        eventName: "statPZBFuncClick",
                                        params: {
                                            clickKey: "51994",
                                            funcName: "详情单篇订阅"
                                        }
                                    })
                                }
                            } else
                                this.$HTBridge.communityLogin((function(t) {
                                    i.commentToken = t && t.token ? t.token : "",
                                    i.commentAccountId = t && t.account ? t.account : "",
                                    i.commentToken && i.commentAccountId && i.upDateAuthCheck({
                                        commentAccountId: i.commentAccountId,
                                        commentToken: i.commentToken
                                    })
                                }
                                ));
                        else
                            Object(r["i"])() ? (t(".userLead-box").css("display", "block"),
                            t(".userLead_bg").css("display", "block"),
                            t(".userLead").css("display", "block")) : Object(r["a"])()
                    },
                    xudingClickFun: function(t) {
                        t.stopPropagation(),
                        this.$HTBridge.statBuriedPointSAEvent({
                            eventName: "statPZBFuncClick",
                            params: {
                                clickKey: "51994",
                                funcName: "续订"
                            }
                        });
                        var e = this.commonApiUrl[this.prod_unused_code_nums && parseInt(this.prod_unused_code_nums) > 0 ? "couponSelectUrl" : "prodOrderConfirmUrl"][this.$getRequest().type ? this.$getRequest().type : "pzb"] + "&sku_id=";
                        window.location.href = "ehtsec://funid=10088&communityLogin=1&navigationBarHidden=1&path=" + encodeURIComponent(e)
                    },
                    appyForBoxIsShow: function() {
                        var t = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
                          , e = document.querySelector(".lockBtn") && document.querySelector(".lockBtn").offsetTop
                          , n = document.querySelector(".lockBtn") && document.querySelector(".lockBtn").offsetHeight
                          , i = document.querySelector(".lockBtn-cont") && document.querySelector(".lockBtn-cont").offsetHeight
                          , r = document.querySelector(".full-text") && document.querySelector(".full-text").offsetTop
                          , o = e ? e + (n - i) / 2 + i : r;
                        this.isBuyColumns || (this.isShoApplyFor = t >= o)
                    },
                    upDateAuthCheck: function(e) {
                        var n = this;
                        n.commentToken = e.commentToken,
                        n.commentAccountId = e.commentAccountId;
                        var i = t(".immediate-apply-btn").attr("data-skuid") ? t(".immediate-apply-btn").attr("data-skuid") : ""
                          , r = n.commonApiUrl[this.prod_unused_code_nums && parseInt(this.prod_unused_code_nums) > 0 ? "couponSelectUrl" : "prodOrderConfirmUrl"][n.$getRequest().type ? n.$getRequest().type : "pzb"] + "&sku_id=" + (i || "");
                        n.get_pzdj_authCheck({
                            accountId: e.commentAccountId,
                            token: e.commentToken,
                            btnType: window.btnType,
                            title: window.title,
                            id: window.id,
                            orderConfirmUrl: r || ""
                        })
                    },
                    betterScrollInit: function() {
                        var t = this
                          , e = document.querySelector(".wrapper_scroll")
                          , n = {};
                        if (n = this.isShowSkuList ? {
                            probeType: 3,
                            observeDOM: !0,
                            observeImage: !0,
                            click: !0,
                            bounce: !1,
                            mouseWheel: !0,
                            scrollX: !0,
                            scrollY: !1,
                            freeScroll: !0,
                            eventPassthrough: "horizontal"
                        } : {
                            probeType: 3,
                            observeDOM: !0,
                            observeImage: !0,
                            click: !0,
                            bounce: !1,
                            mouseWheel: !0,
                            scrollX: !1,
                            scrollY: !0
                        },
                        !e)
                            return !1;
                        this.$HTBridge.isIos ? (e.className = "wrapper_scroll",
                        this.scroll = new p["a"](e,n),
                        this.scroll.on("scroll", (function(e) {
                            var n = document.querySelector(".lockBtn") && document.querySelector(".lockBtn").offsetTop
                              , i = document.querySelector(".lockBtn") && document.querySelector(".lockBtn").offsetHeight
                              , r = document.querySelector(".lockBtn-cont") && document.querySelector(".lockBtn-cont").offsetHeight
                              , o = document.querySelector(".full-text") && document.querySelector(".full-text").offsetTop
                              , s = n ? n + (i - r) / 2 + r : o;
                            t.isBuyColumns || (Math.abs(e.y) >= s ? t.isShoApplyFor = !0 : t.isShoApplyFor = !1)
                        }
                        ))) : (e.className = "",
                        window.addEventListener("scroll", this.appyForBoxIsShow, {
                            passive: !1
                        }))
                    },
                    setAuthCheckError: function(e) {
                        var n = this;
                        if ("columnBtn" === e.btnType) {
                            if (0 === window.loginType) {
                                var i = t(".immediate-apply-btn").attr("data-skuid") ? t(".immediate-apply-btn").attr("data-skuid") : "";
                                n.checKHasCoupon({
                                    commentAccountId: e.accountId,
                                    commentToken: e.token,
                                    callBack: function() {
                                        var t = n.commonApiUrl[n.prod_unused_code_nums && parseInt(n.prod_unused_code_nums) > 0 ? "couponSelectUrl" : "prodOrderConfirmUrl"][n.$getRequest().type ? n.$getRequest().type : "pzb"] + "&sku_id=" + (i || "");
                                        window.location.href = "ehtsec://funid=10088&communityLogin=1&navigationBarHidden=1&path=" + encodeURIComponent(t)
                                    }
                                })
                            }
                            window.loginType = 1
                        } else
                            "singleBtn" === e.btnType && (0 === window.loginType && n.checKHasCoupon({
                                commentAccountId: e.accountId,
                                commentToken: e.token,
                                callBack: function() {
                                    var t = n.sku_unused_code_nums && parseInt(n.sku_unused_code_nums) > 0 ? "&sku_id=" + n.sku_id : ""
                                      , i = n.commonApiUrl[n.sku_unused_code_nums && parseInt(n.sku_unused_code_nums) > 0 ? "couponSelectUrl" : "prodOrderConfirmUrl"][n.$getRequest().type ? n.$getRequest().type : "pzb"] + "&supplier_code=local&article_id=" + (e.id ? e.id : "") + "&article_title=" + (e.title ? encodeURIComponent(encodeURIComponent(e.title)) : "") + t;
                                    window.location.href = "ehtsec://funid=10088&communityLogin=1&navigationBarHidden=1&path=" + encodeURIComponent(i)
                                }
                            }),
                            window.loginType = 1);
                        s["a"].getArticle({
                            accountId: e.accountId
                        }, (function(t) {
                            n.yidingyueList = t;
                            var i = t.findIndex((function(t) {
                                t.articleId,
                                e.id
                            }
                            ));
                            "relatedRecommendation" === window.applyBtnType && 0 === window.loginType && (i > -1 ? window.location.href = "@redirect=info&url=" + encodeURIComponent(window.detailUrl + "&version=" + n.$getRequest().version + "&channel=" + n.$getRequest().channel + "&theme=" + n.$getRequest().theme) + "&Id=" + e.id + "&Title=" + e.title : n.checKHasCoupon({
                                commentAccountId: e.accountId,
                                commentToken: e.token,
                                callBack: function() {
                                    var t = n.sku_unused_code_nums && parseInt(n.sku_unused_code_nums) > 0 ? "&sku_id=" + n.sku_id : ""
                                      , i = n.commonApiUrl[n.sku_unused_code_nums && parseInt(n.sku_unused_code_nums) > 0 ? "couponSelectUrl" : "prodOrderConfirmUrl"][n.$getRequest().type ? n.$getRequest().type : "pzb"] + "&supplier_code=local&article_id=" + (e.id ? e.id : "") + "&article_title=" + (e.title ? encodeURIComponent(encodeURIComponent(e.title)) : "") + t;
                                    window.location.href = "ehtsec://funid=10088&communityLogin=1&navigationBarHidden=1&path=" + encodeURIComponent(i)
                                }
                            }),
                            window.loginType = 1)
                        }
                        ))
                    },
                    setEmallProductStatus: function(t) {
                        this.isShowSkuList = t,
                        this.$HTBridge.isIos && this.scroll.destroy(),
                        this.betterScrollInit()
                    },
                    checKHasCoupon: function(t) {
                        var e = this;
                        s["a"].login({
                            accountId: t.commentAccountId,
                            token: t.commentToken,
                            callBackFun: function(n) {
                                var i = n.tokenStr;
                                s["b"].communityToken({
                                    tokenStr: i,
                                    skuId: e.product_id + "_" + e.sku_id,
                                    callBackFun: function(n) {
                                        n && "0" === n.error_no && n.res_map && (e.sku_unused_code_nums = n.res_map.sku_unused_code_nums ? n.res_map.sku_unused_code_nums : "",
                                        e.prod_unused_code_nums = n.res_map.prod_unused_code_nums ? n.res_map.prod_unused_code_nums : ""),
                                        t && t.callBack && t.callBack()
                                    }
                                })
                            }
                        })
                    }
                },
                mounted: function() {
                    var t = this;
                    "pc" === Object(r["d"])().channel ? document.documentElement.style.fontSize = "50px" : document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + "px",
                    document.querySelector("title") && (document.querySelector("title").innerHTML = "通财资讯");
                    var e = this;
                    this.$HTBridge.inApp ? (this.$HTBridge.getCommunityAccount((function(t) {
                        e.commentToken = t && t.token ? t.token : "",
                        e.commentAccountId = t && t.account ? t.account : "",
                        e.commentToken && e.commentAccountId ? (e.get_pzdj_authCheck({
                            accountId: e.commentAccountId,
                            token: e.commentToken
                        }),
                        s["a"].login({
                            accountId: e.commentAccountId,
                            token: e.commentToken,
                            callBackFun: function(t) {
                                var n = t.tokenStr;
                                s["b"].getEmallList({
                                    tokenStr: n,
                                    callBackFun: function(t) {
                                        e.emallProductDetail = t,
                                        e.setSingleSkuList(t, n),
                                        e.setDefaultPrice(t, n)
                                    }
                                })
                            }
                        }),
                        e.getData({
                            accountId: e.commentAccountId,
                            token: e.commentToken
                        })) : (e.getData(),
                        s["b"].getEmallList({
                            callBackFun: function(t) {
                                e.emallProductDetail = t,
                                e.setSingleSkuList(t, ""),
                                e.setDefaultPrice(t, "")
                            }
                        }))
                    }
                    )),
                    this.$HTBridge.isIos ? Object(y["b"])((function(t) {
                        t.registerHandler("updateCommunity", (function(t) {
                            e.commentToken = t && t.token ? t.token : "",
                            e.commentAccountId = t && t.account ? t.account : "",
                            e.upDateAuthCheck({
                                commentAccountId: e.commentAccountId,
                                commentToken: e.commentToken
                            })
                        }
                        ))
                    }
                    )) : window.updateCommunity = function(t, n) {
                        var i = {
                            token: t,
                            account: n
                        };
                        e.commentToken = i && i.token ? i.token : "",
                        e.commentAccountId = i && i.account ? i.account : "",
                        e.upDateAuthCheck({
                            commentAccountId: e.commentAccountId,
                            commentToken: e.commentToken
                        })
                    }
                    ,
                    y["a"].isAndroid && parseFloat(Object(r["d"])().version) >= 7.16 && "pc" !== Object(r["d"])().channel && (window.location.href = "ehtsec://collectionStatus=2")) : (e.getData(),
                    s["b"].getEmallList({
                        callBackFun: function(t) {
                            e.emallProductDetail = t,
                            e.setSingleSkuList(t, ""),
                            e.setDefaultPrice(t, "")
                        }
                    })),
                    this.$nextTick((function() {
                        t.isBuyColumns || t.betterScrollInit()
                    }
                    ))
                },
                computed: {
                    setFullTextData: function() {
                        var t = this.isBuyColumns
                          , e = this.isBuyCurrtSingle
                          , n = this.newsDetailObj;
                        return {
                            isBuyColumns: t,
                            isBuyCurrtSingle: e,
                            newsDetailObj: n
                        }
                    }
                },
                watch: {
                    setFullTextData: {
                        handler: function(e) {
                            if (e.isBuyColumns || e.isBuyCurrtSingle || e.newsDetailObj.isPhaseSelect) {
                                var n = this;
                                this.$nextTick((function() {
                                    n.$HTBridge.isIos && n.scroll.destroy(),
                                    n.betterScrollInit(),
                                    t(".full-text a").on("click", (function() {
                                        if (t(this).attr("href") && -1 !== t(this).attr("href").indexOf("cailianshe"))
                                            return !1
                                    }
                                    ))
                                }
                                ))
                            }
                        }
                    }
                },
                destroyed: function() {
                    this.scroll.destroy(),
                    window.removeEventListener("scroll", this.appyForBoxIsShow, {
                        passive: !1
                    })
                }
            }
        }
        ).call(this, n("1157"))
    },
    "6b75": function(t, e, n) {
        "use strict";
        function i(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, i = new Array(e); n < e; n++)
                i[n] = t[n];
            return i
        }
        n.d(e, "a", (function() {
            return i
        }
        ))
    },
    "746f": function(t, e, n) {
        var i = n("428f")
          , r = n("5135")
          , o = n("e538")
          , s = n("9bf2").f;
        t.exports = function(t) {
            var e = i.Symbol || (i.Symbol = {});
            r(e, t) || s(e, t, {
                value: o.f(t)
            })
        }
    },
    7917: function(t, e, n) {
        "use strict";
        var i = n("c532");
        function r(t, e, n, i, r) {
            Error.call(this),
            this.message = t,
            this.name = "AxiosError",
            e && (this.code = e),
            n && (this.config = n),
            i && (this.request = i),
            r && (this.response = r)
        }
        i.inherits(r, Error, {
            toJSON: function() {
                return {
                    message: this.message,
                    name: this.name,
                    description: this.description,
                    number: this.number,
                    fileName: this.fileName,
                    lineNumber: this.lineNumber,
                    columnNumber: this.columnNumber,
                    stack: this.stack,
                    config: this.config,
                    code: this.code,
                    status: this.response && this.response.status ? this.response.status : null
                }
            }
        });
        var o = r.prototype
          , s = {};
        ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED"].forEach((function(t) {
            s[t] = {
                value: t
            }
        }
        )),
        Object.defineProperties(r, s),
        Object.defineProperty(o, "isAxiosError", {
            value: !0
        }),
        r.from = function(t, e, n, s, a, u) {
            var c = Object.create(o);
            return i.toFlatObject(t, c, (function(t) {
                return t !== Error.prototype
            }
            )),
            r.call(c, t.message, e, n, s, a),
            c.name = t.name,
            u && Object.assign(c, u),
            c
        }
        ,
        t.exports = r
    },
    "7aac": function(t, e, n) {
        "use strict";
        var i = n("c532");
        t.exports = i.isStandardBrowserEnv() ? function() {
            return {
                write: function(t, e, n, r, o, s) {
                    var a = [];
                    a.push(t + "=" + encodeURIComponent(e)),
                    i.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()),
                    i.isString(r) && a.push("path=" + r),
                    i.isString(o) && a.push("domain=" + o),
                    !0 === s && a.push("secure"),
                    document.cookie = a.join("; ")
                },
                read: function(t) {
                    var e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
                    return e ? decodeURIComponent(e[3]) : null
                },
                remove: function(t) {
                    this.write(t, "", Date.now() - 864e5)
                }
            }
        }() : function() {
            return {
                write: function() {},
                read: function() {
                    return null
                },
                remove: function() {}
            }
        }()
    },
    "803d": function(t, e, n) {},
    8099: function(t, e, n) {
        "use strict";
        n("8962")
    },
    "83b9": function(t, e, n) {
        "use strict";
        var i = n("d925")
          , r = n("e683");
        t.exports = function(t, e) {
            return t && !i(e) ? r(t, e) : e
        }
    },
    "848b": function(t, e, n) {
        "use strict";
        var i = n("5cce").version
          , r = n("7917")
          , o = {};
        ["object", "boolean", "number", "function", "string", "symbol"].forEach((function(t, e) {
            o[t] = function(n) {
                return typeof n === t || "a" + (e < 1 ? "n " : " ") + t
            }
        }
        ));
        var s = {};
        function a(t, e, n) {
            if ("object" !== typeof t)
                throw new r("options must be an object",r.ERR_BAD_OPTION_VALUE);
            var i = Object.keys(t)
              , o = i.length;
            while (o-- > 0) {
                var s = i[o]
                  , a = e[s];
                if (a) {
                    var u = t[s]
                      , c = void 0 === u || a(u, s, t);
                    if (!0 !== c)
                        throw new r("option " + s + " must be " + c,r.ERR_BAD_OPTION_VALUE)
                } else if (!0 !== n)
                    throw new r("Unknown option " + s,r.ERR_BAD_OPTION)
            }
        }
        o.transitional = function(t, e, n) {
            function o(t, e) {
                return "[Axios v" + i + "] Transitional option '" + t + "'" + e + (n ? ". " + n : "")
            }
            return function(n, i, a) {
                if (!1 === t)
                    throw new r(o(i, " has been removed" + (e ? " in " + e : "")),r.ERR_DEPRECATED);
                return e && !s[i] && (s[i] = !0,
                console.warn(o(i, " has been deprecated since v" + e + " and will be removed in the near future"))),
                !t || t(n, i, a)
            }
        }
        ,
        t.exports = {
            assertOptions: a,
            validators: o
        }
    },
    8596: function(t, e, n) {
        var i = {
            "./icon_jinru_black.png": "4cb0",
            "./icon_jinru_white.png": "6650"
        };
        function r(t) {
            var e = o(t);
            return n(e)
        }
        function o(t) {
            if (!n.o(i, t)) {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND",
                e
            }
            return i[t]
        }
        r.keys = function() {
            return Object.keys(i)
        }
        ,
        r.resolve = o,
        t.exports = r,
        r.id = "8596"
    },
    8962: function(t, e, n) {},
    "8df4": function(t, e, n) {
        "use strict";
        var i = n("fb60");
        function r(t) {
            if ("function" !== typeof t)
                throw new TypeError("executor must be a function.");
            var e;
            this.promise = new Promise((function(t) {
                e = t
            }
            ));
            var n = this;
            this.promise.then((function(t) {
                if (n._listeners) {
                    var e, i = n._listeners.length;
                    for (e = 0; e < i; e++)
                        n._listeners[e](t);
                    n._listeners = null
                }
            }
            )),
            this.promise.then = function(t) {
                var e, i = new Promise((function(t) {
                    n.subscribe(t),
                    e = t
                }
                )).then(t);
                return i.cancel = function() {
                    n.unsubscribe(e)
                }
                ,
                i
            }
            ,
            t((function(t) {
                n.reason || (n.reason = new i(t),
                e(n.reason))
            }
            ))
        }
        r.prototype.throwIfRequested = function() {
            if (this.reason)
                throw this.reason
        }
        ,
        r.prototype.subscribe = function(t) {
            this.reason ? t(this.reason) : this._listeners ? this._listeners.push(t) : this._listeners = [t]
        }
        ,
        r.prototype.unsubscribe = function(t) {
            if (this._listeners) {
                var e = this._listeners.indexOf(t);
                -1 !== e && this._listeners.splice(e, 1)
            }
        }
        ,
        r.source = function() {
            var t, e = new r((function(e) {
                t = e
            }
            ));
            return {
                token: e,
                cancel: t
            }
        }
        ,
        t.exports = r
    },
    "90de": function(t, e, n) {},
    9152: function(t, e) {
        /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
        e.read = function(t, e, n, i, r) {
            var o, s, a = 8 * r - i - 1, u = (1 << a) - 1, c = u >> 1, l = -7, d = n ? r - 1 : 0, f = n ? -1 : 1, p = t[e + d];
            for (d += f,
            o = p & (1 << -l) - 1,
            p >>= -l,
            l += a; l > 0; o = 256 * o + t[e + d],
            d += f,
            l -= 8)
                ;
            for (s = o & (1 << -l) - 1,
            o >>= -l,
            l += i; l > 0; s = 256 * s + t[e + d],
            d += f,
            l -= 8)
                ;
            if (0 === o)
                o = 1 - c;
            else {
                if (o === u)
                    return s ? NaN : 1 / 0 * (p ? -1 : 1);
                s += Math.pow(2, i),
                o -= c
            }
            return (p ? -1 : 1) * s * Math.pow(2, o - i)
        }
        ,
        e.write = function(t, e, n, i, r, o) {
            var s, a, u, c = 8 * o - r - 1, l = (1 << c) - 1, d = l >> 1, f = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = i ? 0 : o - 1, h = i ? 1 : -1, m = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
            for (e = Math.abs(e),
            isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0,
            s = l) : (s = Math.floor(Math.log(e) / Math.LN2),
            e * (u = Math.pow(2, -s)) < 1 && (s--,
            u *= 2),
            e += s + d >= 1 ? f / u : f * Math.pow(2, 1 - d),
            e * u >= 2 && (s++,
            u /= 2),
            s + d >= l ? (a = 0,
            s = l) : s + d >= 1 ? (a = (e * u - 1) * Math.pow(2, r),
            s += d) : (a = e * Math.pow(2, d - 1) * Math.pow(2, r),
            s = 0)); r >= 8; t[n + p] = 255 & a,
            p += h,
            a /= 256,
            r -= 8)
                ;
            for (s = s << r | a,
            c += r; c > 0; t[n + p] = 255 & s,
            p += h,
            s /= 256,
            c -= 8)
                ;
            t[n + p - h] |= 128 * m
        }
    },
    "9bdd": function(t, e, n) {
        var i = n("825a")
          , r = n("2a62");
        t.exports = function(t, e, n, o) {
            try {
                return o ? e(i(n)[0], n[1]) : e(n)
            } catch (s) {
                r(t, "throw", s)
            }
        }
    },
    a073: function(t, e, n) {
        "use strict";
        var i = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "recommendation"
            }, [n("div", {
                staticClass: "space"
            }), n("div", {
                staticClass: "list-title"
            }, [n("TitleModule", {
                attrs: {
                    titleData: t.titleData
                }
            })], 1), n("div", {
                staticClass: "list-content"
            }, [n("ul", {
                attrs: {
                    id: "related_recommendation"
                }
            }, t._l(t.marketTreasureNewsRecord, (function(e, i) {
                return n("li", {
                    key: i
                }, [n("div", {
                    staticClass: "date-title"
                }, [n("span", {
                    staticClass: "today"
                }, [t._v(t._s(e && e.time === t.getDateStr(t.todayStamp) ? "今天" : ""))]), n("span", {
                    staticClass: "fontFamily"
                }, [t._v(t._s(e && e.time ? e.time : ""))])]), n("div", {
                    staticClass: "list-cont"
                }, t._l(e.list, (function(e, i) {
                    return n("div", {
                        key: i,
                        staticClass: "list-item",
                        attrs: {
                            id: e.id
                        },
                        on: {
                            click: function(n) {
                                return n.stopPropagation(),
                                t.recommendationListItem(n, e.id, e.url, e.title)
                            }
                        }
                    }, [n("h4", {
                        staticClass: "item-title"
                    }, [n("span", {
                        staticClass: "fontFamily"
                    }, [t._v(t._s(e && e.time ? t.dayjs(e.time).format("HH:mm") : ""))]), t._v(t._s(e && e.title ? e.title : ""))]), n("div", {
                        staticClass: "item-cont"
                    }, [n("p", {
                        staticClass: "text"
                    }, [t._v(t._s(e && e.summary && "null" !== e.summary ? e.summary : ""))]), n("div", {
                        staticClass: "related-list-stocks"
                    }, [n("ul", {
                        staticClass: "related_list_stocks clearfix"
                    }, t._l(t.$sumUpRose({
                        arr: e && e.relateStock,
                        resultArr: t.newsRelateStockCodeResult,
                        returnType: "returnList"
                    }) ? t.$sumUpRose({
                        arr: e && e.relateStock,
                        resultArr: t.newsRelateStockCodeResult,
                        returnType: "returnList"
                    }).slice(0, 2) : [], (function(i, r) {
                        return n("li", {
                            key: r,
                            class: ["related-stocks-li clearfix ", {
                                "li-price-red": parseFloat(i.up_rose) > 0,
                                "li-price": 0 === parseFloat(i.up_rose),
                                "li-price-green": parseFloat(i.up_rose) < 0
                            }],
                            on: {
                                click: function(n) {
                                    return n.stopPropagation(),
                                    t.relatedStocksLiClick(n, e.isBuy, i.code, e.relateStock)
                                }
                            }
                        }, [e.isBuy ? n("div", {
                            staticClass: "name"
                        }, [t._v(t._s(i.stock_name ? i.stock_name : ""))]) : t._e(), e.isBuy ? t._e() : n("div", {
                            staticClass: "name hideName"
                        }, [n("span", [t._v("****")])]), n("div", {
                            class: ["price-limit fontFamily", {
                                "price-limit-red": parseFloat(i.up_rose) > 0,
                                "price-limit-green": parseFloat(i.up_rose) < 0
                            }]
                        }, [t._v(t._s(t.set_up_rose(i.up_rose)))])])
                    }
                    )), 0)]), n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !e.isBuy,
                            expression: "!childList.isBuy"
                        }],
                        staticClass: "item-lock-btn",
                        on: {
                            click: function(n) {
                                return n.stopPropagation(),
                                t.deblockingClick(e.isBuy, e.url, e.id, e.title)
                            }
                        }
                    }, [n("span", [t._v("解锁查看")])])])])
                }
                )), 0)])
            }
            )), 0)])])
        }
          , r = []
          , o = n("5ce8")
          , s = o["a"]
          , a = (n("0a1c"),
        n("2877"))
          , u = Object(a["a"])(s, i, r, !1, null, null, null);
        e["a"] = u.exports
    },
    a4d3: function(t, e, n) {
        "use strict";
        var i = n("23e7")
          , r = n("da84")
          , o = n("d066")
          , s = n("c430")
          , a = n("83ab")
          , u = n("4930")
          , c = n("d039")
          , l = n("5135")
          , d = n("e8b5")
          , f = n("861d")
          , p = n("d9b5")
          , h = n("825a")
          , m = n("7b0b")
          , y = n("fc6a")
          , g = n("a04b")
          , _ = n("577e")
          , v = n("5c6c")
          , w = n("7c73")
          , b = n("df75")
          , k = n("241c")
          , A = n("057f")
          , C = n("7418")
          , S = n("06cf")
          , R = n("9bf2")
          , T = n("d1e7")
          , E = n("9112")
          , B = n("6eeb")
          , I = n("5692")
          , O = n("f772")
          , D = n("d012")
          , j = n("90e3")
          , P = n("b622")
          , U = n("e538")
          , x = n("746f")
          , L = n("d44e")
          , q = n("69f3")
          , N = n("b727").forEach
          , $ = O("hidden")
          , F = "Symbol"
          , M = "prototype"
          , H = P("toPrimitive")
          , z = q.set
          , Y = q.getterFor(F)
          , Q = Object[M]
          , K = r.Symbol
          , J = o("JSON", "stringify")
          , V = S.f
          , G = R.f
          , W = A.f
          , X = T.f
          , Z = I("symbols")
          , tt = I("op-symbols")
          , et = I("string-to-symbol-registry")
          , nt = I("symbol-to-string-registry")
          , it = I("wks")
          , rt = r.QObject
          , ot = !rt || !rt[M] || !rt[M].findChild
          , st = a && c((function() {
            return 7 != w(G({}, "a", {
                get: function() {
                    return G(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        }
        )) ? function(t, e, n) {
            var i = V(Q, e);
            i && delete Q[e],
            G(t, e, n),
            i && t !== Q && G(Q, e, i)
        }
        : G
          , at = function(t, e) {
            var n = Z[t] = w(K[M]);
            return z(n, {
                type: F,
                tag: t,
                description: e
            }),
            a || (n.description = e),
            n
        }
          , ut = function(t, e, n) {
            t === Q && ut(tt, e, n),
            h(t);
            var i = g(e);
            return h(n),
            l(Z, i) ? (n.enumerable ? (l(t, $) && t[$][i] && (t[$][i] = !1),
            n = w(n, {
                enumerable: v(0, !1)
            })) : (l(t, $) || G(t, $, v(1, {})),
            t[$][i] = !0),
            st(t, i, n)) : G(t, i, n)
        }
          , ct = function(t, e) {
            h(t);
            var n = y(e)
              , i = b(n).concat(ht(n));
            return N(i, (function(e) {
                a && !dt.call(n, e) || ut(t, e, n[e])
            }
            )),
            t
        }
          , lt = function(t, e) {
            return void 0 === e ? w(t) : ct(w(t), e)
        }
          , dt = function(t) {
            var e = g(t)
              , n = X.call(this, e);
            return !(this === Q && l(Z, e) && !l(tt, e)) && (!(n || !l(this, e) || !l(Z, e) || l(this, $) && this[$][e]) || n)
        }
          , ft = function(t, e) {
            var n = y(t)
              , i = g(e);
            if (n !== Q || !l(Z, i) || l(tt, i)) {
                var r = V(n, i);
                return !r || !l(Z, i) || l(n, $) && n[$][i] || (r.enumerable = !0),
                r
            }
        }
          , pt = function(t) {
            var e = W(y(t))
              , n = [];
            return N(e, (function(t) {
                l(Z, t) || l(D, t) || n.push(t)
            }
            )),
            n
        }
          , ht = function(t) {
            var e = t === Q
              , n = W(e ? tt : y(t))
              , i = [];
            return N(n, (function(t) {
                !l(Z, t) || e && !l(Q, t) || i.push(Z[t])
            }
            )),
            i
        };
        if (u || (K = function() {
            if (this instanceof K)
                throw TypeError("Symbol is not a constructor");
            var t = arguments.length && void 0 !== arguments[0] ? _(arguments[0]) : void 0
              , e = j(t)
              , n = function(t) {
                this === Q && n.call(tt, t),
                l(this, $) && l(this[$], e) && (this[$][e] = !1),
                st(this, e, v(1, t))
            };
            return a && ot && st(Q, e, {
                configurable: !0,
                set: n
            }),
            at(e, t)
        }
        ,
        B(K[M], "toString", (function() {
            return Y(this).tag
        }
        )),
        B(K, "withoutSetter", (function(t) {
            return at(j(t), t)
        }
        )),
        T.f = dt,
        R.f = ut,
        S.f = ft,
        k.f = A.f = pt,
        C.f = ht,
        U.f = function(t) {
            return at(P(t), t)
        }
        ,
        a && (G(K[M], "description", {
            configurable: !0,
            get: function() {
                return Y(this).description
            }
        }),
        s || B(Q, "propertyIsEnumerable", dt, {
            unsafe: !0
        }))),
        i({
            global: !0,
            wrap: !0,
            forced: !u,
            sham: !u
        }, {
            Symbol: K
        }),
        N(b(it), (function(t) {
            x(t)
        }
        )),
        i({
            target: F,
            stat: !0,
            forced: !u
        }, {
            for: function(t) {
                var e = _(t);
                if (l(et, e))
                    return et[e];
                var n = K(e);
                return et[e] = n,
                nt[n] = e,
                n
            },
            keyFor: function(t) {
                if (!p(t))
                    throw TypeError(t + " is not a symbol");
                if (l(nt, t))
                    return nt[t]
            },
            useSetter: function() {
                ot = !0
            },
            useSimple: function() {
                ot = !1
            }
        }),
        i({
            target: "Object",
            stat: !0,
            forced: !u,
            sham: !a
        }, {
            create: lt,
            defineProperty: ut,
            defineProperties: ct,
            getOwnPropertyDescriptor: ft
        }),
        i({
            target: "Object",
            stat: !0,
            forced: !u
        }, {
            getOwnPropertyNames: pt,
            getOwnPropertySymbols: ht
        }),
        i({
            target: "Object",
            stat: !0,
            forced: c((function() {
                C.f(1)
            }
            ))
        }, {
            getOwnPropertySymbols: function(t) {
                return C.f(m(t))
            }
        }),
        J) {
            var mt = !u || c((function() {
                var t = K();
                return "[null]" != J([t]) || "{}" != J({
                    a: t
                }) || "{}" != J(Object(t))
            }
            ));
            i({
                target: "JSON",
                stat: !0,
                forced: mt
            }, {
                stringify: function(t, e, n) {
                    var i, r = [t], o = 1;
                    while (arguments.length > o)
                        r.push(arguments[o++]);
                    if (i = e,
                    (f(e) || void 0 !== t) && !p(t))
                        return d(e) || (e = function(t, e) {
                            if ("function" == typeof i && (e = i.call(this, t, e)),
                            !p(e))
                                return e
                        }
                        ),
                        r[1] = e,
                        J.apply(null, r)
                }
            })
        }
        K[M][H] || E(K[M], H, K[M].valueOf),
        L(K, F),
        D[$] = !0
    },
    a630: function(t, e, n) {
        var i = n("23e7")
          , r = n("4df4")
          , o = n("1c7e")
          , s = !o((function(t) {
            Array.from(t)
        }
        ));
        i({
            target: "Array",
            stat: !0,
            forced: s
        }, {
            from: r
        })
    },
    b0c0: function(t, e, n) {
        var i = n("83ab")
          , r = n("9bf2").f
          , o = Function.prototype
          , s = o.toString
          , a = /^\s*function ([^ (]*)/
          , u = "name";
        i && !(u in o) && r(o, u, {
            configurable: !0,
            get: function() {
                try {
                    return s.call(this).match(a)[1]
                } catch (t) {
                    return ""
                }
            }
        })
    },
    b50d: function(t, e, n) {
        "use strict";
        var i = n("c532")
          , r = n("467f")
          , o = n("7aac")
          , s = n("30b5")
          , a = n("83b9")
          , u = n("c345")
          , c = n("3934")
          , l = n("cafa")
          , d = n("7917")
          , f = n("fb60")
          , p = n("b68a");
        t.exports = function(t) {
            return new Promise((function(e, n) {
                var h, m = t.data, y = t.headers, g = t.responseType;
                function _() {
                    t.cancelToken && t.cancelToken.unsubscribe(h),
                    t.signal && t.signal.removeEventListener("abort", h)
                }
                i.isFormData(m) && i.isStandardBrowserEnv() && delete y["Content-Type"];
                var v = new XMLHttpRequest;
                if (t.auth) {
                    var w = t.auth.username || ""
                      , b = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
                    y.Authorization = "Basic " + btoa(w + ":" + b)
                }
                var k = a(t.baseURL, t.url);
                function A() {
                    if (v) {
                        var i = "getAllResponseHeaders"in v ? u(v.getAllResponseHeaders()) : null
                          , o = g && "text" !== g && "json" !== g ? v.response : v.responseText
                          , s = {
                            data: o,
                            status: v.status,
                            statusText: v.statusText,
                            headers: i,
                            config: t,
                            request: v
                        };
                        r((function(t) {
                            e(t),
                            _()
                        }
                        ), (function(t) {
                            n(t),
                            _()
                        }
                        ), s),
                        v = null
                    }
                }
                if (v.open(t.method.toUpperCase(), s(k, t.params, t.paramsSerializer), !0),
                v.timeout = t.timeout,
                "onloadend"in v ? v.onloadend = A : v.onreadystatechange = function() {
                    v && 4 === v.readyState && (0 !== v.status || v.responseURL && 0 === v.responseURL.indexOf("file:")) && setTimeout(A)
                }
                ,
                v.onabort = function() {
                    v && (n(new d("Request aborted",d.ECONNABORTED,t,v)),
                    v = null)
                }
                ,
                v.onerror = function() {
                    n(new d("Network Error",d.ERR_NETWORK,t,v,v)),
                    v = null
                }
                ,
                v.ontimeout = function() {
                    var e = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded"
                      , i = t.transitional || l;
                    t.timeoutErrorMessage && (e = t.timeoutErrorMessage),
                    n(new d(e,i.clarifyTimeoutError ? d.ETIMEDOUT : d.ECONNABORTED,t,v)),
                    v = null
                }
                ,
                i.isStandardBrowserEnv()) {
                    var C = (t.withCredentials || c(k)) && t.xsrfCookieName ? o.read(t.xsrfCookieName) : void 0;
                    C && (y[t.xsrfHeaderName] = C)
                }
                "setRequestHeader"in v && i.forEach(y, (function(t, e) {
                    "undefined" === typeof m && "content-type" === e.toLowerCase() ? delete y[e] : v.setRequestHeader(e, t)
                }
                )),
                i.isUndefined(t.withCredentials) || (v.withCredentials = !!t.withCredentials),
                g && "json" !== g && (v.responseType = t.responseType),
                "function" === typeof t.onDownloadProgress && v.addEventListener("progress", t.onDownloadProgress),
                "function" === typeof t.onUploadProgress && v.upload && v.upload.addEventListener("progress", t.onUploadProgress),
                (t.cancelToken || t.signal) && (h = function(t) {
                    v && (n(!t || t && t.type ? new f : t),
                    v.abort(),
                    v = null)
                }
                ,
                t.cancelToken && t.cancelToken.subscribe(h),
                t.signal && (t.signal.aborted ? h() : t.signal.addEventListener("abort", h))),
                m || (m = null);
                var S = p(k);
                S && -1 === ["http", "https", "file"].indexOf(S) ? n(new d("Unsupported protocol " + S + ":",d.ERR_BAD_REQUEST,t)) : v.send(m)
            }
            ))
        }
    },
    b639: function(t, e, n) {
        "use strict";
        (function(t) {
            /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
            var i = n("1fb5")
              , r = n("9152")
              , o = n("e3db");
            function s() {
                try {
                    var t = new Uint8Array(1);
                    return t.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                            return 42
                        }
                    },
                    42 === t.foo() && "function" === typeof t.subarray && 0 === t.subarray(1, 1).byteLength
                } catch (e) {
                    return !1
                }
            }
            function a() {
                return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
            }
            function u(t, e) {
                if (a() < e)
                    throw new RangeError("Invalid typed array length");
                return c.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e),
                t.__proto__ = c.prototype) : (null === t && (t = new c(e)),
                t.length = e),
                t
            }
            function c(t, e, n) {
                if (!c.TYPED_ARRAY_SUPPORT && !(this instanceof c))
                    return new c(t,e,n);
                if ("number" === typeof t) {
                    if ("string" === typeof e)
                        throw new Error("If encoding is specified then the first argument must be a string");
                    return p(this, t)
                }
                return l(this, t, e, n)
            }
            function l(t, e, n, i) {
                if ("number" === typeof e)
                    throw new TypeError('"value" argument must not be a number');
                return "undefined" !== typeof ArrayBuffer && e instanceof ArrayBuffer ? y(t, e, n, i) : "string" === typeof e ? h(t, e, n) : g(t, e)
            }
            function d(t) {
                if ("number" !== typeof t)
                    throw new TypeError('"size" argument must be a number');
                if (t < 0)
                    throw new RangeError('"size" argument must not be negative')
            }
            function f(t, e, n, i) {
                return d(e),
                e <= 0 ? u(t, e) : void 0 !== n ? "string" === typeof i ? u(t, e).fill(n, i) : u(t, e).fill(n) : u(t, e)
            }
            function p(t, e) {
                if (d(e),
                t = u(t, e < 0 ? 0 : 0 | _(e)),
                !c.TYPED_ARRAY_SUPPORT)
                    for (var n = 0; n < e; ++n)
                        t[n] = 0;
                return t
            }
            function h(t, e, n) {
                if ("string" === typeof n && "" !== n || (n = "utf8"),
                !c.isEncoding(n))
                    throw new TypeError('"encoding" must be a valid string encoding');
                var i = 0 | w(e, n);
                t = u(t, i);
                var r = t.write(e, n);
                return r !== i && (t = t.slice(0, r)),
                t
            }
            function m(t, e) {
                var n = e.length < 0 ? 0 : 0 | _(e.length);
                t = u(t, n);
                for (var i = 0; i < n; i += 1)
                    t[i] = 255 & e[i];
                return t
            }
            function y(t, e, n, i) {
                if (e.byteLength,
                n < 0 || e.byteLength < n)
                    throw new RangeError("'offset' is out of bounds");
                if (e.byteLength < n + (i || 0))
                    throw new RangeError("'length' is out of bounds");
                return e = void 0 === n && void 0 === i ? new Uint8Array(e) : void 0 === i ? new Uint8Array(e,n) : new Uint8Array(e,n,i),
                c.TYPED_ARRAY_SUPPORT ? (t = e,
                t.__proto__ = c.prototype) : t = m(t, e),
                t
            }
            function g(t, e) {
                if (c.isBuffer(e)) {
                    var n = 0 | _(e.length);
                    return t = u(t, n),
                    0 === t.length ? t : (e.copy(t, 0, 0, n),
                    t)
                }
                if (e) {
                    if ("undefined" !== typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length"in e)
                        return "number" !== typeof e.length || et(e.length) ? u(t, 0) : m(t, e);
                    if ("Buffer" === e.type && o(e.data))
                        return m(t, e.data)
                }
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
            }
            function _(t) {
                if (t >= a())
                    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
                return 0 | t
            }
            function v(t) {
                return +t != t && (t = 0),
                c.alloc(+t)
            }
            function w(t, e) {
                if (c.isBuffer(t))
                    return t.length;
                if ("undefined" !== typeof ArrayBuffer && "function" === typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer))
                    return t.byteLength;
                "string" !== typeof t && (t = "" + t);
                var n = t.length;
                if (0 === n)
                    return 0;
                for (var i = !1; ; )
                    switch (e) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return n;
                    case "utf8":
                    case "utf-8":
                    case void 0:
                        return G(t).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * n;
                    case "hex":
                        return n >>> 1;
                    case "base64":
                        return Z(t).length;
                    default:
                        if (i)
                            return G(t).length;
                        e = ("" + e).toLowerCase(),
                        i = !0
                    }
            }
            function b(t, e, n) {
                var i = !1;
                if ((void 0 === e || e < 0) && (e = 0),
                e > this.length)
                    return "";
                if ((void 0 === n || n > this.length) && (n = this.length),
                n <= 0)
                    return "";
                if (n >>>= 0,
                e >>>= 0,
                n <= e)
                    return "";
                t || (t = "utf8");
                while (1)
                    switch (t) {
                    case "hex":
                        return L(this, e, n);
                    case "utf8":
                    case "utf-8":
                        return D(this, e, n);
                    case "ascii":
                        return U(this, e, n);
                    case "latin1":
                    case "binary":
                        return x(this, e, n);
                    case "base64":
                        return O(this, e, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return q(this, e, n);
                    default:
                        if (i)
                            throw new TypeError("Unknown encoding: " + t);
                        t = (t + "").toLowerCase(),
                        i = !0
                    }
            }
            function k(t, e, n) {
                var i = t[e];
                t[e] = t[n],
                t[n] = i
            }
            function A(t, e, n, i, r) {
                if (0 === t.length)
                    return -1;
                if ("string" === typeof n ? (i = n,
                n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648),
                n = +n,
                isNaN(n) && (n = r ? 0 : t.length - 1),
                n < 0 && (n = t.length + n),
                n >= t.length) {
                    if (r)
                        return -1;
                    n = t.length - 1
                } else if (n < 0) {
                    if (!r)
                        return -1;
                    n = 0
                }
                if ("string" === typeof e && (e = c.from(e, i)),
                c.isBuffer(e))
                    return 0 === e.length ? -1 : C(t, e, n, i, r);
                if ("number" === typeof e)
                    return e &= 255,
                    c.TYPED_ARRAY_SUPPORT && "function" === typeof Uint8Array.prototype.indexOf ? r ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : C(t, [e], n, i, r);
                throw new TypeError("val must be string, number or Buffer")
            }
            function C(t, e, n, i, r) {
                var o, s = 1, a = t.length, u = e.length;
                if (void 0 !== i && (i = String(i).toLowerCase(),
                "ucs2" === i || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
                    if (t.length < 2 || e.length < 2)
                        return -1;
                    s = 2,
                    a /= 2,
                    u /= 2,
                    n /= 2
                }
                function c(t, e) {
                    return 1 === s ? t[e] : t.readUInt16BE(e * s)
                }
                if (r) {
                    var l = -1;
                    for (o = n; o < a; o++)
                        if (c(t, o) === c(e, -1 === l ? 0 : o - l)) {
                            if (-1 === l && (l = o),
                            o - l + 1 === u)
                                return l * s
                        } else
                            -1 !== l && (o -= o - l),
                            l = -1
                } else
                    for (n + u > a && (n = a - u),
                    o = n; o >= 0; o--) {
                        for (var d = !0, f = 0; f < u; f++)
                            if (c(t, o + f) !== c(e, f)) {
                                d = !1;
                                break
                            }
                        if (d)
                            return o
                    }
                return -1
            }
            function S(t, e, n, i) {
                n = Number(n) || 0;
                var r = t.length - n;
                i ? (i = Number(i),
                i > r && (i = r)) : i = r;
                var o = e.length;
                if (o % 2 !== 0)
                    throw new TypeError("Invalid hex string");
                i > o / 2 && (i = o / 2);
                for (var s = 0; s < i; ++s) {
                    var a = parseInt(e.substr(2 * s, 2), 16);
                    if (isNaN(a))
                        return s;
                    t[n + s] = a
                }
                return s
            }
            function R(t, e, n, i) {
                return tt(G(e, t.length - n), t, n, i)
            }
            function T(t, e, n, i) {
                return tt(W(e), t, n, i)
            }
            function E(t, e, n, i) {
                return T(t, e, n, i)
            }
            function B(t, e, n, i) {
                return tt(Z(e), t, n, i)
            }
            function I(t, e, n, i) {
                return tt(X(e, t.length - n), t, n, i)
            }
            function O(t, e, n) {
                return 0 === e && n === t.length ? i.fromByteArray(t) : i.fromByteArray(t.slice(e, n))
            }
            function D(t, e, n) {
                n = Math.min(t.length, n);
                var i = []
                  , r = e;
                while (r < n) {
                    var o, s, a, u, c = t[r], l = null, d = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                    if (r + d <= n)
                        switch (d) {
                        case 1:
                            c < 128 && (l = c);
                            break;
                        case 2:
                            o = t[r + 1],
                            128 === (192 & o) && (u = (31 & c) << 6 | 63 & o,
                            u > 127 && (l = u));
                            break;
                        case 3:
                            o = t[r + 1],
                            s = t[r + 2],
                            128 === (192 & o) && 128 === (192 & s) && (u = (15 & c) << 12 | (63 & o) << 6 | 63 & s,
                            u > 2047 && (u < 55296 || u > 57343) && (l = u));
                            break;
                        case 4:
                            o = t[r + 1],
                            s = t[r + 2],
                            a = t[r + 3],
                            128 === (192 & o) && 128 === (192 & s) && 128 === (192 & a) && (u = (15 & c) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & a,
                            u > 65535 && u < 1114112 && (l = u))
                        }
                    null === l ? (l = 65533,
                    d = 1) : l > 65535 && (l -= 65536,
                    i.push(l >>> 10 & 1023 | 55296),
                    l = 56320 | 1023 & l),
                    i.push(l),
                    r += d
                }
                return P(i)
            }
            e.Buffer = c,
            e.SlowBuffer = v,
            e.INSPECT_MAX_BYTES = 50,
            c.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : s(),
            e.kMaxLength = a(),
            c.poolSize = 8192,
            c._augment = function(t) {
                return t.__proto__ = c.prototype,
                t
            }
            ,
            c.from = function(t, e, n) {
                return l(null, t, e, n)
            }
            ,
            c.TYPED_ARRAY_SUPPORT && (c.prototype.__proto__ = Uint8Array.prototype,
            c.__proto__ = Uint8Array,
            "undefined" !== typeof Symbol && Symbol.species && c[Symbol.species] === c && Object.defineProperty(c, Symbol.species, {
                value: null,
                configurable: !0
            })),
            c.alloc = function(t, e, n) {
                return f(null, t, e, n)
            }
            ,
            c.allocUnsafe = function(t) {
                return p(null, t)
            }
            ,
            c.allocUnsafeSlow = function(t) {
                return p(null, t)
            }
            ,
            c.isBuffer = function(t) {
                return !(null == t || !t._isBuffer)
            }
            ,
            c.compare = function(t, e) {
                if (!c.isBuffer(t) || !c.isBuffer(e))
                    throw new TypeError("Arguments must be Buffers");
                if (t === e)
                    return 0;
                for (var n = t.length, i = e.length, r = 0, o = Math.min(n, i); r < o; ++r)
                    if (t[r] !== e[r]) {
                        n = t[r],
                        i = e[r];
                        break
                    }
                return n < i ? -1 : i < n ? 1 : 0
            }
            ,
            c.isEncoding = function(t) {
                switch (String(t).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return !0;
                default:
                    return !1
                }
            }
            ,
            c.concat = function(t, e) {
                if (!o(t))
                    throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === t.length)
                    return c.alloc(0);
                var n;
                if (void 0 === e)
                    for (e = 0,
                    n = 0; n < t.length; ++n)
                        e += t[n].length;
                var i = c.allocUnsafe(e)
                  , r = 0;
                for (n = 0; n < t.length; ++n) {
                    var s = t[n];
                    if (!c.isBuffer(s))
                        throw new TypeError('"list" argument must be an Array of Buffers');
                    s.copy(i, r),
                    r += s.length
                }
                return i
            }
            ,
            c.byteLength = w,
            c.prototype._isBuffer = !0,
            c.prototype.swap16 = function() {
                var t = this.length;
                if (t % 2 !== 0)
                    throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var e = 0; e < t; e += 2)
                    k(this, e, e + 1);
                return this
            }
            ,
            c.prototype.swap32 = function() {
                var t = this.length;
                if (t % 4 !== 0)
                    throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var e = 0; e < t; e += 4)
                    k(this, e, e + 3),
                    k(this, e + 1, e + 2);
                return this
            }
            ,
            c.prototype.swap64 = function() {
                var t = this.length;
                if (t % 8 !== 0)
                    throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var e = 0; e < t; e += 8)
                    k(this, e, e + 7),
                    k(this, e + 1, e + 6),
                    k(this, e + 2, e + 5),
                    k(this, e + 3, e + 4);
                return this
            }
            ,
            c.prototype.toString = function() {
                var t = 0 | this.length;
                return 0 === t ? "" : 0 === arguments.length ? D(this, 0, t) : b.apply(this, arguments)
            }
            ,
            c.prototype.equals = function(t) {
                if (!c.isBuffer(t))
                    throw new TypeError("Argument must be a Buffer");
                return this === t || 0 === c.compare(this, t)
            }
            ,
            c.prototype.inspect = function() {
                var t = ""
                  , n = e.INSPECT_MAX_BYTES;
                return this.length > 0 && (t = this.toString("hex", 0, n).match(/.{2}/g).join(" "),
                this.length > n && (t += " ... ")),
                "<Buffer " + t + ">"
            }
            ,
            c.prototype.compare = function(t, e, n, i, r) {
                if (!c.isBuffer(t))
                    throw new TypeError("Argument must be a Buffer");
                if (void 0 === e && (e = 0),
                void 0 === n && (n = t ? t.length : 0),
                void 0 === i && (i = 0),
                void 0 === r && (r = this.length),
                e < 0 || n > t.length || i < 0 || r > this.length)
                    throw new RangeError("out of range index");
                if (i >= r && e >= n)
                    return 0;
                if (i >= r)
                    return -1;
                if (e >= n)
                    return 1;
                if (e >>>= 0,
                n >>>= 0,
                i >>>= 0,
                r >>>= 0,
                this === t)
                    return 0;
                for (var o = r - i, s = n - e, a = Math.min(o, s), u = this.slice(i, r), l = t.slice(e, n), d = 0; d < a; ++d)
                    if (u[d] !== l[d]) {
                        o = u[d],
                        s = l[d];
                        break
                    }
                return o < s ? -1 : s < o ? 1 : 0
            }
            ,
            c.prototype.includes = function(t, e, n) {
                return -1 !== this.indexOf(t, e, n)
            }
            ,
            c.prototype.indexOf = function(t, e, n) {
                return A(this, t, e, n, !0)
            }
            ,
            c.prototype.lastIndexOf = function(t, e, n) {
                return A(this, t, e, n, !1)
            }
            ,
            c.prototype.write = function(t, e, n, i) {
                if (void 0 === e)
                    i = "utf8",
                    n = this.length,
                    e = 0;
                else if (void 0 === n && "string" === typeof e)
                    i = e,
                    n = this.length,
                    e = 0;
                else {
                    if (!isFinite(e))
                        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    e |= 0,
                    isFinite(n) ? (n |= 0,
                    void 0 === i && (i = "utf8")) : (i = n,
                    n = void 0)
                }
                var r = this.length - e;
                if ((void 0 === n || n > r) && (n = r),
                t.length > 0 && (n < 0 || e < 0) || e > this.length)
                    throw new RangeError("Attempt to write outside buffer bounds");
                i || (i = "utf8");
                for (var o = !1; ; )
                    switch (i) {
                    case "hex":
                        return S(this, t, e, n);
                    case "utf8":
                    case "utf-8":
                        return R(this, t, e, n);
                    case "ascii":
                        return T(this, t, e, n);
                    case "latin1":
                    case "binary":
                        return E(this, t, e, n);
                    case "base64":
                        return B(this, t, e, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return I(this, t, e, n);
                    default:
                        if (o)
                            throw new TypeError("Unknown encoding: " + i);
                        i = ("" + i).toLowerCase(),
                        o = !0
                    }
            }
            ,
            c.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            }
            ;
            var j = 4096;
            function P(t) {
                var e = t.length;
                if (e <= j)
                    return String.fromCharCode.apply(String, t);
                var n = ""
                  , i = 0;
                while (i < e)
                    n += String.fromCharCode.apply(String, t.slice(i, i += j));
                return n
            }
            function U(t, e, n) {
                var i = "";
                n = Math.min(t.length, n);
                for (var r = e; r < n; ++r)
                    i += String.fromCharCode(127 & t[r]);
                return i
            }
            function x(t, e, n) {
                var i = "";
                n = Math.min(t.length, n);
                for (var r = e; r < n; ++r)
                    i += String.fromCharCode(t[r]);
                return i
            }
            function L(t, e, n) {
                var i = t.length;
                (!e || e < 0) && (e = 0),
                (!n || n < 0 || n > i) && (n = i);
                for (var r = "", o = e; o < n; ++o)
                    r += V(t[o]);
                return r
            }
            function q(t, e, n) {
                for (var i = t.slice(e, n), r = "", o = 0; o < i.length; o += 2)
                    r += String.fromCharCode(i[o] + 256 * i[o + 1]);
                return r
            }
            function N(t, e, n) {
                if (t % 1 !== 0 || t < 0)
                    throw new RangeError("offset is not uint");
                if (t + e > n)
                    throw new RangeError("Trying to access beyond buffer length")
            }
            function $(t, e, n, i, r, o) {
                if (!c.isBuffer(t))
                    throw new TypeError('"buffer" argument must be a Buffer instance');
                if (e > r || e < o)
                    throw new RangeError('"value" argument is out of bounds');
                if (n + i > t.length)
                    throw new RangeError("Index out of range")
            }
            function F(t, e, n, i) {
                e < 0 && (e = 65535 + e + 1);
                for (var r = 0, o = Math.min(t.length - n, 2); r < o; ++r)
                    t[n + r] = (e & 255 << 8 * (i ? r : 1 - r)) >>> 8 * (i ? r : 1 - r)
            }
            function M(t, e, n, i) {
                e < 0 && (e = 4294967295 + e + 1);
                for (var r = 0, o = Math.min(t.length - n, 4); r < o; ++r)
                    t[n + r] = e >>> 8 * (i ? r : 3 - r) & 255
            }
            function H(t, e, n, i, r, o) {
                if (n + i > t.length)
                    throw new RangeError("Index out of range");
                if (n < 0)
                    throw new RangeError("Index out of range")
            }
            function z(t, e, n, i, o) {
                return o || H(t, e, n, 4, 34028234663852886e22, -34028234663852886e22),
                r.write(t, e, n, i, 23, 4),
                n + 4
            }
            function Y(t, e, n, i, o) {
                return o || H(t, e, n, 8, 17976931348623157e292, -17976931348623157e292),
                r.write(t, e, n, i, 52, 8),
                n + 8
            }
            c.prototype.slice = function(t, e) {
                var n, i = this.length;
                if (t = ~~t,
                e = void 0 === e ? i : ~~e,
                t < 0 ? (t += i,
                t < 0 && (t = 0)) : t > i && (t = i),
                e < 0 ? (e += i,
                e < 0 && (e = 0)) : e > i && (e = i),
                e < t && (e = t),
                c.TYPED_ARRAY_SUPPORT)
                    n = this.subarray(t, e),
                    n.__proto__ = c.prototype;
                else {
                    var r = e - t;
                    n = new c(r,void 0);
                    for (var o = 0; o < r; ++o)
                        n[o] = this[o + t]
                }
                return n
            }
            ,
            c.prototype.readUIntLE = function(t, e, n) {
                t |= 0,
                e |= 0,
                n || N(t, e, this.length);
                var i = this[t]
                  , r = 1
                  , o = 0;
                while (++o < e && (r *= 256))
                    i += this[t + o] * r;
                return i
            }
            ,
            c.prototype.readUIntBE = function(t, e, n) {
                t |= 0,
                e |= 0,
                n || N(t, e, this.length);
                var i = this[t + --e]
                  , r = 1;
                while (e > 0 && (r *= 256))
                    i += this[t + --e] * r;
                return i
            }
            ,
            c.prototype.readUInt8 = function(t, e) {
                return e || N(t, 1, this.length),
                this[t]
            }
            ,
            c.prototype.readUInt16LE = function(t, e) {
                return e || N(t, 2, this.length),
                this[t] | this[t + 1] << 8
            }
            ,
            c.prototype.readUInt16BE = function(t, e) {
                return e || N(t, 2, this.length),
                this[t] << 8 | this[t + 1]
            }
            ,
            c.prototype.readUInt32LE = function(t, e) {
                return e || N(t, 4, this.length),
                (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
            }
            ,
            c.prototype.readUInt32BE = function(t, e) {
                return e || N(t, 4, this.length),
                16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
            }
            ,
            c.prototype.readIntLE = function(t, e, n) {
                t |= 0,
                e |= 0,
                n || N(t, e, this.length);
                var i = this[t]
                  , r = 1
                  , o = 0;
                while (++o < e && (r *= 256))
                    i += this[t + o] * r;
                return r *= 128,
                i >= r && (i -= Math.pow(2, 8 * e)),
                i
            }
            ,
            c.prototype.readIntBE = function(t, e, n) {
                t |= 0,
                e |= 0,
                n || N(t, e, this.length);
                var i = e
                  , r = 1
                  , o = this[t + --i];
                while (i > 0 && (r *= 256))
                    o += this[t + --i] * r;
                return r *= 128,
                o >= r && (o -= Math.pow(2, 8 * e)),
                o
            }
            ,
            c.prototype.readInt8 = function(t, e) {
                return e || N(t, 1, this.length),
                128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
            }
            ,
            c.prototype.readInt16LE = function(t, e) {
                e || N(t, 2, this.length);
                var n = this[t] | this[t + 1] << 8;
                return 32768 & n ? 4294901760 | n : n
            }
            ,
            c.prototype.readInt16BE = function(t, e) {
                e || N(t, 2, this.length);
                var n = this[t + 1] | this[t] << 8;
                return 32768 & n ? 4294901760 | n : n
            }
            ,
            c.prototype.readInt32LE = function(t, e) {
                return e || N(t, 4, this.length),
                this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
            }
            ,
            c.prototype.readInt32BE = function(t, e) {
                return e || N(t, 4, this.length),
                this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
            }
            ,
            c.prototype.readFloatLE = function(t, e) {
                return e || N(t, 4, this.length),
                r.read(this, t, !0, 23, 4)
            }
            ,
            c.prototype.readFloatBE = function(t, e) {
                return e || N(t, 4, this.length),
                r.read(this, t, !1, 23, 4)
            }
            ,
            c.prototype.readDoubleLE = function(t, e) {
                return e || N(t, 8, this.length),
                r.read(this, t, !0, 52, 8)
            }
            ,
            c.prototype.readDoubleBE = function(t, e) {
                return e || N(t, 8, this.length),
                r.read(this, t, !1, 52, 8)
            }
            ,
            c.prototype.writeUIntLE = function(t, e, n, i) {
                if (t = +t,
                e |= 0,
                n |= 0,
                !i) {
                    var r = Math.pow(2, 8 * n) - 1;
                    $(this, t, e, n, r, 0)
                }
                var o = 1
                  , s = 0;
                this[e] = 255 & t;
                while (++s < n && (o *= 256))
                    this[e + s] = t / o & 255;
                return e + n
            }
            ,
            c.prototype.writeUIntBE = function(t, e, n, i) {
                if (t = +t,
                e |= 0,
                n |= 0,
                !i) {
                    var r = Math.pow(2, 8 * n) - 1;
                    $(this, t, e, n, r, 0)
                }
                var o = n - 1
                  , s = 1;
                this[e + o] = 255 & t;
                while (--o >= 0 && (s *= 256))
                    this[e + o] = t / s & 255;
                return e + n
            }
            ,
            c.prototype.writeUInt8 = function(t, e, n) {
                return t = +t,
                e |= 0,
                n || $(this, t, e, 1, 255, 0),
                c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
                this[e] = 255 & t,
                e + 1
            }
            ,
            c.prototype.writeUInt16LE = function(t, e, n) {
                return t = +t,
                e |= 0,
                n || $(this, t, e, 2, 65535, 0),
                c.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t,
                this[e + 1] = t >>> 8) : F(this, t, e, !0),
                e + 2
            }
            ,
            c.prototype.writeUInt16BE = function(t, e, n) {
                return t = +t,
                e |= 0,
                n || $(this, t, e, 2, 65535, 0),
                c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8,
                this[e + 1] = 255 & t) : F(this, t, e, !1),
                e + 2
            }
            ,
            c.prototype.writeUInt32LE = function(t, e, n) {
                return t = +t,
                e |= 0,
                n || $(this, t, e, 4, 4294967295, 0),
                c.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24,
                this[e + 2] = t >>> 16,
                this[e + 1] = t >>> 8,
                this[e] = 255 & t) : M(this, t, e, !0),
                e + 4
            }
            ,
            c.prototype.writeUInt32BE = function(t, e, n) {
                return t = +t,
                e |= 0,
                n || $(this, t, e, 4, 4294967295, 0),
                c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24,
                this[e + 1] = t >>> 16,
                this[e + 2] = t >>> 8,
                this[e + 3] = 255 & t) : M(this, t, e, !1),
                e + 4
            }
            ,
            c.prototype.writeIntLE = function(t, e, n, i) {
                if (t = +t,
                e |= 0,
                !i) {
                    var r = Math.pow(2, 8 * n - 1);
                    $(this, t, e, n, r - 1, -r)
                }
                var o = 0
                  , s = 1
                  , a = 0;
                this[e] = 255 & t;
                while (++o < n && (s *= 256))
                    t < 0 && 0 === a && 0 !== this[e + o - 1] && (a = 1),
                    this[e + o] = (t / s >> 0) - a & 255;
                return e + n
            }
            ,
            c.prototype.writeIntBE = function(t, e, n, i) {
                if (t = +t,
                e |= 0,
                !i) {
                    var r = Math.pow(2, 8 * n - 1);
                    $(this, t, e, n, r - 1, -r)
                }
                var o = n - 1
                  , s = 1
                  , a = 0;
                this[e + o] = 255 & t;
                while (--o >= 0 && (s *= 256))
                    t < 0 && 0 === a && 0 !== this[e + o + 1] && (a = 1),
                    this[e + o] = (t / s >> 0) - a & 255;
                return e + n
            }
            ,
            c.prototype.writeInt8 = function(t, e, n) {
                return t = +t,
                e |= 0,
                n || $(this, t, e, 1, 127, -128),
                c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
                t < 0 && (t = 255 + t + 1),
                this[e] = 255 & t,
                e + 1
            }
            ,
            c.prototype.writeInt16LE = function(t, e, n) {
                return t = +t,
                e |= 0,
                n || $(this, t, e, 2, 32767, -32768),
                c.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t,
                this[e + 1] = t >>> 8) : F(this, t, e, !0),
                e + 2
            }
            ,
            c.prototype.writeInt16BE = function(t, e, n) {
                return t = +t,
                e |= 0,
                n || $(this, t, e, 2, 32767, -32768),
                c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8,
                this[e + 1] = 255 & t) : F(this, t, e, !1),
                e + 2
            }
            ,
            c.prototype.writeInt32LE = function(t, e, n) {
                return t = +t,
                e |= 0,
                n || $(this, t, e, 4, 2147483647, -2147483648),
                c.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t,
                this[e + 1] = t >>> 8,
                this[e + 2] = t >>> 16,
                this[e + 3] = t >>> 24) : M(this, t, e, !0),
                e + 4
            }
            ,
            c.prototype.writeInt32BE = function(t, e, n) {
                return t = +t,
                e |= 0,
                n || $(this, t, e, 4, 2147483647, -2147483648),
                t < 0 && (t = 4294967295 + t + 1),
                c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24,
                this[e + 1] = t >>> 16,
                this[e + 2] = t >>> 8,
                this[e + 3] = 255 & t) : M(this, t, e, !1),
                e + 4
            }
            ,
            c.prototype.writeFloatLE = function(t, e, n) {
                return z(this, t, e, !0, n)
            }
            ,
            c.prototype.writeFloatBE = function(t, e, n) {
                return z(this, t, e, !1, n)
            }
            ,
            c.prototype.writeDoubleLE = function(t, e, n) {
                return Y(this, t, e, !0, n)
            }
            ,
            c.prototype.writeDoubleBE = function(t, e, n) {
                return Y(this, t, e, !1, n)
            }
            ,
            c.prototype.copy = function(t, e, n, i) {
                if (n || (n = 0),
                i || 0 === i || (i = this.length),
                e >= t.length && (e = t.length),
                e || (e = 0),
                i > 0 && i < n && (i = n),
                i === n)
                    return 0;
                if (0 === t.length || 0 === this.length)
                    return 0;
                if (e < 0)
                    throw new RangeError("targetStart out of bounds");
                if (n < 0 || n >= this.length)
                    throw new RangeError("sourceStart out of bounds");
                if (i < 0)
                    throw new RangeError("sourceEnd out of bounds");
                i > this.length && (i = this.length),
                t.length - e < i - n && (i = t.length - e + n);
                var r, o = i - n;
                if (this === t && n < e && e < i)
                    for (r = o - 1; r >= 0; --r)
                        t[r + e] = this[r + n];
                else if (o < 1e3 || !c.TYPED_ARRAY_SUPPORT)
                    for (r = 0; r < o; ++r)
                        t[r + e] = this[r + n];
                else
                    Uint8Array.prototype.set.call(t, this.subarray(n, n + o), e);
                return o
            }
            ,
            c.prototype.fill = function(t, e, n, i) {
                if ("string" === typeof t) {
                    if ("string" === typeof e ? (i = e,
                    e = 0,
                    n = this.length) : "string" === typeof n && (i = n,
                    n = this.length),
                    1 === t.length) {
                        var r = t.charCodeAt(0);
                        r < 256 && (t = r)
                    }
                    if (void 0 !== i && "string" !== typeof i)
                        throw new TypeError("encoding must be a string");
                    if ("string" === typeof i && !c.isEncoding(i))
                        throw new TypeError("Unknown encoding: " + i)
                } else
                    "number" === typeof t && (t &= 255);
                if (e < 0 || this.length < e || this.length < n)
                    throw new RangeError("Out of range index");
                if (n <= e)
                    return this;
                var o;
                if (e >>>= 0,
                n = void 0 === n ? this.length : n >>> 0,
                t || (t = 0),
                "number" === typeof t)
                    for (o = e; o < n; ++o)
                        this[o] = t;
                else {
                    var s = c.isBuffer(t) ? t : G(new c(t,i).toString())
                      , a = s.length;
                    for (o = 0; o < n - e; ++o)
                        this[o + e] = s[o % a]
                }
                return this
            }
            ;
            var Q = /[^+\/0-9A-Za-z-_]/g;
            function K(t) {
                if (t = J(t).replace(Q, ""),
                t.length < 2)
                    return "";
                while (t.length % 4 !== 0)
                    t += "=";
                return t
            }
            function J(t) {
                return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
            }
            function V(t) {
                return t < 16 ? "0" + t.toString(16) : t.toString(16)
            }
            function G(t, e) {
                var n;
                e = e || 1 / 0;
                for (var i = t.length, r = null, o = [], s = 0; s < i; ++s) {
                    if (n = t.charCodeAt(s),
                    n > 55295 && n < 57344) {
                        if (!r) {
                            if (n > 56319) {
                                (e -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            if (s + 1 === i) {
                                (e -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            r = n;
                            continue
                        }
                        if (n < 56320) {
                            (e -= 3) > -1 && o.push(239, 191, 189),
                            r = n;
                            continue
                        }
                        n = 65536 + (r - 55296 << 10 | n - 56320)
                    } else
                        r && (e -= 3) > -1 && o.push(239, 191, 189);
                    if (r = null,
                    n < 128) {
                        if ((e -= 1) < 0)
                            break;
                        o.push(n)
                    } else if (n < 2048) {
                        if ((e -= 2) < 0)
                            break;
                        o.push(n >> 6 | 192, 63 & n | 128)
                    } else if (n < 65536) {
                        if ((e -= 3) < 0)
                            break;
                        o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                    } else {
                        if (!(n < 1114112))
                            throw new Error("Invalid code point");
                        if ((e -= 4) < 0)
                            break;
                        o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                    }
                }
                return o
            }
            function W(t) {
                for (var e = [], n = 0; n < t.length; ++n)
                    e.push(255 & t.charCodeAt(n));
                return e
            }
            function X(t, e) {
                for (var n, i, r, o = [], s = 0; s < t.length; ++s) {
                    if ((e -= 2) < 0)
                        break;
                    n = t.charCodeAt(s),
                    i = n >> 8,
                    r = n % 256,
                    o.push(r),
                    o.push(i)
                }
                return o
            }
            function Z(t) {
                return i.toByteArray(K(t))
            }
            function tt(t, e, n, i) {
                for (var r = 0; r < i; ++r) {
                    if (r + n >= e.length || r >= t.length)
                        break;
                    e[r + n] = t[r]
                }
                return r
            }
            function et(t) {
                return t !== t
            }
        }
        ).call(this, n("c8ba"))
    },
    b64b: function(t, e, n) {
        var i = n("23e7")
          , r = n("7b0b")
          , o = n("df75")
          , s = n("d039")
          , a = s((function() {
            o(1)
        }
        ));
        i({
            target: "Object",
            stat: !0,
            forced: a
        }, {
            keys: function(t) {
                return o(r(t))
            }
        })
    },
    b68a: function(t, e, n) {
        "use strict";
        t.exports = function(t) {
            var e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
            return e && e[1] || ""
        }
    },
    b7d4: function(t, e, n) {
        "use strict";
        (function(t) {
            n.d(e, "a", (function() {
                return u
            }
            )),
            n.d(e, "b", (function() {
                return c
            }
            ));
            n("acd8"),
            n("99af"),
            n("4de4");
            var i = n("271c")
              , r = n("b284")
              , o = {
                prod: "https://htstore.htsec.com:8082/api",
                prodCommunity: "https://community.htsec.com/cmapi"
            }
              , s = {
                prodProductCode: {
                    pzb: "P202106110005",
                    tuoshui: "P1118",
                    1: "P202106110005",
                    10: "P1118"
                }
            };
            function a(t) {
                var e = "";
                "toutiao" === Object(i["d"])().newsType || "stocknews" === Object(i["d"])().newsType ? e = "optionNewsInfo" : "stockann" === Object(i["d"])().newsType && (e = "optionAnnsInfo");
                var n = null !== Object(i["d"])().secuAbbr && void 0 !== Object(i["d"])().secuAbbr && "undefined" !== Object(i["d"])().secuAbbr && Object(i["d"])().secuAbbr ? Object(i["d"])().secuAbbr : " ";
                if (!r["a"].isIos && parseFloat(Object(i["d"])().version) <= 8) {
                    var o = "@redirect=" + e + "&typecode=1&title=" + t + "&url=" + encodeURIComponent(window.location.href) + "&secuAbbr= &id=" + Object(i["d"])().id;
                    return o
                }
                var s = "@redirect=" + e + "&typecode=1&title=" + t + "&url=" + encodeURIComponent(window.location.href) + "&secuAbbr=" + n + "&id=" + Object(i["d"])().id;
                return s
            }
            var u = {
                login: function(e) {
                    t.ajax({
                        type: "GET",
                        url: "".concat(o.prod, "/emall/login/login?account_content=").concat(e.accountId, "&account_type=Z&login_token=").concat(e.token),
                        dataType: "json",
                        timeout: 15e3,
                        success: function(t) {
                            var n = t && t.res_map && t.res_map.token ? t.res_map.token : "";
                            e && e.callBackFun({
                                tokenStr: n
                            })
                        },
                        error: function(t) {
                            console.log(t)
                        }
                    })
                },
                getQryUserEquity: function(e) {
                    t.ajax({
                        type: "GET",
                        url: "".concat(o.prod, "/emall/login/login?account_content=").concat(e.accountId, "&account_type=Z&login_token=").concat(e.token),
                        dataType: "json",
                        timeout: 15e3,
                        success: function(n) {
                            var r = n && n.res_map && n.res_map.token ? n.res_map.token : "";
                            t.ajax({
                                type: "GET",
                                url: "".concat(o.prod, "/emall/uquity/qryUserEquity?token=").concat(r, "&equity_id=").concat(e.accountId, "&mac=").concat(e.token, "&is_single_article=0&query_type=2"),
                                dataType: "json",
                                timeout: 15e3,
                                success: function(n) {
                                    n && n.list && 0 === n.list.length ? (t(".qryUserEquity").show(),
                                    t(".qryUserEquity .right-btn").on("click", (function(e) {
                                        window.isQryUserEquity = 1,
                                        e.stopPropagation();
                                        var n = "https://account.htsec.com:444/account/dist2/index.html#/members/privilege?rightId=59&openForm=news";
                                        window.location.href = "ehtsec://funid=10088&communityLogin=1&navigationBarHidden=1&path=" + encodeURIComponent(n),
                                        t(".qryUserEquity").hide()
                                    }
                                    )),
                                    t(".qryUserEquity .left-btn").on("click", (function(n) {
                                        if (window.isQryUserEquity = 1,
                                        n.stopPropagation(),
                                        "singleApplyBtn" === e.loginType) {
                                            var r = "https://htstore.htsec.com/emall/#/order-confirm?out_pid=P202106110005&supplier_code=local&article_id=" + (Object(i["d"])().id ? Object(i["d"])().id : "") + "&article_title=" + (window.title ? encodeURIComponent(encodeURIComponent(window.title)) : "");
                                            window.location.href = "ehtsec://funid=10088&communityLogin=1&navigationBarHidden=1&path=" + encodeURIComponent(r)
                                        } else if ("relatedStocksLiBtn" === e.loginType) {
                                            var o = "https://htstore.htsec.com/emall/#/order-confirm?out_pid=P202106110005&supplier_code=local&article_id=" + (window.info.id ? window.info.id : "") + "&article_title=" + (window.info.title ? encodeURIComponent(encodeURIComponent(window.info.title)) : "");
                                            window.location.href = "ehtsec://funid=10088&communityLogin=1&navigationBarHidden=1&path=" + encodeURIComponent(o)
                                        } else if ("applyBtn" === e.loginType) {
                                            var s = "https://htstore.htsec.com/emall/#/order-confirm?out_pid=P202106110005&supplier_code=local&sku_id=";
                                            window.location.href = "ehtsec://funid=10088&communityLogin=1&navigationBarHidden=1&path=" + encodeURIComponent(s)
                                        }
                                        t(".qryUserEquity").hide()
                                    }
                                    ))) : (t(".qryUserEquity").hide(),
                                    window.isQryUserEquity = "")
                                },
                                error: function(e) {
                                    t(".qryUserEquity").hide(),
                                    window.isQryUserEquity = ""
                                }
                            })
                        },
                        error: function(t) {
                            console.log(t)
                        }
                    })
                },
                getViewList4News: function(e) {
                    var n = {
                        pzb: "pzdj",
                        tuoshui: "tsyb",
                        1: "pzdj",
                        10: "tsyb"
                    }
                      , r = {
                        accountId: e.accountId || "",
                        token: e.token || "",
                        newsId: Object(i["d"])().id || "",
                        linkUrl: window.location.href,
                        title: e.title || "",
                        urlForClient: a(e.title) || "",
                        typeCode: n[Object(i["d"])().type] || "pzdj",
                        outCreatedDate: e.date || ""
                    };
                    t.ajax({
                        type: "POST",
                        url: "".concat(o.prodCommunity, "/getViewList4News.json"),
                        dataType: "json",
                        timeout: 15e3,
                        data: r,
                        success: function(e) {
                            if (e && "0" === e.error_no) {
                                var n = e && e.resultMap && e.resultMap.readCount;
                                n && "0" !== n && t(".readNum span").html('<i class="fontFamily">' + n + "</i>阅读")
                            }
                        },
                        error: function(t) {
                            console.log(t)
                        }
                    })
                },
                getPhaseSelectList: function(e) {
                    var n = {
                        pzb: "".concat(o.prodCommunity, "/CRH_CM9050.json"),
                        tuoshui: "".concat(o.prodCommunity, "/CRH_CM9051.json?typeCode=tsyb"),
                        1: "".concat(o.prodCommunity, "/CRH_CM9050.json"),
                        10: "".concat(o.prodCommunity, "/CRH_CM9051.json?typeCode=tsyb")
                    };
                    t.ajax({
                        type: "POST",
                        url: n[Object(i["d"])().type ? Object(i["d"])().type : "pzb"],
                        dataType: "json",
                        timeout: 15e3,
                        success: function(t) {
                            if (t && t.resultList && t.resultList.length > 0) {
                                var n = t.resultList;
                                e && e(n)
                            } else
                                e && e([])
                        },
                        error: function(t) {
                            e && e([])
                        }
                    })
                },
                getArticle: function(e, n) {
                    var r = "https://unifygateway.htsec.com/user-audit/query/article.json"
                      , o = {
                        pzb: "1114",
                        tuoshui: "1117",
                        1: "1114",
                        10: "1117"
                    };
                    t.ajax({
                        type: "POST",
                        url: r,
                        data: JSON.stringify({
                            account: e.accountId,
                            equityCode: o[Object(i["d"])().type ? Object(i["d"])().type : "pzb"],
                            deviceinfo: "",
                            requestor: "newsCenter"
                        }),
                        dataType: "json",
                        timeout: 15e3,
                        async: !1,
                        contentType: "application/json",
                        success: function(t) {
                            if (t && t.jsonMessage && t.jsonMessage.equity && t.jsonMessage.equity.length > 0) {
                                var e = t.jsonMessage.equity.filter((function(t) {
                                    return t.equityCode === o[Object(i["d"])().type ? Object(i["d"])().type : "pzb"] && "" !== t.articleId
                                }
                                ));
                                n && n(e)
                            } else
                                n && n([])
                        },
                        error: function(t) {
                            n && n([])
                        }
                    })
                }
            }
              , c = {
                getEmallList: function(e) {
                    t.ajax({
                        type: "GET",
                        url: "".concat(o.prod, "/emall/products/getEmallProductDetail?product_code=").concat(s.prodProductCode[Object(i["d"])().type ? Object(i["d"])().type : "pzb"], "&is_contain_single_article=1&supplier_code=local").concat(e.tokenStr ? "&token=" + e.tokenStr : ""),
                        dataType: "json",
                        timeout: 15e3,
                        success: function(t) {
                            t && "0" === t.error_no && e.callBackFun && e.callBackFun(t && t.res_map)
                        },
                        error: function(t) {
                            e.callBackFun && e.callBackFun({})
                        }
                    })
                },
                communityToken: function(e) {
                    t.ajax({
                        type: "POST",
                        url: "".concat(o.prod, "/coupon/user/prod_available_code_nums.json"),
                        data: {
                            token: e.tokenStr ? e.tokenStr : "",
                            submit_params: JSON.stringify({
                                EXTSYSTEM_ID: 71,
                                PROD_ID: s.prodProductCode[Object(i["d"])().type ? Object(i["d"])().type : "pzb"],
                                SKU_ID: e.skuId
                            })
                        },
                        dataType: "json",
                        timeout: 15e3,
                        headers: {
                            token: e.tokenStr ? e.tokenStr : "",
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        success: function(t) {
                            e.callBackFun && e.callBackFun(t)
                        },
                        error: function(t) {
                            e.callBackFun && e.callBackFun(t)
                        }
                    })
                }
            }
        }
        ).call(this, n("1157"))
    },
    b85c: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return r
        }
        ));
        n("a4d3"),
        n("e01a"),
        n("d3b7"),
        n("d28b"),
        n("3ca3"),
        n("ddb0"),
        n("277d");
        var i = n("06c5");
        function r(t, e) {
            var n = "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = Object(i["a"])(t)) || e && t && "number" === typeof t.length) {
                    n && (t = n);
                    var r = 0
                      , o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return r >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[r++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var s, a = !0, u = !1;
            return {
                s: function() {
                    n = n.call(t)
                },
                n: function() {
                    var t = n.next();
                    return a = t.done,
                    t
                },
                e: function(t) {
                    u = !0,
                    s = t
                },
                f: function() {
                    try {
                        a || null == n["return"] || n["return"]()
                    } finally {
                        if (u)
                            throw s
                    }
                }
            }
        }
    },
    bc3a: function(t, e, n) {
        t.exports = n("cee4")
    },
    c15a: function(t, e, n) {
        "use strict";
        n("5bac")
    },
    c345: function(t, e, n) {
        "use strict";
        var i = n("c532")
          , r = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
        t.exports = function(t) {
            var e, n, o, s = {};
            return t ? (i.forEach(t.split("\n"), (function(t) {
                if (o = t.indexOf(":"),
                e = i.trim(t.substr(0, o)).toLowerCase(),
                n = i.trim(t.substr(o + 1)),
                e) {
                    if (s[e] && r.indexOf(e) >= 0)
                        return;
                    s[e] = "set-cookie" === e ? (s[e] ? s[e] : []).concat([n]) : s[e] ? s[e] + ", " + n : n
                }
            }
            )),
            s) : s
        }
    },
    c401: function(t, e, n) {
        "use strict";
        var i = n("c532")
          , r = n("4c3d");
        t.exports = function(t, e, n) {
            var o = this || r;
            return i.forEach(n, (function(n) {
                t = n.call(o, t, e)
            }
            )),
            t
        }
    },
    c532: function(t, e, n) {
        "use strict";
        var i = n("1d2b")
          , r = Object.prototype.toString
          , o = function(t) {
            return function(e) {
                var n = r.call(e);
                return t[n] || (t[n] = n.slice(8, -1).toLowerCase())
            }
        }(Object.create(null));
        function s(t) {
            return t = t.toLowerCase(),
            function(e) {
                return o(e) === t
            }
        }
        function a(t) {
            return Array.isArray(t)
        }
        function u(t) {
            return "undefined" === typeof t
        }
        function c(t) {
            return null !== t && !u(t) && null !== t.constructor && !u(t.constructor) && "function" === typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
        }
        var l = s("ArrayBuffer");
        function d(t) {
            var e;
            return e = "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && l(t.buffer),
            e
        }
        function f(t) {
            return "string" === typeof t
        }
        function p(t) {
            return "number" === typeof t
        }
        function h(t) {
            return null !== t && "object" === typeof t
        }
        function m(t) {
            if ("object" !== o(t))
                return !1;
            var e = Object.getPrototypeOf(t);
            return null === e || e === Object.prototype
        }
        var y = s("Date")
          , g = s("File")
          , _ = s("Blob")
          , v = s("FileList");
        function w(t) {
            return "[object Function]" === r.call(t)
        }
        function b(t) {
            return h(t) && w(t.pipe)
        }
        function k(t) {
            var e = "[object FormData]";
            return t && ("function" === typeof FormData && t instanceof FormData || r.call(t) === e || w(t.toString) && t.toString() === e)
        }
        var A = s("URLSearchParams");
        function C(t) {
            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
        }
        function S() {
            return ("undefined" === typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" !== typeof window && "undefined" !== typeof document)
        }
        function R(t, e) {
            if (null !== t && "undefined" !== typeof t)
                if ("object" !== typeof t && (t = [t]),
                a(t))
                    for (var n = 0, i = t.length; n < i; n++)
                        e.call(null, t[n], n, t);
                else
                    for (var r in t)
                        Object.prototype.hasOwnProperty.call(t, r) && e.call(null, t[r], r, t)
        }
        function T() {
            var t = {};
            function e(e, n) {
                m(t[n]) && m(e) ? t[n] = T(t[n], e) : m(e) ? t[n] = T({}, e) : a(e) ? t[n] = e.slice() : t[n] = e
            }
            for (var n = 0, i = arguments.length; n < i; n++)
                R(arguments[n], e);
            return t
        }
        function E(t, e, n) {
            return R(e, (function(e, r) {
                t[r] = n && "function" === typeof e ? i(e, n) : e
            }
            )),
            t
        }
        function B(t) {
            return 65279 === t.charCodeAt(0) && (t = t.slice(1)),
            t
        }
        function I(t, e, n, i) {
            t.prototype = Object.create(e.prototype, i),
            t.prototype.constructor = t,
            n && Object.assign(t.prototype, n)
        }
        function O(t, e, n) {
            var i, r, o, s = {};
            e = e || {};
            do {
                i = Object.getOwnPropertyNames(t),
                r = i.length;
                while (r-- > 0)
                    o = i[r],
                    s[o] || (e[o] = t[o],
                    s[o] = !0);
                t = Object.getPrototypeOf(t)
            } while (t && (!n || n(t, e)) && t !== Object.prototype);
            return e
        }
        function D(t, e, n) {
            t = String(t),
            (void 0 === n || n > t.length) && (n = t.length),
            n -= e.length;
            var i = t.indexOf(e, n);
            return -1 !== i && i === n
        }
        function j(t) {
            if (!t)
                return null;
            var e = t.length;
            if (u(e))
                return null;
            var n = new Array(e);
            while (e-- > 0)
                n[e] = t[e];
            return n
        }
        var P = function(t) {
            return function(e) {
                return t && e instanceof t
            }
        }("undefined" !== typeof Uint8Array && Object.getPrototypeOf(Uint8Array));
        t.exports = {
            isArray: a,
            isArrayBuffer: l,
            isBuffer: c,
            isFormData: k,
            isArrayBufferView: d,
            isString: f,
            isNumber: p,
            isObject: h,
            isPlainObject: m,
            isUndefined: u,
            isDate: y,
            isFile: g,
            isBlob: _,
            isFunction: w,
            isStream: b,
            isURLSearchParams: A,
            isStandardBrowserEnv: S,
            forEach: R,
            merge: T,
            extend: E,
            trim: C,
            stripBOM: B,
            inherits: I,
            toFlatObject: O,
            kindOf: o,
            kindOfTest: s,
            endsWith: D,
            toArray: j,
            isTypedArray: P,
            isFileList: v
        }
    },
    c885: function(t, e, n) {
        "use strict";
        (function(t) {
            n("4de4"),
            n("99af");
            e["a"] = {
                name: "AppyForModule",
                data: function() {
                    return {
                        sku_list: [],
                        singleSkuList: [],
                        isShowSkuList: !1,
                        sell_price: "",
                        market_price: "",
                        currentSkuId: "",
                        currentSkuList: [],
                        vipNewsType: {
                            pzb: {
                                title: "盘中宝"
                            },
                            tuoshui: {
                                title: "脱水研报"
                            },
                            1: {
                                title: "盘中宝"
                            },
                            10: {
                                title: "脱水研报"
                            }
                        },
                        commonApiUrl: {
                            testHtmlUrl: "http://120.86.70.45:8082",
                            prodHtmlUrl: "https://account.htsec.com:444"
                        }
                    }
                },
                props: ["emallProductDetail", "appCommunityInfo", "goToColumnOrderPage", "isShoApplyFor", "isShowDiscountCoupon"],
                components: {},
                methods: {
                    setEmallProductDetail: function(e) {
                        var n = this
                          , i = e && e.sku_list ? e.sku_list : [];
                        if (this.sku_list = i.filter((function(t) {
                            return "4" !== t.sku_unit
                        }
                        )),
                        this.sku_list.length > 0)
                            for (var r = function(e) {
                                n.sku_list[e].sku_price_list = n.sku_list[e].sku_price_list && n.sku_list[e].sku_price_list && n.sku_list[e].sku_price_list.length > 0 && n.sku_list[e].sku_price_list.filter((function(t) {
                                    return n.appCommunityInfo.token && n.sku_list[e].sku_price_list && n.sku_list[e].sku_price_list.length > 1 ? "1" === t.price_type : "0" === t.price_type
                                }
                                )),
                                "1" === n.sku_list[e].is_default && (n.currentSkuId = n.sku_list[e].sku_id,
                                t(".immediate-apply-btn").attr("data-skuid", n.sku_list[e].sku_id))
                            }, o = 0; o < this.sku_list.length; o++)
                                r(o)
                    },
                    selectedClickFunc: function() {
                        this.isShowSkuList = !this.isShowSkuList,
                        this.$emit("setEmallProductStatus", this.isShowSkuList)
                    },
                    choseSelectList: function(e) {
                        this.currentSkuId = e,
                        this.currentSkuList = this.sku_list.filter((function(t) {
                            return t.sku_id === e
                        }
                        ));
                        for (var n = 0; n < this.sku_list.length; n++)
                            this.sku_list[n].sku_id === e ? this.sku_list[n].is_default = "1" : this.sku_list[n].is_default = "0";
                        t(".immediate-apply-btn").attr("data-skuid", e)
                    },
                    closeSelectList: function() {
                        this.isShowSkuList = !1,
                        this.$emit("setEmallProductStatus", this.isShowSkuList)
                    },
                    childGoToColumnOrderPage: function() {
                        this.$emit("goToColumnOrderPage", "columnBtn")
                    },
                    bindingAccountClick: function() {
                        var t = "".concat(commonApiUrl.prodHtmlUrl, "/account/dist/view/sqLogin1/index.html?channelId=100&modType=auth&functionName=auth001&accountId=").concat(commentAccountId, "&token=").concat(commentToken, "#&setAuthMethod");
                        window.location.href = "ehtsec://funid=10088&communityLogin=1&navigationBarHidden=1&path=" + encodeURIComponent(t)
                    }
                },
                mounted: function() {
                    this.setEmallProductDetail(this.emallProductDetail)
                },
                watch: {
                    emallProductDetail: {
                        handler: function(t) {
                            this.setEmallProductDetail(t)
                        }
                    }
                }
            }
        }
        ).call(this, n("1157"))
    },
    c8af: function(t, e, n) {
        "use strict";
        var i = n("c532");
        t.exports = function(t, e) {
            i.forEach(t, (function(n, i) {
                i !== e && i.toUpperCase() === e.toUpperCase() && (t[e] = n,
                delete t[i])
            }
            ))
        }
    },
    cafa: function(t, e, n) {
        "use strict";
        t.exports = {
            silentJSONParsing: !0,
            forcedJSONParsing: !0,
            clarifyTimeoutError: !1
        }
    },
    cee4: function(t, e, n) {
        "use strict";
        var i = n("c532")
          , r = n("1d2b")
          , o = n("0a06")
          , s = n("4a7b")
          , a = n("4c3d");
        function u(t) {
            var e = new o(t)
              , n = r(o.prototype.request, e);
            return i.extend(n, o.prototype, e),
            i.extend(n, e),
            n.create = function(e) {
                return u(s(t, e))
            }
            ,
            n
        }
        var c = u(a);
        c.Axios = o,
        c.CanceledError = n("fb60"),
        c.CancelToken = n("8df4"),
        c.isCancel = n("2e67"),
        c.VERSION = n("5cce").version,
        c.toFormData = n("e467"),
        c.AxiosError = n("7917"),
        c.Cancel = c.CanceledError,
        c.all = function(t) {
            return Promise.all(t)
        }
        ,
        c.spread = n("0df6"),
        c.isAxiosError = n("5f02"),
        t.exports = c,
        t.exports.default = c
    },
    d28b: function(t, e, n) {
        var i = n("746f");
        i("iterator")
    },
    d81d: function(t, e, n) {
        "use strict";
        var i = n("23e7")
          , r = n("b727").map
          , o = n("1dde")
          , s = o("map");
        i({
            target: "Array",
            proto: !0,
            forced: !s
        }, {
            map: function(t) {
                return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    },
    d925: function(t, e, n) {
        "use strict";
        t.exports = function(t) {
            return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
        }
    },
    df7c: function(t, e, n) {
        (function(t) {
            function n(t, e) {
                for (var n = 0, i = t.length - 1; i >= 0; i--) {
                    var r = t[i];
                    "." === r ? t.splice(i, 1) : ".." === r ? (t.splice(i, 1),
                    n++) : n && (t.splice(i, 1),
                    n--)
                }
                if (e)
                    for (; n--; n)
                        t.unshift("..");
                return t
            }
            function i(t) {
                "string" !== typeof t && (t += "");
                var e, n = 0, i = -1, r = !0;
                for (e = t.length - 1; e >= 0; --e)
                    if (47 === t.charCodeAt(e)) {
                        if (!r) {
                            n = e + 1;
                            break
                        }
                    } else
                        -1 === i && (r = !1,
                        i = e + 1);
                return -1 === i ? "" : t.slice(n, i)
            }
            function r(t, e) {
                if (t.filter)
                    return t.filter(e);
                for (var n = [], i = 0; i < t.length; i++)
                    e(t[i], i, t) && n.push(t[i]);
                return n
            }
            e.resolve = function() {
                for (var e = "", i = !1, o = arguments.length - 1; o >= -1 && !i; o--) {
                    var s = o >= 0 ? arguments[o] : t.cwd();
                    if ("string" !== typeof s)
                        throw new TypeError("Arguments to path.resolve must be strings");
                    s && (e = s + "/" + e,
                    i = "/" === s.charAt(0))
                }
                return e = n(r(e.split("/"), (function(t) {
                    return !!t
                }
                )), !i).join("/"),
                (i ? "/" : "") + e || "."
            }
            ,
            e.normalize = function(t) {
                var i = e.isAbsolute(t)
                  , s = "/" === o(t, -1);
                return t = n(r(t.split("/"), (function(t) {
                    return !!t
                }
                )), !i).join("/"),
                t || i || (t = "."),
                t && s && (t += "/"),
                (i ? "/" : "") + t
            }
            ,
            e.isAbsolute = function(t) {
                return "/" === t.charAt(0)
            }
            ,
            e.join = function() {
                var t = Array.prototype.slice.call(arguments, 0);
                return e.normalize(r(t, (function(t, e) {
                    if ("string" !== typeof t)
                        throw new TypeError("Arguments to path.join must be strings");
                    return t
                }
                )).join("/"))
            }
            ,
            e.relative = function(t, n) {
                function i(t) {
                    for (var e = 0; e < t.length; e++)
                        if ("" !== t[e])
                            break;
                    for (var n = t.length - 1; n >= 0; n--)
                        if ("" !== t[n])
                            break;
                    return e > n ? [] : t.slice(e, n - e + 1)
                }
                t = e.resolve(t).substr(1),
                n = e.resolve(n).substr(1);
                for (var r = i(t.split("/")), o = i(n.split("/")), s = Math.min(r.length, o.length), a = s, u = 0; u < s; u++)
                    if (r[u] !== o[u]) {
                        a = u;
                        break
                    }
                var c = [];
                for (u = a; u < r.length; u++)
                    c.push("..");
                return c = c.concat(o.slice(a)),
                c.join("/")
            }
            ,
            e.sep = "/",
            e.delimiter = ":",
            e.dirname = function(t) {
                if ("string" !== typeof t && (t += ""),
                0 === t.length)
                    return ".";
                for (var e = t.charCodeAt(0), n = 47 === e, i = -1, r = !0, o = t.length - 1; o >= 1; --o)
                    if (e = t.charCodeAt(o),
                    47 === e) {
                        if (!r) {
                            i = o;
                            break
                        }
                    } else
                        r = !1;
                return -1 === i ? n ? "/" : "." : n && 1 === i ? "/" : t.slice(0, i)
            }
            ,
            e.basename = function(t, e) {
                var n = i(t);
                return e && n.substr(-1 * e.length) === e && (n = n.substr(0, n.length - e.length)),
                n
            }
            ,
            e.extname = function(t) {
                "string" !== typeof t && (t += "");
                for (var e = -1, n = 0, i = -1, r = !0, o = 0, s = t.length - 1; s >= 0; --s) {
                    var a = t.charCodeAt(s);
                    if (47 !== a)
                        -1 === i && (r = !1,
                        i = s + 1),
                        46 === a ? -1 === e ? e = s : 1 !== o && (o = 1) : -1 !== e && (o = -1);
                    else if (!r) {
                        n = s + 1;
                        break
                    }
                }
                return -1 === e || -1 === i || 0 === o || 1 === o && e === i - 1 && e === n + 1 ? "" : t.slice(e, i)
            }
            ;
            var o = "b" === "ab".substr(-1) ? function(t, e, n) {
                return t.substr(e, n)
            }
            : function(t, e, n) {
                return e < 0 && (e = t.length + e),
                t.substr(e, n)
            }
        }
        ).call(this, n("4362"))
    },
    e01a: function(t, e, n) {
        "use strict";
        var i = n("23e7")
          , r = n("83ab")
          , o = n("da84")
          , s = n("5135")
          , a = n("861d")
          , u = n("9bf2").f
          , c = n("e893")
          , l = o.Symbol;
        if (r && "function" == typeof l && (!("description"in l.prototype) || void 0 !== l().description)) {
            var d = {}
              , f = function() {
                var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0])
                  , e = this instanceof f ? new l(t) : void 0 === t ? l() : l(t);
                return "" === t && (d[e] = !0),
                e
            };
            c(f, l);
            var p = f.prototype = l.prototype;
            p.constructor = f;
            var h = p.toString
              , m = "Symbol(test)" == String(l("test"))
              , y = /^Symbol\((.*)\)[^)]+$/;
            u(p, "description", {
                configurable: !0,
                get: function() {
                    var t = a(this) ? this.valueOf() : this
                      , e = h.call(t);
                    if (s(d, t))
                        return "";
                    var n = m ? e.slice(7, -1) : e.replace(y, "$1");
                    return "" === n ? void 0 : n
                }
            }),
            i({
                global: !0,
                forced: !0
            }, {
                Symbol: f
            })
        }
    },
    e189: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "wrapper_scroll"
            }, [n("div", {
                staticClass: "pzb-cont-box content_scroll"
            }, [n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isLoading,
                    expression: "isLoading"
                }],
                attrs: {
                    id: "pzb_cont"
                }
            }, [t._m(0)]), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.isLoading,
                    expression: "!isLoading"
                }]
            }, [n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.isShowNoDataHtml,
                    expression: "!isShowNoDataHtml"
                }],
                staticClass: "intradayTreasure"
            }, [t._m(1), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.isBuyColumns,
                    expression: "!isBuyColumns"
                }],
                staticClass: "buyColumns"
            }, [n("div", {
                class: ["bg", 1 === parseInt(t.$getRequest().type) ? "pzb" : 10 === parseInt(t.$getRequest().type) ? "tuoshui" : t.$getRequest().type ? t.$getRequest().type : "pzb", "clearfix"]
            }, [n("div", {
                staticClass: "left"
            }, [n("div", {
                staticClass: "name-price"
            }, [n("span", {
                staticClass: "pzjj-bg"
            }, [t._v(t._s(t.vipNewsType[t.$getRequest().type ? t.$getRequest().type : "pzb"].title))]), n("span", {
                staticClass: "price"
            }, [n("i", {
                staticClass: "fontFamily"
            }, [t._v("￥" + t._s(t.defaultPrice))])]), n("b", [t._v("/起")])]), n("div", {
                staticClass: "buyColumns-text"
            }, [t._v(t._s(t.vipNewsType[t.$getRequest().type ? t.$getRequest().type : "pzb"].text))])]), n("div", {
                staticClass: "right"
            }, [n("span", {
                attrs: {
                    "data-type": "buyColumnsBtn"
                },
                on: {
                    click: function(e) {
                        return t.buyColumnsClickFun("columnBtn")
                    }
                }
            }, [t._v("订阅栏目")])])])]), n("div", {
                staticClass: "first-module-bg"
            }, [n("div", {
                staticClass: "first-module"
            }, [n("div", {
                staticClass: "detail-box"
            }, [n("div", {
                staticClass: "detail-title"
            }, [n("h3", [t._v(t._s(t.newsDetailObj && t.newsDetailObj.title))]), n("div", [n("span", [t._v(t._s(t.newsDetailObj && t.newsDetailObj.mediaName))]), n("span", {
                staticClass: "detail-date"
            }, [t._v(t._s(t.modifyDate))])])]), n("RelatedStocks", {
                attrs: {
                    stockList: t.stockList,
                    isBuyColumns: t.isBuyColumns || t.isBuyCurrtSingle || t.newsDetailObj.isPhaseSelect,
                    type: "vipNews"
                }
            }), n("div", {
                staticClass: "detail-cont"
            }, [t.newsDetailObj && t.newsDetailObj.summary && !/^\s+$/.test(t.newsDetailObj.summary) ? n("div", {
                staticClass: "abstract"
            }, [n("p", [t._v(t._s(t.newsDetailObj && t.newsDetailObj.summary))])]) : t._e(), t.isBuyColumns || t.isBuyCurrtSingle || t.newsDetailObj.isPhaseSelect ? n("div", {
                ref: "fullText",
                staticClass: "full-text",
                domProps: {
                    innerHTML: t._s("crosspzb" === t.$getRequest().sourcetype ? t.newsDetailObj && t.newsDetailObj.summarylink && t.$decrypt_ECB(t.newsDetailObj.summarylink) : "newsStream" === t.$getRequest().sourcetype ? t.newsDetailObj && t.newsDetailObj.content : "")
                }
            }) : t._e()])], 1), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.isBuyColumns && !t.isBuyCurrtSingle && !t.newsDetailObj.isPhaseSelect,
                    expression: "!isBuyColumns && !isBuyCurrtSingle && !newsDetailObj.isPhaseSelect"
                }],
                staticClass: "singlePayment lockBtn",
                on: {
                    click: function(e) {
                        return t.buyColumnsClickFun("singleBtn", t.newsDetailObj && t.newsDetailObj.title)
                    }
                }
            }, [n("div", {
                staticClass: "lockBtn-cont"
            }, [t.sku_unused_code_nums && parseInt(t.sku_unused_code_nums) > 0 ? n("p", [t._v("单篇兑换券"), n("i", {
                staticClass: "sellePrice"
            }, [t._v(" 0")]), t._v("元解锁全文")]) : t._e(), t.sku_unused_code_nums ? t._e() : n("p", [t._v("单篇付费"), n("i", {
                staticClass: "sellePrice"
            }, [t._v(t._s(t.singleSkuList[0] && t.singleSkuList[0].sku_price_list && t.singleSkuList[0].sku_price_list[t.single_price_type] && t.singleSkuList[0].sku_price_list[t.single_price_type].sell_price ? t.singleSkuList[0].sku_price_list[t.single_price_type].sell_price + "元" : "0.00元"))]), t._v("解锁全文")]), n("p", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.singleSkuList[0] && t.singleSkuList[0].sku_price_list && t.singleSkuList[0].sku_price_list[t.single_price_type] && t.singleSkuList[0].sku_price_list[t.single_price_type].sell_price !== t.singleSkuList[0].market_price,
                    expression: "singleSkuList[0]&&singleSkuList[0].sku_price_list&&singleSkuList[0].sku_price_list[single_price_type]&&singleSkuList[0].sku_price_list[single_price_type].sell_price!==singleSkuList[0].market_price"
                }]
            }, [t._v("原价"), n("i", {
                staticClass: "marketPrice fontFamily"
            }, [t._v(t._s(t.singleSkuList[0] && t.singleSkuList[0].market_price ? " " + t.singleSkuList[0].market_price : "0.00"))]), t._v("元/篇")])])]), t._m(2), n("ShareModule", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.$HTBridge.inApp,
                    expression: "$HTBridge.inApp"
                }],
                ref: "shareModule",
                attrs: {
                    shareData: t.shareData
                },
                on: {
                    changeisshou: t.toChangeSHoucang
                }
            })], 1), t._m(3)]), n("div", {
                staticClass: "column-box"
            }, [n("div", {
                staticClass: "space"
            }), n("div", {
                staticClass: "title-box"
            }, [n("TitleModule", {
                attrs: {
                    titleData: t.titleData
                }
            })], 1), n("div", {
                staticClass: "column-cont"
            }, [n("div", {
                staticClass: "column-cont-top clearfix"
            }, [n("div", {
                class: ["left", 1 === parseInt(t.$getRequest().type) ? "pzb" : 10 === parseInt(t.$getRequest().type) ? "tuoshui" : t.$getRequest().type ? t.$getRequest().type : "pzb"]
            }, [n("b")]), n("div", {
                staticClass: "right"
            }, [n("div", {
                staticClass: "right-top clearfix"
            }, [t._v(" " + t._s(t.vipNewsType[t.$getRequest().type ? t.$getRequest().type : "pzb"].title) + " ")]), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.isBuyColumns,
                    expression: "!isBuyColumns"
                }],
                staticClass: "weidingyue right-bottom",
                on: {
                    click: function(e) {
                        return t.buyColumnsClickFun("columnBtn")
                    }
                }
            }, [n("span", [t._v("订阅栏目 "), n("i", {
                staticClass: "fontFamily"
            }, [t._v("￥" + t._s(t.defaultPrice))]), n("b", [t._v("/起")])])]), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isBuyColumns,
                    expression: "isBuyColumns"
                }],
                staticClass: "yidingyue",
                on: {
                    click: function(e) {
                        return t.xudingClickFun(e)
                    }
                }
            }, [n("span", {
                staticClass: "xuding-bg"
            }, [n("span", {
                staticClass: "endTime"
            }, [t._v("已订阅"), n("i"), n("b", [t._v(t._s(t.yidingyueDate))]), t._v("到期")]), n("span", {
                staticClass: "xuding"
            }, [t._v("续订")])])])])]), n("div", {
                staticClass: "column-cont-bottom"
            }, [n("p", [t._v(t._s(t.vipNewsType[t.$getRequest().type ? t.$getRequest().type : "pzb"].text))])])])]), n("Recommendation", {
                attrs: {
                    skuUnusedCodeNums: t.sku_unused_code_nums,
                    skuId: t.sku_id,
                    appCommunityData: {
                        isBuyColumns: t.isBuyColumns,
                        token: t.commentToken,
                        accountId: t.commentAccountId,
                        yidingyue: t.yidingyueList.concat(t.phaseSelectList),
                        paramTitle: t.paramTitle,
                        modifyDate: t.modifyDate
                    }
                },
                on: {
                    upDateAuthCheck: t.upDateAuthCheck
                }
            })], 1)])]), n("NoDataHtml", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.isLoading && t.isShowNoDataHtml,
                    expression: "!isLoading&&isShowNoDataHtml"
                }],
                attrs: {
                    noDataStr: "暂无数据"
                }
            }), n("UserLead"), n("AppyForModule", {
                attrs: {
                    isShoApplyFor: t.isShoApplyFor,
                    isShowDiscountCoupon: t.prod_unused_code_nums,
                    emallProductDetail: t.emallProductDetail,
                    appCommunityInfo: {
                        token: t.commentToken,
                        accountId: t.commentAccountId
                    }
                },
                on: {
                    goToColumnOrderPage: t.buyColumnsClickFun,
                    setEmallProductStatus: t.setEmallProductStatus
                }
            })], 1)
        }
          , r = [function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "prestrain-page"
            }, [n("p"), n("p"), n("p"), n("p"), n("p"), n("p"), n("p"), n("p"), n("p"), n("p"), n("p"), n("p"), n("p")])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "qryUserEquity"
            }, [n("div", {
                staticClass: "cont"
            }, [n("h3", [t._v("特别提醒")]), n("p", [t._v("您有一份盘中宝免费体验权益待领取！")]), n("div", {
                staticClass: "btn-box"
            }, [n("span", {
                staticClass: "left-btn"
            }, [t._v("取消")]), n("span", {
                staticClass: "right-btn"
            }, [t._v("立即领取")])])])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "readNum"
            }, [n("span")])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "disclaimer"
            }, [n("p", [t._v("免责声明：市场有风险，投资需谨慎。本资讯中的内容和意见仅供参考，并不构成对所述证券买卖做出保证。投资者不应将本资讯作为投资决策的唯一参考因素。亦不应以本资讯取代自己的判断。在任何情况下，海通证券不对任何人因使用本平台中的内容所引致的任何损失负任何责任。盘中宝资讯内容由财联社提供，与海通证券无关。")])])
        }
        ]
          , o = n("696a")
          , s = o["a"]
          , a = (n("fafd"),
        n("2877"))
          , u = Object(a["a"])(s, i, r, !1, null, null, null);
        e["default"] = u.exports
    },
    e3db: function(t, e) {
        var n = {}.toString;
        t.exports = Array.isArray || function(t) {
            return "[object Array]" == n.call(t)
        }
    },
    e467: function(t, e, n) {
        "use strict";
        (function(e) {
            var i = n("c532");
            function r(t, n) {
                n = n || new FormData;
                var r = [];
                function o(t) {
                    return null === t ? "" : i.isDate(t) ? t.toISOString() : i.isArrayBuffer(t) || i.isTypedArray(t) ? "function" === typeof Blob ? new Blob([t]) : e.from(t) : t
                }
                function s(t, e) {
                    if (i.isPlainObject(t) || i.isArray(t)) {
                        if (-1 !== r.indexOf(t))
                            throw Error("Circular reference detected in " + e);
                        r.push(t),
                        i.forEach(t, (function(t, r) {
                            if (!i.isUndefined(t)) {
                                var a, u = e ? e + "." + r : r;
                                if (t && !e && "object" === typeof t)
                                    if (i.endsWith(r, "{}"))
                                        t = JSON.stringify(t);
                                    else if (i.endsWith(r, "[]") && (a = i.toArray(t)))
                                        return void a.forEach((function(t) {
                                            !i.isUndefined(t) && n.append(u, o(t))
                                        }
                                        ));
                                s(t, u)
                            }
                        }
                        )),
                        r.pop()
                    } else
                        n.append(e, o(t))
                }
                return s(t),
                n
            }
            t.exports = r
        }
        ).call(this, n("b639").Buffer)
    },
    e538: function(t, e, n) {
        var i = n("b622");
        e.f = i
    },
    e683: function(t, e, n) {
        "use strict";
        t.exports = function(t, e) {
            return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t
        }
    },
    f6b4: function(t, e, n) {
        "use strict";
        var i = n("c532");
        function r() {
            this.handlers = []
        }
        r.prototype.use = function(t, e, n) {
            return this.handlers.push({
                fulfilled: t,
                rejected: e,
                synchronous: !!n && n.synchronous,
                runWhen: n ? n.runWhen : null
            }),
            this.handlers.length - 1
        }
        ,
        r.prototype.eject = function(t) {
            this.handlers[t] && (this.handlers[t] = null)
        }
        ,
        r.prototype.forEach = function(t) {
            i.forEach(this.handlers, (function(e) {
                null !== e && t(e)
            }
            ))
        }
        ,
        t.exports = r
    },
    fafd: function(t, e, n) {
        "use strict";
        n("90de")
    },
    fb60: function(t, e, n) {
        "use strict";
        var i = n("7917")
          , r = n("c532");
        function o(t) {
            i.call(this, null == t ? "canceled" : t, i.ERR_CANCELED),
            this.name = "CanceledError"
        }
        r.inherits(o, i, {
            __CANCEL__: !0
        }),
        t.exports = o
    }
}]);
