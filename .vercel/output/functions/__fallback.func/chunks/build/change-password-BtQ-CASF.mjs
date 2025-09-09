import { _ as __nuxt_component_0 } from './FormGroup-DpovdzGZ.mjs';
import { _ as _sfc_main$1 } from './InputPassword-DRf3y7Jp.mjs';
import { _ as _export_sfc, b as __nuxt_component_5 } from './server.mjs';
import { withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './Input-BSkwWT7v.mjs';
import 'tailwind-merge';
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
import './useFormGroup-B6xiYqr7.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_UFormGroup = __nuxt_component_0;
  const _component_BaseInputPassword = _sfc_main$1;
  const _component_UButton = __nuxt_component_5;
  _push(`<div${ssrRenderAttrs(_attrs)}><h3 class="font-medium text-lg">Atur Password</h3><p class="text-sm text-black/65"> Untuk keamanan akun Anda, mohon untuk tidak menyebarkan password Anda ke orang lain. </p><hr class="mt-5 mb-11 border-gray-200/60"><form class="space-y-3">`);
  _push(ssrRenderComponent(_component_UFormGroup, {
    label: "Password Baru",
    ui: {
      wrapper: "flex gap-5",
      container: "w-96",
      label: {
        wrapper: "pt-2",
        base: "font-normal text-black/55 text-base text-right w-40"
      }
    }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BaseInputPassword, { size: "lg" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BaseInputPassword, { size: "lg" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_UFormGroup, {
    label: "Konfirmasi Password",
    ui: {
      wrapper: "flex gap-5",
      container: "w-96",
      label: {
        wrapper: "pt-2",
        base: "font-normal text-black/55 text-base text-right w-40"
      }
    }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BaseInputPassword, { size: "lg" }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_UButton, {
          label: "Konfirmasi",
          class: "mt-8"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BaseInputPassword, { size: "lg" }),
          createVNode(_component_UButton, {
            label: "Konfirmasi",
            class: "mt-8"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</form></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/my-account/change-password.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const changePassword = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { changePassword as default };
//# sourceMappingURL=change-password-BtQ-CASF.mjs.map
