import { mergeModels, useModel, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = {
  __name: "RadioCard",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    items: {
      type: Array,
      default: () => [],
      validator: (value) => {
        if (!Array.isArray(value)) return false;
        return "label" in value[0] && "value" in value[0];
      }
    }
  }, {
    "modelValue": {
      type: String,
      default: ""
    },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    function handleSelect(value) {
      model.value = value;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 gap-1" }, _attrs))}><!--[-->`);
      ssrRenderList(__props.items, (item, index) => {
        ssrRenderSlot(_ctx.$slots, "item", mergeProps({
          key: `radio-card-item-${item.value}-${index}`,
          selected: JSON.stringify(item.value) === JSON.stringify(model.value)
        }, { ref_for: true }, item, {
          onClick: ($event) => handleSelect(item.value)
        }), null, _push, _parent);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/RadioCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=RadioCard-DuYIHzbi.mjs.map
