import { f as __nuxt_component_3 } from './server.mjs';
import { mergeModels, useModel, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = {
  __name: "Rating",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    disabled: {
      type: Boolean,
      default: false
    },
    maxStars: {
      type: Number,
      default: 5
    },
    size: {
      type: String,
      default: "sm",
      validator: (value) => ["sm", "lg"].includes(value)
    },
    color: {
      type: String,
      default: "primary",
      validator: (value) => ["primary", "yellow"].includes(value)
    }
  }, {
    "modelValue": {
      type: Number
    },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const sizeClass = {
      sm: "h-4 w-4",
      lg: "h-5 w-5"
    };
    const hoverColor = {
      primary: "peer-hover:text-primary hover:text-primary",
      yellow: "peer-hover:text-yellow-400 hover:text-yellow-400"
    };
    const activeColor = {
      primary: "text-primary",
      yellow: "text-yellow-400"
    };
    const modelValue = useModel(__props, "modelValue");
    const starsLength = computed(
      () => Array.from({ length: props.maxStars }, (_, i) => i + 1).reverse()
    );
    function onChange(value) {
      if (!props.disabled) {
        modelValue.value = value;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["flex flex-row-reverse items-center justify-end -ml-[2px]", { "cursor-pointer": !__props.disabled }]
      }, _attrs))}><!--[-->`);
      ssrRenderList(unref(starsLength), (star) => {
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-heroicons-star-solid",
          class: ["peer transition-all duration-150", [
            { [hoverColor[__props.color]]: !__props.disabled },
            modelValue.value && star <= modelValue.value ? activeColor[__props.color] : "text-gray-200",
            sizeClass[__props.size]
          ]],
          onClick: ($event) => onChange(star)
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Rating.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Rating-CzUxWdt7.mjs.map
