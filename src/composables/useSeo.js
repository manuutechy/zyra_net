import { useHead } from '@unhead/vue'

export function useSeo({ title, description, keywords, url, image, type = 'website' } = {}) {
  const siteName = 'Zyra Net'
  const defaultImage = 'https://zyranet.co.ke/og-image.jpg'
  const fullTitle = title ? `${title} | Zyra Net` : 'Zyra Net — Fast, Reliable WiFi in Maseno, Kenya'

  useHead({
    title: fullTitle,
    meta: [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { name: 'author', content: 'Zyra Net' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: type },
      { property: 'og:site_name', content: siteName },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:image', content: image || defaultImage },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:locale', content: 'en_KE' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image || defaultImage },
      { name: 'geo.region', content: 'KE' },
      { name: 'geo.placename', content: 'Maseno, Kenya' },
      { name: 'geo.position', content: '-0.0036;34.6048' },
      { name: 'ICBM', content: '-0.0036, 34.6048' },
    ],
    link: [{ rel: 'canonical', href: url }],
  })
}
