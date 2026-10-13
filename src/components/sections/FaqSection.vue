<template>
  <section id="faq" aria-labelledby="faq-heading" class="bg-night">
    <div class="hairline" aria-hidden="true"></div>

    <div class="mx-auto max-w-[900px] px-6 pb-24 pt-16 lg:pb-36 lg:pt-24">
      <h2 id="faq-heading" data-reveal-lines class="display text-center text-[clamp(2.25rem,5.4vw,4.5rem)]">
        Questions, answered.
      </h2>

      <div class="mt-12 divide-y divide-[rgba(255,255,255,0.09)] border-y border-line">
        <details v-for="item in faqs" :key="item.q" class="group py-5" data-faq>
          <summary
            class="flex cursor-pointer list-none items-center justify-between gap-6 text-[1.125rem] font-semibold [&::-webkit-details-marker]:hidden"
          >
            {{ item.q }}
            <span aria-hidden="true" class="text-[1.5rem] leading-none text-dim transition-transform duration-200 group-open:rotate-45">+</span>
          </summary>
          <p class="mt-3 max-w-[64ch] text-[1.0625rem] leading-[1.7] text-dim">{{ item.a }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup>
import { faqs } from '@/data/site.js'
</script>
