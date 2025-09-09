import { _ as __nuxt_component_1 } from './Container-D6NRf-p3.mjs';
import { _ as __nuxt_component_5 } from './Loading-DEfyuitU.mjs';
import { _ as _export_sfc, c as useSession, d as useNuxtApp, e as useRouter, f as __nuxt_component_3, b as __nuxt_component_5$2, r as refreshNuxtData } from './server.mjs';
import { _ as __nuxt_component_5$1 } from './Card-DbWg7JF8.mjs';
import { _ as _sfc_main$3 } from './NuxtImg-DLumQ5km.mjs';
import { _ as __nuxt_component_8 } from './InputQuantity-_SMfgbqC.mjs';
import { f as formatNumber, a as formatRb } from './number.utils-vPnlR88w.mjs';
import { ref, computed, mergeProps, withCtx, unref, createVNode, createBlock, openBlock, Fragment, renderList, createTextVNode, createCommentVNode, toDisplayString, isRef, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttrs } from 'vue/server-renderer';
import { u as useSubmit } from './use-submit-TWB9IMR2.mjs';
import { _ as __nuxt_component_9, a as _sfc_main$2 } from './Voucher-_I01_X4q.mjs';
import { _ as __nuxt_component_3$1 } from './Checkbox-Cf2pHysF.mjs';
import { _ as __nuxt_component_6 } from './Coin-AlF5VZZf.mjs';
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
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './Input-BSkwWT7v.mjs';
import './useFormGroup-B6xiYqr7.mjs';
import './Modal-DiMSs998.mjs';
import './portal-RXXuCQxI.mjs';
import './focus-management-vHH7q6nP.mjs';
import './keyboard-Duq8EHr3.mjs';
import './use-outside-click-BHqYmLlt.mjs';
import './hidden-Dc_fFmis.mjs';
import './active-element-history-Cer4cSOw.mjs';
import './micro-task-B6uncIso.mjs';
import './open-closed-CJlEqXqx.mjs';
import './Radio-DPPbThYm.mjs';
import 'date-fns';

const _sfc_main$1 = {
  __name: "ProductItem",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    var _a;
    const props = __props;
    const temporaryQty = ref(((_a = props.item) == null ? void 0 : _a.qty) || 0);
    const { execute: updateQty, status: statusUpdateQty } = useSubmit(
      computed(() => `/server/api/cart/${props.item.uuid}`),
      {
        onResponse({ response }) {
          if (response.ok) {
            refreshNuxtData();
          }
        }
      }
    );
    const { execute: removeItem, status: statusRemoveItem } = useSubmit(
      computed(() => `/server/api/cart/${props.item.uuid}`),
      {
        method: "DELETE",
        onResponse({ response }) {
          if (response.ok) {
            refreshNuxtData();
          }
        }
      }
    );
    function handleUpdateQty() {
      var _a2, _b;
      const formData = new FormData();
      (_b = (_a2 = props.item) == null ? void 0 : _a2.variations) == null ? void 0 : _b.forEach((variant, index) => {
        formData.append(`variations[${index}][label]`, variant.label);
        formData.append(`variations[${index}][value]`, variant.value);
      });
      formData.append("qty", temporaryQty.value);
      formData.append("_method", "PATCH");
      updateQty(formData);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$3;
      const _component_BaseInputQuantity = __nuxt_component_8;
      const _component_UButton = __nuxt_component_5$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cart-product" }, _attrs))} data-v-411e2372><div class="w-[46%]" data-v-411e2372><div class="flex gap-3 text-sm items-center" data-v-411e2372>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: __props.item.product.image_url,
        class: "aspect-[1/1] w-20"
      }, null, _parent));
      _push(`<p class="line-clamp-2 items-center text-black/85" data-v-411e2372>${ssrInterpolate(__props.item.product.name)}</p><div class="w-40" data-v-411e2372><p data-v-411e2372>Variasi:</p><p data-v-411e2372>${ssrInterpolate(__props.item.variations.map((variant) => variant.value).join(", "))}</p></div></div></div><div class="text-center w-[15%]" data-v-411e2372> Rp${ssrInterpolate(("formatNumber" in _ctx ? _ctx.formatNumber : unref(formatNumber))(__props.item.product.price_sale || __props.item.product.price))}</div><div class="flex justify-center flex-col items-center w-[15%] gap-2" data-v-411e2372>`);
      _push(ssrRenderComponent(_component_BaseInputQuantity, {
        modelValue: unref(temporaryQty),
        "onUpdate:modelValue": ($event) => isRef(temporaryQty) ? temporaryQty.value = $event : null,
        max: __props.item.stock,
        disabled: unref(statusRemoveItem) === "pending"
      }, null, _parent));
      if (unref(temporaryQty) !== __props.item.qty) {
        _push(ssrRenderComponent(_component_UButton, {
          variant: "link",
          size: "xs",
          padded: false,
          loading: unref(statusUpdateQty) == "pending",
          disabled: unref(statusRemoveItem) === "pending",
          onClick: handleUpdateQty
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Perbarui Kuantitas `);
            } else {
              return [
                createTextVNode(" Perbarui Kuantitas ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="text-center w-[15%] text-primary" data-v-411e2372> Rp${ssrInterpolate(("formatNumber" in _ctx ? _ctx.formatNumber : unref(formatNumber))(__props.item.total))}</div><div class="text-center w-[10%]" data-v-411e2372>`);
      _push(ssrRenderComponent(_component_UButton, {
        variant: "link",
        color: "black",
        disabled: unref(statusUpdateQty) === "pending",
        loading: unref(statusRemoveItem) === "pending",
        onClick: unref(removeItem)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Hapus `);
          } else {
            return [
              createTextVNode(" Hapus ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/feature/Cart/ProductItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-411e2372"]]);
const paddingCheckoutFooter = "sm:py-3 sm:px-7";
const _sfc_main = {
  __name: "cart",
  __ssrInlineRender: true,
  setup(__props) {
    const session = useSession();
    const nuxtApp = useNuxtApp();
    const openVoucher = ref(false);
    const useCoin = ref(false);
    const router = useRouter();
    const { data, status } = useApi(`/server/api/cart`, {
      server: false,
      key: "cart",
      onResponse({ response }) {
        var _a, _b, _c;
        if (response.ok) {
          useCoin.value = !!((_c = (_b = (_a = response._data) == null ? void 0 : _a.data) == null ? void 0 : _b.cart) == null ? void 0 : _c.pay_with_coin);
        }
      },
      getCachedData() {
        var _a, _b;
        return ((_a = nuxtApp.payload.data) == null ? void 0 : _a["category-list"]) || ((_b = nuxtApp.static.data) == null ? void 0 : _b["category-list"]);
      }
    });
    const totalPrice = computed(
      () => {
        var _a, _b, _c;
        return formatNumber(((_c = (_b = (_a = data.value) == null ? void 0 : _a.data) == null ? void 0 : _b.cart) == null ? void 0 : _c.total) || 0);
      }
    );
    const totalDiscount = computed(() => {
      var _a, _b, _c, _d, _e, _f;
      const cashback = ((_c = (_b = (_a = data.value) == null ? void 0 : _a.data) == null ? void 0 : _b.cart) == null ? void 0 : _c.voucher_cashback) || 0;
      const discount = ((_f = (_e = (_d = data.value) == null ? void 0 : _d.data) == null ? void 0 : _e.cart) == null ? void 0 : _f.voucher_value) || 0;
      return formatRb(cashback + discount);
    });
    const coinBalance = computed(() => formatNumber(session.profile.balance));
    const payWithCoin = computed(
      () => {
        var _a, _b, _c;
        return formatNumber((_c = (_b = (_a = data.value) == null ? void 0 : _a.data) == null ? void 0 : _b.cart) == null ? void 0 : _c.pay_with_coin);
      }
    );
    const { execute: submitPayWithCoin, status: statusCoin } = useSubmit(
      "/server/api/cart/toggle-coin",
      {
        params: computed(() => {
          return {
            use: useCoin.value ? 1 : 0
          };
        }),
        onResponse({ response }) {
          if (response.ok) {
            refreshNuxtData();
          }
        }
      }
    );
    function handlePayWithCoin() {
      submitPayWithCoin();
    }
    function handleCheckout() {
      router.push("/checkout");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = __nuxt_component_1;
      const _component_IconLoading = __nuxt_component_5;
      const _component_UIcon = __nuxt_component_3;
      const _component_UCard = __nuxt_component_5$1;
      const _component_FeatureCartProductItem = __nuxt_component_4;
      const _component_IconVoucher = __nuxt_component_9;
      const _component_UButton = __nuxt_component_5$2;
      const _component_UCheckbox = __nuxt_component_3$1;
      const _component_IconCoin = __nuxt_component_6;
      const _component_ModalVoucher = _sfc_main$2;
      _push(ssrRenderComponent(_component_UContainer, mergeProps({ class: "py-5 flex flex-col gap-6" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f;
          if (_push2) {
            if (unref(status) === "pending") {
              _push2(`<div class="flex gap-4 items-center justify-center min-h-96" data-v-1619e0f4${_scopeId}>`);
              _push2(ssrRenderComponent(_component_IconLoading, { class: "w-12 text-primary" }, null, _parent2, _scopeId));
              _push2(`<p data-v-1619e0f4${_scopeId}>Loading...</p></div>`);
            } else {
              _push2(`<!--[-->`);
              if (!((_c = (_b = (_a = unref(data)) == null ? void 0 : _a.data) == null ? void 0 : _b.items) == null ? void 0 : _c.length)) {
                _push2(`<div class="flex gap-4 items-center justify-center min-h-96 flex-col" data-v-1619e0f4${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "heroicons:archive-box-x-mark",
                  class: "w-36 h-36 text-black/30"
                }, null, _parent2, _scopeId));
                _push2(`<p class="text-2xl text-black/30 text-center" data-v-1619e0f4${_scopeId}> Tidak ada Produk di Keranjang </p></div>`);
              } else {
                _push2(`<!--[-->`);
                _push2(ssrRenderComponent(_component_UCard, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="cart-header" data-v-1619e0f4${_scopeId2}><div class="w-[46%]" data-v-1619e0f4${_scopeId2}>Produk</div><div class="text-center w-[15%]" data-v-1619e0f4${_scopeId2}>Harga Satuan</div><div class="text-center w-[15%]" data-v-1619e0f4${_scopeId2}>Kuantitas</div><div class="text-center w-[15%]" data-v-1619e0f4${_scopeId2}>Total Harga</div><div class="text-center w-[10%]" data-v-1619e0f4${_scopeId2}>Aksi</div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "cart-header" }, [
                          createVNode("div", { class: "w-[46%]" }, "Produk"),
                          createVNode("div", { class: "text-center w-[15%]" }, "Harga Satuan"),
                          createVNode("div", { class: "text-center w-[15%]" }, "Kuantitas"),
                          createVNode("div", { class: "text-center w-[15%]" }, "Total Harga"),
                          createVNode("div", { class: "text-center w-[10%]" }, "Aksi")
                        ])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_UCard, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    var _a2, _b2, _c2, _d2;
                    if (_push3) {
                      _push3(`<div class="grid grid-cols-1 divide-y" data-v-1619e0f4${_scopeId2}><!--[-->`);
                      ssrRenderList((_b2 = (_a2 = unref(data)) == null ? void 0 : _a2.data) == null ? void 0 : _b2.items, (item) => {
                        _push3(ssrRenderComponent(_component_FeatureCartProductItem, {
                          key: `product-${item.uuid}`,
                          item
                        }, null, _parent3, _scopeId2));
                      });
                      _push3(`<!--]--></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "grid grid-cols-1 divide-y" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList((_d2 = (_c2 = unref(data)) == null ? void 0 : _c2.data) == null ? void 0 : _d2.items, (item) => {
                            return openBlock(), createBlock(_component_FeatureCartProductItem, {
                              key: `product-${item.uuid}`,
                              item
                            }, null, 8, ["item"]);
                          }), 128))
                        ])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_UCard, {
                  ui: {
                    header: {
                      padding: paddingCheckoutFooter
                    },
                    body: {
                      padding: paddingCheckoutFooter
                    },
                    footer: {
                      padding: paddingCheckoutFooter
                    },
                    divide: "divide-dashed"
                  }
                }, {
                  header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="flex justify-end gap-40" data-v-1619e0f4${_scopeId2}><div class="flex gap-1 items-center font-medium" data-v-1619e0f4${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_IconVoucher, null, null, _parent3, _scopeId2));
                      _push3(` Voucher Syopo </div>`);
                      _push3(ssrRenderComponent(_component_UButton, {
                        variant: "link",
                        color: "blue",
                        disabled: unref(statusCoin) === "pending",
                        onClick: ($event) => openVoucher.value = true
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          var _a2, _b2, _c2, _d2, _e2, _f2, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
                          if (_push4) {
                            _push4(`${ssrInterpolate(((_d2 = (_c2 = (_b2 = (_a2 = unref(data)) == null ? void 0 : _a2.data) == null ? void 0 : _b2.cart) == null ? void 0 : _c2.voucher) == null ? void 0 : _d2.code) ? `${(_h = (_g = (_f2 = (_e2 = unref(data)) == null ? void 0 : _e2.data) == null ? void 0 : _f2.cart) == null ? void 0 : _g.voucher) == null ? void 0 : _h.code} - Klik untuk mengganti` : "Gunakan/ masukkan kode")}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(((_l = (_k = (_j = (_i = unref(data)) == null ? void 0 : _i.data) == null ? void 0 : _j.cart) == null ? void 0 : _k.voucher) == null ? void 0 : _l.code) ? `${(_p = (_o = (_n = (_m = unref(data)) == null ? void 0 : _m.data) == null ? void 0 : _n.cart) == null ? void 0 : _o.voucher) == null ? void 0 : _p.code} - Klik untuk mengganti` : "Gunakan/ masukkan kode"), 1)
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "flex justify-end gap-40" }, [
                          createVNode("div", { class: "flex gap-1 items-center font-medium" }, [
                            createVNode(_component_IconVoucher),
                            createTextVNode(" Voucher Syopo ")
                          ]),
                          createVNode(_component_UButton, {
                            variant: "link",
                            color: "blue",
                            disabled: unref(statusCoin) === "pending",
                            onClick: ($event) => openVoucher.value = true
                          }, {
                            default: withCtx(() => {
                              var _a2, _b2, _c2, _d2, _e2, _f2, _g, _h;
                              return [
                                createTextVNode(toDisplayString(((_d2 = (_c2 = (_b2 = (_a2 = unref(data)) == null ? void 0 : _a2.data) == null ? void 0 : _b2.cart) == null ? void 0 : _c2.voucher) == null ? void 0 : _d2.code) ? `${(_h = (_g = (_f2 = (_e2 = unref(data)) == null ? void 0 : _e2.data) == null ? void 0 : _f2.cart) == null ? void 0 : _g.voucher) == null ? void 0 : _h.code} - Klik untuk mengganti` : "Gunakan/ masukkan kode"), 1)
                              ];
                            }),
                            _: 1
                          }, 8, ["disabled", "onClick"])
                        ])
                      ];
                    }
                  }),
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="flex justify-end" data-v-1619e0f4${_scopeId2}><div class="flex items-center gap-5" data-v-1619e0f4${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_UCheckbox, {
                        modelValue: unref(useCoin),
                        "onUpdate:modelValue": ($event) => isRef(useCoin) ? useCoin.value = $event : null,
                        disabled: !unref(session).profile.balance || unref(statusCoin) === "pending",
                        onChange: handlePayWithCoin
                      }, {
                        label: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="flex gap-2" data-v-1619e0f4${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_IconCoin, null, null, _parent4, _scopeId3));
                            _push4(`<span class="font-medium" data-v-1619e0f4${_scopeId3}>Koin Syopo</span></div>`);
                          } else {
                            return [
                              createVNode("div", { class: "flex gap-2" }, [
                                createVNode(_component_IconCoin),
                                createVNode("span", { class: "font-medium" }, "Koin Syopo")
                              ])
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                      _push3(`<span class="font-medium text-sm text-gray-500" data-v-1619e0f4${_scopeId2}> Saldo Koin ${ssrInterpolate(unref(session).profile.balance ? unref(coinBalance) : "Tidak Cukup")}</span><div class="flex justify-end flex-1 min-w-48" data-v-1619e0f4${_scopeId2}><span class="text-gray-300" data-v-1619e0f4${_scopeId2}>-Rp${ssrInterpolate(unref(payWithCoin))}</span></div></div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "flex justify-end" }, [
                          createVNode("div", { class: "flex items-center gap-5" }, [
                            createVNode(_component_UCheckbox, {
                              modelValue: unref(useCoin),
                              "onUpdate:modelValue": ($event) => isRef(useCoin) ? useCoin.value = $event : null,
                              disabled: !unref(session).profile.balance || unref(statusCoin) === "pending",
                              onChange: handlePayWithCoin
                            }, {
                              label: withCtx(() => [
                                createVNode("div", { class: "flex gap-2" }, [
                                  createVNode(_component_IconCoin),
                                  createVNode("span", { class: "font-medium" }, "Koin Syopo")
                                ])
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                            createVNode("span", { class: "font-medium text-sm text-gray-500" }, " Saldo Koin " + toDisplayString(unref(session).profile.balance ? unref(coinBalance) : "Tidak Cukup"), 1),
                            createVNode("div", { class: "flex justify-end flex-1 min-w-48" }, [
                              createVNode("span", { class: "text-gray-300" }, "-Rp" + toDisplayString(unref(payWithCoin)), 1)
                            ])
                          ])
                        ])
                      ];
                    }
                  }),
                  footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    var _a2, _b2, _c2, _d2, _e2, _f2, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
                    if (_push3) {
                      _push3(`<div class="flex justify-end item" data-v-1619e0f4${_scopeId2}><div class="flex gap-4" data-v-1619e0f4${_scopeId2}><div data-v-1619e0f4${_scopeId2}><div class="flex items-center gap-1" data-v-1619e0f4${_scopeId2}><span data-v-1619e0f4${_scopeId2}>Total (${ssrInterpolate((_c2 = (_b2 = (_a2 = unref(data)) == null ? void 0 : _a2.data) == null ? void 0 : _b2.items) == null ? void 0 : _c2.length)} produk):</span><span class="text-primary font-normal text-2xl" data-v-1619e0f4${_scopeId2}> Rp${ssrInterpolate(unref(totalPrice))}</span></div>`);
                      if (((_f2 = (_e2 = (_d2 = unref(data).value) == null ? void 0 : _d2.data) == null ? void 0 : _e2.cart) == null ? void 0 : _f2.voucher_cashback) || ((_i = (_h = (_g = unref(data).value) == null ? void 0 : _g.data) == null ? void 0 : _h.cart) == null ? void 0 : _i.voucher_value)) {
                        _push3(`<div class="flex gap-6 text-sm font-normal justify-end" data-v-1619e0f4${_scopeId2}><span data-v-1619e0f4${_scopeId2}>Hemat</span><span class="text-primary" data-v-1619e0f4${_scopeId2}>${ssrInterpolate(unref(totalDiscount))}</span></div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div>`);
                      _push3(ssrRenderComponent(_component_UButton, {
                        class: "px-9 min-w-52 justify-center",
                        disabled: unref(statusCoin) === "pending",
                        onClick: handleCheckout
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`Checkout`);
                          } else {
                            return [
                              createTextVNode("Checkout")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                      _push3(`</div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "flex justify-end item" }, [
                          createVNode("div", { class: "flex gap-4" }, [
                            createVNode("div", null, [
                              createVNode("div", { class: "flex items-center gap-1" }, [
                                createVNode("span", null, "Total (" + toDisplayString((_l = (_k = (_j = unref(data)) == null ? void 0 : _j.data) == null ? void 0 : _k.items) == null ? void 0 : _l.length) + " produk):", 1),
                                createVNode("span", { class: "text-primary font-normal text-2xl" }, " Rp" + toDisplayString(unref(totalPrice)), 1)
                              ]),
                              ((_o = (_n = (_m = unref(data).value) == null ? void 0 : _m.data) == null ? void 0 : _n.cart) == null ? void 0 : _o.voucher_cashback) || ((_r = (_q = (_p = unref(data).value) == null ? void 0 : _p.data) == null ? void 0 : _q.cart) == null ? void 0 : _r.voucher_value) ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "flex gap-6 text-sm font-normal justify-end"
                              }, [
                                createVNode("span", null, "Hemat"),
                                createVNode("span", { class: "text-primary" }, toDisplayString(unref(totalDiscount)), 1)
                              ])) : createCommentVNode("", true)
                            ]),
                            createVNode(_component_UButton, {
                              class: "px-9 min-w-52 justify-center",
                              disabled: unref(statusCoin) === "pending",
                              onClick: handleCheckout
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Checkout")
                              ]),
                              _: 1
                            }, 8, ["disabled"])
                          ])
                        ])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_ModalVoucher, {
                  modelValue: unref(openVoucher),
                  "onUpdate:modelValue": ($event) => isRef(openVoucher) ? openVoucher.value = $event : null
                }, null, _parent2, _scopeId));
                _push2(`<!--]-->`);
              }
              _push2(`<!--]-->`);
            }
          } else {
            return [
              unref(status) === "pending" ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex gap-4 items-center justify-center min-h-96"
              }, [
                createVNode(_component_IconLoading, { class: "w-12 text-primary" }),
                createVNode("p", null, "Loading...")
              ])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                !((_f = (_e = (_d = unref(data)) == null ? void 0 : _d.data) == null ? void 0 : _e.items) == null ? void 0 : _f.length) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "flex gap-4 items-center justify-center min-h-96 flex-col"
                }, [
                  createVNode(_component_UIcon, {
                    name: "heroicons:archive-box-x-mark",
                    class: "w-36 h-36 text-black/30"
                  }),
                  createVNode("p", { class: "text-2xl text-black/30 text-center" }, " Tidak ada Produk di Keranjang ")
                ])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                  createVNode(_component_UCard, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "cart-header" }, [
                        createVNode("div", { class: "w-[46%]" }, "Produk"),
                        createVNode("div", { class: "text-center w-[15%]" }, "Harga Satuan"),
                        createVNode("div", { class: "text-center w-[15%]" }, "Kuantitas"),
                        createVNode("div", { class: "text-center w-[15%]" }, "Total Harga"),
                        createVNode("div", { class: "text-center w-[10%]" }, "Aksi")
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UCard, null, {
                    default: withCtx(() => {
                      var _a2, _b2;
                      return [
                        createVNode("div", { class: "grid grid-cols-1 divide-y" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList((_b2 = (_a2 = unref(data)) == null ? void 0 : _a2.data) == null ? void 0 : _b2.items, (item) => {
                            return openBlock(), createBlock(_component_FeatureCartProductItem, {
                              key: `product-${item.uuid}`,
                              item
                            }, null, 8, ["item"]);
                          }), 128))
                        ])
                      ];
                    }),
                    _: 1
                  }),
                  createVNode(_component_UCard, {
                    ui: {
                      header: {
                        padding: paddingCheckoutFooter
                      },
                      body: {
                        padding: paddingCheckoutFooter
                      },
                      footer: {
                        padding: paddingCheckoutFooter
                      },
                      divide: "divide-dashed"
                    }
                  }, {
                    header: withCtx(() => [
                      createVNode("div", { class: "flex justify-end gap-40" }, [
                        createVNode("div", { class: "flex gap-1 items-center font-medium" }, [
                          createVNode(_component_IconVoucher),
                          createTextVNode(" Voucher Syopo ")
                        ]),
                        createVNode(_component_UButton, {
                          variant: "link",
                          color: "blue",
                          disabled: unref(statusCoin) === "pending",
                          onClick: ($event) => openVoucher.value = true
                        }, {
                          default: withCtx(() => {
                            var _a2, _b2, _c2, _d2, _e2, _f2, _g, _h;
                            return [
                              createTextVNode(toDisplayString(((_d2 = (_c2 = (_b2 = (_a2 = unref(data)) == null ? void 0 : _a2.data) == null ? void 0 : _b2.cart) == null ? void 0 : _c2.voucher) == null ? void 0 : _d2.code) ? `${(_h = (_g = (_f2 = (_e2 = unref(data)) == null ? void 0 : _e2.data) == null ? void 0 : _f2.cart) == null ? void 0 : _g.voucher) == null ? void 0 : _h.code} - Klik untuk mengganti` : "Gunakan/ masukkan kode"), 1)
                            ];
                          }),
                          _: 1
                        }, 8, ["disabled", "onClick"])
                      ])
                    ]),
                    default: withCtx(() => [
                      createVNode("div", { class: "flex justify-end" }, [
                        createVNode("div", { class: "flex items-center gap-5" }, [
                          createVNode(_component_UCheckbox, {
                            modelValue: unref(useCoin),
                            "onUpdate:modelValue": ($event) => isRef(useCoin) ? useCoin.value = $event : null,
                            disabled: !unref(session).profile.balance || unref(statusCoin) === "pending",
                            onChange: handlePayWithCoin
                          }, {
                            label: withCtx(() => [
                              createVNode("div", { class: "flex gap-2" }, [
                                createVNode(_component_IconCoin),
                                createVNode("span", { class: "font-medium" }, "Koin Syopo")
                              ])
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                          createVNode("span", { class: "font-medium text-sm text-gray-500" }, " Saldo Koin " + toDisplayString(unref(session).profile.balance ? unref(coinBalance) : "Tidak Cukup"), 1),
                          createVNode("div", { class: "flex justify-end flex-1 min-w-48" }, [
                            createVNode("span", { class: "text-gray-300" }, "-Rp" + toDisplayString(unref(payWithCoin)), 1)
                          ])
                        ])
                      ])
                    ]),
                    footer: withCtx(() => {
                      var _a2, _b2, _c2, _d2, _e2, _f2, _g, _h, _i;
                      return [
                        createVNode("div", { class: "flex justify-end item" }, [
                          createVNode("div", { class: "flex gap-4" }, [
                            createVNode("div", null, [
                              createVNode("div", { class: "flex items-center gap-1" }, [
                                createVNode("span", null, "Total (" + toDisplayString((_c2 = (_b2 = (_a2 = unref(data)) == null ? void 0 : _a2.data) == null ? void 0 : _b2.items) == null ? void 0 : _c2.length) + " produk):", 1),
                                createVNode("span", { class: "text-primary font-normal text-2xl" }, " Rp" + toDisplayString(unref(totalPrice)), 1)
                              ]),
                              ((_f2 = (_e2 = (_d2 = unref(data).value) == null ? void 0 : _d2.data) == null ? void 0 : _e2.cart) == null ? void 0 : _f2.voucher_cashback) || ((_i = (_h = (_g = unref(data).value) == null ? void 0 : _g.data) == null ? void 0 : _h.cart) == null ? void 0 : _i.voucher_value) ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "flex gap-6 text-sm font-normal justify-end"
                              }, [
                                createVNode("span", null, "Hemat"),
                                createVNode("span", { class: "text-primary" }, toDisplayString(unref(totalDiscount)), 1)
                              ])) : createCommentVNode("", true)
                            ]),
                            createVNode(_component_UButton, {
                              class: "px-9 min-w-52 justify-center",
                              disabled: unref(statusCoin) === "pending",
                              onClick: handleCheckout
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Checkout")
                              ]),
                              _: 1
                            }, 8, ["disabled"])
                          ])
                        ])
                      ];
                    }),
                    _: 1
                  }, 8, ["ui"]),
                  createVNode(_component_ModalVoucher, {
                    modelValue: unref(openVoucher),
                    "onUpdate:modelValue": ($event) => isRef(openVoucher) ? openVoucher.value = $event : null
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ], 64))
              ], 64))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cart = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1619e0f4"]]);

export { cart as default };
//# sourceMappingURL=cart-DrK5k8gs.mjs.map
