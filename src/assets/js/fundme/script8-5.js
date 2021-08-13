/*! For license information please see vendor~main~084f635a.867b13be4269c3c0ce8b.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([[8], {
    "+5aw": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.ReCaptchaLoader = void 0;
        var n = a("K9qA");
        t.ReCaptchaLoader = function(e) {
            if (n.domHelper.canUseDom())
                if (window.grecaptcha)
                    e();
                else {
                    if (!document.getElementById("grecaptcha-js")) {
                        window.grecaptchaonload = function() {
                            return e()
                        };
                        var t = document.createElement("script");
                        t.id = "grecaptcha-js",
                        t.src = "https://www.google.com/recaptcha/api.js?onload=grecaptchaonload&render=explicit",
                        document.body.appendChild(t)
                    }
                }
        }
    },
    "+Bk0": function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.domHelper = t.DomHelper = t.setBodyOverflow = t.disableClicksOnContainer = t.createPortal = t.canUseSessionStorage = t.canUseLocalStorage = t.canUseWindow = t.canUseLocation = t.canUseHistory = t.canUseDom = void 0;
        var c = n(a("i8i4"));
        function r() {
            return "undefined" != typeof document
        }
        function i() {
            return "undefined" != typeof window
        }
        t.canUseDom = r,
        t.canUseHistory = function() {
            return "undefined" != typeof history
        },
        t.canUseLocation = function() {
            return "undefined" != typeof location
        },
        t.canUseWindow = i,
        t.canUseLocalStorage = function() {
            return r() && "undefined" != typeof localStorage
        },
        t.canUseSessionStorage = function() {
            return r() && "undefined" != typeof sessionStorage
        },
        t.createPortal = function(e, t) {
            return !!i() && c.default.createPortal(e, t)
        },
        t.disableClicksOnContainer = function(e) {
            if (r()) {
                var t = document.getElementById(e);
                if (t) {
                    var a = function(e) {
                        return e.preventDefault(), e.stopPropagation(), !1
                    };
                    t.addEventListener("click", a),
                    t.addEventListener("contextmenu", a),
                    t.querySelectorAll("a").forEach((function(e) {
                        e && (e.href = "javascript:void(0);", e.setAttribute("data-element-id", ""))
                    })),
                    t.querySelectorAll("button").forEach((function(e) {
                        e && e.setAttribute("data-element-id", "")
                    }))
                }
            }
        },
        t.setBodyOverflow = function(e) {
            void 0 === e && (e = ""),
            r() && (document.body.style.overflow = e)
        };
        var _ = function() {
            function e(e) {
                this.reactDom = e
            }
            return e.prototype.canUseDom = function() {
                return "undefined" != typeof window
            }, e.prototype.createPortal = function(e, t) {
                return !!this.canUseDom() && this.reactDom.createPortal(e, t)
            }, e.prototype.openMailTo = function(e, t) {
                void 0 === e && (e = ""),
                void 0 === t && (t = "");
                var a = encodeURIComponent(e),
                    n = encodeURIComponent(t);
                if (this.canUseDom()) {
                    var c = "mailto:?subject=" + n + "&body=" + a;
                    console.log("open Mail To: " + c),
                    window.location.assign(c)
                }
            }, e.prototype.copyText = function(e, t) {
                var a = this;
                return new Promise((function(t, n) {
                    if (!a.canUseDom())
                        return n("dom failure");
                    try {
                        if (!("clipboard" in navigator)) {
                            var c = document.createRange(),
                                r = document.getSelection(),
                                i = document.body,
                                _ = document.createElement("span");
                            _.textContent = e,
                            _.style.clip = "rect(0, 0, 0, 0)",
                            _.style.whiteSpace = "pre",
                            _.style.position = "fixed",
                            _.style.opacity = "0",
                            _.style.zIndex = "-10",
                            _.style.webkitUserSelect = "text",
                            _.style.msUserSelect = "text",
                            _.style.userSelect = "text",
                            _.addEventListener("copy", (function(e) {
                                e.stopPropagation()
                            })),
                            i.appendChild(_),
                            c.selectNodeContents(_),
                            r && (r.addRange(c), "function" == typeof r.removeRange ? r.removeRange(c) : r.removeAllRanges());
                            var o = document.execCommand("copy");
                            return i.removeChild(_), o ? t("doc exec success") : n("doc exec failure")
                        }
                        navigator.clipboard.writeText(e).then((function() {
                            return t("navigator success")
                        }), (function() {
                            return n("navigator failure")
                        }))
                    } catch (s) {
                        return n("try failure")
                    }
                }))
            }, e.prototype.openDialogueWindow = function(e, t, a) {
                if (void 0 === t && (t = 400), void 0 === a && (a = 400), !this.canUseDom())
                    return !1;
                var n = window.screenTop || window.screenX || 0,
                    c = window.screenLeft || window.screenY || 0,
                    r = "width=" + t + ", height=" + a + ", top=" + (n + (this.getViewPortHeight() - a) / 2) + ", left=" + (c + (this.getViewPortWidth() - t) / 2);
                try {
                    return window.open(e, "_blank", r), !0
                } catch (i) {
                    return !1
                }
            }, e.prototype.getViewPortHeight = function() {
                return this.canUseDom() && (window.outerHeight || document.body.clientHeight || screen.height) || 0
            }, e.prototype.getViewPortWidth = function() {
                return this.canUseDom() && (window.outerWidth || document.body.clientWidth || screen.width) || 0
            }, e
        }();
        t.DomHelper = _,
        t.domHelper = new _(c.default)
    },
    "+Ded": function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.debugAnalytics = t.uuid = t.trackEvents = t.platforms = void 0;
        var c = n(a("DmkP")),
            r = n(a("dhGX")),
            i = n(a("9J65")),
            _ = n(a("r15Y")),
            o = n(a("ss5u")),
            s = n(a("Jsjy")),
            l = n(a("YHo4")),
            p = n(a("p46w")),
            u = n(a("LTfk")),
            d = n(a("5i9P")),
            m = n(a("J8xu")),
            f = n(a("O+1g")),
            E = a("YWhY");
        Object.defineProperty(t, "useTrackViewIdOnMount", {
            enumerable: !0,
            get: function() {
                return E.useTrackViewIdOnMount
            }
        }),
        Object.defineProperty(t, "trackExperimentExposure", {
            enumerable: !0,
            get: function() {
                return E.trackExperimentExposure
            }
        }),
        t.platforms = {
            Algolia: c.default,
            Amplitude: r.default,
            ChartBeat: i.default,
            GoogleAnalytics: _.default,
            Magritte: o.default,
            MagritteExposure: s.default,
            Optimizely: l.default
        },
        t.trackEvents = m.default.getInstance(new d.default),
        t.uuid = f.default.getInstance(p.default),
        t.debugAnalytics = new u.default(t.trackEvents),
        "undefined" != typeof window && (window.debugAnalytics = t.debugAnalytics)
    },
    "+RWW": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("Mp+J");
        Object.defineProperty(t, "Feature", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    "+Zow": function(e, t) {
        var a = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
        if (a) {
            var n = new Uint8Array(16);
            e.exports = function() {
                return a(n), n
            }
        } else {
            var c = new Array(16);
            e.exports = function() {
                for (var e, t = 0; t < 16; t++)
                    0 == (3 & t) && (e = 4294967296 * Math.random()),
                    c[t] = e >>> ((3 & t) << 3) & 255;
                return c
            }
        }
    },
    "+yDP": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.truncate = t.trimSequential = t.nl2br = t.htmlSafe = t.capitalize = void 0,
        t.capitalize = function(e) {
            if (e.length) {
                var t = e.toLowerCase(),
                    a = t.charAt(0).toUpperCase();
                return e.length > 1 ? a + t.slice(1) : a
            }
            return e
        },
        t.htmlSafe = function(e) {
            return e.replace(/(<([^>]+)>)/gi, "")
        },
        t.nl2br = function(e) {
            return e.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, "$1<br/>$2")
        },
        t.trimSequential = function(e) {
            return e.replace(/\s+/g, " ").trim()
        },
        t.truncate = function(e, t, a) {
            if (void 0 === a && (a = !0), e.length <= t)
                return e;
            var n = e.substring(0, t);
            if (a) {
                var c = n.lastIndexOf(" ");
                if (c > 0) {
                    var r = Math.min(n.length, c);
                    return n.substr(0, r)
                }
            }
            return n
        }
    },
    "/BwW": function(e, t, a) {
        "use strict";
        a.d(t, "h", (function() {
            return T
        })),
        a.d(t, "r", (function() {
            return g
        })),
        a.d(t, "w", (function() {
            return f
        })),
        a.d(t, "x", (function() {
            return E
        })),
        a.d(t, "y", (function() {
            return A
        })),
        a.d(t, "A", (function() {
            return h
        }));
        a("8YN3"),
        a("wx14");
        var n = a("uP1p"),
            c = a("hqqJ");
        a.d(t, "a", (function() {
            return c.p
        })),
        a.d(t, "b", (function() {
            return c.B
        })),
        a.d(t, "c", (function() {
            return c.a
        })),
        a.d(t, "d", (function() {
            return c.o
        })),
        a.d(t, "e", (function() {
            return c.n
        })),
        a.d(t, "f", (function() {
            return c.H
        })),
        a.d(t, "g", (function() {
            return c.D
        })),
        a.d(t, "i", (function() {
            return c.v
        })),
        a.d(t, "j", (function() {
            return c.x
        })),
        a.d(t, "k", (function() {
            return c.I
        })),
        a.d(t, "l", (function() {
            return c.m
        })),
        a.d(t, "m", (function() {
            return c.J
        })),
        a.d(t, "n", (function() {
            return c.F
        })),
        a.d(t, "o", (function() {
            return c.z
        })),
        a.d(t, "p", (function() {
            return c.A
        })),
        a.d(t, "q", (function() {
            return c.w
        })),
        a.d(t, "s", (function() {
            return c.G
        })),
        a.d(t, "t", (function() {
            return c.K
        })),
        a.d(t, "u", (function() {
            return c.E
        })),
        a.d(t, "v", (function() {
            return c.l
        })),
        a.d(t, "z", (function() {
            return c.y
        }));
        a("sesW");
        var r = function(e) {
                return {
                    done: !0,
                    value: e
                }
            },
            i = {};
        function _(e) {
            return Object(n.b)(e) ? "channel" : Object(n.l)(e) ? String(e) : Object(n.d)(e) ? e.name : String(e)
        }
        function o(e, t, a) {
            var n,
                _,
                o,
                s = t;
            function l(t, a) {
                if (s === i)
                    return r(t);
                if (a && !_)
                    throw s = i, a;
                n && n(t);
                var c = a ? e[_](a) : e[s]();
                return s = c.nextState, o = c.effect, n = c.stateUpdater, _ = c.errorState, s === i ? r(t) : o
            }
            return Object(c.ab)(l, (function(e) {
                return l(null, e)
            }), a)
        }
        function s(e, t) {
            for (var a = arguments.length, n = new Array(a > 2 ? a - 2 : 0), r = 2; r < a; r++)
                n[r - 2] = arguments[r];
            var i,
                s = {
                    done: !1,
                    value: Object(c.l)(e)
                },
                l = function(e) {
                    return {
                        done: !1,
                        value: c.m.apply(void 0, [t].concat(n, [e]))
                    }
                },
                p = function(e) {
                    return i = e
                };
            return o({
                q1: function() {
                    return {
                        nextState: "q2",
                        effect: s,
                        stateUpdater: p
                    }
                },
                q2: function() {
                    return {
                        nextState: "q1",
                        effect: l(i)
                    }
                }
            }, "q1", "takeEvery(" + _(e) + ", " + t.name + ")")
        }
        function l(e, t) {
            for (var a = arguments.length, n = new Array(a > 2 ? a - 2 : 0), r = 2; r < a; r++)
                n[r - 2] = arguments[r];
            var i,
                s,
                l = {
                    done: !1,
                    value: Object(c.l)(e)
                },
                p = function(e) {
                    return {
                        done: !1,
                        value: c.m.apply(void 0, [t].concat(n, [e]))
                    }
                },
                u = function(e) {
                    return {
                        done: !1,
                        value: Object(c.n)(e)
                    }
                },
                d = function(e) {
                    return i = e
                },
                m = function(e) {
                    return s = e
                };
            return o({
                q1: function() {
                    return {
                        nextState: "q2",
                        effect: l,
                        stateUpdater: m
                    }
                },
                q2: function() {
                    return i ? {
                        nextState: "q3",
                        effect: u(i)
                    } : {
                        nextState: "q1",
                        effect: p(s),
                        stateUpdater: d
                    }
                },
                q3: function() {
                    return {
                        nextState: "q1",
                        effect: p(s),
                        stateUpdater: d
                    }
                }
            }, "q1", "takeLatest(" + _(e) + ", " + t.name + ")")
        }
        function p(e, t) {
            for (var a = arguments.length, n = new Array(a > 2 ? a - 2 : 0), r = 2; r < a; r++)
                n[r - 2] = arguments[r];
            var i,
                s = {
                    done: !1,
                    value: Object(c.l)(e)
                },
                l = function(e) {
                    return {
                        done: !1,
                        value: c.o.apply(void 0, [t].concat(n, [e]))
                    }
                },
                p = function(e) {
                    return i = e
                };
            return o({
                q1: function() {
                    return {
                        nextState: "q2",
                        effect: s,
                        stateUpdater: p
                    }
                },
                q2: function() {
                    return {
                        nextState: "q1",
                        effect: l(i)
                    }
                }
            }, "q1", "takeLeading(" + _(e) + ", " + t.name + ")")
        }
        function u(e, t, a) {
            for (var n = arguments.length, r = new Array(n > 3 ? n - 3 : 0), i = 3; i < n; i++)
                r[i - 3] = arguments[i];
            var s,
                l,
                p = {
                    done: !1,
                    value: Object(c.p)(t, Object(c.r)(1))
                },
                u = function() {
                    return {
                        done: !1,
                        value: Object(c.l)(l)
                    }
                },
                d = function(e) {
                    return {
                        done: !1,
                        value: c.m.apply(void 0, [a].concat(r, [e]))
                    }
                },
                m = {
                    done: !1,
                    value: Object(c.v)(e)
                },
                f = function(e) {
                    return s = e
                },
                E = function(e) {
                    return l = e
                };
            return o({
                q1: function() {
                    return {
                        nextState: "q2",
                        effect: p,
                        stateUpdater: E
                    }
                },
                q2: function() {
                    return {
                        nextState: "q3",
                        effect: u(),
                        stateUpdater: f
                    }
                },
                q3: function() {
                    return {
                        nextState: "q4",
                        effect: d(s)
                    }
                },
                q4: function() {
                    return {
                        nextState: "q2",
                        effect: m
                    }
                }
            }, "q1", "throttle(" + _(t) + ", " + a.name + ")")
        }
        function d(e, t, a) {
            for (var n = e, r = arguments.length, _ = new Array(r > 3 ? r - 3 : 0), s = 3; s < r; s++)
                _[s - 3] = arguments[s];
            var l = {
                    done: !1,
                    value: c.o.apply(void 0, [a].concat(_))
                },
                p = {
                    done: !1,
                    value: Object(c.v)(t)
                };
            return o({
                q1: function() {
                    return {
                        nextState: "q2",
                        effect: l,
                        errorState: "q10"
                    }
                },
                q2: function() {
                    return {
                        nextState: i
                    }
                },
                q10: function(e) {
                    if ((n -= 1) <= 0)
                        throw e;
                    return {
                        nextState: "q1",
                        effect: p
                    }
                }
            }, "q1", "retry(" + a.name + ")")
        }
        function m(e, t, a) {
            for (var n = arguments.length, r = new Array(n > 3 ? n - 3 : 0), i = 3; i < n; i++)
                r[i - 3] = arguments[i];
            var s,
                l,
                p = {
                    done: !1,
                    value: Object(c.l)(t)
                },
                u = {
                    done: !1,
                    value: Object(c.w)({
                        action: Object(c.l)(t),
                        debounce: Object(c.v)(e)
                    })
                },
                d = function(e) {
                    return {
                        done: !1,
                        value: c.m.apply(void 0, [a].concat(r, [e]))
                    }
                },
                m = function(e) {
                    return {
                        done: !1,
                        value: e
                    }
                },
                f = function(e) {
                    return s = e
                },
                E = function(e) {
                    return l = e
                };
            return o({
                q1: function() {
                    return {
                        nextState: "q2",
                        effect: p,
                        stateUpdater: f
                    }
                },
                q2: function() {
                    return {
                        nextState: "q3",
                        effect: u,
                        stateUpdater: E
                    }
                },
                q3: function() {
                    return l.debounce ? {
                        nextState: "q1",
                        effect: d(s)
                    } : {
                        nextState: "q2",
                        effect: m(l.action),
                        stateUpdater: f
                    }
                }
            }, "q1", "debounce(" + _(t) + ", " + a.name + ")")
        }
        function f(e, t) {
            for (var a = arguments.length, n = new Array(a > 2 ? a - 2 : 0), r = 2; r < a; r++)
                n[r - 2] = arguments[r];
            return c.m.apply(void 0, [s, e, t].concat(n))
        }
        function E(e, t) {
            for (var a = arguments.length, n = new Array(a > 2 ? a - 2 : 0), r = 2; r < a; r++)
                n[r - 2] = arguments[r];
            return c.m.apply(void 0, [l, e, t].concat(n))
        }
        function A(e, t) {
            for (var a = arguments.length, n = new Array(a > 2 ? a - 2 : 0), r = 2; r < a; r++)
                n[r - 2] = arguments[r];
            return c.m.apply(void 0, [p, e, t].concat(n))
        }
        function h(e, t, a) {
            for (var n = arguments.length, r = new Array(n > 3 ? n - 3 : 0), i = 3; i < n; i++)
                r[i - 3] = arguments[i];
            return c.m.apply(void 0, [u, e, t, a].concat(r))
        }
        function g(e, t, a) {
            for (var n = arguments.length, r = new Array(n > 3 ? n - 3 : 0), i = 3; i < n; i++)
                r[i - 3] = arguments[i];
            return c.o.apply(void 0, [d, e, t, a].concat(r))
        }
        function T(e, t, a) {
            for (var n = arguments.length, r = new Array(n > 3 ? n - 3 : 0), i = 3; i < n; i++)
                r[i - 3] = arguments[i];
            return c.m.apply(void 0, [m, e, t, a].concat(r))
        }
    },
    "0Y3C": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getInitials = void 0;
        t.getInitials = function(e) {
            var t = e.toUpperCase().replace(/[^A-Z\s]/g, "").split(" ").map((function(e) {
                return e.charAt(0)
            }));
            return 1 === t.length ? t[0] : t[0] + t[t.length - 1]
        }
    },
    "1sUF": function(e, t, a) {
        "use strict";
        (function(e) {
            var n = this && this.__read || function(e, t) {
                var a = "function" == typeof Symbol && e[Symbol.iterator];
                if (!a)
                    return e;
                var n,
                    c,
                    r = a.call(e),
                    i = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(n = r.next()).done;)
                        i.push(n.value)
                } catch (_) {
                    c = {
                        error: _
                    }
                } finally {
                    try {
                        n && !n.done && (a = r.return) && a.call(r)
                    } finally {
                        if (c)
                            throw c.error
                    }
                }
                return i
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.wrapURLs = t.getShareLink = t.getDomain = t.serializeParams = t.normalize = void 0;
            var c = a("JG3f");
            t.normalize = function(e) {
                return e.replace(/([^:]\/)\/+/g, "$1")
            },
            t.serializeParams = function(e, t) {
                return void 0 === t && (t = "&"), Object.keys(e).filter((function(t) {
                    return !!e[t]
                })).map((function(t) {
                    return t + "=" + encodeURIComponent(e[t])
                })).join(t)
            },
            t.getDomain = function() {
                return "undefined" != typeof window ? window.initialState && window.initialState.meta && window.initialState.meta.global && window.initialState.meta.global.domain ? window.initialState.meta.global.domain : window.location.host.split(".").slice(1, window.location.host.length).join(".") : void 0 !== e && e.env && e.env.DOMAIN ? e.env.DOMAIN : "gofundme.com"
            },
            t.getShareLink = function(e, a, r, i) {
                var _ = i ? Object.entries(i).filter((function(e) {
                        var t = n(e, 2);
                        t[0];
                        return t[1]
                    })).map((function(e) {
                        var t = n(e, 2);
                        return t[0] + "=" + t[1]
                    })).join("&") : "",
                    o = a && r ? "?" + c.makeEncodedUtm(a, r) + (_.length ? "&" + _ : "") : "";
                return t.normalize("" + e + o)
            },
            t.wrapURLs = function(e) {
                return e.replace(/(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*))/gi, (function(e) {
                    return '<a href="' + e + '" target="_blank" rel="nofollow noopener noreferrer">' + e + "</a>"
                }))
            }
        }).call(this, a("8oxB"))
    },
    "1tSO": function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = n(a("q1tI")),
            r = a("Cv17"),
            i = function(e) {
                var t = (0, e.highlight)({
                    highlightProperty: "_highlightResult",
                    attribute: e.attribute,
                    hit: e.hit
                });
                return c.default.createElement("span", null, t.map((function(e, t) {
                    return e.isHighlighted ? c.default.createElement("strong", {
                        key: t,
                        dangerouslySetInnerHTML: {
                            __html: e.value
                        }
                    }) : c.default.createElement("span", {
                        key: t,
                        dangerouslySetInnerHTML: {
                            __html: e.value
                        }
                    })
                })))
            };
        t.default = function(e) {
            var t = e.attribute,
                a = e.hit,
                n = r.connectHighlight(i);
            return c.default.createElement(n, {
                attribute: t,
                hit: a
            })
        }
    },
    "2iV4": function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var c in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
                    return e
                }).apply(this, arguments)
            },
            c = this && this.__values || function(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    a = t && e[t],
                    n = 0;
                if (a)
                    return a.call(e);
                if (e && "number" == typeof e.length)
                    return {
                        next: function() {
                            return e && n >= e.length && (e = void 0), {
                                value: e && e[n++],
                                done: !e
                            }
                        }
                    };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            },
            r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = a("N8uQ"),
            _ = r(a("jKim")),
            o = r(a("q1tI")),
            s = a("9kay"),
            l = {
                type: "backend",
                init: function(e) {
                    e.pluralResolver.addRule("en_US", e.pluralResolver.rules.en),
                    e.pluralResolver.addRule("en_GB", e.pluralResolver.rules.en),
                    e.pluralResolver.addRule("de_DE", e.pluralResolver.rules.de),
                    e.pluralResolver.addRule("es_ES", e.pluralResolver.rules.es),
                    e.pluralResolver.addRule("fr_FR", e.pluralResolver.rules.fr),
                    e.pluralResolver.addRule("it_IT", e.pluralResolver.rules.it),
                    e.pluralResolver.addRule("nl_NL", e.pluralResolver.rules.nl),
                    e.pluralResolver.addRule("pt_BR", e.pluralResolver.rules.pt)
                }
            },
            p = {
                clientSideBackend: function() {
                    return a("/oNK")
                },
                i18nInstance: _.default,
                i18nconfig_global: {
                    contextSeparator: ":_:",
                    debug: !1,
                    fallbackLng: !1,
                    initImmediate: !1,
                    interpolation: {
                        prefix: "{{",
                        suffix: "}}"
                    },
                    keySeparator: "::",
                    nsSeparator: ":::",
                    pluralSeparator: ":_:",
                    resources: {}
                },
                i18nconfig_fs: {
                    backend: {
                        loadPath: ""
                    },
                    contextSeparator: ":_:",
                    fallbackLng: !1,
                    initImmediate: !1,
                    interpolation: {
                        prefix: "{{",
                        suffix: "}}"
                    },
                    keySeparator: "::",
                    nsSeparator: ":::",
                    pluralSeparator: ":_:"
                },
                i18nconfig_xhr: {
                    backend: {
                        loadPath: ""
                    },
                    contextSeparator: ":_:",
                    fallbackLng: !1,
                    initImmediate: !1,
                    interpolation: {
                        prefix: "{{",
                        suffix: "}}"
                    },
                    keySeparator: "::",
                    nsSeparator: ":::",
                    pluralSeparator: ":_:"
                },
                globalInit: function(e, t, a, n) {
                    if (void 0 === e && (e = {}), void 0 === t && (t = !1), p.i18nInstance.isInitialized) {
                        p.addResourcesAndSetNameSpace(a || "translation", e) || console.warn("WARN @ssr-frontend/packages-i18n globalInit: No resources or namespaces were successfully added to i18n. Make sure the defaultNamespace you passed in, " + a + ", matches the namespace within your resourceData, and that your resourceJson is formatted correctly. See i18n/index.ts addResourcesAndSetNameSpace method documentation.")
                    } else {
                        var c = a || "translation";
                        p.i18nconfig_global.resources = e,
                        p.i18nconfig_global.ns = [c],
                        p.i18nconfig_global.defaultNS = c,
                        t ? p.i18nInstance.use(s.reactI18nextModule).use(l).init(p.i18nconfig_global, n) : p.i18nInstance.init(p.i18nconfig_global, n)
                    }
                },
                clientSideInit: function(e, t, a) {
                    void 0 === t && (t = !1),
                    p.i18nInstance.isInitialized || (p.i18nconfig_xhr.backend && (p.i18nconfig_xhr.backend.loadPath = e), t ? p.i18nInstance.use(s.reactI18nextModule).use(p.clientSideBackend()).init(p.i18nconfig_xhr, a) : p.i18nInstance.use(p.clientSideBackend()).init(p.i18nconfig_xhr, a))
                },
                setLocale: function(e, t) {
                    return void 0 === e && (e = "en_US"), p.i18nInstance.changeLanguage(e, t)
                },
                addResourcesAndSetNameSpace: function(e, t, a) {
                    var n,
                        r;
                    void 0 === a && (a = Object.values(i.SupportedLocales));
                    var _ = !1;
                    try {
                        for (var o = c(a), s = o.next(); !s.done; s = o.next()) {
                            var l = s.value,
                                u = t[l];
                            if (u) {
                                var d = u[e];
                                d && (p.i18nInstance.addResourceBundle(l, e, d, !0), _ = !0)
                            }
                        }
                    } catch (m) {
                        n = {
                            error: m
                        }
                    } finally {
                        try {
                            s && !s.done && (r = o.return) && r.call(o)
                        } finally {
                            if (n)
                                throw n.error
                        }
                    }
                    return _
                },
                t: function(e, t) {
                    return void 0 === t && (t = {}), p.i18nInstance.t(e, t)
                },
                getNamespacedT: function(e) {
                    return p.i18nInstance.getFixedT(null, e)
                },
                getNamespacedTrans: function(e) {
                    return function(t) {
                        var a = n(n({}, t), {
                            ns: e
                        });
                        return o.default.createElement(s.Trans, n({}, a))
                    }
                },
                Trans: s.Trans
            };
        t.default = p
    },
    "2mcf": function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = n(a("q1tI")),
            r = a("7xpE");
        t.default = function(e) {
            var t = e.children,
                a = e.indexName;
            return c.default.createElement(r.Index, {
                indexName: a
            }, c.default.createElement(r.Configure, {
                filters: "status=1 AND custom_complete=1",
                exactOnSingleWordQuery: "word",
                hitsPerPage: 5,
                attributesToRetrieve: ["fundname", "username", "bene_name", "objectID", "url"],
                attributesToHighlight: ["fundname", "username", "bene_name"]
            }), t)
        }
    },
    "3xur": function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = n(a("q1tI")),
            r = a("qhky"),
            i = n(a("bS76")),
            _ = n(a("zE3r")),
            o = n(a("k96i")),
            s = n(a("8VBc")),
            l = n(a("PEA0")),
            p = n(a("dZCW"));
        t.default = function() {
            return c.default.createElement(r.Helmet, null, c.default.createElement("link", {
                rel: "icon",
                type: "image/svg+xml",
                href: s.default
            }), c.default.createElement("link", {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: l.default
            }), c.default.createElement("link", {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: _.default
            }), c.default.createElement("link", {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: o.default
            }), c.default.createElement("link", {
                rel: "mask-icon",
                href: p.default,
                color: "#02a95c"
            }), c.default.createElement("link", {
                rel: "shortcut icon",
                href: i.default + "?v=10-2020"
            }))
        }
    },
    "4qOQ": function(e, t, a) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function(e, t, a, n) {
                void 0 === n && (n = a),
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function() {
                        return t[a]
                    }
                })
            } : function(e, t, a, n) {
                void 0 === n && (n = a),
                e[n] = t[a]
            }),
            c = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            r = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && n(t, e, a);
                return c(t, e), t
            },
            i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.t = void 0;
        var _ = i(a("2iV4")),
            o = r(a("W48H"));
        _.default.globalInit(o, !0, "packages-util-date-time");
        var s = _.default.getNamespacedT("packages-util-date-time");
        t.t = s
    },
    "5YpV": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.DropdownLanguages = void 0;
        var n = a("HJxA");
        t.DropdownLanguages = [{
            text: "Deutsch",
            value: n.SupportedLocales.GERMAN_DE
        }, {
            text: "English (US)",
            value: n.SupportedLocales.ENGLISH_US
        }, {
            text: "English (UK)",
            value: n.SupportedLocales.ENGLISH_GB
        }, {
            text: "Español",
            value: n.SupportedLocales.SPANISH_ES
        }, {
            text: "Français",
            value: n.SupportedLocales.FRENCH_FR
        }, {
            text: "Italiano",
            value: n.SupportedLocales.ITALIAN_IT
        }, {
            text: "Nederlands",
            value: n.SupportedLocales.DUTCH_NL
        }, {
            text: "Português",
            value: n.SupportedLocales.PORTUGUESE_BR
        }]
    },
    "5i9P": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
            function e() {
                this.intervalId = 0,
                this.elements = void 0
            }
            return e.prototype.setObserver = function(e) {
                document ? this.observe(this, e) : this.intervalId = setInterval(this.observe, 500, this, e)
            }, e.prototype.getInterval = function() {
                return this.intervalId
            }, e.prototype.getElements = function() {
                return this.elements
            }, e.prototype.mutationCallBack = function(e, t, a) {
                this.elements = document.querySelectorAll("[data-element-id]"),
                this.elements.forEach((function(e) {
                    var a = e;
                    a.hasAttribute("data-analytic-event-listener") || (a.setAttribute("data-analytic-event-listener", "true"), e.addEventListener("click", (function(e) {
                        return t({
                            type: "click"
                        }, e)
                    })))
                }))
            }, e.prototype.observe = function(e, t) {
                var a = this;
                document && (clearInterval(e.intervalId), e.intervalId = 0, new MutationObserver((function(n) {
                    return e.mutationCallBack(a, t, n)
                })).observe(document.body, {
                    childList: !0,
                    subtree: !0
                }))
            }, e
        }();
        t.default = n
    },
    "5l5+": function(e, t, a) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function(e, t, a, n) {
                void 0 === n && (n = a),
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function() {
                        return t[a]
                    }
                })
            } : function(e, t, a, n) {
                void 0 === n && (n = a),
                e[n] = t[a]
            }),
            c = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            r = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && n(t, e, a);
                return c(t, e), t
            },
            i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Trans = t.t = void 0;
        var _ = i(a("k43+")),
            o = r(a("uOUg"));
        _.default.globalInit(o, !0, "packages-component-search");
        var s = _.default.getNamespacedT("packages-component-search");
        t.t = s;
        var l = _.default.getNamespacedTrans("packages-component-search");
        t.Trans = l
    },
    "6J9d": function(e, t, a) {
        "use strict";
        (function(e) {
            var n = this && this.__read || function(e, t) {
                var a = "function" == typeof Symbol && e[Symbol.iterator];
                if (!a)
                    return e;
                var n,
                    c,
                    r = a.call(e),
                    i = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(n = r.next()).done;)
                        i.push(n.value)
                } catch (_) {
                    c = {
                        error: _
                    }
                } finally {
                    try {
                        n && !n.done && (a = r.return) && a.call(r)
                    } finally {
                        if (c)
                            throw c.error
                    }
                }
                return i
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.wrapURLs = t.getShareLink = t.getDomain = t.serializeParams = t.normalize = void 0;
            var c = a("Npm8");
            t.normalize = function(e) {
                return e.replace(/([^:]\/)\/+/g, "$1")
            },
            t.serializeParams = function(e, t) {
                return void 0 === t && (t = "&"), Object.keys(e).filter((function(t) {
                    return !!e[t]
                })).map((function(t) {
                    return t + "=" + encodeURIComponent(e[t])
                })).join(t)
            },
            t.getDomain = function() {
                return "undefined" != typeof window ? window.initialState && window.initialState.meta && window.initialState.meta.global && window.initialState.meta.global.domain ? window.initialState.meta.global.domain : window.location.host.split(".").slice(1, window.location.host.length).join(".") : void 0 !== e && e.env && e.env.DOMAIN ? e.env.DOMAIN : "gofundme.com"
            },
            t.getShareLink = function(e, a, r, i) {
                var _ = i ? Object.entries(i).filter((function(e) {
                        var t = n(e, 2);
                        t[0];
                        return t[1]
                    })).map((function(e) {
                        var t = n(e, 2);
                        return t[0] + "=" + t[1]
                    })).join("&") : "",
                    o = a && r ? "?" + c.makeEncodedUtm(a, r) + (_.length ? "&" + _ : "") : "";
                return t.normalize("" + e + o)
            },
            t.wrapURLs = function(e) {
                return e.replace(/(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*))/gi, (function(e) {
                    return '<a href="' + e + '" target="_blank" rel="nofollow noopener noreferrer">' + e + "</a>"
                }))
            }
        }).call(this, a("8oxB"))
    },
    "6osK": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.twitter = void 0,
        t.twitter = {
            CARD: "summary_large_image",
            SITE: "@gofundme"
        }
    },
    "79Kb": function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = n(a("q1tI")),
            r = a("qhky"),
            i = a("6osK");
        t.default = function(e) {
            var t = e.description,
                a = e.image,
                n = e.title;
            return c.default.createElement(r.Helmet, null, c.default.createElement("meta", {
                name: "twitter:card",
                content: i.twitter.CARD
            }), c.default.createElement("meta", {
                name: "twitter:site",
                content: i.twitter.SITE
            }), c.default.createElement("meta", {
                name: "twitter:image",
                content: a
            }), c.default.createElement("meta", {
                name: "twitter:title",
                content: n
            }), t && c.default.createElement("meta", {
                name: "twitter:description",
                content: t
            }))
        }
    },
    "7MwF": function(e, t, a) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.isProduction = t.isStaging = t.isDocker = void 0;
            var n = a("6J9d");
            t.isDocker = function() {
                return !(void 0 === e || !e.env || !e.env.ENVIRONMENT) && "docker" === e.env.ENVIRONMENT
            },
            t.isStaging = function() {
                return void 0 !== e && e.env && e.env.ENVIRONMENT ? "test01" === e.env.ENVIRONMENT : n.getDomain().includes("test01")
            },
            t.isProduction = function() {
                return !(void 0 === e || !e.env || !e.env.ENVIRONMENT) && "production" === e.env.ENVIRONMENT
            }
        }).call(this, a("8oxB"))
    },
    "7kOO": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("Cz2S");
        Object.defineProperty(t, "Canonicals", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    "86hk": function(e, t, a) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function(e, t, a, n) {
                void 0 === n && (n = a),
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function() {
                        return t[a]
                    }
                })
            } : function(e, t, a, n) {
                void 0 === n && (n = a),
                e[n] = t[a]
            }),
            c = this && this.__exportStar || function(e, t) {
                for (var a in e)
                    "default" === a || t.hasOwnProperty(a) || n(t, e, a)
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        c(a("7kOO"), t),
        c(a("DvMW"), t),
        c(a("YO77"), t),
        c(a("9C6g"), t),
        c(a("Cyyx"), t)
    },
    "8LTy": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("QaoE");
        Object.defineProperty(t, "AlgoliaCOName", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    "8QVh": function(e, t, a) {
        "use strict";
        (function(e) {
            var n = this && this.__read || function(e, t) {
                var a = "function" == typeof Symbol && e[Symbol.iterator];
                if (!a)
                    return e;
                var n,
                    c,
                    r = a.call(e),
                    i = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(n = r.next()).done;)
                        i.push(n.value)
                } catch (_) {
                    c = {
                        error: _
                    }
                } finally {
                    try {
                        n && !n.done && (a = r.return) && a.call(r)
                    } finally {
                        if (c)
                            throw c.error
                    }
                }
                return i
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.wrapURLs = t.getShareLink = t.getDomain = t.serializeParams = t.normalize = void 0;
            var c = a("OHXh");
            t.normalize = function(e) {
                return e.replace(/([^:]\/)\/+/g, "$1")
            },
            t.serializeParams = function(e, t) {
                return void 0 === t && (t = "&"), Object.keys(e).filter((function(t) {
                    return !!e[t]
                })).map((function(t) {
                    return t + "=" + encodeURIComponent(e[t])
                })).join(t)
            },
            t.getDomain = function() {
                return "undefined" != typeof window ? window.initialState && window.initialState.meta && window.initialState.meta.global && window.initialState.meta.global.domain ? window.initialState.meta.global.domain : window.location.host.split(".").slice(1, window.location.host.length).join(".") : void 0 !== e && e.env && e.env.DOMAIN ? e.env.DOMAIN : "gofundme.com"
            },
            t.getShareLink = function(e, a, r, i) {
                var _ = i ? Object.entries(i).filter((function(e) {
                        var t = n(e, 2);
                        t[0];
                        return t[1]
                    })).map((function(e) {
                        var t = n(e, 2);
                        return t[0] + "=" + t[1]
                    })).join("&") : "",
                    o = a && r ? "?" + c.makeEncodedUtm(a, r) + (_.length ? "&" + _ : "") : "";
                return t.normalize("" + e + o)
            },
            t.wrapURLs = function(e) {
                return e.replace(/(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*))/gi, (function(e) {
                    return '<a href="' + e + '" target="_blank" rel="nofollow noopener noreferrer">' + e + "</a>"
                }))
            }
        }).call(this, a("8oxB"))
    },
    "8VBc": function(e, t, a) {
        "use strict";
        a.r(t),
        t.default = a.p + "static/media/favicon.c74c32f8ba43f93aaa341b1bddc489bf.svg"
    },
    "8YN3": function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return c
        })),
        a.d(t, "b", (function() {
            return r
        })),
        a.d(t, "c", (function() {
            return i
        })),
        a.d(t, "d", (function() {
            return _
        })),
        a.d(t, "e", (function() {
            return o
        })),
        a.d(t, "f", (function() {
            return s
        })),
        a.d(t, "g", (function() {
            return m
        })),
        a.d(t, "h", (function() {
            return l
        })),
        a.d(t, "i", (function() {
            return p
        })),
        a.d(t, "j", (function() {
            return u
        })),
        a.d(t, "k", (function() {
            return d
        }));
        var n = function(e) {
                return "@@redux-saga/" + e
            },
            c = n("CANCEL_PROMISE"),
            r = n("CHANNEL_END"),
            i = n("IO"),
            _ = n("MATCH"),
            o = n("MULTICAST"),
            s = n("SAGA_ACTION"),
            l = n("SELF_CANCELLATION"),
            p = n("TASK"),
            u = n("TASK_CANCEL"),
            d = n("TERMINATE"),
            m = n("LOCATION")
    },
    "9C6g": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("TUt7");
        Object.defineProperty(t, "OpenGraph", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    "9J65": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
            function e(e, t) {
                this.data = {},
                this.name = "ChartBeat",
                this.ready = !1,
                this.domainUrl = "",
                this.chartBeatUid = 0,
                this.chartBeatUid = e,
                this.domainUrl = t
            }
            return e.prototype.init = function() {
                "undefined" != typeof window && (this.data = window._sf_async_config = window._sf_async_config || {}, this.data.uid = this.chartBeatUid, this.data.domain = this.domainUrl, this.data.useCanonical = !0, this.data.useCanonicalDomain = !0, this.ready = !0),
                "undefined" != typeof document && (this.script = document.createElement("script"), document.head && document.head.appendChild(this.script), this.script.type = "text/javascript", this.script.async = !0, this.script.src = "//static.chartbeat.com/js/chartbeat.js")
            }, e.prototype.instanceOfDataType = function(e) {
                return !1
            }, e.prototype.prepareData = function(e, t) {
                return e
            }, e.prototype.push = function(e, t) {
                return {}
            }, e.prototype.setData = function(e) {
                var t = this;
                "undefined" != typeof window && (window._sf_async_config || (window._sf_async_config = {}), Object.keys(e).forEach((function(a) {
                    window._sf_async_config[a] = e[a],
                    t.data[a] = e[a]
                })))
            }, e.prototype.isReady = function() {
                return this.ready
            }, e.prototype.setReady = function() {
                this.ready = !0
            }, e.prototype.getScript = function() {
                return this.script
            }, e
        }();
        t.default = n
    },
    "9L4T": function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.domHelper = t.DomHelper = t.setBodyOverflow = t.disableClicksOnContainer = t.createPortal = t.canUseSessionStorage = t.canUseLocalStorage = t.canUseWindow = t.canUseLocation = t.canUseHistory = t.canUseDom = void 0;
        var c = n(a("i8i4"));
        function r() {
            return "undefined" != typeof document
        }
        function i() {
            return "undefined" != typeof window
        }
        t.canUseDom = r,
        t.canUseHistory = function() {
            return "undefined" != typeof history
        },
        t.canUseLocation = function() {
            return "undefined" != typeof location
        },
        t.canUseWindow = i,
        t.canUseLocalStorage = function() {
            return r() && "undefined" != typeof localStorage
        },
        t.canUseSessionStorage = function() {
            return r() && "undefined" != typeof sessionStorage
        },
        t.createPortal = function(e, t) {
            return !!i() && c.default.createPortal(e, t)
        },
        t.disableClicksOnContainer = function(e) {
            if (r()) {
                var t = document.getElementById(e);
                if (t) {
                    var a = function(e) {
                        return e.preventDefault(), e.stopPropagation(), !1
                    };
                    t.addEventListener("click", a),
                    t.addEventListener("contextmenu", a),
                    t.querySelectorAll("a").forEach((function(e) {
                        e && (e.href = "javascript:void(0);", e.setAttribute("data-element-id", ""))
                    })),
                    t.querySelectorAll("button").forEach((function(e) {
                        e && e.setAttribute("data-element-id", "")
                    }))
                }
            }
        },
        t.setBodyOverflow = function(e) {
            void 0 === e && (e = ""),
            r() && (document.body.style.overflow = e)
        };
        var _ = function() {
            function e(e) {
                this.reactDom = e
            }
            return e.prototype.canUseDom = function() {
                return "undefined" != typeof window
            }, e.prototype.createPortal = function(e, t) {
                return !!this.canUseDom() && this.reactDom.createPortal(e, t)
            }, e.prototype.openMailTo = function(e, t) {
                void 0 === e && (e = ""),
                void 0 === t && (t = "");
                var a = encodeURIComponent(e),
                    n = encodeURIComponent(t);
                if (this.canUseDom()) {
                    var c = "mailto:?subject=" + n + "&body=" + a;
                    console.log("open Mail To: " + c),
                    window.location.assign(c)
                }
            }, e.prototype.copyText = function(e, t) {
                var a = this;
                return new Promise((function(t, n) {
                    if (!a.canUseDom())
                        return n("dom failure");
                    try {
                        if (!("clipboard" in navigator)) {
                            var c = document.createRange(),
                                r = document.getSelection(),
                                i = document.body,
                                _ = document.createElement("span");
                            _.textContent = e,
                            _.style.clip = "rect(0, 0, 0, 0)",
                            _.style.whiteSpace = "pre",
                            _.style.position = "fixed",
                            _.style.opacity = "0",
                            _.style.zIndex = "-10",
                            _.style.webkitUserSelect = "text",
                            _.style.msUserSelect = "text",
                            _.style.userSelect = "text",
                            _.addEventListener("copy", (function(e) {
                                e.stopPropagation()
                            })),
                            i.appendChild(_),
                            c.selectNodeContents(_),
                            r && (r.addRange(c), "function" == typeof r.removeRange ? r.removeRange(c) : r.removeAllRanges());
                            var o = document.execCommand("copy");
                            return i.removeChild(_), o ? t("doc exec success") : n("doc exec failure")
                        }
                        navigator.clipboard.writeText(e).then((function() {
                            return t("navigator success")
                        }), (function() {
                            return n("navigator failure")
                        }))
                    } catch (s) {
                        return n("try failure")
                    }
                }))
            }, e.prototype.openDialogueWindow = function(e, t, a) {
                if (void 0 === t && (t = 400), void 0 === a && (a = 400), !this.canUseDom())
                    return !1;
                var n = window.screenTop || window.screenX || 0,
                    c = window.screenLeft || window.screenY || 0,
                    r = "width=" + t + ", height=" + a + ", top=" + (n + (this.getViewPortHeight() - a) / 2) + ", left=" + (c + (this.getViewPortWidth() - t) / 2);
                try {
                    return window.open(e, "_blank", r), !0
                } catch (i) {
                    return !1
                }
            }, e.prototype.getViewPortHeight = function() {
                return this.canUseDom() && (window.outerHeight || document.body.clientHeight || screen.height) || 0
            }, e.prototype.getViewPortWidth = function() {
                return this.canUseDom() && (window.outerWidth || document.body.clientWidth || screen.width) || 0
            }, e
        }();
        t.DomHelper = _,
        t.domHelper = new _(c.default)
    },
    "9PeI": function(e, t, a) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function(e, t, a, n) {
                void 0 === n && (n = a),
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function() {
                        return t[a]
                    }
                })
            } : function(e, t, a, n) {
                void 0 === n && (n = a),
                e[n] = t[a]
            }),
            c = this && this.__exportStar || function(e, t) {
                for (var a in e)
                    "default" === a || t.hasOwnProperty(a) || n(t, e, a)
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        c(a("W2No"), t)
    },
    "9npq": function(e, t) {
        for (var a = [], n = 0; n < 256; ++n)
            a[n] = (n + 256).toString(16).substr(1);
        e.exports = function(e, t) {
            var n = t || 0,
                c = a;
            return [c[e[n++]], c[e[n++]], c[e[n++]], c[e[n++]], "-", c[e[n++]], c[e[n++]], "-", c[e[n++]], c[e[n++]], "-", c[e[n++]], c[e[n++]], "-", c[e[n++]], c[e[n++]], c[e[n++]], c[e[n++]], c[e[n++]], c[e[n++]]].join("")
        }
    },
    A8Cc: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.LocaleNumberFormatter = t.numberAbbrev = t.AbbrevSuffix = void 0;
        var c,
            r = n(a("pvo5"));
        t.LocaleNumberFormatter = r.default,
        function(e) {
            e.THOUSAND = "K",
            e.TRILLION = "Tr",
            e.BILLION = "B",
            e.MILLION = "M",
            e.NONE = ""
        }(c || (c = {})),
        t.AbbrevSuffix = c;
        t.numberAbbrev = function(e, t, a) {
            void 0 === t && (t = !0),
            void 0 === a && (a = 0);
            var n = 1e3,
                r = 1e6,
                i = 1e9,
                _ = 1e12,
                o = Math.min(a, ("" + e).length),
                s = e % n == 0 && e / n < n || e % r == 0 && e / r < n || e % i == 0 && e / i < n || e % _ == 0 && e / _ < n,
                l = {
                    abbrevNum: e,
                    suffix: c.NONE
                },
                p = Math.pow(10, o || 0);
            return t || s ? (e >= 95e10 ? (l.abbrevNum = Math.round(e / _ * p) / p, l.suffix = c.TRILLION) : e >= 95e7 ? (l.abbrevNum = Math.round(e / i * p) / p, l.suffix = c.BILLION) : e >= 95e4 ? (l.abbrevNum = Math.round(e / r * p) / p, l.suffix = c.MILLION) : e >= n && (l.abbrevNum = Math.round(e / n * p) / p, l.suffix = c.THOUSAND), l) : l
        }
    },
    "B+IZ": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("aUZA");
        Object.defineProperty(t, "Optimizely", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        });
        var c = a("IQ6H");
        Object.defineProperty(t, "OptimizelyProvider", {
            enumerable: !0,
            get: function() {
                return c.OptimizelyProvider
            }
        })
    },
    B7Ld: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("mTlD");
        Object.defineProperty(t, "SearchDropDown", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    Cyyx: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("79Kb");
        Object.defineProperty(t, "TwitterMetaTags", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    Cz2S: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = n(a("q1tI")),
            r = a("qhky");
        t.default = function(e) {
            var t = e.url,
                a = t.split(".").slice(1, t.length).join(".");
            return c.default.createElement(r.Helmet, null, c.default.createElement("link", {
                rel: "canonical",
                href: t
            }), c.default.createElement("link", {
                rel: "alternate",
                hrefLang: "de",
                href: "https://de." + a
            }), c.default.createElement("link", {
                rel: "alternate",
                hrefLang: "es",
                href: "https://es." + a
            }), c.default.createElement("link", {
                rel: "alternate",
                hrefLang: "fr",
                href: "https://fr." + a
            }), c.default.createElement("link", {
                rel: "alternate",
                hrefLang: "en-au",
                href: "https://au." + a
            }), c.default.createElement("link", {
                rel: "alternate",
                hrefLang: "en-ca",
                href: "https://ca." + a
            }), c.default.createElement("link", {
                rel: "alternate",
                hrefLang: "en-gb",
                href: "https://uk." + a
            }), c.default.createElement("link", {
                rel: "alternate",
                hrefLang: "en-ie",
                href: "https://ie." + a
            }), c.default.createElement("link", {
                rel: "alternate",
                hrefLang: "en-us",
                href: "https://www." + a
            }), c.default.createElement("link", {
                rel: "alternate",
                hrefLang: "pt-br",
                href: "https://pt." + a
            }), c.default.createElement("link", {
                rel: "alternate",
                hrefLang: "x-default",
                href: "https://www." + a
            }))
        }
    },
    DmkP: function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
            return (n = Object.assign || function(e) {
                for (var t, a = 1, n = arguments.length; a < n; a++)
                    for (var c in t = arguments[a])
                        Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
                return e
            }).apply(this, arguments)
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = function() {
            function e(e) {
                this.name = "Algolia",
                this.data = {},
                this.algoliaAnalyticsClient = void 0,
                this.algoliaAnalyticsClient = e
            }
            return e.prototype.isReady = function() {
                return !!(this.algoliaAnalyticsClient && this.data.index && this.data.queryId && this.data.fundId)
            }, e.prototype.instanceOfDataType = function(e, t) {
                var a = this.parseEvent(e, t);
                return r.has(this.getEventName(a))
            }, e.prototype.prepareData = function(e, t) {
                var a = this.parseEvent(e, t),
                    c = this.getEventName(a);
                return n(n({}, a), {
                    type: c
                })
            }, e.prototype.push = function(e, t) {
                return this.trackEvent(e, t)
            }, e.prototype.trackEvent = function(e, t) {
                return this.algoliaAnalyticsClient && this.data.index && this.data.queryId && this.data.fundId && this.algoliaAnalyticsClient("convertedObjectIDsAfterSearch", {
                    eventName: "campaign_click_on_donate_button",
                    index: this.data.index,
                    queryID: this.data.queryId,
                    objectIDs: [String(this.data.fundId)]
                }), {}
            }, e.prototype.getEventName = function(e) {
                if (!e || !e.type)
                    return "";
                switch (e.type) {
                case "mp_page_view":
                    return "view:" + e.viewId;
                case "mp_page_click":
                    return "click:" + e.viewId + ":" + e.elementId;
                default:
                    return e.type
                }
            }, e.prototype.parseEvent = function(e, t) {
                if (("click" === e.type || "mp_page_click" === e.type) && !e.viewId && t) {
                    var a = t.closest("[data-view-id]");
                    e.viewId = a && a instanceof HTMLElement ? a.dataset.viewId : ""
                }
                if (("click" === e.type || "mp_page_click" === e.type) && !e.elementId && t) {
                    var n = t.closest("[data-element-id]");
                    e.elementId = n && n instanceof HTMLElement ? n.dataset.elementId : ""
                }
                return "click" === e.type && (e.type = "mp_page_click"), e
            }, e
        }();
        t.default = c;
        var r = new Set(["click:lb_donation_list:btn_donations_donate", "click:lb_donation_top:btn_donations_donate", "click:pg_donate_index:btn_exp_donate", "click:lb_donation_top:btn_exp_donate", "click:lb_donation_list:btn_exp_donate", "click:pg_donate_index:btn_story_donate", "click:lb_donation_list:btn_donations_message", "click:pg_donate_index:btn_donate", "click:pg_donate_index:btn_donate_sticky", "click:pg_donate_index:btn_nav_donate", "click:pg_donate_index:btn_navmenu_donate", "click:pg_donate_index:btn_donate_comment", "click:pg_donate_index:btn_donate_guarantee", "click:lb_updates:btn_donate_update"])
    },
    DvMW: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("q0ph");
        Object.defineProperty(t, "FacebookMetaTags", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    HJxA: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.UserRoles = t.TeamMemberStatus = t.SupportedLocales = t.SupportedLocaleFormats = t.mediaTypes = t.Locale = t.IdentityType = t.Keys = t.BannerStatus = void 0,
        function(e) {
            e.COOKIE = "cookie",
            e.ERROR = "error",
            e.INFO = "info",
            e.SUCCESS = "success",
            e.WARNING = "warning"
        }(t.BannerStatus || (t.BannerStatus = {})),
        function(e) {
            e.ARROW_LEFT = "ArrowLeft",
            e.ARROW_RIGHT = "ArrowRight",
            e.ESCAPE = "Escape"
        }(t.Keys || (t.Keys = {})),
        function(e) {
            e.anonymous = "anonymous",
            e.charity = "charity",
            e.partner = "partner",
            e.person = "person",
            e.team = "team"
        }(t.IdentityType || (t.IdentityType = {})),
        function(e) {
            e.ENGLISH_US = "en-US",
            e.DUTCH_NL = "nl-NL",
            e.ENGLISH_AU = "en-AU",
            e.ENGLISH_CA = "en-CA",
            e.ENGLISH_GB = "en-GB",
            e.ENGLISH_IE = "en-IE",
            e.FRENCH_CA = "fr-CA",
            e.FRENCH_FR = "fr-FR",
            e.GERMAN_DE = "de-DE",
            e.ITALIAN_IT = "it-IT",
            e.PORTUGUESE_BR = "pt-BR",
            e.SPANISH_ES = "es-ES"
        }(t.Locale || (t.Locale = {})),
        function(e) {
            e[e.YOUTUBE = 0] = "YOUTUBE",
            e[e.PHOTO = 1] = "PHOTO",
            e[e.VIMEO = 2] = "VIMEO",
            e[e.AMAZON = 3] = "AMAZON",
            e[e.FACEBOOK_AWS = 4] = "FACEBOOK_AWS"
        }(t.mediaTypes || (t.mediaTypes = {})),
        function(e) {
            e[e.BCP47 = 0] = "BCP47",
            e[e.ISO15897 = 1] = "ISO15897"
        }(t.SupportedLocaleFormats || (t.SupportedLocaleFormats = {})),
        function(e) {
            e.ENGLISH_US = "en_US",
            e.DUTCH_NL = "nl_NL",
            e.ENGLISH_GB = "en_GB",
            e.FRENCH_FR = "fr_FR",
            e.FRENCH_CA = "fr_CA",
            e.GERMAN_DE = "de_DE",
            e.ITALIAN_IT = "it_IT",
            e.PORTUGUESE_BR = "pt_BR",
            e.SPANISH_ES = "es_ES"
        }(t.SupportedLocales || (t.SupportedLocales = {})),
        function(e) {
            e[e.INACTIVE = 0] = "INACTIVE",
            e[e.ACTIVE = 1] = "ACTIVE",
            e[e.ADMIN = 2] = "ADMIN"
        }(t.TeamMemberStatus || (t.TeamMemberStatus = {})),
        function(e) {
            e.BENEFICIARY = "BENEFICIARY",
            e.ORGANIZER = "ORGANIZER",
            e.TEAM_MEMBER = "TEAM_MEMBER"
        }(t.UserRoles || (t.UserRoles = {}))
    },
    IDcL: function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
            return (n = Object.assign || function(e) {
                for (var t, a = 1, n = arguments.length; a < n; a++)
                    for (var c in t = arguments[a])
                        Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
                return e
            }).apply(this, arguments)
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = function() {
            function e(e) {
                this.name = e.name,
                this.platform = e,
                this.logs = [],
                this.queue = [],
                this.interval = 0
            }
            return e.callBack = function(e, t) {}, e.prototype.getData = function() {
                return this.platform.data
            }, e.prototype.push = function(e, t) {
                if (this.platform.instanceOfDataType(e, t)) {
                    var a = {};
                    this.platform.prepareData && (a = this.platform.prepareData(e, t)),
                    this.platform.isReady() ? (this.logs[Date.now()] = {
                        data: a
                    }, this.pushData(a)) : this.pushToQueue(a)
                }
            }, e.prototype.trackExposure = function(e, t) {
                var a = {};
                this.platform.prepareData && (a = this.platform.prepareData(e)),
                this.platform.isReady() ? (this.logs[Date.now()] = {
                    data: a
                }, this.trackExposureData(a, t)) : this.pushToQueue(a, "exposure")
            }, e.prototype.trackEvent = function(e) {
                if (this.platform.instanceOfDataType(e)) {
                    var t = {};
                    this.platform.prepareData && (t = this.platform.prepareData(e)),
                    this.platform.isReady() ? (this.logs[Date.now()] = {
                        data: t
                    }, this.trackEventData(t)) : this.pushToQueue(t, "event")
                }
            }, e.prototype.setData = function(e) {
                this.platform.setData ? this.platform.setData(e) : this.platform.data = n(n({}, this.platform.data), e)
            }, e.prototype.getQueue = function() {
                return this.queue
            }, e.prototype.getPlatform = function() {
                return this.platform
            }, e.prototype.getInterval = function() {
                return this.interval
            }, e.prototype.pushToQueue = function(e, t) {
                this.interval || (this.interval = setInterval(this.checkIfReady, 500, this)),
                this.queue.push(n(n({}, e), {
                    queueType: t
                }))
            }, e.prototype.checkIfReady = function(e) {
                clearInterval(e.interval),
                e.interval = 0,
                e.queue.forEach((function(t) {
                    "event" === t.queueType ? e.trackEventData(t) : "exposure" === t.queueType ? e.trackExposureData(t) : e.pushData(t)
                })),
                e.queue = []
            }, e.prototype.pushData = function(t) {
                this.platform.push && this.platform.push(t, e.callBack)
            }, e.prototype.trackEventData = function(t) {
                this.platform.trackEvent && this.platform.trackEvent(t, e.callBack)
            }, e.prototype.trackExposureData = function(t, a) {
                this.platform.trackExposure && this.platform.trackExposure(t, e.callBack, a)
            }, e
        }();
        t.default = c
    },
    IbYL: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = {
            equalTo: function(e, t) {
                return function(a, n) {
                    if (void 0 !== n && a[e] !== n)
                        return t
                }
            },
            greaterThan: function(e, t) {
                return function(a, n) {
                    if (void 0 !== n && n <= e)
                        return t
                }
            },
            includes: function(e, t) {
                return function(a, n) {
                    if (void 0 === n || !e.includes(n))
                        return t
                }
            },
            max: function(e, t) {
                return function(a, n) {
                    if (void 0 !== n && n.length > e)
                        return t
                }
            },
            min: function(e, t) {
                return function(a, n) {
                    if (void 0 !== n && n.length < e)
                        return t
                }
            },
            regex: function(e, t) {
                return function(a, n) {
                    if (void 0 !== n && !e.test(n))
                        return t
                }
            },
            required: function(e) {
                return function(t, a) {
                    if (void 0 === a || a.trim().length <= 0)
                        return e
                }
            }
        }
    },
    Iuk2: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.updateRelativeTime = t.setMoment = t.setDonationRelativeTime = t.resetDefaultRelativeTime = t.timeAgo = t.diffFromNow = t.diff = t.dateInInputZone = t.calendar = void 0;
        var c = n(a("wd/R"));
        a("tGlX"),
        a("Oaa7"),
        a("iYuL"),
        a("nyYc"),
        a("bpih"),
        a("+s0g"),
        a("0tRk");
        var r = a("N8uQ"),
            i = a("eqXf"),
            _ = a("4qOQ"),
            o = {
                de: {
                    M: "1 Mo",
                    MM: "%d Mo",
                    d: "1 T",
                    dd: "%d T",
                    h: "1 Std",
                    hh: "%d Std",
                    m: "1 Min",
                    mm: "%d Min"
                },
                en: {
                    M: "1 mo",
                    MM: "%d mos",
                    d: "1 d",
                    dd: "%d d",
                    h: "1 hr",
                    hh: "%d hrs",
                    m: "1 min",
                    mm: "%d mins"
                },
                es: {
                    M: "1 mes",
                    MM: "%d meses",
                    d: "1 d",
                    dd: "%d d",
                    h: "1 hr",
                    hh: "%d hrs",
                    m: "1 min",
                    mm: "%d mins"
                },
                fr: {
                    M: "1 mois",
                    MM: "%d mois",
                    d: "1 j",
                    dd: "%d j",
                    h: "1 h",
                    hh: "%d h",
                    m: "1 min.",
                    mm: "%d min."
                },
                it: {
                    M: "1 mese",
                    MM: "%d mesi",
                    d: "1 g",
                    dd: "%d g",
                    h: "1 h",
                    hh: "%d h",
                    m: "1 m",
                    mm: "%d m"
                },
                nl: {
                    M: "1 mnd.",
                    MM: "%d mnd.",
                    d: "1 d.",
                    dd: "%d d.",
                    h: "1 u.",
                    hh: "%d u.",
                    m: "1 min.",
                    mm: "%d min."
                }
            };
        function s(e, t) {
            l(t);
            var a = c.default(e).calendar(void 0, {
                lastDay: "[Yesterday]",
                lastWeek: "LL",
                sameDay: "[Today]",
                sameElse: "LL"
            });
            return "Today" === a ? _.t("Today") : "Yesterday" === a ? _.t("Yesterday") : a
        }
        function l(e) {
            var t = Object.values(r.SupportedLocales).includes(e) ? e : r.SupportedLocales.ENGLISH_US,
                a = i.getLocaleObject(t),
                n = a.language,
                _ = a.country,
                s = a.locale,
                l = o[n];
            switch (l && c.default.updateLocale(n, {
                relativeTime: l
            }), n) {
            case "en":
                if ("US" !== _) {
                    c.default.locale(s.bcp47);
                    break
                }
                c.default.updateLocale(n, {
                    relativeTime: {
                        future: "%s",
                        past: "%s",
                        s: "Just now",
                        ss: "Just now",
                        y: "1 yr",
                        yy: "%d yrs"
                    }
                });
                break;
            case "de":
            case "es":
            case "fr":
            case "nl":
                c.default.locale(n);
                break;
            case "pt":
                c.default.locale(s.bcp47);
                break;
            default:
                c.default.locale(n)
            }
        }
        function p(e) {
            for (var t in e)
                e[t] && c.default.relativeTimeThreshold(t, e[t])
        }
        t.dateInInputZone = function(e, t) {
            return l(t), s(c.default.parseZone(e), t)
        },
        t.calendar = s,
        t.timeAgo = function(e, t) {
            return l(t), c.default(e).fromNow()
        },
        t.setMoment = l,
        t.diff = function(e, t, a) {
            return c.default(e).diff(c.default(t), a)
        },
        t.diffFromNow = function(e, t) {
            return c.default().diff(e, t)
        },
        t.updateRelativeTime = p,
        t.resetDefaultRelativeTime = function() {
            c.default.relativeTimeRounding(Math.round),
            p({
                M: 11,
                d: 26,
                h: 22,
                m: 45,
                s: 45
            })
        },
        t.setDonationRelativeTime = function() {
            c.default.relativeTimeRounding(Math.floor),
            p({
                M: 12e3,
                d: 30,
                h: 24,
                m: 60,
                s: 60
            })
        }
    },
    J8xu: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = n(a("IDcL")),
            r = function() {
                function e(e) {
                    this.platforms = {},
                    this.observer = e
                }
                return e.getInstance = function(t) {
                    if (!e.instance) {
                        if (!t)
                            throw new Error("observer missing");
                        this.instance = new e(t)
                    }
                    return this.instance
                }, e.prototype.init = function() {
                    var e = this;
                    Object.keys(this.platforms).forEach((function(t) {
                        var a,
                            n;
                        null === (n = (a = e.platforms[t].getPlatform()).init) || void 0 === n || n.call(a)
                    }))
                }, e.prototype.push = function(t, a) {
                    var n = e.getInstance().getPlatforms();
                    Object.keys(n).forEach((function(e) {
                        a && a.target instanceof Element ? n[e].push(t, a.target) : n[e].push(t)
                    }))
                }, e.prototype.trackEvent = function(t) {
                    var a = e.getInstance().getPlatforms();
                    Object.keys(a).forEach((function(e) {
                        a[e].trackEvent(t)
                    }))
                }, e.prototype.trackExposure = function(t, a) {
                    var n = e.getInstance().getPlatforms();
                    Object.keys(n).forEach((function(e) {
                        n[e].trackExposure(t, a)
                    }))
                }, e.prototype.getPlatforms = function() {
                    return this.platforms
                }, e.prototype.getPlatform = function(e) {
                    if (this.platforms[e])
                        return this.platforms[e];
                    throw new Error("Platform " + e + " not found")
                }, e.prototype.observe = function() {
                    this.observer.setObserver(e.getInstance().push)
                }, e.prototype.getObserver = function() {
                    return this.observer
                }, e.prototype.addPlatform = function(e) {
                    var t,
                        a;
                    this.platforms[e.name] = new c.default(e),
                    null === (a = (t = this.platforms[e.name].getPlatform()).init) || void 0 === a || a.call(t)
                }, e
            }();
        t.default = r
    },
    JG3f: function(e, t, a) {
        "use strict";
        var n,
            c,
            r,
            i,
            _,
            o,
            s,
            l,
            p,
            u,
            d,
            m,
            f,
            E,
            A,
            h,
            g,
            T,
            b,
            O,
            S,
            R;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.removeUtmParams = t.isUtmParam = t.encodeUtm = t.makeEncodedUtm = t.getUtm = t.makeUtm = t.UtmFromKeys = t.UtmKeys = void 0;
        var y,
            v,
            k = a("K9qA");
        !function(e) {
            e.FACEBOOK_SHARE_SHARESHEET = "FACEBOOK_SHARE_SHARESHEET",
            e.FACEBOOK_SHARE_SHARESHEET_COPY_LINK = "FACEBOOK_SHARE_SHARESHEET_COPY_LINK",
            e.INSTAGRAM_SHARESHEET = "INSTAGRAM_SHARESHEET",
            e.TWITTER_SHARE_SHARESHEET = "TWITTER_SHARE_SHARESHEET",
            e.COPY_LINK_SHARESHEET = "COPY_LINK_SHARESHEET",
            e.COPY_LINK_TIP_SHARESHEET = "COPY_LINK_TIP_SHARESHEET",
            e.COPY_LINK_MORE = "COPY_LINK_MORE",
            e.COPY_LINK_ALL = "COPY_LINK_ALL",
            e.EMAIL_SHARESHEET = "EMAIL_SHARESHEET",
            e.EMAIL_ANDROID_SHARESHEET = "EMAIL_ANDROID_SHARESHEET",
            e.WHATSAPP_SHARESHEET = "WHATSAPP_SHARESHEET",
            e.LINKEDIN_SHARESHEET = "LINKEDIN_SHARESHEET",
            e.WHATSAPP_READMORE_SHARESHEET = "WHATSAPP_READMORE_SHARESHEET",
            e.WHATSAPP_DONATE_SHARESHEET = "WHATSAPP_DONATE_SHARESHEET",
            e.FACEBOOK_MESSENGER_SHARESHEET = "FACEBOOK_MESSENGER_SHARESHEET",
            e.SMS_SHARESHEET = "SMS_SHARESHEET",
            e.SMS_ANDROID_SHARESHEET = "SMS_ANDROID_SHARESHEET",
            e.MORE_SHARESHEET = "MORE_SHARESHEET",
            e.EMBED_WIDGET_DONATE = "EMBED_WIDGET_DONATE",
            e.PRINT_POSTER = "PRINT_POSTER",
            e.ADDRESS_BAR = "ADDRESS_BAR"
        }(y = t.UtmKeys || (t.UtmKeys = {})),
        function(e) {
            e.CAMPAIGN_PAGE = "CAMPAIGN_PAGE",
            e.COMMUNITY_POSTDONATE_MODAL = "COMMUNITY_POSTDONATE_MODAL",
            e.COMMUNITY_SHARE_MODAL = "COMMUNITY_SHARE_MODAL",
            e.POSTDONATE_MODAL = "POSTDONATE_MODAL",
            e.POSTCREATE_CAMPAIGN = "POSTCREATE_CAMPAIGN",
            e.POSTCREATE_SHAREFLOW7A = "POSTCREATE_SHAREFLOW7A",
            e.POSTCREATE_SHAREFLOW7B = "POSTCREATE_SHAREFLOW7B",
            e.POSTCREATE_CALENDAR1 = "POSTCREATE_CALENDAR1",
            e.POSTCREATE_CALENDAR2 = "POSTCREATE_CALENDAR2",
            e.POSTCREATE_CALENDAR3 = "POSTCREATE_CALENDAR3",
            e.GUIDANCE_DRAWER = "GUIDANCE_DRAWER"
        }(v = t.UtmFromKeys || (t.UtmFromKeys = {}));
        var P = ((n = {})[y.EMAIL_SHARESHEET] = ((c = {})[v.CAMPAIGN_PAGE] = C("email", "customer", "p_cp+share-sheet"), c[v.COMMUNITY_POSTDONATE_MODAL] = C("email", "customer", "p_cmty_pd+share-sheet"), c[v.COMMUNITY_SHARE_MODAL] = C("email", "customer", "p_cmty+share-sheet"), c[v.POSTDONATE_MODAL] = C("email", "customer", "m_pd+share-sheet"), c[v.POSTCREATE_CAMPAIGN] = C("email", "customer", "p_cf+share-flow-1"), c[v.POSTCREATE_SHAREFLOW7A] = C("email", "customer", "p_cf+share-flow-7a"), c[v.POSTCREATE_SHAREFLOW7B] = C("email", "customer", "p_cf+share-flow-7b"), c[v.POSTCREATE_CALENDAR1] = C("email", "customer", "p_cf_cal1"), c[v.POSTCREATE_CALENDAR2] = C("email", "customer", "p_cf_cal2"), c[v.POSTCREATE_CALENDAR3] = C("email", "customer", "p_cf_cal3"), c[v.GUIDANCE_DRAWER] = C("email", "customer", "p_cp_guide_do"), c), n[y.EMAIL_ANDROID_SHARESHEET] = ((r = {})[v.CAMPAIGN_PAGE] = C("email", "customer-andr", "p_cp+share-sheet"), r[v.COMMUNITY_POSTDONATE_MODAL] = C("email", "customer-andr", "p_cmty_pd+share-sheet"), r[v.COMMUNITY_SHARE_MODAL] = C("email", "customer-andr", "p_cmty+share-sheet"), r[v.POSTDONATE_MODAL] = C("email", "customer-andr", "m_pd+share-sheet"), r[v.POSTCREATE_CAMPAIGN] = C("email", "customer-andr", "p_cf+share-flow-1"), r[v.POSTCREATE_SHAREFLOW7A] = C("email", "customer-andr", "p_cf+share-flow-7a"), r[v.POSTCREATE_SHAREFLOW7B] = C("email", "customer-andr", "p_cf+share-flow-7b"), r[v.POSTCREATE_CALENDAR1] = C("email", "customer-andr", "p_cf_cal1"), r[v.POSTCREATE_CALENDAR2] = C("email", "customer-andr", "p_cf_cal2"), r[v.POSTCREATE_CALENDAR3] = C("email", "customer-andr", "p_cf_cal3"), r[v.GUIDANCE_DRAWER] = C("email", "customer-andr", "p_cp_guide_do"), r), n[y.FACEBOOK_SHARE_SHARESHEET] = ((i = {})[v.CAMPAIGN_PAGE] = C("social", "facebook", "p_cp+share-sheet"), i[v.COMMUNITY_POSTDONATE_MODAL] = C("social", "facebook", "p_cmty_pd+share-sheet"), i[v.COMMUNITY_SHARE_MODAL] = C("social", "facebook", "p_cmty+share-sheet"), i[v.POSTDONATE_MODAL] = C("social", "facebook", "m_pd+share-sheet"), i[v.POSTCREATE_CAMPAIGN] = C("social", "facebook", "p_cf+share-flow-1"), i[v.POSTCREATE_SHAREFLOW7A] = C("social", "facebook", "p_cf+share-flow-7a"), i[v.POSTCREATE_SHAREFLOW7B] = C("social", "facebook", "p_cf+share-flow-7b"), i[v.POSTCREATE_CALENDAR1] = C("social", "facebook", "p_cf_cal1"), i[v.POSTCREATE_CALENDAR2] = C("social", "facebook", "p_cf_cal2"), i[v.POSTCREATE_CALENDAR3] = C("social", "facebook", "p_cf_cal3"), i[v.GUIDANCE_DRAWER] = C("social", "facebook", "p_cp_guide_do"), i), n[y.FACEBOOK_SHARE_SHARESHEET_COPY_LINK] = ((_ = {})[v.CAMPAIGN_PAGE] = C("social", "fb_copy_link", "p_cp+share-sheet"), _[v.COMMUNITY_POSTDONATE_MODAL] = C("social", "fb_copy_link", "p_cmty_pd+share-sheet"), _[v.COMMUNITY_SHARE_MODAL] = C("social", "fb_copy_link", "p_cmty+share-sheet"), _[v.POSTDONATE_MODAL] = C("social", "fb_copy_link", "m_pd+share-sheet"), _[v.POSTCREATE_CAMPAIGN] = C("social", "fb_copy_link", "p_cf+share-flow-1"), _[v.POSTCREATE_SHAREFLOW7A] = C("social", "fb_copy_link", "p_cf+share-flow-7a"), _[v.POSTCREATE_SHAREFLOW7B] = C("social", "fb_copy_link", "p_cf+share-flow-7b"), _[v.POSTCREATE_CALENDAR1] = C("social", "fb_copy_link", "p_cf_cal1"), _[v.POSTCREATE_CALENDAR2] = C("social", "fb_copy_link", "p_cf_cal2"), _[v.POSTCREATE_CALENDAR3] = C("social", "fb_copy_link", "p_cf_cal3"), _[v.GUIDANCE_DRAWER] = C("social", "fb_copy_link", "p_cp_guide_do"), _), n[y.INSTAGRAM_SHARESHEET] = ((o = {})[v.CAMPAIGN_PAGE] = C("social", "instagram", "p_cp+share-sheet"), o[v.POSTDONATE_MODAL] = C("social", "instagram", "m_pd+share-sheet"), o[v.POSTCREATE_CAMPAIGN] = C("social", "instagram", "p_cf+share-flow-1"), o[v.POSTCREATE_SHAREFLOW7A] = C("social", "instagram", "p_cf+share-flow-7a"), o[v.POSTCREATE_SHAREFLOW7B] = C("social", "instagram", "p_cf+share-flow-7b"), o[v.POSTCREATE_CALENDAR1] = C("social", "instagram", "p_cf_cal1"), o[v.POSTCREATE_CALENDAR2] = C("social", "instagram", "p_cf_cal2"), o[v.POSTCREATE_CALENDAR3] = C("social", "instagram", "p_cf_cal3"), o[v.GUIDANCE_DRAWER] = C("social", "instagram", "p_cp_guide_do"), o), n[y.TWITTER_SHARE_SHARESHEET] = ((s = {})[v.CAMPAIGN_PAGE] = C("social", "twitter", "p_cp+share-sheet"), s[v.COMMUNITY_POSTDONATE_MODAL] = C("social", "twitter", "p_cmty_pd+share-sheet"), s[v.COMMUNITY_SHARE_MODAL] = C("social", "twitter", "p_cmty+share-sheet"), s[v.POSTDONATE_MODAL] = C("social", "twitter", "m_pd+share-sheet"), s[v.POSTCREATE_CAMPAIGN] = C("social", "twitter", "p_cf+share-flow-1"), s[v.POSTCREATE_SHAREFLOW7A] = C("social", "twitter", "p_cf+share-flow-7a"), s[v.POSTCREATE_SHAREFLOW7B] = C("social", "twitter", "p_cf+share-flow-7b"), s[v.POSTCREATE_CALENDAR1] = C("social", "twitter", "p_cf_cal1"), s[v.POSTCREATE_CALENDAR2] = C("social", "twitter", "p_cf_cal2"), s[v.POSTCREATE_CALENDAR3] = C("social", "twitter", "p_cf_cal3"), s[v.GUIDANCE_DRAWER] = C("social", "twitter", "p_cp_guide_do"), s), n[y.COPY_LINK_SHARESHEET] = ((l = {})[v.CAMPAIGN_PAGE] = C("copy_link", "customer", "p_cp+share-sheet"), l[v.POSTDONATE_MODAL] = C("copy_link", "customer", "m_pd+share-sheet"), l[v.POSTCREATE_CAMPAIGN] = C("copy_link", "customer", "p_cf+share-flow-1"), l[v.POSTCREATE_SHAREFLOW7A] = C("copy_link", "customer", "p_cf+share-flow-7a"), l[v.POSTCREATE_SHAREFLOW7B] = C("copy_link", "customer", "p_cf+share-flow-7b"), l[v.POSTCREATE_CALENDAR1] = C("copy_link", "customer", "p_cf_cal1"), l[v.POSTCREATE_CALENDAR2] = C("copy_link", "customer", "p_cf_cal2"), l[v.POSTCREATE_CALENDAR3] = C("copy_link", "customer", "p_cf_cal3"), l[v.GUIDANCE_DRAWER] = C("copy_link", "customer", "p_cp_guide_do"), l), n[y.COPY_LINK_TIP_SHARESHEET] = ((p = {})[v.CAMPAIGN_PAGE] = C("copy_link-tip", "customer", "p_cp+share-sheet"), p[v.COMMUNITY_POSTDONATE_MODAL] = C("copy_link-tip", "customer", "p_cmty_pd+share-sheet"), p[v.COMMUNITY_SHARE_MODAL] = C("copy_link-tip", "customer", "p_cmty+share-sheet"), p[v.POSTDONATE_MODAL] = C("copy_link-tip", "customer", "m_pd+share-sheet"), p[v.POSTCREATE_CAMPAIGN] = C("copy_link", "customer", "p_cf+share-flow-1"), p[v.POSTCREATE_SHAREFLOW7A] = C("copy_link", "customer", "p_cf+share-flow-7a"), p[v.POSTCREATE_SHAREFLOW7B] = C("copy_link", "customer", "p_cf+share-flow-7b"), p[v.POSTCREATE_CALENDAR1] = C("copy_link-tip", "customer", "p_cf_cal1"), p[v.POSTCREATE_CALENDAR2] = C("copy_link-tip", "customer", "p_cf_cal2"), p[v.POSTCREATE_CALENDAR3] = C("copy_link-tip", "customer", "p_cf_cal3"), p[v.GUIDANCE_DRAWER] = C("copy_link-tip", "customer", "p_cp_guide_do"), p), n[y.COPY_LINK_ALL] = ((u = {})[v.CAMPAIGN_PAGE] = C("copy_link_all", "customer", "p_cp+share-sheet"), u[v.COMMUNITY_POSTDONATE_MODAL] = C("copy_link_all", "customer", "p_cmty_pd+share-sheet"), u[v.COMMUNITY_SHARE_MODAL] = C("copy_link_all", "customer", "p_cmty+share-sheet"), u[v.POSTDONATE_MODAL] = C("copy_link_all", "customer", "m_pd+share-sheet"), u), n[y.COPY_LINK_MORE] = ((d = {})[v.CAMPAIGN_PAGE] = C("copy_link_more", "customer", "p_cp+share-sheet"), d[v.POSTDONATE_MODAL] = C("copy_link_more", "customer", "m_pd+share-sheet"), d), n[y.LINKEDIN_SHARESHEET] = ((m = {})[v.CAMPAIGN_PAGE] = C("social", "linkedIn", "p_cp+share-sheet"), m[v.POSTDONATE_MODAL] = C("social", "linkedIn", "m_pd+share-sheet"), m[v.POSTCREATE_CAMPAIGN] = C("social", "linkedIn", "p_cf+share-flow-1"), m[v.POSTCREATE_SHAREFLOW7A] = C("social", "linkedIn", "p_cf+share-flow-7a"), m[v.POSTCREATE_SHAREFLOW7B] = C("social", "linkedIn", "p_cf+share-flow-7b"), m[v.POSTCREATE_CALENDAR1] = C("social", "linkedIn", "p_cf_cal1"), m[v.POSTCREATE_CALENDAR2] = C("social", "linkedIn", "p_cf_cal2"), m[v.POSTCREATE_CALENDAR3] = C("social", "linkedIn", "p_cf_cal3"), m[v.GUIDANCE_DRAWER] = C("social", "linkedIn", "p_cp_guide_do"), m), n[y.WHATSAPP_SHARESHEET] = ((f = {})[v.CAMPAIGN_PAGE] = C("chat", "whatsApp", "p_cp+share-sheet"), f[v.COMMUNITY_POSTDONATE_MODAL] = C("social", "whatsApp", "p_cmty_pd+share-sheet"), f[v.COMMUNITY_SHARE_MODAL] = C("social", "whatsApp", "p_cmty+share-sheet"), f[v.POSTDONATE_MODAL] = C("social", "whatsApp", "m_pd+share-sheet"), f[v.POSTCREATE_CAMPAIGN] = C("chat", "whatsapp", "p_cf+share-flow-1"), f[v.POSTCREATE_SHAREFLOW7A] = C("chat", "whatsapp", "p_cf+share-flow-7a"), f[v.POSTCREATE_SHAREFLOW7B] = C("chat", "whatsapp", "p_cf+share-flow-7b"), f[v.POSTCREATE_CALENDAR1] = C("chat", "whatsapp", "p_cf_cal1"), f[v.POSTCREATE_CALENDAR2] = C("chat", "whatsapp", "p_cf_cal2"), f[v.POSTCREATE_CALENDAR3] = C("chat", "whatsapp", "p_cf_cal3"), f[v.GUIDANCE_DRAWER] = C("chat", "whatsapp", "p_cp_guide_do"), f), n[y.WHATSAPP_READMORE_SHARESHEET] = ((E = {})[v.CAMPAIGN_PAGE] = C("chat", "whatsapp-visit", "p_cp+share-sheet"), E[v.POSTDONATE_MODAL] = C("social", "whatsapp-visit", "m_pd+share-sheet"), E[v.POSTCREATE_CAMPAIGN] = C("social", "whatsapp-visit", "p_cf+share-flow-1"), E[v.POSTCREATE_SHAREFLOW7A] = C("social", "whatsapp-visit", "p_cf+share-flow-7a"), E[v.POSTCREATE_SHAREFLOW7B] = C("social", "whatsapp-visit", "p_cf+share-flow-7b"), E[v.POSTCREATE_CALENDAR1] = C("social", "whatsapp-visit", "p_cf_cal1"), E[v.POSTCREATE_CALENDAR2] = C("social", "whatsapp-visit", "p_cf_cal2"), E[v.POSTCREATE_CALENDAR3] = C("social", "whatsapp-visit", "p_cf_cal3"), E[v.GUIDANCE_DRAWER] = C("social", "whatsapp-visit", "p_cp_guide_do"), E), n[y.WHATSAPP_DONATE_SHARESHEET] = ((A = {})[v.CAMPAIGN_PAGE] = C("chat", "whatsapp-donate", "p_cp+share-sheet"), A[v.POSTDONATE_MODAL] = C("social", "whatsapp-donate", "m_pd+share-sheet"), A[v.POSTCREATE_CAMPAIGN] = C("social", "whatsapp-donate", "p_cf+share-flow-1"), A[v.POSTCREATE_SHAREFLOW7A] = C("social", "whatsapp-donate", "p_cf+share-flow-7a"), A[v.POSTCREATE_SHAREFLOW7B] = C("social", "whatsapp-donate", "p_cf+share-flow-7b"), A[v.POSTCREATE_CALENDAR1] = C("social", "whatsapp-donate", "p_cf_cal1"), A[v.POSTCREATE_CALENDAR2] = C("social", "whatsapp-donate", "p_cf_cal2"), A[v.POSTCREATE_CALENDAR3] = C("social", "whatsapp-donate", "p_cf_cal3"), A[v.GUIDANCE_DRAWER] = C("social", "whatsapp-donate", "p_cp_guide_do"), A), n[y.FACEBOOK_MESSENGER_SHARESHEET] = ((h = {})[v.CAMPAIGN_PAGE] = C("chat", "messenger", "p_cp+share-sheet"), h[v.POSTDONATE_MODAL] = C("chat", "messenger", "m_pd+share-sheet"), h[v.POSTCREATE_CAMPAIGN] = C("social", "messenger", "p_cf+share-flow-1"), h[v.POSTCREATE_SHAREFLOW7A] = C("social", "messenger", "p_cf+share-flow-7a"), h[v.POSTCREATE_SHAREFLOW7B] = C("social", "messenger", "p_cf+share-flow-7b"), h[v.POSTCREATE_CALENDAR1] = C("social", "messenger", "p_cf_cal1"), h[v.POSTCREATE_CALENDAR2] = C("social", "messenger", "p_cf_cal2"), h[v.POSTCREATE_CALENDAR3] = C("social", "messenger", "p_cf_cal3"), h[v.GUIDANCE_DRAWER] = C("social", "messenger", "p_cp_guide_do"), h), n[y.SMS_SHARESHEET] = ((g = {})[v.CAMPAIGN_PAGE] = C("sms", "customer", "p_cp+share-sheet"), g[v.COMMUNITY_POSTDONATE_MODAL] = C("sms", "customer", "p_cmty_pd+share-sheet"), g[v.COMMUNITY_SHARE_MODAL] = C("sms", "customer", "p_cmty+share-sheet"), g[v.POSTDONATE_MODAL] = C("sms", "customer", "m_pd+share-sheet"), g[v.POSTCREATE_CAMPAIGN] = C("sms", "customer", "p_cf+share-flow-1"), g[v.POSTCREATE_SHAREFLOW7A] = C("sms", "customer", "p_cf+share-flow-7a"), g[v.POSTCREATE_SHAREFLOW7B] = C("sms", "customer", "p_cf+share-flow-7b"), g[v.POSTCREATE_CALENDAR1] = C("sms", "customer", "p_cf_cal1"), g[v.POSTCREATE_CALENDAR2] = C("sms", "customer", "p_cf_cal2"), g[v.POSTCREATE_CALENDAR3] = C("sms", "customer", "p_cf_cal3"), g[v.GUIDANCE_DRAWER] = C("sms", "customer", "p_cp_guide_do"), g), n[y.MORE_SHARESHEET] = ((T = {})[v.CAMPAIGN_PAGE] = C("more", "customer", "p_cp+share-sheet"), T[v.POSTDONATE_MODAL] = C("more", "customer", "m_pd+share-sheet"), T[v.POSTCREATE_CAMPAIGN] = C("more", "customer", "p_cf+share-flow-1"), T[v.POSTCREATE_SHAREFLOW7A] = C("more", "customer", "p_cf+share-flow-7a"), T[v.POSTCREATE_SHAREFLOW7B] = C("more", "customer", "p_cf+share-flow-7b"), T[v.POSTCREATE_CALENDAR1] = C("more", "customer", "p_cf_cal1"), T[v.POSTCREATE_CALENDAR2] = C("more", "customer", "p_cf_cal2"), T[v.POSTCREATE_CALENDAR3] = C("more", "customer", "p_cf_cal3"), T[v.GUIDANCE_DRAWER] = C("more", "customer", "p_cp_guide_do"), T), n[y.SMS_ANDROID_SHARESHEET] = ((b = {})[v.CAMPAIGN_PAGE] = C("sms", "customer-andr", "p_cp+share-sheet"), b[v.COMMUNITY_POSTDONATE_MODAL] = C("sms", "customer-andr", "p_cmty_pd+share-sheet"), b[v.COMMUNITY_SHARE_MODAL] = C("sms", "customer-andr", "p_cmty+share-sheet"), b[v.POSTDONATE_MODAL] = C("sms", "customer-andr", "m_pd+share-sheet"), b[v.POSTCREATE_CAMPAIGN] = C("sms", "customer-andr", "p_cf+share-flow-1"), b[v.POSTCREATE_SHAREFLOW7A] = C("sms", "customer-andr", "p_cf+share-flow-7a"), b[v.POSTCREATE_SHAREFLOW7B] = C("sms", "customer-andr", "p_cf+share-flow-7b"), b[v.POSTCREATE_CALENDAR1] = C("sms", "customer-andr", "p_cf_cal1"), b[v.POSTCREATE_CALENDAR2] = C("sms", "customer-andr", "p_cf_cal2"), b[v.POSTCREATE_CALENDAR3] = C("sms", "customer-andr", "p_cf_cal3"), b[v.GUIDANCE_DRAWER] = C("sms", "customer-andr", "p_cp_guide_do"), b), n[y.EMBED_WIDGET_DONATE] = ((O = {})[v.CAMPAIGN_PAGE] = C("referral", "widget", "p_cp+share-sheet"), O[v.POSTDONATE_MODAL] = C("referral", "widget", "m_pd+share-sheet"), O[v.POSTCREATE_CAMPAIGN] = C("referral", "widget", "p_cf+share-flow-1"), O[v.POSTCREATE_SHAREFLOW7A] = C("referral", "widget", "p_cf+share-flow-7a"), O[v.POSTCREATE_SHAREFLOW7B] = C("referral", "widget", "p_cf+share-flow-7b"), O[v.POSTCREATE_CALENDAR1] = C("referral", "widget", "p_cf_cal1"), O[v.POSTCREATE_CALENDAR2] = C("referral", "widget", "p_cf_cal2"), O[v.POSTCREATE_CALENDAR3] = C("referral", "widget", "p_cf_cal3"), O[v.GUIDANCE_DRAWER] = C("referral", "widget", "p_cp_guide_do"), O), n[y.PRINT_POSTER] = ((S = {})[v.CAMPAIGN_PAGE] = C("referral", "poster", "p_cp+share-sheet"), S[v.POSTDONATE_MODAL] = C("referral", "poster", "m_pd+share-sheet"), S[v.POSTCREATE_CAMPAIGN] = C("referral", "poster", "p_cf+share-flow-1"), S[v.POSTCREATE_SHAREFLOW7A] = C("referral", "poster", "p_cf+share-flow-7a"), S[v.POSTCREATE_SHAREFLOW7B] = C("referral", "poster", "p_cf+share-flow-7b"), S[v.POSTCREATE_CALENDAR1] = C("referral", "poster", "p_cf_cal1"), S[v.POSTCREATE_CALENDAR2] = C("referral", "poster", "p_cf_cal2"), S[v.POSTCREATE_CALENDAR3] = C("referral", "poster", "p_cf_cal3"), S[v.GUIDANCE_DRAWER] = C("referral", "poster", "p_cp_guide_do"), S), n[y.ADDRESS_BAR] = ((R = {})[v.CAMPAIGN_PAGE] = C("os", "customer", "p_cp_url"), R), n);
        function C(e, t, a) {
            return {
                medium: e,
                source: t,
                campaign: a
            }
        }
        function w(e) {
            return "utm_source=" + e.source + "&utm_medium=" + e.medium + "&utm_campaign=" + e.campaign
        }
        function N(e) {
            return "utm_" === e.slice(0, 4)
        }
        t.makeUtm = C,
        t.getUtm = function(e, t) {
            return P[e][t] ? P[e][t] : (console.warn("WARN @ssr-frontend/packages-util-utm missing UTM. " + e + " from UtmKeys and " + t + " from UtmFromKeys do not have a UTM. See the utms object in packages/util-utm/index.ts"), {})
        },
        t.makeEncodedUtm = function(e, t) {
            return w(P[e][t])
        },
        t.encodeUtm = w,
        t.isUtmParam = N,
        t.removeUtmParams = function() {
            if (k.canUseHistory() && k.canUseLocation() && history && history.replaceState && location.search) {
                var e = location.search.slice(1).split("&"),
                    t = e.filter((function(e) {
                        return !N(e)
                    }));
                if (t.length < e.length) {
                    var a = t.length ? "?" + t.join("&") : "",
                        n = location.pathname + a + location.hash;
                    history.replaceState({}, "", n)
                }
            }
        }
    },
    Jsjy: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("QuWQ"),
            c = function() {
                function e(e, t) {
                    this.data = {},
                    this.name = "MagritteExposure",
                    this.targetUrlTracking = "",
                    this.exposureTracked = {},
                    this.targetUrlTracking = t,
                    this.httpRequestClient = e
                }
                return e.prototype.init = function() {}, e.prototype.instanceOfDataType = function(e) {
                    return !0
                }, e.prototype.prepareData = function(e) {
                    return e
                }, e.prototype.trackExposure = function(e, t) {
                    return this.track(e, t)
                }, e.prototype.isReady = function() {
                    return !0
                }, e.prototype.getHttpRequestClient = function() {
                    return this.httpRequestClient
                }, e.prototype.track = function(e, t) {
                    var a = {
                        data: {
                            extras: {
                                browser: n.browser(),
                                os: n.getOs()
                            },
                            inputs: {},
                            name: e.experiment ? e.experiment.name : "",
                            params: {},
                            time: Date.now()
                        },
                        platform: e.platform
                    };
                    return e.experiment && e.experiment.distinctId && (a.data.extras.distinct_id = e.experiment.distinctId, a.data.inputs.distinct_id = e.experiment.distinctId), e.experiment && e.experiment.fundId && (a.data.inputs.fund_id = e.experiment.fundId), e.experiment && e.experiment.personId && (a.data.inputs.person_id = e.experiment.personId), e.experiment && e.experiment.userId && (a.data.inputs.user_id = e.experiment.userId), e.experiment && e.experiment.variant && (a.data.params.flow = e.experiment.variant), e.experiment && this.exposureTracked[e.experiment.name] ? (t && t(a, {}), a) : (this.httpRequestClient.post(this.targetUrlTracking, a).then((function(e) {
                        t && t(a, e)
                    })), e.experiment && (this.exposureTracked[e.experiment.name] = !0), a)
                }, e
            }();
        t.default = c
    },
    K9qA: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.domHelper = t.DomHelper = t.setBodyOverflow = t.disableClicksOnContainer = t.createPortal = t.canUseSessionStorage = t.canUseLocalStorage = t.canUseWindow = t.canUseLocation = t.canUseHistory = t.canUseDom = void 0;
        var c = n(a("i8i4"));
        function r() {
            return "undefined" != typeof document
        }
        function i() {
            return "undefined" != typeof window
        }
        t.canUseDom = r,
        t.canUseHistory = function() {
            return "undefined" != typeof history
        },
        t.canUseLocation = function() {
            return "undefined" != typeof location
        },
        t.canUseWindow = i,
        t.canUseLocalStorage = function() {
            return r() && "undefined" != typeof localStorage
        },
        t.canUseSessionStorage = function() {
            return r() && "undefined" != typeof sessionStorage
        },
        t.createPortal = function(e, t) {
            return !!i() && c.default.createPortal(e, t)
        },
        t.disableClicksOnContainer = function(e) {
            if (r()) {
                var t = document.getElementById(e);
                if (t) {
                    var a = function(e) {
                        return e.preventDefault(), e.stopPropagation(), !1
                    };
                    t.addEventListener("click", a),
                    t.addEventListener("contextmenu", a),
                    t.querySelectorAll("a").forEach((function(e) {
                        e && (e.href = "javascript:void(0);", e.setAttribute("data-element-id", ""))
                    })),
                    t.querySelectorAll("button").forEach((function(e) {
                        e && e.setAttribute("data-element-id", "")
                    }))
                }
            }
        },
        t.setBodyOverflow = function(e) {
            void 0 === e && (e = ""),
            r() && (document.body.style.overflow = e)
        };
        var _ = function() {
            function e(e) {
                this.reactDom = e
            }
            return e.prototype.canUseDom = function() {
                return "undefined" != typeof window
            }, e.prototype.createPortal = function(e, t) {
                return !!this.canUseDom() && this.reactDom.createPortal(e, t)
            }, e.prototype.openMailTo = function(e, t) {
                void 0 === e && (e = ""),
                void 0 === t && (t = "");
                var a = encodeURIComponent(e),
                    n = encodeURIComponent(t);
                if (this.canUseDom()) {
                    var c = "mailto:?subject=" + n + "&body=" + a;
                    console.log("open Mail To: " + c),
                    window.location.assign(c)
                }
            }, e.prototype.copyText = function(e, t) {
                var a = this;
                return new Promise((function(t, n) {
                    if (!a.canUseDom())
                        return n("dom failure");
                    try {
                        if (!("clipboard" in navigator)) {
                            var c = document.createRange(),
                                r = document.getSelection(),
                                i = document.body,
                                _ = document.createElement("span");
                            _.textContent = e,
                            _.style.clip = "rect(0, 0, 0, 0)",
                            _.style.whiteSpace = "pre",
                            _.style.position = "fixed",
                            _.style.opacity = "0",
                            _.style.zIndex = "-10",
                            _.style.webkitUserSelect = "text",
                            _.style.msUserSelect = "text",
                            _.style.userSelect = "text",
                            _.addEventListener("copy", (function(e) {
                                e.stopPropagation()
                            })),
                            i.appendChild(_),
                            c.selectNodeContents(_),
                            r && (r.addRange(c), "function" == typeof r.removeRange ? r.removeRange(c) : r.removeAllRanges());
                            var o = document.execCommand("copy");
                            return i.removeChild(_), o ? t("doc exec success") : n("doc exec failure")
                        }
                        navigator.clipboard.writeText(e).then((function() {
                            return t("navigator success")
                        }), (function() {
                            return n("navigator failure")
                        }))
                    } catch (s) {
                        return n("try failure")
                    }
                }))
            }, e.prototype.openDialogueWindow = function(e, t, a) {
                if (void 0 === t && (t = 400), void 0 === a && (a = 400), !this.canUseDom())
                    return !1;
                var n = window.screenTop || window.screenX || 0,
                    c = window.screenLeft || window.screenY || 0,
                    r = "width=" + t + ", height=" + a + ", top=" + (n + (this.getViewPortHeight() - a) / 2) + ", left=" + (c + (this.getViewPortWidth() - t) / 2);
                try {
                    return window.open(e, "_blank", r), !0
                } catch (i) {
                    return !1
                }
            }, e.prototype.getViewPortHeight = function() {
                return this.canUseDom() && (window.outerHeight || document.body.clientHeight || screen.height) || 0
            }, e.prototype.getViewPortWidth = function() {
                return this.canUseDom() && (window.outerWidth || document.body.clientWidth || screen.width) || 0
            }, e
        }();
        t.DomHelper = _,
        t.domHelper = new _(c.default)
    },
    KLs3: function(e, t, a) {
        "use strict";
        var n,
            c;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.IsoCodes = t.getCurrencySymbolByIsoCode = t.getCurrencyCountryByIsoCode = void 0,
        function(e) {
            e.AUD = "AUD",
            e.CAD = "CAD",
            e.EUR = "EUR",
            e.GBP = "GBP",
            e.ZAR = "ZAR",
            e.SEK = "SEK",
            e.DKK = "DKK",
            e.NOK = "NOK",
            e.MXN = "MXN",
            e.USD = "USD",
            e.SGD = "SGD",
            e.CHF = "CHF"
        }(c || (c = {})),
        t.IsoCodes = c;
        var r = ((n = {})[c.AUD] = {
            mark: "$",
            country: "AU"
        }, n[c.CAD] = {
            mark: "$",
            country: "CA"
        }, n[c.CHF] = {
            mark: "CHF",
            country: "CH"
        }, n[c.DKK] = {
            mark: "kr",
            country: "DK"
        }, n[c.EUR] = {
            mark: "€",
            country: ""
        }, n[c.GBP] = {
            mark: "£",
            country: "GB"
        }, n[c.MXN] = {
            mark: "$",
            country: "MX"
        }, n[c.NOK] = {
            mark: "kr",
            country: "NO"
        }, n[c.SEK] = {
            mark: "kr",
            country: "SE"
        }, n[c.SGD] = {
            mark: "$",
            country: "SG"
        }, n[c.USD] = {
            mark: "$",
            country: "US"
        }, n[c.ZAR] = {
            mark: "R",
            country: "ZA"
        }, n);
        t.getCurrencySymbolByIsoCode = function(e) {
            var t = e.toUpperCase();
            return t in c ? r[c[t]].mark : "$"
        },
        t.getCurrencyCountryByIsoCode = function(e) {
            var t = e.toUpperCase();
            return t in c ? r[c[t]].country : "US"
        }
    },
    Kb5c: function(e, t, a) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function(e, t, a, n) {
                void 0 === n && (n = a),
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function() {
                        return t[a]
                    }
                })
            } : function(e, t, a, n) {
                void 0 === n && (n = a),
                e[n] = t[a]
            }),
            c = this && this.__exportStar || function(e, t) {
                for (var a in e)
                    "default" === a || t.hasOwnProperty(a) || n(t, e, a)
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        c(a("d8of"), t)
    },
    LTfk: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = n(a("IDcL")),
            r = function() {
                function e(e) {
                    this.isDebugOn = !1,
                    this.trackEvents = e
                }
                return e.prototype.verbose = function() {
                    var e = this;
                    this.isDebugOn = !0,
                    c.default.callBack = function(t, a) {
                        e.consoleLog("push sent and successful"),
                        e.consoleLog("Payload"),
                        e.consoleLog(t),
                        e.consoleLog("Response"),
                        e.consoleLog(a)
                    };
                    var t = this.trackEvents.getPlatforms();
                    Object.keys(t).forEach((function(a) {
                        var n = t[a],
                            c = n.push.bind(n);
                        n.push = function(t, a) {
                            return e.consoleLog("We are about to push some elements to " + n.name), e.consoleLog(t), c(t, a)
                        }
                    })),
                    this.consoleLog("We are now ready to debug")
                }, e.prototype.consoleLog = function(e) {
                    this.isDebugOn && ("string" == typeof e ? console.log("%cDEBUG ANALYTICS - " + e, "color: #00B964") : console.log("%cDEBUG ANALYTICS - ", "color: #00B964", e))
                }, e
            }();
        t.default = r
    },
    Ljcy: function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
            return (n = Object.assign || function(e) {
                for (var t, a = 1, n = arguments.length; a < n; a++)
                    for (var c in t = arguments[a])
                        Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
                return e
            }).apply(this, arguments)
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.formatWithAbbrev = t.formatAsCurrency = t.format = t.setFormatProps = t.setCurrencyProps = t.init = t.localeNumberFormatter = void 0;
        var c = a("wE+H"),
            r = a("KLs3"),
            i = a("VU+c"),
            _ = a("hXCg");
        function o(e, a) {
            return void 0 === a && (a = t.localeNumberFormatter.formatProps), e.toLocaleString(i.getBCP47Locale(t.localeNumberFormatter.locale), a)
        }
        t.localeNumberFormatter = {
            currencyFormatProps: {
                currency: "USD"
            },
            formatProps: {
                maximumFractionDigits: 0,
                minimumFractionDigits: 0
            },
            locale: c.SupportedLocales.ENGLISH_US
        },
        t.init = function(e) {
            var a = i.getISO15897Locale(e),
                n = Object.values(c.SupportedLocales);
            t.localeNumberFormatter.locale = n.includes(a) ? a : c.SupportedLocales.ENGLISH_GB
        },
        t.setCurrencyProps = function(e) {
            t.localeNumberFormatter.currencyFormatProps = e
        },
        t.setFormatProps = function(e) {
            t.localeNumberFormatter.formatProps = e
        },
        t.format = o,
        t.formatAsCurrency = function(e, a, i) {
            var _ = n(n({
                currencyDisplay: "symbol",
                style: "currency"
            }, t.localeNumberFormatter.currencyFormatProps), a);
            return function(e, a) {
                switch (t.localeNumberFormatter.locale) {
                case c.SupportedLocales.DUTCH_NL:
                case c.SupportedLocales.ENGLISH_GB:
                case c.SupportedLocales.PORTUGUESE_BR:
                    return a + e;
                case c.SupportedLocales.FRENCH_FR:
                case c.SupportedLocales.GERMAN_DE:
                case c.SupportedLocales.ITALIAN_IT:
                case c.SupportedLocales.SPANISH_ES:
                    return e + " " + a;
                default:
                    return a + e
                }
            }(o(e, i), r.getCurrencySymbolByIsoCode(_.currency))
        },
        t.formatWithAbbrev = function(e, a, n) {
            void 0 === a && (a = !0),
            void 0 === n && (n = 0);
            var r = _.numberAbbrev(e, a, n),
                o = r.abbrevNum,
                s = r.suffix,
                l = t.localeNumberFormatter.formatProps;
            return n > 0 && (l = {
                maximumFractionDigits: Math.min(n, ("" + e).length),
                minimumFractionDigits: 0
            }), o.toLocaleString(i.getBCP47Locale(t.localeNumberFormatter.locale), l) + function(e) {
                var a,
                    n,
                    r,
                    i,
                    o,
                    s,
                    l = ((a = {})[c.SupportedLocales.FRENCH_FR] = ((n = {})[_.AbbrevSuffix.THOUSAND] = " k", n[_.AbbrevSuffix.MILLION] = " M", n[_.AbbrevSuffix.BILLION] = " Mrd", n), a[c.SupportedLocales.SPANISH_ES] = ((r = {})[_.AbbrevSuffix.THOUSAND] = "k", r[_.AbbrevSuffix.MILLION] = " M", r[_.AbbrevSuffix.BILLION] = " MM", r), a[c.SupportedLocales.GERMAN_DE] = ((i = {})[_.AbbrevSuffix.THOUSAND] = " T", i[_.AbbrevSuffix.MILLION] = " Mio.", i[_.AbbrevSuffix.BILLION] = " Mrd.", i), a[c.SupportedLocales.DUTCH_NL] = ((o = {})[_.AbbrevSuffix.THOUSAND] = "k", o[_.AbbrevSuffix.MILLION] = " mln.", o[_.AbbrevSuffix.BILLION] = " mld.", o), a[c.SupportedLocales.ITALIAN_IT] = ((s = {})[_.AbbrevSuffix.THOUSAND] = "k", s[_.AbbrevSuffix.MILLION] = "mio", s[_.AbbrevSuffix.BILLION] = "mlrd", s), a);
                return l[t.localeNumberFormatter.locale] && l[t.localeNumberFormatter.locale][e] || e
            }(s)
        }
    },
    M0eQ: function(e, t, a) {
        var n = a("WdIC"),
            c = a("pYmI"),
            r = c;
        r.v1 = n,
        r.v4 = c,
        e.exports = r
    },
    M9U4: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = n(a("q1tI")),
            r = a("qhky"),
            i = a("86hk");
        function _(e) {
            var t = e.children,
                a = e.description,
                n = e.noFollow,
                _ = e.title,
                o = e.url;
            return c.default.createElement(c.default.Fragment, null, c.default.createElement(r.Helmet, null, c.default.createElement("title", null, _), c.default.createElement("meta", {
                charSet: "utf-8"
            }), c.default.createElement("meta", {
                "http-equiv": "x-ua-compatible",
                content: "ie=edge"
            }), n && c.default.createElement("meta", {
                name: "robots",
                content: "noindex"
            }), c.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1.0"
            }), c.default.createElement("meta", {
                name: "description",
                content: a
            })), c.default.createElement(i.Favicon, null), !!o && !n && c.default.createElement(i.Canonicals, {
                url: o
            }), t)
        }
        _.defaultProps = {
            noFollow: !1
        },
        t.default = _
    },
    "MS/s": function(e, t, a) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function(e, t, a, n) {
                void 0 === n && (n = a),
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function() {
                        return t[a]
                    }
                })
            } : function(e, t, a, n) {
                void 0 === n && (n = a),
                e[n] = t[a]
            }),
            c = this && this.__exportStar || function(e, t) {
                for (var a in e)
                    "default" === a || t.hasOwnProperty(a) || n(t, e, a)
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        c(a("MnUf"), t),
        c(a("uDfO"), t),
        c(a("wG7O"), t)
    },
    MgMj: function(e, t, a) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function(e, t, a, n) {
                void 0 === n && (n = a),
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function() {
                        return t[a]
                    }
                })
            } : function(e, t, a, n) {
                void 0 === n && (n = a),
                e[n] = t[a]
            }),
            c = this && this.__exportStar || function(e, t) {
                for (var a in e)
                    "default" === a || t.hasOwnProperty(a) || n(t, e, a)
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        c(a("v2ML"), t),
        c(a("PxtD"), t),
        c(a("PFLP"), t)
    },
    MnUf: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.AlgoliaTag = t.ALGOLIA_SEARCH_API_KEY = t.ALGOLIA_SEARCH_APP_ID = void 0,
        t.ALGOLIA_SEARCH_APP_ID = "E7PHE9BB38",
        t.ALGOLIA_SEARCH_API_KEY = "447d82ac9832ffcf05fb432dcb65bd08",
        function(e) {
            e.VIEW_DESKTOP = "view:desktop",
            e.VIEW_MOBILE = "view:mobile",
            e.PLATFORM_WEB = "platform:web",
            e.PLATFORM_NATIVE = "platform:native",
            e.PAGE_SRP = "page:srp",
            e.PAGE_CAMPAIGN = "page:campaign",
            e.PAGE_CHARITY = "page:charity"
        }(t.AlgoliaTag || (t.AlgoliaTag = {}))
    },
    "Mp+J": function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = a("IQ6H"),
            r = n(a("hHDc"));
        t.default = c.withOptimizely(r.default)
    },
    N8uQ: function(e, t, a) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function(e, t, a, n) {
                void 0 === n && (n = a),
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function() {
                        return t[a]
                    }
                })
            } : function(e, t, a, n) {
                void 0 === n && (n = a),
                e[n] = t[a]
            }),
            c = this && this.__exportStar || function(e, t) {
                for (var a in e)
                    "default" === a || t.hasOwnProperty(a) || n(t, e, a)
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        c(a("Zd+z"), t),
        c(a("Yxr/"), t)
    },
    Npm8: function(e, t, a) {
        "use strict";
        var n,
            c,
            r,
            i,
            _,
            o,
            s,
            l,
            p,
            u,
            d,
            m,
            f,
            E,
            A,
            h,
            g,
            T,
            b,
            O,
            S,
            R;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.removeUtmParams = t.isUtmParam = t.encodeUtm = t.makeEncodedUtm = t.getUtm = t.makeUtm = t.UtmFromKeys = t.UtmKeys = void 0;
        var y,
            v,
            k = a("K9qA");
        !function(e) {
            e.FACEBOOK_SHARE_SHARESHEET = "FACEBOOK_SHARE_SHARESHEET",
            e.FACEBOOK_SHARE_SHARESHEET_COPY_LINK = "FACEBOOK_SHARE_SHARESHEET_COPY_LINK",
            e.INSTAGRAM_SHARESHEET = "INSTAGRAM_SHARESHEET",
            e.TWITTER_SHARE_SHARESHEET = "TWITTER_SHARE_SHARESHEET",
            e.COPY_LINK_SHARESHEET = "COPY_LINK_SHARESHEET",
            e.COPY_LINK_TIP_SHARESHEET = "COPY_LINK_TIP_SHARESHEET",
            e.COPY_LINK_MORE = "COPY_LINK_MORE",
            e.COPY_LINK_ALL = "COPY_LINK_ALL",
            e.EMAIL_SHARESHEET = "EMAIL_SHARESHEET",
            e.EMAIL_ANDROID_SHARESHEET = "EMAIL_ANDROID_SHARESHEET",
            e.WHATSAPP_SHARESHEET = "WHATSAPP_SHARESHEET",
            e.LINKEDIN_SHARESHEET = "LINKEDIN_SHARESHEET",
            e.WHATSAPP_READMORE_SHARESHEET = "WHATSAPP_READMORE_SHARESHEET",
            e.WHATSAPP_DONATE_SHARESHEET = "WHATSAPP_DONATE_SHARESHEET",
            e.FACEBOOK_MESSENGER_SHARESHEET = "FACEBOOK_MESSENGER_SHARESHEET",
            e.SMS_SHARESHEET = "SMS_SHARESHEET",
            e.SMS_ANDROID_SHARESHEET = "SMS_ANDROID_SHARESHEET",
            e.MORE_SHARESHEET = "MORE_SHARESHEET",
            e.EMBED_WIDGET_DONATE = "EMBED_WIDGET_DONATE",
            e.PRINT_POSTER = "PRINT_POSTER",
            e.ADDRESS_BAR = "ADDRESS_BAR"
        }(y = t.UtmKeys || (t.UtmKeys = {})),
        function(e) {
            e.CAMPAIGN_PAGE = "CAMPAIGN_PAGE",
            e.COMMUNITY_POSTDONATE_MODAL = "COMMUNITY_POSTDONATE_MODAL",
            e.COMMUNITY_SHARE_MODAL = "COMMUNITY_SHARE_MODAL",
            e.POSTDONATE_MODAL = "POSTDONATE_MODAL",
            e.POSTCREATE_CAMPAIGN = "POSTCREATE_CAMPAIGN",
            e.POSTCREATE_SHAREFLOW7A = "POSTCREATE_SHAREFLOW7A",
            e.POSTCREATE_SHAREFLOW7B = "POSTCREATE_SHAREFLOW7B",
            e.POSTCREATE_CALENDAR1 = "POSTCREATE_CALENDAR1",
            e.POSTCREATE_CALENDAR2 = "POSTCREATE_CALENDAR2",
            e.POSTCREATE_CALENDAR3 = "POSTCREATE_CALENDAR3",
            e.GUIDANCE_DRAWER = "GUIDANCE_DRAWER"
        }(v = t.UtmFromKeys || (t.UtmFromKeys = {}));
        var P = ((n = {})[y.EMAIL_SHARESHEET] = ((c = {})[v.CAMPAIGN_PAGE] = C("email", "customer", "p_cp+share-sheet"), c[v.COMMUNITY_POSTDONATE_MODAL] = C("email", "customer", "p_cmty_pd+share-sheet"), c[v.COMMUNITY_SHARE_MODAL] = C("email", "customer", "p_cmty+share-sheet"), c[v.POSTDONATE_MODAL] = C("email", "customer", "m_pd+share-sheet"), c[v.POSTCREATE_CAMPAIGN] = C("email", "customer", "p_cf+share-flow-1"), c[v.POSTCREATE_SHAREFLOW7A] = C("email", "customer", "p_cf+share-flow-7a"), c[v.POSTCREATE_SHAREFLOW7B] = C("email", "customer", "p_cf+share-flow-7b"), c[v.POSTCREATE_CALENDAR1] = C("email", "customer", "p_cf_cal1"), c[v.POSTCREATE_CALENDAR2] = C("email", "customer", "p_cf_cal2"), c[v.POSTCREATE_CALENDAR3] = C("email", "customer", "p_cf_cal3"), c[v.GUIDANCE_DRAWER] = C("email", "customer", "p_cp_guide_do"), c), n[y.EMAIL_ANDROID_SHARESHEET] = ((r = {})[v.CAMPAIGN_PAGE] = C("email", "customer-andr", "p_cp+share-sheet"), r[v.COMMUNITY_POSTDONATE_MODAL] = C("email", "customer-andr", "p_cmty_pd+share-sheet"), r[v.COMMUNITY_SHARE_MODAL] = C("email", "customer-andr", "p_cmty+share-sheet"), r[v.POSTDONATE_MODAL] = C("email", "customer-andr", "m_pd+share-sheet"), r[v.POSTCREATE_CAMPAIGN] = C("email", "customer-andr", "p_cf+share-flow-1"), r[v.POSTCREATE_SHAREFLOW7A] = C("email", "customer-andr", "p_cf+share-flow-7a"), r[v.POSTCREATE_SHAREFLOW7B] = C("email", "customer-andr", "p_cf+share-flow-7b"), r[v.POSTCREATE_CALENDAR1] = C("email", "customer-andr", "p_cf_cal1"), r[v.POSTCREATE_CALENDAR2] = C("email", "customer-andr", "p_cf_cal2"), r[v.POSTCREATE_CALENDAR3] = C("email", "customer-andr", "p_cf_cal3"), r[v.GUIDANCE_DRAWER] = C("email", "customer-andr", "p_cp_guide_do"), r), n[y.FACEBOOK_SHARE_SHARESHEET] = ((i = {})[v.CAMPAIGN_PAGE] = C("social", "facebook", "p_cp+share-sheet"), i[v.COMMUNITY_POSTDONATE_MODAL] = C("social", "facebook", "p_cmty_pd+share-sheet"), i[v.COMMUNITY_SHARE_MODAL] = C("social", "facebook", "p_cmty+share-sheet"), i[v.POSTDONATE_MODAL] = C("social", "facebook", "m_pd+share-sheet"), i[v.POSTCREATE_CAMPAIGN] = C("social", "facebook", "p_cf+share-flow-1"), i[v.POSTCREATE_SHAREFLOW7A] = C("social", "facebook", "p_cf+share-flow-7a"), i[v.POSTCREATE_SHAREFLOW7B] = C("social", "facebook", "p_cf+share-flow-7b"), i[v.POSTCREATE_CALENDAR1] = C("social", "facebook", "p_cf_cal1"), i[v.POSTCREATE_CALENDAR2] = C("social", "facebook", "p_cf_cal2"), i[v.POSTCREATE_CALENDAR3] = C("social", "facebook", "p_cf_cal3"), i[v.GUIDANCE_DRAWER] = C("social", "facebook", "p_cp_guide_do"), i), n[y.FACEBOOK_SHARE_SHARESHEET_COPY_LINK] = ((_ = {})[v.CAMPAIGN_PAGE] = C("social", "fb_copy_link", "p_cp+share-sheet"), _[v.COMMUNITY_POSTDONATE_MODAL] = C("social", "fb_copy_link", "p_cmty_pd+share-sheet"), _[v.COMMUNITY_SHARE_MODAL] = C("social", "fb_copy_link", "p_cmty+share-sheet"), _[v.POSTDONATE_MODAL] = C("social", "fb_copy_link", "m_pd+share-sheet"), _[v.POSTCREATE_CAMPAIGN] = C("social", "fb_copy_link", "p_cf+share-flow-1"), _[v.POSTCREATE_SHAREFLOW7A] = C("social", "fb_copy_link", "p_cf+share-flow-7a"), _[v.POSTCREATE_SHAREFLOW7B] = C("social", "fb_copy_link", "p_cf+share-flow-7b"), _[v.POSTCREATE_CALENDAR1] = C("social", "fb_copy_link", "p_cf_cal1"), _[v.POSTCREATE_CALENDAR2] = C("social", "fb_copy_link", "p_cf_cal2"), _[v.POSTCREATE_CALENDAR3] = C("social", "fb_copy_link", "p_cf_cal3"), _[v.GUIDANCE_DRAWER] = C("social", "fb_copy_link", "p_cp_guide_do"), _), n[y.INSTAGRAM_SHARESHEET] = ((o = {})[v.CAMPAIGN_PAGE] = C("social", "instagram", "p_cp+share-sheet"), o[v.POSTDONATE_MODAL] = C("social", "instagram", "m_pd+share-sheet"), o[v.POSTCREATE_CAMPAIGN] = C("social", "instagram", "p_cf+share-flow-1"), o[v.POSTCREATE_SHAREFLOW7A] = C("social", "instagram", "p_cf+share-flow-7a"), o[v.POSTCREATE_SHAREFLOW7B] = C("social", "instagram", "p_cf+share-flow-7b"), o[v.POSTCREATE_CALENDAR1] = C("social", "instagram", "p_cf_cal1"), o[v.POSTCREATE_CALENDAR2] = C("social", "instagram", "p_cf_cal2"), o[v.POSTCREATE_CALENDAR3] = C("social", "instagram", "p_cf_cal3"), o[v.GUIDANCE_DRAWER] = C("social", "instagram", "p_cp_guide_do"), o), n[y.TWITTER_SHARE_SHARESHEET] = ((s = {})[v.CAMPAIGN_PAGE] = C("social", "twitter", "p_cp+share-sheet"), s[v.COMMUNITY_POSTDONATE_MODAL] = C("social", "twitter", "p_cmty_pd+share-sheet"), s[v.COMMUNITY_SHARE_MODAL] = C("social", "twitter", "p_cmty+share-sheet"), s[v.POSTDONATE_MODAL] = C("social", "twitter", "m_pd+share-sheet"), s[v.POSTCREATE_CAMPAIGN] = C("social", "twitter", "p_cf+share-flow-1"), s[v.POSTCREATE_SHAREFLOW7A] = C("social", "twitter", "p_cf+share-flow-7a"), s[v.POSTCREATE_SHAREFLOW7B] = C("social", "twitter", "p_cf+share-flow-7b"), s[v.POSTCREATE_CALENDAR1] = C("social", "twitter", "p_cf_cal1"), s[v.POSTCREATE_CALENDAR2] = C("social", "twitter", "p_cf_cal2"), s[v.POSTCREATE_CALENDAR3] = C("social", "twitter", "p_cf_cal3"), s[v.GUIDANCE_DRAWER] = C("social", "twitter", "p_cp_guide_do"), s), n[y.COPY_LINK_SHARESHEET] = ((l = {})[v.CAMPAIGN_PAGE] = C("copy_link", "customer", "p_cp+share-sheet"), l[v.POSTDONATE_MODAL] = C("copy_link", "customer", "m_pd+share-sheet"), l[v.POSTCREATE_CAMPAIGN] = C("copy_link", "customer", "p_cf+share-flow-1"), l[v.POSTCREATE_SHAREFLOW7A] = C("copy_link", "customer", "p_cf+share-flow-7a"), l[v.POSTCREATE_SHAREFLOW7B] = C("copy_link", "customer", "p_cf+share-flow-7b"), l[v.POSTCREATE_CALENDAR1] = C("copy_link", "customer", "p_cf_cal1"), l[v.POSTCREATE_CALENDAR2] = C("copy_link", "customer", "p_cf_cal2"), l[v.POSTCREATE_CALENDAR3] = C("copy_link", "customer", "p_cf_cal3"), l[v.GUIDANCE_DRAWER] = C("copy_link", "customer", "p_cp_guide_do"), l), n[y.COPY_LINK_TIP_SHARESHEET] = ((p = {})[v.CAMPAIGN_PAGE] = C("copy_link-tip", "customer", "p_cp+share-sheet"), p[v.COMMUNITY_POSTDONATE_MODAL] = C("copy_link-tip", "customer", "p_cmty_pd+share-sheet"), p[v.COMMUNITY_SHARE_MODAL] = C("copy_link-tip", "customer", "p_cmty+share-sheet"), p[v.POSTDONATE_MODAL] = C("copy_link-tip", "customer", "m_pd+share-sheet"), p[v.POSTCREATE_CAMPAIGN] = C("copy_link", "customer", "p_cf+share-flow-1"), p[v.POSTCREATE_SHAREFLOW7A] = C("copy_link", "customer", "p_cf+share-flow-7a"), p[v.POSTCREATE_SHAREFLOW7B] = C("copy_link", "customer", "p_cf+share-flow-7b"), p[v.POSTCREATE_CALENDAR1] = C("copy_link-tip", "customer", "p_cf_cal1"), p[v.POSTCREATE_CALENDAR2] = C("copy_link-tip", "customer", "p_cf_cal2"), p[v.POSTCREATE_CALENDAR3] = C("copy_link-tip", "customer", "p_cf_cal3"), p[v.GUIDANCE_DRAWER] = C("copy_link-tip", "customer", "p_cp_guide_do"), p), n[y.COPY_LINK_ALL] = ((u = {})[v.CAMPAIGN_PAGE] = C("copy_link_all", "customer", "p_cp+share-sheet"), u[v.COMMUNITY_POSTDONATE_MODAL] = C("copy_link_all", "customer", "p_cmty_pd+share-sheet"), u[v.COMMUNITY_SHARE_MODAL] = C("copy_link_all", "customer", "p_cmty+share-sheet"), u[v.POSTDONATE_MODAL] = C("copy_link_all", "customer", "m_pd+share-sheet"), u), n[y.COPY_LINK_MORE] = ((d = {})[v.CAMPAIGN_PAGE] = C("copy_link_more", "customer", "p_cp+share-sheet"), d[v.POSTDONATE_MODAL] = C("copy_link_more", "customer", "m_pd+share-sheet"), d), n[y.LINKEDIN_SHARESHEET] = ((m = {})[v.CAMPAIGN_PAGE] = C("social", "linkedIn", "p_cp+share-sheet"), m[v.POSTDONATE_MODAL] = C("social", "linkedIn", "m_pd+share-sheet"), m[v.POSTCREATE_CAMPAIGN] = C("social", "linkedIn", "p_cf+share-flow-1"), m[v.POSTCREATE_SHAREFLOW7A] = C("social", "linkedIn", "p_cf+share-flow-7a"), m[v.POSTCREATE_SHAREFLOW7B] = C("social", "linkedIn", "p_cf+share-flow-7b"), m[v.POSTCREATE_CALENDAR1] = C("social", "linkedIn", "p_cf_cal1"), m[v.POSTCREATE_CALENDAR2] = C("social", "linkedIn", "p_cf_cal2"), m[v.POSTCREATE_CALENDAR3] = C("social", "linkedIn", "p_cf_cal3"), m[v.GUIDANCE_DRAWER] = C("social", "linkedIn", "p_cp_guide_do"), m), n[y.WHATSAPP_SHARESHEET] = ((f = {})[v.CAMPAIGN_PAGE] = C("chat", "whatsApp", "p_cp+share-sheet"), f[v.COMMUNITY_POSTDONATE_MODAL] = C("social", "whatsApp", "p_cmty_pd+share-sheet"), f[v.COMMUNITY_SHARE_MODAL] = C("social", "whatsApp", "p_cmty+share-sheet"), f[v.POSTDONATE_MODAL] = C("social", "whatsApp", "m_pd+share-sheet"), f[v.POSTCREATE_CAMPAIGN] = C("chat", "whatsapp", "p_cf+share-flow-1"), f[v.POSTCREATE_SHAREFLOW7A] = C("chat", "whatsapp", "p_cf+share-flow-7a"), f[v.POSTCREATE_SHAREFLOW7B] = C("chat", "whatsapp", "p_cf+share-flow-7b"), f[v.POSTCREATE_CALENDAR1] = C("chat", "whatsapp", "p_cf_cal1"), f[v.POSTCREATE_CALENDAR2] = C("chat", "whatsapp", "p_cf_cal2"), f[v.POSTCREATE_CALENDAR3] = C("chat", "whatsapp", "p_cf_cal3"), f[v.GUIDANCE_DRAWER] = C("chat", "whatsapp", "p_cp_guide_do"), f), n[y.WHATSAPP_READMORE_SHARESHEET] = ((E = {})[v.CAMPAIGN_PAGE] = C("chat", "whatsapp-visit", "p_cp+share-sheet"), E[v.POSTDONATE_MODAL] = C("social", "whatsapp-visit", "m_pd+share-sheet"), E[v.POSTCREATE_CAMPAIGN] = C("social", "whatsapp-visit", "p_cf+share-flow-1"), E[v.POSTCREATE_SHAREFLOW7A] = C("social", "whatsapp-visit", "p_cf+share-flow-7a"), E[v.POSTCREATE_SHAREFLOW7B] = C("social", "whatsapp-visit", "p_cf+share-flow-7b"), E[v.POSTCREATE_CALENDAR1] = C("social", "whatsapp-visit", "p_cf_cal1"), E[v.POSTCREATE_CALENDAR2] = C("social", "whatsapp-visit", "p_cf_cal2"), E[v.POSTCREATE_CALENDAR3] = C("social", "whatsapp-visit", "p_cf_cal3"), E[v.GUIDANCE_DRAWER] = C("social", "whatsapp-visit", "p_cp_guide_do"), E), n[y.WHATSAPP_DONATE_SHARESHEET] = ((A = {})[v.CAMPAIGN_PAGE] = C("chat", "whatsapp-donate", "p_cp+share-sheet"), A[v.POSTDONATE_MODAL] = C("social", "whatsapp-donate", "m_pd+share-sheet"), A[v.POSTCREATE_CAMPAIGN] = C("social", "whatsapp-donate", "p_cf+share-flow-1"), A[v.POSTCREATE_SHAREFLOW7A] = C("social", "whatsapp-donate", "p_cf+share-flow-7a"), A[v.POSTCREATE_SHAREFLOW7B] = C("social", "whatsapp-donate", "p_cf+share-flow-7b"), A[v.POSTCREATE_CALENDAR1] = C("social", "whatsapp-donate", "p_cf_cal1"), A[v.POSTCREATE_CALENDAR2] = C("social", "whatsapp-donate", "p_cf_cal2"), A[v.POSTCREATE_CALENDAR3] = C("social", "whatsapp-donate", "p_cf_cal3"), A[v.GUIDANCE_DRAWER] = C("social", "whatsapp-donate", "p_cp_guide_do"), A), n[y.FACEBOOK_MESSENGER_SHARESHEET] = ((h = {})[v.CAMPAIGN_PAGE] = C("chat", "messenger", "p_cp+share-sheet"), h[v.POSTDONATE_MODAL] = C("chat", "messenger", "m_pd+share-sheet"), h[v.POSTCREATE_CAMPAIGN] = C("social", "messenger", "p_cf+share-flow-1"), h[v.POSTCREATE_SHAREFLOW7A] = C("social", "messenger", "p_cf+share-flow-7a"), h[v.POSTCREATE_SHAREFLOW7B] = C("social", "messenger", "p_cf+share-flow-7b"), h[v.POSTCREATE_CALENDAR1] = C("social", "messenger", "p_cf_cal1"), h[v.POSTCREATE_CALENDAR2] = C("social", "messenger", "p_cf_cal2"), h[v.POSTCREATE_CALENDAR3] = C("social", "messenger", "p_cf_cal3"), h[v.GUIDANCE_DRAWER] = C("social", "messenger", "p_cp_guide_do"), h), n[y.SMS_SHARESHEET] = ((g = {})[v.CAMPAIGN_PAGE] = C("sms", "customer", "p_cp+share-sheet"), g[v.COMMUNITY_POSTDONATE_MODAL] = C("sms", "customer", "p_cmty_pd+share-sheet"), g[v.COMMUNITY_SHARE_MODAL] = C("sms", "customer", "p_cmty+share-sheet"), g[v.POSTDONATE_MODAL] = C("sms", "customer", "m_pd+share-sheet"), g[v.POSTCREATE_CAMPAIGN] = C("sms", "customer", "p_cf+share-flow-1"), g[v.POSTCREATE_SHAREFLOW7A] = C("sms", "customer", "p_cf+share-flow-7a"), g[v.POSTCREATE_SHAREFLOW7B] = C("sms", "customer", "p_cf+share-flow-7b"), g[v.POSTCREATE_CALENDAR1] = C("sms", "customer", "p_cf_cal1"), g[v.POSTCREATE_CALENDAR2] = C("sms", "customer", "p_cf_cal2"), g[v.POSTCREATE_CALENDAR3] = C("sms", "customer", "p_cf_cal3"), g[v.GUIDANCE_DRAWER] = C("sms", "customer", "p_cp_guide_do"), g), n[y.MORE_SHARESHEET] = ((T = {})[v.CAMPAIGN_PAGE] = C("more", "customer", "p_cp+share-sheet"), T[v.POSTDONATE_MODAL] = C("more", "customer", "m_pd+share-sheet"), T[v.POSTCREATE_CAMPAIGN] = C("more", "customer", "p_cf+share-flow-1"), T[v.POSTCREATE_SHAREFLOW7A] = C("more", "customer", "p_cf+share-flow-7a"), T[v.POSTCREATE_SHAREFLOW7B] = C("more", "customer", "p_cf+share-flow-7b"), T[v.POSTCREATE_CALENDAR1] = C("more", "customer", "p_cf_cal1"), T[v.POSTCREATE_CALENDAR2] = C("more", "customer", "p_cf_cal2"), T[v.POSTCREATE_CALENDAR3] = C("more", "customer", "p_cf_cal3"), T[v.GUIDANCE_DRAWER] = C("more", "customer", "p_cp_guide_do"), T), n[y.SMS_ANDROID_SHARESHEET] = ((b = {})[v.CAMPAIGN_PAGE] = C("sms", "customer-andr", "p_cp+share-sheet"), b[v.COMMUNITY_POSTDONATE_MODAL] = C("sms", "customer-andr", "p_cmty_pd+share-sheet"), b[v.COMMUNITY_SHARE_MODAL] = C("sms", "customer-andr", "p_cmty+share-sheet"), b[v.POSTDONATE_MODAL] = C("sms", "customer-andr", "m_pd+share-sheet"), b[v.POSTCREATE_CAMPAIGN] = C("sms", "customer-andr", "p_cf+share-flow-1"), b[v.POSTCREATE_SHAREFLOW7A] = C("sms", "customer-andr", "p_cf+share-flow-7a"), b[v.POSTCREATE_SHAREFLOW7B] = C("sms", "customer-andr", "p_cf+share-flow-7b"), b[v.POSTCREATE_CALENDAR1] = C("sms", "customer-andr", "p_cf_cal1"), b[v.POSTCREATE_CALENDAR2] = C("sms", "customer-andr", "p_cf_cal2"), b[v.POSTCREATE_CALENDAR3] = C("sms", "customer-andr", "p_cf_cal3"), b[v.GUIDANCE_DRAWER] = C("sms", "customer-andr", "p_cp_guide_do"), b), n[y.EMBED_WIDGET_DONATE] = ((O = {})[v.CAMPAIGN_PAGE] = C("referral", "widget", "p_cp+share-sheet"), O[v.POSTDONATE_MODAL] = C("referral", "widget", "m_pd+share-sheet"), O[v.POSTCREATE_CAMPAIGN] = C("referral", "widget", "p_cf+share-flow-1"), O[v.POSTCREATE_SHAREFLOW7A] = C("referral", "widget", "p_cf+share-flow-7a"), O[v.POSTCREATE_SHAREFLOW7B] = C("referral", "widget", "p_cf+share-flow-7b"), O[v.POSTCREATE_CALENDAR1] = C("referral", "widget", "p_cf_cal1"), O[v.POSTCREATE_CALENDAR2] = C("referral", "widget", "p_cf_cal2"), O[v.POSTCREATE_CALENDAR3] = C("referral", "widget", "p_cf_cal3"), O[v.GUIDANCE_DRAWER] = C("referral", "widget", "p_cp_guide_do"), O), n[y.PRINT_POSTER] = ((S = {})[v.CAMPAIGN_PAGE] = C("referral", "poster", "p_cp+share-sheet"), S[v.POSTDONATE_MODAL] = C("referral", "poster", "m_pd+share-sheet"), S[v.POSTCREATE_CAMPAIGN] = C("referral", "poster", "p_cf+share-flow-1"), S[v.POSTCREATE_SHAREFLOW7A] = C("referral", "poster", "p_cf+share-flow-7a"), S[v.POSTCREATE_SHAREFLOW7B] = C("referral", "poster", "p_cf+share-flow-7b"), S[v.POSTCREATE_CALENDAR1] = C("referral", "poster", "p_cf_cal1"), S[v.POSTCREATE_CALENDAR2] = C("referral", "poster", "p_cf_cal2"), S[v.POSTCREATE_CALENDAR3] = C("referral", "poster", "p_cf_cal3"), S[v.GUIDANCE_DRAWER] = C("referral", "poster", "p_cp_guide_do"), S), n[y.ADDRESS_BAR] = ((R = {})[v.CAMPAIGN_PAGE] = C("os", "customer", "p_cp_url"), R), n);
        function C(e, t, a) {
            return {
                medium: e,
                source: t,
                campaign: a
            }
        }
        function w(e) {
            return "utm_source=" + e.source + "&utm_medium=" + e.medium + "&utm_campaign=" + e.campaign
        }
        function N(e) {
            return "utm_" === e.slice(0, 4)
        }
        t.makeUtm = C,
        t.getUtm = function(e, t) {
            return P[e][t] ? P[e][t] : (console.warn("WARN @ssr-frontend/packages-util-utm missing UTM. " + e + " from UtmKeys and " + t + " from UtmFromKeys do not have a UTM. See the utms object in packages/util-utm/index.ts"), {})
        },
        t.makeEncodedUtm = function(e, t) {
            return w(P[e][t])
        },
        t.encodeUtm = w,
        t.isUtmParam = N,
        t.removeUtmParams = function() {
            if (k.canUseHistory() && k.canUseLocation() && history && history.replaceState && location.search) {
                var e = location.search.slice(1).split("&"),
                    t = e.filter((function(e) {
                        return !N(e)
                    }));
                if (t.length < e.length) {
                    var a = t.length ? "?" + t.join("&") : "",
                        n = location.pathname + a + location.hash;
                    history.replaceState({}, "", n)
                }
            }
        }
    },
    "O+1g": function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = n(a("M0eQ")),
            r = ".gofundme.com",
            i = ".gfm-test01.com",
            _ = function() {
                function e(e) {
                    this.cookies = e,
                    this.distinctId = ""
                }
                return e.getInstance = function(t) {
                    return this.instance || (this.instance = new e(t)), this.instance
                }, e.prototype.getDistinctId = function() {
                    if (this.distinctId)
                        return this.distinctId;
                    var e = this.cookies.get("gdid");
                    return e ? this.distinctId = e : this.setDistinctId(c.default.v4()), this.distinctId
                }, e.prototype.setDistinctId = function(e) {
                    this.distinctId = e,
                    this.cookies.set("gdid", this.distinctId, {
                        domain: this.isStaging ? i : r,
                        expires: 3650
                    })
                }, e.prototype.setStaging = function() {
                    this.isStaging = !0
                }, e
            }();
        t.default = _
    },
    OHXh: function(e, t, a) {
        "use strict";
        var n,
            c,
            r,
            i,
            _,
            o,
            s,
            l,
            p,
            u,
            d,
            m,
            f,
            E,
            A,
            h,
            g,
            T,
            b,
            O,
            S,
            R,
            y;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.removeUtmParams = t.isUtmParam = t.encodeUtm = t.makeEncodedUtm = t.getUtm = t.makeUtm = t.UtmFromKeys = t.UtmKeys = void 0;
        var v,
            k,
            P = a("+Bk0");
        !function(e) {
            e.FACEBOOK_SHARE_SHARESHEET = "FACEBOOK_SHARE_SHARESHEET",
            e.FACEBOOK_SHARE_SHARESHEET_COPY_LINK = "FACEBOOK_SHARE_SHARESHEET_COPY_LINK",
            e.INSTAGRAM_SHARESHEET = "INSTAGRAM_SHARESHEET",
            e.TWITTER_SHARE_SHARESHEET = "TWITTER_SHARE_SHARESHEET",
            e.COPY_LINK_SHARESHEET = "COPY_LINK_SHARESHEET",
            e.COPY_LINK_TIP_SHARESHEET = "COPY_LINK_TIP_SHARESHEET",
            e.COPY_LINK_MORE = "COPY_LINK_MORE",
            e.COPY_LINK_ALL = "COPY_LINK_ALL",
            e.EMAIL_SHARESHEET = "EMAIL_SHARESHEET",
            e.EMAIL_ANDROID_SHARESHEET = "EMAIL_ANDROID_SHARESHEET",
            e.WHATSAPP_SHARESHEET = "WHATSAPP_SHARESHEET",
            e.LINKEDIN_SHARESHEET = "LINKEDIN_SHARESHEET",
            e.WHATSAPP_READMORE_SHARESHEET = "WHATSAPP_READMORE_SHARESHEET",
            e.WHATSAPP_DONATE_SHARESHEET = "WHATSAPP_DONATE_SHARESHEET",
            e.FACEBOOK_MESSENGER_SHARESHEET = "FACEBOOK_MESSENGER_SHARESHEET",
            e.SMS_SHARESHEET = "SMS_SHARESHEET",
            e.SMS_ANDROID_SHARESHEET = "SMS_ANDROID_SHARESHEET",
            e.MORE_SHARESHEET = "MORE_SHARESHEET",
            e.EMBED_WIDGET_DONATE = "EMBED_WIDGET_DONATE",
            e.PRINT_POSTER = "PRINT_POSTER",
            e.ADDRESS_BAR = "ADDRESS_BAR",
            e.CAMPAIGN_LINK_TAG = "CAMPAIGN_LINK_TAG"
        }(v = t.UtmKeys || (t.UtmKeys = {})),
        function(e) {
            e.CAMPAIGN_PAGE = "CAMPAIGN_PAGE",
            e.COMMUNITY_POSTDONATE_MODAL = "COMMUNITY_POSTDONATE_MODAL",
            e.COMMUNITY_SHARE_MODAL = "COMMUNITY_SHARE_MODAL",
            e.POSTDONATE_MODAL = "POSTDONATE_MODAL",
            e.POSTCREATE_CAMPAIGN = "POSTCREATE_CAMPAIGN",
            e.POSTCREATE_SHAREFLOW7A = "POSTCREATE_SHAREFLOW7A",
            e.POSTCREATE_SHAREFLOW7B = "POSTCREATE_SHAREFLOW7B",
            e.POSTCREATE_CALENDAR1 = "POSTCREATE_CALENDAR1",
            e.POSTCREATE_CALENDAR2 = "POSTCREATE_CALENDAR2",
            e.POSTCREATE_CALENDAR3 = "POSTCREATE_CALENDAR3",
            e.GUIDANCE_DRAWER = "GUIDANCE_DRAWER"
        }(k = t.UtmFromKeys || (t.UtmFromKeys = {}));
        var C = ((n = {})[v.EMAIL_SHARESHEET] = ((c = {})[k.CAMPAIGN_PAGE] = w("email", "customer", "p_cp+share-sheet"), c[k.COMMUNITY_POSTDONATE_MODAL] = w("email", "customer", "p_cmty_pd+share-sheet"), c[k.COMMUNITY_SHARE_MODAL] = w("email", "customer", "p_cmty+share-sheet"), c[k.POSTDONATE_MODAL] = w("email", "customer", "m_pd+share-sheet"), c[k.POSTCREATE_CAMPAIGN] = w("email", "customer", "p_cf+share-flow-1"), c[k.POSTCREATE_SHAREFLOW7A] = w("email", "customer", "p_cf+share-flow-7a"), c[k.POSTCREATE_SHAREFLOW7B] = w("email", "customer", "p_cf+share-flow-7b"), c[k.POSTCREATE_CALENDAR1] = w("email", "customer", "p_cf_cal1"), c[k.POSTCREATE_CALENDAR2] = w("email", "customer", "p_cf_cal2"), c[k.POSTCREATE_CALENDAR3] = w("email", "customer", "p_cf_cal3"), c[k.GUIDANCE_DRAWER] = w("email", "customer", "p_cp_guide_do"), c), n[v.EMAIL_ANDROID_SHARESHEET] = ((r = {})[k.CAMPAIGN_PAGE] = w("email", "customer-andr", "p_cp+share-sheet"), r[k.COMMUNITY_POSTDONATE_MODAL] = w("email", "customer-andr", "p_cmty_pd+share-sheet"), r[k.COMMUNITY_SHARE_MODAL] = w("email", "customer-andr", "p_cmty+share-sheet"), r[k.POSTDONATE_MODAL] = w("email", "customer-andr", "m_pd+share-sheet"), r[k.POSTCREATE_CAMPAIGN] = w("email", "customer-andr", "p_cf+share-flow-1"), r[k.POSTCREATE_SHAREFLOW7A] = w("email", "customer-andr", "p_cf+share-flow-7a"), r[k.POSTCREATE_SHAREFLOW7B] = w("email", "customer-andr", "p_cf+share-flow-7b"), r[k.POSTCREATE_CALENDAR1] = w("email", "customer-andr", "p_cf_cal1"), r[k.POSTCREATE_CALENDAR2] = w("email", "customer-andr", "p_cf_cal2"), r[k.POSTCREATE_CALENDAR3] = w("email", "customer-andr", "p_cf_cal3"), r[k.GUIDANCE_DRAWER] = w("email", "customer-andr", "p_cp_guide_do"), r), n[v.FACEBOOK_SHARE_SHARESHEET] = ((i = {})[k.CAMPAIGN_PAGE] = w("social", "facebook", "p_cp+share-sheet"), i[k.COMMUNITY_POSTDONATE_MODAL] = w("social", "facebook", "p_cmty_pd+share-sheet"), i[k.COMMUNITY_SHARE_MODAL] = w("social", "facebook", "p_cmty+share-sheet"), i[k.POSTDONATE_MODAL] = w("social", "facebook", "m_pd+share-sheet"), i[k.POSTCREATE_CAMPAIGN] = w("social", "facebook", "p_cf+share-flow-1"), i[k.POSTCREATE_SHAREFLOW7A] = w("social", "facebook", "p_cf+share-flow-7a"), i[k.POSTCREATE_SHAREFLOW7B] = w("social", "facebook", "p_cf+share-flow-7b"), i[k.POSTCREATE_CALENDAR1] = w("social", "facebook", "p_cf_cal1"), i[k.POSTCREATE_CALENDAR2] = w("social", "facebook", "p_cf_cal2"), i[k.POSTCREATE_CALENDAR3] = w("social", "facebook", "p_cf_cal3"), i[k.GUIDANCE_DRAWER] = w("social", "facebook", "p_cp_guide_do"), i), n[v.FACEBOOK_SHARE_SHARESHEET_COPY_LINK] = ((_ = {})[k.CAMPAIGN_PAGE] = w("social", "fb_copy_link", "p_cp+share-sheet"), _[k.COMMUNITY_POSTDONATE_MODAL] = w("social", "fb_copy_link", "p_cmty_pd+share-sheet"), _[k.COMMUNITY_SHARE_MODAL] = w("social", "fb_copy_link", "p_cmty+share-sheet"), _[k.POSTDONATE_MODAL] = w("social", "fb_copy_link", "m_pd+share-sheet"), _[k.POSTCREATE_CAMPAIGN] = w("social", "fb_copy_link", "p_cf+share-flow-1"), _[k.POSTCREATE_SHAREFLOW7A] = w("social", "fb_copy_link", "p_cf+share-flow-7a"), _[k.POSTCREATE_SHAREFLOW7B] = w("social", "fb_copy_link", "p_cf+share-flow-7b"), _[k.POSTCREATE_CALENDAR1] = w("social", "fb_copy_link", "p_cf_cal1"), _[k.POSTCREATE_CALENDAR2] = w("social", "fb_copy_link", "p_cf_cal2"), _[k.POSTCREATE_CALENDAR3] = w("social", "fb_copy_link", "p_cf_cal3"), _[k.GUIDANCE_DRAWER] = w("social", "fb_copy_link", "p_cp_guide_do"), _), n[v.INSTAGRAM_SHARESHEET] = ((o = {})[k.CAMPAIGN_PAGE] = w("social", "instagram", "p_cp+share-sheet"), o[k.POSTDONATE_MODAL] = w("social", "instagram", "m_pd+share-sheet"), o[k.POSTCREATE_CAMPAIGN] = w("social", "instagram", "p_cf+share-flow-1"), o[k.POSTCREATE_SHAREFLOW7A] = w("social", "instagram", "p_cf+share-flow-7a"), o[k.POSTCREATE_SHAREFLOW7B] = w("social", "instagram", "p_cf+share-flow-7b"), o[k.POSTCREATE_CALENDAR1] = w("social", "instagram", "p_cf_cal1"), o[k.POSTCREATE_CALENDAR2] = w("social", "instagram", "p_cf_cal2"), o[k.POSTCREATE_CALENDAR3] = w("social", "instagram", "p_cf_cal3"), o[k.GUIDANCE_DRAWER] = w("social", "instagram", "p_cp_guide_do"), o), n[v.TWITTER_SHARE_SHARESHEET] = ((s = {})[k.CAMPAIGN_PAGE] = w("social", "twitter", "p_cp+share-sheet"), s[k.COMMUNITY_POSTDONATE_MODAL] = w("social", "twitter", "p_cmty_pd+share-sheet"), s[k.COMMUNITY_SHARE_MODAL] = w("social", "twitter", "p_cmty+share-sheet"), s[k.POSTDONATE_MODAL] = w("social", "twitter", "m_pd+share-sheet"), s[k.POSTCREATE_CAMPAIGN] = w("social", "twitter", "p_cf+share-flow-1"), s[k.POSTCREATE_SHAREFLOW7A] = w("social", "twitter", "p_cf+share-flow-7a"), s[k.POSTCREATE_SHAREFLOW7B] = w("social", "twitter", "p_cf+share-flow-7b"), s[k.POSTCREATE_CALENDAR1] = w("social", "twitter", "p_cf_cal1"), s[k.POSTCREATE_CALENDAR2] = w("social", "twitter", "p_cf_cal2"), s[k.POSTCREATE_CALENDAR3] = w("social", "twitter", "p_cf_cal3"), s[k.GUIDANCE_DRAWER] = w("social", "twitter", "p_cp_guide_do"), s), n[v.COPY_LINK_SHARESHEET] = ((l = {})[k.CAMPAIGN_PAGE] = w("copy_link", "customer", "p_cp+share-sheet"), l[k.POSTDONATE_MODAL] = w("copy_link", "customer", "m_pd+share-sheet"), l[k.POSTCREATE_CAMPAIGN] = w("copy_link", "customer", "p_cf+share-flow-1"), l[k.POSTCREATE_SHAREFLOW7A] = w("copy_link", "customer", "p_cf+share-flow-7a"), l[k.POSTCREATE_SHAREFLOW7B] = w("copy_link", "customer", "p_cf+share-flow-7b"), l[k.POSTCREATE_CALENDAR1] = w("copy_link", "customer", "p_cf_cal1"), l[k.POSTCREATE_CALENDAR2] = w("copy_link", "customer", "p_cf_cal2"), l[k.POSTCREATE_CALENDAR3] = w("copy_link", "customer", "p_cf_cal3"), l[k.GUIDANCE_DRAWER] = w("copy_link", "customer", "p_cp_guide_do"), l), n[v.COPY_LINK_TIP_SHARESHEET] = ((p = {})[k.CAMPAIGN_PAGE] = w("copy_link-tip", "customer", "p_cp+share-sheet"), p[k.COMMUNITY_POSTDONATE_MODAL] = w("copy_link-tip", "customer", "p_cmty_pd+share-sheet"), p[k.COMMUNITY_SHARE_MODAL] = w("copy_link-tip", "customer", "p_cmty+share-sheet"), p[k.POSTDONATE_MODAL] = w("copy_link-tip", "customer", "m_pd+share-sheet"), p[k.POSTCREATE_CAMPAIGN] = w("copy_link", "customer", "p_cf+share-flow-1"), p[k.POSTCREATE_SHAREFLOW7A] = w("copy_link", "customer", "p_cf+share-flow-7a"), p[k.POSTCREATE_SHAREFLOW7B] = w("copy_link", "customer", "p_cf+share-flow-7b"), p[k.POSTCREATE_CALENDAR1] = w("copy_link-tip", "customer", "p_cf_cal1"), p[k.POSTCREATE_CALENDAR2] = w("copy_link-tip", "customer", "p_cf_cal2"), p[k.POSTCREATE_CALENDAR3] = w("copy_link-tip", "customer", "p_cf_cal3"), p[k.GUIDANCE_DRAWER] = w("copy_link-tip", "customer", "p_cp_guide_do"), p), n[v.COPY_LINK_ALL] = ((u = {})[k.CAMPAIGN_PAGE] = w("copy_link_all", "customer", "p_cp+share-sheet"), u[k.COMMUNITY_POSTDONATE_MODAL] = w("copy_link_all", "customer", "p_cmty_pd+share-sheet"), u[k.COMMUNITY_SHARE_MODAL] = w("copy_link_all", "customer", "p_cmty+share-sheet"), u[k.POSTDONATE_MODAL] = w("copy_link_all", "customer", "m_pd+share-sheet"), u), n[v.COPY_LINK_MORE] = ((d = {})[k.CAMPAIGN_PAGE] = w("copy_link_more", "customer", "p_cp+share-sheet"), d[k.POSTDONATE_MODAL] = w("copy_link_more", "customer", "m_pd+share-sheet"), d), n[v.LINKEDIN_SHARESHEET] = ((m = {})[k.CAMPAIGN_PAGE] = w("social", "linkedIn", "p_cp+share-sheet"), m[k.POSTDONATE_MODAL] = w("social", "linkedIn", "m_pd+share-sheet"), m[k.POSTCREATE_CAMPAIGN] = w("social", "linkedIn", "p_cf+share-flow-1"), m[k.POSTCREATE_SHAREFLOW7A] = w("social", "linkedIn", "p_cf+share-flow-7a"), m[k.POSTCREATE_SHAREFLOW7B] = w("social", "linkedIn", "p_cf+share-flow-7b"), m[k.POSTCREATE_CALENDAR1] = w("social", "linkedIn", "p_cf_cal1"), m[k.POSTCREATE_CALENDAR2] = w("social", "linkedIn", "p_cf_cal2"), m[k.POSTCREATE_CALENDAR3] = w("social", "linkedIn", "p_cf_cal3"), m[k.GUIDANCE_DRAWER] = w("social", "linkedIn", "p_cp_guide_do"), m), n[v.WHATSAPP_SHARESHEET] = ((f = {})[k.CAMPAIGN_PAGE] = w("chat", "whatsApp", "p_cp+share-sheet"), f[k.COMMUNITY_POSTDONATE_MODAL] = w("social", "whatsApp", "p_cmty_pd+share-sheet"), f[k.COMMUNITY_SHARE_MODAL] = w("social", "whatsApp", "p_cmty+share-sheet"), f[k.POSTDONATE_MODAL] = w("social", "whatsApp", "m_pd+share-sheet"), f[k.POSTCREATE_CAMPAIGN] = w("chat", "whatsapp", "p_cf+share-flow-1"), f[k.POSTCREATE_SHAREFLOW7A] = w("chat", "whatsapp", "p_cf+share-flow-7a"), f[k.POSTCREATE_SHAREFLOW7B] = w("chat", "whatsapp", "p_cf+share-flow-7b"), f[k.POSTCREATE_CALENDAR1] = w("chat", "whatsapp", "p_cf_cal1"), f[k.POSTCREATE_CALENDAR2] = w("chat", "whatsapp", "p_cf_cal2"), f[k.POSTCREATE_CALENDAR3] = w("chat", "whatsapp", "p_cf_cal3"), f[k.GUIDANCE_DRAWER] = w("chat", "whatsapp", "p_cp_guide_do"), f), n[v.WHATSAPP_READMORE_SHARESHEET] = ((E = {})[k.CAMPAIGN_PAGE] = w("chat", "whatsapp-visit", "p_cp+share-sheet"), E[k.POSTDONATE_MODAL] = w("social", "whatsapp-visit", "m_pd+share-sheet"), E[k.POSTCREATE_CAMPAIGN] = w("social", "whatsapp-visit", "p_cf+share-flow-1"), E[k.POSTCREATE_SHAREFLOW7A] = w("social", "whatsapp-visit", "p_cf+share-flow-7a"), E[k.POSTCREATE_SHAREFLOW7B] = w("social", "whatsapp-visit", "p_cf+share-flow-7b"), E[k.POSTCREATE_CALENDAR1] = w("social", "whatsapp-visit", "p_cf_cal1"), E[k.POSTCREATE_CALENDAR2] = w("social", "whatsapp-visit", "p_cf_cal2"), E[k.POSTCREATE_CALENDAR3] = w("social", "whatsapp-visit", "p_cf_cal3"), E[k.GUIDANCE_DRAWER] = w("social", "whatsapp-visit", "p_cp_guide_do"), E), n[v.WHATSAPP_DONATE_SHARESHEET] = ((A = {})[k.CAMPAIGN_PAGE] = w("chat", "whatsapp-donate", "p_cp+share-sheet"), A[k.POSTDONATE_MODAL] = w("social", "whatsapp-donate", "m_pd+share-sheet"), A[k.POSTCREATE_CAMPAIGN] = w("social", "whatsapp-donate", "p_cf+share-flow-1"), A[k.POSTCREATE_SHAREFLOW7A] = w("social", "whatsapp-donate", "p_cf+share-flow-7a"), A[k.POSTCREATE_SHAREFLOW7B] = w("social", "whatsapp-donate", "p_cf+share-flow-7b"), A[k.POSTCREATE_CALENDAR1] = w("social", "whatsapp-donate", "p_cf_cal1"), A[k.POSTCREATE_CALENDAR2] = w("social", "whatsapp-donate", "p_cf_cal2"), A[k.POSTCREATE_CALENDAR3] = w("social", "whatsapp-donate", "p_cf_cal3"), A[k.GUIDANCE_DRAWER] = w("social", "whatsapp-donate", "p_cp_guide_do"), A), n[v.FACEBOOK_MESSENGER_SHARESHEET] = ((h = {})[k.CAMPAIGN_PAGE] = w("chat", "messenger", "p_cp+share-sheet"), h[k.POSTDONATE_MODAL] = w("chat", "messenger", "m_pd+share-sheet"), h[k.POSTCREATE_CAMPAIGN] = w("social", "messenger", "p_cf+share-flow-1"), h[k.POSTCREATE_SHAREFLOW7A] = w("social", "messenger", "p_cf+share-flow-7a"), h[k.POSTCREATE_SHAREFLOW7B] = w("social", "messenger", "p_cf+share-flow-7b"), h[k.POSTCREATE_CALENDAR1] = w("social", "messenger", "p_cf_cal1"), h[k.POSTCREATE_CALENDAR2] = w("social", "messenger", "p_cf_cal2"), h[k.POSTCREATE_CALENDAR3] = w("social", "messenger", "p_cf_cal3"), h[k.GUIDANCE_DRAWER] = w("social", "messenger", "p_cp_guide_do"), h), n[v.SMS_SHARESHEET] = ((g = {})[k.CAMPAIGN_PAGE] = w("sms", "customer", "p_cp+share-sheet"), g[k.COMMUNITY_POSTDONATE_MODAL] = w("sms", "customer", "p_cmty_pd+share-sheet"), g[k.COMMUNITY_SHARE_MODAL] = w("sms", "customer", "p_cmty+share-sheet"), g[k.POSTDONATE_MODAL] = w("sms", "customer", "m_pd+share-sheet"), g[k.POSTCREATE_CAMPAIGN] = w("sms", "customer", "p_cf+share-flow-1"), g[k.POSTCREATE_SHAREFLOW7A] = w("sms", "customer", "p_cf+share-flow-7a"), g[k.POSTCREATE_SHAREFLOW7B] = w("sms", "customer", "p_cf+share-flow-7b"), g[k.POSTCREATE_CALENDAR1] = w("sms", "customer", "p_cf_cal1"), g[k.POSTCREATE_CALENDAR2] = w("sms", "customer", "p_cf_cal2"), g[k.POSTCREATE_CALENDAR3] = w("sms", "customer", "p_cf_cal3"), g[k.GUIDANCE_DRAWER] = w("sms", "customer", "p_cp_guide_do"), g), n[v.MORE_SHARESHEET] = ((T = {})[k.CAMPAIGN_PAGE] = w("more", "customer", "p_cp+share-sheet"), T[k.POSTDONATE_MODAL] = w("more", "customer", "m_pd+share-sheet"), T[k.POSTCREATE_CAMPAIGN] = w("more", "customer", "p_cf+share-flow-1"), T[k.POSTCREATE_SHAREFLOW7A] = w("more", "customer", "p_cf+share-flow-7a"), T[k.POSTCREATE_SHAREFLOW7B] = w("more", "customer", "p_cf+share-flow-7b"), T[k.POSTCREATE_CALENDAR1] = w("more", "customer", "p_cf_cal1"), T[k.POSTCREATE_CALENDAR2] = w("more", "customer", "p_cf_cal2"), T[k.POSTCREATE_CALENDAR3] = w("more", "customer", "p_cf_cal3"), T[k.GUIDANCE_DRAWER] = w("more", "customer", "p_cp_guide_do"), T), n[v.SMS_ANDROID_SHARESHEET] = ((b = {})[k.CAMPAIGN_PAGE] = w("sms", "customer-andr", "p_cp+share-sheet"), b[k.COMMUNITY_POSTDONATE_MODAL] = w("sms", "customer-andr", "p_cmty_pd+share-sheet"), b[k.COMMUNITY_SHARE_MODAL] = w("sms", "customer-andr", "p_cmty+share-sheet"), b[k.POSTDONATE_MODAL] = w("sms", "customer-andr", "m_pd+share-sheet"), b[k.POSTCREATE_CAMPAIGN] = w("sms", "customer-andr", "p_cf+share-flow-1"), b[k.POSTCREATE_SHAREFLOW7A] = w("sms", "customer-andr", "p_cf+share-flow-7a"), b[k.POSTCREATE_SHAREFLOW7B] = w("sms", "customer-andr", "p_cf+share-flow-7b"), b[k.POSTCREATE_CALENDAR1] = w("sms", "customer-andr", "p_cf_cal1"), b[k.POSTCREATE_CALENDAR2] = w("sms", "customer-andr", "p_cf_cal2"), b[k.POSTCREATE_CALENDAR3] = w("sms", "customer-andr", "p_cf_cal3"), b[k.GUIDANCE_DRAWER] = w("sms", "customer-andr", "p_cp_guide_do"), b), n[v.EMBED_WIDGET_DONATE] = ((O = {})[k.CAMPAIGN_PAGE] = w("referral", "widget", "p_cp+share-sheet"), O[k.POSTDONATE_MODAL] = w("referral", "widget", "m_pd+share-sheet"), O[k.POSTCREATE_CAMPAIGN] = w("referral", "widget", "p_cf+share-flow-1"), O[k.POSTCREATE_SHAREFLOW7A] = w("referral", "widget", "p_cf+share-flow-7a"), O[k.POSTCREATE_SHAREFLOW7B] = w("referral", "widget", "p_cf+share-flow-7b"), O[k.POSTCREATE_CALENDAR1] = w("referral", "widget", "p_cf_cal1"), O[k.POSTCREATE_CALENDAR2] = w("referral", "widget", "p_cf_cal2"), O[k.POSTCREATE_CALENDAR3] = w("referral", "widget", "p_cf_cal3"), O[k.GUIDANCE_DRAWER] = w("referral", "widget", "p_cp_guide_do"), O), n[v.PRINT_POSTER] = ((S = {})[k.CAMPAIGN_PAGE] = w("referral", "poster", "p_cp+share-sheet"), S[k.POSTDONATE_MODAL] = w("referral", "poster", "m_pd+share-sheet"), S[k.POSTCREATE_CAMPAIGN] = w("referral", "poster", "p_cf+share-flow-1"), S[k.POSTCREATE_SHAREFLOW7A] = w("referral", "poster", "p_cf+share-flow-7a"), S[k.POSTCREATE_SHAREFLOW7B] = w("referral", "poster", "p_cf+share-flow-7b"), S[k.POSTCREATE_CALENDAR1] = w("referral", "poster", "p_cf_cal1"), S[k.POSTCREATE_CALENDAR2] = w("referral", "poster", "p_cf_cal2"), S[k.POSTCREATE_CALENDAR3] = w("referral", "poster", "p_cf_cal3"), S[k.GUIDANCE_DRAWER] = w("referral", "poster", "p_cp_guide_do"), S), n[v.ADDRESS_BAR] = ((R = {})[k.CAMPAIGN_PAGE] = w("os", "customer", "p_cp_url"), R), n[v.CAMPAIGN_LINK_TAG] = ((y = {})[k.CAMPAIGN_PAGE] = w("copy_link", "customer", "p_cp_display"), y), n);
        function w(e, t, a) {
            return {
                medium: e,
                source: t,
                campaign: a
            }
        }
        function N(e) {
            return "utm_source=" + e.source + "&utm_medium=" + e.medium + "&utm_campaign=" + e.campaign
        }
        function D(e) {
            return "utm_" === e.slice(0, 4)
        }
        t.makeUtm = w,
        t.getUtm = function(e, t) {
            return C[e][t] ? C[e][t] : (console.warn("WARN @ssr-frontend/packages-util-utm missing UTM. " + e + " from UtmKeys and " + t + " from UtmFromKeys do not have a UTM. See the utms object in packages/util-utm/index.ts"), {})
        },
        t.makeEncodedUtm = function(e, t) {
            return N(C[e][t])
        },
        t.encodeUtm = N,
        t.isUtmParam = D,
        t.removeUtmParams = function() {
            if (P.canUseHistory() && P.canUseLocation() && history && history.replaceState && location.search) {
                var e = location.search.slice(1).split("&"),
                    t = e.filter((function(e) {
                        return !D(e)
                    }));
                if (t.length < e.length) {
                    var a = t.length ? "?" + t.join("&") : "",
                        n = location.pathname + a + location.hash;
                    history.replaceState({}, "", n)
                }
            }
        }
    },
    P1Sn: function(e, t, a) {
        "use strict";
        (function(e) {
            var n = this && this.__read || function(e, t) {
                var a = "function" == typeof Symbol && e[Symbol.iterator];
                if (!a)
                    return e;
                var n,
                    c,
                    r = a.call(e),
                    i = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(n = r.next()).done;)
                        i.push(n.value)
                } catch (_) {
                    c = {
                        error: _
                    }
                } finally {
                    try {
                        n && !n.done && (a = r.return) && a.call(r)
                    } finally {
                        if (c)
                            throw c.error
                    }
                }
                return i
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.wrapURLs = t.getShareLink = t.getDomain = t.serializeParams = t.normalize = void 0;
            var c = a("qDU6");
            t.normalize = function(e) {
                return e.replace(/([^:]\/)\/+/g, "$1")
            },
            t.serializeParams = function(e, t) {
                return void 0 === t && (t = "&"), Object.keys(e).filter((function(t) {
                    return !!e[t]
                })).map((function(t) {
                    return t + "=" + encodeURIComponent(e[t])
                })).join(t)
            },
            t.getDomain = function() {
                return "undefined" != typeof window ? window.initialState && window.initialState.meta && window.initialState.meta.global && window.initialState.meta.global.domain ? window.initialState.meta.global.domain : window.location.host.split(".").slice(1, window.location.host.length).join(".") : void 0 !== e && e.env && e.env.DOMAIN ? e.env.DOMAIN : "gofundme.com"
            },
            t.getShareLink = function(e, a, r, i) {
                var _ = i ? Object.entries(i).filter((function(e) {
                        var t = n(e, 2);
                        t[0];
                        return t[1]
                    })).map((function(e) {
                        var t = n(e, 2);
                        return t[0] + "=" + t[1]
                    })).join("&") : "",
                    o = a && r ? "?" + c.makeEncodedUtm(a, r) + (_.length ? "&" + _ : "") : "";
                return t.normalize("" + e + o)
            },
            t.wrapURLs = function(e) {
                return e.replace(/(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*))/gi, (function(e) {
                    return '<a href="' + e + '" target="_blank" rel="nofollow noopener noreferrer">' + e + "</a>"
                }))
            }
        }).call(this, a("8oxB"))
    },
    PEA0: function(e, t, a) {
        "use strict";
        a.r(t),
        t.default = a.p + "static/media/apple-touch-icon.5e3eb3428bdbf889ccee8dc9b479122a.png"
    },
    PFLP: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    },
    PxtD: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.setOptimizelyFlowCookie = t.getForceVariant = t.getForceFeature = t.filterAttributes = void 0;
        var c = n(a("p46w")),
            r = a("1sUF");
        function i() {
            var e = c.default.get("optmzly_flow");
            if (e)
                try {
                    return -1 === e.indexOf('"') ? e = "{" + e.replace(/([\w\*\-]*):([\w\-]*)/g, '"$1":"$2"') + "}" : 0 === e.indexOf("j:") && (e = e.substring(2)), JSON.parse(e)
                } catch (t) {
                    return
                }
        }
        t.getForceVariant = function(e) {
            var t = i();
            if (t) {
                if (t[e])
                    return t[e];
                if (t["*"])
                    return t["*"]
            }
        };
        t.getForceFeature = function(e) {
            var t = "feature_" + e,
                a = i();
            if (a) {
                if (a[t] && "on" === a[t])
                    return !0;
                if (a[t] && "off" === a[t])
                    return !1;
                if (a["feature_*"] && "on" === a["feature_*"])
                    return !0;
                if (a["feature_*"] && "off" === a["feature_*"])
                    return !1
            }
        };
        t.filterAttributes = function(e) {
            if (void 0 === e)
                return e;
            for (var t in e)
                void 0 === e[t] && delete e[t];
            return 0 === Object.keys(e).length ? void 0 : e
        };
        t.setOptimizelyFlowCookie = function(e) {
            c.default.set("optmzly_flow", e, {
                domain: r.getDomain(),
                path: "/"
            })
        }
    },
    QaoE: function(e, t, a) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function(e, t, a, n) {
                void 0 === n && (n = a),
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function() {
                        return t[a]
                    }
                })
            } : function(e, t, a, n) {
                void 0 === n && (n = a),
                e[n] = t[a]
            }),
            c = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            r = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && n(t, e, a);
                return c(t, e), t
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(a("q1tI")),
            _ = a("5l5+"),
            o = a("yf/i"),
            s = a("WRpi");
        t.default = function(e) {
            var t = e.hit;
            return i.default.createElement(i.Fragment, null, _.t("by"), i.default.createElement(o.HtmlSpace, {
                type: "non-breaking"
            }), i.default.createElement(s.AlgoliaCustomHighlight, {
                attribute: "username",
                hit: t
            }), t.bene_name && i.default.createElement(i.Fragment, null, i.default.createElement(o.HtmlSpace, {
                type: "non-breaking"
            }), i.default.createElement("span", null, _.t("for")), i.default.createElement(o.HtmlSpace, {
                type: "non-breaking"
            }), i.default.createElement(s.AlgoliaCustomHighlight, {
                attribute: "bene_name",
                hit: t
            })))
        }
    },
    QctN: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        a("Wsre"),
        a("Wr5T");
        var c = n(a("MgzW")),
            r = n(a("+aTx"));
        Number.isInteger || (Number.isInteger = function(e) {
            return "number" == typeof e && isFinite(e) && Math.floor(e) === e
        }),
        Object.assign = c.default,
        window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function(e, t) {
            t = t || window;
            for (var a = 0; a < this.length; a++)
                e.call(t, this[a], a, this)
        }),
        Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector),
        Element.prototype.closest || (Element.prototype.closest = function(e) {
            var t = this;
            do {
                if (t.matches(e))
                    return t;
                t = t.parentElement || t.parentNode
            } while (null !== t && 1 === t.nodeType);
            return null
        }),
        Element.prototype.replaceWith || (Element.prototype.replaceWith = function() {
            var e,
                t = this.parentNode,
                a = arguments.length;
            if (t)
                for (a || t.removeChild(this); a--;)
                    "object" != typeof (e = arguments[a]) && this.ownerDocument ? e = this.ownerDocument.createTextNode(e) : e.parentNode && e.parentNode.removeChild(e),
                    a ? null !== this.previousSibling && t.insertBefore(this.previousSibling, e) : t.replaceChild(e, this)
        }),
        r.default()
    },
    Qqnf: function(e, t, a) {
        "use strict";
        var n = a("8YN3"),
            c = a("wx14"),
            r = a("zLVn"),
            i = a("uP1p"),
            _ = a("hqqJ"),
            o = (a("bCCX"), function() {
                return Math.random().toString(36).substring(7).split("").join(".")
            });
        o(),
        o();
        function s() {
            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
                t[a] = arguments[a];
            return 0 === t.length ? function(e) {
                return e
            } : 1 === t.length ? t[0] : t.reduce((function(e, t) {
                return function() {
                    return e(t.apply(void 0, arguments))
                }
            }))
        }
        function l() {
            var e = {};
            return e.promise = new Promise((function(t, a) {
                e.resolve = t,
                e.reject = a
            })), e
        }
        var p = l;
        a("sesW");
        a.d(t, "b", (function() {
            return v
        })),
        a.d(t, "e", (function() {
            return P
        })),
        a.d(t, "h", (function() {
            return C
        })),
        a.d(t, "i", (function() {
            return k
        })),
        a.d(t, "j", (function() {
            return w
        })),
        a.d(t, "k", (function() {
            return q
        })),
        a.d(t, "l", (function() {
            return N
        })),
        a.d(t, "a", (function() {
            return n.a
        })),
        a.d(t, "c", (function() {
            return n.g
        })),
        a.d(t, "d", (function() {
            return _.i
        })),
        a.d(t, "g", (function() {
            return _.j
        }));
        var u = [],
            d = 0;
        function m(e) {
            try {
                A(),
                e()
            } finally {
                h()
            }
        }
        function f(e) {
            u.push(e),
            d || (A(), g())
        }
        function E(e) {
            try {
                return A(), e()
            } finally {
                g()
            }
        }
        function A() {
            d++
        }
        function h() {
            d--
        }
        function g() {
            var e;
            for (h(); !d && void 0 !== (e = u.shift());)
                m(e)
        }
        var T = function(e) {
                return function(t) {
                    return e.some((function(e) {
                        return y(e)(t)
                    }))
                }
            },
            b = function(e) {
                return function(t) {
                    return e(t)
                }
            },
            O = function(e) {
                return function(t) {
                    return t.type === String(e)
                }
            },
            S = function(e) {
                return function(t) {
                    return t.type === e
                }
            },
            R = function() {
                return _.U
            };
        function y(e) {
            var t = "*" === e ? R : Object(i.k)(e) ? O : Object(i.a)(e) ? T : Object(i.l)(e) ? O : Object(i.d)(e) ? b : Object(i.m)(e) ? S : null;
            if (null === t)
                throw new Error("invalid pattern: " + e);
            return t(e)
        }
        var v = {
                type: n.b
            },
            k = function(e) {
                return e && e.type === n.b
            };
        function P(e) {
            void 0 === e && (e = Object(_.O)());
            var t = !1,
                a = [];
            return {
                take: function(n) {
                    t && e.isEmpty() ? n(v) : e.isEmpty() ? (a.push(n), n.cancel = function() {
                        Object(_.bb)(a, n)
                    }) : n(e.take())
                },
                put: function(n) {
                    if (!t) {
                        if (0 === a.length)
                            return e.put(n);
                        a.shift()(n)
                    }
                },
                flush: function(a) {
                    t && e.isEmpty() ? a(v) : a(e.flush())
                },
                close: function() {
                    if (!t) {
                        t = !0;
                        var e = a;
                        a = [];
                        for (var n = 0, c = e.length; n < c; n++) {
                            (0, e[n])(v)
                        }
                    }
                }
            }
        }
        function C(e, t) {
            void 0 === t && (t = Object(_.X)());
            var a,
                n = !1,
                c = P(t),
                r = function() {
                    n || (n = !0, Object(i.d)(a) && a(), c.close())
                };
            return a = e((function(e) {
                k(e) ? r() : c.put(e)
            })), a = Object(_.Y)(a), n && a(), {
                take: c.take,
                flush: c.flush,
                close: r
            }
        }
        function w() {
            var e,
                t = !1,
                a = [],
                c = a;
            var r = function() {
                    c === a && (c = a.slice())
                },
                i = function() {
                    t = !0;
                    var e = a = c;
                    c = [],
                    e.forEach((function(e) {
                        e(v)
                    }))
                };
            return (e = {})[n.e] = !0, e.put = function(e) {
                if (!t)
                    if (k(e))
                        i();
                    else
                        for (var r = a = c, _ = 0, o = r.length; _ < o; _++) {
                            var s = r[_];
                            s[n.d](e) && (s.cancel(), s(e))
                        }
            }, e.take = function(e, a) {
                void 0 === a && (a = R),
                t ? e(v) : (e[n.d] = a, r(), c.push(e), e.cancel = Object(_.Y)((function() {
                    r(),
                    Object(_.bb)(c, e)
                })))
            }, e.close = i, e
        }
        function N() {
            var e = w(),
                t = e.put;
            return e.put = function(e) {
                e[n.f] ? t(e) : f((function() {
                    t(e)
                }))
            }, e
        }
        function D(e, t) {
            var a = e[n.a];
            Object(i.d)(a) && (t.cancel = a),
            e.then(t, (function(e) {
                t(e, !0)
            }))
        }
        var L,
            I = 0,
            M = function() {
                return ++I
            };
        function H(e) {
            e.isRunning() && e.cancel()
        }
        var x = ((L = {})[_.u] = function(e, t, a) {
            var c = t.channel,
                r = void 0 === c ? e.channel : c,
                _ = t.pattern,
                o = t.maybe,
                s = function(e) {
                    e instanceof Error ? a(e, !0) : !k(e) || o ? a(e) : a(n.k)
                };
            try {
                r.take(s, Object(i.g)(_) ? y(_) : null)
            } catch (l) {
                return void a(l, !0)
            }
            a.cancel = s.cancel
        }, L[_.q] = function(e, t, a) {
            var n = t.channel,
                c = t.action,
                r = t.resolve;
            f((function() {
                var t;
                try {
                    t = (n ? n.put : e.dispatch)(c)
                } catch (_) {
                    return void a(_, !0)
                }
                r && Object(i.j)(t) ? D(t, a) : a(t)
            }))
        }, L[_.b] = function(e, t, a, n) {
            var c = n.digestEffect,
                r = I,
                o = Object.keys(t);
            if (0 !== o.length) {
                var s = Object(_.V)(t, a);
                o.forEach((function(e) {
                    c(t[e], r, s[e], e)
                }))
            } else
                a(Object(i.a)(t) ? [] : {})
        }, L[_.s] = function(e, t, a, n) {
            var c = n.digestEffect,
                r = I,
                o = Object.keys(t),
                s = Object(i.a)(t) ? Object(_.W)(o.length) : {},
                l = {},
                p = !1;
            o.forEach((function(e) {
                var t = function(t, n) {
                    p || (n || Object(_.cb)(t) ? (a.cancel(), a(t, n)) : (a.cancel(), p = !0, s[e] = t, a(s)))
                };
                t.cancel = _.db,
                l[e] = t
            })),
            a.cancel = function() {
                p || (p = !0, o.forEach((function(e) {
                    return l[e].cancel()
                })))
            },
            o.forEach((function(e) {
                p || c(t[e], r, l[e], e)
            }))
        }, L[_.d] = function(e, t, a, n) {
            var c = t.context,
                r = t.fn,
                o = t.args,
                s = n.task;
            try {
                var l = r.apply(c, o);
                if (Object(i.j)(l))
                    return void D(l, a);
                if (Object(i.e)(l))
                    return void Y(e, l, s.context, I, Object(_.T)(r), !1, a);
                a(l)
            } catch (p) {
                a(p, !0)
            }
        }, L[_.C] = function(e, t, a) {
            var n = t.context,
                c = t.fn,
                r = t.args;
            try {
                var _ = function(e, t) {
                    Object(i.n)(e) ? a(t) : a(e, !0)
                };
                c.apply(n, r.concat(_)),
                _.cancel && (a.cancel = _.cancel)
            } catch (o) {
                a(o, !0)
            }
        }, L[_.g] = function(e, t, a, n) {
            var c = t.context,
                r = t.fn,
                o = t.args,
                s = t.detached,
                l = n.task,
                p = function(e) {
                    var t = e.context,
                        a = e.fn,
                        n = e.args;
                    try {
                        var c = a.apply(t, n);
                        if (Object(i.e)(c))
                            return c;
                        var r = !1;
                        return Object(_.ab)((function(e) {
                            return r ? {
                                value: e,
                                done: !0
                            } : (r = !0, {
                                value: c,
                                done: !Object(i.j)(c)
                            })
                        }))
                    } catch (o) {
                        return Object(_.ab)((function() {
                            throw o
                        }))
                    }
                }({
                    context: c,
                    fn: r,
                    args: o
                }),
                u = function(e, t) {
                    return e.isSagaIterator ? {
                        name: e.meta.name
                    } : Object(_.T)(t)
                }(p, r);
            E((function() {
                var t = Y(e, p, l.context, I, u, s, void 0);
                s ? a(t) : t.isRunning() ? (l.queue.addTask(t), a(t)) : t.isAborted() ? l.queue.abort(t.error()) : a(t)
            }))
        }, L[_.k] = function(e, t, a, n) {
            var c = n.task,
                r = function(e, t) {
                    if (e.isRunning()) {
                        var a = {
                            task: c,
                            cb: t
                        };
                        t.cancel = function() {
                            e.isRunning() && Object(_.bb)(e.joiners, a)
                        },
                        e.joiners.push(a)
                    } else
                        e.isAborted() ? t(e.error(), !0) : t(e.result())
                };
            if (Object(i.a)(t)) {
                if (0 === t.length)
                    return void a([]);
                var o = Object(_.V)(t, a);
                t.forEach((function(e, t) {
                    r(e, o[t])
                }))
            } else
                r(t, a)
        }, L[_.L] = function(e, t, a, c) {
            var r = c.task;
            t === n.h ? H(r) : Object(i.a)(t) ? t.forEach(H) : H(t),
            a()
        }, L[_.t] = function(e, t, a) {
            var n = t.selector,
                c = t.args;
            try {
                a(n.apply(void 0, [e.getState()].concat(c)))
            } catch (r) {
                a(r, !0)
            }
        }, L[_.N] = function(e, t, a) {
            var n = t.pattern,
                c = P(t.buffer),
                r = y(n),
                i = function t(a) {
                    k(a) || e.channel.take(t, r),
                    c.put(a)
                },
                _ = c.close;
            c.close = function() {
                i.cancel(),
                _()
            },
            e.channel.take(i, r),
            a(c)
        }, L[_.P] = function(e, t, a, n) {
            a(n.task.isCancelled())
        }, L[_.Q] = function(e, t, a) {
            t.flush(a)
        }, L[_.h] = function(e, t, a, n) {
            a(n.task.context[t])
        }, L[_.R] = function(e, t, a, n) {
            var c = n.task;
            Object(_.Z)(c.context, t),
            a()
        }, L);
        function G(e, t) {
            return e + "?" + t
        }
        function U(e) {
            var t = e.name,
                a = e.location;
            return a ? t + "  " + G(a.fileName, a.lineNumber) : t
        }
        var W = null,
            F = [],
            j = function() {
                W = null,
                F.length = 0
            },
            B = function() {
                var e,
                    t,
                    a = F[0],
                    n = F.slice(1),
                    c = a.crashedEffect ? function(e) {
                        var t = Object(_.fb)(e);
                        return t ? t.code + "  " + G(t.fileName, t.lineNumber) : ""
                    }(a.crashedEffect) : null;
                return ["The above error occurred in task " + U(a.meta) + (c ? " \n when executing effect " + c : "")].concat(n.map((function(e) {
                    return "    created by " + U(e.meta)
                })), [(e = F, t = Object(_.eb)((function(e) {
                    return e.cancelledTasks
                }), e), t.length ? ["Tasks cancelled due to error:"].concat(t).join("\n") : "")]).join("\n")
            };
        function K(e, t, a, c, r, i, o) {
            var s;
            void 0 === o && (o = _.db);
            var l,
                u,
                d = 0,
                m = null,
                f = [],
                E = Object.create(a),
                A = function(e, t, a) {
                    var n,
                        c = [],
                        r = !1;
                    function i(e) {
                        t(),
                        s(),
                        a(e, !0)
                    }
                    function o(t) {
                        c.push(t),
                        t.cont = function(o, s) {
                            r || (Object(_.bb)(c, t), t.cont = _.db, s ? i(o) : (t === e && (n = o), c.length || (r = !0, a(n))))
                        }
                    }
                    function s() {
                        r || (r = !0, c.forEach((function(e) {
                            e.cont = _.db,
                            e.cancel()
                        })), c = [])
                    }
                    return o(e), {
                        addTask: o,
                        cancelAll: s,
                        abort: i,
                        getTasks: function() {
                            return c
                        }
                    }
                }(t, (function() {
                    f.push.apply(f, A.getTasks().map((function(e) {
                        return e.meta.name
                    })))
                }), h);
            function h(t, a) {
                if (a) {
                    if (d = 2, (i = {
                        meta: r,
                        cancelledTasks: f
                    }).crashedEffect = W, F.push(i), g.isRoot) {
                        var c = B();
                        j(),
                        e.onError(t, {
                            sagaStack: c
                        })
                    }
                    u = t,
                    m && m.reject(t)
                } else
                    t === n.j ? d = 1 : 1 !== d && (d = 3),
                    l = t,
                    m && m.resolve(t);
                var i;
                g.cont(t, a),
                g.joiners.forEach((function(e) {
                    e.cb(t, a)
                })),
                g.joiners = null
            }
            var g = ((s = {})[n.i] = !0, s.id = c, s.meta = r, s.isRoot = i, s.context = E, s.joiners = [], s.queue = A, s.cancel = function() {
                0 === d && (d = 1, A.cancelAll(), h(n.j, !1))
            }, s.cont = o, s.end = h, s.setContext = function(e) {
                Object(_.Z)(E, e)
            }, s.toPromise = function() {
                return m || (m = p(), 2 === d ? m.reject(u) : 0 !== d && m.resolve(l)), m.promise
            }, s.isRunning = function() {
                return 0 === d
            }, s.isCancelled = function() {
                return 1 === d || 0 === d && 1 === t.status
            }, s.isAborted = function() {
                return 2 === d
            }, s.result = function() {
                return l
            }, s.error = function() {
                return u
            }, s);
            return g
        }
        function Y(e, t, a, c, r, o, s) {
            var l = e.finalizeRunEffect((function(t, a, c) {
                if (Object(i.j)(t))
                    D(t, c);
                else if (Object(i.e)(t))
                    Y(e, t, u.context, a, r, !1, c);
                else if (t && t[n.c]) {
                    (0, x[t.type])(e, t.payload, c, d)
                } else
                    c(t)
            }));
            m.cancel = _.db;
            var p = {
                    meta: r,
                    cancel: function() {
                        0 === p.status && (p.status = 1, m(n.j))
                    },
                    status: 0
                },
                u = K(e, p, a, c, r, o, s),
                d = {
                    task: u,
                    digestEffect: f
                };
            return s && (s.cancel = u.cancel), m(), u;
            function m(e, a) {
                try {
                    var r;
                    a ? (r = t.throw(e), j()) : Object(_.gb)(e) ? (p.status = 1, m.cancel(), r = Object(i.d)(t.return) ? t.return(n.j) : {
                        done: !0,
                        value: n.j
                    }) : r = Object(_.hb)(e) ? Object(i.d)(t.return) ? t.return() : {
                        done: !0
                    } : t.next(e),
                    r.done ? (1 !== p.status && (p.status = 3), p.cont(r.value)) : f(r.value, c, m)
                } catch (o) {
                    if (1 === p.status)
                        throw o;
                    p.status = 2,
                    p.cont(o, !0)
                }
            }
            function f(t, a, n, c) {
                void 0 === c && (c = "");
                var r,
                    i = M();
                function o(a, c) {
                    r || (r = !0, n.cancel = _.db, e.sagaMonitor && (c ? e.sagaMonitor.effectRejected(i, a) : e.sagaMonitor.effectResolved(i, a)), c && function(e) {
                        W = e
                    }(t), n(a, c))
                }
                e.sagaMonitor && e.sagaMonitor.effectTriggered({
                    effectId: i,
                    parentEffectId: a,
                    label: c,
                    effect: t
                }),
                o.cancel = _.db,
                n.cancel = function() {
                    r || (r = !0, o.cancel(), o.cancel = _.db, e.sagaMonitor && e.sagaMonitor.effectCancelled(i))
                },
                l(t, i, o)
            }
        }
        function q(e, t) {
            var a = e.channel,
                n = void 0 === a ? N() : a,
                c = e.dispatch,
                r = e.getState,
                i = e.context,
                o = void 0 === i ? {} : i,
                l = e.sagaMonitor,
                p = e.effectMiddlewares,
                u = e.onError,
                d = void 0 === u ? _.c : u;
            for (var m = arguments.length, f = new Array(m > 2 ? m - 2 : 0), A = 2; A < m; A++)
                f[A - 2] = arguments[A];
            var h = t.apply(void 0, f);
            var g,
                T = M();
            if (l && (l.rootSagaStarted = l.rootSagaStarted || _.db, l.effectTriggered = l.effectTriggered || _.db, l.effectResolved = l.effectResolved || _.db, l.effectRejected = l.effectRejected || _.db, l.effectCancelled = l.effectCancelled || _.db, l.actionDispatched = l.actionDispatched || _.db, l.rootSagaStarted({
                effectId: T,
                saga: t,
                args: f
            })), p) {
                var b = s.apply(void 0, p);
                g = function(e) {
                    return function(t, a, n) {
                        return b((function(t) {
                            return e(t, a, n)
                        }))(t)
                    }
                }
            } else
                g = _.f;
            var O = {
                channel: n,
                dispatch: Object(_.e)(c),
                getState: r,
                sagaMonitor: l,
                onError: d,
                finalizeRunEffect: g
            };
            return E((function() {
                var e = Y(O, h, o, T, Object(_.T)(t), !0, void 0);
                return l && l.effectResolved(T, e), e
            }))
        }
        t.f = function(e) {
            var t,
                a = void 0 === e ? {} : e,
                n = a.context,
                i = void 0 === n ? {} : n,
                o = a.channel,
                s = void 0 === o ? N() : o,
                l = a.sagaMonitor,
                p = Object(r.a)(a, ["context", "channel", "sagaMonitor"]);
            function u(e) {
                var a = e.getState,
                    n = e.dispatch;
                return t = q.bind(null, Object(c.a)({}, p, {
                    context: i,
                    channel: s,
                    dispatch: n,
                    getState: a,
                    sagaMonitor: l
                })), function(e) {
                    return function(t) {
                        l && l.actionDispatched && l.actionDispatched(t);
                        var a = e(t);
                        return s.put(t), a
                    }
                }
            }
            return u.run = function() {
                return t.apply(void 0, arguments)
            }, u.setContext = function(e) {
                Object(_.Z)(i, e)
            }, u
        }
    },
    QuWQ: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.device = t.referringDomain = t.browser = t.getOs = void 0,
        t.getOs = function() {
            var e = navigator.userAgent;
            return /Windows/i.test(e) ? /Phone/.test(e) ? "Windows Mobile" : "Windows" : /(iPhone|iPad|iPod)/.test(e) ? "iOS" : /Android/.test(e) ? "Android" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : /Mac/i.test(e) ? "Mac OS X" : /Linux/.test(e) ? "Linux" : ""
        },
        t.browser = function() {
            var e = navigator.vendor || "",
                t = navigator.userAgent;
            return -1 !== t.indexOf("Opera") ? -1 !== t.indexOf("Mini") ? "Opera Mini" : "Opera" : /(BlackBerry|PlayBook|BB10)/i.test(t) ? "BlackBerry" : /fban|fbav/i.test(t) ? "Facebook Mobile" : /(edge|edgios|edga|edg)/i.test(t) ? "Edge" : -1 !== t.indexOf("Chrome") ? "Chrome" : -1 !== t.indexOf("CriOS") ? "Chrome iOS" : /fban|fbav/i.test(t) ? "Facebook Mobile" : -1 !== e.indexOf("Apple") ? -1 !== t.indexOf("Mobile") ? "Mobile Safari" : "Safari" : -1 !== t.indexOf("Android") ? "Android Mobile" : -1 !== t.indexOf("Konqueror") ? "Konqueror" : -1 !== t.indexOf("Firefox") ? "Firefox" : -1 !== t.indexOf("MSIE") || -1 !== t.indexOf("Trident/") ? "Internet Explorer" : -1 !== t.indexOf("Gecko") ? "Mozilla" : ""
        },
        t.referringDomain = function() {
            var e = document.referrer.split("/");
            return e.length >= 3 ? e[2] : ""
        },
        t.device = function() {
            var e = navigator.userAgent;
            return /iPad/.test(e) ? "iPad" : /iPod/.test(e) ? "iPod Touch" : /iPhone/.test(e) ? "iPhone" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : /Windows Phone/i.test(e) ? "Windows Phone" : /Android/.test(e) ? "Android" : ""
        }
    },
    "R/2T": function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = a("IQ6H"),
            r = n(a("jaGz"));
        t.default = c.withOptimizely(r.default)
    },
    TIrn: function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
            return (n = Object.assign || function(e) {
                for (var t, a = 1, n = arguments.length; a < n; a++)
                    for (var c in t = arguments[a])
                        Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
                return e
            }).apply(this, arguments)
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.init = t.share = t.getShareLink = t.State = void 0;
        var c = a("K9qA"),
            r = a("P1Sn");
        function i(e, t) {
            return "https://twitter.com/intent/tweet?" + r.serializeParams({
                lang: "en",
                text: t || "",
                url: e
            })
        }
        function _(e, a) {
            void 0 === a && (a = {});
            var i = n(n({}, t.State.defaultShareOptions), a),
                _ = i.height,
                o = i.width;
            if (c.canUseWindow()) {
                var s = window.screenX,
                    l = window.screenY,
                    p = window.outerWidth,
                    u = window.outerHeight,
                    d = (s = s < 0 ? window.screen.width + s : s) + (p - o) / 2,
                    m = (l = l < 0 ? window.screen.height + l : l) + (u - _) / 2.5,
                    f = r.serializeParams(n(n({}, i), {
                        left: d,
                        top: m
                    }), ",");
                window.open(e, "popup", f)
            }
        }
        function o() {
            !t.State.isInit && c.canUseWindow() && (window.twttr = function(e, a, n) {
                var c = e.getElementsByTagName(a)[0],
                    r = window.twttr || {};
                if (e.getElementById(t.State.elementId))
                    return r;
                var i = e.createElement(a);
                return i.id = n, i.src = "https://platform.twitter.com/widgets.js", c.parentNode.insertBefore(i, c), r._e = [], r.ready = function(e) {
                    r._e.push(e)
                }, r
            }(document, "script", t.State.elementId), window.twttr.ready((function() {
                t.State.isInit = !0
            })))
        }
        t.State = {
            defaultShareOptions: {
                height: 580,
                width: 325
            },
            elementId: "twitter-wjs",
            isInit: !1
        },
        t.getShareLink = i,
        t.share = _,
        t.init = o,
        t.default = {
            getShareLink: i,
            init: o,
            share: _,
            State: t.State
        }
    },
    TUt7: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = n(a("q1tI")),
            r = a("qhky"),
            i = a("wE+H"),
            _ = n(a("mWGl"));
        function o(e) {
            var t = e.description,
                a = e.image,
                n = e.locale,
                i = e.title,
                o = e.url;
            _.default.description = t,
            _.default.image = a,
            _.default.locale = n,
            _.default.title = i,
            _.default.url = o;
            var s = _.default.tags();
            return c.default.createElement(r.Helmet, null, s.map((function(e, t) {
                return c.default.createElement("meta", {
                    key: t,
                    property: e.property,
                    content: e.content
                })
            })))
        }
        o.defaultProps = {
            locale: i.SupportedLocales.ENGLISH_US
        },
        t.default = o
    },
    "VU+c": function(e, t, a) {
        "use strict";
        var n = this && this.__values || function(e) {
            var t = "function" == typeof Symbol && Symbol.iterator,
                a = t && e[t],
                n = 0;
            if (a)
                return a.call(e);
            if (e && "number" == typeof e.length)
                return {
                    next: function() {
                        return e && n >= e.length && (e = void 0), {
                            value: e && e[n++],
                            done: !e
                        }
                    }
                };
            throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getSupportedLocale = t.getLocaleObject = t.getISO15897Locale = t.getBCP47Locale = void 0;
        var c = a("wE+H");
        function r(e) {
            return e.replace("_", "-")
        }
        function i(e) {
            return e.replace("-", "_")
        }
        function _(e) {
            var t = e.split(/[-_]/),
                a = 2 === t.length ? t[0] : "en";
            return {
                country: 2 === t.length ? t[1] : "US",
                language: a,
                locale: {
                    bcp47: r(e),
                    iso15897: i(e)
                }
            }
        }
        t.getBCP47Locale = r,
        t.getISO15897Locale = i,
        t.getLocaleObject = _,
        t.getSupportedLocale = function(e, t) {
            var a,
                r,
                i,
                o;
            void 0 === t && (t = c.SupportedLocaleFormats.ISO15897);
            var s = function(e) {
                    switch (t) {
                    case c.SupportedLocaleFormats.BCP47:
                        return e.locale.bcp47;
                    case c.SupportedLocaleFormats.ISO15897:
                        return e.locale.iso15897
                    }
                },
                l = _(c.SupportedLocales.ENGLISH_US),
                p = _(e),
                u = Object.values(c.SupportedLocales).map((function(e) {
                    return _(e)
                }));
            try {
                for (var d = n(u), m = d.next(); !m.done; m = d.next()) {
                    var f = m.value;
                    if (p.locale.iso15897 === f.locale.iso15897)
                        return s(f)
                }
            } catch (h) {
                a = {
                    error: h
                }
            } finally {
                try {
                    m && !m.done && (r = d.return) && r.call(d)
                } finally {
                    if (a)
                        throw a.error
                }
            }
            try {
                for (var E = n(u), A = E.next(); !A.done; A = E.next()) {
                    f = A.value;
                    if (p.language === f.language)
                        return s(f)
                }
            } catch (g) {
                i = {
                    error: g
                }
            } finally {
                try {
                    A && !A.done && (o = E.return) && o.call(E)
                } finally {
                    if (i)
                        throw i.error
                }
            }
            return s(l)
        }
    },
    VZmU: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("qFvJ");
        Object.defineProperty(t, "GlobalSearch", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    "W+/n": function(e, t, a) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function(e, t, a, n) {
                void 0 === n && (n = a),
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function() {
                        return t[a]
                    }
                })
            } : function(e, t, a, n) {
                void 0 === n && (n = a),
                e[n] = t[a]
            }),
            c = this && this.__exportStar || function(e, t) {
                for (var a in e)
                    "default" === a || t.hasOwnProperty(a) || n(t, e, a)
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        c(a("9PeI"), t)
    },
    W2No: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("m/j/");
        Object.defineProperty(t, "Gesture", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    W48H: function(e) {
        e.exports = JSON.parse('{"de_DE":{"packages-util-date-time":{"Today":"Heute","Yesterday":"Gestern"}},"fr_FR":{"packages-util-date-time":{"Today":"Aujourd\'hui","Yesterday":"Hier"}},"en_GB":{"packages-util-date-time":{"Today":"Today","Yesterday":"Yesterday"}},"es_ES":{"packages-util-date-time":{"Today":"Hoy","Yesterday":"Ayer"}},"it_IT":{"packages-util-date-time":{"Today":"Oggi","Yesterday":"Ieri"}},"nl_NL":{"packages-util-date-time":{"Today":"Vandaag","Yesterday":"Gisteren"}},"pt_BR":{"packages-util-date-time":{"Today":"Hoje","Yesterday":"Ontem"}},"fr_CA":{"packages-util-date-time":{"Today":"Aujourd\'hui","Yesterday":"Hier"}},"en_US":{"packages-util-date-time":{"Today":"Today","Yesterday":"Yesterday"}}}')
    },
    WRpi: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("1tSO");
        Object.defineProperty(t, "AlgoliaCustomHighlight", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    WdIC: function(e, t, a) {
        var n,
            c,
            r = a("+Zow"),
            i = a("9npq"),
            _ = 0,
            o = 0;
        e.exports = function(e, t, a) {
            var s = t && a || 0,
                l = t || [],
                p = (e = e || {}).node || n,
                u = void 0 !== e.clockseq ? e.clockseq : c;
            if (null == p || null == u) {
                var d = r();
                null == p && (p = n = [1 | d[0], d[1], d[2], d[3], d[4], d[5]]),
                null == u && (u = c = 16383 & (d[6] << 8 | d[7]))
            }
            var m = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
                f = void 0 !== e.nsecs ? e.nsecs : o + 1,
                E = m - _ + (f - o) / 1e4;
            if (E < 0 && void 0 === e.clockseq && (u = u + 1 & 16383), (E < 0 || m > _) && void 0 === e.nsecs && (f = 0), f >= 1e4)
                throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
            _ = m,
            o = f,
            c = u;
            var A = (1e4 * (268435455 & (m += 122192928e5)) + f) % 4294967296;
            l[s++] = A >>> 24 & 255,
            l[s++] = A >>> 16 & 255,
            l[s++] = A >>> 8 & 255,
            l[s++] = 255 & A;
            var h = m / 4294967296 * 1e4 & 268435455;
            l[s++] = h >>> 8 & 255,
            l[s++] = 255 & h,
            l[s++] = h >>> 24 & 15 | 16,
            l[s++] = h >>> 16 & 255,
            l[s++] = u >>> 8 | 128,
            l[s++] = 255 & u;
            for (var g = 0; g < 6; ++g)
                l[s + g] = p[g];
            return t || i(l)
        }
    },
    YHo4: function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var c in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
                    return e
                }).apply(this, arguments)
            },
            c = this && this.__rest || function(e, t) {
                var a = {};
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var c = 0;
                    for (n = Object.getOwnPropertySymbols(e); c < n.length; c++)
                        t.indexOf(n[c]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[c]) && (a[n[c]] = e[n[c]])
                }
                return a
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a("QuWQ"),
            i = function() {
                function e(e) {
                    this.name = "Optimizely",
                    this.data = {},
                    this.ready = !1,
                    this.optimizelyClient = void 0,
                    this.optimizelyClient = e
                }
                return e.prototype.isReady = function() {
                    return this.ready
                }, e.prototype.init = function() {
                    var e = this;
                    this.optimizelyClient && this.optimizelyClient.onReady().then((function() {
                        e.ready = !0
                    }))
                }, e.prototype.instanceOfDataType = function(e, t) {
                    var a = this.parseEvent(e, t);
                    return N.hasOwnProperty(this.getEventName(a))
                }, e.prototype.prepareData = function(e, t) {
                    var a = this.parseEvent(e, t),
                        c = this.getEventName(a),
                        i = N[c];
                    return i ? (i.customEventHandler && (a = i.customEventHandler(a, this)), i.eventTypePrefix && (c = i.eventTypePrefix + "." + c), n(n({}, a), {
                        browser: r.browser(),
                        device: r.device(),
                        os: r.getOs(),
                        type: c
                    })) : a
                }, e.prototype.push = function(e, t) {
                    return this.trackEvent(e, t)
                }, e.prototype.trackEvent = function(e, t) {
                    var a = e.type,
                        n = c(e, ["type"]);
                    return a && this.data.distinctId && this.optimizelyClient && this.isReady() && this.optimizelyClient.track(a, this.data.distinctId, n), {}
                }, e.prototype.getEventName = function(e) {
                    if (!e || !e.type)
                        return "";
                    switch (e.type) {
                    case "mp_page_view":
                        return "view." + e.viewId;
                    case "mp_page_click":
                        return "click." + e.viewId + "." + e.elementId;
                    default:
                        return e.type
                    }
                }, e.prototype.parseEvent = function(e, t) {
                    if (("click" === e.type || "mp_page_click" === e.type) && !e.viewId && t) {
                        var a = t.closest("[data-view-id]");
                        e.viewId = a && a instanceof HTMLElement ? a.dataset.viewId : ""
                    }
                    if (("click" === e.type || "mp_page_click" === e.type) && !e.elementId && t) {
                        var n = t.closest("[data-element-id]");
                        e.elementId = n && n instanceof HTMLElement ? n.dataset.elementId : ""
                    }
                    return "click" === e.type && (e.type = "mp_page_click"), e
                }, e
            }();
        t.default = i;
        var _ = {
                eventTypePrefix: "cc"
            },
            o = {
                "view.pg_campaign_doors": _,
                "click.pg_campaign_doors.btn_campaign_personal_door": _,
                "click.pg_campaign_doors.btn_campaign_nonprofit_door": _
            },
            s = {
                "view.pg_campaign_details": _,
                "click.pg_campaign_details.btn_next_campaign_details": _
            },
            l = {
                "view.pg_charity_campaign_details": _,
                "click.pg_charity_campaign_details.btn_next": _
            },
            p = {
                "view.pg_campaign_goal": _,
                "click.pg_campaign_goal.btn_next_campaign_goal": _
            },
            u = {
                "view.pg_campaign_media": _,
                "view.pg_charity_campaign_media": _,
                "click.pg_campaign_media.btn_next_campaign_media": _,
                "click.pg_campaign_media.btn_next_campaign_photo_upload": _
            },
            d = {
                "view.pg_campaign_story": _,
                "view.pg_charity_campaign_story": _,
                "click.pg_campaign_story.btn_complete_fundraiser_story_editor": _
            },
            m = {
                "view.pg_campaign_ppgfagreement": _,
                "view.pg_charity_campaign_ppgfagreement": _,
                "click.pg_campaign_ppgfagreement.btn_next": _
            },
            f = {
                "view.pg_campaign_kyc": _,
                "click.pg_campaign_kyc.btn_complete": _
            },
            E = {
                "view.pg_campaign_ready": _
            },
            A = {
                "view.pg_w_share-sheet1": _,
                "click.pg_w_share-sheet1.btn_next": _,
                "click.pg_w_share-sheet1.btn_ss_facebook_post": _,
                "click.pg_w_share-sheet1.btn_ss_email_client": _,
                "click.pg_w_share-sheet1.btn_ss_instagram": _,
                "click.pg_w_share-sheet1.btn_ss_linkedin": _,
                "click.pg_w_share-sheet1.btn_ss_twitter_client": _,
                "click.pg_w_share-sheet1.btn_ss_whatsapp": _,
                "click.pg_w_share-sheet1.btn_ss_more": _,
                "click.pg_w_share-sheet1.btn_ss_text_client": _,
                "click.pg_w_share-sheet1.btn_ss_messenger": _,
                "click.pg_w_share-sheet1.btn_ss_copylink": _,
                "click.pg_w_share-sheet1.input_ss_copy_link": _
            },
            h = {
                "view.pg_w_share_message2": _,
                "click.pg_w_share_message2.btn_back": _,
                "click.pg_w_share_message2.btn_manage": _,
                "click.pg_w_share_message2.btn_continue": _
            },
            g = {
                "view.team_product_upsell_2": _,
                "click.team_product_upsell_2.btn_teaminvite_submit": _
            },
            T = {
                eventTypePrefix: "campaign_page"
            },
            b = {
                customEventHandler: function(e, t) {
                    return t && t.trackEvent && t.trackEvent(n(n({}, e), {
                        type: "campaign_page.click.pg_donate_index.donate_button_clicks"
                    })), e
                },
                eventTypePrefix: "campaign_page"
            },
            O = {
                "click.lb_donation_list.btn_donations_donate": b,
                "click.lb_donation_top.btn_donations_donate": b,
                "click.pg_donate_index.btn_exp_donate": b,
                "click.lb_donation_top.btn_exp_donate": b,
                "click.lb_donation_list.btn_exp_donate": b,
                "click.pg_donate_index.btn_story_donate": b,
                "click.lb_donation_list.btn_donations_message": b,
                "click.pg_donate_index.btn_donate": b,
                "click.pg_donate_index.btn_donate_sticky": b,
                "click.pg_donate_index.btn_nav_donate": b,
                "click.pg_donate_index.btn_navmenu_donate": b,
                "click.pg_donate_index.btn_donate_comment": b,
                "click.pg_donate_index.btn_donate_guarantee": b,
                "click.lb_updates.btn_donate_update": b,
                "click.pg_donate_index.btn_donate_guidance": T
            },
            S = {
                customEventHandler: function(e, t) {
                    return t && t.trackEvent && (t.trackEvent(n(n({}, e), {
                        type: "campaign_page.click.pg_donate_index.share_clicks"
                    })), t.trackEvent(n(n({}, e), {
                        type: "capapodo.click.shares"
                    }))), e
                },
                eventTypePrefix: "campaign_page"
            },
            R = {
                "click.lb_share.btn_share_copy_link": S,
                "click.lb_share.btn_share_email": S,
                "click.lb_share.btn_share_facebook": S,
                "click.lb_share.btn_share_fbmessenger": S,
                "click.lb_share.btn_share_sms": S,
                "click.lb_share.btn_share_twitter": S,
                "click.lb_share.btn_share_whatsapp": S,
                "click.lb_share.input_share_copy_link": S,
                "click.lb_share.btn_share_copy_link_tip": S,
                "click.lb_share.btn_share_print": S,
                "click.lb_share_embed.btn_share_embed_copy": S,
                "click.lb_share_embed.input_share_embed_copy": S,
                "click.pg_donate_index.pg_guidance_card_facebook": S,
                "click.pg_donate_index.pg_guidance_card_link": S
            },
            y = {
                customEventHandler: function(e, t) {
                    return t && t.trackEvent && t.trackEvent(n(n({}, e), {
                        type: "campaign_page.click.pg_donate_index.share_button_clicks"
                    })), e
                },
                eventTypePrefix: "campaign_page"
            },
            v = {
                "click.pg_donate_index.btn_nav_share": y,
                "click.pg_donate_index.btn_share": y,
                "click.pg_donate_index.btn_exp_share": y,
                "click.lb_donation_top.btn_exp_share": y,
                "click.lb_donation_list.btn_exp_share": y,
                "click.pg_donate_index.btn_share_sticky": y,
                "click.pg_donate_index.btn_story_share": y,
                "click.lb_updates.btn_share_update": y
            },
            k = {
                eventTypePrefix: "post_donate"
            },
            P = {
                "view.lb_postdonate_comment": k,
                "click.lb_postdonate_comment.btn_comment": k,
                "view.lb_postdonate_share": k
            },
            C = {
                customEventHandler: function(e, t) {
                    return t && t.trackEvent && (t.trackEvent(n(n({}, e), {
                        type: "post_donate.click.lb_postdonate_share.share_clicks"
                    })), t.trackEvent(n(n({}, e), {
                        type: "capapodo.click.shares"
                    }))), e
                },
                eventTypePrefix: "post_donate"
            },
            w = {
                "click.lb_postdonate_share.btn_share_facebook": C,
                "click.lb_postdonate_share.btn_share_twitter": C,
                "click.lb_postdonate_share.btn_share_email": C,
                "click.lb_postdonate_share.btn_share_copy_link": C,
                "click.lb_postdonate_share.input_share_copy_link": C,
                "click.lb_postdonate_share.btn_share_whatsapp": C,
                "click.lb_postdonate_share.btn_share_sms": C,
                "click.lb_postdonate_share.btn_share_fbmessenger": C,
                "click.mg_donation.share_facebook": C,
                "click.mg_donation.share_twitter": C,
                "click.mg_donation.share_email": C,
                "click.mg_donation.share_copy_link": C,
                "click.mg_donation.share_copy_link_input": C,
                "click.mg_donation.share_whatsapp": C
            },
            N = n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n({
                test_event_1: {},
                "view.test_view_id": {},
                "click.test_view_id.test_element_id": {
                    eventTypePrefix: "test_prefix"
                },
                customize_complete: {},
                donation_complete: {},
                p41_sidebar_donate_button_click: {},
                p41_sidebar_share_button_click: {}
            }, {
                "view.pg_donate_index": T,
                "view.lb_donation_top": T,
                "click.lb_share.btn_share_moreshares": T,
                "click.pg_donate_index.btn_donate_moredonations": T,
                "click.lb_share.btn_share_embed": T
            }), O), R), v), P), w), o), s), l), p), u), d), m), f), E), A), h), g)
    },
    YO77: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("3xur");
        Object.defineProperty(t, "Favicon", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    YWhY: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.trackExperimentExposure = t.useTrackViewIdOnMount = void 0;
        var n = a("q1tI"),
            c = a("+Ded");
        t.useTrackViewIdOnMount = function(e, t) {
            "undefined" != typeof window && (t && window.location.pathname !== t || n.useEffect((function() {
                c.trackEvents.push({
                    type: "mp_page_view",
                    viewId: e
                })
            }), [e]))
        },
        t.trackExperimentExposure = function(e) {
            var t = e.experimentName,
                a = e.variantName,
                n = e.amplitudeNamespace,
                r = e.platform;
            c.trackEvents.trackExposure({
                experiment: {
                    distinctId: c.uuid.getDistinctId(),
                    name: t,
                    variant: a
                },
                platform: r
            }, n)
        }
    },
    "Yxr/": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.UserRoles = t.TeamMemberStatus = t.SupportedLocales = t.SupportedLocaleFormats = t.mediaTypes = t.Locale = t.IdentityType = t.Keys = t.BannerStatus = void 0,
        function(e) {
            e.COOKIE = "cookie",
            e.ERROR = "error",
            e.INFO = "info",
            e.SUCCESS = "success",
            e.WARNING = "warning"
        }(t.BannerStatus || (t.BannerStatus = {})),
        function(e) {
            e.ARROW_LEFT = "ArrowLeft",
            e.ARROW_RIGHT = "ArrowRight",
            e.ESCAPE = "Escape"
        }(t.Keys || (t.Keys = {})),
        function(e) {
            e.anonymous = "anonymous",
            e.charity = "charity",
            e.partner = "partner",
            e.person = "person",
            e.team = "team"
        }(t.IdentityType || (t.IdentityType = {})),
        function(e) {
            e.ENGLISH_US = "en-US",
            e.DUTCH_NL = "nl-NL",
            e.ENGLISH_AU = "en-AU",
            e.ENGLISH_CA = "en-CA",
            e.ENGLISH_GB = "en-GB",
            e.ENGLISH_IE = "en-IE",
            e.FRENCH_CA = "fr-CA",
            e.FRENCH_FR = "fr-FR",
            e.GERMAN_DE = "de-DE",
            e.ITALIAN_IT = "it-IT",
            e.PORTUGUESE_BR = "pt-BR",
            e.SPANISH_ES = "es-ES"
        }(t.Locale || (t.Locale = {})),
        function(e) {
            e[e.YOUTUBE = 0] = "YOUTUBE",
            e[e.PHOTO = 1] = "PHOTO",
            e[e.VIMEO = 2] = "VIMEO",
            e[e.AMAZON = 3] = "AMAZON",
            e[e.FACEBOOK_AWS = 4] = "FACEBOOK_AWS"
        }(t.mediaTypes || (t.mediaTypes = {})),
        function(e) {
            e[e.BCP47 = 0] = "BCP47",
            e[e.ISO15897 = 1] = "ISO15897"
        }(t.SupportedLocaleFormats || (t.SupportedLocaleFormats = {})),
        function(e) {
            e.ENGLISH_US = "en_US",
            e.DUTCH_NL = "nl_NL",
            e.ENGLISH_GB = "en_GB",
            e.FRENCH_FR = "fr_FR",
            e.FRENCH_CA = "fr_CA",
            e.GERMAN_DE = "de_DE",
            e.ITALIAN_IT = "it_IT",
            e.PORTUGUESE_BR = "pt_BR",
            e.SPANISH_ES = "es_ES"
        }(t.SupportedLocales || (t.SupportedLocales = {})),
        function(e) {
            e[e.INACTIVE = 0] = "INACTIVE",
            e[e.ACTIVE = 1] = "ACTIVE",
            e[e.ADMIN = 2] = "ADMIN"
        }(t.TeamMemberStatus || (t.TeamMemberStatus = {})),
        function(e) {
            e.BENEFICIARY = "BENEFICIARY",
            e.ORGANIZER = "ORGANIZER",
            e.TEAM_MEMBER = "TEAM_MEMBER"
        }(t.UserRoles || (t.UserRoles = {}))
    },
    "Zd+z": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.DropdownLanguages = void 0;
        var n = a("Yxr/");
        t.DropdownLanguages = [{
            text: "Deutsch",
            value: n.SupportedLocales.GERMAN_DE
        }, {
            text: "English (US)",
            value: n.SupportedLocales.ENGLISH_US
        }, {
            text: "English (UK)",
            value: n.SupportedLocales.ENGLISH_GB
        }, {
            text: "Español",
            value: n.SupportedLocales.SPANISH_ES
        }, {
            text: "Français",
            value: n.SupportedLocales.FRENCH_FR
        }, {
            text: "Italiano",
            value: n.SupportedLocales.ITALIAN_IT
        }, {
            text: "Nederlands",
            value: n.SupportedLocales.DUTCH_NL
        }, {
            text: "Português",
            value: n.SupportedLocales.PORTUGUESE_BR
        }]
    },
    aC4L: function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
            return (n = Object.assign || function(e) {
                for (var t, a = 1, n = arguments.length; a < n; a++)
                    for (var c in t = arguments[a])
                        Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
                return e
            }).apply(this, arguments)
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getProfilePicture = t.logMeOut = t.getMe = t.login = t.init = t.share = t.shareOnMessengerWeb = t.getShareLink = t.setAppId = t.Facebook = t.FacebookAppId = void 0;
        var c,
            r = a("uJzr"),
            i = a("K9qA"),
            _ = a("pxbj"),
            o = a("mvnV");
        !function(e) {
            e.Production = "407682420960",
            e.Testing = "10155108191010961"
        }(c = t.FacebookAppId || (t.FacebookAppId = {})),
        t.Facebook = {
            appId: c.Production,
            defaultShareOptions: {
                directories: "no",
                height: 580,
                location: "no",
                menubar: "no",
                resizable: "yes",
                scrollbars: "no",
                status: "no",
                toolbar: "no",
                width: 325
            },
            isInit: !1
        },
        t.setAppId = function(e) {
            t.Facebook.appId = e
        },
        t.getShareLink = function(e, a, n) {
            return void 0 === a && (a = "popup"), i.canUseWindow() ? "https://www.facebook.com/dialog/share?" + _.serializeParams({
                app_id: t.Facebook.appId,
                display: a,
                href: e
            }) : "https://www.facebook.com/sharer/sharer.php?" + _.serializeParams({
                href: e
            })
        },
        t.shareOnMessengerWeb = function(e) {
            FB.ui({
                display: "popup",
                link: e,
                method: "send"
            })
        },
        t.share = function(e, a) {
            void 0 === a && (a = {});
            var c = n(n({}, t.Facebook.defaultShareOptions), a),
                s = c.height,
                l = c.width;
            if (i.canUseWindow()) {
                r.isAndroid() && r.isFacebookBrowser() && o.removeUtmParams();
                var p = window.screenX,
                    u = window.screenY,
                    d = window.outerWidth,
                    m = window.outerHeight,
                    f = (p = p < 0 ? window.screen.width + p : p) + (d - l) / 2,
                    E = (u = u < 0 ? window.screen.height + u : u) + (m - s) / 2.5,
                    A = _.serializeParams(n(n({}, c), {
                        left: f,
                        top: E
                    }), ",");
                window.open(e, "fbpopup", A)
            }
        },
        t.init = function(e) {
            var a,
                n,
                r,
                _;
            void 0 === e && (e = c.Production),
            !t.Facebook.isInit && i.canUseWindow() && (t.Facebook.appId = e, window.fbAsyncInit = function() {
                FB.init({
                    appId: t.Facebook.appId,
                    version: "v7.0",
                    xfbml: !0
                }),
                t.Facebook.isInit = !0
            }, a = document, n = "script", r = a.getElementsByTagName(n)[0], (_ = a.createElement(n)).id = "facebook-jssdk", _.src = "https://connect.facebook.net/en_US/sdk.js", r && r.parentNode.insertBefore(_, r))
        },
        t.login = function() {
            return new Promise((function(e, t) {
                var a = function(a) {
                        a.authResponse && "connected" === a.status ? e(a.authResponse) : t(a)
                    },
                    n = {
                        scope: "email"
                    };
                if (FB)
                    FB.login(a, n);
                else
                    var c = setInterval((function() {
                        FB && (clearInterval(c), FB.login(a, n))
                    }), 500)
            }))
        },
        t.getMe = function() {
            return new Promise((function(e) {
                FB.api("/me", {
                    fields: ["email", "first_name", "last_name"]
                }, (function(t) {
                    e(t)
                }))
            }))
        },
        t.logMeOut = function() {
            return new Promise((function(e) {
                FB.logout((function(t) {
                    e(t)
                }))
            }))
        },
        t.getProfilePicture = function(e) {
            return "https://graph.facebook.com/v7.0/" + e + "/picture"
        }
    },
    aUZA: function(e, t, a) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function(e, t, a, n) {
                void 0 === n && (n = a),
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function() {
                        return t[a]
                    }
                })
            } : function(e, t, a, n) {
                void 0 === n && (n = a),
                e[n] = t[a]
            }),
            c = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            r = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && n(t, e, a);
                return c(t, e), t
            },
            i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var _ = a("er2r"),
            o = a("+Ded"),
            s = r(a("kCI4")),
            l = i(a("q1tI"));
        t.default = function(e) {
            var t = e.children,
                a = e.dataFile,
                n = e.distinctId,
                c = s.getInstance({
                    datafile: a
                });
            return _.useWindow((function() {
                try {
                    var e = new o.platforms.Optimizely(c);
                    o.trackEvents.addPlatform(e),
                    o.trackEvents.getPlatform("Optimizely").setData({
                        distinctId: n
                    })
                } catch (t) {
                    console.error(t)
                }
            }), [c]), l.default.createElement(l.default.Fragment, null, t(c))
        }
    },
    bS76: function(e, t, a) {
        "use strict";
        a.r(t),
        t.default = a.p + "static/media/favicon.57014bbba2b407fa38a1d91a2ec3b8d5.ico"
    },
    c6N4: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = n(a("q1tI")),
            r = a("7xpE");
        t.default = function(e) {
            var t = e.children,
                a = e.indexName;
            return c.default.createElement(r.Index, {
                indexName: a
            }, c.default.createElement(r.Configure, {
                hitsPerPage: 3,
                attributesToRetrieve: ["query"],
                attributesToHighlight: ["query"]
            }), t)
        }
    },
    d8of: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("M9U4");
        Object.defineProperty(t, "GlobalHead", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    dZCW: function(e, t, a) {
        "use strict";
        a.r(t),
        t.default = a.p + "static/media/safari-pinned-tab.2ac558c1903742f55face86d45eae37b.svg"
    },
    dhGX: function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var c in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
                    return e
                }).apply(this, arguments)
            },
            c = this && this.__rest || function(e, t) {
                var a = {};
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var c = 0;
                    for (n = Object.getOwnPropertySymbols(e); c < n.length; c++)
                        t.indexOf(n[c]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[c]) && (a[n[c]] = e[n[c]])
                }
                return a
            },
            r = this && this.__read || function(e, t) {
                var a = "function" == typeof Symbol && e[Symbol.iterator];
                if (!a)
                    return e;
                var n,
                    c,
                    r = a.call(e),
                    i = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(n = r.next()).done;)
                        i.push(n.value)
                } catch (_) {
                    c = {
                        error: _
                    }
                } finally {
                    try {
                        n && !n.done && (a = r.return) && a.call(r)
                    } finally {
                        if (c)
                            throw c.error
                    }
                }
                return i
            },
            i = this && this.__spread || function() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e = e.concat(r(arguments[t]));
                return e
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var _ = a("+Ded"),
            o = function() {
                function e(e, t, a, n) {
                    this.name = "Amplitude",
                    this.data = {},
                    this.ready = !1,
                    this.amplitudeConfigOverride = {},
                    this.experimentExposures = {},
                    this.amplitudeClient = e,
                    this.APIKey = t,
                    this.userIdentifier = a,
                    this.amplitudeConfigOverride = n
                }
                return e.prototype.isReady = function() {
                    return this.ready
                }, e.prototype.init = function() {
                    var e = this;
                    this.amplitudeClient && this.APIKey && (this.amplitudeClient.init(this.APIKey, this.userIdentifier, n({
                        deviceId: _.uuid.getDistinctId(),
                        includeGclid: !0,
                        includeReferrer: !0,
                        includeUtm: !0,
                        saveParamsReferrerOncePerSession: !1
                    }, this.amplitudeConfigOverride), (function() {
                        e.ready = !0
                    })), this.amplitudeClient.setDeviceId(_.uuid.getDistinctId()))
                }, e.prototype.setData = function(e) {
                    if (e) {
                        if (e.hasOwnProperty("personId") && this.amplitudeClient) {
                            var t = e.personId ? JSON.stringify(e.personId) : null;
                            this.amplitudeClient.setUserId(t)
                        }
                        this.data = n(n({}, this.data), e)
                    }
                }, e.prototype.instanceOfDataType = function(e, t) {
                    var a = this.parseEvent(e, t);
                    return D.hasOwnProperty(this.getEventName(a))
                }, e.prototype.prepareData = function(e, t) {
                    var a = this,
                        c = this.parseEvent(e, t),
                        r = D[this.getEventName(c)];
                    if (!r)
                        return c;
                    var i = c;
                    r.eventDataKeys && (i = {}, r.eventDataKeys.forEach((function(e) {
                        c.hasOwnProperty(e) ? i[e] = c[e] : a.data.hasOwnProperty(e) && (i[e] = a.data[e])
                    })));
                    var _ = this.getEventName(c);
                    return r.eventTypePrefix && (_ = r.eventTypePrefix + ":" + _), n(n({}, i), {
                        type: _
                    })
                }, e.prototype.push = function(e, t) {
                    return this.trackEvent(e, t)
                }, e.prototype.trackEvent = function(e, t) {
                    var a = e.type,
                        n = c(e, ["type"]);
                    return a && this.amplitudeClient && this.isReady() && this.amplitudeClient.logEvent(a, n), {}
                }, e.prototype.trackExposure = function(e, t, a) {
                    var n,
                        c;
                    e && e.experiment && (c = e.experiment.name + ":" + e.experiment.variant);
                    var r = a || "misc_experiments";
                    return this.experimentExposures.hasOwnProperty(r) || (this.experimentExposures[r] = new Set), !c || this.experimentExposures[r].has(c) || this.amplitudeClient && c && (this.experimentExposures[r].add(c), this.amplitudeClient.setUserProperties(((n = {})[r] = Array.from(this.experimentExposures[r]), n))), {}
                }, e.prototype.getEventName = function(e) {
                    if (!e || !e.type)
                        return "";
                    switch (e.type) {
                    case "mp_page_view":
                        return e.viewId, "view:" + e.viewId;
                    case "mp_page_click":
                        return !e.viewId || e.elementId, "click:" + e.viewId + ":" + e.elementId;
                    default:
                        return e.type
                    }
                }, e.prototype.parseEvent = function(e, t) {
                    if (("click" === e.type || "mp_page_click" === e.type) && !e.viewId && t) {
                        var a = t.closest("[data-view-id]");
                        e.viewId = a && a instanceof HTMLElement ? a.dataset.viewId : ""
                    }
                    if (("click" === e.type || "mp_page_click" === e.type) && !e.elementId && t) {
                        var n = t.closest("[data-element-id]");
                        e.elementId = n && n instanceof HTMLElement ? n.dataset.elementId : ""
                    }
                    return "click" === e.type && (e.type = "mp_page_click"), e
                }, e
            }();
        t.default = o;
        var s = {
                eventDataKeys: ["campaignCreatedDate", "campaignCategory", "campaignCommentCount", "campaignZipCode", "campaignHasBeneficiary", "campaignHasCharity", "campaignHasGFMOrgDonation", "campaignHasTeam", "campaignAmountRaised", "campaignDonationCount", "campaignUpdateCount", "campaignLatestUpdate", "campaignTags", "campaignGoalAmount", "campaignId", "checkoutId", "donationId", "userRole", "campaignHasComments", "behindModal"],
                eventTypePrefix: "campaign_page"
            },
            l = {
                eventDataKeys: i(s.eventDataKeys, ["widgetVersion"]),
                eventTypePrefix: "campaign_page"
            },
            p = {
                eventDataKeys: ["charityId", "fundId", "userId"],
                eventTypePrefix: "charity_page"
            },
            u = {
                eventDataKeys: ["charityId", "fundId", "userId"],
                eventTypePrefix: "post_donate"
            },
            d = {
                eventDataKeys: ["paymentProcessor", "donorCountry", "campaignType", "checkoutId", "donationId", "donorLanguage"],
                eventTypePrefix: "post_donate"
            },
            m = {
                eventDataKeys: ["completionType", "susiInviteType"],
                eventTypePrefix: "susi"
            },
            f = {
                eventDataKeys: ["completionType"],
                eventTypePrefix: "cp_susi"
            },
            E = {
                eventDataKeys: ["fundId", "fundUrl", "fundGoal", "beneUserId", "categoryId", "charityId", "charityName", "country", "currency", "currentAmount", "fundName", "isLaunched", "launchDate", "projectType", "updateCount", "userId", "zip", "storyCharCount", "storyPhotoVideoCount", "teamId", "teamStatus", "titleCharCount", "isFirstTimeCreate", "timeoutStart", "createdAt", "teamInvitesVolume", "prefilledCharity"],
                eventTypePrefix: "campaign_create"
            },
            A = {
                eventTypePrefix: "search_page"
            },
            h = {
                eventDataKeys: ["bannerName", "bannerType", "campaignId", "campaignCreatedAt", "campaignCategoryId", "campaignZipCode", "campaignHasTeam", "campaignHasTeamInvites", "campaignHasTeamMembers", "campaignHasUpdates", "campaignDonationCount", "campaignHasInvitedContacts", "upsellNumber", "userRole"],
                eventTypePrefix: "dashboard"
            },
            g = {
                eventDataKeys: ["paymentMethodsAvailable", "paymentMethodSelected", "tipPercentage", "tipPercentageDefault", "tippingMethod", "projectType"],
                eventTypePrefix: "unified_checkout"
            },
            T = {
                eventTypePrefix: "legacy_checkout"
            },
            b = {
                eventDataKeys: ["bannerRegion", "bannerId"],
                eventTypePrefix: "home"
            },
            O = {
                eventTypePrefix: "signout"
            },
            S = {
                eventTypePrefix: "search_results"
            },
            R = {
                eventTypePrefix: "teams_landing"
            },
            y = {
                eventTypePrefix: "category_pages"
            },
            v = {
                eventTypePrefix: "account_settings"
            },
            k = {
                eventTypePrefix: "home"
            },
            P = {
                eventTypePrefix: "susi"
            },
            C = {
                eventDataKeys: ["indexPosition", "searchEntry"],
                eventTypePrefix: "search_dropdown"
            },
            w = {
                eventDataKeys: ["bannerName", "bannerType", "userId", "fundId", "fundUrl", "fundCountry", "fundBalance", "documentType", "withdrawalBeneficiary", "withdrawalType", "paymentProcessor", "isBeneficiary", "currency"],
                eventTypePrefix: "mymoney"
            },
            N = {
                eventDataKeys: ["basePage"],
                eventTypePrefix: "susi"
            },
            D = {
                test_event_1: {},
                "view:test_view_id": {
                    eventDataKeys: ["fundId", "fundUrl"]
                },
                "click:test_view_id:test_element_id": {
                    eventTypePrefix: "test_prefix"
                },
                "view:pg_donate_index": s,
                "view:lb_donation_list": s,
                "view:lb_team": s,
                "view:gdpr_modal": s,
                "view:gdpr_modal_homepage": k,
                "view:gdpr_modal_signup": P,
                "view:gdpr_banner": s,
                "view:gdpr_banner_homepage": k,
                "view:gdpr_banner_signup": P,
                "click:lb_donation_list:btn_donations_donate": s,
                "click:lb_donation_top:btn_donations_donate": s,
                "click:lb_donation_list:btn_exp_donate": s,
                "click:lb_donation_list:btn_exp_share": s,
                "click:lb_donation_top:btn_exp_donate": s,
                "click:lb_donation_top:btn_exp_share": s,
                "click:pg_donate_index:btn_exp_donate": s,
                "click:pg_donate_index:btn_exp_share": s,
                "click:pg_donate_index:btn_content_media_viewer": s,
                "click:pg_donate_index:btn_donate_moredonations": s,
                "click:pg_donate_index:btn_donate": s,
                "click:pg_donate_index:btn_donate_sticky": s,
                "click:pg_donate_index:btn_flair_top": s,
                "click:pg_donate_index:btn_flair_first": s,
                "click:pg_donate_index:btn_flair_recent": s,
                "click:pg_donate_index:btn_flair_your": s,
                "click:pg_donate_index:btn_share": s,
                "click:pg_donate_index:btn_donors": s,
                "click:pg_donate_index:btn_donations": s,
                "click:pg_donate_index:btn_navmenu_my-donations": s,
                "click:pg_donate_index:btn_nav_sign_up": s,
                "click:pg_donate_index:btn_report": s,
                "click:lb_share:btn_share_whatsapp": s,
                "click:lb_share:btn_share_facebook": s,
                "click:lb_share:btn_share_twitter": s,
                "click:lb_share:btn_share_email": s,
                "click:lb_share:input_share_copy_link": s,
                "click:lb_share:btn_share_copy_link": s,
                "click:lb_share:btn_share_embed": s,
                "click:lb_share:btn_share_sms": s,
                "click:lb_share:btn_share_print": s,
                "click:lb_share_embed:input_share_embed_copy": s,
                "click:lb_share_embed:btn_share_embed_copy": s,
                "click:lb_share_embed:btn_embed_learn_more": s,
                "click:lb_share_embed:large": s,
                "click:lb_share_embed:medium": s,
                "click:lb_share_embed:small": s,
                "click:lb_share_embed:btn_textmenu_donate": s,
                "click:lb_share_embed:btn_textmenu_support": s,
                "click:lb_share_embed:btn_textmenu_contribute": s,
                "click:lb_share_embed:btn_textmenu_coffee": s,
                "click:lb_share_embed:btn_textmenu_appreciate": s,
                "click:lb_share:btn_share_fbmessenger": s,
                "click:lb_share:btn_share_moreshares": s,
                "click:lb_signin:input_signin_email": N,
                "click:lb_signin:input_signin_password": N,
                "click:lb_signin:btn_signin": N,
                "click:lb_signin:btn_signin_forgotpassword": N,
                "click:lb_signup:input_signup_firstname": N,
                "click:lb_signup:input_signup_lastname": N,
                "click:lb_signup:input_signup_email": N,
                "click:lb_signup:input_signup_emailconfirm": N,
                "click:lb_signup:input_signup_password": N,
                "click:gdpr_modal:gdpr_modal_ok_marketing": s,
                "click:gdpr_modal_homepage:gdpr_modal_ok_marketing": k,
                "click:gdpr_modal_signup:gdpr_modal_ok_marketing": P,
                "click:gdpr_modal:gdpr_modal_off_marketing": s,
                "click:gdpr_modal_homepage:gdpr_modal_off_marketing": k,
                "click:gdpr_modal_signup:gdpr_modal_off_marketing": P,
                "click:gdpr_modal:gdpr_modal_ok_functional": s,
                "click:gdpr_modal_homepage:gdpr_modal_ok_functional": k,
                "click:gdpr_modal_signup:gdpr_modal_ok_functional": P,
                "click:gdpr_modal:gdpr_modal_off_functional": s,
                "click:gdpr_modal_homepage:gdpr_modal_off_functional": k,
                "click:gdpr_modal_signup:gdpr_modal_off_functional": P,
                "click:gdpr_modal:gdpr_modal_ok_all": s,
                "click:gdpr_modal_homepage:gdpr_modal_ok_all": k,
                "click:gdpr_modal_signup:gdpr_modal_ok_all": P,
                "click:gdpr_modal:gdpr_modal_off_all": s,
                "click:gdpr_modal:gdpr_modal_save": s,
                "click:gdpr_modal_homepage:gdpr_modal_save": k,
                "click:gdpr_modal_signup:gdpr_modal_save": P,
                "click:gdpr_banner:gdpr_ok_cookies": s,
                "click:gdpr_banner_homepage:gdpr_ok_cookies": k,
                "click:gdpr_banner_signup:gdpr_ok_cookies": P,
                "click:gdpr_banner:gdpr_privacy_policy": s,
                "click:gdpr_banner_homepage:gdpr_privacy_policy": k,
                "click:gdpr_banner_signup:gdpr_privacy_policy": P,
                "click:gdpr_banner:gdpr_manage_cookies": s,
                "click:gdpr_banner_homepage:gdpr_manage_cookies": k,
                "click:gdpr_banner_signup:gdpr_manage_cookies": P,
                "click:pg_donate_index:btn_story_read-more": s,
                "click:pg_donate_index:btn_charity_learn-more": s,
                "click:pg_donate_index:btn_navmenu_share": s,
                "click:pg_donate_index:btn_nav_share": s,
                "click:pg_donate_index:btn_navmenu_donate": s,
                "click:pg_donate_index:btn_nav_donate": s,
                "click:pg_donate_index:btn_update_show_more": s,
                "click:pg_donate_index:btn_team_see-all": s,
                "click:lb_share:btn_share_copy_link_tip": s,
                "click:pg_donate_index:btn_share_sticky": s,
                "click:pg_donate_index:btn_story_donate": s,
                "click:pg_donate_index:btn_story_share": s,
                "click:pg_donate_index:btn_content_readmore": s,
                "click:pg_donate_index:btn_deactivated_signin": s,
                "click:pg_donate_index:btn_organizer_contact": s,
                "click:pg_donate_index:btn_nav_gfm_logo": s,
                "click:pg_donate_index:btn_nav_manage": s,
                "view:module_bene_smb": s,
                "click:pg_donate_index:btn_bene_claim": s,
                "click:pg_donate_index:btn_bene_claim_byline": s,
                "click:pg_donate_index:btn_announce_grant": s,
                "click:pg_donate_index:btn_nav_donate_button": s,
                "click:pg_donate_index:btn_announce_award": s,
                "click:pg_donate_index:btn_content_media_play": s,
                "click:pg_donate_index:btn_comments_paginate": s,
                "click:pg_donate_index:btn_community_gallery": s,
                "click:pg_donate_index:btn_comment_gallery": s,
                "click:pg_donate_index:btn_donate_comment": s,
                "click:pg_donate_index:btn_donate_topdonations": s,
                "click:pg_donate_index:btn_payment_external": s,
                "click:pg_donate_index:btn_donate_guarantee": s,
                "click:pg_donate_index:btn_guarantee_learn-more": s,
                "click:pg_donate_index:display_share_copy_link": s,
                "view:lb_signin": N,
                "view:lb_signup": N,
                "view:msg_guarantee": s,
                "view:msg_proximity": s,
                "view:msg_velocity": s,
                "view:pg_guidance_donor": s,
                "view:pg_guidance_team": s,
                "view:pg_guidance_co": s,
                "click:pg_donate_index:pg_guidance_scroll": s,
                "click:pg_donate_index:pg_guidance_hide": s,
                "click:pg_donate_index:pg_guidance_show": s,
                "click:pg_donate_index:pg_guidance_card_summary": s,
                "click:pg_donate_index:pg_guidance_card_link": s,
                "click:pg_donate_index:pg_guidance_card_facebook": s,
                "click:pg_donate_index:pg_guidance_card_photo": s,
                "click:pg_donate_index:pg_guidance_card_card": s,
                "click:pg_donate_index:pg_guidance_card_susi": s,
                "click:pg_donate_index:pg_guidance_card_manage": s,
                "click:pg_donate_index:btn_donate_guidance": s,
                "click:pg_donate_index:pg_guidance_card_widget": s,
                "view:lb_updates": s,
                "click:lb_updates:btn_donate_update": s,
                "click:lb_updates:btn_share_update": s,
                "click:lb_updates:btn_update_close": s,
                "view:dd_search": C,
                "click:dd_search:result_campaign": C,
                "click:dd_search:result_query": C,
                "click:dd_search:btn_search": C,
                "click:pg_donate_index:btn_search": C,
                "click:pg_donate_index:input_search": C,
                "click:pg_donate_index:btn_nav_search_icon": C,
                "click:pg_homepage_norma_search:btn_nav_search_icon": C,
                "click:pg_homepage_norma_search:input_search": C,
                "click:pg_homepage_norma_search:btn_search": C,
                "click:pg_homepage_norma_index:btn_search": C,
                "click:pg_homepage_norma_index:input_search": C,
                "click:pg_homepage_norma_index:btn_nav_search_icon": C,
                "click:pg_categorypages_startHub:btn_nav_search_icon": C,
                "click:pg_categorypages_startHub:input_search": C,
                "click:pg_categorypages_startHub:btn_search": C,
                "click:pg_categorypages_discoverHub:btn_nav_search_icon": C,
                "click:pg_categorypages_discoverHub:input_search": C,
                "click:pg_categorypages_discoverHub:btn_search": C,
                "click:pg_categorypages_view:btn_nav_search_icon": C,
                "click:pg_categorypages_view:input_search": C,
                "click:pg_categorypages_view:btn_search": C,
                "click:pg_campaignmanagement_index:btn_search": C,
                "click:pg_campaignmanagement_index:input_search": C,
                "click:pg_campaignmanagement_index:btn_nav_search_icon": C,
                "click:pg_userdonations_index:btn_search": C,
                "click:pg_userdonations_index:input_search": C,
                "click:pg_userdonations_index:btn_nav_search_icon": C,
                "click:pg_userview:btn_search": C,
                "click:pg_userview:input_search": C,
                "click:pg_userview:btn_nav_search_icon": C,
                "view:pg_srp": A,
                "click:pg_srp:input_search": A,
                "click:pg_srp:btn_search": A,
                "click:pg_srp:btn_campaign": A,
                "view:pg_srp_pages": A,
                "click:pg_srp:btn_page": A,
                "click:pg_srp:btn_sign_up": A,
                "click:pg_srp:btn_footer": A,
                "click:pg_srp:btn_lang": A,
                "click:pg_srp:btn_nav_gfm": A,
                "click:pg_srp:btn_nav_search_icon": A,
                "click:pg_srp:btn_nav_donations": A,
                "click:pg_srp:btn_nav_sign_in": A,
                "click:pg_srp:btn_nav_sign_up": A,
                "click:pg_srp:btn_nav_manage": A,
                "view:banner_EU-cookie": s,
                "view:banner_team_join": s,
                "click:banner_team_join:btn_team_join": s,
                "view:lb_donation_top": s,
                "click:lb_donation_top:btn_donations_message": s,
                "click:lb_donation_top:btn_donations_recent": s,
                "click:lb_donation_list:btn_donations_top": s,
                "click:lb_donation_list:btn_donations_message": s,
                "view:pg_widget": l,
                "click:pg_widget:btn_widget_donate": l,
                "click:pg_widget:btn_widget_view_campaign": l,
                "click:pg_widget:btn_widget_start": l,
                "view:pg_checkout_single_page": g,
                "click:pg_checkout_single_page:btn_donate_returnCampaign": g,
                "click:pg_checkout_single_page:btn_nav_sign_in": g,
                "click:pg_checkout_single_page:btn_nav_sign_out": g,
                "click:pg_checkout_single_page:btn_stepper_remove_tip": g,
                "click:pg_checkout_single_page:btn_stepper_increase_tip": g,
                "click:pg_checkout_single_page:btn_stepper_decrease_tip": g,
                "click:pg_checkout_single_page:input_stepper_custom_tip": g,
                "click:pg_checkout_single_page:btn_slider_remove_tip": g,
                "click:pg_checkout_single_page:input_slider_custom_tip": g,
                "click:pg_checkout_single_page:btn_applePay_view": g,
                "click:pg_checkout_single_page:btn_donate_applePay": g,
                "click:pg_checkout_single_page:btn_paypal_payfast_view": g,
                "click:pg_checkout_single_page:btn_donate_paypal_payfast": g,
                "click:pg_checkout_single_page:btn_googlePay_view": g,
                "click:pg_checkout_single_page:btn_donate_googlePay": g,
                "click:pg_checkout_single_page:btn_ideal_view": g,
                "click:pg_checkout_single_page:btn_donate_ideal": g,
                "click:pg_checkout_single_page:btn_klarna_view": g,
                "click:pg_checkout_single_page:btn_donate_klarna": g,
                "click:pg_checkout_single_page:btn_giropay_view": g,
                "click:pg_checkout_single_page:btn_donate_giropay": g,
                "click:pg_checkout_single_page:btn_paypal_view": g,
                "click:pg_checkout_single_page:btn_donate_paypal": g,
                "click:pg_checkout_single_page:btn_donate_donateNow": g,
                "click:pg_checkout_single_page:btn_tip_grid_option": g,
                "click:pg_checkout_single_page:input_tip_grid_custom_tip": g,
                "view:3ds1": g,
                "view:3ds2_fingerprinting": g,
                "view:3ds2_challenge": g,
                "view:pg_checkout_single_page_community": g,
                "click:pg_checkout_single_page_community:btn_paypal_view": g,
                "click:pg_checkout_single_page_community:btn_donate_paypal": g,
                "click:pg_checkout_single_page_community:btn_donate_donateNow": g,
                "view:pg_safeguard": g,
                "click:pg_safeguard:btn_safeguard_goBack": g,
                "click:pg_safeguard:btn_safeguard_continue": g,
                "click:pg_safeguard:btn_safeguard_close": g,
                "view:pg_enterdonate_index": T,
                "click:pg_enterdonate_index:btn_donate_continue": T,
                "click:pg_enterdonate_ab_index:giftaidoptin": T,
                "view:ol_enterdonate_billingform": T,
                "click:ol_enterdonate_billingform:btn_confirm_billing": T,
                "view:ol_enterdonate_receiptform": T,
                "click:ol_enterdonate_receiptform:btn_donate_complete": T,
                "view:lb_postdonate_comment": d,
                "click:lb_postdonate_comment:btn_comment_linkphoto": d,
                "click:lb_postdonate_comment:btn_comment_unlinkphoto": d,
                "click:lb_postdonate_comment:btn_comment": d,
                "view:lb_postdonate_share": d,
                "click:lb_postdonate_share:btn_share_facebook": d,
                "click:lb_postdonate_share:btn_share_twitter": d,
                "click:lb_postdonate_share:btn_share_email": d,
                "click:lb_postdonate_share:btn_share_copy_link": d,
                "click:lb_postdonate_share:input_share_copy_link": d,
                "click:lb_postdonate_share:btn_share_copy_link_tip": d,
                "click:lb_postdonate_share:btn_share_whatsapp": d,
                "click:lb_postdonate_share:btn_share_sms": d,
                "click:lb_postdonate_share:btn_share_fbmessenger": d,
                "click:lb_postdonate_share:btn_postdonate_back_to_campaign": d,
                "click:lb_postdonate_share:btn_postdonate_close_modal": d,
                "click:lb_postdonate_share:btn_postdonate_back_to_comment": d,
                "click:lb_postdonate_share:btn_postdonate_share_skip": d,
                "view:my_donations": d,
                "view:mg_donations": d,
                "click:mg_donation:input_comment": d,
                "click:mg_donation:btn_comment_edit": d,
                "click:mg_donation:btn_comment": d,
                "click:mg_donation:btn_comment_clear": d,
                "click:mg_donation:btn_comment_delete": d,
                "click:mg_donation:btn_campaign_photo": d,
                "click:mg_donation:input_name": d,
                "click:mg_donation:share_facebook": d,
                "click:mg_donation:share_twitter": d,
                "click:mg_donation:share_email": d,
                "click:mg_donation:share_whatsapp": d,
                "click:mg_donation:share_sms": d,
                "click:mg_donation:view_campaign": d,
                "click:mg_donation:private_toggle": d,
                "click:mg_donation:settings_save": d,
                "click:mg_donation:share_copy_link": d,
                "click:mg_donation:share_copy_link_input": d,
                "click:mg_donation:share_more": d,
                "click:mg_donation:updates_toggle": d,
                "view:lb_postdonate_share_community": u,
                "view:lb_postdonate_sharelink_community": u,
                "click:lb_postdonate_share_community:btn_share_facebook": u,
                "click:lb_postdonate_share_community:btn_share_twitter": u,
                "click:lb_postdonate_share_community:btn_share_copy_link": u,
                "click:lb_postdonate_share_community:input_share_copy_link": u,
                "click:lb_postdonate_share_community:btn_share_whatsapp": u,
                "click:lb_postdonate_share_community:btn_share_email": u,
                "click:lb_postdonate_share_community:btn_postdonate_share_skip": u,
                "click:lb_postdonate_share_community:btn_share_copy_link_tip": u,
                "view:lb_postdonate_testimonial_community": u,
                "click:lb_postdonate_testimonial_community:btn_testimonial": u,
                "view:pg_postdonate_thankyou": d,
                "view:ol_postdonate_fb": d,
                "view:ol_postdonate_messenger": d,
                "view:ol_postdonate_share": d,
                "click:ol_postdonate_fb:btn_postdonate_fb_skip": d,
                "click:ol_postdonate_fb:btn_postdonate_fbpost_thankyou": d,
                "click:ol_postdonate_messenger:btn_postdonate_fbmessenger_send": d,
                "click:ol_postdonate_messenger:btn_postdonate_fbmessenger_send_success": d,
                "click:ol_postdonate_messenger:btn_postdonate_fb_skip": d,
                "click:ol_postdonate_share:btn_postdonate_more_share_back_to_campaign": d,
                "click:ol_postdonate_share:btn_postdonate_more_share_copylink": d,
                "click:ol_postdonate_share:btn_postdonate_more_share_email": d,
                "click:ol_postdonate_share:btn_postdonate_more_share_twitter": d,
                "click:ol_postdonate_comment:btn_postdonate_comment_unlinkphoto": d,
                "click:ol_postdonate_comment:btn_postdonate_comment_linkphoto": d,
                "click:ol_postdonate_comment:btn_postdonate_comment_skip": d,
                "click:ol_postdonate_comment:btn_postdonate_comment_success": d,
                "click:ol_postdonate_sms:btn_postdonate_sms_success": d,
                "click:ol_postdonate_sms:btn_postdonate_sms_skip": d,
                "click:ol_postdonate_wa:btn_postdonate_wa_share": d,
                "click:ol_postdonate_wa:btn_postdonate_wa_share_skip": d,
                "view:pg_authentication_signuplanding": m,
                "click:pg_authentication_signuplanding:btn_signuplanding_signupemail": m,
                "click:pg_authentication_signuplanding:btn_header_signin": m,
                "click:pg_authentication_signuplanding:btn_signuplanding_signupfb": m,
                "click:pg_authentication_signuplanding:checkbox_signuppage_varsitypartneremailopt": m,
                user_signup_success_callback: m,
                user_signin_success_callback: m,
                cp_user_signup_success_callback: f,
                cp_user_signin_success_callback: f,
                "view:pg_authentication_signuplanding_email": m,
                "click:pg_authentication_signuplanding_email:btn_signup_email_signup_confirm": m,
                "click:pg_authentication_signuplanding_email:checkbox_signuppage_emailopt": m,
                "click:pg_authentication_signuplanding_email:input_signuppage_phonenumber": m,
                "click:pg_authentication_signuplanding_email:btn_header_logo": m,
                "click:pg_authentication_signuplanding_email:btn_header_signin": m,
                "view:pg_authentication_signuplanding_facebook": m,
                "click:pg_authentication_signuplanding_facebook:input_signupwithfacebook_email": m,
                "click:pg_authentication_signuplanding_facebook:btn_signupwithfacebook_confirm": m,
                "click:pg_authentication_signuplanding_facebook:checkbox_signuppage_emailopt": m,
                "view:pg_authentication_signinlanding": m,
                "click:pg_authentication_signinlanding:btn_sign_in_facebook": m,
                "click:pg_authentication_signinlanding:input_sign_in_email": m,
                "click:pg_authentication_signinlanding:input_sign_in_password": m,
                "click:pg_authentication_signinlanding:btn_sign_in_email": m,
                "click:pg_authentication_signinlanding:btn_header_signup": m,
                "click:pg_authentication_signinlanding:btn_sign_in_forgotpassword": m,
                "view:pg_authentication_forgotpassword": m,
                "click:pg_authentication_forgotpassword:btn_forgot_password_submit": m,
                "click:pg_authentication_forgotpassword:input_forgotpassword_email": m,
                "click:pg_authentication_forgotpassword:btn_forgot_password_goback": m,
                "click:pg_authentication_forgotpassword:btn_header_signup": m,
                "view:pg_campaign_doors": E,
                "click:pg_campaign_doors:btn_campaign_personal_door": E,
                "click:pg_campaign_doors:btn_campaign_nonprofit_door": E,
                "view:ol_fundcreation_detailspage": E,
                "view:ol_fundcreation_detailspage_charityprefilled": E,
                "view:ol_fundcreation_detailspage_charity_select_overlay": E,
                "click:ol_fundcreation_detailspage:btn_detailspage_next": E,
                "click:ol_fundcreation_detailspage_charityprefilled:btn_detailspage_next": E,
                "click:ol_fundcreation_detailspage:input_detailspage_goalamount": E,
                "click:ol_fundcreation_detailspage_charityprefilled:input_detailspage_goalamount": E,
                "click:ol_fundcreation_detailspage:input_detailspage_campaigntitle": E,
                "click:ol_fundcreation_detailspage_charityprefilled:input_detailspage_campaigntitle": E,
                "click:ol_fundcreation_detailspage:select_detailspage_benefactortype": E,
                "click:ol_fundcreation_detailspage_charityprefilled:select_detailspage_benefactortype": E,
                "click:ol_fundcreation_detailspage:input_detailspage_postalcode": E,
                "click:ol_fundcreation_detailspage_charityprefilled:input_detailspage_postalcode": E,
                "click:ol_fundcreation_detailspage:select_detailspage_categoryselector": E,
                "click:ol_fundcreation_detailspage_charityprefilled:select_detailspage_categoryselector": E,
                "click:ol_fundcreation_detailspage:input_detailspage_charitysearch": E,
                "click:ol_fundcreation_detailspage_charityprefilled:input_detailspage_charitysearch": E,
                "click:ol_fundcreation_detailspage:input_detailspage_charitysearchremove": E,
                "click:ol_fundcreation_detailspage_charityprefilled:input_detailspage_charitysearchremove": E,
                "click:ol_fundcreation_detailspage:btn_charitysearchlightbox_searchinput": E,
                "click:ol_fundcreation_detailspage_charityprefilled:btn_charitysearchlightbox_searchinput": E,
                "click:ol_fundcreation_detailspage:btn_charitysearchlightbox_close": E,
                "click:ol_fundcreation_detailspage_charityprefilled:btn_charitysearchlightbox_close": E,
                "click:ol_fundcreation_detailspage:btn_charitysearchlightbox_select": E,
                "click:ol_fundcreation_detailspage_charityprefilled:btn_charitysearchlightbox_select": E,
                "click:ol_fundcreation_detailspage:btn_charitysearchlightbox_select_row": E,
                "click:ol_fundcreation_detailspage_charityprefilled:btn_charitysearchlightbox_select_row": E,
                "view:ol_fundcreation_mediapage": E,
                "click:ol_fundcreation_mediapage:btn_mediapage_facebookphoto": E,
                "click:ol_fundcreation_mediapage:btn_mediapage_choosephone": E,
                "click:ol_fundcreation_mediapage:btn_mediapage_video": E,
                "click:ol_fundcreation_mediapage:btn_mediapage_save": E,
                "click:ol_fundcreation_mediapage:btn_mediapage_videolinkconfirm": E,
                "view:ol_fundcreation_storypage": E,
                "click:ol_fundcreation_storypage:btn_storypage_launch": E,
                "click:ol_fundcreation_storypage:btn_storypage_submit": E,
                "click:ol_fundcreation_storypage:btn_storypage_preview": E,
                "click:ol_fundcreation_storypage:btn_storypage_save": E,
                "click:ol_fundcreation_storypage:btn_storypage_editorbold": E,
                "click:ol_fundcreation_storypage:btn_storypage_editorlink": E,
                "click:ol_fundcreation_storypage:btn_storypage_editorphotovideo": E,
                "click:ol_fundcreation_storypage:btn_story_open_tips": E,
                "click:ol_fundcreation_storypage:btn_story_close_tips": E,
                "view:ol_fundcreation_stripeconfirm": E,
                "click:ol_fundcreation_stripeconfirm:btn_stripeconfirm_continue": E,
                "view:ol_fundcreation_campaignisready": E,
                "click:ol_fundcreation_campaignisready:btn_campaignisready_next": E,
                "click:ol_fundcreation_campaignisready:btn_campaignisready_1": E,
                "click:ol_fundcreation_campaignisready:btn_campaignisready_2": E,
                "click:ol_fundcreation_campaignisready:btn_campaignisready_3": E,
                "view:ol_fundcreation_ppgfagreementpage": E,
                "click:ol_fundcreation_ppgfagreementpage:btn_campaignisready_launch": E,
                "click:ol_fundcreation_ppgfagreementpage:btn_campaignisready_next": E,
                "click:ol_fundcreation_ppgfagreementpage:btn_campaignisready_back": E,
                "view:pg_share3_index": E,
                "click:pg_share3_index:btn_add_facebook_photo": E,
                "view:pg_share3_getpanel_pa_ays_fb": E,
                "click:pg_share3_getpanel_pa_ays_fb:btn_add_facebook_photo": E,
                "view:pg_share3_getpanel_pa_contacts_invite": E,
                "click:pg_share3_getpanel_pa_contacts_invite:btn_contacts_import_gmail": E,
                "click:pg_share3_getpanel_pa_contacts_invite:btn_contacts_import_yahoo": E,
                "click:pg_share3_getpanel_pa_contacts_invite:btn_contacts_import_hotmail": E,
                "click:pg_share3_getpanel_pa_contacts_invite:btn_contacts_import_manual": E,
                "view:pg_share3_getpanel_pa_contacts_manual": E,
                "click:pg_share3_getpanel_pa_contacts_manual:btn_invite_contacts": E,
                "view:pg_share3_getcontacts_pa_contact_select": E,
                "click:pg_share3_getcontacts_pa_contact_select:btn_invite_contacts": E,
                "view:pg_share3_getpanel_pa_fbshare": E,
                "click:pg_share3_getpanel_pa_fbshare:btn_facebook_post": E,
                "view:pg_share3_getpanel_pa_dyk_fb": E,
                "click:pg_share3_getpanel_pa_dyk_fb:btn_facebook_post": E,
                "view:pg_share3_getpanel_pa_private_fb": E,
                "click:pg_share3_getpanel_pa_private_fb:btn_fb_private_compose": E,
                "view:pg_share3_getpanel_pa_twshare": E,
                "click:pg_share3_getpanel_pa_twshare:btn_twitter_post": E,
                "view:pg_share3_getpanel_pa_link": E,
                "click:pg_share3_getpanel_pa_link:btn_fund_link_custom": E,
                "click:pg_share3_getpanel_pa_link:input_share_copy_link": E,
                "click:pg_share3_getpanel_pa_link:btn_fund_link_next": E,
                "click:pg_share3_getpanel_pa_whatsapp:btn_whatsapp_share": E,
                "view:pg_share3_getpanel_pa_whatsapp": E,
                "view:ol_fundcreation_detailspage_phonenumber_MFA": E,
                "click:ol_fundcreation_detailspage_phonenumber_MFA:btn_sendcode": E,
                "click:ol_fundcreation_detailspage_phonenumber_MFA:btn_verify": E,
                phonenumber_MFA_complete_callback_campaign_create: E,
                "view:pg_mobile_share_share_whatsapp": E,
                "click:pg_mobile_share_share_whatsapp:btn_whatsapp_share": E,
                "view:pg_mobile_share_share_fbadd_photo": E,
                "click:pg_mobile_share_share_fbadd_photo:btn_add_facebook_photo": E,
                "view:pg_mobile_share_share_fbadd_important": E,
                "click:pg_mobile_share_share_fbadd_important:btn_add_facebook_photo": E,
                "view:pg_mobile_share_share_share_email": E,
                "click:pg_mobile_share_share_share_email:btn_invite_contacts": E,
                "view:pg_mobile_share_share_fbshare": E,
                "click:pg_mobile_share_share_fbshare:btn_facebook_post": E,
                "view:pg_mobile_share_share_fbshare2": E,
                "click:pg_mobile_share_share_fbshare2:btn_facebook_post": E,
                "view:pg_mobile_share_share_share_text": E,
                "click:pg_mobile_share_share_share_text:btn_text_share_send": E,
                "view:pg_mobile_share_share_twitter": E,
                "click:pg_mobile_share_share_twitter:btn_twitter_post": E,
                "view:pg_mobile_share_share_link": E,
                "click:pg_mobile_share_share_link:btn_fund_link_custom": E,
                "click:pg_mobile_share_share_link:input_share_copy_link": E,
                "click:pg_mobile_share_share_link:btn_fund_link_next": E,
                "view:pg_w_share-sheet1": E,
                "click:pg_w_share-sheet1:btn_nav_gfm_logo": E,
                "click:pg_w_share-sheet1:btn_next": E,
                "click:pg_w_share-sheet1:btn_ss_facebook_post": E,
                "click:pg_w_share-sheet1:btn_ss_email_client": E,
                "click:pg_w_share-sheet1:btn_ss_twitter_client": E,
                "click:pg_w_share-sheet1:btn_ss_whatsapp": E,
                "click:pg_w_share-sheet1:btn_ss_instagram": E,
                "click:pg_w_share-sheet1:input_instagram_copy_link": E,
                "click:pg_w_share-sheet1:btn_instagram_open": E,
                "click:pg_w_share-sheet1:instagram_modal_close": E,
                "click:pg_w_share-sheet1:btn_ss_more": E,
                "click:pg_w_share-sheet1:btn_ss_text_client": E,
                "click:pg_w_share-sheet1:btn_ss_messenger": E,
                "click:pg_w_share-sheet1:btn_print_sign": E,
                "click:pg_w_share-sheet1:input_ss_copy_link": E,
                "click:pg_w_share-sheet1:btn_ss_copylink": E,
                "click:pg_w_share-sheet1:btn_embed": E,
                "click:pg_w_share-sheet1:click_opt_in": E,
                "click:pg_w_share-sheet1:click_opt_out": E,
                "view:pg_w_share-sheet7b": E,
                "click:pg_w_share-sheet7b:btn_nav_gfm_logo": E,
                "click:pg_w_share-sheet7b:btn_next": E,
                "click:pg_w_share-sheet7b:btn_ss_facebook_post": E,
                "click:pg_w_share-sheet7b:btn_ss_email_client": E,
                "click:pg_w_share-sheet7b:btn_ss_twitter_client": E,
                "click:pg_w_share-sheet7b:btn_ss_whatsapp": E,
                "click:pg_w_share-sheet7b:btn_ss_instagram": E,
                "click:pg_w_share-sheet7b:input_instagram_copy_link": E,
                "click:pg_w_share-sheet7b:btn_instagram_open": E,
                "click:pg_w_share-sheet7b:instagram_modal_close": E,
                "click:pg_w_share-sheet7b:btn_ss_more": E,
                "click:pg_w_share-sheet7b:btn_ss_text_client": E,
                "click:pg_w_share-sheet7b:btn_ss_messenger": E,
                "click:pg_w_share-sheet7b:btn_print_sign": E,
                "click:pg_w_share-sheet7b:input_ss_copy_link": E,
                "click:pg_w_share-sheet7b:btn_ss_copylink": E,
                "click:pg_w_share-sheet7b:btn_embed": E,
                "view:pg_w_charity_share-sheet1": E,
                "click:pg_w_charity_share-sheet1:btn_nav_gfm_logo": E,
                "click:pg_w_charity_share-sheet1:btn_next": E,
                "click:pg_w_charity_share-sheet1:btn_ss_facebook_post": E,
                "click:pg_w_charity_share-sheet1:btn_ss_email_client": E,
                "click:pg_w_charity_share-sheet1:btn_ss_twitter_client": E,
                "click:pg_w_charity_share-sheet1:btn_ss_whatsapp": E,
                "click:pg_w_charity_share-sheet1:btn_ss_instagram": E,
                "click:pg_w_charity_share-sheet1:input_instagram_copy_link": E,
                "click:pg_w_charity_share-sheet1:btn_instagram_open": E,
                "click:pg_w_charity_share-sheet1:instagram_modal_close": E,
                "click:pg_w_charity_share-sheet1:btn_ss_more": E,
                "click:pg_w_charity_share-sheet1:btn_ss_text_client": E,
                "click:pg_w_charity_share-sheet1:btn_ss_messenger": E,
                "click:pg_w_charity_share-sheet1:input_ss_copy_link": E,
                "click:pg_w_charity_share-sheet1:btn_ss_copylink": E,
                "click:pg_w_charity_share-sheet1:click_opt_in": E,
                "click:pg_w_charity_share-sheet1:click_opt_out": E,
                "view:pg_w_share_message2": E,
                "click:pg_w_share_message2:btn_back": E,
                "click:pg_w_share_message2:btn_manage": E,
                "click:pg_w_share_message2:btn_skip": E,
                "click:pg_w_share_message2:btn_nav_gfm_logo": E,
                "view:pg_w_charity_share_message2": E,
                "click:pg_w_charity_share_message2:btn_back": E,
                "click:pg_w_charity_share_message2:btn_continue": E,
                "click:pg_w_charity_share_message2:btn_nav_gfm_logo": E,
                "view:pg_w_calender-reminder": E,
                "click:pg_w_calender-reminder:btn_ss_add_ical": E,
                "click:pg_w_calender-reminder:btn_ss_add_gcal": E,
                "click:pg_w_calender-reminder:btn_back": E,
                "click:pg_w_calender-reminder:btn_manage": E,
                "click:pg_w_calender-reminder:btn_nav_gfm_logo": E,
                "view:team_product_upsell": E,
                "click:team_product_upsell:btn_ss_system_tray": E,
                "click:team_product_upsell:btn_ss_team_legacy": E,
                "click:team_product_upsell:btn_next": E,
                "click:team_product_upsell:btn_back": E,
                "click:team_product_upsell:btn_continue": E,
                "click:team_product_upsell:btn_nav_gfm_logo": E,
                "view:team_product_upsell_2": E,
                "click:team_product_upsell_2:btn_skip": E,
                "click:team_product_upsell_2:btn_goback": E,
                "click:team_product_upsell_2:btn_continue": E,
                "click:team_product_upsell_2:btn_nav_gfm_logo": E,
                "click:team_product_upsell_2:btn_teaminvite_submit": E,
                "click:team_product_upsell_2:btn_addmoreteammembers": E,
                "click:team_product_upsell_2:btn_preview_email": E,
                "click:team_product_upsell_2:btn_remove_contact": E,
                "click:team_product_upsell_2:btn_select_gcontacts": E,
                "click:team_product_upsell_2:btn_next_gcontacts": E,
                "click:team_product_upsell_2:btn_close_gcontacts": E,
                "view:team_gcontacts_modal": E,
                team_invites_frontend_submit: E,
                team_invites_frontend_submit_gcontacts: E,
                team_invites_backend_response: E,
                team_invites_backend_response_gcontacts: E,
                "view:ol_teaminviteflow": E,
                "click:ol_teaminviteflow:btn_teaminviteflow_skip": E,
                "click:ol_teaminviteflow:btn_inviteteam_inviteviagofundme": E,
                "view:ol_teaminviteflow_selectcontacts": E,
                "click:ol_teaminviteflow_selectcontacts:btn_teaminvite_brandedemails": E,
                "view:ol_teaminviteflow_brandedemails": E,
                "click:ol_teaminviteflow_brandedemails:btn_importcontacts_yahoo": E,
                "click:ol_teaminviteflow_brandedemails:btn_importcontacts_outlook": E,
                "click:ol_teaminviteflow_brandedemails:btn_importcontacts_gmail": E,
                "view:ol_teaminviteflow_addmessage": E,
                "click:ol_teaminviteflow_addmessage:btn_inviteteam_invite": E,
                "view:ol_newcampaignmodal": E,
                "click:ol_newcampaignmodal:btn_newcampaign_yes": E,
                "click:ol_newcampaignmodal:btn_newcampaign_no": E,
                "view:pg_justice_equality_index": E,
                "click:pg_justice_equality_index:fundraiser_search_box": E,
                "click:pg_justice_equality_index:location_search_box": E,
                "click:pg_justice_equality_index:search_button": E,
                "click:pg_justice_equality_index:null_search_start_campaign": E,
                "click:pg_justice_equality_index:link_start_fundraiser": E,
                "click:pg_justice_equality_index:link_donate_general_fund": E,
                "click:pg_justice_equality_index:show_more_button": E,
                "click:pg_justice_equality_index:btn_clear_search": E,
                "click:pg_justice_equality_index:btn_nav_sign_up": E,
                "view:pg_black_smb_index": E,
                "click:pg_black_smb_index:fundraiser_search_box": E,
                "click:pg_black_smb_index:location_search_box": E,
                "click:pg_black_smb_index:search_button": E,
                "click:pg_black_smb_index:null_search_start_campaign": E,
                "click:pg_black_smb_index:link_start_fundraiser": E,
                "click:pg_black_smb_index:link_donate_general_fund": E,
                "click:pg_black_smb_index:show_more_button": E,
                "click:pg_black_smb_index:btn_clear_search": E,
                "click:pg_black_smb_index:btn_nav_sign_up": E,
                "click:pg_black_smb_index:link_fillout_form": E,
                "view:pg_ticketswap_index": E,
                "click:pg_ticketswap_index:fundraiser_search_box": E,
                "click:pg_ticketswap_index:location_search_box": E,
                "click:pg_ticketswap_index:search_button": E,
                "click:pg_ticketswap_index:null_search_start_campaign": E,
                "click:pg_ticketswap_index:link_banner_start": E,
                "click:pg_ticketswap_index:show_more_button": E,
                "click:pg_ticketswap_index:btn_clear_search": E,
                "click:pg_ticketswap_index:btn_nav_sign_up": E,
                "view:pg_supportlocalpub_index": E,
                "click:pg_supportlocalpub_index:fundraiser_search_box": E,
                "click:pg_supportlocalpub_index:location_search_box": E,
                "click:pg_supportlocalpub_index:search_button": E,
                "click:pg_supportlocalpub_index:null_search_start_campaign": E,
                "click:pg_supportlocalpub_index:link_banner_start": E,
                "click:pg_supportlocalpub_index:show_more_button": E,
                "click:pg_supportlocalpub_index:btn_clear_search": E,
                "view:pg_smb_covid19_index": E,
                "click:pg_smb_covid19_index:business_search_box": E,
                "click:pg_smb_covid19_index:location_search_box": E,
                "click:pg_smb_covid19_index:search_button": E,
                "click:pg_smb_covid19_index:smb_landing_campaign": E,
                "click:pg_smb_covid19_index:show_more_button": E,
                "click:pg_smb_covid19_index:null_search_start_campaign": E,
                "click:pg_smb_covid19_index:btn_signup_bottom": E,
                "click:pg_smb_covid19_index:btn_clear_search": E,
                "click:pg_smb_covid19_index:link_start_fundraiser": E,
                "click:pg_smb_covid19_index:link_learn_more": E,
                "click:pg_smb_covid19_index:link_donate_general_fund": E,
                "click:pg_smb_covid19_index:btn_nav_sign_up": E,
                "view:pg_mfa_modal": E,
                "click:pg_mfa_modal:btn_mfa_code_text": E,
                "click:pg_mfa_modal:btn_mfa_code_voice": E,
                "click:pg_mfa_modal:btn_send_code_mfa": E,
                "click:pg_mfa_modal:btn_setup_contact_mfa": E,
                "click:pg_mfa_modal:btn_resend_mfa": E,
                "click:pg_mfa_modal:btn_verify_code_mfa": E,
                "click:pg_mfa_modal:btn_verify_contact_mfa": E,
                "click:pg_mfa_modal:btn_success_mfa": E,
                pg_mfa_modal_MFA_complete_callback_campaign_create: E,
                "view:pg_mfa_setup": E,
                "click:pg_mfa_setup:btn_mfa_code_text": E,
                "click:pg_mfa_setup:btn_mfa_code_voice": E,
                "click:pg_mfa_setup:btn_send_code_mfa": E,
                "click:pg_mfa_setup:btn_setup_contact_mfa": E,
                "view:pg_mfa_challenge": E,
                "click:pg_mfa_challenge:btn_resend_mfa": E,
                "click:pg_mfa_challenge:btn_verify_code_mfa": E,
                "click:pg_mfa_challenge:btn_verify_contact_mfa": E,
                "view:pg_mfa_success": E,
                "click:pg_mfa_success:btn_success_mfa": E,
                pg_mfa_full_page_MFA_complete_callback_campaign_create: E,
                "view:pg_campaign_details": E,
                "click:pg_campaign_details:input_country": E,
                "click:pg_campaign_details:input_zip_display": E,
                "click:pg_campaign_details:input_category_id": E,
                "click:pg_campaign_details:input_nonprofit_id": E,
                "click:pg_campaign_details:input_fundname": E,
                "click:pg_campaign_details:btn_next_campaign_details": E,
                "click:pg_campaign_details:link_terms": E,
                "click:pg_campaign_details:link_privacy_policy": E,
                "click:pg_campaign_details:cc_detail_page_back_button": E,
                "click:pg_campaign_details:btn_nav_gfm_logo": E,
                "view:pg_charity_campaign_details": E,
                "click:pg_charity_campaign_details:input_zip_display": E,
                "click:pg_charity_campaign_details:input_fundname": E,
                "click:pg_charity_campaign_details:input_goal_amount": E,
                "click:pg_charity_campaign_details:link_fees": E,
                "click:pg_charity_campaign_details:btn_next": E,
                "click:pg_charity_campaign_details:btn_nav_gfm_logo": E,
                "view:pg_campaign_goal": E,
                "click:pg_campaign_goal:input_currency": E,
                "click:pg_campaign_goal:input_goal_amount": E,
                "click:pg_campaign_goal:btn_campaign_goal_goback": E,
                "click:pg_campaign_goal:btn_next_campaign_goal": E,
                "click:pg_campaign_goal:btn_nav_gfm_logo": E,
                "view:pg_campaign_story": E,
                "click:pg_campaign_story:btn_preview_fundraiser_story_editor": E,
                "click:pg_campaign_story:btn_complete_fundraiser_story_editor": E,
                "click:pg_campaign_story:input_story_container": E,
                "click:pg_campaign_story:btn_take_photo": E,
                "click:pg_campaign_story:btn_take_video": E,
                "view:pg_campaign_media": E,
                "click:pg_campaign_media:btn_upload_photo": E,
                "click:pg_campaign_media:btn_add_yt_link": E,
                "click:pg_campaign_media:btn_upload_phone": E,
                "click:pg_campaign_media:btn_take_photo": E,
                "click:pg_campaign_media:btn_yt_link": E,
                "click:pg_campaign_media:input_video_link": E,
                "click:pg_campaign_media:btn_use_video": E,
                "click:pg_campaign_media:btn_rotate": E,
                "click:pg_campaign_media:btn_minus": E,
                "click:pg_campaign_media:btn_plus": E,
                "click:pg_campaign_media:btn_default_photo_start_charity": E,
                "click:pg_campaign_media:btn_default_photo_hands": E,
                "click:pg_campaign_media:btn_charity_logo": E,
                "click:pg_campaign_media:btn_edit_photo": E,
                "click:pg_campaign_media:btn_delete_photo": E,
                "click:pg_campaign_media:btn_next_campaign_photo_upload": E,
                "click:pg_campaign_media:btn_next_campaign_media": E,
                "click:pg_campaign_media:btn_nav_gfm_logo": E,
                "view:pg_charity_campaign_media": E,
                "click:pg_charity_campaign_media:btn_upload_photo": E,
                "click:pg_charity_campaign_media:btn_add_yt_link": E,
                "click:pg_charity_campaign_media:btn_upload_phone": E,
                "click:pg_charity_campaign_media:btn_take_photo": E,
                "click:pg_charity_campaign_media:btn_yt_link": E,
                "click:pg_charity_campaign_media:input_video_link": E,
                "click:pg_charity_campaign_media:btn_use_video": E,
                "click:pg_charity_campaign_media:btn_rotate": E,
                "click:pg_charity_campaign_media:btn_minus": E,
                "click:pg_charity_campaign_media:btn_plus": E,
                "click:pg_charity_campaign_media:btn_default_photo_start_charity": E,
                "click:pg_charity_campaign_media:btn_default_photo_hands": E,
                "click:pg_charity_campaign_media:btn_charity_logo": E,
                "click:pg_charity_campaign_media:btn_edit_photo": E,
                "click:pg_charity_campaign_media:btn_delete_photo": E,
                "click:pg_charity_campaign_media:btn_next_campaign_photo_upload": E,
                "click:pg_charity_campaign_media:btn_campaign_media_goback": E,
                "click:pg_charity_campaign_media:btn_next_campaign_media": E,
                "click:pg_charity_campaign_media:btn_nav_gfm_logo": E,
                "view:pg_charity_campaign_story": E,
                "click:pg_charity_campaign_story:btn_upload_phone": E,
                "click:pg_charity_campaign_story:btn_take_photo": E,
                "click:pg_charity_campaign_story:btn_yt_link": E,
                "click:pg_charity_campaign_story:input_story_container": E,
                "click:pg_charity_campaign_story:btn_goback": E,
                "click:pg_charity_campaign_story:btn_preview": E,
                "click:pg_charity_campaign_story:btn_next": E,
                "click:pg_charity_campaign_story:btn_nav_gfm_logo": E,
                "view:pg_charity_campaign_ppgfagreement": E,
                "click:pg_charity_campaign_ppgfagreement:btn_goback": E,
                "click:pg_charity_campaign_ppgfagreement:btn_next": E,
                "click:pg_charity_campaign_ppgfagreement:btn_nav_gfm_logo": E,
                "view:pg_campaign_ppgfagreement": E,
                "click:pg_campaign_ppgfagreement:btn_next": E,
                "view:pg_campaign_kyc": E,
                "click:pg_campaign_kyc:input_phone_number": E,
                "click:pg_campaign_kyc:input_mailing_address": E,
                "click:pg_campaign_kyc:input_postal_code": E,
                "click:pg_campaign_kyc:input_city": E,
                "click:pg_campaign_kyc:input_region": E,
                "click:pg_campaign_kyc:input_country": E,
                "click:pg_campaign_kyc:input_dob": E,
                "click:pg_campaign_kyc:btn_complete": E,
                "click:pg_campaign_kyc:btn_back": E,
                "click:pg_campaign_kyc:btn_nav_gfm_logo": E,
                "view:pg_campaign_ready": E,
                "click:pg_campaign_ready:btn_next": E,
                "click:pg_campaign_ready:btn_nav_gfm_logo": E,
                "view:pg_charity_campaign_ready": E,
                "click:pg_charity_campaign_ready:btn_next": E,
                "click:pg_charity_campaign_ready:btn_nav_gfm_logo": E,
                "view:ol_campaignmanagement_dashboard": h,
                "click:ol_campaignmanagement_dashboard:btn_blurheader_edit_campaign": h,
                "click:ol_campaignmanagement_donations:btn_blurheader_edit_campaign": h,
                "click:ol_campaignmanagement_updates_all:btn_blurheader_edit_campaign": h,
                "click:ol_campaignmanagement_manage_team:btn_blurheader_edit_campaign": h,
                "click:ol_campaignmanagement_comments:btn_blurheader_edit_campaign": h,
                "click:ol_campaignmanagement_dashboard:btn_blurheader_view_campaign": h,
                "click:ol_campaignmanagement_donations:btn_blurheader_view_campaign": h,
                "click:ol_campaignmanagement_updates_all:btn_blurheader_view_campaign": h,
                "click:ol_campaignmanagement_manage_team:btn_blurheader_view_campaign": h,
                "click:ol_campaignmanagement_comments:btn_blurheader_view_campaign": h,
                "click:ol_campaignmanagement_dashboard:btn_blurheader_charity_learnmore": h,
                "click:ol_campaignmanagement_dashboard:btn_campmgmt_saythanks": h,
                "click:ol_campaignmanagement_dashboard:btn_campmgmt_thankagain": h,
                "click:ol_campaignmanagement_donations:btn_campmgmt_saythanks": h,
                "click:ol_campaignmanagement_donations:btn_campmgmt_thankagain": h,
                "view:ol_campmgmt_sendthankyouoverlay": h,
                "click:ol_campmgmt_sendthankyouoverlay:btn_campmgmt_sendthankyou": h,
                "view:ol_campmgmt_sendthankyouoverlay_success": h,
                "view:banner_campaign_alert_displayed": h,
                "view:ol_campaignmanagement_dashboard:banner_campaign_alert_displayed": h,
                "click:ol_campaignmanagement_dashboard:btn_campaignmgmt_alertcta": h,
                "click:ol_campaignmanagement_dashboard:btn_dismiss_alert_banner": h,
                "click:ol_campaignmanagement_dashboard:btn_campmgmt_share": h,
                "click:ol_campaignmanagement_dashboard:btn_campmgmt_headergotoshare": h,
                "click:ol_campaignmanagement_donations:btn_campmgmt_headergotoshare": h,
                "click:ol_campaignmanagement_updates_all:btn_campmgmt_headergotoshare": h,
                "click:ol_campaignmanagement_manage_team:btn_campmgmt_headergotoshare": h,
                "click:ol_campaignmanagement_comments:btn_campmgmt_headergotoshare": h,
                "view:pg_campmgmt_dashboard_sharesheet": h,
                "click:pg_campmgmt_dashboard_sharesheet:btn_campmgmt_sharefacebook": h,
                "click:pg_campmgmt_dashboard_sharesheet:btn_campmgmt_sharelink": h,
                "click:pg_campmgmt_dashboard_sharesheet:btn_campmgmt_opensmssharemodal": h,
                "click:pg_campmgmt_dashboard_sharesheet:btn_campmgmt_sharemessenger": h,
                "click:pg_campmgmt_dashboard_sharesheet:btn_campmgmt_openemailsharemodal": h,
                "click:pg_campmgmt_dashboard_sharesheet:btn_campmgmt_sharetwitter": h,
                "click:pg_campmgmt_dashboard_sharesheet:btn_campmgmt_sharelinkedin": h,
                "click:pg_campmgmt_dashboard_sharesheet:btn_campmgmt_printfund": h,
                "click:pg_campmgmt_dashboard_sharesheet:btn_campmgmt_sharewhatsapp": h,
                "click:ol_campaignmanagement_dashboard:btn_campmgmt_update": h,
                "click:ol_campaignmanagement_dashboard:btn_campmgmt_headergotopostupdate": h,
                "click:ol_campaignmanagement_donations:btn_campmgmt_headergotopostupdate": h,
                "click:ol_campaignmanagement_updates_all:btn_campmgmt_headergotopostupdate": h,
                "click:ol_campaignmanagement_manage_team:btn_campmgmt_headergotopostupdate": h,
                "click:ol_campaignmanagement_comments:btn_campmgmt_headergotopostupdate": h,
                "click:ol_campaignmanagement_updates_all:btn_campmgmt_postupdate_filled": h,
                "view:pg_campmgmt_dashboard_postupdatemodal": h,
                "click:pg_campmgmt_dashboard_postupdatemodal:ol_campmgmt_postupdate_post": h,
                "click:pg_campmgmt_dashboard_postupdatemodal:ol_campmgmt_post_update_manualfbmodaltrigger": h,
                "click:pg_campmgmt_dashboard_postupdatemodal:ol_campmgmt_postupdate_lowreachpostanyway": h,
                "view:pg_campmgmt_deactivate_modal": h,
                "click:pg_campmgmt_deactivate_modal:btn_deactivate_continue": h,
                "click:pg_campmgmt_deactivate_modal:btn_deactivate_gethelp_funds": h,
                "click:pg_campmgmt_deactivate_modal:btn_deactivate_delete": h,
                "click:pg_campmgmt_deactivate_modal:btn_deactivate_gethelp_gen": h,
                "click:ol_campaignmanagement_dashboard:btn_campmgmt_headergotowithdraw": h,
                "click:ol_campaignmanagement_donations:btn_campmgmt_headergotowithdraw": h,
                "click:ol_campaignmanagement_updates_all:btn_campmgmt_headergotowithdraw": h,
                "click:ol_campaignmanagement_manage_team:btn_campmgmt_headergotowithdraw": h,
                "click:ol_campaignmanagement_comments:btn_campmgmt_headergotowithdraw": h,
                "view:banner_google_displayed_dsktop": h,
                "view:banner_google_displayed_mob": h,
                "view:banner_google_displayed": h,
                "click:ol_campaignmanagement_dashboard:btn_campmgmt_google_signin": h,
                "click:ol_campaignmanagement_dashboard:btn_campmgmt_google_learnmore": h,
                "click:ol_campaignmanagement_dashboard:btn_dismiss_google_banner": h,
                "view:banner_share_to_facebook_displayed_dsktop": h,
                "view:banner_share_to_facebook_displayed_mob": h,
                "view:banner_share_to_facebook_displayed": h,
                "click:ol_campaignmanagement_dashboard:btn_dismiss_campmgmt_fb_banner": h,
                "click:ol_campaignmanagement_donations:btn_dismiss_campmgmt_fb_banner": h,
                "click:ol_campaignmanagement_updates_all:btn_dismiss_campmgmt_fb_banner": h,
                "click:ol_campaignmanagement_manage_team:btn_dismiss_campmgmt_fb_banner": h,
                "click:ol_campaignmanagement_comments:btn_dismiss_campmgmt_fb_banner": h,
                "click:ol_campaignmanagement_dashboard:btn_campmgmt_fb_banner": h,
                "click:ol_campaignmanagement_donations:btn_campmgmt_fb_banner": h,
                "click:ol_campaignmanagement_updates_all:btn_campmgmt_fb_banner": h,
                "click:ol_campaignmanagement_manage_team:btn_campmgmt_fb_banner": h,
                "click:ol_campaignmanagement_comments:btn_campmgmt_fb_banner": h,
                banner_share_to_facebook_post_success: h,
                accepted_team_invite: h,
                "view:banner_co_community_displayed": h,
                "click:ol_campaignmanagement_dashboard:btn_dismiss_campmgmt_co_cmty_banner": h,
                "click:ol_campaignmanagement_donations:btn_dismiss_campmgmt_co_cmty_banner": h,
                "click:ol_campaignmanagement_updates_all:btn_dismiss_campmgmt_co_cmty_banner": h,
                "click:ol_campaignmanagement_manage_team:btn_dismiss_campmgmt_co_cmty_banner": h,
                "click:ol_campaignmanagement_comments:btn_dismiss_campmgmt_co_cmty_banner": h,
                "click:ol_campaignmanagement_dashboard:btn_campmgmt_co_cmty_banner": h,
                "click:ol_campaignmanagement_donations:btn_campmgmt_co_cmty_banner": h,
                "click:ol_campaignmanagement_updates_all:btn_campmgmt_co_cmty_banner": h,
                "click:ol_campaignmanagement_manage_team:btn_campmgmt_co_cmty_banner": h,
                "click:ol_campaignmanagement_comments:btn_campmgmt_co_cmty_banner": h,
                "view:banner_post_update_displayed": h,
                "click:ol_campaignmanagement_dashboard:btn_campmgmt_postupdate_banner": h,
                "click:ol_campaignmanagement_donations:btn_campmgmt_postupdate_banner": h,
                "click:ol_campaignmanagement_updates_all:btn_campmgmt_postupdate_banner": h,
                "click:ol_campaignmanagement_manage_team:btn_campmgmt_postupdate_banner": h,
                "click:ol_campaignmanagement_comments:btn_campmgmt_postupdate_banner": h,
                "click:ol_campaignmanagement_dashboard:btn_campmgmt_team": h,
                "click:ol_campaignmanagement_dashboard:btn_campmgmt_donations": h,
                "click:ol_campaignmanagement_dashboard:btn_campmgmt_comments": h,
                "click:ol_campaignmanagement_dashboard:btn_campmgmt_updates": h,
                "click:ol_campaignmanagement_dashboard:btn_campmgmt_withdraw": h,
                "click:ol_campaignmanagement_dashboard:btn_campmgmt_edit": h,
                "click:ol_campaignmanagement_dashboard:btn_manage_donors": h,
                "view:ol_campaignmanagement_donations": h,
                "click:pg_campmgmt_dashboard_donorstab_goalheader:btn_campmgmt_openemailsharemodal": h,
                "view:pg_campmgmt_dashboard_emailsharemodal": h,
                "click:pg_campmgmt_dashboard_emailsharemodal:btn_campmgmt_sendemail_emailsharemodal": h,
                "view:pg_campmgmt_dashboard_emailsharemodal_success": h,
                "click:pg_campmgmt_dashboard_emailsharemodal_success:btn_campmgmt_emailsharemodal_sendmore": h,
                "click:pg_campmgmt_dashboard_donorstab_goalheader:btn_campmgmt_opensmssharemodal": h,
                "view:pg_campmgmt_dashboard_smssharemodal": h,
                "click:pg_campmgmt_dashboard_smssharemodal:btn_campmgmt_sendsms_smssharemodal": h,
                "view:pg_campmgmt_dashboard_smssharemodal_success": h,
                "click:pg_campmgmt_dashboard_smssharemodal_success:btn_campmgmt_smssharemodal_sendmore": h,
                "click:ol_campaignmanagement_dashboard:btn_campmgmt_emptydonationsgotoshare": h,
                "click:ol_campaignmanagement_donations:btn_campmgmt_emptydonationsgotoshare": h,
                "click:pg_campmgmt_dashboard_donorstab_contactses:btn_campmgmt_openemailsharemodal": h,
                "click:pg_campmgmt_dashboard_donorstab_contactses:btn_campmgmt_opensmssharemodal": h,
                "view:ol_campaignmanagement_comments": h,
                "click:ol_campaignmanagement_dashboard:btn_manage_comments": h,
                "click:ol_campaignmanagement_donations:btn_manage_comments": h,
                "click:ol_campaignmanagement_updates_all:btn_manage_comments": h,
                "click:ol_campaignmanagement_manage_team:btn_manage_comments": h,
                "click:ol_campaignmanagement_comments:btn_manage_comments": h,
                "view:ol_campaignmanagement_updates_all": h,
                "click:ol_campaignmanagement_dashboard:btn_manage_updates": h,
                "click:ol_campaignmanagement_donations:btn_manage_updates": h,
                "click:ol_campaignmanagement_updates_all:btn_manage_updates": h,
                "click:ol_campaignmanagement_manage_team:btn_manage_updates": h,
                "click:ol_campaignmanagement_comments:btn_manage_updates": h,
                "view:ol_campaignmanagement_manage_team": h,
                "click:ol_campaignmanagement_dashboard:btn_manage_team": h,
                "click:ol_campaignmanagement_donations:btn_manage_team": h,
                "click:ol_campaignmanagement_updates_all:btn_manage_team": h,
                "click:ol_campaignmanagement_manage_team:btn_manage_team": h,
                "click:ol_campaignmanagement_comments:btn_manage_team": h,
                "click:ol_campaignmanagement_manage_team:btn_managecampaign_changetoteam": h,
                "click:ol_campaignmanagement_teampage:btn_teaminvite_copy": h,
                "click:ol_campaignmanagement_teampage:btn_inviteteam_sendrequestviaemail": h,
                "click:ol_campaignmanagement_teampage:btn_campmgmt_teampage_addmember": h,
                "click:ol_campaignmanagement_teampage:btn_campmgmt_teampage_sendgoalreminder": h,
                "click:ol_campaignmanagement_teampage:btn_campmgmt_teampage_messageteam": h,
                "click:ol_campaignmanagement_teampage:btn_campmgmt_teampage_teamsettings": h,
                "click:ol_campaignmanagement_updates_all:btn_campmgmt_postupdate": h,
                "view:ol_campaignmanagement_teaminvitemodal": h,
                "view:ol_campaignmanagement_teaminvitemodal_selectcontacts": h,
                "click:ol_campaignmanagement_teaminvitemodal_selectcontacts:btn_teaminvite_brandedemails": h,
                "view:ol_campaignmanagement_teaminvitemodal_brandedemails": h,
                "click:ol_campaignmanagement_teaminvitemodal_brandedemails:btn_importcontacts_yahoo": h,
                "click:ol_campaignmanagement_teaminvitemodal_brandedemails:btn_importcontacts_outlook": h,
                "click:ol_campaignmanagement_teaminvitemodal_brandedemails:btn_importcontacts_gmail": h,
                "view:ol_campaignmanagement_teaminvitemodal_addmessage": h,
                "click:ol_campaignmanagement_teaminvitemodal_addmessage:btn_inviteteam_invite": h,
                "click:ol_campaignmanagement_teaminvitemodal:btn_inviteteam_inviteviagofundme": h,
                "click:ol_campaignmanagement_teaminvitemodal:btn_teaminvite_copy": h,
                "view:pg_campmgmt_teamwelcome": h,
                "click:pg_campmgmt_teamwelcome:btn_campmgmt_sharefacebook": h,
                "click:pg_campmgmt_teamwelcome:ol_campmgmt_manage_teamwelcome_share_modal": h,
                "view:pg_campmgmt_teamwelcome_sharesheet": h,
                "click:pg_campmgmt_teamwelcome_sharesheet:btn_campmgmt_sharefacebook": h,
                "click:pg_campmgmt_teamwelcome_sharesheet:btn_campmgmt_sharelink": h,
                "click:pg_campmgmt_teamwelcome_sharesheet:btn_campmgmt_opensmssharemodal": h,
                "click:pg_campmgmt_teamwelcome_sharesheet:btn_campmgmt_sharemessenger": h,
                "click:pg_campmgmt_teamwelcome_sharesheet:btn_campmgmt_openemailsharemodal": h,
                "click:pg_campmgmt_teamwelcome_sharesheet:btn_campmgmt_sharetwitter": h,
                "click:pg_campmgmt_teamwelcome_sharesheet:btn_campmgmt_sharelinkedin": h,
                "click:pg_campmgmt_teamwelcome_sharesheet:btn_campmgmt_printfund": h,
                "click:pg_campmgmt_teamwelcome_sharesheet:btn_campmgmt_sharewhatsapp": h,
                "click:pg_campaignmanagement_index:btn_nav_hamburger_icon": h,
                "click:pg_campaignmanagement_index:link_nav_gfm_profile": h,
                "click:pg_campaignmanagement_index:btn_navmenu_my-donations": h,
                "click:pg_campaignmanagement_index:btn_navmenu_new-fundraiser": h,
                "click:pg_campaignmanagement_index:btn_nav_settings": h,
                "click:pg_campaignmanagement_index:btn_navmenu_campaigns": h,
                "click:pg_campaignmanagement_index:btn_nav_campaigns": h,
                "view:pg_campmgmt_mycampaigns": h,
                "click:pg_campmgmt_mycampaigns:btn_mycampaigns_startnew": h,
                "click:pg_campmgmt_mycampaigns:btn_mycampaigns_mobilestart": h,
                "click:pg_campaignmanagement_index:link_nav_add_campaign": h,
                "click:pg_campaignmanagement_index:btn_nav_support_gofundme_com": h,
                "click:pg_campaignmanagement_index:btn_nav_sign_out": h,
                "view:ol_campaignmanagement_native_upsell": h,
                "click:ol_campaignmanagement_native_upsell:btn_campmgmt_upsell_exit": h,
                "click:ol_campaignmanagement_native_upsell:btn_campmgmt_upsell_iphone": h,
                "click:ol_campaignmanagement_native_upsell:btn_campmgmt_upsell_android": h,
                "click:ol_campaignmanagement_dashboard:btn_blurheader_click_url": h,
                "click:ol_campaignmanagement_donations:btn_blurheader_click_url": h,
                "click:ol_campaignmanagement_comments:btn_blurheader_click_url": h,
                "click:ol_campaignmanagement_updates_all:btn_blurheader_click_url": h,
                "click:ol_campaignmanagement_manage_team:btn_blurheader_click_url": h,
                "click:ol_campaignmanagement_dashboard:btn_blurheader_copy_link": h,
                "click:ol_campaignmanagement_donations:btn_blurheader_copy_link": h,
                "click:ol_campaignmanagement_comments:btn_blurheader_copy_link": h,
                "click:ol_campaignmanagement_updates_all:btn_blurheader_copy_link": h,
                "click:ol_campaignmanagement_manage_team:btn_blurheader_copy_link": h,
                "view:ol_campaignmanagement_dashboard_phonenumber_MFA": h,
                "click:ol_campaignmanagement_dashboard_phonenumber_MFA:btn_sendcode": h,
                "click:ol_campaignmanagement_dashboard_phonenumber_MFA:btn_verify": h,
                phonenumber_MFA_complete_callback_dashboard: h,
                "view:ol_campaignmanagement_withdrawal_prompt": h,
                "click:ol_campaignmanagement_withdrawal_prompt:btn_wthdrw_setup": h,
                "click:ol_campaignmanagement_withdrawal_prompt:btn_wthdrw_skip": h,
                "view:pg_homepage_norma_index": b,
                "view:pg_index_new_index": b,
                "view:banner_merch_unit": b,
                "click:pg_homepage_norma_index:banner_merch_unit": b,
                "click:pg_homepage_norma_index:btn_nav_sign_up": b,
                "click:pg_homepage_norma_index:btn_nav_gfm_logo": b,
                "click:pg_homepage_norma_index:btn_nav_manage": b,
                "click:pg_homepage_norma_index:btn_nav_covid19": b,
                "click:pg_homepage_norma_index:btn_nav_donate_button": b,
                "click:pg_homepage_norma_index:btn_nav_smb_relief": b,
                "click:pg_homepage_norma_index:btn_nav_justice_and_equality": b,
                "click:pg_homepage_norma_index:btn_hero_primary": b,
                "click:pg_homepage_norma_index:btn_hero_primary_dash": b,
                "click:pg_homepage_norma_index:btn_hero_video": b,
                "click:pg_homepage_norma_index:btn_hero_video_start": b,
                "click:pg_homepage_norma_index:btn_hero_holiday_donate": b,
                "click:pg_homepage_norma_index:btn_getstarted_yourself_card": b,
                "click:pg_homepage_norma_index:btn_getstarted_friend_card": b,
                "click:pg_homepage_norma_index:btn_getstarted_charity_card": b,
                "click:pg_homepage_norma_index:btn_signup_bottom": b,
                "click:pg_homepage_norma_index:btn_homepage_footer_cta": b,
                "click:pg_homepage_norma_index:btn_navmenu_my-donations": b,
                "click:pg_homepage_norma_index:btn_navmenu_new-fundraiser": b,
                "click:pg_homepage_norma_index:btn_deactivated_signin": b,
                "click:pg_homepage_norma_index:btn_topic_blog": b,
                "click:pg_homepage_norma_index:btn_topic_start": b,
                "click:pg_homepage_norma_index:btn_topic_smb_relief": b,
                "click:pg_homepage_norma_index:btn_community_cta": b,
                "click:pg_homepage_norma_index:btn_home_trending_campaigns_1_fund_tile_title": b,
                "click:pg_homepage_norma_index:btn_home_trending_campaigns_2_fund_tile_title": b,
                "click:pg_homepage_norma_index:btn_home_trending_campaigns_3_fund_tile_title": b,
                "click:pg_homepage_norma_index:btn_home_trending_campaigns_1_fund_tile_picture": b,
                "click:pg_homepage_norma_index:btn_home_trending_campaigns_2_fund_tile_picture": b,
                "click:pg_homepage_norma_index:btn_home_trending_campaigns_3_fund_tile_picture": b,
                "click:pg_homepage_norma_index:btn_nav_charity_homepage": b,
                "click:pg_homepage_norma_index:btn_nav_gofundme_community": b,
                "click:pg_homepage_norma_index:btn_footer_charity_homepage": b,
                "click:pg_categorypages_startHub:btn_nav_sign_up": y,
                "click:pg_categorypages_startHub:btn_signup_bottom": y,
                "click:pg_categorypages_discoverHub:btn_nav_sign_up": y,
                "view:pg_categorypages_view": y,
                "click:pg_categorypages_view:btn_nav_sign_up": y,
                "click:pg_categorypages_view:btn_signup_hero": y,
                "click:pg_categorypages_view:btn_signup_ready2fundraise": y,
                "click:pg_categorypages_view:btn_signup_bottom": y,
                "view:pg_start_charity_fundraising": y,
                "click:pg_start_charity_fundraising:btn_charitylandingpage_searchinput": y,
                "click:pg_start_charity_fundraising:btn_charitylandingpage_startanonprofit": y,
                "view:pg_index_new_signout": O,
                "view:pg_index_new_mobile": O,
                "click:pg_index_new_signout:link_nav_start_fundraiser": O,
                "click:pg_index_new_mobile:link_nav_start_fundraiser": O,
                "click:pg_index_new_signout:btn_footer_why_gofundme_signup": O,
                "click:pg_index_new_mobile:btn_footer_why_gofundme_signup": O,
                "click:pg_index_new_mobile:btn_ios_app_store": O,
                "click:pg_index_new_signout:btn_ios_app_store": O,
                "click:pg_index_new_mobile:btn_android_app_store": O,
                "click:pg_index_new_signout:btn_android_app_store": O,
                "click:pg_index_new_signout:btn_nav_sign_up": O,
                "click:pg_index_new_mobile:btn_nav_sign_up": O,
                "click:pg_index_new_mobile:btn_signup_bottom": O,
                "view:pg_homepage_norma_search": S,
                "click:pg_homepage_norma_search:btn_signup_bottom": S,
                "click:pg_homepage_norma_search:btn_nav_sign_up": S,
                "click:pg_index_new_teams_general:btn_signup_ready2fundraise": R,
                "click:pg_index_new_teams_general:btn_nav_sign_up": R,
                "click:pg_index_new_teams_general:btn_signup_bottom": R,
                "view:ol_settings_account": v,
                "click:ol_settings_account:btn_verify": v,
                "view:ol_settings_account_phonenumber_MFA": v,
                "click:ol_settings_account_phonenumber_MFA:btn_verify": v,
                phonenumber_MFA_complete_callback_account_settings: v,
                "view:ol_mymoney_start": w,
                "click:ol_mymoney_start:btn_withdraw_setup": w,
                "click:ol_mymoney_start:btn_withdraw_fees": w,
                "view:ol_withdraw_intro": w,
                "view:ol_withdraw_redirect": w,
                "view:ol_withdraw_select_type": w,
                "click:ol_withdraw_select_type:btn_withdraw_type": w,
                "click:ol_withdraw_select_type:btn_withdraw_type_submit": w,
                "click:ol_withdraw_select_type:withdraw_type_select": w,
                "click:ol_withdraw_select_type:withdraw_type_myself": w,
                "click:ol_withdraw_select_type:withdraw_type_someoneelse": w,
                "click:ol_withdraw_select_type:withdraw_type_entity_select": w,
                "click:ol_withdraw_select_type:withdraw_type_entity_individual": w,
                "click:ol_withdraw_select_type:withdraw_type_entity_business_corporation": w,
                "click:ol_withdraw_select_type:withdraw_type_entity_business_partnership": w,
                "click:ol_withdraw_select_type:withdraw_type_entity_soleprop": w,
                "click:ol_withdraw_select_type:withdraw_type_entity_company": w,
                "click:ol_withdraw_select_type:withdraw_type_entity_partnership": w,
                "click:ol_withdraw_select_type:btn_withdraw_select_type_go_back": w,
                "click:ol_withdraw_select_type:btn_withdraw_type_contact": w,
                "view:ol_kyc_setup_individual": w,
                "view:ol_kyc_setup_individual_confirm": w,
                "view:ol_kyc_setup_ssn_individual_confirm": w,
                "click:ol_kyc_setup_individual:btn_kyc_individual_submit": w,
                "click:ol_kyc_setup_individual:btn_kyc_individual_go_back": w,
                "click:ol_kyc_setup_individual:btn_kyc_individual_contact": w,
                "click:ol_kyc_setup_individual:btn_kyc_start_contact": w,
                "click:ol_kyc_setup_individual:btn_kyc_switch_beneficiary": w,
                "view:ol_kyc_setup_individual:error": w,
                "click:ol_kyc_setup_individual:btn_kyc_submit_confirm": w,
                "click:ol_kyc_setup_individual:btn_kyc_cancel": w,
                "click:ol_kyc_setup_individual:btn_kyc_confirm_start_contact": w,
                "view:ol_kyc_setup_organization": w,
                "click:ol_kyc_setup_organization:btn_kyc_organization_submit": w,
                "view:ol_beneficiary_invite": w,
                "click:ol_beneficiary_invite:btn_beneficiary_invite": w,
                "click:ol_beneficiary_invite:btn_beneficiary_invite_confirm": w,
                "click:ol_beneficiary_invite:btn_beneficiary_invite_contact": w,
                "click:ol_beneficiary_invite:btn_beneficiary_invite_go_back": w,
                "click:ol_beneficiary_invite:btn_beneficiary_invite_cancel": w,
                "view:ol_beneficiary_claim": w,
                "click:ol_beneficiary_claim:btn_sendcode": w,
                "click:ol_beneficiary_claim:btn_beneficiary_claim_accept": w,
                "click:ol_beneficiary_claim:btn_beneficiary_claim_decline": w,
                "click:ol_beneficiary_claim:btn_verify": w,
                "click:ol_beneficiary_claim:btn_mfa_change_number": w,
                "click:ol_beneficiary_claim:btn_mfa_send_code": w,
                "click:ol_beneficiary_claim:btn_mfa_verify_resend": w,
                "click:ol_beneficiary_claim:btn_mfa_verify_contact": w,
                "click:ol_beneficiary_claim:btn_mfa_success_setup": w,
                "click:ol_kyc_individual_document_confirm:btn_document_edit": w,
                "click:ol_kyc_individual_document_confirm:btn_document_upload": w,
                "click:ol_kyc_individual_document_upload:btn_document_upload_submit": w,
                "click:ol_kyc_individual_document_upload:btn_document_upload_go_back": w,
                "click:ol_kyc_individual_document_upload:btn_document_upload_contact": w,
                "view:ol_kyc_individual_document_upload:error": w,
                "view:ol_kyc_individual_document_upload": w,
                "view:ol_kyc_individual_document_upload_confirm": w,
                "click:ol_settlement_individual_document_confirm:btn_document_edit": w,
                "click:ol_settlement_individual_document_confirm:btn_document_upload": w,
                "click:ol_settlement_individual_document_upload:btn_document_upload_submit": w,
                "click:ol_settlement_individual_document_upload:btn_document_upload_go_back": w,
                "click:ol_settlement_individual_document_upload:btn_document_upload_contact": w,
                "view:ol_settlement_individual_document_upload:error": w,
                "view:ol_settlement_individual_document_upload": w,
                "view:ol_settlement_individual_document_upload_confirm": w,
                "view:ol_settlement_individual_bank_document_confirm": w,
                "click:ol_settlement_individual_bank_document_confirm:btn_document_edit": w,
                "click:ol_settlement_individual_bank_document_confirm:btn_document_upload": w,
                "view:ol_settlement_bank": w,
                "click:ol_settlement_bank:trustly_bank_selected": w,
                "click:ol_settlement_bank:trustly_back": w,
                "click:ol_settlement_bank:trustly_close": w,
                "click:ol_settlement_bank:trustly_enter_bank_manually": w,
                "view:ol_kyc_setup_company:error": w,
                "view:ol_kyc_setup_company": w,
                "view:ol_kyc_setup_company_confirm": w,
                "click:ol_kyc_setup_company:btn_kyc_company_submit": w,
                "click:ol_kyc_setup_company:btn_kyc_company_contact": w,
                "click:ol_kyc_setup_company:btn_kyc_company_go_back": w,
                "click:ol_kyc_setup_company:btn_kyc_start_contact": w,
                "click:ol_kyc_setup_company:btn_kyc_switch_beneficiary": w,
                "click:ol_kyc_setup_company:btn_kyc_submit_confirm": w,
                "click:ol_kyc_setup_company:btn_kyc_cancel": w,
                "click:ol_kyc_setup_company:btn_kyc_confirm_start_contact": w,
                "click:ol_kyc_setup_company_partnership:btn_kyc_confirm_start_contact": w,
                "view:ol_kyc_setup_company_partnership:error": w,
                "view:ol_kyc_setup_company_partnership": w,
                "view:ol_kyc_setup_company_partnership_confirm": w,
                "click:ol_kyc_setup_company_partnership:btn_kyc_company_partnership_submit": w,
                "click:ol_kyc_setup_company_partnership:btn_kyc_company_partnership_contact": w,
                "click:ol_kyc_setup_company_partnership:btn_kyc_company_partnership_go_back": w,
                "click:ol_kyc_setup_company_partnership:btn_kyc_start_contact": w,
                "click:ol_kyc_setup_company_partnership:btn_kyc_switch_beneficiary": w,
                "click:ol_kyc_setup_company_partnership:btn_kyc_submit_confirm": w,
                "click:ol_kyc_setup_company_partnership:btn_kyc_cancel": w,
                "view:ol_settlement_setup_complete": w,
                "view:ol_settlement_setup_confirmation": w,
                "view:ol_settlement_setup": w,
                "view:ol_mymoney_overview": w,
                "view:ol_dashboard_history": w,
                "view:ol_chargeback_management_load": w,
                "view:ol_document_upload": w,
                "view:ol_document_confirm": w,
                "view:ol_mymoney_start:banner_campaign_alert_displayed": w,
                "click:ol_mymoney_start:btn_campaignmgmt_alertcta": w,
                "click:ol_mymoney_start:btn_dismiss_alert_banner": w,
                "view:ol_mymoney_overview:banner_campaign_alert_displayed": w,
                "click:ol_mymoney_overview:btn_campaignmgmt_alertcta": w,
                "click:ol_mymoney_overview:btn_dismiss_alert_banner": w,
                "click:ol_mymoney_overview:btn_withdrawal_history": w,
                "click:ol_mymoney_overview:btn_settlement_edit": w,
                "click:ol_mymoney_overview:btn_withdrawal_frequency": w,
                "click:ol_mymoney_overview:btn_cancel_invite": w,
                "click:ol_mymoney_overview:btn_resend_invite": w,
                "click:ol_mymoney_overview:btn_withdrawal_overview_tab": w,
                "click:ol_mymoney_overview:btn_withdrawal_history_tab": w,
                "click:ol_mymoney_overview:btn_withdrawal_chargeback_tab": w,
                "click:ol_mymoney_start:btn_sendcode": w,
                "click:ol_mymoney_start:btn_verify": w,
                "click:ol_mymoney_start:btn_mfa_change_number": w,
                "click:ol_mymoney_start:btn_mfa_send_code": w,
                "click:ol_mymoney_start:btn_mfa_verify_resend": w,
                "click:ol_mymoney_start:btn_mfa_verify_contact": w,
                "click:ol_mymoney_start:btn_mfa_success_setup": w,
                "click:ol_withdraw_intro:btn_mfa_send_code": w,
                "click:ol_mymoney_start:btn_send_email_verification": w,
                "click:ol_mymoney_start:btn_close_email_verification": w,
                "view:ol_mymoney_start:email_verification": w,
                "click:ol_mymoney_start:btn_verify_email_contact": w,
                "click:pg_mymoney_index:link_nav_home": w,
                "click:pg_mymoney_index:link_nav_gfm_profile": w,
                "click:pg_mymoney_index:btn_navmenu_my-donations": w,
                "click:pg_mymoney_index:btn_navmenu_new-fundraiser": w,
                "click:pg_mymoney_index:btn_nav_settings": w,
                "click:pg_mymoney_index:btn_navmenu_campaigns": w,
                "click:pg_mymoney_index:btn_nav_campaigns": w,
                "click:pg_mymoney_index:link_nav_add_campaign": w,
                "click:pg_mymoney_index:btn_nav_hamburger_icon": w,
                "click:pg_mymoney_index:btn_nav_support_gofundme_com": w,
                "click:pg_mymoney_index:btn_nav_sign_out": w,
                "click:pg_mymoney_index:link_nav_dashboard": w,
                "click:pg_mymoney_index:btn_kyc_confirm_start_contact": w,
                "click:pg_mymoney_index:btn_kyc_switch_beneficiary": w,
                "view:ol_settlement_setup_confirm:error": w,
                "click:ol_settlement_setup:btn_settlement_contact": w,
                "click:ol_settlement_setup:btn_settlement_setup_go_back": w,
                "click:ol_settlement_setup:btn_settlement_submit": w,
                "click:ol_settlement_setup_complete:btn_settlement_setup_complete": w,
                "click:ol_settlement_setup_confirm:btn_settlement_contact": w,
                "click:ol_settlement_setup_confirm:btn_settlement_cancel": w,
                "click:ol_settlement_setup_confirm:btn_settlement_submit_confirm": w,
                "view:pg_charity_index": p,
                "click:pg_charity_index:btn_donate": p,
                "click:pg_charity_index:btn_start_charity_fundraiser": p,
                "click:pg_charity_index:btn_donate_moredonations": p,
                "click:pg_charity_index:btn_see_all_donations": p,
                "click:pg_charity_index:btn_start_charity_fundraiser_recent_campaigns": p,
                "click:pg_charity_index:link_campaign_card": p,
                "click:pg_charity_index:link_charity_card": p,
                "view:pg_charity_donations_modal": p,
                "click:pg_charity_donations_modal:btn_donations_message": p,
                "click:pg_charity_donations_modal:link_donations_join_list": p,
                "click:language_selector": {
                    eventTypePrefix: "footer"
                },
                customize_complete: {},
                donation_complete: {},
                try_again_jenkins: {},
                try_again_nexus: {},
                "checkout:enter": {
                    eventDataKeys: ["p_proc", "fund_id", "fund_country", "currency_code", "person_id"]
                }
            }
    },
    eqXf: function(e, t, a) {
        "use strict";
        var n = this && this.__values || function(e) {
            var t = "function" == typeof Symbol && Symbol.iterator,
                a = t && e[t],
                n = 0;
            if (a)
                return a.call(e);
            if (e && "number" == typeof e.length)
                return {
                    next: function() {
                        return e && n >= e.length && (e = void 0), {
                            value: e && e[n++],
                            done: !e
                        }
                    }
                };
            throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getSupportedLocale = t.getLocaleObject = t.getISO15897Locale = t.getBCP47Locale = void 0;
        var c = a("N8uQ");
        function r(e) {
            return e.replace("_", "-")
        }
        function i(e) {
            return e.replace("-", "_")
        }
        function _(e) {
            var t = e.split(/[-_]/),
                a = 2 === t.length ? t[0] : "en";
            return {
                country: 2 === t.length ? t[1] : "US",
                language: a,
                locale: {
                    bcp47: r(e),
                    iso15897: i(e)
                }
            }
        }
        t.getBCP47Locale = r,
        t.getISO15897Locale = i,
        t.getLocaleObject = _,
        t.getSupportedLocale = function(e, t) {
            var a,
                r,
                i,
                o;
            void 0 === t && (t = c.SupportedLocaleFormats.ISO15897);
            var s = function(e) {
                    switch (t) {
                    case c.SupportedLocaleFormats.BCP47:
                        return e.locale.bcp47;
                    case c.SupportedLocaleFormats.ISO15897:
                        return e.locale.iso15897
                    }
                },
                l = _(c.SupportedLocales.ENGLISH_US),
                p = _(e),
                u = Object.values(c.SupportedLocales).map((function(e) {
                    return _(e)
                }));
            try {
                for (var d = n(u), m = d.next(); !m.done; m = d.next()) {
                    var f = m.value;
                    if (p.locale.iso15897 === f.locale.iso15897)
                        return s(f)
                }
            } catch (h) {
                a = {
                    error: h
                }
            } finally {
                try {
                    m && !m.done && (r = d.return) && r.call(d)
                } finally {
                    if (a)
                        throw a.error
                }
            }
            try {
                for (var E = n(u), A = E.next(); !A.done; A = E.next()) {
                    f = A.value;
                    if (p.language === f.language)
                        return s(f)
                }
            } catch (g) {
                i = {
                    error: g
                }
            } finally {
                try {
                    A && !A.done && (o = E.return) && o.call(E)
                } finally {
                    if (i)
                        throw i.error
                }
            }
            return s(l)
        }
    },
    fPxM: function(e, t, a) {
        "use strict";
        var n = this && this.__read || function(e, t) {
                var a = "function" == typeof Symbol && e[Symbol.iterator];
                if (!a)
                    return e;
                var n,
                    c,
                    r = a.call(e),
                    i = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(n = r.next()).done;)
                        i.push(n.value)
                } catch (_) {
                    c = {
                        error: _
                    }
                } finally {
                    try {
                        n && !n.done && (a = r.return) && a.call(r)
                    } finally {
                        if (c)
                            throw c.error
                    }
                }
                return i
            },
            c = this && this.__spread || function() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e = e.concat(n(arguments[t]));
                return e
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.timestampDesc = t.merge = t.createdAtDesc = void 0,
        t.createdAtDesc = function(e, t) {
            return new Date(t.created_at).getTime() - new Date(e.created_at).getTime()
        },
        t.timestampDesc = function(e, t) {
            return new Date(t.timestamp).getTime() - new Date(e.timestamp).getTime()
        },
        t.merge = function(e, t, a) {
            var n = t.map(a);
            return c(e.filter((function(e) {
                return n.indexOf(a(e)) < 0
            })), t)
        }
    },
    fadw: function(e, t, a) {
        "use strict";
        a.r(t);
        var n = a("q1tI"),
            c = a.n(n),
            r = a("i8i4"),
            i = (a("17x9"), /^-?\d*\.?\d+(px|%)$/);
        function _(e) {
            var t = (e ? e.trim() : "0px").split(/\s+/).map((function(e) {
                    if (!i.test(e))
                        throw new Error("rootMargin must be a string literal containing pixels and/or percent values");
                    return e
                })),
                a = t[0],
                n = void 0 === a ? "0px" : a,
                c = t[1],
                r = void 0 === c ? n : c,
                _ = t[2],
                o = void 0 === _ ? n : _,
                s = t[3];
            return n + " " + r + " " + o + " " + (void 0 === s ? r : s)
        }
        function o(e, t) {
            return Array.isArray(e) && Array.isArray(t) && e.length === t.length ? e.some((function(a, n) {
                return o(e[n], t[n])
            })) : e !== t
        }
        var s = new Map;
        function l(e, t) {
            var a = s.get(e);
            if (a)
                for (var n, c = a.values(); n = c.next().value;)
                    if (n.target === t.target)
                        return n;
            return null
        }
        function p(e, t) {
            for (var a = 0; a < e.length; a++) {
                var n = l(t, e[a]);
                n && n.handleChange(e[a])
            }
        }
        function u(e) {
            return function(e) {
                    void 0 === e && (e = {});
                    for (var t, a = e.root || null, n = _(e.rootMargin), c = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], r = s.keys(); t = r.next().value;) {
                        if (!(a !== t.root || n !== t.rootMargin || o(c, t.thresholds)))
                            return t
                    }
                    return null
                }(e) || new IntersectionObserver(p, e)
        }
        function d(e) {
            s.has(e.observer) || s.set(e.observer, new Set),
            s.get(e.observer).add(e),
            e.observer.observe(e.target)
        }
        function m(e, t) {
            if (s.has(e.observer)) {
                var a = s.get(e.observer);
                a.delete(e) && (a.size > 0 ? e.observer.unobserve(t) : (e.observer.disconnect(), s.delete(e.observer)))
            }
        }
        var f = a("QLaP"),
            E = a.n(f),
            A = {},
            h = Object.create(null, {
                errorReporter: {
                    configurable: !1,
                    get: function() {
                        return A.errorReporter || function(e) {
                                return E()(!1, e)
                            }
                    },
                    set: function(e) {
                        if ("function" != typeof e)
                            throw new Error("ReactIntersectionObserver: `Config.errorReporter` must be a callable");
                        A.errorReporter = e
                    }
                }
            });
        function g(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function T(e, t, a) {
            return t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a, e
        }
        var b = ["root", "rootMargin", "threshold"],
            O = ["root", "rootMargin", "threshold", "disabled"],
            S = Object.prototype,
            R = S.hasOwnProperty,
            y = S.toString,
            v = function(e) {
                return b.reduce((function(t, a) {
                    if (R.call(e, a)) {
                        var n = "root" === a && "[object String]" === y.call(e[a]);
                        t[a] = n ? document.querySelector(e[a]) : e[a]
                    }
                    return t
                }), {})
            },
            k = function(e) {
                var t,
                    a;
                function n() {
                    for (var t, a = arguments.length, n = new Array(a), c = 0; c < a; c++)
                        n[c] = arguments[c];
                    return T(g(t = e.call.apply(e, [this].concat(n)) || this), "handleChange", (function(e) {
                        t.props.onChange(e, t.externalUnobserve)
                    })), T(g(t), "handleNode", (function(e) {
                        var a = t.props.children;
                        if (null != a) {
                            var n = a.ref;
                            n && ("function" == typeof n ? n(e) : "object" == typeof n && (n.current = e))
                        }
                        t.targetNode = e && Object(r.findDOMNode)(e)
                    })), T(g(t), "observe", (function() {
                        return null != t.props.children && !t.props.disabled && (t.targetNode ? (t.observer = u(v(t.props)), t.target = t.targetNode, d(g(t)), !0) : (h.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1))
                    })), T(g(t), "unobserve", (function(e) {
                        m(g(t), e)
                    })), T(g(t), "externalUnobserve", (function() {
                        t.unobserve(t.targetNode)
                    })), t
                }
                a = e,
                (t = n).prototype = Object.create(a.prototype),
                t.prototype.constructor = t,
                t.__proto__ = a;
                var i = n.prototype;
                return i.getSnapshotBeforeUpdate = function(e) {
                    var t = this;
                    this.prevTargetNode = this.targetNode;
                    var a = O.some((function(a) {
                        return o(t.props[a], e[a])
                    }));
                    return a && this.prevTargetNode && (e.disabled || this.unobserve(this.prevTargetNode)), a
                }, i.componentDidUpdate = function(e, t, a) {
                    var n = !1;
                    a || (n = this.prevTargetNode !== this.targetNode) && null != this.prevTargetNode && this.unobserve(this.prevTargetNode),
                    (a || n) && this.observe()
                }, i.componentDidMount = function() {
                    this.observe()
                }, i.componentWillUnmount = function() {
                    this.targetNode && this.unobserve(this.targetNode)
                }, i.render = function() {
                    var e = this.props.children;
                    return null != e ? c.a.cloneElement(c.a.Children.only(e), {
                        ref: this.handleNode
                    }) : null
                }, n
            }(c.a.Component);
        T(k, "displayName", "IntersectionObserver"),
        a.d(t, "default", (function() {
            return k
        })),
        a.d(t, "parseRootMargin", (function() {
            return _
        })),
        a.d(t, "Config", (function() {
            return h
        }))
    },
    ge8b: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = n(a("q1tI")),
            r = a("VU+c"),
            i = a("wE+H"),
            _ = a("hXCg"),
            o = a("yf/i"),
            s = a("5l5+");
        t.default = function(e) {
            var t = e.locale,
                a = e.totalHits,
                n = e.url,
                l = r.getSupportedLocale(t, i.SupportedLocaleFormats.ISO15897),
                p = new _.LocaleNumberFormatter(l);
            return a ? c.default.createElement(o.Link, {
                className: "m-search-drop-down-see-all-link",
                dataElementId: "btn_search",
                to: n
            }, a > 1 ? s.t("See all {{number}} fundraisers", {
                number: p.format(a)
            }) : s.t("See {{number}} fundraiser", {
                number: p.format(a)
            })) : c.default.createElement("div", {
                className: "m-search-drop-down-see-all-empty"
            }, s.t("Please try a different search"))
        }
    },
    hHDc: function(e, t, a) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function(e, t, a, n) {
                void 0 === n && (n = a),
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function() {
                        return t[a]
                    }
                })
            } : function(e, t, a, n) {
                void 0 === n && (n = a),
                e[n] = t[a]
            }),
            c = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            r = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && n(t, e, a);
                return c(t, e), t
            },
            i = this && this.__read || function(e, t) {
                var a = "function" == typeof Symbol && e[Symbol.iterator];
                if (!a)
                    return e;
                var n,
                    c,
                    r = a.call(e),
                    i = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(n = r.next()).done;)
                        i.push(n.value)
                } catch (_) {
                    c = {
                        error: _
                    }
                } finally {
                    try {
                        n && !n.done && (a = r.return) && a.call(r)
                    } finally {
                        if (c)
                            throw c.error
                    }
                }
                return i
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var _ = r(a("q1tI")),
            o = a("MgMj");
        function s(e) {
            var t = e.attributes,
                a = e.children,
                n = e.defaultChild,
                c = e.featureName,
                r = e.isServerSide,
                s = e.logIt,
                l = e.optimizely,
                p = e.primaryUnit,
                u = e.serverSideRender,
                d = e.onSetFeature,
                m = i(_.useState(!1), 2),
                f = m[0],
                E = m[1],
                A = i(_.useState(!1), 2),
                h = A[0],
                g = A[1],
                T = i(_.useState(!1), 2),
                b = T[0],
                O = T[1],
                S = h ? f : o.getForceFeature(c);
            return _.useEffect((function() {
                s && h && !b && d && (d(f), O(!0))
            })), l && (u && r && void 0 === S ? S = l.isFeatureEnabled(c, p, o.filterAttributes(t)) : r || h || l.onReady({}).then((function() {
                void 0 === S && (S = l.isFeatureEnabled(c, p, o.filterAttributes(t))),
                E(S),
                g(!0)
            }))), S ? _.default.createElement(_.default.Fragment, null, a(S)) : n ? _.default.createElement(_.default.Fragment, null, n) : _.default.createElement(_.default.Fragment, null)
        }
        s.defaultProps = {
            logIt: !0,
            serverSideRender: !1,
            trackExposureName: "experiments"
        },
        t.default = s
    },
    hXCg: function(e, t, a) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function(e, t, a, n) {
                void 0 === n && (n = a),
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function() {
                        return t[a]
                    }
                })
            } : function(e, t, a, n) {
                void 0 === n && (n = a),
                e[n] = t[a]
            }),
            c = this && this.__exportStar || function(e, t) {
                for (var a in e)
                    "default" === a || t.hasOwnProperty(a) || n(t, e, a)
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        c(a("A8Cc"), t),
        c(a("Ljcy"), t)
    },
    hqqJ: function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return ie
        })),
        a.d(t, "b", (function() {
            return H
        })),
        a.d(t, "c", (function() {
            return h
        })),
        a.d(t, "d", (function() {
            return G
        })),
        a.d(t, "e", (function() {
            return b
        })),
        a.d(t, "f", (function() {
            return s
        })),
        a.d(t, "g", (function() {
            return W
        })),
        a.d(t, "h", (function() {
            return z
        })),
        a.d(t, "i", (function() {
            return L
        })),
        a.d(t, "j", (function() {
            return Q
        })),
        a.d(t, "k", (function() {
            return F
        })),
        a.d(t, "l", (function() {
            return X
        })),
        a.d(t, "m", (function() {
            return oe
        })),
        a.d(t, "n", (function() {
            return pe
        })),
        a.d(t, "o", (function() {
            return re
        })),
        a.d(t, "p", (function() {
            return de
        })),
        a.d(t, "q", (function() {
            return M
        })),
        a.d(t, "r", (function() {
            return N
        })),
        a.d(t, "s", (function() {
            return x
        })),
        a.d(t, "t", (function() {
            return B
        })),
        a.d(t, "u", (function() {
            return I
        })),
        a.d(t, "v", (function() {
            return he
        })),
        a.d(t, "w", (function() {
            return ne
        })),
        a.d(t, "x", (function() {
            return Z
        })),
        a.d(t, "y", (function() {
            return $
        })),
        a.d(t, "z", (function() {
            return ee
        })),
        a.d(t, "A", (function() {
            return te
        })),
        a.d(t, "B", (function() {
            return ae
        })),
        a.d(t, "C", (function() {
            return U
        })),
        a.d(t, "D", (function() {
            return _e
        })),
        a.d(t, "E", (function() {
            return se
        })),
        a.d(t, "F", (function() {
            return le
        })),
        a.d(t, "G", (function() {
            return ue
        })),
        a.d(t, "H", (function() {
            return me
        })),
        a.d(t, "I", (function() {
            return fe
        })),
        a.d(t, "J", (function() {
            return Ee
        })),
        a.d(t, "K", (function() {
            return Ae
        })),
        a.d(t, "L", (function() {
            return j
        })),
        a.d(t, "M", (function() {
            return l
        })),
        a.d(t, "N", (function() {
            return K
        })),
        a.d(t, "O", (function() {
            return D
        })),
        a.d(t, "P", (function() {
            return Y
        })),
        a.d(t, "Q", (function() {
            return q
        })),
        a.d(t, "R", (function() {
            return V
        })),
        a.d(t, "S", (function() {
            return g
        })),
        a.d(t, "T", (function() {
            return v
        })),
        a.d(t, "U", (function() {
            return _
        })),
        a.d(t, "V", (function() {
            return y
        })),
        a.d(t, "W", (function() {
            return T
        })),
        a.d(t, "X", (function() {
            return w
        })),
        a.d(t, "Y", (function() {
            return m
        })),
        a.d(t, "Z", (function() {
            return p
        })),
        a.d(t, "ab", (function() {
            return A
        })),
        a.d(t, "bb", (function() {
            return d
        })),
        a.d(t, "cb", (function() {
            return R
        })),
        a.d(t, "db", (function() {
            return o
        })),
        a.d(t, "eb", (function() {
            return u
        })),
        a.d(t, "fb", (function() {
            return k
        })),
        a.d(t, "gb", (function() {
            return S
        })),
        a.d(t, "hb", (function() {
            return O
        }));
        var n = a("8YN3"),
            c = a("wx14"),
            r = a("uP1p"),
            i = a("sesW"),
            _ = function(e) {
                return function() {
                    return e
                }
            }(!0),
            o = function() {};
        var s = function(e) {
            return e
        };
        "function" == typeof Symbol && Symbol.asyncIterator && Symbol.asyncIterator;
        function l(e, t, a) {
            if (!t(e))
                throw new Error(a)
        }
        var p = function(e, t) {
                Object(c.a)(e, t),
                Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(t).forEach((function(a) {
                    e[a] = t[a]
                }))
            },
            u = function(e, t) {
                var a;
                return (a = []).concat.apply(a, t.map(e))
            };
        function d(e, t) {
            var a = e.indexOf(t);
            a >= 0 && e.splice(a, 1)
        }
        function m(e) {
            var t = !1;
            return function() {
                t || (t = !0, e())
            }
        }
        var f = function(e) {
                throw e
            },
            E = function(e) {
                return {
                    value: e,
                    done: !0
                }
            };
        function A(e, t, a) {
            void 0 === t && (t = f),
            void 0 === a && (a = "iterator");
            var n = {
                meta: {
                    name: a
                },
                next: e,
                throw: t,
                return: E,
                isSagaIterator: !0
            };
            return "undefined" != typeof Symbol && (n[Symbol.iterator] = function() {
                return n
            }), n
        }
        function h(e, t) {
            var a = t.sagaStack;
            console.error(e),
            console.error(a)
        }
        var g = function(e) {
                return new Error("\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.\n  Error: " + e + "\n")
            },
            T = function(e) {
                return Array.apply(null, new Array(e))
            },
            b = function(e) {
                return function(t) {
                    return e(Object.defineProperty(t, n.f, {
                        value: !0
                    }))
                }
            },
            O = function(e) {
                return e === n.k
            },
            S = function(e) {
                return e === n.j
            },
            R = function(e) {
                return O(e) || S(e)
            };
        function y(e, t) {
            var a = Object.keys(e),
                n = a.length;
            var c,
                i = 0,
                _ = Object(r.a)(e) ? T(n) : {},
                s = {};
            return a.forEach((function(e) {
                var a = function(a, r) {
                    c || (r || R(a) ? (t.cancel(), t(a, r)) : (_[e] = a, ++i === n && (c = !0, t(_))))
                };
                a.cancel = o,
                s[e] = a
            })), t.cancel = function() {
                c || (c = !0, a.forEach((function(e) {
                    return s[e].cancel()
                })))
            }, s
        }
        function v(e) {
            return {
                name: e.name || "anonymous",
                location: k(e)
            }
        }
        function k(e) {
            return e[n.g]
        }
        var P = {
            isEmpty: _,
            put: o,
            take: o
        };
        function C(e, t) {
            void 0 === e && (e = 10);
            var a = new Array(e),
                n = 0,
                c = 0,
                r = 0,
                i = function(t) {
                    a[c] = t,
                    c = (c + 1) % e,
                    n++
                },
                _ = function() {
                    if (0 != n) {
                        var t = a[r];
                        return a[r] = null, n--, r = (r + 1) % e, t
                    }
                },
                o = function() {
                    for (var e = []; n;)
                        e.push(_());
                    return e
                };
            return {
                isEmpty: function() {
                    return 0 == n
                },
                put: function(_) {
                    var s;
                    if (n < e)
                        i(_);
                    else
                        switch (t) {
                        case 1:
                            throw new Error("Channel's Buffer overflow!");
                        case 3:
                            a[c] = _,
                            r = c = (c + 1) % e;
                            break;
                        case 4:
                            s = 2 * e,
                            a = o(),
                            n = a.length,
                            c = a.length,
                            r = 0,
                            a.length = s,
                            e = s,
                            i(_)
                        }
                },
                take: _,
                flush: o
            }
        }
        var w = function() {
                return P
            },
            N = function(e) {
                return C(e, 3)
            },
            D = function(e) {
                return C(e, 4)
            },
            L = Object.freeze({
                __proto__: null,
                none: w,
                fixed: function(e) {
                    return C(e, 1)
                },
                dropping: function(e) {
                    return C(e, 2)
                },
                sliding: N,
                expanding: D
            }),
            I = "TAKE",
            M = "PUT",
            H = "ALL",
            x = "RACE",
            G = "CALL",
            U = "CPS",
            W = "FORK",
            F = "JOIN",
            j = "CANCEL",
            B = "SELECT",
            K = "ACTION_CHANNEL",
            Y = "CANCELLED",
            q = "FLUSH",
            z = "GET_CONTEXT",
            V = "SET_CONTEXT",
            Z = Object.freeze({
                __proto__: null,
                TAKE: I,
                PUT: M,
                ALL: H,
                RACE: x,
                CALL: G,
                CPS: U,
                FORK: W,
                JOIN: F,
                CANCEL: j,
                SELECT: B,
                ACTION_CHANNEL: K,
                CANCELLED: Y,
                FLUSH: q,
                GET_CONTEXT: z,
                SET_CONTEXT: V
            }),
            J = function(e, t) {
                var a;
                return (a = {})[n.c] = !0, a.combinator = !1, a.type = e, a.payload = t, a
            },
            Q = function(e) {
                return J(W, Object(c.a)({}, e.payload, {
                    detached: !0
                }))
            };
        function X(e, t) {
            return void 0 === e && (e = "*"), Object(r.i)(e) ? J(I, {
                pattern: e
            }) : Object(r.f)(e) && Object(r.g)(t) && Object(r.i)(t) ? J(I, {
                channel: e,
                pattern: t
            }) : Object(r.b)(e) ? J(I, {
                channel: e
            }) : void 0
        }
        var $ = function() {
            var e = X.apply(void 0, arguments);
            return e.payload.maybe = !0, e
        };
        function ee(e, t) {
            return Object(r.n)(t) && (t = e, e = void 0), J(M, {
                channel: e,
                action: t
            })
        }
        var te = function() {
            var e = ee.apply(void 0, arguments);
            return e.payload.resolve = !0, e
        };
        function ae(e) {
            var t = J(H, e);
            return t.combinator = !0, t
        }
        function ne(e) {
            var t = J(x, e);
            return t.combinator = !0, t
        }
        function ce(e, t) {
            var a,
                n = null;
            return Object(r.d)(e) ? a = e : (Object(r.a)(e) ? (n = e[0], a = e[1]) : (n = e.context, a = e.fn), n && Object(r.k)(a) && Object(r.d)(n[a]) && (a = n[a])), {
                context: n,
                fn: a,
                args: t
            }
        }
        function re(e) {
            for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
                a[n - 1] = arguments[n];
            return J(G, ce(e, a))
        }
        function ie(e, t, a) {
            void 0 === a && (a = []);
            return J(G, ce([e, t], a))
        }
        function _e(e) {
            for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
                a[n - 1] = arguments[n];
            return J(U, ce(e, a))
        }
        function oe(e) {
            for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
                a[n - 1] = arguments[n];
            return J(W, ce(e, a))
        }
        function se(e) {
            for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
                a[n - 1] = arguments[n];
            return Q(oe.apply(void 0, [e].concat(a)))
        }
        function le(e) {
            return J(F, e)
        }
        function pe(e) {
            return void 0 === e && (e = n.h), J(j, e)
        }
        function ue(e) {
            void 0 === e && (e = s);
            for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
                a[n - 1] = arguments[n];
            return J(B, {
                selector: e,
                args: a
            })
        }
        function de(e, t) {
            return J(K, {
                pattern: e,
                buffer: t
            })
        }
        function me() {
            return J(Y, {})
        }
        function fe(e) {
            return J(q, e)
        }
        function Ee(e) {
            return J(z, e)
        }
        function Ae(e) {
            return J(V, e)
        }
        var he = re.bind(null, i.a)
    },
    it2i: function(e, t, a) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function(e, t, a, n) {
                void 0 === n && (n = a),
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function() {
                        return t[a]
                    }
                })
            } : function(e, t, a, n) {
                void 0 === n && (n = a),
                e[n] = t[a]
            }),
            c = this && this.__exportStar || function(e, t) {
                for (var a in e)
                    "default" === a || t.hasOwnProperty(a) || n(t, e, a)
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        c(a("86hk"), t),
        c(a("6osK"), t),
        c(a("Kb5c"), t)
    },
    "ivk+": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.clamp = void 0,
        t.clamp = function(e, t, a) {
            return Math.min(Math.max(e, t), a)
        }
    },
    jaGz: function(e, t, a) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function(e, t, a, n) {
                void 0 === n && (n = a),
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function() {
                        return t[a]
                    }
                })
            } : function(e, t, a, n) {
                void 0 === n && (n = a),
                e[n] = t[a]
            }),
            c = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            r = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && n(t, e, a);
                return c(t, e), t
            },
            i = this && this.__read || function(e, t) {
                var a = "function" == typeof Symbol && e[Symbol.iterator];
                if (!a)
                    return e;
                var n,
                    c,
                    r = a.call(e),
                    i = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(n = r.next()).done;)
                        i.push(n.value)
                } catch (_) {
                    c = {
                        error: _
                    }
                } finally {
                    try {
                        n && !n.done && (a = r.return) && a.call(r)
                    } finally {
                        if (c)
                            throw c.error
                    }
                }
                return i
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var _ = r(a("q1tI")),
            o = a("MgMj");
        function s(e) {
            var t = e.attributes,
                a = e.children,
                n = e.defaultChild,
                c = e.experimentName,
                r = e.isServerSide,
                s = e.logIt,
                l = e.optimizely,
                p = e.primaryUnit,
                u = e.serverSideRender,
                d = e.onSetVariation,
                m = i(_.useState(""), 2),
                f = m[0],
                E = m[1],
                A = i(_.useState(!1), 2),
                h = A[0],
                g = A[1],
                T = f || o.getForceVariant(c);
            return _.useEffect((function() {
                f && s && !h && d && (d(f), g(!0))
            }), [f]), l && ("cypress" === p ? T = "default" : u && r && void 0 === T ? T = l.getVariation(c, p, o.filterAttributes(t)) : r || f || l.onReady({}).then((function() {
                void 0 !== T ? l.setForcedVariation(c, p, T) : (T = l.activate(c, p, o.filterAttributes(t))) || (T = "default"),
                E(T)
            }))), T ? a[T] ? _.default.createElement(_.default.Fragment, null, a[T]) : _.default.createElement(_.default.Fragment, null) : n ? _.default.createElement(_.default.Fragment, null, n) : _.default.createElement(_.default.Fragment, null)
        }
        s.defaultProps = {
            logIt: !0,
            serverSideRender: !1
        },
        t.default = s
    },
    "k43+": function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var c in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
                    return e
                }).apply(this, arguments)
            },
            c = this && this.__values || function(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    a = t && e[t],
                    n = 0;
                if (a)
                    return a.call(e);
                if (e && "number" == typeof e.length)
                    return {
                        next: function() {
                            return e && n >= e.length && (e = void 0), {
                                value: e && e[n++],
                                done: !e
                            }
                        }
                    };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            },
            r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = a("wE+H"),
            _ = r(a("jKim")),
            o = r(a("q1tI")),
            s = a("9kay"),
            l = {
                type: "backend",
                init: function(e) {
                    e.pluralResolver.addRule("en_US", e.pluralResolver.rules.en),
                    e.pluralResolver.addRule("en_GB", e.pluralResolver.rules.en),
                    e.pluralResolver.addRule("de_DE", e.pluralResolver.rules.de),
                    e.pluralResolver.addRule("es_ES", e.pluralResolver.rules.es),
                    e.pluralResolver.addRule("fr_FR", e.pluralResolver.rules.fr),
                    e.pluralResolver.addRule("it_IT", e.pluralResolver.rules.it),
                    e.pluralResolver.addRule("nl_NL", e.pluralResolver.rules.nl),
                    e.pluralResolver.addRule("pt_BR", e.pluralResolver.rules.pt)
                }
            },
            p = {
                clientSideBackend: function() {
                    return a("/oNK")
                },
                i18nInstance: _.default,
                i18nconfig_global: {
                    contextSeparator: ":_:",
                    debug: !1,
                    fallbackLng: !1,
                    initImmediate: !1,
                    interpolation: {
                        prefix: "{{",
                        suffix: "}}"
                    },
                    keySeparator: "::",
                    nsSeparator: ":::",
                    pluralSeparator: ":_:",
                    resources: {}
                },
                i18nconfig_fs: {
                    backend: {
                        loadPath: ""
                    },
                    contextSeparator: ":_:",
                    fallbackLng: !1,
                    initImmediate: !1,
                    interpolation: {
                        prefix: "{{",
                        suffix: "}}"
                    },
                    keySeparator: "::",
                    nsSeparator: ":::",
                    pluralSeparator: ":_:"
                },
                i18nconfig_xhr: {
                    backend: {
                        loadPath: ""
                    },
                    contextSeparator: ":_:",
                    fallbackLng: !1,
                    initImmediate: !1,
                    interpolation: {
                        prefix: "{{",
                        suffix: "}}"
                    },
                    keySeparator: "::",
                    nsSeparator: ":::",
                    pluralSeparator: ":_:"
                },
                globalInit: function(e, t, a, n) {
                    if (void 0 === e && (e = {}), void 0 === t && (t = !1), p.i18nInstance.isInitialized) {
                        p.addResourcesAndSetNameSpace(a || "translation", e) || console.warn("WARN @ssr-frontend/packages-i18n globalInit: No resources or namespaces were successfully added to i18n. Make sure the defaultNamespace you passed in, " + a + ", matches the namespace within your resourceData, and that your resourceJson is formatted correctly. See i18n/index.ts addResourcesAndSetNameSpace method documentation.")
                    } else {
                        var c = a || "translation";
                        p.i18nconfig_global.resources = e,
                        p.i18nconfig_global.ns = [c],
                        p.i18nconfig_global.defaultNS = c,
                        t ? p.i18nInstance.use(s.reactI18nextModule).use(l).init(p.i18nconfig_global, n) : p.i18nInstance.init(p.i18nconfig_global, n)
                    }
                },
                clientSideInit: function(e, t, a) {
                    void 0 === t && (t = !1),
                    p.i18nInstance.isInitialized || (p.i18nconfig_xhr.backend && (p.i18nconfig_xhr.backend.loadPath = e), t ? p.i18nInstance.use(s.reactI18nextModule).use(p.clientSideBackend()).init(p.i18nconfig_xhr, a) : p.i18nInstance.use(p.clientSideBackend()).init(p.i18nconfig_xhr, a))
                },
                setLocale: function(e, t) {
                    return void 0 === e && (e = "en_US"), p.i18nInstance.changeLanguage(e, t)
                },
                addResourcesAndSetNameSpace: function(e, t, a) {
                    var n,
                        r;
                    void 0 === a && (a = Object.values(i.SupportedLocales));
                    var _ = !1;
                    try {
                        for (var o = c(a), s = o.next(); !s.done; s = o.next()) {
                            var l = s.value,
                                u = t[l];
                            if (u) {
                                var d = u[e];
                                d && (p.i18nInstance.addResourceBundle(l, e, d, !0), _ = !0)
                            }
                        }
                    } catch (m) {
                        n = {
                            error: m
                        }
                    } finally {
                        try {
                            s && !s.done && (r = o.return) && r.call(o)
                        } finally {
                            if (n)
                                throw n.error
                        }
                    }
                    return _
                },
                t: function(e, t) {
                    return void 0 === t && (t = {}), p.i18nInstance.t(e, t)
                },
                getNamespacedT: function(e) {
                    return p.i18nInstance.getFixedT(null, e)
                },
                getNamespacedTrans: function(e) {
                    return function(t) {
                        var a = n(n({}, t), {
                            ns: e
                        });
                        return o.default.createElement(s.Trans, n({}, a))
                    }
                },
                Trans: s.Trans
            };
        t.default = p
    },
    k96i: function(e, t, a) {
        "use strict";
        a.r(t),
        t.default = a.p + "static/media/favicon-16x16.bdaed5f65e950db334fa72e606ec4abe.png"
    },
    kCI4: function(e, t, a) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function(e, t, a, n) {
                void 0 === n && (n = a),
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function() {
                        return t[a]
                    }
                })
            } : function(e, t, a, n) {
                void 0 === n && (n = a),
                e[n] = t[a]
            }),
            c = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            r = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && n(t, e, a);
                return c(t, e), t
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getInstance = void 0;
        var i,
            _ = r(a("QkKZ")),
            o = a("7MwF");
        t.getInstance = function(e) {
            return i || (e.logLevel || (e.logLevel = o.isStaging() ? _.enums.LOG_LEVEL.DEBUG : _.enums.LOG_LEVEL.ERROR), i = _.createInstance(e)), i
        }
    },
    kLb9: function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var c in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
                    return e
                }).apply(this, arguments)
            },
            c = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.HttpClient = void 0;
        var r = c(a("vDqi")).default.create({
                baseURL: "http://localhost/",
                timeout: 3e4,
                withCredentials: !0
            }),
            i = function(e, t) {
                if (!t)
                    return e;
                var a = new RegExp(Object.keys(t).join("|"), "gi");
                return e.replace(a, (function(e) {
                    return t[e]
                }))
            },
            _ = n(n({}, r), {
                get: function(e, t) {
                    var a = i(e, t ? t.urlReplacements : void 0);
                    return r.get(a, t)
                },
                post: function(e, t, a) {
                    var n = i(e, a ? a.urlReplacements : void 0);
                    return r.post(n, t, a)
                }
            });
        t.HttpClient = _
    },
    lT2R: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    "m/j/": function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var c in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
                    return e
                }).apply(this, arguments)
            },
            c = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = c(a("TSYQ")),
            i = c(a("q1tI")),
            _ = a("Q5Tl");
        t.default = function(e) {
            var t = e.className,
                a = r.default("a-gesture", t),
                c = _.useGesture((function(t) {
                    !t.down && t.direction[0] > 0 && t.distance > 25 && e.onSwipeLeftToRight ? e.onSwipeLeftToRight() : !t.down && t.direction[0] < 0 && t.distance > 25 && e.onSwipeRightToLeft && e.onSwipeRightToLeft()
                }));
            return i.default.createElement("div", n({}, c(), {
                className: a
            }), e.children)
        }
    },
    mTlD: function(e, t, a) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function(e, t, a, n) {
                void 0 === n && (n = a),
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function() {
                        return t[a]
                    }
                })
            } : function(e, t, a, n) {
                void 0 === n && (n = a),
                e[n] = t[a]
            }),
            c = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            r = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && n(t, e, a);
                return c(t, e), t
            },
            i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var _ = r(a("q1tI")),
            o = i(a("TSYQ")),
            s = a("Cv17"),
            l = i(a("k9qm")),
            p = a("+Ded"),
            u = a("K9qA"),
            d = a("yf/i"),
            m = a("5l5+"),
            f = a("8LTy"),
            E = a("WRpi"),
            A = i(a("2mcf")),
            h = i(a("c6N4")),
            g = i(a("ge8b"));
        a("uJ/r"),
        t.default = function(e) {
            var t = e.algoliaIndices,
                a = e.locale,
                n = void 0 === a ? "" : a,
                c = e.srpUrl;
            _.useEffect((function() {
                p.trackEvents.trackEvent({
                    type: "mp_page_view",
                    viewId: "dd_search"
                })
            }), []);
            var r = function(e) {
                    return "" + c + encodeURIComponent(e)
                },
                i = s.connectHitInsights(l.default)((function(e) {
                    var a = e.hit,
                        n = e.index,
                        c = e.insights;
                    return _.default.createElement(d.Link, {
                        as: "href",
                        className: o.default("m-search-drop-down-hit-link", "disp-flex", "flex-dir-column", "text-no-underline", {
                            "show-for-large": n > 2
                        }),
                        dataElementId: "result_campaign",
                        key: a.objectID,
                        to: "/f/" + a.url + "?qid=" + a.__queryID,
                        onClick: function() {
                            c("clickedObjectIDsAfterSearch", {
                                eventName: "campaign_click_on_ssr_instantsearch",
                                index: t.hitIndex,
                                queryID: a.__queryID,
                                objectIDs: [String(a.objectID)],
                                positions: [a.__position]
                            }),
                            u.canUseWindow() && (window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                                event: "site_search",
                                query: a.query
                            }))
                        }
                    }, _.default.createElement(E.AlgoliaCustomHighlight, {
                        attribute: "fundname",
                        hit: a
                    }), _.default.createElement("div", {
                        className: "color-gray-60"
                    }, _.default.createElement(f.AlgoliaCOName, {
                        hit: a
                    })))
                })),
                T = s.connectHits((function(e) {
                    var t = e.hits;
                    return _.default.createElement("div", {
                        className: "m-search-drop-down-hit-container"
                    }, t.map((function(e, t) {
                        return _.default.createElement(i, {
                            key: e.objectID,
                            hit: e,
                            index: t
                        })
                    })))
                })),
                b = function(e) {
                    var t = e.hits,
                        a = e.query;
                    return _.default.createElement(_.Fragment, null, _.default.createElement("h5", {
                        className: "m-search-drop-down-prompt-heading color-gray"
                    }, m.t("Related searches")), _.default.createElement("div", {
                        className: "m-search-drop-down-query-hit-container disp-flex flex-dir-column"
                    }, t.filter((function(e) {
                        return a !== e.query
                    })).map((function(e, t) {
                        return function(e, t) {
                            return _.default.createElement(d.Link, {
                                ariaLabel: 'Search for "' + e.query + '"',
                                className: o.default("m-search-drop-down-query-suggest-link", {
                                    "show-for-large": t > 1
                                }),
                                dataElementId: "result_query",
                                key: e.objectID,
                                to: r(e.query),
                                unstyled: !0
                            }, _.default.createElement(E.AlgoliaCustomHighlight, {
                                attribute: "query",
                                hit: e
                            }))
                        }(e, t)
                    }))))
                },
                O = s.connectStateResults((function(e) {
                    var a = e.allSearchResults,
                        c = (e.searchState, t.hitIndex),
                        i = t.queryIndex;
                    function o(e) {
                        var t;
                        return !!a && !!(null === (t = a[e]) || void 0 === t ? void 0 : t.nbHits)
                    }
                    return o(c) || o(i) ? _.default.createElement(_.Fragment, null, _.default.createElement(d.Rule, {
                        className: "hide-for-large mt0",
                        gutterPull: !0,
                        type: "horizontal"
                    }), _.default.createElement("div", {
                        className: "m-search-drop-down-prompt",
                        "data-view-id": "dd_search"
                    }, a[c] && _.default.createElement("div", {
                        className: "m-search-drop-down-see-all-link-container"
                    }, _.default.createElement(g.default, {
                        locale: n,
                        totalHits: a[c].nbHits,
                        url: r(a[c].query)
                    }), _.default.createElement(d.Rule, {
                        className: "m-search-drop-down-see-all-link-rule",
                        type: "horizontal"
                    })), _.default.createElement(A.default, {
                        indexName: c
                    }, o(c) && _.default.createElement(T, null)), _.default.createElement(h.default, {
                        indexName: i
                    }, o(i) && _.default.createElement(b, {
                        query: a[c].query,
                        hits: a[i].hits
                    })))) : _.default.createElement(_.Fragment, null, _.default.createElement(A.default, {
                        indexName: c
                    }), _.default.createElement(h.default, {
                        indexName: i
                    }))
                }));
            return _.default.createElement(O, null)
        }
    },
    mWGl: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.OpenGraph = void 0;
        var n = a("wE+H"),
            c = function() {
                function e(e, t) {
                    this.config = e,
                    this.locales = t,
                    this.contents = {}
                }
                return e.prototype.tags = function() {
                    var e = this,
                        t = [];
                    return this.contents.description && t.push({
                        content: this.contents.description,
                        property: "og:description"
                    }), this.contents.image && (t.push({
                        content: this.contents.image,
                        property: "og:image"
                    }), t.push({
                        content: this.contents.image,
                        property: "og:image:secure_url"
                    })), this.contents.locale && this.locales.forEach((function(a) {
                        a === e.contents.locale ? t.push({
                            content: a,
                            property: "og:locale"
                        }) : t.push({
                            content: a,
                            property: "og:locale:alternate"
                        })
                    })), t.push({
                        content: this.config.domain,
                        property: "og:site_name"
                    }), this.contents.title && t.push({
                        content: this.contents.title,
                        property: "og:title"
                    }), t.push({
                        content: this.type,
                        property: "og:type"
                    }), this.contents.url && t.push({
                        content: this.contents.url,
                        property: "og:url"
                    }), t
                }, Object.defineProperty(e.prototype, "type", {
                    get: function() {
                        return this.config.testing ? "gofundmetest:campaign" : "gofundme:campaign"
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "description", {
                    get: function() {
                        return this.contents.description
                    },
                    set: function(e) {
                        this.contents.description = e
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "image", {
                    get: function() {
                        return this.contents.image
                    },
                    set: function(e) {
                        this.contents.image = e
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "locale", {
                    get: function() {
                        return this.contents.locale
                    },
                    set: function(e) {
                        this.contents.locale = e
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "title", {
                    get: function() {
                        return this.contents.title
                    },
                    set: function(e) {
                        this.contents.title = e
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "url", {
                    get: function() {
                        return this.contents.url
                    },
                    set: function(e) {
                        this.contents.url = e
                    },
                    enumerable: !1,
                    configurable: !0
                }), e
            }();
        t.OpenGraph = c,
        t.default = new c({
            domain: "gofundme.com",
            testing: !1
        }, Object.values(n.SupportedLocales))
    },
    mvnV: function(e, t, a) {
        "use strict";
        var n,
            c,
            r,
            i,
            _,
            o,
            s,
            l,
            p,
            u,
            d,
            m,
            f,
            E,
            A,
            h,
            g,
            T,
            b,
            O,
            S,
            R;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.removeUtmParams = t.isUtmParam = t.encodeUtm = t.makeEncodedUtm = t.getUtm = t.makeUtm = t.UtmFromKeys = t.UtmKeys = void 0;
        var y,
            v,
            k = a("K9qA");
        !function(e) {
            e.FACEBOOK_SHARE_SHARESHEET = "FACEBOOK_SHARE_SHARESHEET",
            e.FACEBOOK_SHARE_SHARESHEET_COPY_LINK = "FACEBOOK_SHARE_SHARESHEET_COPY_LINK",
            e.INSTAGRAM_SHARESHEET = "INSTAGRAM_SHARESHEET",
            e.TWITTER_SHARE_SHARESHEET = "TWITTER_SHARE_SHARESHEET",
            e.COPY_LINK_SHARESHEET = "COPY_LINK_SHARESHEET",
            e.COPY_LINK_TIP_SHARESHEET = "COPY_LINK_TIP_SHARESHEET",
            e.COPY_LINK_MORE = "COPY_LINK_MORE",
            e.COPY_LINK_ALL = "COPY_LINK_ALL",
            e.EMAIL_SHARESHEET = "EMAIL_SHARESHEET",
            e.EMAIL_ANDROID_SHARESHEET = "EMAIL_ANDROID_SHARESHEET",
            e.WHATSAPP_SHARESHEET = "WHATSAPP_SHARESHEET",
            e.LINKEDIN_SHARESHEET = "LINKEDIN_SHARESHEET",
            e.WHATSAPP_READMORE_SHARESHEET = "WHATSAPP_READMORE_SHARESHEET",
            e.WHATSAPP_DONATE_SHARESHEET = "WHATSAPP_DONATE_SHARESHEET",
            e.FACEBOOK_MESSENGER_SHARESHEET = "FACEBOOK_MESSENGER_SHARESHEET",
            e.SMS_SHARESHEET = "SMS_SHARESHEET",
            e.SMS_ANDROID_SHARESHEET = "SMS_ANDROID_SHARESHEET",
            e.MORE_SHARESHEET = "MORE_SHARESHEET",
            e.EMBED_WIDGET_DONATE = "EMBED_WIDGET_DONATE",
            e.PRINT_POSTER = "PRINT_POSTER",
            e.ADDRESS_BAR = "ADDRESS_BAR"
        }(y = t.UtmKeys || (t.UtmKeys = {})),
        function(e) {
            e.CAMPAIGN_PAGE = "CAMPAIGN_PAGE",
            e.COMMUNITY_POSTDONATE_MODAL = "COMMUNITY_POSTDONATE_MODAL",
            e.COMMUNITY_SHARE_MODAL = "COMMUNITY_SHARE_MODAL",
            e.POSTDONATE_MODAL = "POSTDONATE_MODAL",
            e.POSTCREATE_CAMPAIGN = "POSTCREATE_CAMPAIGN",
            e.POSTCREATE_SHAREFLOW7A = "POSTCREATE_SHAREFLOW7A",
            e.POSTCREATE_SHAREFLOW7B = "POSTCREATE_SHAREFLOW7B",
            e.POSTCREATE_CALENDAR1 = "POSTCREATE_CALENDAR1",
            e.POSTCREATE_CALENDAR2 = "POSTCREATE_CALENDAR2",
            e.POSTCREATE_CALENDAR3 = "POSTCREATE_CALENDAR3",
            e.GUIDANCE_DRAWER = "GUIDANCE_DRAWER"
        }(v = t.UtmFromKeys || (t.UtmFromKeys = {}));
        var P = ((n = {})[y.EMAIL_SHARESHEET] = ((c = {})[v.CAMPAIGN_PAGE] = C("email", "customer", "p_cp+share-sheet"), c[v.COMMUNITY_POSTDONATE_MODAL] = C("email", "customer", "p_cmty_pd+share-sheet"), c[v.COMMUNITY_SHARE_MODAL] = C("email", "customer", "p_cmty+share-sheet"), c[v.POSTDONATE_MODAL] = C("email", "customer", "m_pd+share-sheet"), c[v.POSTCREATE_CAMPAIGN] = C("email", "customer", "p_cf+share-flow-1"), c[v.POSTCREATE_SHAREFLOW7A] = C("email", "customer", "p_cf+share-flow-7a"), c[v.POSTCREATE_SHAREFLOW7B] = C("email", "customer", "p_cf+share-flow-7b"), c[v.POSTCREATE_CALENDAR1] = C("email", "customer", "p_cf_cal1"), c[v.POSTCREATE_CALENDAR2] = C("email", "customer", "p_cf_cal2"), c[v.POSTCREATE_CALENDAR3] = C("email", "customer", "p_cf_cal3"), c[v.GUIDANCE_DRAWER] = C("email", "customer", "p_cp_guide_do"), c), n[y.EMAIL_ANDROID_SHARESHEET] = ((r = {})[v.CAMPAIGN_PAGE] = C("email", "customer-andr", "p_cp+share-sheet"), r[v.COMMUNITY_POSTDONATE_MODAL] = C("email", "customer-andr", "p_cmty_pd+share-sheet"), r[v.COMMUNITY_SHARE_MODAL] = C("email", "customer-andr", "p_cmty+share-sheet"), r[v.POSTDONATE_MODAL] = C("email", "customer-andr", "m_pd+share-sheet"), r[v.POSTCREATE_CAMPAIGN] = C("email", "customer-andr", "p_cf+share-flow-1"), r[v.POSTCREATE_SHAREFLOW7A] = C("email", "customer-andr", "p_cf+share-flow-7a"), r[v.POSTCREATE_SHAREFLOW7B] = C("email", "customer-andr", "p_cf+share-flow-7b"), r[v.POSTCREATE_CALENDAR1] = C("email", "customer-andr", "p_cf_cal1"), r[v.POSTCREATE_CALENDAR2] = C("email", "customer-andr", "p_cf_cal2"), r[v.POSTCREATE_CALENDAR3] = C("email", "customer-andr", "p_cf_cal3"), r[v.GUIDANCE_DRAWER] = C("email", "customer-andr", "p_cp_guide_do"), r), n[y.FACEBOOK_SHARE_SHARESHEET] = ((i = {})[v.CAMPAIGN_PAGE] = C("social", "facebook", "p_cp+share-sheet"), i[v.COMMUNITY_POSTDONATE_MODAL] = C("social", "facebook", "p_cmty_pd+share-sheet"), i[v.COMMUNITY_SHARE_MODAL] = C("social", "facebook", "p_cmty+share-sheet"), i[v.POSTDONATE_MODAL] = C("social", "facebook", "m_pd+share-sheet"), i[v.POSTCREATE_CAMPAIGN] = C("social", "facebook", "p_cf+share-flow-1"), i[v.POSTCREATE_SHAREFLOW7A] = C("social", "facebook", "p_cf+share-flow-7a"), i[v.POSTCREATE_SHAREFLOW7B] = C("social", "facebook", "p_cf+share-flow-7b"), i[v.POSTCREATE_CALENDAR1] = C("social", "facebook", "p_cf_cal1"), i[v.POSTCREATE_CALENDAR2] = C("social", "facebook", "p_cf_cal2"), i[v.POSTCREATE_CALENDAR3] = C("social", "facebook", "p_cf_cal3"), i[v.GUIDANCE_DRAWER] = C("social", "facebook", "p_cp_guide_do"), i), n[y.FACEBOOK_SHARE_SHARESHEET_COPY_LINK] = ((_ = {})[v.CAMPAIGN_PAGE] = C("social", "fb_copy_link", "p_cp+share-sheet"), _[v.COMMUNITY_POSTDONATE_MODAL] = C("social", "fb_copy_link", "p_cmty_pd+share-sheet"), _[v.COMMUNITY_SHARE_MODAL] = C("social", "fb_copy_link", "p_cmty+share-sheet"), _[v.POSTDONATE_MODAL] = C("social", "fb_copy_link", "m_pd+share-sheet"), _[v.POSTCREATE_CAMPAIGN] = C("social", "fb_copy_link", "p_cf+share-flow-1"), _[v.POSTCREATE_SHAREFLOW7A] = C("social", "fb_copy_link", "p_cf+share-flow-7a"), _[v.POSTCREATE_SHAREFLOW7B] = C("social", "fb_copy_link", "p_cf+share-flow-7b"), _[v.POSTCREATE_CALENDAR1] = C("social", "fb_copy_link", "p_cf_cal1"), _[v.POSTCREATE_CALENDAR2] = C("social", "fb_copy_link", "p_cf_cal2"), _[v.POSTCREATE_CALENDAR3] = C("social", "fb_copy_link", "p_cf_cal3"), _[v.GUIDANCE_DRAWER] = C("social", "fb_copy_link", "p_cp_guide_do"), _), n[y.INSTAGRAM_SHARESHEET] = ((o = {})[v.CAMPAIGN_PAGE] = C("social", "instagram", "p_cp+share-sheet"), o[v.POSTDONATE_MODAL] = C("social", "instagram", "m_pd+share-sheet"), o[v.POSTCREATE_CAMPAIGN] = C("social", "instagram", "p_cf+share-flow-1"), o[v.POSTCREATE_SHAREFLOW7A] = C("social", "instagram", "p_cf+share-flow-7a"), o[v.POSTCREATE_SHAREFLOW7B] = C("social", "instagram", "p_cf+share-flow-7b"), o[v.POSTCREATE_CALENDAR1] = C("social", "instagram", "p_cf_cal1"), o[v.POSTCREATE_CALENDAR2] = C("social", "instagram", "p_cf_cal2"), o[v.POSTCREATE_CALENDAR3] = C("social", "instagram", "p_cf_cal3"), o[v.GUIDANCE_DRAWER] = C("social", "instagram", "p_cp_guide_do"), o), n[y.TWITTER_SHARE_SHARESHEET] = ((s = {})[v.CAMPAIGN_PAGE] = C("social", "twitter", "p_cp+share-sheet"), s[v.COMMUNITY_POSTDONATE_MODAL] = C("social", "twitter", "p_cmty_pd+share-sheet"), s[v.COMMUNITY_SHARE_MODAL] = C("social", "twitter", "p_cmty+share-sheet"), s[v.POSTDONATE_MODAL] = C("social", "twitter", "m_pd+share-sheet"), s[v.POSTCREATE_CAMPAIGN] = C("social", "twitter", "p_cf+share-flow-1"), s[v.POSTCREATE_SHAREFLOW7A] = C("social", "twitter", "p_cf+share-flow-7a"), s[v.POSTCREATE_SHAREFLOW7B] = C("social", "twitter", "p_cf+share-flow-7b"), s[v.POSTCREATE_CALENDAR1] = C("social", "twitter", "p_cf_cal1"), s[v.POSTCREATE_CALENDAR2] = C("social", "twitter", "p_cf_cal2"), s[v.POSTCREATE_CALENDAR3] = C("social", "twitter", "p_cf_cal3"), s[v.GUIDANCE_DRAWER] = C("social", "twitter", "p_cp_guide_do"), s), n[y.COPY_LINK_SHARESHEET] = ((l = {})[v.CAMPAIGN_PAGE] = C("copy_link", "customer", "p_cp+share-sheet"), l[v.POSTDONATE_MODAL] = C("copy_link", "customer", "m_pd+share-sheet"), l[v.POSTCREATE_CAMPAIGN] = C("copy_link", "customer", "p_cf+share-flow-1"), l[v.POSTCREATE_SHAREFLOW7A] = C("copy_link", "customer", "p_cf+share-flow-7a"), l[v.POSTCREATE_SHAREFLOW7B] = C("copy_link", "customer", "p_cf+share-flow-7b"), l[v.POSTCREATE_CALENDAR1] = C("copy_link", "customer", "p_cf_cal1"), l[v.POSTCREATE_CALENDAR2] = C("copy_link", "customer", "p_cf_cal2"), l[v.POSTCREATE_CALENDAR3] = C("copy_link", "customer", "p_cf_cal3"), l[v.GUIDANCE_DRAWER] = C("copy_link", "customer", "p_cp_guide_do"), l), n[y.COPY_LINK_TIP_SHARESHEET] = ((p = {})[v.CAMPAIGN_PAGE] = C("copy_link-tip", "customer", "p_cp+share-sheet"), p[v.COMMUNITY_POSTDONATE_MODAL] = C("copy_link-tip", "customer", "p_cmty_pd+share-sheet"), p[v.COMMUNITY_SHARE_MODAL] = C("copy_link-tip", "customer", "p_cmty+share-sheet"), p[v.POSTDONATE_MODAL] = C("copy_link-tip", "customer", "m_pd+share-sheet"), p[v.POSTCREATE_CAMPAIGN] = C("copy_link", "customer", "p_cf+share-flow-1"), p[v.POSTCREATE_SHAREFLOW7A] = C("copy_link", "customer", "p_cf+share-flow-7a"), p[v.POSTCREATE_SHAREFLOW7B] = C("copy_link", "customer", "p_cf+share-flow-7b"), p[v.POSTCREATE_CALENDAR1] = C("copy_link-tip", "customer", "p_cf_cal1"), p[v.POSTCREATE_CALENDAR2] = C("copy_link-tip", "customer", "p_cf_cal2"), p[v.POSTCREATE_CALENDAR3] = C("copy_link-tip", "customer", "p_cf_cal3"), p[v.GUIDANCE_DRAWER] = C("copy_link-tip", "customer", "p_cp_guide_do"), p), n[y.COPY_LINK_ALL] = ((u = {})[v.CAMPAIGN_PAGE] = C("copy_link_all", "customer", "p_cp+share-sheet"), u[v.COMMUNITY_POSTDONATE_MODAL] = C("copy_link_all", "customer", "p_cmty_pd+share-sheet"), u[v.COMMUNITY_SHARE_MODAL] = C("copy_link_all", "customer", "p_cmty+share-sheet"), u[v.POSTDONATE_MODAL] = C("copy_link_all", "customer", "m_pd+share-sheet"), u), n[y.COPY_LINK_MORE] = ((d = {})[v.CAMPAIGN_PAGE] = C("copy_link_more", "customer", "p_cp+share-sheet"), d[v.POSTDONATE_MODAL] = C("copy_link_more", "customer", "m_pd+share-sheet"), d), n[y.LINKEDIN_SHARESHEET] = ((m = {})[v.CAMPAIGN_PAGE] = C("social", "linkedIn", "p_cp+share-sheet"), m[v.POSTDONATE_MODAL] = C("social", "linkedIn", "m_pd+share-sheet"), m[v.POSTCREATE_CAMPAIGN] = C("social", "linkedIn", "p_cf+share-flow-1"), m[v.POSTCREATE_SHAREFLOW7A] = C("social", "linkedIn", "p_cf+share-flow-7a"), m[v.POSTCREATE_SHAREFLOW7B] = C("social", "linkedIn", "p_cf+share-flow-7b"), m[v.POSTCREATE_CALENDAR1] = C("social", "linkedIn", "p_cf_cal1"), m[v.POSTCREATE_CALENDAR2] = C("social", "linkedIn", "p_cf_cal2"), m[v.POSTCREATE_CALENDAR3] = C("social", "linkedIn", "p_cf_cal3"), m[v.GUIDANCE_DRAWER] = C("social", "linkedIn", "p_cp_guide_do"), m), n[y.WHATSAPP_SHARESHEET] = ((f = {})[v.CAMPAIGN_PAGE] = C("chat", "whatsApp", "p_cp+share-sheet"), f[v.COMMUNITY_POSTDONATE_MODAL] = C("social", "whatsApp", "p_cmty_pd+share-sheet"), f[v.COMMUNITY_SHARE_MODAL] = C("social", "whatsApp", "p_cmty+share-sheet"), f[v.POSTDONATE_MODAL] = C("social", "whatsApp", "m_pd+share-sheet"), f[v.POSTCREATE_CAMPAIGN] = C("chat", "whatsapp", "p_cf+share-flow-1"), f[v.POSTCREATE_SHAREFLOW7A] = C("chat", "whatsapp", "p_cf+share-flow-7a"), f[v.POSTCREATE_SHAREFLOW7B] = C("chat", "whatsapp", "p_cf+share-flow-7b"), f[v.POSTCREATE_CALENDAR1] = C("chat", "whatsapp", "p_cf_cal1"), f[v.POSTCREATE_CALENDAR2] = C("chat", "whatsapp", "p_cf_cal2"), f[v.POSTCREATE_CALENDAR3] = C("chat", "whatsapp", "p_cf_cal3"), f[v.GUIDANCE_DRAWER] = C("chat", "whatsapp", "p_cp_guide_do"), f), n[y.WHATSAPP_READMORE_SHARESHEET] = ((E = {})[v.CAMPAIGN_PAGE] = C("chat", "whatsapp-visit", "p_cp+share-sheet"), E[v.POSTDONATE_MODAL] = C("social", "whatsapp-visit", "m_pd+share-sheet"), E[v.POSTCREATE_CAMPAIGN] = C("social", "whatsapp-visit", "p_cf+share-flow-1"), E[v.POSTCREATE_SHAREFLOW7A] = C("social", "whatsapp-visit", "p_cf+share-flow-7a"), E[v.POSTCREATE_SHAREFLOW7B] = C("social", "whatsapp-visit", "p_cf+share-flow-7b"), E[v.POSTCREATE_CALENDAR1] = C("social", "whatsapp-visit", "p_cf_cal1"), E[v.POSTCREATE_CALENDAR2] = C("social", "whatsapp-visit", "p_cf_cal2"), E[v.POSTCREATE_CALENDAR3] = C("social", "whatsapp-visit", "p_cf_cal3"), E[v.GUIDANCE_DRAWER] = C("social", "whatsapp-visit", "p_cp_guide_do"), E), n[y.WHATSAPP_DONATE_SHARESHEET] = ((A = {})[v.CAMPAIGN_PAGE] = C("chat", "whatsapp-donate", "p_cp+share-sheet"), A[v.POSTDONATE_MODAL] = C("social", "whatsapp-donate", "m_pd+share-sheet"), A[v.POSTCREATE_CAMPAIGN] = C("social", "whatsapp-donate", "p_cf+share-flow-1"), A[v.POSTCREATE_SHAREFLOW7A] = C("social", "whatsapp-donate", "p_cf+share-flow-7a"), A[v.POSTCREATE_SHAREFLOW7B] = C("social", "whatsapp-donate", "p_cf+share-flow-7b"), A[v.POSTCREATE_CALENDAR1] = C("social", "whatsapp-donate", "p_cf_cal1"), A[v.POSTCREATE_CALENDAR2] = C("social", "whatsapp-donate", "p_cf_cal2"), A[v.POSTCREATE_CALENDAR3] = C("social", "whatsapp-donate", "p_cf_cal3"), A[v.GUIDANCE_DRAWER] = C("social", "whatsapp-donate", "p_cp_guide_do"), A), n[y.FACEBOOK_MESSENGER_SHARESHEET] = ((h = {})[v.CAMPAIGN_PAGE] = C("chat", "messenger", "p_cp+share-sheet"), h[v.POSTDONATE_MODAL] = C("chat", "messenger", "m_pd+share-sheet"), h[v.POSTCREATE_CAMPAIGN] = C("social", "messenger", "p_cf+share-flow-1"), h[v.POSTCREATE_SHAREFLOW7A] = C("social", "messenger", "p_cf+share-flow-7a"), h[v.POSTCREATE_SHAREFLOW7B] = C("social", "messenger", "p_cf+share-flow-7b"), h[v.POSTCREATE_CALENDAR1] = C("social", "messenger", "p_cf_cal1"), h[v.POSTCREATE_CALENDAR2] = C("social", "messenger", "p_cf_cal2"), h[v.POSTCREATE_CALENDAR3] = C("social", "messenger", "p_cf_cal3"), h[v.GUIDANCE_DRAWER] = C("social", "messenger", "p_cp_guide_do"), h), n[y.SMS_SHARESHEET] = ((g = {})[v.CAMPAIGN_PAGE] = C("sms", "customer", "p_cp+share-sheet"), g[v.COMMUNITY_POSTDONATE_MODAL] = C("sms", "customer", "p_cmty_pd+share-sheet"), g[v.COMMUNITY_SHARE_MODAL] = C("sms", "customer", "p_cmty+share-sheet"), g[v.POSTDONATE_MODAL] = C("sms", "customer", "m_pd+share-sheet"), g[v.POSTCREATE_CAMPAIGN] = C("sms", "customer", "p_cf+share-flow-1"), g[v.POSTCREATE_SHAREFLOW7A] = C("sms", "customer", "p_cf+share-flow-7a"), g[v.POSTCREATE_SHAREFLOW7B] = C("sms", "customer", "p_cf+share-flow-7b"), g[v.POSTCREATE_CALENDAR1] = C("sms", "customer", "p_cf_cal1"), g[v.POSTCREATE_CALENDAR2] = C("sms", "customer", "p_cf_cal2"), g[v.POSTCREATE_CALENDAR3] = C("sms", "customer", "p_cf_cal3"), g[v.GUIDANCE_DRAWER] = C("sms", "customer", "p_cp_guide_do"), g), n[y.MORE_SHARESHEET] = ((T = {})[v.CAMPAIGN_PAGE] = C("more", "customer", "p_cp+share-sheet"), T[v.POSTDONATE_MODAL] = C("more", "customer", "m_pd+share-sheet"), T[v.POSTCREATE_CAMPAIGN] = C("more", "customer", "p_cf+share-flow-1"), T[v.POSTCREATE_SHAREFLOW7A] = C("more", "customer", "p_cf+share-flow-7a"), T[v.POSTCREATE_SHAREFLOW7B] = C("more", "customer", "p_cf+share-flow-7b"), T[v.POSTCREATE_CALENDAR1] = C("more", "customer", "p_cf_cal1"), T[v.POSTCREATE_CALENDAR2] = C("more", "customer", "p_cf_cal2"), T[v.POSTCREATE_CALENDAR3] = C("more", "customer", "p_cf_cal3"), T[v.GUIDANCE_DRAWER] = C("more", "customer", "p_cp_guide_do"), T), n[y.SMS_ANDROID_SHARESHEET] = ((b = {})[v.CAMPAIGN_PAGE] = C("sms", "customer-andr", "p_cp+share-sheet"), b[v.COMMUNITY_POSTDONATE_MODAL] = C("sms", "customer-andr", "p_cmty_pd+share-sheet"), b[v.COMMUNITY_SHARE_MODAL] = C("sms", "customer-andr", "p_cmty+share-sheet"), b[v.POSTDONATE_MODAL] = C("sms", "customer-andr", "m_pd+share-sheet"), b[v.POSTCREATE_CAMPAIGN] = C("sms", "customer-andr", "p_cf+share-flow-1"), b[v.POSTCREATE_SHAREFLOW7A] = C("sms", "customer-andr", "p_cf+share-flow-7a"), b[v.POSTCREATE_SHAREFLOW7B] = C("sms", "customer-andr", "p_cf+share-flow-7b"), b[v.POSTCREATE_CALENDAR1] = C("sms", "customer-andr", "p_cf_cal1"), b[v.POSTCREATE_CALENDAR2] = C("sms", "customer-andr", "p_cf_cal2"), b[v.POSTCREATE_CALENDAR3] = C("sms", "customer-andr", "p_cf_cal3"), b[v.GUIDANCE_DRAWER] = C("sms", "customer-andr", "p_cp_guide_do"), b), n[y.EMBED_WIDGET_DONATE] = ((O = {})[v.CAMPAIGN_PAGE] = C("referral", "widget", "p_cp+share-sheet"), O[v.POSTDONATE_MODAL] = C("referral", "widget", "m_pd+share-sheet"), O[v.POSTCREATE_CAMPAIGN] = C("referral", "widget", "p_cf+share-flow-1"), O[v.POSTCREATE_SHAREFLOW7A] = C("referral", "widget", "p_cf+share-flow-7a"), O[v.POSTCREATE_SHAREFLOW7B] = C("referral", "widget", "p_cf+share-flow-7b"), O[v.POSTCREATE_CALENDAR1] = C("referral", "widget", "p_cf_cal1"), O[v.POSTCREATE_CALENDAR2] = C("referral", "widget", "p_cf_cal2"), O[v.POSTCREATE_CALENDAR3] = C("referral", "widget", "p_cf_cal3"), O[v.GUIDANCE_DRAWER] = C("referral", "widget", "p_cp_guide_do"), O), n[y.PRINT_POSTER] = ((S = {})[v.CAMPAIGN_PAGE] = C("referral", "poster", "p_cp+share-sheet"), S[v.POSTDONATE_MODAL] = C("referral", "poster", "m_pd+share-sheet"), S[v.POSTCREATE_CAMPAIGN] = C("referral", "poster", "p_cf+share-flow-1"), S[v.POSTCREATE_SHAREFLOW7A] = C("referral", "poster", "p_cf+share-flow-7a"), S[v.POSTCREATE_SHAREFLOW7B] = C("referral", "poster", "p_cf+share-flow-7b"), S[v.POSTCREATE_CALENDAR1] = C("referral", "poster", "p_cf_cal1"), S[v.POSTCREATE_CALENDAR2] = C("referral", "poster", "p_cf_cal2"), S[v.POSTCREATE_CALENDAR3] = C("referral", "poster", "p_cf_cal3"), S[v.GUIDANCE_DRAWER] = C("referral", "poster", "p_cp_guide_do"), S), n[y.ADDRESS_BAR] = ((R = {})[v.CAMPAIGN_PAGE] = C("os", "customer", "p_cp_url"), R), n);
        function C(e, t, a) {
            return {
                medium: e,
                source: t,
                campaign: a
            }
        }
        function w(e) {
            return "utm_source=" + e.source + "&utm_medium=" + e.medium + "&utm_campaign=" + e.campaign
        }
        function N(e) {
            return "utm_" === e.slice(0, 4)
        }
        t.makeUtm = C,
        t.getUtm = function(e, t) {
            return P[e][t] ? P[e][t] : (console.warn("WARN @ssr-frontend/packages-util-utm missing UTM. " + e + " from UtmKeys and " + t + " from UtmFromKeys do not have a UTM. See the utms object in packages/util-utm/index.ts"), {})
        },
        t.makeEncodedUtm = function(e, t) {
            return w(P[e][t])
        },
        t.encodeUtm = w,
        t.isUtmParam = N,
        t.removeUtmParams = function() {
            if (k.canUseHistory() && k.canUseLocation() && history && history.replaceState && location.search) {
                var e = location.search.slice(1).split("&"),
                    t = e.filter((function(e) {
                        return !N(e)
                    }));
                if (t.length < e.length) {
                    var a = t.length ? "?" + t.join("&") : "",
                        n = location.pathname + a + location.hash;
                    history.replaceState({}, "", n)
                }
            }
        }
    },
    o6hd: function(e, t, a) {
        "use strict";
        var n,
            c,
            r,
            i,
            _,
            o,
            s,
            l,
            p,
            u,
            d,
            m,
            f,
            E,
            A,
            h,
            g,
            T,
            b,
            O,
            S,
            R,
            y;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.removeUtmParams = t.isUtmParam = t.encodeUtm = t.makeEncodedUtm = t.getUtm = t.makeUtm = t.UtmFromKeys = t.UtmKeys = void 0;
        var v,
            k,
            P = a("9L4T");
        !function(e) {
            e.FACEBOOK_SHARE_SHARESHEET = "FACEBOOK_SHARE_SHARESHEET",
            e.FACEBOOK_SHARE_SHARESHEET_COPY_LINK = "FACEBOOK_SHARE_SHARESHEET_COPY_LINK",
            e.INSTAGRAM_SHARESHEET = "INSTAGRAM_SHARESHEET",
            e.TWITTER_SHARE_SHARESHEET = "TWITTER_SHARE_SHARESHEET",
            e.COPY_LINK_SHARESHEET = "COPY_LINK_SHARESHEET",
            e.COPY_LINK_TIP_SHARESHEET = "COPY_LINK_TIP_SHARESHEET",
            e.COPY_LINK_MORE = "COPY_LINK_MORE",
            e.COPY_LINK_ALL = "COPY_LINK_ALL",
            e.EMAIL_SHARESHEET = "EMAIL_SHARESHEET",
            e.EMAIL_ANDROID_SHARESHEET = "EMAIL_ANDROID_SHARESHEET",
            e.WHATSAPP_SHARESHEET = "WHATSAPP_SHARESHEET",
            e.LINKEDIN_SHARESHEET = "LINKEDIN_SHARESHEET",
            e.WHATSAPP_READMORE_SHARESHEET = "WHATSAPP_READMORE_SHARESHEET",
            e.WHATSAPP_DONATE_SHARESHEET = "WHATSAPP_DONATE_SHARESHEET",
            e.FACEBOOK_MESSENGER_SHARESHEET = "FACEBOOK_MESSENGER_SHARESHEET",
            e.SMS_SHARESHEET = "SMS_SHARESHEET",
            e.SMS_ANDROID_SHARESHEET = "SMS_ANDROID_SHARESHEET",
            e.MORE_SHARESHEET = "MORE_SHARESHEET",
            e.EMBED_WIDGET_DONATE = "EMBED_WIDGET_DONATE",
            e.PRINT_POSTER = "PRINT_POSTER",
            e.ADDRESS_BAR = "ADDRESS_BAR",
            e.CAMPAIGN_LINK_TAG = "CAMPAIGN_LINK_TAG"
        }(v = t.UtmKeys || (t.UtmKeys = {})),
        function(e) {
            e.CAMPAIGN_PAGE = "CAMPAIGN_PAGE",
            e.COMMUNITY_POSTDONATE_MODAL = "COMMUNITY_POSTDONATE_MODAL",
            e.COMMUNITY_SHARE_MODAL = "COMMUNITY_SHARE_MODAL",
            e.POSTDONATE_MODAL = "POSTDONATE_MODAL",
            e.POSTCREATE_CAMPAIGN = "POSTCREATE_CAMPAIGN",
            e.POSTCREATE_SHAREFLOW7A = "POSTCREATE_SHAREFLOW7A",
            e.POSTCREATE_SHAREFLOW7B = "POSTCREATE_SHAREFLOW7B",
            e.POSTCREATE_CALENDAR1 = "POSTCREATE_CALENDAR1",
            e.POSTCREATE_CALENDAR2 = "POSTCREATE_CALENDAR2",
            e.POSTCREATE_CALENDAR3 = "POSTCREATE_CALENDAR3",
            e.GUIDANCE_DRAWER = "GUIDANCE_DRAWER"
        }(k = t.UtmFromKeys || (t.UtmFromKeys = {}));
        var C = ((n = {})[v.EMAIL_SHARESHEET] = ((c = {})[k.CAMPAIGN_PAGE] = w("email", "customer", "p_cp+share-sheet"), c[k.COMMUNITY_POSTDONATE_MODAL] = w("email", "customer", "p_cmty_pd+share-sheet"), c[k.COMMUNITY_SHARE_MODAL] = w("email", "customer", "p_cmty+share-sheet"), c[k.POSTDONATE_MODAL] = w("email", "customer", "m_pd+share-sheet"), c[k.POSTCREATE_CAMPAIGN] = w("email", "customer", "p_cf+share-flow-1"), c[k.POSTCREATE_SHAREFLOW7A] = w("email", "customer", "p_cf+share-flow-7a"), c[k.POSTCREATE_SHAREFLOW7B] = w("email", "customer", "p_cf+share-flow-7b"), c[k.POSTCREATE_CALENDAR1] = w("email", "customer", "p_cf_cal1"), c[k.POSTCREATE_CALENDAR2] = w("email", "customer", "p_cf_cal2"), c[k.POSTCREATE_CALENDAR3] = w("email", "customer", "p_cf_cal3"), c[k.GUIDANCE_DRAWER] = w("email", "customer", "p_cp_guide_do"), c), n[v.EMAIL_ANDROID_SHARESHEET] = ((r = {})[k.CAMPAIGN_PAGE] = w("email", "customer-andr", "p_cp+share-sheet"), r[k.COMMUNITY_POSTDONATE_MODAL] = w("email", "customer-andr", "p_cmty_pd+share-sheet"), r[k.COMMUNITY_SHARE_MODAL] = w("email", "customer-andr", "p_cmty+share-sheet"), r[k.POSTDONATE_MODAL] = w("email", "customer-andr", "m_pd+share-sheet"), r[k.POSTCREATE_CAMPAIGN] = w("email", "customer-andr", "p_cf+share-flow-1"), r[k.POSTCREATE_SHAREFLOW7A] = w("email", "customer-andr", "p_cf+share-flow-7a"), r[k.POSTCREATE_SHAREFLOW7B] = w("email", "customer-andr", "p_cf+share-flow-7b"), r[k.POSTCREATE_CALENDAR1] = w("email", "customer-andr", "p_cf_cal1"), r[k.POSTCREATE_CALENDAR2] = w("email", "customer-andr", "p_cf_cal2"), r[k.POSTCREATE_CALENDAR3] = w("email", "customer-andr", "p_cf_cal3"), r[k.GUIDANCE_DRAWER] = w("email", "customer-andr", "p_cp_guide_do"), r), n[v.FACEBOOK_SHARE_SHARESHEET] = ((i = {})[k.CAMPAIGN_PAGE] = w("social", "facebook", "p_cp+share-sheet"), i[k.COMMUNITY_POSTDONATE_MODAL] = w("social", "facebook", "p_cmty_pd+share-sheet"), i[k.COMMUNITY_SHARE_MODAL] = w("social", "facebook", "p_cmty+share-sheet"), i[k.POSTDONATE_MODAL] = w("social", "facebook", "m_pd+share-sheet"), i[k.POSTCREATE_CAMPAIGN] = w("social", "facebook", "p_cf+share-flow-1"), i[k.POSTCREATE_SHAREFLOW7A] = w("social", "facebook", "p_cf+share-flow-7a"), i[k.POSTCREATE_SHAREFLOW7B] = w("social", "facebook", "p_cf+share-flow-7b"), i[k.POSTCREATE_CALENDAR1] = w("social", "facebook", "p_cf_cal1"), i[k.POSTCREATE_CALENDAR2] = w("social", "facebook", "p_cf_cal2"), i[k.POSTCREATE_CALENDAR3] = w("social", "facebook", "p_cf_cal3"), i[k.GUIDANCE_DRAWER] = w("social", "facebook", "p_cp_guide_do"), i), n[v.FACEBOOK_SHARE_SHARESHEET_COPY_LINK] = ((_ = {})[k.CAMPAIGN_PAGE] = w("social", "fb_copy_link", "p_cp+share-sheet"), _[k.COMMUNITY_POSTDONATE_MODAL] = w("social", "fb_copy_link", "p_cmty_pd+share-sheet"), _[k.COMMUNITY_SHARE_MODAL] = w("social", "fb_copy_link", "p_cmty+share-sheet"), _[k.POSTDONATE_MODAL] = w("social", "fb_copy_link", "m_pd+share-sheet"), _[k.POSTCREATE_CAMPAIGN] = w("social", "fb_copy_link", "p_cf+share-flow-1"), _[k.POSTCREATE_SHAREFLOW7A] = w("social", "fb_copy_link", "p_cf+share-flow-7a"), _[k.POSTCREATE_SHAREFLOW7B] = w("social", "fb_copy_link", "p_cf+share-flow-7b"), _[k.POSTCREATE_CALENDAR1] = w("social", "fb_copy_link", "p_cf_cal1"), _[k.POSTCREATE_CALENDAR2] = w("social", "fb_copy_link", "p_cf_cal2"), _[k.POSTCREATE_CALENDAR3] = w("social", "fb_copy_link", "p_cf_cal3"), _[k.GUIDANCE_DRAWER] = w("social", "fb_copy_link", "p_cp_guide_do"), _), n[v.INSTAGRAM_SHARESHEET] = ((o = {})[k.CAMPAIGN_PAGE] = w("social", "instagram", "p_cp+share-sheet"), o[k.POSTDONATE_MODAL] = w("social", "instagram", "m_pd+share-sheet"), o[k.POSTCREATE_CAMPAIGN] = w("social", "instagram", "p_cf+share-flow-1"), o[k.POSTCREATE_SHAREFLOW7A] = w("social", "instagram", "p_cf+share-flow-7a"), o[k.POSTCREATE_SHAREFLOW7B] = w("social", "instagram", "p_cf+share-flow-7b"), o[k.POSTCREATE_CALENDAR1] = w("social", "instagram", "p_cf_cal1"), o[k.POSTCREATE_CALENDAR2] = w("social", "instagram", "p_cf_cal2"), o[k.POSTCREATE_CALENDAR3] = w("social", "instagram", "p_cf_cal3"), o[k.GUIDANCE_DRAWER] = w("social", "instagram", "p_cp_guide_do"), o), n[v.TWITTER_SHARE_SHARESHEET] = ((s = {})[k.CAMPAIGN_PAGE] = w("social", "twitter", "p_cp+share-sheet"), s[k.COMMUNITY_POSTDONATE_MODAL] = w("social", "twitter", "p_cmty_pd+share-sheet"), s[k.COMMUNITY_SHARE_MODAL] = w("social", "twitter", "p_cmty+share-sheet"), s[k.POSTDONATE_MODAL] = w("social", "twitter", "m_pd+share-sheet"), s[k.POSTCREATE_CAMPAIGN] = w("social", "twitter", "p_cf+share-flow-1"), s[k.POSTCREATE_SHAREFLOW7A] = w("social", "twitter", "p_cf+share-flow-7a"), s[k.POSTCREATE_SHAREFLOW7B] = w("social", "twitter", "p_cf+share-flow-7b"), s[k.POSTCREATE_CALENDAR1] = w("social", "twitter", "p_cf_cal1"), s[k.POSTCREATE_CALENDAR2] = w("social", "twitter", "p_cf_cal2"), s[k.POSTCREATE_CALENDAR3] = w("social", "twitter", "p_cf_cal3"), s[k.GUIDANCE_DRAWER] = w("social", "twitter", "p_cp_guide_do"), s), n[v.COPY_LINK_SHARESHEET] = ((l = {})[k.CAMPAIGN_PAGE] = w("copy_link", "customer", "p_cp+share-sheet"), l[k.POSTDONATE_MODAL] = w("copy_link", "customer", "m_pd+share-sheet"), l[k.POSTCREATE_CAMPAIGN] = w("copy_link", "customer", "p_cf+share-flow-1"), l[k.POSTCREATE_SHAREFLOW7A] = w("copy_link", "customer", "p_cf+share-flow-7a"), l[k.POSTCREATE_SHAREFLOW7B] = w("copy_link", "customer", "p_cf+share-flow-7b"), l[k.POSTCREATE_CALENDAR1] = w("copy_link", "customer", "p_cf_cal1"), l[k.POSTCREATE_CALENDAR2] = w("copy_link", "customer", "p_cf_cal2"), l[k.POSTCREATE_CALENDAR3] = w("copy_link", "customer", "p_cf_cal3"), l[k.GUIDANCE_DRAWER] = w("copy_link", "customer", "p_cp_guide_do"), l), n[v.COPY_LINK_TIP_SHARESHEET] = ((p = {})[k.CAMPAIGN_PAGE] = w("copy_link-tip", "customer", "p_cp+share-sheet"), p[k.COMMUNITY_POSTDONATE_MODAL] = w("copy_link-tip", "customer", "p_cmty_pd+share-sheet"), p[k.COMMUNITY_SHARE_MODAL] = w("copy_link-tip", "customer", "p_cmty+share-sheet"), p[k.POSTDONATE_MODAL] = w("copy_link-tip", "customer", "m_pd+share-sheet"), p[k.POSTCREATE_CAMPAIGN] = w("copy_link", "customer", "p_cf+share-flow-1"), p[k.POSTCREATE_SHAREFLOW7A] = w("copy_link", "customer", "p_cf+share-flow-7a"), p[k.POSTCREATE_SHAREFLOW7B] = w("copy_link", "customer", "p_cf+share-flow-7b"), p[k.POSTCREATE_CALENDAR1] = w("copy_link-tip", "customer", "p_cf_cal1"), p[k.POSTCREATE_CALENDAR2] = w("copy_link-tip", "customer", "p_cf_cal2"), p[k.POSTCREATE_CALENDAR3] = w("copy_link-tip", "customer", "p_cf_cal3"), p[k.GUIDANCE_DRAWER] = w("copy_link-tip", "customer", "p_cp_guide_do"), p), n[v.COPY_LINK_ALL] = ((u = {})[k.CAMPAIGN_PAGE] = w("copy_link_all", "customer", "p_cp+share-sheet"), u[k.COMMUNITY_POSTDONATE_MODAL] = w("copy_link_all", "customer", "p_cmty_pd+share-sheet"), u[k.COMMUNITY_SHARE_MODAL] = w("copy_link_all", "customer", "p_cmty+share-sheet"), u[k.POSTDONATE_MODAL] = w("copy_link_all", "customer", "m_pd+share-sheet"), u), n[v.COPY_LINK_MORE] = ((d = {})[k.CAMPAIGN_PAGE] = w("copy_link_more", "customer", "p_cp+share-sheet"), d[k.POSTDONATE_MODAL] = w("copy_link_more", "customer", "m_pd+share-sheet"), d), n[v.LINKEDIN_SHARESHEET] = ((m = {})[k.CAMPAIGN_PAGE] = w("social", "linkedIn", "p_cp+share-sheet"), m[k.POSTDONATE_MODAL] = w("social", "linkedIn", "m_pd+share-sheet"), m[k.POSTCREATE_CAMPAIGN] = w("social", "linkedIn", "p_cf+share-flow-1"), m[k.POSTCREATE_SHAREFLOW7A] = w("social", "linkedIn", "p_cf+share-flow-7a"), m[k.POSTCREATE_SHAREFLOW7B] = w("social", "linkedIn", "p_cf+share-flow-7b"), m[k.POSTCREATE_CALENDAR1] = w("social", "linkedIn", "p_cf_cal1"), m[k.POSTCREATE_CALENDAR2] = w("social", "linkedIn", "p_cf_cal2"), m[k.POSTCREATE_CALENDAR3] = w("social", "linkedIn", "p_cf_cal3"), m[k.GUIDANCE_DRAWER] = w("social", "linkedIn", "p_cp_guide_do"), m), n[v.WHATSAPP_SHARESHEET] = ((f = {})[k.CAMPAIGN_PAGE] = w("chat", "whatsApp", "p_cp+share-sheet"), f[k.COMMUNITY_POSTDONATE_MODAL] = w("social", "whatsApp", "p_cmty_pd+share-sheet"), f[k.COMMUNITY_SHARE_MODAL] = w("social", "whatsApp", "p_cmty+share-sheet"), f[k.POSTDONATE_MODAL] = w("social", "whatsApp", "m_pd+share-sheet"), f[k.POSTCREATE_CAMPAIGN] = w("chat", "whatsapp", "p_cf+share-flow-1"), f[k.POSTCREATE_SHAREFLOW7A] = w("chat", "whatsapp", "p_cf+share-flow-7a"), f[k.POSTCREATE_SHAREFLOW7B] = w("chat", "whatsapp", "p_cf+share-flow-7b"), f[k.POSTCREATE_CALENDAR1] = w("chat", "whatsapp", "p_cf_cal1"), f[k.POSTCREATE_CALENDAR2] = w("chat", "whatsapp", "p_cf_cal2"), f[k.POSTCREATE_CALENDAR3] = w("chat", "whatsapp", "p_cf_cal3"), f[k.GUIDANCE_DRAWER] = w("chat", "whatsapp", "p_cp_guide_do"), f), n[v.WHATSAPP_READMORE_SHARESHEET] = ((E = {})[k.CAMPAIGN_PAGE] = w("chat", "whatsapp-visit", "p_cp+share-sheet"), E[k.POSTDONATE_MODAL] = w("social", "whatsapp-visit", "m_pd+share-sheet"), E[k.POSTCREATE_CAMPAIGN] = w("social", "whatsapp-visit", "p_cf+share-flow-1"), E[k.POSTCREATE_SHAREFLOW7A] = w("social", "whatsapp-visit", "p_cf+share-flow-7a"), E[k.POSTCREATE_SHAREFLOW7B] = w("social", "whatsapp-visit", "p_cf+share-flow-7b"), E[k.POSTCREATE_CALENDAR1] = w("social", "whatsapp-visit", "p_cf_cal1"), E[k.POSTCREATE_CALENDAR2] = w("social", "whatsapp-visit", "p_cf_cal2"), E[k.POSTCREATE_CALENDAR3] = w("social", "whatsapp-visit", "p_cf_cal3"), E[k.GUIDANCE_DRAWER] = w("social", "whatsapp-visit", "p_cp_guide_do"), E), n[v.WHATSAPP_DONATE_SHARESHEET] = ((A = {})[k.CAMPAIGN_PAGE] = w("chat", "whatsapp-donate", "p_cp+share-sheet"), A[k.POSTDONATE_MODAL] = w("social", "whatsapp-donate", "m_pd+share-sheet"), A[k.POSTCREATE_CAMPAIGN] = w("social", "whatsapp-donate", "p_cf+share-flow-1"), A[k.POSTCREATE_SHAREFLOW7A] = w("social", "whatsapp-donate", "p_cf+share-flow-7a"), A[k.POSTCREATE_SHAREFLOW7B] = w("social", "whatsapp-donate", "p_cf+share-flow-7b"), A[k.POSTCREATE_CALENDAR1] = w("social", "whatsapp-donate", "p_cf_cal1"), A[k.POSTCREATE_CALENDAR2] = w("social", "whatsapp-donate", "p_cf_cal2"), A[k.POSTCREATE_CALENDAR3] = w("social", "whatsapp-donate", "p_cf_cal3"), A[k.GUIDANCE_DRAWER] = w("social", "whatsapp-donate", "p_cp_guide_do"), A), n[v.FACEBOOK_MESSENGER_SHARESHEET] = ((h = {})[k.CAMPAIGN_PAGE] = w("chat", "messenger", "p_cp+share-sheet"), h[k.POSTDONATE_MODAL] = w("chat", "messenger", "m_pd+share-sheet"), h[k.POSTCREATE_CAMPAIGN] = w("social", "messenger", "p_cf+share-flow-1"), h[k.POSTCREATE_SHAREFLOW7A] = w("social", "messenger", "p_cf+share-flow-7a"), h[k.POSTCREATE_SHAREFLOW7B] = w("social", "messenger", "p_cf+share-flow-7b"), h[k.POSTCREATE_CALENDAR1] = w("social", "messenger", "p_cf_cal1"), h[k.POSTCREATE_CALENDAR2] = w("social", "messenger", "p_cf_cal2"), h[k.POSTCREATE_CALENDAR3] = w("social", "messenger", "p_cf_cal3"), h[k.GUIDANCE_DRAWER] = w("social", "messenger", "p_cp_guide_do"), h), n[v.SMS_SHARESHEET] = ((g = {})[k.CAMPAIGN_PAGE] = w("sms", "customer", "p_cp+share-sheet"), g[k.COMMUNITY_POSTDONATE_MODAL] = w("sms", "customer", "p_cmty_pd+share-sheet"), g[k.COMMUNITY_SHARE_MODAL] = w("sms", "customer", "p_cmty+share-sheet"), g[k.POSTDONATE_MODAL] = w("sms", "customer", "m_pd+share-sheet"), g[k.POSTCREATE_CAMPAIGN] = w("sms", "customer", "p_cf+share-flow-1"), g[k.POSTCREATE_SHAREFLOW7A] = w("sms", "customer", "p_cf+share-flow-7a"), g[k.POSTCREATE_SHAREFLOW7B] = w("sms", "customer", "p_cf+share-flow-7b"), g[k.POSTCREATE_CALENDAR1] = w("sms", "customer", "p_cf_cal1"), g[k.POSTCREATE_CALENDAR2] = w("sms", "customer", "p_cf_cal2"), g[k.POSTCREATE_CALENDAR3] = w("sms", "customer", "p_cf_cal3"), g[k.GUIDANCE_DRAWER] = w("sms", "customer", "p_cp_guide_do"), g), n[v.MORE_SHARESHEET] = ((T = {})[k.CAMPAIGN_PAGE] = w("more", "customer", "p_cp+share-sheet"), T[k.POSTDONATE_MODAL] = w("more", "customer", "m_pd+share-sheet"), T[k.POSTCREATE_CAMPAIGN] = w("more", "customer", "p_cf+share-flow-1"), T[k.POSTCREATE_SHAREFLOW7A] = w("more", "customer", "p_cf+share-flow-7a"), T[k.POSTCREATE_SHAREFLOW7B] = w("more", "customer", "p_cf+share-flow-7b"), T[k.POSTCREATE_CALENDAR1] = w("more", "customer", "p_cf_cal1"), T[k.POSTCREATE_CALENDAR2] = w("more", "customer", "p_cf_cal2"), T[k.POSTCREATE_CALENDAR3] = w("more", "customer", "p_cf_cal3"), T[k.GUIDANCE_DRAWER] = w("more", "customer", "p_cp_guide_do"), T), n[v.SMS_ANDROID_SHARESHEET] = ((b = {})[k.CAMPAIGN_PAGE] = w("sms", "customer-andr", "p_cp+share-sheet"), b[k.COMMUNITY_POSTDONATE_MODAL] = w("sms", "customer-andr", "p_cmty_pd+share-sheet"), b[k.COMMUNITY_SHARE_MODAL] = w("sms", "customer-andr", "p_cmty+share-sheet"), b[k.POSTDONATE_MODAL] = w("sms", "customer-andr", "m_pd+share-sheet"), b[k.POSTCREATE_CAMPAIGN] = w("sms", "customer-andr", "p_cf+share-flow-1"), b[k.POSTCREATE_SHAREFLOW7A] = w("sms", "customer-andr", "p_cf+share-flow-7a"), b[k.POSTCREATE_SHAREFLOW7B] = w("sms", "customer-andr", "p_cf+share-flow-7b"), b[k.POSTCREATE_CALENDAR1] = w("sms", "customer-andr", "p_cf_cal1"), b[k.POSTCREATE_CALENDAR2] = w("sms", "customer-andr", "p_cf_cal2"), b[k.POSTCREATE_CALENDAR3] = w("sms", "customer-andr", "p_cf_cal3"), b[k.GUIDANCE_DRAWER] = w("sms", "customer-andr", "p_cp_guide_do"), b), n[v.EMBED_WIDGET_DONATE] = ((O = {})[k.CAMPAIGN_PAGE] = w("referral", "widget", "p_cp+share-sheet"), O[k.POSTDONATE_MODAL] = w("referral", "widget", "m_pd+share-sheet"), O[k.POSTCREATE_CAMPAIGN] = w("referral", "widget", "p_cf+share-flow-1"), O[k.POSTCREATE_SHAREFLOW7A] = w("referral", "widget", "p_cf+share-flow-7a"), O[k.POSTCREATE_SHAREFLOW7B] = w("referral", "widget", "p_cf+share-flow-7b"), O[k.POSTCREATE_CALENDAR1] = w("referral", "widget", "p_cf_cal1"), O[k.POSTCREATE_CALENDAR2] = w("referral", "widget", "p_cf_cal2"), O[k.POSTCREATE_CALENDAR3] = w("referral", "widget", "p_cf_cal3"), O[k.GUIDANCE_DRAWER] = w("referral", "widget", "p_cp_guide_do"), O), n[v.PRINT_POSTER] = ((S = {})[k.CAMPAIGN_PAGE] = w("referral", "poster", "p_cp+share-sheet"), S[k.POSTDONATE_MODAL] = w("referral", "poster", "m_pd+share-sheet"), S[k.POSTCREATE_CAMPAIGN] = w("referral", "poster", "p_cf+share-flow-1"), S[k.POSTCREATE_SHAREFLOW7A] = w("referral", "poster", "p_cf+share-flow-7a"), S[k.POSTCREATE_SHAREFLOW7B] = w("referral", "poster", "p_cf+share-flow-7b"), S[k.POSTCREATE_CALENDAR1] = w("referral", "poster", "p_cf_cal1"), S[k.POSTCREATE_CALENDAR2] = w("referral", "poster", "p_cf_cal2"), S[k.POSTCREATE_CALENDAR3] = w("referral", "poster", "p_cf_cal3"), S[k.GUIDANCE_DRAWER] = w("referral", "poster", "p_cp_guide_do"), S), n[v.ADDRESS_BAR] = ((R = {})[k.CAMPAIGN_PAGE] = w("os", "customer", "p_cp_url"), R), n[v.CAMPAIGN_LINK_TAG] = ((y = {})[k.CAMPAIGN_PAGE] = w("copy_link", "customer", "p_cp_display"), y), n);
        function w(e, t, a) {
            return {
                medium: e,
                source: t,
                campaign: a
            }
        }
        function N(e) {
            return "utm_source=" + e.source + "&utm_medium=" + e.medium + "&utm_campaign=" + e.campaign
        }
        function D(e) {
            return "utm_" === e.slice(0, 4)
        }
        t.makeUtm = w,
        t.getUtm = function(e, t) {
            return C[e][t] ? C[e][t] : (console.warn("WARN @ssr-frontend/packages-util-utm missing UTM. " + e + " from UtmKeys and " + t + " from UtmFromKeys do not have a UTM. See the utms object in packages/util-utm/index.ts"), {})
        },
        t.makeEncodedUtm = function(e, t) {
            return N(C[e][t])
        },
        t.encodeUtm = N,
        t.isUtmParam = D,
        t.removeUtmParams = function() {
            if (P.canUseHistory() && P.canUseLocation() && history && history.replaceState && location.search) {
                var e = location.search.slice(1).split("&"),
                    t = e.filter((function(e) {
                        return !D(e)
                    }));
                if (t.length < e.length) {
                    var a = t.length ? "?" + t.join("&") : "",
                        n = location.pathname + a + location.hash;
                    history.replaceState({}, "", n)
                }
            }
        }
    },
    pD25: function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var c in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
                    return e
                }).apply(this, arguments)
            },
            c = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Logger = void 0;
        var r = c(a("MkKp")),
            i = r.default.format.printf((function(e) {
                return JSON.stringify(n({}, e))
            })),
            _ = {
                transports: [new r.default.transports.Console({
                    format: r.default.format.combine(r.default.format.timestamp(), i)
                })]
            },
            o = r.default.createLogger(_);
        t.Logger = {
            error: function(e) {
                for (var t = [], a = 1; a < arguments.length; a++)
                    t[a - 1] = arguments[a];
                return o.error(e, t)
            },
            info: function(e) {
                for (var t = [], a = 1; a < arguments.length; a++)
                    t[a - 1] = arguments[a];
                return o.info(e, t)
            },
            warn: function(e) {
                for (var t = [], a = 1; a < arguments.length; a++)
                    t[a - 1] = arguments[a];
                return o.warn(e, t)
            },
            getOptions: function() {
                return _
            }
        }
    },
    pYmI: function(e, t, a) {
        var n = a("+Zow"),
            c = a("9npq");
        e.exports = function(e, t, a) {
            var r = t && a || 0;
            "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null);
            var i = (e = e || {}).random || (e.rng || n)();
            if (i[6] = 15 & i[6] | 64, i[8] = 63 & i[8] | 128, t)
                for (var _ = 0; _ < 16; ++_)
                    t[r + _] = i[_];
            return t || c(i)
        }
    },
    pvo5: function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
            return (n = Object.assign || function(e) {
                for (var t, a = 1, n = arguments.length; a < n; a++)
                    for (var c in t = arguments[a])
                        Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
                return e
            }).apply(this, arguments)
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = a("wE+H"),
            r = a("KLs3"),
            i = a("VU+c"),
            _ = a("A8Cc"),
            o = function() {
                function e(e) {
                    var t = i.getISO15897Locale(e),
                        a = Object.values(c.SupportedLocales);
                    this.locale = a.includes(t) ? t : c.SupportedLocales.ENGLISH_GB,
                    this.formatProps = {
                        maximumFractionDigits: 0,
                        minimumFractionDigits: 0
                    }
                }
                return e.prototype.setCurrencyProps = function(e) {
                    return this.currencyFormatProps = e, this
                }, e.prototype.formatAsCurrency = function(e, t) {
                    var a = n(n({
                            currency: "usd",
                            currencyDisplay: "symbol",
                            style: "currency"
                        }, this.currencyFormatProps), t),
                        c = this.format(e),
                        i = r.getCurrencySymbolByIsoCode(a.currency);
                    return this.combineCurrencyWithAmount(c, i)
                }, e.prototype.format = function(e, t) {
                    return void 0 === t && (t = this.formatProps), e.toLocaleString(i.getBCP47Locale(this.locale), t)
                }, e.prototype.formatWithAbbrev = function(e, t, a) {
                    void 0 === t && (t = !0),
                    void 0 === a && (a = 0);
                    var n = _.numberAbbrev(e, t, a),
                        c = n.abbrevNum,
                        r = n.suffix,
                        o = this.formatProps;
                    a > 0 && (o = {
                        maximumFractionDigits: Math.min(a, ("" + e).length),
                        minimumFractionDigits: 0
                    });
                    return c.toLocaleString(i.getBCP47Locale(this.locale), o) + this.getLocalizedSuffix(r)
                }, e.prototype.combineCurrencyWithAmount = function(e, t) {
                    switch (this.locale) {
                    case c.SupportedLocales.DUTCH_NL:
                    case c.SupportedLocales.ENGLISH_GB:
                    case c.SupportedLocales.PORTUGUESE_BR:
                        return t + e;
                    case c.SupportedLocales.FRENCH_FR:
                    case c.SupportedLocales.GERMAN_DE:
                    case c.SupportedLocales.ITALIAN_IT:
                    case c.SupportedLocales.SPANISH_ES:
                        return e + " " + t;
                    default:
                        return t + e
                    }
                }, e.prototype.getLocalizedSuffix = function(e) {
                    var t,
                        a,
                        n,
                        r,
                        i,
                        o,
                        s = ((t = {})[c.SupportedLocales.FRENCH_FR] = ((a = {})[_.AbbrevSuffix.THOUSAND] = " k", a[_.AbbrevSuffix.MILLION] = " M", a[_.AbbrevSuffix.BILLION] = " Mrd", a), t[c.SupportedLocales.SPANISH_ES] = ((n = {})[_.AbbrevSuffix.THOUSAND] = "k", n[_.AbbrevSuffix.MILLION] = " M", n[_.AbbrevSuffix.BILLION] = " MM", n), t[c.SupportedLocales.GERMAN_DE] = ((r = {})[_.AbbrevSuffix.THOUSAND] = " T", r[_.AbbrevSuffix.MILLION] = " Mio.", r[_.AbbrevSuffix.BILLION] = " Mrd.", r), t[c.SupportedLocales.DUTCH_NL] = ((i = {})[_.AbbrevSuffix.THOUSAND] = "k", i[_.AbbrevSuffix.MILLION] = " mln.", i[_.AbbrevSuffix.BILLION] = " mld.", i), t[c.SupportedLocales.ITALIAN_IT] = ((o = {})[_.AbbrevSuffix.THOUSAND] = "k", o[_.AbbrevSuffix.MILLION] = "mio", o[_.AbbrevSuffix.BILLION] = "mlrd", o), t);
                    return s[this.locale] && s[this.locale][e] || e
                }, e
            }();
        t.default = o
    },
    pxbj: function(e, t, a) {
        "use strict";
        (function(e) {
            var n = this && this.__read || function(e, t) {
                var a = "function" == typeof Symbol && e[Symbol.iterator];
                if (!a)
                    return e;
                var n,
                    c,
                    r = a.call(e),
                    i = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(n = r.next()).done;)
                        i.push(n.value)
                } catch (_) {
                    c = {
                        error: _
                    }
                } finally {
                    try {
                        n && !n.done && (a = r.return) && a.call(r)
                    } finally {
                        if (c)
                            throw c.error
                    }
                }
                return i
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.wrapURLs = t.getShareLink = t.getDomain = t.serializeParams = t.normalize = void 0;
            var c = a("mvnV");
            t.normalize = function(e) {
                return e.replace(/([^:]\/)\/+/g, "$1")
            },
            t.serializeParams = function(e, t) {
                return void 0 === t && (t = "&"), Object.keys(e).filter((function(t) {
                    return !!e[t]
                })).map((function(t) {
                    return t + "=" + encodeURIComponent(e[t])
                })).join(t)
            },
            t.getDomain = function() {
                return "undefined" != typeof window ? window.initialState && window.initialState.meta && window.initialState.meta.global && window.initialState.meta.global.domain ? window.initialState.meta.global.domain : window.location.host.split(".").slice(1, window.location.host.length).join(".") : void 0 !== e && e.env && e.env.DOMAIN ? e.env.DOMAIN : "gofundme.com"
            },
            t.getShareLink = function(e, a, r, i) {
                var _ = i ? Object.entries(i).filter((function(e) {
                        var t = n(e, 2);
                        t[0];
                        return t[1]
                    })).map((function(e) {
                        var t = n(e, 2);
                        return t[0] + "=" + t[1]
                    })).join("&") : "",
                    o = a && r ? "?" + c.makeEncodedUtm(a, r) + (_.length ? "&" + _ : "") : "";
                return t.normalize("" + e + o)
            },
            t.wrapURLs = function(e) {
                return e.replace(/(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*))/gi, (function(e) {
                    return '<a href="' + e + '" target="_blank" rel="nofollow noopener noreferrer">' + e + "</a>"
                }))
            }
        }).call(this, a("8oxB"))
    },
    q0ph: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = n(a("q1tI")),
            r = a("qhky");
        t.default = function(e) {
            var t = e.appId,
                a = e.pages;
            return c.default.createElement(r.Helmet, null, c.default.createElement("meta", {
                property: "fb:app_id",
                content: t
            }), a.map((function(e, t) {
                return c.default.createElement("meta", {
                    key: t,
                    property: "fb:pages",
                    content: e
                })
            })))
        }
    },
    qDU6: function(e, t, a) {
        "use strict";
        var n,
            c,
            r,
            i,
            _,
            o,
            s,
            l,
            p,
            u,
            d,
            m,
            f,
            E,
            A,
            h,
            g,
            T,
            b,
            O,
            S,
            R;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.removeUtmParams = t.isUtmParam = t.encodeUtm = t.makeEncodedUtm = t.getUtm = t.makeUtm = t.UtmFromKeys = t.UtmKeys = void 0;
        var y,
            v,
            k = a("K9qA");
        !function(e) {
            e.FACEBOOK_SHARE_SHARESHEET = "FACEBOOK_SHARE_SHARESHEET",
            e.FACEBOOK_SHARE_SHARESHEET_COPY_LINK = "FACEBOOK_SHARE_SHARESHEET_COPY_LINK",
            e.INSTAGRAM_SHARESHEET = "INSTAGRAM_SHARESHEET",
            e.TWITTER_SHARE_SHARESHEET = "TWITTER_SHARE_SHARESHEET",
            e.COPY_LINK_SHARESHEET = "COPY_LINK_SHARESHEET",
            e.COPY_LINK_TIP_SHARESHEET = "COPY_LINK_TIP_SHARESHEET",
            e.COPY_LINK_MORE = "COPY_LINK_MORE",
            e.COPY_LINK_ALL = "COPY_LINK_ALL",
            e.EMAIL_SHARESHEET = "EMAIL_SHARESHEET",
            e.EMAIL_ANDROID_SHARESHEET = "EMAIL_ANDROID_SHARESHEET",
            e.WHATSAPP_SHARESHEET = "WHATSAPP_SHARESHEET",
            e.LINKEDIN_SHARESHEET = "LINKEDIN_SHARESHEET",
            e.WHATSAPP_READMORE_SHARESHEET = "WHATSAPP_READMORE_SHARESHEET",
            e.WHATSAPP_DONATE_SHARESHEET = "WHATSAPP_DONATE_SHARESHEET",
            e.FACEBOOK_MESSENGER_SHARESHEET = "FACEBOOK_MESSENGER_SHARESHEET",
            e.SMS_SHARESHEET = "SMS_SHARESHEET",
            e.SMS_ANDROID_SHARESHEET = "SMS_ANDROID_SHARESHEET",
            e.MORE_SHARESHEET = "MORE_SHARESHEET",
            e.EMBED_WIDGET_DONATE = "EMBED_WIDGET_DONATE",
            e.PRINT_POSTER = "PRINT_POSTER",
            e.ADDRESS_BAR = "ADDRESS_BAR"
        }(y = t.UtmKeys || (t.UtmKeys = {})),
        function(e) {
            e.CAMPAIGN_PAGE = "CAMPAIGN_PAGE",
            e.COMMUNITY_POSTDONATE_MODAL = "COMMUNITY_POSTDONATE_MODAL",
            e.COMMUNITY_SHARE_MODAL = "COMMUNITY_SHARE_MODAL",
            e.POSTDONATE_MODAL = "POSTDONATE_MODAL",
            e.POSTCREATE_CAMPAIGN = "POSTCREATE_CAMPAIGN",
            e.POSTCREATE_SHAREFLOW7A = "POSTCREATE_SHAREFLOW7A",
            e.POSTCREATE_SHAREFLOW7B = "POSTCREATE_SHAREFLOW7B",
            e.POSTCREATE_CALENDAR1 = "POSTCREATE_CALENDAR1",
            e.POSTCREATE_CALENDAR2 = "POSTCREATE_CALENDAR2",
            e.POSTCREATE_CALENDAR3 = "POSTCREATE_CALENDAR3",
            e.GUIDANCE_DRAWER = "GUIDANCE_DRAWER"
        }(v = t.UtmFromKeys || (t.UtmFromKeys = {}));
        var P = ((n = {})[y.EMAIL_SHARESHEET] = ((c = {})[v.CAMPAIGN_PAGE] = C("email", "customer", "p_cp+share-sheet"), c[v.COMMUNITY_POSTDONATE_MODAL] = C("email", "customer", "p_cmty_pd+share-sheet"), c[v.COMMUNITY_SHARE_MODAL] = C("email", "customer", "p_cmty+share-sheet"), c[v.POSTDONATE_MODAL] = C("email", "customer", "m_pd+share-sheet"), c[v.POSTCREATE_CAMPAIGN] = C("email", "customer", "p_cf+share-flow-1"), c[v.POSTCREATE_SHAREFLOW7A] = C("email", "customer", "p_cf+share-flow-7a"), c[v.POSTCREATE_SHAREFLOW7B] = C("email", "customer", "p_cf+share-flow-7b"), c[v.POSTCREATE_CALENDAR1] = C("email", "customer", "p_cf_cal1"), c[v.POSTCREATE_CALENDAR2] = C("email", "customer", "p_cf_cal2"), c[v.POSTCREATE_CALENDAR3] = C("email", "customer", "p_cf_cal3"), c[v.GUIDANCE_DRAWER] = C("email", "customer", "p_cp_guide_do"), c), n[y.EMAIL_ANDROID_SHARESHEET] = ((r = {})[v.CAMPAIGN_PAGE] = C("email", "customer-andr", "p_cp+share-sheet"), r[v.COMMUNITY_POSTDONATE_MODAL] = C("email", "customer-andr", "p_cmty_pd+share-sheet"), r[v.COMMUNITY_SHARE_MODAL] = C("email", "customer-andr", "p_cmty+share-sheet"), r[v.POSTDONATE_MODAL] = C("email", "customer-andr", "m_pd+share-sheet"), r[v.POSTCREATE_CAMPAIGN] = C("email", "customer-andr", "p_cf+share-flow-1"), r[v.POSTCREATE_SHAREFLOW7A] = C("email", "customer-andr", "p_cf+share-flow-7a"), r[v.POSTCREATE_SHAREFLOW7B] = C("email", "customer-andr", "p_cf+share-flow-7b"), r[v.POSTCREATE_CALENDAR1] = C("email", "customer-andr", "p_cf_cal1"), r[v.POSTCREATE_CALENDAR2] = C("email", "customer-andr", "p_cf_cal2"), r[v.POSTCREATE_CALENDAR3] = C("email", "customer-andr", "p_cf_cal3"), r[v.GUIDANCE_DRAWER] = C("email", "customer-andr", "p_cp_guide_do"), r), n[y.FACEBOOK_SHARE_SHARESHEET] = ((i = {})[v.CAMPAIGN_PAGE] = C("social", "facebook", "p_cp+share-sheet"), i[v.COMMUNITY_POSTDONATE_MODAL] = C("social", "facebook", "p_cmty_pd+share-sheet"), i[v.COMMUNITY_SHARE_MODAL] = C("social", "facebook", "p_cmty+share-sheet"), i[v.POSTDONATE_MODAL] = C("social", "facebook", "m_pd+share-sheet"), i[v.POSTCREATE_CAMPAIGN] = C("social", "facebook", "p_cf+share-flow-1"), i[v.POSTCREATE_SHAREFLOW7A] = C("social", "facebook", "p_cf+share-flow-7a"), i[v.POSTCREATE_SHAREFLOW7B] = C("social", "facebook", "p_cf+share-flow-7b"), i[v.POSTCREATE_CALENDAR1] = C("social", "facebook", "p_cf_cal1"), i[v.POSTCREATE_CALENDAR2] = C("social", "facebook", "p_cf_cal2"), i[v.POSTCREATE_CALENDAR3] = C("social", "facebook", "p_cf_cal3"), i[v.GUIDANCE_DRAWER] = C("social", "facebook", "p_cp_guide_do"), i), n[y.FACEBOOK_SHARE_SHARESHEET_COPY_LINK] = ((_ = {})[v.CAMPAIGN_PAGE] = C("social", "fb_copy_link", "p_cp+share-sheet"), _[v.COMMUNITY_POSTDONATE_MODAL] = C("social", "fb_copy_link", "p_cmty_pd+share-sheet"), _[v.COMMUNITY_SHARE_MODAL] = C("social", "fb_copy_link", "p_cmty+share-sheet"), _[v.POSTDONATE_MODAL] = C("social", "fb_copy_link", "m_pd+share-sheet"), _[v.POSTCREATE_CAMPAIGN] = C("social", "fb_copy_link", "p_cf+share-flow-1"), _[v.POSTCREATE_SHAREFLOW7A] = C("social", "fb_copy_link", "p_cf+share-flow-7a"), _[v.POSTCREATE_SHAREFLOW7B] = C("social", "fb_copy_link", "p_cf+share-flow-7b"), _[v.POSTCREATE_CALENDAR1] = C("social", "fb_copy_link", "p_cf_cal1"), _[v.POSTCREATE_CALENDAR2] = C("social", "fb_copy_link", "p_cf_cal2"), _[v.POSTCREATE_CALENDAR3] = C("social", "fb_copy_link", "p_cf_cal3"), _[v.GUIDANCE_DRAWER] = C("social", "fb_copy_link", "p_cp_guide_do"), _), n[y.INSTAGRAM_SHARESHEET] = ((o = {})[v.CAMPAIGN_PAGE] = C("social", "instagram", "p_cp+share-sheet"), o[v.POSTDONATE_MODAL] = C("social", "instagram", "m_pd+share-sheet"), o[v.POSTCREATE_CAMPAIGN] = C("social", "instagram", "p_cf+share-flow-1"), o[v.POSTCREATE_SHAREFLOW7A] = C("social", "instagram", "p_cf+share-flow-7a"), o[v.POSTCREATE_SHAREFLOW7B] = C("social", "instagram", "p_cf+share-flow-7b"), o[v.POSTCREATE_CALENDAR1] = C("social", "instagram", "p_cf_cal1"), o[v.POSTCREATE_CALENDAR2] = C("social", "instagram", "p_cf_cal2"), o[v.POSTCREATE_CALENDAR3] = C("social", "instagram", "p_cf_cal3"), o[v.GUIDANCE_DRAWER] = C("social", "instagram", "p_cp_guide_do"), o), n[y.TWITTER_SHARE_SHARESHEET] = ((s = {})[v.CAMPAIGN_PAGE] = C("social", "twitter", "p_cp+share-sheet"), s[v.COMMUNITY_POSTDONATE_MODAL] = C("social", "twitter", "p_cmty_pd+share-sheet"), s[v.COMMUNITY_SHARE_MODAL] = C("social", "twitter", "p_cmty+share-sheet"), s[v.POSTDONATE_MODAL] = C("social", "twitter", "m_pd+share-sheet"), s[v.POSTCREATE_CAMPAIGN] = C("social", "twitter", "p_cf+share-flow-1"), s[v.POSTCREATE_SHAREFLOW7A] = C("social", "twitter", "p_cf+share-flow-7a"), s[v.POSTCREATE_SHAREFLOW7B] = C("social", "twitter", "p_cf+share-flow-7b"), s[v.POSTCREATE_CALENDAR1] = C("social", "twitter", "p_cf_cal1"), s[v.POSTCREATE_CALENDAR2] = C("social", "twitter", "p_cf_cal2"), s[v.POSTCREATE_CALENDAR3] = C("social", "twitter", "p_cf_cal3"), s[v.GUIDANCE_DRAWER] = C("social", "twitter", "p_cp_guide_do"), s), n[y.COPY_LINK_SHARESHEET] = ((l = {})[v.CAMPAIGN_PAGE] = C("copy_link", "customer", "p_cp+share-sheet"), l[v.POSTDONATE_MODAL] = C("copy_link", "customer", "m_pd+share-sheet"), l[v.POSTCREATE_CAMPAIGN] = C("copy_link", "customer", "p_cf+share-flow-1"), l[v.POSTCREATE_SHAREFLOW7A] = C("copy_link", "customer", "p_cf+share-flow-7a"), l[v.POSTCREATE_SHAREFLOW7B] = C("copy_link", "customer", "p_cf+share-flow-7b"), l[v.POSTCREATE_CALENDAR1] = C("copy_link", "customer", "p_cf_cal1"), l[v.POSTCREATE_CALENDAR2] = C("copy_link", "customer", "p_cf_cal2"), l[v.POSTCREATE_CALENDAR3] = C("copy_link", "customer", "p_cf_cal3"), l[v.GUIDANCE_DRAWER] = C("copy_link", "customer", "p_cp_guide_do"), l), n[y.COPY_LINK_TIP_SHARESHEET] = ((p = {})[v.CAMPAIGN_PAGE] = C("copy_link-tip", "customer", "p_cp+share-sheet"), p[v.COMMUNITY_POSTDONATE_MODAL] = C("copy_link-tip", "customer", "p_cmty_pd+share-sheet"), p[v.COMMUNITY_SHARE_MODAL] = C("copy_link-tip", "customer", "p_cmty+share-sheet"), p[v.POSTDONATE_MODAL] = C("copy_link-tip", "customer", "m_pd+share-sheet"), p[v.POSTCREATE_CAMPAIGN] = C("copy_link", "customer", "p_cf+share-flow-1"), p[v.POSTCREATE_SHAREFLOW7A] = C("copy_link", "customer", "p_cf+share-flow-7a"), p[v.POSTCREATE_SHAREFLOW7B] = C("copy_link", "customer", "p_cf+share-flow-7b"), p[v.POSTCREATE_CALENDAR1] = C("copy_link-tip", "customer", "p_cf_cal1"), p[v.POSTCREATE_CALENDAR2] = C("copy_link-tip", "customer", "p_cf_cal2"), p[v.POSTCREATE_CALENDAR3] = C("copy_link-tip", "customer", "p_cf_cal3"), p[v.GUIDANCE_DRAWER] = C("copy_link-tip", "customer", "p_cp_guide_do"), p), n[y.COPY_LINK_ALL] = ((u = {})[v.CAMPAIGN_PAGE] = C("copy_link_all", "customer", "p_cp+share-sheet"), u[v.COMMUNITY_POSTDONATE_MODAL] = C("copy_link_all", "customer", "p_cmty_pd+share-sheet"), u[v.COMMUNITY_SHARE_MODAL] = C("copy_link_all", "customer", "p_cmty+share-sheet"), u[v.POSTDONATE_MODAL] = C("copy_link_all", "customer", "m_pd+share-sheet"), u), n[y.COPY_LINK_MORE] = ((d = {})[v.CAMPAIGN_PAGE] = C("copy_link_more", "customer", "p_cp+share-sheet"), d[v.POSTDONATE_MODAL] = C("copy_link_more", "customer", "m_pd+share-sheet"), d), n[y.LINKEDIN_SHARESHEET] = ((m = {})[v.CAMPAIGN_PAGE] = C("social", "linkedIn", "p_cp+share-sheet"), m[v.POSTDONATE_MODAL] = C("social", "linkedIn", "m_pd+share-sheet"), m[v.POSTCREATE_CAMPAIGN] = C("social", "linkedIn", "p_cf+share-flow-1"), m[v.POSTCREATE_SHAREFLOW7A] = C("social", "linkedIn", "p_cf+share-flow-7a"), m[v.POSTCREATE_SHAREFLOW7B] = C("social", "linkedIn", "p_cf+share-flow-7b"), m[v.POSTCREATE_CALENDAR1] = C("social", "linkedIn", "p_cf_cal1"), m[v.POSTCREATE_CALENDAR2] = C("social", "linkedIn", "p_cf_cal2"), m[v.POSTCREATE_CALENDAR3] = C("social", "linkedIn", "p_cf_cal3"), m[v.GUIDANCE_DRAWER] = C("social", "linkedIn", "p_cp_guide_do"), m), n[y.WHATSAPP_SHARESHEET] = ((f = {})[v.CAMPAIGN_PAGE] = C("chat", "whatsApp", "p_cp+share-sheet"), f[v.COMMUNITY_POSTDONATE_MODAL] = C("social", "whatsApp", "p_cmty_pd+share-sheet"), f[v.COMMUNITY_SHARE_MODAL] = C("social", "whatsApp", "p_cmty+share-sheet"), f[v.POSTDONATE_MODAL] = C("social", "whatsApp", "m_pd+share-sheet"), f[v.POSTCREATE_CAMPAIGN] = C("chat", "whatsapp", "p_cf+share-flow-1"), f[v.POSTCREATE_SHAREFLOW7A] = C("chat", "whatsapp", "p_cf+share-flow-7a"), f[v.POSTCREATE_SHAREFLOW7B] = C("chat", "whatsapp", "p_cf+share-flow-7b"), f[v.POSTCREATE_CALENDAR1] = C("chat", "whatsapp", "p_cf_cal1"), f[v.POSTCREATE_CALENDAR2] = C("chat", "whatsapp", "p_cf_cal2"), f[v.POSTCREATE_CALENDAR3] = C("chat", "whatsapp", "p_cf_cal3"), f[v.GUIDANCE_DRAWER] = C("chat", "whatsapp", "p_cp_guide_do"), f), n[y.WHATSAPP_READMORE_SHARESHEET] = ((E = {})[v.CAMPAIGN_PAGE] = C("chat", "whatsapp-visit", "p_cp+share-sheet"), E[v.POSTDONATE_MODAL] = C("social", "whatsapp-visit", "m_pd+share-sheet"), E[v.POSTCREATE_CAMPAIGN] = C("social", "whatsapp-visit", "p_cf+share-flow-1"), E[v.POSTCREATE_SHAREFLOW7A] = C("social", "whatsapp-visit", "p_cf+share-flow-7a"), E[v.POSTCREATE_SHAREFLOW7B] = C("social", "whatsapp-visit", "p_cf+share-flow-7b"), E[v.POSTCREATE_CALENDAR1] = C("social", "whatsapp-visit", "p_cf_cal1"), E[v.POSTCREATE_CALENDAR2] = C("social", "whatsapp-visit", "p_cf_cal2"), E[v.POSTCREATE_CALENDAR3] = C("social", "whatsapp-visit", "p_cf_cal3"), E[v.GUIDANCE_DRAWER] = C("social", "whatsapp-visit", "p_cp_guide_do"), E), n[y.WHATSAPP_DONATE_SHARESHEET] = ((A = {})[v.CAMPAIGN_PAGE] = C("chat", "whatsapp-donate", "p_cp+share-sheet"), A[v.POSTDONATE_MODAL] = C("social", "whatsapp-donate", "m_pd+share-sheet"), A[v.POSTCREATE_CAMPAIGN] = C("social", "whatsapp-donate", "p_cf+share-flow-1"), A[v.POSTCREATE_SHAREFLOW7A] = C("social", "whatsapp-donate", "p_cf+share-flow-7a"), A[v.POSTCREATE_SHAREFLOW7B] = C("social", "whatsapp-donate", "p_cf+share-flow-7b"), A[v.POSTCREATE_CALENDAR1] = C("social", "whatsapp-donate", "p_cf_cal1"), A[v.POSTCREATE_CALENDAR2] = C("social", "whatsapp-donate", "p_cf_cal2"), A[v.POSTCREATE_CALENDAR3] = C("social", "whatsapp-donate", "p_cf_cal3"), A[v.GUIDANCE_DRAWER] = C("social", "whatsapp-donate", "p_cp_guide_do"), A), n[y.FACEBOOK_MESSENGER_SHARESHEET] = ((h = {})[v.CAMPAIGN_PAGE] = C("chat", "messenger", "p_cp+share-sheet"), h[v.POSTDONATE_MODAL] = C("chat", "messenger", "m_pd+share-sheet"), h[v.POSTCREATE_CAMPAIGN] = C("social", "messenger", "p_cf+share-flow-1"), h[v.POSTCREATE_SHAREFLOW7A] = C("social", "messenger", "p_cf+share-flow-7a"), h[v.POSTCREATE_SHAREFLOW7B] = C("social", "messenger", "p_cf+share-flow-7b"), h[v.POSTCREATE_CALENDAR1] = C("social", "messenger", "p_cf_cal1"), h[v.POSTCREATE_CALENDAR2] = C("social", "messenger", "p_cf_cal2"), h[v.POSTCREATE_CALENDAR3] = C("social", "messenger", "p_cf_cal3"), h[v.GUIDANCE_DRAWER] = C("social", "messenger", "p_cp_guide_do"), h), n[y.SMS_SHARESHEET] = ((g = {})[v.CAMPAIGN_PAGE] = C("sms", "customer", "p_cp+share-sheet"), g[v.COMMUNITY_POSTDONATE_MODAL] = C("sms", "customer", "p_cmty_pd+share-sheet"), g[v.COMMUNITY_SHARE_MODAL] = C("sms", "customer", "p_cmty+share-sheet"), g[v.POSTDONATE_MODAL] = C("sms", "customer", "m_pd+share-sheet"), g[v.POSTCREATE_CAMPAIGN] = C("sms", "customer", "p_cf+share-flow-1"), g[v.POSTCREATE_SHAREFLOW7A] = C("sms", "customer", "p_cf+share-flow-7a"), g[v.POSTCREATE_SHAREFLOW7B] = C("sms", "customer", "p_cf+share-flow-7b"), g[v.POSTCREATE_CALENDAR1] = C("sms", "customer", "p_cf_cal1"), g[v.POSTCREATE_CALENDAR2] = C("sms", "customer", "p_cf_cal2"), g[v.POSTCREATE_CALENDAR3] = C("sms", "customer", "p_cf_cal3"), g[v.GUIDANCE_DRAWER] = C("sms", "customer", "p_cp_guide_do"), g), n[y.MORE_SHARESHEET] = ((T = {})[v.CAMPAIGN_PAGE] = C("more", "customer", "p_cp+share-sheet"), T[v.POSTDONATE_MODAL] = C("more", "customer", "m_pd+share-sheet"), T[v.POSTCREATE_CAMPAIGN] = C("more", "customer", "p_cf+share-flow-1"), T[v.POSTCREATE_SHAREFLOW7A] = C("more", "customer", "p_cf+share-flow-7a"), T[v.POSTCREATE_SHAREFLOW7B] = C("more", "customer", "p_cf+share-flow-7b"), T[v.POSTCREATE_CALENDAR1] = C("more", "customer", "p_cf_cal1"), T[v.POSTCREATE_CALENDAR2] = C("more", "customer", "p_cf_cal2"), T[v.POSTCREATE_CALENDAR3] = C("more", "customer", "p_cf_cal3"), T[v.GUIDANCE_DRAWER] = C("more", "customer", "p_cp_guide_do"), T), n[y.SMS_ANDROID_SHARESHEET] = ((b = {})[v.CAMPAIGN_PAGE] = C("sms", "customer-andr", "p_cp+share-sheet"), b[v.COMMUNITY_POSTDONATE_MODAL] = C("sms", "customer-andr", "p_cmty_pd+share-sheet"), b[v.COMMUNITY_SHARE_MODAL] = C("sms", "customer-andr", "p_cmty+share-sheet"), b[v.POSTDONATE_MODAL] = C("sms", "customer-andr", "m_pd+share-sheet"), b[v.POSTCREATE_CAMPAIGN] = C("sms", "customer-andr", "p_cf+share-flow-1"), b[v.POSTCREATE_SHAREFLOW7A] = C("sms", "customer-andr", "p_cf+share-flow-7a"), b[v.POSTCREATE_SHAREFLOW7B] = C("sms", "customer-andr", "p_cf+share-flow-7b"), b[v.POSTCREATE_CALENDAR1] = C("sms", "customer-andr", "p_cf_cal1"), b[v.POSTCREATE_CALENDAR2] = C("sms", "customer-andr", "p_cf_cal2"), b[v.POSTCREATE_CALENDAR3] = C("sms", "customer-andr", "p_cf_cal3"), b[v.GUIDANCE_DRAWER] = C("sms", "customer-andr", "p_cp_guide_do"), b), n[y.EMBED_WIDGET_DONATE] = ((O = {})[v.CAMPAIGN_PAGE] = C("referral", "widget", "p_cp+share-sheet"), O[v.POSTDONATE_MODAL] = C("referral", "widget", "m_pd+share-sheet"), O[v.POSTCREATE_CAMPAIGN] = C("referral", "widget", "p_cf+share-flow-1"), O[v.POSTCREATE_SHAREFLOW7A] = C("referral", "widget", "p_cf+share-flow-7a"), O[v.POSTCREATE_SHAREFLOW7B] = C("referral", "widget", "p_cf+share-flow-7b"), O[v.POSTCREATE_CALENDAR1] = C("referral", "widget", "p_cf_cal1"), O[v.POSTCREATE_CALENDAR2] = C("referral", "widget", "p_cf_cal2"), O[v.POSTCREATE_CALENDAR3] = C("referral", "widget", "p_cf_cal3"), O[v.GUIDANCE_DRAWER] = C("referral", "widget", "p_cp_guide_do"), O), n[y.PRINT_POSTER] = ((S = {})[v.CAMPAIGN_PAGE] = C("referral", "poster", "p_cp+share-sheet"), S[v.POSTDONATE_MODAL] = C("referral", "poster", "m_pd+share-sheet"), S[v.POSTCREATE_CAMPAIGN] = C("referral", "poster", "p_cf+share-flow-1"), S[v.POSTCREATE_SHAREFLOW7A] = C("referral", "poster", "p_cf+share-flow-7a"), S[v.POSTCREATE_SHAREFLOW7B] = C("referral", "poster", "p_cf+share-flow-7b"), S[v.POSTCREATE_CALENDAR1] = C("referral", "poster", "p_cf_cal1"), S[v.POSTCREATE_CALENDAR2] = C("referral", "poster", "p_cf_cal2"), S[v.POSTCREATE_CALENDAR3] = C("referral", "poster", "p_cf_cal3"), S[v.GUIDANCE_DRAWER] = C("referral", "poster", "p_cp_guide_do"), S), n[y.ADDRESS_BAR] = ((R = {})[v.CAMPAIGN_PAGE] = C("os", "customer", "p_cp_url"), R), n);
        function C(e, t, a) {
            return {
                medium: e,
                source: t,
                campaign: a
            }
        }
        function w(e) {
            return "utm_source=" + e.source + "&utm_medium=" + e.medium + "&utm_campaign=" + e.campaign
        }
        function N(e) {
            return "utm_" === e.slice(0, 4)
        }
        t.makeUtm = C,
        t.getUtm = function(e, t) {
            return P[e][t] ? P[e][t] : (console.warn("WARN @ssr-frontend/packages-util-utm missing UTM. " + e + " from UtmKeys and " + t + " from UtmFromKeys do not have a UTM. See the utms object in packages/util-utm/index.ts"), {})
        },
        t.makeEncodedUtm = function(e, t) {
            return w(P[e][t])
        },
        t.encodeUtm = w,
        t.isUtmParam = N,
        t.removeUtmParams = function() {
            if (k.canUseHistory() && k.canUseLocation() && history && history.replaceState && location.search) {
                var e = location.search.slice(1).split("&"),
                    t = e.filter((function(e) {
                        return !N(e)
                    }));
                if (t.length < e.length) {
                    var a = t.length ? "?" + t.join("&") : "",
                        n = location.pathname + a + location.hash;
                    history.replaceState({}, "", n)
                }
            }
        }
    },
    qFvJ: function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var c in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
                    return e
                }).apply(this, arguments)
            },
            c = this && this.__createBinding || (Object.create ? function(e, t, a, n) {
                void 0 === n && (n = a),
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function() {
                        return t[a]
                    }
                })
            } : function(e, t, a, n) {
                void 0 === n && (n = a),
                e[n] = t[a]
            }),
            r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            i = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && c(t, e, a);
                return r(t, e), t
            },
            _ = this && this.__read || function(e, t) {
                var a = "function" == typeof Symbol && e[Symbol.iterator];
                if (!a)
                    return e;
                var n,
                    c,
                    r = a.call(e),
                    i = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(n = r.next()).done;)
                        i.push(n.value)
                } catch (_) {
                    c = {
                        error: _
                    }
                } finally {
                    try {
                        n && !n.done && (a = r.return) && a.call(r)
                    } finally {
                        if (c)
                            throw c.error
                    }
                }
                return i
            },
            o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = o(a("TSYQ")),
            l = i(a("q1tI")),
            p = o(a("EyDb")),
            u = a("Cv17"),
            d = a("7xpE"),
            m = o(a("k9qm")),
            f = a("K9qA"),
            E = a("+Ded"),
            A = a("MnUf"),
            h = a("yf/i"),
            g = a("B7Ld"),
            T = a("5l5+");
        a("lT2R");
        var b = p.default(A.ALGOLIA_SEARCH_APP_ID, A.ALGOLIA_SEARCH_API_KEY),
            O = {
                search: function(e) {
                    var t = e.map((function(e) {
                        var t;
                        return n(n({}, e), {
                            params: n(n({}, e.params), {
                                query: (null === (t = e.params) || void 0 === t ? void 0 : t.query) ? e.params.query.trim() : ""
                            })
                        })
                    }));
                    return t.every((function(e) {
                        var t = e.params;
                        return !(null == t ? void 0 : t.query) || t.query.length < 3
                    })) ? Promise.resolve({
                        results: t.map((function() {
                            return {
                                hits: [],
                                nbHits: 0,
                                nbPages: 0,
                                page: 0,
                                processingTimeMS: 0,
                                query: ""
                            }
                        }))
                    }) : b.search(t)
                }
            };
        t.default = function(e) {
            var t = _(l.useState(!1), 2),
                a = t[0],
                n = t[1],
                c = _(l.useState(!1), 2),
                r = c[0],
                i = c[1],
                o = e.algoliaIndices,
                p = e.className,
                b = e.searchPageType,
                S = s.default(p, "o-global-search"),
                R = {
                    campaign: A.AlgoliaTag.PAGE_CAMPAIGN,
                    charity: A.AlgoliaTag.PAGE_CHARITY,
                    srp: A.AlgoliaTag.PAGE_SRP
                };
            m.default("init", {
                appId: A.ALGOLIA_SEARCH_APP_ID,
                apiKey: A.ALGOLIA_SEARCH_API_KEY
            });
            var y = function() {
                    n(!a),
                    setTimeout((function() {
                        i(!0)
                    }), 10)
                },
                v = function() {
                    i(!1)
                },
                k = function() {
                    r || n(!1)
                },
                P = l.default.createRef(),
                C = d.connectSearchBox((function(e) {
                    var t = e.currentRefinement,
                        a = e.refine;
                    return l.default.createElement("form", {
                        className: "o-global-search-inner",
                        onSubmit: function(e) {
                            return function(e, t, a) {
                                e.preventDefault(),
                                f.canUseWindow() && a && a.length > 0 && (window.location.href = "" + t + encodeURIComponent(a))
                            }(e, "/s?q=", t)
                        },
                        noValidate: !0,
                        action: ""
                    }, l.default.createElement(h.TextInput, {
                        autoComplete: "off",
                        autoFocus: !0,
                        className: "o-global-search-input",
                        componentRef: P,
                        dataElementId: "input_search",
                        id: "global-search",
                        name: "term",
                        onChange: function(e) {
                            return a(e.currentTarget.value)
                        },
                        placeholder: T.t("Find fundraisers by name or location"),
                        type: "search",
                        value: t
                    }), t && l.default.createElement(h.IconButton, {
                        ariaLabel: T.t("Clear search query"),
                        className: "o-global-search-clear-button",
                        iconName: "delete",
                        iconType: "ui",
                        onClick: function() {
                            a(""),
                            P.current && P.current.focus()
                        }
                    }))
                })),
                w = l.default.createElement(h.Label, {
                    className: "heading-5 o-global-search-label",
                    htmlFor: "global-search"
                }, l.default.createElement(h.UIIcon, {
                    name: "search",
                    textPairing: "prependText"
                }), l.default.createElement(h.HtmlSpace, {
                    type: "non-breaking"
                }), l.default.createElement("span", null, T.t("Search GoFundMe"))),
                N = [A.AlgoliaTag.PLATFORM_WEB];
            return b && N.push(R[b]), f.canUseDom() && N.push(window.innerWidth >= 960 ? A.AlgoliaTag.VIEW_DESKTOP : A.AlgoliaTag.VIEW_MOBILE), l.default.createElement(h.Toggle, {
                on: a
            }, (function() {
                return l.default.createElement(u.InstantSearch, {
                    searchClient: O,
                    indexName: o.queryIndex
                }, l.default.createElement(u.Configure, {
                    clickAnalytics: !0,
                    analyticsTags: N,
                    attributesToRetrieve: ["query"],
                    attributesToHighlight: ["query"],
                    userToken: E.uuid.getDistinctId()
                }), l.default.createElement(h.Button, {
                    ariaExpanded: r,
                    ariaLabel: T.t("Search"),
                    className: "o-global-search-open-button",
                    dataElementId: "btn_nav_search_icon",
                    onClick: y
                }, l.default.createElement(h.UIIcon, {
                    name: "search",
                    textPairing: "prependText"
                }), l.default.createElement("span", {
                    className: "show-for-large"
                }, T.t("Search"))), a && l.default.createElement(h.Drawer, {
                    className: S,
                    closeTriggerLabel: T.t("Close navigation menu"),
                    heading: l.default.createElement("div", {
                        className: "hide-for-large"
                    }, w),
                    isOpen: r,
                    onClose: v,
                    onTransitionEnd: k
                }, l.default.createElement("div", {
                    className: "hide-for-small-only hide-for-medium-only"
                }, w), l.default.createElement(C, null), l.default.createElement(g.SearchDropDown, {
                    algoliaIndices: o,
                    srpUrl: "/s?q="
                })))
            }))
        }
    },
    r15Y: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
            function e(e) {
                this.data = {},
                this.name = "GoogleAnalytics",
                this.ready = !1,
                this.GTMKey = "",
                this.GTMKey = e
            }
            return e.prototype.init = function() {
                "undefined" != typeof window && (window.dataLayer = window.dataLayer || [], this.ready = !0),
                "undefined" != typeof document && (this.GTMScript = document.createElement("script"), this.GTMScript.onload = function() {
                    window.dataLayer.push({
                        event: "gtm.js",
                        "gtm.start": (new Date).getTime()
                    })
                }, document.head && document.head.appendChild(this.GTMScript), this.GTMScript.async = !0, this.GTMScript.src = "https://www.googletagmanager.com/gtm.js?id=" + this.GTMKey)
            }, e.prototype.instanceOfDataType = function(e) {
                return "type" in e && "mp_page_view" === e.type
            }, e.prototype.prepareData = function(e, t) {
                var a = {};
                return e.personId && (a.userDetails = {
                    userId: e.personId
                }), e.fundId && (a.fundDetails = {
                    fundId: e.fundId
                }, e.fundAmountRaised && (a.fundDetails.fundAmountRaised = e.fundAmountRaised), e.fundCountry && (a.fundDetails.fundCountry = e.fundCountry), e.fundDonationCount && (a.fundDetails.fundDonationCount = e.fundDonationCount), e.fundName && (a.fundDetails.fundName = e.fundName), e.fundUrl && (a.fundDetails.fundUrl = e.fundUrl), e.donation && (a.ecommerce = {
                    checkout: {
                        products: [{
                            brand: e.donation.currency,
                            currency: e.donation.currency,
                            id: e.fundId,
                            price: e.donation.donationAmount
                        }]
                    },
                    purchase: {
                        actionField: {
                            currency: e.donation.currency,
                            id: e.donation.donationId,
                            revenue: e.donation.donationAmount
                        },
                        products: [{
                            id: e.fundId,
                            name: e.fundName,
                            quantity: e.donation.quantity
                        }]
                    }
                })), a
            }, e.prototype.push = function(e, t) {
                return window.dataLayer.push(e), {}
            }, e.prototype.isReady = function() {
                return this.ready
            }, e.prototype.setReady = function() {
                this.ready = !0
            }, e.prototype.getScript = function() {
                return this.GTMScript
            }, e
        }();
        t.default = n
    },
    sUL3: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.isValidImage = t.useWindowResize = void 0;
        var n = a("q1tI"),
            c = a("K9qA");
        t.useWindowResize = function(e) {
            c.canUseWindow() && n.useEffect((function() {
                return e(), window.addEventListener("resize", e), function() {
                    window.removeEventListener("resize", e)
                }
            }), [])
        },
        t.isValidImage = function(e) {
            return new Promise((function(t) {
                var a = document.createElement("img");
                a.onerror = function() {
                    return t(!1)
                },
                a.onload = function() {
                    return t(!0)
                },
                a.src = e
            }))
        }
    },
    sesW: function(e, t, a) {
        "use strict";
        var n = a("8YN3");
        t.a = function(e, t) {
            var a;
            void 0 === t && (t = !0);
            var c = new Promise((function(n) {
                a = setTimeout(n, e, t)
            }));
            return c[n.a] = function() {
                clearTimeout(a)
            }, c
        }
    },
    ss5u: function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
            return (n = Object.assign || function(e) {
                for (var t, a = 1, n = arguments.length; a < n; a++)
                    for (var c in t = arguments[a])
                        Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
                return e
            }).apply(this, arguments)
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = a("QuWQ"),
            r = function() {
                function e(e, t) {
                    this.data = {},
                    this.name = "Magritte",
                    this.targetUrlTracking = "",
                    this.dataMap = {
                        channelFrom: "channelfrom",
                        charityId: "charity_id",
                        distinctId: "distinct_id",
                        donationId: "donation_id",
                        elementId: "elementid",
                        fundId: "fund_id",
                        fundName: "fund_name",
                        fundUrl: "fund_url",
                        ipAddress: "ip_address",
                        paidCode: "paid_code",
                        pcCode: "pc_code",
                        personId: "person_id",
                        senderType: "sender_type",
                        shareLocation: "share_location",
                        subChannel: "subchannel",
                        userId: "user_id",
                        viewId: "viewid"
                    },
                    this.targetUrlTracking = t,
                    this.httpRequestClient = e
                }
                return e.prototype.init = function() {}, e.prototype.instanceOfDataType = function(e) {
                    return "type" in e && ("mp_page_click" === e.type || "click" === e.type || "mp_page_view" === e.type || "share" === e.type || "web_client_event" === e.type || "checkout:enter" === e.type)
                }, e.prototype.getDefaultData = function() {
                    return {
                        $browser: c.browser(),
                        $current_url: location.href,
                        $device: c.device(),
                        $os: c.getOs(),
                        $referrer: document.referrer,
                        $referring_domain: c.referringDomain(),
                        $screen_height: screen.height,
                        $screen_width: screen.width,
                        mp_lib: "web",
                        user_agent: navigator.userAgent
                    }
                }, e.prototype.getGFMDefaultData = function() {
                    return {
                        browser: c.browser(),
                        lang: "",
                        os: c.getOs(),
                        paid_code: ""
                    }
                }, e.prototype.prepareData = function(e, t) {
                    if (("click" === e.type || "mp_page_click" === e.type) && !e.viewId && t) {
                        var a = t.closest("[data-view-id]");
                        e.viewId = a && a instanceof HTMLElement ? a.dataset.viewId : ""
                    }
                    if (("click" === e.type || "mp_page_click" === e.type) && !e.elementId && t) {
                        var n = t.closest("[data-element-id]");
                        e.elementId = n && n instanceof HTMLElement ? n.dataset.elementId : ""
                    }
                    "click" === e.type && (e.type = "mp_page_click");
                    var c = this.getDefaultData(),
                        r = this.getGFMDefaultData(),
                        i = e.gfm || {};
                    return Object.keys(c).forEach((function(t) {
                        e[t] = e[t] || c[t]
                    })), Object.keys(r).forEach((function(e) {
                        i[e] = i[e] || r[e]
                    })), e.gfm = i, this.setOwnData(e)
                }, e.prototype.push = function(e, t) {
                    var a = this.setOwnData(e);
                    return this.track(a, t)
                }, e.prototype.isReady = function() {
                    return !!this.data.distinctId
                }, e.prototype.getHttpRequestClient = function() {
                    return this.httpRequestClient
                }, e.prototype.setOwnData = function(e) {
                    return e.distinctId && (this.data.distinctId = e.distinctId), e.userAgent && (this.data.userAgent = e.userAgent), e.viewId && (this.data.viewId = e.viewId), e.fundId && (this.data.fundId = e.fundId), e.fundUrl && (this.data.fundUrl = e.fundUrl), e.charityId && (this.data.charityId = e.charityId), e.userId && (this.data.userId = e.userId), n(n({}, this.data), e)
                }, e.prototype.convertData = function(e) {
                    var t = this,
                        a = {};
                    return Object.keys(e).forEach((function(n) {
                        "object" == typeof e[n] ? a[n] = t.convertData(e[n]) : t.dataMap[n] ? a[t.dataMap[n]] = e[n] : a[n] = e[n]
                    })), a
                }, e.prototype.track = function(e, t) {
                    var a = {
                        data: {
                            event: e.type,
                            properties: this.convertData(e)
                        },
                        platform: "webclient"
                    };
                    return this.httpRequestClient.post(this.targetUrlTracking, a).then((function(e) {
                        t && t(a, e)
                    })), a
                }, e
            }();
        t.default = r
    },
    uDfO: function(e, t, a) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function(e, t, a, n) {
                void 0 === n && (n = a),
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function() {
                        return t[a]
                    }
                })
            } : function(e, t, a, n) {
                void 0 === n && (n = a),
                e[n] = t[a]
            }),
            c = this && this.__exportStar || function(e, t) {
                for (var a in e)
                    "default" === a || t.hasOwnProperty(a) || n(t, e, a)
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        c(a("8LTy"), t),
        c(a("WRpi"), t),
        c(a("B7Ld"), t)
    },
    "uJ/r": function(e, t, a) {
        "use strict";
        a.r(t)
    },
    uJzr: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.device = t.referringDomain = t.browser = t.getOs = t.isFacebookBrowser = t.isAndroid = t.getUserAgent = t.hasUserAgent = void 0;
        var n = !1;
        function c() {
            return "undefined" != typeof navigator && navigator.userAgent
        }
        function r() {
            return !n && c() && (n = navigator.userAgent.toLowerCase()), n
        }
        t.hasUserAgent = c,
        t.getUserAgent = r,
        t.isAndroid = function() {
            try {
                var e = r();
                return !!e && !!e.match(/android/)
            } catch (t) {
                return !1
            }
        },
        t.isFacebookBrowser = function() {
            try {
                var e = r();
                return !!e && !!e.match(/fban|fbav|fb_iab/)
            } catch (t) {
                return !1
            }
        },
        t.getOs = function() {
            var e = navigator.userAgent;
            return /Windows/i.test(e) ? /Phone/.test(e) ? "Windows Mobile" : "Windows" : /(iPhone|iPad|iPod)/.test(e) ? "iOS" : /Android/.test(e) ? "Android" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : /Mac/i.test(e) ? "Mac OS X" : /Linux/.test(e) ? "Linux" : ""
        },
        t.browser = function() {
            var e = navigator.vendor || "",
                t = navigator.userAgent;
            return -1 !== t.indexOf("Opera") ? -1 !== t.indexOf("Mini") ? "Opera Mini" : "Opera" : /(BlackBerry|PlayBook|BB10)/i.test(t) ? "BlackBerry" : /fban|fbav/i.test(t) ? "Facebook Mobile" : /(edge|edgios|edga|edg)/i.test(t) ? "Edge" : -1 !== t.indexOf("Chrome") ? "Chrome" : -1 !== t.indexOf("CriOS") ? "Chrome iOS" : /fban|fbav/i.test(t) ? "Facebook Mobile" : -1 !== e.indexOf("Apple") ? -1 !== t.indexOf("Mobile") ? "Mobile Safari" : "Safari" : -1 !== t.indexOf("Android") ? "Android Mobile" : -1 !== t.indexOf("Konqueror") ? "Konqueror" : -1 !== t.indexOf("Firefox") ? "Firefox" : -1 !== t.indexOf("MSIE") || -1 !== t.indexOf("Trident/") ? "Internet Explorer" : -1 !== t.indexOf("Gecko") ? "Mozilla" : ""
        },
        t.referringDomain = function() {
            var e = document.referrer.split("/");
            return e.length >= 3 ? e[2] : ""
        },
        t.device = function() {
            var e = navigator.userAgent;
            return /iPad/.test(e) ? "iPad" : /iPod/.test(e) ? "iPod Touch" : /iPhone/.test(e) ? "iPhone" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : /Windows Phone/i.test(e) ? "Windows Phone" : /Android/.test(e) ? "Android" : ""
        }
    },
    uLYH: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("R/2T");
        Object.defineProperty(t, "ABTest", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    uOUg: function(e) {
        e.exports = JSON.parse('{"de_DE":{"packages-component-search":{"by":"von","for":"für","Related searches":"Suchanfragen mit ähnlichem Inhalt","Please try a different search":"Bitte versuche es mit einem anderen Suchbegriff","See all {{number}} fundraisers":"1 Kampagne anzeigen","See {{number}} fundraiser":"{{number}} Kampagne(n) anzeigen","Find fundraisers by name or location":"Spendenaktionen nach Namen oder Ort suchen","Clear search query":"Suchanfrage löschen","Search GoFundMe":"GoFundMe durchsuchen","Search":"Suche","Close navigation menu":"Navigationsmenü schließen"}},"fr_FR":{"packages-component-search":{"by":"par","for":"pour","Related searches":"Recherches connexes","Please try a different search":"Lancez une autre recherche","See all {{number}} fundraisers":"Afficher les {{number}} collectes de fonds","See {{number}} fundraiser":"Afficher {{number}} collecte de fonds","Find fundraisers by name or location":"Rechercher des collectes de fonds par nom ou par ville","Clear search query":"Effacer votre requête de recherche","Search GoFundMe":"Rechercher sur GoFundMe","Search":"Rechercher","Close navigation menu":"Fermer le menu de navigation"}},"en_GB":{"packages-component-search":{"by":"by","for":"for","Related searches":"Related searches","Please try a different search":"Please try a different search","See all {{number}} fundraisers":"See all {{number}} fundraisers","See {{number}} fundraiser":"See {{number}} fundraiser","Find fundraisers by name or location":"Find fundraisers by name or location","Clear search query":"Clear search query","Search GoFundMe":"Search GoFundMe","Search":"Search","Close navigation menu":"Close navigation menu"}},"es_ES":{"packages-component-search":{"by":"por","for":"para","Related searches":"Búsquedas relacionadas","Please try a different search":"Por favor, prueba a hacer una búsqueda diferente","See all {{number}} fundraisers":"Ver las {{number}} campañas","See {{number}} fundraiser":"Ver {{number}} recaudación de fondos","Find fundraisers by name or location":"Buscar campañas por nombre o ubicación","Clear search query":"Borrar consulta de búsqueda","Search GoFundMe":"Buscar en GoFundMe","Search":"Buscar","Close navigation menu":"Cerrar el menú de navegación"}},"it_IT":{"packages-component-search":{"by":"da","for":"per","Related searches":"Ricerche correlate","Please try a different search":"Prova con una ricerca diversa","See all {{number}} fundraisers":"Vedi tutte le {{number}} raccolte fondi","See {{number}} fundraiser":"Vedi {{number}} raccolta fondi","Find fundraisers by name or location":"Trova raccolte fondi in base al nome o al luogo","Clear search query":"Cancella la ricerca","Search GoFundMe":"Cerca in GoFundMe","Search":"Cerca","Close navigation menu":"Chiudi il menu di navigazione"}},"nl_NL":{"packages-component-search":{"by":"op","for":"voor","Related searches":"Verwante zoekopdrachten","Please try a different search":"Probeer een andere zoekopdracht","See all {{number}} fundraisers":"Alle {{number}} inzamelingsacties weergeven","See {{number}} fundraiser":"{{number}} inzamelingsactie weergeven","Find fundraisers by name or location":"Zoeken naar titel of locatie van inzamelingsacties","Clear search query":"Zoekopdracht wissen","Search GoFundMe":"Zoeken op GoFundMe","Search":"Zoeken","Close navigation menu":"Navigatiemenu sluiten"}},"pt_BR":{"packages-component-search":{"by":"por","for":"para","Related searches":"Pesquisas relacionados","Please try a different search":"Tente fazer outra pesquisa","See all {{number}} fundraisers":"Ver todas as {{number}} campanhas","See {{number}} fundraiser":"Ver {{number}} campanha","Find fundraisers by name or location":"Procurar campanhas por nome ou local","Clear search query":"Limpar consulta de pesquisa","Search GoFundMe":"Pesquisar no GoFundMe","Search":"Pesquisar","Close navigation menu":"Fechar menu de navegação"}},"fr_CA":{"packages-component-search":{"by":"par","for":"pour","Related searches":"Recherches connexes","Please try a different search":"Veuillez essayer une autre recherche","See all {{number}} fundraisers":"Afficher les {{number}} collectes de fonds","See {{number}} fundraiser":"Afficher {{number}} levée de fonds","Find fundraisers by name or location":"Rechercher des levées de fonds par nom ou par ville","Clear search query":"Effacer votre requête de recherche","Search GoFundMe":"Rechercher sur GoFundMe","Search":"Rechercher","Close navigation menu":"Fermer le menu de navigation"}},"en_US":{"packages-component-search":{"by":"by","for":"for","Related searches":"Related searches","Please try a different search":"Please try a different search","See all {{number}} fundraisers":"See all {{number}} fundraisers","See {{number}} fundraiser":"See {{number}} fundraiser","Find fundraisers by name or location":"Find fundraisers by name or location","Clear search query":"Clear search query","Search GoFundMe":"Search GoFundMe","Search":"Search","Close navigation menu":"Close navigation menu"}}}')
    },
    uP1p: function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return o
        })),
        a.d(t, "b", (function() {
            return d
        })),
        a.d(t, "c", (function() {
            return A
        })),
        a.d(t, "d", (function() {
            return i
        })),
        a.d(t, "e", (function() {
            return p
        })),
        a.d(t, "f", (function() {
            return E
        })),
        a.d(t, "g", (function() {
            return r
        })),
        a.d(t, "h", (function() {
            return s
        })),
        a.d(t, "i", (function() {
            return u
        })),
        a.d(t, "j", (function() {
            return l
        })),
        a.d(t, "k", (function() {
            return _
        })),
        a.d(t, "l", (function() {
            return m
        })),
        a.d(t, "m", (function() {
            return f
        })),
        a.d(t, "n", (function() {
            return c
        }));
        var n = a("8YN3"),
            c = function(e) {
                return null == e
            },
            r = function(e) {
                return null != e
            },
            i = function(e) {
                return "function" == typeof e
            },
            _ = function(e) {
                return "string" == typeof e
            },
            o = Array.isArray,
            s = function(e) {
                return e && !o(e) && "object" == typeof e
            },
            l = function(e) {
                return e && i(e.then)
            },
            p = function(e) {
                return e && i(e.next) && i(e.throw)
            },
            u = function e(t) {
                return t && (_(t) || f(t) || i(t) || o(t) && t.every(e))
            },
            d = function(e) {
                return e && i(e.take) && i(e.close)
            },
            m = function(e) {
                return i(e) && e.hasOwnProperty("toString")
            },
            f = function(e) {
                return Boolean(e) && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
            },
            E = function(e) {
                return d(e) && e[n.e]
            },
            A = function(e) {
                return e && e[n.c]
            }
    },
    v2ML: function(e, t, a) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function(e, t, a, n) {
                void 0 === n && (n = a),
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function() {
                        return t[a]
                    }
                })
            } : function(e, t, a, n) {
                void 0 === n && (n = a),
                e[n] = t[a]
            }),
            c = this && this.__exportStar || function(e, t) {
                for (var a in e)
                    "default" === a || t.hasOwnProperty(a) || n(t, e, a)
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        c(a("uLYH"), t),
        c(a("+RWW"), t),
        c(a("B+IZ"), t)
    },
    "wE+H": function(e, t, a) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function(e, t, a, n) {
                void 0 === n && (n = a),
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function() {
                        return t[a]
                    }
                })
            } : function(e, t, a, n) {
                void 0 === n && (n = a),
                e[n] = t[a]
            }),
            c = this && this.__exportStar || function(e, t) {
                for (var a in e)
                    "default" === a || t.hasOwnProperty(a) || n(t, e, a)
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        c(a("5YpV"), t),
        c(a("HJxA"), t)
    },
    wG7O: function(e, t, a) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function(e, t, a, n) {
                void 0 === n && (n = a),
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function() {
                        return t[a]
                    }
                })
            } : function(e, t, a, n) {
                void 0 === n && (n = a),
                e[n] = t[a]
            }),
            c = this && this.__exportStar || function(e, t) {
                for (var a in e)
                    "default" === a || t.hasOwnProperty(a) || n(t, e, a)
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        c(a("VZmU"), t)
    },
    x060: function(e, t, a) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function(e, t, a, n) {
                void 0 === n && (n = a),
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function() {
                        return t[a]
                    }
                })
            } : function(e, t, a, n) {
                void 0 === n && (n = a),
                e[n] = t[a]
            }),
            c = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            r = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && n(t, e, a);
                return c(t, e), t
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.FacebookSDK = r(a("aC4L"))
    },
    zE3r: function(e, t, a) {
        "use strict";
        a.r(t),
        t.default = a.p + "static/media/favicon-32x32.f2141bd20c687e8b2cb61f21671a1c66.png"
    }
}]);

