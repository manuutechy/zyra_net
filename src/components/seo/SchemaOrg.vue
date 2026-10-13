<script setup>
import { useHead } from '@unhead/vue'
import { email, faqs, plans, siteUrl } from '../../data/site.js'

const business = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteUrl}/#business`,
  name: 'Zyra Net',
  description:
    'Internet service provider in Maseno, Kenya: fast, reliable WiFi with up to 100 Mbps, 99.9% network uptime and no throttling. Student packages, home WiFi and business broadband, paid via M-Pesa.',
  url: siteUrl,
  logo: `${siteUrl}/zyranet-logo-wide.png`,
  image: `${siteUrl}/og-image.jpg`,
  email,
  areaServed: { '@type': 'Place', name: 'Maseno, Kenya' },
  priceRange: 'KES',
  currenciesAccepted: 'KES',
  paymentAccepted: 'M-Pesa',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Internet plans in Maseno',
    itemListElement: plans.map((plan) => ({
      '@type': 'Offer',
      name: plan.name,
      description: `${plan.description} ${plan.speed}, month to month.`,
      priceCurrency: 'KES',
      price: plan.monthly.replace(',', ''),
      areaServed: 'Maseno, Kenya',
    })),
  },
}

const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  name: 'Zyra Net',
  url: siteUrl,
  description: 'Fast, reliable WiFi in Maseno, Kenya',
  inLanguage: 'en-KE',
}

const faqPage = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

useHead({
  script: [business, website, faqPage].map((data) => ({
    type: 'application/ld+json',
    innerHTML: JSON.stringify(data).replace(/</g, '\\u003c'),
  })),
})
</script>

<template></template>
