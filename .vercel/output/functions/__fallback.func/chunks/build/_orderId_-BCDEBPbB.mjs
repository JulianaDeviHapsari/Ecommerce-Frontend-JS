import { _ as __nuxt_component_0 } from './Loading-ylJ4hnGQ.mjs';
import { _ as _export_sfc, x as useRoute, d as useNuxtApp, b as __nuxt_component_5 } from './server.mjs';
import { I as IconOrder, a as IconPaid, b as IconTruckOutline, c as IconInbox, d as IconStars, _ as _sfc_main$7, e as _sfc_main$5 } from './Stars-dPGuNgZK.mjs';
import { _ as __nuxt_component_2 } from './Shop-B22w5_LP.mjs';
import { _ as _sfc_main$1 } from './CardProduct-DviFAC0z.mjs';
import { _ as _sfc_main$2 } from './Review-BxDTaZFi.mjs';
import { ref, computed, unref, mergeProps, withCtx, createVNode, createTextVNode, isRef, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './garansi-r93UczOs.mjs';
import { format, addDays, differenceInDays } from 'date-fns';
import { u as useApi } from './use-api-DLZ2CTc2.mjs';
import { g as getEstimate } from './date.utils-spvicigv.mjs';
import { f as formatNumber } from './number.utils-vPnlR88w.mjs';
import { u as useSubmit } from './use-submit-TWB9IMR2.mjs';
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
import './NuxtImg-DLumQ5km.mjs';
import './Modal-DiMSs998.mjs';
import './portal-RXXuCQxI.mjs';
import './focus-management-vHH7q6nP.mjs';
import './keyboard-Duq8EHr3.mjs';
import './use-outside-click-BHqYmLlt.mjs';
import './hidden-Dc_fFmis.mjs';
import './active-element-history-Cer4cSOw.mjs';
import './micro-task-B6uncIso.mjs';
import './open-closed-CJlEqXqx.mjs';
import './Card-DbWg7JF8.mjs';
import './Rating-CzUxWdt7.mjs';
import './FormGroup-DpovdzGZ.mjs';
import './Textarea-nJripv25.mjs';
import './useFormGroup-B6xiYqr7.mjs';
import './Media-UQZ5EApb.mjs';
import './Checkbox-Cf2pHysF.mjs';
import '@vuelidate/core';
import '@vuelidate/validators';
import './use-masking-DZFcOT6B.mjs';

const _sfc_main = {
  __name: "[orderId]",
  __ssrInlineRender: true,
  setup(__props) {
    const openReview = ref(false);
    const modalReviewElement = ref();
    const route = useRoute();
    const nuxtApp = useNuxtApp();
    const { data, status, refresh } = useApi(
      `/server/api/order/${route.params.orderId}`,
      {
        key: `order-customer-${route.params.orderId}`,
        getCachedData() {
          var _a, _b;
          return ((_a = nuxtApp.payload.data) == null ? void 0 : _a[`order-customer-${route.params.orderId}`]) || ((_b = nuxtApp.static.data) == null ? void 0 : _b[`order-customer-${route.params.orderId}`]);
        },
        transform(response) {
          return (response == null ? void 0 : response.data) || {};
        }
      }
    );
    const etd = computed(() => {
      var _a;
      const { start, end } = getEstimate((_a = data.value) == null ? void 0 : _a.courier_estimation, {
        returnObject: true
      });
      return {
        start: format(start, "dd-MM-yyyy"),
        end: format(end, "dd-MM-yyyy")
      };
    });
    const lastStatus = computed(
      () => {
        var _a, _b, _c, _d;
        return (_d = (_a = data.value) == null ? void 0 : _a.status) == null ? void 0 : _d[(((_c = (_b = data.value) == null ? void 0 : _b.status) == null ? void 0 : _c.length) || 0) - 1];
      }
    );
    const lastReviewDate = computed(() => {
      var _a, _b;
      if (((_a = lastStatus.value) == null ? void 0 : _a.status) !== "done") return "";
      const doneDate = new Date((_b = lastStatus.value) == null ? void 0 : _b.created_at);
      const targetDate = addDays(doneDate, 1);
      return format(targetDate, "dd-MM-yyyy");
    });
    const canReview = computed(() => {
      var _a, _b, _c, _d;
      if (((_a = lastStatus.value) == null ? void 0 : _a.status) !== "done") return false;
      const endDate = new Date(lastReviewDate.value);
      const today = /* @__PURE__ */ new Date();
      const diffDays = differenceInDays(endDate, today);
      return diffDays === 0 && !((_d = (_c = (_b = data.value) == null ? void 0 : _b.items) == null ? void 0 : _c[0]) == null ? void 0 : _d.is_reviewed);
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
            (_m = data.value) == null ? void 0 : _m.total_payment
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
    const priceItem = computed(() => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      return [
        {
          label: "Subtotal Produk",
          value: `Rp ${formatNumber((_a = data.value) == null ? void 0 : _a.subtotal)}`
        },
        {
          label: "Subtotal Pengiriman",
          value: `Rp ${formatNumber((_b = data.value) == null ? void 0 : _b.courier_price)}`
        },
        {
          label: "Voucher Digunakan",
          value: `Rp ${formatNumber((_c = data.value) == null ? void 0 : _c.voucher_value)}`
        },
        {
          label: "Cashback Koin",
          value: `Rp ${formatNumber(((_d = data.value) == null ? void 0 : _d.voucher_cashback) || 0)}`
        },
        {
          label: `${(_e = data.value) == null ? void 0 : _e.pay_with_coin} Koin Syopo ditukarkan`,
          value: `Rp ${formatNumber((_f = data.value) == null ? void 0 : _f.pay_with_coin)}`
        },
        {
          label: "Biaya Layanan",
          value: `Rp ${formatNumber((_g = data.value) == null ? void 0 : _g.service_fee)}`
        },
        {
          label: "Total Pesanan",
          value: `Rp ${formatNumber((_h = data.value) == null ? void 0 : _h.total_payment)}`,
          class: "text-primary text-2xl"
        },
        {
          label: "Metode Pembayaran",
          value: ((_i = data.value) == null ? void 0 : _i.payment_method) === "bni_va" ? "Virtual Account" : "QRIS"
        }
      ];
    });
    const { status: statusDone, execute: submitDone } = useSubmit(
      computed(() => `/server/api/order/${route.params.orderId}/mark-done`),
      {
        onResponse({ response }) {
          if (response.ok) refresh();
        }
      }
    );
    function handleDoneOrder() {
      const confirm = (void 0).confirm(
        "Apa anda yakin untuk menyelesaikan order ini?"
      );
      if (!confirm) return;
      submitDone();
    }
    function handleReview() {
      modalReviewElement.value.setDefaultData(data.value);
      openReview.value = true;
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F;
      const _component_BaseLoading = __nuxt_component_0;
      const _component_UButton = __nuxt_component_5;
      const _component_BaseTimelineHorizontal = _sfc_main$7;
      const _component_BaseTimelineVertical = _sfc_main$5;
      const _component_IconShop = __nuxt_component_2;
      const _component_FeatureProfileOrderCardProduct = _sfc_main$1;
      const _component_ModalReview = _sfc_main$2;
      if (unref(status) === "pending") {
        _push(ssrRenderComponent(_component_BaseLoading, _attrs, null, _parent));
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-sm text-black/80" }, _attrs))} data-v-f610349e><div class="bg-white divide-y divide-dashed" data-v-f610349e><div class="flex justify-between gap-4 px-6 py-5" data-v-f610349e>`);
        _push(ssrRenderComponent(_component_UButton, {
          label: "Kembali",
          to: "/my-account/orders",
          icon: "i-heroicons:chevron-left",
          padded: false,
          variant: "link",
          color: "gray"
        }, null, _parent));
        _push(`<div class="divide-x" data-v-f610349e><span class="px-4" data-v-f610349e>NO. PESANAN. ${ssrInterpolate((_a = unref(data)) == null ? void 0 : _a.invoice_number)}</span><span class="px-4 uppercase text-primary" data-v-f610349e>${ssrInterpolate((_b = unref(lastStatus)) == null ? void 0 : _b.description)}</span></div></div><div class="px-6 py-10" data-v-f610349e>`);
        _push(ssrRenderComponent(_component_BaseTimelineHorizontal, {
          items: unref(timelineStatus),
          class: "grid grid-cols-5"
        }, null, _parent));
        _push(`</div>`);
        if (((_c = unref(lastStatus)) == null ? void 0 : _c.status) === "pending_payment") {
          _push(`<div class="bg-yellow-50/30 flex justify-end px-6 py-3" data-v-f610349e>`);
          _push(ssrRenderComponent(_component_UButton, {
            class: "min-w-56 justify-center",
            label: "Bayar",
            to: `/checkout/payment/${(_d = unref(data)) == null ? void 0 : _d.uuid}`
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (((_e = unref(lastStatus)) == null ? void 0 : _e.status) === "on_delivery") {
          _push(`<div class="bg-yellow-50/30 flex justify-between px-6 py-3 items-center" data-v-f610349e><p class="text-black/55" data-v-f610349e> Produk diperkirakan akan sampai pada <span class="underline" data-v-f610349e>${ssrInterpolate(unref(etd).start)}</span> - <span class="underline" data-v-f610349e>${ssrInterpolate(unref(etd).end)}</span></p>`);
          _push(ssrRenderComponent(_component_UButton, {
            class: "min-w-56 justify-center",
            label: "Pesanan Selesai",
            loading: unref(statusDone) === "pending",
            onClick: handleDoneOrder
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (((_f = unref(lastStatus)) == null ? void 0 : _f.status) === "done" && unref(canReview)) {
          _push(`<div class="bg-yellow-50/30 flex justify-between px-6 py-3 items-center" data-v-f610349e><p class="text-black/55" data-v-f610349e> Nilai pesanan sebelum <span class="underline" data-v-f610349e>${ssrInterpolate(unref(lastReviewDate))}</span> dan dapatkan maks. 25 Koin Syopo! </p>`);
          _push(ssrRenderComponent(_component_UButton, {
            class: "min-w-56 justify-center",
            label: "Nilai",
            onClick: handleReview
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="px-6 py-5" data-v-f610349e><div class="flex justify-between items-center" data-v-f610349e><p class="text-xl" data-v-f610349e>Alamat Pengiriman</p><div class="text-right text-xs text-black/55" data-v-f610349e><p class="uppercase" data-v-f610349e>${ssrInterpolate((_g = unref(data)) == null ? void 0 : _g.courier)} - ${ssrInterpolate((_h = unref(data)) == null ? void 0 : _h.courier_type)}</p><p data-v-f610349e>XXXXXXXXX</p></div></div><div class="flex divide-x mt-3" data-v-f610349e><div class="w-80 py-2 pr-3" data-v-f610349e><p data-v-f610349e>${ssrInterpolate((_j = (_i = unref(data)) == null ? void 0 : _i.address) == null ? void 0 : _j.receiver_name)}</p><p class="text-black/55 mt-2" data-v-f610349e>${ssrInterpolate((_l = (_k = unref(data)) == null ? void 0 : _k.address) == null ? void 0 : _l.receiver_phone)}</p><p class="text-black/55" data-v-f610349e>${ssrInterpolate((_n = (_m = unref(data)) == null ? void 0 : _m.address) == null ? void 0 : _n.detail_address)} ${ssrInterpolate((_p = (_o = unref(data)) == null ? void 0 : _o.address) == null ? void 0 : _p.district)}, ${ssrInterpolate((_s = (_r = (_q = unref(data)) == null ? void 0 : _q.address) == null ? void 0 : _r.city) == null ? void 0 : _s.name)}, ${ssrInterpolate((_w = (_v = (_u = (_t = unref(data)) == null ? void 0 : _t.address) == null ? void 0 : _u.city) == null ? void 0 : _v.province) == null ? void 0 : _w.name)}, ${ssrInterpolate((_y = (_x = unref(data)) == null ? void 0 : _x.address) == null ? void 0 : _y.postal_code)} ${ssrInterpolate((_A = (_z = unref(data)) == null ? void 0 : _z.address) == null ? void 0 : _A.address_note)}</p></div><div class="pl-3" data-v-f610349e>`);
        _push(ssrRenderComponent(_component_BaseTimelineVertical, { items: unref(orderHistory) }, null, _parent));
        _push(`</div></div></div></div><div class="bg-gray-50 divide-y" data-v-f610349e><div class="px-6 py-3" data-v-f610349e><div class="flex gap-2 items-center" data-v-f610349e><span class="font-semibold" data-v-f610349e>${ssrInterpolate((_C = (_B = unref(data)) == null ? void 0 : _B.seller) == null ? void 0 : _C.store_name)}</span>`);
        _push(ssrRenderComponent(_component_UButton, {
          color: "white",
          size: "xs",
          to: `/shop/${(_E = (_D = unref(data)) == null ? void 0 : _D.seller) == null ? void 0 : _E.username}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_IconShop, null, null, _parent2, _scopeId));
              _push2(` Kunjungi Toko `);
            } else {
              return [
                createVNode(_component_IconShop),
                createTextVNode(" Kunjungi Toko ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><hr class="mt-3" data-v-f610349e><div class="divide-y" data-v-f610349e><!--[-->`);
        ssrRenderList((_F = unref(data)) == null ? void 0 : _F.items, (item) => {
          _push(ssrRenderComponent(_component_FeatureProfileOrderCardProduct, {
            key: `product-${item.uuid}`,
            size: "sm",
            class: "py-3",
            item
          }, null, _parent));
        });
        _push(`<!--]--></div></div><div data-v-f610349e><table class="order-price" data-v-f610349e><!--[-->`);
        ssrRenderList(unref(priceItem), (price) => {
          _push(`<tr data-v-f610349e><td data-v-f610349e>`);
          if (price.label === "Metode Pembayaran") {
            _push(`<div class="flex items-center gap-2 justify-end" data-v-f610349e><img${ssrRenderAttr("src", _imports_0)} class="h-4 w-4" data-v-f610349e><span data-v-f610349e>${ssrInterpolate(price.label)}</span></div>`);
          } else {
            _push(`<!--[-->${ssrInterpolate(price.label)}<!--]-->`);
          }
          _push(`</td><td data-v-f610349e>${ssrInterpolate(price.value)}</td></tr>`);
        });
        _push(`<!--]--></table></div></div>`);
        _push(ssrRenderComponent(_component_ModalReview, {
          ref_key: "modalReviewElement",
          ref: modalReviewElement,
          open: unref(openReview),
          "onUpdate:open": ($event) => isRef(openReview) ? openReview.value = $event : null,
          onSuccess: unref(refresh)
        }, null, _parent));
        _push(`</div>`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/my-account/orders/[orderId].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _orderId_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f610349e"]]);

export { _orderId_ as default };
//# sourceMappingURL=_orderId_-BCDEBPbB.mjs.map
