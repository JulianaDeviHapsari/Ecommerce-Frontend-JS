import { _ as __nuxt_component_1 } from './Container-D6NRf-p3.mjs';
import { _ as __nuxt_component_5 } from './Card-DbWg7JF8.mjs';
import { ref, computed, mergeProps, withCtx, createVNode, resolveDynamicComponent, unref, createBlock, openBlock, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderVNode } from 'vue/server-renderer';
import { d as useNuxtApp, e as useRouter, c as useSession, z as storeToRefs, y as navigateTo, b as __nuxt_component_5$1 } from './server.mjs';
import { u as useSubmit } from './use-submit-TWB9IMR2.mjs';
import { u as useApi } from './use-api-DLZ2CTc2.mjs';
import { _ as __nuxt_component_0 } from './FormGroup-DpovdzGZ.mjs';
import { _ as __nuxt_component_3 } from './Input-BSkwWT7v.mjs';
import useVuelidate from '@vuelidate/core';
import { email, required } from '@vuelidate/validators';
import { _ as _sfc_main$1$1, a as _sfc_main$2 } from './Password-CI1HI55C.mjs';
import 'tailwind-merge';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:url';
import 'ipx';
import 'node:fs';
import 'node:path';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './useFormGroup-B6xiYqr7.mjs';
import './use-masking-DZFcOT6B.mjs';
import './use-countdown-D549dIvo.mjs';
import './InputPassword-DRf3y7Jp.mjs';

const _sfc_main$1 = {
  __name: "Email",
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
      email: ""
    });
    const rules = {
      email: { required, email }
    };
    const $externalResults = ref({});
    const v$ = useVuelidate(rules, form, {
      $autoDirty: true,
      $externalResults
    });
    __expose({
      setError: (error2) => $externalResults.value = error2
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_UButton = __nuxt_component_5$1;
      const _component_UFormGroup = __nuxt_component_0;
      const _component_UInput = __nuxt_component_3;
      _push(`<!--[--><div class="flex gap-7 items-center">`);
      _push(ssrRenderComponent(_component_UButton, {
        icon: "i-heroicons:arrow-left",
        variant: "link",
        onClick: ($event) => emit("back")
      }, null, _parent));
      _push(`<h3 class="text-xl font-normal">Reset Password</h3></div><div class="px-16 pb-16 pt-9"><form class="space-y-6">`);
      _push(ssrRenderComponent(_component_UFormGroup, {
        error: (_b = (_a = unref(v$).email.$errors) == null ? void 0 : _a[0]) == null ? void 0 : _b.$message
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              placeholder: "Email",
              size: "lg"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UInput, {
                modelValue: unref(form).email,
                "onUpdate:modelValue": ($event) => unref(form).email = $event,
                placeholder: "Email",
                size: "lg"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        type: "submit",
        loading: __props.loading,
        disabled: unref(v$).$invalid,
        block: "",
        class: "uppercase"
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/feature/ForgotPassword/Email.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "forgot-password",
  __ssrInlineRender: true,
  setup(__props) {
    const nuxtAppp = useNuxtApp();
    const router = useRouter();
    const stepActive = ref(0);
    const formStepElement = ref();
    const session = useSession();
    const { registrationForm, token, profile, tokenCookie } = storeToRefs(session);
    const forgotPasswordStep = [
      {
        key: "forgot-password",
        component: _sfc_main$1
      },
      {
        key: "otp",
        component: _sfc_main$1$1
      },
      {
        key: "password",
        component: _sfc_main$2
      }
    ];
    const {
      execute: request,
      status: statusRequest,
      error: errorRequest
    } = useSubmit("/server/api/forgot-password/request");
    const {
      execute: validateOtp,
      status: statusValidateOtp,
      error: errorValidateOtp
    } = useSubmit("/server/api/forgot-password/check-otp");
    const { execute: resendOtp, status: statusResendOtp } = useSubmit(
      "/server/api/forgot-password/resend-otp",
      {
        onResponse({ response }) {
          if (response.ok) {
            formStepElement.value.startCountdown();
          }
        }
      }
    );
    function handleResendOtp() {
      resendOtp({
        email: registrationForm.value.email
      });
    }
    const {
      execute: resetPassword,
      status: statusResetPassword,
      error: errorResetPassword,
      data: dataResetPassword
    } = useSubmit("/server/api/forgot-password/reset-password");
    const { execute: getProfile, status: statusProfile } = useApi(
      "/server/api/profile",
      {
        immediate: false,
        onResponse({ response }) {
          if (response.ok) {
            profile.value = response._data.data;
            session.resetRegistrationForm();
            nuxtAppp.runWithContext(() => {
              navigateTo("/my-account/profile");
            });
          }
        }
      }
    );
    const customProps = computed(() => {
      switch (forgotPasswordStep[stepActive.value].key) {
        case "forgot-password":
          return {
            loading: statusRequest.value === "pending"
          };
        case "otp":
          return {
            loading: statusValidateOtp.value === "pending",
            loadingResend: statusResendOtp.value === "pending"
          };
        case "password":
          return {
            loading: statusResetPassword.value === "pending" || statusProfile.value === "pending"
          };
        default:
          return {};
      }
    });
    async function handleNext(stepKey, value) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
      switch (stepKey) {
        case "forgot-password":
          await request({
            email: value.email
          });
          if (errorRequest.value) {
            formStepElement.value.setError(
              ((_b = (_a = errorRequest.value.data) == null ? void 0 : _a.meta) == null ? void 0 : _b.validations) || {}
            );
            return;
          }
          if (statusRequest.value === "success") {
            registrationForm.value.email = value.email;
            stepActive.value++;
          }
          break;
        case "otp":
          await validateOtp({
            email: registrationForm.value.email,
            otp: value.otp
          });
          if (errorValidateOtp.value) {
            formStepElement.value.setError(
              (_f = (_e = (_d = (_c = errorValidateOtp.value.data) == null ? void 0 : _c.meta) == null ? void 0 : _d.validations) == null ? void 0 : _e.otp) == null ? void 0 : _f[0]
            );
            return;
          }
          if (statusValidateOtp.value === "success") {
            registrationForm.value.otp = value.otp;
            stepActive.value++;
          }
          break;
        case "password":
          await resetPassword({
            email: registrationForm.value.email,
            otp: registrationForm.value.otp,
            password: value.password,
            password_confirmation: value.password
          });
          if (errorResetPassword.value) {
            formStepElement.value.setError(
              ((_h = (_g = error.value.data) == null ? void 0 : _g.meta) == null ? void 0 : _h.validations) || {}
            );
            return;
          }
          if (statusResetPassword.value === "success") {
            registrationForm.value.password = value.password;
            registrationForm.value.password_confirmation = value.password;
            token.value = (_i = dataResetPassword.value.data) == null ? void 0 : _i.token;
            tokenCookie.value = (_j = dataResetPassword.value.data) == null ? void 0 : _j.token;
            getProfile();
          }
          break;
        default:
          stepActive.value++;
          break;
      }
    }
    function handleBack(stepKey) {
      if (stepKey === "forgot-password") {
        return router.push("/login");
      }
      stepActive.value--;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = __nuxt_component_1;
      const _component_UCard = __nuxt_component_5;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-white" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UContainer, { class: "py-14" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, { class: "max-w-[500px] mx-auto auth-shadow" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(forgotPasswordStep[unref(stepActive)].component), mergeProps({
                    ref_key: "formStepElement",
                    ref: formStepElement
                  }, unref(customProps), {
                    onNext: ($event) => handleNext(forgotPasswordStep[unref(stepActive)].key, $event),
                    onBack: ($event) => handleBack(forgotPasswordStep[unref(stepActive)].key),
                    onResend: handleResendOtp
                  }), null), _parent3, _scopeId2);
                } else {
                  return [
                    (openBlock(), createBlock(resolveDynamicComponent(forgotPasswordStep[unref(stepActive)].component), mergeProps({
                      ref_key: "formStepElement",
                      ref: formStepElement
                    }, unref(customProps), {
                      onNext: ($event) => handleNext(forgotPasswordStep[unref(stepActive)].key, $event),
                      onBack: ($event) => handleBack(forgotPasswordStep[unref(stepActive)].key),
                      onResend: handleResendOtp
                    }), null, 16, ["onNext", "onBack"]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, { class: "max-w-[500px] mx-auto auth-shadow" }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(forgotPasswordStep[unref(stepActive)].component), mergeProps({
                    ref_key: "formStepElement",
                    ref: formStepElement
                  }, unref(customProps), {
                    onNext: ($event) => handleNext(forgotPasswordStep[unref(stepActive)].key, $event),
                    onBack: ($event) => handleBack(forgotPasswordStep[unref(stepActive)].key),
                    onResend: handleResendOtp
                  }), null, 16, ["onNext", "onBack"]))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/forgot-password.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=forgot-password-CBgkDV-C.mjs.map
