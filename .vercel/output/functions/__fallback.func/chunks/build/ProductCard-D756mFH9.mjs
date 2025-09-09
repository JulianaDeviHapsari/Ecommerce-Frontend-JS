import { _ as _export_sfc, a as __nuxt_component_0$5 } from './server.mjs';
import { _ as _sfc_main$1 } from './NuxtImg-DLumQ5km.mjs';
import { computed, mergeProps, withCtx, unref, createBlock, createCommentVNode, createVNode, openBlock, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { f as formatNumber } from './number.utils-vPnlR88w.mjs';

const _sfc_main = {
  __name: "ProductCard",
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
    price: {
      type: Number,
      default: 0
    },
    sale: {
      type: Number,
      default: void 0
    },
    discount: {
      type: Number,
      default: void 0
    },
    slug: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const formattedPrice = computed(() => formatNumber(props.price));
    const formattedSale = computed(() => formatNumber(props.sale));
    const formattedDiscount = computed(() => formatNumber(props.discount));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_NuxtImg = _sfc_main$1;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        class: "product-card",
        to: `/products/${__props.slug}`
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.discount) {
              _push2(`<div class="product-discount" data-v-5aec81d5${_scopeId}> -${ssrInterpolate(unref(formattedDiscount))}% </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: __props.image,
              format: "webp"
            }, null, _parent2, _scopeId));
            _push2(`<div class="product-card-detail" data-v-5aec81d5${_scopeId}><p data-v-5aec81d5${_scopeId}>${ssrInterpolate(__props.title)}</p><div class="product-card-footer" data-v-5aec81d5${_scopeId}><div class="product-price" data-v-5aec81d5${_scopeId}><p data-v-5aec81d5${_scopeId}><span data-v-5aec81d5${_scopeId}>Rp</span>${ssrInterpolate(unref(formattedPrice))}</p></div>`);
            if (__props.sale !== void 0) {
              _push2(`<div class="product-sale" data-v-5aec81d5${_scopeId}><p data-v-5aec81d5${_scopeId}>${ssrInterpolate(unref(formattedSale))} Terjual</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              __props.discount ? (openBlock(), createBlock("div", {
                key: 0,
                class: "product-discount"
              }, " -" + toDisplayString(unref(formattedDiscount)) + "% ", 1)) : createCommentVNode("", true),
              createVNode(_component_NuxtImg, {
                src: __props.image,
                format: "webp"
              }, null, 8, ["src"]),
              createVNode("div", { class: "product-card-detail" }, [
                createVNode("p", null, toDisplayString(__props.title), 1),
                createVNode("div", { class: "product-card-footer" }, [
                  createVNode("div", { class: "product-price" }, [
                    createVNode("p", null, [
                      createVNode("span", null, "Rp"),
                      createTextVNode(toDisplayString(unref(formattedPrice)), 1)
                    ])
                  ]),
                  __props.sale !== void 0 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "product-sale"
                  }, [
                    createVNode("p", null, toDisplayString(unref(formattedSale)) + " Terjual", 1)
                  ])) : createCommentVNode("", true)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/ProductCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5aec81d5"]]);

export { __nuxt_component_7 as _ };
//# sourceMappingURL=ProductCard-D756mFH9.mjs.map
