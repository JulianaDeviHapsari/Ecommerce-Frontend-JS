import { _ as _sfc_main$2 } from './Tabs-B1IJpfws.mjs';
import { _ as __nuxt_component_3 } from './Input-BSkwWT7v.mjs';
import { _ as __nuxt_component_5 } from './Card-DbWg7JF8.mjs';
import { K as useNuxtData, b as __nuxt_component_5$1, f as __nuxt_component_3$1, a as __nuxt_component_0$5, r as refreshNuxtData } from './server.mjs';
import { _ as __nuxt_component_2 } from './Shop-B22w5_LP.mjs';
import { _ as _sfc_main$4 } from './CardProduct-DviFAC0z.mjs';
import { ref, computed, watch, mergeProps, unref, isRef, withCtx, createVNode, createBlock, createCommentVNode, toDisplayString, openBlock, createTextVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0 } from './garansi-r93UczOs.mjs';
import { addDays, format, differenceInDays } from 'date-fns';
import { S as STATUS_ORDER } from './status-CG3FqbZq.mjs';
import { f as formatNumber } from './number.utils-vPnlR88w.mjs';
import { _ as __nuxt_component_0 } from './Loading-ylJ4hnGQ.mjs';
import { _ as _sfc_main$3 } from './Review-BxDTaZFi.mjs';
import { u as useApi } from './use-api-DLZ2CTc2.mjs';
import { r as refDebounced } from './index-CjTnKh2l.mjs';
import './Tabs-DKAzzVlP.mjs';
import './keyboard-Duq8EHr3.mjs';
import './use-resolve-button-type-DOOP2SMg.mjs';
import './hidden-Dc_fFmis.mjs';
import './focus-management-vHH7q6nP.mjs';
import './micro-task-B6uncIso.mjs';
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
import 'tailwind-merge';
import './useFormGroup-B6xiYqr7.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './NuxtImg-DLumQ5km.mjs';
import './Loading-DEfyuitU.mjs';
import './Modal-DiMSs998.mjs';
import './portal-RXXuCQxI.mjs';
import './use-outside-click-BHqYmLlt.mjs';
import './active-element-history-Cer4cSOw.mjs';
import './open-closed-CJlEqXqx.mjs';
import './Rating-CzUxWdt7.mjs';
import './FormGroup-DpovdzGZ.mjs';
import './Textarea-nJripv25.mjs';
import './Media-UQZ5EApb.mjs';
import './Checkbox-Cf2pHysF.mjs';
import '@vuelidate/core';
import '@vuelidate/validators';
import './use-masking-DZFcOT6B.mjs';

const _sfc_main$1 = {
  __name: "CardOrder",
  __ssrInlineRender: true,
  props: {
    order: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["review"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const totalPrice = computed(() => {
      var _a;
      return formatNumber(((_a = props.order) == null ? void 0 : _a.total) || 0);
    });
    const lastReviewDate = computed(() => {
      var _a, _b, _c, _d;
      if (((_b = (_a = props.order) == null ? void 0 : _a.last_status) == null ? void 0 : _b.status) !== "done") return "";
      const doneDate = new Date((_d = (_c = props.order) == null ? void 0 : _c.last_status) == null ? void 0 : _d.created_at);
      const targetDate = addDays(doneDate, 1);
      return format(targetDate, "dd-MM-yyyy");
    });
    const canReview = computed(() => {
      var _a, _b;
      if (((_b = (_a = props.order) == null ? void 0 : _a.last_status) == null ? void 0 : _b.status) !== "done") return "";
      const endDate = new Date(lastReviewDate.value);
      const today = /* @__PURE__ */ new Date();
      const diffDays = differenceInDays(endDate, today);
      return diffDays === 0;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_5;
      const _component_UButton = __nuxt_component_5$1;
      const _component_IconShop = __nuxt_component_2;
      const _component_UIcon = __nuxt_component_3$1;
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_FeatureProfileOrderCardProduct = _sfc_main$4;
      _push(ssrRenderComponent(_component_UCard, mergeProps({ ui: {
        base: "text-sm text-black/85",
        divide: "divide-dashed",
        footer: {
          background: "bg-yellow-50/30"
        }
      } }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v;
          if (_push2) {
            _push2(`<div class="flex justify-between gap-4 items-center"${_scopeId}><div class="flex gap-2 items-center"${_scopeId}><span class="font-semibold"${_scopeId}>${ssrInterpolate((_b = (_a = __props.order) == null ? void 0 : _a.seller) == null ? void 0 : _b.store_name)}</span>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "white",
              size: "xs",
              to: `/shop/${(_d = (_c = __props.order) == null ? void 0 : _c.seller) == null ? void 0 : _d.username}`
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_IconShop, null, null, _parent3, _scopeId2));
                  _push3(` Kunjungi Toko `);
                } else {
                  return [
                    createVNode(_component_IconShop),
                    createTextVNode(" Kunjungi Toko ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="divide-x flex"${_scopeId}><div class="flex gap-2 items-center text-teal-500 pr-2"${_scopeId}>`);
            if (((_f = (_e = __props.order) == null ? void 0 : _e.last_status) == null ? void 0 : _f.status) === "on_delivery") {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-heroicons:truck",
                class: "w-4 h-4"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<span${_scopeId}>${ssrInterpolate((_h = (_g = __props.order) == null ? void 0 : _g.last_status) == null ? void 0 : _h.description)}</span></div><span class="text-primary pl-2"${_scopeId}>${ssrInterpolate((_k = unref(STATUS_ORDER)) == null ? void 0 : _k[(_j = (_i = __props.order) == null ? void 0 : _i.last_status) == null ? void 0 : _j.status])}</span></div></div><hr class="my-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              class: "space-y-3",
              to: `/my-account/orders/${__props.order.uuid}`
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b2;
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(((_a2 = __props.order) == null ? void 0 : _a2.items) || [], (product) => {
                    _push3(ssrRenderComponent(_component_FeatureProfileOrderCardProduct, {
                      key: `order-${__props.order.uuid}-product-${product.uuid}`,
                      item: product
                    }, null, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(((_b2 = __props.order) == null ? void 0 : _b2.items) || [], (product) => {
                      return openBlock(), createBlock(_component_FeatureProfileOrderCardProduct, {
                        key: `order-${__props.order.uuid}-product-${product.uuid}`,
                        item: product
                      }, null, 8, ["item"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "flex justify-between gap-4 items-center" }, [
                createVNode("div", { class: "flex gap-2 items-center" }, [
                  createVNode("span", { class: "font-semibold" }, toDisplayString((_m = (_l = __props.order) == null ? void 0 : _l.seller) == null ? void 0 : _m.store_name), 1),
                  createVNode(_component_UButton, {
                    color: "white",
                    size: "xs",
                    to: `/shop/${(_o = (_n = __props.order) == null ? void 0 : _n.seller) == null ? void 0 : _o.username}`
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_IconShop),
                      createTextVNode(" Kunjungi Toko ")
                    ]),
                    _: 1
                  }, 8, ["to"])
                ]),
                createVNode("div", { class: "divide-x flex" }, [
                  createVNode("div", { class: "flex gap-2 items-center text-teal-500 pr-2" }, [
                    ((_q = (_p = __props.order) == null ? void 0 : _p.last_status) == null ? void 0 : _q.status) === "on_delivery" ? (openBlock(), createBlock(_component_UIcon, {
                      key: 0,
                      name: "i-heroicons:truck",
                      class: "w-4 h-4"
                    })) : createCommentVNode("", true),
                    createVNode("span", null, toDisplayString((_s = (_r = __props.order) == null ? void 0 : _r.last_status) == null ? void 0 : _s.description), 1)
                  ]),
                  createVNode("span", { class: "text-primary pl-2" }, toDisplayString((_v = unref(STATUS_ORDER)) == null ? void 0 : _v[(_u = (_t = __props.order) == null ? void 0 : _t.last_status) == null ? void 0 : _u.status]), 1)
                ])
              ]),
              createVNode("hr", { class: "my-3" }),
              createVNode(_component_NuxtLink, {
                class: "space-y-3",
                to: `/my-account/orders/${__props.order.uuid}`
              }, {
                default: withCtx(() => {
                  var _a2;
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(((_a2 = __props.order) == null ? void 0 : _a2.items) || [], (product) => {
                      return openBlock(), createBlock(_component_FeatureProfileOrderCardProduct, {
                        key: `order-${__props.order.uuid}-product-${product.uuid}`,
                        item: product
                      }, null, 8, ["item"]);
                    }), 128))
                  ];
                }),
                _: 1
              }, 8, ["to"])
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
          if (_push2) {
            _push2(`<div class="space-y-6"${_scopeId}><div class="flex justify-end"${_scopeId}><div class="flex gap-2 items-center"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} class="h-4 w-4"${_scopeId}><span class="text-black/80"${_scopeId}>Total Pesanan:</span><span class="text-primary text-2xl"${_scopeId}>Rp${ssrInterpolate(unref(totalPrice))}</span></div></div>`);
            if (((_b = (_a = __props.order) == null ? void 0 : _a.last_status) == null ? void 0 : _b.status) === "done" && unref(canReview) && !((_e = (_d = (_c = __props.order) == null ? void 0 : _c.items) == null ? void 0 : _d[0]) == null ? void 0 : _e.is_reviewed)) {
              _push2(`<div class="flex justify-between items-center gap-4"${_scopeId}><div class="text-xs"${_scopeId}><p class="text-black/55"${_scopeId}> Nilai produk sebelum <span class="underline"${_scopeId}>${ssrInterpolate(unref(lastReviewDate))}</span></p><p class="text-primary"${_scopeId}>Nilai sekarang &amp; dapatkan 25 Koin Syopo!</p></div>`);
              _push2(ssrRenderComponent(_component_UButton, {
                label: "Nilai",
                class: "min-w-40 justify-center",
                onClick: ($event) => emit("review", __props.order)
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-6" }, [
                createVNode("div", { class: "flex justify-end" }, [
                  createVNode("div", { class: "flex gap-2 items-center" }, [
                    createVNode("img", {
                      src: _imports_0,
                      class: "h-4 w-4"
                    }),
                    createVNode("span", { class: "text-black/80" }, "Total Pesanan:"),
                    createVNode("span", { class: "text-primary text-2xl" }, "Rp" + toDisplayString(unref(totalPrice)), 1)
                  ])
                ]),
                ((_g = (_f = __props.order) == null ? void 0 : _f.last_status) == null ? void 0 : _g.status) === "done" && unref(canReview) && !((_j = (_i = (_h = __props.order) == null ? void 0 : _h.items) == null ? void 0 : _i[0]) == null ? void 0 : _j.is_reviewed) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "flex justify-between items-center gap-4"
                }, [
                  createVNode("div", { class: "text-xs" }, [
                    createVNode("p", { class: "text-black/55" }, [
                      createTextVNode(" Nilai produk sebelum "),
                      createVNode("span", { class: "underline" }, toDisplayString(unref(lastReviewDate)), 1)
                    ]),
                    createVNode("p", { class: "text-primary" }, "Nilai sekarang & dapatkan 25 Koin Syopo!")
                  ]),
                  createVNode(_component_UButton, {
                    label: "Nilai",
                    class: "min-w-40 justify-center",
                    onClick: ($event) => emit("review", __props.order)
                  }, null, 8, ["onClick"])
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/feature/ProfileOrder/CardOrder.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { data: oldOrders } = useNuxtData("order-customer");
    const openReview = ref(false);
    const modalReviewElement = ref();
    const observerElement = ref();
    let observer = null;
    const pagination = ref({
      page: 1,
      per_page: 3
    });
    const formFilter = ref({
      search: "",
      status: 0
    });
    const searchDebounce = refDebounced(
      computed(() => formFilter.value.search),
      1e3
    );
    const items = [
      {
        label: "Semua",
        key: "all"
      },
      {
        label: "Belum Bayar",
        key: "pending_payment"
      },
      {
        label: "Sudah Dibayar",
        key: "paid"
      },
      {
        label: "Sedang Dikemas",
        key: "on_processing"
      },
      {
        label: "Dikirim",
        key: "on_delivery"
      },
      {
        label: "Selesai",
        key: "done"
      },
      {
        label: "Dibatalkan",
        key: "failed"
      }
    ];
    const { data, status } = useApi("/server/api/order", {
      key: "order-customer",
      onResponse({ response }) {
        if (response.ok) {
          if (!observer) {
            observer = new IntersectionObserver((entries) => {
              if (entries[0].isIntersecting && !!response._data.data.next_page_url && pagination.value.page < response._data.data.last_page) {
                pagination.value.page++;
              }
            });
            observer.observe(observerElement.value);
          }
        }
      },
      params: computed(() => {
        var _a;
        const lastStatus = formFilter.value.status > 0 ? (_a = items[formFilter.value.status]) == null ? void 0 : _a.key : void 0;
        return {
          ...pagination.value,
          search: searchDebounce.value || void 0,
          last_status: lastStatus
        };
      }),
      transform(response) {
        var _a, _b;
        if (pagination.value.page === 1) return response == null ? void 0 : response.data;
        const newData = ((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.data) || [];
        return {
          ...response.data,
          data: [...((_b = oldOrders.value) == null ? void 0 : _b.data) || [], ...newData]
        };
      }
    });
    watch(searchDebounce, () => {
      pagination.value.page = 1;
    });
    watch(
      () => formFilter.value.status,
      () => {
        if (observer) {
          observer.disconnect();
          observer = null;
        }
        formFilter.value.search = "";
        pagination.value.page = 1;
      }
    );
    function handleReview(order) {
      modalReviewElement.value.setDefaultData(order);
      openReview.value = true;
    }
    function handleReloadData() {
      refreshNuxtData();
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_BaseTabs = _sfc_main$2;
      const _component_UInput = __nuxt_component_3;
      const _component_FeatureProfileOrderCardOrder = _sfc_main$1;
      const _component_BaseLoading = __nuxt_component_0;
      const _component_ModalReview = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-3" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseTabs, {
        modelValue: unref(formFilter).status,
        "onUpdate:modelValue": ($event) => unref(formFilter).status = $event,
        items,
        ui: {
          list: {
            height: "h-full",
            tab: {
              font: "font-normal",
              height: "h-14"
            }
          }
        },
        content: false
      }, null, _parent));
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: unref(formFilter).search,
        "onUpdate:modelValue": ($event) => unref(formFilter).search = $event,
        "leading-icon": "i-heroicons:magnifying-glass",
        size: "lg",
        placeholder: "Kamu bisa cari berdasarkan Nama Penjual, No. Pesanan atau Nama Produk",
        ui: {
          color: {
            white: {
              outline: "bg-gray-200/50 ring-0 placeholder-gray-500"
            }
          }
        }
      }, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList(((_a = unref(data)) == null ? void 0 : _a.data) || [], (order, index) => {
        _push(ssrRenderComponent(_component_FeatureProfileOrderCardOrder, {
          key: `order-${index}`,
          order,
          onReview: handleReview
        }, null, _parent));
      });
      _push(`<!--]--><div></div>`);
      if (unref(status) === "pending") {
        _push(ssrRenderComponent(_component_BaseLoading, null, null, _parent));
      } else if ((((_b = unref(data)) == null ? void 0 : _b.data) || []).length === 0) {
        _push(`<p class="text-sm font-medium text-black/55 py-4 text-center"> Tidak ada order yang ditemukan </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_ModalReview, {
        ref_key: "modalReviewElement",
        ref: modalReviewElement,
        open: unref(openReview),
        "onUpdate:open": ($event) => isRef(openReview) ? openReview.value = $event : null,
        onSuccess: handleReloadData
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/my-account/orders/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DtzFc1_R.mjs.map
