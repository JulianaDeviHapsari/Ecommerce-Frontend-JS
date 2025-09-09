import { _ as __nuxt_component_3 } from './Modal-DiMSs998.mjs';
import { _ as __nuxt_component_5 } from './Card-DbWg7JF8.mjs';
import { useModel, ref, mergeProps, withCtx, unref, mergeModels, createTextVNode, createVNode, createBlock, openBlock, Fragment, renderList, computed, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttrs, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { c as useSession, l as useToast, j as useAsyncData, b as __nuxt_component_5$1, _ as _export_sfc } from './server.mjs';
import { _ as _sfc_main$3 } from './CardProduct-DviFAC0z.mjs';
import { _ as _sfc_main$4 } from './Rating-CzUxWdt7.mjs';
import { _ as __nuxt_component_0$1 } from './FormGroup-DpovdzGZ.mjs';
import { _ as __nuxt_component_5$2 } from './Textarea-nJripv25.mjs';
import { _ as _sfc_main$5 } from './Media-UQZ5EApb.mjs';
import { _ as __nuxt_component_3$1 } from './Checkbox-Cf2pHysF.mjs';
import useVuelidate from '@vuelidate/core';
import { minLength, minValue, required } from '@vuelidate/validators';
import { u as useMasking } from './use-masking-DZFcOT6B.mjs';

const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "20",
    height: "21",
    viewBox: "0 0 20 21",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M9.99948 20.6767C15.4487 20.6767 19.8661 16.2592 19.8661 10.81C19.8661 5.36082 15.4487 0.943359 9.99948 0.943359C4.55027 0.943359 0.132812 5.36082 0.132812 10.81C0.132812 16.2592 4.55027 20.6767 9.99948 20.6767Z" fill="url(#paint0_linear_7_4351)"></path><path d="M9.99948 1.34336C15.1995 1.34336 19.4661 5.61003 19.4661 10.81C19.4661 16.01 15.1995 20.2767 9.99948 20.2767C4.79948 20.2767 0.532813 16.01 0.532813 10.81C0.532813 5.61003 4.79948 1.34336 9.99948 1.34336ZM9.99948 0.943359C4.53281 0.943359 0.132812 5.34336 0.132812 10.81C0.132812 16.2767 4.53281 20.6767 9.99948 20.6767C15.4661 20.6767 19.8661 16.2767 19.8661 10.81C19.8661 5.34336 15.4661 0.943359 9.99948 0.943359Z" fill="url(#paint1_linear_7_4351)"></path><path d="M19.1988 11.076C19.1988 10.9427 19.1988 10.9427 19.1988 10.8094C19.1988 5.74271 15.0655 1.60938 9.99883 1.60938C4.93216 1.60938 0.798828 5.74271 0.798828 10.8094V11.076C0.932161 6.14271 4.93216 2.14271 9.99883 2.14271C15.0655 2.14271 19.0655 6.14271 19.1988 11.076Z" fill="#FFF5C9"></path><path d="M10.0003 17.8775C13.9031 17.8775 17.0669 14.7136 17.0669 10.8108C17.0669 6.908 13.9031 3.74414 10.0003 3.74414C6.09745 3.74414 2.93359 6.908 2.93359 10.8108C2.93359 14.7136 6.09745 17.8775 10.0003 17.8775Z" fill="url(#paint2_linear_7_4351)"></path><path d="M15.1987 6.14258C16.6654 7.47591 17.5987 9.34258 17.5987 11.3426C17.5987 15.2092 14.3987 18.4092 10.532 18.4092C8.3987 18.4092 6.53203 17.4759 5.33203 16.0092C6.53203 17.0759 8.26536 17.8759 9.9987 17.8759C13.8654 17.8759 17.0654 14.6759 17.0654 10.8092C17.0654 8.94258 16.3987 7.34258 15.1987 6.14258Z" fill="#FFEEAD"></path><path d="M15.2003 6.14414C13.8669 4.67747 12.0003 3.74414 10.0003 3.74414C6.13359 3.74414 2.93359 6.94414 2.93359 10.8108C2.93359 12.9441 3.86693 14.8108 5.33359 16.0108C4.26693 14.8108 3.46693 13.0775 3.46693 11.3441C3.46693 7.47747 6.66693 4.27747 10.5336 4.27747C12.4003 4.27747 14.0003 4.94414 15.2003 6.14414Z" fill="#C97201"></path><path d="M8.26695 7.20955C7.60028 7.74289 7.46695 8.67622 7.60028 9.47622C7.73361 10.1429 8.26695 10.8096 9.06695 11.2096C10.0003 11.7429 12.2669 12.2762 12.2669 13.4762C12.2669 13.7429 12.1336 14.1429 12.0003 14.2762C11.6003 14.8096 10.9336 14.9429 10.2669 14.9429C9.86695 14.9429 9.33361 14.8096 8.93361 14.6762C8.53361 14.5429 8.13361 14.2762 7.73361 14.0096C7.46695 13.8762 7.20028 14.0096 7.06695 14.1429C6.93361 14.4096 7.06695 14.6762 7.20028 14.8096C7.86695 15.3429 8.53361 15.7429 9.46695 15.8762C10.2669 16.0096 11.2003 16.0096 11.8669 15.6096C12.5336 15.3429 13.0669 14.8096 13.2003 14.0096C13.3336 13.2096 13.0669 12.4096 12.5336 11.8762C11.8669 11.2096 9.86695 10.5429 9.33361 10.1429C8.93361 9.87622 8.53361 9.47622 8.53361 8.80955C8.66695 8.00955 9.20028 7.60955 10.0003 7.60955C10.6669 7.60955 11.4669 7.74289 12.1336 8.14289C12.6669 8.54289 13.2003 7.60955 12.6669 7.20955C11.3336 6.40955 9.33361 6.27622 8.26695 7.20955Z" fill="#C67830"></path><path d="M8.13218 6.80916C7.46551 7.3425 7.33218 8.27583 7.46551 9.07583C7.59885 9.7425 8.13218 10.4092 8.93218 10.8092C9.86551 11.3425 12.1322 11.8758 12.1322 13.0758C12.1322 13.3425 11.9988 13.7425 11.8655 13.8758C11.4655 14.4092 10.7988 14.5425 10.1322 14.5425C9.73218 14.5425 9.19885 14.4092 8.79885 14.2758C8.39885 14.1425 7.99885 13.8758 7.59885 13.6092C7.33218 13.4758 7.06551 13.6092 6.93218 13.7425C6.79885 14.0092 6.93218 14.2758 7.06552 14.4092C7.73218 14.9425 8.39885 15.3425 9.33218 15.4758C10.1322 15.6092 11.0655 15.6092 11.7322 15.2092C12.3988 14.9425 12.9322 14.4092 13.0655 13.6092C13.1988 12.8092 12.7988 12.0092 12.2655 11.4758C11.5988 10.8092 9.73218 10.1425 9.19885 9.7425C8.79885 9.47583 8.39885 9.07583 8.39885 8.40916C8.53218 7.60916 9.06552 7.20916 9.86552 7.20916C10.5322 7.20916 11.3322 7.34249 11.9988 7.74249C12.5322 8.14249 13.0655 7.20916 12.5322 6.80916C11.1988 6.00916 9.19885 5.87583 8.13218 6.80916Z" fill="url(#paint3_linear_7_4351)"></path><defs><linearGradient id="paint0_linear_7_4351" x1="3.95868" y1="3.07816" x2="16.0591" y2="18.566" gradientUnits="userSpaceOnUse"><stop stop-color="#F6C430"></stop><stop offset="0.5281" stop-color="#FFECAA"></stop><stop offset="0.6639" stop-color="#FDDE82"></stop><stop offset="0.9673" stop-color="#F7BC1E"></stop><stop offset="1" stop-color="#F6B813"></stop></linearGradient><linearGradient id="paint1_linear_7_4351" x1="9.99948" y1="0.998959" x2="9.99948" y2="20.6526" gradientUnits="userSpaceOnUse"><stop stop-color="#E49B00"></stop><stop offset="0.9416" stop-color="#D67B00"></stop><stop offset="1" stop-color="#D57900"></stop></linearGradient><linearGradient id="paint2_linear_7_4351" x1="5.45786" y1="5.39734" x2="14.5427" y2="16.2244" gradientUnits="userSpaceOnUse"><stop stop-color="#F99D00"></stop><stop offset="0.1752" stop-color="#EEA10B"></stop><stop offset="0.5066" stop-color="#FCD21F"></stop><stop offset="0.6657" stop-color="#F2BA10"></stop><stop offset="1" stop-color="#D57900"></stop></linearGradient><linearGradient id="paint3_linear_7_4351" x1="7.22605" y1="7.5329" x2="12.9827" y2="14.3932" gradientUnits="userSpaceOnUse"><stop stop-color="#FFEC88"></stop><stop offset="0.5003" stop-color="#FDF4CB"></stop><stop offset="0.7556" stop-color="#FCEBA4"></stop><stop offset="1" stop-color="#FAE17A"></stop></linearGradient></defs></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon/CoinSolid.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "Item",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    item: {
      type: Object,
      default: () => ({})
    }
  }, {
    "modelValue": {
      type: Object,
      default: () => ({
        rating: 0,
        courierRating: 0,
        description: "",
        photo: [],
        video: [],
        showUsername: false
      })
    },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const formRating = useModel(__props, "modelValue");
    const rules = {
      rating: { minValue: minValue(1), required },
      courierRating: { minValue: minValue(1), required },
      description: { minLength: minLength(50), required },
      photo: {},
      video: {}
    };
    const v$ = useVuelidate(rules, formRating, {
      $autoDirty: true,
      $scope: "review"
    });
    const { maskText } = useMasking();
    const session = useSession();
    const captionReviewUsername = computed(
      () => `Username yang akan ditampilkan adalah ${maskText(
        session.profile.username,
        1,
        1
      )}`
    );
    const reviewMessages = [
      "Sangat Buruk",
      "Buruk",
      "Biasa",
      "Baik",
      "Sangat Baik"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_IconCoinSolid = __nuxt_component_0;
      const _component_FeatureProfileOrderCardProduct = _sfc_main$3;
      const _component_BaseRating = _sfc_main$4;
      const _component_UFormGroup = __nuxt_component_0$1;
      const _component_UTextarea = __nuxt_component_5$2;
      const _component_FeatureSellerProductMedia = _sfc_main$5;
      const _component_UButton = __nuxt_component_5$1;
      const _component_UCheckbox = __nuxt_component_3$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-5 mt-8" }, _attrs))}><div class="border border-yellow-500 bg-yellow-50 rounded-sm py-2 px-3 flex gap-2">`);
      _push(ssrRenderComponent(_component_IconCoinSolid, null, null, _parent));
      _push(`<span class="font-medium">Beri penilaian &amp; dapatkan 25 Koin!</span></div>`);
      _push(ssrRenderComponent(_component_FeatureProfileOrderCardProduct, {
        "hide-price": "",
        "hide-description": "",
        size: "sm",
        item: __props.item
      }, null, _parent));
      _push(`<div class="flex gap-2 items-center"><span class="w-44">Kualitas Produk</span>`);
      _push(ssrRenderComponent(_component_BaseRating, {
        modelValue: formRating.value.rating,
        "onUpdate:modelValue": ($event) => formRating.value.rating = $event,
        size: "lg",
        color: "yellow"
      }, null, _parent));
      _push(`<span class="${ssrRenderClass({
        "text-yellow-500": formRating.value.rating > 3,
        "text-black/55": formRating.value.rating <= 3
      })}">${ssrInterpolate(reviewMessages[formRating.value.rating - 1])}</span></div>`);
      if (formRating.value.rating) {
        _push(`<div><div class="bg-gray-100 px-6 py-3 rounded-sm space-y-3">`);
        _push(ssrRenderComponent(_component_UFormGroup, {
          error: (_b = (_a = unref(v$).description.$errors) == null ? void 0 : _a[0]) == null ? void 0 : _b.$message
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UTextarea, {
                modelValue: formRating.value.description,
                "onUpdate:modelValue": ($event) => formRating.value.description = $event,
                placeholder: "Bagikan penilaianmu tentang produk ini untuk membantu Pembeli lain."
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UTextarea, {
                  modelValue: formRating.value.description,
                  "onUpdate:modelValue": ($event) => formRating.value.description = $event,
                  placeholder: "Bagikan penilaianmu tentang produk ini untuk membantu Pembeli lain."
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="flex gap-2 items-start">`);
        _push(ssrRenderComponent(_component_FeatureSellerProductMedia, {
          modelValue: formRating.value.photo,
          "onUpdate:modelValue": ($event) => formRating.value.photo = $event,
          max: 2,
          class: "items-start !gap-2 flex-row-reverse"
        }, {
          activator: withCtx(({ onChooseFile }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UButton, {
                size: "xs",
                variant: "soft",
                icon: "i-heroicons:camera-solid",
                label: "Tambah Foto",
                onClick: onChooseFile
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UButton, {
                  size: "xs",
                  variant: "soft",
                  icon: "i-heroicons:camera-solid",
                  label: "Tambah Foto",
                  onClick: onChooseFile
                }, null, 8, ["onClick"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_FeatureSellerProductMedia, {
          modelValue: formRating.value.video,
          "onUpdate:modelValue": ($event) => formRating.value.video = $event,
          max: 1,
          class: "items-start !gap-2 flex-row-reverse",
          type: "video"
        }, {
          activator: withCtx(({ onChooseFile }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UButton, {
                size: "xs",
                variant: "soft",
                icon: "i-heroicons:video-camera-solid",
                label: "Tambahkan video",
                onClick: onChooseFile
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UButton, {
                  size: "xs",
                  variant: "soft",
                  icon: "i-heroicons:video-camera-solid",
                  label: "Tambahkan video",
                  onClick: onChooseFile
                }, null, 8, ["onClick"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><p class="text-right text-black/55"> Tambahkan 50 karakter dengan 1 foto untuk mendapatkan 25 Koin! </p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_UCheckbox, {
        modelValue: formRating.value.showUsername,
        "onUpdate:modelValue": ($event) => formRating.value.showUsername = $event,
        label: "Tampilkan username pada penilaian",
        help: unref(captionReviewUsername)
      }, null, _parent));
      _push(`<div class="space-y-4"><p class="text-base">Tentang Layanan</p><div class="flex gap-2 items-center"><span class="w-44">Kecepatan Jasa Kirim</span>`);
      _push(ssrRenderComponent(_component_BaseRating, {
        modelValue: formRating.value.courierRating,
        "onUpdate:modelValue": ($event) => formRating.value.courierRating = $event,
        size: "lg",
        color: "yellow"
      }, null, _parent));
      _push(`<span class="${ssrRenderClass({
        "text-yellow-500": formRating.value.courierRating > 3,
        "text-black/55": formRating.value.courierRating <= 3
      })}">${ssrInterpolate(reviewMessages[formRating.value.courierRating - 1])}</span></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modal/Review/Item.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Review",
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
    const session = useSession();
    const toast = useToast();
    const isOpen = useModel(__props, "open");
    const order = ref({});
    const form = ref([
      {
        uuid: "",
        rating: 0,
        courierRating: 0,
        description: "",
        photo: [],
        video: [],
        showUsername: false
      }
    ]);
    const v$ = useVuelidate({}, form, {
      $scope: "review"
    });
    function setDefaultData(newOrder) {
      var _a;
      if (newOrder && typeof newOrder === "object") {
        order.value = newOrder;
        form.value = (_a = order.value.items) == null ? void 0 : _a.map((item) => ({
          uuid: item.uuid,
          rating: 0,
          courierRating: 0,
          description: "",
          photo: [],
          video: [],
          showUsername: false
        }));
      }
    }
    function onClose() {
      form.value = [
        {
          uuid: "",
          rating: 0,
          courierRating: 0,
          description: "",
          photo: [],
          video: [],
          showUsername: false
        }
      ];
      v$.value.$reset();
      isOpen.value = false;
    }
    const { execute, status, error } = useAsyncData(
      () => Promise.all(form.value.map((item) => submitReview(item))),
      {
        immediate: false
      },
      "$CLkXrspHra"
    );
    async function onSubmit() {
      var _a, _b, _c;
      const isValid = await v$.value.$validate();
      if (!isValid) {
        toast.add({
          color: "red",
          title: (_c = (_b = (_a = v$.value.$errors) == null ? void 0 : _a[0]) == null ? void 0 : _b.$message) == null ? void 0 : _c.replace("value", "rating")
        });
        return;
      }
      await execute();
      if (error.value) return;
      emit("success");
      onClose();
    }
    async function submitReview(item) {
      const formData = new FormData();
      formData.append("order_item_uuid", item == null ? void 0 : item.uuid);
      formData.append("star_seller", item.rating);
      formData.append("star_courier", item.courierRating);
      formData.append("description", item.description);
      item.photo.forEach((item2) => {
        formData.append("attachments[]", item2);
      });
      item.video.forEach((item2) => {
        formData.append("attachments[]", item2);
      });
      formData.append("show_username", item.showUsername ? 1 : 0);
      return $fetch("/server/api/order/review/add", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${session.token}`
        },
        onResponseError({ response }) {
          var _a, _b;
          if ((_b = (_a = response._data.meta) == null ? void 0 : _a.messages) == null ? void 0 : _b[0]) {
            toast.add({
              color: "red",
              title: response._data.meta.messages[0]
            });
          }
        },
        retry: false
      });
    }
    __expose({
      setDefaultData
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UModal = __nuxt_component_3;
      const _component_UCard = __nuxt_component_5;
      const _component_ModalReviewItem = _sfc_main$1;
      const _component_UButton = __nuxt_component_5$1;
      _push(ssrRenderComponent(_component_UModal, mergeProps({
        modelValue: isOpen.value,
        "onUpdate:modelValue": ($event) => isOpen.value = $event,
        "prevent-close": ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, { class: "text-black/85 text-sm" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(`<p class="text-xl font-normal"${_scopeId2}>Nilai Produk</p><!--[-->`);
                  ssrRenderList((_a = unref(order)) == null ? void 0 : _a.items, (item, index) => {
                    _push3(ssrRenderComponent(_component_ModalReviewItem, {
                      key: item.uuid,
                      modelValue: unref(form)[index],
                      "onUpdate:modelValue": ($event) => unref(form)[index] = $event,
                      item
                    }, null, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--><div class="flex justify-end gap-2 pt-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    class: "min-w-36 justify-center",
                    variant: "link",
                    color: "gray",
                    disabled: unref(status) === "pending",
                    onClick: onClose
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Nanti Saja `);
                      } else {
                        return [
                          createTextVNode(" Nanti Saja ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    class: "min-w-36 justify-center",
                    loading: unref(status) === "pending",
                    onClick: onSubmit
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Ok `);
                      } else {
                        return [
                          createTextVNode(" Ok ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("p", { class: "text-xl font-normal" }, "Nilai Produk"),
                    (openBlock(true), createBlock(Fragment, null, renderList((_b = unref(order)) == null ? void 0 : _b.items, (item, index) => {
                      return openBlock(), createBlock(_component_ModalReviewItem, {
                        key: item.uuid,
                        modelValue: unref(form)[index],
                        "onUpdate:modelValue": ($event) => unref(form)[index] = $event,
                        item
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "item"]);
                    }), 128)),
                    createVNode("div", { class: "flex justify-end gap-2 pt-6" }, [
                      createVNode(_component_UButton, {
                        class: "min-w-36 justify-center",
                        variant: "link",
                        color: "gray",
                        disabled: unref(status) === "pending",
                        onClick: onClose
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Nanti Saja ")
                        ]),
                        _: 1
                      }, 8, ["disabled"]),
                      createVNode(_component_UButton, {
                        class: "min-w-36 justify-center",
                        loading: unref(status) === "pending",
                        onClick: onSubmit
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Ok ")
                        ]),
                        _: 1
                      }, 8, ["loading"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, { class: "text-black/85 text-sm" }, {
                default: withCtx(() => {
                  var _a;
                  return [
                    createVNode("p", { class: "text-xl font-normal" }, "Nilai Produk"),
                    (openBlock(true), createBlock(Fragment, null, renderList((_a = unref(order)) == null ? void 0 : _a.items, (item, index) => {
                      return openBlock(), createBlock(_component_ModalReviewItem, {
                        key: item.uuid,
                        modelValue: unref(form)[index],
                        "onUpdate:modelValue": ($event) => unref(form)[index] = $event,
                        item
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "item"]);
                    }), 128)),
                    createVNode("div", { class: "flex justify-end gap-2 pt-6" }, [
                      createVNode(_component_UButton, {
                        class: "min-w-36 justify-center",
                        variant: "link",
                        color: "gray",
                        disabled: unref(status) === "pending",
                        onClick: onClose
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Nanti Saja ")
                        ]),
                        _: 1
                      }, 8, ["disabled"]),
                      createVNode(_component_UButton, {
                        class: "min-w-36 justify-center",
                        loading: unref(status) === "pending",
                        onClick: onSubmit
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Ok ")
                        ]),
                        _: 1
                      }, 8, ["loading"])
                    ])
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modal/Review.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Review-BxDTaZFi.mjs.map
