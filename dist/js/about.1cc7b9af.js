"use strict";
(self["webpackChunkvue3_sph"] = self["webpackChunkvue3_sph"] || []).push([
  [443],
  {
    2489: function (a, t, b) {
      b.r(t),
        b.d(t, {
          default: function () {
            return v;
          },
        });
      var i = b(3396),
        s = {
          __name: "index",
          setup(a) {
            return (a, t) => ((0, i.wg)(), (0, i.iD)("div", null, "Login"));
          },
        };
      const d = s;
      var v = d;
    },
    3915: function (a, t, b) {
      b.r(t),
        b.d(t, {
          default: function () {
            return v;
          },
        });
      var i = b(3396),
        s = {
          __name: "index",
          setup(a) {
            return (a, t) => ((0, i.wg)(), (0, i.iD)("div", null, "Register"));
          },
        };
      const d = s;
      var v = d;
    },
    875: function (a, t, b) {
      b.r(t),
        b.d(t, {
          default: function () {
            return K;
          },
        });
      var i = b(3396),
        s = b.p + "img/mobile01.cb97d931.png",
        d = b.p + "img/mobile02.c54c0c48.png",
        v = b.p + "img/mobile03.f8d7de58.png",
        e = b.p + "img/mobile04.a5d1484f.png",
        l = b.p + "img/mobile05.81da4da6.png",
        r = b.p + "img/mobile06.a00f46e5.png",
        c = b(1605),
        n = b(4870),
        p = b(7139),
        o = b(2594),
        m = b(6532);
      const h = (0, o.Q_)("searchList", {
          state: () => ({ productList: {} }),
          getters: {
            productLists: (a) => a.productList,
            trademarkLists: (a) => a.productList.trademarkList,
            attrLists: (a) => a.productList.attrsList,
          },
          actions: {
            async getProductList(a) {
              (a = { ...a }),
                Object.keys(a).forEach((t) => {
                  "" === a[t] && delete a[t];
                });
              let t = await (0, m.LA)(a);
              200 === t.code && (this.productList = t.data);
            },
          },
        }),
        u = (a) => ((0, i.dD)("data-v-739fee1a"), (a = a()), (0, i.Cn)(), a),
        g = { class: "clearfix selector" },
        A = { class: "type-wrap logo" },
        f = u(() => (0, i._)("div", { class: "fl key brand" }, "品牌", -1)),
        _ = { class: "value logos" },
        P = { class: "logo-list" },
        k = u(() =>
          (0, i._)(
            "div",
            { class: "ext" },
            [
              (0, i._)(
                "a",
                { href: "javascript:void(0);", class: "sui-btn" },
                "多选"
              ),
              (0, i._)("a", { href: "javascript:void(0);" }, "更多"),
            ],
            -1
          )
        ),
        w = { class: "fl key" },
        y = { class: "fl value" },
        L = { class: "type-list" },
        x = u(() => (0, i._)("div", { class: "fl ext" }, null, -1));
      var I = {
          __name: "indxe",
          setup(a) {
            const t = h();
            return (a, b) => (
              (0, i.wg)(),
              (0, i.iD)("div", g, [
                (0, i._)("div", A, [
                  f,
                  (0, i._)("div", _, [
                    (0, i._)("ul", P, [
                      ((0, i.wg)(!0),
                      (0, i.iD)(
                        i.HY,
                        null,
                        (0, i.Ko)(
                          (0, n.SU)(t).trademarkLists,
                          (a) => (
                            (0, i.wg)(),
                            (0, i.iD)(
                              "li",
                              { key: a.tmId },
                              (0, p.zw)(a.tmName),
                              1
                            )
                          )
                        ),
                        128
                      )),
                    ]),
                  ]),
                  k,
                ]),
                ((0, i.wg)(!0),
                (0, i.iD)(
                  i.HY,
                  null,
                  (0, i.Ko)(
                    (0, n.SU)(t).attrLists,
                    (t) => (
                      (0, i.wg)(),
                      (0, i.iD)("div", { class: "type-wrap", key: a.attrId }, [
                        (0, i._)("div", w, (0, p.zw)(t.attrName), 1),
                        (0, i._)("div", y, [
                          (0, i._)("ul", L, [
                            ((0, i.wg)(!0),
                            (0, i.iD)(
                              i.HY,
                              null,
                              (0, i.Ko)(
                                t.attrValueList,
                                (a) => (
                                  (0, i.wg)(),
                                  (0, i.iD)("li", { key: a }, [
                                    (0, i._)("a", null, (0, p.zw)(a), 1),
                                  ])
                                )
                              ),
                              128
                            )),
                          ]),
                        ]),
                        x,
                      ])
                    )
                  ),
                  128
                )),
              ])
            );
          },
        },
        j = b(89);
      const C = (0, j.Z)(I, [["__scopeId", "data-v-739fee1a"]]);
      var N = C;
      const D = { class: "main" },
        B = { class: "py-container" },
        H = (0, i.uE)(
          '<div class="bread" data-v-1206bb39><ul class="fl sui-breadcrumb" data-v-1206bb39><li data-v-1206bb39><a href="#" data-v-1206bb39>全部结果</a></li></ul><ul class="fl sui-tag" data-v-1206bb39><li class="with-x" data-v-1206bb39>手机</li><li class="with-x" data-v-1206bb39>iphone<i data-v-1206bb39>×</i></li><li class="with-x" data-v-1206bb39>华为<i data-v-1206bb39>×</i></li><li class="with-x" data-v-1206bb39>OPPO<i data-v-1206bb39>×</i></li></ul></div>',
          1
        ),
        Y = (0, i.uE)(
          '<div class="details clearfix" data-v-1206bb39><div class="sui-navbar" data-v-1206bb39><div class="navbar-inner filter" data-v-1206bb39><ul class="sui-nav" data-v-1206bb39><li class="active" data-v-1206bb39><a href="#" data-v-1206bb39>综合</a></li><li data-v-1206bb39><a href="#" data-v-1206bb39>销量</a></li><li data-v-1206bb39><a href="#" data-v-1206bb39>新品</a></li><li data-v-1206bb39><a href="#" data-v-1206bb39>评价</a></li><li data-v-1206bb39><a href="#" data-v-1206bb39>价格⬆</a></li><li data-v-1206bb39><a href="#" data-v-1206bb39>价格⬇</a></li></ul></div></div><div class="goods-list" data-v-1206bb39><ul class="yui3-g" data-v-1206bb39><li class="yui3-u-1-5" data-v-1206bb39><div class="list-wrap" data-v-1206bb39><div class="p-img" data-v-1206bb39><a href="item.html" target="_blank" data-v-1206bb39><img src="' +
            s +
            '" data-v-1206bb39></a></div><div class="price" data-v-1206bb39><strong data-v-1206bb39><em data-v-1206bb39>¥</em><i data-v-1206bb39>6088.00</i></strong></div><div class="attr" data-v-1206bb39><a target="_blank" href="item.html" title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】" data-v-1206bb39>Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)</a></div><div class="commit" data-v-1206bb39><i class="command" data-v-1206bb39>已有<span data-v-1206bb39>2000</span>人评价</i></div><div class="operate" data-v-1206bb39><a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger" data-v-1206bb39>加入购物车</a><a href="javascript:void(0);" class="sui-btn btn-bordered" data-v-1206bb39>收藏</a></div></div></li><li class="yui3-u-1-5" data-v-1206bb39><div class="list-wrap" data-v-1206bb39><div class="p-img" data-v-1206bb39><img src="' +
            d +
            '" data-v-1206bb39></div><div class="price" data-v-1206bb39><strong data-v-1206bb39><em data-v-1206bb39>¥</em><i data-v-1206bb39>6088.00</i></strong></div><div class="attr" data-v-1206bb39><a target="_blank" href="item.html" title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】" data-v-1206bb39>Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)</a></div><div class="commit" data-v-1206bb39><i class="command" data-v-1206bb39>已有<span data-v-1206bb39>2000</span>人评价</i></div><div class="operate" data-v-1206bb39><a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger" data-v-1206bb39>加入购物车</a><a href="javascript:void(0);" class="sui-btn btn-bordered" data-v-1206bb39>收藏</a></div></div></li><li class="yui3-u-1-5" data-v-1206bb39><div class="list-wrap" data-v-1206bb39><div class="p-img" data-v-1206bb39><img src="' +
            v +
            '" data-v-1206bb39></div><div class="price" data-v-1206bb39><strong data-v-1206bb39><em data-v-1206bb39>¥</em><i data-v-1206bb39>6088.00</i></strong></div><div class="attr" data-v-1206bb39><a target="_blank" href="item.html" title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】" data-v-1206bb39>Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)</a></div><div class="commit" data-v-1206bb39><i class="command" data-v-1206bb39>已有<span data-v-1206bb39>2000</span>人评价</i></div><div class="operate" data-v-1206bb39><a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger" data-v-1206bb39>加入购物车</a><a href="javascript:void(0);" class="sui-btn btn-bordered" data-v-1206bb39>收藏</a></div></div></li><li class="yui3-u-1-5" data-v-1206bb39><div class="list-wrap" data-v-1206bb39><div class="p-img" data-v-1206bb39><img src="' +
            e +
            '" data-v-1206bb39></div><div class="price" data-v-1206bb39><strong data-v-1206bb39><em data-v-1206bb39>¥</em><i data-v-1206bb39>6088.00</i></strong></div><div class="attr" data-v-1206bb39><a target="_blank" href="item.html" title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】" data-v-1206bb39>Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)</a></div><div class="commit" data-v-1206bb39><i class="command" data-v-1206bb39>已有<span data-v-1206bb39>2000</span>人评价</i></div><div class="operate" data-v-1206bb39><a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger" data-v-1206bb39>加入购物车</a><a href="javascript:void(0);" class="sui-btn btn-bordered" data-v-1206bb39>收藏</a></div></div></li><li class="yui3-u-1-5" data-v-1206bb39><div class="list-wrap" data-v-1206bb39><div class="p-img" data-v-1206bb39><img src="' +
            l +
            '" data-v-1206bb39></div><div class="price" data-v-1206bb39><strong data-v-1206bb39><em data-v-1206bb39>¥</em><i data-v-1206bb39>6088.00</i></strong></div><div class="attr" data-v-1206bb39><a target="_blank" href="item.html" title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】" data-v-1206bb39>Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)</a></div><div class="commit" data-v-1206bb39><i class="command" data-v-1206bb39>已有<span data-v-1206bb39>2000</span>人评价</i></div><div class="operate" data-v-1206bb39><a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger" data-v-1206bb39>加入购物车</a><a href="javascript:void(0);" class="sui-btn btn-bordered" data-v-1206bb39>收藏</a></div></div></li><li class="yui3-u-1-5" data-v-1206bb39><div class="list-wrap" data-v-1206bb39><div class="p-img" data-v-1206bb39><img src="' +
            r +
            '" data-v-1206bb39></div><div class="price" data-v-1206bb39><strong data-v-1206bb39><em data-v-1206bb39>¥</em><i data-v-1206bb39>6088.00</i></strong></div><div class="attr" data-v-1206bb39><a target="_blank" href="item.html" title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】" data-v-1206bb39>Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)</a></div><div class="commit" data-v-1206bb39><i class="command" data-v-1206bb39>已有<span data-v-1206bb39>2000</span>人评价</i></div><div class="operate" data-v-1206bb39><a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger" data-v-1206bb39>加入购物车</a><a href="javascript:void(0);" class="sui-btn btn-bordered" data-v-1206bb39>收藏</a></div></div></li><li class="yui3-u-1-5" data-v-1206bb39><div class="list-wrap" data-v-1206bb39><div class="p-img" data-v-1206bb39><img src="' +
            s +
            '" data-v-1206bb39></div><div class="price" data-v-1206bb39><strong data-v-1206bb39><em data-v-1206bb39>¥</em><i data-v-1206bb39>6088.00</i></strong></div><div class="attr" data-v-1206bb39><a target="_blank" href="item.html" title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】" data-v-1206bb39>Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)</a></div><div class="commit" data-v-1206bb39><i class="command" data-v-1206bb39>已有<span data-v-1206bb39>2000</span>人评价</i></div><div class="operate" data-v-1206bb39><a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger" data-v-1206bb39>加入购物车</a><a href="javascript:void(0);" class="sui-btn btn-bordered" data-v-1206bb39>收藏</a></div></div></li><li class="yui3-u-1-5" data-v-1206bb39><div class="list-wrap" data-v-1206bb39><div class="p-img" data-v-1206bb39><img src="' +
            d +
            '" data-v-1206bb39></div><div class="price" data-v-1206bb39><strong data-v-1206bb39><em data-v-1206bb39>¥</em><i data-v-1206bb39>6088.00</i></strong></div><div class="attr" data-v-1206bb39><a target="_blank" href="item.html" title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】" data-v-1206bb39>Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)</a></div><div class="commit" data-v-1206bb39><i class="command" data-v-1206bb39>已有<span data-v-1206bb39>2000</span>人评价</i></div><div class="operate" data-v-1206bb39><a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger" data-v-1206bb39>加入购物车</a><a href="javascript:void(0);" class="sui-btn btn-bordered" data-v-1206bb39>收藏</a></div></div></li><li class="yui3-u-1-5" data-v-1206bb39><div class="list-wrap" data-v-1206bb39><div class="p-img" data-v-1206bb39><img src="' +
            v +
            '" data-v-1206bb39></div><div class="price" data-v-1206bb39><strong data-v-1206bb39><em data-v-1206bb39>¥</em><i data-v-1206bb39>6088.00</i></strong></div><div class="attr" data-v-1206bb39><a target="_blank" href="item.html" title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】" data-v-1206bb39>Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)</a></div><div class="commit" data-v-1206bb39><i class="command" data-v-1206bb39>已有<span data-v-1206bb39>2000</span>人评价</i></div><div class="operate" data-v-1206bb39><a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger" data-v-1206bb39>加入购物车</a><a href="javascript:void(0);" class="sui-btn btn-bordered" data-v-1206bb39>收藏</a></div></div></li><li class="yui3-u-1-5" data-v-1206bb39><div class="list-wrap" data-v-1206bb39><div class="p-img" data-v-1206bb39><img src="' +
            e +
            '" data-v-1206bb39></div><div class="price" data-v-1206bb39><strong data-v-1206bb39><em data-v-1206bb39>¥</em><i data-v-1206bb39>6088.00</i></strong></div><div class="attr" data-v-1206bb39><a target="_blank" href="item.html" title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】" data-v-1206bb39>Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)</a></div><div class="commit" data-v-1206bb39><i class="command" data-v-1206bb39>已有<span data-v-1206bb39>2000</span>人评价</i></div><div class="operate" data-v-1206bb39><a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger" data-v-1206bb39>加入购物车</a><a href="javascript:void(0);" class="sui-btn btn-bordered" data-v-1206bb39>收藏</a></div></div></li></ul></div><div class="fr page" data-v-1206bb39><div class="sui-pagination clearfix" data-v-1206bb39><ul data-v-1206bb39><li class="prev disabled" data-v-1206bb39><a href="#" data-v-1206bb39>«上一页</a></li><li class="active" data-v-1206bb39><a href="#" data-v-1206bb39>1</a></li><li data-v-1206bb39><a href="#" data-v-1206bb39>2</a></li><li data-v-1206bb39><a href="#" data-v-1206bb39>3</a></li><li data-v-1206bb39><a href="#" data-v-1206bb39>4</a></li><li data-v-1206bb39><a href="#" data-v-1206bb39>5</a></li><li class="dotted" data-v-1206bb39><span data-v-1206bb39>...</span></li><li class="next" data-v-1206bb39><a href="#" data-v-1206bb39>下一页»</a></li></ul><div data-v-1206bb39><span data-v-1206bb39>共10页 </span></div></div></div></div>',
          1
        );
      var z = {
        __name: "index",
        setup(a) {
          const t = h();
          return (
            (0, i.bv)((a) => t.getProductList(a)),
            (a, t) => (
              (0, i.wg)(),
              (0, i.iD)(
                i.HY,
                null,
                [
                  (0, i.Wm)(c.Z),
                  (0, i._)("div", D, [
                    (0, i._)("div", B, [H, (0, i.Wm)(N), Y]),
                  ]),
                ],
                64
              )
            )
          );
        },
      };
      const E = (0, j.Z)(z, [["__scopeId", "data-v-1206bb39"]]);
      var K = E;
    },
  },
]);
//# sourceMappingURL=about.1cc7b9af.js.map
