<template>
  <header
    data-nav-bar
    class="fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300"
    :class="solid ? 'border-line bg-[rgba(7,7,10,0.97)]' : 'border-transparent'"
  >
    <nav aria-label="Primary" class="mx-auto flex h-16 max-w-content items-center justify-between px-6 lg:px-8">
      <a href="#hero" aria-label="Zyra Net, home" class="block">
        <img src="/zyranet-logo-wide.png" alt="Zyra Net" width="571" height="180" class="h-9 w-auto" />
      </a>

      <ul class="hidden list-none items-center gap-9 md:flex">
        <li v-for="link in links" :key="link.href">
          <a
            :href="link.href"
            class="inline-block py-4 text-[0.8125rem] font-semibold uppercase tracking-[0.16em] text-dim no-underline transition-colors hover:text-fg"
          >
            <span data-scramble>{{ link.label }}</span>
          </a>
        </li>
      </ul>

      <a href="#plans" class="btn-zyra hidden !min-h-[44px] !px-6 text-[0.9375rem] md:inline-flex" data-magnetic>
        Get connected
      </a>

      <button
        type="button"
        class="grid h-11 w-11 place-items-center rounded-full border border-line text-fg md:hidden"
        :aria-expanded="open"
        aria-controls="mobile-menu"
        aria-label="Menu"
        @click="open = !open"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path v-if="!open" d="M4 8h16M4 16h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
          <path v-else d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
        </svg>
      </button>
    </nav>

    <div
      v-if="open"
      id="mobile-menu"
      class="fixed inset-x-0 top-16 z-40 h-[calc(100svh-4rem)] overflow-y-auto bg-deep px-6 py-10 md:hidden"
    >
      <ul class="list-none space-y-2">
        <li v-for="link in links" :key="link.href">
          <a
            :href="link.href"
            data-mobile-link
            class="display block border-b border-line py-4 text-[2rem] text-fg no-underline"
            @click="open = false"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>
      <a href="#plans" data-mobile-link class="btn-zyra mt-10 w-full" @click="open = false">Get connected</a>
    </div>
  </header>
</template>

<script setup>
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { gsap } from 'gsap'

const solid = ref(false)
const open = ref(false)

const links = [
  { href: '#plans', label: 'Plans' },
  { href: '#why-us', label: 'Why Zyra Net' },
  { href: '#coverage', label: 'Coverage' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

const onScroll = () => {
  solid.value = window.scrollY > 40
}

watch(open, async (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : ''
  if (!isOpen) return
  await nextTick()
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.from('[data-mobile-link]', { y: 28, autoAlpha: 0, duration: 0.7, ease: 'expo.out', stagger: 0.07 })
  }
})

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  document.body.style.overflow = ''
})
</script>
