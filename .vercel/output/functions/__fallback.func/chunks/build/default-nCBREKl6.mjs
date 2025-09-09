import { _ as __nuxt_component_1, a as __nuxt_component_0$1, b as _sfc_main$2$1, c as __nuxt_component_3 } from './Footer-Dh-9dN_S.mjs';
import { _ as __nuxt_component_1$1 } from './Container-D6NRf-p3.mjs';
import { mergeProps, computed, unref, withCtx, createVNode, createBlock, createCommentVNode, openBlock, defineComponent, toRef, useSSRContext } from 'vue';
import { twJoin } from 'tailwind-merge';
import { _ as _export_sfc, x as useRoute, b as __nuxt_component_5, m as mergeConfig, g as useUI, h as appConfig } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { u as useApi } from './use-api-DLZ2CTc2.mjs';
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
import './Dropdown-RsBnL6Tj.mjs';
import './keyboard-Duq8EHr3.mjs';
import './use-outside-click-BHqYmLlt.mjs';
import './focus-management-vHH7q6nP.mjs';
import './use-resolve-button-type-DOOP2SMg.mjs';
import './use-text-value-CKO20D-4.mjs';
import './open-closed-CJlEqXqx.mjs';
import './usePopper-BrvKSG9Z.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';

const chip = {
  wrapper: "relative inline-flex items-center justify-center flex-shrink-0",
  base: "absolute rounded-full ring-1 ring-white dark:ring-gray-900 flex items-center justify-center text-white dark:text-gray-900 font-medium whitespace-nowrap",
  background: "bg-{color}-500 dark:bg-{color}-400",
  position: {
    "top-right": "top-0 right-0",
    "bottom-right": "bottom-0 right-0",
    "top-left": "top-0 left-0",
    "bottom-left": "bottom-0 left-0"
  },
  translate: {
    "top-right": "-translate-y-1/2 translate-x-1/2 transform",
    "bottom-right": "translate-y-1/2 translate-x-1/2 transform",
    "top-left": "-translate-y-1/2 -translate-x-1/2 transform",
    "bottom-left": "translate-y-1/2 -translate-x-1/2 transform"
  },
  size: {
    "3xs": "h-[4px] min-w-[4px] text-[4px] p-px",
    "2xs": "h-[5px] min-w-[5px] text-[5px] p-px",
    "xs": "h-1.5 min-w-[0.375rem] text-[6px] p-px",
    "sm": "h-2 min-w-[0.5rem] text-[7px] p-0.5",
    "md": "h-2.5 min-w-[0.625rem] text-[8px] p-0.5",
    "lg": "h-3 min-w-[0.75rem] text-[10px] p-0.5",
    "xl": "h-3.5 min-w-[0.875rem] text-[11px] p-1",
    "2xl": "h-4 min-w-[1rem] text-[12px] p-1",
    "3xl": "h-5 min-w-[1.25rem] text-[14px] p-1"
  },
  default: {
    size: "sm",
    color: "primary",
    position: "top-right",
    inset: false
  }
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.chip, chip);
const _sfc_main$3 = defineComponent({
  inheritAttrs: false,
  props: {
    size: {
      type: String,
      default: () => config.default.size,
      validator(value) {
        return Object.keys(config.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config.default.color,
      validator(value) {
        return ["gray", ...appConfig.ui.colors].includes(value);
      }
    },
    position: {
      type: String,
      default: () => config.default.position,
      validator(value) {
        return Object.keys(config.position).includes(value);
      }
    },
    text: {
      type: [String, Number],
      default: null
    },
    inset: {
      type: Boolean,
      default: () => config.default.inset
    },
    show: {
      type: Boolean,
      default: true
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("chip", toRef(props, "ui"), config, toRef(props, "class"));
    const chipClass = computed(() => {
      return twJoin(
        ui.value.base,
        ui.value.size[props.size],
        ui.value.position[props.position],
        props.inset ? null : ui.value.translate[props.position],
        ui.value.background.replaceAll("{color}", props.color)
      );
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      chipClass
    };
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _ctx.attrs, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  if (_ctx.show) {
    _push(`<span class="${ssrRenderClass(_ctx.chipClass)}">`);
    ssrRenderSlot(_ctx.$slots, "content", {}, () => {
      _push(`${ssrInterpolate(_ctx.text)}`);
    }, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Chip.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "26",
    height: "27",
    viewBox: "0 0 26 27",
    fill: "none"
  }, _attrs))}><path d="M1.94922 2.65039H5.37027L9.37779 18.876H20.7161L24.0394 6.95114H6.83644" stroke="white" stroke-width="2.44361" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.4531 25.6211C11.6407 25.6211 12.6035 24.6583 12.6035 23.4707C12.6035 22.2831 11.6407 21.3203 10.4531 21.3203C9.26549 21.3203 8.30273 22.2831 8.30273 23.4707C8.30273 24.6583 9.26549 25.6211 10.4531 25.6211Z" fill="white"></path><path d="M19.25 25.6211C20.4376 25.6211 21.4004 24.6583 21.4004 23.4707C21.4004 22.2831 20.4376 21.3203 19.25 21.3203C18.0624 21.3203 17.0996 22.2831 17.0996 23.4707C17.0996 24.6583 18.0624 25.6211 19.25 25.6211Z" fill="white"></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon/Cart.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {
  __name: "HeaderOrange",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const defaultMeta = computed(() => {
      var _a, _b, _c;
      return {
        showProfile: ((_a = route.meta) == null ? void 0 : _a.header) && "showProfile" in route.meta.header ? route.meta.header.showProfile : true,
        showSearch: ((_b = route.meta) == null ? void 0 : _b.header) && "showSearch" in route.meta.header ? route.meta.header.showSearch : true,
        showCart: ((_c = route.meta) == null ? void 0 : _c.header) && "showCart" in route.meta.header ? route.meta.header.showCart : true
      };
    });
    const { data } = useApi(`/server/api/cart`, {
      server: false,
      key: "cart"
    });
    const countCart = computed(
      () => {
        var _a, _b, _c;
        return (_c = (_b = (_a = data.value) == null ? void 0 : _a.data) == null ? void 0 : _b.items) == null ? void 0 : _c.reduce((result, current) => {
          result += current.qty;
          return result;
        }, 0);
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutsHeaderProfile = __nuxt_component_0$1;
      const _component_UContainer = __nuxt_component_1$1;
      const _component_BaseLogo = _sfc_main$2$1;
      const _component_LayoutsSearchBar = __nuxt_component_3;
      const _component_UChip = __nuxt_component_4;
      const _component_UButton = __nuxt_component_5;
      const _component_IconCart = __nuxt_component_6;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "header-orange" }, _attrs))} data-v-45e556f0>`);
      if (unref(defaultMeta).showProfile) {
        _push(ssrRenderComponent(_component_LayoutsHeaderProfile, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="header-bottom" data-v-45e556f0>`);
      _push(ssrRenderComponent(_component_UContainer, { class: "header-bottom-container" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseLogo, null, null, _parent2, _scopeId));
            if (unref(defaultMeta).showSearch) {
              _push2(ssrRenderComponent(_component_LayoutsSearchBar, { class: "flex-1" }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(defaultMeta).showCart) {
              _push2(ssrRenderComponent(_component_UChip, {
                text: unref(countCart),
                size: "2xl",
                show: unref(countCart) > 0
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UButton, {
                      variant: "link",
                      to: "/cart"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_IconCart, null, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_IconCart)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UButton, {
                        variant: "link",
                        to: "/cart"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_IconCart)
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_BaseLogo),
              unref(defaultMeta).showSearch ? (openBlock(), createBlock(_component_LayoutsSearchBar, {
                key: 0,
                class: "flex-1"
              })) : createCommentVNode("", true),
              unref(defaultMeta).showCart ? (openBlock(), createBlock(_component_UChip, {
                key: 1,
                text: unref(countCart),
                size: "2xl",
                show: unref(countCart) > 0
              }, {
                default: withCtx(() => [
                  createVNode(_component_UButton, {
                    variant: "link",
                    to: "/cart"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_IconCart)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["text", "show"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></header>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/HeaderOrange.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-45e556f0"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LayoutsHeaderOrange = __nuxt_component_0;
  const _component_LayoutsFooter = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "default-layout" }, _attrs))} data-v-d8c3ce68>`);
  _push(ssrRenderComponent(_component_LayoutsHeaderOrange, null, null, _parent));
  _push(`<main class="main-layout" data-v-d8c3ce68>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_LayoutsFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d8c3ce68"]]);

export { _default as default };
//# sourceMappingURL=default-nCBREKl6.mjs.map
