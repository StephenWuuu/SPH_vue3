(function () {
  "use strict";
  var a = {
      6532: function (a, t, e) {
        e.d(t, {
          mo: function () {
            return u;
          },
          ix: function () {
            return f;
          },
          _F: function () {
            return v;
          },
          LA: function () {
            return b;
          },
        });
        var n = e(6265),
          r = e.n(n),
          i = e(530),
          o = e.n(i);
        o().configure({ showSpinner: !1 });
        const s = r().create({ baseURL: "/api", timeout: 5e3 });
        s.interceptors.request.use((a) => (o().start(), a)),
          s.interceptors.response.use(
            (a) => (o().done(), a.data),
            (a) => (o().done(), Promise.reject(a))
          );
        var c = s;
        const l = r().create({ baseURL: "/mock", timeout: 1e4 });
        l.interceptors.request.use((a) => a),
          l.interceptors.response.use(
            (a) => a.data,
            (a) => Promise.reject(a)
          );
        var d = l;
        e(4806);
        const f = () =>
            c({ url: "/product/getBaseCategoryList", method: "get" }),
          u = () => d.get("/banner"),
          v = () => d.get("/floor"),
          b = (a) => c({ url: "/list", method: "post", data: a });
      },
      5942: function (a, t, e) {
        var n = e(9242),
          r = e(3396),
          i = (e(7658), e.p + "img/logo.d600ca2b.png"),
          o = e(4870),
          s = e(2483);
        const c = (a) => (
            (0, r.dD)("data-v-35b1db3a"), (a = a()), (0, r.Cn)(), a
          ),
          l = { class: "header" },
          d = (0, r.uE)(
            '<div class="top" data-v-35b1db3a><div class="container" data-v-35b1db3a><div class="loginList" data-v-35b1db3a><p data-v-35b1db3a>尚品汇欢迎您！</p><p data-v-35b1db3a><span data-v-35b1db3a>请</span><a href="###" data-v-35b1db3a>登录</a><a href="###" class="register" data-v-35b1db3a>免费注册</a></p></div><div class="typeList" data-v-35b1db3a><a href="###" data-v-35b1db3a>我的订单</a><a href="###" data-v-35b1db3a>我的购物车</a><a href="###" data-v-35b1db3a>我的尚品汇</a><a href="###" data-v-35b1db3a>尚品汇会员</a><a href="###" data-v-35b1db3a>企业采购</a><a href="###" data-v-35b1db3a>关注尚品汇</a><a href="###" data-v-35b1db3a>合作招商</a><a href="###" data-v-35b1db3a>商家后台</a></div></div></div>',
            1
          ),
          f = { class: "bottom" },
          u = c(() =>
            (0, r._)(
              "h1",
              { class: "logoArea" },
              [
                (0, r._)(
                  "a",
                  {
                    class: "logo",
                    title: "尚品汇",
                    href: "###",
                    target: "_blank",
                  },
                  [(0, r._)("img", { src: i, alt: "" })]
                ),
              ],
              -1
            )
          ),
          v = { class: "searchArea" },
          b = { action: "###", class: "searchForm" };
        var p = {
            __name: "index",
            setup(a) {
              const t = (0, s.tv)(),
                e = (0, s.yj)(),
                i = (0, o.iH)(null),
                c = () => {
                  const { path: a, query: n } = e;
                  i
                    ? 0 === a.indexOf("/search")
                      ? t.push({
                          path: "/search",
                          params: { keywords: i },
                          query: n,
                        })
                      : t.push(`/search/${i.value}`, void 0, () => {})
                    : 0 === a.indexOf("/search")
                    ? t.push({ path: "/search", query: n })
                    : t.push({ path: "/search" });
                };
              return (a, t) => (
                (0, r.wg)(),
                (0, r.iD)("header", l, [
                  d,
                  (0, r._)("div", f, [
                    u,
                    (0, r._)("div", v, [
                      (0, r._)("form", b, [
                        (0, r.wy)(
                          (0, r._)(
                            "input",
                            {
                              type: "text",
                              id: "autocomplete",
                              class: "input-error input-xxlarge",
                              "onUpdate:modelValue":
                                t[0] || (t[0] = (a) => (i.value = a)),
                            },
                            null,
                            512
                          ),
                          [[n.nr, i.value]]
                        ),
                        (0, r._)(
                          "button",
                          {
                            class: "sui-btn btn-xlarge btn-danger",
                            type: "button",
                            onClick: c,
                          },
                          " 搜索 "
                        ),
                      ]),
                    ]),
                  ]),
                ])
              );
            },
          },
          m = e(89);
        const g = (0, m.Z)(p, [["__scopeId", "data-v-35b1db3a"]]);
        var h = g,
          y = e.p + "img/wx_cz.5d92bf53.jpg";
        const L = { class: "footer" },
          _ = (0, r.uE)(
            '<div class="footer-container" data-v-5fb54ac7><div class="footerList" data-v-5fb54ac7><div class="footerItem" data-v-5fb54ac7><h4 data-v-5fb54ac7>购物指南</h4><ul class="footerItemCon" data-v-5fb54ac7><li data-v-5fb54ac7>购物流程</li><li data-v-5fb54ac7>会员介绍</li><li data-v-5fb54ac7>生活旅行/团购</li><li data-v-5fb54ac7>常见问题</li><li data-v-5fb54ac7>购物指南</li></ul></div><div class="footerItem" data-v-5fb54ac7><h4 data-v-5fb54ac7>配送方式</h4><ul class="footerItemCon" data-v-5fb54ac7><li data-v-5fb54ac7>上门自提</li><li data-v-5fb54ac7>211限时达</li><li data-v-5fb54ac7>配送服务查询</li><li data-v-5fb54ac7>配送费收取标准</li><li data-v-5fb54ac7>海外配送</li></ul></div><div class="footerItem" data-v-5fb54ac7><h4 data-v-5fb54ac7>支付方式</h4><ul class="footerItemCon" data-v-5fb54ac7><li data-v-5fb54ac7>货到付款</li><li data-v-5fb54ac7>在线支付</li><li data-v-5fb54ac7>分期付款</li><li data-v-5fb54ac7>邮局汇款</li><li data-v-5fb54ac7>公司转账</li></ul></div><div class="footerItem" data-v-5fb54ac7><h4 data-v-5fb54ac7>售后服务</h4><ul class="footerItemCon" data-v-5fb54ac7><li data-v-5fb54ac7>售后政策</li><li data-v-5fb54ac7>价格保护</li><li data-v-5fb54ac7>退款说明</li><li data-v-5fb54ac7>返修/退换货</li><li data-v-5fb54ac7>取消订单</li></ul></div><div class="footerItem" data-v-5fb54ac7><h4 data-v-5fb54ac7>特色服务</h4><ul class="footerItemCon" data-v-5fb54ac7><li data-v-5fb54ac7>夺宝岛</li><li data-v-5fb54ac7>DIY装机</li><li data-v-5fb54ac7>延保服务</li><li data-v-5fb54ac7>尚品汇E卡</li><li data-v-5fb54ac7>尚品汇通信</li></ul></div><div class="footerItem" data-v-5fb54ac7><h4 data-v-5fb54ac7>帮助中心</h4><img src="' +
              y +
              '" data-v-5fb54ac7></div></div><div class="copyright" data-v-5fb54ac7><ul class="helpLink" data-v-5fb54ac7><li data-v-5fb54ac7> 关于我们 <span class="space" data-v-5fb54ac7></span></li><li data-v-5fb54ac7> 联系我们 <span class="space" data-v-5fb54ac7></span></li><li data-v-5fb54ac7> 关于我们 <span class="space" data-v-5fb54ac7></span></li><li data-v-5fb54ac7> 商家入驻 <span class="space" data-v-5fb54ac7></span></li><li data-v-5fb54ac7> 营销中心 <span class="space" data-v-5fb54ac7></span></li><li data-v-5fb54ac7> 友情链接 <span class="space" data-v-5fb54ac7></span></li><li data-v-5fb54ac7> 关于我们 <span class="space" data-v-5fb54ac7></span></li><li data-v-5fb54ac7> 营销中心 <span class="space" data-v-5fb54ac7></span></li><li data-v-5fb54ac7> 友情链接 <span class="space" data-v-5fb54ac7></span></li><li data-v-5fb54ac7>关于我们</li></ul><p data-v-5fb54ac7>地址：北京市昌平区宏福科技园综合楼6层</p><p data-v-5fb54ac7>京ICP备19006430号</p></div></div>',
            1
          ),
          w = [_];
        var x = {
          __name: "index",
          setup(a) {
            return (a, t) => ((0, r.wg)(), (0, r.iD)("div", L, w));
          },
        };
        const k = (0, m.Z)(x, [["__scopeId", "data-v-5fb54ac7"]]);
        var C = k,
          j = e(8854),
          I = {
            __name: "App",
            setup(a) {
              const t = (0, j.C)();
              return (
                (0, r.wF)(() => {
                  t.getCategoryList(), t.getBannerList(), t.getFloorList();
                }),
                (a, t) => {
                  const e = (0, r.up)("router-view");
                  return (
                    (0, r.wg)(),
                    (0, r.iD)(
                      r.HY,
                      null,
                      [
                        (0, r.wy)((0, r.Wm)(h, null, null, 512), [
                          [n.F8, !a.$route.meta.isHideFooter],
                        ]),
                        (0, r.Wm)(e),
                        (0, r.wy)((0, r.Wm)(C, null, null, 512), [
                          [n.F8, !a.$route.meta.isHideFooter],
                        ]),
                      ],
                      64
                    )
                  );
                }
              );
            },
          };
        const O = I;
        var F = O;
        const U = [
            { path: "/", redirect: "/home" },
            {
              path: "/home",
              name: "home",
              component: () =>
                Promise.all([e.e(605), e.e(268)]).then(e.bind(e, 3822)),
            },
            {
              path: "/login",
              name: "login",
              meta: { isHideFooter: !0 },
              component: () =>
                Promise.all([e.e(605), e.e(443)]).then(e.bind(e, 2489)),
            },
            {
              path: "/register",
              name: "register",
              meta: { isHideFooter: !0 },
              component: () =>
                Promise.all([e.e(605), e.e(443)]).then(e.bind(e, 3915)),
            },
            {
              path: "/search/:keywords?",
              name: "search",
              component: () =>
                Promise.all([e.e(605), e.e(443)]).then(e.bind(e, 875)),
            },
          ],
          P = (0, s.p7)({ history: (0, s.PO)(), routes: U });
        var E = P,
          A = e(2594),
          S = e(7634),
          H = e.n(S),
          N = JSON.parse(
            '[{"id":"1","imgUrl":"./images/banner1.jpg"},{"id":"2","imgUrl":"./images/banner2.jpg"},{"id":"3","imgUrl":"./images/banner3.jpg"},{"id":"4","imgUrl":"./images/banner4.jpg"}]'
          ),
          T = JSON.parse(
            '[{"id":"001","name":"家用电器","keywords":["节能补贴","4K电视","空气净化器","IH电饭煲","滚筒洗衣机","电热水器"],"imgUrl":"/images/floor-1-1.png","navList":[{"url":"#","text":"热门"},{"url":"#","text":"大家电"},{"url":"#","text":"生活电器"},{"url":"#","text":"厨房电器"},{"url":"#","text":"应季电器"},{"url":"#","text":"空气/净水"},{"url":"#","text":"高端电器"}],"carouselList":[{"id":"0011","imgUrl":"./images/home/floor-1-b01.png"},{"id":"0012","imgUrl":"./images/home/floor-1-b02.png"},{"id":"0013","imgUrl":"./images/home/floor-1-b03.png"}],"recommendList":["/images/floor-1-2.png","/images/floor-1-3.png","/images/floor-1-5.png","/images/floor-1-6.png"],"bigImg":"/images/floor-1-4.png"},{"id":"002","name":"手机通讯","keywords":["节能补贴2","4K电视2","空气净化器2","IH电饭煲2","滚筒洗衣机2","电热水器2"],"imgUrl":"/images/floor-1-1.png","navList":[{"url":"#","text":"热门2"},{"url":"#","text":"大家电2"},{"url":"#","text":"生活电器2"},{"url":"#","text":"厨房电器2"},{"url":"#","text":"应季电器2"},{"url":"#","text":"空气/净水2"},{"url":"#","text":"高端电器2"}],"carouselList":[{"id":"0011","imgUrl":"/images/floor-1-b01.png"},{"id":"0012","imgUrl":"/images/floor-1-b02.png"},{"id":"0013","imgUrl":"/images/floor-1-b03.png"}],"recommendList":["/images/floor-1-2.png","/images/floor-1-3.png","/images/floor-1-5.png","/images/floor-1-6.png"],"bigImg":"/images/floor-1-4.png"}]'
          );
        H().mock("/mock/banner", { code: 200, data: N }),
          H().mock("/mock/floor", { code: 200, data: T });
        const q = (0, n.ri)(F);
        q.use((0, A.WB)()), q.use(E).mount("#app");
      },
      8854: function (a, t, e) {
        e.d(t, {
          C: function () {
            return i;
          },
        });
        var n = e(6532),
          r = e(2594);
        const i = (0, r.Q_)("categoryList", {
          state: () => ({ categoryList: [], bannerList: [], floorList: [] }),
          actions: {
            async getCategoryList() {
              const a = await (0, n.ix)();
              200 === a.code && (this.categoryList = a.data);
            },
            async getBannerList() {
              const a = await (0, n.mo)();
              200 === a.code && (this.bannerList = a.data);
            },
            async getFloorList() {
              const a = await (0, n._F)();
              200 === a.code && (this.floorList = a.data);
            },
          },
          getters: {
            categoryLists: (a) => a.categoryList,
            bannerLists: (a) => a.bannerList,
            floorLists: (a) => a.floorList,
          },
        });
      },
    },
    t = {};
  function e(n) {
    var r = t[n];
    if (void 0 !== r) return r.exports;
    var i = (t[n] = { id: n, loaded: !1, exports: {} });
    return a[n].call(i.exports, i, i.exports, e), (i.loaded = !0), i.exports;
  }
  (e.m = a),
    (function () {
      var a = [];
      e.O = function (t, n, r, i) {
        if (!n) {
          var o = 1 / 0;
          for (d = 0; d < a.length; d++) {
            (n = a[d][0]), (r = a[d][1]), (i = a[d][2]);
            for (var s = !0, c = 0; c < n.length; c++)
              (!1 & i || o >= i) &&
              Object.keys(e.O).every(function (a) {
                return e.O[a](n[c]);
              })
                ? n.splice(c--, 1)
                : ((s = !1), i < o && (o = i));
            if (s) {
              a.splice(d--, 1);
              var l = r();
              void 0 !== l && (t = l);
            }
          }
          return t;
        }
        i = i || 0;
        for (var d = a.length; d > 0 && a[d - 1][2] > i; d--) a[d] = a[d - 1];
        a[d] = [n, r, i];
      };
    })(),
    (function () {
      e.n = function (a) {
        var t =
          a && a.__esModule
            ? function () {
                return a["default"];
              }
            : function () {
                return a;
              };
        return e.d(t, { a: t }), t;
      };
    })(),
    (function () {
      e.d = function (a, t) {
        for (var n in t)
          e.o(t, n) &&
            !e.o(a, n) &&
            Object.defineProperty(a, n, { enumerable: !0, get: t[n] });
      };
    })(),
    (function () {
      (e.f = {}),
        (e.e = function (a) {
          return Promise.all(
            Object.keys(e.f).reduce(function (t, n) {
              return e.f[n](a, t), t;
            }, [])
          );
        });
    })(),
    (function () {
      e.u = function (a) {
        return (
          "js/" +
          ({ 268: "Home", 443: "about" }[a] || a) +
          "." +
          { 268: "5abef602", 443: "1cc7b9af", 605: "18dfacbc" }[a] +
          ".js"
        );
      };
    })(),
    (function () {
      e.miniCssF = function (a) {
        return (
          "css/" +
          { 268: "Home", 443: "about" }[a] +
          "." +
          { 268: "e0508fbe", 443: "2899c1bb" }[a] +
          ".css"
        );
      };
    })(),
    (function () {
      e.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (a) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      e.o = function (a, t) {
        return Object.prototype.hasOwnProperty.call(a, t);
      };
    })(),
    (function () {
      var a = {},
        t = "vue3_sph:";
      e.l = function (n, r, i, o) {
        if (a[n]) a[n].push(r);
        else {
          var s, c;
          if (void 0 !== i)
            for (
              var l = document.getElementsByTagName("script"), d = 0;
              d < l.length;
              d++
            ) {
              var f = l[d];
              if (
                f.getAttribute("src") == n ||
                f.getAttribute("data-webpack") == t + i
              ) {
                s = f;
                break;
              }
            }
          s ||
            ((c = !0),
            (s = document.createElement("script")),
            (s.charset = "utf-8"),
            (s.timeout = 120),
            e.nc && s.setAttribute("nonce", e.nc),
            s.setAttribute("data-webpack", t + i),
            (s.src = n)),
            (a[n] = [r]);
          var u = function (t, e) {
              (s.onerror = s.onload = null), clearTimeout(v);
              var r = a[n];
              if (
                (delete a[n],
                s.parentNode && s.parentNode.removeChild(s),
                r &&
                  r.forEach(function (a) {
                    return a(e);
                  }),
                t)
              )
                return t(e);
            },
            v = setTimeout(
              u.bind(null, void 0, { type: "timeout", target: s }),
              12e4
            );
          (s.onerror = u.bind(null, s.onerror)),
            (s.onload = u.bind(null, s.onload)),
            c && document.head.appendChild(s);
        }
      };
    })(),
    (function () {
      e.r = function (a) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(a, "__esModule", { value: !0 });
      };
    })(),
    (function () {
      e.nmd = function (a) {
        return (a.paths = []), a.children || (a.children = []), a;
      };
    })(),
    (function () {
      e.p = "/";
    })(),
    (function () {
      var a = function (a, t, e, n) {
          var r = document.createElement("link");
          (r.rel = "stylesheet"), (r.type = "text/css");
          var i = function (i) {
            if (((r.onerror = r.onload = null), "load" === i.type)) e();
            else {
              var o = i && ("load" === i.type ? "missing" : i.type),
                s = (i && i.target && i.target.href) || t,
                c = new Error(
                  "Loading CSS chunk " + a + " failed.\n(" + s + ")"
                );
              (c.code = "CSS_CHUNK_LOAD_FAILED"),
                (c.type = o),
                (c.request = s),
                r.parentNode.removeChild(r),
                n(c);
            }
          };
          return (
            (r.onerror = r.onload = i),
            (r.href = t),
            document.head.appendChild(r),
            r
          );
        },
        t = function (a, t) {
          for (
            var e = document.getElementsByTagName("link"), n = 0;
            n < e.length;
            n++
          ) {
            var r = e[n],
              i = r.getAttribute("data-href") || r.getAttribute("href");
            if ("stylesheet" === r.rel && (i === a || i === t)) return r;
          }
          var o = document.getElementsByTagName("style");
          for (n = 0; n < o.length; n++) {
            (r = o[n]), (i = r.getAttribute("data-href"));
            if (i === a || i === t) return r;
          }
        },
        n = function (n) {
          return new Promise(function (r, i) {
            var o = e.miniCssF(n),
              s = e.p + o;
            if (t(o, s)) return r();
            a(n, s, r, i);
          });
        },
        r = { 143: 0 };
      e.f.miniCss = function (a, t) {
        var e = { 268: 1, 443: 1 };
        r[a]
          ? t.push(r[a])
          : 0 !== r[a] &&
            e[a] &&
            t.push(
              (r[a] = n(a).then(
                function () {
                  r[a] = 0;
                },
                function (t) {
                  throw (delete r[a], t);
                }
              ))
            );
      };
    })(),
    (function () {
      var a = { 143: 0 };
      (e.f.j = function (t, n) {
        var r = e.o(a, t) ? a[t] : void 0;
        if (0 !== r)
          if (r) n.push(r[2]);
          else {
            var i = new Promise(function (e, n) {
              r = a[t] = [e, n];
            });
            n.push((r[2] = i));
            var o = e.p + e.u(t),
              s = new Error(),
              c = function (n) {
                if (e.o(a, t) && ((r = a[t]), 0 !== r && (a[t] = void 0), r)) {
                  var i = n && ("load" === n.type ? "missing" : n.type),
                    o = n && n.target && n.target.src;
                  (s.message =
                    "Loading chunk " + t + " failed.\n(" + i + ": " + o + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = i),
                    (s.request = o),
                    r[1](s);
                }
              };
            e.l(o, c, "chunk-" + t, t);
          }
      }),
        (e.O.j = function (t) {
          return 0 === a[t];
        });
      var t = function (t, n) {
          var r,
            i,
            o = n[0],
            s = n[1],
            c = n[2],
            l = 0;
          if (
            o.some(function (t) {
              return 0 !== a[t];
            })
          ) {
            for (r in s) e.o(s, r) && (e.m[r] = s[r]);
            if (c) var d = c(e);
          }
          for (t && t(n); l < o.length; l++)
            (i = o[l]), e.o(a, i) && a[i] && a[i][0](), (a[i] = 0);
          return e.O(d);
        },
        n = (self["webpackChunkvue3_sph"] = self["webpackChunkvue3_sph"] || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var n = e.O(void 0, [998], function () {
    return e(5942);
  });
  n = e.O(n);
})();
//# sourceMappingURL=app.75e494d7.js.map
