import { _ as __nuxt_component_0 } from './Tabs-DKAzzVlP.mjs';
import { mergeModels, useModel, computed, mergeProps, unref, withCtx, renderSlot, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { n as defu } from '../_/nitro.mjs';

const _sfc_main = {
  __name: "Tabs",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    items: {
      type: Array,
      default: () => []
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  }, {
    "modelValue": {
      type: Number,
      default: 0
    },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const tabActive = useModel(__props, "modelValue");
    const props = __props;
    const defaultUi = {
      list: {
        background: "bg-white border-b",
        padding: "p-0",
        rounded: "rounded-none",
        marker: {
          wrapper: "!top-[0px] left-0 !h-[100%] border-b-2 border-primary",
          rounded: "rounded-none",
          shadow: "shadow-none"
        },
        tab: {
          active: "text-primary",
          inactive: "text-black/80",
          rounded: "rounded-none"
        }
      }
    };
    const customUi = computed(() => defu(props.ui, defaultUi));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UTabs = __nuxt_component_0;
      _push(ssrRenderComponent(_component_UTabs, mergeProps({
        modelValue: tabActive.value,
        "onUpdate:modelValue": ($event) => tabActive.value = $event,
        items: __props.items,
        ui: unref(customUi)
      }, _attrs), {
        item: withCtx((slotScope, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "item", slotScope, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "item", slotScope)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Tabs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Tabs-B1IJpfws.mjs.map
