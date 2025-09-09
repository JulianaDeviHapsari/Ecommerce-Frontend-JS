import { _ as __nuxt_component_1$1 } from './Container-D6NRf-p3.mjs';
import { ref, reactive, computed, watch, mergeProps, withCtx, unref, createTextVNode, createVNode, createBlock, openBlock, Fragment, renderList, createCommentVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc, d as useNuxtApp, x as useRoute, e as useRouter, M as useSeoMeta, b as __nuxt_component_5$1 } from './server.mjs';
import { _ as __nuxt_component_3 } from './Input-BSkwWT7v.mjs';
import { _ as __nuxt_component_3$1 } from './Checkbox-Cf2pHysF.mjs';
import { _ as __nuxt_component_6 } from './Skeleton-BQCeVCk_.mjs';
import { _ as __nuxt_component_7 } from './ProductCard-D756mFH9.mjs';
import { _ as _sfc_main$3 } from './Pagination-Xmx5_6mI.mjs';
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
import './useFormGroup-B6xiYqr7.mjs';
import './NuxtImg-DLumQ5km.mjs';
import './number.utils-vPnlR88w.mjs';

const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none"
  }, _attrs))}><path d="M4.39922 10.5668V4.6468L1.19922 0.966797H10.7992L7.59922 4.6468V8.1668" stroke="black" stroke-opacity="0.8" stroke-width="0.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon/Filter.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "17",
    height: "22",
    viewBox: "0 0 17 22",
    fill: "none"
  }, _attrs))}><path d="M6.29613 18.9416H10.9076C11.3624 18.9416 11.7311 18.5878 11.7311 18.1515C11.7311 17.7151 11.3624 17.3613 10.9076 17.3613H6.29613C5.84134 17.3613 5.47266 17.7151 5.47266 18.1515C5.47266 18.5878 5.84134 18.9416 6.29613 18.9416Z" fill="#555555"></path><path d="M7.6862 21.3127H9.55286C9.92105 21.3127 10.2195 20.9589 10.2195 20.5225C10.2195 20.0862 9.92105 19.7324 9.55286 19.7324H7.6862C7.31801 19.7324 7.01953 20.0862 7.01953 20.5225C7.01953 20.9589 7.31801 21.3127 7.6862 21.3127Z" fill="#555555"></path><path d="M7.73047 8.13667V12.2848C7.73047 12.6666 8.08864 12.9762 8.53047 12.9762C8.9723 12.9762 9.33047 12.6666 9.33047 12.2848V8.13667C9.33047 7.75484 8.9723 7.44531 8.53047 7.44531C8.08864 7.44531 7.73047 7.75484 7.73047 8.13667Z" fill="#555555"></path><path d="M7.73047 5.07528V5.86541C7.73047 6.30178 8.08864 6.65553 8.53047 6.65553C8.9723 6.65553 9.33047 6.30178 9.33047 5.86541V5.07528C9.33047 4.63891 8.9723 4.28516 8.53047 4.28516C8.08864 4.28516 7.73047 4.63891 7.73047 5.07528Z" fill="#555555"></path><path d="M8.3543 0.333984C4.03268 0.333984 0.53125 3.87058 0.53125 8.23522C0.53125 9.74119 0.954518 11.1413 1.68247 12.336L3.90751 15.871C4.17597 16.2961 4.65688 16.5552 5.17402 16.5552H11.5543C12.1835 16.5552 12.7648 16.2281 13.0679 15.7003L15.1348 12.1258C15.7936 10.9801 16.1773 9.65586 16.1773 8.23522C16.1773 3.87058 12.6743 0.333984 8.3543 0.333984ZM8.3543 1.91423C11.7586 1.91423 14.5304 4.74919 14.5304 8.23522C14.5304 9.34139 14.2488 10.3954 13.6954 11.3594L11.6284 14.9339C11.6136 14.9592 11.5856 14.975 11.5543 14.975H5.2679L3.1038 11.5395C2.49772 10.544 2.17821 9.40144 2.17821 8.23522C2.17821 4.74919 4.94839 1.91423 8.3543 1.91423Z" fill="#555555"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon/Lamp.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "search",
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const nuxtApp = useNuxtApp();
    const route = useRoute();
    const router = useRouter();
    const pagination = ref({
      page: 1
    });
    const formFilter = ref({
      categories: (typeof ((_a = route.query) == null ? void 0 : _a.categories) === "string" ? [(_b = route.query) == null ? void 0 : _b.categories] : (_c = route.query) == null ? void 0 : _c.categories) || [],
      minimum_price: ((_d = route.query) == null ? void 0 : _d.minimum_price) || void 0,
      maximum_price: ((_e = route.query) == null ? void 0 : _e.maximum_price) || void 0,
      sorting_price: ((_f = route.query) == null ? void 0 : _f.sorting_price) || "asc"
    });
    const temporaryPrice = reactive({
      minimum_price: ((_g = route.query) == null ? void 0 : _g.minimum_price) || void 0,
      maximum_price: ((_h = route.query) == null ? void 0 : _h.maximum_price) || void 0
    });
    const { data: categories } = useApi("/server/api/category", {
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
        var _a2, _b2;
        return ((_a2 = nuxtApp.payload.data) == null ? void 0 : _a2["category-list"]) || ((_b2 = nuxtApp.static.data) == null ? void 0 : _b2["category-list"]);
      }
    });
    const { data, status } = useApi("/server/api/product", {
      params: computed(() => {
        var _a2;
        return {
          search: (_a2 = route.query) == null ? void 0 : _a2.search,
          ...formFilter.value,
          ...pagination.value,
          categories: void 0,
          "categories[]": formFilter.value.categories
        };
      }),
      dedupe: "defer"
    });
    watch(
      formFilter,
      (newFormFilter) => {
        router.push({
          query: {
            ...route.query,
            ...newFormFilter
          }
        });
      },
      { deep: true }
    );
    function applyFilterPrice() {
      formFilter.value.minimum_price = temporaryPrice.minimum_price;
      formFilter.value.maximum_price = temporaryPrice.maximum_price;
    }
    function resetFilter() {
      formFilter.value = {
        categories: [],
        minimum_price: void 0,
        maximum_price: void 0,
        sorting_price: "asc"
      };
      temporaryPrice.minimum_price = void 0;
      temporaryPrice.maximum_price = void 0;
    }
    const titleMeta = computed(
      () => {
        var _a2, _b2;
        return ((_a2 = route.query) == null ? void 0 : _a2.search) ? `Sedang mencari produk ${(_b2 = route.query) == null ? void 0 : _b2.search}` : `Sedang mencari produk${route.query.categories ? ` ${route.query.categories}` : ""}`;
      }
    );
    useSeoMeta({
      title: titleMeta,
      ogTitle: () => `${titleMeta.value} | Syopo`,
      twitterTitle: () => `${titleMeta.value} | Syopo`,
      description: titleMeta,
      ogDescription: titleMeta,
      twitterDescription: titleMeta
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = __nuxt_component_1$1;
      const _component_IconFilter = __nuxt_component_1;
      const _component_UInput = __nuxt_component_3;
      const _component_UButton = __nuxt_component_5$1;
      const _component_UCheckbox = __nuxt_component_3$1;
      const _component_IconLamp = __nuxt_component_5;
      const _component_USkeleton = __nuxt_component_6;
      const _component_BaseProductCard = __nuxt_component_7;
      const _component_BasePagination = _sfc_main$3;
      _push(ssrRenderComponent(_component_UContainer, mergeProps({ id: "search-section" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H;
          if (_push2) {
            _push2(`<div class="search-filter" data-v-ca3f8541${_scopeId}><div class="filter-title" data-v-ca3f8541${_scopeId}>`);
            _push2(ssrRenderComponent(_component_IconFilter, null, null, _parent2, _scopeId));
            _push2(`<h2 data-v-ca3f8541${_scopeId}>Filter</h2></div><div class="filter-item" data-v-ca3f8541${_scopeId}><h3 data-v-ca3f8541${_scopeId}>Batas Harga</h3><div class="flex gap-2 items-center" data-v-ca3f8541${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: unref(temporaryPrice).minimum_price,
              "onUpdate:modelValue": ($event) => unref(temporaryPrice).minimum_price = $event,
              type: "number",
              placeholder: "Rp MIN"
            }, null, _parent2, _scopeId));
            _push2(`<div class="h-[1px] bg-gray-300 w-10" data-v-ca3f8541${_scopeId}></div>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: unref(temporaryPrice).maximum_price,
              "onUpdate:modelValue": ($event) => unref(temporaryPrice).maximum_price = $event,
              type: "number",
              placeholder: "Rp MAX"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_UButton, {
              block: "",
              class: "py-2",
              onClick: applyFilterPrice
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`TERAPKAN`);
                } else {
                  return [
                    createTextVNode("TERAPKAN")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><hr data-v-ca3f8541${_scopeId}><div class="filter-item" data-v-ca3f8541${_scopeId}><h3 data-v-ca3f8541${_scopeId}>Berdasarkan Kategori</h3><div class="flex flex-col gap-2" data-v-ca3f8541${_scopeId}><!--[-->`);
            ssrRenderList(unref(categories), (cat) => {
              _push2(ssrRenderComponent(_component_UCheckbox, {
                key: `cat-${cat.slug}`,
                modelValue: unref(formFilter).categories,
                "onUpdate:modelValue": ($event) => unref(formFilter).categories = $event,
                label: cat.name,
                value: cat.slug
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div><hr data-v-ca3f8541${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              block: "",
              class: "py-2",
              onClick: resetFilter
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`HAPUS SEMUA`);
                } else {
                  return [
                    createTextVNode("HAPUS SEMUA")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="search-result" data-v-ca3f8541${_scopeId}>`);
            if (unref(route).query.search) {
              _push2(`<div class="search-keyword" data-v-ca3f8541${_scopeId}>`);
              _push2(ssrRenderComponent(_component_IconLamp, null, null, _parent2, _scopeId));
              _push2(`<p data-v-ca3f8541${_scopeId}> Hasil pencarian untuk &#39;<span data-v-ca3f8541${_scopeId}>${ssrInterpolate((_a2 = unref(route).query) == null ? void 0 : _a2.search)}</span>&#39; </p></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="search-sort" data-v-ca3f8541${_scopeId}><div class="search-sort-control" data-v-ca3f8541${_scopeId}><p data-v-ca3f8541${_scopeId}>Urutkan</p>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: unref(formFilter).sorting_price === "asc" ? "primary" : "white",
              class: "px-6",
              onClick: ($event) => unref(formFilter).sorting_price = "asc"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Termurah`);
                } else {
                  return [
                    createTextVNode("Termurah")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: unref(formFilter).sorting_price === "desc" ? "primary" : "white",
              class: "px-6",
              onClick: ($event) => unref(formFilter).sorting_price = "desc"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Termahal`);
                } else {
                  return [
                    createTextVNode("Termahal")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if ((_d2 = (_c2 = (_b2 = unref(data)) == null ? void 0 : _b2.data) == null ? void 0 : _c2.data) == null ? void 0 : _d2.length) {
              _push2(`<div class="search-sort-pagination" data-v-ca3f8541${_scopeId}><p data-v-ca3f8541${_scopeId}><span data-v-ca3f8541${_scopeId}>${ssrInterpolate(unref(pagination).page)}</span>/${ssrInterpolate(((_f2 = (_e2 = unref(data)) == null ? void 0 : _e2.data) == null ? void 0 : _f2.last_page) || 0)}</p><div data-v-ca3f8541${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                icon: "i-heroicons:chevron-left-20-solid",
                color: "gray",
                size: "xs",
                disabled: !((_h2 = (_g2 = unref(data)) == null ? void 0 : _g2.data) == null ? void 0 : _h2.prev_page_url),
                onClick: ($event) => unref(pagination).page--
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UButton, {
                icon: "i-heroicons:chevron-right-20-solid",
                color: "gray",
                size: "xs",
                class: "bg-black/5",
                disabled: !((_j = (_i = unref(data)) == null ? void 0 : _i.data) == null ? void 0 : _j.next_page_url),
                onClick: ($event) => unref(pagination).page++
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (unref(status) === "pending") {
              _push2(`<div class="search-content" data-v-ca3f8541${_scopeId}><!--[-->`);
              ssrRenderList(5, (i) => {
                _push2(`<div class="bg-white p-2" data-v-ca3f8541${_scopeId}>`);
                _push2(ssrRenderComponent(_component_USkeleton, { class: "aspect-[1/1]" }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_USkeleton, { class: "w-full h-4 mt-2" }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_USkeleton, { class: "w-8/12 h-4 mt-2" }, null, _parent2, _scopeId));
                _push2(`</div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!--[-->`);
              if ((_m = (_l = (_k = unref(data)) == null ? void 0 : _k.data) == null ? void 0 : _l.data) == null ? void 0 : _m.length) {
                _push2(`<!--[--><div class="search-content" data-v-ca3f8541${_scopeId}><!--[-->`);
                ssrRenderList((_o = (_n = unref(data)) == null ? void 0 : _n.data) == null ? void 0 : _o.data, (prod) => {
                  _push2(ssrRenderComponent(_component_BaseProductCard, {
                    key: `product-${prod.uuid}`,
                    title: prod.name,
                    price: prod.price_sale || prod.price,
                    image: prod.image_url,
                    sale: prod.sale_count,
                    slug: prod.slug,
                    discount: prod.price_discount_percentage
                  }, null, _parent2, _scopeId));
                });
                _push2(`<!--]--></div><div class="flex justify-center mt-8" data-v-ca3f8541${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BasePagination, {
                  modelValue: unref(pagination).page,
                  "onUpdate:modelValue": ($event) => unref(pagination).page = $event,
                  total: ((_q = (_p = unref(data)) == null ? void 0 : _p.data) == null ? void 0 : _q.total) || 0
                }, null, _parent2, _scopeId));
                _push2(`</div><!--]-->`);
              } else {
                _push2(`<div class="text-center py-4 text-black/65" data-v-ca3f8541${_scopeId}> Tidak ada product yang ditemukan </div>`);
              }
              _push2(`<!--]-->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "search-filter" }, [
                createVNode("div", { class: "filter-title" }, [
                  createVNode(_component_IconFilter),
                  createVNode("h2", null, "Filter")
                ]),
                createVNode("div", { class: "filter-item" }, [
                  createVNode("h3", null, "Batas Harga"),
                  createVNode("div", { class: "flex gap-2 items-center" }, [
                    createVNode(_component_UInput, {
                      modelValue: unref(temporaryPrice).minimum_price,
                      "onUpdate:modelValue": ($event) => unref(temporaryPrice).minimum_price = $event,
                      type: "number",
                      placeholder: "Rp MIN"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("div", { class: "h-[1px] bg-gray-300 w-10" }),
                    createVNode(_component_UInput, {
                      modelValue: unref(temporaryPrice).maximum_price,
                      "onUpdate:modelValue": ($event) => unref(temporaryPrice).maximum_price = $event,
                      type: "number",
                      placeholder: "Rp MAX"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode(_component_UButton, {
                    block: "",
                    class: "py-2",
                    onClick: applyFilterPrice
                  }, {
                    default: withCtx(() => [
                      createTextVNode("TERAPKAN")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("hr"),
                createVNode("div", { class: "filter-item" }, [
                  createVNode("h3", null, "Berdasarkan Kategori"),
                  createVNode("div", { class: "flex flex-col gap-2" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(categories), (cat) => {
                      return openBlock(), createBlock(_component_UCheckbox, {
                        key: `cat-${cat.slug}`,
                        modelValue: unref(formFilter).categories,
                        "onUpdate:modelValue": ($event) => unref(formFilter).categories = $event,
                        label: cat.name,
                        value: cat.slug
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "value"]);
                    }), 128))
                  ])
                ]),
                createVNode("hr"),
                createVNode(_component_UButton, {
                  block: "",
                  class: "py-2",
                  onClick: resetFilter
                }, {
                  default: withCtx(() => [
                    createTextVNode("HAPUS SEMUA")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "search-result" }, [
                unref(route).query.search ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "search-keyword"
                }, [
                  createVNode(_component_IconLamp),
                  createVNode("p", null, [
                    createTextVNode(" Hasil pencarian untuk '"),
                    createVNode("span", null, toDisplayString((_r = unref(route).query) == null ? void 0 : _r.search), 1),
                    createTextVNode("' ")
                  ])
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "search-sort" }, [
                  createVNode("div", { class: "search-sort-control" }, [
                    createVNode("p", null, "Urutkan"),
                    createVNode(_component_UButton, {
                      color: unref(formFilter).sorting_price === "asc" ? "primary" : "white",
                      class: "px-6",
                      onClick: ($event) => unref(formFilter).sorting_price = "asc"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Termurah")
                      ]),
                      _: 1
                    }, 8, ["color", "onClick"]),
                    createVNode(_component_UButton, {
                      color: unref(formFilter).sorting_price === "desc" ? "primary" : "white",
                      class: "px-6",
                      onClick: ($event) => unref(formFilter).sorting_price = "desc"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Termahal")
                      ]),
                      _: 1
                    }, 8, ["color", "onClick"])
                  ]),
                  ((_u = (_t = (_s = unref(data)) == null ? void 0 : _s.data) == null ? void 0 : _t.data) == null ? void 0 : _u.length) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "search-sort-pagination"
                  }, [
                    createVNode("p", null, [
                      createVNode("span", null, toDisplayString(unref(pagination).page), 1),
                      createTextVNode("/" + toDisplayString(((_w = (_v = unref(data)) == null ? void 0 : _v.data) == null ? void 0 : _w.last_page) || 0), 1)
                    ]),
                    createVNode("div", null, [
                      createVNode(_component_UButton, {
                        icon: "i-heroicons:chevron-left-20-solid",
                        color: "gray",
                        size: "xs",
                        disabled: !((_y = (_x = unref(data)) == null ? void 0 : _x.data) == null ? void 0 : _y.prev_page_url),
                        onClick: ($event) => unref(pagination).page--
                      }, null, 8, ["disabled", "onClick"]),
                      createVNode(_component_UButton, {
                        icon: "i-heroicons:chevron-right-20-solid",
                        color: "gray",
                        size: "xs",
                        class: "bg-black/5",
                        disabled: !((_A = (_z = unref(data)) == null ? void 0 : _z.data) == null ? void 0 : _A.next_page_url),
                        onClick: ($event) => unref(pagination).page++
                      }, null, 8, ["disabled", "onClick"])
                    ])
                  ])) : createCommentVNode("", true)
                ]),
                unref(status) === "pending" ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "search-content"
                }, [
                  (openBlock(), createBlock(Fragment, null, renderList(5, (i) => {
                    return createVNode("div", {
                      key: `loading-${i}`,
                      class: "bg-white p-2"
                    }, [
                      createVNode(_component_USkeleton, { class: "aspect-[1/1]" }),
                      createVNode(_component_USkeleton, { class: "w-full h-4 mt-2" }),
                      createVNode(_component_USkeleton, { class: "w-8/12 h-4 mt-2" })
                    ]);
                  }), 64))
                ])) : (openBlock(), createBlock(Fragment, { key: 2 }, [
                  ((_D = (_C = (_B = unref(data)) == null ? void 0 : _B.data) == null ? void 0 : _C.data) == null ? void 0 : _D.length) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                    createVNode("div", { class: "search-content" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList((_F = (_E = unref(data)) == null ? void 0 : _E.data) == null ? void 0 : _F.data, (prod) => {
                        return openBlock(), createBlock(_component_BaseProductCard, {
                          key: `product-${prod.uuid}`,
                          title: prod.name,
                          price: prod.price_sale || prod.price,
                          image: prod.image_url,
                          sale: prod.sale_count,
                          slug: prod.slug,
                          discount: prod.price_discount_percentage
                        }, null, 8, ["title", "price", "image", "sale", "slug", "discount"]);
                      }), 128))
                    ]),
                    createVNode("div", { class: "flex justify-center mt-8" }, [
                      createVNode(_component_BasePagination, {
                        modelValue: unref(pagination).page,
                        "onUpdate:modelValue": ($event) => unref(pagination).page = $event,
                        total: ((_H = (_G = unref(data)) == null ? void 0 : _G.data) == null ? void 0 : _H.total) || 0
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "total"])
                    ])
                  ], 64)) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "text-center py-4 text-black/65"
                  }, " Tidak ada product yang ditemukan "))
                ], 64))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const search = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ca3f8541"]]);

export { search as default };
//# sourceMappingURL=search-zLyTwbJd.mjs.map
