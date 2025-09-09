import { useModel, ref, mergeProps, withCtx, createTextVNode, unref, createVNode, isRef, createBlock, openBlock, Fragment, renderList, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttrs, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc, d as useNuxtApp, r as refreshNuxtData, b as __nuxt_component_5$1, f as __nuxt_component_3$2 } from './server.mjs';
import { _ as __nuxt_component_3 } from './Modal-DiMSs998.mjs';
import { _ as __nuxt_component_5 } from './Card-DbWg7JF8.mjs';
import { _ as __nuxt_component_3$1 } from './Input-BSkwWT7v.mjs';
import { _ as __nuxt_component_5$2 } from './Loading-DEfyuitU.mjs';
import { _ as __nuxt_component_0 } from './Radio-DPPbThYm.mjs';
import { a as formatRb, f as formatNumber } from './number.utils-vPnlR88w.mjs';
import { differenceInDays } from 'date-fns';
import { u as useApi } from './use-api-DLZ2CTc2.mjs';
import { u as useSubmit } from './use-submit-TWB9IMR2.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "21",
    height: "20",
    viewBox: "0 0 21 20",
    fill: "none"
  }, _attrs))}><mask id="mask0_7_6604" style="${ssrRenderStyle({ "mask-type": "luminance" })}" maskUnits="userSpaceOnUse" x="0" y="3" width="18" height="14"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.953125 3.63672H17.3168V5.74581C17.0735 5.85189 16.8664 6.02666 16.721 6.2487C16.5756 6.47074 16.4981 6.73039 16.4981 6.99581C16.4981 7.26123 16.5756 7.52088 16.721 7.74292C16.8664 7.96496 17.0735 8.13973 17.3168 8.24581V8.83672C17.0735 8.94279 16.8664 9.11757 16.721 9.33961C16.5756 9.56165 16.4981 9.8213 16.4981 10.0867C16.4981 10.3521 16.5756 10.6118 16.721 10.8338C16.8664 11.0559 17.0735 11.2306 17.3168 11.3367V11.9276C17.0735 12.0337 16.8664 12.2085 16.721 12.4305C16.5756 12.6526 16.4981 12.9122 16.4981 13.1776C16.4981 13.443 16.5756 13.7027 16.721 13.9247C16.8664 14.1468 17.0735 14.3216 17.3168 14.4276V16.364H0.953125V14.4367C1.19643 14.3306 1.40348 14.1559 1.5489 13.9338C1.69432 13.7118 1.77178 13.4521 1.77178 13.1867C1.77178 12.9213 1.69432 12.6616 1.5489 12.4396C1.40348 12.2176 1.19643 12.0428 0.953125 11.9367V11.3458C1.19643 11.2397 1.40348 11.065 1.5489 10.8429C1.69432 10.6209 1.77178 10.3612 1.77178 10.0958C1.77178 9.83039 1.69432 9.57074 1.5489 9.3487C1.40348 9.12666 1.19643 8.95189 0.953125 8.84581V8.2549C1.19643 8.14882 1.40348 7.97405 1.5489 7.75201C1.69432 7.52997 1.77178 7.27032 1.77178 7.0049C1.77178 6.73948 1.69432 6.47983 1.5489 6.25779C1.40348 6.03575 1.19643 5.86098 0.953125 5.7549V3.63672Z" fill="white"></path></mask><g mask="url(#mask0_7_6604)"><path d="M17.3157 3.63761H18.2248V2.72852H17.3157V3.63761ZM0.95206 3.63761V2.72852H0.0429688V3.63761H0.95206ZM17.3157 5.7467L17.6793 6.58306L18.2248 6.3467V5.7467H17.3157ZM17.3157 8.2467H18.2248V7.65579L17.6793 7.41942L17.3157 8.2467ZM17.3157 8.83761L17.6793 9.67397L18.2248 9.43761V8.83761H17.3157ZM17.3157 11.3376H18.2248V10.7467L17.6793 10.5103L17.3157 11.3376ZM17.3157 11.9285L17.6793 12.7649L18.2248 12.5285V11.9285H17.3157ZM17.3157 14.4285H18.2248V13.8376L17.6793 13.6012L17.3157 14.4285ZM17.3157 16.3649V17.274H18.2248V16.3649H17.3157ZM0.95206 16.3649H0.0429688V17.274H0.95206V16.3649ZM0.95206 14.4376L0.588423 13.6012L0.0429688 13.8376V14.4376H0.95206ZM0.95206 11.9376H0.0429688V12.5285L0.588423 12.7649L0.95206 11.9376ZM0.95206 11.3467L0.588423 10.5103L0.0429688 10.7467V11.3467H0.95206ZM0.95206 8.8467H0.0429688V9.43761L0.588423 9.67397L0.95206 8.8467ZM0.95206 8.25579L0.588423 7.41942L0.0429688 7.65579V8.25579H0.95206ZM0.95206 5.75579H0.0429688V6.3467L0.588423 6.58306L0.95206 5.75579ZM17.3157 2.72852H0.95206V4.5467H17.3157V2.72852ZM18.2248 5.7467V3.63761H16.4066V5.7467H18.2248ZM17.4066 7.00124C17.4066 6.81942 17.5157 6.65579 17.6793 6.58306L16.9521 4.91942C16.5469 5.09623 16.2022 5.38734 15.96 5.7571C15.7178 6.12686 15.5887 6.55922 15.5884 7.00124H17.4066ZM17.6793 7.41942C17.598 7.38394 17.5289 7.32544 17.4804 7.25113C17.432 7.17682 17.4063 7.08996 17.4066 7.00124H15.5884C15.5884 7.93761 16.1521 8.72852 16.9521 9.09215L17.6793 7.41942ZM18.2248 8.83761V8.2467H16.4066V8.83761H18.2248ZM17.4066 10.0922C17.4066 9.91033 17.5157 9.7467 17.6793 9.67397L16.9521 8.01033C16.5469 8.18714 16.2022 8.47825 15.96 8.84801C15.7178 9.21777 15.5887 9.65013 15.5884 10.0922H17.4066ZM17.6793 10.5103C17.598 10.4748 17.5289 10.4163 17.4804 10.342C17.432 10.2677 17.4063 10.1809 17.4066 10.0922H15.5884C15.5884 11.0285 16.1521 11.8194 16.9521 12.1831L17.6793 10.5103ZM18.2248 11.9285V11.3376H16.4066V11.9285H18.2248ZM17.4066 13.1831C17.4066 13.0012 17.5157 12.8376 17.6793 12.7649L16.9521 11.1012C16.5469 11.2781 16.2022 11.5692 15.96 11.9389C15.7178 12.3087 15.5887 12.741 15.5884 13.1831H17.4066ZM17.6793 13.6012C17.598 13.5658 17.5289 13.5073 17.4804 13.4329C17.432 13.3586 17.4063 13.2718 17.4066 13.1831H15.5884C15.5884 14.1194 16.1521 14.9103 16.9521 15.274L17.6793 13.6012ZM18.2248 16.3649V14.4285H16.4066V16.3649H18.2248ZM0.95206 17.274H17.3157V15.4558H0.95206V17.274ZM0.0429688 14.4376V16.3649H1.86115V14.4376H0.0429688ZM1.3157 15.2649C1.72082 15.0881 2.06558 14.797 2.30778 14.4272C2.54998 14.0574 2.6791 13.6251 2.67933 13.1831H0.861151C0.861459 13.2718 0.835802 13.3586 0.78734 13.4329C0.738878 13.5073 0.669731 13.5658 0.588423 13.6012L1.3157 15.2649ZM2.67933 13.1831C2.68088 12.7395 2.55259 12.3052 2.31028 11.9336C2.06797 11.5621 1.72224 11.2696 1.3157 11.0922L0.588423 12.7649C0.75206 12.8376 0.861151 13.0012 0.861151 13.1831H2.67933ZM0.0429688 11.3467V11.9376H1.86115V11.3467H0.0429688ZM0.861151 10.0922C0.861459 10.1809 0.835802 10.2677 0.78734 10.342C0.738878 10.4163 0.669731 10.4748 0.588423 10.5103L1.3157 12.174C1.72082 11.9972 2.06558 11.7061 2.30778 11.3363C2.54998 10.9665 2.6791 10.5342 2.67933 10.0922H0.861151ZM0.588423 9.67397C0.75206 9.7467 0.861151 9.91033 0.861151 10.0922H2.67933C2.68088 9.64858 2.55259 9.21426 2.31028 8.84272C2.06797 8.47118 1.72224 8.17867 1.3157 8.00124L0.588423 9.68306V9.67397ZM0.0429688 8.25579V8.8467H1.86115V8.25579H0.0429688ZM0.861151 7.00124C0.861459 7.08996 0.835802 7.17682 0.78734 7.25113C0.738878 7.32544 0.669731 7.38394 0.588423 7.41942L1.3157 9.08306C1.72082 8.90625 2.06558 8.61515 2.30778 8.24539C2.54998 7.87563 2.6791 7.44326 2.67933 7.00124H0.861151ZM0.588423 6.58306C0.75206 6.65579 0.861151 6.81942 0.861151 7.00124H2.67933C2.68088 6.55768 2.55259 6.12335 2.31028 5.75181C2.06797 5.38027 1.72224 5.08776 1.3157 4.91033L0.588423 6.59215V6.58306ZM0.0429688 3.63761V5.75579H1.86115V3.63761H0.0429688Z" fill="#EE4D2D"></path></g><path d="M5.94531 14.7086H6.72713V13.2541H5.94531V14.7086ZM5.94531 11.9814H6.72713V10.5268H5.94531V11.9814ZM5.94531 9.25408H6.72713V7.79954H5.94531V9.25408ZM5.94531 6.52681H6.72713V5.07227H5.94531V6.52681Z" fill="#EE4D2D"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon/Voucher.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_9 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "Voucher",
  __ssrInlineRender: true,
  props: {
    "modelValue": {
      type: Boolean
    },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const isOpen = useModel(__props, "modelValue");
    const nuxtApp = useNuxtApp();
    const temporaryVoucher = ref("");
    const newVoucher = ref("");
    const { data, status } = useApi("/server/api/cart/get-voucher", {
      key: "voucher-list",
      getCachedData() {
        var _a, _b;
        return ((_a = nuxtApp.payload.data) == null ? void 0 : _a["voucher-list"]) || ((_b = nuxtApp.static.data) == null ? void 0 : _b["voucher-list"]);
      }
    });
    const { execute: applyVoucher, status: statusApply } = useSubmit(
      "/server/api/cart/apply-voucher",
      {
        onResponse({ response }) {
          if (response.ok) {
            handleClose();
            refreshNuxtData();
          }
        }
      }
    );
    function getDiffDay(endDate) {
      const _endDate = new Date(endDate);
      const today = /* @__PURE__ */ new Date();
      return differenceInDays(_endDate, today);
    }
    function handleClose() {
      isOpen.value = false;
      newVoucher.value = "";
      temporaryVoucher.value = "";
    }
    function handleUseVoucher() {
      applyVoucher({
        voucher_code: temporaryVoucher.value
      });
    }
    function handlePrivateVoucher() {
      if (!newVoucher.value) return;
      applyVoucher({
        voucher_code: newVoucher.value
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UModal = __nuxt_component_3;
      const _component_UCard = __nuxt_component_5;
      const _component_UInput = __nuxt_component_3$1;
      const _component_UButton = __nuxt_component_5$1;
      const _component_IconLoading = __nuxt_component_5$2;
      const _component_UIcon = __nuxt_component_3$2;
      const _component_URadio = __nuxt_component_0;
      _push(ssrRenderComponent(_component_UModal, mergeProps({
        modelValue: isOpen.value,
        "onUpdate:modelValue": ($event) => isOpen.value = $event,
        "prevent-close": "",
        ui: {
          width: "sm:max-w-[38rem]"
        }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, { ui: {
              footer: {
                padding: "py-3 sm:py-3"
              }
            } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(`<div class="flex flex-col gap-5"${_scopeId2}><p class="text-xl"${_scopeId2}>Pilih Voucher Syopo</p><div${_scopeId2}><div class="bg-[#F8F8F8] p-4 flex gap-3 items-center"${_scopeId2}><span class="text-sm text-black/80"${_scopeId2}>Tambah Voucher</span>`);
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(newVoucher),
                    "onUpdate:modelValue": ($event) => isRef(newVoucher) ? newVoucher.value = $event : null,
                    placeholder: "Masukkan kode Voucher",
                    class: "flex-1",
                    size: "lg"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "white",
                    size: "sm",
                    class: "py-2 h-10",
                    loading: unref(statusApply) === "pending",
                    onClick: handlePrivateVoucher
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` PAKAI `);
                      } else {
                        return [
                          createTextVNode(" PAKAI ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                  if (unref(status) === "pending") {
                    _push3(`<div class="py-4 flex gap-4 items-center justify-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_IconLoading, { class: "text-primary w-6" }, null, _parent3, _scopeId2));
                    _push3(`<p${_scopeId2}>Loading...</p></div>`);
                  } else {
                    _push3(`<!--[-->`);
                    ssrRenderList((_a = unref(data)) == null ? void 0 : _a.data, (voucher) => {
                      _push3(`<label class="shadow border border-black/5 flex" role="button"${_scopeId2}><div class="bg-primary aspect-[1/1] w-32 flex justify-center items-center flex-col text-white"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_UIcon, {
                        name: "i-heroicons:receipt-percent",
                        class: "w-8 h-8"
                      }, null, _parent3, _scopeId2));
                      _push3(`<p class="mt-2 text-xs uppercase"${_scopeId2}>${ssrInterpolate(voucher.code)}</p></div><div class="p-5 flex-1 flex justify-between items-center"${_scopeId2}><div class="flex flex-col"${_scopeId2}><p class="text-2xl font-medium text-black/80"${_scopeId2}>${ssrInterpolate(voucher.voucher_type === "discount" ? "Diskon" : "Cashback")} ${ssrInterpolate(voucher.discount_cashback_type === "percentage" ? `${voucher.discount_cashback_value}%` : ("formatRb" in _ctx ? _ctx.formatRb : unref(formatRb))(voucher.discount_cashback_value))}</p>`);
                      if (voucher.discount_cashback_type === "percentage") {
                        _push3(`<p class="text-xs text-black/55"${_scopeId2}> Maksimum Rp${ssrInterpolate(("formatNumber" in _ctx ? _ctx.formatNumber : unref(formatNumber))(voucher.discount_cashback_max))}</p>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`<span class="mt-2 text-black/55 text-xs"${_scopeId2}> Berakhir dlm: ${ssrInterpolate(getDiffDay(voucher.end_date))} hari </span><span class="text-primary text-sm mt-1"${_scopeId2}>${ssrInterpolate(voucher.seller.store_name)}</span></div>`);
                      _push3(ssrRenderComponent(_component_URadio, {
                        modelValue: unref(temporaryVoucher),
                        "onUpdate:modelValue": ($event) => isRef(temporaryVoucher) ? temporaryVoucher.value = $event : null,
                        value: voucher.code
                      }, null, _parent3, _scopeId2));
                      _push3(`</div></label>`);
                    });
                    _push3(`<!--]-->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col gap-5" }, [
                      createVNode("p", { class: "text-xl" }, "Pilih Voucher Syopo"),
                      createVNode("div", null, [
                        createVNode("div", { class: "bg-[#F8F8F8] p-4 flex gap-3 items-center" }, [
                          createVNode("span", { class: "text-sm text-black/80" }, "Tambah Voucher"),
                          createVNode(_component_UInput, {
                            modelValue: unref(newVoucher),
                            "onUpdate:modelValue": ($event) => isRef(newVoucher) ? newVoucher.value = $event : null,
                            placeholder: "Masukkan kode Voucher",
                            class: "flex-1",
                            size: "lg"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_UButton, {
                            color: "white",
                            size: "sm",
                            class: "py-2 h-10",
                            loading: unref(statusApply) === "pending",
                            onClick: handlePrivateVoucher
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" PAKAI ")
                            ]),
                            _: 1
                          }, 8, ["loading"])
                        ])
                      ]),
                      unref(status) === "pending" ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "py-4 flex gap-4 items-center justify-center"
                      }, [
                        createVNode(_component_IconLoading, { class: "text-primary w-6" }),
                        createVNode("p", null, "Loading...")
                      ])) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList((_b = unref(data)) == null ? void 0 : _b.data, (voucher) => {
                        return openBlock(), createBlock("label", {
                          key: voucher.code,
                          class: "shadow border border-black/5 flex",
                          role: "button"
                        }, [
                          createVNode("div", { class: "bg-primary aspect-[1/1] w-32 flex justify-center items-center flex-col text-white" }, [
                            createVNode(_component_UIcon, {
                              name: "i-heroicons:receipt-percent",
                              class: "w-8 h-8"
                            }),
                            createVNode("p", { class: "mt-2 text-xs uppercase" }, toDisplayString(voucher.code), 1)
                          ]),
                          createVNode("div", { class: "p-5 flex-1 flex justify-between items-center" }, [
                            createVNode("div", { class: "flex flex-col" }, [
                              createVNode("p", { class: "text-2xl font-medium text-black/80" }, toDisplayString(voucher.voucher_type === "discount" ? "Diskon" : "Cashback") + " " + toDisplayString(voucher.discount_cashback_type === "percentage" ? `${voucher.discount_cashback_value}%` : ("formatRb" in _ctx ? _ctx.formatRb : unref(formatRb))(voucher.discount_cashback_value)), 1),
                              voucher.discount_cashback_type === "percentage" ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-xs text-black/55"
                              }, " Maksimum Rp" + toDisplayString(("formatNumber" in _ctx ? _ctx.formatNumber : unref(formatNumber))(voucher.discount_cashback_max)), 1)) : createCommentVNode("", true),
                              createVNode("span", { class: "mt-2 text-black/55 text-xs" }, " Berakhir dlm: " + toDisplayString(getDiffDay(voucher.end_date)) + " hari ", 1),
                              createVNode("span", { class: "text-primary text-sm mt-1" }, toDisplayString(voucher.seller.store_name), 1)
                            ]),
                            createVNode(_component_URadio, {
                              modelValue: unref(temporaryVoucher),
                              "onUpdate:modelValue": ($event) => isRef(temporaryVoucher) ? temporaryVoucher.value = $event : null,
                              value: voucher.code
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "value"])
                          ])
                        ]);
                      }), 128))
                    ])
                  ];
                }
              }),
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex justify-end gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "white",
                    onClick: handleClose
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` NANTI SAJA `);
                      } else {
                        return [
                          createTextVNode(" NANTI SAJA ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    class: "min-w-[140px] justify-center",
                    loading: unref(statusApply) === "pending",
                    onClick: handleUseVoucher
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` OK `);
                      } else {
                        return [
                          createTextVNode(" OK ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex justify-end gap-2" }, [
                      createVNode(_component_UButton, {
                        color: "white",
                        onClick: handleClose
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" NANTI SAJA ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UButton, {
                        class: "min-w-[140px] justify-center",
                        loading: unref(statusApply) === "pending",
                        onClick: handleUseVoucher
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" OK ")
                        ]),
                        _: 1
                      }, 8, ["loading"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, { ui: {
                footer: {
                  padding: "py-3 sm:py-3"
                }
              } }, {
                default: withCtx(() => {
                  var _a;
                  return [
                    createVNode("div", { class: "flex flex-col gap-5" }, [
                      createVNode("p", { class: "text-xl" }, "Pilih Voucher Syopo"),
                      createVNode("div", null, [
                        createVNode("div", { class: "bg-[#F8F8F8] p-4 flex gap-3 items-center" }, [
                          createVNode("span", { class: "text-sm text-black/80" }, "Tambah Voucher"),
                          createVNode(_component_UInput, {
                            modelValue: unref(newVoucher),
                            "onUpdate:modelValue": ($event) => isRef(newVoucher) ? newVoucher.value = $event : null,
                            placeholder: "Masukkan kode Voucher",
                            class: "flex-1",
                            size: "lg"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_UButton, {
                            color: "white",
                            size: "sm",
                            class: "py-2 h-10",
                            loading: unref(statusApply) === "pending",
                            onClick: handlePrivateVoucher
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" PAKAI ")
                            ]),
                            _: 1
                          }, 8, ["loading"])
                        ])
                      ]),
                      unref(status) === "pending" ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "py-4 flex gap-4 items-center justify-center"
                      }, [
                        createVNode(_component_IconLoading, { class: "text-primary w-6" }),
                        createVNode("p", null, "Loading...")
                      ])) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList((_a = unref(data)) == null ? void 0 : _a.data, (voucher) => {
                        return openBlock(), createBlock("label", {
                          key: voucher.code,
                          class: "shadow border border-black/5 flex",
                          role: "button"
                        }, [
                          createVNode("div", { class: "bg-primary aspect-[1/1] w-32 flex justify-center items-center flex-col text-white" }, [
                            createVNode(_component_UIcon, {
                              name: "i-heroicons:receipt-percent",
                              class: "w-8 h-8"
                            }),
                            createVNode("p", { class: "mt-2 text-xs uppercase" }, toDisplayString(voucher.code), 1)
                          ]),
                          createVNode("div", { class: "p-5 flex-1 flex justify-between items-center" }, [
                            createVNode("div", { class: "flex flex-col" }, [
                              createVNode("p", { class: "text-2xl font-medium text-black/80" }, toDisplayString(voucher.voucher_type === "discount" ? "Diskon" : "Cashback") + " " + toDisplayString(voucher.discount_cashback_type === "percentage" ? `${voucher.discount_cashback_value}%` : ("formatRb" in _ctx ? _ctx.formatRb : unref(formatRb))(voucher.discount_cashback_value)), 1),
                              voucher.discount_cashback_type === "percentage" ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-xs text-black/55"
                              }, " Maksimum Rp" + toDisplayString(("formatNumber" in _ctx ? _ctx.formatNumber : unref(formatNumber))(voucher.discount_cashback_max)), 1)) : createCommentVNode("", true),
                              createVNode("span", { class: "mt-2 text-black/55 text-xs" }, " Berakhir dlm: " + toDisplayString(getDiffDay(voucher.end_date)) + " hari ", 1),
                              createVNode("span", { class: "text-primary text-sm mt-1" }, toDisplayString(voucher.seller.store_name), 1)
                            ]),
                            createVNode(_component_URadio, {
                              modelValue: unref(temporaryVoucher),
                              "onUpdate:modelValue": ($event) => isRef(temporaryVoucher) ? temporaryVoucher.value = $event : null,
                              value: voucher.code
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "value"])
                          ])
                        ]);
                      }), 128))
                    ])
                  ];
                }),
                footer: withCtx(() => [
                  createVNode("div", { class: "flex justify-end gap-2" }, [
                    createVNode(_component_UButton, {
                      color: "white",
                      onClick: handleClose
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" NANTI SAJA ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UButton, {
                      class: "min-w-[140px] justify-center",
                      loading: unref(statusApply) === "pending",
                      onClick: handleUseVoucher
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" OK ")
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ])
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modal/Voucher.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { __nuxt_component_9 as _, _sfc_main as a };
//# sourceMappingURL=Voucher-_I01_X4q.mjs.map
