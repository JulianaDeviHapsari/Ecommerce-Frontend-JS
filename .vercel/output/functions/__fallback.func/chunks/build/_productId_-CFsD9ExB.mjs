import { _ as _sfc_main$2 } from './Card-xFMCdhB0.mjs';
import { _ as _sfc_main$3 } from './FormGroup-C5bCdBK6.mjs';
import { _ as _sfc_main$4 } from './Media-UQZ5EApb.mjs';
import { _ as __nuxt_component_3 } from './Input-BSkwWT7v.mjs';
import { _ as __nuxt_component_5 } from './SelectMenu-DcvHs5ij.mjs';
import { _ as __nuxt_component_5$1 } from './Textarea-nJripv25.mjs';
import { _ as __nuxt_component_0 } from './FormGroup-DpovdzGZ.mjs';
import { x as useRoute, l as useToast, d as useNuxtApp, e as useRouter, b as __nuxt_component_5$2, f as __nuxt_component_3$1 } from './server.mjs';
import { ref, computed, mergeProps, withCtx, unref, createVNode, createTextVNode, mergeModels, toDisplayString, createBlock, openBlock, Fragment, renderList, useModel, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import useVuelidate from '@vuelidate/core';
import { minLength, required, maxLength, minValue, maxValue, helpers } from '@vuelidate/validators';
import { u as useApi } from './use-api-DLZ2CTc2.mjs';
import { u as useSubmit } from './use-submit-TWB9IMR2.mjs';
import './Card-DbWg7JF8.mjs';
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
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';

const _sfc_main$1 = {
  __name: "Variant",
  __ssrInlineRender: true,
  props: {
    "modelValue": {
      type: String,
      default: ""
    },
    "modelModifiers": {},
    "value": {
      type: Array,
      default: () => []
    },
    "valueModifiers": {}
  },
  emits: /* @__PURE__ */ mergeModels(["delete"], ["update:modelValue", "update:value"]),
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const variantName = useModel(__props, "modelValue");
    const variantValue = useModel(__props, "value");
    const rules = {
      name: { required },
      value: {
        $each: helpers.forEach({
          name: { required }
        })
      }
    };
    const v$ = useVuelidate(
      rules,
      computed(() => ({ name: variantName.value, value: variantValue.value })),
      {
        $autoDirty: true,
        $scope: "product"
      }
    );
    const isEditVariantName = ref(true);
    function handleSaveVariantName() {
      if (variantName.value) {
        isEditVariantName.value = false;
      }
    }
    function handleRemoveVariantValue(index) {
      variantValue.value.splice(index, 1);
    }
    function handleAddVariantValue() {
      variantValue.value.push({ name: "" });
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_UFormGroup = __nuxt_component_0;
      const _component_UInput = __nuxt_component_3;
      const _component_UButton = __nuxt_component_5$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4 bg-gray-100 rounded-sm" }, _attrs))}><div class="flex justify-between items-center"><div>`);
      if (unref(isEditVariantName)) {
        _push(ssrRenderComponent(_component_UFormGroup, {
          error: (_b = (_a = unref(v$).name.$errors) == null ? void 0 : _a[0]) == null ? void 0 : _b.$message
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: variantName.value,
                "onUpdate:modelValue": ($event) => variantName.value = $event,
                autofocus: "",
                placeholder: "Variant Name",
                onBlur: handleSaveVariantName
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UInput, {
                  modelValue: variantName.value,
                  "onUpdate:modelValue": ($event) => variantName.value = $event,
                  autofocus: "",
                  placeholder: "Variant Name",
                  onBlur: handleSaveVariantName
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<div class="flex gap-1"><span class="text-sm">${ssrInterpolate(variantName.value)} <span class="text-black/30 text-xs">(Atur Sendiri)</span></span>`);
        _push(ssrRenderComponent(_component_UButton, {
          icon: "i-heroicons:pencil-square",
          variant: "link",
          color: "blue",
          padded: false,
          onClick: ($event) => isEditVariantName.value = true
        }, null, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UButton, {
        variant: "ghost",
        icon: "i-heroicons:x-mark",
        size: "xs",
        color: "gray",
        onClick: ($event) => emit("delete")
      }, null, _parent));
      _push(`</div><hr class="my-4"><div class="grid grid-cols-2 gap-4 mt-4"><!--[-->`);
      ssrRenderList(variantValue.value, (varValue, index) => {
        var _a2, _b2, _c, _d;
        _push(ssrRenderComponent(_component_UFormGroup, {
          key: `variant-${index}`,
          error: (_d = (_c = (_b2 = (_a2 = unref(v$).value.$each.$response.$errors) == null ? void 0 : _a2[index]) == null ? void 0 : _b2.name) == null ? void 0 : _c[0]) == null ? void 0 : _d.$message
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: varValue.name,
                "onUpdate:modelValue": ($event) => varValue.name = $event,
                class: "flex-1"
              }, null, _parent2, _scopeId));
              if (variantValue.value.length > 1) {
                _push2(ssrRenderComponent(_component_UButton, {
                  icon: "i-heroicons:trash",
                  padded: false,
                  size: "xs",
                  variant: "link",
                  color: "gray",
                  onClick: ($event) => handleRemoveVariantValue(index)
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex gap-2" }, [
                  createVNode(_component_UInput, {
                    modelValue: varValue.name,
                    "onUpdate:modelValue": ($event) => varValue.name = $event,
                    class: "flex-1"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  variantValue.value.length > 1 ? (openBlock(), createBlock(_component_UButton, {
                    key: 0,
                    icon: "i-heroicons:trash",
                    padded: false,
                    size: "xs",
                    variant: "link",
                    color: "gray",
                    onClick: ($event) => handleRemoveVariantValue(index)
                  }, null, 8, ["onClick"])) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_UButton, {
        icon: "i-heroicons:plus",
        label: "Tambah",
        size: "xs",
        color: "white",
        class: "mt-4",
        onClick: handleAddVariantValue
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/feature/Seller/Product/Variant.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "[[productId]]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    route.meta.breadcrumb = route.params.action === "add" ? [
      {
        label: "Produk Saya",
        to: "/seller/product"
      },
      {
        label: "Tambah Produk Baru"
      }
    ] : [
      {
        label: "Produk Saya",
        to: "/seller/product"
      },
      {
        label: "Ubah Produk"
      }
    ];
    const form = ref({
      name: "",
      price: null,
      price_sale: null,
      stock: null,
      category_slug: "",
      description: "",
      weight: null,
      length: null,
      width: null,
      height: null,
      video: [],
      images: [],
      variations: [
        {
          name: "",
          value: [{ name: "" }]
        }
      ]
    });
    const rules = computed(() => ({
      name: { required },
      price: { required, minValue: minValue(100) },
      price_sale: {
        minValue: minValue(100),
        maxValue: maxValue(computed(() => form.value.price))
      },
      stock: {
        required,
        minValue: minValue(1)
      },
      category_slug: { required },
      description: { required, maxLength: maxLength(3e3) },
      weight: { required },
      length: { required },
      width: { required },
      height: { required },
      images: {
        required,
        minLength: minLength(1)
      },
      video: {
        required,
        minLength: minLength(1)
      }
    }));
    const v$ = useVuelidate(rules, form, {
      $autoDirty: true,
      $scope: "product"
    });
    const toast = useToast();
    const nuxtApp = useNuxtApp();
    const router = useRouter();
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
    const { execute: addProduct, status: statusAdd } = useSubmit(
      "/server/api/seller-dashboard/product",
      {
        onResponse({ response }) {
          if (response.ok) {
            toast.add({
              color: "green",
              title: "Berhasil menambahkan produk"
            });
            router.push("/seller/product");
          }
        }
      }
    );
    const { execute: updateProduct, status: statusUpdate } = useSubmit(
      computed(
        () => `/server/api/seller-dashboard/product/${route.params.productId}`
      ),
      {
        onResponse({ response }) {
          if (response.ok) {
            toast.add({
              color: "green",
              title: "Berhasil mengubah produk"
            });
            router.push("/seller/product");
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
    function handleAddVariations() {
      form.value.variations.push({
        name: "",
        value: [{ name: "" }]
      });
    }
    function handleDeleteVariants(index) {
      form.value.variations.splice(index, 1);
    }
    async function handleSubmit() {
      const isValid = await v$.value.$validate();
      if (!isValid) return;
      const formData = new FormData();
      formData.append("name", form.value.name);
      formData.append("price", form.value.price);
      if (form.value.price_sale) {
        formData.append("price_sale", form.value.price_sale);
      }
      formData.append("stock", form.value.stock);
      formData.append("category_slug", form.value.category_slug);
      formData.append("description", form.value.description);
      formData.append("weight", form.value.weight);
      formData.append("length", form.value.length);
      formData.append("width", form.value.width);
      formData.append("height", form.value.height);
      if (form.value.video[0] && typeof form.value.video[0] !== "string") {
        formData.append("video", form.value.video[0]);
      }
      form.value.images.forEach((img) => {
        formData.append(typeof img === "string" ? "old_images[]" : "images[]", img);
      });
      form.value.variations.forEach((variant, index) => {
        formData.append(`variations[${index}][name]`, variant.name);
        variant.value.forEach((value, idx) => {
          formData.append(`variations[${index}][values][${idx}]`, value.name);
        });
      });
      if (route.params.productId) {
        formData.append("_method", "PATCH");
        updateProduct(formData);
        return;
      }
      addProduct(formData);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SellerCard = _sfc_main$2;
      const _component_SellerFormGroup = _sfc_main$3;
      const _component_FeatureSellerProductMedia = _sfc_main$4;
      const _component_UInput = __nuxt_component_3;
      const _component_USelectMenu = __nuxt_component_5;
      const _component_UTextarea = __nuxt_component_5$1;
      const _component_FeatureSellerProductVariant = _sfc_main$1;
      const _component_UButton = __nuxt_component_5$2;
      const _component_UIcon = __nuxt_component_3$1;
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "space-y-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SellerCard, { title: "Informasi Produk" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t;
          if (_push2) {
            _push2(`<div class="mt-4 space-y-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_SellerFormGroup, {
              label: "Foto Produk",
              required: "",
              error: (_b = (_a = unref(v$).images.$errors) == null ? void 0 : _a[0]) == null ? void 0 : _b.$message
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_FeatureSellerProductMedia, {
                    modelValue: unref(form).images,
                    "onUpdate:modelValue": ($event) => unref(form).images = $event,
                    max: 9
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_FeatureSellerProductMedia, {
                      modelValue: unref(form).images,
                      "onUpdate:modelValue": ($event) => unref(form).images = $event,
                      max: 9
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SellerFormGroup, {
              label: "Video Produk",
              error: (_d = (_c = unref(v$).video.$errors) == null ? void 0 : _c[0]) == null ? void 0 : _d.$message
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex gap-6 items-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_FeatureSellerProductMedia, {
                    modelValue: unref(form).video,
                    "onUpdate:modelValue": ($event) => unref(form).video = $event,
                    max: 1,
                    type: "video",
                    icon: "i-heroicons:video-camera-solid"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="text-xs text-black/50"${_scopeId2}><p${_scopeId2}> File video maks. harus 30Mb dengan resolusi tidak melebihi 1280 x 1280px. </p><p${_scopeId2}>Durasi: 10-60detik</p><p${_scopeId2}>Format: MP4</p><p${_scopeId2}> Catatan: Kamu dapat menampilkan produk saat video sedang diproses. Video akan muncul setelah berhasil diproses. </p></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex gap-6 items-center" }, [
                      createVNode(_component_FeatureSellerProductMedia, {
                        modelValue: unref(form).video,
                        "onUpdate:modelValue": ($event) => unref(form).video = $event,
                        max: 1,
                        type: "video",
                        icon: "i-heroicons:video-camera-solid"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("div", { class: "text-xs text-black/50" }, [
                        createVNode("p", null, " File video maks. harus 30Mb dengan resolusi tidak melebihi 1280 x 1280px. "),
                        createVNode("p", null, "Durasi: 10-60detik"),
                        createVNode("p", null, "Format: MP4"),
                        createVNode("p", null, " Catatan: Kamu dapat menampilkan produk saat video sedang diproses. Video akan muncul setelah berhasil diproses. ")
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SellerFormGroup, {
              label: "Nama Produk",
              error: (_f = (_e = unref(v$).name.$errors) == null ? void 0 : _e[0]) == null ? void 0 : _f.$message
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(form).name,
                    "onUpdate:modelValue": ($event) => unref(form).name = $event,
                    size: "lg"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(form).name,
                      "onUpdate:modelValue": ($event) => unref(form).name = $event,
                      size: "lg"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SellerFormGroup, {
              label: "Kategori",
              required: "",
              error: (_h = (_g = unref(v$).category_slug.$errors) == null ? void 0 : _g[0]) == null ? void 0 : _h.$message
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_USelectMenu, {
                    modelValue: unref(form).category_slug,
                    "onUpdate:modelValue": ($event) => unref(form).category_slug = $event,
                    options: unref(optionsCategories),
                    size: "lg",
                    loading: unref(statusCategory) === "pending",
                    disabled: unref(statusCategory) === "pending",
                    "value-attribute": "slug",
                    "option-attribute": "name"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_USelectMenu, {
                      modelValue: unref(form).category_slug,
                      "onUpdate:modelValue": ($event) => unref(form).category_slug = $event,
                      options: unref(optionsCategories),
                      size: "lg",
                      loading: unref(statusCategory) === "pending",
                      disabled: unref(statusCategory) === "pending",
                      "value-attribute": "slug",
                      "option-attribute": "name"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "loading", "disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SellerFormGroup, {
              label: "Deskripsi Produk",
              required: "",
              help: `${unref(form).description.length}/3000`,
              error: (_j = (_i = unref(v$).description.$errors) == null ? void 0 : _i[0]) == null ? void 0 : _j.$message
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UTextarea, {
                    modelValue: unref(form).description,
                    "onUpdate:modelValue": ($event) => unref(form).description = $event,
                    size: "lg"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UTextarea, {
                      modelValue: unref(form).description,
                      "onUpdate:modelValue": ($event) => unref(form).description = $event,
                      size: "lg"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mt-4 space-y-6" }, [
                createVNode(_component_SellerFormGroup, {
                  label: "Foto Produk",
                  required: "",
                  error: (_l = (_k = unref(v$).images.$errors) == null ? void 0 : _k[0]) == null ? void 0 : _l.$message
                }, {
                  default: withCtx(() => [
                    createVNode(_component_FeatureSellerProductMedia, {
                      modelValue: unref(form).images,
                      "onUpdate:modelValue": ($event) => unref(form).images = $event,
                      max: 9
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }, 8, ["error"]),
                createVNode(_component_SellerFormGroup, {
                  label: "Video Produk",
                  error: (_n = (_m = unref(v$).video.$errors) == null ? void 0 : _m[0]) == null ? void 0 : _n.$message
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex gap-6 items-center" }, [
                      createVNode(_component_FeatureSellerProductMedia, {
                        modelValue: unref(form).video,
                        "onUpdate:modelValue": ($event) => unref(form).video = $event,
                        max: 1,
                        type: "video",
                        icon: "i-heroicons:video-camera-solid"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("div", { class: "text-xs text-black/50" }, [
                        createVNode("p", null, " File video maks. harus 30Mb dengan resolusi tidak melebihi 1280 x 1280px. "),
                        createVNode("p", null, "Durasi: 10-60detik"),
                        createVNode("p", null, "Format: MP4"),
                        createVNode("p", null, " Catatan: Kamu dapat menampilkan produk saat video sedang diproses. Video akan muncul setelah berhasil diproses. ")
                      ])
                    ])
                  ]),
                  _: 1
                }, 8, ["error"]),
                createVNode(_component_SellerFormGroup, {
                  label: "Nama Produk",
                  error: (_p = (_o = unref(v$).name.$errors) == null ? void 0 : _o[0]) == null ? void 0 : _p.$message
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: unref(form).name,
                      "onUpdate:modelValue": ($event) => unref(form).name = $event,
                      size: "lg"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }, 8, ["error"]),
                createVNode(_component_SellerFormGroup, {
                  label: "Kategori",
                  required: "",
                  error: (_r = (_q = unref(v$).category_slug.$errors) == null ? void 0 : _q[0]) == null ? void 0 : _r.$message
                }, {
                  default: withCtx(() => [
                    createVNode(_component_USelectMenu, {
                      modelValue: unref(form).category_slug,
                      "onUpdate:modelValue": ($event) => unref(form).category_slug = $event,
                      options: unref(optionsCategories),
                      size: "lg",
                      loading: unref(statusCategory) === "pending",
                      disabled: unref(statusCategory) === "pending",
                      "value-attribute": "slug",
                      "option-attribute": "name"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "loading", "disabled"])
                  ]),
                  _: 1
                }, 8, ["error"]),
                createVNode(_component_SellerFormGroup, {
                  label: "Deskripsi Produk",
                  required: "",
                  help: `${unref(form).description.length}/3000`,
                  error: (_t = (_s = unref(v$).description.$errors) == null ? void 0 : _s[0]) == null ? void 0 : _t.$message
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UTextarea, {
                      modelValue: unref(form).description,
                      "onUpdate:modelValue": ($event) => unref(form).description = $event,
                      size: "lg"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }, 8, ["help", "error"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_SellerCard, { title: "Informasi Penjualan" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
          if (_push2) {
            _push2(`<div class="mt-4 space-y-6"${_scopeId}><div class="grid grid-cols-2 gap-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_SellerFormGroup, {
              label: "Harga",
              error: (_b = (_a = unref(v$).price.$errors) == null ? void 0 : _a[0]) == null ? void 0 : _b.$message,
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(form).price,
                    "onUpdate:modelValue": ($event) => unref(form).price = $event,
                    size: "lg",
                    type: "number"
                  }, {
                    leading: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Rp`);
                      } else {
                        return [
                          createTextVNode("Rp")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(form).price,
                      "onUpdate:modelValue": ($event) => unref(form).price = $event,
                      size: "lg",
                      type: "number"
                    }, {
                      leading: withCtx(() => [
                        createTextVNode("Rp")
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SellerFormGroup, {
              label: "Harga Diskon",
              error: (_d = (_c = unref(v$).price_sale.$errors) == null ? void 0 : _c[0]) == null ? void 0 : _d.$message
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(form).price_sale,
                    "onUpdate:modelValue": ($event) => unref(form).price_sale = $event,
                    size: "lg",
                    type: "number"
                  }, {
                    leading: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Rp`);
                      } else {
                        return [
                          createTextVNode("Rp")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(form).price_sale,
                      "onUpdate:modelValue": ($event) => unref(form).price_sale = $event,
                      size: "lg",
                      type: "number"
                    }, {
                      leading: withCtx(() => [
                        createTextVNode("Rp")
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_SellerFormGroup, {
              label: "Stok",
              error: (_f = (_e = unref(v$).stock.$errors) == null ? void 0 : _e[0]) == null ? void 0 : _f.$message,
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(form).stock,
                    "onUpdate:modelValue": ($event) => unref(form).stock = $event,
                    size: "lg",
                    type: "number"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(form).stock,
                      "onUpdate:modelValue": ($event) => unref(form).stock = $event,
                      size: "lg",
                      type: "number"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SellerFormGroup, { label: "Variasi" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="space-y-4"${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(form).variations, (variant, index) => {
                    _push3(ssrRenderComponent(_component_FeatureSellerProductVariant, {
                      key: `variations-${index}`,
                      modelValue: variant.name,
                      "onUpdate:modelValue": ($event) => variant.name = $event,
                      value: variant.value,
                      "onUpdate:value": ($event) => variant.value = $event,
                      onDelete: ($event) => handleDeleteVariants(index)
                    }, null, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--><div class="p-4 bg-gray-100 rounded-sm"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "white",
                    class: "text-primary",
                    size: "xs",
                    icon: "i-heroicons:plus",
                    onClick: handleAddVariations
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Tambah Variasi ${ssrInterpolate(unref(form).variations.length + 1)}`);
                      } else {
                        return [
                          createTextVNode(" Tambah Variasi " + toDisplayString(unref(form).variations.length + 1), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "space-y-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(form).variations, (variant, index) => {
                        return openBlock(), createBlock(_component_FeatureSellerProductVariant, {
                          key: `variations-${index}`,
                          modelValue: variant.name,
                          "onUpdate:modelValue": ($event) => variant.name = $event,
                          value: variant.value,
                          "onUpdate:value": ($event) => variant.value = $event,
                          onDelete: ($event) => handleDeleteVariants(index)
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "value", "onUpdate:value", "onDelete"]);
                      }), 128)),
                      createVNode("div", { class: "p-4 bg-gray-100 rounded-sm" }, [
                        createVNode(_component_UButton, {
                          color: "white",
                          class: "text-primary",
                          size: "xs",
                          icon: "i-heroicons:plus",
                          onClick: handleAddVariations
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Tambah Variasi " + toDisplayString(unref(form).variations.length + 1), 1)
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mt-4 space-y-6" }, [
                createVNode("div", { class: "grid grid-cols-2 gap-6" }, [
                  createVNode(_component_SellerFormGroup, {
                    label: "Harga",
                    error: (_h = (_g = unref(v$).price.$errors) == null ? void 0 : _g[0]) == null ? void 0 : _h.$message,
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: unref(form).price,
                        "onUpdate:modelValue": ($event) => unref(form).price = $event,
                        size: "lg",
                        type: "number"
                      }, {
                        leading: withCtx(() => [
                          createTextVNode("Rp")
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }, 8, ["error"]),
                  createVNode(_component_SellerFormGroup, {
                    label: "Harga Diskon",
                    error: (_j = (_i = unref(v$).price_sale.$errors) == null ? void 0 : _i[0]) == null ? void 0 : _j.$message
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: unref(form).price_sale,
                        "onUpdate:modelValue": ($event) => unref(form).price_sale = $event,
                        size: "lg",
                        type: "number"
                      }, {
                        leading: withCtx(() => [
                          createTextVNode("Rp")
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }, 8, ["error"])
                ]),
                createVNode(_component_SellerFormGroup, {
                  label: "Stok",
                  error: (_l = (_k = unref(v$).stock.$errors) == null ? void 0 : _k[0]) == null ? void 0 : _l.$message,
                  required: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: unref(form).stock,
                      "onUpdate:modelValue": ($event) => unref(form).stock = $event,
                      size: "lg",
                      type: "number"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }, 8, ["error"]),
                createVNode(_component_SellerFormGroup, { label: "Variasi" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "space-y-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(form).variations, (variant, index) => {
                        return openBlock(), createBlock(_component_FeatureSellerProductVariant, {
                          key: `variations-${index}`,
                          modelValue: variant.name,
                          "onUpdate:modelValue": ($event) => variant.name = $event,
                          value: variant.value,
                          "onUpdate:value": ($event) => variant.value = $event,
                          onDelete: ($event) => handleDeleteVariants(index)
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "value", "onUpdate:value", "onDelete"]);
                      }), 128)),
                      createVNode("div", { class: "p-4 bg-gray-100 rounded-sm" }, [
                        createVNode(_component_UButton, {
                          color: "white",
                          class: "text-primary",
                          size: "xs",
                          icon: "i-heroicons:plus",
                          onClick: handleAddVariations
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Tambah Variasi " + toDisplayString(unref(form).variations.length + 1), 1)
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_SellerCard, { title: "Pengiriman" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
          if (_push2) {
            _push2(`<div class="mt-4 space-y-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_SellerFormGroup, {
              label: "Berat",
              required: "",
              error: (_b = (_a = unref(v$).weight.$errors) == null ? void 0 : _a[0]) == null ? void 0 : _b.$message
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(form).weight,
                    "onUpdate:modelValue": ($event) => unref(form).weight = $event,
                    size: "lg",
                    type: "number"
                  }, {
                    trailing: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`gr`);
                      } else {
                        return [
                          createTextVNode("gr")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex" }, [
                      createVNode(_component_UInput, {
                        modelValue: unref(form).weight,
                        "onUpdate:modelValue": ($event) => unref(form).weight = $event,
                        size: "lg",
                        type: "number"
                      }, {
                        trailing: withCtx(() => [
                          createTextVNode("gr")
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SellerFormGroup, {
              label: "Ukuran Paket",
              error: ((_d = (_c = unref(v$).length.$errors) == null ? void 0 : _c[0]) == null ? void 0 : _d.$message) || ((_f = (_e = unref(v$).width.$errors) == null ? void 0 : _e[0]) == null ? void 0 : _f.$message) || ((_h = (_g = unref(v$).height.$errors) == null ? void 0 : _g[0]) == null ? void 0 : _h.$message)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex gap-2 items-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(form).length,
                    "onUpdate:modelValue": ($event) => unref(form).length = $event,
                    size: "lg",
                    type: "number",
                    placeholder: "L"
                  }, {
                    trailing: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`cm`);
                      } else {
                        return [
                          createTextVNode("cm")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-heroicons:x-mark",
                    class: "text-black/20"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(form).width,
                    "onUpdate:modelValue": ($event) => unref(form).width = $event,
                    size: "lg",
                    type: "number"
                  }, {
                    trailing: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`cm`);
                      } else {
                        return [
                          createTextVNode("cm")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-heroicons:x-mark",
                    class: "text-black/20"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(form).height,
                    "onUpdate:modelValue": ($event) => unref(form).height = $event,
                    size: "lg",
                    type: "number"
                  }, {
                    trailing: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`cm`);
                      } else {
                        return [
                          createTextVNode("cm")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex gap-2 items-center" }, [
                      createVNode(_component_UInput, {
                        modelValue: unref(form).length,
                        "onUpdate:modelValue": ($event) => unref(form).length = $event,
                        size: "lg",
                        type: "number",
                        placeholder: "L"
                      }, {
                        trailing: withCtx(() => [
                          createTextVNode("cm")
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_UIcon, {
                        name: "i-heroicons:x-mark",
                        class: "text-black/20"
                      }),
                      createVNode(_component_UInput, {
                        modelValue: unref(form).width,
                        "onUpdate:modelValue": ($event) => unref(form).width = $event,
                        size: "lg",
                        type: "number"
                      }, {
                        trailing: withCtx(() => [
                          createTextVNode("cm")
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_UIcon, {
                        name: "i-heroicons:x-mark",
                        class: "text-black/20"
                      }),
                      createVNode(_component_UInput, {
                        modelValue: unref(form).height,
                        "onUpdate:modelValue": ($event) => unref(form).height = $event,
                        size: "lg",
                        type: "number"
                      }, {
                        trailing: withCtx(() => [
                          createTextVNode("cm")
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mt-4 space-y-6" }, [
                createVNode(_component_SellerFormGroup, {
                  label: "Berat",
                  required: "",
                  error: (_j = (_i = unref(v$).weight.$errors) == null ? void 0 : _i[0]) == null ? void 0 : _j.$message
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex" }, [
                      createVNode(_component_UInput, {
                        modelValue: unref(form).weight,
                        "onUpdate:modelValue": ($event) => unref(form).weight = $event,
                        size: "lg",
                        type: "number"
                      }, {
                        trailing: withCtx(() => [
                          createTextVNode("gr")
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  _: 1
                }, 8, ["error"]),
                createVNode(_component_SellerFormGroup, {
                  label: "Ukuran Paket",
                  error: ((_l = (_k = unref(v$).length.$errors) == null ? void 0 : _k[0]) == null ? void 0 : _l.$message) || ((_n = (_m = unref(v$).width.$errors) == null ? void 0 : _m[0]) == null ? void 0 : _n.$message) || ((_p = (_o = unref(v$).height.$errors) == null ? void 0 : _o[0]) == null ? void 0 : _p.$message)
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex gap-2 items-center" }, [
                      createVNode(_component_UInput, {
                        modelValue: unref(form).length,
                        "onUpdate:modelValue": ($event) => unref(form).length = $event,
                        size: "lg",
                        type: "number",
                        placeholder: "L"
                      }, {
                        trailing: withCtx(() => [
                          createTextVNode("cm")
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_UIcon, {
                        name: "i-heroicons:x-mark",
                        class: "text-black/20"
                      }),
                      createVNode(_component_UInput, {
                        modelValue: unref(form).width,
                        "onUpdate:modelValue": ($event) => unref(form).width = $event,
                        size: "lg",
                        type: "number"
                      }, {
                        trailing: withCtx(() => [
                          createTextVNode("cm")
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_UIcon, {
                        name: "i-heroicons:x-mark",
                        class: "text-black/20"
                      }),
                      createVNode(_component_UInput, {
                        modelValue: unref(form).height,
                        "onUpdate:modelValue": ($event) => unref(form).height = $event,
                        size: "lg",
                        type: "number"
                      }, {
                        trailing: withCtx(() => [
                          createTextVNode("cm")
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  _: 1
                }, 8, ["error"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_SellerCard, { class: "sticky bottom-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-end gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "white",
              size: "xs",
              disabled: unref(statusAdd) === "pending" || unref(statusUpdate) === "pending",
              to: "/seller/product"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Kembali `);
                } else {
                  return [
                    createTextVNode(" Kembali ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "primary",
              size: "xs",
              loading: unref(statusAdd) === "pending" || unref(statusUpdate) === "pending",
              onClick: handleSubmit
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Simpan `);
                } else {
                  return [
                    createTextVNode(" Simpan ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-end gap-4" }, [
                createVNode(_component_UButton, {
                  color: "white",
                  size: "xs",
                  disabled: unref(statusAdd) === "pending" || unref(statusUpdate) === "pending",
                  to: "/seller/product"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Kembali ")
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                createVNode(_component_UButton, {
                  color: "primary",
                  size: "xs",
                  loading: unref(statusAdd) === "pending" || unref(statusUpdate) === "pending",
                  onClick: handleSubmit
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Simpan ")
                  ]),
                  _: 1
                }, 8, ["loading"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/seller/product/[action]/[[productId]].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_productId_-CFsD9ExB.mjs.map
