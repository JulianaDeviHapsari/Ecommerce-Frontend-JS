import { _ as _export_sfc, f as __nuxt_component_3, E as __nuxt_component_2$1, m as mergeConfig, g as useUI, t as twMerge, c as useSession, d as useNuxtApp, D as useCookie, y as navigateTo, h as appConfig } from './server.mjs';
import { defineComponent, mergeProps, toRef, computed, ref, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { twJoin } from 'tailwind-merge';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderSlot, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as __nuxt_component_3$1 } from './client-only-BTi8mZAI.mjs';
import { _ as __nuxt_component_3$2 } from './Modal-DiMSs998.mjs';
import { _ as __nuxt_component_5$1 } from './Card-DbWg7JF8.mjs';
import { _ as __nuxt_component_5$2 } from './Loading-DEfyuitU.mjs';
import { u as useSubmit } from './use-submit-TWB9IMR2.mjs';
import { u as useApi } from './use-api-DLZ2CTc2.mjs';

const divider = {
  wrapper: {
    base: "flex items-center align-center text-center",
    horizontal: "w-full flex-row",
    vertical: "flex-col"
  },
  container: {
    base: "font-medium text-gray-700 dark:text-gray-200 flex",
    horizontal: "mx-3 whitespace-nowrap",
    vertical: "my-2"
  },
  border: {
    base: "flex border-gray-200 dark:border-gray-800",
    horizontal: "w-full",
    vertical: "h-full",
    size: {
      horizontal: {
        "2xs": "border-t",
        "xs": "border-t-[2px]",
        "sm": "border-t-[3px]",
        "md": "border-t-[4px]",
        "lg": "border-t-[5px]",
        "xl": "border-t-[6px]"
      },
      vertical: {
        "2xs": "border-s",
        "xs": "border-s-[2px]",
        "sm": "border-s-[3px]",
        "md": "border-s-[4px]",
        "lg": "border-s-[5px]",
        "xl": "border-s-[6px]"
      }
    },
    type: {
      solid: "border-solid",
      dotted: "border-dotted",
      dashed: "border-dashed"
    }
  },
  icon: {
    base: "flex-shrink-0 w-5 h-5"
  },
  avatar: {
    base: "flex-shrink-0",
    size: "2xs"
  },
  label: "text-sm",
  default: {
    size: "2xs",
    type: "solid"
  }
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.divider, divider);
const _sfc_main$1 = defineComponent({
  components: {
    UIcon: __nuxt_component_3,
    UAvatar: __nuxt_component_2$1
  },
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    avatar: {
      type: Object,
      default: null
    },
    size: {
      type: String,
      default: () => config.default.size,
      validator(value) {
        return Object.keys(config.border.size.horizontal).includes(value) || Object.keys(config.border.size.vertical).includes(value);
      }
    },
    orientation: {
      type: String,
      default: "horizontal",
      validator: (value) => ["horizontal", "vertical"].includes(value)
    },
    type: {
      type: String,
      default: () => config.default.type,
      validator: (value) => ["solid", "dotted", "dashed"].includes(value)
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("divider", toRef(props, "ui"), config);
    const wrapperClass = computed(() => {
      return twMerge(twJoin(
        ui.value.wrapper.base,
        ui.value.wrapper[props.orientation]
      ), props.class);
    });
    const containerClass = computed(() => {
      return twJoin(
        ui.value.container.base,
        ui.value.container[props.orientation]
      );
    });
    const borderClass = computed(() => {
      return twJoin(
        ui.value.border.base,
        ui.value.border[props.orientation],
        ui.value.border.size[props.orientation][props.size],
        ui.value.border.type[props.type]
      );
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      wrapperClass,
      containerClass,
      borderClass
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_3;
  const _component_UAvatar = __nuxt_component_2$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: _ctx.wrapperClass }, _ctx.attrs, _attrs))}><div class="${ssrRenderClass(_ctx.borderClass)}"></div>`);
  if (_ctx.label || _ctx.icon || _ctx.avatar || _ctx.$slots.default) {
    _push(`<!--[--><div class="${ssrRenderClass(_ctx.containerClass)}">`);
    ssrRenderSlot(_ctx.$slots, "default", {}, () => {
      if (_ctx.label) {
        _push(`<span class="${ssrRenderClass(_ctx.ui.label)}">${ssrInterpolate(_ctx.label)}</span>`);
      } else if (_ctx.icon) {
        _push(ssrRenderComponent(_component_UIcon, {
          name: _ctx.icon,
          class: _ctx.ui.icon.base
        }, null, _parent));
      } else if (_ctx.avatar) {
        _push(ssrRenderComponent(_component_UAvatar, mergeProps({ size: _ctx.ui.avatar.size, ..._ctx.avatar }, {
          class: _ctx.ui.avatar.base
        }), null, _parent));
      } else {
        _push(`<!---->`);
      }
    }, _push, _parent);
    _push(`</div><div class="${ssrRenderClass(_ctx.borderClass)}"></div><!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/layout/Divider.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "ButtonGoogleSignIn",
  __ssrInlineRender: true,
  setup(__props) {
    const session = useSession();
    const nuxtApp = useNuxtApp();
    ref();
    const { status } = useSubmit("/server/api/google-auth");
    useCookie("access_token");
    const { execute: getProfile, status: statusProfile } = useApi(
      "/server/api/profile",
      {
        immediate: false,
        onResponse({ response }) {
          if (response.ok) {
            session.profile = response._data.data;
            nuxtApp.runWithContext(() => {
              navigateTo("/");
            });
          }
        }
      }
    );
    const isLoading = computed(
      () => status.value === "pending" || statusProfile.value === "pending"
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_3$1;
      const _component_UModal = __nuxt_component_3$2;
      const _component_UCard = __nuxt_component_5$1;
      const _component_IconLoading = __nuxt_component_5$2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        "model-value": unref(isLoading),
        "prevent-close": "",
        ui: {
          width: "sm:max-w-sm"
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-4" data-v-19b21fba${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_IconLoading, { class: "w-20 h-20 text-primary mx-auto" }, null, _parent3, _scopeId2));
                  _push3(`<div class="mt-6" data-v-19b21fba${_scopeId2}><p class="text-2xl text-center" data-v-19b21fba${_scopeId2}>Anda Berhasil Login</p><p class="text-sm text-black/55 text-center mt-2" data-v-19b21fba${_scopeId2}> Mohon ditunggu, anda akan segera dialihkan... </p></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-4" }, [
                      createVNode(_component_IconLoading, { class: "w-20 h-20 text-primary mx-auto" }),
                      createVNode("div", { class: "mt-6" }, [
                        createVNode("p", { class: "text-2xl text-center" }, "Anda Berhasil Login"),
                        createVNode("p", { class: "text-sm text-black/55 text-center mt-2" }, " Mohon ditunggu, anda akan segera dialihkan... ")
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
                  createVNode("div", { class: "p-4" }, [
                    createVNode(_component_IconLoading, { class: "w-20 h-20 text-primary mx-auto" }),
                    createVNode("div", { class: "mt-6" }, [
                      createVNode("p", { class: "text-2xl text-center" }, "Anda Berhasil Login"),
                      createVNode("p", { class: "text-sm text-black/55 text-center mt-2" }, " Mohon ditunggu, anda akan segera dialihkan... ")
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
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/ButtonGoogleSignIn.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-19b21fba"]]);

export { __nuxt_component_5 as _, __nuxt_component_6 as a };
//# sourceMappingURL=ButtonGoogleSignIn-SExN3jMP.mjs.map
