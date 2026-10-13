<template>
  <footer class="border-t border-line bg-deep" aria-label="Site footer">
    <div aria-hidden="true" class="overflow-hidden px-4 pt-16 text-center lg:pt-24">
      <p data-footer-name class="display whitespace-nowrap text-[clamp(3.5rem,17vw,15rem)] leading-[1.02]">Zyra Net</p>
    </div>

    <div class="mx-auto flex max-w-content flex-col items-center gap-7 px-6 py-14 text-center lg:px-8">
      <a href="#hero" aria-label="Zyra Net, back to top" class="block">
        <img src="/zyranet-logo-wide.png" alt="Zyra Net" width="571" height="180" class="h-10 w-auto" />
      </a>
      <p class="max-w-[38ch] text-[1.0625rem] text-dim">Fast, reliable WiFi for Maseno.</p>
      <ul class="flex list-none flex-wrap justify-center gap-x-8 gap-y-1">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href" class="inline-block py-2 text-[0.9375rem] text-dim no-underline transition-colors hover:text-fg">
            {{ link.label }}
          </a>
        </li>
        <li>
          <a :href="`mailto:${email}`" class="inline-block py-2 text-[0.9375rem] text-dim no-underline transition-colors hover:text-fg">
            {{ email }}
          </a>
        </li>
      </ul>
      <p class="max-w-[52ch] text-[0.8125rem] text-dim">Photography on this site is illustrative and AI-generated.</p>
      <p class="text-[0.875rem] text-dim">&copy; {{ new Date().getFullYear() }} Zyra Net. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
import { email } from '@/data/site.js'

const links = [
  { href: '#plans', label: 'Plans' },
  { href: '#why-us', label: 'Why Zyra Net' },
  { href: '#coverage', label: 'Coverage' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]
</script>
