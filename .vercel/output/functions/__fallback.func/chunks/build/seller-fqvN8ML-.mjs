import { _ as __nuxt_component_0$1 } from './Breadcrumb-CMnxnrU0.mjs';
import { _ as __nuxt_component_1 } from './Dropdown-RsBnL6Tj.mjs';
import { _ as _export_sfc, x as useRoute, c as useSession, E as __nuxt_component_2$1, f as __nuxt_component_3 } from './server.mjs';
import { computed, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$2 } from './index-245MDKqh.mjs';
import 'tailwind-merge';
import './keyboard-Duq8EHr3.mjs';
import './use-outside-click-BHqYmLlt.mjs';
import './focus-management-vHH7q6nP.mjs';
import './use-resolve-button-type-DOOP2SMg.mjs';
import './use-text-value-CKO20D-4.mjs';
import './open-closed-CJlEqXqx.mjs';
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
import './usePopper-BrvKSG9Z.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './index-v5u2CgtM.mjs';
import './index-CjTnKh2l.mjs';

const _sfc_main$1 = {
  __name: "HeaderSeller",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const session = useSession();
    const breadcrumb = computed(() => {
      const defaultBreadcrumb = [{ label: "Beranda" }];
      if (!route.meta.breadcrumb || !Array.isArray(route.meta.breadcrumb)) {
        return defaultBreadcrumb;
      }
      return [...defaultBreadcrumb, ...route.meta.breadcrumb];
    });
    const ui = {
      active: "text-slate-800",
      inactive: "text-black/50",
      base: "font-normal text-lg",
      li: "text-black/50"
    };
    const profileItems = [
      [
        {
          label: "Switch to Customer",
          icon: "i-heroicons:arrow-path",
          to: "/my-account/profile"
        },
        {
          label: "Logout",
          icon: "i-heroicons:arrow-left-start-on-rectangle",
          click: session.logout
        }
      ]
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UBreadcrumb = __nuxt_component_0$1;
      const _component_UDropdown = __nuxt_component_1;
      const _component_UAvatar = __nuxt_component_2$1;
      const _component_UIcon = __nuxt_component_3;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "header-seller" }, _attrs))} data-v-608b639e>`);
      _push(ssrRenderComponent(_component_UBreadcrumb, {
        links: unref(breadcrumb),
        ui
      }, null, _parent));
      _push(ssrRenderComponent(_component_UDropdown, { items: profileItems }, {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex gap-2 items-center" data-v-608b639e${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UAvatar, {
              src: unref(session).profile.photo_url,
              icon: "i-heroicons:building-storefront",
              alt: unref(session).profile.store_name,
              "img-class": "object-cover"
            }, null, _parent2, _scopeId));
            _push2(`<p data-v-608b639e${_scopeId}>${ssrInterpolate(unref(session).profile.store_name)}</p>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons:chevron-down-20-solid",
              class: ["w-4 h-4 transition-all", [open && "rotate-180"]]
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex gap-2 items-center" }, [
                createVNode(_component_UAvatar, {
                  src: unref(session).profile.photo_url,
                  icon: "i-heroicons:building-storefront",
                  alt: unref(session).profile.store_name,
                  "img-class": "object-cover"
                }, null, 8, ["src", "alt"]),
                createVNode("p", null, toDisplayString(unref(session).profile.store_name), 1),
                createVNode(_component_UIcon, {
                  name: "i-heroicons:chevron-down-20-solid",
                  class: ["w-4 h-4 transition-all", [open && "rotate-180"]]
                }, null, 8, ["class"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</header>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/HeaderSeller.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-608b639e"]]);
const _sfc_main = {
  __name: "seller",
  __ssrInlineRender: true,
  setup(__props) {
    const sidebarItems = computed(() => [
      {
        label: "Pesanan",
        icon: "i-heroicons:clipboard-document-list",
        to: "/seller/order"
      },
      {
        label: "Produk",
        icon: "i-heroicons:inbox-stack",
        children: [
          {
            label: "Produk Saya",
            to: "/seller/product",
            exact: true
          },
          {
            label: "Tambah Produk Baru",
            to: "/seller/product/add"
          }
        ]
      },
      {
        label: "Voucher",
        icon: "i-heroicons:receipt-percent",
        to: "/seller/voucher"
      },
      {
        label: "Keuangan",
        icon: "i-heroicons:banknotes",
        children: [
          {
            label: "Saldo Saya",
            to: "/seller/balance"
          }
        ]
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutsHeaderSeller = __nuxt_component_0;
      const _component_LayoutsSidebar = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "seller-layout" }, _attrs))} data-v-cd11f566>`);
      _push(ssrRenderComponent(_component_LayoutsHeaderSeller, null, null, _parent));
      _push(`<aside class="seller-sidebar" data-v-cd11f566>`);
      _push(ssrRenderComponent(_component_LayoutsSidebar, { items: unref(sidebarItems) }, null, _parent));
      _push(`</aside><main class="main-content" data-v-cd11f566>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/seller.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const seller = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cd11f566"]]);

export { seller as default };
//# sourceMappingURL=seller-fqvN8ML-.mjs.map
