(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-642785cb"], {
    "018e": function(t, e, o) {
        "use strict";
        o("d624")
    },
    "0a1f": function(t, e, o) {
        "use strict";
        o("568c")
    },
    "138b": function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAMKADAAQAAAABAAAAMAAAAADbN2wMAAAEuklEQVRoBe1ZTWhcVRQ+581MXjI2aUNdWIJo6+SnVttKXYhgI+hKcGkEUSvYEvoX242gogjiTlFKigYtrtxEceNCXKiBFnURMTaW/E2ntbaNi2pLRyaNM/OO371mhpf5ee/Om5fJDHggeffdc8493/fOffeeuY+oxYXXAr+c3LGBspkRItlDwjZZNEGxDaf40PT1sOOFTkBGt/VR1pkQoi1usMx8mSL8BB9NTbv7622HSkBOJGxy8pMicl8lYMw0Q1b0AR5JLlfSB+mzgjhV9ZH8/mrglY8IbSfYVPUPoAgtAzK+o42uZJJCcqcXDib+nXriCR4694+XnakuvAwsZl7wA69AaRvYmgL0swuFgHz3aBTz4xW/YEU9bLVPsSN4IxQCNHXpeczvu01haFv4mNp72dVNQMafihA7r3oFqaxDFpRvnVI3AVqcfAZP9J5aceBdSCjfWv1K7etahWR0YDPlbmHdN58+bgDYFy5StP1BPjL7p7u/lnbgDOhlM7f8RVDwCqT2VWOoJTig1JQBeW/3JuKbvZjzD6PGOYxNqzdg3FVuKDMWiOUkifU9SdcCH5+6scrA46aMAMqBLnKcfizYCQDtBVBcNdBePLHNHmOFpsLUUlNqAbEVsSSI4UpJ6ozN8otzaXegIgE5sXUXOfQugA/iBYu6jZqljUxlgeVrsiJvoJ76WeHSBPDUH0IRNoEpYTcLWC8cKEfSZKGyfSl1xhJ506J87uNWAa+IYYZ0kiOjqs2qfpesM6duWk04au20KCd3tRrwIt68dFvU0f5rsaPVGmJfsnh4ZhHL1lethh2rz7d8fPbifztxxN4PEn+0CgmNNRLdp/BqAnx07ipFrUGwutLsJDRGhXUkeblIQDX4SGqe7La9WGN/a1YSGpvCqLCuyKpijg/Np7BB7EWKzhcMmuWqMSlsCqNLkJFykQ/6emg5+w02t/5ybeN7UELMkR17jA/Ol03xVRkoQFsxVO/EuULfel1XMAxWAq8wVcxAAayM9d1OS9kz65UJTJtZ6mh7hIfnrxUwlV49CShjeX/rTvyfQinta1s6eD33AC8UsXb5HUVWnELuwHzswlkk6rS7rzFtPu0HXuHwJaDBClLZcOEZk5BmBBjla8PFMYppRoBwKNt4udckpC+BlcOnAZPBQrYZMDn48iVAVycTWIHaQwbnO5yOidh+hv4ELLrfb5A10xvE9ieQ54pfW9YMtHtgg9j+BNhZvwwYxPYnIOuYAYPYnuWB/miXz2XwxdGfqDv1IbUBzqFINO71UdAbWNy+LQh41DE/sMVPc9Tu0X+qjb5aeenYm+Kep4SeSuqivznNaX2QZBAdv5imKUKv8ciFL0vMx3E/juPLJylPb2M8o/cKpDPU3n+LCOVYFfHMgP6SyKSCewpSncKPjufo2L7dFcAXfbVO2cBW+RQV1RrCn/DQZ/lqatXv+Q4oAznV30np5R+xsZRt7XhCOMmw3qKO7o94+Cd18GosMrYnRkvXD2Cav46x7yh1RDZ/oXjsca/fAsrHl4AykrFtG2lJXkaFPoS7LfA6iyPvzyne/SGAZ5RNUAGROC39dRDjPgs42HnlGjF/Ss7Gd2r5ThA0/v9+9T6BfwGbfoaMLHCXUgAAAABJRU5ErkJggg=="
    },
    "1da1": function(t, e, o) {
        "use strict";
        o.d(e, "a", (function() {
            return i
        }
        ));
        o("d3b7");
        function s(t, e, o, s, i, r, n) {
            try {
                var a = t[r](n)
                  , h = a.value
            } catch (l) {
                return void o(l)
            }
            a.done ? e(h) : Promise.resolve(h).then(s, i)
        }
        function i(t) {
            return function() {
                var e = this
                  , o = arguments;
                return new Promise((function(i, r) {
                    var n = t.apply(e, o);
                    function a(t) {
                        s(n, i, r, a, h, "next", t)
                    }
                    function h(t) {
                        s(n, i, r, a, h, "throw", t)
                    }
                    a(void 0)
                }
                ))
            }
        }
    },
    2246: function(t, e, o) {
        "use strict";
        var s = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "no-data"
            }, [s("div", {
                staticClass: "no-data-cont"
            }, [s("img", {
                staticClass: "box",
                attrs: {
                    src: o("6e54"),
                    alt: "icon"
                }
            }), s("p", [t._v(t._s(t.noDataStr))])])])
        }
          , i = []
          , r = {
            name: "NoDataHtml",
            props: ["noDataStr"]
        }
          , n = r
          , a = (o("ca82"),
        o("2877"))
          , h = Object(a["a"])(n, s, i, !1, null, null, null);
        e["a"] = h.exports
    },
    "2cd8": function(t, e, o) {
        "use strict";
        /*!
 * better-scroll / observe-dom
 * (c) 2016-2021 ustbhuangyi
 * Released under the MIT License.
 */
        var s = "undefined" !== typeof window
          , i = s && navigator.userAgent.toLowerCase();
        i && /wechatdevtools/.test(i),
        i && i.indexOf("android"),
        function() {
            if ("string" === typeof i) {
                var t = /os (\d\d?_\d(_\d)?)/
                  , e = t.exec(i);
                if (!e)
                    return !1;
                var o = e[1].split("_").map((function(t) {
                    return parseInt(t, 10)
                }
                ));
                return !!(13 === o[0] && o[1] >= 4)
            }
        }();
        if (s) {
            var r = "test-passive";
            try {
                var n = {};
                Object.defineProperty(n, "passive", {
                    get: function() {
                        !0
                    }
                }),
                window.addEventListener(r, (function() {}
                ), n)
            } catch (u) {}
        }
        var a = s && document.createElement("div").style
          , h = function() {
            if (!s)
                return !1;
            for (var t = [{
                key: "standard",
                value: "transform"
            }, {
                key: "webkit",
                value: "webkitTransform"
            }, {
                key: "Moz",
                value: "MozTransform"
            }, {
                key: "O",
                value: "OTransform"
            }, {
                key: "ms",
                value: "msTransform"
            }], e = 0, o = t; e < o.length; e++) {
                var i = o[e];
                if (void 0 !== a[i.value])
                    return i.key
            }
            return !1
        }();
        function l(t) {
            return !1 === h ? t : "standard" === h ? "transitionEnd" === t ? "transitionend" : t : h + t.charAt(0).toUpperCase() + t.substr(1)
        }
        h && "standard" !== h && h.toLowerCase();
        l("transform"),
        l("transition");
        function c(t) {
            if (t instanceof window.SVGElement) {
                var e = t.getBoundingClientRect();
                return {
                    top: e.top,
                    left: e.left,
                    width: e.width,
                    height: e.height
                }
            }
            return {
                top: t.offsetTop,
                left: t.offsetLeft,
                width: t.offsetWidth,
                height: t.offsetHeight
            }
        }
        s && l("perspective"),
        l("transitionTimingFunction"),
        l("transitionDuration"),
        l("transitionDelay"),
        l("transformOrigin"),
        l("transitionEnd"),
        l("transitionProperty");
        var p = function() {
            function t(t) {
                this.scroll = t,
                this.stopObserver = !1,
                this.init()
            }
            return t.prototype.init = function() {
                this.handleMutationObserver(),
                this.handleHooks()
            }
            ,
            t.prototype.handleMutationObserver = function() {
                var t = this;
                if ("undefined" !== typeof MutationObserver) {
                    var e = 0;
                    this.observer = new MutationObserver((function(o) {
                        t.mutationObserverHandler(o, e)
                    }
                    )),
                    this.startObserve(this.observer)
                } else
                    this.checkDOMUpdate()
            }
            ,
            t.prototype.handleHooks = function() {
                var t = this;
                this.hooksFn = [],
                this.registerHooks(this.scroll.hooks, this.scroll.hooks.eventTypes.contentChanged, (function() {
                    t.stopObserve(),
                    t.handleMutationObserver()
                }
                )),
                this.registerHooks(this.scroll.hooks, this.scroll.hooks.eventTypes.enable, (function() {
                    t.stopObserver && t.handleMutationObserver()
                }
                )),
                this.registerHooks(this.scroll.hooks, this.scroll.hooks.eventTypes.disable, (function() {
                    t.stopObserve()
                }
                )),
                this.registerHooks(this.scroll.hooks, this.scroll.hooks.eventTypes.destroy, (function() {
                    t.destroy()
                }
                ))
            }
            ,
            t.prototype.mutationObserverHandler = function(t, e) {
                var o = this;
                if (!this.shouldNotRefresh()) {
                    for (var s = !1, i = !1, r = 0; r < t.length; r++) {
                        var n = t[r];
                        if ("attributes" !== n.type) {
                            s = !0;
                            break
                        }
                        if (n.target !== this.scroll.scroller.content) {
                            i = !0;
                            break
                        }
                    }
                    s ? this.scroll.refresh() : i && (clearTimeout(e),
                    e = window.setTimeout((function() {
                        o.shouldNotRefresh() || o.scroll.refresh()
                    }
                    ), 60))
                }
            }
            ,
            t.prototype.startObserve = function(t) {
                var e = {
                    attributes: !0,
                    childList: !0,
                    subtree: !0
                };
                t.observe(this.scroll.scroller.content, e)
            }
            ,
            t.prototype.shouldNotRefresh = function() {
                var t = this.scroll.scroller
                  , e = t.scrollBehaviorX
                  , o = t.scrollBehaviorY
                  , s = e.currentPos > e.minScrollPos || e.currentPos < e.maxScrollPos || o.currentPos > o.minScrollPos || o.currentPos < o.maxScrollPos;
                return t.animater.pending || s
            }
            ,
            t.prototype.checkDOMUpdate = function() {
                var t = this
                  , e = this.scroll.scroller.content
                  , o = c(e)
                  , s = o.width
                  , i = o.height
                  , r = function() {
                    if (!t.stopObserver) {
                        o = c(e);
                        var r = o.width
                          , a = o.height;
                        s === r && i === a || t.scroll.refresh(),
                        s = r,
                        i = a,
                        n()
                    }
                }
                  , n = function() {
                    setTimeout((function() {
                        r()
                    }
                    ), 1e3)
                };
                n()
            }
            ,
            t.prototype.registerHooks = function(t, e, o) {
                t.on(e, o, this),
                this.hooksFn.push([t, e, o])
            }
            ,
            t.prototype.stopObserve = function() {
                this.stopObserver = !0,
                this.observer && this.observer.disconnect()
            }
            ,
            t.prototype.destroy = function() {
                this.stopObserve(),
                this.hooksFn.forEach((function(t) {
                    var e = t[0]
                      , o = t[1]
                      , s = t[2];
                    e.off(o, s)
                }
                )),
                this.hooksFn.length = 0
            }
            ,
            t.pluginName = "observeDOM",
            t
        }();
        e["a"] = p
    },
    "2d6c": function(t, e, o) {
        "use strict";
        (function(t) {
            e["a"] = {
                name: "UserLead",
                methods: {
                    closeUserLead: function() {
                        t(".userLead-box").hide(),
                        t(".userLead_bg").hide(),
                        t(".userLead").hide()
                    }
                },
                mounted: function() {}
            }
        }
        ).call(this, o("1157"))
    },
    3695: function(t, e, o) {
        "use strict";
        o("71a9")
    },
    "432e": function(t, e, o) {
        "use strict";
        (function(t) {
            o("a15b"),
            o("fb6a");
            var s = o("271c");
            e["a"] = {
                name: "RelatedStocks",
                data: function() {
                    return {
                        relatedStocksArr: [],
                        relatedStockAllList: [],
                        isxiala: "no"
                    }
                },
                props: ["stockList", "isBuyColumns", "type"],
                methods: {
                    relatedStocksClick: function(e, o) {
                        "quick" !== this.$getRequest().channel && (this.$HTBridge.inApp ? (!this.type || this.type && this.isBuyColumns) && (window.location.href = "@stk=" + e + "&stks=" + o.join(",")) : "pc" !== this.$getRequest().channel && (Object(s["i"])() ? (t(".userLead-box").css("display", "block"),
                        t(".userLead_bg").css("display", "block"),
                        t(".userLead").css("display", "block")) : Object(s["a"])()))
                    },
                    xialaClickFunc: function(t, e) {
                        "no" === t ? (this.isxiala = "yes",
                        this.relatedStocksArr = e) : (this.isxiala = "no",
                        this.relatedStocksArr = e.slice(0, 6))
                    },
                    gupiaoDetail: function(e) {
                        var o = this
                          , s = {
                            json_head: {
                                function_id: 10002,
                                attrs: 0,
                                length: 11
                            },
                            json_body: {
                                sequence_no: 12345,
                                list_range: 1,
                                op_type: 0,
                                code_lnum: e.length,
                                code_list: e,
                                op_type1: 279,
                                op_type2: 96,
                                op_type3: 0
                            }
                        };
                        e.length > 0 && t.ajax({
                            url: "https://ehq.htsec.com",
                            data: JSON.stringify(s),
                            type: "POST",
                            timeout: 15e3,
                            success: function(t) {
                                var e = t.json_body
                                  , s = e.error_code;
                                if (0 == s) {
                                    var i = e && e.cycle_content;
                                    o.relatedStocksArr = i && i.length > 6 ? i.slice(0, 6) : i,
                                    o.relatedStockAllList = i
                                }
                            },
                            error: function(t) {
                                return !1
                            }
                        })
                    }
                },
                mounted: function() {
                    this.gupiaoDetail(this.stockList)
                },
                watch: {
                    stockList: {
                        handler: function(t) {
                            this.gupiaoDetail(t)
                        }
                    }
                }
            }
        }
        ).call(this, o("1157"))
    },
    "568c": function(t, e, o) {},
    "660d": function(t, e, o) {
        "use strict";
        var s = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "related-stocks-box"
            }, [o("ul", {
                staticClass: "related-stocks clearfix",
                attrs: {
                    id: "related_stocks"
                }
            }, t._l(t.relatedStocksArr, (function(e, s) {
                return o("li", {
                    key: s,
                    staticClass: "related-stocks-li clearfix",
                    class: {
                        "li-price": 0 === parseFloat(parseFloat(e.up_rose)),
                        "li-price-red": parseFloat(parseFloat(e.up_rose)) > 0,
                        "li-price-green": parseFloat(parseFloat(e.up_rose)) < 0
                    },
                    on: {
                        click: function(o) {
                            return t.relatedStocksClick(e.code, t.stockList)
                        }
                    }
                }, [t.type ? t._e() : o("div", {
                    staticClass: "name showName",
                    class: {
                        "price-limit-red": parseFloat(parseFloat(e.up_rose)) > 0,
                        "price-limit-green": parseFloat(parseFloat(e.up_rose)) < 0
                    }
                }, [t._v(t._s(e.stock_name ? e.stock_name : ""))]), t.type && t.isBuyColumns ? o("div", {
                    staticClass: "name showName",
                    class: {
                        "price-limit-red": parseFloat(parseFloat(e.up_rose)) > 0,
                        "price-limit-green": parseFloat(parseFloat(e.up_rose)) < 0
                    }
                }, [t._v(t._s(e.stock_name ? e.stock_name : ""))]) : t._e(), t.type && !t.isBuyColumns ? o("div", {
                    staticClass: "name hideName",
                    class: {
                        "price-limit-red": parseFloat(parseFloat(e.up_rose)) > 0,
                        "price-limit-green": parseFloat(parseFloat(e.up_rose)) < 0
                    }
                }, [t._v("****")]) : t._e(), o("div", {
                    staticClass: "price-limit",
                    class: {
                        "price-limit-red": parseFloat(parseFloat(e.up_rose)) > 0,
                        "price-limit-green": parseFloat(parseFloat(e.up_rose)) < 0
                    }
                }, [t._v(t._s(e.up_rose ? parseFloat(parseFloat(e.up_rose)) > 0 ? "+" + parseFloat(parseFloat(e.up_rose) / 100).toFixed(2) + "%" : parseFloat(parseFloat(e.up_rose) / 100).toFixed(2) + "%" : "--"))])])
            }
            )), 0), o("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.relatedStockAllList && t.relatedStockAllList.length > 6,
                    expression: "relatedStockAllList&&relatedStockAllList.length>6"
                }],
                staticClass: "xiala"
            }, [o("span", {
                class: {
                    shouqi: "yes" === t.isxiala
                },
                on: {
                    click: function(e) {
                        return t.xialaClickFunc(t.isxiala, t.relatedStockAllList)
                    }
                }
            })])])
        }
          , i = []
          , r = o("432e")
          , n = r["a"]
          , a = (o("3695"),
        o("2877"))
          , h = Object(a["a"])(n, s, i, !1, null, null, null);
        e["a"] = h.exports
    },
    "683b": function(t, e, o) {
        "use strict";
        var s = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "userLead-box"
            }, [o("div", {
                staticClass: "userLead_bg",
                on: {
                    click: t.closeUserLead
                }
            }), t._m(0)])
        }
          , i = [function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "userLead"
            }, [o("span", {
                staticClass: "jiao"
            }), o("div", {
                staticClass: "stepBox"
            }, [o("div", {
                staticClass: "step stepOne"
            }, [o("div", [t._v("1")]), o("div", [t._v("请点击右上角")]), o("div", [t._v("“"), o("i"), o("i"), o("i"), t._v("”")])]), o("div", {
                staticClass: "step stepTwo"
            }, [o("div", [t._v("2")]), o("div", [t._v("选择")]), o("div", [t._v("“"), o("i", [t._v("在浏览器中打开")]), t._v("”")])])])])
        }
        ]
          , r = o("2d6c")
          , n = r["a"]
          , a = (o("0a1f"),
        o("2877"))
          , h = Object(a["a"])(n, s, i, !1, null, null, null);
        e["a"] = h.exports
    },
    "6e54": function(t, e, o) {
        t.exports = o.p + "img/problem.0cd183b6.png"
    },
    "71a9": function(t, e, o) {},
    "7f2c": function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAMKADAAQAAAABAAAAMAAAAADbN2wMAAAJB0lEQVRoBe1Ze3BU1Rn/vnv3brKPkAfJYtCMbe2oA9ZxhtKKtCUhdBAVKVljEkkbpQzDOK0zZsai/sNOK7TTB7Q6WgIOBQ0+ErANyeLQFiXWwFjKmNJCi2AInWlqExIlm929uzf3nn5nk7u5d/fefSTT/zjM5pzzvc73O993zwuA6+X6DMxpBnBO2tPKLBAQ4OrZZRqqKxjDJWT0VgBWBgzKAOkfwGcAeI0xNoAo/J0B/FmUHMdxV+fYXMd3zNYAY/UiYqfK9bWr/QfIuWZymAqbqniTlwQNFlCDfnArY9q9nKzFFYUqJ28HAkwIBFDj7XyLkK8Cl4/0rK+Xe9SL0Z667bwvSNJmmuHjvJ17YcnJix0LXXjmnolv0yTknRF5KbBj631RBfcCYw/qjgoC/rTw/re2sifrXWpc6aaZrtV5mWoamIkvdiUm8Om7xxNxQsReEaXvPney8ONMukZezhGIB/1fjcbhrNF5bkjT2A/k7vW/oHyOik5pbf6RmHGHIrBCZfH+Z5aFH5ihZm7lBCB21P8tVWPvkimex2mFkrc10u3/1WxA8Pw3GmQMvMC0rmfvDn3fSLdrm5SthGJBv19T2WH6NF1W/Bma9kSkp+5F2Nkh5xOJRecSq9SMGWrRWIIG7PlcQGQEEDlat1xjrJ0bNI1g12HscTno350PiPMj6QB08/Rh/PLpZaF6vW9V2zrGft+4EFTWRXlZaKVoRyP5zXKw7mXYuTiWUyQqwN4Hmjj62F959p7QHXbj2SrLsdjLpDTfTjETnfJ4oxz8675cQJRN2EeAj8EnkOy9/vwaVmA1piUASp0GCt8aK4VcaTRoixw8+wrshHimSIxFMwPg4xGIO/5zbeIpq7HTADAWEFBjP7QSzpdGA2+Qg2o7PLhYsQVRZJ9CpvE0+F5HPRNNNOokd0OdgRjgW/ptep8DAjiHcGIxgu+cAFduQHCFEArCCKFCAZwyglSEMB4juiRAOI7gUOjnQohHBRAnEYqGkC+xtNmtTd3sPDFAWR/MpkaECRBY/cOdmDi6GMXy2omNirNt6zs2AlvJd+JANfPKcihkZ48cHBfQsWb7KfdJKxlTBNhwvXdchhFaNvNaeegIoNGhc8u8qo69VoMYaclIKEoXp7uUjBG4Bg7H6u3vuz949DesJBILv9SxxfuI0Z7pGwgpsHIWzlNYsSUX5/WBEzu2JK3jfdoeTT4kZZCO4IL4zR+T801trDwSD9NJgDU9sje8RJfhtVlZg2VGZrY2zboiADYUV3W0Z5NN5XMQnCZPpq9ClPNjyMTan5z0nG5uC1eqbKKXlqK7uDxtrDW81os5hQC+pDOy1eS8TPAfKrqpI5hNNhM/FQDl/ChdelbtOOXpb9wXqYor6juk/0XdhqbBUr3Na3MEgN1iZNq2EcOiID5QfFPnnJzn9rFgxgf6lkYcKNTsOOntb2iTb2GK9ic6GCWdT8gj3G70ywyAYYmRad3GcUGEe0/feHvvX9hmyVomd2qBSksyFYrofx0C1PzolPdvTW0xcnLyPdpHbk61RBuk6XRgBgCQEQDN0BiCsOqjytIPRtVLb/wLoqWpA+Tbj6mU8YCfiE5yvq/oXNPeiTtVpvSS8wttbJUZ6SYAdKGjE4R1oWGGRXDUXKwq7h9UIx00gF8C16zuscYRSjSvjA5pxXPvFf2jYU94KR3dT9Bq4zPKGNvkRyJiOs30ERORvxLcqDP1mnSGUHTUXqm8bWBQvXSYnKebF4ACsi1gXTdbvbUP+SYWamqLfk3TJoNkcF4mHUoheuGYKSkA2CixzAAQrjCntLLPN//fEfXSb8n5+3R1N0hzBsBtNe6eqFVBPUJNt27brkZkJgCmFEIG/zQqUrguOgXH1z/0OYci6hi/GySd53JRUOecQo1t4fspdXtonc/qPB+TAZou/GYAIJzmQrxQ2pwXC/Ab/Qsrr46qSjeFbvUUZ+avF5xzisDDeyJ+2vl5VHM+ugiMHhYMxQRAcyQu7tz7D9HhWNFXURgaUoeD5Pwqg06yqUB4CgB7Mst9OamSbDTtnqCHMO1Ncj6vpVgDPJU0Qg0TgJKFnWcobV4v9npXnqkslUOT2lFyvsaoYGy7oHgqhdhnRyAPEA1t4U0qwv7E+JTUkOsPMFpe5n7X6INpSdIZXWxjkTIZe5umd7lOs6rnOQTvanw1DNqjHMg7gKVrAXclzjhW8v8PWsoqRB8J6xAPTXYdo8GyHuzi4Jr5BhjQi9yn3RSJBIgllBrXJqCEcpY/aTBJA02kNr3BMU4rUKlfQXTi0QMpG6FzGl16+cfAiuhXTf1tVNPmOTOGxQxYRuDQZPMRys3EWm+hkySVOyRXDe6XExGgREgwEI7zSFTDTmVwJPwqLRuNSYU5NCi1L7RUeBYF6O5hNGP6BnSGJEIrIY/ofbs6CkXps8MjwT7tPgGt0tIKTzOhOminnw+dgbAt1XmubwlgHbZfIsSt2Qa4GeanA+BK0yA6odXZ4vN8hybjQDZbGfmIbw/63G9ayVgC4IJ+sb2NVoeMszdMeWplNEGbBhGA1oKWCvdGsrXPVjYzY7QAYZOdiC0ArvB50f0YReKPdsrVsMg6ArqCAcTlCvcm2hz36KzcapRFENZdqPAM2clnBPBl3KNIYkEd7WzvWxs4nxkAV5oGQRlZOOBzbwEBf21tK4VKHytdVzd8vMDdl8IxdTMC4JLrcF/I4yhdRZF4zaSZ6GzLDoDLGUAMVngep2/ihXRbRgotIALUDSxwv2WkWrWzAuBK9+ELsYccBzfQ7D1FuZx8hyJHcgPAjUyD4Dv2ZZ/nCaLs4uS0gvgJ3fiqB8s9iWeXNH4KIScAuk692P5zpwh3EYg/UERyd143YAAxuMDbioLwM501VePvHC73nQPlnuSh0sxP71luZOli6ZTDrGW5Hw9M5Sc/SugbWbpoOmV6s+PHjs8Nh3eQbgNFc+tln/tQunBmyqwBmMxqj8XpDCKZaNk7B0Hc38zF6hkTOzH93TO7CYvH3VyU0mRQuAFQrQUNvwLI+H9GfIFWrmKq6ZGAzrOA/KrKfx8R/wyA2AtQlTwWz9Z5sne9XJ+Buc7A/wDnY2W3lU0ogAAAAABJRU5ErkJggg=="
    },
    a94d: function(t, e, o) {
        "use strict";
        /*!
 * better-scroll / observe-image
 * (c) 2016-2021 ustbhuangyi
 * Released under the MIT License.
 */
        var s = "undefined" !== typeof window
          , i = s && navigator.userAgent.toLowerCase();
        i && /wechatdevtools/.test(i),
        i && i.indexOf("android"),
        function() {
            if ("string" === typeof i) {
                var t = /os (\d\d?_\d(_\d)?)/
                  , e = t.exec(i);
                if (!e)
                    return !1;
                var o = e[1].split("_").map((function(t) {
                    return parseInt(t, 10)
                }
                ));
                return !!(13 === o[0] && o[1] >= 4)
            }
        }();
        var r = !1;
        if (s) {
            var n = "test-passive";
            try {
                var a = {};
                Object.defineProperty(a, "passive", {
                    get: function() {
                        r = !0
                    }
                }),
                window.addEventListener(n, (function() {}
                ), a)
            } catch (y) {}
        }
        var h = function(t, e) {
            for (var o in e)
                t[o] = e[o];
            return t
        }
          , l = s && document.createElement("div").style
          , c = function() {
            if (!s)
                return !1;
            for (var t = [{
                key: "standard",
                value: "transform"
            }, {
                key: "webkit",
                value: "webkitTransform"
            }, {
                key: "Moz",
                value: "MozTransform"
            }, {
                key: "O",
                value: "OTransform"
            }, {
                key: "ms",
                value: "msTransform"
            }], e = 0, o = t; e < o.length; e++) {
                var i = o[e];
                if (void 0 !== l[i.value])
                    return i.key
            }
            return !1
        }();
        function p(t) {
            return !1 === c ? t : "standard" === c ? "transitionEnd" === t ? "transitionend" : t : c + t.charAt(0).toUpperCase() + t.substr(1)
        }
        function u(t, e, o, s) {
            var i = r ? {
                passive: !1,
                capture: !!s
            } : !!s;
            t.addEventListener(e, o, i)
        }
        function d(t, e, o, s) {
            t.removeEventListener(e, o, {
                capture: !!s
            })
        }
        c && "standard" !== c && c.toLowerCase();
        p("transform"),
        p("transition");
        s && p("perspective"),
        p("transitionTimingFunction"),
        p("transitionDuration"),
        p("transitionDelay"),
        p("transformOrigin"),
        p("transitionEnd"),
        p("transitionProperty");
        var f = function() {
            function t(t, e) {
                this.wrapper = t,
                this.events = e,
                this.addDOMEvents()
            }
            return t.prototype.destroy = function() {
                this.removeDOMEvents(),
                this.events = []
            }
            ,
            t.prototype.addDOMEvents = function() {
                this.handleDOMEvents(u)
            }
            ,
            t.prototype.removeDOMEvents = function() {
                this.handleDOMEvents(d)
            }
            ,
            t.prototype.handleDOMEvents = function(t) {
                var e = this
                  , o = this.wrapper;
                this.events.forEach((function(s) {
                    t(o, s.name, e, !!s.capture)
                }
                ))
            }
            ,
            t.prototype.handleEvent = function(t) {
                var e = t.type;
                this.events.some((function(o) {
                    return o.name === e && (o.handler(t),
                    !0)
                }
                ))
            }
            ,
            t
        }()
          , g = function(t) {
            return "img" === t.tagName.toLowerCase()
        }
          , v = function() {
            function t(t) {
                this.scroll = t,
                this.refreshTimer = 0,
                this.init()
            }
            return t.prototype.init = function() {
                this.handleOptions(this.scroll.options.observeImage),
                this.bindEventsToWrapper()
            }
            ,
            t.prototype.handleOptions = function(t) {
                void 0 === t && (t = {}),
                t = !0 === t ? {} : t;
                var e = {
                    debounceTime: 100
                };
                this.options = h(e, t)
            }
            ,
            t.prototype.bindEventsToWrapper = function() {
                var t = this.scroll.scroller.wrapper;
                this.imageLoadEventRegister = new f(t,[{
                    name: "load",
                    handler: this.load.bind(this),
                    capture: !0
                }]),
                this.imageErrorEventRegister = new f(t,[{
                    name: "error",
                    handler: this.load.bind(this),
                    capture: !0
                }])
            }
            ,
            t.prototype.load = function(t) {
                var e = this
                  , o = t.target
                  , s = this.options.debounceTime;
                o && g(o) && (0 === s ? this.scroll.refresh() : (clearTimeout(this.refreshTimer),
                this.refreshTimer = window.setTimeout((function() {
                    e.scroll.refresh()
                }
                ), this.options.debounceTime)))
            }
            ,
            t.pluginName = "observeImage",
            t
        }();
        e["a"] = v
    },
    c740: function(t, e, o) {
        "use strict";
        var s = o("23e7")
          , i = o("b727").findIndex
          , r = o("44d2")
          , n = "findIndex"
          , a = !0;
        n in [] && Array(1)[n]((function() {
            a = !1
        }
        )),
        s({
            target: "Array",
            proto: !0,
            forced: a
        }, {
            findIndex: function(t) {
                return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        }),
        r(n)
    },
    ca82: function(t, e, o) {
        "use strict";
        o("ed29")
    },
    d624: function(t, e, o) {},
    e266: function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAMKADAAQAAAABAAAAMAAAAADbN2wMAAAHoUlEQVRoBe1Ze2yURRCf+a7HtWcpD58tGktboIj4JjEasQn4j49EjdaIBDRAankUq9FEjAoa/UOphWpTCRolUf9AQkhQjIkPEoyYiBFBpO8ib5+oxfZqe9/4m737vvuuvUcfV8XETS47uzs785vd2Z25/Yj+44VHA7/Uz8il3q4qIrmahANk0U7y577OS/efyrS+jBsgrxRNpV57pxDle8Ey81Hy8c28on2/t3+kdEYNkLqSANnhPSJyaSJgzHSQrKwruaq1J9H4cPqs4UxKOkfCix3wWJlutngJfgtA/6lzRGg6gSfp/GEMZGwHZPOMMXSsq1VILlIcWO2V/NChOqVlXWEVwK83/cRHaFKwhMsP/KXtkZbM7cCJrvs94E9SQf5GFxxoGHRS24YHvO7YCImMGCCflmXBPx6PYeG1XL6722lHaF7rtJXXzHE7hk9kxADae3gBXKRQYeC2+YlyJjYMgIQ+M4YBw4s5A3iG0TFiA2Tz3T5ie1VMt9RwxVddsXaEivRJTawfu6BzR1hGbACd2DMPK1qsOHAj/Er+s+qTYsKY4QEDzkKJzk3KO8iBERkgr5SeDX94xtXFXMvLDpx22/0IMwYetxtzjQy3Y+jEsA0w12Zfz9aY79MvlMMvp4UAHtxIvyifmasy9AoeZhlSHJDaK8YT/zEFPn8dcpxlCFpTHL3ss+ZzVfvbTjtVLXVF90nYfsvhweFuIZZ6EutzkrwWrt77mzOWrh5gANKBPLLtaXDSEgCdAqCoDdApWLGzEwkEgBf5oY7HEo0l65N1k1/AAjyaaDy6Qy3QrYa1wjDU1Epj/Y28qKnTO8c1QOomX0421QD4jThgWV6mZDQT/wzBqwA+FrSSMSfohxFLoO956DsnwfCALixULzo/JMv3FPKpr5XBGIBVvxZJ2E6sSGDALE8HVqYLq9KGVdlPbH1E2bSVK9p/97AMmZQNReMoRHeS2HMheyZkF2Ong6kEYeE6yUJmu7L9MxZZbdG6N/ch/Z2hkwAyDEHfxbZOt9DXQtnYxgebjmMVwDp6BYvI9Oq0AgrBfTkcdeGoKxNNd7wDRnzD1R1XsObv0ms3KSSAD5H4r+LqloOjB3H4kqW2tJA4hHQ9chY5y7rMoj652BUpvO9MBa8YubrxEKp9SpsSlgkW5WR/67ThNrNwsGa77TOMwEVzg14yLiwJHLa44uAJuM4H2omt0UP9vtSWlGn7TCoGk007cABN8AXQT3RHIpHYF1gMIyL5ukguUd8O7MRNZ4oBESzAZLCZs3qSfFkLFV/EmhVNxynLuhFWHdNOWJmDajsi5i3a/jdLFMP2KCZ1kWMGa1XrUcXl5kK8vL2ZAmNm43r6XgdMTAjLVllffIe2/41idCuGaHwy2BSjYo0W1wBt89LmdgSI2XCnNm3jzh2DtGIz/tPeo+1/shidqlsxoBhMik0xegp2ZGCRhqmTqKf3Y1g+TUcxGcHNdxdXt20byJ35Hqktvh1BbAsuFfOHB8GziQL+OVzZbFzcqzGhAcqAg3M+/Ohj+F40QvNp8vln8YrmRq+ATNPy8tRSCvd+6R5YogNYwTnIt35IpCvOhbwMZkJwTJmxHgNGYF/vGi/PqNDQ4YJnaiTFkAS86k+6Aw447MRlgL9XYwSYbcr25XNl24/OeCZraSg+j0LhE9h1C8rgQNbl6Z4ik+6AAwzWI3TzLm2rYPpLrnHGMl5DttFhBPOudOCVLa0BRpZgK50iMskhM17HyeZBJZSDM4BlrAtWcJhHq8TJtmM6U+gbnAHIw10ZFh1x6UwT8bIvGYz4tAZEH59KXWF2Xix7dTszRMTLLh3Mw1daA+j4nhLcQNkKEVfq0aG8GAzVLJWtOnSe0Qnd6WSkN8CimTEhMnqr7yrx6IjT7TLEEekNCLPnawtn9PNQHBK34dERp9tliCPSP5+wPVMDQLSk3QHZMD2fQj0LyZZb8Q9vspkn3IHQ9B5lBzbpHyhHWJI6pkN1pynpDRDdgagFli/pDuBp5lyy+1ZRd6gSqUDkecY1XApg0PXcHVqNLLMB38mex7vOTwmxqY5wX2TI6E7I5XamTCXMR7twX5dGR5ORjivM5Qd2htzZIKIveY+AetjJYbzjiWgc1NO4El4iy6qBIX94eeSNsmz6/dBpzURN6uLLCqb6KJj6DAQDZyl4owBBxgteFUlt0cMUDreJ2E95wcPY3fi4dw9nBSaZn9Loc4Aqr84xcyHDgI4ORnTgxQ/F6B4fTOklqXcg8uHuZ/ypMFGR2VpGE3M30anOeyH9aQC50AGlNf4x7UcG/wRXdWz39js0XhVuwz+L5yAvzrfN1cm0hrL926i7rxzGmW8MMLqLCmblcfm7YUdG/zqlAcqMbPQ1AF3Uf6K3DSHtCBJP08qF7zCvtr1j/WnzErh+0zxc9GuwwkX9x71tLEg9Xt+We/v60+kNeH3aWOrs+QI+OSC0Y4XwkmE9SzkTNuITkj68DrrIhqv91H1qCTL0JyH7gv4TAf4bCvrnckWzcaf+4047rQHKaB5gu+UxuE05WvnwlX148t5CwQmvRr59OeKGXsOQIHX/Wgm58+GEiLyCF29+m+xxa0cz6g8d6f8zEq/A30JAAM6YJGDMAAAAAElFTkSuQmCC"
    },
    ed29: function(t, e, o) {},
    f40f: function(t, e, o) {
        "use strict";
        /*!
 * better-scroll / better-scroll
 * (c) 2016-2021 ustbhuangyi
 * Released under the MIT License.
 */
        /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
        var s = function(t, e) {
            return s = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var o in e)
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
            }
            ,
            s(t, e)
        };
        function i(t, e) {
            function o() {
                this.constructor = t
            }
            s(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
            new o)
        }
        var r = function() {
            return r = Object.assign || function(t) {
                for (var e, o = 1, s = arguments.length; o < s; o++)
                    for (var i in e = arguments[o],
                    e)
                        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }
            ,
            r.apply(this, arguments)
        };
        function n(t, e, o, s) {
            function i(t) {
                return t instanceof o ? t : new o((function(e) {
                    e(t)
                }
                ))
            }
            return new (o || (o = Promise))((function(o, r) {
                function n(t) {
                    try {
                        h(s.next(t))
                    } catch (e) {
                        r(e)
                    }
                }
                function a(t) {
                    try {
                        h(s["throw"](t))
                    } catch (e) {
                        r(e)
                    }
                }
                function h(t) {
                    t.done ? o(t.value) : i(t.value).then(n, a)
                }
                h((s = s.apply(t, e || [])).next())
            }
            ))
        }
        function a(t, e) {
            var o, s, i, r, n = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" === typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function a(t) {
                return function(e) {
                    return h([t, e])
                }
            }
            function h(r) {
                if (o)
                    throw new TypeError("Generator is already executing.");
                while (n)
                    try {
                        if (o = 1,
                        s && (i = 2 & r[0] ? s["return"] : r[0] ? s["throw"] || ((i = s["return"]) && i.call(s),
                        0) : s.next) && !(i = i.call(s, r[1])).done)
                            return i;
                        switch (s = 0,
                        i && (r = [2 & r[0], i.value]),
                        r[0]) {
                        case 0:
                        case 1:
                            i = r;
                            break;
                        case 4:
                            return n.label++,
                            {
                                value: r[1],
                                done: !1
                            };
                        case 5:
                            n.label++,
                            s = r[1],
                            r = [0];
                            continue;
                        case 7:
                            r = n.ops.pop(),
                            n.trys.pop();
                            continue;
                        default:
                            if (i = n.trys,
                            !(i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                n = 0;
                                continue
                            }
                            if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                n.label = r[1];
                                break
                            }
                            if (6 === r[0] && n.label < i[1]) {
                                n.label = i[1],
                                i = r;
                                break
                            }
                            if (i && n.label < i[2]) {
                                n.label = i[2],
                                n.ops.push(r);
                                break
                            }
                            i[2] && n.ops.pop(),
                            n.trys.pop();
                            continue
                        }
                        r = e.call(t, n)
                    } catch (a) {
                        r = [6, a],
                        s = 0
                    } finally {
                        o = i = 0
                    }
                if (5 & r[0])
                    throw r[1];
                return {
                    value: r[0] ? r[1] : void 0,
                    done: !0
                }
            }
        }
        function h() {
            for (var t = 0, e = 0, o = arguments.length; e < o; e++)
                t += arguments[e].length;
            var s = Array(t)
              , i = 0;
            for (e = 0; e < o; e++)
                for (var r = arguments[e], n = 0, a = r.length; n < a; n++,
                i++)
                    s[i] = r[n];
            return s
        }
        var l = [{
            sourceKey: "scroller.scrollBehaviorX.currentPos",
            key: "x"
        }, {
            sourceKey: "scroller.scrollBehaviorY.currentPos",
            key: "y"
        }, {
            sourceKey: "scroller.scrollBehaviorX.hasScroll",
            key: "hasHorizontalScroll"
        }, {
            sourceKey: "scroller.scrollBehaviorY.hasScroll",
            key: "hasVerticalScroll"
        }, {
            sourceKey: "scroller.scrollBehaviorX.contentSize",
            key: "scrollerWidth"
        }, {
            sourceKey: "scroller.scrollBehaviorY.contentSize",
            key: "scrollerHeight"
        }, {
            sourceKey: "scroller.scrollBehaviorX.maxScrollPos",
            key: "maxScrollX"
        }, {
            sourceKey: "scroller.scrollBehaviorY.maxScrollPos",
            key: "maxScrollY"
        }, {
            sourceKey: "scroller.scrollBehaviorX.minScrollPos",
            key: "minScrollX"
        }, {
            sourceKey: "scroller.scrollBehaviorY.minScrollPos",
            key: "minScrollY"
        }, {
            sourceKey: "scroller.scrollBehaviorX.movingDirection",
            key: "movingDirectionX"
        }, {
            sourceKey: "scroller.scrollBehaviorY.movingDirection",
            key: "movingDirectionY"
        }, {
            sourceKey: "scroller.scrollBehaviorX.direction",
            key: "directionX"
        }, {
            sourceKey: "scroller.scrollBehaviorY.direction",
            key: "directionY"
        }, {
            sourceKey: "scroller.actions.enabled",
            key: "enabled"
        }, {
            sourceKey: "scroller.animater.pending",
            key: "pending"
        }, {
            sourceKey: "scroller.animater.stop",
            key: "stop"
        }, {
            sourceKey: "scroller.scrollTo",
            key: "scrollTo"
        }, {
            sourceKey: "scroller.scrollBy",
            key: "scrollBy"
        }, {
            sourceKey: "scroller.scrollToElement",
            key: "scrollToElement"
        }, {
            sourceKey: "scroller.resetPosition",
            key: "resetPosition"
        }];
        function c(t) {
            console.error("[BScroll warn]: " + t)
        }
        function p(t, e) {
            if (!t)
                throw new Error("[BScroll] " + e)
        }
        var u = "undefined" !== typeof window
          , d = u && navigator.userAgent.toLowerCase()
          , f = !(!d || !/wechatdevtools/.test(d))
          , g = d && d.indexOf("android") > 0
          , v = function() {
            if ("string" === typeof d) {
                var t = /os (\d\d?_\d(_\d)?)/
                  , e = t.exec(d);
                if (!e)
                    return !1;
                var o = e[1].split("_").map((function(t) {
                    return parseInt(t, 10)
                }
                ));
                return !!(13 === o[0] && o[1] >= 4)
            }
            return !1
        }()
          , y = !1;
        if (u) {
            var m = "test-passive";
            try {
                var k = {};
                Object.defineProperty(k, "passive", {
                    get: function() {
                        y = !0
                    }
                }),
                window.addEventListener(m, (function() {}
                ), k)
            } catch (ro) {}
        }
        function T() {
            return window.performance && window.performance.now && window.performance.timing ? window.performance.now() + window.performance.timing.navigationStart : +new Date
        }
        var S = function(t, e) {
            for (var o in e)
                t[o] = e[o];
            return t
        };
        function A(t) {
            return void 0 === t || null === t
        }
        function b(t, e) {
            return Math.sqrt(t * t + e * e)
        }
        function w(t, e, o) {
            return t < e ? e : t > o ? o : t
        }
        function P(t, e) {
            if (t.findIndex)
                return t.findIndex(e);
            var o = -1;
            return t.some((function(t, s, i) {
                var r = e(t, s, i);
                if (r)
                    return o = s,
                    r
            }
            )),
            o
        }
        var x = u && document.createElement("div").style
          , M = function() {
            if (!u)
                return !1;
            for (var t = [{
                key: "standard",
                value: "transform"
            }, {
                key: "webkit",
                value: "webkitTransform"
            }, {
                key: "Moz",
                value: "MozTransform"
            }, {
                key: "O",
                value: "OTransform"
            }, {
                key: "ms",
                value: "msTransform"
            }], e = 0, o = t; e < o.length; e++) {
                var s = o[e];
                if (void 0 !== x[s.value])
                    return s.key
            }
            return !1
        }();
        function B(t) {
            return !1 === M ? t : "standard" === M ? "transitionEnd" === t ? "transitionend" : t : M + t.charAt(0).toUpperCase() + t.substr(1)
        }
        function E(t) {
            return "string" === typeof t ? document.querySelector(t) : t
        }
        function O(t, e, o, s) {
            var i = y ? {
                passive: !1,
                capture: !!s
            } : !!s;
            t.addEventListener(e, o, i)
        }
        function Y(t, e, o, s) {
            t.removeEventListener(e, o, {
                capture: !!s
            })
        }
        function X(t) {
            var e = 0
              , o = 0;
            while (t)
                e -= t.offsetLeft,
                o -= t.offsetTop,
                t = t.offsetParent;
            return {
                left: e,
                top: o
            }
        }
        function C(t) {
            var e = t.getBoundingClientRect();
            return {
                left: -(e.left + window.pageXOffset),
                top: -(e.top + window.pageYOffset)
            }
        }
        var D = M && "standard" !== M ? "-" + M.toLowerCase() + "-" : ""
          , H = B("transform")
          , z = B("transition")
          , L = u && B("perspective")in x
          , F = u && ("ontouchstart"in window || f)
          , I = u && z in x
          , N = {
            transform: H,
            transition: z,
            transitionTimingFunction: B("transitionTimingFunction"),
            transitionDuration: B("transitionDuration"),
            transitionDelay: B("transitionDelay"),
            transformOrigin: B("transformOrigin"),
            transitionEnd: B("transitionEnd"),
            transitionProperty: B("transitionProperty")
        }
          , R = {
            touchstart: 1,
            touchmove: 1,
            touchend: 1,
            touchcancel: 1,
            mousedown: 2,
            mousemove: 2,
            mouseup: 2
        };
        function W(t) {
            if (t instanceof window.SVGElement) {
                var e = t.getBoundingClientRect();
                return {
                    top: e.top,
                    left: e.left,
                    width: e.width,
                    height: e.height
                }
            }
            return {
                top: t.offsetTop,
                left: t.offsetLeft,
                width: t.offsetWidth,
                height: t.offsetHeight
            }
        }
        function j(t, e) {
            for (var o in e)
                if (e[o].test(t[o]))
                    return !0;
            return !1
        }
        var K = j;
        function U(t, e) {
            var o = document.createEvent("Event");
            o.initEvent(e, !0, !0),
            o.pageX = t.pageX,
            o.pageY = t.pageY,
            t.target.dispatchEvent(o)
        }
        function Z(t, e) {
            var o;
            void 0 === e && (e = "click"),
            "mouseup" === t.type ? o = t : "touchend" !== t.type && "touchcancel" !== t.type || (o = t.changedTouches[0]);
            var s, i = {};
            o && (i.screenX = o.screenX || 0,
            i.screenY = o.screenY || 0,
            i.clientX = o.clientX || 0,
            i.clientY = o.clientY || 0);
            var n = !0
              , a = !0
              , h = t.ctrlKey
              , l = t.shiftKey
              , c = t.altKey
              , p = t.metaKey
              , u = {
                ctrlKey: h,
                shiftKey: l,
                altKey: c,
                metaKey: p
            };
            if ("undefined" !== typeof MouseEvent)
                try {
                    s = new MouseEvent(e,S(r({
                        bubbles: n,
                        cancelable: a
                    }, u), i))
                } catch (t) {
                    d()
                }
            else
                d();
            function d() {
                s = document.createEvent("Event"),
                s.initEvent(e, n, a),
                S(s, i)
            }
            s.forwardedTouchEvent = !0,
            s._constructed = !0,
            t.target.dispatchEvent(s)
        }
        function q(t) {
            Z(t, "dblclick")
        }
        function G(t, e) {
            var o = e.firstChild;
            o ? Q(t, o) : e.appendChild(t)
        }
        function Q(t, e) {
            var o = e.parentNode;
            o.insertBefore(t, e)
        }
        function V(t, e) {
            t.removeChild(e)
        }
        function J(t, e) {
            var o = new RegExp("(^|\\s)" + e + "(\\s|$)");
            return o.test(t.className)
        }
        function _(t) {
            return Array.prototype.slice.call(t, 0)
        }
        function $(t) {
            return {
                width: t.clientWidth,
                height: t.clientHeight
            }
        }
        var tt = {
            swipe: {
                style: "cubic-bezier(0.23, 1, 0.32, 1)",
                fn: function(t) {
                    return 1 + --t * t * t * t * t
                }
            },
            swipeBounce: {
                style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                fn: function(t) {
                    return t * (2 - t)
                }
            },
            bounce: {
                style: "cubic-bezier(0.165, 0.84, 0.44, 1)",
                fn: function(t) {
                    return 1 - --t * t * t * t
                }
            }
        }
          , et = 1e3 / 60
          , ot = u && window;
        function st() {}
        var it = function() {
            return u ? ot.requestAnimationFrame || ot.webkitRequestAnimationFrame || ot.mozRequestAnimationFrame || ot.oRequestAnimationFrame || function(t) {
                return window.setTimeout(t, t.interval || et)
            }
            : st
        }()
          , rt = function() {
            return u ? ot.cancelAnimationFrame || ot.webkitCancelAnimationFrame || ot.mozCancelAnimationFrame || ot.oCancelAnimationFrame || function(t) {
                window.clearTimeout(t)
            }
            : st
        }()
          , nt = function(t) {}
          , at = {
            enumerable: !0,
            configurable: !0,
            get: nt,
            set: nt
        }
          , ht = function(t, e) {
            for (var o = e.split("."), s = 0; s < o.length - 1; s++)
                if (t = t[o[s]],
                "object" !== typeof t || !t)
                    return;
            var i = o.pop();
            return "function" === typeof t[i] ? function() {
                return t[i].apply(t, arguments)
            }
            : t[i]
        }
          , lt = function(t, e, o) {
            for (var s, i = e.split("."), r = 0; r < i.length - 1; r++)
                s = i[r],
                t[s] || (t[s] = {}),
                t = t[s];
            t[i.pop()] = o
        };
        function ct(t, e, o) {
            at.get = function() {
                return ht(this, e)
            }
            ,
            at.set = function(t) {
                lt(this, e, t)
            }
            ,
            Object.defineProperty(t, o, at)
        }
        var pt = function() {
            function t(t) {
                this.events = {},
                this.eventTypes = {},
                this.registerType(t)
            }
            return t.prototype.on = function(t, e, o) {
                return void 0 === o && (o = this),
                this.hasType(t),
                this.events[t] || (this.events[t] = []),
                this.events[t].push([e, o]),
                this
            }
            ,
            t.prototype.once = function(t, e, o) {
                var s = this;
                void 0 === o && (o = this),
                this.hasType(t);
                var i = function() {
                    for (var r = [], n = 0; n < arguments.length; n++)
                        r[n] = arguments[n];
                    s.off(t, i);
                    var a = e.apply(o, r);
                    if (!0 === a)
                        return a
                };
                return i.fn = e,
                this.on(t, i),
                this
            }
            ,
            t.prototype.off = function(t, e) {
                if (!t && !e)
                    return this.events = {},
                    this;
                if (t) {
                    if (this.hasType(t),
                    !e)
                        return this.events[t] = [],
                        this;
                    var o = this.events[t];
                    if (!o)
                        return this;
                    var s = o.length;
                    while (s--)
                        (o[s][0] === e || o[s][0] && o[s][0].fn === e) && o.splice(s, 1);
                    return this
                }
            }
            ,
            t.prototype.trigger = function(t) {
                for (var e = [], o = 1; o < arguments.length; o++)
                    e[o - 1] = arguments[o];
                this.hasType(t);
                var s = this.events[t];
                if (s)
                    for (var i, r = s.length, n = h(s), a = 0; a < r; a++) {
                        var l = n[a]
                          , c = l[0]
                          , p = l[1];
                        if (c && (i = c.apply(p, e),
                        !0 === i))
                            return i
                    }
            }
            ,
            t.prototype.registerType = function(t) {
                var e = this;
                t.forEach((function(t) {
                    e.eventTypes[t] = t
                }
                ))
            }
            ,
            t.prototype.destroy = function() {
                this.events = {},
                this.eventTypes = {}
            }
            ,
            t.prototype.hasType = function(t) {
                var e = this.eventTypes
                  , o = e[t] === t;
                o || c('EventEmitter has used unknown event type: "' + t + '", should be oneof [' + Object.keys(e).map((function(t) {
                    return JSON.stringify(t)
                }
                )) + "]")
            }
            ,
            t
        }()
          , ut = function() {
            function t(t, e) {
                this.wrapper = t,
                this.events = e,
                this.addDOMEvents()
            }
            return t.prototype.destroy = function() {
                this.removeDOMEvents(),
                this.events = []
            }
            ,
            t.prototype.addDOMEvents = function() {
                this.handleDOMEvents(O)
            }
            ,
            t.prototype.removeDOMEvents = function() {
                this.handleDOMEvents(Y)
            }
            ,
            t.prototype.handleDOMEvents = function(t) {
                var e = this
                  , o = this.wrapper;
                this.events.forEach((function(s) {
                    t(o, s.name, e, !!s.capture)
                }
                ))
            }
            ,
            t.prototype.handleEvent = function(t) {
                var e = t.type;
                this.events.some((function(o) {
                    return o.name === e && (o.handler(t),
                    !0)
                }
                ))
            }
            ,
            t
        }()
          , dt = function() {
            function t() {}
            return t
        }()
          , ft = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.startX = 0,
                e.startY = 0,
                e.scrollX = !1,
                e.scrollY = !0,
                e.freeScroll = !1,
                e.directionLockThreshold = 0,
                e.eventPassthrough = "",
                e.click = !1,
                e.dblclick = !1,
                e.tap = "",
                e.bounce = {
                    top: !0,
                    bottom: !0,
                    left: !0,
                    right: !0
                },
                e.bounceTime = 800,
                e.momentum = !0,
                e.momentumLimitTime = 300,
                e.momentumLimitDistance = 15,
                e.swipeTime = 2500,
                e.swipeBounceTime = 500,
                e.deceleration = .0015,
                e.flickLimitTime = 200,
                e.flickLimitDistance = 100,
                e.resizePolling = 60,
                e.probeType = 0,
                e.stopPropagation = !1,
                e.preventDefault = !0,
                e.preventDefaultException = {
                    tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|AUDIO)$/
                },
                e.tagException = {
                    tagName: /^TEXTAREA$/
                },
                e.HWCompositing = !0,
                e.useTransition = !0,
                e.bindToWrapper = !1,
                e.bindToTarget = !1,
                e.disableMouse = F,
                e.disableTouch = !F,
                e.autoBlur = !0,
                e.autoEndDistance = 5,
                e.outOfBoundaryDampingFactor = 1 / 3,
                e.specifiedIndexAsContent = 0,
                e.quadrant = 1,
                e
            }
            return i(e, t),
            e.prototype.merge = function(t) {
                if (!t)
                    return this;
                for (var e in t)
                    "bounce" !== e ? this[e] = t[e] : this.bounce = this.resolveBounce(t[e]);
                return this
            }
            ,
            e.prototype.process = function() {
                return this.translateZ = this.HWCompositing && L ? " translateZ(1px)" : "",
                this.useTransition = this.useTransition && I,
                this.preventDefault = !this.eventPassthrough && this.preventDefault,
                this.scrollX = "horizontal" !== this.eventPassthrough && this.scrollX,
                this.scrollY = "vertical" !== this.eventPassthrough && this.scrollY,
                this.freeScroll = this.freeScroll && !this.eventPassthrough,
                this.scrollX = !!this.freeScroll || this.scrollX,
                this.scrollY = !!this.freeScroll || this.scrollY,
                this.directionLockThreshold = this.eventPassthrough ? 0 : this.directionLockThreshold,
                this
            }
            ,
            e.prototype.resolveBounce = function(t) {
                var e, o = {
                    top: !0,
                    right: !0,
                    bottom: !0,
                    left: !0
                }, s = {
                    top: !1,
                    right: !1,
                    bottom: !1,
                    left: !1
                };
                return e = "object" === typeof t ? S(o, t) : t ? o : s,
                e
            }
            ,
            e
        }(dt)
          , gt = function() {
            function t(t, e) {
                this.wrapper = t,
                this.options = e,
                this.hooks = new pt(["beforeStart", "start", "move", "end", "click"]),
                this.handleDOMEvents()
            }
            return t.prototype.handleDOMEvents = function() {
                var t = this.options
                  , e = t.bindToWrapper
                  , o = t.disableMouse
                  , s = t.disableTouch
                  , i = t.click
                  , r = this.wrapper
                  , n = e ? r : window
                  , a = []
                  , h = []
                  , l = !s
                  , c = !o;
                i && a.push({
                    name: "click",
                    handler: this.click.bind(this),
                    capture: !0
                }),
                l && (a.push({
                    name: "touchstart",
                    handler: this.start.bind(this)
                }),
                h.push({
                    name: "touchmove",
                    handler: this.move.bind(this)
                }, {
                    name: "touchend",
                    handler: this.end.bind(this)
                }, {
                    name: "touchcancel",
                    handler: this.end.bind(this)
                })),
                c && (a.push({
                    name: "mousedown",
                    handler: this.start.bind(this)
                }),
                h.push({
                    name: "mousemove",
                    handler: this.move.bind(this)
                }, {
                    name: "mouseup",
                    handler: this.end.bind(this)
                })),
                this.wrapperEventRegister = new ut(r,a),
                this.targetEventRegister = new ut(n,h)
            }
            ,
            t.prototype.beforeHandler = function(t, e) {
                var o = this.options
                  , s = o.preventDefault
                  , i = o.stopPropagation
                  , r = o.preventDefaultException
                  , n = {
                    start: function() {
                        return s && !j(t.target, r)
                    },
                    end: function() {
                        return s && !j(t.target, r)
                    },
                    move: function() {
                        return s
                    }
                };
                n[e]() && t.preventDefault(),
                i && t.stopPropagation()
            }
            ,
            t.prototype.setInitiated = function(t) {
                void 0 === t && (t = 0),
                this.initiated = t
            }
            ,
            t.prototype.start = function(t) {
                var e = R[t.type];
                if (!this.initiated || this.initiated === e)
                    if (this.setInitiated(e),
                    K(t.target, this.options.tagException))
                        this.setInitiated();
                    else if ((2 !== e || 0 === t.button) && !this.hooks.trigger(this.hooks.eventTypes.beforeStart, t)) {
                        this.beforeHandler(t, "start");
                        var o = t.touches ? t.touches[0] : t;
                        this.pointX = o.pageX,
                        this.pointY = o.pageY,
                        this.hooks.trigger(this.hooks.eventTypes.start, t)
                    }
            }
            ,
            t.prototype.move = function(t) {
                if (R[t.type] === this.initiated) {
                    this.beforeHandler(t, "move");
                    var e = t.touches ? t.touches[0] : t
                      , o = e.pageX - this.pointX
                      , s = e.pageY - this.pointY;
                    if (this.pointX = e.pageX,
                    this.pointY = e.pageY,
                    !this.hooks.trigger(this.hooks.eventTypes.move, {
                        deltaX: o,
                        deltaY: s,
                        e: t
                    })) {
                        var i = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft
                          , r = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
                          , n = this.pointX - i
                          , a = this.pointY - r
                          , h = this.options.autoEndDistance;
                        (n > document.documentElement.clientWidth - h || a > document.documentElement.clientHeight - h || n < h || a < h) && this.end(t)
                    }
                }
            }
            ,
            t.prototype.end = function(t) {
                R[t.type] === this.initiated && (this.setInitiated(),
                this.beforeHandler(t, "end"),
                this.hooks.trigger(this.hooks.eventTypes.end, t))
            }
            ,
            t.prototype.click = function(t) {
                this.hooks.trigger(this.hooks.eventTypes.click, t)
            }
            ,
            t.prototype.setContent = function(t) {
                t !== this.wrapper && (this.wrapper = t,
                this.rebindDOMEvents())
            }
            ,
            t.prototype.rebindDOMEvents = function() {
                this.wrapperEventRegister.destroy(),
                this.targetEventRegister.destroy(),
                this.handleDOMEvents()
            }
            ,
            t.prototype.destroy = function() {
                this.wrapperEventRegister.destroy(),
                this.targetEventRegister.destroy(),
                this.hooks.destroy()
            }
            ,
            t
        }()
          , vt = {
            x: ["translateX", "px"],
            y: ["translateY", "px"]
        }
          , yt = function() {
            function t(t) {
                this.setContent(t),
                this.hooks = new pt(["beforeTranslate", "translate"])
            }
            return t.prototype.getComputedPosition = function() {
                var t = window.getComputedStyle(this.content, null)
                  , e = t[N.transform].split(")")[0].split(", ")
                  , o = +(e[12] || e[4]) || 0
                  , s = +(e[13] || e[5]) || 0;
                return {
                    x: o,
                    y: s
                }
            }
            ,
            t.prototype.translate = function(t) {
                var e = [];
                Object.keys(t).forEach((function(o) {
                    if (vt[o]) {
                        var s = vt[o][0];
                        if (s) {
                            var i = vt[o][1]
                              , r = t[o];
                            e.push(s + "(" + r + i + ")")
                        }
                    }
                }
                )),
                this.hooks.trigger(this.hooks.eventTypes.beforeTranslate, e, t),
                this.style[N.transform] = e.join(" "),
                this.hooks.trigger(this.hooks.eventTypes.translate, t)
            }
            ,
            t.prototype.setContent = function(t) {
                this.content !== t && (this.content = t,
                this.style = t.style)
            }
            ,
            t.prototype.destroy = function() {
                this.hooks.destroy()
            }
            ,
            t
        }()
          , mt = function() {
            function t(t, e, o) {
                this.translater = e,
                this.options = o,
                this.timer = 0,
                this.hooks = new pt(["move", "end", "beforeForceStop", "forceStop", "callStop", "time", "timeFunction"]),
                this.setContent(t)
            }
            return t.prototype.translate = function(t) {
                this.translater.translate(t)
            }
            ,
            t.prototype.setPending = function(t) {
                this.pending = t
            }
            ,
            t.prototype.setForceStopped = function(t) {
                this.forceStopped = t
            }
            ,
            t.prototype.setCallStop = function(t) {
                this.callStopWhenPending = t
            }
            ,
            t.prototype.setContent = function(t) {
                this.content !== t && (this.content = t,
                this.style = t.style,
                this.stop())
            }
            ,
            t.prototype.clearTimer = function() {
                this.timer && (rt(this.timer),
                this.timer = 0)
            }
            ,
            t.prototype.destroy = function() {
                this.hooks.destroy(),
                rt(this.timer)
            }
            ,
            t
        }()
          , kt = function(t, e, o, s) {
            var i = function(t, e) {
                var o = t - e
                  , s = o > 0 ? -1 : o < 0 ? 1 : 0;
                return s
            }
              , r = i(e.x, t.x)
              , n = i(e.y, t.y)
              , a = o.x - s.x
              , h = o.y - s.y;
            return r * a <= 0 && n * h <= 0
        }
          , Tt = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i(e, t),
            e.prototype.startProbe = function(t, e) {
                var o = this
                  , s = t
                  , i = function() {
                    var r = o.translater.getComputedPosition();
                    kt(t, e, r, s) && o.hooks.trigger(o.hooks.eventTypes.move, r),
                    o.pending || (o.callStopWhenPending ? o.callStopWhenPending = !1 : o.hooks.trigger(o.hooks.eventTypes.end, r)),
                    s = r,
                    o.pending && (o.timer = it(i))
                };
                this.callStopWhenPending && this.setCallStop(!1),
                rt(this.timer),
                i()
            }
            ,
            e.prototype.transitionTime = function(t) {
                void 0 === t && (t = 0),
                this.style[N.transitionDuration] = t + "ms",
                this.hooks.trigger(this.hooks.eventTypes.time, t)
            }
            ,
            e.prototype.transitionTimingFunction = function(t) {
                this.style[N.transitionTimingFunction] = t,
                this.hooks.trigger(this.hooks.eventTypes.timeFunction, t)
            }
            ,
            e.prototype.transitionProperty = function() {
                this.style[N.transitionProperty] = N.transform
            }
            ,
            e.prototype.move = function(t, e, o, s) {
                this.setPending(o > 0),
                this.transitionTimingFunction(s),
                this.transitionProperty(),
                this.transitionTime(o),
                this.translate(e);
                var i = 3 === this.options.probeType;
                o && i && this.startProbe(t, e),
                o || (this._reflow = this.content.offsetHeight,
                i && this.hooks.trigger(this.hooks.eventTypes.move, e),
                this.hooks.trigger(this.hooks.eventTypes.end, e))
            }
            ,
            e.prototype.doStop = function() {
                var t = this.pending;
                if (this.setForceStopped(!1),
                this.setCallStop(!1),
                t) {
                    this.setPending(!1),
                    rt(this.timer);
                    var e = this.translater.getComputedPosition()
                      , o = e.x
                      , s = e.y;
                    this.transitionTime(),
                    this.translate({
                        x: o,
                        y: s
                    }),
                    this.setForceStopped(!0),
                    this.setCallStop(!0),
                    this.hooks.trigger(this.hooks.eventTypes.forceStop, {
                        x: o,
                        y: s
                    })
                }
                return t
            }
            ,
            e.prototype.stop = function() {
                var t = this.doStop();
                t && this.hooks.trigger(this.hooks.eventTypes.callStop)
            }
            ,
            e
        }(mt)
          , St = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i(e, t),
            e.prototype.move = function(t, e, o, s) {
                if (!o)
                    return this.translate(e),
                    3 === this.options.probeType && this.hooks.trigger(this.hooks.eventTypes.move, e),
                    void this.hooks.trigger(this.hooks.eventTypes.end, e);
                this.animate(t, e, o, s)
            }
            ,
            e.prototype.animate = function(t, e, o, s) {
                var i = this
                  , r = T()
                  , n = r + o
                  , a = 3 === this.options.probeType
                  , h = function() {
                    var l = T();
                    if (l >= n)
                        return i.translate(e),
                        a && i.hooks.trigger(i.hooks.eventTypes.move, e),
                        void i.hooks.trigger(i.hooks.eventTypes.end, e);
                    l = (l - r) / o;
                    var c = s(l)
                      , p = {};
                    Object.keys(e).forEach((function(o) {
                        var s = t[o]
                          , i = e[o];
                        p[o] = (i - s) * c + s
                    }
                    )),
                    i.translate(p),
                    a && i.hooks.trigger(i.hooks.eventTypes.move, p),
                    i.pending && (i.timer = it(h)),
                    i.pending || (i.callStopWhenPending ? i.callStopWhenPending = !1 : i.hooks.trigger(i.hooks.eventTypes.end, e))
                };
                this.setPending(!0),
                this.callStopWhenPending && this.setCallStop(!1),
                rt(this.timer),
                h()
            }
            ,
            e.prototype.doStop = function() {
                var t = this.pending;
                if (this.setForceStopped(!1),
                this.setCallStop(!1),
                t) {
                    this.setPending(!1),
                    rt(this.timer);
                    var e = this.translater.getComputedPosition();
                    this.setForceStopped(!0),
                    this.setCallStop(!0),
                    this.hooks.trigger(this.hooks.eventTypes.forceStop, e)
                }
                return t
            }
            ,
            e.prototype.stop = function() {
                var t = this.doStop();
                t && this.hooks.trigger(this.hooks.eventTypes.callStop)
            }
            ,
            e
        }(mt);
        function At(t, e, o) {
            var s = o.useTransition
              , i = {};
            return Object.defineProperty(i, "probeType", {
                enumerable: !0,
                configurable: !1,
                get: function() {
                    return o.probeType
                }
            }),
            s ? new Tt(t,e,i) : new St(t,e,i)
        }
        var bt, wt, Pt, xt, Mt = function() {
            function t(t, e, o) {
                this.wrapper = t,
                this.options = o,
                this.hooks = new pt(["beforeComputeBoundary", "computeBoundary", "momentum", "end", "ignoreHasScroll"]),
                this.refresh(e)
            }
            return t.prototype.start = function() {
                this.dist = 0,
                this.setMovingDirection(0),
                this.setDirection(0)
            }
            ,
            t.prototype.move = function(t) {
                return t = this.hasScroll ? t : 0,
                this.setMovingDirection(t),
                this.performDampingAlgorithm(t, this.options.outOfBoundaryDampingFactor)
            }
            ,
            t.prototype.setMovingDirection = function(t) {
                this.movingDirection = t > 0 ? -1 : t < 0 ? 1 : 0
            }
            ,
            t.prototype.setDirection = function(t) {
                this.direction = t > 0 ? -1 : t < 0 ? 1 : 0
            }
            ,
            t.prototype.performDampingAlgorithm = function(t, e) {
                var o = this.currentPos + t;
                return (o > this.minScrollPos || o < this.maxScrollPos) && (o = o > this.minScrollPos && this.options.bounces[0] || o < this.maxScrollPos && this.options.bounces[1] ? this.currentPos + t * e : o > this.minScrollPos ? this.minScrollPos : this.maxScrollPos),
                o
            }
            ,
            t.prototype.end = function(t) {
                var e = {
                    duration: 0
                }
                  , o = Math.abs(this.currentPos - this.startPos);
                if (this.options.momentum && t < this.options.momentumLimitTime && o > this.options.momentumLimitDistance) {
                    var s = -1 === this.direction && this.options.bounces[0] || 1 === this.direction && this.options.bounces[1] ? this.wrapperSize : 0;
                    e = this.hasScroll ? this.momentum(this.currentPos, this.startPos, t, this.maxScrollPos, this.minScrollPos, s, this.options) : {
                        destination: this.currentPos,
                        duration: 0
                    }
                } else
                    this.hooks.trigger(this.hooks.eventTypes.end, e);
                return e
            }
            ,
            t.prototype.momentum = function(t, e, o, s, i, r, n) {
                void 0 === n && (n = this.options);
                var a = t - e
                  , h = Math.abs(a) / o
                  , l = n.deceleration
                  , c = n.swipeBounceTime
                  , p = n.swipeTime
                  , u = Math.min(p, 2 * h / l)
                  , d = {
                    destination: t + h * h / l * (a < 0 ? -1 : 1),
                    duration: u,
                    rate: 15
                };
                return this.hooks.trigger(this.hooks.eventTypes.momentum, d, a),
                d.destination < s ? (d.destination = r ? Math.max(s - r / 4, s - r / d.rate * h) : s,
                d.duration = c) : d.destination > i && (d.destination = r ? Math.min(i + r / 4, i + r / d.rate * h) : i,
                d.duration = c),
                d.destination = Math.round(d.destination),
                d
            }
            ,
            t.prototype.updateDirection = function() {
                var t = this.currentPos - this.absStartPos;
                this.setDirection(t)
            }
            ,
            t.prototype.refresh = function(t) {
                var e = this.options.rect
                  , o = e.size
                  , s = e.position
                  , i = "static" === window.getComputedStyle(this.wrapper, null).position
                  , r = W(this.wrapper);
                this.wrapperSize = this.wrapper["width" === o ? "clientWidth" : "clientHeight"],
                this.setContent(t);
                var n = W(this.content);
                this.contentSize = n[o],
                this.relativeOffset = n[s],
                i && (this.relativeOffset -= r[s]),
                this.computeBoundary(),
                this.setDirection(0)
            }
            ,
            t.prototype.setContent = function(t) {
                t !== this.content && (this.content = t,
                this.resetState())
            }
            ,
            t.prototype.resetState = function() {
                this.currentPos = 0,
                this.startPos = 0,
                this.dist = 0,
                this.setDirection(0),
                this.setMovingDirection(0),
                this.resetStartPos()
            }
            ,
            t.prototype.computeBoundary = function() {
                this.hooks.trigger(this.hooks.eventTypes.beforeComputeBoundary);
                var t = {
                    minScrollPos: 0,
                    maxScrollPos: this.wrapperSize - this.contentSize
                };
                t.maxScrollPos < 0 && (t.maxScrollPos -= this.relativeOffset,
                0 === this.options.specifiedIndexAsContent && (t.minScrollPos = -this.relativeOffset)),
                this.hooks.trigger(this.hooks.eventTypes.computeBoundary, t),
                this.minScrollPos = t.minScrollPos,
                this.maxScrollPos = t.maxScrollPos,
                this.hasScroll = this.options.scrollable && this.maxScrollPos < this.minScrollPos,
                !this.hasScroll && this.minScrollPos < this.maxScrollPos && (this.maxScrollPos = this.minScrollPos,
                this.contentSize = this.wrapperSize)
            }
            ,
            t.prototype.updatePosition = function(t) {
                this.currentPos = t
            }
            ,
            t.prototype.getCurrentPos = function() {
                return this.currentPos
            }
            ,
            t.prototype.checkInBoundary = function() {
                var t = this.adjustPosition(this.currentPos)
                  , e = t === this.getCurrentPos();
                return {
                    position: t,
                    inBoundary: e
                }
            }
            ,
            t.prototype.adjustPosition = function(t) {
                return this.hasScroll || this.hooks.trigger(this.hooks.eventTypes.ignoreHasScroll) ? t > this.minScrollPos ? t = this.minScrollPos : t < this.maxScrollPos && (t = this.maxScrollPos) : t = this.minScrollPos,
                t
            }
            ,
            t.prototype.updateStartPos = function() {
                this.startPos = this.currentPos
            }
            ,
            t.prototype.updateAbsStartPos = function() {
                this.absStartPos = this.currentPos
            }
            ,
            t.prototype.resetStartPos = function() {
                this.updateStartPos(),
                this.updateAbsStartPos()
            }
            ,
            t.prototype.getAbsDist = function(t) {
                return this.dist += t,
                Math.abs(this.dist)
            }
            ,
            t.prototype.destroy = function() {
                this.hooks.destroy()
            }
            ,
            t
        }(), Bt = (bt = {},
        bt["yes"] = function(t) {
            return !0
        }
        ,
        bt["no"] = function(t) {
            return t.preventDefault(),
            !1
        }
        ,
        bt), Et = (wt = {},
        wt["horizontal"] = (Pt = {},
        Pt["yes"] = "horizontal",
        Pt["no"] = "vertical",
        Pt),
        wt["vertical"] = (xt = {},
        xt["yes"] = "vertical",
        xt["no"] = "horizontal",
        xt),
        wt), Ot = function() {
            function t(t, e, o) {
                this.directionLockThreshold = t,
                this.freeScroll = e,
                this.eventPassthrough = o,
                this.reset()
            }
            return t.prototype.reset = function() {
                this.directionLocked = ""
            }
            ,
            t.prototype.checkMovingDirection = function(t, e, o) {
                return this.computeDirectionLock(t, e),
                this.handleEventPassthrough(o)
            }
            ,
            t.prototype.adjustDelta = function(t, e) {
                return "horizontal" === this.directionLocked ? e = 0 : "vertical" === this.directionLocked && (t = 0),
                {
                    deltaX: t,
                    deltaY: e
                }
            }
            ,
            t.prototype.computeDirectionLock = function(t, e) {
                "" !== this.directionLocked || this.freeScroll || (t > e + this.directionLockThreshold ? this.directionLocked = "horizontal" : e >= t + this.directionLockThreshold ? this.directionLocked = "vertical" : this.directionLocked = "none")
            }
            ,
            t.prototype.handleEventPassthrough = function(t) {
                var e = Et[this.directionLocked];
                if (e) {
                    if (this.eventPassthrough === e["yes"])
                        return Bt["yes"](t);
                    if (this.eventPassthrough === e["no"])
                        return Bt["no"](t)
                }
                return !1
            }
            ,
            t
        }(), Yt = function(t, e, o) {
            return 2 === o ? [e, -t] : 3 === o ? [-t, -e] : 4 === o ? [-e, t] : [t, e]
        }, Xt = function() {
            function t(t, e, o, s, i) {
                this.hooks = new pt(["start", "beforeMove", "scrollStart", "scroll", "beforeEnd", "end", "scrollEnd", "contentNotMoved", "detectMovingDirection", "coordinateTransformation"]),
                this.scrollBehaviorX = t,
                this.scrollBehaviorY = e,
                this.actionsHandler = o,
                this.animater = s,
                this.options = i,
                this.directionLockAction = new Ot(i.directionLockThreshold,i.freeScroll,i.eventPassthrough),
                this.enabled = !0,
                this.bindActionsHandler()
            }
            return t.prototype.bindActionsHandler = function() {
                var t = this;
                this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.start, (function(e) {
                    return !t.enabled || t.handleStart(e)
                }
                )),
                this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.move, (function(e) {
                    var o = e.deltaX
                      , s = e.deltaY
                      , i = e.e;
                    if (!t.enabled)
                        return !0;
                    var r = Yt(o, s, t.options.quadrant)
                      , n = r[0]
                      , a = r[1]
                      , h = {
                        deltaX: n,
                        deltaY: a
                    };
                    return t.hooks.trigger(t.hooks.eventTypes.coordinateTransformation, h),
                    t.handleMove(h.deltaX, h.deltaY, i)
                }
                )),
                this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.end, (function(e) {
                    return !t.enabled || t.handleEnd(e)
                }
                )),
                this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.click, (function(e) {
                    t.enabled && !e._constructed && t.handleClick(e)
                }
                ))
            }
            ,
            t.prototype.handleStart = function(t) {
                var e = T();
                this.fingerMoved = !1,
                this.contentMoved = !1,
                this.startTime = e,
                this.directionLockAction.reset(),
                this.scrollBehaviorX.start(),
                this.scrollBehaviorY.start(),
                this.animater.doStop(),
                this.scrollBehaviorX.resetStartPos(),
                this.scrollBehaviorY.resetStartPos(),
                this.hooks.trigger(this.hooks.eventTypes.start, t)
            }
            ,
            t.prototype.handleMove = function(t, e, o) {
                if (!this.hooks.trigger(this.hooks.eventTypes.beforeMove, o)) {
                    var s = this.scrollBehaviorX.getAbsDist(t)
                      , i = this.scrollBehaviorY.getAbsDist(e)
                      , r = T();
                    if (this.checkMomentum(s, i, r))
                        return !0;
                    if (this.directionLockAction.checkMovingDirection(s, i, o))
                        return this.actionsHandler.setInitiated(),
                        !0;
                    var n = this.directionLockAction.adjustDelta(t, e)
                      , a = this.scrollBehaviorX.getCurrentPos()
                      , h = this.scrollBehaviorX.move(n.deltaX)
                      , l = this.scrollBehaviorY.getCurrentPos()
                      , c = this.scrollBehaviorY.move(n.deltaY);
                    if (!this.hooks.trigger(this.hooks.eventTypes.detectMovingDirection)) {
                        this.fingerMoved || (this.fingerMoved = !0);
                        var p = h !== a || c !== l;
                        this.contentMoved || p || this.hooks.trigger(this.hooks.eventTypes.contentNotMoved),
                        !this.contentMoved && p && (this.contentMoved = !0,
                        this.hooks.trigger(this.hooks.eventTypes.scrollStart)),
                        this.contentMoved && p && (this.animater.translate({
                            x: h,
                            y: c
                        }),
                        this.dispatchScroll(r))
                    }
                }
            }
            ,
            t.prototype.dispatchScroll = function(t) {
                t - this.startTime > this.options.momentumLimitTime && (this.startTime = t,
                this.scrollBehaviorX.updateStartPos(),
                this.scrollBehaviorY.updateStartPos(),
                1 === this.options.probeType && this.hooks.trigger(this.hooks.eventTypes.scroll, this.getCurrentPos())),
                this.options.probeType > 1 && this.hooks.trigger(this.hooks.eventTypes.scroll, this.getCurrentPos())
            }
            ,
            t.prototype.checkMomentum = function(t, e, o) {
                return o - this.endTime > this.options.momentumLimitTime && e < this.options.momentumLimitDistance && t < this.options.momentumLimitDistance
            }
            ,
            t.prototype.handleEnd = function(t) {
                if (!this.hooks.trigger(this.hooks.eventTypes.beforeEnd, t)) {
                    var e = this.getCurrentPos();
                    if (this.scrollBehaviorX.updateDirection(),
                    this.scrollBehaviorY.updateDirection(),
                    this.hooks.trigger(this.hooks.eventTypes.end, t, e))
                        return !0;
                    e = this.ensureIntegerPos(e),
                    this.animater.translate(e),
                    this.endTime = T();
                    var o = this.endTime - this.startTime;
                    this.hooks.trigger(this.hooks.eventTypes.scrollEnd, e, o)
                }
            }
            ,
            t.prototype.ensureIntegerPos = function(t) {
                this.ensuringInteger = !0;
                var e = t.x
                  , o = t.y
                  , s = this.scrollBehaviorX
                  , i = s.minScrollPos
                  , r = s.maxScrollPos
                  , n = this.scrollBehaviorY
                  , a = n.minScrollPos
                  , h = n.maxScrollPos;
                return e = e > 0 ? Math.ceil(e) : Math.floor(e),
                o = o > 0 ? Math.ceil(o) : Math.floor(o),
                e = w(e, r, i),
                o = w(o, h, a),
                {
                    x: e,
                    y: o
                }
            }
            ,
            t.prototype.handleClick = function(t) {
                j(t.target, this.options.preventDefaultException) || (t.preventDefault(),
                t.stopPropagation())
            }
            ,
            t.prototype.getCurrentPos = function() {
                return {
                    x: this.scrollBehaviorX.getCurrentPos(),
                    y: this.scrollBehaviorY.getCurrentPos()
                }
            }
            ,
            t.prototype.refresh = function() {
                this.endTime = 0
            }
            ,
            t.prototype.destroy = function() {
                this.hooks.destroy()
            }
            ,
            t
        }();
        function Ct(t) {
            var e = ["click", "bindToWrapper", "disableMouse", "disableTouch", "preventDefault", "stopPropagation", "tagException", "preventDefaultException", "autoEndDistance"].reduce((function(e, o) {
                return e[o] = t[o],
                e
            }
            ), {});
            return e
        }
        function Dt(t, e, o, s) {
            var i = ["momentum", "momentumLimitTime", "momentumLimitDistance", "deceleration", "swipeBounceTime", "swipeTime", "outOfBoundaryDampingFactor", "specifiedIndexAsContent"].reduce((function(e, o) {
                return e[o] = t[o],
                e
            }
            ), {});
            return i.scrollable = !!t[e],
            i.bounces = o,
            i.rect = s,
            i
        }
        function Ht(t, e, o) {
            o.forEach((function(o) {
                var s, i;
                "string" === typeof o ? s = i = o : (s = o.source,
                i = o.target),
                t.on(s, (function() {
                    for (var t = [], o = 0; o < arguments.length; o++)
                        t[o] = arguments[o];
                    return e.trigger.apply(e, h([i], t))
                }
                ))
            }
            ))
        }
        function zt(t, e) {
            for (var o = Object.keys(t), s = 0, i = o; s < i.length; s++) {
                var r = i[s];
                if (t[r] !== e[r])
                    return !1
            }
            return !0
        }
        var Lt = 1
          , Ft = function() {
            function t(t, e, o) {
                this.wrapper = t,
                this.content = e,
                this.resizeTimeout = 0,
                this.hooks = new pt(["beforeStart", "beforeMove", "beforeScrollStart", "scrollStart", "scroll", "beforeEnd", "scrollEnd", "resize", "touchEnd", "end", "flick", "scrollCancel", "momentum", "scrollTo", "minDistanceScroll", "scrollToElement", "beforeRefresh"]),
                this.options = o;
                var s = this.options.bounce
                  , i = s.left
                  , r = s.right
                  , n = s.top
                  , a = s.bottom;
                this.scrollBehaviorX = new Mt(t,e,Dt(o, "scrollX", [i, r], {
                    size: "width",
                    position: "left"
                })),
                this.scrollBehaviorY = new Mt(t,e,Dt(o, "scrollY", [n, a], {
                    size: "height",
                    position: "top"
                })),
                this.translater = new yt(this.content),
                this.animater = At(this.content, this.translater, this.options),
                this.actionsHandler = new gt(this.options.bindToTarget ? this.content : t,Ct(this.options)),
                this.actions = new Xt(this.scrollBehaviorX,this.scrollBehaviorY,this.actionsHandler,this.animater,this.options);
                var h = this.resize.bind(this);
                this.resizeRegister = new ut(window,[{
                    name: "orientationchange",
                    handler: h
                }, {
                    name: "resize",
                    handler: h
                }]),
                this.registerTransitionEnd(),
                this.init()
            }
            return t.prototype.init = function() {
                var t = this;
                this.bindTranslater(),
                this.bindAnimater(),
                this.bindActions(),
                this.hooks.on(this.hooks.eventTypes.scrollEnd, (function() {
                    t.togglePointerEvents(!0)
                }
                ))
            }
            ,
            t.prototype.registerTransitionEnd = function() {
                this.transitionEndRegister = new ut(this.content,[{
                    name: N.transitionEnd,
                    handler: this.transitionEnd.bind(this)
                }])
            }
            ,
            t.prototype.bindTranslater = function() {
                var t = this
                  , e = this.translater.hooks;
                e.on(e.eventTypes.beforeTranslate, (function(e) {
                    t.options.translateZ && e.push(t.options.translateZ)
                }
                )),
                e.on(e.eventTypes.translate, (function(e) {
                    var o = t.getCurrentPos();
                    t.updatePositions(e),
                    !0 !== t.actions.ensuringInteger ? e.x === o.x && e.y === o.y || t.togglePointerEvents(!1) : t.actions.ensuringInteger = !1
                }
                ))
            }
            ,
            t.prototype.bindAnimater = function() {
                var t = this;
                this.animater.hooks.on(this.animater.hooks.eventTypes.end, (function(e) {
                    t.resetPosition(t.options.bounceTime) || (t.animater.setPending(!1),
                    t.hooks.trigger(t.hooks.eventTypes.scrollEnd, e))
                }
                )),
                Ht(this.animater.hooks, this.hooks, [{
                    source: this.animater.hooks.eventTypes.move,
                    target: this.hooks.eventTypes.scroll
                }, {
                    source: this.animater.hooks.eventTypes.forceStop,
                    target: this.hooks.eventTypes.scrollEnd
                }])
            }
            ,
            t.prototype.bindActions = function() {
                var t = this
                  , e = this.actions;
                Ht(e.hooks, this.hooks, [{
                    source: e.hooks.eventTypes.start,
                    target: this.hooks.eventTypes.beforeStart
                }, {
                    source: e.hooks.eventTypes.start,
                    target: this.hooks.eventTypes.beforeScrollStart
                }, {
                    source: e.hooks.eventTypes.beforeMove,
                    target: this.hooks.eventTypes.beforeMove
                }, {
                    source: e.hooks.eventTypes.scrollStart,
                    target: this.hooks.eventTypes.scrollStart
                }, {
                    source: e.hooks.eventTypes.scroll,
                    target: this.hooks.eventTypes.scroll
                }, {
                    source: e.hooks.eventTypes.beforeEnd,
                    target: this.hooks.eventTypes.beforeEnd
                }]),
                e.hooks.on(e.hooks.eventTypes.end, (function(o, s) {
                    return t.hooks.trigger(t.hooks.eventTypes.touchEnd, s),
                    !!t.hooks.trigger(t.hooks.eventTypes.end, s) || (!(e.fingerMoved || (t.hooks.trigger(t.hooks.eventTypes.scrollCancel),
                    !t.checkClick(o))) || (t.resetPosition(t.options.bounceTime, tt.bounce) ? (t.animater.setForceStopped(!1),
                    !0) : void 0))
                }
                )),
                e.hooks.on(e.hooks.eventTypes.scrollEnd, (function(o, s) {
                    var i = Math.abs(o.x - t.scrollBehaviorX.startPos)
                      , r = Math.abs(o.y - t.scrollBehaviorY.startPos);
                    if (t.checkFlick(s, i, r))
                        return t.animater.setForceStopped(!1),
                        void t.hooks.trigger(t.hooks.eventTypes.flick);
                    t.momentum(o, s) ? t.animater.setForceStopped(!1) : (e.contentMoved && t.hooks.trigger(t.hooks.eventTypes.scrollEnd, o),
                    t.animater.forceStopped && t.animater.setForceStopped(!1))
                }
                ))
            }
            ,
            t.prototype.checkFlick = function(t, e, o) {
                var s = 1;
                if (this.hooks.events.flick.length > 1 && t < this.options.flickLimitTime && e < this.options.flickLimitDistance && o < this.options.flickLimitDistance && (o > s || e > s))
                    return !0
            }
            ,
            t.prototype.momentum = function(t, e) {
                var o = {
                    time: 0,
                    easing: tt.swiper,
                    newX: t.x,
                    newY: t.y
                }
                  , s = this.scrollBehaviorX.end(e)
                  , i = this.scrollBehaviorY.end(e);
                if (o.newX = A(s.destination) ? o.newX : s.destination,
                o.newY = A(i.destination) ? o.newY : i.destination,
                o.time = Math.max(s.duration, i.duration),
                this.hooks.trigger(this.hooks.eventTypes.momentum, o, this),
                o.newX !== t.x || o.newY !== t.y)
                    return (o.newX > this.scrollBehaviorX.minScrollPos || o.newX < this.scrollBehaviorX.maxScrollPos || o.newY > this.scrollBehaviorY.minScrollPos || o.newY < this.scrollBehaviorY.maxScrollPos) && (o.easing = tt.swipeBounce),
                    this.scrollTo(o.newX, o.newY, o.time, o.easing),
                    !0
            }
            ,
            t.prototype.checkClick = function(t) {
                var e = {
                    preventClick: this.animater.forceStopped
                };
                if (this.hooks.trigger(this.hooks.eventTypes.checkClick))
                    return this.animater.setForceStopped(!1),
                    !0;
                if (!e.preventClick) {
                    var o = this.options.dblclick
                      , s = !1;
                    if (o && this.lastClickTime) {
                        var i = o.delay
                          , r = void 0 === i ? 300 : i;
                        T() - this.lastClickTime < r && (s = !0,
                        q(t))
                    }
                    return this.options.tap && U(t, this.options.tap),
                    this.options.click && !j(t.target, this.options.preventDefaultException) && Z(t),
                    this.lastClickTime = s ? null : T(),
                    !0
                }
                return !1
            }
            ,
            t.prototype.resize = function() {
                var t = this;
                this.actions.enabled && (g && (this.wrapper.scrollTop = 0),
                clearTimeout(this.resizeTimeout),
                this.resizeTimeout = window.setTimeout((function() {
                    t.hooks.trigger(t.hooks.eventTypes.resize)
                }
                ), this.options.resizePolling))
            }
            ,
            t.prototype.transitionEnd = function(t) {
                if (t.target === this.content && this.animater.pending) {
                    var e = this.animater;
                    e.transitionTime(),
                    this.resetPosition(this.options.bounceTime, tt.bounce) || (this.animater.setPending(!1),
                    3 !== this.options.probeType && this.hooks.trigger(this.hooks.eventTypes.scrollEnd, this.getCurrentPos()))
                }
            }
            ,
            t.prototype.togglePointerEvents = function(t) {
                void 0 === t && (t = !0);
                for (var e = this.content.children.length ? this.content.children : [this.content], o = t ? "auto" : "none", s = 0; s < e.length; s++) {
                    var i = e[s];
                    i.isBScrollContainer || (i.style.pointerEvents = o)
                }
            }
            ,
            t.prototype.refresh = function(t) {
                var e = this.setContent(t);
                this.hooks.trigger(this.hooks.eventTypes.beforeRefresh),
                this.scrollBehaviorX.refresh(t),
                this.scrollBehaviorY.refresh(t),
                e && (this.translater.setContent(t),
                this.animater.setContent(t),
                this.transitionEndRegister.destroy(),
                this.registerTransitionEnd(),
                this.options.bindToTarget && this.actionsHandler.setContent(t)),
                this.actions.refresh(),
                this.wrapperOffset = X(this.wrapper)
            }
            ,
            t.prototype.setContent = function(t) {
                var e = t !== this.content;
                return e && (this.content = t),
                e
            }
            ,
            t.prototype.scrollBy = function(t, e, o, s) {
                void 0 === o && (o = 0);
                var i = this.getCurrentPos()
                  , r = i.x
                  , n = i.y;
                s = s || tt.bounce,
                t += r,
                e += n,
                this.scrollTo(t, e, o, s)
            }
            ,
            t.prototype.scrollTo = function(t, e, o, s, i) {
                void 0 === o && (o = 0),
                void 0 === s && (s = tt.bounce),
                void 0 === i && (i = {
                    start: {},
                    end: {}
                });
                var n = this.options.useTransition ? s.style : s.fn
                  , a = this.getCurrentPos()
                  , h = r({
                    x: a.x,
                    y: a.y
                }, i.start)
                  , l = r({
                    x: t,
                    y: e
                }, i.end);
                if (this.hooks.trigger(this.hooks.eventTypes.scrollTo, l),
                !zt(h, l)) {
                    var c = Math.abs(l.x - h.x)
                      , p = Math.abs(l.y - h.y);
                    c < Lt && p < Lt && (o = 0,
                    this.hooks.trigger(this.hooks.eventTypes.minDistanceScroll)),
                    this.animater.move(h, l, o, n)
                }
            }
            ,
            t.prototype.scrollToElement = function(t, e, o, s, i) {
                var r = E(t)
                  , n = X(r)
                  , a = function(t, e, o) {
                    return "number" === typeof t ? t : t ? Math.round(e / 2 - o / 2) : 0
                };
                o = a(o, r.offsetWidth, this.wrapper.offsetWidth),
                s = a(s, r.offsetHeight, this.wrapper.offsetHeight);
                var h = function(t, e, o, s) {
                    return t -= e,
                    t = s.adjustPosition(t - o),
                    t
                };
                n.left = h(n.left, this.wrapperOffset.left, o, this.scrollBehaviorX),
                n.top = h(n.top, this.wrapperOffset.top, s, this.scrollBehaviorY),
                this.hooks.trigger(this.hooks.eventTypes.scrollToElement, r, n) || this.scrollTo(n.left, n.top, e, i)
            }
            ,
            t.prototype.resetPosition = function(t, e) {
                void 0 === t && (t = 0),
                void 0 === e && (e = tt.bounce);
                var o = this.scrollBehaviorX.checkInBoundary()
                  , s = o.position
                  , i = o.inBoundary
                  , r = this.scrollBehaviorY.checkInBoundary()
                  , n = r.position
                  , a = r.inBoundary;
                return (!i || !a) && (v && this.reflow(),
                this.scrollTo(s, n, t, e),
                !0)
            }
            ,
            t.prototype.reflow = function() {
                this._reflow = this.content.offsetHeight
            }
            ,
            t.prototype.updatePositions = function(t) {
                this.scrollBehaviorX.updatePosition(t.x),
                this.scrollBehaviorY.updatePosition(t.y)
            }
            ,
            t.prototype.getCurrentPos = function() {
                return this.actions.getCurrentPos()
            }
            ,
            t.prototype.enable = function() {
                this.actions.enabled = !0
            }
            ,
            t.prototype.disable = function() {
                rt(this.animater.timer),
                this.actions.enabled = !1
            }
            ,
            t.prototype.destroy = function() {
                var t = this
                  , e = ["resizeRegister", "transitionEndRegister", "actionsHandler", "actions", "hooks", "animater", "translater", "scrollBehaviorX", "scrollBehaviorY"];
                e.forEach((function(e) {
                    return t[e].destroy()
                }
                ))
            }
            ,
            t
        }()
          , It = function(t) {
            function e(e, o) {
                var s = t.call(this, ["refresh", "contentChanged", "enable", "disable", "beforeScrollStart", "scrollStart", "scroll", "scrollEnd", "scrollCancel", "touchEnd", "flick", "destroy"]) || this
                  , i = E(e);
                return i ? (s.plugins = {},
                s.options = (new ft).merge(o).process(),
                s.setContent(i).valid ? (s.hooks = new pt(["refresh", "enable", "disable", "destroy", "beforeInitialScrollTo", "contentChanged"]),
                s.init(i),
                s) : s) : (c("Can not resolve the wrapper DOM."),
                s)
            }
            return i(e, t),
            e.use = function(t) {
                var o = t.pluginName
                  , s = e.plugins.some((function(e) {
                    return t === e.ctor
                }
                ));
                return s ? e : A(o) ? (c("Plugin Class must specify plugin's name in static property by 'pluginName' field."),
                e) : (e.pluginsMap[o] = !0,
                e.plugins.push({
                    name: o,
                    applyOrder: t.applyOrder,
                    ctor: t
                }),
                e)
            }
            ,
            e.prototype.setContent = function(t) {
                var e = !1
                  , o = !0
                  , s = t.children[this.options.specifiedIndexAsContent];
                return s ? (e = this.content !== s,
                e && (this.content = s)) : (c("The wrapper need at least one child element to be content element to scroll."),
                o = !1),
                {
                    valid: o,
                    contentChanged: e
                }
            }
            ,
            e.prototype.init = function(t) {
                var e = this;
                this.wrapper = t,
                t.isBScrollContainer = !0,
                this.scroller = new Ft(t,this.content,this.options),
                this.scroller.hooks.on(this.scroller.hooks.eventTypes.resize, (function() {
                    e.refresh()
                }
                )),
                this.eventBubbling(),
                this.handleAutoBlur(),
                this.enable(),
                this.proxy(l),
                this.applyPlugins(),
                this.refreshWithoutReset(this.content);
                var o = this.options
                  , s = o.startX
                  , i = o.startY
                  , r = {
                    x: s,
                    y: i
                };
                this.hooks.trigger(this.hooks.eventTypes.beforeInitialScrollTo, r) || this.scroller.scrollTo(r.x, r.y)
            }
            ,
            e.prototype.applyPlugins = function() {
                var t = this
                  , o = this.options;
                e.plugins.sort((function(t, e) {
                    var o, s = (o = {},
                    o["pre"] = -1,
                    o["post"] = 1,
                    o), i = t.applyOrder ? s[t.applyOrder] : 0, r = e.applyOrder ? s[e.applyOrder] : 0;
                    return i - r
                }
                )).forEach((function(e) {
                    var s = e.ctor;
                    o[e.name] && "function" === typeof s && (t.plugins[e.name] = new s(t))
                }
                ))
            }
            ,
            e.prototype.handleAutoBlur = function() {
                this.options.autoBlur && this.on(this.eventTypes.beforeScrollStart, (function() {
                    var t = document.activeElement;
                    !t || "INPUT" !== t.tagName && "TEXTAREA" !== t.tagName || t.blur()
                }
                ))
            }
            ,
            e.prototype.eventBubbling = function() {
                Ht(this.scroller.hooks, this, [this.eventTypes.beforeScrollStart, this.eventTypes.scrollStart, this.eventTypes.scroll, this.eventTypes.scrollEnd, this.eventTypes.scrollCancel, this.eventTypes.touchEnd, this.eventTypes.flick])
            }
            ,
            e.prototype.refreshWithoutReset = function(t) {
                this.scroller.refresh(t),
                this.hooks.trigger(this.hooks.eventTypes.refresh, t),
                this.trigger(this.eventTypes.refresh, t)
            }
            ,
            e.prototype.proxy = function(t) {
                var e = this;
                t.forEach((function(t) {
                    var o = t.key
                      , s = t.sourceKey;
                    ct(e, s, o)
                }
                ))
            }
            ,
            e.prototype.refresh = function() {
                var t = this.setContent(this.wrapper)
                  , e = t.contentChanged
                  , o = t.valid;
                if (o) {
                    var s = this.content;
                    this.refreshWithoutReset(s),
                    e && (this.hooks.trigger(this.hooks.eventTypes.contentChanged, s),
                    this.trigger(this.eventTypes.contentChanged, s)),
                    this.scroller.resetPosition()
                }
            }
            ,
            e.prototype.enable = function() {
                this.scroller.enable(),
                this.hooks.trigger(this.hooks.eventTypes.enable),
                this.trigger(this.eventTypes.enable)
            }
            ,
            e.prototype.disable = function() {
                this.scroller.disable(),
                this.hooks.trigger(this.hooks.eventTypes.disable),
                this.trigger(this.eventTypes.disable)
            }
            ,
            e.prototype.destroy = function() {
                this.hooks.trigger(this.hooks.eventTypes.destroy),
                this.trigger(this.eventTypes.destroy),
                this.scroller.destroy()
            }
            ,
            e.prototype.eventRegister = function(t) {
                this.registerType(t)
            }
            ,
            e.plugins = [],
            e.pluginsMap = {},
            e
        }(pt);
        function Nt(t, e) {
            var o = new It(t,e);
            return o
        }
        Nt.use = It.use,
        Nt.plugins = It.plugins,
        Nt.pluginsMap = It.pluginsMap;
        var Rt = Nt
          , Wt = function() {
            function t(t) {
                this.scroll = t,
                this.wheelEndTimer = 0,
                this.wheelMoveTimer = 0,
                this.wheelStart = !1,
                this.init()
            }
            return t.prototype.init = function() {
                this.handleBScroll(),
                this.handleOptions(),
                this.handleHooks(),
                this.registerEvent()
            }
            ,
            t.prototype.handleBScroll = function() {
                this.scroll.registerType(["alterOptions", "mousewheelStart", "mousewheelMove", "mousewheelEnd"])
            }
            ,
            t.prototype.handleOptions = function() {
                var t = !0 === this.scroll.options.mouseWheel ? {} : this.scroll.options.mouseWheel
                  , e = {
                    speed: 20,
                    invert: !1,
                    easeTime: 300,
                    discreteTime: 400,
                    throttleTime: 0,
                    dampingFactor: .1
                };
                this.mouseWheelOpt = S(e, t)
            }
            ,
            t.prototype.handleHooks = function() {
                this.hooksFn = [],
                this.registerHooks(this.scroll.hooks, "destroy", this.destroy)
            }
            ,
            t.prototype.registerEvent = function() {
                this.eventRegister = new ut(this.scroll.scroller.wrapper,[{
                    name: "wheel",
                    handler: this.wheelHandler.bind(this)
                }, {
                    name: "mousewheel",
                    handler: this.wheelHandler.bind(this)
                }, {
                    name: "DOMMouseScroll",
                    handler: this.wheelHandler.bind(this)
                }])
            }
            ,
            t.prototype.registerHooks = function(t, e, o) {
                t.on(e, o, this),
                this.hooksFn.push([t, e, o])
            }
            ,
            t.prototype.wheelHandler = function(t) {
                if (this.scroll.enabled) {
                    this.beforeHandler(t),
                    this.wheelStart || (this.wheelStartHandler(t),
                    this.wheelStart = !0);
                    var e = this.getWheelDelta(t);
                    this.wheelMoveHandler(e),
                    this.wheelEndDetector(e)
                }
            }
            ,
            t.prototype.wheelStartHandler = function(t) {
                this.cleanCache();
                var e = this.scroll.scroller
                  , o = e.scrollBehaviorX
                  , s = e.scrollBehaviorY;
                o.setMovingDirection(0),
                s.setMovingDirection(0),
                o.setDirection(0),
                s.setDirection(0),
                this.scroll.trigger(this.scroll.eventTypes.alterOptions, this.mouseWheelOpt),
                this.scroll.trigger(this.scroll.eventTypes.mousewheelStart)
            }
            ,
            t.prototype.cleanCache = function() {
                this.deltaCache = []
            }
            ,
            t.prototype.wheelMoveHandler = function(t) {
                var e = this
                  , o = this.mouseWheelOpt
                  , s = o.throttleTime
                  , i = o.dampingFactor;
                if (s && this.wheelMoveTimer)
                    this.deltaCache.push(t);
                else {
                    var r = this.deltaCache.reduce((function(t, e) {
                        return {
                            x: t.x + e.x,
                            y: t.y + e.y
                        }
                    }
                    ), {
                        x: 0,
                        y: 0
                    });
                    this.cleanCache();
                    var n = this.scroll.scroller
                      , a = n.scrollBehaviorX
                      , h = n.scrollBehaviorY;
                    a.setMovingDirection(-t.directionX),
                    h.setMovingDirection(-t.directionY),
                    a.setDirection(t.x),
                    h.setDirection(t.y);
                    var l = a.performDampingAlgorithm(Math.round(t.x) + r.x, i)
                      , c = h.performDampingAlgorithm(Math.round(t.y) + r.x, i);
                    if (!this.scroll.trigger(this.scroll.eventTypes.mousewheelMove, {
                        x: l,
                        y: c
                    })) {
                        var p = this.getEaseTime();
                        l === this.scroll.x && c === this.scroll.y || this.scroll.scrollTo(l, c, p)
                    }
                    s && (this.wheelMoveTimer = window.setTimeout((function() {
                        e.wheelMoveTimer = 0
                    }
                    ), s))
                }
            }
            ,
            t.prototype.wheelEndDetector = function(t) {
                var e = this;
                window.clearTimeout(this.wheelEndTimer),
                this.wheelEndTimer = window.setTimeout((function() {
                    e.wheelStart = !1,
                    window.clearTimeout(e.wheelMoveTimer),
                    e.wheelMoveTimer = 0,
                    e.scroll.trigger(e.scroll.eventTypes.mousewheelEnd, t)
                }
                ), this.mouseWheelOpt.discreteTime)
            }
            ,
            t.prototype.getWheelDelta = function(t) {
                var e = this.mouseWheelOpt
                  , o = e.speed
                  , s = e.invert
                  , i = 0
                  , r = 0
                  , n = s ? -1 : 1;
                switch (!0) {
                case "deltaX"in t:
                    1 === t.deltaMode ? (i = -t.deltaX * o,
                    r = -t.deltaY * o) : (i = -t.deltaX,
                    r = -t.deltaY);
                    break;
                case "wheelDeltaX"in t:
                    i = t.wheelDeltaX / 120 * o,
                    r = t.wheelDeltaY / 120 * o;
                    break;
                case "wheelDelta"in t:
                    i = r = t.wheelDelta / 120 * o;
                    break;
                case "detail"in t:
                    i = r = -t.detail / 3 * o;
                    break
                }
                i *= n,
                r *= n,
                this.scroll.hasVerticalScroll || (Math.abs(r) > Math.abs(i) && (i = r),
                r = 0),
                this.scroll.hasHorizontalScroll || (i = 0);
                var a = i > 0 ? -1 : i < 0 ? 1 : 0
                  , h = r > 0 ? -1 : r < 0 ? 1 : 0;
                return {
                    x: i,
                    y: r,
                    directionX: a,
                    directionY: h
                }
            }
            ,
            t.prototype.beforeHandler = function(t) {
                var e = this.scroll.options
                  , o = e.preventDefault
                  , s = e.stopPropagation
                  , i = e.preventDefaultException;
                o && !j(t.target, i) && t.preventDefault(),
                s && t.stopPropagation()
            }
            ,
            t.prototype.getEaseTime = function() {
                var t = 100
                  , e = this.mouseWheelOpt.easeTime;
                return e < t && c("easeTime should be greater than 100.If mouseWheel easeTime is too small,scrollEnd will be triggered many times."),
                Math.max(e, t)
            }
            ,
            t.prototype.destroy = function() {
                this.eventRegister.destroy(),
                window.clearTimeout(this.wheelEndTimer),
                window.clearTimeout(this.wheelMoveTimer),
                this.hooksFn.forEach((function(t) {
                    var e = t[0]
                      , o = t[1]
                      , s = t[2];
                    e.off(o, s)
                }
                ))
            }
            ,
            t.pluginName = "mouseWheel",
            t.applyOrder = "pre",
            t
        }()
          , jt = function() {
            function t(t) {
                this.scroll = t,
                this.stopObserver = !1,
                this.init()
            }
            return t.prototype.init = function() {
                this.handleMutationObserver(),
                this.handleHooks()
            }
            ,
            t.prototype.handleMutationObserver = function() {
                var t = this;
                if ("undefined" !== typeof MutationObserver) {
                    var e = 0;
                    this.observer = new MutationObserver((function(o) {
                        t.mutationObserverHandler(o, e)
                    }
                    )),
                    this.startObserve(this.observer)
                } else
                    this.checkDOMUpdate()
            }
            ,
            t.prototype.handleHooks = function() {
                var t = this;
                this.hooksFn = [],
                this.registerHooks(this.scroll.hooks, this.scroll.hooks.eventTypes.contentChanged, (function() {
                    t.stopObserve(),
                    t.handleMutationObserver()
                }
                )),
                this.registerHooks(this.scroll.hooks, this.scroll.hooks.eventTypes.enable, (function() {
                    t.stopObserver && t.handleMutationObserver()
                }
                )),
                this.registerHooks(this.scroll.hooks, this.scroll.hooks.eventTypes.disable, (function() {
                    t.stopObserve()
                }
                )),
                this.registerHooks(this.scroll.hooks, this.scroll.hooks.eventTypes.destroy, (function() {
                    t.destroy()
                }
                ))
            }
            ,
            t.prototype.mutationObserverHandler = function(t, e) {
                var o = this;
                if (!this.shouldNotRefresh()) {
                    for (var s = !1, i = !1, r = 0; r < t.length; r++) {
                        var n = t[r];
                        if ("attributes" !== n.type) {
                            s = !0;
                            break
                        }
                        if (n.target !== this.scroll.scroller.content) {
                            i = !0;
                            break
                        }
                    }
                    s ? this.scroll.refresh() : i && (clearTimeout(e),
                    e = window.setTimeout((function() {
                        o.shouldNotRefresh() || o.scroll.refresh()
                    }
                    ), 60))
                }
            }
            ,
            t.prototype.startObserve = function(t) {
                var e = {
                    attributes: !0,
                    childList: !0,
                    subtree: !0
                };
                t.observe(this.scroll.scroller.content, e)
            }
            ,
            t.prototype.shouldNotRefresh = function() {
                var t = this.scroll.scroller
                  , e = t.scrollBehaviorX
                  , o = t.scrollBehaviorY
                  , s = e.currentPos > e.minScrollPos || e.currentPos < e.maxScrollPos || o.currentPos > o.minScrollPos || o.currentPos < o.maxScrollPos;
                return t.animater.pending || s
            }
            ,
            t.prototype.checkDOMUpdate = function() {
                var t = this
                  , e = this.scroll.scroller.content
                  , o = W(e)
                  , s = o.width
                  , i = o.height
                  , r = function() {
                    if (!t.stopObserver) {
                        o = W(e);
                        var r = o.width
                          , a = o.height;
                        s === r && i === a || t.scroll.refresh(),
                        s = r,
                        i = a,
                        n()
                    }
                }
                  , n = function() {
                    setTimeout((function() {
                        r()
                    }
                    ), 1e3)
                };
                n()
            }
            ,
            t.prototype.registerHooks = function(t, e, o) {
                t.on(e, o, this),
                this.hooksFn.push([t, e, o])
            }
            ,
            t.prototype.stopObserve = function() {
                this.stopObserver = !0,
                this.observer && this.observer.disconnect()
            }
            ,
            t.prototype.destroy = function() {
                this.stopObserve(),
                this.hooksFn.forEach((function(t) {
                    var e = t[0]
                      , o = t[1]
                      , s = t[2];
                    e.off(o, s)
                }
                )),
                this.hooksFn.length = 0
            }
            ,
            t.pluginName = "observeDOM",
            t
        }()
          , Kt = "plugins.pullDownRefresh"
          , Ut = [{
            key: "finishPullDown",
            name: "finishPullDown"
        }, {
            key: "openPullDown",
            name: "openPullDown"
        }, {
            key: "closePullDown",
            name: "closePullDown"
        }, {
            key: "autoPullDownRefresh",
            name: "autoPullDownRefresh"
        }]
          , Zt = Ut.map((function(t) {
            return {
                key: t.key,
                sourceKey: Kt + "." + t.name
            }
        }
        ))
          , qt = "pullingDown"
          , Gt = "enterThreshold"
          , Qt = "leaveThreshold"
          , Vt = function() {
            function t(t) {
                this.scroll = t,
                this.pulling = 0,
                this.thresholdBoundary = 0,
                this.init()
            }
            return t.prototype.setPulling = function(t) {
                this.pulling = t
            }
            ,
            t.prototype.setThresholdBoundary = function(t) {
                this.thresholdBoundary = t
            }
            ,
            t.prototype.init = function() {
                this.handleBScroll(),
                this.handleOptions(this.scroll.options.pullDownRefresh),
                this.handleHooks(),
                this.watch()
            }
            ,
            t.prototype.handleBScroll = function() {
                this.scroll.registerType([qt, Gt, Qt]),
                this.scroll.proxy(Zt)
            }
            ,
            t.prototype.handleOptions = function(t) {
                void 0 === t && (t = {}),
                t = !0 === t ? {} : t;
                var e = {
                    threshold: 90,
                    stop: 40
                };
                this.options = S(e, t),
                this.scroll.options.probeType = 3
            }
            ,
            t.prototype.handleHooks = function() {
                var t = this;
                this.hooksFn = [];
                var e = this.scroll.scroller
                  , o = e.scrollBehaviorY;
                this.currentMinScrollY = this.cachedOriginanMinScrollY = o.minScrollPos,
                this.registerHooks(this.scroll.hooks, this.scroll.hooks.eventTypes.contentChanged, (function() {
                    t.finishPullDown()
                }
                )),
                this.registerHooks(o.hooks, o.hooks.eventTypes.computeBoundary, (function(e) {
                    e.maxScrollPos > 0 && (e.maxScrollPos = -1),
                    e.minScrollPos = t.currentMinScrollY
                }
                )),
                this.hasMouseWheelPlugin() && (this.registerHooks(this.scroll, this.scroll.eventTypes.alterOptions, (function(t) {
                    var e = 300
                      , o = 350;
                    t.discreteTime = e,
                    t.easeTime = o
                }
                )),
                this.registerHooks(this.scroll, this.scroll.eventTypes.mousewheelEnd, (function() {
                    e.hooks.trigger(e.hooks.eventTypes.end)
                }
                )))
            }
            ,
            t.prototype.registerHooks = function(t, e, o) {
                t.on(e, o, this),
                this.hooksFn.push([t, e, o])
            }
            ,
            t.prototype.hasMouseWheelPlugin = function() {
                return !!this.scroll.eventTypes.alterOptions
            }
            ,
            t.prototype.watch = function() {
                var t = this.scroll.scroller;
                this.watching = !0,
                this.registerHooks(t.hooks, t.hooks.eventTypes.end, this.checkPullDown),
                this.registerHooks(this.scroll, this.scroll.eventTypes.scrollStart, this.resetStateBeforeScrollStart),
                this.registerHooks(this.scroll, this.scroll.eventTypes.scroll, this.checkLocationOfThresholdBoundary),
                this.hasMouseWheelPlugin() && this.registerHooks(this.scroll, this.scroll.eventTypes.mousewheelStart, this.resetStateBeforeScrollStart)
            }
            ,
            t.prototype.resetStateBeforeScrollStart = function() {
                this.isFetchingStatus() || (this.setPulling(1),
                this.setThresholdBoundary(0))
            }
            ,
            t.prototype.checkLocationOfThresholdBoundary = function() {
                if (1 === this.pulling) {
                    var t = this.scroll
                      , e = 1 !== this.thresholdBoundary && this.locateInsideThresholdBoundary()
                      , o = 2 !== this.thresholdBoundary && !this.locateInsideThresholdBoundary();
                    e && (this.setThresholdBoundary(1),
                    t.trigger(Gt)),
                    o && (this.setThresholdBoundary(2),
                    t.trigger(Qt))
                }
            }
            ,
            t.prototype.locateInsideThresholdBoundary = function() {
                return this.scroll.y <= this.options.threshold
            }
            ,
            t.prototype.unwatch = function() {
                var t = this.scroll
                  , e = t.scroller;
                this.watching = !1,
                e.hooks.off(e.hooks.eventTypes.end, this.checkPullDown),
                t.off(t.eventTypes.scrollStart, this.resetStateBeforeScrollStart),
                t.off(t.eventTypes.scroll, this.checkLocationOfThresholdBoundary),
                this.hasMouseWheelPlugin() && t.off(t.eventTypes.mousewheelStart, this.resetStateBeforeScrollStart)
            }
            ,
            t.prototype.checkPullDown = function() {
                var t = this.options
                  , e = t.threshold
                  , o = t.stop;
                return !(this.scroll.y < e) && (1 === this.pulling && (this.modifyBehaviorYBoundary(o),
                this.setPulling(2),
                this.scroll.trigger(qt)),
                this.scroll.scrollTo(this.scroll.x, o, this.scroll.options.bounceTime, tt.bounce),
                this.isFetchingStatus())
            }
            ,
            t.prototype.isFetchingStatus = function() {
                return 2 === this.pulling
            }
            ,
            t.prototype.modifyBehaviorYBoundary = function(t) {
                var e = this.scroll.scroller.scrollBehaviorY;
                this.cachedOriginanMinScrollY = e.minScrollPos,
                this.currentMinScrollY = t,
                e.computeBoundary()
            }
            ,
            t.prototype.finishPullDown = function() {
                if (this.isFetchingStatus()) {
                    var t = this.scroll.scroller.scrollBehaviorY;
                    this.currentMinScrollY = this.cachedOriginanMinScrollY,
                    t.computeBoundary(),
                    this.setPulling(0),
                    this.scroll.resetPosition(this.scroll.options.bounceTime, tt.bounce)
                }
            }
            ,
            t.prototype.openPullDown = function(t) {
                void 0 === t && (t = {}),
                this.handleOptions(t),
                this.watching || this.watch()
            }
            ,
            t.prototype.closePullDown = function() {
                this.unwatch()
            }
            ,
            t.prototype.autoPullDownRefresh = function() {
                var t = this.options
                  , e = t.threshold
                  , o = t.stop;
                !this.isFetchingStatus() && this.watching && (this.modifyBehaviorYBoundary(o),
                this.scroll.trigger(this.scroll.eventTypes.scrollStart),
                this.scroll.scrollTo(this.scroll.x, e),
                this.setPulling(2),
                this.scroll.trigger(qt),
                this.scroll.scrollTo(this.scroll.x, o, this.scroll.options.bounceTime, tt.bounce))
            }
            ,
            t.pluginName = "pullDownRefresh",
            t
        }()
          , Jt = "plugins.pullUpLoad"
          , _t = [{
            key: "finishPullUp",
            name: "finishPullUp"
        }, {
            key: "openPullUp",
            name: "openPullUp"
        }, {
            key: "closePullUp",
            name: "closePullUp"
        }, {
            key: "autoPullUpLoad",
            name: "autoPullUpLoad"
        }]
          , $t = _t.map((function(t) {
            return {
                key: t.key,
                sourceKey: Jt + "." + t.name
            }
        }
        ))
          , te = "pullingUp"
          , ee = function() {
            function t(t) {
                this.scroll = t,
                this.pulling = !1,
                this.watching = !1,
                this.init()
            }
            return t.prototype.init = function() {
                this.handleBScroll(),
                this.handleOptions(this.scroll.options.pullUpLoad),
                this.handleHooks(),
                this.watch()
            }
            ,
            t.prototype.handleBScroll = function() {
                this.scroll.registerType([te]),
                this.scroll.proxy($t)
            }
            ,
            t.prototype.handleOptions = function(t) {
                void 0 === t && (t = {}),
                t = !0 === t ? {} : t;
                var e = {
                    threshold: 0
                };
                this.options = S(e, t),
                this.scroll.options.probeType = 3
            }
            ,
            t.prototype.handleHooks = function() {
                var t = this;
                this.hooksFn = [];
                var e = this.scroll.scroller.scrollBehaviorY;
                this.registerHooks(this.scroll.hooks, this.scroll.hooks.eventTypes.contentChanged, (function() {
                    t.finishPullUp()
                }
                )),
                this.registerHooks(e.hooks, e.hooks.eventTypes.computeBoundary, (function(t) {
                    t.maxScrollPos > 0 && (t.maxScrollPos = -1)
                }
                ))
            }
            ,
            t.prototype.registerHooks = function(t, e, o) {
                t.on(e, o, this),
                this.hooksFn.push([t, e, o])
            }
            ,
            t.prototype.watch = function() {
                this.watching || (this.watching = !0,
                this.registerHooks(this.scroll, this.scroll.eventTypes.scroll, this.checkPullUp))
            }
            ,
            t.prototype.unwatch = function() {
                this.watching = !1,
                this.scroll.off(this.scroll.eventTypes.scroll, this.checkPullUp)
            }
            ,
            t.prototype.checkPullUp = function(t) {
                var e = this
                  , o = this.options.threshold;
                1 === this.scroll.movingDirectionY && t.y <= this.scroll.maxScrollY + o && (this.pulling = !0,
                this.scroll.once(this.scroll.eventTypes.scrollEnd, (function() {
                    e.pulling = !1
                }
                )),
                this.unwatch(),
                this.scroll.trigger(te))
            }
            ,
            t.prototype.finishPullUp = function() {
                var t = this;
                this.scroll.scroller.scrollBehaviorY.setMovingDirection(0),
                this.pulling ? this.scroll.once(this.scroll.eventTypes.scrollEnd, (function() {
                    t.watch()
                }
                )) : this.watch()
            }
            ,
            t.prototype.openPullUp = function(t) {
                void 0 === t && (t = {}),
                this.handleOptions(t),
                this.watch()
            }
            ,
            t.prototype.closePullUp = function() {
                this.unwatch()
            }
            ,
            t.prototype.autoPullUpLoad = function() {
                var t = this.options.threshold
                  , e = this.scroll.scroller.scrollBehaviorY;
                if (!this.pulling && this.watching) {
                    var o = -1
                      , s = e.maxScrollPos + t + o;
                    this.scroll.scroller.scrollBehaviorY.setMovingDirection(o),
                    this.scroll.scrollTo(this.scroll.x, s, this.scroll.options.bounceTime)
                }
            }
            ,
            t.pluginName = "pullUpLoad",
            t
        }()
          , oe = function() {
            function t(t, e) {
                this.indicator = t,
                this.options = e,
                this.hooks = new pt(["touchStart", "touchMove", "touchEnd"]),
                this.registerEvents()
            }
            return t.prototype.registerEvents = function() {
                var t = this.options
                  , e = t.disableMouse
                  , o = t.disableTouch
                  , s = []
                  , i = []
                  , r = [];
                e || (s.push({
                    name: "mousedown",
                    handler: this.start.bind(this)
                }),
                i.push({
                    name: "mousemove",
                    handler: this.move.bind(this)
                }),
                r.push({
                    name: "mouseup",
                    handler: this.end.bind(this)
                })),
                o || (s.push({
                    name: "touchstart",
                    handler: this.start.bind(this)
                }),
                i.push({
                    name: "touchmove",
                    handler: this.move.bind(this)
                }),
                r.push({
                    name: "touchend",
                    handler: this.end.bind(this)
                }, {
                    name: "touchcancel",
                    handler: this.end.bind(this)
                })),
                this.startEventRegister = new ut(this.indicator.indicatorEl,s),
                this.moveEventRegister = new ut(window,i),
                this.endEventRegister = new ut(window,r)
            }
            ,
            t.prototype.BScrollIsDisabled = function() {
                return !this.indicator.scroll.enabled
            }
            ,
            t.prototype.start = function(t) {
                if (!this.BScrollIsDisabled()) {
                    var e = t.touches ? t.touches[0] : t;
                    t.preventDefault(),
                    t.stopPropagation(),
                    this.initiated = !0,
                    this.lastPoint = e[this.indicator.keysMap.point],
                    this.hooks.trigger(this.hooks.eventTypes.touchStart)
                }
            }
            ,
            t.prototype.move = function(t) {
                if (this.initiated) {
                    var e = t.touches ? t.touches[0] : t
                      , o = e[this.indicator.keysMap.point];
                    t.preventDefault(),
                    t.stopPropagation();
                    var s = o - this.lastPoint;
                    this.lastPoint = o,
                    this.hooks.trigger(this.hooks.eventTypes.touchMove, s)
                }
            }
            ,
            t.prototype.end = function(t) {
                this.initiated && (this.initiated = !1,
                t.preventDefault(),
                t.stopPropagation(),
                this.hooks.trigger(this.hooks.eventTypes.touchEnd))
            }
            ,
            t.prototype.destroy = function() {
                this.startEventRegister.destroy(),
                this.moveEventRegister.destroy(),
                this.endEventRegister.destroy()
            }
            ,
            t
        }()
          , se = function() {
            function t(t, e) {
                this.scroll = t,
                this.options = e,
                this.hooksFn = [],
                this.wrapper = e.wrapper,
                this.direction = e.direction,
                this.indicatorEl = this.wrapper.children[0],
                this.keysMap = this.getKeysMap(),
                this.handleFade(),
                this.handleHooks()
            }
            return t.prototype.handleFade = function() {
                this.options.fade && (this.wrapper.style.opacity = "0")
            }
            ,
            t.prototype.handleHooks = function() {
                var t = this
                  , e = this.options
                  , o = e.fade
                  , s = e.interactive
                  , i = e.scrollbarTrackClickable
                  , r = this.scroll
                  , n = r.hooks
                  , a = r.scroller.translater.hooks
                  , h = r.scroller.animater.hooks;
                if (this.registerHooks(n, n.eventTypes.refresh, this.refresh),
                this.registerHooks(a, a.eventTypes.translate, (function(e) {
                    var o = t.keysMap.hasScroll;
                    t.scroll[o] && t.updatePosition(e)
                }
                )),
                this.registerHooks(h, h.eventTypes.time, this.transitionTime),
                this.registerHooks(h, h.eventTypes.timeFunction, this.transitionTimingFunction),
                o && (this.registerHooks(r, r.eventTypes.scrollEnd, (function() {
                    t.fade()
                }
                )),
                this.registerHooks(r, r.eventTypes.scrollStart, (function() {
                    t.fade(!0)
                }
                )),
                r.eventTypes.mousewheelStart && r.eventTypes.mousewheelEnd && (this.registerHooks(r, r.eventTypes.mousewheelStart, (function() {
                    t.fade(!0)
                }
                )),
                this.registerHooks(r, r.eventTypes.mousewheelMove, (function() {
                    t.fade(!0)
                }
                )),
                this.registerHooks(r, r.eventTypes.mousewheelEnd, (function() {
                    t.fade()
                }
                )))),
                s) {
                    var l = this.scroll.options
                      , c = l.disableMouse
                      , p = l.disableTouch;
                    this.eventHandler = new oe(this,{
                        disableMouse: c,
                        disableTouch: p
                    });
                    var u = this.eventHandler.hooks;
                    this.registerHooks(u, u.eventTypes.touchStart, this.startHandler),
                    this.registerHooks(u, u.eventTypes.touchMove, this.moveHandler),
                    this.registerHooks(u, u.eventTypes.touchEnd, this.endHandler)
                }
                i && this.bindClick()
            }
            ,
            t.prototype.registerHooks = function(t, e, o) {
                t.on(e, o, this),
                this.hooksFn.push([t, e, o])
            }
            ,
            t.prototype.bindClick = function() {
                var t = this.wrapper;
                this.clickEventRegister = new ut(t,[{
                    name: "click",
                    handler: this.handleClick.bind(this)
                }])
            }
            ,
            t.prototype.handleClick = function(t) {
                var e = this.calculateclickOffsetPos(t)
                  , o = this.scroll
                  , s = o.x
                  , i = o.y;
                s = "horizontal" === this.direction ? e : s,
                i = "vertical" === this.direction ? e : i,
                this.scroll.scrollTo(s, i, this.options.scrollbarTrackOffsetTime)
            }
            ,
            t.prototype.calculateclickOffsetPos = function(t) {
                var e = this.keysMap
                  , o = e.point
                  , s = e.domRect
                  , i = this.options.scrollbarTrackOffsetType
                  , r = t[o] - this.wrapperRect[s]
                  , n = r < this.currentPos ? -1 : 1
                  , a = 0
                  , h = this.currentPos;
                return "step" === i ? a = this.scrollInfo.baseSize * n : (a = 0,
                h = r),
                this.newPos(h, a, this.scrollInfo)
            }
            ,
            t.prototype.getKeysMap = function() {
                return "vertical" === this.direction ? {
                    hasScroll: "hasVerticalScroll",
                    size: "height",
                    wrapperSize: "clientHeight",
                    scrollerSize: "scrollerHeight",
                    maxScrollPos: "maxScrollY",
                    pos: "y",
                    point: "pageY",
                    translateProperty: "translateY",
                    domRect: "top"
                } : {
                    hasScroll: "hasHorizontalScroll",
                    size: "width",
                    wrapperSize: "clientWidth",
                    scrollerSize: "scrollerWidth",
                    maxScrollPos: "maxScrollX",
                    pos: "x",
                    point: "pageX",
                    translateProperty: "translateX",
                    domRect: "left"
                }
            }
            ,
            t.prototype.fade = function(t) {
                var e = this.options
                  , o = e.fadeInTime
                  , s = e.fadeOutTime
                  , i = t ? o : s
                  , r = this.wrapper;
                r.style[N.transitionDuration] = i + "ms",
                r.style.opacity = t ? "1" : "0"
            }
            ,
            t.prototype.refresh = function() {
                var t = this.keysMap.hasScroll
                  , e = this.scroll
                  , o = e.x
                  , s = e.y;
                if (this.wrapperRect = this.wrapper.getBoundingClientRect(),
                this.canScroll(e[t])) {
                    var i = this.keysMap
                      , r = i.wrapperSize
                      , n = i.scrollerSize
                      , a = i.maxScrollPos;
                    this.scrollInfo = this.refreshScrollInfo(this.wrapper[r], e[n], e[a], this.indicatorEl[r]),
                    this.updatePosition({
                        x: o,
                        y: s
                    })
                }
            }
            ,
            t.prototype.transitionTime = function(t) {
                void 0 === t && (t = 0),
                this.indicatorEl.style[N.transitionDuration] = t + "ms"
            }
            ,
            t.prototype.transitionTimingFunction = function(t) {
                this.indicatorEl.style[N.transitionTimingFunction] = t
            }
            ,
            t.prototype.canScroll = function(t) {
                return this.wrapper.style.display = t ? "block" : "none",
                t
            }
            ,
            t.prototype.refreshScrollInfo = function(t, e, o, s) {
                var i = Math.max(Math.round(t * t / (e || t || 1)), this.options.minSize);
                this.options.isCustom && (i = s);
                var r = t - i
                  , n = r / o;
                return {
                    baseSize: i,
                    maxScrollPos: r,
                    minScrollPos: 0,
                    sizeRatio: n
                }
            }
            ,
            t.prototype.updatePosition = function(t) {
                var e = this.caculatePosAndSize(t, this.scrollInfo)
                  , o = e.pos
                  , s = e.size;
                this.refreshStyle(s, o),
                this.currentPos = o
            }
            ,
            t.prototype.caculatePosAndSize = function(t, e) {
                var o, s = this.keysMap.pos, i = e.sizeRatio, r = e.baseSize, n = e.maxScrollPos, a = e.minScrollPos, h = this.options.minSize, l = Math.round(i * t[s]);
                return l < a ? (o = Math.max(r + 3 * l, h),
                l = a) : l > n ? (o = Math.max(r - 3 * (l - n), h),
                l = n + r - o) : o = r,
                {
                    pos: l,
                    size: o
                }
            }
            ,
            t.prototype.refreshStyle = function(t, e) {
                var o = this.keysMap
                  , s = o.translateProperty
                  , i = o.size
                  , r = this.scroll.options.translateZ;
                this.indicatorEl.style[i] = t + "px",
                this.indicatorEl.style[N.transform] = s + "(" + e + "px)" + r
            }
            ,
            t.prototype.startHandler = function() {
                this.moved = !1,
                this.startTime = T(),
                this.transitionTime(),
                this.scroll.scroller.hooks.trigger(this.scroll.scroller.hooks.eventTypes.beforeScrollStart)
            }
            ,
            t.prototype.moveHandler = function(t) {
                if (this.moved || this.indicatorNotMoved(t) || (this.moved = !0,
                this.scroll.scroller.hooks.trigger(this.scroll.scroller.hooks.eventTypes.scrollStart)),
                this.moved) {
                    var e = this.newPos(this.currentPos, t, this.scrollInfo);
                    this.syncBScroll(e)
                }
            }
            ,
            t.prototype.endHandler = function() {
                if (this.moved) {
                    var t = this.scroll
                      , e = t.x
                      , o = t.y;
                    this.scroll.scroller.hooks.trigger(this.scroll.scroller.hooks.eventTypes.scrollEnd, {
                        x: e,
                        y: o
                    })
                }
            }
            ,
            t.prototype.indicatorNotMoved = function(t) {
                var e = this.currentPos
                  , o = this.scrollInfo
                  , s = o.maxScrollPos
                  , i = o.minScrollPos
                  , r = e === i && t <= 0 || e === s && t >= 0;
                return r
            }
            ,
            t.prototype.syncBScroll = function(t) {
                var e = T()
                  , o = this.scroll
                  , s = o.x
                  , i = o.y
                  , r = o.options
                  , n = o.scroller
                  , a = o.maxScrollY
                  , h = o.minScrollY
                  , l = o.maxScrollX
                  , c = o.minScrollX
                  , p = r.probeType
                  , u = r.momentumLimitTime
                  , d = {
                    x: s,
                    y: i
                };
                "vertical" === this.direction ? d.y = w(t, a, h) : d.x = w(t, l, c),
                n.translater.translate(d),
                e - this.startTime > u && (this.startTime = e,
                1 === p && n.hooks.trigger(n.hooks.eventTypes.scroll, d)),
                p > 1 && n.hooks.trigger(n.hooks.eventTypes.scroll, d)
            }
            ,
            t.prototype.newPos = function(t, e, o) {
                var s = o.maxScrollPos
                  , i = o.sizeRatio
                  , r = o.minScrollPos
                  , n = t + e;
                return n = w(n, r, s),
                Math.round(n / i)
            }
            ,
            t.prototype.destroy = function() {
                var t = this.options
                  , e = t.interactive
                  , o = t.scrollbarTrackClickable
                  , s = t.isCustom;
                e && this.eventHandler.destroy(),
                o && this.clickEventRegister.destroy(),
                s || this.wrapper.parentNode.removeChild(this.wrapper),
                this.hooksFn.forEach((function(t) {
                    var e = t[0]
                      , o = t[1]
                      , s = t[2];
                    e.off(o, s)
                }
                )),
                this.hooksFn.length = 0
            }
            ,
            t
        }()
          , ie = function() {
            function t(t) {
                this.scroll = t,
                this.handleOptions(),
                this.createIndicators(),
                this.handleHooks()
            }
            return t.prototype.handleHooks = function() {
                var t = this
                  , e = this.scroll;
                e.hooks.on(e.hooks.eventTypes.destroy, (function() {
                    for (var e = 0, o = t.indicators; e < o.length; e++) {
                        var s = o[e];
                        s.destroy()
                    }
                }
                ))
            }
            ,
            t.prototype.handleOptions = function() {
                var t = !0 === this.scroll.options.scrollbar ? {} : this.scroll.options.scrollbar
                  , e = {
                    fade: !0,
                    fadeInTime: 250,
                    fadeOutTime: 500,
                    interactive: !1,
                    customElements: [],
                    minSize: 8,
                    scrollbarTrackClickable: !1,
                    scrollbarTrackOffsetType: "step",
                    scrollbarTrackOffsetTime: 300
                };
                this.options = S(e, t)
            }
            ,
            t.prototype.createIndicators = function() {
                for (var t, e = this.scroll, o = [], s = ["scrollX", "scrollY"], i = ["horizontal", "vertical"], n = this.options.customElements, a = 0; a < s.length; a++) {
                    var h = s[a];
                    if (e.options[h]) {
                        var l = n.shift()
                          , c = i[a]
                          , p = !1
                          , u = l || this.createScrollbarElement(c);
                        u !== l ? e.wrapper.appendChild(u) : p = !0,
                        t = r(r({
                            wrapper: u,
                            direction: c
                        }, this.options), {
                            isCustom: p
                        }),
                        o.push(new se(e,t))
                    }
                }
                this.indicators = o
            }
            ,
            t.prototype.createScrollbarElement = function(t, e) {
                void 0 === e && (e = this.options.scrollbarTrackClickable);
                var o = document.createElement("div")
                  , s = document.createElement("div");
                return o.style.cssText = "position:absolute;z-index:9999;overflow:hidden;",
                s.style.cssText = "box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px;",
                s.className = "bscroll-indicator",
                "horizontal" === t ? (o.style.cssText += "height:7px;left:2px;right:2px;bottom:0;",
                s.style.height = "100%",
                o.className = "bscroll-horizontal-scrollbar") : (o.style.cssText += "width:7px;bottom:2px;top:2px;right:1px;",
                s.style.width = "100%",
                o.className = "bscroll-vertical-scrollbar"),
                e || (o.style.cssText += "pointer-events:none;"),
                o.appendChild(s),
                o
            }
            ,
            t.pluginName = "scrollbar",
            t
        }()
          , re = function() {
            function t(t) {
                this.scroll = t,
                this.init()
            }
            return t.prototype.init = function() {
                var t = this.scroll.scroller
                  , e = t.scrollBehaviorX
                  , o = t.scrollBehaviorY;
                this.wrapperWidth = e.wrapperSize,
                this.wrapperHeight = o.wrapperSize,
                this.scrollerHeight = o.contentSize,
                this.scrollerWidth = e.contentSize,
                this.pages = this.buildPagesMatrix(this.wrapperWidth, this.wrapperHeight),
                this.pageLengthOfX = this.pages ? this.pages.length : 0,
                this.pageLengthOfY = this.pages && this.pages[0] ? this.pages[0].length : 0
            }
            ,
            t.prototype.getPageStats = function(t, e) {
                return this.pages[t][e]
            }
            ,
            t.prototype.getNearestPageIndex = function(t, e) {
                for (var o = 0, s = 0, i = this.pages.length; o < i - 1; o++)
                    if (t >= this.pages[o][0].cx)
                        break;
                for (i = this.pages[o].length; s < i - 1; s++)
                    if (e >= this.pages[0][s].cy)
                        break;
                return {
                    pageX: o,
                    pageY: s
                }
            }
            ,
            t.prototype.buildPagesMatrix = function(t, e) {
                var o, s, i, r, n = [], a = 0, h = 0, l = this.scroll.scroller.scrollBehaviorX.maxScrollPos, c = this.scroll.scroller.scrollBehaviorY.maxScrollPos;
                s = Math.round(t / 2),
                i = Math.round(e / 2);
                while (a > -this.scrollerWidth) {
                    n[h] = [],
                    r = 0,
                    o = 0;
                    while (o > -this.scrollerHeight)
                        n[h][r] = {
                            x: Math.max(a, l),
                            y: Math.max(o, c),
                            width: t,
                            height: e,
                            cx: a - s,
                            cy: o - i
                        },
                        o -= e,
                        r++;
                    a -= t,
                    h++
                }
                return n
            }
            ,
            t
        }()
          , ne = {
            pageX: 0,
            pageY: 0,
            x: 0,
            y: 0
        }
          , ae = function() {
            function t(t, e) {
                this.scroll = t,
                this.slideOptions = e,
                this.slideX = !1,
                this.slideY = !1,
                this.currentPage = S({}, ne)
            }
            return t.prototype.refresh = function() {
                this.pagesMatrix = new re(this.scroll),
                this.checkSlideLoop(),
                this.currentPage = this.getAdjustedCurrentPage()
            }
            ,
            t.prototype.getAdjustedCurrentPage = function() {
                var t = this.currentPage
                  , e = t.pageX
                  , o = t.pageY;
                e = Math.min(e, this.pagesMatrix.pageLengthOfX - 1),
                o = Math.min(o, this.pagesMatrix.pageLengthOfY - 1),
                this.loopX && (e = Math.min(e, this.pagesMatrix.pageLengthOfX - 2)),
                this.loopY && (o = Math.min(o, this.pagesMatrix.pageLengthOfY - 2));
                var s = this.pagesMatrix.getPageStats(e, o)
                  , i = s.x
                  , r = s.y;
                return {
                    pageX: e,
                    pageY: o,
                    x: i,
                    y: r
                }
            }
            ,
            t.prototype.setCurrentPage = function(t) {
                this.currentPage = t
            }
            ,
            t.prototype.getInternalPage = function(t, e) {
                t >= this.pagesMatrix.pageLengthOfX ? t = this.pagesMatrix.pageLengthOfX - 1 : t < 0 && (t = 0),
                e >= this.pagesMatrix.pageLengthOfY ? e = this.pagesMatrix.pageLengthOfY - 1 : e < 0 && (e = 0);
                var o = this.pagesMatrix.getPageStats(t, e)
                  , s = o.x
                  , i = o.y;
                return {
                    pageX: t,
                    pageY: e,
                    x: s,
                    y: i
                }
            }
            ,
            t.prototype.getInitialPage = function(t, e) {
                void 0 === t && (t = !1),
                void 0 === e && (e = !1);
                var o = this.slideOptions
                  , s = o.startPageXIndex
                  , i = o.startPageYIndex
                  , r = this.loopX ? 1 : 0
                  , n = this.loopY ? 1 : 0
                  , a = t ? r : this.currentPage.pageX
                  , h = t ? n : this.currentPage.pageY;
                e ? (a = this.loopX ? s + 1 : s,
                h = this.loopY ? i + 1 : i) : (a = t ? r : this.currentPage.pageX,
                h = t ? n : this.currentPage.pageY);
                var l = this.pagesMatrix.getPageStats(a, h)
                  , c = l.x
                  , p = l.y;
                return {
                    pageX: a,
                    pageY: h,
                    x: c,
                    y: p
                }
            }
            ,
            t.prototype.getExposedPage = function(t) {
                var e = S({}, t);
                return this.loopX && (e.pageX = this.fixedPage(e.pageX, this.pagesMatrix.pageLengthOfX - 2)),
                this.loopY && (e.pageY = this.fixedPage(e.pageY, this.pagesMatrix.pageLengthOfY - 2)),
                e
            }
            ,
            t.prototype.getExposedPageByPageIndex = function(t, e) {
                var o = {
                    pageX: t,
                    pageY: e
                };
                this.loopX && (o.pageX = t + 1),
                this.loopY && (o.pageY = e + 1);
                var s = this.pagesMatrix.getPageStats(o.pageX, o.pageY)
                  , i = s.x
                  , r = s.y;
                return {
                    x: i,
                    y: r,
                    pageX: t,
                    pageY: e
                }
            }
            ,
            t.prototype.getWillChangedPage = function(t) {
                return t = S({}, t),
                this.loopX && (t.pageX = this.fixedPage(t.pageX, this.pagesMatrix.pageLengthOfX - 2),
                t.x = this.pagesMatrix.getPageStats(t.pageX + 1, 0).x),
                this.loopY && (t.pageY = this.fixedPage(t.pageY, this.pagesMatrix.pageLengthOfY - 2),
                t.y = this.pagesMatrix.getPageStats(0, t.pageY + 1).y),
                t
            }
            ,
            t.prototype.fixedPage = function(t, e) {
                for (var o = [], s = 0; s < e; s++)
                    o.push(s);
                return o.unshift(e - 1),
                o.push(0),
                o[t]
            }
            ,
            t.prototype.getPageStats = function() {
                return this.pagesMatrix.getPageStats(this.currentPage.pageX, this.currentPage.pageY)
            }
            ,
            t.prototype.getValidPageIndex = function(t, e) {
                var o = this.pagesMatrix.pageLengthOfX - 1
                  , s = this.pagesMatrix.pageLengthOfY - 1
                  , i = 0
                  , r = 0;
                return this.loopX && (t += 1,
                i += 1,
                o -= 1),
                this.loopY && (e += 1,
                r += 1,
                s -= 1),
                t = w(t, i, o),
                e = w(e, r, s),
                {
                    pageX: t,
                    pageY: e
                }
            }
            ,
            t.prototype.nextPageIndex = function() {
                return this.getPageIndexByDirection("positive")
            }
            ,
            t.prototype.prevPageIndex = function() {
                return this.getPageIndexByDirection("negative")
            }
            ,
            t.prototype.getNearestPage = function(t, e) {
                var o = this.pagesMatrix.getNearestPageIndex(t, e)
                  , s = o.pageX
                  , i = o.pageY
                  , r = this.pagesMatrix.getPageStats(s, 0).x
                  , n = this.pagesMatrix.getPageStats(0, i).y;
                return {
                    x: r,
                    y: n,
                    pageX: s,
                    pageY: i
                }
            }
            ,
            t.prototype.getPageByDirection = function(t, e, o) {
                var s = t.pageX
                  , i = t.pageY;
                s === this.currentPage.pageX && (s = w(s + e, 0, this.pagesMatrix.pageLengthOfX - 1)),
                i === this.currentPage.pageY && (i = w(i + o, 0, this.pagesMatrix.pageLengthOfY - 1));
                var r = this.pagesMatrix.getPageStats(s, 0).x
                  , n = this.pagesMatrix.getPageStats(0, i).y;
                return {
                    x: r,
                    y: n,
                    pageX: s,
                    pageY: i
                }
            }
            ,
            t.prototype.resetLoopPage = function() {
                if (this.loopX) {
                    if (0 === this.currentPage.pageX)
                        return {
                            pageX: this.pagesMatrix.pageLengthOfX - 2,
                            pageY: this.currentPage.pageY
                        };
                    if (this.currentPage.pageX === this.pagesMatrix.pageLengthOfX - 1)
                        return {
                            pageX: 1,
                            pageY: this.currentPage.pageY
                        }
                }
                if (this.loopY) {
                    if (0 === this.currentPage.pageY)
                        return {
                            pageX: this.currentPage.pageX,
                            pageY: this.pagesMatrix.pageLengthOfY - 2
                        };
                    if (this.currentPage.pageY === this.pagesMatrix.pageLengthOfY - 1)
                        return {
                            pageX: this.currentPage.pageX,
                            pageY: 1
                        }
                }
            }
            ,
            t.prototype.getPageIndexByDirection = function(t) {
                var e = this.currentPage.pageX
                  , o = this.currentPage.pageY;
                return this.slideX && (e = "negative" === t ? e - 1 : e + 1),
                this.slideY && (o = "negative" === t ? o - 1 : o + 1),
                {
                    pageX: e,
                    pageY: o
                }
            }
            ,
            t.prototype.checkSlideLoop = function() {
                this.wannaLoop = this.slideOptions.loop,
                this.pagesMatrix.pageLengthOfX > 1 ? this.slideX = !0 : this.slideX = !1,
                this.pagesMatrix.pages[0] && this.pagesMatrix.pageLengthOfY > 1 ? this.slideY = !0 : this.slideY = !1,
                this.loopX = this.wannaLoop && this.slideX,
                this.loopY = this.wannaLoop && this.slideY,
                this.slideX && this.slideY && c("slide does not support two direction at the same time.")
            }
            ,
            t
        }()
          , he = "plugins.slide"
          , le = [{
            key: "next",
            name: "next"
        }, {
            key: "prev",
            name: "prev"
        }, {
            key: "goToPage",
            name: "goToPage"
        }, {
            key: "getCurrentPage",
            name: "getCurrentPage"
        }, {
            key: "startPlay",
            name: "startPlay"
        }, {
            key: "pausePlay",
            name: "pausePlay"
        }]
          , ce = le.map((function(t) {
            return {
                key: t.key,
                sourceKey: he + "." + t.name
            }
        }
        ))
          , pe = function(t, e) {
            return t.pageX === e.pageX && t.pageY === e.pageY
        }
          , ue = function() {
            function t(t) {
                this.scroll = t,
                this.cachedClonedPageDOM = [],
                this.resetLooping = !1,
                this.autoplayTimer = 0,
                this.satisfyInitialization() && this.init()
            }
            return t.prototype.satisfyInitialization = function() {
                return !(this.scroll.scroller.content.children.length <= 0) || (c("slide need at least one slide page to be initialised.please check your DOM layout."),
                !1)
            }
            ,
            t.prototype.init = function() {
                this.willChangeToPage = S({}, ne),
                this.handleBScroll(),
                this.handleOptions(),
                this.handleHooks(),
                this.createPages()
            }
            ,
            t.prototype.createPages = function() {
                this.pages = new ae(this.scroll,this.options)
            }
            ,
            t.prototype.handleBScroll = function() {
                this.scroll.registerType(["slideWillChange", "slidePageChanged"]),
                this.scroll.proxy(ce)
            }
            ,
            t.prototype.handleOptions = function() {
                var t = !0 === this.scroll.options.slide ? {} : this.scroll.options.slide
                  , e = {
                    loop: !0,
                    threshold: .1,
                    speed: 400,
                    easing: tt.bounce,
                    listenFlick: !0,
                    autoplay: !0,
                    interval: 3e3,
                    startPageXIndex: 0,
                    startPageYIndex: 0
                };
                this.options = S(e, t)
            }
            ,
            t.prototype.handleLoop = function(t) {
                var e = this.options.loop
                  , o = this.scroll.scroller.content
                  , s = o.children.length;
                e && (o !== t ? (this.resetLoopChangedStatus(),
                this.removeClonedSlidePage(t),
                s > 1 && this.cloneFirstAndLastSlidePage(o)) : 3 === s && this.initialised ? (this.removeClonedSlidePage(o),
                this.moreToOnePageInLoop = !0,
                this.oneToMorePagesInLoop = !1) : s > 1 ? (this.initialised && 0 === this.cachedClonedPageDOM.length ? (this.oneToMorePagesInLoop = !0,
                this.moreToOnePageInLoop = !1) : (this.removeClonedSlidePage(o),
                this.resetLoopChangedStatus()),
                this.cloneFirstAndLastSlidePage(o)) : this.resetLoopChangedStatus())
            }
            ,
            t.prototype.resetLoopChangedStatus = function() {
                this.moreToOnePageInLoop = !1,
                this.oneToMorePagesInLoop = !1
            }
            ,
            t.prototype.handleHooks = function() {
                var t = this
                  , e = this.scroll.hooks
                  , o = this.scroll.scroller.hooks
                  , s = this.options.listenFlick;
                this.prevContent = this.scroll.scroller.content,
                this.hooksFn = [],
                this.registerHooks(this.scroll, this.scroll.eventTypes.beforeScrollStart, this.pausePlay),
                this.registerHooks(this.scroll, this.scroll.eventTypes.scrollEnd, this.modifyCurrentPage),
                this.registerHooks(this.scroll, this.scroll.eventTypes.scrollEnd, this.startPlay),
                this.scroll.eventTypes.mousewheelMove && (this.registerHooks(this.scroll, this.scroll.eventTypes.mousewheelMove, (function() {
                    return !0
                }
                )),
                this.registerHooks(this.scroll, this.scroll.eventTypes.mousewheelEnd, (function(e) {
                    1 !== e.directionX && 1 !== e.directionY || t.next(),
                    -1 !== e.directionX && -1 !== e.directionY || t.prev()
                }
                ))),
                this.registerHooks(e, e.eventTypes.refresh, this.refreshHandler),
                this.registerHooks(e, e.eventTypes.destroy, this.destroy),
                this.registerHooks(o, o.eventTypes.beforeRefresh, (function() {
                    t.handleLoop(t.prevContent),
                    t.setSlideInlineStyle()
                }
                )),
                this.registerHooks(o, o.eventTypes.momentum, this.modifyScrollMetaHandler),
                this.registerHooks(o, o.eventTypes.scroll, this.scrollHandler),
                this.registerHooks(o, o.eventTypes.checkClick, this.startPlay),
                s && this.registerHooks(o, o.eventTypes.flick, this.flickHandler)
            }
            ,
            t.prototype.startPlay = function() {
                var t = this
                  , e = this.options
                  , o = e.interval
                  , s = e.autoplay;
                s && (clearTimeout(this.autoplayTimer),
                this.autoplayTimer = window.setTimeout((function() {
                    t.next()
                }
                ), o))
            }
            ,
            t.prototype.pausePlay = function() {
                this.options.autoplay && clearTimeout(this.autoplayTimer)
            }
            ,
            t.prototype.setSlideInlineStyle = function() {
                var t = [{
                    direction: "scrollX",
                    sizeType: "offsetWidth",
                    styleType: "width"
                }, {
                    direction: "scrollY",
                    sizeType: "offsetHeight",
                    styleType: "height"
                }]
                  , e = this.scroll.scroller
                  , o = e.content
                  , s = e.wrapper
                  , i = this.scroll.options;
                t.forEach((function(t) {
                    var e = t.direction
                      , r = t.sizeType
                      , n = t.styleType;
                    if (i[e]) {
                        for (var a = s[r], h = o.children, l = h.length, c = 0; c < l; c++) {
                            var p = h[c];
                            p.style[n] = a + "px"
                        }
                        o.style[n] = a * l + "px"
                    }
                }
                ))
            }
            ,
            t.prototype.next = function(t, e) {
                var o = this.pages.nextPageIndex()
                  , s = o.pageX
                  , i = o.pageY;
                this.goTo(s, i, t, e)
            }
            ,
            t.prototype.prev = function(t, e) {
                var o = this.pages.prevPageIndex()
                  , s = o.pageX
                  , i = o.pageY;
                this.goTo(s, i, t, e)
            }
            ,
            t.prototype.goToPage = function(t, e, o, s) {
                var i = this.pages.getValidPageIndex(t, e);
                this.goTo(i.pageX, i.pageY, o, s)
            }
            ,
            t.prototype.getCurrentPage = function() {
                return this.exposedPage || this.pages.getInitialPage(!1, !0)
            }
            ,
            t.prototype.setCurrentPage = function(t) {
                this.pages.setCurrentPage(t),
                this.exposedPage = this.pages.getExposedPage(t)
            }
            ,
            t.prototype.nearestPage = function(t, e) {
                var o = this.scroll.scroller
                  , s = o.scrollBehaviorX
                  , i = o.scrollBehaviorY
                  , r = s.maxScrollPos
                  , n = s.minScrollPos
                  , a = i.maxScrollPos
                  , h = i.minScrollPos;
                return this.pages.getNearestPage(w(t, r, n), w(e, a, h))
            }
            ,
            t.prototype.satisfyThreshold = function(t, e) {
                var o = this.scroll.scroller
                  , s = o.scrollBehaviorX
                  , i = o.scrollBehaviorY
                  , r = !0;
                return Math.abs(t - s.absStartPos) <= this.thresholdX && Math.abs(e - i.absStartPos) <= this.thresholdY && (r = !1),
                r
            }
            ,
            t.prototype.refreshHandler = function(t) {
                var e = this;
                if (this.satisfyInitialization()) {
                    this.pages.refresh(),
                    this.computeThreshold();
                    var o = this.contentChanged = this.prevContent !== t;
                    o && (this.prevContent = t);
                    var s = this.pages.getInitialPage(this.oneToMorePagesInLoop || this.moreToOnePageInLoop, o || !this.initialised);
                    this.initialised ? this.goTo(s.pageX, s.pageY, 0) : this.registerHooks(this.scroll.hooks, this.scroll.hooks.eventTypes.beforeInitialScrollTo, (function(t) {
                        e.initialised = !0,
                        t.x = s.x,
                        t.y = s.y
                    }
                    )),
                    this.startPlay()
                }
            }
            ,
            t.prototype.computeThreshold = function() {
                var t = this.options.threshold;
                if (t % 1 === 0)
                    this.thresholdX = t,
                    this.thresholdY = t;
                else {
                    var e = this.pages.getPageStats()
                      , o = e.width
                      , s = e.height;
                    this.thresholdX = Math.round(o * t),
                    this.thresholdY = Math.round(s * t)
                }
            }
            ,
            t.prototype.cloneFirstAndLastSlidePage = function(t) {
                var e = t.children
                  , o = e[e.length - 1].cloneNode(!0)
                  , s = e[0].cloneNode(!0);
                G(o, t),
                t.appendChild(s),
                this.cachedClonedPageDOM = [o, s]
            }
            ,
            t.prototype.removeClonedSlidePage = function(t) {
                var e = t && t.children || [];
                e.length && this.cachedClonedPageDOM.forEach((function(e) {
                    V(t, e)
                }
                )),
                this.cachedClonedPageDOM = []
            }
            ,
            t.prototype.modifyCurrentPage = function(t) {
                var e = this.getCurrentPage()
                  , o = e.pageX
                  , s = e.pageY
                  , i = this.nearestPage(t.x, t.y);
                if (this.setCurrentPage(i),
                this.contentChanged)
                    return this.contentChanged = !1,
                    !0;
                var r = this.getCurrentPage()
                  , n = r.pageX
                  , a = r.pageY;
                if (this.pageWillChangeTo(i),
                this.oneToMorePagesInLoop)
                    return this.oneToMorePagesInLoop = !1,
                    !0;
                if (this.moreToOnePageInLoop && 0 === o && 0 === s)
                    return this.moreToOnePageInLoop = !1,
                    !0;
                if (o !== n || s !== a) {
                    var h = this.pages.getExposedPageByPageIndex(n, a);
                    this.scroll.trigger(this.scroll.eventTypes.slidePageChanged, h)
                }
                if (!this.resetLooping) {
                    var l = this.pages.resetLoopPage();
                    return l ? (this.resetLooping = !0,
                    this.goTo(l.pageX, l.pageY, 0),
                    !0) : void 0
                }
                this.resetLooping = !1
            }
            ,
            t.prototype.goTo = function(t, e, o, s) {
                var i = this.pages.getInternalPage(t, e)
                  , r = s || this.options.easing || tt.bounce
                  , n = i.x
                  , a = i.y
                  , h = n - this.scroll.scroller.scrollBehaviorX.currentPos
                  , l = a - this.scroll.scroller.scrollBehaviorY.currentPos;
                h || l ? (o = void 0 === o ? this.getEaseTime(h, l) : o,
                this.scroll.scroller.scrollTo(n, a, o, r)) : this.scroll.scroller.togglePointerEvents(!0)
            }
            ,
            t.prototype.flickHandler = function() {
                var t = this.scroll.scroller
                  , e = t.scrollBehaviorX
                  , o = t.scrollBehaviorY
                  , s = e.currentPos
                  , i = e.startPos
                  , r = e.direction
                  , n = o.currentPos
                  , a = o.startPos
                  , h = o.direction
                  , l = this.pages.currentPage
                  , c = l.pageX
                  , p = l.pageY
                  , u = this.getEaseTime(s - i, n - a);
                this.goTo(c + r, p + h, u)
            }
            ,
            t.prototype.getEaseTime = function(t, e) {
                return this.options.speed || Math.max(Math.max(Math.min(Math.abs(t), 1e3), Math.min(Math.abs(e), 1e3)), 300)
            }
            ,
            t.prototype.modifyScrollMetaHandler = function(t) {
                var e = this.scroll.scroller
                  , o = e.scrollBehaviorX
                  , s = e.scrollBehaviorY
                  , i = e.animater
                  , r = t.newX
                  , n = t.newY
                  , a = this.satisfyThreshold(r, n) || i.forceStopped ? this.pages.getPageByDirection(this.nearestPage(r, n), o.direction, s.direction) : this.pages.currentPage;
                t.time = this.getEaseTime(t.newX - a.x, t.newY - a.y),
                t.newX = a.x,
                t.newY = a.y,
                t.easing = this.options.easing || tt.bounce
            }
            ,
            t.prototype.scrollHandler = function(t) {
                var e = t.x
                  , o = t.y;
                if (this.satisfyThreshold(e, o)) {
                    var s = this.nearestPage(e, o);
                    this.pageWillChangeTo(s)
                }
            }
            ,
            t.prototype.pageWillChangeTo = function(t) {
                var e = this.pages.getWillChangedPage(t);
                pe(this.willChangeToPage, e) || (this.willChangeToPage = e,
                this.scroll.trigger(this.scroll.eventTypes.slideWillChange, this.willChangeToPage))
            }
            ,
            t.prototype.registerHooks = function(t, e, o) {
                t.on(e, o, this),
                this.hooksFn.push([t, e, o])
            }
            ,
            t.prototype.destroy = function() {
                var t = this.scroll.scroller.content
                  , e = this.options
                  , o = e.loop
                  , s = e.autoplay;
                o && this.removeClonedSlidePage(t),
                s && clearTimeout(this.autoplayTimer),
                this.hooksFn.forEach((function(t) {
                    var e = t[0]
                      , o = t[1]
                      , s = t[2];
                    e.eventTypes[o] && e.off(o, s)
                }
                )),
                this.hooksFn.length = 0
            }
            ,
            t.pluginName = "slide",
            t
        }()
          , de = "plugins.wheel"
          , fe = [{
            key: "wheelTo",
            name: "wheelTo"
        }, {
            key: "getSelectedIndex",
            name: "getSelectedIndex"
        }, {
            key: "restorePosition",
            name: "restorePosition"
        }]
          , ge = fe.map((function(t) {
            return {
                key: t.key,
                sourceKey: de + "." + t.name
            }
        }
        ))
          , ve = "wheelIndexChanged"
          , ye = {
            rate: 4
        }
          , me = function() {
            function t(t) {
                this.scroll = t,
                this.init()
            }
            return t.prototype.init = function() {
                this.handleBScroll(),
                this.handleOptions(),
                this.handleHooks(),
                this.refreshBoundary(),
                this.setSelectedIndex(this.options.selectedIndex)
            }
            ,
            t.prototype.handleBScroll = function() {
                this.scroll.proxy(ge),
                this.scroll.registerType([ve])
            }
            ,
            t.prototype.handleOptions = function() {
                var t = !0 === this.scroll.options.wheel ? {} : this.scroll.options.wheel
                  , e = {
                    wheelWrapperClass: "wheel-scroll",
                    wheelItemClass: "wheel-item",
                    rotate: 25,
                    adjustTime: 400,
                    selectedIndex: 0,
                    wheelDisabledItemClass: "wheel-disabled-item"
                };
                this.options = S(e, t)
            }
            ,
            t.prototype.handleHooks = function() {
                var t = this
                  , e = this.scroll
                  , o = this.scroll.scroller
                  , s = o.actionsHandler
                  , i = o.scrollBehaviorX
                  , r = o.scrollBehaviorY
                  , n = o.animater
                  , a = o.content;
                e.on(e.eventTypes.scrollEnd, (function(e) {
                    var s = t.findNearestValidWheel(e.y).index;
                    if (o.animater.forceStopped && !t.isAdjustingPosition)
                        return t.target = t.items[s],
                        !0;
                    t.setSelectedIndex(s),
                    t.isAdjustingPosition && (t.isAdjustingPosition = !1)
                }
                )),
                this.scroll.hooks.on(this.scroll.hooks.eventTypes.refresh, (function(e) {
                    e !== a && (a = e,
                    t.setSelectedIndex(t.options.selectedIndex, !0)),
                    t.rotateX(t.scroll.y),
                    t.wheelTo(t.selectedIndex, 0)
                }
                )),
                this.scroll.hooks.on(this.scroll.hooks.eventTypes.beforeInitialScrollTo, (function(e) {
                    e.x = 0,
                    e.y = -t.selectedIndex * t.itemHeight
                }
                )),
                o.hooks.on(o.hooks.eventTypes.checkClick, (function() {
                    var e = _(t.items).indexOf(t.target);
                    return -1 === e || t.wheelTo(e, t.options.adjustTime, tt.swipe),
                    !0
                }
                )),
                o.hooks.on(o.hooks.eventTypes.scrollTo, (function(e) {
                    e.y = t.findNearestValidWheel(e.y).y
                }
                )),
                o.hooks.on(o.hooks.eventTypes.minDistanceScroll, (function() {
                    var t = o.animater;
                    !0 === t.forceStopped && (t.forceStopped = !1)
                }
                )),
                o.hooks.on(o.hooks.eventTypes.scrollToElement, (function(e, o) {
                    if (!J(e, t.options.wheelItemClass))
                        return !0;
                    o.top = t.findNearestValidWheel(o.top).y
                }
                )),
                s.hooks.on(s.hooks.eventTypes.beforeStart, (function(e) {
                    t.target = e.target
                }
                )),
                i.hooks.on(i.hooks.eventTypes.computeBoundary, (function(t) {
                    t.maxScrollPos = 0,
                    t.minScrollPos = 0
                }
                )),
                r.hooks.on(r.hooks.eventTypes.computeBoundary, (function(e) {
                    t.items = t.scroll.scroller.content.children,
                    t.checkWheelAllDisabled(),
                    t.itemHeight = t.items.length > 0 ? r.contentSize / t.items.length : 0,
                    e.maxScrollPos = -t.itemHeight * (t.items.length - 1),
                    e.minScrollPos = 0
                }
                )),
                r.hooks.on(r.hooks.eventTypes.momentum, (function(e) {
                    e.rate = ye.rate,
                    e.destination = t.findNearestValidWheel(e.destination).y
                }
                )),
                r.hooks.on(r.hooks.eventTypes.end, (function(e) {
                    var o = t.findNearestValidWheel(r.currentPos);
                    e.destination = o.y,
                    e.duration = t.options.adjustTime
                }
                )),
                n.hooks.on(n.hooks.eventTypes.time, (function(e) {
                    t.transitionDuration(e)
                }
                )),
                n.hooks.on(n.hooks.eventTypes.timeFunction, (function(e) {
                    t.timeFunction(e)
                }
                )),
                n.hooks.on(n.hooks.eventTypes.callStop, (function() {
                    var e = t.findNearestValidWheel(t.scroll.y).index;
                    t.isAdjustingPosition = !0,
                    t.wheelTo(e, 0)
                }
                )),
                n.translater.hooks.on(n.translater.hooks.eventTypes.translate, (function(e) {
                    t.rotateX(e.y)
                }
                ))
            }
            ,
            t.prototype.refreshBoundary = function() {
                var t = this.scroll.scroller
                  , e = t.scrollBehaviorX
                  , o = t.scrollBehaviorY
                  , s = t.content;
                e.refresh(s),
                o.refresh(s)
            }
            ,
            t.prototype.setSelectedIndex = function(t, e) {
                void 0 === e && (e = !1);
                var o = this.selectedIndex;
                this.selectedIndex = t,
                o === t || e || this.scroll.trigger(ve, t)
            }
            ,
            t.prototype.getSelectedIndex = function() {
                return this.selectedIndex
            }
            ,
            t.prototype.wheelTo = function(t, e, o) {
                void 0 === t && (t = 0),
                void 0 === e && (e = 0);
                var s = -t * this.itemHeight;
                this.scroll.scrollTo(0, s, e, o)
            }
            ,
            t.prototype.restorePosition = function() {
                var t = this.scroll.pending;
                if (t) {
                    var e = this.getSelectedIndex();
                    this.scroll.scroller.animater.clearTimer(),
                    this.wheelTo(e, 0)
                }
            }
            ,
            t.prototype.transitionDuration = function(t) {
                for (var e = 0; e < this.items.length; e++)
                    this.items[e].style[N.transitionDuration] = t + "ms"
            }
            ,
            t.prototype.timeFunction = function(t) {
                for (var e = 0; e < this.items.length; e++)
                    this.items[e].style[N.transitionTimingFunction] = t
            }
            ,
            t.prototype.rotateX = function(t) {
                for (var e = this.options.rotate, o = void 0 === e ? 25 : e, s = 0; s < this.items.length; s++) {
                    var i = o * (t / this.itemHeight + s)
                      , r = i.toFixed(3);
                    this.items[s].style[N.transform] = "rotateX(" + r + "deg)"
                }
            }
            ,
            t.prototype.findNearestValidWheel = function(t) {
                t = t > 0 ? 0 : t < this.scroll.maxScrollY ? this.scroll.maxScrollY : t;
                var e = Math.abs(Math.round(-t / this.itemHeight))
                  , o = e
                  , s = this.items
                  , i = this.options.wheelDisabledItemClass;
                while (e >= 0) {
                    if (!J(s[e], i))
                        break;
                    e--
                }
                if (e < 0) {
                    e = o;
                    while (e <= s.length - 1) {
                        if (!J(s[e], i))
                            break;
                        e++
                    }
                }
                return e === s.length && (e = o),
                {
                    index: this.wheelItemsAllDisabled ? -1 : e,
                    y: -e * this.itemHeight
                }
            }
            ,
            t.prototype.checkWheelAllDisabled = function() {
                var t = this.options.wheelDisabledItemClass
                  , e = this.items;
                this.wheelItemsAllDisabled = !0;
                for (var o = 0; o < e.length; o++)
                    if (!J(e[o], t)) {
                        this.wheelItemsAllDisabled = !1;
                        break
                    }
            }
            ,
            t.pluginName = "wheel",
            t
        }()
          , ke = "plugins.zoom"
          , Te = [{
            key: "zoomTo",
            name: "zoomTo"
        }]
          , Se = Te.map((function(t) {
            return {
                key: t.key,
                sourceKey: ke + "." + t.name
            }
        }
        ))
          , Ae = 2
          , be = 1
          , we = function() {
            function t(t) {
                this.scroll = t,
                this.scale = be,
                this.prevScale = 1,
                this.init()
            }
            return t.prototype.init = function() {
                this.handleBScroll(),
                this.handleOptions(),
                this.handleHooks(),
                this.tryInitialZoomTo(this.zoomOpt)
            }
            ,
            t.prototype.zoomTo = function(t, e, o, s) {
                var i = this.resolveOrigin(e, o)
                  , r = i.originX
                  , n = i.originY
                  , a = {
                    x: r,
                    y: n,
                    baseScale: this.scale
                };
                this._doZoomTo(t, a, s, !0)
            }
            ,
            t.prototype.handleBScroll = function() {
                this.scroll.proxy(Se),
                this.scroll.registerType(["beforeZoomStart", "zoomStart", "zooming", "zoomEnd"])
            }
            ,
            t.prototype.handleOptions = function() {
                var t = !0 === this.scroll.options.zoom ? {} : this.scroll.options.zoom
                  , e = {
                    start: 1,
                    min: 1,
                    max: 4,
                    initialOrigin: [0, 0],
                    minimalZoomDistance: 5,
                    bounceTime: 800
                };
                this.zoomOpt = S(e, t)
            }
            ,
            t.prototype.handleHooks = function() {
                var t = this
                  , e = this.scroll
                  , o = this.scroll.scroller;
                this.wrapper = this.scroll.scroller.wrapper,
                this.setTransformOrigin(this.scroll.scroller.content);
                var s = o.scrollBehaviorX
                  , i = o.scrollBehaviorY;
                this.hooksFn = [],
                this.registerHooks(e.hooks, e.hooks.eventTypes.contentChanged, (function(e) {
                    t.setTransformOrigin(e),
                    t.scale = be,
                    t.tryInitialZoomTo(t.zoomOpt)
                }
                )),
                this.registerHooks(e.hooks, e.hooks.eventTypes.beforeInitialScrollTo, (function() {
                    if (t.zoomOpt.start !== be)
                        return !0
                }
                )),
                this.registerHooks(s.hooks, s.hooks.eventTypes.beforeComputeBoundary, (function() {
                    var e = W(t.scroll.scroller.content);
                    s.contentSize = Math.floor(e.width * t.scale)
                }
                )),
                this.registerHooks(i.hooks, i.hooks.eventTypes.beforeComputeBoundary, (function() {
                    var e = W(t.scroll.scroller.content);
                    i.contentSize = Math.floor(e.height * t.scale)
                }
                )),
                this.registerHooks(o.actions.hooks, o.actions.hooks.eventTypes.start, (function(e) {
                    var o = e.touches && e.touches.length || 0;
                    t.fingersOperation(o),
                    o === Ae && t.zoomStart(e)
                }
                )),
                this.registerHooks(o.actions.hooks, o.actions.hooks.eventTypes.beforeMove, (function(e) {
                    var o = e.touches && e.touches.length || 0;
                    if (t.fingersOperation(o),
                    o === Ae)
                        return t.zoom(e),
                        !0
                }
                )),
                this.registerHooks(o.actions.hooks, o.actions.hooks.eventTypes.beforeEnd, (function(e) {
                    var o = t.fingersOperation();
                    if (o === Ae)
                        return t.zoomEnd(),
                        !0
                }
                )),
                this.registerHooks(o.translater.hooks, o.translater.hooks.eventTypes.beforeTranslate, (function(e, o) {
                    var s = o.scale ? o.scale : t.prevScale;
                    t.prevScale = s,
                    e.push("scale(" + s + ")")
                }
                )),
                this.registerHooks(o.hooks, o.hooks.eventTypes.scrollEnd, (function() {
                    t.fingersOperation() === Ae && t.scroll.trigger(t.scroll.eventTypes.zoomEnd, {
                        scale: t.scale
                    })
                }
                )),
                this.registerHooks(this.scroll.hooks, "destroy", this.destroy)
            }
            ,
            t.prototype.setTransformOrigin = function(t) {
                t.style[N.transformOrigin] = "0 0"
            }
            ,
            t.prototype.tryInitialZoomTo = function(t) {
                var e = t.start
                  , o = t.initialOrigin
                  , s = this.scroll.scroller
                  , i = s.scrollBehaviorX
                  , r = s.scrollBehaviorY;
                e !== be && (this.resetBoundaries([i, r]),
                this.zoomTo(e, o[0], o[1], 0))
            }
            ,
            t.prototype.fingersOperation = function(t) {
                if ("number" !== typeof t)
                    return this.numberOfFingers;
                this.numberOfFingers = t
            }
            ,
            t.prototype._doZoomTo = function(t, e, o, s) {
                var i = this;
                void 0 === o && (o = this.zoomOpt.bounceTime),
                void 0 === s && (s = !1);
                var r = this.zoomOpt
                  , n = r.min
                  , a = r.max
                  , h = this.scale
                  , l = w(t, n, a);
                (function() {
                    if (0 !== o) {
                        if (o > 0) {
                            var t, e = T(), s = e + o, r = function() {
                                var n = T();
                                if (n >= s)
                                    return i.scroll.trigger(i.scroll.eventTypes.zooming, {
                                        scale: l
                                    }),
                                    void rt(t);
                                var a = tt.bounce.fn((n - e) / o)
                                  , c = a * (l - h) + h;
                                i.scroll.trigger(i.scroll.eventTypes.zooming, {
                                    scale: c
                                }),
                                t = it(r)
                            };
                            r()
                        }
                    } else
                        i.scroll.trigger(i.scroll.eventTypes.zooming, {
                            scale: l
                        })
                }
                )(),
                this.fingersOperation(2),
                this._zoomTo(l, h, e, o, s)
            }
            ,
            t.prototype._zoomTo = function(t, e, o, s, i) {
                void 0 === i && (i = !1);
                var r = t / o.baseScale;
                this.setScale(t);
                var n = this.scroll.scroller
                  , a = n.scrollBehaviorX
                  , h = n.scrollBehaviorY;
                this.resetBoundaries([a, h]);
                var l = this.getNewPos(o.x, r, a, !0, i)
                  , c = this.getNewPos(o.y, r, h, !0, i);
                a.currentPos === Math.round(l) && h.currentPos === Math.round(c) && t === e || n.scrollTo(l, c, s, tt.bounce, {
                    start: {
                        scale: e
                    },
                    end: {
                        scale: t
                    }
                })
            }
            ,
            t.prototype.resolveOrigin = function(t, e) {
                var o = this.scroll.scroller
                  , s = o.scrollBehaviorX
                  , i = o.scrollBehaviorY
                  , r = {
                    left: function() {
                        return 0
                    },
                    top: function() {
                        return 0
                    },
                    right: function() {
                        return s.contentSize
                    },
                    bottom: function() {
                        return i.contentSize
                    },
                    center: function(t) {
                        var e = 0 === t ? s.contentSize : i.contentSize;
                        return e / 2
                    }
                };
                return {
                    originX: "number" === typeof t ? t : r[t](0),
                    originY: "number" === typeof e ? e : r[e](1)
                }
            }
            ,
            t.prototype.zoomStart = function(t) {
                var e = t.touches[0]
                  , o = t.touches[1];
                this.startDistance = this.getFingerDistance(t),
                this.startScale = this.scale;
                var s = C(this.wrapper)
                  , i = s.left
                  , r = s.top;
                this.origin = {
                    x: Math.abs(e.pageX + o.pageX) / 2 + i - this.scroll.x,
                    y: Math.abs(e.pageY + o.pageY) / 2 + r - this.scroll.y,
                    baseScale: this.startScale
                },
                this.scroll.trigger(this.scroll.eventTypes.beforeZoomStart)
            }
            ,
            t.prototype.zoom = function(t) {
                var e = this.getFingerDistance(t);
                if (this.zoomed || !(Math.abs(e - this.startDistance) < this.zoomOpt.minimalZoomDistance)) {
                    var o = this.dampingScale(e / this.startDistance * this.startScale)
                      , s = o / this.startScale;
                    this.setScale(o),
                    this.zoomed || (this.zoomed = !0,
                    this.scroll.trigger(this.scroll.eventTypes.zoomStart));
                    var i = this.scroll.scroller
                      , r = i.scrollBehaviorX
                      , n = i.scrollBehaviorY
                      , a = this.getNewPos(this.origin.x, s, r, !1, !1)
                      , h = this.getNewPos(this.origin.y, s, n, !1, !1);
                    this.scroll.trigger(this.scroll.eventTypes.zooming, {
                        scale: this.scale
                    }),
                    i.translater.translate({
                        x: a,
                        y: h,
                        scale: o
                    })
                }
            }
            ,
            t.prototype.zoomEnd = function() {
                this.zoomed && (this.shouldRebound() ? this._doZoomTo(this.scale, this.origin, this.zoomOpt.bounceTime) : this.scroll.trigger(this.scroll.eventTypes.zoomEnd, {
                    scale: this.scale
                }))
            }
            ,
            t.prototype.getFingerDistance = function(t) {
                var e = t.touches[0]
                  , o = t.touches[1]
                  , s = Math.abs(e.pageX - o.pageX)
                  , i = Math.abs(e.pageY - o.pageY);
                return b(s, i)
            }
            ,
            t.prototype.shouldRebound = function() {
                var t = this.zoomOpt
                  , e = t.min
                  , o = t.max
                  , s = this.scale;
                if (s !== w(s, e, o))
                    return !0;
                var i = this.scroll.scroller
                  , r = i.scrollBehaviorX
                  , n = i.scrollBehaviorY;
                this.resetBoundaries([r, n]);
                var a = r.checkInBoundary().inBoundary
                  , h = r.checkInBoundary().inBoundary;
                return !(a && h)
            }
            ,
            t.prototype.dampingScale = function(t) {
                var e = this.zoomOpt
                  , o = e.min
                  , s = e.max;
                return t < o ? t = .5 * o * Math.pow(2, t / o) : t > s && (t = 2 * s * Math.pow(.5, s / t)),
                t
            }
            ,
            t.prototype.setScale = function(t) {
                this.scale = t
            }
            ,
            t.prototype.resetBoundaries = function(t) {
                t.forEach((function(t) {
                    return t.computeBoundary()
                }
                ))
            }
            ,
            t.prototype.getNewPos = function(t, e, o, s, i) {
                void 0 === i && (i = !1);
                var r = t - t * e + (i ? o.currentPos : o.startPos);
                return s && (r = w(r, o.maxScrollPos, o.minScrollPos)),
                r > 0 ? Math.floor(r) : Math.ceil(r)
            }
            ,
            t.prototype.registerHooks = function(t, e, o) {
                t.on(e, o, this),
                this.hooksFn.push([t, e, o])
            }
            ,
            t.prototype.destroy = function() {
                this.hooksFn.forEach((function(t) {
                    var e = t[0]
                      , o = t[1]
                      , s = t[2];
                    e.off(o, s)
                }
                )),
                this.hooksFn.length = 0
            }
            ,
            t.pluginName = "zoom",
            t
        }()
          , Pe = function() {
            function t(t) {
                this.ancestors = [],
                this.descendants = [],
                this.hooksManager = [],
                this.analyzed = !1,
                this.selfScroll = t
            }
            return t.create = function(e) {
                return new t(e)
            }
            ,
            t.prototype.hasAncestors = function(t) {
                var e = P(this.ancestors, (function(e) {
                    var o = e[0];
                    return o === t
                }
                ));
                return e > -1
            }
            ,
            t.prototype.hasDescendants = function(t) {
                var e = P(this.descendants, (function(e) {
                    var o = e[0];
                    return o === t
                }
                ));
                return e > -1
            }
            ,
            t.prototype.addAncestor = function(t, e) {
                var o = this.ancestors;
                o.push([t, e]),
                o.sort((function(t, e) {
                    return t[1] - e[1]
                }
                ))
            }
            ,
            t.prototype.addDescendant = function(t, e) {
                var o = this.descendants;
                o.push([t, e]),
                o.sort((function(t, e) {
                    return t[1] - e[1]
                }
                ))
            }
            ,
            t.prototype.removeAncestor = function(t) {
                var e = this.ancestors;
                if (e.length) {
                    var o = P(this.ancestors, (function(e) {
                        var o = e[0];
                        return o === t
                    }
                    ));
                    if (o > -1)
                        return e.splice(o, 1)
                }
            }
            ,
            t.prototype.removeDescendant = function(t) {
                var e = this.descendants;
                if (e.length) {
                    var o = P(this.descendants, (function(e) {
                        var o = e[0];
                        return o === t
                    }
                    ));
                    if (o > -1)
                        return e.splice(o, 1)
                }
            }
            ,
            t.prototype.registerHooks = function(t, e, o) {
                t.on(e, o),
                this.hooksManager.push([t, e, o])
            }
            ,
            t.prototype.setAnalyzed = function(t) {
                void 0 === t && (t = !1),
                this.analyzed = t
            }
            ,
            t.prototype.purge = function() {
                var t = this;
                this.ancestors.forEach((function(e) {
                    var o = e[0];
                    o.removeDescendant(t)
                }
                )),
                this.descendants.forEach((function(e) {
                    var o = e[0];
                    o.removeAncestor(t)
                }
                )),
                this.hooksManager.forEach((function(t) {
                    var e = t[0]
                      , o = t[1]
                      , s = t[2];
                    e.off(o, s)
                }
                )),
                this.hooksManager = []
            }
            ,
            t
        }()
          , xe = "plugins.nestedScroll"
          , Me = [{
            key: "purgeNestedScroll",
            name: "purgeNestedScroll"
        }]
          , Be = Me.map((function(t) {
            return {
                key: t.key,
                sourceKey: xe + "." + t.name
            }
        }
        ))
          , Ee = "INTERNAL_NESTED_SCROLL"
          , Oe = function(t) {
            t.forEach((function(t) {
                t.pending && (t.stop(),
                t.resetPosition())
            }
            ))
        }
          , Ye = function(t) {
            t.forEach((function(t) {
                t.enable()
            }
            ))
        }
          , Xe = function(t, e) {
            t.forEach((function(t) {
                t.hasHorizontalScroll !== e.hasHorizontalScroll && t.hasVerticalScroll !== e.hasVerticalScroll || t.disable()
            }
            ))
        }
          , Ce = function(t) {
            t.forEach((function(t) {
                var e = t.scroller
                  , o = e.actions
                  , s = e.scrollBehaviorX
                  , i = e.scrollBehaviorY;
                o.fingerMoved = !0,
                o.contentMoved = !1,
                o.directionLockAction.reset(),
                s.start(),
                i.start(),
                s.resetStartPos(),
                i.resetStartPos(),
                o.startTime = +new Date
            }
            ))
        }
          , De = function(t) {
            var e = t.hasHorizontalScroll
              , o = t.hasVerticalScroll
              , s = t.x
              , i = t.y
              , r = t.minScrollX
              , n = t.maxScrollX
              , a = t.minScrollY
              , h = t.maxScrollY
              , l = t.movingDirectionX
              , c = t.movingDirectionY
              , p = !1
              , u = s >= r && -1 === l
              , d = s <= n && 1 === l
              , f = i >= a && -1 === c
              , g = i <= h && 1 === c;
            return o ? p = f || g : e && (p = u || d),
            p
        }
          , He = function(t) {
            var e = t.hasHorizontalScroll
              , o = t.hasVerticalScroll
              , s = t.x
              , i = t.y
              , r = t.minScrollX
              , n = t.maxScrollX
              , a = t.minScrollY
              , h = t.maxScrollY
              , l = !1
              , c = s > r
              , p = s < n
              , u = i > a
              , d = i < h;
            return o ? l = u || d : e && (l = c || p),
            l
        }
          , ze = function(t) {
            t.scroller.reflow(),
            t.resetPosition(0)
        }
          , Le = function(t, e) {
            var o = 0
              , s = t.parentNode;
            while (s && s !== e)
                o++,
                s = s.parentNode;
            return o
        }
          , Fe = function() {
            function t(e) {
                var o = this.handleOptions(e)
                  , s = t.instancesMap[o];
                return s || (s = t.instancesMap[o] = this,
                s.store = [],
                s.hooksFn = []),
                s.init(e),
                s
            }
            return t.getAllNestedScrolls = function() {
                var e = t.instancesMap;
                return Object.keys(e).map((function(t) {
                    return e[t]
                }
                ))
            }
            ,
            t.purgeAllNestedScrolls = function() {
                var e = t.getAllNestedScrolls();
                e.forEach((function(t) {
                    return t.purgeNestedScroll()
                }
                ))
            }
            ,
            t.prototype.handleOptions = function(t) {
                var e = !0 === t.options.nestedScroll ? {} : t.options.nestedScroll
                  , o = {
                    groupId: Ee
                };
                this.options = S(o, e);
                var s = typeof this.options.groupId;
                return "string" !== s && "number" !== s && c("groupId must be string or number for NestedScroll plugin"),
                this.options.groupId
            }
            ,
            t.prototype.init = function(t) {
                t.proxy(Be),
                this.addBScroll(t),
                this.buildBScrollGraph(),
                this.analyzeBScrollGraph(),
                this.ensureEventInvokeSequence(),
                this.handleHooks(t)
            }
            ,
            t.prototype.handleHooks = function(t) {
                var e = this;
                this.registerHooks(t.hooks, t.hooks.eventTypes.destroy, (function() {
                    e.deleteScroll(t)
                }
                ))
            }
            ,
            t.prototype.deleteScroll = function(t) {
                var e = t.wrapper;
                e.isBScrollContainer = void 0;
                var o = this.store
                  , s = this.hooksFn
                  , i = P(o, (function(e) {
                    return e.selfScroll === t
                }
                ));
                if (i > -1) {
                    var r = o[i];
                    r.purge(),
                    o.splice(i, 1)
                }
                var n = P(s, (function(e) {
                    var o = e[0];
                    return o === t.hooks
                }
                ));
                if (n > -1) {
                    var a = s[n]
                      , h = a[0]
                      , l = a[1]
                      , c = a[2];
                    h.off(l, c),
                    s.splice(n, 1)
                }
            }
            ,
            t.prototype.addBScroll = function(t) {
                this.store.push(Pe.create(t))
            }
            ,
            t.prototype.buildBScrollGraph = function() {
                for (var t, e, o, s, i = this.store, r = this.store.length, n = 0; n < r; n++) {
                    t = i[n],
                    o = t.selfScroll.wrapper;
                    for (var a = 0; a < r; a++)
                        if (e = i[a],
                        s = e.selfScroll.wrapper,
                        t !== e && o.contains(s)) {
                            var h = Le(s, o);
                            t.hasDescendants(e) || t.addDescendant(e, h),
                            e.hasAncestors(t) || e.addAncestor(t, h)
                        }
                }
            }
            ,
            t.prototype.analyzeBScrollGraph = function() {
                this.store.forEach((function(t) {
                    if (!t.analyzed) {
                        var e = t.ancestors
                          , o = t.descendants
                          , s = t.selfScroll
                          , i = function() {
                            var t = e.map((function(t) {
                                var e = t[0];
                                return e.selfScroll
                            }
                            ))
                              , i = o.map((function(t) {
                                var e = t[0];
                                return e.selfScroll
                            }
                            ));
                            Oe(h(t, i)),
                            He(s) && ze(s),
                            Ce(t),
                            Xe(t, s)
                        }
                          , r = function() {
                            var t = e.map((function(t) {
                                var e = t[0];
                                return e.selfScroll
                            }
                            ))
                              , s = o.map((function(t) {
                                var e = t[0];
                                return e.selfScroll
                            }
                            ));
                            Ye(h(t, s))
                        };
                        t.registerHooks(s, s.eventTypes.beforeScrollStart, i),
                        t.registerHooks(s, s.eventTypes.touchEnd, r);
                        var n = s.scroller.actions.hooks;
                        t.registerHooks(n, n.eventTypes.detectMovingDirection, (function() {
                            var t = e.map((function(t) {
                                var e = t[0];
                                return e.selfScroll
                            }
                            ))
                              , o = t[0]
                              , i = t.slice(1)
                              , r = s.scroller.actions.contentMoved
                              , n = 0 === t.length;
                            if (r)
                                Xe(t, s);
                            else if (!n && De(s))
                                return Xe([s], s),
                                o && Ye([o]),
                                Xe(i, s),
                                !0
                        }
                        )),
                        t.setAnalyzed(!0)
                    }
                }
                ))
            }
            ,
            t.prototype.ensureEventInvokeSequence = function() {
                var t = this.store.slice()
                  , e = t.sort((function(t, e) {
                    return t.descendants.length - e.descendants.length
                }
                ));
                e.forEach((function(t) {
                    var e = t.selfScroll;
                    e.scroller.actionsHandler.rebindDOMEvents()
                }
                ))
            }
            ,
            t.prototype.registerHooks = function(t, e, o) {
                t.on(e, o, this),
                this.hooksFn.push([t, e, o])
            }
            ,
            t.prototype.purgeNestedScroll = function() {
                var e = this.options.groupId;
                this.store.forEach((function(t) {
                    t.purge()
                }
                )),
                this.store = [],
                this.hooksFn.forEach((function(t) {
                    var e = t[0]
                      , o = t[1]
                      , s = t[2];
                    e.off(o, s)
                }
                )),
                this.hooksFn = [],
                delete t.instancesMap[e]
            }
            ,
            t.pluginName = "nestedScroll",
            t.instancesMap = {},
            t
        }()
          , Ie = 10
          , Ne = 30
          , Re = function() {
            function t(t, e) {
                this.wrapperHeight = t,
                this.tombstoneHeight = e,
                this.lastDirection = 1,
                this.lastPos = 0
            }
            return t.prototype.calculate = function(t, e) {
                var o = t - this.lastPos;
                this.lastPos = t;
                var s = this.getDirection(o)
                  , i = this.calculateIndex(0, t, e)
                  , r = this.calculateIndex(i, t + this.wrapperHeight, e);
                return 1 === s ? (i -= Ie,
                r += Ne) : (i -= Ne,
                r += Ie),
                i < 0 && (i = 0),
                {
                    start: i,
                    end: r
                }
            }
            ,
            t.prototype.getDirection = function(t) {
                var e;
                if (t > 0)
                    e = 1;
                else {
                    if (!(t < 0))
                        return this.lastDirection;
                    e = 0
                }
                return this.lastDirection = e,
                e
            }
            ,
            t.prototype.calculateIndex = function(t, e, o) {
                if (e <= 0)
                    return t;
                var s = t
                  , i = o[s] && -1 !== o[s].pos ? o[s].pos : 0
                  , r = i
                  , n = 0;
                while (s < o.length && o[s].pos < e)
                    r = o[s].pos,
                    s++;
                return s === o.length && (n = Math.floor((e - r) / this.tombstoneHeight)),
                s += n,
                s
            }
            ,
            t.prototype.resetState = function() {
                this.lastDirection = 1,
                this.lastPos = 0
            }
            ,
            t
        }()
          , We = function() {
            function t() {
                this.data = null,
                this.dom = null,
                this.tombstone = null,
                this.width = 0,
                this.height = 0,
                this.pos = 0
            }
            return t
        }()
          , je = function() {
            function t(t, e, o) {
                this.fetchFn = e,
                this.onFetchFinish = o,
                this.loadedNum = 0,
                this.fetching = !1,
                this.hasMore = !0,
                this.list = t || []
            }
            return t.prototype.update = function(t) {
                return n(this, void 0, void 0, (function() {
                    var e;
                    return a(this, (function(o) {
                        return this.hasMore || (t = Math.min(t, this.list.length)),
                        t > this.list.length && (e = t - this.list.length,
                        this.addEmptyData(e)),
                        [2, this.checkToFetch(t)]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.add = function(t) {
                for (var e = 0; e < t.length; e++)
                    this.list[this.loadedNum] ? this.list[this.loadedNum] = r(r({}, this.list[this.loadedNum]), {
                        data: t[e]
                    }) : this.list[this.loadedNum] = {
                        data: t[e]
                    },
                    this.loadedNum++;
                return this.list
            }
            ,
            t.prototype.addEmptyData = function(t) {
                for (var e = 0; e < t; e++)
                    this.list.push(new We);
                return this.list
            }
            ,
            t.prototype.fetch = function(t) {
                return n(this, void 0, void 0, (function() {
                    var e;
                    return a(this, (function(o) {
                        switch (o.label) {
                        case 0:
                            return this.fetching ? [2, []] : (this.fetching = !0,
                            [4, this.fetchFn(t)]);
                        case 1:
                            return e = o.sent(),
                            this.fetching = !1,
                            [2, e]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.checkToFetch = function(t) {
                return n(this, void 0, void 0, (function() {
                    var e, o, s;
                    return a(this, (function(i) {
                        switch (i.label) {
                        case 0:
                            return this.hasMore ? t <= this.loadedNum ? [2] : (e = t - this.loadedNum,
                            [4, this.fetch(e)]) : [2];
                        case 1:
                            return o = i.sent(),
                            o instanceof Array && o.length ? (this.add(o),
                            s = this.onFetchFinish(this.list, !0),
                            [2, this.checkToFetch(s)]) : ("boolean" === typeof o && !1 === o && (this.hasMore = !1,
                            this.list.splice(this.loadedNum),
                            this.onFetchFinish(this.list, !1)),
                            [2])
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.getList = function() {
                return this.list
            }
            ,
            t.prototype.resetState = function() {
                this.loadedNum = 0,
                this.fetching = !1,
                this.hasMore = !0,
                this.list = []
            }
            ,
            t
        }()
          , Ke = function() {
            function t(t) {
                this.create = t,
                this.cached = [],
                this.width = 0,
                this.height = 0,
                this.initialed = !1,
                this.getSize()
            }
            return t.isTombstone = function(t) {
                return !(!t || !t.classList) && t.classList.contains("tombstone")
            }
            ,
            t.prototype.getSize = function() {
                if (!this.initialed) {
                    var t = this.create();
                    t.style.position = "absolute",
                    document.body.appendChild(t),
                    t.style.display = "",
                    this.height = t.offsetHeight,
                    this.width = t.offsetWidth,
                    document.body.removeChild(t),
                    this.cached.push(t)
                }
            }
            ,
            t.prototype.getOne = function() {
                var t = this.cached.pop();
                if (t) {
                    var e = t.style;
                    return e.display = "",
                    e.opacity = "1",
                    e[N.transform] = "",
                    e[N.transition] = "",
                    t
                }
                return this.create()
            }
            ,
            t.prototype.recycle = function(t) {
                for (var e = 0, o = t; e < o.length; e++) {
                    var s = o[e];
                    s.style.display = "none",
                    this.cached.push(s)
                }
                return this.cached
            }
            ,
            t.prototype.recycleOne = function(t) {
                return this.cached.push(t),
                this.cached
            }
            ,
            t
        }()
          , Ue = 200
          , Ze = function() {
            function t(t, e, o) {
                this.renderFn = e,
                this.tombstone = o,
                this.unusedDom = [],
                this.timers = [],
                this.setContent(t)
            }
            return t.prototype.update = function(t, e, o) {
                e >= t.length && (e = t.length - 1),
                o > t.length && (o = t.length),
                this.collectUnusedDom(t, e, o),
                this.createDom(t, e, o),
                this.cacheHeight(t, e, o);
                var s = this.positionDom(t, e, o)
                  , i = s.startPos
                  , r = s.startDelta
                  , n = s.endPos;
                return {
                    start: e,
                    startPos: i,
                    startDelta: r,
                    end: o,
                    endPos: n
                }
            }
            ,
            t.prototype.collectUnusedDom = function(t, e, o) {
                for (var s = 0; s < t.length; s++)
                    if (s !== e) {
                        if (t[s].dom) {
                            var i = t[s].dom;
                            Ke.isTombstone(i) ? (this.tombstone.recycleOne(i),
                            i.style.display = "none") : this.unusedDom.push(i),
                            t[s].dom = null
                        }
                    } else
                        s = o - 1;
                return t
            }
            ,
            t.prototype.createDom = function(t, e, o) {
                for (var s = e; s < o; s++) {
                    var i = t[s].dom
                      , r = t[s].data;
                    if (i) {
                        if (!Ke.isTombstone(i) || !r)
                            continue;
                        t[s].tombstone = i,
                        t[s].dom = null
                    }
                    i = r ? this.renderFn(r, this.unusedDom.pop()) : this.tombstone.getOne(),
                    i.style.position = "absolute",
                    t[s].dom = i,
                    t[s].pos = -1,
                    this.content.appendChild(i)
                }
            }
            ,
            t.prototype.cacheHeight = function(t, e, o) {
                for (var s = e; s < o; s++)
                    t[s].data && !t[s].height && (t[s].height = t[s].dom.offsetHeight)
            }
            ,
            t.prototype.positionDom = function(t, e, o) {
                for (var s = this, i = [], r = this.getStartPos(t, e, o), n = r.start, a = r.delta, h = n, l = e; l < o; l++) {
                    var c = t[l].tombstone;
                    if (c) {
                        var p = c.style;
                        p[N.transition] = D + "transform " + Ue + "ms, opacity " + Ue + "ms",
                        p[N.transform] = "translateY(" + h + "px)",
                        p.opacity = "0",
                        t[l].tombstone = null,
                        i.push(c)
                    }
                    t[l].dom && t[l].pos !== h && (t[l].dom.style[N.transform] = "translateY(" + h + "px)",
                    t[l].pos = h),
                    h += t[l].height || this.tombstone.height
                }
                var u = window.setTimeout((function() {
                    s.tombstone.recycle(i)
                }
                ), Ue);
                return this.timers.push(u),
                {
                    startPos: n,
                    startDelta: a,
                    endPos: h
                }
            }
            ,
            t.prototype.getStartPos = function(t, e, o) {
                if (t[e] && -1 !== t[e].pos)
                    return {
                        start: t[e].pos,
                        delta: 0
                    };
                for (var s = -1 === t[0].pos ? 0 : t[0].pos, i = 0; i < e; i++)
                    s += t[i].height || this.tombstone.height;
                var r, n = s;
                for (r = e; r < o; r++)
                    if (!Ke.isTombstone(t[r].dom) && -1 !== t[r].pos) {
                        s = t[r].pos;
                        break
                    }
                var a = r;
                if (a < o)
                    while (a > e)
                        s -= t[a - 1].height,
                        a--;
                var h = n - s;
                return {
                    start: s,
                    delta: h
                }
            }
            ,
            t.prototype.removeTombstone = function() {
                for (var t = this.content.querySelectorAll(".tombstone"), e = t.length - 1; e >= 0; e--)
                    this.content.removeChild(t[e])
            }
            ,
            t.prototype.setContent = function(t) {
                t !== this.content && (this.content = t)
            }
            ,
            t.prototype.destroy = function() {
                this.removeTombstone(),
                this.timers.forEach((function(t) {
                    clearTimeout(t)
                }
                ))
            }
            ,
            t.prototype.resetState = function() {
                this.destroy(),
                this.timers = [],
                this.unusedDom = []
            }
            ,
            t
        }()
          , qe = -2e3
          , Ge = function() {
            function t(t) {
                this.scroll = t,
                this.start = 0,
                this.end = 0,
                this.init()
            }
            return t.prototype.init = function() {
                var t = this;
                this.handleOptions();
                var e = this.options
                  , o = e.fetch
                  , s = e.render
                  , i = e.createTombstone;
                this.tombstone = new Ke(i),
                this.indexCalculator = new Re(this.scroll.scroller.scrollBehaviorY.wrapperSize,this.tombstone.height),
                this.domManager = new Ze(this.scroll.scroller.content,s,this.tombstone),
                this.dataManager = new je([],o,this.onFetchFinish.bind(this)),
                this.scroll.on(this.scroll.eventTypes.destroy, this.destroy, this),
                this.scroll.on(this.scroll.eventTypes.scroll, this.update, this),
                this.scroll.on(this.scroll.eventTypes.contentChanged, (function(e) {
                    t.domManager.setContent(e),
                    t.indexCalculator.resetState(),
                    t.domManager.resetState(),
                    t.dataManager.resetState(),
                    t.update({
                        y: 0
                    })
                }
                ));
                var r = this.scroll.scroller.scrollBehaviorY;
                r.hooks.on(r.hooks.eventTypes.computeBoundary, this.modifyBoundary, this),
                this.update({
                    y: 0
                })
            }
            ,
            t.prototype.modifyBoundary = function(t) {
                t.maxScrollPos = qe
            }
            ,
            t.prototype.handleOptions = function() {
                var t = this.scroll.options.infinity;
                t && ("function" !== typeof t.fetch && c("Infinity plugin need fetch Function to new data."),
                "function" !== typeof t.render && c("Infinity plugin need render Function to render each item."),
                "function" !== typeof t.render && c("Infinity plugin need createTombstone Function to create tombstone."),
                this.options = t),
                this.scroll.options.probeType = 3
            }
            ,
            t.prototype.update = function(t) {
                var e = Math.round(-t.y)
                  , o = this.indexCalculator.calculate(e, this.dataManager.getList())
                  , s = o.start
                  , i = o.end;
                this.start = s,
                this.end = i,
                this.dataManager.update(i),
                this.updateDom(this.dataManager.getList())
            }
            ,
            t.prototype.onFetchFinish = function(t, e) {
                var o = this.updateDom(t).end;
                return e || (this.domManager.removeTombstone(),
                this.scroll.scroller.animater.stop(),
                this.scroll.resetPosition()),
                o
            }
            ,
            t.prototype.updateDom = function(t) {
                var e = this.domManager.update(t, this.start, this.end)
                  , o = e.end
                  , s = e.startPos
                  , i = e.endPos
                  , r = e.startDelta;
                return r && (this.scroll.minScrollY = r),
                i > this.scroll.maxScrollY && (this.scroll.maxScrollY = -(i - this.scroll.scroller.scrollBehaviorY.wrapperSize)),
                {
                    end: o,
                    startPos: s,
                    endPos: i
                }
            }
            ,
            t.prototype.destroy = function() {
                var t = this.scroll.scroller
                  , e = t.content
                  , o = t.scrollBehaviorY;
                while (e.firstChild)
                    e.removeChild(e.firstChild);
                this.domManager.destroy(),
                this.scroll.off("scroll", this.update),
                this.scroll.off("destroy", this.destroy),
                o.hooks.off(o.hooks.eventTypes.computeBoundary)
            }
            ,
            t.pluginName = "infinity",
            t
        }()
          , Qe = "plugins.movable"
          , Ve = [{
            key: "putAt",
            name: "putAt"
        }]
          , Je = Ve.map((function(t) {
            return {
                key: t.key,
                sourceKey: Qe + "." + t.name
            }
        }
        ))
          , _e = function() {
            function t(t) {
                this.scroll = t,
                this.handleBScroll(),
                this.handleHooks()
            }
            return t.prototype.handleBScroll = function() {
                this.scroll.proxy(Je)
            }
            ,
            t.prototype.handleHooks = function() {
                var t = this;
                this.hooksFn = [];
                var e = this.scroll.scroller
                  , o = e.scrollBehaviorX
                  , s = e.scrollBehaviorY
                  , i = function(t, e) {
                    t.maxScrollPos > 0 && (t.minScrollPos = e.wrapperSize - e.contentSize,
                    t.maxScrollPos = 0)
                };
                this.registerHooks(o.hooks, o.hooks.eventTypes.ignoreHasScroll, (function() {
                    return !0
                }
                )),
                this.registerHooks(o.hooks, o.hooks.eventTypes.computeBoundary, (function(t) {
                    i(t, o)
                }
                )),
                this.registerHooks(s.hooks, s.hooks.eventTypes.ignoreHasScroll, (function() {
                    return !0
                }
                )),
                this.registerHooks(s.hooks, s.hooks.eventTypes.computeBoundary, (function(t) {
                    i(t, s)
                }
                )),
                this.registerHooks(this.scroll.hooks, this.scroll.hooks.eventTypes.destroy, (function() {
                    t.destroy()
                }
                ))
            }
            ,
            t.prototype.putAt = function(t, e, o, s) {
                void 0 === o && (o = this.scroll.options.bounceTime),
                void 0 === s && (s = tt.bounce);
                var i = this.resolvePostion(t, e);
                this.scroll.scrollTo(i.x, i.y, o, s)
            }
            ,
            t.prototype.resolvePostion = function(t, e) {
                var o = this.scroll.scroller
                  , s = o.scrollBehaviorX
                  , i = o.scrollBehaviorY
                  , r = {
                    left: function() {
                        return 0
                    },
                    top: function() {
                        return 0
                    },
                    right: function() {
                        return s.minScrollPos
                    },
                    bottom: function() {
                        return i.minScrollPos
                    },
                    center: function(t) {
                        var e = 0 === t ? s.minScrollPos : i.minScrollPos;
                        return e / 2
                    }
                };
                return {
                    x: "number" === typeof t ? t : r[t](0),
                    y: "number" === typeof e ? e : r[e](1)
                }
            }
            ,
            t.prototype.destroy = function() {
                this.hooksFn.forEach((function(t) {
                    var e = t[0]
                      , o = t[1]
                      , s = t[2];
                    e.off(o, s)
                }
                )),
                this.hooksFn.length = 0
            }
            ,
            t.prototype.registerHooks = function(t, e, o) {
                t.on(e, o, this),
                this.hooksFn.push([t, e, o])
            }
            ,
            t.pluginName = "movable",
            t.applyOrder = "pre",
            t
        }()
          , $e = function(t) {
            return "img" === t.tagName.toLowerCase()
        }
          , to = function() {
            function t(t) {
                this.scroll = t,
                this.refreshTimer = 0,
                this.init()
            }
            return t.prototype.init = function() {
                this.handleOptions(this.scroll.options.observeImage),
                this.bindEventsToWrapper()
            }
            ,
            t.prototype.handleOptions = function(t) {
                void 0 === t && (t = {}),
                t = !0 === t ? {} : t;
                var e = {
                    debounceTime: 100
                };
                this.options = S(e, t)
            }
            ,
            t.prototype.bindEventsToWrapper = function() {
                var t = this.scroll.scroller.wrapper;
                this.imageLoadEventRegister = new ut(t,[{
                    name: "load",
                    handler: this.load.bind(this),
                    capture: !0
                }]),
                this.imageErrorEventRegister = new ut(t,[{
                    name: "error",
                    handler: this.load.bind(this),
                    capture: !0
                }])
            }
            ,
            t.prototype.load = function(t) {
                var e = this
                  , o = t.target
                  , s = this.options.debounceTime;
                o && $e(o) && (0 === s ? this.scroll.refresh() : (clearTimeout(this.refreshTimer),
                this.refreshTimer = window.setTimeout((function() {
                    e.scroll.refresh()
                }
                ), this.options.debounceTime)))
            }
            ,
            t.pluginName = "observeImage",
            t
        }()
          , eo = function(t) {
            var e = {
                ratioX: 0,
                ratioY: 0
            };
            return t ? ("number" === typeof t ? e.ratioX = e.ratioY = t : "object" === typeof t && t && (e.ratioX = t.x || 0,
            e.ratioY = t.y || 0),
            e) : e
        }
          , oo = function(t) {
            t.preventDefault(),
            t.stopPropagation()
        }
          , so = function() {
            function t(t, e) {
                this.scroll = t,
                this.options = e,
                this.currentPos = {
                    x: 0,
                    y: 0
                },
                this.hooksFn = [],
                this.handleDOM(),
                this.handleHooks(),
                this.handleInteractive()
            }
            return t.prototype.handleDOM = function() {
                var t = this.options
                  , e = t.relationElement
                  , o = t.relationElementHandleElementIndex
                  , s = void 0 === o ? 0 : o;
                this.wrapper = e,
                this.indicatorEl = this.wrapper.children[s]
            }
            ,
            t.prototype.handleHooks = function() {
                var t = this
                  , e = this.scroll
                  , o = e.hooks
                  , s = e.scroller.translater.hooks
                  , i = e.scroller.animater.hooks;
                this.registerHooks(o, o.eventTypes.refresh, this.refresh),
                this.registerHooks(s, s.eventTypes.translate, (function(e) {
                    t.updatePosition(e)
                }
                )),
                this.registerHooks(i, i.eventTypes.time, this.transitionTime),
                this.registerHooks(i, i.eventTypes.timeFunction, this.transitionTimingFunction)
            }
            ,
            t.prototype.transitionTime = function(t) {
                void 0 === t && (t = 0),
                this.indicatorEl.style[N.transitionDuration] = t + "ms"
            }
            ,
            t.prototype.transitionTimingFunction = function(t) {
                this.indicatorEl.style[N.transitionTimingFunction] = t
            }
            ,
            t.prototype.handleInteractive = function() {
                !1 !== this.options.interactive && this.registerEvents()
            }
            ,
            t.prototype.registerHooks = function(t, e, o) {
                t.on(e, o, this),
                this.hooksFn.push([t, e, o])
            }
            ,
            t.prototype.registerEvents = function() {
                var t = this.scroll.options
                  , e = t.disableMouse
                  , o = t.disableTouch
                  , s = []
                  , i = []
                  , r = [];
                e || (s.push({
                    name: "mousedown",
                    handler: this.start.bind(this)
                }),
                i.push({
                    name: "mousemove",
                    handler: this.move.bind(this)
                }),
                r.push({
                    name: "mouseup",
                    handler: this.end.bind(this)
                })),
                o || (s.push({
                    name: "touchstart",
                    handler: this.start.bind(this)
                }),
                i.push({
                    name: "touchmove",
                    handler: this.move.bind(this)
                }),
                r.push({
                    name: "touchend",
                    handler: this.end.bind(this)
                }, {
                    name: "touchcancel",
                    handler: this.end.bind(this)
                })),
                this.startEventRegister = new ut(this.indicatorEl,s),
                this.moveEventRegister = new ut(window,i),
                this.endEventRegister = new ut(window,r)
            }
            ,
            t.prototype.refresh = function() {
                var t = this.scroll
                  , e = t.x
                  , o = t.y
                  , s = t.hasHorizontalScroll
                  , i = t.hasVerticalScroll
                  , r = t.maxScrollX
                  , n = t.maxScrollY
                  , a = eo(this.options.ratio)
                  , h = a.ratioX
                  , l = a.ratioY
                  , c = $(this.wrapper)
                  , p = c.width
                  , u = c.height
                  , d = W(this.indicatorEl)
                  , f = d.width
                  , g = d.height;
                s && (this.maxScrollX = p - f,
                this.translateXSign = this.maxScrollX > 0 ? -1 : 1,
                this.minScrollX = 0,
                this.ratioX = h || Math.abs(this.maxScrollX / r)),
                i && (this.maxScrollY = u - g,
                this.translateYSign = this.maxScrollY > 0 ? -1 : 1,
                this.minScrollY = 0,
                this.ratioY = l || Math.abs(this.maxScrollY / n)),
                this.updatePosition({
                    x: e,
                    y: o
                })
            }
            ,
            t.prototype.start = function(t) {
                if (!this.BScrollIsDisabled()) {
                    var e = t.touches ? t.touches[0] : t;
                    oo(t),
                    this.initiated = !0,
                    this.moved = !1,
                    this.lastPointX = e.pageX,
                    this.lastPointY = e.pageY,
                    this.startTime = T(),
                    this.scroll.scroller.hooks.trigger(this.scroll.scroller.hooks.eventTypes.beforeScrollStart)
                }
            }
            ,
            t.prototype.BScrollIsDisabled = function() {
                return !this.scroll.enabled
            }
            ,
            t.prototype.move = function(t) {
                if (this.initiated) {
                    var e = t.touches ? t.touches[0] : t
                      , o = e.pageX
                      , s = e.pageY;
                    oo(t);
                    var i = o - this.lastPointX
                      , r = s - this.lastPointY;
                    if (this.lastPointX = o,
                    this.lastPointY = s,
                    this.moved || this.indicatorNotMoved(i, r) || (this.moved = !0,
                    this.scroll.scroller.hooks.trigger(this.scroll.scroller.hooks.eventTypes.scrollStart)),
                    this.moved) {
                        var n = this.getBScrollPosByRatio(this.currentPos, i, r);
                        this.syncBScroll(n)
                    }
                }
            }
            ,
            t.prototype.end = function(t) {
                if (this.initiated && (this.initiated = !1,
                oo(t),
                this.moved)) {
                    var e = this.scroll
                      , o = e.x
                      , s = e.y;
                    this.scroll.scroller.hooks.trigger(this.scroll.scroller.hooks.eventTypes.scrollEnd, {
                        x: o,
                        y: s
                    })
                }
            }
            ,
            t.prototype.getBScrollPosByRatio = function(t, e, o) {
                var s = t.x
                  , i = t.y
                  , r = this.scroll
                  , n = r.hasHorizontalScroll
                  , a = r.hasVerticalScroll
                  , h = r.minScrollX
                  , l = r.maxScrollX
                  , c = r.minScrollY
                  , p = r.maxScrollY
                  , u = this.scroll
                  , d = u.x
                  , f = u.y;
                if (n) {
                    var g = w(s + e, Math.min(this.minScrollX, this.maxScrollX), Math.max(this.minScrollX, this.maxScrollX))
                      , v = Math.round(g / this.ratioX * this.translateXSign);
                    d = w(v, l, h)
                }
                if (a) {
                    var y = w(i + o, Math.min(this.minScrollY, this.maxScrollY), Math.max(this.minScrollY, this.maxScrollY))
                      , m = Math.round(y / this.ratioY * this.translateYSign);
                    f = w(m, p, c)
                }
                return {
                    x: d,
                    y: f
                }
            }
            ,
            t.prototype.indicatorNotMoved = function(t, e) {
                var o = this.currentPos
                  , s = o.x
                  , i = o.y
                  , r = s === this.minScrollX && t <= 0 || s === this.maxScrollX && t >= 0
                  , n = i === this.minScrollY && e <= 0 || i === this.maxScrollY && e >= 0;
                return r && n
            }
            ,
            t.prototype.syncBScroll = function(t) {
                var e = T()
                  , o = this.scroll
                  , s = o.options
                  , i = o.scroller
                  , r = s.probeType
                  , n = s.momentumLimitTime;
                i.translater.translate(t),
                e - this.startTime > n && (this.startTime = e,
                1 === r && i.hooks.trigger(i.hooks.eventTypes.scroll, t)),
                r > 1 && i.hooks.trigger(i.hooks.eventTypes.scroll, t)
            }
            ,
            t.prototype.updatePosition = function(t) {
                var e = this.getIndicatorPosByRatio(t);
                this.applyTransformProperty(e),
                this.currentPos = r({}, e)
            }
            ,
            t.prototype.applyTransformProperty = function(t) {
                var e = this.scroll.options.translateZ
                  , o = ["translateX(" + t.x + "px)", "translateY(" + t.y + "px)", "" + e];
                this.indicatorEl.style[N.transform] = o.join(" ")
            }
            ,
            t.prototype.getIndicatorPosByRatio = function(t) {
                var e = t.x
                  , o = t.y
                  , s = this.scroll
                  , i = s.hasHorizontalScroll
                  , n = s.hasVerticalScroll
                  , a = r({}, this.currentPos);
                if (i) {
                    var h = Math.round(this.ratioX * e * this.translateXSign);
                    a.x = w(h, Math.min(this.minScrollX, this.maxScrollX), Math.max(this.minScrollX, this.maxScrollX))
                }
                if (n) {
                    var l = Math.round(this.ratioY * o * this.translateYSign);
                    a.y = w(l, Math.min(this.minScrollY, this.maxScrollY), Math.max(this.minScrollY, this.maxScrollY))
                }
                return a
            }
            ,
            t.prototype.destroy = function() {
                !1 !== this.options.interactive && (this.startEventRegister.destroy(),
                this.moveEventRegister.destroy(),
                this.endEventRegister.destroy()),
                this.hooksFn.forEach((function(t) {
                    var e = t[0]
                      , o = t[1]
                      , s = t[2];
                    e.off(o, s)
                }
                )),
                this.hooksFn.length = 0
            }
            ,
            t
        }()
          , io = function() {
            function t(t) {
                this.scroll = t,
                this.options = [],
                this.indicators = [],
                this.handleOptions(),
                this.handleHooks()
            }
            return t.prototype.handleOptions = function() {
                var t = this.scroll.options.indicators;
                p(Array.isArray(t), "'indicators' must be an array.");
                for (var e = 0, o = t; e < o.length; e++) {
                    var s = o[e];
                    p(!!s.relationElement, "'relationElement' must be a HTMLElement."),
                    this.createIndicators(s)
                }
            }
            ,
            t.prototype.createIndicators = function(t) {
                this.indicators.push(new so(this.scroll,t))
            }
            ,
            t.prototype.handleHooks = function() {
                var t = this
                  , e = this.scroll.hooks;
                e.on(e.eventTypes.destroy, (function() {
                    for (var e = 0, o = t.indicators; e < o.length; e++) {
                        var s = o[e];
                        s.destroy()
                    }
                    t.indicators = []
                }
                ))
            }
            ,
            t.pluginName = "indicators",
            t
        }();
        Rt.use(Wt).use(jt).use(Vt).use(ee).use(ie).use(ue).use(me).use(we).use(Fe).use(Ge).use(_e).use(to).use(io),
        e["a"] = Rt
    },
    fb4f: function(t, e, o) {
        "use strict";
        var s = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "shoucang-share"
            }, [o("div", {
                staticClass: "shareModuleBox"
            }, t._l(t.shareArrs, (function(e) {
                return o("div", {
                    key: e.id,
                    staticClass: "share-item",
                    on: {
                        click: function(o) {
                            return t.shareModuleClick({
                                typeCode: e.typeCode ? e.typeCode : "",
                                isshou: e && e.isshou
                            })
                        }
                    }
                }, [o("img", {
                    attrs: {
                        src: e.icon ? e.icon : "",
                        alt: "icon"
                    }
                }), o("span", [t._v(t._s(e.str ? e.str : ""))])])
            }
            )), 0)])
        }
          , i = []
          , r = o("1da1")
          , n = (o("96cf"),
        o("e25e"),
        o("c975"),
        o("ac1f"),
        o("1276"),
        o("271c"))
          , a = {
            name: "ShareModule",
            data: function() {
                return {
                    shareArrs: [{
                        icon: o("e266"),
                        str: "收藏",
                        typeCode: "0",
                        id: "shoucang",
                        isshou: !1
                    }, {
                        icon: o("fe30"),
                        str: "微信",
                        typeCode: "1",
                        id: "weixin"
                    }, {
                        icon: o("7f2c"),
                        str: "朋友圈",
                        typeCode: "2",
                        id: "pengyouquan"
                    }]
                }
            },
            props: ["shareData"],
            methods: {
                shareModuleClick: function(t) {
                    if (0 === parseInt(t.typeCode)) {
                        var e = 0;
                        t.isshou ? (this.shareArrs[0].isshou = !1,
                        this.shareArrs[0].str = "收藏",
                        this.shareArrs[0].icon = o("e266"),
                        e = 0,
                        this.$emit("changeisshou", !1)) : (this.shareArrs[0].isshou = !0,
                        this.shareArrs[0].str = "已收藏",
                        this.shareArrs[0].icon = o("138b"),
                        e = 1,
                        this.$emit("changeisshou", !0)),
                        this.$HTBridge.isIos ? this.$HTBridge.htChangeFavorStatus({}) : this.$HTBridge.htChangeFavorStatus(e)
                    } else {
                        var s = this.shareData.paramTitle || ""
                          , i = this.shareData.paramDesc || ""
                          , r = window.location.href || ""
                          , n = "https://stockinfo.htsec.com:19091/htsecNewsDetail/img/app_logo.png";
                        r.indexOf("?") > 0 ? r += "&askdownload=1" : r += "?askdownload=1";
                        var a = r.split("theme=");
                        r = a[0] + "l=" + a[1];
                        var h = {
                            title: s,
                            content: i,
                            imgUrl: n,
                            link: r,
                            contentType: 0,
                            shareOptions: parseInt(t.typeCode)
                        };
                        this.$HTBridge.htShareAction(h)
                    }
                },
                shareContentApp: function(t) {
                    var e = this;
                    function o(t) {
                        return s.apply(this, arguments)
                    }
                    function s() {
                        return s = Object(r["a"])(regeneratorRuntime.mark((function t(o) {
                            return regeneratorRuntime.wrap((function(t) {
                                while (1)
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2,
                                        e.$HTBridge.updateShareData(o);
                                    case 2:
                                        return t.next = 4,
                                        e.$HTBridge.htGetFavorStatus((function(t) {
                                            e.shoucangChange(t)
                                        }
                                        ));
                                    case 4:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        ))),
                        s.apply(this, arguments)
                    }
                    var i = t.paramTitle || ""
                      , a = t.paramDesc || ""
                      , h = "https://stockinfo.htsec.com:19091/htsecNewsDetail/img/app_logo.png"
                      , l = e.$HTBridge.isIos ? Object(n["b"])(window.location.href, ["theme"]) : window.location.href
                      , c = t.sourceStr || ""
                      , p = t.dateStr || ""
                      , u = {
                        title: i,
                        content: a,
                        link: l,
                        imgUrl: h,
                        contentType: 0,
                        shareOptions: 0,
                        source: c,
                        date: p
                    };
                    if (o(u),
                    e.$HTBridge.isIos)
                        e.$HTBridge.htRefreshFavorStatus((function(t) {
                            var o = t.favor;
                            e.shoucangChange(o)
                        }
                        ));
                    else {
                        var d = Object(n["b"])(window.location.href, ["theme"]) + "&version=" + e.$getRequest().version + "&channel=" + e.$getRequest().channel;
                        e.$HTBridge.updateCollectData({
                            title: i,
                            content: a,
                            sourceStr: c,
                            linkUrl: d,
                            dateStr: p,
                            imgUrl: h,
                            id: e.$getRequest().id
                        })
                    }
                },
                shoucangChange: function(t) {
                    1 === parseInt(t) || t ? (this.shareArrs[0].isshou = !0,
                    this.shareArrs[0].str = "已收藏",
                    this.shareArrs[0].icon = o("138b"),
                    this.$emit("changeisshou", !0)) : (this.shareArrs[0].isshou = !1,
                    this.shareArrs[0].str = "收藏",
                    this.shareArrs[0].icon = o("e266"),
                    this.$emit("changeisshou", !1))
                },
                syncCollectionStatusFun: function(t) {
                    var e = this;
                    1 === parseInt(t) ? (e.shareArrs[0].isshou = !0,
                    e.shareArrs[0].str = "已收藏",
                    e.shareArrs[0].icon = o("138b"),
                    e.$emit("changeisshou", !0)) : (e.shareArrs[0].isshou = !1,
                    e.shareArrs[0].str = "收藏",
                    e.shareArrs[0].icon = o("e266"),
                    e.$emit("changeisshou", !1))
                }
            },
            mounted: function() {
                var t = this;
                t.syncCollectionStatusFun(document.body.getAttribute("syncCollectionStatus") ? document.body.getAttribute("syncCollectionStatus") : ""),
                t.$HTBridge.syncCollectionStatus((function(e) {
                    t.syncCollectionStatusFun(e)
                }
                ))
            },
            watch: {
                shareData: {
                    handler: function(t) {
                        this.shareContentApp(t)
                    }
                }
            }
        }
          , h = a
          , l = (o("018e"),
        o("2877"))
          , c = Object(l["a"])(h, s, i, !1, null, null, null);
        e["a"] = c.exports
    },
    fe30: function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAMKADAAQAAAABAAAAMAAAAADbN2wMAAAJs0lEQVRoBe1ZDWyV1Rk+53y391psJaBtQH5iQRZLmtTx5wS2ON2mDi+0si7LlrnEKaMtdXVE9mdCN7JkcwiJpe06zSSZW9TqCK2wxZEFMiNjwtgsbLRirGUirD9Sfmx77/3O2fO+9zvf/e7trf0JTpNx2nvP+d7zvO/7vO/5+77vCnGlXMnA/3cG5GTCX3v24Xk6EZuvpSyQ2hTCRq4Rqt8Rok8adUrNnna0RdbFJmN7ojrjCqDO1IX+8U5vuRbibmHEHcKYuVkdWWtGDhthDiuh/pAjQ0+3zNn+Tlb8ZRBal1lN3d+zKf+94UsPam1qhZBzGGTw7WkZQxe4lBCgCdKpa25Rn3CB2xtynM0vzqo/6okvWzVqAGu6N9wJL78yWl9PBJkc+Nm2tFFkoeIHAgwFyQFKoXHxy7CK/BAj0p9FbVKiEQFUmLpw/O3e7UaaKj/DRJaSTGSIlJdp8hi8tm0OzsNbjNVXQnZJ5UR3zX3i2KQYZyip4PU605wT6+5t0UZXMUfKOBEGcaN5jiThntz2MWHu9gKkqYV/+liM1YfoBu0mXl37ds3ngr4n2/ZHoMI878S6DrSAanmaMSLCA5DMPBOyI0AEvelliRI2rYyiD9gFEVIrds/Z0Z6Gn+CFPwKxrv2PIEvlNnN+TQZBAv/HQbLVaNFDF9IkmfI0o/5A1llXiL8Avxefi6zv9duREEbmm7h5qeLUw9MnyDkNzgGUv1n9CXDYzNlDgwlQTQW1MupHrUUNJbuLGtZERN4CZP0gE/b6PcI8UtSWUn2ltajxVuBXiUhkoTTilLXFNZmlgISZG4vHfmxlk6k5AFeKx4UrruLsWCtsn3yIvpvnXec7aZn/swHlykcZBowfCA6JpL58ZXfRjuesmd2ztp3CLHsMe1Aa1upji/5WeVdtscVPtFb3dtXOlMbcTYo0jzmbRJ4K1VKer5N1cJ8qMmTOUR8R9nUIyn9mIIW0LXWOWhbLu5ivL0Jax9db5ERr5SYSX0MWHCZk5ynq1Jw2RdGTG24PGk7ExQOE9wkF9bS8ray7Zr7F4xRXWuv7rX2yy+snoK9dvRbyzOVvTXxgLdecrN4DB1+0KD50YBzsuLBDKQcxDRogOImk34WuMk/uY5JoqAGI7x4lTT049SMVXwV2eVLOgzqspHgVdg5Jpc4A3WOM7p/uFO7fWVQ3ZO2Mt5bRzsp2ZLKEhpUySsS4EA8vEJZzCiHz5ETITgXbHlVfYhkL0YoF15gjnKMxrZcKJT4D/VlwV4jDbSoOzveg36ON6UZ9IJIbfgUn9iBz+YAvubqj8jxY5TOZDKBPPCAfr4xUCIv58qwIheuUScx2E3qjFOrzRuhQwCTjRviXchiBvYTRenzXgoaDQXywLaMnKi9BMMUX2sz7AjQyZZnXWbAg34chrHRkqNMV7lMY2SU+bBz6PpYaSuyXSj7YemPjyTQ5dwnRy0Jv5tB2l1ZIbj9eR9p2a8EBffDrUpHwEojmuTrxVyZv+8kcFsCIYkXZ/Gtxm4mLv6/urFyXqYe1Jl5ngtRjjaBmJ1R7OwwrenKeGoQNflL63UY4tycGh2rR/1PM6XCm3TH02e5I/+Zq44rm6L8qf8BcvC9MM7nPEiGylrB1QrWVEY7lHtkgnvqgnsAZUSa0/iZw37b48euP7R82f7LmRPVDNggVycnfCWcXSUD7M318YpBRm0inyWgKeMHYeyJPf6tMqFx0fp9JZ+jDSBymXoTuy6PoJ88I3HdB9RkwOpPNv6v1Y+WdVXx6K7o1AOjpoEMm45EmR9YZyfmaKm+0aPfw5nTfzGmFW1zX0ILF5jFy5KR0VrUVN32pbWHTnTC7kW14+r5/IfZdVfzZUmC+HpKyBHZOj/BvTCQeN81Eh++FhONsx8K7QEbIMZMk4lhQloidk7aP5Bkn6m/fHfjPSmgXW0yavjH9rQsb/khOqSjHeTZDn5PiCPlCi/yyS5hdxQ14SSD3caDeqFvbWLufLu+oKeUA2m7a8RYewP3jnkB+RhAUK5FFCoqK188Yr+2I0DMmoe8Lyhia0p8W7dhwE+vjS7p6eRBrE4cH6OUWQw9YeA5dGvTLfZ7PRDz+DSQsVaLtVVtxyGy0IBoMVs6sIebTl8hRwWy5Lm/GlN4LZ49jWOaxjLoy9KQS72KMG4U2+bjlrsYtxNWMDX5BB3v+c3hd8xqWYzmeP1Zk2iF48tbEHCQXfqGnsqFjf3oCSlWshB7KUhLsw5INSxBXuKs4u7hkxvVH2s8MQZzjBz1O/QzLqaSNoQ9ep9MCsIaixyofQJYawD1Mi5SHl4x5bVsTntpKyn9ek5tz67n3YwOMtZkP6Fgs9WfqZ9r3Mz6GPty8n1zEZD1Q2kqansIbtk3wlCRP2c5oE5xHh7ddWfCbBfXncajwRuCf5hk6TNSzFdSnNtv3tvAJ6GPtjlKw166gTPG/N9eJMJOmLNLU4lSRc3Pt6hOb8nHqdnGGCYddY7z63jbs22Q/49BHejvxOnNkqThelee64kn05DAJKXHfLjcjw4fAGXu8mAmOjg0AGNwwDx9CNQjWK8ki9dEf6weubV+wprYt1uZ49B3h7Ey7rbVGhmJmNd4N5WJxXgCpn09Xedt+XbqV7lqpbMabhNzh/qG5eGApwK5VgMDykLA3lQp16ET8ewSyxKmdtmN5fUGZDdTWpDOWvlLqoqvMk1kX8T1/W/8CDJyeIsJbWhbV95DB8ZZVR9c/jw2gAslPjQDNe/JEa4IehDB8fE1GgzK69nBU+wFl01dy+55P/uI7WUcg7OTU/q60/t9kb6LFCUVq3OGhO6A3nYmSASJFt8moeb5bkh4xH0fXVLzal2fo45x4wzhyC0Gp67KX6OGqL2ipW5HqSDbjND0ou8GSTRbst20M4DkVUp9qLW3qINmou5BVmEzdtqTxZZwNeEWJ3wlougQyS9dMnmSBT/CuluRWz9bEAyH34gQvs+RJ9qEEQIbbFjX9XipzC+Z8e5CETxoYknMfKRBp2jrxoWJHiNdBMug/i5C8GXYPMMD7Sh/HYM9late8URN5ayDxiDbuQ1gHBbyIwdYSDE4d26aaiiWvpOpbsnTGDLxgS2TS+tADsA5p6710ZvA+pc29eIWyEklNvUjwQEw4Gdwg2A9idPjFL8mVdJa1LWt8zdqz9f8sAOuQ6orjdeGhobOL8OvPbARSCBJTsfWe147sx1uMjsWLC14/ckSEtXsaP22p7+Ku9Rrsv9v23tKcvFMOGPtIAgj4H7NZfqj62phMPIrRiO5Z1kxvxpPza0zNjxmg7OD6GyoOr5v6MaN1hc6VDHzkGfgv3+m7pkzZNRsAAAAASUVORK5CYII="
    }
}]);
