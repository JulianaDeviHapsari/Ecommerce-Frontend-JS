import { b as __nuxt_component_5 } from './server.mjs';
import { _ as __nuxt_component_3 } from './Input-BSkwWT7v.mjs';
import { ref, unref, withCtx, createTextVNode, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useApi } from './use-api-DLZ2CTc2.mjs';
import { u as useSubmit } from './use-submit-TWB9IMR2.mjs';
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
import 'tailwind-merge';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './useFormGroup-B6xiYqr7.mjs';

const _sfc_main = {
  __name: "data-fetching",
  __ssrInlineRender: true,
  setup(__props) {
    const productName = ref("");
    const { data, status, execute, refresh } = useApi(
      "https://dummyjson.com/products"
    );
    const { execute: addProduct, status: statusAdd } = useSubmit("https://dummyjson.com/products/add");
    function handleAddProduct() {
      const newData = {
        title: productName.value
      };
      addProduct(newData);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_5;
      const _component_UInput = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}><h3>Learning: Data Fetching</h3><div class="grid grid-cols-2"><div>`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "white",
        onClick: unref(execute)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`GET DATA`);
          } else {
            return [
              createTextVNode("GET DATA")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, { onClick: unref(refresh) }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Refresh DATA`);
          } else {
            return [
              createTextVNode("Refresh DATA")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(status) === "pending") {
        _push(`<p>Loading...</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<pre>${ssrInterpolate(unref(data))}</pre></div><div>`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: unref(productName),
        "onUpdate:modelValue": ($event) => isRef(productName) ? productName.value = $event : null
      }, null, _parent));
      _push(ssrRenderComponent(_component_UButton, { onClick: handleAddProduct }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Add`);
          } else {
            return [
              createTextVNode("Add")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p>${ssrInterpolate(unref(statusAdd))}</p></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/learning/data-fetching.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=data-fetching-B9R4gfWO.mjs.map
