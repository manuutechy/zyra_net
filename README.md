# Zyra Net — Marketing Website

Public marketing site for Zyra Net ISP. Built with **Vue 3** and **Vite**.

A single-page site (`/` with in-page anchors: `#about`, `#plans`, `#why-us`, `#coverage`, `#testimonials`, `#contact`) plus SEO/sitemap tooling — it does not talk to `zyranet-api`.

---

## Tech Stack

- **Vue 3** (Composition API)
- **Vite**, with vendor/animation chunk splitting configured in `vite.config.js`
- **Tailwind CSS v3**
- **AOS** (Animate on Scroll) for scroll-triggered section animations
- **@unhead/vue** for `<head>`/meta tag management, plus a `SchemaOrg.vue` component for structured data
- **vite-plugin-sitemap** — generates `sitemap.xml` at build time for `https://zyranet.co.ke` (robots.txt is managed manually under `public/`)
- **@lucide/vue** for icons

## Setup

```bash
npm install
npm run dev
```

```bash
npm run build      # production build, generates dist/ + sitemap.xml
npm run preview    # preview the production build
```

## Folder Structure

```
src/
  ├── components/
  │   ├── layout/     # Navbar, Footer
  │   ├── sections/   # Hero, Plans, Coverage, Stats, Testimonials, WhyUs, Contact
  │   └── seo/         # SchemaOrg.vue (structured data)
  ├── composables/
  │   └── useSeo.js    # Wires page meta via @unhead/vue
  └── main.js
```
