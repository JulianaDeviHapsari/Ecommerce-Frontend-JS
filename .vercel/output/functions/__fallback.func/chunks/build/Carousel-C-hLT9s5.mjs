import { _ as __nuxt_component_0 } from './Carousel-BL-Tk4PX.mjs';
import { toRefs, ref, unref, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  __name: "Carousel",
  __ssrInlineRender: true,
  props: {
    items: {
      type: Array,
      default: () => [
        "https://picsum.photos/1920/1080?random=1",
        "https://picsum.photos/1920/1080?random=2",
        "https://picsum.photos/1920/1080?random=3"
      ]
    },
    width: {
      type: String,
      default: "unset"
    },
    height: {
      type: String,
      default: "unset"
    },
    aspectRatio: {
      type: String,
      default: "1/1"
    }
  },
  setup(__props) {
    const props = __props;
    const { width, height, aspectRatio } = toRefs(props);
    const carouselRef = ref();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCarousel = __nuxt_component_0;
      const _cssVars = { style: {
        ":--2c40032e": unref(width),
        ":--3850d4e4": unref(height),
        ":--4636ccf6": unref(aspectRatio)
      } };
      _push(ssrRenderComponent(_component_UCarousel, mergeProps({
        ref_key: "carouselRef",
        ref: carouselRef,
        items: __props.items,
        ui: { item: "basis-full" },
        class: "base-carousel",
        indicators: ""
      }, _attrs, _cssVars), {
        default: withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", item)} class="w-full h-full object-cover" draggable="false" data-v-ea46987a${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: item,
                class: "w-full h-full object-cover",
                draggable: "false"
              }, null, 8, ["src"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Carousel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ea46987a"]]);

export { __nuxt_component_6 as _ };
//# sourceMappingURL=Carousel-C-hLT9s5.mjs.map
