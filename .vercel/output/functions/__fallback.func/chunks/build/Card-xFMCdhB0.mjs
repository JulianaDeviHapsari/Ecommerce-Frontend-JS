import { _ as __nuxt_component_5 } from './Card-DbWg7JF8.mjs';
import { mergeProps, withCtx, renderSlot, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_5;
      _push(ssrRenderComponent(_component_UCard, mergeProps({ ui: {
        rounded: "rounded-sm",
        shadow: "shadow"
      } }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "header", {}, () => {
              _push2(`<div class="flex justify-between gap-4 items-center"${_scopeId}><h3 class="font-medium text-xl"${_scopeId}>${ssrInterpolate(__props.title)}</h3>`);
              ssrRenderSlot(_ctx.$slots, "header-append", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "header", {}, () => [
                createVNode("div", { class: "flex justify-between gap-4 items-center" }, [
                  createVNode("h3", { class: "font-medium text-xl" }, toDisplayString(__props.title), 1),
                  renderSlot(_ctx.$slots, "header-append")
                ])
              ]),
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/seller/Card.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Card-xFMCdhB0.mjs.map
