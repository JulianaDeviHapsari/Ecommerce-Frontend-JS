import { b as buildAssetsURL } from '../_/nitro.mjs';
import { _ as _sfc_main$1 } from './Card-xFMCdhB0.mjs';
import { e as useRouter, b as __nuxt_component_5, r as refreshNuxtData } from './server.mjs';
import { _ as _sfc_main$2 } from './Tabs-B1IJpfws.mjs';
import { _ as __nuxt_component_3 } from './Input-BSkwWT7v.mjs';
import { _ as _sfc_main$3 } from './DataTable-CV_rXQXz.mjs';
import { _ as __nuxt_component_5$1 } from './Badge-CoW0C7GQ.mjs';
import { _ as __nuxt_component_6 } from './Coin-AlF5VZZf.mjs';
import { f as formatNumber } from './number.utils-vPnlR88w.mjs';
import { ref, computed, mergeProps, withCtx, unref, createTextVNode, createVNode, createBlock, createCommentVNode, toDisplayString, openBlock, withModifiers, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { format, isPast } from 'date-fns';
import { u as useApi } from './use-api-DLZ2CTc2.mjs';
import { u as useSubmit } from './use-submit-TWB9IMR2.mjs';
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
import './Card-DbWg7JF8.mjs';
import 'tailwind-merge';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './Tabs-DKAzzVlP.mjs';
import './keyboard-Duq8EHr3.mjs';
import './use-resolve-button-type-DOOP2SMg.mjs';
import './hidden-Dc_fFmis.mjs';
import './focus-management-vHH7q6nP.mjs';
import './micro-task-B6uncIso.mjs';
import './useFormGroup-B6xiYqr7.mjs';
import './Checkbox-Cf2pHysF.mjs';
import './Pagination-Xmx5_6mI.mjs';

const VoucherCoin = "" + buildAssetsURL("voucher-cashback-coin.CXwHB_9e.png");
const VoucherPercentage = "" + buildAssetsURL("voucher-percentage.Dc-DzVhC.png");
const VoucherFixed = "" + buildAssetsURL("voucher-fixed.CYQFLj4F.png");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const image = {
      coin: VoucherCoin,
      percentage: VoucherPercentage,
      fixed: VoucherFixed
    };
    const tabs = [
      {
        label: "Semua",
        key: "all"
      },
      {
        label: "Berjalan",
        key: "ongoing"
      },
      {
        label: "Akan Datang",
        key: "coming_soon"
      },
      {
        label: "Expired",
        key: "expired"
      }
    ];
    const columns = [
      {
        key: "name",
        label: "Nama Voucher | Kode"
      },
      {
        key: "discount",
        label: "Diskon"
      },
      {
        key: "end_date",
        label: "Batas Pemakaian"
      },
      {
        key: "used_count",
        label: "Digunakan"
      },
      {
        key: "action",
        label: "Aksi"
      }
    ];
    const formFilter = ref({
      search: void 0,
      status: 0
    });
    const pagination = ref({
      page: 1,
      per_page: 10
    });
    const deleteId = ref();
    const { data, status, execute } = useApi(
      "/server/api/seller-dashboard/voucher",
      {
        key: "voucher-seller",
        params: computed(() => {
          return {
            ...pagination.value,
            ...formFilter.value,
            status: formFilter.value.status ? tabs[formFilter.value.status].key : void 0
          };
        }),
        transform(response) {
          return (response == null ? void 0 : response.data) || {};
        },
        watch: false
      }
    );
    const { execute: deleteVoucher, status: statusDelete } = useSubmit(
      computed(() => `/server/api/seller-dashboard/voucher/${deleteId.value}`),
      {
        method: "DELETE",
        onResponse({ response }) {
          if (response.ok) {
            refreshNuxtData();
            deleteId.value = null;
          }
        }
      }
    );
    const items = computed(() => {
      var _a;
      return ((_a = data.value) == null ? void 0 : _a.data) || [];
    });
    function handleEdit(row) {
      router.push({
        path: `/seller/voucher/edit/${row.uuid}`,
        state: { voucher: JSON.stringify(row) }
      });
    }
    function handleFilter() {
      pagination.value.page = 1;
      execute();
    }
    function handleDelete(row) {
      const confirm = (void 0).confirm("Anda yakin untuk menghapus voucher ini?");
      if (!confirm) return;
      deleteId.value = row.uuid;
      deleteVoucher();
    }
    function formatDate(dateString) {
      return format(new Date(dateString), "dd MMM yyyy");
    }
    function checkExpired(dateString) {
      return isPast(new Date(dateString));
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SellerCard = _sfc_main$1;
      const _component_UButton = __nuxt_component_5;
      const _component_BaseTabs = _sfc_main$2;
      const _component_UInput = __nuxt_component_3;
      const _component_BaseDataTable = _sfc_main$3;
      const _component_UBadge = __nuxt_component_5$1;
      const _component_IconCoin = __nuxt_component_6;
      _push(ssrRenderComponent(_component_SellerCard, mergeProps({ title: "Daftar Voucher" }, _attrs), {
        "header-append": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              icon: "i-heroicons:plus",
              to: "/seller/voucher/add"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Tambah Voucher`);
                } else {
                  return [
                    createTextVNode("Tambah Voucher")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                icon: "i-heroicons:plus",
                to: "/seller/voucher/add"
              }, {
                default: withCtx(() => [
                  createTextVNode("Tambah Voucher")
                ]),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseTabs, {
              modelValue: unref(formFilter).status,
              "onUpdate:modelValue": [($event) => unref(formFilter).status = $event, handleFilter],
              items: tabs,
              ui: {
                wrapper: "border-b border-gray-100",
                list: {
                  width: "w-[unset] border-none",
                  tab: {
                    font: "font-normal"
                  }
                }
              },
              content: false
            }, null, _parent2, _scopeId));
            _push2(`<div class="mt-8 space-y-4 text-sm"${_scopeId}><form class="flex gap-3 items-center"${_scopeId}><span${_scopeId}>Cari</span>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: unref(formFilter).search,
              "onUpdate:modelValue": ($event) => unref(formFilter).search = $event,
              placeholder: "Input",
              class: "w-80"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              type: "submit",
              variant: "outline",
              size: "xs"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Cari `);
                } else {
                  return [
                    createTextVNode(" Cari ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</form>`);
            _push2(ssrRenderComponent(_component_BaseDataTable, {
              page: unref(pagination).page,
              "onUpdate:page": [($event) => unref(pagination).page = $event, unref(execute)],
              total: ((_a = unref(data)) == null ? void 0 : _a.total) || 0,
              "per-page": unref(pagination).per_page,
              rows: unref(items),
              columns,
              loading: unref(status) === "pending"
            }, {
              "name-data": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex gap-2"${_scopeId2}><img class="w-14 h-14 object-cover"${ssrRenderAttr(
                    "src",
                    row.voucher_type === "discount" ? image[row.discount_cashback_type] : image["coin"]
                  )}${_scopeId2}><div class="flex flex-col items-start gap-0.5"${_scopeId2}>`);
                  if (checkExpired(row.end_date)) {
                    _push3(ssrRenderComponent(_component_UBadge, {
                      label: "Telah Berakhir",
                      color: "gray",
                      size: "xs",
                      variant: "soft",
                      ui: {
                        variant: {
                          soft: "bg-gray-100"
                        }
                      }
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<span class="text-sm font-medium"${_scopeId2}>${ssrInterpolate(row.name)}</span><span class="text-sm"${_scopeId2}>KODE:${ssrInterpolate(row.code)}</span></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex gap-2" }, [
                      createVNode("img", {
                        class: "w-14 h-14 object-cover",
                        src: row.voucher_type === "discount" ? image[row.discount_cashback_type] : image["coin"]
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "flex flex-col items-start gap-0.5" }, [
                        checkExpired(row.end_date) ? (openBlock(), createBlock(_component_UBadge, {
                          key: 0,
                          label: "Telah Berakhir",
                          color: "gray",
                          size: "xs",
                          variant: "soft",
                          ui: {
                            variant: {
                              soft: "bg-gray-100"
                            }
                          }
                        })) : createCommentVNode("", true),
                        createVNode("span", { class: "text-sm font-medium" }, toDisplayString(row.name), 1),
                        createVNode("span", { class: "text-sm" }, "KODE:" + toDisplayString(row.code), 1)
                      ])
                    ])
                  ];
                }
              }),
              "end_date-data": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(formatDate(row.start_date))} - ${ssrInterpolate(formatDate(row.end_date))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(formatDate(row.start_date)) + " - " + toDisplayString(formatDate(row.end_date)), 1)
                  ];
                }
              }),
              "discount-data": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p${_scopeId2}>${ssrInterpolate(row.discount_cashback_type === "fixed" ? "Rp" : "")}${ssrInterpolate(("formatNumber" in _ctx ? _ctx.formatNumber : unref(formatNumber))(row.discount_cashback_value))}${ssrInterpolate(row.discount_cashback_type === "percentage" ? "%" : "")}</p>`);
                  if (row.voucher_type === "cashback") {
                    _push3(`<div class="flex gap-2 items-center text-sm text-black/55"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_IconCoin, { class: "w-4 h-4" }, null, _parent3, _scopeId2));
                    _push3(` Cashback Koin </div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode("p", null, toDisplayString(row.discount_cashback_type === "fixed" ? "Rp" : "") + toDisplayString(("formatNumber" in _ctx ? _ctx.formatNumber : unref(formatNumber))(row.discount_cashback_value)) + toDisplayString(row.discount_cashback_type === "percentage" ? "%" : ""), 1),
                    row.voucher_type === "cashback" ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex gap-2 items-center text-sm text-black/55"
                    }, [
                      createVNode(_component_IconCoin, { class: "w-4 h-4" }),
                      createTextVNode(" Cashback Koin ")
                    ])) : createCommentVNode("", true)
                  ];
                }
              }),
              "action-data": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    label: "Ubah",
                    variant: "link",
                    color: "blue",
                    padded: false,
                    disabled: unref(statusDelete) === "pending",
                    onClick: ($event) => handleEdit(row)
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    label: "Hapus",
                    variant: "link",
                    color: "blue",
                    padded: false,
                    loading: unref(statusDelete) === "pending" && unref(deleteId) === row.uuid,
                    onClick: ($event) => handleDelete(row)
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col gap-2" }, [
                      createVNode(_component_UButton, {
                        label: "Ubah",
                        variant: "link",
                        color: "blue",
                        padded: false,
                        disabled: unref(statusDelete) === "pending",
                        onClick: ($event) => handleEdit(row)
                      }, null, 8, ["disabled", "onClick"]),
                      createVNode(_component_UButton, {
                        label: "Hapus",
                        variant: "link",
                        color: "blue",
                        padded: false,
                        loading: unref(statusDelete) === "pending" && unref(deleteId) === row.uuid,
                        onClick: ($event) => handleDelete(row)
                      }, null, 8, ["loading", "onClick"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_BaseTabs, {
                modelValue: unref(formFilter).status,
                "onUpdate:modelValue": [($event) => unref(formFilter).status = $event, handleFilter],
                items: tabs,
                ui: {
                  wrapper: "border-b border-gray-100",
                  list: {
                    width: "w-[unset] border-none",
                    tab: {
                      font: "font-normal"
                    }
                  }
                },
                content: false
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode("div", { class: "mt-8 space-y-4 text-sm" }, [
                createVNode("form", {
                  class: "flex gap-3 items-center",
                  onSubmit: withModifiers(handleFilter, ["prevent"])
                }, [
                  createVNode("span", null, "Cari"),
                  createVNode(_component_UInput, {
                    modelValue: unref(formFilter).search,
                    "onUpdate:modelValue": ($event) => unref(formFilter).search = $event,
                    placeholder: "Input",
                    class: "w-80"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_UButton, {
                    type: "submit",
                    variant: "outline",
                    size: "xs"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Cari ")
                    ]),
                    _: 1
                  })
                ], 32),
                createVNode(_component_BaseDataTable, {
                  page: unref(pagination).page,
                  "onUpdate:page": [($event) => unref(pagination).page = $event, unref(execute)],
                  total: ((_b = unref(data)) == null ? void 0 : _b.total) || 0,
                  "per-page": unref(pagination).per_page,
                  rows: unref(items),
                  columns,
                  loading: unref(status) === "pending"
                }, {
                  "name-data": withCtx(({ row }) => [
                    createVNode("div", { class: "flex gap-2" }, [
                      createVNode("img", {
                        class: "w-14 h-14 object-cover",
                        src: row.voucher_type === "discount" ? image[row.discount_cashback_type] : image["coin"]
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "flex flex-col items-start gap-0.5" }, [
                        checkExpired(row.end_date) ? (openBlock(), createBlock(_component_UBadge, {
                          key: 0,
                          label: "Telah Berakhir",
                          color: "gray",
                          size: "xs",
                          variant: "soft",
                          ui: {
                            variant: {
                              soft: "bg-gray-100"
                            }
                          }
                        })) : createCommentVNode("", true),
                        createVNode("span", { class: "text-sm font-medium" }, toDisplayString(row.name), 1),
                        createVNode("span", { class: "text-sm" }, "KODE:" + toDisplayString(row.code), 1)
                      ])
                    ])
                  ]),
                  "end_date-data": withCtx(({ row }) => [
                    createTextVNode(toDisplayString(formatDate(row.start_date)) + " - " + toDisplayString(formatDate(row.end_date)), 1)
                  ]),
                  "discount-data": withCtx(({ row }) => [
                    createVNode("p", null, toDisplayString(row.discount_cashback_type === "fixed" ? "Rp" : "") + toDisplayString(("formatNumber" in _ctx ? _ctx.formatNumber : unref(formatNumber))(row.discount_cashback_value)) + toDisplayString(row.discount_cashback_type === "percentage" ? "%" : ""), 1),
                    row.voucher_type === "cashback" ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex gap-2 items-center text-sm text-black/55"
                    }, [
                      createVNode(_component_IconCoin, { class: "w-4 h-4" }),
                      createTextVNode(" Cashback Koin ")
                    ])) : createCommentVNode("", true)
                  ]),
                  "action-data": withCtx(({ row }) => [
                    createVNode("div", { class: "flex flex-col gap-2" }, [
                      createVNode(_component_UButton, {
                        label: "Ubah",
                        variant: "link",
                        color: "blue",
                        padded: false,
                        disabled: unref(statusDelete) === "pending",
                        onClick: ($event) => handleEdit(row)
                      }, null, 8, ["disabled", "onClick"]),
                      createVNode(_component_UButton, {
                        label: "Hapus",
                        variant: "link",
                        color: "blue",
                        padded: false,
                        loading: unref(statusDelete) === "pending" && unref(deleteId) === row.uuid,
                        onClick: ($event) => handleDelete(row)
                      }, null, 8, ["loading", "onClick"])
                    ])
                  ]),
                  _: 1
                }, 8, ["page", "onUpdate:page", "total", "per-page", "rows", "loading"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/seller/voucher/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-vxniujEa.mjs.map
