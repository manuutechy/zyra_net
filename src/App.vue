<template>
  <div class="relative min-h-screen overflow-x-clip bg-night">
    <SchemaOrg />
    <a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-fg focus:px-5 focus:py-3 focus:font-semibold focus:text-[#07070a]">
      Skip to content
    </a>

    <Navbar />

    <main id="main">
      <HeroSection />
      <MarqueeBand />
      <ProofSection />
      <PlansSection />
      <CoverageSection />
      <FaqSection />
      <ContactSection />
    </main>

    <Footer />

    <div
      ref="progress"
      data-progress
      aria-hidden="true"
      class="pointer-events-none fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-zyra"
      style="transform: scaleX(0)"
    ></div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useHead } from '@unhead/vue'
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'
import HeroSection from './components/sections/HeroSection.vue'
import MarqueeBand from './components/sections/MarqueeBand.vue'
import ProofSection from './components/sections/ProofSection.vue'
import PlansSection from './components/sections/PlansSection.vue'
import CoverageSection from './components/sections/CoverageSection.vue'
import FaqSection from './components/sections/FaqSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
import SchemaOrg from './components/seo/SchemaOrg.vue'
import { initMotion } from './composables/useMotion.js'

useHead({
  htmlAttrs: { lang: 'en' },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { name: 'theme-color', content: '#07070a' },
    { name: 'format-detection', content: 'telephone=no' },
  ],
})

const progress = ref(null)
let dispose = () => {}

onMounted(() => {
  dispose = initMotion()
})

onUnmounted(() => dispose())
</script>
