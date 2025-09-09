import { _ as __nuxt_component_1, a as __nuxt_component_0$1, b as _sfc_main$2, c as __nuxt_component_3 } from './Footer-Dh-9dN_S.mjs';
import { _ as __nuxt_component_1$1 } from './Container-D6NRf-p3.mjs';
import { mergeProps, unref, withCtx, createVNode, createBlock, createCommentVNode, openBlock, Fragment, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc, x as useRoute } from './server.mjs';
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
import 'tailwind-merge';
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

const _sfc_main$1 = {
  __name: "HeaderWhite",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_LayoutsHeaderProfile = __nuxt_component_0$1;
      const _component_UContainer = __nuxt_component_1$1;
      const _component_BaseLogo = _sfc_main$2;
      const _component_LayoutsSearchBar = __nuxt_component_3;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: ["header-white", (_b = (_a = unref(route).meta) == null ? void 0 : _a.header) == null ? void 0 : _b.class]
      }, _attrs))} data-v-149cff38>`);
      if ((_d = (_c = unref(route).meta) == null ? void 0 : _c.header) == null ? void 0 : _d.showProfile) {
        _push(ssrRenderComponent(_component_LayoutsHeaderProfile, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="header-bottom" data-v-149cff38>`);
      _push(ssrRenderComponent(_component_UContainer, { class: "header-bottom-container" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c2, _d2, _e, _f;
          if (_push2) {
            _push2(`<div class="flex gap-4 items-center" data-v-149cff38${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseLogo, { color: "orange" }, null, _parent2, _scopeId));
            if ((_a2 = unref(route).meta.header) == null ? void 0 : _a2.title) {
              _push2(`<!--[--><hr class="w-[1px] h-5 bg-primary" data-v-149cff38${_scopeId}><p class="text-xl" data-v-149cff38${_scopeId}>${ssrInterpolate(unref(route).meta.header.title)}</p><!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if ((_c2 = (_b2 = unref(route).meta) == null ? void 0 : _b2.header) == null ? void 0 : _c2.showSearch) {
              _push2(ssrRenderComponent(_component_LayoutsSearchBar, {
                class: "w-1/2",
                padded: false
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "flex gap-4 items-center" }, [
                createVNode(_component_BaseLogo, { color: "orange" }),
                ((_d2 = unref(route).meta.header) == null ? void 0 : _d2.title) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                  createVNode("hr", { class: "w-[1px] h-5 bg-primary" }),
                  createVNode("p", { class: "text-xl" }, toDisplayString(unref(route).meta.header.title), 1)
                ], 64)) : createCommentVNode("", true)
              ]),
              ((_f = (_e = unref(route).meta) == null ? void 0 : _e.header) == null ? void 0 : _f.showSearch) ? (openBlock(), createBlock(_component_LayoutsSearchBar, {
                key: 0,
                class: "w-1/2",
                padded: false
              })) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/HeaderWhite.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-149cff38"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LayoutsHeaderWhite = __nuxt_component_0;
  const _component_LayoutsFooter = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "auth-layout" }, _attrs))} data-v-871f8037>`);
  _push(ssrRenderComponent(_component_LayoutsHeaderWhite, null, null, _parent));
  _push(`<main class="main-layout" data-v-871f8037>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_LayoutsFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/auth.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const auth = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-871f8037"]]);

export { auth as default };
//# sourceMappingURL=auth-CpXbfX5y.mjs.map
