import { f as __nuxt_component_3, b as __nuxt_component_5 } from './server.mjs';
import { mergeModels, useModel, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';

const _sfc_main = {
  __name: "Media",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    max: {
      type: Number,
      default: 1
    },
    type: {
      type: String,
      default: "image",
      validator: (propsValue) => ["video", "image"].includes(propsValue)
    },
    icon: {
      type: String,
      default: "i-heroicons:photo-solid"
    }
  }, {
    "modelValue": {
      type: Array,
      default: () => []
    },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const accept = {
      image: ".jpeg,.png",
      video: ".mp4"
    };
    const attachments = useModel(__props, "modelValue");
    const inputFileElement = ref();
    function handleChooseFile() {
      inputFileElement.value.value = null;
      inputFileElement.value.click();
    }
    function handleDelete(index) {
      attachments.value.splice(index, 1);
    }
    function generateImage(img) {
      if (typeof img === "string") return img;
      return (void 0).URL.createObjectURL(img);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = __nuxt_component_3;
      const _component_UButton = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-4 flex-wrap" }, _attrs))}>`);
      if (attachments.value.length < __props.max) {
        _push(`<!--[-->`);
        ssrRenderSlot(_ctx.$slots, "activator", { onChooseFile: handleChooseFile }, () => {
          _push(`<div role="button" class="rounded border-2 border-dashed p-3 flex items-center justify-center flex-col gap-1 w-20 h-20 text-primary">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: __props.icon,
            class: "w-6"
          }, null, _parent));
          _push(`<p class="text-center text-xs"> Tambahkan ${ssrInterpolate(__props.type === "image" ? "Foto" : "Video")} (${ssrInterpolate(attachments.value.length)}/${ssrInterpolate(__props.max)}) </p></div>`);
        }, _push, _parent);
        _push(`<input type="file"${ssrRenderAttr("accept", accept[__props.type])} class="hidden"><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(attachments.value, (media, indx) => {
        _push(`<div class="rounded border-2 w-20 h-20 relative group/photos flex items-center justify-center">`);
        if (__props.type === "image") {
          _push(`<img${ssrRenderAttr("src", generateImage(media))} class="w-full h-full object-cover rounded">`);
        } else {
          _push(`<!---->`);
        }
        if (__props.type === "video") {
          _push(`<video preload="metadata"><source${ssrRenderAttr("src", `${generateImage(media)}#t=0.1`)} type="video/mp4"></video>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="absolute bg-black/50 inset-0 items-center justify-center hidden group-hover/photos:flex">`);
        _push(ssrRenderComponent(_component_UButton, {
          icon: "i-heroicons:x-mark-20-solid",
          variant: "link",
          onClick: ($event) => handleDelete(indx)
        }, null, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/feature/Seller/Product/Media.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Media-UQZ5EApb.mjs.map
