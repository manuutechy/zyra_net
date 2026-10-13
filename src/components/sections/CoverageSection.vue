<template>
  <section id="coverage" aria-labelledby="coverage-heading" class="overflow-hidden bg-night">
    <div class="hairline" aria-hidden="true"></div>

    <div class="mx-auto grid max-w-content items-center gap-x-16 gap-y-14 px-6 pb-24 pt-16 lg:grid-cols-2 lg:px-8 lg:pb-36 lg:pt-24">
      <div>
        <h2 id="coverage-heading" data-reveal-lines class="display max-w-[12ch] text-[clamp(2.25rem,5.4vw,4.5rem)]">
          Serving Maseno.
        </h2>
        <p class="mt-6 max-w-[48ch] text-[1.1875rem] leading-[1.7] text-dim">
          Zyra Net WiFi covers Maseno, and the network keeps expanding. Tell us your hostel, estate or building and
          we will confirm coverage and give you an install time, usually within hours.
        </p>
        <ul class="mt-8 list-none border-t border-line">
          <li v-for="line in lines" :key="line" data-row class="flex items-center gap-3 border-b border-line py-4 text-[1.0625rem]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" class="shrink-0 text-zyra">
              <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            {{ line }}
          </li>
        </ul>
        <a href="#contact" class="btn-zyra mt-9" data-magnetic @click="lead.location = ''">Check my location</a>
      </div>

      <div class="mx-auto w-full max-w-[460px]" aria-hidden="true">
        <div class="aspect-square w-full">
        <svg viewBox="0 0 400 400" class="h-full w-full">
          <circle v-for="r in [70, 120, 170]" :key="r" cx="200" cy="200" :r="r" fill="none" stroke="rgba(255,255,255,0.14)" stroke-width="1" />
          <circle data-ring cx="200" cy="200" r="50" fill="none" stroke="#ff6b00" stroke-width="1.5" />
          <circle data-ring cx="200" cy="200" r="50" fill="none" stroke="#ff6b00" stroke-width="1.5" />
          <circle cx="200" cy="200" r="7" fill="#ff6b00" />
        </svg>
        </div>
        <p class="display mt-2 text-center text-[2rem]">Maseno</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { lead } from '@/composables/useLead.js'

const lines = ['Free installation in Maseno', 'Set up in as little as 24 hours', 'Students, homes and businesses']
</script>
