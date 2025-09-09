import { b as buildAssetsURL } from '../_/nitro.mjs';
import { _ as __nuxt_component_1 } from './Container-D6NRf-p3.mjs';
import { _ as _export_sfc, E as __nuxt_component_2$1, f as __nuxt_component_3 } from './server.mjs';
import { _ as __nuxt_component_2 } from './Shop-B22w5_LP.mjs';
import { ref, unref, mergeProps, withCtx, createVNode, isRef, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { _ as __nuxt_component_5 } from './Card-DbWg7JF8.mjs';
import { _ as __nuxt_component_6 } from './Carousel-C-hLT9s5.mjs';
import { _ as __nuxt_component_7 } from './ProductCard-D756mFH9.mjs';
import { _ as _sfc_main$2 } from './Pagination-Xmx5_6mI.mjs';
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
import 'tailwind-merge';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './Carousel-BL-Tk4PX.mjs';
import './NuxtImg-DLumQ5km.mjs';
import './number.utils-vPnlR88w.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "15",
    height: "16",
    viewBox: "0 0 15 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M6.8 9.00039C8.89868 9.00039 10.6 7.29907 10.6 5.20039C10.6 3.10171 8.89868 1.40039 6.8 1.40039C4.70132 1.40039 3 3.10171 3 5.20039C3 7.29907 4.70132 9.00039 6.8 9.00039Z" stroke="black" stroke-miterlimit="10"></path><path d="M9.19922 13.5L11.1992 15.5L14.1992 12" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M0.800781 15C0.800781 11.7 3.50078 9 6.80078 9C8.90078 9 10.7008 10 11.8008 11.6" stroke="black" stroke-miterlimit="10" stroke-linecap="round"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon/UserCheck.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const BgShop = "" + buildAssetsURL("bg-shop.DGM-06f_.png");
const _sfc_main = {
  __name: "[username]",
  __ssrInlineRender: true,
  setup(__props) {
    const background = ref(`url('${BgShop}')`);
    const page = ref(1);
    const products = ref(Array(55));
    const items = [
      "https://picsum.photos/1920/1080?random=1",
      "https://picsum.photos/1920/1080?random=2",
      "https://picsum.photos/1920/1080?random=3",
      "https://picsum.photos/1920/1080?random=4",
      "https://picsum.photos/1920/1080?random=5",
      "https://picsum.photos/1920/1080?random=6"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = __nuxt_component_1;
      const _component_UAvatar = __nuxt_component_2$1;
      const _component_IconShop = __nuxt_component_2;
      const _component_UIcon = __nuxt_component_3;
      const _component_IconUserCheck = __nuxt_component_4;
      const _component_UCard = __nuxt_component_5;
      const _component_BaseCarousel = __nuxt_component_6;
      const _component_BaseProductCard = __nuxt_component_7;
      const _component_BasePagination = _sfc_main$2;
      const _cssVars = { style: {
        ":--5b91f7bc": unref(background)
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-sm text-black/80" }, _attrs, _cssVars))} data-v-85730f9b><div class="bg-white" data-v-85730f9b>`);
      _push(ssrRenderComponent(_component_UContainer, { class: "py-5 flex gap-6 items-start" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="backdrop-seller" data-v-85730f9b${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UAvatar, {
              size: "3xl",
              alt: "Fuku Studio",
              "img-class": "object-cover"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-xl text-white font-medium" data-v-85730f9b${_scopeId}>Fuku Studio</span></div><div class="grid grid-cols-2 py-4 gap-4 flex-1" data-v-85730f9b${_scopeId}><div class="flex gap-2 items-center" data-v-85730f9b${_scopeId}>`);
            _push2(ssrRenderComponent(_component_IconShop, null, null, _parent2, _scopeId));
            _push2(`<span data-v-85730f9b${_scopeId}>Produk:</span><span class="text-primary" data-v-85730f9b${_scopeId}>23</span></div><div class="flex gap-2 items-center" data-v-85730f9b${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, { name: "i-heroicons:star" }, null, _parent2, _scopeId));
            _push2(`<span data-v-85730f9b${_scopeId}>Penilaian:</span><span class="text-primary" data-v-85730f9b${_scopeId}>4.9 (659 penilaian)</span></div><div class="flex gap-2 items-center" data-v-85730f9b${_scopeId}>`);
            _push2(ssrRenderComponent(_component_IconUserCheck, null, null, _parent2, _scopeId));
            _push2(`<span data-v-85730f9b${_scopeId}>Bergabung:</span><span class="text-primary" data-v-85730f9b${_scopeId}>4 tahun lalu</span></div></div>`);
          } else {
            return [
              createVNode("div", { class: "backdrop-seller" }, [
                createVNode(_component_UAvatar, {
                  size: "3xl",
                  alt: "Fuku Studio",
                  "img-class": "object-cover"
                }),
                createVNode("span", { class: "text-xl text-white font-medium" }, "Fuku Studio")
              ]),
              createVNode("div", { class: "grid grid-cols-2 py-4 gap-4 flex-1" }, [
                createVNode("div", { class: "flex gap-2 items-center" }, [
                  createVNode(_component_IconShop),
                  createVNode("span", null, "Produk:"),
                  createVNode("span", { class: "text-primary" }, "23")
                ]),
                createVNode("div", { class: "flex gap-2 items-center" }, [
                  createVNode(_component_UIcon, { name: "i-heroicons:star" }),
                  createVNode("span", null, "Penilaian:"),
                  createVNode("span", { class: "text-primary" }, "4.9 (659 penilaian)")
                ]),
                createVNode("div", { class: "flex gap-2 items-center" }, [
                  createVNode(_component_IconUserCheck),
                  createVNode("span", null, "Bergabung:"),
                  createVNode("span", { class: "text-primary" }, "4 tahun lalu")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UContainer, { class: "py-8 space-y-8" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="uppercase font-medium text-base" data-v-85730f9b${_scopeId2}>Tentang Toko</p><div class="grid grid-cols-2 gap-4 mt-2" data-v-85730f9b${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseCarousel, {
                    items,
                    "aspect-ratio": "16/9"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="flex gap-6 justify-center flex-col" data-v-85730f9b${_scopeId2}><p class="text-center" data-v-85730f9b${_scopeId2}>FAQ about Packing &amp; Orders :</p><p class="text-center" data-v-85730f9b${_scopeId2}> Order akan di proses di hari Senin-Sabtu | Jam 10:00 - 16:00. Jam di luar operasional akan di hitung besok. Orderan hari sabtu, yang melewati jam packing, akan di kirim hari Senin. </p></div></div>`);
                } else {
                  return [
                    createVNode("p", { class: "uppercase font-medium text-base" }, "Tentang Toko"),
                    createVNode("div", { class: "grid grid-cols-2 gap-4 mt-2" }, [
                      createVNode(_component_BaseCarousel, {
                        items,
                        "aspect-ratio": "16/9"
                      }),
                      createVNode("div", { class: "flex gap-6 justify-center flex-col" }, [
                        createVNode("p", { class: "text-center" }, "FAQ about Packing & Orders :"),
                        createVNode("p", { class: "text-center" }, " Order akan di proses di hari Senin-Sabtu | Jam 10:00 - 16:00. Jam di luar operasional akan di hitung besok. Orderan hari sabtu, yang melewati jam packing, akan di kirim hari Senin. ")
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="grid grid-cols-6 gap-5" data-v-85730f9b${_scopeId}><!--[-->`);
            ssrRenderList(12, (i) => {
              _push2(ssrRenderComponent(_component_BaseProductCard, {
                key: `product-${i}`,
                title: "Kawabata Sepatu Sandal Kasual Slingback Mules",
                price: 1e4,
                image: "https://picsum.photos/1920/1080?random=1",
                slug: `product-${i}`,
                discount: 100
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div><div class="flex justify-center mt-8" data-v-85730f9b${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BasePagination, {
              modelValue: unref(page),
              "onUpdate:modelValue": ($event) => isRef(page) ? page.value = $event : null,
              total: unref(products).length
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_UCard, null, {
                default: withCtx(() => [
                  createVNode("p", { class: "uppercase font-medium text-base" }, "Tentang Toko"),
                  createVNode("div", { class: "grid grid-cols-2 gap-4 mt-2" }, [
                    createVNode(_component_BaseCarousel, {
                      items,
                      "aspect-ratio": "16/9"
                    }),
                    createVNode("div", { class: "flex gap-6 justify-center flex-col" }, [
                      createVNode("p", { class: "text-center" }, "FAQ about Packing & Orders :"),
                      createVNode("p", { class: "text-center" }, " Order akan di proses di hari Senin-Sabtu | Jam 10:00 - 16:00. Jam di luar operasional akan di hitung besok. Orderan hari sabtu, yang melewati jam packing, akan di kirim hari Senin. ")
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode("div", { class: "grid grid-cols-6 gap-5" }, [
                (openBlock(), createBlock(Fragment, null, renderList(12, (i) => {
                  return createVNode(_component_BaseProductCard, {
                    key: `product-${i}`,
                    title: "Kawabata Sepatu Sandal Kasual Slingback Mules",
                    price: 1e4,
                    image: "https://picsum.photos/1920/1080?random=1",
                    slug: `product-${i}`,
                    discount: 100
                  }, null, 8, ["slug"]);
                }), 64))
              ]),
              createVNode("div", { class: "flex justify-center mt-8" }, [
                createVNode(_component_BasePagination, {
                  modelValue: unref(page),
                  "onUpdate:modelValue": ($event) => isRef(page) ? page.value = $event : null,
                  total: unref(products).length
                }, null, 8, ["modelValue", "onUpdate:modelValue", "total"])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shop/[username].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _username_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-85730f9b"]]);

export { _username_ as default };
//# sourceMappingURL=_username_-WT65hYb6.mjs.map
