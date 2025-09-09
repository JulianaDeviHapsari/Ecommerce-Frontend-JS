import { _ as __nuxt_component_1 } from './Container-D6NRf-p3.mjs';
import { _ as __nuxt_component_6 } from './Carousel-C-hLT9s5.mjs';
import { _ as _export_sfc, b as __nuxt_component_5, a as __nuxt_component_0$5 } from './server.mjs';
import { _ as _sfc_main$2 } from './NuxtImg-DLumQ5km.mjs';
import { mergeProps, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as __nuxt_component_7 } from './ProductCard-D756mFH9.mjs';
import 'tailwind-merge';
import './Carousel-BL-Tk4PX.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:url';
import 'ipx';
import 'node:fs';
import 'node:path';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './number.utils-vPnlR88w.mjs';

const _sfc_main$1 = {
  __name: "CategoryItem",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: ""
    },
    image: {
      type: String,
      default: ""
    },
    slug: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_NuxtImg = _sfc_main$2;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        class: "category-item",
        to: {
          path: "/search",
          query: {
            categories: __props.slug
          }
        }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: __props.image,
              format: "webp"
            }, null, _parent2, _scopeId));
            _push2(`<p data-v-09ec0a7c${_scopeId}>${ssrInterpolate(__props.title)}</p>`);
          } else {
            return [
              createVNode(_component_NuxtImg, {
                src: __props.image,
                format: "webp"
              }, null, 8, ["src"]),
              createVNode("p", null, toDisplayString(__props.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/feature/Homepage/CategoryItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-09ec0a7c"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      "https://picsum.photos/1920/1080?random=1",
      "https://picsum.photos/1920/1080?random=2",
      "https://picsum.photos/1920/1080?random=3"
    ];
    const categories = [
      { slug: "elektronik", name: "Elektronik", icon: "https://picsum.photos/200/200?random=5" },
      { slug: "fashion", name: "Fashion", icon: "https://picsum.photos/200/200?random=12" },
      { slug: "olahraga", name: "Olahraga", icon: "https://picsum.photos/200/200?random=13" },
      { slug: "mainan", name: "Mainan", icon: "https://picsum.photos/200/200?random=14" },
      { slug: "otomotif", name: "Otomotif", icon: "https://picsum.photos/200/200?random=15" },
      { slug: "perabot", name: "Perabot", icon: "https://picsum.photos/200/200?random=16" }
    ];
    const products = [
      {
        slug: "sepatu-1",
        name: "Sepatu Kasual Slingback Mules",
        price: 1e5,
        discount: 10,
        image: "https://picsum.photos/400/400?random=21"
      },
      {
        slug: "tas-1",
        name: "Tas Selempang Kulit Premium",
        price: 25e4,
        discount: 0,
        image: "https://picsum.photos/400/400?random=22"
      },
      {
        slug: "laptop-1",
        name: "Laptop Gaming XYZ",
        price: 75e5,
        discount: 5,
        image: "https://picsum.photos/400/400?random=23"
      },
      {
        slug: "baju-1",
        name: "Kaos Polos Premium",
        price: 8e4,
        discount: 0,
        image: "https://picsum.photos/400/400?random=24"
      },
      {
        slug: "bola-1",
        name: "Bola Sepak Original",
        price: 15e4,
        discount: 15,
        image: "https://picsum.photos/400/400?random=25"
      },
      {
        slug: "bola-1",
        name: "Bola Sepak Original",
        price: 15e4,
        discount: 15,
        image: "https://picsum.photos/400/400?random=26"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = __nuxt_component_1;
      const _component_BaseCarousel = __nuxt_component_6;
      const _component_FeatureHomepageCategoryItem = __nuxt_component_2;
      const _component_BaseProductCard = __nuxt_component_7;
      const _component_UButton = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-6 pb-6" }, _attrs))} data-v-4bb0f3a8><section class="banner-section" data-v-4bb0f3a8>`);
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseCarousel, {
              width: "796px",
              height: "235px",
              "aspect-ratio": "3.39/1",
              items,
              class: "mx-auto"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseCarousel, {
                width: "796px",
                height: "235px",
                "aspect-ratio": "3.39/1",
                items,
                class: "mx-auto"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="category-section" data-v-4bb0f3a8>`);
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="category-section-card" data-v-4bb0f3a8${_scopeId}><div class="category-section-header" data-v-4bb0f3a8${_scopeId}><h2 data-v-4bb0f3a8${_scopeId}>Kategori</h2></div><div class="category-section-content" data-v-4bb0f3a8${_scopeId}><!--[-->`);
            ssrRenderList(categories, (cat) => {
              _push2(ssrRenderComponent(_component_FeatureHomepageCategoryItem, {
                key: `cat-${cat.slug}`,
                title: cat.name,
                image: cat.icon,
                slug: cat.slug
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div>`);
          } else {
            return [
              createVNode("div", { class: "category-section-card" }, [
                createVNode("div", { class: "category-section-header" }, [
                  createVNode("h2", null, "Kategori")
                ]),
                createVNode("div", { class: "category-section-content" }, [
                  (openBlock(), createBlock(Fragment, null, renderList(categories, (cat) => {
                    return createVNode(_component_FeatureHomepageCategoryItem, {
                      key: `cat-${cat.slug}`,
                      title: cat.name,
                      image: cat.icon,
                      slug: cat.slug
                    }, null, 8, ["title", "image", "slug"]);
                  }), 64))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="product-section" data-v-4bb0f3a8>`);
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="product-section-header" data-v-4bb0f3a8${_scopeId}><h2 data-v-4bb0f3a8${_scopeId}>Rekomendasi</h2></div><div class="product-section-content" data-v-4bb0f3a8${_scopeId}><!--[-->`);
            ssrRenderList(products, (product) => {
              _push2(ssrRenderComponent(_component_BaseProductCard, {
                key: `product-${product.slug}`,
                title: product.name,
                price: product.price,
                image: product.image,
                slug: product.slug,
                discount: product.discount
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "product-section-header" }, [
                createVNode("h2", null, "Rekomendasi")
              ]),
              createVNode("div", { class: "product-section-content" }, [
                (openBlock(), createBlock(Fragment, null, renderList(products, (product) => {
                  return createVNode(_component_BaseProductCard, {
                    key: `product-${product.slug}`,
                    title: product.name,
                    price: product.price,
                    image: product.image,
                    slug: product.slug,
                    discount: product.discount
                  }, null, 8, ["title", "price", "image", "slug", "discount"]);
                }), 64))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              color: "white",
              class: "font-normal px-28",
              to: "/login"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Login untuk Lihat Lainnya `);
                } else {
                  return [
                    createTextVNode(" Login untuk Lihat Lainnya ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                color: "white",
                class: "font-normal px-28",
                to: "/login"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Login untuk Lihat Lainnya ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4bb0f3a8"]]);

export { index as default };
//# sourceMappingURL=index-C0cv6oT1.mjs.map
