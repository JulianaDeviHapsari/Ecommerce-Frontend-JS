
/* eslint-disable @typescript-eslint/no-explicit-any */
declare const process: any;
// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  modules: [
    "@nuxt/ui",
    "@nuxt/eslint",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxt/image",
  ],

  runtimeConfig: {
    public: {
      clientIdGoogleSignIn: "",
      baseUrl: "", // nanti diisi otomatis dari env
    },
  },

  routeRules: {
    "/server/**": { proxy: "/api/**" },
    "/registration/**": { ssr: false },
    "/cart": { ssr: false },
    "/checkout/**": { ssr: false },
    "/seller/**": { ssr: false },
  },

  nitro: {
    routeRules: {
      "/api/**": { proxy: `${process.env.NUXT_BASE_URL}/**` },
    },
  },

  image: {
    domains: [
      (process.env.NUXT_BASE_URL || "")
        .replace("https://", "")
        .replace("http://", ""),
    ],
  },

  vite: {
    build: {
      rollupOptions: {
        output: { manualChunks: undefined },
      },
    },
  },
});
