import { useHead } from '@unhead/vue'

/**
 * Reusable SEO composable for Zyra Net marketing site.
 * Handles meta tags, Open Graph, Twitter Cards, and geo targeting.
 *
 * @param {Object} options
 * @param {string} options.title       - Page-level title (without site name)
 * @param {string} options.description - Meta description
 * @param {string} options.keywords    - Comma-separated keywords
 * @param {string} options.url         - Canonical URL
 * @param {string} [options.image]     - OG image URL (defaults to og-image.jpg)
 * @param {string} [options.type]      - OG type: 'website' | 'article' (default: 'website')
 */
export function useSeo({
  title,
  description,
  keywords,
  url,
  image,
  type = 'website',
} = {}) {
  const siteName = 'Zyra Net'
  const defaultImage = 'https://zyranet.co.ke/og-image.jpg'
  const fullTitle = title
    ? `${title} | Zyra Net`
    : 'Zyra Net — Fast WiFi Internet in Kisumu, Kenya'

  useHead({
    title: fullTitle,
    meta: [
      // ── Core SEO ──────────────────────────────────────────────────────────
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { name: 'author', content: 'Zyra Net' },
      { name: 'robots', content: 'index, follow' },
      { name: 'googlebot', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },

      // ── Open Graph (Facebook, WhatsApp, LinkedIn) ─────────────────────────
      { property: 'og:type', content: type },
      { property: 'og:site_name', content: siteName },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:image', content: image || defaultImage },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: fullTitle },
      { property: 'og:locale', content: 'en_KE' },

      // ── Twitter Card ──────────────────────────────────────────────────────
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@zyranet' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image || defaultImage },

      // ── Geo targeting (Kenya / Kisumu) ────────────────────────────────────
      { name: 'geo.region', content: 'KE-SC' },
      { name: 'geo.placename', content: 'Kisumu, Kenya' },
      { name: 'geo.position', content: '-0.0917;34.7679' },
      { name: 'ICBM', content: '-0.0917, 34.7679' },
    ],
    link: [
      { rel: 'canonical', href: url },
    ],
  })
}
