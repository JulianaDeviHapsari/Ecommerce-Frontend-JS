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
      baseUrl: "", // diisi otomatis dari env di Vercel
    },
  },

  routeRules: {
    // "/server/**": { proxy: "/api/**" },
    "/registration/**": { ssr: false },
    "/cart": { ssr: false },
    "/checkout/**": { ssr: false },
    "/seller/**": { ssr: false },
  },

  nitro: {
    preset: "vercel-static", // ✅ output khusus untuk vercel
    // routeRules: {
  //     "/api/**": { proxy: `${process.env.NUXT_BASE_URL}/**` },
  //   },
  },

  image: {
    domains: [
      (process.env.NUXT_BASE_URL || "")
        .replace("https://", "")
        .replace("http://", ""),
    ],
  },

  vite: {
    optimizeDeps: {
      exclude: ["@headlessui/vue"], // ✅ cegah error build
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: undefined, // ✅ cegah split ulang chunk
        },
      },
    },
  },
});
