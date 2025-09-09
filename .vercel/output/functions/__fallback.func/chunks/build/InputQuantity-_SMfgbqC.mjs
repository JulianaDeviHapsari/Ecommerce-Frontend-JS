import { _ as _export_sfc, b as __nuxt_component_5 } from './server.mjs';
import { _ as __nuxt_component_3 } from './Input-BSkwWT7v.mjs';
import { mergeModels, useModel, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = {
  __name: "InputQuantity",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    min: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: 10
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }, {
    "modelValue": {
      default: 1,
      type: Number
    },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const model = useModel(__props, "modelValue");
    function handleDecrease() {
      if (props.disabled) return;
      if (model.value > props.min) {
        model.value--;
      }
    }
    function handleIncrease() {
      if (props.disabled) return;
      if (model.value < props.max) {
        model.value++;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_5;
      const _component_UInput = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "input-quantity" }, _attrs))} data-v-4d188ab2>`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "white",
        icon: "i-heroicons:minus",
        variant: "none",
        disabled: __props.disabled,
        onClick: handleDecrease
      }, null, _parent));
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        type: "number",
        padded: false,
        variant: "none",
        disabled: __props.disabled
      }, null, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        color: "white",
        icon: "i-heroicons:plus",
        variant: "none",
        disabled: __props.disabled,
        onClick: handleIncrease
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/InputQuantity.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4d188ab2"]]);

export { __nuxt_component_8 as _ };
//# sourceMappingURL=InputQuantity-_SMfgbqC.mjs.map
