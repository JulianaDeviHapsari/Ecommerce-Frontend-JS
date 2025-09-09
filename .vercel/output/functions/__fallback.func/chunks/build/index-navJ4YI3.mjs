import { _ as _sfc_main$1 } from './Card-xFMCdhB0.mjs';
import { _ as _sfc_main$2 } from './Tabs-B1IJpfws.mjs';
import { _ as __nuxt_component_3 } from './Input-BSkwWT7v.mjs';
import { b as __nuxt_component_5 } from './server.mjs';
import { _ as _sfc_main$3 } from './DataTable-CV_rXQXz.mjs';
import { f as formatNumber } from './number.utils-vPnlR88w.mjs';
import { ref, computed, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, createBlock, createCommentVNode, withModifiers, openBlock, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { S as STATUS_ORDER } from './status-CG3FqbZq.mjs';
import { u as useApi } from './use-api-DLZ2CTc2.mjs';
import './Card-DbWg7JF8.mjs';
import 'tailwind-merge';
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
import './useFormGroup-B6xiYqr7.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './Checkbox-Cf2pHysF.mjs';
import './Pagination-Xmx5_6mI.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const tabs = [
      {
        label: "Semua",
        key: "all"
      },
      {
        label: "Belum Dibayar",
        key: "pending_payment"
      },
      {
        label: "Sudah Dibayar",
        key: "paid"
      },
      {
        label: "Sedang Diproses",
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
    const columns = [
      {
        key: "invoice_number",
        label: "No. Pesanan"
      },
      {
        key: "total",
        label: "Harga Total"
      },
      {
        key: "last_status.status",
        label: "Status",
        rowClass: "capitalize"
      },
      {
        key: "action",
        label: "Aksi"
      }
    ];
    const formFilter = ref({
      search: void 0,
      last_status: 0
    });
    const pagination = ref({
      page: 1,
      per_page: 10
    });
    const { data, status, execute } = useApi("/server/api/seller-dashboard/order", {
      key: "order-seller",
      params: computed(() => {
        return {
          ...pagination.value,
          ...formFilter.value,
          last_status: formFilter.value.last_status ? tabs[formFilter.value.last_status].key : void 0
        };
      }),
      transform(response) {
        return (response == null ? void 0 : response.data) || {};
      },
      watch: false
    });
    const orders = computed(() => {
      var _a;
      return ((_a = data.value) == null ? void 0 : _a.data) || [];
    });
    function handleFilter() {
      pagination.value.page = 1;
      execute();
    }
    function handleResetFilter() {
      pagination.value.page = 1;
      formFilter.value.search = void 0;
      execute();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SellerCard = _sfc_main$1;
      const _component_BaseTabs = _sfc_main$2;
      const _component_UInput = __nuxt_component_3;
      const _component_UButton = __nuxt_component_5;
      const _component_BaseDataTable = _sfc_main$3;
      _push(ssrRenderComponent(_component_SellerCard, mergeProps({ title: "Pesanan Saya" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            _push2(`<div class="mt-4 space-y-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseTabs, {
              modelValue: unref(formFilter).last_status,
              "onUpdate:modelValue": [($event) => unref(formFilter).last_status = $event, handleResetFilter],
              items: tabs,
              content: false,
              ui: {
                wrapper: "border-b border-gray-100",
                list: {
                  width: "w-[unset] border-none",
                  tab: {
                    base: "font-normal"
                  }
                }
              }
            }, null, _parent2, _scopeId));
            _push2(`<form class="flex gap-4 items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: unref(formFilter).search,
              "onUpdate:modelValue": ($event) => unref(formFilter).search = $event,
              class: "flex-1",
              placeholder: "Masukkan no. pesanan"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              label: "Terapkan",
              size: "xs",
              variant: "outline",
              type: "submit"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              label: "Reset",
              size: "xs",
              color: "white",
              onClick: handleResetFilter
            }, null, _parent2, _scopeId));
            _push2(`</form>`);
            if (unref(status) !== "pending") {
              _push2(`<p class="text-lg font-medium"${_scopeId}>${ssrInterpolate(((_a = unref(data)) == null ? void 0 : _a.total) || 0)} Pesanan </p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_BaseDataTable, {
              page: unref(pagination).page,
              "onUpdate:page": [($event) => unref(pagination).page = $event, unref(execute)],
              total: ((_b = unref(data)) == null ? void 0 : _b.total) || 0,
              "per-page": unref(pagination).per_page,
              columns,
              rows: unref(orders),
              loading: unref(status) === "pending"
            }, {
              [`last_status.status-data`]: withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                var _a2, _b2;
                if (_push3) {
                  _push3(`${ssrInterpolate((_a2 = unref(STATUS_ORDER)) == null ? void 0 : _a2[row.last_status.status])}`);
                } else {
                  return [
                    createTextVNode(toDisplayString((_b2 = unref(STATUS_ORDER)) == null ? void 0 : _b2[row.last_status.status]), 1)
                  ];
                }
              }),
              "total-data": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Rp${ssrInterpolate(("formatNumber" in _ctx ? _ctx.formatNumber : unref(formatNumber))(row.total))}`);
                } else {
                  return [
                    createTextVNode(" Rp" + toDisplayString(("formatNumber" in _ctx ? _ctx.formatNumber : unref(formatNumber))(row.total)), 1)
                  ];
                }
              }),
              "action-data": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    variant: "link",
                    color: "blue",
                    padded: false,
                    label: "Lihat Detail",
                    to: `/seller/order/${row.uuid}`
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      variant: "link",
                      color: "blue",
                      padded: false,
                      label: "Lihat Detail",
                      to: `/seller/order/${row.uuid}`
                    }, null, 8, ["to"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mt-4 space-y-4" }, [
                createVNode(_component_BaseTabs, {
                  modelValue: unref(formFilter).last_status,
                  "onUpdate:modelValue": [($event) => unref(formFilter).last_status = $event, handleResetFilter],
                  items: tabs,
                  content: false,
                  ui: {
                    wrapper: "border-b border-gray-100",
                    list: {
                      width: "w-[unset] border-none",
                      tab: {
                        base: "font-normal"
                      }
                    }
                  }
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode("form", {
                  class: "flex gap-4 items-center",
                  onSubmit: withModifiers(handleFilter, ["prevent"])
                }, [
                  createVNode(_component_UInput, {
                    modelValue: unref(formFilter).search,
                    "onUpdate:modelValue": ($event) => unref(formFilter).search = $event,
                    class: "flex-1",
                    placeholder: "Masukkan no. pesanan"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_UButton, {
                    label: "Terapkan",
                    size: "xs",
                    variant: "outline",
                    type: "submit"
                  }),
                  createVNode(_component_UButton, {
                    label: "Reset",
                    size: "xs",
                    color: "white",
                    onClick: handleResetFilter
                  })
                ], 32),
                unref(status) !== "pending" ? (openBlock(), createBlock("p", {
                  key: 0,
                  class: "text-lg font-medium"
                }, toDisplayString(((_c = unref(data)) == null ? void 0 : _c.total) || 0) + " Pesanan ", 1)) : createCommentVNode("", true),
                createVNode(_component_BaseDataTable, {
                  page: unref(pagination).page,
                  "onUpdate:page": [($event) => unref(pagination).page = $event, unref(execute)],
                  total: ((_d = unref(data)) == null ? void 0 : _d.total) || 0,
                  "per-page": unref(pagination).per_page,
                  columns,
                  rows: unref(orders),
                  loading: unref(status) === "pending"
                }, {
                  [`last_status.status-data`]: withCtx(({ row }) => {
                    var _a2;
                    return [
                      createTextVNode(toDisplayString((_a2 = unref(STATUS_ORDER)) == null ? void 0 : _a2[row.last_status.status]), 1)
                    ];
                  }),
                  "total-data": withCtx(({ row }) => [
                    createTextVNode(" Rp" + toDisplayString(("formatNumber" in _ctx ? _ctx.formatNumber : unref(formatNumber))(row.total)), 1)
                  ]),
                  "action-data": withCtx(({ row }) => [
                    createVNode(_component_UButton, {
                      variant: "link",
                      color: "blue",
                      padded: false,
                      label: "Lihat Detail",
                      to: `/seller/order/${row.uuid}`
                    }, null, 8, ["to"])
                  ]),
                  _: 2
                }, 1032, ["page", "onUpdate:page", "total", "per-page", "rows", "loading"])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/seller/order/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-navJ4YI3.mjs.map
