import { _ as __nuxt_component_1 } from './Container-D6NRf-p3.mjs';
import { _ as __nuxt_component_5 } from './Card-DbWg7JF8.mjs';
import { _ as __nuxt_component_0 } from './FormGroup-DpovdzGZ.mjs';
import { _ as __nuxt_component_3 } from './Input-BSkwWT7v.mjs';
import { _ as _sfc_main$1 } from './InputPassword-DRf3y7Jp.mjs';
import { c as useSession, z as storeToRefs, D as useCookie, d as useNuxtApp, b as __nuxt_component_5$1, a as __nuxt_component_0$5, y as navigateTo } from './server.mjs';
import { _ as __nuxt_component_5$2, a as __nuxt_component_6 } from './ButtonGoogleSignIn-SExN3jMP.mjs';
import { ref, mergeProps, withCtx, unref, createVNode, createTextVNode, withModifiers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import useVuelidate from '@vuelidate/core';
import { minLength, helpers, email, required } from '@vuelidate/validators';
import { u as useSubmit } from './use-submit-TWB9IMR2.mjs';
import { u as useApi } from './use-api-DLZ2CTc2.mjs';
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
import './useFormGroup-B6xiYqr7.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './client-only-BTi8mZAI.mjs';
import './Modal-DiMSs998.mjs';
import './portal-RXXuCQxI.mjs';
import './focus-management-vHH7q6nP.mjs';
import './keyboard-Duq8EHr3.mjs';
import './use-outside-click-BHqYmLlt.mjs';
import './hidden-Dc_fFmis.mjs';
import './active-element-history-Cer4cSOw.mjs';
import './micro-task-B6uncIso.mjs';
import './open-closed-CJlEqXqx.mjs';
import './Loading-DEfyuitU.mjs';

const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const session = useSession();
    const { profile, token: tokenSession } = storeToRefs(session);
    const token = useCookie("access_token");
    const nuxtApp = useNuxtApp();
    const form = ref({
      phone_email: "",
      password: ""
    });
    const rules = {
      phone_email: {
        required,
        isValidUsername: helpers.withMessage("Value is not valid", (value) => {
          if (value) {
            if (/^\d{4}/.test(value)) {
              return /^\d+$/.test(value);
            }
            return email.$validator(value);
          }
          return true;
        })
      },
      password: { required, minLength: minLength(8) }
    };
    const $externalResults = ref({});
    const v$ = useVuelidate(rules, form, {
      $autoDirty: true,
      $externalResults
    });
    const { status, execute, error, data } = useSubmit("/server/api/login");
    const { execute: getProfile, status: statusProfile } = useApi(
      "/server/api/profile",
      {
        immediate: false,
        onResponse({ response }) {
          var _a;
          if (response.ok) {
            profile.value = (_a = response._data) == null ? void 0 : _a.data;
            nuxtApp.runWithContext(() => {
              navigateTo("/");
            });
          }
        }
      }
    );
    async function handleSubmit() {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      const isValid = await v$.value.$validate();
      if (!isValid) return;
      await execute(form.value);
      if (error.value) {
        $externalResults.value = ((_b = (_a = error.value.data) == null ? void 0 : _a.meta) == null ? void 0 : _b.validations) || {};
        return;
      }
      if (status.value === "success" && ((_d = (_c = data.value) == null ? void 0 : _c.data) == null ? void 0 : _d.token)) {
        tokenSession.value = (_f = (_e = data.value) == null ? void 0 : _e.data) == null ? void 0 : _f.token;
        token.value = (_h = (_g = data.value) == null ? void 0 : _g.data) == null ? void 0 : _h.token;
        getProfile();
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = __nuxt_component_1;
      const _component_UCard = __nuxt_component_5;
      const _component_UFormGroup = __nuxt_component_0;
      const _component_UInput = __nuxt_component_3;
      const _component_BaseInputPassword = _sfc_main$1;
      const _component_UButton = __nuxt_component_5$1;
      const _component_UDivider = __nuxt_component_5$2;
      const _component_BaseButtonGoogleSignIn = __nuxt_component_6;
      const _component_NuxtLink = __nuxt_component_0$5;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-primary" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UContainer, { class: "grid grid-cols-2 h-full py-20" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-center items-center"${_scopeId}><div class="flex flex-col gap-14 text-white text-center"${_scopeId}><h1 class="text-8xl"${_scopeId}>Syopo</h1><p${_scopeId}>Tempat Belanja Online No. 1<br${_scopeId}>di Asia Tengara dan Taiwan</p></div></div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UCard, {
              class: "w-96",
              ui: {
                rounded: "rounded-sm"
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                if (_push3) {
                  _push3(`<h2${_scopeId2}>Login</h2><form class="mt-7 space-y-7"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UFormGroup, {
                    error: (_b = (_a = unref(v$).phone_email.$errors) == null ? void 0 : _a[0]) == null ? void 0 : _b.$message
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: unref(form).phone_email,
                          "onUpdate:modelValue": ($event) => unref(form).phone_email = $event,
                          placeholder: "No. Handphone/Email",
                          size: "lg"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            modelValue: unref(form).phone_email,
                            "onUpdate:modelValue": ($event) => unref(form).phone_email = $event,
                            placeholder: "No. Handphone/Email",
                            size: "lg"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UFormGroup, {
                    error: (_d = (_c = unref(v$).password.$errors) == null ? void 0 : _c[0]) == null ? void 0 : _d.$message
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseInputPassword, {
                          modelValue: unref(form).password,
                          "onUpdate:modelValue": ($event) => unref(form).password = $event,
                          placeholder: "Password",
                          size: "lg"
                        }, null, _parent4, _scopeId3));
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
                  }, _parent3, _scopeId2));
                  _push3(`<div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    type: "submit",
                    block: "",
                    loading: unref(status) === "pending" || unref(statusProfile) === "pending"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Log in`);
                      } else {
                        return [
                          createTextVNode("Log in")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    variant: "link",
                    color: "blue",
                    padded: false,
                    class: "mt-2",
                    to: "/forgot-password"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Lupa password `);
                      } else {
                        return [
                          createTextVNode(" Lupa password ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></form>`);
                  _push3(ssrRenderComponent(_component_UDivider, {
                    label: "ATAU",
                    class: "my-4",
                    ui: {
                      label: "text-gray-300 font-normal"
                    }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseButtonGoogleSignIn, null, null, _parent3, _scopeId2));
                  _push3(`<p class="text-sm font-normal text-black/25 text-center mt-8"${_scopeId2}> Baru di Syopo? `);
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: "/registration",
                    class: "text-primary"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Daftar`);
                      } else {
                        return [
                          createTextVNode("Daftar")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</p>`);
                } else {
                  return [
                    createVNode("h2", null, "Login"),
                    createVNode("form", {
                      class: "mt-7 space-y-7",
                      onSubmit: withModifiers(handleSubmit, ["prevent"])
                    }, [
                      createVNode(_component_UFormGroup, {
                        error: (_f = (_e = unref(v$).phone_email.$errors) == null ? void 0 : _e[0]) == null ? void 0 : _f.$message
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: unref(form).phone_email,
                            "onUpdate:modelValue": ($event) => unref(form).phone_email = $event,
                            placeholder: "No. Handphone/Email",
                            size: "lg"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }, 8, ["error"]),
                      createVNode(_component_UFormGroup, {
                        error: (_h = (_g = unref(v$).password.$errors) == null ? void 0 : _g[0]) == null ? void 0 : _h.$message
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_BaseInputPassword, {
                            modelValue: unref(form).password,
                            "onUpdate:modelValue": ($event) => unref(form).password = $event,
                            placeholder: "Password",
                            size: "lg"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }, 8, ["error"]),
                      createVNode("div", null, [
                        createVNode(_component_UButton, {
                          type: "submit",
                          block: "",
                          loading: unref(status) === "pending" || unref(statusProfile) === "pending"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Log in")
                          ]),
                          _: 1
                        }, 8, ["loading"]),
                        createVNode(_component_UButton, {
                          variant: "link",
                          color: "blue",
                          padded: false,
                          class: "mt-2",
                          to: "/forgot-password"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Lupa password ")
                          ]),
                          _: 1
                        })
                      ])
                    ], 32),
                    createVNode(_component_UDivider, {
                      label: "ATAU",
                      class: "my-4",
                      ui: {
                        label: "text-gray-300 font-normal"
                      }
                    }),
                    createVNode(_component_BaseButtonGoogleSignIn),
                    createVNode("p", { class: "text-sm font-normal text-black/25 text-center mt-8" }, [
                      createTextVNode(" Baru di Syopo? "),
                      createVNode(_component_NuxtLink, {
                        to: "/registration",
                        class: "text-primary"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Daftar")
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-center items-center" }, [
                createVNode("div", { class: "flex flex-col gap-14 text-white text-center" }, [
                  createVNode("h1", { class: "text-8xl" }, "Syopo"),
                  createVNode("p", null, [
                    createTextVNode("Tempat Belanja Online No. 1"),
                    createVNode("br"),
                    createTextVNode("di Asia Tengara dan Taiwan")
                  ])
                ])
              ]),
              createVNode("div", null, [
                createVNode(_component_UCard, {
                  class: "w-96",
                  ui: {
                    rounded: "rounded-sm"
                  }
                }, {
                  default: withCtx(() => {
                    var _a, _b, _c, _d;
                    return [
                      createVNode("h2", null, "Login"),
                      createVNode("form", {
                        class: "mt-7 space-y-7",
                        onSubmit: withModifiers(handleSubmit, ["prevent"])
                      }, [
                        createVNode(_component_UFormGroup, {
                          error: (_b = (_a = unref(v$).phone_email.$errors) == null ? void 0 : _a[0]) == null ? void 0 : _b.$message
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: unref(form).phone_email,
                              "onUpdate:modelValue": ($event) => unref(form).phone_email = $event,
                              placeholder: "No. Handphone/Email",
                              size: "lg"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }, 8, ["error"]),
                        createVNode(_component_UFormGroup, {
                          error: (_d = (_c = unref(v$).password.$errors) == null ? void 0 : _c[0]) == null ? void 0 : _d.$message
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_BaseInputPassword, {
                              modelValue: unref(form).password,
                              "onUpdate:modelValue": ($event) => unref(form).password = $event,
                              placeholder: "Password",
                              size: "lg"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }, 8, ["error"]),
                        createVNode("div", null, [
                          createVNode(_component_UButton, {
                            type: "submit",
                            block: "",
                            loading: unref(status) === "pending" || unref(statusProfile) === "pending"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Log in")
                            ]),
                            _: 1
                          }, 8, ["loading"]),
                          createVNode(_component_UButton, {
                            variant: "link",
                            color: "blue",
                            padded: false,
                            class: "mt-2",
                            to: "/forgot-password"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Lupa password ")
                            ]),
                            _: 1
                          })
                        ])
                      ], 32),
                      createVNode(_component_UDivider, {
                        label: "ATAU",
                        class: "my-4",
                        ui: {
                          label: "text-gray-300 font-normal"
                        }
                      }),
                      createVNode(_component_BaseButtonGoogleSignIn),
                      createVNode("p", { class: "text-sm font-normal text-black/25 text-center mt-8" }, [
                        createTextVNode(" Baru di Syopo? "),
                        createVNode(_component_NuxtLink, {
                          to: "/registration",
                          class: "text-primary"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Daftar")
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-7nuKhhFm.mjs.map
