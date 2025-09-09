import { _ as __nuxt_component_0 } from './Popover-GjsAgxql.mjs';
import { _ as __nuxt_component_3 } from './Input-BSkwWT7v.mjs';
import { mergeModels, useModel, computed, mergeProps, withCtx, unref, createVNode, createBlock, openBlock, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { DatePicker } from 'v-calendar';
import { format } from 'date-fns';

const _sfc_main = {
  __name: "DatePicker",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    range: {
      type: Boolean,
      default: false
    }
  }, {
    "modelValue": {
      type: [Date, Object],
      default: null
    },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const date = useModel(__props, "modelValue");
    const showingDate = computed(() => {
      if (date.value) return format(date.value, "d/MM/yy");
      return "";
    });
    const attrs = {
      transparent: true,
      borderless: true,
      color: "primary",
      "is-dark": { selector: "html", darkClass: "dark" },
      "first-day-of-week": 2
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPopover = __nuxt_component_0;
      const _component_UInput = __nuxt_component_3;
      _push(ssrRenderComponent(_component_UPopover, mergeProps({ popper: { placement: "bottom-start" } }, _attrs), {
        panel: withCtx(({ close }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.range) {
              _push2(ssrRenderComponent(unref(DatePicker), mergeProps({
                modelValue: date.value,
                "onUpdate:modelValue": ($event) => date.value = $event,
                modelModifiers: { range: true },
                columns: 2
              }, { ...attrs, ..._ctx.$attrs }, { "onUpdate:modelValue": close }), null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(unref(DatePicker), mergeProps({
                modelValue: date.value,
                "onUpdate:modelValue": ($event) => date.value = $event
              }, { ...attrs, ..._ctx.$attrs }, { "onUpdate:modelValue": close }), null, _parent2, _scopeId));
            }
          } else {
            return [
              __props.range ? (openBlock(), createBlock(unref(DatePicker), mergeProps({
                key: 0,
                modelValue: date.value,
                "onUpdate:modelValue": ($event) => date.value = $event,
                modelModifiers: { range: true },
                columns: 2
              }, { ...attrs, ..._ctx.$attrs }, { "onUpdate:modelValue": close }), null, 16, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock(unref(DatePicker), mergeProps({
                key: 1,
                modelValue: date.value,
                "onUpdate:modelValue": ($event) => date.value = $event
              }, { ...attrs, ..._ctx.$attrs }, { "onUpdate:modelValue": close }), null, 16, ["modelValue", "onUpdate:modelValue"]))
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UInput, {
              "model-value": unref(showingDate),
              readonly: "",
              size: "lg",
              class: "w-full"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UInput, {
                "model-value": unref(showingDate),
                readonly: "",
                size: "lg",
                class: "w-full"
              }, null, 8, ["model-value"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/DatePicker.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=DatePicker-BR1hZif8.mjs.map
