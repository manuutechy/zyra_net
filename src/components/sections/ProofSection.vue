<template>
  <section id="why-us" aria-labelledby="proof-heading" class="bg-night">
    <div class="hairline" aria-hidden="true"></div>

    <div class="mx-auto max-w-content px-6 pb-24 pt-16 lg:px-8 lg:pb-36 lg:pt-24">
      <h2 id="proof-heading" data-reveal-lines class="display max-w-[16ch] text-[clamp(2.25rem,5.4vw,4.5rem)]">
        Built to be fast, and to stay on.
      </h2>

      <!-- FAST -->
      <article class="mt-16 grid items-center gap-x-16 gap-y-10 border-t border-line pt-14 lg:mt-24 lg:grid-cols-12 lg:pt-20" aria-label="Fast">
        <div class="lg:col-span-6">
          <p class="display text-[clamp(4rem,11vw,9rem)] leading-none">Fast.</p>
          <p class="mt-6 max-w-[46ch] text-[1.1875rem] leading-[1.7] text-dim">
            Up to 100 Mbps on a fibre-backed wireless network built for streaming, gaming, video calls and remote
            work. Your speed is your speed, all day.
          </p>
          <ul class="mt-8 list-none border-t border-line">
            <li v-for="point in fastPoints" :key="point.title" data-row class="border-b border-line py-5">
              <h3 class="text-[1.125rem] font-semibold">{{ point.title }}</h3>
              <p class="mt-1 text-[1rem] leading-[1.6] text-dim">{{ point.text }}</p>
            </li>
          </ul>
        </div>

        <div class="lg:col-span-6">
          <figure data-clip class="relative overflow-hidden rounded-2xl border border-line">
            <img
              data-shot-img
              class="aspect-[4/3] w-full scale-[1.12] object-cover"
              src="/img/technician-1600.webp"
              srcset="/img/technician-900.webp 900w, /img/technician-1600.webp 1600w"
              sizes="(min-width: 1024px) 560px, 100vw"
              width="1600"
              height="900"
              loading="lazy"
              decoding="async"
              alt="A Zyra Net technician on a rooftop in Maseno, aligning a wireless antenna at sunrise"
            />
            <figcaption class="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,rgba(4,4,5,0.9),transparent)] px-5 pb-4 pt-12 text-[0.9375rem] text-fg">
              Installed and tuned by our own technicians.
            </figcaption>
          </figure>
          <p class="tag mt-12">Top speed by plan</p>
          <ul class="mt-6 list-none space-y-6">
            <li v-for="bar in speedBars" :key="bar.name">
              <div class="flex items-baseline justify-between gap-4">
                <span class="text-[1rem] text-dim">{{ bar.name }}</span>
                <span
                  class="display text-[1.75rem]"
                  :data-count="bar.mbps"
                  data-suffix=" Mbps"
                >
                  {{ bar.mbps }} Mbps
                </span>
              </div>
              <div class="mt-2 h-[6px] w-full overflow-hidden rounded-full bg-[rgba(255,255,255,0.08)]">
                <div
                  data-bar
                  class="h-full origin-left rounded-full bg-zyra"
                  :style="{ width: bar.mbps + '%' }"
                ></div>
              </div>
            </li>
          </ul>
        </div>
      </article>

      <!-- RELIABLE -->
      <article class="mt-16 grid items-center gap-x-16 gap-y-10 border-t border-line pt-14 lg:mt-24 lg:grid-cols-12 lg:pt-20" aria-label="Reliable">
        <div class="lg:order-2 lg:col-span-6">
          <p class="display text-[clamp(4rem,11vw,9rem)] leading-none">Reliable.</p>
          <p class="mt-6 max-w-[46ch] text-[1.1875rem] leading-[1.7] text-dim">
            A redundant network keeps you connected through peak hours, with real support behind it at any time of
            day. No buffering, no excuses, no surprises.
          </p>
          <ul class="mt-8 list-none border-t border-line">
            <li v-for="point in reliablePoints" :key="point.title" data-row class="border-b border-line py-5">
              <h3 class="text-[1.125rem] font-semibold">{{ point.title }}</h3>
              <p class="mt-1 text-[1rem] leading-[1.6] text-dim">{{ point.text }}</p>
            </li>
          </ul>
        </div>

        <div class="lg:order-1 lg:col-span-6">
          <p class="tag">Network uptime</p>
          <p class="display mt-4 text-[clamp(4.5rem,12vw,9.5rem)] leading-none" data-count="99.9" data-suffix="%" data-decimals="1">
            99.9%
          </p>
          <div class="mt-6 h-[10px] w-full overflow-hidden rounded-full bg-[rgba(255,255,255,0.08)]">
            <div data-bar class="h-full origin-left rounded-full bg-zyra" style="width: 99.9%"></div>
          </div>
          <p class="mt-3 text-[0.9375rem] text-dim">Month to month, no lock-in. You stay because it works.</p>
        </div>
      </article>

      <figure data-clip class="relative mt-16 overflow-hidden rounded-2xl border border-line lg:mt-24">
        <img
          data-shot-img
          class="aspect-[4/3] w-full scale-[1.12] object-cover sm:aspect-[16/9] lg:aspect-[21/9]"
          src="/img/family-1600.webp"
          srcset="/img/family-900.webp 900w, /img/family-1600.webp 1600w"
          sizes="(min-width: 1280px) 1216px, 100vw"
          width="1600"
          height="900"
          loading="lazy"
          decoding="async"
          alt="A mother and two children laughing on a sofa at home in the evening, a Zyra Net router glowing on the shelf behind them"
        />
        <figcaption class="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,rgba(4,4,5,0.92),transparent)] px-6 pb-6 pt-20 lg:px-10 lg:pb-9">
          <p class="display max-w-[22ch] text-[clamp(1.5rem,3.2vw,2.75rem)]">Evenings are for the family, not the buffering wheel.</p>
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<script setup>
import { speedBars } from '@/data/site.js'

const fastPoints = [
  {
    title: 'No throttling, ever',
    text: 'No hidden fair-use policy slowing you down when you need speed most.',
  },
  {
    title: 'Set up in as little as 24 hours',
    text: 'Technicians deliver, install and configure your router in one visit, often the same day.',
  },
  {
    title: 'Unlimited data on every plan',
    text: 'Stream, download and study without watching a data counter.',
  },
]

const reliablePoints = [
  {
    title: '99.9% network uptime',
    text: 'A redundant network means you stay online, even when everyone else is.',
  },
  {
    title: '24/7 online support',
    text: 'Raise a ticket or email us at any hour and a real person answers.',
  },
  {
    title: 'Pay with M-Pesa',
    text: 'Simple prepaid packages for students and month-to-month plans for everyone else.',
  },
]
</script>
