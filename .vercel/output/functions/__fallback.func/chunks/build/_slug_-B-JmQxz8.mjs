import { _ as __nuxt_component_1 } from './Container-D6NRf-p3.mjs';
import { _ as __nuxt_component_5 } from './Card-DbWg7JF8.mjs';
import { _ as __nuxt_component_6 } from './Skeleton-BQCeVCk_.mjs';
import { _ as __nuxt_component_0 } from './Breadcrumb-CMnxnrU0.mjs';
import { _ as __nuxt_component_0$1 } from './Carousel-BL-Tk4PX.mjs';
import { _ as _sfc_main$5 } from './NuxtImg-DLumQ5km.mjs';
import { computed, unref, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, createCommentVNode, ref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _sfc_main$4 } from './Rating-CzUxWdt7.mjs';
import { _ as __nuxt_component_5$1 } from './Badge-CoW0C7GQ.mjs';
import { _ as _export_sfc, d as useNuxtApp, x as useRoute, l as useToast, L as useState, N as showError, r as refreshNuxtData, M as useSeoMeta, b as __nuxt_component_5$2, E as __nuxt_component_2$1, f as __nuxt_component_3 } from './server.mjs';
import { _ as __nuxt_component_8 } from './InputQuantity-_SMfgbqC.mjs';
import { _ as __nuxt_component_2 } from './Shop-B22w5_LP.mjs';
import { _ as __nuxt_component_5$3 } from './Loading-DEfyuitU.mjs';
import { _ as _sfc_main$6 } from './Pagination-Xmx5_6mI.mjs';
import { u as useApi } from './use-api-DLZ2CTc2.mjs';
import { _ as __nuxt_component_7 } from './ProductCard-D756mFH9.mjs';
import { _ as _imports_0 } from './garansi-r93UczOs.mjs';
import useVuelidate from '@vuelidate/core';
import { maxValue, minValue, required } from '@vuelidate/validators';
import { f as formatNumber } from './number.utils-vPnlR88w.mjs';
import { u as useSubmit } from './use-submit-TWB9IMR2.mjs';
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

const _sfc_main$3 = {
  __name: "Carousel",
  __ssrInlineRender: true,
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const carouselElement = ref();
    const indicatorsElement = ref();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCarousel = __nuxt_component_0$1;
      const _component_NuxtImg = _sfc_main$5;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_UCarousel, {
        ref_key: "carouselElement",
        ref: carouselElement,
        items: __props.items,
        ui: {
          item: "basis-full",
          container: "h-full"
        },
        class: "max-h-[450px] aspect-[1/1]"
      }, {
        default: withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (item.type === "img") {
              _push2(ssrRenderComponent(_component_NuxtImg, {
                src: item.src,
                class: "w-full aspect-[1/1] object-cover",
                draggable: "false",
                format: "webp"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (item.type === "video") {
              _push2(`<video class="w-full aspect-[1/1] object-cover" autoplay muted controls${_scopeId}><source${ssrRenderAttr("src", item.src)} type="video/mp4"${_scopeId}><p${_scopeId}>Your browser does not support the video tag.</p></video>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              item.type === "img" ? (openBlock(), createBlock(_component_NuxtImg, {
                key: 0,
                src: item.src,
                class: "w-full aspect-[1/1] object-cover",
                draggable: "false",
                format: "webp"
              }, null, 8, ["src"])) : createCommentVNode("", true),
              item.type === "video" ? (openBlock(), createBlock("video", {
                key: 1,
                class: "w-full aspect-[1/1] object-cover",
                autoplay: "",
                muted: "",
                controls: ""
              }, [
                createVNode("source", {
                  src: item.src,
                  type: "video/mp4"
                }, null, 8, ["src"]),
                createVNode("p", null, "Your browser does not support the video tag.")
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-3">`);
      _push(ssrRenderComponent(_component_UCarousel, {
        ref_key: "indicatorsElement",
        ref: indicatorsElement,
        items: __props.items,
        ui: {
          item: "basis-1/5"
        },
        "prev-button": {
          class: "text-white bg-black/20 rounded-none px-1 py-3 left-1 shadow-none",
          icon: "i-heroicons:chevron-left"
        },
        "next-button": {
          class: "text-white bg-black/20 rounded-none px-1 py-3 right-1 shadow-none",
          icon: "i-heroicons:chevron-right"
        },
        arrows: "",
        class: "max-w-[450px]"
      }, {
        default: withCtx(({ item, index }, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            if (item.type === "img") {
              _push2(ssrRenderComponent(_component_NuxtImg, {
                src: item.src,
                class: ["max-w-[82px] aspect-[1/1] m-1 object-cover", [
                  ((_a = unref(carouselElement)) == null ? void 0 : _a.page) === index + 1 ? "ring-2 ring-primary" : "ring-0"
                ]],
                role: "button",
                format: "webp",
                onClick: ($event) => {
                  var _a2;
                  return (_a2 = unref(carouselElement)) == null ? void 0 : _a2.select(index + 1);
                }
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (item.type === "video") {
              _push2(`<video${ssrRenderAttr("src", item.src)} class="${ssrRenderClass([[
                ((_b = unref(carouselElement)) == null ? void 0 : _b.page) === index + 1 ? "ring-2 ring-primary" : "ring-0"
              ], "max-w-[82px] aspect-[1/1] m-1 object-cover"])}" role="button"${_scopeId}></video>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              item.type === "img" ? (openBlock(), createBlock(_component_NuxtImg, {
                key: 0,
                src: item.src,
                class: ["max-w-[82px] aspect-[1/1] m-1 object-cover", [
                  ((_c = unref(carouselElement)) == null ? void 0 : _c.page) === index + 1 ? "ring-2 ring-primary" : "ring-0"
                ]],
                role: "button",
                format: "webp",
                onClick: ($event) => {
                  var _a2;
                  return (_a2 = unref(carouselElement)) == null ? void 0 : _a2.select(index + 1);
                }
              }, null, 8, ["src", "class", "onClick"])) : createCommentVNode("", true),
              item.type === "video" ? (openBlock(), createBlock("video", {
                key: 1,
                src: item.src,
                class: ["max-w-[82px] aspect-[1/1] m-1 object-cover", [
                  ((_d = unref(carouselElement)) == null ? void 0 : _d.page) === index + 1 ? "ring-2 ring-primary" : "ring-0"
                ]],
                role: "button",
                onClick: ($event) => {
                  var _a2;
                  return (_a2 = unref(carouselElement)) == null ? void 0 : _a2.select(index + 1);
                }
              }, null, 10, ["src", "onClick"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/feature/ProductDetail/Carousel.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none"
  }, _attrs))}><g clip-path="url(#clip0_4_4268)"><path d="M0.666016 0.666016H3.59935L6.93268 14.666H16.5327L19.3327 4.66602H4.93268" stroke="#EE4D2D" stroke-width="1.33333" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M7.99935 19.3327C8.73573 19.3327 9.33268 18.7357 9.33268 17.9993C9.33268 17.263 8.73573 16.666 7.99935 16.666C7.26297 16.666 6.66602 17.263 6.66602 17.9993C6.66602 18.7357 7.26297 19.3327 7.99935 19.3327Z" fill="#EE4D2D"></path><path d="M15.3333 19.3327C16.0697 19.3327 16.6667 18.7357 16.6667 17.9993C16.6667 17.263 16.0697 16.666 15.3333 16.666C14.597 16.666 14 17.263 14 17.9993C14 18.7357 14.597 19.3327 15.3333 19.3327Z" fill="#EE4D2D"></path><path d="M10 9.33203H14" stroke="#EE4D2D" stroke-width="1.33333" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M12 11.332V7.33203" stroke="#EE4D2D" stroke-width="1.33333" stroke-miterlimit="10" stroke-linecap="round"></path></g><defs><clipPath id="clip0_4_4268"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon/CartPlus.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_9 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "Review",
  __ssrInlineRender: true,
  props: {
    detail: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const pagination = ref({
      page: 1
    });
    const filterParam = ref("");
    const { data, status } = useApi(
      computed(() => `/server/api/product/${route.params.slug}/review`),
      {
        params: computed(() => {
          const filter = {};
          if (filterParam.value) {
            const [key, value] = filterParam.value.split(":");
            Object.assign(filter, { [key]: value });
          }
          return {
            ...pagination.value,
            ...filter
          };
        }),
        transform(response) {
          return response == null ? void 0 : response.data;
        }
      }
    );
    const filterList = computed(() => {
      var _a, _b, _c, _d, _e, _f, _g;
      return [
        {
          label: "Semua",
          value: ""
        },
        {
          label: `5 Bintang (${(_a = props.detail.review_summary) == null ? void 0 : _a[5]})`,
          value: "rating:5"
        },
        {
          label: `4 Bintang (${(_b = props.detail.review_summary) == null ? void 0 : _b[4]})`,
          value: "rating:4"
        },
        {
          label: `3 Bintang (${(_c = props.detail.review_summary) == null ? void 0 : _c[3]})`,
          value: "rating:3"
        },
        {
          label: `2 Bintang (${(_d = props.detail.review_summary) == null ? void 0 : _d[2]})`,
          value: "rating:2"
        },
        {
          label: `1 Bintang (${(_e = props.detail.review_summary) == null ? void 0 : _e[1]})`,
          value: "rating:1"
        },
        {
          label: `Dengan Komentar (${(_f = props.detail.review_summary) == null ? void 0 : _f.with_description})`,
          value: "with_description:1"
        },
        {
          label: `Dengan Media (${(_g = props.detail.review_summary) == null ? void 0 : _g.with_attachment})`,
          value: "with_attachment:1"
        }
      ];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_5;
      const _component_BaseRating = _sfc_main$4;
      const _component_UButton = __nuxt_component_5$2;
      const _component_UAvatar = __nuxt_component_2$1;
      const _component_NuxtImg = _sfc_main$5;
      const _component_IconLoading = __nuxt_component_5$3;
      const _component_BasePagination = _sfc_main$6;
      _push(ssrRenderComponent(_component_UCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            _push2(`<h3 class="text-lg font-normal text-black/85"${_scopeId}>Penilaian Produk</h3><div class="mt-3 border border-primary-100/80 bg-primary-50/30 rounded-sm p-8 flex gap-8 items-center"${_scopeId}><div class="flex flex-col items-center"${_scopeId}><p class="text-primary text-lg"${_scopeId}><span class="text-3xl"${_scopeId}>${ssrInterpolate(__props.detail.rating)}</span> dari 5 </p>`);
            _push2(ssrRenderComponent(_component_BaseRating, {
              "model-value": __props.detail.rating,
              disabled: "",
              size: "lg",
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-wrap gap-2 items-center"${_scopeId}><!--[-->`);
            ssrRenderList(unref(filterList), (filter) => {
              _push2(ssrRenderComponent(_component_UButton, {
                key: filter.label,
                variant: unref(filterParam) === filter.value ? "outline" : "solid",
                color: unref(filterParam) === filter.value ? "primary" : "white",
                size: "xs",
                class: "min-w-24 text-sm justify-center",
                onClick: ($event) => filterParam.value = filter.value
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(filter.label)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(filter.label), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div><div class="flex flex-col mt-1 divide-y"${_scopeId}><!--[-->`);
            ssrRenderList((_a = unref(data)) == null ? void 0 : _a.data, (review) => {
              var _a2;
              _push2(`<div class="flex gap-3 py-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UAvatar, {
                src: review.user_photo,
                alt: review.user_name,
                icon: "i-heroicons:user",
                size: "lg",
                "img-class": "object-cover"
              }, null, _parent2, _scopeId));
              _push2(`<div class="flex-1"${_scopeId}><p${_scopeId}>${ssrInterpolate(review.user_name)}</p>`);
              _push2(ssrRenderComponent(_component_BaseRating, {
                "model-value": review.star_seller,
                disabled: "",
                class: "mt-1"
              }, null, _parent2, _scopeId));
              _push2(`<div class="flex gap-1 mt-0.5 text-black/55 text-xs"${_scopeId}><p${_scopeId}>${ssrInterpolate(review.created_at)}</p> | <p${_scopeId}>${ssrInterpolate(review.variations)}</p></div>`);
              if (review.description) {
                _push2(`<p class="text-sm mt-2"${_scopeId}>${ssrInterpolate(review.description)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              if ((_a2 = review.attachments) == null ? void 0 : _a2.length) {
                _push2(`<div class="flex gap-2 flex-wrap mt-2"${_scopeId}><!--[-->`);
                ssrRenderList(review.attachments, (attach) => {
                  _push2(ssrRenderComponent(_component_NuxtImg, {
                    key: attach,
                    width: "72px",
                    height: "72px",
                    fit: "cover",
                    format: "webp",
                    src: attach
                  }, null, _parent2, _scopeId));
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div>`);
            });
            _push2(`<!--]-->`);
            if (unref(status) === "pending") {
              _push2(`<div class="flex gap-2 justify-center py-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_IconLoading, { class: "w-6 text-primary" }, null, _parent2, _scopeId));
              _push2(`<p${_scopeId}>Loading...</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if ((_b = unref(data)) == null ? void 0 : _b.total) {
              _push2(`<div class="flex justify-end pt-5"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BasePagination, {
                modelValue: unref(pagination).page,
                "onUpdate:modelValue": ($event) => unref(pagination).page = $event,
                total: unref(data).total
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("h3", { class: "text-lg font-normal text-black/85" }, "Penilaian Produk"),
              createVNode("div", { class: "mt-3 border border-primary-100/80 bg-primary-50/30 rounded-sm p-8 flex gap-8 items-center" }, [
                createVNode("div", { class: "flex flex-col items-center" }, [
                  createVNode("p", { class: "text-primary text-lg" }, [
                    createVNode("span", { class: "text-3xl" }, toDisplayString(__props.detail.rating), 1),
                    createTextVNode(" dari 5 ")
                  ]),
                  createVNode(_component_BaseRating, {
                    "model-value": __props.detail.rating,
                    disabled: "",
                    size: "lg",
                    class: "mt-2"
                  }, null, 8, ["model-value"])
                ]),
                createVNode("div", { class: "flex flex-wrap gap-2 items-center" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(filterList), (filter) => {
                    return openBlock(), createBlock(_component_UButton, {
                      key: filter.label,
                      variant: unref(filterParam) === filter.value ? "outline" : "solid",
                      color: unref(filterParam) === filter.value ? "primary" : "white",
                      size: "xs",
                      class: "min-w-24 text-sm justify-center",
                      onClick: ($event) => filterParam.value = filter.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(filter.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["variant", "color", "onClick"]);
                  }), 128))
                ])
              ]),
              createVNode("div", { class: "flex flex-col mt-1 divide-y" }, [
                (openBlock(true), createBlock(Fragment, null, renderList((_c = unref(data)) == null ? void 0 : _c.data, (review) => {
                  var _a2;
                  return openBlock(), createBlock("div", {
                    key: `review-${review.user_name}`,
                    class: "flex gap-3 py-4"
                  }, [
                    createVNode(_component_UAvatar, {
                      src: review.user_photo,
                      alt: review.user_name,
                      icon: "i-heroicons:user",
                      size: "lg",
                      "img-class": "object-cover"
                    }, null, 8, ["src", "alt"]),
                    createVNode("div", { class: "flex-1" }, [
                      createVNode("p", null, toDisplayString(review.user_name), 1),
                      createVNode(_component_BaseRating, {
                        "model-value": review.star_seller,
                        disabled: "",
                        class: "mt-1"
                      }, null, 8, ["model-value"]),
                      createVNode("div", { class: "flex gap-1 mt-0.5 text-black/55 text-xs" }, [
                        createVNode("p", null, toDisplayString(review.created_at), 1),
                        createTextVNode(" | "),
                        createVNode("p", null, toDisplayString(review.variations), 1)
                      ]),
                      review.description ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "text-sm mt-2"
                      }, toDisplayString(review.description), 1)) : createCommentVNode("", true),
                      ((_a2 = review.attachments) == null ? void 0 : _a2.length) ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "flex gap-2 flex-wrap mt-2"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(review.attachments, (attach) => {
                          return openBlock(), createBlock(_component_NuxtImg, {
                            key: attach,
                            width: "72px",
                            height: "72px",
                            fit: "cover",
                            format: "webp",
                            src: attach
                          }, null, 8, ["src"]);
                        }), 128))
                      ])) : createCommentVNode("", true)
                    ])
                  ]);
                }), 128)),
                unref(status) === "pending" ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "flex gap-2 justify-center py-6"
                }, [
                  createVNode(_component_IconLoading, { class: "w-6 text-primary" }),
                  createVNode("p", null, "Loading...")
                ])) : createCommentVNode("", true)
              ]),
              ((_d = unref(data)) == null ? void 0 : _d.total) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex justify-end pt-5"
              }, [
                createVNode(_component_BasePagination, {
                  modelValue: unref(pagination).page,
                  "onUpdate:modelValue": ($event) => unref(pagination).page = $event,
                  total: unref(data).total
                }, null, 8, ["modelValue", "onUpdate:modelValue", "total"])
              ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/feature/ProductDetail/Review.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const nuxtApp = useNuxtApp();
    const route = useRoute();
    const toast = useToast();
    const formProduct = useState("form-product", () => ({
      quantity: 1
    }));
    const { data: detailProduct, status: statusDetail } = useApi(
      computed(() => `/server/api/product/${route.params.slug}`),
      {
        onResponse({ response }) {
          if (response.ok) {
            response._data.data.variations.forEach((variation) => {
              formProduct.value[variation.name] = "";
            });
          }
          if (response.status === 404) {
            nuxtApp.runWithContext(() => {
              throw showError({
                statusCode: 404,
                message: "Produk tidak ditemukan"
              });
            });
          }
        },
        transform(response) {
          return (response == null ? void 0 : response.data) || {};
        }
      }
    );
    const rules = computed(() => {
      var _a, _b, _c;
      const _rule = {
        quantity: {
          required,
          minValue: minValue(1),
          maxValue: maxValue(((_a = detailProduct.value) == null ? void 0 : _a.stock) || 0)
        }
      };
      (_c = (_b = detailProduct.value) == null ? void 0 : _b.variations) == null ? void 0 : _c.forEach((variant) => {
        Object.assign(_rule, {
          [variant.name]: { required }
        });
      });
      return _rule;
    });
    const v$ = useVuelidate(rules, formProduct, {
      $autoDirty: true
    });
    const sliders = computed(() => {
      var _a, _b;
      return [
        { type: "video", src: (_a = detailProduct.value) == null ? void 0 : _a.video_url },
        ...(((_b = detailProduct.value) == null ? void 0 : _b.images) || []).map((img) => ({
          type: "img",
          src: img
        }))
      ];
    });
    const rawPrice = computed(() => {
      var _a;
      return formatNumber(((_a = detailProduct.value) == null ? void 0 : _a.price) || 0);
    });
    const salePrice = computed(
      () => {
        var _a;
        return formatNumber(((_a = detailProduct.value) == null ? void 0 : _a.price_sale) || 0);
      }
    );
    const links = computed(() => [
      {
        label: "Syopo",
        to: "/"
      },
      {
        label: detailProduct.value.category.parent.name,
        to: `/search?categories=${detailProduct.value.category.slug}`
      },
      {
        label: detailProduct.value.category.name,
        to: `/search?categories=${detailProduct.value.category.slug}`
      },
      {
        label: detailProduct.value.name
      }
    ]);
    const uiBreadcrumb = {
      active: "text-black/80",
      inactive: "text-[#0055AA]",
      li: "text-black/80",
      base: "font-normal"
    };
    const { execute: addToCart, status: statusCart } = useSubmit(
      "/server/api/cart",
      {
        onResponse({ response }) {
          if (response.ok) {
            toast.add({
              color: "green",
              title: "Produk berhasil ditambahkan ke keranjang"
            });
            refreshNuxtData();
          }
        }
      }
    );
    async function handleAddToCart() {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      const isValid = await v$.value.$validate();
      if (!isValid)
        return toast.add({
          color: "red",
          title: (_e = (_b = (_a = v$.value.$errors) == null ? void 0 : _a[0]) == null ? void 0 : _b.$message) == null ? void 0 : _e.replace(
            "Value",
            (_d = (_c = v$.value.$errors) == null ? void 0 : _c[0]) == null ? void 0 : _d.$property
          )
        });
      const formData = new FormData();
      formData.append("product_uuid", (_f = detailProduct.value) == null ? void 0 : _f.uuid);
      formData.append("qty", formProduct.value.quantity);
      (_h = (_g = detailProduct.value) == null ? void 0 : _g.variations) == null ? void 0 : _h.forEach((variant, index) => {
        formData.append(`variations[${index}][label]`, variant.name);
        formData.append(
          `variations[${index}][value]`,
          formProduct.value[variant.name]
        );
      });
      addToCart(formData);
    }
    const titleMeta = computed(
      () => {
        var _a, _b;
        return `Beli ${(_a = detailProduct.value) == null ? void 0 : _a.name} Hanya Rp${((_b = detailProduct.value) == null ? void 0 : _b.price_sale) ? salePrice.value : rawPrice.value}`;
      }
    );
    useSeoMeta({
      title: titleMeta,
      ogTitle: () => `${titleMeta.value} | Syopo`,
      twitterTitle: () => `${titleMeta.value} | Syopo`,
      ogImage: () => {
        var _a, _b;
        return (_b = (_a = detailProduct.value) == null ? void 0 : _a.images) == null ? void 0 : _b[0];
      },
      twitterImage: () => {
        var _a, _b;
        return (_b = (_a = detailProduct.value) == null ? void 0 : _a.images) == null ? void 0 : _b[0];
      },
      twitterCard: "summary_large_image"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = __nuxt_component_1;
      const _component_UCard = __nuxt_component_5;
      const _component_USkeleton = __nuxt_component_6;
      const _component_UBreadcrumb = __nuxt_component_0;
      const _component_FeatureProductDetailCarousel = _sfc_main$3;
      const _component_BaseRating = _sfc_main$4;
      const _component_UBadge = __nuxt_component_5$1;
      const _component_UButton = __nuxt_component_5$2;
      const _component_BaseInputQuantity = __nuxt_component_8;
      const _component_IconCartPlus = __nuxt_component_9;
      const _component_UAvatar = __nuxt_component_2$1;
      const _component_IconShop = __nuxt_component_2;
      const _component_FeatureProductDetailReview = _sfc_main$1;
      const _component_UIcon = __nuxt_component_3;
      const _component_BaseProductCard = __nuxt_component_7;
      if (unref(statusDetail) === "pending") {
        _push(ssrRenderComponent(_component_UContainer, mergeProps({
          as: "section",
          class: "flex flex-col gap-5 py-5"
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UCard, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="product-briefing" data-v-e331e387${_scopeId2}><div class="product-image" data-v-e331e387${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_USkeleton, { class: "w-[450px] h-[450px]" }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="product-information space-y-6" data-v-e331e387${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_USkeleton, { class: "w-full h-6" }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_USkeleton, { class: "w-10/12 h-6" }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_USkeleton, { class: "w-8/12 h-6" }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_USkeleton, { class: "w-10/12 h-6" }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_USkeleton, { class: "w-6/12 h-6" }, null, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "product-briefing" }, [
                        createVNode("div", { class: "product-image" }, [
                          createVNode(_component_USkeleton, { class: "w-[450px] h-[450px]" })
                        ]),
                        createVNode("div", { class: "product-information space-y-6" }, [
                          createVNode(_component_USkeleton, { class: "w-full h-6" }),
                          createVNode(_component_USkeleton, { class: "w-10/12 h-6" }),
                          createVNode(_component_USkeleton, { class: "w-8/12 h-6" }),
                          createVNode(_component_USkeleton, { class: "w-10/12 h-6" }),
                          createVNode(_component_USkeleton, { class: "w-6/12 h-6" })
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UCard, null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "product-briefing" }, [
                      createVNode("div", { class: "product-image" }, [
                        createVNode(_component_USkeleton, { class: "w-[450px] h-[450px]" })
                      ]),
                      createVNode("div", { class: "product-information space-y-6" }, [
                        createVNode(_component_USkeleton, { class: "w-full h-6" }),
                        createVNode(_component_USkeleton, { class: "w-10/12 h-6" }),
                        createVNode(_component_USkeleton, { class: "w-8/12 h-6" }),
                        createVNode(_component_USkeleton, { class: "w-10/12 h-6" }),
                        createVNode(_component_USkeleton, { class: "w-6/12 h-6" })
                      ])
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_UContainer, mergeProps({
          as: "section",
          class: "flex flex-col gap-5 py-5"
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a, _b;
            if (_push2) {
              _push2(ssrRenderComponent(_component_UBreadcrumb, {
                links: unref(links),
                ui: uiBreadcrumb
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UCard, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="product-briefing" data-v-e331e387${_scopeId2}><div class="product-image" data-v-e331e387${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_FeatureProductDetailCarousel, { items: unref(sliders) }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="product-information" data-v-e331e387${_scopeId2}><div class="product-title" data-v-e331e387${_scopeId2}><h2 data-v-e331e387${_scopeId2}>${ssrInterpolate(unref(detailProduct).name)}</h2><div class="product-summary" data-v-e331e387${_scopeId2}><div class="product-summary-item" data-v-e331e387${_scopeId2}><span class="text-primary" data-v-e331e387${_scopeId2}>${ssrInterpolate(unref(detailProduct).rating)}</span>`);
                    _push3(ssrRenderComponent(_component_BaseRating, {
                      "model-value": unref(detailProduct).rating,
                      disabled: ""
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="product-summary-item" data-v-e331e387${_scopeId2}><span class="text-black/80" data-v-e331e387${_scopeId2}>${ssrInterpolate(unref(detailProduct).rating_count)}</span><span class="product-summary-item-description" data-v-e331e387${_scopeId2}>Penilaian</span></div><div class="product-summary-item" data-v-e331e387${_scopeId2}><span class="text-black/80" data-v-e331e387${_scopeId2}>${ssrInterpolate(unref(detailProduct).sale_count)}</span><span class="product-summary-item-description" data-v-e331e387${_scopeId2}>Terjual</span></div></div></div><div class="product-price" data-v-e331e387${_scopeId2}>`);
                    if (unref(detailProduct).price_sale) {
                      _push3(`<!--[--><p class="text-gray-400 line-through font-normal" data-v-e331e387${_scopeId2}> Rp${ssrInterpolate(unref(rawPrice))}</p><p class="text-primary font-normal text-3xl" data-v-e331e387${_scopeId2}>Rp${ssrInterpolate(unref(salePrice))}</p>`);
                      _push3(ssrRenderComponent(_component_UBadge, { size: "xs" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(unref(detailProduct).price_discount_percentage)}% OFF `);
                          } else {
                            return [
                              createTextVNode(toDisplayString(unref(detailProduct).price_discount_percentage) + "% OFF ", 1)
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                      _push3(`<!--]-->`);
                    } else {
                      _push3(`<p class="text-primary font-normal text-3xl" data-v-e331e387${_scopeId2}> Rp${ssrInterpolate(unref(rawPrice))}</p>`);
                    }
                    _push3(`</div><div class="product-variant" data-v-e331e387${_scopeId2}><div class="flex flex-col gap-6" data-v-e331e387${_scopeId2}><!--[-->`);
                    ssrRenderList(unref(detailProduct).variations, (variant) => {
                      _push3(`<div class="flex gap-2 items-center" data-v-e331e387${_scopeId2}><p class="w-28 text-black/55 text-sm" data-v-e331e387${_scopeId2}>${ssrInterpolate(variant.name)}</p><div class="flex flex-wrap gap-2" data-v-e331e387${_scopeId2}><!--[-->`);
                      ssrRenderList(variant.values, (values) => {
                        _push3(ssrRenderComponent(_component_UButton, {
                          key: `${variant.name}-${values}`,
                          color: unref(formProduct)[variant.name] === values ? "primary" : "white",
                          variant: unref(formProduct)[variant.name] === values ? "outline" : "solid",
                          ui: {
                            base: "min-w-20 justify-center",
                            padding: {
                              sm: "px-2 py-2"
                            }
                          },
                          onClick: ($event) => unref(formProduct)[variant.name] = values
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`${ssrInterpolate(values)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(values), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      });
                      _push3(`<!--]--></div></div>`);
                    });
                    _push3(`<!--]--></div></div><div class="flex gap-2 items-center mt-6" data-v-e331e387${_scopeId2}><p class="w-28 text-black/55 text-sm" data-v-e331e387${_scopeId2}>Kuantitas</p>`);
                    _push3(ssrRenderComponent(_component_BaseInputQuantity, {
                      modelValue: unref(formProduct).quantity,
                      "onUpdate:modelValue": ($event) => unref(formProduct).quantity = $event,
                      max: unref(detailProduct).stock || 0
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                    _push3(ssrRenderComponent(_component_UButton, {
                      class: "mt-6",
                      variant: "soft",
                      disabled: unref(statusCart) === "pending",
                      onClick: handleAddToCart
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_IconCartPlus, null, null, _parent4, _scopeId3));
                          _push4(` Masukkan Keranjang `);
                        } else {
                          return [
                            createVNode(_component_IconCartPlus),
                            createTextVNode(" Masukkan Keranjang ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<hr class="my-5" data-v-e331e387${_scopeId2}><div class="flex gap-5" data-v-e331e387${_scopeId2}><div class="flex gap-2" data-v-e331e387${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} data-v-e331e387${_scopeId2}><p class="text-black/80 text-sm" data-v-e331e387${_scopeId2}>Garansi Syopo</p></div><p class="text-black/55 text-sm" data-v-e331e387${_scopeId2}> Dapatkan barang pesananmu atau uang kembali. </p></div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "product-briefing" }, [
                        createVNode("div", { class: "product-image" }, [
                          createVNode(_component_FeatureProductDetailCarousel, { items: unref(sliders) }, null, 8, ["items"])
                        ]),
                        createVNode("div", { class: "product-information" }, [
                          createVNode("div", { class: "product-title" }, [
                            createVNode("h2", null, toDisplayString(unref(detailProduct).name), 1),
                            createVNode("div", { class: "product-summary" }, [
                              createVNode("div", { class: "product-summary-item" }, [
                                createVNode("span", { class: "text-primary" }, toDisplayString(unref(detailProduct).rating), 1),
                                createVNode(_component_BaseRating, {
                                  "model-value": unref(detailProduct).rating,
                                  disabled: ""
                                }, null, 8, ["model-value"])
                              ]),
                              createVNode("div", { class: "product-summary-item" }, [
                                createVNode("span", { class: "text-black/80" }, toDisplayString(unref(detailProduct).rating_count), 1),
                                createVNode("span", { class: "product-summary-item-description" }, "Penilaian")
                              ]),
                              createVNode("div", { class: "product-summary-item" }, [
                                createVNode("span", { class: "text-black/80" }, toDisplayString(unref(detailProduct).sale_count), 1),
                                createVNode("span", { class: "product-summary-item-description" }, "Terjual")
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "product-price" }, [
                            unref(detailProduct).price_sale ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                              createVNode("p", { class: "text-gray-400 line-through font-normal" }, " Rp" + toDisplayString(unref(rawPrice)), 1),
                              createVNode("p", { class: "text-primary font-normal text-3xl" }, "Rp" + toDisplayString(unref(salePrice)), 1),
                              createVNode(_component_UBadge, { size: "xs" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(detailProduct).price_discount_percentage) + "% OFF ", 1)
                                ]),
                                _: 1
                              })
                            ], 64)) : (openBlock(), createBlock("p", {
                              key: 1,
                              class: "text-primary font-normal text-3xl"
                            }, " Rp" + toDisplayString(unref(rawPrice)), 1))
                          ]),
                          createVNode("div", { class: "product-variant" }, [
                            createVNode("div", { class: "flex flex-col gap-6" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(detailProduct).variations, (variant) => {
                                return openBlock(), createBlock("div", {
                                  key: variant.name,
                                  class: "flex gap-2 items-center"
                                }, [
                                  createVNode("p", { class: "w-28 text-black/55 text-sm" }, toDisplayString(variant.name), 1),
                                  createVNode("div", { class: "flex flex-wrap gap-2" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(variant.values, (values) => {
                                      return openBlock(), createBlock(_component_UButton, {
                                        key: `${variant.name}-${values}`,
                                        color: unref(formProduct)[variant.name] === values ? "primary" : "white",
                                        variant: unref(formProduct)[variant.name] === values ? "outline" : "solid",
                                        ui: {
                                          base: "min-w-20 justify-center",
                                          padding: {
                                            sm: "px-2 py-2"
                                          }
                                        },
                                        onClick: ($event) => unref(formProduct)[variant.name] = values
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(values), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["color", "variant", "onClick"]);
                                    }), 128))
                                  ])
                                ]);
                              }), 128))
                            ])
                          ]),
                          createVNode("div", { class: "flex gap-2 items-center mt-6" }, [
                            createVNode("p", { class: "w-28 text-black/55 text-sm" }, "Kuantitas"),
                            createVNode(_component_BaseInputQuantity, {
                              modelValue: unref(formProduct).quantity,
                              "onUpdate:modelValue": ($event) => unref(formProduct).quantity = $event,
                              max: unref(detailProduct).stock || 0
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "max"])
                          ]),
                          createVNode(_component_UButton, {
                            class: "mt-6",
                            variant: "soft",
                            disabled: unref(statusCart) === "pending",
                            onClick: handleAddToCart
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_IconCartPlus),
                              createTextVNode(" Masukkan Keranjang ")
                            ]),
                            _: 1
                          }, 8, ["disabled"]),
                          createVNode("hr", { class: "my-5" }),
                          createVNode("div", { class: "flex gap-5" }, [
                            createVNode("div", { class: "flex gap-2" }, [
                              createVNode("img", { src: _imports_0 }),
                              createVNode("p", { class: "text-black/80 text-sm" }, "Garansi Syopo")
                            ]),
                            createVNode("p", { class: "text-black/55 text-sm" }, " Dapatkan barang pesananmu atau uang kembali. ")
                          ])
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UCard, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="product-seller" data-v-e331e387${_scopeId2}><div class="flex gap-6 items-center w-96" data-v-e331e387${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UAvatar, {
                      alt: unref(detailProduct).seller.store_name,
                      size: "3xl",
                      "img-class": "object-cover"
                    }, null, _parent3, _scopeId2));
                    _push3(`<div data-v-e331e387${_scopeId2}><h3 data-v-e331e387${_scopeId2}>${ssrInterpolate(unref(detailProduct).seller.store_name)}</h3>`);
                    _push3(ssrRenderComponent(_component_UButton, {
                      color: "white",
                      size: "xs",
                      class: "mt-2",
                      to: `/shop/${unref(detailProduct).seller.username}`
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_IconShop, null, null, _parent4, _scopeId3));
                          _push4(` Kunjungi Toko `);
                        } else {
                          return [
                            createVNode(_component_IconShop),
                            createTextVNode(" Kunjungi Toko ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div></div><div class="w-[1px] bg-slate-200" data-v-e331e387${_scopeId2}></div><div class="grid grid-cols-2 items-center flex-1" data-v-e331e387${_scopeId2}><div class="flex gap-2 text-sm" data-v-e331e387${_scopeId2}><p class="text-black/40 w-36" data-v-e331e387${_scopeId2}>Penilaian</p><p class="text-primary" data-v-e331e387${_scopeId2}>${ssrInterpolate(unref(detailProduct).seller.rating_count)}</p></div><div class="flex gap-2 text-sm" data-v-e331e387${_scopeId2}><p class="text-black/40 w-36" data-v-e331e387${_scopeId2}>Bergabung</p><p class="text-primary" data-v-e331e387${_scopeId2}>${ssrInterpolate(unref(detailProduct).seller.join_date)}</p></div><div class="flex gap-2 text-sm" data-v-e331e387${_scopeId2}><p class="text-black/40 w-36" data-v-e331e387${_scopeId2}>Produk</p><p class="text-primary" data-v-e331e387${_scopeId2}>${ssrInterpolate(unref(detailProduct).seller.product_count)}</p></div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "product-seller" }, [
                        createVNode("div", { class: "flex gap-6 items-center w-96" }, [
                          createVNode(_component_UAvatar, {
                            alt: unref(detailProduct).seller.store_name,
                            size: "3xl",
                            "img-class": "object-cover"
                          }, null, 8, ["alt"]),
                          createVNode("div", null, [
                            createVNode("h3", null, toDisplayString(unref(detailProduct).seller.store_name), 1),
                            createVNode(_component_UButton, {
                              color: "white",
                              size: "xs",
                              class: "mt-2",
                              to: `/shop/${unref(detailProduct).seller.username}`
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_IconShop),
                                createTextVNode(" Kunjungi Toko ")
                              ]),
                              _: 1
                            }, 8, ["to"])
                          ])
                        ]),
                        createVNode("div", { class: "w-[1px] bg-slate-200" }),
                        createVNode("div", { class: "grid grid-cols-2 items-center flex-1" }, [
                          createVNode("div", { class: "flex gap-2 text-sm" }, [
                            createVNode("p", { class: "text-black/40 w-36" }, "Penilaian"),
                            createVNode("p", { class: "text-primary" }, toDisplayString(unref(detailProduct).seller.rating_count), 1)
                          ]),
                          createVNode("div", { class: "flex gap-2 text-sm" }, [
                            createVNode("p", { class: "text-black/40 w-36" }, "Bergabung"),
                            createVNode("p", { class: "text-primary" }, toDisplayString(unref(detailProduct).seller.join_date), 1)
                          ]),
                          createVNode("div", { class: "flex gap-2 text-sm" }, [
                            createVNode("p", { class: "text-black/40 w-36" }, "Produk"),
                            createVNode("p", { class: "text-primary" }, toDisplayString(unref(detailProduct).seller.product_count), 1)
                          ])
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UCard, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="product-detail" data-v-e331e387${_scopeId2}><div class="product-detail-title" data-v-e331e387${_scopeId2}><h3 data-v-e331e387${_scopeId2}>Spesifikasi Produk</h3></div><div class="flex flex-col gap-4" data-v-e331e387${_scopeId2}><div class="product-detail-item" data-v-e331e387${_scopeId2}><p data-v-e331e387${_scopeId2}>Kategori</p><div data-v-e331e387${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UBreadcrumb, {
                      links: [
                        {
                          label: unref(detailProduct).category.parent.name,
                          to: `/search?categories=${unref(detailProduct).category.slug}`
                        },
                        {
                          label: unref(detailProduct).category.name,
                          to: `/search?categories=${unref(detailProduct).category.slug}`
                        }
                      ],
                      ui: {
                        ...uiBreadcrumb,
                        active: "text-[#0055AA]"
                      }
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div><div class="product-detail-item" data-v-e331e387${_scopeId2}><p data-v-e331e387${_scopeId2}>Stok</p><div class="text-sm font-normal" data-v-e331e387${_scopeId2}>${ssrInterpolate(unref(detailProduct).stock)}</div></div><div class="product-detail-item" data-v-e331e387${_scopeId2}><p data-v-e331e387${_scopeId2}>Dikirim dari</p><div class="text-sm font-normal" data-v-e331e387${_scopeId2}>${ssrInterpolate(unref(detailProduct).seller.send_from.city.name)}</div></div></div><div class="product-detail-title" data-v-e331e387${_scopeId2}><h3 data-v-e331e387${_scopeId2}>Deskripsi Produk</h3></div><div class="text-sm text-black/80 whitespace-pre-line" data-v-e331e387${_scopeId2}>${ssrInterpolate(unref(detailProduct).description)}</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "product-detail" }, [
                        createVNode("div", { class: "product-detail-title" }, [
                          createVNode("h3", null, "Spesifikasi Produk")
                        ]),
                        createVNode("div", { class: "flex flex-col gap-4" }, [
                          createVNode("div", { class: "product-detail-item" }, [
                            createVNode("p", null, "Kategori"),
                            createVNode("div", null, [
                              createVNode(_component_UBreadcrumb, {
                                links: [
                                  {
                                    label: unref(detailProduct).category.parent.name,
                                    to: `/search?categories=${unref(detailProduct).category.slug}`
                                  },
                                  {
                                    label: unref(detailProduct).category.name,
                                    to: `/search?categories=${unref(detailProduct).category.slug}`
                                  }
                                ],
                                ui: {
                                  ...uiBreadcrumb,
                                  active: "text-[#0055AA]"
                                }
                              }, null, 8, ["links", "ui"])
                            ])
                          ]),
                          createVNode("div", { class: "product-detail-item" }, [
                            createVNode("p", null, "Stok"),
                            createVNode("div", { class: "text-sm font-normal" }, toDisplayString(unref(detailProduct).stock), 1)
                          ]),
                          createVNode("div", { class: "product-detail-item" }, [
                            createVNode("p", null, "Dikirim dari"),
                            createVNode("div", { class: "text-sm font-normal" }, toDisplayString(unref(detailProduct).seller.send_from.city.name), 1)
                          ])
                        ]),
                        createVNode("div", { class: "product-detail-title" }, [
                          createVNode("h3", null, "Deskripsi Produk")
                        ]),
                        createVNode("div", {
                          class: "text-sm text-black/80 whitespace-pre-line",
                          textContent: toDisplayString(unref(detailProduct).description)
                        }, null, 8, ["textContent"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_FeatureProductDetailReview, { detail: unref(detailProduct) }, null, _parent2, _scopeId));
              if ((_a = unref(detailProduct).other_product) == null ? void 0 : _a.length) {
                _push2(`<div class="flex flex-col gap-4 mt-2" data-v-e331e387${_scopeId}><div class="flex justify-between gap-2 items-cente" data-v-e331e387${_scopeId}><h4 class="uppercase text-black/55 font-medium" data-v-e331e387${_scopeId}> Produk lain dari toko ini </h4>`);
                _push2(ssrRenderComponent(_component_UButton, {
                  variant: "link",
                  class: "font-thin",
                  padded: false,
                  to: `/shop/${unref(detailProduct).seller.username}`
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` Lihat Semua `);
                      _push3(ssrRenderComponent(_component_UIcon, { name: "i-heroicons:chevron-right" }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createTextVNode(" Lihat Semua "),
                        createVNode(_component_UIcon, { name: "i-heroicons:chevron-right" })
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div><div class="grid grid-cols-6 gap-3" data-v-e331e387${_scopeId}><!--[-->`);
                ssrRenderList(unref(detailProduct).other_product, (product) => {
                  _push2(ssrRenderComponent(_component_BaseProductCard, {
                    key: `product-${product.uuid}`,
                    title: product.name,
                    price: product.price,
                    image: product.image_url,
                    slug: product.slug,
                    sale: product.sale_count,
                    discount: product.price_discount_percentage
                  }, null, _parent2, _scopeId));
                });
                _push2(`<!--]--></div></div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createVNode(_component_UBreadcrumb, {
                  links: unref(links),
                  ui: uiBreadcrumb
                }, null, 8, ["links"]),
                createVNode(_component_UCard, null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "product-briefing" }, [
                      createVNode("div", { class: "product-image" }, [
                        createVNode(_component_FeatureProductDetailCarousel, { items: unref(sliders) }, null, 8, ["items"])
                      ]),
                      createVNode("div", { class: "product-information" }, [
                        createVNode("div", { class: "product-title" }, [
                          createVNode("h2", null, toDisplayString(unref(detailProduct).name), 1),
                          createVNode("div", { class: "product-summary" }, [
                            createVNode("div", { class: "product-summary-item" }, [
                              createVNode("span", { class: "text-primary" }, toDisplayString(unref(detailProduct).rating), 1),
                              createVNode(_component_BaseRating, {
                                "model-value": unref(detailProduct).rating,
                                disabled: ""
                              }, null, 8, ["model-value"])
                            ]),
                            createVNode("div", { class: "product-summary-item" }, [
                              createVNode("span", { class: "text-black/80" }, toDisplayString(unref(detailProduct).rating_count), 1),
                              createVNode("span", { class: "product-summary-item-description" }, "Penilaian")
                            ]),
                            createVNode("div", { class: "product-summary-item" }, [
                              createVNode("span", { class: "text-black/80" }, toDisplayString(unref(detailProduct).sale_count), 1),
                              createVNode("span", { class: "product-summary-item-description" }, "Terjual")
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "product-price" }, [
                          unref(detailProduct).price_sale ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            createVNode("p", { class: "text-gray-400 line-through font-normal" }, " Rp" + toDisplayString(unref(rawPrice)), 1),
                            createVNode("p", { class: "text-primary font-normal text-3xl" }, "Rp" + toDisplayString(unref(salePrice)), 1),
                            createVNode(_component_UBadge, { size: "xs" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(detailProduct).price_discount_percentage) + "% OFF ", 1)
                              ]),
                              _: 1
                            })
                          ], 64)) : (openBlock(), createBlock("p", {
                            key: 1,
                            class: "text-primary font-normal text-3xl"
                          }, " Rp" + toDisplayString(unref(rawPrice)), 1))
                        ]),
                        createVNode("div", { class: "product-variant" }, [
                          createVNode("div", { class: "flex flex-col gap-6" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(detailProduct).variations, (variant) => {
                              return openBlock(), createBlock("div", {
                                key: variant.name,
                                class: "flex gap-2 items-center"
                              }, [
                                createVNode("p", { class: "w-28 text-black/55 text-sm" }, toDisplayString(variant.name), 1),
                                createVNode("div", { class: "flex flex-wrap gap-2" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(variant.values, (values) => {
                                    return openBlock(), createBlock(_component_UButton, {
                                      key: `${variant.name}-${values}`,
                                      color: unref(formProduct)[variant.name] === values ? "primary" : "white",
                                      variant: unref(formProduct)[variant.name] === values ? "outline" : "solid",
                                      ui: {
                                        base: "min-w-20 justify-center",
                                        padding: {
                                          sm: "px-2 py-2"
                                        }
                                      },
                                      onClick: ($event) => unref(formProduct)[variant.name] = values
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(values), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["color", "variant", "onClick"]);
                                  }), 128))
                                ])
                              ]);
                            }), 128))
                          ])
                        ]),
                        createVNode("div", { class: "flex gap-2 items-center mt-6" }, [
                          createVNode("p", { class: "w-28 text-black/55 text-sm" }, "Kuantitas"),
                          createVNode(_component_BaseInputQuantity, {
                            modelValue: unref(formProduct).quantity,
                            "onUpdate:modelValue": ($event) => unref(formProduct).quantity = $event,
                            max: unref(detailProduct).stock || 0
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "max"])
                        ]),
                        createVNode(_component_UButton, {
                          class: "mt-6",
                          variant: "soft",
                          disabled: unref(statusCart) === "pending",
                          onClick: handleAddToCart
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_IconCartPlus),
                            createTextVNode(" Masukkan Keranjang ")
                          ]),
                          _: 1
                        }, 8, ["disabled"]),
                        createVNode("hr", { class: "my-5" }),
                        createVNode("div", { class: "flex gap-5" }, [
                          createVNode("div", { class: "flex gap-2" }, [
                            createVNode("img", { src: _imports_0 }),
                            createVNode("p", { class: "text-black/80 text-sm" }, "Garansi Syopo")
                          ]),
                          createVNode("p", { class: "text-black/55 text-sm" }, " Dapatkan barang pesananmu atau uang kembali. ")
                        ])
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_UCard, null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "product-seller" }, [
                      createVNode("div", { class: "flex gap-6 items-center w-96" }, [
                        createVNode(_component_UAvatar, {
                          alt: unref(detailProduct).seller.store_name,
                          size: "3xl",
                          "img-class": "object-cover"
                        }, null, 8, ["alt"]),
                        createVNode("div", null, [
                          createVNode("h3", null, toDisplayString(unref(detailProduct).seller.store_name), 1),
                          createVNode(_component_UButton, {
                            color: "white",
                            size: "xs",
                            class: "mt-2",
                            to: `/shop/${unref(detailProduct).seller.username}`
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_IconShop),
                              createTextVNode(" Kunjungi Toko ")
                            ]),
                            _: 1
                          }, 8, ["to"])
                        ])
                      ]),
                      createVNode("div", { class: "w-[1px] bg-slate-200" }),
                      createVNode("div", { class: "grid grid-cols-2 items-center flex-1" }, [
                        createVNode("div", { class: "flex gap-2 text-sm" }, [
                          createVNode("p", { class: "text-black/40 w-36" }, "Penilaian"),
                          createVNode("p", { class: "text-primary" }, toDisplayString(unref(detailProduct).seller.rating_count), 1)
                        ]),
                        createVNode("div", { class: "flex gap-2 text-sm" }, [
                          createVNode("p", { class: "text-black/40 w-36" }, "Bergabung"),
                          createVNode("p", { class: "text-primary" }, toDisplayString(unref(detailProduct).seller.join_date), 1)
                        ]),
                        createVNode("div", { class: "flex gap-2 text-sm" }, [
                          createVNode("p", { class: "text-black/40 w-36" }, "Produk"),
                          createVNode("p", { class: "text-primary" }, toDisplayString(unref(detailProduct).seller.product_count), 1)
                        ])
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_UCard, null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "product-detail" }, [
                      createVNode("div", { class: "product-detail-title" }, [
                        createVNode("h3", null, "Spesifikasi Produk")
                      ]),
                      createVNode("div", { class: "flex flex-col gap-4" }, [
                        createVNode("div", { class: "product-detail-item" }, [
                          createVNode("p", null, "Kategori"),
                          createVNode("div", null, [
                            createVNode(_component_UBreadcrumb, {
                              links: [
                                {
                                  label: unref(detailProduct).category.parent.name,
                                  to: `/search?categories=${unref(detailProduct).category.slug}`
                                },
                                {
                                  label: unref(detailProduct).category.name,
                                  to: `/search?categories=${unref(detailProduct).category.slug}`
                                }
                              ],
                              ui: {
                                ...uiBreadcrumb,
                                active: "text-[#0055AA]"
                              }
                            }, null, 8, ["links", "ui"])
                          ])
                        ]),
                        createVNode("div", { class: "product-detail-item" }, [
                          createVNode("p", null, "Stok"),
                          createVNode("div", { class: "text-sm font-normal" }, toDisplayString(unref(detailProduct).stock), 1)
                        ]),
                        createVNode("div", { class: "product-detail-item" }, [
                          createVNode("p", null, "Dikirim dari"),
                          createVNode("div", { class: "text-sm font-normal" }, toDisplayString(unref(detailProduct).seller.send_from.city.name), 1)
                        ])
                      ]),
                      createVNode("div", { class: "product-detail-title" }, [
                        createVNode("h3", null, "Deskripsi Produk")
                      ]),
                      createVNode("div", {
                        class: "text-sm text-black/80 whitespace-pre-line",
                        textContent: toDisplayString(unref(detailProduct).description)
                      }, null, 8, ["textContent"])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_FeatureProductDetailReview, { detail: unref(detailProduct) }, null, 8, ["detail"]),
                ((_b = unref(detailProduct).other_product) == null ? void 0 : _b.length) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "flex flex-col gap-4 mt-2"
                }, [
                  createVNode("div", { class: "flex justify-between gap-2 items-cente" }, [
                    createVNode("h4", { class: "uppercase text-black/55 font-medium" }, " Produk lain dari toko ini "),
                    createVNode(_component_UButton, {
                      variant: "link",
                      class: "font-thin",
                      padded: false,
                      to: `/shop/${unref(detailProduct).seller.username}`
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Lihat Semua "),
                        createVNode(_component_UIcon, { name: "i-heroicons:chevron-right" })
                      ]),
                      _: 1
                    }, 8, ["to"])
                  ]),
                  createVNode("div", { class: "grid grid-cols-6 gap-3" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(detailProduct).other_product, (product) => {
                      return openBlock(), createBlock(_component_BaseProductCard, {
                        key: `product-${product.uuid}`,
                        title: product.name,
                        price: product.price,
                        image: product.image_url,
                        slug: product.slug,
                        sale: product.sale_count,
                        discount: product.price_discount_percentage
                      }, null, 8, ["title", "price", "image", "slug", "sale", "discount"]);
                    }), 128))
                  ])
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e331e387"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-B-JmQxz8.mjs.map
