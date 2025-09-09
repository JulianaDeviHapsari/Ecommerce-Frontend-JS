import { d as useNuxtApp, e as useRouter, b as __nuxt_component_5, r as refreshNuxtData } from './server.mjs';
import { _ as __nuxt_component_5$1 } from './Card-DbWg7JF8.mjs';
import { _ as __nuxt_component_3 } from './Input-BSkwWT7v.mjs';
import { _ as __nuxt_component_5$2 } from './SelectMenu-DcvHs5ij.mjs';
import { _ as _sfc_main$1 } from './DataTable-CV_rXQXz.mjs';
import { f as formatNumber } from './number.utils-vPnlR88w.mjs';
import { ref, computed, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, createBlock, createCommentVNode, openBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { u as useApi } from './use-api-DLZ2CTc2.mjs';
import { u as useSubmit } from './use-submit-TWB9IMR2.mjs';
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
import './useFormGroup-B6xiYqr7.mjs';
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
import './Checkbox-Cf2pHysF.mjs';
import './Pagination-Xmx5_6mI.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const nuxtApp = useNuxtApp();
    const router = useRouter();
    const formFilter = ref({
      search: void 0,
      category: void 0
    });
    const pagination = ref({
      page: 1,
      per_page: 10
    });
    const deleteId = ref();
    const columns = [
      {
        key: "name",
        label: "Produk"
      },
      {
        key: "sale_count",
        label: "Penjualan"
      },
      {
        key: "price",
        label: "Harga"
      },
      {
        key: "stock",
        label: "Stok"
      },
      {
        key: "action",
        label: "Aksi"
      }
    ];
    const { data: categories, status: statusCategory } = useApi(
      "/server/api/category",
      {
        key: "category-list",
        transform(response) {
          return ((response == null ? void 0 : response.data) || []).reduce((result, parent) => {
            result.push(
              ...parent.childs.map((child) => ({
                ...child,
                icon: parent.icon,
                name: `${parent.name} - ${child.name}`
              }))
            );
            return result;
          }, []);
        },
        getCachedData() {
          var _a, _b;
          return ((_a = nuxtApp.payload.data) == null ? void 0 : _a["category-list"]) || ((_b = nuxtApp.static.data) == null ? void 0 : _b["category-list"]);
        }
      }
    );
    const { data, status, execute } = useApi(
      "/server/api/seller-dashboard/product",
      {
        key: "product-seller",
        params: computed(() => {
          return {
            ...pagination.value,
            ...formFilter.value
          };
        }),
        transform(response) {
          return (response == null ? void 0 : response.data) || {};
        },
        watch: false
      }
    );
    const { execute: deleteProduct, status: statusDelete } = useSubmit(
      computed(() => `/server/api/seller-dashboard/product/${deleteId.value}`),
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
    const optionsCategories = computed(
      () => {
        var _a;
        return (_a = categories.value) == null ? void 0 : _a.map((item) => ({ ...item, icon: void 0 }));
      }
    );
    const products = computed(() => {
      var _a;
      return ((_a = data.value) == null ? void 0 : _a.data) || [];
    });
    function handleEdit(row) {
      router.push({
        path: `/seller/product/edit/${row.uuid}`,
        state: { product: JSON.stringify(row) }
      });
    }
    function handleDelete(row) {
      const confirm = (void 0).confirm("Anda yakin untuk menghapus produk ini?");
      if (!confirm) return;
      deleteId.value = row.uuid;
      deleteProduct();
    }
    function applyFilter() {
      pagination.value.page = 1;
      execute();
    }
    function resetFilter() {
      pagination.value.page = 1;
      formFilter.value = {
        search: void 0,
        category: void 0
      };
      execute();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_5;
      const _component_UCard = __nuxt_component_5$1;
      const _component_UInput = __nuxt_component_3;
      const _component_USelectMenu = __nuxt_component_5$2;
      const _component_BaseDataTable = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-9" }, _attrs))}><div class="flex justify-between items-center gap-2"><h3 class="font-medium text-xl">Produk Saya</h3>`);
      _push(ssrRenderComponent(_component_UButton, {
        icon: "i-heroicons:plus",
        label: "Tambah Produk Baru",
        to: "/seller/product/add"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            _push2(`<div class="space-y-6"${_scopeId}><div class="flex gap-4 items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: unref(formFilter).search,
              "onUpdate:modelValue": ($event) => unref(formFilter).search = $event,
              "leading-icon": "i-heroicons:magnifying-glass",
              class: "flex-1",
              placeholder: "Cari Nama Produk, SKU Induk, Kode Variasi, ID Produk"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_USelectMenu, {
              modelValue: unref(formFilter).category,
              "onUpdate:modelValue": ($event) => unref(formFilter).category = $event,
              options: unref(optionsCategories),
              placeholder: "Cari berdasarkan kategori",
              class: "flex-1",
              loading: unref(statusCategory) === "pending",
              disabled: unref(statusCategory) === "pending",
              "value-attribute": "slug",
              "option-attribute": "name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              size: "xs",
              label: "Terapkan",
              variant: "outline",
              onClick: applyFilter
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              size: "xs",
              label: "Atur Ulang",
              color: "white",
              onClick: resetFilter
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            if (unref(status) !== "pending") {
              _push2(`<p class="text-lg font-medium"${_scopeId}>${ssrInterpolate(((_a = unref(data)) == null ? void 0 : _a.total) || 0)} Produk </p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_BaseDataTable, {
              page: unref(pagination).page,
              "onUpdate:page": [($event) => unref(pagination).page = $event, unref(execute)],
              columns,
              rows: unref(products),
              "empty-text": "Produk Tidak Ditemukan",
              loading: unref(status) === "pending",
              total: (_b = unref(data)) == null ? void 0 : _b.total,
              "per-page": unref(pagination).per_page
            }, {
              "name-data": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                var _a2, _b2;
                if (_push3) {
                  _push3(`<div class="flex gap-2"${_scopeId2}><img${ssrRenderAttr("src", (_a2 = row.images) == null ? void 0 : _a2[0])} class="w-14 h-14 object-cover"${_scopeId2}><div class="flex flex-col items-start gap-0.5"${_scopeId2}><span class="text-sm font-medium"${_scopeId2}>${ssrInterpolate(row.name)}</span><span class="text-sm text-black/65"${_scopeId2}> ID Produk: ${ssrInterpolate(row.uuid)}</span></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex gap-2" }, [
                      createVNode("img", {
                        src: (_b2 = row.images) == null ? void 0 : _b2[0],
                        class: "w-14 h-14 object-cover"
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "flex flex-col items-start gap-0.5" }, [
                        createVNode("span", { class: "text-sm font-medium" }, toDisplayString(row.name), 1),
                        createVNode("span", { class: "text-sm text-black/65" }, " ID Produk: " + toDisplayString(row.uuid), 1)
                      ])
                    ])
                  ];
                }
              }),
              "price-data": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Rp${ssrInterpolate(("formatNumber" in _ctx ? _ctx.formatNumber : unref(formatNumber))(row.price))}`);
                } else {
                  return [
                    createTextVNode(" Rp" + toDisplayString(("formatNumber" in _ctx ? _ctx.formatNumber : unref(formatNumber))(row.price)), 1)
                  ];
                }
              }),
              "action-data": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col gap-1"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    variant: "link",
                    padded: false,
                    color: "blue",
                    label: "Ubah",
                    disabled: unref(statusDelete) === "pending",
                    onClick: ($event) => handleEdit(row)
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    variant: "link",
                    padded: false,
                    color: "blue",
                    label: "Hapus",
                    loading: unref(statusDelete) === "pending" && unref(deleteId) === row.uuid,
                    onClick: ($event) => handleDelete(row)
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col gap-1" }, [
                      createVNode(_component_UButton, {
                        variant: "link",
                        padded: false,
                        color: "blue",
                        label: "Ubah",
                        disabled: unref(statusDelete) === "pending",
                        onClick: ($event) => handleEdit(row)
                      }, null, 8, ["disabled", "onClick"]),
                      createVNode(_component_UButton, {
                        variant: "link",
                        padded: false,
                        color: "blue",
                        label: "Hapus",
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
              createVNode("div", { class: "space-y-6" }, [
                createVNode("div", { class: "flex gap-4 items-center" }, [
                  createVNode(_component_UInput, {
                    modelValue: unref(formFilter).search,
                    "onUpdate:modelValue": ($event) => unref(formFilter).search = $event,
                    "leading-icon": "i-heroicons:magnifying-glass",
                    class: "flex-1",
                    placeholder: "Cari Nama Produk, SKU Induk, Kode Variasi, ID Produk"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_USelectMenu, {
                    modelValue: unref(formFilter).category,
                    "onUpdate:modelValue": ($event) => unref(formFilter).category = $event,
                    options: unref(optionsCategories),
                    placeholder: "Cari berdasarkan kategori",
                    class: "flex-1",
                    loading: unref(statusCategory) === "pending",
                    disabled: unref(statusCategory) === "pending",
                    "value-attribute": "slug",
                    "option-attribute": "name"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "loading", "disabled"]),
                  createVNode(_component_UButton, {
                    size: "xs",
                    label: "Terapkan",
                    variant: "outline",
                    onClick: applyFilter
                  }),
                  createVNode(_component_UButton, {
                    size: "xs",
                    label: "Atur Ulang",
                    color: "white",
                    onClick: resetFilter
                  })
                ]),
                unref(status) !== "pending" ? (openBlock(), createBlock("p", {
                  key: 0,
                  class: "text-lg font-medium"
                }, toDisplayString(((_c = unref(data)) == null ? void 0 : _c.total) || 0) + " Produk ", 1)) : createCommentVNode("", true),
                createVNode(_component_BaseDataTable, {
                  page: unref(pagination).page,
                  "onUpdate:page": [($event) => unref(pagination).page = $event, unref(execute)],
                  columns,
                  rows: unref(products),
                  "empty-text": "Produk Tidak Ditemukan",
                  loading: unref(status) === "pending",
                  total: (_d = unref(data)) == null ? void 0 : _d.total,
                  "per-page": unref(pagination).per_page
                }, {
                  "name-data": withCtx(({ row }) => {
                    var _a2;
                    return [
                      createVNode("div", { class: "flex gap-2" }, [
                        createVNode("img", {
                          src: (_a2 = row.images) == null ? void 0 : _a2[0],
                          class: "w-14 h-14 object-cover"
                        }, null, 8, ["src"]),
                        createVNode("div", { class: "flex flex-col items-start gap-0.5" }, [
                          createVNode("span", { class: "text-sm font-medium" }, toDisplayString(row.name), 1),
                          createVNode("span", { class: "text-sm text-black/65" }, " ID Produk: " + toDisplayString(row.uuid), 1)
                        ])
                      ])
                    ];
                  }),
                  "price-data": withCtx(({ row }) => [
                    createTextVNode(" Rp" + toDisplayString(("formatNumber" in _ctx ? _ctx.formatNumber : unref(formatNumber))(row.price)), 1)
                  ]),
                  "action-data": withCtx(({ row }) => [
                    createVNode("div", { class: "flex flex-col gap-1" }, [
                      createVNode(_component_UButton, {
                        variant: "link",
                        padded: false,
                        color: "blue",
                        label: "Ubah",
                        disabled: unref(statusDelete) === "pending",
                        onClick: ($event) => handleEdit(row)
                      }, null, 8, ["disabled", "onClick"]),
                      createVNode(_component_UButton, {
                        variant: "link",
                        padded: false,
                        color: "blue",
                        label: "Hapus",
                        loading: unref(statusDelete) === "pending" && unref(deleteId) === row.uuid,
                        onClick: ($event) => handleDelete(row)
                      }, null, 8, ["loading", "onClick"])
                    ])
                  ]),
                  _: 1
                }, 8, ["page", "onUpdate:page", "rows", "loading", "total", "per-page"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/seller/product/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-mA4I_mqh.mjs.map
