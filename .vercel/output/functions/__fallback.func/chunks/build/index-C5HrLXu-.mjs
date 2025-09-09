import { _ as __nuxt_component_0 } from './FormGroup-DpovdzGZ.mjs';
import { ref, computed, unref, withCtx, createBlock, openBlock, toDisplayString, createVNode, mergeProps, createSlots, renderList, renderSlot, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { n as defu } from '../_/nitro.mjs';
import { _ as __nuxt_component_3 } from './Input-BSkwWT7v.mjs';
import { _ as _export_sfc, c as useSession, z as storeToRefs, b as __nuxt_component_5, E as __nuxt_component_2$1 } from './server.mjs';
import { _ as __nuxt_component_4 } from './RadioGroup-D5uGm8G7.mjs';
import { _ as _sfc_main$2 } from './DatePicker-BR1hZif8.mjs';
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
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
import 'tailwind-merge';
import './useFormGroup-B6xiYqr7.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './Radio-DPPbThYm.mjs';
import './Popover-GjsAgxql.mjs';
import './portal-RXXuCQxI.mjs';
import './focus-management-vHH7q6nP.mjs';
import './keyboard-Duq8EHr3.mjs';
import './use-outside-click-BHqYmLlt.mjs';
import './hidden-Dc_fFmis.mjs';
import './use-resolve-button-type-DOOP2SMg.mjs';
import './open-closed-CJlEqXqx.mjs';
import './usePopper-BrvKSG9Z.mjs';
import 'v-calendar';
import 'date-fns';
import './use-api-DLZ2CTc2.mjs';

const _sfc_main$1 = {
  __name: "FormGroup",
  __ssrInlineRender: true,
  props: {
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const defaultUi = {
      wrapper: "flex gap-11",
      container: "flex-1",
      label: {
        wrapper: "pt-3",
        base: "font-normal text-black/55 text-base w-24 text-right text-sm"
      }
    };
    const customUi = computed(() => defu(props.ui, defaultUi));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UFormGroup = __nuxt_component_0;
      _push(ssrRenderComponent(_component_UFormGroup, mergeProps({ ui: unref(customUi) }, _attrs), createSlots({ _: 2 }, [
        renderList(_ctx.$slots, (_, slotName) => {
          return {
            name: slotName,
            fn: withCtx((slotScope, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderSlot(_ctx.$slots, slotName, slotScope, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  renderSlot(_ctx.$slots, slotName, slotScope)
                ];
              }
            })
          };
        })
      ]), _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my-account/FormGroup.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const session = useSession();
    const { profile } = storeToRefs(session);
    const temporaryProfile = ref({
      ...JSON.parse(JSON.stringify(profile.value)),
      birth_date: profile.value.birth_date ? new Date(profile.value.birth_date) : null
    });
    const rules = {
      name: { required },
      username: { required },
      store_name: { required },
      gender: { required },
      photo_url: {},
      birth_date: { required }
    };
    const $externalResults = ref({});
    const v$ = useVuelidate(rules, temporaryProfile, {
      $autoDirty: true,
      $externalResults
    });
    const inputFileElement = ref();
    const imageProfile = computed(() => {
      if (temporaryProfile.value.photo_url && typeof temporaryProfile.value.photo_url !== "string")
        return (void 0).URL.createObjectURL(temporaryProfile.value.photo_url);
      return profile.value.photo_url;
    });
    function handleChooseFile() {
      inputFileElement.value.value = null;
      inputFileElement.value.click();
    }
    const { status } = useSubmit("/server/api/profile");
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
      const _component_MyAccountFormGroup = _sfc_main$1;
      const _component_UInput = __nuxt_component_3;
      const _component_UButton = __nuxt_component_5;
      const _component_URadioGroup = __nuxt_component_4;
      const _component_BaseDatePicker = _sfc_main$2;
      const _component_UAvatar = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-036554cf><h3 class="font-medium text-lg" data-v-036554cf>Profil Saya</h3><p class="text-sm text-black/65" data-v-036554cf> Kelola informasi profil Anda untuk mengontrol, melindungi dan mengamankan akun </p><hr class="mt-5 mb-8 border-gray-200/60" data-v-036554cf><div class="flex divide-x items-start" data-v-036554cf><form class="flex-1 pr-6 flex flex-col gap-8" data-v-036554cf>`);
      _push(ssrRenderComponent(_component_MyAccountFormGroup, {
        label: "Username",
        error: (_b = (_a = unref(v$).username.$errors) == null ? void 0 : _a[0]) == null ? void 0 : _b.$message
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(profile).username) {
              _push2(`<span class="profile-item-text" data-v-036554cf${_scopeId}>${ssrInterpolate(unref(profile).username || "-")}</span>`);
            } else {
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: unref(temporaryProfile).username,
                "onUpdate:modelValue": ($event) => unref(temporaryProfile).username = $event,
                class: "flex-1",
                size: "lg"
              }, null, _parent2, _scopeId));
            }
          } else {
            return [
              unref(profile).username ? (openBlock(), createBlock("span", {
                key: 0,
                class: "profile-item-text"
              }, toDisplayString(unref(profile).username || "-"), 1)) : (openBlock(), createBlock(_component_UInput, {
                key: 1,
                modelValue: unref(temporaryProfile).username,
                "onUpdate:modelValue": ($event) => unref(temporaryProfile).username = $event,
                class: "flex-1",
                size: "lg"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_MyAccountFormGroup, {
        label: "Nama",
        error: (_d = (_c = unref(v$).name.$errors) == null ? void 0 : _c[0]) == null ? void 0 : _d.$message
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: unref(temporaryProfile).name,
              "onUpdate:modelValue": ($event) => unref(temporaryProfile).name = $event,
              class: "flex-1",
              size: "lg"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UInput, {
                modelValue: unref(temporaryProfile).name,
                "onUpdate:modelValue": ($event) => unref(temporaryProfile).name = $event,
                class: "flex-1",
                size: "lg"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="profile-item" data-v-036554cf><p class="profile-item-title" data-v-036554cf>Email</p><div class="flex gap-2 items-center" data-v-036554cf><span class="profile-item-text" data-v-036554cf>${ssrInterpolate(unref(temporaryProfile).email || "-")}</span>`);
      _push(ssrRenderComponent(_component_UButton, {
        variant: "link",
        color: "blue",
        class: "underline",
        label: "Ubah",
        padded: false,
        to: "/my-account/profile/change-email"
      }, null, _parent));
      _push(`</div></div><div class="profile-item" data-v-036554cf><p class="profile-item-title" data-v-036554cf>Nomor Telepon</p><div class="flex gap-2 items-center" data-v-036554cf><span class="profile-item-text" data-v-036554cf>${ssrInterpolate(unref(temporaryProfile).phone || "-")}</span>`);
      _push(ssrRenderComponent(_component_UButton, {
        variant: "link",
        color: "blue",
        class: "underline",
        label: "Ubah",
        padded: false,
        to: "/my-account/profile/change-phone"
      }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_MyAccountFormGroup, {
        label: "Nama Toko",
        error: (_f = (_e = unref(v$).store_name.$errors) == null ? void 0 : _e[0]) == null ? void 0 : _f.$message
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: unref(temporaryProfile).store_name,
              "onUpdate:modelValue": ($event) => unref(temporaryProfile).store_name = $event,
              class: "flex-1",
              size: "lg"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UInput, {
                modelValue: unref(temporaryProfile).store_name,
                "onUpdate:modelValue": ($event) => unref(temporaryProfile).store_name = $event,
                class: "flex-1",
                size: "lg"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_MyAccountFormGroup, {
        label: "Jenis Kelamin",
        error: (_h = (_g = unref(v$).gender.$errors) == null ? void 0 : _g[0]) == null ? void 0 : _h.$message,
        ui: {
          label: {
            wrapper: "items-center"
          }
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_URadioGroup, {
              modelValue: unref(temporaryProfile).gender,
              "onUpdate:modelValue": ($event) => unref(temporaryProfile).gender = $event,
              options: ["Laki-Laki", "Perempuan", "Lainnya"],
              class: "flex-1",
              size: "lg",
              ui: {
                fieldset: "flex gap-3"
              }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_URadioGroup, {
                modelValue: unref(temporaryProfile).gender,
                "onUpdate:modelValue": ($event) => unref(temporaryProfile).gender = $event,
                options: ["Laki-Laki", "Perempuan", "Lainnya"],
                class: "flex-1",
                size: "lg",
                ui: {
                  fieldset: "flex gap-3"
                }
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_MyAccountFormGroup, {
        label: "Tanggal Lahir",
        error: (_j = (_i = unref(v$).birth_date.$errors) == null ? void 0 : _i[0]) == null ? void 0 : _j.$message
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseDatePicker, {
              modelValue: unref(temporaryProfile).birth_date,
              "onUpdate:modelValue": ($event) => unref(temporaryProfile).birth_date = $event
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseDatePicker, {
                modelValue: unref(temporaryProfile).birth_date,
                "onUpdate:modelValue": ($event) => unref(temporaryProfile).birth_date = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-4" data-v-036554cf>`);
      _push(ssrRenderComponent(_component_UButton, {
        type: "submit",
        loading: unref(status) === "pending",
        label: "Simpan"
      }, null, _parent));
      _push(`</div></form><div class="w-72 pl-6 flex flex-col items-center gap-5" data-v-036554cf>`);
      _push(ssrRenderComponent(_component_UAvatar, {
        src: unref(imageProfile),
        size: "3xl",
        alt: unref(temporaryProfile).name,
        icon: "i-heroicons-user",
        "img-class": "object-cover"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        label: "Pilih Gambar",
        color: "white",
        onClick: handleChooseFile
      }, null, _parent));
      _push(`<input type="file" accept=".jpeg,.png" class="hidden" data-v-036554cf><ul class="text-sm font-normal text-black/55" data-v-036554cf><li data-v-036554cf>Ukuran gambar: maks. 1 MB</li><li data-v-036554cf>Format gambar: .JPEG, .PNG</li></ul></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/my-account/profile/index.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-036554cf"]]);

export { index as default };
//# sourceMappingURL=index-C5HrLXu-.mjs.map
