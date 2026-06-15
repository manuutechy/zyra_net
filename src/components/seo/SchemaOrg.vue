<script setup>
/**
 * SchemaOrg.vue — Injects all JSON-LD structured data for Zyra Net.
 * Include this once in App.vue.
 * Schemas: LocalBusiness, WebSite (Sitelinks Search), BreadcrumbList, FAQPage
 */
import { useHead } from '@unhead/vue'

useHead({
  script: [
    // ── 1. LocalBusiness Schema ────────────────────────────────────────────
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': 'https://zyranet.co.ke/#business',
        name: 'Zyra Net',
        description:
          'Fast, reliable and affordable internet service provider in Kisumu, Kenya. Offering home WiFi, business broadband, hotspot and school internet packages.',
        url: 'https://zyranet.co.ke',
        logo: 'https://zyranet.co.ke/zyranet_logo.png',
        image: 'https://zyranet.co.ke/og-image.jpg',
        telephone: '+254700000000',
        email: 'hello@zyranet.co.ke',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Oginga Odinga Street, Kisumu CBD',
          addressLocality: 'Kisumu',
          addressRegion: 'Kisumu County',
          addressCountry: 'KE',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -0.0917,
          longitude: 34.7679,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '08:00',
            closes: '20:00',
          },
        ],
        sameAs: [
          'https://facebook.com/zyranet',
          'https://instagram.com/zyranet',
          'https://twitter.com/zyranet',
        ],
        priceRange: 'KES',
        currenciesAccepted: 'KES',
        paymentAccepted: 'M-Pesa, Cash',
        areaServed: {
          '@type': 'City',
          name: 'Kisumu',
          containedInPlace: {
            '@type': 'Country',
            name: 'Kenya',
          },
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Internet Packages',
          itemListElement: [
            {
              '@type': 'Offer',
              name: 'Home WiFi Kisumu',
              description: 'Daily, weekly and monthly home internet packages in Kisumu. Affordable home WiFi starting from KSh 1,500/month.',
              areaServed: 'Kisumu, Kenya',
            },
            {
              '@type': 'Offer',
              name: 'Business Broadband Kisumu',
              description: 'Dedicated PPPoE business internet for offices in Kisumu up to 100Mbps.',
              areaServed: 'Kisumu, Kenya',
            },
            {
              '@type': 'Offer',
              name: 'School Internet Kisumu',
              description: 'Reliable internet packages for schools and institutions in Kisumu Kenya.',
              areaServed: 'Kisumu, Kenya',
            },
            {
              '@type': 'Offer',
              name: 'Hotspot Internet Kisumu',
              description: 'Hotspot WiFi solutions for businesses, events and public spaces in Kisumu.',
              areaServed: 'Kisumu, Kenya',
            },
          ],
        },
      }),
    },

    // ── 2. WebSite Schema (enables Google Sitelinks Search Box) ───────────
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Zyra Net',
        url: 'https://zyranet.co.ke',
        description: 'Fast WiFi Internet Provider in Kisumu, Kenya',
        inLanguage: 'en-KE',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://zyranet.co.ke/?s={query}',
          'query-input': 'required name=query',
        },
      }),
    },

    // ── 3. BreadcrumbList Schema ───────────────────────────────────────────
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://zyranet.co.ke',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Internet Plans',
            item: 'https://zyranet.co.ke/#plans',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Why Zyra Net',
            item: 'https://zyranet.co.ke/#why-us',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Contact',
            item: 'https://zyranet.co.ke/#contact',
          },
        ],
      }),
    },

    // ── 4. FAQPage Schema (rich results in Google SERPs) ──────────────────
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How do I get internet from Zyra Net in Kisumu?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Contact Zyra Net via WhatsApp or call us at +254700000000. Our team will visit your location in Kisumu and set up your connection within 24 hours.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I pay for Zyra Net internet via M-Pesa?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! Zyra Net accepts M-Pesa payments for all internet packages including daily, weekly and monthly plans. It is the fastest and most convenient way to pay.',
            },
          },
          {
            '@type': 'Question',
            name: 'What areas in Kisumu does Zyra Net cover?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Zyra Net provides internet coverage across Kisumu including Kisumu CBD, Milimani, Mamboleo, Nyalenda, and surrounding zones. Contact us to check coverage in your specific area.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does Zyra Net provide internet for schools?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, Zyra Net offers dedicated internet packages for schools and institutions in Kisumu with reliable connectivity and competitive pricing tailored for educational environments.',
            },
          },
          {
            '@type': 'Question',
            name: 'What internet speeds does Zyra Net offer in Kisumu?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Zyra Net offers various speed tiers: Home Basic at 10 Mbps (KSh 1,500/mo), Home Plus at 30 Mbps (KSh 2,500/mo), and Business Broadband up to 100 Mbps (KSh 6,000/mo) in Kisumu, Kenya.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is Zyra Net the best internet provider in Kisumu?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Zyra Net is Kisumu\'s fastest-growing ISP, offering reliable home WiFi, business broadband, hotspot and school internet with same-day installation, M-Pesa payment, and 24/7 local support.',
            },
          },
        ],
      }),
    },
  ],
})
</script>
