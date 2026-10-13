<template>
  <section id="hero" aria-label="Zyra Net WiFi in Maseno" class="relative isolate flex min-h-[100svh] flex-col overflow-hidden">
    <div data-hero-media class="absolute inset-0 -z-20 overflow-hidden bg-deep">
      <img
        data-hero-img
        class="hero-img h-full w-full object-cover object-[74%_50%] lg:object-right"
        src="/img/student-1600.webp"
        srcset="/img/student-900.webp 900w, /img/student-1600.webp 1600w"
        sizes="100vw"
        width="1600"
        height="900"
        alt="A university student typing on a laptop at night in a hostel room, lit by a warm desk lamp"
        fetchpriority="high"
        decoding="async"
      />
      <div aria-hidden="true" class="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(4,4,5,0.94)_0%,rgba(4,4,5,0.66)_40%,rgba(4,4,5,0.08)_78%)] lg:block"></div>
      <div aria-hidden="true" class="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(4,4,5,0.42),rgba(4,4,5,0.9)_70%)] lg:hidden"></div>
      <div aria-hidden="true" class="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(to_bottom,rgba(4,4,5,0.75),transparent)]"></div>
      <div aria-hidden="true" class="absolute inset-x-0 bottom-0 h-1/3 bg-[linear-gradient(to_top,#040405,transparent)]"></div>
    </div>

    <div data-streaks aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <span
        v-for="(streak, index) in streaks"
        :key="index"
        data-streak
        class="absolute left-0 block h-px"
        :style="{
          top: streak.top + '%',
          width: streak.width + 'px',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,' + streak.alpha + '))',
        }"
      ></span>
    </div>

    <div data-hero-content class="mx-auto flex w-full max-w-content flex-1 flex-col justify-center px-6 pb-16 pt-32 lg:px-8">
      <p data-hero-tag data-hide class="tag inline-flex items-center gap-3">
        <span class="signal-dot" aria-hidden="true"></span>
        WiFi for Maseno
      </p>

      <h1 data-hero-title data-hide class="display mt-6 text-[clamp(3rem,9.4vw,8.25rem)]">
        <span class="block">Fast, reliable</span>
        <span class="block">WiFi for Maseno.</span>
      </h1>

      <p data-hero-sub data-hide class="mt-8 max-w-[52ch] text-[1.25rem] leading-[1.55] text-dim sm:text-[1.375rem]">
        Up to 100 Mbps on a fibre-backed wireless network, 99.9% uptime and no throttling, ever. For students,
        homes and businesses in Maseno.
      </p>

      <div data-hero-cta data-hide class="mt-10 flex flex-wrap gap-4">
        <a href="#plans" class="btn-zyra" data-magnetic>See plans</a>
        <a href="#coverage" class="btn-ghost" data-magnetic>Check my hostel or estate</a>
      </div>
    </div>

    <p
      data-hero-caption
      data-hide
      class="absolute bottom-[170px] right-8 hidden items-center gap-3 text-[0.9375rem] text-dim lg:flex"
    >
      <span class="signal-dot" aria-hidden="true"></span>
      Midnight revision. Still connected.
    </p>

    <div class="border-t border-line bg-deep">
      <dl class="mx-auto grid max-w-content grid-cols-2 px-6 lg:grid-cols-4 lg:px-8">
        <div
          v-for="(item, index) in proof"
          :key="item.label"
          data-hero-stat
          data-hide
          class="flex flex-col-reverse justify-end border-b border-line py-6 pr-4 lg:border-b-0 lg:border-r lg:px-6 lg:first:pl-0 lg:last:border-r-0"
          :class="index % 2 === 0 ? 'border-r' : ''"
        >
          <dt class="mt-1 text-[0.9375rem] leading-[1.4] text-dim">{{ item.label }}</dt>
          <dd
            class="display text-[clamp(1.75rem,3.6vw,2.75rem)]"
            :data-count="item.value"
            :data-suffix="item.suffix"
            :data-decimals="item.decimals || 0"
          >
            {{ item.value }}{{ item.suffix }}
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<script setup>
import { useSeo } from '@/composables/useSeo.js'
import { proof } from '@/data/site.js'

useSeo({
  title: 'Fast, Reliable WiFi in Maseno, Kenya',
  description:
    'Zyra Net provides fast, reliable WiFi in Maseno, Kenya: up to 100 Mbps, 99.9% uptime and no throttling. Student packages, home WiFi and business broadband. Pay via M-Pesa.',
  keywords:
    'WiFi Maseno, internet provider Maseno, ISP Maseno Kenya, student WiFi Maseno, hostel WiFi Maseno, fast internet Maseno, reliable internet Maseno, home WiFi Maseno, business broadband Maseno, Zyra Net, pay WiFi with M-Pesa',
  url: 'https://zyranet.co.ke',
  type: 'website',
})

const streaks = [
  { top: 8, width: 240, alpha: 0.35 },
  { top: 15, width: 380, alpha: 0.22 },
  { top: 23, width: 180, alpha: 0.4 },
  { top: 31, width: 460, alpha: 0.18 },
  { top: 39, width: 260, alpha: 0.3 },
  { top: 47, width: 340, alpha: 0.2 },
  { top: 55, width: 200, alpha: 0.38 },
  { top: 62, width: 420, alpha: 0.16 },
  { top: 70, width: 280, alpha: 0.28 },
  { top: 77, width: 160, alpha: 0.4 },
  { top: 84, width: 360, alpha: 0.2 },
  { top: 91, width: 220, alpha: 0.3 },
]
</script>
