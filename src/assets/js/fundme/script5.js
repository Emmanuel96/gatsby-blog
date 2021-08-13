/*! For license information please see main~e92dfc0b.937304346585566ad2d0.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([[4], {
    "1W+8": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.config = void 0;
        t.config = {
            name: "client",
            publicPath: "/",
            target: "web"
        }
    },
    p1Kg: function(e, t, n) {
        "use strict";
        var a = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.commonCurrencySymbol = t.unluckyNumbers = t.getUserRoleStrings = t.GalleryType = t.galleryImagesPerSection = t.CampaignStatus = t.twitter = t.photoTypes = t.getCampaignValueProps = t.getCampaignCategoriesText = t.getNavText = t.advertRows = t.algoliaClient = void 0;
        var r = n("wE+H"),
            i = a(n("EyDb")),
            s = n("YgTb");
        t.algoliaClient = i.default("E7PHE9BB38", "447d82ac9832ffcf05fb432dcb65bd08"),
        t.advertRows = {
            firstRow: [{
                title: s.t("Donor protection guarantee"),
                description: s.t("GoFundMe has the first and only guarantee in the industry.")
            }, {
                title: s.t("Simple setup"),
                description: s.t("You can personalize and share your GoFundMe in just a few minutes.")
            }, {
                title: s.t("0% platform fee"),
                description: s.t("With a 0% platform fee, you get to keep even more of your money.")
            }],
            secondRow: [{
                title: s.t("Mobile app"),
                description: s.t("The GoFundMe app makes it easy to launch and manage your campaign on the go.")
            }, {
                title: s.t("Social reach"),
                description: s.t("Harness the power of social media to spread your story and get more support.")
            }, {
                title: s.t("24/7 expert advice"),
                description: s.t("Our best in class Customer Happiness agents will answer your questions, day or night.")
            }]
        },
        t.getNavText = function() {
            var e = {
                    items: [{
                        dataElementId: "btn_nav_discover",
                        href: "/discover",
                        text: s.t("Fundraisers")
                    }, {
                        dataElementId: "btn_nav_success_stories",
                        href: "/c/success",
                        text: s.t("Success stories")
                    }],
                    seeAll: void 0,
                    text: s.t("Discover")
                },
                t = {
                    items: [{
                        dataElementId: "btn_nav_start_medical_fundraising",
                        href: "/start/medical-fundraising",
                        text: s.t("Medical")
                    }, {
                        dataElementId: "btn_nav_start_memorial_fundraising",
                        href: "/start/memorial-fundraising",
                        text: s.t("Memorial")
                    }, {
                        dataElementId: "btn_nav_start_emergency_fundraising",
                        href: "/start/emergency-fundraising",
                        text: s.t("Emergency")
                    }, {
                        dataElementId: "btn_nav_start_charity_fundraising",
                        href: "/start/charity-fundraising",
                        text: s.t("Charity")
                    }, {
                        dataElementId: "btn_nav_start_education_fundraising",
                        href: "/start/education-fundraising",
                        text: s.t("Education")
                    }],
                    seeAll: {
                        dataElementId: "btn_nav_start",
                        href: "/start",
                        text: s.t("See all")
                    },
                    text: s.t("Fundraise for")
                },
                n = {
                    groups: [{
                        items: e.items
                    }],
                    seeAll: e.seeAll,
                    text: e.text
                },
                a = {
                    groups: [{
                        items: t.items
                    }],
                    seeAll: t.seeAll,
                    text: t.text
                },
                r = {
                    items: [{
                        dataElementId: "btn_navmenu_my-donations",
                        href: "/donations",
                        text: s.t("Donations you've made")
                    }, {
                        dataElementId: "btn_nav_settings",
                        href: "/settings",
                        text: s.t("Account settings")
                    }, {
                        dataElementId: "btn_nav_support_gofundme_com",
                        href: "https://support.gofundme.com/",
                        text: s.t("Help center")
                    }, {
                        dataElementId: "btn_nav_sign_out",
                        href: "/sign-out",
                        text: s.t("Sign out")
                    }],
                    seeAll: void 0,
                    text: s.t("User name")
                },
                i = {
                    items: [{
                        dataElementId: "btn_nav_how_it_works",
                        href: "/c/how-it-works",
                        text: s.t("How GoFundMe works")
                    }, {
                        dataElementId: "btn_nav_crowdfunding",
                        href: "/c/crowdfunding",
                        text: s.t("What is crowdfunding?")
                    }],
                    seeAll: void 0,
                    text: s.t("How it works")
                },
                o = {
                    items: [{
                        dataElementId: "btn_nav_team_fundraising",
                        href: "/team-fundraising",
                        text: s.t("Team fundraising")
                    }, {
                        dataElementId: "btn_nav_fundraising_tips",
                        href: "/c/fundraising-tips",
                        text: s.t("Fundraising tips")
                    }, {
                        dataElementId: "btn_nav_donate_button",
                        href: "/c/donate-button-individuals",
                        text: s.t("Donate button")
                    }],
                    seeAll: void 0,
                    text: s.t("Plan your fundraiser")
                },
                d = {
                    groups: [{
                        items: [{
                            dataElementId: "btn_navmenu_my-donations",
                            href: "/donations",
                            text: s.t("Donations you've made")
                        }, {
                            dataElementId: "btn_nav_settings",
                            href: "/settings",
                            text: s.t("Account settings")
                        }, {
                            dataElementId: "btn_nav_support_gofundme_com",
                            href: "https://support.gofundme.com/",
                            text: s.t("Help center")
                        }, {
                            dataElementId: "btn_nav_sign_out",
                            href: "/sign-out",
                            text: s.t("Sign out")
                        }]
                    }],
                    seeAll: void 0,
                    text: s.t("User name")
                };
            return {
                navDiscoverAccordion: n,
                navDiscoverDropdown: n,
                navFundraiseDropdown: a,
                navFundraiseForAccordion: a,
                navHowItWorksAccordion: {
                    groups: [{
                        items: i.items
                    }],
                    seeAll: i.seeAll,
                    text: i.text
                },
                navLoggedInDropdown: d,
                navLoggedOutDropdown: {
                    groups: [i, o],
                    seeAll: i.seeAll,
                    text: i.text
                },
                navPlanYourFundraiserAccordion: {
                    groups: [{
                        items: o.items
                    }],
                    seeAll: o.seeAll,
                    text: o.text
                },
                navUserAccordion: {
                    groups: [{
                        items: r.items
                    }],
                    seeAll: r.seeAll,
                    text: r.text
                }
            }
        },
        t.getCampaignCategoriesText = function() {
            return {
                10: {
                    href: "/discover/travel-fundraiser",
                    keyname: "Travel",
                    name: s.t("Travel & Adventure")
                },
                11: {
                    href: "/discover/medical-fundraiser",
                    keyname: "Medical",
                    name: s.t("Medical, Illness & Healing")
                },
                12: {
                    href: "/discover/faith-fundraiser",
                    keyname: "Faith",
                    name: s.t("Missions, Faith & Church")
                },
                13: {
                    href: "/discover/charity-fundraiser",
                    keyname: "Charity",
                    name: s.t("Non-Profits & Charities")
                },
                14: {
                    href: "/discover/newlywed-fundraiser",
                    keyname: "Newlyweds",
                    name: s.t("Weddings & Honeymoons")
                },
                15: {
                    href: "/discover",
                    keyname: "Other",
                    name: s.t("Other")
                },
                16: {
                    href: "/discover/sports-fundraiser",
                    keyname: "Sports",
                    name: s.t("Sports, Teams & Clubs")
                },
                17: {
                    href: "/discover/education-fundraiser",
                    keyname: "Education",
                    name: s.t("Education & Learning")
                },
                18: {
                    href: "/discover/volunteer-fundraiser",
                    keyname: "Volunteer",
                    name: s.t("Volunteer & Service")
                },
                19: {
                    href: "/discover/competition-fundraiser",
                    keyname: "Competitions",
                    name: s.t("Competitions & Pageants")
                },
                2: {
                    href: "/discover/emergency-fundraiser",
                    keyname: "Emergencies",
                    name: s.t("Accidents & Emergencies")
                },
                20: {
                    href: "/discover/wishes-fundraiser",
                    keyname: "Wishes",
                    name: s.t("Dreams, Hopes & Wishes")
                },
                3: {
                    href: "/discover/animal-fundraiser",
                    keyname: "Animals",
                    name: s.t("Animals & Pets")
                },
                342: {
                    href: "/start/environment-fundraising",
                    keyname: "Environment",
                    name: s.t("Environment")
                },
                344: {
                    href: "/start/rent-bills-fundraising",
                    keyname: "Bills",
                    name: s.t("Rent, Food & Monthly Bills")
                },
                348: {
                    href: "/start/birthday-pots-fundraising",
                    keyname: "Birthday Pots",
                    name: s.t("Birthday Pots")
                },
                4: {
                    href: "/discover/family-fundraiser",
                    keyname: "Family",
                    name: s.t("Babies, Kids & Family")
                },
                5: {
                    href: "/discover/business-fundraiser",
                    keyname: "Business",
                    name: s.t("Business & Entrepreneurs")
                },
                6: {
                    href: "/discover/event-fundraiser",
                    keyname: "Events",
                    name: s.t("Celebrations & Events")
                },
                7: {
                    href: "/discover/community-fundraiser",
                    keyname: "Community",
                    name: s.t("Community & Neighbors")
                },
                8: {
                    href: "/discover/creative-fundraiser",
                    keyname: "Creative",
                    name: s.t("Creative Arts, Music & Film")
                },
                9: {
                    href: "/discover/memorial-fundraiser",
                    keyname: "Memorials",
                    name: s.t("Funerals & Memorials")
                }
            }
        },
        t.getCampaignValueProps = function() {
            return [{
                heading: s.t("#1 fundraising platform"),
                icon: "trophy",
                link: {
                    text: s.t("Learn more"),
                    url: "https://www.gofundme.com/c/how-it-works"
                },
                text: s.t("More people start fundraisers on GoFundMe than on any other platform.")
            }, {
                heading: s.t("GoFundMe Guarantee"),
                icon: "handshake",
                link: {
                    dataElementId: "btn_guarantee_learn-more",
                    text: s.t("Learn more"),
                    url: "https://www.gofundme.com/c/safety/gofundme-guarantee"
                },
                text: s.t("In the rare case something isn’t right, we will work with you to determine if misuse occurred.")
            }, {
                heading: s.t("Expert advice, 24/7"),
                icon: "progress",
                link: {
                    text: s.t("Learn more"),
                    url: "https://support.gofundme.com/"
                },
                text: s.t("Contact us with your questions and we’ll answer, day or night.")
            }]
        },
        function(e) {
            e[e.CONTENT = 4] = "CONTENT",
            e[e.DESCRIPTION = 1] = "DESCRIPTION",
            e[e.FACEBOOK_SLIDESHOW = 3] = "FACEBOOK_SLIDESHOW",
            e[e.MAIN = 0] = "MAIN",
            e[e.TEAM = 6] = "TEAM",
            e[e.UPDATE = 2] = "UPDATE",
            e[e.YOUTUBE_POSTDONATE = 5] = "YOUTUBE_POSTDONATE"
        }(t.photoTypes || (t.photoTypes = {})),
        t.twitter = {
            CARD: "summary_large_image",
            SITE: "@gofundme"
        },
        function(e) {
            e.ACTIVE = "Active",
            e.CLOSED = "Closed",
            e.DEACTIVATED = "Deactivated",
            e.DELETED = "Deleted",
            e.NEW = "New",
            e.TRENDING = "Trending"
        }(t.CampaignStatus || (t.CampaignStatus = {})),
        t.galleryImagesPerSection = 9,
        function(e) {
            e.campaign = "campaign",
            e.comment = "comment",
            e.community = "community",
            e.update = "update"
        }(t.GalleryType || (t.GalleryType = {})),
        t.getUserRoleStrings = function() {
            var e;
            return (e = {})[r.UserRoles.ORGANIZER] = s.t("Organizer"), e[r.UserRoles.TEAM_MEMBER] = s.t("Team member"), e[r.UserRoles.BENEFICIARY] = s.t("Beneficiary"), e
        },
        t.unluckyNumbers = [40, 130, 170, 260, 400, 420, 440, 1300, 1700, 2600, 4e3, 4400, 4440, 6660, 13e3, 17e3, 26e3, 44400, 44440],
        t.commonCurrencySymbol = {
            dollar: ["AR", "AU", "BB", "BS", "CA", "CL", "CO", "EC", "HK", "LC", "MX", "NZ", "SV", "SG", "ZW", "US"],
            kronor: ["DK", "NO", "SE"]
        }
    }
}]);

