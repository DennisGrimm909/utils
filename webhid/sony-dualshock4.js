parcelRequire = function (e, r, t, n) {
    var i,
    o = "function" == typeof parcelRequire && parcelRequire,
    u = "function" == typeof require && require;
    function f(t, n) {
        if (!r[t]) {
            if (!e[t]) {
                var i = "function" == typeof parcelRequire && parcelRequire;
                if (!n && i)
                    return i(t, !0);
                if (o)
                    return o(t, !0);
                if (u && "string" == typeof t)
                    return u(t);
                var c = new Error("Cannot find module '" + t + "'");
                throw c.code = "MODULE_NOT_FOUND",
                c
            }
            p.resolve = function (r) {
                return e[t][1][r] || r
            },
            p.cache = {};
            var l = r[t] = new f.Module(t);
            e[t][0].call(l.exports, p, l, l.exports, this)
        }
        return r[t].exports;
        function p(e) {
            return f(p.resolve(e))
        }
    }
    f.isParcelRequire = !0,
    f.Module = function (e) {
        this.id = e,
        this.bundle = f,
        this.exports = {}
    },
    f.modules = e,
    f.cache = r,
    f.parent = o,
    f.register = function (r, t) {
        e[r] = [function (e, r) {
                r.exports = t
            }, {}
        ]
    };
    for (var c = 0; c < t.length; c++)
        try {
            f(t[c])
        } catch (e) {
            i || (i = e)
        }
    if (t.length) {
        var l = f(t[t.length - 1]);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function () {
            return l
        }) : n && (this[n] = l)
    }
    if (parcelRequire = f, i)
        throw i;
    return f
}
({
    "QPfz": [function (require, module, exports) {
            var global = arguments[3];
            var t = arguments[3];
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }),
            exports.default = void 0;
            var e = Object.freeze({});
            function n(t) {
                return null == t
            }
            function r(t) {
                return null != t
            }
            function o(t) {
                return !0 === t
            }
            function i(t) {
                return !1 === t
            }
            function a(t) {
                return "string" == typeof t || "number" == typeof t || "symbol" == typeof t || "boolean" == typeof t
            }
            function s(t) {
                return null !== t && "object" == typeof t
            }
            var c = Object.prototype.toString;
            function u(t) {
                return c.call(t).slice(8, -1)
            }
            function l(t) {
                return "[object Object]" === c.call(t)
            }
            function f(t) {
                return "[object RegExp]" === c.call(t)
            }
            function p(t) {
                var e = parseFloat(String(t));
                return e >= 0 && Math.floor(e) === e && isFinite(t)
            }
            function d(t) {
                return r(t) && "function" == typeof t.then && "function" == typeof t.catch
            }
            function v(t) {
                return null == t ? "" : Array.isArray(t) || l(t) && t.toString === c ? JSON.stringify(t, null, 2) : String(t)
            }
            function h(t) {
                var e = parseFloat(t);
                return isNaN(e) ? t : e
            }
            function m(t, e) {
                for (var n = Object.create(null), r = t.split(","), o = 0; o < r.length; o++)
                    n[r[o]] = !0;
                return e ? function (t) {
                    return n[t.toLowerCase()]
                }
                 : function (t) {
                    return n[t]
                }
            }
            var y = m("slot,component", !0),
            g = m("key,ref,slot,slot-scope,is");
            function _(t, e) {
                if (t.length) {
                    var n = t.indexOf(e);
                    if (n > -1)
                        return t.splice(n, 1)
                }
            }
            var b = Object.prototype.hasOwnProperty;
            function C(t, e) {
                return b.call(t, e)
            }
            function w(t) {
                var e = Object.create(null);
                return function (n) {
                    return e[n] || (e[n] = t(n))
                }
            }
            var $ = /-(\w)/g,
            A = w(function (t) {
                return t.replace($, function (t, e) {
                    return e ? e.toUpperCase() : ""
                })
            }),
            x = w(function (t) {
                return t.charAt(0).toUpperCase() + t.slice(1)
            }),
            O = /\B([A-Z])/g,
            k = w(function (t) {
                return t.replace(O, "-$1").toLowerCase()
            });
            function S(t, e) {
                function n(n) {
                    var r = arguments.length;
                    return r ? r > 1 ? t.apply(e, arguments) : t.call(e, n) : t.call(e)
                }
                return n._length = t.length,
                n
            }
            function j(t, e) {
                return t.bind(e)
            }
            var E = Function.prototype.bind ? j : S;
            function T(t, e) {
                e = e || 0;
                for (var n = t.length - e, r = new Array(n); n--; )
                    r[n] = t[n + e];
                return r
            }
            function I(t, e) {
                for (var n in e)
                    t[n] = e[n];
                return t
            }
            function D(t) {
                for (var e = {}, n = 0; n < t.length; n++)
                    t[n] && I(e, t[n]);
                return e
            }
            function N(t, e, n) {}
            var L = function (t, e, n) {
                return !1
            },
            P = function (t) {
                return t
            };
            function M(t, e) {
                if (t === e)
                    return !0;
                var n = s(t),
                r = s(e);
                if (!n || !r)
                    return !n && !r && String(t) === String(e);
                try {
                    var o = Array.isArray(t),
                    i = Array.isArray(e);
                    if (o && i)
                        return t.length === e.length && t.every(function (t, n) {
                            return M(t, e[n])
                        });
                    if (t instanceof Date && e instanceof Date)
                        return t.getTime() === e.getTime();
                    if (o || i)
                        return !1;
                    var a = Object.keys(t),
                    c = Object.keys(e);
                    return a.length === c.length && a.every(function (n) {
                        return M(t[n], e[n])
                    })
                } catch (u) {
                    return !1
                }
            }
            function F(t, e) {
                for (var n = 0; n < t.length; n++)
                    if (M(t[n], e))
                        return n;
                return -1
            }
            function R(t) {
                var e = !1;
                return function () {
                    e || (e = !0, t.apply(this, arguments))
                }
            }
            var H = "data-server-rendered",
            U = ["component", "directive", "filter"],
            B = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"],
            z = {
                optionMergeStrategies: Object.create(null),
                silent: !1,
                productionTip: !1,
                devtools: !1,
                performance: !1,
                errorHandler: null,
                warnHandler: null,
                ignoredElements: [],
                keyCodes: Object.create(null),
                isReservedTag: L,
                isReservedAttr: L,
                isUnknownElement: L,
                getTagNamespace: N,
                parsePlatformTagName: P,
                mustUseProp: L,
                async: !0,
                _lifecycleHooks: B
            },
            V = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
            function W(t) {
                var e = (t + "").charCodeAt(0);
                return 36 === e || 95 === e
            }
            function q(t, e, n, r) {
                Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !!r,
                    writable: !0,
                    configurable: !0
                })
            }
            var K = new RegExp("[^" + V.source + ".$_\\d]");
            function X(t) {
                if (!K.test(t)) {
                    var e = t.split(".");
                    return function (t) {
                        for (var n = 0; n < e.length; n++) {
                            if (!t)
                                return;
                            t = t[e[n]]
                        }
                        return t
                    }
                }
            }
            var G,
            Z = "__proto__" in {},
            J = "undefined" != typeof window,
            Q = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform,
            Y = Q && WXEnvironment.platform.toLowerCase(),
            tt = J && window.navigator.userAgent.toLowerCase(),
            et = tt && /msie|trident/.test(tt),
            nt = tt && tt.indexOf("msie 9.0") > 0,
            rt = tt && tt.indexOf("edge/") > 0,
            ot = tt && tt.indexOf("android") > 0 || "android" === Y,
            it = tt && /iphone|ipad|ipod|ios/.test(tt) || "ios" === Y,
            at = tt && /chrome\/\d+/.test(tt) && !rt,
            st = tt && /phantomjs/.test(tt),
            ct = tt && tt.match(/firefox\/(\d+)/),
            ut = {}
            .watch,
            lt = !1;
            if (J)
                try {
                    var ft = {};
                    Object.defineProperty(ft, "passive", {
                        get: function () {
                            lt = !0
                        }
                    }),
                    window.addEventListener("test-passive", null, ft)
                } catch (as) {}
            var pt = function () {
                return void 0 === G && (G = !J && !Q && void 0 !== t && (t.process && "server" === t.process.env.VUE_ENV)),
                G
            },
            dt = J && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
            function vt(t) {
                return "function" == typeof t && /native code/.test(t.toString())
            }
            var ht,
            mt = "undefined" != typeof Symbol && vt(Symbol) && "undefined" != typeof Reflect && vt(Reflect.ownKeys);
            ht = "undefined" != typeof Set && vt(Set) ? Set : function () {
                function t() {
                    this.set = Object.create(null)
                }
                return t.prototype.has = function (t) {
                    return !0 === this.set[t]
                },
                t.prototype.add = function (t) {
                    this.set[t] = !0
                },
                t.prototype.clear = function () {
                    this.set = Object.create(null)
                },
                t
            }
            ();
            var yt,
            gt,
            _t,
            bt,
            Ct = N,
            wt = N,
            $t = N,
            At = N,
            xt = 0,
            Ot = function () {
                this.id = xt++,
                this.subs = []
            };
            Ot.prototype.addSub = function (t) {
                this.subs.push(t)
            },
            Ot.prototype.removeSub = function (t) {
                _(this.subs, t)
            },
            Ot.prototype.depend = function () {
                Ot.target && Ot.target.addDep(this)
            },
            Ot.prototype.notify = function () {
                var t = this.subs.slice();
                for (var e = 0, n = t.length; e < n; e++)
                    t[e].update()
            },
            Ot.target = null;
            var kt = [];
            function St(t) {
                kt.push(t),
                Ot.target = t
            }
            function jt() {
                kt.pop(),
                Ot.target = kt[kt.length - 1]
            }
            var Et = function (t, e, n, r, o, i, a, s) {
                this.tag = t,
                this.data = e,
                this.children = n,
                this.text = r,
                this.elm = o,
                this.ns = void 0,
                this.context = i,
                this.fnContext = void 0,
                this.fnOptions = void 0,
                this.fnScopeId = void 0,
                this.key = e && e.key,
                this.componentOptions = a,
                this.componentInstance = void 0,
                this.parent = void 0,
                this.raw = !1,
                this.isStatic = !1,
                this.isRootInsert = !0,
                this.isComment = !1,
                this.isCloned = !1,
                this.isOnce = !1,
                this.asyncFactory = s,
                this.asyncMeta = void 0,
                this.isAsyncPlaceholder = !1
            },
            Tt = {
                child: {
                    configurable: !0
                }
            };
            Tt.child.get = function () {
                return this.componentInstance
            },
            Object.defineProperties(Et.prototype, Tt);
            var It = function (t) {
                void 0 === t && (t = "");
                var e = new Et;
                return e.text = t,
                e.isComment = !0,
                e
            };
            function Dt(t) {
                return new Et(void 0, void 0, void 0, String(t))
            }
            function Nt(t) {
                var e = new Et(t.tag, t.data, t.children && t.children.slice(), t.text, t.elm, t.context, t.componentOptions, t.asyncFactory);
                return e.ns = t.ns,
                e.isStatic = t.isStatic,
                e.key = t.key,
                e.isComment = t.isComment,
                e.fnContext = t.fnContext,
                e.fnOptions = t.fnOptions,
                e.fnScopeId = t.fnScopeId,
                e.asyncMeta = t.asyncMeta,
                e.isCloned = !0,
                e
            }
            var Lt = Array.prototype,
            Pt = Object.create(Lt),
            Mt = ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"];
            Mt.forEach(function (t) {
                var e = Lt[t];
                q(Pt, t, function () {
                    for (var n = [], r = arguments.length; r--; )
                        n[r] = arguments[r];
                    var o,
                    i = e.apply(this, n),
                    a = this.__ob__;
                    switch (t) {
                    case "push":
                    case "unshift":
                        o = n;
                        break;
                    case "splice":
                        o = n.slice(2)
                    }
                    return o && a.observeArray(o),
                    a.dep.notify(),
                    i
                })
            });
            var Ft = Object.getOwnPropertyNames(Pt),
            Rt = !0;
            function Ht(t) {
                Rt = t
            }
            var Ut = function (t) {
                this.value = t,
                this.dep = new Ot,
                this.vmCount = 0,
                q(t, "__ob__", this),
                Array.isArray(t) ? (Z ? Bt(t, Pt) : zt(t, Pt, Ft), this.observeArray(t)) : this.walk(t)
            };
            function Bt(t, e) {
                t.__proto__ = e
            }
            function zt(t, e, n) {
                for (var r = 0, o = n.length; r < o; r++) {
                    var i = n[r];
                    q(t, i, e[i])
                }
            }
            function Vt(t, e) {
                var n;
                if (s(t) && !(t instanceof Et))
                    return C(t, "__ob__") && t.__ob__ instanceof Ut ? n = t.__ob__ : Rt && !pt() && (Array.isArray(t) || l(t)) && Object.isExtensible(t) && !t._isVue && (n = new Ut(t)), e && n && n.vmCount++, n
            }
            function Wt(t, e, n, r, o) {
                var i = new Ot,
                a = Object.getOwnPropertyDescriptor(t, e);
                if (!a || !1 !== a.configurable) {
                    var s = a && a.get,
                    c = a && a.set;
                    s && !c || 2 !== arguments.length || (n = t[e]);
                    var u = !o && Vt(n);
                    Object.defineProperty(t, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: function () {
                            var e = s ? s.call(t) : n;
                            return Ot.target && (i.depend(), u && (u.dep.depend(), Array.isArray(e) && Xt(e))),
                            e
                        },
                        set: function (e) {
                            var r = s ? s.call(t) : n;
                            e === r || e != e && r != r || s && !c || (c ? c.call(t, e) : n = e, u = !o && Vt(e), i.notify())
                        }
                    })
                }
            }
            function qt(t, e, n) {
                if (Array.isArray(t) && p(e))
                    return t.length = Math.max(t.length, e), t.splice(e, 1, n), n;
                if (e in t && !(e in Object.prototype))
                    return t[e] = n, n;
                var r = t.__ob__;
                return t._isVue || r && r.vmCount ? n : r ? (Wt(r.value, e, n), r.dep.notify(), n) : (t[e] = n, n)
            }
            function Kt(t, e) {
                if (Array.isArray(t) && p(e))
                    t.splice(e, 1);
                else {
                    var n = t.__ob__;
                    t._isVue || n && n.vmCount || C(t, e) && (delete t[e], n && n.dep.notify())
                }
            }
            function Xt(t) {
                for (var e = void 0, n = 0, r = t.length; n < r; n++)
                    (e = t[n]) && e.__ob__ && e.__ob__.dep.depend(), Array.isArray(e) && Xt(e)
            }
            Ut.prototype.walk = function (t) {
                for (var e = Object.keys(t), n = 0; n < e.length; n++)
                    Wt(t, e[n])
            },
            Ut.prototype.observeArray = function (t) {
                for (var e = 0, n = t.length; e < n; e++)
                    Vt(t[e])
            };
            var Gt = z.optionMergeStrategies;
            function Zt(t, e) {
                if (!e)
                    return t;
                for (var n, r, o, i = mt ? Reflect.ownKeys(e) : Object.keys(e), a = 0; a < i.length; a++)
                    "__ob__" !== (n = i[a]) && (r = t[n], o = e[n], C(t, n) ? r !== o && l(r) && l(o) && Zt(r, o) : qt(t, n, o));
                return t
            }
            function Jt(t, e, n) {
                return n ? function () {
                    var r = "function" == typeof e ? e.call(n, n) : e,
                    o = "function" == typeof t ? t.call(n, n) : t;
                    return r ? Zt(r, o) : o
                }
                 : e ? t ? function () {
                    return Zt("function" == typeof e ? e.call(this, this) : e, "function" == typeof t ? t.call(this, this) : t)
                }
                 : e : t
            }
            function Qt(t, e) {
                var n = e ? t ? t.concat(e) : Array.isArray(e) ? e : [e] : t;
                return n ? Yt(n) : n
            }
            function Yt(t) {
                for (var e = [], n = 0; n < t.length; n++)
                     - 1 === e.indexOf(t[n]) && e.push(t[n]);
                return e
            }
            function te(t, e, n, r) {
                var o = Object.create(t || null);
                return e ? I(o, e) : o
            }
            Gt.data = function (t, e, n) {
                return n ? Jt(t, e, n) : e && "function" != typeof e ? t : Jt(t, e)
            },
            B.forEach(function (t) {
                Gt[t] = Qt
            }),
            U.forEach(function (t) {
                Gt[t + "s"] = te
            }),
            Gt.watch = function (t, e, n, r) {
                if (t === ut && (t = void 0), e === ut && (e = void 0), !e)
                    return Object.create(t || null);
                if (!t)
                    return e;
                var o = {};
                for (var i in I(o, t), e) {
                    var a = o[i],
                    s = e[i];
                    a && !Array.isArray(a) && (a = [a]),
                    o[i] = a ? a.concat(s) : Array.isArray(s) ? s : [s]
                }
                return o
            },
            Gt.props = Gt.methods = Gt.inject = Gt.computed = function (t, e, n, r) {
                if (!t)
                    return e;
                var o = Object.create(null);
                return I(o, t),
                e && I(o, e),
                o
            },
            Gt.provide = Jt;
            var ee = function (t, e) {
                return void 0 === e ? t : e
            };
            function ne(t) {
                for (var e in t.components)
                    re(e)
            }
            function re(t) {
                new RegExp("^[a-zA-Z][\\-\\.0-9_" + V.source + "]*$").test(t) || Ct('Invalid component name: "' + t + '". Component names should conform to valid custom element name in html5 specification.'),
                (y(t) || z.isReservedTag(t)) && Ct("Do not use built-in or reserved HTML elements as component id: " + t)
            }
            function oe(t, e) {
                var n = t.props;
                if (n) {
                    var r,
                    o,
                    i = {};
                    if (Array.isArray(n))
                        for (r = n.length; r--; )
                            "string" == typeof(o = n[r]) && (i[A(o)] = {
                                    type: null
                                });
                    else if (l(n))
                        for (var a in n)
                            o = n[a], i[A(a)] = l(o) ? o : {
                                type: o
                            };
                    else
                        0;
                    t.props = i
                }
            }
            function ie(t, e) {
                var n = t.inject;
                if (n) {
                    var r = t.inject = {};
                    if (Array.isArray(n))
                        for (var o = 0; o < n.length; o++)
                            r[n[o]] = {
                                from: n[o]
                            };
                    else if (l(n))
                        for (var i in n) {
                            var a = n[i];
                            r[i] = l(a) ? I({
                                from: i
                            }, a) : {
                                from: a
                            }
                        }
                    else
                        0
                }
            }
            function ae(t) {
                var e = t.directives;
                if (e)
                    for (var n in e) {
                        var r = e[n];
                        "function" == typeof r && (e[n] = {
                                bind: r,
                                update: r
                            })
                    }
            }
            function se(t, e, n) {
                l(e) || Ct('Invalid value for option "' + t + '": expected an Object, but got ' + u(e) + ".", n)
            }
            function ce(t, e, n) {
                if ("function" == typeof e && (e = e.options), oe(e, n), ie(e, n), ae(e), !e._base && (e.extends && (t = ce(t, e.extends, n)), e.mixins))
                    for (var r = 0, o = e.mixins.length; r < o; r++)
                        t = ce(t, e.mixins[r], n);
                var i,
                a = {};
                for (i in t)
                    s(i);
                for (i in e)
                    C(t, i) || s(i);
                function s(r) {
                    var o = Gt[r] || ee;
                    a[r] = o(t[r], e[r], n, r)
                }
                return a
            }
            function ue(t, e, n, r) {
                if ("string" == typeof n) {
                    var o = t[e];
                    if (C(o, n))
                        return o[n];
                    var i = A(n);
                    if (C(o, i))
                        return o[i];
                    var a = x(i);
                    if (C(o, a))
                        return o[a];
                    var s = o[n] || o[i] || o[a];
                    return s
                }
            }
            function le(t, e, n, r) {
                var o = e[t],
                i = !C(n, t),
                a = n[t],
                s = ye(Boolean, o.type);
                if (s > -1)
                    if (i && !C(o, "default"))
                        a = !1;
                    else if ("" === a || a === k(t)) {
                        var c = ye(String, o.type);
                        (c < 0 || s < c) && (a = !0)
                    }
                if (void 0 === a) {
                    a = fe(r, o, t);
                    var u = Rt;
                    Ht(!0),
                    Vt(a),
                    Ht(u)
                }
                return a
            }
            function fe(t, e, n) {
                if (C(e, "default")) {
                    var r = e.default;
                    return t && t.$options.propsData && void 0 === t.$options.propsData[n] && void 0 !== t._props[n] ? t._props[n] : "function" == typeof r && "Function" !== he(e.type) ? r.call(t) : r
                }
            }
            function pe(t, e, n, r, o) {
                if (t.required && o)
                    Ct('Missing required prop: "' + e + '"', r);
                else if (null != n || t.required) {
                    var i = t.type,
                    a = !i || !0 === i,
                    s = [];
                    if (i) {
                        Array.isArray(i) || (i = [i]);
                        for (var c = 0; c < i.length && !a; c++) {
                            var u = ve(n, i[c]);
                            s.push(u.expectedType || ""),
                            a = u.valid
                        }
                    }
                    if (a) {
                        var l = t.validator;
                        l && (l(n) || Ct('Invalid prop: custom validator check failed for prop "' + e + '".', r))
                    } else
                        Ct(ge(e, n, s), r)
                }
            }
            var de = /^(String|Number|Boolean|Function|Symbol)$/;
            function ve(t, e) {
                var n,
                r = he(e);
                if (de.test(r)) {
                    var o = typeof t;
                    (n = o === r.toLowerCase()) || "object" !== o || (n = t instanceof e)
                } else
                    n = "Object" === r ? l(t) : "Array" === r ? Array.isArray(t) : t instanceof e;
                return {
                    valid: n,
                    expectedType: r
                }
            }
            function he(t) {
                var e = t && t.toString().match(/^\s*function (\w+)/);
                return e ? e[1] : ""
            }
            function me(t, e) {
                return he(t) === he(e)
            }
            function ye(t, e) {
                if (!Array.isArray(e))
                    return me(e, t) ? 0 : -1;
                for (var n = 0, r = e.length; n < r; n++)
                    if (me(e[n], t))
                        return n;
                return -1
            }
            function ge(t, e, n) {
                var r = 'Invalid prop: type check failed for prop "' + t + '". Expected ' + n.map(x).join(", "),
                o = n[0],
                i = u(e),
                a = _e(e, o),
                s = _e(e, i);
                return 1 === n.length && be(o) && !Ce(o, i) && (r += " with value " + a),
                r += ", got " + i + " ",
                be(i) && (r += "with value " + s + "."),
                r
            }
            function _e(t, e) {
                return "String" === e ? '"' + t + '"' : "Number" === e ? "" + Number(t) : "" + t
            }
            function be(t) {
                return ["string", "number", "boolean"].some(function (e) {
                    return t.toLowerCase() === e
                })
            }
            function Ce() {
                for (var t = [], e = arguments.length; e--; )
                    t[e] = arguments[e];
                return t.some(function (t) {
                    return "boolean" === t.toLowerCase()
                })
            }
            function we(t, e, n) {
                St();
                try {
                    if (e)
                        for (var r = e; r = r.$parent; ) {
                            var o = r.$options.errorCaptured;
                            if (o)
                                for (var i = 0; i < o.length; i++)
                                    try {
                                        if (!1 === o[i].call(r, t, e, n))
                                            return
                                    } catch (as) {
                                        Ae(as, r, "errorCaptured hook")
                                    }
                        }
                    Ae(t, e, n)
                } finally {
                    jt()
                }
            }
            function $e(t, e, n, r, o) {
                var i;
                try {
                    (i = n ? t.apply(e, n) : t.call(e)) && !i._isVue && d(i) && !i._handled && (i.catch(function (t) {
                            return we(t, r, o + " (Promise/async)")
                        }), i._handled = !0)
                } catch (as) {
                    we(as, r, o)
                }
                return i
            }
            function Ae(t, e, n) {
                if (z.errorHandler)
                    try {
                        return z.errorHandler.call(null, t, e, n)
                    } catch (as) {
                        as !== t && xe(as, null, "config.errorHandler")
                    }
                xe(t, e, n)
            }
            function xe(t, e, n) {
                if (!J && !Q || "undefined" == typeof console)
                    throw t;
                console.error(t)
            }
            var Oe,
            ke,
            Se,
            je,
            Ee,
            Te,
            Ie,
            De,
            Ne,
            Le = !1,
            Pe = [],
            Me = !1;
            function Fe() {
                Me = !1;
                var t = Pe.slice(0);
                Pe.length = 0;
                for (var e = 0; e < t.length; e++)
                    t[e]()
            }
            if ("undefined" != typeof Promise && vt(Promise)) {
                var Re = Promise.resolve();
                Oe = function () {
                    Re.then(Fe),
                    it && setTimeout(N)
                },
                Le = !0
            } else if (et || "undefined" == typeof MutationObserver || !vt(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString())
                Oe = "undefined" != typeof setImmediate && vt(setImmediate) ? function () {
                    setImmediate(Fe)
                }
             : function () {
                setTimeout(Fe, 0)
            };
            else {
                var He = 1,
                Ue = new MutationObserver(Fe),
                Be = document.createTextNode(String(He));
                Ue.observe(Be, {
                    characterData: !0
                }),
                Oe = function () {
                    He = (He + 1) % 2,
                    Be.data = String(He)
                },
                Le = !0
            }
            function ze(t, e) {
                var n;
                if (Pe.push(function () {
                        if (t)
                            try {
                                t.call(e)
                            } catch (as) {
                                we(as, e, "nextTick")
                            }
                        else
                            n && n(e)
                    }), Me || (Me = !0, Oe()), !t && "undefined" != typeof Promise)
                    return new Promise(function (t) {
                        n = t
                    })
            }
            var Ve,
            We,
            qe,
            Ke = new ht;
            function Xe(t) {
                Ge(t, Ke),
                Ke.clear()
            }
            function Ge(t, e) {
                var n,
                r,
                o = Array.isArray(t);
                if (!(!o && !s(t) || Object.isFrozen(t) || t instanceof Et)) {
                    if (t.__ob__) {
                        var i = t.__ob__.dep.id;
                        if (e.has(i))
                            return;
                        e.add(i)
                    }
                    if (o)
                        for (n = t.length; n--; )
                            Ge(t[n], e);
                    else
                        for (n = (r = Object.keys(t)).length; n--; )
                            Ge(t[r[n]], e)
                }
            }
            var Ze = w(function (t) {
                var e = "&" === t.charAt(0),
                n = "~" === (t = e ? t.slice(1) : t).charAt(0),
                r = "!" === (t = n ? t.slice(1) : t).charAt(0);
                return {
                    name: t = r ? t.slice(1) : t,
                    once: n,
                    capture: r,
                    passive: e
                }
            });
            function Je(t, e) {
                function n() {
                    var t = arguments,
                    r = n.fns;
                    if (!Array.isArray(r))
                        return $e(r, null, arguments, e, "v-on handler");
                    for (var o = r.slice(), i = 0; i < o.length; i++)
                        $e(o[i], null, t, e, "v-on handler")
                }
                return n.fns = t,
                n
            }
            function Qe(t, e, r, i, a, s) {
                var c,
                u,
                l,
                f;
                for (c in t)
                    u = t[c], l = e[c], f = Ze(c), n(u) || (n(l) ? (n(u.fns) && (u = t[c] = Je(u, s)), o(f.once) && (u = t[c] = a(f.name, u, f.capture)), r(f.name, u, f.capture, f.passive, f.params)) : u !== l && (l.fns = u, t[c] = l));
                for (c in e)
                    n(t[c]) && i((f = Ze(c)).name, e[c], f.capture)
            }
            function Ye(t, e, i) {
                var a;
                t instanceof Et && (t = t.data.hook || (t.data.hook = {}));
                var s = t[e];
                function c() {
                    i.apply(this, arguments),
                    _(a.fns, c)
                }
                n(s) ? a = Je([c]) : r(s.fns) && o(s.merged) ? (a = s).fns.push(c) : a = Je([s, c]),
                a.merged = !0,
                t[e] = a
            }
            function tn(t, e, o) {
                var i = e.options.props;
                if (!n(i)) {
                    var a = {},
                    s = t.attrs,
                    c = t.props;
                    if (r(s) || r(c))
                        for (var u in i) {
                            var l = k(u);
                            en(a, c, u, l, !0) || en(a, s, u, l, !1)
                        }
                    return a
                }
            }
            function en(t, e, n, o, i) {
                if (r(e)) {
                    if (C(e, n))
                        return t[n] = e[n], i || delete e[n], !0;
                    if (C(e, o))
                        return t[n] = e[o], i || delete e[o], !0
                }
                return !1
            }
            function nn(t) {
                for (var e = 0; e < t.length; e++)
                    if (Array.isArray(t[e]))
                        return Array.prototype.concat.apply([], t);
                return t
            }
            function rn(t) {
                return a(t) ? [Dt(t)] : Array.isArray(t) ? an(t) : void 0
            }
            function on(t) {
                return r(t) && r(t.text) && i(t.isComment)
            }
            function an(t, e) {
                var i,
                s,
                c,
                u,
                l = [];
                for (i = 0; i < t.length; i++)
                    n(s = t[i]) || "boolean" == typeof s || (u = l[c = l.length - 1], Array.isArray(s) ? s.length > 0 && (on((s = an(s, (e || "") + "_" + i))[0]) && on(u) && (l[c] = Dt(u.text + s[0].text), s.shift()), l.push.apply(l, s)) : a(s) ? on(u) ? l[c] = Dt(u.text + s) : "" !== s && l.push(Dt(s)) : on(s) && on(u) ? l[c] = Dt(u.text + s.text) : (o(t._isVList) && r(s.tag) && n(s.key) && r(e) && (s.key = "__vlist" + e + "_" + i + "__"), l.push(s)));
                return l
            }
            function sn(t) {
                var e = t.$options.provide;
                e && (t._provided = "function" == typeof e ? e.call(t) : e)
            }
            function cn(t) {
                var e = un(t.$options.inject, t);
                e && (Ht(!1), Object.keys(e).forEach(function (n) {
                        Wt(t, n, e[n])
                    }), Ht(!0))
            }
            function un(t, e) {
                if (t) {
                    for (var n = Object.create(null), r = mt ? Reflect.ownKeys(t) : Object.keys(t), o = 0; o < r.length; o++) {
                        var i = r[o];
                        if ("__ob__" !== i) {
                            for (var a = t[i].from, s = e; s; ) {
                                if (s._provided && C(s._provided, a)) {
                                    n[i] = s._provided[a];
                                    break
                                }
                                s = s.$parent
                            }
                            if (!s)
                                if ("default" in t[i]) {
                                    var c = t[i].default;
                                    n[i] = "function" == typeof c ? c.call(e) : c
                                } else
                                    0
                        }
                    }
                    return n
                }
            }
            function ln(t, e) {
                if (!t || !t.length)
                    return {};
                for (var n = {}, r = 0, o = t.length; r < o; r++) {
                    var i = t[r],
                    a = i.data;
                    if (a && a.attrs && a.attrs.slot && delete a.attrs.slot, i.context !== e && i.fnContext !== e || !a || null == a.slot)
                        (n.default || (n.default = [])).push(i);
                    else {
                        var s = a.slot,
                        c = n[s] || (n[s] = []);
                        "template" === i.tag ? c.push.apply(c, i.children || []) : c.push(i)
                    }
                }
                for (var u in n)
                    n[u].every(fn) && delete n[u];
                return n
            }
            function fn(t) {
                return t.isComment && !t.asyncFactory || " " === t.text
            }
            function pn(t, n, r) {
                var o,
                i = Object.keys(n).length > 0,
                a = t ? !!t.$stable : !i,
                s = t && t.$key;
                if (t) {
                    if (t._normalized)
                        return t._normalized;
                    if (a && r && r !== e && s === r.$key && !i && !r.$hasNormal)
                        return r;
                    for (var c in o = {}, t)
                        t[c] && "$" !== c[0] && (o[c] = dn(n, c, t[c]))
                } else
                    o = {};
                for (var u in n)
                    u in o || (o[u] = vn(n, u));
                return t && Object.isExtensible(t) && (t._normalized = o),
                q(o, "$stable", a),
                q(o, "$key", s),
                q(o, "$hasNormal", i),
                o
            }
            function dn(t, e, n) {
                var r = function () {
                    var t = arguments.length ? n.apply(null, arguments) : n({});
                    return (t = t && "object" == typeof t && !Array.isArray(t) ? [t] : rn(t)) && (0 === t.length || 1 === t.length && t[0].isComment) ? void 0 : t
                };
                return n.proxy && Object.defineProperty(t, e, {
                    get: r,
                    enumerable: !0,
                    configurable: !0
                }),
                r
            }
            function vn(t, e) {
                return function () {
                    return t[e]
                }
            }
            function hn(t, e) {
                var n,
                o,
                i,
                a,
                c;
                if (Array.isArray(t) || "string" == typeof t)
                    for (n = new Array(t.length), o = 0, i = t.length; o < i; o++)
                        n[o] = e(t[o], o);
                else if ("number" == typeof t)
                    for (n = new Array(t), o = 0; o < t; o++)
                        n[o] = e(o + 1, o);
                else if (s(t))
                    if (mt && t[Symbol.iterator]) {
                        n = [];
                        for (var u = t[Symbol.iterator](), l = u.next(); !l.done; )
                            n.push(e(l.value, n.length)), l = u.next()
                    } else
                        for (a = Object.keys(t), n = new Array(a.length), o = 0, i = a.length; o < i; o++)
                            c = a[o], n[o] = e(t[c], c, o);
                return r(n) || (n = []),
                n._isVList = !0,
                n
            }
            function mn(t, e, n, r) {
                var o,
                i = this.$scopedSlots[t];
                i ? (n = n || {}, r && (n = I(I({}, r), n)), o = i(n) || e) : o = this.$slots[t] || e;
                var a = n && n.slot;
                return a ? this.$createElement("template", {
                    slot: a
                }, o) : o
            }
            function yn(t) {
                return ue(this.$options, "filters", t, !0) || P
            }
            function gn(t, e) {
                return Array.isArray(t) ? -1 === t.indexOf(e) : t !== e
            }
            function _n(t, e, n, r, o) {
                var i = z.keyCodes[e] || n;
                return o && r && !z.keyCodes[e] ? gn(o, r) : i ? gn(i, t) : r ? k(r) !== e : void 0
            }
            function bn(t, e, n, r, o) {
                if (n)
                    if (s(n)) {
                        var i;
                        Array.isArray(n) && (n = D(n));
                        var a = function (a) {
                            if ("class" === a || "style" === a || g(a))
                                i = t;
                            else {
                                var s = t.attrs && t.attrs.type;
                                i = r || z.mustUseProp(e, s, a) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {})
                            }
                            var c = A(a),
                            u = k(a);
                            c in i || u in i || (i[a] = n[a], o && ((t.on || (t.on = {}))["update:" + a] = function (t) {
                                    n[a] = t
                                }))
                        };
                        for (var c in n)
                            a(c)
                    } else ;
                return t
            }
            function Cn(t, e) {
                var n = this._staticTrees || (this._staticTrees = []),
                r = n[t];
                return r && !e ? r : ($n(r = n[t] = this.$options.staticRenderFns[t].call(this._renderProxy, null, this), "__static__" + t, !1), r)
            }
            function wn(t, e, n) {
                return $n(t, "__once__" + e + (n ? "_" + n : ""), !0),
                t
            }
            function $n(t, e, n) {
                if (Array.isArray(t))
                    for (var r = 0; r < t.length; r++)
                        t[r] && "string" != typeof t[r] && An(t[r], e + "_" + r, n);
                else
                    An(t, e, n)
            }
            function An(t, e, n) {
                t.isStatic = !0,
                t.key = e,
                t.isOnce = n
            }
            function xn(t, e) {
                if (e)
                    if (l(e)) {
                        var n = t.on = t.on ? I({}, t.on) : {};
                        for (var r in e) {
                            var o = n[r],
                            i = e[r];
                            n[r] = o ? [].concat(o, i) : i
                        }
                    } else ;
                return t
            }
            function On(t, e, n, r) {
                e = e || {
                    $stable: !n
                };
                for (var o = 0; o < t.length; o++) {
                    var i = t[o];
                    Array.isArray(i) ? On(i, e, n) : i && (i.proxy && (i.fn.proxy = !0), e[i.key] = i.fn)
                }
                return r && (e.$key = r),
                e
            }
            function kn(t, e) {
                for (var n = 0; n < e.length; n += 2) {
                    var r = e[n];
                    "string" == typeof r && r && (t[e[n]] = e[n + 1])
                }
                return t
            }
            function Sn(t, e) {
                return "string" == typeof t ? e + t : t
            }
            function jn(t) {
                t._o = wn,
                t._n = h,
                t._s = v,
                t._l = hn,
                t._t = mn,
                t._q = M,
                t._i = F,
                t._m = Cn,
                t._f = yn,
                t._k = _n,
                t._b = bn,
                t._v = Dt,
                t._e = It,
                t._u = On,
                t._g = xn,
                t._d = kn,
                t._p = Sn
            }
            function En(t, n, r, i, a) {
                var s,
                c = this,
                u = a.options;
                C(i, "_uid") ? (s = Object.create(i))._original = i : (s = i, i = i._original);
                var l = o(u._compiled),
                f = !l;
                this.data = t,
                this.props = n,
                this.children = r,
                this.parent = i,
                this.listeners = t.on || e,
                this.injections = un(u.inject, i),
                this.slots = function () {
                    return c.$slots || pn(t.scopedSlots, c.$slots = ln(r, i)),
                    c.$slots
                },
                Object.defineProperty(this, "scopedSlots", {
                    enumerable: !0,
                    get: function () {
                        return pn(t.scopedSlots, this.slots())
                    }
                }),
                l && (this.$options = u, this.$slots = this.slots(), this.$scopedSlots = pn(t.scopedSlots, this.$slots)),
                u._scopeId ? this._c = function (t, e, n, r) {
                    var o = zn(s, t, e, n, r, f);
                    return o && !Array.isArray(o) && (o.fnScopeId = u._scopeId, o.fnContext = i),
                    o
                }
                 : this._c = function (t, e, n, r) {
                    return zn(s, t, e, n, r, f)
                }
            }
            function Tn(t, n, o, i, a) {
                var s = t.options,
                c = {},
                u = s.props;
                if (r(u))
                    for (var l in u)
                        c[l] = le(l, u, n || e);
                else
                    r(o.attrs) && Dn(c, o.attrs), r(o.props) && Dn(c, o.props);
                var f = new En(o, c, a, i, t),
                p = s.render.call(null, f._c, f);
                if (p instanceof Et)
                    return In(p, o, f.parent, s, f);
                if (Array.isArray(p)) {
                    for (var d = rn(p) || [], v = new Array(d.length), h = 0; h < d.length; h++)
                        v[h] = In(d[h], o, f.parent, s, f);
                    return v
                }
            }
            function In(t, e, n, r, o) {
                var i = Nt(t);
                return i.fnContext = n,
                i.fnOptions = r,
                e.slot && ((i.data || (i.data = {})).slot = e.slot),
                i
            }
            function Dn(t, e) {
                for (var n in e)
                    t[A(n)] = e[n]
            }
            jn(En.prototype);
            var Nn = {
                init: function (t, e) {
                    if (t.componentInstance && !t.componentInstance._isDestroyed && t.data.keepAlive) {
                        var n = t;
                        Nn.prepatch(n, n)
                    } else {
                        (t.componentInstance = Mn(t, cr)).$mount(e ? t.elm : void 0, e)
                    }
                },
                prepatch: function (t, e) {
                    var n = e.componentOptions;
                    vr(e.componentInstance = t.componentInstance, n.propsData, n.listeners, e, n.children)
                },
                insert: function (t) {
                    var e = t.context,
                    n = t.componentInstance;
                    n._isMounted || (n._isMounted = !0, gr(n, "mounted")),
                    t.data.keepAlive && (e._isMounted ? Dr(n) : mr(n, !0))
                },
                destroy: function (t) {
                    var e = t.componentInstance;
                    e._isDestroyed || (t.data.keepAlive ? yr(e, !0) : e.$destroy())
                }
            },
            Ln = Object.keys(Nn);
            function Pn(t, e, i, a, c) {
                if (!n(t)) {
                    var u = i.$options._base;
                    if (s(t) && (t = u.extend(t)), "function" == typeof t) {
                        var l;
                        if (n(t.cid) && void 0 === (t = Yn(l = t, u)))
                            return Qn(l, e, i, a, c);
                        e = e || {},
                        no(t),
                        r(e.model) && Hn(t.options, e);
                        var f = tn(e, t, c);
                        if (o(t.options.functional))
                            return Tn(t, f, e, i, a);
                        var p = e.on;
                        if (e.on = e.nativeOn, o(t.options.abstract)) {
                            var d = e.slot;
                            e = {},
                            d && (e.slot = d)
                        }
                        Fn(e);
                        var v = t.options.name || c;
                        return new Et("vue-component-" + t.cid + (v ? "-" + v : ""), e, void 0, void 0, void 0, i, {
                            Ctor: t,
                            propsData: f,
                            listeners: p,
                            tag: c,
                            children: a
                        }, l)
                    }
                }
            }
            function Mn(t, e) {
                var n = {
                    _isComponent: !0,
                    _parentVnode: t,
                    parent: e
                },
                o = t.data.inlineTemplate;
                return r(o) && (n.render = o.render, n.staticRenderFns = o.staticRenderFns),
                new t.componentOptions.Ctor(n)
            }
            function Fn(t) {
                for (var e = t.hook || (t.hook = {}), n = 0; n < Ln.length; n++) {
                    var r = Ln[n],
                    o = e[r],
                    i = Nn[r];
                    o === i || o && o._merged || (e[r] = o ? Rn(i, o) : i)
                }
            }
            function Rn(t, e) {
                var n = function (n, r) {
                    t(n, r),
                    e(n, r)
                };
                return n._merged = !0,
                n
            }
            function Hn(t, e) {
                var n = t.model && t.model.prop || "value",
                o = t.model && t.model.event || "input";
                (e.attrs || (e.attrs = {}))[n] = e.model.value;
                var i = e.on || (e.on = {}),
                a = i[o],
                s = e.model.callback;
                r(a) ? (Array.isArray(a) ? -1 === a.indexOf(s) : a !== s) && (i[o] = [s].concat(a)) : i[o] = s
            }
            var Un = 1,
            Bn = 2;
            function zn(t, e, n, r, i, s) {
                return (Array.isArray(n) || a(n)) && (i = r, r = n, n = void 0),
                o(s) && (i = Bn),
                Vn(t, e, n, r, i)
            }
            function Vn(t, e, n, o, i) {
                if (r(n) && r(n.__ob__))
                    return It();
                if (r(n) && r(n.is) && (e = n.is), !e)
                    return It();
                var a,
                s,
                c;
                (Array.isArray(o) && "function" == typeof o[0] && ((n = n || {}).scopedSlots = {
                        default:
                            o[0]
                        }, o.length = 0), i === Bn ? o = rn(o) : i === Un && (o = nn(o)), "string" == typeof e) ? (s = t.$vnode && t.$vnode.ns || z.getTagNamespace(e), a = z.isReservedTag(e) ? new Et(z.parsePlatformTagName(e), n, o, void 0, void 0, t) : n && n.pre || !r(c = ue(t.$options, "components", e)) ? new Et(e, n, o, void 0, void 0, t) : Pn(c, n, t, o, e)) : a = Pn(e, n, t, o);
                return Array.isArray(a) ? a : r(a) ? (r(s) && Wn(a, s), r(n) && qn(n), a) : It()
            }
            function Wn(t, e, i) {
                if (t.ns = e, "foreignObject" === t.tag && (e = void 0, i = !0), r(t.children))
                    for (var a = 0, s = t.children.length; a < s; a++) {
                        var c = t.children[a];
                        r(c.tag) && (n(c.ns) || o(i) && "svg" !== c.tag) && Wn(c, e, i)
                    }
            }
            function qn(t) {
                s(t.style) && Xe(t.style),
                s(t.class) && Xe(t.class)
            }
            function Kn(t) {
                t._vnode = null,
                t._staticTrees = null;
                var n = t.$options,
                r = t.$vnode = n._parentVnode,
                o = r && r.context;
                t.$slots = ln(n._renderChildren, o),
                t.$scopedSlots = e,
                t._c = function (e, n, r, o) {
                    return zn(t, e, n, r, o, !1)
                },
                t.$createElement = function (e, n, r, o) {
                    return zn(t, e, n, r, o, !0)
                };
                var i = r && r.data;
                Wt(t, "$attrs", i && i.attrs || e, null, !0),
                Wt(t, "$listeners", n._parentListeners || e, null, !0)
            }
            var Xn,
            Gn = null;
            function Zn(t) {
                jn(t.prototype),
                t.prototype.$nextTick = function (t) {
                    return ze(t, this)
                },
                t.prototype._render = function () {
                    var t,
                    e = this,
                    n = e.$options,
                    r = n.render,
                    o = n._parentVnode;
                    o && (e.$scopedSlots = pn(o.data.scopedSlots, e.$slots, e.$scopedSlots)),
                    e.$vnode = o;
                    try {
                        Gn = e,
                        t = r.call(e._renderProxy, e.$createElement)
                    } catch (as) {
                        we(as, e, "render"),
                        t = e._vnode
                    } finally {
                        Gn = null
                    }
                    return Array.isArray(t) && 1 === t.length && (t = t[0]),
                    t instanceof Et || (t = It()),
                    t.parent = o,
                    t
                }
            }
            function Jn(t, e) {
                return (t.__esModule || mt && "Module" === t[Symbol.toStringTag]) && (t = t.default),
                s(t) ? e.extend(t) : t
            }
            function Qn(t, e, n, r, o) {
                var i = It();
                return i.asyncFactory = t,
                i.asyncMeta = {
                    data: e,
                    context: n,
                    children: r,
                    tag: o
                },
                i
            }
            function Yn(t, e) {
                if (o(t.error) && r(t.errorComp))
                    return t.errorComp;
                if (r(t.resolved))
                    return t.resolved;
                var i = Gn;
                if (i && r(t.owners) && -1 === t.owners.indexOf(i) && t.owners.push(i), o(t.loading) && r(t.loadingComp))
                    return t.loadingComp;
                if (i && !r(t.owners)) {
                    var a = t.owners = [i],
                    c = !0,
                    u = null,
                    l = null;
                    i.$on("hook:destroyed", function () {
                        return _(a, i)
                    });
                    var f = function (t) {
                        for (var e = 0, n = a.length; e < n; e++)
                            a[e].$forceUpdate();
                        t && (a.length = 0, null !== u && (clearTimeout(u), u = null), null !== l && (clearTimeout(l), l = null))
                    },
                    p = R(function (n) {
                        t.resolved = Jn(n, e),
                        c ? a.length = 0 : f(!0)
                    }),
                    v = R(function (e) {
                        r(t.errorComp) && (t.error = !0, f(!0))
                    }),
                    h = t(p, v);
                    return s(h) && (d(h) ? n(t.resolved) && h.then(p, v) : d(h.component) && (h.component.then(p, v), r(h.error) && (t.errorComp = Jn(h.error, e)), r(h.loading) && (t.loadingComp = Jn(h.loading, e), 0 === h.delay ? t.loading = !0 : u = setTimeout(function () {
                                    u = null,
                                    n(t.resolved) && n(t.error) && (t.loading = !0, f(!1))
                                }, h.delay || 200)), r(h.timeout) && (l = setTimeout(function () {
                                    l = null,
                                    n(t.resolved) && v(null)
                                }, h.timeout)))),
                    c = !1,
                    t.loading ? t.loadingComp : t.resolved
                }
            }
            function tr(t) {
                return t.isComment && t.asyncFactory
            }
            function er(t) {
                if (Array.isArray(t))
                    for (var e = 0; e < t.length; e++) {
                        var n = t[e];
                        if (r(n) && (r(n.componentOptions) || tr(n)))
                            return n
                    }
            }
            function nr(t) {
                t._events = Object.create(null),
                t._hasHookEvent = !1;
                var e = t.$options._parentListeners;
                e && ar(t, e)
            }
            function rr(t, e) {
                Xn.$on(t, e)
            }
            function or(t, e) {
                Xn.$off(t, e)
            }
            function ir(t, e) {
                var n = Xn;
                return function r() {
                    null !== e.apply(null, arguments) && n.$off(t, r)
                }
            }
            function ar(t, e, n) {
                Xn = t,
                Qe(e, n || {}, rr, or, ir, t),
                Xn = void 0
            }
            function sr(t) {
                var e = /^hook:/;
                t.prototype.$on = function (t, n) {
                    var r = this;
                    if (Array.isArray(t))
                        for (var o = 0, i = t.length; o < i; o++)
                            r.$on(t[o], n);
                    else (r._events[t] || (r._events[t] = [])).push(n), e.test(t) && (r._hasHookEvent = !0);
                    return r
                },
                t.prototype.$once = function (t, e) {
                    var n = this;
                    function r() {
                        n.$off(t, r),
                        e.apply(n, arguments)
                    }
                    return r.fn = e,
                    n.$on(t, r),
                    n
                },
                t.prototype.$off = function (t, e) {
                    var n = this;
                    if (!arguments.length)
                        return n._events = Object.create(null), n;
                    if (Array.isArray(t)) {
                        for (var r = 0, o = t.length; r < o; r++)
                            n.$off(t[r], e);
                        return n
                    }
                    var i,
                    a = n._events[t];
                    if (!a)
                        return n;
                    if (!e)
                        return n._events[t] = null, n;
                    for (var s = a.length; s--; )
                        if ((i = a[s]) === e || i.fn === e) {
                            a.splice(s, 1);
                            break
                        }
                    return n
                },
                t.prototype.$emit = function (t) {
                    var e = this,
                    n = e._events[t];
                    if (n) {
                        n = n.length > 1 ? T(n) : n;
                        for (var r = T(arguments, 1), o = 'event handler for "' + t + '"', i = 0, a = n.length; i < a; i++)
                            $e(n[i], e, r, e, o)
                    }
                    return e
                }
            }
            var cr = null,
            ur = !1;
            function lr(t) {
                var e = cr;
                return cr = t,
                function () {
                    cr = e
                }
            }
            function fr(t) {
                var e = t.$options,
                n = e.parent;
                if (n && !e.abstract) {
                    for (; n.$options.abstract && n.$parent; )
                        n = n.$parent;
                    n.$children.push(t)
                }
                t.$parent = n,
                t.$root = n ? n.$root : t,
                t.$children = [],
                t.$refs = {},
                t._watcher = null,
                t._inactive = null,
                t._directInactive = !1,
                t._isMounted = !1,
                t._isDestroyed = !1,
                t._isBeingDestroyed = !1
            }
            function pr(t) {
                t.prototype._update = function (t, e) {
                    var n = this,
                    r = n.$el,
                    o = n._vnode,
                    i = lr(n);
                    n._vnode = t,
                    n.$el = o ? n.__patch__(o, t) : n.__patch__(n.$el, t, e, !1),
                    i(),
                    r && (r.__vue__ = null),
                    n.$el && (n.$el.__vue__ = n),
                    n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el)
                },
                t.prototype.$forceUpdate = function () {
                    this._watcher && this._watcher.update()
                },
                t.prototype.$destroy = function () {
                    var t = this;
                    if (!t._isBeingDestroyed) {
                        gr(t, "beforeDestroy"),
                        t._isBeingDestroyed = !0;
                        var e = t.$parent;
                        !e || e._isBeingDestroyed || t.$options.abstract || _(e.$children, t),
                        t._watcher && t._watcher.teardown();
                        for (var n = t._watchers.length; n--; )
                            t._watchers[n].teardown();
                        t._data.__ob__ && t._data.__ob__.vmCount--,
                        t._isDestroyed = !0,
                        t.__patch__(t._vnode, null),
                        gr(t, "destroyed"),
                        t.$off(),
                        t.$el && (t.$el.__vue__ = null),
                        t.$vnode && (t.$vnode.parent = null)
                    }
                }
            }
            function dr(t, e, n) {
                var r;
                return t.$el = e,
                t.$options.render || (t.$options.render = It),
                gr(t, "beforeMount"),
                r = function () {
                    t._update(t._render(), n)
                },
                new Mr(t, r, N, {
                    before: function () {
                        t._isMounted && !t._isDestroyed && gr(t, "beforeUpdate")
                    }
                }, !0),
                n = !1,
                null == t.$vnode && (t._isMounted = !0, gr(t, "mounted")),
                t
            }
            function vr(t, n, r, o, i) {
                var a = o.data.scopedSlots,
                s = t.$scopedSlots,
                c = !!(a && !a.$stable || s !== e && !s.$stable || a && t.$scopedSlots.$key !== a.$key),
                u = !!(i || t.$options._renderChildren || c);
                if (t.$options._parentVnode = o, t.$vnode = o, t._vnode && (t._vnode.parent = o), t.$options._renderChildren = i, t.$attrs = o.data.attrs || e, t.$listeners = r || e, n && t.$options.props) {
                    Ht(!1);
                    for (var l = t._props, f = t.$options._propKeys || [], p = 0; p < f.length; p++) {
                        var d = f[p],
                        v = t.$options.props;
                        l[d] = le(d, v, n, t)
                    }
                    Ht(!0),
                    t.$options.propsData = n
                }
                r = r || e;
                var h = t.$options._parentListeners;
                t.$options._parentListeners = r,
                ar(t, r, h),
                u && (t.$slots = ln(i, o.context), t.$forceUpdate())
            }
            function hr(t) {
                for (; t && (t = t.$parent); )
                    if (t._inactive)
                        return !0;
                return !1
            }
            function mr(t, e) {
                if (e) {
                    if (t._directInactive = !1, hr(t))
                        return
                } else if (t._directInactive)
                    return;
                if (t._inactive || null === t._inactive) {
                    t._inactive = !1;
                    for (var n = 0; n < t.$children.length; n++)
                        mr(t.$children[n]);
                    gr(t, "activated")
                }
            }
            function yr(t, e) {
                if (!(e && (t._directInactive = !0, hr(t)) || t._inactive)) {
                    t._inactive = !0;
                    for (var n = 0; n < t.$children.length; n++)
                        yr(t.$children[n]);
                    gr(t, "deactivated")
                }
            }
            function gr(t, e) {
                St();
                var n = t.$options[e],
                r = e + " hook";
                if (n)
                    for (var o = 0, i = n.length; o < i; o++)
                        $e(n[o], t, null, t, r);
                t._hasHookEvent && t.$emit("hook:" + e),
                jt()
            }
            var _r = 100,
            br = [],
            Cr = [],
            wr = {},
            $r = {},
            Ar = !1,
            xr = !1,
            Or = 0;
            function kr() {
                Or = br.length = Cr.length = 0,
                wr = {},
                Ar = xr = !1
            }
            var Sr = 0,
            jr = Date.now;
            if (J && !et) {
                var Er = window.performance;
                Er && "function" == typeof Er.now && jr() > document.createEvent("Event").timeStamp && (jr = function () {
                    return Er.now()
                })
            }
            function Tr() {
                var t,
                e;
                for (Sr = jr(), xr = !0, br.sort(function (t, e) {
                        return t.id - e.id
                    }), Or = 0; Or < br.length; Or++)
                    (t = br[Or]).before && t.before(), e = t.id, wr[e] = null, t.run();
                var n = Cr.slice(),
                r = br.slice();
                kr(),
                Nr(n),
                Ir(r),
                dt && z.devtools && dt.emit("flush")
            }
            function Ir(t) {
                for (var e = t.length; e--; ) {
                    var n = t[e],
                    r = n.vm;
                    r._watcher === n && r._isMounted && !r._isDestroyed && gr(r, "updated")
                }
            }
            function Dr(t) {
                t._inactive = !1,
                Cr.push(t)
            }
            function Nr(t) {
                for (var e = 0; e < t.length; e++)
                    t[e]._inactive = !0, mr(t[e], !0)
            }
            function Lr(t) {
                var e = t.id;
                if (null == wr[e]) {
                    if (wr[e] = !0, xr) {
                        for (var n = br.length - 1; n > Or && br[n].id > t.id; )
                            n--;
                        br.splice(n + 1, 0, t)
                    } else
                        br.push(t);
                    Ar || (Ar = !0, ze(Tr))
                }
            }
            var Pr = 0,
            Mr = function (t, e, n, r, o) {
                this.vm = t,
                o && (t._watcher = this),
                t._watchers.push(this),
                r ? (this.deep = !!r.deep, this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync, this.before = r.before) : this.deep = this.user = this.lazy = this.sync = !1,
                this.cb = n,
                this.id = ++Pr,
                this.active = !0,
                this.dirty = this.lazy,
                this.deps = [],
                this.newDeps = [],
                this.depIds = new ht,
                this.newDepIds = new ht,
                this.expression = "",
                "function" == typeof e ? this.getter = e : (this.getter = X(e), this.getter || (this.getter = N)),
                this.value = this.lazy ? void 0 : this.get()
            };
            Mr.prototype.get = function () {
                var t;
                St(this);
                var e = this.vm;
                try {
                    t = this.getter.call(e, e)
                } catch (as) {
                    if (!this.user)
                        throw as;
                    we(as, e, 'getter for watcher "' + this.expression + '"')
                } finally {
                    this.deep && Xe(t),
                    jt(),
                    this.cleanupDeps()
                }
                return t
            },
            Mr.prototype.addDep = function (t) {
                var e = t.id;
                this.newDepIds.has(e) || (this.newDepIds.add(e), this.newDeps.push(t), this.depIds.has(e) || t.addSub(this))
            },
            Mr.prototype.cleanupDeps = function () {
                for (var t = this.deps.length; t--; ) {
                    var e = this.deps[t];
                    this.newDepIds.has(e.id) || e.removeSub(this)
                }
                var n = this.depIds;
                this.depIds = this.newDepIds,
                this.newDepIds = n,
                this.newDepIds.clear(),
                n = this.deps,
                this.deps = this.newDeps,
                this.newDeps = n,
                this.newDeps.length = 0
            },
            Mr.prototype.update = function () {
                this.lazy ? this.dirty = !0 : this.sync ? this.run() : Lr(this)
            },
            Mr.prototype.run = function () {
                if (this.active) {
                    var t = this.get();
                    if (t !== this.value || s(t) || this.deep) {
                        var e = this.value;
                        if (this.value = t, this.user)
                            try {
                                this.cb.call(this.vm, t, e)
                            } catch (as) {
                                we(as, this.vm, 'callback for watcher "' + this.expression + '"')
                            }
                        else
                            this.cb.call(this.vm, t, e)
                    }
                }
            },
            Mr.prototype.evaluate = function () {
                this.value = this.get(),
                this.dirty = !1
            },
            Mr.prototype.depend = function () {
                for (var t = this.deps.length; t--; )
                    this.deps[t].depend()
            },
            Mr.prototype.teardown = function () {
                if (this.active) {
                    this.vm._isBeingDestroyed || _(this.vm._watchers, this);
                    for (var t = this.deps.length; t--; )
                        this.deps[t].removeSub(this);
                    this.active = !1
                }
            };
            var Fr = {
                enumerable: !0,
                configurable: !0,
                get: N,
                set: N
            };
            function Rr(t, e, n) {
                Fr.get = function () {
                    return this[e][n]
                },
                Fr.set = function (t) {
                    this[e][n] = t
                },
                Object.defineProperty(t, n, Fr)
            }
            function Hr(t) {
                t._watchers = [];
                var e = t.$options;
                e.props && Ur(t, e.props),
                e.methods && Gr(t, e.methods),
                e.data ? Br(t) : Vt(t._data = {}, !0),
                e.computed && Wr(t, e.computed),
                e.watch && e.watch !== ut && Zr(t, e.watch)
            }
            function Ur(t, e) {
                var n = t.$options.propsData || {},
                r = t._props = {},
                o = t.$options._propKeys = [],
                i = !t.$parent;
                i || Ht(!1);
                var a = function (i) {
                    o.push(i);
                    var a = le(i, e, n, t);
                    Wt(r, i, a),
                    i in t || Rr(t, "_props", i)
                };
                for (var s in e)
                    a(s);
                Ht(!0)
            }
            function Br(t) {
                var e = t.$options.data;
                l(e = t._data = "function" == typeof e ? zr(e, t) : e || {}) || (e = {});
                for (var n = Object.keys(e), r = t.$options.props, o = (t.$options.methods, n.length); o--; ) {
                    var i = n[o];
                    0,
                    r && C(r, i) || W(i) || Rr(t, "_data", i)
                }
                Vt(e, !0)
            }
            function zr(t, e) {
                St();
                try {
                    return t.call(e, e)
                } catch (as) {
                    return we(as, e, "data()"), {}
                } finally {
                    jt()
                }
            }
            var Vr = {
                lazy: !0
            };
            function Wr(t, e) {
                var n = t._computedWatchers = Object.create(null),
                r = pt();
                for (var o in e) {
                    var i = e[o],
                    a = "function" == typeof i ? i : i.get;
                    0,
                    r || (n[o] = new Mr(t, a || N, N, Vr)),
                    o in t || qr(t, o, i)
                }
            }
            function qr(t, e, n) {
                var r = !pt();
                "function" == typeof n ? (Fr.get = r ? Kr(e) : Xr(n), Fr.set = N) : (Fr.get = n.get ? r && !1 !== n.cache ? Kr(e) : Xr(n.get) : N, Fr.set = n.set || N),
                Object.defineProperty(t, e, Fr)
            }
            function Kr(t) {
                return function () {
                    var e = this._computedWatchers && this._computedWatchers[t];
                    if (e)
                        return e.dirty && e.evaluate(), Ot.target && e.depend(), e.value
                }
            }
            function Xr(t) {
                return function () {
                    return t.call(this, this)
                }
            }
            function Gr(t, e) {
                t.$options.props;
                for (var n in e)
                    t[n] = "function" != typeof e[n] ? N : E(e[n], t)
            }
            function Zr(t, e) {
                for (var n in e) {
                    var r = e[n];
                    if (Array.isArray(r))
                        for (var o = 0; o < r.length; o++)
                            Jr(t, n, r[o]);
                    else
                        Jr(t, n, r)
                }
            }
            function Jr(t, e, n, r) {
                return l(n) && (r = n, n = n.handler),
                "string" == typeof n && (n = t[n]),
                t.$watch(e, n, r)
            }
            function Qr(t) {
                var e = {
                    get: function () {
                        return this._data
                    }
                },
                n = {
                    get: function () {
                        return this._props
                    }
                };
                Object.defineProperty(t.prototype, "$data", e),
                Object.defineProperty(t.prototype, "$props", n),
                t.prototype.$set = qt,
                t.prototype.$delete = Kt,
                t.prototype.$watch = function (t, e, n) {
                    if (l(e))
                        return Jr(this, t, e, n);
                    (n = n || {}).user = !0;
                    var r = new Mr(this, t, e, n);
                    if (n.immediate)
                        try {
                            e.call(this, r.value)
                        } catch (o) {
                            we(o, this, 'callback for immediate watcher "' + r.expression + '"')
                        }
                    return function () {
                        r.teardown()
                    }
                }
            }
            var Yr = 0;
            function to(t) {
                t.prototype._init = function (t) {
                    var e = this;
                    e._uid = Yr++,
                    e._isVue = !0,
                    t && t._isComponent ? eo(e, t) : e.$options = ce(no(e.constructor), t || {}, e),
                    e._renderProxy = e,
                    e._self = e,
                    fr(e),
                    nr(e),
                    Kn(e),
                    gr(e, "beforeCreate"),
                    cn(e),
                    Hr(e),
                    sn(e),
                    gr(e, "created"),
                    e.$options.el && e.$mount(e.$options.el)
                }
            }
            function eo(t, e) {
                var n = t.$options = Object.create(t.constructor.options),
                r = e._parentVnode;
                n.parent = e.parent,
                n._parentVnode = r;
                var o = r.componentOptions;
                n.propsData = o.propsData,
                n._parentListeners = o.listeners,
                n._renderChildren = o.children,
                n._componentTag = o.tag,
                e.render && (n.render = e.render, n.staticRenderFns = e.staticRenderFns)
            }
            function no(t) {
                var e = t.options;
                if (t.super) {
                    var n = no(t.super);
                    if (n !== t.superOptions) {
                        t.superOptions = n;
                        var r = ro(t);
                        r && I(t.extendOptions, r),
                        (e = t.options = ce(n, t.extendOptions)).name && (e.components[e.name] = t)
                    }
                }
                return e
            }
            function ro(t) {
                var e,
                n = t.options,
                r = t.sealedOptions;
                for (var o in n)
                    n[o] !== r[o] && (e || (e = {}), e[o] = n[o]);
                return e
            }
            function oo(t) {
                this._init(t)
            }
            function io(t) {
                t.use = function (t) {
                    var e = this._installedPlugins || (this._installedPlugins = []);
                    if (e.indexOf(t) > -1)
                        return this;
                    var n = T(arguments, 1);
                    return n.unshift(this),
                    "function" == typeof t.install ? t.install.apply(t, n) : "function" == typeof t && t.apply(null, n),
                    e.push(t),
                    this
                }
            }
            function ao(t) {
                t.mixin = function (t) {
                    return this.options = ce(this.options, t),
                    this
                }
            }
            function so(t) {
                t.cid = 0;
                var e = 1;
                t.extend = function (t) {
                    t = t || {};
                    var n = this,
                    r = n.cid,
                    o = t._Ctor || (t._Ctor = {});
                    if (o[r])
                        return o[r];
                    var i = t.name || n.options.name;
                    var a = function (t) {
                        this._init(t)
                    };
                    return (a.prototype = Object.create(n.prototype)).constructor = a,
                    a.cid = e++,
                    a.options = ce(n.options, t),
                    a.super = n,
                    a.options.props && co(a),
                    a.options.computed && uo(a),
                    a.extend = n.extend,
                    a.mixin = n.mixin,
                    a.use = n.use,
                    U.forEach(function (t) {
                        a[t] = n[t]
                    }),
                    i && (a.options.components[i] = a),
                    a.superOptions = n.options,
                    a.extendOptions = t,
                    a.sealedOptions = I({}, a.options),
                    o[r] = a,
                    a
                }
            }
            function co(t) {
                var e = t.options.props;
                for (var n in e)
                    Rr(t.prototype, "_props", n)
            }
            function uo(t) {
                var e = t.options.computed;
                for (var n in e)
                    qr(t.prototype, n, e[n])
            }
            function lo(t) {
                U.forEach(function (e) {
                    t[e] = function (t, n) {
                        return n ? ("component" === e && l(n) && (n.name = n.name || t, n = this.options._base.extend(n)), "directive" === e && "function" == typeof n && (n = {
                                    bind: n,
                                    update: n
                                }), this.options[e + "s"][t] = n, n) : this.options[e + "s"][t]
                    }
                })
            }
            function fo(t) {
                return t && (t.Ctor.options.name || t.tag)
            }
            function po(t, e) {
                return Array.isArray(t) ? t.indexOf(e) > -1 : "string" == typeof t ? t.split(",").indexOf(e) > -1 : !!f(t) && t.test(e)
            }
            function vo(t, e) {
                var n = t.cache,
                r = t.keys,
                o = t._vnode;
                for (var i in n) {
                    var a = n[i];
                    if (a) {
                        var s = fo(a.componentOptions);
                        s && !e(s) && ho(n, i, r, o)
                    }
                }
            }
            function ho(t, e, n, r) {
                var o = t[e];
                !o || r && o.tag === r.tag || o.componentInstance.$destroy(),
                t[e] = null,
                _(n, e)
            }
            to(oo),
            Qr(oo),
            sr(oo),
            pr(oo),
            Zn(oo);
            var mo = [String, RegExp, Array],
            yo = {
                name: "keep-alive",
                abstract: !0,
                props: {
                    include: mo,
                    exclude: mo,
                    max: [String, Number]
                },
                created: function () {
                    this.cache = Object.create(null),
                    this.keys = []
                },
                destroyed: function () {
                    for (var t in this.cache)
                        ho(this.cache, t, this.keys)
                },
                mounted: function () {
                    var t = this;
                    this.$watch("include", function (e) {
                        vo(t, function (t) {
                            return po(e, t)
                        })
                    }),
                    this.$watch("exclude", function (e) {
                        vo(t, function (t) {
                            return !po(e, t)
                        })
                    })
                },
                render: function () {
                    var t = this.$slots.default,
                    e = er(t),
                    n = e && e.componentOptions;
                    if (n) {
                        var r = fo(n),
                        o = this.include,
                        i = this.exclude;
                        if (o && (!r || !po(o, r)) || i && r && po(i, r))
                            return e;
                        var a = this.cache,
                        s = this.keys,
                        c = null == e.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : e.key;
                        a[c] ? (e.componentInstance = a[c].componentInstance, _(s, c), s.push(c)) : (a[c] = e, s.push(c), this.max && s.length > parseInt(this.max) && ho(a, s[0], s, this._vnode)),
                        e.data.keepAlive = !0
                    }
                    return e || t && t[0]
                }
            },
            go = {
                KeepAlive: yo
            };
            function _o(t) {
                var e = {
                    get: function () {
                        return z
                    }
                };
                Object.defineProperty(t, "config", e),
                t.util = {
                    warn: Ct,
                    extend: I,
                    mergeOptions: ce,
                    defineReactive: Wt
                },
                t.set = qt,
                t.delete = Kt,
                t.nextTick = ze,
                t.observable = function (t) {
                    return Vt(t),
                    t
                },
                t.options = Object.create(null),
                U.forEach(function (e) {
                    t.options[e + "s"] = Object.create(null)
                }),
                t.options._base = t,
                I(t.options.components, go),
                io(t),
                ao(t),
                so(t),
                lo(t)
            }
            _o(oo),
            Object.defineProperty(oo.prototype, "$isServer", {
                get: pt
            }),
            Object.defineProperty(oo.prototype, "$ssrContext", {
                get: function () {
                    return this.$vnode && this.$vnode.ssrContext
                }
            }),
            Object.defineProperty(oo, "FunctionalRenderContext", {
                value: En
            }),
            oo.version = "2.6.10";
            var bo = m("style,class"),
            Co = m("input,textarea,option,select,progress"),
            wo = function (t, e, n) {
                return "value" === n && Co(t) && "button" !== e || "selected" === n && "option" === t || "checked" === n && "input" === t || "muted" === n && "video" === t
            },
            $o = m("contenteditable,draggable,spellcheck"),
            Ao = m("events,caret,typing,plaintext-only"),
            xo = function (t, e) {
                return Eo(e) || "false" === e ? "false" : "contenteditable" === t && Ao(e) ? e : "true"
            },
            Oo = m("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
            ko = "http://www.w3.org/1999/xlink",
            So = function (t) {
                return ":" === t.charAt(5) && "xlink" === t.slice(0, 5)
            },
            jo = function (t) {
                return So(t) ? t.slice(6, t.length) : ""
            },
            Eo = function (t) {
                return null == t || !1 === t
            };
            function To(t) {
                for (var e = t.data, n = t, o = t; r(o.componentInstance); )
                    (o = o.componentInstance._vnode) && o.data && (e = Io(o.data, e));
                for (; r(n = n.parent); )
                    n && n.data && (e = Io(e, n.data));
                return Do(e.staticClass, e.class)
            }
            function Io(t, e) {
                return {
                    staticClass: No(t.staticClass, e.staticClass),
                    class: r(t.class) ? [t.class, e.class] : e.class
                }
            }
            function Do(t, e) {
                return r(t) || r(e) ? No(t, Lo(e)) : ""
            }
            function No(t, e) {
                return t ? e ? t + " " + e : t : e || ""
            }
            function Lo(t) {
                return Array.isArray(t) ? Po(t) : s(t) ? Mo(t) : "string" == typeof t ? t : ""
            }
            function Po(t) {
                for (var e, n = "", o = 0, i = t.length; o < i; o++)
                    r(e = Lo(t[o])) && "" !== e && (n && (n += " "), n += e);
                return n
            }
            function Mo(t) {
                var e = "";
                for (var n in t)
                    t[n] && (e && (e += " "), e += n);
                return e
            }
            var Fo = {
                svg: "http://www.w3.org/2000/svg",
                math: "http://www.w3.org/1998/Math/MathML"
            },
            Ro = m("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
            Ho = m("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
            Uo = function (t) {
                return Ro(t) || Ho(t)
            };
            function Bo(t) {
                return Ho(t) ? "svg" : "math" === t ? "math" : void 0
            }
            var zo = Object.create(null);
            function Vo(t) {
                if (!J)
                    return !0;
                if (Uo(t))
                    return !1;
                if (t = t.toLowerCase(), null != zo[t])
                    return zo[t];
                var e = document.createElement(t);
                return t.indexOf("-") > -1 ? zo[t] = e.constructor === window.HTMLUnknownElement || e.constructor === window.HTMLElement : zo[t] = /HTMLUnknownElement/.test(e.toString())
            }
            var Wo = m("text,number,password,search,email,tel,url");
            function qo(t) {
                if ("string" == typeof t) {
                    var e = document.querySelector(t);
                    return e || document.createElement("div")
                }
                return t
            }
            function Ko(t, e) {
                var n = document.createElement(t);
                return "select" !== t ? n : (e.data && e.data.attrs && void 0 !== e.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n)
            }
            function Xo(t, e) {
                return document.createElementNS(Fo[t], e)
            }
            function Go(t) {
                return document.createTextNode(t)
            }
            function Zo(t) {
                return document.createComment(t)
            }
            function Jo(t, e, n) {
                t.insertBefore(e, n)
            }
            function Qo(t, e) {
                t.removeChild(e)
            }
            function Yo(t, e) {
                t.appendChild(e)
            }
            function ti(t) {
                return t.parentNode
            }
            function ei(t) {
                return t.nextSibling
            }
            function ni(t) {
                return t.tagName
            }
            function ri(t, e) {
                t.textContent = e
            }
            function oi(t, e) {
                t.setAttribute(e, "")
            }
            var ii = Object.freeze({
                createElement: Ko,
                createElementNS: Xo,
                createTextNode: Go,
                createComment: Zo,
                insertBefore: Jo,
                removeChild: Qo,
                appendChild: Yo,
                parentNode: ti,
                nextSibling: ei,
                tagName: ni,
                setTextContent: ri,
                setStyleScope: oi
            }),
            ai = {
                create: function (t, e) {
                    si(e)
                },
                update: function (t, e) {
                    t.data.ref !== e.data.ref && (si(t, !0), si(e))
                },
                destroy: function (t) {
                    si(t, !0)
                }
            };
            function si(t, e) {
                var n = t.data.ref;
                if (r(n)) {
                    var o = t.context,
                    i = t.componentInstance || t.elm,
                    a = o.$refs;
                    e ? Array.isArray(a[n]) ? _(a[n], i) : a[n] === i && (a[n] = void 0) : t.data.refInFor ? Array.isArray(a[n]) ? a[n].indexOf(i) < 0 && a[n].push(i) : a[n] = [i] : a[n] = i
                }
            }
            var ci = new Et("", {}, []),
            ui = ["create", "activate", "update", "remove", "destroy"];
            function li(t, e) {
                return t.key === e.key && (t.tag === e.tag && t.isComment === e.isComment && r(t.data) === r(e.data) && fi(t, e) || o(t.isAsyncPlaceholder) && t.asyncFactory === e.asyncFactory && n(e.asyncFactory.error))
            }
            function fi(t, e) {
                if ("input" !== t.tag)
                    return !0;
                var n,
                o = r(n = t.data) && r(n = n.attrs) && n.type,
                i = r(n = e.data) && r(n = n.attrs) && n.type;
                return o === i || Wo(o) && Wo(i)
            }
            function pi(t, e, n) {
                var o,
                i,
                a = {};
                for (o = e; o <= n; ++o)
                    r(i = t[o].key) && (a[i] = o);
                return a
            }
            function di(t) {
                var e,
                i,
                s = {},
                c = t.modules,
                u = t.nodeOps;
                for (e = 0; e < ui.length; ++e)
                    for (s[ui[e]] = [], i = 0; i < c.length; ++i)
                        r(c[i][ui[e]]) && s[ui[e]].push(c[i][ui[e]]);
                function l(t) {
                    var e = u.parentNode(t);
                    r(e) && u.removeChild(e, t)
                }
                function f(t, e, n, i, a, c, l) {
                    if (r(t.elm) && r(c) && (t = c[l] = Nt(t)), t.isRootInsert = !a, !function (t, e, n, i) {
                        var a = t.data;
                        if (r(a)) {
                            var c = r(t.componentInstance) && a.keepAlive;
                            if (r(a = a.hook) && r(a = a.init) && a(t, !1), r(t.componentInstance))
                                return p(t, e) , d(n, t.elm, i), o(c) && function (t, e, n, o) {
                                        var i,
                                        a = t;
                                        for (; a.componentInstance; )
                                            if (a = a.componentInstance._vnode, r(i = a.data) && r(i = i.transition)) {
                                                for (i = 0; i < s.activate.length; ++i)
                                                    s.activate[i](ci, a);
                                                e.push(a);
                                                break
                                            }
                                        d(n, t.elm, o)
                                    }
                                (t, e, n, i),
                                !0
                            }
                        }
                            (t, e, n, i)) {
                            var f = t.data,
                            h = t.children,
                            m = t.tag;
                            r(m) ? (t.elm = t.ns ? u.createElementNS(t.ns, m) : u.createElement(m, t), g(t), v(t, h, e), r(f) && y(t, e), d(n, t.elm, i)) : o(t.isComment) ? (t.elm = u.createComment(t.text), d(n, t.elm, i)) : (t.elm = u.createTextNode(t.text), d(n, t.elm, i))
                        }
                }
                function p(t, e) {
                    r(t.data.pendingInsert) && (e.push.apply(e, t.data.pendingInsert), t.data.pendingInsert = null),
                    t.elm = t.componentInstance.$el,
                    h(t) ? (y(t, e), g(t)) : (si(t), e.push(t))
                }
                function d(t, e, n) {
                    r(t) && (r(n) ? u.parentNode(n) === t && u.insertBefore(t, e, n) : u.appendChild(t, e))
                }
                function v(t, e, n) {
                    if (Array.isArray(e)) {
                        0;
                        for (var r = 0; r < e.length; ++r)
                            f(e[r], n, t.elm, null, !0, e, r)
                    } else
                        a(t.text) && u.appendChild(t.elm, u.createTextNode(String(t.text)))
                }
                function h(t) {
                    for (; t.componentInstance; )
                        t = t.componentInstance._vnode;
                    return r(t.tag)
                }
                function y(t, n) {
                    for (var o = 0; o < s.create.length; ++o)
                        s.create[o](ci, t);
                    r(e = t.data.hook) && (r(e.create) && e.create(ci, t), r(e.insert) && n.push(t))
                }
                function g(t) {
                    var e;
                    if (r(e = t.fnScopeId))
                        u.setStyleScope(t.elm, e);
                    else
                        for (var n = t; n; )
                            r(e = n.context) && r(e = e.$options._scopeId) && u.setStyleScope(t.elm, e), n = n.parent;
                    r(e = cr) && e !== t.context && e !== t.fnContext && r(e = e.$options._scopeId) && u.setStyleScope(t.elm, e)
                }
                function _(t, e, n, r, o, i) {
                    for (; r <= o; ++r)
                        f(n[r], i, t, e, !1, n, r)
                }
                function b(t) {
                    var e,
                    n,
                    o = t.data;
                    if (r(o))
                        for (r(e = o.hook) && r(e = e.destroy) && e(t), e = 0; e < s.destroy.length; ++e)
                            s.destroy[e](t);
                    if (r(e = t.children))
                        for (n = 0; n < t.children.length; ++n)
                            b(t.children[n])
                }
                function C(t, e, n, o) {
                    for (; n <= o; ++n) {
                        var i = e[n];
                        r(i) && (r(i.tag) ? (w(i), b(i)) : l(i.elm))
                    }
                }
                function w(t, e) {
                    if (r(e) || r(t.data)) {
                        var n,
                        o = s.remove.length + 1;
                        for (r(e) ? e.listeners += o : e = function (t, e) {
                            function n() {
                                0 == --n.listeners && l(t)
                            }
                            return n.listeners = e,
                            n
                        }
                            (t.elm, o), r(n = t.componentInstance) && r(n = n._vnode) && r(n.data) && w(n, e), n = 0; n < s.remove.length; ++n)
                            s.remove[n](t, e);
                        r(n = t.data.hook) && r(n = n.remove) ? n(t, e) : e()
                    } else
                        l(t.elm)
                }
                function $(t, e, n, o) {
                    for (var i = n; i < o; i++) {
                        var a = e[i];
                        if (r(a) && li(t, a))
                            return i
                    }
                }
                function A(t, e, i, a, c, l) {
                    if (t !== e) {
                        r(e.elm) && r(a) && (e = a[c] = Nt(e));
                        var p = e.elm = t.elm;
                        if (o(t.isAsyncPlaceholder))
                            r(e.asyncFactory.resolved) ? k(t.elm, e, i) : e.isAsyncPlaceholder = !0;
                        else if (o(e.isStatic) && o(t.isStatic) && e.key === t.key && (o(e.isCloned) || o(e.isOnce)))
                            e.componentInstance = t.componentInstance;
                        else {
                            var d,
                            v = e.data;
                            r(v) && r(d = v.hook) && r(d = d.prepatch) && d(t, e);
                            var m = t.children,
                            y = e.children;
                            if (r(v) && h(e)) {
                                for (d = 0; d < s.update.length; ++d)
                                    s.update[d](t, e);
                                r(d = v.hook) && r(d = d.update) && d(t, e)
                            }
                            n(e.text) ? r(m) && r(y) ? m !== y && function (t, e, o, i, a) {
                                var s,
                                c,
                                l,
                                p = 0,
                                d = 0,
                                v = e.length - 1,
                                h = e[0],
                                m = e[v],
                                y = o.length - 1,
                                g = o[0],
                                b = o[y],
                                w = !a;
                                for (; p <= v && d <= y; )
                                    n(h) ? h = e[++p] : n(m) ? m = e[--v] : li(h, g) ? (A(h, g, i, o, d), h = e[++p], g = o[++d]) : li(m, b) ? (A(m, b, i, o, y), m = e[--v], b = o[--y]) : li(h, b) ? (A(h, b, i, o, y), w && u.insertBefore(t, h.elm, u.nextSibling(m.elm)), h = e[++p], b = o[--y]) : li(m, g) ? (A(m, g, i, o, d), w && u.insertBefore(t, m.elm, h.elm), m = e[--v], g = o[++d]) : (n(s) && (s = pi(e, p, v)), n(c = r(g.key) ? s[g.key] : $(g, e, p, v)) ? f(g, i, t, h.elm, !1, o, d) : li(l = e[c], g) ? (A(l, g, i, o, d), e[c] = void 0, w && u.insertBefore(t, l.elm, h.elm)) : f(g, i, t, h.elm, !1, o, d), g = o[++d]);
                                p > v ? _(t, n(o[y + 1]) ? null : o[y + 1].elm, o, d, y, i) : d > y && C(0, e, p, v)
                            }
                            (p, m, y, i, l) : r(y) ? (r(t.text) && u.setTextContent(p, ""), _(p, null, y, 0, y.length - 1, i)) : r(m) ? C(0, m, 0, m.length - 1) : r(t.text) && u.setTextContent(p, "") : t.text !== e.text && u.setTextContent(p, e.text),
                            r(v) && r(d = v.hook) && r(d = d.postpatch) && d(t, e)
                        }
                    }
                }
                function x(t, e, n) {
                    if (o(n) && r(t.parent))
                        t.parent.data.pendingInsert = e;
                    else
                        for (var i = 0; i < e.length; ++i)
                            e[i].data.hook.insert(e[i])
                }
                var O = m("attrs,class,staticClass,staticStyle,key");
                function k(t, e, n, i) {
                    var a,
                    s = e.tag,
                    c = e.data,
                    u = e.children;
                    if (i = i || c && c.pre, e.elm = t, o(e.isComment) && r(e.asyncFactory))
                        return e.isAsyncPlaceholder = !0, !0;
                    if (r(c) && (r(a = c.hook) && r(a = a.init) && a(e, !0), r(a = e.componentInstance)))
                        return p(e, n), !0;
                    if (r(s)) {
                        if (r(u))
                            if (t.hasChildNodes())
                                if (r(a = c) && r(a = a.domProps) && r(a = a.innerHTML)) {
                                    if (a !== t.innerHTML)
                                        return !1
                                } else {
                                    for (var l = !0, f = t.firstChild, d = 0; d < u.length; d++) {
                                        if (!f || !k(f, u[d], n, i)) {
                                            l = !1;
                                            break
                                        }
                                        f = f.nextSibling
                                    }
                                    if (!l || f)
                                        return !1
                                }
                            else
                                v(e, u, n);
                        if (r(c)) {
                            var h = !1;
                            for (var m in c)
                                if (!O(m)) {
                                    h = !0,
                                    y(e, n);
                                    break
                                }
                            !h && c.class && Xe(c.class)
                        }
                    } else
                        t.data !== e.text && (t.data = e.text);
                    return !0
                }
                return function (t, e, i, a) {
                    if (!n(e)) {
                        var c,
                        l = !1,
                        p = [];
                        if (n(t))
                            l = !0, f(e, p);
                        else {
                            var d = r(t.nodeType);
                            if (!d && li(t, e))
                                A(t, e, p, null, null, a);
                            else {
                                if (d) {
                                    if (1 === t.nodeType && t.hasAttribute(H) && (t.removeAttribute(H), i = !0), o(i) && k(t, e, p))
                                        return x(e, p, !0), t;
                                    c = t,
                                    t = new Et(u.tagName(c).toLowerCase(), {}, [], void 0, c)
                                }
                                var v = t.elm,
                                m = u.parentNode(v);
                                if (f(e, p, v._leaveCb ? null : m, u.nextSibling(v)), r(e.parent))
                                    for (var y = e.parent, g = h(e); y; ) {
                                        for (var _ = 0; _ < s.destroy.length; ++_)
                                            s.destroy[_](y);
                                        if (y.elm = e.elm, g) {
                                            for (var w = 0; w < s.create.length; ++w)
                                                s.create[w](ci, y);
                                            var $ = y.data.hook.insert;
                                            if ($.merged)
                                                for (var O = 1; O < $.fns.length; O++)
                                                    $.fns[O]()
                                        } else
                                            si(y);
                                        y = y.parent
                                    }
                                r(m) ? C(0, [t], 0, 0) : r(t.tag) && b(t)
                            }
                        }
                        return x(e, p, l),
                        e.elm
                    }
                    r(t) && b(t)
                }
            }
            var vi = {
                create: hi,
                update: hi,
                destroy: function (t) {
                    hi(t, ci)
                }
            };
            function hi(t, e) {
                (t.data.directives || e.data.directives) && mi(t, e)
            }
            function mi(t, e) {
                var n,
                r,
                o,
                i = t === ci,
                a = e === ci,
                s = gi(t.data.directives, t.context),
                c = gi(e.data.directives, e.context),
                u = [],
                l = [];
                for (n in c)
                    r = s[n], o = c[n], r ? (o.oldValue = r.value, o.oldArg = r.arg, bi(o, "update", e, t), o.def && o.def.componentUpdated && l.push(o)) : (bi(o, "bind", e, t), o.def && o.def.inserted && u.push(o));
                if (u.length) {
                    var f = function () {
                        for (var n = 0; n < u.length; n++)
                            bi(u[n], "inserted", e, t)
                    };
                    i ? Ye(e, "insert", f) : f()
                }
                if (l.length && Ye(e, "postpatch", function () {
                        for (var n = 0; n < l.length; n++)
                            bi(l[n], "componentUpdated", e, t)
                        }), !i)for (n in s)
                        c[n] || bi(s[n], "unbind", t, t, a)
            }
            var yi = Object.create(null);
            function gi(t, e) {
                var n,
                r,
                o = Object.create(null);
                if (!t)
                    return o;
                for (n = 0; n < t.length; n++)
                    (r = t[n]).modifiers || (r.modifiers = yi), o[_i(r)] = r, r.def = ue(e.$options, "directives", r.name, !0);
                return o
            }
            function _i(t) {
                return t.rawName || t.name + "." + Object.keys(t.modifiers || {}).join(".")
            }
            function bi(t, e, n, r, o) {
                var i = t.def && t.def[e];
                if (i)
                    try {
                        i(n.elm, t, n, r, o)
                    } catch (as) {
                        we(as, n.context, "directive " + t.name + " " + e + " hook")
                    }
            }
            var Ci = [ai, vi];
            function wi(t, e) {
                var o = e.componentOptions;
                if (!(r(o) && !1 === o.Ctor.options.inheritAttrs || n(t.data.attrs) && n(e.data.attrs))) {
                    var i,
                    a,
                    s = e.elm,
                    c = t.data.attrs || {},
                    u = e.data.attrs || {};
                    for (i in r(u.__ob__) && (u = e.data.attrs = I({}, u)), u)
                        a = u[i], c[i] !== a && $i(s, i, a);
                    for (i in(et || rt) && u.value !== c.value && $i(s, "value", u.value), c)
                        n(u[i]) && (So(i) ? s.removeAttributeNS(ko, jo(i)) : $o(i) || s.removeAttribute(i))
                }
            }
            function $i(t, e, n) {
                t.tagName.indexOf("-") > -1 ? Ai(t, e, n) : Oo(e) ? Eo(n) ? t.removeAttribute(e) : (n = "allowfullscreen" === e && "EMBED" === t.tagName ? "true" : e, t.setAttribute(e, n)) : $o(e) ? t.setAttribute(e, xo(e, n)) : So(e) ? Eo(n) ? t.removeAttributeNS(ko, jo(e)) : t.setAttributeNS(ko, e, n) : Ai(t, e, n)
            }
            function Ai(t, e, n) {
                if (Eo(n))
                    t.removeAttribute(e);
                else {
                    if (et && !nt && "TEXTAREA" === t.tagName && "placeholder" === e && "" !== n && !t.__ieph) {
                        var r = function (e) {
                            e.stopImmediatePropagation(),
                            t.removeEventListener("input", r)
                        };
                        t.addEventListener("input", r),
                        t.__ieph = !0
                    }
                    t.setAttribute(e, n)
                }
            }
            var xi = {
                create: wi,
                update: wi
            };
            function Oi(t, e) {
                var o = e.elm,
                i = e.data,
                a = t.data;
                if (!(n(i.staticClass) && n(i.class) && (n(a) || n(a.staticClass) && n(a.class)))) {
                    var s = To(e),
                    c = o._transitionClasses;
                    r(c) && (s = No(s, Lo(c))),
                    s !== o._prevClass && (o.setAttribute("class", s), o._prevClass = s)
                }
            }
            var ki,
            Si = {
                create: Oi,
                update: Oi
            },
            ji = "__r",
            Ei = "__c";
            function Ti(t) {
                if (r(t[ji])) {
                    var e = et ? "change" : "input";
                    t[e] = [].concat(t[ji], t[e] || []),
                    delete t[ji]
                }
                r(t[Ei]) && (t.change = [].concat(t[Ei], t.change || []), delete t[Ei])
            }
            function Ii(t, e, n) {
                var r = ki;
                return function o() {
                    null !== e.apply(null, arguments) && Li(t, o, n, r)
                }
            }
            var Di = Le && !(ct && Number(ct[1]) <= 53);
            function Ni(t, e, n, r) {
                if (Di) {
                    var o = Sr,
                    i = e;
                    e = i._wrapper = function (t) {
                        if (t.target === t.currentTarget || t.timeStamp >= o || t.timeStamp <= 0 || t.target.ownerDocument !== document)
                            return i.apply(this, arguments)
                    }
                }
                ki.addEventListener(t, e, lt ? {
                    capture: n,
                    passive: r
                }
                     : n)
            }
            function Li(t, e, n, r) {
                (r || ki).removeEventListener(t, e._wrapper || e, n)
            }
            function Pi(t, e) {
                if (!n(t.data.on) || !n(e.data.on)) {
                    var r = e.data.on || {},
                    o = t.data.on || {};
                    ki = e.elm,
                    Ti(r),
                    Qe(r, o, Ni, Li, Ii, e.context),
                    ki = void 0
                }
            }
            var Mi,
            Fi = {
                create: Pi,
                update: Pi
            };
            function Ri(t, e) {
                if (!n(t.data.domProps) || !n(e.data.domProps)) {
                    var o,
                    i,
                    a = e.elm,
                    s = t.data.domProps || {},
                    c = e.data.domProps || {};
                    for (o in r(c.__ob__) && (c = e.data.domProps = I({}, c)), s)
                        o in c || (a[o] = "");
                    for (o in c) {
                        if (i = c[o], "textContent" === o || "innerHTML" === o) {
                            if (e.children && (e.children.length = 0), i === s[o])
                                continue;
                            1 === a.childNodes.length && a.removeChild(a.childNodes[0])
                        }
                        if ("value" === o && "PROGRESS" !== a.tagName) {
                            a._value = i;
                            var u = n(i) ? "" : String(i);
                            Hi(a, u) && (a.value = u)
                        } else if ("innerHTML" === o && Ho(a.tagName) && n(a.innerHTML)) {
                            (Mi = Mi || document.createElement("div")).innerHTML = "<svg>" + i + "</svg>";
                            for (var l = Mi.firstChild; a.firstChild; )
                                a.removeChild(a.firstChild);
                            for (; l.firstChild; )
                                a.appendChild(l.firstChild)
                        } else if (i !== s[o])
                            try {
                                a[o] = i
                            } catch (as) {}
                    }
                }
            }
            function Hi(t, e) {
                return !t.composing && ("OPTION" === t.tagName || Ui(t, e) || Bi(t, e))
            }
            function Ui(t, e) {
                var n = !0;
                try {
                    n = document.activeElement !== t
                } catch (as) {}
                return n && t.value !== e
            }
            function Bi(t, e) {
                var n = t.value,
                o = t._vModifiers;
                if (r(o)) {
                    if (o.number)
                        return h(n) !== h(e);
                    if (o.trim)
                        return n.trim() !== e.trim()
                }
                return n !== e
            }
            var zi = {
                create: Ri,
                update: Ri
            },
            Vi = w(function (t) {
                var e = {},
                n = /:(.+)/;
                return t.split(/;(?![^(]*\))/g).forEach(function (t) {
                    if (t) {
                        var r = t.split(n);
                        r.length > 1 && (e[r[0].trim()] = r[1].trim())
                    }
                }),
                e
            });
            function Wi(t) {
                var e = qi(t.style);
                return t.staticStyle ? I(t.staticStyle, e) : e
            }
            function qi(t) {
                return Array.isArray(t) ? D(t) : "string" == typeof t ? Vi(t) : t
            }
            function Ki(t, e) {
                var n,
                r = {};
                if (e)
                    for (var o = t; o.componentInstance; )
                        (o = o.componentInstance._vnode) && o.data && (n = Wi(o.data)) && I(r, n);
                (n = Wi(t.data)) && I(r, n);
                for (var i = t; i = i.parent; )
                    i.data && (n = Wi(i.data)) && I(r, n);
                return r
            }
            var Xi,
            Gi = /^--/,
            Zi = /\s*!important$/,
            Ji = function (t, e, n) {
                if (Gi.test(e))
                    t.style.setProperty(e, n);
                else if (Zi.test(n))
                    t.style.setProperty(k(e), n.replace(Zi, ""), "important");
                else {
                    var r = Yi(e);
                    if (Array.isArray(n))
                        for (var o = 0, i = n.length; o < i; o++)
                            t.style[r] = n[o];
                    else
                        t.style[r] = n
                }
            },
            Qi = ["Webkit", "Moz", "ms"],
            Yi = w(function (t) {
                if (Xi = Xi || document.createElement("div").style, "filter" !== (t = A(t)) && t in Xi)
                    return t;
                for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = 0; n < Qi.length; n++) {
                    var r = Qi[n] + e;
                    if (r in Xi)
                        return r
                }
            });
            function ta(t, e) {
                var o = e.data,
                i = t.data;
                if (!(n(o.staticStyle) && n(o.style) && n(i.staticStyle) && n(i.style))) {
                    var a,
                    s,
                    c = e.elm,
                    u = i.staticStyle,
                    l = i.normalizedStyle || i.style || {},
                    f = u || l,
                    p = qi(e.data.style) || {};
                    e.data.normalizedStyle = r(p.__ob__) ? I({}, p) : p;
                    var d = Ki(e, !0);
                    for (s in f)
                        n(d[s]) && Ji(c, s, "");
                    for (s in d)
                        (a = d[s]) !== f[s] && Ji(c, s, null == a ? "" : a)
                }
            }
            var ea = {
                create: ta,
                update: ta
            },
            na = /\s+/;
            function ra(t, e) {
                if (e && (e = e.trim()))
                    if (t.classList)
                        e.indexOf(" ") > -1 ? e.split(na).forEach(function (e) {
                            return t.classList.add(e)
                        }) : t.classList.add(e);
                    else {
                        var n = " " + (t.getAttribute("class") || "") + " ";
                        n.indexOf(" " + e + " ") < 0 && t.setAttribute("class", (n + e).trim())
                    }
            }
            function oa(t, e) {
                if (e && (e = e.trim()))
                    if (t.classList)
                        e.indexOf(" ") > -1 ? e.split(na).forEach(function (e) {
                            return t.classList.remove(e)
                        }) : t.classList.remove(e), t.classList.length || t.removeAttribute("class");
                    else {
                        for (var n = " " + (t.getAttribute("class") || "") + " ", r = " " + e + " "; n.indexOf(r) >= 0; )
                            n = n.replace(r, " ");
                        (n = n.trim()) ? t.setAttribute("class", n) : t.removeAttribute("class")
                    }
            }
            function ia(t) {
                if (t) {
                    if ("object" == typeof t) {
                        var e = {};
                        return !1 !== t.css && I(e, aa(t.name || "v")),
                        I(e, t),
                        e
                    }
                    return "string" == typeof t ? aa(t) : void 0
                }
            }
            var aa = w(function (t) {
                return {
                    enterClass: t + "-enter",
                    enterToClass: t + "-enter-to",
                    enterActiveClass: t + "-enter-active",
                    leaveClass: t + "-leave",
                    leaveToClass: t + "-leave-to",
                    leaveActiveClass: t + "-leave-active"
                }
            }),
            sa = J && !nt,
            ca = "transition",
            ua = "animation",
            la = "transition",
            fa = "transitionend",
            pa = "animation",
            da = "animationend";
            sa && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (la = "WebkitTransition", fa = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (pa = "WebkitAnimation", da = "webkitAnimationEnd"));
            var va = J ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function (t) {
                return t()
            };
            function ha(t) {
                va(function () {
                    va(t)
                })
            }
            function ma(t, e) {
                var n = t._transitionClasses || (t._transitionClasses = []);
                n.indexOf(e) < 0 && (n.push(e), ra(t, e))
            }
            function ya(t, e) {
                t._transitionClasses && _(t._transitionClasses, e),
                oa(t, e)
            }
            function ga(t, e, n) {
                var r = ba(t, e),
                o = r.type,
                i = r.timeout,
                a = r.propCount;
                if (!o)
                    return n();
                var s = o === ca ? fa : da,
                c = 0,
                u = function () {
                    t.removeEventListener(s, l),
                    n()
                },
                l = function (e) {
                    e.target === t && ++c >= a && u()
                };
                setTimeout(function () {
                    c < a && u()
                }, i + 1),
                t.addEventListener(s, l)
            }
            var _a = /\b(transform|all)(,|$)/;
            function ba(t, e) {
                var n,
                r = window.getComputedStyle(t),
                o = (r[la + "Delay"] || "").split(", "),
                i = (r[la + "Duration"] || "").split(", "),
                a = Ca(o, i),
                s = (r[pa + "Delay"] || "").split(", "),
                c = (r[pa + "Duration"] || "").split(", "),
                u = Ca(s, c),
                l = 0,
                f = 0;
                return e === ca ? a > 0 && (n = ca, l = a, f = i.length) : e === ua ? u > 0 && (n = ua, l = u, f = c.length) : f = (n = (l = Math.max(a, u)) > 0 ? a > u ? ca : ua : null) ? n === ca ? i.length : c.length : 0, {
                    type: n,
                    timeout: l,
                    propCount: f,
                    hasTransform: n === ca && _a.test(r[la + "Property"])
                }
            }
            function Ca(t, e) {
                for (; t.length < e.length; )
                    t = t.concat(t);
                return Math.max.apply(null, e.map(function (e, n) {
                        return wa(e) + wa(t[n])
                    }))
            }
            function wa(t) {
                return 1e3 * Number(t.slice(0, -1).replace(",", "."))
            }
            function $a(t, e) {
                var o = t.elm;
                r(o._leaveCb) && (o._leaveCb.cancelled = !0, o._leaveCb());
                var i = ia(t.data.transition);
                if (!n(i) && !r(o._enterCb) && 1 === o.nodeType) {
                    for (var a = i.css, c = i.type, u = i.enterClass, l = i.enterToClass, f = i.enterActiveClass, p = i.appearClass, d = i.appearToClass, v = i.appearActiveClass, m = i.beforeEnter, y = i.enter, g = i.afterEnter, _ = i.enterCancelled, b = i.beforeAppear, C = i.appear, w = i.afterAppear, $ = i.appearCancelled, A = i.duration, x = cr, O = cr.$vnode; O && O.parent; )
                        x = O.context, O = O.parent;
                    var k = !x._isMounted || !t.isRootInsert;
                    if (!k || C || "" === C) {
                        var S = k && p ? p : u,
                        j = k && v ? v : f,
                        E = k && d ? d : l,
                        T = k && b || m,
                        I = k && "function" == typeof C ? C : y,
                        D = k && w || g,
                        N = k && $ || _,
                        L = h(s(A) ? A.enter : A);
                        0;
                        var P = !1 !== a && !nt,
                        M = ka(I),
                        F = o._enterCb = R(function () {
                            P && (ya(o, E), ya(o, j)),
                            F.cancelled ? (P && ya(o, S), N && N(o)) : D && D(o),
                            o._enterCb = null
                        });
                        t.data.show || Ye(t, "insert", function () {
                            var e = o.parentNode,
                            n = e && e._pending && e._pending[t.key];
                            n && n.tag === t.tag && n.elm._leaveCb && n.elm._leaveCb(),
                            I && I(o, F)
                        }),
                        T && T(o),
                        P && (ma(o, S), ma(o, j), ha(function () {
                                ya(o, S),
                                F.cancelled || (ma(o, E), M || (Oa(L) ? setTimeout(F, L) : ga(o, c, F)))
                            })),
                        t.data.show && (e && e(), I && I(o, F)),
                        P || M || F()
                    }
                }
            }
            function Aa(t, e) {
                var o = t.elm;
                r(o._enterCb) && (o._enterCb.cancelled = !0, o._enterCb());
                var i = ia(t.data.transition);
                if (n(i) || 1 !== o.nodeType)
                    return e();
                if (!r(o._leaveCb)) {
                    var a = i.css,
                    c = i.type,
                    u = i.leaveClass,
                    l = i.leaveToClass,
                    f = i.leaveActiveClass,
                    p = i.beforeLeave,
                    d = i.leave,
                    v = i.afterLeave,
                    m = i.leaveCancelled,
                    y = i.delayLeave,
                    g = i.duration,
                    _ = !1 !== a && !nt,
                    b = ka(d),
                    C = h(s(g) ? g.leave : g);
                    0;
                    var w = o._leaveCb = R(function () {
                        o.parentNode && o.parentNode._pending && (o.parentNode._pending[t.key] = null),
                        _ && (ya(o, l), ya(o, f)),
                        w.cancelled ? (_ && ya(o, u), m && m(o)) : (e(), v && v(o)),
                        o._leaveCb = null
                    });
                    y ? y($) : $()
                }
                function $() {
                    w.cancelled || (!t.data.show && o.parentNode && ((o.parentNode._pending || (o.parentNode._pending = {}))[t.key] = t), p && p(o), _ && (ma(o, u), ma(o, f), ha(function () {
                                ya(o, u),
                                w.cancelled || (ma(o, l), b || (Oa(C) ? setTimeout(w, C) : ga(o, c, w)))
                            })), d && d(o, w), _ || b || w())
                }
            }
            function xa(t, e, n) {
                "number" != typeof t ? Ct("<transition> explicit " + e + " duration is not a valid number - got " + JSON.stringify(t) + ".", n.context) : isNaN(t) && Ct("<transition> explicit " + e + " duration is NaN - the duration expression might be incorrect.", n.context)
            }
            function Oa(t) {
                return "number" == typeof t && !isNaN(t)
            }
            function ka(t) {
                if (n(t))
                    return !1;
                var e = t.fns;
                return r(e) ? ka(Array.isArray(e) ? e[0] : e) : (t._length || t.length) > 1
            }
            function Sa(t, e) {
                !0 !== e.data.show && $a(e)
            }
            var ja = J ? {
                create: Sa,
                activate: Sa,
                remove: function (t, e) {
                    !0 !== t.data.show ? Aa(t, e) : e()
                }
            }
             : {},
            Ea = [xi, Si, Fi, zi, ea, ja],
            Ta = Ea.concat(Ci),
            Ia = di({
                nodeOps: ii,
                modules: Ta
            });
            nt && document.addEventListener("selectionchange", function () {
                var t = document.activeElement;
                t && t.vmodel && Ha(t, "input")
            });
            var Da = {
                inserted: function (t, e, n, r) {
                    "select" === n.tag ? (r.elm && !r.elm._vOptions ? Ye(n, "postpatch", function () {
                            Da.componentUpdated(t, e, n)
                        }) : Na(t, e, n.context), t._vOptions = [].map.call(t.options, Ma)) : ("textarea" === n.tag || Wo(t.type)) && (t._vModifiers = e.modifiers, e.modifiers.lazy || (t.addEventListener("compositionstart", Fa), t.addEventListener("compositionend", Ra), t.addEventListener("change", Ra), nt && (t.vmodel = !0)))
                },
                componentUpdated: function (t, e, n) {
                    if ("select" === n.tag) {
                        Na(t, e, n.context);
                        var r = t._vOptions,
                        o = t._vOptions = [].map.call(t.options, Ma);
                        if (o.some(function (t, e) {
                                return !M(t, r[e])
                            }))
                            (t.multiple ? e.value.some(function (t) {
                                    return Pa(t, o)
                                }) : e.value !== e.oldValue && Pa(e.value, o)) && Ha(t, "change")
                    }
                }
            };
            function Na(t, e, n) {
                La(t, e, n),
                (et || rt) && setTimeout(function () {
                    La(t, e, n)
                }, 0)
            }
            function La(t, e, n) {
                var r = e.value,
                o = t.multiple;
                if (!o || Array.isArray(r)) {
                    for (var i, a, s = 0, c = t.options.length; s < c; s++)
                        if (a = t.options[s], o)
                            i = F(r, Ma(a)) > -1, a.selected !== i && (a.selected = i);
                        else if (M(Ma(a), r))
                            return void(t.selectedIndex !== s && (t.selectedIndex = s));
                    o || (t.selectedIndex = -1)
                }
            }
            function Pa(t, e) {
                return e.every(function (e) {
                    return !M(e, t)
                })
            }
            function Ma(t) {
                return "_value" in t ? t._value : t.value
            }
            function Fa(t) {
                t.target.composing = !0
            }
            function Ra(t) {
                t.target.composing && (t.target.composing = !1, Ha(t.target, "input"))
            }
            function Ha(t, e) {
                var n = document.createEvent("HTMLEvents");
                n.initEvent(e, !0, !0),
                t.dispatchEvent(n)
            }
            function Ua(t) {
                return !t.componentInstance || t.data && t.data.transition ? t : Ua(t.componentInstance._vnode)
            }
            var Ba = {
                bind: function (t, e, n) {
                    var r = e.value,
                    o = (n = Ua(n)).data && n.data.transition,
                    i = t.__vOriginalDisplay = "none" === t.style.display ? "" : t.style.display;
                    r && o ? (n.data.show = !0, $a(n, function () {
                            t.style.display = i
                        })) : t.style.display = r ? i : "none"
                },
                update: function (t, e, n) {
                    var r = e.value;
                    !r != !e.oldValue && ((n = Ua(n)).data && n.data.transition ? (n.data.show = !0, r ? $a(n, function () {
                                t.style.display = t.__vOriginalDisplay
                            }) : Aa(n, function () {
                                t.style.display = "none"
                            })) : t.style.display = r ? t.__vOriginalDisplay : "none")
                },
                unbind: function (t, e, n, r, o) {
                    o || (t.style.display = t.__vOriginalDisplay)
                }
            },
            za = {
                model: Da,
                show: Ba
            },
            Va = {
                name: String,
                appear: Boolean,
                css: Boolean,
                mode: String,
                type: String,
                enterClass: String,
                leaveClass: String,
                enterToClass: String,
                leaveToClass: String,
                enterActiveClass: String,
                leaveActiveClass: String,
                appearClass: String,
                appearActiveClass: String,
                appearToClass: String,
                duration: [Number, String, Object]
            };
            function Wa(t) {
                var e = t && t.componentOptions;
                return e && e.Ctor.options.abstract ? Wa(er(e.children)) : t
            }
            function qa(t) {
                var e = {},
                n = t.$options;
                for (var r in n.propsData)
                    e[r] = t[r];
                var o = n._parentListeners;
                for (var i in o)
                    e[A(i)] = o[i];
                return e
            }
            function Ka(t, e) {
                if (/\d-keep-alive$/.test(e.tag))
                    return t("keep-alive", {
                        props: e.componentOptions.propsData
                    })
            }
            function Xa(t) {
                for (; t = t.parent; )
                    if (t.data.transition)
                        return !0
            }
            function Ga(t, e) {
                return e.key === t.key && e.tag === t.tag
            }
            var Za = function (t) {
                return t.tag || tr(t)
            },
            Ja = function (t) {
                return "show" === t.name
            },
            Qa = {
                name: "transition",
                props: Va,
                abstract: !0,
                render: function (t) {
                    var e = this,
                    n = this.$slots.default;
                    if (n && (n = n.filter(Za)).length) {
                        0;
                        var r = this.mode;
                        0;
                        var o = n[0];
                        if (Xa(this.$vnode))
                            return o;
                        var i = Wa(o);
                        if (!i)
                            return o;
                        if (this._leaving)
                            return Ka(t, o);
                        var s = "__transition-" + this._uid + "-";
                        i.key = null == i.key ? i.isComment ? s + "comment" : s + i.tag : a(i.key) ? 0 === String(i.key).indexOf(s) ? i.key : s + i.key : i.key;
                        var c = (i.data || (i.data = {})).transition = qa(this),
                        u = this._vnode,
                        l = Wa(u);
                        if (i.data.directives && i.data.directives.some(Ja) && (i.data.show = !0), l && l.data && !Ga(i, l) && !tr(l) && (!l.componentInstance || !l.componentInstance._vnode.isComment)) {
                            var f = l.data.transition = I({}, c);
                            if ("out-in" === r)
                                return this._leaving = !0, Ye(f, "afterLeave", function () {
                                    e._leaving = !1,
                                    e.$forceUpdate()
                                }), Ka(t, o);
                            if ("in-out" === r) {
                                if (tr(i))
                                    return u;
                                var p,
                                d = function () {
                                    p()
                                };
                                Ye(c, "afterEnter", d),
                                Ye(c, "enterCancelled", d),
                                Ye(f, "delayLeave", function (t) {
                                    p = t
                                })
                            }
                        }
                        return o
                    }
                }
            },
            Ya = I({
                tag: String,
                moveClass: String
            }, Va);
            delete Ya.mode;
            var ts = {
                props: Ya,
                beforeMount: function () {
                    var t = this,
                    e = this._update;
                    this._update = function (n, r) {
                        var o = lr(t);
                        t.__patch__(t._vnode, t.kept, !1, !0),
                        t._vnode = t.kept,
                        o(),
                        e.call(t, n, r)
                    }
                },
                render: function (t) {
                    for (var e = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), r = this.prevChildren = this.children, o = this.$slots.default || [], i = this.children = [], a = qa(this), s = 0; s < o.length; s++) {
                        var c = o[s];
                        if (c.tag)
                            if (null != c.key && 0 !== String(c.key).indexOf("__vlist"))
                                i.push(c), n[c.key] = c, (c.data || (c.data = {})).transition = a;
                            else ;
                    }
                    if (r) {
                        for (var u = [], l = [], f = 0; f < r.length; f++) {
                            var p = r[f];
                            p.data.transition = a,
                            p.data.pos = p.elm.getBoundingClientRect(),
                            n[p.key] ? u.push(p) : l.push(p)
                        }
                        this.kept = t(e, null, u),
                        this.removed = l
                    }
                    return t(e, null, i)
                },
                updated: function () {
                    var t = this.prevChildren,
                    e = this.moveClass || (this.name || "v") + "-move";
                    t.length && this.hasMove(t[0].elm, e) && (t.forEach(es), t.forEach(ns), t.forEach(rs), this._reflow = document.body.offsetHeight, t.forEach(function (t) {
                            if (t.data.moved) {
                                var n = t.elm,
                                r = n.style;
                                ma(n, e),
                                r.transform = r.WebkitTransform = r.transitionDuration = "",
                                n.addEventListener(fa, n._moveCb = function t(r) {
                                    r && r.target !== n || r && !/transform$/.test(r.propertyName) || (n.removeEventListener(fa, t), n._moveCb = null, ya(n, e))
                                })
                            }
                        }))
                },
                methods: {
                    hasMove: function (t, e) {
                        if (!sa)
                            return !1;
                        if (this._hasMove)
                            return this._hasMove;
                        var n = t.cloneNode();
                        t._transitionClasses && t._transitionClasses.forEach(function (t) {
                            oa(n, t)
                        }),
                        ra(n, e),
                        n.style.display = "none",
                        this.$el.appendChild(n);
                        var r = ba(n);
                        return this.$el.removeChild(n),
                        this._hasMove = r.hasTransform
                    }
                }
            };
            function es(t) {
                t.elm._moveCb && t.elm._moveCb(),
                t.elm._enterCb && t.elm._enterCb()
            }
            function ns(t) {
                t.data.newPos = t.elm.getBoundingClientRect()
            }
            function rs(t) {
                var e = t.data.pos,
                n = t.data.newPos,
                r = e.left - n.left,
                o = e.top - n.top;
                if (r || o) {
                    t.data.moved = !0;
                    var i = t.elm.style;
                    i.transform = i.WebkitTransform = "translate(" + r + "px," + o + "px)",
                    i.transitionDuration = "0s"
                }
            }
            var os = {
                Transition: Qa,
                TransitionGroup: ts
            };
            oo.config.mustUseProp = wo,
            oo.config.isReservedTag = Uo,
            oo.config.isReservedAttr = bo,
            oo.config.getTagNamespace = Bo,
            oo.config.isUnknownElement = Vo,
            I(oo.options.directives, za),
            I(oo.options.components, os),
            oo.prototype.__patch__ = J ? Ia : N,
            oo.prototype.$mount = function (t, e) {
                return dr(this, t = t && J ? qo(t) : void 0, e)
            },
            J && setTimeout(function () {
                z.devtools && dt && dt.emit("init", oo)
            }, 0);
            var is = oo;
            exports.default = is;
        }, {}
    ],
    "QGKx": [function (require, module, exports) {
            "use strict";
            var t;
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }),
            exports.defaultState = exports.DualShock4Interface = void 0,
            exports.DualShock4Interface = t,
            function (t) {
                t.Disconnected = "none",
                t.USB = "usb",
                t.Bluetooth = "bt"
            }
            (t || (exports.DualShock4Interface = t = {}));
            const e = {
                interface: t.Disconnected,
                battery: 0,
                charging: !1,
                axes: {
                    leftStickX: 0,
                    leftStickY: 0,
                    rightStickX: 0,
                    rightStickY: 0,
                    l2: 0,
                    r2: 0,
                    accelX: 0,
                    accelY: 0,
                    accelZ: 0,
                    gyroX: 0,
                    gyroY: 0,
                    gyroZ: 0
                },
                buttons: {
                    triangle: !1,
                    circle: !1,
                    cross: !1,
                    square: !1,
                    dPadUp: !1,
                    dPadRight: !1,
                    dPadDown: !1,
                    dPadLeft: !1,
                    l1: !1,
                    l2: !1,
                    l3: !1,
                    r1: !1,
                    r2: !1,
                    r3: !1,
                    options: !1,
                    share: !1,
                    playStation: !1,
                    touchPadClick: !1
                },
                touchpad: {
                    touches: []
                },
                timestamp: -1
            };
            exports.defaultState = e;
        }, {}
    ],
    "8KoM": [function (require, module, exports) {
            "use strict";
            function e(e, r, t) {
                return t < 0 && (t += 1),
                t > 1 && (t -= 1),
                t < 1 / 6 ? e + 6 * (r - e) * t : t < .5 ? r : t < 2 / 3 ? e + (r - e) * (2 / 3 - t) * 6 : e
            }
            function r(r, t, s) {
                const o = {
                    r: 0,
                    g: 0,
                    b: 0
                };
                if (0 === t)
                    o.r = o.g = o.b = 255 * s;
                else {
                    var n = s < .5 ? s * (1 + t) : s + t - s * t,
                    u = 2 * s - n;
                    o.r = 255 * e(u, n, r + 1 / 3),
                    o.g = 255 * e(u, n, r),
                    o.b = 255 * e(u, n, r - 1 / 3)
                }
                return o
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }),
            exports.processHue = e,
            exports.hslToRgb = r;
        }, {}
    ],
    "Psaz": [function (require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }),
            exports.default = void 0;
            var t = require("./util/colorConversion");
            class r {
                constructor(t) {
                    this.controller = t,
                    this._r = 0,
                    this._g = 0,
                    this._b = 0
                }
                updateLightbar() {
                    if (!this.controller.device)
                        throw new Error("Controller not initialized. You must call .init() first!");
                    return this.controller.sendLocalState()
                }
                get r() {
                    return this._r
                }
                set r(t) {
                    this._r = Math.min(255, Math.max(0, t)),
                    this.updateLightbar()
                }
                get g() {
                    return this._g
                }
                set g(t) {
                    this._g = Math.min(255, Math.max(0, t)),
                    this.updateLightbar()
                }
                get b() {
                    return this._b
                }
                set b(t) {
                    this._b = Math.min(255, Math.max(0, t)),
                    this.updateLightbar()
                }
                async setColorRGB(t, r, e) {
                    return this._r = Math.min(255, Math.max(0, t)),
                    this._g = Math.min(255, Math.max(0, r)),
                    this._b = Math.min(255, Math.max(0, e)),
                    this.updateLightbar()
                }
                async setColorHSL(r, e, i) {
                    const s = (0, t.hslToRgb)(r, e, i);
                    return this.setColorRGB(s.r, s.g, s.b)
                }
            }
            exports.default = r;
        }, {
            "./util/colorConversion": "8KoM"
        }
    ],
    "hSBP": [function (require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }),
            exports.default = void 0;
            class t {
                constructor(t) {
                    this.controller = t,
                    this._light = 0,
                    this._heavy = 0
                }
                updateRumble() {
                    if (!this.controller.device)
                        throw new Error("Controller not initialized. You must call .init() first!");
                    return this.controller.sendLocalState()
                }
                get light() {
                    return this._light
                }
                set light(t) {
                    this._light = Math.max(0, Math.min(255, t)),
                    this.updateRumble()
                }
                get heavy() {
                    return this._heavy
                }
                set heavy(t) {
                    this._heavy = Math.max(0, Math.min(255, t)),
                    this.updateRumble()
                }
                async setRumbleIntensity(t, e) {
                    return this._light = Math.min(255, Math.max(0, t)),
                    this._heavy = Math.min(255, Math.max(0, e)),
                    this.updateRumble()
                }
            }
            exports.default = t;
        }, {}
    ],
    "Mipw": [function (require, module, exports) {
            "use strict";
            function t(t, e = 0) {
                const r = (t - 128) / 128;
                return Math.abs(r) <= e ? 0 : Math.min(1, Math.max(-1, r))
            }
            function e(t, e = 0) {
                return Math.min(1, Math.max(e, t / 255))
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }),
            exports.normalizeThumbstick = t,
            exports.normalizeTrigger = e;
        }, {}
    ],
    "yh9p": [function (require, module, exports) {
            "use strict";
            exports.byteLength = u,
            exports.toByteArray = i,
            exports.fromByteArray = d;
            for (var r = [], t = [], e = "undefined" != typeof Uint8Array ? Uint8Array : Array, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = 0, a = n.length; o < a; ++o)
                r[o] = n[o], t[n.charCodeAt(o)] = o;
            function h(r) {
                var t = r.length;
                if (t % 4 > 0)
                    throw new Error("Invalid string. Length must be a multiple of 4");
                var e = r.indexOf("=");
                return -1 === e && (e = t),
                [e, e === t ? 0 : 4 - e % 4]
            }
            function u(r) {
                var t = h(r),
                e = t[0],
                n = t[1];
                return 3 * (e + n) / 4 - n
            }
            function c(r, t, e) {
                return 3 * (t + e) / 4 - e
            }
            function i(r) {
                var n,
                o,
                a = h(r),
                u = a[0],
                i = a[1],
                f = new e(c(r, u, i)),
                A = 0,
                d = i > 0 ? u - 4 : u;
                for (o = 0; o < d; o += 4)
                    n = t[r.charCodeAt(o)] << 18 | t[r.charCodeAt(o + 1)] << 12 | t[r.charCodeAt(o + 2)] << 6 | t[r.charCodeAt(o + 3)], f[A++] = n >> 16 & 255, f[A++] = n >> 8 & 255, f[A++] = 255 & n;
                return 2 === i && (n = t[r.charCodeAt(o)] << 2 | t[r.charCodeAt(o + 1)] >> 4, f[A++] = 255 & n),
                1 === i && (n = t[r.charCodeAt(o)] << 10 | t[r.charCodeAt(o + 1)] << 4 | t[r.charCodeAt(o + 2)] >> 2, f[A++] = n >> 8 & 255, f[A++] = 255 & n),
                f
            }
            function f(t) {
                return r[t >> 18 & 63] + r[t >> 12 & 63] + r[t >> 6 & 63] + r[63 & t]
            }
            function A(r, t, e) {
                for (var n, o = [], a = t; a < e; a += 3)
                    n = (r[a] << 16 & 16711680) + (r[a + 1] << 8 & 65280) + (255 & r[a + 2]), o.push(f(n));
                return o.join("")
            }
            function d(t) {
                for (var e, n = t.length, o = n % 3, a = [], h = 0, u = n - o; h < u; h += 16383)
                    a.push(A(t, h, h + 16383 > u ? u : h + 16383));
                return 1 === o ? (e = t[n - 1], a.push(r[e >> 2] + r[e << 4 & 63] + "==")) : 2 === o && (e = (t[n - 2] << 8) + t[n - 1], a.push(r[e >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "=")),
                a.join("")
            }
            t["-".charCodeAt(0)] = 62,
            t["_".charCodeAt(0)] = 63;
        }, {}
    ],
    "JgNJ": [function (require, module, exports) {
            exports.read = function (a, o, t, r, h) {
                var M,
                p,
                w = 8 * h - r - 1,
                f = (1 << w) - 1,
                e = f >> 1,
                i = -7,
                N = t ? h - 1 : 0,
                n = t ? -1 : 1,
                s = a[o + N];
                for (N += n, M = s & (1 << -i) - 1, s >>= -i, i += w; i > 0; M = 256 * M + a[o + N], N += n, i -= 8);
                for (p = M & (1 << -i) - 1, M >>= -i, i += r; i > 0; p = 256 * p + a[o + N], N += n, i -= 8);
                if (0 === M)
                    M = 1 - e;
                else {
                    if (M === f)
                        return p ? NaN : 1 / 0 * (s ? -1 : 1);
                    p += Math.pow(2, r),
                    M -= e
                }
                return (s ? -1 : 1) * p * Math.pow(2, M - r)
            },
            exports.write = function (a, o, t, r, h, M) {
                var p,
                w,
                f,
                e = 8 * M - h - 1,
                i = (1 << e) - 1,
                N = i >> 1,
                n = 23 === h ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                s = r ? 0 : M - 1,
                u = r ? 1 : -1,
                l = o < 0 || 0 === o && 1 / o < 0 ? 1 : 0;
                for (o = Math.abs(o), isNaN(o) || o === 1 / 0 ? (w = isNaN(o) ? 1 : 0, p = i) : (p = Math.floor(Math.log(o) / Math.LN2), o * (f = Math.pow(2, -p)) < 1 && (p--, f *= 2), (o += p + N >= 1 ? n / f : n * Math.pow(2, 1 - N)) * f >= 2 && (p++, f /= 2), p + N >= i ? (w = 0, p = i) : p + N >= 1 ? (w = (o * f - 1) * Math.pow(2, h), p += N) : (w = o * Math.pow(2, N - 1) * Math.pow(2, h), p = 0)); h >= 8; a[t + s] = 255 & w, s += u, w /= 256, h -= 8);
                for (p = p << h | w, e += h; e > 0; a[t + s] = 255 & p, s += u, p /= 256, e -= 8);
                a[t + s - u] |= 128 * l
            };
        }, {}
    ],
    "REa7": [function (require, module, exports) {
            var r = {}
            .toString;
            module.exports = Array.isArray || function (t) {
                return "[object Array]" == r.call(t)
            };
        }, {}
    ],
    "peL6": [function (require, module, exports) {

            var global = arguments[3];
            var t = arguments[3],
            r = require("base64-js"),
            e = require("ieee754"),
            n = require("isarray");
            function i() {
                try {
                    var t = new Uint8Array(1);
                    return t.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function () {
                            return 42
                        }
                    },
                    42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
                } catch (r) {
                    return !1
                }
            }
            function o() {
                return f.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
            }
            function u(t, r) {
                if (o() < r)
                    throw new RangeError("Invalid typed array length");
                return f.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(r)).__proto__ = f.prototype : (null === t && (t = new f(r)), t.length = r),
                t
            }
            function f(t, r, e) {
                if (!(f.TYPED_ARRAY_SUPPORT || this instanceof f))
                    return new f(t, r, e);
                if ("number" == typeof t) {
                    if ("string" == typeof r)
                        throw new Error("If encoding is specified then the first argument must be a string");
                    return c(this, t)
                }
                return s(this, t, r, e)
            }
            function s(t, r, e, n) {
                if ("number" == typeof r)
                    throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer && r instanceof ArrayBuffer ? g(t, r, e, n) : "string" == typeof r ? l(t, r, e) : y(t, r)
            }
            function h(t) {
                if ("number" != typeof t)
                    throw new TypeError('"size" argument must be a number');
                if (t < 0)
                    throw new RangeError('"size" argument must not be negative')
            }
            function a(t, r, e, n) {
                return h(r),
                r <= 0 ? u(t, r) : void 0 !== e ? "string" == typeof n ? u(t, r).fill(e, n) : u(t, r).fill(e) : u(t, r)
            }
            function c(t, r) {
                if (h(r), t = u(t, r < 0 ? 0 : 0 | w(r)), !f.TYPED_ARRAY_SUPPORT)
                    for (var e = 0; e < r; ++e)
                        t[e] = 0;
                return t
            }
            function l(t, r, e) {
                if ("string" == typeof e && "" !== e || (e = "utf8"), !f.isEncoding(e))
                    throw new TypeError('"encoding" must be a valid string encoding');
                var n = 0 | v(r, e),
                i = (t = u(t, n)).write(r, e);
                return i !== n && (t = t.slice(0, i)),
                t
            }
            function p(t, r) {
                var e = r.length < 0 ? 0 : 0 | w(r.length);
                t = u(t, e);
                for (var n = 0; n < e; n += 1)
                    t[n] = 255 & r[n];
                return t
            }
            function g(t, r, e, n) {
                if (r.byteLength, e < 0 || r.byteLength < e)
                    throw new RangeError("'offset' is out of bounds");
                if (r.byteLength < e + (n || 0))
                    throw new RangeError("'length' is out of bounds");
                return r = void 0 === e && void 0 === n ? new Uint8Array(r) : void 0 === n ? new Uint8Array(r, e) : new Uint8Array(r, e, n),
                f.TYPED_ARRAY_SUPPORT ? (t = r).__proto__ = f.prototype : t = p(t, r),
                t
            }
            function y(t, r) {
                if (f.isBuffer(r)) {
                    var e = 0 | w(r.length);
                    return 0 === (t = u(t, e)).length ? t : (r.copy(t, 0, 0, e), t)
                }
                if (r) {
                    if ("undefined" != typeof ArrayBuffer && r.buffer instanceof ArrayBuffer || "length" in r)
                        return "number" != typeof r.length || W(r.length) ? u(t, 0) : p(t, r);
                    if ("Buffer" === r.type && n(r.data))
                        return p(t, r.data)
                }
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
            }
            function w(t) {
                if (t >= o())
                    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o().toString(16) + " bytes");
                return 0 | t
            }
            function d(t) {
                return +t != t && (t = 0),
                f.alloc(+t)
            }
            function v(t, r) {
                if (f.isBuffer(t))
                    return t.length;
                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer))
                    return t.byteLength;
                "string" != typeof t && (t = "" + t);
                var e = t.length;
                if (0 === e)
                    return 0;
                for (var n = !1; ; )
                    switch (r) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return e;
                    case "utf8":
                    case "utf-8":
                    case void 0:
                        return $(t).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * e;
                    case "hex":
                        return e >>> 1;
                    case "base64":
                        return K(t).length;
                    default:
                        if (n)
                            return $(t).length;
                        r = ("" + r).toLowerCase(),
                        n = !0
                    }
            }
            function E(t, r, e) {
                var n = !1;
                if ((void 0 === r || r < 0) && (r = 0), r > this.length)
                    return "";
                if ((void 0 === e || e > this.length) && (e = this.length), e <= 0)
                    return "";
                if ((e >>>= 0) <= (r >>>= 0))
                    return "";
                for (t || (t = "utf8"); ; )
                    switch (t) {
                    case "hex":
                        return x(this, r, e);
                    case "utf8":
                    case "utf-8":
                        return Y(this, r, e);
                    case "ascii":
                        return L(this, r, e);
                    case "latin1":
                    case "binary":
                        return D(this, r, e);
                    case "base64":
                        return S(this, r, e);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return C(this, r, e);
                    default:
                        if (n)
                            throw new TypeError("Unknown encoding: " + t);
                        t = (t + "").toLowerCase(),
                        n = !0
                    }
            }
            function b(t, r, e) {
                var n = t[r];
                t[r] = t[e],
                t[e] = n
            }
            function R(t, r, e, n, i) {
                if (0 === t.length)
                    return -1;
                if ("string" == typeof e ? (n = e, e = 0) : e > 2147483647 ? e = 2147483647 : e < -2147483648 && (e = -2147483648), e = +e, isNaN(e) && (e = i ? 0 : t.length - 1), e < 0 && (e = t.length + e), e >= t.length) {
                    if (i)
                        return -1;
                    e = t.length - 1
                } else if (e < 0) {
                    if (!i)
                        return -1;
                    e = 0
                }
                if ("string" == typeof r && (r = f.from(r, n)), f.isBuffer(r))
                    return 0 === r.length ? -1 : _(t, r, e, n, i);
                if ("number" == typeof r)
                    return r &= 255, f.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, r, e) : Uint8Array.prototype.lastIndexOf.call(t, r, e) : _(t, [r], e, n, i);
                throw new TypeError("val must be string, number or Buffer")
            }
            function _(t, r, e, n, i) {
                var o,
                u = 1,
                f = t.length,
                s = r.length;
                if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                    if (t.length < 2 || r.length < 2)
                        return -1;
                    u = 2,
                    f /= 2,
                    s /= 2,
                    e /= 2
                }
                function h(t, r) {
                    return 1 === u ? t[r] : t.readUInt16BE(r * u)
                }
                if (i) {
                    var a = -1;
                    for (o = e; o < f; o++)
                        if (h(t, o) === h(r, -1 === a ? 0 : o - a)) {
                            if (-1 === a && (a = o), o - a + 1 === s)
                                return a * u
                        } else  - 1 !== a && (o -= o - a), a = -1
                } else
                    for (e + s > f && (e = f - s), o = e; o >= 0; o--) {
                        for (var c = !0, l = 0; l < s; l++)
                            if (h(t, o + l) !== h(r, l)) {
                                c = !1;
                                break
                            }
                        if (c)
                            return o
                    }
                return -1
            }
            function A(t, r, e, n) {
                e = Number(e) || 0;
                var i = t.length - e;
                n ? (n = Number(n)) > i && (n = i) : n = i;
                var o = r.length;
                if (o % 2 != 0)
                    throw new TypeError("Invalid hex string");
                n > o / 2 && (n = o / 2);
                for (var u = 0; u < n; ++u) {
                    var f = parseInt(r.substr(2 * u, 2), 16);
                    if (isNaN(f))
                        return u;
                    t[e + u] = f
                }
                return u
            }
            function m(t, r, e, n) {
                return Q($(r, t.length - e), t, e, n)
            }
            function P(t, r, e, n) {
                return Q(G(r), t, e, n)
            }
            function T(t, r, e, n) {
                return P(t, r, e, n)
            }
            function B(t, r, e, n) {
                return Q(K(r), t, e, n)
            }
            function U(t, r, e, n) {
                return Q(H(r, t.length - e), t, e, n)
            }
            function S(t, e, n) {
                return 0 === e && n === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(e, n))
            }
            function Y(t, r, e) {
                e = Math.min(t.length, e);
                for (var n = [], i = r; i < e; ) {
                    var o,
                    u,
                    f,
                    s,
                    h = t[i],
                    a = null,
                    c = h > 239 ? 4 : h > 223 ? 3 : h > 191 ? 2 : 1;
                    if (i + c <= e)
                        switch (c) {
                        case 1:
                            h < 128 && (a = h);
                            break;
                        case 2:
                            128 == (192 & (o = t[i + 1])) && (s = (31 & h) << 6 | 63 & o) > 127 && (a = s);
                            break;
                        case 3:
                            o = t[i + 1],
                            u = t[i + 2],
                            128 == (192 & o) && 128 == (192 & u) && (s = (15 & h) << 12 | (63 & o) << 6 | 63 & u) > 2047 && (s < 55296 || s > 57343) && (a = s);
                            break;
                        case 4:
                            o = t[i + 1],
                            u = t[i + 2],
                            f = t[i + 3],
                            128 == (192 & o) && 128 == (192 & u) && 128 == (192 & f) && (s = (15 & h) << 18 | (63 & o) << 12 | (63 & u) << 6 | 63 & f) > 65535 && s < 1114112 && (a = s)
                        }
                    null === a ? (a = 65533, c = 1) : a > 65535 && (a -= 65536, n.push(a >>> 10 & 1023 | 55296), a = 56320 | 1023 & a),
                    n.push(a),
                    i += c
                }
                return O(n)
            }
            exports.Buffer = f,
            exports.SlowBuffer = d,
            exports.INSPECT_MAX_BYTES = 50,
            f.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : i(),
            exports.kMaxLength = o(),
            f.poolSize = 8192,
            f._augment = function (t) {
                return t.__proto__ = f.prototype,
                t
            },
            f.from = function (t, r, e) {
                return s(null, t, r, e)
            },
            f.TYPED_ARRAY_SUPPORT && (f.prototype.__proto__ = Uint8Array.prototype, f.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && f[Symbol.species] === f && Object.defineProperty(f, Symbol.species, {
                    value: null,
                    configurable: !0
                })),
            f.alloc = function (t, r, e) {
                return a(null, t, r, e)
            },
            f.allocUnsafe = function (t) {
                return c(null, t)
            },
            f.allocUnsafeSlow = function (t) {
                return c(null, t)
            },
            f.isBuffer = function (t) {
                return !(null == t || !t._isBuffer)
            },
            f.compare = function (t, r) {
                if (!f.isBuffer(t) || !f.isBuffer(r))
                    throw new TypeError("Arguments must be Buffers");
                if (t === r)
                    return 0;
                for (var e = t.length, n = r.length, i = 0, o = Math.min(e, n); i < o; ++i)
                    if (t[i] !== r[i]) {
                        e = t[i],
                        n = r[i];
                        break
                    }
                return e < n ? -1 : n < e ? 1 : 0
            },
            f.isEncoding = function (t) {
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
            },
            f.concat = function (t, r) {
                if (!n(t))
                    throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === t.length)
                    return f.alloc(0);
                var e;
                if (void 0 === r)
                    for (r = 0, e = 0; e < t.length; ++e)
                        r += t[e].length;
                var i = f.allocUnsafe(r),
                o = 0;
                for (e = 0; e < t.length; ++e) {
                    var u = t[e];
                    if (!f.isBuffer(u))
                        throw new TypeError('"list" argument must be an Array of Buffers');
                    u.copy(i, o),
                    o += u.length
                }
                return i
            },
            f.byteLength = v,
            f.prototype._isBuffer = !0,
            f.prototype.swap16 = function () {
                var t = this.length;
                if (t % 2 != 0)
                    throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var r = 0; r < t; r += 2)
                    b(this, r, r + 1);
                return this
            },
            f.prototype.swap32 = function () {
                var t = this.length;
                if (t % 4 != 0)
                    throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var r = 0; r < t; r += 4)
                    b(this, r, r + 3), b(this, r + 1, r + 2);
                return this
            },
            f.prototype.swap64 = function () {
                var t = this.length;
                if (t % 8 != 0)
                    throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var r = 0; r < t; r += 8)
                    b(this, r, r + 7), b(this, r + 1, r + 6), b(this, r + 2, r + 5), b(this, r + 3, r + 4);
                return this
            },
            f.prototype.toString = function () {
                var t = 0 | this.length;
                return 0 === t ? "" : 0 === arguments.length ? Y(this, 0, t) : E.apply(this, arguments)
            },
            f.prototype.equals = function (t) {
                if (!f.isBuffer(t))
                    throw new TypeError("Argument must be a Buffer");
                return this === t || 0 === f.compare(this, t)
            },
            f.prototype.inspect = function () {
                var t = "",
                r = exports.INSPECT_MAX_BYTES;
                return this.length > 0 && (t = this.toString("hex", 0, r).match(/.{2}/g).join(" "), this.length > r && (t += " ... ")),
                "<Buffer " + t + ">"
            },
            f.prototype.compare = function (t, r, e, n, i) {
                if (!f.isBuffer(t))
                    throw new TypeError("Argument must be a Buffer");
                if (void 0 === r && (r = 0), void 0 === e && (e = t ? t.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), r < 0 || e > t.length || n < 0 || i > this.length)
                    throw new RangeError("out of range index");
                if (n >= i && r >= e)
                    return 0;
                if (n >= i)
                    return -1;
                if (r >= e)
                    return 1;
                if (this === t)
                    return 0;
                for (var o = (i >>>= 0) - (n >>>= 0), u = (e >>>= 0) - (r >>>= 0), s = Math.min(o, u), h = this.slice(n, i), a = t.slice(r, e), c = 0; c < s; ++c)
                    if (h[c] !== a[c]) {
                        o = h[c],
                        u = a[c];
                        break
                    }
                return o < u ? -1 : u < o ? 1 : 0
            },
            f.prototype.includes = function (t, r, e) {
                return -1 !== this.indexOf(t, r, e)
            },
            f.prototype.indexOf = function (t, r, e) {
                return R(this, t, r, e, !0)
            },
            f.prototype.lastIndexOf = function (t, r, e) {
                return R(this, t, r, e, !1)
            },
            f.prototype.write = function (t, r, e, n) {
                if (void 0 === r)
                    n = "utf8", e = this.length, r = 0;
                else if (void 0 === e && "string" == typeof r)
                    n = r, e = this.length, r = 0;
                else {
                    if (!isFinite(r))
                        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    r |= 0,
                    isFinite(e) ? (e |= 0, void 0 === n && (n = "utf8")) : (n = e, e = void 0)
                }
                var i = this.length - r;
                if ((void 0 === e || e > i) && (e = i), t.length > 0 && (e < 0 || r < 0) || r > this.length)
                    throw new RangeError("Attempt to write outside buffer bounds");
                n || (n = "utf8");
                for (var o = !1; ; )
                    switch (n) {
                    case "hex":
                        return A(this, t, r, e);
                    case "utf8":
                    case "utf-8":
                        return m(this, t, r, e);
                    case "ascii":
                        return P(this, t, r, e);
                    case "latin1":
                    case "binary":
                        return T(this, t, r, e);
                    case "base64":
                        return B(this, t, r, e);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return U(this, t, r, e);
                    default:
                        if (o)
                            throw new TypeError("Unknown encoding: " + n);
                        n = ("" + n).toLowerCase(),
                        o = !0
                    }
            },
            f.prototype.toJSON = function () {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            };
            var I = 4096;
            function O(t) {
                var r = t.length;
                if (r <= I)
                    return String.fromCharCode.apply(String, t);
                for (var e = "", n = 0; n < r; )
                    e += String.fromCharCode.apply(String, t.slice(n, n += I));
                return e
            }
            function L(t, r, e) {
                var n = "";
                e = Math.min(t.length, e);
                for (var i = r; i < e; ++i)
                    n += String.fromCharCode(127 & t[i]);
                return n
            }
            function D(t, r, e) {
                var n = "";
                e = Math.min(t.length, e);
                for (var i = r; i < e; ++i)
                    n += String.fromCharCode(t[i]);
                return n
            }
            function x(t, r, e) {
                var n = t.length;
                (!r || r < 0) && (r = 0),
                (!e || e < 0 || e > n) && (e = n);
                for (var i = "", o = r; o < e; ++o)
                    i += Z(t[o]);
                return i
            }
            function C(t, r, e) {
                for (var n = t.slice(r, e), i = "", o = 0; o < n.length; o += 2)
                    i += String.fromCharCode(n[o] + 256 * n[o + 1]);
                return i
            }
            function M(t, r, e) {
                if (t % 1 != 0 || t < 0)
                    throw new RangeError("offset is not uint");
                if (t + r > e)
                    throw new RangeError("Trying to access beyond buffer length")
            }
            function k(t, r, e, n, i, o) {
                if (!f.isBuffer(t))
                    throw new TypeError('"buffer" argument must be a Buffer instance');
                if (r > i || r < o)
                    throw new RangeError('"value" argument is out of bounds');
                if (e + n > t.length)
                    throw new RangeError("Index out of range")
            }
            function N(t, r, e, n) {
                r < 0 && (r = 65535 + r + 1);
                for (var i = 0, o = Math.min(t.length - e, 2); i < o; ++i)
                    t[e + i] = (r & 255 << 8 * (n ? i : 1 - i)) >>> 8 * (n ? i : 1 - i)
            }
            function z(t, r, e, n) {
                r < 0 && (r = 4294967295 + r + 1);
                for (var i = 0, o = Math.min(t.length - e, 4); i < o; ++i)
                    t[e + i] = r >>> 8 * (n ? i : 3 - i) & 255
            }
            function F(t, r, e, n, i, o) {
                if (e + n > t.length)
                    throw new RangeError("Index out of range");
                if (e < 0)
                    throw new RangeError("Index out of range")
            }
            function j(t, r, n, i, o) {
                return o || F(t, r, n, 4, 3.4028234663852886e38, -3.4028234663852886e38),
                e.write(t, r, n, i, 23, 4),
                n + 4
            }
            function q(t, r, n, i, o) {
                return o || F(t, r, n, 8, 1.7976931348623157e308, -1.7976931348623157e308),
                e.write(t, r, n, i, 52, 8),
                n + 8
            }
            f.prototype.slice = function (t, r) {
                var e,
                n = this.length;
                if ((t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), (r = void 0 === r ? n : ~~r) < 0 ? (r += n) < 0 && (r = 0) : r > n && (r = n), r < t && (r = t), f.TYPED_ARRAY_SUPPORT)
                    (e = this.subarray(t, r)).__proto__ = f.prototype;
                else {
                    var i = r - t;
                    e = new f(i, void 0);
                    for (var o = 0; o < i; ++o)
                        e[o] = this[o + t]
                }
                return e
            },
            f.prototype.readUIntLE = function (t, r, e) {
                t |= 0,
                r |= 0,
                e || M(t, r, this.length);
                for (var n = this[t], i = 1, o = 0; ++o < r && (i *= 256); )
                    n += this[t + o] * i;
                return n
            },
            f.prototype.readUIntBE = function (t, r, e) {
                t |= 0,
                r |= 0,
                e || M(t, r, this.length);
                for (var n = this[t + --r], i = 1; r > 0 && (i *= 256); )
                    n += this[t + --r] * i;
                return n
            },
            f.prototype.readUInt8 = function (t, r) {
                return r || M(t, 1, this.length),
                this[t]
            },
            f.prototype.readUInt16LE = function (t, r) {
                return r || M(t, 2, this.length),
                this[t] | this[t + 1] << 8
            },
            f.prototype.readUInt16BE = function (t, r) {
                return r || M(t, 2, this.length),
                this[t] << 8 | this[t + 1]
            },
            f.prototype.readUInt32LE = function (t, r) {
                return r || M(t, 4, this.length),
                (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
            },
            f.prototype.readUInt32BE = function (t, r) {
                return r || M(t, 4, this.length),
                16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
            },
            f.prototype.readIntLE = function (t, r, e) {
                t |= 0,
                r |= 0,
                e || M(t, r, this.length);
                for (var n = this[t], i = 1, o = 0; ++o < r && (i *= 256); )
                    n += this[t + o] * i;
                return n >= (i *= 128) && (n -= Math.pow(2, 8 * r)),
                n
            },
            f.prototype.readIntBE = function (t, r, e) {
                t |= 0,
                r |= 0,
                e || M(t, r, this.length);
                for (var n = r, i = 1, o = this[t + --n]; n > 0 && (i *= 256); )
                    o += this[t + --n] * i;
                return o >= (i *= 128) && (o -= Math.pow(2, 8 * r)),
                o
            },
            f.prototype.readInt8 = function (t, r) {
                return r || M(t, 1, this.length),
                128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
            },
            f.prototype.readInt16LE = function (t, r) {
                r || M(t, 2, this.length);
                var e = this[t] | this[t + 1] << 8;
                return 32768 & e ? 4294901760 | e : e
            },
            f.prototype.readInt16BE = function (t, r) {
                r || M(t, 2, this.length);
                var e = this[t + 1] | this[t] << 8;
                return 32768 & e ? 4294901760 | e : e
            },
            f.prototype.readInt32LE = function (t, r) {
                return r || M(t, 4, this.length),
                this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
            },
            f.prototype.readInt32BE = function (t, r) {
                return r || M(t, 4, this.length),
                this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
            },
            f.prototype.readFloatLE = function (t, r) {
                return r || M(t, 4, this.length),
                e.read(this, t, !0, 23, 4)
            },
            f.prototype.readFloatBE = function (t, r) {
                return r || M(t, 4, this.length),
                e.read(this, t, !1, 23, 4)
            },
            f.prototype.readDoubleLE = function (t, r) {
                return r || M(t, 8, this.length),
                e.read(this, t, !0, 52, 8)
            },
            f.prototype.readDoubleBE = function (t, r) {
                return r || M(t, 8, this.length),
                e.read(this, t, !1, 52, 8)
            },
            f.prototype.writeUIntLE = function (t, r, e, n) {
                (t = +t, r |= 0, e |= 0, n) || k(this, t, r, e, Math.pow(2, 8 * e) - 1, 0);
                var i = 1,
                o = 0;
                for (this[r] = 255 & t; ++o < e && (i *= 256); )
                    this[r + o] = t / i & 255;
                return r + e
            },
            f.prototype.writeUIntBE = function (t, r, e, n) {
                (t = +t, r |= 0, e |= 0, n) || k(this, t, r, e, Math.pow(2, 8 * e) - 1, 0);
                var i = e - 1,
                o = 1;
                for (this[r + i] = 255 & t; --i >= 0 && (o *= 256); )
                    this[r + i] = t / o & 255;
                return r + e
            },
            f.prototype.writeUInt8 = function (t, r, e) {
                return t = +t,
                r |= 0,
                e || k(this, t, r, 1, 255, 0),
                f.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
                this[r] = 255 & t,
                r + 1
            },
            f.prototype.writeUInt16LE = function (t, r, e) {
                return t = +t,
                r |= 0,
                e || k(this, t, r, 2, 65535, 0),
                f.TYPED_ARRAY_SUPPORT ? (this[r] = 255 & t, this[r + 1] = t >>> 8) : N(this, t, r, !0),
                r + 2
            },
            f.prototype.writeUInt16BE = function (t, r, e) {
                return t = +t,
                r |= 0,
                e || k(this, t, r, 2, 65535, 0),
                f.TYPED_ARRAY_SUPPORT ? (this[r] = t >>> 8, this[r + 1] = 255 & t) : N(this, t, r, !1),
                r + 2
            },
            f.prototype.writeUInt32LE = function (t, r, e) {
                return t = +t,
                r |= 0,
                e || k(this, t, r, 4, 4294967295, 0),
                f.TYPED_ARRAY_SUPPORT ? (this[r + 3] = t >>> 24, this[r + 2] = t >>> 16, this[r + 1] = t >>> 8, this[r] = 255 & t) : z(this, t, r, !0),
                r + 4
            },
            f.prototype.writeUInt32BE = function (t, r, e) {
                return t = +t,
                r |= 0,
                e || k(this, t, r, 4, 4294967295, 0),
                f.TYPED_ARRAY_SUPPORT ? (this[r] = t >>> 24, this[r + 1] = t >>> 16, this[r + 2] = t >>> 8, this[r + 3] = 255 & t) : z(this, t, r, !1),
                r + 4
            },
            f.prototype.writeIntLE = function (t, r, e, n) {
                if (t = +t, r |= 0, !n) {
                    var i = Math.pow(2, 8 * e - 1);
                    k(this, t, r, e, i - 1, -i)
                }
                var o = 0,
                u = 1,
                f = 0;
                for (this[r] = 255 & t; ++o < e && (u *= 256); )
                    t < 0 && 0 === f && 0 !== this[r + o - 1] && (f = 1), this[r + o] = (t / u >> 0) - f & 255;
                return r + e
            },
            f.prototype.writeIntBE = function (t, r, e, n) {
                if (t = +t, r |= 0, !n) {
                    var i = Math.pow(2, 8 * e - 1);
                    k(this, t, r, e, i - 1, -i)
                }
                var o = e - 1,
                u = 1,
                f = 0;
                for (this[r + o] = 255 & t; --o >= 0 && (u *= 256); )
                    t < 0 && 0 === f && 0 !== this[r + o + 1] && (f = 1), this[r + o] = (t / u >> 0) - f & 255;
                return r + e
            },
            f.prototype.writeInt8 = function (t, r, e) {
                return t = +t,
                r |= 0,
                e || k(this, t, r, 1, 127, -128),
                f.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
                t < 0 && (t = 255 + t + 1),
                this[r] = 255 & t,
                r + 1
            },
            f.prototype.writeInt16LE = function (t, r, e) {
                return t = +t,
                r |= 0,
                e || k(this, t, r, 2, 32767, -32768),
                f.TYPED_ARRAY_SUPPORT ? (this[r] = 255 & t, this[r + 1] = t >>> 8) : N(this, t, r, !0),
                r + 2
            },
            f.prototype.writeInt16BE = function (t, r, e) {
                return t = +t,
                r |= 0,
                e || k(this, t, r, 2, 32767, -32768),
                f.TYPED_ARRAY_SUPPORT ? (this[r] = t >>> 8, this[r + 1] = 255 & t) : N(this, t, r, !1),
                r + 2
            },
            f.prototype.writeInt32LE = function (t, r, e) {
                return t = +t,
                r |= 0,
                e || k(this, t, r, 4, 2147483647, -2147483648),
                f.TYPED_ARRAY_SUPPORT ? (this[r] = 255 & t, this[r + 1] = t >>> 8, this[r + 2] = t >>> 16, this[r + 3] = t >>> 24) : z(this, t, r, !0),
                r + 4
            },
            f.prototype.writeInt32BE = function (t, r, e) {
                return t = +t,
                r |= 0,
                e || k(this, t, r, 4, 2147483647, -2147483648),
                t < 0 && (t = 4294967295 + t + 1),
                f.TYPED_ARRAY_SUPPORT ? (this[r] = t >>> 24, this[r + 1] = t >>> 16, this[r + 2] = t >>> 8, this[r + 3] = 255 & t) : z(this, t, r, !1),
                r + 4
            },
            f.prototype.writeFloatLE = function (t, r, e) {
                return j(this, t, r, !0, e)
            },
            f.prototype.writeFloatBE = function (t, r, e) {
                return j(this, t, r, !1, e)
            },
            f.prototype.writeDoubleLE = function (t, r, e) {
                return q(this, t, r, !0, e)
            },
            f.prototype.writeDoubleBE = function (t, r, e) {
                return q(this, t, r, !1, e)
            },
            f.prototype.copy = function (t, r, e, n) {
                if (e || (e = 0), n || 0 === n || (n = this.length), r >= t.length && (r = t.length), r || (r = 0), n > 0 && n < e && (n = e), n === e)
                    return 0;
                if (0 === t.length || 0 === this.length)
                    return 0;
                if (r < 0)
                    throw new RangeError("targetStart out of bounds");
                if (e < 0 || e >= this.length)
                    throw new RangeError("sourceStart out of bounds");
                if (n < 0)
                    throw new RangeError("sourceEnd out of bounds");
                n > this.length && (n = this.length),
                t.length - r < n - e && (n = t.length - r + e);
                var i,
                o = n - e;
                if (this === t && e < r && r < n)
                    for (i = o - 1; i >= 0; --i)
                        t[i + r] = this[i + e];
                else if (o < 1e3 || !f.TYPED_ARRAY_SUPPORT)
                    for (i = 0; i < o; ++i)
                        t[i + r] = this[i + e];
                else
                    Uint8Array.prototype.set.call(t, this.subarray(e, e + o), r);
                return o
            },
            f.prototype.fill = function (t, r, e, n) {
                if ("string" == typeof t) {
                    if ("string" == typeof r ? (n = r, r = 0, e = this.length) : "string" == typeof e && (n = e, e = this.length), 1 === t.length) {
                        var i = t.charCodeAt(0);
                        i < 256 && (t = i)
                    }
                    if (void 0 !== n && "string" != typeof n)
                        throw new TypeError("encoding must be a string");
                    if ("string" == typeof n && !f.isEncoding(n))
                        throw new TypeError("Unknown encoding: " + n)
                } else
                    "number" == typeof t && (t &= 255);
                if (r < 0 || this.length < r || this.length < e)
                    throw new RangeError("Out of range index");
                if (e <= r)
                    return this;
                var o;
                if (r >>>= 0, e = void 0 === e ? this.length : e >>> 0, t || (t = 0), "number" == typeof t)
                    for (o = r; o < e; ++o)
                        this[o] = t;
                else {
                    var u = f.isBuffer(t) ? t : $(new f(t, n).toString()),
                    s = u.length;
                    for (o = 0; o < e - r; ++o)
                        this[o + r] = u[o % s]
                }
                return this
            };
            var V = /[^+\/0-9A-Za-z-_]/g;
            function X(t) {
                if ((t = J(t).replace(V, "")).length < 2)
                    return "";
                for (; t.length % 4 != 0; )
                    t += "=";
                return t
            }
            function J(t) {
                return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
            }
            function Z(t) {
                return t < 16 ? "0" + t.toString(16) : t.toString(16)
            }
            function $(t, r) {
                var e;
                r = r || 1 / 0;
                for (var n = t.length, i = null, o = [], u = 0; u < n; ++u) {
                    if ((e = t.charCodeAt(u)) > 55295 && e < 57344) {
                        if (!i) {
                            if (e > 56319) {
                                (r -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            if (u + 1 === n) {
                                (r -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            i = e;
                            continue
                        }
                        if (e < 56320) {
                            (r -= 3) > -1 && o.push(239, 191, 189),
                            i = e;
                            continue
                        }
                        e = 65536 + (i - 55296 << 10 | e - 56320)
                    } else
                        i && (r -= 3) > -1 && o.push(239, 191, 189);
                    if (i = null, e < 128) {
                        if ((r -= 1) < 0)
                            break;
                        o.push(e)
                    } else if (e < 2048) {
                        if ((r -= 2) < 0)
                            break;
                        o.push(e >> 6 | 192, 63 & e | 128)
                    } else if (e < 65536) {
                        if ((r -= 3) < 0)
                            break;
                        o.push(e >> 12 | 224, e >> 6 & 63 | 128, 63 & e | 128)
                    } else {
                        if (!(e < 1114112))
                            throw new Error("Invalid code point");
                        if ((r -= 4) < 0)
                            break;
                        o.push(e >> 18 | 240, e >> 12 & 63 | 128, e >> 6 & 63 | 128, 63 & e | 128)
                    }
                }
                return o
            }
            function G(t) {
                for (var r = [], e = 0; e < t.length; ++e)
                    r.push(255 & t.charCodeAt(e));
                return r
            }
            function H(t, r) {
                for (var e, n, i, o = [], u = 0; u < t.length && !((r -= 2) < 0); ++u)
                    n = (e = t.charCodeAt(u)) >> 8, i = e % 256, o.push(i), o.push(n);
                return o
            }
            function K(t) {
                return r.toByteArray(X(t))
            }
            function Q(t, r, e, n) {
                for (var i = 0; i < n && !(i + e >= r.length || i >= t.length); ++i)
                    r[i + e] = t[i];
                return i
            }
            function W(t) {
                return t != t
            }
        }, {
            "base64-js": "yh9p",
            "ieee754": "JgNJ",
            "isarray": "REa7",
            "buffer": "peL6"
        }
    ],
    "qafd": [function (require, module, exports) {

            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }),
            exports.default = void 0;
            var e = require("buffer");
            const f = e.Buffer.from && e.Buffer.alloc && e.Buffer.allocUnsafe && e.Buffer.allocUnsafeSlow ? e.Buffer.from : f => new e.Buffer(f);
            var r = f;
            exports.default = r;
        }, {
            "buffer": "peL6"
        }
    ],
    "/fai": [function (require, module, exports) {
            "use strict";
            function e(e, t) {
                const n = (e, n) => t(e, n) >>> 0;
                return n.signed = t,
                n.unsigned = n,
                n.model = e,
                n
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }),
            exports.default = e;
        }, {}
    ],
    "KTLd": [function (require, module, exports) {

            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }),
            exports.default = void 0;
            var e = require("buffer"),
            r = u(require("./create_buffer")),
            t = u(require("./define_crc"));
            function u(e) {
                return e && e.__esModule ? e : {
                default:
                    e
                }
            }
            const f = (0, t.default)("crc1", function (t, u) {
                e.Buffer.isBuffer(t) || (t = (0, r.default)(t));
                let f = ~~u,
                l = 0;
                for (let e = 0; e < t.length; e++) {
                    l += t[e]
                }
                return (f += l % 256) % 256
            });
            var l = f;
            exports.default = l;
        }, {
            "buffer": "peL6",
            "./create_buffer": "qafd",
            "./define_crc": "/fai"
        }
    ],
    "VBUn": [function (require, module, exports) {

            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }),
            exports.default = void 0;
            var e = require("buffer"),
            r = u(require("./create_buffer")),
            t = u(require("./define_crc"));
            function u(e) {
                return e && e.__esModule ? e : {
                default:
                    e
                }
            }
            let f = [0, 7, 14, 9, 28, 27, 18, 21, 56, 63, 54, 49, 36, 35, 42, 45, 112, 119, 126, 121, 108, 107, 98, 101, 72, 79, 70, 65, 84, 83, 90, 93, 224, 231, 238, 233, 252, 251, 242, 245, 216, 223, 214, 209, 196, 195, 202, 205, 144, 151, 158, 153, 140, 139, 130, 133, 168, 175, 166, 161, 180, 179, 186, 189, 199, 192, 201, 206, 219, 220, 213, 210, 255, 248, 241, 246, 227, 228, 237, 234, 183, 176, 185, 190, 171, 172, 165, 162, 143, 136, 129, 134, 147, 148, 157, 154, 39, 32, 41, 46, 59, 60, 53, 50, 31, 24, 17, 22, 3, 4, 13, 10, 87, 80, 89, 94, 75, 76, 69, 66, 111, 104, 97, 102, 115, 116, 125, 122, 137, 142, 135, 128, 149, 146, 155, 156, 177, 182, 191, 184, 173, 170, 163, 164, 249, 254, 247, 240, 229, 226, 235, 236, 193, 198, 207, 200, 221, 218, 211, 212, 105, 110, 103, 96, 117, 114, 123, 124, 81, 86, 95, 88, 77, 74, 67, 68, 25, 30, 23, 16, 5, 2, 11, 12, 33, 38, 47, 40, 61, 58, 51, 52, 78, 73, 64, 71, 82, 85, 92, 91, 118, 113, 120, 127, 106, 109, 100, 99, 62, 57, 48, 55, 34, 37, 44, 43, 6, 1, 8, 15, 26, 29, 20, 19, 174, 169, 160, 167, 178, 181, 188, 187, 150, 145, 152, 159, 138, 141, 132, 131, 222, 217, 208, 215, 194, 197, 204, 203, 230, 225, 232, 239, 250, 253, 244, 243];
            "undefined" != typeof Int32Array && (f = new Int32Array(f));
            const n = (0, t.default)("crc-8", function (t, u) {
                e.Buffer.isBuffer(t) || (t = (0, r.default)(t));
                let n = ~~u;
                for (let e = 0; e < t.length; e++) {
                    const r = t[e];
                    n = 255 & f[255 & (n ^ r)]
                }
                return n
            });
            var o = n;
            exports.default = o;
        }, {
            "buffer": "peL6",
            "./create_buffer": "qafd",
            "./define_crc": "/fai"
        }
    ],
    "KrSP": [function (require, module, exports) {

            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }),
            exports.default = void 0;
            var e = require("buffer"),
            r = u(require("./create_buffer")),
            t = u(require("./define_crc"));
            function u(e) {
                return e && e.__esModule ? e : {
                default:
                    e
                }
            }
            let f = [0, 94, 188, 226, 97, 63, 221, 131, 194, 156, 126, 32, 163, 253, 31, 65, 157, 195, 33, 127, 252, 162, 64, 30, 95, 1, 227, 189, 62, 96, 130, 220, 35, 125, 159, 193, 66, 28, 254, 160, 225, 191, 93, 3, 128, 222, 60, 98, 190, 224, 2, 92, 223, 129, 99, 61, 124, 34, 192, 158, 29, 67, 161, 255, 70, 24, 250, 164, 39, 121, 155, 197, 132, 218, 56, 102, 229, 187, 89, 7, 219, 133, 103, 57, 186, 228, 6, 88, 25, 71, 165, 251, 120, 38, 196, 154, 101, 59, 217, 135, 4, 90, 184, 230, 167, 249, 27, 69, 198, 152, 122, 36, 248, 166, 68, 26, 153, 199, 37, 123, 58, 100, 134, 216, 91, 5, 231, 185, 140, 210, 48, 110, 237, 179, 81, 15, 78, 16, 242, 172, 47, 113, 147, 205, 17, 79, 173, 243, 112, 46, 204, 146, 211, 141, 111, 49, 178, 236, 14, 80, 175, 241, 19, 77, 206, 144, 114, 44, 109, 51, 209, 143, 12, 82, 176, 238, 50, 108, 142, 208, 83, 13, 239, 177, 240, 174, 76, 18, 145, 207, 45, 115, 202, 148, 118, 40, 171, 245, 23, 73, 8, 86, 180, 234, 105, 55, 213, 139, 87, 9, 235, 181, 54, 104, 138, 212, 149, 203, 41, 119, 244, 170, 72, 22, 233, 183, 85, 11, 136, 214, 52, 106, 43, 117, 151, 201, 74, 20, 246, 168, 116, 42, 200, 150, 21, 75, 169, 247, 182, 232, 10, 84, 215, 137, 107, 53];
            "undefined" != typeof Int32Array && (f = new Int32Array(f));
            const n = (0, t.default)("dallas-1-wire", function (t, u) {
                e.Buffer.isBuffer(t) || (t = (0, r.default)(t));
                let n = ~~u;
                for (let e = 0; e < t.length; e++) {
                    const r = t[e];
                    n = 255 & f[255 & (n ^ r)]
                }
                return n
            });
            var l = n;
            exports.default = l;
        }, {
            "buffer": "peL6",
            "./create_buffer": "qafd",
            "./define_crc": "/fai"
        }
    ],
    "YPen": [function (require, module, exports) {

            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }),
            exports.default = void 0;
            var e = require("buffer"),
            r = u(require("./create_buffer")),
            t = u(require("./define_crc"));
            function u(e) {
                return e && e.__esModule ? e : {
                default:
                    e
                }
            }
            let f = [0, 49345, 49537, 320, 49921, 960, 640, 49729, 50689, 1728, 1920, 51009, 1280, 50625, 50305, 1088, 52225, 3264, 3456, 52545, 3840, 53185, 52865, 3648, 2560, 51905, 52097, 2880, 51457, 2496, 2176, 51265, 55297, 6336, 6528, 55617, 6912, 56257, 55937, 6720, 7680, 57025, 57217, 8e3, 56577, 7616, 7296, 56385, 5120, 54465, 54657, 5440, 55041, 6080, 5760, 54849, 53761, 4800, 4992, 54081, 4352, 53697, 53377, 4160, 61441, 12480, 12672, 61761, 13056, 62401, 62081, 12864, 13824, 63169, 63361, 14144, 62721, 13760, 13440, 62529, 15360, 64705, 64897, 15680, 65281, 16320, 16e3, 65089, 64001, 15040, 15232, 64321, 14592, 63937, 63617, 14400, 10240, 59585, 59777, 10560, 60161, 11200, 10880, 59969, 60929, 11968, 12160, 61249, 11520, 60865, 60545, 11328, 58369, 9408, 9600, 58689, 9984, 59329, 59009, 9792, 8704, 58049, 58241, 9024, 57601, 8640, 8320, 57409, 40961, 24768, 24960, 41281, 25344, 41921, 41601, 25152, 26112, 42689, 42881, 26432, 42241, 26048, 25728, 42049, 27648, 44225, 44417, 27968, 44801, 28608, 28288, 44609, 43521, 27328, 27520, 43841, 26880, 43457, 43137, 26688, 30720, 47297, 47489, 31040, 47873, 31680, 31360, 47681, 48641, 32448, 32640, 48961, 32e3, 48577, 48257, 31808, 46081, 29888, 30080, 46401, 30464, 47041, 46721, 30272, 29184, 45761, 45953, 29504, 45313, 29120, 28800, 45121, 20480, 37057, 37249, 20800, 37633, 21440, 21120, 37441, 38401, 22208, 22400, 38721, 21760, 38337, 38017, 21568, 39937, 23744, 23936, 40257, 24320, 40897, 40577, 24128, 23040, 39617, 39809, 23360, 39169, 22976, 22656, 38977, 34817, 18624, 18816, 35137, 19200, 35777, 35457, 19008, 19968, 36545, 36737, 20288, 36097, 19904, 19584, 35905, 17408, 33985, 34177, 17728, 34561, 18368, 18048, 34369, 33281, 17088, 17280, 33601, 16640, 33217, 32897, 16448];
            "undefined" != typeof Int32Array && (f = new Int32Array(f));
            const n = (0, t.default)("crc-16", function (t, u) {
                e.Buffer.isBuffer(t) || (t = (0, r.default)(t));
                let n = ~~u;
                for (let e = 0; e < t.length; e++) {
                    const r = t[e];
                    n = 65535 & (f[255 & (n ^ r)] ^ n >> 8)
                }
                return n
            });
            var o = n;
            exports.default = o;
        }, {
            "buffer": "peL6",
            "./create_buffer": "qafd",
            "./define_crc": "/fai"
        }
    ],
    "DD1y": [function (require, module, exports) {

            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }),
            exports.default = void 0;
            var e = require("buffer"),
            r = u(require("./create_buffer")),
            t = u(require("./define_crc"));
            function u(e) {
                return e && e.__esModule ? e : {
                default:
                    e
                }
            }
            let f = [0, 4129, 8258, 12387, 16516, 20645, 24774, 28903, 33032, 37161, 41290, 45419, 49548, 53677, 57806, 61935, 4657, 528, 12915, 8786, 21173, 17044, 29431, 25302, 37689, 33560, 45947, 41818, 54205, 50076, 62463, 58334, 9314, 13379, 1056, 5121, 25830, 29895, 17572, 21637, 42346, 46411, 34088, 38153, 58862, 62927, 50604, 54669, 13907, 9842, 5649, 1584, 30423, 26358, 22165, 18100, 46939, 42874, 38681, 34616, 63455, 59390, 55197, 51132, 18628, 22757, 26758, 30887, 2112, 6241, 10242, 14371, 51660, 55789, 59790, 63919, 35144, 39273, 43274, 47403, 23285, 19156, 31415, 27286, 6769, 2640, 14899, 10770, 56317, 52188, 64447, 60318, 39801, 35672, 47931, 43802, 27814, 31879, 19684, 23749, 11298, 15363, 3168, 7233, 60846, 64911, 52716, 56781, 44330, 48395, 36200, 40265, 32407, 28342, 24277, 20212, 15891, 11826, 7761, 3696, 65439, 61374, 57309, 53244, 48923, 44858, 40793, 36728, 37256, 33193, 45514, 41451, 53516, 49453, 61774, 57711, 4224, 161, 12482, 8419, 20484, 16421, 28742, 24679, 33721, 37784, 41979, 46042, 49981, 54044, 58239, 62302, 689, 4752, 8947, 13010, 16949, 21012, 25207, 29270, 46570, 42443, 38312, 34185, 62830, 58703, 54572, 50445, 13538, 9411, 5280, 1153, 29798, 25671, 21540, 17413, 42971, 47098, 34713, 38840, 59231, 63358, 50973, 55100, 9939, 14066, 1681, 5808, 26199, 30326, 17941, 22068, 55628, 51565, 63758, 59695, 39368, 35305, 47498, 43435, 22596, 18533, 30726, 26663, 6336, 2273, 14466, 10403, 52093, 56156, 60223, 64286, 35833, 39896, 43963, 48026, 19061, 23124, 27191, 31254, 2801, 6864, 10931, 14994, 64814, 60687, 56684, 52557, 48554, 44427, 40424, 36297, 31782, 27655, 23652, 19525, 15522, 11395, 7392, 3265, 61215, 65342, 53085, 57212, 44955, 49082, 36825, 40952, 28183, 32310, 20053, 24180, 11923, 16050, 3793, 7920];
            "undefined" != typeof Int32Array && (f = new Int32Array(f));
            const n = (0, t.default)("ccitt", function (t, u) {
                e.Buffer.isBuffer(t) || (t = (0, r.default)(t));
                let n = void 0 !== u ? ~~u : 65535;
                for (let e = 0; e < t.length; e++) {
                    const r = t[e];
                    n = 65535 & (f[255 & (n >> 8 ^ r)] ^ n << 8)
                }
                return n
            });
            var o = n;
            exports.default = o;
        }, {
            "buffer": "peL6",
            "./create_buffer": "qafd",
            "./define_crc": "/fai"
        }
    ],
    "WLsJ": [function (require, module, exports) {

            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }),
            exports.default = void 0;
            var e = require("buffer"),
            r = u(require("./create_buffer")),
            t = u(require("./define_crc"));
            function u(e) {
                return e && e.__esModule ? e : {
                default:
                    e
                }
            }
            let f = [0, 49345, 49537, 320, 49921, 960, 640, 49729, 50689, 1728, 1920, 51009, 1280, 50625, 50305, 1088, 52225, 3264, 3456, 52545, 3840, 53185, 52865, 3648, 2560, 51905, 52097, 2880, 51457, 2496, 2176, 51265, 55297, 6336, 6528, 55617, 6912, 56257, 55937, 6720, 7680, 57025, 57217, 8e3, 56577, 7616, 7296, 56385, 5120, 54465, 54657, 5440, 55041, 6080, 5760, 54849, 53761, 4800, 4992, 54081, 4352, 53697, 53377, 4160, 61441, 12480, 12672, 61761, 13056, 62401, 62081, 12864, 13824, 63169, 63361, 14144, 62721, 13760, 13440, 62529, 15360, 64705, 64897, 15680, 65281, 16320, 16e3, 65089, 64001, 15040, 15232, 64321, 14592, 63937, 63617, 14400, 10240, 59585, 59777, 10560, 60161, 11200, 10880, 59969, 60929, 11968, 12160, 61249, 11520, 60865, 60545, 11328, 58369, 9408, 9600, 58689, 9984, 59329, 59009, 9792, 8704, 58049, 58241, 9024, 57601, 8640, 8320, 57409, 40961, 24768, 24960, 41281, 25344, 41921, 41601, 25152, 26112, 42689, 42881, 26432, 42241, 26048, 25728, 42049, 27648, 44225, 44417, 27968, 44801, 28608, 28288, 44609, 43521, 27328, 27520, 43841, 26880, 43457, 43137, 26688, 30720, 47297, 47489, 31040, 47873, 31680, 31360, 47681, 48641, 32448, 32640, 48961, 32e3, 48577, 48257, 31808, 46081, 29888, 30080, 46401, 30464, 47041, 46721, 30272, 29184, 45761, 45953, 29504, 45313, 29120, 28800, 45121, 20480, 37057, 37249, 20800, 37633, 21440, 21120, 37441, 38401, 22208, 22400, 38721, 21760, 38337, 38017, 21568, 39937, 23744, 23936, 40257, 24320, 40897, 40577, 24128, 23040, 39617, 39809, 23360, 39169, 22976, 22656, 38977, 34817, 18624, 18816, 35137, 19200, 35777, 35457, 19008, 19968, 36545, 36737, 20288, 36097, 19904, 19584, 35905, 17408, 33985, 34177, 17728, 34561, 18368, 18048, 34369, 33281, 17088, 17280, 33601, 16640, 33217, 32897, 16448];
            "undefined" != typeof Int32Array && (f = new Int32Array(f));
            const n = (0, t.default)("crc-16-modbus", function (t, u) {
                e.Buffer.isBuffer(t) || (t = (0, r.default)(t));
                let n = void 0 !== u ? ~~u : 65535;
                for (let e = 0; e < t.length; e++) {
                    const r = t[e];
                    n = 65535 & (f[255 & (n ^ r)] ^ n >> 8)
                }
                return n
            });
            var o = n;
            exports.default = o;
        }, {
            "buffer": "peL6",
            "./create_buffer": "qafd",
            "./define_crc": "/fai"
        }
    ],
    "Nth9": [function (require, module, exports) {

            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }),
            exports.default = void 0;
            var e = require("buffer"),
            r = u(require("./create_buffer")),
            t = u(require("./define_crc"));
            function u(e) {
                return e && e.__esModule ? e : {
                default:
                    e
                }
            }
            const f = (0, t.default)("xmodem", function (t, u) {
                e.Buffer.isBuffer(t) || (t = (0, r.default)(t));
                let f = void 0 !== u ? ~~u : 0;
                for (let e = 0; e < t.length; e++) {
                    let r = f >>> 8 & 255;
                    r ^= 255 & t[e],
                    f = f << 8 & 65535,
                    f ^= r ^= r >>> 4,
                    f ^= r = r << 5 & 65535,
                    f ^= r = r << 7 & 65535
                }
                return f
            });
            var o = f;
            exports.default = o;
        }, {
            "buffer": "peL6",
            "./create_buffer": "qafd",
            "./define_crc": "/fai"
        }
    ],
    "lHwp": [function (require, module, exports) {

            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }),
            exports.default = void 0;
            var e = require("buffer"),
            r = u(require("./create_buffer")),
            t = u(require("./define_crc"));
            function u(e) {
                return e && e.__esModule ? e : {
                default:
                    e
                }
            }
            let f = [0, 4489, 8978, 12955, 17956, 22445, 25910, 29887, 35912, 40385, 44890, 48851, 51820, 56293, 59774, 63735, 4225, 264, 13203, 8730, 22181, 18220, 30135, 25662, 40137, 36160, 49115, 44626, 56045, 52068, 63999, 59510, 8450, 12427, 528, 5017, 26406, 30383, 17460, 21949, 44362, 48323, 36440, 40913, 60270, 64231, 51324, 55797, 12675, 8202, 4753, 792, 30631, 26158, 21685, 17724, 48587, 44098, 40665, 36688, 64495, 60006, 55549, 51572, 16900, 21389, 24854, 28831, 1056, 5545, 10034, 14011, 52812, 57285, 60766, 64727, 34920, 39393, 43898, 47859, 21125, 17164, 29079, 24606, 5281, 1320, 14259, 9786, 57037, 53060, 64991, 60502, 39145, 35168, 48123, 43634, 25350, 29327, 16404, 20893, 9506, 13483, 1584, 6073, 61262, 65223, 52316, 56789, 43370, 47331, 35448, 39921, 29575, 25102, 20629, 16668, 13731, 9258, 5809, 1848, 65487, 60998, 56541, 52564, 47595, 43106, 39673, 35696, 33800, 38273, 42778, 46739, 49708, 54181, 57662, 61623, 2112, 6601, 11090, 15067, 20068, 24557, 28022, 31999, 38025, 34048, 47003, 42514, 53933, 49956, 61887, 57398, 6337, 2376, 15315, 10842, 24293, 20332, 32247, 27774, 42250, 46211, 34328, 38801, 58158, 62119, 49212, 53685, 10562, 14539, 2640, 7129, 28518, 32495, 19572, 24061, 46475, 41986, 38553, 34576, 62383, 57894, 53437, 49460, 14787, 10314, 6865, 2904, 32743, 28270, 23797, 19836, 50700, 55173, 58654, 62615, 32808, 37281, 41786, 45747, 19012, 23501, 26966, 30943, 3168, 7657, 12146, 16123, 54925, 50948, 62879, 58390, 37033, 33056, 46011, 41522, 23237, 19276, 31191, 26718, 7393, 3432, 16371, 11898, 59150, 63111, 50204, 54677, 41258, 45219, 33336, 37809, 27462, 31439, 18516, 23005, 11618, 15595, 3696, 8185, 63375, 58886, 54429, 50452, 45483, 40994, 37561, 33584, 31687, 27214, 22741, 18780, 15843, 11370, 7921, 3960];
            "undefined" != typeof Int32Array && (f = new Int32Array(f));
            const n = (0, t.default)("kermit", function (t, u) {
                e.Buffer.isBuffer(t) || (t = (0, r.default)(t));
                let n = void 0 !== u ? ~~u : 0;
                for (let e = 0; e < t.length; e++) {
                    const r = t[e];
                    n = 65535 & (f[255 & (n ^ r)] ^ n >> 8)
                }
                return n
            });
            var o = n;
            exports.default = o;
        }, {
            "buffer": "peL6",
            "./create_buffer": "qafd",
            "./define_crc": "/fai"
        }
    ],
    "WWJl": [function (require, module, exports) {

            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }),
            exports.default = void 0;
            var e = require("buffer"),
            r = u(require("./create_buffer")),
            t = u(require("./define_crc"));
            function u(e) {
                return e && e.__esModule ? e : {
                default:
                    e
                }
            }
            let f = [0, 8801531, 9098509, 825846, 9692897, 1419802, 1651692, 10452759, 10584377, 2608578, 2839604, 11344079, 3303384, 11807523, 12104405, 4128302, 12930697, 4391538, 5217156, 13227903, 5679208, 13690003, 14450021, 5910942, 6606768, 14844747, 15604413, 6837830, 16197969, 7431594, 8256604, 16494759, 840169, 9084178, 8783076, 18463, 10434312, 1670131, 1434117, 9678590, 11358416, 2825259, 2590173, 10602790, 4109873, 12122826, 11821884, 3289031, 13213536, 5231515, 4409965, 12912278, 5929345, 14431610, 13675660, 5693559, 6823513, 15618722, 14863188, 6588335, 16513208, 8238147, 7417269, 16212302, 1680338, 10481449, 9664223, 1391140, 9061683, 788936, 36926, 8838341, 12067563, 4091408, 3340262, 11844381, 2868234, 11372785, 10555655, 2579964, 14478683, 5939616, 5650518, 13661357, 5180346, 13190977, 12967607, 4428364, 8219746, 16457881, 16234863, 7468436, 15633027, 6866552, 6578062, 14816117, 1405499, 9649856, 10463030, 1698765, 8819930, 55329, 803287, 9047340, 11858690, 3325945, 4072975, 12086004, 2561507, 10574104, 11387118, 2853909, 13647026, 5664841, 5958079, 14460228, 4446803, 12949160, 13176670, 5194661, 7454091, 16249200, 16476294, 8201341, 14834538, 6559633, 6852199, 15647388, 3360676, 11864927, 12161705, 4185682, 10527045, 2551230, 2782280, 11286707, 9619101, 1346150, 1577872, 10379115, 73852, 8875143, 9172337, 899466, 16124205, 7357910, 8182816, 16421083, 6680524, 14918455, 15678145, 6911546, 5736468, 13747439, 14507289, 5968354, 12873461, 4334094, 5159928, 13170435, 4167245, 12180150, 11879232, 3346363, 11301036, 2767959, 2532769, 10545498, 10360692, 1596303, 1360505, 9604738, 913813, 9157998, 8856728, 92259, 16439492, 8164415, 7343561, 16138546, 6897189, 15692510, 14936872, 6662099, 5986813, 14488838, 13733104, 5750795, 13156124, 5174247, 4352529, 12855018, 2810998, 11315341, 10498427, 2522496, 12124823, 4148844, 3397530, 11901793, 9135439, 862644, 110658, 8912057, 1606574, 10407765, 9590435, 1317464, 15706879, 6940164, 6651890, 14889737, 8145950, 16384229, 16161043, 7394792, 5123014, 13133629, 12910283, 4370992, 14535975, 5997020, 5707818, 13718737, 2504095, 10516836, 11329682, 2796649, 11916158, 3383173, 4130419, 12143240, 8893606, 129117, 876971, 9121104, 1331783, 9576124, 10389322, 1625009, 14908182, 6633453, 6925851, 15721184, 7380471, 16175372, 16402682, 8127489, 4389423, 12891860, 13119266, 5137369, 13704398, 5722165, 6015427, 14517560];
            "undefined" != typeof Int32Array && (f = new Int32Array(f));
            const n = (0, t.default)("crc-24", function (t, u) {
                e.Buffer.isBuffer(t) || (t = (0, r.default)(t));
                let n = void 0 !== u ? ~~u : 11994318;
                for (let e = 0; e < t.length; e++) {
                    const r = t[e];
                    n = 16777215 & (f[255 & (n >> 16 ^ r)] ^ n << 8)
                }
                return n
            });
            var o = n;
            exports.default = o;
        }, {
            "buffer": "peL6",
            "./create_buffer": "qafd",
            "./define_crc": "/fai"
        }
    ],
    "xjWw": [function (require, module, exports) {

            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }),
            exports.default = void 0;
            var e = require("buffer"),
            r = u(require("./create_buffer")),
            t = u(require("./define_crc"));
            function u(e) {
                return e && e.__esModule ? e : {
                default:
                    e
                }
            }
            let f = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117];
            "undefined" != typeof Int32Array && (f = new Int32Array(f));
            const n = (0, t.default)("crc-32", function (t, u) {
                e.Buffer.isBuffer(t) || (t = (0, r.default)(t));
                let n = 0 === u ? 0 : -1 ^ ~~u;
                for (let e = 0; e < t.length; e++) {
                    const r = t[e];
                    n = f[255 & (n ^ r)] ^ n >>> 8
                }
                return -1 ^ n
            });
            var o = n;
            exports.default = o;
        }, {
            "buffer": "peL6",
            "./create_buffer": "qafd",
            "./define_crc": "/fai"
        }
    ],
    "GX08": [function (require, module, exports) {

            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }),
            exports.default = void 0;
            var e = require("buffer"),
            r = u(require("./create_buffer")),
            t = u(require("./define_crc"));
            function u(e) {
                return e && e.__esModule ? e : {
                default:
                    e
                }
            }
            let f = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117];
            "undefined" != typeof Int32Array && (f = new Int32Array(f));
            const n = (0, t.default)("jam", function (t, u = -1) {
                e.Buffer.isBuffer(t) || (t = (0, r.default)(t));
                let n = 0 === u ? 0 : ~~u;
                for (let e = 0; e < t.length; e++) {
                    const r = t[e];
                    n = f[255 & (n ^ r)] ^ n >>> 8
                }
                return n
            });
            var o = n;
            exports.default = o;
        }, {
            "buffer": "peL6",
            "./create_buffer": "qafd",
            "./define_crc": "/fai"
        }
    ],
    "5bAM": [function (require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }),
            Object.defineProperty(exports, "crc1", {
                enumerable: !0,
                get: function () {
                    return e.default
                }
            }),
            Object.defineProperty(exports, "crc8", {
                enumerable: !0,
                get: function () {
                    return r.default
                }
            }),
            Object.defineProperty(exports, "crc81wire", {
                enumerable: !0,
                get: function () {
                    return t.default
                }
            }),
            Object.defineProperty(exports, "crc16", {
                enumerable: !0,
                get: function () {
                    return c.default
                }
            }),
            Object.defineProperty(exports, "crc16ccitt", {
                enumerable: !0,
                get: function () {
                    return u.default
                }
            }),
            Object.defineProperty(exports, "crc16modbus", {
                enumerable: !0,
                get: function () {
                    return n.default
                }
            }),
            Object.defineProperty(exports, "crc16xmodem", {
                enumerable: !0,
                get: function () {
                    return f.default
                }
            }),
            Object.defineProperty(exports, "crc16kermit", {
                enumerable: !0,
                get: function () {
                    return o.default
                }
            }),
            Object.defineProperty(exports, "crc24", {
                enumerable: !0,
                get: function () {
                    return d.default
                }
            }),
            Object.defineProperty(exports, "crc32", {
                enumerable: !0,
                get: function () {
                    return i.default
                }
            }),
            Object.defineProperty(exports, "crcjam", {
                enumerable: !0,
                get: function () {
                    return a.default
                }
            }),
            exports.default = void 0;
            var e = l(require("./crc1")),
            r = l(require("./crc8")),
            t = l(require("./crc81wire")),
            c = l(require("./crc16")),
            u = l(require("./crc16ccitt")),
            n = l(require("./crc16modbus")),
            f = l(require("./crc16xmodem")),
            o = l(require("./crc16kermit")),
            d = l(require("./crc24")),
            i = l(require("./crc32")),
            a = l(require("./crcjam"));
            function l(e) {
                return e && e.__esModule ? e : {
                default:
                    e
                }
            }
            var b = {
                crc1: e.default,
                crc8: r.default,
                crc81wire: t.default,
                crc16: c.default,
                crc16ccitt: u.default,
                crc16modbus: n.default,
                crc16xmodem: f.default,
                crc16kermit: o.default,
                crc24: d.default,
                crc32: i.default,
                crcjam: a.default
            };
            exports.default = b;
        }, {
            "./crc1": "KTLd",
            "./crc8": "VBUn",
            "./crc81wire": "KrSP",
            "./crc16": "YPen",
            "./crc16ccitt": "DD1y",
            "./crc16modbus": "WLsJ",
            "./crc16xmodem": "Nth9",
            "./crc16kermit": "lHwp",
            "./crc24": "WWJl",
            "./crc32": "xjWw",
            "./crcjam": "GX08"
        }
    ],
    "+fUd": [function (require, module, exports) {

            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }),
            exports.DualShock4 = void 0;
            var t = require("./state"),
            e = o(require("./lightbar")),
            i = o(require("./rumble")),
            s = require("./util/normalize"),
            r = require("buffer"),
            a = require("crc");
            function o(t) {
                return t && t.__esModule ? t : {
                default:
                    t
                }
            }
            class n {
                constructor() {
                    if (this.state = t.defaultState, this.lightbar = new e.default(this), this.rumble = new i.default(this), !navigator.hid || !navigator.hid.requestDevice)
                        throw new Error("WebHID not supported by browser or not available.")
                }
                async init() {
                    if (this.device && this.device.opened)
                        return;
                    const t = await navigator.hid.requestDevice({
                        filters: [{
                                vendorId: 1356,
                                productId: 2976
                            }, {
                                vendorId: 1356,
                                productId: 1476
                            }, {
                                vendorId: 1356,
                                productId: 2508
                            }, {
                                vendorId: 1356,
                                productId: 1477
                            }, {
                                vendorId: 5426,
                                productId: 4096
                            }, {
                                vendorId: 5426,
                                productId: 4103
                            }, {
                                vendorId: 5426,
                                productId: 4100
                            }, {
                                vendorId: 5426,
                                productId: 4105
                            }, {
                                vendorId: 5227,
                                productId: 3329
                            }, {
                                vendorId: 5227,
                                productId: 3330
                            }, {
                                vendorId: 5227,
                                productId: 3336
                            }, {
                                vendorId: 3853,
                                productId: 238
                            }, {
                                vendorId: 30021,
                                productId: 260
                            }, {
                                vendorId: 11925,
                                productId: 30501
                            }, {
                                vendorId: 4544,
                                productId: 16385
                            }, {
                                vendorId: 3090,
                                productId: 22443
                            }, {
                                vendorId: 3090,
                                productId: 3606
                            }, {
                                vendorId: 3853,
                                productId: 132
                            }
                        ]
                    });
                    this.device = t[0],
                    await this.device.open(),
                    this.device.oninputreport = (t => this.processControllerReport(t))
                }
                processControllerReport(e) {
                    const {
                        data: i
                    } = e;
                    if (this.lastReport = i.buffer, this.state.interface === t.DualShock4Interface.Disconnected) {
                        if (63 !== i.byteLength)
                            return this.state.interface = t.DualShock4Interface.Bluetooth, void this.device.receiveFeatureReport(2);
                        this.state.interface = t.DualShock4Interface.USB,
                        this.lightbar.setColorRGB(0, 0, 64).catch(t => console.error(t))
                    }
                    this.state.timestamp = e.timeStamp,
                    this.state.interface === t.DualShock4Interface.USB && 1 === e.reportId && this.updateState(i),
                    this.state.interface === t.DualShock4Interface.Bluetooth && 17 === e.reportId && (this.updateState(new DataView(i.buffer, 2)), this.device.receiveFeatureReport(2))
                }
                updateState(t) {
                    this.state.axes.leftStickX = (0, s.normalizeThumbstick)(t.getUint8(0)),
                    this.state.axes.leftStickY = (0, s.normalizeThumbstick)(t.getUint8(1)),
                    this.state.axes.rightStickX = (0, s.normalizeThumbstick)(t.getUint8(2)),
                    this.state.axes.rightStickY = (0, s.normalizeThumbstick)(t.getUint8(3));
                    const e = t.getUint8(4);
                    this.state.buttons.triangle = !!(128 & e),
                    this.state.buttons.circle = !!(64 & e),
                    this.state.buttons.cross = !!(32 & e),
                    this.state.buttons.square = !!(16 & e);
                    const i = 15 & e;
                    this.state.buttons.dPadUp = 7 === i || 0 === i || 1 === i,
                    this.state.buttons.dPadRight = 1 === i || 2 === i || 3 === i,
                    this.state.buttons.dPadDown = 3 === i || 4 === i || 5 === i,
                    this.state.buttons.dPadLeft = 5 === i || 6 === i || 7 === i;
                    const r = t.getUint8(5);
                    this.state.buttons.l1 = !!(1 & r),
                    this.state.buttons.r1 = !!(2 & r),
                    this.state.buttons.l2 = !!(4 & r),
                    this.state.buttons.r2 = !!(8 & r),
                    this.state.buttons.share = !!(16 & r),
                    this.state.buttons.options = !!(32 & r),
                    this.state.buttons.l3 = !!(64 & r),
                    this.state.buttons.r3 = !!(128 & r);
                    const a = t.getUint8(6);
                    this.state.buttons.playStation = !!(1 & a),
                    this.state.buttons.touchPadClick = !!(2 & a),
                    this.state.axes.l2 = (0, s.normalizeTrigger)(t.getUint8(7)),
                    this.state.axes.r2 = (0, s.normalizeTrigger)(t.getUint8(8)),
                    this.state.charging = !!(16 & t.getUint8(29)),
                    this.state.charging ? this.state.battery = Math.min(Math.floor(100 * (15 & t.getUint8(29)) / 11)) : this.state.battery = Math.min(100, Math.floor(100 * (15 & t.getUint8(29)) / 8)),
                    this.state.axes.gyroX = t.getUint16(13),
                    this.state.axes.gyroY = t.getUint16(15),
                    this.state.axes.gyroZ = t.getUint16(17),
                    this.state.axes.accelX = t.getInt16(19),
                    this.state.axes.accelY = t.getInt16(21),
                    this.state.axes.accelZ = t.getInt16(23),
                    this.state.touchpad.touches = [],
                    128 & t.getUint8(34) || this.state.touchpad.touches.push({
                        touchId: 127 & t.getUint8(34),
                        x: (15 & t.getUint8(36)) << 8 | t.getUint8(35),
                        y: t.getUint8(37) << 4 | (240 & t.getUint8(36)) >> 4
                    }),
                    128 & t.getUint8(38) || this.state.touchpad.touches.push({
                        touchId: 127 & t.getUint8(38),
                        x: (15 & t.getUint8(40)) << 8 | t.getUint8(39),
                        y: t.getUint8(41) << 4 | (240 & t.getUint8(40)) >> 4
                    })
                }
                async sendLocalState() {
                    if (!this.device)
                        throw new Error("Controller not initialized. You must call .init() first!");
                    if (this.state.interface === t.DualShock4Interface.USB) {
                        const t = new Uint8Array(16);
                        return t[0] = 5,
                        t[1] = 243,
                        t[4] = this.rumble.light,
                        t[5] = this.rumble.heavy,
                        t[6] = this.lightbar.r,
                        t[7] = this.lightbar.g,
                        t[8] = this.lightbar.b,
                        this.lastSentReport = t.buffer,
                        this.device.sendReport(t[0], t.slice(1))
                    } {
                        const t = new Uint16Array(79),
                        e = new Uint8Array(4),
                        i = new DataView(e.buffer);
                        return t[0] = 162,
                        t[1] = 17,
                        t[2] = 128,
                        t[4] = 255,
                        t[7] = this.rumble.light,
                        t[8] = this.rumble.heavy,
                        t[9] = this.lightbar.r,
                        t[10] = this.lightbar.g,
                        t[11] = this.lightbar.b,
                        i.setUint32(0, (0, a.crc32)(r.Buffer.from(t.slice(0, 75)))),
                        t[75] = e[3],
                        t[76] = e[2],
                        t[77] = e[1],
                        t[78] = e[0],
                        this.lastSentReport = t.buffer,
                        this.device.sendReport(t[1], t.slice(2))
                    }
                }
            }
            exports.DualShock4 = n;
        }, {
            "./state": "QGKx",
            "./lightbar": "Psaz",
            "./rumble": "hSBP",
            "./util/normalize": "Mipw",
            "buffer": "peL6",
            "crc": "5bAM"
        }
    ],
    "TJnp": [function (require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }),
            exports.default = void 0;
            var e = require("../src"),
            t = {
                data: () => ({
                    controllers: []
                }),
                methods: {
                    async addController() {
                        const t = new e.DualShock4;
                        await t.init(),
                        this.controllers.push(t)
                    }
                },
                computed: {
                    hidSupported: () => !(!window.navigator.hid || !window.navigator.hid.requestDevice)
                }
            };
            exports.default = t;
            (function () {
                var e = exports.default || module.exports;
                "function" == typeof e && (e = e.options),
                Object.assign(e, {
                    render: function () {
                        var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                        return a("div", [e._l(e.controllers, function (t, r) {
                                    return a("div", {
                                        key: r
                                    }, [a("h2", [e._v(" Controller #" + e._s(r) + " (" + e._s(t.state.interface.toUpperCase()) + ", Battery: " + e._s(t.state.battery) + "% "), t.state.charging ? a("span", [e._v("[charging]")]) : e._e(), e._v(") ")]), e._v(" "), a("div", {
                                                staticClass: "params"
                                            }, [a("h4", [e._v("Lightbar Color")]), e._v(" "), a("label", [e._v("R: ")]), a("input", {
                                                        directives: [{
                                                                name: "model",
                                                                rawName: "v-model",
                                                                value: t.lightbar.r,
                                                                expression: "controller.lightbar.r"
                                                            }
                                                        ],
                                                        attrs: {
                                                            type: "range",
                                                            min: "0",
                                                            max: "255"
                                                        },
                                                        domProps: {
                                                            value: t.lightbar.r
                                                        },
                                                        on: {
                                                            __r: function (a) {
                                                                return e.$set(t.lightbar, "r", a.target.value)
                                                            }
                                                        }
                                                    }), e._v(" (" + e._s(t.lightbar.r) + ")"), a("br"), e._v(" "), a("label", [e._v("G: ")]), a("input", {
                                                        directives: [{
                                                                name: "model",
                                                                rawName: "v-model",
                                                                value: t.lightbar.g,
                                                                expression: "controller.lightbar.g"
                                                            }
                                                        ],
                                                        attrs: {
                                                            type: "range",
                                                            min: "0",
                                                            max: "255"
                                                        },
                                                        domProps: {
                                                            value: t.lightbar.g
                                                        },
                                                        on: {
                                                            __r: function (a) {
                                                                return e.$set(t.lightbar, "g", a.target.value)
                                                            }
                                                        }
                                                    }), e._v(" (" + e._s(t.lightbar.g) + ")"), a("br"), e._v(" "), a("label", [e._v("B: ")]), a("input", {
                                                        directives: [{
                                                                name: "model",
                                                                rawName: "v-model",
                                                                value: t.lightbar.b,
                                                                expression: "controller.lightbar.b"
                                                            }
                                                        ],
                                                        attrs: {
                                                            type: "range",
                                                            min: "0",
                                                            max: "255"
                                                        },
                                                        domProps: {
                                                            value: t.lightbar.b
                                                        },
                                                        on: {
                                                            __r: function (a) {
                                                                return e.$set(t.lightbar, "b", a.target.value)
                                                            }
                                                        }
                                                    }), e._v(" (" + e._s(t.lightbar.b) + ") "), a("h4", [e._v("Rumble")]), e._v(" "), a("label", [e._v("Weak: ")]), a("input", {
                                                        directives: [{
                                                                name: "model",
                                                                rawName: "v-model",
                                                                value: t.rumble.light,
                                                                expression: "controller.rumble.light"
                                                            }
                                                        ],
                                                        attrs: {
                                                            type: "range",
                                                            min: "0",
                                                            max: "255"
                                                        },
                                                        domProps: {
                                                            value: t.rumble.light
                                                        },
                                                        on: {
                                                            __r: function (a) {
                                                                return e.$set(t.rumble, "light", a.target.value)
                                                            }
                                                        }
                                                    }), e._v(" (" + e._s(t.rumble.light) + ")"), a("br"), e._v(" "), a("label", [e._v("Strong: ")]), a("input", {
                                                        directives: [{
                                                                name: "model",
                                                                rawName: "v-model",
                                                                value: t.rumble.heavy,
                                                                expression: "controller.rumble.heavy"
                                                            }
                                                        ],
                                                        attrs: {
                                                            type: "range",
                                                            min: "0",
                                                            max: "255"
                                                        },
                                                        domProps: {
                                                            value: t.rumble.heavy
                                                        },
                                                        on: {
                                                            __r: function (a) {
                                                                return e.$set(t.rumble, "heavy", a.target.value)
                                                            }
                                                        }
                                                    }), e._v(" (" + e._s(t.rumble.heavy) + ") ")]), e._v(" "), a("div", {
                                                staticClass: "buttons"
                                            }, [a("h3", [e._v("Buttons")]), e._v(" "), e._l(t.state.buttons, function (t, r) {
                                                        return a("div", {
                                                            key: r,
                                                            staticClass: "btn",
                                                            style: {
                                                                opacity: t ? 1 : .5
                                                            }
                                                        }, [a("b", {
                                                                    staticClass: "name"
                                                                }, [e._v(e._s(r))]), a("br"), e._v(" " + e._s(t ? "1.00" : "0.00") + " ")])
                                                    })], 2), e._v(" "), a("div", {
                                                staticClass: "analogs"
                                            }, [a("h3", [e._v("Analogs")]), e._v(" "), e._l(t.state.axes, function (t, r) {
                                                        return a("div", {
                                                            key: r,
                                                            staticClass: "analog",
                                                            style: {
                                                                opacity: .5 + Math.min(.5, .5 * Math.abs(t))
                                                            }
                                                        }, [a("b", {
                                                                    staticClass: "name"
                                                                }, [e._v(e._s(r))]), a("br"), e._v(" " + e._s(t.toFixed(2)) + " ")])
                                                    })], 2), e._v(" "), a("div", {
                                                staticClass: "touchpad"
                                            }, [a("h3", [e._v("Touchpad")]), e._v(" "), t.state.touchpad.touches.length ? e._l(t.state.touchpad.touches, function (t) {
                                                        return a("div", {
                                                            key: t.touchId
                                                        }, [a("b", [e._v("Touch #" + e._s(t.touchId) + ":")]), e._v(" " + e._s(t.x) + ", " + e._s(t.y) + " ")])
                                                    }) : a("div", [e._v(" No touches detected. ")])], 2)])
                                }), e._v(" "), a("br"), a("br"), e._v(" "), e.hidSupported ? a("button", {
                                    on: {
                                        click: e.addController
                                    }
                                }, [e._v("Connect Controller")]) : a("div", [e._v(" Your browser doesn't seem to support WebHID yet."), a("br"), e._v(" If you are using Chrome, make sure to have at least version 78, and enable the "), a("a", {
                                            attrs: {
                                                href: "chrome://flags/#enable-experimental-web-platform-features"
                                            }
                                        }, [e._v("experimental web platform features")]), e._v(" flag. ")])], 2)
                    },
                    staticRenderFns: [],
                    _compiled: !0,
                    _scopeId: null,
                    functional: void 0
                });
            })();
        }, {
            "../src": "+fUd"
        }
    ],
    "Focm": [function (require, module, exports) {
            "use strict";
            var e = r(require("vue")),
            u = r(require("./Demo.vue"));
            function r(e) {
                return e && e.__esModule ? e : {
                default:
                    e
                }
            }
            new e.default({
                el: "#app",
                render: e => e(u.default)
            });
        }, {
            "vue": "QPfz",
            "./Demo.vue": "TJnp"
        }
    ]
}, {}, ["Focm"], null)
//# sourceMappingURL=demo.97e39d61.js.map