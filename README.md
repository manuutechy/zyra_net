# Zyra Net — Marketing Website

Public marketing site for Zyra Net, fast and reliable WiFi in Maseno. Built with **Vue 3** and **Vite**, styled in black with a serif display face and GSAP-driven motion.

A single-page site (`/` with in-page anchors: `#plans`, `#why-us`, `#coverage`, `#faq`, `#contact`) plus SEO/sitemap tooling. It does not talk to `zyranet-api`; the contact form composes an email to hello@zyranet.co.ke.

---

## Tech Stack

- **Vue 3** (Composition API)
- **Vite**, with vendor/animation chunk splitting configured in `vite.config.js`
- **Tailwind CSS v3**
- **GSAP** (ScrollTrigger, SplitText, ScrollTo, ScrambleText) for all motion, in `src/composables/useMotion.js`. Every animation respects `prefers-reduced-motion`
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
  │   ├── sections/   # Hero, Marquee, Proof, Plans, Coverage, FAQ, Contact
  │   └── seo/         # SchemaOrg.vue (LocalBusiness, WebSite, FAQPage)
  ├── composables/
  │   ├── useSeo.js    # Wires page meta via @unhead/vue
  │   └── useMotion.js # GSAP motion
  ├── data/site.js     # Plans, FAQ and proof figures (feeds page and structured data)
  └── main.js
```
