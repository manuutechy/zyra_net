<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      scrolled ? 'bg-dark/95 backdrop-blur-md border-b border-dark-border shadow-xl' : 'bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo -->
        <a href="#hero" class="flex items-center group">
          <img
            src="/zyranet_logo.png"
            alt="Zyra Net"
            class="h-9 w-auto object-contain drop-shadow-[0_0_8px_rgba(249,115,22,0.4)] group-hover:drop-shadow-[0_0_14px_rgba(249,115,22,0.7)] transition-all duration-300"
          />
        </a>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-8">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200 relative group"
          >
            {{ link.label }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        <!-- CTA -->
        <div class="hidden md:flex items-center gap-4">
          <a href="tel:+254700000000" class="text-gray-400 hover:text-orange-400 text-sm font-medium transition-colors flex items-center gap-2">
            <Phone class="w-4 h-4" />
            +254 700 000 000
          </a>
          <a href="#plans" class="btn-primary text-sm py-2.5 px-5">
            Get Connected
            <ArrowRight class="w-4 h-4" />
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileOpen = !mobileOpen"
          class="md:hidden text-gray-400 hover:text-white transition-colors"
        >
          <Menu v-if="!mobileOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition-all duration-300"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="mobileOpen" class="md:hidden bg-dark-card border-t border-dark-border px-4 py-6 space-y-4">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          @click="mobileOpen = false"
          class="block text-gray-400 hover:text-orange-400 font-medium py-2 transition-colors"
        >
          {{ link.label }}
        </a>
        <a href="#plans" @click="mobileOpen = false" class="btn-primary w-full justify-center">
          Get Connected
        </a>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Phone, ArrowRight, Menu, X } from '@lucide/vue'

const scrolled = ref(false)
const mobileOpen = ref(false)

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#plans', label: 'Plans' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#coverage', label: 'Coverage' },
  { href: '#contact', label: 'Contact' },
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>
