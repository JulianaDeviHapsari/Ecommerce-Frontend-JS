import { _ as __nuxt_component_5 } from './Loading-DEfyuitU.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_IconLoading = __nuxt_component_5;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-2 justify-center py-6" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_IconLoading, { class: "w-6 text-primary" }, null, _parent));
  _push(`<p>Loading...</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Loading.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=Loading-ylJ4hnGQ.mjs.map
