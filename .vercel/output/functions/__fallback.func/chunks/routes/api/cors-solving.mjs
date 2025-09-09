import { d as defineEventHandler } from '../../_/nitro.mjs';
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

const corsSolving = defineEventHandler(() => {
  return $fetch("https://niagaspace.sgp1.digitaloceanspaces.com/blog/wp-content/uploads/2023/03/31091118/logo-nuxt-js-adalah-1024x583.webp");
});

export { corsSolving as default };
//# sourceMappingURL=cors-solving.mjs.map
