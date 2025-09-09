import { _ as _sfc_main$1 } from './NuxtImg-DLumQ5km.mjs';
import { computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { f as formatNumber } from './number.utils-vPnlR88w.mjs';

const _sfc_main = {
  __name: "CardProduct",
  __ssrInlineRender: true,
  props: {
    hidePrice: {
      type: Boolean,
      default: false
    },
    hideDescription: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "lg",
      validator: (propsValue) => ["sm", "lg"].includes(propsValue)
    },
    item: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const sizeClasse = {
      sm: {
        image: "h-14 w-14",
        title: "text-sm"
      },
      lg: {
        image: "h-20 w-20",
        title: "text-base"
      }
    };
    const variantName = computed(
      () => {
        var _a, _b;
        return (_b = ((_a = props.item) == null ? void 0 : _a.variations) || []) == null ? void 0 : _b.map((variant) => variant.value).join(", ");
      }
    );
    const totalPrice = computed(() => {
      var _a;
      return formatNumber(((_a = props.item) == null ? void 0 : _a.total) || 0);
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      const _component_NuxtImg = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-3" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: (_b = (_a = __props.item) == null ? void 0 : _a.product) == null ? void 0 : _b.image_url,
        class: ["aspect-[1/1] object-cover", (_c = sizeClasse[__props.size]) == null ? void 0 : _c.image],
        format: "webp"
      }, null, _parent));
      _push(`<div class="flex-1"><p class="${ssrRenderClass([(_d = sizeClasse[__props.size]) == null ? void 0 : _d.title, "line-clamp-2"])}">${ssrInterpolate((_e = __props.item.product) == null ? void 0 : _e.name)}</p>`);
      if (!__props.hideDescription) {
        _push(`<!--[--><p class="text-sm text-black/55">Variasi: ${ssrInterpolate(unref(variantName))}</p><p class="text-sm">x${ssrInterpolate((_f = __props.item) == null ? void 0 : _f.qty)}</p><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (!__props.hidePrice) {
        _push(`<div class="flex items-center">Rp${ssrInterpolate(unref(totalPrice))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/feature/ProfileOrder/CardProduct.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=CardProduct-DviFAC0z.mjs.map
