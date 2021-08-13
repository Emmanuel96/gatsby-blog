/*! For license information please see main~acdbeef3.45c7c0beaeecd691c45b.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([[3], {
    "+/X+": function(e, t, a) {
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
            r = this && this.__exportStar || function(e, t) {
                for (var a in e)
                    "default" === a || t.hasOwnProperty(a) || n(t, e, a)
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        r(a("6HEK"), t),
        r(a("KiSu"), t),
        r(a("65fk"), t),
        r(a("crVt"), t),
        r(a("RfmE"), t)
    },
    "+/Ym": function(e, t, a) {
        "use strict";
        a.r(t)
    },
    "+EFV": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("5E+l");
        Object.defineProperty(t, "DonationsPausedModal", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    "+ILQ": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("j0Pi");
        Object.defineProperty(t, "LogoOnlyNav", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    "+VX0": function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a("YgTb"),
            o = n(a("b0lt")),
            l = a("zIs9"),
            i = a("/MKj"),
            u = a("wQmL"),
            s = n(a("8ZbC")),
            c = function(e) {
                return e.location.pathname.replace(/\/?forgot-password$/, "")
            },
            d = u.reduxForm({
                form: "forgotPasswordForm"
            })(s.default);
        t.default = i.connect((function() {
            return function(e, t) {
                var a = r.t("Forgot your password?");
                return "?follow" === t.location.search ? a = r.t("Sign in to follow this fundraiser") : "?comment" === t.location.search && (a = r.t("Sign in to post your comment")), {
                    showSignIn: "?help" !== t.location.search,
                    title: a
                }
            }
        }), (function(e, t) {
            return {
                onClickSignUp: function() {
                    t.history.push(c(t) + "/sign-up" + t.location.search)
                },
                onFailure: function(a) {
                    var n = {};
                    if (a && a.error && a.error.data) {
                        var i = a.error.data;
                        Object.keys(i).forEach((function(e) {
                            n[e] = i[e]
                        }))
                    }
                    Object.keys(n).length ? e(u.stopSubmit("forgotPasswordForm", n)) : e({
                        payload: {
                            message: r.t("An error occurred. Please try again later."),
                            type: l.AlertType.ERROR
                        },
                        type: o.default.DISPLAY_ALERT_CONTENT
                    }),
                    t.history.push(c(t))
                },
                onSuccess: function(a) {
                    e({
                        payload: {
                            message: r.t("Reset instructions sent to {{email}}", {
                                email: a.email
                            }),
                            type: l.AlertType.SUCCESS
                        },
                        type: o.default.DISPLAY_ALERT_CONTENT
                    }),
                    t.history.push(c(t))
                }
            }
        }))(d)
    },
    "/0IU": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("XJrD");
        Object.defineProperty(t, "CreateShareList", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        }),
        Object.defineProperty(t, "CreateShareListProps", {
            enumerable: !0,
            get: function() {
                return n.CreateShareListProps
            }
        })
    },
    "/8pO": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("5c2c");
        Object.defineProperty(t, "ReduxInputField", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    "/EoX": function(e, t, a) {
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
            r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            o = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && n(t, e, a);
                return r(t, e), t
            },
            l = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = l(a("TSYQ")),
            u = o(a("q1tI"));
        a("Cp5M");
        var s = a("z+lN"),
            c = a("LzL2");
        t.default = function(e) {
            var t = e.hit,
                a = e.className,
                n = e.onClick,
                r = e.queryID,
                o = i.default(a, "m-search-result-card");
            return u.default.createElement(c.SearchResultCardBase, {
                className: o,
                onClick: n,
                target: "/f/" + t.url + "?qid=" + r,
                url: t.thumb_img_url,
                details: u.default.createElement(u.Fragment, null, u.default.createElement("div", {
                    className: "m-search-result-card-fundraiser-name truncate-at-two-lines weight-400"
                }, u.default.createElement(s.AlgoliaCustomHighlight, {
                    attribute: "fundname",
                    hit: t
                })), u.default.createElement("div", {
                    className: "truncate-at-two-lines text-small color-gray weight-400"
                }, u.default.createElement(s.AlgoliaCOName, {
                    hit: t
                })))
            })
        }
    },
    "/XBk": function(e, t, a) {
        "use strict";
        var n,
            r = this && this.__extends || (n = function(e, t) {
                return (n = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var a in t)
                        t.hasOwnProperty(a) && (e[a] = t[a])
                })(e, t)
            }, function(e, t) {
                function a() {
                    this.constructor = e
                }
                n(e, t),
                e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, new a)
            }),
            o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = o(a("TSYQ")),
            i = o(a("q1tI")),
            u = a("yf/i"),
            s = a("lx7X"),
            c = a("l2bq"),
            d = a("p1Kg"),
            m = a("YgTb");
        a("tQQ4");
        var f = o(a("IXFp")),
            p = a("i8rK"),
            g = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.showDonationsModal = function() {}, t.captureShowDonationsModal = function(e) {
                        t.showDonationsModal = e
                    }, t
                }
                return r(t, e), t.prototype.render = function() {
                    var e,
                        t = this,
                        a = this.props,
                        n = a.campaignRecentDonationsTotal,
                        r = a.campaignRecentDonationsTotalStr,
                        o = a.campaignStateLabel,
                        g = a.children,
                        h = a.className,
                        y = a.donations,
                        _ = a.donationsModalRoute,
                        b = a.donationsPreview,
                        v = a.donationsPreviewOverflow,
                        E = a.inDegradedMode,
                        S = a.isActive,
                        C = a.isUserInSameStateAsCampaign,
                        O = a.stats,
                        P = a.statsFormatted,
                        I = a.topDonationsModalRoute,
                        k = a.topSupporters,
                        N = a.currentUserDonation,
                        w = a.signedDonationId,
                        T = a.donationListOverflow,
                        M = l.default(h, {
                            "o-campaign-sidebar": !0
                        }),
                        A = E ? m.t("See more") : m.t("See all"),
                        j = o === d.CampaignStatus.TRENDING,
                        x = b && i.default.createElement(c.DonationList, {
                            isCampaignTrending: j,
                            className: "o-campaign-sidebar-donations",
                            items: b
                        }),
                        D = j && k ? i.default.createElement(f.default, {
                            className: "o-campaign-sidebar-donations",
                            topSupporters: k,
                            topDonationsModalRoute: I,
                            donationsModalRoute: _,
                            currentUserDonation: N,
                            signedDonationId: w,
                            donationListOverflow: !!T
                        }) : x,
                        G = (null == b ? void 0 : b.length) || 0,
                        F = i.default.createElement(i.default.Fragment, null, !!G && D, i.default.createElement(p.EarlySupporterCallout, {
                            isActive: S,
                            donationsLength: G,
                            isShort: !!T
                        })),
                        R = i.default.createElement(u.ChipButton, {
                            className: "mt2x",
                            dataElementId: "btn_donate_topdonations",
                            iconName: "star",
                            to: I
                        }, m.t("See top donations")),
                        U = i.default.createElement(u.SecondaryButton, {
                            as: "route",
                            to: _,
                            className: "mt2x",
                            color: "green",
                            dataElementId: "btn_donate_moredonations",
                            size: "small"
                        }, A),
                        L = i.default.createElement("div", {
                            className: "flex-container align-justify"
                        }, U, R),
                        B = i.default.createElement("div", {
                            className: "flex-container align-center"
                        }, U);
                    e = y && y.length >= 10 ? L : y && y.length > 5 || v ? B : i.default.createElement(i.default.Fragment, null);
                    var H = y || b,
                        z = v ? 3 : 6,
                        Y = !!H && H.length >= z,
                        K = function() {
                            var e;
                            (null === (e = t.wrapperDiv) || void 0 === e ? void 0 : e.clientHeight) && Y && (t.wrapperDiv.style.maxHeight = t.wrapperDiv.clientHeight + "px", t.wrapperDiv.style.overflow = "hidden")
                        },
                        q = function(e) {
                            return void 0 === e && (e = !1), i.default.createElement(s.CampaignMetadataIndicator, {
                                willRenderMetadata: e ? K : void 0,
                                recentDonors: n,
                                recentDonorsStr: r,
                                showProximity: C,
                                showVelocity: !!n,
                                totalDonors: O.totalDonors,
                                totalDonorsStr: P.totalDonorsStrNoAbbrev
                            })
                        },
                        V = q(!j || !k);
                    return i.default.createElement("aside", {
                        className: M
                    }, i.default.createElement("div", {
                        className: "o-campaign-sidebar-wrapper"
                    }, g), F && i.default.createElement("div", {
                        className: "show-for-large"
                    }, i.default.createElement("div", {
                        className: "o-campaign-sidebar-wrapper"
                    }, i.default.createElement("div", {
                        ref: function(e) {
                            return e && (t.wrapperDiv = e)
                        }
                    }, i.default.createElement("div", {
                        className: "o-campaign-sidebar-metadata-indicator"
                    }, V), F), e)))
                }, t.defaultProps = {
                    isActive: !0
                }, t
            }(i.default.Component);
        t.default = g
    },
    "/gKo": function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a("/MKj"),
            o = a("wQmL"),
            l = a("Cge7"),
            i = a("ZZcF"),
            u = a("C0Xu"),
            s = a("K9qA"),
            c = a("7OEO"),
            d = n(a("mQjI")),
            m = o.reduxForm({
                enableReinitialize: !0,
                form: u.CONTACT_FORM_FRAUD,
                submitAsSideEffect: !0
            })(d.default);
        t.default = r.connect((function() {
            var e = l.makeGetUserFullName(),
                t = l.makeGetUserEmail(),
                a = i.makeGetReCaptchaBigwebKey(),
                n = s.canUseLocalStorage() ? localStorage.getItem("reportCampaignUrl") : "",
                r = n ? "https://www.gofundme.com/f/" + n : void 0,
                d = o.formValueSelector(u.CONTACT_FORM_FRAUD),
                m = c.makeGetLeafId();
            return function(n, o) {
                return {
                    formTypeId: u.ContactFormType.FRAUD,
                    individual: d(n, "individual"),
                    initialValues: {
                        email: t(n),
                        individual: "",
                        knowsCo: "",
                        name: e(n),
                        phonePrefix: "1",
                        role: "",
                        url: r
                    },
                    knowsCo: d(n, "knowsCo"),
                    leafId: m(n),
                    phonePrefix: d(n, "phonePrefix"),
                    reCaptchaSiteKey: a(n),
                    role: d(n, "role")
                }
            }
        }), (function(e, t) {
            return {
                onSuccess: function() {
                    s.canUseLocalStorage() && localStorage.removeItem("reportCampaignUrl"),
                    t.history.push("/contact/suggest/sent")
                }
            }
        }))(m)
    },
    "/p8D": function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("TSYQ")),
            o = n(a("q1tI")),
            l = a("puIA"),
            i = a("YgTb"),
            u = a("yf/i");
        a("54g5"),
        t.default = function(e) {
            var t = e.className,
                a = e.location,
                n = e.history,
                s = e.match,
                c = e.routes,
                d = "embed" === s.params.type,
                m = r.default(t, "l-share-modal", {
                    "l-share-modal--embed": d
                }),
                f = d ? o.default.createElement(u.Button, {
                    as: "route",
                    to: "/f/" + s.params.campaignUrl + "/share",
                    fill: "solid-sand",
                    size: "small",
                    ariaLabel: "filter"
                }, o.default.createElement(u.UIIcon, {
                    name: "caret-left",
                    textPairing: "prependText"
                }), i.t("Back")) : o.default.createElement(o.default.Fragment, null),
                p = d ? "lb_share_embed" : "lb_share";
            return o.default.createElement(u.Modal, {
                className: m,
                dataViewId: p,
                heading: f,
                isOpen: !0,
                onClose: function() {
                    n.push("/f/" + s.params.campaignUrl + a.search)
                }
            }, c && o.default.createElement(l.Routes, {
                as: "switch",
                config: c
            }))
        }
    },
    "08mE": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("8PAa");
        Object.defineProperty(t, "ReduxSelectField", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    "0AWV": function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            r = this && this.__rest || function(e, t) {
                var a = {};
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var r = 0;
                    for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
                        t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (a[n[r]] = e[n[r]])
                }
                return a
            },
            o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = o(a("q1tI")),
            i = a("qhky"),
            u = a("dNNZ"),
            s = a("YgTb");
        function c(e) {
            var t = e.cards,
                a = e.isIdentityInitialized,
                o = e.isLoadingActions,
                c = e.isSignedIn,
                d = e.match,
                m = r(e, ["cards", "isIdentityInitialized", "isLoadingActions", "isSignedIn", "match"]),
                f = l.default.createElement(u.ContactFormDefault, n({}, m));
            return l.default.createElement(u.ContactWrapper, {
                backButton: {
                    as: "route",
                    dataElementId: "btn_contact_form_default_back",
                    label: s.t("Suggestions"),
                    to: "/contact/suggest"
                },
                dataViewId: "pg_contact_form_default",
                title: s.t("Contact Us"),
                cards: t,
                isLoadingCards: o,
                isSignedIn: c,
                showCards: a,
                showFaq: !0,
                signInUrl: d.url + "/sign-in?help"
            }, l.default.createElement(i.Helmet, null, l.default.createElement("meta", {
                name: "robots",
                content: "noindex"
            })), f)
        }
        c.defaultProps = {
            cards: [],
            isIdentityInitialized: !1,
            isLoadingActions: !1,
            isSignedIn: !1
        },
        t.default = c
    },
    "0LI8": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("8JjU");
        Object.defineProperty(t, "CampaignLinkTagButton", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    "0XZ9": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("jmiZ");
        Object.defineProperty(t, "Reveal", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    "0bHX": function(e, t, a) {
        "use strict";
        var n,
            r = this && this.__extends || (n = function(e, t) {
                return (n = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var a in t)
                        t.hasOwnProperty(a) && (e[a] = t[a])
                })(e, t)
            }, function(e, t) {
                function a() {
                    this.constructor = e
                }
                n(e, t),
                e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, new a)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            l = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = l(a("TSYQ")),
            u = l(a("q1tI")),
            s = a("wE+H"),
            c = a("yf/i"),
            d = a("p17I"),
            m = a("iDcq"),
            f = a("uCTY"),
            p = a("YgTb");
        a("fWYy");
        var g = a("2JF7"),
            h = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderCollage = function() {
                        var e = t.props,
                            a = e.images,
                            n = e.onClickCommentImage,
                            r = e.ugcId;
                        if (a && a.length) {
                            var l = a.map((function(e, t) {
                                var a = n ? {
                                    onClick: function() {
                                        return n(r, t)
                                    }
                                } : {};
                                return o(o({}, e), a)
                            }));
                            return u.default.createElement(f.Collage, {
                                images: l,
                                layout: "inline",
                                className: "mt2x",
                                totalImages: a.length,
                                dataElementId: "btn_comment_gallery"
                            })
                        }
                    }, t
                }
                return r(t, e), t.prototype.render = function() {
                    var e = this.props,
                        t = e.className,
                        a = e.maxChars,
                        n = e.author,
                        r = i.default(t, "m-comment"),
                        l = g.redactURLs(this.props.text);
                    return u.default.createElement("div", {
                        className: r
                    }, u.default.createElement(c.Avatar, o({}, n, {
                        as: s.IdentityType.person,
                        className: "m-comment-avatar"
                    })), u.default.createElement(m.CommentHeader, o({}, this.props)), u.default.createElement("div", {
                        className: "m-comment-content"
                    }, u.default.createElement(c.ReadMore, {
                        closeText: p.t("Collapse text"),
                        dataElementId: "btn_content_readmore",
                        expandButtonText: p.t("Read more"),
                        maxChars: a
                    }, l), this.renderCollage()), u.default.createElement(d.CommentFooter, o({}, this.props)))
                }, t
            }(u.default.Component);
        t.default = h
    },
    "0cNZ": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("33AF");
        Object.defineProperty(t, "GalleryHeader", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    "0d8F": function(e, t, a) {
        "use strict";
        a.r(t)
    },
    "17nx": function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("q1tI")),
            o = a("puIA"),
            l = a("qqdV");
        t.default = function(e) {
            var t = e.routes,
                a = e.statusCode,
                n = e.staticContext;
            if (!t)
                return r.default.createElement(r.default.Fragment, null);
            var i = r.default.createElement(o.Routes, {
                as: "switch",
                config: t
            });
            if (a)
                if (404 === a)
                    i = r.default.createElement(o.Routes, {
                        as: "switch",
                        config: l.notFoundErrorRoutes
                    });
                else if (200 === a)
                    i = r.default.createElement(o.Routes, {
                        as: "switch",
                        config: t
                    });
                else if (a >= 400 && a <= 599) {
                    var u = l.unknownErrorRoutes;
                    u[0].routes[0].statusCode = a,
                    i = r.default.createElement(o.Routes, {
                        as: "switch",
                        config: u
                    })
                } else
                    i = r.default.createElement(o.Routes, {
                        as: "switch",
                        config: l.unknownErrorRoutes
                    });
            else
                i = r.default.createElement(o.Routes, {
                    as: "switch",
                    config: l.unknownErrorRoutes
                });
            return n && (n.statusCode = a), i
        }
    },
    "1PkY": function(e, t, a) {
        "use strict";
        a.r(t),
        t.default = a.p + "static/media/join.a75c7270901f498e15757c724f9b51c5.svg"
    },
    "1sEd": function(e, t, a) {
        "use strict";
        a.r(t)
    },
    "1vf7": function(e, t, a) {
        "use strict";
        a.r(t)
    },
    "1yCK": function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = r(a("TSYQ")),
            l = r(a("q1tI")),
            i = a("yf/i"),
            u = a("z+lN");
        a("4r/K"),
        t.default = function(e) {
            var t = e.className,
                a = e.items,
                r = e.isCampaignTrending,
                s = o.default(t, "list-unstyled o-donation-list", {
                    "o-donation-list-animation": r
                });
            return l.default.createElement("ul", {
                className: s
            }, a.map((function(e, t) {
                return l.default.createElement("li", {
                    className: "o-donation-list-item",
                    key: t
                }, function(e) {
                    return "" === e.amountFormatted && "" === e.donor.fullName && "" === e.timeAgo ? l.default.createElement(i.Link, {
                        to: e.promptUrl,
                        as: "href",
                        dataElementId: "btn_donations_message",
                        className: "m-donation-prompt disp-block",
                        unstyled: !0
                    }, e.donationPrompt) : l.default.createElement(u.Donation, n({}, e))
                }(e))
            })))
        }
    },
    "2NxF": function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("/EQP")),
            o = a("Cge7"),
            l = a("l2oO"),
            i = a("o6hd"),
            u = a("/MKj"),
            s = n(a("u8eZ")),
            c = a("zGS9");
        t.default = u.connect((function() {
            var e = o.makeGetCampaignUrl(),
                t = c.makeGetShortUrl();
            return function(a, n) {
                var r = l.makeGetShortenedShareUrlFailed(n.utmFromKey, i.UtmKeys.INSTAGRAM_SHARESHEET),
                    o = l.makeGetShortenedShareUrlSuccess(n.utmFromKey, i.UtmKeys.INSTAGRAM_SHARESHEET);
                return {
                    campaignUrl: e(a),
                    shortUrl: t(a, n),
                    shortUrlFail: r(a),
                    shortUrlSuccess: o(a)
                }
            }
        }), (function(e, t) {
            return {
                getShortUrl: function(t) {
                    e({
                        payload: t,
                        type: r.default.GET_SHORTEN_SHARE_UTM_URL_IN_PROGRESS
                    })
                }
            }
        }))(s.default)
    },
    "2V/S": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("HT0D");
        Object.defineProperty(t, "MoreOptionsButton", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    "2hsv": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("ei9j");
        Object.defineProperty(t, "ContactFormFraud", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        }),
        Object.defineProperty(t, "ContactFormFraudInput", {
            enumerable: !0,
            get: function() {
                return n.ContactFormFraudInput
            }
        }),
        Object.defineProperty(t, "ContactFormFraudProps", {
            enumerable: !0,
            get: function() {
                return n.ContactFormFraudProps
            }
        }),
        Object.defineProperty(t, "FraudRelationshipValues", {
            enumerable: !0,
            get: function() {
                return n.FraudRelationshipValues
            }
        })
    },
    "2t9m": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("pxBg");
        Object.defineProperty(t, "LinkedInShareButton", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    "2vEz": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("2NxF");
        Object.defineProperty(t, "InstagramShareConnected", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        });
        var r = a("u8eZ");
        Object.defineProperty(t, "InstagramShare", {
            enumerable: !0,
            get: function() {
                return r.default
            }
        })
    },
    "33AF": function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("TSYQ")),
            o = n(a("q1tI")),
            l = a("yf/i"),
            i = a("p1Kg"),
            u = a("YgTb");
        a("xRV8"),
        t.default = function(e) {
            var t = e.author,
                a = e.className,
                n = e.handleClose,
                s = r.default(a, "m-gallery-header");
            return o.default.createElement("div", {
                className: s
            }, o.default.createElement(l.IconButton, {
                ariaLabel: u.t("Close image gallery"),
                className: "m-gallery-header-close color-white",
                iconName: "close",
                iconType: "ui",
                "data-autofocus": !0,
                onClick: n
            }), o.default.createElement(l.PersonInfo, {
                anonText: u.t("Anonymous"),
                className: "hide-for-large m-gallery-header-author",
                person: t,
                layout: "inline",
                userRoleStrings: i.getUserRoleStrings()
            }, t.role ? o.default.createElement("span", null, ", ", t.role) : void 0))
        }
    },
    "34pc": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.RefundReasonLabel = t.RefundReason = t.RelationToCoLabel = t.RelationToCo = t.HasContactedCoLabel = t.HasContactedCo = t.EmptyFieldLabel = void 0;
        var n,
            r,
            o,
            l = a("YgTb");
        t.EmptyFieldLabel = function() {
            return l.t("Please make a selection...")
        },
        function(e) {
            e.No = "NO",
            e.Yes = "YES"
        }(n = t.HasContactedCo || (t.HasContactedCo = {})),
        t.HasContactedCoLabel = function(e) {
            switch (e) {
            case n.Yes:
                return l.t("Yes, I have contacted the Campaign Organizer");
            case n.No:
                return l.t("No, I have not contacted the Campaign Organizer")
            }
        },
        function(e) {
            e.Family = "FAMILY",
            e.Friend = "FRIEND",
            e.Stranger = "STRANGER"
        }(r = t.RelationToCo || (t.RelationToCo = {})),
        t.RelationToCoLabel = function(e) {
            switch (e) {
            case r.Family:
                return l.t("They are a family member");
            case r.Friend:
                return l.t("They are a friend or acquaintance");
            case r.Stranger:
                return l.t("I do not know the organizer of this campaign")
            }
        },
        function(e) {
            e.Misrepresented = "MISREPRESENTED",
            e.MisusedFunds = "MISUSED_FUNDS",
            e.NotDelivered = "NOT_DELIVERED",
            e.Unauthorized = "UNAUTHORIZED",
            e.NoLongerSupport = "NO_LONGER_SUPPORT"
        }(o = t.RefundReason || (t.RefundReason = {})),
        t.RefundReasonLabel = function(e) {
            switch (e) {
            case o.Misrepresented:
                return l.t("The situation has been misrepresented.");
            case o.MisusedFunds:
                return l.t("The funds were not used as stated on the campaign.");
            case o.NotDelivered:
                return l.t("The funds were never delivered to the intended recipient.");
            case o.Unauthorized:
                return l.t("I did not authorize this donation.");
            case o.NoLongerSupport:
                return l.t("I no longer wish to support this campaign.")
            }
        }
    },
    "36wK": function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a("yf/i"),
            o = n(a("TSYQ")),
            l = n(a("q1tI"));
        function i(e) {
            var t,
                a = e.className,
                n = e.icon,
                i = o.default(a, "m-person-loading");
            switch (n) {
            case "anonymous":
                t = l.default.createElement(r.AnonymousAvatar, {
                    className: "mr2x"
                });
                break;
            case "default":
                t = l.default.createElement(r.DefaultAvatar, {
                    className: "mr2x"
                });
                break;
            default:
                t = l.default.createElement("div", {
                    className: "m-person-loading-avatar mr2x"
                })
            }
            return l.default.createElement("div", {
                className: i
            }, t, l.default.createElement("div", {
                className: "m-person-loading-content"
            }, l.default.createElement("div", {
                className: "m-person-loading-content-child"
            }), l.default.createElement("div", {
                className: "m-person-loading-content-child"
            })))
        }
        a("3D2h"),
        i.defaultProps = {
            icon: "blank"
        },
        t.default = i
    },
    "3D2h": function(e, t, a) {
        "use strict";
        a.r(t)
    },
    "3fwG": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("g4Gd");
        Object.defineProperty(t, "ContactSupportOptions", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        }),
        Object.defineProperty(t, "ContactSupportOptionProps", {
            enumerable: !0,
            get: function() {
                return n.ContactSupportOptionProps
            }
        }),
        Object.defineProperty(t, "ContactSupportOptionsProps", {
            enumerable: !0,
            get: function() {
                return n.ContactSupportOptionsProps
            }
        })
    },
    "3jiO": function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("q1tI")),
            o = a("yf/i"),
            l = a("it2i"),
            i = a("YgTb");
        t.default = function(e) {
            return r.default.createElement(r.default.Fragment, null, r.default.createElement(l.GlobalHead, {
                description: i.t("We're sorry, but that campaign cannot be found. Please check the link URL and try again."),
                noFollow: !0,
                title: i.t("Page Not Found")
            }), r.default.createElement("div", {
                className: "p-campaign"
            }, r.default.createElement("header", {
                className: "p-campaign-header"
            }, r.default.createElement(o.Button, {
                as: "href",
                className: "mb2x",
                fill: "hollow-green",
                size: "medium",
                to: "/"
            }, i.t("Home")), r.default.createElement("h1", null, i.t("Campaign Not Found")), r.default.createElement("p", null, i.t("We're sorry, but that campaign cannot be found. Please check the link URL and try again.")))))
        }
    },
    "3ohW": function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a("Y4ob"),
            o = a("Cge7"),
            l = a("/MKj"),
            i = n(a("CjC9")),
            u = a("yZv1"),
            s = l.connect((function() {
                var e = u.makeGetTeamList(),
                    t = o.makeGetCampaignUrl(),
                    a = o.makeGetIsTeamCampaignWithTeamMembers(),
                    n = r.makeGetUnreferredDonationStats();
                return function(r) {
                    return {
                        campaignUrl: t(r),
                        isTeamCampaignWithTeamMembers: a(r),
                        teamMembersList: e(r),
                        unreferredDonationStats: n(r)
                    }
                }
            }), void 0)(i.default);
        t.default = s
    },
    "3sA1": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.makeGetCampaignGoalAmountString = t.makeGetCampaignRaisedAmountString = t.makeGetCampaignCanonicalUrl = void 0;
        var n,
            r = a("G4qV"),
            o = a("hXCg"),
            l = a("Cge7"),
            i = a("ZZcF"),
            u = a("8QVh"),
            s = function() {
                return r.createSelector([i.makeGetLocale(), l.makeGetCampaignCurrency()], (function(e, t) {
                    return n ? n.setCurrencyProps({
                        currency: t,
                        currencyDisplay: "symbol"
                    }) : (n = new o.LocaleNumberFormatter(e)).setCurrencyProps({
                        currency: t,
                        currencyDisplay: "symbol"
                    })
                }))
            };
        t.makeGetCampaignRaisedAmountString = function() {
            return r.createSelector([l.makeGetCampaignCurrentAmount(), s()], (function(e, t) {
                return t.formatAsCurrency(e)
            }))
        };
        t.makeGetCampaignGoalAmountString = function() {
            return r.createSelector([l.makeGetCampaignGoalAmount(), s()], (function(e, t) {
                return t.formatAsCurrency(e)
            }))
        };
        t.makeGetCampaignCanonicalUrl = function() {
            return r.createSelector([i.makeGetBaseUrl("/f/"), l.makeGetCampaignUrl()], (function(e, t) {
                return u.normalize(e + "/" + t)
            }))
        }
    },
    "3wKs": function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("TSYQ")),
            o = n(a("q1tI")),
            l = a("yf/i"),
            i = a("YgTb");
        a("bDJ8"),
        t.default = function(e) {
            var t = e.className,
                a = e.children,
                n = e.dataElementId,
                u = e.on,
                s = e.shareUrl,
                c = e.to,
                d = r.default(t, "m-sticky-cta", {
                    "m-sticky-cta--is-open": u
                }),
                m = o.default.createElement(l.Button, {
                    as: "href",
                    className: "m-sticky-cta-button",
                    dataElementId: n,
                    fill: "solid-yellow",
                    layout: "max-full",
                    size: "large",
                    to: c
                }, a),
                f = o.default.createElement(l.Button, {
                    as: "route",
                    className: "m-sticky-cta-button ml2x",
                    dataElementId: "btn_share_sticky",
                    fill: "hollow-yellow",
                    layout: "max-full",
                    size: "large",
                    to: s
                }, i.t("Share")),
                p = o.default.createElement("div", {
                    className: "flex-container m-sticky-cta-columns"
                }, m, f);
            return o.default.createElement("div", {
                "aria-hidden": !u,
                className: d
            }, o.default.createElement("div", {
                className: "m-sticky-cta-inner"
            }, p))
        }
    },
    "491J": function(e, t, a) {
        "use strict";
        a.r(t)
    },
    "4Fs/": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("ju3F");
        Object.defineProperty(t, "UKCharityModal", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    "4Q1K": function(e, t, a) {
        "use strict";
        a.r(t)
    },
    "4c2h": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("/p8D");
        Object.defineProperty(t, "CampaignShareModal", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        }),
        Object.defineProperty(t, "CampaignShareModalRouteProps", {
            enumerable: !0,
            get: function() {
                return n.CampaignShareModalRouteProps
            }
        }),
        Object.defineProperty(t, "CampaignShareModalProps", {
            enumerable: !0,
            get: function() {
                return n.CampaignShareModalProps
            }
        })
    },
    "4cQv": function(e, t, a) {
        "use strict";
        a.r(t)
    },
    "4ds6": function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("TSYQ")),
            o = n(a("q1tI")),
            l = a("nP3w"),
            i = a("+Ded"),
            u = a("yf/i"),
            s = a("YgTb"),
            c = a("QtxA");
        function d(e) {
            var t = e.className,
                a = e.closeBanner,
                n = e.defaultFunctionalValue,
                d = void 0 === n || n,
                m = e.defaultMarketingValue,
                f = void 0 !== m && m,
                p = e.isOpen,
                g = e.onClose,
                h = r.default("m-gdpr-modal", t),
                y = function() {
                    i.trackEvents.push({
                        elementId: "gdpr_modal_ok_all",
                        type: "click",
                        viewId: "gdpr_modal"
                    }),
                    c.setGDPRPref({
                        functional: !0,
                        marketing: !0
                    }),
                    a && a(),
                    g()
                },
                _ = {
                    functionalValue: d,
                    marketingValue: f
                },
                b = o.default.createElement(l.Form, {
                    initialValues: _,
                    onSubmit: function(e) {
                        var t = e.functionalValue,
                            n = e.marketingValue;
                        c.setGDPRPref({
                            functional: t,
                            marketing: n
                        }),
                        i.trackEvents.push({
                            elementId: "gdpr_modal_save",
                            type: "click",
                            viewId: "gdpr_modal"
                        }),
                        a && a(),
                        g()
                    },
                    render: function(e) {
                        var t = e.handleSubmit;
                        return o.default.createElement("form", {
                            className: "m-gdpr-modal-inner flex-container flex-dir-column",
                            onSubmit: t
                        }, o.default.createElement("div", {
                            className: "m-gdpr-modal-content"
                        }, o.default.createElement("div", {
                            className: "m-gdpr-modal-header flex-container align-justify"
                        }, o.default.createElement("h2", null, s.t("Cookie Preferences")), o.default.createElement(u.Button, {
                            ariaLabel: s.t("Close cookie modal"),
                            className: "m-gdpr-modal-close-button",
                            "data-autofocus": !0,
                            onClick: g
                        }, o.default.createElement(u.UIIcon, {
                            name: "close"
                        }))), o.default.createElement("h3", {
                            className: "heading-4"
                        }, s.t("We value your privacy")), o.default.createElement(s.Trans, null, o.default.createElement("p", null, "As stated on the banner, GoFundMe uses cookies to enable features and market content to provide you with an improved experience. We consider these cookies to be non-essential, pursuant to our", o.default.createElement(u.HtmlSpace, {
                            type: "breaking"
                        }), o.default.createElement(u.Link, {
                            as: "href",
                            to: "https://www.gofundme.com/privacy",
                            target: "_blank",
                            rel: "noopener"
                        }, "privacy policy."), o.default.createElement(u.HtmlSpace, {
                            type: "breaking"
                        }), "When you click “That’s OK” on the banner, we add these non-essential cookies.")), o.default.createElement("p", null, s.t("Here in this Cookie Preferences page, the non-essential cookies category is broken down\n                            further into functional and marketing, as you can see below. You can change your\n                            preferences as to both functional and marketing cookies here. When you click “Save” on\n                            this page, we will add only those non-essential cookies you select.")), o.default.createElement("div", {
                            className: "m-gdpr-cookie-modal-heading-conatainer align-justify flex-container"
                        }, o.default.createElement("h3", {
                            className: "heading-4"
                        }, s.t("Marketing cookies")), o.default.createElement(l.Field, {
                            name: "marketingValue"
                        }, (function(e) {
                            return o.default.createElement(u.FormField, {
                                id: "m-gdpr-cookie-modal-marketing-checkbox",
                                label: s.t("Enable"),
                                labelPosition: "prepend",
                                layout: "inline",
                                className: "m-gdpr-cookie-modal-small-text color-gray text-small"
                            }, o.default.createElement(u.Checkbox, {
                                className: "ml",
                                checked: e.input.value,
                                defaultValue: "false",
                                id: "m-gdpr-cookie-modal-marketing-checkbox",
                                name: "cookies",
                                onChange: function(t) {
                                    i.trackEvents.push({
                                        elementId: t.currentTarget.checked ? "gdpr_modal_ok_marketing" : "gdpr_modal_off_marketing",
                                        type: "click",
                                        viewId: "gdpr_modal"
                                    }),
                                    e.input.onChange(t.currentTarget.checked)
                                },
                                value: "marketingValue"
                            }))
                        }))), o.default.createElement("p", null, s.t("GoFundMe collects information regarding user navigation to provide sponsored content\n                            relevant to our products on other sites. Specifically, if you start a fundraiser on\n                            GoFundMe and you do not publish that fundraiser, GoFundMe may then show a banner ad the\n                            next time you are on Facebook.")), o.default.createElement(u.Rule, {
                            type: "horizontal"
                        }), o.default.createElement("div", {
                            className: "m-gdpr-cookie-modal-heading-conatainer align-justify flex-container"
                        }, o.default.createElement("h3", {
                            className: "heading-4"
                        }, s.t("Functional cookies")), o.default.createElement(l.Field, {
                            name: "functionalValue"
                        }, (function(e) {
                            return o.default.createElement(u.FormField, {
                                id: "m-gdpr-cookie-modal-functional-checkbox",
                                label: s.t("Enable"),
                                labelPosition: "prepend",
                                layout: "inline",
                                className: "m-gdpr-cookie-modal-small-text color-gray text-small"
                            }, o.default.createElement(u.Checkbox, {
                                className: "ml",
                                checked: e.input.value,
                                defaultValue: "true",
                                id: "m-gdpr-cookie-modal-functional-checkbox",
                                name: "cookies",
                                onChange: function(t) {
                                    i.trackEvents.push({
                                        elementId: t.currentTarget.checked ? "gdpr_modal_ok_functional" : "gdpr_modal_off_functional",
                                        type: "click",
                                        viewId: "gdpr_modal"
                                    }),
                                    e.input.onChange(t.currentTarget.checked)
                                },
                                value: "functionalValue"
                            }))
                        }))), o.default.createElement("p", null, s.t("We use data collected with these cookies to improve your experiences on the GoFundMe\n                            platform, as well as avoiding bugs or testing new features.")), o.default.createElement(u.Rule, {
                            type: "horizontal"
                        }), o.default.createElement("div", {
                            className: "m-gdpr-cookie-modal-heading-conatainer align-justify flex-container"
                        }, o.default.createElement("h3", {
                            className: "heading-4"
                        }, s.t("Essential cookies")), o.default.createElement("p", {
                            className: "m-gdpr-cookie-modal-small-text color-gray text-small"
                        }, s.t("Always enabled"))), o.default.createElement("p", null, s.t("Data is collected by these cookies to offer basic functions, to ensure that the GoFundMe\n                            Platform functions technically, to keep track of your settings and activities, and for\n                            security or fraud prevention purposes."))), o.default.createElement("div", {
                            className: "m-gdpr-cookie-modal-footer flex-container align-right"
                        }, o.default.createElement("div", {
                            className: "m-gdpr-cookie-modal-button-container flex-container"
                        }, o.default.createElement(u.SecondaryButton, {
                            ariaLabel: s.t("Enable all and close"),
                            className: "m-gdpr-cookie-modal-button ml2x mr2x",
                            layout: "full",
                            onClick: y,
                            size: "large"
                        }, s.t("Enable all")), o.default.createElement(u.PrimaryButton, {
                            ariaLabel: s.t("Save and close"),
                            className: "m-gdpr-cookie-modal-button ml2x mr2x",
                            layout: "full",
                            size: "large",
                            type: "submit"
                        }, s.t("Save")))))
                    }
                });
            return o.default.createElement(u.BaseModal, {
                className: h,
                isOpen: p,
                onClose: g,
                overlayColor: "transparentBlack"
            }, b)
        }
        a("X0QB"),
        d.defaultProps = {
            defaultFunctionalValue: !0,
            defaultMarketingValue: !1
        },
        t.default = d
    },
    "4i9U": function(e, t, a) {
        "use strict";
        a.r(t)
    },
    "4md/": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("ppeB");
        Object.defineProperty(t, "SusiWrapper", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    "4r/K": function(e, t, a) {
        "use strict";
        a.r(t)
    },
    "54g5": function(e, t, a) {
        "use strict";
        a.r(t)
    },
    "5E+l": function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("q1tI")),
            o = a("yf/i"),
            l = a("YgTb");
        t.default = function(e) {
            var t = e.history,
                a = e.match;
            return r.default.createElement(o.Modal, {
                isOpen: !0,
                onClose: function() {
                    t.push("/f/" + a.params.campaignUrl)
                }
            }, r.default.createElement("h2", null, l.t("Donations paused")), r.default.createElement("p", null, l.t("Our team has contacted the organizer with a solution, and donations will resume once the issue is resolved.")), r.default.createElement(o.Rule, {
                type: "horizontal"
            }), r.default.createElement("h3", {
                className: "heading-4"
            }, l.t("How can I help?")), r.default.createElement("p", null, l.t("Please reach out to the organizer and ask them to sign in to GoFundMe and check their account to resolve the issue.")), r.default.createElement(o.Rule, {
                className: "mb4x",
                type: "horizontal"
            }))
        }
    },
    "5c2c": function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = r(a("q1tI")),
            l = a("yf/i");
        t.default = function(e) {
            var t,
                a,
                r = e.className,
                i = e.dataElementId,
                u = e.defaultValue,
                s = e.id,
                c = e.input,
                d = e.label,
                m = e.maxLength,
                f = e.minLength,
                p = e.meta,
                g = e.name,
                h = e.readOnly,
                y = e.required,
                _ = e.type,
                b = "textarea" === _,
                v = b ? {
                    id: s,
                    name: g
                } : {
                    id: s,
                    name: g,
                    type: _
                },
                E = {
                    dataElementId: i,
                    defaultValue: u,
                    maxLength: m,
                    minLength: f,
                    readOnly: h,
                    required: y
                };
            return o.default.createElement(l.FormField, {
                alerts: (t = p && p.error ? Array.isArray(p.error) ? p.error : [p.error] : void 0, a = p && p.warning ? Array.isArray(p.warning) ? p.warning : [p.warning] : void 0, t && t.length > 0 ? t.map((function(e) {
                    return {
                        message: e,
                        status: l.FieldStatus.ERROR
                    }
                })) : a && a.length > 0 ? a.map((function(e) {
                    return {
                        message: e,
                        status: l.FieldStatus.WARNING
                    }
                })) : void 0),
                className: r,
                id: s,
                label: d,
                layout: "stacked"
            }, b ? o.default.createElement(l.TextArea, n({}, v, E, c, {
                className: "m-input-field-text-area"
            })) : o.default.createElement(l.TextInput, n({}, v, E, c, {
                className: "m-input-field-text-input"
            })))
        }
    },
    "5h8D": function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            r = this && this.__createBinding || (Object.create ? function(e, t, a, n) {
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
            o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            l = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && r(t, e, a);
                return o(t, e), t
            },
            i = this && this.__rest || function(e, t) {
                var a = {};
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var r = 0;
                    for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
                        t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (a[n[r]] = e[n[r]])
                }
                return a
            },
            u = this && this.__read || function(e, t) {
                var a = "function" == typeof Symbol && e[Symbol.iterator];
                if (!a)
                    return e;
                var n,
                    r,
                    o = a.call(e),
                    l = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(n = o.next()).done;)
                        l.push(n.value)
                } catch (i) {
                    r = {
                        error: i
                    }
                } finally {
                    try {
                        n && !n.done && (a = o.return) && a.call(o)
                    } finally {
                        if (r)
                            throw r.error
                    }
                }
                return l
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = l(a("q1tI")),
            c = a("puIA"),
            d = a("yf/i"),
            m = a("z+lN"),
            f = a("dNNZ"),
            p = a("zIs9"),
            g = a("QtxA");
        a("ltUQ"),
        t.default = function(e) {
            var t = e.alertContent,
                a = e.algoliaIndices,
                r = e.authenticatedPerson,
                o = e.domain,
                l = e.geoRecord,
                h = e.getIdentity,
                y = e.hasCampaign,
                _ = e.infoContent,
                b = e.isLoggedIn,
                v = e.locale,
                E = e.onCloseAlert,
                S = e.onLanguageChange,
                C = e.routes,
                O = e.showCookieBanner,
                P = e.susiModalPaths,
                I = u(s.useState(!1), 2),
                k = I[0],
                N = I[1];
            s.useEffect((function() {
                h && !k && (h(), N(!0))
            }), [k]);
            var w = u(s.useState(O), 2),
                T = w[0],
                M = w[1];
            return s.default.createElement("div", {
                className: "t-standard-header"
            }, s.default.createElement("div", {
                className: "t-standard-header-top",
                "data-view-id": "pg_srp"
            }, !!O && s.default.createElement(m.GDPRAlertBanner, {
                domain: o,
                isOpen: T,
                onButtonClick: function() {
                    g.setGDPRPref({
                        functional: !0,
                        marketing: !0
                    })
                },
                onClose: function() {
                    return M(!1)
                },
                onManageCookies: function() {
                    return alert("show modal")
                }
            }), s.default.createElement(d.GlobalHeader, null, s.default.createElement(f.NavSearchResultsPage, {
                algoliaIndices: a,
                authenticatedPerson: r,
                hasCampaign: y,
                isLoggedIn: b,
                susiModalPaths: P
            }))), s.default.createElement("div", {
                className: "t-standard-header-alert",
                "data-view-id": "pg_srp"
            }, function() {
                if (_ && _.message) {
                    var e = _.message,
                        t = i(_, ["message"]);
                    return s.default.createElement(d.AlertBanner, n({}, t, {
                        onClose: function() {
                            E(p.AlertType.INFO)
                        },
                        type: p.AlertType.INFO
                    }), e)
                }
                return !1
            }(), function() {
                if (t && t.message) {
                    var e = t.message,
                        a = i(t, ["message"]);
                    return s.default.createElement(d.AlertBanner, n({}, a, {
                        onClose: function() {
                            E(a.type)
                        }
                    }), e)
                }
                return !1
            }(), s.default.createElement("div", {
                id: "alert-portal"
            })), s.default.createElement("div", {
                className: "t-standard-header-content mt4x global-wrapper"
            }, C && s.default.createElement(c.Routes, {
                as: "switch",
                config: C
            })), s.default.createElement(d.GlobalFooter, {
                countryCode: l.countryCode,
                region: l.region,
                onLanguageChange: S,
                locale: v
            }))
        }
    },
    "5ie3": function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("TSYQ")),
            o = n(a("q1tI")),
            l = a("wE+H"),
            i = a("yf/i"),
            u = a("YgTb");
        a("4cQv"),
        t.default = function(e) {
            var t = e.additionalImages,
                a = e.ariaLabel,
                n = e.className,
                s = e.layout,
                c = e.mediaType,
                d = e.onClick,
                m = e.scaled,
                f = e.url,
                p = c === l.mediaTypes.VIMEO || c === l.mediaTypes.YOUTUBE ? "video" : "photo",
                g = r.default(n, "m-collage-image", "m-collage-image--" + s, {
                    "m-collage-image--button": d,
                    "m-collage-image--show-more": t
                });
            return o.default.createElement(o.default.Fragment, null, o.default.createElement("style", {
                dangerouslySetInnerHTML: {
                    __html: ['.m-collage-image--show-more:after {\n                        content: "' + u.t("See all") + '";\n                    }'].join("\n")
                }
            }), d ? o.default.createElement(i.BaseButton, {
                ariaLabel: a,
                className: g,
                "data-additional-images": t,
                onClick: d
            }, o.default.createElement(i.Image, {
                layout: s,
                scaled: m,
                url: f
            }), "video" === p && o.default.createElement(i.PlayButtonIcon, {
                className: "m-collage-image-playbutton"
            })) : o.default.createElement("div", {
                className: g
            }, o.default.createElement(i.Image, {
                layout: s,
                scaled: m,
                url: f
            })))
        }
    },
    "5vFK": function(e, t, a) {
        "use strict";
        a.r(t)
    },
    "65fk": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("K+8+");
        Object.defineProperty(t, "ContactFlow", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    "6HEK": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("17nx");
        Object.defineProperty(t, "CampaignFlow", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        });
        var r = a("GyeW");
        Object.defineProperty(t, "CampaignFlowConnected", {
            enumerable: !0,
            get: function() {
                return r.default
            }
        })
    },
    "6I3m": function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a("/MKj"),
            o = a("wQmL"),
            l = a("+Ded"),
            i = n(a("xl5i")),
            u = a("7OEO"),
            s = a("Cge7"),
            c = a("SKg/"),
            d = a("C0Xu"),
            m = n(a("NZHY")),
            f = a("J+rR"),
            p = o.reduxForm({
                form: d.CONTACT_FORM_SMART_ANSWER,
                submitAsSideEffect: !0
            })(m.default);
        t.default = r.connect((function() {
            var e = f.makeGetAnswer(),
                t = u.makeGetActionCards(),
                a = u.makeGetChatWindow(),
                n = u.makeGetChatStatus(),
                r = u.makeGetLastSelectedId(),
                o = f.makeGetSelections(),
                l = s.makeGetIsLoggedIn(),
                i = c.makeGetIsIdentityInitialized(),
                d = u.makeGetIsLoadingActions(),
                m = s.makeGetUserEmail(),
                p = u.makeGetSmartAnswerSuccess(),
                g = f.makeGetShowChatWindow(),
                h = f.makeGetShowOptionChat(),
                y = f.makeGetShowOptionEmail();
            return function(u, s) {
                return {
                    answer: e(u),
                    cards: t(u, s),
                    chatStatus: n(u),
                    chatWindow: a(u),
                    isIdentityInitialized: i(u),
                    isLoadingActions: d(u),
                    isSignedIn: l(u),
                    lastSelectedId: r(u),
                    selections: o(u),
                    showChatWindow: g(u, s),
                    showOptionChat: h(u),
                    showOptionEmail: y(u),
                    smartAnswerSuccess: p(u),
                    userEmail: m(u)
                }
            }
        }), (function(e, t) {
            return {
                jumpToSuggestion: function(t) {
                    e({
                        payload: t,
                        type: i.default.JUMP_TO_SUGGESTION
                    })
                },
                onAnsweredClick: function() {
                    return t.history.push("/contact/suggest/answered")
                },
                onChatEnd: function() {
                    l.trackEvents.push({
                        type: "mp_page_view",
                        viewId: "livechat_contact_zd_chat_ended"
                    }),
                    e({
                        payload: "closed",
                        type: i.default.SET_ZENDESK_WINDOW
                    })
                },
                onChatHide: function() {
                    return e({
                        payload: "minimized",
                        type: i.default.SET_ZENDESK_WINDOW
                    })
                },
                onChatLoadFailure: function() {
                    return e({
                        type: i.default.SETUP_ZENDESK_SDK_FAILURE
                    })
                },
                onChatLoadSuccess: function() {
                    return e({
                        type: i.default.SETUP_ZENDESK_SDK_SUCCESS
                    })
                },
                onChatLoading: function() {
                    return e({
                        type: i.default.SETUP_ZENDESK_SDK_IN_PROGRESS
                    })
                },
                onChatShow: function() {
                    return l.trackEvents.push({
                        type: "mp_page_view",
                        viewId: "livechat_contact_zd_chat_window_opened"
                    })
                },
                onChatStart: function() {
                    return l.trackEvents.push({
                        viewId: "livechat_contact_zd_chat_started",
                        type: "mp_page_view"
                    })
                },
                onChatStatus: function(t) {
                    e({
                        payload: t,
                        type: i.default.SET_ZENDESK_STATUS
                    })
                },
                onOptionChatClick: function() {
                    return e({
                        payload: "open",
                        type: i.default.SET_ZENDESK_WINDOW
                    })
                },
                onOptionChatShown: function() {
                    return l.trackEvents.push({
                        type: "mp_page_view",
                        viewId: "livechat_contact_zd_chat_invite_shown"
                    })
                },
                onOptionEmailClick: function(e) {
                    var a;
                    switch (e) {
                    case d.ContactFormType.BENE:
                        a = "bene";
                        break;
                    case d.ContactFormType.DONOR:
                        a = "donor";
                        break;
                    case d.ContactFormType.FRAUD:
                        a = "fraud";
                        break;
                    case d.ContactFormType.JOURNALIST:
                        a = "journalist";
                        break;
                    case d.ContactFormType.DEFAULT:
                    default:
                        a = "default"
                    }
                    t.history.push("/contact/suggest/" + a),
                    window.scrollTo(0, 0)
                },
                onSuggestionSelect: function(t, a, n) {
                    var r = n ? "_" + n.toLowerCase() : "";
                    l.trackEvents.push({
                        elementId: "select_contact_suggest" + r,
                        type: "mp_page_click"
                    }),
                    e({
                        payload: {
                            index: t,
                            id: a
                        },
                        type: i.default.SELECT_CONTACT_SUGGESTION
                    })
                }
            }
        }))(p)
    },
    "6PWf": function(e, t, a) {
        "use strict";
        a.r(t)
    },
    "6VGv": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("x1yX");
        Object.defineProperty(t, "CampaignShareAction", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        });
        var r = a("JejX");
        Object.defineProperty(t, "CampaignShareActionConnected", {
            enumerable: !0,
            get: function() {
                return r.default
            }
        })
    },
    "6kUX": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("OYai");
        Object.defineProperty(t, "CampaignMembersTeam", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    "6ybM": function(e, t, a) {
        "use strict";
        var n,
            r = this && this.__extends || (n = function(e, t) {
                return (n = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var a in t)
                        t.hasOwnProperty(a) && (e[a] = t[a])
                })(e, t)
            }, function(e, t) {
                function a() {
                    this.constructor = e
                }
                n(e, t),
                e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, new a)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            l = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = l(a("TSYQ")),
            u = l(a("q1tI")),
            s = a("YgTb"),
            c = a("yf/i"),
            d = a("z+lN");
        a("0d8F");
        var m = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e), t.prototype.render = function() {
                var e = this.props,
                    a = e.className,
                    n = e.dataElementId,
                    r = e.images,
                    l = e.layout,
                    c = e.totalImages,
                    m = i.default(a, "list-unstyled", "o-collage", "o-collage--" + l, {
                        "o-collage--duo": "hero" === l && 2 === r.length,
                        "o-collage--solo": "hero" === l && 1 === r.length,
                        "o-collage--trio": "inline" === l || r.length > 2
                    }),
                    f = this.getImageLayout();
                return u.default.createElement("ul", {
                    className: m,
                    "data-element-id": n
                }, r.slice(0, t.MAX_IMAGES).map((function(e, a) {
                    var n = 2 === a && c > t.MAX_IMAGES && !!e.onClick,
                        l = 0 === a ? "image-16by9" : "",
                        i = 2 === a ? s.t("Image {{imageIndex}} of {{totalImages}}. Click to view all images", {
                            imageIndex: a + 1,
                            totalImages: r.length
                        }) : s.t("Image {{imageIndex}} of {{totalImages}}", {
                            imageIndex: a + 1,
                            totalImages: r.length
                        });
                    return u.default.createElement("li", {
                        key: a
                    }, u.default.createElement(d.CollageImage, o({}, e, {
                        ariaLabel: i,
                        className: l,
                        additionalImages: n,
                        layout: f
                    })))
                })))
            }, t.prototype.getImageLayout = function() {
                var e = this.props,
                    t = e.images,
                    a = e.layout;
                return 2 === t.length && "hero" === a ? c.ScalableImageLayouts["1by1"] : c.ScalableImageLayouts["16by9"]
            }, t.MAX_IMAGES = 3, t
        }(u.default.Component);
        t.default = m
    },
    "7+VQ": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("no3w");
        Object.defineProperty(t, "LogoBackNav", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    "70b3": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("vZsH");
        Object.defineProperty(t, "PersonLoadingList", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    "7A5A": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("/gKo");
        Object.defineProperty(t, "ContactFormFraudPartialConnected", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    "7DEb": function(e, t, a) {
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
            r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            o = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && n(t, e, a);
                return r(t, e), t
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getReasonText = t.CurrencyOptions = t.SelectRelationship = t.SelectContactedCo = t.BeneRelationshipValues = t.BeneContactedCoValues = void 0;
        var l,
            i,
            u = o(a("q1tI")),
            s = a("wQmL"),
            c = a("yf/i"),
            d = a("z+lN"),
            m = a("YgTb"),
            f = a("V20B"),
            p = a("y4Uw");
        function g(e, t) {
            var a = e.find((function(e) {
                return e.value === t
            }));
            return a && a.text ? a.text : ""
        }
        a("KmPl"),
        function(e) {
            e.NO = "0",
            e.YES = "1"
        }(l = t.BeneContactedCoValues || (t.BeneContactedCoValues = {})),
        function(e) {
            e.FAMILY = "family",
            e.FRIEND = "friend",
            e.UNKNOWN = "unknown"
        }(i = t.BeneRelationshipValues || (t.BeneRelationshipValues = {})),
        t.SelectContactedCo = function() {
            return [{
                disabled: !0,
                text: m.t("Please select one."),
                value: ""
            }, {
                text: m.t("Yes, I have contacted the Campaign Organizer."),
                value: l.YES
            }, {
                text: m.t("No, I have not contacted the Campaign Organizer."),
                value: l.NO
            }]
        },
        t.SelectRelationship = function() {
            return [{
                disabled: !0,
                text: m.t("Please select one."),
                value: ""
            }, {
                text: m.t("They are a family member"),
                value: i.FAMILY
            }, {
                text: m.t("They are a friend or acquaintance"),
                value: i.FRIEND
            }, {
                text: m.t("I do not know the organizer of this campaign"),
                value: i.UNKNOWN
            }]
        },
        t.CurrencyOptions = [{
            text: "$ USD",
            value: "USD"
        }, {
            text: "£ GBP",
            value: "GBP"
        }, {
            text: "$ CAD",
            value: "CAD"
        }, {
            text: "€ EUR",
            value: "EUR"
        }, {
            text: "$ AUD",
            value: "AUD"
        }],
        t.getReasonText = g,
        t.default = function(e) {
            var a = e.change,
                n = e.handleSubmit,
                r = e.reCaptchaSiteKey,
                o = e.onSuccess,
                l = e.onFailed,
                h = e.submitFailed,
                y = e.submitSucceeded,
                _ = e.pristine,
                b = e.invalid,
                v = e.submitting,
                E = e.phonePrefix,
                S = e.relationToCoText;
            return u.useEffect((function() {
                y && o && o()
            }), [y]), u.useEffect((function() {
                h && l && l()
            }), [h]), u.default.createElement(s.Form, {
                onSubmit: n(f.SubmitHelper.SubmitContactFormBene)
            }, u.default.createElement(s.Field, {
                id: "name",
                name: "name",
                component: d.ReduxZoomField,
                type: "text",
                className: "mb4x",
                label: m.t("Your Name")
            }), u.default.createElement("div", {
                className: "mb4x"
            }, u.default.createElement("div", {
                className: "o-bene-phone"
            }, u.default.createElement(s.Field, {
                id: "phonePrefix",
                name: "phonePrefix",
                component: d.ReduxSelectField,
                className: "o-bene-phone-prefix",
                options: p.PhoneCodesIntl,
                format: p.parsePhonePrefix,
                parse: p.parsePhonePrefix,
                label: "+" + E
            }), u.default.createElement(s.Field, {
                id: "phone",
                name: "phone",
                component: d.ReduxZoomField,
                type: "tel",
                className: "o-bene-phone-value",
                label: m.t("Your Phone Number")
            })), u.default.createElement("small", {
                className: "color-gray"
            }, m.t("Required in case our team needs to contact you for further details."))), u.default.createElement(s.Field, {
                id: "email",
                name: "email",
                component: d.ReduxZoomField,
                type: "text",
                className: "mb4x",
                label: m.t("Your Email")
            }), u.default.createElement(s.Field, {
                id: "email2",
                name: "email2",
                component: d.ReduxZoomField,
                type: "text",
                className: "mb4x",
                label: m.t("Confirm Email")
            }), u.default.createElement("div", null, u.default.createElement(s.Field, {
                id: "url",
                name: "url",
                component: d.ReduxZoomField,
                type: "url",
                label: m.t("Page URL")
            }), u.default.createElement("small", {
                className: "color-gray"
            }, m.t("Please enter the URL in this format: https://www.gofundme.com/f/example-campaign"))), u.default.createElement(s.Field, {
                id: "urlBypass",
                name: "urlBypass",
                component: "input",
                type: "checkbox",
                className: "mb4x"
            }), u.default.createElement("label", {
                htmlFor: "urlBypass"
            }, m.t("I don't know the page URL")), u.default.createElement(s.Field, {
                id: "contactedCo",
                name: "contactedCo",
                component: d.ReduxSelectField,
                className: "mb4x",
                options: t.SelectContactedCo(),
                label: m.t("Have you already contacted the organizer of this campaign?"),
                onChange: function(e) {
                    var n = e.target.value,
                        r = g(t.SelectContactedCo(), n);
                    r && a("hasContactedCoText", r)
                }
            }), u.default.createElement(s.Field, {
                id: "relationToCoText",
                name: "relationToCoText",
                component: d.ReduxSelectField,
                className: "mb4x",
                options: t.SelectRelationship(),
                label: m.t("How do you know the organizer of this campaign?"),
                onChange: function(e) {
                    var n = e.target.value,
                        r = g(t.SelectRelationship(), n);
                    r && a("relationToCoText", r)
                }
            }), (S === i.FAMILY || S === i.FRIEND) && u.default.createElement(s.Field, {
                id: "relationToCoDescription",
                name: "relationToCoDescription",
                component: d.ReduxInputField,
                type: "text",
                className: "mb4x",
                label: m.t("Please explain your relationship to the Campaign Organizer.")
            }), u.default.createElement("div", {
                className: "o-bene-money-received mb4x"
            }, u.default.createElement(s.Field, {
                id: "currency",
                name: "currency",
                component: d.ReduxSelectField,
                className: "o-bene-money-received-currency",
                options: t.CurrencyOptions
            }), u.default.createElement(s.Field, {
                id: "moneyReceived",
                name: "moneyReceived",
                component: d.ReduxInputField,
                type: "text",
                className: "o-bene-money-received-value",
                label: m.t("How much money did you receive from the campaign organizer?")
            })), u.default.createElement(s.Field, {
                id: "concerns",
                name: "concerns",
                component: d.ReduxInputField,
                type: "textarea",
                className: "mb4x",
                label: m.t("Why do you believe this person will not deliver the funds to you?")
            }), u.default.createElement("div", {
                className: "mb4x"
            }, u.default.createElement(s.Field, {
                component: d.ReduxUploadField,
                type: "file",
                accept: "application/pdf,image/gif,image/jpeg,image/png",
                id: "photoId",
                name: "photoId",
                label: m.t("Please attach a copy of a government issued photo ID")
            }), u.default.createElement("small", {
                className: "color-gray"
            }, m.t("Please upload only JPEG, GIF, PNG or PDF files. The file size must be less than 5MB."))), u.default.createElement("div", {
                className: "mb4x"
            }, u.default.createElement(s.Field, {
                component: d.ReduxUploadField,
                type: "file",
                accept: "application/pdf,image/gif,image/jpeg,image/png",
                id: "evidence",
                name: "evidence",
                label: m.t("Upload any evidence you may have")
            }), u.default.createElement("small", {
                className: "color-gray"
            }, m.t("Please upload only JPEG, GIF, PNG or PDF files. The file size must be less than 5MB."))), r && u.default.createElement(s.Field, {
                component: d.ReduxReCaptchaField,
                id: "captchaResponse",
                name: "captchaResponse",
                siteKey: r,
                className: "mb4x"
            }), u.default.createElement(c.Button, {
                className: "mb4x",
                fill: "solid-green",
                size: "large",
                type: "submit",
                dataElementId: "btn_contact_form_bene_submit",
                disabled: _ || v || b
            }, v ? u.default.createElement(c.LoadingDots, {
                color: "white",
                size: "large"
            }) : m.t("Send Email")))
        }
    },
    "7EE2": function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a("/MKj"),
            o = a("GfNm"),
            l = n(a("/EQP")),
            i = a("Cge7"),
            u = n(a("Rh+W")),
            s = r.connect((function() {
                var e = i.makeGetCampaignTitle(),
                    t = i.makeGetCampaignMainPhoto(),
                    a = i.makeGetCampaignUrl(),
                    n = o.makeGetPosterShortUrl(),
                    r = o.makeGetPosterShortUrlFailed(),
                    l = o.makeGetPosterShortUrlSuccess();
                return function(o, i) {
                    return {
                        campaignTitle: e(o),
                        fundUrl: a(o),
                        getPosterShortUrlFailed: r(o),
                        getPosterShortUrlSuccess: l(o),
                        mainPhoto: t(o),
                        posterShortUrl: n(o)
                    }
                }
            }), (function(e, t) {
                return {
                    getPosterShortUrl: function(t) {
                        e({
                            payload: t,
                            type: l.default.GET_SHORTEN_SHARE_UTM_URL_IN_PROGRESS
                        })
                    }
                }
            }))(u.default);
        t.default = s
    },
    "7L4o": function(e, t, a) {
        "use strict";
        a.r(t)
    },
    "7Z3M": function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("TSYQ")),
            o = n(a("q1tI")),
            l = a("yf/i"),
            i = a("p1Kg"),
            u = a("YgTb");
        a("PYRb");
        var s = a("C0Xu");
        t.default = function(e) {
            var t = e.amountFormatted,
                a = e.className,
                n = e.donor,
                c = e.offlineDonation,
                d = e.timeAgo,
                m = e.topSupporterType,
                f = r.default(a, "m-donation"),
                p = function() {
                    switch (m) {
                    case s.TopSupporterType.YOUR_DONATION:
                        return u.t("Your donation");
                    case s.TopSupporterType.MOST_RECENT_DONOR:
                        return u.t("Recent donation");
                    case s.TopSupporterType.TOP_DONOR:
                        return u.t("Top donation");
                    case s.TopSupporterType.FIRST_DONOR:
                        return u.t("First donation");
                    default:
                        return d
                    }
                }(),
                g = m ? o.default.createElement("span", {
                    className: "text-underline"
                }, p) : d;
            return o.default.createElement(l.PersonInfo, {
                anonText: u.t("Anonymous"),
                className: f,
                layout: "stacked",
                person: n,
                userRoleStrings: i.getUserRoleStrings()
            }, o.default.createElement(l.MetaList, {
                className: "m-donation-meta",
                items: [o.default.createElement(o.default.Fragment, {
                    key: 0
                }, o.default.createElement("span", {
                    className: "weight-900"
                }, t, o.default.createElement(l.HtmlSpace, {
                    type: "non-breaking"
                })), c && o.default.createElement("span", {
                    className: "color-gray"
                }, "(", u.t("Offline"), ")")), o.default.createElement("span", {
                    key: 1,
                    className: "color-gray"
                }, g)],
                style: "bullet"
            }))
        }
    },
    "7gRe": function(e, t, a) {
        "use strict";
        function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var r = this && this.__assign || function() {
                return (r = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = o(a("cr+I")),
            i = o(a("q1tI")),
            u = a("/MKj"),
            s = a("yf/i"),
            c = a("+yDP"),
            d = a("YgTb"),
            m = o(a("EcZt")),
            f = a("iahY"),
            p = a("omnk"),
            g = a("Cge7"),
            h = o(a("A9kC")),
            y = a("QtxA"),
            _ = a("6M7q"),
            b = o(a("mBZF")),
            v = u.connect((function() {
                var e = f.makeGetPostDonateCreateCommentMedia(),
                    t = p.makeGetFacebookId(),
                    a = g.makeGetCampaignLastDonation(),
                    r = f.makeGetPostDonateCreateCommentLoading(),
                    o = f.makeGetPostDonateCreateCommentError(),
                    l = f.makeGetPostDonateCreateCommentMediaError();
                return function(u, m) {
                    var f = y.getLastDonationId(),
                        p = y.getLastCheckoutId(),
                        g = a(u),
                        h = _.getLastDonorDetails(m.match.params.campaignUrl),
                        b = function(e, t) {
                            return !!e && !!t && e === t
                        },
                        v = {
                            fullName: "",
                            isAnonymous: !0,
                            profileImage: ""
                        };
                    g && !g.is_anonymous && (b(g.donation_id, f) || b(g.checkout_id, p)) ? (v.fullName = g.name && g.name.length > 35 ? c.truncate(g.name, 35, !1) + "..." : g.name, v.isAnonymous = g.is_anonymous, v.profileImage = g.profile_url) : h && !h.is_anonymous && b(h.checkout_id, p) ? (v.fullName = h.full_name, v.isAnonymous = h.is_anonymous, v.profileImage = h.profile_image || "") : m.history.push("/f/" + m.match.params.campaignUrl);
                    var E = o(u),
                        S = l(u),
                        C = [];
                    if ("object" === n(E)) {
                        if (10001 === E.code)
                            C.push({
                                message: d.t("To include a comment with your donation, you must add text and/or upload a photo.")
                            });
                        else if (10004 === E.code) {
                            var O = i.default.createElement(d.Trans, null, "Something went wrong. We’re working on it, please try again later or", i.default.createElement(s.HtmlSpace, {
                                type: "breaking"
                            }), i.default.createElement(s.Link, {
                                to: "https://support.gofundme.com/"
                            }, "contact us"), ".");
                            C.push({
                                message: O
                            })
                        }
                    } else
                        S && S.forEach((function(e) {
                            10001 === e.error.code ? C.push({
                                fileName: e.fileName,
                                message: d.t("{{fileName}}: Please choose a jpeg, jpg, gif, or png file type, and ensure it is smaller than 2048 kb.", {
                                    fileName: e.fileName
                                })
                            }) : 9001 === e.error.code && C.push({
                                fileName: e.fileName,
                                message: d.t("{{fileName}}: Please try again later.", {
                                    fileName: e.fileName
                                })
                            })
                        }));
                    return {
                        author: v,
                        errors: C,
                        facebookId: t(u),
                        submitting: r(u),
                        uploadedImages: e(u)
                    }
                }
            }), (function(e, t) {
                return {
                    onDeleteImage: function(t) {
                        e({
                            payload: {
                                url: t
                            },
                            type: m.default.UPLOAD_MEDIA_POSTDONATE_COMMENT_DELETE
                        })
                    },
                    onSubmit: function(a) {
                        var n = l.default.parse(t.location.search),
                            o = y.getLastCheckoutId();
                        n.d ? e({
                            payload: r(r({}, a), {
                                donationIdEncrypted: n.d ? encodeURIComponent(n.d) : ""
                            }),
                            payloadSuccess: {
                                history: t.history,
                                isPush: !0,
                                link: "/f/" + t.match.params.campaignUrl + t.location.search
                            },
                            type: m.default.CREATE_COMMENT_IN_PROGRESS,
                            typeSuccess: h.default.REDIRECT_ROUTER_PUSH
                        }) : o && e({
                            payload: r(r({}, a), {
                                checkoutId: o
                            }),
                            payloadSuccess: {
                                history: t.history,
                                isPush: !0,
                                link: "/f/" + t.match.params.campaignUrl + t.location.search
                            },
                            type: m.default.CREATE_COMMENT_IN_PROGRESS,
                            typeSuccess: h.default.REDIRECT_ROUTER_PUSH
                        })
                    },
                    removeProfilePhoto: function() {
                        var a = l.default.parse(t.location.search),
                            n = y.getLastCheckoutId();
                        a.d ? e({
                            payload: {
                                donationIdEncrypted: a.d ? encodeURIComponent(a.d) : "",
                                fundUrl: t.match.params.campaignUrl
                            },
                            type: m.default.ADD_FACEBOOK_ID_TO_DONATION_IN_PROGRESS
                        }) : n && e({
                            payload: {
                                checkoutId: n,
                                fundUrl: t.match.params.campaignUrl
                            },
                            type: m.default.ADD_FACEBOOK_ID_TO_DONATION_IN_PROGRESS
                        })
                    },
                    uploadImage: function(t) {
                        e({
                            payload: t,
                            type: m.default.UPLOAD_MEDIA_POSTDONATE_COMMENT_IN_PROGRESS
                        })
                    }
                }
            }))(b.default);
        t.default = v
    },
    "7y+r": function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = r(a("q1tI")),
            l = a("yf/i");
        a("E5K9"),
        t.default = function(e) {
            var t,
                a,
                r = e.accept,
                i = e.className,
                u = e.dataElementId,
                s = e.id,
                c = e.input,
                d = e.label,
                m = e.meta,
                f = e.multiple,
                p = {
                    id: s,
                    name: e.name
                },
                g = {
                    accept: r,
                    dataElementId: u,
                    multiple: f,
                    required: e.required
                };
            return o.default.createElement(l.FormField, {
                alerts: (t = m && m.error ? Array.isArray(m.error) ? m.error : [m.error] : void 0, a = m && m.warning ? Array.isArray(m.warning) ? m.warning : [m.warning] : void 0, t && t.length > 0 ? t.map((function(e) {
                    return {
                        message: e,
                        status: l.FieldStatus.ERROR
                    }
                })) : a && a.length > 0 ? a.map((function(e) {
                    return {
                        message: e,
                        status: l.FieldStatus.WARNING
                    }
                })) : void 0),
                className: i,
                id: s,
                label: d,
                layout: "stacked"
            }, o.default.createElement(l.Upload, n({}, p, g, c)))
        }
    },
    "8JjU": function(e, t, a) {
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
            r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            o = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && n(t, e, a);
                return r(t, e), t
            },
            l = this && this.__read || function(e, t) {
                var a = "function" == typeof Symbol && e[Symbol.iterator];
                if (!a)
                    return e;
                var n,
                    r,
                    o = a.call(e),
                    l = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(n = o.next()).done;)
                        l.push(n.value)
                } catch (i) {
                    r = {
                        error: i
                    }
                } finally {
                    try {
                        n && !n.done && (a = o.return) && a.call(o)
                    } finally {
                        if (r)
                            throw r.error
                    }
                }
                return l
            },
            i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = i(a("TSYQ")),
            s = o(a("q1tI")),
            c = i(a("+QRC")),
            d = a("yf/i"),
            m = a("zIs9");
        a("QRRn");
        var f = a("YgTb");
        t.default = function(e) {
            var t = e.className,
                a = e.shortURL,
                n = l(s.useState(m.CopyStatus.none), 2),
                r = n[0],
                o = n[1];
            s.useEffect((function() {
                var e = setTimeout((function() {
                    o(m.CopyStatus.none)
                }), 2e3);
                return function() {
                    clearTimeout(e)
                }
            }), [r]);
            var i = m.CopyStatus.success === r;
            return s.default.createElement(d.TagButton, {
                className: u.default(t, "m-campaign-link-tag-button", i ? "m-campaign-link-tag-button-clicked" : "", "mb", "mr"),
                dataElementId: "display_share_copy_link",
                iconName: i ? "check" : "link",
                onClick: function() {
                    var e = c.default(a);
                    o(e ? m.CopyStatus.success : m.CopyStatus.failure)
                }
            }, i ? f.t("Link Copied") : a)
        }
    },
    "8NXI": function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a("/MKj"),
            o = a("wQmL"),
            l = a("Cge7"),
            i = a("ZZcF"),
            u = a("C0Xu"),
            s = a("Le2r"),
            c = a("K9qA"),
            d = a("7OEO"),
            m = n(a("oqUn")),
            f = o.reduxForm({
                enableReinitialize: !0,
                form: u.CONTACT_FORM_JOURNALIST,
                submitAsSideEffect: !0
            })(m.default);
        t.default = r.connect((function() {
            var e = l.makeGetUserFullName(),
                t = l.makeGetUserEmail(),
                a = i.makeGetReCaptchaBigwebKey(),
                n = d.makeGetLeafId();
            return function(r, o) {
                return {
                    formTypeId: u.ContactFormType.JOURNALIST,
                    initialValues: {
                        email: t(r),
                        message: c.canUseDom() ? s.Cookies.getItem("solvvy_user_query") : "",
                        name: e(r)
                    },
                    leafId: n(r),
                    reCaptchaSiteKey: a(r)
                }
            }
        }), (function(e, t) {
            return {
                onSuccess: function() {
                    c.canUseDom() && s.Cookies.removeItem("solvvy_user_query"),
                    t.history.push("/contact/suggest/sent")
                }
            }
        }))(f)
    },
    "8PAa": function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = r(a("q1tI")),
            l = a("yf/i");
        a("wS+6"),
        t.default = function(e) {
            var t,
                a,
                r = e.className,
                i = e.label,
                u = e.id,
                s = e.input,
                c = e.meta,
                d = {
                    id: u,
                    name: e.name,
                    options: e.options
                },
                m = {
                    onChange: e.onChange
                };
            return o.default.createElement(l.FormField, {
                alerts: (t = c && c.error ? Array.isArray(c.error) ? c.error : [c.error] : void 0, a = c && c.warning ? Array.isArray(c.warning) ? c.warning : [c.warning] : void 0, t && t.length > 0 ? t.map((function(e) {
                    return {
                        message: e,
                        status: l.FieldStatus.ERROR
                    }
                })) : a && a.length > 0 ? a.map((function(e) {
                    return {
                        message: e,
                        status: l.FieldStatus.WARNING
                    }
                })) : void 0),
                className: r,
                id: u,
                label: i,
                layout: "stacked"
            }, o.default.createElement(l.Select, n({}, d, m, s)))
        }
    },
    "8ZbC": function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = r(a("q1tI")),
            l = a("dNNZ");
        t.default = function(e) {
            return o.default.createElement(l.SignInForgotPassword, n({}, e))
        }
    },
    "9+6X": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("s8ec");
        Object.defineProperty(t, "ExpansionListWrapper", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    "93EZ": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("dRPz");
        Object.defineProperty(t, "SheetSamp", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    "9JMi": function(e, t, a) {
        "use strict";
        a.r(t)
    },
    "9MVR": function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("q1tI")),
            o = a("yf/i"),
            l = a("8QVh"),
            i = a("o6hd"),
            u = a("x060"),
            s = a("YgTb");
        t.default = function(e) {
            var t = e.arrowIcon,
                a = e.dataElementId,
                n = e.className,
                c = e.from,
                d = e.id,
                m = e.label,
                f = e.url,
                p = l.getShareLink(f, i.UtmKeys.FACEBOOK_SHARE_SHARESHEET, c),
                g = u.FacebookSDK.getShareLink(p),
                h = !!t && r.default.createElement(o.UIIcon, {
                    name: "caret-right",
                    className: "share-button-arrow hide-for-large"
                });
            return r.default.createElement(o.Link, {
                className: n,
                dataElementId: a || "btn_share_facebook",
                id: d,
                unstyled: !0,
                onClick: function(e) {
                    e && e.preventDefault(),
                    u.FacebookSDK.share(g)
                },
                to: g
            }, r.default.createElement(o.LogoIcon, {
                name: "Facebook",
                className: "share-button-icon"
            }), m || s.t("Facebook"), h)
        }
    },
    "9QiV": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("CCaz");
        Object.defineProperty(t, "CampaignHead", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        }),
        Object.defineProperty(t, "CampaignHeadProps", {
            enumerable: !0,
            get: function() {
                return n.CampaignHeadProps
            }
        })
    },
    "9pH/": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.widgetShareCard = t.manageFundCard = t.addProfilePhotoForPerson = t.joinFundraiserCard = t.facebookShareCard = t.addProfilePhotoForDonor = t.addCommentCard = t.donationSummaryCard = t.donateCard = t.shareLinkCard = void 0;
        var n = a("zIs9"),
            r = a("YgTb");
        t.shareLinkCard = function(e) {
            return {
                action: e,
                btnText: r.t("Copy fundraiser link"),
                dataElementId: "pg_guidance_card_link",
                description: r.t("Share this fundraiser so it can raise up to 5x more."),
                icon: n.guidanceCardIcon.SHARE,
                linkAs: "route"
            }
        },
        t.donateCard = function(e) {
            return {
                action: function() {},
                btnText: r.t("Donate"),
                dataElementId: "btn_donate_guidance",
                description: r.t("Build momentum for this fundraiser."),
                icon: n.guidanceCardIcon.DONATE,
                url: e
            }
        },
        t.donationSummaryCard = function(e) {
            return {
                action: function() {},
                btnText: r.t("View donation summary"),
                dataElementId: "pg_guidance_card_summary",
                description: r.t("Check out your donation details."),
                icon: n.guidanceCardIcon.RECEIPT,
                url: "/donations/" + e
            }
        },
        t.addCommentCard = function(e) {
            return {
                action: function() {},
                btnText: r.t("Add a comment"),
                dataElementId: "pg_guidance_card_card",
                description: r.t("Add a supportive message with your donation."),
                icon: n.guidanceCardIcon.COMMENT,
                url: "/donations/" + e
            }
        },
        t.addProfilePhotoForDonor = function(e, t, a, o) {
            return {
                action: e ? function() {} : function() {
                    return a(t)
                },
                btnText: r.t("Add a profile photo"),
                dataElementId: "pg_guidance_card_photo",
                description: e && o && !o.profileImage ? r.t("Looks good. Your profile photo has been added.") : r.t("Let friends and the GoFundMe community know it’s you!"),
                disableClick: e,
                hideBtn: e || o && !!o.profileImage,
                icon: n.guidanceCardIcon.PROFILE
            }
        },
        t.facebookShareCard = function(e) {
            return {
                action: e,
                btnText: r.t("Share on Facebook"),
                dataElementId: "pg_guidance_card_facebook",
                description: r.t("Tell your Facebook friends about this fundraiser."),
                icon: n.guidanceCardIcon.FACEBOOK
            }
        },
        t.joinFundraiserCard = function(e, t, a, o, l) {
            return void 0 === t && (t = ""), {
                action: a ? l : void 0,
                btnText: r.t("Join fundraising team"),
                dataElementId: "pg_guidance_card_susi",
                description: r.t("Help {{organizerName}} raise more funds.", {
                    organizerName: t
                }),
                icon: n.guidanceCardIcon.JOIN,
                url: a ? void 0 : "/f/" + e + "/sign-up/email?teamInvite=" + o,
                linkAs: a ? "route" : "href"
            }
        },
        t.addProfilePhotoForPerson = function(e, t, a, o) {
            return {
                action: e ? function() {} : o ? function() {
                    return t()
                } : function() {
                    return a()
                },
                btnText: r.t("Add a profile photo"),
                dataElementId: "pg_guidance_card_photo",
                description: e ? r.t("Looks good. Your profile photo has been added.") : r.t("Let friends and the GoFundMe community know it’s you!"),
                disableClick: e,
                hideBtn: e,
                icon: n.guidanceCardIcon.PROFILE
            }
        },
        t.manageFundCard = function(e) {
            return {
                action: function() {},
                btnText: r.t("Thank donors"),
                dataElementId: "pg_guidance_card_manage",
                description: r.t("Show appreciation and get more support. Ask donors to share this fundraiser."),
                icon: n.guidanceCardIcon.MANAGE,
                url: "/manage/" + e
            }
        },
        t.widgetShareCard = function(e) {
            return {
                action: e,
                btnText: r.t("Add a donate button"),
                dataElementId: "pg_guidance_card_widget",
                description: r.t("Reach your community on a website or blog."),
                icon: n.guidanceCardIcon.WIDGET
            }
        }
    },
    "9r2/": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("P1gt");
        Object.defineProperty(t, "MobileNavStandard", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        }),
        Object.defineProperty(t, "MobileNavStandardProps", {
            enumerable: !0,
            get: function() {
                return n.MobileNavStandardProps
            }
        })
    },
    "9uO+": function(e, t, a) {
        "use strict";
        a.r(t)
    },
    "9zS7": function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            r = this && this.__createBinding || (Object.create ? function(e, t, a, n) {
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
            o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            l = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && r(t, e, a);
                return o(t, e), t
            },
            i = this && this.__rest || function(e, t) {
                var a = {};
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var r = 0;
                    for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
                        t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (a[n[r]] = e[n[r]])
                }
                return a
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = l(a("q1tI")),
            s = a("CXyy");
        function c(e) {
            var t = e.show,
                a = e.authenticate,
                r = i(e, ["show", "authenticate"]);
            return u.useEffect((function() {
                return s.ZendeskChatSDK.initialize(n({
                    authenticate: a
                }, r)), t ? s.ZendeskChatSDK.open() : s.ZendeskChatSDK.close(), function() {
                    return s.ZendeskChatSDK.destroy()
                }
            }), [a]), u.useEffect((function() {
                t ? s.ZendeskChatSDK.open() : s.ZendeskChatSDK.close()
            }), [t]), u.default.createElement(u.default.Fragment, null)
        }
        c.defaultProps = {
            authenticate: !1,
            show: !1
        },
        t.default = c
    },
    A0jz: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    ADO5: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    AGmz: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    AMK0: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("YSM7");
        Object.defineProperty(t, "SignUpInitial", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    AMkt: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("McwX");
        Object.defineProperty(t, "ContactFormJournalist", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        }),
        Object.defineProperty(t, "ContactFormJournalistInput", {
            enumerable: !0,
            get: function() {
                return n.ContactFormJournalistInput
            }
        }),
        Object.defineProperty(t, "ContactFormJournalistProps", {
            enumerable: !0,
            get: function() {
                return n.ContactFormJournalistProps
            }
        })
    },
    ASry: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("fiJ5");
        Object.defineProperty(t, "PostDonateShare", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        });
        var r = a("Kr0X");
        Object.defineProperty(t, "PostDonateShareConnected", {
            enumerable: !0,
            get: function() {
                return r.default
            }
        })
    },
    Acej: function(e, t, a) {
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
            r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            o = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && n(t, e, a);
                return r(t, e), t
            },
            l = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = l(a("TSYQ")),
            u = o(a("q1tI")),
            s = a("yf/i"),
            c = a("p1Kg"),
            d = a("YgTb");
        t.default = function(e) {
            var t = e.className,
                a = e.isActive,
                n = e.isShort,
                r = e.donationsLength,
                o = i.default(t, "mt3x");
            if (!a || r > 4 || n && r > 2)
                return u.default.createElement(u.Fragment, null);
            var l = r ? d.t("Become an early supporter") : d.t("Become the first supporter"),
                m = (!n && r || !r) && r < 3;
            return u.default.createElement(u.Fragment, null, u.default.createElement(s.PersonInfo, {
                anonText: d.t("Anonymous"),
                className: o,
                layout: "stacked",
                person: {
                    fullName: l,
                    initials: "NA"
                },
                userRoleStrings: c.getUserRoleStrings()
            }, u.default.createElement("p", {
                className: "color-gray mt0 mb0 weight-400"
            }, d.t("Your donation matters"))), m && u.default.createElement("div", {
                className: "hide-for-small-only",
                "data-test": "gofundme-guarantee"
            }, u.default.createElement(s.Rule, {
                className: "mt3x",
                type: "horizontal",
                gutterPull: !0
            }), u.default.createElement("h3", {
                className: "heading-5 mb mt3x"
            }, d.t("GoFundMe Guarantee")), u.default.createElement("p", null, d.t("In the rare case something isn’t right, we will work with you to determine if misuse occurred."))))
        }
    },
    AePS: function(e, t, a) {
        "use strict";
        a.r(t),
        t.default = a.p + "static/media/share.1adda3d5eb4997a1c2c5ac851a435e48.svg"
    },
    AxEi: function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = r(a("q1tI")),
            l = a("b2Xb"),
            i = a("YgTb"),
            u = a("wE+H"),
            s = a("yf/i");
        t.default = function(e) {
            var t = e.organizer;
            return o.default.createElement(s.Toggle, null, (function(e) {
                var a = e.on,
                    r = e.setOn,
                    c = e.setOff;
                return o.default.createElement(o.default.Fragment, null, o.default.createElement(s.Button, {
                    onClick: r,
                    fill: "hollow-green",
                    size: "small",
                    dataElementId: "btn_organizer_contact"
                }, i.t("Contact")), o.default.createElement(s.Modal, {
                    dataViewId: "lb_contact_organizer",
                    isOpen: a,
                    onClose: c
                }, o.default.createElement("h2", {
                    className: "mb4x"
                }, i.t("Write {{firstName}} a message", {
                    firstName: t.firstName
                })), o.default.createElement("div", {
                    className: "flex-container align-middle mb4x"
                }, o.default.createElement(s.Avatar, n({}, t, {
                    as: u.IdentityType.person,
                    className: "mr2x"
                })), o.default.createElement("div", null, t.fullName, o.default.createElement("div", {
                    className: "text-small color-gray"
                }, i.t("Organizer")))), o.default.createElement(l.ContactOrganizerFormConnected, {
                    onSubmitComplete: c
                })))
            }))
        }
    },
    "BDj+": function(e, t, a) {
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
            r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            o = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && n(t, e, a);
                return r(t, e), t
            },
            l = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = l(a("TSYQ")),
            u = o(a("q1tI")),
            s = a("yf/i"),
            c = a("z+lN"),
            d = a("YgTb"),
            m = a("+Ded");
        a("4Q1K");
        var f = a("2JF7"),
            p = a("jQuR"),
            g = a("9+6X");
        t.default = function(e) {
            var t = e.campaignUrl,
                a = e.campaignTitle,
                n = e.donateUrl,
                r = e.className,
                o = e.isCharity,
                l = e.isOpen,
                h = e.getUpdates,
                y = e.onBannerViewEvent,
                _ = e.onClickCompetitorLink,
                b = e.onClickUpdateImage,
                v = e.onClose,
                E = e.updates,
                S = e.totalUpdates,
                C = e.updatesPaginationLength,
                O = e.hasNext,
                P = i.default(r, "o-updates-modal-list list-unstyled");
            u.useEffect((function() {
                m.trackEvents.trackEvent({
                    type: "mp_page_view",
                    viewId: "lb_updates"
                })
            }), []);
            var I = S ? d.t("Fundraiser updates ({{totalUpdates}})", {
                    totalUpdates: S
                }) : d.t("Fundraiser updates"),
                k = u.default.createElement(u.Fragment, null, u.default.createElement("div", {
                    className: "o-updates-modal-header flex-container flex-dir-column"
                }, u.default.createElement("div", {
                    className: "o-updates-modal-title-container flex-container align-justify"
                }, u.default.createElement("h2", {
                    className: "o-updates-modal-title heading-5 mb0"
                }, I), u.default.createElement(s.IconButton, {
                    ariaLabel: d.t("Close fundraiser updates modal"),
                    className: "o-updates-modal-close-button pb0 pl0 pr0 pt0",
                    dataElementId: "btn_update_close",
                    iconType: "ui",
                    iconName: "close",
                    onClick: v
                })), u.default.createElement("div", {
                    className: "o-updates-modal-button-container flex-container align-spaced"
                }, u.default.createElement(s.PrimaryButton, {
                    as: "href",
                    className: "mr",
                    color: "yellow",
                    dataElementId: "btn_donate_update",
                    layout: "full",
                    size: "large",
                    to: n
                }, d.t("Donate now")), u.default.createElement(s.SecondaryButton, {
                    className: "ml",
                    color: "yellow",
                    dataElementId: "btn_share_update",
                    layout: "full",
                    size: "large",
                    to: "/f/" + t + "/share"
                }, d.t("Share")))), u.default.createElement("div", {
                    className: "o-updates-modal-content"
                }, u.default.createElement("h3", {
                    className: "heading-2 mb3x"
                }, a), E.some((function(e) {
                    return f.isCompetitorText(e.text)
                })) && !o && u.default.createElement(p.CompetitorBanner, {
                    className: "mb3x",
                    onBannerViewEvent: y
                }), u.default.createElement(g.ExpansionListWrapper, {
                    maxItems: S || E.length || 0,
                    buttonText: d.t("Show more"),
                    itemCount: E.length,
                    showMore: O,
                    ajaxOnScroll: function() {
                        return h && h(E.length, C)
                    }
                }, u.default.createElement("ul", {
                    className: P
                }, E.map((function(e, t) {
                    return u.default.createElement("li", {
                        key: t + 1,
                        className: "o-updates-modal-item"
                    }, u.default.createElement(c.Update, {
                        id: e.id,
                        author: e.author,
                        authorType: e.authorType,
                        className: i.default(e.className, "o-updates-modal-list-item"),
                        date: e.date,
                        images: e.images,
                        text: e.text,
                        onClickUpdateImage: b,
                        onClickCompetitorLink: _
                    }))
                })))), u.default.createElement("div", {
                    className: "o-updates-modal-button-container flex-container align-spaced hide-for-large"
                }, u.default.createElement(s.PrimaryButton, {
                    as: "href",
                    className: "mr",
                    color: "yellow",
                    dataElementId: "btn_donate_update",
                    layout: "full",
                    size: "large",
                    to: n
                }, d.t("Donate now")), u.default.createElement(s.SecondaryButton, {
                    className: "ml",
                    color: "yellow",
                    dataElementId: "btn_share_update",
                    layout: "full",
                    size: "large",
                    to: "/f/" + t + "/share"
                }, d.t("Share")))));
            return u.default.createElement(s.BaseModal, {
                className: "o-updates-modal",
                dataViewId: "lb_updates",
                isOpen: l,
                onClose: v,
                overlayColor: "transparentBlack"
            }, k)
        }
    },
    BEv3: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("4ds6");
        Object.defineProperty(t, "GDPRCookieModal", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    "BW/n": function(e, t, a) {
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
            r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            o = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && n(t, e, a);
                return r(t, e), t
            },
            l = this && this.__read || function(e, t) {
                var a = "function" == typeof Symbol && e[Symbol.iterator];
                if (!a)
                    return e;
                var n,
                    r,
                    o = a.call(e),
                    l = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(n = o.next()).done;)
                        l.push(n.value)
                } catch (i) {
                    r = {
                        error: i
                    }
                } finally {
                    try {
                        n && !n.done && (a = o.return) && a.call(o)
                    } finally {
                        if (r)
                            throw r.error
                    }
                }
                return l
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(a("q1tI")),
            u = a("dNNZ"),
            s = a("z+lN"),
            c = a("YgTb"),
            d = a("2JF7"),
            m = a("jQuR");
        t.default = function(e) {
            var t = e.campaignTitle,
                a = e.campaignUrl,
                n = e.donateUrl,
                r = e.getUpdates,
                o = e.isCharity,
                f = e.onBannerViewEvent,
                p = e.onClickCompetitorLink,
                g = e.onClickUpdateImage,
                h = e.updates,
                y = e.totalUpdates,
                _ = void 0 === y ? 0 : y,
                b = e.hasNext,
                v = l(i.useState(!1), 2),
                E = v[0],
                S = v[1];
            return i.default.createElement(u.ErrorBoundary, {
                type: "suppress"
            }, i.default.createElement("div", {
                className: "p-campaign-updates"
            }, E && i.default.createElement(u.UpdatesModal, {
                updatesPaginationLength: 20,
                campaignTitle: t,
                campaignUrl: a,
                donateUrl: n,
                isCharity: o,
                isOpen: E,
                getUpdates: r,
                onBannerViewEvent: f,
                onClickCompetitorLink: p,
                onClickUpdateImage: g,
                onClose: function() {
                    return S(!1)
                },
                updates: h,
                totalUpdates: _,
                hasNext: !!b
            }), i.default.createElement(u.ExpansionListWrapper, {
                buttonText: c.t("Continue reading"),
                showMore: !1,
                showCount: !0,
                header: c.t("Updates"),
                maxItems: 1,
                itemCount: _
            }, i.default.createElement(s.Update, {
                id: h[0].id,
                author: h[0].author,
                authorType: h[0].authorType,
                className: h[0].className,
                date: h[0].date,
                images: h[0].images,
                text: h[0].text,
                onClickCompetitorLink: p,
                onClickUpdateImage: g,
                onContinueClick: function() {
                    r && h.length !== _ && r(h.length, 20),
                    S(!0)
                },
                exampleUpdate: h.length > 1
            })), d.isCompetitorText(h[0].text) && !o && i.default.createElement(m.CompetitorBanner, {
                onBannerViewEvent: f
            })))
        }
    },
    Bumg: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    C0yj: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("end9");
        Object.defineProperty(t, "ValueProp", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        }),
        Object.defineProperty(t, "ValuePropProps", {
            enumerable: !0,
            get: function() {
                return n.ValuePropProps
            }
        })
    },
    CCaz: function(e, t, a) {
        "use strict";
        var n,
            r = this && this.__extends || (n = function(e, t) {
                return (n = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var a in t)
                        t.hasOwnProperty(a) && (e[a] = t[a])
                })(e, t)
            }, function(e, t) {
                function a() {
                    this.constructor = e
                }
                n(e, t),
                e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, new a)
            }),
            o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = o(a("q1tI")),
            i = a("it2i"),
            u = a("YgTb"),
            s = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r(t, e), t.prototype.render = function() {
                    var e = this.props,
                        t = e.appId,
                        a = e.pages,
                        n = e.children,
                        r = e.campaign,
                        o = e.locale,
                        s = e.noFollow,
                        c = r.beneficiary ? r.beneficiary : r.organizer,
                        d = r.descriptionExcerpt ? r.descriptionExcerpt : u.t("{{- userName}} needs your help today! {{- campaignTitle}}", {
                            campaignTitle: r.title,
                            userName: c
                        }),
                        m = r.beneficiary ? u.t("Fundraiser for {{- userName}} by {{- campaignOrganizer}} : {{- campaignTitle}}", {
                            campaignOrganizer: r.organizer,
                            campaignTitle: r.title,
                            userName: c
                        }) : u.t("Fundraiser by {{- userName}} : {{- campaignTitle}}", {
                            campaignTitle: r.title,
                            userName: c
                        }),
                        f = u.t("{{- campaignTitle}}, organized by {{- campaignOrganizer}}", {
                            campaignOrganizer: r.organizer,
                            campaignTitle: r.title
                        });
                    return l.default.createElement(i.GlobalHead, {
                        noFollow: s,
                        description: d,
                        title: m,
                        url: r.url
                    }, l.default.createElement(i.FacebookMetaTags, {
                        appId: t,
                        pages: a
                    }), l.default.createElement(i.OpenGraph, {
                        description: d,
                        image: r.image,
                        locale: o,
                        title: f,
                        url: r.url
                    }), l.default.createElement(i.TwitterMetaTags, {
                        description: d,
                        image: r.image,
                        title: f
                    }), n)
                }, t
            }(l.default.Component);
        t.default = s
    },
    CRBb: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("DuAc");
        Object.defineProperty(t, "CampaignEmbedWidget", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        });
        var r = a("Pqaj");
        Object.defineProperty(t, "CampaignEmbedWidgetConnected", {
            enumerable: !0,
            get: function() {
                return r.default
            }
        })
    },
    CRP2: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("TSYQ")),
            o = n(a("q1tI")),
            l = a("yf/i"),
            i = a("p1Kg"),
            u = a("YgTb");
        function s(e) {
            var t = e.className,
                a = e.meta,
                n = e.showRole,
                s = e.person,
                c = r.default(t),
                d = r.default("text-small", a && a.className || ""),
                m = (a ? [a.roleString, a.attributionStats, a.city] : []).map((function(e, t) {
                    return e && o.default.createElement("div", {
                            key: "member-meta-" + t,
                            className: d
                        }, e)
                }));
            return o.default.createElement(l.PersonInfo, {
                anonText: u.t("Anonymous"),
                className: c,
                layout: "stacked",
                person: s,
                showRole: n,
                userRoleStrings: i.getUserRoleStrings()
            }, m)
        }
        s.defaultProps = {
            showRole: !1
        },
        t.default = s
    },
    "CX/d": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("P7CT");
        Object.defineProperty(t, "ContactFormDefaultPartialConnected", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    Cg9H: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a("/MKj"),
            o = a("wQmL"),
            l = n(a("pQ4L")),
            i = n(a("x7ym")),
            u = a("YgTb"),
            s = a("Fj9b"),
            c = a("dpDq"),
            d = n(a("p48P")),
            m = o.reduxForm({
                form: "ContactOrganizerForm"
            })(i.default);
        t.default = r.connect((function() {
            var e = s.makeGetInitialValues(),
                t = c.makeGetCaptchaRequired(),
                a = c.makeGetCaptchaValid(),
                n = c.makeGetCaptchaValidating(),
                r = c.makeGetInvisibleRecaptchaKey(),
                o = c.makeGetReCaptchaToken();
            return function(l) {
                return {
                    initialValues: e(l),
                    isCaptchaRequired: t(l),
                    isCaptchaValid: a(l),
                    isCaptchaValidating: n(l),
                    reCaptchaSiteKey: r(l),
                    reCaptchaToken: o(l)
                }
            }
        }), (function(e, t) {
            return {
                getCaptcha: function() {
                    e({
                        type: d.default.GET_CAPTCHA_IN_PROGRESS
                    })
                },
                onFailureContact: function(t) {
                    var a = {};
                    if (t && t.error) {
                        var n = t.error;
                        switch (n.code) {
                        case 9001:
                            a._error = "Captcha validation failed." === n.message ? u.t("Captcha challenge failed. Please try again.") : u.t("You exceeded the maximum number of tries. Please try again later.");
                            break;
                        default:
                            a._error = u.t("An error occurred. Please try again later.")
                        }
                        e(o.stopSubmit("ContactOrganizerForm", a))
                    } else
                        e(o.stopSubmit("ContactOrganizerForm", {
                            _error: u.t("An error occurred. Please try again later.")
                        }))
                },
                onSubmit: function(a) {
                    return l.default(a, e, t.onSubmitComplete)
                },
                reCaptchaExecute: function() {
                    e({
                        type: d.default.VALIDATE_CAPTCHA_IN_PROGRESS
                    })
                },
                setReCaptchaToken: function(t) {
                    e({
                        payload: t,
                        type: d.default.RECAPTCHA_TOKEN_SUCCESS
                    })
                }
            }
        }))(m)
    },
    CjC9: function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            r = this && this.__createBinding || (Object.create ? function(e, t, a, n) {
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
            o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            l = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && r(t, e, a);
                return o(t, e), t
            },
            i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = i(a("TSYQ")),
            s = l(a("q1tI")),
            c = a("+Ded"),
            d = a("wE+H"),
            m = a("yf/i"),
            f = a("z+lN"),
            p = a("YgTb");
        a("9uO+"),
        t.default = function(e) {
            var t = e.campaignUrl,
                a = e.className,
                r = e.teamMembersList,
                o = e.isTeamCampaignWithTeamMembers,
                l = e.unreferredDonationStats,
                i = e.location,
                g = e.history,
                h = "/f/" + t + i.search,
                y = u.default(a);
            s.useEffect((function() {
                c.trackEvents.push({
                    type: "mp_page_view",
                    viewId: "lb_team"
                })
            }));
            var _ = s.default.createElement("h2", {
                    className: "heading-5 mb0"
                }, p.t("Fundraising team ({{count}})", {
                    count: r.length
                })),
                b = s.default.createElement("ul", {
                    className: "list-unstyled mb2x"
                }, r.map((function(e, t) {
                    var a = e.meta && (e.person.role === d.UserRoles.ORGANIZER || e.person.role === d.UserRoles.BENEFICIARY),
                        r = n(n({}, e), {
                            meta: n(n({}, e.meta), {
                                className: "color-gray"
                            }),
                            showRole: a
                        });
                    return s.default.createElement("li", {
                        className: "o-teammember-list-item",
                        key: t
                    }, s.default.createElement(f.CampaignMemberItem, n({
                        key: "teamslist" + t
                    }, r)))
                })), l && s.default.createElement("li", {
                    className: "o-teammember-list-item",
                    key: "footer"
                }, s.default.createElement("div", {
                    className: "text-small color-gray"
                }, l)));
            return o ? s.default.createElement(m.Modal, {
                isOpen: !0,
                onClose: function() {
                    g.push(h)
                },
                className: y,
                heading: _
            }, b) : s.default.createElement(s.default.Fragment, null)
        }
    },
    ClJ3: function(e, t, a) {
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
            r = this && this.__exportStar || function(e, t) {
                for (var a in e)
                    "default" === a || t.hasOwnProperty(a) || n(t, e, a)
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = a("RV82");
        Object.defineProperty(t, "CampaignPage", {
            enumerable: !0,
            get: function() {
                return o.CampaignPage
            }
        }),
        Object.defineProperty(t, "CampaignPageConnected", {
            enumerable: !0,
            get: function() {
                return o.CampaignPageConnected
            }
        }),
        Object.defineProperty(t, "CampaignPageParams", {
            enumerable: !0,
            get: function() {
                return o.CampaignPageParams
            }
        }),
        Object.defineProperty(t, "CampaignPageProps", {
            enumerable: !0,
            get: function() {
                return o.CampaignPageProps
            }
        }),
        r(a("iYtb"), t),
        r(a("U6gC"), t),
        r(a("n/+C"), t),
        r(a("H52L"), t),
        r(a("jGEM"), t),
        r(a("e7Sj"), t)
    },
    Cp5M: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    Ct87: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("WVVu");
        Object.defineProperty(t, "NavStandard", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        }),
        Object.defineProperty(t, "NavStandardProps", {
            enumerable: !0,
            get: function() {
                return n.NavStandardProps
            }
        })
    },
    "D/cl": function(e, t, a) {
        "use strict";
        a.r(t)
    },
    DaB8: function(e, t, a) {
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
            r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            o = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && n(t, e, a);
                return r(t, e), t
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = o(a("q1tI")),
            i = a("yf/i"),
            u = a("K9qA"),
            s = a("YgTb");
        t.default = function(e) {
            var t = e.arrowIcon,
                a = e.children,
                n = e.className,
                r = e.dataElementId,
                o = e.id,
                c = e.label,
                d = e.subject,
                m = e.emailShortUrlComplete,
                f = e.getEmailShortUrl,
                p = !!t && l.default.createElement(i.UIIcon, {
                    name: "caret-right",
                    className: "share-button-arrow hide-for-large"
                }),
                g = l.useRef(!!m);
            l.useEffect((function() {
                g.current = !!m
            }), [m]);
            var h = g.current;
            return m && !h && u.domHelper.openMailTo(a, d), l.default.createElement(i.Link, {
                className: n,
                dataElementId: r || "btn_share_email",
                id: o,
                unstyled: !0,
                onClick: function(e) {
                    e && e.preventDefault(),
                    f && !m ? f() : u.domHelper.openMailTo(a, d)
                },
                to: "mailto:?subject=" + d + "&amp;body=" + a
            }, l.default.createElement(i.UIIcon, {
                name: "envelope",
                className: "share-button-icon"
            }), c || s.t("Email"), p)
        }
    },
    Dta8: function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = r(a("q1tI")),
            l = a("qhky"),
            i = a("dNNZ"),
            u = a("YgTb");
        t.default = function(e) {
            return o.default.createElement(i.ContactWrapper, {
                backButton: {
                    as: "route",
                    dataElementId: "btn_contact_form_bene_back",
                    label: u.t("Suggestions"),
                    to: "/contact/suggest"
                },
                dataViewId: "pg_contact_form_bene",
                title: u.t("Make a Beneficiary Claim"),
                showFaq: !0
            }, o.default.createElement(l.Helmet, null, o.default.createElement("title", null, u.t("Make a Beneficiary Claim | GoFundMe Support")), o.default.createElement("meta", {
                name: "robots",
                content: "noindex"
            })), o.default.createElement(i.ContactFormBene, n({}, e)))
        }
    },
    DuAc: function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            r = this && this.__createBinding || (Object.create ? function(e, t, a, n) {
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
            o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            l = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && r(t, e, a);
                return o(t, e), t
            },
            i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = l(a("q1tI")),
            s = i(a("cr+I")),
            c = a("+Ded"),
            d = a("sUL3"),
            m = a("dNNZ"),
            f = a("p1Kg");
        a("m1bS"),
        t.default = function(e) {
            var t = e.analyticsEventData,
                a = e.donateUrl,
                r = e.goal,
                o = e.fundId,
                l = e.location,
                i = e.match,
                p = e.raised,
                g = e.goalAmountString,
                h = e.image,
                y = e.raisedAmountString,
                _ = e.status,
                b = e.title,
                v = e.url,
                E = function() {
                    var e = [f.CampaignStatus.DEACTIVATED.toString(), f.CampaignStatus.DELETED.toString()],
                        a = n(n({}, t), {
                            widgetVersion: e.includes(_) ? "deactive" : i.params.type
                        });
                    c.trackEvents.getPlatform("Amplitude").setData(a)
                };
            return u.useEffect((function() {
                try {
                    t && (E(), c.trackEvents.trackEvent({
                        type: "mp_page_view",
                        viewId: "pg_widget"
                    }))
                } catch (e) {
                    console.log(e)
                }
            }), []), u.useEffect((function() {
                try {
                    t && E()
                } catch (e) {
                    console.log(e)
                }
            }), [t]), d.useWindowResize((function() {
                try {
                    var e = window.document.getElementById("gfm-campaign-widget");
                    e && window.parent.postMessage({
                        offsetHeight: e.offsetHeight,
                        offsetWidth: e.offsetWidth
                    }, "*")
                } catch (t) {}
            })), u.default.createElement(m.CampaignEmbed, {
                browsingContext: "self" === s.default.parse(l.search).bc ? "_self" : "_blank",
                id: "gfm-campaign-widget",
                fundUrl: i.params.campaignUrl,
                fundId: o,
                donateUrl: a,
                goal: r,
                image: function() {
                    if ("large" === i.params.type)
                        return h
                }(),
                raised: p,
                goalAmountString: g,
                raisedAmountString: y,
                status: _,
                title: b,
                url: v,
                useButtonOnly: "small" === i.params.type,
                smallText: i.params.text
            })
        }
    },
    DwRE: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("u1kj");
        Object.defineProperty(t, "CampaignMembersMain", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    E5K9: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    Ecrp: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    "Eec/": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.makeGetCampaignCanonicalUrl = t.makeGetDonateCanonicalUrl = t.makeGetCampaignGoalAmountString = t.makeGetCampaignRaisedAmountString = void 0;
        var n,
            r = a("G4qV"),
            o = a("hXCg"),
            l = a("Cge7"),
            i = a("ZZcF"),
            u = a("8QVh"),
            s = a("o6hd"),
            c = function() {
                return r.createSelector([i.makeGetLocale(), l.makeGetCampaignCurrency()], (function(e, t) {
                    return n ? n.setCurrencyProps({
                        currency: t,
                        currencyDisplay: "symbol"
                    }) : (n = new o.LocaleNumberFormatter(e)).setCurrencyProps({
                        currency: t,
                        currencyDisplay: "symbol"
                    })
                }))
            };
        t.makeGetCampaignRaisedAmountString = function() {
            return r.createSelector([l.makeGetCampaignCurrentAmount(), c()], (function(e, t) {
                return t.formatAsCurrency(e)
            }))
        };
        t.makeGetCampaignGoalAmountString = function() {
            return r.createSelector([l.makeGetCampaignGoalAmount(), c()], (function(e, t) {
                return t.formatAsCurrency(e)
            }))
        };
        t.makeGetDonateCanonicalUrl = function() {
            return r.createSelector([i.makeGetBaseUrl("/f/"), l.makeGetCampaignUrl(), l.makeGetMemberId()], (function(e, t, a) {
                return u.getShareLink(u.normalize(e + "/" + t + "/donate" + (a ? "?member=" + a : "")), s.UtmKeys.EMBED_WIDGET_DONATE, s.UtmFromKeys.CAMPAIGN_PAGE)
            }))
        };
        t.makeGetCampaignCanonicalUrl = function() {
            return r.createSelector([i.makeGetBaseUrl("/f/"), l.makeGetCampaignUrl()], (function(e, t) {
                return u.getShareLink(u.normalize(e + "/" + t), s.UtmKeys.EMBED_WIDGET_DONATE, s.UtmFromKeys.CAMPAIGN_PAGE)
            }))
        }
    },
    Ehkd: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("xML2");
        Object.defineProperty(t, "CampaignEmbedForm", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        });
        var r = a("Orad");
        Object.defineProperty(t, "CampaignEmbedFormConnected", {
            enumerable: !0,
            get: function() {
                return r.default
            }
        })
    },
    EjfZ: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("Pw7W");
        Object.defineProperty(t, "ImageUploadPreview", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    Euxe: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("I5rM");
        Object.defineProperty(t, "CampaignMembers", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        }),
        Object.defineProperty(t, "CampaignMemberProps", {
            enumerable: !0,
            get: function() {
                return n.CampaignMemberProps
            }
        })
    },
    F9nm: function(e, t, a) {
        "use strict";
        a.r(t),
        t.default = a.p + "static/media/profile.ea68b676b27eb43372a71062517b501f.svg"
    },
    FGQ0: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    },
    FOiZ: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("q1tI")),
            o = a("+Ded"),
            l = a("yf/i"),
            i = n(a("TSYQ")),
            u = a("YgTb");
        a("oHjd"),
        t.default = function(e) {
            var t = e.domain,
                a = e.isOpen,
                n = e.onClose,
                s = e.onButtonClick,
                c = e.onManageCookies,
                d = i.default("m-gdpr-alert-banner", {
                    hide: !a
                });
            return r.default.createElement("div", {
                className: d
            }, r.default.createElement("div", {
                className: "m-gdpr-alert-banner-wrapper flex-container global-wrapper mb2x mt2x"
            }, r.default.createElement("div", {
                className: "m-gdpr-alert-banner-text"
            }, r.default.createElement(u.Trans, null, r.default.createElement("strong", null, "We use cookies"), " to enable features and market content. Click “That’s OK” to add cookies. View", r.default.createElement(l.HtmlSpace, {
                type: "non-breaking"
            }), r.default.createElement(l.Link, {
                as: "href",
                to: "https://www." + t + "/privacy",
                target: "_blank",
                rel: "noopener",
                onClick: function() {
                    o.trackEvents.push({
                        elementId: "gdpr_privacy_policy",
                        type: "click",
                        viewId: "gdpr_banner"
                    })
                }
            }, "privacy policy"), r.default.createElement(l.HtmlSpace, {
                type: "non-breaking"
            }), "or", r.default.createElement(l.HtmlSpace, {
                type: "non-breaking"
            }), r.default.createElement(l.Button, {
                className: "m-gdpr-alert-banner-manage",
                onClick: c
            }, "manage cookies."))), r.default.createElement(l.SecondaryButton, {
                className: "m-gdpr-alert-banner-button",
                layout: "full-for-small",
                onClick: function() {
                    s(),
                    n()
                },
                size: "large"
            }, u.t("That's OK"))))
        }
    },
    FVWn: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("3wKs");
        Object.defineProperty(t, "StickyCta", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    Febe: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.generateEventToBeTracked = void 0;
        t.generateEventToBeTracked = function(e) {
            var t = e.currency,
                a = e.donationAmount,
                n = e.donationId;
            return {
                donation: {
                    currency: t,
                    donationAmount: a,
                    donationId: void 0 === n ? 0 : n,
                    quantity: 1
                },
                fundId: e.fundId,
                fundName: e.fundName,
                type: "mp_page_view",
                viewId: e.viewId
            }
        }
    },
    Fj9b: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.makeGetInitialValues = void 0;
        var n = a("G4qV"),
            r = a("Cge7");
        t.makeGetInitialValues = function() {
            return n.createSelector([r.makeGetCampaignOrganizerFirstName(), r.makeGetCampaignUrl(), r.makeGetIdentity()], (function(e, t, a) {
                return {
                    coFirstName: e,
                    contactFundUrl: t,
                    contactName: a && a.firstname ? a.firstname + (a.lastname ? " " + a.lastname : "") : ""
                }
            }))
        }
    },
    Fkqg: function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            r = this && this.__createBinding || (Object.create ? function(e, t, a, n) {
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
            o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            l = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && r(t, e, a);
                return o(t, e), t
            },
            i = this && this.__read || function(e, t) {
                var a = "function" == typeof Symbol && e[Symbol.iterator];
                if (!a)
                    return e;
                var n,
                    r,
                    o = a.call(e),
                    l = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(n = o.next()).done;)
                        l.push(n.value)
                } catch (i) {
                    r = {
                        error: i
                    }
                } finally {
                    try {
                        n && !n.done && (a = o.return) && a.call(o)
                    } finally {
                        if (r)
                            throw r.error
                    }
                }
                return l
            },
            u = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = u(a("+9FD")),
            c = l(a("q1tI")),
            d = a("yzbm"),
            m = a("HER9"),
            f = a("YgTb");
        a("AGmz"),
        t.default = function(e) {
            var t = e.errors,
                a = e.images,
                r = e.onDeleteImage,
                o = e.onSubmit,
                l = e.uploadImage,
                u = e.submitting,
                p = {};
            a && a.forEach((function(e) {
                p[e.fileName] = e
            }));
            var g = i(c.useState(p), 2),
                h = g[0],
                y = g[1],
                _ = i(c.useState(t), 2),
                b = _[0],
                v = _[1],
                E = i(c.useState(!1), 2),
                S = E[0],
                C = E[1],
                O = c.useCallback((function(e) {
                    if (Object.keys(h).length + e.length > 10)
                        v([{
                            message: f.t("Please choose a maximum of 10 photos for your comment.")
                        }]);
                    else {
                        var t = n({}, h);
                        e.forEach((function(e) {
                            var a = Math.random().toString(36).substring(7);
                            try {
                                s.default(e, (function(t) {
                                    t.toBlob ? t.toBlob((function(e) {
                                        e && l({
                                            file: e,
                                            fileName: a
                                        })
                                    })) : l({
                                        file: e,
                                        fileName: a
                                    })
                                }), {
                                    canvas: !0,
                                    maxHeight: 1200,
                                    maxWidth: 1200,
                                    orientation: !0
                                }) && (t[a] = {
                                    fileName: a,
                                    url: ""
                                })
                            } catch (n) {
                                t[a] = {
                                    fileName: a,
                                    url: ""
                                },
                                l({
                                    file: e,
                                    fileName: a
                                })
                            }
                        })),
                        y(t)
                    }
                }), [h]);
            c.useEffect((function() {
                var e = n({}, h);
                t && (t.forEach((function(t) {
                    t && t.fileName && delete e[t.fileName]
                })), v(t)),
                a && (a.forEach((function(t) {
                    e[t.fileName] = t
                })), C(Object.keys(h).length >= 10)),
                y(e)
            }), [a, t]);
            var P = d.useDropzone({
                    disabled: S || u,
                    onDrop: O
                }).getRootProps,
                I = d.useDropzone({
                    disabled: S || u,
                    noDragEventsBubbling: !0,
                    onDrop: O
                }),
                k = I.getRootProps,
                N = I.getInputProps;
            return c.default.createElement("div", n({}, P(), {
                className: "o-dropzone-outline-reset"
            }), c.default.createElement(m.CommentForm, n({}, e, {
                errors: b ? b.map((function(e) {
                    return e.message
                })) : void 0,
                getDropZoneRootProps: k,
                getDropZoneInputProps: N,
                images: Object.values(h),
                onDeleteImage: function(e) {
                    for (var t in h)
                        h.hasOwnProperty(t) && h[t].url === e && delete h[t];
                    y(h),
                    r(e)
                },
                onSubmit: function(e) {
                    o(n(n({}, e), {
                        images: Object.values(h)
                    }))
                }
            })))
        }
    },
    Fmsj: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a("/MKj"),
            o = n(a("mDbF")),
            l = a("alXw"),
            i = n(a("4M3g")),
            u = a("Cge7"),
            s = a("SKg/"),
            c = a("ZZcF"),
            d = r.connect((function() {
                var e = s.makeDonationsHasNext(),
                    t = l.makeGetTotalDonationsFormatted(),
                    a = l.makeGetDonationList(),
                    n = u.makeGetInDegradedMode(),
                    r = c.makeGetDomain();
                return function(o) {
                    return {
                        domain: r(o),
                        donations: a(o),
                        hasNext: e(o),
                        inDegradedMode: n(o),
                        totalDonations: t(o)
                    }
                }
            }), (function(e, t) {
                return {
                    getDonations: function(a, n) {
                        void 0 === a && (a = 0),
                        e({
                            payload: {
                                campaignUrl: t.match.params.campaignUrl,
                                limit: n,
                                offset: a
                            },
                            type: i.default.GET_FEED_DONATIONS_IN_PROGRESS
                        })
                    }
                }
            }))(o.default);
        t.default = d
    },
    G9dl: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a("/MKj"),
            o = a("wQmL"),
            l = a("7OEO"),
            i = a("Cge7"),
            u = a("ZZcF"),
            s = a("C0Xu"),
            c = n(a("Iv5J")),
            d = o.reduxForm({
                enableReinitialize: !0,
                form: s.CONTACT_FORM_DONOR,
                submitAsSideEffect: !0
            })(c.default);
        t.default = r.connect((function() {
            var e = i.makeGetUserFullName(),
                t = i.makeGetUserEmail(),
                a = u.makeGetReCaptchaBigwebKey(),
                n = o.formValueSelector(s.CONTACT_FORM_DONOR),
                r = l.makeGetLeafId();
            return function(o, l) {
                return {
                    formTypeId: s.ContactFormType.DONOR,
                    initialValues: {
                        email: t(o),
                        hasContactedCo: "",
                        name: e(o),
                        phonePrefix: "1",
                        refundReason: "",
                        relationToCo: ""
                    },
                    leafId: r(o),
                    phonePrefix: n(o, "phonePrefix"),
                    reCaptchaSiteKey: a(o)
                }
            }
        }), (function(e, t) {
            return {
                onSuccess: function() {
                    return t.history.push("/contact/suggest/sent")
                }
            }
        }))(d)
    },
    GTIQ: function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = r(a("TSYQ")),
            l = r(a("q1tI")),
            i = a("yf/i"),
            u = a("z+lN"),
            s = a("YgTb");
        a("crPA"),
        t.default = function(e) {
            var t = e.className,
                a = e.donors,
                r = e.donorsOnClick,
                c = e.followers,
                d = e.shares,
                m = e.tanLayout,
                f = e.donorsString,
                p = e.followersString,
                g = e.sharesString,
                h = o.default(t, "m-social-stats", {
                    "m-social-stats-tan": m
                }),
                y = [{
                    dataElementId: "btn_donors",
                    onClick: r,
                    type: 1 === a ? s.t("donor") : s.t("donors"),
                    value: f
                }, {
                    type: 1 === d ? s.t("share") : s.t("shares"),
                    value: g
                }, {
                    type: 1 === c ? s.t("follower") : s.t("followers"),
                    value: p
                }].map((function(e, t) {
                    return l.default.createElement(u.SocialStatsItem, n({
                        key: t
                    }, e))
                }));
            return m ? l.default.createElement(i.Well, {
                className: h
            }, l.default.createElement("strong", null, s.t("Fundraiser Stats")), l.default.createElement(i.MetaList, {
                items: y
            })) : l.default.createElement("div", {
                className: h
            }, l.default.createElement(i.MetaList, {
                items: y
            }))
        }
    },
    GfNm: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.makeGetPosterShortUrlSuccess = t.makeGetPosterShortUrlFailed = t.makeGetPosterShortUrl = void 0;
        var n = a("G4qV"),
            r = a("BYM7"),
            o = a("Cge7"),
            l = a("l2oO"),
            i = a("ZZcF"),
            u = a("8QVh"),
            s = a("o6hd");
        t.makeGetPosterShortUrl = function() {
            return n.createSelector([r.makeGetShortenedShareUrl(s.UtmFromKeys.CAMPAIGN_PAGE, s.UtmKeys.PRINT_POSTER), n.createSelector([i.makeGetBaseUrl("/f/"), o.makeGetCampaignUrl()], (function(e, t) {
                return u.normalize(e + "/" + t)
            }))], (function(e, t) {
                return e || u.getShareLink(t, s.UtmKeys.PRINT_POSTER, s.UtmFromKeys.CAMPAIGN_PAGE)
            }))
        };
        t.makeGetPosterShortUrlFailed = function() {
            return n.createSelector([l.makeGetShortenedShareUrlFailed(s.UtmFromKeys.CAMPAIGN_PAGE, s.UtmKeys.PRINT_POSTER)], (function(e) {
                return e
            }))
        };
        t.makeGetPosterShortUrlSuccess = function() {
            return n.createSelector([l.makeGetShortenedShareUrlSuccess(s.UtmFromKeys.CAMPAIGN_PAGE, s.UtmKeys.PRINT_POSTER)], (function(e) {
                return e
            }))
        }
    },
    GivM: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("woC9");
        Object.defineProperty(t, "PostDonateModal", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        });
        var r = a("tXom");
        Object.defineProperty(t, "PostDonateModalConnected", {
            enumerable: !0,
            get: function() {
                return r.default
            }
        })
    },
    GmFh: function(e, t, a) {
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
            r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            o = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && n(t, e, a);
                return r(t, e), t
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = o(a("q1tI")),
            i = a("qhky"),
            u = a("+Ded"),
            s = a("yf/i"),
            c = a("K9qA"),
            d = a("YgTb");
        a("NkP8");
        var m = "pg_contact_suggest_sent";
        t.default = function(e) {
            return l.useEffect((function() {
                c.canUseWindow() && window.scrollTo(0, 0)
            }), []), l.useEffect((function() {
                u.trackEvents.push({
                    type: "mp_page_view",
                    viewId: m
                })
            }), []), l.default.createElement("div", {
                "data-view-id": m
            }, l.default.createElement(i.Helmet, null, l.default.createElement("title", null, d.t("Contact Us - Message Sent!"))), l.default.createElement("div", {
                className: "p-contact-sent"
            }, l.default.createElement("div", {
                className: "p-contact-sent-icon"
            }, l.default.createElement(s.UIIcon, {
                className: "color-green",
                name: "check"
            })), l.default.createElement("header", {
                className: "p-contact-sent-header"
            }, l.default.createElement("h1", null, d.t("Message Sent")), l.default.createElement("p", null, d.t("We've received your message, and one of our Customer Happiness Agents will be reviewing shortly, so please look for our reply in your email inbox.")), l.default.createElement("p", null, d.t("Thank you for your patience")), l.default.createElement(s.Button, {
                as: "href",
                dataElementId: "btn_contact_suggest_sent_go_back",
                className: "mt2x",
                fill: "solid-green",
                size: "large",
                to: "/contact"
            }, d.t("Return to Help Center")))))
        }
    },
    GrX6: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("N0XA");
        Object.defineProperty(t, "SearchResultSkeletonCard", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    GyeW: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a("SKg/"),
            o = a("/MKj"),
            l = n(a("17nx")),
            i = o.connect((function() {
                var e = r.makeGetFeedCampaignStatusCode();
                return function(t, a) {
                    return {
                        statusCode: e(t)
                    }
                }
            }))(l.default);
        t.default = i
    },
    H52L: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("3jiO");
        Object.defineProperty(t, "NoMatch", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    HER9: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("wI1W");
        Object.defineProperty(t, "CommentForm", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        }),
        Object.defineProperty(t, "CommentFormProps", {
            enumerable: !0,
            get: function() {
                return n.CommentFormProps
            }
        })
    },
    HT0D: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a("YgTb"),
            o = n(a("q1tI")),
            l = a("yf/i"),
            i = a("K9qA");
        function u(e) {
            var t = e.children,
                a = e.className,
                n = e.dataElementId,
                r = e.iconName,
                u = e.shareTitle,
                s = e.fallbackLink,
                c = e.onClick,
                d = e.shareMessage,
                m = e.shareLink,
                f = i.canUseWindow() && navigator && navigator.share,
                p = !!(!f || s && s.forceFallback),
                g = p && s ? s.as : "route",
                h = p && s ? s.to : void 0,
                y = p && s ? s.dataElementId : n;
            return f || s ? o.default.createElement(l.Button, {
                className: a,
                as: g,
                layout: "inline",
                dataElementId: y,
                onClick: function(e) {
                    if (c && c(e), !p && i.canUseWindow() && navigator && void 0 !== navigator.share) {
                        var t = {
                            text: d,
                            title: u,
                            url: m
                        };
                        try {
                            navigator.share(t)
                        } catch (a) {
                            console.log(a)
                        }
                    }
                },
                to: h
            }, o.default.createElement(l.UIIcon, {
                name: r || "ellipsis",
                className: "share-button-icon"
            }), t) : o.default.createElement(o.default.Fragment, null)
        }
        u.defaultProps = {
            dataElementId: "btn_more_share_options",
            shareMessage: r.t("Hi, I’d really appreciate it if you would share or donate to this GoFundMe.")
        },
        t.default = u
    },
    HVnM: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("iyZW");
        Object.defineProperty(t, "GuidanceCard", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    Hd3i: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("hu7q");
        Object.defineProperty(t, "GuidanceDrawer", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    HpnM: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("Kb6s");
        Object.defineProperty(t, "Card", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        }),
        Object.defineProperty(t, "CardProps", {
            enumerable: !0,
            get: function() {
                return n.CardProps
            }
        })
    },
    HviM: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("9zS7");
        Object.defineProperty(t, "ZendeskChatWidget", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    I4gx: function(e, t, a) {
        "use strict";
        a.r(t),
        t.default = a.p + "static/media/paper-airplane.ba30c6507a2dc8c923c05ce648373293.svg"
    },
    I5rM: function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = r(a("TSYQ")),
            l = r(a("q1tI")),
            i = a("yf/i"),
            u = a("z+lN");
        t.default = function(e) {
            var t = e.className,
                a = e.children,
                r = e.isTeamCampaignWithTeamMembers,
                s = e.organizer,
                c = e.beneficiary,
                d = e.charity,
                m = e.teamList,
                f = e.contactOrganizerLink,
                p = e.seeMoreTeamMembersLink,
                g = e.unreferredDonationStats,
                h = e.campaignPartnerProps,
                y = e.isPartner,
                _ = o.default(t, "o-campaign-members");
            return l.default.createElement("div", {
                className: _,
                id: "campaign-members"
            }, a, l.default.createElement(i.Rule, {
                type: "horizontal",
                gutterPull: !0
            }), l.default.createElement(u.CampaignMembersMain, {
                className: "mt3x mb4x",
                organizer: s,
                beneficiary: c,
                charity: d,
                contactLink: f
            }), r && l.default.createElement(l.default.Fragment, null, l.default.createElement(i.Rule, {
                type: "horizontal",
                gutterPull: !0
            }), l.default.createElement(u.CampaignMembersTeam, {
                className: "mt4x",
                unreferredDonationStats: g,
                seeMoreLink: p,
                teamMembers: m
            })), y && h && l.default.createElement(u.CampaignMembersPartner, n({
                className: "mt2x"
            }, h)))
        }
    },
    IF5B: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("8NXI");
        Object.defineProperty(t, "ContactFormJournalistPartialConnected", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    ILo8: function(e, t, a) {
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
            r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            o = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && n(t, e, a);
                return r(t, e), t
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = o(a("q1tI")),
            i = a("qhky"),
            u = a("+Ded"),
            s = a("yf/i"),
            c = a("K9qA"),
            d = a("YgTb");
        a("4i9U");
        var m = "pg_contact_suggest_answered";
        t.default = function(e) {
            return l.useEffect((function() {
                c.canUseWindow() && window.scrollTo(0, 0)
            }), []), l.useEffect((function() {
                u.trackEvents.push({
                    type: "mp_page_view",
                    viewId: m
                })
            }), []), l.default.createElement("div", {
                "data-view-id": m
            }, l.default.createElement(i.Helmet, null, l.default.createElement("title", null, d.t("Contact Us - Answer Found"))), l.default.createElement("div", {
                className: "p-contact-answered"
            }, l.default.createElement("div", {
                className: "p-contact-answered-icon"
            }, l.default.createElement(s.UIIcon, {
                className: "color-green",
                name: "check"
            })), l.default.createElement("header", {
                className: "p-contact-answered-header"
            }, l.default.createElement("h1", null, d.t("Answer Found!")), l.default.createElement("p", null, d.t("Thanks very much!")), l.default.createElement("p", null, d.t("If you ever need some extra help, the GoFundMe Team is standing by!")), l.default.createElement(s.Button, {
                as: "href",
                dataElementId: "btn_contact_suggest_answered_go_back",
                className: "mt2x",
                fill: "solid-green",
                size: "large",
                to: "/contact"
            }, d.t("Return to Help Center")))))
        }
    },
    IXFp: function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = r(a("q1tI")),
            l = r(a("TSYQ")),
            i = a("C0Xu"),
            u = a("yf/i"),
            s = a("z+lN");
        a("4r/K"),
        t.default = function(e) {
            var t = e.className,
                a = e.topSupporters,
                r = e.topDonationsModalRoute,
                c = e.donationsModalRoute,
                d = e.currentUserDonation,
                m = e.signedDonationId,
                f = e.donationListOverflow,
                p = l.default(t, "list-unstyled o-donation-list"),
                g = m && "/donations/" + encodeURIComponent(m),
                h = !(d && g && f);
            return o.default.createElement("ul", {
                className: p
            }, d && g && o.default.createElement("li", {
                className: "o-donation-list-item",
                key: 0
            }, o.default.createElement(u.Link, {
                as: "href",
                to: g,
                unstyled: !0,
                dataElementId: "btn_flair_your"
            }, o.default.createElement(s.Donation, n({}, d, {
                topSupporterType: i.TopSupporterType.YOUR_DONATION
            })))), h && o.default.createElement("li", {
                className: "o-donation-list-item",
                key: 1
            }, o.default.createElement(u.Link, {
                as: "route",
                to: c,
                unstyled: !0,
                dataElementId: "btn_flair_recent"
            }, o.default.createElement(s.Donation, n({}, a.most_recent_donor, {
                topSupporterType: i.TopSupporterType.MOST_RECENT_DONOR
            })))), o.default.createElement("li", {
                className: "o-donation-list-item",
                key: 2
            }, o.default.createElement(u.Link, {
                as: "route",
                to: r,
                unstyled: !0,
                dataElementId: "btn_flair_top"
            }, o.default.createElement(s.Donation, n({}, a.top_donor, {
                topSupporterType: i.TopSupporterType.TOP_DONOR
            })))), !f && o.default.createElement("li", {
                className: "o-donation-list-item",
                key: 3
            }, o.default.createElement(u.Link, {
                as: "route",
                to: c,
                unstyled: !0,
                dataElementId: "btn_flair_first"
            }, o.default.createElement(s.Donation, n({}, a.first_donor, {
                topSupporterType: i.TopSupporterType.FIRST_DONOR
            })))))
        }
    },
    Iv5J: function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = r(a("q1tI")),
            l = a("qhky"),
            i = a("dNNZ"),
            u = a("YgTb");
        t.default = function(e) {
            return o.default.createElement(i.ContactWrapper, {
                backButton: {
                    as: "route",
                    dataElementId: "btn_contact_form_donor_back",
                    label: u.t("Suggestions"),
                    to: "/contact/suggest"
                },
                dataViewId: "pg_contact_form_donor",
                title: u.t("Make a Donor Claim"),
                showFaq: !0
            }, o.default.createElement(l.Helmet, null, o.default.createElement("title", null, u.t("Make a Donor Claim | GoFundMe Support")), o.default.createElement("meta", {
                name: "robots",
                content: "noindex"
            })), o.default.createElement(i.ContactFormDonor, n({}, e)))
        }
    },
    "J+rR": function(e, t, a) {
        "use strict";
        var n = this && this.__read || function(e, t) {
                var a = "function" == typeof Symbol && e[Symbol.iterator];
                if (!a)
                    return e;
                var n,
                    r,
                    o = a.call(e),
                    l = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(n = o.next()).done;)
                        l.push(n.value)
                } catch (i) {
                    r = {
                        error: i
                    }
                } finally {
                    try {
                        n && !n.done && (a = o.return) && a.call(o)
                    } finally {
                        if (r)
                            throw r.error
                    }
                }
                return l
            },
            r = this && this.__spread || function() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e = e.concat(n(arguments[t]));
                return e
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.makeGetShowChatWindow = t.makeGetShowOptionEmail = t.makeGetShowOptionChat = t.makeGetAnswerEmailEnabled = t.makeGetAnswerChatEnabled = t.makeGetAnswer = t.makeGetSelections = void 0;
        var o = a("G4qV"),
            l = a("7OEO"),
            i = a("Cge7"),
            u = a("ZZcF"),
            s = a("C0Xu");
        t.makeGetSelections = function() {
            return o.createSelector([l.makeGetSelectedNodes()], (function(e) {
                return e.filter((function(t, a) {
                    return a < e.length - 1 || t.children.length > 1
                })).map((function(t, a) {
                    return {
                        defaultValue: a + 1 < e.length ? String(e[a + 1].id) : void 0,
                        id: t.id,
                        label: t.content,
                        options: r([{
                            text: "",
                            value: ""
                        }], t.children.map((function(e) {
                            return {
                                prefix: e.prefix,
                                text: e.content,
                                value: String(e.id)
                            }
                        })))
                    }
                }))
            }))
        },
        t.makeGetAnswer = function() {
            return o.createSelector([l.makeGetLastSelectedNode(), l.makeGetLeafNode()], (function(e, t) {
                return e && t && {
                        chatEnabled: t.chatEnabled,
                        content: t.content,
                        emailEnabled: t.emailEnabled,
                        smartAnswer: t.smartAnswer,
                        specialRequest: t.specialRequest,
                        title: e.content
                    }
            }))
        },
        t.makeGetAnswerChatEnabled = function() {
            return o.createSelector([t.makeGetAnswer()], (function(e) {
                return null == e ? void 0 : e.chatEnabled
            }))
        },
        t.makeGetAnswerEmailEnabled = function() {
            return o.createSelector([t.makeGetAnswer()], (function(e) {
                return null == e ? void 0 : e.emailEnabled
            }))
        },
        t.makeGetShowOptionChat = function() {
            return o.createSelector([t.makeGetAnswerChatEnabled(), l.makeGetChatAudience(), i.makeGetIsLoggedIn(), l.makeGetChatStatus(), l.makeGetChatWindow(), u.makeGetLocale()], (function(e, t, a, n, r, o) {
                return "open" !== r && "online" === n && e && (a || t === s.Audience.ALL) && o.startsWith("en")
            }))
        },
        t.makeGetShowOptionEmail = function() {
            return o.createSelector([t.makeGetAnswerEmailEnabled(), l.makeGetEmailAudience(), i.makeGetIsLoggedIn(), l.makeGetChatWindow(), t.makeGetShowOptionChat()], (function(e, t, a, n, r) {
                return "open" !== n && (!r || e && (a || t === s.Audience.ALL))
            }))
        },
        t.makeGetShowChatWindow = function() {
            return o.createSelector([l.makeGetChatWindow(), function(e, t) {
                return t.match.url
            }], (function(e, t) {
                return ["open", "minimized"].includes(e) && -1 === t.indexOf("sign-in")
            }))
        }
    },
    J62y: function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            r = this && this.__createBinding || (Object.create ? function(e, t, a, n) {
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
            o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            l = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && r(t, e, a);
                return o(t, e), t
            },
            i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = i(a("TSYQ")),
            s = l(a("q1tI")),
            c = a("yf/i"),
            d = a("dNNZ"),
            m = a("YgTb");
        a("K89s");
        var f = a("aaHp"),
            p = a("2JF7");
        t.default = function(e) {
            var t = e.author,
                a = e.authorType,
                r = e.className,
                o = e.date,
                l = e.exampleUpdate,
                i = e.id,
                g = e.images,
                h = e.style,
                y = e.text,
                _ = e.onClickUpdateImage,
                b = e.onClickCompetitorLink,
                v = e.onContinueClick,
                E = u.default(r, "m-update", {
                    "m-update--featured": "featured" === h
                });
            return s.useEffect((function() {
                y && b && f.unstyleCompetitorLinks(b)
            }), []), s.default.createElement("div", {
                className: E
            }, s.default.createElement("header", {
                className: "m-update-info"
            }, s.default.createElement("span", {
                className: "heading-5 mr"
            }, o), s.default.createElement("span", {
                className: "color-gray text-small"
            }, m.t("{{article}} by {{- authorName}}", {
                article: "",
                authorName: t
            }), "Team Member" !== a && s.default.createElement("span", null, ",", s.default.createElement(c.HtmlSpace, {
                type: "non-breaking"
            }), s.default.createElement("span", {
                className: "m-update-info-name"
            }, a)))), s.default.createElement("div", {
                className: "m-update-content"
            }, s.default.createElement("span", {
                style: p.isCompetitorText(y) ? {
                    userSelect: "none",
                    WebkitUserSelect: "none",
                    msUserSelect: "none",
                    MozUserSelect: "none"
                } : {},
                dangerouslySetInnerHTML: {
                    __html: y
                }
            }), function() {
                if (g && g.length && _) {
                    var e = g.map((function(e, t) {
                        return n(n({}, e), {
                            onClick: function() {
                                return _(i, t)
                            }
                        })
                    }));
                    return s.default.createElement(d.Collage, {
                        images: e,
                        layout: "inline",
                        className: "mt2x",
                        totalImages: g.length
                    })
                }
            }()), l && s.default.createElement(c.TextButton, {
                className: "m-update-see-older-button color-gray-60 text-small",
                dataElementId: "btn_update_show_more",
                onClick: v
            }, m.t("See older updates")))
        }
    },
    JAnS: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    "JY/j": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("M7FR");
        Object.defineProperty(t, "CampaignDescription", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    JejX: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("/EQP")),
            o = a("Cge7"),
            l = a("/MKj"),
            i = a("ocVw"),
            u = n(a("x1yX"));
        t.default = l.connect((function() {
            var e = i.makeGetCopyLinkSeeAllShortUrl(),
                t = i.makeGetEmailAndroidShareLink(),
                a = i.makeGetEmailShareLink(),
                n = i.makeGetEmailShortUrlComplete(),
                r = i.makeGetEmbedShareButtonProps(),
                l = o.makeGetCampaignCanonicalUrl(),
                u = i.makeGetCampaignTitle(),
                s = o.makeGetMemberId(),
                c = o.makeGetCampaignOrganizerFullName(),
                d = i.makeGetSmsAndroidShareLink(),
                m = i.makeGetSmsShareLink(),
                f = i.makeGetWhatsAppDescriptionExcerpt(),
                p = o.makeGetInDegradedMode(),
                g = i.makeGetTwitterShareLink(),
                h = i.makeGetWhatsAppShareLink();
            return function(o, i) {
                return {
                    campaignTitle: u(o),
                    emailAndroidShareLink: t(o),
                    emailShareLink: a(o),
                    emailShortUrlComplete: n(o),
                    copySeeAllLink: e(o),
                    embedShareButtonProps: r(o),
                    inDegradedMode: p(o),
                    memberId: s(o),
                    organizerFullName: c(o),
                    shareUrl: l(o),
                    smsAndroidShareLink: d(o),
                    smsShareLink: m(o),
                    whatsAppDescriptionExcerpt: f(o),
                    twitterShareLink: g(o),
                    whatsAppShareLink: h(o)
                }
            }
        }), (function(e, t) {
            return {
                getShortUrl: function(t) {
                    e({
                        payload: t,
                        type: r.default.GET_SHORTEN_SHARE_UTM_URL_IN_PROGRESS
                    })
                },
                getBatchShortUrl: function(t) {
                    e({
                        payload: t,
                        type: r.default.GET_BATCH_SHORTEN_SHARE_UTM_URL_IN_PROGRESS
                    })
                }
            }
        }))(u.default)
    },
    JpyR: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    "K+8+": function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("q1tI")),
            o = a("puIA"),
            l = a("it2i"),
            i = a("YgTb");
        t.default = function(e) {
            var t = e.routes,
                a = e.match;
            return r.default.createElement(r.default.Fragment, null, t && r.default.createElement(r.default.Fragment, null, r.default.createElement(l.GlobalHead, {
                title: i.t("Contact us | GoFundMe Support"),
                description: i.t("GoFundMe will always respond to your requests as quickly as possible."),
                url: a.url
            }), r.default.createElement(o.Routes, {
                config: t
            })))
        }
    },
    K89s: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    KExh: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    KGtv: function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = r(a("TSYQ")),
            l = r(a("q1tI")),
            i = a("yf/i"),
            u = a("YgTb"),
            s = a("K9qA");
        t.default = function(e) {
            var t = e.arrowIcon,
                a = e.dataElementId,
                r = e.children,
                c = e.className,
                d = e.id,
                m = e.label,
                f = !!t && l.default.createElement(i.UIIcon, {
                    name: "caret-right",
                    className: "share-button-arrow hide-for-large"
                }),
                p = function(e) {
                    var t = e ? "https://api.whatsapp.com/send" : "https://web.whatsApp.com/send",
                        a = e ? 400 : 600,
                        n = e ? 400 : 800;
                    s.domHelper.openDialogueWindow(t + "?text=" + encodeURIComponent(r || ""), a, n)
                },
                g = l.default.createElement(i.BaseButton, n({}, d ? {
                    id: d + "-desktop"
                } : {}, {
                    className: o.default(c, "show-for-large"),
                    dataElementId: a || "btn_share_whatsapp",
                    onClick: function(e) {
                        p(!1)
                    }
                }), l.default.createElement(i.LogoIcon, {
                    name: "Whatsapp"
                }), m || u.t("WhatsApp")),
                h = l.default.createElement(i.BaseButton, n({}, d ? {
                    id: d + "-mobile"
                } : {}, {
                    className: o.default(c, "hide-for-large"),
                    dataElementId: a || "btn_share_whatsapp",
                    onClick: function(e) {
                        p(!0)
                    }
                }), l.default.createElement(i.LogoIcon, {
                    name: "Whatsapp",
                    className: "share-button-icon"
                }), m || u.t("WhatsApp"), f);
            return l.default.createElement(l.default.Fragment, null, h, g)
        }
    },
    Kb6s: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("TSYQ")),
            o = n(a("q1tI")),
            l = a("yf/i");
        a("euXv"),
        t.default = function(e) {
            var t = e.className,
                a = e.to,
                n = e.title,
                i = e.subTitle,
                u = r.default("m-card", t);
            return o.default.createElement(l.Link, {
                className: u,
                unstyled: !0,
                as: "route",
                to: a
            }, o.default.createElement("div", {
                className: "m-card-inner"
            }, o.default.createElement("p", {
                className: "m-card-title"
            }, n), i && o.default.createElement("p", {
                className: "text-small color-gray mb0"
            }, i)))
        }
    },
    Kgym: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("ZCpI");
        Object.defineProperty(t, "AlgoliaCOName", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        }),
        Object.defineProperty(t, "AlgoliaCONameProps", {
            enumerable: !0,
            get: function() {
                return n.AlgoliaCONameProps
            }
        })
    },
    KiSu: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("aRWs");
        Object.defineProperty(t, "CampaignPageHeader", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        });
        var r = a("xwAf");
        Object.defineProperty(t, "CampaignPageHeaderConnected", {
            enumerable: !0,
            get: function() {
                return r.default
            }
        })
    },
    KmPl: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    Kr0X: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("EcZt")),
            o = n(a("/EQP")),
            l = a("Cge7"),
            i = a("/MKj"),
            u = a("ocVw"),
            s = a("Rylm"),
            c = a("iahY"),
            d = n(a("fiJ5"));
        t.default = i.connect((function() {
            var e = s.makeGetEmailAndroidShareLink(),
                t = s.makeGetEmailShareLink(),
                a = s.makeGetEmailShortUrlComplete(),
                n = l.makeGetCampaignTitle(),
                r = u.makeGetCopyLinkShortUrlPodo(),
                o = u.makeGetCopyLinkShortUrlPodoSuccess(),
                i = u.makeGetPodoCopyLinkSeeAllShortUrl(),
                d = c.makeGetDonorEmail(),
                m = u.makeGetEmbedShareButtonProps(),
                f = l.makeGetCampaignCanonicalUrl(),
                p = l.makeGetCampaignUrl(),
                g = l.makeHasCommentsEnabled(),
                h = l.makeGetMemberId(),
                y = l.makeGetCampaignOrganizerFullName(),
                _ = s.makeGetSmsAndroidShareLink(),
                b = s.makeGetSmsShareLink(),
                v = s.makeGetTwitterShareLink(),
                E = s.makeGetWhatsAppShareLink();
            return function(l, u) {
                return {
                    emailAndroidShareLink: e(l),
                    emailShareLink: t(l),
                    emailShortUrlComplete: a(l),
                    campaignTitle: n(l),
                    copyLinkShortUrl: r(l),
                    copyLinkShortUrlSuccess: o(l),
                    copySeeAllLink: i(l),
                    donorEmail: d(l),
                    embedShareButtonProps: m(l),
                    fundUrl: p(l),
                    hasCommentsEnabled: g(l),
                    memberId: h(l),
                    organizerFullName: y(l),
                    shareUrl: f(l),
                    smsAndroidShareLink: _(l),
                    smsShareLink: b(l),
                    twitterShareLink: v(l),
                    whatsAppShareLink: E(l)
                }
            }
        }), (function(e, t) {
            return {
                getReceiptFromEncryptedDonationID: function(t) {
                    e({
                        payload: t,
                        type: r.default.GET_RECEIPT_FROM_ENCRYPTED_DONATION_ID
                    })
                },
                getReceiptFromLocalStorage: function(t) {
                    e({
                        payload: t,
                        type: r.default.GET_RECEIPT_FROM_LOCAL_STORAGE
                    })
                },
                getBatchShortUrl: function(t) {
                    e({
                        payload: t,
                        type: o.default.GET_BATCH_SHORTEN_SHARE_UTM_URL_IN_PROGRESS
                    })
                },
                getShortUrl: function(t) {
                    e({
                        payload: t,
                        type: o.default.GET_SHORTEN_SHARE_UTM_URL_IN_PROGRESS
                    })
                },
                trackShare: function(a) {
                    var n = a.shareType,
                        o = a.status,
                        l = void 0 === o ? "success" : o,
                        i = a.where,
                        u = void 0 === i ? "donate" : i,
                        s = a.os,
                        c = a.facebookId,
                        d = a.rcid,
                        m = a.pcCode;
                    e({
                        payload: {
                            action: "share",
                            facebook_id: c,
                            os: s,
                            pc_code: m,
                            rcid: d,
                            shareType: n,
                            status: l,
                            url: t.match.params.campaignUrl,
                            where: u
                        },
                        type: r.default.TRACK_SHARE_IN_PROGRESS
                    })
                }
            }
        }))(d.default)
    },
    LAPe: function(e, t, a) {
        "use strict";
        a.r(t),
        t.default = a.p + "static/media/facebook.a3b941cc7bc6019263872beda0486fab.svg"
    },
    LIuv: function(e, t, a) {
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
            r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            o = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && n(t, e, a);
                return r(t, e), t
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = o(a("q1tI")),
            i = a("wQmL"),
            u = a("+Ded"),
            s = a("yf/i"),
            c = a("YgTb"),
            d = a("V20B"),
            m = "lb_contact_action_card";
        t.default = function(e) {
            var t = e.action,
                a = e.description,
                n = e.name,
                r = e.title,
                o = e.onCancel,
                f = e.onSuccess,
                p = e.onFailure,
                g = e.error,
                h = e.handleSubmit,
                y = e.submitting,
                _ = e.submitSucceeded,
                b = e.submitFailed;
            l.useEffect((function() {
                _ && f && f(),
                b && p && p()
            }), [_, b]);
            var v = n ? "_" + n.toLowerCase() : "";
            return l.useEffect((function() {
                u.trackEvents.push({
                    type: "mp_page_view",
                    viewId: m
                })
            }), []), l.default.createElement(s.Modal, {
                dataViewId: m,
                isOpen: !0,
                onClose: o
            }, l.default.createElement(i.Form, {
                onSubmit: h(d.SubmitHelper.SubmitShieldAction)
            }, l.default.createElement("h2", {
                className: "l-contact-self-service-modal-title"
            }, r), g && l.default.createElement(s.FieldAlert, {
                className: "mt mb2x",
                status: s.FieldStatus.ERROR
            }, g), l.default.createElement("p", {
                className: "l-contact-self-service-modal-body"
            }, a), l.default.createElement("div", {
                className: "pt2x pb2x"
            }, l.default.createElement(s.Button, {
                className: "l-contact-self-service-modal-confirm mr2x",
                dataElementId: "btn_contact_suggest_action_confirm" + v,
                fill: "solid-green",
                size: "large",
                type: "submit",
                disabled: y
            }, y ? l.default.createElement(s.LoadingDots, {
                color: "white"
            }) : t && t.text), !y && l.default.createElement(s.Button, {
                className: "l-contact-self-service-modal-cancel mr2x",
                dataElementId: "btn_contact_suggest_action_cancel" + v,
                fill: "hollow-gray",
                size: "large",
                type: "button",
                onClick: o
            }, c.t("Cancel")))))
        }
    },
    LNvD: function(e, t, a) {
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
            r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            o = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && n(t, e, a);
                return r(t, e), t
            },
            l = this && this.__read || function(e, t) {
                var a = "function" == typeof Symbol && e[Symbol.iterator];
                if (!a)
                    return e;
                var n,
                    r,
                    o = a.call(e),
                    l = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(n = o.next()).done;)
                        l.push(n.value)
                } catch (i) {
                    r = {
                        error: i
                    }
                } finally {
                    try {
                        n && !n.done && (a = o.return) && a.call(o)
                    } finally {
                        if (r)
                            throw r.error
                    }
                }
                return l
            },
            i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = i(a("TSYQ")),
            s = i(a("+QRC")),
            c = o(a("q1tI")),
            d = a("yf/i"),
            m = a("8QVh"),
            f = a("o6hd"),
            p = a("XDKs"),
            g = a("YgTb");
        a("hdBT"),
        t.default = function(e) {
            var t = e.url,
                a = e.className,
                n = e.from,
                r = e.dataElementId,
                o = m.getShareLink(t, f.UtmKeys.FACEBOOK_SHARE_SHARESHEET_COPY_LINK, n),
                i = l(c.useState(!1), 2),
                h = i[0],
                y = i[1],
                _ = l(c.useState(!1), 2),
                b = _[0],
                v = _[1],
                E = l(c.useState(!1), 2),
                S = E[0],
                C = E[1],
                O = c.default.createElement(d.Button, {
                    ariaLabel: g.t("Copy to clip board"),
                    className: u.default(a, "m-clipboard-field-fb"),
                    layout: "inline",
                    dataElementId: r || "btn_share_facebook",
                    onClick: function(e) {
                        e && e.preventDefault(),
                        s.default(o) ? (y(!0), C(!0), setTimeout((function() {
                            C(!1),
                            y(!1)
                        }), 12e3)) : (v(!0), C(!0), setTimeout((function() {
                            C(!1),
                            v(!1)
                        }), 12e3))
                    }
                }, c.default.createElement(d.LogoIcon, {
                    name: "Facebook",
                    className: "m-clipboard-field-fb-icon"
                }), c.default.createElement("div", null, "Facebook")),
                P = h ? c.default.createElement("div", {
                    className: "mt"
                }, c.default.createElement("div", null, c.default.createElement("strong", null, g.t("Fundraiser link copied")), c.default.createElement(d.UIIcon, {
                    name: "check",
                    className: "color-green ml"
                })), g.t("Now paste this link into a Facebook post, Messenger, or any Facebook groups you're in.")) : !!b && c.default.createElement("div", {
                    className: "mt"
                }, g.t("Copy your fundraiser link and paste it into a Facebook post, Messenger, or any Facebook groups you’re in."));
            return c.default.createElement("div", null, c.default.createElement("div", {
                className: "hide-for-large"
            }, O, c.default.createElement("div", {
                className: "m-clipboard-field-fb-reveal hide-for-large"
            }, P)), c.default.createElement("div", {
                className: "show-for-large"
            }, c.default.createElement(p.PopOver, {
                ariaLabel: g.t("Questions about where to share this link?"),
                button: {
                    children: O,
                    layout: "full"
                },
                className: "m-clipboard-field-fb-popover",
                open: S,
                theme: "dark",
                leftOverflow: !0
            }, c.default.createElement(d.Button, {
                className: "m-clipboard-field-fb-close",
                onClick: function() {
                    return C(!1)
                }
            }, c.default.createElement(d.UIIcon, {
                name: "close"
            })), P)))
        }
    },
    LqlJ: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("Fkqg");
        Object.defineProperty(t, "CommentFormWithDropZone", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        }),
        Object.defineProperty(t, "CommentFormWithDropZoneProps", {
            enumerable: !0,
            get: function() {
                return n.CommentFormWithDropZoneProps
            }
        })
    },
    LtOg: function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = r(a("TSYQ")),
            l = r(a("q1tI")),
            i = a("yf/i");
        a("O//7"),
        t.default = function(e) {
            var t = e.avatarProps,
                a = e.className,
                r = e.title,
                u = o.default(a, "heading-3", "m-campaign-members-header");
            return l.default.createElement("h2", {
                className: u
            }, t && l.default.createElement(i.Avatar, n({}, t, {
                className: "mr2x m-campaign-members-header-avatar"
            })), l.default.createElement("div", {
                className: "m-campaign-members-header-title"
            }, r))
        }
    },
    LuUq: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.makeGetSusiModalPaths = void 0;
        var n = a("G4qV"),
            r = a("K9qA");
        t.makeGetSusiModalPaths = function() {
            return n.createSelector([], (function() {
                return {
                    signInPath: "/s/sign-in" + (r.canUseWindow() ? window.location.search : ""),
                    signUpPath: "/s/sign-up" + (r.canUseWindow() ? window.location.search : "")
                }
            }))
        }
    },
    LzL2: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("b+OH");
        Object.defineProperty(t, "SearchResultCardBase", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    M7FR: function(e, t, a) {
        "use strict";
        var n,
            r = this && this.__extends || (n = function(e, t) {
                return (n = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var a in t)
                        t.hasOwnProperty(a) && (e[a] = t[a])
                })(e, t)
            }, function(e, t) {
                function a() {
                    this.constructor = e
                }
                n(e, t),
                e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, new a)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            l = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = l(a("TSYQ")),
            u = l(a("q1tI")),
            s = a("yf/i"),
            c = a("YgTb");
        a("JpyR");
        var d = a("aaHp"),
            m = a("2JF7"),
            f = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        contentHeight: 240,
                        readMoreClickCounter: 0,
                        scrollTimeoutId: 0,
                        showEntireStory: !1
                    }, t.storyRef = u.default.createRef(), t.handleStoryToggle = function() {
                        var e = t.storyRef.current,
                            a = document.documentElement.scrollTop;
                        e && t.state.readMoreClickCounter >= 3 ? t.setState({
                            contentHeight: e.scrollHeight,
                            showEntireStory: !0
                        }) : e && e.scrollHeight <= t.state.contentHeight + 480 + 120 ? t.setState((function(t) {
                            return {
                                contentHeight: e.scrollHeight,
                                readMoreClickCounter: t.readMoreClickCounter + 1,
                                showEntireStory: !0
                            }
                        })) : t.setState((function(e) {
                            return {
                                contentHeight: t.state.contentHeight + 480,
                                readMoreClickCounter: e.readMoreClickCounter + 1
                            }
                        })),
                        window.clearTimeout(t.state.scrollTimeoutId);
                        var n = window.setTimeout((function() {
                            window.scrollTo(0, a)
                        }), 0);
                        t.setState({
                            scrollTimeoutId: n
                        })
                    }, t.initializeShowStory = function() {
                        var e = t.storyRef.current;
                        e && e.scrollHeight <= 360 && t.setState({
                            contentHeight: e.scrollHeight,
                            showEntireStory: !0
                        })
                    }, t.fixStoryIframes = function() {
                        var e = t.storyRef.current,
                            a = e ? e.querySelectorAll("iframe") : void 0;
                        a && a.length && a.forEach((function(e) {
                            var t = document.createElement("div");
                            t.setAttribute("style", "padding-top: 56.25%; position: relative;"),
                            t.setAttribute("class", "iframe-wrapper"),
                            e.replaceWith(t),
                            e.removeAttribute("style"),
                            e.setAttribute("style", "height: 100%; position: absolute; top: 0; width: 100%"),
                            t.appendChild(e)
                        }))
                    }, t
                }
                return r(t, e), t.prototype.componentDidMount = function() {
                    var e = this.props,
                        t = e.children,
                        a = e.onClickCompetitorLink;
                    this.fixStoryIframes(),
                    this.initializeShowStory(),
                    t && a && d.unstyleCompetitorLinks(a)
                }, t.prototype.render = function() {
                    var e = this.props,
                        t = e.children,
                        a = e.className,
                        n = e.previewMode,
                        r = this.state,
                        l = r.contentHeight,
                        d = r.showEntireStory,
                        f = n || d,
                        p = i.default(a, "o-campaign-description"),
                        g = i.default("o-campaign-story", "mt3x", {
                            "o-campaign-story--is-open": f
                        }),
                        h = f ? void 0 : {
                            maxHeight: l + "px"
                        },
                        y = m.isCompetitorText(t) ? {
                            userSelect: "none",
                            WebkitUserSelect: "none",
                            msUserSelect: "none",
                            MozUserSelect: "none"
                        } : {};
                    return u.default.createElement("div", {
                        className: p
                    }, u.default.createElement("div", {
                        className: g,
                        dangerouslySetInnerHTML: {
                            __html: t
                        },
                        ref: this.storyRef,
                        style: o(o({}, h), y)
                    }), !f && u.default.createElement(s.TextButton, {
                        onClick: this.handleStoryToggle,
                        dataElementId: "btn_story_read-more"
                    }, c.t("Read more")))
                }, t
            }(u.default.Component);
        t.default = f
    },
    M97I: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    M9Jm: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("vTre");
        Object.defineProperty(t, "AlgoliaCustomHighlight", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        }),
        Object.defineProperty(t, "AlgoliaCustomHighlightProps", {
            enumerable: !0,
            get: function() {
                return n.AlgoliaCustomHighlightProps
            }
        })
    },
    "MG+b": function(e, t, a) {
        "use strict";
        a.r(t)
    },
    "MYV/": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("kHMp");
        Object.defineProperty(t, "CampaignSidebarNotifications", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    McwX: function(e, t, a) {
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
            r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            o = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && n(t, e, a);
                return r(t, e), t
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = o(a("q1tI")),
            i = a("wQmL"),
            u = a("yf/i"),
            s = a("z+lN"),
            c = a("YgTb"),
            d = a("V20B");
        t.default = function(e) {
            var t = e.handleSubmit,
                a = e.pristine,
                n = e.invalid,
                r = e.submitting,
                o = e.reCaptchaSiteKey,
                m = e.onSuccess,
                f = e.onFailed,
                p = e.submitFailed,
                g = e.submitSucceeded;
            return l.useEffect((function() {
                g && m && m()
            }), [g]), l.useEffect((function() {
                p && f && f()
            }), [p]), l.default.createElement(i.Form, {
                onSubmit: t(d.SubmitHelper.SubmitContactFormJournalist)
            }, l.default.createElement(i.Field, {
                component: s.ReduxZoomField,
                type: "text",
                className: "mb4x",
                id: "name",
                name: "name",
                label: c.t("Your Name")
            }), l.default.createElement(i.Field, {
                component: s.ReduxZoomField,
                type: "text",
                className: "mb4x",
                id: "email",
                name: "email",
                label: c.t("Your Email")
            }), l.default.createElement(i.Field, {
                component: s.ReduxZoomField,
                type: "text",
                className: "mb4x",
                id: "email2",
                name: "email2",
                label: c.t("Confirm Email")
            }), l.default.createElement(i.Field, {
                component: s.ReduxZoomField,
                type: "text",
                className: "mb4x",
                id: "publication",
                name: "publication",
                label: c.t("Publication")
            }), l.default.createElement(i.Field, {
                component: s.ReduxZoomField,
                type: "text",
                className: "mb4x",
                id: "subject",
                name: "subject",
                label: c.t("Message Subject")
            }), l.default.createElement(i.Field, {
                component: s.ReduxZoomField,
                type: "textarea",
                className: "mb4x",
                id: "message",
                name: "message",
                label: c.t("Your Message")
            }), o && l.default.createElement(i.Field, {
                component: s.ReduxReCaptchaField,
                id: "captchaResponse",
                name: "captchaResponse",
                siteKey: o,
                className: "mb4x"
            }), l.default.createElement(u.Button, {
                className: "mb4x",
                fill: "solid-green",
                size: "large",
                type: "submit",
                dataElementId: "btn_contact_form_journalist_submit",
                disabled: a || r || n
            }, r ? l.default.createElement(u.LoadingDots, {
                color: "white",
                size: "large"
            }) : c.t("Send Email")))
        }
    },
    Mp0r: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("CRP2");
        Object.defineProperty(t, "CampaignMemberItem", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    Msee: function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = r(a("q1tI")),
            l = a("yf/i");
        t.default = function(e) {
            var t,
                a,
                r = e.className,
                i = e.dataElementId,
                u = e.defaultValue,
                s = e.label,
                c = e.id,
                d = e.input,
                m = e.maxLength,
                f = e.minLength,
                p = e.name,
                g = e.readOnly,
                h = e.required,
                y = e.type,
                _ = e.meta,
                b = {
                    id: c,
                    label: s,
                    name: p,
                    type: y
                },
                v = {
                    alerts: (t = _ && _.error ? Array.isArray(_.error) ? _.error : [_.error] : void 0, a = _ && _.warning ? Array.isArray(_.warning) ? _.warning : [_.warning] : void 0, t && t.length > 0 ? t.map((function(e) {
                        return {
                            message: e,
                            status: l.FieldStatus.ERROR
                        }
                    })) : a && a.length > 0 ? a.map((function(e) {
                        return {
                            message: e,
                            status: l.FieldStatus.WARNING
                        }
                    })) : void 0),
                    className: r,
                    dataElementId: i,
                    defaultValue: u,
                    maxLength: m,
                    minLength: f,
                    readOnly: g,
                    required: h
                };
            return o.default.createElement(l.ZoomField, n({}, b, v, d))
        }
    },
    Mymg: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("nFvX");
        Object.defineProperty(t, "EmbedShareButton", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        }),
        Object.defineProperty(t, "EmbedShareButtonProps", {
            enumerable: !0,
            get: function() {
                return n.EmbedShareButtonProps
            }
        })
    },
    "N+1E": function(e, t, a) {
        "use strict";
        a.r(t)
    },
    N0XA: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a("Xv9k"),
            o = n(a("TSYQ")),
            l = n(a("q1tI")),
            i = a("LzL2");
        a("yc7m"),
        t.default = function(e) {
            var t = e.className,
                a = o.default(t, "m-search-result-skeleton-card");
            return l.default.createElement(i.SearchResultCardBase, {
                className: a,
                details: l.default.createElement("div", null, l.default.createElement(r.SkeletonGradient, {
                    className: "skeleton-text mb"
                }), l.default.createElement(r.SkeletonGradient, {
                    className: "skeleton-text skeleton-text-short"
                })),
                isLoading: !0
            })
        }
    },
    N4mY: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("q1tI")),
            o = a("yf/i"),
            l = a("z+lN"),
            i = a("YgTb");
        t.default = function(e) {
            var t = e.charity;
            return r.default.createElement(l.CharityModal, {
                title: i.t("Donations raised benefit:"),
                subtitle: i.t("How charity fundraisers work"),
                organizerInfoMeta: function() {
                    if (t && t.meta)
                        return r.default.createElement("div", {
                            className: "color-gray mb4x"
                        }, r.default.createElement("div", null, t.meta.roleString), r.default.createElement("div", null, t.meta.city), r.default.createElement("div", null, "CRA: ", t.meta.ein))
                }(),
                charityOrganization: t.organization
            }, r.default.createElement(r.default.Fragment, null, r.default.createElement("ol", null, r.default.createElement("li", {
                className: "m-campaign-members-main-modal-item"
            }, r.default.createElement(i.Trans, null, "Your donation is made to PayPal Giving Fund Canada, a charity registered with the Canada Revenue Agency (No. 812867752RR0001), subject to its", r.default.createElement(o.HtmlSpace, {
                type: "breaking"
            }), r.default.createElement(o.Link, {
                as: "href",
                rel: "noopener",
                target: "_blank",
                to: "https://www.paypal.com/ca/webapps/mpp/givingfund/policies/donor-terms-of-service"
            }, "terms"), ".")), r.default.createElement("li", {
                className: "m-campaign-members-main-modal-item"
            }, r.default.createElement(i.Trans, null, "While GoFundMe does not have a platform fee, PayPal Giving Fund Canada receives your donation after deduction of transaction", r.default.createElement(o.HtmlSpace, {
                type: "breaking"
            }), r.default.createElement(o.Link, {
                as: "href",
                rel: "noopener",
                target: "_blank",
                to: "https://www.gofundme.com/c/free-fundraising"
            }, "fees"), r.default.createElement(o.HtmlSpace, {
                type: "breaking"
            }), "and will grant funds to your recommended charity on a monthly basis.*"))), r.default.createElement("div", {
                className: "text-small color-gray"
            }, r.default.createElement(i.Trans, null, "*If, after reasonable efforts, PayPal Giving Fund Canada cannot deliver donations to this", r.default.createElement(o.HtmlSpace, {
                type: "breaking"
            }), "charity, it will grant funds to another charity per PayPal Giving Fund Canada's", r.default.createElement(o.HtmlSpace, {
                type: "breaking"
            }), r.default.createElement(o.Link, {
                as: "href",
                rel: "noopener",
                target: "_blank",
                to: "https://www.paypal.com/ca/webapps/mpp/givingfund/policies"
            }, "policies"), "."))))
        }
    },
    "NI+L": function(e, t, a) {
        "use strict";
        var n = this && this.__awaiter || function(e, t, a, n) {
                return new (a || (a = Promise))((function(r, o) {
                    function l(e) {
                        try {
                            u(n.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function i(e) {
                        try {
                            u(n.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function u(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value, t instanceof a ? t : new a((function(e) {
                            e(t)
                        }))).then(l, i)
                    }
                    u((n = n.apply(e, t || [])).next())
                }))
            },
            r = this && this.__generator || function(e, t) {
                var a,
                    n,
                    r,
                    o,
                    l = {
                        label: 0,
                        sent: function() {
                            if (1 & r[0])
                                throw r[1];
                            return r[1]
                        },
                        trys: [],
                        ops: []
                    };
                return o = {
                    next: i(0),
                    throw: i(1),
                    return: i(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;
                function i(o) {
                    return function(i) {
                        return function(o) {
                            if (a)
                                throw new TypeError("Generator is already executing.");
                            for (; l;)
                                try {
                                    if (a = 1, n && (r = 2 & o[0] ? n.return : o[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, o[1])).done)
                                        return r;
                                    switch (n = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        r = o;
                                        break;
                                    case 4:
                                        return l.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        l.label++,
                                        n = o[1],
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = l.ops.pop(),
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(r = l.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                            l.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && l.label < r[1]) {
                                            l.label = r[1],
                                            r = o;
                                            break
                                        }
                                        if (r && l.label < r[2]) {
                                            l.label = r[2],
                                            l.ops.push(o);
                                            break
                                        }
                                        r[2] && l.ops.pop(),
                                        l.trys.pop();
                                        continue
                                    }
                                    o = t.call(e, l)
                                } catch (i) {
                                    o = [6, i],
                                    n = 0
                                } finally {
                                    a = r = 0
                                }
                            if (5 & o[0])
                                throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, i])
                    }
                }
            },
            o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = a("YgTb"),
            i = o(a("EcZt")),
            u = o(a("oxJe")),
            s = o(a("4M3g")),
            c = a("+Ded"),
            d = o(a("cr+I")),
            m = a("/MKj"),
            f = a("wQmL"),
            p = o(a("kDgB")),
            g = function(e) {
                return e.location.pathname.replace(/\/?sign-up\/email$/, "")
            },
            h = f.reduxForm({
                form: "signUpEmail"
            })(p.default);
        t.default = m.connect((function() {
            return function(e, t) {
                var a = d.default.parse(t.location.search).teamInvite ? "user" : "person",
                    n = l.t("Sign up");
                return "?follow" === t.location.search ? n = l.t("Sign up to follow this fundraiser") : "?comment" === t.location.search && (n = l.t("Sign up to post your comment")), {
                    signUpAs: a,
                    title: n
                }
            }
        }), (function(e, t) {
            return {
                onClickSignIn: function() {
                    t.history.push(g(t) + "/sign-in" + t.location.search)
                },
                onFailure: function(t) {
                    var a = {};
                    if (t && t.error) {
                        var n = t.error;
                        switch (n.code) {
                        case 10001:
                            a._error = "" + n.code;
                            break;
                        default:
                            a._error = l.t("An error occurred. Please try again later.")
                        }
                        e(f.stopSubmit("signUpEmail", a))
                    } else
                        e(f.stopSubmit("signUpEmail", {
                            _error: l.t("An error occurred. Please try again later.")
                        }))
                },
                onSuccess: function() {
                    return n(void 0, void 0, void 0, (function() {
                        var a,
                            o;
                        return r(this, (function(l) {
                            switch (l.label) {
                            case 0:
                                return a = d.default.parse(t.location.search).teamInvite, (null === (o = d.default.parse(t.location.search)) || void 0 === o ? void 0 : o.fbStatus) ? (e({
                                    onSuccess: function() {
                                        return n(void 0, void 0, void 0, (function() {
                                            return r(this, (function(a) {
                                                switch (a.label) {
                                                case 0:
                                                    return [4, e({
                                                        type: s.default.GET_FEED_IDENTITY_IN_PROGRESS
                                                    })];
                                                case 1:
                                                    return a.sent(), t.history.push(g(t) + t.location.search), [2]
                                                }
                                            }))
                                        }))
                                    },
                                    type: u.default.FB_AUTHENTICATE_AND_UPDATE_PERSON_IN_PROGRESS
                                }), [3, 4]) : [3, 1];
                            case 1:
                                return a ? (e({
                                    onSuccess: function() {
                                        return n(void 0, void 0, void 0, (function() {
                                            return r(this, (function(a) {
                                                switch (a.label) {
                                                case 0:
                                                    return [4, e({
                                                        type: s.default.GET_FEED_IDENTITY_IN_PROGRESS
                                                    })];
                                                case 1:
                                                    return a.sent(), c.trackEvents.push({
                                                        type: "accepted_team_invite"
                                                    }), t.history.push(g(t)), [2]
                                                }
                                            }))
                                        }))
                                    },
                                    payload: {
                                        campaign: t.match.params.campaignUrl,
                                        invitationHash: a
                                    },
                                    type: i.default.ACCEPT_TEAM_INVITATION
                                }), [3, 4]) : [3, 2];
                            case 2:
                                return [4, e({
                                    type: s.default.GET_FEED_IDENTITY_IN_PROGRESS
                                })];
                            case 3:
                                l.sent(),
                                t.history.push(g(t) + t.location.search),
                                l.label = 4;
                            case 4:
                                return [2]
                            }
                        }))
                    }))
                }
            }
        }))(h)
    },
    NMDs: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    NZHY: function(e, t, a) {
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
            r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            o = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && n(t, e, a);
                return r(t, e), t
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = o(a("q1tI")),
            i = a("qhky"),
            u = a("wQmL"),
            s = a("yf/i"),
            c = a("z+lN"),
            d = a("dNNZ"),
            m = a("YgTb"),
            f = a("C0Xu"),
            p = a("V20B");
        function g(e) {
            var t = e.answer,
                a = e.cards,
                n = e.onFailure,
                r = e.onSuccess,
                o = e.isLoadingActions,
                g = e.isIdentityInitialized,
                h = e.isSignedIn,
                y = e.jumpToSuggestion,
                _ = e.onChatEnd,
                b = e.onChatHide,
                v = e.onChatShow,
                E = e.onChatStart,
                S = e.onChatStatus,
                C = e.onAnsweredClick,
                O = e.onSuggestionSelect,
                P = e.showChatWindow,
                I = e.showOptionChat,
                k = e.showOptionEmail,
                N = e.onChatLoading,
                w = e.onChatLoadFailure,
                T = e.onChatLoadSuccess,
                M = e.onOptionChatClick,
                A = e.onOptionChatShown,
                j = e.onOptionEmailClick,
                x = e.selections,
                D = e.smartAnswerSuccess,
                G = e.updateBackButton,
                F = (e.error, e.change),
                R = (e.untouch, e.handleSubmit),
                U = e.submitting,
                L = e.submitSucceeded,
                B = e.submitFailed,
                H = e.match;
            return l.useEffect((function() {
                L && r && r()
            }), [L]), l.useEffect((function() {
                t && I && A && A()
            }), [I]), l.useEffect((function() {
                B && n && n()
            }), [B]), l.useEffect((function() {
                G && G()
            }), []), l.useEffect((function() {
                H.params.form && y && y(H.params.form)
            }), []), l.default.createElement(d.ContactWrapper, {
                backButton: {
                    as: "href",
                    dataElementId: "btn_contact_suggest_back",
                    label: m.t("Help Center"),
                    to: "//support.gofundme.com/hc"
                },
                dataViewId: "pg_contact_suggest",
                title: m.t("Contact Us"),
                cards: a,
                isLoadingCards: o,
                isSignedIn: h,
                signInUrl: H.url + "/sign-in?help",
                showCards: g
            }, l.default.createElement(i.Helmet, null, l.default.createElement("meta", {
                name: "robots",
                content: "noindex"
            })), l.default.createElement(u.Form, {
                onSubmit: R(p.SubmitHelper.SubmitContactSmartAnswer)
            }, x.map((function(e, t) {
                return l.default.createElement(s.FormField, {
                    key: e.id + "-" + e.defaultValue,
                    className: "l-contact-suggest-partial-select mb4x",
                    id: "formfield-." + e.id,
                    label: e.label,
                    layout: "stacked"
                }, l.default.createElement(s.Select, {
                    defaultValue: e.defaultValue,
                    id: "suggestion." + e.id,
                    name: "suggestion." + e.id,
                    options: e.options,
                    onChange: function(a) {
                        var n = e.options[a.currentTarget.selectedIndex];
                        O(t, parseInt(n.value, 10), n.prefix),
                        F("email", "")
                    }
                }))
            })), t && l.default.createElement(l.default.Fragment, null, l.default.createElement("h3", null, m.t("Please read below")), l.default.createElement("div", {
                className: "l-contact-suggest-partial-answer mb2x"
            }, t.smartAnswer && function(e) {
                switch (e) {
                case f.SmartAnswerType.EDIT_COMMENT:
                case f.SmartAnswerType.EDIT_NAME:
                case f.SmartAnswerType.GET_RECEIPT:
                case f.SmartAnswerType.REFUND_ALL:
                case f.SmartAnswerType.CHANGE_ANONYMITY:
                    return !0;
                default:
                    return !1
                }
            }(t.smartAnswer) ? l.default.createElement(l.default.Fragment, null, function(e) {
                switch (e) {
                case f.SmartAnswerType.EDIT_COMMENT:
                case f.SmartAnswerType.EDIT_NAME:
                case f.SmartAnswerType.CHANGE_ANONYMITY:
                    return l.default.createElement("p", {
                        className: "mb4x"
                    }, m.t("We can help you with that! Confirm the email address you used to donate."));
                case f.SmartAnswerType.GET_RECEIPT:
                    return l.default.createElement(l.default.Fragment, null, l.default.createElement("p", null, m.t("Editing the information on a donation is quick and easy, and can be done from your donation receipt or through your GoFundMe account.")), l.default.createElement("h4", null, m.t("Actions you can take on your own:")), l.default.createElement("p", null, m.t("1. Request a new donation receipt by entering your donation email address in the field below.")));
                case f.SmartAnswerType.REFUND_ALL:
                    return l.default.createElement("p", {
                        className: "mb4x"
                    }, m.t("We can help you with that! If you have a personal fundraiser, please enter the email address you used to create your fundraiser."))
                }
            }(t.smartAnswer), l.default.createElement(u.Field, {
                component: c.ReduxZoomField,
                type: "email",
                id: "email",
                name: "email",
                className: "mb4x",
                focus: !0,
                disabled: U,
                label: m.t("Your Email Address")
            }), D ? l.default.createElement(s.FieldAlert, {
                className: "mt mb2x",
                status: s.FieldStatus.SUCCESS
            }, D) : l.default.createElement(s.Button, {
                dataElementId: "btn_contact_suggest_smart_answer_" + t.smartAnswer,
                fill: "solid-green",
                size: "large",
                type: "submit",
                disabled: U
            }, U ? l.default.createElement(s.LoadingDots, {
                color: "white"
            }) : function(e) {
                switch (e) {
                case f.SmartAnswerType.EDIT_COMMENT:
                    return m.t("Edit My Comment");
                case f.SmartAnswerType.EDIT_NAME:
                    return m.t("Edit My Name");
                case f.SmartAnswerType.GET_RECEIPT:
                    return m.t("Get Donation Receipt");
                case f.SmartAnswerType.REFUND_ALL:
                    return m.t("Refund All Donations");
                case f.SmartAnswerType.CHANGE_ANONYMITY:
                    return m.t("Update Donation Anonymity")
                }
            }(t.smartAnswer)), function(e) {
                switch (e) {
                case f.SmartAnswerType.REFUND_ALL:
                    return l.default.createElement("p", {
                        className: "mt3x mb0"
                    }, m.t('If you have a Certified Charity fundraiser, our Customer Happiness Team can help you with that! Please select an option below in "Still need help?" and include the link to the fundraiser you\'d like to refund.'));
                case f.SmartAnswerType.GET_RECEIPT:
                    return l.default.createElement(l.default.Fragment, null, l.default.createElement("p", {
                        className: "mt3x"
                    }, l.default.createElement(m.Trans, null, "2. Use your donation receipt to", l.default.createElement(s.HtmlSpace, {
                        type: "breaking"
                    }), l.default.createElement(s.Link, {
                        to: "https://support.gofundme.com/hc/articles/204191158"
                    }, "edit your donation comment"), l.default.createElement(s.HtmlSpace, {
                        type: "breaking"
                    }), "or", l.default.createElement(s.HtmlSpace, {
                        type: "breaking"
                    }), l.default.createElement(s.Link, {
                        to: "https://support.gofundme.com/hc/articles/236194288"
                    }, "change your name on a donation"), ".")), l.default.createElement("h4", null, m.t("Additional Information:")), l.default.createElement("p", null, l.default.createElement(m.Trans, null, "If you do not remember your GoFundMe password, please", l.default.createElement(s.HtmlSpace, {
                        type: "breaking"
                    }), l.default.createElement(s.Link, {
                        to: "https://www.gofundme.com/forgot-password"
                    }, "click here to request a new password"), ".")), l.default.createElement("p", null, l.default.createElement(m.Trans, null, "If you received an", l.default.createElement(s.HtmlSpace, {
                        type: "breaking"
                    }), l.default.createElement(s.Link, {
                        to: "https://support.gofundme.com/hc/articles/360001980367"
                    }, "unexpected refund"), l.default.createElement(s.HtmlSpace, {
                        type: "breaking"
                    }), "for your donation it could be for any of the following reasons:")), l.default.createElement("ul", null, l.default.createElement("li", null, m.t("Organizer deactivated the fundraiser")), l.default.createElement("li", null, m.t("Our payment processor wasn't able to verify the donation")), l.default.createElement("li", null, m.t("Organizer did not verify their account or withdraw funds within required deadlines")), l.default.createElement("li", null, m.t("The donation was charged back by the donor")), l.default.createElement("li", null, m.t("The donation was made by the organizer or beneficiary"))), l.default.createElement("p", {
                        className: "mb0"
                    }, m.t("Please visit the fundraiser to view any updates that the organizer might have posted in regards to refunds, click 'Contact' beneath the organizer's name on their fundraiser to email them with any questions, or reach out to our team if you have questions on how you may be able to still support the cause.")));
                default:
                    return
                }
            }(t.smartAnswer)) : l.default.createElement(l.default.Fragment, null, l.default.createElement(d.ContactSuggestion, {
                title: t.title,
                content: t.content
            }), l.default.createElement(s.Button, {
                dataElementId: "btn_contact_suggest_question_answered",
                fill: "solid-green",
                size: "large",
                type: "button",
                onClick: C
            }, m.t("My question was answered")))), l.default.createElement(d.ContactSupportOptions, {
                title: m.t("Still need help?"),
                chat: I ? {
                    buttonText: m.t("Chat now"),
                    dataElementId: "btn_contact_suggest_chat",
                    icon: "message",
                    label: m.t("Chat"),
                    onClick: M
                } : void 0,
                email: k ? {
                    buttonText: m.t("Send email"),
                    dataElementId: "btn_contact_suggest_email",
                    icon: "envelope",
                    label: m.t("Email"),
                    onClick: function() {
                        j && j(t.specialRequest)
                    }
                } : void 0
            }))), g && l.default.createElement(c.ZendeskChatWidget, {
                show: P,
                authenticate: h,
                onShow: v,
                onHide: b,
                onStatus: S,
                onStart: E,
                onEnd: _,
                onLoading: N,
                onLoadSuccess: T,
                onLoadFailure: w
            }))
        }
        g.defaultProps = {
            cards: [],
            isIdentityInitialized: !1,
            isLoadingActions: !1,
            isSignedIn: !1,
            showChatWindow: !1,
            showOptionChat: !1,
            showOptionEmail: !1
        },
        t.default = g
    },
    NjdD: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    Njoa: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("TSYQ")),
            o = n(a("q1tI")),
            l = a("YgTb");
        a("PG2y");
        var i = a("yf/i");
        t.default = function(e) {
            var t = e.onBannerViewEvent,
                a = e.className,
                n = r.default(a, "m-competitor-banner mt3x");
            return o.default.useEffect((function() {
                t && t()
            }), []), o.default.createElement("div", {
                className: n
            }, o.default.createElement("h4", {
                className: "mb0"
            }, o.default.createElement(i.UIIcon, {
                name: "info",
                textPairing: "prependText"
            }), o.default.createElement(i.HtmlSpace, {
                type: "non-breaking"
            }), l.t("GoFundMe Guarantee")), o.default.createElement("p", {
                className: "mb0 mt3x"
            }, l.t("Only donations on our platform are protected by the GoFundMe Guarantee.")))
        }
    },
    NkP8: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    "O//7": function(e, t, a) {
        "use strict";
        a.r(t)
    },
    "O/gF": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("ZW9Z");
        Object.defineProperty(t, "SusiModal", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    ODnE: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("5ie3");
        Object.defineProperty(t, "CollageImage", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    ONYX: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    OX0h: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("thIe");
        Object.defineProperty(t, "IECharityModal", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    OYai: function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = r(a("TSYQ")),
            l = r(a("q1tI")),
            i = a("yf/i"),
            u = a("Mp0r"),
            s = a("YgTb");
        a("yo2N"),
        t.default = function(e) {
            var t = e.className,
                a = e.seeMoreLink,
                r = e.teamMembers,
                c = e.unreferredDonationStats,
                d = o.default(t, "m-campaign-members-team"),
                m = r ? r.length : 0,
                f = r ? r.slice(0, 4).map((function(e, t) {
                    return l.default.createElement(u.CampaignMemberItem, n({
                        key: "teamMember-" + t
                    }, e))
                })) : [];
            return l.default.createElement(l.default.Fragment, null, l.default.createElement("div", {
                className: d
            }, f), m > 4 ? l.default.createElement(i.Button, {
                as: "route",
                to: a,
                className: "mt3x",
                size: "medium",
                fill: "hollow-green",
                dataElementId: "btn_team_see-all",
                layout: "full-for-small"
            }, s.t("See all")) : !!c && l.default.createElement("div", {
                className: "color-gray text-small mt2x"
            }, c))
        }
    },
    OenC: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    Orad: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a("Cge7"),
            o = a("/MKj"),
            l = n(a("xML2")),
            i = a("3sA1");
        t.default = o.connect((function() {
            var e = i.makeGetCampaignCanonicalUrl(),
                t = r.makeGetCampaignTitle(),
                a = r.makeGetCampaignGoalAmount(),
                n = r.makeGetCampaignCurrentAmount(),
                o = r.makeGetCampaignPhoto(),
                l = i.makeGetCampaignGoalAmountString(),
                u = i.makeGetCampaignRaisedAmountString();
            return function(r, i) {
                return {
                    goal: a(r),
                    goalAmountString: l(r),
                    image: o(r),
                    raised: n(r),
                    raisedAmountString: u(r),
                    title: t(r),
                    url: e(r)
                }
            }
        }), (function(e, t) {
            return {}
        }))(l.default)
    },
    OwBj: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("nFew");
        Object.defineProperty(t, "SignInForgotPassword", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        }),
        Object.defineProperty(t, "SignInForgotPasswordProps", {
            enumerable: !0,
            get: function() {
                return n.SignInForgotPasswordProps
            }
        })
    },
    P1gt: function(e, t, a) {
        "use strict";
        var n,
            r = this && this.__extends || (n = function(e, t) {
                return (n = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var a in t)
                        t.hasOwnProperty(a) && (e[a] = t[a])
                })(e, t)
            }, function(e, t) {
                function a() {
                    this.constructor = e
                }
                n(e, t),
                e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, new a)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            l = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = l(a("TSYQ")),
            u = l(a("q1tI")),
            s = a("wE+H"),
            c = a("yf/i"),
            d = a("p1Kg"),
            m = a("YgTb"),
            f = function(e) {
                function t(t) {
                    var a = e.call(this, t) || this;
                    return a.state = {
                        isOpen: !1,
                        on: !1
                    }, a.renderAccordions = function() {
                        var e = a.props,
                            t = e.authenticatedPerson;
                        return e.isLoggedIn && t ? a.renderLoggedInNav() : a.renderLoggedOutNav()
                    }, a.renderLoggedOutNav = function() {
                        var e = d.getNavText(),
                            t = e.navDiscoverAccordion,
                            n = e.navFundraiseForAccordion,
                            r = e.navHowItWorksAccordion,
                            o = e.navPlanYourFundraiserAccordion,
                            l = a.props.susiModalPaths,
                            i = [{
                                buttonContent: t.text,
                                children: u.default.createElement(c.SubnavContent, {
                                    groups: t.groups,
                                    seeAll: t.seeAll
                                }),
                                on: !1
                            }, {
                                buttonContent: n.text,
                                children: u.default.createElement(c.SubnavContent, {
                                    groups: n.groups,
                                    seeAll: n.seeAll
                                }),
                                on: !1
                            }, {
                                buttonContent: r.text,
                                children: u.default.createElement(c.SubnavContent, {
                                    groups: r.groups,
                                    seeAll: r.seeAll
                                }),
                                on: !1
                            }, {
                                buttonContent: o.text,
                                children: u.default.createElement(c.SubnavContent, {
                                    groups: o.groups,
                                    seeAll: o.seeAll
                                }),
                                on: !1
                            }];
                        return u.default.createElement(u.default.Fragment, null, u.default.createElement(c.AccordionGroup, {
                            items: i
                        }), l ? u.default.createElement(c.Button, {
                            as: "route",
                            className: "m-accordion-button color-dark-gray",
                            dataElementId: "btn_nav_sign_in",
                            layout: "full",
                            to: l.signInPath,
                            rel: "nofollow"
                        }, m.t("Sign in")) : u.default.createElement(c.Button, {
                            as: "href",
                            className: "m-accordion-button color-dark-gray",
                            dataElementId: "btn_nav_sign_in",
                            layout: "full",
                            to: "/sign-in"
                        }, m.t("Sign in")), u.default.createElement(c.Button, {
                            as: "href",
                            className: "mt4x",
                            dataElementId: "btn_nav_sign_up",
                            fill: "solid-green",
                            layout: "max-full",
                            size: "large",
                            to: "/sign-up"
                        }, m.t("Start a GoFundMe")))
                    }, a.renderLoggedInNav = function() {
                        var e = a.props,
                            t = e.authenticatedPerson,
                            n = e.ctaContent,
                            r = d.getNavText(),
                            l = r.navDiscoverAccordion,
                            i = r.navFundraiseForAccordion,
                            f = r.navUserAccordion,
                            p = n || {
                                text: m.t("My campaigns"),
                                url: "/campaigns"
                            },
                            g = [{
                                buttonContent: u.default.createElement("div", {
                                    className: "flex-container align-middle"
                                }, u.default.createElement(c.Avatar, o({
                                    as: s.IdentityType.person,
                                    className: "mr"
                                }, t)), t && t.firstName),
                                children: u.default.createElement(c.SubnavContent, {
                                    groups: f.groups,
                                    seeAll: f.seeAll
                                }),
                                on: !1
                            }, {
                                buttonContent: l.text,
                                children: u.default.createElement(c.SubnavContent, {
                                    groups: l.groups,
                                    seeAll: l.seeAll
                                }),
                                on: !1
                            }, {
                                buttonContent: i.text,
                                children: u.default.createElement(c.SubnavContent, {
                                    groups: i.groups,
                                    seeAll: i.seeAll
                                }),
                                on: !1
                            }];
                        return u.default.createElement(u.default.Fragment, null, u.default.createElement(c.AccordionGroup, {
                            items: g
                        }), u.default.createElement(c.Button, {
                            as: "href",
                            className: "mt4x",
                            dataElementId: "btn_nav_campaigns",
                            fill: "solid-green",
                            layout: "max-full",
                            size: "large",
                            to: p.url
                        }, p.text))
                    }, a.handleOpenDrawer = a.handleOpenDrawer.bind(a), a.handleCloseDrawer = a.handleCloseDrawer.bind(a), a.handleTransitionEnd = a.handleTransitionEnd.bind(a), a
                }
                return r(t, e), t.prototype.handleOpenDrawer = function() {
                    var e = this;
                    this.setState({
                        on: !0
                    }),
                    setTimeout((function() {
                        e.setState({
                            isOpen: !0
                        })
                    }), 10)
                }, t.prototype.handleCloseDrawer = function() {
                    this.setState({
                        isOpen: !1
                    })
                }, t.prototype.handleTransitionEnd = function() {
                    this.state.isOpen || this.setState({
                        on: !1
                    })
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.props.className,
                        a = this.state.isOpen,
                        n = i.default(t, "o-mobile-nav");
                    return u.default.createElement(c.Toggle, {
                        on: this.state.on
                    }, (function(t) {
                        var r = t.on;
                        return u.default.createElement(u.default.Fragment, null, u.default.createElement(c.Button, {
                            ariaExpanded: a,
                            className: "test-class",
                            ariaLabel: m.t("Open navigation menu"),
                            onClick: e.handleOpenDrawer
                        }, u.default.createElement(c.UIIcon, {
                            name: "menu",
                            size: "large"
                        })), r && u.default.createElement(c.Drawer, {
                            className: n,
                            isOpen: a,
                            height: "full",
                            onClose: e.handleCloseDrawer,
                            onTransitionEnd: e.handleTransitionEnd,
                            closeTriggerLabel: m.t("Close navigation menu")
                        }, e.renderAccordions()))
                    }))
                }, t
            }(u.default.Component);
        t.default = f
    },
    P7CT: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a("/MKj"),
            o = a("wQmL"),
            l = a("7OEO"),
            i = a("Cge7"),
            u = a("SKg/"),
            s = a("ZZcF"),
            c = a("C0Xu"),
            d = a("Le2r"),
            m = a("K9qA"),
            f = n(a("0AWV")),
            p = o.reduxForm({
                enableReinitialize: !0,
                form: c.CONTACT_FORM_DEFAULT,
                submitAsSideEffect: !0
            })(f.default);
        t.default = r.connect((function() {
            var e = i.makeGetUserFullName(),
                t = i.makeGetUserEmail(),
                a = s.makeGetReCaptchaBigwebKey(),
                n = l.makeGetActionCards(),
                r = u.makeGetIsIdentityInitialized(),
                o = l.makeGetIsLoadingActions(),
                f = l.makeGetLeafId(),
                p = i.makeGetIsLoggedIn();
            return function(l, i) {
                return {
                    cards: n(l, i),
                    formTypeId: c.ContactFormType.DEFAULT,
                    initialValues: {
                        email: t(l),
                        message: m.canUseDom() ? d.Cookies.getItem("solvvy_user_query") : "",
                        name: e(l)
                    },
                    isIdentityInitialized: r(l),
                    isLoadingActions: o(l),
                    isSignedIn: p(l),
                    leafId: f(l),
                    reCaptchaSiteKey: a(l)
                }
            }
        }), (function(e, t) {
            return {
                onSuccess: function() {
                    m.canUseDom() && d.Cookies.removeItem("solvvy_user_query"),
                    t.history.push("/contact/suggest/sent")
                }
            }
        }))(p)
    },
    PG2y: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    PIsa: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("FOiZ");
        Object.defineProperty(t, "GDPRAlertBanner", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    PYRb: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    PcW7: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.makeGetShowActiveContent = t.makeGetSusiModalPaths = t.makeGetStatsUrl = t.makeGetIsUserATeamMember = void 0;
        var n = a("G4qV"),
            r = a("p1Kg"),
            o = a("Cge7"),
            l = a("8QVh");
        t.makeGetIsUserATeamMember = function() {
            return n.createSelector([o.makeGetIdentity(), o.makeGetCampaignTeamMembers()], (function(e, t) {
                return !!(e && e.person_id && t && t.length > 0) && !!t.find((function(t) {
                        return t.person_id === e.person_id
                    }))
            }))
        };
        t.makeGetSusiModalPaths = function() {
            return n.createSelector([o.makeGetCampaignUrl()], (function(e) {
                return {
                    signInPath: "/f/" + e + "/sign-in",
                    signUpPath: "/f/" + e + "/sign-up"
                }
            }))
        };
        t.makeGetStatsUrl = function() {
            return n.createSelector([o.makeGetIsStatsUser(), o.makeGetCampaignUrl()], (function(e, t) {
                return e ? "https://happiness." + l.getDomain() + "/index.php?route=statswidget_v2%2FwidgetForFund&url=" + t : void 0
            }))
        };
        t.makeGetShowActiveContent = function() {
            return n.createSelector([o.makeGetCampaignStatus(), o.makeGetCanViewCampaignLite()], (function(e, t) {
                return !(e !== r.CampaignStatus.ACTIVE && e !== r.CampaignStatus.CLOSED && !t)
            }))
        }
    },
    PdR6: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("k546");
        Object.defineProperty(t, "AUCharityModal", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    Pqaj: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a("Y4ob"),
            o = a("Cge7"),
            l = a("/MKj"),
            i = n(a("DuAc")),
            u = a("Eec/");
        t.default = l.connect((function() {
            var e = o.makeGetCampaignTitle(),
                t = o.makeGetCampaignId(),
                a = u.makeGetDonateCanonicalUrl(),
                n = u.makeGetCampaignCanonicalUrl(),
                l = o.makeGetCampaignGoalAmount(),
                i = o.makeGetCampaignCurrentAmount(),
                s = o.makeGetCampaignPhoto(),
                c = u.makeGetCampaignGoalAmountString(),
                d = u.makeGetCampaignRaisedAmountString(),
                m = o.makeGetCampaignStatus(),
                f = r.makeGetAnalyticsEventData();
            return function(r, o) {
                return {
                    analyticsEventData: f(r),
                    donateUrl: a(r),
                    fundId: t(r),
                    goal: l(r),
                    goalAmountString: c(r),
                    image: s(r),
                    raised: i(r),
                    raisedAmountString: d(r),
                    status: m(r),
                    title: e(r),
                    url: n(r)
                }
            }
        }), (function(e, t) {
            return {}
        }))(i.default)
    },
    PsLz: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("MSam");
        Object.defineProperty(t, "App", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    Pw7W: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("TSYQ")),
            o = n(a("q1tI")),
            l = a("yf/i"),
            i = a("YgTb");
        a("6PWf"),
        t.default = function(e) {
            var t = e.className,
                a = e.url,
                n = e.onDelete,
                u = r.default(t, "m-image-upload-preview disp-flex align-middle");
            return o.default.createElement("div", {
                className: u
            }, a ? o.default.createElement(l.Image, {
                className: "m-image-upload-preview-image",
                url: a,
                layout: l.ScalableImageLayouts["4by3"],
                scaled: {
                    "1x1-960": a,
                    "3x2-1200": a,
                    "3x2-640": a,
                    "4x3-1200": a
                }
            }) : o.default.createElement(l.LoadingDots, {
                color: "green"
            }), !!n && o.default.createElement(l.IconButton, {
                ariaLabel: i.t("Delete this image"),
                className: "m-image-upload-preview-button",
                iconName: "trashcan",
                iconType: "ui",
                id: "comment-photo-delete",
                onClick: function() {
                    return n(a)
                }
            }))
        }
    },
    Q7uJ: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    "QE+l": function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            r = this && this.__createBinding || (Object.create ? function(e, t, a, n) {
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
            o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            l = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && r(t, e, a);
                return o(t, e), t
            },
            i = this && this.__read || function(e, t) {
                var a = "function" == typeof Symbol && e[Symbol.iterator];
                if (!a)
                    return e;
                var n,
                    r,
                    o = a.call(e),
                    l = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(n = o.next()).done;)
                        l.push(n.value)
                } catch (i) {
                    r = {
                        error: i
                    }
                } finally {
                    try {
                        n && !n.done && (a = o.return) && a.call(o)
                    } finally {
                        if (r)
                            throw r.error
                    }
                }
                return l
            },
            u = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = u(a("TSYQ")),
            c = l(a("q1tI")),
            d = a("+Ded"),
            m = a("yf/i"),
            f = a("zIs9"),
            p = a("it2i"),
            g = a("z+lN"),
            h = a("p1Kg"),
            y = a("YgTb");
        function _(e) {
            var t = e.browsingContext,
                a = e.className,
                r = e.donateUrl,
                o = e.id,
                l = e.image,
                u = e.goal,
                _ = e.raised,
                b = e.goalAmountString,
                v = e.previewMode,
                E = e.raisedAmountString,
                S = e.useButtonOnly,
                C = e.smallText,
                O = e.status,
                P = e.title,
                I = e.url,
                k = i(c.useState(!1), 2),
                N = k[0],
                w = k[1],
                T = i(c.useState(!1), 2),
                M = T[0],
                A = T[1],
                j = s.default(a, "o-campaign-embed", {
                    "o-campaign-embed--tile": !S
                }),
                x = s.default({
                    "o-campaign-embed-preview": v
                }),
                D = !1,
                G = [h.CampaignStatus.DEACTIVATED.toString(), h.CampaignStatus.DELETED.toString()];
            O && G.includes(O) && (D = !0);
            var F = s.default("o-campaign-embed-button", {
                    "exp-gradient-gfm exp-gradient-gfm--donate": !D,
                    "ml0 mr0": !D || S,
                    "o-campaign-embed-button--small-mobile": S
                }),
                R = v ? function(e) {
                    e.preventDefault()
                } : function() {
                    d.trackEvents.push({
                        elementId: D ? "btn_widget_start" : "btn_widget_donate",
                        type: "click",
                        viewId: "pg_widget"
                    }),
                    A(!0)
                };
            N && !v && (M || d.trackEvents.push({
                elementId: D ? "btn_widget_start" : "btn_widget_view_campaign",
                type: "click",
                viewId: "pg_widget"
            }), w(!1), A(!1));
            var U = "https://www.gofundme.com/c/donate-button-individuals?utm_source=widget&utm_medium=referral&utm_campaign=p_cp_widget",
                L = D ? U : S ? I : r,
                B = c.default.createElement(m.Button, {
                    onClick: R,
                    as: "href",
                    className: F,
                    size: "large",
                    to: v ? void 0 : L,
                    target: t,
                    fill: D ? "solid-green" : "solid-yellow",
                    layout: "max-full"
                }, D ? y.t("Start a GoFundMe") : S && C ? c.default.createElement(c.default.Fragment, null, c.default.createElement("div", {
                    className: "icon-align-left"
                }, c.default.createElement("svg", {
                    height: "32",
                    viewBox: "0 0 19 19",
                    width: "32",
                    xmlns: "http://www.w3.org/2000/svg"
                }, c.default.createElement("g", {
                    fill: "none"
                }, c.default.createElement("rect", {
                    fill: "#333",
                    height: "19",
                    rx: "2",
                    width: "19"
                }), c.default.createElement("path", {
                    clipRule: "evenodd",
                    d: "m6.056 11.16c.095-.084.182-.159.28-.22.281-.172.589-.226.915-.198.153.013.3.048.441.11.2.088.351.234.473.412.02.03.03.035.054.001a1.18 1.18 0 0 1 .874-.526c.363-.044.702.026.982.279.141.127.22.291.254.477.022.125.03.25.03.376.002.639 0 1.277.003 1.915 0 .055-.016.067-.069.067a72.604 72.604 0 0 0 -1.011 0c-.05 0-.063-.012-.063-.062a251.2 251.2 0 0 0 .001-1.508c0-.12-.01-.24-.038-.358-.098-.413-.567-.415-.776-.22-.129.12-.172.273-.19.438-.017.14-.01.282-.01.422-.002.41-.002.82 0 1.23 0 .043-.01.058-.055.058a88.164 88.164 0 0 0 -1.029 0c-.048 0-.058-.015-.058-.06.002-.508 0-1.017.001-1.525 0-.104-.004-.208-.024-.31a.426.426 0 0 0 -.34-.356.505.505 0 0 0 -.556.21.652.652 0 0 0 -.086.357c-.004.538-.004 1.076-.002 1.614 0 .058-.016.07-.071.07a72.605 72.605 0 0 0 -1.012 0c-.047 0-.058-.014-.058-.06v-2.955c0-.048.015-.058.06-.057.34.001.682.002 1.023 0 .048 0 .059.014.058.06-.004.101-.001.203-.001.318zm6.789.745h.592c.023 0 .054.006.042-.035a.651.651 0 0 0 -.245-.386c-.135-.095-.288-.11-.447-.104a.59.59 0 0 0 -.573.48c-.009.04.002.045.039.045zm.518.615h-1.124c-.064 0-.07.006-.061.07.008.063.012.125.029.187a.518.518 0 0 0 .363.387c.17.052.34.062.511.011a.568.568 0 0 0 .299-.213c.022-.03.044-.044.083-.043h.983c.054 0 .057.015.042.06-.173.51-.539.803-1.052.93a2.26 2.26 0 0 1 -.508.06 2.323 2.323 0 0 1 -.871-.128c-.55-.207-.897-.593-1.002-1.174-.08-.442-.021-.868.225-1.255.188-.296.453-.5.787-.608a2.335 2.335 0 0 1 1.368-.027c.565.16.899.548 1.052 1.102.055.196.063.398.06.6 0 .045-.027.04-.055.04h-1.13zm.558-6.556c.06-.044.13-.069.197-.1.318-.15.833-.085 1.051.177a.593.593 0 0 1 .035.725l-.068.069c-.263.193-1.88 1.383-2.124 1.53-.266.162-.825.16-1.141-.16-.14-.143-.158-.274-.14-.433.02-.175.142-.31.278-.428zm-8.841-.049 1.91 1.38c.137.119.26.253.28.428.017.16 0 .29-.14.433-.317.321-.876.323-1.142.161-.245-.148-1.86-1.337-2.124-1.531l-.068-.068a.593.593 0 0 1 .035-.726c.218-.262.733-.326 1.051-.177.067.032.137.057.198.1zm5.309-.03-.01 1.238a.554.554 0 0 1 -.018.144c-.097.343-.44.528-.847.528-.421 0-.772-.161-.855-.517a.632.632 0 0 1 -.015-.145l.001-1.248c.004-.472.395-.729.876-.729.484 0 .869.221.869.697zm1.648 2.842c.504.249.882.57 1.157.925h-7.548l.003-.003h-.01c.64-.857 1.897-1.446 3.772-1.446 1.12 0 1.978.202 2.626.524z",
                    fill: "#fff",
                    fillRule: "evenodd"
                })))), function(e) {
                    switch (e) {
                    case f.SmallTextOptions.SUPPORT:
                        return y.t("Support");
                    case f.SmallTextOptions.CONTRIBUTE:
                        return y.t("Contribute");
                    case f.SmallTextOptions.COFFEE:
                        return y.t("Buy me a coffee");
                    case f.SmallTextOptions.APPRECIATE:
                        return y.t("Show appreciation");
                    default:
                        return y.t("Donate now")
                    }
                }(C)) : y.t("Donate now"));
            return D ? c.default.createElement("div", {
                id: o,
                className: j,
                "data-view-id": "pg_widget"
            }, S ? B : c.default.createElement(m.Link, {
                as: "href",
                to: U,
                className: x,
                unstyled: !0,
                target: t,
                onClick: function() {
                    w(!0)
                }
            }, c.default.createElement("div", {
                className: "o-campaign-embed-content-deactivated pb3x"
            }, c.default.createElement("div", {
                className: "o-campaign-embed-logo-deactivated"
            }, c.default.createElement(m.Logo, {
                name: "GoFundMe"
            })), c.default.createElement("h1", {
                className: "o-campaign-embed-heading-deactivated"
            }, y.t("Support this cause")), B))) : c.default.createElement("div", {
                id: o,
                className: j,
                "data-view-id": "pg_widget"
            }, c.default.createElement(c.default.Fragment, null, !v && c.default.createElement(p.GlobalHead, {
                description: "",
                noFollow: !0,
                title: ""
            }), S ? B : c.default.createElement(m.Link, {
                as: "href",
                to: v ? void 0 : I,
                className: x,
                unstyled: !0,
                target: t,
                onClick: function() {
                    w(!0)
                }
            }, l && c.default.createElement(m.Image, n({
                className: "o-campaign-embed-image",
                layout: m.ScalableImageLayouts["3by2"]
            }, l)), c.default.createElement("div", {
                className: "o-campaign-embed-content"
            }, c.default.createElement("h1", {
                className: "o-campaign-embed-heading"
            }, P), c.default.createElement(g.ProgressMeter, {
                goal: u,
                goalAmountString: b,
                raised: _,
                raisedAmountString: E
            }), c.default.createElement("div", {
                className: "o-campaign-embed-cta"
            }, B, c.default.createElement("div", {
                className: "o-campaign-embed-logo ml2x"
            }, c.default.createElement(m.Logo, {
                name: "GoFundMe"
            })))))))
        }
        a("ufYw"),
        _.defaultProps = {
            previewMode: !1,
            smallText: f.SmallTextOptions.DONATE
        },
        t.default = _
    },
    QPYF: function(e, t, a) {
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
            r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            o = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && n(t, e, a);
                return r(t, e), t
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = o(a("q1tI"));
        t.default = function(e) {
            var t = e.title,
                a = e.content;
            return l.createElement("article", {
                className: "o-contact-suggestion"
            }, l.createElement("h5", {
                className: "o-contact-suggestion-title"
            }, t), l.createElement("p", {
                className: "o-contact-suggestion-body",
                dangerouslySetInnerHTML: {
                    __html: a
                }
            }))
        }
    },
    QRRn: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    QmmS: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    Qmnu: function(e, t, a) {
        "use strict";
        var n,
            r = this && this.__extends || (n = function(e, t) {
                return (n = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var a in t)
                        t.hasOwnProperty(a) && (e[a] = t[a])
                })(e, t)
            }, function(e, t) {
                function a() {
                    this.constructor = e
                }
                n(e, t),
                e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, new a)
            }),
            o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = o(a("TSYQ")),
            i = o(a("q1tI")),
            u = a("ChSC"),
            s = a("+Ded"),
            c = a("wE+H"),
            d = a("yf/i"),
            m = a("z+lN"),
            f = a("p1Kg");
        a("NMDs");
        var p = function(e) {
            function t(t) {
                var a = e.call(this, t) || this;
                return a.forwardedRef = i.default.createRef(), a.handleOnChange = function(e) {
                    var t = a.props.onChange;
                    t && t(e, a.totalNumberOfImages())
                }, a.onNextImage = function() {
                    var e = a.totalNumberOfImages();
                    e > 1 && (a.props.currentIndex < e - 1 ? a.props.currentIndex >= a.state.currentGroupIndex + f.galleryImagesPerSection - 1 ? a.onNextImageSet() : a.handleOnChange(a.props.currentIndex + 1) : a.wrapAroundToFirstImage())
                }, a.onPrevImage = function() {
                    a.totalNumberOfImages() > 1 && (a.props.currentIndex > 0 ? a.props.currentIndex === a.state.currentGroupIndex ? a.onPrevImageSet() : a.handleOnChange(a.props.currentIndex - 1) : a.wrapAroundToLastImage())
                }, a.onNextImageSet = function() {
                    if (a.state.currentGroupIndex < a.totalNumberOfImages() - f.galleryImagesPerSection) {
                        var e = a.state.carouselTransform - a.singleCarouselSectionWidth(),
                            t = a.state.currentGroupIndex + f.galleryImagesPerSection,
                            n = t;
                        a.setState((function() {
                            return {
                                carouselTransform: e,
                                currentGroupIndex: t
                            }
                        }), (function() {
                            return a.handleOnChange(n)
                        }))
                    } else
                        a.wrapAroundToFirstImage()
                }, a.onPrevImageSet = function() {
                    if (a.state.currentGroupIndex > 0) {
                        var e = a.state.carouselTransform + a.singleCarouselSectionWidth(),
                            t = a.state.currentGroupIndex - f.galleryImagesPerSection,
                            n = a.state.currentGroupIndex - 1;
                        a.setState((function() {
                            return {
                                carouselTransform: e,
                                currentGroupIndex: t
                            }
                        }), (function() {
                            return a.handleOnChange(n)
                        }))
                    } else
                        a.wrapAroundToLastImage()
                }, a.onShowImage = function(e) {
                    e >= a.state.currentGroupIndex + f.galleryImagesPerSection ? a.onNextImageSet() : a.handleOnChange(e)
                }, a.wrapAroundToFirstImage = function() {
                    a.setState((function() {
                        return {
                            carouselTransform: 0,
                            currentGroupIndex: 0
                        }
                    }), (function() {
                        return a.handleOnChange(0)
                    }))
                }, a.wrapAroundToLastImage = function() {
                    var e = Math.ceil(a.totalNumberOfImages() / f.galleryImagesPerSection),
                        t = -1 * (e - 1) * a.singleCarouselSectionWidth(),
                        n = (e - 1) * f.galleryImagesPerSection,
                        r = a.totalNumberOfImages() - 1;
                    a.setState((function() {
                        return {
                            carouselTransform: t,
                            currentGroupIndex: n
                        }
                    }), (function() {
                        return a.handleOnChange(r)
                    }))
                }, a.state = {
                    carouselTransform: 0,
                    currentGroupIndex: 0
                }, a.handleKeyDown = a.handleKeyDown.bind(a), a.handleClose = a.handleClose.bind(a), a
            }
            return r(t, e), t.prototype.handleClose = function() {
                this.props.onClose()
            }, t.prototype.handleKeyDown = function(e) {
                e.key === c.Keys.ARROW_RIGHT ? (s.trackEvents.push({
                    elementId: "btn_content_media_viewer_scroll",
                    type: "click",
                    viewId: "lb_content_media"
                }), this.onNextImage()) : e.key === c.Keys.ARROW_LEFT && (s.trackEvents.push({
                    elementId: "btn_content_media_viewer_scroll",
                    type: "click",
                    viewId: "lb_content_media"
                }), this.onPrevImage())
            }, t.prototype.render = function() {
                var e = this.props,
                    t = e.isOpen,
                    a = e.className,
                    n = e.currentIndex,
                    r = e.items,
                    o = e.totalItems,
                    s = l.default("o-gallery", a),
                    c = r.map((function(e) {
                        return e.media.image
                    })),
                    f = r[n],
                    p = o || r.length;
                return r.length > 0 && void 0 !== f && i.default.createElement(d.Portal, {
                        elementId: "portal"
                    }, i.default.createElement(d.Overlay, {
                        isAnimating: !1,
                        isOpen: t
                    }, i.default.createElement("div", {
                        className: s,
                        "data-view-id": "lb_content_media",
                        onKeyDown: this.handleKeyDown,
                        tabIndex: 0
                    }, i.default.createElement(u.FocusOn, {
                        onClickOutside: this.handleClose,
                        onEscapeKey: this.handleClose
                    }, i.default.createElement("div", {
                        className: "o-gallery-inner"
                    }, i.default.createElement(m.GalleryHeader, {
                        author: f.author,
                        handleClose: this.handleClose
                    }), i.default.createElement(m.GalleryContent, {
                        author: f.author,
                        currentIndex: n,
                        media: f.media,
                        onNextImage: this.onNextImage,
                        onPrevImage: this.onPrevImage,
                        text: f.text,
                        timeCreated: f.timeCreated,
                        totalCount: p
                    }), i.default.createElement(m.GalleryFooter, {
                        carouselTransform: this.state.carouselTransform,
                        currentIndex: n,
                        forwardedRef: this.forwardedRef,
                        groupIndex: this.state.currentGroupIndex,
                        images: c,
                        onNextImage: this.onNextImage,
                        onPrevImage: this.onPrevImage,
                        onNextImageSet: this.onNextImageSet,
                        onPrevImageSet: this.onPrevImageSet,
                        onShowImage: this.onShowImage
                    }))))))
            }, t.prototype.totalNumberOfImages = function() {
                return this.props.items.length
            }, t.prototype.singleCarouselSectionWidth = function() {
                var e = null !== this.forwardedRef.current ? this.forwardedRef.current.clientWidth : 0,
                    t = Math.floor((e + 8) / this.totalNumberOfImages());
                return f.galleryImagesPerSection * t
            }, t
        }(i.default.Component);
        t.default = p
    },
    QrBt: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    QtJE: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("ro2B");
        Object.defineProperty(t, "USCharityModal", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    R3xx: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("LtOg");
        Object.defineProperty(t, "CampaignMembersHeader", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        }),
        Object.defineProperty(t, "CampaignMembersHeaderProps", {
            enumerable: !0,
            get: function() {
                return n.CampaignMembersHeaderProps
            }
        })
    },
    RFXT: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("nQEC");
        Object.defineProperty(t, "SignInInitial", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    RSPH: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("mBZF");
        Object.defineProperty(t, "PostDonateComment", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        });
        var r = a("7gRe");
        Object.defineProperty(t, "PostDonateCommentConnected", {
            enumerable: !0,
            get: function() {
                return r.default
            }
        })
    },
    RSgc: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("q1tI")),
            o = a("yf/i"),
            l = a("YgTb"),
            i = n(a("TIrn"));
        t.default = function(e) {
            var t = e.arrowIcon,
                a = e.dataElementId,
                n = e.children,
                u = e.className,
                s = e.id,
                c = e.label,
                d = e.shareLink,
                m = i.default.getShareLink(d, n),
                f = !!t && r.default.createElement(o.UIIcon, {
                    name: "caret-right",
                    className: "share-button-arrow hide-for-large"
                });
            return r.default.createElement(o.Link, {
                className: u,
                dataElementId: a || "btn_share_twitter",
                id: s,
                unstyled: !0,
                onClick: function(e) {
                    i.default.share(m)
                }
            }, r.default.createElement(o.LogoIcon, {
                name: "Twitter",
                className: "share-button-icon"
            }), c || l.t("Twitter"), f)
        }
    },
    RV82: function(e, t, a) {
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
            r = this && this.__exportStar || function(e, t) {
                for (var a in e)
                    "default" === a || t.hasOwnProperty(a) || n(t, e, a)
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = a("i9fw");
        Object.defineProperty(t, "CampaignPage", {
            enumerable: !0,
            get: function() {
                return o.default
            }
        }),
        r(a("FGQ0"), t);
        var l = a("aK6j");
        Object.defineProperty(t, "CampaignPageConnected", {
            enumerable: !0,
            get: function() {
                return l.default
            }
        })
    },
    RfmE: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("sNOy");
        Object.defineProperty(t, "StandardHeader", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        });
        var r = a("xXVG");
        Object.defineProperty(t, "StandardHeaderConnected", {
            enumerable: !0,
            get: function() {
                return r.default
            }
        })
    },
    "Rh+W": function(e, t, a) {
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
            r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            o = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && n(t, e, a);
                return r(t, e), t
            },
            l = this && this.__read || function(e, t) {
                var a = "function" == typeof Symbol && e[Symbol.iterator];
                if (!a)
                    return e;
                var n,
                    r,
                    o = a.call(e),
                    l = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(n = o.next()).done;)
                        l.push(n.value)
                } catch (i) {
                    r = {
                        error: i
                    }
                } finally {
                    try {
                        n && !n.done && (a = o.return) && a.call(o)
                    } finally {
                        if (r)
                            throw r.error
                    }
                }
                return l
            },
            i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = a("YgTb"),
            s = a("wmfR"),
            c = a("yf/i"),
            d = a("it2i"),
            m = a("o6hd"),
            f = i(a("TSYQ")),
            p = o(a("q1tI"));
        a("M97I"),
        t.default = function(e) {
            var t,
                a = e.campaignTitle,
                n = e.fundUrl,
                r = e.mainPhoto,
                o = e.posterShortUrl,
                i = e.getPosterShortUrl,
                g = e.getPosterShortUrlFailed,
                h = e.getPosterShortUrlSuccess,
                y = f.default("p-print-poster-page"),
                _ = r && r.scaled && r.scaled["3x2-640"] || "";
            h && o && (t = o.slice(8));
            for (var b = [], v = 0; v < 9; ++v)
                b.push(p.default.createElement("div", {
                    className: "p-print-poster-page-tab",
                    key: v
                }, p.default.createElement("div", {
                    className: "p-print-poster-page-rotate"
                }, p.default.createElement(c.Logo, {
                    name: "GoFundMe",
                    className: "p-print-poster-page-tab-logo color-green"
                }), p.default.createElement("div", null, t && t))));
            !i || h || g || i({
                fundUrl: n,
                shareLocation: m.UtmFromKeys.CAMPAIGN_PAGE,
                shareType: m.UtmKeys.PRINT_POSTER,
                utm: m.getUtm(m.UtmKeys.PRINT_POSTER, m.UtmFromKeys.CAMPAIGN_PAGE)
            });
            var E = l(p.useState(!1), 2),
                S = E[0],
                C = E[1];
            S && setTimeout((function() {
                "Safari" === s.browser() ? document.execCommand("print") : window.print()
            }), 3e3);
            var O = h && o ? p.default.createElement("div", {
                className: y,
                onLoad: function() {
                    return C(!0)
                }
            }, p.default.createElement("div", {
                className: "p-print-poster-page-content"
            }, p.default.createElement(c.Logo, {
                name: "GoFundMe",
                className: "p-print-poster-page-page-logo color-green"
            }), p.default.createElement(c.Rule, {
                type: "horizontal"
            }), p.default.createElement("div", {
                className: "weight-900 color-gray mb2x"
            }, p.default.createElement(c.UIIcon, {
                name: "search",
                className: "mr"
            }), u.t("Search gofundme.com for")), p.default.createElement("strong", {
                className: "p-print-poster-page-large-font text-center pl4x pr4x"
            }, a), p.default.createElement("img", {
                className: "p-print-poster-page-image",
                src: _
            }), u.t("Show your support by going to this link"), t && p.default.createElement("div", {
                className: "heading-1 p-print-poster-page-large-font color-green mt2x"
            }, t), p.default.createElement("div", {
                className: "p-print-poster-page-tab-wrap"
            }, b))) : p.default.createElement(c.LoadingDots, {
                color: "green",
                size: "large",
                className: "m-print-poster-dots"
            });
            return p.default.createElement(p.default.Fragment, null, p.default.createElement(d.GlobalHead, {
                description: "",
                noFollow: !0,
                title: ""
            }), O)
        }
    },
    RmWU: function(e, t, a) {
        "use strict";
        var n,
            r = this && this.__extends || (n = function(e, t) {
                return (n = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var a in t)
                        t.hasOwnProperty(a) && (e[a] = t[a])
                })(e, t)
            }, function(e, t) {
                function a() {
                    this.constructor = e
                }
                n(e, t),
                e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, new a)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            l = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = l(a("TSYQ")),
            u = l(a("q1tI")),
            s = a("wE+H"),
            c = a("yf/i"),
            d = a("YgTb");
        a("N+1E");
        var m = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e), t.prototype.getAuthorTitle = function() {
                var e = this.props.author.role;
                return e === s.UserRoles.ORGANIZER ? d.t("Campaign organizer") : e === s.UserRoles.BENEFICIARY ? d.t("Beneficiary") : void 0
            }, t.prototype.render = function() {
                var e = this.props,
                    t = e.className,
                    a = e.author,
                    n = e.donationAmountFormatted,
                    r = e.isPinned,
                    l = i.default(t, "m-comment-header"),
                    s = this.getAuthorTitle(),
                    m = n,
                    f = {
                        tOptions: {
                            interpolation: {
                                escapeValue: !1
                            }
                        },
                        values: {
                            name: a.fullName,
                            donationAmount: m
                        }
                    };
                return u.default.createElement("header", {
                    className: l
                }, u.default.createElement("div", {
                    className: "m-comment-description"
                }, m ? u.default.createElement(d.Trans, o({}, f), {
                    name: name
                }, u.default.createElement(c.HtmlSpace, {
                    type: "breaking"
                }), "donated", u.default.createElement(c.HtmlSpace, {
                    type: "breaking"
                }), u.default.createElement("strong", null, {
                    donationAmount: m
                })) : u.default.createElement(d.Trans, o({}, f), {
                    name: name
                }, u.default.createElement(c.HtmlSpace, {
                    type: "breaking"
                }), "commented")), !!s && u.default.createElement("div", {
                    className: "m-comment-flair"
                }, u.default.createElement(c.UIIcon, {
                    className: "color-purple",
                    name: "star",
                    textPairing: "prependText"
                }), s), r && u.default.createElement(c.UIIcon, {
                    name: "pin",
                    className: "color-blue m-comment-pin"
                }))
            }, t
        }(u.default.Component);
        t.default = m
    },
    RpQE: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("KGtv");
        Object.defineProperty(t, "WhatsAppShareButton", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    RqVz: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("lUKF");
        Object.defineProperty(t, "SignUpEmail", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        }),
        Object.defineProperty(t, "SignUpEmailFormProps", {
            enumerable: !0,
            get: function() {
                return n.SignUpEmailFormProps
            }
        })
    },
    Rylm: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.makeGetWhatsAppShareLink = t.makeGetTwitterShareLink = t.makeGetSmsShareLink = t.makeGetSmsAndroidShareLink = t.makeGetEmailShortUrlComplete = t.makeGetEmailShareLink = t.makeGetEmailAndroidShareLink = void 0;
        var n = a("Cge7"),
            r = a("l2oO"),
            o = a("BYM7"),
            l = a("8QVh"),
            i = a("o6hd"),
            u = a("G4qV");
        t.makeGetEmailAndroidShareLink = function() {
            return u.createSelector([o.makeGetShortenedShareUrl(i.UtmFromKeys.POSTDONATE_MODAL, i.UtmKeys.EMAIL_ANDROID_SHARESHEET), n.makeGetCampaignCanonicalUrl()], (function(e, t) {
                return e || l.getShareLink(t, i.UtmKeys.EMAIL_ANDROID_SHARESHEET, i.UtmFromKeys.POSTDONATE_MODAL)
            }))
        };
        t.makeGetEmailShareLink = function() {
            return u.createSelector([o.makeGetShortenedShareUrl(i.UtmFromKeys.POSTDONATE_MODAL, i.UtmKeys.EMAIL_SHARESHEET), n.makeGetCampaignCanonicalUrl()], (function(e, t) {
                return e || l.getShareLink(t, i.UtmKeys.EMAIL_SHARESHEET, i.UtmFromKeys.POSTDONATE_MODAL)
            }))
        };
        t.makeGetEmailShortUrlComplete = function() {
            return u.createSelector([r.makeGetShortUrlInitialized(i.UtmFromKeys.POSTDONATE_MODAL, i.UtmKeys.EMAIL_SHARESHEET), r.makeGetShortUrlInitialized(i.UtmFromKeys.POSTDONATE_MODAL, i.UtmKeys.EMAIL_ANDROID_SHARESHEET)], (function(e, t) {
                return e || t
            }))
        };
        t.makeGetSmsAndroidShareLink = function() {
            return u.createSelector([o.makeGetShortenedShareUrl(i.UtmFromKeys.POSTDONATE_MODAL, i.UtmKeys.SMS_ANDROID_SHARESHEET), n.makeGetCampaignCanonicalUrl()], (function(e, t) {
                return e || l.getShareLink(t, i.UtmKeys.SMS_ANDROID_SHARESHEET, i.UtmFromKeys.POSTDONATE_MODAL)
            }))
        };
        t.makeGetSmsShareLink = function() {
            return u.createSelector([o.makeGetShortenedShareUrl(i.UtmFromKeys.POSTDONATE_MODAL, i.UtmKeys.SMS_SHARESHEET), n.makeGetCampaignCanonicalUrl()], (function(e, t) {
                return e || l.getShareLink(t, i.UtmKeys.SMS_SHARESHEET, i.UtmFromKeys.POSTDONATE_MODAL)
            }))
        };
        t.makeGetTwitterShareLink = function() {
            return u.createSelector([o.makeGetShortenedShareUrl(i.UtmFromKeys.POSTDONATE_MODAL, i.UtmKeys.TWITTER_SHARE_SHARESHEET), n.makeGetCampaignCanonicalUrl()], (function(e, t) {
                return e || l.getShareLink(t, i.UtmKeys.TWITTER_SHARE_SHARESHEET, i.UtmFromKeys.POSTDONATE_MODAL)
            }))
        };
        t.makeGetWhatsAppShareLink = function() {
            return u.createSelector([o.makeGetShortenedShareUrl(i.UtmFromKeys.POSTDONATE_MODAL, i.UtmKeys.WHATSAPP_SHARESHEET), n.makeGetCampaignCanonicalUrl()], (function(e, t) {
                return e || l.getShareLink(t, i.UtmKeys.WHATSAPP_SHARESHEET, i.UtmFromKeys.POSTDONATE_MODAL)
            }))
        }
    },
    SQlr: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    SS7q: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    T2N2: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a("/MKj"),
            o = a("Cge7"),
            l = n(a("AxEi"));
        t.default = r.connect((function() {
            var e = o.makeGetCampaignOrganizerFirstName(),
                t = o.makeGetCampaignOrganizerFullName(),
                a = o.makeGetCampaignOrganizerImage(),
                n = o.makeGetCampaignOrganizerInitials(),
                r = o.makeGetCampaignOrganizerLastName();
            return function(o) {
                return {
                    organizer: {
                        firstName: e(o),
                        fullName: t(o),
                        initials: n(o),
                        lastName: r(o),
                        profileImage: a(o)
                    }
                }
            }
        }), {})(l.default)
    },
    TDkM: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("W9qU");
        Object.defineProperty(t, "ErrorBoundary", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    TI9J: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("QE+l");
        Object.defineProperty(t, "CampaignEmbed", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    TNqt: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("WcWJ");
        Object.defineProperty(t, "PrintFlyerButton", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    TjdY: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("aHk3");
        Object.defineProperty(t, "MobileNavSearchResultsPage", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        }),
        Object.defineProperty(t, "MobileNavSearchResultsPageProps", {
            enumerable: !0,
            get: function() {
                return n.MobileNavSearchResultsPageProps
            }
        })
    },
    TujY: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("ttEt");
        Object.defineProperty(t, "StatsWidgetIframe", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    U6gC: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("ILo8");
        Object.defineProperty(t, "ContactAnsweredPage", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    UEq0: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("ffrF");
        Object.defineProperty(t, "CardList", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    UZcg: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("sbNJ");
        Object.defineProperty(t, "ContactWrapper", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    UkFV: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("TSYQ")),
            o = n(a("q1tI")),
            l = a("yf/i"),
            i = a("YgTb");
        function u(e) {
            var t = e.className,
                a = e.goal,
                n = e.goalAmountString,
                u = e.isActive,
                s = e.raised,
                c = e.raisedAmountString,
                d = e.sameCurrencyCode,
                m = r.default(t, "m-progress-meter"),
                f = u ? s / a * 100 : 100,
                p = !!u && o.default.createElement(l.ProgressBar, {
                    progress: f,
                    progressBarColor: "green"
                }),
                g = n.replace(" ", " ");
            return o.default.createElement("div", {
                className: m
            }, p, o.default.createElement("h2", {
                className: "m-progress-meter-heading"
            }, s > 0 ? u ? o.default.createElement(i.Trans, null, {
                raisedAmountString: c
            }, o.default.createElement(l.HtmlSpace, {
                type: "breaking"
            }), o.default.createElement("span", {
                className: "text-stat text-stat-title"
            }, {
                sameCurrencyCode: d
            }, " raised of ", {
                goalAmountNBSP: g
            }, " goal")) : o.default.createElement(i.Trans, null, {
                raisedAmountString: c
            }, o.default.createElement(l.HtmlSpace, {
                type: "breaking"
            }), o.default.createElement("span", {
                className: "text-stat text-stat-title"
            }, {
                sameCurrencyCode: d
            }, " raised")) : o.default.createElement(i.Trans, null, {
                goalAmountNBSP: g
            }, o.default.createElement(l.HtmlSpace, {
                type: "breaking"
            }), o.default.createElement("span", {
                className: "text-stat text-stat-title"
            }, {
                sameCurrencyCode: d
            }, " goal"))))
        }
        a("Z86J"),
        u.defaultProps = {
            isActive: !0
        },
        t.default = u
    },
    "Unq+": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("Msee");
        Object.defineProperty(t, "ReduxZoomField", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    UsDk: function(e, t, a) {
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
            r = this && this.__exportStar || function(e, t) {
                for (var a in e)
                    "default" === a || t.hasOwnProperty(a) || n(t, e, a)
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = a("LIuv");
        Object.defineProperty(t, "ContactSelfServiceModal", {
            enumerable: !0,
            get: function() {
                return o.default
            }
        }),
        Object.defineProperty(t, "ContactSelfServiceModalParams", {
            enumerable: !0,
            get: function() {
                return o.ContactSelfServiceModalParams
            }
        }),
        Object.defineProperty(t, "ContactSelfServiceModalProps", {
            enumerable: !0,
            get: function() {
                return o.ContactSelfServiceModalProps
            }
        }),
        Object.defineProperty(t, "ContactSelfServiceModalRouteProps", {
            enumerable: !0,
            get: function() {
                return o.ContactSelfServiceModalRouteProps
            }
        }),
        r(a("ZJRK"), t);
        var l = a("VJkh");
        Object.defineProperty(t, "ContactSelfServiceModalConnected", {
            enumerable: !0,
            get: function() {
                return l.default
            }
        })
    },
    UxYS: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("TSYQ")),
            o = n(a("q1tI")),
            l = a("yf/i");
        a("h6Hp"),
        t.default = function(e) {
            var t = e.dataElementId,
                a = e.type,
                n = e.value,
                i = e.onClick,
                u = r.default("text-stat-value", i ? "text-underline" : ""),
                s = r.default("m-social-stat-item-title", "text-stat-title");
            return i ? o.default.createElement(l.Button, {
                onClick: i,
                className: "text-stat disp-inline text-left",
                dataElementId: t
            }, o.default.createElement("span", {
                className: u
            }, n), o.default.createElement(l.HtmlSpace, {
                type: "non-breaking"
            }), o.default.createElement("span", {
                className: s
            }, a)) : o.default.createElement("span", {
                className: "text-stat"
            }, o.default.createElement("span", {
                className: u
            }, n), o.default.createElement(l.HtmlSpace, {
                type: "non-breaking"
            }), o.default.createElement("span", {
                className: s
            }, a))
        }
    },
    VJkh: function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = a("/MKj"),
            l = a("wQmL"),
            i = a("7OEO"),
            u = a("C0Xu"),
            s = r(a("LIuv")),
            c = a("ZJRK"),
            d = l.reduxForm({
                form: u.CONTACT_FORM_SELF_SERVICE,
                submitAsSideEffect: !0
            })(s.default);
        t.default = o.connect((function() {
            var e = c.makeGetAction(),
                t = i.makeGetLastSelectedId();
            return function(a, r) {
                return n(n({}, e(a, r)), {
                    lastSelected: t(a)
                })
            }
        }), (function(e, t) {
            return {
                onCancel: function() {
                    return t.history.goBack()
                },
                onSuccess: function() {
                    return t.history.goBack()
                }
            }
        }))(d)
    },
    Vc87: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("0bHX");
        Object.defineProperty(t, "Comment", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        }),
        Object.defineProperty(t, "CommentProps", {
            enumerable: !0,
            get: function() {
                return n.CommentProps
            }
        })
    },
    VgCX: function(e, t, a) {
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
            r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            o = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && n(t, e, a);
                return r(t, e), t
            },
            l = this && this.__read || function(e, t) {
                var a = "function" == typeof Symbol && e[Symbol.iterator];
                if (!a)
                    return e;
                var n,
                    r,
                    o = a.call(e),
                    l = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(n = o.next()).done;)
                        l.push(n.value)
                } catch (i) {
                    r = {
                        error: i
                    }
                } finally {
                    try {
                        n && !n.done && (a = o.return) && a.call(o)
                    } finally {
                        if (r)
                            throw r.error
                    }
                }
                return l
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(a("q1tI")),
            u = a("wQmL"),
            s = a("yf/i"),
            c = a("z+lN"),
            d = a("YgTb"),
            m = a("V20B"),
            f = a("y4Uw"),
            p = a("34pc");
        a("QrBt"),
        t.default = function(e) {
            var t = e.change,
                a = e.handleSubmit,
                n = e.reCaptchaSiteKey,
                r = e.phonePrefix,
                o = e.onSuccess,
                g = e.onFailed,
                h = e.submitFailed,
                y = e.submitSucceeded,
                _ = e.pristine,
                b = e.invalid,
                v = e.submitting,
                E = l(i.useState(""), 2),
                S = E[0],
                C = E[1];
            return i.useEffect((function() {
                y && o && o()
            }), [y]), i.useEffect((function() {
                h && g && g()
            }), [h]), i.default.createElement(u.Form, {
                onSubmit: a(m.SubmitHelper.SubmitContactFormDonor)
            }, i.default.createElement(u.Field, {
                component: c.ReduxZoomField,
                type: "text",
                className: "mb4x",
                id: "name",
                name: "name",
                label: d.t("Your Name")
            }), i.default.createElement("div", {
                className: "mb4x"
            }, i.default.createElement("div", {
                className: "o-donor-phone"
            }, i.default.createElement(u.Field, {
                id: "phonePrefix",
                name: "phonePrefix",
                component: c.ReduxSelectField,
                className: "o-donor-phone-prefix",
                options: f.PhoneCodesIntl,
                format: f.parsePhonePrefix,
                parse: f.parsePhonePrefix,
                label: "+" + r
            }), i.default.createElement(u.Field, {
                id: "phone",
                name: "phone",
                component: c.ReduxZoomField,
                type: "tel",
                className: "o-donor-phone-value",
                label: d.t("Your Phone Number")
            })), i.default.createElement("small", {
                className: "color-gray"
            }, d.t("Required in case our team needs to contact you for further details."))), i.default.createElement(u.Field, {
                component: c.ReduxZoomField,
                type: "text",
                className: "mb4x",
                id: "email",
                name: "email",
                label: d.t("Your Email")
            }), i.default.createElement(u.Field, {
                component: c.ReduxZoomField,
                type: "text",
                className: "mb4x",
                id: "email2",
                name: "email2",
                label: d.t("Confirm Email")
            }), i.default.createElement("div", {
                className: "mb4x"
            }, i.default.createElement(u.Field, {
                component: c.ReduxZoomField,
                type: "url",
                id: "url",
                name: "url",
                label: d.t("Page URL")
            }), i.default.createElement("small", {
                className: "color-gray"
            }, d.t("Please enter the URL in this format: https://www.gofundme.com/f/example-campaign"))), i.default.createElement(u.Field, {
                component: c.ReduxSelectField,
                className: "mb4x",
                id: "hasContactedCo",
                name: "hasContactedCo",
                label: d.t("Have you already contacted the organizer of this campaign?"),
                options: [{
                    text: p.EmptyFieldLabel(),
                    value: "",
                    disabled: !0
                }, {
                    text: p.HasContactedCoLabel(p.HasContactedCo.Yes),
                    value: p.HasContactedCo.Yes
                }, {
                    text: p.HasContactedCoLabel(p.HasContactedCo.No),
                    value: p.HasContactedCo.No
                }],
                onChange: function(e) {
                    t("hasContactedCoText", p.HasContactedCoLabel(e.target.value))
                }
            }), i.default.createElement(u.Field, {
                component: c.ReduxSelectField,
                className: "mb4x",
                id: "relationToCo",
                name: "relationToCo",
                label: d.t("How do you know the organizer of this campaign?"),
                options: [{
                    text: p.EmptyFieldLabel(),
                    value: "",
                    disabled: !0
                }, {
                    text: p.RelationToCoLabel(p.RelationToCo.Family),
                    value: p.RelationToCo.Family
                }, {
                    text: p.RelationToCoLabel(p.RelationToCo.Friend),
                    value: p.RelationToCo.Friend
                }, {
                    text: p.RelationToCoLabel(p.RelationToCo.Stranger),
                    value: p.RelationToCo.Stranger
                }],
                onChange: function(e) {
                    C(e.target.value),
                    t("relationToCoText", p.RelationToCoLabel(e.target.value)),
                    e.target.value === p.RelationToCo.Stranger && t("relationToCoDescription", "")
                }
            }), (S === p.RelationToCo.Family || S === p.RelationToCo.Friend) && i.default.createElement(u.Field, {
                component: c.ReduxInputField,
                type: "text",
                className: "mb4x",
                id: "relationToCoDescription",
                name: "relationToCoDescription",
                label: d.t("Please explain your relationship to the Campaign Organizer.")
            }), i.default.createElement(u.Field, {
                component: c.ReduxSelectField,
                className: "mb4x",
                id: "refundReason",
                name: "refundReason",
                label: d.t("I am requesting a refund because..."),
                options: [{
                    text: p.EmptyFieldLabel(),
                    value: "",
                    disabled: !0
                }, {
                    text: p.RefundReasonLabel(p.RefundReason.Misrepresented),
                    value: p.RefundReason.Misrepresented
                }, {
                    text: p.RefundReasonLabel(p.RefundReason.MisusedFunds),
                    value: p.RefundReason.MisusedFunds
                }, {
                    text: p.RefundReasonLabel(p.RefundReason.NotDelivered),
                    value: p.RefundReason.NotDelivered
                }, {
                    text: p.RefundReasonLabel(p.RefundReason.Unauthorized),
                    value: p.RefundReason.Unauthorized
                }, {
                    text: p.RefundReasonLabel(p.RefundReason.NoLongerSupport),
                    value: p.RefundReason.NoLongerSupport
                }],
                onChange: function(e) {
                    t("refundReasonText", p.RefundReasonLabel(e.target.value))
                }
            }), i.default.createElement("div", {
                className: "mb4x"
            }, i.default.createElement(u.Field, {
                component: c.ReduxInputField,
                type: "textarea",
                id: "concerns",
                name: "concerns",
                label: d.t("Describe your concerns about how the funds are being used.")
            }), i.default.createElement("small", {
                className: "color-gray"
            }, d.t("40 characters minimum"))), i.default.createElement("div", {
                className: "mb4x"
            }, i.default.createElement(u.Field, {
                component: c.ReduxUploadField,
                type: "file",
                accept: "application/pdf,image/gif,image/jpeg,image/png",
                id: "evidence",
                name: "evidence",
                label: d.t("Upload any evidence you may have")
            }), i.default.createElement("small", {
                className: "color-gray"
            }, d.t("Please upload only JPEG, GIF, PNG or PDF files. The file size must be less than 5MB."))), n && i.default.createElement(u.Field, {
                component: c.ReduxReCaptchaField,
                id: "captchaResponse",
                name: "captchaResponse",
                siteKey: n,
                className: "mb4x"
            }), i.default.createElement(s.Button, {
                className: "mb4x",
                fill: "solid-green",
                size: "large",
                type: "submit",
                dataElementId: "btn_contact_form_donor_submit",
                disabled: _ || v || b
            }, v ? i.default.createElement(s.LoadingDots, {
                color: "white",
                size: "large"
            }) : d.t("Send Email")))
        }
    },
    Vn7H: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("CjC9");
        Object.defineProperty(t, "TeamMembersModal", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        });
        var r = a("3ohW");
        Object.defineProperty(t, "TeamMembersModalConnected", {
            enumerable: !0,
            get: function() {
                return r.default
            }
        })
    },
    VrVn: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("Y1Z+");
        Object.defineProperty(t, "FirstDonateCard", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    "W//I": function(e, t, a) {
        "use strict";
        a.r(t)
    },
    "W/va": function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a("/MKj"),
            o = a("sVLG"),
            l = n(a("4M3g")),
            i = n(a("Z/t5")),
            u = r.connect((function() {
                var e = o.makeGetFormattedSuggestedTopDonation(),
                    t = o.makeGetTopDonationList(),
                    a = o.makeGetBeneOrOrganizerName();
                return function(n) {
                    return {
                        averageTopDonation: e(n),
                        beneOrOrganizerName: a(n),
                        donations: t(n)
                    }
                }
            }), (function(e, t) {
                return {
                    getTopDonations: function() {
                        return e({
                            payload: {
                                campaignUrl: t.match.params.campaignUrl,
                                sort: "highest"
                            },
                            type: l.default.GET_FEED_TOP_DONATIONS_IN_PROGRESS
                        })
                    }
                }
            }))(i.default);
        t.default = u
    },
    W9qU: function(e, t, a) {
        "use strict";
        var n,
            r = this && this.__extends || (n = function(e, t) {
                return (n = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var a in t)
                        t.hasOwnProperty(a) && (e[a] = t[a])
                })(e, t)
            }, function(e, t) {
                function a() {
                    this.constructor = e
                }
                n(e, t),
                e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, new a)
            }),
            o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = a("puIA"),
            i = a("qqdV"),
            u = o(a("q1tI")),
            s = function(e) {
                function t(t) {
                    var a = e.call(this, t) || this;
                    return a.state = {
                        error: !1
                    }, a
                }
                return r(t, e), t.getDerivedStateFromError = function(e) {
                    return {
                        error: e
                    }
                }, t.prototype.componentDidCatch = function(e, t) {
                    var a = this.props.onCatch;
                    a && a(e, t),
                    this.setState({
                        error: e
                    })
                }, t.prototype.render = function() {
                    var e = this.props.type;
                    return this.state.error ? "route" === e ? u.default.createElement(l.Routes, {
                        as: "switch",
                        config: i.unknownErrorRoutes
                    }) : u.default.createElement(u.default.Fragment, null) : u.default.createElement(u.default.Fragment, null, this.props.children)
                }, t
            }(u.default.Component);
        t.default = s
    },
    WBMr: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("j6MG");
        Object.defineProperty(t, "ContactFormDefault", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        }),
        Object.defineProperty(t, "ContactFormDefaultInput", {
            enumerable: !0,
            get: function() {
                return n.ContactFormDefaultInput
            }
        }),
        Object.defineProperty(t, "ContactFormDefaultProps", {
            enumerable: !0,
            get: function() {
                return n.ContactFormDefaultProps
            }
        })
    },
    WVVu: function(e, t, a) {
        "use strict";
        var n,
            r = this && this.__extends || (n = function(e, t) {
                return (n = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var a in t)
                        t.hasOwnProperty(a) && (e[a] = t[a])
                })(e, t)
            }, function(e, t) {
                function a() {
                    this.constructor = e
                }
                n(e, t),
                e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, new a)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            l = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = l(a("q1tI")),
            u = a("wE+H"),
            s = a("MS/s"),
            c = a("yf/i"),
            d = a("9r2/"),
            m = a("p1Kg"),
            f = a("YgTb");
        a("Q7uJ");
        var p = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e), t.prototype.render = function() {
                var e = this.props,
                    t = e.algoliaIndices,
                    a = e.authenticatedPerson,
                    n = e.isLoggedIn,
                    r = e.hasCampaign,
                    l = e.susiModalPaths,
                    p = r ? {
                        url: "/campaigns",
                        text: f.t("My campaigns")
                    } : {
                        url: "/sign-up",
                        text: f.t("Start a GoFundMe")
                    },
                    g = m.getNavText(),
                    h = g.navDiscoverDropdown,
                    y = g.navFundraiseDropdown,
                    _ = g.navLoggedOutDropdown,
                    b = g.navLoggedInDropdown;
                return i.default.createElement("nav", {
                    className: "o-nav-standard"
                }, i.default.createElement("ul", {
                    className: "o-nav-standard-left list-unstyled disp-flex align-middle"
                }, i.default.createElement("li", {
                    className: "disp-flex"
                }, i.default.createElement(s.GlobalSearch, {
                    algoliaIndices: t,
                    searchPageType: "campaign"
                })), i.default.createElement("li", {
                    className: "disp-flex align-middle show-for-large"
                }, i.default.createElement(c.Rule, {
                    type: "vertical"
                }), i.default.createElement(c.Dropdown, {
                    buttonContent: h.text,
                    placement: "left"
                }, i.default.createElement(c.SubnavContent, {
                    groups: h.groups,
                    seeAll: h.seeAll
                }))), i.default.createElement("li", {
                    className: "disp-flex align-middle show-for-large"
                }, i.default.createElement(c.Rule, {
                    type: "vertical"
                }), i.default.createElement(c.Dropdown, {
                    buttonContent: y.text,
                    placement: "left"
                }, i.default.createElement(c.SubnavContent, {
                    groups: y.groups,
                    seeAll: y.seeAll
                })))), i.default.createElement("div", {
                    className: "o-nav-standard-center"
                }, i.default.createElement(c.Link, {
                    ariaLabel: f.t("GoFundMe homepage"),
                    as: "href",
                    className: "o-nav-standard-logo",
                    to: "/",
                    dataElementId: "btn_nav_gfm_logo"
                }, i.default.createElement(c.Logo, {
                    name: "GoFundMe"
                }))), i.default.createElement("ul", {
                    className: "o-nav-standard-right list-unstyled disp-flex align-middle align-right"
                }, !n && i.default.createElement(i.default.Fragment, null, i.default.createElement("li", {
                    className: "disp-flex align-middle show-for-large"
                }, i.default.createElement(c.Dropdown, {
                    buttonContent: _.text,
                    placement: "left"
                }, i.default.createElement(c.SubnavContent, {
                    groups: _.groups,
                    seeAll: _.seeAll
                }))), i.default.createElement("li", {
                    className: "disp-flex align-middle show-for-large"
                }, i.default.createElement(c.Rule, {
                    type: "vertical"
                }), l ? i.default.createElement(c.Button, {
                    as: "route",
                    className: "color-dark-gray text-small",
                    dataElementId: "btn_nav_sign_in",
                    to: l.signInPath,
                    rel: "nofollow"
                }, f.t("Sign in")) : i.default.createElement(c.Button, {
                    as: "href",
                    className: "color-dark-gray text-small",
                    dataElementId: "btn_nav_sign_in",
                    to: "/sign-in"
                }, f.t("Sign in"))), i.default.createElement("li", {
                    className: "show-for-large pl2x"
                }, i.default.createElement(c.Button, {
                    as: "href",
                    dataElementId: "btn_nav_sign_up",
                    fill: "hollow-green",
                    size: "small",
                    to: "/sign-up"
                }, f.t("Start a GoFundMe")))), n && !!a && i.default.createElement(i.default.Fragment, null, i.default.createElement("li", {
                    className: "show-for-large"
                }, i.default.createElement(c.Button, {
                    as: "href",
                    className: "color-dark-gray text-small",
                    dataElementId: "btn_nav_campaigns",
                    to: p.url
                }, p.text)), i.default.createElement("li", {
                    className: "disp-flex align-middle show-for-large"
                }, i.default.createElement(c.Rule, {
                    type: "vertical"
                }), i.default.createElement(c.Dropdown, {
                    buttonContent: i.default.createElement(i.default.Fragment, null, i.default.createElement(c.Avatar, o({
                        as: u.IdentityType.person,
                        className: "mr"
                    }, a)), a.firstName),
                    placement: "right"
                }, i.default.createElement(c.SubnavContent, {
                    groups: b.groups,
                    seeAll: b.seeAll
                })))), i.default.createElement("li", {
                    className: "disp-flex hide-for-large"
                }, i.default.createElement(d.MobileNavStandard, {
                    authenticatedPerson: a,
                    ctaContent: p,
                    isLoggedIn: n,
                    susiModalPaths: l
                }))))
            }, t
        }(i.default.Component);
        t.default = p
    },
    WcWJ: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("q1tI")),
            o = a("yf/i"),
            l = a("YgTb");
        t.default = function(e) {
            var t = e.className,
                a = e.dataElementId;
            return r.default.createElement(o.Button, {
                to: "/",
                className: t,
                layout: "inline",
                as: "href",
                dataElementId: a || "btn_print_flyer"
            }, r.default.createElement(o.UIIcon, {
                name: "print"
            }), l.t("Print"))
        }
    },
    Wkfp: function(e, t, a) {
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
            r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            o = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && n(t, e, a);
                return r(t, e), t
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = o(a("q1tI")),
            i = a("+Ded"),
            u = a("dNNZ"),
            s = a("YgTb");
        t.default = function(e) {
            l.useEffect((function() {
                i.trackEvents.push({
                    type: "mp_page_view",
                    viewId: "lb_sign-up"
                })
            }), []);
            var t = e.history,
                a = e.location,
                n = e.match,
                r = e.authenticateFacebookUser,
                o = e.goToConfirmFacebookEmail,
                c = e.onFacebookSignUpSuccess,
                d = e.isFacebookSigningIn,
                m = s.t("Sign up");
            return "?comment" === a.search ? m = s.t("Sign up to post your comment") : "?follow" === a.search && (m = s.t("Sign up to follow this fundraiser")), l.default.createElement(u.SignUpInitial, {
                onClickSignIn: function() {
                    t.push("/f/" + n.params.campaignUrl + "/sign-in" + a.search)
                },
                onClickSignUpEmail: function() {
                    t.push("/f/" + n.params.campaignUrl + "/sign-up/email" + a.search)
                },
                onClickSignUpFacebook: function() {
                    r(c, o)
                },
                isFacebookSigningIn: d,
                goToConfirmFacebookEmail: o,
                title: m
            })
        }
    },
    WtCj: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("VgCX");
        Object.defineProperty(t, "ContactFormDonor", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        }),
        Object.defineProperty(t, "ContactFormDonorInput", {
            enumerable: !0,
            get: function() {
                return n.ContactFormDonorInput
            }
        }),
        Object.defineProperty(t, "ContactFormDonorProps", {
            enumerable: !0,
            get: function() {
                return n.ContactFormDonorProps
            }
        })
    },
    Wvzh: function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            r = this && this.__rest || function(e, t) {
                var a = {};
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var r = 0;
                    for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
                        t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (a[n[r]] = e[n[r]])
                }
                return a
            },
            o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = o(a("TSYQ")),
            i = o(a("q1tI")),
            u = a("yf/i"),
            s = a("YgTb");
        t.default = function(e) {
            var t = e.arrowIcon,
                a = e.children,
                o = r(e, ["arrowIcon", "children"]),
                c = n(n({}, o), {
                    dataElementId: o.dataElementId ? o.dataElementId : "btn_share_sms"
                }),
                d = !!t && i.default.createElement(u.UIIcon, {
                    name: "caret-right",
                    className: "share-button-arrow hide-for-large"
                });
            return i.default.createElement(u.BaseButton, n({}, c, {
                className: l.default(o.className, "hide-for-large"),
                onClick: function(e) {
                    e && e.preventDefault(),
                    window.open("sms:?&body=" + encodeURIComponent(a || ""))
                }
            }), i.default.createElement(u.UIIcon, {
                name: "message",
                className: "share-button-icon"
            }), s.t("Text"), d)
        }
    },
    WwOJ: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("hc1T");
        Object.defineProperty(t, "DonateButton", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    X0QB: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    XDKs: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("jyDh");
        Object.defineProperty(t, "PopOver", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        }),
        Object.defineProperty(t, "PopOverButton", {
            enumerable: !0,
            get: function() {
                return n.PopOverButton
            }
        })
    },
    XGPM: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    XJrD: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("TSYQ")),
            o = n(a("q1tI"));
        a("NjdD"),
        t.default = function(e) {
            var t = e.className,
                a = e.children,
                n = r.default(t, "list-unstyled", "m-create-share-list");
            return o.default.createElement("ul", {
                className: n
            }, a)
        }
    },
    "Y1Z+": function(e, t, a) {
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
            r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            o = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && n(t, e, a);
                return r(t, e), t
            },
            l = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = l(a("TSYQ")),
            u = o(a("q1tI")),
            s = a("yf/i");
        a("491J");
        var c = a("YgTb");
        t.default = function(e) {
            var t = e.className,
                a = e.children,
                n = e.donateURL,
                r = e.title,
                o = i.default(t, "m-first-donate-card");
            return u.default.createElement(u.Fragment, null, u.default.createElement(s.Rule, {
                className: "hide-for-large",
                gutterPull: !0,
                type: "horizontal"
            }), u.default.createElement(s.Link, {
                className: "m-first-donate-card-link",
                dataElementId: "btn_story_donate",
                as: "href",
                to: n
            }, u.default.createElement("div", {
                className: o
            }, u.default.createElement("div", {
                className: "m-first-donate-card-content flex-container align-top"
            }, u.default.createElement("svg", {
                className: "m-first-donate-card-icon",
                fill: "none",
                viewBox: "5 2 100 100",
                xmlns: "http://www.w3.org/2000/svg"
            }, u.default.createElement("path", {
                d: "m55 101c27.062 0 49-21.938 49-49s-21.938-49-49-49-49 21.938-49 49 21.938 49 49 49z",
                fill: "#00b964"
            }), u.default.createElement("g", {
                fill: "#78dda3"
            }, u.default.createElement("path", {
                clipRule: "evenodd",
                d: "m87.9 63.9c0 2.16 1.8 3.96 3.96 3.96s3.96-1.8 3.96-3.96-1.8-3.96-3.96-3.96-3.96 1.8-3.96 3.96zm1.98 0c0-1.08.9-1.98 1.98-1.98s1.98.9 1.98 1.98-.9 1.98-1.98 1.98-1.98-.9-1.98-1.98z",
                fillRule: "evenodd"
            }), u.default.createElement("path", {
                clipRule: "evenodd",
                d: "m48.12 16.02c0 2.16 1.8 3.96 3.96 3.96 2.34 0 3.96-1.8 3.96-3.96s-1.8-3.96-3.96-3.96-3.96 1.8-3.96 3.96zm1.98 0c0-1.08.9-1.98 1.98-1.98s1.98.9 1.98 1.98-.9 1.98-1.98 1.98-1.98-.9-1.98-1.98z",
                fillRule: "evenodd"
            }), u.default.createElement("path", {
                d: "m92.94 44.1h-2.7v-2.7c0-.54-.54-1.08-1.08-1.08s-1.08.54-1.08 1.08v2.7h-2.7c-.54 0-1.08.54-1.08 1.08s.54 1.08 1.08 1.08h2.7v2.7c0 .54.54 1.08 1.08 1.08s1.08-.54 1.08-1.08v-2.7h2.7c.54 0 1.08-.54 1.08-1.08s-.54-1.08-1.08-1.08z"
            }), u.default.createElement("path", {
                d: "m20.76 62.1h-2.7v-2.7c0-.54-.54-1.08-1.08-1.08s-.9.54-.9 1.08v2.7h-2.7c-.54 0-1.08.54-1.08 1.08s.54 1.08 1.08 1.08h2.7v2.7c0 .54.54 1.08 1.08 1.08s1.08-.54 1.08-1.08v-2.7h2.7c.54 0 1.08-.54 1.08-1.08s-.72-1.08-1.26-1.08z"
            }), u.default.createElement("path", {
                d: "m60.36 13.14c.7953 0 1.44-.6447 1.44-1.44s-.6447-1.44-1.44-1.44-1.44.6447-1.44 1.44.6447 1.44 1.44 1.44z"
            }), u.default.createElement("path", {
                d: "m54.24 76.5c.7953 0 1.44-.6447 1.44-1.44s-.6447-1.44-1.44-1.44-1.44.6447-1.44 1.44.6447 1.44 1.44 1.44z"
            }), u.default.createElement("path", {
                d: "m14.82 52.2c.7953 0 1.44-.6447 1.44-1.44s-.6447-1.44-1.44-1.44-1.44.6447-1.44 1.44.6447 1.44 1.44 1.44z"
            }), u.default.createElement("path", {
                d: "m85.38 32.94c.7953 0 1.44-.6447 1.44-1.44s-.6447-1.44-1.44-1.44-1.44.6447-1.44 1.44.6447 1.44 1.44 1.44z"
            })), u.default.createElement("path", {
                d: "m74.22 34.92c0-6.12-4.86-10.98-10.98-10.98-3.42 0-6.66 1.44-8.46 5.76-2.34-4.14-5.04-5.76-8.46-5.76-6.12 0-10.98 4.86-10.98 10.98v.9c0 5.94 6.66 15.84 18.9 23.4.36.18.9.18 1.26 0 12.42-7.56 18.9-17.64 18.9-23.4-.18-.36-.18-.72-.18-.9z",
                fill: "#fff"
            }), u.default.createElement("path", {
                d: "m39.3 35.82c-.54 0-1.08-.54-1.08-1.08 0-4.32 3.6-7.92 7.92-7.92.54 0 1.08.54 1.08 1.08s-.54 1.08-1.08 1.08c-3.24 0-5.94 2.7-5.94 5.94 0 .54-.36.9-.9.9z",
                fill: "#78dda3"
            }), u.default.createElement("path", {
                d: "m36.24 89.28c-.72 0-1.26-.36-1.8-.72l-5.58-5.94c-.54-.54-.72-1.08-.72-1.8s.36-1.26.9-1.8l1.98-1.8c.36-.36.36-.72.36-1.08l-5.4-14.76c-.36-1.08-.36-2.34.18-3.42l4.86-11.34c.54-1.08 1.62-1.8 2.88-1.8.9 0 1.8.36 2.34 1.08s.9 1.62.72 2.52c-.9 3.78-2.52 10.26-2.52 11.34 0 2.52 2.16 5.76 3.24 5.94.18 0 .54.18.72.18 1.44 0 2.7-1.98 2.7-4.86v-1.8c0-1.62 1.44-3.06 3.06-3.06s3.06 1.26 3.06 3.06v15.84c0 3.06-1.26 5.94-3.42 8.28l-5.4 5.4c-.9.36-1.44.54-2.16.54z",
                fill: "#fff"
            }), u.default.createElement("path", {
                clipRule: "evenodd",
                d: "m29.94 46.08c.72-1.62 2.16-2.52 3.78-2.52 1.26 0 2.34.72 2.88 1.26.9 1.08 1.08 2.34.9 3.6-1.08 4.68-2.34 10.26-2.34 11.16 0 1.8 1.8 4.68 2.52 5.04h.36c.72 0 1.62-1.62 1.62-3.96v-1.8c0-1.08.54-2.16 1.26-2.88.72-.9 1.8-1.26 2.88-1.26s2.16.54 2.88 1.26c.9.72 1.26 1.8 1.26 2.88v15.84c0 3.42-1.44 6.66-3.78 9l-5.4 5.4c-.72.72-1.62 1.08-2.52 1.08s-1.8-.36-2.52-1.08l-5.58-5.94c-.54-.72-.9-1.62-.9-2.52s.36-1.8 1.08-2.52l1.98-1.8-5.4-14.76c-.36-1.26-.36-2.88.18-4.14zm5.76 2.16c.36-1.26-.72-2.52-1.98-2.52-.9 0-1.62.36-2.16 1.08l-4.86 11.34c-.36.9-.36 1.8 0 2.7l5.4 14.76c.36.72 0 1.62-.54 2.16l-1.98 1.8c-.54.54-.54 1.62 0 2.16l5.58 5.94c.36.36.72.54 1.08.54s.72 0 .9-.18l5.4-5.4c1.98-1.98 3.06-4.68 3.06-7.56v-15.84c0-1.08-.9-1.98-1.98-1.98s-1.98.9-1.98 1.98v1.8c0 3.24-1.44 5.94-3.6 5.94-.18 0-.54 0-.9-.18-1.62-.54-3.96-4.32-3.96-7.02 0-1.62 2.52-11.52 2.52-11.52z",
                fill: "#00b964",
                fillRule: "evenodd"
            }), u.default.createElement("path", {
                d: "m72.96 89.28c-.72 0-1.26-.18-1.8-.72l-5.4-5.4c-2.16-2.16-3.42-5.04-3.42-8.28v-15.84c0-1.62 1.26-3.06 3.06-3.06s3.06 1.44 3.06 3.06v1.8c0 2.88 1.08 4.86 2.7 4.86.18 0 .36 0 .72-.18 1.08-.36 3.24-3.6 3.24-5.94 0-1.08-1.44-7.56-2.52-11.34-.18-.9 0-1.98.54-2.7s1.44-1.08 2.34-1.08c1.26 0 2.34.72 2.88 1.8l4.86 11.34c.54 1.08.54 2.34.18 3.42l-5.4 14.76c-.18.36 0 .9.36 1.08l1.98 1.8c.54.54.72 1.08.9 1.8 0 .72-.18 1.26-.72 1.8l-5.76 5.94c-.54.9-1.08 1.08-1.8 1.08z",
                fill: "#fff"
            }), u.default.createElement("path", {
                clipRule: "evenodd",
                d: "m72.24 45c.9-.9 1.98-1.44 3.24-1.44 1.62 0 3.06 1.08 3.6 2.52l4.86 11.34c.54 1.26.72 2.7.18 4.14l-5.4 14.76 1.98 1.8c.54.72 1.08 1.62 1.08 2.52.18.9-.18 1.8-.9 2.52l-5.58 5.94c-.72.72-1.62 1.08-2.52 1.08s-1.8-.36-2.52-1.08l-5.4-5.4c-2.52-2.52-3.78-5.58-3.78-9v-15.84c0-1.08.54-2.16 1.26-2.88.72-.9 1.8-1.26 2.88-1.26s2.16.54 2.88 1.26c.9.72 1.26 1.8 1.26 2.88v1.8c0 2.34.9 3.96 1.62 3.96h.36c.72-.36 2.52-3.24 2.52-5.04-.18-.9-1.44-6.48-2.52-11.16-.18-1.26.18-2.52.9-3.42zm5.04 1.98c-.18-.72-.9-1.26-1.8-1.26-1.26 0-2.34 1.26-2.16 2.34 0 0 2.52 9.9 2.52 11.52 0 2.7-2.34 6.48-3.96 7.02-.36.18-.54.18-.9.18-2.16 0-3.6-2.7-3.6-5.94v-1.8c0-1.08-.9-1.98-1.98-1.98s-1.98.9-1.98 1.98v15.84c0 2.88 1.08 5.58 3.06 7.56l5.4 5.4c.36.18.72.36 1.08.36s.72 0 .72-.36l5.58-5.94c.72-.54.54-1.62 0-2.16l-1.98-1.8c-.54-.54-.9-1.44-.54-2.16l5.4-14.76c.36-.9.36-1.8 0-2.7z",
                fill: "#00b964",
                fillRule: "evenodd"
            }), u.default.createElement("g", {
                fill: "#78dda3"
            }, u.default.createElement("path", {
                clipRule: "evenodd",
                d: "m55.5 92.34c.18.18.54.36.72.36s.54-.18.72-.36l3.06-3.06c.36-.36.36-1.08 0-1.44l-3.06-3.06c-.36-.36-1.08-.36-1.44 0l-3.06 3.06c-.18.18-.36.36-.36.72s.18.54.36.72zm.54-2.16-1.62-1.62 1.62-1.62 1.62 1.62z",
                fillRule: "evenodd"
            }), u.default.createElement("path", {
                clipRule: "evenodd",
                d: "m18.78 40.5c.18.18.54.36.72.36s.54-.18.72-.36l3.06-3.06c.18-.18.36-.36.36-.72s-.18-.54-.36-.72l-3.06-3.06c-.36-.36-1.08-.36-1.44 0l-3.06 3.06c-.36.36-.36 1.08 0 1.44zm.72-2.16-1.62-1.62 1.62-1.62 1.62 1.62z",
                fillRule: "evenodd"
            }), u.default.createElement("path", {
                d: "m31.74 15.48c-.36 0-.54-.18-.72-.36l-5.22-7.01999c-.36-.36-.18-1.08.18-1.44s1.08-.18 1.44.18l5.22 7.01999c.36.36.18 1.08-.18 1.44-.36.18-.54.18-.72.18z"
            }), u.default.createElement("path", {
                d: "m38.04 24.12c-.36 0-.54-.18-.72-.36l-3.06-4.14c-.36-.36-.18-1.08.18-1.44s1.08-.18 1.44.18l3.06 4.14c.36.36.18 1.08-.18 1.44-.18 0-.54.18-.72.18z"
            }), u.default.createElement("path", {
                d: "m77.46 15.48c-.18 0-.36 0-.54-.18-.36-.36-.54-.9-.18-1.44l5.22-7.01999c.36-.36.9-.54 1.44-.18.36.36.54.9.18 1.44l-5.22 7.01999c-.18.36-.54.36-.9.36z"
            }), u.default.createElement("path", {
                d: "m71.16 24.12c-.18 0-.36 0-.54-.18-.36-.36-.54-.9-.18-1.44l3.06-4.14c.36-.54.9-.54 1.44-.18.36.36.54.9.18 1.44l-3.06 4.14c-.36.18-.72.36-.9.36z"
            }), u.default.createElement("path", {
                d: "m42 21.24c-.36 0-.9-.36-.9-.72l-4.68-14.76001c-.18-.54.18-1.08.72-1.26s1.08.18 1.26.72l4.68 14.76001c.18.54-.18 1.08-.72 1.26-.18 0-.36 0-.36 0z"
            }), u.default.createElement("path", {
                d: "m33.9 27.18c-.18 0-.36 0-.54-.18l-12.96-9.72c-.36-.36-.54-.9-.18-1.44s.9-.54 1.44-.18l12.96 9.72c.36.36.54.9.18 1.44-.18.18-.54.36-.9.36z"
            }), u.default.createElement("path", {
                d: "m67.2 21.24c-.18 0-.18 0-.36 0-.54-.18-.9-.72-.72-1.26l4.68-14.76001c.18-.54.72-.9 1.26-.72s.9.72.72 1.26l-4.68 14.76001c0 .36-.36.72-.9.72z"
            }), u.default.createElement("path", {
                d: "m75.3 27.18c-.36 0-.54-.18-.72-.36-.36-.36-.18-1.08.18-1.44l12.96-9.72c.36-.36 1.08-.18 1.44.18s.18 1.08-.18 1.44l-13.14 9.72c-.18.18-.36.18-.54.18z"
            }))), u.default.createElement("div", null, u.default.createElement("h2", {
                className: "m-first-donate-card-title"
            }, r), a, u.default.createElement(s.PrimaryButton, {
                className: "show-for-large mr0 ml0",
                color: "yellow",
                layout: "full"
            }, c.t("Donate now")))), u.default.createElement(s.PrimaryButton, {
                className: "hide-for-large max-width-100",
                color: "yellow",
                layout: "full"
            }, c.t("Donate now")))))
        }
    },
    Y4O4: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("Qmnu");
        Object.defineProperty(t, "Gallery", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    Y4ob: function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
            return (n = Object.assign || function(e) {
                for (var t, a = 1, n = arguments.length; a < n; a++)
                    for (var r in t = arguments[a])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }).apply(this, arguments)
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.makeGetCampaignRecentDonationsTotalFormatted = t.makeGetCampaignRecentDonationsTotal = t.makeGetCampaignStateLabel = t.makeGetAnalyticsEventData = t.makeGetShowActiveContent = t.makeGetCharityItem = t.makeGetUnreferredDonationStats = t.makeGetTeamCampaignMembersList = t.makeGetBeneCampaignMemberItem = t.makeGetOrganizerCampaignMemberItem = t.makeGetCampaignPartnerProps = t.makeGetCampaignMembersHeaderProps = t.makeGetLocaleNumberFormatter = t.makeGetGuidanceDrawerDisplay = t.makeGetSameCurrencySymbolCode = t.makeGetCampaignSidebarProps = t.makeGetCampaignMediaId = t.makeGetCampaignMediaType = t.makeGetCampaignMainPhoto = t.makeGetCampaignPagePhotosMeta = t.makeGetCampaignBeneficiaryAvatar = t.makeGetOrderedCampaignPhotos = t.makeGetCampaignOrganizerAvatar = t.makeGetCampaignMembersProps = t.makeGetTeamMemberAvatars = t.makeGetCampaignByline = t.makeGetCommentList = t.makeGetUpdateList = t.makeGetIsAnonymousDonationType = t.makeGetDonationPreviewList = t.makeGetCampaignStatsFormatted = t.makeGetCampaignHeadData = t.makeGetCampaignDescriptionExcerpt = t.makeGetCampaignMainPhotoFormatted = void 0;
        var r = a("G4qV"),
            o = a("wE+H"),
            l = a("hXCg"),
            i = a("+yDP"),
            u = a("0Y3C"),
            s = a("alXw"),
            c = a("PcW7"),
            d = a("p1Kg"),
            m = a("YgTb"),
            f = a("Cge7");
        Object.defineProperty(t, "makeGetCampaignBeneficiaryAvatar", {
            enumerable: !0,
            get: function() {
                return f.makeGetCampaignBeneficiaryAvatar
            }
        }),
        Object.defineProperty(t, "makeGetCampaignMainPhoto", {
            enumerable: !0,
            get: function() {
                return f.makeGetCampaignMainPhoto
            }
        }),
        Object.defineProperty(t, "makeGetCampaignOrganizerAvatar", {
            enumerable: !0,
            get: function() {
                return f.makeGetCampaignOrganizerAvatar
            }
        }),
        Object.defineProperty(t, "makeGetOrderedCampaignPhotos", {
            enumerable: !0,
            get: function() {
                return f.makeGetOrderedCampaignPhotos
            }
        });
        var p,
            g = a("iahY"),
            h = a("SKg/"),
            y = a("ZZcF"),
            _ = a("C0Xu"),
            b = a("GTVY"),
            v = a("K0mF"),
            E = a("mZEw"),
            S = a("X4cv"),
            C = a("8QVh"),
            O = function() {
                return r.createSelector([y.makeGetLocale(), f.makeGetCampaignCurrency()], (function(e, t) {
                    return p ? p.setCurrencyProps({
                        currency: t,
                        currencyDisplay: "symbol"
                    }) : (p = new l.LocaleNumberFormatter(e)).setCurrencyProps({
                        currency: t,
                        currencyDisplay: "symbol"
                    })
                }))
            };
        t.makeGetLocaleNumberFormatter = O;
        t.makeGetCampaignMainPhotoFormatted = function() {
            return r.createSelector([f.makeGetCampaignMainPhoto(), y.makeGetLocale()], (function(e, t) {
                return S.Photo.toImage(e, t)
            }))
        };
        t.makeGetIsAnonymousDonationType = function() {
            return r.createSelector([g.makeGetIsAnonymousDonation()], (function(e) {
                return e
            }))
        };
        var P = function() {
            return r.createSelector([f.makeGetCampaignStatus(), f.makeGetCanViewCampaignLite()], (function(e, t) {
                return !(e !== d.CampaignStatus.ACTIVE && e !== d.CampaignStatus.CLOSED && !t)
            }))
        };
        t.makeGetShowActiveContent = P;
        var I = function() {
            return r.createSelector([f.makeGetCampaignTitle(), f.makeGetCampaignDescription(), f.makeGetCampaignOrganizerFullName()], (function(e, t, a) {
                var n = i.htmlSafe(t.replace(/<br[^>]*>/gi, "\n").replace(/&amp;/g, "&")),
                    r = m.t("… {{- userName}} needs your support for {{- campaignTitle}}", {
                        campaignTitle: e,
                        userName: a
                    });
                return n.substring(0, Math.max(61, 158 - r.length)) + r
            }))
        };
        t.makeGetCampaignDescriptionExcerpt = I;
        t.makeGetCampaignHeadData = function() {
            return r.createSelector([f.makeGetCampaignTitle(), I(), r.createSelector([y.makeGetBaseUrl("/f/"), f.makeGetCampaignUrl()], (function(e, t) {
                return C.normalize(e + "/" + t)
            })), f.makeGetCampaignMainPhoto(), y.makeGetFacebook(), f.makeGetCampaignBeneficiaryFullName(), f.makeGetCampaignOrganizerFullName(), y.makeGetLocale(), f.makeGetCampaignCity(), r.createSelector([f.makeGetCampaign()], (function(e) {
                return !e.visible_in_search
            }))], (function(e, t, a, r, o, l, i, u, s, c) {
                return n(n({}, o), {
                    campaign: {
                        beneficiary: l,
                        descriptionExcerpt: t,
                        image: r.url,
                        location: s,
                        organizer: i,
                        title: e,
                        url: a
                    },
                    locale: u,
                    noFollow: c
                })
            }))
        };
        var k = function() {
            return r.createSelector([f.makeGetCampaignDonations(), O(), y.makeGetLocale()], (function(e, t, a) {
                return E.formatDonationsList(e.slice(0, 5), t, a)
            }))
        };
        t.makeGetDonationPreviewList = k;
        var N = function() {
            return r.createSelector([f.makeGetFeedVelocityTypeTotal(_.VelocityType.RECENT_DONATIONS)], (function(e) {
                return e
            }))
        };
        t.makeGetCampaignRecentDonationsTotal = N;
        var w = function() {
            return r.createSelector([N(), O()], (function(e, t) {
                return t.format(e || 0)
            }))
        };
        t.makeGetCampaignRecentDonationsTotalFormatted = w;
        t.makeGetUpdateList = function() {
            return r.createSelector([f.makeGetCampaignUpdates(), y.makeGetLocale()], (function(e, t) {
                return e.map((function(e) {
                    var a = e.text.replace(/\[email redacted\]/g, m.t("[email redacted]")).replace(/\[phone redacted\]/g, m.t("[phone redacted]"));
                    return {
                        author: e.author,
                        authorType: d.getUserRoleStrings()[e.author_type],
                        date: v.calendar(e.created_at, t),
                        id: e.id,
                        images: e.photos ? e.photos.map((function(e) {
                            return S.Photo.toImage(e, t)
                        })) : [],
                        text: i.nl2br(a)
                    }
                }))
            }))
        };
        t.makeGetCommentList = function() {
            return r.createSelector([f.makeGetCampaignComments(), O(), y.makeGetLocale()], (function(e, t, a) {
                v.setDonationRelativeTime();
                var n = e.map((function(e) {
                    var n = "";
                    return void 0 !== e.amount ? n = t.formatAsCurrency(e.amount) : e.donation && (n = t.formatAsCurrency(e.donation.amount)), {
                        author: {
                            fullName: e.name && e.name.length > 35 ? i.truncate(e.name, 35, !1) + "..." : e.name,
                            initials: e.name ? u.getInitials(e.name) : "",
                            profileImage: e.profile_url && !e.profile_url.includes("gfm_donor.gif") ? e.profile_url : ""
                        },
                        avatarValues: {
                            image: e.profile_url && "https://funds.gfm-test01.com/css/4.0/images/gfm_donor.gif" !== e.profile_url ? e.profile_url : "",
                            initials: e.name ? u.getInitials(e.name) : "",
                            name: e.name
                        },
                        createdAt: v.calendar(e.timestamp, a),
                        donationAmountFormatted: n,
                        images: e.photos ? e.photos.map((function(e) {
                            return S.Photo.toImage(e, a)
                        })) : [],
                        text: e.comment.comment,
                        timeAgo: v.timeAgo(e.timestamp, a),
                        totalLikes: 0,
                        ugcId: e.ugc_id
                    }
                }));
                return v.resetDefaultRelativeTime(), n
            }))
        };
        var T = function() {
            return r.createSelector([f.makeGetCampaignStats(), O()], (function(e, t) {
                return {
                    totalDonationsStr: t.formatWithAbbrev(e.totalDonations, !0, 1),
                    totalDonorsStr: t.formatWithAbbrev(e.totalDonors, !0, 1),
                    totalDonorsStrNoAbbrev: t.format(e.totalDonors),
                    totalFollowersStr: t.formatWithAbbrev(e.totalFollowers, !0, 1),
                    totalGoalStr: t.formatAsCurrency(e.totalGoal),
                    totalRaisedStr: t.formatAsCurrency(e.totalRaised),
                    totalSharesStr: t.formatWithAbbrev(e.totalShares, !0, 1)
                }
            }))
        };
        t.makeGetCampaignStatsFormatted = T;
        t.makeGetTeamMemberAvatars = function() {
            return r.createSelector([f.makeGetCampaignTeamMembers()], (function(e) {
                return e.filter((function(e) {
                    return e.role === o.UserRoles.TEAM_MEMBER
                })).map((function(e) {
                    return {
                        fullName: e.first_name + " " + e.last_name,
                        initials: u.getInitials(e.first_name + " " + e.last_name),
                        profileImage: e.profile_url
                    }
                }))
            }))
        };
        t.makeGetCampaignMediaType = function() {
            return r.createSelector([f.makeGetCampaign()], (function(e) {
                return e.media_type
            }))
        };
        t.makeGetCampaignMediaId = function() {
            return r.createSelector([f.makeGetCampaign()], (function(e) {
                return e.media_id
            }))
        };
        var M = function() {
            return r.createSelector([f.makeGetCampaign()], (function(e) {
                return b.getCategory(e.category_id)
            }))
        };
        t.makeGetCampaignSidebarProps = function() {
            return r.createSelector([s.makeGetDonationList(), k(), f.makeGetCampaignStatus(), f.makeGetCampaignStats(), T(), P(), f.makeGetIsLoggedIn(), c.makeGetSusiModalPaths(), N(), w(), f.makeGetCampaignLaunchDate()], (function(e, t, a, n, r, o, l, i, u, s, c) {
                var m = a !== d.CampaignStatus.CLOSED && a !== d.CampaignStatus.DEACTIVATED && a !== d.CampaignStatus.DELETED,
                    f = e && e.length > 5;
                return {
                    campaignLaunchDate: c,
                    campaignRecentDonationsTotal: u,
                    campaignRecentDonationsTotalStr: s,
                    donations: o && f ? e : void 0,
                    donationsPreview: o ? t : void 0,
                    isActive: m,
                    isLoggedIn: l,
                    showSocialStats: !!(n.totalDonors && f && m),
                    signInPath: i.signInPath,
                    stats: n,
                    statsFormatted: r
                }
            }))
        };
        t.makeGetCampaignByline = function() {
            return r.createSelector([M(), f.makeGetCampaignBeneficiaryAvatar(), f.makeGetCampaignLaunchDate(), f.makeGetCampaignCreatedDate(), f.makeGetCampaignOrganizerAvatar(), f.makeGetIsTeamCampaignWithTeamMembers(), f.makeGetTeamInfo(), f.makeGetCampaignTeamMembers(), f.makeGetIsCharity(), D(), y.makeGetLocale()], (function(e, t, a, n, r, l, i, u, s, c, d) {
                var f = a || n,
                    p = [];
                l && i.team_pic_url && p.push({
                    as: o.IdentityType.team,
                    profileImage: i.team_pic_url
                }),
                p.push({
                    as: o.IdentityType.person,
                    initials: r.initials,
                    profileImage: r.profileImage
                }),
                s && c && p.push({
                    as: o.IdentityType.charity,
                    profileImage: c.organization.profileImage
                });
                var g,
                    h = t && t.fullName ? t.fullName : c && c.organization.name ? c.organization.name : "",
                    y = r && r.fullName ? r.fullName : "";
                if (l) {
                    var _ = void 0;
                    2 === u.length && (_ = u.find((function(e) {
                        return e.status === o.TeamMemberStatus.ACTIVE
                    }))),
                    g = h ? _ && _.first_name && _.last_name ? c && c.organization.name ? m.t("{{- organizerFullName}} and {{- teamMemberFullName}} are organizing this fundraiser to benefit {{- beneficiaryFullName}}.", {
                        beneficiaryFullName: h,
                        organizerFullName: y,
                        teamMemberFullName: _.first_name + " " + _.last_name
                    }) : m.t("{{- organizerFullName}} and {{- teamMemberFullName}} are organizing this fundraiser on behalf of {{- beneficiaryFullName}}.", {
                        beneficiaryFullName: h,
                        organizerFullName: y,
                        teamMemberFullName: _.first_name + " " + _.last_name
                    }) : c && c.organization.name ? m.t("{{- organizerFullName}} and {{count}} other are organizing this fundraiser to benefit {{- beneficiaryFullName}}.", {
                        beneficiaryFullName: h,
                        count: u.length - 1,
                        defaultValue_plural: "{{- organizerFullName}} and {{count}} others are organizing this fundraiser to benefit {{- beneficiaryFullName}}.",
                        organizerFullName: y
                    }) : m.t("{{- organizerFullName}} and {{count}} other are organizing this fundraiser on behalf of {{- beneficiaryFullName}}.", {
                        beneficiaryFullName: h,
                        count: u.length - 1,
                        defaultValue_plural: "{{- organizerFullName}} and {{count}} others are organizing this fundraiser on behalf of {{- beneficiaryFullName}}.",
                        organizerFullName: y
                    }) : _ && _.first_name && _.last_name ? m.t("{{- organizerFullName}} and {{- teamMemberFullName}} are organizing this fundraiser.", {
                        organizerFullName: y,
                        teamMemberFullName: _.first_name + " " + _.last_name
                    }) : m.t("{{- organizerFullName}} and {{count}} other are organizing this fundraiser.", {
                        count: u.length - 1,
                        defaultValue_plural: "{{- organizerFullName}} and {{count}} others are organizing this fundraiser.",
                        organizerFullName: y
                    })
                } else
                    g = h ? c && c.organization.name ? m.t("{{- organizerFullName}} is organizing this fundraiser to benefit {{- beneficiaryFullName}}.", {
                        beneficiaryFullName: h,
                        organizerFullName: y
                    }) : m.t("{{- organizerFullName}} is organizing this fundraiser on behalf of {{- beneficiaryFullName}}.", {
                        beneficiaryFullName: h,
                        organizerFullName: y
                    }) : m.t("{{- organizerFullName}} is organizing this fundraiser.", {
                        organizerFullName: y
                    });
                return {
                    avatarStack: p,
                    byline: g,
                    category: e,
                    charity: c,
                    creationDate: f,
                    isCharity: s,
                    locale: d,
                    showTeamsLabel: l
                }
            }))
        };
        t.makeGetCampaignPagePhotosMeta = function() {
            return r.createSelector([h.makeGetPhotosMeta(), f.makeGetDescriptionPhotos(), f.makeGetUpdatePhotos(), f.makeGetCommunityPhotos()], (function(e, t, a, r) {
                return n(n({}, e), {
                    numCommunityPhotos: r.length,
                    numDescriptionPhotos: t.length,
                    numUpdatePhotos: a.length
                })
            }))
        };
        t.makeGetSameCurrencySymbolCode = function() {
            return r.createSelector([f.makeGetCampaignCurrency(), f.makeGetOrganizerLocation(), y.makeGetVisitorGeoRecord()], (function(e, t, a) {
                if ((null == t ? void 0 : t.country) === (null == a ? void 0 : a.countryCode))
                    return "";
                for (var n in d.commonCurrencySymbol)
                    if (d.commonCurrencySymbol[n].includes(null == t ? void 0 : t.country) && d.commonCurrencySymbol[n].includes(null == a ? void 0 : a.countryCode))
                        return e || "";
                return ""
            }))
        };
        t.makeGetGuidanceDrawerDisplay = function() {
            return r.createSelector([g.makeHasSignedDonationId(), f.makeGetCampaignStatus()], (function(e, t) {
                return e && (t === d.CampaignStatus.ACTIVE || t === d.CampaignStatus.CLOSED)
            }))
        };
        var A = function() {
            return r.createSelector([f.makeGetIsTeamCampaignWithTeamMembers(), f.makeGetTeamInfo(), O(), f.makeGetCampaignUnattributedAmountRaised(), f.makeGetCampaignUnattributedDonationCount()], (function(e, t, a, n, r) {
                if (e && !1 !== t.public_attributions) {
                    var o = a.formatAsCurrency(n);
                    return r > 0 && n > 0 ? m.t("This team raised {{raisedAmountFormatted}} from {{count}} other donation.", {
                        count: r,
                        defaultValue_plural: "This team raised {{raisedAmountFormatted}} from {{count}} other donations.",
                        raisedAmountFormatted: o
                    }) : void 0
                }
            }))
        };
        t.makeGetUnreferredDonationStats = A;
        var j = function() {
            return r.createSelector([f.makeGetCampaignOrganizerAvatar(), f.makeGetCampaignTeamMembers(), O(), f.makeGetOrganizerLocation(), f.makeGetIsTeamCampaignWithTeamMembers()], (function(e, t, a, n, r) {
                var l;
                if (r) {
                    var i = t.filter((function(e) {
                            return e.role === o.UserRoles.ORGANIZER
                        }))[0],
                        u = i && a.formatAsCurrency(i.amount_raised),
                        s = i && i.number_of_donations_attributed;
                    l = s && u ? m.t("Raised {{amount}} from {{count}} donation", {
                        amount: u,
                        count: s,
                        defaultValue_plural: "Raised {{amount}} from {{count}} donations"
                    }) : void 0
                }
                return {
                    meta: l ? {
                        attributionStats: l,
                        city: n.city,
                        roleString: d.getUserRoleStrings()[o.UserRoles.ORGANIZER]
                    } : {
                        city: n.city,
                        roleString: d.getUserRoleStrings()[o.UserRoles.ORGANIZER]
                    },
                    person: e
                }
            }))
        };
        t.makeGetOrganizerCampaignMemberItem = j;
        var x = function() {
            return r.createSelector([f.makeGetHasBeneficiary(), f.makeGetCampaignBeneficiaryAvatar()], (function(e, t) {
                return e ? {
                    meta: {
                        roleString: d.getUserRoleStrings()[o.UserRoles.BENEFICIARY]
                    },
                    person: t
                } : void 0
            }))
        };
        t.makeGetBeneCampaignMemberItem = x;
        var D = function() {
            return r.createSelector([f.makeGetIsCharity(), f.makeGetCampaignCharity(), f.makeGetCampaignCharityLogo()], (function(e, t, a) {
                var n;
                if (e && t) {
                    var r = void 0;
                    switch (t.country) {
                    case _.CharityCountries.US:
                        r = m.t("Donations are typically 100% tax deductible in the US.");
                        break;
                    case _.CharityCountries.CA:
                        r = m.t("Donations are typically tax deductible in Canada.");
                        break;
                    case _.CharityCountries.AU:
                        r = m.t("Donations are typically tax deductible in Australia.");
                        break;
                    case _.CharityCountries.GB:
                        r = m.t("Donations eligible for Gift Aid.")
                    }
                    n = {
                        meta: {
                            city: m.t("{{city}}, {{state}}", {
                                city: t.city,
                                state: t.state
                            }),
                            country: t.country,
                            ein: t.ein,
                            roleString: m.t("Registered nonprofit"),
                            title: r
                        },
                        organization: {
                            initials: u.getInitials(t.name),
                            name: t.name,
                            profileImage: a
                        }
                    }
                }
                return n
            }))
        };
        t.makeGetCharityItem = D;
        var G = function() {
            return r.createSelector([f.makeGetIsTeamCampaignWithTeamMembers(), f.makeGetCampaignTeamMembers(), O()], (function(e, t, a) {
                if (e)
                    return t.filter((function(e) {
                        return e.role === o.UserRoles.TEAM_MEMBER
                    })).sort((function(e, t) {
                        return e.first_name.toUpperCase() < t.first_name.toUpperCase() ? -1 : e.first_name.toUpperCase() > t.first_name.toUpperCase() ? 1 : 0
                    })).sort((function(e, t) {
                        return t.amount_raised - e.amount_raised
                    })).map((function(e) {
                        return {
                            meta: {
                                attributionStats: e.number_of_donations_attributed && e.amount_raised ? m.t("Raised {{amount}} from {{count}} donation", {
                                    amount: a.formatAsCurrency(e.amount_raised),
                                    count: e.number_of_donations_attributed,
                                    defaultValue_plural: "Raised {{amount}} from {{count}} donations"
                                }) : void 0,
                                roleString: d.getUserRoleStrings()[o.UserRoles.TEAM_MEMBER]
                            },
                            person: {
                                fullName: e.first_name + " " + e.last_name,
                                initials: u.getInitials(e.first_name + " " + e.last_name),
                                profileImage: e.profile_url
                            }
                        }
                    }))
            }))
        };
        t.makeGetTeamCampaignMembersList = G;
        var F = function() {
            return r.createSelector([f.makeGetIsPartner(), f.makeGetCampaignPartner()], (function(e, t) {
                if (e && t) {
                    var a = void 0,
                        n = void 0;
                    if ("varsity_partner" !== t.type)
                        return;
                    if ("bsnsports" === t.name)
                        a = "BSN SPORTS",
                        n = "/c/bsnsports";
                    else if ("varsityspirit" === t.name)
                        a = "Varsity Spirit",
                        n = "/c/varsityspirit";
                    else {
                        if ("herffjones" !== t.name)
                            return;
                        a = "Herff Jones",
                        n = "/c/herffjones"
                    }
                    return {
                        partnerLink: n,
                        partnerName: a,
                        profileImage: t.profileImage
                    }
                }
            }))
        };
        t.makeGetCampaignPartnerProps = F;
        t.makeGetCampaignMembersHeaderProps = function() {
            return r.createSelector([f.makeGetIsTeamCampaignWithTeamMembers(), f.makeGetTeamInfo(), f.makeGetCampaign(), f.makeGetCampaignTeamMembers(), f.makeGetHasBeneficiary()], (function(e, t, a, n, r) {
                if (e) {
                    var l = t.team_pic_url ? {
                            as: o.IdentityType.team,
                            profileImage: t.team_pic_url
                        } : void 0,
                        i = r ? n.length + 1 : n.length;
                    return {
                        avatarProps: l,
                        title: t.name && "Fundraising Team" !== t.name && "" !== t.name ? m.t("Fundraising team: {{- name}} ({{count}})", {
                            count: i,
                            name: t.name
                        }) : m.t("Fundraising team ({{count}})", {
                            count: i,
                            name: a.user_first_name
                        })
                    }
                }
                return {
                    title: r ? m.t("Organizer and beneficiary") : m.t("Organizer")
                }
            }))
        };
        t.makeGetCampaignMembersProps = function() {
            return r.createSelector([G(), x(), j(), f.makeGetIsTeamCampaignWithTeamMembers(), D(), A(), F(), f.makeGetIsPartner()], (function(e, t, a, n, r, o, l, i) {
                return {
                    beneficiary: t,
                    campaignPartnerProps: l,
                    charity: r,
                    isPartner: i,
                    isTeamCampaignWithTeamMembers: n,
                    organizer: a,
                    teamList: e,
                    unreferredDonationStats: o
                }
            }))
        };
        t.makeGetAnalyticsEventData = function() {
            return r.createSelector([f.makeGetCampaignCreatedDate(), M(), f.makeGetOrganizerLocation(), f.makeGetIsCharity(), f.makeGetHasBeneficiary(), f.makeGetIsTeamCampaignWithTeamMembers(), f.makeGetCampaignCurrentAmount(), f.makeGetCampaignCommentCount(), f.makeGetCampaignDonationCount(), f.makeGetCampaignUpdatesCount(), f.makeGetCampaignUpdates(), f.makeGetCampaignGoalAmount(), f.makeGetCampaignId(), f.makeGetPersonId(), r.createSelector([f.makeGetCampaign()], (function(e) {
                return e.has_gfm_org_donation
            })), h.makeGetIsCommentsInitialized(), f.makeGetCampaignComments()], (function(e, t, a, n, r, o, l, i, u, s, c, d, m, f, p, g, h) {
                var y = c && c[0] && c[0].created_at ? c[0].created_at : void 0;
                return {
                    campaignAmountRaised: l,
                    campaignCategory: t,
                    campaignCommentCount: i,
                    campaignCreatedDate: e,
                    campaignDonationCount: u,
                    campaignGoalAmount: d,
                    campaignHasBeneficiary: r,
                    campaignHasCharity: n,
                    campaignHasComments: g ? h && h.length > 0 : void 0,
                    campaignHasGFMOrgDonation: p,
                    campaignHasTeam: o,
                    campaignId: m,
                    campaignLatestUpdate: y,
                    campaignUpdateCount: s,
                    campaignZipCode: a.postal_code,
                    personId: f
                }
            }))
        };
        t.makeGetCampaignStateLabel = function() {
            return r.createSelector([f.makeGetCampaignStatus(), f.makeGetCampaignLaunchDate(), f.makeGetCampaignDonations()], (function(e, t, a) {
                switch (e) {
                case d.CampaignStatus.DEACTIVATED:
                    return e;
                case d.CampaignStatus.ACTIVE:
                    return a.filter((function(e) {
                        return v.diffFromNow(e.created_at, "hours") <= 72
                    })).length >= 10 ? d.CampaignStatus.TRENDING : v.diffFromNow(t, "days") <= 7 ? d.CampaignStatus.NEW : void 0;
                default:
                    return
                }
            }))
        }
    },
    Y6sO: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("UkFV");
        Object.defineProperty(t, "ProgressMeter", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    Y8CQ: function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = r(a("q1tI")),
            l = a("wE+H"),
            i = a("MS/s"),
            u = a("yf/i"),
            s = a("dNNZ"),
            c = a("p1Kg"),
            d = a("YgTb");
        a("XGPM"),
        t.default = function(e) {
            var t = e.algoliaIndices,
                a = e.authenticatedPerson,
                r = e.isLoggedIn,
                m = e.hasCampaign,
                f = e.susiModalPaths,
                p = c.getNavText(),
                g = p.navLoggedOutDropdown,
                h = p.navLoggedInDropdown;
            return o.default.createElement("nav", {
                className: "o-nav-standard"
            }, o.default.createElement("ul", {
                className: "o-nav-standard-left list-unstyled disp-flex align-middle"
            }, o.default.createElement("li", {
                className: "disp-flex"
            }, o.default.createElement(i.GlobalSearch, {
                algoliaIndices: t,
                searchPageType: "srp"
            })), o.default.createElement("li", {
                className: "disp-flex align-middle show-for-large text-small"
            }, o.default.createElement(u.Rule, {
                type: "vertical"
            }), o.default.createElement(u.Dropdown, {
                buttonContent: g.text,
                placement: "left"
            }, o.default.createElement(u.SubnavContent, {
                groups: g.groups,
                seeAll: g.seeAll
            }))), o.default.createElement("li", {
                className: "disp-flex align-middle show-for-large"
            }, o.default.createElement(u.Rule, {
                type: "vertical"
            }), o.default.createElement(u.Button, {
                className: "text-small",
                as: "href",
                dataElementId: "btn_nav_sign_up",
                to: "/sign-up"
            }, d.t("Start a GoFundMe")))), o.default.createElement("div", {
                className: "o-nav-standard-center"
            }, o.default.createElement(u.Link, {
                ariaLabel: d.t("GoFundMe homepage"),
                as: "href",
                className: "o-nav-standard-logo",
                to: "/",
                dataElementId: "btn_nav_gfm_logo"
            }, o.default.createElement(u.Logo, {
                name: "GoFundMe"
            }))), o.default.createElement("ul", {
                className: "o-nav-standard-right list-unstyled disp-flex align-middle align-right"
            }, !r && o.default.createElement(o.default.Fragment, null, o.default.createElement("li", {
                className: "disp-flex align-middle show-for-large"
            }, f ? o.default.createElement(u.Button, {
                as: "route",
                className: "color-dark-gray text-small",
                dataElementId: "btn_nav_sign_in",
                to: f.signInPath,
                rel: "nofollow"
            }, d.t("Sign in")) : o.default.createElement(u.Button, {
                as: "href",
                className: "color-dark-gray text-small",
                dataElementId: "btn_nav_sign_in",
                to: "/sign-in"
            }, d.t("Sign in")), o.default.createElement(u.Rule, {
                type: "vertical"
            })), o.default.createElement("li", {
                className: "show-for-large pl"
            }, o.default.createElement(u.Button, {
                as: "href",
                dataElementId: "btn_nav_sign_up",
                fill: "hollow-green",
                size: "small",
                to: "/sign-up"
            }, d.t("Start")))), r && !!a && o.default.createElement(o.default.Fragment, null, o.default.createElement("li", {
                className: "disp-flex align-middle show-for-large"
            }, o.default.createElement(u.Dropdown, {
                buttonContent: o.default.createElement(o.default.Fragment, null, o.default.createElement(u.Avatar, n({
                    as: l.IdentityType.person,
                    className: "mr-half"
                }, a)), a.firstName),
                placement: "right"
            }, o.default.createElement(u.SubnavContent, {
                groups: h.groups,
                seeAll: h.seeAll
            }))), m && o.default.createElement("li", {
                className: "disp-flex align-middle show-for-large"
            }, o.default.createElement(u.Rule, {
                type: "vertical"
            }), o.default.createElement(u.Button, {
                as: "href",
                className: "color-dark-gray text-small",
                dataElementId: "btn_nav_campaigns",
                to: "/campaigns"
            }, d.t("Your fundraisers"))), o.default.createElement("li", {
                className: "show-for-large pl"
            }, o.default.createElement(u.Button, {
                as: "href",
                dataElementId: "btn_nav_sign_up",
                fill: "hollow-green",
                size: "small",
                to: "/sign-up"
            }, d.t("Start")))), o.default.createElement("li", {
                className: "disp-flex hide-for-large"
            }, o.default.createElement(s.MobileNavSearchResultsPage, {
                authenticatedPerson: a,
                hasCampaign: m,
                isLoggedIn: r,
                susiModalPaths: f
            }))))
        }
    },
    Y8nK: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("ogQo");
        Object.defineProperty(t, "MobileNavCampaignPage", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    YMFa: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("36wK");
        Object.defineProperty(t, "PersonLoading", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    YSM7: function(e, t, a) {
        "use strict";
        var n,
            r = this && this.__extends || (n = function(e, t) {
                return (n = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var a in t)
                        t.hasOwnProperty(a) && (e[a] = t[a])
                })(e, t)
            }, function(e, t) {
                function a() {
                    this.constructor = e
                }
                n(e, t),
                e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, new a)
            }),
            o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = o(a("TSYQ")),
            i = o(a("q1tI")),
            u = a("yf/i"),
            s = a("z+lN"),
            c = a("YgTb"),
            d = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r(t, e), t.prototype.render = function() {
                    var e = this.props,
                        t = e.className,
                        a = e.isFacebookSigningIn,
                        n = e.onClickSignIn,
                        r = e.onClickSignUpEmail,
                        o = e.onClickSignUpFacebook,
                        d = e.title,
                        m = l.default("p-sign-up-initial text-center", t),
                        f = i.default.createElement(c.Trans, null, "Already have an account?", i.default.createElement(u.HtmlSpace, {
                            type: "breaking"
                        }), i.default.createElement(u.Button, {
                            className: "text-small text-underline",
                            onClick: n,
                            dataElementId: "btn_signin"
                        }, "Sign in"));
                    return i.default.createElement(s.SusiWrapper, {
                        title: d,
                        subText: f,
                        innerWidthNarrow: !0
                    }, i.default.createElement("div", {
                        className: m
                    }, i.default.createElement(u.Button, {
                        dataElementId: "btn_signup_facebook",
                        fill: "solid-facebook",
                        layout: "full",
                        size: "large",
                        className: "mb",
                        onClick: o,
                        disabled: a
                    }, a ? i.default.createElement(u.LoadingDots, {
                        color: "white",
                        size: "large"
                    }) : i.default.createElement(i.default.Fragment, null, i.default.createElement(u.LogoIcon, {
                        name: "Facebook-alt",
                        textPairing: "prependText"
                    }), i.default.createElement(u.HtmlSpace, {
                        type: "breaking"
                    }), c.t("Continue with Facebook"))), i.default.createElement("div", {
                        className: "text-small"
                    }, i.default.createElement(c.Trans, null, "We will never post without your permission")), i.default.createElement(u.WordRule, null, c.t("or")), i.default.createElement(u.Button, {
                        dataElementId: "btn_signup_email",
                        fill: "solid-green",
                        layout: "full",
                        onClick: r,
                        size: "large"
                    }, c.t("Use my email address"))))
                }, t
            }(i.default.Component);
        t.default = d
    },
    YXo6: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("aQJL");
        Object.defineProperty(t, "PasswordGuidance", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    YcaN: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("mSGx");
        Object.defineProperty(t, "PosterShareButton", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        }),
        Object.defineProperty(t, "PosterShareButtonProps", {
            enumerable: !0,
            get: function() {
                return n.PosterShareButtonProps
            }
        })
    },
    "Yt+L": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("ps19");
        Object.defineProperty(t, "CompetitorWarningModal", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        });
        var r = a("ej+7");
        Object.defineProperty(t, "CompetitorWarningModalConnected", {
            enumerable: !0,
            get: function() {
                return r.default
            }
        })
    },
    "Z/t5": function(e, t, a) {
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
            r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            o = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && n(t, e, a);
                return r(t, e), t
            },
            l = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = l(a("TSYQ")),
            u = o(a("q1tI")),
            s = a("+Ded"),
            c = a("z+lN"),
            d = a("dNNZ"),
            m = a("YgTb");
        a("W//I");
        var f = a("yf/i");
        t.default = function(e) {
            var t = e.averageTopDonation,
                a = e.beneOrOrganizerName,
                n = e.className,
                r = e.getTopDonations,
                o = e.history,
                l = e.match,
                p = e.donations,
                g = e.location,
                h = i.default(n, "l-campaign-top-donations-modal"),
                y = new URLSearchParams(g.search).get("member"),
                _ = "/f/" + l.params.campaignUrl + "/donate" + (y ? "?member=" + y : ""),
                b = function() {
                    o.push("/f/" + l.params.campaignUrl + g.search)
                };
            u.useEffect((function() {
                s.trackEvents.push({
                    type: "mp_page_view",
                    viewId: "lb_donation_top"
                }),
                0 === p.length && r()
            }), []);
            for (var v = function() {
                    o.replace("/f/" + l.params.campaignUrl + "/donations" + g.search)
                }, E = u.default.createElement(u.default.Fragment, null, u.default.createElement("h2", {
                    className: "heading-5 mb0"
                }, m.t("Top Donations")), u.default.createElement(f.Button, {
                    className: "show-for-medium",
                    dataElementId: "btn_donations_recent",
                    fill: "white-shadow-active",
                    layout: "inline",
                    onClick: v,
                    size: "small"
                }, u.default.createElement(f.UIIcon, {
                    name: "list"
                }), u.default.createElement("span", {
                    className: "show-for-medium ml"
                }, m.t("See all donations"))), u.default.createElement(f.Button, {
                    className: "hide-for-medium",
                    dataElementId: "btn_donations_recent",
                    fill: "white-shadow",
                    layout: "inline",
                    onClick: v,
                    size: "small"
                }, u.default.createElement(f.UIIcon, {
                    name: "list"
                }), u.default.createElement("span", {
                    className: "ml"
                }, m.t("All")))), S = [], C = 0; C < 5; C++)
                S.push(u.default.createElement("li", {
                    key: C,
                    className: "o-donation-list-item"
                }, u.default.createElement(c.PersonLoading, null)));
            var O = u.default.createElement("ul", {
                    className: "list-unstyled o-donation-list"
                }, S),
                P = u.default.createElement(u.default.Fragment, null, u.default.createElement(d.DonationList, {
                    items: p
                }), u.default.createElement(f.Link, {
                    to: _,
                    target: "_top",
                    rel: "noopener",
                    className: "a-link--unstyled",
                    dataElementId: "btn_donations_message"
                }, u.default.createElement("div", {
                    className: "m-donation-prompt disp-block a-link l-campaign-top-donations-join mb2x mt2x"
                }, u.default.createElement(m.Trans, null, "Join this list. ", u.default.createElement("span", {
                    className: "text-underline"
                }, "Donate now.")))), u.default.createElement("div", {
                    className: "mb2x text-center"
                }, u.default.createElement(f.Button, {
                    className: "text-underline",
                    onClick: b
                }, m.t("Close")))),
                I = u.default.createElement("div", {
                    className: "align-middle disp-flex flex-dir-column"
                }, u.default.createElement(c.DonateButton, {
                    className: "mt2x mb2x",
                    dataElementId: "btn_donations_donate",
                    url: _
                }), u.default.createElement("p", {
                    className: "mb"
                }, m.t("Be a top donor for {{- beneOrOrganizerName}} with {{- averageTopDonation}} or more.", {
                    beneOrOrganizerName: a,
                    averageTopDonation: t
                })));
            return u.default.createElement(d.ModalDonations, {
                className: h,
                closeTriggerLabel: m.t("Close Modal"),
                dataViewId: "lb_donation_top",
                subHeading: I,
                heading: E,
                isOpen: !0,
                onClose: b
            }, p.length > 0 ? P : O)
        }
    },
    Z1x4: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("TSYQ")),
            o = n(a("q1tI")),
            l = a("yf/i"),
            i = a("YgTb");
        a("+/Ym"),
        t.default = function(e) {
            var t = e.className,
                a = e.meta;
            if (!a)
                return o.default.createElement(o.default.Fragment, null);
            var n = r.default(t, "m-campaign-byline", {
                "m-campaign-byline--teams": a.showTeamsLabel
            });
            return o.default.createElement("div", {
                className: n
            }, o.default.createElement("div", {
                className: "m-campaign-byline-members"
            }, o.default.createElement(l.AvatarStack, {
                className: "m-campaign-byline-avatar-stack",
                items: a.avatarStack
            }), o.default.createElement("div", {
                className: "m-campaign-byline-description"
            }, a.showTeamsLabel && o.default.createElement("div", {
                className: "m-campaign-byline-team-avatar-container"
            }, o.default.createElement(l.TeamAvatar, {
                className: "m-campaign-byline-team-avatar",
                fill: "gold"
            }), i.t("Team fundraiser")), a.byline, a.isCharity && a.charity && o.default.createElement("span", null, o.default.createElement(l.HtmlSpace, {
                type: "non-breaking"
            }), o.default.createElement(l.UIIcon, {
                name: "checkmark-solid",
                className: "color-green"
            }), o.default.createElement(l.HtmlSpace, {
                type: "non-breaking"
            })))))
        }
    },
    Z29w: function(e, t, a) {
        "use strict";
        a.r(t),
        t.default = a.p + "static/media/receipt.dcac50e487a07d7506f8dac37e86e0ab.svg"
    },
    Z2ed: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("TSYQ")),
            o = n(a("q1tI"));
        a("SQlr"),
        t.default = function(e) {
            var t = e.className,
                a = e.children,
                n = r.default(t, "list-unstyled", "m-share-list");
            return o.default.createElement("ul", {
                className: n
            }, a.map((function(e, t) {
                if (e) {
                    var a = r.default("m-share-list-item", {
                        "hide-for-large": e.props.className && e.props.className.includes("hide-for-large")
                    }, {
                        "show-for-large": e.props.className && e.props.className.includes("show-for-large")
                    });
                    return o.default.createElement("li", {
                        className: a,
                        key: t
                    }, e)
                }
                return o.default.createElement(o.default.Fragment, {
                    key: t
                })
            })))
        }
    },
    Z4L6: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    Z86J: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    ZCpI: function(e, t, a) {
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
            r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            o = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && n(t, e, a);
                return r(t, e), t
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = o(a("q1tI")),
            i = a("YgTb"),
            u = a("yf/i"),
            s = a("z+lN");
        t.default = function(e) {
            var t = e.hit;
            return l.default.createElement(l.Fragment, null, i.t("by"), l.default.createElement(u.HtmlSpace, {
                type: "non-breaking"
            }), l.default.createElement(s.AlgoliaCustomHighlight, {
                attribute: "username",
                hit: t
            }), t.bene_name && l.default.createElement(l.Fragment, null, l.default.createElement(u.HtmlSpace, {
                type: "non-breaking"
            }), l.default.createElement("span", null, i.t("for")), l.default.createElement(u.HtmlSpace, {
                type: "non-breaking"
            }), l.default.createElement(s.AlgoliaCustomHighlight, {
                attribute: "bene_name",
                hit: t
            })))
        }
    },
    ZDv6: function(e, t, a) {
        "use strict";
        var n,
            r = this && this.__extends || (n = function(e, t) {
                return (n = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var a in t)
                        t.hasOwnProperty(a) && (e[a] = t[a])
                })(e, t)
            }, function(e, t) {
                function a() {
                    this.constructor = e
                }
                n(e, t),
                e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, new a)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            l = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = l(a("fadw")),
            u = l(a("TSYQ")),
            s = l(a("q1tI")),
            c = a("ChSC"),
            d = a("yf/i"),
            m = a("YgTb");
        a("k08y");
        var f = function(e) {
            function t(t) {
                var a = e.call(this, t) || this;
                return a.handleIntersection = function(e) {
                    e.isIntersecting ? a.setState({
                        modalHeaderIsStuck: !1
                    }) : a.setState({
                        modalHeaderIsStuck: !0
                    })
                }, a.handleClose = a.handleClose.bind(a), a.state = {
                    modalHeaderIsStuck: !1
                }, a
            }
            return r(t, e), t.prototype.componentDidUpdate = function(e) {
                var t = this.props;
                e.isOpen && !t.isOpen && this.handleClose()
            }, t.prototype.handleClose = function() {
                this.props.onClose && this.props.onClose()
            }, t.prototype.render = function() {
                var e = this.props,
                    t = e.children,
                    a = e.className,
                    n = e.willClickOutsideClose,
                    r = e.closeDataElementId,
                    l = e.closeTriggerLabel,
                    f = e.dataViewId,
                    p = e.heading,
                    g = e.subHeading,
                    h = e.isOpen,
                    y = e.onClose,
                    _ = u.default(a, "o-modal-donations", {
                        "o-modal-donations--with-heading": p
                    }),
                    b = u.default("o-modal-donations-header", {
                        "o-modal-donations-header--is-stuck": this.state.modalHeaderIsStuck,
                        "o-modal-donations-header--subheader": g
                    }),
                    v = !!h && s.default.createElement(d.Overlay, {
                        isAnimating: !1,
                        isOpen: h,
                        dataViewId: f
                    }, s.default.createElement("div", {
                        className: _,
                        role: "presentation"
                    }, s.default.createElement(c.FocusOn, o({}, n ? {
                        onClickOutside: this.handleClose
                    } : {}, {
                        onEscapeKey: this.handleClose
                    }), s.default.createElement("div", {
                        className: "o-modal-donations-ie-wrapper"
                    }, s.default.createElement("div", {
                        className: "o-modal-donations-inner"
                    }, s.default.createElement("header", {
                        className: b
                    }, s.default.createElement("div", {
                        className: "o-modal-donations-header-title-row"
                    }, p && s.default.createElement("div", {
                        className: "o-modal-donations-header-title mr2x"
                    }, p), !!y && s.default.createElement(d.Button, {
                        ariaLabel: l || m.t("Close Modal"),
                        className: "o-modal-donations-close-button",
                        dataElementId: r || "btn_close_modal",
                        "data-autofocus": !0,
                        onClick: this.handleClose
                    }, s.default.createElement(d.UIIcon, {
                        name: "close"
                    }))), g && s.default.createElement("div", {
                        className: "o-modal-donations-header-subtitle-row"
                    }, g)), s.default.createElement("div", {
                        className: "o-modal-donations-content"
                    }, s.default.createElement(i.default, {
                        threshold: 1,
                        onChange: this.handleIntersection
                    }, s.default.createElement("div", null)), t))))));
                switch (this.props.as) {
                case "portal":
                    return s.default.createElement(d.Portal, {
                        elementId: "portal"
                    }, v);
                default:
                    return v
                }
            }, t.defaultProps = {
                as: "portal",
                willClickOutsideClose: !0
            }, t
        }(s.default.Component);
        t.default = f
    },
    ZJRK: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.makeGetAction = t.getCode = void 0;
        var n = a("G4qV"),
            r = a("7OEO");
        t.getCode = function(e, t) {
            return t.match.params.code
        },
        t.makeGetAction = function() {
            return n.createSelector([r.makeGetActions(), t.getCode], (function(e, t) {
                return e.find((function(e) {
                    return e.code === t
                }))
            }))
        }
    },
    "ZP+k": function(e, t, a) {
        "use strict";
        a.r(t)
    },
    ZSG1: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("TSYQ")),
            o = n(a("q1tI"));
        a("ONYX");
        var l = a("nkkU"),
            i = a("zIs9");
        t.default = function(e) {
            var t = e.children,
                a = e.className,
                n = e.icon,
                u = r.default(a, "m-purple-icon-with-text", "color-purple");
            return o.default.createElement("div", {
                className: u
            }, o.default.createElement(l.IconAvatar, {
                color: i.GfmColor.PURPLE,
                className: "m-purple-icon-with-text-icon mr2x"
            }, n), t)
        }
    },
    ZW9Z: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("q1tI")),
            o = a("puIA"),
            l = a("yf/i"),
            i = a("YgTb");
        t.default = function(e) {
            var t = e.location,
                a = e.history,
                n = e.match,
                u = e.routes,
                s = n.params.type ? "lb_" + n.params.page + "_" + n.params.type : "lb_" + n.params.page,
                c = "forgot-password" === n.params.page || "facebook-confirm" === n.params.type,
                d = n.params.type ? "/" + n.params.page + "/" + n.params.type : "/" + n.params.page,
                m = t.pathname.replace(d, "/sign-in" + t.search),
                f = r.default.createElement(l.Button, {
                    fill: "solid-sand",
                    size: "small",
                    ariaLabel: "filter",
                    to: m
                }, r.default.createElement(l.UIIcon, {
                    name: "caret-left",
                    textPairing: "prependText"
                }), i.t("Back"));
            return r.default.createElement(l.Modal, {
                dataViewId: s,
                isOpen: !0,
                heading: c ? f : void 0,
                onClose: function() {
                    var e = t.pathname.replace(d, "");
                    a.push(e + t.search)
                }
            }, u && r.default.createElement(o.Routes, {
                as: "switch",
                config: u
            }))
        }
    },
    ZjlT: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    "a/8C": function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = r(a("TSYQ")),
            l = r(a("q1tI")),
            i = a("wE+H"),
            u = a("yf/i"),
            s = a("p1Kg"),
            c = a("YgTb");
        a("aS/Z"),
        t.default = function(e) {
            var t = e.carouselTransform,
                a = e.className,
                r = e.currentIndex,
                d = e.forwardedRef,
                m = e.groupIndex,
                f = e.images,
                p = e.onNextImage,
                g = e.onNextImageSet,
                h = e.onPrevImage,
                y = e.onPrevImageSet,
                _ = e.onShowImage,
                b = f.length,
                v = o.default(a, "m-gallery-footer"),
                E = o.default("m-gallery-carousel", "show-for-large", {
                    hide: b <= 1,
                    "m-gallery-carousel-overflow": b > s.galleryImagesPerSection
                }),
                S = o.default({
                    hide: b <= 1
                });
            return l.default.createElement("div", {
                className: v
            }, l.default.createElement("div", {
                className: "m-gallery-footer-nav hide-for-large"
            }, l.default.createElement(u.IconButton, {
                ariaLabel: c.t("Previous image"),
                className: S,
                dataElementId: "btn_content_media_viewer_scroll",
                iconName: "arrow-left",
                iconType: "ui",
                onClick: h
            }), l.default.createElement("span", {
                className: "m-gallery-footer-index heading-5"
            }, r + 1, "/", b), l.default.createElement(u.IconButton, {
                ariaLabel: c.t("Next image"),
                className: S,
                dataElementId: "btn_content_media_viewer_scroll",
                iconName: "arrow-right",
                iconType: "ui",
                onClick: p
            })), l.default.createElement("div", {
                className: E
            }, l.default.createElement("ol", {
                className: "m-gallery-carousel-slide list-unstyled",
                ref: d,
                style: {
                    transform: "translateX(" + t + "px)"
                }
            }, f.map((function(e, t) {
                var a,
                    d = e.mediaType === i.mediaTypes.VIMEO || e.mediaType === i.mediaTypes.YOUTUBE ? "video" : "photo",
                    f = o.default("m-gallery-carousel-item", {
                        "m-gallery-carousel-item--is-active": r === t
                    });
                return l.default.createElement("li", {
                    className: f,
                    key: t
                }, l.default.createElement(u.BaseButton, {
                    ariaLabel: c.t("Image {{i}} of {{t}}", {
                        i: t + 1,
                        t: b
                    }),
                    className: "m-gallery-carousel-item-button",
                    "data-element-id": "btn_content_media_viewer_scroll",
                    onClick: function() {
                        return _(t)
                    },
                    tabIndex: (a = m + s.galleryImagesPerSection, t >= m && t <= a ? 0 : -1)
                }, l.default.createElement(u.Image, n({
                    layout: u.ScalableImageLayouts["3by2"]
                }, e)), "video" === d && l.default.createElement(u.PlayButtonIcon, {
                    className: "m-gallery-carousel-playbutton "
                })))
            }))), b > s.galleryImagesPerSection && l.default.createElement("div", {
                className: "m-gallery-carousel-arrows show-for-large"
            }, l.default.createElement(u.IconButton, {
                ariaLabel: c.t("Previous 10 images"),
                dataElementId: "btn_content_media_viewer_scroll",
                iconName: "arrow-left",
                iconType: "ui",
                onClick: y
            }), l.default.createElement(u.IconButton, {
                ariaLabel: c.t("Next 10 images"),
                className: "ml2x",
                dataElementId: "btn_content_media_viewer_scroll",
                iconName: "arrow-right",
                iconType: "ui",
                onClick: g
            }))))
        }
    },
    a7zr: function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = r(a("q1tI")),
            l = a("yf/i"),
            i = a("CLE/");
        t.default = function(e) {
            var t,
                a,
                r = e.className,
                u = e.label,
                s = e.id,
                c = e.input,
                d = e.meta,
                m = e.onChange,
                f = e.onError,
                p = e.onExpired,
                g = e.siteKey,
                h = e.size,
                y = e.theme;
            return o.default.createElement(l.FormField, {
                alerts: (t = d && d.error ? Array.isArray(d.error) ? d.error : [d.error] : void 0, a = d && d.warning ? Array.isArray(d.warning) ? d.warning : [d.warning] : void 0, t && t.length > 0 ? t.map((function(e) {
                    return {
                        message: e,
                        status: l.FieldStatus.ERROR
                    }
                })) : a && a.length > 0 ? a.map((function(e) {
                    return {
                        message: e,
                        status: l.FieldStatus.WARNING
                    }
                })) : void 0),
                className: r,
                label: u,
                layout: "stacked",
                id: s
            }, o.default.createElement(i.ReCaptcha, n({
                id: s,
                onError: f,
                onExpired: p,
                siteKey: g,
                size: h,
                theme: y
            }, c && c.onChange ? {
                onChange: c.onChange
            } : {
                onChange: m
            }, c && c.value ? {
                value: c.value
            } : {})))
        }
    },
    aHk3: function(e, t, a) {
        "use strict";
        var n,
            r = this && this.__extends || (n = function(e, t) {
                return (n = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var a in t)
                        t.hasOwnProperty(a) && (e[a] = t[a])
                })(e, t)
            }, function(e, t) {
                function a() {
                    this.constructor = e
                }
                n(e, t),
                e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, new a)
            }),
            o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = o(a("TSYQ")),
            i = o(a("q1tI")),
            u = a("yf/i"),
            s = a("p1Kg"),
            c = a("YgTb"),
            d = function(e) {
                function t(t) {
                    var a = e.call(this, t) || this;
                    return a.state = {
                        isOpen: !1,
                        on: !1
                    }, a.renderAccordions = function() {
                        var e = a.props,
                            t = e.authenticatedPerson;
                        return e.isLoggedIn && t ? a.renderLoggedInNav() : a.renderLoggedOutNav()
                    }, a.renderLoggedOutNav = function() {
                        var e = s.getNavText().navHowItWorksAccordion,
                            t = a.props.susiModalPaths,
                            n = [{
                                buttonContent: e.text,
                                children: i.default.createElement(u.SubnavContent, {
                                    groups: e.groups,
                                    seeAll: e.seeAll
                                }),
                                on: !1
                            }];
                        return i.default.createElement(i.default.Fragment, null, t ? i.default.createElement(u.Button, {
                            as: "route",
                            className: "m-accordion-button color-dark-gray",
                            dataElementId: "btn_nav_sign_in",
                            layout: "full",
                            to: t.signInPath,
                            rel: "nofollow"
                        }, c.t("Sign in")) : i.default.createElement(u.Button, {
                            as: "href",
                            className: "m-accordion-button color-dark-gray",
                            dataElementId: "btn_nav_sign_in",
                            layout: "full",
                            to: "/sign-in"
                        }, c.t("Sign in")), i.default.createElement(u.AccordionGroup, {
                            items: n
                        }), i.default.createElement(u.Button, {
                            as: "href",
                            className: "mt2x",
                            dataElementId: "btn_nav_sign_up",
                            fill: "solid-green",
                            layout: "max-full",
                            size: "large",
                            to: "/sign-up"
                        }, c.t("Start a GoFundMe")))
                    }, a.renderLoggedInNav = function() {
                        var e = a.props.hasCampaign;
                        return i.default.createElement(i.default.Fragment, null, i.default.createElement(u.Button, {
                            as: "href",
                            className: "m-accordion-button color-dark-gray",
                            dataElementId: "btn_nav_sign_out",
                            layout: "full",
                            to: "/sign-out",
                            rel: "nofollow"
                        }, c.t("Sign out")), i.default.createElement(u.Button, {
                            as: "href",
                            className: "m-accordion-button color-dark-gray",
                            dataElementId: "btn_navmenu_my-donations",
                            layout: "full",
                            to: "/donations",
                            rel: "nofollow"
                        }, c.t("Donations you've made")), i.default.createElement(u.Button, {
                            as: "href",
                            className: "m-accordion-button color-dark-gray",
                            dataElementId: "btn_nav_settings",
                            layout: "full",
                            to: "/settings",
                            rel: "nofollow"
                        }, c.t("Account settings")), i.default.createElement(u.Button, {
                            as: "href",
                            className: "m-accordion-button color-dark-gray",
                            dataElementId: "btn_nav_support_gofundme_com",
                            layout: "full",
                            to: "https://support.gofundme.com/",
                            rel: "nofollow"
                        }, c.t("Help center")), e && i.default.createElement(u.Button, {
                            as: "href",
                            className: "m-accordion-button color-dark-gray",
                            dataElementId: "btn_nav_campaigns",
                            layout: "full",
                            to: "/campaigns",
                            rel: "nofollow"
                        }, c.t("Your fundraisers")), i.default.createElement(u.Button, {
                            as: "href",
                            className: "mt2x",
                            dataElementId: "btn_nav_sign_up",
                            fill: "solid-green",
                            layout: "max-full",
                            size: "large",
                            to: "/sign-up"
                        }, c.t("Start a GoFundMe")))
                    }, a.handleOpenDrawer = a.handleOpenDrawer.bind(a), a.handleCloseDrawer = a.handleCloseDrawer.bind(a), a.handleTransitionEnd = a.handleTransitionEnd.bind(a), a
                }
                return r(t, e), t.prototype.handleOpenDrawer = function() {
                    var e = this;
                    this.setState({
                        on: !0
                    }),
                    setTimeout((function() {
                        e.setState({
                            isOpen: !0
                        })
                    }), 10)
                }, t.prototype.handleCloseDrawer = function() {
                    this.setState({
                        isOpen: !1
                    })
                }, t.prototype.handleTransitionEnd = function() {
                    this.state.isOpen || this.setState({
                        on: !1
                    })
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.props.className,
                        a = this.state.isOpen,
                        n = l.default(t, "o-mobile-nav");
                    return i.default.createElement(u.Toggle, {
                        on: this.state.on
                    }, (function(t) {
                        var r = t.on;
                        return i.default.createElement(i.default.Fragment, null, i.default.createElement(u.Button, {
                            ariaExpanded: a,
                            className: "test-class",
                            ariaLabel: c.t("Open navigation menu"),
                            onClick: e.handleOpenDrawer
                        }, i.default.createElement(u.UIIcon, {
                            name: "menu",
                            size: "large"
                        })), r && i.default.createElement(u.Drawer, {
                            className: n,
                            isOpen: a,
                            height: "full",
                            onClose: e.handleCloseDrawer,
                            onTransitionEnd: e.handleTransitionEnd,
                            closeTriggerLabel: c.t("Close navigation menu")
                        }, e.renderAccordions()))
                    }))
                }, t
            }(i.default.Component);
        t.default = d
    },
    aIUD: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    aK6j: function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = a("alXw"),
            l = r(a("oxJe")),
            i = a("omnk"),
            u = r(a("4M3g")),
            s = r(a("EcZt")),
            c = a("Cge7"),
            d = a("ocVw"),
            m = a("iahY"),
            f = a("SKg/"),
            p = a("C0Xu"),
            g = r(a("PTAX")),
            h = a("QtxA"),
            y = a("6M7q"),
            _ = r(a("cr+I")),
            b = a("/MKj"),
            v = r(a("i9fw")),
            E = a("Y4ob"),
            S = a("ZZcF"),
            C = a("+Ded"),
            O = b.connect((function() {
                var e = S.makeGetAlgoliaIndices(),
                    t = f.makeIsCampaignInitialized(),
                    a = f.makeIsCampaignLoading(),
                    n = E.makeGetCampaignHeadData(),
                    r = c.makeGetCampaignDescription(),
                    l = c.makeGetCampaignTitle(),
                    u = c.makeGetCampaignLastDonation(),
                    s = d.makeGetCopyLinkTagShortUrl(),
                    p = E.makeGetUpdateList(),
                    g = o.makeGetDonationList(),
                    b = f.makeDonationsHasNext(),
                    v = E.makeGetCampaignByline(),
                    C = E.makeGetDonationPreviewList(),
                    O = c.makeGetCampaignStatus(),
                    P = E.makeGetCampaignSidebarProps(),
                    I = E.makeGetCommentList(),
                    k = f.makeCommentsHasNext(),
                    N = E.makeGetSameCurrencySymbolCode(),
                    w = E.makeGetGuidanceDrawerDisplay(),
                    T = m.makeGetCurrentUserDonation(),
                    M = c.makeGetIsTeamEnabledCampaign(),
                    A = E.makeGetShowActiveContent(),
                    j = c.makeGetCampaignCommentCount(),
                    x = f.makeUpdatesHasNext(),
                    D = E.makeGetCampaignPagePhotosMeta(),
                    G = c.makeGetCampaignCategoryId(),
                    F = c.makeGetCampaignPartner(),
                    R = c.makeGetCampaignCharity(),
                    U = c.makeGetCampaignUrl(),
                    L = c.makeGetIdentity(),
                    B = E.makeGetIsAnonymousDonationType(),
                    H = c.makeGetCampaignId(),
                    z = c.makeGetCampaignMainPhoto(),
                    Y = E.makeGetCampaignMainPhotoFormatted(),
                    K = i.makeGetFacebookId(),
                    q = E.makeGetCampaignMediaType(),
                    V = E.makeGetCampaignMediaId(),
                    W = c.makeGetMemberId(),
                    Z = c.makeGetOrganizerLocation(),
                    Q = E.makeGetCampaignMembersHeaderProps(),
                    X = E.makeGetCampaignMembersProps(),
                    J = m.makeGetSignedDonationId(),
                    $ = c.makeHasCommentsEnabled(),
                    ee = E.makeGetAnalyticsEventData(),
                    te = E.makeGetCampaignStateLabel(),
                    ae = f.makeGetAreFeedCountsLoading(),
                    ne = c.makeGetInDegradedMode(),
                    re = f.makeIsCommentsInitialized(),
                    oe = S.makeGetVisitorGeoRecord(),
                    le = c.makeGetTopSupporters(),
                    ie = S.makeGetDomain();
                return function(o, i) {
                    var c = h.getLastDonationId(),
                        d = h.getLastCheckoutId(),
                        m = u(o),
                        f = y.getLastDonorDetails(i.match.params.campaignUrl),
                        E = {
                            fullName: "",
                            isAnonymous: !0,
                            profileImage: ""
                        };
                    return !m || m.donation_id !== c && m.checkout_id !== d ? f && f.checkout_id === d && (E.isAnonymous = f.is_anonymous, E.profileImage = f.profile_image || "") : (E.isAnonymous = m.is_anonymous, E.profileImage = m.profile_url), {
                        algoliaIndices: e(o),
                        analyticsEventData: ee(o),
                        areFeedCountsLoading: ae(o),
                        campaignMembersHeaderProps: Q(o),
                        campaignMembersProps: X(o),
                        campaignSideBarProps: P(o),
                        campaignStateLabel: te(o),
                        campaignStatus: O(o),
                        categoryId: G(o),
                        charity: R(o),
                        comments: I(o),
                        commentsHasNext: k(o),
                        copyLinkShortUrl: s(o),
                        description: r(o),
                        dispGuidanceDrawer: w(o),
                        domain: ie(o),
                        donations: g(o),
                        donationsHasNext: b(o),
                        donationsPreview: C(o),
                        facebookId: K(o),
                        fundId: H(o),
                        fundUrl: U(o),
                        visitorGeoRecord: oe(o),
                        hasCommentsEnabled: $(o),
                        head: n(o),
                        identity: L(o),
                        inDegradedMode: ne(o),
                        isAnonymousDonation: B(o),
                        isCampaignInitialized: t(o),
                        isCampaignLoading: a(o),
                        isCommentsInitialized: re(o),
                        currentUserDonation: T(o),
                        isTeamEnabledCampaign: M(o),
                        lastDonorDetails: E,
                        mainPhoto: z(o),
                        mainPhotoFormatted: Y(o),
                        mediaId: V(o),
                        mediaType: q(o),
                        memberId: W(o),
                        meta: v(o),
                        organizerLocation: Z(o),
                        partner: F(o),
                        photosMeta: D(o),
                        queryParams: _.default.parse(i.location.search),
                        sameCurrencyCode: N(o),
                        showActiveContent: A(o),
                        signedDonationId: J(o),
                        title: l(o),
                        totalComments: j(o),
                        topSupporters: le(o),
                        updates: p(o),
                        updatesHasNext: x(o)
                    }
                }
            }), (function(e, t) {
                return {
                    addFacebookProfilePhoto: function(a) {
                        e({
                            payload: {
                                donationIdEncrypted: a,
                                fundUrl: t.match.params.campaignUrl
                            },
                            type: l.default.FB_AUTHENTICATE_AND_UPDATE_DONATION_IN_PROGRESS
                        })
                    },
                    addFacebookProfilePhotoToPerson: function() {
                        e({
                            type: l.default.FB_AUTHENTICATE_AND_UPDATE_PERSON_IN_PROGRESS
                        })
                    },
                    getCampaignliteRoles: function(a) {
                        e({
                            payload: {
                                campaignUrl: t.match.params.campaignUrl,
                                role: a
                            },
                            type: u.default.GET_FEED_CAMPAIGN_ROLES_IN_PROGRESS
                        })
                    },
                    getComments: function(a, n) {
                        void 0 === a && (a = 0),
                        e({
                            payload: {
                                campaignUrl: t.match.params.campaignUrl,
                                limit: n,
                                offset: a
                            },
                            type: u.default.GET_FEED_COMMENTS_IN_PROGRESS
                        })
                    },
                    getCounts: function() {
                        e({
                            payload: {
                                campaignUrl: t.match.params.campaignUrl
                            },
                            type: u.default.GET_FEED_COUNTS_IN_PROGRESS
                        })
                    },
                    getDonations: function(a, n) {
                        void 0 === a && (a = 0),
                        e({
                            payload: {
                                campaignUrl: t.match.params.campaignUrl,
                                limit: n,
                                offset: a
                            },
                            type: u.default.GET_FEED_DONATIONS_IN_PROGRESS
                        })
                    },
                    getDonationsWithLastDonation: function() {
                        e({
                            payload: t.match.params.campaignUrl,
                            type: u.default.GET_FEED_DONATIONS_WITH_LAST_DONATION_IN_PROGRESS
                        })
                    },
                    getPhotos: function(a) {
                        e({
                            payload: n({
                                campaignUrl: t.match.params.campaignUrl
                            }, a),
                            type: u.default.GET_FEED_PHOTOS_IN_PROGRESS
                        })
                    },
                    getReceiptFromEncryptedDonationID: function(t) {
                        e({
                            payload: t,
                            type: s.default.GET_RECEIPT_FROM_ENCRYPTED_DONATION_ID
                        })
                    },
                    getReceiptFromLocalStorage: function(t) {
                        e({
                            payload: t,
                            type: s.default.GET_RECEIPT_FROM_LOCAL_STORAGE
                        })
                    },
                    getUpdates: function(a, n) {
                        void 0 === a && (a = 0),
                        e({
                            payload: {
                                campaignUrl: t.match.params.campaignUrl,
                                limit: n,
                                offset: a
                            },
                            type: u.default.GET_FEED_UPDATES_IN_PROGRESS
                        })
                    },
                    getVelocityRecentDonations: function() {
                        e({
                            payload: {
                                campaignUrl: t.match.params.campaignUrl,
                                type: p.VelocityType.RECENT_DONATIONS
                            },
                            type: u.default.GET_FEED_VELOCITY_IN_PROGRESS
                        })
                    },
                    setVimeoImageUrl: function(t) {
                        e({
                            payload: {
                                mediaId: t
                            },
                            type: g.default.GET_VIMEO_THUMBNAIL_IN_PROGRESS
                        })
                    },
                    getJoinTeam: function(a) {
                        return void 0 === a && (a = !1), function() {
                            var n,
                                r = null === (n = _.default.parse(t.location.search)) || void 0 === n ? void 0 : n.teamInvite,
                                o = t.match.params.campaignUrl;
                            r && e({
                                onSuccess: function() {
                                    C.trackEvents.push({
                                        type: "accepted_team_invite"
                                    })
                                },
                                payload: {
                                    campaign: o,
                                    invitationHash: r
                                },
                                type: a ? s.default.ACCEPT_TEAM_INVITATION : s.default.ACCEPT_TEAM_INVITATION_AS_PERSON
                            })
                        }
                    }
                }
            }))(v.default);
        t.default = O
    },
    aQJL: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("q1tI")),
            o = n(a("TSYQ")),
            l = a("yf/i");
        a("vjG4");
        var i = a("YgTb");
        t.default = function(e) {
            var t = e.className,
                a = e.password,
                n = o.default(t, "m-password-guidance text-left"),
                u = a.length >= 12,
                s = /[A-Z]/.test(a),
                c = /[a-z]/.test(a),
                d = /\d/.test(a),
                m = /[^a-zA-Z0-9\s]/.test(a),
                f = r.default.createElement(l.UIIcon, {
                    name: "check",
                    className: "color-green m-password-guidance-check"
                }),
                p = r.default.createElement("div", {
                    className: "m-password-guidance-bullet"
                });
            return r.default.createElement(l.Well, {
                className: n
            }, i.t("Your password must have:"), r.default.createElement("div", {
                className: o.default("m-password-guidance-rule", {
                    "m-password-guidance-satisfied": u
                })
            }, u ? f : p, i.t("At least 12 characters")), r.default.createElement("div", {
                className: o.default("m-password-guidance-rule", {
                    "m-password-guidance-satisfied": s
                })
            }, s ? f : p, i.t("1 uppercase letter")), r.default.createElement("div", {
                className: o.default("m-password-guidance-rule", {
                    "m-password-guidance-satisfied": c
                })
            }, c ? f : p, i.t("1 lowercase letter")), r.default.createElement("div", {
                className: o.default("m-password-guidance-rule", {
                    "m-password-guidance-satisfied": d
                })
            }, d ? f : p, i.t("1 number")), r.default.createElement("div", {
                className: o.default("m-password-guidance-rule", {
                    "m-password-guidance-satisfied": m
                })
            }, m ? f : p, i.t("1 symbol")))
        }
    },
    aRWs: function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            r = this && this.__createBinding || (Object.create ? function(e, t, a, n) {
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
            o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            l = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && r(t, e, a);
                return o(t, e), t
            },
            i = this && this.__rest || function(e, t) {
                var a = {};
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var r = 0;
                    for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
                        t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (a[n[r]] = e[n[r]])
                }
                return a
            },
            u = this && this.__read || function(e, t) {
                var a = "function" == typeof Symbol && e[Symbol.iterator];
                if (!a)
                    return e;
                var n,
                    r,
                    o = a.call(e),
                    l = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(n = o.next()).done;)
                        l.push(n.value)
                } catch (i) {
                    r = {
                        error: i
                    }
                } finally {
                    try {
                        n && !n.done && (a = o.return) && a.call(o)
                    } finally {
                        if (r)
                            throw r.error
                    }
                }
                return l
            },
            s = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = s(a("TSYQ")),
            d = s(a("cr+I")),
            m = l(a("q1tI")),
            f = a("puIA"),
            p = a("yf/i"),
            g = a("+Ded"),
            h = a("z+lN"),
            y = a("dNNZ"),
            _ = a("zIs9"),
            b = a("QtxA");
        a("Ecrp");
        t.default = function(e) {
            var t = e.alertContent,
                a = e.algoliaIndices,
                r = e.authenticatedPerson,
                o = e.domain,
                l = e.fundUrl,
                s = e.geoRecord,
                v = e.getIdentity,
                E = e.hasCampaign,
                S = e.history,
                C = e.infoContent,
                O = e.isCampaignActive,
                P = e.isLoggedIn,
                I = e.isStatsUser,
                k = e.locale,
                N = e.onCloseAlert,
                w = e.onLanguageChange,
                T = e.queryParams,
                M = e.routes,
                A = e.showActiveContent,
                j = e.showCookieBanner,
                x = e.susiModalPaths,
                D = e.statsUrl;
            m.useEffect((function() {
                v && v(),
                j && g.trackEvents.push({
                    type: "mp_page_view",
                    viewId: "gdpr_banner"
                })
            }), []),
            m.useEffect((function() {
                I && L()
            }), [I]);
            var G = u(m.useState(j), 2),
                F = G[0],
                R = G[1],
                U = "https://www." + o + "/f/" + l + "/donate" + ((null == T ? void 0 : T.member) ? "?member=" + T.member : ""),
                L = function() {
                    var e = d.default.parse(location.search);
                    delete e.utm_source,
                    delete e.utm_medium,
                    delete e.utm_campaign,
                    delete e.utm_term,
                    delete e.utm_content,
                    S.replace(location.pathname + "?" + d.default.stringify(e))
                },
                B = function() {
                    if (C && C.message) {
                        var e = C.message,
                            t = i(C, ["message"]);
                        return m.default.createElement(p.AlertBanner, n({}, t, {
                            onClose: function() {
                                N(_.AlertType.INFO)
                            },
                            type: _.AlertType.INFO
                        }), e)
                    }
                    return !1
                }(),
                H = function() {
                    if (t && t.message) {
                        var e = t.message,
                            a = i(t, ["message"]);
                        return m.default.createElement(p.AlertBanner, n({}, a, {
                            onClose: function() {
                                N(a.type)
                            }
                        }), e)
                    }
                    return !1
                }(),
                z = u(m.useState(!0), 2),
                Y = z[0],
                K = z[1],
                q = u(m.useState(!1), 2),
                V = q[0],
                W = q[1],
                Z = c.default("t-campaign-page-template", {
                    "t-campaign-page-template--stats": I
                }, {
                    "t-campaign-page-template--stats-hide-widget": I && !Y
                }),
                Q = c.default("t-campaign-page-stats-widget", {
                    "t-campaign-page-stats-widget-hide-widget": !Y
                }, "show-for-large");
            return m.default.createElement(m.default.Fragment, null, m.default.createElement("div", {
                className: Z
            }, m.default.createElement("div", {
                className: "t-campaign-page-template-top",
                "data-view-id": "pg_donate_index"
            }, !!j && m.default.createElement(h.GDPRAlertBanner, {
                domain: o,
                isOpen: F,
                onClose: function() {
                    return R(!1)
                },
                onButtonClick: function() {
                    g.trackEvents.push({
                        elementId: "gdpr_ok_cookies",
                        type: "click",
                        viewId: "gdpr_banner"
                    }),
                    b.setGDPRPref({
                        functional: !0,
                        marketing: !0
                    })
                },
                onManageCookies: function() {
                    g.trackEvents.push({
                        type: "mp_page_view",
                        viewId: "gdpr_modal"
                    }),
                    g.trackEvents.push({
                        elementId: "gdpr_manage_cookies",
                        type: "click",
                        viewId: "gdpr_banner"
                    }),
                    W(!0)
                }
            }), !!V && m.default.createElement(h.GDPRCookieModal, {
                isOpen: V,
                onClose: function() {
                    return W(!1)
                },
                closeBanner: function() {
                    return R(!1)
                }
            }), m.default.createElement(p.GlobalHeader, null, m.default.createElement(y.NavCampaignPage, {
                algoliaIndices: a,
                authenticatedPerson: r,
                campaignUrl: l,
                dataViewId: "pg_donate_index",
                donateUrl: U,
                hasCampaign: E,
                isCampaignActive: O,
                isLoggedIn: P,
                locale: k,
                queryParam: S.location.search,
                previewMode: T && "1" === T.preview,
                showActiveContent: A,
                susiModalPaths: x
            }))), m.default.createElement("div", {
                className: "t-campaign-page-template-alert",
                "data-view-id": "pg_donate_index"
            }, B, H, m.default.createElement("div", {
                id: "alert-portal"
            })), m.default.createElement("main", {
                className: "t-campaign-page-template-content global-wrapper"
            }, M && m.default.createElement(f.Routes, {
                as: "switch",
                config: M
            })), m.default.createElement(p.GlobalFooter, {
                countryCode: s.countryCode,
                region: s.region,
                locale: k,
                onLanguageChange: w
            })), I && m.default.createElement("div", {
                className: Q
            }, m.default.createElement(p.Button, {
                onClick: function() {
                    K(!Y)
                }
            }, Y ? "Hide Widget" : "Show Widget"), Y && m.default.createElement(h.StatsWidgetIframe, {
                statsUrl: D
            })))
        }
    },
    "aS/Z": function(e, t, a) {
        "use strict";
        a.r(t)
    },
    aaHp: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.unstyleCompetitorLinks = void 0,
        t.unstyleCompetitorLinks = function(e) {
            var t = document.querySelectorAll("[data-competitor=competitor-link]");
            Array.from(t).forEach((function(t) {
                t.classList.contains("a-link--unstyled") || (t.classList.add("a-link--unstyled"), t.addEventListener("click", e))
            }))
        }
    },
    acCn: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("N4mY");
        Object.defineProperty(t, "CACharityModal", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    alXw: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.makeGetDonationList = t.makeGetTotalDonationsFormatted = void 0;
        var n = a("G4qV"),
            r = a("Y4ob"),
            o = a("Cge7"),
            l = a("ZZcF"),
            i = a("mZEw");
        t.makeGetTotalDonationsFormatted = function() {
            return n.createSelector([r.makeGetCampaignStatsFormatted()], (function(e) {
                return e.totalDonationsStr
            }))
        };
        t.makeGetDonationList = function() {
            return n.createSelector([o.makeGetCampaignDonations(), r.makeGetLocaleNumberFormatter(), l.makeGetLocale()], (function(e, t, a) {
                return i.formatDonationsList(e, t, a)
            }))
        }
    },
    "b+OH": function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            r = this && this.__createBinding || (Object.create ? function(e, t, a, n) {
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
            o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            l = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && r(t, e, a);
                return o(t, e), t
            },
            i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = a("yf/i"),
            s = a("Xv9k"),
            c = i(a("TSYQ")),
            d = l(a("q1tI")),
            m = i(a("pmIF"));
        a("djz1"),
        t.default = function(e) {
            var t = e.className,
                a = e.isLoading,
                r = e.onClick,
                o = e.target,
                l = e.url,
                i = c.default(t, "m-search-result-card-base mr mb"),
                f = o ? u.Link : d.Fragment,
                p = o ? {
                    to: o,
                    as: "href",
                    unstyled: !0,
                    dataElementId: "btn_campaign",
                    onClick: r
                } : {},
                g = a ? d.default.createElement(s.SkeletonGradient, {
                    className: "m-search-result-card-image-wrapper"
                }) : d.default.createElement("div", {
                    className: "m-search-result-card-image-wrapper",
                    style: {
                        backgroundImage: "url(" + (l || m.default) + ")"
                    }
                });
            return d.default.createElement("div", {
                className: i
            }, d.default.createElement(f, n({}, p), d.default.createElement("div", {
                className: "m-search-result-card-content-wrapper"
            }, g, d.default.createElement("div", {
                className: "m-search-result-card-fundraiser-details"
            }, e.details))))
        }
    },
    b2Xb: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("x7ym");
        Object.defineProperty(t, "ContactOrganizerForm", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        });
        var r = a("Cg9H");
        Object.defineProperty(t, "ContactOrganizerFormConnected", {
            enumerable: !0,
            get: function() {
                return r.default
            }
        })
    },
    bDJ8: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    bMYr: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    bfeT: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("sDHT");
        Object.defineProperty(t, "SignInInitialPartial", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        });
        var r = a("lRA5");
        Object.defineProperty(t, "SignInInitialPartialConnected", {
            enumerable: !0,
            get: function() {
                return r.default
            }
        })
    },
    bj6y: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("noDg");
        Object.defineProperty(t, "ContactFormBenePartialConnected", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    bqnV: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    c5RM: function(e, t, a) {
        "use strict";
        var n,
            r = this && this.__extends || (n = function(e, t) {
                return (n = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var a in t)
                        t.hasOwnProperty(a) && (e[a] = t[a])
                })(e, t)
            }, function(e, t) {
                function a() {
                    this.constructor = e
                }
                n(e, t),
                e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, new a)
            }),
            o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = o(a("TSYQ")),
            i = o(a("q1tI")),
            u = a("yf/i"),
            s = a("YgTb");
        a("wWQP");
        var c = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e), t.prototype.render = function() {
                var e = this.props,
                    t = e.author,
                    a = e.className,
                    n = e.timeAgo,
                    r = e.isEdited,
                    o = l.default(a, "m-comment-footer"),
                    c = [];
                return t.currentUser && (c.push(i.default.createElement(u.TextButton, {
                    className: "text-small"
                }, i.default.createElement(u.UIIcon, {
                    name: "edit",
                    textPairing: "prependText",
                    size: "large"
                }), i.default.createElement(u.HtmlSpace, {
                    type: "breaking"
                }), s.t("Edit"))), c.push(i.default.createElement(u.TextButton, {
                    className: "text-small"
                }, i.default.createElement(u.UIIcon, {
                    name: "trashcan",
                    textPairing: "prependText",
                    size: "large"
                }), i.default.createElement(u.HtmlSpace, {
                    type: "breaking"
                }), s.t("Delete")))), c.push(i.default.createElement("span", {
                    className: "color-gray"
                }, n)), r && c.push(i.default.createElement("span", {
                    className: "color-gray"
                }, s.t("Edited"))), i.default.createElement("footer", {
                    className: o
                }, i.default.createElement(u.MetaList, {
                    items: c,
                    style: "bullet"
                }))
            }, t
        }(i.default.Component);
        t.default = c
    },
    "cOk+": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("jSvq");
        Object.defineProperty(t, "GalleryContent", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        }),
        Object.defineProperty(t, "GalleryItemProps", {
            enumerable: !0,
            get: function() {
                return n.GalleryItemProps
            }
        })
    },
    cS5l: function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
            return (n = Object.assign || function(e) {
                for (var t, a = 1, n = arguments.length; a < n; a++)
                    for (var r in t = arguments[a])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }).apply(this, arguments)
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.makeShouldFetchMore = t.makeGetImageGalleryCountByContent = t.makeGetImageGalleryByContent = void 0;
        var r = a("G4qV"),
            o = a("wE+H"),
            l = a("0Y3C"),
            i = a("Y4ob"),
            u = a("p1Kg"),
            s = a("YgTb"),
            c = a("Cge7"),
            d = a("SKg/"),
            m = a("ZZcF"),
            f = a("K0mF"),
            p = a("X4cv"),
            g = function(e, t) {
                return r.createSelector([r.createSelector([c.makeGetOrderedCampaignPhotos(), c.makeGetCampaign(), m.makeGetLocale()], (function(e, t, a) {
                    return e.map((function(e, r) {
                        var i = {
                            author: t.user_first_name + " " + t.user_last_name,
                            author_type: o.UserRoles.ORGANIZER,
                            text: "",
                            user_profile_url: t.user_profile_url
                        };
                        return e.updates && e.updates.length >= 1 && (i = n(n({}, i), e.updates[0])), {
                            author: {
                                fullName: i.author,
                                initials: l.getInitials(i.author),
                                profileImage: i.user_profile_url,
                                role: u.getUserRoleStrings()[i.author_type]
                            },
                            index: r,
                            media: {
                                image: p.Photo.toImage(e, a),
                                mediaId: e.media_id || e.mediaid || "",
                                mediaType: e.media_type
                            },
                            text: i.text,
                            timeCreated: f.timeAgo(e.created_at, a)
                        }
                    }))
                })), r.createSelector([c.makeGetCampaignComments(), m.makeGetLocale(), i.makeGetLocaleNumberFormatter()], (function(e, t, a) {
                    var n = {};
                    return e.map((function(e) {
                        n[e.ugc_id] = [],
                        e.photos && e.photos.map((function(r, o) {
                            var i;
                            e.donation && (i = s.t("Donated {{amount}}", {
                                amount: a.formatAsCurrency(e.donation.amount)
                            })),
                            n[e.ugc_id].push({
                                author: {
                                    fullName: e.name,
                                    initials: l.getInitials(e.name),
                                    profileImage: e.profile_url,
                                    role: i
                                },
                                index: o,
                                media: {
                                    image: p.Photo.toImage(r, t)
                                },
                                text: e.comment.comment,
                                timeCreated: f.timeAgo(r.created_at, t)
                            })
                        }))
                    })), n
                })), r.createSelector([c.makeGetCommunityPhotos(), i.makeGetLocaleNumberFormatter(), m.makeGetLocale()], (function(e, t, a) {
                    return e.map((function(e, n) {
                        var r,
                            o,
                            i,
                            u;
                        return e.comments && e.comments[0] && (r = e.comments[0].author, o = e.comments[0].profile_url, i = e.comments[0].text), e.donations && e.donations[0] && (r = e.donations[0].author, u = s.t("Donated {{amount}}", {
                            amount: t.formatAsCurrency(e.donations[0].amount)
                        })), {
                            author: {
                                fullName: r,
                                initials: r ? l.getInitials(r) : "",
                                profileImage: o,
                                role: u
                            },
                            index: n,
                            media: {
                                image: p.Photo.toImage(e, a),
                                mediaId: e.media_id || e.mediaid || "",
                                mediaType: e.media_type
                            },
                            text: i,
                            timeCreated: f.timeAgo(e.created_at, a)
                        }
                    }))
                })), r.createSelector([c.makeGetCampaignUpdates(), m.makeGetLocale()], (function(e, t) {
                    var a = {};
                    return e.map((function(e) {
                        a[e.id] = [],
                        e.photos && e.photos.map((function(n, r) {
                            a[e.id].push({
                                author: {
                                    fullName: e.author,
                                    initials: l.getInitials(e.author),
                                    profileImage: e.user_profile_url,
                                    role: u.getUserRoleStrings()[e.author_type]
                                },
                                index: r,
                                media: {
                                    image: p.Photo.toImage(n, t),
                                    mediaId: n.mediaid,
                                    mediaType: n.media_type
                                },
                                text: e.text,
                                timeCreated: f.timeAgo(n.created_at, t)
                            })
                        }))
                    })), a
                }))], (function(a, n, r, o) {
                    switch (e) {
                    case u.GalleryType.campaign:
                        return a;
                    case u.GalleryType.comment:
                        return t && n[t] ? n[t] : [];
                    case u.GalleryType.community:
                        return r;
                    case u.GalleryType.update:
                        return t && o[t] ? o[t] : []
                    }
                    return []
                }))
            };
        t.makeGetImageGalleryByContent = g;
        t.makeGetImageGalleryCountByContent = function(e, t) {
            return r.createSelector([g(e, t), c.makeGetCampaignCoPhotosCount(), c.makeGetCampaignCommunityPhotosCount()], (function(t, a, n) {
                switch (e) {
                case u.GalleryType.campaign:
                    return a || t.length;
                case u.GalleryType.community:
                    return n || t.length;
                case u.GalleryType.comment:
                case u.GalleryType.update:
                    return t.length
                }
                return 0
            }))
        };
        t.makeShouldFetchMore = function(e) {
            return r.createSelector([d.makeGetPhotosMeta()], (function(t) {
                switch (e) {
                case u.GalleryType.comment:
                case u.GalleryType.community:
                    return !t.community.initialized || t.community.has_next;
                case u.GalleryType.campaign:
                case u.GalleryType.update:
                    return !t.update.initialized || t.update.has_next
                }
                return !1
            }))
        }
    },
    cT9i: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    crPA: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    crVt: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("5h8D");
        Object.defineProperty(t, "SRPHeader", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        });
        var r = a("gR13");
        Object.defineProperty(t, "SRPHeaderConnected", {
            enumerable: !0,
            get: function() {
                return r.default
            }
        })
    },
    cxJT: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    dNNZ: function(e, t, a) {
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
            r = this && this.__exportStar || function(e, t) {
                for (var a in e)
                    "default" === a || t.hasOwnProperty(a) || n(t, e, a)
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        r(a("PdR6"), t),
        r(a("acCn"), t),
        r(a("JY/j"), t),
        r(a("TI9J"), t),
        r(a("9QiV"), t),
        r(a("fCpC"), t),
        r(a("Euxe"), t),
        r(a("k5Qd"), t),
        r(a("UEq0"), t),
        r(a("uCTY"), t),
        r(a("HER9"), t),
        r(a("LqlJ"), t),
        r(a("zYxt"), t),
        r(a("lhM+"), t),
        r(a("3fwG"), t),
        r(a("gesM"), t),
        r(a("WBMr"), t),
        r(a("WtCj"), t),
        r(a("AMkt"), t),
        r(a("2hsv"), t),
        r(a("UZcg"), t),
        r(a("l2bq"), t),
        r(a("TDkM"), t),
        r(a("9+6X"), t),
        r(a("Y4O4"), t),
        r(a("Hd3i"), t),
        r(a("OX0h"), t),
        r(a("7+VQ"), t),
        r(a("+ILQ"), t),
        r(a("Y8nK"), t),
        r(a("TjdY"), t),
        r(a("9r2/"), t),
        r(a("epk1"), t),
        r(a("yly3"), t),
        r(a("eNF7"), t),
        r(a("Ct87"), t),
        r(a("RFXT"), t),
        r(a("OwBj"), t),
        r(a("AMK0"), t),
        r(a("RqVz"), t),
        r(a("QtJE"), t),
        r(a("4Fs/"), t),
        r(a("xnkE"), t),
        r(a("mUdk"), t)
    },
    dRPz: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("TSYQ")),
            o = n(a("q1tI")),
            l = a("YgTb"),
            i = n(a("I4gx"));
        function u(e) {
            var t = e.className,
                a = r.default(t, "m-sheet-samp");
            return o.default.createElement("div", {
                className: a
            }, o.default.createElement("div", {
                className: "m-sheet-samp-image mb"
            }, o.default.createElement("img", {
                alt: "",
                src: i.default
            })), o.default.createElement("h4", {
                className: "m-sheet-samp-title"
            }, l.t("Share as much as possible")), l.t("Try using all sharing options. Telling people about your fundraiser is the only way to start raising donations."))
        }
        a("ZjlT"),
        u.defaultProps = {
            backBtnUrl: "/"
        },
        t.default = u
    },
    dS1b: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("G9dl");
        Object.defineProperty(t, "ContactFormDonorPartialConnected", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    daaZ: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("Z1x4");
        Object.defineProperty(t, "CampaignByline", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    dj00: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("TSYQ")),
            o = n(a("q1tI")),
            l = a("yf/i"),
            i = a("x060"),
            u = a("8QVh"),
            s = a("o6hd"),
            c = a("YgTb");
        function d(e) {
            var t = e.arrowIcon,
                a = e.dataElementId,
                n = e.className,
                d = e.from,
                m = e.url,
                f = a || "btn_share_fbmessenger",
                p = u.getShareLink(m, s.UtmKeys.FACEBOOK_MESSENGER_SHARESHEET, d),
                g = !!t && o.default.createElement(l.UIIcon, {
                    name: "caret-right",
                    className: "share-button-arrow hide-for-large"
                }),
                h = o.default.createElement(l.Button, {
                    dataElementId: f,
                    className: r.default(n, "show-for-large"),
                    onClick: function(e) {
                        e.preventDefault(),
                        i.FacebookSDK.shareOnMessengerWeb(p)
                    }
                }, o.default.createElement(l.LogoIcon, {
                    name: "Messenger"
                }), c.t("Messenger")),
                y = o.default.createElement(l.Button, {
                    as: "href",
                    dataElementId: f,
                    className: r.default(n, "hide-for-large"),
                    to: "fb-messenger://share?link=" + encodeURIComponent(p) + "&app_id=" + encodeURIComponent(i.FacebookSDK.Facebook.appId)
                }, o.default.createElement(l.LogoIcon, {
                    name: "Messenger",
                    className: "share-button-icon"
                }), c.t("Messenger"), g);
            return o.default.createElement(o.default.Fragment, null, h, y)
        }
        d.defaultProps = {
            as: "href",
            layout: "inline"
        },
        t.default = d
    },
    djz1: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    e7Sj: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("zYpg");
        Object.defineProperty(t, "SearchResultsPage", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        });
        var r = a("nr2E");
        Object.defineProperty(t, "SearchResultsPageConnected", {
            enumerable: !0,
            get: function() {
                return r.default
            }
        })
    },
    "eD+/": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("DaB8");
        Object.defineProperty(t, "EmailShareButton", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    eNF7: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("Y8CQ");
        Object.defineProperty(t, "NavSearchResultsPage", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        }),
        Object.defineProperty(t, "NavSearchResultsPageProps", {
            enumerable: !0,
            get: function() {
                return n.NavSearchResultsPageProps
            }
        })
    },
    eQFp: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    ecEv: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("uf23");
        Object.defineProperty(t, "SignUpInitialPartialConnected", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    ei9j: function(e, t, a) {
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
            r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            o = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && n(t, e, a);
                return r(t, e), t
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getReasonText = t.SelectIndividualReason = t.SelectRelationship = t.SelectKnowsCo = t.FraudReasonValues = t.FraudRelationshipValues = t.FraudKnowsCoValues = void 0;
        var l,
            i,
            u,
            s = o(a("q1tI")),
            c = a("wQmL"),
            d = a("yf/i"),
            m = a("z+lN"),
            f = a("YgTb"),
            p = a("V20B"),
            g = a("y4Uw");
        function h(e, t) {
            var a = e.find((function(e) {
                return e.value === t
            }));
            return a && a.text ? a.text : ""
        }
        function y(e) {
            switch (e) {
            case u.LEGAL:
                return f.t("Please explain your concern(s) in detail.");
            case u.LIBEL:
                return f.t("Which statements are libelous and why?");
            case u.FACTS:
                return f.t("Which statements are incorrect and why?");
            case u.MISUSE:
                return f.t("How have the campaign’s donations been spent?");
            case u.COPYCAT:
                return f.t("What is the original campaign link/title?");
            default:
                return f.t("Please describe your concerns")
            }
        }
        function _(e) {
            switch (e) {
            case l.YES:
                return f.t("How do you know the campaign organizer?");
            default:
                return f.t("How are you connected to the campaign?")
            }
        }
        function b(e) {
            switch (e) {
            case i.BENE:
                return f.t("How much money is being withheld and why?");
            case i.DONOR:
                return f.t("Why are you concerned about your donation?");
            default:
                return f.t("Please describe your concerns.")
            }
        }
        a("cxJT"),
        function(e) {
            e.NO = "0",
            e.YES = "1"
        }(l = t.FraudKnowsCoValues || (t.FraudKnowsCoValues = {})),
        function(e) {
            e.BENE = "bene",
            e.DONOR = "donor",
            e.INDIVIDUAL = "individual"
        }(i = t.FraudRelationshipValues || (t.FraudRelationshipValues = {})),
        function(e) {
            e.LEGAL = "legal",
            e.LIBEL = "libel",
            e.FACTS = "facts",
            e.MISUSE = "misuse",
            e.COPYCAT = "copycat"
        }(u = t.FraudReasonValues || (t.FraudReasonValues = {})),
        t.SelectKnowsCo = function() {
            return [{
                disabled: !0,
                text: f.t("Please select one."),
                value: ""
            }, {
                text: f.t("Yes, I know the Campaign Organizer."),
                value: l.YES
            }, {
                text: f.t("No, I do not know the Campaign Organizer"),
                value: l.NO
            }]
        },
        t.SelectRelationship = function() {
            return [{
                disabled: !0,
                text: f.t("Please select one."),
                value: ""
            }, {
                text: f.t("I am a beneficiary."),
                value: i.BENE
            }, {
                text: f.t("I am a donor."),
                value: i.DONOR
            }, {
                text: f.t("I am an individual concerned about this campaign."),
                value: i.INDIVIDUAL
            }]
        },
        t.SelectIndividualReason = function() {
            return [{
                disabled: !0,
                text: f.t("Please select one."),
                value: ""
            }, {
                text: f.t("I am involved in a legal dispute with the Campaign Organizer."),
                value: u.LEGAL
            }, {
                text: f.t("This campaign includes libelous statements."),
                value: u.LIBEL
            }, {
                text: f.t("Campaign includes factually incorrect information."),
                value: u.FACTS
            }, {
                text: f.t("Campaign Organizer has not used funds for the stated purpose."),
                value: u.MISUSE
            }, {
                text: f.t("They are impersonating someone or have copied another campaign."),
                value: u.COPYCAT
            }]
        },
        t.getReasonText = h,
        t.default = function(e) {
            var a = e.change,
                n = e.handleSubmit,
                r = e.pristine,
                o = e.invalid,
                l = e.submitting,
                u = e.knowsCo,
                v = e.individual,
                E = e.phonePrefix,
                S = e.role,
                C = e.reCaptchaSiteKey,
                O = e.onSuccess,
                P = e.onFailed,
                I = e.submitFailed,
                k = e.submitSucceeded;
            return s.useEffect((function() {
                k && O && O()
            }), [k]), s.useEffect((function() {
                I && P && P()
            }), [I]), s.default.createElement(c.Form, {
                onSubmit: n(p.SubmitHelper.SubmitContactFormFraud)
            }, s.default.createElement(c.Field, {
                id: "name",
                name: "name",
                component: m.ReduxZoomField,
                type: "text",
                className: "mb4x",
                label: f.t("Your Name")
            }), s.default.createElement("div", {
                className: "mb4x"
            }, s.default.createElement("div", {
                className: "o-fraud-phone"
            }, s.default.createElement(c.Field, {
                id: "phonePrefix",
                name: "phonePrefix",
                component: m.ReduxSelectField,
                className: "o-fraud-phone-prefix",
                options: g.PhoneCodesIntl,
                format: g.parsePhonePrefix,
                parse: g.parsePhonePrefix,
                label: "+" + E
            }), s.default.createElement(c.Field, {
                id: "phone",
                name: "phone",
                component: m.ReduxZoomField,
                type: "tel",
                className: "o-fraud-phone-value",
                label: f.t("Your Phone Number")
            }))), s.default.createElement(c.Field, {
                id: "email",
                name: "email",
                component: m.ReduxZoomField,
                type: "text",
                className: "mb4x",
                label: f.t("Your Email")
            }), s.default.createElement(c.Field, {
                id: "email2",
                name: "email2",
                component: m.ReduxZoomField,
                type: "text",
                className: "mb4x",
                label: f.t("Confirm Email")
            }), s.default.createElement("div", {
                className: "mb4x"
            }, s.default.createElement(c.Field, {
                id: "url",
                name: "url",
                component: m.ReduxZoomField,
                type: "text",
                label: f.t("Page URL")
            }), s.default.createElement("small", {
                className: "color-gray"
            }, f.t("Please enter the URL in this format: https://www.gofundme.com/f/example-campaign"))), s.default.createElement(c.Field, {
                id: "knowsCo",
                name: "knowsCo",
                component: m.ReduxSelectField,
                className: "mb4x",
                options: t.SelectKnowsCo(),
                label: f.t("Do you know the Campaign Organizer?"),
                onChange: function(e) {
                    var n = e.target.value,
                        r = h(t.SelectKnowsCo(), n);
                    r && a("knowsCoText", r)
                }
            }), u && s.default.createElement(s.default.Fragment, null, s.default.createElement(c.Field, {
                id: "knowsCoDescription",
                name: "knowsCoDescription",
                component: m.ReduxInputField,
                type: "text",
                className: "mb4x",
                label: _(u)
            }), s.default.createElement(c.Field, {
                id: "role",
                name: "role",
                component: m.ReduxSelectField,
                className: "mb4x",
                options: t.SelectRelationship(),
                label: f.t("Which best describes you?"),
                onChange: function(e) {
                    var n = e.target.value,
                        r = h(t.SelectRelationship(), n);
                    r && (a("roleText", r), n === i.BENE || n === i.DONOR ? (a("individual", ""), a("individualConcern", "")) : n === i.INDIVIDUAL && a("roleDescription", ""))
                }
            })), (S === i.BENE || S === i.DONOR) && s.default.createElement(c.Field, {
                id: "roleDescription",
                name: "roleDescription",
                component: m.ReduxInputField,
                type: "textarea",
                className: "mb4x",
                label: b(S)
            }), S === i.INDIVIDUAL && s.default.createElement(s.default.Fragment, null, s.default.createElement(c.Field, {
                id: "individual",
                name: "individual",
                component: m.ReduxSelectField,
                className: "mb4x",
                options: t.SelectIndividualReason(),
                label: f.t("Which best describes you?"),
                onChange: function(e) {
                    var n = e.target.value,
                        r = h(t.SelectIndividualReason(), n);
                    r && a("individualText", r)
                }
            }), s.default.createElement(c.Field, {
                id: "individualConcern",
                name: "individualConcern",
                component: m.ReduxInputField,
                type: "textarea",
                className: "mb4x",
                label: y(v)
            })), C && s.default.createElement(c.Field, {
                component: m.ReduxReCaptchaField,
                id: "captchaResponse",
                name: "captchaResponse",
                siteKey: C,
                className: "mb4x"
            }), s.default.createElement(d.Button, {
                className: "mb4x",
                fill: "solid-green",
                size: "large",
                type: "submit",
                dataElementId: "btn_contact_form_fraud_submit",
                disabled: r || l || o
            }, l ? s.default.createElement(d.LoadingDots, {
                color: "white",
                size: "large"
            }) : f.t("Send Email")))
        }
    },
    "ej+7": function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a("/MKj"),
            o = n(a("ps19")),
            l = a("ZZcF"),
            i = r.connect((function() {
                var e = l.makeGetDomain();
                return function(t) {
                    return {
                        domain: e(t)
                    }
                }
            }))(o.default);
        t.default = i
    },
    end9: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("TSYQ")),
            o = n(a("q1tI")),
            l = a("yf/i");
        a("OenC"),
        t.default = function(e) {
            var t = e.className,
                a = e.heading,
                n = e.icon,
                i = e.link,
                u = e.text,
                s = r.default(t, "m-value-prop");
            return o.default.createElement("section", {
                className: s
            }, o.default.createElement(l.ValuePropIcon, {
                className: "m-value-prop-icon",
                name: n
            }), o.default.createElement("div", {
                className: "m-value-prop-content"
            }, o.default.createElement("h3", {
                className: "heading-5 mb"
            }, a), o.default.createElement("p", {
                className: "color-gray mt0 mb0 text-small"
            }, u, o.default.createElement(l.HtmlSpace, {
                type: "breaking"
            }), i && o.default.createElement(l.Link, {
                as: "href",
                className: "color-dark-gray",
                to: i.url,
                dataElementId: i.dataElementId
            }, i.text))))
        }
    },
    epk1: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("ZDv6");
        Object.defineProperty(t, "ModalDonations", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    euXv: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    f2my: function(e, t, a) {
        "use strict";
        a.r(t),
        t.default = a.p + "static/media/donate.95d0758ad26399bee5cdca98c920ab02.svg"
    },
    fCpC: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("/XBk");
        Object.defineProperty(t, "CampaignSidebar", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    fWYy: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    ffrF: function(e, t, a) {
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
            r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            o = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && n(t, e, a);
                return r(t, e), t
            },
            l = this && this.__read || function(e, t) {
                var a = "function" == typeof Symbol && e[Symbol.iterator];
                if (!a)
                    return e;
                var n,
                    r,
                    o = a.call(e),
                    l = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(n = o.next()).done;)
                        l.push(n.value)
                } catch (i) {
                    r = {
                        error: i
                    }
                } finally {
                    try {
                        n && !n.done && (a = o.return) && a.call(o)
                    } finally {
                        if (r)
                            throw r.error
                    }
                }
                return l
            },
            i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = i(a("TSYQ")),
            s = o(a("q1tI")),
            c = a("W+/n"),
            d = a("yf/i"),
            m = a("z+lN"),
            f = a("ivk+");
        a("Bumg"),
        t.default = function(e) {
            var t = e.title,
                a = e.cards,
                n = e.className,
                r = a.length > 0 ? a.length - 1 : 0,
                o = l(s.useState(0), 2),
                i = o[0],
                p = o[1],
                g = s.useRef(null);
            a.length > 0 && i > r && p(f.clamp(i, 0, r));
            var h = g && g.current ? g.current.clientWidth : 0,
                y = -i * h;
            return s.default.createElement("div", {
                className: u.default(n, "o-card-list")
            }, s.default.createElement("h5", null, t), s.default.createElement(d.Rule, {
                type: "horizontal"
            }), a.length > 0 && s.default.createElement(c.Gesture, {
                onSwipeLeftToRight: function() {
                    return p((function(e) {
                        return f.clamp(e - 1, 0, r)
                    }))
                },
                onSwipeRightToLeft: function() {
                    return p((function(e) {
                        return f.clamp(e + 1, 0, r)
                    }))
                },
                className: "o-card-list-container"
            }, s.default.createElement("ul", {
                className: "o-card-list-items list-unstyled",
                style: {
                    transform: "translateX(" + y + "px)"
                }
            }, a.map((function(e, t) {
                var a = u.default("o-card-list-item", {
                    "o-card-list-item--is-active": i === t
                });
                return s.default.createElement("li", {
                    key: t,
                    className: a,
                    ref: g
                }, s.default.createElement(m.Card, {
                    to: e.to,
                    title: e.title,
                    subTitle: e.subTitle
                }))
            })))), a.length > 1 && s.default.createElement(d.ProgressBar, {
                progress: (i + 1) / a.length * 100,
                className: u.default("o-card-list-progress", "hide-for-large"),
                progressBarColor: "gray"
            }))
        }
    },
    fiJ5: function(e, t, a) {
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
            r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            o = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && n(t, e, a);
                return r(t, e), t
            },
            l = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = l(a("TSYQ")),
            u = o(a("q1tI")),
            s = a("+Ded"),
            c = a("MgMj"),
            d = a("yf/i"),
            m = a("o6hd"),
            f = a("nkkU"),
            p = a("z+lN"),
            g = a("YgTb"),
            h = a("zIs9"),
            y = a("wmfR"),
            _ = a("wNP3");
        a("1sEd"),
        t.default = function(e) {
            var t = e.copySeeAllLink,
                a = e.campaignTitle,
                n = e.donorEmail,
                r = e.fundUrl,
                o = e.getBatchShortUrl,
                l = e.getShortUrl,
                b = e.emailAndroidShareLink,
                v = e.emailShareLink,
                E = e.emailShortUrlComplete,
                S = e.smsAndroidShareLink,
                C = e.smsShareLink,
                O = e.twitterShareLink,
                P = e.hasCommentsEnabled,
                I = e.shareUrl,
                k = e.className,
                N = e.match,
                w = e.memberId,
                T = e.organizerFullName,
                M = e.whatsAppShareLink,
                A = i.default("l-post-donate-share", k);
            u.useEffect((function() {
                var e = [{
                    additionalShareParams: {
                        member: w
                    },
                    fundUrl: r,
                    shareLocation: m.UtmFromKeys.POSTDONATE_MODAL,
                    shareType: m.UtmKeys.COPY_LINK_ALL,
                    utm: m.getUtm(m.UtmKeys.COPY_LINK_ALL, m.UtmFromKeys.POSTDONATE_MODAL)
                }, {
                    fundUrl: N.params.campaignUrl,
                    shareLocation: m.UtmFromKeys.POSTDONATE_MODAL,
                    shareType: m.UtmKeys.TWITTER_SHARE_SHARESHEET,
                    utm: m.getUtm(m.UtmKeys.TWITTER_SHARE_SHARESHEET, m.UtmFromKeys.POSTDONATE_MODAL)
                }, {
                    fundUrl: N.params.campaignUrl,
                    shareLocation: m.UtmFromKeys.POSTDONATE_MODAL,
                    shareType: m.UtmKeys.WHATSAPP_SHARESHEET,
                    utm: m.getUtm(m.UtmKeys.WHATSAPP_SHARESHEET, m.UtmFromKeys.POSTDONATE_MODAL)
                }];
                e.push(y.isAndroid() ? {
                    fundUrl: N.params.campaignUrl,
                    shareLocation: m.UtmFromKeys.POSTDONATE_MODAL,
                    shareType: m.UtmKeys.SMS_ANDROID_SHARESHEET,
                    utm: m.getUtm(m.UtmKeys.SMS_ANDROID_SHARESHEET, m.UtmFromKeys.POSTDONATE_MODAL)
                } : {
                    fundUrl: N.params.campaignUrl,
                    shareLocation: m.UtmFromKeys.POSTDONATE_MODAL,
                    shareType: m.UtmKeys.SMS_SHARESHEET,
                    utm: m.getUtm(m.UtmKeys.SMS_SHARESHEET, m.UtmFromKeys.POSTDONATE_MODAL)
                }),
                o(e)
            }), []);
            var j = function() {
                    return _.isYelpWebView() || _.isInstagramWebView() ? u.default.createElement(p.ClipboardFieldFB, {
                        from: m.UtmFromKeys.POSTDONATE_MODAL,
                        url: I,
                        className: "l-campaign-share-action-button"
                    }) : u.default.createElement(p.FbShareButton, {
                        url: I,
                        from: m.UtmFromKeys.POSTDONATE_MODAL,
                        id: "post-donate-fb-share",
                        className: "l-campaign-share-action-button"
                    })
                },
                x = u.default.createElement(c.ABTest, {
                    defaultChild: j(),
                    experimentName: "facebook_fallback_post_donate",
                    primaryUnit: "" + s.uuid.getDistinctId(),
                    attributes: {
                        browser: _.browser(),
                        device: _.device(),
                        os: _.getOs()
                    }
                }, {
                    control: j(),
                    default: j(),
                    variation: u.default.createElement(p.ClipboardFieldFB, {
                        from: m.UtmFromKeys.POSTDONATE_MODAL,
                        url: I,
                        className: "l-campaign-share-action-button"
                    })
                }),
                D = y.isAndroid() ? b : v,
                G = y.isAndroid() ? S : C,
                F = u.default.createElement(u.default.Fragment, null, u.default.createElement(p.ShareList, null, x, u.default.createElement(p.TwitterShareButton, {
                    shareLink: O,
                    className: "l-campaign-share-action-button",
                    id: "post-donate-twitter-share"
                }, a), u.default.createElement(p.EmailShareButton, {
                    className: "l-campaign-share-action-button",
                    from: m.UtmFromKeys.POSTDONATE_MODAL,
                    id: "post-donate-email-share",
                    getEmailShortUrl: function() {
                        y.isAndroid() ? l({
                            fundUrl: N.params.campaignUrl,
                            shareLocation: m.UtmFromKeys.POSTDONATE_MODAL,
                            shareType: m.UtmKeys.EMAIL_ANDROID_SHARESHEET,
                            utm: m.getUtm(m.UtmKeys.EMAIL_ANDROID_SHARESHEET, m.UtmFromKeys.POSTDONATE_MODAL)
                        }) : l({
                            fundUrl: N.params.campaignUrl,
                            shareLocation: m.UtmFromKeys.POSTDONATE_MODAL,
                            shareType: m.UtmKeys.EMAIL_SHARESHEET,
                            utm: m.getUtm(m.UtmKeys.EMAIL_SHARESHEET, m.UtmFromKeys.POSTDONATE_MODAL)
                        })
                    },
                    emailShortUrlComplete: E,
                    subject: g.t('Have you seen "{{- title}}"?', {
                        title: a
                    })
                }, g.t("Hello \n \n I just donated to this GoFundMe, {{- shareLink}}.  Would you be interested in supporting it too? \n \n Even a small donation could help {{- name}} reach their fundraising goal. And if you can't make a donation, it would be great if you could share the fundraiser to help spread the word. \n \n Thanks for taking a look!", {
                    name: T,
                    shareLink: D
                })), u.default.createElement(p.WhatsAppShareButton, {
                    className: "l-campaign-share-action-button",
                    from: m.UtmFromKeys.POSTDONATE_MODAL,
                    id: "post-donate-whatsapp-share"
                }, g.t("Hi, I’d really appreciate it if you would share or donate to this GoFundMe, {{- fundTitle}} {{- shareLink}}", {
                    fundTitle: a,
                    shareLink: M
                })), u.default.createElement(p.SmsShareButton, {
                    className: "l-campaign-share-action-button hide-for-large"
                }, g.t("Hi, I just donated to this GoFundMe and would appreciate it if you would share or donate too. {{- shareLink}}", {
                    shareLink: G
                }))), u.default.createElement(p.ClipboardField, {
                    as: "input",
                    buttonFill: "solid-green",
                    buttonText: g.t("Copy"),
                    className: "mt4x",
                    copyStat: "shareLink" === N.params.type ? h.CopyStatus.success : h.CopyStatus.none,
                    dataElementId: {
                        button: "btn_share_copy_link",
                        input: "input_share_copy_link"
                    },
                    id: "share-to-clipboard",
                    labelText: g.t("Copy link"),
                    layout: "inline",
                    messageFailure: g.t("Something went wrong. Please select the link and manually copy."),
                    messageSuccess: g.t("Copied!"),
                    name: "share-to-clipboard",
                    isInitialFocus: !0,
                    additionalContent: p.ClipboardTips
                }, t)),
                R = P && "shareLink" !== N.params.type ? "/f/" + e.match.params.campaignUrl + "/thankyou/comment" + e.location.search : "/f/" + e.match.params.campaignUrl + e.location.search;
            return u.default.createElement("div", {
                className: A
            }, u.default.createElement(f.PostDonateConfirmation, {
                donorEmail: n
            }), u.default.createElement("h2", {
                className: "heading-1"
            }, g.t("Now help spread the word")), u.default.createElement("p", null, g.t("By sharing this fundraiser, you increase their chance of success by 5x.")), F, u.default.createElement("div", {
                className: "align-center flex-container mt2x"
            }, g.t("Finished sharing?"), u.default.createElement(d.HtmlSpace, {
                type: "non-breaking"
            }), u.default.createElement(d.Link, {
                as: "route",
                dataElementId: "btn_postdonate_share_skip",
                id: "post-donate-share-skip",
                to: R
            }, g.t("Continue"))))
        }
    },
    g4Gd: function(e, t, a) {
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
            r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            o = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && n(t, e, a);
                return r(t, e), t
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = o(a("q1tI")),
            i = a("yf/i");
        function u(e) {
            var t = e.buttonText,
                a = e.dataElementId,
                n = e.icon,
                r = e.label,
                o = e.onClick;
            return l.createElement(l.Fragment, null, l.createElement("span", {
                className: "o-contact-support-label mb2x"
            }, l.createElement(i.UIIcon, {
                name: n,
                textPairing: "prependText"
            }), l.createElement(i.HtmlSpace, {
                type: "non-breaking"
            }), r), l.createElement(i.Button, {
                dataElementId: a,
                fill: "hollow-green",
                layout: "full",
                size: "large",
                type: "button",
                onClick: o
            }, t))
        }
        a("1vf7"),
        t.default = function(e) {
            var t = e.chat,
                a = e.email,
                n = e.title,
                r = t || a;
            return l.createElement(l.Fragment, null, r && l.createElement(l.Fragment, null, l.createElement("h3", null, n), l.createElement("ul", {
                className: "o-contact-support-options list-unstyled grid-columns grid-columns--3 grid-columns--for-large"
            }, t && l.createElement("li", {
                className: "o-contact-support-item"
            }, u(t)), a && l.createElement("li", {
                className: "o-contact-support-item"
            }, u(a)))))
        }
    },
    gGNt: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("q1tI")),
            o = a("dNNZ"),
            l = a("p1Kg");
        function i(e) {
            var t = e.fetch,
                a = e.fetchOffset,
                n = e.getPhotos,
                i = e.onClose,
                u = e.location,
                s = e.history,
                c = e.items,
                d = e.match,
                m = e.totalItems,
                f = c ? parseInt(d.params.contentIndex, 10) : 0;
            return r.default.createElement(o.ErrorBoundary, {
                type: "suppress"
            }, r.default.createElement(o.Gallery, {
                currentIndex: f,
                isOpen: !0,
                items: c || [],
                onChange: function(e, r) {
                    if (t && e >= r - a) {
                        var o = d.params.contentType === l.GalleryType.campaign;
                        n({
                            offset: o ? r - 1 : r
                        })
                    }
                    d.params.contentId ? s.replace("/f/" + d.params.campaignUrl + "/" + d.params.contentType + "/" + d.params.contentId + "/gallery/" + e + u.search) : s.replace("/f/" + d.params.campaignUrl + "/" + d.params.contentType + "/gallery/" + e + u.search)
                },
                onClose: i,
                totalItems: m || (c ? c.length : 0)
            }))
        }
        i.defaultProps = {
            fetch: !1,
            fetchOffset: 8
        },
        t.default = i
    },
    gIhk: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("GTIQ");
        Object.defineProperty(t, "SocialStats", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    gR13: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a("/MKj"),
            o = n(a("4M3g")),
            l = a("Cge7"),
            i = a("ZZcF"),
            u = n(a("A9kC")),
            s = n(a("b0lt")),
            c = a("mbAg"),
            d = n(a("5h8D")),
            m = a("LuUq"),
            f = r.connect((function() {
                var e = c.makeGetAlertContent(),
                    t = c.makeGetInfoContent(),
                    a = i.makeGetAlgoliaIndices(),
                    n = l.makeGetAuthenticatedPerson(),
                    r = i.makeGetShowCookieBanner(),
                    o = l.makeHasCampaign(),
                    u = l.makeGetIsLoggedIn(),
                    s = i.makeGetLocale(),
                    d = i.makeGetDomain(),
                    f = i.makeGetVisitorGeoRecord(),
                    p = m.makeGetSusiModalPaths();
                return function(l) {
                    return {
                        alertContent: e(l),
                        algoliaIndices: a(l),
                        authenticatedPerson: n(l),
                        domain: d(l),
                        geoRecord: f(l),
                        hasCampaign: o(l),
                        infoContent: t(l),
                        isLoggedIn: u(l),
                        locale: s(l),
                        showCookieBanner: r(l),
                        susiModalPaths: p(l)
                    }
                }
            }), (function(e) {
                return {
                    getIdentity: function() {
                        e({
                            type: o.default.GET_FEED_IDENTITY_IN_PROGRESS
                        })
                    },
                    onCloseAlert: function(t) {
                        e({
                            payload: {
                                type: t
                            },
                            type: s.default.CLOSE_ALERT_CONTENT
                        })
                    },
                    onLanguageChange: function(t) {
                        e({
                            payload: t,
                            type: u.default.SET_LOCALE_COOKIE_IN_PROGRESS
                        })
                    }
                }
            }))(d.default);
        t.default = f
    },
    gTei: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    gesM: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("7DEb");
        Object.defineProperty(t, "ContactFormBene", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        }),
        Object.defineProperty(t, "ContactFormBeneInput", {
            enumerable: !0,
            get: function() {
                return n.ContactFormBeneInput
            }
        }),
        Object.defineProperty(t, "ContactFormBeneProps", {
            enumerable: !0,
            get: function() {
                return n.ContactFormBeneProps
            }
        })
    },
    ggYG: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("RSgc");
        Object.defineProperty(t, "TwitterShareButton", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    "h+jv": function(e, t, a) {
        "use strict";
        a.r(t),
        t.default = a.p + "static/media/comment.e3028a39afc2ef0481d353e9e58e713b.svg"
    },
    h2fs: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("LNvD");
        Object.defineProperty(t, "ClipboardFieldFB", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    h5Yc: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("yYsC");
        Object.defineProperty(t, "ClipboardTips", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    h6Hp: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    hc1T: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("TSYQ")),
            o = n(a("q1tI")),
            l = a("yf/i"),
            i = a("YgTb");
        t.default = function(e) {
            var t = e.className,
                a = e.children,
                n = e.dataElementId,
                u = e.url,
                s = e.onClick,
                c = r.default("m-donate-button", t);
            return o.default.createElement(l.Button, {
                as: "href",
                className: c,
                dataElementId: n,
                fill: "solid-yellow",
                layout: "max-full",
                size: "large",
                to: u,
                onClick: s
            }, a || i.t("Donate now"))
        }
    },
    hdBT: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    hu7q: function(e, t, a) {
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
            r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            o = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && n(t, e, a);
                return r(t, e), t
            },
            l = this && this.__read || function(e, t) {
                var a = "function" == typeof Symbol && e[Symbol.iterator];
                if (!a)
                    return e;
                var n,
                    r,
                    o = a.call(e),
                    l = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(n = o.next()).done;)
                        l.push(n.value)
                } catch (i) {
                    r = {
                        error: i
                    }
                } finally {
                    try {
                        n && !n.done && (a = o.return) && a.call(o)
                    } finally {
                        if (r)
                            throw r.error
                    }
                }
                return l
            },
            i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = o(a("q1tI")),
            s = i(a("TSYQ")),
            c = a("YgTb"),
            d = a("yf/i"),
            m = i(a("fadw")),
            f = a("K9qA"),
            p = a("+Ded"),
            g = a("HVnM");
        a("bqnV"),
        t.default = function(e) {
            var t = e.title,
                a = e.cardData,
                n = e.viewId,
                r = l(u.useState(!0), 2),
                o = r[0],
                i = r[1],
                h = l(u.useState(0), 2),
                y = h[0],
                _ = h[1],
                b = l(u.useState(!1), 2),
                v = b[0],
                E = b[1],
                S = l(u.useState(!0), 2),
                C = S[0],
                O = S[1],
                P = l(u.useState(!1), 2),
                I = P[0],
                k = P[1],
                N = u.default.createRef(),
                w = s.default("o-guidance-drawer-container", {
                    "o-guidance-drawer-container-slide-in-animation": I
                }),
                T = s.default("o-guidance-drawer-carousel-container", "flex-container", "align-middle", {
                    "o-guidance-drawer-carousel-container-hide": !o
                }),
                M = s.default("o-guidance-drawer-display-btn", "o-guidance-drawer-mobile-button", "hide-for-large", {
                    "o-guidance-drawer-mobile-button-hide": !o
                });
            u.useEffect((function() {
                p.trackEvents.trackEvent({
                    type: "mp_page_view",
                    viewId: n
                })
            }), []);
            var A = function() {
                    var e = null !== N.current ? N.current.clientWidth : 0;
                    return {
                        cardLength: Math.round(e / a.length),
                        carouselWidth: e
                    }
                },
                j = s.default("o-guidance-drawer-carousel-left-button", "show-for-large", "mr-three-quarters", {
                    invisible: !v
                }),
                x = s.default("o-guidance-drawer-carousel-right-button", "show-for-large", "ml-three-quarters", {
                    invisible: !C
                }),
                D = a.map((function(e, t) {
                    return u.default.createElement(g.GuidanceCard, {
                        key: t + "_cards",
                        btnText: e.btnText,
                        dataElementId: e.dataElementId,
                        description: e.description,
                        disableClick: e.disableClick,
                        hideBtn: e.hideBtn,
                        icon: e.icon,
                        action: e.action,
                        url: e.url
                    })
                }));
            return f.canUseDom() ? u.default.createElement(m.default, {
                onChange: function(e) {
                    e.isIntersecting && !I && k(!0)
                }
            }, u.default.createElement("div", {
                className: w,
                "data-view-id": "pg_donate_index"
            }, u.default.createElement("div", {
                className: "o-guidance-drawer-header flex-container align-justify pl3x pr3x"
            }, u.default.createElement("p", {
                className: "o-guidance-drawer-title color-dark-gray heading-4 mb0"
            }, t), u.default.createElement(d.TextButton, {
                onClick: function() {
                    return i(!o)
                },
                className: "o-guidance-drawer-display-btn weight-400 show-for-large",
                dataElementId: o ? "pg_guidance_hide" : "pg_guidance_show"
            }, o ? c.t("Hide") : c.t("Show")), u.default.createElement(d.IconButton, {
                ariaLabel: o ? c.t("Hide guidance cards") : c.t("Show guidance cards"),
                className: M,
                dataElementId: o ? "pg_guidance_hide" : "pg_guidance_show",
                iconName: "caret-up",
                iconType: "ui",
                onClick: function() {
                    return i(!o)
                }
            })), u.default.createElement("div", {
                className: T
            }, u.default.createElement(d.IconButton, {
                ariaLabel: c.t("Previous card"),
                className: j,
                dataElementId: "pg_guidance_scroll",
                iconName: "caret-left",
                iconType: "ui",
                onClick: function() {
                    var e = A(),
                        t = e.cardLength,
                        a = e.carouselWidth;
                    y <= a - 3 * t && O(!0),
                    y + t >= 0 && E(!1),
                    _(y + t)
                }
            }), u.default.createElement("div", {
                className: "o-guidance-drawer-card-carousel flex-container"
            }, u.default.createElement("div", {
                className: "flex-container",
                ref: N,
                style: {
                    transform: "translateX(" + y + "px)"
                }
            }, D)), u.default.createElement(d.IconButton, {
                ariaLabel: c.t("Next card"),
                className: x,
                dataElementId: "pg_guidance_scroll",
                iconName: "caret-right",
                iconType: "ui",
                onClick: function() {
                    var e = A(),
                        t = e.cardLength,
                        a = e.carouselWidth;
                    y <= 0 && E(!0),
                    y <= 4 * t - a && O(!1),
                    _(y - t)
                }
            })))) : u.default.createElement(u.Fragment, null)
        }
    },
    i8rK: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("Acej");
        Object.defineProperty(t, "EarlySupporterCallout", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    i9fw: function(e, t, a) {
        "use strict";
        var n,
            r = this && this.__extends || (n = function(e, t) {
                return (n = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var a in t)
                        t.hasOwnProperty(a) && (e[a] = t[a])
                })(e, t)
            }, function(e, t) {
                function a() {
                    this.constructor = e
                }
                n(e, t),
                e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, new a)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            l = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = a("puIA"),
            u = l(a("fadw")),
            s = a("nkkU"),
            c = a("z+lN"),
            d = a("dNNZ"),
            m = a("6M7q"),
            f = a("p1Kg"),
            p = a("YgTb"),
            g = l(a("qqdV")),
            h = a("zIs9"),
            y = a("x060"),
            _ = a("+Ded"),
            b = a("wE+H"),
            v = a("yf/i"),
            E = a("K9qA"),
            S = a("8QVh"),
            C = a("o6hd"),
            O = l(a("TSYQ")),
            P = l(a("+QRC")),
            I = l(a("cr+I")),
            k = l(a("q1tI"));
        a("JAnS");
        var N = a("zMi6"),
            w = a("2JF7"),
            T = a("jQuR"),
            M = l(a("qRrf")),
            A = a("9pH/"),
            j = l(a("IXFp")),
            x = a("i8rK"),
            D = function(e) {
                function t(a) {
                    var n = e.call(this, a) || this;
                    return n.showDonationsModal = function() {
                        n.props.history.push(n.getDonationsModalUrl())
                    }, n.onClickOrganizerImage = function(e) {
                        var t = n.props,
                            a = t.location,
                            r = t.history,
                            o = t.match;
                        r.push("/f/" + o.params.campaignUrl + "/campaign/gallery/" + e + a.search)
                    }, n.onClickUpdateImage = function(e, t) {
                        var a = n.props,
                            r = a.location,
                            o = a.history,
                            l = a.match;
                        o.push("/f/" + l.params.campaignUrl + "/update/" + e + "/gallery/" + t + r.search)
                    }, n.onClickCommentImage = function(e, t) {
                        var a = n.props,
                            r = a.location,
                            o = a.history,
                            l = a.match;
                        o.push("/f/" + l.params.campaignUrl + "/comment/" + e + "/gallery/" + t + r.search)
                    }, n.onClickCompetitorLink = function(e) {
                        var t = n.props,
                            a = t.history,
                            r = t.match;
                        _.trackEvents.push({
                            elementId: "btn_payment_external",
                            type: "mp_page_click",
                            viewId: "pg_donate_index"
                        }, e),
                        a.push("/f/" + r.params.campaignUrl + "/warning" + location.search),
                        e.stopPropagation(),
                        e.preventDefault()
                    }, n.shareOnFaceBook = function() {
                        var e = window.location,
                            t = e.origin,
                            a = e.pathname,
                            n = S.getShareLink(t + a, C.UtmKeys.FACEBOOK_SHARE_SHARESHEET, C.UtmFromKeys.GUIDANCE_DRAWER),
                            r = y.FacebookSDK.getShareLink(n);
                        y.FacebookSDK.share(r)
                    }, n.copyShareLink = function(e) {
                        var t = n.props,
                            a = t.history,
                            r = t.memberId,
                            o = window.location,
                            l = o.origin,
                            i = o.pathname,
                            u = S.getShareLink(l + i, C.UtmKeys.COPY_LINK_SHARESHEET, C.UtmFromKeys.GUIDANCE_DRAWER, {
                                member: r
                            });
                        P.default(u),
                        a.push(e)
                    }, n.navigateToSignUp = function() {
                        var e = n.props,
                            t = e.history,
                            a = e.match,
                            r = e.queryParams;
                        t.push("/f/" + a.params.campaignUrl + "/sign-up/email?teamInvite=" + (null == r ? void 0 : r.teamInvite) + "&fbStatus=1")
                    }, n.getGuidanceCardData = function() {
                        var e = n.props,
                            t = e.addFacebookProfilePhoto,
                            a = e.facebookId,
                            r = e.hasCommentsEnabled,
                            o = e.isAnonymousDonation,
                            l = e.lastDonorDetails,
                            i = e.location,
                            u = e.match,
                            s = e.signedDonationId,
                            c = encodeURIComponent(s),
                            d = "/f/" + u.params.campaignUrl + "/thankyou/shareLink" + i.search;
                        return [A.donationSummaryCard(c), A.shareLinkCard((function() {
                            return n.copyShareLink(d)
                        })), A.addCommentCard(c), A.addProfilePhotoForDonor(!!a, c, t, l), A.facebookShareCard(n.shareOnFaceBook)].filter((function(e) {
                            return !(h.guidanceCardIcon.COMMENT === e.icon && !r) && (h.guidanceCardIcon.PROFILE !== e.icon || !o)
                        }))
                    }, n.getTeamCardData = function() {
                        var e,
                            t = n.props,
                            a = t.addFacebookProfilePhotoToPerson,
                            r = t.campaignSideBarProps.isLoggedIn,
                            o = t.campaignMembersProps,
                            l = t.donations,
                            i = void 0 === l ? [] : l,
                            u = t.facebookId,
                            s = t.history,
                            c = t.identity,
                            d = t.location,
                            m = t.memberId,
                            f = t.match.params.campaignUrl,
                            p = t.queryParams,
                            g = t.getJoinTeam,
                            y = "/f/" + f + "/share/copyLink" + d.search;
                        return [A.shareLinkCard((function() {
                            return n.copyShareLink(y)
                        })), A.donateCard(n.getDonateUrl(m)), A.joinFundraiserCard(f, null === (e = null == o ? void 0 : o.organizer) || void 0 === e ? void 0 : e.person.fullName, !!r, (null == p ? void 0 : p.teamInvite) ? Array.isArray(p.teamInvite) ? p.teamInvite[0] : p.teamInvite : "", g(!!(null == c ? void 0 : c.user_id))), A.addProfilePhotoForPerson(!!u || !!(null == c ? void 0 : c.profile_url), a, n.navigateToSignUp, !!r), A.facebookShareCard(n.shareOnFaceBook), A.widgetShareCard((function() {
                            return s.push("/f/" + f + "/share/embed" + d.search)
                        })), A.manageFundCard(f)].filter((function(e) {
                            switch (e.icon) {
                            case h.guidanceCardIcon.DONATE:
                                return i.length < 6;
                            case h.guidanceCardIcon.MANAGE:
                                return m;
                            case h.guidanceCardIcon.JOIN:
                                return !m;
                            default:
                                return !0
                            }
                        }))
                    }, n.getMainPhotoOrVideo = function(e) {
                        var t = n.state.isClientSide,
                            a = n.props.copyLinkShortUrl;
                        if (t && e.media_id && (e.media_type === b.mediaTypes.YOUTUBE || e.media_type === b.mediaTypes.VIMEO))
                            return k.default.createElement("div", {
                                className: "p-campaign-collage p-campaign-collage--video"
                            }, k.default.createElement(v.Video, {
                                mediaId: e.media_id,
                                mediaType: e.media_type
                            }));
                        var r = n.props.mainPhotoFormatted;
                        return r ? k.default.createElement("div", {
                            className: "p-campaign-collage"
                        }, k.default.createElement("div", {
                            className: "image-16by9 m-collage-image"
                        }, k.default.createElement(v.Image, {
                            layout: v.ScalableImageLayouts["16by9"],
                            scaled: r.scaled,
                            url: r.url
                        }), k.default.createElement(c.CampaignLinkTagButton, {
                            shortURL: a
                        }))) : k.default.createElement(k.default.Fragment, null)
                    }, n.handleSidebarIntersection = function(e) {
                        var t = e.boundingClientRect,
                            a = e.rootBounds;
                        t.y < a.y && 0 === e.intersectionRatio ? n.setState({
                            stickyCtaIsOpen: !0
                        }) : n.setState({
                            stickyCtaIsOpen: !1
                        })
                    }, n.handleContentIntersection = function(e) {
                        n.handleCommentsIntersection(e),
                        n.handlePhotosIntersection(e),
                        n.handleUpdatesIntersection(e)
                    }, n.handleCommentsIntersection = function(e) {
                        var a = n.props,
                            r = a.isCampaignInitialized,
                            o = a.hasCommentsEnabled,
                            l = a.getComments,
                            i = a.showActiveContent,
                            u = n.state.shouldLoadComments;
                        e.intersectionRatio > 0 && r && o && u && l && i && (l(0, t.COMMENTS_PER_PAGE), n.setState({
                            shouldLoadComments: !1
                        }))
                    }, n.handlePhotosIntersection = function(e) {
                        var t = n.props,
                            a = t.isCampaignInitialized,
                            r = t.getPhotos,
                            o = t.showActiveContent,
                            l = n.state.shouldLoadPhotos;
                        e.intersectionRatio > 0 && a && l && r && o && (r({
                            photoType: f.photoTypes.CONTENT
                        }), n.setState({
                            shouldLoadPhotos: !1
                        }))
                    }, n.handleUpdatesIntersection = function(e) {
                        var a = n.props,
                            r = a.isCampaignInitialized,
                            o = a.getUpdates,
                            l = a.showActiveContent,
                            i = n.state.shouldLoadUpdates;
                        e.intersectionRatio > 0 && r && i && o && l && (o(0, t.UPDATES_PER_PAGE), n.setState({
                            shouldLoadUpdates: !1
                        }))
                    }, n.getFundraiserStatsBox = function() {
                        var e = n.props.campaignSideBarProps,
                            t = e.showSocialStats,
                            a = e.stats,
                            r = e.statsFormatted;
                        return t ? k.default.createElement(c.SocialStats, {
                            donors: a.totalDonors,
                            donorsOnClick: n.showDonationsModal,
                            donorsString: r.totalDonorsStr,
                            followers: a.totalFollowers,
                            followersString: r.totalFollowersStr,
                            shares: a.totalShares,
                            sharesString: r.totalSharesStr,
                            tanLayout: !0
                        }) : k.default.createElement(k.default.Fragment, null)
                    }, n.onBannerViewEvent = function() {
                        var e = n.props.identity;
                        _.trackEvents.push(o(o(o({}, n.props.analyticsEventData), n.getMagritteProps()), {
                            type: "mp_page_view",
                            userId: (null == e ? void 0 : e.user_id) || 0,
                            viewId: "msg_guarantee"
                        }))
                    }, n.state = {
                        donationListOverflow: !1,
                        isClientSide: !1,
                        shouldLoadComments: !0,
                        shouldLoadPhotos: !0,
                        shouldLoadUpdates: !0,
                        stickyCtaIsOpen: !1
                    }, n
                }
                return r(t, e), Object.defineProperty(t.prototype, "isPreviewOverflow", {
                    get: function() {
                        var e,
                            t = (null === (e = this.props.campaignSideBarProps) || void 0 === e ? void 0 : e.donationsPreview) || [],
                            a = t.slice(0, 3),
                            n = t.length,
                            r = null == a ? void 0 : a.length;
                        return !!(this.state.donationListOverflow && r && n > r)
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.componentDidUpdate = function(e) {
                    var t,
                        a;
                    try {
                        this.props.analyticsEventData && _.trackEvents.getPlatform("Amplitude").setData(this.props.analyticsEventData)
                    } catch (r) {
                        console.log(r)
                    }
                    try {
                        this.props.analyticsEventData && (null === (t = this.props.queryParams) || void 0 === t ? void 0 : t.qid) && _.trackEvents.getPlatform("Algolia").setData({
                            fundId: this.props.analyticsEventData.campaignId,
                            index: null === (a = this.props.algoliaIndices) || void 0 === a ? void 0 : a.hitIndex,
                            queryId: this.props.queryParams.qid
                        })
                    } catch (r) {
                        console.log(r)
                    }
                    if (!0 === e.areFeedCountsLoading && !1 === this.props.areFeedCountsLoading && this.trackPageView(e), this.props.identity && this.props.identity.user_id && (!e.identity || !e.identity.user_id || !e.identity.person_id || e.identity.person_id !== this.props.identity.person_id || e.identity.user_id !== this.props.identity.user_id)) {
                        if (this.props.identity.person_id)
                            try {
                                _.trackEvents.getPlatform("GoogleAnalytics").setData({
                                    personId: this.props.identity.person_id
                                })
                            } catch (r) {}
                        try {
                            _.trackEvents.getPlatform("Magritte").setData({
                                personId: this.props.identity.person_id,
                                userId: this.props.identity.user_id
                            })
                        } catch (r) {}
                        var n = this.props.getCampaignliteRoles;
                        n && n()
                    }
                }, t.prototype.componentDidMount = function() {
                    var e = this.props,
                        t = e.algoliaIndices,
                        a = e.analyticsEventData,
                        n = e.campaignStateLabel,
                        r = e.categoryId,
                        l = e.getCampaignliteRoles,
                        i = e.getCounts,
                        u = e.identity,
                        s = e.head,
                        c = e.history,
                        d = e.match,
                        m = e.queryParams,
                        p = e.setVimeoImageUrl,
                        g = e.mediaType,
                        h = e.mediaId,
                        y = e.showActiveContent,
                        v = e.title,
                        S = e.getDonationsWithLastDonation,
                        O = e.donations,
                        P = e.getVelocityRecentDonations;
                    if (this.storeSignedDonation(), S && S(), m && "1" === m.notready && c.replace("/f/" + d.params.campaignUrl + "/donations/paused"), m && "1" === m.preview)
                        E.disableClicksOnContainer("root");
                    else {
                        if (m && !m.utm_source && !m.utm_medium && !m.utm_campaign) {
                            var k = C.getUtm(C.UtmKeys.ADDRESS_BAR, C.UtmFromKeys.CAMPAIGN_PAGE),
                                N = {
                                    utm_source: k.source,
                                    utm_medium: k.medium,
                                    utm_campaign: k.campaign
                                };
                            c.replace(location.pathname + "?" + I.default.stringify(o(o({}, N), m)))
                        }
                        y && i ? i() : !y && u && (u.person_id || u.user_id) && l && l(),
                        y || this.trackPageView(this.props);
                        var w = ["Campaign"],
                            T = f.getCampaignCategoriesText();
                        r && T[r] ? w.push(T[r].keyname) : w.push("No-Category");
                        var M = s ? " : " + s.campaign.location : "";
                        try {
                            _.trackEvents.getPlatform("ChartBeat").setData({
                                sections: w.join(","),
                                title: "" + v + M
                            })
                        } catch (D) {
                            console.log(D)
                        }
                        try {
                            a && _.trackEvents.getPlatform("Amplitude").setData(a)
                        } catch (D) {
                            console.log(D)
                        }
                        try {
                            a && m && m.qid && _.trackEvents.getPlatform("Algolia").setData({
                                fundId: a.campaignId,
                                index: null == t ? void 0 : t.hitIndex,
                                queryId: m.qid
                            })
                        } catch (D) {
                            console.log(D)
                        }
                        if (g === b.mediaTypes.VIMEO && h && p(h), O && n === f.CampaignStatus.TRENDING && P(), E.canUseDom()) {
                            var A = window.innerHeight,
                                j = document.getElementsByClassName("o-campaign-sidebar"),
                                x = j[0].getBoundingClientRect().height;
                            j[0].getBoundingClientRect().top + x > A && this.setState({
                                donationListOverflow: !0
                            })
                        }
                        this.setState({
                            isClientSide: !0
                        })
                    }
                }, t.prototype.trackPageView = function(e) {
                    var t = e.location,
                        a = i.Routing.getConfig(g.default),
                        n = i.Routing.getMatches(a, {
                            as: "switch",
                            path: t.pathname
                        }),
                        r = "";
                    n.forEach((function(e) {
                        "Gallery" === (r = e.route.dataModalId || r) && "community" === e.matched.params.contentType && (r = "UGC")
                    })),
                    _.trackEvents.push(o(o({}, this.getMagritteProps()), {
                        behindModal: r,
                        type: "mp_page_view",
                        userId: this.props.identity && this.props.identity.user_id ? this.props.identity.user_id : 0,
                        viewId: "pg_donate_index"
                    }))
                }, t.prototype.render = function() {
                    var e = this.props,
                        t = e.campaignStatus,
                        a = e.dispGuidanceDrawer,
                        n = e.head,
                        r = e.isTeamEnabledCampaign,
                        o = e.mainPhoto,
                        l = e.memberId,
                        m = e.queryParams,
                        g = e.title,
                        h = e.routes,
                        y = f.getCampaignValueProps(),
                        _ = O.default("p-campaign"),
                        b = this.getMainPhotoOrVideo(o),
                        E = "1" === (null == m ? void 0 : m.preview),
                        S = ((null == m ? void 0 : m.teamInvite) || l) && t && r && !E,
                        C = !(!(null == m ? void 0 : m.teamInvite) && !(null == m ? void 0 : m.d)),
                        P = a && k.default.createElement(d.GuidanceDrawer, {
                            title: p.t("Thanks for donating"),
                            cardData: this.getGuidanceCardData(),
                            viewId: "pg_guidance_donor"
                        }),
                        I = k.default.createElement(d.GuidanceDrawer, {
                            title: p.t("Boost this fundraiser"),
                            cardData: this.getTeamCardData(),
                            viewId: "pg_guidance_team"
                        });
                    return k.default.createElement(k.default.Fragment, null, n && k.default.createElement(d.CampaignHead, {
                        appId: n.appId,
                        pages: n.pages,
                        campaign: n.campaign,
                        locale: n.locale,
                        noFollow: n.noFollow || C
                    }), k.default.createElement("div", {
                        className: "p-campaign-guidance-drawer"
                    }, S ? I : P), this.getStickyCta(), k.default.createElement("div", {
                        className: _,
                        "data-view-id": "pg_donate_index"
                    }, b, k.default.createElement("header", {
                        className: "p-campaign-header"
                    }, k.default.createElement(s.CampaignTitle, null, g)), k.default.createElement(u.default, {
                        onChange: this.handleSidebarIntersection
                    }, k.default.createElement("div", {
                        className: "p-campaign-sidebar"
                    }, this.getCampaignSidebar())), k.default.createElement("div", {
                        className: "p-campaign-description"
                    }, k.default.createElement(c.CampaignByline, {
                        meta: this.props.meta
                    }), k.default.createElement(v.Rule, {
                        type: "horizontal",
                        className: "mt0 mb0"
                    }), !this.createdOverTenDaysAgo() && k.default.createElement(k.default.Fragment, null, k.default.createElement(M.default, {
                        meta: this.props.meta
                    }), k.default.createElement(v.Rule, {
                        type: "horizontal",
                        className: "mt0 mb0"
                    })), this.getCampaignDescription()), k.default.createElement(u.default, {
                        onChange: this.handleContentIntersection
                    }, k.default.createElement("div", {
                        className: "p-campaign-content"
                    }, this.getUpdatesSection(), k.default.createElement("div", {
                        className: "hide-for-large"
                    }, this.getFundraiserStatsBox()), k.default.createElement("div", {
                        className: "hide-for-large"
                    }, this.getAdditionalButtons()), this.getCampaignDonations(), k.default.createElement("div", {
                        className: "show-for-large"
                    }, this.getAdditionalButtons()), this.getCampaignMembers(), this.getCampaignComments(), this.createdOverTenDaysAgo() && k.default.createElement(k.default.Fragment, null, k.default.createElement(v.Rule, {
                        type: "horizontal",
                        className: "mt2x mb0"
                    }), k.default.createElement(M.default, {
                        meta: this.props.meta
                    }), k.default.createElement(v.Rule, {
                        type: "horizontal",
                        className: "mt0 mb0"
                    })))), this.getReportFundraiserLink(), k.default.createElement("div", {
                        className: "p-campaign-value-props"
                    }, k.default.createElement(d.ValuePropList, {
                        items: y
                    })), h && k.default.createElement(i.Routes, {
                        config: h
                    })))
                }, t.prototype.onViewProximityIndicator = function() {
                    _.trackEvents.push({
                        type: "mp_page_view",
                        viewId: "msg_proximity"
                    })
                }, t.prototype.onViewVelocityIndicator = function() {
                    _.trackEvents.push({
                        type: "mp_page_view",
                        viewId: "msg_velocity"
                    })
                }, t.prototype.createdOverTenDaysAgo = function() {
                    var e = this.props.meta;
                    if (e) {
                        var t = e.creationDate;
                        return N.diffFromNow(t, "days") > 10
                    }
                    return !1
                }, t.prototype.getMagritteProps = function() {
                    return {
                        fundId: this.props.fundId,
                        fundName: this.props.title,
                        fundUrl: this.props.fundUrl
                    }
                }, t.prototype.getIsUserInSameStateAsCampaign = function() {
                    var e = this.props,
                        t = e.visitorGeoRecord,
                        a = e.organizerLocation;
                    return (null == a ? void 0 : a.state_prefix) === (null == t ? void 0 : t.region)
                }, t.prototype.getDonationsModalUrl = function() {
                    var e = this.props,
                        t = e.match,
                        a = e.location;
                    return "/f/" + t.params.campaignUrl + "/donations" + a.search
                }, t.prototype.getAdditionalButtons = function() {
                    var e = this.props,
                        t = e.campaignStatus,
                        a = e.donations;
                    return t === f.CampaignStatus.ACTIVE && a ? a.length ? this.getDonateLeftShareRightAdditionalButtons() : this.getBeFirstToDonateCard() : void 0
                }, t.prototype.getDonateLeftShareRightAdditionalButtons = function() {
                    var e = this.props,
                        t = e.location,
                        a = e.match;
                    return k.default.createElement("div", {
                        className: "disp-flex mb6x"
                    }, k.default.createElement(c.DonateButton, {
                        url: this.getDonateUrl(),
                        dataElementId: "btn_story_donate"
                    }, p.t("Donate")), k.default.createElement(c.ShareButton, {
                        url: "/f/" + a.params.campaignUrl + "/share" + t.search,
                        className: "ml2x",
                        dataElementId: "btn_story_share"
                    }, p.t("Share")))
                }, t.prototype.getBeFirstToDonateCard = function() {
                    return k.default.createElement(c.FirstDonateCard, {
                        donateURL: this.getDonateUrl(),
                        title: p.t("Be the first to help")
                    }, k.default.createElement("p", null, p.t("Your early support will go a long way and help inspire others to donate.")))
                }, t.prototype.getReportFundraiserLink = function() {
                    var e = this.props,
                        t = e.showActiveContent,
                        a = e.match;
                    return !!t && k.default.createElement("div", {
                            className: "p-campaign-report-button"
                        }, k.default.createElement(v.UIIcon, {
                            name: "flag",
                            size: "large",
                            className: "mr"
                        }), k.default.createElement(v.Link, {
                            to: "https://support.gofundme.com/hc/articles/203604694",
                            onClick: function() {
                                E.canUseLocalStorage() && localStorage.setItem("reportCampaignUrl", a.params.campaignUrl)
                            },
                            dataElementId: "btn_report"
                        }, p.t("Report fundraiser")))
                }, t.prototype.getDonateUrl = function(e) {
                    var t = this.props,
                        a = t.match,
                        n = t.queryParams,
                        r = t.domain,
                        o = e || (null == n ? void 0 : n.member);
                    return "https://www." + r + "/f/" + a.params.campaignUrl + "/donate" + (o ? "?member=" + o : "")
                }, t.prototype.getCampaignDescription = function() {
                    var e = this.props,
                        t = e.description,
                        a = e.meta,
                        n = e.showActiveContent,
                        r = e.queryParams,
                        o = e.updates,
                        l = r && "1" === r.preview;
                    if (!n)
                        return k.default.createElement(M.default, {
                            meta: this.props.meta
                        });
                    if (t && t.length && a) {
                        var i = !(o && o.length > 0 && w.isCompetitorText(o[0].text)) && !a.isCharity && w.isCompetitorText(t);
                        return k.default.createElement(d.ErrorBoundary, {
                            type: "suppress"
                        }, k.default.createElement(d.CampaignDescription, {
                            onClickCompetitorLink: this.onClickCompetitorLink,
                            previewMode: l
                        }, t), i && k.default.createElement(T.CompetitorBanner, {
                            onBannerViewEvent: this.onBannerViewEvent
                        }))
                    }
                    return !1
                }, t.prototype.getCampaignSidebar = function() {
                    var e = this.props,
                        t = e.campaignSideBarProps,
                        a = e.campaignStatus,
                        n = e.campaignStateLabel,
                        r = e.location,
                        o = e.match,
                        l = e.inDegradedMode,
                        i = e.sameCurrencyCode,
                        u = e.showActiveContent,
                        s = e.topSupporters,
                        m = e.currentUserDonation,
                        f = e.signedDonationId,
                        g = t.campaignRecentDonationsTotal,
                        h = t.campaignRecentDonationsTotalStr,
                        y = t.campaignLaunchDate,
                        _ = t.donations,
                        b = t.donationsPreview,
                        E = t.isActive,
                        S = t.isLoggedIn,
                        C = t.showSocialStats,
                        O = t.signInPath,
                        P = t.stats,
                        I = t.statsFormatted,
                        N = this.state.donationListOverflow,
                        w = b && b.slice(0, 3);
                    if (P && I) {
                        var T = "/f/" + o.params.campaignUrl + "/share" + r.search,
                            M = k.default.createElement(c.SocialStats, {
                                className: "show-for-large mb2x",
                                donors: P.totalDonors,
                                donorsOnClick: this.showDonationsModal,
                                donorsString: I.totalDonorsStr,
                                followers: P.totalFollowers,
                                followersString: I.totalFollowersStr,
                                shares: P.totalShares,
                                sharesString: I.totalSharesStr
                            }),
                            A = k.default.createElement(c.CampaignSidebarNotifications, {
                                status: a,
                                isLoggedIn: S,
                                toSignIn: O
                            }),
                            j = k.default.createElement("div", {
                                className: "p-campaign-share-donate-buttons"
                            }, u && k.default.createElement(v.GradientButton, {
                                className: "mt2x mb2x m-auto",
                                to: T,
                                as: "route",
                                dataElementId: "btn_share",
                                color: "gradient-yellow",
                                layout: "full",
                                iconName: "share"
                            }, p.t("Share")), A, E && u && k.default.createElement(v.GradientButton, {
                                className: "mb2x m-auto",
                                dataElementId: "btn_donate",
                                to: this.getDonateUrl(),
                                shadow: !0,
                                as: "href",
                                color: "gradient-orange",
                                layout: "full",
                                iconName: "donate"
                            }, p.t("Donate now"))),
                            x = r ? "/f/" + o.params.campaignUrl + "/topdonations/" + r.search : "/f/" + o.params.campaignUrl + "/topdonations";
                        return k.default.createElement(d.ErrorBoundary, {
                            type: "suppress"
                        }, k.default.createElement(d.CampaignSidebar, {
                            campaignRecentDonationsTotal: g,
                            campaignRecentDonationsTotalStr: h,
                            campaignLaunchDate: y,
                            inDegradedMode: l,
                            isActive: E,
                            isUserInSameStateAsCampaign: this.getIsUserInSameStateAsCampaign(),
                            campaignStateLabel: n,
                            stats: P,
                            statsFormatted: I,
                            topDonationsModalRoute: x,
                            donations: _,
                            donationsModalRoute: this.getDonationsModalUrl(),
                            donationsPreview: N ? w : b,
                            donationsPreviewOverflow: this.isPreviewOverflow,
                            topSupporters: s,
                            currentUserDonation: m,
                            signedDonationId: f,
                            donationListOverflow: N
                        }, k.default.createElement(k.default.Fragment, null, k.default.createElement(c.ProgressMeter, {
                            className: "o-campaign-sidebar-progress-meter",
                            isActive: E,
                            goal: P.totalGoal,
                            goalAmountString: I.totalGoalStr,
                            raised: P.totalRaised,
                            raisedAmountString: I.totalRaisedStr,
                            sameCurrencyCode: i
                        }), C && M, j)))
                    }
                    return !1
                }, t.prototype.getUpdatesSection = function() {
                    var e = this.props,
                        t = e.showActiveContent,
                        a = e.campaignSideBarProps.stats,
                        n = e.getUpdates,
                        r = e.match,
                        o = e.meta,
                        l = e.title,
                        i = void 0 === l ? "" : l,
                        u = e.updates,
                        s = e.updatesHasNext;
                    return !!(u && u.length && t) && k.default.createElement(d.CampaignUpdates, {
                            campaignTitle: i,
                            campaignUrl: r.params.campaignUrl,
                            donateUrl: this.getDonateUrl(),
                            getUpdates: n,
                            isCharity: null == o ? void 0 : o.isCharity,
                            onClickCompetitorLink: this.onClickCompetitorLink,
                            onBannerViewEvent: this.onBannerViewEvent,
                            onClickUpdateImage: this.onClickUpdateImage,
                            totalUpdates: a ? a.totalUpdates : u ? u.length : 0,
                            updates: u,
                            hasNext: s
                        })
                }, t.prototype.getCampaignComments = function() {
                    var e = this.props,
                        a = e.comments,
                        n = e.totalComments,
                        r = e.commentsHasNext,
                        o = e.getComments,
                        l = e.showActiveContent,
                        i = e.isCommentsInitialized;
                    return !(!l || !i) && k.default.createElement(d.ErrorBoundary, {
                            type: "suppress"
                        }, k.default.createElement("div", {
                            className: "p-campaign-comments"
                        }, k.default.createElement(d.CommentList, {
                            comments: a,
                            donateUrl: this.getDonateUrl(),
                            getComments: o,
                            totalComments: n || 0,
                            maxChars: t.COMMENT_MAX_CHARS,
                            pageSize: t.COMMENTS_PER_PAGE,
                            hasNext: r,
                            onClickCommentImage: this.onClickCommentImage
                        })))
                }, t.prototype.getCampaignDonations = function() {
                    var e,
                        t = this,
                        a = this.props,
                        n = a.campaignSideBarProps,
                        r = a.showActiveContent,
                        o = a.campaignStateLabel,
                        l = a.inDegradedMode,
                        i = a.match,
                        u = a.location,
                        s = a.topSupporters,
                        m = a.currentUserDonation,
                        g = a.signedDonationId,
                        h = n.campaignRecentDonationsTotal,
                        y = n.campaignRecentDonationsTotalStr,
                        _ = n.donations,
                        b = n.donationsPreview,
                        E = n.isActive,
                        S = n.stats,
                        C = n.statsFormatted,
                        O = this.state.donationListOverflow,
                        P = o === f.CampaignStatus.TRENDING,
                        I = this.getDonationsModalUrl();
                    e = S.totalDonations > 0 && (S.totalDonations < 6 ? k.default.createElement(k.default.Fragment, null, C.totalDonationsStr) : k.default.createElement(v.Button, {
                        onClick: this.showDonationsModal,
                        className: "text-underline weight-300",
                        dataElementId: "btn_donations"
                    }, C.totalDonationsStr));
                    var N = l ? p.t("See more") : p.t("See all"),
                        w = u ? "/f/" + i.params.campaignUrl + "/topdonations/" + u.search : "/f/" + i.params.campaignUrl + "/topdonations",
                        T = k.default.createElement(v.ChipButton, {
                            as: "route",
                            dataElementId: "btn_donate_topdonations",
                            iconName: "star",
                            to: w
                        }, p.t("See top")),
                        M = k.default.createElement("h2", {
                            className: "heading-3 mb0"
                        }, p.t("Donations") + " ", e && k.default.createElement(k.default.Fragment, null, "(", e, ")")),
                        A = k.default.createElement("div", {
                            className: "flex-container align-justify"
                        }, M, T),
                        D = !!(_ && _.length > 5) && k.default.createElement(v.SecondaryButton, {
                            as: "route",
                            to: I,
                            className: "hide-for-large mt3x max-width-100",
                            color: "green",
                            dataElementId: "btn_donate_moredonations",
                            layout: "full-for-small",
                            size: "medium"
                        }, N);
                    if (S && C && r) {
                        var G = b && k.default.createElement(d.DonationList, {
                                isCampaignTrending: P,
                                className: "p-campaign-page-donations",
                                items: b
                            }),
                            F = P && s ? k.default.createElement(j.default, {
                                className: "p-campaign-page-donations",
                                topSupporters: s,
                                topDonationsModalRoute: w,
                                donationsModalRoute: I,
                                currentUserDonation: m,
                                signedDonationId: g,
                                donationListOverflow: O
                            }) : G,
                            R = this.isPreviewOverflow ? 3 : 6,
                            U = !!_ && _.length >= R,
                            L = function() {
                                t.wrapperDiv && U && (t.wrapperDiv.style.maxHeight = t.wrapperDiv.clientHeight + "px", t.wrapperDiv.style.overflow = "hidden")
                            },
                            B = function(e) {
                                return void 0 === e && (e = !1), k.default.createElement(c.CampaignMetadataIndicator, {
                                    willRenderMetadata: e ? L : void 0,
                                    onViewProximityIndicator: t.onViewProximityIndicator,
                                    onViewVelocityIndicator: t.onViewVelocityIndicator,
                                    recentDonors: h,
                                    recentDonorsStr: y,
                                    showProximity: t.getIsUserInSameStateAsCampaign(),
                                    showVelocity: !!h,
                                    totalDonors: S.totalDonors,
                                    totalDonorsStr: C.totalDonorsStrNoAbbrev
                                })
                            },
                            H = B(!P || !s),
                            z = (null == _ ? void 0 : _.length) || (null == b ? void 0 : b.length) || 0;
                        return k.default.createElement(d.ErrorBoundary, {
                            type: "suppress"
                        }, k.default.createElement("div", {
                            className: "p-campaign-donations hide-for-large"
                        }, z >= 10 ? A : M, k.default.createElement(v.Rule, {
                            type: "horizontal",
                            gutterPull: !0
                        }), k.default.createElement("div", {
                            ref: function(e) {
                                return e && (t.wrapperDiv = e)
                            }
                        }, k.default.createElement("div", {
                            className: "p-campaign-metadata-indicator"
                        }, H), !!z && F, k.default.createElement(x.EarlySupporterCallout, {
                            isActive: E,
                            donationsLength: z,
                            isShort: !!O
                        })), D))
                    }
                    return !1
                }, t.prototype.getCampaignMembers = function() {
                    var e = this.props,
                        t = e.campaignMembersProps,
                        a = e.campaignMembersHeaderProps,
                        n = e.location,
                        r = e.match;
                    return k.default.createElement(d.ErrorBoundary, {
                        type: "suppress"
                    }, k.default.createElement("div", {
                        className: "p-campaign-members"
                    }, t && k.default.createElement(d.CampaignMembers, o({}, t, {
                        organizer: t.organizer,
                        contactOrganizerLink: "/f/" + r.params.campaignUrl + "/contact/organizer" + n.search,
                        seeMoreTeamMembersLink: "/f/" + r.params.campaignUrl + "/team" + n.search
                    }), k.default.createElement(c.CampaignMembersHeader, o({}, a)))))
                }, t.prototype.getStickyCta = function() {
                    var e = this.props,
                        t = e.match;
                    return !!e.campaignSideBarProps.isActive && k.default.createElement(v.Portal, {
                            elementId: "alert-portal"
                        }, k.default.createElement(c.StickyCta, {
                            dataElementId: "btn_donate_sticky",
                            on: this.state.stickyCtaIsOpen,
                            to: this.getDonateUrl(),
                            shareUrl: "/f/" + t.params.campaignUrl + "/share"
                        }, p.t("Donate")))
                }, t.prototype.storeSignedDonation = function() {
                    var e = this.props,
                        t = e.fundUrl,
                        a = void 0 === t ? "" : t,
                        n = e.getReceiptFromEncryptedDonationID,
                        r = e.getReceiptFromLocalStorage,
                        o = I.default.parse(location.search).d || m.getAndCleanSignedDonationsFromLocalStorage(a);
                    o ? n(encodeURIComponent(o)) : r(a)
                }, t.COMMENTS_PER_PAGE = 10, t.COMMENT_MAX_CHARS = 250, t.UPDATES_PER_PAGE = 3, t
            }(k.default.Component);
        t.default = D
    },
    iDcq: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("RmWU");
        Object.defineProperty(t, "CommentHeader", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    iEP1: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("a/8C");
        Object.defineProperty(t, "GalleryFooter", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    iYtb: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("Rh+W");
        Object.defineProperty(t, "PrintPosterPage", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        });
        var r = a("7EE2");
        Object.defineProperty(t, "PrintPosterPageConnected", {
            enumerable: !0,
            get: function() {
                return r.default
            }
        })
    },
    ic3c: function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = a("/MKj"),
            l = a("p1Kg"),
            i = r(a("4M3g")),
            u = r(a("gGNt")),
            s = a("cS5l"),
            c = o.connect((function() {
                return function(e, t) {
                    return {
                        fetch: s.makeShouldFetchMore(t.match.params.contentType)(e) || u.default.defaultProps.fetch,
                        items: s.makeGetImageGalleryByContent(t.match.params.contentType, t.match.params.contentId)(e),
                        totalItems: s.makeGetImageGalleryCountByContent(t.match.params.contentType, t.match.params.contentId)(e)
                    }
                }
            }), (function(e, t) {
                return {
                    getPhotos: function(a) {
                        var r = t.match.params.campaignUrl;
                        switch (t.match.params.contentType) {
                        case l.GalleryType.campaign:
                            var o = l.photoTypes.UPDATE;
                            e({
                                payload: n({
                                    campaignUrl: r,
                                    photoType: o
                                }, a),
                                type: i.default.GET_FEED_PHOTOS_IN_PROGRESS
                            });
                        case l.GalleryType.comment:
                            e({
                                payload: n({
                                    campaignUrl: r
                                }, a),
                                type: i.default.GET_FEED_COMMENTS_IN_PROGRESS
                            });
                        case l.GalleryType.community:
                            o = l.photoTypes.CONTENT;
                            e({
                                payload: n({
                                    campaignUrl: r,
                                    photoType: o
                                }, a),
                                type: i.default.GET_FEED_PHOTOS_IN_PROGRESS
                            });
                        case l.GalleryType.update:
                            e({
                                payload: n({
                                    campaignUrl: r
                                }, a),
                                type: i.default.GET_FEED_UPDATES_IN_PROGRESS
                            })
                        }
                    },
                    onClose: function() {
                        t.history.push("/f/" + t.match.params.campaignUrl + t.location.search)
                    }
                }
            }))(u.default);
        t.default = c
    },
    iyZW: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("TSYQ")),
            o = n(a("q1tI")),
            l = a("zIs9"),
            i = a("yf/i"),
            u = n(a("f2my")),
            s = n(a("h+jv")),
            c = n(a("LAPe")),
            d = n(a("1PkY")),
            m = n(a("pgMs")),
            f = n(a("F9nm")),
            p = n(a("Z29w")),
            g = n(a("AePS")),
            h = n(a("zj8x"));
        a("9JMi"),
        t.default = function(e) {
            var t = e.action,
                a = e.btnText,
                n = e.dataElementId,
                y = e.description,
                _ = e.disableClick,
                b = e.hideBtn,
                v = e.icon,
                E = e.linkAs,
                S = e.url,
                C = "";
            switch (v) {
            case "comment":
                C = s.default;
                break;
            case "donate":
                C = u.default;
                break;
            case "facebook":
                C = c.default;
                break;
            case "join":
                C = d.default;
                break;
            case "manage":
                C = m.default;
                break;
            case "profile":
                C = f.default;
                break;
            case "receipt":
                C = p.default;
                break;
            case "share":
                C = g.default;
                break;
            case "widget":
                C = h.default
            }
            var O = r.default("m-guidance-button-container", "flex-container", "align-bottom", {
                    invisible: b
                }),
                P = r.default("m-guidance-card", "flex-container", "flex-dir-column", "text-no-underline", {
                    "m-guidance-card-disabled": _
                });
            return o.default.createElement(i.Link, {
                as: E || "href",
                className: P,
                dataElementId: n,
                onClick: t,
                to: S
            }, o.default.createElement("div", {
                className: "m-guidance-card-content flex-container align-top"
            }, o.default.createElement("img", {
                src: C,
                className: "m-guidance-card-icon"
            }), o.default.createElement("p", {
                className: "m-guidance-card-text color-dark-gray text-small"
            }, y)), o.default.createElement("div", {
                className: O
            }, l.guidanceCardIcon.DONATE === v ? o.default.createElement(i.PrimaryButton, {
                color: "yellow",
                layout: "full",
                size: "medium"
            }, a) : o.default.createElement(i.SecondaryButton, {
                layout: "full",
                size: "medium"
            }, a)))
        }
    },
    j0Pi: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("TSYQ")),
            o = n(a("q1tI")),
            l = a("yf/i"),
            i = a("YgTb");
        a("gTei"),
        t.default = function(e) {
            var t = e.className,
                a = r.default(t, "o-logo-only-nav");
            return o.default.createElement("nav", {
                className: a
            }, o.default.createElement(l.Link, {
                ariaLabel: i.t("GoFundMe homepage"),
                as: "href",
                to: "/",
                dataElementId: "btn_nav_gfm_logo"
            }, o.default.createElement(l.Logo, {
                name: "GoFundMe",
                className: "o-logo-only-nav-logo"
            })))
        }
    },
    j6MG: function(e, t, a) {
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
            r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            o = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && n(t, e, a);
                return r(t, e), t
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = o(a("q1tI")),
            i = a("wQmL"),
            u = a("yf/i"),
            s = a("z+lN"),
            c = a("YgTb"),
            d = a("V20B");
        t.default = function(e) {
            var t = e.handleSubmit,
                a = e.reCaptchaSiteKey,
                n = e.pristine,
                r = e.invalid,
                o = e.submitting,
                m = e.onSuccess,
                f = e.onFailed,
                p = e.submitFailed,
                g = e.submitSucceeded;
            return l.useEffect((function() {
                g && m && m()
            }), [g]), l.useEffect((function() {
                p && f && f()
            }), [p]), l.default.createElement(i.Form, {
                onSubmit: t(d.SubmitHelper.SubmitContactFormDefault)
            }, l.default.createElement(i.Field, {
                component: s.ReduxZoomField,
                type: "text",
                className: "mb4x",
                id: "name",
                name: "name",
                label: c.t("Your Name")
            }), l.default.createElement(i.Field, {
                component: s.ReduxZoomField,
                type: "text",
                className: "mb4x",
                id: "email",
                name: "email",
                label: c.t("Your Email")
            }), l.default.createElement(i.Field, {
                component: s.ReduxZoomField,
                type: "text",
                className: "mb4x",
                id: "email2",
                name: "email2",
                label: c.t("Confirm Email")
            }), l.default.createElement(i.Field, {
                component: s.ReduxZoomField,
                type: "text",
                className: "mb4x",
                id: "subject",
                name: "subject",
                label: c.t("Message Subject")
            }), l.default.createElement(i.Field, {
                component: s.ReduxZoomField,
                type: "textarea",
                className: "mb4x",
                id: "message",
                name: "message",
                label: c.t("Your Message")
            }), a && l.default.createElement(i.Field, {
                component: s.ReduxReCaptchaField,
                id: "captchaResponse",
                name: "captchaResponse",
                siteKey: a,
                className: "mb4x"
            }), l.default.createElement(u.Button, {
                className: "mb4x",
                fill: "solid-green",
                size: "large",
                type: "submit",
                dataElementId: "btn_contact_form_default_submit",
                disabled: n || o || r
            }, o ? l.default.createElement(u.LoadingDots, {
                color: "white",
                size: "large"
            }) : c.t("Send Email")))
        }
    },
    jGEM: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("xewJ");
        Object.defineProperty(t, "UnknownError", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    jQuR: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("Njoa");
        Object.defineProperty(t, "CompetitorBanner", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    jSvq: function(e, t, a) {
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
            r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            o = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && n(t, e, a);
                return r(t, e), t
            },
            l = this && this.__read || function(e, t) {
                var a = "function" == typeof Symbol && e[Symbol.iterator];
                if (!a)
                    return e;
                var n,
                    r,
                    o = a.call(e),
                    l = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(n = o.next()).done;)
                        l.push(n.value)
                } catch (i) {
                    r = {
                        error: i
                    }
                } finally {
                    try {
                        n && !n.done && (a = o.return) && a.call(o)
                    } finally {
                        if (r)
                            throw r.error
                    }
                }
                return l
            },
            i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = i(a("TSYQ")),
            s = o(a("q1tI")),
            c = a("wE+H"),
            d = a("W+/n"),
            m = a("yf/i"),
            f = a("p1Kg"),
            p = a("YgTb");
        a("oXL0"),
        t.default = function(e) {
            var t = l(s.useState(!1), 2),
                a = t[0],
                n = t[1],
                r = e.author,
                o = e.className,
                i = e.currentIndex,
                g = e.media,
                h = e.onNextImage,
                y = e.onPrevImage,
                _ = e.text,
                b = e.timeCreated,
                v = e.totalCount,
                E = u.default(o, "m-gallery-content"),
                S = function() {
                    n(!a)
                };
            s.useEffect((function() {
                n(!1)
            }), [g]);
            var C = u.default("m-gallery-content-info", {
                    "m-gallery-content-info--is-open": a
                }),
                O = u.default("show-for-large", "m-gallery-content-arrow", {
                    hide: v <= 1
                });
            return s.default.createElement("div", {
                className: E
            }, s.default.createElement(m.ArrowButton, {
                "aria-label": p.t("Previous image"),
                className: O + " m-gallery-content-arrow--left",
                dataElementId: "btn_content_media_viewer_scroll",
                direction: "left",
                fill: "hollow-white",
                onClick: y
            }), s.default.createElement(d.Gesture, {
                className: "m-gallery-content-inner",
                onSwipeRightToLeft: h,
                onSwipeLeftToRight: y
            }, s.default.createElement("div", {
                className: "m-gallery-content-image"
            }, !g.mediaId || g.mediaType !== c.mediaTypes.YOUTUBE && g.mediaType !== c.mediaTypes.VIMEO ? s.default.createElement(m.Image, {
                url: g.image.url
            }) : s.default.createElement(m.Video, {
                mediaId: g.mediaId,
                mediaType: g.mediaType
            })), s.default.createElement("div", {
                className: C
            }, s.default.createElement(m.PersonInfo, {
                anonText: p.t("Anonymous"),
                className: "show-for-large m-gallery-content-author",
                person: r,
                layout: "stacked",
                userRoleStrings: f.getUserRoleStrings()
            }, s.default.createElement("div", {
                className: "text-small"
            }, r.role, r.role && b ? s.default.createElement("span", {
                className: "dot-sep"
            }, "•") : void 0, b)), s.default.createElement("div", {
                className: "m-gallery-content-text"
            }, _ ? s.default.createElement(m.ReadMore, {
                closeText: p.t("Show less"),
                maxChars: 75,
                maxCharsDesktop: 190,
                onClick: S,
                collapseIconName: "minus",
                expandButtonText: p.t("Show more"),
                initialExpanded: a
            }, _) : s.default.createElement("div", {
                className: "hide-for-large"
            }, b)), s.default.createElement("span", {
                className: "m-gallery-content-index show-for-large text-small"
            }, i + 1, "/", v))), s.default.createElement(m.ArrowButton, {
                "aria-label": p.t("Next image"),
                className: O + " m-gallery-content-arrow--right",
                dataElementId: "btn_content_media_viewer_scroll",
                direction: "right",
                fill: "hollow-white",
                onClick: h
            }))
        }
    },
    jmiZ: function(e, t, a) {
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
            r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            o = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && n(t, e, a);
                return r(t, e), t
            },
            l = this && this.__read || function(e, t) {
                var a = "function" == typeof Symbol && e[Symbol.iterator];
                if (!a)
                    return e;
                var n,
                    r,
                    o = a.call(e),
                    l = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(n = o.next()).done;)
                        l.push(n.value)
                } catch (i) {
                    r = {
                        error: i
                    }
                } finally {
                    try {
                        n && !n.done && (a = o.return) && a.call(o)
                    } finally {
                        if (r)
                            throw r.error
                    }
                }
                return l
            },
            i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = i(a("TSYQ")),
            s = o(a("q1tI")),
            c = a("yf/i");
        t.default = function(e) {
            var t = e.buttonContent,
                a = e.className,
                n = e.dataElementId,
                r = e.revealContent,
                o = u.default(a, "m-reveal"),
                i = u.default("m-share-list", "list-unstyled"),
                d = u.default("m-share-list-item", "list-unstyled"),
                m = l(s.useState(!1), 2),
                f = m[0],
                p = m[1];
            return s.default.createElement("div", {
                className: o
            }, f ? s.default.createElement("ul", {
                className: i
            }, r.map((function(e, t) {
                return s.default.createElement("li", {
                    className: d,
                    key: t
                }, e)
            }))) : s.default.createElement(c.Button, {
                className: "m-reveal-button",
                dataElementId: n,
                layout: "full",
                onClick: function() {
                    return p(!0)
                }
            }, t))
        }
    },
    ju3F: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("q1tI")),
            o = a("yf/i"),
            l = a("z+lN"),
            i = a("YgTb");
        t.default = function(e) {
            var t = e.charity;
            return r.default.createElement(l.CharityModal, {
                title: i.t("Donations raised benefit:"),
                subtitle: i.t("How charity fundraisers work"),
                organizerInfoMeta: function() {
                    if (t && t.meta)
                        return r.default.createElement("div", {
                            className: "color-gray mb4x"
                        }, r.default.createElement("div", null, t.meta.roleString), r.default.createElement("div", null, t.meta.city), r.default.createElement("div", null, "RCN: ", t.meta.ein))
                }(),
                charityOrganization: t.organization
            }, r.default.createElement(r.default.Fragment, null, r.default.createElement("ol", null, r.default.createElement("li", {
                className: "m-campaign-members-main-modal-item"
            }, r.default.createElement(i.Trans, null, "You are donating to", r.default.createElement(o.HtmlSpace, {
                type: "non-breaking"
            }), r.default.createElement(o.Link, {
                as: "href",
                rel: "noopener",
                target: "_blank",
                to: "https://www.paypal.com/uk/webapps/mpp/givingfund/policies/donor-terms-of-service"
            }, "PayPal Giving Fund"), r.default.createElement(o.HtmlSpace, {
                type: "non-breaking"
            }), "UK, a registered charity (No. 1110538), which will email you a receipt for your donation and claim Gift Aid where eligible.")), r.default.createElement("li", {
                className: "m-campaign-members-main-modal-item"
            }, i.t("The charity will typically receive the funds from PayPal Giving Fund within 15-45 days of your donation if the charity has enrolled (or 90 days if the charity has not yet enrolled). Unlike other platforms, 100% of any Gift Aid will go to the charity as well."))), r.default.createElement("div", {
                className: "text-small color-gray"
            }, r.default.createElement(i.Trans, null, r.default.createElement(o.HtmlSpace, {
                type: "breaking"
            }), "*In very limited cases, a recommended charity may cease to meet PayPal Giving Fund's legal or other eligibility", r.default.createElement(o.HtmlSpace, {
                type: "non-breaking"
            }), r.default.createElement(o.Link, {
                as: "href",
                rel: "noopener",
                target: "_blank",
                to: "https://www.paypal.com/uk/webapps/mpp/givingfund/policies"
            }, "requirements"), r.default.createElement(o.HtmlSpace, {
                type: "non-breaking"
            }), ". In such cases, PayPal Giving Fund will reassign the funds to a similar charity, and (wherever possible) seek a new recommendation from donors."))))
        }
    },
    jyDh: function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            r = this && this.__createBinding || (Object.create ? function(e, t, a, n) {
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
            o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            l = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && r(t, e, a);
                return o(t, e), t
            },
            i = this && this.__read || function(e, t) {
                var a = "function" == typeof Symbol && e[Symbol.iterator];
                if (!a)
                    return e;
                var n,
                    r,
                    o = a.call(e),
                    l = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(n = o.next()).done;)
                        l.push(n.value)
                } catch (i) {
                    r = {
                        error: i
                    }
                } finally {
                    try {
                        n && !n.done && (a = o.return) && a.call(o)
                    } finally {
                        if (r)
                            throw r.error
                    }
                }
                return l
            },
            u = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = u(a("TSYQ")),
            c = l(a("q1tI")),
            d = a("yf/i"),
            m = a("K9qA");
        function f(e) {
            var t,
                a = e.ariaLabel,
                r = e.button,
                o = e.className,
                l = e.contentClasses,
                u = e.children,
                f = e.theme,
                p = void 0 === f ? "light" : f,
                g = e.hoverTrigger,
                h = e.open,
                y = e.leftOverflow,
                _ = i(c.useState(!1), 2),
                b = _[0],
                v = _[1],
                E = i(c.useState(""), 2),
                S = E[0],
                C = E[1],
                O = i(c.useState(""), 2),
                P = O[0],
                I = O[1],
                k = i(c.useState({}), 2),
                N = k[0],
                w = k[1],
                T = i(c.useState(""), 2),
                M = T[0],
                A = T[1],
                j = c.default.createRef(),
                x = function() {
                    return v(!b)
                },
                D = function(e) {
                    e.target && t && !t.contains(e.target) && x()
                };
            c.useEffect((function() {
                if (h && v(!1), m.canUseDom()) {
                    var e = window.innerWidth,
                        a = e - 32,
                        n = j.current;
                    n && (t = n);
                    var r = n && n.getBoundingClientRect().top,
                        o = n && n.getBoundingClientRect().right,
                        l = n && n.getBoundingClientRect().left,
                        i = n && n.parentElement,
                        u = i && i.getBoundingClientRect().left,
                        s = r && r < 0,
                        c = o && o > e,
                        d = l && l < 0 || y;
                    if (b) {
                        e < 760 && setTimeout((function() {
                            w({
                                height: "initial",
                                left: "-" + (u && u - 16) + "px",
                                opacity: 1,
                                width: a + "px"
                            }),
                            s && C("bottom"),
                            A("m-popover-button--pop-arrow")
                        }), 10),
                        e > 760 && setTimeout((function() {
                            w({
                                opacity: 1
                            }),
                            s && c ? (I("right"), C("bottom")) : s && d ? (I("left"), C("bottom")) : d ? I("left") : c ? I("right") : s ? C("bottom") : (I("top"), I("center")),
                            A("m-popover-button--pop-arrow")
                        }), 10);
                        var f = document.getElementById("root");
                        f && (f.tabIndex = 0),
                        document.addEventListener("click", D)
                    } else
                        C("top"),
                        I("center"),
                        w({
                            opacity: 0
                        }),
                        A("")
                }
                return function() {
                    if (m.canUseDom()) {
                        var e = document.getElementById("root");
                        e && e.removeAttribute("tabIndex"),
                        document.removeEventListener("click", D)
                    }
                }
            }), [b, h]);
            var G = g ? {
                    onClick: x,
                    onMouseEnter: x,
                    onMouseLeave: x
                } : {
                    onClick: x
                },
                F = s.default(o, "m-popover", "m-popover--" + r.layout, "m-popover--" + p),
                R = s.default(l, "m-popover-content", "m-popover-content--" + S, "m-popover-content--" + P),
                U = s.default(r.className, "m-popover-button", M);
            return c.default.createElement("div", {
                className: F
            }, (b || h) && c.default.createElement("div", {
                className: R,
                ref: j,
                style: N
            }, u), c.default.createElement(d.Button, n({
                ariaExpanded: b,
                ariaLabel: a,
                className: U,
                fill: r.fill,
                layout: r.layout,
                size: r.size
            }, G), r.children))
        }
        a("lav6"),
        f.defaultProps = {
            leftOverflow: !1,
            theme: "light"
        },
        t.default = f
    },
    k08y: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    k4HN: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("+VX0");
        Object.defineProperty(t, "ForgotPasswordPartialConnected", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    k546: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("q1tI")),
            o = a("yf/i"),
            l = a("utQf"),
            i = a("YgTb");
        t.default = function(e) {
            var t = e.charity,
                a = t.organization;
            return r.default.createElement(l.CharityModal, {
                title: i.t("Donations raised benefit:"),
                subtitle: i.t("How charity fundraisers work"),
                organizerInfoMeta: function() {
                    if (t && t.meta)
                        return r.default.createElement("div", {
                            className: "color-gray mb4x"
                        }, r.default.createElement("div", null, t.meta.roleString), r.default.createElement("div", null, t.meta.city), r.default.createElement("div", null, "ABN: ", t.meta.ein))
                }(),
                charityOrganization: a
            }, r.default.createElement(r.default.Fragment, null, r.default.createElement("ol", null, r.default.createElement("li", {
                className: "m-campaign-members-main-modal-item"
            }, r.default.createElement(i.Trans, null, "Your donation is made to PayPal Giving Fund Australia (ABN 65 105 950 945), a Public Ancillary Fund and a charity registered with the Australian Charities and Not-for-profits Commission, subject to its", r.default.createElement(o.HtmlSpace, {
                type: "breaking"
            }), r.default.createElement(o.Link, {
                as: "href",
                rel: "noopener",
                target: "_blank",
                to: "https://www.paypal.com/au/webapps/mpp/givingfund/policies/donor-terms-of-service"
            }, "terms"), ".")), r.default.createElement("li", {
                className: "m-campaign-members-main-modal-item"
            }, r.default.createElement(i.Trans, null, "While GoFundMe does not have a platform fee, PayPal Giving Fund Australia receives your donation after deduction of transaction", r.default.createElement(o.HtmlSpace, {
                type: "breaking"
            }), r.default.createElement(o.Link, {
                as: "href",
                rel: "noopener",
                target: "_blank",
                to: "https://www.gofundme.com/c/free-fundraising"
            }, "fees"), r.default.createElement(o.HtmlSpace, {
                type: "breaking"
            }), "and will grant funds to your recommended charity on a monthly basis.*"))), r.default.createElement("div", {
                className: "text-small color-gray"
            }, r.default.createElement(i.Trans, null, "*If, after reasonable efforts, PayPal Giving Fund Australia cannot deliver donations to this", r.default.createElement(o.HtmlSpace, {
                type: "breaking"
            }), "charity, it will grant funds to another charity per PayPal Giving Fund Australia's", r.default.createElement(o.HtmlSpace, {
                type: "breaking"
            }), r.default.createElement(o.Link, {
                as: "href",
                rel: "noopener",
                target: "_blank",
                to: "https://www.paypal.com/au/webapps/mpp/givingfund/policies"
            }, "policies"), "."))))
        }
    },
    k5Qd: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("BW/n");
        Object.defineProperty(t, "CampaignUpdates", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    kDgB: function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            r = this && this.__createBinding || (Object.create ? function(e, t, a, n) {
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
            o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            l = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && r(t, e, a);
                return o(t, e), t
            },
            i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = l(a("q1tI")),
            s = a("+Ded"),
            c = i(a("lUKF"));
        t.default = function(e) {
            return u.useEffect((function() {
                s.trackEvents.push({
                    type: "mp_page_view",
                    viewId: "lb_sign-up_email"
                })
            }), []), u.default.createElement(c.default, n({}, e))
        }
    },
    kHMp: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("TSYQ")),
            o = n(a("q1tI")),
            l = a("yf/i"),
            i = a("p1Kg"),
            u = a("YgTb");
        function s(e) {
            var t,
                a = e.className,
                n = e.status,
                s = e.toSignIn,
                c = e.isLoggedIn,
                d = r.default(a, "m-campaign-sidebar-notification");
            return n === i.CampaignStatus.CLOSED ? t = u.t("The organizer has currently disabled new donations to this fundraiser.") : n === i.CampaignStatus.DEACTIVATED && (t = c ? u.t("This fundraiser has been deactivated by the organizer.") : o.default.createElement(u.Trans, null, "This fundraiser is no longer accepting donations. If you are the organizer, beneficiary, team member, or donor,", o.default.createElement(l.HtmlSpace, {
                type: "non-breaking"
            }), o.default.createElement(l.Link, {
                as: "route",
                dataElementId: "btn_deactivated_signin",
                to: s,
                rel: "nofollow"
            }, "sign in"), o.default.createElement(l.HtmlSpace, {
                type: "non-breaking"
            }), "to see additional information.")), t ? o.default.createElement(l.Well, {
                className: d
            }, t) : o.default.createElement(o.default.Fragment, null)
        }
        a("aIUD"),
        s.defaultProps = {
            toSignIn: "/sign-in"
        },
        t.default = s
    },
    kred: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("q1tI")),
            o = a("yf/i"),
            l = a("YgTb");
        a("ZP+k"),
        t.default = function(e) {
            var t = e.charityOrganization,
                a = e.children,
                n = e.organizerInfoMeta,
                i = e.subtitle,
                u = e.title;
            return r.default.createElement(o.Toggle, null, (function(e) {
                var s = e.on,
                    c = e.setOn,
                    d = e.setOff;
                return r.default.createElement(r.default.Fragment, null, r.default.createElement(o.Link, {
                    dataElementId: "btn_charity_learn-more",
                    className: "text-small m-charity-modal-button",
                    onClick: c
                }, l.t("Learn more")), r.default.createElement(o.Modal, {
                    isOpen: s,
                    onClose: d
                }, r.default.createElement("div", {
                    className: "mb4x"
                }, u && r.default.createElement("h2", null, u), r.default.createElement(o.OrganizationInfo, {
                    organization: t,
                    verified: !0
                }, n), i && r.default.createElement("h3", {
                    className: "heading-4"
                }, i), a)))
            }))
        }
    },
    l2P8: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("NZHY");
        Object.defineProperty(t, "ContactSuggestPartial", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        }),
        Object.defineProperty(t, "ContactSuggestPartialInput", {
            enumerable: !0,
            get: function() {
                return n.ContactSuggestPartialInput
            }
        }),
        Object.defineProperty(t, "ContactSuggestPartialParams", {
            enumerable: !0,
            get: function() {
                return n.ContactSuggestPartialParams
            }
        }),
        Object.defineProperty(t, "ContactSuggestPartialProps", {
            enumerable: !0,
            get: function() {
                return n.ContactSuggestPartialProps
            }
        }),
        Object.defineProperty(t, "ContactSuggestPartialRouteProps", {
            enumerable: !0,
            get: function() {
                return n.ContactSuggestPartialRouteProps
            }
        });
        var r = a("6I3m");
        Object.defineProperty(t, "ContactSuggestPartialConnected", {
            enumerable: !0,
            get: function() {
                return r.default
            }
        })
    },
    l2bq: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("1yCK");
        Object.defineProperty(t, "DonationList", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    l8Ok: function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            r = this && this.__rest || function(e, t) {
                var a = {};
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var r = 0;
                    for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
                        t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (a[n[r]] = e[n[r]])
                }
                return a
            },
            o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = o(a("TSYQ")),
            i = o(a("q1tI")),
            u = a("GEol");
        a("SS7q");
        var s = o(a("sflh")),
            c = o(a("y6AT"));
        t.default = function(e) {
            var t = e.className,
                a = e.showProximity,
                o = e.showVelocity,
                d = e.willRenderMetadata,
                m = r(e, ["className", "showProximity", "showVelocity", "willRenderMetadata"]),
                f = l.default(t, "m-campaign-metadata-indicator");
            return i.default.useEffect((function() {
                a && e.onViewProximityIndicator && e.onViewProximityIndicator(),
                o && e.onViewVelocityIndicator && e.onViewVelocityIndicator()
            }), [a, o]), o && a ? (null == d || d(), i.default.createElement(u.SlideIn, {
                className: f
            }, i.default.createElement("div", {
                className: "m-campaign-metadata-indicator-slide-deck-animation"
            }, i.default.createElement(c.default, n({}, m)), i.default.createElement(s.default, null)))) : o ? (null == d || d(), i.default.createElement(u.SlideIn, {
                className: f
            }, i.default.createElement(c.default, n({}, m)))) : a ? (null == d || d(), i.default.createElement(u.SlideIn, {
                className: f
            }, i.default.createElement(s.default, null))) : i.default.createElement(i.default.Fragment, null)
        }
    },
    l8Xu: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("mhGt");
        Object.defineProperty(t, "CampaignMembersPartner", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    lQkJ: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    lRA5: function(e, t, a) {
        "use strict";
        var n = this && this.__awaiter || function(e, t, a, n) {
                return new (a || (a = Promise))((function(r, o) {
                    function l(e) {
                        try {
                            u(n.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function i(e) {
                        try {
                            u(n.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function u(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value, t instanceof a ? t : new a((function(e) {
                            e(t)
                        }))).then(l, i)
                    }
                    u((n = n.apply(e, t || [])).next())
                }))
            },
            r = this && this.__generator || function(e, t) {
                var a,
                    n,
                    r,
                    o,
                    l = {
                        label: 0,
                        sent: function() {
                            if (1 & r[0])
                                throw r[1];
                            return r[1]
                        },
                        trys: [],
                        ops: []
                    };
                return o = {
                    next: i(0),
                    throw: i(1),
                    return: i(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;
                function i(o) {
                    return function(i) {
                        return function(o) {
                            if (a)
                                throw new TypeError("Generator is already executing.");
                            for (; l;)
                                try {
                                    if (a = 1, n && (r = 2 & o[0] ? n.return : o[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, o[1])).done)
                                        return r;
                                    switch (n = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        r = o;
                                        break;
                                    case 4:
                                        return l.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        l.label++,
                                        n = o[1],
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = l.ops.pop(),
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(r = l.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                            l.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && l.label < r[1]) {
                                            l.label = r[1],
                                            r = o;
                                            break
                                        }
                                        if (r && l.label < r[2]) {
                                            l.label = r[2],
                                            l.ops.push(o);
                                            break
                                        }
                                        r[2] && l.ops.pop(),
                                        l.trys.pop();
                                        continue
                                    }
                                    o = t.call(e, l)
                                } catch (i) {
                                    o = [6, i],
                                    n = 0
                                } finally {
                                    a = r = 0
                                }
                            if (5 & o[0])
                                throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, i])
                    }
                }
            },
            o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = o(a("cr+I")),
            i = a("/MKj"),
            u = a("YgTb"),
            s = a("C0Xu"),
            c = a("+Ded"),
            d = o(a("p48P")),
            m = a("dpDq"),
            f = o(a("EcZt")),
            p = a("omnk"),
            g = o(a("4M3g")),
            h = a("wQmL"),
            y = o(a("sDHT")),
            _ = function(e) {
                return e.location.pathname.replace(/\/?sign-in$/, "")
            },
            b = h.reduxForm({
                form: "signInEmail"
            })(y.default),
            v = i.connect((function() {
                var e = p.makeGetFacebookId(),
                    t = p.makeGetFacebookToken(),
                    a = m.makeGetCaptchaRequired(),
                    n = m.makeGetCaptchaValid(),
                    r = m.makeGetCaptchaValidating(),
                    o = m.makeGetInvisibleRecaptchaKey(),
                    l = m.makeGetReCaptchaToken(),
                    i = p.makeIsFacebookConnecting();
                return function(s, c) {
                    var d = t(s),
                        m = e(s),
                        f = a(s),
                        p = n(s),
                        g = r(s),
                        h = o(s),
                        y = i(s),
                        _ = l(s),
                        b = u.t("Sign in");
                    return "?follow" === c.location.search ? b = u.t("Sign in to follow this fundraiser") : "?comment" === c.location.search && (b = u.t("Sign in to post your comment")), {
                        facebookId: m,
                        facebookToken: d,
                        isCaptchaRequired: f,
                        isCaptchaValid: p,
                        isCaptchaValidating: g,
                        isFacebookConnecting: y,
                        reCaptchaSiteKey: h,
                        reCaptchaToken: _,
                        showSignUp: "?help" !== c.location.search,
                        title: b
                    }
                }
            }), (function(e, t) {
                return {
                    getCaptcha: function() {
                        e({
                            type: d.default.GET_CAPTCHA_IN_PROGRESS
                        })
                    },
                    makeOnSuccess: function(a) {
                        return function(o) {
                            return n(void 0, void 0, void 0, (function() {
                                var i,
                                    u,
                                    d,
                                    m;
                                return r(this, (function(p) {
                                    switch (p.label) {
                                    case 0:
                                        return (i = null === (m = l.default.parse(t.location.search)) || void 0 === m ? void 0 : m.teamInvite) ? (u = 0 !== o.user_id, d = u ? f.default.ACCEPT_TEAM_INVITATION : f.default.ACCEPT_TEAM_INVITATION_AS_PERSON, u || a !== s.SignInSignUpType.EMAIL || c.trackEvents.push({
                                            completionType: "email",
                                            type: "cp_user_signin_success_callback"
                                        }), e({
                                            onSuccess: function() {
                                                return n(void 0, void 0, void 0, (function() {
                                                    return r(this, (function(a) {
                                                        switch (a.label) {
                                                        case 0:
                                                            return [4, e({
                                                                type: g.default.GET_FEED_IDENTITY_IN_PROGRESS
                                                            })];
                                                        case 1:
                                                            return a.sent(), c.trackEvents.push({
                                                                type: "accepted_team_invite"
                                                            }), t.history.push(_(t)), [2]
                                                        }
                                                    }))
                                                }))
                                            },
                                            payload: {
                                                campaign: t.match.params.campaignUrl,
                                                invitationHash: i
                                            },
                                            type: d
                                        }), [3, 3]) : [3, 1];
                                    case 1:
                                        return [4, e({
                                            type: g.default.GET_FEED_IDENTITY_IN_PROGRESS
                                        })];
                                    case 2:
                                        p.sent(),
                                        t.history.push(_(t) + t.location.search),
                                        p.label = 3;
                                    case 3:
                                        return [2]
                                    }
                                }))
                            }))
                        }
                    },
                    onClickForgotPassword: function() {
                        t.history.push(_(t) + "/forgot-password" + t.location.search)
                    },
                    onClickSignUp: function() {
                        t.history.push(_(t) + "/sign-up/email" + t.location.search)
                    },
                    onFailureEmail: function(t) {
                        var a = {};
                        if (t && t.error) {
                            var n = t.error;
                            switch (n.code) {
                            case 10001:
                                a._error = u.t("Please check your email & password or please sign in with your Facebook account.");
                                break;
                            case 1e4:
                                a._error = u.t("Please check your email & password");
                                break;
                            case 9001:
                                a._error = "Captcha validation failed." === n.message ? u.t("Captcha challenge failed. Please try again.") : u.t("You exceeded the maximum number of tries. Please try again later.");
                                break;
                            default:
                                a._error = u.t("An error occurred. Please try again later.")
                            }
                            e(h.stopSubmit("signInEmail", a))
                        } else
                            e(h.stopSubmit("signInEmail", {
                                _error: u.t("An error occurred. Please try again later.")
                            }))
                    },
                    onSubmitEmail: function(t, a, n) {
                        e({
                            onFailure: n,
                            onSuccess: a(s.SignInSignUpType.EMAIL),
                            payload: t,
                            type: d.default.SIGN_IN_EMAIL_IN_PROGRESS
                        })
                    },
                    reCaptchaExecute: function() {
                        e({
                            type: d.default.VALIDATE_CAPTCHA_IN_PROGRESS
                        })
                    },
                    setReCaptchaToken: function(t) {
                        e({
                            payload: t,
                            type: d.default.RECAPTCHA_TOKEN_SUCCESS
                        })
                    }
                }
            }))(b);
        t.default = v
    },
    lUKF: function(e, t, a) {
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
            r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            o = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && n(t, e, a);
                return r(t, e), t
            },
            l = this && this.__read || function(e, t) {
                var a = "function" == typeof Symbol && e[Symbol.iterator];
                if (!a)
                    return e;
                var n,
                    r,
                    o = a.call(e),
                    l = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(n = o.next()).done;)
                        l.push(n.value)
                } catch (i) {
                    r = {
                        error: i
                    }
                } finally {
                    try {
                        n && !n.done && (a = o.return) && a.call(o)
                    } finally {
                        if (r)
                            throw r.error
                    }
                }
                return l
            },
            i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = i(a("TSYQ")),
            s = o(a("q1tI")),
            c = a("wQmL"),
            d = a("yf/i"),
            m = a("z+lN"),
            f = a("YgTb"),
            p = a("Vu4q");
        t.default = function(e) {
            var t = e.className,
                a = e.error,
                n = e.handleSubmit,
                r = e.submitting,
                o = e.title,
                i = e.onClickSignIn,
                g = u.default("o-sign-up-email", t),
                h = l(s.useState(""), 2),
                y = h[0],
                _ = h[1],
                b = l(s.useState(!1), 2),
                v = b[0],
                E = b[1],
                S = s.default.createElement(f.Trans, null, "Already have an account?", s.default.createElement(d.HtmlSpace, {
                    type: "breaking"
                }), s.default.createElement(d.Button, {
                    className: "text-underline",
                    onClick: i
                }, "Sign in"));
            return s.default.createElement(m.SusiWrapper, {
                title: o,
                subText: S,
                innerWidthNarrow: !0
            }, s.default.createElement(c.Form, {
                className: g,
                onSubmit: n(p.SignUpSubmit.submitSignUpEmailForm)
            }, !!a && ("10001" === a ? s.default.createElement(d.FieldAlert, {
                className: "mt mb2x",
                status: d.FieldStatus.ERROR
            }, s.default.createElement(f.Trans, null, "Please", s.default.createElement(d.HtmlSpace, {
                type: "non-breaking"
            }), s.default.createElement(d.Button, {
                className: "text-underline",
                onClick: i
            }, "sign in"), s.default.createElement(d.HtmlSpace, {
                type: "non-breaking"
            }), "to access your account.")) : s.default.createElement(d.FieldAlert, {
                className: "mt mb2x",
                status: d.FieldStatus.ERROR
            }, a)), s.default.createElement("div", {
                className: "grid-columns grid-columns--2"
            }, s.default.createElement(c.Field, {
                component: m.ReduxZoomField,
                className: "mb3x",
                dataElementId: "input_signup_firstname",
                id: "firstName",
                name: "firstName",
                type: "text",
                label: f.t("First Name"),
                props: {
                    placeholder: f.t("First Name")
                }
            }), s.default.createElement(c.Field, {
                component: m.ReduxZoomField,
                className: "mb3x",
                dataElementId: "input_signup_lastname",
                id: "lastName",
                name: "lastName",
                type: "text",
                label: f.t("Last Name"),
                props: {
                    placeholder: f.t("Last Name")
                }
            })), s.default.createElement(c.Field, {
                component: m.ReduxZoomField,
                dataElementId: "input_signup_email",
                className: "mb3x",
                id: "email",
                name: "email",
                type: "email",
                label: f.t("Email address"),
                props: {
                    placeholder: f.t("Email address")
                }
            }), s.default.createElement(c.Field, {
                component: m.ReduxZoomField,
                className: "mb3x",
                dataElementId: "input_signup_emailconfirm",
                id: "emailConfirm",
                name: "emailConfirm",
                type: "email",
                label: f.t("Confirm email address"),
                props: {
                    placeholder: f.t("Confirm email address")
                }
            }), s.default.createElement(c.Field, {
                component: m.ReduxZoomField,
                className: "mb3x",
                dataElementId: "input_signup_password",
                type: "password",
                label: f.t("Set password"),
                id: "password",
                name: "password",
                onChange: function(e) {
                    _(e.target.value),
                    E(!0)
                },
                onFocus: function() {
                    return E(!0)
                },
                props: {
                    placeholder: f.t("Set password")
                }
            }), v && s.default.createElement(m.PasswordGuidance, {
                password: y,
                className: "mb3x"
            }), s.default.createElement("div", {
                className: "flex-container align-center"
            }, s.default.createElement(d.Button, {
                type: "submit",
                className: "p-form-button",
                dataElementId: "btn_signup_email",
                fill: "solid-green",
                layout: "inline",
                size: "medium",
                disabled: r
            }, r ? s.default.createElement(d.LoadingDots, {
                color: "white",
                size: "large"
            }) : f.t("Sign up")))))
        }
    },
    lav6: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    "lhM+": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("QPYF");
        Object.defineProperty(t, "ContactSuggestion", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        }),
        Object.defineProperty(t, "ContactSuggestionProps", {
            enumerable: !0,
            get: function() {
                return n.ContactSuggestionProps
            }
        })
    },
    ltUQ: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    lx7X: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("l8Ok");
        Object.defineProperty(t, "CampaignMetadataIndicator", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    m1bS: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    m7Nk: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("NI+L");
        Object.defineProperty(t, "SignUpEmailFormConnected", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    mBZF: function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            r = this && this.__createBinding || (Object.create ? function(e, t, a, n) {
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
            o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            l = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && r(t, e, a);
                return o(t, e), t
            },
            i = this && this.__read || function(e, t) {
                var a = "function" == typeof Symbol && e[Symbol.iterator];
                if (!a)
                    return e;
                var n,
                    r,
                    o = a.call(e),
                    l = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(n = o.next()).done;)
                        l.push(n.value)
                } catch (i) {
                    r = {
                        error: i
                    }
                } finally {
                    try {
                        n && !n.done && (a = o.return) && a.call(o)
                    } finally {
                        if (r)
                            throw r.error
                    }
                }
                return l
            },
            u = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = u(a("TSYQ")),
            c = l(a("q1tI")),
            d = a("yf/i"),
            m = a("dNNZ"),
            f = a("YgTb"),
            p = a("x060");
        t.default = function(e) {
            var t = e.author,
                a = e.className,
                r = e.errors,
                o = e.facebookId,
                l = e.match,
                u = e.onDeleteImage,
                g = e.onSubmit,
                h = e.statusMessage,
                y = e.statusType,
                _ = e.submitting,
                b = e.uploadImage,
                v = e.uploadedImages,
                E = s.default("l-post-donate-comment", a),
                S = i(c.useState(t), 2),
                C = S[0],
                O = S[1];
            return c.useEffect((function() {
                if (t.profileImage) {
                    var e = t.profileImage ? t.profileImage : "";
                    O(n(n({}, t), {
                        facebookId: o,
                        profileImage: o ? p.FacebookSDK.getProfilePicture(o) : e
                    }))
                } else
                    O(n(n({}, t), {
                        facebookId: "",
                        profileImage: ""
                    }))
            }), [o]), c.default.createElement("div", {
                className: E
            }, c.default.createElement("h1", {
                className: "heading-2"
            }, f.t("Show more Support")), c.default.createElement(d.Rule, {
                type: "horizontal"
            }), c.default.createElement(m.CommentFormWithDropZone, {
                author: C,
                className: "mb2x",
                errors: r,
                fundUrl: l.params.campaignUrl,
                images: v,
                onDeleteImage: u,
                onSubmit: g,
                statusMessage: h,
                statusType: y,
                submitting: _,
                uploadImage: b
            }), c.default.createElement(d.Link, {
                as: "route",
                dataElementId: "btn_postdonate_back_to_campaign",
                id: "post-donate-back-to-campaign",
                to: "/f/" + e.match.params.campaignUrl
            }, c.default.createElement("span", null, f.t("Return to campaign"))))
        }
    },
    mDbF: function(e, t, a) {
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
            r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            o = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && n(t, e, a);
                return r(t, e), t
            },
            l = this && this.__read || function(e, t) {
                var a = "function" == typeof Symbol && e[Symbol.iterator];
                if (!a)
                    return e;
                var n,
                    r,
                    o = a.call(e),
                    l = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(n = o.next()).done;)
                        l.push(n.value)
                } catch (i) {
                    r = {
                        error: i
                    }
                } finally {
                    try {
                        n && !n.done && (a = o.return) && a.call(o)
                    } finally {
                        if (r)
                            throw r.error
                    }
                }
                return l
            },
            i = this && this.__spread || function() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e = e.concat(l(arguments[t]));
                return e
            },
            u = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = u(a("TSYQ")),
            c = o(a("q1tI")),
            d = a("+Ded"),
            m = a("yf/i"),
            f = a("z+lN"),
            p = a("dNNZ"),
            g = a("YgTb");
        a("vbwR");
        function h(e) {
            c.useEffect((function() {
                d.trackEvents.push({
                    type: "mp_page_view",
                    viewId: "lb_donation_list"
                })
            }), []);
            var t = e.className,
                a = e.getDonations,
                n = e.pageSize,
                r = e.history,
                o = e.match,
                u = e.donations,
                h = e.location,
                y = e.totalDonations,
                _ = e.hasNext,
                b = e.inDegradedMode,
                v = e.domain,
                E = s.default(t, "l-campaign-donations-modal"),
                S = l(c.useState(e.donations.length), 2),
                C = S[0],
                O = S[1],
                P = new URLSearchParams(h.search).get("member"),
                I = "https://www." + v + "/f/" + o.params.campaignUrl + "/donate" + (P ? "?member=" + P : ""),
                k = function() {
                    a && (a(C, n), O(C + n))
                },
                N = c.default.createElement(m.Button, {
                    dataElementId: "btn_donations_top",
                    fill: "white-shadow",
                    layout: "inline",
                    onClick: function() {
                        r.replace("/f/" + o.params.campaignUrl + "/topdonations" + h.search)
                    },
                    size: "small"
                }, c.default.createElement(c.default.Fragment, null, c.default.createElement(m.UIIcon, {
                    className: "show-for-medium",
                    name: "star"
                }), c.default.createElement("span", {
                    className: "show-for-medium ml"
                }, g.t("See top donations")), c.default.createElement(m.UIIcon, {
                    className: "hide-for-medium",
                    name: "star"
                }), c.default.createElement("span", {
                    className: "hide-for-medium ml"
                }, g.t("Top"))));
            c.useEffect((function() {
                k()
            }), []);
            var w = function() {
                    r.push("/f/" + o.params.campaignUrl + h.search)
                },
                T = "0" !== y ? c.default.createElement(c.default.Fragment, null, c.default.createElement("h2", {
                    className: "heading-5 mb0"
                }, g.t("Donations ({{totalDonations}})", {
                    totalDonations: y
                })), u.length >= 10 && !b && N) : c.default.createElement(c.default.Fragment, null, c.default.createElement("h2", {
                    className: "heading-5 mb0"
                }, g.t("Donations")), u.length >= 10 && !b && N);
            return c.default.createElement(p.ModalDonations, {
                className: E,
                closeTriggerLabel: g.t("Close all donations modal"),
                dataViewId: "lb_donation_list",
                heading: T,
                subHeading: c.default.createElement(f.DonateButton, {
                    className: "mt2x mb2x",
                    dataElementId: "btn_donations_donate",
                    url: I
                }),
                isOpen: !0,
                onClose: w
            }, c.default.createElement(p.ExpansionListWrapper, {
                className: "l-campaign-donations-modal-expansion-list",
                ajaxOnScroll: k,
                buttonText: g.t("Show more"),
                dataElementId: "btn_donate_moredonations",
                itemCount: u.length,
                maxItems: C,
                showMore: _
            }, c.default.createElement(p.DonationList, {
                items: function() {
                    for (var e = i(u), t = 4, a = {
                            amountFormatted: "",
                            donationPrompt: c.default.createElement(g.Trans, null, "Join this list. ", c.default.createElement("span", {
                                className: "text-underline"
                            }, "Donate now.")),
                            donor: {
                                fullName: ""
                            },
                            promptUrl: I,
                            timeAgo: ""
                        }; t < e.length;)
                        e.length - t > 3 && e.splice(t, 0, a),
                        t += 15;
                    return e
                }()
            })), !_ && c.default.createElement(c.default.Fragment, null, c.default.createElement(m.Link, {
                to: I,
                target: "_top",
                rel: "noopener",
                className: "a-link--unstyled",
                dataElementId: "btn_donations_message"
            }, c.default.createElement("div", {
                className: "m-donation-prompt disp-block a-link o-donation-list-join mb2x mt2x"
            }, c.default.createElement(g.Trans, null, "Join this list. ", c.default.createElement("span", {
                className: "text-underline"
            }, "Donate now.")))), c.default.createElement("div", {
                className: "mb2x text-center"
            }, c.default.createElement(m.Button, {
                className: "text-underline",
                onClick: w
            }, g.t("Close")))))
        }
        h.defaultProps = {
            pageSize: 20
        },
        t.default = h
    },
    mDgP: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("TSYQ")),
            o = n(a("q1tI")),
            l = a("z+lN");
        a("Z4L6"),
        t.default = function(e) {
            var t = e.className,
                a = e.items,
                n = r.default(t, "list-unstyled", "o-value-prop-list");
            return o.default.createElement("ul", {
                className: n
            }, a.map((function(e, t) {
                return o.default.createElement("li", {
                    key: t
                }, o.default.createElement(l.ValueProp, {
                    text: e.text,
                    heading: e.heading,
                    icon: e.icon,
                    link: e.link
                }))
            })))
        }
    },
    mQjI: function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = r(a("q1tI")),
            l = a("qhky"),
            i = a("dNNZ"),
            u = a("YgTb");
        t.default = function(e) {
            return o.default.createElement(i.ContactWrapper, {
                backButton: {
                    as: "route",
                    dataElementId: "btn_contact_form_fraud_back",
                    label: u.t("Suggestions"),
                    to: "/contact/suggest"
                },
                dataViewId: "pg_contact_form_fraud",
                showFaq: !0,
                title: u.t("Report a Fundraiser")
            }, o.default.createElement(l.Helmet, null, o.default.createElement("title", null, u.t("Report a Fundraiser | GoFundMe Support")), o.default.createElement("meta", {
                name: "robots",
                content: "noindex"
            })), o.default.createElement(i.ContactFormFraud, n({}, e)))
        }
    },
    mSGx: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("q1tI")),
            o = a("yf/i"),
            l = a("YgTb");
        t.default = function(e) {
            var t = e.className,
                a = e.dataElementId,
                n = e.fundUrl;
            return r.default.createElement(o.Link, {
                className: t,
                dataElementId: a || "btn_share_print",
                rel: "noopener",
                target: "_blank",
                unstyled: !0,
                to: "/f/" + n + "/print"
            }, r.default.createElement(o.UIIcon, {
                name: "print"
            }), l.t("Print Poster"))
        }
    },
    mUdk: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("mDgP");
        Object.defineProperty(t, "ValuePropList", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    mVWG: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("wAEE");
        Object.defineProperty(t, "ClipboardField", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    mhGt: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("TSYQ")),
            o = n(a("q1tI")),
            l = a("wE+H"),
            i = a("yf/i"),
            u = a("YgTb");
        t.default = function(e) {
            var t = e.className,
                a = e.partnerLink,
                n = e.partnerName,
                s = e.profileImage,
                c = r.default(t, "m-campaign-members-partner", "disp-flex", "align-midde");
            return o.default.createElement("div", {
                className: c
            }, s && o.default.createElement(i.Avatar, {
                className: "mr2x",
                profileImage: s,
                as: l.IdentityType.partner
            }), o.default.createElement("div", {
                className: "text-small"
            }, o.default.createElement(u.Trans, null, "In partnership with", o.default.createElement(i.HtmlSpace, {
                type: "non-breaking"
            }), o.default.createElement(i.Link, {
                as: "href",
                rel: "noopener",
                target: "_blank",
                to: a
            }, {
                partnerName: n
            }))))
        }
    },
    "n/+C": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("GmFh");
        Object.defineProperty(t, "ContactSentPage", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    nFew: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("TSYQ")),
            o = n(a("q1tI")),
            l = a("wQmL"),
            i = a("yf/i"),
            u = a("z+lN"),
            s = a("YgTb"),
            c = a("Vu4q");
        t.default = function(e) {
            var t = e.className,
                a = e.handleSubmit,
                n = e.onClickSignUp,
                d = e.showSignUp,
                m = e.title,
                f = e.submitting,
                p = r.default("p-sign-in-forgot-password", t),
                g = d && o.default.createElement(o.default.Fragment, null, s.t("Don't have an account? "), o.default.createElement(i.Button, {
                    className: "text-small text-underline",
                    onClick: n,
                    dataElementId: "btn_signup"
                }, s.t("Sign up")));
            return o.default.createElement(u.SusiWrapper, {
                title: m,
                innerWidthNarrow: !0,
                footer: !1,
                subText: g
            }, o.default.createElement("div", {
                className: p
            }, o.default.createElement("div", {
                className: "mb2x"
            }, s.t("Enter the email address associated with your account, and we'll email you a link to reset your password")), o.default.createElement(l.Form, {
                onSubmit: a(c.ForgotPasswordSubmit.submitForgotPasswordForm)
            }, o.default.createElement(l.Field, {
                component: u.ReduxZoomField,
                type: "email",
                label: s.t("Email address"),
                name: "email",
                id: "email",
                className: "mb2x"
            }), o.default.createElement("div", {
                className: "flex-container align-center"
            }, o.default.createElement(i.Button, {
                fill: "solid-green",
                layout: "full",
                size: "large",
                type: "submit",
                disabled: f
            }, f ? o.default.createElement(i.LoadingDots, {
                color: "white",
                size: "large"
            }) : s.t("Request new password"))))))
        }
    },
    nFvX: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("q1tI")),
            o = a("yf/i"),
            l = a("YgTb");
        t.default = function(e) {
            var t = e.className,
                a = e.dataElementId,
                n = e.shareUrl;
            return r.default.createElement(o.Link, {
                to: n,
                className: t,
                as: "route",
                unstyled: !0,
                dataElementId: a || "btn_embed_share"
            }, r.default.createElement(o.UIIcon, {
                name: "embed"
            }), l.t("Embed HTML"))
        }
    },
    nQEC: function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            r = this && this.__createBinding || (Object.create ? function(e, t, a, n) {
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
            o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            l = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && r(t, e, a);
                return o(t, e), t
            },
            i = this && this.__read || function(e, t) {
                var a = "function" == typeof Symbol && e[Symbol.iterator];
                if (!a)
                    return e;
                var n,
                    r,
                    o = a.call(e),
                    l = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(n = o.next()).done;)
                        l.push(n.value)
                } catch (i) {
                    r = {
                        error: i
                    }
                } finally {
                    try {
                        n && !n.done && (a = o.return) && a.call(o)
                    } finally {
                        if (r)
                            throw r.error
                    }
                }
                return l
            },
            u = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = u(a("TSYQ")),
            c = l(a("q1tI")),
            d = a("wQmL"),
            m = a("yf/i"),
            f = a("z+lN"),
            p = a("YgTb"),
            g = u(a("1U1D")),
            h = a("Vu4q");
        t.default = function(e) {
            var t = e.className,
                a = e.error,
                r = e.isCaptchaRequired,
                o = e.handleSubmit,
                l = e.makeOnSuccess,
                u = e.reCaptchaSiteKey,
                y = e.submitting,
                _ = e.onClickSignUp,
                b = e.onClickForgotPassword,
                v = e.onFailureEmail,
                E = e.onSubmitEmail,
                S = e.title,
                C = e.reCaptchaExecute,
                O = e.reCaptchaToken,
                P = e.showSignUp,
                I = e.setReCaptchaToken,
                k = s.default("p-sign-in-initial", t),
                N = i(c.useState(!1), 2),
                w = N[0],
                T = N[1],
                M = i(c.useState({}), 2),
                A = M[0],
                j = M[1];
            r && !w && (g.default.init((function(e) {
                I(e)
            })), T(!0));
            var x = function(e) {
                E(e, l, v)
            };
            c.useEffect((function() {
                O && x(n(n({}, A), {
                    captchaResponse: O
                }))
            }), [O]);
            var D = !!P && c.default.createElement(p.Trans, null, "Don't have an account?", c.default.createElement(m.HtmlSpace, {
                    type: "breaking"
                }), c.default.createElement(m.Button, {
                    className: "text-small text-underline",
                    onClick: _,
                    dataElementId: "btn_signup"
                }, "Sign up")),
                G = c.default.createElement(m.Button, {
                    className: "text-underline",
                    onClick: b,
                    dataElementId: "btn_signin_forgotpassword"
                }, p.t("Forgot your password?"));
            return c.default.createElement(f.SusiWrapper, {
                title: S,
                subText: D,
                innerWidthNarrow: !0,
                footer: G
            }, c.default.createElement("div", {
                className: k
            }, !!a && c.default.createElement(m.FieldAlert, {
                className: "mt mb2x",
                status: m.FieldStatus.ERROR
            }, a), c.default.createElement(d.Form, {
                onSubmit: o((function(e) {
                    h.EmailSignInSubmit.validate(e),
                    j(e),
                    r ? C() : x(e)
                }))
            }, c.default.createElement(d.Field, {
                component: f.ReduxZoomField,
                id: "email",
                name: "email",
                type: "email",
                label: p.t("Email address"),
                className: "mb2x",
                dataElementId: "input_signin_email"
            }), c.default.createElement(d.Field, {
                component: f.ReduxZoomField,
                id: "password",
                name: "password",
                type: "password",
                label: p.t("Password"),
                className: "mb2x",
                dataElementId: "input_signin_password"
            }), c.default.createElement(m.Button, {
                fill: "solid-green",
                layout: "full",
                size: "large",
                type: "submit",
                disabled: y,
                dataElementId: "btn_signin_email"
            }, y ? c.default.createElement(m.LoadingDots, {
                color: "white",
                size: "large"
            }) : p.t("Sign in to GoFundMe"))), !(!r || !u) && c.default.createElement("div", {
                className: "g-recaptcha",
                "data-callback": "grecaptchaonload",
                "data-sitekey": u,
                "data-size": "invisible"
            })))
        }
    },
    nmZj: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("9MVR");
        Object.defineProperty(t, "FbShareButton", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    no3w: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("TSYQ")),
            o = n(a("q1tI")),
            l = a("yf/i"),
            i = a("YgTb");
        a("w+sG"),
        t.default = function(e) {
            var t = e.className,
                a = e.onClickBack,
                n = r.default(t, "o-logo-back-nav");
            return o.default.createElement("nav", {
                className: n
            }, a && o.default.createElement(l.Link, {
                ariaLabel: i.t("Share back button"),
                as: "route",
                onClick: a,
                dataElementId: "btn_nav_back",
                className: "o-logo-back-nav-icon"
            }, o.default.createElement(l.UIIcon, {
                name: "caret-left"
            })), o.default.createElement(l.Link, {
                ariaLabel: i.t("GoFundMe homepage"),
                as: "href",
                to: "/",
                dataElementId: "btn_nav_gfm_logo",
                className: "o-logo-back-nav-logo-wrap"
            }, o.default.createElement(l.Logo, {
                name: "GoFundMe",
                className: "o-logo-back-nav-logo"
            })))
        }
    },
    noDg: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a("/MKj"),
            o = a("wQmL"),
            l = a("Cge7"),
            i = a("ZZcF"),
            u = a("C0Xu"),
            s = a("7OEO"),
            c = n(a("Dta8")),
            d = o.reduxForm({
                enableReinitialize: !0,
                form: u.CONTACT_FORM_BENE,
                submitAsSideEffect: !0
            })(c.default),
            m = r.connect((function() {
                var e = l.makeGetUserFullName(),
                    t = l.makeGetUserEmail(),
                    a = i.makeGetReCaptchaBigwebKey(),
                    n = o.formValueSelector(u.CONTACT_FORM_BENE),
                    r = s.makeGetLeafId();
                return function(o, l) {
                    return {
                        formTypeId: u.ContactFormType.BENE,
                        initialValues: {
                            contactedCo: "",
                            currency: "USD",
                            email: t(o),
                            moneyReceived: " ",
                            name: e(o),
                            phonePrefix: "1",
                            relationToCoText: ""
                        },
                        leafId: r(o),
                        phonePrefix: n(o, "phonePrefix"),
                        reCaptchaSiteKey: a(o),
                        relationToCoText: n(o, "relationToCoText")
                    }
                }
            }), (function(e, t) {
                return {
                    onSuccess: function() {
                        return t.history.push("/contact/suggest/sent")
                    }
                }
            }))(d);
        t.default = m
    },
    nr2E: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a("/MKj"),
            o = a("Cge7"),
            l = a("ZZcF"),
            i = n(a("zYpg")),
            u = r.connect((function() {
                var e = o.makeGetIsLoggedIn(),
                    t = l.makeGetAlgoliaIndices();
                return function(a) {
                    return {
                        algoliaIndices: t(a),
                        isLoggedIn: e(a)
                    }
                }
            }), void 0)(i.default);
        t.default = u
    },
    o567: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    oCMw: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("dj00");
        Object.defineProperty(t, "FbMessengerButton", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    oHjd: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    oXL0: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    ocVw: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.makeGetWhatsAppShareLink = t.makeGetCopyLinkTagShortUrl = t.makeGetPodoCopyLinkSeeAllShortUrl = t.makeGetCopyLinkSeeAllShortUrl = t.makeGetWhatsAppDescriptionExcerpt = t.makeGetCopyLinkShortUrlPodoSuccess = t.makeGetCopyLinkShortUrlPodo = t.makeGetWhatsAppShareProps = t.makeGetFbShareProps = t.makeGetSmsShareLink = t.makeGetSmsAndroidShareLink = t.makeGetCampaignTitle = t.makeGetEmbedShareButtonProps = t.makeGetEmailShortUrlComplete = t.makeGetEmailShareLink = t.makeGetEmailAndroidShareLink = t.makeGetTwitterShareLink = t.makeGetWhatsAppShareText = t.makeGetFbShareLink = void 0;
        var n = a("G4qV"),
            r = a("YgTb"),
            o = a("+yDP"),
            l = a("8QVh"),
            i = a("o6hd"),
            u = a("BYM7"),
            s = a("Cge7");
        Object.defineProperty(t, "makeGetCampaignTitle", {
            enumerable: !0,
            get: function() {
                return s.makeGetCampaignTitle
            }
        });
        var c = a("l2oO"),
            d = function() {
                return n.createSelector([s.makeGetCampaignCanonicalUrl(), s.makeGetCampaignTitle()], (function(e, t) {
                    return r.t("Hi, I’d really appreciate it if you would share or donate to this GoFundMe, {{fundTitle}} {{- shareLink}}", {
                        fundTitle: t,
                        shareLink: l.getShareLink(e, i.UtmKeys.WHATSAPP_SHARESHEET, i.UtmFromKeys.CAMPAIGN_PAGE)
                    })
                }))
            };
        t.makeGetWhatsAppShareText = d;
        var m = function() {
            return n.createSelector([s.makeGetCampaignCanonicalUrl()], (function(e) {
                return l.getShareLink(e, i.UtmKeys.FACEBOOK_SHARE_SHARESHEET, i.UtmFromKeys.CAMPAIGN_PAGE)
            }))
        };
        t.makeGetFbShareLink = m;
        t.makeGetTwitterShareLink = function() {
            return n.createSelector([u.makeGetShortenedShareUrl(i.UtmFromKeys.CAMPAIGN_PAGE, i.UtmKeys.TWITTER_SHARE_SHARESHEET), s.makeGetCampaignCanonicalUrl()], (function(e, t) {
                return e || l.getShareLink(t, i.UtmKeys.TWITTER_SHARE_SHARESHEET, i.UtmFromKeys.CAMPAIGN_PAGE)
            }))
        };
        t.makeGetEmbedShareButtonProps = function() {
            return n.createSelector([n.createSelector([s.makeGetCampaignUrl()], (function(e) {
                return "/f/" + e + "/share/embed"
            }))], (function(e) {
                return {
                    to: e
                }
            }))
        };
        t.makeGetFbShareProps = function() {
            return n.createSelector([m()], (function(e) {
                return {
                    shareLink: e
                }
            }))
        };
        t.makeGetWhatsAppShareProps = function() {
            return n.createSelector([d()], (function(e) {
                return {
                    shareText: e
                }
            }))
        };
        t.makeGetSmsAndroidShareLink = function() {
            return n.createSelector([u.makeGetShortenedShareUrl(i.UtmFromKeys.CAMPAIGN_PAGE, i.UtmKeys.SMS_ANDROID_SHARESHEET), s.makeGetCampaignCanonicalUrl()], (function(e, t) {
                return e || l.getShareLink(t, i.UtmKeys.SMS_ANDROID_SHARESHEET, i.UtmFromKeys.CAMPAIGN_PAGE)
            }))
        };
        t.makeGetSmsShareLink = function() {
            return n.createSelector([u.makeGetShortenedShareUrl(i.UtmFromKeys.CAMPAIGN_PAGE, i.UtmKeys.SMS_SHARESHEET), s.makeGetCampaignCanonicalUrl()], (function(e, t) {
                return e || l.getShareLink(t, i.UtmKeys.SMS_SHARESHEET, i.UtmFromKeys.CAMPAIGN_PAGE)
            }))
        };
        t.makeGetWhatsAppDescriptionExcerpt = function() {
            return n.createSelector([s.makeGetCampaignDescription()], (function(e) {
                var t = o.htmlSafe(e.replace(/<br[^>]*>/gi, "\n").replace(/&amp;/g, "&"));
                return t.length > 150 ? t.substring(0, 149) + "…" : t
            }))
        };
        t.makeGetEmailAndroidShareLink = function() {
            return n.createSelector([u.makeGetShortenedShareUrl(i.UtmFromKeys.CAMPAIGN_PAGE, i.UtmKeys.EMAIL_ANDROID_SHARESHEET), s.makeGetCampaignCanonicalUrl()], (function(e, t) {
                return e || l.getShareLink(t, i.UtmKeys.EMAIL_ANDROID_SHARESHEET, i.UtmFromKeys.CAMPAIGN_PAGE)
            }))
        };
        t.makeGetEmailShareLink = function() {
            return n.createSelector([u.makeGetShortenedShareUrl(i.UtmFromKeys.CAMPAIGN_PAGE, i.UtmKeys.EMAIL_SHARESHEET), s.makeGetCampaignCanonicalUrl()], (function(e, t) {
                return e || l.getShareLink(t, i.UtmKeys.EMAIL_SHARESHEET, i.UtmFromKeys.CAMPAIGN_PAGE)
            }))
        };
        t.makeGetEmailShortUrlComplete = function() {
            return n.createSelector([c.makeGetShortUrlInitialized(i.UtmFromKeys.CAMPAIGN_PAGE, i.UtmKeys.EMAIL_SHARESHEET), c.makeGetShortUrlInitialized(i.UtmFromKeys.CAMPAIGN_PAGE, i.UtmKeys.EMAIL_ANDROID_SHARESHEET)], (function(e, t) {
                return e || t
            }))
        };
        t.makeGetWhatsAppShareLink = function() {
            return n.createSelector([u.makeGetShortenedShareUrl(i.UtmFromKeys.CAMPAIGN_PAGE, i.UtmKeys.WHATSAPP_SHARESHEET), s.makeGetCampaignCanonicalUrl()], (function(e, t) {
                return e || l.getShareLink(t, i.UtmKeys.WHATSAPP_SHARESHEET, i.UtmFromKeys.CAMPAIGN_PAGE)
            }))
        };
        t.makeGetCopyLinkShortUrlPodo = function() {
            return n.createSelector([u.makeGetShortenedShareUrl(i.UtmFromKeys.POSTDONATE_MODAL, i.UtmKeys.COPY_LINK_SHARESHEET), s.makeGetCampaignCanonicalUrl()], (function(e, t) {
                return e || l.getShareLink(t, i.UtmKeys.COPY_LINK_SHARESHEET, i.UtmFromKeys.POSTDONATE_MODAL)
            }))
        };
        t.makeGetCopyLinkShortUrlPodoSuccess = function() {
            return n.createSelector([c.makeGetShortenedShareUrlSuccess(i.UtmFromKeys.POSTDONATE_MODAL, i.UtmKeys.COPY_LINK_SHARESHEET)], (function(e) {
                return e
            }))
        };
        var f = function(e, t) {
            return n.createSelector([u.makeGetShortenedShareUrl(e, t), s.makeGetCampaignCanonicalUrl()], (function(a, n) {
                return a || l.getShareLink(n, t, e)
            }))
        };
        t.makeGetCopyLinkSeeAllShortUrl = function() {
            return n.createSelector([f(i.UtmFromKeys.CAMPAIGN_PAGE, i.UtmKeys.COPY_LINK_ALL)], (function(e) {
                return e
            }))
        };
        t.makeGetPodoCopyLinkSeeAllShortUrl = function() {
            return n.createSelector([f(i.UtmFromKeys.POSTDONATE_MODAL, i.UtmKeys.COPY_LINK_ALL)], (function(e) {
                return e
            }))
        };
        t.makeGetCopyLinkTagShortUrl = function() {
            return n.createSelector([f(i.UtmFromKeys.CAMPAIGN_PAGE, i.UtmKeys.CAMPAIGN_LINK_TAG)], (function(e) {
                return e
            }))
        }
    },
    ogQo: function(e, t, a) {
        "use strict";
        var n,
            r = this && this.__extends || (n = function(e, t) {
                return (n = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var a in t)
                        t.hasOwnProperty(a) && (e[a] = t[a])
                })(e, t)
            }, function(e, t) {
                function a() {
                    this.constructor = e
                }
                n(e, t),
                e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, new a)
            }),
            o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = o(a("TSYQ")),
            i = o(a("q1tI")),
            u = a("yf/i"),
            s = a("p1Kg"),
            c = a("YgTb"),
            d = function(e) {
                function t(t) {
                    var a = e.call(this, t) || this;
                    return a.state = {
                        isOpen: !1,
                        on: !1
                    }, a.renderAccordions = function() {
                        var e = a.props,
                            t = e.authenticatedPerson;
                        return e.isLoggedIn && t ? a.renderLoggedInNav() : a.renderLoggedOutNav()
                    }, a.renderNavShare = function() {
                        var e = a.props.campaignUrl;
                        return i.default.createElement(u.Button, {
                            as: "route",
                            ariaLabel: c.t("Open share modal"),
                            className: "mr2x",
                            dataElementId: "btn_nav_share",
                            to: "/f/" + e + "/share"
                        }, i.default.createElement(u.UIIcon, {
                            name: "share",
                            size: "large"
                        }))
                    }, a.renderShare = function() {
                        var e = a.props,
                            t = e.campaignUrl;
                        if (e.showActiveContent)
                            return i.default.createElement(u.Button, {
                                as: "route",
                                className: "mt4x",
                                dataElementId: "btn_navmenu_share",
                                fill: "hollow-yellow",
                                layout: "max-full",
                                size: "large",
                                to: "/f/" + t + "/share"
                            }, c.t("Share"))
                    }, a.renderDonate = function() {
                        var e = a.props,
                            t = e.donateUrl;
                        return e.isCampaignActive && i.default.createElement(u.Button, {
                                as: "href",
                                className: "mt2x",
                                dataElementId: "btn_navmenu_donate",
                                fill: "solid-yellow",
                                layout: "max-full",
                                size: "large",
                                to: t
                            }, c.t("Donate"))
                    }, a.renderLoggedOutNav = function() {
                        var e = s.getNavText().navHowItWorksAccordion,
                            t = a.props.susiModalPaths,
                            n = [{
                                buttonContent: e.text,
                                children: i.default.createElement(u.SubnavContent, {
                                    groups: e.groups,
                                    seeAll: e.seeAll
                                }),
                                on: !1
                            }];
                        return i.default.createElement(i.default.Fragment, null, t ? i.default.createElement(u.Button, {
                            as: "route",
                            className: "m-accordion-button color-dark-gray",
                            dataElementId: "btn_nav_sign_in",
                            layout: "full",
                            rel: "nofollow",
                            to: t.signInPath
                        }, c.t("Sign in")) : i.default.createElement(u.Button, {
                            as: "href",
                            className: "m-accordion-button color-dark-gray",
                            dataElementId: "btn_nav_sign_in",
                            layout: "full",
                            to: "/sign-in"
                        }, c.t("Sign in")), i.default.createElement(u.AccordionGroup, {
                            items: n
                        }), i.default.createElement(u.Button, {
                            as: "href",
                            className: "m-accordion-button color-dark-gray",
                            dataElementId: "btn_nav_sign_up",
                            layout: "full",
                            to: "/sign-up"
                        }, c.t("Start a GoFundMe")), a.renderShare(), a.renderDonate())
                    }, a.renderLoggedInNav = function() {
                        var e = a.props.hasCampaign,
                            t = [{
                                url: "/sign-out",
                                text: c.t("Sign out")
                            }, {
                                url: "/donations",
                                text: c.t("Donations you've made")
                            }, {
                                url: "/settings",
                                text: c.t("Account settings")
                            }, {
                                url: "/https://support.gofundme.com/",
                                text: c.t("Help center")
                            }];
                        return i.default.createElement(i.default.Fragment, null, i.default.createElement("ul", {
                            className: "list-unstyled"
                        }, t.map((function(e, t) {
                            return i.default.createElement("li", {
                                key: t
                            }, i.default.createElement(u.Button, {
                                as: "href",
                                className: "m-accordion-button color-dark-gray",
                                dataElementId: "/donations" === e.url ? "btn_navmenu_my-donations" : "btn_navmenu_campaigns",
                                layout: "full",
                                to: e.url
                            }, e.text))
                        })), e && i.default.createElement("li", null, i.default.createElement(u.Button, {
                            as: "href",
                            className: "m-accordion-button color-dark-gray",
                            dataElementId: "btn_navmenu_manage",
                            layout: "full",
                            to: "/campaigns"
                        }, c.t("Your fundraisers")))), a.renderShare(), !e && a.renderDonate())
                    }, a.handleOpenDrawer = a.handleOpenDrawer.bind(a), a.handleCloseDrawer = a.handleCloseDrawer.bind(a), a.handleTransitionEnd = a.handleTransitionEnd.bind(a), a
                }
                return r(t, e), t.prototype.handleOpenDrawer = function() {
                    var e = this;
                    this.setState({
                        on: !0
                    }),
                    setTimeout((function() {
                        e.setState({
                            isOpen: !0
                        })
                    }), 10)
                }, t.prototype.handleCloseDrawer = function() {
                    this.setState({
                        isOpen: !1
                    })
                }, t.prototype.handleTransitionEnd = function() {
                    this.state.isOpen || this.setState({
                        on: !1
                    })
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.props,
                        a = t.className,
                        n = t.dataViewId,
                        r = this.state.isOpen,
                        o = l.default(a, "o-mobile-nav");
                    return i.default.createElement(i.default.Fragment, null, this.renderNavShare(), i.default.createElement(u.Toggle, {
                        on: this.state.on
                    }, (function(t) {
                        var a = t.on;
                        return i.default.createElement(i.default.Fragment, null, i.default.createElement(u.Button, {
                            ariaExpanded: r,
                            ariaLabel: c.t("Open navigation menu"),
                            onClick: e.handleOpenDrawer
                        }, i.default.createElement(u.UIIcon, {
                            name: "menu",
                            size: "large"
                        })), a && i.default.createElement(u.Drawer, {
                            className: o,
                            isOpen: r,
                            height: "full",
                            onClose: e.handleCloseDrawer,
                            onTransitionEnd: e.handleTransitionEnd,
                            closeTriggerLabel: c.t("Close navigation menu"),
                            dataViewId: n
                        }, e.renderAccordions()))
                    })))
                }, t
            }(i.default.Component);
        t.default = d
    },
    oonK: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    oqUn: function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = r(a("q1tI")),
            l = a("qhky"),
            i = a("dNNZ"),
            u = a("YgTb");
        t.default = function(e) {
            return o.default.createElement(i.ContactWrapper, {
                backButton: {
                    as: "route",
                    dataElementId: "btn_contact_form_journalist_back",
                    label: u.t("Suggestions"),
                    to: "/contact/suggest"
                },
                dataViewId: "pg_contact_form_journalist",
                title: u.t("Press Contact Form")
            }, o.default.createElement(l.Helmet, null, o.default.createElement("title", null, u.t("Press Contact Form | GoFundMe Support")), o.default.createElement("meta", {
                name: "robots",
                content: "noindex"
            })), o.default.createElement(i.ContactFormJournalist, n({}, e)))
        }
    },
    p17I: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("c5RM");
        Object.defineProperty(t, "CommentFooter", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    p2wc: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("TSYQ")),
            o = n(a("q1tI")),
            l = a("yf/i"),
            i = a("YgTb");
        t.default = function(e) {
            var t = e.className,
                a = e.children,
                n = e.dataElementId,
                u = e.url,
                s = e.onClick,
                c = r.default("m-share-button", t);
            return o.default.createElement(l.Button, {
                as: "route",
                to: u,
                className: c,
                dataElementId: n || "btn_share",
                layout: "max-full",
                fill: "hollow-yellow",
                size: "medium",
                onClick: s
            }, a || i.t("share"))
        }
    },
    pgMs: function(e, t, a) {
        "use strict";
        a.r(t),
        t.default = a.p + "static/media/manage.0a9c0a41f0909c266a2dcbd4d4239528.svg"
    },
    pkkH: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("J62y");
        Object.defineProperty(t, "Update", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    pmIF: function(e, t, a) {
        "use strict";
        a.r(t),
        t.default = a.p + "static/media/placeholder.733ccd382308a8ee8b901d3b1c68ba7f.svg"
    },
    ppeB: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("TSYQ")),
            o = n(a("q1tI")),
            l = a("yf/i"),
            i = a("YgTb");
        a("cT9i"),
        t.default = function(e) {
            var t = e.children,
                a = e.className,
                n = e.footer,
                u = e.innerWidthNarrow,
                s = e.title,
                c = e.subText,
                d = r.default("p-susi-wrapper text-center", a),
                m = r.default("pt2x pb2x", {
                    mb: !1 === n,
                    "p-susi-wrapper-inner-narrow": u
                }),
                f = !1 !== n && o.default.createElement(o.default.Fragment, null, o.default.createElement(l.Rule, {
                    type: "horizontal"
                }), o.default.createElement("div", {
                    className: "text-small mb2x"
                }, n || o.default.createElement(i.Trans, null, "By continuing, you agree with GoFundMe", o.default.createElement(l.HtmlSpace, {
                    type: "breaking"
                }), o.default.createElement(l.Link, {
                    to: "/terms",
                    target: "_blank"
                }, "terms"), o.default.createElement(l.HtmlSpace, {
                    type: "breaking"
                }), "and", o.default.createElement(l.HtmlSpace, {
                    type: "breaking"
                }), o.default.createElement(l.Link, {
                    to: "/privacy",
                    target: "_blank"
                }, "privacy policy"))));
            return o.default.createElement("div", {
                className: d
            }, o.default.createElement("h1", {
                className: "heading-2"
            }, s), o.default.createElement("div", {
                className: "text-small"
            }, c), o.default.createElement(l.Rule, {
                type: "horizontal"
            }), o.default.createElement("div", {
                className: m
            }, t), f)
        }
    },
    ps19: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("TSYQ")),
            o = n(a("q1tI")),
            l = a("yf/i"),
            i = a("YgTb");
        a("lQkJ"),
        t.default = function(e) {
            var t = e.match,
                a = e.location,
                n = e.history,
                u = e.className,
                s = e.domain,
                c = new URLSearchParams(a.search).get("member"),
                d = "https://www." + s + "/f/" + t.params.campaignUrl + "/donate" + (c ? "?member=" + c : ""),
                m = r.default(u, "l-competitor-warning-modal disp-flex flex-dir-column");
            return o.default.createElement(l.Modal, {
                isOpen: !0,
                closeTriggerLabel: i.t("Close modal"),
                onClose: function() {
                    n.push("/f/" + t.params.campaignUrl + a.search)
                },
                as: "inline"
            }, o.default.createElement("div", {
                className: m
            }, o.default.createElement(i.Trans, null, o.default.createElement("h2", null, "Donating outside of GoFundMe"), o.default.createElement("p", null, "Donations on other platforms are not protected by the GoFundMe Guarantee. In the rare case that something isn’t right on GoFundMe, we work with you to determine if misuse occurred.", o.default.createElement(l.HtmlSpace, {
                type: "breaking"
            }), o.default.createElement(l.Link, {
                as: "href",
                to: "https://www.gofundme.com/c/safety/gofundme-guarantee",
                dataElementId: "btn_guarantee_learn-more"
            }, "Learn more")), o.default.createElement(l.PrimaryButton, {
                className: "mb2x mt2x max-width-100",
                dataElementId: "btn_donate_guarantee",
                layout: "full-for-small",
                color: "yellow",
                as: "href",
                to: d
            }, "Donate now"))))
        }
    },
    pxBg: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("TSYQ")),
            o = n(a("q1tI")),
            l = a("yf/i"),
            i = a("YgTb"),
            u = a("K9qA");
        t.default = function(e) {
            var t = e.arrowIcon,
                a = e.dataElementId,
                n = e.summary,
                s = e.className,
                c = e.label,
                d = e.url,
                m = e.title,
                f = !!t && o.default.createElement(l.UIIcon, {
                    name: "caret-right",
                    className: "share-button-arrow hide-for-large"
                }),
                p = function(e) {
                    var t = e ? 400 : 600,
                        a = e ? 400 : 800;
                    u.domHelper.openDialogueWindow("https://www.linkedin.com/shareArticle?mini=true&url=" + d + "&title=" + m + "&summary=" + n + "&source=GoFundMe", t, a)
                },
                g = o.default.createElement(l.Button, {
                    className: r.default(s, "show-for-large"),
                    layout: "inline",
                    as: "route",
                    dataElementId: a || "btn_share_linkedin",
                    onClick: function(e) {
                        p(!1)
                    }
                }, o.default.createElement(l.LogoIcon, {
                    name: "LinkedIn"
                }), c || i.t("LinkedIn")),
                h = o.default.createElement(l.Button, {
                    className: r.default(s, "hide-for-large"),
                    layout: "inline",
                    as: "route",
                    dataElementId: a || "btn_share_linkedin",
                    onClick: function(e) {
                        p(!0)
                    }
                }, o.default.createElement(l.LogoIcon, {
                    name: "LinkedIn",
                    className: "share-button-icon"
                }), c || i.t("LinkedIn"), f);
            return o.default.createElement(o.default.Fragment, null, h, g)
        }
    },
    pyms: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    qCvq: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("UxYS");
        Object.defineProperty(t, "SocialStatsItem", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    qRrf: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("q1tI")),
            o = a("yf/i"),
            l = a("nkkU"),
            i = a("dNNZ");
        t.default = function(e) {
            return e.meta ? r.default.createElement(i.ErrorBoundary, {
                type: "suppress"
            }, r.default.createElement(o.MetaList, {
                className: "m-campaign-lite-byline-meta",
                style: "pipe",
                items: [r.default.createElement(l.CreatedDate, {
                    key: 0,
                    className: "m-campaign-byline-created",
                    date: e.meta.creationDate,
                    locale: e.meta.locale
                }), r.default.createElement(o.Link, {
                    key: 1,
                    as: "href",
                    className: "m-campaign-byline-type divider-prefix meta-divider flex-container align-middle color-dark-gray a-link--unstyled",
                    to: e.meta.category.href
                }, r.default.createElement(o.UIIcon, {
                    size: "large",
                    name: "tag",
                    textPairing: "prependText"
                }), e.meta.category.name)]
            })) : r.default.createElement(r.default.Fragment, null)
        }
    },
    qbjn: function(e, t, a) {
        "use strict";
        var n,
            r = this && this.__extends || (n = function(e, t) {
                return (n = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var a in t)
                        t.hasOwnProperty(a) && (e[a] = t[a])
                })(e, t)
            }, function(e, t) {
                function a() {
                    this.constructor = e
                }
                n(e, t),
                e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, new a)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            l = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = l(a("q1tI")),
            u = a("z+lN"),
            s = a("9+6X"),
            c = a("YgTb"),
            d = a("+Ded"),
            m = a("yf/i");
        a("A0jz");
        var f = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    offset: t.props.comments ? t.props.comments.length : 0
                }, t.fetchNextPage = function() {
                    var e = t.props,
                        a = e.getComments,
                        n = e.pageSize;
                    a && (a(t.state.offset, n), t.setState(o(o({}, t.state), {
                        offset: t.state.offset + n
                    })), d.trackEvents.trackEvent({
                        elementId: "btn_comments_paginate",
                        type: "mp_page_click",
                        viewId: "pg_donate_index"
                    }))
                }, t
            }
            return r(t, e), t.prototype.render = function() {
                var e = this.props,
                    t = e.comments,
                    a = e.donateUrl,
                    n = e.maxChars,
                    r = e.totalComments,
                    l = e.hasNext,
                    d = e.onClickCommentImage,
                    f = function(e) {
                        return void 0 === e && (e = !1), i.default.createElement("div", {
                            className: "o-comments-blurb " + (e ? "mb4x" : "mb2x")
                        }, i.default.createElement("div", {
                            className: "o-comments-blurb-text"
                        }, i.default.createElement("span", {
                            className: e ? "weight-900" : ""
                        }, c.t("Please donate and share words of encouragement."))), i.default.createElement(m.PrimaryButton, {
                            className: "o-comments-blurb-button",
                            to: a,
                            as: "href",
                            dataElementId: "btn_donate_comment",
                            color: "green",
                            size: "small"
                        }, c.t("Continue")))
                    };
                return t && t.length > 0 ? i.default.createElement(i.default.Fragment, null, i.default.createElement(s.ExpansionListWrapper, {
                    buttonText: c.t("Show more"),
                    showMore: l,
                    showCount: !0,
                    header: c.t("Comments"),
                    maxItems: 10,
                    itemCount: r,
                    onClick: this.fetchNextPage
                }, i.default.createElement("ul", {
                    className: "list-unstyled o-comments-list"
                }, t.map((function(e, t) {
                    return i.default.createElement("li", {
                        className: "o-comments-list-item",
                        key: t
                    }, i.default.createElement(u.Comment, o({}, e, {
                        maxChars: n,
                        onClickCommentImage: d
                    })))
                })))), i.default.createElement(m.Rule, {
                    type: "horizontal",
                    gutterPull: !0
                }), f(!1)) : i.default.createElement(i.default.Fragment, null, i.default.createElement("h2", {
                    className: "heading-3 mb0"
                }, c.t("Comments")), i.default.createElement(m.Rule, {
                    type: "horizontal",
                    gutterPull: !0
                }), f(!0), i.default.createElement(u.PersonLoadingList, {
                    count: 3,
                    icon: "default",
                    className: "mb4x"
                }))
            }, t
        }(i.default.Component);
        t.default = f
    },
    rXMt: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("Fmsj");
        Object.defineProperty(t, "CampaignDonationsModalConnected", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        });
        var r = a("mDbF");
        Object.defineProperty(t, "CampaignDonationsModal", {
            enumerable: !0,
            get: function() {
                return r.default
            }
        })
    },
    ro2B: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("q1tI")),
            o = a("yf/i"),
            l = a("z+lN"),
            i = a("YgTb");
        t.default = function(e) {
            var t = e.charity,
                a = t.organization,
                n = a.name;
            return r.default.createElement(l.CharityModal, {
                title: i.t("Donations raised benefit:"),
                subtitle: i.t("How non-profit fundraisers work"),
                organizerInfoMeta: function() {
                    if (t && t.meta)
                        return r.default.createElement("div", {
                            className: "color-gray mb4x"
                        }, r.default.createElement("div", null, t.meta.roleString), r.default.createElement("div", null, t.meta.city), r.default.createElement("div", null, "EIN: ", t.meta.ein))
                }(),
                charityOrganization: a
            }, r.default.createElement(r.default.Fragment, null, r.default.createElement("ol", null, r.default.createElement("li", {
                className: "m-campaign-members-main-modal-item"
            }, i.t("Donations are typically 100% tax deductible in the US. Your donation is made to PayPal Giving Fund (a 501(c)(3) charitable organization) to benefit your chosen charity.")), r.default.createElement("li", {
                className: "m-campaign-members-main-modal-item"
            }, r.default.createElement(i.Trans, null, "PayPal Giving Fund will grant your donation to ", {
                charityName: n
            }, " within 15-45 days (Or 90 days if the charity has not yet enrolled)*."))), r.default.createElement("div", {
                className: "text-small color-gray"
            }, r.default.createElement(i.Trans, null, "*If, after reasonable efforts have been made, PayPal Giving Fund cannot grant the funds to this charity, they will contact you before reassigning the funds in accordance with", r.default.createElement(o.HtmlSpace, {
                type: "non-breaking"
            }), r.default.createElement(o.Link, {
                as: "href",
                rel: "noopener",
                target: "_blank",
                to: "https://www.paypal.com/us/webapps/mpp/givingfund/policies"
            }, "PayPal Giving Fund's Policies"), "."))))
        }
    },
    s8ec: function(e, t, a) {
        "use strict";
        var n,
            r = this && this.__extends || (n = function(e, t) {
                return (n = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var a in t)
                        t.hasOwnProperty(a) && (e[a] = t[a])
                })(e, t)
            }, function(e, t) {
                function a() {
                    this.constructor = e
                }
                n(e, t),
                e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, new a)
            }),
            o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = o(a("fadw")),
            i = o(a("TSYQ")),
            u = o(a("q1tI")),
            s = a("yf/i");
        a("5vFK");
        var c = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    scrollTimeoutId: 0
                }, t.handleScrollIntersection = function(e) {
                    0 !== e.intersectionRatio && t.props.ajaxOnScroll && t.props.ajaxOnScroll()
                }, t.handleShowMoreClick = function(e) {
                    var a = t.props.onClick,
                        n = document.documentElement.scrollTop;
                    a && a(e),
                    window.clearTimeout(t.state.scrollTimeoutId);
                    var r = window.setTimeout((function() {
                        window.scrollTo(0, n)
                    }), 0);
                    t.setState({
                        scrollTimeoutId: r
                    })
                }, t
            }
            return r(t, e), t.prototype.render = function() {
                var e = this.props,
                    t = e.ajaxOnScroll,
                    a = e.dataElementId,
                    n = e.children,
                    r = e.header,
                    o = e.itemCount,
                    c = e.maxItems,
                    d = e.buttonText,
                    m = e.onFilter,
                    f = e.className,
                    p = e.showMore,
                    g = e.showCount,
                    h = i.default(f, "o-expansion-list-wrapper"),
                    y = !1 !== g && o && o > 0 ? "(" + o + ")" : void 0,
                    _ = void 0 !== p ? p : o && o > c;
                return u.default.createElement("div", {
                    className: h
                }, r && u.default.createElement(u.default.Fragment, null, u.default.createElement("div", {
                    className: "o-expansion-list-header"
                }, u.default.createElement("h2", {
                    className: "heading-3 mb0"
                }, r, " ", y), m && u.default.createElement(s.Button, {
                    className: "o-expansion-list-filter",
                    fill: "hollow-gray",
                    size: "small",
                    onClick: m
                }, u.default.createElement(s.UIIcon, {
                    className: f,
                    name: "sort",
                    size: "default",
                    textPairing: "prependText"
                }), "Relevancy")), u.default.createElement(s.Rule, {
                    type: "horizontal",
                    gutterPull: !0
                })), n, _ && u.default.createElement(u.default.Fragment, null, t ? u.default.createElement(l.default, {
                    onChange: this.handleScrollIntersection
                }, u.default.createElement("div", {
                    className: "disp-flex align-center mt4x mb4x"
                }, u.default.createElement(s.LoadingDots, {
                    color: "green",
                    size: "large"
                }))) : u.default.createElement(s.Button, {
                    className: "mt2x",
                    dataElementId: a,
                    fill: "hollow-green",
                    layout: "full-for-small",
                    onClick: this.handleShowMoreClick,
                    size: "medium"
                }, d)))
            }, t
        }(u.default.Component);
        t.default = c
    },
    sDHT: function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            r = this && this.__createBinding || (Object.create ? function(e, t, a, n) {
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
            o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            l = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && r(t, e, a);
                return o(t, e), t
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = l(a("q1tI")),
            u = a("+Ded"),
            s = a("dNNZ");
        t.default = function(e) {
            return i.useEffect((function() {
                u.trackEvents.push({
                    type: "mp_page_view",
                    viewId: "lb_sign-in"
                }),
                e.getCaptcha()
            }), []), i.default.createElement(s.SignInInitial, n({}, e))
        }
    },
    sNOy: function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            r = this && this.__createBinding || (Object.create ? function(e, t, a, n) {
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
            o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            l = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && r(t, e, a);
                return o(t, e), t
            },
            i = this && this.__rest || function(e, t) {
                var a = {};
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var r = 0;
                    for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
                        t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (a[n[r]] = e[n[r]])
                }
                return a
            },
            u = this && this.__read || function(e, t) {
                var a = "function" == typeof Symbol && e[Symbol.iterator];
                if (!a)
                    return e;
                var n,
                    r,
                    o = a.call(e),
                    l = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(n = o.next()).done;)
                        l.push(n.value)
                } catch (i) {
                    r = {
                        error: i
                    }
                } finally {
                    try {
                        n && !n.done && (a = o.return) && a.call(o)
                    } finally {
                        if (r)
                            throw r.error
                    }
                }
                return l
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = l(a("q1tI")),
            c = a("puIA"),
            d = a("yf/i"),
            m = a("z+lN"),
            f = a("dNNZ"),
            p = a("zIs9"),
            g = a("QtxA");
        a("D/cl"),
        t.default = function(e) {
            var t = e.alertContent,
                a = e.algoliaIndices,
                r = e.authenticatedPerson,
                o = e.domain,
                l = e.geoRecord,
                h = e.getIdentity,
                y = e.hasCampaign,
                _ = e.infoContent,
                b = e.isLoggedIn,
                v = e.locale,
                E = e.onCloseAlert,
                S = e.onLanguageChange,
                C = e.routes,
                O = e.showCookieBanner,
                P = u(s.useState(!1), 2),
                I = P[0],
                k = P[1];
            s.useEffect((function() {
                h && !I && (h(), k(!0))
            }), [I]);
            var N = u(s.useState(O), 2),
                w = N[0],
                T = N[1];
            return s.default.createElement("div", {
                className: "t-standard-header"
            }, s.default.createElement("div", {
                className: "t-standard-header-top"
            }, !!O && s.default.createElement(m.GDPRAlertBanner, {
                domain: o,
                isOpen: w,
                onButtonClick: function() {
                    g.setGDPRPref({
                        functional: !0,
                        marketing: !0
                    })
                },
                onClose: function() {
                    return T(!1)
                },
                onManageCookies: function() {
                    return alert("show modal")
                }
            }), s.default.createElement(d.GlobalHeader, null, s.default.createElement(f.NavStandard, {
                algoliaIndices: a,
                authenticatedPerson: r,
                hasCampaign: y,
                isLoggedIn: b
            }))), s.default.createElement("div", {
                className: "t-standard-header-alert"
            }, function() {
                if (_ && _.message) {
                    var e = _.message,
                        t = i(_, ["message"]);
                    return s.default.createElement(d.AlertBanner, n({}, t, {
                        onClose: function() {
                            E(p.AlertType.INFO)
                        },
                        type: p.AlertType.INFO
                    }), e)
                }
                return !1
            }(), function() {
                if (t && t.message) {
                    var e = t.message,
                        a = i(t, ["message"]);
                    return s.default.createElement(d.AlertBanner, n({}, a, {
                        onClose: function() {
                            E(a.type)
                        }
                    }), e)
                }
                return !1
            }(), s.default.createElement("div", {
                id: "alert-portal"
            })), s.default.createElement("div", {
                className: "t-standard-header-content mt4x global-wrapper"
            }, C && s.default.createElement(c.Routes, {
                as: "switch",
                config: C
            })), s.default.createElement(d.GlobalFooter, {
                countryCode: l.countryCode,
                region: l.region,
                onLanguageChange: S,
                locale: v
            }))
        }
    },
    sVLG: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.makeGetTopDonationList = t.makeGetAverageTopDonation = t.makeGetFormattedSuggestedTopDonation = t.makeGetBeneOrOrganizerName = void 0;
        var n = a("Y4ob"),
            r = a("Cge7"),
            o = a("ZZcF"),
            l = a("G4qV"),
            i = a("p1Kg"),
            u = a("K0mF"),
            s = a("mZEw");
        t.makeGetBeneOrOrganizerName = function() {
            return l.createSelector([r.makeGetCampaignBeneficiaryFullName(), r.makeGetCampaignOrganizerFullName()], (function(e, t) {
                return e || t
            }))
        };
        var c = function() {
            return l.createSelector([r.makeGetCampaignTopDonations(), r.makeGetCampaign()], (function(e, t) {
                var a = t.donation_count,
                    n = 10;
                a >= 50 && a < 150 ? n = 25 : a >= 150 && (n = 100);
                var r = 5 * Math.ceil(e.slice(0, n).map((function(e) {
                    return e.amount
                })).reduce((function(e, t) {
                    return e + t
                }), 0) / Math.min(e.length, n) / 5);
                return i.unluckyNumbers.includes(r) ? r + 5 : r
            }))
        };
        t.makeGetAverageTopDonation = c;
        t.makeGetFormattedSuggestedTopDonation = function() {
            return l.createSelector([c(), n.makeGetLocaleNumberFormatter()], (function(e, t) {
                return t.formatAsCurrency(e)
            }))
        };
        t.makeGetTopDonationList = function() {
            return l.createSelector([r.makeGetCampaignTopDonations(), n.makeGetLocaleNumberFormatter(), o.makeGetLocale(), r.makeGetCampaign()], (function(e, t, a, n) {
                var r = n.donation_count;
                u.resetDefaultRelativeTime();
                var o = 10;
                return r >= 50 && r < 150 ? o = 25 : r >= 150 && (o = 100), s.formatDonationsList(e.slice(0, o), t, a)
            }))
        }
    },
    sbNJ: function(e, t, a) {
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
            r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            o = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && n(t, e, a);
                return r(t, e), t
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = o(a("q1tI")),
            i = a("+Ded"),
            u = a("yf/i"),
            s = a("UEq0"),
            c = a("YgTb");
        function d(e) {
            var t = e.backButton,
                a = e.cards,
                n = e.children,
                r = e.dataViewId,
                o = e.showCards,
                d = e.showFaq,
                m = e.isLoadingCards,
                f = e.isSignedIn,
                p = e.title,
                g = e.signInUrl;
            return l.useEffect((function() {
                r && i.trackEvents.push({
                    type: "mp_page_view",
                    viewId: r
                })
            }), []), l.default.createElement("div", {
                "data-view-id": r,
                className: "o-contact-wrapper"
            }, t && l.default.createElement("nav", {
                className: "o-contact-wrapper-breadcrumbs"
            }, l.default.createElement(u.Button, {
                fill: "solid-sand",
                size: "small",
                to: t.to,
                as: t.as,
                type: "button",
                dataElementId: t.dataElementId
            }, l.default.createElement(u.UIIcon, {
                name: "caret-left",
                textPairing: "appendText"
            }), l.default.createElement(u.HtmlSpace, {
                type: "non-breaking"
            }), t.label)), l.default.createElement("header", {
                className: "o-contact-wrapper-header"
            }, l.default.createElement("h1", null, p)), l.default.createElement("aside", {
                className: "o-contact-wrapper-sidebar"
            }, o && l.default.createElement(l.default.Fragment, null, l.default.createElement(s.CardList, {
                title: c.t("Self-Service"),
                cards: a
            }), f && a.length <= 0 && l.default.createElement("p", {
                className: "color-gray"
            }, c.t("Please select an option which best describes you to see relevant information.")), !f && l.default.createElement(l.default.Fragment, null, l.default.createElement("p", {
                className: "color-gray"
            }, c.t("For customized help, please sign in.")), l.default.createElement(u.Button, {
                className: "o-contact-wrapper-sign-in mb4x",
                fill: "hollow-green",
                size: "medium",
                type: "button",
                to: g,
                as: "route",
                dataElementId: "btn_contact_sign_in"
            }, c.t("Sign In"))), m && l.default.createElement(u.LoadingDots, {
                size: "large",
                color: "green"
            })), d && l.default.createElement(u.LinkList, {
                title: c.t("Top Answers"),
                items: [{
                    href: "https://support.gofundme.com/hc/en-us/articles/204150420-Requesting-a-Refund",
                    text: c.t("How do I get a refund?")
                }, {
                    href: "https://support.gofundme.com/hc/en-us/articles/360001992767-Withdrawal-Guide",
                    text: c.t("How do I withdraw money?")
                }, {
                    href: "https://support.gofundme.com/hc/en-us/articles/360001972748-Supported-Countries",
                    text: c.t("Is my country supported?")
                }, {
                    href: "https://support.gofundme.com/hc/en-us/articles/360001992667-Requirements-to-Withdraw-from-GoFundMe",
                    text: c.t("Can I withdraw money?")
                }, {
                    href: "https://support.gofundme.com/hc/en-us/articles/214586308-Resetting-Your-Password",
                    text: c.t("How do I reset my password?")
                }, {
                    href: "https://support.gofundme.com/hc/en-us/articles/204993267-Inviting-Someone-Else-to-Withdraw",
                    text: c.t("How do I invite someone to withdraw?")
                }, {
                    href: "https://support.gofundme.com/hc/en-us/articles/360025902712-Failed-or-Rejected-Withdrawals",
                    text: c.t("I can't withdraw my funds, now what?")
                }, {
                    href: "https://support.gofundme.com/hc/en-us/articles/203604424-Fees-on-GoFundMe",
                    text: c.t("How do your fees work?")
                }, {
                    href: "https://support.gofundme.com/hc/en-us/articles/204295498-Taxes-for-Organizers",
                    text: c.t("What about taxes and stuff?")
                }]
            })), l.default.createElement("section", {
                className: "o-contact-wrapper-content"
            }, n))
        }
        a("oonK"),
        d.defaultProps = {
            cards: [],
            isLoadingCards: !1,
            isSignedIn: !1,
            showCards: !1,
            showFaq: !1
        },
        t.default = d
    },
    scHp: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("/EoX");
        Object.defineProperty(t, "SearchResultCard", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    sflh: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("q1tI")),
            o = a("YgTb"),
            l = a("yf/i"),
            i = a("ugNG");
        t.default = function() {
            return r.default.createElement(i.PurpleIconWithText, {
                icon: r.default.createElement(l.UIIcon, {
                    name: "location"
                })
            }, r.default.createElement("strong", null, o.t("This fundraiser is located near you")))
        }
    },
    tIro: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("Wvzh");
        Object.defineProperty(t, "SmsShareButton", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    tQQ4: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    tTwi: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("7y+r");
        Object.defineProperty(t, "ReduxUploadField", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    tXom: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a("/MKj"),
            o = a("Cge7"),
            l = a("6M7q"),
            i = n(a("woC9")),
            u = r.connect((function() {
                var e = o.makeGetCampaign(),
                    t = o.makeGetCampaignLastDonation();
                return function(a, n) {
                    var r = e(a),
                        o = t(a),
                        i = l.getLastDonorDetails(n.match.params.campaignUrl),
                        u = {
                            checkoutId: 0,
                            donationAmount: 0,
                            donationId: 0
                        };
                    return o ? (u.donationId = o.donation_id || 0, u.donationAmount = o.amount || 0, u.checkoutId = o.checkout_id || 0) : i && (u.donationId = 0, u.donationAmount = i.amount || 0, u.checkoutId = i.checkout_id || 0), {
                        checkoutId: u.checkoutId,
                        currency: r.currencycode,
                        donationAmount: u.donationAmount,
                        donationId: u.donationId,
                        fundId: r.id,
                        fundName: r.fund_name
                    }
                }
            }))(i.default);
        t.default = u
    },
    thIe: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("q1tI")),
            o = a("yf/i"),
            l = a("utQf"),
            i = a("YgTb");
        t.default = function(e) {
            var t = e.charity,
                a = t.organization;
            return r.default.createElement(l.CharityModal, {
                title: i.t("Donations raised benefit:"),
                subtitle: i.t("How charity fundraisers work"),
                organizerInfoMeta: (null == t ? void 0 : t.meta) ? r.default.createElement("div", {
                    className: "color-gray mb4x"
                }, r.default.createElement("div", null, t.meta.roleString), r.default.createElement("div", null, t.meta.city), r.default.createElement("div", null, "RCN: ", t.meta.ein)) : null,
                charityOrganization: a
            }, r.default.createElement("ol", null, r.default.createElement("li", {
                className: "m-campaign-members-main-modal-item"
            }, r.default.createElement(i.Trans, null, "You are donating to", r.default.createElement(o.HtmlSpace, {
                type: "breaking"
            }), r.default.createElement(o.Link, {
                as: "href",
                rel: "noopener",
                target: "_blank",
                to: "https://www.paypal.com/ie/webapps/mpp/givingfund/donortermsofservice"
            }, "PayPal Giving Fund Ireland"), ", a registered charity (No. 20205692), which will email you a receipt for your donation.")), r.default.createElement("li", {
                className: "m-campaign-members-main-modal-item"
            }, i.t("The charity will typically receive the funds from PayPal Giving Fund within 15-45 days (90 days if the charity has not enrolled).*"))), r.default.createElement("div", {
                className: "text-small color-gray"
            }, r.default.createElement(i.Trans, null, "*In rare cases, a charity may cease to meet PayPal Giving Fund Ireland’s legal or other eligibility requirements to receive funds or may not accept the funds. In such cases, PayPal Giving Fund Ireland will", r.default.createElement(o.HtmlSpace, {
                type: "breaking"
            }), r.default.createElement(o.Link, {
                as: "href",
                rel: "noopener",
                target: "_blank",
                to: "https://www.paypal.com/ie/webapps/mpp/givingfund/donation-delivery-policy"
            }, "reassign the funds"), r.default.createElement(o.HtmlSpace, {
                type: "breaking"
            }), "to another charity and (wherever possible) seek a new recommendation from you.")))
        }
    },
    ttEt: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("TSYQ")),
            o = n(a("q1tI"));
        t.default = function(e) {
            var t = e.className,
                a = e.statsUrl,
                n = r.default(t, "m-stats-widget");
            return o.default.createElement("iframe", {
                className: n,
                src: a,
                height: "1000px",
                width: "350px"
            })
        }
    },
    u1kj: function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = r(a("TSYQ")),
            l = r(a("q1tI")),
            i = a("yf/i"),
            u = a("z+lN"),
            s = a("dNNZ"),
            c = a("wDHr"),
            d = a("C0Xu");
        a("u3h/"),
        t.default = function(e) {
            var t,
                a = e.className,
                r = e.organizer,
                m = e.beneficiary,
                f = e.charity,
                p = e.contactLink,
                g = m || (f || void 0),
                h = o.default(a, "m-campaign-members-main", {
                    "m-campaign-members-main--has-beneficiary": !!m || !!f
                });
            if (f)
                switch (f.meta.country) {
                case d.CharityCountries.CA:
                    t = l.default.createElement(s.CACharityModal, {
                        charity: f
                    });
                    break;
                case d.CharityCountries.AU:
                    t = l.default.createElement(s.AUCharityModal, {
                        charity: f
                    });
                    break;
                case d.CharityCountries.GB:
                    t = l.default.createElement(s.UKCharityModal, {
                        charity: f
                    });
                    break;
                case d.CharityCountries.IE:
                    t = l.default.createElement(s.IECharityModal, {
                        charity: f
                    });
                    break;
                default:
                    t = l.default.createElement(s.USCharityModal, {
                        charity: f
                    })
                }
            return l.default.createElement("div", {
                className: h
            }, r && l.default.createElement("div", {
                className: "m-campaign-members-main-organizer"
            }, l.default.createElement(u.CampaignMemberItem, n({}, r)), g && l.default.createElement(i.UIIcon, {
                className: "show-for-large mt",
                name: "arrow-right",
                size: "large"
            })), m ? l.default.createElement("div", {
                className: "m-campaign-members-main-beneficiary"
            }, l.default.createElement(u.CampaignMemberItem, n({}, m))) : f ? l.default.createElement("div", {
                className: "m-campaign-members-main-beneficiary"
            }, l.default.createElement(i.OrganizationInfo, n({}, f, {
                verified: !0
            }), l.default.createElement("div", {
                className: "text-small"
            }, l.default.createElement("div", null, f.meta.roleString), l.default.createElement("div", null, f.meta.title))), t) : void 0, p && r && l.default.createElement("div", {
                className: "m-campaign-members-main-contact"
            }, l.default.createElement(c.ContactOrganizerModal, {
                organizer: r.person
            })))
        }
    },
    "u3h/": function(e, t, a) {
        "use strict";
        a.r(t)
    },
    u8eZ: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("TSYQ")),
            o = n(a("+QRC")),
            l = n(a("q1tI")),
            i = a("yf/i"),
            u = a("K9qA"),
            s = a("o6hd"),
            c = a("mVWG"),
            d = a("YgTb");
        a("pyms"),
        t.default = function(e) {
            var t = e.arrowIcon,
                a = e.campaignUrl,
                n = e.className,
                m = e.dataElementId,
                f = e.utmFromKey,
                p = e.getShortUrl,
                g = e.shortUrl,
                h = e.shortUrlFail,
                y = e.shortUrlSuccess,
                _ = e.url,
                b = !!t && l.default.createElement(i.UIIcon, {
                    name: "caret-right",
                    className: "share-button-arrow hide-for-large"
                }),
                v = r.default(n, "hide-for-large m-instagram-share"),
                E = function() {
                    o.default(g || _),
                    u.canUseWindow() && window.open("https://www.instagram.com")
                };
            return l.default.createElement(i.Toggle, null, (function(e) {
                var t = e.on,
                    n = e.setOn,
                    r = e.setOff;
                return l.default.createElement(l.default.Fragment, null, l.default.createElement(i.Button, {
                    className: v,
                    layout: "inline",
                    as: "route",
                    dataElementId: m || "btn_embed_share",
                    onClick: function() {
                        n(),
                        p && !g && p({
                            fundUrl: a,
                            shareLocation: f,
                            shareType: s.UtmKeys.INSTAGRAM_SHARESHEET,
                            utm: s.getUtm(s.UtmKeys.INSTAGRAM_SHARESHEET, f)
                        })
                    }
                }, l.default.createElement(i.LogoIcon, {
                    name: "Instagram-color",
                    className: "share-button-icon"
                }), d.t("Instagram"), b), l.default.createElement(i.Modal, {
                    as: "inline",
                    isOpen: t,
                    onClose: r,
                    className: "m-instagram-share-modal"
                }, y || h ? l.default.createElement(l.default.Fragment, null, l.default.createElement("div", {
                    className: "flex-container align-middle mb4x"
                }, l.default.createElement(i.LogoIcon, {
                    name: "Instagram-color",
                    className: "m-instagram-share-icon-large mr2x"
                }), l.default.createElement("h2", {
                    className: "mb0"
                }, d.t("Copy and paste this link on your Instagram bio"))), l.default.createElement(c.ClipboardField, {
                    as: "input",
                    dataElementId: {
                        button: "btn_instagram_copylink",
                        input: "input_instagram_copy_link"
                    },
                    id: "share-to-clipboard",
                    labelText: d.t("Fundraiser link"),
                    layout: "stacked",
                    messageSuccess: d.t("Link copied"),
                    messageSuccessDuration: 6e3,
                    messageFailure: d.t("Something went wrong."),
                    name: "share-to-clipboard"
                }, g || _), l.default.createElement(i.Button, {
                    ariaLabel: d.t("Share on Instagram"),
                    as: "href",
                    className: "m-instagram-open-button a-button--max-full",
                    dataElementId: "btn_instagram_open",
                    fill: "solid-green",
                    id: "btn-instagram-open",
                    onClick: E,
                    size: "large"
                }, d.t("Share on Instagram"), l.default.createElement(i.UIIcon, {
                    className: "m-instagram-share-arrow-right",
                    name: "arrow-right"
                })), l.default.createElement("div", {
                    className: "text-center mt2x"
                }, l.default.createElement(i.Link, {
                    dataElementId: "instagram_modal_close",
                    onClick: r
                }, d.t("Back to sharing")))) : l.default.createElement(i.LoadingDots, {
                    color: "green",
                    size: "large",
                    className: "m-instagram-share-modal-dots"
                })))
            }))
        }
    },
    uCTY: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("6ybM");
        Object.defineProperty(t, "Collage", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    ucNB: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("Z2ed");
        Object.defineProperty(t, "ShareList", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        }),
        Object.defineProperty(t, "ShareListProps", {
            enumerable: !0,
            get: function() {
                return n.ShareListProps
            }
        })
    },
    uf23: function(e, t, a) {
        "use strict";
        var n = this && this.__awaiter || function(e, t, a, n) {
                return new (a || (a = Promise))((function(r, o) {
                    function l(e) {
                        try {
                            u(n.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function i(e) {
                        try {
                            u(n.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function u(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value, t instanceof a ? t : new a((function(e) {
                            e(t)
                        }))).then(l, i)
                    }
                    u((n = n.apply(e, t || [])).next())
                }))
            },
            r = this && this.__generator || function(e, t) {
                var a,
                    n,
                    r,
                    o,
                    l = {
                        label: 0,
                        sent: function() {
                            if (1 & r[0])
                                throw r[1];
                            return r[1]
                        },
                        trys: [],
                        ops: []
                    };
                return o = {
                    next: i(0),
                    throw: i(1),
                    return: i(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;
                function i(o) {
                    return function(i) {
                        return function(o) {
                            if (a)
                                throw new TypeError("Generator is already executing.");
                            for (; l;)
                                try {
                                    if (a = 1, n && (r = 2 & o[0] ? n.return : o[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, o[1])).done)
                                        return r;
                                    switch (n = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        r = o;
                                        break;
                                    case 4:
                                        return l.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        l.label++,
                                        n = o[1],
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = l.ops.pop(),
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(r = l.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                            l.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && l.label < r[1]) {
                                            l.label = r[1],
                                            r = o;
                                            break
                                        }
                                        if (r && l.label < r[2]) {
                                            l.label = r[2],
                                            l.ops.push(o);
                                            break
                                        }
                                        r[2] && l.ops.pop(),
                                        l.trys.pop();
                                        continue
                                    }
                                    o = t.call(e, l)
                                } catch (i) {
                                    o = [6, i],
                                    n = 0
                                } finally {
                                    a = r = 0
                                }
                            if (5 & o[0])
                                throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, i])
                    }
                }
            },
            o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = a("dpDq"),
            i = o(a("EcZt")),
            u = o(a("oxJe")),
            s = o(a("4M3g")),
            c = o(a("cr+I")),
            d = a("/MKj"),
            m = o(a("Wkfp")),
            f = function(e) {
                return e.location.pathname.replace(/\/?sign-up(\/facebook-confirm)?\/?$/, "")
            },
            p = d.connect((function() {
                var e = l.makeGetIsFacebookSigningIn();
                return function(t) {
                    return {
                        isFacebookSigningIn: e(t)
                    }
                }
            }), (function(e, t) {
                return {
                    authenticateFacebookUser: function(t, a) {
                        e({
                            onFailure: a,
                            onSuccess: t,
                            type: u.default.FB_AUTHENTICATE_AND_SIGN_IN_IN_PROGRESS
                        })
                    },
                    goToConfirmFacebookEmail: function() {
                        t.history.push(f(t) + "/sign-up/facebook-confirm" + t.location.search)
                    },
                    onFacebookSignUpSuccess: function() {
                        return n(void 0, void 0, void 0, (function() {
                            var a,
                                o;
                            return r(this, (function(l) {
                                switch (l.label) {
                                case 0:
                                    return a = c.default.parse(t.location.search).teamInvite, (null === (o = c.default.parse(t.location.search)) || void 0 === o ? void 0 : o.fbStatus) ? (e({
                                        onSuccess: function() {
                                            return n(void 0, void 0, void 0, (function() {
                                                return r(this, (function(a) {
                                                    switch (a.label) {
                                                    case 0:
                                                        return [4, e({
                                                            type: s.default.GET_FEED_IDENTITY_IN_PROGRESS
                                                        })];
                                                    case 1:
                                                        return a.sent(), t.history.push(f(t) + t.location.search), [2]
                                                    }
                                                }))
                                            }))
                                        },
                                        type: u.default.FB_AUTHENTICATE_AND_UPDATE_PERSON_IN_PROGRESS
                                    }), [3, 4]) : [3, 1];
                                case 1:
                                    return a ? (e({
                                        onSuccess: function() {
                                            return n(void 0, void 0, void 0, (function() {
                                                return r(this, (function(a) {
                                                    switch (a.label) {
                                                    case 0:
                                                        return [4, e({
                                                            type: s.default.GET_FEED_IDENTITY_IN_PROGRESS
                                                        })];
                                                    case 1:
                                                        return a.sent(), t.history.push(f(t)), [2]
                                                    }
                                                }))
                                            }))
                                        },
                                        payload: {
                                            campaign: t.match.params.campaignUrl,
                                            invitationHash: a
                                        },
                                        type: i.default.ACCEPT_TEAM_INVITATION
                                    }), [3, 4]) : [3, 2];
                                case 2:
                                    return [4, e({
                                        type: s.default.GET_FEED_IDENTITY_IN_PROGRESS
                                    })];
                                case 3:
                                    l.sent(),
                                    t.history.push(f(t) + t.location.search),
                                    l.label = 4;
                                case 4:
                                    return [2]
                                }
                            }))
                        }))
                    }
                }
            }))(m.default);
        t.default = p
    },
    ufYw: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    ugNG: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("ZSG1");
        Object.defineProperty(t, "PurpleIconWithText", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    ugOw: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("7Z3M");
        Object.defineProperty(t, "Donation", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    utQf: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("kred");
        Object.defineProperty(t, "CharityModal", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    vTre: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("q1tI")),
            o = a("Cv17"),
            l = function(e) {
                var t = (0, e.highlight)({
                    highlightProperty: "_highlightResult",
                    attribute: e.attribute,
                    hit: e.hit
                });
                return r.default.createElement("span", null, t.map((function(e, t) {
                    return e.isHighlighted ? r.default.createElement("strong", {
                        key: t,
                        dangerouslySetInnerHTML: {
                            __html: e.value
                        }
                    }) : r.default.createElement("span", {
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
                n = o.connectHighlight(l);
            return r.default.createElement(n, {
                attribute: t,
                hit: a
            })
        }
    },
    vZsH: function(e, t, a) {
        "use strict";
        var n = this && this.__read || function(e, t) {
                var a = "function" == typeof Symbol && e[Symbol.iterator];
                if (!a)
                    return e;
                var n,
                    r,
                    o = a.call(e),
                    l = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(n = o.next()).done;)
                        l.push(n.value)
                } catch (i) {
                    r = {
                        error: i
                    }
                } finally {
                    try {
                        n && !n.done && (a = o.return) && a.call(o)
                    } finally {
                        if (r)
                            throw r.error
                    }
                }
                return l
            },
            r = this && this.__spread || function() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e = e.concat(n(arguments[t]));
                return e
            },
            o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = a("YMFa"),
            i = o(a("TSYQ")),
            u = o(a("q1tI"));
        function s(e) {
            var t = e.className,
                a = e.count,
                n = e.icon,
                o = i.default(t, "m-person-loading-list"),
                s = r(Array(a).keys()).map((function(e) {
                    return u.default.createElement(l.PersonLoading, {
                        icon: n,
                        key: e,
                        className: "m-person-loading-list-item"
                    })
                }));
            return u.default.createElement("div", {
                className: o
            }, s, u.default.createElement("div", {
                className: "m-person-loading-list-fade"
            }))
        }
        a("MG+b"),
        s.defaultProps = {
            icon: "blank"
        },
        t.default = s
    },
    vbwR: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    vjG4: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    "w+7n": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("Z/t5");
        Object.defineProperty(t, "CampaignTopDonationsModal", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        });
        var r = a("W/va");
        Object.defineProperty(t, "CampaignTopDonationsModalConnected", {
            enumerable: !0,
            get: function() {
                return r.default
            }
        })
    },
    "w+sG": function(e, t, a) {
        "use strict";
        a.r(t)
    },
    wAEE: function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            r = this && this.__createBinding || (Object.create ? function(e, t, a, n) {
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
            o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            l = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && r(t, e, a);
                return o(t, e), t
            },
            i = this && this.__read || function(e, t) {
                var a = "function" == typeof Symbol && e[Symbol.iterator];
                if (!a)
                    return e;
                var n,
                    r,
                    o = a.call(e),
                    l = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(n = o.next()).done;)
                        l.push(n.value)
                } catch (i) {
                    r = {
                        error: i
                    }
                } finally {
                    try {
                        n && !n.done && (a = o.return) && a.call(o)
                    } finally {
                        if (r)
                            throw r.error
                    }
                }
                return l
            },
            u = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = u(a("TSYQ")),
            c = u(a("+QRC")),
            d = l(a("q1tI")),
            m = a("yf/i"),
            f = a("zIs9"),
            p = a("YgTb");
        function g(e) {
            var t = e.as,
                a = e.buttonFill,
                r = e.buttonText,
                o = e.className,
                l = e.children,
                u = e.copyStat,
                g = e.dataElementId,
                h = e.id,
                y = e.labelText,
                _ = e.layout,
                b = e.messageSuccessDuration,
                v = e.messageFailure,
                E = e.messageSuccess,
                S = e.messageSuccessTip,
                C = e.name,
                O = e.isInitialFocus,
                P = e.additionalContent,
                I = s.default(o, "m-clipboard-field", "m-clipboard-field--" + _),
                k = s.default("mt-three-quarters", {
                    "show-for-large": "textSuccessTips" === t
                }),
                N = i(d.useState(u || f.CopyStatus.none), 2),
                w = N[0],
                T = N[1],
                M = i(d.useState(!1), 2),
                A = M[0],
                j = M[1];
            d.useEffect((function() {
                var e = setTimeout((function() {
                    T(f.CopyStatus.none),
                    j(!1)
                }), b);
                return function() {
                    clearTimeout(e)
                }
            }), [w, A]);
            var x = function() {
                    c.default(l) ? (T(f.CopyStatus.success), j("textSuccessTips" === t || "inputSuccessTips" === t)) : T(f.CopyStatus.failure)
                },
                D = {
                    dataElementId: g ? g.input : void 0,
                    id: h,
                    name: C,
                    onClick: x,
                    readOnly: !0,
                    value: l
                },
                G = O && {
                    tabIndex: 1
                };
            return d.default.createElement("div", {
                className: I
            }, d.default.createElement("div", {
                className: "m-clipboard-field-inner"
            }, d.default.createElement("div", {
                className: "m-clipboard-field-content"
            }, "codeblock" === t ? d.default.createElement(m.CodeBlock, {
                dataElementId: g ? g.input : void 0,
                onClick: x
            }, l) : "input" === t || "inputSuccessTips" === t ? d.default.createElement(m.TextInput, n({}, D)) : "text" === t ? d.default.createElement(m.Button, {
                ariaLabel: p.t("Copy to clip board"),
                className: "m-clipboard-field-text",
                dataElementId: g ? g.button : void 0,
                onClick: x
            }, d.default.createElement(m.UIIcon, {
                name: "link",
                className: "mr2x m-clipboard-field-text-icon"
            }), r) : "textSuccessTips" === t ? d.default.createElement(d.default.Fragment, null, d.default.createElement(m.Button, {
                ariaLabel: p.t("Copy to clip board"),
                className: "m-clipboard-field-text m-clipboard-field-text--tips",
                dataElementId: g ? g.button : void 0,
                onClick: x
            }, d.default.createElement(m.UIIcon, {
                name: "link",
                className: "mr2x m-clipboard-field-text-icon"
            }), A ? d.default.createElement(d.default.Fragment, null, d.default.createElement("div", {
                className: "m-clipboard-field-text-tips hide-for-large"
            }, d.default.createElement("div", {
                className: "text-underline"
            }, p.t("Fundraiser link copied"), d.default.createElement(m.UIIcon, {
                name: "check",
                className: "color-green ml"
            })), S), d.default.createElement("div", {
                className: "show-for-large"
            }, r)) : r)) : d.default.createElement(m.TextArea, n({}, D, {
                className: "m-clipboard-field-text-area"
            })), y && d.default.createElement(m.Label, {
                className: "m-clipboard-field-label",
                htmlFor: h
            }, y)), !("text" === t || "textSuccessTips" === t) && d.default.createElement("div", null, d.default.createElement(m.Button, n({
                ariaLabel: p.t("Copy to clipboard"),
                className: "m-clipboard-field-button",
                dataElementId: g ? g.button : void 0,
                fill: a,
                id: h + "-button",
                onClick: x,
                size: "large"
            }, G), r))), w === f.CopyStatus.success && d.default.createElement(m.FieldAlert, {
                className: k,
                status: m.FieldStatus.SUCCESS
            }, E), w === f.CopyStatus.failure && d.default.createElement(m.FieldAlert, {
                className: k,
                status: m.FieldStatus.ERROR
            }, v), A && "inputSuccessTips" === t && d.default.createElement(m.Well, {
                className: "m-clipboard-field-input-success-tip mt2x"
            }, S), P && d.default.createElement(P, {
                onClick: x
            }))
        }
        a("bMYr"),
        g.defaultProps = {
            buttonFill: "hollow-green",
            buttonText: "Copy Link",
            messageSuccessDuration: 3e3
        },
        t.default = g
    },
    wDHr: function(e, t, a) {
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
            r = this && this.__exportStar || function(e, t) {
                for (var a in e)
                    "default" === a || t.hasOwnProperty(a) || n(t, e, a)
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        r(a("rXMt"), t),
        r(a("w+7n"), t),
        r(a("6VGv"), t),
        r(a("wHm0"), t),
        r(a("Ehkd"), t),
        r(a("CRBb"), t),
        r(a("4c2h"), t),
        r(a("b2Xb"), t),
        r(a("xnA8"), t),
        r(a("bj6y"), t),
        r(a("CX/d"), t),
        r(a("dS1b"), t),
        r(a("IF5B"), t),
        r(a("7A5A"), t),
        r(a("UsDk"), t),
        r(a("l2P8"), t),
        r(a("+EFV"), t),
        r(a("k4HN"), t),
        r(a("bfeT"), t),
        r(a("ecEv"), t),
        r(a("m7Nk"), t),
        r(a("O/gF"), t),
        r(a("GivM"), t),
        r(a("RSPH"), t),
        r(a("ASry"), t),
        r(a("Vn7H"), t),
        r(a("Yt+L"), t)
    },
    wHm0: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("gGNt");
        Object.defineProperty(t, "CampaignImageGallery", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        });
        var r = a("ic3c");
        Object.defineProperty(t, "CampaignImageGalleryConnected", {
            enumerable: !0,
            get: function() {
                return r.default
            }
        })
    },
    wI1W: function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            r = this && this.__createBinding || (Object.create ? function(e, t, a, n) {
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
            o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            l = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && r(t, e, a);
                return o(t, e), t
            },
            i = this && this.__read || function(e, t) {
                var a = "function" == typeof Symbol && e[Symbol.iterator];
                if (!a)
                    return e;
                var n,
                    r,
                    o = a.call(e),
                    l = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(n = o.next()).done;)
                        l.push(n.value)
                } catch (i) {
                    r = {
                        error: i
                    }
                } finally {
                    try {
                        n && !n.done && (a = o.return) && a.call(o)
                    } finally {
                        if (r)
                            throw r.error
                    }
                }
                return l
            },
            u = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = u(a("TSYQ")),
            c = l(a("q1tI")),
            d = a("wE+H"),
            m = a("yf/i"),
            f = a("0Y3C"),
            p = a("z+lN"),
            g = a("YgTb");
        a("7L4o"),
        t.default = function(e) {
            var t = e.author,
                a = e.className,
                r = e.errors,
                o = e.getDropZoneInputProps,
                l = e.getDropZoneRootProps,
                u = e.images,
                h = e.onDeleteImage,
                y = e.statusMessage,
                _ = e.statusType,
                b = e.submitting,
                v = e.text,
                E = s.default(a, "o-comment-creation"),
                S = t.isAnonymous ? d.IdentityType.anonymous : d.IdentityType.person,
                C = i(c.useState(v || ""), 2),
                O = C[0],
                P = C[1],
                I = i(c.useState(!1), 2),
                k = I[0],
                N = I[1],
                w = s.default({
                    "o-comment-form-upload-button--disabled": !!u && u.length >= 10
                });
            return c.useEffect((function() {
                P(v || "")
            }), [v]), c.default.createElement("div", {
                className: E
            }, c.default.createElement("div", {
                className: "o-comment-creation-avatar-container mb2x"
            }, c.default.createElement(m.Avatar, {
                as: S,
                className: "o-comment-creation-avatar",
                initials: t.initials || f.getInitials(t.fullName),
                profileImage: t.profileImage
            }), c.default.createElement("div", {
                className: "o-comment-creation-meta"
            }, c.default.createElement("span", {
                id: "comment-author-name"
            }, t.isAnonymous ? g.t("Anonymous") : t.fullName))), c.default.createElement("div", {
                className: "o-comment-creation-input",
                onClick: function() {
                    return N(!0)
                }
            }, c.default.createElement(m.TextArea, {
                autosizeRows: k ? 3 : 1,
                className: "o-comment-creation-text-area",
                disabled: b,
                id: "comment-creation-text",
                maxLength: 1e3,
                name: "comment-creation-text",
                onChange: function(e) {
                    P(e.currentTarget.value)
                },
                placeholder: g.t("I donated because...")
            }), k && c.default.createElement("div", {
                className: "o-comment-creation-count weight-900"
            }, 1e3 - O.length), y && _ && c.default.createElement(m.FieldAlert, {
                className: "mt",
                status: _
            }, y)), u && c.default.createElement("div", {
                className: "o-comment-creation-preview"
            }, u.map((function(e, t) {
                return c.default.createElement(p.ImageUploadPreview, {
                    url: e.url,
                    key: t,
                    onDelete: h
                })
            }))), !!l && !!o && c.default.createElement("div", {
                className: "o-comment-creation-add-photo mb2x"
            }, c.default.createElement("input", n({}, o())), c.default.createElement(m.Button, {
                className: w,
                disabled: !!u && u.length >= 10,
                id: "comment-photo-add"
            }, c.default.createElement("div", n({}, l()), c.default.createElement(m.UIIcon, {
                name: "photo",
                size: "large"
            }), c.default.createElement("span", {
                className: "text-small text-underline ml"
            }, function() {
                if (u) {
                    if (u.length >= 10)
                        return g.t("Photo limit reached");
                    if (u.length > 0)
                        return g.t("Add more photos")
                }
                return g.t("Add photos to comment")
            }())))), !!r && r.map((function(e, t) {
                return c.default.createElement(m.FieldAlert, {
                    key: t,
                    className: "mt mb2x",
                    status: m.FieldStatus.ERROR
                }, e)
            })), c.default.createElement("div", {
                className: "o-comment-creation-post"
            }, c.default.createElement("p", {
                className: "color-gray text-small"
            }, t.isAnonymous ? g.t("Your donation will be displayed as Anonymous, and this comment will not show up publicly on the campaign.") : g.t("Add this public comment to the fundraiser.")), c.default.createElement(m.Button, {
                className: "o-comment-creation-button",
                dataElementId: "btn_comment",
                disabled: b,
                fill: "solid-green",
                id: "comment-post",
                layout: "inline",
                onClick: function() {
                    e.onSubmit({
                        facebookId: t.facebookId,
                        fullName: t.fullName,
                        fundUrl: e.fundUrl,
                        text: O
                    })
                },
                size: "large"
            }, b ? c.default.createElement(m.LoadingDots, {
                color: "white",
                size: "large"
            }) : g.t("Post comment"))))
        }
    },
    "wS+6": function(e, t, a) {
        "use strict";
        a.r(t)
    },
    wWQP: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    woC9: function(e, t, a) {
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
            r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            o = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && n(t, e, a);
                return r(t, e), t
            },
            l = this && this.__read || function(e, t) {
                var a = "function" == typeof Symbol && e[Symbol.iterator];
                if (!a)
                    return e;
                var n,
                    r,
                    o = a.call(e),
                    l = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(n = o.next()).done;)
                        l.push(n.value)
                } catch (i) {
                    r = {
                        error: i
                    }
                } finally {
                    try {
                        n && !n.done && (a = o.return) && a.call(o)
                    } finally {
                        if (r)
                            throw r.error
                    }
                }
                return l
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(a("q1tI")),
            u = a("puIA"),
            s = a("yf/i"),
            c = a("YgTb"),
            d = a("Febe"),
            m = a("+Ded"),
            f = a("K9qA");
        t.default = function(e) {
            var t = e.checkoutId,
                a = e.currency,
                n = e.donationAmount,
                r = e.donationId,
                o = void 0 === r ? 0 : r,
                p = e.fundId,
                g = e.fundName,
                h = e.history,
                y = e.location,
                _ = e.match.params,
                b = _.campaignUrl,
                v = _.type,
                E = e.routes,
                S = "lb_postdonate_" + (v || "share");
            i.useEffect((function() {
                v || h.push("/f/" + b + "/thankyou/share" + y.search)
            }), []);
            var C = {
                    currency: a,
                    donationAmount: n,
                    donationId: o,
                    fundId: p,
                    fundName: g,
                    viewId: S
                },
                O = d.generateEventToBeTracked(C),
                P = f.canUseWindow(),
                I = l(i.useState(!1), 2),
                k = I[0],
                N = I[1];
            i.useEffect((function() {
                m.trackEvents.push(O)
            }), [v]),
            i.useEffect((function() {
                !k && "share" === v && P && (window.dataLayer.push({
                    checkout: o ? "bigweb" : "uc",
                    event: "uniqueTransaction",
                    transactionId: o || t
                }), N(!0))
            }), [o, n, t, v, P]);
            var w = v && "comment" === v ? i.default.createElement(s.Button, {
                ariaLabel: c.t("Back to previous page"),
                dataElementId: "btn_postdonate_back_to_share",
                id: "post-donate-back-to-share",
                fill: "solid-sand",
                size: "small",
                to: "/f/" + b + "/thankyou/share" + y.search
            }, i.default.createElement(s.UIIcon, {
                name: "caret-left",
                textPairing: "prependText"
            }), c.t("Back")) : void 0;
            return i.default.createElement(s.Modal, {
                closeDataElementId: "btn_postdonate_close_modal",
                dataViewId: "lb_postdonate_" + v,
                heading: w,
                isOpen: !0,
                sandOverlay: !0,
                willClickOutsideClose: !1
            }, E && i.default.createElement(u.Routes, {
                as: "switch",
                config: E
            }))
        }
    },
    x1yX: function(e, t, a) {
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
            r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            o = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && n(t, e, a);
                return r(t, e), t
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = o(a("q1tI")),
            i = a("+Ded"),
            u = a("MgMj"),
            s = a("yf/i"),
            c = a("o6hd"),
            d = a("z+lN"),
            m = a("YgTb"),
            f = a("zIs9"),
            p = a("wmfR"),
            g = a("wNP3");
        a("KExh"),
        t.default = function(e) {
            var t = e.campaignTitle,
                a = e.copySeeAllLink,
                n = e.emailAndroidShareLink,
                r = e.emailShareLink,
                o = e.emailShortUrlComplete,
                h = e.getBatchShortUrl,
                y = e.getShortUrl,
                _ = e.match,
                b = e.memberId,
                v = e.inDegradedMode,
                E = e.organizerFullName,
                S = e.shareUrl,
                C = e.smsAndroidShareLink,
                O = e.smsShareLink,
                P = e.twitterShareLink,
                I = e.whatsAppDescriptionExcerpt,
                k = e.whatsAppShareLink;
            l.useEffect((function() {
                var e = [{
                    additionalShareParams: {
                        member: b
                    },
                    fundUrl: _.params.campaignUrl,
                    shareLocation: c.UtmFromKeys.CAMPAIGN_PAGE,
                    shareType: c.UtmKeys.COPY_LINK_ALL,
                    utm: c.getUtm(c.UtmKeys.COPY_LINK_ALL, c.UtmFromKeys.CAMPAIGN_PAGE)
                }, {
                    fundUrl: _.params.campaignUrl,
                    shareLocation: c.UtmFromKeys.CAMPAIGN_PAGE,
                    shareType: c.UtmKeys.TWITTER_SHARE_SHARESHEET,
                    utm: c.getUtm(c.UtmKeys.TWITTER_SHARE_SHARESHEET, c.UtmFromKeys.CAMPAIGN_PAGE)
                }, {
                    fundUrl: _.params.campaignUrl,
                    shareLocation: c.UtmFromKeys.CAMPAIGN_PAGE,
                    shareType: c.UtmKeys.WHATSAPP_SHARESHEET,
                    utm: c.getUtm(c.UtmKeys.WHATSAPP_SHARESHEET, c.UtmFromKeys.CAMPAIGN_PAGE)
                }];
                e.push(p.isAndroid() ? {
                    fundUrl: _.params.campaignUrl,
                    shareLocation: c.UtmFromKeys.CAMPAIGN_PAGE,
                    shareType: c.UtmKeys.SMS_ANDROID_SHARESHEET,
                    utm: c.getUtm(c.UtmKeys.SMS_ANDROID_SHARESHEET, c.UtmFromKeys.CAMPAIGN_PAGE)
                } : {
                    fundUrl: _.params.campaignUrl,
                    shareLocation: c.UtmFromKeys.CAMPAIGN_PAGE,
                    shareType: c.UtmKeys.SMS_SHARESHEET,
                    utm: c.getUtm(c.UtmKeys.SMS_SHARESHEET, c.UtmFromKeys.CAMPAIGN_PAGE)
                }),
                h(e)
            }), []);
            var N = function() {
                    return p.isYelpWebView() || p.isInstagramWebView() ? l.default.createElement(d.ClipboardFieldFB, {
                        from: c.UtmFromKeys.CAMPAIGN_PAGE,
                        url: S,
                        className: "l-campaign-share-action-button"
                    }) : l.default.createElement(d.FbShareButton, {
                        url: S,
                        from: c.UtmFromKeys.CAMPAIGN_PAGE,
                        className: "l-campaign-share-action-button"
                    })
                },
                w = l.default.createElement(u.ABTest, {
                    defaultChild: N(),
                    experimentName: "facebook_fallback_campaign_page",
                    primaryUnit: "" + i.uuid.getDistinctId(),
                    attributes: {
                        browser: g.browser(),
                        device: g.device(),
                        os: g.getOs()
                    }
                }, {
                    control: N(),
                    default: N(),
                    variation: l.default.createElement(d.ClipboardFieldFB, {
                        from: c.UtmFromKeys.CAMPAIGN_PAGE,
                        url: S,
                        className: "l-campaign-share-action-button"
                    })
                }),
                T = l.default.createElement(d.TwitterShareButton, {
                    shareLink: P,
                    className: "l-campaign-share-action-button"
                }, t),
                M = p.isAndroid() ? n : r,
                A = l.default.createElement(d.EmailShareButton, {
                    subject: m.t('Have you seen "{{- title}}"?', {
                        title: t
                    }),
                    from: c.UtmFromKeys.CAMPAIGN_PAGE,
                    className: "l-campaign-share-action-button",
                    getEmailShortUrl: function() {
                        p.isAndroid() ? y({
                            fundUrl: _.params.campaignUrl,
                            shareLocation: c.UtmFromKeys.CAMPAIGN_PAGE,
                            shareType: c.UtmKeys.EMAIL_ANDROID_SHARESHEET,
                            utm: c.getUtm(c.UtmKeys.EMAIL_ANDROID_SHARESHEET, c.UtmFromKeys.CAMPAIGN_PAGE)
                        }) : y({
                            fundUrl: _.params.campaignUrl,
                            shareLocation: c.UtmFromKeys.CAMPAIGN_PAGE,
                            shareType: c.UtmKeys.EMAIL_SHARESHEET,
                            utm: c.getUtm(c.UtmKeys.EMAIL_SHARESHEET, c.UtmFromKeys.CAMPAIGN_PAGE)
                        })
                    },
                    emailShortUrlComplete: o
                }, m.t("Hello \n \n I thought you might be interested in supporting this GoFundMe, {{- shareLink}}. \n \n Even a small donation could help {{- name}} reach their fundraising goal. And if you can't make a donation, it would be great if you could share the fundraiser to help spread the word. \n \n Thanks for taking a look!", {
                    name: E,
                    shareLink: M
                })),
                j = l.default.createElement(d.WhatsAppShareButton, {
                    className: "l-campaign-share-action-button"
                }, m.t("Hi,\n\nI'd really appreciate it if you would share or donate to this GoFundMe.\n\n*{{- fundTitle}}*\n\n{{- description}}\n\nRead more here {{- fundUrl}}\n\nForward this message to your contacts to help this campaign reach its goal!", {
                    description: I,
                    fundTitle: t,
                    fundUrl: k
                })),
                x = l.default.createElement(d.EmbedShareButton, {
                    className: "l-campaign-share-action-button",
                    shareUrl: "/f/" + _.params.campaignUrl + "/share/embed",
                    dataElementId: "btn_share_embed"
                }),
                D = p.isAndroid() ? C : O,
                G = l.default.createElement(d.SmsShareButton, {
                    className: "l-campaign-share-action-button hide-for-large"
                }, m.t("Hi, I'd really appreciate it if you would share or donate to this GoFundMe, {{- shareLink}}", {
                    shareLink: D
                })),
                F = v ? void 0 : l.default.createElement(d.PosterShareButton, {
                    className: "l-campaign-share-action-button",
                    fundUrl: _.params.campaignUrl
                }),
                R = l.default.createElement("div", {
                    className: "flex-container align-center align-middle flex-child-full"
                }, l.default.createElement(s.UIIcon, {
                    name: "plus",
                    className: "mr"
                }), m.t("Show more")),
                U = l.default.createElement(d.ShareList, null, w, T, A, j, x, G, F),
                L = [x, F];
            return l.default.createElement(l.default.Fragment, null, l.default.createElement("h1", {
                className: "heading-2"
            }, m.t("Help by sharing")), l.default.createElement("p", null, m.t("Fundraisers shared on social networks raise up to 5x more")), l.default.createElement(d.ShareList, {
                className: "l-campaign-share-action--expanded hide-for-large"
            }, w, T, A, j, G), L.length > 0 && l.default.createElement(d.Reveal, {
                className: "hide-for-large",
                dataElementId: "btn_share_moreshares",
                buttonContent: R,
                revealContent: L
            }), l.default.createElement("div", {
                className: "show-for-large"
            }, U), l.default.createElement(d.ClipboardField, {
                as: "input",
                buttonFill: "solid-green",
                buttonText: m.t("Copy"),
                className: "mt4x",
                copyStat: "copyLink" === _.params.type ? f.CopyStatus.success : f.CopyStatus.none,
                dataElementId: {
                    button: "btn_share_copy_link",
                    input: "input_share_copy_link"
                },
                id: "share-to-clipboard",
                labelText: m.t("Copy link"),
                layout: "inline",
                messageSuccess: m.t("Copied!"),
                messageFailure: m.t("Something went wrong. Please select the code block to manually copy it."),
                name: "share-to-clipboard",
                additionalContent: d.ClipboardTips
            }, a))
        }
    },
    x7ym: function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            r = this && this.__createBinding || (Object.create ? function(e, t, a, n) {
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
            o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            l = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && r(t, e, a);
                return o(t, e), t
            },
            i = this && this.__read || function(e, t) {
                var a = "function" == typeof Symbol && e[Symbol.iterator];
                if (!a)
                    return e;
                var n,
                    r,
                    o = a.call(e),
                    l = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(n = o.next()).done;)
                        l.push(n.value)
                } catch (i) {
                    r = {
                        error: i
                    }
                } finally {
                    try {
                        n && !n.done && (a = o.return) && a.call(o)
                    } finally {
                        if (r)
                            throw r.error
                    }
                }
                return l
            },
            u = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = l(a("q1tI")),
            c = a("wQmL"),
            d = a("yf/i"),
            m = u(a("1U1D")),
            f = a("z+lN"),
            p = a("YgTb");
        t.default = function(e) {
            s.useEffect((function() {
                e.getCaptcha()
            }), []);
            var t = e.handleSubmit,
                a = e.isCaptchaRequired,
                r = e.onSubmit,
                o = e.setReCaptchaToken,
                l = e.submitting,
                u = e.reCaptchaExecute,
                g = e.reCaptchaToken,
                h = e.reCaptchaSiteKey,
                y = i(s.useState(!1), 2),
                _ = y[0],
                b = y[1],
                v = i(s.useState({}), 2),
                E = v[0],
                S = v[1];
            return a && !_ && (m.default.init((function(e) {
                o(e)
            })), b(!0)), s.useEffect((function() {
                g && r(n(n({}, E), {
                    captchaResponse: g
                }))
            }), [g]), s.default.createElement("div", null, s.default.createElement(c.Form, {
                onSubmit: t((function(e) {
                    S(e),
                    a ? u() : r(e)
                }))
            }, s.default.createElement(c.Field, {
                id: "coFirstName",
                name: "coFirstName",
                component: "input",
                type: "hidden"
            }), s.default.createElement(c.Field, {
                component: f.ReduxZoomField,
                className: "mb4x",
                dataElementId: "contact_name",
                id: "contactName",
                name: "contactName",
                type: "text",
                label: p.t("Your Name"),
                props: {
                    placeholder: p.t("Your Name")
                }
            }), s.default.createElement(c.Field, {
                component: f.ReduxZoomField,
                className: "mb4x",
                dataElementId: "contact_email",
                id: "contactEmail",
                name: "contactEmail",
                type: "email",
                label: p.t("Your Email"),
                props: {
                    placeholder: p.t("Your Email")
                }
            }), s.default.createElement(c.Field, {
                component: f.ReduxZoomField,
                className: "mb6x",
                dataElementId: "contact_message",
                id: "contactMessage",
                name: "contactMessage",
                label: p.t("Your Message"),
                type: "textarea",
                rows: 4,
                props: {
                    placeholder: p.t("Your Message")
                }
            }), s.default.createElement(d.Button, {
                className: "mb4x",
                fill: "solid-green",
                size: "large",
                type: "submit"
            }, l ? s.default.createElement(d.LoadingDots, {
                color: "white",
                size: "large"
            }) : p.t("Send Message"))), !(!a || !h) && s.default.createElement("div", {
                className: "g-recaptcha",
                "data-callback": "grecaptchaonload",
                "data-sitekey": h,
                "data-size": "invisible"
            }))
        }
    },
    xML2: function(e, t, a) {
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
            r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            o = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && n(t, e, a);
                return r(t, e), t
            },
            l = this && this.__read || function(e, t) {
                var a = "function" == typeof Symbol && e[Symbol.iterator];
                if (!a)
                    return e;
                var n,
                    r,
                    o = a.call(e),
                    l = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(n = o.next()).done;)
                        l.push(n.value)
                } catch (i) {
                    r = {
                        error: i
                    }
                } finally {
                    try {
                        n && !n.done && (a = o.return) && a.call(o)
                    } finally {
                        if (r)
                            throw r.error
                    }
                }
                return l
            },
            i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = i(a("TSYQ")),
            s = o(a("q1tI")),
            c = i(a("cr+I")),
            d = a("z+lN"),
            m = a("dNNZ"),
            f = a("YgTb"),
            p = a("+Ded"),
            g = a("yf/i"),
            h = a("zIs9");
        a("o567"),
        t.default = function(e) {
            var t = e.className,
                a = e.goal,
                n = e.goalAmountString,
                r = e.image,
                o = e.location,
                i = e.raised,
                y = e.raisedAmountString,
                _ = e.url,
                b = e.donateUrl,
                v = e.title,
                E = l(s.useState("large"), 2),
                S = E[0],
                C = E[1],
                O = l(s.useState(h.SmallTextOptions.DONATE), 2),
                P = O[0],
                I = O[1],
                k = "small" === S,
                N = u.default(t, "l-campaign-embed-form"),
                w = u.default("l-campaign-embed-form-preview", {
                    "l-campaign-embed-form-preview-width ": !k
                }),
                T = u.default({
                    "l-campaign-embed-form-preview-button flex-container align-center mt2x": k
                }),
                M = u.default({
                    "l-campaign-embed-form-preview-small align-middle flex-container flex-dir-column pt2x pb2x": k
                }),
                A = function(e) {
                    C(e),
                    p.trackEvents.trackEvent({
                        elementId: e,
                        type: "mp_page_click",
                        viewId: "lb_share_embed"
                    })
                },
                j = '<div class="gfm-embed" data-url="' + (_ + "/widget/" + S + "/" + ("small" === S && P !== h.SmallTextOptions.DONATE ? P : "")) + '"></div><script defer src="https://www.gofundme.com/static/js/embed.js"><\/script>',
                x = "large" === S ? r : void 0;
            return s.default.createElement("div", {
                className: N
            }, s.default.createElement("h1", {
                className: "heading-2"
            }, f.t("Embed HTML")), s.default.createElement("div", {
                className: "l-campaign-embed-form-content"
            }, s.default.createElement("div", {
                className: "l-campaign-embed-form-copy"
            }, s.default.createElement("label", null, s.default.createElement(g.Button, {
                className: "mb2x",
                onClick: function() {
                    return A("large")
                }
            }, s.default.createElement("input", {
                className: "l-campaign-embed-form-input",
                type: "radio",
                name: "size",
                checked: "large" === S,
                onChange: function() {}
            }), s.default.createElement("span", {
                className: "ml2x"
            }, " ", f.t("Large"), " ")), s.default.createElement("br", null), s.default.createElement(g.Button, {
                className: "mb2x",
                onClick: function() {
                    return A("medium")
                }
            }, s.default.createElement("input", {
                className: "l-campaign-embed-form-input",
                type: "radio",
                name: "size",
                checked: "medium" === S,
                onChange: function() {}
            }), s.default.createElement("span", {
                className: "ml2x"
            }, " ", f.t("Medium"), " ")), s.default.createElement("br", null), s.default.createElement(g.Button, {
                className: "mb3x",
                onClick: function() {
                    return A("small")
                }
            }, s.default.createElement("input", {
                className: "l-campaign-embed-form-input",
                type: "radio",
                name: "size",
                checked: "small" === S,
                onChange: function() {}
            }), s.default.createElement("span", {
                className: "ml2x"
            }, " ", f.t("Small (Button only)"), " "))), s.default.createElement(g.Rule, {
                type: "horizontal",
                className: "show-for-medium mt0"
            }), s.default.createElement("div", {
                className: "show-for-medium"
            }, s.default.createElement("p", null, f.t("Copy and paste the following embed code:"))), s.default.createElement(d.ClipboardField, {
                className: "l-campaign-embed-form-clipboard",
                dataElementId: {
                    button: "btn_share_embed_copy",
                    input: "input_share_embed_copy"
                },
                as: "codeblock",
                buttonFill: "hollow-green",
                buttonText: f.t("Copy HTML code"),
                id: "embed-to-clipboard",
                layout: "stacked",
                messageSuccess: f.t("Copied!"),
                messageFailure: f.t("Something went wrong. Please select the code block to manually copy it."),
                name: "embed-to-clipboard"
            }, j), s.default.createElement(f.Trans, null, s.default.createElement("div", {
                className: "show-for-medium mt2x"
            }, "What is this? ", s.default.createElement(g.HtmlSpace, {
                type: "non-breaking"
            }), s.default.createElement(g.Link, {
                as: "href",
                dataElementId: "btn_embed_learn_more",
                to: "https://www.gofundme.com/c/donate-button-individuals",
                target: "_blank"
            }, "Learn more"))), s.default.createElement(g.Rule, {
                type: "horizontal",
                className: "mt4x hide-for-medium"
            })), s.default.createElement("div", {
                className: w
            }, s.default.createElement("div", {
                className: "mb2x"
            }, s.default.createElement("h2", {
                className: "heading-5 mb0"
            }, f.t("Preview"))), s.default.createElement("div", {
                className: M
            }, s.default.createElement(m.CampaignEmbed, {
                browsingContext: "self" === c.default.parse(o.search).bc ? "_self" : "_blank",
                className: T,
                previewMode: !0,
                goal: a,
                goalAmountString: n,
                image: x,
                raised: i,
                raisedAmountString: y,
                title: v,
                url: _,
                useButtonOnly: k,
                donateUrl: b,
                smallText: P
            }), k && s.default.createElement(g.FormField, {
                className: "l-campaign-embed-form-field mb2x",
                id: "small-button-text",
                label: f.t("Select the button text"),
                layout: "stacked"
            }, s.default.createElement(g.Select, {
                defaultValue: P,
                className: "mt",
                id: "small-button-text",
                name: "small-button-text",
                options: [{
                    disabled: !1,
                    text: f.t("Donate now"),
                    value: h.SmallTextOptions.DONATE
                }, {
                    disabled: !1,
                    text: f.t("Support"),
                    value: h.SmallTextOptions.SUPPORT
                }, {
                    disabled: !1,
                    text: f.t("Contribute"),
                    value: h.SmallTextOptions.CONTRIBUTE
                }, {
                    disabled: !1,
                    text: f.t("Buy me a coffee"),
                    value: h.SmallTextOptions.COFFEE
                }, {
                    disabled: !1,
                    text: f.t("Show appreciation"),
                    value: h.SmallTextOptions.APPRECIATE
                }],
                onChange: function(e) {
                    var t = "btn_textmenu_donate";
                    switch (e.target.value) {
                    case h.SmallTextOptions.SUPPORT:
                        t = "btn_textmenu_support",
                        I(h.SmallTextOptions.SUPPORT);
                        break;
                    case h.SmallTextOptions.CONTRIBUTE:
                        t = "btn_textmenu_contribute",
                        I(h.SmallTextOptions.CONTRIBUTE);
                        break;
                    case h.SmallTextOptions.COFFEE:
                        t = "btn_textmenu_coffee",
                        I(h.SmallTextOptions.COFFEE);
                        break;
                    case h.SmallTextOptions.APPRECIATE:
                        t = "btn_textmenu_appreciate",
                        I(h.SmallTextOptions.APPRECIATE);
                        break;
                    default:
                        t = "btn_textmenu_donate",
                        I(h.SmallTextOptions.DONATE)
                    }
                    p.trackEvents.push({
                        elementId: t,
                        type: "click",
                        viewId: "lb_share_embed"
                    })
                }
            }))), s.default.createElement(f.Trans, null, s.default.createElement("div", {
                className: "hide-for-medium mt2x"
            }, "What is this? ", s.default.createElement(g.HtmlSpace, {
                type: "non-breaking"
            }), s.default.createElement(g.Link, {
                as: "href",
                dataElementId: "btn_embed_learn_more",
                to: "https://www.gofundme.com/c/donate-button-individuals",
                target: "_blank"
            }, "Learn more"))))))
        }
    },
    xRV8: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    xXVG: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a("/MKj"),
            o = n(a("4M3g")),
            l = a("Cge7"),
            i = a("ZZcF"),
            u = n(a("A9kC")),
            s = n(a("b0lt")),
            c = a("mbAg"),
            d = n(a("sNOy")),
            m = r.connect((function() {
                var e = c.makeGetAlertContent(),
                    t = i.makeGetAlgoliaIndices(),
                    a = c.makeGetInfoContent(),
                    n = l.makeGetAuthenticatedPerson(),
                    r = i.makeGetShowCookieBanner(),
                    o = l.makeHasCampaign(),
                    u = l.makeGetIsLoggedIn(),
                    s = i.makeGetLocale(),
                    d = i.makeGetDomain(),
                    m = i.makeGetVisitorGeoRecord();
                return function(l) {
                    return {
                        alertContent: e(l),
                        algoliaIndices: t(l),
                        authenticatedPerson: n(l),
                        domain: d(l),
                        geoRecord: m(l),
                        hasCampaign: o(l),
                        infoContent: a(l),
                        isLoggedIn: u(l),
                        locale: s(l),
                        showCookieBanner: r(l)
                    }
                }
            }), (function(e) {
                return {
                    getIdentity: function() {
                        e({
                            type: o.default.GET_FEED_IDENTITY_IN_PROGRESS
                        })
                    },
                    onCloseAlert: function(t) {
                        e({
                            payload: {
                                type: t
                            },
                            type: s.default.CLOSE_ALERT_CONTENT
                        })
                    },
                    onLanguageChange: function(t) {
                        e({
                            payload: t,
                            type: u.default.SET_LOCALE_COOKIE_IN_PROGRESS
                        })
                    }
                }
            }))(d.default);
        t.default = m
    },
    xewJ: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("q1tI")),
            o = a("yf/i"),
            l = a("it2i"),
            i = a("YgTb");
        t.default = function(e) {
            return r.default.createElement(r.default.Fragment, null, r.default.createElement(l.GlobalHead, {
                description: i.t("We're sorry. Something went wrong. Please wait one minute and try again."),
                noFollow: !0,
                title: i.t("Unknown Error")
            }), r.default.createElement("div", {
                className: "p-campaign"
            }, r.default.createElement("header", {
                className: "p-campaign-header"
            }, r.default.createElement(o.Button, {
                as: "href",
                className: "mb2x",
                fill: "hollow-green",
                size: "medium",
                to: "/"
            }, i.t("Home")), r.default.createElement("h1", null, i.t("Unknown Error")), r.default.createElement("p", null, i.t("We're sorry. Something went wrong. Please wait one minute and try again.")))))
        }
    },
    xkhA: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("p2wc");
        Object.defineProperty(t, "ShareButton", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    xnA8: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("AxEi");
        Object.defineProperty(t, "ContactOrganizerModal", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        }),
        Object.defineProperty(t, "ContactOrganizerModalProps", {
            enumerable: !0,
            get: function() {
                return n.ContactOrganizerModalProps
            }
        });
        var r = a("T2N2");
        Object.defineProperty(t, "ContactOrganizerModalConnected", {
            enumerable: !0,
            get: function() {
                return r.default
            }
        })
    },
    xnkE: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("BDj+");
        Object.defineProperty(t, "UpdatesModal", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    xwAf: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("cr+I")),
            o = a("/MKj"),
            l = n(a("4M3g")),
            i = a("Cge7"),
            u = a("ZZcF"),
            s = n(a("A9kC")),
            c = n(a("b0lt")),
            d = a("mbAg"),
            m = n(a("aRWs")),
            f = a("PcW7"),
            p = o.connect((function() {
                var e = d.makeGetAlertContent(),
                    t = d.makeGetInfoContent(),
                    a = u.makeGetAlgoliaIndices(),
                    n = i.makeGetAuthenticatedPerson(),
                    o = u.makeGetShowCookieBanner(),
                    l = i.makeHasCampaign(),
                    s = i.makeGetIsCampaignActive(),
                    c = i.makeGetIsLoggedIn(),
                    m = u.makeGetLocale(),
                    p = u.makeGetDomain(),
                    g = i.makeGetCampaignUrl(),
                    h = f.makeGetSusiModalPaths(),
                    y = i.makeGetCampaignOrganizerFirstName(),
                    _ = i.makeGetIsStatsUser(),
                    b = f.makeGetStatsUrl(),
                    v = f.makeGetShowActiveContent(),
                    E = u.makeGetVisitorGeoRecord();
                return function(i, u) {
                    return {
                        alertContent: e(i),
                        algoliaIndices: a(i),
                        authenticatedPerson: n(i),
                        campaignOrganizerFirstName: y(i),
                        domain: p(i),
                        fundUrl: g(i),
                        geoRecord: E(i),
                        hasCampaign: l(i),
                        infoContent: t(i),
                        isCampaignActive: s(i),
                        isLoggedIn: c(i),
                        isStatsUser: _(i),
                        locale: m(i),
                        queryParams: r.default.parse(u.location.search),
                        showActiveContent: v(i),
                        showCookieBanner: o(i),
                        statsUrl: b(i),
                        susiModalPaths: h(i)
                    }
                }
            }), (function(e) {
                return {
                    getIdentity: function() {
                        e({
                            type: l.default.GET_FEED_IDENTITY_IN_PROGRESS
                        })
                    },
                    onCloseAlert: function(t) {
                        e({
                            payload: {
                                type: t
                            },
                            type: c.default.CLOSE_ALERT_CONTENT
                        })
                    },
                    onLanguageChange: function(t) {
                        e({
                            payload: t,
                            type: s.default.SET_LOCALE_COOKIE_IN_PROGRESS
                        })
                    }
                }
            }))(m.default);
        t.default = p
    },
    y6AT: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("q1tI")),
            o = a("YgTb"),
            l = a("yf/i"),
            i = a("ugNG");
        t.default = function(e) {
            var t = e.recentDonors,
                a = e.recentDonorsStr,
                n = e.totalDonors,
                u = e.totalDonorsStr,
                s = !!(t && n && t <= n || 0 === n),
                c = o.t("{{- recentDonorsStr}} person just donated", {
                    count: s ? t : n,
                    defaultValue_plural: "{{- recentDonorsStr}} people just donated",
                    recentDonorsStr: s ? a : u
                });
            return r.default.createElement(i.PurpleIconWithText, {
                icon: r.default.createElement(l.UIIcon, {
                    name: "trending"
                })
            }, r.default.createElement("strong", null, c))
        }
    },
    "yP/k": function(e, t, a) {
        "use strict";
        var n,
            r = this && this.__extends || (n = function(e, t) {
                return (n = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var a in t)
                        t.hasOwnProperty(a) && (e[a] = t[a])
                })(e, t)
            }, function(e, t) {
                function a() {
                    this.constructor = e
                }
                n(e, t),
                e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, new a)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(e) {
                    for (var t, a = 1, n = arguments.length; a < n; a++)
                        for (var r in t = arguments[a])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
            l = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = l(a("TSYQ")),
            u = l(a("q1tI")),
            s = a("wE+H"),
            c = a("MS/s"),
            d = a("yf/i"),
            m = a("dNNZ"),
            f = a("p1Kg"),
            p = a("YgTb");
        a("ADO5");
        var g = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e), t.prototype.render = function() {
                var e = this.props,
                    t = e.algoliaIndices,
                    a = e.authenticatedPerson,
                    n = e.className,
                    r = e.donateUrl,
                    l = e.isCampaignActive,
                    g = e.isLoggedIn,
                    h = e.hasCampaign,
                    y = e.campaignUrl,
                    _ = e.locale,
                    b = e.previewMode,
                    v = e.queryParam,
                    E = void 0 === v ? "" : v,
                    S = e.susiModalPaths,
                    C = e.dataViewId,
                    O = e.showActiveContent,
                    P = i.default(n, "o-nav-campaign-page"),
                    I = f.getNavText(),
                    k = I.navLoggedOutDropdown,
                    N = I.navLoggedInDropdown,
                    w = g && a ? "/create/details" : "/sign-up",
                    T = u.default.createElement(u.default.Fragment, null, O && u.default.createElement("li", {
                        className: "disp-flex align-middle show-for-large"
                    }, u.default.createElement(d.Rule, {
                        type: "vertical"
                    }), u.default.createElement(d.Button, {
                        as: "route",
                        dataElementId: b ? "" : "btn_nav_share",
                        fill: "hollow-yellow",
                        size: "small",
                        to: "/f/" + y + "/share" + E
                    }, p.t("Share"))), !h && l && u.default.createElement("li", {
                        className: "show-for-large pl2x"
                    }, u.default.createElement(d.Button, {
                        as: "href",
                        dataElementId: b ? "" : "btn_nav_donate",
                        fill: "solid-yellow",
                        size: "small",
                        to: r
                    }, p.t("Donate"))));
                return u.default.createElement("nav", {
                    className: P
                }, u.default.createElement("ul", {
                    className: "o-nav-campaign-page-left list-unstyled disp-flex align-middle"
                }, u.default.createElement("li", {
                    className: "disp-flex"
                }, u.default.createElement(c.GlobalSearch, {
                    algoliaIndices: t,
                    locale: _,
                    searchPageType: "campaign"
                })), u.default.createElement("li", {
                    className: "disp-flex align-middle show-for-large text-small"
                }, u.default.createElement(d.Rule, {
                    type: "vertical"
                }), u.default.createElement(d.Dropdown, {
                    buttonContent: k.text,
                    placement: "left"
                }, u.default.createElement(d.SubnavContent, {
                    groups: k.groups,
                    seeAll: k.seeAll
                }))), u.default.createElement("li", {
                    className: "disp-flex align-middle show-for-large"
                }, u.default.createElement(d.Rule, {
                    type: "vertical"
                }), u.default.createElement(d.Button, {
                    className: "text-small",
                    as: "href",
                    dataElementId: "btn_nav_sign_up",
                    to: w
                }, p.t("Start a GoFundMe")))), u.default.createElement("div", {
                    className: "o-nav-campaign-page-center"
                }, u.default.createElement(d.Link, {
                    ariaLabel: p.t("GoFundMe homepage"),
                    as: "href",
                    className: "o-nav-campaign-page-logo",
                    to: "/",
                    dataElementId: "btn_nav_gfm_logo"
                }, u.default.createElement(d.Logo, {
                    name: "GoFundMe"
                }))), u.default.createElement("ul", {
                    className: "o-nav-campaign-page-right list-unstyled disp-flex align-middle align-right"
                }, !g && u.default.createElement(u.default.Fragment, null, u.default.createElement("li", {
                    className: "show-for-large"
                }, S ? u.default.createElement(d.Button, {
                    as: "route",
                    className: "color-dark-gray text-small",
                    dataElementId: "btn_nav_sign_in",
                    to: S.signInPath,
                    rel: "nofollow"
                }, p.t("Sign in")) : u.default.createElement(d.Button, {
                    as: "href",
                    className: "color-dark-gray text-small",
                    dataElementId: "btn_nav_sign_in",
                    to: "/sign-in"
                }, p.t("Sign in"))), T), g && !!a && u.default.createElement(u.default.Fragment, null, u.default.createElement("li", {
                    className: "show-for-large"
                }, u.default.createElement(d.Dropdown, {
                    buttonContent: u.default.createElement(u.default.Fragment, null, u.default.createElement(d.Avatar, o({
                        as: s.IdentityType.person,
                        className: "mr"
                    }, a)), a.firstName),
                    placement: "right"
                }, u.default.createElement(d.SubnavContent, {
                    groups: N.groups,
                    seeAll: N.seeAll
                }))), h && u.default.createElement("li", {
                    className: "disp-flex align-middle show-for-large"
                }, u.default.createElement(d.Rule, {
                    type: "vertical"
                }), u.default.createElement(d.Button, {
                    as: "href",
                    className: "color-dark-gray text-small",
                    dataElementId: b ? "" : "btn_nav_manage",
                    to: "/campaigns"
                }, p.t("Your fundraisers"))), T), u.default.createElement("li", {
                    className: "disp-flex hide-for-large"
                }, u.default.createElement(m.MobileNavCampaignPage, {
                    authenticatedPerson: a,
                    campaignUrl: y,
                    dataViewId: C,
                    donateUrl: r,
                    hasCampaign: h,
                    isCampaignActive: l,
                    isLoggedIn: g,
                    showActiveContent: O,
                    susiModalPaths: S
                }))))
            }, t
        }(u.default.Component);
        t.default = g
    },
    yYsC: function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(a("TSYQ")),
            o = n(a("q1tI")),
            l = a("yf/i"),
            i = a("YgTb");
        a("eQFp"),
        t.default = function(e) {
            var t = e.className,
                a = e.onClick,
                n = r.default(t, "m-clipboard-tips");
            return o.default.createElement(l.Button, {
                dataElementId: "btn_share_copy_link_tip",
                className: "width-100 mt2x",
                onClick: a
            }, o.default.createElement(l.Well, {
                className: n
            }, o.default.createElement("div", {
                className: "m-clipboard-tips-text"
            }, o.default.createElement(i.Trans, null, o.default.createElement("strong", null, "Tip:"), o.default.createElement(l.HtmlSpace, {
                type: "non-breaking"
            }), "Paste this fundraiser link anywhere.")), o.default.createElement("div", {
                className: "m-clipboard-tips-icons mt"
            }, o.default.createElement(l.LogoIcon, {
                name: "Instagram"
            }), o.default.createElement(l.LogoIcon, {
                name: "Slack"
            }), o.default.createElement(l.LogoIcon, {
                name: "YouTube"
            }), o.default.createElement(l.LogoIcon, {
                name: "tiktok"
            }), o.default.createElement(l.LogoIcon, {
                name: "linktree"
            }), o.default.createElement(l.UIIcon, {
                name: "ellipsis"
            }))))
        }
    },
    yZv1: function(e, t, a) {
        "use strict";
        var n = this && this.__assign || function() {
            return (n = Object.assign || function(e) {
                for (var t, a = 1, n = arguments.length; a < n; a++)
                    for (var r in t = arguments[a])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }).apply(this, arguments)
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.makeGetTeamListOrganizer = t.makeGetTeamListBene = t.makeGetTeamList = void 0;
        var r = a("G4qV"),
            o = a("wE+H"),
            l = a("Y4ob"),
            i = function() {
                return r.createSelector([l.makeGetOrganizerCampaignMemberItem()], (function(e) {
                    return {
                        meta: {
                            attributionStats: e.meta.attributionStats
                        },
                        person: n(n({}, e.person), {
                            as: o.IdentityType.person,
                            role: o.UserRoles.ORGANIZER
                        })
                    }
                }))
            };
        t.makeGetTeamListOrganizer = i;
        var u = function() {
            return r.createSelector([l.makeGetBeneCampaignMemberItem()], (function(e) {
                return e ? {
                    person: n(n({}, e.person), {
                        as: o.IdentityType.person,
                        role: o.UserRoles.BENEFICIARY
                    })
                } : void 0
            }))
        };
        t.makeGetTeamListBene = u;
        t.makeGetTeamList = function() {
            return r.createSelector([l.makeGetTeamCampaignMembersList(), i(), u()], (function(e, t, a) {
                var r = a ? [t, a] : [t],
                    l = e ? e.map((function(e) {
                        return {
                            meta: {
                                attributionStats: e.meta.attributionStats
                            },
                            person: n(n({}, e.person), {
                                as: o.IdentityType.person,
                                role: o.UserRoles.TEAM_MEMBER
                            })
                        }
                    })) : [];
                return r.concat(l)
            }))
        }
    },
    yc7m: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    yly3: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("yP/k");
        Object.defineProperty(t, "NavCampaignPage", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    yo2N: function(e, t, a) {
        "use strict";
        a.r(t)
    },
    "z+lN": function(e, t, a) {
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
            r = this && this.__exportStar || function(e, t) {
                for (var a in e)
                    "default" === a || t.hasOwnProperty(a) || n(t, e, a)
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        r(a("Kgym"), t),
        r(a("M9Jm"), t),
        r(a("daaZ"), t),
        r(a("utQf"), t),
        r(a("0LI8"), t),
        r(a("Mp0r"), t),
        r(a("R3xx"), t),
        r(a("DwRE"), t),
        r(a("l8Xu"), t),
        r(a("6kUX"), t),
        r(a("lx7X"), t),
        r(a("MYV/"), t),
        r(a("HpnM"), t),
        r(a("mVWG"), t),
        r(a("h2fs"), t),
        r(a("h5Yc"), t),
        r(a("ODnE"), t),
        r(a("Vc87"), t),
        r(a("p17I"), t),
        r(a("iDcq"), t),
        r(a("/0IU"), t),
        r(a("ugOw"), t),
        r(a("WwOJ"), t),
        r(a("eD+/"), t),
        r(a("Mymg"), t),
        r(a("oCMw"), t),
        r(a("nmZj"), t),
        r(a("VrVn"), t),
        r(a("cOk+"), t),
        r(a("iEP1"), t),
        r(a("0cNZ"), t),
        r(a("PIsa"), t),
        r(a("BEv3"), t),
        r(a("HVnM"), t),
        r(a("EjfZ"), t),
        r(a("2vEz"), t),
        r(a("2t9m"), t),
        r(a("2V/S"), t),
        r(a("YXo6"), t),
        r(a("YMFa"), t),
        r(a("70b3"), t),
        r(a("XDKs"), t),
        r(a("YcaN"), t),
        r(a("TNqt"), t),
        r(a("Y6sO"), t),
        r(a("ugNG"), t),
        r(a("zurt"), t),
        r(a("/8pO"), t),
        r(a("08mE"), t),
        r(a("tTwi"), t),
        r(a("Unq+"), t),
        r(a("0XZ9"), t),
        r(a("scHp"), t),
        r(a("xkhA"), t),
        r(a("ucNB"), t),
        r(a("93EZ"), t),
        r(a("gIhk"), t),
        r(a("qCvq"), t),
        r(a("FVWn"), t),
        r(a("TujY"), t),
        r(a("4md/"), t),
        r(a("gIhk"), t),
        r(a("qCvq"), t),
        r(a("ggYG"), t),
        r(a("pkkH"), t),
        r(a("C0yj"), t),
        r(a("RpQE"), t),
        r(a("HviM"), t),
        r(a("tIro"), t),
        r(a("YMFa"), t),
        r(a("70b3"), t)
    },
    zGS9: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.makeGetShortUrl = void 0;
        var n = a("G4qV"),
            r = a("o6hd"),
            o = a("BYM7"),
            l = function(e, t) {
                return t.utmFromKey
            };
        t.makeGetShortUrl = function() {
            return n.createSelector([l, o.makeGetUrlShortnerState()], (function(e, t) {
                var a;
                return (t.shortenedShareUtmUrls[r.UtmKeys.INSTAGRAM_SHARESHEET] || ((a = {})[e] = "", a))[e]
            }))
        }
    },
    zYpg: function(e, t, a) {
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
            r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            o = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var a in e)
                        Object.hasOwnProperty.call(e, a) && n(t, e, a);
                return r(t, e), t
            },
            l = this && this.__read || function(e, t) {
                var a = "function" == typeof Symbol && e[Symbol.iterator];
                if (!a)
                    return e;
                var n,
                    r,
                    o = a.call(e),
                    l = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(n = o.next()).done;)
                        l.push(n.value)
                } catch (i) {
                    r = {
                        error: i
                    }
                } finally {
                    try {
                        n && !n.done && (a = o.return) && a.call(o)
                    } finally {
                        if (r)
                            throw r.error
                    }
                }
                return l
            },
            i = this && this.__spread || function() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e = e.concat(l(arguments[t]));
                return e
            },
            u = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = o(a("q1tI")),
            c = a("YgTb"),
            d = a("puIA"),
            m = u(a("cr+I")),
            f = u(a("TSYQ")),
            p = a("Cv17"),
            g = a("7xpE"),
            h = u(a("k9qm")),
            y = a("+Ded"),
            _ = a("K9qA"),
            b = a("it2i"),
            v = a("MS/s"),
            E = a("yf/i"),
            S = a("z+lN"),
            C = a("GrX6"),
            O = a("p1Kg");
        a("QmmS"),
        t.default = function(e) {
            var t,
                a = e.algoliaIndices.hitIndex,
                n = e.routes,
                r = _.canUseWindow() ? window.location.search : e.location.search,
                o = (null === (t = m.default.parse(r)) || void 0 === t ? void 0 : t.q) || "",
                u = new URLSearchParams(r),
                P = Number(u.get("pg")),
                I = Number.isInteger(P) && P > 0 ? P : 1;
            s.useEffect((function() {
                y.trackEvents.trackEvent({
                    type: "mp_page_view",
                    viewId: "pg_srp"
                })
            }), []);
            var k = l(s.useState(!1), 2),
                N = k[0],
                w = k[1],
                T = p.connectPagination((function(e) {
                    var t = e.currentRefinement,
                        a = e.nbPages,
                        n = e.refine,
                        r = f.default("p-search-results-previous-button", {
                            invisible: 1 === t || a < 6
                        }),
                        o = f.default("p-search-results-next-button", {
                            invisible: t === a || a < 6
                        }),
                        l = f.default("p-search-results-page-mobile-button", {
                            hide: 1 === t,
                            mr: t !== a
                        }),
                        i = f.default("p-search-results-page-mobile-button", {
                            hide: t === a,
                            ml: 1 !== t
                        });
                    return a > 1 && !N && (y.trackEvents.trackEvent({
                        type: "mp_page_view",
                        viewId: "pg_srp_pages"
                    }), w(!0)), a > 1 && t <= a ? s.default.createElement("nav", {
                        "aria-label": c.t("Pagination navigation"),
                        className: "disp-flex align-center",
                        role: "navigation"
                    }, s.default.createElement("div", {
                        className: "p-search-results-page-mobile-nav-container hide-for-large disp-flex flex-dir-column"
                    }, s.default.createElement("div", {
                        className: "p-search-results-page-mobile-button-container disp-flex"
                    }, s.default.createElement(E.SecondaryButton, {
                        dataElementId: "btn_page",
                        ariaLabel: c.t("Previous page"),
                        className: l,
                        layout: "full",
                        onClick: function(e) {
                            e.preventDefault(),
                            n(t - 1),
                            u.set("pg", "" + (t - 1)),
                            window.location.search = u.toString()
                        },
                        size: "large"
                    }, s.default.createElement(E.UIIcon, {
                        name: "arrow-left",
                        size: "large"
                    }), c.t("Previous")), s.default.createElement(E.SecondaryButton, {
                        dataElementId: "btn_page",
                        ariaLabel: c.t("Next page"),
                        className: i,
                        layout: "full",
                        onClick: function(e) {
                            e.preventDefault(),
                            n(t + 1),
                            u.set("pg", "" + (t + 1)),
                            window.location.search = u.toString()
                        },
                        size: "large"
                    }, c.t("Next"), s.default.createElement(E.UIIcon, {
                        name: "arrow-right",
                        size: "large"
                    }))), s.default.createElement("div", {
                        className: "disp-flex align-center mt3x"
                    }, c.t("Page {{page}} of {{nbPages}}", {
                        page: t,
                        nbPages: a
                    }))), s.default.createElement("ul", {
                        className: "p-search-results-pagination-button-container disp-flex align-middle show-for-large"
                    }, s.default.createElement("li", {
                        key: 0
                    }, s.default.createElement(E.IconButton, {
                        ariaLabel: c.t("Previous page"),
                        className: r,
                        dataElementId: "btn_page",
                        iconName: "arrow-left",
                        iconSize: "large",
                        iconType: "ui",
                        onClick: function(e) {
                            e.preventDefault(),
                            n(t - 1),
                            u.set("pg", "" + (t - 1)),
                            window.location.search = u.toString()
                        }
                    })), new Array(a).fill(0).map((function(e, r) {
                        var o = r + 1;
                        return s.default.createElement("li", {
                            key: o
                        }, s.default.createElement(E.StyledButton, {
                            ariaCurrent: t === o,
                            as: "href",
                            ariaLabel: c.t("Go to page number " + o),
                            className: f.default("p-search-results-page-button", "ml", "mr", "pb", "pl2x", "pr2x", "pt", {
                                hide: t < 3 ? o > 5 : t > a - 3 ? o < a - 4 : o < t - 2 || o > t + 2
                            }, {
                                "p-search-results-page-button--selected": t === o
                            }),
                            dataElementId: "btn_page",
                            onClick: function(e) {
                                e.preventDefault(),
                                n(o),
                                u.set("pg", "" + o),
                                window.location.search = u.toString()
                            },
                            size: "large",
                            to: "#",
                            unstyled: !0
                        }, o))
                    })), s.default.createElement("li", {
                        key: a + 1
                    }, s.default.createElement(E.IconButton, {
                        ariaLabel: c.t("Next page"),
                        className: o,
                        dataElementId: "btn_page",
                        iconName: "arrow-right",
                        iconSize: "large",
                        iconType: "ui",
                        onClick: function(e) {
                            e.preventDefault(),
                            n(t + 1),
                            u.set("pg", "" + (t + 1)),
                            window.location.search = u.toString()
                        }
                    })))) : s.default.createElement(s.Fragment, null)
                })),
                M = p.connectHitInsights(h.default)((function(e) {
                    var t = e.hit,
                        n = e.index,
                        r = e.insights;
                    return s.default.createElement(S.SearchResultCard, {
                        hit: t,
                        key: n,
                        onClick: function() {
                            r("clickedObjectIDsAfterSearch", {
                                eventName: "srp_click_on_search_result_card",
                                index: a,
                                queryID: t.__queryID,
                                objectIDs: [String(t.objectID)],
                                positions: [t.__position]
                            })
                        },
                        queryID: t.__queryID
                    })
                })),
                A = p.connectHits((function(e) {
                    var t = e.hits;
                    return s.default.createElement(s.Fragment, null, s.default.createElement("div", {
                        className: "p-search-results-card-container grid-columns grid-columns--2"
                    }, t.map((function(e, t) {
                        return s.default.createElement(M, {
                            hit: e,
                            index: t,
                            key: e.objectID
                        })
                    }))))
                })),
                j = function(e) {
                    return s.default.createElement("div", {
                        className: "p-search-results-page-advert-row disp-flex"
                    }, e.map((function(e, t) {
                        return function(e, t) {
                            return s.default.createElement("div", {
                                key: t,
                                className: "p-search-results-advert-tile"
                            }, s.default.createElement("h4", null, c.t(e.title)), s.default.createElement("p", {
                                className: "text-small color-gray show-for-large"
                            }, c.t(e.description)))
                        }(e, t)
                    })))
                },
                x = p.connectStateResults((function(e) {
                    var t = e.searching,
                        a = e.searchResults,
                        n = s.default.createElement(s.Fragment, null, s.default.createElement("p", null, c.t("Search in progress")), s.default.createElement("div", {
                            className: "p-search-results-card-container grid-columns"
                        }, i(Array(9)).map((function(e, t) {
                            return s.default.createElement(C.SearchResultSkeletonCard, {
                                key: t
                            })
                        })))),
                        r = {
                            query: o,
                            interpolation: {
                                escapeValue: !1
                            }
                        },
                        l = (null == a ? void 0 : a.nbHits) ? c.t('Fundraisers for "{{query}}" in all locations', r) : c.t('No results found for "{{query}}" in all locations', r),
                        u = s.default.createElement("p", {
                            ref: function(e) {
                                return e && (e.textContent = l)
                            }
                        });
                    return t || !o.length || !_.canUseWindow() ? n : u
                })),
                D = [v.AlgoliaTag.PLATFORM_WEB, v.AlgoliaTag.PAGE_SRP];
            return _.canUseDom() && D.push(window.innerWidth >= 960 ? v.AlgoliaTag.VIEW_DESKTOP : v.AlgoliaTag.VIEW_MOBILE), s.default.createElement("div", {
                className: "p-search-results-page",
                "data-view-id": "pg_srp"
            }, s.default.createElement(b.GlobalHead, {
                description: c.t("Search results for {{- query}}", o),
                noFollow: !1,
                title: c.t("GoFundMe: {{- searchQuery}}", {
                    searchQuery: o
                }),
                url: "/s?q=" + o
            }), s.default.createElement("div", {
                className: "p-search-results-container"
            }, s.default.createElement(p.InstantSearch, {
                searchClient: O.algoliaClient,
                indexName: a
            }, s.default.createElement(g.Configure, {
                analyticsTags: D,
                filters: "status=1 AND greylisted!=1 AND custom_complete=1",
                exactOnSingleWordQuery: "word",
                query: o,
                hitsPerPage: 12,
                attributesToRetrieve: ["fundname", "username", "bene_name", "objectID", "thumb_img_url", "url"],
                attributesToHighlight: ["fundname", "username", "bene_name"],
                clickAnalytics: !0,
                userToken: y.uuid.getDistinctId()
            }), s.default.createElement(p.ScrollTo, null, s.default.createElement(x, null), s.default.createElement(A, null), s.default.createElement(T, {
                defaultRefinement: I
            })))), s.default.createElement("div", {
                className: "p-search-results-advert disp-flex flex-dir-column align-middle"
            }, s.default.createElement("h3", {
                className: "p-search-results-advert-heading heading-2"
            }, c.t("The leader in online fundraising")), j(O.advertRows.firstRow), j(O.advertRows.secondRow), s.default.createElement(E.PrimaryButton, {
                ariaLabel: c.t("Start a GoFundMe"),
                as: "href",
                className: "p-search-results-start-gofundme",
                dataElementId: "btn_sign_up",
                layout: "full-for-small",
                size: "large",
                type: "button",
                to: "/sign-up"
            }, c.t("Start a GoFundMe"))), n && s.default.createElement(d.Routes, {
                config: n
            }))
        }
    },
    zYxt: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("qbjn");
        Object.defineProperty(t, "CommentList", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    },
    zj8x: function(e, t, a) {
        "use strict";
        a.r(t),
        t.default = a.p + "static/media/widget.5e6e1dd7d4c990564a00bbfcb620e944.svg"
    },
    zurt: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("a7zr");
        Object.defineProperty(t, "ReduxReCaptchaField", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        })
    }
}]);

