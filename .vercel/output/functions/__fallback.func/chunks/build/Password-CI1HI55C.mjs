import { z as storeToRefs, c as useSession, b as __nuxt_component_5, f as __nuxt_component_3 } from './server.mjs';
import { _ as __nuxt_component_0 } from './FormGroup-DpovdzGZ.mjs';
import { ref, computed, unref, withCtx, mergeModels, isRef, createVNode, createTextVNode, reactive, watch, useModel, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { u as useMasking } from './use-masking-DZFcOT6B.mjs';
import { u as useCountdown } from './use-countdown-D549dIvo.mjs';
import { _ as _sfc_main$3 } from './InputPassword-DRf3y7Jp.mjs';
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';

const _sfc_main$2 = {
  __name: "InputPin",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    length: {
      type: Number,
      default: 6
    }
  }, {
    "modelValue": {
      type: String,
      default: () => []
    },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const model = useModel(__props, "modelValue", {
      get(value) {
        return value ? value.split("") : Array.from({ length: props.length }, () => "");
      },
      set(value) {
        if ("index" in value && "value" in value) {
          const duplicateArray = structuredClone(model.value);
          duplicateArray[value.index] = value.value;
          return duplicateArray.join("");
        }
        return value;
      }
    });
    ref();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-5 justify-center" }, _attrs))}><!--[-->`);
      ssrRenderList(__props.length, (i) => {
        _push(`<input${ssrRenderAttr("value", model.value[i - 1])} class="outline-none border-b bg-transparent w-9 text-center"${ssrRenderAttr("maxlength", 1)}>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/InputPin.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Otp",
  __ssrInlineRender: true,
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    loadingResend: {
      type: Boolean,
      default: false
    }
  },
  emits: ["next", "back", "resend"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const emit = __emit;
    const { registrationForm } = storeToRefs(useSession());
    const otpValue = ref("");
    const errorMessages = ref("");
    const { maskEmail } = useMasking();
    const showingEmail = computed(() => maskEmail(registrationForm.value.email));
    const { startCountdown, displayValue, isRunning } = useCountdown();
    startCountdown(30);
    function handleSubmit() {
      if (otpValue.value.length !== 6) {
        return;
      }
      emit("next", {
        otp: otpValue.value
      });
    }
    __expose({
      startCountdown: () => startCountdown(30),
      setError: (error) => {
        errorMessages.value = error;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_5;
      const _component_UFormGroup = __nuxt_component_0;
      const _component_BaseInputPin = _sfc_main$2;
      _push(`<!--[--><div class="flex gap-7 items-center">`);
      _push(ssrRenderComponent(_component_UButton, {
        icon: "i-heroicons:arrow-left",
        variant: "link",
        onClick: ($event) => emit("back")
      }, null, _parent));
      _push(`<h3 class="text-xl font-normal">Masukkan Kode OTP</h3></div><div class="px-16 pb-16 pt-9"><p class="text-center text-sm text-black/80"> Kode OTP telah dikirim via e-mail ke </p><p class="text-center font-medium text-black/80 mt-2">${ssrInterpolate(unref(showingEmail))}</p><form class="space-y-16 mt-16">`);
      _push(ssrRenderComponent(_component_UFormGroup, {
        error: unref(errorMessages),
        ui: {
          error: "text-center"
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseInputPin, {
              modelValue: unref(otpValue),
              "onUpdate:modelValue": ($event) => isRef(otpValue) ? otpValue.value = $event : null
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseInputPin, {
                modelValue: unref(otpValue),
                "onUpdate:modelValue": ($event) => isRef(otpValue) ? otpValue.value = $event : null
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div>`);
      if (unref(isRunning)) {
        _push(`<p class="text-black/25 text-sm text-center"> Mohon tunggu ${ssrInterpolate(unref(displayValue))} detik untuk mengirim ulang. </p>`);
      } else {
        _push(`<div class="text-black/25 text-sm text-center"> Tidak mendapatkan kode? `);
        _push(ssrRenderComponent(_component_UButton, {
          variant: "link",
          padded: false,
          color: "blue",
          loading: __props.loadingResend,
          onClick: ($event) => emit("resend")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Kirim Ulang `);
            } else {
              return [
                createTextVNode(" Kirim Ulang ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(ssrRenderComponent(_component_UButton, {
        block: "",
        class: "uppercase mt-2",
        loading: __props.loading,
        disabled: unref(otpValue).length !== 6,
        onClick: handleSubmit
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Berikutnya `);
          } else {
            return [
              createTextVNode(" Berikutnya ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form></div><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/Otp.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Password",
  __ssrInlineRender: true,
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },
  emits: ["next", "back"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const emit = __emit;
    const form = ref({
      password: ""
    });
    const validationMessage = [
      { message: "Min. satu karakter huruf kecil", key: "lowercase" },
      { message: "Min. satu karakter huruf besar", key: "uppercase" },
      { message: "8-16 karakter", key: "validLength" },
      {
        message: "Hanya huruf, angka, dan tanda baca umum yang dapat digunakan",
        key: "allowedChar"
      }
    ];
    const isContain = reactive({
      lowercase: false,
      uppercase: false,
      validLength: false,
      allowedChar: false
    });
    function hasLowerCase(str) {
      return /[a-z]/.test(str);
    }
    function hasUpperCase(str) {
      return /[A-Z]/.test(str);
    }
    function hasValidLength(str) {
      return str.length >= 8 && str.length <= 16;
    }
    function hasAllowedChars(str) {
      return /^[a-zA-Z0-9,.!?-]+$/.test(str);
    }
    watch(
      () => form.value.password,
      (newValue) => {
        isContain.lowercase = hasLowerCase(newValue);
        isContain.uppercase = hasUpperCase(newValue);
        isContain.validLength = hasValidLength(newValue);
        isContain.allowedChar = hasAllowedChars(newValue);
      }
    );
    const $externalResults = ref({});
    const rules = {
      password: {
        required,
        validLength: hasValidLength,
        minLowerCase: hasUpperCase,
        minUpperCase: hasUpperCase,
        validCharacter: hasAllowedChars
      }
    };
    const v$ = useVuelidate(rules, form, {
      $autoDirty: true,
      $externalResults
    });
    __expose({
      setError: (error) => {
        $externalResults.value = error;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_UButton = __nuxt_component_5;
      const _component_UFormGroup = __nuxt_component_0;
      const _component_BaseInputPassword = _sfc_main$3;
      const _component_UIcon = __nuxt_component_3;
      _push(`<!--[--><div class="flex gap-7 items-center">`);
      _push(ssrRenderComponent(_component_UButton, {
        icon: "i-heroicons:arrow-left",
        variant: "link",
        onClick: ($event) => emit("back")
      }, null, _parent));
      _push(`<h3 class="text-xl font-normal">Atur Password Kamu</h3></div><div class="px-16 pb-16 pt-9"><form class="space-y-6"><p class="text-center text-sm text-black/80">Buat password baru</p>`);
      _push(ssrRenderComponent(_component_UFormGroup, {
        error: (_b = (_a = unref(v$).password.$errors) == null ? void 0 : _a[0]) == null ? void 0 : _b.$message
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseInputPassword, {
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              placeholder: "Password",
              size: "lg"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseInputPassword, {
                modelValue: unref(form).password,
                "onUpdate:modelValue": ($event) => unref(form).password = $event,
                placeholder: "Password",
                size: "lg"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<ul class="!mt-2"><!--[-->`);
      ssrRenderList(validationMessage, (validation) => {
        _push(`<li class="${ssrRenderClass([{
          "text-red-500": !unref(isContain)[validation.key],
          "text-green-500": unref(isContain)[validation.key]
        }, "text-sm py-1"])}">${ssrInterpolate(validation.message)} `);
        _push(ssrRenderComponent(_component_UIcon, {
          name: unref(isContain)[validation.key] ? "i-heroicons:check-circle" : "i-heroicons:x-circle",
          class: "w-5 h-5 -mb-1.5"
        }, null, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul>`);
      _push(ssrRenderComponent(_component_UButton, {
        type: "submit",
        block: "",
        class: "uppercase",
        loading: __props.loading
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Berikutnya `);
          } else {
            return [
              createTextVNode(" Berikutnya ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/Password.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$1 as _, _sfc_main as a };
//# sourceMappingURL=Password-CI1HI55C.mjs.map
