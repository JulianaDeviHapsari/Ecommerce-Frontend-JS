import { _ as __nuxt_component_0 } from './Loading-ylJ4hnGQ.mjs';
import { _ as _export_sfc, x as useRoute, d as useNuxtApp, b as __nuxt_component_5 } from './server.mjs';
import { I as IconOrder, a as IconPaid, b as IconTruckOutline, c as IconInbox, d as IconStars, _ as _sfc_main$7, e as _sfc_main$5 } from './Stars-dPGuNgZK.mjs';
import { _ as __nuxt_component_3 } from './Modal-DiMSs998.mjs';
import { _ as __nuxt_component_5$1 } from './Card-DbWg7JF8.mjs';
import { _ as __nuxt_component_0$1 } from './FormGroup-DpovdzGZ.mjs';
import { _ as __nuxt_component_5$2 } from './Textarea-nJripv25.mjs';
import { _ as _sfc_main$1 } from './CardProduct-DviFAC0z.mjs';
import { reactive, computed, unref, mergeProps, withCtx, createVNode, withModifiers, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './garansi-r93UczOs.mjs';
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import { u as useApi } from './use-api-DLZ2CTc2.mjs';
import { u as useSubmit } from './use-submit-TWB9IMR2.mjs';
import { f as formatNumber } from './number.utils-vPnlR88w.mjs';
import './Loading-DEfyuitU.mjs';
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
import 'tailwind-merge';
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
import './useFormGroup-B6xiYqr7.mjs';
import './NuxtImg-DLumQ5km.mjs';

const _sfc_main = {
  __name: "[orderId]",
  __ssrInlineRender: true,
  setup(__props) {
    const modalUpdateStatus = reactive({
      open: false,
      status: "",
      form: {
        description: ""
      }
    });
    const rules = {
      description: { required }
    };
    const v$ = useVuelidate(
      rules,
      computed(() => ({ description: modalUpdateStatus.form.description })),
      { $autoDirty: true }
    );
    const route = useRoute();
    const nuxtApp = useNuxtApp();
    const { data, status, refresh } = useApi(
      `/server/api/seller-dashboard/order/${route.params.orderId}`,
      {
        key: `order-seller-${route.params.orderId}`,
        getCachedData() {
          var _a, _b;
          return ((_a = nuxtApp.payload.data) == null ? void 0 : _a[`order-seller-${route.params.orderId}`]) || ((_b = nuxtApp.static.data) == null ? void 0 : _b[`order-seller-${route.params.orderId}`]);
        },
        transform(response) {
          return (response == null ? void 0 : response.data) || {};
        }
      }
    );
    const { execute, status: statusUpdate } = useSubmit(
      computed(
        () => `/server/api/seller-dashboard/order/${route.params.orderId}/status`
      ),
      {
        onResponse({ response }) {
          if (response.ok) {
            modalUpdateStatus.open = false;
            modalUpdateStatus.status = "";
            modalUpdateStatus.form.description = "";
            v$.value.$reset();
            refresh();
          }
        }
      }
    );
    const lastStatus = computed(() => {
      var _a;
      return ((_a = data.value) == null ? void 0 : _a.last_status) || {};
    });
    const timelineStatus = computed(() => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A;
      const pendingStatus = (_b = (_a = data.value) == null ? void 0 : _a.status) == null ? void 0 : _b.find(
        (item) => item.status === "pending_payment"
      );
      const paidStatus = (_d = (_c = data.value) == null ? void 0 : _c.status) == null ? void 0 : _d.find((item) => item.status === "paid");
      const processStatus = (_f = (_e = data.value) == null ? void 0 : _e.status) == null ? void 0 : _f.find(
        (item) => item.status === "on_processing"
      );
      const deliveryStatus = (_h = (_g = data.value) == null ? void 0 : _g.status) == null ? void 0 : _h.find(
        (item) => item.status === "on_delivery"
      );
      const doneStatus = (_j = (_i = data.value) == null ? void 0 : _i.status) == null ? void 0 : _j.find((item) => item.status === "done");
      return [
        {
          title: "Pesanan Dibuat",
          time: pendingStatus == null ? void 0 : pendingStatus.created_at,
          passed: !["pending_payment", "failed"].includes((_k = lastStatus.value) == null ? void 0 : _k.status) && pendingStatus,
          active: ((_l = lastStatus.value) == null ? void 0 : _l.status) === "pending_payment",
          icon: IconOrder
        },
        {
          title: `Pesanan${paidStatus ? "" : " Belum"} Dibayarkan (Rp${formatNumber(
            (_m = data.value) == null ? void 0 : _m.total
          )})`,
          time: paidStatus == null ? void 0 : paidStatus.created_at,
          passed: ((_n = lastStatus.value) == null ? void 0 : _n.status) !== "paid" && paidStatus,
          active: ((_o = lastStatus.value) == null ? void 0 : _o.status) === "paid",
          icon: IconPaid
        },
        {
          title: "Sedang Dikemas",
          time: processStatus == null ? void 0 : processStatus.created_at,
          icon: IconTruckOutline,
          passed: ((_p = lastStatus.value) == null ? void 0 : _p.status) !== "on_processing" && processStatus,
          active: ((_q = lastStatus.value) == null ? void 0 : _q.status) === "on_processing"
        },
        {
          title: "Dikirim",
          time: deliveryStatus == null ? void 0 : deliveryStatus.created_at,
          icon: IconInbox,
          passed: ((_r = lastStatus.value) == null ? void 0 : _r.status) !== "on_delivery" && deliveryStatus,
          active: ((_s = lastStatus.value) == null ? void 0 : _s.status) === "on_delivery"
        },
        {
          title: ((_v = (_u = (_t = data.value) == null ? void 0 : _t.items) == null ? void 0 : _u[0]) == null ? void 0 : _v.is_reviewed) ? "Selesai" : "Belum Dinilai",
          time: ((_y = (_x = (_w = data.value) == null ? void 0 : _w.items) == null ? void 0 : _x[0]) == null ? void 0 : _y.is_reviewed) ? doneStatus == null ? void 0 : doneStatus.created_at : "",
          icon: IconStars,
          passed: ((_z = lastStatus.value) == null ? void 0 : _z.status) !== "done" && doneStatus,
          active: ((_A = lastStatus.value) == null ? void 0 : _A.status) === "done"
        }
      ];
    });
    const orderHistory = computed(() => {
      var _a, _b;
      return (_b = (_a = data.value) == null ? void 0 : _a.status) == null ? void 0 : _b.map((item, index, arr) => ({
        title: item == null ? void 0 : item.description,
        time: item == null ? void 0 : item.created_at,
        active: index === arr.length - 1
      })).sort((a, b) => new Date(b.time) - new Date(a.time));
    });
    const subtotalProduct = computed(() => {
      var _a, _b;
      return (_b = (_a = data.value) == null ? void 0 : _a.items) == null ? void 0 : _b.reduce((result, current) => {
        result += current.total;
        return result;
      }, 0);
    });
    const priceItem = computed(() => {
      var _a;
      return [
        {
          label: "Subtotal Produk",
          value: `Rp ${formatNumber(subtotalProduct.value)}`
        },
        {
          label: "Total Pesanan",
          value: `Rp ${formatNumber((_a = data.value) == null ? void 0 : _a.total)}`,
          class: "text-primary text-2xl"
        }
      ];
    });
    function openModalUpdateStatus(updateStatus) {
      modalUpdateStatus.open = true;
      modalUpdateStatus.status = updateStatus;
      modalUpdateStatus.form.description = "";
    }
    function closeModalUpdateStatus() {
      modalUpdateStatus.open = false;
      modalUpdateStatus.form.description = "";
      v$.value.$reset();
    }
    function handleProcessOrder() {
      const confirm = (void 0).confirm("Anda yakin untuk memproses order ini?");
      if (!confirm) return;
      execute({
        status: "on_processing"
      });
    }
    function handleUpdateStatus() {
      execute({
        status: modalUpdateStatus.status,
        delivery_note: modalUpdateStatus.form.description
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A;
      const _component_BaseLoading = __nuxt_component_0;
      const _component_UButton = __nuxt_component_5;
      const _component_BaseTimelineHorizontal = _sfc_main$7;
      const _component_UModal = __nuxt_component_3;
      const _component_UCard = __nuxt_component_5$1;
      const _component_UFormGroup = __nuxt_component_0$1;
      const _component_UTextarea = __nuxt_component_5$2;
      const _component_BaseTimelineVertical = _sfc_main$5;
      const _component_FeatureProfileOrderCardProduct = _sfc_main$1;
      if (unref(status) === "pending") {
        _push(ssrRenderComponent(_component_BaseLoading, _attrs, null, _parent));
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-sm text-black/80" }, _attrs))} data-v-24d34ef1><div class="bg-white divide-y divide-dashed" data-v-24d34ef1><div class="flex justify-between gap-4 px-6 py-5" data-v-24d34ef1>`);
        _push(ssrRenderComponent(_component_UButton, {
          label: "Kembali",
          to: "/seller/order",
          icon: "i-heroicons:chevron-left",
          padded: false,
          variant: "link",
          color: "gray"
        }, null, _parent));
        _push(`<div class="divide-x" data-v-24d34ef1><span class="px-4" data-v-24d34ef1>NO. PESANAN. ${ssrInterpolate((_a = unref(data)) == null ? void 0 : _a.invoice_number)}</span><span class="px-4 uppercase text-primary" data-v-24d34ef1>${ssrInterpolate((_b = unref(lastStatus)) == null ? void 0 : _b.description)}</span></div></div><div class="px-6 py-10" data-v-24d34ef1>`);
        _push(ssrRenderComponent(_component_BaseTimelineHorizontal, {
          items: unref(timelineStatus),
          class: "grid grid-cols-5"
        }, null, _parent));
        _push(`</div>`);
        if (["paid", "on_processing", "on_delivery"].includes((_c = unref(lastStatus)) == null ? void 0 : _c.status)) {
          _push(`<div class="bg-yellow-50/30 flex justify-end px-6 py-3 gap-2" data-v-24d34ef1>`);
          if (((_d = unref(lastStatus)) == null ? void 0 : _d.status) === "paid") {
            _push(ssrRenderComponent(_component_UButton, {
              class: "min-w-56 justify-center",
              label: "Proses Order ini",
              onClick: handleProcessOrder
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          if (["on_processing", "on_delivery"].includes((_e = unref(lastStatus)) == null ? void 0 : _e.status)) {
            _push(ssrRenderComponent(_component_UButton, {
              class: "min-w-56 justify-center",
              label: "Update Status Pengiriman",
              onClick: ($event) => openModalUpdateStatus("on_delivery")
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(ssrRenderComponent(_component_UModal, {
            modelValue: unref(modalUpdateStatus).open,
            "onUpdate:modelValue": ($event) => unref(modalUpdateStatus).open = $event
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_UCard, null, {
                  header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` Update Status Order `);
                    } else {
                      return [
                        createTextVNode(" Update Status Order ")
                      ];
                    }
                  }),
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    var _a2, _b2, _c2, _d2;
                    if (_push3) {
                      _push3(`<form data-v-24d34ef1${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_UFormGroup, {
                        label: "Deskripsi",
                        error: (_b2 = (_a2 = unref(v$).$errors) == null ? void 0 : _a2[0]) == null ? void 0 : _b2.$message
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_UTextarea, {
                              modelValue: unref(modalUpdateStatus).form.description,
                              "onUpdate:modelValue": ($event) => unref(modalUpdateStatus).form.description = $event
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_UTextarea, {
                                modelValue: unref(modalUpdateStatus).form.description,
                                "onUpdate:modelValue": ($event) => unref(modalUpdateStatus).form.description = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                      _push3(`<div class="flex justify-end gap-4 mt-6" data-v-24d34ef1${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_UButton, {
                        color: "gray",
                        variant: "link",
                        label: "Nanti Saja",
                        disabled: unref(statusUpdate) === "pending",
                        onClick: closeModalUpdateStatus
                      }, null, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_UButton, {
                        type: "submit",
                        label: "Simpan",
                        loading: unref(statusUpdate) === "pending"
                      }, null, _parent3, _scopeId2));
                      _push3(`</div></form>`);
                    } else {
                      return [
                        createVNode("form", {
                          onSubmit: withModifiers(handleUpdateStatus, ["prevent"])
                        }, [
                          createVNode(_component_UFormGroup, {
                            label: "Deskripsi",
                            error: (_d2 = (_c2 = unref(v$).$errors) == null ? void 0 : _c2[0]) == null ? void 0 : _d2.$message
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UTextarea, {
                                modelValue: unref(modalUpdateStatus).form.description,
                                "onUpdate:modelValue": ($event) => unref(modalUpdateStatus).form.description = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }, 8, ["error"]),
                          createVNode("div", { class: "flex justify-end gap-4 mt-6" }, [
                            createVNode(_component_UButton, {
                              color: "gray",
                              variant: "link",
                              label: "Nanti Saja",
                              disabled: unref(statusUpdate) === "pending",
                              onClick: closeModalUpdateStatus
                            }, null, 8, ["disabled"]),
                            createVNode(_component_UButton, {
                              type: "submit",
                              label: "Simpan",
                              loading: unref(statusUpdate) === "pending"
                            }, null, 8, ["loading"])
                          ])
                        ], 32)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_UCard, null, {
                    header: withCtx(() => [
                      createTextVNode(" Update Status Order ")
                    ]),
                    default: withCtx(() => {
                      var _a2, _b2;
                      return [
                        createVNode("form", {
                          onSubmit: withModifiers(handleUpdateStatus, ["prevent"])
                        }, [
                          createVNode(_component_UFormGroup, {
                            label: "Deskripsi",
                            error: (_b2 = (_a2 = unref(v$).$errors) == null ? void 0 : _a2[0]) == null ? void 0 : _b2.$message
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UTextarea, {
                                modelValue: unref(modalUpdateStatus).form.description,
                                "onUpdate:modelValue": ($event) => unref(modalUpdateStatus).form.description = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }, 8, ["error"]),
                          createVNode("div", { class: "flex justify-end gap-4 mt-6" }, [
                            createVNode(_component_UButton, {
                              color: "gray",
                              variant: "link",
                              label: "Nanti Saja",
                              disabled: unref(statusUpdate) === "pending",
                              onClick: closeModalUpdateStatus
                            }, null, 8, ["disabled"]),
                            createVNode(_component_UButton, {
                              type: "submit",
                              label: "Simpan",
                              loading: unref(statusUpdate) === "pending"
                            }, null, 8, ["loading"])
                          ])
                        ], 32)
                      ];
                    }),
                    _: 1
                  })
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="px-6 py-5" data-v-24d34ef1><div class="flex justify-between items-center" data-v-24d34ef1><p class="text-xl" data-v-24d34ef1>Alamat Pengiriman</p><div class="text-right text-xs text-black/55" data-v-24d34ef1><p class="uppercase" data-v-24d34ef1>${ssrInterpolate((_f = unref(data)) == null ? void 0 : _f.courier)} - ${ssrInterpolate((_g = unref(data)) == null ? void 0 : _g.courier_type)}</p><p data-v-24d34ef1>XXXXXXXXX</p></div></div><div class="flex divide-x mt-3" data-v-24d34ef1><div class="w-80 py-2 pr-3" data-v-24d34ef1><p data-v-24d34ef1>${ssrInterpolate((_i = (_h = unref(data)) == null ? void 0 : _h.address) == null ? void 0 : _i.receiver_name)}</p><p class="text-black/55 mt-2" data-v-24d34ef1>${ssrInterpolate((_k = (_j = unref(data)) == null ? void 0 : _j.address) == null ? void 0 : _k.receiver_phone)}</p><p class="text-black/55" data-v-24d34ef1>${ssrInterpolate((_m = (_l = unref(data)) == null ? void 0 : _l.address) == null ? void 0 : _m.detail_address)} ${ssrInterpolate((_o = (_n = unref(data)) == null ? void 0 : _n.address) == null ? void 0 : _o.district)}, ${ssrInterpolate((_r = (_q = (_p = unref(data)) == null ? void 0 : _p.address) == null ? void 0 : _q.city) == null ? void 0 : _r.name)}, ${ssrInterpolate((_v = (_u = (_t = (_s = unref(data)) == null ? void 0 : _s.address) == null ? void 0 : _t.city) == null ? void 0 : _u.province) == null ? void 0 : _v.name)}, ${ssrInterpolate((_x = (_w = unref(data)) == null ? void 0 : _w.address) == null ? void 0 : _x.postal_code)} ${ssrInterpolate((_z = (_y = unref(data)) == null ? void 0 : _y.address) == null ? void 0 : _z.address_note)}</p></div><div class="pl-3" data-v-24d34ef1>`);
        _push(ssrRenderComponent(_component_BaseTimelineVertical, { items: unref(orderHistory) }, null, _parent));
        _push(`</div></div></div></div><div class="bg-gray-50 divide-y" data-v-24d34ef1><div class="px-6 py-3" data-v-24d34ef1><div class="divide-y" data-v-24d34ef1><!--[-->`);
        ssrRenderList((_A = unref(data)) == null ? void 0 : _A.items, (item) => {
          _push(ssrRenderComponent(_component_FeatureProfileOrderCardProduct, {
            key: `product-${item.uuid}`,
            size: "sm",
            class: "py-3",
            item
          }, null, _parent));
        });
        _push(`<!--]--></div></div><div data-v-24d34ef1><table class="order-price" data-v-24d34ef1><tbody data-v-24d34ef1><!--[-->`);
        ssrRenderList(unref(priceItem), (price) => {
          _push(`<tr data-v-24d34ef1><td data-v-24d34ef1>`);
          if (price.label === "Metode Pembayaran") {
            _push(`<div class="flex items-center gap-2 justify-end" data-v-24d34ef1><img${ssrRenderAttr("src", _imports_0)} class="h-4 w-4" data-v-24d34ef1><span data-v-24d34ef1>${ssrInterpolate(price.label)}</span></div>`);
          } else {
            _push(`<!--[-->${ssrInterpolate(price.label)}<!--]-->`);
          }
          _push(`</td><td data-v-24d34ef1>${ssrInterpolate(price.value)}</td></tr>`);
        });
        _push(`<!--]--></tbody></table></div></div></div>`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/seller/order/[orderId].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _orderId_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-24d34ef1"]]);

export { _orderId_ as default };
//# sourceMappingURL=_orderId_-CcGASFpX.mjs.map
