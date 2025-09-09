import { U as defineNuxtRouteMiddleware, c as useSession, y as navigateTo, V as executeAsync } from './server.mjs';
import { u as useApi } from './use-api-DLZ2CTc2.mjs';
import 'vue';
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
import 'vue/server-renderer';
import '@iconify/utils/lib/css/icon';

const mustAuth = defineNuxtRouteMiddleware(async () => {
  let __temp, __restore;
  const session = useSession();
  if (!session.tokenCookie) {
    return navigateTo("/login", {
      external: true
    });
  }
  if (!session.token) {
    session.token = session.tokenCookie;
    if (!session.profile.email) {
      const { error } = ([__temp, __restore] = executeAsync(() => useApi("/server/api/profile", {
        key: "profile",
        onResponse({ response }) {
          if (response.ok) {
            session.profile = response._data.data;
          }
        }
      })), __temp = await __temp, __restore(), __temp);
      if (error.value) {
        return session.logout();
      }
    }
  }
});

export { mustAuth as default };
//# sourceMappingURL=must-auth-B30F8zbG.mjs.map
