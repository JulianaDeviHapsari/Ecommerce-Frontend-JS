import { _ as __nuxt_component_1$1 } from './Container-D6NRf-p3.mjs';
import { ref, computed, mergeProps, withCtx, unref, createVNode, resolveDynamicComponent, createBlock, openBlock, Fragment, renderList, createCommentVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderVNode } from 'vue/server-renderer';
import { c as useSession, z as storeToRefs, e as useRouter, _ as _export_sfc, f as __nuxt_component_3, b as __nuxt_component_5$1 } from './server.mjs';
import { _ as __nuxt_component_5 } from './Card-DbWg7JF8.mjs';
import { u as useSubmit } from './use-submit-TWB9IMR2.mjs';
import { u as useApi } from './use-api-DLZ2CTc2.mjs';
import { u as useCountdown } from './use-countdown-D549dIvo.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$3 } from './Password-CI1HI55C.mjs';
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
import './FormGroup-DpovdzGZ.mjs';
import './use-masking-DZFcOT6B.mjs';
import './InputPassword-DRf3y7Jp.mjs';
import './Input-BSkwWT7v.mjs';
import './useFormGroup-B6xiYqr7.mjs';
import '@vuelidate/core';
import '@vuelidate/validators';

const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "87",
    height: "8",
    viewBox: "0 0 87 8",
    fill: "none"
  }, _attrs))}><rect width="85" height="1" transform="translate(0.660156 3.19922)" fill="black" fill-opacity="0.26"></rect><mask id="path-1-inside-1_30_6097" fill="white"><path d="M83.1602 0.160156L86.6957 3.69569L83.1602 7.23123L79.6246 3.69569L83.1602 0.160156Z"></path></mask><path d="M86.6957 3.69569L87.4028 4.4028L88.1099 3.69569L87.4028 2.98859L86.6957 3.69569ZM82.453 0.867263L85.9886 4.4028L87.4028 2.98859L83.8673 -0.546951L82.453 0.867263ZM85.9886 2.98859L82.453 6.52413L83.8673 7.93834L87.4028 4.4028L85.9886 2.98859Z" fill="black" fill-opacity="0.26" mask="url(#path-1-inside-1_30_6097)"></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon/StepArrow.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "Completed",
  __ssrInlineRender: true,
  props: {
    redirectTo: {
      type: String,
      default: "/"
    }
  },
  setup(__props) {
    const props = __props;
    const router = useRouter();
    const { startCountdown, displayValue } = useCountdown();
    function redirectToHomepage() {
      router.replace(props.redirectTo);
    }
    startCountdown(3, redirectToHomepage);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = __nuxt_component_3;
      const _component_UButton = __nuxt_component_5$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-center items-center gap-6 px-16 pb-16 pt-9" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons:check-circle-solid",
        class: "h-36 w-36 text-green-500"
      }, null, _parent));
      _push(`<p class="text-center text-sm text-black/85"> Pendaftaran anda berhasil dan anda akan diarahkan ke homepage dalam ${ssrInterpolate(unref(displayValue))} detik </p>`);
      _push(ssrRenderComponent(_component_UButton, {
        block: "",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Arahkan Sekarang`);
          } else {
            return [
              createTextVNode("Arahkan Sekarang")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/Completed.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "form",
  __ssrInlineRender: true,
  setup(__props) {
    const session = useSession();
    const { tokenCookie, token, profile, registrationForm } = storeToRefs(session);
    const router = useRouter();
    const stepActive = ref(0);
    const formStepElement = ref();
    const registrationStep = [
      {
        key: "otp",
        title: "Verifikasi email",
        component: _sfc_main$1$1
      },
      {
        key: "password",
        title: "Buat password",
        component: _sfc_main$3
      },
      {
        key: "completed",
        title: "Selesai",
        component: _sfc_main$1
      }
    ];
    const {
      status: statusValidate,
      error: errorValidate,
      execute: validateOtp
    } = useSubmit("/server/api/check-otp-register");
    const { status: statusResend, execute: resendOtp } = useSubmit(
      "/server/api/resend-otp",
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
      status: statusRegister,
      execute: verifyRegister,
      error: errorRegister,
      data: dataRegister
    } = useSubmit("/server/api/verify-register");
    const { execute: getProfile, status: statusProfile } = useApi(
      "/server/api/profile",
      {
        immediate: false,
        onResponse({ response }) {
          if (response.ok) {
            profile.value = response._data.data;
            session.resetRegistrationForm();
            stepActive.value++;
          }
        }
      }
    );
    const customProps = computed(() => {
      switch (registrationStep[stepActive.value].key) {
        case "otp":
          return {
            loading: statusValidate.value === "pending",
            loadingResend: statusResend.value === "pending"
          };
        case "password":
          return {
            loading: statusRegister.value === "pending" || statusProfile.value === "pending"
          };
        default:
          return {};
      }
    });
    async function handleNext(step, value) {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      switch (step) {
        case "otp":
          formStepElement.value.setError("");
          await validateOtp({
            email: registrationForm.value.email,
            otp: value.otp
          });
          if (errorValidate.value) {
            formStepElement.value.setError(
              (_d = (_c = (_b = (_a = errorValidate.value.data) == null ? void 0 : _a.meta) == null ? void 0 : _b.validations) == null ? void 0 : _c.otp) == null ? void 0 : _d[0]
            );
            return;
          }
          if (statusValidate.value === "success") {
            registrationForm.value.otp = value.otp;
            stepActive.value++;
          }
          break;
        case "password":
          formStepElement.value.setError({});
          await verifyRegister({
            email: registrationForm.value.email,
            otp: registrationForm.value.otp,
            password: value.password,
            password_confirmation: value.password
          });
          if (errorRegister.value) {
            formStepElement.value.setError(
              ((_f = (_e = errorRegister.value.data) == null ? void 0 : _e.meta) == null ? void 0 : _f.validations) || {}
            );
            return;
          }
          if (statusRegister.value === "success") {
            registrationForm.value.password = value.password;
            registrationForm.value.password_confirmation = value.password;
            token.value = (_g = dataRegister.value.data) == null ? void 0 : _g.token;
            tokenCookie.value = (_h = dataRegister.value.data) == null ? void 0 : _h.token;
            getProfile();
          }
          break;
      }
    }
    function handleBack(stepKey) {
      if (stepKey === "otp") {
        return router.push("/registration");
      }
      stepActive.value--;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = __nuxt_component_1$1;
      const _component_IconStepArrow = __nuxt_component_1;
      const _component_UCard = __nuxt_component_5;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-white" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UContainer, { class: "py-14" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-[500px] mx-auto"${_scopeId}><div class="step-header"${_scopeId}><!--[-->`);
            ssrRenderList(registrationStep, (step, index) => {
              _push2(`<!--[--><div class="${ssrRenderClass([[index <= unref(stepActive) && "is-done"], "step-item"])}"${_scopeId}><div class="step-item-icon"${_scopeId}>${ssrInterpolate(index + 1)}</div><p class="step-item-title"${_scopeId}>${ssrInterpolate(step.title)}</p></div>`);
              if (index < registrationStep.length - 1) {
                _push2(ssrRenderComponent(_component_IconStepArrow, { class: "mb-6" }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]--></div>`);
            _push2(ssrRenderComponent(_component_UCard, { class: "auth-shadow" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(registrationStep[unref(stepActive)].component), mergeProps({
                    ref_key: "formStepElement",
                    ref: formStepElement
                  }, unref(customProps), {
                    onNext: ($event) => handleNext(registrationStep[unref(stepActive)].key, $event),
                    onBack: ($event) => handleBack(registrationStep[unref(stepActive)].key),
                    onResend: handleResendOtp
                  }), null), _parent3, _scopeId2);
                } else {
                  return [
                    (openBlock(), createBlock(resolveDynamicComponent(registrationStep[unref(stepActive)].component), mergeProps({
                      ref_key: "formStepElement",
                      ref: formStepElement
                    }, unref(customProps), {
                      onNext: ($event) => handleNext(registrationStep[unref(stepActive)].key, $event),
                      onBack: ($event) => handleBack(registrationStep[unref(stepActive)].key),
                      onResend: handleResendOtp
                    }), null, 16, ["onNext", "onBack"]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-[500px] mx-auto" }, [
                createVNode("div", { class: "step-header" }, [
                  (openBlock(), createBlock(Fragment, null, renderList(registrationStep, (step, index) => {
                    return openBlock(), createBlock(Fragment, {
                      key: step.key
                    }, [
                      createVNode("div", {
                        class: ["step-item", [index <= unref(stepActive) && "is-done"]]
                      }, [
                        createVNode("div", { class: "step-item-icon" }, toDisplayString(index + 1), 1),
                        createVNode("p", { class: "step-item-title" }, toDisplayString(step.title), 1)
                      ], 2),
                      index < registrationStep.length - 1 ? (openBlock(), createBlock(_component_IconStepArrow, {
                        key: 0,
                        class: "mb-6"
                      })) : createCommentVNode("", true)
                    ], 64);
                  }), 64))
                ]),
                createVNode(_component_UCard, { class: "auth-shadow" }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(registrationStep[unref(stepActive)].component), mergeProps({
                      ref_key: "formStepElement",
                      ref: formStepElement
                    }, unref(customProps), {
                      onNext: ($event) => handleNext(registrationStep[unref(stepActive)].key, $event),
                      onBack: ($event) => handleBack(registrationStep[unref(stepActive)].key),
                      onResend: handleResendOtp
                    }), null, 16, ["onNext", "onBack"]))
                  ]),
                  _: 1
                })
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/registration/form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=form-BbLBVQux.mjs.map
