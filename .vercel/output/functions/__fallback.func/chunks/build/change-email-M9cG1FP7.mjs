import { _ as __nuxt_component_0 } from './FormGroup-DpovdzGZ.mjs';
import { _ as __nuxt_component_3 } from './Input-BSkwWT7v.mjs';
import { c as useSession, e as useRouter, b as __nuxt_component_5 } from './server.mjs';
import { ref, unref, withCtx, createVNode, createBlock, createCommentVNode, openBlock, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import useVuelidate from '@vuelidate/core';
import { email, required } from '@vuelidate/validators';
import { u as useSubmit } from './use-submit-TWB9IMR2.mjs';
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
import './use-api-DLZ2CTc2.mjs';

const _sfc_main = {
  __name: "change-email",
  __ssrInlineRender: true,
  setup(__props) {
    useSession();
    useRouter();
    const form = ref({
      email: ""
    });
    const rules = {
      email: { required, email }
    };
    const $externalResults = ref({});
    const v$ = useVuelidate(rules, form, {
      $autoDirty: true,
      $externalResults
    });
    const { status } = useSubmit("/server/api/profile");
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_UFormGroup = __nuxt_component_0;
      const _component_UInput = __nuxt_component_3;
      const _component_UButton = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(_attrs)}><h3 class="text-xl font-medium">Ganti Email</h3><hr class="mt-5 mb-11 border-gray-200/60"><form>`);
      _push(ssrRenderComponent(_component_UFormGroup, {
        label: "Email Baru",
        ui: {
          wrapper: "flex gap-16",
          container: "w-96",
          label: {
            wrapper: "pt-2",
            base: "font-normal text-black/55 text-base"
          }
        },
        error: !!((_b = (_a = unref(v$).email.$errors) == null ? void 0 : _a[0]) == null ? void 0 : _b.$message)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c, _d;
          if (_push2) {
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              size: "lg",
              placeholder: "Masukkan Email-mu"
            }, null, _parent2, _scopeId));
            if (unref(v$).$invalid) {
              _push2(`<p class="text-sm text-red-500 mt-1"${_scopeId}>${ssrInterpolate((_b2 = (_a2 = unref(v$).email.$errors) == null ? void 0 : _a2[0]) == null ? void 0 : _b2.$message)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_UButton, {
              type: "submit",
              label: "Selanjutnya",
              class: "mt-8",
              loading: unref(status) === "pending",
              disabled: unref(v$).$invalid
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UInput, {
                modelValue: unref(form).email,
                "onUpdate:modelValue": ($event) => unref(form).email = $event,
                size: "lg",
                placeholder: "Masukkan Email-mu"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              unref(v$).$invalid ? (openBlock(), createBlock("p", {
                key: 0,
                class: "text-sm text-red-500 mt-1"
              }, toDisplayString((_d = (_c = unref(v$).email.$errors) == null ? void 0 : _c[0]) == null ? void 0 : _d.$message), 1)) : createCommentVNode("", true),
              createVNode(_component_UButton, {
                type: "submit",
                label: "Selanjutnya",
                class: "mt-8",
                loading: unref(status) === "pending",
                disabled: unref(v$).$invalid
              }, null, 8, ["loading", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/my-account/profile/change-email.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=change-email-M9cG1FP7.mjs.map
