import { _ as __nuxt_component_0 } from './FormGroup-DpovdzGZ.mjs';
import { computed, mergeProps, unref, createSlots, renderList, withCtx, renderSlot, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { n as defu } from '../_/nitro.mjs';

const _sfc_main = {
  __name: "FormGroup",
  __ssrInlineRender: true,
  props: {
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const defaultUi = {
      wrapper: "flex items-start gap-4",
      container: "flex-1",
      label: {
        wrapper: "pt-3",
        base: "font-normal text-black/80 text-sm w-36 text-right"
      },
      help: "text-black/55"
    };
    const customUi = computed(() => defu(props.ui, defaultUi));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UFormGroup = __nuxt_component_0;
      _push(ssrRenderComponent(_component_UFormGroup, mergeProps({ ui: unref(customUi) }, _attrs), createSlots({ _: 2 }, [
        renderList(_ctx.$slots, (_, slotName) => {
          return {
            name: slotName,
            fn: withCtx((slotScope, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderSlot(_ctx.$slots, slotName, slotScope, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  renderSlot(_ctx.$slots, slotName, slotScope)
                ];
              }
            })
          };
        })
      ]), _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/seller/FormGroup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=FormGroup-C5bCdBK6.mjs.map
