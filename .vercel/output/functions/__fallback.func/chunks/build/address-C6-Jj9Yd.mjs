import { b as __nuxt_component_5, r as refreshNuxtData, d as useNuxtApp } from './server.mjs';
import { _ as __nuxt_component_6 } from './Skeleton-BQCeVCk_.mjs';
import { _ as __nuxt_component_5$1 } from './Badge-CoW0C7GQ.mjs';
import { ref, withCtx, createTextVNode, unref, isRef, computed, mergeProps, useModel, createVNode, mergeModels, toDisplayString, withModifiers, createBlock, createCommentVNode, openBlock, reactive, watch, Fragment, renderList, nextTick, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useSubmit } from './use-submit-TWB9IMR2.mjs';
import { _ as __nuxt_component_3 } from './Modal-DiMSs998.mjs';
import { _ as __nuxt_component_5$2 } from './Card-DbWg7JF8.mjs';
import { _ as __nuxt_component_0 } from './FormGroup-DpovdzGZ.mjs';
import { _ as __nuxt_component_3$1 } from './Input-BSkwWT7v.mjs';
import { _ as __nuxt_component_0$1 } from './Popover-GjsAgxql.mjs';
import { _ as __nuxt_component_0$2 } from './Tabs-DKAzzVlP.mjs';
import { u as useApi } from './use-api-DLZ2CTc2.mjs';
import { _ as __nuxt_component_5$3 } from './Textarea-nJripv25.mjs';
import { _ as _sfc_main$4 } from './RadioCard-DuYIHzbi.mjs';
import { _ as __nuxt_component_3$2 } from './Checkbox-Cf2pHysF.mjs';
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
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
import './use-resolve-button-type-DOOP2SMg.mjs';
import './usePopper-BrvKSG9Z.mjs';

const _sfc_main$3 = {
  __name: "CardItem",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["change", "change:status"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { execute, status } = useSubmit(
      computed(() => `/server/api/address/${props.item.uuid}/set-default`)
    );
    async function handleUpdateDefaultAddress() {
      if (props.item.is_default) return;
      await execute();
      if (status.value === "success") {
        refreshNuxtData();
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_UButton = __nuxt_component_5;
      const _component_UBadge = __nuxt_component_5$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-4 text-sm flex flex-col gap-1" }, _attrs))}><div class="flex justify-between items-center gap-3"><div class="flex divide-x items-center"><p class="text-base font-medium pr-2">${ssrInterpolate(__props.item.receiver_name)}</p><span class="text-black/55 pl-2">${ssrInterpolate(__props.item.receiver_phone)}</span></div>`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "blue",
        variant: "link",
        padded: false,
        size: "xs",
        onClick: ($event) => emit("change", __props.item)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Ubah `);
          } else {
            return [
              createTextVNode(" Ubah ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex justify-between items-start text-black/55"><div><p>${ssrInterpolate(__props.item.detail_address)}</p><p>${ssrInterpolate(__props.item.district)}, ${ssrInterpolate((_a = __props.item.city) == null ? void 0 : _a.name)}, ${ssrInterpolate((_c = (_b = __props.item.city) == null ? void 0 : _b.province) == null ? void 0 : _c.name)}, ${ssrInterpolate(__props.item.postal_code)}</p>`);
      if (__props.item.address_note) {
        _push(`<p>${ssrInterpolate(__props.item.address_note)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "white",
        size: "xs",
        disabled: __props.item.is_default,
        loading: unref(status) === "pending",
        onClick: handleUpdateDefaultAddress
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Atur sebagai utama `);
          } else {
            return [
              createTextVNode(" Atur sebagai utama ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (__props.item.is_default) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_UBadge, {
          color: "primary",
          variant: "outline",
          size: "xs"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Utama`);
            } else {
              return [
                createTextVNode("Utama")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/feature/ProfileAddress/CardItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "InputSelectCity",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    placeholder: {
      type: String,
      default: "Provinsi, Kota"
    }
  }, {
    "city": {
      type: Object,
      default: () => ({
        uuid: null,
        name: null
      })
    },
    "cityModifiers": {},
    "province": {
      type: Object,
      default: () => ({
        uuid: null,
        name: null
      })
    },
    "provinceModifiers": {}
  }),
  emits: ["update:city", "update:province"],
  setup(__props) {
    const nuxtApp = useNuxtApp();
    const modelCity = useModel(__props, "city");
    const modelProvince = useModel(__props, "province");
    const tabActive = ref(0);
    const form = reactive({
      province: null,
      city: null
    });
    watch(
      modelCity,
      (newCity) => {
        form.city = {
          uuid: newCity == null ? void 0 : newCity.uuid,
          name: newCity == null ? void 0 : newCity.name
        };
      },
      { immediate: true }
    );
    watch(
      modelProvince,
      (newProvince) => {
        form.province = {
          uuid: newProvince == null ? void 0 : newProvince.uuid,
          name: newProvince == null ? void 0 : newProvince.name
        };
      },
      { immediate: true }
    );
    const showSelected = computed(
      () => {
        var _a;
        return `${((_a = form.province) == null ? void 0 : _a.name) || ""}${form.city ? `, ${form.city.name}` : ""}`;
      }
    );
    const items = computed(() => {
      var _a;
      return [
        {
          label: "Provinsi",
          key: "province"
        },
        {
          label: "Kota",
          key: "city",
          disabled: !((_a = form.province) == null ? void 0 : _a.uuid)
        }
      ];
    });
    const options = computed(() => ({
      city: cities.value,
      province: provinces.value
    }));
    const { data: responseProvince, status: statusProvince } = useApi(
      "/server/api/province",
      {
        key: "province-list",
        getCachedData() {
          var _a, _b;
          return ((_a = nuxtApp.payload.data) == null ? void 0 : _a["province-list"]) || ((_b = nuxtApp.static.data) == null ? void 0 : _b["province-list"]);
        }
      }
    );
    const { data: responseCities, status: statusCities } = useApi(
      "/server/api/city",
      {
        immediate: false,
        params: computed(() => {
          var _a;
          return {
            province_uuid: (_a = form.province) == null ? void 0 : _a.uuid
          };
        })
      }
    );
    const provinces = computed(() => {
      var _a;
      return ((_a = responseProvince.value) == null ? void 0 : _a.data) || [];
    });
    const cities = computed(() => {
      var _a;
      return ((_a = responseCities.value) == null ? void 0 : _a.data) || [];
    });
    async function handleSelect(value, type, close) {
      form[type] = value;
      await nextTick();
      if (type === "province") {
        form.city = null;
        tabActive.value = 1;
      } else {
        modelCity.value = {
          uuid: form.city.uuid,
          name: form.city.name
        };
        modelProvince.value = {
          uuid: form.province.uuid,
          name: form.province.name
        };
        tabActive.value = 0;
        close();
      }
    }
    function handleCheckSelected(isOpen) {
      if (!isOpen) {
        tabActive.value = 0;
        if (!form.city) {
          form.province = null;
        }
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPopover = __nuxt_component_0$1;
      const _component_UInput = __nuxt_component_3$1;
      const _component_UTabs = __nuxt_component_0$2;
      const _component_USkeleton = __nuxt_component_6;
      const _component_UButton = __nuxt_component_5;
      _push(ssrRenderComponent(_component_UPopover, mergeProps({
        popper: { placement: "bottom-start", strategy: "absolute" },
        ui: {
          width: "w-full",
          rounded: "rounded-sm"
        },
        "onUpdate:open": handleCheckSelected
      }, _attrs), {
        panel: withCtx(({ close }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UTabs, {
              modelValue: unref(tabActive),
              "onUpdate:modelValue": ($event) => isRef(tabActive) ? tabActive.value = $event : null,
              items: unref(items),
              ui: {
                list: {
                  background: "bg-white border-b",
                  padding: "p-0",
                  rounded: "rounded-none",
                  marker: {
                    wrapper: "!top-[0px] left-0 !h-[100%] border-b-2 border-primary",
                    rounded: "rounded-none",
                    shadow: "shadow-none"
                  },
                  tab: {
                    active: "text-primary",
                    inactive: "text-black/80",
                    rounded: "rounded-none"
                  }
                }
              }
            }, {
              item: withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="max-h-96 overflow-y-auto"${_scopeId2}>`);
                  if (unref(statusProvince) === "pending" || unref(statusCities) === "pending") {
                    _push3(`<div class="space-y-3 p-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_USkeleton, { class: "h-4" }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_USkeleton, { class: "h-4" }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_USkeleton, { class: "h-4" }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_USkeleton, { class: "h-4" }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!--[-->`);
                    if (unref(options)[item.key].length) {
                      _push3(`<!--[-->`);
                      ssrRenderList(unref(options)[item.key], (child) => {
                        var _a;
                        _push3(ssrRenderComponent(_component_UButton, {
                          key: child.uuid,
                          variant: "ghost",
                          block: "",
                          color: ((_a = unref(form)[item.key]) == null ? void 0 : _a.uuid) === child.uuid ? "primary" : "gray",
                          class: "justify-start",
                          label: child.name,
                          onClick: ($event) => handleSelect(child, item.key, close)
                        }, null, _parent3, _scopeId2));
                      });
                      _push3(`<!--]-->`);
                    } else {
                      _push3(`<p class="text-center my-3 text-black/40"${_scopeId2}> Tidak ada data yang ditemukan </p>`);
                    }
                    _push3(`<!--]-->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "max-h-96 overflow-y-auto" }, [
                      unref(statusProvince) === "pending" || unref(statusCities) === "pending" ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "space-y-3 p-2"
                      }, [
                        createVNode(_component_USkeleton, { class: "h-4" }),
                        createVNode(_component_USkeleton, { class: "h-4" }),
                        createVNode(_component_USkeleton, { class: "h-4" }),
                        createVNode(_component_USkeleton, { class: "h-4" })
                      ])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                        unref(options)[item.key].length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(options)[item.key], (child) => {
                          var _a;
                          return openBlock(), createBlock(_component_UButton, {
                            key: child.uuid,
                            variant: "ghost",
                            block: "",
                            color: ((_a = unref(form)[item.key]) == null ? void 0 : _a.uuid) === child.uuid ? "primary" : "gray",
                            class: "justify-start",
                            label: child.name,
                            onClick: ($event) => handleSelect(child, item.key, close)
                          }, null, 8, ["color", "label", "onClick"]);
                        }), 128)) : (openBlock(), createBlock("p", {
                          key: 1,
                          class: "text-center my-3 text-black/40"
                        }, " Tidak ada data yang ditemukan "))
                      ], 64))
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode(_component_UTabs, {
                  modelValue: unref(tabActive),
                  "onUpdate:modelValue": ($event) => isRef(tabActive) ? tabActive.value = $event : null,
                  items: unref(items),
                  ui: {
                    list: {
                      background: "bg-white border-b",
                      padding: "p-0",
                      rounded: "rounded-none",
                      marker: {
                        wrapper: "!top-[0px] left-0 !h-[100%] border-b-2 border-primary",
                        rounded: "rounded-none",
                        shadow: "shadow-none"
                      },
                      tab: {
                        active: "text-primary",
                        inactive: "text-black/80",
                        rounded: "rounded-none"
                      }
                    }
                  }
                }, {
                  item: withCtx(({ item }) => [
                    createVNode("div", { class: "max-h-96 overflow-y-auto" }, [
                      unref(statusProvince) === "pending" || unref(statusCities) === "pending" ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "space-y-3 p-2"
                      }, [
                        createVNode(_component_USkeleton, { class: "h-4" }),
                        createVNode(_component_USkeleton, { class: "h-4" }),
                        createVNode(_component_USkeleton, { class: "h-4" }),
                        createVNode(_component_USkeleton, { class: "h-4" })
                      ])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                        unref(options)[item.key].length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(options)[item.key], (child) => {
                          var _a;
                          return openBlock(), createBlock(_component_UButton, {
                            key: child.uuid,
                            variant: "ghost",
                            block: "",
                            color: ((_a = unref(form)[item.key]) == null ? void 0 : _a.uuid) === child.uuid ? "primary" : "gray",
                            class: "justify-start",
                            label: child.name,
                            onClick: ($event) => handleSelect(child, item.key, close)
                          }, null, 8, ["color", "label", "onClick"]);
                        }), 128)) : (openBlock(), createBlock("p", {
                          key: 1,
                          class: "text-center my-3 text-black/40"
                        }, " Tidak ada data yang ditemukan "))
                      ], 64))
                    ])
                  ]),
                  _: 2
                }, 1032, ["modelValue", "onUpdate:modelValue", "items"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UInput, {
              "model-value": unref(showSelected),
              placeholder: __props.placeholder,
              class: "w-full",
              size: "lg"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UInput, {
                "model-value": unref(showSelected),
                placeholder: __props.placeholder,
                class: "w-full",
                size: "lg"
              }, null, 8, ["model-value", "placeholder"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/feature/ProfileAddress/InputSelectCity.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "ModalMutation",
  __ssrInlineRender: true,
  props: {
    "open": {
      type: Boolean,
      default: false
    },
    "openModifiers": {}
  },
  emits: ["update:open"],
  setup(__props, { expose: __expose }) {
    const open = useModel(__props, "open");
    const form = ref({
      is_default: false,
      receiver_name: "",
      receiver_phone: "",
      district: "",
      postal_code: "",
      detail_address: "",
      address_note: "",
      type: "",
      city: {
        uuid: "",
        name: ""
      },
      province: {
        uuid: "",
        name: ""
      }
    });
    const rules = {
      is_default: { required },
      receiver_name: { required },
      receiver_phone: { required },
      district: { required },
      postal_code: { required },
      detail_address: { required },
      address_note: {},
      type: { required },
      city: {
        uuid: { required }
      },
      province: {
        uuid: { required }
      }
    };
    const $externalResults = ref({});
    const v$ = useVuelidate(rules, form, {
      $autoDirty: true,
      $externalResults
    });
    const addressType = [
      {
        label: "Rumah",
        value: "home"
      },
      {
        label: "Kantor",
        value: "office"
      }
    ];
    const { execute, status, error } = useSubmit("/server/api/address");
    const {
      execute: edit,
      status: statusEdit,
      error: errorEdit
    } = useSubmit(computed(() => {
      var _a;
      return `/server/api/address/${(_a = form.value) == null ? void 0 : _a.uuid}`;
    }));
    function setDefaultValue(defaultValue) {
      if (defaultValue && typeof defaultValue === "object") {
        form.value = defaultValue;
      }
    }
    function handleCancel() {
      form.value = {
        is_default: false,
        receiver_name: "",
        receiver_phone: "",
        district: "",
        postal_code: "",
        detail_address: "",
        address_note: "",
        type: "",
        city: {
          uuid: "",
          name: ""
        },
        province: {
          uuid: "",
          name: ""
        }
      };
      v$.value.$reset();
      open.value = false;
    }
    async function handleSave() {
      var _a, _b, _c, _d, _e;
      const isValid = await v$.value.$validate();
      if (!isValid) return;
      const { city, province, is_default, ...otherForm } = form.value;
      const newData = {
        ...otherForm,
        is_default: is_default ? 1 : 0,
        city_uuid: city.uuid
      };
      if ((_a = form.value) == null ? void 0 : _a.uuid) {
        await edit({ ...newData, _method: "PATCH" });
      } else {
        await execute(newData);
      }
      if (error.value || errorEdit.value) {
        if ((_c = (_b = (error.value || errorEdit.value).data) == null ? void 0 : _b.meta) == null ? void 0 : _c.validations) {
          const validations = {
            ...(_e = (_d = (error.value || errorEdit.value).data) == null ? void 0 : _d.meta) == null ? void 0 : _e.validations
          };
          if (validations == null ? void 0 : validations.city_uuid) {
            Object.assign(validations, {
              city: {
                uuid: validations.city_uuid.map(
                  (message) => message.replace("city uuid", "value")
                )
              }
            });
          }
          $externalResults.value = validations;
        }
        return;
      }
      if (status.value === "success" || statusEdit.value === "success") {
        refreshNuxtData();
        handleCancel();
      }
    }
    __expose({
      setDefaultValue
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UModal = __nuxt_component_3;
      const _component_UCard = __nuxt_component_5$2;
      const _component_UFormGroup = __nuxt_component_0;
      const _component_UInput = __nuxt_component_3$1;
      const _component_FeatureProfileAddressInputSelectCity = _sfc_main$2;
      const _component_UTextarea = __nuxt_component_5$3;
      const _component_BaseRadioCard = _sfc_main$4;
      const _component_UButton = __nuxt_component_5;
      const _component_UCheckbox = __nuxt_component_3$2;
      _push(ssrRenderComponent(_component_UModal, mergeProps({
        modelValue: open.value,
        "onUpdate:modelValue": ($event) => open.value = $event
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, { ui: {
              rounded: "rounded-sm"
            } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J;
                if (_push3) {
                  _push3(`<h3 class="text-xl font-normal"${_scopeId2}>Alamat Baru</h3><form class="grid grid-cols-2 gap-5 mt-5"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UFormGroup, {
                    error: (_b = (_a = unref(v$).receiver_name.$errors) == null ? void 0 : _a[0]) == null ? void 0 : _b.$message
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: unref(form).receiver_name,
                          "onUpdate:modelValue": ($event) => unref(form).receiver_name = $event,
                          placeholder: "Nama Lengkap",
                          size: "lg"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            modelValue: unref(form).receiver_name,
                            "onUpdate:modelValue": ($event) => unref(form).receiver_name = $event,
                            placeholder: "Nama Lengkap",
                            size: "lg"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UFormGroup, {
                    error: (_d = (_c = unref(v$).receiver_phone.$errors) == null ? void 0 : _c[0]) == null ? void 0 : _d.$message
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: unref(form).receiver_phone,
                          "onUpdate:modelValue": ($event) => unref(form).receiver_phone = $event,
                          placeholder: "Nomor Telepon",
                          size: "lg"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            modelValue: unref(form).receiver_phone,
                            "onUpdate:modelValue": ($event) => unref(form).receiver_phone = $event,
                            placeholder: "Nomor Telepon",
                            size: "lg"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UFormGroup, {
                    class: "col-span-2",
                    error: ((_f = (_e = unref(v$).city.uuid.$errors) == null ? void 0 : _e[0]) == null ? void 0 : _f.$message) || ((_h = (_g = unref(v$).province.uuid.$errors) == null ? void 0 : _g[0]) == null ? void 0 : _h.$message)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FeatureProfileAddressInputSelectCity, {
                          city: unref(form).city,
                          "onUpdate:city": ($event) => unref(form).city = $event,
                          province: unref(form).province,
                          "onUpdate:province": ($event) => unref(form).province = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_FeatureProfileAddressInputSelectCity, {
                            city: unref(form).city,
                            "onUpdate:city": ($event) => unref(form).city = $event,
                            province: unref(form).province,
                            "onUpdate:province": ($event) => unref(form).province = $event
                          }, null, 8, ["city", "onUpdate:city", "province", "onUpdate:province"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UFormGroup, {
                    error: (_j = (_i = unref(v$).district.$errors) == null ? void 0 : _i[0]) == null ? void 0 : _j.$message
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: unref(form).district,
                          "onUpdate:modelValue": ($event) => unref(form).district = $event,
                          placeholder: "Kecamatan",
                          size: "lg"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            modelValue: unref(form).district,
                            "onUpdate:modelValue": ($event) => unref(form).district = $event,
                            placeholder: "Kecamatan",
                            size: "lg"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UFormGroup, {
                    error: (_l = (_k = unref(v$).postal_code.$errors) == null ? void 0 : _k[0]) == null ? void 0 : _l.$message
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: unref(form).postal_code,
                          "onUpdate:modelValue": ($event) => unref(form).postal_code = $event,
                          placeholder: "Kode Pos",
                          size: "lg"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            modelValue: unref(form).postal_code,
                            "onUpdate:modelValue": ($event) => unref(form).postal_code = $event,
                            placeholder: "Kode Pos",
                            size: "lg"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UFormGroup, {
                    error: (_n = (_m = unref(v$).detail_address.$errors) == null ? void 0 : _m[0]) == null ? void 0 : _n.$message,
                    class: "col-span-2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UTextarea, {
                          modelValue: unref(form).detail_address,
                          "onUpdate:modelValue": ($event) => unref(form).detail_address = $event,
                          placeholder: "Nama Jalan, Gedung, No. Rumah",
                          size: "lg"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UTextarea, {
                            modelValue: unref(form).detail_address,
                            "onUpdate:modelValue": ($event) => unref(form).detail_address = $event,
                            placeholder: "Nama Jalan, Gedung, No. Rumah",
                            size: "lg"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UFormGroup, {
                    error: (_p = (_o = unref(v$).address_note.$errors) == null ? void 0 : _o[0]) == null ? void 0 : _p.$message,
                    class: "col-span-2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: unref(form).address_note,
                          "onUpdate:modelValue": ($event) => unref(form).address_note = $event,
                          placeholder: "Detail Lainnya (Cth: Blok / Unit No., Patokan)",
                          size: "lg"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            modelValue: unref(form).address_note,
                            "onUpdate:modelValue": ($event) => unref(form).address_note = $event,
                            placeholder: "Detail Lainnya (Cth: Blok / Unit No., Patokan)",
                            size: "lg"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="col-span-2"${_scopeId2}><label class="text-sm font-normal text-black/80"${_scopeId2}> Tandai Sebagai: </label>`);
                  _push3(ssrRenderComponent(_component_BaseRadioCard, {
                    modelValue: unref(form).type,
                    "onUpdate:modelValue": ($event) => unref(form).type = $event,
                    items: addressType,
                    class: "!flex !gap-2 justify-start my-2"
                  }, {
                    item: withCtx(({ label, value, selected, onClick }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UButton, {
                          color: selected ? "primary" : "white",
                          variant: selected ? "soft" : "solid",
                          ui: {
                            padding: {
                              sm: "py-3 px-3"
                            }
                          },
                          onClick: ($event) => onClick(value)
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(label)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(label), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UButton, {
                            color: selected ? "primary" : "white",
                            variant: selected ? "soft" : "solid",
                            ui: {
                              padding: {
                                sm: "py-3 px-3"
                              }
                            },
                            onClick: ($event) => onClick(value)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(label), 1)
                            ]),
                            _: 2
                          }, 1032, ["color", "variant", "onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if ((_r = (_q = unref(v$).type.$errors) == null ? void 0 : _q[0]) == null ? void 0 : _r.$message) {
                    _push3(`<p class="text-sm mb-2 text-red-500"${_scopeId2}>${ssrInterpolate(unref(v$).type.$errors[0].$message)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_UCheckbox, {
                    modelValue: unref(form).is_default,
                    "onUpdate:modelValue": ($event) => unref(form).is_default = $event,
                    label: "Atur sebagai Alamat Pribadi",
                    ui: {
                      label: "text-black/55"
                    }
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="flex justify-end mt-6 gap-2 col-span-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    label: "Nanti Saja",
                    color: "gray",
                    class: "max-w-36",
                    variant: "link",
                    block: "",
                    onClick: handleCancel
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    type: "submit",
                    label: "Ok",
                    class: "max-w-36",
                    block: "",
                    loading: unref(status) === "pending" || unref(statusEdit) === "pending"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></form>`);
                } else {
                  return [
                    createVNode("h3", { class: "text-xl font-normal" }, "Alamat Baru"),
                    createVNode("form", {
                      class: "grid grid-cols-2 gap-5 mt-5",
                      onSubmit: withModifiers(handleSave, ["prevent"])
                    }, [
                      createVNode(_component_UFormGroup, {
                        error: (_t = (_s = unref(v$).receiver_name.$errors) == null ? void 0 : _s[0]) == null ? void 0 : _t.$message
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: unref(form).receiver_name,
                            "onUpdate:modelValue": ($event) => unref(form).receiver_name = $event,
                            placeholder: "Nama Lengkap",
                            size: "lg"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }, 8, ["error"]),
                      createVNode(_component_UFormGroup, {
                        error: (_v = (_u = unref(v$).receiver_phone.$errors) == null ? void 0 : _u[0]) == null ? void 0 : _v.$message
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: unref(form).receiver_phone,
                            "onUpdate:modelValue": ($event) => unref(form).receiver_phone = $event,
                            placeholder: "Nomor Telepon",
                            size: "lg"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }, 8, ["error"]),
                      createVNode(_component_UFormGroup, {
                        class: "col-span-2",
                        error: ((_x = (_w = unref(v$).city.uuid.$errors) == null ? void 0 : _w[0]) == null ? void 0 : _x.$message) || ((_z = (_y = unref(v$).province.uuid.$errors) == null ? void 0 : _y[0]) == null ? void 0 : _z.$message)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_FeatureProfileAddressInputSelectCity, {
                            city: unref(form).city,
                            "onUpdate:city": ($event) => unref(form).city = $event,
                            province: unref(form).province,
                            "onUpdate:province": ($event) => unref(form).province = $event
                          }, null, 8, ["city", "onUpdate:city", "province", "onUpdate:province"])
                        ]),
                        _: 1
                      }, 8, ["error"]),
                      createVNode(_component_UFormGroup, {
                        error: (_B = (_A = unref(v$).district.$errors) == null ? void 0 : _A[0]) == null ? void 0 : _B.$message
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: unref(form).district,
                            "onUpdate:modelValue": ($event) => unref(form).district = $event,
                            placeholder: "Kecamatan",
                            size: "lg"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }, 8, ["error"]),
                      createVNode(_component_UFormGroup, {
                        error: (_D = (_C = unref(v$).postal_code.$errors) == null ? void 0 : _C[0]) == null ? void 0 : _D.$message
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: unref(form).postal_code,
                            "onUpdate:modelValue": ($event) => unref(form).postal_code = $event,
                            placeholder: "Kode Pos",
                            size: "lg"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }, 8, ["error"]),
                      createVNode(_component_UFormGroup, {
                        error: (_F = (_E = unref(v$).detail_address.$errors) == null ? void 0 : _E[0]) == null ? void 0 : _F.$message,
                        class: "col-span-2"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UTextarea, {
                            modelValue: unref(form).detail_address,
                            "onUpdate:modelValue": ($event) => unref(form).detail_address = $event,
                            placeholder: "Nama Jalan, Gedung, No. Rumah",
                            size: "lg"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }, 8, ["error"]),
                      createVNode(_component_UFormGroup, {
                        error: (_H = (_G = unref(v$).address_note.$errors) == null ? void 0 : _G[0]) == null ? void 0 : _H.$message,
                        class: "col-span-2"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: unref(form).address_note,
                            "onUpdate:modelValue": ($event) => unref(form).address_note = $event,
                            placeholder: "Detail Lainnya (Cth: Blok / Unit No., Patokan)",
                            size: "lg"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }, 8, ["error"]),
                      createVNode("div", { class: "col-span-2" }, [
                        createVNode("label", { class: "text-sm font-normal text-black/80" }, " Tandai Sebagai: "),
                        createVNode(_component_BaseRadioCard, {
                          modelValue: unref(form).type,
                          "onUpdate:modelValue": ($event) => unref(form).type = $event,
                          items: addressType,
                          class: "!flex !gap-2 justify-start my-2"
                        }, {
                          item: withCtx(({ label, value, selected, onClick }) => [
                            createVNode(_component_UButton, {
                              color: selected ? "primary" : "white",
                              variant: selected ? "soft" : "solid",
                              ui: {
                                padding: {
                                  sm: "py-3 px-3"
                                }
                              },
                              onClick: ($event) => onClick(value)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(label), 1)
                              ]),
                              _: 2
                            }, 1032, ["color", "variant", "onClick"])
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                        ((_J = (_I = unref(v$).type.$errors) == null ? void 0 : _I[0]) == null ? void 0 : _J.$message) ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-sm mb-2 text-red-500"
                        }, toDisplayString(unref(v$).type.$errors[0].$message), 1)) : createCommentVNode("", true),
                        createVNode(_component_UCheckbox, {
                          modelValue: unref(form).is_default,
                          "onUpdate:modelValue": ($event) => unref(form).is_default = $event,
                          label: "Atur sebagai Alamat Pribadi",
                          ui: {
                            label: "text-black/55"
                          }
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "flex justify-end mt-6 gap-2 col-span-2" }, [
                        createVNode(_component_UButton, {
                          label: "Nanti Saja",
                          color: "gray",
                          class: "max-w-36",
                          variant: "link",
                          block: "",
                          onClick: handleCancel
                        }),
                        createVNode(_component_UButton, {
                          type: "submit",
                          label: "Ok",
                          class: "max-w-36",
                          block: "",
                          loading: unref(status) === "pending" || unref(statusEdit) === "pending"
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
              createVNode(_component_UCard, { ui: {
                rounded: "rounded-sm"
              } }, {
                default: withCtx(() => {
                  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
                  return [
                    createVNode("h3", { class: "text-xl font-normal" }, "Alamat Baru"),
                    createVNode("form", {
                      class: "grid grid-cols-2 gap-5 mt-5",
                      onSubmit: withModifiers(handleSave, ["prevent"])
                    }, [
                      createVNode(_component_UFormGroup, {
                        error: (_b = (_a = unref(v$).receiver_name.$errors) == null ? void 0 : _a[0]) == null ? void 0 : _b.$message
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: unref(form).receiver_name,
                            "onUpdate:modelValue": ($event) => unref(form).receiver_name = $event,
                            placeholder: "Nama Lengkap",
                            size: "lg"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }, 8, ["error"]),
                      createVNode(_component_UFormGroup, {
                        error: (_d = (_c = unref(v$).receiver_phone.$errors) == null ? void 0 : _c[0]) == null ? void 0 : _d.$message
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: unref(form).receiver_phone,
                            "onUpdate:modelValue": ($event) => unref(form).receiver_phone = $event,
                            placeholder: "Nomor Telepon",
                            size: "lg"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }, 8, ["error"]),
                      createVNode(_component_UFormGroup, {
                        class: "col-span-2",
                        error: ((_f = (_e = unref(v$).city.uuid.$errors) == null ? void 0 : _e[0]) == null ? void 0 : _f.$message) || ((_h = (_g = unref(v$).province.uuid.$errors) == null ? void 0 : _g[0]) == null ? void 0 : _h.$message)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_FeatureProfileAddressInputSelectCity, {
                            city: unref(form).city,
                            "onUpdate:city": ($event) => unref(form).city = $event,
                            province: unref(form).province,
                            "onUpdate:province": ($event) => unref(form).province = $event
                          }, null, 8, ["city", "onUpdate:city", "province", "onUpdate:province"])
                        ]),
                        _: 1
                      }, 8, ["error"]),
                      createVNode(_component_UFormGroup, {
                        error: (_j = (_i = unref(v$).district.$errors) == null ? void 0 : _i[0]) == null ? void 0 : _j.$message
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: unref(form).district,
                            "onUpdate:modelValue": ($event) => unref(form).district = $event,
                            placeholder: "Kecamatan",
                            size: "lg"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }, 8, ["error"]),
                      createVNode(_component_UFormGroup, {
                        error: (_l = (_k = unref(v$).postal_code.$errors) == null ? void 0 : _k[0]) == null ? void 0 : _l.$message
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: unref(form).postal_code,
                            "onUpdate:modelValue": ($event) => unref(form).postal_code = $event,
                            placeholder: "Kode Pos",
                            size: "lg"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }, 8, ["error"]),
                      createVNode(_component_UFormGroup, {
                        error: (_n = (_m = unref(v$).detail_address.$errors) == null ? void 0 : _m[0]) == null ? void 0 : _n.$message,
                        class: "col-span-2"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UTextarea, {
                            modelValue: unref(form).detail_address,
                            "onUpdate:modelValue": ($event) => unref(form).detail_address = $event,
                            placeholder: "Nama Jalan, Gedung, No. Rumah",
                            size: "lg"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }, 8, ["error"]),
                      createVNode(_component_UFormGroup, {
                        error: (_p = (_o = unref(v$).address_note.$errors) == null ? void 0 : _o[0]) == null ? void 0 : _p.$message,
                        class: "col-span-2"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: unref(form).address_note,
                            "onUpdate:modelValue": ($event) => unref(form).address_note = $event,
                            placeholder: "Detail Lainnya (Cth: Blok / Unit No., Patokan)",
                            size: "lg"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }, 8, ["error"]),
                      createVNode("div", { class: "col-span-2" }, [
                        createVNode("label", { class: "text-sm font-normal text-black/80" }, " Tandai Sebagai: "),
                        createVNode(_component_BaseRadioCard, {
                          modelValue: unref(form).type,
                          "onUpdate:modelValue": ($event) => unref(form).type = $event,
                          items: addressType,
                          class: "!flex !gap-2 justify-start my-2"
                        }, {
                          item: withCtx(({ label, value, selected, onClick }) => [
                            createVNode(_component_UButton, {
                              color: selected ? "primary" : "white",
                              variant: selected ? "soft" : "solid",
                              ui: {
                                padding: {
                                  sm: "py-3 px-3"
                                }
                              },
                              onClick: ($event) => onClick(value)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(label), 1)
                              ]),
                              _: 2
                            }, 1032, ["color", "variant", "onClick"])
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                        ((_r = (_q = unref(v$).type.$errors) == null ? void 0 : _q[0]) == null ? void 0 : _r.$message) ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-sm mb-2 text-red-500"
                        }, toDisplayString(unref(v$).type.$errors[0].$message), 1)) : createCommentVNode("", true),
                        createVNode(_component_UCheckbox, {
                          modelValue: unref(form).is_default,
                          "onUpdate:modelValue": ($event) => unref(form).is_default = $event,
                          label: "Atur sebagai Alamat Pribadi",
                          ui: {
                            label: "text-black/55"
                          }
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "flex justify-end mt-6 gap-2 col-span-2" }, [
                        createVNode(_component_UButton, {
                          label: "Nanti Saja",
                          color: "gray",
                          class: "max-w-36",
                          variant: "link",
                          block: "",
                          onClick: handleCancel
                        }),
                        createVNode(_component_UButton, {
                          type: "submit",
                          label: "Ok",
                          class: "max-w-36",
                          block: "",
                          loading: unref(status) === "pending" || unref(statusEdit) === "pending"
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
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/feature/ProfileAddress/ModalMutation.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "address",
  __ssrInlineRender: true,
  setup(__props) {
    const openEditor = ref(false);
    const modalMutationElement = ref();
    const { data: addressList, status } = useApi("/server/api/address", {
      key: "address-list"
    });
    function handleChange(address) {
      modalMutationElement.value.setDefaultValue({
        uuid: address.uuid,
        is_default: address.is_default ? true : false,
        receiver_name: address.receiver_name,
        receiver_phone: address.receiver_phone,
        district: address.district,
        postal_code: address.postal_code,
        detail_address: address.detail_address,
        address_note: address.address_note,
        type: address.type,
        city: {
          uuid: address.city.uuid,
          name: address.city.name
        },
        province: {
          uuid: address.city.province.uuid,
          name: address.city.province.name
        }
      });
      openEditor.value = true;
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_UButton = __nuxt_component_5;
      const _component_USkeleton = __nuxt_component_6;
      const _component_FeatureProfileAddressCardItem = _sfc_main$3;
      const _component_FeatureProfileAddressModalMutation = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex justify-between gap-4 items-center"><h3 class="text-lg font-medium">Alamat Saya</h3>`);
      _push(ssrRenderComponent(_component_UButton, {
        icon: "i-heroicons:plus",
        onClick: ($event) => openEditor.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Tambah Alamat Baru`);
          } else {
            return [
              createTextVNode("Tambah Alamat Baru")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><hr class="mt-5 mb-3 border-gray-200/60"><h4 class="text-lg font-normal">Alamat</h4><div class="divide-y">`);
      if (unref(status) === "pending") {
        _push(`<div class="space-y-2 mt-4">`);
        _push(ssrRenderComponent(_component_USkeleton, { class: "h-4 w-[250px]" }, null, _parent));
        _push(ssrRenderComponent(_component_USkeleton, { class: "h-4 w-[200px]" }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList((_a = unref(addressList)) == null ? void 0 : _a.data, (address) => {
          _push(ssrRenderComponent(_component_FeatureProfileAddressCardItem, {
            key: address.uuid,
            item: address,
            onChange: handleChange
          }, null, _parent));
        });
        _push(`<!--]-->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_FeatureProfileAddressModalMutation, {
        ref_key: "modalMutationElement",
        ref: modalMutationElement,
        open: unref(openEditor),
        "onUpdate:open": ($event) => isRef(openEditor) ? openEditor.value = $event : null
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/my-account/address.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=address-C6-Jj9Yd.mjs.map
