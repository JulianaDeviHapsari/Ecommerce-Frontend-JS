import { mergeProps, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderVNode } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main$8 = {
  __name: "Item",
  __ssrInlineRender: true,
  props: {
    noLine: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    },
    passed: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    time: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    noLineLeft: {
      type: Boolean,
      default: false
    },
    noLineRight: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [
          "timeline-status",
          {
            active: __props.active,
            passed: __props.passed
          }
        ]
      }, _attrs))} data-v-d58ebb38><div class="timeline-status-header" data-v-d58ebb38><div class="timeline-status-icon" data-v-d58ebb38>`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.icon), null, null), _parent);
      _push(`</div>`);
      if (!__props.noLineLeft) {
        _push(`<div class="timeline-status-line-left" data-v-d58ebb38></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!__props.noLineRight) {
        _push(`<div class="timeline-status-line-right" data-v-d58ebb38></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div data-v-d58ebb38><p class="timeline-status-title" data-v-d58ebb38>${ssrInterpolate(__props.title)}</p><p class="timeline-status-time" data-v-d58ebb38>${ssrInterpolate(__props.time)}</p></div></div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/TimelineHorizontal/Item.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-d58ebb38"]]);
const _sfc_main$7 = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseTimelineHorizontalItem = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(__props.items, (item, index) => {
        _push(ssrRenderComponent(_component_BaseTimelineHorizontalItem, mergeProps({
          key: index,
          "no-line-left": !index,
          "no-line-right": index >= __props.items.length - 1
        }, { ref_for: true }, item), null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/TimelineHorizontal/index.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "Item",
  __ssrInlineRender: true,
  props: {
    noLine: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    time: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-3" }, _attrs))}><div class="relative"><div class="w-6 h-6 flex justify-center">`);
      if (!__props.noLine) {
        _push(`<div class="absolute inset-0 flex justify-center"><div class="bg-gray-300 w-[1px] h-full"></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([{
        "bg-gray-300": !__props.active,
        "bg-teal-500": __props.active
      }, "w-3 h-3 rounded-full relative"])}"></div></div></div><div class="flex gap-4 pb-2"><span class="text-sm">${ssrInterpolate(__props.time)}</span><span class="${ssrRenderClass([{
        "text-black/55": !__props.active,
        "text-teal-500": __props.active
      }, "flex-1"])}">${ssrInterpolate(__props.title)}</span></div></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/TimelineVertical/Item.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseTimelineVerticalItem = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(__props.items, (item, index) => {
        _push(ssrRenderComponent(_component_BaseTimelineVerticalItem, mergeProps({
          key: index,
          "no-line": index === __props.items.length - 1
        }, { ref_for: true }, item), null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/TimelineVertical/index.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M4.6875 3.1875V25.4063C4.6875 25.7813 4.96875 26.0625 5.34375 26.0625C5.53125 26.0625 5.625 26.0625 5.625 25.875C6.09375 25.5 6.5625 25.4063 7.21875 25.4063C8.0625 25.4063 8.8125 25.7813 9.28125 26.4375C9.46875 26.625 9.5625 26.8125 9.75 26.8125C9.9375 26.8125 10.0312 26.625 10.2187 26.4375C10.6875 25.7813 11.5313 25.4063 12.2813 25.4063C13.0313 25.4063 13.875 25.7813 14.3438 26.4375C14.5313 26.625 14.625 26.8125 14.8125 26.8125C15 26.8125 15.0937 26.625 15.2812 26.4375C15.75 25.7813 16.5937 25.4063 17.3438 25.4063C18.1875 25.4063 18.9375 25.7813 19.4063 26.4375C19.5938 26.625 19.6875 26.8125 19.875 26.8125C20.0625 26.8125 20.1563 26.625 20.3438 26.4375C20.8125 25.7813 21.6562 25.4063 22.4062 25.4063C23.0625 25.4063 23.5313 25.5938 24 25.875C24.1875 26.0625 24.2812 26.0625 24.2812 26.0625C24.5625 26.0625 24.9375 25.6875 24.9375 25.4063V3.1875H4.6875Z" stroke="currentColor" stroke-width="2.8125" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.375 10.7812H20.625" stroke="currentColor" stroke-width="2.8125" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M9.375 17.3438H20.625" stroke="currentColor" stroke-width="2.8125" stroke-miterlimit="10" stroke-linecap="round"></path></svg>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon/Order.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const IconOrder = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "31",
    height: "30",
    viewBox: "0 0 31 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M22.75 20.625H3.0625C2.59375 20.625 2.125 20.1562 2.125 19.6875V5.625C2.125 5.0625 2.59375 4.6875 3.0625 4.6875H22.75C23.2188 4.6875 23.6875 5.0625 23.6875 5.625V19.6875C23.6875 20.1562 23.2188 20.625 22.75 20.625Z" stroke="currentColor" stroke-width="2.8125" stroke-miterlimit="10"></path><path d="M23.5 9.375H27.4375C27.9062 9.375 28.375 9.75 28.375 10.3125V24.375C28.375 24.8438 27.9062 25.3125 27.4375 25.3125H7.75C7.1875 25.3125 6.8125 24.9375 6.8125 24.375V20.625" stroke="currentColor" stroke-width="2.8125" stroke-miterlimit="10"></path><path d="M12.3437 16.125C11.6875 16.0312 10.9375 15.75 10.375 15.2812L11.125 14.1562C11.6875 14.625 12.1563 14.8125 12.7188 14.8125C13.375 14.8125 13.6563 14.5312 13.6563 14.0625C13.6563 12.9375 10.6563 12.9375 10.6563 10.875C10.6563 9.75 11.3125 9 12.3437 8.8125V7.59375H13.4688V8.71875C14.2188 8.8125 14.6875 9.1875 15.1562 9.65625L14.3125 10.5937C13.9375 10.2187 13.5625 10.0312 13.0937 10.0312C12.5312 10.0312 12.25 10.2187 12.25 10.7812C12.25 11.8125 15.25 11.7188 15.25 13.875C15.25 15 14.6875 15.75 13.4688 16.0312V17.1562H12.3437V16.125Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon/Paid.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const IconPaid = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "31",
    height: "30",
    viewBox: "0 0 31 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M17.4688 19.2188H9.5" stroke="currentColor" stroke-width="2.8125" stroke-miterlimit="10" stroke-linejoin="round"></path><path d="M7.53125 25.7812C9.60232 25.7812 11.2812 24.1023 11.2812 22.0312C11.2812 19.9602 9.60232 18.2812 7.53125 18.2812C5.46018 18.2812 3.78125 19.9602 3.78125 22.0312C3.78125 24.1023 5.46018 25.7812 7.53125 25.7812Z" stroke="currentColor" stroke-width="2.8125" stroke-miterlimit="10"></path><path d="M19.7188 25.7812C21.7898 25.7812 23.4688 24.1023 23.4688 22.0312C23.4688 19.9602 21.7898 18.2812 19.7188 18.2812C17.6477 18.2812 15.9688 19.9602 15.9688 22.0312C15.9688 24.1023 17.6477 25.7812 19.7188 25.7812Z" stroke="currentColor" stroke-width="2.8125" stroke-miterlimit="10"></path><path d="M18.9688 14.5312H28.625" stroke="currentColor" stroke-width="2.8125" stroke-miterlimit="10"></path><path d="M4.8125 19.2188H1.90625V4.21875H19.7188V17.25" stroke="currentColor" stroke-width="2.8125" stroke-miterlimit="10" stroke-linejoin="round"></path><path d="M19.7188 8.4375H28.1562L29.0938 20.625H23.6563" stroke="currentColor" stroke-width="2.8125" stroke-miterlimit="10" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon/TruckOutline.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const IconTruckOutline = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "31",
    height: "30",
    viewBox: "0 0 31 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M2.625 26.25V18H10.6875L11.7187 20.1562H19.3125L20.3437 18L28.875 17.9062V26.25H2.625Z" stroke="currentColor" stroke-width="2.8125" stroke-miterlimit="10" stroke-linejoin="round"></path><path d="M20.4375 7.5H26.0625L28.875 17.9062" stroke="currentColor" stroke-width="2.8125" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.625 18L5.4375 7.5H11.0625" stroke="currentColor" stroke-width="2.8125" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.75 3.75V13.125" stroke="currentColor" stroke-width="2.8125" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.5926 12.5625L16.2176 15.9375C15.9364 16.2187 15.5614 16.2187 15.3739 15.9375L11.9989 12.5625C11.6239 12.1875 11.9051 11.5312 12.4676 11.5312H19.2176C19.6864 11.5312 19.9676 12.1875 19.5926 12.5625Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon/Inbox.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const IconInbox = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M15 3L18.9375 11.1562L27.6562 12.1875L20.8125 17.8125L22.7812 27L15 22.3125L7.21875 27L9.1875 17.8125L2.34375 12.1875L11.0625 11.1562L15 3Z" stroke="currentColor" stroke-width="2.8125" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon/Stars.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const IconStars = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { IconOrder as I, _sfc_main$7 as _, IconPaid as a, IconTruckOutline as b, IconInbox as c, IconStars as d, _sfc_main$5 as e };
//# sourceMappingURL=Stars-dPGuNgZK.mjs.map
