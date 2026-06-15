<template>
  <footer class="bg-dark-card border-t border-dark-border pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <!-- Brand -->
        <div class="md:col-span-2">
          <a href="#hero" class="flex items-center mb-4">
            <img
              src="/zyranet_logo.png"
              alt="Zyra Net"
              class="h-10 w-auto object-contain drop-shadow-[0_0_8px_rgba(249,115,22,0.4)]"
            />
          </a>
          <p class="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
            Kisumu's fastest and most reliable WiFi provider. Connecting homes, businesses, and communities across the lake city.
          </p>
          <div class="flex gap-4">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              :aria-label="social.label"
              class="w-10 h-10 border border-dark-border rounded-lg flex items-center justify-center text-gray-400 hover:border-orange-500 hover:text-orange-400 transition-all duration-300"
            >
              <component :is="social.icon" class="w-4 h-4" />
            </a>
          </div>
        </div>

        <!-- Links -->
        <div>
          <h4 class="font-semibold text-white mb-4">Quick Links</h4>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.href">
              <a :href="link.href" class="text-gray-400 hover:text-orange-400 text-sm transition-colors flex items-center gap-2">
                <ChevronRight class="w-3 h-3" />
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="font-semibold text-white mb-4">Contact Us</h4>
          <ul class="space-y-3">
            <li class="flex items-start gap-3 text-sm text-gray-400">
              <MapPin class="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
              <span>Kisumu CBD, Oginga Odinga St,<br>Kisumu, Kenya</span>
            </li>
            <li class="flex items-center gap-3 text-sm text-gray-400">
              <Phone class="w-4 h-4 text-orange-500 shrink-0" />
              <a href="tel:+254700000000" class="hover:text-orange-400 transition-colors">+254 700 000 000</a>
            </li>
            <li class="flex items-center gap-3 text-sm text-gray-400">
              <Mail class="w-4 h-4 text-orange-500 shrink-0" />
              <a href="mailto:info@zyranet.co.ke" class="hover:text-orange-400 transition-colors">info@zyranet.co.ke</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-dark-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-gray-500 text-sm">
          © {{ new Date().getFullYear() }} Zyra Net. All rights reserved.
        </p>
        <div class="flex items-center gap-2 text-gray-500 text-sm">
          <span class="orange-dot"></span>
          <span>Network Status: <span class="text-green-400 font-medium">All Systems Operational</span></span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { MapPin, Phone, Mail, ChevronRight, Globe, MessageCircle, Share2 } from '@lucide/vue'

const socials = [
  { label: 'Facebook', href: '#', icon: Globe },
  { label: 'Twitter/X', href: '#', icon: Share2 },
  { label: 'WhatsApp', href: '#', icon: MessageCircle },
]

const quickLinks = [
  { href: '#plans', label: 'Internet Plans' },
  { href: '#why-us', label: 'Why Zyra Net' },
  { href: '#coverage', label: 'Coverage Area' },
  { href: '#contact', label: 'Get Connected' },
]
</script>
