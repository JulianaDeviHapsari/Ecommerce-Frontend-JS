import { _ as __nuxt_component_3 } from './Input-BSkwWT7v.mjs';
import { b as __nuxt_component_5 } from './server.mjs';
import { useModel, ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = {
  __name: "InputPassword",
  __ssrInlineRender: true,
  props: {
    "modelValue": {
      type: String
    },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    const showPassword = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UInput = __nuxt_component_3;
      const _component_UButton = __nuxt_component_5;
      _push(ssrRenderComponent(_component_UInput, mergeProps({
        modelValue: model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        placeholder: "Password",
        size: "lg",
        type: unref(showPassword) ? "text" : "password",
        ui: { icon: { trailing: { pointer: "" } } }
      }, _attrs), {
        trailing: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              icon: unref(showPassword) ? "i-heroicons:eye" : "i-heroicons:eye-slash",
              variant: "link",
              color: "white",
              onClick: ($event) => showPassword.value = !unref(showPassword)
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                icon: unref(showPassword) ? "i-heroicons:eye" : "i-heroicons:eye-slash",
                variant: "link",
                color: "white",
                onClick: ($event) => showPassword.value = !unref(showPassword)
              }, null, 8, ["icon", "onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/InputPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=InputPassword-DRf3y7Jp.mjs.map
