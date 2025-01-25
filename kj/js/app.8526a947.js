(function () {
  var t = {
    3544: function (t, e, i) {
      "use strict";
      var n = i(6848),
        o = function () {
          var t = this,
            e = t._self._c;
          return e("div", [e("HelloWorld")], 1);
        },
        s = [],
        r = function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            { attrs: { id: "app" } },
            [
              e("div", {
                staticStyle: {
                  position: "fixed",
                  width: "3rem",
                  height: "1rem",
                  top: "10px",
                  right: "10px",
                  "background-color": "transparent",
                  border: "none",
                  padding: "10px",
                  cursor: "pointer",
                },
                on: {
                  click: function (e) {
                    return t.showTc();
                  },
                },
              }),
              t.showSfsq
                ? e(
                  "div",
                  // {
                  //   staticStyle: {
                  //     position: "absolute",
                  //     top: "50%",
                  //     width: "80%",
                  //     display: "none"
                  //   },
                  // },
                  [
                    // e(
                    //   "van-button",
                    //   {
                    //     staticStyle: { "background-color": "#DEAF69" },
                    //     attrs: { round: "", size: "large" },
                    //     on: {
                    //       click: function (e) {
                    //         return t.showSqyzan();
                    //       },
                    //     },
                    //   },
                    //   [t._v("授权验证")]
                    // ),
                    e("div", [
                      e("img", {
                        staticStyle: { position: "relative" },
                        style: {
                          width: t.imgWidth + "%",
                          left: t.imgLeft + "rem",
                          top: t.imgTop + "rem",
                        },
                        attrs: { src: i(7678) },
                      }),
                    ])
                  ],
                  1
                )
                : e("div", [
                  0 === this.show
                    ? e(
                      "div",
                      [
                        // e(
                        //   "van-loading",
                        //   {
                        //     staticStyle: {
                        //       "text-align": "center",
                        //       "margin-top": "10rem",
                        //     },
                        //     attrs: { color: "#DEAF69", size: "48px" },
                        //   },
                        //   [t._v("验证中...")]
                        // ),
                        e("img", {
                          staticStyle: { position: "relative" },
                          style: {
                            width: t.imgWidth + "%",
                            left: t.imgLeft + "rem",
                            top: t.imgTop + "rem",
                          },
                          attrs: { src: i(7678) },
                        }),
                      ],
                      1
                    )
                    : t._e(),
                  1 === this.show
                    ? e("div", [
                      e("img", {
                        staticStyle: { position: "relative" },
                        style: {
                          width: t.imgWidth + "%",
                          left: t.imgLeft + "rem",
                          top: t.imgTop + "rem",
                        },
                        attrs: { src: i(7678) },
                      }),
                    ])
                    : t._e(),
                  2 === this.show
                    ? e("div", [
                      e("img", {
                        staticStyle: { position: "relative" },
                        style: {
                          width: t.imgWidth + "%",
                          left: t.imgLeft + "rem",
                          top: t.imgTop + "rem",
                        },
                        attrs: { src: i(5823) },
                      }),
                    ])
                    : t._e(),
                ]),
              e(
                "div",
                {
                  staticClass: "clock-container",
                  style: { marginTop: t.imgMargin + "rem" },
                },
                t._l(t.digits, function (i, n) {
                  return e("span", { key: n, staticClass: "digit-flip" }, [
                    e(
                      "div",
                      {
                        staticClass: "flip-card",
                        class: { flipped: i.flipped },
                      },
                      [
                        e("div", { staticClass: "front" }, [
                          t._v(t._s(i.front)),
                        ]),
                        e("div", { staticClass: "back" }, [
                          t._v(t._s(i.back)),
                        ]),
                      ]
                    ),
                  ]);
                }),
                0
              ),
              e(
                "van-popup",
                {
                  staticStyle: { "background-color": "transparent", "display": "none" },
                  model: {
                    value: t.showInfo,
                    callback: function (e) {
                      t.showInfo = e;
                    },
                    expression: "showInfo",
                  },
                },
                [
                  e("img", {
                    staticStyle: { height: "25rem" },
                    attrs: {
                      src: i(9394),
                      closeable: !0,
                      "close-icon": "close",
                      position: "bottom",
                    },
                  }),
                ]
              ),
              // e(
              //   "van-dialog",
              //   {
              //     attrs: {
              //       title: "授权验证",
              //       "show-cancel-button": "",
              //       confirmButtonText: "同意并继续",
              //       cancelButtonText: "不同意",
              //       "confirm-button-color": "#DEAF69",
              //     },
              //     on: {
              //       confirm: function (e) {
              //         return t.handleWeChatAuth();
              //       },
              //     },
              //     model: {
              //       value: t.showSqyz,
              //       callback: function (e) {
              //         t.showSqyz = e;
              //       },
              //       expression: "showSqyz",
              //     },
              //   },
              //   [
              //     e(
              //       "div",
              //       {
              //         staticStyle: {
              //           margin: "1rem",
              //           "font-size": "0.7rem",
              //           "line-height": "2",
              //           "text-align": "center",
              //         },
              //       },
              //       [t._v(" 为保障你的合法权益，请阅读并同意以下协议")]
              //     ),
              //     e(
              //       "div",
              //       {
              //         staticStyle: {
              //           margin: "1rem",
              //           "font-size": "0.7rem",
              //           "line-height": "2",
              //           "text-align": "center",
              //           color: "#DEAF69",
              //           "text-decoration": "underline",
              //           "text-decoration-color": "#DEAF69",
              //         },
              //         on: {
              //           click: function (e) {
              //             return t.yinsizhengce();
              //           },
              //         },
              //       },
              //       [t._v("«隐私政策»")]
              //     ),
              //   ]
              // ),
              e(
                "van-popup",
                {
                  staticStyle: { "background-color": "transparent" },
                  attrs: { "close-on-click-overlay": !1 },
                  model: {
                    value: t.showCs,
                    callback: function (e) {
                      t.showCs = e;
                    },
                    expression: "showCs",
                  },
                },
                [
                  e("img", {
                    staticStyle: { height: "20rem" },
                    attrs: { src: i(5066) },
                  }),
                ]
              ),
            ],
            1
          );
        },
        a = [],
        c = (i(4603), i(7566), i(8721), i(8704)),
        l = {
          data() {
            return {
              currentTime: "",
              timeRemaining: 300,
              progressWidth: 100,
              intervalId: null,
              digits: [
                { front: "0", back: "1", flipped: !1 },
                { front: "0", back: "1", flipped: !1 },
                { front: ":", back: ":", flipped: !1 },
                { front: "0", back: "1", flipped: !1 },
                { front: "0", back: "1", flipped: !1 },
                { front: ":", back: ":", flipped: !1 },
                { front: "0", back: "1", flipped: !1 },
                { front: "0", back: "1", flipped: !1 },
              ],
              currentDigits: [],
              show: 0,
              showInfo: !1,
              showCs: !1,
              showSfsq: !1,
              showSqyz: !1,
              lasttime: "2025-01-16 16:55:55",
              imgWidth: 80,
              imgLeft: 0,
              imgTop: 13,
              imgMargin: 13,
            };
          },
          mounted() {
            this.updateday(), setInterval(this.updateday, 1e3);
            const t = c.A.get("myParam");
            t
              ? this.handleWeChatAuth()
              : ((this.showSfsq = !0), (this.showSqyz = !0)),
              1 === performance.navigation.type && true,
              // (window.location.href = "https://kj.yimoos.net"),
              this.adjustImageSize(),
              window.addEventListener("resize", this.adjustImageSize),
              window.addEventListener("pageshow", (t) => {
                t.persisted && (console.log("后退"), this.handleWeChatAuth());
              });
          },
          created() {
            this.updateTime(), setInterval(() => this.updateTime(), 1e3);
          },
          beforeDestroy() {
            clearInterval(this.intervalId),
              window.removeEventListener("resize", this.adjustImageSize),
              window.removeEventListener("pageshow", this.handleWeChatAuth);
          },
          methods: {
            adjustImageSize() {
              const t = window.innerWidth;
              t <= 400
                ? ((this.imgWidth = 80),
                  (this.imgLeft = 2),
                  (this.imgTop = 10),
                  (this.imgMargin = 10))
                : t <= 500
                  ? ((this.imgWidth = 100),
                    (this.imgLeft = 0),
                    (this.imgTop = 13),
                    (this.imgMargin = 13))
                  : ((this.imgWidth = 60), (this.imgLeft = 8));
            },
            yinsizhengce() {
              this.$dialog.alert({
                title: "隐私声明",
                messageAlign: "left",
                message:
                  "       请您特别注意：鉴于您正在访问烤匠取号验证页面，您在使用该页面时，获取方可能会识别并获取到您的相关信息，这些信息可能涉及您的个人隐私，包括但不限于您在使用本页面产生的微信openid等。在此，特别提醒您，如您不同意，您可以拒绝访问。您一旦点击了“同意并继续”则表示您已将您的个人前述相关信息对获取方进行了授权。获取方可以为了线下取号及就餐等相关之目的，合理使用您的前述个人相关信息，获取方不因此承担任何责任。感谢您的阅读，祝您愉快！",
              });
            },
            showTc() {
              this.showInfo = !0;
            },
            showSqyzan() {
              this.showSqyz = !0;
            },
            updateTime() {
              const t = new Date();
              this.currentTime = `${t
                .getHours()
                .toString()
                .padStart(2, "0")}:${t
                  .getMinutes()
                  .toString()
                  .padStart(2, "0")}:${t
                    .getSeconds()
                    .toString()
                    .padStart(2, "0")}`;
            },
            startCountdown() {
              this.intervalId = setInterval(() => {
                this.timeRemaining > 0
                  ? (this.timeRemaining--,
                    (this.progressWidth = (this.timeRemaining / 300) * 100))
                  : (clearInterval(this.intervalId), (this.showCs = !0));
              }, 1e3);
            },
            handleWeChatAuth() {
              c.A.set("myParam", "someValue", { expires: 7 }),
                (this.showButton = !1);
              const t = new URLSearchParams(window.location.search),
                e = t.get("code");
              if (e)
                this.requestOpenId(e)
                  .then((t) => {
                    !0 === t.useFlag
                      ? (console.log(t),
                        (this.show = 1),
                        (this.timeRemaining = t.timeLeft),
                        this.startCountdown())
                      : (console.log(t),
                        console.log(2),
                        (this.show = 2),
                        (this.lasttime = t.recentlyRequestTime));
                  })
                  .catch(() => {
                    console.log(3), (this.show = !1);
                  });
              else {
                // const t = "wx517fd7a46257bfd7",
                //   e = encodeURIComponent("https://kj.yimoos.net");
                // window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${t}&redirect_uri=${e}&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect`;
              }
            },
            requestOpenId(t) {
              // return fetch(`https://kj.yimoos.net:9901/request/${t}`, {
              //   method: "GET",
              // }).then((t) => t.json());
              return {
                useFlag: true
              }
            },
            updateday() {
              const t = new Date(),
                e = this.padZero(t.getHours()),
                i = this.padZero(t.getMinutes()),
                n = this.padZero(t.getSeconds());
              this.currentDigits = [
                e[0],
                e[1],
                ":",
                i[0],
                i[1],
                ":",
                n[0],
                n[1],
              ];
              for (let o = 0; o < this.digits.length; o++)
                this.digits[o].front !== this.currentDigits[o] &&
                  this.flipDigit(o, this.currentDigits[o]);
            },
            flipDigit(t, e) {
              this.$set(this.digits[t], "flipped", !0),
                setTimeout(() => {
                  this.$set(this.digits[t], "back", e),
                    this.$set(this.digits[t], "front", e),
                    this.$set(this.digits[t], "flipped", !1);
                }, 500);
            },
            padZero(t) {
              return t.toString().padStart(2, "0");
            },
          },
        },
        h = l,
        d = i(1656),
        u = (0, d.A)(h, r, a, !1, null, "177179c1", null),
        p = u.exports,
        f = i(8958),
        g = i(2377),
        m = (i(144), i(2241), i(689));
      n["default"].use(m.A), n["default"].use(f.A), n["default"].use(g.Ay);
      var w = { name: "App", components: { HelloWorld: p } },
        v = w,
        y = (0, d.A)(v, o, s, !1, null, null, null),
        b = y.exports;
      i(6571);
      (n["default"].config.productionTip = !1),
        new n["default"]({ render: (t) => t(b) }).$mount("#app");
    },
    6571: function () {
      function t() {
        const t = document.documentElement.clientWidth || window.innerWidth;
        let e = Math.max(t / 37.5, 20);
        document.documentElement.style.fontSize = `${e}px`;
      }
      t(), window.addEventListener("resize", t);
    },
    5066: function (t, e, i) {
      "use strict";
      t.exports = i.p + "img/chaoshi.76d6ce7b.png";
    },
    5823: function (t, e, i) {
      "use strict";
      t.exports = i.p + "img/fail.24accf77.jpg";
    },
    9394: function (t, e, i) {
      "use strict";
      t.exports = i.p + "img/gongneng.fddc769b.png";
    },
    7678: function (t, e, i) {
      "use strict";
      t.exports = i.p + "img/success.e8720627.jpg";
    },
  },
    e = {};
  function i(n) {
    var o = e[n];
    if (void 0 !== o) return o.exports;
    var s = (e[n] = { exports: {} });
    return t[n].call(s.exports, s, s.exports, i), s.exports;
  }
  (i.m = t),
    (function () {
      var t = [];
      i.O = function (e, n, o, s) {
        if (!n) {
          var r = 1 / 0;
          for (h = 0; h < t.length; h++) {
            (n = t[h][0]), (o = t[h][1]), (s = t[h][2]);
            for (var a = !0, c = 0; c < n.length; c++)
              (!1 & s || r >= s) &&
                Object.keys(i.O).every(function (t) {
                  return i.O[t](n[c]);
                })
                ? n.splice(c--, 1)
                : ((a = !1), s < r && (r = s));
            if (a) {
              t.splice(h--, 1);
              var l = o();
              void 0 !== l && (e = l);
            }
          }
          return e;
        }
        s = s || 0;
        for (var h = t.length; h > 0 && t[h - 1][2] > s; h--) t[h] = t[h - 1];
        t[h] = [n, o, s];
      };
    })(),
    (function () {
      i.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
              return t["default"];
            }
            : function () {
              return t;
            };
        return i.d(e, { a: e }), e;
      };
    })(),
    (function () {
      i.d = function (t, e) {
        for (var n in e)
          i.o(e, n) &&
            !i.o(t, n) &&
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
      };
    })(),
    (function () {
      i.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (t) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      i.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      };
    })(),
    (function () {
      i.r = function (t) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      };
    })(),
    (function () {
      i.p = "";
    })(),
    (function () {
      var t = { 524: 0 };
      i.O.j = function (e) {
        return 0 === t[e];
      };
      var e = function (e, n) {
        var o,
          s,
          r = n[0],
          a = n[1],
          c = n[2],
          l = 0;
        if (
          r.some(function (e) {
            return 0 !== t[e];
          })
        ) {
          for (o in a) i.o(a, o) && (i.m[o] = a[o]);
          if (c) var h = c(i);
        }
        for (e && e(n); l < r.length; l++)
          (s = r[l]), i.o(t, s) && t[s] && t[s][0](), (t[s] = 0);
        return i.O(h);
      },
        n = (self["webpackChunkkaojiang"] = self["webpackChunkkaojiang"] || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
  var n = i.O(void 0, [504], function () {
    return i(3544);
  });
  n = i.O(n);
})();
//# sourceMappingURL=app.8526a947.js.map
