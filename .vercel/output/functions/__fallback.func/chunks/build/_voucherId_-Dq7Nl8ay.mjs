import { _ as _sfc_main$1 } from './Card-xFMCdhB0.mjs';
import { _ as _sfc_main$2 } from './FormGroup-C5bCdBK6.mjs';
import { _ as __nuxt_component_3 } from './Input-BSkwWT7v.mjs';
import { _ as __nuxt_component_3$1 } from './Checkbox-Cf2pHysF.mjs';
import { _ as __nuxt_component_4 } from './RadioGroup-D5uGm8G7.mjs';
import { _ as __nuxt_component_5 } from './SelectMenu-DcvHs5ij.mjs';
import { _ as _sfc_main$3 } from './DatePicker-BR1hZif8.mjs';
import { l as useToast, x as useRoute, e as useRouter, b as __nuxt_component_5$1 } from './server.mjs';
import { ref, watch, mergeProps, withCtx, unref, createVNode, toDisplayString, createTextVNode, createBlock, createCommentVNode, openBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import useVuelidate from '@vuelidate/core';
import { helpers, required } from '@vuelidate/validators';
import { u as useSubmit } from './use-submit-TWB9IMR2.mjs';
import './Card-DbWg7JF8.mjs';
import 'tailwind-merge';
import './FormGroup-DpovdzGZ.mjs';
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
import './Radio-DPPbThYm.mjs';
import '@tanstack/vue-virtual';
import './active-element-history-Cer4cSOw.mjs';
import './micro-task-B6uncIso.mjs';
import './keyboard-Duq8EHr3.mjs';
import './use-outside-click-BHqYmLlt.mjs';
import './focus-management-vHH7q6nP.mjs';
import './use-resolve-button-type-DOOP2SMg.mjs';
import './use-text-value-CKO20D-4.mjs';
import './hidden-Dc_fFmis.mjs';
import './open-closed-CJlEqXqx.mjs';
import './usePopper-BrvKSG9Z.mjs';
import './Popover-GjsAgxql.mjs';
import './portal-RXXuCQxI.mjs';
import 'v-calendar';
import 'date-fns';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './use-api-DLZ2CTc2.mjs';

const _sfc_main = {
  __name: "[[voucherId]]",
  __ssrInlineRender: true,
  setup(__props) {
    const toast = useToast();
    const route = useRoute();
    const router = useRouter();
    route.meta.breadcrumb = route.params.action === "add" ? [
      {
        label: "Voucher Toko Saya",
        to: "/seller/voucher"
      },
      {
        label: "Buat Voucher Baru"
      }
    ] : [
      {
        label: "Voucher Saya",
        to: "/seller/voucher"
      },
      {
        label: "Ubah Voucher"
      }
    ];
    const form = ref({
      name: "",
      code: "",
      voucher_type: "discount",
      is_public: false,
      discount_cashback_type: "fixed",
      discount_cashback_value: 0,
      discount_cashback_max: 0,
      start_date: null,
      end_date: null
    });
    const rules = {
      name: { required },
      code: { required },
      voucher_type: { required },
      is_public: { required },
      discount_cashback_type: { required },
      discount_cashback_value: {
        required,
        maxValue: helpers.withMessage(
          "Percentage maximal value is 100",
          (value, otherValue) => {
            if (otherValue.discount_cashback_type === "percentage")
              return Number(value) <= 100;
            return true;
          }
        )
      },
      discount_cashback_max: {},
      start_date: { required },
      end_date: { required }
    };
    const v$ = useVuelidate(rules, form, {
      $autoDirty: true
    });
    watch(
      () => form.value.voucher_type,
      (newValue) => {
        if (newValue === "cashback") {
          form.value.discount_cashback_type = "fixed";
          form.value.discount_cashback_max = 0;
        }
      }
    );
    const { status: statusAdd } = useSubmit(
      `/server/api/seller-dashboard/voucher`,
      {
        onResponse({ response }) {
          if (response.ok) {
            toast.add({
              color: "green",
              title: "Berhasil menambah voucher"
            });
            router.push("/seller/voucher");
          }
        }
      }
    );
    const { status: statusUpdate } = useSubmit(
      `/server/api/seller-dashboard/voucher/${route.params.voucherId}`,
      {
        onResponse({ response }) {
          if (response.ok) {
            toast.add({
              color: "green",
              title: "Berhasil mengubah voucher"
            });
            router.push("/seller/voucher");
          }
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SellerCard = _sfc_main$1;
      const _component_SellerFormGroup = _sfc_main$2;
      const _component_UInput = __nuxt_component_3;
      const _component_UCheckbox = __nuxt_component_3$1;
      const _component_URadioGroup = __nuxt_component_4;
      const _component_USelectMenu = __nuxt_component_5;
      const _component_BaseDatePicker = _sfc_main$3;
      const _component_UButton = __nuxt_component_5$1;
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "space-y-5 py-5" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SellerCard, { title: "Rincian Dasar" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
          if (_push2) {
            _push2(`<div class="space-y-4 mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_SellerFormGroup, {
              label: "Nama Voucher",
              help: "Nama Voucher tidak ditampilkan ke Pembeli",
              error: (_b = (_a = unref(v$).name.$errors) == null ? void 0 : _a[0]) == null ? void 0 : _b.$message
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(form).name,
                    "onUpdate:modelValue": ($event) => unref(form).name = $event,
                    size: "lg",
                    maxlength: "100"
                  }, {
                    trailing: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-sm text-black/55"${_scopeId3}>${ssrInterpolate(`${unref(form).name.length}/100`)}</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "text-sm text-black/55" }, toDisplayString(`${unref(form).name.length}/100`), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(form).name,
                      "onUpdate:modelValue": ($event) => unref(form).name = $event,
                      size: "lg",
                      maxlength: "100"
                    }, {
                      trailing: withCtx(() => [
                        createVNode("span", { class: "text-sm text-black/55" }, toDisplayString(`${unref(form).name.length}/100`), 1)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SellerFormGroup, {
              label: "Kode Voucher",
              error: (_d = (_c = unref(v$).code.$errors) == null ? void 0 : _c[0]) == null ? void 0 : _d.$message
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(form).code,
                    "onUpdate:modelValue": ($event) => unref(form).code = $event,
                    size: "lg"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(form).code,
                      "onUpdate:modelValue": ($event) => unref(form).code = $event,
                      size: "lg"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SellerFormGroup, {
              label: " ",
              error: (_f = (_e = unref(v$).is_public.$errors) == null ? void 0 : _e[0]) == null ? void 0 : _f.$message
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UCheckbox, {
                    modelValue: unref(form).is_public,
                    "onUpdate:modelValue": ($event) => unref(form).is_public = $event,
                    label: "Hanya Pelanggan Setia"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UCheckbox, {
                      modelValue: unref(form).is_public,
                      "onUpdate:modelValue": ($event) => unref(form).is_public = $event,
                      label: "Hanya Pelanggan Setia"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4 mt-4" }, [
                createVNode(_component_SellerFormGroup, {
                  label: "Nama Voucher",
                  help: "Nama Voucher tidak ditampilkan ke Pembeli",
                  error: (_h = (_g = unref(v$).name.$errors) == null ? void 0 : _g[0]) == null ? void 0 : _h.$message
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: unref(form).name,
                      "onUpdate:modelValue": ($event) => unref(form).name = $event,
                      size: "lg",
                      maxlength: "100"
                    }, {
                      trailing: withCtx(() => [
                        createVNode("span", { class: "text-sm text-black/55" }, toDisplayString(`${unref(form).name.length}/100`), 1)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }, 8, ["error"]),
                createVNode(_component_SellerFormGroup, {
                  label: "Kode Voucher",
                  error: (_j = (_i = unref(v$).code.$errors) == null ? void 0 : _i[0]) == null ? void 0 : _j.$message
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: unref(form).code,
                      "onUpdate:modelValue": ($event) => unref(form).code = $event,
                      size: "lg"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }, 8, ["error"]),
                createVNode(_component_SellerFormGroup, {
                  label: " ",
                  error: (_l = (_k = unref(v$).is_public.$errors) == null ? void 0 : _k[0]) == null ? void 0 : _l.$message
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UCheckbox, {
                      modelValue: unref(form).is_public,
                      "onUpdate:modelValue": ($event) => unref(form).is_public = $event,
                      label: "Hanya Pelanggan Setia"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }, 8, ["error"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_SellerCard, { title: "Pengaturan Bonus" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
          if (_push2) {
            _push2(`<div class="space-y-4 mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_SellerFormGroup, {
              label: "Tipe Voucher",
              ui: {
                wrapper: "flex items-center gap-4",
                label: {
                  wrapper: "pt-0"
                }
              },
              error: (_b = (_a = unref(v$).voucher_type.$errors) == null ? void 0 : _a[0]) == null ? void 0 : _b.$message
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_URadioGroup, {
                    modelValue: unref(form).voucher_type,
                    "onUpdate:modelValue": ($event) => unref(form).voucher_type = $event,
                    options: ["discount", "cashback"],
                    ui: {
                      fieldset: "flex gap-3"
                    },
                    "ui-radio": {
                      label: "capitalize"
                    }
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_URadioGroup, {
                      modelValue: unref(form).voucher_type,
                      "onUpdate:modelValue": ($event) => unref(form).voucher_type = $event,
                      options: ["discount", "cashback"],
                      ui: {
                        fieldset: "flex gap-3"
                      },
                      "ui-radio": {
                        label: "capitalize"
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SellerFormGroup, {
              label: "Tipe Diskon | Diskon",
              error: ((_d = (_c = unref(v$).discount_cashback_type.$errors) == null ? void 0 : _c[0]) == null ? void 0 : _d.$message) || ((_f = (_e = unref(v$).discount_cashback_value.$errors) == null ? void 0 : _e[0]) == null ? void 0 : _f.$message)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex border rounded-sm divide-x"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_USelectMenu, {
                    modelValue: unref(form).discount_cashback_type,
                    "onUpdate:modelValue": ($event) => unref(form).discount_cashback_type = $event,
                    options: [
                      {
                        label: "Nominal",
                        value: "fixed"
                      },
                      {
                        label: "Diskon",
                        value: "percentage"
                      }
                    ],
                    disabled: unref(form).voucher_type === "cashback",
                    "value-attribute": "value",
                    "option-attribute": "label",
                    variant: "none"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(form).discount_cashback_value,
                    "onUpdate:modelValue": ($event) => unref(form).discount_cashback_value = $event,
                    class: "flex-1",
                    padded: false,
                    type: "number",
                    variant: "none",
                    ui: {
                      base: "h-full"
                    }
                  }, {
                    leading: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(form).discount_cashback_type === "fixed" ? "Rp" : "%")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(form).discount_cashback_type === "fixed" ? "Rp" : "%"), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex border rounded-sm divide-x" }, [
                      createVNode(_component_USelectMenu, {
                        modelValue: unref(form).discount_cashback_type,
                        "onUpdate:modelValue": ($event) => unref(form).discount_cashback_type = $event,
                        options: [
                          {
                            label: "Nominal",
                            value: "fixed"
                          },
                          {
                            label: "Diskon",
                            value: "percentage"
                          }
                        ],
                        disabled: unref(form).voucher_type === "cashback",
                        "value-attribute": "value",
                        "option-attribute": "label",
                        variant: "none"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                      createVNode(_component_UInput, {
                        modelValue: unref(form).discount_cashback_value,
                        "onUpdate:modelValue": ($event) => unref(form).discount_cashback_value = $event,
                        class: "flex-1",
                        padded: false,
                        type: "number",
                        variant: "none",
                        ui: {
                          base: "h-full"
                        }
                      }, {
                        leading: withCtx(() => [
                          createTextVNode(toDisplayString(unref(form).discount_cashback_type === "fixed" ? "Rp" : "%"), 1)
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (unref(form).discount_cashback_type !== "fixed" && unref(form).voucher_type === "discount") {
              _push2(ssrRenderComponent(_component_SellerFormGroup, {
                label: "Diskon/Cashback Maksimal",
                error: (_h = (_g = unref(v$).discount_cashback_max.$errors) == null ? void 0 : _g[0]) == null ? void 0 : _h.$message
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: unref(form).discount_cashback_max,
                      "onUpdate:modelValue": ($event) => unref(form).discount_cashback_max = $event,
                      size: "lg",
                      type: "number"
                    }, {
                      leading: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Rp `);
                        } else {
                          return [
                            createTextVNode(" Rp ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: unref(form).discount_cashback_max,
                        "onUpdate:modelValue": ($event) => unref(form).discount_cashback_max = $event,
                        size: "lg",
                        type: "number"
                      }, {
                        leading: withCtx(() => [
                          createTextVNode(" Rp ")
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_SellerFormGroup, {
              label: "Tanggal Voucher Bisa Digunakan",
              error: ((_j = (_i = unref(v$).start_date.$errors) == null ? void 0 : _i[0]) == null ? void 0 : _j.$message) || ((_l = (_k = unref(v$).end_date.$errors) == null ? void 0 : _k[0]) == null ? void 0 : _l.$message)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid grid-cols-2 gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseDatePicker, {
                    modelValue: unref(form).start_date,
                    "onUpdate:modelValue": ($event) => unref(form).start_date = $event
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseDatePicker, {
                    modelValue: unref(form).end_date,
                    "onUpdate:modelValue": ($event) => unref(form).end_date = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                      createVNode(_component_BaseDatePicker, {
                        modelValue: unref(form).start_date,
                        "onUpdate:modelValue": ($event) => unref(form).start_date = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_BaseDatePicker, {
                        modelValue: unref(form).end_date,
                        "onUpdate:modelValue": ($event) => unref(form).end_date = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4 mt-4" }, [
                createVNode(_component_SellerFormGroup, {
                  label: "Tipe Voucher",
                  ui: {
                    wrapper: "flex items-center gap-4",
                    label: {
                      wrapper: "pt-0"
                    }
                  },
                  error: (_n = (_m = unref(v$).voucher_type.$errors) == null ? void 0 : _m[0]) == null ? void 0 : _n.$message
                }, {
                  default: withCtx(() => [
                    createVNode(_component_URadioGroup, {
                      modelValue: unref(form).voucher_type,
                      "onUpdate:modelValue": ($event) => unref(form).voucher_type = $event,
                      options: ["discount", "cashback"],
                      ui: {
                        fieldset: "flex gap-3"
                      },
                      "ui-radio": {
                        label: "capitalize"
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }, 8, ["error"]),
                createVNode(_component_SellerFormGroup, {
                  label: "Tipe Diskon | Diskon",
                  error: ((_p = (_o = unref(v$).discount_cashback_type.$errors) == null ? void 0 : _o[0]) == null ? void 0 : _p.$message) || ((_r = (_q = unref(v$).discount_cashback_value.$errors) == null ? void 0 : _q[0]) == null ? void 0 : _r.$message)
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex border rounded-sm divide-x" }, [
                      createVNode(_component_USelectMenu, {
                        modelValue: unref(form).discount_cashback_type,
                        "onUpdate:modelValue": ($event) => unref(form).discount_cashback_type = $event,
                        options: [
                          {
                            label: "Nominal",
                            value: "fixed"
                          },
                          {
                            label: "Diskon",
                            value: "percentage"
                          }
                        ],
                        disabled: unref(form).voucher_type === "cashback",
                        "value-attribute": "value",
                        "option-attribute": "label",
                        variant: "none"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                      createVNode(_component_UInput, {
                        modelValue: unref(form).discount_cashback_value,
                        "onUpdate:modelValue": ($event) => unref(form).discount_cashback_value = $event,
                        class: "flex-1",
                        padded: false,
                        type: "number",
                        variant: "none",
                        ui: {
                          base: "h-full"
                        }
                      }, {
                        leading: withCtx(() => [
                          createTextVNode(toDisplayString(unref(form).discount_cashback_type === "fixed" ? "Rp" : "%"), 1)
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  _: 1
                }, 8, ["error"]),
                unref(form).discount_cashback_type !== "fixed" && unref(form).voucher_type === "discount" ? (openBlock(), createBlock(_component_SellerFormGroup, {
                  key: 0,
                  label: "Diskon/Cashback Maksimal",
                  error: (_t = (_s = unref(v$).discount_cashback_max.$errors) == null ? void 0 : _s[0]) == null ? void 0 : _t.$message
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: unref(form).discount_cashback_max,
                      "onUpdate:modelValue": ($event) => unref(form).discount_cashback_max = $event,
                      size: "lg",
                      type: "number"
                    }, {
                      leading: withCtx(() => [
                        createTextVNode(" Rp ")
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }, 8, ["error"])) : createCommentVNode("", true),
                createVNode(_component_SellerFormGroup, {
                  label: "Tanggal Voucher Bisa Digunakan",
                  error: ((_v = (_u = unref(v$).start_date.$errors) == null ? void 0 : _u[0]) == null ? void 0 : _v.$message) || ((_x = (_w = unref(v$).end_date.$errors) == null ? void 0 : _w[0]) == null ? void 0 : _x.$message)
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                      createVNode(_component_BaseDatePicker, {
                        modelValue: unref(form).start_date,
                        "onUpdate:modelValue": ($event) => unref(form).start_date = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_BaseDatePicker, {
                        modelValue: unref(form).end_date,
                        "onUpdate:modelValue": ($event) => unref(form).end_date = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  _: 1
                }, 8, ["error"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_SellerCard, { class: "sticky bottom-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-end gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "white",
              size: "xs",
              disabled: unref(statusAdd) === "pending" || unref(statusUpdate) === "pending",
              to: "/seller/voucher"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Kembali `);
                } else {
                  return [
                    createTextVNode(" Kembali ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              type: "submit",
              color: "primary",
              size: "xs",
              loading: unref(statusAdd) === "pending" || unref(statusUpdate) === "pending"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Simpan `);
                } else {
                  return [
                    createTextVNode(" Simpan ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-end gap-4" }, [
                createVNode(_component_UButton, {
                  color: "white",
                  size: "xs",
                  disabled: unref(statusAdd) === "pending" || unref(statusUpdate) === "pending",
                  to: "/seller/voucher"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Kembali ")
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                createVNode(_component_UButton, {
                  type: "submit",
                  color: "primary",
                  size: "xs",
                  loading: unref(statusAdd) === "pending" || unref(statusUpdate) === "pending"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Simpan ")
                  ]),
                  _: 1
                }, 8, ["loading"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/seller/voucher/[action]/[[voucherId]].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_voucherId_-Dq7Nl8ay.mjs.map
