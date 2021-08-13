/*! For license information please see main~1aedbb0d.97c590f442171411b824.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([[0], {
    "//zD": function(e, a, n) {
        "use strict";
        var o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.setGDPRPref = a.areFunctionalCookiesAllowed = a.areMarketingCookiesAllowed = a.GDPR_COOKIE_CURRENT_VERSION = a.GDPR_COOKIE_KEY = a.removeLastDonationCookie = a.getLastCheckoutId = a.getLastDonationId = a.getLastDonation = void 0;
        var t = n("Le2r"),
            r = n("x060"),
            i = n("8QVh"),
            s = o(n("p46w"));
        a.getLastDonation = function(e) {
            var a = s.default.get("donations." + e),
                n = {
                    amount: 0,
                    created_at: "",
                    donation_id: 0,
                    facebookId: "",
                    is_anonymous: !0,
                    is_offline: !1,
                    name: "",
                    profile_url: ""
                };
            if ("string" == typeof a) {
                var o = decodeURIComponent(a);
                try {
                    var t = JSON.parse(o);
                    n.amount = parseInt(t.amount, 10) || 0,
                    n.created_at = t.createdAt || "",
                    n.donation_id = parseInt(t.donationId, 10) || 0,
                    n.facebookId = t.facebookId || "",
                    n.profile_url = t.facebookId ? r.FacebookSDK.getProfilePicture(t.facebookId) : "",
                    n.name = (t.firstName || "") + (t.lastName ? " " + t.lastName : "") + " ",
                    n.is_anonymous = t.isAnonymous || !1
                } catch (i) {
                    return n
                }
            }
            return n
        },
        a.getLastDonationId = function() {
            var e = s.default.get("df") || "0";
            return parseInt(e, 10)
        },
        a.getLastCheckoutId = function() {
            var e = s.default.get("ucid") || "0";
            return parseInt(e, 10)
        },
        a.removeLastDonationCookie = function(e) {
            s.default.remove("donations." + e, {
                domain: "." + i.getDomain(),
                path: "/"
            })
        },
        a.GDPR_COOKIE_KEY = "gfm_gdpr",
        a.GDPR_COOKIE_CURRENT_VERSION = "1.0";
        var u = {
            f: 0,
            m: 0,
            v: a.GDPR_COOKIE_CURRENT_VERSION
        };
        function d() {
            var e,
                n = t.Cookies.getItem(a.GDPR_COOKIE_KEY) || "";
            try {
                (e = JSON.parse(n)).f = e.f || u.f,
                e.m = e.m || u.m,
                e.v = e.v || u.v
            } catch (o) {
                e = u
            }
            return e
        }
        a.areMarketingCookiesAllowed = function() {
            var e = d();
            return e.v === a.GDPR_COOKIE_CURRENT_VERSION && !!e.m
        },
        a.areFunctionalCookiesAllowed = function() {
            var e = d();
            return e.v === a.GDPR_COOKIE_CURRENT_VERSION && !!e.f
        },
        a.setGDPRPref = function(e) {
            var n = {
                f: e.functional ? 1 : 0,
                m: e.marketing ? 1 : 0,
                v: a.GDPR_COOKIE_CURRENT_VERSION
            };
            return t.Cookies.setItem(a.GDPR_COOKIE_KEY, JSON.stringify(n), void 0, "/", "." + i.getDomain())
        }
    },
    "/EQP": function(e, a, n) {
        "use strict";
        var o;
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        function(e) {
            e.GET_SHORTEN_SHARE_UTM_URL_FAIULRE = "GET_SHORTEN_SHARE_UTM_URL_FAILURE",
            e.GET_SHORTEN_SHARE_UTM_URL_IN_PROGRESS = "GET_SHORTEN_SHARE_UTM_URL_IN_PROGRESS",
            e.GET_SHORTEN_SHARE_UTM_URL_SUCCESS = "GET_SHORTEN_SHARE_UTM_URL_SUCCESS",
            e.GET_BATCH_SHORTEN_SHARE_UTM_URL_IN_PROGRESS = "GET_BATCH_SHORTEN_SHARE_UTM_URL_IN_PROGRESS"
        }(o || (o = {})),
        a.default = o
    },
    "/Irm": function(e, a, n) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.handleServiceError = a.getTeamInviteEmailPreview = void 0;
        var o = n("7MwF"),
            t = n("kLb9"),
            r = n("8QVh").getDomain(),
            i = o.isDocker() ? "http://native-gateway/web-gateway/v1/template" : "https://gateway." + r + "/web-gateway/v1/template";
        a.getTeamInviteEmailPreview = function(e) {
            var a = i + "/team_invite_email";
            return t.HttpClient.post(a, e)
        };
        a.handleServiceError = function(e) {
            var a = {
                error: !0,
                statusCode: 500
            };
            if (e && e.response) {
                var n = e.response.data;
                a.statusCode = e.response.status,
                a.error = n
            }
            return a
        }
    },
    "0/Dm": function(e, a, n) {
        "use strict";
        var o = this && this.__generator || function(e, a) {
            var n,
                o,
                t,
                r,
                i = {
                    label: 0,
                    sent: function() {
                        if (1 & t[0])
                            throw t[1];
                        return t[1]
                    },
                    trys: [],
                    ops: []
                };
            return r = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }), r;
            function s(r) {
                return function(s) {
                    return function(r) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; i;)
                            try {
                                if (n = 1, o && (t = 2 & r[0] ? o.return : r[0] ? o.throw || ((t = o.return) && t.call(o), 0) : o.next) && !(t = t.call(o, r[1])).done)
                                    return t;
                                switch (o = 0, t && (r = [2 & r[0], t.value]), r[0]) {
                                case 0:
                                case 1:
                                    t = r;
                                    break;
                                case 4:
                                    return i.label++, {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                    o = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = i.ops.pop(),
                                    i.trys.pop();
                                    continue;
                                default:
                                    if (!(t = i.trys, (t = t.length > 0 && t[t.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!t || r[1] > t[0] && r[1] < t[3])) {
                                        i.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && i.label < t[1]) {
                                        i.label = t[1],
                                        t = r;
                                        break
                                    }
                                    if (t && i.label < t[2]) {
                                        i.label = t[2],
                                        i.ops.push(r);
                                        break
                                    }
                                    t[2] && i.ops.pop(),
                                    i.trys.pop();
                                    continue
                                }
                                r = a.call(e, i)
                            } catch (s) {
                                r = [6, s],
                                o = 0
                            } finally {
                                n = t = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, s])
                }
            }
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var t = n("5rFJ");
        a.default = function() {
            return o(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, t.all([])];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
    },
    "0aCL": function(e, a, n) {
        "use strict";
        var o = this && this.__rest || function(e, a) {
            var n = {};
            for (var o in e)
                Object.prototype.hasOwnProperty.call(e, o) && a.indexOf(o) < 0 && (n[o] = e[o]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var t = 0;
                for (o = Object.getOwnPropertySymbols(e); t < o.length; t++)
                    a.indexOf(o[t]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[t]) && (n[o[t]] = e[o[t]])
            }
            return n
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.uploadImage = a.submitComment = a.signUpFacebookUser = a.signUpFacebookPerson = a.signUpEmailUser = a.signUpEmailPerson = a.setFacebookId = a.sendMessageToCampaignOrganizer = a.trackShare = a.getReceiptFromEncryptedDonationId = a.getBigWebDonationIdFromUC = a.createCORole = a.acceptTeamInvitation = void 0;
        var t = n("7MwF"),
            r = n("kLb9"),
            i = n("8QVh").getDomain(),
            s = t.isDocker() ? "http://co/co/v1" : "https://api." + i + "/co/v1";
        a.trackShare = function(e) {
            var a = e.shareType,
                n = o(e, ["shareType"]),
                t = s + "/track/shareflow/share/" + a;
            return r.HttpClient.post(t, n)
        };
        a.sendMessageToCampaignOrganizer = function(e) {
            var a = s + "/funds/" + e.contactFundUrl + "/contactCampaignOrganizer",
                n = {
                    email: e.contactEmail,
                    fullname: e.contactName,
                    message: e.contactMessage
                };
            return e.captchaResponse && (n.captcharesponse = e.captchaResponse, n.source = "contact_co"), r.HttpClient.post(a, n)
        };
        a.createCORole = function() {
            return r.HttpClient.post(s + "/person/role/co", {})
        };
        a.acceptTeamInvitation = function(e) {
            var a = s + "/funds/" + e.campaign + "/teaminvitations/" + e.invitationHash + "/accept";
            return r.HttpClient.post(a, {})
        };
        a.signUpEmailUser = function(e) {
            var a = s + "/user/signup/email";
            return r.HttpClient.post(a, {
                acknowledge_unsupported_country: !0,
                build_fund: !1,
                email: e.email,
                full_name: e.firstName + " " + e.lastName,
                password: e.password,
                set_cookies: !0
            }, {
                validateStatus: function(e) {
                    return e >= 200 && e <= 302
                },
                withCredentials: !0
            })
        };
        a.signUpEmailPerson = function(e) {
            var a = s + "/person/signup/email";
            return r.HttpClient.post(a, {
                acknowledge_unsupported_country: !0,
                build_fund: !1,
                email: e.email,
                full_name: e.firstName + " " + e.lastName,
                password: e.password,
                set_cookies: !0
            }, {
                validateStatus: function(e) {
                    return e >= 200 && e <= 302
                },
                withCredentials: !0
            })
        };
        a.signUpFacebookPerson = function(e) {
            var a = s + "/person/signup/facebook";
            return r.HttpClient.post(a, {
                acknowledge_unsupported_country: !0,
                build_fund: !1,
                email: e.email,
                facebook_id: e.facebookId,
                facebook_token: e.facebookToken,
                set_cookies: !0
            }, {
                validateStatus: function(e) {
                    return e >= 200 && e <= 302
                },
                withCredentials: !0
            })
        };
        a.signUpFacebookUser = function(e) {
            var a = s + "/user/signup/facebook";
            return r.HttpClient.post(a, {
                acknowledge_unsupported_country: !0,
                build_fund: !1,
                email: e.email,
                facebook_id: e.facebookId,
                facebook_token: e.facebookToken,
                set_cookies: !0
            }, {
                validateStatus: function(e) {
                    return e >= 200 && e <= 302
                },
                withCredentials: !0
            })
        };
        a.submitComment = function(e) {
            var a = s + "/funds/" + e.fundUrl + "/donations/" + (e.donationIdEncrypted ? e.donationIdEncrypted : "checkout/" + e.checkoutId || !1) + "/comment";
            return r.HttpClient.post(a, {
                facebookId: e.facebookId,
                firstname: e.fullName,
                images: e.images,
                text: e.text
            })
        };
        a.setFacebookId = function(e) {
            var a = s + "/funds/" + e.fundUrl + "/donations/" + (e.donationIdEncrypted ? e.donationIdEncrypted : "checkout/" + e.checkoutId || !1) + "/facebook_id";
            return r.HttpClient.post(a, {
                facebookId: e.facebookId || "",
                facebookToken: e.facebookToken || ""
            })
        };
        a.uploadImage = function(e) {
            var a = s + "/uploads/content",
                n = new FormData;
            return n.append("file", e.file), r.HttpClient.post(a, n)
        };
        a.getBigWebDonationIdFromUC = function(e) {
            var a = e.join("&checkout_id[]="),
                n = s + "/donations/from_uc_id?checkout_id[]=" + a;
            return r.HttpClient.get(n)
        };
        a.getReceiptFromEncryptedDonationId = function(e) {
            return r.HttpClient.get(s + "/donations/" + e + "/receipt-details")
        }
    },
    "1U1D": function(e, a, n) {
        "use strict";
        var o = this && this.__createBinding || (Object.create ? function(e, a, n, o) {
                void 0 === o && (o = n),
                Object.defineProperty(e, o, {
                    enumerable: !0,
                    get: function() {
                        return a[n]
                    }
                })
            } : function(e, a, n, o) {
                void 0 === o && (o = n),
                e[o] = a[n]
            }),
            t = this && this.__setModuleDefault || (Object.create ? function(e, a) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: a
                })
            } : function(e, a) {
                e.default = a
            }),
            r = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var a = {};
                if (null != e)
                    for (var n in e)
                        Object.hasOwnProperty.call(e, n) && o(a, e, n);
                return t(a, e), a
            };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = r(n("N25J"));
        a.default = i
    },
    "26HO": function(e, a, n) {
        "use strict";
        var o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var t = n("YgTb"),
            r = o(n("EcZt")),
            i = n("wQmL"),
            s = function(e, a) {
                var n;
                throw new i.SubmissionError(((n = {})[e] = a, n))
            };
        a.default = {
            submissionError: s,
            submitSignUpEmailForm: function(e, a, n) {
                e.firstName ? e.firstName.length > 50 && s("firstName", t.t("Please enter a shorter first name.")) : s("firstName", t.t("Please enter your first name")),
                e.lastName ? e.lastName.length > 50 && s("lastName", t.t("Please enter a shorter last name.")) : s("lastName", t.t("Please enter your last name")),
                e.email ? e.email.length > 255 ? s("email", t.t("Please enter a shorter email address.")) : /\S+@\S+\.\S+/.test(e.email) || s("email", t.t("Please enter a valid email address.")) : s("email", t.t("Please enter your email address")),
                e.emailConfirm ? e.emailConfirm !== e.email && s("emailConfirm", t.t("Your email address does not match.")) : s("emailConfirm", t.t("Please confirm your email address.")),
                e.password ? e.password.length < 12 ? s("password", t.t("Passwords must be at least twelve characters long.")) : e.password.length > 128 ? s("password", t.t("You have exceeded the maximum amount of characters.")) : /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9\s])(.+)$/.test(e.password) || s("password", t.t("Passwords must contain at least one number, symbol, uppercase letter, and lowercase letter.")) : s("password", t.t("Please enter a password."));
                var o = "user" === n.signUpAs ? r.default.USER_SIGNUP_EMAIL_IN_PROGRESS : r.default.PERSON_SIGNUP_EMAIL_IN_PROGRESS;
                a({
                    onFailure: n.onFailure,
                    onSuccess: n.onSuccess,
                    payload: e,
                    type: o
                }),
                a(i.startSubmit("signUpEmail"))
            }
        }
    },
    "2JF7": function(e, a, n) {
        "use strict";
        var o = this && this.__createBinding || (Object.create ? function(e, a, n, o) {
                void 0 === o && (o = n),
                Object.defineProperty(e, o, {
                    enumerable: !0,
                    get: function() {
                        return a[n]
                    }
                })
            } : function(e, a, n, o) {
                void 0 === o && (o = n),
                e[o] = a[n]
            }),
            t = this && this.__exportStar || function(e, a) {
                for (var n in e)
                    "default" === n || a.hasOwnProperty(n) || o(a, e, n)
            };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(n("kLtp"), a),
        t(n("JNAL"), a)
    },
    "2PPe": function(e, a, n) {
        "use strict";
        var o = this && this.__assign || function() {
                return (o = Object.assign || function(e) {
                    for (var a, n = 1, o = arguments.length; n < o; n++)
                        for (var t in a = arguments[n])
                            Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
                    return e
                }).apply(this, arguments)
            },
            t = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.initialState = void 0;
        var r = n("C0Xu"),
            i = t(n("p48P")),
            s = t(n("V/h/"));
        a.initialState = {
            captchaRequired: !1,
            captchaValid: !1,
            captchaValidating: !1,
            email: {
                error: {},
                status: r.LoadingStateStatus.DEFAULT
            },
            facebook: {
                error: {},
                status: r.LoadingStateStatus.DEFAULT
            },
            invisibleRecaptchaKey: void 0,
            isAuthenticated: !1,
            reCaptchaToken: void 0
        };
        a.default = s.default((function(e, a) {
            switch (a.type) {
            case i.default.SIGN_IN_FACEBOOK_IN_PROGRESS:
                return o(o({}, e), {
                    facebook: {
                        error: {},
                        status: r.LoadingStateStatus.PENDING
                    }
                });
            case i.default.SIGN_IN_FACEBOOK_SUCCESS:
                return o(o({}, e), {
                    facebook: {
                        error: {},
                        status: r.LoadingStateStatus.DEFAULT
                    }
                });
            case i.default.SIGN_IN_FACEBOOK_FAILURE:
                return o(o({}, e), {
                    facebook: {
                        error: a.payload,
                        status: r.LoadingStateStatus.DEFAULT
                    }
                });
            case i.default.SIGN_IN_CAPTCHA_REQUIRED:
                return o(o({}, e), {
                    captchaRequired: !0
                });
            case i.default.SIGN_IN_EMAIL_FAILURE:
                return o(o({}, e), {
                    captchaValid: !1,
                    reCaptchaToken: void 0
                });
            case i.default.VALIDATE_CAPTCHA_IN_PROGRESS:
                return o(o({}, e), {
                    captchaValid: !1,
                    captchaValidating: !0
                });
            case i.default.VALIDATE_CAPTCHA_FAILURE:
                return o(o({}, e), {
                    captchaValid: !1,
                    captchaValidating: !1
                });
            case i.default.VALIDATE_CAPTCHA_SUCCESS:
                return o(o({}, e), {
                    captchaValid: !0,
                    captchaValidating: !1
                });
            case i.default.RECAPTCHA_TOKEN_IN_PROGRESS:
            case i.default.RECAPTCHA_TOKEN_SUCCESS:
                return o(o({}, e), {
                    reCaptchaToken: a.payload
                });
            case i.default.GET_CAPTCHA_SUCCESS:
                return o(o({}, e), {
                    invisibleRecaptchaKey: a.payload.webInvisibleCaptchaKey
                });
            default:
                return e
            }
        }), a.initialState)
    },
    "2btX": function(e, a, n) {
        "use strict";
        var o = this && this.__assign || function() {
                return (o = Object.assign || function(e) {
                    for (var a, n = 1, o = arguments.length; n < o; n++)
                        for (var t in a = arguments[n])
                            Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
                    return e
                }).apply(this, arguments)
            },
            t = this && this.__generator || function(e, a) {
                var n,
                    o,
                    t,
                    r,
                    i = {
                        label: 0,
                        sent: function() {
                            if (1 & t[0])
                                throw t[1];
                            return t[1]
                        },
                        trys: [],
                        ops: []
                    };
                return r = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;
                function s(r) {
                    return function(s) {
                        return function(r) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; i;)
                                try {
                                    if (n = 1, o && (t = 2 & r[0] ? o.return : r[0] ? o.throw || ((t = o.return) && t.call(o), 0) : o.next) && !(t = t.call(o, r[1])).done)
                                        return t;
                                    switch (o = 0, t && (r = [2 & r[0], t.value]), r[0]) {
                                    case 0:
                                    case 1:
                                        t = r;
                                        break;
                                    case 4:
                                        return i.label++, {
                                            value: r[1],
                                            done: !1
                                        };
                                    case 5:
                                        i.label++,
                                        o = r[1],
                                        r = [0];
                                        continue;
                                    case 7:
                                        r = i.ops.pop(),
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(t = i.trys, (t = t.length > 0 && t[t.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === r[0] && (!t || r[1] > t[0] && r[1] < t[3])) {
                                            i.label = r[1];
                                            break
                                        }
                                        if (6 === r[0] && i.label < t[1]) {
                                            i.label = t[1],
                                            t = r;
                                            break
                                        }
                                        if (t && i.label < t[2]) {
                                            i.label = t[2],
                                            i.ops.push(r);
                                            break
                                        }
                                        t[2] && i.ops.pop(),
                                        i.trys.pop();
                                        continue
                                    }
                                    r = a.call(e, i)
                                } catch (s) {
                                    r = [6, s],
                                    o = 0
                                } finally {
                                    n = t = 0
                                }
                            if (5 & r[0])
                                throw r[1];
                            return {
                                value: r[0] ? r[1] : void 0,
                                done: !0
                            }
                        }([r, s])
                    }
                }
            },
            r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.workFbAuthenticateAndUpdatePerson = a.workFbAuthenticateAndUpdateDonation = a.workFbLogOut = a.workFbAuthenticateAndSignIn = a.workFbAuthenticate = void 0;
        var i = r(n("p48P")),
            s = r(n("EcZt")),
            u = r(n("mO48")),
            d = r(n("oxJe")),
            l = n("x060"),
            c = n("5rFJ");
        function m(e) {
            var a,
                n,
                r;
            return t(this, (function(t) {
                switch (t.label) {
                case 0:
                    return t.trys.push([0, 5, , 7]), [4, c.call(l.FacebookSDK.login)];
                case 1:
                    return a = t.sent(), [4, c.call(l.FacebookSDK.getMe)];
                case 2:
                    return n = t.sent(), [4, c.put({
                        payload: o(o({}, n), {
                            facebookId: a.userID,
                            facebookToken: a.accessToken
                        }),
                        type: d.default.FB_AUTHENTICATE_SUCCESS
                    })];
                case 3:
                    return t.sent(), [4, c.put({
                        onFailure: e.onFailure,
                        onSuccess: e.onSuccess,
                        payload: {
                            facebookId: a.userID,
                            facebookToken: a.accessToken
                        },
                        type: i.default.SIGN_IN_FACEBOOK_IN_PROGRESS
                    })];
                case 4:
                    return t.sent(), [3, 7];
                case 5:
                    return r = t.sent(), [4, c.put({
                        payload: r,
                        type: d.default.FB_AUTHENTICATE_FAILURE
                    })];
                case 6:
                    return t.sent(), [3, 7];
                case 7:
                    return [2]
                }
            }))
        }
        function p(e) {
            var a,
                n,
                r;
            return t(this, (function(e) {
                switch (e.label) {
                case 0:
                    return e.trys.push([0, 4, , 6]), [4, c.call(l.FacebookSDK.login)];
                case 1:
                    return a = e.sent(), [4, c.call(l.FacebookSDK.getMe)];
                case 2:
                    return n = e.sent(), [4, c.put({
                        payload: o(o({}, n), {
                            facebookId: a.userID,
                            facebookToken: a.accessToken
                        }),
                        type: d.default.FB_AUTHENTICATE_SUCCESS
                    })];
                case 3:
                    return e.sent(), [3, 6];
                case 4:
                    return r = e.sent(), [4, c.put({
                        payload: r,
                        type: d.default.FB_AUTHENTICATE_FAILURE
                    })];
                case 5:
                    return e.sent(), [3, 6];
                case 6:
                    return [2]
                }
            }))
        }
        function h(e) {
            var a,
                n;
            return t(this, (function(e) {
                switch (e.label) {
                case 0:
                    return e.trys.push([0, 3, , 5]), [4, c.call(l.FacebookSDK.logMeOut)];
                case 1:
                    return a = e.sent(), [4, c.put({
                        payload: a,
                        type: d.default.FB_LOGOUT_SUCCESS
                    })];
                case 2:
                    return e.sent(), [3, 5];
                case 3:
                    return n = e.sent(), [4, c.put({
                        payload: n,
                        type: d.default.FB_LOGOUT_FAILURE
                    })];
                case 4:
                    return e.sent(), [3, 5];
                case 5:
                    return [2]
                }
            }))
        }
        function f(e) {
            var a,
                n,
                r;
            return t(this, (function(t) {
                switch (t.label) {
                case 0:
                    return t.trys.push([0, 5, , 7]), [4, c.call(l.FacebookSDK.login)];
                case 1:
                    return a = t.sent(), [4, c.call(l.FacebookSDK.getMe)];
                case 2:
                    return n = t.sent(), [4, c.put({
                        payload: o(o({}, n), {
                            facebookId: a.userID,
                            facebookToken: a.accessToken
                        }),
                        type: d.default.FB_AUTHENTICATE_SUCCESS
                    })];
                case 3:
                    return t.sent(), [4, c.put({
                        payload: {
                            checkoutId: e.payload.checkoutId,
                            donationIdEncrypted: e.payload.donationIdEncrypted,
                            facebookId: a.userID,
                            facebookToken: a.accessToken,
                            fundUrl: e.payload.fundUrl
                        },
                        type: s.default.ADD_FACEBOOK_ID_TO_DONATION_IN_PROGRESS
                    })];
                case 4:
                    return t.sent(), [3, 7];
                case 5:
                    return r = t.sent(), [4, c.put({
                        payload: r,
                        type: d.default.FB_AUTHENTICATE_FAILURE
                    })];
                case 6:
                    return t.sent(), [3, 7];
                case 7:
                    return [2]
                }
            }))
        }
        function g(e) {
            var a,
                n,
                r;
            return t(this, (function(t) {
                switch (t.label) {
                case 0:
                    return t.trys.push([0, 5, 7, 8]), [4, c.call(l.FacebookSDK.login)];
                case 1:
                    return a = t.sent(), [4, c.call(l.FacebookSDK.getMe)];
                case 2:
                    return n = t.sent(), [4, c.put({
                        payload: o(o({}, n), {
                            facebookId: a.userID,
                            facebookToken: a.accessToken
                        }),
                        type: d.default.FB_AUTHENTICATE_SUCCESS
                    })];
                case 3:
                    return t.sent(), [4, c.put({
                        payload: {
                            id: a.userID,
                            token: a.accessToken
                        },
                        type: u.default.PERSON_ADD_FACEBOOK_ID_IN_PROGRESS
                    })];
                case 4:
                    return t.sent(), [3, 8];
                case 5:
                    return r = t.sent(), [4, c.put({
                        payload: r,
                        type: d.default.FB_AUTHENTICATE_FAILURE
                    })];
                case 6:
                    return t.sent(), [3, 8];
                case 7:
                    return e.onSuccess && e.onSuccess(), [7];
                case 8:
                    return [2]
                }
            }))
        }
        function y() {
            return t(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, c.takeEvery(d.default.FB_AUTHENTICATE_AND_SIGN_IN_IN_PROGRESS, m)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        function v() {
            return t(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, c.takeEvery(d.default.FB_AUTHENTICATE_IN_PROGRESS, p)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        function b() {
            return t(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, c.takeEvery(d.default.FB_LOGOUT_IN_PROGRESS, h)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        function S() {
            return t(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, c.takeEvery(d.default.FB_AUTHENTICATE_AND_UPDATE_DONATION_IN_PROGRESS, f)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        function w() {
            return t(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, c.takeEvery(d.default.FB_AUTHENTICATE_AND_UPDATE_PERSON_IN_PROGRESS, g)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        a.workFbAuthenticateAndSignIn = m,
        a.workFbAuthenticate = p,
        a.workFbLogOut = h,
        a.workFbAuthenticateAndUpdateDonation = f,
        a.workFbAuthenticateAndUpdatePerson = g,
        a.default = function() {
            return t(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, c.all([v(), y(), b(), S(), w()])];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
    },
    "3RiV": function(e, a, n) {
        "use strict";
        var o = this && this.__assign || function() {
                return (o = Object.assign || function(e) {
                    for (var a, n = 1, o = arguments.length; n < o; n++)
                        for (var t in a = arguments[n])
                            Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
                    return e
                }).apply(this, arguments)
            },
            t = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.initialState = void 0;
        var r = t(n("BpC9")),
            i = n("C0Xu"),
            s = t(n("V/h/"));
        a.initialState = {};
        a.default = s.default((function(e, a) {
            var n,
                t,
                s;
            switch (a.type) {
            case r.default.GET_TEAM_INVITE_EMAIL_TEMPLATE_SUCCESS:
                return o(o({}, e), ((n = {})[i.TemplateType.TEAM_INVITE] = {
                    html: a.payload.html.replace(/https:\/\/funds\..*\.com\/index\.php\?route=myaccount\/emailsettings2&email=.*&utm_medium=email&utm_source=product&utm_campaign=p_email%2Bteaminviteemail/, "https://gofundme.com"),
                    isLoading: !1,
                    name: a.payload.legacy_template_name,
                    subject: a.payload.subject
                }, n));
            case r.default.GET_TEAM_INVITE_EMAIL_TEMPLATE_IN_PROGRESS:
                return o(o({}, e), ((t = {})[i.TemplateType.TEAM_INVITE] = {
                    isLoading: !0
                }, t));
            case r.default.GET_TEAM_INVITE_EMAIL_TEMPLATE_FAILURE:
                return o(o({}, e), ((s = {})[i.TemplateType.TEAM_INVITE] = {
                    isLoading: !1
                }, s));
            default:
                return e
            }
        }), a.initialState)
    },
    "3WYk": function(e, a, n) {
        "use strict";
        var o = this && this.__assign || function() {
                return (o = Object.assign || function(e) {
                    for (var a, n = 1, o = arguments.length; n < o; n++)
                        for (var t in a = arguments[n])
                            Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
                    return e
                }).apply(this, arguments)
            },
            t = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.photosFeedMetaReducer = a.photosFeedInitialState = void 0;
        var r = n("p1Kg"),
            i = t(n("4M3g")),
            s = t(n("V/h/")),
            u = n("ANjH"),
            d = {
                error: !1,
                has_next: !1,
                initialized: !1,
                last_updated_at: "",
                loading: !1
            };
        a.photosFeedInitialState = {
            community: d,
            general: d,
            update: d
        };
        var l = function(e) {
            return s.default((function(a, n) {
                switch (void 0 === a && (a = d), n.type) {
                case i.default.GET_FEED_PHOTOS_IN_PROGRESS:
                    return n.payload.photoType === e ? o(o({}, a), {
                        error: !1,
                        loading: !0
                    }) : a;
                case i.default.GET_FEED_PHOTOS_SUCCESS:
                    return n.payload.photoType === e ? o(o({}, a), {
                        error: !1,
                        has_next: n.payload.meta.has_next,
                        initialized: !0,
                        loading: !1
                    }) : a;
                case i.default.GET_FEED_PHOTOS_FAILURE:
                    return n.payload.photoType === e ? o(o({}, a), {
                        error: !0,
                        loading: !1
                    }) : a;
                default:
                    return a
                }
            }), d)
        };
        a.photosFeedMetaReducer = u.combineReducers({
            community: l(r.photoTypes.CONTENT),
            general: l(),
            update: l(r.photoTypes.UPDATE)
        })
    },
    "3aO9": function(e, a, n) {
        "use strict";
        var o = this && this.__assign || function() {
                return (o = Object.assign || function(e) {
                    for (var a, n = 1, o = arguments.length; n < o; n++)
                        for (var t in a = arguments[n])
                            Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
                    return e
                }).apply(this, arguments)
            },
            t = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.initialState = void 0;
        var r = t(n("V/h/")),
            i = n("x060"),
            s = t(n("IsI7"));
        a.initialState = {
            algolia: {
                hitIndex: "",
                queryIndex: ""
            },
            braintree: {
                tokenizationKey: ""
            },
            country: "",
            domain: "gofundme.com",
            facebook: {
                appId: i.FacebookSDK.FacebookAppId.Production,
                pages: []
            },
            geoRecord: {
                countryCode: "",
                isInEU: !1,
                region: ""
            },
            google: {
                clientId: ""
            },
            isPreviewMode: !1,
            locale: {
                bcp47: "en-US",
                iso15897: "en_US"
            },
            publicPath: "/f/",
            reCaptcha: {
                bigwebKey: "",
                siteKey: ""
            },
            redirect: {
                originalUrl: "",
                redirectUrl: "",
                shouldRedirect: !1
            },
            showCookieBanner: !0,
            subdomains: []
        };
        a.default = r.default((function(e, n) {
            switch (void 0 === e && (e = a.initialState), n.type) {
            case s.default.SET_GLOBALS:
                return o(o({}, e), n.payload);
            default:
                return e
            }
        }), a.initialState)
    },
    "44dj": function(e, a, n) {
        "use strict";
        var o = this && this.__generator || function(e, a) {
                var n,
                    o,
                    t,
                    r,
                    i = {
                        label: 0,
                        sent: function() {
                            if (1 & t[0])
                                throw t[1];
                            return t[1]
                        },
                        trys: [],
                        ops: []
                    };
                return r = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;
                function s(r) {
                    return function(s) {
                        return function(r) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; i;)
                                try {
                                    if (n = 1, o && (t = 2 & r[0] ? o.return : r[0] ? o.throw || ((t = o.return) && t.call(o), 0) : o.next) && !(t = t.call(o, r[1])).done)
                                        return t;
                                    switch (o = 0, t && (r = [2 & r[0], t.value]), r[0]) {
                                    case 0:
                                    case 1:
                                        t = r;
                                        break;
                                    case 4:
                                        return i.label++, {
                                            value: r[1],
                                            done: !1
                                        };
                                    case 5:
                                        i.label++,
                                        o = r[1],
                                        r = [0];
                                        continue;
                                    case 7:
                                        r = i.ops.pop(),
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(t = i.trys, (t = t.length > 0 && t[t.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === r[0] && (!t || r[1] > t[0] && r[1] < t[3])) {
                                            i.label = r[1];
                                            break
                                        }
                                        if (6 === r[0] && i.label < t[1]) {
                                            i.label = t[1],
                                            t = r;
                                            break
                                        }
                                        if (t && i.label < t[2]) {
                                            i.label = t[2],
                                            i.ops.push(r);
                                            break
                                        }
                                        t[2] && i.ops.pop(),
                                        i.trys.pop();
                                        continue
                                    }
                                    r = a.call(e, i)
                                } catch (s) {
                                    r = [6, s],
                                    o = 0
                                } finally {
                                    n = t = 0
                                }
                            if (5 & r[0])
                                throw r[1];
                            return {
                                value: r[0] ? r[1] : void 0,
                                done: !0
                            }
                        }([r, s])
                    }
                }
            },
            t = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.rootSaga = void 0;
        var r = t(n("SWl0")),
            i = t(n("xxPb")),
            s = t(n("94dq")),
            u = t(n("2btX")),
            d = t(n("uIqA")),
            l = t(n("5Wl0")),
            c = t(n("BX5r")),
            m = t(n("yzoo")),
            p = t(n("7C2+")),
            h = t(n("0/Dm")),
            f = t(n("zr8h")),
            g = t(n("w6g+")),
            y = n("5rFJ");
        a.rootSaga = function() {
            return o(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, y.all([r.default(), i.default(), s.default(), u.default(), d.default(), l.default(), c.default(), m.default(), p.default(), h.default(), f.default(), g.default()])];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
    },
    "4M3g": function(e, a, n) {
        "use strict";
        var o,
            t;
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.degradedStateFeedActionMap = void 0,
        function(e) {
            e.ADD_CAMPAIGN_IMAGE_URL = "ADD_CAMPAIGN_IMAGE_URL",
            e.APPEND_CAMPAIGN_ROLES = "APPEND_CAMPAIGN_ROLES",
            e.GET_FEED_CAMPAIGN_FAILURE = "GET_FEED_CAMPAIGN_FAILURE",
            e.GET_FEED_CAMPAIGN_IN_PROGRESS = "GET_FEED_CAMPAIGN_IN_PROGRESS",
            e.GET_FEED_CAMPAIGN_SUCCESS = "GET_FEED_CAMPAIGN_SUCCESS",
            e.GET_FEED_COUNTS_FAILURE = "GET_FEED_COUNTS_FAILURE",
            e.GET_FEED_COUNTS_IN_PROGRESS = "GET_FEED_COUNTS_IN_PROGRESS",
            e.GET_FEED_COUNTS_SUCCESS = "GET_FEED_COUNTS_SUCCESS",
            e.GET_FEED_UPDATES_FAILURE = "GET_FEED_UPDATES_FAILURE",
            e.GET_FEED_UPDATES_IN_PROGRESS = "GET_FEED_UPDATES_IN_PROGRESS",
            e.GET_FEED_UPDATES_SUCCESS = "GET_FEED_UPDATES_SUCCESS",
            e.GET_FEED_PHOTOS_FAILURE = "GET_FEED_PHOTOS_FAILURE",
            e.GET_FEED_PHOTOS_IN_PROGRESS = "GET_FEED_PHOTOS_IN_PROGRESS",
            e.GET_FEED_PHOTOS_SUCCESS = "GET_FEED_PHOTOS_SUCCESS",
            e.GET_FEED_TEAM_MEMBERS_FAILURE = "GET_FEED_TEAM_MEMBERS_FAILURE",
            e.GET_FEED_TEAM_MEMBERS_IN_PROGRESS = "GET_FEED_TEAM_MEMBERS_IN_PROGRESS",
            e.GET_FEED_TEAM_MEMBERS_SUCCESS = "GET_FEED_TEAM_MEMBERS_SUCCESS",
            e.GET_FEED_COMMENTS_FAILURE = "GET_FEED_COMMENTS_FAILURE",
            e.GET_FEED_COMMENTS_IN_PROGRESS = "GET_FEED_COMMENTS_IN_PROGRESS",
            e.GET_FEED_COMMENTS_SUCCESS = "GET_FEED_COMMENTS_SUCCESS",
            e.GET_FEED_COMMENTS_UPDATE = "GET_FEED_COMMENTS_UPDATE",
            e.GET_FEED_DONATIONS_FAILURE = "GET_FEED_DONATIONS_FAILURE",
            e.GET_FEED_DONATIONS_IN_PROGRESS = "GET_FEED_DONATIONS_IN_PROGRESS",
            e.GET_FEED_DONATIONS_SUCCESS = "GET_FEED_DONATIONS_SUCCESS",
            e.GET_FEED_DONATIONS_WITH_LAST_DONATION_IN_PROGRESS = "GET_FEED_DONATIONS_WITH_LAST_DONATION_IN_PROGRESS",
            e.GET_FEED_DONATIONS_WITH_LAST_DONATION_SUCCESS = "GET_FEED_DONATIONS_WITH_LAST_DONATION_SUCCESS",
            e.GET_FEED_DONATIONS_UPDATE = "GET_FEED_DONATIONS_UPDATE",
            e.GET_FEED_CHECKOUT_UPDATE = "GET_FEED_CHECKOUT_UPDATE",
            e.GET_FEED_TOP_DONATIONS_FAILURE = "GET_FEED_TOP_DONATIONS_FAILURE",
            e.GET_FEED_TOP_DONATIONS_IN_PROGRESS = "GET_FEED_TOP_DONATIONS_IN_PROGRESS",
            e.GET_FEED_TOP_DONATIONS_SUCCESS = "GET_FEED_TOP_DONATIONS_SUCCESS",
            e.GET_FEED_IDENTITY_FAILURE = "GET_FEED_IDENTITY_FAILURE",
            e.GET_FEED_IDENTITY_IN_PROGRESS = "GET_FEED_IDENTITY_IN_PROGRESS",
            e.GET_FEED_IDENTITY_SUCCESS = "GET_FEED_IDENTITY_SUCCESS",
            e.GET_FEED_CAMPAIGN_ROLES_FAILURE = "GET_FEED_CAMPAIGN_ROLES_FAILURE",
            e.GET_FEED_CAMPAIGN_ROLES_IN_PROGRESS = "GET_FEED_CAMPAIGN_ROLES_IN_PROGRESS",
            e.GET_FEED_CAMPAIGN_ROLES_SUCCESS = "GET_FEED_CAMPAIGN_ROLES_SUCCESS",
            e.GET_FEED_VELOCITY_FAILURE = "GET_FEED_VELOCITY_FAILURE",
            e.GET_FEED_VELOCITY_IN_PROGRESS = "GET_FEED_VELOCITY_IN_PROGRESS",
            e.GET_FEED_VELOCITY_SUCCESS = "GET_FEED_VELOCITY_SUCCESS"
        }(t || (t = {})),
        a.degradedStateFeedActionMap = ((o = {})[t.GET_FEED_COUNTS_IN_PROGRESS] = t.GET_FEED_COUNTS_FAILURE, o[t.GET_FEED_CAMPAIGN_ROLES_IN_PROGRESS] = t.GET_FEED_CAMPAIGN_ROLES_FAILURE, o[t.GET_FEED_COMMENTS_IN_PROGRESS] = t.GET_FEED_COMMENTS_FAILURE, o[t.GET_FEED_DONATIONS_IN_PROGRESS] = t.GET_FEED_DONATIONS_FAILURE, o[t.GET_FEED_TOP_DONATIONS_IN_PROGRESS] = t.GET_FEED_TOP_DONATIONS_FAILURE, o[t.GET_FEED_UPDATES_IN_PROGRESS] = t.GET_FEED_UPDATES_FAILURE, o[t.GET_FEED_TEAM_MEMBERS_IN_PROGRESS] = t.GET_FEED_TEAM_MEMBERS_FAILURE, o),
        a.default = t
    },
    "4Opq": function(e, a, n) {
        "use strict";
        var o = this && this.__assign || function() {
            return (o = Object.assign || function(e) {
                for (var a, n = 1, o = arguments.length; n < o; n++)
                    for (var t in a = arguments[n])
                        Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
                return e
            }).apply(this, arguments)
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.updateComment = a.storeComment = a.getCommentsListFromFeed = a.getComments = void 0;
        var t = n("7MwF");
        function r(e) {
            e = e.toLowerCase();
            try {
                var a = localStorage.getItem("comments." + e);
                return a ? JSON.parse(a) : {}
            } catch (n) {
                return t.isStaging() && console.log("comments." + e + " local storage cannot be retrieved", n), {}
            }
        }
        a.getComments = r,
        a.getCommentsListFromFeed = function(e, a) {
            var n = function(e, a) {
                var n = r(e = e.toLowerCase());
                for (var o in n)
                    n.hasOwnProperty(o) && n[o].ugc_id <= a && delete n[o];
                return Object.keys(n).length ? localStorage.setItem("comments." + e, JSON.stringify(n)) : localStorage.removeItem("comments." + e), n
            }(e, a.length ? a[0].ugc_id : 0);
            for (var o in n)
                n.hasOwnProperty(o) && a.unshift(n[o]);
            return a
        },
        a.storeComment = function(e, a, n, o) {
            var i = r(e = e.toLowerCase());
            o && (a.donation = {
                amount: o.amount || 0,
                is_anonymous: o.is_anonymous || !1,
                is_offline: o.is_offline || !1
            }),
            n && (a.photos = n),
            a.comment || (a.comment = {
                comment: "",
                comment_id: 0
            }),
            i[a.ugc_id] = a;
            try {
                localStorage.setItem("comments." + e, JSON.stringify(i))
            } catch (s) {
                t.isStaging() && console.log("comments." + e + " local storage cannot be set", s)
            }
        },
        a.updateComment = function(e, a, n) {
            var i = r(e = e.toLowerCase());
            i[a] && (i[a] = o(o({}, i[a]), n));
            try {
                localStorage.setItem("comments." + e, JSON.stringify(i))
            } catch (s) {
                t.isStaging() && console.log("comments." + e + " local storage cannot be updated", s)
            }
        }
    },
    "4qcU": function(e, a, n) {
        "use strict";
        var o = this && this.__assign || function() {
                return (o = Object.assign || function(e) {
                    for (var a, n = 1, o = arguments.length; n < o; n++)
                        for (var t in a = arguments[n])
                            Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
                    return e
                }).apply(this, arguments)
            },
            t = this && this.__rest || function(e, a) {
                var n = {};
                for (var o in e)
                    Object.prototype.hasOwnProperty.call(e, o) && a.indexOf(o) < 0 && (n[o] = e[o]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var t = 0;
                    for (o = Object.getOwnPropertySymbols(e); t < o.length; t++)
                        a.indexOf(o[t]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[t]) && (n[o[t]] = e[o[t]])
                }
                return n
            },
            r = this && this.__values || function(e) {
                var a = "function" == typeof Symbol && Symbol.iterator,
                    n = a && e[a],
                    o = 0;
                if (n)
                    return n.call(e);
                if (e && "number" == typeof e.length)
                    return {
                        next: function() {
                            return e && o >= e.length && (e = void 0), {
                                value: e && e[o++],
                                done: !e
                            }
                        }
                    };
                throw new TypeError(a ? "Object is not iterable." : "Symbol.iterator is not defined.")
            },
            i = this && this.__read || function(e, a) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n)
                    return e;
                var o,
                    t,
                    r = n.call(e),
                    i = [];
                try {
                    for (; (void 0 === a || a-- > 0) && !(o = r.next()).done;)
                        i.push(o.value)
                } catch (s) {
                    t = {
                        error: s
                    }
                } finally {
                    try {
                        o && !o.done && (n = r.return) && n.call(r)
                    } finally {
                        if (t)
                            throw t.error
                    }
                }
                return i
            },
            s = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var u = n("wQmL"),
            d = n("dNNZ"),
            l = n("YgTb"),
            c = s(n("xl5i")),
            m = n("C0Xu"),
            p = n("8QVh"),
            h = s(n("IbYL"));
        var f = function(e, a, n) {
                var r = e.captchaResponse,
                    i = t(e, ["captchaResponse"]);
                return o(o({}, n ? {
                    files: n
                } : {}), {
                    formData: {
                        pid: a.leafId || 0
                    },
                    formInput: i,
                    g_recaptcha_response: r,
                    id: a.formTypeId
                })
            },
            g = new RegExp("^qaautomate[2]?([+]{1}[\\w]+)?@gofundme[.]{1}com$"),
            y = function(e, a) {
                var n = a.email;
                g.test(n) && delete e.captchaResponse,
                function(e, a) {
                    var n,
                        o,
                        t,
                        s,
                        d = {};
                    try {
                        for (var l = r(Object.entries(e)), c = l.next(); !c.done; c = l.next()) {
                            var m = i(c.value, 2),
                                p = m[0],
                                h = m[1];
                            try {
                                for (var f = (t = void 0, r(h)), g = f.next(); !g.done; g = f.next()) {
                                    var y = (0, g.value)(a, a[p]);
                                    y && (d[p] || (d[p] = []), d[p].push(y))
                                }
                            } catch (v) {
                                t = {
                                    error: v
                                }
                            } finally {
                                try {
                                    g && !g.done && (s = f.return) && s.call(f)
                                } finally {
                                    if (t)
                                        throw t.error
                                }
                            }
                        }
                    } catch (b) {
                        n = {
                            error: b
                        }
                    } finally {
                        try {
                            c && !c.done && (o = l.return) && o.call(l)
                        } finally {
                            if (n)
                                throw n.error
                        }
                    }
                    if (Object.keys(d).length > 0)
                        throw new u.SubmissionError(d)
                }(e, a)
            },
            v = function() {
                return {
                    name: [h.default.required(l.t("Please enter your name.")), h.default.max(255, l.t("Please enter a shorter name."))],
                    email: [h.default.required(l.t("Please enter your email address.")), h.default.max(255, l.t("Please enter a shorter email address.")), h.default.regex(/\S+@\S+\.\S+/, l.t("Please confirm your email address."))],
                    email2: [h.default.required(l.t("Please confirm your email address.")), h.default.equalTo("email", l.t("Emails do not match."))],
                    captchaResponse: [h.default.required(l.t("Please complete the reCAPTCHA."))]
                }
            },
            b = function() {
                return {
                    subject: [h.default.required(l.t("Please enter a subject line"))]
                }
            },
            S = function() {
                return {
                    message: [h.default.required(l.t("Please enter your message")), h.default.min(3, l.t("Please enter a longer message.")), h.default.max(1e3, l.t("Please enter a shorter message."))]
                }
            },
            w = function() {
                return {
                    phone: [h.default.required(l.t("Please enter a valid phone number"))]
                }
            },
            C = function() {
                return {
                    url: [h.default.required(l.t("Please enter a campaign URL")), h.default.regex(new RegExp(p.getDomain() + "\\/(f\\/)?([\\w-]{5,100})"), l.t("Please enter the URL in this format: https://www.gofundme.com/f/example-campaign"))]
                }
            },
            _ = function(e, a) {
                var n = (a || "").trim();
                return n.startsWith("+") && (n = n.substring(1)), n.startsWith(e) || (n = "" + e + n), n = "+" + n
            };
        a.default = {
            SubmitContactFormBene: function(e, a, n) {
                var r = o(o(o({}, v()), w()), e.urlBypass ? void 0 : C());
                y(r, e);
                var i = e.photoId,
                    s = e.evidence,
                    u = t(e, ["photoId", "evidence"]),
                    d = _(e.phonePrefix, e.phone),
                    l = f(o(o({}, u), {
                        phone: d
                    }), n, {
                        photoId: i,
                        evidence: s
                    });
                a({
                    form: m.CONTACT_FORM_BENE,
                    payload: l,
                    type: c.default.POST_CONTACT_FORM_IN_PROGRESS
                })
            },
            SubmitContactFormDefault: function(e, a, n) {
                var t = o(o(o({}, v()), b()), S());
                y(t, e);
                var r = f(e, n);
                a({
                    form: m.CONTACT_FORM_DEFAULT,
                    payload: r,
                    type: c.default.POST_CONTACT_FORM_IN_PROGRESS
                })
            },
            SubmitContactFormDonor: function(e, a, n) {
                var r = o(o(o({}, v()), w()), C());
                y(r, e);
                var i = e.evidence,
                    s = t(e, ["evidence"]),
                    u = _(e.phonePrefix, e.phone),
                    d = f(o(o({}, s), {
                        phone: u
                    }), n, {
                        evidence: i
                    });
                a({
                    form: m.CONTACT_FORM_DONOR,
                    payload: d,
                    type: c.default.POST_CONTACT_FORM_IN_PROGRESS
                })
            },
            SubmitContactFormFraud: function(e, a, n) {
                var t = e.role,
                    r = o(o(o(o(o(o({}, v()), w()), C()), {
                        knowsCo: [h.default.required(l.t("Please specify how you know the Campaign Organizer."))],
                        knowsCoDescription: [h.default.required(l.t("Please specify a description."))],
                        role: [h.default.required(l.t("Please select an option."))]
                    }), (t === d.FraudRelationshipValues.BENE || t === d.FraudRelationshipValues.DONOR) && {
                        roleDescription: [h.default.required(l.t("Please enter a description.")), h.default.min(40, l.t("Please enter a longer description."))]
                    }), t === d.FraudRelationshipValues.INDIVIDUAL && {
                        individual: [h.default.required(l.t("Please select an option."))],
                        individualConcern: [h.default.required(l.t("Please enter your concerns.")), h.default.min(40, l.t("Please enter a longer description."))]
                    });
                y(r, e);
                var i = _(e.phonePrefix, e.phone),
                    s = f(o(o({}, e), {
                        phone: i
                    }), n);
                a({
                    form: m.CONTACT_FORM_FRAUD,
                    payload: s,
                    type: c.default.POST_CONTACT_FORM_IN_PROGRESS
                })
            },
            SubmitContactFormJournalist: function(e, a, n) {
                var t = o(o(o(o({}, v()), b()), S()), {
                    publication: [h.default.required(l.t("Please enter a publication name"))]
                });
                y(t, e);
                var r = f(e, n);
                a({
                    form: m.CONTACT_FORM_JOURNALIST,
                    payload: r,
                    type: c.default.POST_CONTACT_FORM_IN_PROGRESS
                })
            },
            SubmitContactSmartAnswer: function(e, a, n) {
                if (!n.isSignedIn)
                    throw new u.SubmissionError({
                        email: l.t("Please log in")
                    });
                if (e.email !== n.userEmail)
                    throw new u.SubmissionError({
                        email: l.t("The email entered does not match your account's email")
                    });
                if (!n.answer || !n.answer.smartAnswer)
                    throw new u.SubmissionError({
                        _error: l.t("Unexpected error")
                    });
                a({
                    payload: {
                        email: e.email,
                        smartAnswer: n.answer.smartAnswer
                    },
                    type: c.default.POST_CONTACT_SMART_ANSWER_IN_PROGRESS
                })
            },
            SubmitShieldAction: function(e, a, n) {
                a({
                    payload: {
                        nodeId: n.lastSelected,
                        ruleCode: n.code
                    },
                    type: c.default.PUT_SHIELD_ACTION_IN_PROGRESS
                })
            }
        }
    },
    "5Pqh": function(e, a, n) {
        "use strict";
        var o = this && this.__assign || function() {
                return (o = Object.assign || function(e) {
                    for (var a, n = 1, o = arguments.length; n < o; n++)
                        for (var t in a = arguments[n])
                            Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
                    return e
                }).apply(this, arguments)
            },
            t = this && this.__generator || function(e, a) {
                var n,
                    o,
                    t,
                    r,
                    i = {
                        label: 0,
                        sent: function() {
                            if (1 & t[0])
                                throw t[1];
                            return t[1]
                        },
                        trys: [],
                        ops: []
                    };
                return r = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;
                function s(r) {
                    return function(s) {
                        return function(r) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; i;)
                                try {
                                    if (n = 1, o && (t = 2 & r[0] ? o.return : r[0] ? o.throw || ((t = o.return) && t.call(o), 0) : o.next) && !(t = t.call(o, r[1])).done)
                                        return t;
                                    switch (o = 0, t && (r = [2 & r[0], t.value]), r[0]) {
                                    case 0:
                                    case 1:
                                        t = r;
                                        break;
                                    case 4:
                                        return i.label++, {
                                            value: r[1],
                                            done: !1
                                        };
                                    case 5:
                                        i.label++,
                                        o = r[1],
                                        r = [0];
                                        continue;
                                    case 7:
                                        r = i.ops.pop(),
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(t = i.trys, (t = t.length > 0 && t[t.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === r[0] && (!t || r[1] > t[0] && r[1] < t[3])) {
                                            i.label = r[1];
                                            break
                                        }
                                        if (6 === r[0] && i.label < t[1]) {
                                            i.label = t[1],
                                            t = r;
                                            break
                                        }
                                        if (t && i.label < t[2]) {
                                            i.label = t[2],
                                            i.ops.push(r);
                                            break
                                        }
                                        t[2] && i.ops.pop(),
                                        i.trys.pop();
                                        continue
                                    }
                                    r = a.call(e, i)
                                } catch (s) {
                                    r = [6, s],
                                    o = 0
                                } finally {
                                    n = t = 0
                                }
                            if (5 & r[0])
                                throw r[1];
                            return {
                                value: r[0] ? r[1] : void 0,
                                done: !0
                            }
                        }([r, s])
                    }
                }
            },
            r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.workPutAction = a.workPostActions = a.workPostSmartAnswer = a.workSignIn = a.workSelectSuggestion = a.workJumpToSuggestion = a.workGetContactMethodAudience = a.workGetSuggestions = a.workContactFormSubmit = void 0;
        var i = n("wQmL"),
            s = n("5rFJ"),
            u = r(n("p48P")),
            d = r(n("xl5i")),
            l = n("7OEO"),
            c = n("uavh"),
            m = n("ZZcF"),
            p = n("C0Xu"),
            h = r(n("b0lt")),
            f = n("zIs9"),
            g = n("MkYk"),
            y = n("Cge7");
        function v(e) {
            var a,
                n,
                r,
                u,
                l;
            return t(this, (function(t) {
                switch (t.label) {
                case 0:
                    return t.trys.push([0, 7, , 14]), [4, s.put(i.startSubmit(e.form))];
                case 1:
                    return t.sent(), [4, s.put({
                        payload: {
                            type: f.AlertType.ERROR
                        },
                        type: h.default.CLOSE_ALERT_CONTENT
                    })];
                case 2:
                    return t.sent(), [4, s.call(c.submitContactForm, e.payload)];
                case 3:
                    return a = t.sent(), n = a.data, [4, s.put({
                        payload: n,
                        type: d.default.POST_CONTACT_FORM_SUCCESS
                    })];
                case 4:
                    return t.sent(), [4, s.put(i.setSubmitSucceeded(e.form))];
                case 5:
                    return t.sent(), [4, s.put(i.stopSubmit(e.form))];
                case 6:
                    return t.sent(), [3, 14];
                case 7:
                    return r = t.sent(), u = c.handleServiceError(r), [4, s.put({
                        payload: u,
                        type: d.default.POST_CONTACT_FORM_FAILURE
                    })];
                case 8:
                    return t.sent(), (l = /captcha/i.test(u.message)) ? [3, 10] : [4, s.put({
                        payload: {
                            message: u.message,
                            type: f.AlertType.ERROR
                        },
                        type: h.default.DISPLAY_ALERT_CONTENT
                    })];
                case 9:
                    t.sent(),
                    t.label = 10;
                case 10:
                    return [4, s.put(i.setSubmitFailed(e.form))];
                case 11:
                    return t.sent(), [4, s.put(i.change(e.form, "captchaResponse", ""))];
                case 12:
                    return t.sent(), [4, s.put(i.stopSubmit(e.form, o(o({}, u.data), l && {
                        captchaResponse: u.message
                    })))];
                case 13:
                    return t.sent(), [3, 14];
                case 14:
                    return [2]
                }
            }))
        }
        function b(e) {
            var a,
                n,
                o,
                r,
                i,
                u;
            return t(this, (function(t) {
                switch (t.label) {
                case 0:
                    return t.trys.push([0, 5, , 7]), [4, s.call(m.makeGetAcceptLanguage)];
                case 1:
                    return a = t.sent(), [4, s.select(a)];
                case 2:
                    return n = t.sent(), [4, s.call(c.getContactSuggestions, n, e.payload)];
                case 3:
                    return o = t.sent(), r = o.data, [4, s.put({
                        payload: r,
                        type: d.default.GET_CONTACT_SUGGESTIONS_SUCCESS
                    })];
                case 4:
                    return t.sent(), [3, 7];
                case 5:
                    return i = t.sent(), u = c.handleServiceError(i), [4, s.put({
                        payload: u,
                        type: d.default.GET_CONTACT_SUGGESTIONS_FAILURE
                    })];
                case 6:
                    return t.sent(), [3, 7];
                case 7:
                    return [2]
                }
            }))
        }
        function S(e) {
            var a,
                n,
                o,
                r;
            return t(this, (function(e) {
                switch (e.label) {
                case 0:
                    return e.trys.push([0, 3, , 5]), [4, s.call(c.getContactMethodAudience)];
                case 1:
                    return a = e.sent(), n = a.data, [4, s.put({
                        payload: n,
                        type: d.default.GET_CONTACT_METHOD_AUDIENCE_SUCCESS
                    })];
                case 2:
                    return e.sent(), [3, 5];
                case 3:
                    return o = e.sent(), r = c.handleServiceError(o), [4, s.put({
                        payload: r,
                        type: d.default.GET_CONTACT_METHOD_AUDIENCE_FAILURE
                    })];
                case 4:
                    return e.sent(), [3, 5];
                case 5:
                    return [2]
                }
            }))
        }
        function w(e) {
            var a,
                n,
                o,
                r;
            return t(this, (function(t) {
                switch (t.label) {
                case 0:
                    return [4, s.call(l.makeGetSuggestions)];
                case 1:
                    return a = t.sent(), [4, s.select(a)];
                case 2:
                    return n = t.sent(), (o = g.findByPrefix(n, e.payload)) ? (r = g.parents(n, o), [4, s.put({
                        payload: r,
                        type: d.default.SET_SELECTED_SUGGESTIONS
                    })]) : [3, 5];
                case 3:
                    return t.sent(), [4, s.put({
                        payload: {
                            nodeId: o.id
                        },
                        type: d.default.POST_SHIELD_ACTIONS_IN_PROGRESS
                    })];
                case 4:
                    t.sent(),
                    t.label = 5;
                case 5:
                    return [2]
                }
            }))
        }
        function C(e) {
            var a;
            return t(this, (function(n) {
                switch (n.label) {
                case 0:
                    return [4, s.call(y.makeGetIsLoggedIn)];
                case 1:
                    return a = n.sent(), [4, s.select(a)];
                case 2:
                    return n.sent() ? [4, s.put({
                        payload: {
                            nodeId: e.payload.id
                        },
                        type: d.default.POST_SHIELD_ACTIONS_IN_PROGRESS
                    })] : [3, 4];
                case 3:
                    n.sent(),
                    n.label = 4;
                case 4:
                    return [2]
                }
            }))
        }
        function _(e) {
            var a,
                n;
            return t(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, s.call(l.makeGetLastSelectedId)];
                case 1:
                    return a = e.sent(), [4, s.select(a)];
                case 2:
                    return n = e.sent(), [4, s.put({
                        payload: {
                            nodeId: n
                        },
                        type: d.default.POST_SHIELD_ACTIONS_IN_PROGRESS
                    })];
                case 3:
                    return e.sent(), [2]
                }
            }))
        }
        function P(e) {
            var a,
                n,
                o,
                r;
            return t(this, (function(t) {
                switch (t.label) {
                case 0:
                    return t.trys.push([0, 6, , 10]), [4, s.put(i.startSubmit(p.CONTACT_FORM_SMART_ANSWER))];
                case 1:
                    return t.sent(), [4, s.call(c.postSmartAnswer, e.payload)];
                case 2:
                    return a = t.sent(), n = a.data, [4, s.put({
                        payload: n,
                        type: d.default.POST_CONTACT_SMART_ANSWER_SUCCESS
                    })];
                case 3:
                    return t.sent(), [4, s.put(i.stopSubmit(p.CONTACT_FORM_SMART_ANSWER))];
                case 4:
                    return t.sent(), [4, s.put(i.setSubmitSucceeded(p.CONTACT_FORM_SMART_ANSWER))];
                case 5:
                    return t.sent(), [3, 10];
                case 6:
                    return o = t.sent(), r = c.handleServiceError(o), [4, s.put({
                        error: !0,
                        payload: r,
                        type: d.default.POST_CONTACT_SMART_ANSWER_FAILURE
                    })];
                case 7:
                    return t.sent(), [4, s.put(i.stopSubmit(p.CONTACT_FORM_SMART_ANSWER, {
                        email: r.message
                    }))];
                case 8:
                    return t.sent(), [4, s.put(i.setSubmitFailed(p.CONTACT_FORM_SMART_ANSWER))];
                case 9:
                    return t.sent(), [3, 10];
                case 10:
                    return [2]
                }
            }))
        }
        function E(e) {
            var a,
                n,
                o,
                r;
            return t(this, (function(t) {
                switch (t.label) {
                case 0:
                    return t.trys.push([0, 3, , 6]), [4, s.call(c.postActions, e.payload)];
                case 1:
                    return a = t.sent(), n = a.data, [4, s.put({
                        payload: n,
                        type: d.default.POST_SHIELD_ACTIONS_SUCCESS
                    })];
                case 2:
                    return t.sent(), [3, 6];
                case 3:
                    return o = t.sent(), r = c.handleServiceError(o), [4, s.put({
                        payload: {
                            messsage: r,
                            type: f.AlertType.ERROR
                        },
                        type: h.default.DISPLAY_ALERT_CONTENT
                    })];
                case 4:
                    return t.sent(), [4, s.put({
                        payload: r,
                        type: d.default.POST_SHIELD_ACTIONS_FAILURE
                    })];
                case 5:
                    return t.sent(), [3, 6];
                case 6:
                    return [2]
                }
            }))
        }
        function k(e) {
            var a,
                n,
                o,
                r;
            return t(this, (function(t) {
                switch (t.label) {
                case 0:
                    return t.trys.push([0, 8, , 12]), [4, s.put(i.startSubmit(p.CONTACT_FORM_SELF_SERVICE))];
                case 1:
                    return t.sent(), [4, s.call(c.putAction, e.payload)];
                case 2:
                    return a = t.sent(), n = a.data, [4, s.put({
                        payload: {
                            ruleCode: e.payload.ruleCode
                        },
                        type: d.default.PUT_SHIELD_ACTION_SUCCESS
                    })];
                case 3:
                    return t.sent(), [4, s.put({
                        payload: {
                            message: n.message,
                            type: f.AlertType.SUCCESS
                        },
                        type: h.default.DISPLAY_ALERT_CONTENT
                    })];
                case 4:
                    return t.sent(), [4, s.put(i.stopSubmit(p.CONTACT_FORM_SELF_SERVICE))];
                case 5:
                    return t.sent(), [4, s.put(i.setSubmitSucceeded(p.CONTACT_FORM_SELF_SERVICE))];
                case 6:
                    return t.sent(), [4, s.put({
                        payload: {
                            nodeId: e.payload.nodeId
                        },
                        type: d.default.POST_SHIELD_ACTIONS_IN_PROGRESS
                    })];
                case 7:
                    return t.sent(), [3, 12];
                case 8:
                    return o = t.sent(), r = c.handleServiceError(o), [4, s.put({
                        error: !0,
                        payload: r,
                        type: d.default.PUT_SHIELD_ACTION_FAILURE
                    })];
                case 9:
                    return t.sent(), [4, s.put(i.stopSubmit(p.CONTACT_FORM_SELF_SERVICE, {
                        _error: r.message
                    }))];
                case 10:
                    return t.sent(), [4, s.put(i.setSubmitFailed(p.CONTACT_FORM_SELF_SERVICE))];
                case 11:
                    return t.sent(), [3, 12];
                case 12:
                    return [2]
                }
            }))
        }
        function F() {
            return t(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, s.takeEvery(d.default.POST_CONTACT_FORM_IN_PROGRESS, v)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        function T() {
            return t(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, s.takeEvery(d.default.JUMP_TO_SUGGESTION, w)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        function A() {
            return t(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, s.takeEvery(d.default.SELECT_CONTACT_SUGGESTION, C)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        function I() {
            return t(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, s.takeEvery(u.default.SIGN_IN_EMAIL_SUCCESS, _)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        function G() {
            return t(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, s.takeEvery(d.default.GET_CONTACT_SUGGESTIONS_IN_PROGRESS, b)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        function N() {
            return t(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, s.takeEvery(d.default.GET_CONTACT_METHOD_AUDIENCE_IN_PROGRESS, S)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        function z() {
            return t(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, s.takeEvery(d.default.POST_CONTACT_SMART_ANSWER_IN_PROGRESS, P)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        function M() {
            return t(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, s.takeEvery(d.default.POST_SHIELD_ACTIONS_IN_PROGRESS, E)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        function O() {
            return t(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, s.takeEvery(d.default.PUT_SHIELD_ACTION_IN_PROGRESS, k)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        a.workContactFormSubmit = v,
        a.workGetSuggestions = b,
        a.workGetContactMethodAudience = S,
        a.workJumpToSuggestion = w,
        a.workSelectSuggestion = C,
        a.workSignIn = _,
        a.workPostSmartAnswer = P,
        a.workPostActions = E,
        a.workPutAction = k,
        a.default = function() {
            return t(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, s.all([F(), G(), N(), T(), A(), I(), z(), M(), O()])];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
    },
    "5Wl0": function(e, a, n) {
        "use strict";
        var o = this && this.__assign || function() {
                return (o = Object.assign || function(e) {
                    for (var a, n = 1, o = arguments.length; n < o; n++)
                        for (var t in a = arguments[n])
                            Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
                    return e
                }).apply(this, arguments)
            },
            t = this && this.__generator || function(e, a) {
                var n,
                    o,
                    t,
                    r,
                    i = {
                        label: 0,
                        sent: function() {
                            if (1 & t[0])
                                throw t[1];
                            return t[1]
                        },
                        trys: [],
                        ops: []
                    };
                return r = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;
                function s(r) {
                    return function(s) {
                        return function(r) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; i;)
                                try {
                                    if (n = 1, o && (t = 2 & r[0] ? o.return : r[0] ? o.throw || ((t = o.return) && t.call(o), 0) : o.next) && !(t = t.call(o, r[1])).done)
                                        return t;
                                    switch (o = 0, t && (r = [2 & r[0], t.value]), r[0]) {
                                    case 0:
                                    case 1:
                                        t = r;
                                        break;
                                    case 4:
                                        return i.label++, {
                                            value: r[1],
                                            done: !1
                                        };
                                    case 5:
                                        i.label++,
                                        o = r[1],
                                        r = [0];
                                        continue;
                                    case 7:
                                        r = i.ops.pop(),
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(t = i.trys, (t = t.length > 0 && t[t.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === r[0] && (!t || r[1] > t[0] && r[1] < t[3])) {
                                            i.label = r[1];
                                            break
                                        }
                                        if (6 === r[0] && i.label < t[1]) {
                                            i.label = t[1],
                                            t = r;
                                            break
                                        }
                                        if (t && i.label < t[2]) {
                                            i.label = t[2],
                                            i.ops.push(r);
                                            break
                                        }
                                        t[2] && i.ops.pop(),
                                        i.trys.pop();
                                        continue
                                    }
                                    r = a.call(e, i)
                                } catch (s) {
                                    r = [6, s],
                                    o = 0
                                } finally {
                                    n = t = 0
                                }
                            if (5 & r[0])
                                throw r[1];
                            return {
                                value: r[0] ? r[1] : void 0,
                                done: !0
                            }
                        }([r, s])
                    }
                }
            },
            r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.workOptimizelyGetDataFile = void 0;
        var i = n("F/MP"),
            s = r(n("8zSQ")),
            u = n("5rFJ");
        function d(e) {
            var a,
                n;
            return t(this, (function(e) {
                switch (e.label) {
                case 0:
                    return e.trys.push([0, 3, , 5]), [4, u.call(i.getDataFile)];
                case 1:
                    return a = e.sent(), [4, u.put({
                        payload: o({}, a.data),
                        type: s.default.OPTIMIZELY_GET_DATAFILE_SUCCESS
                    })];
                case 2:
                    return e.sent(), [3, 5];
                case 3:
                    return n = e.sent(), [4, u.put({
                        payload: n,
                        type: s.default.OPTIMIZELY_GET_DATAFILE_FAILURE
                    })];
                case 4:
                    return e.sent(), [3, 5];
                case 5:
                    return [2]
                }
            }))
        }
        function l() {
            return t(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, u.takeEvery(s.default.OPTIMIZELY_GET_DATAFILE_IN_PROGRESS, d)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        a.workOptimizelyGetDataFile = d,
        a.default = function() {
            return t(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, u.all([l()])];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
    },
    "6M7q": function(e, a, n) {
        "use strict";
        var o = this && this.__createBinding || (Object.create ? function(e, a, n, o) {
                void 0 === o && (o = n),
                Object.defineProperty(e, o, {
                    enumerable: !0,
                    get: function() {
                        return a[n]
                    }
                })
            } : function(e, a, n, o) {
                void 0 === o && (o = n),
                e[o] = a[n]
            }),
            t = this && this.__exportStar || function(e, a) {
                for (var n in e)
                    "default" === n || a.hasOwnProperty(n) || o(a, e, n)
            };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(n("4Opq"), a),
        t(n("U06n"), a)
    },
    "7C2+": function(e, a, n) {
        "use strict";
        var o = this && this.__generator || function(e, a) {
                var n,
                    o,
                    t,
                    r,
                    i = {
                        label: 0,
                        sent: function() {
                            if (1 & t[0])
                                throw t[1];
                            return t[1]
                        },
                        trys: [],
                        ops: []
                    };
                return r = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;
                function s(r) {
                    return function(s) {
                        return function(r) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; i;)
                                try {
                                    if (n = 1, o && (t = 2 & r[0] ? o.return : r[0] ? o.throw || ((t = o.return) && t.call(o), 0) : o.next) && !(t = t.call(o, r[1])).done)
                                        return t;
                                    switch (o = 0, t && (r = [2 & r[0], t.value]), r[0]) {
                                    case 0:
                                    case 1:
                                        t = r;
                                        break;
                                    case 4:
                                        return i.label++, {
                                            value: r[1],
                                            done: !1
                                        };
                                    case 5:
                                        i.label++,
                                        o = r[1],
                                        r = [0];
                                        continue;
                                    case 7:
                                        r = i.ops.pop(),
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(t = i.trys, (t = t.length > 0 && t[t.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === r[0] && (!t || r[1] > t[0] && r[1] < t[3])) {
                                            i.label = r[1];
                                            break
                                        }
                                        if (6 === r[0] && i.label < t[1]) {
                                            i.label = t[1],
                                            t = r;
                                            break
                                        }
                                        if (t && i.label < t[2]) {
                                            i.label = t[2],
                                            i.ops.push(r);
                                            break
                                        }
                                        t[2] && i.ops.pop(),
                                        i.trys.pop();
                                        continue
                                    }
                                    r = a.call(e, i)
                                } catch (s) {
                                    r = [6, s],
                                    o = 0
                                } finally {
                                    n = t = 0
                                }
                            if (5 & r[0])
                                throw r[1];
                            return {
                                value: r[0] ? r[1] : void 0,
                                done: !0
                            }
                        }([r, s])
                    }
                }
            },
            t = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.workTeamInviteEmailPreview = void 0;
        var r = t(n("BpC9")),
            i = n("/Irm"),
            s = n("5rFJ");
        function u(e) {
            var a,
                n,
                t,
                u;
            return o(this, (function(o) {
                switch (o.label) {
                case 0:
                    return o.trys.push([0, 3, , 5]), [4, s.call(i.getTeamInviteEmailPreview, e.payload)];
                case 1:
                    return a = o.sent(), n = a.data, [4, s.put({
                        payload: n,
                        type: r.default.GET_TEAM_INVITE_EMAIL_TEMPLATE_SUCCESS
                    })];
                case 2:
                    return o.sent(), [3, 5];
                case 3:
                    return t = o.sent(), u = i.handleServiceError(t), [4, s.put({
                        payload: u,
                        type: r.default.GET_TEAM_INVITE_EMAIL_TEMPLATE_FAILURE
                    })];
                case 4:
                    return o.sent(), [3, 5];
                case 5:
                    return [2]
                }
            }))
        }
        function d() {
            return o(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, s.takeEvery(r.default.GET_TEAM_INVITE_EMAIL_TEMPLATE_IN_PROGRESS, u)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        a.workTeamInviteEmailPreview = u,
        a.default = function() {
            return o(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, s.all([d()])];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
    },
    "7OEO": function(e, a, n) {
        "use strict";
        var o = this && this.__assign || function() {
            return (o = Object.assign || function(e) {
                for (var a, n = 1, o = arguments.length; n < o; n++)
                    for (var t in a = arguments[n])
                        Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
                return e
            }).apply(this, arguments)
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.makeGetActionCards = a.makeGetLeafNode = a.makeGetLeafId = a.makeGetLastSelectedNode = a.makeGetLastSelectedId = a.makeGetSelectedNodes = a.makeGetSelectedIds = a.makeGetSmartAnswerSuccess = a.makeGetIsLoadingActions = a.makeGetChatReady = a.makeGetChatStatus = a.makeGetChatWindow = a.makeGetEmailAudience = a.makeGetChatAudience = a.makeGetActions = a.makeGetSuggestions = a.getContactState = void 0;
        var t = n("G4qV");
        a.getContactState = function(e) {
            return e.bigweb.contact
        },
        a.makeGetSuggestions = function() {
            return t.createSelector([a.getContactState], (function(e) {
                return e.suggestions || {}
            }))
        },
        a.makeGetActions = function() {
            return t.createSelector([a.getContactState], (function(e) {
                return e.actions || []
            }))
        },
        a.makeGetChatAudience = function() {
            return t.createSelector([a.getContactState], (function(e) {
                return e.chatAudience
            }))
        },
        a.makeGetEmailAudience = function() {
            return t.createSelector([a.getContactState], (function(e) {
                return e.emailAudience
            }))
        },
        a.makeGetChatWindow = function() {
            return t.createSelector([a.getContactState], (function(e) {
                return e.chatWindow
            }))
        },
        a.makeGetChatStatus = function() {
            return t.createSelector([a.getContactState], (function(e) {
                return e.chatStatus
            }))
        },
        a.makeGetChatReady = function() {
            return t.createSelector([a.getContactState], (function(e) {
                return e.chatReady
            }))
        },
        a.makeGetIsLoadingActions = function() {
            return t.createSelector([a.getContactState], (function(e) {
                return e.isLoadingActions
            }))
        },
        a.makeGetSmartAnswerSuccess = function() {
            return t.createSelector([a.getContactState], (function(e) {
                return e.smartAnswerSuccess
            }))
        },
        a.makeGetSelectedIds = function() {
            return t.createSelector([a.getContactState], (function(e) {
                return e.selected || []
            }))
        },
        a.makeGetSelectedNodes = function() {
            return t.createSelector([a.makeGetSuggestions(), a.makeGetSelectedIds()], (function(e, a) {
                var n = function(a) {
                    return a.map((function(a) {
                        return e[String(a)]
                    })).filter((function(e) {
                        return void 0 !== e
                    }))
                };
                return n(a).map((function(e) {
                    return o(o({}, e), {
                        children: n(e.children)
                    })
                }))
            }))
        },
        a.makeGetLastSelectedId = function() {
            return t.createSelector([a.makeGetSelectedIds()], (function(e) {
                return e.length > 0 ? e[e.length - 1] : void 0
            }))
        },
        a.makeGetLastSelectedNode = function() {
            return t.createSelector([a.makeGetSelectedNodes()], (function(e) {
                return e.length > 0 ? e[e.length - 1] : void 0
            }))
        },
        a.makeGetLeafId = function() {
            return t.createSelector([a.makeGetLeafNode()], (function(e) {
                return e && e.id
            }))
        },
        a.makeGetLeafNode = function() {
            return t.createSelector([a.makeGetLastSelectedNode()], (function(e) {
                return e && 1 === e.children.length ? e.children[0] : void 0
            }))
        },
        a.makeGetActionCards = function() {
            return t.createSelector([a.makeGetActions(), function(e, a) {
                return a.match
            }], (function(e, a) {
                return e.map((function(e) {
                    return {
                        subTitle: e.campaign,
                        title: e.title,
                        to: a.url + "/actions/" + e.code
                    }
                }))
            }))
        }
    },
    "8dFL": function(e, a, n) {
        "use strict";
        var o = this && this.__read || function(e, a) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n)
                return e;
            var o,
                t,
                r = n.call(e),
                i = [];
            try {
                for (; (void 0 === a || a-- > 0) && !(o = r.next()).done;)
                    i.push(o.value)
            } catch (s) {
                t = {
                    error: s
                }
            } finally {
                try {
                    o && !o.done && (n = r.return) && n.call(r)
                } finally {
                    if (t)
                        throw t.error
                }
            }
            return i
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.getShortenShareUtmUrl = void 0;
        var t,
            r = n("7MwF"),
            i = n("kLb9"),
            s = n("8QVh").getDomain(),
            u = "https://www." + s;
        t = s.includes("gfm-dev") ? "https://bus.gfm-dev.com" : r.isStaging() ? "https://testgfm.com" : "https://gofund.me";
        a.getShortenShareUtmUrl = function(e) {
            var a = t + "/url-shortener/v1/shortenUrl",
                n = Object.entries(e.utm).map((function(e) {
                    var a = o(e, 2);
                    return "utm_" + a[0] + "=" + a[1]
                })).join("&"),
                r = e.additionalShareParams ? Object.entries(e.additionalShareParams).filter((function(e) {
                    var a = o(e, 2);
                    a[0];
                    return a[1]
                })).map((function(e) {
                    var a = o(e, 2);
                    return a[0] + "=" + a[1]
                })).join("&") : "",
                s = u + "/f/" + e.fundUrl + "?" + n + (r.length ? "&" + r : "");
            return i.HttpClient.post(a, {
                long_url: s
            })
        }
    },
    "8zSQ": function(e, a, n) {
        "use strict";
        var o;
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        function(e) {
            e.OPTIMIZELY_GET_DATAFILE_IN_PROGRESS = "OPTIMIZELY_GET_DATAFILE_IN_PROGRESS",
            e.OPTIMIZELY_GET_DATAFILE_SUCCESS = "OPTIMIZELY_GET_DATAFILE_SUCCESS",
            e.OPTIMIZELY_GET_DATAFILE_FAILURE = "OPTIMIZELY_GET_DATAFILE_FAILURE"
        }(o || (o = {})),
        a.default = o
    },
    "94dq": function(e, a, n) {
        "use strict";
        var o = this && this.__assign || function() {
                return (o = Object.assign || function(e) {
                    for (var a, n = 1, o = arguments.length; n < o; n++)
                        for (var t in a = arguments[n])
                            Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
                    return e
                }).apply(this, arguments)
            },
            t = this && this.__generator || function(e, a) {
                var n,
                    o,
                    t,
                    r,
                    i = {
                        label: 0,
                        sent: function() {
                            if (1 & t[0])
                                throw t[1];
                            return t[1]
                        },
                        trys: [],
                        ops: []
                    };
                return r = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;
                function s(r) {
                    return function(s) {
                        return function(r) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; i;)
                                try {
                                    if (n = 1, o && (t = 2 & r[0] ? o.return : r[0] ? o.throw || ((t = o.return) && t.call(o), 0) : o.next) && !(t = t.call(o, r[1])).done)
                                        return t;
                                    switch (o = 0, t && (r = [2 & r[0], t.value]), r[0]) {
                                    case 0:
                                    case 1:
                                        t = r;
                                        break;
                                    case 4:
                                        return i.label++, {
                                            value: r[1],
                                            done: !1
                                        };
                                    case 5:
                                        i.label++,
                                        o = r[1],
                                        r = [0];
                                        continue;
                                    case 7:
                                        r = i.ops.pop(),
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(t = i.trys, (t = t.length > 0 && t[t.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === r[0] && (!t || r[1] > t[0] && r[1] < t[3])) {
                                            i.label = r[1];
                                            break
                                        }
                                        if (6 === r[0] && i.label < t[1]) {
                                            i.label = t[1],
                                            t = r;
                                            break
                                        }
                                        if (t && i.label < t[2]) {
                                            i.label = t[2],
                                            i.ops.push(r);
                                            break
                                        }
                                        t[2] && i.ops.pop(),
                                        i.trys.pop();
                                        continue
                                    }
                                    r = a.call(e, i)
                                } catch (s) {
                                    r = [6, s],
                                    o = 0
                                } finally {
                                    n = t = 0
                                }
                            if (5 & r[0])
                                throw r[1];
                            return {
                                value: r[0] ? r[1] : void 0,
                                done: !0
                            }
                        }([r, s])
                    }
                }
            },
            r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.workUploadMedia = a.workPersonSignUpFacebookSubmit = a.workPersonSignUpEmailSubmit = a.workContactOrganizerSubmit = a.workTrackShare = a.workGetReceiptFromLocalStorage = a.workCreateCommentSubmit = a.workAcceptTeamInvitationAsPerson = a.workAcceptTeamInvitation = a.workAddFacebookIdToDonation = void 0;
        var i = n("YgTb"),
            s = r(n("EcZt")),
            u = n("0aCL"),
            d = r(n("4M3g")),
            l = n("SKg/"),
            c = r(n("b0lt")),
            m = n("zIs9"),
            p = n("6M7q"),
            h = n("5rFJ"),
            f = n("+Ded");
        function g(e) {
            var a,
                n;
            return t(this, (function(o) {
                switch (o.label) {
                case 0:
                    return o.trys.push([0, , 3, 4]), [4, h.call(u.acceptTeamInvitation, e.payload)];
                case 1:
                    return a = o.sent().data, [4, h.put({
                        payload: a.references.fund_user_permissions,
                        type: d.default.APPEND_CAMPAIGN_ROLES
                    })];
                case 2:
                    return o.sent(), [3, 4];
                case 3:
                    return null === (n = e.onSuccess) || void 0 === n || n.call(e), [7];
                case 4:
                    return [2]
                }
            }))
        }
        function y(e) {
            return t(this, (function(a) {
                switch (a.label) {
                case 0:
                    return a.trys.push([0, , 3, 4]), [4, h.call(u.createCORole)];
                case 1:
                    return a.sent(), [4, h.call(u.acceptTeamInvitation, e.payload)];
                case 2:
                    return a.sent(), [3, 4];
                case 3:
                    return e.onSuccess && e.onSuccess(), [7];
                case 4:
                    return [2]
                }
            }))
        }
        function v(e) {
            var a,
                n,
                o;
            return t(this, (function(t) {
                switch (t.label) {
                case 0:
                    return t.trys.push([0, 3, , 5]), [4, h.call(u.trackShare, e.payload)];
                case 1:
                    return a = t.sent(), n = a.data, [4, h.put({
                        payload: n,
                        type: s.default.TRACK_SHARE_SUCCESS
                    })];
                case 2:
                    return t.sent(), [3, 5];
                case 3:
                    return o = t.sent(), [4, h.put({
                        payload: o.response,
                        type: s.default.TRACK_SHARE_FAILURE
                    })];
                case 4:
                    return t.sent(), [3, 5];
                case 5:
                    return [2]
                }
            }))
        }
        function b(e) {
            var a,
                n,
                o;
            return t(this, (function(t) {
                switch (t.label) {
                case 0:
                    return t.trys.push([0, 4, , 7]), [4, h.call(u.sendMessageToCampaignOrganizer, e.payload)];
                case 1:
                    return a = t.sent(), n = a.data, [4, h.put({
                        payload: n,
                        type: s.default.CONTACT_ORGANIZER_SUCCESS
                    })];
                case 2:
                    return t.sent(), e.onSuccess && e.onSuccess(), [4, h.put({
                        payload: {
                            message: i.t("Your message to {{coFirstName}} successfully sent.", {
                                coFirstName: e.payload.coFirstName
                            }),
                            type: m.AlertType.SUCCESS
                        },
                        type: c.default.DISPLAY_ALERT_CONTENT
                    })];
                case 3:
                    return t.sent(), [3, 7];
                case 4:
                    return o = t.sent(), [4, h.put({
                        payload: o.response,
                        type: s.default.CONTACT_ORGANIZER_FAILURE
                    })];
                case 5:
                    return t.sent(), e.onFailure && e.onFailure(), [4, h.put({
                        payload: {
                            message: i.t("Your message to {{coFirstName}} failed to send. Please try again later.", {
                                coFirstName: e.payload.coFirstName
                            }),
                            type: m.AlertType.ERROR
                        },
                        type: c.default.DISPLAY_ALERT_CONTENT
                    })];
                case 6:
                    return t.sent(), [3, 7];
                case 7:
                    return [2]
                }
            }))
        }
        function S(e) {
            var a,
                n,
                o;
            return t(this, (function(t) {
                switch (t.label) {
                case 0:
                    return t.trys.push([0, 3, , 5]), [4, h.call(u.signUpEmailPerson, e.payload)];
                case 1:
                    return a = t.sent(), n = a.data, !(!n.auth || !n.auth.user_id) && 302 === a.status && f.trackEvents.push({
                        completionType: "email_signin",
                        type: "cp_user_signup_success_callback"
                    }), [4, h.put({
                        payload: n,
                        type: s.default.PERSON_SIGNUP_EMAIL_SUCCESS
                    })];
                case 2:
                    return t.sent(), e.onSuccess && e.onSuccess(), [3, 5];
                case 3:
                    return o = t.sent(), [4, h.put({
                        payload: o.response,
                        type: s.default.PERSON_SIGNUP_EMAIL_FAILURE
                    })];
                case 4:
                    return t.sent(), e.onFailure && e.onFailure(o.response.data), [3, 5];
                case 5:
                    return [2]
                }
            }))
        }
        function w(e) {
            var a,
                n;
            return t(this, (function(o) {
                switch (o.label) {
                case 0:
                    return o.trys.push([0, 2, , 3]), [4, h.call(u.signUpEmailUser, e.payload)];
                case 1:
                    return 200 === (a = o.sent()).status ? f.trackEvents.push({
                        completionType: "email",
                        type: "cp_user_signup_success_callback"
                    }) : 302 === a.status && f.trackEvents.push({
                        completionType: "email_signin",
                        type: "cp_user_signup_success_callback"
                    }), e.onSuccess && e.onSuccess(), [3, 3];
                case 2:
                    return n = o.sent(), e.onFailure && e.onFailure(n.response.data), [3, 3];
                case 3:
                    return [2]
                }
            }))
        }
        function C(e) {
            var a,
                n,
                o;
            return t(this, (function(t) {
                switch (t.label) {
                case 0:
                    return t.trys.push([0, 3, , 5]), [4, h.call(u.signUpFacebookPerson, e.payload)];
                case 1:
                    return a = t.sent(), n = a.data, [4, h.put({
                        payload: n,
                        type: s.default.PERSON_SIGNUP_FACEBOOK_SUCCESS
                    })];
                case 2:
                    return t.sent(), e.onSuccess && e.onSuccess(), [3, 5];
                case 3:
                    return o = t.sent(), [4, h.put({
                        payload: o.response,
                        type: s.default.PERSON_SIGNUP_FACEBOOK_FAILURE
                    })];
                case 4:
                    return t.sent(), e.onFailure && e.onFailure(o.response.data), [3, 5];
                case 5:
                    return [2]
                }
            }))
        }
        function _(e) {
            var a;
            return t(this, (function(n) {
                switch (n.label) {
                case 0:
                    return n.trys.push([0, 2, , 3]), [4, h.call(u.signUpFacebookUser, e.payload)];
                case 1:
                    return n.sent(), e.onSuccess && e.onSuccess(), [3, 3];
                case 2:
                    return a = n.sent(), e.onFailure && e.onFailure(a.response.data), [3, 3];
                case 3:
                    return [2]
                }
            }))
        }
        function P(e) {
            var a,
                n,
                r,
                i,
                c,
                m;
            return t(this, (function(t) {
                switch (t.label) {
                case 0:
                    return t.trys.push([0, 11, , 15]), [4, h.call(u.submitComment, e.payload)];
                case 1:
                    return a = t.sent(), (n = a.data).references.contents[0] && n.references.contents[0].ugc_id ? (r = new Date, n.references.contents[0].timestamp = r.toISOString(), n.references.donations && n.references.donations[0].is_anonymous || p.storeComment(e.payload.fundUrl, n.references.contents[0], n.references.photos, n.references.donations ? n.references.donations[0] : void 0), n.references.donations ? [4, h.select(l.getFeedMetaState)] : [3, 6]) : [3, 8];
                case 2:
                    return i = t.sent(), c = i.campaign, p.storeDonation(e.payload.fundUrl, o(o({}, n.references.donations[0]), {
                        checkout_id: e.payload.checkoutId || 0
                    }), c.last_updated_at), e.payload.checkoutId ? (n.references.donations[0].checkout_id = e.payload.checkoutId, [4, h.put({
                        payload: n,
                        type: d.default.GET_FEED_CHECKOUT_UPDATE
                    })]) : [3, 4];
                case 3:
                    return t.sent(), [3, 6];
                case 4:
                    return [4, h.put({
                        payload: n,
                        type: d.default.GET_FEED_DONATIONS_UPDATE
                    })];
                case 5:
                    t.sent(),
                    t.label = 6;
                case 6:
                    return [4, h.put({
                        payload: {
                            campaignUrl: e.payload.fundUrl
                        },
                        type: d.default.GET_FEED_COMMENTS_IN_PROGRESS
                    })];
                case 7:
                    t.sent(),
                    t.label = 8;
                case 8:
                    return [4, h.put({
                        payload: n,
                        type: s.default.CREATE_COMMENT_SUCCESS
                    })];
                case 9:
                    return t.sent(), [4, h.put({
                        payload: e.payloadSuccess,
                        type: e.typeSuccess
                    })];
                case 10:
                    return t.sent(), [3, 15];
                case 11:
                    return m = t.sent(), [4, h.put({
                        payload: m.response,
                        type: s.default.CREATE_COMMENT_FAILURE
                    })];
                case 12:
                    return t.sent(), e.payloadFailure && e.typeFailure ? [4, h.put({
                        payload: e.payloadFailure,
                        type: e.typeFailure
                    })] : [3, 14];
                case 13:
                    t.sent(),
                    t.label = 14;
                case 14:
                    return [3, 15];
                case 15:
                    return [2]
                }
            }))
        }
        function E(e) {
            var a,
                n,
                r;
            return t(this, (function(t) {
                switch (t.label) {
                case 0:
                    return t.trys.push([0, 3, , 5]), [4, h.call(u.uploadImage, e.payload)];
                case 1:
                    return a = t.sent(), n = a.data, [4, h.put({
                        payload: o(o({}, n), {
                            fileName: e.payload.fileName
                        }),
                        type: s.default.UPLOAD_MEDIA_POSTDONATE_COMMENT_SUCCESS
                    })];
                case 2:
                    return t.sent(), [3, 5];
                case 3:
                    return r = t.sent(), [4, h.put({
                        payload: {
                            error: r.response.data.error,
                            fileName: e.payload.fileName
                        },
                        type: s.default.UPLOAD_MEDIA_POSTDONATE_COMMENT_FAILURE
                    })];
                case 4:
                    return t.sent(), [3, 5];
                case 5:
                    return [2]
                }
            }))
        }
        function k(e) {
            var a,
                n,
                o,
                r;
            return t(this, (function(t) {
                switch (t.label) {
                case 0:
                    return t.trys.push([0, 10, , 12]), [4, h.call(u.setFacebookId, e.payload)];
                case 1:
                    return a = t.sent(), (n = a.data).references.donations && n.references.donations.length ? [4, h.select(l.getFeedMetaState)] : [3, 6];
                case 2:
                    return o = t.sent(), p.updateDonation(e.payload.fundUrl, n.references.donations[0].donation_id, {
                        checkout_id: e.payload.checkoutId || 0,
                        profile_url: n.references.donations[0].profile_url
                    }, o.campaign.last_updated_at), e.payload.checkoutId ? (n.references.donations[0].checkout_id = e.payload.checkoutId, [4, h.put({
                        payload: n,
                        type: d.default.GET_FEED_CHECKOUT_UPDATE
                    })]) : [3, 4];
                case 3:
                    return t.sent(), [3, 6];
                case 4:
                    return [4, h.put({
                        payload: n,
                        type: d.default.GET_FEED_DONATIONS_UPDATE
                    })];
                case 5:
                    t.sent(),
                    t.label = 6;
                case 6:
                    return n.references.contents && n.references.contents.length && (n.references.contents[0].comment || n.references.contents[0].photos) ? (p.updateComment(e.payload.fundUrl, n.references.contents[0].ugc_id, {
                        profile_url: n.references.contents[0].profile_url
                    }), [4, h.put({
                        payload: n,
                        type: d.default.GET_FEED_COMMENTS_UPDATE
                    })]) : [3, 8];
                case 7:
                    t.sent(),
                    t.label = 8;
                case 8:
                    return [4, h.put({
                        payload: n,
                        type: s.default.ADD_FACEBOOK_ID_TO_DONATION_SUCCESS
                    })];
                case 9:
                    return t.sent(), [3, 12];
                case 10:
                    return r = t.sent(), [4, h.put({
                        payload: {
                            error: r.response.data.error
                        },
                        type: s.default.ADD_FACEBOOK_ID_TO_DONATION_FAILURE
                    })];
                case 11:
                    return t.sent(), [3, 12];
                case 12:
                    return [2]
                }
            }))
        }
        function F(e) {
            var a,
                n,
                o;
            return t(this, (function(t) {
                switch (t.label) {
                case 0:
                    return t.trys.push([0, 3, , 5]), [4, h.call(u.getBigWebDonationIdFromUC, [e.payload])];
                case 1:
                    return a = t.sent(), n = a.data, [4, h.put({
                        payload: n,
                        type: s.default.GET_BIGWEB_DONATION_ID_SUCCESS
                    })];
                case 2:
                    return t.sent(), [3, 5];
                case 3:
                    return o = t.sent(), [4, h.put({
                        payload: {
                            error: o
                        },
                        type: s.default.GET_BIGWEB_DONATION_ID_FAILURE
                    })];
                case 4:
                    return t.sent(), [3, 5];
                case 5:
                    return [2]
                }
            }))
        }
        function T(e) {
            var a,
                n,
                o;
            return t(this, (function(t) {
                switch (t.label) {
                case 0:
                    return t.trys.push([0, 3, , 5]), [4, h.call(u.getReceiptFromEncryptedDonationId, e.payload)];
                case 1:
                    return a = t.sent(), n = a.data, [4, h.put({
                        payload: n,
                        type: s.default.GET_DONATION_RECEIPT_SUCCESS
                    })];
                case 2:
                    return t.sent(), [3, 5];
                case 3:
                    return o = t.sent(), [4, h.put({
                        payload: {
                            error: o
                        },
                        type: s.default.GET_DONATION_RECEIPT_FAILURE
                    })];
                case 4:
                    return t.sent(), [3, 5];
                case 5:
                    return [2]
                }
            }))
        }
        function A(e) {
            var a,
                n,
                o;
            return t(this, (function(t) {
                switch (t.label) {
                case 0:
                    return t.trys.push([0, 2, , 4]), a = p.getLatestDonation(e.payload), n = {
                        amount: a.amount,
                        currencyCode: a.currency,
                        donor: {
                            email: a.email,
                            firstName: "",
                            name: a.name
                        }
                    }, [4, h.put({
                        payload: n,
                        type: s.default.GET_DONATION_RECEIPT_SUCCESS
                    })];
                case 1:
                    return t.sent(), [3, 4];
                case 2:
                    return o = t.sent(), [4, h.put({
                        payload: {
                            error: o
                        },
                        type: s.default.GET_DONATION_RECEIPT_FAILURE
                    })];
                case 3:
                    return t.sent(), [3, 4];
                case 4:
                    return [2]
                }
            }))
        }
        function I() {
            return t(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, h.takeEvery(s.default.ACCEPT_TEAM_INVITATION, g)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        function G() {
            return t(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, h.takeEvery(s.default.GET_RECEIPT_FROM_ENCRYPTED_DONATION_ID, T)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        function N() {
            return t(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, h.takeEvery(s.default.GET_RECEIPT_FROM_LOCAL_STORAGE, A)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        function z() {
            return t(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, h.takeEvery(s.default.ACCEPT_TEAM_INVITATION_AS_PERSON, y)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        function M() {
            return t(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, h.takeEvery(s.default.TRACK_SHARE_IN_PROGRESS, v)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        function O() {
            return t(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, h.takeEvery(s.default.CONTACT_ORGANIZER_IN_PROGRESS, b)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        function D() {
            return t(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, h.takeEvery(s.default.PERSON_SIGNUP_EMAIL_IN_PROGRESS, S)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        function R() {
            return t(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, h.takeEvery(s.default.USER_SIGNUP_EMAIL_IN_PROGRESS, w)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        function U() {
            return t(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, h.takeEvery(s.default.PERSON_SIGNUP_FACEBOOK_IN_PROGRESS, C)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        function x() {
            return t(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, h.takeEvery(s.default.USER_SIGNUP_FACEBOOK_IN_PROGRESS, _)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        function L() {
            return t(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, h.takeEvery(s.default.CREATE_COMMENT_IN_PROGRESS, P)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        function H() {
            return t(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, h.takeEvery(s.default.UPLOAD_MEDIA_POSTDONATE_COMMENT_IN_PROGRESS, E)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        function j() {
            return t(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, h.takeEvery(s.default.ADD_FACEBOOK_ID_TO_DONATION_IN_PROGRESS, k)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        function q() {
            return t(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, h.takeEvery(s.default.GET_BIGWEB_DONATION_ID_IN_PROGRESS, F)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        a.workAcceptTeamInvitation = g,
        a.workAcceptTeamInvitationAsPerson = y,
        a.workTrackShare = v,
        a.workContactOrganizerSubmit = b,
        a.workPersonSignUpEmailSubmit = S,
        a.workPersonSignUpFacebookSubmit = C,
        a.workCreateCommentSubmit = P,
        a.workUploadMedia = E,
        a.workAddFacebookIdToDonation = k,
        a.workGetReceiptFromLocalStorage = A,
        a.default = function() {
            return t(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, h.all([I(), z(), j(), L(), q(), G(), N(), M(), O(), D(), U(), R(), x(), H()])];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
    },
    A86q: function(e, a, n) {
        "use strict";
        var o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var t = o(n("xucP")),
            r = n("ANjH");
        a.default = r.combineReducers({
            contact: t.default
        })
    },
    A9kC: function(e, a, n) {
        "use strict";
        var o;
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        function(e) {
            e.SET_LOCALE_COOKIE_SUCCESS = "SET_LOCALE_COOKIE_SUCCESS",
            e.SET_LOCALE_COOKIE_IN_PROGRESS = "SET_LOCALE_COOKIE_IN_PROGRESS",
            e.SET_LOCALE_COOKIE_FAILURE = "SET_LOCALE_COOKIE_FAILURE",
            e.SET_COOKIE_WARNING_COOKIE_SUCCESS = "SET_COOKIE_WARNING_COOKIE_SUCCESS",
            e.SET_COOKIE_WARNING_COOKIE_IN_PROGRESS = "SET_COOKIE_WARNING_COOKIE_IN_PROGRESS",
            e.SET_COOKIE_WARNING_COOKIE_FAILURE = "SET_COOKIE_WARNING_COOKIE_FAILURE",
            e.REDIRECT_ROUTER_PUSH = "REDIRECT_ROUTER_PUSH"
        }(o || (o = {})),
        a.default = o
    },
    ACRQ: function(e, a, n) {
        "use strict";
        var o = this && this.__assign || function() {
                return (o = Object.assign || function(e) {
                    for (var a, n = 1, o = arguments.length; n < o; n++)
                        for (var t in a = arguments[n])
                            Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
                    return e
                }).apply(this, arguments)
            },
            t = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.commentsMetaReducer = a.countsMetaReducer = a.teamMembersMetaReducer = a.topDonationsMetaReducer = a.donationsMetaReducer = a.updatesMetaReducer = a.campaignMetaReducer = a.identityMetaReducer = a.initialState = void 0;
        var r = t(n("4M3g")),
            i = n("3WYk"),
            s = t(n("V/h/")),
            u = n("ANjH");
        a.initialState = {
            campaign: {
                error: !1,
                initialized: !1,
                last_updated_at: "",
                loading: !1,
                statusCode: 200
            },
            comments: {
                error: !1,
                has_next: !1,
                initialized: !1,
                last_updated_at: "",
                loading: !1
            },
            counts: {
                error: !1,
                initialized: !1,
                last_updated_at: "",
                loading: !1
            },
            donations: {
                error: !1,
                has_next: !1,
                initialized: !1,
                last_updated_at: "",
                loading: !1
            },
            identity: {
                error: !1,
                has_next: !1,
                initialized: !1,
                last_updated_at: "",
                loading: !1
            },
            photos: i.photosFeedInitialState,
            team_members: {
                error: !1,
                initialized: !1,
                last_updated_at: "",
                loading: !1
            },
            topDonations: {
                error: !1,
                initialized: !1,
                last_updated_at: "",
                loading: !1
            },
            updates: {
                error: !1,
                has_next: !1,
                initialized: !1,
                last_updated_at: "",
                loading: !1
            }
        },
        a.identityMetaReducer = function(e, n) {
            switch (void 0 === e && (e = a.initialState.identity), n.type) {
            case r.default.GET_FEED_IDENTITY_IN_PROGRESS:
                return o(o({}, e), {
                    error: !1,
                    loading: !0
                });
            case r.default.GET_FEED_IDENTITY_SUCCESS:
                return o(o({}, e), {
                    error: !1,
                    initialized: !0,
                    loading: !1
                });
            case r.default.GET_FEED_IDENTITY_FAILURE:
                return o(o({}, e), {
                    error: n.payload.error,
                    initialized: !0,
                    loading: !1
                });
            default:
                return e
            }
        },
        a.campaignMetaReducer = function(e, n) {
            switch (void 0 === e && (e = a.initialState.campaign), n.type) {
            case r.default.GET_FEED_CAMPAIGN_IN_PROGRESS:
                return o(o({}, e), {
                    error: !1,
                    loading: !0
                });
            case r.default.GET_FEED_CAMPAIGN_SUCCESS:
                return o(o({}, e), {
                    error: !1,
                    initialized: !0,
                    last_updated_at: n.payload.meta.last_updated_at,
                    loading: !1,
                    statusCode: 200
                });
            case r.default.GET_FEED_CAMPAIGN_FAILURE:
                return o(o({}, e), {
                    error: n.payload.error,
                    loading: !1,
                    statusCode: n.payload.statusCode
                });
            default:
                return e
            }
        },
        a.updatesMetaReducer = function(e, n) {
            switch (void 0 === e && (e = a.initialState.updates), n.type) {
            case r.default.GET_FEED_UPDATES_IN_PROGRESS:
                return o(o({}, e), {
                    error: !1,
                    loading: !0
                });
            case r.default.GET_FEED_UPDATES_SUCCESS:
                return o(o({}, e), {
                    error: !1,
                    has_next: n.payload.meta.has_next,
                    initialized: !0,
                    loading: !1
                });
            case r.default.GET_FEED_UPDATES_FAILURE:
                return o(o({}, e), {
                    error: n.payload.error,
                    loading: !1
                });
            default:
                return e
            }
        },
        a.donationsMetaReducer = function(e, n) {
            switch (void 0 === e && (e = a.initialState.donations), n.type) {
            case r.default.GET_FEED_DONATIONS_IN_PROGRESS:
                return o(o({}, e), {
                    error: !1,
                    loading: !0
                });
            case r.default.GET_FEED_DONATIONS_SUCCESS:
                return o(o({}, e), {
                    error: !1,
                    has_next: n.payload.meta.has_next,
                    initialized: !0,
                    last_updated_at: n.payload.meta.last_updated_at,
                    loading: !1
                });
            case r.default.GET_FEED_DONATIONS_FAILURE:
                return o(o({}, e), {
                    error: n.payload.error,
                    loading: !1
                });
            default:
                return e
            }
        },
        a.topDonationsMetaReducer = function(e, n) {
            switch (void 0 === e && (e = a.initialState.topDonations), n.type) {
            case r.default.GET_FEED_TOP_DONATIONS_IN_PROGRESS:
                return o(o({}, e), {
                    error: !1,
                    loading: !0
                });
            case r.default.GET_FEED_TOP_DONATIONS_FAILURE:
                return o(o({}, e), {
                    error: n.payload.error,
                    loading: !1
                });
            case r.default.GET_FEED_TOP_DONATIONS_SUCCESS:
                return o(o({}, e), {
                    error: !1,
                    initialized: !0,
                    loading: !1
                });
            default:
                return e
            }
        },
        a.teamMembersMetaReducer = function(e, n) {
            switch (void 0 === e && (e = a.initialState.team_members), n.type) {
            case r.default.GET_FEED_TEAM_MEMBERS_IN_PROGRESS:
                return o(o({}, e), {
                    error: !1,
                    loading: !0
                });
            case r.default.GET_FEED_TEAM_MEMBERS_SUCCESS:
                return o(o({}, e), {
                    error: !1,
                    initialized: !0,
                    loading: !1
                });
            case r.default.GET_FEED_TEAM_MEMBERS_FAILURE:
                return o(o({}, e), {
                    error: n.payload.error,
                    loading: !1
                });
            default:
                return e
            }
        },
        a.countsMetaReducer = function(e, n) {
            switch (void 0 === e && (e = a.initialState.team_members), n.type) {
            case r.default.GET_FEED_COUNTS_IN_PROGRESS:
                return o(o({}, e), {
                    error: !1,
                    loading: !0
                });
            case r.default.GET_FEED_COUNTS_SUCCESS:
                return o(o({}, e), {
                    error: !1,
                    initialized: !0,
                    loading: !1,
                    statusCode: 200
                });
            case r.default.GET_FEED_COUNTS_FAILURE:
                return o(o({}, e), {
                    error: n.payload.error,
                    loading: !1,
                    statusCode: n.payload.statusCode
                });
            default:
                return e
            }
        },
        a.commentsMetaReducer = function(e, n) {
            switch (void 0 === e && (e = a.initialState.comments), n.type) {
            case r.default.GET_FEED_COMMENTS_IN_PROGRESS:
                return o(o({}, e), {
                    error: !1,
                    loading: !0
                });
            case r.default.GET_FEED_COMMENTS_SUCCESS:
                return o(o({}, e), {
                    error: !1,
                    has_next: n.payload.meta.has_next,
                    initialized: !0,
                    loading: !1
                });
            case r.default.GET_FEED_COMMENTS_FAILURE:
                return o(o({}, e), {
                    error: n.payload.error,
                    loading: !1
                });
            default:
                return e
            }
        },
        a.default = u.combineReducers({
            campaign: s.default(a.campaignMetaReducer, a.initialState.campaign),
            comments: s.default(a.commentsMetaReducer, a.initialState.comments),
            counts: s.default(a.countsMetaReducer, a.initialState.counts),
            donations: s.default(a.donationsMetaReducer, a.initialState.donations),
            identity: s.default(a.identityMetaReducer, a.initialState.identity),
            photos: i.photosFeedMetaReducer,
            team_members: s.default(a.teamMembersMetaReducer, a.initialState.team_members),
            topDonations: s.default(a.topDonationsMetaReducer, a.initialState.topDonations),
            updates: s.default(a.updatesMetaReducer, a.initialState.updates)
        })
    },
    BX5r: function(e, a, n) {
        "use strict";
        var o = this && this.__generator || function(e, a) {
                var n,
                    o,
                    t,
                    r,
                    i = {
                        label: 0,
                        sent: function() {
                            if (1 & t[0])
                                throw t[1];
                            return t[1]
                        },
                        trys: [],
                        ops: []
                    };
                return r = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;
                function s(r) {
                    return function(s) {
                        return function(r) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; i;)
                                try {
                                    if (n = 1, o && (t = 2 & r[0] ? o.return : r[0] ? o.throw || ((t = o.return) && t.call(o), 0) : o.next) && !(t = t.call(o, r[1])).done)
                                        return t;
                                    switch (o = 0, t && (r = [2 & r[0], t.value]), r[0]) {
                                    case 0:
                                    case 1:
                                        t = r;
                                        break;
                                    case 4:
                                        return i.label++, {
                                            value: r[1],
                                            done: !1
                                        };
                                    case 5:
                                        i.label++,
                                        o = r[1],
                                        r = [0];
                                        continue;
                                    case 7:
                                        r = i.ops.pop(),
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(t = i.trys, (t = t.length > 0 && t[t.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === r[0] && (!t || r[1] > t[0] && r[1] < t[3])) {
                                            i.label = r[1];
                                            break
                                        }
                                        if (6 === r[0] && i.label < t[1]) {
                                            i.label = t[1],
                                            t = r;
                                            break
                                        }
                                        if (t && i.label < t[2]) {
                                            i.label = t[2],
                                            i.ops.push(r);
                                            break
                                        }
                                        t[2] && i.ops.pop(),
                                        i.trys.pop();
                                        continue
                                    }
                                    r = a.call(e, i)
                                } catch (s) {
                                    r = [6, s],
                                    o = 0
                                } finally {
                                    n = t = 0
                                }
                            if (5 & r[0])
                                throw r[1];
                            return {
                                value: r[0] ? r[1] : void 0,
                                done: !0
                            }
                        }([r, s])
                    }
                }
            },
            t = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.workAddFacebookIdToPerson = a.workForgotPassword = void 0;
        var r = t(n("mO48")),
            i = n("r6Is"),
            s = n("5rFJ");
        function u(e) {
            var a,
                n,
                t;
            return o(this, (function(o) {
                switch (o.label) {
                case 0:
                    return o.trys.push([0, 3, , 5]), [4, s.call(i.resetPassword, e.payload)];
                case 1:
                    return a = o.sent(), n = a.data, [4, s.put({
                        payload: n,
                        type: r.default.PERSON_RESET_PASSWORD_SUCCESS
                    })];
                case 2:
                    return o.sent(), e.onSuccess && e.onSuccess(e.payload), [3, 5];
                case 3:
                    return t = o.sent(), [4, s.put({
                        payload: t.response,
                        type: r.default.PERSON_RESET_PASSWORD_FAILURE
                    })];
                case 4:
                    return o.sent(), e.onFailure && e.onFailure(t.response.data), [3, 5];
                case 5:
                    return [2]
                }
            }))
        }
        function d(e) {
            var a,
                n,
                t;
            return o(this, (function(o) {
                switch (o.label) {
                case 0:
                    return o.trys.push([0, 3, , 5]), [4, s.call(i.setFacebookIdForPerson, e.payload)];
                case 1:
                    return a = o.sent(), n = a.data, [4, s.put({
                        payload: n,
                        type: r.default.PERSON_ADD_FACEBOOK_ID_SUCCESS
                    })];
                case 2:
                    return o.sent(), [3, 5];
                case 3:
                    return t = o.sent(), [4, s.put({
                        payload: {
                            error: t.response.data.error
                        },
                        type: r.default.PERSON_ADD_FACEBOOK_ID_FAILURE
                    })];
                case 4:
                    return o.sent(), [3, 5];
                case 5:
                    return [2]
                }
            }))
        }
        function l() {
            return o(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, s.takeEvery(r.default.PERSON_RESET_PASSWORD_IN_PROGRESS, u)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        function c() {
            return o(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, s.takeEvery(r.default.PERSON_ADD_FACEBOOK_ID_IN_PROGRESS, d)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        a.workForgotPassword = u,
        a.workAddFacebookIdToPerson = d,
        a.default = function() {
            return o(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, s.all([l(), c()])];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
    },
    BYM7: function(e, a, n) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.makeGetShortenedShareUrl = a.makeGetUrlShortnerState = void 0;
        var o = n("G4qV"),
            t = function(e) {
                return e.urlShortner
            };
        a.makeGetUrlShortnerState = function() {
            return o.createSelector([t], (function(e) {
                return e
            }))
        };
        a.makeGetShortenedShareUrl = function(e, a) {
            return o.createSelector([t], (function(n) {
                var o;
                return (n.shortenedShareUtmUrls[a] || ((o = {})[e] = "", o))[e]
            }))
        }
    },
    BoLd: function(e, a, n) {
        "use strict";
        var o = this && this.__assign || function() {
                return (o = Object.assign || function(e) {
                    for (var a, n = 1, o = arguments.length; n < o; n++)
                        for (var t in a = arguments[n])
                            Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
                    return e
                }).apply(this, arguments)
            },
            t = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.initialState = void 0;
        var r = n("C0Xu"),
            i = t(n("oxJe")),
            s = t(n("V/h/"));
        a.initialState = {
            email: "",
            facebookId: "",
            facebookToken: "",
            first_name: "",
            last_name: "",
            meta: {
                error: {},
                status: r.LoadingStateStatus.DEFAULT
            }
        };
        a.default = s.default((function(e, n) {
            switch (n.type) {
            case i.default.FB_AUTHENTICATE_SUCCESS:
                return o(o({}, n.payload), {
                    meta: {
                        error: {},
                        status: r.LoadingStateStatus.DEFAULT
                    }
                });
            case i.default.FB_LOGOUT_SUCCESS:
                return a.initialState;
            case i.default.FB_AUTHENTICATE_FAILURE:
                return o(o({}, e), {
                    meta: {
                        error: {},
                        status: r.LoadingStateStatus.DEFAULT
                    }
                });
            case i.default.FB_AUTHENTICATE_IN_PROGRESS:
                return o(o({}, e), {
                    meta: {
                        error: {},
                        status: r.LoadingStateStatus.PENDING
                    }
                });
            default:
                return e
            }
        }), a.initialState)
    },
    BpC9: function(e, a, n) {
        "use strict";
        var o;
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        function(e) {
            e.GET_TEAM_INVITE_EMAIL_TEMPLATE_FAILURE = "GET_TEAM_INVITE_EMAIL_TEMPLATE_FAILURE",
            e.GET_TEAM_INVITE_EMAIL_TEMPLATE_IN_PROGRESS = "GET_TEAM_INVITE_EMAIL_TEMPLATE_IN_PROGRESS",
            e.GET_TEAM_INVITE_EMAIL_TEMPLATE_SUCCESS = "GET_TEAM_INVITE_EMAIL_TEMPLATE_SUCCESS"
        }(o || (o = {})),
        a.default = o
    },
    C0Xu: function(e, a, n) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.SignInSignUpType = a.ContactFormType = a.LoadingStateStatus = a.CONTACT_FORM_SELF_SERVICE = a.CONTACT_FORM_SMART_ANSWER = a.CONTACT_FORM_JOURNALIST = a.CONTACT_FORM_FRAUD = a.CONTACT_FORM_DONOR = a.CONTACT_FORM_DEFAULT = a.CONTACT_FORM_BENE = a.Audience = a.SmartAnswerType = a.TemplateType = a.VelocityType = a.TopSupporterType = a.CharityCountries = void 0,
        function(e) {
            e.AU = "AU",
            e.CA = "CA",
            e.GB = "GB",
            e.IE = "IE",
            e.US = "US"
        }(a.CharityCountries || (a.CharityCountries = {})),
        function(e) {
            e.YOUR_DONATION = "your_donation",
            e.MOST_RECENT_DONOR = "most_recent_donor",
            e.TOP_DONOR = "top_donor",
            e.FIRST_DONOR = "first_donor"
        }(a.TopSupporterType || (a.TopSupporterType = {})),
        function(e) {
            e.RECENT_DONATIONS = "recent_donations",
            e.RECENT_VIEWS = "recent_views"
        }(a.VelocityType || (a.VelocityType = {})),
        function(e) {
            e.TEAM_INVITE = "team_invite"
        }(a.TemplateType || (a.TemplateType = {})),
        function(e) {
            e.EDIT_COMMENT = "editcomment",
            e.EDIT_NAME = "editname",
            e.GET_RECEIPT = "getreceipt",
            e.CHANGE_ANONYMITY = "changeanonymity",
            e.REFUND_ALL = "refundall"
        }(a.SmartAnswerType || (a.SmartAnswerType = {})),
        function(e) {
            e[e.ALL = 0] = "ALL",
            e[e.SIGNED_IN = 1] = "SIGNED_IN"
        }(a.Audience || (a.Audience = {})),
        a.CONTACT_FORM_BENE = "ContactFormBene",
        a.CONTACT_FORM_DEFAULT = "ContactFormDefault",
        a.CONTACT_FORM_DONOR = "ContactFormDonor",
        a.CONTACT_FORM_FRAUD = "ContactFormFraud",
        a.CONTACT_FORM_JOURNALIST = "ContactFormJournalist",
        a.CONTACT_FORM_SMART_ANSWER = "ContactFormSmartAnswer",
        a.CONTACT_FORM_SELF_SERVICE = "ContactFormSelfService",
        function(e) {
            e.PENDING = "pending",
            e.SUCCESS = "success",
            e.ERROR = "error",
            e.DEFAULT = "default"
        }(a.LoadingStateStatus || (a.LoadingStateStatus = {})),
        function(e) {
            e[e.DEFAULT = 0] = "DEFAULT",
            e[e.JOURNALIST = 1] = "JOURNALIST",
            e[e.FRAUD = 2] = "FRAUD",
            e[e.BENE = 3] = "BENE",
            e[e.DONOR = 4] = "DONOR"
        }(a.ContactFormType || (a.ContactFormType = {})),
        function(e) {
            e.FACEBOOK = "facebook",
            e.EMAIL = "email"
        }(a.SignInSignUpType || (a.SignInSignUpType = {}))
    },
    CXyy: function(e, a, n) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var o = n("vNqi");
        Object.defineProperty(a, "ZendeskChatSDK", {
            enumerable: !0,
            get: function() {
                return o.default
            }
        }),
        Object.defineProperty(a, "ZendeskChatSDKParams", {
            enumerable: !0,
            get: function() {
                return o.ZendeskChatSDKParams
            }
        })
    },
    Cge7: function(e, a, n) {
        "use strict";
        var o = this && this.__assign || function() {
                return (o = Object.assign || function(e) {
                    for (var a, n = 1, o = arguments.length; n < o; n++)
                        for (var t in a = arguments[n])
                            Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
                    return e
                }).apply(this, arguments)
            },
            t = this && this.__read || function(e, a) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n)
                    return e;
                var o,
                    t,
                    r = n.call(e),
                    i = [];
                try {
                    for (; (void 0 === a || a-- > 0) && !(o = r.next()).done;)
                        i.push(o.value)
                } catch (s) {
                    t = {
                        error: s
                    }
                } finally {
                    try {
                        o && !o.done && (n = r.return) && n.call(r)
                    } finally {
                        if (t)
                            throw t.error
                    }
                }
                return i
            },
            r = this && this.__spread || function() {
                for (var e = [], a = 0; a < arguments.length; a++)
                    e = e.concat(t(arguments[a]));
                return e
            };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.makeGetCampaignCanonicalUrl = a.makeGetTopSupporters = a.makeGetInDegradedMode = a.makeGetCampaignUnattributedDonationCount = a.makeGetCampaignUnattributedAmountRaised = a.makeGetFeedVelocityTypeTotal = a.makeGetFeedVelocity = a.makeGetCampaignTopDonations = a.makeGetPersonId = a.makeGetCampaignUpdatesCount = a.makeGetIsStatsUser = a.makeGetCampaignPhoto = a.makeGetTeamInfo = a.makeGetOrganizerLocation = a.makeGetUserAvatarValues = a.makeGetCommunityPhotos = a.makeGetIsLoggedIn = a.makeGetUserProfileImage = a.makeGetUserLastName = a.makeGetUserInitials = a.makeGetUserEmail = a.makeGetUserFullName = a.makeGetUserFirstName = a.makeGetMemberId = a.makeGetHasBeneficiary = a.makeHasCampaign = a.makeGetIsTeamCampaignWithTeamMembers = a.makeGetIsTeamEnabledCampaign = a.makeGetIsCharity = a.makeGetIsCampaignActive = a.makeGetIsPartner = a.makeGetCampaignPartner = a.makeGetIdentity = a.makeGetUpdatePhotos = a.makeGetOrderedCampaignPhotos = a.makeGetDescriptionPhotos = a.makeGetCampaignCurrency = a.makeGetCanViewCampaignLite = a.makeGetCampaignTeamMembers = a.makeGetCampaignMainPhoto = a.makeGetCampaignRoles = a.makeGetCampaignLaunchDate = a.makeGetCampaignStatus = a.makeGetCampaignStats = a.makeHasCommentsEnabled = a.makeGetCampaignGoalAmount = a.makeGetCampaignCurrentAmount = a.makeGetCampaignLastDonation = a.makeGetCampaignDonationCount = a.makeGetCampaignDonations = a.makeGetCampaignUpdates = a.makeGetCampaignPhotos = a.makeGetCampaignBeneficiaryFullName = a.makeGetCampaignBeneficiaryAvatar = a.makeGetCampaignOrganizerLastName = a.makeGetCampaignOrganizerInitials = a.makeGetCampaignOrganizerImage = a.makeGetCampaignOrganizerFirstName = a.makeGetCampaignOrganizerFullName = a.makeGetCampaignOrganizerAvatar = a.makeGetCampaignDescription = a.makeGetCampaignTitle = a.makeGetCampaignId = a.makeGetCampaignUrl = a.makeGetCampaignCreatedDate = a.makeGetCampaignCoPhotosCount = a.makeGetCampaignCommunityPhotosCount = a.makeGetCampaignCommentCount = a.makeGetCampaignComments = a.makeGetCampaignCity = a.makeGetCampaignCharityLogo = a.makeGetCampaignCharity = a.makeGetCampaignCategoryId = a.makeGetCampaign = a.makeGetAuthenticatedPerson = a.getFeedState = void 0;
        var i = n("G4qV"),
            s = n("wE+H"),
            u = n("0Y3C"),
            d = n("p1Kg"),
            l = n("Y4ob"),
            c = n("ZZcF"),
            m = n("mZEw"),
            p = n("YgTb"),
            h = n("8QVh"),
            f = function(e) {
                return e.feed
            };
        a.getFeedState = f;
        var g = function() {
            return i.createSelector([f], (function(e) {
                return e.campaign
            }))
        };
        a.makeGetCampaign = g;
        var y = function() {
            return i.createSelector([f], (function(e) {
                return e.velocity
            }))
        };
        a.makeGetFeedVelocity = y;
        a.makeGetTopSupporters = function() {
            return i.createSelector([f, l.makeGetLocaleNumberFormatter(), c.makeGetLocale()], (function(e, a, n) {
                var o = e.top_supporters;
                if (o.most_recent_donor && o.top_donor && o.first_donor) {
                    var t = [o.most_recent_donor, o.top_donor, o.first_donor],
                        r = m.formatDonationsList(t, a, n);
                    return {
                        most_recent_donor: r[0],
                        top_donor: r[1],
                        first_donor: r[2]
                    }
                }
            }))
        };
        var v = function() {
            return i.createSelector([g()], (function(e) {
                return e.url || e.default_url
            }))
        };
        a.makeGetCampaignUrl = v;
        a.makeGetCampaignId = function() {
            return i.createSelector([g()], (function(e) {
                return e.id
            }))
        };
        a.makeGetCampaignTitle = function() {
            return i.createSelector([g()], (function(e) {
                return e.fund_name
            }))
        };
        a.makeGetCampaignDescription = function() {
            return i.createSelector([g()], (function(e) {
                return e.fund_description.replace(/\[email redacted\]/g, p.t("[email redacted]")).replace(/\[phone redacted\]/g, p.t("[phone redacted]"))
            }))
        };
        a.makeGetCampaignCategoryId = function() {
            return i.createSelector([g()], (function(e) {
                return e.category_id
            }))
        };
        a.makeGetCampaignCity = function() {
            return i.createSelector([g()], (function(e) {
                return e.location.city
            }))
        };
        var b = function() {
            return i.createSelector([g()], (function(e) {
                return e.is_charity
            }))
        };
        a.makeGetIsCharity = b;
        var S = function() {
            return i.createSelector([g()], (function(e) {
                if (e.is_charity && e.charity && e.charity.npo_id)
                    return e.charity
            }))
        };
        a.makeGetCampaignCharity = S;
        a.makeGetCampaignCurrency = function() {
            return i.createSelector([g(), b(), S()], (function(e, a, n) {
                if (a && n)
                    switch (n.country) {
                    case "GB":
                        return "GBP";
                    case "AU":
                        return "AUD";
                    case "CA":
                        return "CAD";
                    default:
                        return "USD"
                    }
                return e.currencycode
            }))
        };
        a.makeGetCampaignCharityLogo = function() {
            return i.createSelector([S()], (function(e) {
                if (e)
                    return e.logo && e.logo.scaled["1x1-120"] || e.logo_url
            }))
        };
        a.makeGetCampaignComments = function() {
            return i.createSelector([f], (function(e) {
                return e.comments
            }))
        };
        var w = function() {
            return i.createSelector([f], (function(e) {
                return e.donations
            }))
        };
        a.makeGetCampaignDonations = w;
        a.makeGetCampaignTopDonations = function() {
            return i.createSelector([f], (function(e) {
                return e.topDonations
            }))
        };
        a.makeGetCampaignLastDonation = function() {
            return i.createSelector([f], (function(e) {
                return e.donations.length ? e.donations[0] : void 0
            }))
        };
        var C = function() {
            return i.createSelector([g()], (function(e) {
                return (e.user_first_name + " " + e.user_last_name).trim()
            }))
        };
        a.makeGetCampaignOrganizerFullName = C;
        a.makeGetCampaignOrganizerFirstName = function() {
            return i.createSelector([g()], (function(e) {
                return e.user_first_name ? e.user_first_name : ""
            }))
        };
        a.makeGetCampaignOrganizerLastName = function() {
            return i.createSelector([g()], (function(e) {
                return e.user_last_name ? e.user_last_name : ""
            }))
        };
        var _ = function() {
            return i.createSelector([C()], (function(e) {
                return u.getInitials(e)
            }))
        };
        a.makeGetCampaignOrganizerInitials = _;
        var P = function() {
            return i.createSelector([g()], (function(e) {
                return e.user_profile_url
            }))
        };
        a.makeGetCampaignOrganizerImage = P;
        a.makeGetCampaignOrganizerAvatar = function() {
            return i.createSelector([C(), _(), P()], (function(e, a, n) {
                return {
                    as: s.IdentityType.person,
                    fullName: e,
                    initials: a,
                    profileImage: n
                }
            }))
        };
        var E = function() {
            return i.createSelector([g()], (function(e) {
                return e.beneficiary.first_name ? [e.beneficiary.first_name, e.beneficiary.last_name].join(" ").trim() : ""
            }))
        };
        a.makeGetCampaignBeneficiaryFullName = E;
        var k = function() {
                return i.createSelector([f], (function(e) {
                    return e.counts
                }))
            },
            F = function() {
                return i.createSelector([k()], (function(e) {
                    return e.total_comments
                }))
            };
        a.makeGetCampaignCommentCount = F;
        a.makeGetCampaignCommunityPhotosCount = function() {
            return i.createSelector([k()], (function(e) {
                return e.total_community_photos
            }))
        };
        a.makeGetCampaignCoPhotosCount = function() {
            return i.createSelector([k()], (function(e) {
                return e.total_co_photos
            }))
        };
        var T = function() {
            return i.createSelector([k()], (function(e) {
                return e.total_donations
            }))
        };
        a.makeGetCampaignDonationCount = T;
        var A = function() {
            return i.createSelector([k()], (function(e) {
                return e.total_updates
            }))
        };
        a.makeGetCampaignUpdatesCount = A;
        a.makeGetCampaignUnattributedAmountRaised = function() {
            return i.createSelector([k()], (function(e) {
                return e.amount_raised_unattributed
            }))
        };
        a.makeGetCampaignUnattributedDonationCount = function() {
            return i.createSelector([k()], (function(e) {
                return e.number_of_donations_unattributed
            }))
        };
        a.makeGetCampaignPhotos = function() {
            return i.createSelector([f], (function(e) {
                return e.photos
            }))
        };
        a.makeGetCampaignUpdates = function() {
            return i.createSelector([f], (function(e) {
                return e.updates
            }))
        };
        var I = function() {
            return i.createSelector([g(), w()], (function(e, a) {
                var n = e.current_amount || 0;
                return a.forEach((function(e) {
                    e.fromLocalStorage && (n += e.amount)
                })), n
            }))
        };
        a.makeGetCampaignCurrentAmount = I;
        var G = function() {
            return i.createSelector([g()], (function(e) {
                return e.goal_amount
            }))
        };
        a.makeGetCampaignGoalAmount = G;
        a.makeGetFeedVelocityTypeTotal = function(e) {
            return i.createSelector([y()], (function(a) {
                var n = a[e] || void 0;
                return n ? n.total : void 0
            }))
        };
        a.makeGetCampaignStats = function() {
            return i.createSelector([F(), T(), i.createSelector([k()], (function(e) {
                return e.total_unique_donors
            })), i.createSelector([k()], (function(e) {
                return e.campaign_hearts
            })), G(), i.createSelector([k()], (function(e) {
                return e.total_photos
            })), I(), i.createSelector([k()], (function(e) {
                return e.social_share_total
            })), A()], (function(e, a, n, o, t, r, i, s, u) {
                return {
                    totalComments: e,
                    totalDonations: a,
                    totalDonors: n,
                    totalFollowers: o,
                    totalGoal: t,
                    totalPhotos: r,
                    totalRaised: i,
                    totalShares: s,
                    totalUpdates: u
                }
            }))
        };
        a.makeHasCommentsEnabled = function() {
            return i.createSelector([g()], (function(e) {
                return e.comments_enabled
            }))
        };
        var N = function() {
            return i.createSelector([g()], (function(e) {
                return e.deactivated ? d.CampaignStatus.DEACTIVATED : 1 !== e.status || e.donations_enabled ? 1 === e.status ? d.CampaignStatus.ACTIVE : d.CampaignStatus.DELETED : d.CampaignStatus.CLOSED
            }))
        };
        a.makeGetCampaignStatus = N;
        a.makeGetIsCampaignActive = function() {
            return i.createSelector([N()], (function(e) {
                return e === d.CampaignStatus.ACTIVE
            }))
        };
        var z = function() {
            return i.createSelector([f], (function(e) {
                return e.team_members
            }))
        };
        a.makeGetCampaignTeamMembers = z;
        a.makeGetCampaignLaunchDate = function() {
            return i.createSelector([g()], (function(e) {
                return e.launch_date
            }))
        };
        a.makeGetCampaignCreatedDate = function() {
            return i.createSelector([g()], (function(e) {
                return e.created_at
            }))
        };
        var M = function() {
            return i.createSelector([f], (function(e) {
                return e.photos.filter((function(e) {
                    return e.photo_type === d.photoTypes.DESCRIPTION
                }))
            }))
        };
        a.makeGetDescriptionPhotos = M;
        var O = function() {
            return i.createSelector([f], (function(e) {
                return e.photos.filter((function(e) {
                    return e.photo_type === d.photoTypes.UPDATE
                }))
            }))
        };
        a.makeGetUpdatePhotos = O;
        a.makeGetCommunityPhotos = function() {
            return i.createSelector([f], (function(e) {
                return e.photos.filter((function(e) {
                    return e.photo_type === d.photoTypes.CONTENT
                }))
            }))
        };
        var D = function() {
            return i.createSelector([f], (function(e) {
                return e.identity.length > 0 ? e.identity[0] : {
                    roles: []
                }
            }))
        };
        a.makeGetIdentity = D;
        a.makeHasCampaign = function() {
            return i.createSelector([D()], (function(e) {
                return e.roles.indexOf("co") >= 0 || e.roles.indexOf("team_member") >= 0
            }))
        };
        var R = function() {
            return i.createSelector([D()], (function(e) {
                return e.firstname
            }))
        };
        a.makeGetUserFirstName = R;
        var U = function() {
            return i.createSelector(D(), (function(e) {
                return e.roles.includes("statsuser")
            }))
        };
        a.makeGetIsStatsUser = U;
        var x = function() {
            return i.createSelector([D()], (function(e) {
                return e.lastname
            }))
        };
        a.makeGetUserLastName = x;
        var L = function() {
            return i.createSelector([D()], (function(e) {
                return e.person_id
            }))
        };
        a.makeGetPersonId = L;
        var H = function() {
            return i.createSelector([f], (function(e) {
                return e.campaignlite_roles
            }))
        };
        a.makeGetCampaignRoles = H;
        a.makeGetMemberId = function() {
            return i.createSelector([f], (function(e) {
                var a;
                return null === (a = e.campaign_ids) || void 0 === a ? void 0 : a.tm_id
            }))
        };
        a.makeGetCanViewCampaignLite = function() {
            return i.createSelector([H(), U()], (function(e, a) {
                return a || e && (e.is_beneficiary || e.is_donor || e.is_organizer || e.is_team_member)
            }))
        };
        var j = function() {
            return i.createSelector([R(), x()], (function(e, a) {
                return e && a ? e + " " + a : e || a || ""
            }))
        };
        a.makeGetUserFullName = j;
        var q = function() {
            return i.createSelector([R(), x()], (function(e, a) {
                return "" + (e ? e[0] : "") + (a ? a[0] : "")
            }))
        };
        a.makeGetUserInitials = q;
        var B = function() {
            return i.createSelector([D()], (function(e) {
                return e.profile_url
            }))
        };
        a.makeGetUserProfileImage = B;
        a.makeGetIsLoggedIn = function() {
            return i.createSelector([D()], (function(e) {
                return void 0 !== e && e.roles.length > 0
            }))
        };
        var W = function() {
            return i.createSelector([D()], (function(e) {
                return e && e.email
            }))
        };
        a.makeGetUserEmail = W;
        a.makeGetUserAvatarValues = function() {
            return i.createSelector([D()], (function(e) {
                return {
                    as: s.IdentityType.person,
                    fullName: e.firstname + " " + e.lastname,
                    initials: u.getInitials(e.firstname + " " + e.lastname),
                    profileImage: e.profile_url
                }
            }))
        };
        a.makeGetAuthenticatedPerson = function() {
            return i.createSelector([R(), x(), W(), j(), q(), B(), i.createSelector([D()], (function(e) {
                return e.user_id
            })), L()], (function(e, a, n, o, t, r, i, s) {
                return {
                    email: n,
                    firstName: e,
                    fullName: o,
                    initials: t,
                    lastName: a,
                    personId: s,
                    profileImage: r,
                    userId: i
                }
            }))
        };
        a.makeGetOrganizerLocation = function() {
            return i.createSelector([g()], (function(e) {
                return e.location
            }))
        };
        a.makeGetTeamInfo = function() {
            return i.createSelector([g()], (function(e) {
                return e.team
            }))
        };
        a.makeGetOrderedCampaignPhotos = function() {
            return i.createSelector([K(), M(), O()], (function(e, a, n) {
                return r([e], a, n)
            }))
        };
        var V = function() {
            return i.createSelector([g()], (function(e) {
                return e.campaign_photo
            }))
        };
        a.makeGetCampaignPhoto = V;
        var K = function() {
            return i.createSelector([g(), V()], (function(e, a) {
                return o(o({}, a), {
                    created_at: e.launch_date,
                    id: 0,
                    media_id: e.media_id,
                    media_type: e.media_type,
                    photo_type: d.photoTypes.MAIN
                })
            }))
        };
        a.makeGetCampaignMainPhoto = K;
        var Y = function() {
            return i.createSelector([g()], (function(e) {
                return e.has_beneficiary
            }))
        };
        a.makeGetHasBeneficiary = Y;
        a.makeGetCampaignPartner = function() {
            return i.createSelector([g()], (function(e) {
                if (e.is_partner && e.partner)
                    return {
                        name: e.partner.name,
                        profileImage: e.partner.logo_url,
                        type: e.partner.type
                    }
            }))
        };
        a.makeGetIsPartner = function() {
            return i.createSelector([g()], (function(e) {
                return e.is_partner
            }))
        };
        var J = function() {
            return i.createSelector([g()], (function(e) {
                return e.is_team && 0 !== e.team.status
            }))
        };
        a.makeGetIsTeamEnabledCampaign = J;
        a.makeGetIsTeamCampaignWithTeamMembers = function() {
            return i.createSelector([J(), z()], (function(e, a) {
                var n = a.filter((function(e) {
                    return e.role !== s.UserRoles.ORGANIZER
                }));
                return e && n.length > 0
            }))
        };
        a.makeGetCampaignBeneficiaryAvatar = function() {
            return i.createSelector([g(), E(), Y(), b()], (function(e, a, n, o) {
                return {
                    as: o ? s.IdentityType.charity : s.IdentityType.person,
                    fullName: a,
                    initials: u.getInitials(a),
                    profileImage: n ? e.beneficiary.profile_url : ""
                }
            }))
        };
        a.makeGetInDegradedMode = function() {
            return i.createSelector([g()], (function(e) {
                return e.in_degraded_mode
            }))
        };
        a.makeGetCampaignCanonicalUrl = function() {
            return i.createSelector([c.makeGetBaseUrl("/f/"), v()], (function(e, a) {
                return h.normalize(e + "/" + a)
            }))
        }
    },
    D9k4: function(e, a, n) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.getCaptcha = a.signOut = a.signInFacebook = a.signInEmail = void 0;
        var o = n("kLb9"),
            t = "https://api." + n("8QVh").getDomain() + "/auth/v1";
        a.signInEmail = function(e) {
            var a = t + "/login/email",
                n = {
                    email: e.email,
                    password: e.password,
                    set_cookies: !0
                };
            return e.captchaResponse && (n.captcharesponse = e.captchaResponse), o.HttpClient.post(a, n)
        };
        a.signInFacebook = function(e) {
            var a = t + "/login/facebook";
            return o.HttpClient.post(a, {
                facebook_id: e.facebookId,
                facebook_token: e.facebookToken,
                set_cookies: !0
            })
        };
        a.signOut = function() {
            var e = t + "/sign-out";
            return o.HttpClient.post(e, {})
        };
        a.getCaptcha = function() {
            var e = t + "/captcha";
            return o.HttpClient.get(e)
        }
    },
    EcZt: function(e, a, n) {
        "use strict";
        var o;
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        function(e) {
            e.ACCEPT_TEAM_INVITATION = "ACCEPT_TEAM_INVITATION",
            e.ACCEPT_TEAM_INVITATION_AS_PERSON = "ACCEPT_TEAM_INVITATION_AS_PERSON",
            e.TRACK_SHARE_FAILURE = "TRACK_SHARE_FAILURE",
            e.TRACK_SHARE_IN_PROGRESS = "TRACK_SHARE_IN_PROGRESS",
            e.TRACK_SHARE_SUCCESS = "TRACK_SHARE_SUCCESS",
            e.CONTACT_ORGANIZER_FAILURE = "CONTACT_ORGANIZER_FAILURE",
            e.CONTACT_ORGANIZER_IN_PROGRESS = "CONTACT_ORGANIZER_IN_PROGRESS",
            e.CONTACT_ORGANIZER_SUCCESS = "CONTACT_ORGANIZER_SUCCESS",
            e.GET_RECEIPT_FROM_ENCRYPTED_DONATION_ID = "GET_RECEIPT_FROM_ENCRYPTED_DONATION_ID",
            e.GET_RECEIPT_FROM_LOCAL_STORAGE = "GET_RECEIPT_FROM_LOCAL_STORAGE",
            e.GET_DONATION_RECEIPT_SUCCESS = "GET_DONATION_RECEIPT_SUCCESS",
            e.GET_DONATION_RECEIPT_FAILURE = "GET_DONATION_RECEIPT_FAILURE",
            e.CREATE_COMMENT_FAILURE = "CREATE_COMMENT_FAILURE",
            e.CREATE_COMMENT_IN_PROGRESS = "CREATE_COMMENT_IN_PROGRESS",
            e.CREATE_COMMENT_SUCCESS = "CREATE_COMMENT_SUCCESS",
            e.PERSON_SIGNUP_EMAIL_FAILURE = "PERSON_SIGNUP_EMAIL_FAILURE",
            e.PERSON_SIGNUP_EMAIL_IN_PROGRESS = "PERSON_SIGNUP_EMAIL_IN_PROGRESS",
            e.PERSON_SIGNUP_EMAIL_SUCCESS = "PERSON_SIGNUP_EMAIL_SUCCESS",
            e.PERSON_SIGNUP_FACEBOOK_FAILURE = "PERSON_SIGNUP_FACEBOOK_FAILURE",
            e.PERSON_SIGNUP_FACEBOOK_IN_PROGRESS = "PERSON_SIGNUP_FACEBOOK_IN_PROGRESS",
            e.PERSON_SIGNUP_FACEBOOK_SUCCESS = "PERSON_SIGNUP_FACEBOOK_SUCCESS",
            e.USER_SIGNUP_EMAIL_IN_PROGRESS = "USER_SIGNUP_EMAIL_IN_PROGRESS",
            e.USER_SIGNUP_FACEBOOK_IN_PROGRESS = "USER_SIGNUP_FACEBOOK_IN_PROGRESS",
            e.UPLOAD_MEDIA_POSTDONATE_COMMENT_IN_PROGRESS = "UPLOAD_MEDIA_POSTDONATE_COMMENT_IN_PROGRESS",
            e.UPLOAD_MEDIA_POSTDONATE_COMMENT_FAILURE = "UPLOAD_MEDIA_POSTDONATE_COMMENT_FAILURE",
            e.UPLOAD_MEDIA_POSTDONATE_COMMENT_SUCCESS = "UPLOAD_MEDIA_POSTDONATE_COMMENT_SUCCESS",
            e.UPLOAD_MEDIA_POSTDONATE_COMMENT_DELETE = "UPLOAD_MEDIA_POSTDONATE_COMMENT_DELETE",
            e.ADD_FACEBOOK_ID_TO_DONATION_IN_PROGRESS = "ADD_FACEBOOK_ID_TO_DONATION_IN_PROGRESS",
            e.ADD_FACEBOOK_ID_TO_DONATION_FAILURE = "ADD_FACEBOOK_ID_TO_DONATION_FAILURE",
            e.ADD_FACEBOOK_ID_TO_DONATION_SUCCESS = "ADD_FACEBOOK_ID_TO_DONATION_SUCCESS",
            e.GET_BIGWEB_DONATION_ID_IN_PROGRESS = "GET_BIGWEB_DONATION_ID_IN_PROGRESS",
            e.GET_BIGWEB_DONATION_ID_FAILURE = "GET_BIGWEB_DONATION_ID_FAILURE",
            e.GET_BIGWEB_DONATION_ID_SUCCESS = "GET_BIGWEB_DONATION_ID_SUCCESS"
        }(o || (o = {})),
        a.default = o
    },
    "F/MP": function(e, a, n) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.getDataFile = void 0;
        var o = n("7MwF"),
            t = n("kLb9");
        a.getDataFile = function() {
            return t.HttpClient.get("https://cdn.optimizely.com/datafiles/" + (o.isProduction() ? "AiS1wbmi3GDLMicfjQZt5C" : "7cWjm5VAJYUkBqiXTBYfmX") + ".json")
        }
    },
    FYOA: function(e) {
        e.exports = JSON.parse('{"de_DE":{"apps-campaign":{"Better Business Bureau":"Better Business Bureau","Accredited business":"Akkreditiertes Unternehmen","Created {{dateFormatBasedOnLocal}}":"Erstellt am {{dateFormatBasedOnLocal}}","Just now":"Gerade eben","Created {{count}} hour ago":"Vor {{count}} Stunde erstellt","Created {{count}} hour ago:_:plural":"Vor {{count}} Stunden erstellt","Created {{count}} day ago":"Vor {{count}} Tag erstellt","Created {{count}} day ago:_:plural":"Vor {{count}} Tagen erstellt","Thank you for your donation. A receipt has been sent to <1>{{donorEmail}}</1>":"Vielen Dank für deine Spende. Der Beleg wurde an <1>{{donorEmail}}</1> gesendet","by":"von","for":"für","Team fundraiser":"Teamkampagne","Link Copied":"Link kopiert","Anonymous":"Anonym","In partnership with<1></1><2>{{partnerName}}</2>":"In Kooperation mit<1></1><2>{{partnerName}}</2>","See all":"Alle anzeigen","This fundraiser is located near you":"Diese Kampagne ist in deiner Nähe","{{- recentDonorsStr}} person just donated":"{{- recentDonorsStr}} Person hat gerade gespendet","{{- recentDonorsStr}} person just donated:_:plural":"{{- recentDonorsStr}} Personen haben gerade gespendet","This fundraiser is no longer accepting donations. If you are the organizer, beneficiary, team member, or donor,<1></1><2>sign in</2><3></3>to see additional information.":"Für dieses GoFundMe kann nicht mehr gespendet werden. Falls du der Organisator oder Spendenbegünstigte, ein Mitglied des Spendenaktionenteams oder ein Spender bist,<1></1><2>melde dich an,</2><3></3>um weitere Informationen anzuzeigen.","The organizer has currently disabled new donations to this fundraiser.":"Der Organisator hat die Funktion zur Entgegennahme von Spenden für diese Kampagne bis auf Weiteres deaktiviert.","This fundraiser has been deactivated by the organizer.":"Diese Kampagne wurde durch ihren Organisator deaktiviert.","Learn more":"Mehr erfahren","Copy to clip board":"In Zwischenablage kopieren","Fundraiser link copied":"Spendenaktionen-Link kopiert","Copy to clipboard":"In Zwischenablage kopieren","Now paste this link into a Facebook post, Messenger, or any Facebook groups you\'re in.":"Kopiere diesen Link nun in einen Facebook-Beitrag, in eine Messenger-Nachricht oder in deine Facebook-Gruppen.","Copy your fundraiser link and paste it into a Facebook post, Messenger, or any Facebook groups you’re in.":"Kopiere deinen Spendenaktionen-Link nun in einen Facebook-Beitrag, in eine Messenger-Nachricht oder in deine Facebook-Gruppen.","Questions about where to share this link?":"Fragen zu Möglichkeiten, diesen Link zu teilen?","<0>Tip:</0><1></1>Paste this fundraiser link anywhere.":"<0>Tipp:</0><1></1>Kopiere diesen Spendenaktionen-Link.","Collapse text":"Text ausblenden","Read more":"mehr anzeigen","Edit":"Bearbeiten","Delete":"Löschen","Edited":"Bearbeitet","{{name}}<1></1>donated<3></3><4>{{donationAmount}}</4>":"{{name}}<1></1>spendete<3></3><4>{{donationAmount}}</4>","{{name}}<1></1>commented":"{{name}}<1></1>hat einen Kommentar hinterlassen","Campaign organizer":"Spendenaufrufnorganisator","Beneficiary":"Spendenbegünstigte","GoFundMe Guarantee":"Garantie von GoFundMe","Only donations on our platform are protected by the GoFundMe Guarantee.":"Nur über unsere Plattform geleistete Spenden fallen unter die GoFundMe-Garantie.","Donate now":"Jetzt spenden","Your donation":"Deine Spende","Recent donation":"Letzte Spende","Top donation":"Höchste Spende","First donation":"Erste Spende","Offline":"Offline","Become an early supporter":"Werde einer der ersten Unterstützer","Become the first supporter":"Werde der erste Unterstützer","Your donation matters":"Deine Spende zählt","In the rare case something isn’t right, we will work with you to determine if misuse occurred.":"In den seltenen Fällen, in denen Unstimmigkeiten auftreten, klären wir in Zusammenarbeit mit der Person, die diese meldet, ob ein Fall von Missbrauch vorliegt.","Email":"E-Mail","Embed HTML":"HTML einbetten","Messenger":"Messenger","Facebook":"Facebook","<0>We use cookies</0> to enable features and market content. Click “That’s OK” to add cookies. View<2></2><3>privacy policy</3><4></4>or<6></6><7>manage cookies.</7>":"<0>Cookies</0> helfen uns dabei, unsere Features anbieten und unsere Inhalte vermarkten zu können. Klicke auf „Einverstanden“, um die Verwendung von Cookies zu akzeptieren. Sieh dir unsere<2></2><3>Datenschutzrichtlinie</3><4></4>an oder<6></6><7>gehe zur Verwaltung von Cookies.</7>","That\'s OK":"Einverstanden","<0>As stated on the banner, GoFundMe uses cookies to enable features and market content to provide you with an improved experience. We consider these cookies to be non-essential, pursuant to our<1></1><2>privacy policy.</2><3></3>When you click “That’s OK” on the banner, we add these non-essential cookies.</0>":"<0>Wie das Banner informiert, verwendet GoFundMe Cookies, um die Nutzung bestimmter Funktionen zu ermöglichen und dein Nutzungserlebnis zu verbessern. Entsprechend unserer <1></1><2>Datenschutzrichtlinie</2><3></3> betrachten wir diese Cookies als nicht essentiell. Wenn du in dem Banner auf „Einverstanden“ klickst, werden diese nicht essentiellen Cookies hinzugefügt.</0>","Cookie Preferences":"Cookie-Einstellungen","Close cookie modal":"Cookie-Modalfenster schließen","We value your privacy":"Der Schutz deiner Daten ist uns wichtig","Here in this Cookie Preferences page, the non-essential cookies category is broken down\\n                            further into functional and marketing, as you can see below. You can change your\\n                            preferences as to both functional and marketing cookies here. When you click “Save” on\\n                            this page, we will add only those non-essential cookies you select.":"Im unteren Abschnitt der Seite mit den Cookie-Einstellungen hier wird die Kategorie der nicht essentiellen Cookies weiter unterteilt in die der funktionellen Cookies und die der Marketing-Cookies. Du kannst hier deine Einstellungen sowohl für funktionelle als auch für Marketing-Cookies ändern. Es werden nur die von dir ausgewählten nicht essentiellen Cookies hinzugefügt, wenn du am Ende der Seite auf „Speichern“ klickst.","Marketing cookies":"Marketing-Cookies","Enable":"Aktivieren","GoFundMe collects information regarding user navigation to provide sponsored content\\n                            relevant to our products on other sites. Specifically, if you start a fundraiser on\\n                            GoFundMe and you do not publish that fundraiser, GoFundMe may then show a banner ad the\\n                            next time you are on Facebook.":"GoFundMe erfasst Daten zur Navigation seiner Nutzer, um auf Seiten Dritter kostenlos Inhalte bereitstellen zu können, die mit unseren Produkten in Zusammenhang stehen. Insbesondere ist es möglich, dass dir, nachdem du eine Kampagne gestartet, diese aber noch nicht verbreitet hast, bei deinem nächsten Besuch auf Facebook ein Werbebanner angezeigt wird.","Functional cookies":"Funktionelle Cookies","We use data collected with these cookies to improve your experiences on the GoFundMe\\n                            platform, as well as avoiding bugs or testing new features.":"Die Daten, die wir mit diesen Cookies erfassen, helfen uns dabei, dein Nutzererlebnis auf GoFundMe zu verbessern, Fehler zu reduzieren oder neue Funktionen zu testen.","Essential cookies":"Essentielle Cookies","Always enabled":"Immer aktiviert","Data is collected by these cookies to offer basic functions, to ensure that the GoFundMe\\n                            Platform functions technically, to keep track of your settings and activities, and for\\n                            security or fraud prevention purposes.":"Die durch diese Cookies erfassten Daten werden benötigt, um sicherzustellen, dass die GoFundMe-Plattform funktionsfähig ist und ihre grundlegenden Funktionen verfügbar sind, sowie zum Erfassen von Einstellungen und Nachverfolgen von Aktivitäten und zur Gewährleistung der Sicherheit und der Vereitelung von Betrug.","Enable all and close":"Alle aktivieren und schließen","Enable all":"Alle aktivieren","Save and close":"Speichern und schließen","Save":"Speichern","Show less":"Weniger anzeigen","Show more":"Weitere anzeigen","Previous image":"Vorheriges Bild","Next image":"Nächstes Bild","Image {{i}} of {{t}}":"Bild {{i}} von {{t}}","Previous 10 images":"Vorherige 10 Bilder","Next 10 images":"Nächste 10 Bilder","Close image gallery":"Bildergalerie schließen","Delete this image":"Dieses Bild löschen","Instagram":"Instagram","Copy and paste this link on your Instagram bio":"Kopiere diesen Link in deine Instagram-Biografie","Fundraiser link":"Spendenaktionen-Link","Link copied":"Link kopiert","Something went wrong.":"Es ist ein Fehler aufgetreten.","Share on Instagram":"Auf Instagram teilen","Back to sharing":"Weiter teilen","LinkedIn":"LinkedIn","Hi, I’d really appreciate it if you would share or donate to this GoFundMe.":"Hallo, ich würde mich sehr freuen, wenn du dieses GoFundMe mit einer Spende unterstützen oder mit anderen teilen würdest.","Your password must have:":"Dein Passwort muss:","At least 12 characters":"mindestens 12 Zeichen umfassen, darunter","1 uppercase letter":"1 Großbuchstabe","1 lowercase letter":"1 Kleinbuchstabe","1 number":"1 Ziffer","1 symbol":"1 Symbol","Print Poster":"Flyer drucken","Print":"Drucken","{{raisedAmountString}}<1></1><2>{{sameCurrencyCode}} raised</2>":"{{raisedAmountString}}<1></1><2> {{sameCurrencyCode}} gesammelt</2>","{{raisedAmountString}}<1></1><2>{{sameCurrencyCode}} raised of {{goalAmountNBSP}} goal</2>":"{{raisedAmountString}}<1></1><2> {{sameCurrencyCode}} der Zielsumme von {{goalAmountNBSP}} gesammelt</2>","{{goalAmountNBSP}}<1></1><2>{{sameCurrencyCode}} goal</2>":"Zielsumme: {{goalAmountNBSP}}<1></1><2> {{sameCurrencyCode}}</2>","share":"teilen","Share as much as possible":"Teile deine Kampagne so oft wie möglich","Try using all sharing options. Telling people about your fundraiser is the only way to start raising donations.":"Mach deine Kampagne auf verschiedenen Wegen bekannt. Nur wer über deine Kampagne Bescheid weiß, kann auch für sie spenden.","Text":"SMS senden","donor":"Spender","donors":"Spender","shares":"x geteilt","follower":"Follower","followers":"Follower","Fundraiser Stats":"Spendenaktionenstatistiken","Share":"Teilen","By continuing, you agree with GoFundMe<1></1><2>terms</2><3></3>and<5></5><6>privacy policy</6>":"Indem du fortfährst, erklärst du dich mit den<1></1><2>Nutzungsbedingungen</2><3></3>und der<5></5><6>Datenschutzrichtlinie</6> einverstanden.","Preview email":"E-Mail-Vorschau anzeigen","Twitter":"Twitter","{{article}} by {{- authorName}}":"{{article}} von {{- authorName}}","See older updates":"Ältere Updates anzeigen","WhatsApp":"WhatsApp","Your donation is made to PayPal Giving Fund Australia (ABN 65 105 950 945), a Public Ancillary Fund and a charity registered with the Australian Charities and Not-for-profits Commission, subject to its<1></1><2>terms</2>.":"Deine Spende wird in Übereinstimmung mit den<1></1><2>Nutzungsbedingungen</2> dieser Organisation an PayPal Giving Fund Australia (ABN 65 105 950 945) überwiesen, ein Public Ancillary Fund gemäß australischem Recht sowie eine bei der Australian Charities and Not-for-profits Commission registrierte Wohltätigkeitsorganisation.","While GoFundMe does not have a platform fee, PayPal Giving Fund Australia receives your donation after deduction of transaction<1></1><2>fees</2><3></3>and will grant funds to your recommended charity on a monthly basis.*":"Die Nutzung von GoFundMe ist kostenfrei, von jeder Spende wird jedoch eine <1></1><2>Transaktionsgebühr</2><3></3>abgezogen, bevor sie an PayPal Giving Fund Australia und von dieser Organisation im Monatsrhythmus an deine gewünschte Wohltätigkeitsorganisation weiter überwiesen wird.*","*If, after reasonable efforts, PayPal Giving Fund Australia cannot deliver donations to this<1></1>charity, it will grant funds to another charity per PayPal Giving Fund Australia\'s<3></3><4>policies</4>.":"* Wenn PayPal Giving Fund Australia die Spendengelder trotz angemessener Bemühungen nicht der entsprechenden<1> </1>Wohltätigkeitsorganisation zukommen lassen kann, übergibt sie sie in Übereinstimmung mit ihren <3></3><4>Nutzungsbedingungen</4> stattdessen einer anderen Wohltätigkeitsorganisation.","Donations raised benefit:":"Gesammelte Spenden gehen an:","How charity fundraisers work":"So funktionieren Spendenkampagnen für Wohltätigkeitsorganisationen","Your donation is made to PayPal Giving Fund Canada, a charity registered with the Canada Revenue Agency (No. 812867752RR0001), subject to its<1></1><2>terms</2>.":"Deine Spende wird in Übereinstimmung mit den <1></1><2>Nutzungsbedingungen</2> dieser Organisation an PayPal Giving Fund Canada geleistet, eine bei der kanadischen Steuerbehörde registrierte Wohltätigkeitsorganisation (Nr. 812867752RR0001).","While GoFundMe does not have a platform fee, PayPal Giving Fund Canada receives your donation after deduction of transaction<1></1><2>fees</2><3></3>and will grant funds to your recommended charity on a monthly basis.*":"Die Nutzung von GoFundMe ist kostenfrei, von jeder Spende wird jedoch eine <1></1><2>Transaktionsgebühr</2><3></3>abgezogen, bevor sie an PayPal Giving Fund Canada und von dieser Organisation im Monatsrhythmus an deine gewünschte Wohltätigkeitsorganisation weiter überwiesen wird.*","*If, after reasonable efforts, PayPal Giving Fund Canada cannot deliver donations to this<1></1>charity, it will grant funds to another charity per PayPal Giving Fund Canada\'s<3></3><4>policies</4>.":"* Wenn PayPal Giving Fund Canada die Spendengelder trotz angemessener Bemühungen nicht der entsprechenden<1> </1> Wohltätigkeitsorganisation zukommen lassen kann, übergibt sie sie in Übereinstimmung mit ihren <3></3><4>Nutzungsbedingungen</4> stattdessen einer anderen Wohltätigkeitsorganisation.","Support":"Kundensupport","Contribute":"Beitragen","Buy me a coffee":"Auf einen Kaffee einladen","Show appreciation":"Dankbarkeit zeigen","Start a GoFundMe":"Kampagne starten","Support this cause":"Dieses Anliegen unterstützen","{{- userName}} needs your help today! {{- campaignTitle}}":"{{- userName}} braucht jetzt deine Hilfe! {{- campaignTitle}}","Fundraiser for {{- userName}} by {{- campaignOrganizer}} : {{- campaignTitle}}":"Spendenkampagne von {{- campaignOrganizer}} für {{- userName}}: {{- campaignTitle}}","Fundraiser by {{- userName}} : {{- campaignTitle}}":"Spendenkampagne von {{- userName}}: {{- campaignTitle}}","{{- campaignTitle}}, organized by {{- campaignOrganizer}}":"{{- campaignTitle}}, organisiert von {{- campaignOrganizer}}","See more":"Mehr","See top donations":"Top-Spenden anzeigen","Continue reading":"Weiterlesen","Updates":"Neuigkeiten","Image {{imageIndex}} of {{totalImages}}. Click to view all images":"Bild {{imageIndex}} von {{totalImages}}. Klicke, um alle Bilder anzuzeigen","Image {{imageIndex}} of {{totalImages}}":"Bild {{imageIndex}} von {{totalImages}}","Photo limit reached":"Maximale Zahl an Fotos erreicht","Add more photos":"Weitere Fotos hinzufügen","Add photos to comment":"Fotos zu Kommentar hinzufügen","I donated because...":"Ich habe gespendet, weil …","Add this public comment to the fundraiser.":"Füge diesen Kommentar öffentlich sichtbar zu deiner Kampagne hinzu.","Your donation will be displayed as Anonymous, and this comment will not show up publicly on the campaign.":"Deine Spende wird auf der Spendenaufrufnseite ohne diesen Kommentar als anonyme Spende angezeigt.","Post comment":"Kommentar posten","Please choose a maximum of 10 photos for your comment.":"Bitte füge maximal 10 Fotos zu deinem Kommentar hinzu.","Please donate and share words of encouragement.":"Unterstütze diese Kampagne – mit Spenden und Worten der Bestärkung.","Continue":"Weiter","Comments":"Kommentare","Please select one.":"Bitte wähle eins aus.","Yes, I have contacted the Campaign Organizer.":"Ja, ich habe mich an den Spendenaufrufnorganisator gewandt.","No, I have not contacted the Campaign Organizer.":"Nein, ich habe mich nicht an den Spendenaufrufnorganisator gewandt.","They are a family member":"Familienangehöriger","They are a friend or acquaintance":"Freund oder Bekannter","I do not know the organizer of this campaign":"Nicht persönlich bekannt","Your Name":"Dein Name","Your Phone Number":"Deine Telefonnummer","Required in case our team needs to contact you for further details.":"Wird benötigt, damit sich unser Team bei Rückfragen an dich wenden kann.","Your Email":"Deine E-Mail-Adresse","Confirm Email":"E-Mail bestätigen","Page URL":"Seiten-URL","Please enter the URL in this format: https://www.gofundme.com/f/example-campaign":"Bitte gib die URL in folgendem Format an: http://www.gofundme.com/f/beispiel-kampagne","I don\'t know the page URL":"Ich kenne die URL der Seite nicht","Have you already contacted the organizer of this campaign?":"Hast du dich schon an den Spendenaufrufnorganisator gewandt?","How do you know the organizer of this campaign?":"Woher kennst du den Organisator dieser Spendenaufruf?","Please explain your relationship to the Campaign Organizer.":"Bitte mache hier Angaben dazu, in welchem Verhältnis du zum Spendenaufrufnorganisator stehst.","How much money did you receive from the campaign organizer?":"Wie viel Geld hast du vom Spendenaufrufnorganisator erhalten?","Why do you believe this person will not deliver the funds to you?":"Warum glaubst du, dass diese Person dir die gesammelten Spendengelder nicht zukommen lassen wird?","Please attach a copy of a government issued photo ID":"Bitte füge eine Kopie deines amtlichen Lichtbildausweises bei","Please upload only JPEG, GIF, PNG or PDF files. The file size must be less than 5MB.":"Bitte lade nur Dateien im JPEG-, GIF-, PNG- oder PDF-Format hoch. Die Dateigröße darf max. 5 MB betragen.","Upload any evidence you may have":"Bitte lade hier Dokumente hoch, die deinen Verdacht belegen","Send Email":"E-Mail senden","Message Subject":"Betreff der Nachricht","Your Message":"Deine Nachricht","I am requesting a refund because...":"Ich fordere eine Rückerstattung, weil …","Describe your concerns about how the funds are being used.":"Bitte mache hier Angaben dazu, wieso du denkst, dass die Gelder missbräuchlich verwendet werden.","40 characters minimum":"mindestens 40 Zeichen","Yes, I know the Campaign Organizer.":"Ja, ich kenne den Spendenaufrufnorganisator.","No, I do not know the Campaign Organizer":"Nein, ich kenne den Spendenaufrufnorganisator nicht","I am a beneficiary.":"Ich bin eine spendenbegünstigte Person.","I am a donor.":"Ich bin ein Spender.","I am an individual concerned about this campaign.":"Ich habe Bedenken zu dieser Spendenaufruf.","I am involved in a legal dispute with the Campaign Organizer.":"Ich stehe dem Spendenaufrufnorganisator in einem Rechtsstreit gegenüber.","This campaign includes libelous statements.":"Die Beschreibung dieser Spendenaufruf enthält verleumderische Aussagen.","Campaign includes factually incorrect information.":"In der Spendenaufruf werden wahrheitswidrige Aussagen gemacht.","Campaign Organizer has not used funds for the stated purpose.":"Der Spendenaufrufnorganisator hat die erhaltenen Spenden für einen anderen als den angegebenen Zweck verwendet.","They are impersonating someone or have copied another campaign.":"Der Spendenaufrufnorganisator führt die Spendenaufruf unter falschem Namen oder imitiert eine andere Spendenaufruf.","Please explain your concern(s) in detail.":"Bitte mache genaue Angaben zu deinem Anliegen.","Which statements are libelous and why?":"Welche Aussagen stellen eine Verleumdung dar? Bitte begründe deine Angabe.","Which statements are incorrect and why?":"Welche Aussagen enthalten Fehlinformationen? Inwiefern?","How have the campaign’s donations been spent?":"Für welche Zwecke wurden die Spenden der Spendenaufruf ausgegeben?","What is the original campaign link/title?":"Wie lauten der ursprüngliche Link und Titel der Spendenaufruf?","Please describe your concerns":"Bitte beschreibe deine Bedenken","How do you know the campaign organizer?":"Woher kennst du den Spendenaufrufnorganisator?","How are you connected to the campaign?":"In welcher Beziehung stehst du zu der Spendenaufruf?","How much money is being withheld and why?":"Wie hoch ist die einbehaltene Summe und weshalb wird sie einbehalten?","Why are you concerned about your donation?":"Worauf gründen deine Bedenken in Bezug auf deine Spende?","Please describe your concerns.":"Bitte beschreibe deine Bedenken.","Do you know the Campaign Organizer?":"Kennst du den Spendenaufrufnorganisator?","Which best describes you?":"Was trifft am ehesten zu?","Publication":"Veröffentlichung","Self-Service":"Das kannst du selbst tun","Please select an option which best describes you to see relevant information.":"Bitte wähle die Option, die am besten auf dich zutrifft, um dir Informationen zu diesem Sachverhalt anzeigen zu lassen.","For customized help, please sign in.":"Bitte melde dich an, um individuelle Unterstützung zu erhalten.","Sign In":"Anmelden","Top Answers":"Relevanteste Antworten","How do I get a refund?":"Wie erhalte ich eine Rückerstattung?","How do I withdraw money?":"Wie kann ich Spenden auszahlen lassen?","Is my country supported?":"Wird mein Land unterstützt?","Can I withdraw money?":"Kann ich Spenden auszahlen lassen?","How do I reset my password?":"… mein Passwort zurücksetzen?","How do I invite someone to withdraw?":"Wie erteile ich einer anderen Person die Berechtigung zur Auszahlung der Spenden?","I can\'t withdraw my funds, now what?":"Ich kann meine Spendeneinnamen nicht auszahlen lassen. Was kann ich tun?","How do your fees work?":"Welche Gebühren fallen an?","What about taxes and stuff?":"Wie steht es mit Steuern?","GoFundMe homepage":"GoFundMe-Homepage","Choose your language":"Sprache auswählen","How GoFundMe works":"So funktioniert GoFundMe","Common questions":"Häufige Fragen","Success stories":"Erfolgreiche Kampagnen","Supported countries":"Unterstützte Länder","Team fundraising":"Spendenteam","Donate button":"Spendenbutton","Support COVID-19 fundraisers":"COVID-19-Spendenaktionen unterstützen","Why GoFundMe":"Was spricht für GoFundMe?","Medical":"Medizinisches","Emergency":"Notfälle","Memorial":"Gedenkfeier","Education":"Bildung","Nonprofit":"Nonprofit-Organisation","Fundraise for":"Sammle Spenden für","Help center":"Hilfe-Center","Blog":"Blog","GoFundMe Stories":"Geschichten auf GoFundMe","Press center":"Pressestelle","Careers":"Jobs","About":"Über uns","Resources":"Ressourcen","Terms":"Nutzungsbedingungen","Privacy":"Datenschutz","Legal":"Rechtliches","Do Not Sell My Personal Information":"Meine persönlichen Daten nicht weiterverkaufen","Hide":"Ausblenden","Show":"Einblenden","Hide guidance cards":"Hinweiskärtchen ausblenden","Show guidance cards":"Hinweiskärtchen einblenden","Previous card":"Vorherige Karte","Next card":"Nächste Karte","You are donating to<1></1><2>PayPal Giving Fund Ireland</2>, a registered charity (No. 20205692), which will email you a receipt for your donation.":"Deine Spende geht an<1></1><2>PayPal Giving Fund Ireland</2>, eine eingetragene Wohltätigkeitsorganisation (Nr. 20205692), die dir einen Spendenbeleg ausstellen und per E-Mail zukommen lassen wird.","*In rare cases, a charity may cease to meet PayPal Giving Fund Ireland’s legal or other eligibility requirements to receive funds or may not accept the funds. In such cases, PayPal Giving Fund Ireland will<1></1><2>reassign the funds</2><3></3>to another charity and (wherever possible) seek a new recommendation from you.":"* In Ausnahmefällen kann es vorkommen, dass die von dir gewählte Wohltätigkeitsorganisation die rechtlichen oder sonstigen Anforderungen von PayPal Giving Fund Ireland nicht mehr erfüllt oder keine Spenden entgegennimmt. In diesen Fällen weist PayPal Giving Fund Ireland<1></1><2>die für sie eingenommenen Gelder einer anderen Wohltätigkeitsorganisation zu.</2><3></3>Bei der Auswahl dieser Ersatzorganisation wird dein Wunsch nach Möglichkeit berücksichtigt.","The charity will typically receive the funds from PayPal Giving Fund within 15-45 days (90 days if the charity has not enrolled).*":"Deine Spende wird der Wohltätigkeitsorganisation typischerweise nach 15–45 Tagen von PayPal Giving Fund zugestellt (bzw. nach 90 Tagen, falls die Organisation sich noch nicht registriert hat).*","Open share modal":"Freigabefenster öffnen","Donate":"Spenden","Sign in":"Melde dich an","Sign out":"Abmelden","Donations you\'ve made":"Von dir geleistete Spenden","Account settings":"Account-Einstellungen","Your fundraisers":"Deine Spendenaktionen","Open navigation menu":"Navigationsmenü öffnen","Close navigation menu":"Navigationsmenü schließen","My campaigns":"Meine Spendenaufrufn","Close Modal":"Fenster schließen","Start":"Start","Don\'t have an account? ":"Du hast keinen Account? ","Sign up":"Registrieren","Enter the email address associated with your account, and we\'ll email you a link to reset your password":"Gib die mit deinem Account verknüpfte E-Mail-Adresse an. Wir senden dir dann einen Link zur Zurücksetzung deines Passworts.","Email address":"E-Mail-Adresse","Request new password":"Neues Passwort anfordern","Don\'t have an account?<1></1><2>Sign up</2>":"Du hast noch keinen Account?<1></1><2>Registriere dich jetzt</2>","Forgot your password?":"Passwort vergessen?","Password":"Passwort","Sign in to GoFundMe":"Bei GoFundMe anmelden","Already have an account?<1></1><2>Sign in</2>":"Du hast bereits einen Account?<1></1><2>Melde dich an</2>","Please<1></1><2>sign in</2><3></3>to access your account.":"Bitte<1></1><2>melde dich an,</2><3></3>um auf deinen Account zuzugreifen.","First Name":"Vorname","Last Name":"Nachname","Confirm email address":"E-Mail-Adresse bestätigen","Set password":"Passwort festlegen","We will never post without your permission":"Wir werden nie ohne deine Einwilligung posten","Continue with Facebook":"Weiter mit Facebook","or":"oder","Use my email address":"Meine E-Mail-Adresse verwenden","You are donating to<1></1><2>PayPal Giving Fund</2><3></3>UK, a registered charity (No. 1110538), which will email you a receipt for your donation and claim Gift Aid where eligible.":"Deine Spende geht an<1></1><2>PayPal Giving Fund</2><3></3>UK, eine eingetragene Wohltätigkeitsorganisation (Nr. 1110538), die dir einen Spendenbeleg ausstellen und deine Spende, falls möglich, als Gift Aid behandeln wird.","<0></0>*In very limited cases, a recommended charity may cease to meet PayPal Giving Fund\'s legal or other eligibility<2></2><3>requirements</3><4></4>. In such cases, PayPal Giving Fund will reassign the funds to a similar charity, and (wherever possible) seek a new recommendation from donors.":"<0></0>* In Ausnahmefällen kann es vorkommen, dass eine vorgeschlagene Wohltätigkeitsorganisation die rechtlichen oder sonstige<2></2><3>Anforderungen</3><4></4>von PayPal Giving Fund nicht mehr erfüllt. In diesen Fällen weist PayPal Giving Fund die für sie eingenommenen Gelder einer anderen Wohltätigkeitsorganisation mit ähnlicher Zielsetzung zu. Bei der Auswahl dieser Ersatzorganisation wird der Wunsch der Spender nach Möglichkeit berücksichtigt.","The charity will typically receive the funds from PayPal Giving Fund within 15-45 days of your donation if the charity has enrolled (or 90 days if the charity has not yet enrolled). Unlike other platforms, 100% of any Gift Aid will go to the charity as well.":"Die Wohltätigkeitsorganisation erhält deine Spende, falls sie sich bereits registriert hat, typischerweise nach 15–45 Tagen (bzw. nach 90 Tagen, falls sie sich noch nicht registriert hat). Anders als bei anderen Plattformen gehen 100 % jeder als Gift Aid behandelten Spende an die begünstigte Wohltätigkeitsorganisation.","PayPal Giving Fund will grant your donation to {{charityName}} within 15-45 days (Or 90 days if the charity has not yet enrolled)*.":"PayPal Giving Fund stellt deine Spende innerhalb von 15–45 Tagen an {{charityName}} zu (bzw. innerhalb von 90 Tagen, falls sich diese Organisation noch registrieren muss)*.","*If, after reasonable efforts have been made, PayPal Giving Fund cannot grant the funds to this charity, they will contact you before reassigning the funds in accordance with<1></1><2>PayPal Giving Fund\'s Policies</2>.":"* Die Organisation „PayPal Giving Fund“ setzt, wenn sie die Spendengelder trotz angemessener Bemühungen nicht an die entsprechende Wohltätigkeitsorganisation zustellen kann, in Rücksprache mit dir sowie gemäß ihren <1></1><2>Richtlinien</2> einen anderen Empfänger ein.","How non-profit fundraisers work":"So funktionieren Spendenaktionen für Nonprofit-Organisationen","Donations are typically 100% tax deductible in the US. Your donation is made to PayPal Giving Fund (a 501(c)(3) charitable organization) to benefit your chosen charity.":"Spenden sind in den USA üblicherweise zu 100 % steuerlich absetzbar. Deine Spende wird der von dir gewählten Wohltätigkeitsorganisation von PayPal Giving Fund, einer Wohltätigkeitsorganisation gemäß 501(c)(3), zugestellt.","Fundraiser updates ({{totalUpdates}})":"Neuigkeiten zum Fundraiser ({{totalUpdates}})","Fundraiser updates":"Spendenaktionen-Neuigkeiten","Close fundraiser updates modal":"Spendenaktionen-Neuigkeiten-Fenster schließen","Thanks for donating":"Danke für deine Spende","Boost this fundraiser":"Dieser Kampagne Schub geben","Be the first to help":"Werde der erste Unterstützer","Your early support will go a long way and help inspire others to donate.":"Die ersten Spender sind die wichtigsten, denn sie bringen den Stein ins Rollen.","Report fundraiser":"Kampagne melden","See top":"Absteigend nach Summe","Donations":"Spenden","Contact Us - Answer Found":"Kontaktiere uns – Antwort gefunden","Answer Found!":"Antwort gefunden!","Thanks very much!":"Vielen Dank!","If you ever need some extra help, the GoFundMe Team is standing by!":"Bei Fragen oder Problemen ist das GoFundMe-Team jederzeit für dich da!","Return to Help Center":"Zurück zum Hilfe-Center","Contact Us - Message Sent!":"GoFundMe kontaktieren – Nachricht versendet!","Message Sent":"Nachricht versendet","Thank you for your patience":"Vielen Dank für deine Geduld","We\'re sorry, but that campaign cannot be found. Please check the link URL and try again.":"Die gesuchte Spendenaufruf kann leider nicht gefunden werden. Bitte überprüfe die eingegebene URL und versuche es dann erneut.","Page Not Found":"Seite nicht gefunden","Home":"Startseite","Campaign Not Found":"Spendenaufruf nicht gefunden","Search gofundme.com for":"Suche innerhalb von gofundme.com nach","Show your support by going to this link":"Rufe diesen Link auf, um zu helfen","Pagination navigation":"Seitennavigation","Previous page":"Vorherige Seite","Previous":"Vorherige","Next page":"Nächste Seite","Next":"Weiter","Page {{page}} of {{nbPages}}":"Seite {{page}} von {{nbPages}}","Search in progress":"Suche läuft","Fundraisers for \\"{{query}}\\" in all locations":"Für die Suchanfrage „{{query}}“ ohne Ortseingrenzung gefundene Spendenaktionen","No results found for \\"{{query}}\\" in all locations":"Keine Ergebnisse für die Suchanfrage „{{query}}“ ohne Ortseingrenzung gefunden","Search results for {{- query}}":"Suchergebnisse für {{- query}}","GoFundMe: {{- searchQuery}}":"GoFundMe-Kampagne: {{- searchQuery}}","The leader in online fundraising":"Die Nummer 1 für Online-Spendenkampagnen.","We\'re sorry. Something went wrong. Please wait one minute and try again.":"Es ist ein Fehler aufgetreten. Wir bitten um Entschuldigung. Bitte versuche es nach einer Minute erneut.","Unknown Error":"Unbekannter Fehler","Join this list. <1>Donate now.</1>":"Trage dich in dieser Liste ein. <1>Jetzt spenden.</1>","Top":"Top","Donations ({{totalDonations}})":"Spenden ({{totalDonations}})","Close all donations modal":"Fenster „Alle Spenden“ schließen","Close":"Schließen","<0>What is this? <1></1><2>Learn more</2></0>":"<0>Was ist das? <1></1><2>Mehr erfahren</2></0>","Large":"Groß","Medium":"Mittel","Small (Button only)":"Klein (nur Button)","Copy and paste the following embed code:":"Füge den folgenden Einbettungscode ein:","Copy HTML code":"HTML-Code kopieren","Copied!":"Kopieren erfolgreich!","Something went wrong. Please select the code block to manually copy it.":"Es ist ein Fehler aufgetreten. Bitte wähle den Codeblock aus, um ihn manuell zu kopieren.","Preview":"Vorschau","Select the button text":"Text für den Button auswählen","Have you seen \\"{{- title}}\\"?":"Kennst du schon „{{- title}}“?","Hello \\n \\n I thought you might be interested in supporting this GoFundMe, {{- shareLink}}. \\n \\n Even a small donation could help {{- name}} reach their fundraising goal. And if you can\'t make a donation, it would be great if you could share the fundraiser to help spread the word. \\n \\n Thanks for taking a look!":"Hallo, \\n \\n ich dachte, du hast vielleicht Interesse, dieses GoFundMe zu unterstützen: {{- shareLink}}. \\n \\n Schon mit einer kleinen Spende bringst du {{- name}} dem Ziel ein Stückchen näher. Wenn du selbst nicht spenden kannst, kannst du andere dazu aufrufen. Auch damit hilfst du sehr! \\n\\n Vielen Dank für deine Zeit!","Hi,\\n\\nI\'d really appreciate it if you would share or donate to this GoFundMe.\\n\\n*{{- fundTitle}}*\\n\\n{{- description}}\\n\\nRead more here {{- fundUrl}}\\n\\nForward this message to your contacts to help this campaign reach its goal!":"Hallo,\\n \\nich würde mich sehr freuen, wenn du dieses GoFundMe mit einer Spende unterstützen oder mit anderen teilen würdest.\\n\\n*{{- fundTitle}}*\\n\\n{{- description}}\\n\\nWeitere Informationen {{- fundUrl}}\\n\\nLeite diese Nachricht an deine Kontakte weiter und hilf diesem Spendenaufruf, das Ziel zu erreichen!","Hi, I\'d really appreciate it if you would share or donate to this GoFundMe, {{- shareLink}}":"Hallo, ich würde mich sehr freuen, wenn du dieses GoFundMe, {{- shareLink}}, mit einer Spende unterstützen oder mit anderen teilen würdest.","Help by sharing":"Hilf mit, indem du die Kampagne teilst","Fundraisers shared on social networks raise up to 5x more":"Für Spendenaktionen, die in sozialen Netzwerken geteilt werden, gehen bis zu 5x mehr Spenden ein","Copy":"Kopieren","Copy link":"Link kopieren","Back":"Zurück","Top Donations":"Höchste Spenden","See all donations":"Alle Spenden anzeigen","All":"Alle","Be a top donor for {{- beneOrOrganizerName}} with {{- averageTopDonation}} or more.":"Unterstütze {{- beneOrOrganizerName}} mit einer Spende von {{- averageTopDonation}} oder mehr und werde damit zu einem der großzügigsten Spender der Kampagne.","<0>Donating outside of GoFundMe</0><1>Donations on other platforms are not protected by the GoFundMe Guarantee. In the rare case that something isn’t right on GoFundMe, we work with you to determine if misuse occurred.<1></1><2>Learn more</2></1><2>Donate now</2>":"<0>Auf anderem Weg als über GoFundMe spenden</0><1>Über andere Plattformen geleistete Spenden fallen nicht unter die GoFundMe-Garantie. In den seltenen Fällen, in denen Unstimmigkeiten auftreten, klären wir in Zusammenarbeit mit der Person, die diese meldet, ob ein Fall von Missbrauch vorliegt.<1></1><2>Mehr erfahren</2></1><2>Jetzt spenden</2>","Close modal":"Fenster schließen","Suggestions":"Vorschläge","Make a Beneficiary Claim":"Als spendenbegünstigte Person Anspruch einreichen","Make a Beneficiary Claim | GoFundMe Support":"Als spendenbegünstigte Person Anspruch Person einreichen | GoFundMe-Support","Contact Us":"GoFundMe kontaktieren","Make a Donor Claim":"Als Spender Anspruch einreichen","Make a Donor Claim | GoFundMe Support":"Als Spender Anspruch einreichen | GoFundMe-Support","Report a Fundraiser":"Kampagne melden","Report a Fundraiser | GoFundMe Support":"Kampagne melden | GoFundMe-Support","Press Contact Form":"Pressekontaktformular","Press Contact Form | GoFundMe Support":"Kontaktformular für die Presse | GoFundMe-Support","Send Message":"Nachricht senden","Contact":"Kontaktieren","Write {{firstName}} a message":"Schreibe eine Nachricht an {{firstName}}","Organizer":"Organisator","Cancel":"Abbrechen","2. Use your donation receipt to<1></1><2>edit your donation comment</2><3></3>or<5></5><6>change your name on a donation</6>.":"2. Über deinen Spendenbeleg kannst du<1></1><2>deinen Spendenkommentar bearbeiten</2><3></3>oder<5></5><6>den Namen, unter dem du gespendet hast, ändern</6>.","If you do not remember your GoFundMe password, please<1></1><2>click here to request a new password</2>.":"Falls du das Passwort für deinen GoFundMe-Account nicht mehr weißt, kannst du<1></1><2>hier klicken, um ein neues Passwort zu beantragen</2>.","If you received an<1></1><2>unexpected refund</2><3></3>for your donation it could be for any of the following reasons:":"Falls dir deine Spende<1></1><2>unerwartet zurückerstattet</2><3></3>wird, kann das einen der folgenden Gründe haben:","Edit My Comment":"Kommentar bearbeiten","Edit My Name":"Meinen Namen bearbeiten","Get Donation Receipt":"Spendenbeleg abrufen","Refund All Donations":"Alle Spenden rückerstatten","Update Donation Anonymity":"Spende anonymisieren","We can help you with that! Confirm the email address you used to donate.":"Wir können dir dabei helfen. Bitte bestätige dazu die E-Mail-Adresse, die du verwendet hast, um deine Spende zu leisten.","Editing the information on a donation is quick and easy, and can be done from your donation receipt or through your GoFundMe account.":"Du kannst deine Angaben ganz schnell und einfach bearbeiten, entweder über deinen Spendenbeleg oder über deinen GoFundMe-Account.","Actions you can take on your own:":"Das kannst du selbst tun:","1. Request a new donation receipt by entering your donation email address in the field below.":"1. Gib die E-Mail-Adresse, über die du deine Spende geleistet hast, in das Feld unten ein, um einen neuen Beleg für deine Spende anzufordern.","We can help you with that! If you have a personal fundraiser, please enter the email address you used to create your fundraiser.":"Wir können dir dabei helfen. Falls es sich bei deiner Kampagne um eine persönliche Kampagne handelt, gib bitte die E-Mail-Adresse ein, die du zur Erstellung deiner Kampagne verwendet hast.","If you have a Certified Charity fundraiser, our Customer Happiness Team can help you with that! Please select an option below in \\"Still need help?\\" and include the link to the fundraiser you\'d like to refund.":"Falls es sich bei deiner Kampagne um eine Kampagne für eine zertifizierte Wohltätigkeitsorganisation handelt, hilft dir unser Kundensupport gerne weiter. Bitte wähle eine der unten unter „Benötigst du weitere Hilfe?“ angegebenen Optionen aus und füge deiner Auswahl den Link zu der Kampagne hinzu, deren Spenden du zurückerstatten möchtest.","Additional Information:":"Weiterführende Informationen:","Organizer deactivated the fundraiser":"Die Kampagne wurde durch ihren Organisator deaktiviert","Our payment processor wasn\'t able to verify the donation":"Unser Zahlungsdienstleister konnte die Richtigkeit der Spendenangaben nicht verifizieren","Organizer did not verify their account or withdraw funds within required deadlines":"Der Organisator hat seine Accountdaten nicht fristgerecht bestätigen lassen oder seine Auszahlungseinstellungen nicht fristgerecht eingerichtet","The donation was charged back by the donor":"Der Spender hat sich seine Spende zurückbuchen lassen","The donation was made by the organizer or beneficiary":"Es handelt sich um eine durch den Organisator oder die spendenbegünstigte Person der Kampagne geleistete Spende","Please visit the fundraiser to view any updates that the organizer might have posted in regards to refunds, click \'Contact\' beneath the organizer\'s name on their fundraiser to email them with any questions, or reach out to our team if you have questions on how you may be able to still support the cause.":"Es kann sein, dass der Kampagnenorganisator auf der Kampagnenseite Neuigkeiten in Bezug auf Spendenrückerstattungen bekanntgibt. Dort kannst du außerdem über den unterhalb des Namens des Organisators angezeigten Button „Kontaktieren“ per E-Mail mit dem Organisator Kontakt aufnehmen. Falls du wissen möchtest, wie du das Anliegen der Kampagne nach wie vor unterstützen kannst, kannst du dich mit dieser Frage gerne an unser Team wenden.","Help Center":"Hilfe-Center","Please read below":"Siehe unten","Your Email Address":"E-Mail-Adresse","My question was answered":"Meine Frage wurde beantwortet","Still need help?":"Benötigst du weitere Hilfe?","Chat now":"Jetzt chatten","Chat":"Chat","Send email":"E-Mail senden","Donations paused":"Spendenannahme ausgesetzt","Our team has contacted the organizer with a solution, and donations will resume once the issue is resolved.":"Unser Team hat dem Organisator einen Lösungsvorschlag unterbreitet. Sobald das Problem behoben ist, können wieder Spenden angenommen werden.","How can I help?":"Wir kann ich dir helfen?","Please reach out to the organizer and ask them to sign in to GoFundMe and check their account to resolve the issue.":"Bitte den Organisator der betreffenden Kampagne, zur Behebung des Problems seinen GoFundMe-Account zu überprüfen.","Something went wrong. We’re working on it, please try again later or<1></1><2>contact us</2>.":"Es ist ein Fehler aufgetreten. Wir arbeiten an der Behebung. Bitte versuche es später erneut oder<1></1><2>setze dich mit uns in Verbindung</2>.","To include a comment with your donation, you must add text and/or upload a photo.":"Hinterlasse einen Kommentar zu deiner Spende, indem du ihr Text hinzufügst und/oder ein Foto hochlädst.","{{fileName}}: Please choose a jpeg, jpg, gif, or png file type, and ensure it is smaller than 2048 kb.":"{{fileName}}: Bitte wähle eine Datei, die im jpeg-, jpg-, gif- oder png-Format vorliegt und maximal 2048 KB groß ist.","{{fileName}}: Please try again later.":"{{fileName}}: Bitte versuche es später noch einmal.","Show more Support":"Engagement weiter hochfahren","Return to campaign":"Zur Spendenaufruf zurückkehren","Back to previous page":"Zurück zur vorherigen Seite","Hello \\n \\n I just donated to this GoFundMe, {{- shareLink}}.  Would you be interested in supporting it too? \\n \\n Even a small donation could help {{- name}} reach their fundraising goal. And if you can\'t make a donation, it would be great if you could share the fundraiser to help spread the word. \\n \\n Thanks for taking a look!":"Hallo \\n \\n ich habe soeben für diese GoFundMe-Kampagne gespendet: {{- shareLink}}.  Vielleicht hast du ja auch Interesse, sie zu unterstützen? \\n\\n Schon mit einer kleinen Spende bringst du {{- name}} dem Ziel ein Stückchen näher. Wenn du selbst nicht spenden kannst, kannst du vielleicht andere dazu aufrufen. Auch damit hilfst du sehr! \\n\\n Vielen Dank für deine Zeit!","Hi, I’d really appreciate it if you would share or donate to this GoFundMe, {{- fundTitle}} {{- shareLink}}":"Hallo, ich würde mich sehr freuen, wenn du das GoFundMe {{- fundTitle}} {{- shareLink}} mit einer Spende unterstützen oder mit anderen teilen würdest","Hi, I just donated to this GoFundMe and would appreciate it if you would share or donate too. {{- shareLink}}":"Hallo, ich habe soeben für diese GoFundMe-Kampagne gespendet und würde mich freuen, wenn auch du sie mit einer Spende unterstützen oder andere auf sie aufmerksam machen würdest. {{- shareLink}}","Something went wrong. Please select the link and manually copy.":"Es ist ein Fehler aufgetreten. Bitte wähle und kopiere den Link manuell.","Now help spread the word":"Mach jetzt Werbung für diese Kampagne","By sharing this fundraiser, you increase their chance of success by 5x.":"Wenn du die Kampagne teilst, sind ihre Erfolgschancen 5x höher.","Finished sharing?":"Alle informiert?","Sign up to post your comment":"Registriere dich, um deinen Kommentar zu posten","Sign up to follow this fundraiser":"Registriere dich, um Neuigkeiten zu dieser Kampagne zu abonnieren","Fundraising team ({{count}})":"Spendenteam ({{count}})","Contact us | GoFundMe Support":"Wende dich an uns | GoFundMe-Support","GoFundMe will always respond to your requests as quickly as possible.":"GoFundMe wird immer so schnell wie möglich auf deine Anfragen reagieren.","Donor protection guarantee":"Schutzgarantie für Spender","GoFundMe has the first and only guarantee in the industry.":"GoFundMe ist der einzige Anbieter der Branche, der Kampagnen durch eine Garantie schützt.","Simple setup":"Einfache Einrichtung","You can personalize and share your GoFundMe in just a few minutes.":"In nur wenigen Minuten hast du die Kampagne erstellt, die zu dir passt, und sie mit deinen Freunden geteilt.","0% platform fee":"0 % Nutzungsgebühr","With a 0% platform fee, you get to keep even more of your money.":"Dank 0 % Nutzungsgebühren bleibt den Begünstigten noch mehr von der Spende.","Mobile app":"Eigene App","The GoFundMe app makes it easy to launch and manage your campaign on the go.":"Mit der GoFundMe-App können Spendenaufrufn auch unterwegs problemlos gestartet und verwaltet werden.","Social reach":"Hohe Reichweite über soziale Netzwerke","Harness the power of social media to spread your story and get more support.":"Nutze die Stärke sozialer Netzwerke und mach deine Kampagne bekannt und erfolgreich!","24/7 expert advice":"Rund um die Uhr kompetent beraten","Our best in class Customer Happiness agents will answer your questions, day or night.":"Die hervorragenden Mitarbeiter unseres Support-Teams beantworten deine Fragen rund um die Uhr.","Fundraisers":"Spendenaktionen","Discover":"Entdecken","Charity":"Nonprofit-Organisation","User name":"Nutzername","What is crowdfunding?":"Was ist Crowdfunding?","How it works":"So funktioniert\'s","Fundraising tips":"Tipps für das Fundraising","Plan your fundraiser":"Kampagne planen","Travel & Adventure":"Reisen und Abenteuer","Medical, Illness & Healing":"Medizinisches, Krankheit und Genesung","Missions, Faith & Church":"Religion & Glaube","Non-Profits & Charities":"Nonprofit- und Wohltätigkeitsorganisationen","Weddings & Honeymoons":"Hochzeiten und Flitterwochen","Other":"Sonstiges","Sports, Teams & Clubs":"Sport, Teams und Vereine","Education & Learning":"Ausbildung und Lernen","Volunteer & Service":"Ehrenamt","Competitions & Pageants":"Wettbewerbe","Accidents & Emergencies":"Unfälle und Notfälle","Dreams, Hopes & Wishes":"Träume, Hoffnungen und Wünsche","Animals & Pets":"Tiere und Haustiere","Environment":"Umwelt","Rent, Food & Monthly Bills":"Lebenshaltungskosten","Birthday Pots":"Geburtstagssammelaktionen","Babies, Kids & Family":"Babys, Kinder und Familie","Business & Entrepreneurs":"Gründer und Unternehmer","Celebrations & Events":"Feiern und Events","Community & Neighbors":"Lokale Projekte","Creative Arts, Music & Film":"Kreatives","Funerals & Memorials":"Beisetzungen und Gedenkfeiern","#1 fundraising platform":"Die führende Spendenplattform","More people start fundraisers on GoFundMe than on any other platform.":"GoFundMe ist die Spendenplattform mit den meisten Kampagnen.","Expert advice, 24/7":"Kompetente Beratung, 24/7","Contact us with your questions and we’ll answer, day or night.":"Wende dich mit deinen Fragen an uns; wir antworten dir rund um die Uhr.","Team member":"Teammitglied","Sorry, no account found":"Es konnte leider kein Account gefunden werden","Your message to {{coFirstName}} successfully sent.":"Deine Nachricht an {{coFirstName}} wurde erfolgreich versendet.","Your message to {{coFirstName}} failed to send. Please try again later.":"Deine Nachricht an {{coFirstName}} konnte nicht versendet werden. Bitte versuche es später noch einmal.","[email redacted]":"[E-Mail ausgeblendet]","[phone redacted]":"[Telefonnummer bearbeitet]","Please enter your name.":"Bitte gib deinen Namen ein.","Please enter a shorter name.":"Der Name ist zu lang.","Please enter your email address.":"Gib deine E-Mail-Adresse ein.","Please enter a shorter email address.":"Die eingegebene E-Mail-Adresse ist zu lang.","Please confirm your email address.":"Bitte bestätige deine E-Mail-Adresse.","Emails do not match.":"E-Mail-Adressen stimmen nicht überein.","Please complete the reCAPTCHA.":"Bitte gib das reCAPTCHA ein.","Please enter a subject line":"Bitte gib einen Betreff ein","Please enter your message":"Bitte gib deine Nachricht ein","Please enter a longer message.":"Bitte gib eine längere Nachricht ein","Please enter a shorter message.":"Bitte gib eine kürzere Nachricht ein","Please enter a valid phone number":"Gib eine gültige Telefonnummer ein","Please enter a campaign URL":"Bitte gib eine Spendenaufrufn-URL ein","Please specify how you know the Campaign Organizer.":"Bitte beschreibe, woher du den Spendenaufrufnorganisator kennst.","Please specify a description.":"Bitte gib eine Beschreibung ein.","Please select an option.":"Bitte wähle eine Option.","Please enter a description.":"Gib eine Beschreibung ein.","Please enter a longer description.":"Bitte gib eine längere Beschreibung ein.","Please enter your concerns.":"Bitte beschreibe dein Anliegen.","Please enter a publication name":"Bitte gib einen Namen ein, unter dem die Veröffentlichung erfolgen soll","Please log in":"Bitte melde dich an","The email entered does not match your account\'s email":"Die eingegebene E-Mail-Adresse stimmt nicht mit der in deinem Account hinterlegten E-Mail-Adresse überein.","Unexpected error":"Unerwarteter Fehler","Please enter your name":"Gib deinen Namen ein","Please enter your email address":"Gib deine E-Mail-Adresse ein","Please enter a valid email address.":"Gib eine gültige E-Mail-Adresse ein.","Today":"Heute","Yesterday":"Gestern","[redacted]":"[überarbeitet]","Please enter your password":"Bitte gib dein Passwort ein","Please enter your first name":"Gib deinen Vornamen ein","Please enter a shorter first name.":"Der eingegebene Vorname ist zu lang.","Please enter your last name":"Gib deinen Nachnamen ein","Please enter a shorter last name.":"Der eingegebene Nachname ist zu lang.","Your email address does not match.":"Die eingegebenen E-Mail-Adressen stimmen nicht überein.","Please enter a password.":"Gib ein Passwort ein.","Passwords must be at least twelve characters long.":"Passwörter müssen mindestens 12 Zeichen lang sein.","You have exceeded the maximum amount of characters.":"Du hast die maximale Zeichenzahl überschritten.","Passwords must contain at least one number, symbol, uppercase letter, and lowercase letter.":"Passwörter müssen mindestens eine Ziffer, ein Symbol, einen Großbuchstaben und einen Kleinbuchstaben enthalten.","Please make a selection...":"Bitte hier auswählen …","Yes, I have contacted the Campaign Organizer":"Ja, ich habe mich an den Spendenaufrufnorganisator gewandt","No, I have not contacted the Campaign Organizer":"Nein, ich habe mich nicht an den Spendenaufrufnorganisator gewandt","The situation has been misrepresented.":"Die Situation falsch dargestellt wurde.","The funds were not used as stated on the campaign.":"Die gesammelten Spendengelder wurden nicht für den angegebenen Zweck verwendet.","The funds were never delivered to the intended recipient.":"Die gesammelten Spendengelder wurden nicht an den Empfänger, für den sie bestimmt waren, übergeben.","I did not authorize this donation.":"Ich habe diese Spende nicht genehmigt.","I no longer wish to support this campaign.":"Ich will diese Spendenaufruf nicht mehr unterstützen.","… {{- userName}} needs your support for {{- campaignTitle}}":"… {{- userName}}  braucht deine Unterstützung für  {{- campaignTitle}}","{{- organizerFullName}} and {{- teamMemberFullName}} are organizing this fundraiser to benefit {{- beneficiaryFullName}}.":"{{- organizerFullName}} und {{- teamMemberFullName}} leiten dieses GoFundMe zugunsten von {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{- teamMemberFullName}} are organizing this fundraiser on behalf of {{- beneficiaryFullName}}.":"{{- organizerFullName}} und {{- teamMemberFullName}} leiten dieses GoFundMe zugunsten von {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser to benefit {{- beneficiaryFullName}}.":"{{- organizerFullName}} und {{count}} weitere Personen leiten dieses GoFundMe zugunsten von {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser to benefit {{- beneficiaryFullName}}.:_:plural":"{{- organizerFullName}} und {{count}} weitere Personen leiten dieses GoFundMe zugunsten von {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser on behalf of {{- beneficiaryFullName}}.":"{{- organizerFullName}} und {{count}} weitere Person leiten dieses GoFundMe zugunsten von {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser on behalf of {{- beneficiaryFullName}}.:_:plural":"{{- organizerFullName}} und {{count}} weitere Personen leiten dieses GoFundMe zugunsten von {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{- teamMemberFullName}} are organizing this fundraiser.":"{{- organizerFullName}} und {{- teamMemberFullName}} organisieren dieses Fundraising.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser.":"{{- organizerFullName}} und {{count}} weitere organisieren dieses Fundraising.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser.:_:plural":"{{- organizerFullName}} und {{count}} weitere Personen organisieren dieses GoFundMe.","{{- organizerFullName}} is organizing this fundraiser to benefit {{- beneficiaryFullName}}.":"{{- organizerFullName}} leitet dieses GoFundMe zugunsten von {{- beneficiaryFullName}}.","{{- organizerFullName}} is organizing this fundraiser on behalf of {{- beneficiaryFullName}}.":"{{- organizerFullName}} ist Organisator dieser Kampagne für {{- beneficiaryFullName}}.","{{- organizerFullName}} is organizing this fundraiser.":"{{- organizerFullName}} organisiert diese Kampagne.","This team raised {{raisedAmountFormatted}} from {{count}} other donation.":"Von diesem Team wurde {{count}} weitere Spende in einer Gesamthöhe von {{raisedAmountFormatted}} gesammelt.","This team raised {{raisedAmountFormatted}} from {{count}} other donation.:_:plural":"Von diesem Team wurden {{count}} weitere Spenden in einer Gesamthöhe von {{raisedAmountFormatted}} gesammelt.","Raised {{amount}} from {{count}} donation":"Einnahmen über {{amount}} aus {{count}} Spende","Raised {{amount}} from {{count}} donation:_:plural":"Einnahmen in Höhe von {{amount}} über {{count}} Spenden","Donations are typically 100% tax deductible in the US.":"Spenden sind in den USA üblicherweise zu 100 % steuerlich absetzbar.","Donations are typically tax deductible in Canada.":"Spenden sind in Kanada üblicherweise steuerlich absetzbar.","Donations are typically tax deductible in Australia.":"Spenden sind in Australien üblicherweise steuerlich absetzbar.","Donations eligible for Gift Aid.":"Spenden, die als Gift Aid geltend gemacht werden können.","{{city}}, {{state}}":"{{city}}, {{state}}","Registered nonprofit":"Eingetragene Nonprofit-Organisation","text":"Text","Organizer and beneficiary":"Organisator und Spendenbegünstigter","Fundraising team: {{- name}} ({{count}})":"Spendenteam: {{- name}} ({{count}})","Copy fundraiser link":"Spendenaktionen-Link kopieren","Share this fundraiser so it can raise up to 5x more.":"Verbreite diese Kampagne, damit sie 5x höhere Einnahmen erzielen kann.","Build momentum for this fundraiser.":"Bringe diese Kampagne in Schwung.","View donation summary":"Spendenübersicht anzeigen","Check out your donation details.":"Sieh dir die Detailangaben zu deinen Spenden an.","Add a comment":"Kommentar hinzufügen","Add a supportive message with your donation.":"Hinterlasse mit deiner Spende noch einen Kommentar, der motiviert!","Add a profile photo":"Profilfoto hinzufügen","Looks good. Your profile photo has been added.":"Sieht gut aus: Dein Profilfoto wurde hinzugefügt.","Let friends and the GoFundMe community know it’s you!":"So wissen deine Freunde und die GoFundMe-Community, dass du es bist!","Share on Facebook":"Auf Facebook teilen","Tell your Facebook friends about this fundraiser.":"Erzähle deinen Facebook-Freunde von dieser Kampagne.","Join fundraising team":"Spendenteam beitreten","Help {{organizerName}} raise more funds.":"Hilf {{organizerName}}, noch mehr Spenden zu sammeln.","Thank donors":"Spendern danken","Show appreciation and get more support. Ask donors to share this fundraiser.":"Wenn deine Spender spüren, wie viel dir ihre Hilfe bedeutet, wirst du noch mehr Unterstützung erfahren. Bitte deine Spender, diese Kampagne zu teilen.","Add a donate button":"Füge einen Spendenbutton hinzu","Reach your community on a website or blog.":"Kommuniziere über eine Website oder einen Blog mit deiner Community.","Donated {{amount}}":"{{amount}} gespendet","Hi, I’d really appreciate it if you would share or donate to this GoFundMe, {{fundTitle}} {{- shareLink}}":"Hallo, ich würde mich sehr freuen, wenn du das GoFundMe {{fundTitle}} {{- shareLink}} mit einer Spende unterstützen oder mit anderen teilen würdest","Captcha challenge failed. Please try again.":"Captcha fehlgeschlagen. Bitte versuche es noch einmal.","You exceeded the maximum number of tries. Please try again later.":"Du hast die maximale Anzahl an Versuchen ausgeschöpft. Bitte versuche es später noch einmal.","An error occurred. Please try again later.":"Es ist ein Fehler aufgetreten. Bitte versuche es später noch einmal.","Sign in to follow this fundraiser":"Melde dich an, um Neuigkeiten zu dieser Kampagne zu abonnieren","Sign in to post your comment":"Melde dich an, um deinen Kommentar zu posten","Reset instructions sent to {{email}}":"An {{email}} gesendete Anweisungen zurücksetzen","Please check your email & password or please sign in with your Facebook account.":"Bitte überprüfe deine E-Mail-Adresse und dein Passwort oder melde dich über dein Facebook-Konto an.","Please check your email & password":"Bitte überprüfe deine E-Mail-Adresse und dein Passwort"}},"fr_FR":{"apps-campaign":{"Better Business Bureau":"Better Business Bureau","Accredited business":"Entreprise accréditée","Created {{dateFormatBasedOnLocal}}":"Date de création : {{dateFormatBasedOnLocal}}","Just now":"À l\'instant","Created {{count}} hour ago":"Création il y a {{count}} heure","Created {{count}} hour ago:_:plural":"Création il y a {{count}} heures","Created {{count}} day ago":"Création il y a {{count}} jour","Created {{count}} day ago:_:plural":"Création il y a {{count}} jours","Thank you for your donation. A receipt has been sent to <1>{{donorEmail}}</1>":"Merci pour votre don. Un reçu a été envoyé à l\'adresse suivante : <1>{{donorEmail}}</1>","by":"par","for":"pour","Team fundraiser":"Collecte de fonds en équipe","Link Copied":"Lien copié","Anonymous":"Anonyme","In partnership with<1></1><2>{{partnerName}}</2>":"En partenariat avec<1></1><2>{{partnerName}}</2>","See all":"Afficher tout","This fundraiser is located near you":"Cette collecte de fonds est organisée près de chez vous","{{- recentDonorsStr}} person just donated":"{{- recentDonorsStr}} personne vient de faire un don.","{{- recentDonorsStr}} person just donated:_:plural":"{{- recentDonorsStr}} personnes viennent de faire un don.","This fundraiser is no longer accepting donations. If you are the organizer, beneficiary, team member, or donor,<1></1><2>sign in</2><3></3>to see additional information.":"Cette collecte de fonds n\'accepte plus de dons. Si vous êtes organisateur, coéquipier, bénéficiaire ou donateur,<1></1><2>connectez-vous</2><3></3>pour afficher des informations complémentaires.","The organizer has currently disabled new donations to this fundraiser.":"L\'organisateur a désactivé le versement de nouveaux dons sur cette collecte de fonds.","This fundraiser has been deactivated by the organizer.":"Cette collecte de fonds a été désactivée par son organisateur.","Learn more":"En savoir plus","Copy to clip board":"Copier dans le presse-papiers","Fundraiser link copied":"Lien vers la collecte de fonds copié","Copy to clipboard":"Copier dans le presse-papiers","Now paste this link into a Facebook post, Messenger, or any Facebook groups you\'re in.":"Collez maintenant ce lien dans une publication Facebook, sur Messenger ou dans un groupe Facebook dont vous faites partie.","Copy your fundraiser link and paste it into a Facebook post, Messenger, or any Facebook groups you’re in.":"Copiez le lien vers votre collecte de fonds, puis collez-le dans une publication Facebook, sur Messenger ou dans un groupe Facebook dont vous faites partie.","Questions about where to share this link?":"Vous voulez savoir où partager ce lien ?","<0>Tip:</0><1></1>Paste this fundraiser link anywhere.":"<0>Conseil :</0><1></1>Collez le lien vers la collecte de fonds où vous voulez.","Collapse text":"Masquer le texte","Read more":"Lire la suite","Edit":"Modifier","Delete":"Supprimer","Edited":"Modifié","{{name}}<1></1>donated<3></3><4>{{donationAmount}}</4>":"{{name}}<1></1>a fait un don de<3></3><4>{{donationAmount}}</4>","{{name}}<1></1>commented":"{{name}}<1></1>a laissé un commentaire","Campaign organizer":"Organisateur de la cagnotte solidaire","Beneficiary":"Bénéficiaire","GoFundMe Guarantee":"Garantie GoFundMe","Only donations on our platform are protected by the GoFundMe Guarantee.":"Seuls les dons versés sur notre plateforme sont protégés par la garantie GoFundMe.","Donate now":"Je soutiens","Your donation":"Votre don","Recent donation":"Don récent","Top donation":"Don le plus élevé","First donation":"Premier don","Offline":"don hors ligne","Become an early supporter":"Devenez l\'un des premiers soutiens","Become the first supporter":"Devenez le premier soutien","Your donation matters":"Votre don compte","In the rare case something isn’t right, we will work with you to determine if misuse occurred.":"Cela arrive rarement mais, en cas de problème, nous déterminerons avec vous s\'il s\'agit d\'une utilisation abusive.","Email":"E-mail","Embed HTML":"Incorporer du code HTML","Messenger":"Messenger","Facebook":"Facebook","<0>We use cookies</0> to enable features and market content. Click “That’s OK” to add cookies. View<2></2><3>privacy policy</3><4></4>or<6></6><7>manage cookies.</7>":"<0>Nous utilisons des cookies</0> pour activer des fonctionnalités et du contenu marketing. Cliquez sur D\'accord pour ajouter des cookies. Consultez<2></2><3>la politique de confidentialité</3><4></4>ou<6></6><7>gérez les cookies.</7>","That\'s OK":"D\'accord","<0>As stated on the banner, GoFundMe uses cookies to enable features and market content to provide you with an improved experience. We consider these cookies to be non-essential, pursuant to our<1></1><2>privacy policy.</2><3></3>When you click “That’s OK” on the banner, we add these non-essential cookies.</0>":"<0>Comme indiqué sur la bannière, GoFundMe utilise des cookies pour activer des fonctionnalités et du contenu marketing afin d\'optimiser votre expérience. Nous considérons ces cookies comme non essentiels, conformément à notre<1></1><2>avis de confidentialité.</2><3></3>Quand vous cliquez sur D\'accord dans la bannière, nous ajoutons ces cookies non essentiels.</0>","Cookie Preferences":"Préférences en matière de cookies","Close cookie modal":"Fermer la fenêtre modale des cookies","We value your privacy":"Nous respectons votre vie privée","Here in this Cookie Preferences page, the non-essential cookies category is broken down\\n                            further into functional and marketing, as you can see below. You can change your\\n                            preferences as to both functional and marketing cookies here. When you click “Save” on\\n                            this page, we will add only those non-essential cookies you select.":"Dans la page de préférences en matière de cookies, les cookies non essentiels sont divisés en deux catégories (fonctionnels et marketing), \\ncomme vous pouvez le voir ci-dessous. Vous pouvez modifier vos préférences concernant \\nles cookies fonctionnels et marketing ici. Quand vous cliquez sur Enregistrer dans cette page, nous ajoutons \\nuniquement les cookies non essentiels que vous sélectionnez.","Marketing cookies":"Cookies marketing","Enable":"Activer","GoFundMe collects information regarding user navigation to provide sponsored content\\n                            relevant to our products on other sites. Specifically, if you start a fundraiser on\\n                            GoFundMe and you do not publish that fundraiser, GoFundMe may then show a banner ad the\\n                            next time you are on Facebook.":"GoFundMe collecte des informations concernant la navigation des utilisateurs pour leur proposer du contenu sponsorisé pertinent relatif à ses produits sur d\'autres sites. Concrètement, si vous démarrez une collecte de fonds sur GoFundMe sans la publier, GoFundMe peut afficher une bannière publicitaire la prochaine fois que vous accédez à Facebook.","Functional cookies":"Cookies fonctionnels","We use data collected with these cookies to improve your experiences on the GoFundMe\\n                            platform, as well as avoiding bugs or testing new features.":"Nous exploitons les données collectées avec ces cookies pour améliorer votre expérience sur la plateforme GoFundMe, \\nmais aussi pour éviter les bogues ou tester de nouvelles fonctionnalités.","Essential cookies":"Cookies essentiels","Always enabled":"Toujours activés","Data is collected by these cookies to offer basic functions, to ensure that the GoFundMe\\n                            Platform functions technically, to keep track of your settings and activities, and for\\n                            security or fraud prevention purposes.":"Des données sont collectées par ces cookies pour offrir des fonctions de base, \\nassurer le fonctionnement technique de la plateforme GoFundMe, garder une trace de vos paramètres et de vos activités, \\nmais aussi pour renforcer la sécurité et prévenir les fraudes.","Enable all and close":"Tout activer et fermer","Enable all":"Activer tout","Save and close":"Enregistrer et fermer","Save":"Enregistrer","Show less":"Afficher moins d\'éléments","Show more":"Afficher plus d\'éléments","Previous image":"Photo précédente","Next image":"Photo suivante","Image {{i}} of {{t}}":"Photo {{i}} sur {{t}}","Previous 10 images":"10 photos précédentes","Next 10 images":"10 photos suivantes","Close image gallery":"Fermer la galerie de photos","Delete this image":"Supprimer cette photo","Instagram":"Instagram","Copy and paste this link on your Instagram bio":"Copiez-collez ce lien dans votre bio Instagram.","Fundraiser link":"Lien vers la collecte de fonds","Link copied":"Lien copié","Something went wrong.":"Une erreur s\'est produite.","Share on Instagram":"Partager sur Instagram","Back to sharing":"Revenir aux options de partage","LinkedIn":"LinkedIn","Hi, I’d really appreciate it if you would share or donate to this GoFundMe.":"Bonjour, cela me ferait vraiment plaisir que vous fassiez un don ou que vous partagiez cette campagne GoFundMe.","Your password must have:":"Votre mot de passe doit contenir au moins :","At least 12 characters":"Au moins 12 caractères","1 uppercase letter":"1 lettre majuscule","1 lowercase letter":"1 lettre minuscule","1 number":"1 chiffre","1 symbol":"1 symbole","Print Poster":"Imprimer une affiche","Print":"Imprimer","{{raisedAmountString}}<1></1><2>{{sameCurrencyCode}} raised</2>":"{{raisedAmountString}}<1></1><2>{{sameCurrencyCode}} récoltés</2>","{{raisedAmountString}}<1></1><2>{{sameCurrencyCode}} raised of {{goalAmountNBSP}} goal</2>":"{{raisedAmountString}}<1></1><2>{{sameCurrencyCode}} récoltés sur un objectif de {{goalAmountNBSP}}</2>","{{goalAmountNBSP}}<1></1><2>{{sameCurrencyCode}} goal</2>":"Objectif de {{goalAmountNBSP}}<1></1><2>{{sameCurrencyCode}}</2>","share":"partager","Share as much as possible":"Partagez-la autant que possible","Try using all sharing options. Telling people about your fundraiser is the only way to start raising donations.":"Essayez d\'utiliser toutes les options de partage. Le seul moyen de récolter des dons, c\'est de parler de votre collecte de fonds autour de vous.","Text":"Message","donor":"donateur","donors":"donateurs","shares":"partages","follower":"abonné","followers":"abonnés","Fundraiser Stats":"Statistiques sur la collecte de fonds","Share":"Partager","By continuing, you agree with GoFundMe<1></1><2>terms</2><3></3>and<5></5><6>privacy policy</6>":"En poursuivant, vous acceptez les<1></1><2>conditions d\'utilisation</2><3></3>et la <5></5><6>politique de confidentialité</6> de GoFundMe.","Preview email":"Prévisualiser l\'e-mail","Twitter":"Twitter","{{article}} by {{- authorName}}":"{{article}} par {{- authorName}}","See older updates":"Afficher les communiqués plus anciens","WhatsApp":"WhatsApp","Your donation is made to PayPal Giving Fund Australia (ABN 65 105 950 945), a Public Ancillary Fund and a charity registered with the Australian Charities and Not-for-profits Commission, subject to its<1></1><2>terms</2>.":"Votre don est versé à PayPal Giving Fund Australie (ABN 65 105 950 945), fonds public auxiliaire et organisme caritatif enregistré auprès de la Commission des associations caritatives et à but non lucratif australiennes, conformément à ses<1></1><2>conditions d\'utilisation</2>.","While GoFundMe does not have a platform fee, PayPal Giving Fund Australia receives your donation after deduction of transaction<1></1><2>fees</2><3></3>and will grant funds to your recommended charity on a monthly basis.*":"GoFundMe ne facture aucuns frais de plateforme, mais PayPal Giving Fund Australie reçoit votre don après déduction des<1></1><2>frais</2><3></3>de transaction, puis reverse chaque mois les fonds à l\'association que vous avez indiquée.*","*If, after reasonable efforts, PayPal Giving Fund Australia cannot deliver donations to this<1></1>charity, it will grant funds to another charity per PayPal Giving Fund Australia\'s<3></3><4>policies</4>.":"* Si, en dépit d\'efforts raisonnables, PayPal Giving Fund Australie ne parvient pas à transférer les dons à cette<1></1>association, il reversera les fonds à une autre association, conformément à la<3></3><4><politique</4> de PayPal Giving Fund Australie.","Donations raised benefit:":"Bénéficiaire des dons récoltés :","How charity fundraisers work":"Fonctionnement d\'une collecte de fonds au profit d\'une association","Your donation is made to PayPal Giving Fund Canada, a charity registered with the Canada Revenue Agency (No. 812867752RR0001), subject to its<1></1><2>terms</2>.":"Votre don est versé à PayPal Giving Fund Canada, organisme caritatif enregistré auprès de l\'Agence du revenu du Canada (n° 812867752RR0001), conformément à ses<1></1><2>conditions d\'utilisation</2>.","While GoFundMe does not have a platform fee, PayPal Giving Fund Canada receives your donation after deduction of transaction<1></1><2>fees</2><3></3>and will grant funds to your recommended charity on a monthly basis.*":"GoFundMe ne facture aucuns frais de plateforme, mais PayPal Giving Fund Canada reçoit votre don après déduction des<1></1><2>frais</2><3></3>de transaction, puis reverse chaque mois les fonds à l\'association que vous avez indiquée.*","*If, after reasonable efforts, PayPal Giving Fund Canada cannot deliver donations to this<1></1>charity, it will grant funds to another charity per PayPal Giving Fund Canada\'s<3></3><4>policies</4>.":"* Si PayPal Giving Fund Canada ne parvient pas à transférer les dons à cette<1>association</1> en dépit des efforts raisonnables réalisés, il reversera les fonds à une autre association, conformément à la<3></3><4>politique</4> de PayPal Giving Fund Canada.","Support":"Soutien","Contribute":"Contribuer","Buy me a coffee":"Me payer un café","Show appreciation":"Exprimez votre gratitude","Start a GoFundMe":"Démarrer une campagne","Support this cause":"Soutenez cette cause","{{- userName}} needs your help today! {{- campaignTitle}}":"{{- userName}} a besoin de votre aide maintenant ! {{- campaignTitle}}","Fundraiser for {{- userName}} by {{- campaignOrganizer}} : {{- campaignTitle}}":"Collecte de fonds pour {{- userName}} organisée par {{- campaignOrganizer}} : {{- campaignTitle}}","Fundraiser by {{- userName}} : {{- campaignTitle}}":"Collecte de fonds organisée par {{- userName}} : {{- campaignTitle}}","{{- campaignTitle}}, organized by {{- campaignOrganizer}}":"{{- campaignTitle}} organisée par {{- campaignOrganizer}}","See more":"En voir plus","See top donations":"Afficher les dons les plus élevés","Continue reading":"Lire la suite","Updates":"Communiqués","Image {{imageIndex}} of {{totalImages}}. Click to view all images":"Photo {{imageIndex}} sur {{totalImages}}. Cliquez pour afficher toutes les photos.","Image {{imageIndex}} of {{totalImages}}":"Photo {{imageIndex}} sur {{totalImages}}","Photo limit reached":"Nombre maximum de photos atteint","Add more photos":"Ajouter plus de photos","Add photos to comment":"Ajouter des photos au commentaire","I donated because...":"J\'ai fait un don car...","Add this public comment to the fundraiser.":"Ajoutez ce commentaire public sur la collecte de fonds.","Your donation will be displayed as Anonymous, and this comment will not show up publicly on the campaign.":"Votre don restera anonyme et ce commentaire ne sera pas visible sur la cagnotte solidaire.","Post comment":"Publier un commentaire","Please choose a maximum of 10 photos for your comment.":"Choisissez 10 photos au maximum pour illustrer votre commentaire.","Please donate and share words of encouragement.":"Faites un don et laissez un mot d\'encouragement.","Continue":"Continuer","Comments":"Commentaires","Please select one.":"Sélectionnez un élément.","Yes, I have contacted the Campaign Organizer.":"Oui, j\'ai contacté l\'organisateur de la cagnotte solidaire.","No, I have not contacted the Campaign Organizer.":"Non, je n\'ai pas contacté l\'organisateur de la cagnotte solidaire.","They are a family member":"C\'est un membre de ma famille","They are a friend or acquaintance":"C\'est un ami ou une connaissance","I do not know the organizer of this campaign":"Je ne connais pas l\'organisateur de cette cagnotte solidaire","Your Name":"Votre nom","Your Phone Number":"Votre numéro de téléphone","Required in case our team needs to contact you for further details.":"Informations requises si notre équipe a d\'autres questions et doit vous recontacter.","Your Email":"Votre adresse e-mail","Confirm Email":"Confirmer l\'e-mail","Page URL":"URL de la page","Please enter the URL in this format: https://www.gofundme.com/f/example-campaign":"Respectez ce format : https://www.gofundme.com/f/exemple-cagnotte solidaire","I don\'t know the page URL":"Je ne connais pas l\'URL de la page.","Have you already contacted the organizer of this campaign?":"Avez-vous déjà contacté l\'organisateur de cette cagnotte solidaire ?","How do you know the organizer of this campaign?":"Comment avez-vous connu l\'organisateur de cette cagnotte solidaire ?","Please explain your relationship to the Campaign Organizer.":"Décrivez votre relation avec l\'organisateur de la cagnotte solidaire.","How much money did you receive from the campaign organizer?":"Quelle somme avez-vous reçue de la part de l\'organisateur de la cagnotte solidaire ?","Why do you believe this person will not deliver the funds to you?":"Pourquoi pensez-vous que cette personne ne vous transmettra pas les fonds ?","Please attach a copy of a government issued photo ID":"Envoyez une copie d\'une pièce d\'identité avec photo.","Please upload only JPEG, GIF, PNG or PDF files. The file size must be less than 5MB.":"Téléchargez uniquement des fichiers JPEG, GIF, PNG ou PDF. La taille des fichiers est limitée à 5 Mo.","Upload any evidence you may have":"Téléchargez toutes les preuves dont vous disposez.","Send Email":"Envoyer un e-mail","Message Subject":"Objet du message","Your Message":"Votre message","I am requesting a refund because...":"Je demande un remboursement car...","Describe your concerns about how the funds are being used.":"Exposez vos inquiétudes quant à l\'usage des fonds.","40 characters minimum":"40 caractères au minimum","Yes, I know the Campaign Organizer.":"Oui, je connais l\'organisateur de la cagnotte solidaire.","No, I do not know the Campaign Organizer":"Non, je ne connais pas l\'organisateur de la cagnotte solidaire.","I am a beneficiary.":"Je suis un bénéficiaire.","I am a donor.":"Je suis un donateur.","I am an individual concerned about this campaign.":"Je suis un particulier qui s\'intéresse à cette cagnotte solidaire.","I am involved in a legal dispute with the Campaign Organizer.":"Un litige juridique m\'oppose à l\'organisateur de la cagnotte solidaire.","This campaign includes libelous statements.":"Cette cagnotte solidaire diffuse des propos diffamatoires.","Campaign includes factually incorrect information.":"La cagnotte solidaire inclut des informations inexactes.","Campaign Organizer has not used funds for the stated purpose.":"L\'organisateur de la cagnotte solidaire n\'a pas utilisé les fonds aux fins indiquées.","They are impersonating someone or have copied another campaign.":"Il se fait passer pour quelqu\'un d\'autre ou a copié une cagnotte solidaire existante.","Please explain your concern(s) in detail.":"Indiquez en détail ce qui vous préoccupe.","Which statements are libelous and why?":"Quels propos sont diffamatoires et pourquoi ?","Which statements are incorrect and why?":"Quels propos sont inexacts et pourquoi ?","How have the campaign’s donations been spent?":"Comment les dons versés à la cagnotte solidaire ont-ils été dépensés ?","What is the original campaign link/title?":"Quel est le lien/titre de la cagnotte solidaire en question ?","Please describe your concerns":"Précisez vos inquiétudes.","How do you know the campaign organizer?":"Comment avez-vous connu l\'organisateur de la cagnotte solidaire ?","How are you connected to the campaign?":"Quel est votre lien avec la cagnotte solidaire ?","How much money is being withheld and why?":"Quelle somme d\'argent est bloquée et pourquoi ?","Why are you concerned about your donation?":"Pourquoi vous inquiétez-vous à propos de votre don ?","Please describe your concerns.":"Précisez vos inquiétudes.","Do you know the Campaign Organizer?":"Connaissez-vous l\'organisateur de la cagnotte solidaire ?","Which best describes you?":"Quelle phrase vous décrit le mieux ?","Publication":"Publication","Self-Service":"Libre-service","Please select an option which best describes you to see relevant information.":"Sélectionnez l\'option qui vous décrit le mieux pour afficher des informations pertinentes.","For customized help, please sign in.":"Pour obtenir une aide personnalisée, connectez-vous.","Sign In":"Se connecter","Top Answers":"Principales réponses","How do I get a refund?":"Comment obtenir un remboursement ?","How do I withdraw money?":"Comment retirer l\'argent ?","Is my country supported?":"Mon pays est-il pris en charge ?","Can I withdraw money?":"Puis-je retirer l\'argent ?","How do I reset my password?":"Comment réinitialiser mon mot de passe ?","How do I invite someone to withdraw?":"Comment inviter quelqu\'un à retirer les fonds ?","I can\'t withdraw my funds, now what?":"Je ne peux pas retirer les fonds. Que faire ?","How do your fees work?":"Comment fonctionnent vos commissions ?","What about taxes and stuff?":"Comment cela se passe-t-il avec les impôts ?","GoFundMe homepage":"Page d\'accueil GoFundMe","Choose your language":"Sélectionnez votre langue","How GoFundMe works":"Comment fonctionne GoFundMe","Common questions":"Questions fréquentes","Success stories":"Témoignages","Supported countries":"Pays couverts","Team fundraising":"Collecte de fonds en équipe","Donate button":"Bouton Je soutiens","Support COVID-19 fundraisers":"Soutenez les collectes de fonds spéciales COVID-19","Why GoFundMe":"Pourquoi GoFundMe ?","Medical":"Médecine","Emergency":"Urgences","Memorial":"Commémoration","Education":"Scolarité","Nonprofit":"Associations","Fundraise for":"Créer une collecte de fonds","Help center":"Centre d\'aide","Blog":"Blog","GoFundMe Stories":"Témoignages sur GoFundMe","Press center":"Centre de presse","Careers":"Emplois","About":"À propos de","Resources":"Ressources","Terms":"Conditions","Privacy":"Confidentialité","Legal":"Fins juridiques","Do Not Sell My Personal Information":"Mes informations personnelles ne sont pas à vendre","Hide":"Masquer","Show":"Afficher","Hide guidance cards":"Masquer les fiches conseils","Show guidance cards":"Afficher les fiches conseils","Previous card":"Fiche précédente","Next card":"Fiche suivante","You are donating to<1></1><2>PayPal Giving Fund Ireland</2>, a registered charity (No. 20205692), which will email you a receipt for your donation.":"Vous faites un don à<1></1><2>PayPal Giving Fund Irlande</2>. Cet organisme caritatif agréé (n° 20205692) vous enverra un reçu fiscal par e-mail pour votre don.","*In rare cases, a charity may cease to meet PayPal Giving Fund Ireland’s legal or other eligibility requirements to receive funds or may not accept the funds. In such cases, PayPal Giving Fund Ireland will<1></1><2>reassign the funds</2><3></3>to another charity and (wherever possible) seek a new recommendation from you.":"* Dans de rares cas, il arrive qu\'une association ne réponde plus aux exigences légales ou autres critères d\'éligibilité de PayPal Giving Fund Irlande pour recevoir des fonds ou qu\'elle refuse les fonds. Dans cette éventualité, PayPal Giving Fund Irlande<1></1><2>reverse les fonds</2><3></3>à une autre association et vous demande (si possible) d\'en recommander une autre.","The charity will typically receive the funds from PayPal Giving Fund within 15-45 days (90 days if the charity has not enrolled).*":"L\'association reçoit généralement les fonds de PayPal Giving Fund dans les 15 à 45 jours (90 jours si elle ne dispose pas d\'un compte PPGF).*","Open share modal":"Ouvrir la fenêtre modale de partage","Donate":"Je soutiens","Sign in":"Se connecter","Sign out":"Se déconnecter","Donations you\'ve made":"Dons que vous avez versés","Account settings":"Configuration du compte","Your fundraisers":"Vos collectes de fonds","Open navigation menu":"Ouvrir le menu de navigation","Close navigation menu":"Fermer le menu de navigation","My campaigns":"Mes cagnotte solidaires","Close Modal":"Fermer la fenêtre modale","Start":"Démarrer","Don\'t have an account? ":"Vous n\'avez pas de compte ? ","Sign up":"S\'inscrire","Enter the email address associated with your account, and we\'ll email you a link to reset your password":"Indiquez l\'adresse e-mail rattachée à votre compte. Nous vous enverrons un lien pour réinitialiser votre mot de passe.","Email address":"Adresse e-mail","Request new password":"Demander un nouveau mot de passe","Don\'t have an account?<1></1><2>Sign up</2>":"Vous n\'avez pas de compte ?<1></1><2>Inscrivez-vous</2>","Forgot your password?":"Mot de passe oublié ?","Password":"Mot de passe","Sign in to GoFundMe":"Se connecter à GoFundMe","Already have an account?<1></1><2>Sign in</2>":"Vous avez déjà un compte ?<1></1><2>Connectez-vous</2>","Please<1></1><2>sign in</2><3></3>to access your account.":"<1></1><2>Connectez-vous</2><3></3>pour accéder à votre compte.","First Name":"Prénom","Last Name":"Nom","Confirm email address":"Confirmez votre e-mail","Set password":"Définir un mot de passe","We will never post without your permission":"Nous ne publierons jamais quoi que ce soit<br>sans votre accord. ","Continue with Facebook":"Continuer avec Facebook","or":"ou","Use my email address":"Utiliser mon adresse e-mail","You are donating to<1></1><2>PayPal Giving Fund</2><3></3>UK, a registered charity (No. 1110538), which will email you a receipt for your donation and claim Gift Aid where eligible.":"Vous faites un don à <1></1><2>PayPal Giving Fund</2><3></3>UK. Cet organisme caritatif agréé (n° 1110538) vous enverra un reçu fiscal par e-mail et vous fera profiter du programme Gift Aid, le cas échéant.","<0></0>*In very limited cases, a recommended charity may cease to meet PayPal Giving Fund\'s legal or other eligibility<2></2><3>requirements</3><4></4>. In such cases, PayPal Giving Fund will reassign the funds to a similar charity, and (wherever possible) seek a new recommendation from donors.":"<0></0>* Dans de très rares cas, il arrive qu\'une association recommandée ne réponde plus aux<2></2><3>exigences</3><4></4>d\'admissibilité juridiques (ou d\'autre nature) de PayPal Giving Fund. Dans ce cas, PayPal Giving Fund reverse les fonds à une association similaire et s\'adresse (si possible) aux donateurs pour qu\'ils lui recommandent une autre œuvre de bienfaisance.","The charity will typically receive the funds from PayPal Giving Fund within 15-45 days of your donation if the charity has enrolled (or 90 days if the charity has not yet enrolled). Unlike other platforms, 100% of any Gift Aid will go to the charity as well.":"L\'association reçoit généralement les fonds de PayPal Giving Fund dans les 15 à 45 jours qui suivent votre don si cette association a déjà adhéré au programme (ou dans les 90 jours si elle ne l\'a pas encore fait). Contrairement à d\'autres plateformes, le montant Gift Aid est également reversé dans son intégralité aux associations.","PayPal Giving Fund will grant your donation to {{charityName}} within 15-45 days (Or 90 days if the charity has not yet enrolled)*.":"PayPal Giving Fund reversera votre don à l\'association {{charityName}} dans un délai de 15 à 45 jours (ou 90 jours si elle n\'a pas encore adhéré au programme).<sup>*</sup>","*If, after reasonable efforts have been made, PayPal Giving Fund cannot grant the funds to this charity, they will contact you before reassigning the funds in accordance with<1></1><2>PayPal Giving Fund\'s Policies</2>.":"* Si PayPal Giving Fund ne parvient pas à transférer le don à cette association en dépit des efforts raisonnables consentis, vous serez contacté(e) avant la réaffectation des fonds, conformément à la<1></1><2>politique de PayPal Giving Fund</2>.","How non-profit fundraisers work":"Fonctionnement des collectes de fonds au profit d\'associations","Donations are typically 100% tax deductible in the US. Your donation is made to PayPal Giving Fund (a 501(c)(3) charitable organization) to benefit your chosen charity.":"En principe, les dons sont entièrement déductibles des impôts aux États-Unis. Vous faites un don à l\'organisme caritatif de type 501(c)(3) PayPal Giving Fund, qui le reverse ensuite à l\'association de votre choix.","Fundraiser updates ({{totalUpdates}})":"Communiqués sur la collecte de fonds ({{totalUpdates}})","Fundraiser updates":"Communiqués sur la collecte de fonds","Close fundraiser updates modal":"Fermer la fenêtre modale des communiqués sur la collecte de fonds","Thanks for donating":"Merci pour votre don","Boost this fundraiser":"Boostez cette collecte de fonds","Be the first to help":"Faites le premier","Your early support will go a long way and help inspire others to donate.":"Si vous êtes parmi les premiers à soutenir cette campagne, cela incitera d\'autres personnes à verser un don.","Report fundraiser":"Signaler la collecte de fonds","See top":"Afficher le plus élevé","Donations":"Dons","Contact Us - Answer Found":"Nous contacter - Réponse trouvée","Answer Found!":"Réponse trouvée","Thanks very much!":"Merci beaucoup !","If you ever need some extra help, the GoFundMe Team is standing by!":"Si vous avez besoin d\'aide, l\'équipe de GoFundMe est toujours là pour vous.","Return to Help Center":"Retour au Centre d\'aide","Contact Us - Message Sent!":"Nous contacter - Message envoyé","Message Sent":"Message envoyé","Thank you for your patience":"Merci de votre patience.","We\'re sorry, but that campaign cannot be found. Please check the link URL and try again.":"Désolés, mais cette cagnotte solidaire est introuvable. Veuillez vérifier l\'URL du lien et réessayez.","Page Not Found":"Page introuvable","Home":"Accueil","Campaign Not Found":"Campagne introuvable","Search gofundme.com for":"Effectuez une recherche sur gofundme.com","Show your support by going to this link":"Montrez votre soutien en suivant ce lien","Pagination navigation":"Navigation par page","Previous page":"Page précédente","Previous":"Précédent","Next page":"Page suivante","Next":"Suivant","Page {{page}} of {{nbPages}}":"Page {{page}} sur {{nbPages}}","Search in progress":"Recherche en cours","Fundraisers for \\"{{query}}\\" in all locations":"Collectes de fonds pour {{query}} partout","No results found for \\"{{query}}\\" in all locations":"Aucun résultat trouvé pour {{query}} partout","Search results for {{- query}}":"Résultats de la recherche portant sur {{- query}}","GoFundMe: {{- searchQuery}}":"GoFundMe : {{- searchQuery}}","The leader in online fundraising":"Leader de la collecte de fonds en ligne","We\'re sorry. Something went wrong. Please wait one minute and try again.":"Nous vous prions de nous excuser. Une erreur s\'est produite. Veuillez patienter une minute et réessayer.","Unknown Error":"Erreur inconnue","Join this list. <1>Donate now.</1>":"Faites partie de cette liste. <1>Je soutiens</1>","Top":"Haut","Donations ({{totalDonations}})":"Dons ({{totalDonations}})","Close all donations modal":"Fermer la fenêtre modale avec tous les dons","Close":"Fermer","<0>What is this? <1></1><2>Learn more</2></0>":"<0>Qu\'est-ce que c\'est ? <1></1><2>En savoir plus</2></0>","Large":"Grand","Medium":"Moyen","Small (Button only)":"Petit (bouton uniquement)","Copy and paste the following embed code:":"Copiez-collez le code incorporé suivant :","Copy HTML code":"Copier le code HTML","Copied!":"Texte copié","Something went wrong. Please select the code block to manually copy it.":"Une erreur s\'est produite. Sélectionnez le bloc de code puis copiez-le manuellement.","Preview":"Prévisualiser","Select the button text":"Sélectionnez le texte du bouton","Have you seen \\"{{- title}}\\"?":"Avez-vous vu {{- title}} ?","Hello \\n \\n I thought you might be interested in supporting this GoFundMe, {{- shareLink}}. \\n \\n Even a small donation could help {{- name}} reach their fundraising goal. And if you can\'t make a donation, it would be great if you could share the fundraiser to help spread the word. \\n \\n Thanks for taking a look!":"Bonjour, \\n \\n J\'ai pensé à vous pour soutenir cette collecte de fonds GoFundMe : {{- shareLink}}. \\n \\n Même un petit don pourrait aider {{- name}} à atteindre son objectif. Si vous ne pouvez pas faire de don, ce serait vraiment bien de parler de cette collecte de fonds autour de vous en partageant le lien. \\n\\n Merci d\'y avoir jeté un coup d\'œil !","Hi,\\n\\nI\'d really appreciate it if you would share or donate to this GoFundMe.\\n\\n*{{- fundTitle}}*\\n\\n{{- description}}\\n\\nRead more here {{- fundUrl}}\\n\\nForward this message to your contacts to help this campaign reach its goal!":"Bonjour,\\n\\nJe compte sur vous pour faire un don ou partager cette cagnotte solidaire GoFundMe.\\n\\n* {{- fundTitle}} *\\n\\n{{- description}}\\n\\nLire la suite ici  {{- fundUrl}}\\n\\nTransférez ce message à vos contacts pour aider cette cagnotte solidaire à atteindre son objectif.","Hi, I\'d really appreciate it if you would share or donate to this GoFundMe, {{- shareLink}}":"Bonjour, cela me ferait vraiment plaisir que vous fassiez un don ou que vous partagiez cette campagne GoFundMe : {{- shareLink}}","Help by sharing":"Soutenez la campagne en la partageant","Fundraisers shared on social networks raise up to 5x more":"Les collectes de fonds partagées sur les réseaux sociaux récoltent jusqu\'à 5 fois plus de dons","Copy":"Copier","Copy link":"Copier le lien","Back":"Précédent","Top Donations":"Dons les plus élevés","See all donations":"Afficher tous les dons","All":"Tout","Be a top donor for {{- beneOrOrganizerName}} with {{- averageTopDonation}} or more.":"Devenez un des principaux donateurs de {{- beneOrOrganizerName}} avec un don de {{- averageTopDonation}} ou plus.","<0>Donating outside of GoFundMe</0><1>Donations on other platforms are not protected by the GoFundMe Guarantee. In the rare case that something isn’t right on GoFundMe, we work with you to determine if misuse occurred.<1></1><2>Learn more</2></1><2>Donate now</2>":"<0>Faire un don en dehors de la plateforme GoFundMe</0><1>Les dons versés sur d\'autres plateformes ne sont pas protégés par la garantie GoFundMe. Cela arrive rarement mais, en cas de problème sur GoFundMe, nous déterminons avec vous s\'il s\'agit d\'une utilisation abusive.<1></1><2>En savoir plus</2></1><2>Je soutiens</2>","Close modal":"Fermer la fenêtre modale","Suggestions":"Suggestions","Make a Beneficiary Claim":"Faire une réclamation en tant que bénéficiaire","Make a Beneficiary Claim | GoFundMe Support":"Faire une réclamation en tant que bénéficiaire | Support GoFundMe","Contact Us":"Nous contacter","Make a Donor Claim":"Faire une réclamation en tant que donateur","Make a Donor Claim | GoFundMe Support":"Faire une réclamation en tant que donateur | Support GoFundMe","Report a Fundraiser":"Signaler une collecte de fonds","Report a Fundraiser | GoFundMe Support":"Signaler une collecte de fonds | Support GoFundMe","Press Contact Form":"Formulaire de contact réservé à la presse","Press Contact Form | GoFundMe Support":"Formulaire de contact réservé à la presse | Support GoFundMe","Send Message":"Envoyer un message","Contact":"Contact","Write {{firstName}} a message":"Écrivez un message à {{firstName}}","Organizer":"Organisateur","Cancel":"Annuler","2. Use your donation receipt to<1></1><2>edit your donation comment</2><3></3>or<5></5><6>change your name on a donation</6>.":"2. Utilisez le reçu de votre don pour<1></1><2>modifier votre commentaire de don</2><3></3>ou<5></5><6>changer votre nom sur un don</6>.","If you do not remember your GoFundMe password, please<1></1><2>click here to request a new password</2>.":"Si vous avez oublié votre mot de passe GoFundMe,<1></1><2>cliquez ici pour demander un nouveau mot de passe</2>.","If you received an<1></1><2>unexpected refund</2><3></3>for your donation it could be for any of the following reasons:":"Si vous avez reçu un<1></1><2>remboursement inattendu</2><3></3>de votre don, c\'est probablement pour l\'une des raisons suivantes :","Edit My Comment":"Modifier le commentaire","Edit My Name":"Modifier mon nom","Get Donation Receipt":"Obtenir un reçu","Refund All Donations":"Rembourser tous les dons","Update Donation Anonymity":"Modifier le caractère anonyme du don","We can help you with that! Confirm the email address you used to donate.":"Nous pouvons vous y aider. Confirmez l\'adresse e-mail utilisée pour faire un don.","Editing the information on a donation is quick and easy, and can be done from your donation receipt or through your GoFundMe account.":"Vous voulez modifier les informations relatives à un don ? Rien de plus simple ! Vous pouvez le faire depuis le reçu ou via votre compte GoFundMe.","Actions you can take on your own:":"Actions que vous pouvez entreprendre vous-même :","1. Request a new donation receipt by entering your donation email address in the field below.":"1. Demandez un nouveau reçu de don en indiquant l\'adresse e-mail utilisée pour faire le don dans le champ ci-dessous.","We can help you with that! If you have a personal fundraiser, please enter the email address you used to create your fundraiser.":"Nous pouvons vous y aider. Si vous avez lancé une collecte de fonds personnelle, indiquez l\'adresse e-mail que vous avez utilisée lors de sa création.","If you have a Certified Charity fundraiser, our Customer Happiness Team can help you with that! Please select an option below in \\"Still need help?\\" and include the link to the fundraiser you\'d like to refund.":"Si vous avez lancé une collecte de fonds au profit d\'une association caritative certifiée, notre équipe du support technique peut vous aider. Sélectionnez une option sous J\'ai encore besoin d\'aide, puis copiez le lien vers la collecte de fonds concernée par le remboursement.","Additional Information:":"Informations complémentaires :","Organizer deactivated the fundraiser":"L\'organisateur a désactivé la collecte de fonds","Our payment processor wasn\'t able to verify the donation":"Le processeur de paiement n\'a pas pu vérifier le don","Organizer did not verify their account or withdraw funds within required deadlines":"L\'organisateur a dépassé le délai pour vérifier son compte ou retirer les fonds","The donation was charged back by the donor":"Le donateur s\'est fait rembourser son don","The donation was made by the organizer or beneficiary":"Le don provenait de l\'organisateur ou du bénéficiaire","Please visit the fundraiser to view any updates that the organizer might have posted in regards to refunds, click \'Contact\' beneath the organizer\'s name on their fundraiser to email them with any questions, or reach out to our team if you have questions on how you may be able to still support the cause.":"Consultez la page de la collecte de fonds pour voir les éventuels communiqués publiés par l\'organisateur à propos des remboursements. Si vous avez des questions et souhaitez envoyer un e-mail à l\'organisateur, cliquez sur Contact sous le nom de l\'organisateur de la collecte de fonds. Vous pouvez aussi contacter notre équipe pour vous renseigner sur les façons de continuer de soutenir cette cause.","Help Center":"Centre d\'aide","Please read below":"Lisez le paragraphe ci-dessous.","Your Email Address":"Adresse e-mail","My question was answered":"Je n\'ai plus de questions","Still need help?":"Encore besoin d\'aide ?","Chat now":"Lancer la discussion","Chat":"Discuter","Send email":"Envoyer un e-mail","Donations paused":"Dons suspendus","Our team has contacted the organizer with a solution, and donations will resume once the issue is resolved.":"Notre équipe a suggéré une solution à l\'organisateur. La campagne pourra accepter de nouveaux dons dès que la situation sera réglée.","How can I help?":"En quoi puis-je vous aider ?","Please reach out to the organizer and ask them to sign in to GoFundMe and check their account to resolve the issue.":"Demandez à l\'organisateur de se connecter à GoFundMe et de vérifier son compte pour résoudre le problème.","Something went wrong. We’re working on it, please try again later or<1></1><2>contact us</2>.":"Une erreur s\'est produite. Nous nous en occupons. Veuillez réessayer ultérieurement ou<1></1><2>nous contacter</2>.","To include a comment with your donation, you must add text and/or upload a photo.":"Pour laisser un commentaire avec votre don, il faut rédiger un texte et/ou télécharger une photo.","{{fileName}}: Please choose a jpeg, jpg, gif, or png file type, and ensure it is smaller than 2048 kb.":"{{fileName}} : choisissez un fichier au format jpeg, jpg, gif ou png d\'une taille inférieure à 2 048 Ko.","{{fileName}}: Please try again later.":"{{fileName}} : veuillez réessayer ultérieurement.","Show more Support":"Manifestez plus de soutien","Return to campaign":"Revenir à la cagnotte solidaire","Back to previous page":"Retour à la page précédente","Hello \\n \\n I just donated to this GoFundMe, {{- shareLink}}.  Would you be interested in supporting it too? \\n \\n Even a small donation could help {{- name}} reach their fundraising goal. And if you can\'t make a donation, it would be great if you could share the fundraiser to help spread the word. \\n \\n Thanks for taking a look!":"Bonjour\\n \\n Je viens de faire un don à la collecte de fonds GoFundMe {{- shareLink}}.  Voulez-vous faire un geste, vous aussi ? \\n \\n Même un petit don pourrait aider {{- name}} à atteindre son objectif. Si vous ne pouvez pas faire de don, ce serait vraiment bien d\'en parler autour de vous en partageant le lien. \\n\\n Merci d\'y jeter un coup d\'œil !","Hi, I’d really appreciate it if you would share or donate to this GoFundMe, {{- fundTitle}} {{- shareLink}}":"Bonjour, cela me ferait vraiment plaisir que vous fassiez un don ou que vous partagiez cette campagne GoFundMe : {{- fundTitle}} {{- shareLink}}","Hi, I just donated to this GoFundMe and would appreciate it if you would share or donate too. {{- shareLink}}":"Bonjour, je viens de faire un don à cette campagne GoFundMe. Cela me ferait vraiment plaisir si vous pouviez la partager ou verser un don. {{- shareLink}}","Something went wrong. Please select the link and manually copy.":"Une erreur s\'est produite. Sélectionnez le lien puis copiez-le manuellement.","Now help spread the word":"Maintenant, parlez-en autour de vous","By sharing this fundraiser, you increase their chance of success by 5x.":"En partageant cette collecte de fonds, vous multipliez par 5 ses chances de succès.","Finished sharing?":"Vous avez fini de partager la campagne ?","Sign up to post your comment":"Inscrivez-vous pour publier votre commentaire","Sign up to follow this fundraiser":"Inscrivez-vous pour suivre cette collecte de fonds.","Fundraising team ({{count}})":"Équipe de collecte de fonds ({{count}})","Contact us | GoFundMe Support":"Nous contacter | Support GoFundMe","GoFundMe will always respond to your requests as quickly as possible.":"GoFundMe répondra toujours à vos demandes le plus rapidement possible.","Donor protection guarantee":"Garantie de protection des donateurs","GoFundMe has the first and only guarantee in the industry.":"Exclusivité : GoFundMe propose une garantie pour protéger les donateurs.","Simple setup":"Configuration simple","You can personalize and share your GoFundMe in just a few minutes.":"Vous pouvez personnaliser et partager votre campagne GoFundMe en quelques minutes.","0% platform fee":"Aucuns frais de plateforme","With a 0% platform fee, you get to keep even more of your money.":"Comme il n\'y a pas de frais de plateforme à régler, vous profitez au maximum de l\'argent récolté.","Mobile app":"Application mobile","The GoFundMe app makes it easy to launch and manage your campaign on the go.":"Avec l\'application GoFundMe, lancer et gérer une cagnotte solidaire est un véritable jeu d\'enfant, où que vous soyez.","Social reach":"Portée sociale","Harness the power of social media to spread your story and get more support.":"Exploitez la puissance des réseaux sociaux pour diffuser votre histoire et obtenir davantage de soutien.","24/7 expert advice":"Conseils d\'expert 24 h/24, 7 j/7","Our best in class Customer Happiness agents will answer your questions, day or night.":"Nos agents de support triés sur le volet répondront à toutes vos questions, de jour comme de nuit.","Fundraisers":"Collectes de fonds","Discover":"Découvrir","Charity":"Associations","User name":"Nom d\'utilisateur","What is crowdfunding?":"Qu\'est-ce que le financement participatif ?","How it works":"Comment ça marche ?","Fundraising tips":"Conseils pour collecter des fonds","Plan your fundraiser":"Planifiez votre collecte de fonds","Travel & Adventure":"Voyages et aventure","Medical, Illness & Healing":"Santé","Missions, Faith & Church":"Religion","Non-Profits & Charities":"Associations","Weddings & Honeymoons":"Mariages et lunes de miel","Other":"Autre","Sports, Teams & Clubs":"Sports, équipes et clubs","Education & Learning":"Éducation","Volunteer & Service":"Bénévolat","Competitions & Pageants":"Compétition","Accidents & Emergencies":"Accidents et urgences","Dreams, Hopes & Wishes":"Rêves","Animals & Pets":"Animaux","Environment":"Environnement","Rent, Food & Monthly Bills":"Dépenses courantes","Birthday Pots":"Cagnottes Anniversaire","Babies, Kids & Family":"Famille","Business & Entrepreneurs":"Entreprises et entrepreneurs","Celebrations & Events":"Événements","Community & Neighbors":"Communauté et voisins","Creative Arts, Music & Film":"Créativité","Funerals & Memorials":"Obsèques et commémorations","#1 fundraising platform":"La première plateforme de financement participatif","More people start fundraisers on GoFundMe than on any other platform.":"GoFundMe compte plus d\'organisateurs de collecte de fonds que n\'importe quelle autre plateforme.","Expert advice, 24/7":"Conseils d\'expert 24 h/24, 7 j/7","Contact us with your questions and we’ll answer, day or night.":"Envoyez-nous vos questions. Nous y répondrons, 24 heures sur 24.","Team member":"Coéquipier","Sorry, no account found":"Nous sommes désolés, nous n\'avons trouvé aucun compte.","Your message to {{coFirstName}} successfully sent.":"Votre message a bien été envoyé à {{coFirstName}}.","Your message to {{coFirstName}} failed to send. Please try again later.":"Impossible d\'envoyer votre message à {{coFirstName}}. Veuillez réessayer ultérieurement.","[email redacted]":"[adresse e-mail supprimée]","[phone redacted]":"[téléphone supprimé]","Please enter your name.":"Indiquez votre nom.","Please enter a shorter name.":"Indiquez un nom plus court.","Please enter your email address.":"Indiquez votre adresse e-mail.","Please enter a shorter email address.":"Indiquez une adresse e-mail plus courte.","Please confirm your email address.":"Confirmez votre adresse e-mail.","Emails do not match.":"Les adresses e-mail ne correspondent pas.","Please complete the reCAPTCHA.":"Renseignez le champ reCAPTCHA.","Please enter a subject line":"Indiquez un objet.","Please enter your message":"Rédigez votre message.","Please enter a longer message.":"Rédigez un message plus long.","Please enter a shorter message.":"Rédigez un message plus court.","Please enter a valid phone number":"Indiquez un numéro de téléphone valide","Please enter a campaign URL":"Indiquez l\'URL d\'une cagnotte solidaire.","Please specify how you know the Campaign Organizer.":"Précisez votre lien avec l\'organisateur de cagnotte solidaire.","Please specify a description.":"Rédigez une description.","Please select an option.":"Sélectionnez une option.","Please enter a description.":"Veuillez entrer une description.","Please enter a longer description.":"Entrez une description plus longue.","Please enter your concerns.":"Indiquez ce qui vous préoccupe.","Please enter a publication name":"Indiquez un nom de publication.","Please log in":"Veuillez vous connecter","The email entered does not match your account\'s email":"L\'adresse e-mail saisie ne correspond pas à celle rattachée à votre compte.","Unexpected error":"Erreur inattendue","Please enter your name":"Indiquez votre nom.","Please enter your email address":"Indiquez votre adresse e-mail","Please enter a valid email address.":"Indiquez une adresse e-mail valide.","Today":"Aujourd\'hui","Yesterday":"Hier","[redacted]":"[contenu supprimé]","Please enter your password":"Indiquez votre mot de passe.","Please enter your first name":"Indiquez votre prénom","Please enter a shorter first name.":"Indiquez un prénom plus court.","Please enter your last name":"Indiquez votre nom","Please enter a shorter last name.":"Indiquez un nom plus court.","Your email address does not match.":"Vos adresses e-mail ne correspondent pas.","Please enter a password.":"Entrez un mot de passe.","Passwords must be at least twelve characters long.":"Un mot de passe doit contenir au moins 12 caractères.","You have exceeded the maximum amount of characters.":"Vous avez dépassé le nombre maximum de caractères.","Passwords must contain at least one number, symbol, uppercase letter, and lowercase letter.":"Un mot de passe doit contenir au moins un chiffre, un symbole, une lettre majuscule et une lettre minuscule.","Please make a selection...":"Sélectionnez une option...","Yes, I have contacted the Campaign Organizer":"Oui, j\'ai contacté l\'organisateur de la cagnotte solidaire.","No, I have not contacted the Campaign Organizer":"Non, je n\'ai pas contacté l\'organisateur de la cagnotte solidaire.","The situation has been misrepresented.":"La situation exposée n\'est pas conforme à la réalité.","The funds were not used as stated on the campaign.":"Les fonds n\'ont pas été utilisés conformément à ce qui était indiqué dans la cagnotte solidaire.","The funds were never delivered to the intended recipient.":"Le bénéficiaire n\'a jamais reçu les fonds récoltés en sa faveur.","I did not authorize this donation.":"Je n\'ai pas autorisé ce don.","I no longer wish to support this campaign.":"Je ne souhaite plus soutenir cette cagnotte solidaire.","… {{- userName}} needs your support for {{- campaignTitle}}":"… {{- userName}} a besoin de votre soutien pour {{- campaignTitle}}","{{- organizerFullName}} and {{- teamMemberFullName}} are organizing this fundraiser to benefit {{- beneficiaryFullName}}.":"{{- organizerFullName}} et {{- teamMemberFullName}} organisent cette collecte de fonds au profit de {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{- teamMemberFullName}} are organizing this fundraiser on behalf of {{- beneficiaryFullName}}.":"{{- organizerFullName}} et {{- teamMemberFullName}} organisent cette collecte de fonds au nom de {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser to benefit {{- beneficiaryFullName}}.":"{{- organizerFullName}} et {{count}} autre personne organisent cette collecte de fonds au profit de {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser to benefit {{- beneficiaryFullName}}.:_:plural":"{{- organizerFullName}} et {{count}} autres personnes organisent cette collecte de fonds au profit de {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser on behalf of {{- beneficiaryFullName}}.":"{{- organizerFullName}} et {{count}} autre personne organisent cette collecte de fonds au nom de {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser on behalf of {{- beneficiaryFullName}}.:_:plural":"{{- organizerFullName}} et {{count}} autres personnes organisent cette collecte de fonds au nom de {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{- teamMemberFullName}} are organizing this fundraiser.":"{{- organizerFullName}} et {{- teamMemberFullName}} organisent cette collecte de fonds.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser.":"{{- organizerFullName}} et {{count}} autre personne organisent cette collecte de fonds.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser.:_:plural":"{{- organizerFullName}} et {{count}} autres personnes organisent cette collecte de fonds.","{{- organizerFullName}} is organizing this fundraiser to benefit {{- beneficiaryFullName}}.":"{{- organizerFullName}} organise cette collecte de fonds au profit de {{- beneficiaryFullName}}.","{{- organizerFullName}} is organizing this fundraiser on behalf of {{- beneficiaryFullName}}.":"{{- organizerFullName}} organise cette collecte de fonds au nom de {{- beneficiaryFullName}}.","{{- organizerFullName}} is organizing this fundraiser.":"{{- organizerFullName}} organise cette collecte de fonds.","This team raised {{raisedAmountFormatted}} from {{count}} other donation.":"Cette équipe a récolté {{raisedAmountFormatted}} grâce à {{count}} autre don.","This team raised {{raisedAmountFormatted}} from {{count}} other donation.:_:plural":"Cette équipe a récolté {{raisedAmountFormatted}} grâce à {{count}} autres dons.","Raised {{amount}} from {{count}} donation":"Total de {{amount}} récolté grâce à {{count}} don","Raised {{amount}} from {{count}} donation:_:plural":"Total de {{amount}} récolté grâce à {{count}} dons","Donations are typically 100% tax deductible in the US.":"En principe, les dons sont entièrement déductibles des impôts aux États-Unis.","Donations are typically tax deductible in Canada.":"En principe, les dons sont déductibles des impôts au Canada.","Donations are typically tax deductible in Australia.":"En principe, les dons sont déductibles des impôts en Australie.","Donations eligible for Gift Aid.":"Dons pouvant profiter du programme Gift Aid.","{{city}}, {{state}}":"{{city}}, {{state}}","Registered nonprofit":"Association à but non lucratif certifiée","text":"texte","Organizer and beneficiary":"Organisateur et bénéficiaire","Fundraising team: {{- name}} ({{count}})":"Équipe de collecte de fonds : {{- name}} ({{count}})","Copy fundraiser link":"Copier le lien vers la collecte de fonds","Share this fundraiser so it can raise up to 5x more.":"Partagez cette collecte de fonds pour récolter jusqu\'à 5 fois plus de dons.","Build momentum for this fundraiser.":"Donnez de l\'élan à cette collecte de fonds.","View donation summary":"Afficher la synthèse des dons","Check out your donation details.":"Consultez les détails relatifs à votre don.","Add a comment":"Ajoutez un commentaire","Add a supportive message with your donation.":"Associez un message de soutien à votre don.","Add a profile photo":"Ajouter une photo de profil","Looks good. Your profile photo has been added.":"C\'est bien parti. Votre photo de profil a été ajoutée.","Let friends and the GoFundMe community know it’s you!":"Faites savoir à vos amis et à la communauté GoFundMe que c\'est vous.","Share on Facebook":"Partager sur Facebook","Tell your Facebook friends about this fundraiser.":"Parlez de cette collecte de fonds à vos amis Facebook.","Join fundraising team":"Rejoindre l\'équipe de collecte de fonds","Help {{organizerName}} raise more funds.":"Aidez {{organizerName}} à collecter plus de fonds.","Thank donors":"Remercier les donateurs","Show appreciation and get more support. Ask donors to share this fundraiser.":"Témoignez votre reconnaissance et mobilisez plus de soutiens. Demandez aux donateurs de partager cette collecte de fonds.","Add a donate button":"Ajouter un bouton Je soutiens","Reach your community on a website or blog.":"Mobilisez votre communauté avec un site web ou un blog.","Donated {{amount}}":"Don(s) versé(s) : {{amount}}","Hi, I’d really appreciate it if you would share or donate to this GoFundMe, {{fundTitle}} {{- shareLink}}":"Bonjour, cela me ferait vraiment plaisir que vous fassiez un don ou que vous partagiez cette campagne GoFundMe : {{fundTitle}} {{- shareLink}}","Captcha challenge failed. Please try again.":"Le test de vérification captcha a échoué. Veuillez réessayer.","You exceeded the maximum number of tries. Please try again later.":"Vous avez dépassé le nombre maximum de tentatives. Veuillez réessayer ultérieurement.","An error occurred. Please try again later.":"Une erreur s\'est produite. Veuillez réessayer ultérieurement.","Sign in to follow this fundraiser":"Connectez-vous pour suivre cette collecte de fonds","Sign in to post your comment":"Connectez-vous pour publier votre commentaire","Reset instructions sent to {{email}}":"Instructions de réinitialisation envoyées à {{email}}","Please check your email & password or please sign in with your Facebook account.":"Vérifiez vos adresse e-mail et mot de passe ou connectez-vous avec votre compte Facebook.","Please check your email & password":"Vérifiez vos adresse e-mail et mot de passe."}},"en_GB":{"apps-campaign":{"Better Business Bureau":"Better Business Bureau","Accredited business":"Licensed business","Created {{dateFormatBasedOnLocal}}":"Created {{dateFormatBasedOnLocal}}","Just now":"Just now","Created {{count}} hour ago":"Created {{count}} hour ago","Created {{count}} hour ago:_:plural":"Created {{count}} hours ago","Created {{count}} day ago":"Created {{count}} day ago","Created {{count}} day ago:_:plural":"Created {{count}} days ago","Thank you for your donation. A receipt has been sent to <1>{{donorEmail}}</1>":"Thank you for your donation. A receipt has been sent to <1>{{donorEmail}}</1>","by":"by","for":"for","Team fundraiser":"Team fundraiser","Link Copied":"Link Copied","Anonymous":"Anonymous","In partnership with<1></1><2>{{partnerName}}</2>":"In partnership with<1></1><2>{{partnerName}}</2>","See all":"See all","This fundraiser is located near you":"This fundraiser is located near you","{{- recentDonorsStr}} person just donated":"{{- recentDonorsStr}} person has just made a donation","{{- recentDonorsStr}} person just donated:_:plural":"{{- recentDonorsStr}} people have just made a donation","This fundraiser is no longer accepting donations. If you are the organizer, beneficiary, team member, or donor,<1></1><2>sign in</2><3></3>to see additional information.":"This fundraiser is no longer accepting donations. If you are the organiser, beneficiary, a team member or donor,<1></1><2>sign in</2><3></3>for further details.","The organizer has currently disabled new donations to this fundraiser.":"The organiser has disabled new donations to this fundraiser at the moment.","This fundraiser has been deactivated by the organizer.":"This fundraiser has been deactivated by the organiser.","Learn more":"Learn more","Copy to clip board":"Copy to clipboard","Fundraiser link copied":"Fundraiser link copied","Copy to clipboard":"Copy to clipboard","Now paste this link into a Facebook post, Messenger, or any Facebook groups you\'re in.":"Now paste this link into a Facebook post, Messenger or any Facebook groups you\'re in.","Copy your fundraiser link and paste it into a Facebook post, Messenger, or any Facebook groups you’re in.":"Copy your fundraiser link and paste it into a Facebook post, Messenger or any Facebook groups you’re in.","Questions about where to share this link?":"Questions about where to share this link?","<0>Tip:</0><1></1>Paste this fundraiser link anywhere.":"<0>Tip:</0><1></1>Paste this fundraiser link anywhere.","Collapse text":"Collapse text","Read more":"Read more","Edit":"Edit","Delete":"Delete","Edited":"Edited","{{name}}<1></1>donated<3></3><4>{{donationAmount}}</4>":"{{name}}<1></1>donated<3></3><4>{{donationAmount}}</4>","{{name}}<1></1>commented":"{{name}}<1></1>commented","Campaign organizer":"Campaign organiser","Beneficiary":"Beneficiary","GoFundMe Guarantee":"GoFundMe Guarantee","Only donations on our platform are protected by the GoFundMe Guarantee.":"Only donations on our platform are protected by the GoFundMe Guarantee.","Donate now":"Donate now","Your donation":"Your donation","Recent donation":"Recent donation","Top donation":"Top donation","First donation":"First donation","Offline":"Offline","Become an early supporter":"Become an early supporter","Become the first supporter":"Become the first supporter","Your donation matters":"Your donation matters","In the rare case something isn’t right, we will work with you to determine if misuse occurred.":"In the unlikely event that something isn’t right, we will work with you to determine if misuse has occurred.","Email":"Email","Embed HTML":"Embed HTML","Messenger":"Messenger","Facebook":"Facebook","<0>We use cookies</0> to enable features and market content. Click “That’s OK” to add cookies. View<2></2><3>privacy policy</3><4></4>or<6></6><7>manage cookies.</7>":"<0>We use cookies</0> to enable features and market content. Click \\"That’s OK\\" to add cookies. View<2></2><3>privacy policy</3><4></4>or<6></6><7>manage cookies.</7>","That\'s OK":"That\'s OK","<0>As stated on the banner, GoFundMe uses cookies to enable features and market content to provide you with an improved experience. We consider these cookies to be non-essential, pursuant to our<1></1><2>privacy policy.</2><3></3>When you click “That’s OK” on the banner, we add these non-essential cookies.</0>":"<0>As stated on the banner, GoFundMe uses cookies to enable features and market content to provide you with an improved experience. We consider these cookies to be non-essential, pursuant to our<1></1><2>privacy policy.</2><3></3>When you click \\"That’s OK\\" on the banner, we add these non-essential cookies.</0>","Cookie Preferences":"Cookie Preferences","Close cookie modal":"Close cookie modal","We value your privacy":"We value your privacy","Here in this Cookie Preferences page, the non-essential cookies category is broken down\\n                            further into functional and marketing, as you can see below. You can change your\\n                            preferences as to both functional and marketing cookies here. When you click “Save” on\\n                            this page, we will add only those non-essential cookies you select.":"Here in this Cookie Preferences page, the non-essential cookies category is broken down further\\n                    into functional and marketing, as you can see below. You can change your preferences as to both functional and marketing cookies here. When you click \\"Save\\" on this page, we will add only\\n                    those non-essential cookies which you select.","Marketing cookies":"Marketing cookies","Enable":"Enable","GoFundMe collects information regarding user navigation to provide sponsored content\\n                            relevant to our products on other sites. Specifically, if you start a fundraiser on\\n                            GoFundMe and you do not publish that fundraiser, GoFundMe may then show a banner ad the\\n                            next time you are on Facebook.":"GoFundMe collects information regarding user navigation to provide sponsored content relevant to our products on other sites. Specifically, if you start a fundraiser on GoFundMe and you do not publish that fundraiser, GoFundMe may then show a banner ad the next time you are on Facebook.","Functional cookies":"Functional cookies","We use data collected with these cookies to improve your experiences on the GoFundMe\\n                            platform, as well as avoiding bugs or testing new features.":"We use data collected with these cookies to improve your experience on the GoFundMe platform, as well as avoiding bugs or testing new features.","Essential cookies":"Essential cookies","Always enabled":"Always enabled","Data is collected by these cookies to offer basic functions, to ensure that the GoFundMe\\n                            Platform functions technically, to keep track of your settings and activities, and for\\n                            security or fraud prevention purposes.":"Data is collected by these cookies to offer basic functions, to ensure that the GoFundMe Platform functions technically, to keep track of your settings and activities and for security or fraud prevention purposes.","Enable all and close":"Enable all and close","Enable all":"Enable all","Save and close":"Save and close","Save":"Save","Show less":"Show less","Show more":"Show more","Previous image":"Previous image","Next image":"Next image","Image {{i}} of {{t}}":"Image {{i}} of {{t}}","Previous 10 images":"Previous 10 images","Next 10 images":"Next 10 images","Close image gallery":"Close image gallery","Delete this image":"Delete this image","Instagram":"Instagram","Copy and paste this link on your Instagram bio":"Copy and paste this link on your Instagram bio","Fundraiser link":"Fundraiser link","Link copied":"Link copied","Something went wrong.":"Something went wrong.","Share on Instagram":"Share on Instagram","Back to sharing":"Back to sharing","LinkedIn":"LinkedIn","Hi, I’d really appreciate it if you would share or donate to this GoFundMe.":"Hi there! I’d really appreciate it if you would share or donate to this GoFundMe.","Your password must have:":"Your password must have:","At least 12 characters":"At least 12 characters","1 uppercase letter":"1 upper-case letter","1 lowercase letter":"1 lower-case letter","1 number":"1 number","1 symbol":"1 symbol","Print Poster":"Print Poster","Print":"Print","{{raisedAmountString}}<1></1><2>{{sameCurrencyCode}} raised</2>":"{{raisedAmountString}}<1></1><2>{{sameCurrencyCode}} raised</2>","{{raisedAmountString}}<1></1><2>{{sameCurrencyCode}} raised of {{goalAmountNBSP}} goal</2>":"{{raisedAmountString}}<1></1><2>{{sameCurrencyCode}} raised of {{goalAmountNBSP}} goal</2>","{{goalAmountNBSP}}<1></1><2>{{sameCurrencyCode}} goal</2>":"{{goalAmountNBSP}}<1></1><2>{{sameCurrencyCode}} goal</2>","share":"share","Share as much as possible":"Share as much as possible","Try using all sharing options. Telling people about your fundraiser is the only way to start raising donations.":"Try using all sharing options. Telling people about your fundraiser is the only way to start raising donations.","Text":"Text","donor":"donor","donors":"donors","shares":"shares","follower":"follower","followers":"followers","Fundraiser Stats":"Fundraiser Stats","Share":"Share","By continuing, you agree with GoFundMe<1></1><2>terms</2><3></3>and<5></5><6>privacy policy</6>":"By continuing, you agree with GoFundMe\'s<1></1><2>terms</2><3></3>and<5></5><6>privacy policy</6>","Preview email":"Preview email","Twitter":"Twitter","{{article}} by {{- authorName}}":"{{article}} by {{- authorName}}","See older updates":"See older updates","WhatsApp":"WhatsApp","Your donation is made to PayPal Giving Fund Australia (ABN 65 105 950 945), a Public Ancillary Fund and a charity registered with the Australian Charities and Not-for-profits Commission, subject to its<1></1><2>terms</2>.":"Your donation is made to PayPal Giving Fund Australia (ABN 65 105 950 945), a Public Ancillary Fund and a charity registered with the Australian Charities and Not-for-profits Commission, subject to its<1></1><2>terms</2>.","While GoFundMe does not have a platform fee, PayPal Giving Fund Australia receives your donation after deduction of transaction<1></1><2>fees</2><3></3>and will grant funds to your recommended charity on a monthly basis.*":"Although GoFundMe does not charge a platform fee, PayPal Giving Fund Australia receives your donation after transaction<1></1><2>fees</2><3></3>have been deducted and will transfer funds to your chosen charity on a monthly basis.*","*If, after reasonable efforts, PayPal Giving Fund Australia cannot deliver donations to this<1></1>charity, it will grant funds to another charity per PayPal Giving Fund Australia\'s<3></3><4>policies</4>.":"*If, after reasonable efforts have been made, PayPal Giving Fund Australia cannot deliver donations to this<1></1>charity, it will grant funds to another charity per PayPal Giving Fund Australia\'s<3></3><4>policies</4>.","Donations raised benefit:":"Funds raised will benefit:","How charity fundraisers work":"How charity fundraisers work","Your donation is made to PayPal Giving Fund Canada, a charity registered with the Canada Revenue Agency (No. 812867752RR0001), subject to its<1></1><2>terms</2>.":"Your donation is made to PayPal Giving Fund Canada, a charity registered with the Canada Revenue Agency (No. 812867752RR0001), subject to its<1></1><2>terms</2>.","While GoFundMe does not have a platform fee, PayPal Giving Fund Canada receives your donation after deduction of transaction<1></1><2>fees</2><3></3>and will grant funds to your recommended charity on a monthly basis.*":"Although GoFundMe does not charge a platform fee, PayPal Giving Fund Canada receives your donation after transaction<1></1><2>fees</2><3></3>have been deducted and will transfer the funds to your chosen charity on a monthly basis.*","*If, after reasonable efforts, PayPal Giving Fund Canada cannot deliver donations to this<1></1>charity, it will grant funds to another charity per PayPal Giving Fund Canada\'s<3></3><4>policies</4>.":"*If, after reasonable efforts have been made, PayPal Giving Fund Canada cannot deliver donations to this<1></1>charity, it will grant funds to another charity per PayPal Giving Fund Canada\'s<3></3><4>policies</4>.","Support":"Support","Contribute":"Contribute","Buy me a coffee":"Buy me a coffee","Show appreciation":"Show appreciation","Start a GoFundMe":"Start a GoFundMe","Support this cause":"Support this cause","{{- userName}} needs your help today! {{- campaignTitle}}":"{{- userName}} needs your help today! {{- campaignTitle}}","Fundraiser for {{- userName}} by {{- campaignOrganizer}} : {{- campaignTitle}}":"Fundraiser for {{- userName}} by {{- campaignOrganizer}} : {{- campaignTitle}}","Fundraiser by {{- userName}} : {{- campaignTitle}}":"Fundraiser by {{- userName}} : {{- campaignTitle}}","{{- campaignTitle}}, organized by {{- campaignOrganizer}}":"{{- campaignTitle}}, organised by {{- campaignOrganizer}}","See more":"See more","See top donations":"See top donations","Continue reading":"Continue reading","Updates":"Updates","Image {{imageIndex}} of {{totalImages}}. Click to view all images":"Image {{imageIndex}} of {{totalImages}}. Click to view all images","Image {{imageIndex}} of {{totalImages}}":"Image {{imageIndex}} of {{totalImages}}","Photo limit reached":"Photo limit reached","Add more photos":"Add more photos","Add photos to comment":"Add photos to comment","I donated because...":"I donated because...","Add this public comment to the fundraiser.":"Add this public comment to the fundraiser.","Your donation will be displayed as Anonymous, and this comment will not show up publicly on the campaign.":"Your donation will be displayed as Anonymous and this comment will not be displayed publicly on the campaign.","Post comment":"Post comment","Please choose a maximum of 10 photos for your comment.":"Please choose a maximum of 10 photos for your comment.","Please donate and share words of encouragement.":"Please donate and share words of encouragement.","Continue":"Continue","Comments":"Comments","Please select one.":"Please select one.","Yes, I have contacted the Campaign Organizer.":"Yes, I have contacted the Campaign Organiser.","No, I have not contacted the Campaign Organizer.":"No, I have not contacted the Campaign Organiser.","They are a family member":"They are a family member","They are a friend or acquaintance":"They are a friend or acquaintance","I do not know the organizer of this campaign":"I do not know the organiser of this campaign","Your Name":"Your Name","Your Phone Number":"Your Phone Number","Required in case our team needs to contact you for further details.":"Required in case our team needs to contact you for further details.","Your Email":"Your Email","Confirm Email":"Confirm Email","Page URL":"Page URL","Please enter the URL in this format: https://www.gofundme.com/f/example-campaign":"Please enter the URL in this format: https://www.gofundme.com/f/example-campaign","I don\'t know the page URL":"I do not know the page URL","Have you already contacted the organizer of this campaign?":"Have you already contacted the organiser of this campaign?","How do you know the organizer of this campaign?":"How do you know the organiser of this campaign?","Please explain your relationship to the Campaign Organizer.":"Please explain your relationship to the Campaign Organiser.","How much money did you receive from the campaign organizer?":"How much money did you receive from the campaign organiser?","Why do you believe this person will not deliver the funds to you?":"Why do you believe this person will not deliver the funds to you?","Please attach a copy of a government issued photo ID":"Please attach a copy of a official photo ID","Please upload only JPEG, GIF, PNG or PDF files. The file size must be less than 5MB.":"Please upload only JPEG, GIF, PNG or PDF files. The file size must be less than 5MB.","Upload any evidence you may have":"Upload any evidence you may have","Send Email":"Send Email","Message Subject":"Message Subject","Your Message":"Your Message","I am requesting a refund because...":"I am requesting a refund because...","Describe your concerns about how the funds are being used.":"Describe your concerns about how the funds are being used.","40 characters minimum":"40 characters minimum","Yes, I know the Campaign Organizer.":"Yes, I know the Campaign Organiser.","No, I do not know the Campaign Organizer":"No, I do not know the campaign organiser","I am a beneficiary.":"I am a beneficiary.","I am a donor.":"I am a donor.","I am an individual concerned about this campaign.":"I am an individual concerned about this campaign.","I am involved in a legal dispute with the Campaign Organizer.":"I am involved in a legal dispute with the Campaign Organiser.","This campaign includes libelous statements.":"This campaign includes libellous statements.","Campaign includes factually incorrect information.":"Campaign includes factually incorrect information.","Campaign Organizer has not used funds for the stated purpose.":"Campaign organiser has not used funds for the stated purpose.","They are impersonating someone or have copied another campaign.":"They are impersonating someone or have copied another campaign.","Please explain your concern(s) in detail.":"Please explain your concern(s) in detail.","Which statements are libelous and why?":"Which statements are libellous and why?","Which statements are incorrect and why?":"Which statements are incorrect and why?","How have the campaign’s donations been spent?":"How have the campaign’s donations been spent?","What is the original campaign link/title?":"What is the original campaign link/title?","Please describe your concerns":"Please describe your concerns","How do you know the campaign organizer?":"How do you know the campaign organiser?","How are you connected to the campaign?":"What is your connection to the campaign?","How much money is being withheld and why?":"How much money is being withheld and why?","Why are you concerned about your donation?":"Why are you concerned about your donation?","Please describe your concerns.":"Please describe your concerns.","Do you know the Campaign Organizer?":"Do you know the Campaign Organiser?","Which best describes you?":"Which best describes you?","Publication":"Publication","Self-Service":"Self-Service","Please select an option which best describes you to see relevant information.":"Please select an option which best describes you to see relevant information.","For customized help, please sign in.":"For customised help, please sign in.","Sign In":"Sign In","Top Answers":"Top Answers","How do I get a refund?":"How do I get a refund?","How do I withdraw money?":"How do I withdraw money?","Is my country supported?":"Is my country supported?","Can I withdraw money?":"Can I withdraw money?","How do I reset my password?":"How do I reset my password?","How do I invite someone to withdraw?":"How do I invite someone to withdraw?","I can\'t withdraw my funds, now what?":"I can\'t withdraw my funds – what should I do now?","How do your fees work?":"How do your fees work?","What about taxes and stuff?":"What about taxes and stuff?","GoFundMe homepage":"GoFundMe homepage","Choose your language":"Choose your language","How GoFundMe works":"How GoFundMe works","Common questions":"Common questions","Success stories":"Success stories","Supported countries":"Supported countries","Team fundraising":"Team fundraising","Donate button":"Donate button","Support COVID-19 fundraisers":"Support Covid-19 fundraisers","Why GoFundMe":"Why GoFundMe","Medical":"Medical","Emergency":"Emergency","Memorial":"Memorial","Education":"Education","Nonprofit":"Charity","Fundraise for":"Fundraise for","Help center":"Help centre","Blog":"Blog","GoFundMe Stories":"GoFundMe Stories","Press center":"Press centre","Careers":"Careers","About":"About","Resources":"Resources","Terms":"Terms","Privacy":"Privacy","Legal":"Legal","Do Not Sell My Personal Information":"Do Not Sell My Personal Information","Hide":"Hide","Show":"Show","Hide guidance cards":"Hide guidance cards","Show guidance cards":"Show guidance cards","Previous card":"Previous card","Next card":"Next card","You are donating to<1></1><2>PayPal Giving Fund Ireland</2>, a registered charity (No. 20205692), which will email you a receipt for your donation.":"You are donating to<1></1><2>PayPal Giving Fund Ireland</2>, a registered charity (No. 20205692), which will email you a receipt for your donation.","*In rare cases, a charity may cease to meet PayPal Giving Fund Ireland’s legal or other eligibility requirements to receive funds or may not accept the funds. In such cases, PayPal Giving Fund Ireland will<1></1><2>reassign the funds</2><3></3>to another charity and (wherever possible) seek a new recommendation from you.":"*In rare cases, a charity may cease to meet PayPal Giving Fund Ireland’s legal or other eligibility requirements to receive funds or may not accept the funds. In such cases, PayPal Giving Fund Ireland will<1></1><2>reassign the funds</2><3></3>to another charity and (whenever possible) seek a new recommendation from you.","The charity will typically receive the funds from PayPal Giving Fund within 15-45 days (90 days if the charity has not enrolled).*":"The charity will typically receive the funds from PayPal Giving Fund within 15-45 days (90 days if the charity has not enrolled).*","Open share modal":"Open share modal","Donate":"Donate","Sign in":"Sign in","Sign out":"Sign out","Donations you\'ve made":"Donations you\'ve made","Account settings":"Account settings","Your fundraisers":"Your fundraisers","Open navigation menu":"Open navigation menu","Close navigation menu":"Close navigation menu","My campaigns":"My campaigns","Close Modal":"Close Modal","Start":"Start","Don\'t have an account? ":"Do not have an account? ","Sign up":"Sign up","Enter the email address associated with your account, and we\'ll email you a link to reset your password":"Enter the email address associated with your account and we\'ll email you a link to reset your password","Email address":"Email address","Request new password":"Request new password","Don\'t have an account?<1></1><2>Sign up</2>":"Don\'t have an account?<1></1><2>Sign up</2>","Forgot your password?":"Forgot your password?","Password":"Password","Sign in to GoFundMe":"Sign in to GoFundMe","Already have an account?<1></1><2>Sign in</2>":"Already have an account?<1></1><2>Sign in</2>","Please<1></1><2>sign in</2><3></3>to access your account.":"Please<1></1><2>sign in</2><3></3>to access your account.","First Name":"First Name","Last Name":"Last Name","Confirm email address":"Confirm email address","Set password":"Set password","We will never post without your permission":"We will never post without your permission","Continue with Facebook":"Continue with Facebook","or":"or","Use my email address":"Use my email address","You are donating to<1></1><2>PayPal Giving Fund</2><3></3>UK, a registered charity (No. 1110538), which will email you a receipt for your donation and claim Gift Aid where eligible.":"You are donating to<1></1><2>PayPal Giving Fund</2><3></3>UK, a registered charity (No. 1110538), which will email you a receipt for your donation and claim Gift Aid if eligible.","<0></0>*In very limited cases, a recommended charity may cease to meet PayPal Giving Fund\'s legal or other eligibility<2></2><3>requirements</3><4></4>. In such cases, PayPal Giving Fund will reassign the funds to a similar charity, and (wherever possible) seek a new recommendation from donors.":"<0></0>*In very limited cases, a recommended charity may cease to meet PayPal Giving Fund\'s legal or other eligibility<2></2><3>requirements</3><4></4>. In such cases, PayPal Giving Fund will reassign the funds to a similar charity and (whenever possible) ask donors for another recommendation.","The charity will typically receive the funds from PayPal Giving Fund within 15-45 days of your donation if the charity has enrolled (or 90 days if the charity has not yet enrolled). Unlike other platforms, 100% of any Gift Aid will go to the charity as well.":"The charity will typically receive the funds from PayPal Giving Fund within 15–45 days of your donation if the charity has enrolled (or 90 days if the charity has not yet enrolled). Unlike other platforms, 100% of any Gift Aid will go to the charity as well.","PayPal Giving Fund will grant your donation to {{charityName}} within 15-45 days (Or 90 days if the charity has not yet enrolled)*.":"PayPal Giving Fund will deliver your donation to {{charityName}} within 15-45 days (Or 90 days if the charity has not yet enrolled)*.","*If, after reasonable efforts have been made, PayPal Giving Fund cannot grant the funds to this charity, they will contact you before reassigning the funds in accordance with<1></1><2>PayPal Giving Fund\'s Policies</2>.":"*If, after reasonable efforts have been made, PayPal Giving Fund cannot deliver the funds to this charity, they will contact you before reassigning the funds in accordance with<1></1><2>PayPal Giving Fund\'s Policies</2>.","How non-profit fundraisers work":"How charity fundraisers work","Donations are typically 100% tax deductible in the US. Your donation is made to PayPal Giving Fund (a 501(c)(3) charitable organization) to benefit your chosen charity.":"Donations are typically 100% tax-deductible in the US. Your donation is made to PayPal Giving Fund (a 501(c)(3) charitable organisation) in aid of your chosen charity.","Fundraiser updates ({{totalUpdates}})":"Fundraiser updates ({{totalUpdates}})","Fundraiser updates":"Fundraiser updates","Close fundraiser updates modal":"Close fundraiser updates modal","Thanks for donating":"Thanks for your donation","Boost this fundraiser":"Boost this fundraiser","Be the first to help":"Be the first to help","Your early support will go a long way and help inspire others to donate.":"Your early support will go a long way and help inspire others to donate.","Report fundraiser":"Report fundraiser","See top":"See top","Donations":"Donations","Contact Us - Answer Found":"Contact Us - Answer Found","Answer Found!":"Answer Found!","Thanks very much!":"Thanks very much!","If you ever need some extra help, the GoFundMe Team is standing by!":"If you ever need some extra help, the GoFundMe Team is standing by!","Return to Help Center":"Return to Help Centre","Contact Us - Message Sent!":"Contact Us – Message Sent!","Message Sent":"Message Sent","Thank you for your patience":"Thank you for your patience","We\'re sorry, but that campaign cannot be found. Please check the link URL and try again.":"Sorry, we can\'t find that campaign. Please check the link URL and try again.","Page Not Found":"Page Not Found","Home":"Home","Campaign Not Found":"Campaign Not Found","Search gofundme.com for":"Search gofundme.com for","Show your support by going to this link":"Show your support by going to this link","Pagination navigation":"Pagination navigation","Previous page":"Previous page","Previous":"Previous","Next page":"Next page","Next":"Next","Page {{page}} of {{nbPages}}":"Page {{page}} of {{nbPages}}","Search in progress":"Search in progress","Fundraisers for \\"{{query}}\\" in all locations":"Fundraisers for \\"{{query}}\\" in all locations","No results found for \\"{{query}}\\" in all locations":"No results found for \\"{{query}}\\" in all locations","Search results for {{- query}}":"Search results for {{- query}}","GoFundMe: {{- searchQuery}}":"GoFundMe: {{- searchQuery}}","The leader in online fundraising":"The leader in online fundraising","We\'re sorry. Something went wrong. Please wait one minute and try again.":"Sorry. Something went wrong. Please wait a minute and try again.","Unknown Error":"Unknown Error","Join this list. <1>Donate now.</1>":"Join this list. <1>Donate now.</1>","Top":"Top","Donations ({{totalDonations}})":"Donations ({{totalDonations}})","Close all donations modal":"Close all donations modal","Close":"Close","<0>What is this? <1></1><2>Learn more</2></0>":"<0>What is this? <1></1><2>Learn more</2></0>","Large":"Large","Medium":"Medium","Small (Button only)":"Small (Button only)","Copy and paste the following embed code:":"Copy and paste the following embed code:","Copy HTML code":"Copy HTML code","Copied!":"Copied!","Something went wrong. Please select the code block to manually copy it.":"Something went wrong. Please select the code block to copy it manually.","Preview":"Preview","Select the button text":"Select the button text","Have you seen \\"{{- title}}\\"?":"Have you seen \\"{{- title}}\\"?","Hello \\n \\n I thought you might be interested in supporting this GoFundMe, {{- shareLink}}. \\n \\n Even a small donation could help {{- name}} reach their fundraising goal. And if you can\'t make a donation, it would be great if you could share the fundraiser to help spread the word. \\n \\n Thanks for taking a look!":"Hello \\n \\n I thought you might be interested in supporting this GoFundMe, {{- shareLink}}. \\n \\n Even a small donation could help {{- name}} reach their fundraising goal. And if you can\'t make a donation, it would be great if you could share the fundraiser to help spread the word. \\n \\n Thanks for having a look!","Hi,\\n\\nI\'d really appreciate it if you would share or donate to this GoFundMe.\\n\\n*{{- fundTitle}}*\\n\\n{{- description}}\\n\\nRead more here {{- fundUrl}}\\n\\nForward this message to your contacts to help this campaign reach its goal!":"Hi, I\'d really appreciate it if you could share or donate to this GoFundMe campaign.*{{- fundTitle}}*\\n\\n{{- description}}\\n\\nRead more here {{- fundUrl}}\\n\\nForward this message to your contacts to help this campaign reach its target!","Hi, I\'d really appreciate it if you would share or donate to this GoFundMe, {{- shareLink}}":"Hi there, I\'d really appreciate it if you could share or donate to this GoFundMe, {{- shareLink}}","Help by sharing":"Help by sharing","Fundraisers shared on social networks raise up to 5x more":"Fundraisers shared on social networks raise up to 5 times more!","Copy":"Copy","Copy link":"Copy link","Back":"Back","Top Donations":"Top Donations","See all donations":"See all donations","All":"All","Be a top donor for {{- beneOrOrganizerName}} with {{- averageTopDonation}} or more.":"Be a top donor for {{- beneOrOrganizerName}} with {{- averageTopDonation}} or more.","<0>Donating outside of GoFundMe</0><1>Donations on other platforms are not protected by the GoFundMe Guarantee. In the rare case that something isn’t right on GoFundMe, we work with you to determine if misuse occurred.<1></1><2>Learn more</2></1><2>Donate now</2>":"<0>Donating outside of GoFundMe</0><1>Donations on other platforms are not protected by the GoFundMe Guarantee. In the rare event that something isn’t right on GoFundMe, we will work with you to determine if misuse occurred.<1></1><2>Learn more</2></1><2>Donate now</2>","Close modal":"Close modal","Suggestions":"Suggestions","Make a Beneficiary Claim":"Make a Beneficiary Claim","Make a Beneficiary Claim | GoFundMe Support":"Make a Beneficiary Claim | GoFundMe Support","Contact Us":"Contact Us","Make a Donor Claim":"Make a Donor Claim","Make a Donor Claim | GoFundMe Support":"Make a Donor Claim | GoFundMe Support","Report a Fundraiser":"Report a fundraiser","Report a Fundraiser | GoFundMe Support":"Report a Fundraiser | GoFundMe Support","Press Contact Form":"Press Contact Form","Press Contact Form | GoFundMe Support":"Press Contact Form | GoFundMe Support","Send Message":"Send Message","Contact":"Contact","Write {{firstName}} a message":"Write a message to {{firstName}}","Organizer":"Organiser","Cancel":"Cancel","2. Use your donation receipt to<1></1><2>edit your donation comment</2><3></3>or<5></5><6>change your name on a donation</6>.":"2. Use your donation receipt to<1></1><2>edit your donation comment</2><3></3>or<5></5><6>change your name on a donation</6>.","If you do not remember your GoFundMe password, please<1></1><2>click here to request a new password</2>.":"If you do not remember your GoFundMe password, please<1></1><2>click here to request a new password</2>.","If you received an<1></1><2>unexpected refund</2><3></3>for your donation it could be for any of the following reasons:":"If you received an<1></1><2>unexpected refund</2><3></3>for your donation it could be for any of the following reasons:","Edit My Comment":"Edit My Comment","Edit My Name":"Edit My Name","Get Donation Receipt":"Get Donation Receipt","Refund All Donations":"Refund All Donations","Update Donation Anonymity":"Update Donation Anonymity","We can help you with that! Confirm the email address you used to donate.":"We can help you with that! Please confirm the email address that you used to make your donation.","Editing the information on a donation is quick and easy, and can be done from your donation receipt or through your GoFundMe account.":"Editing the information on a donation is quick and easy and can be done from your donation receipt or through your GoFundMe account.","Actions you can take on your own:":"Actions you can take on your own:","1. Request a new donation receipt by entering your donation email address in the field below.":"1. Request a new donation receipt by entering your donation email address in the field below.","We can help you with that! If you have a personal fundraiser, please enter the email address you used to create your fundraiser.":"We can help you with that! If you have a personal fundraiser, please enter the email address you used to create your fundraiser.","If you have a Certified Charity fundraiser, our Customer Happiness Team can help you with that! Please select an option below in \\"Still need help?\\" and include the link to the fundraiser you\'d like to refund.":"If you have a Certified Charity fundraiser, our Customer Support Team can help you with that! Please select an option below in \\"Still need help?\\" and include the link to the fundraiser you\'d like to refund.","Additional Information:":"Additional Information:","Organizer deactivated the fundraiser":"The organiser deactivated the fundraiser","Our payment processor wasn\'t able to verify the donation":"Our payment processor wasn\'t able to verify the donation","Organizer did not verify their account or withdraw funds within required deadlines":"The organiser did not verify their account or withdraw funds within required deadlines","The donation was charged back by the donor":"The donation was charged back by the donor","The donation was made by the organizer or beneficiary":"The donation was made by the organiser or beneficiary","Please visit the fundraiser to view any updates that the organizer might have posted in regards to refunds, click \'Contact\' beneath the organizer\'s name on their fundraiser to email them with any questions, or reach out to our team if you have questions on how you may be able to still support the cause.":"Please visit the fundraiser to view any updates that the organiser might have posted about refunds, click \'Contact\' beneath the organiser\'s name on their fundraiser to email them with any questions, or contact our team if you have questions about how you may be able to still support the cause.","Help Center":"Help Centre","Please read below":"Please read below","Your Email Address":"Your Email Address","My question was answered":"My question was answered","Still need help?":"Still need help?","Chat now":"Chat now","Chat":"Chat","Send email":"Send email","Donations paused":"Donations paused","Our team has contacted the organizer with a solution, and donations will resume once the issue is resolved.":"Our team has contacted the organiser with a solution and donations will resume once the issue is resolved.","How can I help?":"How can I help?","Please reach out to the organizer and ask them to sign in to GoFundMe and check their account to resolve the issue.":"Please contact the organiser and ask them to sign in to GoFundMe and check their account to resolve the issue.","Something went wrong. We’re working on it, please try again later or<1></1><2>contact us</2>.":"Something went wrong. We’re working on it, please try again later or<1></1><2>contact us</2>.","To include a comment with your donation, you must add text and/or upload a photo.":"To include a comment with your donation, you must add text and/or upload a photo.","{{fileName}}: Please choose a jpeg, jpg, gif, or png file type, and ensure it is smaller than 2048 kb.":"{{fileName}}: Please choose a jpeg, jpg, gif or png file type and make sure that it\'s smaller than 2048 KB.","{{fileName}}: Please try again later.":"{{fileName}}: Please try again later.","Show more Support":"Show more Support","Return to campaign":"Return to campaign","Back to previous page":"Back to previous page","Hello \\n \\n I just donated to this GoFundMe, {{- shareLink}}.  Would you be interested in supporting it too? \\n \\n Even a small donation could help {{- name}} reach their fundraising goal. And if you can\'t make a donation, it would be great if you could share the fundraiser to help spread the word. \\n \\n Thanks for taking a look!":"Hello \\n \\n I\'ve just made a donation to this GoFundMe, {{- shareLink}}.  Would you be interested in supporting it too? \\n \\n Even a small donation would help {{- name}} reach their fundraising target. And if you can\'t make a donation, it would be great if you could share the fundraiser to help spread the word. \\n \\n Thanks for having a look!","Hi, I’d really appreciate it if you would share or donate to this GoFundMe, {{- fundTitle}} {{- shareLink}}":"Hi there! I’d really appreciate it if you would share or donate to this GoFundMe, {{- fundTitle}} {{- shareLink}}","Hi, I just donated to this GoFundMe and would appreciate it if you would share or donate too. {{- shareLink}}":"Hi, I\'ve just made a donation to this GoFundMe and would appreciate it if you would share or donate too. {{- shareLink}}","Something went wrong. Please select the link and manually copy.":"Something went wrong. Please copy and paste the link manually.","Now help spread the word":"Now help spread the word","By sharing this fundraiser, you increase their chance of success by 5x.":"By sharing this fundraiser, you increase their chance of success by 5x.","Finished sharing?":"Finished sharing?","Sign up to post your comment":"Sign up to post your comment","Sign up to follow this fundraiser":"Sign up to follow this fundraiser","Fundraising team ({{count}})":"Fundraising team ({{count}})","Contact us | GoFundMe Support":"Contact us | GoFundMe Support","GoFundMe will always respond to your requests as quickly as possible.":"GoFundMe will always respond to your requests as quickly as possible.","Donor protection guarantee":"Donor protection guarantee","GoFundMe has the first and only guarantee in the industry.":"GoFundMe has the first and only guarantee in the industry.","Simple setup":"Simple setup","You can personalize and share your GoFundMe in just a few minutes.":"You can personalise and share your GoFundMe in just a few minutes.","0% platform fee":"0% platform fee","With a 0% platform fee, you get to keep even more of your money.":"With a 0% platform fee, you get to keep even more of your money.","Mobile app":"Mobile app","The GoFundMe app makes it easy to launch and manage your campaign on the go.":"The GoFundMe app makes it easy to launch and manage your campaign on the go.","Social reach":"Social reach","Harness the power of social media to spread your story and get more support.":"Harness the power of social media to spread your story and get more support.","24/7 expert advice":"24/7 expert advice","Our best in class Customer Happiness agents will answer your questions, day or night.":"Our expert Customer Support agents will answer your questions, day or night.","Fundraisers":"Fundraisers","Discover":"Discover","Charity":"Charity","User name":"Username","What is crowdfunding?":"What is crowdfunding?","How it works":"How it works","Fundraising tips":"Fundraising tips","Plan your fundraiser":"Plan your fundraiser","Travel & Adventure":"Travel & Adventure","Medical, Illness & Healing":"Medical, Illness & Healing","Missions, Faith & Church":"Missions, Faith & Church","Non-Profits & Charities":"Non-Profits & Charities","Weddings & Honeymoons":"Weddings & Honeymoons","Other":"Other","Sports, Teams & Clubs":"Sports, Teams & Clubs","Education & Learning":"Education & Learning","Volunteer & Service":"Volunteer & Service","Competitions & Pageants":"Competitions & Pageants","Accidents & Emergencies":"Accidents & Emergencies","Dreams, Hopes & Wishes":"Dreams, Hopes & Wishes","Animals & Pets":"Animals & Pets","Environment":"Environment","Rent, Food & Monthly Bills":"Rent, Food & Monthly Bills","Birthday Pots":"Birthday Pots","Babies, Kids & Family":"Babies, Children & Family","Business & Entrepreneurs":"Business & Entrepreneurs","Celebrations & Events":"Celebrations & Events","Community & Neighbors":"Community & Neighbours","Creative Arts, Music & Film":"Creative Arts, Music & Film","Funerals & Memorials":"Funerals & Memorials","#1 fundraising platform":"No.1 fundraising platform","More people start fundraisers on GoFundMe than on any other platform.":"More people start fundraisers on GoFundMe than on any other platform.","Expert advice, 24/7":"Expert advice, 24/7","Contact us with your questions and we’ll answer, day or night.":"Contact us with your questions and we’ll answer, day or night!","Team member":"Team member","Sorry, no account found":"Sorry, no account found","Your message to {{coFirstName}} successfully sent.":"Your message to {{coFirstName}} was sent successfully.","Your message to {{coFirstName}} failed to send. Please try again later.":"Your message to {{coFirstName}} failed to send. Please try again later.","[email redacted]":"[email redacted]","[phone redacted]":"[phone redacted]","Please enter your name.":"Please enter your name.","Please enter a shorter name.":"Please enter a shorter name.","Please enter your email address.":"Please enter your email address.","Please enter a shorter email address.":"Please enter a shorter email address.","Please confirm your email address.":"Please confirm your email address.","Emails do not match.":"Emails do not match.","Please complete the reCAPTCHA.":"Please complete the reCAPTCHA.","Please enter a subject line":"Please enter a subject line","Please enter your message":"Please enter your message","Please enter a longer message.":"Please enter a longer message","Please enter a shorter message.":"Please enter a shorter message.","Please enter a valid phone number":"Please enter a valid phone number","Please enter a campaign URL":"Please enter a campaign URL","Please specify how you know the Campaign Organizer.":"Please tell us how you know the campaign organiser.","Please specify a description.":"Please give a description.","Please select an option.":"Please select an option.","Please enter a description.":"Please enter a description.","Please enter a longer description.":"Please enter a longer description.","Please enter your concerns.":"Please describe your problem.","Please enter a publication name":"Please enter a publication name","Please log in":"Please log in","The email entered does not match your account\'s email":"The email entered does not match your account email address","Unexpected error":"Unexpected error","Please enter your name":"Please enter your name","Please enter your email address":"Please enter your email address","Please enter a valid email address.":"Please enter a valid email address.","Today":"Today","Yesterday":"Yesterday","[redacted]":"[redacted]","Please enter your password":"Please enter your password","Please enter your first name":"Please enter your first name","Please enter a shorter first name.":"Please enter a shorter first name.","Please enter your last name":"Please enter your last name","Please enter a shorter last name.":"Please enter a shorter last name.","Your email address does not match.":"Your email address does not match.","Please enter a password.":"Please enter a password.","Passwords must be at least twelve characters long.":"Passwords must be at least twelve characters long.","You have exceeded the maximum amount of characters.":"You have exceeded the maximum amount of characters.","Passwords must contain at least one number, symbol, uppercase letter, and lowercase letter.":"Passwords must contain at least one number, symbol, upper-case letter, and lower-case letter.","Please make a selection...":"Please make a selection...","Yes, I have contacted the Campaign Organizer":"Yes, I have contacted the Campaign Organiser","No, I have not contacted the Campaign Organizer":"No, I haven\'t contacted the Campaign Organiser","The situation has been misrepresented.":"The situation has been misrepresented.","The funds were not used as stated on the campaign.":"The funds were not used as stated on the campaign.","The funds were never delivered to the intended recipient.":"The funds were never delivered to the intended recipient.","I did not authorize this donation.":"I did not authorise this donation.","I no longer wish to support this campaign.":"I no longer wish to support this campaign.","… {{- userName}} needs your support for {{- campaignTitle}}":"… {{- userName}} needs your support for {{- campaignTitle}}","{{- organizerFullName}} and {{- teamMemberFullName}} are organizing this fundraiser to benefit {{- beneficiaryFullName}}.":"{{- organizerFullName}} and {{- teamMemberFullName}} are organising this fundraiser on behalf of {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{- teamMemberFullName}} are organizing this fundraiser on behalf of {{- beneficiaryFullName}}.":"{{- organizerFullName}} and {{- teamMemberFullName}} are organising this fundraiser in aid of {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser to benefit {{- beneficiaryFullName}}.":"{{- organizerFullName}} and {{count}} other are organising this fundraiser on behalf of {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser to benefit {{- beneficiaryFullName}}.:_:plural":"{{- organizerFullName}} and {{count}} others are organising this fundraiser on behalf of {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser on behalf of {{- beneficiaryFullName}}.":"{{- organizerFullName}} and {{count}} other are organising this fundraiser in aid of {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser on behalf of {{- beneficiaryFullName}}.:_:plural":"{{- organizerFullName}} and {{count}} others are organising this fundraiser in aid of {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{- teamMemberFullName}} are organizing this fundraiser.":"{{- organizerFullName}} and {{- teamMemberFullName}} are organising this fundraiser.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser.":"{{- organizerFullName}} and {{count}} other are organising this fundraiser.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser.:_:plural":"{{- organizerFullName}} and {{count}} others are organising this fundraiser.","{{- organizerFullName}} is organizing this fundraiser to benefit {{- beneficiaryFullName}}.":"{{- organizerFullName}} is organising this fundraiser on behalf of {{- beneficiaryFullName}}.","{{- organizerFullName}} is organizing this fundraiser on behalf of {{- beneficiaryFullName}}.":"{{- organizerFullName}} is organising this fundraising appeal on behalf of {{- beneficiaryFullName}}.","{{- organizerFullName}} is organizing this fundraiser.":"{{- organizerFullName}} is organising this fundraiser.","This team raised {{raisedAmountFormatted}} from {{count}} other donation.":"This team has raised {{raisedAmountFormatted}} from {{count}} other donation.","This team raised {{raisedAmountFormatted}} from {{count}} other donation.:_:plural":"This team has raised {{raisedAmountFormatted}} from {{count}} other donations.","Raised {{amount}} from {{count}} donation":"Raised {{amount}} from {{count}} donation","Raised {{amount}} from {{count}} donation:_:plural":"Raised {{amount}} from {{count}} donations","Donations are typically 100% tax deductible in the US.":"Donations are typically 100% tax-deductible in the US.","Donations are typically tax deductible in Canada.":"Donations are typically tax deductible in Canada.","Donations are typically tax deductible in Australia.":"Donations are typically tax deductible in Australia.","Donations eligible for Gift Aid.":"Donations eligible for Gift Aid.","{{city}}, {{state}}":"{{city}}, {{state}}","Registered nonprofit":"Registered charity","text":"text","Organizer and beneficiary":"Organiser and beneficiary","Fundraising team: {{- name}} ({{count}})":"Fundraising team: {{- name}} ({{count}})","Copy fundraiser link":"Copy fundraiser link","Share this fundraiser so it can raise up to 5x more.":"Share this fundraiser so it can raise up to 5x more.","Build momentum for this fundraiser.":"Build momentum for this fundraiser.","View donation summary":"View donation summary","Check out your donation details.":"View your donation details.","Add a comment":"Add a comment","Add a supportive message with your donation.":"Add a supportive message with your donation.","Add a profile photo":"Add a profile photo","Looks good. Your profile photo has been added.":"Looks good. Your profile photo has been added.","Let friends and the GoFundMe community know it’s you!":"Let friends and the GoFundMe community know it’s you!","Share on Facebook":"Share on Facebook","Tell your Facebook friends about this fundraiser.":"Tell your Facebook friends about this fundraiser.","Join fundraising team":"Join fundraising team","Help {{organizerName}} raise more funds.":"Help {{organizerName}} raise more funds.","Thank donors":"Thank donors","Show appreciation and get more support. Ask donors to share this fundraiser.":"Show appreciation and get more support. Ask donors to share this fundraiser.","Add a donate button":"Add a donate button","Reach your community on a website or blog.":"Reach your community on a website or blog.","Donated {{amount}}":"Donated {{amount}}","Hi, I’d really appreciate it if you would share or donate to this GoFundMe, {{fundTitle}} {{- shareLink}}":"Hi there! I’d really appreciate it if you would share or donate to this GoFundMe, {{fundTitle}} {{- shareLink}}","Captcha challenge failed. Please try again.":"Captcha challenge failed. Please try again.","You exceeded the maximum number of tries. Please try again later.":"You have exceeded the maximum number of tries. Please try again later.","An error occurred. Please try again later.":"An error occurred. Please try again later.","Sign in to follow this fundraiser":"Sign in to follow this fundraiser","Sign in to post your comment":"Sign in to post your comment","Reset instructions sent to {{email}}":"Reset instructions sent to {{email}}","Please check your email & password or please sign in with your Facebook account.":"Please check your email and password or sign in with your Facebook account.","Please check your email & password":"Please check your email and password"}},"es_ES":{"apps-campaign":{"Better Business Bureau":"Better Business Bureau","Accredited business":"Negocio acreditado","Created {{dateFormatBasedOnLocal}}":"Fecha de creación: {{dateFormatBasedOnLocal}}","Just now":"Justo ahora","Created {{count}} hour ago":"Se creó hace {{count}} hora","Created {{count}} hour ago:_:plural":"Se creó hace {{count}} horas","Created {{count}} day ago":"Se creó hace {{count}} día","Created {{count}} day ago:_:plural":"Se creó hace {{count}} días","Thank you for your donation. A receipt has been sent to <1>{{donorEmail}}</1>":"Gracias por tu donativo. Se ha enviado un recibo a <1>{{donorEmail}}</1>","by":"por","for":"para","Team fundraiser":"Campaña de recaudación de fondos en equipo","Link Copied":"Enlace copiado","Anonymous":"Anónimo","In partnership with<1></1><2>{{partnerName}}</2>":"En colaboración con<1></1><2>{{partnerName}}</2>","See all":"Ver todo","This fundraiser is located near you":"Esta recaudación de fondos está en tu zona","{{- recentDonorsStr}} person just donated":"{{- recentDonorsStr}} persona acaba de donar","{{- recentDonorsStr}} person just donated:_:plural":"{{- recentDonorsStr}} personas acaban de donar","This fundraiser is no longer accepting donations. If you are the organizer, beneficiary, team member, or donor,<1></1><2>sign in</2><3></3>to see additional information.":"Esta recaudación de fondos ya no acepta donativos. Esta recaudación de fondos ya no acepta donativos. Si eres el organizador, beneficiario, miembro de un equipo o donante,<1></1><2>inicia sesión</2><3></3>para ver más información.","The organizer has currently disabled new donations to this fundraiser.":"El organizador ha desactivado la opción de aportar donativos a esta recaudación de fondos.","This fundraiser has been deactivated by the organizer.":"El organizador ha desactivado esta recaudación de fondos.","Learn more":"Más información","Copy to clip board":"Copiar en el portapapeles","Fundraiser link copied":"Se ha copiado el enlace de la recaudación de fondos","Copy to clipboard":"Copiar en el portapapeles","Now paste this link into a Facebook post, Messenger, or any Facebook groups you\'re in.":"Ahora pega este enlace en una publicación de Facebook, Messenger o cualquiera de tus grupos de Facebook.","Copy your fundraiser link and paste it into a Facebook post, Messenger, or any Facebook groups you’re in.":"Copia el enlace de tu recaudación de fondos y pégalo en una publicación de Facebook, Messenger o cualquiera de tus grupos de Facebook.","Questions about where to share this link?":"¿Tienes alguna pregunta sobre dónde se puede compartir este enlace?","<0>Tip:</0><1></1>Paste this fundraiser link anywhere.":"<0>Consejo:</0><1></1>Pega el enlace de esta recaudación de fondos en cualquier lugar.","Collapse text":"Contraer texto","Read more":"Leer más","Edit":"Editar","Delete":"Eliminar","Edited":"Editado","{{name}}<1></1>donated<3></3><4>{{donationAmount}}</4>":"{{name}}<1></1>donó<3></3><4>{{donationAmount}}</4>","{{name}}<1></1>commented":"{{name}}<1></1>comentó","Campaign organizer":"Organizador de la recaudación de fondos","Beneficiary":"Beneficiario","GoFundMe Guarantee":"Garantía de GoFundMe","Only donations on our platform are protected by the GoFundMe Guarantee.":"Solo los donativos realizados a través de nuestra plataforma están protegidos por la Garantía de GoFundMe.","Donate now":"Donar ahora","Your donation":"Tu donativo","Recent donation":"Donativo reciente","Top donation":"Donativo más importante","First donation":"Primer donativo","Offline":"Fuera de Internet","Become an early supporter":"Conviértete en uno de los primeros seguidores","Become the first supporter":"Conviértete en el primer seguidor","Your donation matters":"Tu donativo es importante","In the rare case something isn’t right, we will work with you to determine if misuse occurred.":"En el caso poco probable de que algo no vaya bien, trabajaremos contigo para determinar si se ha hecho un mal uso.","Email":"Email","Embed HTML":"Insertar HTML","Messenger":"Messenger","Facebook":"Facebook","<0>We use cookies</0> to enable features and market content. Click “That’s OK” to add cookies. View<2></2><3>privacy policy</3><4></4>or<6></6><7>manage cookies.</7>":"<0>Utilizamos cookies</0> para activar funciones y contenido comercial. Haz clic en “Acepto” para añadir las cookies. Consulta la<2></2><3>declaración de privacidad</3><4></4>o la sección de<6></6><7>administración de cookies.</7>","That\'s OK":"Acepto","<0>As stated on the banner, GoFundMe uses cookies to enable features and market content to provide you with an improved experience. We consider these cookies to be non-essential, pursuant to our<1></1><2>privacy policy.</2><3></3>When you click “That’s OK” on the banner, we add these non-essential cookies.</0>":"<0>Tal y como informa el banner, GoFundMe utiliza cookies para habilitar funciones y hacer publicidad de contenido que sirven para ofrecerte una mejor experiencia. Consideramos estas cookies como no esenciales, con arreglo a nuestra<1></1><2>declaración de privacidad.</2><3></3>Cuando haces clic en “Acepto” en el banner, añadimos estas cookies no esenciales.</0>","Cookie Preferences":"Preferencias de cookies","Close cookie modal":"Cerrar cookie modal","We value your privacy":"Valoramos tu privacidad","Here in this Cookie Preferences page, the non-essential cookies category is broken down\\n                            further into functional and marketing, as you can see below. You can change your\\n                            preferences as to both functional and marketing cookies here. When you click “Save” on\\n                            this page, we will add only those non-essential cookies you select.":"En esta página de Preferencias de cookies, la categoría de cookies no esenciales se divide a su vez en cookies funcionales y cookies de marketing, como puedes ver a continuación. Aquí puedes cambiar tus preferencias sobre cookies funcionales y de marketing. Si haces clic en “Guardar” en esta página, añadiremos solo las cookies no esenciales que selecciones.","Marketing cookies":"Cookies de marketing","Enable":"Activar","GoFundMe collects information regarding user navigation to provide sponsored content\\n                            relevant to our products on other sites. Specifically, if you start a fundraiser on\\n                            GoFundMe and you do not publish that fundraiser, GoFundMe may then show a banner ad the\\n                            next time you are on Facebook.":"GoFundMe recopila información sobre la navegación del usuario para proporcionar contenido patrocinado relevante para nuestros productos en otros sitios. Específicamente, si inicias una recaudación de fondos en GoFundMe y no la publicas, GoFundMe podría mostrar un banner publicitario la próxima vez que entres en Facebook.","Functional cookies":"Cookies funcionales","We use data collected with these cookies to improve your experiences on the GoFundMe\\n                            platform, as well as avoiding bugs or testing new features.":"Utilizamos los datos recopilados con estas cookies para mejorar tu experiencia en la plataforma de GoFundMe, así como para evitar errores o probar nuevas funciones.","Essential cookies":"Cookies esenciales","Always enabled":"Siempre activadas","Data is collected by these cookies to offer basic functions, to ensure that the GoFundMe\\n                            Platform functions technically, to keep track of your settings and activities, and for\\n                            security or fraud prevention purposes.":"Los datos recopilados por estas cookies sirven para ofrecer funciones básicas a fin de garantizar que la Plataforma de GoFundMe funcione desde el punto de vista técnico y hacer un seguimiento de tu configuración y tus actividades, así como por motivos de seguridad y prevención de fraudes.","Enable all and close":"Activar todas y cerrar","Enable all":"Activar todo","Save and close":"Guardar y cerrar","Save":"Guardar","Show less":"Mostrar menos","Show more":"Mostrar más","Previous image":"Imagen anterior","Next image":"Siguiente imagen","Image {{i}} of {{t}}":"Imagen {{i}} de {{t}}","Previous 10 images":"10 imágenes anteriores","Next 10 images":"Siguientes 10 imágenes","Close image gallery":"Cerrar galería de imágenes","Delete this image":"Eliminar esta imagen","Instagram":"Instagram","Copy and paste this link on your Instagram bio":"Copia y pega este enlace en tu biografía de Instagram","Fundraiser link":"Enlace de la recaudación de fondos","Link copied":"Enlace copiado","Something went wrong.":"Ha surgido un problema.","Share on Instagram":"Compartir en Instagram","Back to sharing":"Volver a compartir","LinkedIn":"LinkedIn","Hi, I’d really appreciate it if you would share or donate to this GoFundMe.":"Hola. Te agradecería mucho que compartieras o hicieras un donativo a esta campaña.","Your password must have:":"Tu contraseña debe tener:","At least 12 characters":"Al menos 12 caracteres","1 uppercase letter":"1 letra mayúscula","1 lowercase letter":"1 letra minúscula","1 number":"1 número","1 symbol":"1 símbolo","Print Poster":"Imprimir póster","Print":"Imprimir","{{raisedAmountString}}<1></1><2>{{sameCurrencyCode}} raised</2>":"{{raisedAmountString}}<1></1><2>{{sameCurrencyCode}} recaudados</2>","{{raisedAmountString}}<1></1><2>{{sameCurrencyCode}} raised of {{goalAmountNBSP}} goal</2>":"{{raisedAmountString}}<1></1><2>{{sameCurrencyCode}} recaudados del objetivo de {{goalAmountNBSP}}</2>","{{goalAmountNBSP}}<1></1><2>{{sameCurrencyCode}} goal</2>":"objetivo de {{goalAmountNBSP}}<1></1><2>{{sameCurrencyCode}}</2>","share":"compartir","Share as much as possible":"Comparte tu campaña lo más posible","Try using all sharing options. Telling people about your fundraiser is the only way to start raising donations.":"Intenta usar todas las opciones disponibles para compartir la recaudación de fondos. La única manera de empezar a recaudar donativos es informando a la gente de tu recaudación de fondos.","Text":"Texto","donor":"donante","donors":"donantes","shares":"veces compartido","follower":"seguidor","followers":"seguidores","Fundraiser Stats":"Estadísticas sobre la recaudación de fondos","Share":"Compartir","By continuing, you agree with GoFundMe<1></1><2>terms</2><3></3>and<5></5><6>privacy policy</6>":"Al continuar, aceptas las<1></1><2>condiciones</2><3></3>y la<5></5><6>declaración de privacidad</6> de GoFundMe","Preview email":"Vista previa de email","Twitter":"Twitter","{{article}} by {{- authorName}}":"{{article}} por {{- authorName}}","See older updates":"Ver comunicaciones más antiguas","WhatsApp":"WhatsApp","Your donation is made to PayPal Giving Fund Australia (ABN 65 105 950 945), a Public Ancillary Fund and a charity registered with the Australian Charities and Not-for-profits Commission, subject to its<1></1><2>terms</2>.":"Tu donativo se realiza a PayPal Giving Fund Australia (ABN 65 105 950 945), un fondo filantrópico intermediario y organización benéfica registrada ante la comisión australiana sobre organizaciones benéficas y ONGs, sujeto a sus<1></1><2>condiciones</2>.","While GoFundMe does not have a platform fee, PayPal Giving Fund Australia receives your donation after deduction of transaction<1></1><2>fees</2><3></3>and will grant funds to your recommended charity on a monthly basis.*":"Aunque FundMe no cobra comisión por el uso de la plataforma, PayPal Giving Fund Australia recibe tu donativo después de deducir las<1></1><2>comisiones</2><3></3>por transacción y cada mes enviará los fondos a la organización benéfica que recomiendes.*","*If, after reasonable efforts, PayPal Giving Fund Australia cannot deliver donations to this<1></1>charity, it will grant funds to another charity per PayPal Giving Fund Australia\'s<3></3><4>policies</4>.":"*Si, tras un esfuerzo razonable, PayPal Giving Fund Australia no puede enviar los donativos a esta<1></1>organización benéfica, los remitirá a otra organización de acuerdo con las<3></3><4>políticas</4> de PayPal Giving Fund Australia.","Donations raised benefit:":"Beneficiario de los donativos recaudados:","How charity fundraisers work":"Cómo funcionan las campañas destinadas a organizaciones benéficas","Your donation is made to PayPal Giving Fund Canada, a charity registered with the Canada Revenue Agency (No. 812867752RR0001), subject to its<1></1><2>terms</2>.":"Tu donativo se realiza a PayPal Giving Fund Canada, organización benéfica registrada con arreglo a la Agencia Tributaria de Canadá (No. 812867752RR0001), sujeto a sus<1></1><2>condiciones</2>.","While GoFundMe does not have a platform fee, PayPal Giving Fund Canada receives your donation after deduction of transaction<1></1><2>fees</2><3></3>and will grant funds to your recommended charity on a monthly basis.*":"Aunque FundMe no cobra comisión por el uso de la plataforma, PayPal Giving Fund Canada recibe tu donativo después de deducir las<1></1><2>comisiones</2><3></3>por transacción y cada mes enviará los fondos a la organización benéfica que recomiendes.*","*If, after reasonable efforts, PayPal Giving Fund Canada cannot deliver donations to this<1></1>charity, it will grant funds to another charity per PayPal Giving Fund Canada\'s<3></3><4>policies</4>.":"* Si, tras un esfuerzo razonable, PayPal Giving Fund Canada no puede enviar los donativos a esta<1></1>organización benéfica, los remitirá a otra organización de acuerdo con las<3></3><4>políticas</4> de PayPal Giving Fund Canada.","Support":"Apoyar","Contribute":"Contribuir","Buy me a coffee":"Invítame a un café","Show appreciation":"Mostrar agradecimiento","Start a GoFundMe":"Iniciar una campaña de GoFundMe","Support this cause":"Apoya esta causa","{{- userName}} needs your help today! {{- campaignTitle}}":"¡{{- userName}} necesita tu ayuda hoy mismo! {{- campaignTitle}}","Fundraiser for {{- userName}} by {{- campaignOrganizer}} : {{- campaignTitle}}":"Campaña para {{- userName}} de {{- campaignOrganizer}} : {{- campaignTitle}}","Fundraiser by {{- userName}} : {{- campaignTitle}}":"Campaña de {{- userName}} : {{- campaignTitle}}","{{- campaignTitle}}, organized by {{- campaignOrganizer}}":"{{- campaignTitle}}, organizada por {{- campaignOrganizer}}","See more":"Ver más","See top donations":"Ver los donativos más importantes","Continue reading":"Continuar leyendo","Updates":"Comunicaciones","Image {{imageIndex}} of {{totalImages}}. Click to view all images":"Imagen {{imageIndex}} de {{totalImages}}. Haz clic para ver todas las imágenes","Image {{imageIndex}} of {{totalImages}}":"Imagen {{imageIndex}} de {{totalImages}}","Photo limit reached":"Se ha alcanzado el límite de fotos","Add more photos":"Agregar más fotos","Add photos to comment":"Agrega fotos al comentario","I donated because...":"He hecho un donativo porque...","Add this public comment to the fundraiser.":"Agrega este comentario público a la recaudación de fondos.","Your donation will be displayed as Anonymous, and this comment will not show up publicly on the campaign.":"Tu donativo será anónimo y este comentario no se mostrará de manera pública en la recaudación de fondos.","Post comment":"Publicar comentario","Please choose a maximum of 10 photos for your comment.":"Por favor, elige un máximo de 10 fotos para tu comentario.","Please donate and share words of encouragement.":"Por favor, dona y comparte palabras de ánimo.","Continue":"Continuar","Comments":"Comentarios","Please select one.":"Por favor, selecciona uno.","Yes, I have contacted the Campaign Organizer.":"Sí. Me he puesto en contacto con el organizador de la recaudación de fondos.","No, I have not contacted the Campaign Organizer.":"No. No me he puesto en contacto con el organizador de la recaudación de fondos.","They are a family member":"Es un familiar","They are a friend or acquaintance":"Es un amigo o conocido","I do not know the organizer of this campaign":"No conozco al organizador de esta recaudación de fondos","Your Name":"Tu nombre","Your Phone Number":"Tu número de teléfono","Required in case our team needs to contact you for further details.":"Es obligatorio por si nuestro equipo necesita ponerse en contacto contigo para recabar más información.","Your Email":"Tu dirección de email","Confirm Email":"Confirmar email","Page URL":"URL de la página","Please enter the URL in this format: https://www.gofundme.com/f/example-campaign":"Por favor, usa este formato para la URL: http://www.gofundme.com/f/ejemplo-campaña","I don\'t know the page URL":"No sé cuál es la URL de la página","Have you already contacted the organizer of this campaign?":"¿Te has puesto ya en contacto con el organizador de esta recaudación de fondos?","How do you know the organizer of this campaign?":"¿De qué conoces al organizador de esta recaudación de fondos?","Please explain your relationship to the Campaign Organizer.":"Por favor, explica tu relación con el organizador de la recaudación de fondos.","How much money did you receive from the campaign organizer?":"¿Cuánto dinero has recibido del organizador de la recaudación de fondos?","Why do you believe this person will not deliver the funds to you?":"¿Por qué crees que esta persona no te enviará los fondos?","Please attach a copy of a government issued photo ID":"Por favor, adjunta copia de un documento identificativo emitido por un organismo público","Please upload only JPEG, GIF, PNG or PDF files. The file size must be less than 5MB.":"Por favor, sube solo archivos JPEG, GIF, PNG o PDF. El archivo no debe superar los 5 MB.","Upload any evidence you may have":"Sube cualquier prueba que puedas tener","Send Email":"Enviar email","Message Subject":"Asunto del mensaje","Your Message":"Tu mensaje","I am requesting a refund because...":"Solicito reembolso porque...","Describe your concerns about how the funds are being used.":"Explica porqué te preocupa el modo en que se están usando los fondos.","40 characters minimum":"40 caracteres como mínimo","Yes, I know the Campaign Organizer.":"Sí, conozco al organizador de la recaudación de fondos.","No, I do not know the Campaign Organizer":"No, no conozco al organizador de la recaudación de fondos","I am a beneficiary.":"Soy un beneficiario.","I am a donor.":"Soy un donante.","I am an individual concerned about this campaign.":"Soy una persona a la que le preocupa esta recaudación de fondos.","I am involved in a legal dispute with the Campaign Organizer.":"Estoy inmerso en una disputa legal con el organizador de la recaudación de fondos.","This campaign includes libelous statements.":"Esta recaudación de fondos incluye declaraciones difamatorias.","Campaign includes factually incorrect information.":"La recaudación de fondos incluye información objetivamente incorrecta.","Campaign Organizer has not used funds for the stated purpose.":"El organizador de la recaudación de fondos no ha usado los fondos para la causa que indicó originalmente.","They are impersonating someone or have copied another campaign.":"Está suplantando a alguien o ha copiado otra recaudación de fondos.","Please explain your concern(s) in detail.":"Por favor, describe a fondo lo que te preocupa.","Which statements are libelous and why?":"¿Qué declaraciones son difamatorias y por qué?","Which statements are incorrect and why?":"¿Qué declaraciones son incorrectas y por qué?","How have the campaign’s donations been spent?":"¿Cómo se ha gastado el dinero recaudado en la recaudación de fondos?","What is the original campaign link/title?":"¿Cuál es el enlace/nombre original de la recaudación de fondos?","Please describe your concerns":"Por favor, describe lo que te preocupa","How do you know the campaign organizer?":"¿De qué conoces al organizador de la recaudación de fondos?","How are you connected to the campaign?":"¿Cuál es tu relación con la recaudación de fondos?","How much money is being withheld and why?":"¿Cuánto dinero se retiene y por qué?","Why are you concerned about your donation?":"¿Qué te preocupa de tu donativo?","Please describe your concerns.":"Por favor, describe lo que te preocupa.","Do you know the Campaign Organizer?":"¿Conoces al organizador de la recaudación de fondos?","Which best describes you?":"¿Cuál de las siguientes opciones es la que mejor te describe?","Publication":"Publicación","Self-Service":"Auto-servicio","Please select an option which best describes you to see relevant information.":"Por favor, selecciona la opción que mejor te describa para ver información relevante.","For customized help, please sign in.":"Para obtener ayuda personalizada, por favor, inicia sesión.","Sign In":"Iniciar sesión","Top Answers":"Respuestas más relevantes","How do I get a refund?":"¿Cómo obtengo un reembolso?","How do I withdraw money?":"¿Cómo retiro el dinero?","Is my country supported?":"¿Está disponible GoFundMe en mi país?","Can I withdraw money?":"¿Puedo retirar dinero?","How do I reset my password?":"¿Cómo restablezco mi contraseña?","How do I invite someone to withdraw?":"¿Cómo invito a una persona a retirar fondos?","I can\'t withdraw my funds, now what?":"No puedo retirar mis fondos. ¿Qué hago?","How do your fees work?":"¿Qué comisiones aplicáis?","What about taxes and stuff?":"¿Cómo afectan los impuestos?","GoFundMe homepage":"Página de inicio de GoFundMe","Choose your language":"Elige tu idioma","How GoFundMe works":"Cómo funciona GoFundMe","Common questions":"Preguntas frecuentes","Success stories":"Historias de éxito","Supported countries":"Países con GoFundMe","Team fundraising":"Recaudación de fondos en equipo","Donate button":"Botón Donar","Support COVID-19 fundraisers":"Apoya campañas para luchar contra el COVID-19","Why GoFundMe":"Por qué GoFundMe","Medical":"Salud","Emergency":"Emergencia","Memorial":"In memoriam","Education":"Educación","Nonprofit":"ONG","Fundraise for":"Recaudar fondos para","Help center":"Centro de ayuda","Blog":"Blog","GoFundMe Stories":"Historias de GoFundMe","Press center":"Centro de prensa","Careers":"Empleos","About":"Acerca de","Resources":"Recursos","Terms":"Condiciones","Privacy":"Privacidad","Legal":"Información legal","Do Not Sell My Personal Information":"No vender mi información personal","Hide":"Ocultar","Show":"Mostrar","Hide guidance cards":"Ocultar tarjetas de orientación","Show guidance cards":"Mostrar tarjetas de orientación","Previous card":"Tarjeta anterior","Next card":"Siguiente tarjeta","You are donating to<1></1><2>PayPal Giving Fund Ireland</2>, a registered charity (No. 20205692), which will email you a receipt for your donation.":"Estás donando a<1></1><2>PayPal Giving Fund Ireland</2>, una organización benéfica registrada (No. 20205692), que te enviará por correo electrónico un recibo de tu donativo.","*In rare cases, a charity may cease to meet PayPal Giving Fund Ireland’s legal or other eligibility requirements to receive funds or may not accept the funds. In such cases, PayPal Giving Fund Ireland will<1></1><2>reassign the funds</2><3></3>to another charity and (wherever possible) seek a new recommendation from you.":"*En casos excepcionales, es posible que una organización benéfica deje de cumplir los requisitos legales u otros criterios de PayPal Giving Fund Ireland para recibir los fondos, o no pueda aceptarlos. En esos casos, PayPal Giving Fund Ireland <1></1><2>reasignará los fondos</2><3></3>a otra organización benéfica y, siempre que sea posible, te pedirá una nueva recomendación","The charity will typically receive the funds from PayPal Giving Fund within 15-45 days (90 days if the charity has not enrolled).*":"Normalmente, la organización benéfica recibirá los fondos de PayPal Giving Fund en un plazo de 15-45 días (90 días si todavía no se ha inscrito).*","Open share modal":"Abrir share modal","Donate":"Donar","Sign in":"Iniciar sesión","Sign out":"Cerrar sesión","Donations you\'ve made":"Donativos que has realizado","Account settings":"Configuración de la cuenta","Your fundraisers":"Tus campañas","Open navigation menu":"Abrir el menú de navegación","Close navigation menu":"Cerrar el menú de navegación","My campaigns":"Mis campañas","Close Modal":"Fechar modal","Start":"Iniciar","Don\'t have an account? ":"¿No tienes cuenta? ","Sign up":"Regístrate","Enter the email address associated with your account, and we\'ll email you a link to reset your password":"Escribe la dirección de email asociada a tu cuenta. Te enviaremos un enlace para que restablezcas la contraseña.","Email address":"Dirección de email","Request new password":"Solicitar nueva contraseña","Don\'t have an account?<1></1><2>Sign up</2>":"¿No tienes cuenta?<1></1><2>Abre una</2>","Forgot your password?":"¿Olvidaste tu contraseña?","Password":"Contraseña","Sign in to GoFundMe":"Iniciar sesión en GoFundMe","Already have an account?<1></1><2>Sign in</2>":"¿Ya tienes cuenta?<1></1><2>Inicia sesión</2>","Please<1></1><2>sign in</2><3></3>to access your account.":"Por favor,<1></1><2>inicia sesión</2><3></3>para acceder a tu cuenta.","First Name":"Nombre","Last Name":"Apellidos","Confirm email address":"Confirma tu email","Set password":"Definir contraseña","We will never post without your permission":"Nunca publicaremos sin su permiso","Continue with Facebook":"Continuar con Facebook","or":"o","Use my email address":"Usar mi dirección de e-mail","You are donating to<1></1><2>PayPal Giving Fund</2><3></3>UK, a registered charity (No. 1110538), which will email you a receipt for your donation and claim Gift Aid where eligible.":"Estás donando a<1></1><2>PayPal Giving Fund</2><3></3>UK, una organización benéfica registrada (No. 1110538), que te enviará por correo electrónico un recibo de tu donativo para que, si cumple los requisitos, pueda acogerse a \\"Gift Aid\\".","<0></0>*In very limited cases, a recommended charity may cease to meet PayPal Giving Fund\'s legal or other eligibility<2></2><3>requirements</3><4></4>. In such cases, PayPal Giving Fund will reassign the funds to a similar charity, and (wherever possible) seek a new recommendation from donors.":"<0></0>*En casos muy limitados, una organización benéfica recomendada podrá dejar de cumplir con los requisitos legales así como con otros<2></2><3>requisitos</3><4></4>de elegibilidad de PayPal Giving Fund. En estos casos, PayPal Giving Fund volverá a asignar los fondos a una organización benéfica similar y, siempre que sea posible, buscará una nueva recomendación de donantes.","The charity will typically receive the funds from PayPal Giving Fund within 15-45 days of your donation if the charity has enrolled (or 90 days if the charity has not yet enrolled). Unlike other platforms, 100% of any Gift Aid will go to the charity as well.":"La organización benéfica normalmente recibirá los fondos de PayPal Giving Fund en un plazo de 15-45 días desde el día en que se realizó el donativo si la organización benéfica se ha inscrito (o en un plazo de 90 días si todavía no se ha inscrito). A diferencia de otras plataformas, el 100 % de la cantidad de cualquier donativo que se acoja a \\"Gift Aid\\" se destinará también a la organización benéfica.","PayPal Giving Fund will grant your donation to {{charityName}} within 15-45 days (Or 90 days if the charity has not yet enrolled)*.":"PayPal Giving Fund entregará tu donativo a {{charityName}} en un plazo de 15-45 días (o 90 días si la organización benéfica no se ha inscrito)*.","*If, after reasonable efforts have been made, PayPal Giving Fund cannot grant the funds to this charity, they will contact you before reassigning the funds in accordance with<1></1><2>PayPal Giving Fund\'s Policies</2>.":"*Si, tras un esfuerzo razonable, PayPal Giving Fund no puede entregar los donativos a esta organización benéfica, se pondrá en contacto contigo antes de reasignar los fondos de acuerdo con las<1></1><2>políticas de PayPal Giving Fund</2>.","How non-profit fundraisers work":"Cómo funcionan las campañas destinadas a ONGs","Donations are typically 100% tax deductible in the US. Your donation is made to PayPal Giving Fund (a 501(c)(3) charitable organization) to benefit your chosen charity.":"Los donativos suelen ser totalmente desgravables en los EE. UU. Tus donativos se hacen a PayPal Giving Fund (organización benéfica 501(c)(3)) para que se destinen a la organización benéfica que hayas elegido.","Fundraiser updates ({{totalUpdates}})":"Comunicaciones sobre campañas ({{totalUpdates}})","Fundraiser updates":"Comunicaciones sobre la recaudación de fondos","Close fundraiser updates modal":"Cerrar modal de comunicaciones sobre la recaudación de fondos","Thanks for donating":"Gracias por donar","Boost this fundraiser":"Impulsa esta campaña","Be the first to help":"Sé el primero en ayudar","Your early support will go a long way and help inspire others to donate.":"Tu rápido apoyo tendrá mucha repercusión y ayudá a que otras personas se decidan a donar.","Report fundraiser":"Denunciar recaudación de fondos","See top":"Ver mayores","Donations":"Donativos","Contact Us - Answer Found":"Contáctenos - Respuesta encontrada","Answer Found!":"¡Respuesta encontrada!","Thanks very much!":"Muchas gracias.","If you ever need some extra help, the GoFundMe Team is standing by!":"Si alguna vez necesitas más ayuda, el equipo de GoFundMe siempre estará a tu disposición.","Return to Help Center":"Volver al Centro de ayuda","Contact Us - Message Sent!":"Contacto con GoFundMe - ¡Mensaje enviado!","Message Sent":"¡Mensaje enviado!","Thank you for your patience":"¡Gracias por tu paciencia!","We\'re sorry, but that campaign cannot be found. Please check the link URL and try again.":"Lo sentimos, no se encontró la recaudación de fondos que especificaste. Por favor, comprueba la URL del enlace y vuelve a intentarlo.","Page Not Found":"Página no encontrada","Home":"Página de inicio","Campaign Not Found":"Campaña no encontrada","Search gofundme.com for":"Busca en gofundme.com la campaña","Show your support by going to this link":"Muestra tu apoyo visitando este enlace","Pagination navigation":"Navegación por paginación","Previous page":"Página anterior","Previous":"Anterior","Next page":"Página siguiente","Next":"Siguiente","Page {{page}} of {{nbPages}}":"Página {{page}} de {{nbPages}}","Search in progress":"Búsqueda en curso","Fundraisers for \\"{{query}}\\" in all locations":"Campañas para \\"{{query}}\\" en todas las ubicaciones","No results found for \\"{{query}}\\" in all locations":"No se han encontrado resultados con \\"{{query}}\\" en ninguna ubicación","Search results for {{- query}}":"Buscar resultados con {{- query}}","GoFundMe: {{- searchQuery}}":"GoFundMe: {{- searchQuery}}","The leader in online fundraising":"Líderes en campañas en línea","We\'re sorry. Something went wrong. Please wait one minute and try again.":"Lo sentimos mucho. Ha surgido un problema. Por favor, espera un minuto y vuelve a intentarlo.","Unknown Error":"Error desconocido","Join this list. <1>Donate now.</1>":"Únete a esta lista. <1>Dona ahora.</1>","Top":"Mayores","Donations ({{totalDonations}})":"Donativos ({{totalDonations}})","Close all donations modal":"Cerrar todos los donativos modal","Close":"Cerrar","<0>What is this? <1></1><2>Learn more</2></0>":"<0>¿Qué es esto? <1></1><2>Más información</2></0>","Large":"Grande","Medium":"Mediano","Small (Button only)":"Pequeño (Solo botón)","Copy and paste the following embed code:":"Copia y pega el siguiente código incrustado:","Copy HTML code":"Copiar código HTML","Copied!":"¡Copiado!","Something went wrong. Please select the code block to manually copy it.":"Ha surgido un problema. Por favor, selecciona el bloque de código y cópialo manualmente.","Preview":"Vista previa","Select the button text":"Selecciona el botón de texto","Have you seen \\"{{- title}}\\"?":"¿Has visto \\"{{- title}}\\" ?","Hello \\n \\n I thought you might be interested in supporting this GoFundMe, {{- shareLink}}. \\n \\n Even a small donation could help {{- name}} reach their fundraising goal. And if you can\'t make a donation, it would be great if you could share the fundraiser to help spread the word. \\n \\n Thanks for taking a look!":"Hola, \\n \\n He pensado que quizá te gustaría apoyar esta recaudación de fondos, {{- shareLink}}. \\n \\n Un donativo, por pequeño que sea, puede ayudar a que {{- name}} alcance su objetivo. Si no te es posible hacerlo, aún podrías ayudar compartiendo la recaudación de fondos. \\n\\n ¡Gracias por tu tiempo!","Hi,\\n\\nI\'d really appreciate it if you would share or donate to this GoFundMe.\\n\\n*{{- fundTitle}}*\\n\\n{{- description}}\\n\\nRead more here {{- fundUrl}}\\n\\nForward this message to your contacts to help this campaign reach its goal!":"Hola.\\n\\nTe agradecería mucho que compartieras esta recaudación de fondos o hicieras un donativo.\\n\\n*{{- fundTitle}}*\\n\\n{{- description}}\\n\\nLee más aquí {{- fundUrl}}\\n\\n¡Reenvía este mensaje a tus contactos para ayudar a que la recaudación de fondos logre su objetivo!","Hi, I\'d really appreciate it if you would share or donate to this GoFundMe, {{- shareLink}}":"Hola. Te agradecería mucho que compartieras o hicieras un donativo a esta campaña, {{- shareLink}}","Help by sharing":"Comparte para ayudar","Fundraisers shared on social networks raise up to 5x more":"Las campañas que se comparten en las redes sociales recaudan hasta 5 veces más","Copy":"Copiar","Copy link":"Copiar enlace","Back":"Atrás","Top Donations":"Donativos más importantes","See all donations":"Ver todos los donativos","All":"Todos","Be a top donor for {{- beneOrOrganizerName}} with {{- averageTopDonation}} or more.":"Conviértete en uno de los donantes más destacados de {{- beneOrOrganizerName}} con un donativo de {{- averageTopDonation}} o más.","<0>Donating outside of GoFundMe</0><1>Donations on other platforms are not protected by the GoFundMe Guarantee. In the rare case that something isn’t right on GoFundMe, we work with you to determine if misuse occurred.<1></1><2>Learn more</2></1><2>Donate now</2>":"<0>Donativos realizados por vías distintas a las de GoFundMe</0><1>Los donativos que se realizan a través de otras plataformas no están protegidos por la Garantía de GoFundMe. En el caso poco probable de que algo no vaya bien, trabajaremos contigo para determinar si se ha hecho un mal uso.<1><1><2>Más información</2></1><2>Donar ahora</2>","Close modal":"Fechar modal","Suggestions":"Sugerencias","Make a Beneficiary Claim":"Presentar un reclamo de beneficiario","Make a Beneficiary Claim | GoFundMe Support":"Presentar un reclamo de beneficiario | Soporte de GoFundMe","Contact Us":"Contáctenos","Make a Donor Claim":"Presentar un reclamo de donante","Make a Donor Claim | GoFundMe Support":"Presentar un reclamo de donante | Soporte de GoFundMe","Report a Fundraiser":"Denunciar una recaudación de fondos","Report a Fundraiser | GoFundMe Support":"Denunciar una recaudación de fondos | Soporte de GoFundMe","Press Contact Form":"Formulario de contacto para la prensa","Press Contact Form | GoFundMe Support":"Formulario de contacto para la prensa | Soporte de GoFundMe","Send Message":"Enviar mensaje","Contact":"Contacto","Write {{firstName}} a message":"Escribe un mensaje a {{firstName}}","Organizer":"Organizador","Cancel":"Cancelar","2. Use your donation receipt to<1></1><2>edit your donation comment</2><3></3>or<5></5><6>change your name on a donation</6>.":"2.Utiliza el recibo de tu donativo para<1></1><2>editar el comentario de tu donativo</2><3></3>o<5></5><6>cambiar tu nombre en un donativo</6>.","If you do not remember your GoFundMe password, please<1></1><2>click here to request a new password</2>.":"Si no recuerdas tu contraseña de GoFundMe, por favor,<1></1><2>haz clic aquí para solicitar una nueva</2>.","If you received an<1></1><2>unexpected refund</2><3></3>for your donation it could be for any of the following reasons:":"Si has recibido un<1></1><2>reembolso inesperado</2><3></3>de tu donativo, puede deberse a alguno de estos motivos:","Edit My Comment":"Editar mi comentario","Edit My Name":"Editar nombre de mi donativo","Get Donation Receipt":"Obtener recibo de donativo","Refund All Donations":"Reembolsar todos los donativos","Update Donation Anonymity":"Actualizar el carácter anónimo del donativo","We can help you with that! Confirm the email address you used to donate.":"¡Podemos ayudarte! Confirma la dirección de email que utilizaste para hacer el donativo.","Editing the information on a donation is quick and easy, and can be done from your donation receipt or through your GoFundMe account.":"Editar la información de un donativo es algo que se hace de manera rápida y sencilla, bien desde el recibo de tu donativo o a través de tu cuenta de GoFundMe.","Actions you can take on your own:":"Acciones que puedes realizar tú mismo:","1. Request a new donation receipt by entering your donation email address in the field below.":"1. Solicita un nuevo recibo de donativo indicando la dirección de email que usaste para hacer tu donativo en el campo de abajo.","We can help you with that! If you have a personal fundraiser, please enter the email address you used to create your fundraiser.":"¡Podemos ayudarte! Si tienes abierta una recaudación de fondos personal, por favor, escribe la dirección de email que usaste para crear la recaudación de fondos.","If you have a Certified Charity fundraiser, our Customer Happiness Team can help you with that! Please select an option below in \\"Still need help?\\" and include the link to the fundraiser you\'d like to refund.":"Si tienes una recaudación de fondos para una organización benéfica certificada, nuestro equipo de atención al cliente puede ayudarte con este tema. Por favor, selecciona una opción a continuación en \\"¿Sigues necesitando ayuda?\\" e incluye el enlace a la recaudación de fondos para la que deseas el reembolso.","Additional Information:":"Información adicional:","Organizer deactivated the fundraiser":"El organizador ha desactivado la campaña","Our payment processor wasn\'t able to verify the donation":"Nuestro procesador de pagos no ha podido verificar el donativo","Organizer did not verify their account or withdraw funds within required deadlines":"El organizador no ha verificado su cuenta o no ha retirado los fondos en los plazos establecidos","The donation was charged back by the donor":"El donativo ha sido devuelto por el donante","The donation was made by the organizer or beneficiary":"El donativo fue hecho por el organizador o beneficiario","Please visit the fundraiser to view any updates that the organizer might have posted in regards to refunds, click \'Contact\' beneath the organizer\'s name on their fundraiser to email them with any questions, or reach out to our team if you have questions on how you may be able to still support the cause.":"Por favor, visita la campaña para ver las comunicaciones que pueda haber publicado el organizador en relación con los reembolsos. Haz clic en \'Contacto\' debajo del nombre del organizador en su campaña para enviarle un email con preguntas, o ponte en contacto con nuestro equipo si tienes preguntas sobre cómo puedes seguir apoyando la causa.","Help Center":"Centro de ayuda","Please read below":"Por favor, lee a continuación","Your Email Address":"Tu dirección de email","My question was answered":"Se ha respondido a mi pregunta","Still need help?":"¿Sigues necesitando ayuda?","Chat now":"Hablar por chat ahora","Chat":"Chat","Send email":"Enviar email","Donations paused":"Donativos bloqueados","Our team has contacted the organizer with a solution, and donations will resume once the issue is resolved.":"Nuestro equipo se ha puesto en contacto con el organizador para ofrecerle una solución; la campaña volverá a aceptar donativos una vez que se resuelva el problema.","How can I help?":"¿Cómo puedo ayudarte?","Please reach out to the organizer and ask them to sign in to GoFundMe and check their account to resolve the issue.":"Por favor, ponte en contacto con el organizador y pídele que inicie sesión en GoFundMe y consulte su cuenta para resolver el problema.","Something went wrong. We’re working on it, please try again later or<1></1><2>contact us</2>.":"Ha surgido un problema. Estamos trabajando para solucionarlo. Por favor, inténtalo de nuevo más tarde o<1></1><2>ponte en contacto con nosotros</2>.","To include a comment with your donation, you must add text and/or upload a photo.":"Para incluir un comentario con tu donativo debes agregar texto o subir una foto.","{{fileName}}: Please choose a jpeg, jpg, gif, or png file type, and ensure it is smaller than 2048 kb.":"{{fileName}}: por favor, elige un archivo en formato jpeg, jpg, gif o png que no supere los 2048 KB.","{{fileName}}: Please try again later.":"{{fileName}}: por favor, inténtalo de nuevo más tarde.","Show more Support":"Mostrar más apoyo","Return to campaign":"Volver a la recaudación de fondos","Back to previous page":"Volver a la página anterior","Hello \\n \\n I just donated to this GoFundMe, {{- shareLink}}.  Would you be interested in supporting it too? \\n \\n Even a small donation could help {{- name}} reach their fundraising goal. And if you can\'t make a donation, it would be great if you could share the fundraiser to help spread the word. \\n \\n Thanks for taking a look!":"Hola \\n \\n Acabo de donar a esta recaudación de fondos, {{- shareLink}}.  ¿Quieres tú también apoyar esta recaudación de fondos? \\n\\n Un donativo, por pequeño que sea, puede ayudar a que {{- name}} alcance su objetivo. Si no te es posible hacerlo, aún podrías ayudar compartiendo la recaudación de fondos. \\n\\n ¡Gracias por tu tiempo!","Hi, I’d really appreciate it if you would share or donate to this GoFundMe, {{- fundTitle}} {{- shareLink}}":"Hola. Te agradecería mucho que hicieras un donativo a esta campaña, {{- fundTitle}} {{- shareLink}}, o la compartieras si lo deseas","Hi, I just donated to this GoFundMe and would appreciate it if you would share or donate too. {{- shareLink}}":"Hola. Acabo de hacer un donativo a esta campaña y te agradecería mucho que la compartieses o hicieras un donativo. {{- shareLink}}","Something went wrong. Please select the link and manually copy.":"Ha surgido un problema. Por favor, selecciona el enlace y cópialo manualmente.","Now help spread the word":"Ayuda a correr la voz","By sharing this fundraiser, you increase their chance of success by 5x.":"Si compartes esta recaudación de fondos, multiplicarás por 5 sus posibilidades de éxito.","Finished sharing?":"¿Has terminado de compartir la campaña?","Sign up to post your comment":"Regístrate para publicar tu comentario","Sign up to follow this fundraiser":"Regístrate para seguir esta recaudación de fondos","Fundraising team ({{count}})":"Equipo de recaudación de fondos ({{count}})","Contact us | GoFundMe Support":"Contacto con GoFundMe | Soporte de GoFundMe","GoFundMe will always respond to your requests as quickly as possible.":"GoFundMe siempre responderá a tus solicitudes lo antes posible.","Donor protection guarantee":"Garantía de protección del donante","GoFundMe has the first and only guarantee in the industry.":"GoFundMe cuenta con la primera y única garantía del sector.","Simple setup":"Configuración sencilla","You can personalize and share your GoFundMe in just a few minutes.":"Puedes personalizar y compartir tu campaña en apenas unos minutos.","0% platform fee":"0 % de comisión por la plataforma","With a 0% platform fee, you get to keep even more of your money.":"Gracias a la ausencia de comisiones por el uso de la plataforma, podrás destinar la totalidad de los donativos a tu causa.","Mobile app":"App para móviles","The GoFundMe app makes it easy to launch and manage your campaign on the go.":"La app para móviles de GoFundMe te facilita crear y administrar tu recaudación de fondos desde cualquier lugar.","Social reach":"Difusión por las redes sociales","Harness the power of social media to spread your story and get more support.":"Aprovecha el enorme impacto que tienen las redes sociales para difundir tu historia y obtener más apoyo.","24/7 expert advice":"Consejos de expertos, día y noche, laborables y festivos","Our best in class Customer Happiness agents will answer your questions, day or night.":"Nuestros mejores agentes del equipo de Atención al cliente responderán a tus preguntas, por el día y por la noche.","Fundraisers":"Campañas","Discover":"Discover","Charity":"Organizaciones benéficas","User name":"Nombre de usuario","What is crowdfunding?":"¿Qué es el crowdfunding?","How it works":"Cómo funciona","Fundraising tips":"Consejos para recaudar fondos","Plan your fundraiser":"Planifica tu recaudación de fondos","Travel & Adventure":"Viajes y aventuras","Medical, Illness & Healing":"Médicas, enfermedades y salud","Missions, Faith & Church":"Religión","Non-Profits & Charities":"ONGs y organizaciones benéficas","Weddings & Honeymoons":"Bodas y lunas de miel","Other":"Otras","Sports, Teams & Clubs":"Deportes, equipos y clubes","Education & Learning":"Educación y formación","Volunteer & Service":"Voluntariado y servicios","Competitions & Pageants":"Competiciones y concursos de belleza","Accidents & Emergencies":"Accidentes y emergencias","Dreams, Hopes & Wishes":"Sueños, esperanzas y deseos","Animals & Pets":"Animales y mascotas","Environment":"Medioambiente","Rent, Food & Monthly Bills":"Alquiler, comida y facturas mensuales","Birthday Pots":"Botes para regalos de cumpleaños","Babies, Kids & Family":"Bebés, niños y familias","Business & Entrepreneurs":"Negocios y emprendedores","Celebrations & Events":"Celebraciones y eventos","Community & Neighbors":"Comunidad y vecinos","Creative Arts, Music & Film":"Artes creativas, música y cine","Funerals & Memorials":"Funerales y recordatorios","#1 fundraising platform":"La plataforma número 1 para recaudar fondos","More people start fundraisers on GoFundMe than on any other platform.":"La mayoría de la gente crea las campañas en GoFundMe y no en otra plataforma.","Expert advice, 24/7":"Consejos de expertos, día y noche, cualquier día de la semana","Contact us with your questions and we’ll answer, day or night.":"Contáctanos con cualquier pregunta que tengas y te responderemos sin importar si es de día o de noche.","Team member":"Miembro del equipo","Sorry, no account found":"Lo sentimos, no se ha encontrado ninguna cuenta","Your message to {{coFirstName}} successfully sent.":"Tu mensaje a {{coFirstName}} se ha enviado correctamente.","Your message to {{coFirstName}} failed to send. Please try again later.":"No se ha podido enviar tu mensaje a {{coFirstName}}. Por favor, inténtalo de nuevo más tarde.","[email redacted]":"[email redactado]","[phone redacted]":"[teléfono redactado]","Please enter your name.":"Por favor, escribe tu nombre","Please enter a shorter name.":"Por favor, escribe un nombre más corto.","Please enter your email address.":"Por favor, escribe tu dirección de email.","Please enter a shorter email address.":"Por favor, escribe una dirección de email más corta.","Please confirm your email address.":"Por favor, confirma tu dirección de email.","Emails do not match.":"Las direcciones de email no coinciden.","Please complete the reCAPTCHA.":"Por favor, completa el reCAPTCHA.","Please enter a subject line":"Por favor, escribe el asunto del mensaje","Please enter your message":"Por favor, escribe tu mensaje","Please enter a longer message.":"Por favor, escribe un mensaje más largo.","Please enter a shorter message.":"Por favor, escribe un mensaje más corto.","Please enter a valid phone number":"Por favor, escribe un número de teléfono válido.","Please enter a campaign URL":"Por favor, escribe la URL de una recaudación de fondos","Please specify how you know the Campaign Organizer.":"Por favor, explica de qué conoces al organizador de la recaudación de fondos.","Please specify a description.":"Por favor, escribe una descripción.","Please select an option.":"Por favor, selecciona una opción.","Please enter a description.":"Por favor, escribe una descripción.","Please enter a longer description.":"Por favor, escribe una descripción más larga.","Please enter your concerns.":"Por favor, escribe cualquier duda que tengas.","Please enter a publication name":"Por favor, escribe un nombre de publicación válido","Please log in":"Por favor, inicia sesión","The email entered does not match your account\'s email":"La dirección de email indicada no coincide con la dirección de email de tu cuenta","Unexpected error":"Error inesperado","Please enter your name":"Por favor, escribe tu nombre","Please enter your email address":"Por favor, escribe tu dirección de email","Please enter a valid email address.":"Por favor, escribe una dirección de email válida.","Today":"Hoy","Yesterday":"Ayer","[redacted]":"[redactado]","Please enter your password":"Por favor, escribe tu contraseña","Please enter your first name":"Por favor, escribe tu nombre","Please enter a shorter first name.":"Por favor, abrevia tu nombre.","Please enter your last name":"Por favor, escribe tus apellidos","Please enter a shorter last name.":"Por favor, abrevia tus apellidos.","Your email address does not match.":"Tu dirección de e-mail no coincide.","Please enter a password.":"Por favor, escribe una contraseña.","Passwords must be at least twelve characters long.":"La contraseña debe tener un mínimo de doce caracteres.","You have exceeded the maximum amount of characters.":"Has superado el número máximo de caracteres.","Passwords must contain at least one number, symbol, uppercase letter, and lowercase letter.":"Las contraseñas deben incluir al menos un número, un símbolo, una letra mayúscula y una letra minúscula.","Please make a selection...":"Por favor, selecciona una opción...","Yes, I have contacted the Campaign Organizer":"Sí. Me he puesto en contacto con el organizador de la recaudación de fondos.","No, I have not contacted the Campaign Organizer":"No. No me he puesto en contacto con el organizador de la recaudación de fondos.","The situation has been misrepresented.":"La situación se ha tergiversado.","The funds were not used as stated on the campaign.":"Los fondos no se utilizaron de la manera indicada en la recaudación de fondos.","The funds were never delivered to the intended recipient.":"Los fondos nunca se enviaron al destinatario deseado. ","I did not authorize this donation.":"No autoricé este donativo.","I no longer wish to support this campaign.":"Ya no quiero apoyar esta recaudación de fondos.","… {{- userName}} needs your support for {{- campaignTitle}}":"… {{- userName}} necesita tu apoyo para {{- campaignTitle}}","{{- organizerFullName}} and {{- teamMemberFullName}} are organizing this fundraiser to benefit {{- beneficiaryFullName}}.":"{{- organizerFullName}} y {{- teamMemberFullName}} organizan esta recaudación de fondos en beneficio de {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{- teamMemberFullName}} are organizing this fundraiser on behalf of {{- beneficiaryFullName}}.":"{{- organizerFullName}} y {{- teamMemberFullName}} organizan esta recaudación de fondos en nombre de {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser to benefit {{- beneficiaryFullName}}.":"{{- organizerFullName}} y {{count}} otra persona organizan esta recaudación de fondos en beneficio de {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser to benefit {{- beneficiaryFullName}}.:_:plural":"{{- organizerFullName}} y {{count}} otras personas organizan esta recaudación de fondos en beneficio de {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser on behalf of {{- beneficiaryFullName}}.":"{{- organizerFullName}} y {{count}} persona más son quienes organizan esta recaudación de fondos en nombre de {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser on behalf of {{- beneficiaryFullName}}.:_:plural":"{{- organizerFullName}} y {{count}} personas más son quienes organizan esta recaudación de fondos en nombre de {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{- teamMemberFullName}} are organizing this fundraiser.":"{{- organizerFullName}} y {{- teamMemberFullName}} son quienes organizan esta recaudación de fondos.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser.":"{{- organizerFullName}} y {{count}} persona más son quienes organizan esta recaudación de fondos.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser.:_:plural":"{{- organizerFullName}} y {{count}} personas más son quienes organizan esta recaudación de fondos.","{{- organizerFullName}} is organizing this fundraiser to benefit {{- beneficiaryFullName}}.":"{{- organizerFullName}} organiza esta recaudación de fondos en beneficio de {{- beneficiaryFullName}}.","{{- organizerFullName}} is organizing this fundraiser on behalf of {{- beneficiaryFullName}}.":"{{- organizerFullName}} es la persona que organiza esta recaudación de fondos en nombre de {{- beneficiaryFullName}}.","{{- organizerFullName}} is organizing this fundraiser.":"{{- organizerFullName}} es la persona que organiza esta recaudación de fondos.","This team raised {{raisedAmountFormatted}} from {{count}} other donation.":"Este equipo ha recaudado {{raisedAmountFormatted}} de {{count}} donativo más.","This team raised {{raisedAmountFormatted}} from {{count}} other donation.:_:plural":"Este equipo ha recaudado {{raisedAmountFormatted}} de {{count}} donativos más.","Raised {{amount}} from {{count}} donation":"Recaudados {{amount}} de {{count}} donativo","Raised {{amount}} from {{count}} donation:_:plural":"{{amount}} recaudados de {{count}} donativos","Donations are typically 100% tax deductible in the US.":"Los donativos suelen ser totalmente desgravables en los EE. UU.","Donations are typically tax deductible in Canada.":"Los donativos suelen ser desgravables en Canadá.","Donations are typically tax deductible in Australia.":"Los donativos suelen ser desgravables en Australia.","Donations eligible for Gift Aid.":"Donativos que cumplen los criterios para ser del tipo \\"Gift Aid\\".","{{city}}, {{state}}":"{{city}}, {{state}}","Registered nonprofit":"ONG registrada","text":"texto","Organizer and beneficiary":"Organizador y beneficiario","Fundraising team: {{- name}} ({{count}})":"Equipo de recaudación de fondos: {{- name}} ({{count}})","Copy fundraiser link":"Copiar enlace de recaudación de fondos","Share this fundraiser so it can raise up to 5x more.":"Comparte esta recaudación de fondos para recaudar hasta 5 veces más.","Build momentum for this fundraiser.":"Da impulso a esta campaña.","View donation summary":"Ver resumen del donativo","Check out your donation details.":"Consulta los detalles de tu donativo.","Add a comment":"Agrega un comentario","Add a supportive message with your donation.":"Añade un mensaje de apoyo a tu donativo.","Add a profile photo":"Agregar una foto de perfil","Looks good. Your profile photo has been added.":"Te ha quedado muy bien. Se ha agregado la foto de tu perfil.","Let friends and the GoFundMe community know it’s you!":"¡Da a conocer tu campaña entre tus amigos y la comunidad de GoFundMe!","Share on Facebook":"Compartir en Facebook","Tell your Facebook friends about this fundraiser.":"Informa a tus amigos de esta recaudación de fondos.","Join fundraising team":"Únete al equipo de recaudación de fondos","Help {{organizerName}} raise more funds.":"Ayuda a {{organizerName}} a recaudar más fondos.","Thank donors":"Agradece a los donantes","Show appreciation and get more support. Ask donors to share this fundraiser.":"Muestra aprecio y consigue un mayor apoyo. Pide a tus donantes que compartan esta campaña.","Add a donate button":"Añadir un botón Donar","Reach your community on a website or blog.":"Ponte en contacto con tu comunidad en un sitio web o blog.","Donated {{amount}}":"Donó {{amount}}","Hi, I’d really appreciate it if you would share or donate to this GoFundMe, {{fundTitle}} {{- shareLink}}":"Hola. Te agradecería mucho que hicieras un donativo a esta campaña, {{fundTitle}} {{- shareLink}}, o la compartieras si lo deseas","Captcha challenge failed. Please try again.":"Error al escribir los caracteres de la imagen. Por favor, vuelve a intentarlo.","You exceeded the maximum number of tries. Please try again later.":"Has superado el número máximo de intentos. Por favor, inténtalo de nuevo más tarde.","An error occurred. Please try again later.":"Se produjo un error. Por favor, inténtalo de nuevo más tarde.","Sign in to follow this fundraiser":"Inicia sesión para seguir esta recaudación de fondos","Sign in to post your comment":"Inicia sesión para publicar tu comentario","Reset instructions sent to {{email}}":"Instrucciones para restablecer enviadas a {{email}}","Please check your email & password or please sign in with your Facebook account.":"Por favor, comprueba tu email y contraseña o inicia sesión con tu cuenta de Facebook.","Please check your email & password":"Por favor, revisa tu email y contraseña"}},"it_IT":{"apps-campaign":{"Better Business Bureau":"Better Business Bureau","Accredited business":"Azienda accreditata","Created {{dateFormatBasedOnLocal}}":"Creata il {{dateFormatBasedOnLocal}}","Just now":"In questo momento","Created {{count}} hour ago":"Creata {{count}} ora fa","Created {{count}} hour ago:_:plural":"Creata {{count}} ore fa","Created {{count}} day ago":"Creata {{count}} giorno fa","Created {{count}} day ago:_:plural":"Creata {{count}} giorni fa","Thank you for your donation. A receipt has been sent to <1>{{donorEmail}}</1>":"Grazie per la tua donazione. È stata inviata una ricevuta a <1>{{donorEmail}}</1>","by":"da","for":"per","Team fundraiser":"Raccolta fondi in team","Link Copied":"Link copiato","Anonymous":"Anonima","In partnership with<1></1><2>{{partnerName}}</2>":"In collaborazione con <1></1><2>{{partnerName}}</2>","See all":"Mostra tutto","This fundraiser is located near you":"Questa raccolta fondi si svolge vicino a te","{{- recentDonorsStr}} person just donated":"{{- recentDonorsStr}} persona ha appena fatto una donazione","{{- recentDonorsStr}} person just donated:_:plural":"{{- recentDonorsStr}} persone hanno appena fatto una donazione","This fundraiser is no longer accepting donations. If you are the organizer, beneficiary, team member, or donor,<1></1><2>sign in</2><3></3>to see additional information.":"La raccolta fondi non accetta più donazioni. Se sei l\'organizzatore, il beneficiario, un membro del team o un donatore <1><2>accedi<3>per vedere ulteriori informazioni.","The organizer has currently disabled new donations to this fundraiser.":"L\'organizzatore ha momentaneamente disattivato le donazioni per questa raccolta fondi.","This fundraiser has been deactivated by the organizer.":"Questa raccolta fondi è stata disattivata dall\'organizzatore.","Learn more":"Ulteriori informazioni","Copy to clip board":"Copia negli appunti","Fundraiser link copied":"Link della raccolta fondi copiato","Copy to clipboard":"Copia negli appunti","Now paste this link into a Facebook post, Messenger, or any Facebook groups you\'re in.":"Ora incolla questo link in un post di Facebook, su Messenger o in qualsiasi gruppo Facebook di cui fai parte.","Copy your fundraiser link and paste it into a Facebook post, Messenger, or any Facebook groups you’re in.":"Copia il link per la tua raccolta fondi e incollalo in un post di Facebook, su Messenger o in qualsiasi gruppo Facebook di cui fai parte.","Questions about where to share this link?":"Hai domande su dove condividere questo link?","<0>Tip:</0><1></1>Paste this fundraiser link anywhere.":"<0>Suggerimento:</0> <1> </1>Incolla questo link della raccolta fondi dove preferisci.","Collapse text":"Comprimi il testo","Read more":"Mostra di più","Edit":"Modifica","Delete":"Elimina","Edited":"Modificato","{{name}}<1></1>donated<3></3><4>{{donationAmount}}</4>":"{{name}}<1></1>ha donato<3></3><4>{{donationAmount}}</4>","{{name}}<1></1>commented":"{{name}}<1></1>ha commentato","Campaign organizer":"Organizzatore della raccolta fondi","Beneficiary":"Beneficiario","GoFundMe Guarantee":"Garanzia GoFundMe","Only donations on our platform are protected by the GoFundMe Guarantee.":"Solo le donazioni effettuate sulla nostra piattaforma sono protette dalla Garanzia GoFundMe.","Donate now":"Fai una donazione","Your donation":"La tua donazione","Recent donation":"Donazione recente","Top donation":"Migliore donazione","First donation":"Prima donazione","Offline":"Donazione offline","Become an early supporter":"Diventa uno dei primi sostenitori","Become the first supporter":"Diventa il primo sostenitore","Your donation matters":"La tua donazione è importante","In the rare case something isn’t right, we will work with you to determine if misuse occurred.":"Nella rara eventualità che si verifichi un problema, collaboreremo con te per stabilire se si è trattato di un uso improprio.","Email":"Email","Embed HTML":"Incorpora HTML","Messenger":"Messenger","Facebook":"Facebook","<0>We use cookies</0> to enable features and market content. Click “That’s OK” to add cookies. View<2></2><3>privacy policy</3><4></4>or<6></6><7>manage cookies.</7>":"<0>Utilizziamo i cookie</0> per abilitare funzionalità e contenuti di mercato. Clicca su “Va bene” per aggiungere i cookie. Visualizza l\'<2></2><3>Informativa sulla Privacy</3><4></4>o<6></6><7>gestisci i cookie.</7>","That\'s OK":"Va bene","<0>As stated on the banner, GoFundMe uses cookies to enable features and market content to provide you with an improved experience. We consider these cookies to be non-essential, pursuant to our<1></1><2>privacy policy.</2><3></3>When you click “That’s OK” on the banner, we add these non-essential cookies.</0>":"<0>Come indicato nel banner, GoFundMe utilizza i cookie per abilitare funzionalità e contenuti di mercato al fine di offrirti un\'esperienza migliore. Consideriamo questi cookie come non essenziali, ai sensi della nostra<1></1><2>Informativa sulla privacy.</2><3></3>Quando clicchi su “Accetto” sul banner, aggiungiamo questi cookie non essenziali.</0>","Cookie Preferences":"Preferenze sui cookie","Close cookie modal":"Chiudi il cookie Modal","We value your privacy":"Diamo valore alla tua privacy","Here in this Cookie Preferences page, the non-essential cookies category is broken down\\n                            further into functional and marketing, as you can see below. You can change your\\n                            preferences as to both functional and marketing cookies here. When you click “Save” on\\n                            this page, we will add only those non-essential cookies you select.":"Qui, in questa pagina delle Preferenze sui cookie, la categoria dei cookie non essenziali è ulteriormente suddivisa\\n in funzionali e di marketing, come mostrato di seguito. Qui puoi modificare le tue preferenze sia\\n per quanto riguarda i cookie funzionali che di marketing. Quando clicchi su “Salva” in questa pagina, aggiungeremo solo\\n i cookie non essenziali che selezioni.","Marketing cookies":"Cookie di marketing","Enable":"Abilita","GoFundMe collects information regarding user navigation to provide sponsored content\\n                            relevant to our products on other sites. Specifically, if you start a fundraiser on\\n                            GoFundMe and you do not publish that fundraiser, GoFundMe may then show a banner ad the\\n                            next time you are on Facebook.":"GoFundMe raccoglie informazioni sulla navigazione degli utenti per fornire contenuti sponsorizzati pertinenti\\n ai nostri prodotti su altri siti. Nello specifico, se avvii una raccolta fondi su GoFundMe e non\\n la pubblichi, GoFundMe potrebbe mostrarti un banner pubblicitario la prossima volta che sarai su Facebook.","Functional cookies":"Cookie funzionali","We use data collected with these cookies to improve your experiences on the GoFundMe\\n                            platform, as well as avoiding bugs or testing new features.":"Utilizziamo i dati raccolti con questi cookie per migliorare la tua esperienza sulla piattaforma GoFundMe,\\n nonché per evitare bug o testare nuove funzionalità.","Essential cookies":"Cookie essenziali","Always enabled":"Sempre abilitati","Data is collected by these cookies to offer basic functions, to ensure that the GoFundMe\\n                            Platform functions technically, to keep track of your settings and activities, and for\\n                            security or fraud prevention purposes.":"Questi cookie raccolgono dati per offrirti funzioni base, per garantire che la Piattaforma GoFundMe\\n funzioni, per tenere traccia delle tue impostazioni e attività e per finalità di sicurezza\\n o prevenzione delle frodi.","Enable all and close":"Abilita tutto e chiudi","Enable all":"Abilita tutte","Save and close":"Salva e chiudi","Save":"Salva","Show less":"Mostra di meno","Show more":"Mostra di più","Previous image":"Immagine precedente","Next image":"Immagine successiva","Image {{i}} of {{t}}":"Immagine {{i}} di {{t}}","Previous 10 images":"10 immagini precedenti","Next 10 images":"10 immagini successive","Close image gallery":"Chiudi la galleria","Delete this image":"Elimina l\'immagine","Instagram":"Instagram","Copy and paste this link on your Instagram bio":"Copia e incolla questo link alla tua biografia di Instagram","Fundraiser link":"Link della raccolta fondi","Link copied":"Link copiato","Something went wrong.":"Si è verificato un problema.","Share on Instagram":"Condividi su Instagram","Back to sharing":"Torna alla condivisione","LinkedIn":"LinkedIn","Hi, I’d really appreciate it if you would share or donate to this GoFundMe.":"Ciao, ti chiedo gentilmente di fare una donazione o di condividere la mia raccolta fondi GoFundMe.","Your password must have:":"La password deve avere:","At least 12 characters":"Almeno 12 caratteri","1 uppercase letter":"1 lettera maiuscola","1 lowercase letter":"1 lettera minuscola","1 number":"1 numero","1 symbol":"1 simbolo","Print Poster":"Stampa una locandina","Print":"Stampa","{{raisedAmountString}}<1></1><2>{{sameCurrencyCode}} raised</2>":"{{raisedAmountString}}<1></1><2>{{sameCurrencyCode}} raccolti</2>","{{raisedAmountString}}<1></1><2>{{sameCurrencyCode}} raised of {{goalAmountNBSP}} goal</2>":"{{raisedAmountString}}<1></1><2>{{sameCurrencyCode}} raccolti su un obiettivo di {{goalAmountNBSP}}</2>","{{goalAmountNBSP}}<1></1><2>{{sameCurrencyCode}} goal</2>":"Obiettivo di {{goalAmountNBSP}}<1></1><2>{{sameCurrencyCode}}</2>","share":"condividi","Share as much as possible":"Condividi il più possibile","Try using all sharing options. Telling people about your fundraiser is the only way to start raising donations.":"Cerca di usare tutte le opzioni di condivisione. Parlare a tutti della tua raccolta fondi è l\'unico modo per iniziare a raccogliere donazioni.","Text":"SMS","donor":"donatore","donors":"donatori","shares":"condivisioni","follower":"follower","followers":"follower","Fundraiser Stats":"Statistiche sulla raccolta fondi","Share":"Condividi","By continuing, you agree with GoFundMe<1></1><2>terms</2><3></3>and<5></5><6>privacy policy</6>":"Continuando, accetti i<1></1><2>termini</2><3></3>e<5></5><6>l\'informativa sulla Privacy</6>","Preview email":"Anteprima dell\'email","Twitter":"Twitter","{{article}} by {{- authorName}}":"{{article}} di {{- authorName}}","See older updates":"Vedi i vecchi aggiornamenti","WhatsApp":"WhatsApp","Your donation is made to PayPal Giving Fund Australia (ABN 65 105 950 945), a Public Ancillary Fund and a charity registered with the Australian Charities and Not-for-profits Commission, subject to its<1></1><2>terms</2>.":"La donazione viene gestita da PayPal Giving Fund Australia (ABN 65 105 950 945), fondo pubblico ausiliario ed ente benefico registrato dall\'Australian Charities and Not-for-profits Commission e soggetto ai sui <1><2>termini</2>.","While GoFundMe does not have a platform fee, PayPal Giving Fund Australia receives your donation after deduction of transaction<1></1><2>fees</2><3></3>and will grant funds to your recommended charity on a monthly basis.*":"La donazione, al netto delle <1><2>tariffe di transazione</2><3></3>, viene inviata a PayPal Giving Fund Australia che quindi accredita i fondi all\'ente benefico prescelto con cadenza mensile.*","*If, after reasonable efforts, PayPal Giving Fund Australia cannot deliver donations to this<1></1>charity, it will grant funds to another charity per PayPal Giving Fund Australia\'s<3></3><4>policies</4>.":"*Se dopo vari tentativi, PayPal Giving Fund Australia non è in grado di inviare le donazioni a questa <1></1>organizzazione, le invierà a un altro ente benefico come indicato nelle<3></3><4>regole</4>di PayPal Giving Fund Australia.","Donations raised benefit:":"Benefit per le donazioni raccolte:","How charity fundraisers work":"Come funziona la raccolta fondi per enti benefici","Your donation is made to PayPal Giving Fund Canada, a charity registered with the Canada Revenue Agency (No. 812867752RR0001), subject to its<1></1><2>terms</2>.":"La donazione viene gestita da PayPal Giving Fund Canada, un ente di beneficenza registrato presso l\'agenzia Canada Revenue (N. 812867752RR0001), in base ai <1></1><2>termini</2>.","While GoFundMe does not have a platform fee, PayPal Giving Fund Canada receives your donation after deduction of transaction<1></1><2>fees</2><3></3>and will grant funds to your recommended charity on a monthly basis.*":"La donazione, al netto delle </1><2>tariffe di transazione</2><3></3>, viene inviata a PayPal Giving Fund Canada che quindi accredita i fondi all\'ente benefico prescelto con cadenza mensile.*","*If, after reasonable efforts, PayPal Giving Fund Canada cannot deliver donations to this<1></1>charity, it will grant funds to another charity per PayPal Giving Fund Canada\'s<3></3><4>policies</4>.":"*Se dopo vari tentativi, PayPal Giving Fund Canada non è in grado di inviare le donazioni a questa<1></1>organizzazione, le invierà a un altro ente benefico come indicato nelle<3></3><4>regole</4>di PayPal Giving Fund Canada.","Support":"Assistenza","Contribute":"Contribuisci","Buy me a coffee":"Offrimi un caffè","Show appreciation":"Dimostra la tua gratitudine","Start a GoFundMe":"Crea una raccolta fondi GoFundMe","Support this cause":"Sostieni questa causa","{{- userName}} needs your help today! {{- campaignTitle}}":"Oggi {{- userName}} ha bisogno del tuo aiuto! {{- campaignTitle}}","Fundraiser for {{- userName}} by {{- campaignOrganizer}} : {{- campaignTitle}}":"Raccolta fondi per {{- userName}} creata da {{- campaignOrganizer}} : {{- campaignTitle}}","Fundraiser by {{- userName}} : {{- campaignTitle}}":"Raccolta fondi di {{- userName}} : {{- campaignTitle}}","{{- campaignTitle}}, organized by {{- campaignOrganizer}}":"{{- campaignTitle}}, organizzata da {{- campaignOrganizer}}","See more":"Ulteriori informazioni","See top donations":"Vedi le migliori donazioni","Continue reading":"Continua a leggere","Updates":"Aggiornamenti","Image {{imageIndex}} of {{totalImages}}. Click to view all images":"Immagine {{imageIndex}} di {{totalImages}}. Clicca per vedere tutte le immagini","Image {{imageIndex}} of {{totalImages}}":"Immagine {{imageIndex}} di {{totalImages}}","Photo limit reached":"Limite foto raggiunto","Add more photos":"Aggiungi altre foto","Add photos to comment":"Aggiungi foto per commentare","I donated because...":"Ho fatto una donazione perché...","Add this public comment to the fundraiser.":"Aggiungi questo commento pubblico alla raccolta fondi.","Your donation will be displayed as Anonymous, and this comment will not show up publicly on the campaign.":"La tua donazione sarà visualizzata come Anonima e questo commento non sarà pubblico.","Post comment":"Pubblica il commento","Please choose a maximum of 10 photos for your comment.":"Scegli un massimo di 10 foto per il tuo commento.","Please donate and share words of encouragement.":"Dona e dedica qualche parola di incoraggiamento.","Continue":"Continua","Comments":"Commenti","Please select one.":"Scegli un\'opzione.","Yes, I have contacted the Campaign Organizer.":"Sì, ho contattato l\'organizzatore della raccolta fondi.","No, I have not contacted the Campaign Organizer.":"No, non ho contattato l\'organizzatore della raccolta fondi.","They are a family member":"È un membro della mia famiglia","They are a friend or acquaintance":"È un amico o un conoscente","I do not know the organizer of this campaign":"Non conosco l\'organizzatore di questa raccolta fondi","Your Name":"Il tuo nome","Your Phone Number":"Numero di telefono","Required in case our team needs to contact you for further details.":"Richiesto se il nostro team avesse bisogno di contattarti per ulteriori dettagli.","Your Email":"Indirizzo email","Confirm Email":"Conferma l\'email","Page URL":"URL della pagina","Please enter the URL in this format: https://www.gofundme.com/f/example-campaign":"Inserisci l\'URL in questo formato: https://www.gofundme.com/f/example-campaign","I don\'t know the page URL":"Non conosco l\'URL della pagina","Have you already contacted the organizer of this campaign?":"Hai già contattato l\'organizzatore di questa raccolta fondi?","How do you know the organizer of this campaign?":"In che modo hai conosciuto l\'organizzatore di questa raccolta fondi?","Please explain your relationship to the Campaign Organizer.":"Descrivi la tua relazione con l\'organizzatore della raccolta fondi.","How much money did you receive from the campaign organizer?":"Quanti fondi hai ricevuto dall\'organizzatore della raccolta fondi?","Why do you believe this person will not deliver the funds to you?":"Perché ritieni che questa persona non ti invierà i fondi?","Please attach a copy of a government issued photo ID":"Allega la copia di un documento d\'identità di emissione governativa","Please upload only JPEG, GIF, PNG or PDF files. The file size must be less than 5MB.":"Carica solo file JPEG, GIF, PNG o PDF. Le dimensioni del file devono essere inferiori a 5 MB.","Upload any evidence you may have":"Carica eventuali prove di cui disponi","Send Email":"Invia email","Message Subject":"Oggetto","Your Message":"Il tuo messaggio","I am requesting a refund because...":"Sto chiedendo un rimborso perché...","Describe your concerns about how the funds are being used.":"Spiega le tue preoccupazioni riguardo al modo in cui saranno utilizzati i fondi.","40 characters minimum":"Minimo 40 caratteri","Yes, I know the Campaign Organizer.":"Sì, conosco l\'organizzatore della raccolta fondi.","No, I do not know the Campaign Organizer":"No, non conosco l\'organizzatore della raccolta fondi","I am a beneficiary.":"Sono un beneficiario.","I am a donor.":"Sono un donatore.","I am an individual concerned about this campaign.":"Sono una persona con dei dubbi su questa raccolta fondi.","I am involved in a legal dispute with the Campaign Organizer.":"Sono coinvolto in una controversia legale con l\'organizzatore della raccolta fondi.","This campaign includes libelous statements.":"Questa raccolta fondi riporta dichiarazioni diffamatorie.","Campaign includes factually incorrect information.":"La raccolta fondi contiene informazioni non corrette.","Campaign Organizer has not used funds for the stated purpose.":"L\'organizzatore della raccolta fondi non ha usato i fondi per il fine dichiarato.","They are impersonating someone or have copied another campaign.":"L\'organizzatore sta impersonando qualcun altro o ha copiato un\'altra raccolta fondi.","Please explain your concern(s) in detail.":"Esprimi nel dettaglio le tue perplessità.","Which statements are libelous and why?":"Quali dichiarazioni sono diffamatorie e perché?","Which statements are incorrect and why?":"Quali dichiarazioni sono erronee e perché?","How have the campaign’s donations been spent?":"Come sono state spese le donazioni della raccolta fondi?","What is the original campaign link/title?":"Qual è il link/titolo originale della raccolta fondi?","Please describe your concerns":"Esprimi le tue perplessità","How do you know the campaign organizer?":"Come conosci l\'organizzatore della raccolta fondi?","How are you connected to the campaign?":"Qual è il tuo legame con questa raccolta fondi?","How much money is being withheld and why?":"Quanto denaro è stato trattenuto e perché?","Why are you concerned about your donation?":"Perché hai dei dubbi sulla tua donazione?","Please describe your concerns.":"Esprimi le tue perplessità.","Do you know the Campaign Organizer?":"Conosci l\'organizzatore della raccolta fondi?","Which best describes you?":"Dicci chi sei:","Publication":"Pubblicazione","Self-Service":"Self-service","Please select an option which best describes you to see relevant information.":"Seleziona l\'opzione che fa al tuo caso in modo da poter vedere informazioni più rilevanti.","For customized help, please sign in.":"Per un\'aiuto personalizzato, effettua l\'accesso.","Sign In":"Entra","Top Answers":"Risposte migliori","How do I get a refund?":"Come si ottiene un rimborso?","How do I withdraw money?":"Come posso prelevare i fondi?","Is my country supported?":"Il mio Paese è supportato?","Can I withdraw money?":"Posso prelevare i fondi?","How do I reset my password?":"Come faccio a reimpostare la mia password?","How do I invite someone to withdraw?":"Come si invita qualcuno a prelevare?","I can\'t withdraw my funds, now what?":"Non riesco a prelevare i fondi, che fare?","How do your fees work?":"Come funzionano le tariffe?","What about taxes and stuff?":"Cosa devo sapere sulle tasse?","GoFundMe homepage":"Homepage di GoFundMe","Choose your language":"Scegli la lingua","How GoFundMe works":"Come funziona","Common questions":"Domande frequenti","Success stories":"Storie di successo","Supported countries":"Paesi supportati","Team fundraising":"Raccolta fondi con un team","Donate button":"Pulsante Dona","Support COVID-19 fundraisers":"Sostieni le raccolte fondi relative al COVID-19","Why GoFundMe":"Perché GoFundMe?","Medical":"Spese mediche","Emergency":"Emergenze","Memorial":"Commemorazioni","Education":"Istruzione","Nonprofit":"Nonprofit","Fundraise for":"Raccogli fondi per","Help center":"Aiuto","Blog":"Blog","GoFundMe Stories":"Storie di GoFundMe","Press center":"Rassegna stampa","Careers":"Carriere","About":"Chi siamo","Resources":"Risorse","Terms":"Termini","Privacy":"Privacy","Legal":"Informazioni legali","Do Not Sell My Personal Information":"Non vendere i miei dati personali","Hide":"Nascondi","Show":"Mostra","Hide guidance cards":"Nascondi le carte guida","Show guidance cards":"Mostra le carte guida","Previous card":"Carta precedente","Next card":"Carta successiva","You are donating to<1></1><2>PayPal Giving Fund Ireland</2>, a registered charity (No. 20205692), which will email you a receipt for your donation.":"Stai donando a<1></1><2>PayPal Giving Fund Ireland</2>, un ente benefico registrato (n. 20205692), che ti invierà una ricevuta per la tua donazione.","*In rare cases, a charity may cease to meet PayPal Giving Fund Ireland’s legal or other eligibility requirements to receive funds or may not accept the funds. In such cases, PayPal Giving Fund Ireland will<1></1><2>reassign the funds</2><3></3>to another charity and (wherever possible) seek a new recommendation from you.":"*In rari casi, un ente benefico può non soddisfare più i requisiti di idoneità legale o di altro tipo di PayPal Giving Fund Ireland per ricevere i fondi, o potrebbe non accettare i fondi stessi. In tali casi, PayPal Giving Fund Ireland<1></1><2>riassegnerà i fondi</2><3></3>a un altro ente benefico e, se possibile, ti chiederà una scelta alternativa in merito.","The charity will typically receive the funds from PayPal Giving Fund within 15-45 days (90 days if the charity has not enrolled).*":"L\'ente di beneficenza di solito riceve i fondi da PayPal Giving Fund entro 15-45 giorni (90 giorni se non è iscritto a PayPal Giving Fund).","Open share modal":"Apri share modal","Donate":"Dona","Sign in":"Entra","Sign out":"Esci","Donations you\'ve made":"Donazioni che hai fatto","Account settings":"Impostazioni dell\'account","Your fundraisers":"Le tue raccolte fondi","Open navigation menu":"Apri il menu di navigazione","Close navigation menu":"Chiudi il menu di navigazione","My campaigns":"Le mie raccolte fondi","Close Modal":"Chiudi Modal","Start":"Inizia","Don\'t have an account? ":"Non hai un account? ","Sign up":"Registrati","Enter the email address associated with your account, and we\'ll email you a link to reset your password":"Inserisci l\'indirizzo email associato al tuo account, ti invieremo un link via email per reimpostare la password","Email address":"Indirizzo email","Request new password":"Richiedi la nuova password","Don\'t have an account?<1></1><2>Sign up</2>":"Non hai un account?<1></1><2>Registrati</2>","Forgot your password?":"Hai dimenticato la password?","Password":"Password","Sign in to GoFundMe":"Entra in GoFundMe","Already have an account?<1></1><2>Sign in</2>":"Hai già un account?<1></1><2>Entra</2>","Please<1></1><2>sign in</2><3></3>to access your account.":"<1></1><2>Entra</2><3></3>per accedere al tuo account.","First Name":"Nome","Last Name":"Cognome","Confirm email address":"Conferma l\'indirizzo email","Set password":"Imposta la password","We will never post without your permission":"Non pubblicheremo mai senza il tuo consenso","Continue with Facebook":"Continua su Facebook","or":"o","Use my email address":"Usa il mio indirizzo email","You are donating to<1></1><2>PayPal Giving Fund</2><3></3>UK, a registered charity (No. 1110538), which will email you a receipt for your donation and claim Gift Aid where eligible.":"Stai facendo una donazione a <1></1><2>PayPal Giving Fund</2><3></3> del Regno Unito, ente benefico registrato (Num. 1110538). Riceverai la ricevuta della donazione in un\'email e, se possibile, potrai ottenere un Gift Aid.","<0></0>*In very limited cases, a recommended charity may cease to meet PayPal Giving Fund\'s legal or other eligibility<2></2><3>requirements</3><4></4>. In such cases, PayPal Giving Fund will reassign the funds to a similar charity, and (wherever possible) seek a new recommendation from donors.":"<0></0>*In alcuni rari casi, l\'ente benefico consigliato potrebbe non essere più conforme ai<2></2><3>requisiti</3><4></4>legali o di altro tipo di PayPal Giving Fund. In tale caso, PayPal Giving Fund riassegnerà i fondi a un ente benefico simile e, se possibile, chiederà consigli ai donatori.","The charity will typically receive the funds from PayPal Giving Fund within 15-45 days of your donation if the charity has enrolled (or 90 days if the charity has not yet enrolled). Unlike other platforms, 100% of any Gift Aid will go to the charity as well.":"L\'ente benefico di solito riceve i fondi da PayPal Giving Fund entro 15 o 45 giorni dalla donazione se l\'ente benefico è iscritto (o 90 giorni se non lo è). A differenza di altre piattaforme, il 100% delle donazioni Gift Aid va all\'ente benefico.","PayPal Giving Fund will grant your donation to {{charityName}} within 15-45 days (Or 90 days if the charity has not yet enrolled)*.":"PayPal Giving Fund trasferirà la tua donazione a {{charityName}} entro 15-45 giorni (o 90 giorni se l\'ente di beneficenza non è ancora iscritto)*.","*If, after reasonable efforts have been made, PayPal Giving Fund cannot grant the funds to this charity, they will contact you before reassigning the funds in accordance with<1></1><2>PayPal Giving Fund\'s Policies</2>.":"*Se dopo vari tentativi, PayPal Giving Fund non riuscirà a inviare le donazioni a questo ente di beneficenza, ti contatterà prima di riassegnare i fondi come indicato nelle<1></1><2>regole di PayPal Giving Fund</2>.","How non-profit fundraisers work":"Come funziona la raccolta fondi per le non-profit","Donations are typically 100% tax deductible in the US. Your donation is made to PayPal Giving Fund (a 501(c)(3) charitable organization) to benefit your chosen charity.":"Negli Stati Uniti di solito le donazioni sono fiscalmente deducibili al 100%. La tua donazione viene effettuata tramite PayPal Giving Fund (un\'organizzazione 501(c)(3)) a favore dell\'ente di beneficenza da te scelto.","Fundraiser updates ({{totalUpdates}})":"Aggiornamenti sulla raccolta fondi ({{totalUpdates}})","Fundraiser updates":"Aggiornamenti della raccolta fondi","Close fundraiser updates modal":"Chiudi gli aggiornamenti modal della raccolta fondi","Thanks for donating":"Grazie per le donazioni","Boost this fundraiser":"Aiuta questa raccolta fondi","Be the first to help":"Fai tu la prima donazione","Your early support will go a long way and help inspire others to donate.":"Il tuo sostegno immediato porterà grandi risultati nel tempo e farà venire voglia ad altri di donare.","Report fundraiser":"Segnala la raccolta fondi","See top":"Ordina per importo","Donations":"Donazioni","Contact Us - Answer Found":"Contattaci - Risposta trovata","Answer Found!":"Risposta trovata!","Thanks very much!":"Grazie mille!","If you ever need some extra help, the GoFundMe Team is standing by!":"Se hai bisogno di un aiuto in più, il team GoFundMe è qui pronto!","Return to Help Center":"Torna alla pagina Aiuto","Contact Us - Message Sent!":"Contattaci - Messaggio inviato.","Message Sent":"Messaggio inviato","Thank you for your patience":"Grazie per la collaborazione","We\'re sorry, but that campaign cannot be found. Please check the link URL and try again.":"Non riusciamo a trovare la raccolta fondi richiesta. Controlla l\'URL del link e riprova.","Page Not Found":"Pagina non trovata","Home":"Home","Campaign Not Found":"Raccolta fondi non trovata","Search gofundme.com for":"Cerca su gofundme.com","Show your support by going to this link":"Mostra il tuo sostegno visitando questo link","Pagination navigation":"Navigazione impaginazione","Previous page":"Pagina precedente","Previous":"Precedente","Next page":"Pagina successiva","Next":"Avanti","Page {{page}} of {{nbPages}}":"Pagina {{page}} di {{nbPages}}","Search in progress":"Ricerca in corso","Fundraisers for \\"{{query}}\\" in all locations":"Raccolte fondi per \\"{{query}}\\" in tutte le località","No results found for \\"{{query}}\\" in all locations":"Nessun risultato trovato per \\"{{query}}\\" in tutte le località","Search results for {{- query}}":"Risultati di ricerca per {{- query}}","GoFundMe: {{- searchQuery}}":"GoFundMe: {{- searchQuery}}","The leader in online fundraising":"Il più grande sito al mondo di crowdfunding sociale e personale","We\'re sorry. Something went wrong. Please wait one minute and try again.":"Ci dispiace. Si è verificato un problema. Attendi un minuto e riprova.","Unknown Error":"Errore sconosciuto","Join this list. <1>Donate now.</1>":"Iscriviti a questa lista. <1>Fai una donazione.</1>","Top":"Max","Donations ({{totalDonations}})":"Donazioni ({{totalDonations}})","Close all donations modal":"Chiudi modal per tutte le donazioni","Close":"Chiudi","<0>What is this? <1></1><2>Learn more</2></0>":"<0>Cos\'è questo? <1></1><2>Ulteriori informazioni</2></0>","Large":"Grande","Medium":"Medio","Small (Button only)":"Piccolo (solo pulsante)","Copy and paste the following embed code:":"Copia e incolla il seguente codice:","Copy HTML code":"Copia il codice HTML","Copied!":"Copiato.","Something went wrong. Please select the code block to manually copy it.":"Si è verificato un problema. Seleziona il blocco di codice manualmente per copiarlo.","Preview":"Anteprima","Select the button text":"Seleziona il testo del pulsante","Have you seen \\"{{- title}}\\"?":"Hai visto la raccolta fondi \\"{{- title}}\\"?","Hello \\n \\n I thought you might be interested in supporting this GoFundMe, {{- shareLink}}. \\n \\n Even a small donation could help {{- name}} reach their fundraising goal. And if you can\'t make a donation, it would be great if you could share the fundraiser to help spread the word. \\n \\n Thanks for taking a look!":"Ciao \\n \\n ti potrebbe forse interessare questa raccolta fondi GoFundMe, {{- shareLink}}. \\n \\n Anche una piccola donazione può aiutare {{- name}} a raggiungere l\'obiettivo. Se non vuoi fare una donazione, puoi magari condividere la raccolta fondi e contribuire a diffondere il messaggio. \\n \\n Grazie per l\'attenzione.","Hi,\\n\\nI\'d really appreciate it if you would share or donate to this GoFundMe.\\n\\n*{{- fundTitle}}*\\n\\n{{- description}}\\n\\nRead more here {{- fundUrl}}\\n\\nForward this message to your contacts to help this campaign reach its goal!":"Ciao,\\n\\nti chiedo gentilmente di fare una donazione o di condividere questa raccolta fondi GoFundMe.\\n\\n*{{- fundTitle}}*\\n\\n{{- description}}\\n\\nLeggi di più qui {{- fundUrl}}\\n\\nInoltra questo messaggio ai tuoi contatti per aiutare questa raccolta fondi a raggiungere il suo obiettivo!","Hi, I\'d really appreciate it if you would share or donate to this GoFundMe, {{- shareLink}}":"Ciao, ti chiedo gentilmente di fare una donazione o di condividere la mia raccolta fondi GoFundMe, {{- shareLink}}","Help by sharing":"Aiuta condividendo","Fundraisers shared on social networks raise up to 5x more":"Le raccolte fondi condivise sui social media raccolgono 5 volte più fondi","Copy":"Copia","Copy link":"Copia link","Back":"Indietro","Top Donations":"Vedi le donazioni maggiori","See all donations":"Vedi tutte le donazioni","All":"Tutti","Be a top donor for {{- beneOrOrganizerName}} with {{- averageTopDonation}} or more.":"Diventa uno dei migliori donatori per {{- beneOrOrganizerName}} con {{- averageTopDonation}} o più.","<0>Donating outside of GoFundMe</0><1>Donations on other platforms are not protected by the GoFundMe Guarantee. In the rare case that something isn’t right on GoFundMe, we work with you to determine if misuse occurred.<1></1><2>Learn more</2></1><2>Donate now</2>":"<0>Donazioni al di fuori di GoFundMe</0><1>Le donazioni effettuate su altre piattaforme non sono protette dalla Garanzia GoFundMe. Nella rara eventualità che si verifichi un problema su GoFundMe, collaboreremo con te per stabilire se si è trattato di un uso improprio.<1></1><2>Ulteriori informazioni</2></1><2>Dona ora</2>","Close modal":"Chiudi Modal","Suggestions":"Suggerimenti","Make a Beneficiary Claim":"Presenta una richiesta come beneficiario","Make a Beneficiary Claim | GoFundMe Support":"Presenta una richiesta come beneficiario | Assistenza GoFundMe","Contact Us":"Contattaci","Make a Donor Claim":"Presenta una richiesta come donatore","Make a Donor Claim | GoFundMe Support":"Presenta una richiesta come donatore | Assistenza GoFundMe","Report a Fundraiser":"Segnala la raccolta fondi","Report a Fundraiser | GoFundMe Support":"Segnala la raccolta fondi | Assistenza GoFundMe","Press Contact Form":"Modulo di contatto per la stampa","Press Contact Form | GoFundMe Support":"Modulo di contatto stampa | Assistenza GoFundMe","Send Message":"Invia messaggio","Contact":"Contatto","Write {{firstName}} a message":"Scrivi un messaggio a {{firstName}}","Organizer":"Organizzatore","Cancel":"Annulla","2. Use your donation receipt to<1></1><2>edit your donation comment</2><3></3>or<5></5><6>change your name on a donation</6>.":"2. Usa la ricevuta della donazione per<1></1><2>modificare il tuo commento alla donazione</2><3></3>o<5></5><6>per modificare il tuo nome su una donazione</6>.","If you do not remember your GoFundMe password, please<1></1><2>click here to request a new password</2>.":"Se non ricordi la tua password di GoFundMe,<1></1><2>clicca qui per richiederne una nuova</2>.","If you received an<1></1><2>unexpected refund</2><3></3>for your donation it could be for any of the following reasons:":"Se hai ricevuto un<1></1><2>rimborso inatteso</2><3></3>per la tua donazione, può essere per uno dei seguenti motivi:","Edit My Comment":"Modifica il mio commento","Edit My Name":"Modifica il mio nome","Get Donation Receipt":"Ottieni una ricevuta per la donazione","Refund All Donations":"Rimborsa tutte le donazioni","Update Donation Anonymity":"Aggiorna l\'anonimato della donazione","We can help you with that! Confirm the email address you used to donate.":"Ti aiutiamo noi. Conferma l\'indirizzo email che hai usato per donare.","Editing the information on a donation is quick and easy, and can be done from your donation receipt or through your GoFundMe account.":"Modificare le informazioni su una donazione è un\'operazione semplice e veloce, che si effettua direttamente dalla ricevuta della donazione o dal tuo account GoFundMe.","Actions you can take on your own:":"Azioni che puoi effettuare da solo:","1. Request a new donation receipt by entering your donation email address in the field below.":"1. Richiedi una nuova ricevuta della donazione inserendo l\'indirizzo email usato per la donazione nel campo sottostante.","We can help you with that! If you have a personal fundraiser, please enter the email address you used to create your fundraiser.":"Ti aiutiamo noi. Se hai una raccolta fondi personale, inserisci l\'indirizzo email che hai usato per creare la tua raccolta fondi.","If you have a Certified Charity fundraiser, our Customer Happiness Team can help you with that! Please select an option below in \\"Still need help?\\" and include the link to the fundraiser you\'d like to refund.":"Se hai una raccolta fondi per un ente benefico Certificato, puoi ricevere aiuto dal nostro team Customer Happiness. Scegli un\'opzione in basso in \\"Ho ancora bisogno di aiuto\\" e inserisci il link della raccolta fondi per cui vuoi emettere i rimborsi.","Additional Information:":"Ulteriori informazioni:","Organizer deactivated the fundraiser":"L\'organizzatore ha disattivato la raccolta fondi","Our payment processor wasn\'t able to verify the donation":"Il nostro elaboratore dei pagamenti non è riuscito a fare una verifica sulla donazione","Organizer did not verify their account or withdraw funds within required deadlines":"L\'organizzatore non ha verificato il suo account o non ha trasferito i fondi entro i tempi richiesti","The donation was charged back by the donor":"La donazione è stata riaccreditata dal donatore","The donation was made by the organizer or beneficiary":"La donazione è stata effettuata dall\'organizzatore o dal beneficiario","Please visit the fundraiser to view any updates that the organizer might have posted in regards to refunds, click \'Contact\' beneath the organizer\'s name on their fundraiser to email them with any questions, or reach out to our team if you have questions on how you may be able to still support the cause.":"Visita la raccolta fondi per vedere eventuali aggiornamenti pubblicati dall\'organizzatore sui rimborsi, clicca su \\"Contatta\\" sotto il nome dell\'organizzatore nella sua raccolta fondi per inviargli un\'email con eventuali domande o contatta il nostro team se hai domande su come puoi ancora sostenere questa causa.","Help Center":"Aiuto","Please read below":"Leggi il testo qui sotto","Your Email Address":"Indirizzo email","My question was answered":"La mia domanda ha ricevuto risposta","Still need help?":"Hai ancora bisogno di aiuto?","Chat now":"Chat","Chat":"Chat","Send email":"Invia email","Donations paused":"Donazioni sospese","Our team has contacted the organizer with a solution, and donations will resume once the issue is resolved.":"Il nostro team è già in contatto con l\'organizzatore, le donazioni saranno riattivate quando il problema sarà risolto.","How can I help?":"Come possiamo aiutarti?","Please reach out to the organizer and ask them to sign in to GoFundMe and check their account to resolve the issue.":"Contatta l\'organizzatore e chiedigli di accedere al suo account GoFundMe per risolvere il problema.","Something went wrong. We’re working on it, please try again later or<1></1><2>contact us</2>.":"Si è verificato un problema. Stiamo lavorando per risolverlo, riprova più tardi o<1></1><2>contattaci</2>.","To include a comment with your donation, you must add text and/or upload a photo.":"Per inserire un commento nella tua donazione, aggiungi del testo e/o carica una foto.","{{fileName}}: Please choose a jpeg, jpg, gif, or png file type, and ensure it is smaller than 2048 kb.":"{{fileName}}: scegli un file in formato jpeg, jpg, gif o png e verifica che sia inferiore a 2048 KB.","{{fileName}}: Please try again later.":"{{fileName}}: riprova più tardi.","Show more Support":"Mostra più supporto","Return to campaign":"Torna alla raccolta fondi","Back to previous page":"Indietro alla pagina precedente","Hello \\n \\n I just donated to this GoFundMe, {{- shareLink}}.  Would you be interested in supporting it too? \\n \\n Even a small donation could help {{- name}} reach their fundraising goal. And if you can\'t make a donation, it would be great if you could share the fundraiser to help spread the word. \\n \\n Thanks for taking a look!":"Ciao \\n \\n Ho appena fatto una donazione a questa raccolta fondi GoFundMe, {{- shareLink}}.  Ti andrebbe di sostenerla anche tu? \\n \\n Anche una piccola donazione può aiutare {{- name}} a raggiungere il suo obiettivo. Se non vuoi fare una donazione, puoi condividere la raccolta fondi e contribuire a diffondere il messaggio. \\n \\n Grazie per l\'attenzione.","Hi, I’d really appreciate it if you would share or donate to this GoFundMe, {{- fundTitle}} {{- shareLink}}":"Ciao, ti prego gentilmente di fare una donazione o condividere questa raccolta fondi GoFundMe, {{- fundTitle}} {{- shareLink}}","Hi, I just donated to this GoFundMe and would appreciate it if you would share or donate too. {{- shareLink}}":"Ciao, ho appena fatto una donazione a questa raccolta fondi GoFundMe e ti chiederei gentilmente di condividerla o di fare una donazione anche tu. {{- shareLink}}","Something went wrong. Please select the link and manually copy.":"Si è verificato un problema. Seleziona il link e copialo manualmente.","Now help spread the word":"Aiuta a spargere la voce","By sharing this fundraiser, you increase their chance of success by 5x.":"Condividendo questa raccolta fondi, aumenti le probabilità di successo di 5 volte.","Finished sharing?":"Hai concluso la condivisione?","Sign up to post your comment":"Registrati per pubblicare un commento","Sign up to follow this fundraiser":"Registrati per seguire questa raccolta fondi","Fundraising team ({{count}})":"Team di raccolta fondi ({{count}})","Contact us | GoFundMe Support":"Contattaci | Assistenza GoFundMe","GoFundMe will always respond to your requests as quickly as possible.":"GoFundMe risponderà sempre alle tue richieste nel minor tempo possibile.","Donor protection guarantee":"Garanzia di protezione del donatore","GoFundMe has the first and only guarantee in the industry.":"GoFundMe ha una garanzia per la raccolta fondi.","Simple setup":"Impostazione semplice","You can personalize and share your GoFundMe in just a few minutes.":"Puoi personalizzare e condificere la tua raccolta fondi GoFundMe in pochi minuti.","0% platform fee":"Tariffa dello 0% per il servizio","With a 0% platform fee, you get to keep even more of your money.":"Non ha tariffe di servizio per la piattaforma, quindi puoi tenere quasi tutto il denaro che raccogli.","Mobile app":"App mobile","The GoFundMe app makes it easy to launch and manage your campaign on the go.":"L\'app di GoFundMe rende semplice la creazione e la gestione delle raccolte fondi.","Social reach":"Condivisione sui Social","Harness the power of social media to spread your story and get more support.":"I social media sono uno strumento importante per far conoscere la tua raccolta fondi e ottenere più aiuti.","24/7 expert advice":"Consulenza di esperti 24/7.","Our best in class Customer Happiness agents will answer your questions, day or night.":"I nostri rappresentanti del team Customer Happiness rispondono a tutte le tue domande, giorno e notte.","Fundraisers":"Raccolte fondi","Discover":"Discover","Charity":"Beneficenza","User name":"Nome utente","What is crowdfunding?":"Cos\'è il crowdfunding?","How it works":"Come funziona","Fundraising tips":"Suggerimenti per la raccolta di fondi","Plan your fundraiser":"Pianifica la raccolta dei fondi","Travel & Adventure":"Viaggi e avventure","Medical, Illness & Healing":"Medicina, malattie e guarigione","Missions, Faith & Church":"Missioni, religioni e chiese","Non-Profits & Charities":"Associazioni benefiche e no-profit","Weddings & Honeymoons":"Matrimoni e lune di miele","Other":"Altro","Sports, Teams & Clubs":"Sport, squadra e club","Education & Learning":"Scuola e apprendimento","Volunteer & Service":"Volontariato e servizi","Competitions & Pageants":"Competizioni e spettacoli","Accidents & Emergencies":"Incidenti ed emergenze","Dreams, Hopes & Wishes":"Sogni, speranze e desideri","Animals & Pets":"Animali e animali domestici","Environment":"Ambiente","Rent, Food & Monthly Bills":"Affitto, alimenti e bollette mensili","Birthday Pots":"Regali di compleanno","Babies, Kids & Family":"Bambini, ragazzi e famiglie","Business & Entrepreneurs":"Aziende e imprenditori","Celebrations & Events":"Celebrazioni ed eventi","Community & Neighbors":"Comunità e quartieri","Creative Arts, Music & Film":"Arte, musica e film creativi","Funerals & Memorials":"Funerali e commemorazioni","#1 fundraising platform":"Il sito di raccolta fondi N. 1 al mondo","More people start fundraisers on GoFundMe than on any other platform.":"Sempre più persone preferiscono Gofundme alle altre piattaforme per le raccolte fondi.","Expert advice, 24/7":"Consigli dagli esperti, tutti i giorni a tutte le ore","Contact us with your questions and we’ll answer, day or night.":"Contattaci per qualsiasi domanda, ti risponderemo di giorno o di notte.","Team member":"Membro del team","Sorry, no account found":"Impossibile trovare un account","Your message to {{coFirstName}} successfully sent.":"Il tuo messaggio a {{coFirstName}} è stato inviato.","Your message to {{coFirstName}} failed to send. Please try again later.":"Impossibile inviare il messaggio a {{coFirstName}}. Riprova più tardi.","[email redacted]":"[email modificata]","[phone redacted]":"[telefono modificato]","Please enter your name.":"Inserisci il tuo nome","Please enter a shorter name.":"Inserisci un nome più breve.","Please enter your email address.":"Inserisci il tuo indirizzo email.","Please enter a shorter email address.":"Inserisci un indirizzo email più breve.","Please confirm your email address.":"Conferma il tuo indirizzo email.","Emails do not match.":"Le email non corrispondono.","Please complete the reCAPTCHA.":"Inserisci il CAPTCHA.","Please enter a subject line":"Inserisci l\'oggetto del messaggio","Please enter your message":"Inserisci il messaggio","Please enter a longer message.":"Inserisci un messaggio più lungo.","Please enter a shorter message.":"Inserisci un messaggio più breve","Please enter a valid phone number":"Inserisci un numero di telefono valido","Please enter a campaign URL":"Inserisci l\'URL della raccolta fondi","Please specify how you know the Campaign Organizer.":"Specifica come conosci l\'organizzatore della raccolta fondi","Please specify a description.":"Specifica una descrizione.","Please select an option.":"Seleziona un\'opzione.","Please enter a description.":"Inserisci una descrizione.","Please enter a longer description.":"Inserisci una descrizione più lunga.","Please enter your concerns.":"Specifica i tuoi dubbi.","Please enter a publication name":"Inserisci il nome della testata","Please log in":"Entra nel tuo account","The email entered does not match your account\'s email":"L\'indirizzo email inserito non corrisponde a quello dell\'account","Unexpected error":"Errore inaspettato","Please enter your name":"Inserisci il tuo nome","Please enter your email address":"Inserisci il tuo indirizzo email.","Please enter a valid email address.":"Inserisci un indirizzo email valido.","Today":"Oggi","Yesterday":"Ieri","[redacted]":"[modificato]","Please enter your password":"Inserisci la tua password","Please enter your first name":"Inserisci il tuo nome","Please enter a shorter first name.":"Inserisci un nome più breve.","Please enter your last name":"Inserisci il tuo cognome","Please enter a shorter last name.":"Inserisci un cognome più breve.","Your email address does not match.":"L\'indirizzo email non corrisponde.","Please enter a password.":"Inserisci una password.","Passwords must be at least twelve characters long.":"La password deve essere di almeno dodici caratteri.","You have exceeded the maximum amount of characters.":"Hai superato il numero massimo di caratteri.","Passwords must contain at least one number, symbol, uppercase letter, and lowercase letter.":"La password deve contenere almeno un numero, un simbolo, una lettera maiuscola e una lettera minuscola.","Please make a selection...":"Seleziona...","Yes, I have contacted the Campaign Organizer":"Sì, ho contattato l\'organizzatore della raccolta fondi","No, I have not contacted the Campaign Organizer":"No, non ho contattato l\'organizzatore della raccolta fondi","The situation has been misrepresented.":"La situazione è stata esposta in modo non corretto.","The funds were not used as stated on the campaign.":"I fondi non sono stati utilizzati come indicato sulla raccolta fondi.","The funds were never delivered to the intended recipient.":"I fondi non sono mai stati inviati al destinatario prescelto.","I did not authorize this donation.":"Non ho autorizzato questa donazione.","I no longer wish to support this campaign.":"Non desidero più sostenere questa raccolta fondi.","… {{- userName}} needs your support for {{- campaignTitle}}":"… {{- userName}}  ha bisogno del tuo sostegno per  {{- campaignTitle}}","{{- organizerFullName}} and {{- teamMemberFullName}} are organizing this fundraiser to benefit {{- beneficiaryFullName}}.":"{{- organizerFullName}} e {{- teamMemberFullName}} gestiscono questa raccolta fondi a favore di {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{- teamMemberFullName}} are organizing this fundraiser on behalf of {{- beneficiaryFullName}}.":"{{- organizerFullName}} e {{- teamMemberFullName}} gestiscono questa raccolta fondi in favore di {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser to benefit {{- beneficiaryFullName}}.":"{{- organizerFullName}} e {{count}} altra persona gestiscono questa raccolta fondi a favore di {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser to benefit {{- beneficiaryFullName}}.:_:plural":"{{- organizerFullName}} e altre {{count}} persone gestiscono questa raccolta fondi a favore di {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser on behalf of {{- beneficiaryFullName}}.":"{{- organizerFullName}} e {{count}} altre persone gestiscono questa raccolta fondi in favore di {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser on behalf of {{- beneficiaryFullName}}.:_:plural":"{{- organizerFullName}} e altre {{count}} persone gestiscono questa raccolta fondi in favore di {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{- teamMemberFullName}} are organizing this fundraiser.":"{{- organizerFullName}} e {{- teamMemberFullName}} gestiscono questa raccolta fondi.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser.":"{{- organizerFullName}} e {{count}} altre persone gestiscono questa raccolta fondi.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser.:_:plural":"{{- organizerFullName}} e {{count}} altri organizzano questa raccolta fondi.","{{- organizerFullName}} is organizing this fundraiser to benefit {{- beneficiaryFullName}}.":"{{- organizerFullName}} gestisce questa raccolta fondi a favore di {{- beneficiaryFullName}}.","{{- organizerFullName}} is organizing this fundraiser on behalf of {{- beneficiaryFullName}}.":"{{- organizerFullName}} sta organizzando questa raccolta fondi in favore di {{- beneficiaryFullName}}.","{{- organizerFullName}} is organizing this fundraiser.":"{{- organizerFullName}} organizza questa raccolta fondi","This team raised {{raisedAmountFormatted}} from {{count}} other donation.":"Questo team ha raccolto {{raisedAmountFormatted}} da {{count}} altra donazione.","This team raised {{raisedAmountFormatted}} from {{count}} other donation.:_:plural":"Questo team ha raccolto {{raisedAmountFormatted}} da {{count}} altre donazioni.","Raised {{amount}} from {{count}} donation":"{{amount}} raccolti da {{count}} donazioni","Raised {{amount}} from {{count}} donation:_:plural":"{{amount}} raccolti da {{count}} donazioni","Donations are typically 100% tax deductible in the US.":"Negli Stati Uniti di solito le donazioni sono fiscalmente deducibili al 100%.","Donations are typically tax deductible in Canada.":"In Canada di solito le donazioni sono fiscalmente deducibili.","Donations are typically tax deductible in Australia.":"In Australia di solito le donazioni sono fiscalmente deducibili.","Donations eligible for Gift Aid.":"Donazioni idonee per Gift Aid.","{{city}}, {{state}}":"{{city}}, {{state}}","Registered nonprofit":"Non-profit registrata","text":"testo","Organizer and beneficiary":"Organizzatore e beneficiario","Fundraising team: {{- name}} ({{count}})":"Team di raccolta fondi: {{- name}} ({{count}})","Copy fundraiser link":"Copia il link per la raccolta fondi","Share this fundraiser so it can raise up to 5x more.":"Condividi questa raccolta fondi per raccogliere fino a 5 volte più fondi.","Build momentum for this fundraiser.":"Dai una spinta in più a questa raccolta fondi.","View donation summary":"Visualizza il riepilogo della donazione","Check out your donation details.":"Controlla i dettagli della tua donazione.","Add a comment":"Aggiungi un commento","Add a supportive message with your donation.":"Aggiungi un messaggio di sostegno con la donazione.","Add a profile photo":"Aggiungi una foto al profilo","Looks good. Your profile photo has been added.":"Molto bene. Hai aggiunto la foto al profilo.","Let friends and the GoFundMe community know it’s you!":"Fatti conoscere meglio dai tuoi amici e dalla Community di GoFundMe!","Share on Facebook":"Condividi su Facebook","Tell your Facebook friends about this fundraiser.":"Parla ai tuoi amici di Facebook di questa raccolta fondi.","Join fundraising team":"Entra nel team della raccolta fondi","Help {{organizerName}} raise more funds.":"Aiuta {{organizerName}} a raccogliere più fondi.","Thank donors":"Ringrazia i donatori","Show appreciation and get more support. Ask donors to share this fundraiser.":"Dimostra il tuo apprezzamento e ricevi più sostegno. Chiedi ai donatori di condividere questa raccolta fondi.","Add a donate button":"Aggiungi il pulsante Dona","Reach your community on a website or blog.":"Contatta la Community tramite un sito web o blog.","Donated {{amount}}":"Donati {{amount}}","Hi, I’d really appreciate it if you would share or donate to this GoFundMe, {{fundTitle}} {{- shareLink}}":"Ciao, ti prego gentilmente di fare una donazione o condividere questa raccolta fondi GoFundMe, {{fundTitle}} {{- shareLink}}","Captcha challenge failed. Please try again.":"Captcha sbagliato. Riprova.","You exceeded the maximum number of tries. Please try again later.":"Hai superato il numero massimo di tentativi. Riprova più tardi.","An error occurred. Please try again later.":"Si è verificato un errore. Riprova più tardi.","Sign in to follow this fundraiser":"Entra nel tuo account per seguire questa raccolta fondi","Sign in to post your comment":"Entra nel tuo account per pubblicare un commento","Reset instructions sent to {{email}}":"Annulla le istruzioni inviate a {{email}}","Please check your email & password or please sign in with your Facebook account.":"Controlla l\'indirizzo email e la password oppure accedi con l\'account Facebook.","Please check your email & password":"Controlla la tua email e la password"}},"nl_NL":{"apps-campaign":{"Better Business Bureau":"Better Business Bureau","Accredited business":"Geaccrediteerd bedrijf","Created {{dateFormatBasedOnLocal}}":"Op {{dateFormatBasedOnLocal}} gemaakt","Just now":"Zojuist","Created {{count}} hour ago":"{{count}} uur geleden gemaakt","Created {{count}} hour ago:_:plural":"{{count}} uur geleden gemaakt","Created {{count}} day ago":"{{count}} dag geleden gemaakt","Created {{count}} day ago:_:plural":"{{count}} dagen geleden gemaakt","Thank you for your donation. A receipt has been sent to <1>{{donorEmail}}</1>":"Bedankt voor je donatie. Een ontvangstbewijs is naar <1>{{donorEmail}}</1> verstuurd","by":"op","for":"voor","Team fundraiser":"Teaminzamelingsactie","Link Copied":"Link gekopieerd","Anonymous":"Anoniem","In partnership with<1></1><2>{{partnerName}}</2>":"In samenwerking met<1></1><2>{{partnerName}}</2>","See all":"Alles weergeven","This fundraiser is located near you":"Deze inzamelingsactie is bij jou in de buurt","{{- recentDonorsStr}} person just donated":"{{- recentDonorsStr}} persoon heeft zojuist gedoneerd","{{- recentDonorsStr}} person just donated:_:plural":"{{- recentDonorsStr}} personen hebben zojuist gedoneerd","This fundraiser is no longer accepting donations. If you are the organizer, beneficiary, team member, or donor,<1></1><2>sign in</2><3></3>to see additional information.":"Deze inzamelingsactie accepteert geen donaties meer. Als je de organisator, begunstigde, teamlid of donateur bent,<1></1><2>kun je inloggen</2><3></3>om aanvullende informatie te bekijken.","The organizer has currently disabled new donations to this fundraiser.":"De organisator heeft momenteel nieuwe donaties voor deze inzamelingsactie uitgeschakeld.","This fundraiser has been deactivated by the organizer.":"Deze inzamelingsactie is gedeactiveerd door de organisator.","Learn more":"Meer informatie","Copy to clip board":"Naar klembord kopiëren","Fundraiser link copied":"Link inzamelingsactie gekopieerd","Copy to clipboard":"Naar klembord kopiëren","Now paste this link into a Facebook post, Messenger, or any Facebook groups you\'re in.":"Plak deze link nu in een Facebook-bericht, Messenger of een Facebook-groep waar je lid van bent.","Copy your fundraiser link and paste it into a Facebook post, Messenger, or any Facebook groups you’re in.":"Kopieer de link van je inzamelingsactie en plak deze in een Facebook-bericht, Messenger of andere Facebook-groepen waar je lid van bent.","Questions about where to share this link?":"Vragen over waar deze link te delen?","<0>Tip:</0><1></1>Paste this fundraiser link anywhere.":"<0>Tip:</0><1></1>gebruik deze link voor je inzamelingsactie om je actie overal te promoten.","Collapse text":"Tekst samenvouwen","Read more":"Meer lezen","Edit":"Bewerken","Delete":"Verwijderen","Edited":"Bewerkt","{{name}}<1></1>donated<3></3><4>{{donationAmount}}</4>":"{{name}}<1></1> heeft<3></3><4>{{donationAmount}}</4> gedoneerd","{{name}}<1></1>commented":"{{name}}<1></1> heeft gereageerd","Campaign organizer":"Campagneorganisator","Beneficiary":"Begunstigde","GoFundMe Guarantee":"GoFundMe-garantie","Only donations on our platform are protected by the GoFundMe Guarantee.":"Alleen donaties op ons platform worden beschermd door de GoFundMe-garantie.","Donate now":"Nu doneren","Your donation":"Jouw donatie","Recent donation":"Recente donatie","Top donation":"Hoogste donatie","First donation":"Eerste donatie","Offline":"Offline","Become an early supporter":"Wees er vroeg bij en word een fan","Become the first supporter":"Wees de eerste die deze actie steunt","Your donation matters":"Je donatie is belangrijk","In the rare case something isn’t right, we will work with you to determine if misuse occurred.":"In het zeldzame geval dat er iets niet klopt, zullen we met je samenwerken om te bepalen of er sprake is van misbruik.","Email":"E-mailadres","Embed HTML":"HTML invoegen","Messenger":"Messenger","Facebook":"Facebook","<0>We use cookies</0> to enable features and market content. Click “That’s OK” to add cookies. View<2></2><3>privacy policy</3><4></4>or<6></6><7>manage cookies.</7>":"<0>We gebruiken cookies</0> om functies en marktcontent mogelijk te maken. Klik op \'Dat is OK\' om cookies toe te voegen. Bekijk het <2></2><3>privacybeleid</3><4></4> of <6></6><7>cookies beheren.</7>","That\'s OK":"Dat is OK","<0>As stated on the banner, GoFundMe uses cookies to enable features and market content to provide you with an improved experience. We consider these cookies to be non-essential, pursuant to our<1></1><2>privacy policy.</2><3></3>When you click “That’s OK” on the banner, we add these non-essential cookies.</0>":"<0>Zoals vermeld op de banner, gebruikt GoFundMe cookies om functies en marktinhoud te bieden voor een verbeterde ervaring. We beschouwen deze cookies als niet-essentieel volgens ons <1></1><2>privacybeleid.</2><3></3>Wanneer u op \'Dat is OK\' op de banner klikt, voegen we deze niet-essentiële cookies toe.</0>","Cookie Preferences":"Cookievoorkeuren","Close cookie modal":"Cookie-modus sluiten","We value your privacy":"Uw privacy is belangrijk voor ons","Here in this Cookie Preferences page, the non-essential cookies category is broken down\\n                            further into functional and marketing, as you can see below. You can change your\\n                            preferences as to both functional and marketing cookies here. When you click “Save” on\\n                            this page, we will add only those non-essential cookies you select.":"Hier op deze pagina met cookievoorkeuren is de categorie niet-essentiële cookies verder uitgesplitst in\\n functioneel en marketing, zoals u hieronder kunt zien. U kunt hier uw voorkeuren voor zowel\\nfunctionele als marketingcookies wijzigen. Wanneer u op deze pagina op Opslaan klikt, zullen we alleen\\ndie niet-essentiële cookies toevoegen die u selecteert.","Marketing cookies":"Marketingcookies","Enable":"Inschakelen","GoFundMe collects information regarding user navigation to provide sponsored content\\n                            relevant to our products on other sites. Specifically, if you start a fundraiser on\\n                            GoFundMe and you do not publish that fundraiser, GoFundMe may then show a banner ad the\\n                            next time you are on Facebook.":"GoFundMe verzamelt informatie over gebruikersnavigatie om gesponsorde inhoud te bieden die relevant is\\n voor onze producten op andere sites. Als u met name een inzamelingsactie start op GoFundMe en u publiceert die inzamelingsactie niet\\n, kan GoFundMe de volgende keer dat u op Facebook bent een banneradvertentie weergeven.","Functional cookies":"Functionele cookies","We use data collected with these cookies to improve your experiences on the GoFundMe\\n                            platform, as well as avoiding bugs or testing new features.":"We gebruiken gegevens die met deze cookies zijn verzameld om uw ervaringen op het GoFundMe-platform\\n te verbeteren, zogenaamde bugs te vermijden of nieuwe functies te testen.","Essential cookies":"Essentiële cookies","Always enabled":"Altijd ingeschakeld","Data is collected by these cookies to offer basic functions, to ensure that the GoFundMe\\n                            Platform functions technically, to keep track of your settings and activities, and for\\n                            security or fraud prevention purposes.":"Gegevens worden door deze cookies verzameld om basisfuncties te bieden, om ervoor te zorgen dat het GoFundMe-platform\\n technisch functioneert, om uw instellingen en activiteiten bij te houden, en voor\\n veiligheids- of fraudepreventiedoeleinden.","Enable all and close":"Alle inschakelen en sluiten","Enable all":"Alle inschakelen","Save and close":"Opslaan en sluiten","Save":"Opslaan","Show less":"Minder weergeven","Show more":"Meer weergeven","Previous image":"Vorig beeld","Next image":"Volgende beeld","Image {{i}} of {{t}}":"Beeld {{i}} van {{t}}","Previous 10 images":"Vorige 10 beelden","Next 10 images":"Volgende 10 beelden","Close image gallery":"Fotogalerij sluiten","Delete this image":"Deze afbeelding verwijderen","Instagram":"Instagram","Copy and paste this link on your Instagram bio":"Kopieer en plak deze link in je Instagram-bio","Fundraiser link":"Link inzamelingsactie","Link copied":"Link gekopieerd","Something went wrong.":"Er is iets misgegaan.","Share on Instagram":"Delen op Instagram","Back to sharing":"Terug naar delen","LinkedIn":"LinkedIn","Hi, I’d really appreciate it if you would share or donate to this GoFundMe.":"Hallo, het zou geweldig zijn als je deze GoFundMe-campagne kunt delen of iets wilt doneren.","Your password must have:":"Je wachtwoord moet minimaal het volgende bevatten:","At least 12 characters":"12 tekens","1 uppercase letter":"1 hoofdletter","1 lowercase letter":"1 kleine letter","1 number":"1 cijfer","1 symbol":"1 symbool","Print Poster":"Poster printen","Print":"Printen","{{raisedAmountString}}<1></1><2>{{sameCurrencyCode}} raised</2>":"{{raisedAmountString}}<1></1><2>{{sameCurrencyCode}} ingezameld</2>","{{raisedAmountString}}<1></1><2>{{sameCurrencyCode}} raised of {{goalAmountNBSP}} goal</2>":"{{raisedAmountString}}<1></1><2>{{sameCurrencyCode}} ingezameld van het doel {{goalAmountNBSP}}</2>","{{goalAmountNBSP}}<1></1><2>{{sameCurrencyCode}} goal</2>":"{{goalAmountNBSP}}<1></1><2>{{sameCurrencyCode}} doel</2>","share":"delen","Share as much as possible":"Deel zoveel mogelijk","Try using all sharing options. Telling people about your fundraiser is the only way to start raising donations.":"Probeer alle opties om te delen te gebruiken. De enige manier om donaties binnen te halen is door mensen te vertellen over je inzamelingsactie.","Text":"Tekst","donor":"donateur","donors":"donateurs","shares":"keer gedeeld","follower":"volger","followers":"volgers","Fundraiser Stats":"Statistieken inzamelingsactie","Share":"Delen","By continuing, you agree with GoFundMe<1></1><2>terms</2><3></3>and<5></5><6>privacy policy</6>":"Als je verdergaat, ga je akkoord met de <1></1><2>voorwaarden</2><3></3>en<5></5><6>het privacybeleid</6> van GoFundMe.","Preview email":"Voorbeeld e-mail","Twitter":"Twitter","{{article}} by {{- authorName}}":"{{article}} door {{- authorName}}","See older updates":"Oudere updates weergeven","WhatsApp":"WhatsApp","Your donation is made to PayPal Giving Fund Australia (ABN 65 105 950 945), a Public Ancillary Fund and a charity registered with the Australian Charities and Not-for-profits Commission, subject to its<1></1><2>terms</2>.":"Je donatie wordt overgemaakt naar het PayPal Giving Fund van Australië (ABN 65 105 950 945), een aanvullend overheidsfonds en een goed doel dat staat ingeschreven bij de Commissie van Australische goede doelen en non-profitorganisaties, volgens hun<1></1><2>algemene voorwaarden</2>.","While GoFundMe does not have a platform fee, PayPal Giving Fund Australia receives your donation after deduction of transaction<1></1><2>fees</2><3></3>and will grant funds to your recommended charity on a monthly basis.*":"Hoewel GoFundMe geen platformkosten rekent, ontvangt het PayPal Giving Fund van Australië je donatie na aftrek van de <1></1><2>transactiekosten </2><3></3> en zal deze maandelijks geld verstrekken aan je aanbevolen goede doel. *","*If, after reasonable efforts, PayPal Giving Fund Australia cannot deliver donations to this<1></1>charity, it will grant funds to another charity per PayPal Giving Fund Australia\'s<3></3><4>policies</4>.":"*Indien, na het geprobeerd te hebben, het PayPal Giving Fund van Australië geen donaties kan leveren aan dit<1></1>goede doel, dan kan het geld worden gedoneerd aan een ander goed doel volgens <3></3><4>het beleid</4> van het PayPal Giving Fund van Australië.","Donations raised benefit:":"Ingezamelde donaties zijn bestemd voor:","How charity fundraisers work":"Hoe inzamelingsacties voor goede doelen in zijn werk gaan","Your donation is made to PayPal Giving Fund Canada, a charity registered with the Canada Revenue Agency (No. 812867752RR0001), subject to its<1></1><2>terms</2>.":"Je donatie wordt overgemaakt naar het PayPal Giving Fund van Canada, een goed doel dat staat ingeschreven bij de belastingdienst van Canada (Nummer: 812867752RR0001), onder voorbehoud van de<1></1><2>algemene voorwaarden</2>.","While GoFundMe does not have a platform fee, PayPal Giving Fund Canada receives your donation after deduction of transaction<1></1><2>fees</2><3></3>and will grant funds to your recommended charity on a monthly basis.*":"Hoewel GoFundMe geen platformkosten rekent, ontvangt het PayPal Giving Fund van Canada je donatie na aftrek van de <1></1><2>transactiekosten </2><3></3> en zal deze maandelijks geld verstrekken aan je aanbevolen goede doel. *","*If, after reasonable efforts, PayPal Giving Fund Canada cannot deliver donations to this<1></1>charity, it will grant funds to another charity per PayPal Giving Fund Canada\'s<3></3><4>policies</4>.":"*Indien, na het geprobeerd te hebben, het PayPal Giving Fund van Canada geen donaties kan leveren aan dit<1></1>goede doel, dan kan het geld worden gedoneerd aan een ander goed doel volgens <3></3><4>het beleid</4> van het PayPal Giving Fund van Canada.","Support":"Steun","Contribute":"Bijdragen","Buy me a coffee":"Doneren","Show appreciation":"Toon je waardering","Start a GoFundMe":"Een GoFundMe-campagne starten","Support this cause":"Steun dit doel","{{- userName}} needs your help today! {{- campaignTitle}}":"{{- userName}} heeft je hulp vandaag nog nodig! {{- campaignTitle}}","Fundraiser for {{- userName}} by {{- campaignOrganizer}} : {{- campaignTitle}}":"Inzamelingsactie voor {{- userName}} van {{- campaignOrganizer}} : {{- campaignTitle}}","Fundraiser by {{- userName}} : {{- campaignTitle}}":"Inzamelingsactie van {{- userName}} : {{- campaignTitle}}","{{- campaignTitle}}, organized by {{- campaignOrganizer}}":"{{- campaignTitle}}, georganiseerd door {{- campaignOrganizer}}","See more":"Meer weergeven","See top donations":"Hoogste donaties weergeven","Continue reading":"Lees verder","Updates":"Updates","Image {{imageIndex}} of {{totalImages}}. Click to view all images":"Afbeelding {{imageIndex}} van {{totalImages}}. Klik om alle afbeeldingen weer te geven","Image {{imageIndex}} of {{totalImages}}":"Beeld {{imageIndex}} van {{totalImages}}","Photo limit reached":"Fotolimiet bereikt","Add more photos":"Meer foto\'s toevoegen","Add photos to comment":"Foto\'s toevoegen aan reactie","I donated because...":"Ik heb gedoneerd want...","Add this public comment to the fundraiser.":"Voeg deze openbare reactie toe aan de inzamelingsactie.","Your donation will be displayed as Anonymous, and this comment will not show up publicly on the campaign.":"Uw donatie wordt weergegeven als Anoniem en deze opmerking wordt niet openbaar weergegeven op de inzamelingsactie.","Post comment":"Reactie publiceren","Please choose a maximum of 10 photos for your comment.":"Kies maximaal 10 foto\'s voor je reactie.","Please donate and share words of encouragement.":"Doneer en reageer om de actie aan te moedigen.","Continue":"Doorgaan","Comments":"Reacties","Please select one.":"Selecteer er één.","Yes, I have contacted the Campaign Organizer.":"Ja, ik heb contact opgenomen met de inzamelingsactieorganisator.","No, I have not contacted the Campaign Organizer.":"Nee, ik heb geen contact opgenomen met de inzamelingsactieorganisator.","They are a family member":"Ze zijn een familielid","They are a friend or acquaintance":"Ze zijn een vriend(in) of kennis","I do not know the organizer of this campaign":"Ik ken de organisator van deze inzamelingsactie niet","Your Name":"Je naam","Your Phone Number":"Je telefoonnummer","Required in case our team needs to contact you for further details.":"Vereist voor het geval ons team contact met je moet opnemen voor meer informatie.","Your Email":"Je e-mailadres","Confirm Email":"E-mailadres bevestigen","Page URL":"Pagina-URL","Please enter the URL in this format: https://www.gofundme.com/f/example-campaign":"Voer de URL als volgt in: http://www.gofundme.com/f/example-campaign","I don\'t know the page URL":"Ik weet niet wat de pagina-URL is","Have you already contacted the organizer of this campaign?":"Heb je al contact opgenomen met de organisator van deze inzamelingsactie?","How do you know the organizer of this campaign?":"Hoe ken je de organisator van deze inzamelingsactie?","Please explain your relationship to the Campaign Organizer.":"Vertel iets meer over je relatie met de inzamelingsactieorganisator.","How much money did you receive from the campaign organizer?":"Hoeveel geld heb je ontvangen van de inzamelingsactieorganisator?","Why do you believe this person will not deliver the funds to you?":"Waarom denk je dat deze persoon het geld niet naar jou zal overmaken?","Please attach a copy of a government issued photo ID":"Voeg een kopie van een door de overheid uitgegeven identiteitsbewijs (met foto) toe","Please upload only JPEG, GIF, PNG or PDF files. The file size must be less than 5MB.":"Upload uitsluitend JPEG, GIF, PNG of PDF-bestanden. De bestandsgrootte moet kleiner dan 5MB zijn.","Upload any evidence you may have":"Upload bewijs voor zover je dat hebt","Send Email":"E-mail versturen","Message Subject":"Onderwerp bericht","Your Message":"Je bericht","I am requesting a refund because...":"Ik vraag om een terugbetaling omdat...","Describe your concerns about how the funds are being used.":"Leg uit waarom je bezorgd bent over hoe het geld gebruikt wordt.","40 characters minimum":"Minimaal 40 tekens","Yes, I know the Campaign Organizer.":"Ja, ik ken de inzamelingsactieorganisator.","No, I do not know the Campaign Organizer":"Nee, ik ken de inzamelingsactieorganisator niet.","I am a beneficiary.":"Ik ben een begunstigde.","I am a donor.":"Ik ben een donateur.","I am an individual concerned about this campaign.":"Ik heb mijn twijfels over deze inzamelingsactie.","I am involved in a legal dispute with the Campaign Organizer.":"Ik heb een juridisch geschil met de inzamelingsactieorganisator.","This campaign includes libelous statements.":"Deze inzamelingsactie bevat lasterlijke uitspraken.","Campaign includes factually incorrect information.":"Campagne bevat feitelijk onjuiste informatie.","Campaign Organizer has not used funds for the stated purpose.":"De inzamelingsactieorganisator heeft het geld niet gebruikt voor het aangegeven doel.","They are impersonating someone or have copied another campaign.":"Ze doen zich voor als iemand anders of hebben een andere inzamelingsactie gekopieerd.","Please explain your concern(s) in detail.":"Leg nader uit wat je probleem is of waar je bezorgd over bent.","Which statements are libelous and why?":"Welke uitspraken zijn lasterlijk en waarom?","Which statements are incorrect and why?":"Welke uitspraken zijn onjuist en waarom?","How have the campaign’s donations been spent?":"Hoe zijn de donaties van de inzamelingsactie besteed?","What is the original campaign link/title?":"Wat is de oorspronkelijke inzamelingsactielink of -titel?","Please describe your concerns":"Beschrijf je probleem","How do you know the campaign organizer?":"Hoe ken je de inzamelingsactieorganisator?","How are you connected to the campaign?":"Hoe ben je verbonden aan de inzamelingsactie?","How much money is being withheld and why?":"Hoeveel geld wordt er in mindering gebracht en waarom?","Why are you concerned about your donation?":"Waarom ben je bezorgd over je donatie?","Please describe your concerns.":"Beschrijf waarom je bezorgd bent.","Do you know the Campaign Organizer?":"Ken je de organisator van de inzamelingsactie?","Which best describes you?":"Wat is de beste omschrijving voor jou?","Publication":"Publicatie","Self-Service":"Zelfbediening","Please select an option which best describes you to see relevant information.":"Selecteer een optie die je het best beschrijft om relevante informatie te zien.","For customized help, please sign in.":"Voor aangepaste hulp dien je in te loggen.","Sign In":"Inloggen","Top Answers":"Topantwoorden","How do I get a refund?":"Hoe ontvang ik een terugbetaling?","How do I withdraw money?":"Hoe neem ik geld op?","Is my country supported?":"Is mijn land ondersteund?","Can I withdraw money?":"Kan ik geld opnemen?","How do I reset my password?":"Hoe stel ik mijn wachtwoord opnieuw in?","How do I invite someone to withdraw?":"Hoe nodig ik iemand uit om het geld op te nemen?","I can\'t withdraw my funds, now what?":"Ik kan het geld niet opnemen, dus wat moet ik nu doen?","How do your fees work?":"Hoeveel kosten berekenen jullie?","What about taxes and stuff?":"Hoe zit het met belastingen?","GoFundMe homepage":"GoFundMe-homepage","Choose your language":"Kies je taal","How GoFundMe works":"Hoe GoFundMe in zijn werk gaat","Common questions":"Veelgestelde vragen","Success stories":"Succesverhalen","Supported countries":"Ondersteunde landen","Team fundraising":"Teaminzamelingsacties","Donate button":"Knop doneren","Support COVID-19 fundraisers":"Steun inzamelingsacties voor COVID-19","Why GoFundMe":"Waarom GoFundMe?","Medical":"Medisch","Emergency":"Noodsituatie","Memorial":"Herdenkingen","Education":"Onderwijs en collegegeld","Nonprofit":"Non-profit","Fundraise for":"Zamel geld in voor","Help center":"Hulpcentrum","Blog":"Blog","GoFundMe Stories":"GoFundMe-verhalen","Press center":"Perscentrum","Careers":"Vacatures","About":"Over","Resources":"Hulpmiddelen","Terms":"Voorwaarden","Privacy":"Privacy","Legal":"Juridisch","Do Not Sell My Personal Information":"Verkoop mijn persoonlijke gegevens niet","Hide":"Verbergen","Show":"Weergeven","Hide guidance cards":"Begeleidingskaarten verbergen","Show guidance cards":"Begeleidingskaarten weergeven","Previous card":"Vorige kaart","Next card":"Volgende kaart","You are donating to<1></1><2>PayPal Giving Fund Ireland</2>, a registered charity (No. 20205692), which will email you a receipt for your donation.":"Je doneert aan het <1></1><2>PayPal Giving Fund van Ierland</2>, een geregistreerde liefdadigheidsinstelling (nr. 20205692), die je per e-mail een ontvangstbewijs voor je donatie stuurt.","*In rare cases, a charity may cease to meet PayPal Giving Fund Ireland’s legal or other eligibility requirements to receive funds or may not accept the funds. In such cases, PayPal Giving Fund Ireland will<1></1><2>reassign the funds</2><3></3>to another charity and (wherever possible) seek a new recommendation from you.":"*In zeldzame gevallen kan een goed doel niet meer voldoen aan de wettelijke of andere vereisten van het PayPal Giving Fund van Ierland om het geld te ontvangen of te accepteren. In dergelijke gevallen vraagt het PayPal Giving Fund van Ierland <1></1><2>het geld opnieuw toe te wijzen</2><3></3> aan een ander goed doel en (indien mogelijk) om een nieuwe aanbeveling van jou.","The charity will typically receive the funds from PayPal Giving Fund within 15-45 days (90 days if the charity has not enrolled).*":"Het goede doel ontvangt doorgaans het geld binnen 15-45 dagen van het PayPal Giving Fund (90 dagen als het goede doel niet staat ingeschreven).*","Open share modal":"Deelmodule openen","Donate":"Doneren","Sign in":"Inloggen","Sign out":"Uitloggen","Donations you\'ve made":"Jouw donaties","Account settings":"Accountinstellingen","Your fundraisers":"Je inzamelingsacties","Open navigation menu":"Navigatiemenu openen","Close navigation menu":"Navigatiemenu sluiten","My campaigns":"Mijn inzamelingsacties","Close Modal":"Modaal venster sluiten","Start":"Starten","Don\'t have an account? ":"Geen account? ","Sign up":"Aanmelden","Enter the email address associated with your account, and we\'ll email you a link to reset your password":"Vul het e-mailadres in waarmee je je GoFundMe-account hebt geopend. We sturen je een link zodat je je wachtwoord kunt wijzigen.","Email address":"E-mailadres","Request new password":"Nieuw wachtwoord aanvragen","Don\'t have an account?<1></1><2>Sign up</2>":"Geen account?<1></1><2>Meld je aan</2>","Forgot your password?":"Wachtwoord vergeten?","Password":"Wachtwoord","Sign in to GoFundMe":"Inloggen bij GoFundMe","Already have an account?<1></1><2>Sign in</2>":"Heb je al een account?<1></1><2>Inloggen</2>","Please<1></1><2>sign in</2><3></3>to access your account.":"<1></1><2>Log in</2><3></3> voor toegang tot je account.","First Name":"Voornaam","Last Name":"Achternaam","Confirm email address":"E-mailadres bevestigen","Set password":"Wachtwoord instellen","We will never post without your permission":"We publiceren nooit iets zonder jouw toestemming.","Continue with Facebook":"Doorgaan met Facebook","or":"of","Use my email address":"Gebruik mijn e-mailadres","You are donating to<1></1><2>PayPal Giving Fund</2><3></3>UK, a registered charity (No. 1110538), which will email you a receipt for your donation and claim Gift Aid where eligible.":"Je doneert aan het<1></1><2>PayPal Giving Fund</2><3></3>UK, een erkend goed doel (nr. 1110538) en zij e-mailen je een ontvangstbewijs voor je donatie. Je kunt een Gift Aid claimen indien je donatie daarvoor in aanmerking komt.","<0></0>*In very limited cases, a recommended charity may cease to meet PayPal Giving Fund\'s legal or other eligibility<2></2><3>requirements</3><4></4>. In such cases, PayPal Giving Fund will reassign the funds to a similar charity, and (wherever possible) seek a new recommendation from donors.":"<0></0>*In hele beperkte gevallen kan een aanbevolen goed doel mogelijk niet meer voldoen aan de wettelijke of andere <2></2><3>toelatingsvoorwaarden</3><4></4>. In dergelijke gevallen doneert het PayPal Giving Fund het geld aan een soortgelijk goed doel en (voor zover mogelijk) vraagt dan om een aanbeveling of voorkeur van de donateurs in kwestie.","The charity will typically receive the funds from PayPal Giving Fund within 15-45 days of your donation if the charity has enrolled (or 90 days if the charity has not yet enrolled). Unlike other platforms, 100% of any Gift Aid will go to the charity as well.":"Het goede doel ontvangt het geld binnen 15-45 dagen van het PayPal Giving Fund na je donatie als het goede doel staat ingeschreven (of 90 dagen als dit niet het geval is). In tegenstelling tot andere platforms gaat 100% van alle Gift Aid-donaties ook naar het goede doel.","PayPal Giving Fund will grant your donation to {{charityName}} within 15-45 days (Or 90 days if the charity has not yet enrolled)*.":"Het PayPal Giving Fund maakt je donatie binnen 15-45 dagen over naar {{charityName}}(of 90 dagen als het goede doel zich nog niet heeft ingeschreven)*.","*If, after reasonable efforts have been made, PayPal Giving Fund cannot grant the funds to this charity, they will contact you before reassigning the funds in accordance with<1></1><2>PayPal Giving Fund\'s Policies</2>.":"*Indien, na het geprobeerd te hebben, het PayPal Giving Fund geen donaties kan overmaken naar dit goede doel, dan wordt er contact met je opgenomen voordat het geld kan worden gedoneerd aan een ander goed doel volgens <1></1><2>het beleid van het PayPal Giving Fund</2>.","How non-profit fundraisers work":"Hoe inzamelingsacties voor non-profitorganisaties in zijn werk gaan","Donations are typically 100% tax deductible in the US. Your donation is made to PayPal Giving Fund (a 501(c)(3) charitable organization) to benefit your chosen charity.":"Donaties zijn doorgaans 100% aftrekbaar van de belasting in de VS. Je donatie wordt overgemaakt naar het PayPal Giving Fund (een liefdadigheidsorganisatie met de zogenaamde 501(c)(3)-status) ten behoeve van het door jouw uitgekozen goede doel.","Fundraiser updates ({{totalUpdates}})":"Inzamelingsactie-updates ({{totalUpdates}})","Fundraiser updates":"Inzamelingsactie-updates","Close fundraiser updates modal":"Module inzamelingsactie-updates sluiten","Thanks for donating":"Bedankt voor je donatie","Boost this fundraiser":"Geef deze actie een extra steuntje in de rug","Be the first to help":"Wees de eerste die hulp biedt","Your early support will go a long way and help inspire others to donate.":"Je vroege steun heeft een grote impact en inspireert anderen ook te doneren.","Report fundraiser":"Inzamelingsactie melden","See top":"Hoogste donaties weergeven","Donations":"Donaties","Contact Us - Answer Found":"Neem contact met ons op - Antwoord gevonden","Answer Found!":"Antwoord gevonden!","Thanks very much!":"Heel erg bedankt!","If you ever need some extra help, the GoFundMe Team is standing by!":"Als je ooit extra hulp nodig hebt, staat het GoFundMe-team klaar.","Return to Help Center":"Terug naar Hulpcentrum","Contact Us - Message Sent!":"Neem contact met ons op - bericht verstuurd","Message Sent":"Bericht is verstuurd","Thank you for your patience":"Dank je wel voor je geduld","We\'re sorry, but that campaign cannot be found. Please check the link URL and try again.":"Het spijt ons, maar die inzamelingsactie kan niet worden gevonden. Controleer de URL en probeer het opnieuw.","Page Not Found":"Pagina niet gevonden","Home":"Startpagina","Campaign Not Found":"Campagne niet gevonden","Search gofundme.com for":"Zoek op gofundme.com naar","Show your support by going to this link":"Toon je steun door naar deze link te gaan","Pagination navigation":"Navigatie paginering","Previous page":"Vorige pagina","Previous":"Overige","Next page":"Volgende pagina","Next":"Volgende","Page {{page}} of {{nbPages}}":"Pagina {{page}} van {{nbPages}}","Search in progress":"Bezig met zoeken","Fundraisers for \\"{{query}}\\" in all locations":"Inzamelingsacties voor \'{{query}}\' op alle locaties","No results found for \\"{{query}}\\" in all locations":"Geen resultaten gevonden voor \'{{query}}\' op alle locaties","Search results for {{- query}}":"Zoekresultaten voor \'{{- query}}\'","GoFundMe: {{- searchQuery}}":"GoFundMe: {{- searchQuery}}","The leader in online fundraising":"Leider op het gebied van online inzamelingsacties","We\'re sorry. Something went wrong. Please wait one minute and try again.":"Excuses. Er is iets misgegaan. Wacht een minuut en probeer het opnieuw.","Unknown Error":"Onbekende fout","Join this list. <1>Donate now.</1>":"Sluit je aan bij deze lijst. <1>Nu doneren.</1>","Top":"Top","Donations ({{totalDonations}})":"Donaties ({{totalDonations}})","Close all donations modal":"Module alle donaties sluiten","Close":"Sluiten","<0>What is this? <1></1><2>Learn more</2></0>":"<0>Wat is dit? <1></1><2>Meer informatie</2></0>","Large":"Groot","Medium":"Middelgroot","Small (Button only)":"Klein (alleen knop)","Copy and paste the following embed code:":"Kopieer en plak de volgende invoegcode:","Copy HTML code":"HTML-code kopiëren","Copied!":"Gekopieerd!","Something went wrong. Please select the code block to manually copy it.":"Er is iets misgegaan. Selecteer het codeblok om het handmatig te kopiëren.","Preview":"Voorbeeld","Select the button text":"Selecteer de knoptekst","Have you seen \\"{{- title}}\\"?":"Heb je \'{{- title}}\' al gezien?","Hello \\n \\n I thought you might be interested in supporting this GoFundMe, {{- shareLink}}. \\n \\n Even a small donation could help {{- name}} reach their fundraising goal. And if you can\'t make a donation, it would be great if you could share the fundraiser to help spread the word. \\n \\n Thanks for taking a look!":"Hallo \\n\\nik vermoed dat je deze GoFundMe-inzamelingsactie, {{- shareLink}}, misschien zou willen steunen. Zelfs een klein donatiebedrag kan {{- name}} helpen om het inzamelingsactiedoel te bereiken. En als je niet kunt doneren zou het fantastisch zijn als je de actie zou kunnen delen om er meer bekendheid aan te geven. \\n\\n Alvast bedankt voor je hulp!","Hi,\\n\\nI\'d really appreciate it if you would share or donate to this GoFundMe.\\n\\n*{{- fundTitle}}*\\n\\n{{- description}}\\n\\nRead more here {{- fundUrl}}\\n\\nForward this message to your contacts to help this campaign reach its goal!":"Hallo,\\n\\nIk zou het heel erg op prijs stellen als je deze GoFundMe-inzamelingsactie wilt delen of iets wilt doneren.\\n\\n*{{- fundTitle}}*\\n\\n{{- description}}\\n\\nLees hier meer {{- fundUrl}}\\n\\nStuur dit bericht door naar je contacten om mijn inzamelingsactie te helpen zijn doel te bereiken.","Hi, I\'d really appreciate it if you would share or donate to this GoFundMe, {{- shareLink}}":"Hallo, ik zou het heel erg op prijs stellen als je mijn GoFundMe-campagne, {{- shareLink}}, wilt delen en iets wilt doneren. Stuur dit bericht door naar je contacten om mijn inzamelingsactie te helpen zijn doel te bereiken.","Help by sharing":"Bied je steun door te delen","Fundraisers shared on social networks raise up to 5x more":"Inzamelingsacties die op sociale netwerken worden gedeeld halen vijf keer zoveel geld op","Copy":"Kopiëren","Copy link":"Link kopiëren","Back":"Terug","Top Donations":"Hoogste donaties","See all donations":"Alle donaties weergeven","All":"Alle","Be a top donor for {{- beneOrOrganizerName}} with {{- averageTopDonation}} or more.":"Wees een topdonateur voor {{- beneOrOrganizerName}} met {{- averageTopDonation}} of meer.","<0>Donating outside of GoFundMe</0><1>Donations on other platforms are not protected by the GoFundMe Guarantee. In the rare case that something isn’t right on GoFundMe, we work with you to determine if misuse occurred.<1></1><2>Learn more</2></1><2>Donate now</2>":"<0>Doneren buiten GoFundMe</0><1>Donaties op andere platforms worden niet beschermd door de GoFundMe-garantie. In het zeldzame geval dat er iets niet klopt op GoFundMe, bepalen we met jou samen of er sprake is van misbruik.<1></1><2>Meer  informatie</2></1><2>Nu doneren</2>","Close modal":"Modus sluiten","Suggestions":"Suggesties","Make a Beneficiary Claim":"Begunstigde claim indienen","Make a Beneficiary Claim | GoFundMe Support":"Dien een begunstigde claim in | GoFundMe-ondersteuning","Contact Us":"Neem contact met ons op","Make a Donor Claim":"Donateursclaim indienen","Make a Donor Claim | GoFundMe Support":"Dien een donateursclaim in | GoFundMe-ondersteuning","Report a Fundraiser":"Inzamelingsactie melden","Report a Fundraiser | GoFundMe Support":"Meld een inzamelingsactie | GoFundMe-ondersteuning","Press Contact Form":"Contactformulier voor de media","Press Contact Form | GoFundMe Support":"Contactformulier voor de pers | GoFundMe-ondersteuning","Send Message":"Bericht versturen","Contact":"Contact","Write {{firstName}} a message":"Schrijf {{firstName}} een bericht","Organizer":"Organisator","Cancel":"Annuleren","2. Use your donation receipt to<1></1><2>edit your donation comment</2><3></3>or<5></5><6>change your name on a donation</6>.":"2. Gebruik je donatiebewijs om <1></1><2>je donatiereactie te bewerken</2><3></3> of <5></5><6>verander de naam die je gebruikt hebt, om te doneren</6>.","If you do not remember your GoFundMe password, please<1></1><2>click here to request a new password</2>.":"Als je je GoFundMe-wachtwoord niet meer weet, <1></1><2>klik dan hier om een nieuw wachtwoord aan te vragen</2>.","If you received an<1></1><2>unexpected refund</2><3></3>for your donation it could be for any of the following reasons:":"Als je <1></1><2>een terugbetaling hebt ontvangen</2><3></3> van je donatie die je niet hebt verwacht, kan dit te maken hebben met een van de volgende redenen:","Edit My Comment":"Mijn reactie bewerken","Edit My Name":"Naam bewerken","Get Donation Receipt":"Ontvang een donatiebevestiging","Refund All Donations":"Alle donaties terugbetalen","Update Donation Anonymity":"Donatie-anonimiteit bijwerken","We can help you with that! Confirm the email address you used to donate.":"We kunnen je daarmee helpen. Bevestig het e-mailadres dat je hebt gebruikt om te doneren.","Editing the information on a donation is quick and easy, and can be done from your donation receipt or through your GoFundMe account.":"Het bewerken van de informatie over een donatie is snel en gemakkelijk, en kan worden gedaan via je donatiebewijs of je GoFundMe-account.","Actions you can take on your own:":"Acties die je zelf kunt ondernemen:","1. Request a new donation receipt by entering your donation email address in the field below.":"1. Vraag een nieuw donatiebewijs aan door je donatie-e-mailadres in het onderstaande veld in te voeren.","We can help you with that! If you have a personal fundraiser, please enter the email address you used to create your fundraiser.":"We kunnen je daarmee helpen. Als je een persoonlijke inzamelingsactie hebt, voer je het e-mailadres in dat je hebt gebruikt om je actie te maken.","If you have a Certified Charity fundraiser, our Customer Happiness Team can help you with that! Please select an option below in \\"Still need help?\\" and include the link to the fundraiser you\'d like to refund.":"Als je een inzamelingsactie hebt voor een erkend goed doel, kan ons klantenserviceteam je verder helpen. Selecteer een optie hieronder in \'Nog steeds hulp nodig?\' en voeg de link naar je inzamelingsactie toe waarvan je de donatie(s) wilt terugbetalen.","Additional Information:":"Extra informatie:","Organizer deactivated the fundraiser":"Organisator heeft de inzamelingsactie gedeactiveerd","Our payment processor wasn\'t able to verify the donation":"Onze betalingsverwerker was niet in staat om de donatie te controleren","Organizer did not verify their account or withdraw funds within required deadlines":"De organisator heeft zijn/haar account niet geverifieerd of geen geld opgenomen binnen de vereiste deadline(s)","The donation was charged back by the donor":"De donatie is teruggeboekt door de donateur","The donation was made by the organizer or beneficiary":"De donatie was afkomstig van de organisator of begunstigde","Please visit the fundraiser to view any updates that the organizer might have posted in regards to refunds, click \'Contact\' beneath the organizer\'s name on their fundraiser to email them with any questions, or reach out to our team if you have questions on how you may be able to still support the cause.":"Ga naar de inzamelingsactie om updates te bekijken die de organisator mogelijk heeft geplaatst met betrekking tot terugbetalingen, klik op \'Neem contact op\' onder de naam van de organisator om hem/haar vragen te sturen of neem contact op met ons team als je vragen hebt over hoe je het doel alsnog kunt steunen.","Help Center":"Hulpcentrum","Please read below":"Lees hieronder...","Your Email Address":"Je e-mailadres","My question was answered":"Mijn vraag werd beantwoord","Still need help?":"Nog steeds hulp nodig?","Chat now":"Nu chatten","Chat":"Chatten","Send email":"E-mail versturen","Donations paused":"Donaties onderbroken","Our team has contacted the organizer with a solution, and donations will resume once the issue is resolved.":"Ons team heeft contact opgenomen met de organisator met een oplossing en de donaties worden hervat zodra het probleem is opgelost.","How can I help?":"Hoe kunnen we je helpen?","Please reach out to the organizer and ask them to sign in to GoFundMe and check their account to resolve the issue.":"Neem contact op met de organisator en vraag hen in te loggen bij GoFundMe en het account te controleren.","Something went wrong. We’re working on it, please try again later or<1></1><2>contact us</2>.":"Er is iets misgegaan. We werken eraan, probeer het later opnieuw of <1></1><2>neem contact met ons op</2>.","To include a comment with your donation, you must add text and/or upload a photo.":"Om een opmerking aan je donatie toe te voegen, moet je tekst toevoegen en/of een foto uploaden.","{{fileName}}: Please choose a jpeg, jpg, gif, or png file type, and ensure it is smaller than 2048 kb.":"{{fileName}}: kies een jpeg-, jpg-, gif- of png-bestand en zorg ervoor dat dit kleiner is dan 2048 kB.","{{fileName}}: Please try again later.":"{{fileName}}: probeer het later opnieuw.","Show more Support":"Toon meer steun","Return to campaign":"Terug naar inzamelingsactie","Back to previous page":"Terug naar de vorige pagina","Hello \\n \\n I just donated to this GoFundMe, {{- shareLink}}.  Would you be interested in supporting it too? \\n \\n Even a small donation could help {{- name}} reach their fundraising goal. And if you can\'t make a donation, it would be great if you could share the fundraiser to help spread the word. \\n \\n Thanks for taking a look!":"Hallo \\n\\nIk heb zojuist gedoneerd aan deze GoFundMe-inzamelingsactie: {{- shareLink}}.  Zou je deze inzamelingsactie ook willen steunen?\\n\\n Zelfs een klein donatiebedrag kan {{- name}} helpen om het inzamelingsactiedoel te bereiken. En als je niet kunt doneren zou het fantastisch zijn als je de actie zou kunnen delen om er meer bekendheid aan te geven. \\n\\n Alvast bedankt voor je hulp!","Hi, I’d really appreciate it if you would share or donate to this GoFundMe, {{- fundTitle}} {{- shareLink}}":"Hallo, ik zou het heel erg op prijs stellen als je deze GoFundMe-campagne {{- fundTitle}} {{- shareLink}} wilt delen en iets wilt doneren.","Hi, I just donated to this GoFundMe and would appreciate it if you would share or donate too. {{- shareLink}}":"Hallo, ik heb net aan deze GoFundMe-campagne gedoneerd en ik zou het op prijs stellen als jij de campagne zou willen delen of iets zou kunnen doneren. {{- shareLink}}","Something went wrong. Please select the link and manually copy.":"Er is iets misgegaan. Selecteer de link en kopieer handmatig.","Now help spread the word":"Zegt het voort","By sharing this fundraiser, you increase their chance of success by 5x.":"Door deze inzamelingsactie te delen, is de kans op succes 5x zo groot.","Finished sharing?":"Klaar met delen?","Sign up to post your comment":"Log in om je reactie te publiceren","Sign up to follow this fundraiser":"Meld je aan om deze inzamelingsactie te volgen","Fundraising team ({{count}})":"Inzamelingsactieteam: ({{count}})","Contact us | GoFundMe Support":"Neem contact met ons op | GoFundMe-ondersteuning","GoFundMe will always respond to your requests as quickly as possible.":"GoFundMe reageert altijd zo snel mogelijk op je vragen.","Donor protection guarantee":"Garantie donateursbescherming","GoFundMe has the first and only guarantee in the industry.":"GoFundMe biedt de eerste en enige garantie voor persoonlijke inzamelingsacties.","Simple setup":"Gebruikersvriendelijk","You can personalize and share your GoFundMe in just a few minutes.":"Je kunt je GoFundMe-campagne binnen enkele minuten personaliseren en delen.","0% platform fee":"0% platformkosten","With a 0% platform fee, you get to keep even more of your money.":"Omdat we 0% voor het platform rekenen, houd je meer van je geld.","Mobile app":"Mobiele app","The GoFundMe app makes it easy to launch and manage your campaign on the go.":"De GoFundMe-app maakt het eenvoudig om je inzamelingsactie op te zetten en te beheren. Ook als je onderweg bent.","Social reach":"Sociale reikwijdte","Harness the power of social media to spread your story and get more support.":"Gebruik de dynamiek van social media om je verhaal te vertellen en meer steun te krijgen.","24/7 expert advice":"Deskundig advies, dag en nacht","Our best in class Customer Happiness agents will answer your questions, day or night.":"Onze deskundige klantenservicemedewerkers beantwoorden al je vragen, dag en nacht.","Fundraisers":"Inzamelingsacties","Discover":"Discover","Charity":"Goed doel","User name":"Gebruikersnaam","What is crowdfunding?":"Wat is crowdfunding?","How it works":"Hoe het werkt","Fundraising tips":"Tips voor inzamelingsacties","Plan your fundraiser":"Plan je inzamelingsactie","Travel & Adventure":"Reizen en avontuur","Medical, Illness & Healing":"Medisch, ziekte en behandeling","Missions, Faith & Church":"Zendingswerk, geloof en kerk","Non-Profits & Charities":"Non-profitorganisaties en goede doelen","Weddings & Honeymoons":"Bruiloften en huwelijksreizen","Other":"Ander","Sports, Teams & Clubs":"Sporten, teams en clubs","Education & Learning":"Onderwijs en pedagogische middelen","Volunteer & Service":"Vrijwilligerswerk en dienstverlening","Competitions & Pageants":"Wedstrijden ","Accidents & Emergencies":"Ongelukken en noodgevallen","Dreams, Hopes & Wishes":"Dromen en wensen","Animals & Pets":"Dieren","Environment":"Milieu","Rent, Food & Monthly Bills":"Huur, eten en maandelijkse rekeningen","Birthday Pots":"Verjaardagspotjes","Babies, Kids & Family":"Baby\'s, kinderen, gezin en familie","Business & Entrepreneurs":"Bedrijven en ondernemingen","Celebrations & Events":"Feesten en evenementen","Community & Neighbors":"Community en buren","Creative Arts, Music & Film":"Creatieve projecten, muziek en film","Funerals & Memorials":"Begrafenissen en herdenkingen","#1 fundraising platform":"#1 inzamelingsplatform","More people start fundraisers on GoFundMe than on any other platform.":"Meer mensen starten inzamelingsacties op GoFundMe dan op enig ander platform.","Expert advice, 24/7":"Deskundig advies, 24 uur per dag, 7 dagen per week","Contact us with your questions and we’ll answer, day or night.":"Neem contact op met vragen en we zijn er dag en nacht om je vragen te beantwoorden.","Team member":"Teamlid","Sorry, no account found":"Sorry, geen account gevonden","Your message to {{coFirstName}} successfully sent.":"Je bericht aan {{coFirstName}} is verstuurd.","Your message to {{coFirstName}} failed to send. Please try again later.":"Je bericht aan {{coFirstName}} kon niet worden verstuurd. Probeer het later opnieuw.","[email redacted]":"[e-mail geredigeerd]","[phone redacted]":"[telefoonnummer bewerkt]","Please enter your name.":"Voer je naam in.","Please enter a shorter name.":"Voer een kortere naam in","Please enter your email address.":"Voer je e-mailadres in.","Please enter a shorter email address.":"Voer een korter e-mailadres in","Please confirm your email address.":"Bevestig je e-mailadres.","Emails do not match.":"E-mailadressen komen niet overeen.","Please complete the reCAPTCHA.":"Voltooi de reCAPTCHA.","Please enter a subject line":"Vul een onderwerpregel in","Please enter your message":"Voer je bericht in","Please enter a longer message.":"Vul een langer bericht in","Please enter a shorter message.":"Voer een korter bericht in.","Please enter a valid phone number":"Voer een geldig telefoonnummer in","Please enter a campaign URL":"Voer een geldige inzamelingsactie-URL in","Please specify how you know the Campaign Organizer.":"Vertel iets over hoe je de inzamelingsactieorganisator kent.","Please specify a description.":"Geef een beschrijving.","Please select an option.":"Maak een keuze.","Please enter a description.":"Voer een beschrijving in.","Please enter a longer description.":"Voeg een langere beschrijving toe.","Please enter your concerns.":"Beschrijf je problemen.","Please enter a publication name":"Voer een publicatietitel in","Please log in":"Log in","The email entered does not match your account\'s email":"Het ingevoerde e-mailadres komt niet overeen met het e-mailadres van je account","Unexpected error":"Onverwachte fout","Please enter your name":"Vul je naam in","Please enter your email address":"Vul je e-mailadres in","Please enter a valid email address.":"Vul een geldig e-mailadres in.","Today":"Vandaag","Yesterday":"Gisteren","[redacted]":"[geredigeerd]","Please enter your password":"Vul je wachtwoord in","Please enter your first name":"Vul je voornaam in","Please enter a shorter first name.":"Voer een kortere voornaam in.","Please enter your last name":"Vul je achternaam in","Please enter a shorter last name.":"Voer een kortere achternaam in.","Your email address does not match.":"Je e-mailadres komt niet overeen.","Please enter a password.":"Vul een wachtwoord in.","Passwords must be at least twelve characters long.":"Wachtwoorden moeten minstens uit twaalf tekens bestaan.","You have exceeded the maximum amount of characters.":"Je hebt het maximale aantal tekens overschreden.","Passwords must contain at least one number, symbol, uppercase letter, and lowercase letter.":"Wachtwoorden moeten ten minste één cijfer, symbool, hoofdletter en een kleine letter bevatten.","Please make a selection...":"Maak een keuze...","Yes, I have contacted the Campaign Organizer":"Ja, ik heb contact opgenomen met de inzamelingsactieorganisator.","No, I have not contacted the Campaign Organizer":"Nee, ik heb geen contact opgenomen met de inzamelingsactieorganisator.","The situation has been misrepresented.":"De situatie is verkeerd voorgesteld.","The funds were not used as stated on the campaign.":"Het geld is niet gebruikt zoals de inzamelingsactie dat heeft aangegeven.","The funds were never delivered to the intended recipient.":"Het geld is niet terechtgekomen bij de beoogde ontvanger.","I did not authorize this donation.":"Ik heb deze donatie niet gemachtigd.","I no longer wish to support this campaign.":"Ik wil deze inzamelingsactie niet meer steunen.","… {{- userName}} needs your support for {{- campaignTitle}}":"… {{- userName}} heeft je hulp nodig voor {{- campaignTitle}}","{{- organizerFullName}} and {{- teamMemberFullName}} are organizing this fundraiser to benefit {{- beneficiaryFullName}}.":"{{- organizerFullName}} en {{- teamMemberFullName}} organiseren deze inzamelingsactie namens {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{- teamMemberFullName}} are organizing this fundraiser on behalf of {{- beneficiaryFullName}}.":"{{- organizerFullName}} en {{- teamMemberFullName}} anderen organiseren deze inzamelingsactie namens {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser to benefit {{- beneficiaryFullName}}.":"{{- organizerFullName}} en {{count}} anderen organiseren deze inzamelingsactie namens {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser to benefit {{- beneficiaryFullName}}.:_:plural":"{{- organizerFullName}} en {{count}} anderen organiseren deze inzamelingsactie namens {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser on behalf of {{- beneficiaryFullName}}.":"{{- organizerFullName}} en {{count}} anderen organiseren deze inzamelingsactie namens {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser on behalf of {{- beneficiaryFullName}}.:_:plural":"{{- organizerFullName}} en {{count}} anderen organiseren deze inzamelingsactie namens {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{- teamMemberFullName}} are organizing this fundraiser.":"{{- organizerFullName}} en {{- teamMemberFullName}} organiseren deze inzamelingsactie.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser.":"{{- organizerFullName}} en {{count}} ander organiseren deze inzamelingsactie.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser.:_:plural":"{{- organizerFullName}} en {{count}} anderen organiseren deze actie.","{{- organizerFullName}} is organizing this fundraiser to benefit {{- beneficiaryFullName}}.":"{{- organizerFullName}} organiseert deze inzamelingsactie namens {{- beneficiaryFullName}}.","{{- organizerFullName}} is organizing this fundraiser on behalf of {{- beneficiaryFullName}}.":"{{- organizerFullName}} organiseert deze inzamelingsactie namens {{- beneficiaryFullName}}.","{{- organizerFullName}} is organizing this fundraiser.":"{{- organizerFullName}} organiseert deze actie.","This team raised {{raisedAmountFormatted}} from {{count}} other donation.":"Dit team heeft {{raisedAmountFormatted}} ingezameld dankzij {{count}} andere donatie.","This team raised {{raisedAmountFormatted}} from {{count}} other donation.:_:plural":"Dit team heeft {{raisedAmountFormatted}} ingezameld dankzij {{count}} andere donaties.","Raised {{amount}} from {{count}} donation":"{{amount}} ingezameld via {{count}} donaties","Raised {{amount}} from {{count}} donation:_:plural":"{{amount}} ingezameld dankzij {{count}} donaties","Donations are typically 100% tax deductible in the US.":"Donaties zijn doorgaans 100% aftrekbaar van de belasting in de VS.","Donations are typically tax deductible in Canada.":"Donaties zijn doorgaans aftrekbaar van de belasting in Canada.","Donations are typically tax deductible in Australia.":"Donaties zijn doorgaans aftrekbaar van de belasting in Australië.","Donations eligible for Gift Aid.":"Donaties komen in aanmerking voor Gift Aid.","{{city}}, {{state}}":"{{city}}, {{state}}","Registered nonprofit":"Geregistreerde non-profitorganisatie","text":"tekst","Organizer and beneficiary":"Organisator en begunstigde","Fundraising team: {{- name}} ({{count}})":"Inzamelingsactieteam: {{- name}} ({{count}})","Copy fundraiser link":"Link van inzamelingsactie kopiëren","Share this fundraiser so it can raise up to 5x more.":"Deel deze inzamelingsactie, het kan ertoe leiden dat je 5x zoveel inzamelt.","Build momentum for this fundraiser.":"Bouw momentum op voor deze inzamelingsactie.","View donation summary":"Donatieoverzicht weergeven","Check out your donation details.":"Bekijk je donatiegegevens.","Add a comment":"Voeg een reactie toe","Add a supportive message with your donation.":"Voeg een bemoedigend bericht toe aan je donatie.","Add a profile photo":"Profielfoto toevoegen","Looks good. Your profile photo has been added.":"Ziet er goed uit. Je profielfoto is toegevoegd.","Let friends and the GoFundMe community know it’s you!":"Laat vrienden en de GoFundMe-community weten dat jij het bent!","Share on Facebook":"op Facebook delen","Tell your Facebook friends about this fundraiser.":"Vertel je Facebook-vrienden over deze inzamelingsactie.","Join fundraising team":"Sluit je aan bij dit inzamelingsteam","Help {{organizerName}} raise more funds.":"Help {{organizerName}} met het inzamelen van nog meer geld.","Thank donors":"Donateurs bedanken","Show appreciation and get more support. Ask donors to share this fundraiser.":"Toon je waardering en krijg nog meer steun. Vraag donateurs om deze inzamelingsactie te delen.","Add a donate button":"Donatieknop toevoegen","Reach your community on a website or blog.":"Bereik je community op een website of blog.","Donated {{amount}}":"{{amount}} gedoneerd","Hi, I’d really appreciate it if you would share or donate to this GoFundMe, {{fundTitle}} {{- shareLink}}":"Hallo, ik zou het heel erg op prijs stellen als je deze GoFundMe-campagne {{fundTitle}} {{- shareLink}} wilt delen en iets wilt doneren.","Captcha challenge failed. Please try again.":"CAPTCHA mislukt. Probeer het opnieuw.","You exceeded the maximum number of tries. Please try again later.":"Je hebt het maximale aantal pogingen overschreden. Probeer het later opnieuw.","An error occurred. Please try again later.":"Er is iets misgegaan. Probeer het later opnieuw.","Sign in to follow this fundraiser":"Log in om deze inzamelingsactie te volgen","Sign in to post your comment":"Log in om je reactie te publiceren","Reset instructions sent to {{email}}":"\'Instructies opnieuw instellen\' naar {{email}} verstuurd","Please check your email & password or please sign in with your Facebook account.":"Controleer je e-mailadres en wachtwoord of probeer in te loggen met je Facebook-account.","Please check your email & password":"Controleer je e-mailadres en wachtwoord"}},"pt_BR":{"apps-campaign":{"Better Business Bureau":"Better Business Bureau","Accredited business":"Empresa credenciada","Created {{dateFormatBasedOnLocal}}":"Criada em {{dateFormatBasedOnLocal}}","Just now":"neste instante","Created {{count}} hour ago":"Criada há {{count}} hora","Created {{count}} hour ago:_:plural":"Criada há {{count}} horas","Created {{count}} day ago":"Criada há {{count}} dia","Created {{count}} day ago:_:plural":"Criada há {{count}} dias","Thank you for your donation. A receipt has been sent to <1>{{donorEmail}}</1>":"Agradecemos sua doação. Um recibo foi enviado para <1>{{donorEmail}}</1>","by":"por","for":"para","Team fundraiser":"Campanha em equipe","Link Copied":"Link copiado","Anonymous":"Anônimo","In partnership with<1></1><2>{{partnerName}}</2>":"Em pareceria com <1></1><2>{{partnerName}}</2>","See all":"Ver todas","This fundraiser is located near you":"Esta campanha está em um local perto de você","{{- recentDonorsStr}} person just donated":"{{- recentDonorsStr}} pessoa acabou de doar","{{- recentDonorsStr}} person just donated:_:plural":"{{- recentDonorsStr}} pessoas acabaram de doar","This fundraiser is no longer accepting donations. If you are the organizer, beneficiary, team member, or donor,<1></1><2>sign in</2><3></3>to see additional information.":"Essa campanha não aceita mais doações. Se você é um organizador, beneficiário, membro da equipe ou doador<1></1><2>entre</2><3></3> para ver mais informações.","The organizer has currently disabled new donations to this fundraiser.":"O organizador desabilitou novas doações para esta campanha.","This fundraiser has been deactivated by the organizer.":"Esta campanha foi desativada pelo organizador.","Learn more":"Saiba mais.","Copy to clip board":"Copiar para a área de transferência","Fundraiser link copied":"Link para campanha copiado","Copy to clipboard":"Copiar para a área de transferência","Now paste this link into a Facebook post, Messenger, or any Facebook groups you\'re in.":"Agora, cole este link em um post do Facebook, do Messenger ou nos grupos do Facebook de que você participa.","Copy your fundraiser link and paste it into a Facebook post, Messenger, or any Facebook groups you’re in.":"Copie o link da campanha e cole-o em um post do Facebook, do Messenger ou nos grupos do Facebook de que você participa.","Questions about where to share this link?":"Perguntas sobre onde compartilhar este link?","<0>Tip:</0><1></1>Paste this fundraiser link anywhere.":"<0>Dica:</0><1></1>cole o link dessa campanha em qualquer lugar.","Collapse text":"Recolher texto","Read more":"Ler mais","Edit":"Editar","Delete":"Excluir","Edited":"Editado","{{name}}<1></1>donated<3></3><4>{{donationAmount}}</4>":"{{name}}<1></1>doou<3></3><4>{{donationAmount}}</4>","{{name}}<1></1>commented":"{{name}}<1></1>comentou","Campaign organizer":"Organizador da campanha","Beneficiary":"Beneficiário","GoFundMe Guarantee":"Garantia GoFundMe","Only donations on our platform are protected by the GoFundMe Guarantee.":"Somente as doações na nossa plataforma são protegidas pela Garantia GoFundMe.","Donate now":"Doar agora","Your donation":"Sua doação","Recent donation":"Doação recente","Top donation":"Principal doação","First donation":"Primeira doação","Offline":"doação off-line","Become an early supporter":"Torne-se um investidor antecipado","Become the first supporter":"Seja o primeiro a apoiar","Your donation matters":"Sua doação faz diferença","In the rare case something isn’t right, we will work with you to determine if misuse occurred.":"Nas raras situações em que algo não der certo, trabalharemos com você para determinar se houve mau uso.","Email":"E-mail","Embed HTML":"Incorporar HTML","Messenger":"Messenger","Facebook":"Facebook","<0>We use cookies</0> to enable features and market content. Click “That’s OK” to add cookies. View<2></2><3>privacy policy</3><4></4>or<6></6><7>manage cookies.</7>":"<0>Usamos cookies</0> para permitir recursos e conteúdo de mercado. Clique em “OK” para adicionar cookies. Leia a <2></2><3>política de privacidade</3><4></4>ou <6></6><7>gerencie cookies.</7>","That\'s OK":"OK","<0>As stated on the banner, GoFundMe uses cookies to enable features and market content to provide you with an improved experience. We consider these cookies to be non-essential, pursuant to our<1></1><2>privacy policy.</2><3></3>When you click “That’s OK” on the banner, we add these non-essential cookies.</0>":"<0>Conforme indicado no banner, o GoFundMe usa cookies para permitir recursos e conteúdo de mercado com o objetivo de oferecer uma experiência melhor. Consideramos esses cookies não essenciais, de acordo com a nossa <1></1><2>política de privacidade.</2><3></3>Quando você clicar em “OK” no banner, adicionaremos esses cookies não essenciais.</0>","Cookie Preferences":"Preferências de cookies","Close cookie modal":"Fechar o modal de cookies","We value your privacy":"Nós valorizamos a sua privacidade","Here in this Cookie Preferences page, the non-essential cookies category is broken down\\n                            further into functional and marketing, as you can see below. You can change your\\n                            preferences as to both functional and marketing cookies here. When you click “Save” on\\n                            this page, we will add only those non-essential cookies you select.":"Nesta página de Preferências de Cookie, a categoria de cookies não essenciais está subdividida em\\n                    funcional e de marketing, como mostrado abaixo. Você pode alterar suas preferências para cookies funcionais e de marketing aqui. Quando você clicar em “Salvar” nesta página, adicionaremos apenas os cookies não essenciais selecionados.","Marketing cookies":"Cookies de marketing","Enable":"Ativar","GoFundMe collects information regarding user navigation to provide sponsored content\\n                            relevant to our products on other sites. Specifically, if you start a fundraiser on\\n                            GoFundMe and you do not publish that fundraiser, GoFundMe may then show a banner ad the\\n                            next time you are on Facebook.":"O GoFundMe coleta informações sobre a navegação do usuário para fornecer conteúdo patrocinado relevante para os nossos produtos em outros sites. Especificamente, se você iniciar uma campanha no GoFundMe e não publicá-la, o GoFundMe poderá mostrar um banner na próxima vez em que estiver no Facebook.","Functional cookies":"Cookies funcionais","We use data collected with these cookies to improve your experiences on the GoFundMe\\n                            platform, as well as avoiding bugs or testing new features.":"Usamos dados coletados com esses cookies para melhorar suas experiências na plataforma GoFundMe, bem como para evitar bugs ou testar novos recursos.","Essential cookies":"Cookies essenciais","Always enabled":"Sempre ativar","Data is collected by these cookies to offer basic functions, to ensure that the GoFundMe\\n                            Platform functions technically, to keep track of your settings and activities, and for\\n                            security or fraud prevention purposes.":"Os dados são coletados por esses cookies para oferecer funções básicas, assegurar que a Plataforma GoFundMe funcione bem, rastrear suas configurações e atividades e para fins de segurança e prevenção a fraudes.","Enable all and close":"Ativar tudo e fechar","Enable all":"Ativar todos","Save and close":"Salvar e fechar","Save":"Salvar","Show less":"Mostrar menos","Show more":"Mostrar mais","Previous image":"Imagem anterior","Next image":"Próxima imagem","Image {{i}} of {{t}}":"Imagem {{i}} de {{t}}","Previous 10 images":"10 imagens anteriores","Next 10 images":"Próximas 10 imagens","Close image gallery":"Fechar galeria de imagens","Delete this image":"Excluir esta imagem","Instagram":"Instagram","Copy and paste this link on your Instagram bio":"Copie e cole este link na sua biografia do Instagram","Fundraiser link":"Link da campanha","Link copied":"Link copiado","Something went wrong.":"Algo deu errado.","Share on Instagram":"Compartilhar no Instagram","Back to sharing":"Voltar ao compartilhamento","LinkedIn":"LinkedIn","Hi, I’d really appreciate it if you would share or donate to this GoFundMe.":"Oi, eu ficaria muito feliz se você compartilhasse esta campanha GoFundMe ou fizesse uma doação.","Your password must have:":"A senha precisa ter:","At least 12 characters":"Pelo menos 12 caracteres","1 uppercase letter":"1 letra maiúscula","1 lowercase letter":"1 letra minúscula","1 number":"1 número","1 symbol":"1 símbolo","Print Poster":"Imprimir cartaz","Print":"Imprimir","{{raisedAmountString}}<1></1><2>{{sameCurrencyCode}} raised</2>":"{{raisedAmountString}}<1></1><2>{{sameCurrencyCode}} arrecadados</2>","{{raisedAmountString}}<1></1><2>{{sameCurrencyCode}} raised of {{goalAmountNBSP}} goal</2>":"{{raisedAmountString}}<1></1><2>{{sameCurrencyCode}} arrecadados da meta de {{goalAmountNBSP}}</2>","{{goalAmountNBSP}}<1></1><2>{{sameCurrencyCode}} goal</2>":"{{goalAmountNBSP}}<1></1><2> meta de {{sameCurrencyCode}}</2>","share":"compartilhar","Share as much as possible":"Compartilhe o máximo possível","Try using all sharing options. Telling people about your fundraiser is the only way to start raising donations.":"Tente usar todas as opções de compartilhamento. Falar com as pessoas sobre sua campanha é a única forma de começar a receber doações.","Text":"SMS","donor":"doador","donors":"doadores","shares":"compartilhamentos","follower":"seguidor","followers":"seguidores","Fundraiser Stats":"Estatísticas da campanha","Share":"Compartilhar","By continuing, you agree with GoFundMe<1></1><2>terms</2><3></3>and<5></5><6>privacy policy</6>":"Ao continuar, você confirma que aceita os <1></1><2>termos</2><3></3> e a <5></5><6>política de privacidade</6> do GoFundMe","Preview email":"Visualizar e-mail","Twitter":"Twitter","{{article}} by {{- authorName}}":"{{article}} por {{- authorName}}","See older updates":"Ver atualizações anteriores","WhatsApp":"WhatsApp","Your donation is made to PayPal Giving Fund Australia (ABN 65 105 950 945), a Public Ancillary Fund and a charity registered with the Australian Charities and Not-for-profits Commission, subject to its<1></1><2>terms</2>.":"Sua doação é enviada ao PayPal Giving Fund Australia (ABN 65 105 950 945), um fundo público auxiliar e organização beneficente registrada na Australian Charities and Not-for-profits Commission, de acordo com seus <1></1><2>termos</2>.","While GoFundMe does not have a platform fee, PayPal Giving Fund Australia receives your donation after deduction of transaction<1></1><2>fees</2><3></3>and will grant funds to your recommended charity on a monthly basis.*":"Embora o GoFundMe não cobre uma tarifa de plataforma, o PayPal Giving Fund Australia recebe sua doação, depois da dedução das <1></1><2>tarifas</2><3></3> de transação, e concede os fundos à organização beneficente recomendada uma vez por mês..*","*If, after reasonable efforts, PayPal Giving Fund Australia cannot deliver donations to this<1></1>charity, it will grant funds to another charity per PayPal Giving Fund Australia\'s<3></3><4>policies</4>.":"*Se, após esforços razoáveis, o PayPal Giving Fund Australia não puder entregar as doações a essa <1></1>organização beneficente, os fundos serão doados a outra organização beneficente de acordo com as <3></3><4>políticas</4> do PayPal Giving Fund Australia.","Donations raised benefit:":"Benefício arrecadado com as doações:","How charity fundraisers work":"Como funcionam as campanhas para organizações beneficentes","Your donation is made to PayPal Giving Fund Canada, a charity registered with the Canada Revenue Agency (No. 812867752RR0001), subject to its<1></1><2>terms</2>.":"Sua doação é feita ao PayPal Giving Fund Canada, uma organização beneficente cadastrada na Canada Revenue Agency (núm. 812867752RR0001), de acordo com seus <1></1><2>termos</2>.","While GoFundMe does not have a platform fee, PayPal Giving Fund Canada receives your donation after deduction of transaction<1></1><2>fees</2><3></3>and will grant funds to your recommended charity on a monthly basis.*":"Embora o GoFundMe não cobre uma tarifa de plataforma, o PayPal Giving Fund Canada recebe sua doação, depois da dedução das <1></1><2>tarifas</2><3></3> de transação, e concede os fundos à organização beneficente recomendada uma vez por mês..*","*If, after reasonable efforts, PayPal Giving Fund Canada cannot deliver donations to this<1></1>charity, it will grant funds to another charity per PayPal Giving Fund Canada\'s<3></3><4>policies</4>.":"*Se, após esforços razoáveis, o PayPal Giving Fund Canada não puder entregar as doações a essa <1></1>organização beneficente, os fundos serão doados a outra organização beneficente de acordo com as <3></3><4>políticas</4> do PayPal Giving Fund Canada.","Support":"Suporte","Contribute":"Colaborar","Buy me a coffee":"Comprar um café para mim","Show appreciation":"Mostrar reconhecimento","Start a GoFundMe":"Começar um GoFundMe","Support this cause":"Apoie esta causa","{{- userName}} needs your help today! {{- campaignTitle}}":"{{- userName}} precisa de sua ajuda hoje! {{- campaignTitle}}","Fundraiser for {{- userName}} by {{- campaignOrganizer}} : {{- campaignTitle}}":"Campanha de arrecadação de fundos para {{- userName}} por {{- campaignOrganizer}}: {{- campaignTitle}}","Fundraiser by {{- userName}} : {{- campaignTitle}}":"Campanha de arrecadação de fundos de {{- userName}}: {{- campaignTitle}}","{{- campaignTitle}}, organized by {{- campaignOrganizer}}":"{{- campaignTitle}} organizada por {{- campaignOrganizer}}","See more":"Ver mais","See top donations":"Ver as principais doações","Continue reading":"Continuar lendo","Updates":"Atualizações","Image {{imageIndex}} of {{totalImages}}. Click to view all images":"Imagem {{imageIndex}} de {{totalImages}}. Clique para ver todas as imagens","Image {{imageIndex}} of {{totalImages}}":"Imagem {{imageIndex}} de {{totalImages}}","Photo limit reached":"Limite de fotos atingido","Add more photos":"Adicionar mais fotos","Add photos to comment":"Adicionar fotos ao comentário","I donated because...":"Eu doei porque...","Add this public comment to the fundraiser.":"Inclua este comentário público na campanha.","Your donation will be displayed as Anonymous, and this comment will not show up publicly on the campaign.":"Sua doação será exibida como anônima, e seu comentário não aparecerá publicamente na campanha.","Post comment":"Publicar comentário","Please choose a maximum of 10 photos for your comment.":"Escolha no máximo 10 fotos para o seu comentário.","Please donate and share words of encouragement.":"Doe e compartilhe palavras de incentivo.","Continue":"Continuar","Comments":"Comentários","Please select one.":"Selecione uma opção.","Yes, I have contacted the Campaign Organizer.":"Sim, contatei o organizador da campanha.","No, I have not contacted the Campaign Organizer.":"Não contatei o organizador da campanha.","They are a family member":"A pessoa é um parente","They are a friend or acquaintance":"A pessoa é um amigo ou conhecido","I do not know the organizer of this campaign":"Não conheço o organizador dessa campanha","Your Name":"Seu nome","Your Phone Number":"Número do seu telefone","Required in case our team needs to contact you for further details.":"Necessário, caso nossa equipe precise contatar você para obter mais detalhes.","Your Email":"Seu e-mail","Confirm Email":"Confirmar e-mail","Page URL":"URL da página","Please enter the URL in this format: https://www.gofundme.com/f/example-campaign":"Digite a URL neste formato: https://www.gofundme.com/f/example-campaign","I don\'t know the page URL":"Não sei a URL da página","Have you already contacted the organizer of this campaign?":"Você já contatou o organizador dessa campanha?","How do you know the organizer of this campaign?":"Como você conhece o organizador dessa campanha?","Please explain your relationship to the Campaign Organizer.":"Explique o seu relacionamento com o organizador da campanha.","How much money did you receive from the campaign organizer?":"Quanto dinheiro você recebeu do organizador da campanha?","Why do you believe this person will not deliver the funds to you?":"Por que você acha que essa pessoa não vai lhe entregar os fundos?","Please attach a copy of a government issued photo ID":"Anexe uma cópia de um documento de identificação com foto","Please upload only JPEG, GIF, PNG or PDF files. The file size must be less than 5MB.":"Carregue somente arquivos JPEG, GIF, PNG ou PDF. O arquivo precisa ter menos de 5 MB.","Upload any evidence you may have":"Carregue qualquer comprovação que você tiver","Send Email":"Enviar e-mail","Message Subject":"Assunto da mensagem","Your Message":"Sua mensagem","I am requesting a refund because...":"Estou solicitando um reembolso porque...","Describe your concerns about how the funds are being used.":"Explique sua preocupação relacionada a como os fundos estão sendo usados.","40 characters minimum":"mínimo de 40 caracteres","Yes, I know the Campaign Organizer.":"Sim, conheço o organizador da campanha.","No, I do not know the Campaign Organizer":"Não, não conheço o Organizador da campanha.","I am a beneficiary.":"Sou beneficiário.","I am a donor.":"Sou doador.","I am an individual concerned about this campaign.":"Tenho certas dúvidas que me preocupam sobre essa campanha.","I am involved in a legal dispute with the Campaign Organizer.":"Estou em disputa judicial com o organizador da campanha.","This campaign includes libelous statements.":"A campanha contém afirmações caluniosas.","Campaign includes factually incorrect information.":"A campanha inclui informações factualmente incorretas.","Campaign Organizer has not used funds for the stated purpose.":"O organizador da campanha não usou os fundos para a finalidade declarada.","They are impersonating someone or have copied another campaign.":"Eles estão se passando por outra pessoa ou copiaram outra campanha.","Please explain your concern(s) in detail.":"Explique suas preocupações com detalhes.","Which statements are libelous and why?":"Quais declarações são difamatórias e por quê?","Which statements are incorrect and why?":"Quais declarações estão incorretas e por quê?","How have the campaign’s donations been spent?":"Como as doações para a campanha foram gastas?","What is the original campaign link/title?":"Qual é o link/título original da campanha?","Please describe your concerns":"Descreva suas preocupações.","How do you know the campaign organizer?":"De onde você conhece o organizador da campanha?","How are you connected to the campaign?":"Qual é a sua relação com a campanha?","How much money is being withheld and why?":"Qual o valor e o motivo da retirada?","Why are you concerned about your donation?":"Por que você está preocupado com a sua doação?","Please describe your concerns.":"Descreva suas preocupações.","Do you know the Campaign Organizer?":"Você conhece o organizador da campanha?","Which best describes you?":"Que descrição melhor corresponde a você?","Publication":"Publicação","Self-Service":"Self-Service","Please select an option which best describes you to see relevant information.":"Selecione a opção que melhor descreva você para receber informações relevantes.","For customized help, please sign in.":"Entre para obter ajuda personalizada.","Sign In":"Entre","Top Answers":"Respostas principais","How do I get a refund?":"Como solicitar um reembolso?","How do I withdraw money?":"Como retiro meu dinheiro?","Is my country supported?":"Vocês operam no meu país?","Can I withdraw money?":"Posso retirar dinheiro?","How do I reset my password?":"Como redefino minha senha?","How do I invite someone to withdraw?":"Como convidar alguém para fazer retirada?","I can\'t withdraw my funds, now what?":"Não consigo retirar os meus fundos. E agora?","How do your fees work?":"Como funcionam suas tarifas?","What about taxes and stuff?":"E quanto a impostos e questões semelhantes?","GoFundMe homepage":"Página inicial do GoFundMe","Choose your language":"Escolher o idioma","How GoFundMe works":"Como o GoFundMe funciona","Common questions":"Perguntas frequentes","Success stories":"Histórias de sucesso","Supported countries":"Países em que operamos","Team fundraising":"Campanha em equipe","Donate button":"Botão Doar","Support COVID-19 fundraisers":"Apoiar campanhas relacionadas ao COVID-19","Why GoFundMe":"Por que o GoFundMe","Medical":"Medicina","Emergency":"Emergência","Memorial":"Memorial","Education":"Educação","Nonprofit":"Organização sem fins lucrativos","Fundraise for":"Arrecade fundos para","Help center":"Central de Ajuda","Blog":"Blog","GoFundMe Stories":"Histórias do GoFundMe","Press center":"Centro de imprensa","Careers":"Carreiras","About":"Sobre","Resources":"Recursos","Terms":"Termos","Privacy":"Privacidade","Legal":"Informações de caráter legal","Do Not Sell My Personal Information":"Não vender minhas informações pessoais","Hide":"Ocultar","Show":"Mostrar","Hide guidance cards":"Ocultar cartões de orientação","Show guidance cards":"Mostrar cartões de orientação","Previous card":"Cartão anterior","Next card":"Próximo cartão","You are donating to<1></1><2>PayPal Giving Fund Ireland</2>, a registered charity (No. 20205692), which will email you a receipt for your donation.":"Você está doando ao <1></1><2>PayPal Giving Fund Ireland</2>, uma organização beneficente registrada (núm. 20205692), que enviará um recibo por e-mail da sua doação.","*In rare cases, a charity may cease to meet PayPal Giving Fund Ireland’s legal or other eligibility requirements to receive funds or may not accept the funds. In such cases, PayPal Giving Fund Ireland will<1></1><2>reassign the funds</2><3></3>to another charity and (wherever possible) seek a new recommendation from you.":"Em algumas situações especiais, uma organização beneficente pode deixar de cumprir os requisitos legais ou outras exigências de qualificação do PayPal Giving Fund Ireland para receber fundos ou talvez não aceitar os fundos. Nessas situações, o PayPal Giving Fund Ireland <1></1><2>reatribuirá os fundos</2><3></3> a uma organização beneficente semelhante e, sempre que possível, buscará uma nova recomendação sua.","The charity will typically receive the funds from PayPal Giving Fund within 15-45 days (90 days if the charity has not enrolled).*":"Geralmente, a organização beneficente recebe os fundos do PayPal Giving Fund em 15-45 dias (90 dias se essa organização ainda não estiver cadastrada).*","Open share modal":"Abrir o modo de compartilhamento","Donate":"Doar","Sign in":"Entrar","Sign out":"Sair","Donations you\'ve made":"As doações que você fez","Account settings":"Configurações da conta","Your fundraisers":"Suas campanhas","Open navigation menu":"Abrir menu de navegação","Close navigation menu":"Fechar menu de navegação","My campaigns":"Minhas campanhas","Close Modal":"Fechar modal","Start":"Iniciar","Don\'t have an account? ":"Não tem uma conta? ","Sign up":"Cadastre-se.","Enter the email address associated with your account, and we\'ll email you a link to reset your password":"Digite o e-mail associado à sua conta. Vamos enviar um e-mail com um link para redefinir sua senha.","Email address":"Endereço de e-mail","Request new password":"Solicitar nova senha","Don\'t have an account?<1></1><2>Sign up</2>":"Não tem uma conta?<1></1><2>Cadastre-se</2>.","Forgot your password?":"Esqueceu a senha?","Password":"Senha","Sign in to GoFundMe":"Entrar no GoFundMe","Already have an account?<1></1><2>Sign in</2>":"Já tem uma conta?<1></1><2>Entrar</2>","Please<1></1><2>sign in</2><3></3>to access your account.":"<1></1><2>Entre</2><3></3> para acessar sua conta.","First Name":"Nome","Last Name":"Sobrenome","Confirm email address":"Confirmar endereço de e-mail","Set password":"Definir senha","We will never post without your permission":"Nunca publicamos sem a sua permissão","Continue with Facebook":"Continuar no Facebook","or":"ou","Use my email address":"Usar meu endereço de e-mail","You are donating to<1></1><2>PayPal Giving Fund</2><3></3>UK, a registered charity (No. 1110538), which will email you a receipt for your donation and claim Gift Aid where eligible.":"Você está doando ao <1></1><2>PayPal Giving Fund</2><3></3> do Reino Unido, uma organização beneficente registrada (núm. 1110538), que enviará a você um recibo por e-mail da sua doação e solicitará um Gift Aid quando disponível.","<0></0>*In very limited cases, a recommended charity may cease to meet PayPal Giving Fund\'s legal or other eligibility<2></2><3>requirements</3><4></4>. In such cases, PayPal Giving Fund will reassign the funds to a similar charity, and (wherever possible) seek a new recommendation from donors.":"<0></0>*Em raros casos, uma organização beneficente recomendada talvez deixe de atender aos <2></2><3>requisitos</3><4></4> legais ou outros de qualificação para o Paypal Giving Fund. Nessas situações, o PayPal Giving Fund reatribuirá os fundos a uma organização beneficente semelhante e, sempre que possível, buscará uma nova recomendação dos doadores.","The charity will typically receive the funds from PayPal Giving Fund within 15-45 days of your donation if the charity has enrolled (or 90 days if the charity has not yet enrolled). Unlike other platforms, 100% of any Gift Aid will go to the charity as well.":"Em geral, a organização beneficente recebe os fundos do PayPal Giving Fund em 15 a 45 dias após a doação, caso seja cadastrada (ou 90 dias se a organização beneficente ainda não for cadastrada). Diferentemente de outras plataformas, 100% de qualquer Gift Aid são enviados à organização beneficente também.","PayPal Giving Fund will grant your donation to {{charityName}} within 15-45 days (Or 90 days if the charity has not yet enrolled)*.":"O PayPal Giving Fund concederá sua doação para {{charityName}} no prazo de 15 a 45 dias (ou 90 dias se a organização beneficente ainda não estiver inscrita )*.","*If, after reasonable efforts have been made, PayPal Giving Fund cannot grant the funds to this charity, they will contact you before reassigning the funds in accordance with<1></1><2>PayPal Giving Fund\'s Policies</2>.":"*Se, depois de tentativas e esforços razoáveis, o PayPal Giving Fund não conseguir conceder os fundos a esta organização beneficente, eles entrarão em contato com você antes de reatribuir os fundos de acordo com as <1></1><2>Políticas do PayPal Giving Fund</2>.","How non-profit fundraisers work":"Como funcionam as organizações sem fins lucrativos","Donations are typically 100% tax deductible in the US. Your donation is made to PayPal Giving Fund (a 501(c)(3) charitable organization) to benefit your chosen charity.":"Em geral as doações são 100% dedutíveis de impostos nos EUA. Sua doação é feita ao PayPal Giving Fund (uma organização beneficente 501(c)(3)) em prol da entidade escolhida por você.","Fundraiser updates ({{totalUpdates}})":"Atualizações de campanhas ({{totalUpdates}})","Fundraiser updates":"Atualizações de campanhas","Close fundraiser updates modal":"Fechar modal de atualizações de campanhas","Thanks for donating":"Agradecemos a sua doação","Boost this fundraiser":"Impulsionar sua campanha","Be the first to help":"Seja o primeiro a ajudar.","Your early support will go a long way and help inspire others to donate.":"Seu suporte desde o início é muito importante e inspirará outros a doar.","Report fundraiser":"Denunciar campanha","See top":"Ver as principais","Donations":"Doações","Contact Us - Answer Found":"Fale conosco - Resposta encontrada","Answer Found!":"Resposta encontrada!","Thanks very much!":"Muito obrigado!","If you ever need some extra help, the GoFundMe Team is standing by!":"Se precisar de mais ajuda, a equipe <br>do GoFundMe está a postos!","Return to Help Center":"Voltar à Central de Ajuda","Contact Us - Message Sent!":"Fale conosco - mensagem enviada!","Message Sent":"Mensagem enviada","Thank you for your patience":"Obrigado pela paciência","We\'re sorry, but that campaign cannot be found. Please check the link URL and try again.":"Infelizmente não conseguimos encontrar essa campanha. Verifique a URL do link e tente de novo.","Page Not Found":"Página não encontrada","Home":"Início","Campaign Not Found":"Campanha não encontrada","Search gofundme.com for":"Pesquisar no gofundme.com","Show your support by going to this link":"Mostre o seu apoio acessando este link","Pagination navigation":"Navegação por pagina","Previous page":"Página anterior","Previous":"Anterior","Next page":"Próxima página","Next":"Avançar","Page {{page}} of {{nbPages}}":"Página {{page}} de {{nbPages}}","Search in progress":"Pesquisa em andamento","Fundraisers for \\"{{query}}\\" in all locations":"Campanhas para \\"{{query}}\\" em todos os locais","No results found for \\"{{query}}\\" in all locations":"Nenhum resultado encontrado para \\"{{query}}\\" em nenhum local","Search results for {{- query}}":"Resultados da pesquisa por {{- query}}","GoFundMe: {{- searchQuery}}":"GoFundMe - {{- searchQuery}}","The leader in online fundraising":"O líder está on-line arrecadando fundos","We\'re sorry. Something went wrong. Please wait one minute and try again.":"Sentimos muito. Algo deu errado. Aguarde um minuto e tente novamente.","Unknown Error":"Erro desconhecido","Join this list. <1>Donate now.</1>":"Entrar nesta lista. <1>Doar agora.</1>","Top":"Início","Donations ({{totalDonations}})":"({{totalDonations}}) de doações","Close all donations modal":"Fechar o modal de todas as doações","Close":"Fechar","<0>What is this? <1></1><2>Learn more</2></0>":"<0>O que é isso? <1></1><2>Saiba mais.</2></0>","Large":"Grande","Medium":"Médio","Small (Button only)":"Pequeno (botão somente)","Copy and paste the following embed code:":"Copiar e colar o seguinte código incorporado:","Copy HTML code":"Copiar código HTML","Copied!":"Copiado!","Something went wrong. Please select the code block to manually copy it.":"Algo deu errado. Selecione o bloco de código para copiá-lo manualmente.","Preview":"Prévia","Select the button text":"Selecionar o texto do botão","Have you seen \\"{{- title}}\\"?":"Você viu \\"{{- title}}\\" ?","Hello \\n \\n I thought you might be interested in supporting this GoFundMe, {{- shareLink}}. \\n \\n Even a small donation could help {{- name}} reach their fundraising goal. And if you can\'t make a donation, it would be great if you could share the fundraiser to help spread the word. \\n \\n Thanks for taking a look!":"Olá, \\n \\n Pensei que você talvez esteja interessado em apoiar essa campanha GoFundMe, {{- shareLink}}. \\n \\n Até uma pequena doação pode ajudar {{- name}} a alcançar a meta de arrecadação. Se não puder fazer uma doação, também ajudaria muito se você pudesse divulgar a campanha. \\n \\n Agradecemos por dar uma olhada!","Hi,\\n\\nI\'d really appreciate it if you would share or donate to this GoFundMe.\\n\\n*{{- fundTitle}}*\\n\\n{{- description}}\\n\\nRead more here {{- fundUrl}}\\n\\nForward this message to your contacts to help this campaign reach its goal!":"Oi, eu ficaria muito feliz se você compartilhasse ou doasse para esta campanha no GoFundMe.*{{- fundTitle}}*\\n\\n{{- description}}\\n\\nLeia mais aqui {{- fundUrl}}\\n\\nEncaminhe esta mensagem aos seus contatos para ajudar a campanha a alcançar a meta!","Hi, I\'d really appreciate it if you would share or donate to this GoFundMe, {{- shareLink}}":"Oi, eu ficaria muito feliz se você compartilhasse ou doasse para esta campanha no GoFundMe, {{- shareLink}}","Help by sharing":"Ajuda compartilhando","Fundraisers shared on social networks raise up to 5x more":"As campanhas compartilhadas nas redes sociais arrecadam até 5 vezes mais.","Copy":"Copiar","Copy link":"Copiar link","Back":"Voltar","Top Donations":"Principais doações","See all donations":"Ver as todas as doações","All":"Todas","Be a top donor for {{- beneOrOrganizerName}} with {{- averageTopDonation}} or more.":"Seja um dos principais doadores para {{- beneOrOrganizerName}} com o valor de {{- averageTopDonation}} ou mais.","<0>Donating outside of GoFundMe</0><1>Donations on other platforms are not protected by the GoFundMe Guarantee. In the rare case that something isn’t right on GoFundMe, we work with you to determine if misuse occurred.<1></1><2>Learn more</2></1><2>Donate now</2>":"<0>Doações fora do GoFundMe</0><1>As doações em outras plataformas não são protegidas pela Garantia GoFundMe. Nas raras situações em que algo não der certo no GoFundMe, trabalharemos com você para determinar se houve mau uso.<1></1><2>Saiba mais</2></1><2>Doar agora</2>","Close modal":"Fechar modal","Suggestions":"Sugestões","Make a Beneficiary Claim":"Fazer uma reivindicação do beneficiário","Make a Beneficiary Claim | GoFundMe Support":"Fazer uma reivindicação do beneficiário | Atendimento GoFundMe","Contact Us":"Fale conosco","Make a Donor Claim":"Fazer uma reivindicação do doador","Make a Donor Claim | GoFundMe Support":"Fazer uma reivindicação do doador | Atendimento GoFundMe","Report a Fundraiser":"Denunciar uma campanha","Report a Fundraiser | GoFundMe Support":"Denunciar uma campanha | Suporte do GoFundMe","Press Contact Form":"Formulário de contato com a imprensa","Press Contact Form | GoFundMe Support":"Formulário de Contato com a Imprensa| Atendimento GoFundMe","Send Message":"Enviar mensagem","Contact":"Contatar","Write {{firstName}} a message":"Escrever uma mensagem para {{firstName}}","Organizer":"Organizadora","Cancel":"Cancelar","2. Use your donation receipt to<1></1><2>edit your donation comment</2><3></3>or<5></5><6>change your name on a donation</6>.":"2. Use seu recibo de doação para <1></1><2>editar o comentário sobre a doação</2><3></3> ou <5></5><6>alterar seu nome em uma doação</6>.","If you do not remember your GoFundMe password, please<1></1><2>click here to request a new password</2>.":"Se você não se lembrar da senha do GoFundMe, <1></1><2>clique aqui para solicitar uma nova senha</2>.","If you received an<1></1><2>unexpected refund</2><3></3>for your donation it could be for any of the following reasons:":"Caso você tenha recebido um <1></1><2>reembolso inesperado</2><3></3> pela sua doação, isso pode ter acontecido devido a um destes motivos:","Edit My Comment":"Editar meu comentário","Edit My Name":"Editar meu nome","Get Donation Receipt":"Obter recibo da doação","Refund All Donations":"Reembolsar todas as doações","Update Donation Anonymity":"Atualizar anonimidade da doação","We can help you with that! Confirm the email address you used to donate.":"Podemos ajudar com isso! Confirme o endereço de e-mail usado ao fazer a doação.","Editing the information on a donation is quick and easy, and can be done from your donation receipt or through your GoFundMe account.":"É fácil e rápido editar as informações sobre uma doação, e isso pode ser feito usando o recibo de doação ou por meio da sua conta GoFundMe.","Actions you can take on your own:":"Ações que você pode executar por conta própria:","1. Request a new donation receipt by entering your donation email address in the field below.":"1. Solicitar um novo recibo de doação inserindo seu e-mail de doação no campo abaixo.","We can help you with that! If you have a personal fundraiser, please enter the email address you used to create your fundraiser.":"Podemos ajudar com isso! Se você tiver uma campanha pessoal, informe o endereço de e-mail usado para criar essa campanha.","If you have a Certified Charity fundraiser, our Customer Happiness Team can help you with that! Please select an option below in \\"Still need help?\\" and include the link to the fundraiser you\'d like to refund.":"Se você tiver uma campanha para Organização Beneficente certificada, nossa equipe de Atendimento ao Cliente poderá ajudar com isso! Selecione uma opção abaixo em \\"Ainda precisa de ajuda?\\" e inclua o link da campanha que você quer reembolsar.","Additional Information:":"Informações adicionais:","Organizer deactivated the fundraiser":"O organizador desativou a campanha","Our payment processor wasn\'t able to verify the donation":"Nosso processador de pagamentos não conseguiu verificar a doação","Organizer did not verify their account or withdraw funds within required deadlines":"O organizador da campanha não verificou a conta ou não retirou os fundos dentro dos prazos estipulados","The donation was charged back by the donor":"A doação foi estornada pelo doador","The donation was made by the organizer or beneficiary":"A doação foi feita pelo organizador ou beneficiário","Please visit the fundraiser to view any updates that the organizer might have posted in regards to refunds, click \'Contact\' beneath the organizer\'s name on their fundraiser to email them with any questions, or reach out to our team if you have questions on how you may be able to still support the cause.":"Visite a campanha para ver atualizações que o organizador postou em relação a reembolsos, clique em \'Contato\' sob o nome da organização na campanha para enviar um e-mail em caso de dúvidas ou falar com a nossa equipe se você tiver perguntas sobre como ainda podemos apoiar a causa.","Help Center":"Central de Ajuda","Please read below":"Leia a seguir...","Your Email Address":"Seu endereço de e-mail","My question was answered":"Minha pergunta foi respondida","Still need help?":"Ainda precisa de ajuda?","Chat now":"Bater papo agora","Chat":"Bate-papo","Send email":"Enviar e-mail","Donations paused":"Doações pausadas","Our team has contacted the organizer with a solution, and donations will resume once the issue is resolved.":"Nossa equipe entrou em contato com o organizador para oferecer uma solução, e as doações serão retomadas depois que o problema for resolvido.","How can I help?":"Como posso ajudar?","Please reach out to the organizer and ask them to sign in to GoFundMe and check their account to resolve the issue.":"Fale com o organizador, peça a ele para entrar no GoFundMe e verificar sua conta para resolver o problema.","Something went wrong. We’re working on it, please try again later or<1></1><2>contact us</2>.":"Algo deu errado. Estamos trabalhando para resolver o problema. Tente de novo mais tarde ou <1></1><2>fale conosco</2>.","To include a comment with your donation, you must add text and/or upload a photo.":"Para incluir um comentário com a doação, inclua texto e/ou carregue uma foto.","{{fileName}}: Please choose a jpeg, jpg, gif, or png file type, and ensure it is smaller than 2048 kb.":"{{fileName}}: Escolha um arquivo jpeg, jpg, gif, ou png e verifique se ele tem menos de 2048 kb.","{{fileName}}: Please try again later.":"{{fileName}}: Tente de novo mais tarde.","Show more Support":"Mostrar mais apoio","Return to campaign":"Voltar à campanha","Back to previous page":"Voltar à pagina anterior","Hello \\n \\n I just donated to this GoFundMe, {{- shareLink}}.  Would you be interested in supporting it too? \\n \\n Even a small donation could help {{- name}} reach their fundraising goal. And if you can\'t make a donation, it would be great if you could share the fundraiser to help spread the word. \\n \\n Thanks for taking a look!":"Olá\\n \\n Acabei de doar para esta campanha GoFundMe, {{- shareLink}}.  Você gostaria de apoiá-la também? \\n \\n Até uma pequena doação pode ajudar {{- name}} a alcançar a meta de arrecadação. Se não puder fazer uma doação, também ajudaria muito se você pudesse divulgar a campanha. \\n \\n Agradecemos por dar uma olhada!","Hi, I’d really appreciate it if you would share or donate to this GoFundMe, {{- fundTitle}} {{- shareLink}}":"Oi, eu ficaria muito feliz se você compartilhasse ou doasse para esta campanha no GoFundMe, {{- fundTitle}} {{- shareLink}}","Hi, I just donated to this GoFundMe and would appreciate it if you would share or donate too. {{- shareLink}}":"Olá, acabei de doar para esta campanha GoFundMe e ficaria feliz se você pudesse compartilhá-la ou fazer uma doação também. {{- shareLink}}","Something went wrong. Please select the link and manually copy.":"Algo deu errado. Selecione e copie o link manualmente.","Now help spread the word":"Agora, ajude a divulgar a campanha","By sharing this fundraiser, you increase their chance of success by 5x.":"Ao compartilhar essa campanha, você quintuplica suas chances de sucesso.","Finished sharing?":"Compartilhamento concluído?","Sign up to post your comment":"Cadastre-se para publicar seu comentário","Sign up to follow this fundraiser":"Cadastre-se para acompanhar esta campanha","Fundraising team ({{count}})":"Equipe de arrecadação de fundos ({{count}})","Contact us | GoFundMe Support":"Fale conosco | Serviço de Atendimento GoFundMe","GoFundMe will always respond to your requests as quickly as possible.":"O GoFundMe sempre responderá às suas solicitações o mais rápido possível.","Donor protection guarantee":"Garantia de proteção ao doador","GoFundMe has the first and only guarantee in the industry.":"O GoFundMe é o primeiro e único site do setor a oferecer garantia.","Simple setup":"Configuração simples","You can personalize and share your GoFundMe in just a few minutes.":"Você pode personalizar e compartilhar sua campanha GoFundMe em apenas alguns minutos.","0% platform fee":"0% de tarifas de plataforma","With a 0% platform fee, you get to keep even more of your money.":"Com 0% de tarifa de plataforma, você fica com mais do seu dinheiro.","Mobile app":"App móvel","The GoFundMe app makes it easy to launch and manage your campaign on the go.":"Com o app GoFundMe, é muito fácil lançar e gerenciar sua campanha onde quer que você esteja.","Social reach":"Alcance social","Harness the power of social media to spread your story and get more support.":"Aproveite o poder das redes sociais para divulgar a sua história e receber mais apoio.","24/7 expert advice":"Orientação de experts 24/7","Our best in class Customer Happiness agents will answer your questions, day or night.":"Nossos melhores agentes de Atendimento ao Cliente responderão suas perguntas, de dia ou de noite.","Fundraisers":"Campanhas de arrecadação de fundos","Discover":"Discover","Charity":"Beneficente","User name":"Nome de usuário","What is crowdfunding?":"O que é crowdfunding?","How it works":"Como funciona","Fundraising tips":"Dicas para arrecadação de fundos","Plan your fundraiser":"Planejar sua arrecadação de fundos","Travel & Adventure":"Viagem e aventuras","Medical, Illness & Healing":"Medicina, doenças e recuperação","Missions, Faith & Church":"Missões, religião e igrejas","Non-Profits & Charities":"Organizações beneficentes e sem fins lucrativas","Weddings & Honeymoons":"Casamentos e luas-de-mel","Other":"Outras","Sports, Teams & Clubs":"Esportes, times e clubes","Education & Learning":"Educação e aprendizagem","Volunteer & Service":"Serviço e trabalho voluntário","Competitions & Pageants":"Competições e concursos","Accidents & Emergencies":"Acidentes e emergências","Dreams, Hopes & Wishes":"Sonhos, esperanças e desejos","Animals & Pets":"Animais e pets","Environment":"Meio Ambiente","Rent, Food & Monthly Bills":"Aluguel, comida e contas do mês","Birthday Pots":"Presentes de aniversário","Babies, Kids & Family":"Bebês, crianças e família","Business & Entrepreneurs":"Empresas e empreendedores","Celebrations & Events":"Comemorações e eventos","Community & Neighbors":"Comunidade e vizinhos","Creative Arts, Music & Film":"Artes criativas, música e cinema","Funerals & Memorials":"Funerais e memoriais","#1 fundraising platform":"A maior plataforma de arrecadação de fundos do mundo","More people start fundraisers on GoFundMe than on any other platform.":"Mais pessoas começam campanhas no GoFundMe do que em qualquer outra plataforma.","Expert advice, 24/7":"Orientação de experts 24/7","Contact us with your questions and we’ll answer, day or night.":"Envie suas perguntas e nós responderemos, dia e noite.","Team member":"Membro da equipe","Sorry, no account found":"Nenhuma conta foi encontrada","Your message to {{coFirstName}} successfully sent.":"Sua mensagem para {{coFirstName}} foi enviada com êxito.","Your message to {{coFirstName}} failed to send. Please try again later.":"Sua mensagem para {{coFirstName}} não foi enviada. Tente de novo mais tarde.","[email redacted]":"[e-mail editado]","[phone redacted]":"[telefone editado]","Please enter your name.":"Digite o seu nome.","Please enter a shorter name.":"Digite um nome mais curto.","Please enter your email address.":"Digite seu endereço de e-mail.","Please enter a shorter email address.":"Digite um endereço de correspondência mais curto.","Please confirm your email address.":"Confirme seu endereço de e-mail.","Emails do not match.":"Os e-mails são diferentes.","Please complete the reCAPTCHA.":"Preencha o reCAPTCHA.","Please enter a subject line":"Insira uma linha de assunto.","Please enter your message":"Digite uma mensagem","Please enter a longer message.":"Crie uma história mais longa.","Please enter a shorter message.":"Digite uma mensagem mais curta.","Please enter a valid phone number":"Digite um número de telefone válido","Please enter a campaign URL":"Digite uma URL para a campanha.","Please specify how you know the Campaign Organizer.":"Diga como você conhece o organizador da campanha.","Please specify a description.":"Digite uma descrição.","Please select an option.":"Selecione uma opção.","Please enter a description.":"Digite uma descrição.","Please enter a longer description.":"Digite uma descrição mais longa.","Please enter your concerns.":"Informe suas preocupações.","Please enter a publication name":"Dê um nome para a publicação","Please log in":"Entre.","The email entered does not match your account\'s email":"O e-mail informado não corresponde ao e-mail da sua conta","Unexpected error":"Erro imprevisto","Please enter your name":"Digite o seu nome","Please enter your email address":"Digite seu endereço de e-mail","Please enter a valid email address.":"Digite um endereço de e-mail válido.","Today":"Hoje","Yesterday":"Ontem","[redacted]":"[editado]","Please enter your password":"Digite sua senha.","Please enter your first name":"Digite seu nome","Please enter a shorter first name.":"Digite um nome mais curto.","Please enter your last name":"Digite seu sobrenome","Please enter a shorter last name.":"Digite um sobrenome mais curto.","Your email address does not match.":"O endereço de e-mail não corresponde.","Please enter a password.":"Digite uma senha.","Passwords must be at least twelve characters long.":"A senha deve conter ter pelo menos doze caracteres.","You have exceeded the maximum amount of characters.":"Você excedeu a quantidade máxima de caracteres.","Passwords must contain at least one number, symbol, uppercase letter, and lowercase letter.":"A senha deve conter pelo menos um número, um símbolo, uma letra maiúscula e uma letra minúscula.","Please make a selection...":"Faça sua seleção...","Yes, I have contacted the Campaign Organizer":"Sim, falei com o organizador da campanha.","No, I have not contacted the Campaign Organizer":"Não falei com o organizador da campanha.","The situation has been misrepresented.":"A situação foi distorcida.","The funds were not used as stated on the campaign.":"Os fundos não foram usados conforme declarado na campanha.","The funds were never delivered to the intended recipient.":"Os fundos jamais foram entregues ao destinatário ao qual se destinavam.","I did not authorize this donation.":"Eu não autorizei essa doação.","I no longer wish to support this campaign.":"Não quero mais apoiar essa campanha.","… {{- userName}} needs your support for {{- campaignTitle}}":"… {{- userName}}  precisa do seu apoio para  {{- campaignTitle}}","{{- organizerFullName}} and {{- teamMemberFullName}} are organizing this fundraiser to benefit {{- beneficiaryFullName}}.":"{{- organizerFullName}} e {{- teamMemberFullName}} estão organizando essa campanha para beneficiar {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{- teamMemberFullName}} are organizing this fundraiser on behalf of {{- beneficiaryFullName}}.":"{{- organizerFullName}} e {{- teamMemberFullName}} estão organizando essa campanha em nome de {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser to benefit {{- beneficiaryFullName}}.":"{{- organizerFullName}} e {{count}} outros estão organizando essa campanha para beneficiar {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser to benefit {{- beneficiaryFullName}}.:_:plural":"{{- organizerFullName}} e {{count}} outros estão organizando essa campanha para beneficiar {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser on behalf of {{- beneficiaryFullName}}.":"{{- organizerFullName}} e {{count}} outros estão organizando essa campanha em nome de {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser on behalf of {{- beneficiaryFullName}}.:_:plural":"{{- organizerFullName}} e {{count}} outros estão organizando essa campanha em nome de {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{- teamMemberFullName}} are organizing this fundraiser.":"{{- organizerFullName}} e {{- teamMemberFullName}} estão organizando essa campanha.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser.":"{{- organizerFullName}} e mais {{count}} outros estão organizando essa campanha.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser.:_:plural":"{{- organizerFullName}} e mais {{count}} outros estão organizando essa campanha.","{{- organizerFullName}} is organizing this fundraiser to benefit {{- beneficiaryFullName}}.":"{{- organizerFullName}} está organizando a campanha para beneficiar {{- beneficiaryFullName}}.","{{- organizerFullName}} is organizing this fundraiser on behalf of {{- beneficiaryFullName}}.":"{{- organizerFullName}} está organizando a campanha em  nome de {{- beneficiaryFullName}}.","{{- organizerFullName}} is organizing this fundraiser.":"{{- organizerFullName}} está organizando essa campanha.","This team raised {{raisedAmountFormatted}} from {{count}} other donation.":"Essa equipe arrecadou {{raisedAmountFormatted}} com outra {{count}} doação.","This team raised {{raisedAmountFormatted}} from {{count}} other donation.:_:plural":"Essa equipe arrecadou {{raisedAmountFormatted}} com outras {{count}} doações.","Raised {{amount}} from {{count}} donation":"O valor de {{amount}} foi arrecadado com a doação {{count}}","Raised {{amount}} from {{count}} donation:_:plural":"{{amount}} arrecadados de {{count}} doações","Donations are typically 100% tax deductible in the US.":"Em geral as doações são 100% dedutíveis de impostos nos EUA.","Donations are typically tax deductible in Canada.":"Em geral, as doações são dedutíveis de impostos no Canadá.","Donations are typically tax deductible in Australia.":"Em geral as doações são dedutíveis de impostos na Austrália.","Donations eligible for Gift Aid.":"Doações qualificadas para Gift Aid.","{{city}}, {{state}}":"{{city}}, {{state}}","Registered nonprofit":"Organização sem fins lucrativos registrada","text":"SMS","Organizer and beneficiary":"Organizador e beneficiário","Fundraising team: {{- name}} ({{count}})":"Equipe de arrecadação de fundos: {{- name}} ({{count}})","Copy fundraiser link":"Copiar link da campanha","Share this fundraiser so it can raise up to 5x more.":"Compartilhe esta campanha para arrecadar 5 vezes mais.","Build momentum for this fundraiser.":"Divulgue essa campanha.","View donation summary":"Ver resumo da doação","Check out your donation details.":"Confira os detalhes da sua doação.","Add a comment":"Adicione um comentário","Add a supportive message with your donation.":"Inclua uma mensagem de apoio na sua doação.","Add a profile photo":"Adicionar uma foto ao perfil","Looks good. Your profile photo has been added.":"Ótimo! Sua foto de perfil foi adicionada.","Let friends and the GoFundMe community know it’s you!":"Conte para seus amigos e a comunidade do GoFundMe sobre sua campanha!","Share on Facebook":"Compartilhar no Facebook","Tell your Facebook friends about this fundraiser.":"Conte a seus amigos do Facebook sobre esta campanha.","Join fundraising team":"Entrar na equipe desta campanha","Help {{organizerName}} raise more funds.":"Ajudar {{organizerName}} a arrecadar mais fundos.","Thank donors":"Agradecer aos doadores","Show appreciation and get more support. Ask donors to share this fundraiser.":"Mostre reconhecimento e obtenha mais apoio. Peça aos doadores para compartilhar esta campanha.","Add a donate button":"Botão Adicionar uma doação","Reach your community on a website or blog.":"Comunique-se com a sua comunidade em um site ou blog.","Donated {{amount}}":"{{amount}} doados","Hi, I’d really appreciate it if you would share or donate to this GoFundMe, {{fundTitle}} {{- shareLink}}":"Oi, eu ficaria muito feliz se você compartilhasse ou doasse para esta campanha no GoFundMe, {{fundTitle}} {{- shareLink}}","Captcha challenge failed. Please try again.":"Falha no desafio do Captcha. Tente de novo.","You exceeded the maximum number of tries. Please try again later.":"Você ultrapassou o número máximo de tentativas. Tente de novo mais tarde.","An error occurred. Please try again later.":"Ocorreu um erro. Tente de novo mais tarde.","Sign in to follow this fundraiser":"Entre para acompanhar esta campanha","Sign in to post your comment":"Entre para publicar seu comentário","Reset instructions sent to {{email}}":"Redefinir as instruções enviadas para {{email}}","Please check your email & password or please sign in with your Facebook account.":"Confira seu e-mail e sua senha ou tente fazer login usando sua conta no Facebook.","Please check your email & password":"Confira seu e-mail e sua senha."}},"fr_CA":{"apps-campaign":{"Better Business Bureau":"Better Business Bureau","Accredited business":"Entreprise accréditée","Created {{dateFormatBasedOnLocal}}":"Date de lancement : {{dateFormatBasedOnLocal}}","Just now":"À l\'instant","Created {{count}} hour ago":"Créée il y a {{count}} heure","Created {{count}} hour ago:_:plural":"Créée il y a {{count}} heures","Created {{count}} day ago":"Créée il y a {{count}} jour","Created {{count}} day ago:_:plural":"Créée il y a {{count}} jours","Thank you for your donation. A receipt has been sent to <1>{{donorEmail}}</1>":"Merci pour votre don. Un reçu a été envoyé à l\'adresse suivante : <1>{{donorEmail}}</1>","by":"par","for":"pour","Team fundraiser":"Levée de fonds en équipe","Link Copied":"Lien copié","Anonymous":"Anonyme","In partnership with<1></1><2>{{partnerName}}</2>":"En partenariat avec<1></1><2>{{partnerName}}</2>","See all":"Afficher tout","This fundraiser is located near you":"Cette levée de fonds est organisée près de chez vous","{{- recentDonorsStr}} person just donated":"{{- recentDonorsStr}} personne vient de faire un don.","{{- recentDonorsStr}} person just donated:_:plural":"{{- recentDonorsStr}} personnes viennent de faire un don.","This fundraiser is no longer accepting donations. If you are the organizer, beneficiary, team member, or donor,<1></1><2>sign in</2><3></3>to see additional information.":"Cette collecte de fonds n\'accepte plus de dons. Si vous êtes organisateur, coéquipier, bénéficiaire ou donateur,<1></1><2>connectez-vous</2><3></3>pour afficher des informations supplémentaires.","The organizer has currently disabled new donations to this fundraiser.":"L\'organisateur a désactivé le versement de nouveaux dons sur cette campagne.","This fundraiser has been deactivated by the organizer.":"Cette collecte de fonds a été désactivée par son organisateur.","Learn more":"En savoir plus","Copy to clip board":"Copier dans le presse-papiers","Fundraiser link copied":"Lien vers la levée de fonds copié","Copy to clipboard":"Copier dans le presse-papiers","Now paste this link into a Facebook post, Messenger, or any Facebook groups you\'re in.":"Collez maintenant ce lien dans une publication Facebook, sur Messenger ou dans un groupe Facebook dont vous faites partie.","Copy your fundraiser link and paste it into a Facebook post, Messenger, or any Facebook groups you’re in.":"Copiez le lien vers votre levée de fonds, puis collez-le dans une publication Facebook, sur Messenger ou dans un groupe Facebook dont vous faites partie.","Questions about where to share this link?":"Vous vous demandez où partager ce lien?","<0>Tip:</0><1></1>Paste this fundraiser link anywhere.":"<0>Conseil :</0><1></1>Collez le lien vers la levée de fonds où vous voulez.","Collapse text":"Replier le texte","Read more":"Lire la suite","Edit":"Modifier","Delete":"Supprimer","Edited":"Modifié","{{name}}<1></1>donated<3></3><4>{{donationAmount}}</4>":"{{name}}<1></1>a fait un don de<3></3><4>{{donationAmount}}</4>","{{name}}<1></1>commented":"{{name}}<1></1>a laissé un commentaire","Campaign organizer":"Organisateur de la levée de fonds","Beneficiary":"Bénéficiaire","GoFundMe Guarantee":"Garantie GoFundMe","Only donations on our platform are protected by the GoFundMe Guarantee.":"Seuls les dons versés sur notre plateforme sont protégés par la garantie GoFundMe.","Donate now":"Je contribue","Your donation":"Votre don","Recent donation":"Don récent","Top donation":"Don le plus élevé","First donation":"Premier don","Offline":"Don hors ligne","Become an early supporter":"Devenez l\'un des premiers supporteurs","Become the first supporter":"Soyez le premier à donner","Your donation matters":"Votre don compte!","In the rare case something isn’t right, we will work with you to determine if misuse occurred.":"Dans le cas peu probable où un problème surviendrait, nous déterminerons avec vous s\'il s\'agit d\'une utilisation abusive.","Email":"Courriel","Embed HTML":"Incorporer du code HTML","Messenger":"Messenger","Facebook":"Facebook","<0>We use cookies</0> to enable features and market content. Click “That’s OK” to add cookies. View<2></2><3>privacy policy</3><4></4>or<6></6><7>manage cookies.</7>":"<0>Nous utilisons des fichiers témoins</0> pour activer des fonctionnalités et du contenu commercial. Cliquez sur D\'accord pour ajouter des témoins. Consultez<2></2><3>la politique de confidentialité</3><4></4>ou<6></6><7>gérez les témoins.</7>","That\'s OK":"D\'accord","<0>As stated on the banner, GoFundMe uses cookies to enable features and market content to provide you with an improved experience. We consider these cookies to be non-essential, pursuant to our<1></1><2>privacy policy.</2><3></3>When you click “That’s OK” on the banner, we add these non-essential cookies.</0>":"<0>Tel qu\'indiqué sur la bannière, GoFundMe utilise des fichiers témoins pour activer des fonctionnalités et du contenu commercial afin d\'optimiser votre expérience. Nous considérons ces témoins comme non essentiels, conformément à notre<1></1><2>avis de confidentialité.</2><3></3>Quand vous cliquez sur « D\'accord » dans la bannière, nous ajoutons ces témoins non essentiels.</0>","Cookie Preferences":"Préférences pour fichiers témoins (cookies)","Close cookie modal":"Fermer le modal de fichiers témoins","We value your privacy":"Nous respectons votre vie privée","Here in this Cookie Preferences page, the non-essential cookies category is broken down\\n                            further into functional and marketing, as you can see below. You can change your\\n                            preferences as to both functional and marketing cookies here. When you click “Save” on\\n                            this page, we will add only those non-essential cookies you select.":"Dans la page de préférences pour fichiers témoins, les témoins non essentiels sont divisés en deux catégories (fonctionnels et commerciaux), \\ncomme vous pouvez le voir ci-dessous. Vous pouvez modifier vos préférences concernant \\nles témoins fonctionnels et commerciaux ici. Quand vous cliquez sur Enregistrer dans cette page, nous ajoutons \\nuniquement les témoins non essentiels que vous sélectionnez.","Marketing cookies":"Fichiers témoins commerciaux","Enable":"Activer","GoFundMe collects information regarding user navigation to provide sponsored content\\n                            relevant to our products on other sites. Specifically, if you start a fundraiser on\\n                            GoFundMe and you do not publish that fundraiser, GoFundMe may then show a banner ad the\\n                            next time you are on Facebook.":"GoFundMe collecte des informations concernant la navigation des utilisateurs pour leur proposer du contenu sponsorisé pertinent relatif à ses produits sur d\'autres sites. Concrètement, si vous lancez une levée de fonds sur GoFundMe sans la publier, GoFundMe peut afficher une bannière publicitaire la prochaine fois que vous accédez à Facebook.","Functional cookies":"Fichiers témoins fonctionnels","We use data collected with these cookies to improve your experiences on the GoFundMe\\n                            platform, as well as avoiding bugs or testing new features.":"Nous exploitons les données collectées avec ces fichiers témoins pour améliorer votre expérience sur la plateforme GoFundMe, \\nmais aussi pour éviter les bogues ou tester de nouvelles fonctionnalités.","Essential cookies":"Fichiers témoins essentiels","Always enabled":"Toujours activés","Data is collected by these cookies to offer basic functions, to ensure that the GoFundMe\\n                            Platform functions technically, to keep track of your settings and activities, and for\\n                            security or fraud prevention purposes.":"Des données sont collectées par ces fichiers témoins pour offrir des fonctions de base, \\nassurer le fonctionnement technique de la plateforme GoFundMe, garder une trace de vos paramètres et de vos activités, \\nmais aussi pour renforcer la sécurité et prévenir les fraudes.","Enable all and close":"Tout activer et fermer","Enable all":"Activer tout","Save and close":"Enregistrer et fermer","Save":"Enregistrer","Show less":"Afficher moins d\'éléments","Show more":"Afficher plus d\'éléments","Previous image":"Photo précédente","Next image":"Photo suivante","Image {{i}} of {{t}}":"Photo {{i}} sur {{t}}","Previous 10 images":"10 photos précédentes","Next 10 images":"10 photos suivantes","Close image gallery":"Fermer la galerie de photos","Delete this image":"Supprimer cette photo","Instagram":"Instagram","Copy and paste this link on your Instagram bio":"Copiez-collez ce lien dans votre profil Instagram.","Fundraiser link":"Lien vers la levée de fonds","Link copied":"Lien copié","Something went wrong.":"Une erreur s\'est produite.","Share on Instagram":"Partager sur Instagram","Back to sharing":"Revenir aux options de partage","LinkedIn":"LinkedIn","Hi, I’d really appreciate it if you would share or donate to this GoFundMe.":"Bonjour, ça serait vraiment apprécié si vous pouviez faire un don ou partager cette campagne GoFundMe.","Your password must have:":"Votre mot de passe doit contenir au moins :","At least 12 characters":"12 caractères","1 uppercase letter":"1 lettre majuscule","1 lowercase letter":"1 lettre minuscule","1 number":"1 chiffre","1 symbol":"1 symbole","Print Poster":"Imprimer une affiche","Print":"Imprimer","{{raisedAmountString}}<1></1><2>{{sameCurrencyCode}} raised</2>":"{{raisedAmountString}}<1></1><2>{{sameCurrencyCode}} récoltés</2>","{{raisedAmountString}}<1></1><2>{{sameCurrencyCode}} raised of {{goalAmountNBSP}} goal</2>":"{{raisedAmountString}}<1></1><2>{{sameCurrencyCode}} récoltés sur un objectif de {{goalAmountNBSP}}</2>","{{goalAmountNBSP}}<1></1><2>{{sameCurrencyCode}} goal</2>":"Objectif de {{goalAmountNBSP}}<1></1><2>{{sameCurrencyCode}}</2>","share":"partager","Share as much as possible":"Partagez autant que possible","Try using all sharing options. Telling people about your fundraiser is the only way to start raising donations.":"Essayez d\'utiliser toutes les options de partage. Le seul moyen de récolter des dons, c\'est de parler de votre levée de fonds dans votre entourage.","Text":"Message","donor":"donateur","donors":"donateurs","shares":"partages","follower":"abonné","followers":"abonnés","Fundraiser Stats":"Statistiques de la levée de fonds","Share":"Partager","By continuing, you agree with GoFundMe<1></1><2>terms</2><3></3>and<5></5><6>privacy policy</6>":"En poursuivant, vous acceptez les<1></1><2>conditions d\'utilisation</2><3></3>et la <5></5><6>politique de confidentialité</6> de GoFundMe.","Preview email":"Prévisualiser le courriel","Twitter":"Twitter","{{article}} by {{- authorName}}":"{{article}} par {{- authorName}}","See older updates":"Afficher les communiqués précédents","WhatsApp":"WhatsApp","Your donation is made to PayPal Giving Fund Australia (ABN 65 105 950 945), a Public Ancillary Fund and a charity registered with the Australian Charities and Not-for-profits Commission, subject to its<1></1><2>terms</2>.":"Votre don est versé à PayPal Giving Fund Australie (ABN 65 105 950 945), fonds public auxiliaire et organisme caritatif enregistré auprès de la Commission des organismes caritatifs et à but non lucratif australiens, conformément à ses<1></1><2>conditions d\'utilisation</2>.","While GoFundMe does not have a platform fee, PayPal Giving Fund Australia receives your donation after deduction of transaction<1></1><2>fees</2><3></3>and will grant funds to your recommended charity on a monthly basis.*":"GoFundMe ne facture aucuns frais de plateforme, mais PayPal Giving Fund Australie reçoit votre don après déduction des<1></1><2>frais</2><3></3>de transaction, puis reverse chaque mois les fonds à l\'organisme que vous avez indiqué.*","*If, after reasonable efforts, PayPal Giving Fund Australia cannot deliver donations to this<1></1>charity, it will grant funds to another charity per PayPal Giving Fund Australia\'s<3></3><4>policies</4>.":"* Si, en dépit d\'efforts raisonnables, PayPal Giving Fund Australie ne parvient pas à transférer les dons à cette<1></1>association, il reversera les fonds à une autre association, conformément à la<3></3><4><politique</4> de PayPal Giving Fund Australie.","Donations raised benefit:":"Bénéficiaire des dons récoltés :","How charity fundraisers work":"Fonctionnement d\'une collecte de fonds au profit d\'un organisme","Your donation is made to PayPal Giving Fund Canada, a charity registered with the Canada Revenue Agency (No. 812867752RR0001), subject to its<1></1><2>terms</2>.":"Votre don est versé à PayPal Giving Fund Canada, organisme caritatif enregistré auprès de l\'Agence du revenu du Canada (n° 812867752RR0001), conformément à ses<1></1><2>conditions d\'utilisation</2>.","While GoFundMe does not have a platform fee, PayPal Giving Fund Canada receives your donation after deduction of transaction<1></1><2>fees</2><3></3>and will grant funds to your recommended charity on a monthly basis.*":"GoFundMe ne facture aucuns frais de plateforme, mais PayPal Giving Fund Canada reçoit votre don après déduction des<1></1><2>frais</2><3></3>de transaction, puis reverse chaque mois les fonds à l\'organisme que vous avez indiqué.*","*If, after reasonable efforts, PayPal Giving Fund Canada cannot deliver donations to this<1></1>charity, it will grant funds to another charity per PayPal Giving Fund Canada\'s<3></3><4>policies</4>.":"* Si PayPal Giving Fund Canada ne parvient pas à transférer les dons à cette<1>association</1> en dépit des efforts raisonnables réalisés, il reversera les fonds à une autre association, conformément à la<3></3><4>politique</4> de PayPal Giving Fund Canada.","Support":"Promouvoir","Contribute":"Contribuer","Buy me a coffee":"Offrez-moi un café","Show appreciation":"Exprimez votre gratitude","Start a GoFundMe":"Organiser une campagne","Support this cause":"Soutenez cette cause","{{- userName}} needs your help today! {{- campaignTitle}}":"{{- userName}} a besoin de votre aide maintenant! {{- campaignTitle}}","Fundraiser for {{- userName}} by {{- campaignOrganizer}} : {{- campaignTitle}}":"Levée de fonds pour {{- userName}} organisée par {{- campaignOrganizer}} : {{- campaignTitle}}","Fundraiser by {{- userName}} : {{- campaignTitle}}":"Levée de fonds organisée par {{- userName}} : {{- campaignTitle}}","{{- campaignTitle}}, organized by {{- campaignOrganizer}}":"{{- campaignTitle}} organisée par {{- campaignOrganizer}}","See more":"En voir plus","See top donations":"Afficher les dons les plus élevés","Continue reading":"Lire la suite","Updates":"Communiqués","Image {{imageIndex}} of {{totalImages}}. Click to view all images":"Photo {{imageIndex}} de {{totalImages}}. Cliquez pour afficher toutes les photos.","Image {{imageIndex}} of {{totalImages}}":"Photo {{imageIndex}} de {{totalImages}}","Photo limit reached":"Nombre maximum de photos atteint","Add more photos":"Ajouter plus de photos","Add photos to comment":"Ajouter des photos au commentaire","I donated because...":"J\'ai donné parce que...","Add this public comment to the fundraiser.":"Ajoutez ce commentaire public sur la collecte de fonds.","Your donation will be displayed as Anonymous, and this comment will not show up publicly on the campaign.":"Votre don restera anonyme et ce commentaire ne sera pas visible sur la collecte de fonds.","Post comment":"Publier un commentaire","Please choose a maximum of 10 photos for your comment.":"Choisissez 10 photos au maximum pour imager votre commentaire.","Please donate and share words of encouragement.":"Faites un don et laissez un mot d\'encouragement.","Continue":"Continuer","Comments":"Commentaires","Please select one.":"Veuillez sélectionner un élément.","Yes, I have contacted the Campaign Organizer.":"Oui, j\'ai contacté l\'organisateur de la collecte de fonds.","No, I have not contacted the Campaign Organizer.":"Non, je n\'ai pas contacté l\'organisateur de la collecte de fonds.","They are a family member":"C\'est un membre de ma famille","They are a friend or acquaintance":"C\'est un ami ou une connaissance","I do not know the organizer of this campaign":"Je ne connais pas l\'organisateur de cette collecte de fonds","Your Name":"Votre nom","Your Phone Number":"Votre numéro de téléphone","Required in case our team needs to contact you for further details.":"Informations requises au cas où notre équipe aurait d\'autres questions et devrait vous recontacter.","Your Email":"Votre adresse courriel","Confirm Email":"Confirmer le courriel","Page URL":"URL de la page","Please enter the URL in this format: https://www.gofundme.com/f/example-campaign":"Veuillez respecter ce format : https://www.gofundme.com/f/exemple-cagnotte solidaire","I don\'t know the page URL":"Je ne connais pas l\'URL de la page.","Have you already contacted the organizer of this campaign?":"Avez-vous déjà contacté l\'organisateur de cette levée de fonds?","How do you know the organizer of this campaign?":"Comment avez-vous connu l\'organisateur de cette levée de fonds?","Please explain your relationship to the Campaign Organizer.":"Veuillez décrire votre lien avec l\'organisateur de la levée de fonds.","How much money did you receive from the campaign organizer?":"Quelle somme avez-vous reçue de la part de l\'organisateur de la collecte de fonds?","Why do you believe this person will not deliver the funds to you?":"Pourquoi pensez-vous que cette personne ne vous transmettra pas les fonds?","Please attach a copy of a government issued photo ID":"Envoyez une copie d\'une pièce d\'identité officielle avec photo.","Please upload only JPEG, GIF, PNG or PDF files. The file size must be less than 5MB.":"Veuillez soumettre seulement des fichiers JPEG, GIF, PNG ou PDF. La taille des fichiers est limitée à 5 Mo.","Upload any evidence you may have":"Ajoutez toutes les preuves dont vous disposez.","Send Email":"Envoyer un courriel","Message Subject":"Objet du message","Your Message":"Votre message","I am requesting a refund because...":"Je demande un remboursement parce que...","Describe your concerns about how the funds are being used.":"Exposez vos inquiétudes quant à l\'usage des fonds.","40 characters minimum":"40 caractères au minimum","Yes, I know the Campaign Organizer.":"Oui, je connais l\'organisateur de la levée de fonds.","No, I do not know the Campaign Organizer":"Non, je ne connais pas l\'organisateur de la collecte de fonds.","I am a beneficiary.":"Je suis un bénéficiaire.","I am a donor.":"Je suis un donateur.","I am an individual concerned about this campaign.":"Je suis un particulier qui s\'intéresse à cette levée de fonds.","I am involved in a legal dispute with the Campaign Organizer.":"Je suis en litige juridique avec l\'organisateur de la levée de fonds.","This campaign includes libelous statements.":"Cette collecte de fonds diffuse des propos diffamatoires.","Campaign includes factually incorrect information.":"La levée de fonds inclut des informations incorrectes.","Campaign Organizer has not used funds for the stated purpose.":"L\'organisateur de la collecte de fonds n\'a pas utilisé les fonds aux fins indiquées.","They are impersonating someone or have copied another campaign.":"Ils se font passer pour quelqu\'un d\'autre ou ont copié une levée de fonds existante.","Please explain your concern(s) in detail.":"Veuillez indiquer en détail ce qui vous préoccupe.","Which statements are libelous and why?":"Quels propos sont diffamatoires et pourquoi?","Which statements are incorrect and why?":"Quels propos sont incorrects et pourquoi?","How have the campaign’s donations been spent?":"Comment les dons versés à la collecte de fonds ont-ils été dépensés?","What is the original campaign link/title?":"Quel est le lien ou titre de la collecte de fonds en question?","Please describe your concerns":"Veuillez préciser vos inquiétudes.","How do you know the campaign organizer?":"Comment avez-vous connu l\'organisateur de la collecte de fonds?","How are you connected to the campaign?":"Quel est votre lien avec la campagne?","How much money is being withheld and why?":"Quelle somme d\'argent est bloquée et pour quelle raison?","Why are you concerned about your donation?":"Pourquoi vous inquiétez-vous à propos de votre don?","Please describe your concerns.":"Veuillez préciser vos inquiétudes.","Do you know the Campaign Organizer?":"Connaissez-vous l\'organisateur de la levée de fonds?","Which best describes you?":"Quel énoncé vous décrit le mieux?","Publication":"Publication","Self-Service":"Libre-service","Please select an option which best describes you to see relevant information.":"Sélectionnez l\'option qui vous décrit le mieux pour afficher des informations pertinentes.","For customized help, please sign in.":"Pour obtenir une aide personnalisée, connectez-vous.","Sign In":"Se connecter","Top Answers":"Meilleures réponses","How do I get a refund?":"Comment obtenir un remboursement?","How do I withdraw money?":"Comment retirer l\'argent?","Is my country supported?":"Est-ce que mon pays est pris en charge?","Can I withdraw money?":"Puis-je retirer l\'argent?","How do I reset my password?":"Comment réinitialiser mon mot de passe?","How do I invite someone to withdraw?":"Comment inviter quelqu\'un à retirer les fonds?","I can\'t withdraw my funds, now what?":"Je ne peux pas retirer les fonds. Que faire?","How do your fees work?":"Comment fonctionnent vos frais?","What about taxes and stuff?":"Comment ça interagit avec les impôts?","GoFundMe homepage":"Page d\'accueil GoFundMe","Choose your language":"Sélectionnez votre langue","How GoFundMe works":"Comment fonctionne GoFundMe","Common questions":"Questions fréquentes","Success stories":"Témoignages","Supported countries":"Pays couverts","Team fundraising":"Levée de fonds en équipe","Donate button":"Bouton Je contribue","Support COVID-19 fundraisers":"Soutenez les collectes de fonds spéciales COVID-19","Why GoFundMe":"Pourquoi GoFundMe?","Medical":"Santé","Emergency":"Urgences","Memorial":"Commémoration","Education":"Éducation","Nonprofit":"Associations","Fundraise for":"Lever des fonds pour","Help center":"Centre d\'aide","Blog":"Blog","GoFundMe Stories":"Témoignages sur GoFundMe","Press center":"Centre de presse","Careers":"Emplois","About":"À propos de","Resources":"Ressources","Terms":"Conditions","Privacy":"Confidentialité","Legal":"Informations légales","Do Not Sell My Personal Information":"Mes informations personnelles ne sont pas à vendre","Hide":"Masquer","Show":"Afficher","Hide guidance cards":"Masquer les fiches conseils","Show guidance cards":"Afficher les fiches conseils","Previous card":"Fiche précédente","Next card":"Fiche suivante","You are donating to<1></1><2>PayPal Giving Fund Ireland</2>, a registered charity (No. 20205692), which will email you a receipt for your donation.":"Vous faites un don à<1></1><2>PayPal Giving Fund Irlande</2>. Cet organisme caritatif agréé (n° 20205692) vous enverra un reçu fiscal par e-mail pour votre don.","*In rare cases, a charity may cease to meet PayPal Giving Fund Ireland’s legal or other eligibility requirements to receive funds or may not accept the funds. In such cases, PayPal Giving Fund Ireland will<1></1><2>reassign the funds</2><3></3>to another charity and (wherever possible) seek a new recommendation from you.":"* Dans de rares cas, il arrive qu\'un organisme ne réponde plus aux exigences légales ou autres critères d\'éligibilité de PayPal Giving Fund Irlande pour recevoir des fonds ou qu\'il refuse les fonds. Dans cette éventualité, PayPal Giving Fund Irlande<1></1><2>reverse les fonds</2><3></3>à un autre organisme et vous demande (si possible) d\'en recommander un autre.","The charity will typically receive the funds from PayPal Giving Fund within 15-45 days (90 days if the charity has not enrolled).*":"L\'association reçoit généralement les fonds de PayPal Giving Fund dans les 15 à 45 jours (90 jours si elle ne dispose pas d\'un compte PPGF).*","Open share modal":"Ouvrir le modal de partage","Donate":"Je contribue","Sign in":"Se connecter","Sign out":"Se déconnecter","Donations you\'ve made":"Vos dons versés","Account settings":"Configuration du compte","Your fundraisers":"Vos levées de fonds","Open navigation menu":"Ouvrir le menu de navigation","Close navigation menu":"Fermer le menu de navigation","My campaigns":"Mes levées de fonds","Close Modal":"Fermer le modal","Start":"Démarrer","Don\'t have an account? ":"Vous n\'avez pas de compte? ","Sign up":"S\'inscrire","Enter the email address associated with your account, and we\'ll email you a link to reset your password":"Indiquez l\'adresse courriel rattachée à votre compte. Nous vous enverrons un lien pour réinitialiser votre mot de passe.","Email address":"Adresse courriel","Request new password":"Demander un nouveau mot de passe","Don\'t have an account?<1></1><2>Sign up</2>":"Vous n\'avez pas de compte?<1></1><2>Inscrivez-vous</2>","Forgot your password?":"Mot de passe oublié?","Password":"Mot de passe","Sign in to GoFundMe":"Se connecter à GoFundMe","Already have an account?<1></1><2>Sign in</2>":"Vous avez déjà un compte?<1></1><2>Connectez-vous</2>","Please<1></1><2>sign in</2><3></3>to access your account.":"<1></1><2>Connectez-vous</2><3></3>pour accéder à votre compte.","First Name":"Prénom","Last Name":"Nom de famille","Confirm email address":"Confirmez votre adresse courriel","Set password":"Définir un mot de passe","We will never post without your permission":"Nous ne publierons jamais quoi que ce soit<br>sans votre accord.","Continue with Facebook":"Continuer avec Facebook","or":"ou","Use my email address":"Utiliser mon adresse courriel","You are donating to<1></1><2>PayPal Giving Fund</2><3></3>UK, a registered charity (No. 1110538), which will email you a receipt for your donation and claim Gift Aid where eligible.":"Vous faites un don à <1></1><2>PayPal Giving Fund</2><3></3>UK. Cet organisme caritatif agréé (n° 1110538) vous enverra un reçu fiscal par courriel et vous fera profiter du programme Gift Aid lorsque admissible.","<0></0>*In very limited cases, a recommended charity may cease to meet PayPal Giving Fund\'s legal or other eligibility<2></2><3>requirements</3><4></4>. In such cases, PayPal Giving Fund will reassign the funds to a similar charity, and (wherever possible) seek a new recommendation from donors.":"<0></0>* Dans de très rares cas, il arrive qu\'une association recommandée ne réponde plus aux<2></2><3>exigences</3><4></4>d\'admissibilité juridiques (ou d\'autre nature) de PayPal Giving Fund. Dans ce cas, PayPal Giving Fund reverse les fonds à une association similaire et s\'adresse (si possible) aux donateurs pour qu\'ils lui recommandent une autre œuvre de bienfaisance.","The charity will typically receive the funds from PayPal Giving Fund within 15-45 days of your donation if the charity has enrolled (or 90 days if the charity has not yet enrolled). Unlike other platforms, 100% of any Gift Aid will go to the charity as well.":"L\'organisme reçoit généralement les fonds de PayPal Giving Fund dans les 15 à 45 jours qui suivent votre don si cet organisme a déjà adhéré au programme (ou dans les 90 jours si il ne l\'a pas encore fait). Contrairement à d\'autres plateformes, le montant Gift Aid est également reversé dans son intégralité aux organismes.","PayPal Giving Fund will grant your donation to {{charityName}} within 15-45 days (Or 90 days if the charity has not yet enrolled)*.":"PayPal Giving Fund reversera votre don à l\'organisme {{charityName}} dans un délai de 15 à 45 jours (ou 90 jours si il n\'a pas encore adhéré au programme).<sup>*</sup>","*If, after reasonable efforts have been made, PayPal Giving Fund cannot grant the funds to this charity, they will contact you before reassigning the funds in accordance with<1></1><2>PayPal Giving Fund\'s Policies</2>.":"* Si PayPal Giving Fund ne parvient pas à transférer le don à cet organisme en dépit des efforts raisonnables consentis, vous serez contacté(e) avant la réaffectation des fonds, conformément à la<1></1><2>politique de PayPal Giving Fund</2>.","How non-profit fundraisers work":"Fonctionnement des collectes de fonds au profit d\'organismes","Donations are typically 100% tax deductible in the US. Your donation is made to PayPal Giving Fund (a 501(c)(3) charitable organization) to benefit your chosen charity.":"En principe, les dons sont entièrement déductibles d\'impôts aux États-Unis. Vous faites un don à l\'organisme caritatif de type 501(c)(3) PayPal Giving Fund, qui le reverse ensuite à l\'organisme de votre choix.","Fundraiser updates ({{totalUpdates}})":"Communiqués sur la collecte de fonds ({{totalUpdates}})","Fundraiser updates":"Communiqués sur la collecte de fonds","Close fundraiser updates modal":"Fermer le modal des communiqués sur la collecte de fonds","Thanks for donating":"Merci pour votre don","Boost this fundraiser":"Promouvez cette collecte de fonds","Be the first to help":"Soyez le premier à aider","Your early support will go a long way and help inspire others to donate.":"Votre prompt support contribuera à inciter d\'autres personnes à donner.","Report fundraiser":"Dénoncer la campagne","See top":"Trier par montant","Donations":"Dons","Contact Us - Answer Found":"Nous contacter - Réponse trouvée","Answer Found!":"Réponse trouvée!","Thanks very much!":"Un grand merci!","If you ever need some extra help, the GoFundMe Team is standing by!":"Si vous avez besoin d\'aide, l\'équipe de GoFundMe est là pour vous!","Return to Help Center":"Retour au Centre d\'aide","Contact Us - Message Sent!":"Nous contacter - Message envoyé","Message Sent":"Message envoyé","Thank you for your patience":"Merci de votre patience","We\'re sorry, but that campaign cannot be found. Please check the link URL and try again.":"Désolés, mais cette collecte de fonds est introuvable. Veuillez vérifier l\'URL du lien et réessayez.","Page Not Found":"Page introuvable","Home":"Accueil","Campaign Not Found":"Campagne introuvable","Search gofundme.com for":"Effectuez une recherche sur gofundme.com à propos de","Show your support by going to this link":"Montrez votre soutien en suivant ce lien","Pagination navigation":"Navigation par page","Previous page":"Page précédente","Previous":"Précédent","Next page":"Page suivante","Next":"Suivant","Page {{page}} of {{nbPages}}":"Page {{page}} sur {{nbPages}}","Search in progress":"Recherche en cours","Fundraisers for \\"{{query}}\\" in all locations":"Collectes de fonds pour « {{query}} » partout","No results found for \\"{{query}}\\" in all locations":"Aucun résultat trouvé pour « {{query}} » nulle part","Search results for {{- query}}":"Résultats de la recherche portant sur {{- query}}","GoFundMe: {{- searchQuery}}":"GoFundMe : {{- searchQuery}}","The leader in online fundraising":"Leader de la levée de fonds en ligne","We\'re sorry. Something went wrong. Please wait one minute and try again.":"Nous vous prions de nous excuser. Une erreur est survenue. Veuillez patienter une minute et réessayer.","Unknown Error":"Erreur inconnue","Join this list. <1>Donate now.</1>":"Joignez-vous à cette liste. <1>Je contribue</1>","Top":"Haut","Donations ({{totalDonations}})":"Dons ({{totalDonations}})","Close all donations modal":"Fermer tous les modaux de dons","Close":"Fermer","<0>What is this? <1></1><2>Learn more</2></0>":"<0>Qu\'est-ce que c\'est? <1></1><2>En savoir plus</2></0>","Large":"Grand","Medium":"Moyen","Small (Button only)":"Petit (bouton uniquement)","Copy and paste the following embed code:":"Copiez-collez le code incorporé suivant :","Copy HTML code":"Copier le code HTML","Copied!":"Texte copié.","Something went wrong. Please select the code block to manually copy it.":"Une erreur est survenue. Veuillez sélectionner le bloc de code puis copiez-le manuellement.","Preview":"Prévisualiser","Select the button text":"Sélectionnez le texte du bouton","Have you seen \\"{{- title}}\\"?":"Avez-vous vu « {{- title}} »?","Hello \\n \\n I thought you might be interested in supporting this GoFundMe, {{- shareLink}}. \\n \\n Even a small donation could help {{- name}} reach their fundraising goal. And if you can\'t make a donation, it would be great if you could share the fundraiser to help spread the word. \\n \\n Thanks for taking a look!":"Bonjour, \\n \\n J\'ai pensé à vous pour soutenir cette campagne GoFundMe : {{- shareLink}}. \\n \\n Même un petit don pourrait aider {{- name}} à atteindre son objectif. Si vous ne pouvez pas faire de don, ce serait vraiment bien de parler de cette levée de fonds dans votre entourage en partageant le lien. \\n\\n Merci d\'y avoir jeté un coup d\'œil!","Hi,\\n\\nI\'d really appreciate it if you would share or donate to this GoFundMe.\\n\\n*{{- fundTitle}}*\\n\\n{{- description}}\\n\\nRead more here {{- fundUrl}}\\n\\nForward this message to your contacts to help this campaign reach its goal!":"Bonjour,\\n\\nJe compte sur vous pour faire un don ou partager cette collecte de fonds GoFundMe.\\n\\n*{{- fundTitle}}*\\n\\n{{- description}}\\n\\nLire la suite ici  {{- fundUrl}}\\n\\nTransférez ce message à vos contacts pour aider cette collecte de fonds à atteindre son objectif.","Hi, I\'d really appreciate it if you would share or donate to this GoFundMe, {{- shareLink}}":"Bonjour, ça serait vraiment apprécié si vous pouviez faire un don ou partager cette campagne GoFundMe : {{- shareLink}}","Help by sharing":"Soutenez la campagne en la partageant","Fundraisers shared on social networks raise up to 5x more":"Les campagnes partagées sur les réseaux sociaux ramassent jusqu\'à 5 fois plus de dons","Copy":"Copier","Copy link":"Copier le lien","Back":"Précédent","Top Donations":"Dons les plus élevés","See all donations":"Afficher tous les dons","All":"Tout","Be a top donor for {{- beneOrOrganizerName}} with {{- averageTopDonation}} or more.":"Devenez un des principaux donateurs de {{- beneOrOrganizerName}} avec un don de {{- averageTopDonation}} ou plus.","<0>Donating outside of GoFundMe</0><1>Donations on other platforms are not protected by the GoFundMe Guarantee. In the rare case that something isn’t right on GoFundMe, we work with you to determine if misuse occurred.<1></1><2>Learn more</2></1><2>Donate now</2>":"<0>Faire un don en dehors de la plateforme GoFundMe</0><1>Les dons versés sur d\'autres plateformes ne sont pas protégés par la garantie GoFundMe. Dans le cas peu probable où il y aurait un problème sur GoFundMe, nous déterminons avec vous s\'il s\'agit d\'une utilisation abusive.<1></1><2>En savoir plus</2></1><2>Je soutiens</2>","Close modal":"Fermer le modal","Suggestions":"Suggestions","Make a Beneficiary Claim":"Faire une réclamation en tant que bénéficiaire","Make a Beneficiary Claim | GoFundMe Support":"Faire une réclamation en tant que bénéficiaire | Support GoFundMe","Contact Us":"Nous contacter","Make a Donor Claim":"Faire une réclamation en tant que donateur","Make a Donor Claim | GoFundMe Support":"Faire une réclamation en tant que donateur | Support GoFundMe","Report a Fundraiser":"Dénoncer une collecte de fonds","Report a Fundraiser | GoFundMe Support":"Signaler une cagnotte solidaire | Support GoFundMe","Press Contact Form":"Formulaire de contact réservé à la presse","Press Contact Form | GoFundMe Support":"Formulaire de contact réservé à la presse | Support GoFundMe","Send Message":"Envoyer un message","Contact":"Contact","Write {{firstName}} a message":"Écrivez un message à {{firstName}}","Organizer":"Organisateur","Cancel":"Annuler","2. Use your donation receipt to<1></1><2>edit your donation comment</2><3></3>or<5></5><6>change your name on a donation</6>.":"2. Utilisez le reçu de votre don pour<1></1><2>modifier votre commentaire de don</2><3></3>ou<5></5><6>changer votre nom sur un don</6>.","If you do not remember your GoFundMe password, please<1></1><2>click here to request a new password</2>.":"Si vous avez oublié votre mot de passe GoFundMe,<1></1><2>cliquez ici pour demander un nouveau mot de passe</2>.","If you received an<1></1><2>unexpected refund</2><3></3>for your donation it could be for any of the following reasons:":"Si vous avez reçu un<1></1><2>remboursement inattendu</2><3></3>de votre don, c\'est probablement pour l\'une des raisons suivantes :","Edit My Comment":"Modifier mon commentaire","Edit My Name":"Modifier mon nom","Get Donation Receipt":"Obtenir un reçu","Refund All Donations":"Rembourser tous les dons","Update Donation Anonymity":"Modifier le status d\'anonymat du don","We can help you with that! Confirm the email address you used to donate.":"Nous pouvons vous y aider. Confirmez l\'adresse courriel utilisée pour faire un don.","Editing the information on a donation is quick and easy, and can be done from your donation receipt or through your GoFundMe account.":"Vous voulez modifier les informations relatives à un don? Rien de plus simple! Vous pouvez le faire depuis le reçu ou via votre compte GoFundMe.","Actions you can take on your own:":"Voici les actions que vous pouvez entreprendre vous-même :","1. Request a new donation receipt by entering your donation email address in the field below.":"1. Demandez un nouveau reçu de don en indiquant l\'adresse courriel utilisée pour faire le don dans le champ ci-dessous.","We can help you with that! If you have a personal fundraiser, please enter the email address you used to create your fundraiser.":"Nous pouvons vous y aider. Si vous avez lancé une collecte de fonds personnelle, indiquez l\'adresse courriel que vous avez utilisée lors de sa création.","If you have a Certified Charity fundraiser, our Customer Happiness Team can help you with that! Please select an option below in \\"Still need help?\\" and include the link to the fundraiser you\'d like to refund.":"Si vous avez lancé une collecte de fonds au profit d\'un organisme caritatif certifié, notre équipe du support technique peut vous aider. Sélectionnez une option sous « J\'ai encore besoin d\'aide », puis copiez le lien vers la collecte de fonds concernée par le remboursement.","Additional Information:":"Informations supplémentaires :","Organizer deactivated the fundraiser":"L\'organisateur a désactivé la collecte de fonds","Our payment processor wasn\'t able to verify the donation":"Le processeur de paiement n\'a pas pu vérifier le don","Organizer did not verify their account or withdraw funds within required deadlines":"L\'organisateur a dépassé le délai pour vérifier son compte ou retirer les fonds","The donation was charged back by the donor":"Le donateur s\'est fait rembourser son don","The donation was made by the organizer or beneficiary":"Le don provenait de l\'organisateur ou du bénéficiaire","Please visit the fundraiser to view any updates that the organizer might have posted in regards to refunds, click \'Contact\' beneath the organizer\'s name on their fundraiser to email them with any questions, or reach out to our team if you have questions on how you may be able to still support the cause.":"Consultez la page de la collecte de fonds pour voir les éventuels communiqués publiés par l\'organisateur à propos des remboursements. Si vous avez des questions et souhaitez envoyer un courriel à l\'organisateur, cliquez sur Contact sous le nom de l\'organisateur de la collecte de fonds. Vous pouvez aussi contacter notre équipe pour vous renseigner sur les façons de continuer de soutenir cette cause.","Help Center":"Centre d\'aide","Please read below":"Veuillez lire le paragraphe ci-dessous.","Your Email Address":"Adresse courriel","My question was answered":"J\'ai eu réponse à ma question","Still need help?":"Encore besoin d\'aide?","Chat now":"Clavarder maintenant","Chat":"Clavarder","Send email":"Envoyer un courriel","Donations paused":"Dons suspendus","Our team has contacted the organizer with a solution, and donations will resume once the issue is resolved.":"Notre équipe a suggéré une solution à l\'organisateur. La campagne pourra accepter de nouveaux dons dès que la situation sera réglée.","How can I help?":"Comment puis-je vous aider?","Please reach out to the organizer and ask them to sign in to GoFundMe and check their account to resolve the issue.":"Demandez à l\'organisateur de se connecter à GoFundMe et de vérifier son compte pour résoudre le problème.","Something went wrong. We’re working on it, please try again later or<1></1><2>contact us</2>.":"Une erreur est survenue. Nous nous en occupons. Veuillez réessayer ultérieurement ou<1></1><2>nous contacter</2>.","To include a comment with your donation, you must add text and/or upload a photo.":"Pour laisser un commentaire avec votre don, il faut rédiger un texte et/ou télécharger une photo.","{{fileName}}: Please choose a jpeg, jpg, gif, or png file type, and ensure it is smaller than 2048 kb.":"{{fileName}}, veuillez choisir un fichier au format jpeg, jpg, gif ou png d\'une taille inférieure à 2 048 Ko.","{{fileName}}: Please try again later.":"{{fileName}}, veuillez réessayer plus tard.","Show more Support":"Manifestez plus de soutien","Return to campaign":"Revenir à la levée de fonds","Back to previous page":"Retour à la page précédente","Hello \\n \\n I just donated to this GoFundMe, {{- shareLink}}.  Would you be interested in supporting it too? \\n \\n Even a small donation could help {{- name}} reach their fundraising goal. And if you can\'t make a donation, it would be great if you could share the fundraiser to help spread the word. \\n \\n Thanks for taking a look!":"Bonjour\\n \\n Je viens de faire un don à la campagne GoFundMe {{- shareLink}}. Voulez-vous faire un geste, vous aussi? \\n \\n Même un petit don pourrait aider {{- name}} à atteindre son objectif. Si vous ne pouvez pas faire de don, ça serait vraiment bien si vous pouviez parler de cette collecte de fonds autour de vous en partageant le lien. \\n\\n Merci d\'y jeter un coup d\'œil!","Hi, I’d really appreciate it if you would share or donate to this GoFundMe, {{- fundTitle}} {{- shareLink}}":"Bonjour, j\'apprécierais vraiment si vous pouviez faire un don ou partager cette campagne GoFundMe : {{- fundTitle}} {{- shareLink}}","Hi, I just donated to this GoFundMe and would appreciate it if you would share or donate too. {{- shareLink}}":"Bonjour, je viens de faire un don à cette campagne GoFundMe. Ça serait vraiment apprécié si vous pouviez la partager ou verser un don. {{- shareLink}}","Something went wrong. Please select the link and manually copy.":"Une erreur s\'est produite. Veuillez sélectionner le lien puis le copier manuellement.","Now help spread the word":"Maintenant, parlez-en autour de vous","By sharing this fundraiser, you increase their chance of success by 5x.":"En partageant cette collecte de fonds, vous augmentez par 5 ses chances de succès.","Finished sharing?":"Vous avez fini de partager la campagne?","Sign up to post your comment":"Inscrivez-vous pour publier votre commentaire","Sign up to follow this fundraiser":"Inscrivez-vous pour suivre cette collecte de fonds","Fundraising team ({{count}})":"Équipe de collecte de fonds ({{count}})","Contact us | GoFundMe Support":"Nous contacter | Support GoFundMe","GoFundMe will always respond to your requests as quickly as possible.":"GoFundMe répondra toujours à vos requêtes le plus rapidement possible.","Donor protection guarantee":"Garantie de protection des donateurs","GoFundMe has the first and only guarantee in the industry.":"Exclusivité : GoFundMe propose une garantie pour protéger les donateurs.","Simple setup":"Configuration simple","You can personalize and share your GoFundMe in just a few minutes.":"Vous pouvez personnaliser et partager votre campagne GoFundMe en quelques minutes.","0% platform fee":"Aucun frais de plateforme","With a 0% platform fee, you get to keep even more of your money.":"Comme il n\'y a pas de frais de plateforme à régler, vous profitez au maximum de l\'argent récolté.","Mobile app":"Application mobile","The GoFundMe app makes it easy to launch and manage your campaign on the go.":"Avec l\'application GoFundMe, lancer et gérer une collecte de fonds est un véritable jeu d\'enfant, où que vous soyez.","Social reach":"Portée sociale","Harness the power of social media to spread your story and get more support.":"Exploitez la puissance des réseaux sociaux pour diffuser votre histoire et obtenir plus de soutien.","24/7 expert advice":"Conseils d\'expert 24/24, 7/7","Our best in class Customer Happiness agents will answer your questions, day or night.":"Nos agents de support d\'élite répondront à toutes vos questions, le jour comme la nuit.","Fundraisers":"Levées de fonds","Discover":"Découvrir","Charity":"Organismes","User name":"Nom d\'utilisateur","What is crowdfunding?":"Qu\'est-ce que le crowdfunding?","How it works":"Comment ça marche?","Fundraising tips":"Conseils pour lever des fonds","Plan your fundraiser":"Planifiez votre campagne","Travel & Adventure":"Voyages et aventure","Medical, Illness & Healing":"Santé","Missions, Faith & Church":"Religion et spiritualisme","Non-Profits & Charities":"Organismes de bienfaisance et à BNL","Weddings & Honeymoons":"Mariages et lunes de miel","Other":"Autre","Sports, Teams & Clubs":"Sports, équipes et clubs","Education & Learning":"Éducation","Volunteer & Service":"Bénévolat","Competitions & Pageants":"Compétitions","Accidents & Emergencies":"Accidents et urgences","Dreams, Hopes & Wishes":"Rêves","Animals & Pets":"Animaux","Environment":"Environnement","Rent, Food & Monthly Bills":"Dépenses courantes (loyer, épicerie, factures)","Birthday Pots":"Cagnottes Anniversaire","Babies, Kids & Family":"Nouveaux-nés, enfants et famille","Business & Entrepreneurs":"Entreprises et entrepreneurs","Celebrations & Events":"Évènements et célébrations","Community & Neighbors":"Communauté et voisins","Creative Arts, Music & Film":"Arts créatifs, musique et film","Funerals & Memorials":"Funérailles et commémorations","#1 fundraising platform":"La première plateforme de financement participatif","More people start fundraisers on GoFundMe than on any other platform.":"GoFundMe compte plus d\'organisateurs de levée de fonds que toute autre plateforme.","Expert advice, 24/7":"Conseils d\'expert 24/24, 7/7","Contact us with your questions and we’ll answer, day or night.":"Envoyez-nous vos questions et nous vous répondrons, 24 heures sur 24.","Team member":"Coéquipier","Sorry, no account found":"Désolé, aucun compte trouvé.","Your message to {{coFirstName}} successfully sent.":"Votre message a bel et bien été envoyé à {{coFirstName}}.","Your message to {{coFirstName}} failed to send. Please try again later.":"Impossible d\'envoyer votre message à {{coFirstName}}. Veuillez réessayer plus tard.","[email redacted]":"[adresse courriel retirée]","[phone redacted]":"[numéro de téléphone retiré]","Please enter your name.":"Veuillez entrer votre nom.","Please enter a shorter name.":"Veuillez entrer un nom plus court.","Please enter your email address.":"Veuillez indiquer votre adresse courriel.","Please enter a shorter email address.":"Veuillez indiquer une adresse courriel plus courte.","Please confirm your email address.":"Veuillez confirmer votre adresse courriel.","Emails do not match.":"Les adresses courriel ne correspondent pas.","Please complete the reCAPTCHA.":"Veuillez compléter le test reCAPTCHA.","Please enter a subject line":"Veuillez indiquer un objet.","Please enter your message":"Veuillez entrer votre message.","Please enter a longer message.":"Veuillez rédiger un message plus long.","Please enter a shorter message.":"Veuillez rédiger un message plus court.","Please enter a valid phone number":"Veuillez indiquer un numéro de téléphone valide.","Please enter a campaign URL":"Veuillez indiquer l\'URL d\'une collecte de fonds .","Please specify how you know the Campaign Organizer.":"Veuillez préciser votre lien avec l\'organisateur de collecte de fonds.","Please specify a description.":"Veuillez rédiger une description.","Please select an option.":"Veuillez sélectionner une option.","Please enter a description.":"Veuillez entrer une description.","Please enter a longer description.":"Veuillez entrer une description plus longue.","Please enter your concerns.":"Veuillez indiquer ce qui vous préoccupe.","Please enter a publication name":"Veuillez indiquer un nom de publication.","Please log in":"Veuillez vous connecter","The email entered does not match your account\'s email":"L\'adresse courriel saisie ne correspond pas à celle rattachée à votre compte.","Unexpected error":"Erreur inattendue","Please enter your name":"Veuillez entrer votre nom.","Please enter your email address":"Veuillez entrer votre adresse courriel","Please enter a valid email address.":"Veuillez indiquer une adresse courriel valide.","Today":"Aujourd\'hui","Yesterday":"Hier","[redacted]":"[contenu supprimé]","Please enter your password":"Veuillez entrer votre mot de passe.","Please enter your first name":"Veuillez indiquer votre prénom","Please enter a shorter first name.":"Veuillez entrer un prénom plus court.","Please enter your last name":"Veuillez entrer votre nom","Please enter a shorter last name.":"Veuillez entrer un nom plus court.","Your email address does not match.":"Vos adresses courriel ne correspondent pas.","Please enter a password.":"Veuillez entrer un mot de passe.","Passwords must be at least twelve characters long.":"Les mots de passe doivent contenir au moins 12 caractères.","You have exceeded the maximum amount of characters.":"Vous avez dépassé le nombre maximum de caractères.","Passwords must contain at least one number, symbol, uppercase letter, and lowercase letter.":"Le mot de passe doit contenir au moins un chiffre, un symbole, une lettre majuscule et une lettre minuscule.","Please make a selection...":"Veuillez sélectionner une option...","Yes, I have contacted the Campaign Organizer":"Oui, j\'ai contacté l\'organisateur de la collecte de fonds.","No, I have not contacted the Campaign Organizer":"Non, je n\'ai pas contacté l\'organisateur de la collecte de fonds.","The situation has been misrepresented.":"La situation a été faussement exposée.","The funds were not used as stated on the campaign.":"Les fonds n\'ont pas été utilisés conformément à ce qui était indiqué dans la collecte de fonds.","The funds were never delivered to the intended recipient.":"Le bénéficiaire n\'a jamais reçu les fonds récoltés en sa faveur.","I did not authorize this donation.":"Je n\'ai pas autorisé ce don.","I no longer wish to support this campaign.":"Je ne souhaite plus soutenir cette collecte de fonds.","… {{- userName}} needs your support for {{- campaignTitle}}":"… {{- userName}} a besoin de votre soutien pour {{- campaignTitle}}","{{- organizerFullName}} and {{- teamMemberFullName}} are organizing this fundraiser to benefit {{- beneficiaryFullName}}.":"{{- organizerFullName}} et {{- teamMemberFullName}} organisent cette levé de fonds au profit de {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{- teamMemberFullName}} are organizing this fundraiser on behalf of {{- beneficiaryFullName}}.":"{{- organizerFullName}} et {{- teamMemberFullName}} organisent cette levée de fonds pour {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser to benefit {{- beneficiaryFullName}}.":"{{- organizerFullName}} et {{count}} autre personne organisent cette levée de fonds au profit de {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser to benefit {{- beneficiaryFullName}}.:_:plural":"{{- organizerFullName}} et {{count}} autres personnes organisent cette levée de fonds au profit de {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser on behalf of {{- beneficiaryFullName}}.":"{{- organizerFullName}} et {{count}} autre personne organisent cette levée de fonds au nom de {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser on behalf of {{- beneficiaryFullName}}.:_:plural":"{{- organizerFullName}} et {{count}} autres personnes organisent cette levée de fonds au nom de {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{- teamMemberFullName}} are organizing this fundraiser.":"{{- organizerFullName}} et {{- teamMemberFullName}} organisent cette levée de fonds.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser.":"{{- organizerFullName}} et {{count}} autre personne organisent cette levée de fonds.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser.:_:plural":"{{- organizerFullName}} et {{count}} autres personnes organisent cette levée de fonds.","{{- organizerFullName}} is organizing this fundraiser to benefit {{- beneficiaryFullName}}.":"{{- organizerFullName}} organise cette levée de fonds au profit de {{- beneficiaryFullName}}.","{{- organizerFullName}} is organizing this fundraiser on behalf of {{- beneficiaryFullName}}.":"{{- organizerFullName}} organise cette levée de fonds au nom de {{- beneficiaryFullName}}.","{{- organizerFullName}} is organizing this fundraiser.":"{{- organizerFullName}} organise cette levée de fonds.","This team raised {{raisedAmountFormatted}} from {{count}} other donation.":"Cette équipe a récolté {{raisedAmountFormatted}} grâce à {{count}} autre don.","This team raised {{raisedAmountFormatted}} from {{count}} other donation.:_:plural":"Cette équipe a ramassé {{raisedAmountFormatted}} grâce à {{count}} autres dons.","Raised {{amount}} from {{count}} donation":"Total de {{amount}} récolté grâce à {{count}} don","Raised {{amount}} from {{count}} donation:_:plural":"Total de {{amount}} ramassé grâce à {{count}} dons","Donations are typically 100% tax deductible in the US.":"En principe, les dons sont entièrement déductibles d\'impôts aux États-Unis.","Donations are typically tax deductible in Canada.":"En principe, les dons sont déductibles d\'impôts au Canada.","Donations are typically tax deductible in Australia.":"En principe, les dons sont déductibles d\'impôts en Australie.","Donations eligible for Gift Aid.":"Dons pouvant profiter du programme Gift Aid.","{{city}}, {{state}}":"{{city}}, {{state}}","Registered nonprofit":"Organisme à but non lucratif certifié","text":"texte","Organizer and beneficiary":"Organisateur et bénéficiaire","Fundraising team: {{- name}} ({{count}})":"Équipe de collecte de fonds : {{- name}} ({{count}})","Copy fundraiser link":"Copier le lien vers la levée de fonds","Share this fundraiser so it can raise up to 5x more.":"Partagez cette collecte de fonds pour récolter jusqu\'à 5 fois plus de dons.","Build momentum for this fundraiser.":"Donnez de l\'élan à cette collecte de fonds.","View donation summary":"Afficher le bilan des dons","Check out your donation details.":"Consultez les détails relatifs à votre don.","Add a comment":"Ajoutez un commentaire","Add a supportive message with your donation.":"Ajoutez un message de soutien à votre don.","Add a profile photo":"Ajouter une photo de profil","Looks good. Your profile photo has been added.":"C\'est bien parti. Votre photo de profil a été ajoutée.","Let friends and the GoFundMe community know it’s you!":"Faites savoir à vos amis et à la communauté GoFundMe que c\'est vous.","Share on Facebook":"Partager sur Facebook","Tell your Facebook friends about this fundraiser.":"Parlez de cette collecte de fonds à vos amis Facebook.","Join fundraising team":"Rejoindre l\'équipe de collecte de fonds","Help {{organizerName}} raise more funds.":"Aidez {{organizerName}} à collecter plus de fonds.","Thank donors":"Remercier les donateurs","Show appreciation and get more support. Ask donors to share this fundraiser.":"Témoignez votre reconnaissance et obteniez plus de soutien. Demandez aux donateurs de partager cette collecte de fonds.","Add a donate button":"Ajouter un bouton de don","Reach your community on a website or blog.":"Atteignez votre communauté avec un site web ou un blog.","Donated {{amount}}":"Don(s) versé(s) : {{amount}}","Hi, I’d really appreciate it if you would share or donate to this GoFundMe, {{fundTitle}} {{- shareLink}}":"Bonjour, j\'apprécierais vraiment si vous pouviez faire un don ou partager cette campagne GoFundMe : {{fundTitle}} {{- shareLink}}","Captcha challenge failed. Please try again.":"Le test de vérification captcha a échoué. Veuillez réessayer.","You exceeded the maximum number of tries. Please try again later.":"Vous avez dépassé le nombre maximum de tentatives. Veuillez réessayer plus tard.","An error occurred. Please try again later.":"Une erreur est survenue. Veuillez réessayer plus tard.","Sign in to follow this fundraiser":"Connectez-vous pour suivre cette campagne","Sign in to post your comment":"Connectez-vous pour publier votre commentaire","Reset instructions sent to {{email}}":"Instructions de réinitialisation envoyées à {{email}}","Please check your email & password or please sign in with your Facebook account.":"Veuillez vérifiez votre adresse courriel et votre mot de passe, ou connectez-vous avec votre compte Facebook.","Please check your email & password":"Vérifiez votre adresse courriel et votre mot de passe."}},"en_US":{"apps-campaign":{"Better Business Bureau":"Better Business Bureau","Accredited business":"Accredited business","Created {{dateFormatBasedOnLocal}}":"Created {{dateFormatBasedOnLocal}}","Just now":"Just now","Created {{count}} hour ago":"Created {{count}} hour ago","Created {{count}} hour ago:_:plural":"Created {{count}} hours ago","Created {{count}} day ago":"Created {{count}} day ago","Created {{count}} day ago:_:plural":"Created {{count}} days ago","Thank you for your donation. A receipt has been sent to <1>{{donorEmail}}</1>":"Thank you for your donation. A receipt has been sent to <1>{{donorEmail}}</1>","by":"by","for":"for","Team fundraiser":"Team fundraiser","Link Copied":"Link Copied","Anonymous":"Anonymous","In partnership with<1></1><2>{{partnerName}}</2>":"In partnership with<1></1><2>{{partnerName}}</2>","See all":"See all","This fundraiser is located near you":"This fundraiser is located near you","{{- recentDonorsStr}} person just donated":"{{- recentDonorsStr}} person just donated","{{- recentDonorsStr}} person just donated:_:plural":"{{- recentDonorsStr}} people just donated","This fundraiser is no longer accepting donations. If you are the organizer, beneficiary, team member, or donor,<1></1><2>sign in</2><3></3>to see additional information.":"This fundraiser is no longer accepting donations. If you are the organizer, beneficiary, team member, or donor,<1></1><2>sign in</2><3></3>to see additional information.","The organizer has currently disabled new donations to this fundraiser.":"The organizer has currently disabled new donations to this fundraiser.","This fundraiser has been deactivated by the organizer.":"This fundraiser has been deactivated by the organizer.","Learn more":"Learn more","Copy to clip board":"Copy to clip board","Fundraiser link copied":"Fundraiser link copied","Copy to clipboard":"Copy to clipboard","Now paste this link into a Facebook post, Messenger, or any Facebook groups you\'re in.":"Now paste this link into a Facebook post, Messenger, or any Facebook groups you\'re in.","Copy your fundraiser link and paste it into a Facebook post, Messenger, or any Facebook groups you’re in.":"Copy your fundraiser link and paste it into a Facebook post, Messenger, or any Facebook groups you’re in.","Questions about where to share this link?":"Questions about where to share this link?","<0>Tip:</0><1></1>Paste this fundraiser link anywhere.":"<0>Tip:</0><1></1>Paste this fundraiser link anywhere.","Collapse text":"Collapse text","Read more":"Read more","Edit":"Edit","Delete":"Delete","Edited":"Edited","{{name}}<1></1>donated<3></3><4>{{donationAmount}}</4>":"{{name}}<1></1>donated<3></3><4>{{donationAmount}}</4>","{{name}}<1></1>commented":"{{name}}<1></1>commented","Campaign organizer":"Campaign organizer","Beneficiary":"Beneficiary","GoFundMe Guarantee":"GoFundMe Guarantee","Only donations on our platform are protected by the GoFundMe Guarantee.":"Only donations on our platform are protected by the GoFundMe Guarantee.","Donate now":"Donate now","Your donation":"Your donation","Recent donation":"Recent donation","Top donation":"Top donation","First donation":"First donation","Offline":"Offline","Become an early supporter":"Become an early supporter","Become the first supporter":"Become the first supporter","Your donation matters":"Your donation matters","In the rare case something isn’t right, we will work with you to determine if misuse occurred.":"In the rare case something isn’t right, we will work with you to determine if misuse occurred.","Email":"Email","Embed HTML":"Embed HTML","Messenger":"Messenger","Facebook":"Facebook","<0>We use cookies</0> to enable features and market content. Click “That’s OK” to add cookies. View<2></2><3>privacy policy</3><4></4>or<6></6><7>manage cookies.</7>":"<0>We use cookies</0> to enable features and market content. Click “That’s OK” to add cookies. View<2></2><3>privacy policy</3><4></4>or<6></6><7>manage cookies.</7>","That\'s OK":"That\'s OK","<0>As stated on the banner, GoFundMe uses cookies to enable features and market content to provide you with an improved experience. We consider these cookies to be non-essential, pursuant to our<1></1><2>privacy policy.</2><3></3>When you click “That’s OK” on the banner, we add these non-essential cookies.</0>":"<0>As stated on the banner, GoFundMe uses cookies to enable features and market content to provide you with an improved experience. We consider these cookies to be non-essential, pursuant to our<1></1><2>privacy policy.</2><3></3>When you click “That’s OK” on the banner, we add these non-essential cookies.</0>","Cookie Preferences":"Cookie Preferences","Close cookie modal":"Close cookie modal","We value your privacy":"We value your privacy","Here in this Cookie Preferences page, the non-essential cookies category is broken down\\n                            further into functional and marketing, as you can see below. You can change your\\n                            preferences as to both functional and marketing cookies here. When you click “Save” on\\n                            this page, we will add only those non-essential cookies you select.":"Here in this Cookie Preferences page, the non-essential cookies category is broken down\\n                            further into functional and marketing, as you can see below. You can change your\\n                            preferences as to both functional and marketing cookies here. When you click “Save” on\\n                            this page, we will add only those non-essential cookies you select.","Marketing cookies":"Marketing cookies","Enable":"Enable","GoFundMe collects information regarding user navigation to provide sponsored content\\n                            relevant to our products on other sites. Specifically, if you start a fundraiser on\\n                            GoFundMe and you do not publish that fundraiser, GoFundMe may then show a banner ad the\\n                            next time you are on Facebook.":"GoFundMe collects information regarding user navigation to provide sponsored content\\n                            relevant to our products on other sites. Specifically, if you start a fundraiser on\\n                            GoFundMe and you do not publish that fundraiser, GoFundMe may then show a banner ad the\\n                            next time you are on Facebook.","Functional cookies":"Functional cookies","We use data collected with these cookies to improve your experiences on the GoFundMe\\n                            platform, as well as avoiding bugs or testing new features.":"We use data collected with these cookies to improve your experiences on the GoFundMe\\n                            platform, as well as avoiding bugs or testing new features.","Essential cookies":"Essential cookies","Always enabled":"Always enabled","Data is collected by these cookies to offer basic functions, to ensure that the GoFundMe\\n                            Platform functions technically, to keep track of your settings and activities, and for\\n                            security or fraud prevention purposes.":"Data is collected by these cookies to offer basic functions, to ensure that the GoFundMe\\n                            Platform functions technically, to keep track of your settings and activities, and for\\n                            security or fraud prevention purposes.","Enable all and close":"Enable all and close","Enable all":"Enable all","Save and close":"Save and close","Save":"Save","Show less":"Show less","Show more":"Show more","Previous image":"Previous image","Next image":"Next image","Image {{i}} of {{t}}":"Image {{i}} of {{t}}","Previous 10 images":"Previous 10 images","Next 10 images":"Next 10 images","Close image gallery":"Close image gallery","Delete this image":"Delete this image","Instagram":"Instagram","Copy and paste this link on your Instagram bio":"Copy and paste this link on your Instagram bio","Fundraiser link":"Fundraiser link","Link copied":"Link copied","Something went wrong.":"Something went wrong.","Share on Instagram":"Share on Instagram","Back to sharing":"Back to sharing","LinkedIn":"LinkedIn","Hi, I’d really appreciate it if you would share or donate to this GoFundMe.":"Hi, I’d really appreciate it if you would share or donate to this GoFundMe.","Your password must have:":"Your password must have:","At least 12 characters":"At least 12 characters","1 uppercase letter":"1 uppercase letter","1 lowercase letter":"1 lowercase letter","1 number":"1 number","1 symbol":"1 symbol","Print Poster":"Print Poster","Print":"Print","{{raisedAmountString}}<1></1><2>{{sameCurrencyCode}} raised</2>":"{{raisedAmountString}}<1></1><2>{{sameCurrencyCode}} raised</2>","{{raisedAmountString}}<1></1><2>{{sameCurrencyCode}} raised of {{goalAmountNBSP}} goal</2>":"{{raisedAmountString}}<1></1><2>{{sameCurrencyCode}} raised of {{goalAmountNBSP}} goal</2>","{{goalAmountNBSP}}<1></1><2>{{sameCurrencyCode}} goal</2>":"{{goalAmountNBSP}}<1></1><2>{{sameCurrencyCode}} goal</2>","share":"share","Share as much as possible":"Share as much as possible","Try using all sharing options. Telling people about your fundraiser is the only way to start raising donations.":"Try using all sharing options. Telling people about your fundraiser is the only way to start raising donations.","Text":"Text","donor":"donor","donors":"donors","shares":"shares","follower":"follower","followers":"followers","Fundraiser Stats":"Fundraiser Stats","Share":"Share","By continuing, you agree with GoFundMe<1></1><2>terms</2><3></3>and<5></5><6>privacy policy</6>":"By continuing, you agree with GoFundMe<1></1><2>terms</2><3></3>and<5></5><6>privacy policy</6>","Preview email":"Preview email","Twitter":"Twitter","{{article}} by {{- authorName}}":"{{article}} by {{- authorName}}","See older updates":"See older updates","WhatsApp":"WhatsApp","Your donation is made to PayPal Giving Fund Australia (ABN 65 105 950 945), a Public Ancillary Fund and a charity registered with the Australian Charities and Not-for-profits Commission, subject to its<1></1><2>terms</2>.":"Your donation is made to PayPal Giving Fund Australia (ABN 65 105 950 945), a Public Ancillary Fund and a charity registered with the Australian Charities and Not-for-profits Commission, subject to its<1></1><2>terms</2>.","While GoFundMe does not have a platform fee, PayPal Giving Fund Australia receives your donation after deduction of transaction<1></1><2>fees</2><3></3>and will grant funds to your recommended charity on a monthly basis.*":"While GoFundMe does not have a platform fee, PayPal Giving Fund Australia receives your donation after deduction of transaction<1></1><2>fees</2><3></3>and will grant funds to your recommended charity on a monthly basis.*","*If, after reasonable efforts, PayPal Giving Fund Australia cannot deliver donations to this<1></1>charity, it will grant funds to another charity per PayPal Giving Fund Australia\'s<3></3><4>policies</4>.":"*If, after reasonable efforts, PayPal Giving Fund Australia cannot deliver donations to this<1></1>charity, it will grant funds to another charity per PayPal Giving Fund Australia\'s<3></3><4>policies</4>.","Donations raised benefit:":"Donations raised benefit:","How charity fundraisers work":"How charity fundraisers work","Your donation is made to PayPal Giving Fund Canada, a charity registered with the Canada Revenue Agency (No. 812867752RR0001), subject to its<1></1><2>terms</2>.":"Your donation is made to PayPal Giving Fund Canada, a charity registered with the Canada Revenue Agency (No. 812867752RR0001), subject to its<1></1><2>terms</2>.","While GoFundMe does not have a platform fee, PayPal Giving Fund Canada receives your donation after deduction of transaction<1></1><2>fees</2><3></3>and will grant funds to your recommended charity on a monthly basis.*":"While GoFundMe does not have a platform fee, PayPal Giving Fund Canada receives your donation after deduction of transaction<1></1><2>fees</2><3></3>and will grant funds to your recommended charity on a monthly basis.*","*If, after reasonable efforts, PayPal Giving Fund Canada cannot deliver donations to this<1></1>charity, it will grant funds to another charity per PayPal Giving Fund Canada\'s<3></3><4>policies</4>.":"*If, after reasonable efforts, PayPal Giving Fund Canada cannot deliver donations to this<1></1>charity, it will grant funds to another charity per PayPal Giving Fund Canada\'s<3></3><4>policies</4>.","Support":"Support","Contribute":"Contribute","Buy me a coffee":"Buy me a coffee","Show appreciation":"Show appreciation","Start a GoFundMe":"Start a GoFundMe","Support this cause":"Support this cause","{{- userName}} needs your help today! {{- campaignTitle}}":"{{- userName}} needs your help today! {{- campaignTitle}}","Fundraiser for {{- userName}} by {{- campaignOrganizer}} : {{- campaignTitle}}":"Fundraiser for {{- userName}} by {{- campaignOrganizer}} : {{- campaignTitle}}","Fundraiser by {{- userName}} : {{- campaignTitle}}":"Fundraiser by {{- userName}} : {{- campaignTitle}}","{{- campaignTitle}}, organized by {{- campaignOrganizer}}":"{{- campaignTitle}}, organized by {{- campaignOrganizer}}","See more":"See more","See top donations":"See top donations","Continue reading":"Continue reading","Updates":"Updates","Image {{imageIndex}} of {{totalImages}}. Click to view all images":"Image {{imageIndex}} of {{totalImages}}. Click to view all images","Image {{imageIndex}} of {{totalImages}}":"Image {{imageIndex}} of {{totalImages}}","Photo limit reached":"Photo limit reached","Add more photos":"Add more photos","Add photos to comment":"Add photos to comment","I donated because...":"I donated because...","Add this public comment to the fundraiser.":"Add this public comment to the fundraiser.","Your donation will be displayed as Anonymous, and this comment will not show up publicly on the campaign.":"Your donation will be displayed as Anonymous, and this comment will not show up publicly on the campaign.","Post comment":"Post comment","Please choose a maximum of 10 photos for your comment.":"Please choose a maximum of 10 photos for your comment.","Please donate and share words of encouragement.":"Please donate and share words of encouragement.","Continue":"Continue","Comments":"Comments","Please select one.":"Please select one.","Yes, I have contacted the Campaign Organizer.":"Yes, I have contacted the Campaign Organizer.","No, I have not contacted the Campaign Organizer.":"No, I have not contacted the Campaign Organizer.","They are a family member":"They are a family member","They are a friend or acquaintance":"They are a friend or acquaintance","I do not know the organizer of this campaign":"I do not know the organizer of this campaign","Your Name":"Your Name","Your Phone Number":"Your Phone Number","Required in case our team needs to contact you for further details.":"Required in case our team needs to contact you for further details.","Your Email":"Your Email","Confirm Email":"Confirm Email","Page URL":"Page URL","Please enter the URL in this format: https://www.gofundme.com/f/example-campaign":"Please enter the URL in this format: https://www.gofundme.com/f/example-campaign","I don\'t know the page URL":"I don\'t know the page URL","Have you already contacted the organizer of this campaign?":"Have you already contacted the organizer of this campaign?","How do you know the organizer of this campaign?":"How do you know the organizer of this campaign?","Please explain your relationship to the Campaign Organizer.":"Please explain your relationship to the Campaign Organizer.","How much money did you receive from the campaign organizer?":"How much money did you receive from the campaign organizer?","Why do you believe this person will not deliver the funds to you?":"Why do you believe this person will not deliver the funds to you?","Please attach a copy of a government issued photo ID":"Please attach a copy of a government issued photo ID","Please upload only JPEG, GIF, PNG or PDF files. The file size must be less than 5MB.":"Please upload only JPEG, GIF, PNG or PDF files. The file size must be less than 5MB.","Upload any evidence you may have":"Upload any evidence you may have","Send Email":"Send Email","Message Subject":"Message Subject","Your Message":"Your Message","I am requesting a refund because...":"I am requesting a refund because...","Describe your concerns about how the funds are being used.":"Describe your concerns about how the funds are being used.","40 characters minimum":"40 characters minimum","Yes, I know the Campaign Organizer.":"Yes, I know the Campaign Organizer.","No, I do not know the Campaign Organizer":"No, I do not know the Campaign Organizer","I am a beneficiary.":"I am a beneficiary.","I am a donor.":"I am a donor.","I am an individual concerned about this campaign.":"I am an individual concerned about this campaign.","I am involved in a legal dispute with the Campaign Organizer.":"I am involved in a legal dispute with the Campaign Organizer.","This campaign includes libelous statements.":"This campaign includes libelous statements.","Campaign includes factually incorrect information.":"Campaign includes factually incorrect information.","Campaign Organizer has not used funds for the stated purpose.":"Campaign Organizer has not used funds for the stated purpose.","They are impersonating someone or have copied another campaign.":"They are impersonating someone or have copied another campaign.","Please explain your concern(s) in detail.":"Please explain your concern(s) in detail.","Which statements are libelous and why?":"Which statements are libelous and why?","Which statements are incorrect and why?":"Which statements are incorrect and why?","How have the campaign’s donations been spent?":"How have the campaign’s donations been spent?","What is the original campaign link/title?":"What is the original campaign link/title?","Please describe your concerns":"Please describe your concerns","How do you know the campaign organizer?":"How do you know the campaign organizer?","How are you connected to the campaign?":"How are you connected to the campaign?","How much money is being withheld and why?":"How much money is being withheld and why?","Why are you concerned about your donation?":"Why are you concerned about your donation?","Please describe your concerns.":"Please describe your concerns.","Do you know the Campaign Organizer?":"Do you know the Campaign Organizer?","Which best describes you?":"Which best describes you?","Publication":"Publication","Self-Service":"Self-Service","Please select an option which best describes you to see relevant information.":"Please select an option which best describes you to see relevant information.","For customized help, please sign in.":"For customized help, please sign in.","Sign In":"Sign In","Top Answers":"Top Answers","How do I get a refund?":"How do I get a refund?","How do I withdraw money?":"How do I withdraw money?","Is my country supported?":"Is my country supported?","Can I withdraw money?":"Can I withdraw money?","How do I reset my password?":"How do I reset my password?","How do I invite someone to withdraw?":"How do I invite someone to withdraw?","I can\'t withdraw my funds, now what?":"I can\'t withdraw my funds, now what?","How do your fees work?":"How do your fees work?","What about taxes and stuff?":"What about taxes and stuff?","GoFundMe homepage":"GoFundMe homepage","Choose your language":"Choose your language","How GoFundMe works":"How GoFundMe works","Common questions":"Common questions","Success stories":"Success stories","Supported countries":"Supported countries","Team fundraising":"Team fundraising","Donate button":"Donate button","Support COVID-19 fundraisers":"Support COVID-19 fundraisers","Why GoFundMe":"Why GoFundMe","Medical":"Medical","Emergency":"Emergency","Memorial":"Memorial","Education":"Education","Nonprofit":"Nonprofit","Fundraise for":"Fundraise for","Help center":"Help center","Blog":"Blog","GoFundMe Stories":"GoFundMe Stories","Press center":"Press center","Careers":"Careers","About":"About","Resources":"Resources","Terms":"Terms","Privacy":"Privacy","Legal":"Legal","Do Not Sell My Personal Information":"Do Not Sell My Personal Information","Hide":"Hide","Show":"Show","Hide guidance cards":"Hide guidance cards","Show guidance cards":"Show guidance cards","Previous card":"Previous card","Next card":"Next card","You are donating to<1></1><2>PayPal Giving Fund Ireland</2>, a registered charity (No. 20205692), which will email you a receipt for your donation.":"You are donating to<1></1><2>PayPal Giving Fund Ireland</2>, a registered charity (No. 20205692), which will email you a receipt for your donation.","*In rare cases, a charity may cease to meet PayPal Giving Fund Ireland’s legal or other eligibility requirements to receive funds or may not accept the funds. In such cases, PayPal Giving Fund Ireland will<1></1><2>reassign the funds</2><3></3>to another charity and (wherever possible) seek a new recommendation from you.":"*In rare cases, a charity may cease to meet PayPal Giving Fund Ireland’s legal or other eligibility requirements to receive funds or may not accept the funds. In such cases, PayPal Giving Fund Ireland will<1></1><2>reassign the funds</2><3></3>to another charity and (wherever possible) seek a new recommendation from you.","The charity will typically receive the funds from PayPal Giving Fund within 15-45 days (90 days if the charity has not enrolled).*":"The charity will typically receive the funds from PayPal Giving Fund within 15-45 days (90 days if the charity has not enrolled).*","Share back button":"Share back button","Open share modal":"Open share modal","Donate":"Donate","Sign in":"Sign in","Sign out":"Sign out","Donations you\'ve made":"Donations you\'ve made","Account settings":"Account settings","Your fundraisers":"Your fundraisers","Open navigation menu":"Open navigation menu","Close navigation menu":"Close navigation menu","My campaigns":"My campaigns","Close Modal":"Close Modal","Start":"Start","Don\'t have an account? ":"Don\'t have an account? ","Sign up":"Sign up","Enter the email address associated with your account, and we\'ll email you a link to reset your password":"Enter the email address associated with your account, and we\'ll email you a link to reset your password","Email address":"Email address","Request new password":"Request new password","Don\'t have an account?<1></1><2>Sign up</2>":"Don\'t have an account?<1></1><2>Sign up</2>","Forgot your password?":"Forgot your password?","Password":"Password","Sign in to GoFundMe":"Sign in to GoFundMe","Already have an account?<1></1><2>Sign in</2>":"Already have an account?<1></1><2>Sign in</2>","Please<1></1><2>sign in</2><3></3>to access your account.":"Please<1></1><2>sign in</2><3></3>to access your account.","First Name":"First Name","Last Name":"Last Name","Confirm email address":"Confirm email address","Set password":"Set password","We will never post without your permission":"We will never post without your permission","Continue with Facebook":"Continue with Facebook","or":"or","Use my email address":"Use my email address","You are donating to<1></1><2>PayPal Giving Fund</2><3></3>UK, a registered charity (No. 1110538), which will email you a receipt for your donation and claim Gift Aid where eligible.":"You are donating to<1></1><2>PayPal Giving Fund</2><3></3>UK, a registered charity (No. 1110538), which will email you a receipt for your donation and claim Gift Aid where eligible.","<0></0>*In very limited cases, a recommended charity may cease to meet PayPal Giving Fund\'s legal or other eligibility<2></2><3>requirements</3><4></4>. In such cases, PayPal Giving Fund will reassign the funds to a similar charity, and (wherever possible) seek a new recommendation from donors.":"<0></0>*In very limited cases, a recommended charity may cease to meet PayPal Giving Fund\'s legal or other eligibility<2></2><3>requirements</3><4></4>. In such cases, PayPal Giving Fund will reassign the funds to a similar charity, and (wherever possible) seek a new recommendation from donors.","The charity will typically receive the funds from PayPal Giving Fund within 15-45 days of your donation if the charity has enrolled (or 90 days if the charity has not yet enrolled). Unlike other platforms, 100% of any Gift Aid will go to the charity as well.":"The charity will typically receive the funds from PayPal Giving Fund within 15-45 days of your donation if the charity has enrolled (or 90 days if the charity has not yet enrolled). Unlike other platforms, 100% of any Gift Aid will go to the charity as well.","PayPal Giving Fund will grant your donation to {{charityName}} within 15-45 days (Or 90 days if the charity has not yet enrolled)*.":"PayPal Giving Fund will grant your donation to {{charityName}} within 15-45 days (Or 90 days if the charity has not yet enrolled)*.","*If, after reasonable efforts have been made, PayPal Giving Fund cannot grant the funds to this charity, they will contact you before reassigning the funds in accordance with<1></1><2>PayPal Giving Fund\'s Policies</2>.":"*If, after reasonable efforts have been made, PayPal Giving Fund cannot grant the funds to this charity, they will contact you before reassigning the funds in accordance with<1></1><2>PayPal Giving Fund\'s Policies</2>.","How non-profit fundraisers work":"How non-profit fundraisers work","Donations are typically 100% tax deductible in the US. Your donation is made to PayPal Giving Fund (a 501(c)(3) charitable organization) to benefit your chosen charity.":"Donations are typically 100% tax deductible in the US. Your donation is made to PayPal Giving Fund (a 501(c)(3) charitable organization) to benefit your chosen charity.","Fundraiser updates ({{totalUpdates}})":"Fundraiser updates ({{totalUpdates}})","Fundraiser updates":"Fundraiser updates","Close fundraiser updates modal":"Close fundraiser updates modal","Thanks for donating":"Thanks for donating","Boost this fundraiser":"Boost this fundraiser","Be the first to help":"Be the first to help","Your early support will go a long way and help inspire others to donate.":"Your early support will go a long way and help inspire others to donate.","Report fundraiser":"Report fundraiser","See top":"See top","Donations":"Donations","Contact Us - Answer Found":"Contact Us - Answer Found","Answer Found!":"Answer Found!","Thanks very much!":"Thanks very much!","If you ever need some extra help, the GoFundMe Team is standing by!":"If you ever need some extra help, the GoFundMe Team is standing by!","Return to Help Center":"Return to Help Center","Contact Us - Message Sent!":"Contact Us - Message Sent!","Message Sent":"Message Sent","Thank you for your patience":"Thank you for your patience","We\'re sorry, but that campaign cannot be found. Please check the link URL and try again.":"We\'re sorry, but that campaign cannot be found. Please check the link URL and try again.","Page Not Found":"Page Not Found","Home":"Home","Campaign Not Found":"Campaign Not Found","Search gofundme.com for":"Search gofundme.com for","Show your support by going to this link":"Show your support by going to this link","Pagination navigation":"Pagination navigation","Previous page":"Previous page","Previous":"Previous","Next page":"Next page","Next":"Next","Page {{page}} of {{nbPages}}":"Page {{page}} of {{nbPages}}","Search in progress":"Search in progress","Fundraisers for \\"{{query}}\\" in all locations":"Fundraisers for \\"{{query}}\\" in all locations","No results found for \\"{{query}}\\" in all locations":"No results found for \\"{{query}}\\" in all locations","Search results for {{- query}}":"Search results for {{- query}}","GoFundMe: {{- searchQuery}}":"GoFundMe: {{- searchQuery}}","The leader in online fundraising":"The leader in online fundraising","We\'re sorry. Something went wrong. Please wait one minute and try again.":"We\'re sorry. Something went wrong. Please wait one minute and try again.","Unknown Error":"Unknown Error","Join this list. <1>Donate now.</1>":"Join this list. <1>Donate now.</1>","Top":"Top","Donations ({{totalDonations}})":"Donations ({{totalDonations}})","Close all donations modal":"Close all donations modal","Close":"Close","<0>What is this? <1></1><2>Learn more</2></0>":"<0>What is this? <1></1><2>Learn more</2></0>","Large":"Large","Medium":"Medium","Small (Button only)":"Small (Button only)","Copy and paste the following embed code:":"Copy and paste the following embed code:","Copy HTML code":"Copy HTML code","Copied!":"Copied!","Something went wrong. Please select the code block to manually copy it.":"Something went wrong. Please select the code block to manually copy it.","Preview":"Preview","Select the button text":"Select the button text","Have you seen \\"{{- title}}\\"?":"Have you seen \\"{{- title}}\\"?","Hello \\n \\n I thought you might be interested in supporting this GoFundMe, {{- shareLink}}. \\n \\n Even a small donation could help {{- name}} reach their fundraising goal. And if you can\'t make a donation, it would be great if you could share the fundraiser to help spread the word. \\n \\n Thanks for taking a look!":"Hello \\n \\n I thought you might be interested in supporting this GoFundMe, {{- shareLink}}. \\n \\n Even a small donation could help {{- name}} reach their fundraising goal. And if you can\'t make a donation, it would be great if you could share the fundraiser to help spread the word. \\n \\n Thanks for taking a look!","Hi,\\n\\nI\'d really appreciate it if you would share or donate to this GoFundMe.\\n\\n*{{- fundTitle}}*\\n\\n{{- description}}\\n\\nRead more here {{- fundUrl}}\\n\\nForward this message to your contacts to help this campaign reach its goal!":"Hi,\\n\\nI\'d really appreciate it if you would share or donate to this GoFundMe.\\n\\n*{{- fundTitle}}*\\n\\n{{- description}}\\n\\nRead more here {{- fundUrl}}\\n\\nForward this message to your contacts to help this campaign reach its goal!","Hi, I\'d really appreciate it if you would share or donate to this GoFundMe, {{- shareLink}}":"Hi, I\'d really appreciate it if you would share or donate to this GoFundMe, {{- shareLink}}","Help by sharing":"Help by sharing","Fundraisers shared on social networks raise up to 5x more":"Fundraisers shared on social networks raise up to 5x more","Copy":"Copy","Copy link":"Copy link","Back":"Back","Top Donations":"Top Donations","See all donations":"See all donations","All":"All","Be a top donor for {{- beneOrOrganizerName}} with {{- averageTopDonation}} or more.":"Be a top donor for {{- beneOrOrganizerName}} with {{- averageTopDonation}} or more.","<0>Donating outside of GoFundMe</0><1>Donations on other platforms are not protected by the GoFundMe Guarantee. In the rare case that something isn’t right on GoFundMe, we work with you to determine if misuse occurred.<1></1><2>Learn more</2></1><2>Donate now</2>":"<0>Donating outside of GoFundMe</0><1>Donations on other platforms are not protected by the GoFundMe Guarantee. In the rare case that something isn’t right on GoFundMe, we work with you to determine if misuse occurred.<1></1><2>Learn more</2></1><2>Donate now</2>","Close modal":"Close modal","Suggestions":"Suggestions","Make a Beneficiary Claim":"Make a Beneficiary Claim","Make a Beneficiary Claim | GoFundMe Support":"Make a Beneficiary Claim | GoFundMe Support","Contact Us":"Contact Us","Make a Donor Claim":"Make a Donor Claim","Make a Donor Claim | GoFundMe Support":"Make a Donor Claim | GoFundMe Support","Report a Fundraiser":"Report a Fundraiser","Report a Fundraiser | GoFundMe Support":"Report a Fundraiser | GoFundMe Support","Press Contact Form":"Press Contact Form","Press Contact Form | GoFundMe Support":"Press Contact Form | GoFundMe Support","Send Message":"Send Message","Contact":"Contact","Write {{firstName}} a message":"Write {{firstName}} a message","Organizer":"Organizer","Cancel":"Cancel","2. Use your donation receipt to<1></1><2>edit your donation comment</2><3></3>or<5></5><6>change your name on a donation</6>.":"2. Use your donation receipt to<1></1><2>edit your donation comment</2><3></3>or<5></5><6>change your name on a donation</6>.","If you do not remember your GoFundMe password, please<1></1><2>click here to request a new password</2>.":"If you do not remember your GoFundMe password, please<1></1><2>click here to request a new password</2>.","If you received an<1></1><2>unexpected refund</2><3></3>for your donation it could be for any of the following reasons:":"If you received an<1></1><2>unexpected refund</2><3></3>for your donation it could be for any of the following reasons:","Edit My Comment":"Edit My Comment","Edit My Name":"Edit My Name","Get Donation Receipt":"Get Donation Receipt","Refund All Donations":"Refund All Donations","Update Donation Anonymity":"Update Donation Anonymity","We can help you with that! Confirm the email address you used to donate.":"We can help you with that! Confirm the email address you used to donate.","Editing the information on a donation is quick and easy, and can be done from your donation receipt or through your GoFundMe account.":"Editing the information on a donation is quick and easy, and can be done from your donation receipt or through your GoFundMe account.","Actions you can take on your own:":"Actions you can take on your own:","1. Request a new donation receipt by entering your donation email address in the field below.":"1. Request a new donation receipt by entering your donation email address in the field below.","We can help you with that! If you have a personal fundraiser, please enter the email address you used to create your fundraiser.":"We can help you with that! If you have a personal fundraiser, please enter the email address you used to create your fundraiser.","If you have a Certified Charity fundraiser, our Customer Happiness Team can help you with that! Please select an option below in \\"Still need help?\\" and include the link to the fundraiser you\'d like to refund.":"If you have a Certified Charity fundraiser, our Customer Happiness Team can help you with that! Please select an option below in \\"Still need help?\\" and include the link to the fundraiser you\'d like to refund.","Additional Information:":"Additional Information:","Organizer deactivated the fundraiser":"Organizer deactivated the fundraiser","Our payment processor wasn\'t able to verify the donation":"Our payment processor wasn\'t able to verify the donation","Organizer did not verify their account or withdraw funds within required deadlines":"Organizer did not verify their account or withdraw funds within required deadlines","The donation was charged back by the donor":"The donation was charged back by the donor","The donation was made by the organizer or beneficiary":"The donation was made by the organizer or beneficiary","Please visit the fundraiser to view any updates that the organizer might have posted in regards to refunds, click \'Contact\' beneath the organizer\'s name on their fundraiser to email them with any questions, or reach out to our team if you have questions on how you may be able to still support the cause.":"Please visit the fundraiser to view any updates that the organizer might have posted in regards to refunds, click \'Contact\' beneath the organizer\'s name on their fundraiser to email them with any questions, or reach out to our team if you have questions on how you may be able to still support the cause.","Help Center":"Help Center","Please read below":"Please read below","Your Email Address":"Your Email Address","My question was answered":"My question was answered","Still need help?":"Still need help?","Chat now":"Chat now","Chat":"Chat","Send email":"Send email","Donations paused":"Donations paused","Our team has contacted the organizer with a solution, and donations will resume once the issue is resolved.":"Our team has contacted the organizer with a solution, and donations will resume once the issue is resolved.","How can I help?":"How can I help?","Please reach out to the organizer and ask them to sign in to GoFundMe and check their account to resolve the issue.":"Please reach out to the organizer and ask them to sign in to GoFundMe and check their account to resolve the issue.","Something went wrong. We’re working on it, please try again later or<1></1><2>contact us</2>.":"Something went wrong. We’re working on it, please try again later or<1></1><2>contact us</2>.","To include a comment with your donation, you must add text and/or upload a photo.":"To include a comment with your donation, you must add text and/or upload a photo.","{{fileName}}: Please choose a jpeg, jpg, gif, or png file type, and ensure it is smaller than 2048 kb.":"{{fileName}}: Please choose a jpeg, jpg, gif, or png file type, and ensure it is smaller than 2048 kb.","{{fileName}}: Please try again later.":"{{fileName}}: Please try again later.","Show more Support":"Show more Support","Return to campaign":"Return to campaign","Back to previous page":"Back to previous page","Hello \\n \\n I just donated to this GoFundMe, {{- shareLink}}.  Would you be interested in supporting it too? \\n \\n Even a small donation could help {{- name}} reach their fundraising goal. And if you can\'t make a donation, it would be great if you could share the fundraiser to help spread the word. \\n \\n Thanks for taking a look!":"Hello \\n \\n I just donated to this GoFundMe, {{- shareLink}}.  Would you be interested in supporting it too? \\n \\n Even a small donation could help {{- name}} reach their fundraising goal. And if you can\'t make a donation, it would be great if you could share the fundraiser to help spread the word. \\n \\n Thanks for taking a look!","Hi, I’d really appreciate it if you would share or donate to this GoFundMe, {{- fundTitle}} {{- shareLink}}":"Hi, I’d really appreciate it if you would share or donate to this GoFundMe, {{- fundTitle}} {{- shareLink}}","Hi, I just donated to this GoFundMe and would appreciate it if you would share or donate too. {{- shareLink}}":"Hi, I just donated to this GoFundMe and would appreciate it if you would share or donate too. {{- shareLink}}","Something went wrong. Please select the link and manually copy.":"Something went wrong. Please select the link and manually copy.","Now help spread the word":"Now help spread the word","By sharing this fundraiser, you increase their chance of success by 5x.":"By sharing this fundraiser, you increase their chance of success by 5x.","Finished sharing?":"Finished sharing?","Sign up to post your comment":"Sign up to post your comment","Sign up to follow this fundraiser":"Sign up to follow this fundraiser","Fundraising team ({{count}})":"Fundraising team ({{count}})","Contact us | GoFundMe Support":"Contact us | GoFundMe Support","GoFundMe will always respond to your requests as quickly as possible.":"GoFundMe will always respond to your requests as quickly as possible.","Donor protection guarantee":"Donor protection guarantee","GoFundMe has the first and only guarantee in the industry.":"GoFundMe has the first and only guarantee in the industry.","Simple setup":"Simple setup","You can personalize and share your GoFundMe in just a few minutes.":"You can personalize and share your GoFundMe in just a few minutes.","0% platform fee":"0% platform fee","With a 0% platform fee, you get to keep even more of your money.":"With a 0% platform fee, you get to keep even more of your money.","Mobile app":"Mobile app","The GoFundMe app makes it easy to launch and manage your campaign on the go.":"The GoFundMe app makes it easy to launch and manage your campaign on the go.","Social reach":"Social reach","Harness the power of social media to spread your story and get more support.":"Harness the power of social media to spread your story and get more support.","24/7 expert advice":"24/7 expert advice","Our best in class Customer Happiness agents will answer your questions, day or night.":"Our best in class Customer Happiness agents will answer your questions, day or night.","Fundraisers":"Fundraisers","Discover":"Discover","Charity":"Charity","User name":"User name","What is crowdfunding?":"What is crowdfunding?","How it works":"How it works","Fundraising tips":"Fundraising tips","Plan your fundraiser":"Plan your fundraiser","Travel & Adventure":"Travel & Adventure","Medical, Illness & Healing":"Medical, Illness & Healing","Missions, Faith & Church":"Missions, Faith & Church","Non-Profits & Charities":"Non-Profits & Charities","Weddings & Honeymoons":"Weddings & Honeymoons","Other":"Other","Sports, Teams & Clubs":"Sports, Teams & Clubs","Education & Learning":"Education & Learning","Volunteer & Service":"Volunteer & Service","Competitions & Pageants":"Competitions & Pageants","Accidents & Emergencies":"Accidents & Emergencies","Dreams, Hopes & Wishes":"Dreams, Hopes & Wishes","Animals & Pets":"Animals & Pets","Environment":"Environment","Rent, Food & Monthly Bills":"Rent, Food & Monthly Bills","Birthday Pots":"Birthday Pots","Babies, Kids & Family":"Babies, Kids & Family","Business & Entrepreneurs":"Business & Entrepreneurs","Celebrations & Events":"Celebrations & Events","Community & Neighbors":"Community & Neighbors","Creative Arts, Music & Film":"Creative Arts, Music & Film","Funerals & Memorials":"Funerals & Memorials","#1 fundraising platform":"#1 fundraising platform","More people start fundraisers on GoFundMe than on any other platform.":"More people start fundraisers on GoFundMe than on any other platform.","Expert advice, 24/7":"Expert advice, 24/7","Contact us with your questions and we’ll answer, day or night.":"Contact us with your questions and we’ll answer, day or night.","Team member":"Team member","Sorry, no account found":"Sorry, no account found","Your message to {{coFirstName}} successfully sent.":"Your message to {{coFirstName}} successfully sent.","Your message to {{coFirstName}} failed to send. Please try again later.":"Your message to {{coFirstName}} failed to send. Please try again later.","[email redacted]":"[email redacted]","[phone redacted]":"[phone redacted]","Please enter your name.":"Please enter your name.","Please enter a shorter name.":"Please enter a shorter name.","Please enter your email address.":"Please enter your email address.","Please enter a shorter email address.":"Please enter a shorter email address.","Please confirm your email address.":"Please confirm your email address.","Emails do not match.":"Emails do not match.","Please complete the reCAPTCHA.":"Please complete the reCAPTCHA.","Please enter a subject line":"Please enter a subject line","Please enter your message":"Please enter your message","Please enter a longer message.":"Please enter a longer message.","Please enter a shorter message.":"Please enter a shorter message.","Please enter a valid phone number":"Please enter a valid phone number","Please enter a campaign URL":"Please enter a campaign URL","Please specify how you know the Campaign Organizer.":"Please specify how you know the Campaign Organizer.","Please specify a description.":"Please specify a description.","Please select an option.":"Please select an option.","Please enter a description.":"Please enter a description.","Please enter a longer description.":"Please enter a longer description.","Please enter your concerns.":"Please enter your concerns.","Please enter a publication name":"Please enter a publication name","Please log in":"Please log in","The email entered does not match your account\'s email":"The email entered does not match your account\'s email","Unexpected error":"Unexpected error","Please enter your name":"Please enter your name","Please enter your email address":"Please enter your email address","Please enter a valid email address.":"Please enter a valid email address.","Today":"Today","Yesterday":"Yesterday","[redacted]":"[redacted]","Please enter your password":"Please enter your password","Please enter your first name":"Please enter your first name","Please enter a shorter first name.":"Please enter a shorter first name.","Please enter your last name":"Please enter your last name","Please enter a shorter last name.":"Please enter a shorter last name.","Your email address does not match.":"Your email address does not match.","Please enter a password.":"Please enter a password.","Passwords must be at least twelve characters long.":"Passwords must be at least twelve characters long.","You have exceeded the maximum amount of characters.":"You have exceeded the maximum amount of characters.","Passwords must contain at least one number, symbol, uppercase letter, and lowercase letter.":"Passwords must contain at least one number, symbol, uppercase letter, and lowercase letter.","Please make a selection...":"Please make a selection...","Yes, I have contacted the Campaign Organizer":"Yes, I have contacted the Campaign Organizer","No, I have not contacted the Campaign Organizer":"No, I have not contacted the Campaign Organizer","The situation has been misrepresented.":"The situation has been misrepresented.","The funds were not used as stated on the campaign.":"The funds were not used as stated on the campaign.","The funds were never delivered to the intended recipient.":"The funds were never delivered to the intended recipient.","I did not authorize this donation.":"I did not authorize this donation.","I no longer wish to support this campaign.":"I no longer wish to support this campaign.","… {{- userName}} needs your support for {{- campaignTitle}}":"… {{- userName}} needs your support for {{- campaignTitle}}","{{- organizerFullName}} and {{- teamMemberFullName}} are organizing this fundraiser to benefit {{- beneficiaryFullName}}.":"{{- organizerFullName}} and {{- teamMemberFullName}} are organizing this fundraiser to benefit {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{- teamMemberFullName}} are organizing this fundraiser on behalf of {{- beneficiaryFullName}}.":"{{- organizerFullName}} and {{- teamMemberFullName}} are organizing this fundraiser on behalf of {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser to benefit {{- beneficiaryFullName}}.":"{{- organizerFullName}} and {{count}} other are organizing this fundraiser to benefit {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser to benefit {{- beneficiaryFullName}}.:_:plural":"{{- organizerFullName}} and {{count}} others are organizing this fundraiser to benefit {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser on behalf of {{- beneficiaryFullName}}.":"{{- organizerFullName}} and {{count}} other are organizing this fundraiser on behalf of {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser on behalf of {{- beneficiaryFullName}}.:_:plural":"{{- organizerFullName}} and {{count}} others are organizing this fundraiser on behalf of {{- beneficiaryFullName}}.","{{- organizerFullName}} and {{- teamMemberFullName}} are organizing this fundraiser.":"{{- organizerFullName}} and {{- teamMemberFullName}} are organizing this fundraiser.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser.":"{{- organizerFullName}} and {{count}} other are organizing this fundraiser.","{{- organizerFullName}} and {{count}} other are organizing this fundraiser.:_:plural":"{{- organizerFullName}} and {{count}} others are organizing this fundraiser.","{{- organizerFullName}} is organizing this fundraiser to benefit {{- beneficiaryFullName}}.":"{{- organizerFullName}} is organizing this fundraiser to benefit {{- beneficiaryFullName}}.","{{- organizerFullName}} is organizing this fundraiser on behalf of {{- beneficiaryFullName}}.":"{{- organizerFullName}} is organizing this fundraiser on behalf of {{- beneficiaryFullName}}.","{{- organizerFullName}} is organizing this fundraiser.":"{{- organizerFullName}} is organizing this fundraiser.","This team raised {{raisedAmountFormatted}} from {{count}} other donation.":"This team raised {{raisedAmountFormatted}} from {{count}} other donation.","This team raised {{raisedAmountFormatted}} from {{count}} other donation.:_:plural":"This team raised {{raisedAmountFormatted}} from {{count}} other donations.","Raised {{amount}} from {{count}} donation":"Raised {{amount}} from {{count}} donation","Raised {{amount}} from {{count}} donation:_:plural":"Raised {{amount}} from {{count}} donations","Donations are typically 100% tax deductible in the US.":"Donations are typically 100% tax deductible in the US.","Donations are typically tax deductible in Canada.":"Donations are typically tax deductible in Canada.","Donations are typically tax deductible in Australia.":"Donations are typically tax deductible in Australia.","Donations eligible for Gift Aid.":"Donations eligible for Gift Aid.","{{city}}, {{state}}":"{{city}}, {{state}}","Registered nonprofit":"Registered nonprofit","text":"text","Organizer and beneficiary":"Organizer and beneficiary","Fundraising team: {{- name}} ({{count}})":"Fundraising team: {{- name}} ({{count}})","Copy fundraiser link":"Copy fundraiser link","Share this fundraiser so it can raise up to 5x more.":"Share this fundraiser so it can raise up to 5x more.","Build momentum for this fundraiser.":"Build momentum for this fundraiser.","View donation summary":"View donation summary","Check out your donation details.":"Check out your donation details.","Add a comment":"Add a comment","Add a supportive message with your donation.":"Add a supportive message with your donation.","Add a profile photo":"Add a profile photo","Looks good. Your profile photo has been added.":"Looks good. Your profile photo has been added.","Let friends and the GoFundMe community know it’s you!":"Let friends and the GoFundMe community know it’s you!","Share on Facebook":"Share on Facebook","Tell your Facebook friends about this fundraiser.":"Tell your Facebook friends about this fundraiser.","Join fundraising team":"Join fundraising team","Help {{organizerName}} raise more funds.":"Help {{organizerName}} raise more funds.","Thank donors":"Thank donors","Show appreciation and get more support. Ask donors to share this fundraiser.":"Show appreciation and get more support. Ask donors to share this fundraiser.","Add a donate button":"Add a donate button","Reach your community on a website or blog.":"Reach your community on a website or blog.","Donated {{amount}}":"Donated {{amount}}","Hi, I’d really appreciate it if you would share or donate to this GoFundMe, {{fundTitle}} {{- shareLink}}":"Hi, I’d really appreciate it if you would share or donate to this GoFundMe, {{fundTitle}} {{- shareLink}}","Captcha challenge failed. Please try again.":"Captcha challenge failed. Please try again.","You exceeded the maximum number of tries. Please try again later.":"You exceeded the maximum number of tries. Please try again later.","An error occurred. Please try again later.":"An error occurred. Please try again later.","Sign in to follow this fundraiser":"Sign in to follow this fundraiser","Sign in to post your comment":"Sign in to post your comment","Reset instructions sent to {{email}}":"Reset instructions sent to {{email}}","Please check your email & password or please sign in with your Facebook account.":"Please check your email & password or please sign in with your Facebook account.","Please check your email & password":"Please check your email & password"}}}')
    },
    GSDO: function(e, a, n) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.setLocaleCookie = void 0;
        var o = n("kLb9"),
            t = "https://api." + n("8QVh").getDomain() + "/ssr/v1";
        a.setLocaleCookie = function(e) {
            var a = t + "/visitor/locale",
                n = {
                    locale: e
                };
            return o.HttpClient.post(a, n, {
                withCredentials: !0
            })
        }
    },
    GTVY: function(e, a, n) {
        "use strict";
        var o = this && this.__createBinding || (Object.create ? function(e, a, n, o) {
                void 0 === o && (o = n),
                Object.defineProperty(e, o, {
                    enumerable: !0,
                    get: function() {
                        return a[n]
                    }
                })
            } : function(e, a, n, o) {
                void 0 === o && (o = n),
                e[o] = a[n]
            }),
            t = this && this.__exportStar || function(e, a) {
                for (var n in e)
                    "default" === n || a.hasOwnProperty(n) || o(a, e, n)
            };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(n("NlNF"), a)
    },
    Gt3u: function(e, a, n) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.getVimeoThumbnail = void 0;
        var o = n("kLb9");
        a.getVimeoThumbnail = function(e) {
            var a = e.mediaId;
            return o.HttpClient.get("https://vimeo.com/api/v2/video/" + a + ".json", {
                withCredentials: !1
            })
        }
    },
    IsI7: function(e, a, n) {
        "use strict";
        var o;
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        function(e) {
            e.SET_GLOBALS = "SET_GLOBALS"
        }(o || (o = {})),
        a.default = o
    },
    JNAL: function(e, a, n) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.redactURLs = void 0;
        var o = n("YgTb");
        a.redactURLs = function(e) {
            return void 0 === e && (e = ""), e.replace(/\b((?:https?:(?:\/{1,3}|[a-z0-9%])|[a-z0-9.-]+[.](?:com|net|org|edu|gov|mil|aero|asia|biz|cat|coop|info|int|jobs|mobi|museum|name|post|pro|tel|travel|xxx|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cs|cu|cv|cx|cy|cz|dd|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|Ja|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw)\/)(?:[^\s()<>{}[\]]+|\([^\s()]*?\([^\s()]+\)[^\s()]*?\)|\([^\s]+?\))+(?:\([^\s()]*?\([^\s()]+\)[^\s()]*?\)|\([^\s]+?\)|[^\s`!()[\]{};:'".,<>?«»“”‘’])|(?:[a-z0-9]+(?:[.-][a-z0-9]+)*[.](?:com|net|org|edu|gov|mil|aero|asia|biz|cat|coop|info|int|jobs|mobi|museum|name|post|pro|tel|travel|xxx|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cs|cu|cv|cx|cy|cz|dd|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|Ja|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw)\b\/?(?!@)))/gi, o.t("[redacted]"))
        }
    },
    K0mF: function(e, a, n) {
        "use strict";
        var o = this && this.__createBinding || (Object.create ? function(e, a, n, o) {
                void 0 === o && (o = n),
                Object.defineProperty(e, o, {
                    enumerable: !0,
                    get: function() {
                        return a[n]
                    }
                })
            } : function(e, a, n, o) {
                void 0 === o && (o = n),
                e[o] = a[n]
            }),
            t = this && this.__exportStar || function(e, a) {
                for (var n in e)
                    "default" === n || a.hasOwnProperty(n) || o(a, e, n)
            };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(n("zMi6"), a)
    },
    KcbS: function(e, a, n) {
        "use strict";
        var o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.rootReducer = void 0;
        var t = o(n("2PPe")),
            r = o(n("A86q")),
            i = o(n("PIHm")),
            s = o(n("BoLd")),
            u = o(n("qUSl")),
            d = o(n("c5bu")),
            l = o(n("zbJQ")),
            c = o(n("3RiV")),
            m = o(n("XuCa")),
            p = o(n("zeWB")),
            h = n("ANjH"),
            f = n("wQmL");
        a.rootReducer = h.combineReducers({
            auth: t.default,
            bigweb: r.default,
            co: i.default,
            facebook: s.default,
            feed: u.default,
            form: f.reducer,
            meta: d.default,
            optimizely: l.default,
            template: c.default,
            ui: m.default,
            urlShortner: p.default
        })
    },
    Le2r: function(e, a, n) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var o = n("fXpK");
        Object.defineProperty(a, "Cookies", {
            enumerable: !0,
            get: function() {
                return o.default
            }
        })
    },
    Llzs: function(e, a, n) {
        "use strict";
        var o,
            t,
            r,
            i,
            s,
            u,
            d,
            l,
            c,
            m = this && this.__assign || function() {
                return (m = Object.assign || function(e) {
                    for (var a, n = 1, o = arguments.length; n < o; n++)
                        for (var t in a = arguments[n])
                            Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
                    return e
                }).apply(this, arguments)
            },
            p = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.initialState = void 0;
        var h = p(n("/EQP")),
            f = n("o6hd"),
            g = p(n("V/h/")),
            y = {
                error: !1,
                initialized: !1,
                loading: !1
            };
        a.initialState = {
            shortenedShareUtmUrls: (o = {}, o[f.UtmKeys.SMS_ANDROID_SHARESHEET] = (t = {}, t[f.UtmFromKeys.CAMPAIGN_PAGE] = y, t[f.UtmFromKeys.POSTDONATE_MODAL] = y, t), o[f.UtmKeys.SMS_SHARESHEET] = (r = {}, r[f.UtmFromKeys.CAMPAIGN_PAGE] = y, r[f.UtmFromKeys.POSTDONATE_MODAL] = y, r), o[f.UtmKeys.EMAIL_ANDROID_SHARESHEET] = (i = {}, i[f.UtmFromKeys.CAMPAIGN_PAGE] = y, i[f.UtmFromKeys.POSTDONATE_MODAL] = y, i), o[f.UtmKeys.EMAIL_SHARESHEET] = (s = {}, s[f.UtmFromKeys.CAMPAIGN_PAGE] = y, s[f.UtmFromKeys.POSTDONATE_MODAL] = y, s), o[f.UtmKeys.PRINT_POSTER] = (u = {}, u[f.UtmFromKeys.CAMPAIGN_PAGE] = y, u[f.UtmFromKeys.POSTDONATE_MODAL] = y, u), o[f.UtmKeys.COPY_LINK_ALL] = (d = {}, d[f.UtmFromKeys.CAMPAIGN_PAGE] = y, d[f.UtmFromKeys.POSTDONATE_MODAL] = y, d), o[f.UtmKeys.TWITTER_SHARE_SHARESHEET] = (l = {}, l[f.UtmFromKeys.CAMPAIGN_PAGE] = y, l[f.UtmFromKeys.POSTDONATE_MODAL] = y, l), o[f.UtmKeys.WHATSAPP_SHARESHEET] = (c = {}, c[f.UtmFromKeys.CAMPAIGN_PAGE] = y, c[f.UtmFromKeys.POSTDONATE_MODAL] = y, c), o)
        };
        a.default = g.default((function(e, n) {
            var o,
                t,
                r,
                i;
            switch (void 0 === e && (e = a.initialState), n.type) {
            case h.default.GET_SHORTEN_SHARE_UTM_URL_SUCCESS:
                return m(m({}, e), {
                    shortenedShareUtmUrls: m(m({}, e.shortenedShareUtmUrls), (o = {}, o[n.payload.shareType] = m(m({}, e.shortenedShareUtmUrls[n.payload.shareType]), (t = {}, t[n.payload.shareLocation] = {
                        error: !1,
                        initialized: !0,
                        loading: !1
                    }, t)), o))
                });
            case h.default.GET_SHORTEN_SHARE_UTM_URL_FAIULRE:
                return m(m({}, e), {
                    shortenedShareUtmUrls: m(m({}, e.shortenedShareUtmUrls), (r = {}, r[n.payload.shareType] = m(m({}, e.shortenedShareUtmUrls[n.payload.shareType]), (i = {}, i[n.payload.shareLocation] = {
                        error: !0,
                        initialized: !0,
                        loading: !1
                    }, i)), r))
                });
            default:
                return e
            }
        }), a.initialState)
    },
    MkYk: function(e, a, n) {
        "use strict";
        var o = this && this.__read || function(e, a) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n)
                    return e;
                var o,
                    t,
                    r = n.call(e),
                    i = [];
                try {
                    for (; (void 0 === a || a-- > 0) && !(o = r.next()).done;)
                        i.push(o.value)
                } catch (s) {
                    t = {
                        error: s
                    }
                } finally {
                    try {
                        o && !o.done && (n = r.return) && n.call(r)
                    } finally {
                        if (t)
                            throw t.error
                    }
                }
                return i
            },
            t = this && this.__spread || function() {
                for (var e = [], a = 0; a < arguments.length; a++)
                    e = e.concat(o(arguments[a]));
                return e
            };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.parents = a.findByPrefix = void 0,
        a.findByPrefix = function(e, a) {
            return Object.values(e).find((function(e) {
                return !!e.prefix && e.prefix.toLocaleLowerCase() === a.toLocaleLowerCase()
            }))
        },
        a.parents = function(e, a) {
            for (var n = [], o = a; o.id !== o.parentId;)
                n = t([o.id], n),
                o = e[o.parentId];
            return n = t([o.id], n)
        }
    },
    N25J: function(e, a, n) {
        "use strict";
        var o = this && this.__awaiter || function(e, a, n, o) {
                return new (n || (n = Promise))((function(t, r) {
                    function i(e) {
                        try {
                            u(o.next(e))
                        } catch (a) {
                            r(a)
                        }
                    }
                    function s(e) {
                        try {
                            u(o.throw(e))
                        } catch (a) {
                            r(a)
                        }
                    }
                    function u(e) {
                        var a;
                        e.done ? t(e.value) : (a = e.value, a instanceof n ? a : new n((function(e) {
                            e(a)
                        }))).then(i, s)
                    }
                    u((o = o.apply(e, a || [])).next())
                }))
            },
            t = this && this.__generator || function(e, a) {
                var n,
                    o,
                    t,
                    r,
                    i = {
                        label: 0,
                        sent: function() {
                            if (1 & t[0])
                                throw t[1];
                            return t[1]
                        },
                        trys: [],
                        ops: []
                    };
                return r = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;
                function s(r) {
                    return function(s) {
                        return function(r) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; i;)
                                try {
                                    if (n = 1, o && (t = 2 & r[0] ? o.return : r[0] ? o.throw || ((t = o.return) && t.call(o), 0) : o.next) && !(t = t.call(o, r[1])).done)
                                        return t;
                                    switch (o = 0, t && (r = [2 & r[0], t.value]), r[0]) {
                                    case 0:
                                    case 1:
                                        t = r;
                                        break;
                                    case 4:
                                        return i.label++, {
                                            value: r[1],
                                            done: !1
                                        };
                                    case 5:
                                        i.label++,
                                        o = r[1],
                                        r = [0];
                                        continue;
                                    case 7:
                                        r = i.ops.pop(),
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(t = i.trys, (t = t.length > 0 && t[t.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === r[0] && (!t || r[1] > t[0] && r[1] < t[3])) {
                                            i.label = r[1];
                                            break
                                        }
                                        if (6 === r[0] && i.label < t[1]) {
                                            i.label = t[1],
                                            t = r;
                                            break
                                        }
                                        if (t && i.label < t[2]) {
                                            i.label = t[2],
                                            i.ops.push(r);
                                            break
                                        }
                                        t[2] && i.ops.pop(),
                                        i.trys.pop();
                                        continue
                                    }
                                    r = a.call(e, i)
                                } catch (s) {
                                    r = [6, s],
                                    o = 0
                                } finally {
                                    n = t = 0
                                }
                            if (5 & r[0])
                                throw r[1];
                            return {
                                value: r[0] ? r[1] : void 0,
                                done: !0
                            }
                        }([r, s])
                    }
                }
            };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.reset = a.execute = a.init = void 0;
        var r = n("K9qA");
        function i(e) {
            window.grecaptchaonload = function(a) {
                return e ? e(a) : void 0
            };
            var a = document.createElement("script");
            a.id = "grecaptcha-js",
            a.src = "https://www.google.com/recaptcha/api.js",
            a.async = !0,
            a.defer = !0,
            document.body.appendChild(a)
        }
        a.init = function(e) {
            if (r.domHelper.canUseDom() && r.canUseWindow()) {
                var a = document.getElementById("grecaptcha-js");
                a ? (document.body.removeChild(a), i(e)) : i(e)
            }
        },
        a.execute = function() {
            return o(this, void 0, void 0, (function() {
                return t(this, (function(e) {
                    return r.canUseWindow() && window.grecaptcha ? (window.grecaptcha.execute(), [2, 200]) : [2, 400]
                }))
            }))
        },
        a.reset = function() {
            return o(this, void 0, void 0, (function() {
                return t(this, (function(e) {
                    return r.canUseWindow() && window.grecaptcha ? (window.grecaptcha.reset(), [2, 200]) : [2, 400]
                }))
            }))
        }
    },
    NlNF: function(e, a, n) {
        "use strict";
        var o = this && this.__assign || function() {
            return (o = Object.assign || function(e) {
                for (var a, n = 1, o = arguments.length; n < o; n++)
                    for (var t in a = arguments[n])
                        Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
                return e
            }).apply(this, arguments)
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.getCategory = void 0;
        var t = n("p1Kg"),
            r = n("YgTb");
        a.getCategory = function(e) {
            var a = t.getCampaignCategoriesText(),
                n = a[e.toString()] ? a[e.toString()] : a[15];
            return o(o({}, n), {
                name: r.t(n.name)
            })
        }
    },
    PIHm: function(e, a, n) {
        "use strict";
        var o = this && this.__assign || function() {
                return (o = Object.assign || function(e) {
                    for (var a, n = 1, o = arguments.length; n < o; n++)
                        for (var t in a = arguments[n])
                            Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
                    return e
                }).apply(this, arguments)
            },
            t = this && this.__read || function(e, a) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n)
                    return e;
                var o,
                    t,
                    r = n.call(e),
                    i = [];
                try {
                    for (; (void 0 === a || a-- > 0) && !(o = r.next()).done;)
                        i.push(o.value)
                } catch (s) {
                    t = {
                        error: s
                    }
                } finally {
                    try {
                        o && !o.done && (n = r.return) && n.call(r)
                    } finally {
                        if (t)
                            throw t.error
                    }
                }
                return i
            },
            r = this && this.__spread || function() {
                for (var e = [], a = 0; a < arguments.length; a++)
                    e = e.concat(t(arguments[a]));
                return e
            },
            i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.initialState = void 0;
        var s = i(n("V/h/")),
            u = i(n("EcZt"));
        a.initialState = {
            createComment: {
                media: []
            },
            donationReceipt: {
                amount: 0,
                currencyCode: "",
                donor: {
                    email: "",
                    firstName: "",
                    isAnonymous: !0,
                    name: ""
                },
                signedDonationId: ""
            },
            postDonateCreateComment: {
                error: !1,
                loading: !1,
                media: [],
                mediaError: []
            },
            teamEmailInvites: {
                error: !1,
                field_errors: {},
                invitation_count: 0,
                loading: !1
            },
            teamInvitations: {
                magicLink: void 0
            }
        };
        a.default = s.default((function(e, a) {
            switch (a.type) {
            case u.default.UPLOAD_MEDIA_POSTDONATE_COMMENT_SUCCESS:
                return o(o({}, e), {
                    postDonateCreateComment: o(o({}, e.postDonateCreateComment), {
                        media: r(e.postDonateCreateComment.media, [a.payload]),
                        mediaError: []
                    })
                });
            case u.default.UPLOAD_MEDIA_POSTDONATE_COMMENT_FAILURE:
                return o(o({}, e), {
                    postDonateCreateComment: o(o({}, e.postDonateCreateComment), {
                        mediaError: e.postDonateCreateComment.mediaError.concat(a.payload)
                    })
                });
            case u.default.UPLOAD_MEDIA_POSTDONATE_COMMENT_IN_PROGRESS:
                return o(o({}, e), {
                    postDonateCreateComment: o(o({}, e.postDonateCreateComment), {
                        error: !1,
                        mediaError: []
                    })
                });
            case u.default.UPLOAD_MEDIA_POSTDONATE_COMMENT_DELETE:
                var n = [];
                return e.postDonateCreateComment.media.forEach((function(e) {
                    e.url !== a.payload.url && n.push(e)
                })), o(o({}, e), {
                    postDonateCreateComment: o(o({}, e.postDonateCreateComment), {
                        media: n
                    })
                });
            case u.default.CREATE_COMMENT_IN_PROGRESS:
                return o(o({}, e), {
                    postDonateCreateComment: o(o({}, e.postDonateCreateComment), {
                        error: !1,
                        loading: !0,
                        mediaError: []
                    })
                });
            case u.default.CREATE_COMMENT_SUCCESS:
                return o(o({}, e), {
                    postDonateCreateComment: o(o({}, e.postDonateCreateComment), {
                        error: !1,
                        loading: !1,
                        media: [],
                        mediaError: []
                    })
                });
            case u.default.CREATE_COMMENT_FAILURE:
                return o(o({}, e), {
                    postDonateCreateComment: o(o({}, e.postDonateCreateComment), {
                        error: a.payload.data.error,
                        loading: !1,
                        mediaError: []
                    })
                });
            case u.default.GET_RECEIPT_FROM_ENCRYPTED_DONATION_ID:
                return o(o({}, e), {
                    donationReceipt: o(o({}, e.donationReceipt), {
                        signedDonationId: decodeURIComponent(a.payload)
                    })
                });
            case u.default.GET_DONATION_RECEIPT_SUCCESS:
                var t = a.payload,
                    i = t.amount,
                    s = t.currency_code,
                    d = t.donor;
                return o(o({}, e), {
                    donationReceipt: o(o({}, e.donationReceipt), {
                        amount: i,
                        currencyCode: s,
                        donor: {
                            email: d.email,
                            firstName: d.first_name,
                            isAnonymous: d.is_anonymous,
                            name: d.name
                        }
                    })
                });
            default:
                return e
            }
        }), a.initialState)
    },
    PTAX: function(e, a, n) {
        "use strict";
        var o;
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        function(e) {
            e.GET_VIMEO_THUMBNAIL_FAILURE = "GET_VIMEO_THUMBNAIL_FAILURE",
            e.GET_VIMEO_THUMBNAIL_SUCCESS = "GET_VIMEO_THUMBNAIL_SUCCESS",
            e.GET_VIMEO_THUMBNAIL_IN_PROGRESS = "GET_VIMEO_THUMBNAIL_IN_PROGRESS"
        }(o || (o = {})),
        a.default = o
    },
    QtxA: function(e, a, n) {
        "use strict";
        var o = this && this.__createBinding || (Object.create ? function(e, a, n, o) {
                void 0 === o && (o = n),
                Object.defineProperty(e, o, {
                    enumerable: !0,
                    get: function() {
                        return a[n]
                    }
                })
            } : function(e, a, n, o) {
                void 0 === o && (o = n),
                e[o] = a[n]
            }),
            t = this && this.__exportStar || function(e, a) {
                for (var n in e)
                    "default" === n || a.hasOwnProperty(n) || o(a, e, n)
            };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(n("//zD"), a)
    },
    SB8y: function(e, a, n) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.toImage = void 0;
        var o = n("Iuk2");
        a.toImage = function(e, a) {
            return {
                createdAt: o.calendar(e.created_at, a),
                mediaType: e.media_type,
                scaled: e.scaled ? e.scaled : {
                    "1x1-960": e.url,
                    "3x2-1200": e.url,
                    "3x2-640": e.url,
                    "4x3-1200": e.url
                },
                url: e.url
            }
        }
    },
    "SKg/": function(e, a, n) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.makeIsCommentsInitialized = a.makeGetAreFeedCountsLoading = a.makeGetFeedCampaignStatusCode = a.makeGetIsIdentityInitialized = a.makeGetPhotosMeta = a.makeDonationsHasNext = a.makeUpdatesHasNext = a.makeGetIsCommentsInitialized = a.makeCommentsHasNext = a.makeHasCampaignError = a.makeIsCampaignLoading = a.makeIsCampaignInitialized = a.getFeedMetaState = void 0;
        var o = n("G4qV"),
            t = function(e) {
                return e.meta.feed
            };
        a.getFeedMetaState = t;
        a.makeIsCampaignInitialized = function() {
            return o.createSelector([t], (function(e) {
                return e.campaign.initialized
            }))
        };
        a.makeIsCampaignLoading = function() {
            return o.createSelector([t], (function(e) {
                return e.campaign.loading
            }))
        };
        a.makeHasCampaignError = function() {
            return o.createSelector([t], (function(e) {
                return !!e.campaign.error
            }))
        };
        a.makeCommentsHasNext = function() {
            return o.createSelector([t], (function(e) {
                return e.comments.has_next
            }))
        };
        a.makeGetIsCommentsInitialized = function() {
            return o.createSelector([t], (function(e) {
                return e.comments.initialized
            }))
        };
        a.makeUpdatesHasNext = function() {
            return o.createSelector([t], (function(e) {
                return e.updates.has_next
            }))
        };
        a.makeDonationsHasNext = function() {
            return o.createSelector([t], (function(e) {
                return e.donations.has_next
            }))
        };
        a.makeGetPhotosMeta = function() {
            return o.createSelector([t], (function(e) {
                return e.photos
            }))
        };
        a.makeGetIsIdentityInitialized = function() {
            return o.createSelector([t], (function(e) {
                return e.identity.initialized
            }))
        };
        a.makeGetFeedCampaignStatusCode = function() {
            return o.createSelector([t], (function(e) {
                return e.campaign.statusCode
            }))
        };
        a.makeGetAreFeedCountsLoading = function() {
            return o.createSelector([t], (function(e) {
                return e.counts.loading
            }))
        };
        a.makeIsCommentsInitialized = function() {
            return o.createSelector([t], (function(e) {
                return e.comments.initialized
            }))
        }
    },
    SWl0: function(e, a, n) {
        "use strict";
        var o = this && this.__generator || function(e, a) {
                var n,
                    o,
                    t,
                    r,
                    i = {
                        label: 0,
                        sent: function() {
                            if (1 & t[0])
                                throw t[1];
                            return t[1]
                        },
                        trys: [],
                        ops: []
                    };
                return r = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;
                function s(r) {
                    return function(s) {
                        return function(r) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; i;)
                                try {
                                    if (n = 1, o && (t = 2 & r[0] ? o.return : r[0] ? o.throw || ((t = o.return) && t.call(o), 0) : o.next) && !(t = t.call(o, r[1])).done)
                                        return t;
                                    switch (o = 0, t && (r = [2 & r[0], t.value]), r[0]) {
                                    case 0:
                                    case 1:
                                        t = r;
                                        break;
                                    case 4:
                                        return i.label++, {
                                            value: r[1],
                                            done: !1
                                        };
                                    case 5:
                                        i.label++,
                                        o = r[1],
                                        r = [0];
                                        continue;
                                    case 7:
                                        r = i.ops.pop(),
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(t = i.trys, (t = t.length > 0 && t[t.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === r[0] && (!t || r[1] > t[0] && r[1] < t[3])) {
                                            i.label = r[1];
                                            break
                                        }
                                        if (6 === r[0] && i.label < t[1]) {
                                            i.label = t[1],
                                            t = r;
                                            break
                                        }
                                        if (t && i.label < t[2]) {
                                            i.label = t[2],
                                            i.ops.push(r);
                                            break
                                        }
                                        t[2] && i.ops.pop(),
                                        i.trys.pop();
                                        continue
                                    }
                                    r = a.call(e, i)
                                } catch (s) {
                                    r = [6, s],
                                    o = 0
                                } finally {
                                    n = t = 0
                                }
                            if (5 & r[0])
                                throw r[1];
                            return {
                                value: r[0] ? r[1] : void 0,
                                done: !0
                            }
                        }([r, s])
                    }
                }
            },
            t = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.workGetReCaptchaToken = a.workValidateReCaptcha = a.workGetCaptcha = a.workSignOut = a.workSignInEmailSubmit = a.workSignInFacebookSubmit = void 0;
        var r = t(n("p48P")),
            i = n("D9k4"),
            s = n("5rFJ"),
            u = t(n("1U1D")),
            d = n("+Ded");
        function l(e) {
            var a,
                n,
                t;
            return o(this, (function(o) {
                switch (o.label) {
                case 0:
                    return o.trys.push([0, 3, , 7]), [4, s.call(i.signInEmail, e.payload)];
                case 1:
                    return a = o.sent(), n = a.data, 0 !== n.user_id && d.trackEvents.push({
                        completionType: "email",
                        type: "cp_user_signin_success_callback"
                    }), [4, s.put({
                        payload: n,
                        type: r.default.SIGN_IN_EMAIL_SUCCESS
                    })];
                case 2:
                    return o.sent(), e.onSuccess && e.onSuccess(n), [3, 7];
                case 3:
                    return t = o.sent(), [4, s.put({
                        payload: t.response,
                        type: r.default.SIGN_IN_EMAIL_FAILURE
                    })];
                case 4:
                    return o.sent(), t.response.headers && t.response.headers["x-captcha-required"] && "true" === t.response.headers["x-captcha-required"] ? [4, s.put({
                        type: r.default.SIGN_IN_CAPTCHA_REQUIRED
                    })] : [3, 6];
                case 5:
                    o.sent(),
                    o.label = 6;
                case 6:
                    return e.onFailure && e.onFailure(t.response.data), [3, 7];
                case 7:
                    return [2]
                }
            }))
        }
        function c(e) {
            var a,
                n,
                t;
            return o(this, (function(o) {
                switch (o.label) {
                case 0:
                    return o.trys.push([0, 3, , 5]), [4, s.call(i.signInFacebook, e.payload)];
                case 1:
                    return a = o.sent(), n = a.data, 0 !== n.user_id && d.trackEvents.push({
                        completionType: "fb",
                        type: "cp_user_signin_success_callback"
                    }), [4, s.put({
                        payload: n,
                        type: r.default.SIGN_IN_FACEBOOK_SUCCESS
                    })];
                case 2:
                    return o.sent(), e.onSuccess && e.onSuccess(n), [3, 5];
                case 3:
                    return t = o.sent(), [4, s.put({
                        payload: t.response.data,
                        type: r.default.SIGN_IN_FACEBOOK_FAILURE
                    })];
                case 4:
                    return o.sent(), e.onFailure && e.onFailure(t.response.data), [3, 5];
                case 5:
                    return [2]
                }
            }))
        }
        function m(e) {
            var a;
            return o(this, (function(e) {
                switch (e.label) {
                case 0:
                    return e.trys.push([0, 3, , 5]), [4, s.call(i.signOut)];
                case 1:
                    return e.sent(), [4, s.put({
                        type: r.default.SIGN_OUT_SUCCESS
                    })];
                case 2:
                    return e.sent(), [3, 5];
                case 3:
                    return a = e.sent(), [4, s.put({
                        payload: a.response.data,
                        type: r.default.SIGN_OUT_FAILURE
                    })];
                case 4:
                    return e.sent(), [3, 5];
                case 5:
                    return [2]
                }
            }))
        }
        function p(e) {
            var a,
                n,
                t;
            return o(this, (function(e) {
                switch (e.label) {
                case 0:
                    return e.trys.push([0, 5, , 7]), [4, s.call(i.getCaptcha)];
                case 1:
                    return a = e.sent(), n = a.data, t = n, [4, s.put({
                        payload: t,
                        type: r.default.GET_CAPTCHA_SUCCESS
                    })];
                case 2:
                    return e.sent(), t.captchaEnabled && 0 === t.captchaMaxAttempt ? [4, s.put({
                        type: r.default.SIGN_IN_CAPTCHA_REQUIRED
                    })] : [3, 4];
                case 3:
                    e.sent(),
                    e.label = 4;
                case 4:
                    return [3, 7];
                case 5:
                    return e.sent(), [4, s.put({
                        type: r.default.GET_CAPTCHA_FAILURE
                    })];
                case 6:
                    return e.sent(), [3, 7];
                case 7:
                    return [2]
                }
            }))
        }
        function h(e) {
            var a;
            return o(this, (function(e) {
                switch (e.label) {
                case 0:
                    return e.trys.push([0, 10, , 12]), [4, s.call(u.default.reset)];
                case 1:
                    return 200 !== e.sent() ? [3, 7] : [4, s.call(u.default.execute)];
                case 2:
                    return 200 !== e.sent() ? [3, 4] : [4, s.put({
                        type: r.default.VALIDATE_CAPTCHA_SUCCESS
                    })];
                case 3:
                    return e.sent(), [3, 6];
                case 4:
                    return [4, s.put({
                        payload: {
                            code: 400,
                            message: "Unable to execute Google reCAPTCHA challenge."
                        },
                        type: r.default.VALIDATE_CAPTCHA_FAILURE
                    })];
                case 5:
                    e.sent(),
                    e.label = 6;
                case 6:
                    return [3, 9];
                case 7:
                    return [4, s.put({
                        payload: {
                            code: 400,
                            message: "Unable to reset Google reCAPTCHA challenge."
                        },
                        type: r.default.VALIDATE_CAPTCHA_FAILURE
                    })];
                case 8:
                    e.sent(),
                    e.label = 9;
                case 9:
                    return [3, 12];
                case 10:
                    return a = e.sent(), [4, s.put({
                        payload: {
                            error: a
                        },
                        type: r.default.VALIDATE_CAPTCHA_FAILURE
                    })];
                case 11:
                    return e.sent(), [3, 12];
                case 12:
                    return [2]
                }
            }))
        }
        function f(e) {
            return o(this, (function(a) {
                switch (a.label) {
                case 0:
                    return a.trys.push([0, 2, , 4]), [4, s.put({
                        payload: e.payload,
                        type: r.default.RECAPTCHA_TOKEN_SUCCESS
                    })];
                case 1:
                    return a.sent(), [3, 4];
                case 2:
                    return a.sent(), [4, s.put({
                        payload: {
                            code: 400,
                            message: "Google reCAPTCHA token error."
                        },
                        type: r.default.RECAPTCHA_TOKEN_FAILURE
                    })];
                case 3:
                    return a.sent(), [3, 4];
                case 4:
                    return [2]
                }
            }))
        }
        function g() {
            return o(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, s.takeEvery(r.default.SIGN_IN_EMAIL_IN_PROGRESS, l)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        function y() {
            return o(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, s.takeEvery(r.default.SIGN_IN_FACEBOOK_IN_PROGRESS, c)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        function v() {
            return o(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, s.takeEvery(r.default.SIGN_OUT_IN_PROGRESS, m)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        function b() {
            return o(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, s.takeEvery(r.default.GET_CAPTCHA_IN_PROGRESS, p)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        function S() {
            return o(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, s.takeEvery(r.default.VALIDATE_CAPTCHA_IN_PROGRESS, h)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        function w() {
            return o(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, s.takeEvery(r.default.RECAPTCHA_TOKEN_IN_PROGRESS, f)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        a.workSignInEmailSubmit = l,
        a.workSignInFacebookSubmit = c,
        a.workSignOut = m,
        a.workGetCaptcha = p,
        a.workValidateReCaptcha = h,
        a.workGetReCaptchaToken = f,
        a.default = function() {
            return o(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, s.all([g(), y(), v(), b(), S(), w()])];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
    },
    U06n: function(e, a, n) {
        "use strict";
        var o = this && this.__assign || function() {
            return (o = Object.assign || function(e) {
                for (var a, n = 1, o = arguments.length; n < o; n++)
                    for (var t in a = arguments[n])
                        Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
                return e
            }).apply(this, arguments)
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.getCheckoutIdsOfEmptyDonationId = a.updateDonation = a.storeDonation = a.getLatestDonation = a.getLastDonorDetails = a.getDonations = a.getDonationListFromFeedWithLocalStorage = a.getAndCleanSignedDonationsFromLocalStorage = void 0;
        var t = n("7MwF");
        function r(e, a) {
            var n,
                o = i(e = e.toLowerCase(), a);
            if (Object.keys(o).length)
                try {
                    localStorage.setItem("donations." + e, JSON.stringify(((n = {})[a] = i(e, a), n)))
                } catch (r) {
                    t.isStaging() && console.log("donations." + e + " local storage cannot be overwritten", r)
                }
            else
                try {
                    localStorage.removeItem("donations." + e)
                } catch (r) {
                    t.isStaging() && console.log("donations." + e + " local storage cannot be removed", r)
                }
        }
        function i(e, a) {
            e = e.toLowerCase();
            try {
                var n = localStorage.getItem("donations." + e),
                    o = n ? JSON.parse(n) : {},
                    r = Object.values(o);
                if (o[a])
                    return o[a];
                if (r.length) {
                    var i = {};
                    return Object.values(r[0]).forEach((function(e) {
                        e.donation_id || (i["uc_" + e.checkout_id] = e)
                    })), i
                }
                return {}
            } catch (s) {
                return t.isStaging() && console.log("donations." + e + " local storage cannot be retrieved", s), {}
            }
        }
        a.getAndCleanSignedDonationsFromLocalStorage = function(e) {
            try {
                var a = localStorage.getItem("signedDonationId." + e);
                return localStorage.removeItem("signedDonationId." + e), a ? JSON.parse(a) : ""
            } catch (n) {
                t.isStaging() && console.log("signedDonationId." + e + " local storage cannot be removed", n)
            }
        },
        a.getDonationListFromFeedWithLocalStorage = function(e, a, n) {
            void 0 === a && (a = []);
            var o = i(e = e.toLowerCase(), n);
            r(e, n);
            var t = {};
            return Object.values(o).forEach((function(e) {
                t[e.donation_id] = e
            })), a.forEach((function(e) {
                t[e.donation_id] ? t[e.donation_id].checkout_id ? o["uc_" + t[e.donation_id].checkout_id] = e : o[e.donation_id] = e : e.checkout_id ? o["uc_" + e.checkout_id] = e : o[e.donation_id] = e
            })), Object.values(o)
        },
        a.getLatestDonation = function(e) {
            e = e.toLowerCase();
            var a = localStorage.getItem("donations." + e);
            if (a) {
                var n = a ? JSON.parse(a) : {},
                    o = Object.keys(n).sort((function(e, a) {
                        return Date.parse(a) - Date.parse(e)
                    }))[0];
                return Object.values(n[o])[0]
            }
            throw new Error("No donations found in local storage for " + e)
        },
        a.getDonations = i,
        a.storeDonation = function(e, a, n) {
            var o,
                s = i(e = e.toLowerCase(), n);
            r(e, n),
            a.checkout_id ? (s["uc_" + a.checkout_id] = a, s["uc_" + a.checkout_id].fromLocalStorage = !0) : (s[a.donation_id] = a, s[a.donation_id].fromLocalStorage = !0);
            try {
                localStorage.setItem("donations." + e, JSON.stringify(((o = {})[n] = s, o)))
            } catch (u) {
                t.isStaging() && console.log("donations." + e + " local storage cannot be set", u)
            }
        },
        a.getLastDonorDetails = function(e) {
            e = e.toLowerCase();
            try {
                var a = localStorage.getItem("lastDonorDetails." + e),
                    n = a ? JSON.parse(a) : {};
                return {
                    amount: n.amount || 0,
                    checkout_id: n.checkout_id || 0,
                    full_name: n.full_name || "",
                    is_anonymous: n.is_anonymous || !1,
                    profile_image: n.profile_image || ""
                }
            } catch (o) {
                return t.isStaging() && console.log("lastDonorDetails." + e + " local storage cannot be retrieved", o), {
                    amount: 0,
                    checkout_id: 0,
                    full_name: "",
                    is_anonymous: !1,
                    profile_image: ""
                }
            }
        },
        a.updateDonation = function(e, a, n, r) {
            var s,
                u = i(e = e.toLowerCase(), r);
            n.checkout_id && u["uc_" + n.checkout_id] ? u["uc_" + n.checkout_id] = o(o(o({}, u["uc_" + n.checkout_id]), n), {
                donation_id: a
            }) : u[a] && (u[a] = o(o({}, u[a]), n));
            try {
                localStorage.setItem("donations." + e, JSON.stringify(((s = {})[r] = u, s)))
            } catch (d) {
                t.isStaging() && console.log("donations." + e + " local storage cannot be updated", d)
            }
        },
        a.getCheckoutIdsOfEmptyDonationId = function(e) {
            e = e.toLowerCase();
            try {
                var a = localStorage.getItem("donations." + e),
                    n = a ? JSON.parse(a) : {},
                    o = Object.values(n);
                return o.length ? Object.values(o[0]).map((function(e) {
                    if (!e.donation_id)
                        return e.checkout_id
                })).filter((function(e) {
                    return e
                })) : []
            } catch (r) {
                t.isStaging() && console.log("donations." + e + " local storage cannot be updated", r)
            }
            return []
        }
    },
    UY1T: function(e, a, n) {
        "use strict";
        var o = this && this.__createBinding || (Object.create ? function(e, a, n, o) {
                void 0 === o && (o = n),
                Object.defineProperty(e, o, {
                    enumerable: !0,
                    get: function() {
                        return a[n]
                    }
                })
            } : function(e, a, n, o) {
                void 0 === o && (o = n),
                e[o] = a[n]
            }),
            t = this && this.__exportStar || function(e, a) {
                for (var n in e)
                    "default" === n || a.hasOwnProperty(n) || o(a, e, n)
            };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(n("KcbS"), a),
        t(n("44dj"), a),
        t(n("blNy"), a)
    },
    V20B: function(e, a, n) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var o = n("4qcU");
        Object.defineProperty(a, "SubmitHelper", {
            enumerable: !0,
            get: function() {
                return o.default
            }
        })
    },
    Vu4q: function(e, a, n) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var o = n("q+pi");
        Object.defineProperty(a, "EmailSignInSubmit", {
            enumerable: !0,
            get: function() {
                return o.default
            }
        });
        var t = n("c6uM");
        Object.defineProperty(a, "ForgotPasswordSubmit", {
            enumerable: !0,
            get: function() {
                return t.default
            }
        });
        var r = n("26HO");
        Object.defineProperty(a, "SignUpSubmit", {
            enumerable: !0,
            get: function() {
                return r.default
            }
        })
    },
    X4cv: function(e, a, n) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.Photo = void 0;
        var o = n("SB8y");
        a.Photo = {
            toImage: o.toImage
        }
    },
    XuCa: function(e, a, n) {
        "use strict";
        var o = this && this.__assign || function() {
                return (o = Object.assign || function(e) {
                    for (var a, n = 1, o = arguments.length; n < o; n++)
                        for (var t in a = arguments[n])
                            Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
                    return e
                }).apply(this, arguments)
            },
            t = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.initialState = void 0;
        var r = n("zIs9"),
            i = t(n("b0lt")),
            s = t(n("V/h/")),
            u = n("ANjH");
        a.initialState = {
            alertContent: {
                message: "",
                type: r.AlertType.ERROR
            },
            infoContent: {
                message: ""
            }
        };
        a.default = u.combineReducers({
            alertContent: s.default((function(e, n) {
                if (n.payload && n.payload.type !== r.AlertType.INFO)
                    switch (n.type) {
                    case i.default.DISPLAY_ALERT_CONTENT:
                        return o(o({}, e), n.payload);
                    case i.default.CLOSE_ALERT_CONTENT:
                        return a.initialState.alertContent
                    }
                return e
            }), a.initialState.alertContent),
            infoContent: s.default((function(e, n) {
                if (n.payload && n.payload.type === r.AlertType.INFO)
                    switch (n.type) {
                    case i.default.DISPLAY_ALERT_CONTENT:
                        return o(o({}, e), {
                            message: n.payload.message
                        });
                    case i.default.CLOSE_ALERT_CONTENT:
                        return a.initialState.infoContent
                    }
                return e
            }), a.initialState.infoContent)
        })
    },
    YgTb: function(e, a, n) {
        "use strict";
        var o = this && this.__createBinding || (Object.create ? function(e, a, n, o) {
                void 0 === o && (o = n),
                Object.defineProperty(e, o, {
                    enumerable: !0,
                    get: function() {
                        return a[n]
                    }
                })
            } : function(e, a, n, o) {
                void 0 === o && (o = n),
                e[o] = a[n]
            }),
            t = this && this.__setModuleDefault || (Object.create ? function(e, a) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: a
                })
            } : function(e, a) {
                e.default = a
            }),
            r = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var a = {};
                if (null != e)
                    for (var n in e)
                        Object.hasOwnProperty.call(e, n) && o(a, e, n);
                return t(a, e), a
            },
            i = this && this.__awaiter || function(e, a, n, o) {
                return new (n || (n = Promise))((function(t, r) {
                    function i(e) {
                        try {
                            u(o.next(e))
                        } catch (a) {
                            r(a)
                        }
                    }
                    function s(e) {
                        try {
                            u(o.throw(e))
                        } catch (a) {
                            r(a)
                        }
                    }
                    function u(e) {
                        var a;
                        e.done ? t(e.value) : (a = e.value, a instanceof n ? a : new n((function(e) {
                            e(a)
                        }))).then(i, s)
                    }
                    u((o = o.apply(e, a || [])).next())
                }))
            },
            s = this && this.__generator || function(e, a) {
                var n,
                    o,
                    t,
                    r,
                    i = {
                        label: 0,
                        sent: function() {
                            if (1 & t[0])
                                throw t[1];
                            return t[1]
                        },
                        trys: [],
                        ops: []
                    };
                return r = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;
                function s(r) {
                    return function(s) {
                        return function(r) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; i;)
                                try {
                                    if (n = 1, o && (t = 2 & r[0] ? o.return : r[0] ? o.throw || ((t = o.return) && t.call(o), 0) : o.next) && !(t = t.call(o, r[1])).done)
                                        return t;
                                    switch (o = 0, t && (r = [2 & r[0], t.value]), r[0]) {
                                    case 0:
                                    case 1:
                                        t = r;
                                        break;
                                    case 4:
                                        return i.label++, {
                                            value: r[1],
                                            done: !1
                                        };
                                    case 5:
                                        i.label++,
                                        o = r[1],
                                        r = [0];
                                        continue;
                                    case 7:
                                        r = i.ops.pop(),
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(t = i.trys, (t = t.length > 0 && t[t.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === r[0] && (!t || r[1] > t[0] && r[1] < t[3])) {
                                            i.label = r[1];
                                            break
                                        }
                                        if (6 === r[0] && i.label < t[1]) {
                                            i.label = t[1],
                                            t = r;
                                            break
                                        }
                                        if (t && i.label < t[2]) {
                                            i.label = t[2],
                                            i.ops.push(r);
                                            break
                                        }
                                        t[2] && i.ops.pop(),
                                        i.trys.pop();
                                        continue
                                    }
                                    r = a.call(e, i)
                                } catch (s) {
                                    r = [6, s],
                                    o = 0
                                } finally {
                                    n = t = 0
                                }
                            if (5 & r[0])
                                throw r[1];
                            return {
                                value: r[0] ? r[1] : void 0,
                                done: !0
                            }
                        }([r, s])
                    }
                }
            },
            u = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.Trans = a.setI18nClientSide = a.t = a.i18n = void 0;
        var d = r(n("FYOA")),
            l = u(n("k43+"));
        a.i18n = l.default;
        var c = n("K9qA");
        l.default.globalInit(d, !0, "apps-campaign"),
        a.setI18nClientSide = function() {
            return i(this, void 0, void 0, (function() {
                var e;
                return s(this, (function(a) {
                    switch (a.label) {
                    case 0:
                        return c.canUseWindow() ? window.initialState && window.initialState.meta && window.initialState.meta.global && window.initialState.meta.global.locale ? (e = window.initialState.meta.global.locale.iso15897, [4, l.default.setLocale(e)]) : [3, 2] : [3, 3];
                    case 1:
                        a.sent(),
                        a.label = 2;
                    case 2:
                        return [3, 5];
                    case 3:
                        return [4, l.default.setLocale("en_US")];
                    case 4:
                        a.sent(),
                        a.label = 5;
                    case 5:
                        return [2]
                    }
                }))
            }))
        };
        var m = l.default.getNamespacedT("apps-campaign");
        a.t = m;
        var p = l.default.getNamespacedTrans("apps-campaign");
        a.Trans = p
    },
    ZZcF: function(e, a, n) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.makeGetVisitorCountry = a.makeGetRedirectObject = a.makeGetSubdomain = a.makeGetShowCookieBanner = a.makeGetReCaptchaSiteKey = a.makeGetReCaptchaBigwebKey = a.makeGetVisitorGeoRecord = a.makeGetIsPreviewMode = a.makeGetFacebook = a.makeGetBraintreeTokenizationKey = a.makeGetBaseUrl = a.makeGetAlgoliaIndices = a.makeGetPublicPath = a.makeGetLocale = a.makeGetAcceptLanguage = a.makeGetDomain = a.makeGetFacebookAppId = a.globalMetaState = void 0;
        var o = n("G4qV"),
            t = n("wE+H"),
            r = n("VU+c"),
            i = n("8QVh"),
            s = function(e) {
                return e.meta.global
            };
        a.globalMetaState = s;
        a.makeGetFacebookAppId = function() {
            return o.createSelector([s], (function(e) {
                return e.facebook.appId
            }))
        };
        var u = function() {
            return o.createSelector([s], (function(e) {
                return e.domain
            }))
        };
        a.makeGetDomain = u;
        a.makeGetIsPreviewMode = function() {
            return o.createSelector([s], (function(e) {
                return e.isPreviewMode
            }))
        };
        a.makeGetAcceptLanguage = function() {
            return o.createSelector([s], (function(e) {
                return r.getSupportedLocale(e.locale.bcp47, t.SupportedLocaleFormats.BCP47)
            }))
        };
        a.makeGetLocale = function() {
            return o.createSelector([s], (function(e) {
                return r.getSupportedLocale(e.locale.iso15897, t.SupportedLocaleFormats.ISO15897)
            }))
        };
        var d = function() {
            return o.createSelector([s], (function(e) {
                return e.publicPath
            }))
        };
        a.makeGetPublicPath = d;
        a.makeGetBaseUrl = function(e) {
            return o.createSelector([l(), u(), d()], (function(a, n, o) {
                var t = e ? "https://" + a + "." + n + "/" + o + "/" + e : "https://" + a + "." + n + "/" + o;
                return i.normalize(t)
            }))
        };
        a.makeGetAlgoliaIndices = function() {
            return o.createSelector([s], (function(e) {
                return e.algolia
            }))
        };
        a.makeGetBraintreeTokenizationKey = function() {
            return o.createSelector([s], (function(e) {
                return e.braintree.tokenizationKey
            }))
        };
        a.makeGetFacebook = function() {
            return o.createSelector([s], (function(e) {
                return e.facebook
            }))
        };
        a.makeGetReCaptchaSiteKey = function() {
            return o.createSelector([s], (function(e) {
                return e.reCaptcha.siteKey
            }))
        };
        a.makeGetReCaptchaBigwebKey = function() {
            return o.createSelector([s], (function(e) {
                return e.reCaptcha.bigwebKey
            }))
        };
        a.makeGetShowCookieBanner = function() {
            return o.createSelector([s], (function(e) {
                return e.showCookieBanner
            }))
        };
        a.makeGetVisitorCountry = function() {
            return o.createSelector([s], (function(e) {
                return e.country
            }))
        };
        var l = function() {
            return o.createSelector([s], (function(e) {
                return e.subdomains.join(".") || "www"
            }))
        };
        a.makeGetSubdomain = l;
        a.makeGetVisitorGeoRecord = function() {
            return o.createSelector([s], (function(e) {
                return e.geoRecord
            }))
        };
        a.makeGetRedirectObject = function() {
            return o.createSelector([s], (function(e) {
                return e.redirect
            }))
        }
    },
    b0lt: function(e, a, n) {
        "use strict";
        var o;
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        function(e) {
            e.DISPLAY_ALERT_CONTENT = "DISPLAY_ALERT_CONTENT",
            e.CLOSE_ALERT_CONTENT = "CLOSE_ALERT_CONTENT"
        }(o || (o = {})),
        a.default = o
    },
    blNy: function(e, a, n) {
        "use strict";
        var o = this && this.__createBinding || (Object.create ? function(e, a, n, o) {
                void 0 === o && (o = n),
                Object.defineProperty(e, o, {
                    enumerable: !0,
                    get: function() {
                        return a[n]
                    }
                })
            } : function(e, a, n, o) {
                void 0 === o && (o = n),
                e[o] = a[n]
            }),
            t = this && this.__setModuleDefault || (Object.create ? function(e, a) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: a
                })
            } : function(e, a) {
                e.default = a
            }),
            r = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var a = {};
                if (null != e)
                    for (var n in e)
                        Object.hasOwnProperty.call(e, n) && o(a, e, n);
                return t(a, e), a
            };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.configureStore = void 0;
        var i = n("ANjH"),
            s = n("5HXA"),
            u = r(n("rRWa")),
            d = n("UY1T");
        a.configureStore = function(e) {
            var a = "client" === e && window.initialState ? window.initialState : {},
                n = u.default(),
                o = i.createStore(d.rootReducer, a, s.composeWithDevTools(i.applyMiddleware(n)));
            return "client" === e ? n.run(d.rootSaga) : (o.runSaga = n.run, o.close = function() {
                return o.dispatch(u.END)
            }), o
        }
    },
    c5bu: function(e, a, n) {
        "use strict";
        var o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var t = o(n("Llzs")),
            r = o(n("ACRQ")),
            i = o(n("3aO9")),
            s = n("ANjH");
        a.default = s.combineReducers({
            urlShortner: t.default,
            feed: r.default,
            global: i.default
        })
    },
    c6uM: function(e, a, n) {
        "use strict";
        var o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var t = n("YgTb"),
            r = o(n("mO48")),
            i = n("wQmL"),
            s = function(e, a) {
                var n;
                throw new i.SubmissionError(((n = {})[e] = a, n))
            };
        a.default = {
            submissionError: s,
            submitForgotPasswordForm: function(e, a, n) {
                e.email ? e.email.length > 255 ? s("email", t.t("Please enter a shorter email address.")) : /\S+@\S+\.\S+/.test(e.email) || s("email", t.t("Please enter a valid email address.")) : s("email", t.t("Please enter your email address")),
                a({
                    onFailure: n.onFailure,
                    onSuccess: n.onSuccess,
                    payload: e,
                    type: r.default.PERSON_RESET_PASSWORD_IN_PROGRESS
                }),
                a(i.startSubmit("forgotPasswordForm"))
            }
        }
    },
    dpDq: function(e, a, n) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.makeGetInvisibleRecaptchaKey = a.makeGetReCaptchaToken = a.makeGetIsFacebookSigningIn = a.makeGetFacebookError = a.makeGetCaptchaValidating = a.makeGetCaptchaValid = a.makeGetCaptchaRequired = a.makeGetAuth = void 0;
        var o = n("YgTb"),
            t = n("C0Xu"),
            r = n("G4qV"),
            i = function(e) {
                return e.auth
            };
        a.makeGetAuth = function() {
            return r.createSelector([i], (function(e) {
                return e
            }))
        };
        a.makeGetReCaptchaToken = function() {
            return r.createSelector([i], (function(e) {
                return e.reCaptchaToken
            }))
        };
        a.makeGetCaptchaRequired = function() {
            return r.createSelector([i], (function(e) {
                return e.captchaRequired
            }))
        };
        a.makeGetCaptchaValid = function() {
            return r.createSelector([i], (function(e) {
                return e.captchaValid
            }))
        };
        a.makeGetCaptchaValidating = function() {
            return r.createSelector([i], (function(e) {
                return e.captchaValidating
            }))
        };
        a.makeGetInvisibleRecaptchaKey = function() {
            return r.createSelector([i], (function(e) {
                return e.invisibleRecaptchaKey
            }))
        };
        a.makeGetIsFacebookSigningIn = function() {
            return r.createSelector([i], (function(e) {
                return e.facebook && e.facebook.status && e.facebook.status === t.LoadingStateStatus.PENDING
            }))
        };
        a.makeGetFacebookError = function() {
            return r.createSelector([i], (function(e) {
                return (e.facebook && e.facebook.error.error && e.facebook.error.error.code ? e.facebook.error.error.code : 0) > 0 ? o.t("Sorry, no account found") : ""
            }))
        }
    },
    fXpK: function(e, a, n) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var o = /^(?:expires|max-age|path|domain|secure)$/i,
            t = {
                getRawCookie: function() {
                    return document.cookie
                },
                setRawCookie: function(e) {
                    document.cookie = e
                },
                getItem: function(e) {
                    if (e)
                        return decodeURIComponent(t.getRawCookie().replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || void 0
                },
                setItem: function(e, a, n, r, i, s) {
                    if (!e || o.test(e))
                        return !1;
                    var u = "";
                    if (n)
                        switch (n.constructor) {
                        case Number:
                            u = n === 1 / 0 ? "; expires=Tue, 19 Jan 2038 03:14:07 GMT" : "; expires=" + new Date(1e3 * n + Date.now()).toUTCString();
                            break;
                        case String:
                            u = "; expires=" + n;
                            break;
                        case Date:
                            u = "; expires=" + n.toUTCString()
                        }
                    return t.setRawCookie(encodeURIComponent(e) + "=" + encodeURIComponent(a) + u + (i ? "; domain=" + i : "") + (r ? "; path=" + r : "") + (s ? "; secure" : "")), !0
                },
                removeItem: function(e, a, n) {
                    return t.hasItem(e) && t.setItem(e, "", "Thu, 01 Jan 1970 00:00:00 GMT", a, n)
                },
                hasItem: function(e) {
                    return !(!e || o.test(e)) && new RegExp("(?:^|;\\s*)" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(t.getRawCookie())
                },
                keys: function() {
                    return t.getRawCookie().replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/).map((function(e) {
                        return decodeURIComponent(e)
                    }))
                }
            };
        a.default = t
    },
    iMMH: function(e, a, n) {
        "use strict";
        var o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.formatDonationFromReceipt = a.formatDonationsList = void 0;
        var t = n("YgTb"),
            r = n("C0Xu"),
            i = n("K0mF"),
            s = n("0Y3C"),
            u = o(n("wd/R"));
        a.formatDonationsList = function(e, a, n) {
            i.setDonationRelativeTime();
            var o = e.map((function(e) {
                var o = e.is_anonymous ? t.t("Anonymous") : e.name;
                return {
                    amountFormatted: a.formatAsCurrency(e.amount),
                    donor: {
                        fullName: o,
                        initials: e.is_anonymous ? "" : s.getInitials(o),
                        profileImage: e.profile_url.includes("gfm_donor.gif") ? void 0 : e.profile_url
                    },
                    offlineDonation: e.is_offline,
                    profileUrl: e.profile_url,
                    timeAgo: i.timeAgo(e.created_at, n)
                }
            }));
            return i.resetDefaultRelativeTime(), o
        },
        a.formatDonationFromReceipt = function(e, a, n) {
            if (0 !== e.amount) {
                var o = e.donor.isAnonymous ? t.t("Anonymous") : e.donor.name;
                return {
                    amountFormatted: a.formatAsCurrency(e.amount),
                    donor: {
                        fullName: o,
                        initials: e.donor.isAnonymous ? "" : s.getInitials(o),
                        profileImage: void 0
                    },
                    offlineDonation: !1,
                    timeAgo: i.timeAgo(u.default(), n),
                    topSupporterType: r.TopSupporterType.YOUR_DONATION
                }
            }
        }
    },
    iahY: function(e, a, n) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.makeGetCurrentUserDonation = a.makeGetIsAnonymousDonation = a.makeHasSignedDonationId = a.makeGetTeamEmailInvites = a.makeGetSignedDonationId = a.makeGetPostDonateCreateCommentMediaError = a.makeGetPostDonateCreateCommentMedia = a.makeGetPostDonateCreateCommentError = a.makeGetPostDonateCreateCommentLoading = a.makeGetPostDonateCreateComment = a.makeGetDonorEmail = a.makeGetCOState = void 0;
        var o = n("G4qV"),
            t = n("Y4ob"),
            r = n("ZZcF"),
            i = n("mZEw"),
            s = function(e) {
                return e.co
            };
        a.makeGetCOState = function() {
            return o.createSelector([s], (function(e) {
                return e
            }))
        };
        a.makeGetPostDonateCreateComment = function() {
            return o.createSelector([s], (function(e) {
                return e.postDonateCreateComment
            }))
        };
        a.makeGetPostDonateCreateCommentLoading = function() {
            return o.createSelector([s], (function(e) {
                return e.postDonateCreateComment.loading
            }))
        };
        a.makeGetPostDonateCreateCommentError = function() {
            return o.createSelector([s], (function(e) {
                return e.postDonateCreateComment.error
            }))
        };
        a.makeGetPostDonateCreateCommentMediaError = function() {
            return o.createSelector([s], (function(e) {
                return e.postDonateCreateComment.mediaError
            }))
        };
        a.makeGetPostDonateCreateCommentMedia = function() {
            return o.createSelector([s], (function(e) {
                return e.postDonateCreateComment.media
            }))
        };
        a.makeGetDonorEmail = function() {
            return o.createSelector([s], (function(e) {
                return e.donationReceipt.donor.email
            }))
        };
        a.makeGetSignedDonationId = function() {
            return o.createSelector([s], (function(e) {
                return e.donationReceipt.signedDonationId
            }))
        };
        a.makeGetIsAnonymousDonation = function() {
            return o.createSelector([s], (function(e) {
                return e.donationReceipt.donor.isAnonymous
            }))
        };
        a.makeHasSignedDonationId = function() {
            return o.createSelector([s], (function(e) {
                return 0 !== e.donationReceipt.signedDonationId.length
            }))
        };
        a.makeGetCurrentUserDonation = function() {
            return o.createSelector([s, t.makeGetLocaleNumberFormatter(), r.makeGetLocale()], (function(e, a, n) {
                return i.formatDonationFromReceipt(e.donationReceipt, a, n)
            }))
        };
        a.makeGetTeamEmailInvites = function() {
            return o.createSelector([s], (function(e) {
                return e.teamEmailInvites
            }))
        }
    },
    jzel: function(e, a, n) {
        "use strict";
        var o = this && this.__createBinding || (Object.create ? function(e, a, n, o) {
                void 0 === o && (o = n),
                Object.defineProperty(e, o, {
                    enumerable: !0,
                    get: function() {
                        return a[n]
                    }
                })
            } : function(e, a, n, o) {
                void 0 === o && (o = n),
                e[o] = a[n]
            }),
            t = this && this.__setModuleDefault || (Object.create ? function(e, a) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: a
                })
            } : function(e, a) {
                e.default = a
            }),
            r = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var a = {};
                if (null != e)
                    for (var n in e)
                        Object.hasOwnProperty.call(e, n) && o(a, e, n);
                return t(a, e), a
            },
            i = this && this.__awaiter || function(e, a, n, o) {
                return new (n || (n = Promise))((function(t, r) {
                    function i(e) {
                        try {
                            u(o.next(e))
                        } catch (a) {
                            r(a)
                        }
                    }
                    function s(e) {
                        try {
                            u(o.throw(e))
                        } catch (a) {
                            r(a)
                        }
                    }
                    function u(e) {
                        var a;
                        e.done ? t(e.value) : (a = e.value, a instanceof n ? a : new n((function(e) {
                            e(a)
                        }))).then(i, s)
                    }
                    u((o = o.apply(e, a || [])).next())
                }))
            },
            s = this && this.__generator || function(e, a) {
                var n,
                    o,
                    t,
                    r,
                    i = {
                        label: 0,
                        sent: function() {
                            if (1 & t[0])
                                throw t[1];
                            return t[1]
                        },
                        trys: [],
                        ops: []
                    };
                return r = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;
                function s(r) {
                    return function(s) {
                        return function(r) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; i;)
                                try {
                                    if (n = 1, o && (t = 2 & r[0] ? o.return : r[0] ? o.throw || ((t = o.return) && t.call(o), 0) : o.next) && !(t = t.call(o, r[1])).done)
                                        return t;
                                    switch (o = 0, t && (r = [2 & r[0], t.value]), r[0]) {
                                    case 0:
                                    case 1:
                                        t = r;
                                        break;
                                    case 4:
                                        return i.label++, {
                                            value: r[1],
                                            done: !1
                                        };
                                    case 5:
                                        i.label++,
                                        o = r[1],
                                        r = [0];
                                        continue;
                                    case 7:
                                        r = i.ops.pop(),
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(t = i.trys, (t = t.length > 0 && t[t.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === r[0] && (!t || r[1] > t[0] && r[1] < t[3])) {
                                            i.label = r[1];
                                            break
                                        }
                                        if (6 === r[0] && i.label < t[1]) {
                                            i.label = t[1],
                                            t = r;
                                            break
                                        }
                                        if (t && i.label < t[2]) {
                                            i.label = t[2],
                                            i.ops.push(r);
                                            break
                                        }
                                        t[2] && i.ops.pop(),
                                        i.trys.pop();
                                        continue
                                    }
                                    r = a.call(e, i)
                                } catch (s) {
                                    r = [6, s],
                                    o = 0
                                } finally {
                                    n = t = 0
                                }
                            if (5 & r[0])
                                throw r[1];
                            return {
                                value: r[0] ? r[1] : void 0,
                                done: !0
                            }
                        }([r, s])
                    }
                }
            },
            u = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.logServerSideError = a.getCampaignVelocity = a.handleServiceError = a.getIdentity = a.getDonations = a.getComments = a.getTeamMembers = a.getPhotos = a.getUpdates = a.getCounts = a.getCampaignRoles = a.getCampaign = void 0;
        var d = n("7MwF"),
            l = n("kLb9"),
            c = n("8QVh"),
            m = u(n("EcEN")),
            p = n("K9qA"),
            h = c.getDomain(),
            f = d.isDocker() ? "http://native-gateway/web-gateway/v1/feed" : "https://gateway." + h + "/web-gateway/v1/feed";
        a.getCampaign = function(e) {
            var a = e.campaignParams.campaignUrl.replace(/[^\wÀ-ÖØ-öø-ÿ\\/^()&?|#.%\-+$,=]/g, ""),
                n = f + "/" + a + "/campaign",
                o = {
                    "GFM-Request-Id": m.default.v4()
                };
            e.authToken && (o["X-AUTH-TOKEN"] = e.authToken),
            e.ipAddressTrail && (o["X-Forwarded-For"] = e.ipAddressTrail);
            var t = {
                headers: o,
                validateStatus: function(e) {
                    return e < 400
                }
            };
            return l.HttpClient.get(n, t)
        };
        a.getCounts = function(e) {
            var a = e.campaignUrl,
                n = f + "/" + a + "/counts";
            return l.HttpClient.get(n)
        };
        a.getUpdates = function(e) {
            var a = e.campaignUrl,
                n = e.limit,
                o = void 0 === n ? 3 : n,
                t = e.offset,
                r = f + "/" + a + "/updates?" + ("limit=" + o + "&offset=" + (void 0 === t ? 0 : t)),
                i = {
                    headers: {
                        "GFM-Request-Id": m.default.v4()
                    }
                };
            return l.HttpClient.get(r, i)
        };
        a.getPhotos = function(e) {
            var a = e.campaignUrl,
                n = e.limit,
                o = void 0 === n ? 10 : n,
                t = e.offset,
                r = void 0 === t ? 0 : t,
                i = e.photoType,
                s = f + "/" + a + "/photos?" + ("limit=" + o + "&offset=" + r + "&photo_type=" + i),
                u = {
                    headers: {
                        "GFM-Request-Id": m.default.v4()
                    }
                };
            return l.HttpClient.get(s, u)
        };
        a.getTeamMembers = function(e) {
            var a = {
                    headers: {
                        "GFM-Request-Id": m.default.v4()
                    }
                },
                n = f + "/" + e + "/teammembers";
            return l.HttpClient.get(n, a)
        };
        a.getComments = function(e) {
            var a = e.campaignUrl,
                n = e.limit,
                o = void 0 === n ? 10 : n,
                t = e.offset,
                r = "limit=" + o + "&offset=" + (void 0 === t ? 0 : t),
                i = {
                    headers: {
                        "GFM-Request-Id": m.default.v4()
                    }
                },
                s = f + "/" + a + "/comments?" + r;
            return l.HttpClient.get(s, i)
        };
        a.getDonations = function(e) {
            var a = e.campaignUrl,
                n = e.limit,
                o = void 0 === n ? 10 : n,
                t = e.offset,
                r = void 0 === t ? 0 : t,
                i = e.sort,
                s = "limit=" + o + "&offset=" + r + "&sort=" + (void 0 === i ? "recent" : i),
                u = {
                    headers: {
                        "GFM-Request-Id": m.default.v4()
                    }
                },
                d = f + "/" + a + "/donations?" + s;
            return l.HttpClient.get(d, u)
        };
        a.getIdentity = function() {
            var e = {
                    headers: {
                        "GFM-Request-Id": m.default.v4()
                    }
                },
                a = f + "/identity";
            return l.HttpClient.get(a, e)
        };
        a.getCampaignRoles = function(e) {
            var a = e.campaignUrl,
                n = e.role,
                o = n ? "?role=" + n : "",
                t = {
                    headers: {
                        "GFM-Request-Id": m.default.v4()
                    }
                },
                r = f + "/" + a + "/campaign_roles" + o;
            return l.HttpClient.get(r, t)
        };
        a.getCampaignVelocity = function(e) {
            var a = e.campaignUrl,
                n = e.type,
                o = f + "/" + a + "/velocity?type=" + n,
                t = {
                    headers: {
                        "GFM-Request-Id": m.default.v4()
                    }
                };
            return l.HttpClient.get(o, t)
        };
        a.handleServiceError = function(e) {
            var a = {
                error: !0,
                statusCode: 500
            };
            if (e && e.response) {
                var n = e.response.data;
                a.statusCode = e.response.status,
                a.error = n
            }
            return a
        },
        a.logServerSideError = function(e) {
            return i(this, void 0, void 0, (function() {
                return s(this, (function(a) {
                    switch (a.label) {
                    case 0:
                        return p.canUseWindow() ? [3, 2] : [4, Promise.resolve().then((function() {
                            return r(n("pD25"))
                        }))];
                    case 1:
                        a.sent().Logger.error(JSON.stringify(e)),
                        a.label = 2;
                    case 2:
                        return [2]
                    }
                }))
            }))
        }
    },
    kLtp: function(e, a, n) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.isCompetitorText = void 0;
        var o = ["cash.app|cash.me|cashapp|cash app|cashtag", "\\$(?=[\\w]*[a-zA-Z])\\w{1,20}(?!\\w)", "venmo", "paypal|pay pal", "facebook fundraiser|facebook.com/donate", "leetchi", "betterplace", "produzzionedalbasso|produzzione dal basso", "justgiving"].map((function(e) {
                return "(" + e + ")"
            })).join("|"),
            t = new RegExp("(" + o + ")", "i");
        a.isCompetitorText = function(e) {
            return t.test(e)
        }
    },
    l2oO: function(e, a, n) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.makeGetShortUrlInitialized = a.makeGetShortenedShareUrlSuccess = a.makeGetShortenedShareUrlFailed = a.makeGetUrlShortnerMetaState = void 0;
        var o = n("G4qV"),
            t = function(e) {
                return e.meta.urlShortner
            };
        a.makeGetUrlShortnerMetaState = function() {
            return o.createSelector([t], (function(e) {
                return e
            }))
        };
        a.makeGetShortenedShareUrlSuccess = function(e, a) {
            return o.createSelector([t], (function(n) {
                var o = n.shortenedShareUtmUrls[a];
                if (o) {
                    var t = o[e];
                    if (t)
                        return !t.error && t.initialized
                }
                return !1
            }))
        };
        a.makeGetShortenedShareUrlFailed = function(e, a) {
            return o.createSelector([t], (function(n) {
                var o = n.shortenedShareUtmUrls[a];
                if (o) {
                    var t = o[e];
                    if (t)
                        return t.error && t.initialized
                }
                return !1
            }))
        };
        a.makeGetShortUrlInitialized = function(e, a) {
            return o.createSelector([t], (function(n) {
                var o = n.shortenedShareUtmUrls[a];
                if (o) {
                    var t = o[e];
                    if (t)
                        return t.initialized;
                    console.warn("@ssr-frontend UrlShortnerMeta.selectors: the following share location, " + e + ", does not exist in the url shortner meta store. Please add it to the store accordingly.")
                }
                return console.warn("@ssr-frontend UrlShortnerMeta.selectors: the following share type, " + a + ", does not exist in the url shortner meta store. Please add it to the store accordingly."), !1
            }))
        }
    },
    mO48: function(e, a, n) {
        "use strict";
        var o;
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        function(e) {
            e.PERSON_RESET_PASSWORD_FAILURE = "PERSON_RESET_PASSWORD_FAILURE",
            e.PERSON_RESET_PASSWORD_IN_PROGRESS = "PERSON_RESET_PASSWORD_IN_PROGRESS",
            e.PERSON_RESET_PASSWORD_SUCCESS = "PERSON_RESET_PASSWORD_SUCCESS",
            e.PERSON_ADD_FACEBOOK_ID_FAILURE = "PERSON_ADD_FACEBOOK_ID_FAILURE",
            e.PERSON_ADD_FACEBOOK_ID_IN_PROGRESS = "PERSON_ADD_FACEBOOK_ID_IN_PROGRESS",
            e.PERSON_ADD_FACEBOOK_ID_SUCCESS = "PERSON_ADD_FACEBOOK_ID_SUCCESS"
        }(o || (o = {})),
        a.default = o
    },
    mZEw: function(e, a, n) {
        "use strict";
        var o = this && this.__createBinding || (Object.create ? function(e, a, n, o) {
                void 0 === o && (o = n),
                Object.defineProperty(e, o, {
                    enumerable: !0,
                    get: function() {
                        return a[n]
                    }
                })
            } : function(e, a, n, o) {
                void 0 === o && (o = n),
                e[o] = a[n]
            }),
            t = this && this.__exportStar || function(e, a) {
                for (var n in e)
                    "default" === n || a.hasOwnProperty(n) || o(a, e, n)
            };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(n("iMMH"), a)
    },
    mbAg: function(e, a, n) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.makeGetInfoContent = a.makeGetAlertContent = void 0;
        var o = n("G4qV"),
            t = function(e) {
                return e.ui
            };
        a.makeGetAlertContent = function() {
            return o.createSelector([t], (function(e) {
                return e.alertContent
            }))
        };
        a.makeGetInfoContent = function() {
            return o.createSelector([t], (function(e) {
                return e.infoContent
            }))
        }
    },
    omnk: function(e, a, n) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.makeIsFacebookConnecting = a.makeGetFacebookToken = a.makeGetFacebookId = a.makeIsFacebookConnected = a.makeGetFacebook = void 0;
        var o = n("G4qV"),
            t = function(e) {
                return e.facebook
            };
        a.makeGetFacebook = function() {
            return o.createSelector([t], (function(e) {
                return e
            }))
        };
        a.makeGetFacebookId = function() {
            return o.createSelector([t], (function(e) {
                return e.facebookId
            }))
        };
        a.makeGetFacebookToken = function() {
            return o.createSelector([t], (function(e) {
                return e.facebookToken
            }))
        };
        a.makeIsFacebookConnected = function() {
            return o.createSelector([t], (function(e) {
                return !(!e.facebookId || !e.facebookToken)
            }))
        };
        a.makeIsFacebookConnecting = function() {
            return o.createSelector([t], (function(e) {
                return "pending" === e.meta.status
            }))
        }
    },
    oxJe: function(e, a, n) {
        "use strict";
        var o;
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        function(e) {
            e.FB_AUTHENTICATE_IN_PROGRESS = "FB_AUTHENTICATE_IN_PROGRESS",
            e.FB_AUTHENTICATE_SUCCESS = "FB_AUTHENTICATE_SUCCESS",
            e.FB_AUTHENTICATE_FAILURE = "FB_AUTHENTICATE_FAILURE",
            e.FB_AUTHENTICATE_AND_SIGN_IN_IN_PROGRESS = "FB_AUTHENTICATE_AND_SIGN_IN_IN_PROGRESS",
            e.FB_AUTHENTICATE_AND_UPDATE_DONATION_IN_PROGRESS = "FB_AUTHENTICATE_AND_UPDATE_DONATION_IN_PROGRESS",
            e.FB_AUTHENTICATE_AND_UPDATE_PERSON_IN_PROGRESS = "FB_AUTHENTICATE_AND_UPDATE_PERSON_IN_PROGRESS",
            e.FB_LOGOUT_IN_PROGRESS = "FB_LOGOUT_IN_PROGRESS",
            e.FB_LOGOUT_SUCCESS = "FB_LOGOUT_SUCCESS",
            e.FB_LOGOUT_FAILURE = "FB_LOGOUT_FAILURE"
        }(o || (o = {})),
        a.default = o
    },
    p48P: function(e, a, n) {
        "use strict";
        var o;
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        function(e) {
            e.SIGN_IN_EMAIL_FAILURE = "SIGN_IN_EMAIL_FAILURE",
            e.SIGN_IN_EMAIL_IN_PROGRESS = "SIGN_IN_EMAIL_IN_PROGRESS",
            e.SIGN_IN_EMAIL_SUCCESS = "SIGN_IN_EMAIL_SUCCESS",
            e.SIGN_IN_FACEBOOK_FAILURE = "SIGN_IN_FACEBOOK_FAILURE",
            e.SIGN_IN_FACEBOOK_IN_PROGRESS = "SIGN_IN_FACEBOOK_IN_PROGRESS",
            e.SIGN_IN_FACEBOOK_SUCCESS = "SIGN_IN_FACEBOOK_SUCCESS",
            e.SIGN_IN_CAPTCHA_REQUIRED = "SIGN_IN_CAPTCHA_REQUIRED",
            e.SIGN_OUT_IN_PROGRESS = "SIGN_OUT_PROGRESS",
            e.SIGN_OUT_FAILURE = "SIGN_OUT_FAILURE",
            e.SIGN_OUT_SUCCESS = "SIGN_OUT_SUCCESS",
            e.GET_CAPTCHA_FAILURE = "GET_CAPTCHA_IN_FAILURE",
            e.GET_CAPTCHA_IN_PROGRESS = "GET_CAPTCHA_IN_PROGRESS",
            e.GET_CAPTCHA_SUCCESS = "GET_CAPTCHA_SUCCESS",
            e.VALIDATE_CAPTCHA_FAILURE = "VALIDATE_CAPTCHA_FAILURE",
            e.VALIDATE_CAPTCHA_IN_PROGRESS = "VALIDATE_CAPTCHA_IN_PROGRESS",
            e.VALIDATE_CAPTCHA_SUCCESS = "VALIDATE_CAPTCHA_SUCCESS",
            e.RECAPTCHA_TOKEN_FAILURE = "RECAPTCHA_TOKEN_FAILURE",
            e.RECAPTCHA_TOKEN_IN_PROGRESS = "RECAPTCHA_TOKEN_IN_PROGRESS",
            e.RECAPTCHA_TOKEN_SUCCESS = "RECAPTCHA_TOKEN_SUCCESS"
        }(o || (o = {})),
        a.default = o
    },
    pQ4L: function(e, a, n) {
        "use strict";
        var o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var t = n("YgTb"),
            r = o(n("EcZt")),
            i = n("wQmL"),
            s = function(e, a) {
                var n;
                throw new i.SubmissionError(((n = {
                    _error: a
                })[e] = a, n))
            };
        a.default = function(e, a, n) {
            return e.contactName ? e.contactName.length > 255 && s("contactName", t.t("Please enter a shorter name.")) : s("contactName", t.t("Please enter your name")), e.contactEmail ? e.contactEmail.length > 255 ? s("contactEmail", t.t("Please enter a shorter email address.")) : /\S+@\S+\.\S+/.test(e.contactEmail) || s("contactEmail", t.t("Please enter a valid email address.")) : s("contactEmail", t.t("Please enter your email address")), e.contactMessage ? e.contactMessage.length > 1e3 && s("contactMessage", t.t("Please enter a shorter message.")) : s("contactMessage", t.t("Please enter your message")), a({
                onFailure: n,
                onSuccess: n,
                payload: e,
                type: r.default.CONTACT_ORGANIZER_IN_PROGRESS
            }), new Promise((function() {}))
        }
    },
    "q+pi": function(e, a, n) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var o = n("wQmL"),
            t = n("YgTb"),
            r = function(e, a) {
                var n;
                throw new o.SubmissionError(((n = {})[e] = a, n))
            };
        a.default = {
            validate: function(e) {
                return e.email ? e.email.length > 255 ? r("email", t.t("Please enter a shorter email address.")) : /\S+@\S+\.\S+/.test(e.email) || r("email", t.t("Please enter a valid email address.")) : r("email", t.t("Please enter your email address")), e.password || r("password", t.t("Please enter your password")), new Promise((function(e, a) {}))
            }
        }
    },
    qUSl: function(e, a, n) {
        "use strict";
        var o,
            t = this && this.__assign || function() {
                return (t = Object.assign || function(e) {
                    for (var a, n = 1, o = arguments.length; n < o; n++)
                        for (var t in a = arguments[n])
                            Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
                    return e
                }).apply(this, arguments)
            },
            r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.initialState = void 0;
        var i = r(n("p48P")),
            s = r(n("4M3g")),
            u = n("C0Xu"),
            d = r(n("PTAX")),
            l = n("fPxM"),
            c = r(n("V/h/"));
        a.initialState = {
            campaign: {
                beneficiary: {
                    first_name: "",
                    last_name: "",
                    profile_url: ""
                },
                campaign_image_url: "",
                campaign_photo: {
                    scaled: {
                        "1x1-960": "",
                        "3x2-1200": "",
                        "3x2-640": "",
                        "4x3-1200": ""
                    },
                    url: ""
                },
                category_id: 0,
                charity: {
                    city: "",
                    country: u.CharityCountries.US,
                    ein: 0,
                    id: 0,
                    name: "",
                    npo_id: "",
                    state: ""
                },
                comments_enabled: !1,
                created_at: "",
                currencycode: "",
                current_amount: 0,
                deactivated: !0,
                default_url: "",
                donation_count: 0,
                donations_enabled: !1,
                fund_description: "",
                fund_name: "",
                goal_amount: 0,
                has_beneficiary: !1,
                has_donations: !1,
                has_gfm_org_donation: !1,
                id: 0,
                in_degraded_mode: !1,
                is_charity: !1,
                is_partner: !1,
                is_team: !1,
                launch_date: "",
                location: {
                    city: "",
                    country: "",
                    postal_code: "",
                    state_prefix: ""
                },
                media_id: "",
                media_type: 0,
                partner: {
                    logo_url: "",
                    name: "",
                    type: ""
                },
                status: 0,
                team: {
                    media_type: 0,
                    name: "",
                    public_attributions: !1,
                    status: 0,
                    team_pic_url: ""
                },
                url: "",
                user_first_name: "",
                user_id: 0,
                user_last_name: "",
                user_profile_url: "",
                visible_in_search: !1
            },
            comments: [],
            counts: {
                amount_raised_unattributed: 0,
                campaign_hearts: 0,
                number_of_donations_unattributed: 0,
                social_share_total: 0,
                total_co_photos: 0,
                total_comments: 0,
                total_community_photos: 0,
                total_donations: 0,
                total_photos: 0,
                total_unique_donors: 0,
                total_updates: 0
            },
            donations: [],
            identity: [],
            photos: [],
            team_members: [],
            top_supporters: {
                most_recent_donor: void 0,
                top_donor: void 0,
                first_donor: void 0
            },
            topDonations: [],
            updates: [],
            velocity: (o = {}, o[u.VelocityType.RECENT_DONATIONS] = {
                total: 0
            }, o)
        };
        a.default = c.default((function(e, a) {
            var n;
            switch (a.type) {
            case i.default.SIGN_OUT_SUCCESS:
                return t(t({}, e), {
                    identity: []
                });
            case s.default.APPEND_CAMPAIGN_ROLES:
                return (null === (n = a.payload) || void 0 === n ? void 0 : n[0]) ? t(t({}, e), {
                    campaignlite_roles: t(t({}, e.campaignlite_roles), {
                        is_team_member: !0
                    }),
                    campaign_ids: t(t({}, e.campaign_ids), {
                        tm_id: a.payload[0].team_member_id
                    })
                }) : t({}, e);
            case s.default.GET_FEED_UPDATES_SUCCESS:
                return t(t({}, e), {
                    updates: l.merge(e.updates, a.payload.references.updates, (function(e) {
                        return e.id
                    })).sort(l.createdAtDesc)
                });
            case s.default.GET_FEED_PHOTOS_SUCCESS:
                return t(t({}, e), {
                    photos: l.merge(e.photos, a.payload.references.photos, (function(e) {
                        return e.id
                    }))
                });
            case s.default.GET_FEED_TEAM_MEMBERS_SUCCESS:
                return t(t({}, e), {
                    team_members: l.merge(e.team_members, a.payload.references.team_members, (function(e) {
                        return e.person_id
                    })).sort(l.createdAtDesc)
                });
            case s.default.GET_FEED_DONATIONS_SUCCESS:
            case s.default.GET_FEED_DONATIONS_UPDATE:
                return t(t({}, e), {
                    donations: l.merge(e.donations, a.payload.references.donations, (function(e) {
                        return e.donation_id
                    })).sort(l.createdAtDesc)
                });
            case s.default.GET_FEED_CHECKOUT_UPDATE:
                return t(t({}, e), {
                    donations: l.merge(e.donations, a.payload.references.donations, (function(e) {
                        return e.checkout_id || 0
                    })).sort(l.createdAtDesc)
                });
            case s.default.GET_FEED_DONATIONS_WITH_LAST_DONATION_SUCCESS:
                return t(t({}, e), {
                    donations: l.merge(e.donations, a.payload.donations, (function(e) {
                        return e.donation_id
                    })).sort(l.createdAtDesc)
                });
            case s.default.GET_FEED_TOP_DONATIONS_SUCCESS:
                return t(t({}, e), {
                    topDonations: a.payload.references.donations
                });
            case s.default.GET_FEED_COMMENTS_SUCCESS:
            case s.default.GET_FEED_COMMENTS_UPDATE:
                return t(t({}, e), {
                    comments: l.merge(e.comments, a.payload.references.contents, (function(e) {
                        return e.ugc_id || e.comment.comment_id
                    })).sort(l.timestampDesc)
                });
            case s.default.GET_FEED_COUNTS_SUCCESS:
                return t(t({}, e), {
                    counts: a.payload.references.counts
                });
            case s.default.GET_FEED_IDENTITY_SUCCESS:
                return t(t({}, e), {
                    identity: a.payload.references.identity
                });
            case s.default.GET_FEED_CAMPAIGN_SUCCESS:
                return t(t({}, e), {
                    campaign: a.payload.references.campaign,
                    donations: l.merge(e.donations, a.payload.references.donations, (function(e) {
                        return e.donation_id
                    })).sort(l.createdAtDesc),
                    team_members: l.merge(e.team_members, a.payload.references.team_members, (function(e) {
                        return e.person_id
                    })).sort(l.createdAtDesc),
                    top_supporters: a.payload.references.top_supporters
                });
            case s.default.GET_FEED_CAMPAIGN_ROLES_SUCCESS:
                return t(t({}, e), {
                    campaign_ids: a.payload.references.ids,
                    campaignlite_roles: a.payload.references.roles
                });
            case s.default.GET_FEED_VELOCITY_SUCCESS:
                return t(t({}, e), {
                    velocity: t(t({}, e.velocity), a.payload.references.velocity)
                });
            case d.default.GET_VIMEO_THUMBNAIL_SUCCESS:
                return t(t({}, e), {
                    campaign_image_url: a.payload
                });
            default:
                return e
            }
        }), a.initialState)
    },
    qqdV: function(e, a, n) {
        "use strict";
        var o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.unknownErrorRoutes = a.notFoundErrorRoutes = void 0;
        var t = n("nkkU"),
            r = n("wDHr"),
            i = n("ClJ3"),
            s = n("+/X+"),
            u = o(n("xl5i")),
            d = o(n("4M3g")),
            l = o(n("/EQP")),
            c = n("o6hd");
        a.notFoundErrorRoutes = [{
            component: s.StandardHeaderConnected,
            routes: [{
                component: i.NoMatch,
                statusCode: 404
            }]
        }],
        a.unknownErrorRoutes = [{
            component: s.StandardHeaderConnected,
            routes: [{
                component: i.UnknownError,
                statusCode: 500
            }]
        }];
        var m = [{
            component: r.CampaignEmbedWidgetConnected,
            exact: !0,
            fetchData: function(e, a) {
                e({
                    payload: {
                        campaignParams: {
                            campaignUrl: a.campaignUrl
                        }
                    },
                    type: d.default.GET_FEED_CAMPAIGN_IN_PROGRESS
                })
            },
            path: "/f/:campaignUrl/widget/:type(small|medium|large)/:text(donate|support|contribute|coffee|appreciate)?"
        }, {
            component: s.CampaignFlowConnected,
            path: "/f/",
            routes: [{
                component: i.PrintPosterPageConnected,
                exact: !0,
                fetchData: function(e, a) {
                    e({
                        payload: a,
                        type: d.default.GET_FEED_CAMPAIGN_IN_PROGRESS
                    })
                },
                path: "/f/:campaignUrl/print"
            }, {
                component: s.CampaignPageHeaderConnected,
                path: "/f/",
                routes: [{
                    component: i.CampaignPageConnected,
                    fetchData: function(e, a) {
                        e({
                            payload: a,
                            type: d.default.GET_FEED_CAMPAIGN_IN_PROGRESS
                        }),
                        e({
                            payload: {
                                fundUrl: a.campaignParams.campaignUrl,
                                shareLocation: c.UtmFromKeys.CAMPAIGN_PAGE,
                                shareType: c.UtmKeys.CAMPAIGN_LINK_TAG,
                                utm: c.getUtm(c.UtmKeys.CAMPAIGN_LINK_TAG, c.UtmFromKeys.CAMPAIGN_PAGE)
                            },
                            type: l.default.GET_SHORTEN_SHARE_UTM_URL_IN_PROGRESS
                        })
                    },
                    path: "/f/:campaignUrl",
                    routes: [{
                        component: r.DonationsPausedModal,
                        dataModalId: "Donation_Paused",
                        path: "/f/:campaignUrl/donations/paused"
                    }, {
                        component: r.SusiModal,
                        dataModalId: "SUSI",
                        path: "/f/:campaignUrl/:page(sign-up|sign-in|forgot-password)/:type(email|facebook-confirm)?",
                        routes: [{
                            component: r.SignUpInitialPartialConnected,
                            exact: !0,
                            path: "/f/:campaignUrl/:page(sign-up)"
                        }, {
                            component: r.SignInInitialPartialConnected,
                            exact: !0,
                            path: "/f/:campaignUrl/:page(sign-in)"
                        }, {
                            component: r.ForgotPasswordPartialConnected,
                            exact: !0,
                            path: "/f/:campaignUrl/:page(forgot-password)"
                        }, {
                            component: r.SignUpEmailFormConnected,
                            path: "/f/:campaignUrl/:page(sign-up)/:type(email)"
                        }]
                    }, {
                        component: r.CampaignImageGalleryConnected,
                        dataModalId: "Gallery",
                        path: "/f/:campaignUrl/:contentType/:contentId?/gallery/:contentIndex(\\d+)?"
                    }, {
                        component: r.TeamMembersModalConnected,
                        dataModalId: "Team",
                        path: "/f/:campaignUrl/team"
                    }, {
                        component: r.CampaignShareModal,
                        dataModalId: "Share",
                        path: "/f/:campaignUrl/share/:type(embed|copyLink)?",
                        routes: [{
                            component: r.CampaignShareActionConnected,
                            exact: !0,
                            path: "/f/:campaignUrl/share"
                        }, {
                            component: r.CampaignEmbedFormConnected,
                            exact: !0,
                            path: "/f/:campaignUrl/share/embed"
                        }, {
                            component: r.CampaignShareActionConnected,
                            exact: !0,
                            path: "/f/:campaignUrl/share/:type(copyLink)"
                        }]
                    }, {
                        component: r.PostDonateModalConnected,
                        dataModalId: "Post_Donate",
                        exact: !0,
                        path: "/f/:campaignUrl/thankyou/:type(comment|share|shareLink)?",
                        routes: [{
                            component: r.PostDonateShareConnected,
                            exact: !0,
                            path: "/f/:campaignUrl/thankyou/:type(share)"
                        }, {
                            component: r.PostDonateCommentConnected,
                            exact: !0,
                            path: "/f/:campaignUrl/thankyou/:type(comment)"
                        }, {
                            component: r.PostDonateShareConnected,
                            exact: !0,
                            path: "/f/:campaignUrl/thankyou/:type(shareLink)"
                        }]
                    }, {
                        component: r.CampaignDonationsModalConnected,
                        dataModalId: "Donation",
                        exact: !0,
                        path: "/f/:campaignUrl/donations"
                    }, {
                        component: r.CampaignTopDonationsModalConnected,
                        dataModalId: "Donation",
                        exact: !0,
                        path: "/f/:campaignUrl/topdonations"
                    }, {
                        component: r.CompetitorWarningModalConnected,
                        exact: !0,
                        path: "/f/:campaignUrl/warning"
                    }],
                    statusCode: 200
                }, {
                    component: i.NoMatch,
                    statusCode: 404
                }]
            }]
        }, {
            component: s.SRPHeaderConnected,
            path: "/s/",
            routes: [{
                component: i.SearchResultsPageConnected,
                path: "/s/",
                routes: [{
                    component: r.SusiModal,
                    dataModalId: "SUSI",
                    path: "/s/:page(sign-up|sign-in|forgot-password)/:type(email|facebook-confirm)?",
                    routes: [{
                        component: r.SignUpInitialPartialConnected,
                        exact: !0,
                        path: "/s/:page(sign-up)"
                    }, {
                        component: r.SignInInitialPartialConnected,
                        exact: !0,
                        path: "/s/:page(sign-in)"
                    }, {
                        component: r.ForgotPasswordPartialConnected,
                        exact: !0,
                        path: "/s/:page(forgot-password)"
                    }, {
                        component: r.SignUpEmailFormConnected,
                        path: "/s/:page(sign-up)/:type(email)"
                    }]
                }]
            }]
        }, {
            component: s.StandardHeaderConnected,
            path: "/contact/suggest",
            routes: [{
                component: s.ContactFlow,
                fetchData: function(e, a) {
                    var n;
                    e({
                        type: u.default.GET_CONTACT_SUGGESTIONS_IN_PROGRESS,
                        payload: null === (n = null == a ? void 0 : a.queryParams) || void 0 === n ? void 0 : n.forceFlow
                    }),
                    e({
                        type: u.default.GET_CONTACT_METHOD_AUDIENCE_IN_PROGRESS
                    })
                },
                path: "/contact/suggest/:form?",
                routes: [{
                    component: t.SwitchRoutes,
                    path: "/contact/suggest/:form?",
                    routes: [{
                        component: i.ContactSentPage,
                        path: "/contact/suggest/:form(sent)"
                    }, {
                        component: i.ContactAnsweredPage,
                        path: "/contact/suggest/:form(answered)"
                    }, {
                        component: r.ContactFormBenePartialConnected,
                        path: "/contact/suggest/:form(bene)"
                    }, {
                        component: r.ContactFormDefaultPartialConnected,
                        path: "/contact/suggest/:form(default)"
                    }, {
                        component: r.ContactFormDonorPartialConnected,
                        path: "/contact/suggest/:form(donor)"
                    }, {
                        component: r.ContactFormFraudPartialConnected,
                        path: "/contact/suggest/:form(fraud)"
                    }, {
                        component: r.ContactFormJournalistPartialConnected,
                        path: "/contact/suggest/:form(journalist)"
                    }, {
                        component: r.ContactSuggestPartialConnected,
                        path: "/contact/suggest/:form?"
                    }]
                }, {
                    component: r.ContactSelfServiceModalConnected,
                    path: "/contact/suggest/:form?/actions/:code"
                }, {
                    component: r.SusiModal,
                    path: "/contact/suggest/:form?/:page(sign-in|forgot-password)",
                    routes: [{
                        component: r.SignInInitialPartialConnected,
                        exact: !0,
                        path: "/contact/suggest/:form?/:page(sign-in)"
                    }, {
                        component: r.ForgotPasswordPartialConnected,
                        exact: !0,
                        path: "/contact/suggest/:form?/:page(forgot-password)"
                    }]
                }]
            }]
        }];
        a.default = m
    },
    r6Is: function(e, a, n) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.setFacebookIdForPerson = a.resetPassword = void 0;
        var o = n("kLb9"),
            t = "https://api." + n("8QVh").getDomain() + "/person/v1";
        a.resetPassword = function(e) {
            var a = t + "/reset_password";
            return o.HttpClient.post(a, e)
        };
        a.setFacebookIdForPerson = function(e) {
            var a = t + "/account/facebook";
            return o.HttpClient.post(a, e)
        }
    },
    tUEs: function(e, a, n) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.PhoneCodesIntl = a.parsePhonePrefix = void 0;
        var o = [{
            prefix: "1",
            text: "United States",
            value: "United States"
        }, {
            prefix: "1",
            text: "Canada",
            value: "Canada"
        }, {
            prefix: "93",
            text: "Afghanistan (‫افغانستان‬‎)",
            value: "Afghanistan (‫افغانستان‬‎)"
        }, {
            prefix: "355",
            text: "Albania (Shqipëri)",
            value: "Albania (Shqipëri)"
        }, {
            prefix: "213",
            text: "Algeria (‫الجزائر‬‎)",
            value: "Algeria (‫الجزائر‬‎)"
        }, {
            prefix: "1684",
            text: "American Samoa",
            value: "American Samoa"
        }, {
            prefix: "376",
            text: "Andorra",
            value: "Andorra"
        }, {
            prefix: "244",
            text: "Angola",
            value: "Angola"
        }, {
            prefix: "1264",
            text: "Anguilla",
            value: "Anguilla"
        }, {
            prefix: "1268",
            text: "Antigua and Barbuda",
            value: "Antigua and Barbuda"
        }, {
            prefix: "54",
            text: "Argentina",
            value: "Argentina"
        }, {
            prefix: "374",
            text: "Armenia (Հայաստան)",
            value: "Armenia (Հայաստան)"
        }, {
            prefix: "297",
            text: "Aruba",
            value: "Aruba"
        }, {
            prefix: "61",
            text: "Australia",
            value: "Australia"
        }, {
            prefix: "43",
            text: "Austria (Österreich)",
            value: "Austria (Österreich)"
        }, {
            prefix: "994",
            text: "Azerbaijan (Azərbaycan)",
            value: "Azerbaijan (Azərbaycan)"
        }, {
            prefix: "1242",
            text: "Bahamas",
            value: "Bahamas"
        }, {
            prefix: "973",
            text: "Bahrain (‫البحرين‬‎)",
            value: "Bahrain (‫البحرين‬‎)"
        }, {
            prefix: "880",
            text: "Bangladesh (বাংলাদেশ)",
            value: "Bangladesh (বাংলাদেশ)"
        }, {
            prefix: "1246",
            text: "Barbados",
            value: "Barbados"
        }, {
            prefix: "375",
            text: "Belarus (Беларусь)",
            value: "Belarus (Беларусь)"
        }, {
            prefix: "32",
            text: "Belgium (België)",
            value: "Belgium (België)"
        }, {
            prefix: "501",
            text: "Belize",
            value: "Belize"
        }, {
            prefix: "229",
            text: "Benin (Bénin)",
            value: "Benin (Bénin)"
        }, {
            prefix: "1441",
            text: "Bermuda",
            value: "Bermuda"
        }, {
            prefix: "975",
            text: "Bhutan (འབྲུག)",
            value: "Bhutan (འབྲུག)"
        }, {
            prefix: "591",
            text: "Bolivia",
            value: "Bolivia"
        }, {
            prefix: "387",
            text: "Bosnia and Herzegovina (Босна и Херцеговина)",
            value: "Bosnia and Herzegovina (Босна и Херцеговина)"
        }, {
            prefix: "267",
            text: "Botswana",
            value: "Botswana"
        }, {
            prefix: "55",
            text: "Brazil (Brasil)",
            value: "Brazil (Brasil)"
        }, {
            prefix: "246",
            text: "British Indian Ocean Territory",
            value: "British Indian Ocean Territory"
        }, {
            prefix: "1284",
            text: "British Virgin Islands",
            value: "British Virgin Islands"
        }, {
            prefix: "673",
            text: "Brunei",
            value: "Brunei"
        }, {
            prefix: "359",
            text: "Bulgaria (България)",
            value: "Bulgaria (България)"
        }, {
            prefix: "226",
            text: "Burkina Faso",
            value: "Burkina Faso"
        }, {
            prefix: "257",
            text: "Burundi (Uburundi)",
            value: "Burundi (Uburundi)"
        }, {
            prefix: "855",
            text: "Cambodia (កម្ពុជា)",
            value: "Cambodia (កម្ពុជា)"
        }, {
            prefix: "237",
            text: "Cameroon (Cameroun)",
            value: "Cameroon (Cameroun)"
        }, {
            prefix: "1",
            text: "Canada",
            value: "Canada"
        }, {
            prefix: "238",
            text: "Cape Verde (Kabu Verdi)",
            value: "Cape Verde (Kabu Verdi)"
        }, {
            prefix: "599",
            text: "Caribbean Netherlands",
            value: "Caribbean Netherlands"
        }, {
            prefix: "1345",
            text: "Cayman Islands",
            value: "Cayman Islands"
        }, {
            prefix: "236",
            text: "Central African Republic (République centrafricaine)",
            value: "Central African Republic (République centrafricaine)"
        }, {
            prefix: "235",
            text: "Chad (Tchad)",
            value: "Chad (Tchad)"
        }, {
            prefix: "56",
            text: "Chile",
            value: "Chile"
        }, {
            prefix: "86",
            text: "China (中国)",
            value: "China (中国)"
        }, {
            prefix: "61",
            text: "Christmas Island",
            value: "Christmas Island"
        }, {
            prefix: "61",
            text: "Cocos (Keeling) Islands",
            value: "Cocos (Keeling) Islands"
        }, {
            prefix: "57",
            text: "Colombia",
            value: "Colombia"
        }, {
            prefix: "269",
            text: "Comoros (‫جزر القمر‬‎)",
            value: "Comoros (‫جزر القمر‬‎)"
        }, {
            prefix: "243",
            text: "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)",
            value: "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)"
        }, {
            prefix: "242",
            text: "Congo (Republic) (Congo-Brazzaville)",
            value: "Congo (Republic) (Congo-Brazzaville)"
        }, {
            prefix: "682",
            text: "Cook Islands",
            value: "Cook Islands"
        }, {
            prefix: "506",
            text: "Costa Rica",
            value: "Costa Rica"
        }, {
            prefix: "225",
            text: "Côte d’Ivoire",
            value: "Côte d’Ivoire"
        }, {
            prefix: "385",
            text: "Croatia (Hrvatska)",
            value: "Croatia (Hrvatska)"
        }, {
            prefix: "53",
            text: "Cuba",
            value: "Cuba"
        }, {
            prefix: "599",
            text: "Curaçao",
            value: "Curaçao"
        }, {
            prefix: "357",
            text: "Cyprus (Κύπρος)",
            value: "Cyprus (Κύπρος)"
        }, {
            prefix: "420",
            text: "Czech Republic (Česká republika)",
            value: "Czech Republic (Česká republika)"
        }, {
            prefix: "45",
            text: "Denmark (Danmark)",
            value: "Denmark (Danmark)"
        }, {
            prefix: "253",
            text: "Djibouti",
            value: "Djibouti"
        }, {
            prefix: "1767",
            text: "Dominica",
            value: "Dominica"
        }, {
            prefix: "1",
            text: "Dominican Republic (República Dominicana)",
            value: "Dominican Republic (República Dominicana)"
        }, {
            prefix: "593",
            text: "Ecuador",
            value: "Ecuador"
        }, {
            prefix: "20",
            text: "Egypt (‫مصر‬‎)",
            value: "Egypt (‫مصر‬‎)"
        }, {
            prefix: "503",
            text: "El Salvador",
            value: "El Salvador"
        }, {
            prefix: "240",
            text: "Equatorial Guinea (Guinea Ecuatorial)",
            value: "Equatorial Guinea (Guinea Ecuatorial)"
        }, {
            prefix: "291",
            text: "Eritrea",
            value: "Eritrea"
        }, {
            prefix: "372",
            text: "Estonia (Eesti)",
            value: "Estonia (Eesti)"
        }, {
            prefix: "251",
            text: "Ethiopia",
            value: "Ethiopia"
        }, {
            prefix: "500",
            text: "Falkland Islands (Islas Malvinas)",
            value: "Falkland Islands (Islas Malvinas)"
        }, {
            prefix: "298",
            text: "Faroe Islands (Føroyar)",
            value: "Faroe Islands (Føroyar)"
        }, {
            prefix: "679",
            text: "Fiji",
            value: "Fiji"
        }, {
            prefix: "358",
            text: "Finland (Suomi)",
            value: "Finland (Suomi)"
        }, {
            prefix: "33",
            text: "France",
            value: "France"
        }, {
            prefix: "594",
            text: "French Guiana (Guyane française)",
            value: "French Guiana (Guyane française)"
        }, {
            prefix: "689",
            text: "French Polynesia (Polynésie française)",
            value: "French Polynesia (Polynésie française)"
        }, {
            prefix: "241",
            text: "Gabon",
            value: "Gabon"
        }, {
            prefix: "220",
            text: "Gambia",
            value: "Gambia"
        }, {
            prefix: "995",
            text: "Georgia (საქართველო)",
            value: "Georgia (საქართველო)"
        }, {
            prefix: "49",
            text: "Germany (Deutschland)",
            value: "Germany (Deutschland)"
        }, {
            prefix: "233",
            text: "Ghana (Gaana)",
            value: "Ghana (Gaana)"
        }, {
            prefix: "350",
            text: "Gibraltar",
            value: "Gibraltar"
        }, {
            prefix: "30",
            text: "Greece (Ελλάδα)",
            value: "Greece (Ελλάδα)"
        }, {
            prefix: "299",
            text: "Greenland (Kalaallit Nunaat)",
            value: "Greenland (Kalaallit Nunaat)"
        }, {
            prefix: "1473",
            text: "Grenada",
            value: "Grenada"
        }, {
            prefix: "590",
            text: "Guadeloupe",
            value: "Guadeloupe"
        }, {
            prefix: "1671",
            text: "Guam",
            value: "Guam"
        }, {
            prefix: "502",
            text: "Guatemala",
            value: "Guatemala"
        }, {
            prefix: "44",
            text: "Guernsey",
            value: "Guernsey"
        }, {
            prefix: "224",
            text: "Guinea (Guinée)",
            value: "Guinea (Guinée)"
        }, {
            prefix: "245",
            text: "Guinea-Bissau (Guiné Bissau)",
            value: "Guinea-Bissau (Guiné Bissau)"
        }, {
            prefix: "592",
            text: "Guyana",
            value: "Guyana"
        }, {
            prefix: "509",
            text: "Haiti",
            value: "Haiti"
        }, {
            prefix: "504",
            text: "Honduras",
            value: "Honduras"
        }, {
            prefix: "852",
            text: "Hong Kong (香港)",
            value: "Hong Kong (香港)"
        }, {
            prefix: "36",
            text: "Hungary (Magyarország)",
            value: "Hungary (Magyarország)"
        }, {
            prefix: "354",
            text: "Iceland (Ísland)",
            value: "Iceland (Ísland)"
        }, {
            prefix: "91",
            text: "India (भारत)",
            value: "India (भारत)"
        }, {
            prefix: "62",
            text: "Indonesia",
            value: "Indonesia"
        }, {
            prefix: "98",
            text: "Iran (‫ایران‬‎)",
            value: "Iran (‫ایران‬‎)"
        }, {
            prefix: "964",
            text: "Iraq (‫العراق‬‎)",
            value: "Iraq (‫العراق‬‎)"
        }, {
            prefix: "353",
            text: "Ireland",
            value: "Ireland"
        }, {
            prefix: "44",
            text: "Isle of Man",
            value: "Isle of Man"
        }, {
            prefix: "972",
            text: "Israel (‫ישראל‬‎)",
            value: "Israel (‫ישראל‬‎)"
        }, {
            prefix: "39",
            text: "Italy (Italia)",
            value: "Italy (Italia)"
        }, {
            prefix: "1876",
            text: "Jamaica",
            value: "Jamaica"
        }, {
            prefix: "81",
            text: "Japan (日本)",
            value: "Japan (日本)"
        }, {
            prefix: "44",
            text: "Jersey",
            value: "Jersey"
        }, {
            prefix: "962",
            text: "Jordan (‫الأردن‬‎)",
            value: "Jordan (‫الأردن‬‎)"
        }, {
            prefix: "7",
            text: "Kazakhstan (Казахстан)",
            value: "Kazakhstan (Казахстан)"
        }, {
            prefix: "254",
            text: "Kenya",
            value: "Kenya"
        }, {
            prefix: "686",
            text: "Kiribati",
            value: "Kiribati"
        }, {
            prefix: "383",
            text: "Kosovo",
            value: "Kosovo"
        }, {
            prefix: "965",
            text: "Kuwait (‫الكويت‬‎)",
            value: "Kuwait (‫الكويت‬‎)"
        }, {
            prefix: "996",
            text: "Kyrgyzstan (Кыргызстан)",
            value: "Kyrgyzstan (Кыргызстан)"
        }, {
            prefix: "856",
            text: "Laos (ລາວ)",
            value: "Laos (ລາວ)"
        }, {
            prefix: "371",
            text: "Latvia (Latvija)",
            value: "Latvia (Latvija)"
        }, {
            prefix: "961",
            text: "Lebanon (‫لبنان‬‎)",
            value: "Lebanon (‫لبنان‬‎)"
        }, {
            prefix: "266",
            text: "Lesotho",
            value: "Lesotho"
        }, {
            prefix: "231",
            text: "Liberia",
            value: "Liberia"
        }, {
            prefix: "218",
            text: "Libya (‫ليبيا‬‎)",
            value: "Libya (‫ليبيا‬‎)"
        }, {
            prefix: "423",
            text: "Liechtenstein",
            value: "Liechtenstein"
        }, {
            prefix: "370",
            text: "Lithuania (Lietuva)",
            value: "Lithuania (Lietuva)"
        }, {
            prefix: "352",
            text: "Luxembourg",
            value: "Luxembourg"
        }, {
            prefix: "853",
            text: "Macau (澳門)",
            value: "Macau (澳門)"
        }, {
            prefix: "389",
            text: "Macedonia (FYROM) (Македонија)",
            value: "Macedonia (FYROM) (Македонија)"
        }, {
            prefix: "261",
            text: "Madagascar (Madagasikara)",
            value: "Madagascar (Madagasikara)"
        }, {
            prefix: "265",
            text: "Malawi",
            value: "Malawi"
        }, {
            prefix: "60",
            text: "Malaysia",
            value: "Malaysia"
        }, {
            prefix: "960",
            text: "Maldives",
            value: "Maldives"
        }, {
            prefix: "223",
            text: "Mali",
            value: "Mali"
        }, {
            prefix: "356",
            text: "Malta",
            value: "Malta"
        }, {
            prefix: "692",
            text: "Marshall Islands",
            value: "Marshall Islands"
        }, {
            prefix: "596",
            text: "Martinique",
            value: "Martinique"
        }, {
            prefix: "222",
            text: "Mauritania (‫موريتانيا‬‎)",
            value: "Mauritania (‫موريتانيا‬‎)"
        }, {
            prefix: "230",
            text: "Mauritius (Moris)",
            value: "Mauritius (Moris)"
        }, {
            prefix: "262",
            text: "Mayotte",
            value: "Mayotte"
        }, {
            prefix: "52",
            text: "Mexico (México)",
            value: "Mexico (México)"
        }, {
            prefix: "691",
            text: "Micronesia",
            value: "Micronesia"
        }, {
            prefix: "373",
            text: "Moldova (Republica Moldova)",
            value: "Moldova (Republica Moldova)"
        }, {
            prefix: "377",
            text: "Monaco",
            value: "Monaco"
        }, {
            prefix: "976",
            text: "Mongolia (Монгол)",
            value: "Mongolia (Монгол)"
        }, {
            prefix: "382",
            text: "Montenegro (Crna Gora)",
            value: "Montenegro (Crna Gora)"
        }, {
            prefix: "1664",
            text: "Montserrat",
            value: "Montserrat"
        }, {
            prefix: "212",
            text: "Morocco (‫المغرب‬‎)",
            value: "Morocco (‫المغرب‬‎)"
        }, {
            prefix: "258",
            text: "Mozambique (Moçambique)",
            value: "Mozambique (Moçambique)"
        }, {
            prefix: "95",
            text: "Myanmar (Burma) (မြန်မာ)",
            value: "Myanmar (Burma) (မြန်မာ)"
        }, {
            prefix: "264",
            text: "Namibia (Namibië)",
            value: "Namibia (Namibië)"
        }, {
            prefix: "674",
            text: "Nauru",
            value: "Nauru"
        }, {
            prefix: "977",
            text: "Nepal (नेपाल)",
            value: "Nepal (नेपाल)"
        }, {
            prefix: "31",
            text: "Netherlands (Nederland)",
            value: "Netherlands (Nederland)"
        }, {
            prefix: "687",
            text: "New Caledonia (Nouvelle-Calédonie)",
            value: "New Caledonia (Nouvelle-Calédonie)"
        }, {
            prefix: "64",
            text: "New Zealand",
            value: "New Zealand"
        }, {
            prefix: "505",
            text: "Nicaragua",
            value: "Nicaragua"
        }, {
            prefix: "227",
            text: "Niger (Nijar)",
            value: "Niger (Nijar)"
        }, {
            prefix: "234",
            text: "Nigeria",
            value: "Nigeria"
        }, {
            prefix: "683",
            text: "Niue",
            value: "Niue"
        }, {
            prefix: "672",
            text: "Norfolk Island",
            value: "Norfolk Island"
        }, {
            prefix: "850",
            text: "North Korea (조선 민주주의 인민 공화국)",
            value: "North Korea (조선 민주주의 인민 공화국)"
        }, {
            prefix: "1670",
            text: "Northern Mariana Islands",
            value: "Northern Mariana Islands"
        }, {
            prefix: "47",
            text: "Norway (Norge)",
            value: "Norway (Norge)"
        }, {
            prefix: "968",
            text: "Oman (‫عُمان‬‎)",
            value: "Oman (‫عُمان‬‎)"
        }, {
            prefix: "92",
            text: "Pakistan (‫پاکستان‬‎)",
            value: "Pakistan (‫پاکستان‬‎)"
        }, {
            prefix: "680",
            text: "Palau",
            value: "Palau"
        }, {
            prefix: "970",
            text: "Palestine (‫فلسطين‬‎)",
            value: "Palestine (‫فلسطين‬‎)"
        }, {
            prefix: "507",
            text: "Panama (Panamá)",
            value: "Panama (Panamá)"
        }, {
            prefix: "675",
            text: "Papua New Guinea",
            value: "Papua New Guinea"
        }, {
            prefix: "595",
            text: "Paraguay",
            value: "Paraguay"
        }, {
            prefix: "51",
            text: "Peru (Perú)",
            value: "Peru (Perú)"
        }, {
            prefix: "63",
            text: "Philippines",
            value: "Philippines"
        }, {
            prefix: "48",
            text: "Poland (Polska)",
            value: "Poland (Polska)"
        }, {
            prefix: "351",
            text: "Portugal",
            value: "Portugal"
        }, {
            prefix: "1",
            text: "Puerto Rico",
            value: "Puerto Rico"
        }, {
            prefix: "974",
            text: "Qatar (‫قطر‬‎)",
            value: "Qatar (‫قطر‬‎)"
        }, {
            prefix: "262",
            text: "Réunion (La Réunion)",
            value: "Réunion (La Réunion)"
        }, {
            prefix: "40",
            text: "Romania (România)",
            value: "Romania (România)"
        }, {
            prefix: "7",
            text: "Russia (Россия)",
            value: "Russia (Россия)"
        }, {
            prefix: "250",
            text: "Rwanda",
            value: "Rwanda"
        }, {
            prefix: "590",
            text: "Saint Barthélemy (Saint-Barthélemy)",
            value: "Saint Barthélemy (Saint-Barthélemy)"
        }, {
            prefix: "290",
            text: "Saint Helena",
            value: "Saint Helena"
        }, {
            prefix: "1869",
            text: "Saint Kitts and Nevis",
            value: "Saint Kitts and Nevis"
        }, {
            prefix: "1758",
            text: "Saint Lucia",
            value: "Saint Lucia"
        }, {
            prefix: "590",
            text: "Saint Martin (Saint-Martin (partie française))",
            value: "Saint Martin (Saint-Martin (partie française))"
        }, {
            prefix: "508",
            text: "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)",
            value: "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)"
        }, {
            prefix: "1784",
            text: "Saint Vincent and the Grenadines",
            value: "Saint Vincent and the Grenadines"
        }, {
            prefix: "685",
            text: "Samoa",
            value: "Samoa"
        }, {
            prefix: "378",
            text: "San Marino",
            value: "San Marino"
        }, {
            prefix: "239",
            text: "São Tomé and Príncipe (São Tomé e Príncipe)",
            value: "São Tomé and Príncipe (São Tomé e Príncipe)"
        }, {
            prefix: "966",
            text: "Saudi Arabia (‫المملكة العربية السعودية‬‎)",
            value: "Saudi Arabia (‫المملكة العربية السعودية‬‎)"
        }, {
            prefix: "221",
            text: "Senegal (Sénégal)",
            value: "Senegal (Sénégal)"
        }, {
            prefix: "381",
            text: "Serbia (Србија)",
            value: "Serbia (Србија)"
        }, {
            prefix: "248",
            text: "Seychelles",
            value: "Seychelles"
        }, {
            prefix: "232",
            text: "Sierra Leone",
            value: "Sierra Leone"
        }, {
            prefix: "65",
            text: "Singapore",
            value: "Singapore"
        }, {
            prefix: "1721",
            text: "Sint Maarten",
            value: "Sint Maarten"
        }, {
            prefix: "421",
            text: "Slovakia (Slovensko)",
            value: "Slovakia (Slovensko)"
        }, {
            prefix: "386",
            text: "Slovenia (Slovenija)",
            value: "Slovenia (Slovenija)"
        }, {
            prefix: "677",
            text: "Solomon Islands",
            value: "Solomon Islands"
        }, {
            prefix: "252",
            text: "Somalia (Soomaaliya)",
            value: "Somalia (Soomaaliya)"
        }, {
            prefix: "27",
            text: "South Africa",
            value: "South Africa"
        }, {
            prefix: "82",
            text: "South Korea (대한민국)",
            value: "South Korea (대한민국)"
        }, {
            prefix: "211",
            text: "South Sudan (‫جنوب السودان‬‎)",
            value: "South Sudan (‫جنوب السودان‬‎)"
        }, {
            prefix: "34",
            text: "Spain (España)",
            value: "Spain (España)"
        }, {
            prefix: "94",
            text: "Sri Lanka (ශ්‍රී ලංකාව)",
            value: "Sri Lanka (ශ්‍රී ලංකාව)"
        }, {
            prefix: "249",
            text: "Sudan (‫السودان‬‎)",
            value: "Sudan (‫السودان‬‎)"
        }, {
            prefix: "597",
            text: "Suriname",
            value: "Suriname"
        }, {
            prefix: "47",
            text: "Svalbard and Jan Mayen",
            value: "Svalbard and Jan Mayen"
        }, {
            prefix: "268",
            text: "Swaziland",
            value: "Swaziland"
        }, {
            prefix: "46",
            text: "Sweden (Sverige)",
            value: "Sweden (Sverige)"
        }, {
            prefix: "41",
            text: "Switzerland (Schweiz)",
            value: "Switzerland (Schweiz)"
        }, {
            prefix: "963",
            text: "Syria (‫سوريا‬‎)",
            value: "Syria (‫سوريا‬‎)"
        }, {
            prefix: "886",
            text: "Taiwan (台灣)",
            value: "Taiwan (台灣)"
        }, {
            prefix: "992",
            text: "Tajikistan",
            value: "Tajikistan"
        }, {
            prefix: "255",
            text: "Tanzania",
            value: "Tanzania"
        }, {
            prefix: "66",
            text: "Thailand (ไทย)",
            value: "Thailand (ไทย)"
        }, {
            prefix: "670",
            text: "Timor-Leste",
            value: "Timor-Leste"
        }, {
            prefix: "228",
            text: "Togo",
            value: "Togo"
        }, {
            prefix: "690",
            text: "Tokelau",
            value: "Tokelau"
        }, {
            prefix: "676",
            text: "Tonga",
            value: "Tonga"
        }, {
            prefix: "1868",
            text: "Trinidad and Tobago",
            value: "Trinidad and Tobago"
        }, {
            prefix: "216",
            text: "Tunisia (‫تونس‬‎)",
            value: "Tunisia (‫تونس‬‎)"
        }, {
            prefix: "90",
            text: "Turkey (Türkiye)",
            value: "Turkey (Türkiye)"
        }, {
            prefix: "993",
            text: "Turkmenistan",
            value: "Turkmenistan"
        }, {
            prefix: "1649",
            text: "Turks and Caicos Islands",
            value: "Turks and Caicos Islands"
        }, {
            prefix: "688",
            text: "Tuvalu",
            value: "Tuvalu"
        }, {
            prefix: "1340",
            text: "U.S. Virgin Islands",
            value: "U.S. Virgin Islands"
        }, {
            prefix: "256",
            text: "Uganda",
            value: "Uganda"
        }, {
            prefix: "380",
            text: "Ukraine (Україна)",
            value: "Ukraine (Україна)"
        }, {
            prefix: "971",
            text: "United Arab Emirates (‫الإمارات العربية المتحدة‬‎)",
            value: "United Arab Emirates (‫الإمارات العربية المتحدة‬‎)"
        }, {
            prefix: "44",
            text: "United Kingdom",
            value: "United Kingdom"
        }, {
            prefix: "1",
            text: "United States",
            value: "United States"
        }, {
            prefix: "598",
            text: "Uruguay",
            value: "Uruguay"
        }, {
            prefix: "998",
            text: "Uzbekistan (Oʻzbekiston)",
            value: "Uzbekistan (Oʻzbekiston)"
        }, {
            prefix: "678",
            text: "Vanuatu",
            value: "Vanuatu"
        }, {
            prefix: "39",
            text: "Vatican City (Città del Vaticano)",
            value: "Vatican City (Città del Vaticano)"
        }, {
            prefix: "58",
            text: "Venezuela",
            value: "Venezuela"
        }, {
            prefix: "84",
            text: "Vietnam (Việt Nam)",
            value: "Vietnam (Việt Nam)"
        }, {
            prefix: "681",
            text: "Wallis and Futuna",
            value: "Wallis and Futuna"
        }, {
            prefix: "212",
            text: "Western Sahara (‫الصحراء الغربية‬‎)",
            value: "Western Sahara (‫الصحراء الغربية‬‎)"
        }, {
            prefix: "967",
            text: "Yemen (‫اليمن‬‎)",
            value: "Yemen (‫اليمن‬‎)"
        }, {
            prefix: "260",
            text: "Zambia",
            value: "Zambia"
        }, {
            prefix: "263",
            text: "Zimbabwe",
            value: "Zimbabwe"
        }, {
            prefix: "358",
            text: "Åland Islands",
            value: "Åland Islands"
        }];
        a.PhoneCodesIntl = o;
        var t,
            r = (t = new Map, o.forEach((function(e) {
                return t.set(e.text, e)
            })), t);
        a.parsePhonePrefix = function(e) {
            var a;
            return r.has(e) ? null === (a = r.get(e)) || void 0 === a ? void 0 : a.prefix : void 0
        }
    },
    uIqA: function(e, a, n) {
        "use strict";
        var o = this && this.__assign || function() {
                return (o = Object.assign || function(e) {
                    for (var a, n = 1, o = arguments.length; n < o; n++)
                        for (var t in a = arguments[n])
                            Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
                    return e
                }).apply(this, arguments)
            },
            t = this && this.__createBinding || (Object.create ? function(e, a, n, o) {
                void 0 === o && (o = n),
                Object.defineProperty(e, o, {
                    enumerable: !0,
                    get: function() {
                        return a[n]
                    }
                })
            } : function(e, a, n, o) {
                void 0 === o && (o = n),
                e[o] = a[n]
            }),
            r = this && this.__setModuleDefault || (Object.create ? function(e, a) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: a
                })
            } : function(e, a) {
                e.default = a
            }),
            i = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var a = {};
                if (null != e)
                    for (var n in e)
                        Object.hasOwnProperty.call(e, n) && t(a, e, n);
                return r(a, e), a
            },
            s = this && this.__generator || function(e, a) {
                var n,
                    o,
                    t,
                    r,
                    i = {
                        label: 0,
                        sent: function() {
                            if (1 & t[0])
                                throw t[1];
                            return t[1]
                        },
                        trys: [],
                        ops: []
                    };
                return r = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;
                function s(r) {
                    return function(s) {
                        return function(r) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; i;)
                                try {
                                    if (n = 1, o && (t = 2 & r[0] ? o.return : r[0] ? o.throw || ((t = o.return) && t.call(o), 0) : o.next) && !(t = t.call(o, r[1])).done)
                                        return t;
                                    switch (o = 0, t && (r = [2 & r[0], t.value]), r[0]) {
                                    case 0:
                                    case 1:
                                        t = r;
                                        break;
                                    case 4:
                                        return i.label++, {
                                            value: r[1],
                                            done: !1
                                        };
                                    case 5:
                                        i.label++,
                                        o = r[1],
                                        r = [0];
                                        continue;
                                    case 7:
                                        r = i.ops.pop(),
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(t = i.trys, (t = t.length > 0 && t[t.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === r[0] && (!t || r[1] > t[0] && r[1] < t[3])) {
                                            i.label = r[1];
                                            break
                                        }
                                        if (6 === r[0] && i.label < t[1]) {
                                            i.label = t[1],
                                            t = r;
                                            break
                                        }
                                        if (t && i.label < t[2]) {
                                            i.label = t[2],
                                            i.ops.push(r);
                                            break
                                        }
                                        t[2] && i.ops.pop(),
                                        i.trys.pop();
                                        continue
                                    }
                                    r = a.call(e, i)
                                } catch (s) {
                                    r = [6, s],
                                    o = 0
                                } finally {
                                    n = t = 0
                                }
                            if (5 & r[0])
                                throw r[1];
                            return {
                                value: r[0] ? r[1] : void 0,
                                done: !0
                            }
                        }([r, s])
                    }
                }
            },
            u = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.workDegradedState = a.workVelocity = a.workIdentity = a.workComments = a.workTopDonations = a.workTeamMembers = a.workDonationsWithLastDonation = a.workDonations = a.workPhotos = a.workUpdates = a.workCounts = a.workCampaignRoles = a.workCampaign = a.watchVelocity = a.watchTopDonations = a.watchCampaignRoles = a.watchIdentity = a.watchDonationsWithLastDonation = a.watchDonations = a.watchComments = a.watchTeamMembers = a.watchPhotos = a.watchUpdates = a.watchCounts = a.watchCampaign = void 0;
        var d = n("0aCL"),
            l = i(n("4M3g")),
            c = n("Cge7"),
            m = n("jzel"),
            p = u(n("EcZt")),
            h = n("SKg/"),
            f = u(n("IsI7")),
            g = n("QtxA"),
            y = n("6M7q"),
            v = n("K9qA"),
            b = n("5rFJ");
        function S(e) {
            var a,
                n,
                o,
                t,
                r;
            return s(this, (function(i) {
                switch (i.label) {
                case 0:
                    return i.trys.push([0, 6, , 8]), [4, b.call(m.getCampaign, e.payload)];
                case 1:
                    return a = i.sent(), n = a.status, o = a.data, 301 !== n ? [3, 3] : (r = {
                        redirect: {
                            originalUrl: o.original_url,
                            redirectUrl: o.redirect_url,
                            shouldRedirect: !0
                        }
                    }, [4, b.put({
                        payload: r,
                        type: f.default.SET_GLOBALS
                    })]);
                case 2:
                    return i.sent(), [3, 5];
                case 3:
                    return Array.isArray(o.references.campaign) && (o.references.campaign = o.references.campaign[0]), [4, b.put({
                        payload: o,
                        type: l.default.GET_FEED_CAMPAIGN_SUCCESS
                    })];
                case 4:
                    i.sent(),
                    i.label = 5;
                case 5:
                    return [3, 8];
                case 6:
                    return t = i.sent(), b.call(m.logServerSideError, t), r = m.handleServiceError(t), [4, b.put({
                        payload: r,
                        type: l.default.GET_FEED_CAMPAIGN_FAILURE
                    })];
                case 7:
                    return i.sent(), [3, 8];
                case 8:
                    return [2]
                }
            }))
        }
        function w(e) {
            var a,
                n,
                o,
                t;
            return s(this, (function(r) {
                switch (r.label) {
                case 0:
                    return r.trys.push([0, 3, , 5]), [4, b.call(m.getCounts, e.payload)];
                case 1:
                    return a = r.sent(), n = a.data, [4, b.put({
                        payload: n,
                        type: l.default.GET_FEED_COUNTS_SUCCESS
                    })];
                case 2:
                    return r.sent(), [3, 5];
                case 3:
                    return o = r.sent(), t = m.handleServiceError(o), [4, b.put({
                        payload: t,
                        type: l.default.GET_FEED_COUNTS_FAILURE
                    })];
                case 4:
                    return r.sent(), [3, 5];
                case 5:
                    return [2]
                }
            }))
        }
        function C(e) {
            var a,
                n,
                o,
                t;
            return s(this, (function(r) {
                switch (r.label) {
                case 0:
                    return r.trys.push([0, 3, , 5]), [4, b.call(m.getCampaignVelocity, e.payload)];
                case 1:
                    return a = r.sent(), n = a.data, [4, b.put({
                        payload: n,
                        type: l.default.GET_FEED_VELOCITY_SUCCESS
                    })];
                case 2:
                    return r.sent(), [3, 5];
                case 3:
                    return o = r.sent(), t = m.handleServiceError(o), [4, b.put({
                        payload: t,
                        type: l.default.GET_FEED_VELOCITY_FAILURE
                    })];
                case 4:
                    return r.sent(), [3, 5];
                case 5:
                    return [2]
                }
            }))
        }
        function _(e) {
            var a,
                n,
                o,
                t;
            return s(this, (function(r) {
                switch (r.label) {
                case 0:
                    return r.trys.push([0, 3, , 5]), [4, b.call(m.getUpdates, e.payload)];
                case 1:
                    return a = r.sent(), n = a.data, [4, b.put({
                        payload: n,
                        type: l.default.GET_FEED_UPDATES_SUCCESS
                    })];
                case 2:
                    return r.sent(), [3, 5];
                case 3:
                    return o = r.sent(), t = m.handleServiceError(o), [4, b.put({
                        payload: t,
                        type: l.default.GET_FEED_UPDATES_FAILURE
                    })];
                case 4:
                    return r.sent(), [3, 5];
                case 5:
                    return [2]
                }
            }))
        }
        function P(e) {
            var a,
                n,
                t,
                r;
            return s(this, (function(i) {
                switch (i.label) {
                case 0:
                    return i.trys.push([0, 3, , 5]), [4, b.call(m.getPhotos, e.payload)];
                case 1:
                    return a = i.sent(), n = a.data, [4, b.put({
                        payload: o(o({}, n), {
                            photoType: e.payload.photoType
                        }),
                        type: l.default.GET_FEED_PHOTOS_SUCCESS
                    })];
                case 2:
                    return i.sent(), [3, 5];
                case 3:
                    return t = i.sent(), r = m.handleServiceError(t), [4, b.put({
                        payload: r,
                        type: l.default.GET_FEED_PHOTOS_FAILURE
                    })];
                case 4:
                    return i.sent(), [3, 5];
                case 5:
                    return [2]
                }
            }))
        }
        function E(e) {
            var a,
                n,
                o,
                t;
            return s(this, (function(r) {
                switch (r.label) {
                case 0:
                    return r.trys.push([0, 3, , 5]), [4, b.call(m.getTeamMembers, e.payload)];
                case 1:
                    return a = r.sent(), n = a.data, [4, b.put({
                        payload: n,
                        type: l.default.GET_FEED_TEAM_MEMBERS_SUCCESS
                    })];
                case 2:
                    return r.sent(), [3, 5];
                case 3:
                    return o = r.sent(), t = m.handleServiceError(o), [4, b.put({
                        payload: t,
                        type: l.default.GET_FEED_TEAM_MEMBERS_FAILURE
                    })];
                case 4:
                    return r.sent(), [3, 5];
                case 5:
                    return [2]
                }
            }))
        }
        function k(e) {
            var a,
                n,
                o,
                t,
                r,
                i,
                u;
            return s(this, (function(s) {
                switch (s.label) {
                case 0:
                    return s.trys.push([0, 4, , 6]), [4, b.call(m.getDonations, e.payload)];
                case 1:
                    return a = s.sent(), [4, b.select(h.getFeedMetaState)];
                case 2:
                    return n = s.sent(), o = a.data, t = n.campaign, r = g.getLastDonation(e.payload.campaignUrl), v.canUseLocalStorage() && (0 === e.payload.offset && r && r.donation_id && t.last_updated_at && y.storeDonation(e.payload.campaignUrl, r, t.last_updated_at), e.payload.offset && 0 !== e.payload.offset || (o.references.donations = y.getDonationListFromFeedWithLocalStorage(e.payload.campaignUrl, o.references.donations, t.last_updated_at))), [4, b.put({
                        payload: o,
                        type: l.default.GET_FEED_DONATIONS_SUCCESS
                    })];
                case 3:
                    return s.sent(), [3, 6];
                case 4:
                    return i = s.sent(), u = m.handleServiceError(i), [4, b.put({
                        payload: u,
                        type: l.default.GET_FEED_DONATIONS_FAILURE
                    })];
                case 5:
                    return s.sent(), [3, 6];
                case 6:
                    return [2]
                }
            }))
        }
        function F(e) {
            var a,
                n,
                o,
                t,
                r,
                i,
                u,
                m,
                f;
            return s(this, (function(s) {
                switch (s.label) {
                case 0:
                    return [4, b.select(c.getFeedState)];
                case 1:
                    return a = s.sent(), [4, b.select(h.getFeedMetaState)];
                case 2:
                    return n = s.sent(), o = a.donations, t = n.campaign, (r = g.getLastDonation(e.payload)) && r.donation_id && (y.storeDonation(e.payload, r, t.last_updated_at), g.removeLastDonationCookie(e.payload)), i = y.getCheckoutIdsOfEmptyDonationId(e.payload), u = "", i.length ? [4, b.call(d.getBigWebDonationIdFromUC, i)] : [3, 4];
                case 3:
                    m = s.sent(),
                    (f = m.data) && i.forEach((function(a) {
                        a && f[a] && f[a].donation_id && (y.updateDonation(e.payload, f[a].donation_id, {
                            checkout_id: a
                        }, t.last_updated_at), u = f[a].signed_donation_id)
                    })),
                    s.label = 4;
                case 4:
                    return u ? [4, b.put({
                        payload: encodeURIComponent(u),
                        type: p.default.GET_RECEIPT_FROM_ENCRYPTED_DONATION_ID
                    })] : [3, 6];
                case 5:
                    s.sent(),
                    s.label = 6;
                case 6:
                    return [4, b.put({
                        payload: {
                            donations: y.getDonationListFromFeedWithLocalStorage(e.payload, o, t.last_updated_at)
                        },
                        type: l.default.GET_FEED_DONATIONS_WITH_LAST_DONATION_SUCCESS
                    })];
                case 7:
                    return s.sent(), [2]
                }
            }))
        }
        function T(e) {
            var a,
                n,
                o,
                t;
            return s(this, (function(r) {
                switch (r.label) {
                case 0:
                    return r.trys.push([0, 3, , 5]), [4, b.call(m.getDonations, e.payload)];
                case 1:
                    return a = r.sent(), n = a.data, [4, b.put({
                        payload: n,
                        type: l.default.GET_FEED_TOP_DONATIONS_SUCCESS
                    })];
                case 2:
                    return r.sent(), [3, 5];
                case 3:
                    return o = r.sent(), t = m.handleServiceError(o), [4, b.put({
                        payload: t,
                        type: l.default.GET_FEED_TOP_DONATIONS_FAILURE
                    })];
                case 4:
                    return r.sent(), [3, 5];
                case 5:
                    return [2]
                }
            }))
        }
        function A(e) {
            var a,
                n,
                o,
                t;
            return s(this, (function(r) {
                switch (r.label) {
                case 0:
                    return r.trys.push([0, 3, , 5]), [4, b.call(m.getComments, e.payload)];
                case 1:
                    return a = r.sent(), n = a.data, e.payload.offset && 0 !== e.payload.offset || !n.references.contents || (n.references.contents = y.getCommentsListFromFeed(e.payload.campaignUrl, n.references.contents)), [4, b.put({
                        payload: n,
                        type: l.default.GET_FEED_COMMENTS_SUCCESS
                    })];
                case 2:
                    return r.sent(), [3, 5];
                case 3:
                    return o = r.sent(), t = m.handleServiceError(o), [4, b.put({
                        payload: t,
                        type: l.default.GET_FEED_COMMENTS_FAILURE
                    })];
                case 4:
                    return r.sent(), [3, 5];
                case 5:
                    return [2]
                }
            }))
        }
        function I(e) {
            var a,
                n,
                o,
                t;
            return s(this, (function(e) {
                switch (e.label) {
                case 0:
                    return e.trys.push([0, 3, , 5]), [4, b.call(m.getIdentity)];
                case 1:
                    return a = e.sent(), n = a.data, [4, b.put({
                        payload: n,
                        type: l.default.GET_FEED_IDENTITY_SUCCESS
                    })];
                case 2:
                    return e.sent(), [3, 5];
                case 3:
                    return o = e.sent(), t = m.handleServiceError(o), [4, b.put({
                        payload: t,
                        type: l.default.GET_FEED_IDENTITY_FAILURE
                    })];
                case 4:
                    return e.sent(), [3, 5];
                case 5:
                    return [2]
                }
            }))
        }
        function G(e) {
            var a,
                n,
                o,
                t;
            return s(this, (function(r) {
                switch (r.label) {
                case 0:
                    return r.trys.push([0, 3, , 5]), [4, b.call(m.getCampaignRoles, e.payload)];
                case 1:
                    return a = r.sent(), n = a.data, [4, b.put({
                        payload: n,
                        type: l.default.GET_FEED_CAMPAIGN_ROLES_SUCCESS
                    })];
                case 2:
                    return r.sent(), [3, 5];
                case 3:
                    return o = r.sent(), t = m.handleServiceError(o), [4, b.put({
                        payload: t,
                        type: l.default.GET_FEED_CAMPAIGN_ROLES_FAILURE
                    })];
                case 4:
                    return r.sent(), [3, 5];
                case 5:
                    return [2]
                }
            }))
        }
        function N(e) {
            return s(this, (function(a) {
                switch (a.label) {
                case 0:
                    return e.type in l.degradedStateFeedActionMap ? [4, b.put({
                        payload: {
                            error: "API call supressed due to being in degraded mode"
                        },
                        type: l.degradedStateFeedActionMap[e.type]
                    })] : [3, 2];
                case 1:
                    a.sent(),
                    a.label = 2;
                case 2:
                    return [2]
                }
            }))
        }
        function z() {
            return s(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, b.takeEvery(l.default.GET_FEED_CAMPAIGN_IN_PROGRESS, S)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        function M() {
            return s(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, b.takeEvery(l.default.GET_FEED_VELOCITY_IN_PROGRESS, C)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        function O() {
            return s(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, b.takeEvery(l.default.GET_FEED_COUNTS_IN_PROGRESS, w)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        function D() {
            return s(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, b.takeEvery(l.default.GET_FEED_UPDATES_IN_PROGRESS, _)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        function R() {
            return s(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, b.takeEvery(l.default.GET_FEED_PHOTOS_IN_PROGRESS, P)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        function U() {
            return s(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, b.takeEvery(l.default.GET_FEED_TEAM_MEMBERS_IN_PROGRESS, E)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        function x() {
            return s(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, b.takeEvery(l.default.GET_FEED_COMMENTS_IN_PROGRESS, A)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        function L() {
            return s(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, b.takeEvery(l.default.GET_FEED_DONATIONS_IN_PROGRESS, k)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        function H() {
            return s(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, b.takeEvery(l.default.GET_FEED_DONATIONS_WITH_LAST_DONATION_IN_PROGRESS, F)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        function j() {
            return s(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, b.takeEvery(l.default.GET_FEED_IDENTITY_IN_PROGRESS, I)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        function q() {
            return s(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, b.takeEvery(l.default.GET_FEED_CAMPAIGN_ROLES_IN_PROGRESS, G)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        function B() {
            return s(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, b.takeEvery(l.default.GET_FEED_TOP_DONATIONS_IN_PROGRESS, T)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        function W() {
            return s(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, b.takeEvery(Object.keys(l.degradedStateFeedActionMap), N)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        a.workCampaign = S,
        a.workCounts = w,
        a.workVelocity = C,
        a.workUpdates = _,
        a.workPhotos = P,
        a.workTeamMembers = E,
        a.workDonations = k,
        a.workDonationsWithLastDonation = F,
        a.workTopDonations = T,
        a.workComments = A,
        a.workIdentity = I,
        a.workCampaignRoles = G,
        a.workDegradedState = N,
        a.watchCampaign = z,
        a.watchVelocity = M,
        a.watchCounts = O,
        a.watchUpdates = D,
        a.watchPhotos = R,
        a.watchTeamMembers = U,
        a.watchComments = x,
        a.watchDonations = L,
        a.watchDonationsWithLastDonation = H,
        a.watchIdentity = j,
        a.watchCampaignRoles = q,
        a.watchTopDonations = B,
        a.default = function() {
            return s(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, b.select((function(e) {
                        return c.makeGetInDegradedMode()(e)
                    }))];
                case 1:
                    return e.sent() ? [4, b.all([W(), z(), M(), H(), j()])] : [3, 3];
                case 2:
                    return e.sent(), [3, 5];
                case 3:
                    return [4, b.all([z(), O(), D(), R(), U(), x(), L(), H(), j(), q(), B(), M()])];
                case 4:
                    e.sent(),
                    e.label = 5;
                case 5:
                    return [2]
                }
            }))
        }
    },
    uavh: function(e, a, n) {
        "use strict";
        var o = this && this.__assign || function() {
                return (o = Object.assign || function(e) {
                    for (var a, n = 1, o = arguments.length; n < o; n++)
                        for (var t in a = arguments[n])
                            Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
                    return e
                }).apply(this, arguments)
            },
            t = this && this.__rest || function(e, a) {
                var n = {};
                for (var o in e)
                    Object.prototype.hasOwnProperty.call(e, o) && a.indexOf(o) < 0 && (n[o] = e[o]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var t = 0;
                    for (o = Object.getOwnPropertySymbols(e); t < o.length; t++)
                        a.indexOf(o[t]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[t]) && (n[o[t]] = e[o[t]])
                }
                return n
            },
            r = this && this.__read || function(e, a) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n)
                    return e;
                var o,
                    t,
                    r = n.call(e),
                    i = [];
                try {
                    for (; (void 0 === a || a-- > 0) && !(o = r.next()).done;)
                        i.push(o.value)
                } catch (s) {
                    t = {
                        error: s
                    }
                } finally {
                    try {
                        o && !o.done && (n = r.return) && n.call(r)
                    } finally {
                        if (t)
                            throw t.error
                    }
                }
                return i
            };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.handleServiceError = a.putAction = a.postActions = a.postSmartAnswer = a.getContactMethodAudience = a.getContactSuggestions = a.submitContactForm = a.getZendeskAuthCheck = void 0;
        var i = n("7MwF"),
            s = n("kLb9"),
            u = n("8QVh").getDomain(),
            d = i.isDocker() ? "http://bigweb/api/v1" : "https://funds." + u + "/api/v1";
        a.getZendeskAuthCheck = function() {
            var e = "https://www." + u + "?route=contact/chatAuth";
            return s.HttpClient.get(e, {
                transformResponse: void 0
            })
        },
        a.submitContactForm = function(e) {
            var a = e.files,
                n = t(e, ["files"]),
                o = new FormData;
            return o.append("payload", JSON.stringify(n)), a && Object.entries(a).forEach((function(e) {
                var a = r(e, 2),
                    n = a[0],
                    t = a[1];
                t && o.append(n, t)
            })), s.HttpClient.post(d + "/contact/form", o)
        },
        a.getContactSuggestions = function(e, a) {
            return s.HttpClient.get(d + "/suggest/" + (a || ""), {
                headers: o({
                    "Accept-Language": e
                }, i.isDocker() && {
                    Host: "funds." + u
                })
            })
        },
        a.getContactMethodAudience = function() {
            return s.HttpClient.get(d + "/suggest/audience", {
                headers: o({}, i.isDocker() && {
                    Host: "funds." + u
                })
            })
        },
        a.postSmartAnswer = function(e) {
            return s.HttpClient.post(d + "/suggest", e)
        },
        a.postActions = function(e) {
            return s.HttpClient.post(d + "/shield", e)
        },
        a.putAction = function(e) {
            return s.HttpClient.put(d + "/shield", e)
        },
        a.handleServiceError = function(e) {
            return e && e.response ? e.response.data.error : {
                error: !0
            }
        }
    },
    vNqi: function(e, a, n) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var o = n("uavh"),
            t = n("K9qA"),
            r = function() {
                window.$zopim && $zopim((function() {
                    $zopim.livechat.hideAll()
                }))
            };
        a.default = {
            close: r,
            destroy: function() {
                if (window.$zopim && (r(), delete window.$zopim, t.canUseDom())) {
                    var e = document.getElementById("zopim-js");
                    e && document.head.removeChild(e),
                    document.querySelectorAll(".zopim").forEach((function(e) {
                        e.parentElement && e.parentElement.removeChild(e)
                    }))
                }
            },
            initialize: function(e) {
                var a = e.authenticate,
                    n = e.onLoading,
                    r = e.onLoadFailure,
                    i = e.onLoadSuccess,
                    s = e.onStatus,
                    u = e.onShow,
                    d = e.onHide,
                    l = e.onStart,
                    c = e.onEnd;
                if (t.canUseDom() && !document.getElementById("zopim-js")) {
                    n && n(),
                    window.$zopim = function(e) {
                        return window.$zopim._.push(e)
                    };
                    var m = window.$zopim.s = document.createElement("script");
                    window.$zopim.set = function(e) {
                        return window.$zopim.set._.push(e)
                    },
                    window.$zopim._ = [],
                    window.$zopim.set._ = [],
                    m.id = "zopim-js",
                    m.async = !0,
                    m.setAttribute("charset", "utf-8"),
                    m.src = "https://v2.zopim.com/?47xDnuJPJaRyBiOi43xEK5cDCo4I09B1",
                    a || (m.onload = function() {
                        i && i()
                    }),
                    window.$zopim.t = +new Date,
                    m.type = "text/javascript",
                    document.head.appendChild(m),
                    a && $zopim((function() {
                        $zopim.livechat.authenticate({
                            jwtFn: function(e) {
                                o.getZendeskAuthCheck().then((function(a) {
                                    var n = a.data;
                                    n ? (e(n), i && i()) : r && r()
                                }))
                            }
                        })
                    }))
                }
                window.$zopim && $zopim((function() {
                    s && $zopim.livechat.setOnStatus(s),
                    u && $zopim.livechat.window.onShow(u),
                    d && $zopim.livechat.window.onHide(d),
                    l && $zopim.livechat.setOnChatStart(l),
                    c && $zopim.livechat.setOnChatEnd(c)
                }))
            },
            minimize: function() {
                window.$zopim && $zopim((function() {
                    $zopim.livechat.window.hide()
                }))
            },
            open: function() {
                window.$zopim && $zopim((function() {
                    $zopim.livechat.window.show()
                }))
            }
        }
    },
    "w6g+": function(e, a, n) {
        "use strict";
        var o = this && this.__generator || function(e, a) {
                var n,
                    o,
                    t,
                    r,
                    i = {
                        label: 0,
                        sent: function() {
                            if (1 & t[0])
                                throw t[1];
                            return t[1]
                        },
                        trys: [],
                        ops: []
                    };
                return r = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;
                function s(r) {
                    return function(s) {
                        return function(r) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; i;)
                                try {
                                    if (n = 1, o && (t = 2 & r[0] ? o.return : r[0] ? o.throw || ((t = o.return) && t.call(o), 0) : o.next) && !(t = t.call(o, r[1])).done)
                                        return t;
                                    switch (o = 0, t && (r = [2 & r[0], t.value]), r[0]) {
                                    case 0:
                                    case 1:
                                        t = r;
                                        break;
                                    case 4:
                                        return i.label++, {
                                            value: r[1],
                                            done: !1
                                        };
                                    case 5:
                                        i.label++,
                                        o = r[1],
                                        r = [0];
                                        continue;
                                    case 7:
                                        r = i.ops.pop(),
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(t = i.trys, (t = t.length > 0 && t[t.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === r[0] && (!t || r[1] > t[0] && r[1] < t[3])) {
                                            i.label = r[1];
                                            break
                                        }
                                        if (6 === r[0] && i.label < t[1]) {
                                            i.label = t[1],
                                            t = r;
                                            break
                                        }
                                        if (t && i.label < t[2]) {
                                            i.label = t[2],
                                            i.ops.push(r);
                                            break
                                        }
                                        t[2] && i.ops.pop(),
                                        i.trys.pop();
                                        continue
                                    }
                                    r = a.call(e, i)
                                } catch (s) {
                                    r = [6, s],
                                    o = 0
                                } finally {
                                    n = t = 0
                                }
                            if (5 & r[0])
                                throw r[1];
                            return {
                                value: r[0] ? r[1] : void 0,
                                done: !0
                            }
                        }([r, s])
                    }
                }
            },
            t = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.workGetVimeoThumnail = void 0;
        var r = t(n("PTAX")),
            i = n("Gt3u"),
            s = n("5rFJ");
        function u(e) {
            var a,
                n,
                t;
            return o(this, (function(o) {
                switch (o.label) {
                case 0:
                    return o.trys.push([0, 3, , 5]), [4, s.call(i.getVimeoThumbnail, e.payload)];
                case 1:
                    return a = o.sent(), n = a.data, [4, s.put({
                        payload: n[0].thumbnail_large,
                        type: r.default.GET_VIMEO_THUMBNAIL_SUCCESS
                    })];
                case 2:
                    return o.sent(), [3, 5];
                case 3:
                    return t = o.sent(), [4, s.put({
                        payload: t.response,
                        type: r.default.GET_VIMEO_THUMBNAIL_FAILURE
                    })];
                case 4:
                    return o.sent(), [3, 5];
                case 5:
                    return [2]
                }
            }))
        }
        function d() {
            return o(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, s.takeEvery(r.default.GET_VIMEO_THUMBNAIL_IN_PROGRESS, u)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        a.workGetVimeoThumnail = u,
        a.default = function() {
            return o(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, s.all([d()])];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
    },
    wNP3: function(e, a, n) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.device = a.referringDomain = a.browser = a.getOs = a.isInstagramWebView = a.isYelpWebView = a.isFacebookBrowser = a.isAndroid = a.getUserAgent = a.hasUserAgent = void 0;
        var o = !1;
        function t() {
            return "undefined" != typeof navigator && navigator.userAgent
        }
        function r() {
            return !o && t() && (o = navigator.userAgent.toLowerCase()), o
        }
        a.hasUserAgent = t,
        a.getUserAgent = r,
        a.isAndroid = function() {
            try {
                var e = r();
                return !!e && !!e.match(/android/)
            } catch (a) {
                return !1
            }
        },
        a.isFacebookBrowser = function() {
            try {
                var e = r();
                return !!e && !!e.match(/fban|fbav|fb_iab/)
            } catch (a) {
                return !1
            }
        },
        a.isYelpWebView = function() {
            try {
                var e = r();
                return !!e && !!e.match(/yelpwebview|yelpapp/i)
            } catch (a) {
                return !1
            }
        },
        a.isInstagramWebView = function() {
            try {
                var e = r();
                return !!e && !!e.match(/instagram/i)
            } catch (a) {
                return !1
            }
        },
        a.getOs = function() {
            var e = navigator.userAgent;
            return /Windows/i.test(e) ? /Phone/.test(e) ? "Windows Mobile" : "Windows" : /(iPhone|iPad|iPod)/.test(e) ? "iOS" : /Android/.test(e) ? "Android" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : /Mac/i.test(e) ? "Mac OS X" : /Linux/.test(e) ? "Linux" : ""
        },
        a.browser = function() {
            var e = navigator.vendor || "",
                a = navigator.userAgent;
            return -1 !== a.indexOf("Opera") ? -1 !== a.indexOf("Mini") ? "Opera Mini" : "Opera" : /(BlackBerry|PlayBook|BB10)/i.test(a) ? "BlackBerry" : /fban|fbav/i.test(a) ? "Facebook Mobile" : /(edge|edgios|edga|edg)/i.test(a) ? "Edge" : -1 !== a.indexOf("Chrome") ? "Chrome" : -1 !== a.indexOf("CriOS") ? "Chrome iOS" : -1 !== e.indexOf("Apple") ? -1 !== a.indexOf("Mobile") ? "Mobile Safari" : "Safari" : -1 !== a.indexOf("Android") ? "Android Mobile" : -1 !== a.indexOf("Konqueror") ? "Konqueror" : -1 !== a.indexOf("Firefox") ? "Firefox" : -1 !== a.indexOf("MSIE") || -1 !== a.indexOf("Trident/") ? "Internet Explorer" : -1 !== a.indexOf("Gecko") ? "Mozilla" : ""
        },
        a.referringDomain = function() {
            var e = document.referrer.split("/");
            return e.length >= 3 ? e[2] : ""
        },
        a.device = function() {
            var e = navigator.userAgent;
            return /iPad/.test(e) ? "iPad" : /iPod/.test(e) ? "iPod Touch" : /iPhone/.test(e) ? "iPhone" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : /Windows Phone/i.test(e) ? "Windows Phone" : /Android/.test(e) ? "Android" : ""
        }
    },
    wmfR: function(e, a, n) {
        "use strict";
        var o = this && this.__createBinding || (Object.create ? function(e, a, n, o) {
                void 0 === o && (o = n),
                Object.defineProperty(e, o, {
                    enumerable: !0,
                    get: function() {
                        return a[n]
                    }
                })
            } : function(e, a, n, o) {
                void 0 === o && (o = n),
                e[o] = a[n]
            }),
            t = this && this.__exportStar || function(e, a) {
                for (var n in e)
                    "default" === n || a.hasOwnProperty(n) || o(a, e, n)
            };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(n("wNP3"), a)
    },
    xl5i: function(e, a, n) {
        "use strict";
        var o;
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        function(e) {
            e.SETUP_ZENDESK_SDK_SUCCESS = "SETUP_ZENDESK_SDK_SUCCESS",
            e.SETUP_ZENDESK_SDK_IN_PROGRESS = "SETUP_ZENDESK_SDK_IN_PROGRESS",
            e.SETUP_ZENDESK_SDK_FAILURE = "SETUP_ZENDESK_SDK_FAILURE",
            e.SET_ZENDESK_WINDOW = "SET_ZENDESK_WINDOW",
            e.SET_ZENDESK_STATUS = "SET_ZENDESK_STATUS",
            e.POST_CONTACT_FORM_SUCCESS = "POST_CONTACT_FORM_SUCCESS",
            e.POST_CONTACT_FORM_IN_PROGRESS = "POST_CONTACT_FORM_IN_PROGRESS",
            e.POST_CONTACT_FORM_FAILURE = "POST_CONTACT_SAMPLE_FAILURE",
            e.GET_CONTACT_SUGGESTIONS_SUCCESS = "GET_CONTACT_SUGGESTIONS_SUCCESS",
            e.GET_CONTACT_SUGGESTIONS_IN_PROGRESS = "GET_CONTACT_SUGGESTIONS_IN_PROGRESS",
            e.GET_CONTACT_SUGGESTIONS_FAILURE = "GET_CONTACT_SUGGESTIONS_FAILURE",
            e.GET_CONTACT_METHOD_AUDIENCE_SUCCESS = "GET_CONTACT_METHOD_AUDIENCE_SUCCESS",
            e.GET_CONTACT_METHOD_AUDIENCE_IN_PROGRESS = "GET_CONTACT_METHOD_AUDIENCE_IN_PROGRESS",
            e.GET_CONTACT_METHOD_AUDIENCE_FAILURE = "GET_CONTACT_METHOD_AUDIENCE_FAILURE",
            e.SELECT_CONTACT_SUGGESTION = "SELECT_CONTACT_SUGGESTION",
            e.JUMP_TO_SUGGESTION = "JUMP_TO_SUGGESTION",
            e.SET_SELECTED_SUGGESTIONS = "SET_SELECTED_SUGGESTIONS",
            e.POST_CONTACT_SMART_ANSWER_SUCCESS = "POST_CONTACT_SMART_ANSWER_SUCCESS",
            e.POST_CONTACT_SMART_ANSWER_IN_PROGRESS = "POST_CONTACT_SMART_ANSWER_IN_PROGRESS",
            e.POST_CONTACT_SMART_ANSWER_FAILURE = "POST_CONTACT_SMART_ANSWER_FAILURE",
            e.POST_SHIELD_ACTIONS_SUCCESS = "POST_SHIELD_ACTIONS_SUCCESS",
            e.POST_SHIELD_ACTIONS_IN_PROGRESS = "POST_SHIELD_ACTIONS_IN_PROGRESS",
            e.POST_SHIELD_ACTIONS_FAILURE = "POST_SHIELD_ACTIONS_FAILURE",
            e.PUT_SHIELD_ACTION_SUCCESS = "PUT_SHIELD_ACTION_SUCCESS",
            e.PUT_SHIELD_ACTION_IN_PROGRESS = "PUT_SHIELD_ACTION_IN_PROGRESS",
            e.PUT_SHIELD_ACTION_FAILURE = "PUT_SHIELD_ACTION_FAILURE"
        }(o || (o = {})),
        a.default = o
    },
    xucP: function(e, a, n) {
        "use strict";
        var o = this && this.__assign || function() {
                return (o = Object.assign || function(e) {
                    for (var a, n = 1, o = arguments.length; n < o; n++)
                        for (var t in a = arguments[n])
                            Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
                    return e
                }).apply(this, arguments)
            },
            t = this && this.__read || function(e, a) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n)
                    return e;
                var o,
                    t,
                    r = n.call(e),
                    i = [];
                try {
                    for (; (void 0 === a || a-- > 0) && !(o = r.next()).done;)
                        i.push(o.value)
                } catch (s) {
                    t = {
                        error: s
                    }
                } finally {
                    try {
                        o && !o.done && (n = r.return) && n.call(r)
                    } finally {
                        if (t)
                            throw t.error
                    }
                }
                return i
            },
            r = this && this.__spread || function() {
                for (var e = [], a = 0; a < arguments.length; a++)
                    e = e.concat(t(arguments[a]));
                return e
            },
            i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.initialState = void 0;
        var s = i(n("xl5i")),
            u = n("C0Xu"),
            d = i(n("V/h/"));
        a.initialState = {
            actions: [],
            chatAudience: u.Audience.SIGNED_IN,
            chatReady: !1,
            chatStatus: "offline",
            chatWindow: "closed",
            emailAudience: u.Audience.ALL,
            isLoadingActions: !1,
            selected: [0],
            smartAnswerSuccess: void 0,
            suggestions: {}
        };
        a.default = d.default((function(e, a) {
            switch (a.type) {
            case s.default.SET_ZENDESK_WINDOW:
                return o(o({}, e), {
                    chatWindow: a.payload
                });
            case s.default.SET_ZENDESK_STATUS:
                return o(o({}, e), {
                    chatStatus: a.payload
                });
            case s.default.SETUP_ZENDESK_SDK_FAILURE:
            case s.default.SETUP_ZENDESK_SDK_IN_PROGRESS:
                return o(o({}, e), {
                    chatReady: !1,
                    chatStatus: "offline",
                    chatWindow: "closed"
                });
            case s.default.SETUP_ZENDESK_SDK_SUCCESS:
                return o(o({}, e), {
                    chatReady: !0
                });
            case s.default.POST_CONTACT_SMART_ANSWER_IN_PROGRESS:
            case s.default.POST_CONTACT_SMART_ANSWER_FAILURE:
                return o(o({}, e), {
                    smartAnswerSuccess: void 0
                });
            case s.default.POST_CONTACT_SMART_ANSWER_SUCCESS:
                return o(o({}, e), {
                    smartAnswerSuccess: a.payload.message
                });
            case s.default.GET_CONTACT_SUGGESTIONS_SUCCESS:
                return o(o({}, e), {
                    suggestions: a.payload.nodes
                });
            case s.default.GET_CONTACT_METHOD_AUDIENCE_SUCCESS:
                return o(o({}, e), a.payload);
            case s.default.SELECT_CONTACT_SUGGESTION:
                var n = e.selected.slice(0, a.payload.index + 1);
                return o(o({}, e), {
                    selected: a.payload.id ? r(n, [a.payload.id]) : n,
                    smartAnswerSuccess: void 0
                });
            case s.default.SET_SELECTED_SUGGESTIONS:
                return o(o({}, e), {
                    selected: a.payload
                });
            case s.default.POST_SHIELD_ACTIONS_IN_PROGRESS:
                return o(o({}, e), {
                    isLoadingActions: !0
                });
            case s.default.POST_SHIELD_ACTIONS_FAILURE:
                return o(o({}, e), {
                    isLoadingActions: !1
                });
            case s.default.POST_SHIELD_ACTIONS_SUCCESS:
                return o(o({}, e), {
                    actions: a.payload.actions,
                    isLoadingActions: !1
                });
            case s.default.PUT_SHIELD_ACTION_SUCCESS:
                return o(o({}, e), {
                    actions: e.actions.filter((function(e) {
                        return e.code !== a.payload.ruleCode
                    }))
                });
            default:
                return e
            }
        }), a.initialState)
    },
    xxPb: function(e, a, n) {
        "use strict";
        var o = this && this.__generator || function(e, a) {
                var n,
                    o,
                    t,
                    r,
                    i = {
                        label: 0,
                        sent: function() {
                            if (1 & t[0])
                                throw t[1];
                            return t[1]
                        },
                        trys: [],
                        ops: []
                    };
                return r = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;
                function s(r) {
                    return function(s) {
                        return function(r) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; i;)
                                try {
                                    if (n = 1, o && (t = 2 & r[0] ? o.return : r[0] ? o.throw || ((t = o.return) && t.call(o), 0) : o.next) && !(t = t.call(o, r[1])).done)
                                        return t;
                                    switch (o = 0, t && (r = [2 & r[0], t.value]), r[0]) {
                                    case 0:
                                    case 1:
                                        t = r;
                                        break;
                                    case 4:
                                        return i.label++, {
                                            value: r[1],
                                            done: !1
                                        };
                                    case 5:
                                        i.label++,
                                        o = r[1],
                                        r = [0];
                                        continue;
                                    case 7:
                                        r = i.ops.pop(),
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(t = i.trys, (t = t.length > 0 && t[t.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === r[0] && (!t || r[1] > t[0] && r[1] < t[3])) {
                                            i.label = r[1];
                                            break
                                        }
                                        if (6 === r[0] && i.label < t[1]) {
                                            i.label = t[1],
                                            t = r;
                                            break
                                        }
                                        if (t && i.label < t[2]) {
                                            i.label = t[2],
                                            i.ops.push(r);
                                            break
                                        }
                                        t[2] && i.ops.pop(),
                                        i.trys.pop();
                                        continue
                                    }
                                    r = a.call(e, i)
                                } catch (s) {
                                    r = [6, s],
                                    o = 0
                                } finally {
                                    n = t = 0
                                }
                            if (5 & r[0])
                                throw r[1];
                            return {
                                value: r[0] ? r[1] : void 0,
                                done: !0
                            }
                        }([r, s])
                    }
                }
            },
            t = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = t(n("5Pqh")),
            i = n("5rFJ");
        a.default = function() {
            return o(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, i.all([r.default()])];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
    },
    y4Uw: function(e, a, n) {
        "use strict";
        var o = this && this.__createBinding || (Object.create ? function(e, a, n, o) {
                void 0 === o && (o = n),
                Object.defineProperty(e, o, {
                    enumerable: !0,
                    get: function() {
                        return a[n]
                    }
                })
            } : function(e, a, n, o) {
                void 0 === o && (o = n),
                e[o] = a[n]
            }),
            t = this && this.__exportStar || function(e, a) {
                for (var n in e)
                    "default" === n || a.hasOwnProperty(n) || o(a, e, n)
            };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        t(n("tUEs"), a)
    },
    yzoo: function(e, a, n) {
        "use strict";
        var o = this && this.__generator || function(e, a) {
                var n,
                    o,
                    t,
                    r,
                    i = {
                        label: 0,
                        sent: function() {
                            if (1 & t[0])
                                throw t[1];
                            return t[1]
                        },
                        trys: [],
                        ops: []
                    };
                return r = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;
                function s(r) {
                    return function(s) {
                        return function(r) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; i;)
                                try {
                                    if (n = 1, o && (t = 2 & r[0] ? o.return : r[0] ? o.throw || ((t = o.return) && t.call(o), 0) : o.next) && !(t = t.call(o, r[1])).done)
                                        return t;
                                    switch (o = 0, t && (r = [2 & r[0], t.value]), r[0]) {
                                    case 0:
                                    case 1:
                                        t = r;
                                        break;
                                    case 4:
                                        return i.label++, {
                                            value: r[1],
                                            done: !1
                                        };
                                    case 5:
                                        i.label++,
                                        o = r[1],
                                        r = [0];
                                        continue;
                                    case 7:
                                        r = i.ops.pop(),
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(t = i.trys, (t = t.length > 0 && t[t.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === r[0] && (!t || r[1] > t[0] && r[1] < t[3])) {
                                            i.label = r[1];
                                            break
                                        }
                                        if (6 === r[0] && i.label < t[1]) {
                                            i.label = t[1],
                                            t = r;
                                            break
                                        }
                                        if (t && i.label < t[2]) {
                                            i.label = t[2],
                                            i.ops.push(r);
                                            break
                                        }
                                        t[2] && i.ops.pop(),
                                        i.trys.pop();
                                        continue
                                    }
                                    r = a.call(e, i)
                                } catch (s) {
                                    r = [6, s],
                                    o = 0
                                } finally {
                                    n = t = 0
                                }
                            if (5 & r[0])
                                throw r[1];
                            return {
                                value: r[0] ? r[1] : void 0,
                                done: !0
                            }
                        }([r, s])
                    }
                }
            },
            t = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.workRedirectRouterPush = a.workSetLocaleCookie = void 0;
        var r = t(n("A9kC")),
            i = n("GSDO"),
            s = n("K9qA"),
            u = n("5rFJ");
        function d(e) {
            var a;
            return o(this, (function(n) {
                switch (n.label) {
                case 0:
                    return n.trys.push([0, 3, , 5]), [4, u.call(i.setLocaleCookie, e.payload)];
                case 1:
                    return n.sent(), s.canUseDom() && document.location.reload(), [4, u.put({
                        payload: {},
                        type: r.default.SET_LOCALE_COOKIE_SUCCESS
                    })];
                case 2:
                    return n.sent(), [3, 5];
                case 3:
                    return a = n.sent(), [4, u.put({
                        payload: a.response,
                        type: r.default.SET_LOCALE_COOKIE_FAILURE
                    })];
                case 4:
                    return n.sent(), [3, 5];
                case 5:
                    return [2]
                }
            }))
        }
        function l(e) {
            e.payload.isPush && e.payload.history ? e.payload.history.push(e.payload.link) : window.location.href = e.payload.link
        }
        function c() {
            return o(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, u.takeEvery(r.default.SET_LOCALE_COOKIE_IN_PROGRESS, d)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        function m() {
            return o(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, u.takeEvery(r.default.REDIRECT_ROUTER_PUSH, l)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        a.workSetLocaleCookie = d,
        a.workRedirectRouterPush = l,
        a.default = function() {
            return o(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, u.all([c(), m()])];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
    },
    zIs9: function(e, a, n) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.SmallTextOptions = a.CopyStatus = a.guidanceCardIcon = a.GfmColor = a.PersonType = a.AlertType = void 0,
        function(e) {
            e.COOKIE = "cookie",
            e.ERROR = "error",
            e.INFO = "info",
            e.SUCCESS = "success",
            e.WARNING = "warning"
        }(a.AlertType || (a.AlertType = {})),
        function(e) {
            e.BENEFICIARY = "beneficiary",
            e.ORGANIZER = "organizer",
            e.TEAM_MEMBER = "team_member"
        }(a.PersonType || (a.PersonType = {})),
        function(e) {
            e.GREEN = "green",
            e.PURPLE = "purple",
            e.BLUE = "blue",
            e.GOLD = "gold"
        }(a.GfmColor || (a.GfmColor = {})),
        function(e) {
            e.COMMENT = "comment",
            e.DONATE = "donate",
            e.FACEBOOK = "facebook",
            e.JOIN = "join",
            e.MANAGE = "manage",
            e.PROFILE = "profile",
            e.RECEIPT = "receipt",
            e.SHARE = "share",
            e.WIDGET = "widget"
        }(a.guidanceCardIcon || (a.guidanceCardIcon = {})),
        function(e) {
            e.failure = "failure",
            e.none = "none",
            e.success = "success"
        }(a.CopyStatus || (a.CopyStatus = {})),
        function(e) {
            e.DONATE = "donate",
            e.SUPPORT = "support",
            e.CONTRIBUTE = "contribute",
            e.COFFEE = "coffee",
            e.APPRECIATE = "appreciate"
        }(a.SmallTextOptions || (a.SmallTextOptions = {}))
    },
    zMi6: function(e, a, n) {
        "use strict";
        var o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.updateRelativeTime = a.setMoment = a.setDonationRelativeTime = a.resetDefaultRelativeTime = a.timeAgo = a.diffFromNow = a.diff = a.dateInInputZone = a.calendar = void 0;
        var t = o(n("wd/R"));
        n("tGlX"),
        n("Oaa7"),
        n("iYuL"),
        n("nyYc"),
        n("bpih"),
        n("+s0g"),
        n("0tRk");
        var r = n("wE+H"),
            i = n("VU+c"),
            s = n("YgTb"),
            u = {
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
        function d(e, a) {
            l(a);
            var n = t.default(e).calendar(void 0, {
                lastDay: "[Yesterday]",
                lastWeek: "LL",
                sameDay: "[Today]",
                sameElse: "LL"
            });
            return "Today" === n ? s.t("Today") : "Yesterday" === n ? s.t("Yesterday") : n
        }
        function l(e) {
            var a = Object.values(r.SupportedLocales).includes(e) ? e : r.SupportedLocales.ENGLISH_US,
                n = i.getLocaleObject(a),
                o = n.language,
                s = n.country,
                d = n.locale,
                l = u[o];
            switch (l && t.default.updateLocale(o, {
                relativeTime: l
            }), o) {
            case "en":
                if ("US" !== s) {
                    t.default.locale(d.bcp47);
                    break
                }
                t.default.updateLocale(o, {
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
                t.default.locale(o);
                break;
            case "pt":
                t.default.locale(d.bcp47);
                break;
            default:
                t.default.locale(o)
            }
        }
        function c(e) {
            for (var a in e)
                e[a] && t.default.relativeTimeThreshold(a, e[a])
        }
        a.dateInInputZone = function(e, a) {
            return l(a), d(t.default.parseZone(e), a)
        },
        a.calendar = d,
        a.timeAgo = function(e, a) {
            return l(a), t.default(e).fromNow()
        },
        a.setMoment = l,
        a.diff = function(e, a, n) {
            return t.default(e).diff(t.default(a), n)
        },
        a.diffFromNow = function(e, a) {
            return t.default().diff(e, a)
        },
        a.updateRelativeTime = c,
        a.resetDefaultRelativeTime = function() {
            t.default.relativeTimeRounding(Math.round),
            c({
                M: 11,
                d: 26,
                h: 22,
                m: 45,
                s: 45
            })
        },
        a.setDonationRelativeTime = function() {
            t.default.relativeTimeRounding(Math.floor),
            c({
                M: 12e3,
                d: 30,
                h: 24,
                m: 60,
                s: 60
            })
        }
    },
    zbJQ: function(e, a, n) {
        "use strict";
        var o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.initialState = void 0;
        var t = o(n("8zSQ")),
            r = o(n("V/h/"));
        a.initialState = {};
        a.default = r.default((function(e, a) {
            switch (a.type) {
            case t.default.OPTIMIZELY_GET_DATAFILE_SUCCESS:
                return a.payload;
            default:
                return e
            }
        }), a.initialState)
    },
    zeWB: function(e, a, n) {
        "use strict";
        var o,
            t,
            r,
            i,
            s,
            u,
            d,
            l = this && this.__assign || function() {
                return (l = Object.assign || function(e) {
                    for (var a, n = 1, o = arguments.length; n < o; n++)
                        for (var t in a = arguments[n])
                            Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
                    return e
                }).apply(this, arguments)
            },
            c = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.initialState = void 0;
        var m = c(n("V/h/")),
            p = c(n("/EQP")),
            h = n("o6hd");
        a.initialState = {
            shortenedShareUtmUrls: (o = {}, o[h.UtmKeys.SMS_ANDROID_SHARESHEET] = (t = {}, t[h.UtmFromKeys.CAMPAIGN_PAGE] = "", t[h.UtmFromKeys.POSTCREATE_CAMPAIGN] = "", t[h.UtmFromKeys.POSTDONATE_MODAL] = "", t), o[h.UtmKeys.EMAIL_ANDROID_SHARESHEET] = (r = {}, r[h.UtmFromKeys.CAMPAIGN_PAGE] = "", r[h.UtmFromKeys.POSTCREATE_CAMPAIGN] = "", r[h.UtmFromKeys.POSTDONATE_MODAL] = "", r), o[h.UtmKeys.PRINT_POSTER] = (i = {}, i[h.UtmFromKeys.CAMPAIGN_PAGE] = "", i[h.UtmFromKeys.POSTDONATE_MODAL] = "", i), o[h.UtmKeys.COPY_LINK_ALL] = (s = {}, s[h.UtmFromKeys.CAMPAIGN_PAGE] = "", s[h.UtmFromKeys.POSTDONATE_MODAL] = "", s), o[h.UtmKeys.TWITTER_SHARE_SHARESHEET] = (u = {}, u[h.UtmFromKeys.CAMPAIGN_PAGE] = "", u[h.UtmFromKeys.POSTDONATE_MODAL] = "", u), o[h.UtmKeys.WHATSAPP_SHARESHEET] = (d = {}, d[h.UtmFromKeys.CAMPAIGN_PAGE] = "", d[h.UtmFromKeys.POSTDONATE_MODAL] = "", d), o)
        };
        a.default = m.default((function(e, a) {
            var n,
                o;
            switch (a.type) {
            case p.default.GET_SHORTEN_SHARE_UTM_URL_SUCCESS:
                var t = a.payload,
                    r = t.shareLocation,
                    i = t.shareType,
                    s = t.shortUrl;
                return l(l({}, e), {
                    shortenedShareUtmUrls: l(l({}, e.shortenedShareUtmUrls), (n = {}, n[i] = l(l({}, e.shortenedShareUtmUrls[i]), (o = {}, o[r] = s, o)), n))
                });
            default:
                return e
            }
        }), a.initialState)
    },
    zr8h: function(e, a, n) {
        "use strict";
        var o = this && this.__assign || function() {
                return (o = Object.assign || function(e) {
                    for (var a, n = 1, o = arguments.length; n < o; n++)
                        for (var t in a = arguments[n])
                            Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
                    return e
                }).apply(this, arguments)
            },
            t = this && this.__generator || function(e, a) {
                var n,
                    o,
                    t,
                    r,
                    i = {
                        label: 0,
                        sent: function() {
                            if (1 & t[0])
                                throw t[1];
                            return t[1]
                        },
                        trys: [],
                        ops: []
                    };
                return r = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;
                function s(r) {
                    return function(s) {
                        return function(r) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; i;)
                                try {
                                    if (n = 1, o && (t = 2 & r[0] ? o.return : r[0] ? o.throw || ((t = o.return) && t.call(o), 0) : o.next) && !(t = t.call(o, r[1])).done)
                                        return t;
                                    switch (o = 0, t && (r = [2 & r[0], t.value]), r[0]) {
                                    case 0:
                                    case 1:
                                        t = r;
                                        break;
                                    case 4:
                                        return i.label++, {
                                            value: r[1],
                                            done: !1
                                        };
                                    case 5:
                                        i.label++,
                                        o = r[1],
                                        r = [0];
                                        continue;
                                    case 7:
                                        r = i.ops.pop(),
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(t = i.trys, (t = t.length > 0 && t[t.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === r[0] && (!t || r[1] > t[0] && r[1] < t[3])) {
                                            i.label = r[1];
                                            break
                                        }
                                        if (6 === r[0] && i.label < t[1]) {
                                            i.label = t[1],
                                            t = r;
                                            break
                                        }
                                        if (t && i.label < t[2]) {
                                            i.label = t[2],
                                            i.ops.push(r);
                                            break
                                        }
                                        t[2] && i.ops.pop(),
                                        i.trys.pop();
                                        continue
                                    }
                                    r = a.call(e, i)
                                } catch (s) {
                                    r = [6, s],
                                    o = 0
                                } finally {
                                    n = t = 0
                                }
                            if (5 & r[0])
                                throw r[1];
                            return {
                                value: r[0] ? r[1] : void 0,
                                done: !0
                            }
                        }([r, s])
                    }
                }
            },
            r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.workGetBatchShortenShareUtmUrl = a.workGetShortenShareUtmUrl = void 0;
        var i = n("8dFL"),
            s = r(n("/EQP")),
            u = n("Cge7"),
            d = n("5rFJ");
        function l(e) {
            var a,
                n,
                r,
                l,
                c,
                m;
            return t(this, (function(t) {
                switch (t.label) {
                case 0:
                    return t.trys.push([0, 7, , 9]), [4, d.select((function(e) {
                        return u.makeGetInDegradedMode()(e)
                    }))];
                case 1:
                    return t.sent() ? (a = e.payload, c = a.shareType, m = a.shareLocation, [4, d.put({
                        payload: {
                            shareType: c,
                            shareLocation: m
                        },
                        type: s.default.GET_SHORTEN_SHARE_UTM_URL_FAIULRE
                    })]) : [3, 3];
                case 2:
                    return t.sent(), [3, 6];
                case 3:
                    return n = e.payload, c = n.shareType, m = n.shareLocation, [4, d.call(i.getShortenShareUtmUrl, e.payload)];
                case 4:
                    return r = t.sent(), [4, d.put({
                        payload: o(o({}, r.data), {
                            shareType: c,
                            shareLocation: m
                        }),
                        type: s.default.GET_SHORTEN_SHARE_UTM_URL_SUCCESS
                    })];
                case 5:
                    t.sent(),
                    t.label = 6;
                case 6:
                    return [3, 9];
                case 7:
                    return t.sent(), l = e.payload, c = l.shareType, m = l.shareLocation, [4, d.put({
                        payload: {
                            shareType: c,
                            shareLocation: m
                        },
                        type: s.default.GET_SHORTEN_SHARE_UTM_URL_FAIULRE
                    })];
                case 8:
                    return t.sent(), [3, 9];
                case 9:
                    return [2]
                }
            }))
        }
        a.workGetShortenShareUtmUrl = l;
        function c(e) {
            var a;
            return t(this, (function(n) {
                switch (n.label) {
                case 0:
                    return n.trys.push([0, 7, , 9]), [4, d.select((function(e) {
                        return u.makeGetInDegradedMode()(e)
                    }))];
                case 1:
                    return n.sent() ? [4, d.all(e.payload.map((function(e) {
                        return d.put({
                            payload: e,
                            type: s.default.GET_SHORTEN_SHARE_UTM_URL_FAIULRE
                        })
                    })))] : [3, 3];
                case 2:
                    return n.sent(), [3, 6];
                case 3:
                    return [4, (r = e.payload.map((function(e) {
                        return d.call(i.getShortenShareUtmUrl, e)
                    })), d.all(r.map((function(e) {
                        return d.call((function() {
                            return t(this, (function(a) {
                                switch (a.label) {
                                case 0:
                                    return a.trys.push([0, 2, , 3]), [4, e];
                                case 1:
                                    return [2, {
                                        error: !1,
                                        result: a.sent()
                                    }];
                                case 2:
                                    return [2, {
                                        error: !0,
                                        result: a.sent()
                                    }];
                                case 3:
                                    return [2]
                                }
                            }))
                        }))
                    }))))];
                case 4:
                    return a = n.sent(), [4, d.all(a.map((function(a, n) {
                        return a.error ? d.put({
                            payload: e.payload[n],
                            type: s.default.GET_SHORTEN_SHARE_UTM_URL_FAIULRE
                        }) : d.put({
                            payload: o(o({}, a.result.data), {
                                shareType: e.payload[n].shareType,
                                shareLocation: e.payload[n].shareLocation
                            }),
                            type: s.default.GET_SHORTEN_SHARE_UTM_URL_SUCCESS
                        })
                    })))];
                case 5:
                    n.sent(),
                    n.label = 6;
                case 6:
                    return [3, 9];
                case 7:
                    return n.sent(), [4, d.all(e.payload.map((function(e) {
                        return d.put({
                            payload: e,
                            type: s.default.GET_SHORTEN_SHARE_UTM_URL_FAIULRE
                        })
                    })))];
                case 8:
                    return n.sent(), [3, 9];
                case 9:
                    return [2]
                }
                var r
            }))
        }
        function m() {
            return t(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, d.takeEvery(s.default.GET_BATCH_SHORTEN_SHARE_UTM_URL_IN_PROGRESS, c)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        function p() {
            return t(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, d.takeEvery(s.default.GET_SHORTEN_SHARE_UTM_URL_IN_PROGRESS, l)];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
        a.workGetBatchShortenShareUtmUrl = c,
        a.default = function() {
            return t(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, d.all([p(), m()])];
                case 1:
                    return e.sent(), [2]
                }
            }))
        }
    }
}, [[4, 5, 6, 7, 18, 19, 9, 8, 11, 16, 10, 12, 14, 13, 15, 17, 2, 1, 3, 4]]]);

