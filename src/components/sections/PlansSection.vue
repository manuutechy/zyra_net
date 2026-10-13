<template>
  <section id="plans" aria-labelledby="plans-heading" class="bg-night">
    <div class="hairline" aria-hidden="true"></div>

    <div class="mx-auto max-w-content px-6 pb-24 pt-16 lg:px-8 lg:pb-36 lg:pt-24">
      <h2 id="plans-heading" data-reveal-lines class="display max-w-[16ch] text-[clamp(2.25rem,5.4vw,4.5rem)]">
        Pick how you connect.
      </h2>
      <p class="mt-6 max-w-[52ch] text-[1.1875rem] text-dim">
        Prepaid packages for students and hostels, month-to-month plans for homes and businesses. All paid with
        M-Pesa, with no contracts and no surprises.
      </p>

      <div role="tablist" aria-label="Who is it for" class="mt-12 inline-flex rounded-full border border-line p-1">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          type="button"
          role="tab"
          :aria-selected="active === tab.id"
          class="min-h-[44px] rounded-full px-6 text-[0.9375rem] font-semibold transition-colors duration-200"
          :class="active === tab.id ? 'bg-fg text-[#07070a]' : 'text-dim hover:text-fg'"
          @click="active = tab.id"
        >
          {{ tab.label }}
        </button>
      </div>

      <div class="mt-12 min-h-[420px]">
        <Transition :css="false" mode="out-in" @enter="onEnter" @leave="onLeave">
          <!-- Students -->
          <div v-if="active === 'students'" key="students" role="tabpanel">
            <ol class="grid list-none gap-5 md:grid-cols-2 lg:grid-cols-4">
              <li
                v-for="(step, index) in studentSteps"
                :key="step.title"
                class="relative flex flex-col justify-between rounded-[24px] border border-line p-7"
              >
                <span
                  aria-hidden="true"
                  class="display text-[4rem] leading-none text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.3)]"
                >
                  {{ String(index + 1).padStart(2, '0') }}
                </span>
                <div class="mt-10">
                  <h3 class="display text-[1.625rem]">{{ step.title }}</h3>
                  <p class="mt-3 text-[1rem] leading-[1.65] text-dim">{{ step.text }}</p>
                </div>
              </li>
            </ol>
            <p class="mt-8 max-w-[60ch] text-[1rem] text-dim">
              Prepaid packages and prices are shown on the sign-in page when you connect, so you always see exactly
              what you pay before you pay.
            </p>
            <a href="#contact" class="btn-zyra mt-8" data-magnetic @click="lead.location = ''">Ask about my hostel</a>
          </div>

          <!-- Homes & business -->
          <div v-else key="homes" role="tabpanel">
            <div class="flex items-center gap-4">
              <button
                v-for="period in ['Monthly', 'Annual']"
                :key="period"
                type="button"
                class="min-h-[44px] rounded-full border px-5 text-[0.9375rem] font-semibold transition-colors duration-200"
                :class="billing === period ? 'border-fg text-fg' : 'border-line text-dim hover:text-fg'"
                @click="billing = period"
              >
                {{ period }}<span v-if="period === 'Annual'" class="ml-2 text-zyra">-20%</span>
              </button>
            </div>

            <ul class="mt-8 grid list-none gap-5 lg:grid-cols-3">
              <li
                v-for="plan in plans"
                :key="plan.id"
                data-plan
                class="relative flex flex-col rounded-[24px] border p-8"
                :class="plan.popular ? 'border-[rgba(255,107,0,0.55)]' : 'border-line'"
              >
                <p class="tag mb-4 flex h-5 items-center gap-2" :class="plan.popular ? 'text-zyra' : ''">
                  <template v-if="plan.popular">
                    <span class="signal-dot" aria-hidden="true"></span>
                    Most popular
                  </template>
                </p>
                <h3 class="display text-[1.875rem]">{{ plan.name }}</h3>
                <p class="mt-3 min-h-[5.2rem] text-[1rem] leading-[1.6] text-dim">{{ plan.description }}</p>

                <p class="mt-6">
                  <span class="display whitespace-nowrap text-[clamp(2.25rem,3.3vw,3rem)]">KSh {{ billing === 'Annual' ? plan.annual : plan.monthly }}</span>
                  <span class="ml-1 text-[1rem] text-dim">/mo</span>
                </p>
                <p class="mt-1 text-[1rem] font-semibold">{{ plan.speed }}</p>

                <ul class="mt-6 flex-1 list-none border-t border-line">
                  <li v-for="feature in plan.features" :key="feature" class="flex items-center gap-3 border-b border-line py-3 text-[1rem]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" class="shrink-0 text-zyra">
                      <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    {{ feature }}
                  </li>
                  <li v-for="miss in plan.missing" :key="miss" class="flex items-center gap-3 border-b border-line py-3 text-[1rem] text-[#6f6f76]">
                    <span aria-hidden="true" class="inline-block h-px w-4 shrink-0 bg-[#6f6f76]"></span>
                    {{ miss }}
                  </li>
                </ul>

                <a
                  href="#contact"
                  class="mt-7"
                  :class="plan.popular ? 'btn-zyra' : 'btn-ghost'"
                  data-magnetic
                  @click="choosePlan(plan.id)"
                >
                  Get started
                </a>
              </li>
            </ul>

            <p class="mt-8 max-w-[64ch] text-[0.9375rem] text-dim">
              All plans include free installation in Maseno and are month to month. Prices in Kenyan shillings, paid
              via M-Pesa. Annual billing is 20% cheaper.
            </p>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { gsap } from 'gsap'
import { plans, studentSteps } from '@/data/site.js'
import { choosePlan, lead } from '@/composables/useLead.js'

const tabs = [
  { id: 'students', label: 'Students and hostels' },
  { id: 'homes', label: 'Homes and businesses' },
]

const active = computed({
  get: () => lead.tab,
  set: (value) => {
    lead.tab = value
  },
})
const billing = ref('Monthly')

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

const onEnter = (el, done) => {
  if (reduced()) return done()
  gsap.fromTo(el, { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 0.7, ease: 'expo.out', onComplete: done })
  const items = el.querySelectorAll('li')
  if (items.length) {
    gsap.from(items, { autoAlpha: 0, y: 24, duration: 0.7, ease: 'expo.out', stagger: 0.08, delay: 0.05 })
  }
}

const onLeave = (el, done) => {
  if (reduced()) return done()
  gsap.to(el, { autoAlpha: 0, y: -16, duration: 0.25, ease: 'power2.in', onComplete: done })
}
</script>
