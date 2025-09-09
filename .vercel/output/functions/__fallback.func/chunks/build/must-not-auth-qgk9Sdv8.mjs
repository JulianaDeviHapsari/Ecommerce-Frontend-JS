import { U as defineNuxtRouteMiddleware, c as useSession, y as navigateTo } from './server.mjs';
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

const mustNotAuth = defineNuxtRouteMiddleware(async () => {
  const session = useSession();
  if (session.tokenCookie) {
    return navigateTo("/my-account/profile", {
      external: true
    });
  }
});

export { mustNotAuth as default };
//# sourceMappingURL=must-not-auth-qgk9Sdv8.mjs.map
