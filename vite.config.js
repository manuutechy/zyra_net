import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import sitemap from 'vite-plugin-sitemap'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    sitemap({
      hostname: 'https://zyranet.co.ke',
      routes: [
        '/',
        '/#about',
        '/#plans',
        '/#why-us',
        '/#coverage',
        '/#testimonials',
        '/#contact',
      ],
      outDir: 'dist',
      generateRobotsTxt: false, // We manage robots.txt manually in /public
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 1.0,
    }),
  ],

  // ── Path aliases ──────────────────────────────────────────────────────────
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  build: {
    // ── Performance: split vendor chunks for better caching (rolldown-compatible) ──
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/vue') || id.includes('node_modules/vue-router')) {
            return 'vendor'
          }
          if (id.includes('node_modules/aos')) {
            return 'animations'
          }
        },
      },
    },
  },
})
