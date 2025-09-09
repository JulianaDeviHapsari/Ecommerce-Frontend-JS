import { _ as __nuxt_component_1 } from './Container-D6NRf-p3.mjs';
import { _ as _export_sfc, c as useSession, x as useRoute, E as __nuxt_component_2$1, F as __nuxt_component_0$3 } from './server.mjs';
import { _ as _sfc_main$1 } from './index-245MDKqh.mjs';
import { _ as __nuxt_component_3 } from './client-only-BTi8mZAI.mjs';
import { computed, mergeProps, withCtx, unref, createVNode, toDisplayString, createBlock, openBlock, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as __nuxt_component_5 } from './Card-DbWg7JF8.mjs';
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
import './keyboard-Duq8EHr3.mjs';
import './use-resolve-button-type-DOOP2SMg.mjs';
import './open-closed-CJlEqXqx.mjs';
import './index-v5u2CgtM.mjs';
import './index-CjTnKh2l.mjs';

const _sfc_main = {
  __name: "my-account",
  __ssrInlineRender: true,
  setup(__props) {
    const session = useSession();
    const route = useRoute();
    const wrapper = computed(() => {
      return route.meta.wrapper || __nuxt_component_5;
    });
    const links = [
      {
        label: "Akun Saya",
        icon: "i-heroicons:user",
        defaultOpen: true,
        children: [
          {
            label: "Profil",
            to: "/my-account/profile"
          },
          {
            label: "Alamat",
            to: "/my-account/address"
          },
          {
            label: "Ubah Password",
            to: "/my-account/change-password"
          }
        ]
      },
      {
        label: "Pesanan Saya",
        icon: "i-heroicons:clipboard-document-list",
        to: "/my-account/orders"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = __nuxt_component_1;
      const _component_UAvatar = __nuxt_component_2$1;
      const _component_LayoutsSidebar = _sfc_main$1;
      const _component_ClientOnly = __nuxt_component_3;
      const _component_NuxtPage = __nuxt_component_0$3;
      _push(ssrRenderComponent(_component_UContainer, mergeProps({ class: "py-5 flex gap-7" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-44 py-4" data-v-cadd4fdb${_scopeId}><div class="flex gap-3 items-center" data-v-cadd4fdb${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UAvatar, {
              src: unref(session).profile.photo_url,
              icon: "i-heroicons:user",
              alt: unref(session).profile.name,
              "img-class": "object-cover"
            }, null, _parent2, _scopeId));
            _push2(`<span data-v-cadd4fdb${_scopeId}>${ssrInterpolate(unref(session).profile.name)}</span></div><hr class="border-gray-200/50 my-4" data-v-cadd4fdb${_scopeId}>`);
            _push2(ssrRenderComponent(_component_LayoutsSidebar, {
              items: links,
              class: "my-account-sidebar"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex-1" data-v-cadd4fdb${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "w-44 py-4" }, [
                createVNode("div", { class: "flex gap-3 items-center" }, [
                  createVNode(_component_UAvatar, {
                    src: unref(session).profile.photo_url,
                    icon: "i-heroicons:user",
                    alt: unref(session).profile.name,
                    "img-class": "object-cover"
                  }, null, 8, ["src", "alt"]),
                  createVNode("span", null, toDisplayString(unref(session).profile.name), 1)
                ]),
                createVNode("hr", { class: "border-gray-200/50 my-4" }),
                createVNode(_component_LayoutsSidebar, {
                  items: links,
                  class: "my-account-sidebar"
                })
              ]),
              createVNode("div", { class: "flex-1" }, [
                createVNode(_component_ClientOnly, null, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(unref(wrapper)), null, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtPage)
                      ]),
                      _: 1
                    }))
                  ]),
                  _: 1
                })
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/my-account.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const myAccount = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cadd4fdb"]]);

export { myAccount as default };
//# sourceMappingURL=my-account-CNZ5IAUY.mjs.map
