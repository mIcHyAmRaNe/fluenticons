import { defineNuxtConfig } from "nuxt/config";
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2026-06-18",

  srcDir: ".",

  app: {
    head: {
      title: "Fluenticons",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Beautiful and Open source icons from Microsoft, a collection of over 4000 filled and outlined icons.",
        },
        {
          "http-equiv": "Content-Security-Policy",
          content: "upgrade-insecure-requests",
        },
        // Preconnect to external resources for performance
        { "http-equiv": "x-dns-prefetch-control", content: "on" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        // Preload critical resources
        { rel: "preload", href: "/gradient-bg-white.jpg", as: "image" },
        { rel: "preload", href: "/gradient-bg-dark.jpg", as: "image" },
      ],
      script: [
        { src: "https://cdn.splitbee.io/sb.js", async: true, defer: true },
      ],
    },
    build: {
      // Enable browser caching for static assets
      assetCache: true,
      // Analyze bundle for optimization opportunities (only in dev)
      analyze: false,
      // Parallel build for faster compilation
      parallel: true,
      // Cache build for faster rebuilds
      cache: true,
    },
  },

  css: ["~/assets/css/styles.css"],

  components: {
    dirs: [{ path: "~/components", global: true }],
  },

  modules: [
    "@nuxt/content",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
    "@nuxtjs/robots",
    "@vite-pwa/nuxt",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxt/scripts",
  ],

  colorMode: {
    classSuffix: "",
    dataValue: "theme",
  },

  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
    },
    display: "swap",
    download: true,
  },

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["@floating-ui/vue", "jszip", "vue-gtag", "vue-sonner"],
    },
    // Performance optimizations
    build: {
      // Enable minification
      minify: true,
      // Use faster minifier
      minify: "terser",
      // Enable source maps only in development
      sourcemap: false,
      // Rollup options for better chunking
      rollupOptions: {
        output: {
          // Better chunk naming
          manualChunks: {
            // Separate vendor chunk for large dependencies
            vendor: ["vue", "vue-router", "pinia"],
          },
          // Enable chunk splitting for better caching
          inlineDynamicImports: false,
        },
      },
    },
  },

  pwa: {
    registerType: "autoUpdate",
    manifest: {
      lang: "en",
      name: "Fluenticons",
      short_name: "Fluenticons",
      description:
        "Beautiful and Open source icons from Microsoft, a collection of over 4000 filled and outlined icons.",
      start_url: "/",
      display: "standalone",
      background_color: "#ffffff",
      theme_color: "#0f172a",
    },
    workbox: {
      globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
    },
  },

  robots: {
    UserAgent: "*",
    Allow: "/",
  },

  runtimeConfig: {
    public: {
      api: "",
    },
  },

  nitro: {
    preset: "cloudflare-pages",
  },
});
