import { _ as __nuxt_component_1 } from './Container-D6NRf-p3.mjs';
import { _ as __nuxt_component_5 } from './Loading-DEfyuitU.mjs';
import { _ as __nuxt_component_5$1 } from './Card-DbWg7JF8.mjs';
import { _ as _export_sfc, x as useRoute, l as useToast, b as __nuxt_component_5$2, y as navigateTo } from './server.mjs';
import { _ as __nuxt_component_3 } from './Modal-DiMSs998.mjs';
import { f as formatNumber } from './number.utils-vPnlR88w.mjs';
import { ref, computed, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, createBlock, createCommentVNode, openBlock, isRef, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { format } from 'date-fns';
import { u as useClipboard } from './index-v5u2CgtM.mjs';
import { u as useCountdown } from './use-countdown-D549dIvo.mjs';
import { u as useApi } from './use-api-DLZ2CTc2.mjs';
import { a as getSecondsFromDate } from './date.utils-spvicigv.mjs';
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
import './portal-RXXuCQxI.mjs';
import './focus-management-vHH7q6nP.mjs';
import './keyboard-Duq8EHr3.mjs';
import './use-outside-click-BHqYmLlt.mjs';
import './hidden-Dc_fFmis.mjs';
import './active-element-history-Cer4cSOw.mjs';
import './micro-task-B6uncIso.mjs';
import './open-closed-CJlEqXqx.mjs';
import './index-CjTnKh2l.mjs';

const _sfc_main = {
  __name: "[orderId]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const isSuccess = ref(false);
    const toast = useToast();
    const { copy } = useClipboard();
    const { displayValue, startCountdown } = useCountdown();
    const { data, status, refresh } = useApi(
      computed(() => `/server/api/order/${route.params.orderId}`),
      {
        onResponse({ response }) {
          var _a, _b, _c, _d;
          if (response.ok) {
            if ((_b = (_a = response._data) == null ? void 0 : _a.data) == null ? void 0 : _b.is_paid) isSuccess.value = true;
            const expiredAt = (_d = (_c = response._data) == null ? void 0 : _c.data) == null ? void 0 : _d.payment_expired_at;
            if (expiredAt) {
              const seconds = getSecondsFromDate(expiredAt);
              startCountdown(seconds);
            }
          }
        }
      }
    );
    const countdownDisplay = computed(() => {
      const _countdown = displayValue.value.split(":");
      if (!_countdown[2]) {
        if (!_countdown[1]) return `00 Jam 00 Menit ${_countdown[0]} Detik`;
        return `00 Jam ${_countdown[0]} Menit ${_countdown[1]} Detik`;
      }
      return `${_countdown[0]} Jam ${_countdown[1]} Menit ${_countdown[2]} Detik`;
    });
    const paymentSelected = computed(() => {
      var _a, _b;
      return (_b = (_a = data.value) == null ? void 0 : _a.data) == null ? void 0 : _b.payment_method;
    });
    const paymentExpiredAt = computed(() => {
      var _a, _b;
      if ((_b = (_a = data.value) == null ? void 0 : _a.data) == null ? void 0 : _b.payment_expired_at) {
        const expiredAt = new Date(data.value.data.payment_expired_at);
        return format(expiredAt, "dd MMM yyyy, HH:mm");
      }
      return "";
    });
    const paymentFrom = computed(
      () => [
        {
          value: "bni_va",
          label: "Bank BNI",
          image: "/images/logo-bni.webp"
        },
        {
          value: "qris",
          label: "QRIS",
          image: "/images/qris.png"
        }
      ].find((item) => item.value === paymentSelected.value)
    );
    const message = {
      bni_va: {
        description: "Bayar pesanan ke Virtual Account di atas sebelum membuat pesanan kembali dengan Virtual Account agar nomor tetap sama.",
        caption: "Hanya menerima dari Bank BNI"
      },
      qris: {
        description: "Bayar pesanan ke QRIS di atas sebelum membuat pesanan kembali dengan QRIS agar nomor tetap sama.",
        caption: "Menerima dari semua Bank"
      }
    };
    function handleCopy() {
      var _a, _b;
      copy((_b = (_a = data.value) == null ? void 0 : _a.data) == null ? void 0 : _b.virtual_account_number);
      toast.add({
        color: "green",
        title: "Berhasil menyalin"
      });
    }
    function handleRedirect() {
      navigateTo(`/my-account/orders/${route.params.orderId}`);
    }
    function handleCheckPayment() {
      refresh();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = __nuxt_component_1;
      const _component_IconLoading = __nuxt_component_5;
      const _component_UCard = __nuxt_component_5$1;
      const _component_UButton = __nuxt_component_5$2;
      const _component_UModal = __nuxt_component_3;
      _push(ssrRenderComponent(_component_UContainer, mergeProps({ class: "py-5 text-black/85 text-sm" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(status) === "pending") {
              _push2(`<div class="flex gap-2 justify-center py-6" data-v-221bec90${_scopeId}>`);
              _push2(ssrRenderComponent(_component_IconLoading, { class: "w-6 text-primary" }, null, _parent2, _scopeId));
              _push2(`<p data-v-221bec90${_scopeId}>Loading...</p></div>`);
            } else {
              _push2(ssrRenderComponent(_component_UCard, null, {
                header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex items-center gap-4" data-v-221bec90${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UButton, {
                      padded: false,
                      icon: "i-heroicons:arrow-left",
                      variant: "link",
                      color: "black"
                    }, null, _parent3, _scopeId2));
                    _push3(`<p class="text-xl" data-v-221bec90${_scopeId2}>Pembayaran</p></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex items-center gap-4" }, [
                        createVNode(_component_UButton, {
                          padded: false,
                          icon: "i-heroicons:arrow-left",
                          variant: "link",
                          color: "black"
                        }),
                        createVNode("p", { class: "text-xl" }, "Pembayaran")
                      ])
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
                  if (_push3) {
                    _push3(`<div class="flex justify-center" data-v-221bec90${_scopeId2}><div class="max-w-[500px] w-full divide-y" data-v-221bec90${_scopeId2}><div class="payment-item justify-between" data-v-221bec90${_scopeId2}><span class="text-base font-normal" data-v-221bec90${_scopeId2}>Total Pembayaran</span><span class="text-base font-medium text-primary" data-v-221bec90${_scopeId2}>Rp${ssrInterpolate(("formatNumber" in _ctx ? _ctx.formatNumber : unref(formatNumber))((_b = (_a = unref(data)) == null ? void 0 : _a.data) == null ? void 0 : _b.total_payment))}</span></div><div class="payment-item justify-between" data-v-221bec90${_scopeId2}><span class="text-base font-normal" data-v-221bec90${_scopeId2}>Bayar Dalam</span><div class="text-right" data-v-221bec90${_scopeId2}><p class="text-primary text-base font-medium" data-v-221bec90${_scopeId2}>${ssrInterpolate(unref(countdownDisplay))}</p><p class="text-black/55 font-normal" data-v-221bec90${_scopeId2}> Jatuh tempo ${ssrInterpolate(unref(paymentExpiredAt))}</p></div></div><div class="payment-item flex-col gap-5" data-v-221bec90${_scopeId2}><div class="flex gap-2" data-v-221bec90${_scopeId2}><img${ssrRenderAttr("src", unref(paymentFrom).image)} class="w-6 object-contain" data-v-221bec90${_scopeId2}><p data-v-221bec90${_scopeId2}>${ssrInterpolate(unref(paymentFrom).label)}</p></div>`);
                    if (unref(paymentSelected) === "bni_va") {
                      _push3(`<div data-v-221bec90${_scopeId2}><p data-v-221bec90${_scopeId2}>No. Rekening</p><div class="flex gap-4 mt-1 items-center" data-v-221bec90${_scopeId2}><p class="text-primary text-xl" data-v-221bec90${_scopeId2}>${ssrInterpolate((_d = (_c = unref(data)) == null ? void 0 : _c.data) == null ? void 0 : _d.virtual_account_number)}</p>`);
                      _push3(ssrRenderComponent(_component_UButton, {
                        variant: "link",
                        color: "teal",
                        padded: false,
                        onClick: handleCopy
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` SALIN `);
                          } else {
                            return [
                              createTextVNode(" SALIN ")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                      _push3(`</div></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (unref(paymentSelected) === "qris") {
                      _push3(`<img${ssrRenderAttr("src", (_f = (_e = unref(data)) == null ? void 0 : _e.data) == null ? void 0 : _f.qris_image_url)} class="w-60 mx-auto" data-v-221bec90${_scopeId2}>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<p class="text-teal-500" data-v-221bec90${_scopeId2}> Proses verifikasi kurang dari 10 menit setelah pembayaran berhasil </p><p data-v-221bec90${_scopeId2}>${ssrInterpolate(message[unref(paymentSelected)].description)}</p><p data-v-221bec90${_scopeId2}>${ssrInterpolate(message[unref(paymentSelected)].caption)}</p>`);
                    _push3(ssrRenderComponent(_component_UButton, {
                      block: "",
                      class: "max-w-72 mx-auto mt-7",
                      onClick: handleCheckPayment
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`OK`);
                        } else {
                          return [
                            createTextVNode("OK")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex justify-center" }, [
                        createVNode("div", { class: "max-w-[500px] w-full divide-y" }, [
                          createVNode("div", { class: "payment-item justify-between" }, [
                            createVNode("span", { class: "text-base font-normal" }, "Total Pembayaran"),
                            createVNode("span", { class: "text-base font-medium text-primary" }, "Rp" + toDisplayString(("formatNumber" in _ctx ? _ctx.formatNumber : unref(formatNumber))((_h = (_g = unref(data)) == null ? void 0 : _g.data) == null ? void 0 : _h.total_payment)), 1)
                          ]),
                          createVNode("div", { class: "payment-item justify-between" }, [
                            createVNode("span", { class: "text-base font-normal" }, "Bayar Dalam"),
                            createVNode("div", { class: "text-right" }, [
                              createVNode("p", { class: "text-primary text-base font-medium" }, toDisplayString(unref(countdownDisplay)), 1),
                              createVNode("p", { class: "text-black/55 font-normal" }, " Jatuh tempo " + toDisplayString(unref(paymentExpiredAt)), 1)
                            ])
                          ]),
                          createVNode("div", { class: "payment-item flex-col gap-5" }, [
                            createVNode("div", { class: "flex gap-2" }, [
                              createVNode("img", {
                                src: unref(paymentFrom).image,
                                class: "w-6 object-contain"
                              }, null, 8, ["src"]),
                              createVNode("p", null, toDisplayString(unref(paymentFrom).label), 1)
                            ]),
                            unref(paymentSelected) === "bni_va" ? (openBlock(), createBlock("div", { key: 0 }, [
                              createVNode("p", null, "No. Rekening"),
                              createVNode("div", { class: "flex gap-4 mt-1 items-center" }, [
                                createVNode("p", { class: "text-primary text-xl" }, toDisplayString((_j = (_i = unref(data)) == null ? void 0 : _i.data) == null ? void 0 : _j.virtual_account_number), 1),
                                createVNode(_component_UButton, {
                                  variant: "link",
                                  color: "teal",
                                  padded: false,
                                  onClick: handleCopy
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" SALIN ")
                                  ]),
                                  _: 1
                                })
                              ])
                            ])) : createCommentVNode("", true),
                            unref(paymentSelected) === "qris" ? (openBlock(), createBlock("img", {
                              key: 1,
                              src: (_l = (_k = unref(data)) == null ? void 0 : _k.data) == null ? void 0 : _l.qris_image_url,
                              class: "w-60 mx-auto"
                            }, null, 8, ["src"])) : createCommentVNode("", true),
                            createVNode("p", { class: "text-teal-500" }, " Proses verifikasi kurang dari 10 menit setelah pembayaran berhasil "),
                            createVNode("p", null, toDisplayString(message[unref(paymentSelected)].description), 1),
                            createVNode("p", null, toDisplayString(message[unref(paymentSelected)].caption), 1),
                            createVNode(_component_UButton, {
                              block: "",
                              class: "max-w-72 mx-auto mt-7",
                              onClick: handleCheckPayment
                            }, {
                              default: withCtx(() => [
                                createTextVNode("OK")
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }
            _push2(ssrRenderComponent(_component_UModal, {
              modelValue: unref(isSuccess),
              "onUpdate:modelValue": ($event) => isRef(isSuccess) ? isSuccess.value = $event : null,
              "prevent-close": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UCard, { ui: {
                    rounded: "rounded"
                  } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p class="text-lg" data-v-221bec90${_scopeId3}>Pembayaran Berhasil</p><p class="text-black/55 text-s mt-5" data-v-221bec90${_scopeId3}> Silakan cek notifikasi untuk mengetahui status pengiriman. </p><div class="flex justify-end mt-1" data-v-221bec90${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UButton, {
                          block: "",
                          class: "max-w-44 mt-10",
                          onClick: handleRedirect
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` OK `);
                            } else {
                              return [
                                createTextVNode(" OK ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("p", { class: "text-lg" }, "Pembayaran Berhasil"),
                          createVNode("p", { class: "text-black/55 text-s mt-5" }, " Silakan cek notifikasi untuk mengetahui status pengiriman. "),
                          createVNode("div", { class: "flex justify-end mt-1" }, [
                            createVNode(_component_UButton, {
                              block: "",
                              class: "max-w-44 mt-10",
                              onClick: handleRedirect
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" OK ")
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UCard, { ui: {
                      rounded: "rounded"
                    } }, {
                      default: withCtx(() => [
                        createVNode("p", { class: "text-lg" }, "Pembayaran Berhasil"),
                        createVNode("p", { class: "text-black/55 text-s mt-5" }, " Silakan cek notifikasi untuk mengetahui status pengiriman. "),
                        createVNode("div", { class: "flex justify-end mt-1" }, [
                          createVNode(_component_UButton, {
                            block: "",
                            class: "max-w-44 mt-10",
                            onClick: handleRedirect
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" OK ")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              unref(status) === "pending" ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex gap-2 justify-center py-6"
              }, [
                createVNode(_component_IconLoading, { class: "w-6 text-primary" }),
                createVNode("p", null, "Loading...")
              ])) : (openBlock(), createBlock(_component_UCard, { key: 1 }, {
                header: withCtx(() => [
                  createVNode("div", { class: "flex items-center gap-4" }, [
                    createVNode(_component_UButton, {
                      padded: false,
                      icon: "i-heroicons:arrow-left",
                      variant: "link",
                      color: "black"
                    }),
                    createVNode("p", { class: "text-xl" }, "Pembayaran")
                  ])
                ]),
                default: withCtx(() => {
                  var _a, _b, _c, _d, _e, _f;
                  return [
                    createVNode("div", { class: "flex justify-center" }, [
                      createVNode("div", { class: "max-w-[500px] w-full divide-y" }, [
                        createVNode("div", { class: "payment-item justify-between" }, [
                          createVNode("span", { class: "text-base font-normal" }, "Total Pembayaran"),
                          createVNode("span", { class: "text-base font-medium text-primary" }, "Rp" + toDisplayString(("formatNumber" in _ctx ? _ctx.formatNumber : unref(formatNumber))((_b = (_a = unref(data)) == null ? void 0 : _a.data) == null ? void 0 : _b.total_payment)), 1)
                        ]),
                        createVNode("div", { class: "payment-item justify-between" }, [
                          createVNode("span", { class: "text-base font-normal" }, "Bayar Dalam"),
                          createVNode("div", { class: "text-right" }, [
                            createVNode("p", { class: "text-primary text-base font-medium" }, toDisplayString(unref(countdownDisplay)), 1),
                            createVNode("p", { class: "text-black/55 font-normal" }, " Jatuh tempo " + toDisplayString(unref(paymentExpiredAt)), 1)
                          ])
                        ]),
                        createVNode("div", { class: "payment-item flex-col gap-5" }, [
                          createVNode("div", { class: "flex gap-2" }, [
                            createVNode("img", {
                              src: unref(paymentFrom).image,
                              class: "w-6 object-contain"
                            }, null, 8, ["src"]),
                            createVNode("p", null, toDisplayString(unref(paymentFrom).label), 1)
                          ]),
                          unref(paymentSelected) === "bni_va" ? (openBlock(), createBlock("div", { key: 0 }, [
                            createVNode("p", null, "No. Rekening"),
                            createVNode("div", { class: "flex gap-4 mt-1 items-center" }, [
                              createVNode("p", { class: "text-primary text-xl" }, toDisplayString((_d = (_c = unref(data)) == null ? void 0 : _c.data) == null ? void 0 : _d.virtual_account_number), 1),
                              createVNode(_component_UButton, {
                                variant: "link",
                                color: "teal",
                                padded: false,
                                onClick: handleCopy
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" SALIN ")
                                ]),
                                _: 1
                              })
                            ])
                          ])) : createCommentVNode("", true),
                          unref(paymentSelected) === "qris" ? (openBlock(), createBlock("img", {
                            key: 1,
                            src: (_f = (_e = unref(data)) == null ? void 0 : _e.data) == null ? void 0 : _f.qris_image_url,
                            class: "w-60 mx-auto"
                          }, null, 8, ["src"])) : createCommentVNode("", true),
                          createVNode("p", { class: "text-teal-500" }, " Proses verifikasi kurang dari 10 menit setelah pembayaran berhasil "),
                          createVNode("p", null, toDisplayString(message[unref(paymentSelected)].description), 1),
                          createVNode("p", null, toDisplayString(message[unref(paymentSelected)].caption), 1),
                          createVNode(_component_UButton, {
                            block: "",
                            class: "max-w-72 mx-auto mt-7",
                            onClick: handleCheckPayment
                          }, {
                            default: withCtx(() => [
                              createTextVNode("OK")
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ])
                  ];
                }),
                _: 1
              })),
              createVNode(_component_UModal, {
                modelValue: unref(isSuccess),
                "onUpdate:modelValue": ($event) => isRef(isSuccess) ? isSuccess.value = $event : null,
                "prevent-close": ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_UCard, { ui: {
                    rounded: "rounded"
                  } }, {
                    default: withCtx(() => [
                      createVNode("p", { class: "text-lg" }, "Pembayaran Berhasil"),
                      createVNode("p", { class: "text-black/55 text-s mt-5" }, " Silakan cek notifikasi untuk mengetahui status pengiriman. "),
                      createVNode("div", { class: "flex justify-end mt-1" }, [
                        createVNode(_component_UButton, {
                          block: "",
                          class: "max-w-44 mt-10",
                          onClick: handleRedirect
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" OK ")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/checkout/payment/[orderId].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _orderId_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-221bec90"]]);

export { _orderId_ as default };
//# sourceMappingURL=_orderId_-BRIJ-dsW.mjs.map
