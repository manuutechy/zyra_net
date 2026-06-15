<template>
  <section id="why-us" class="py-24 section-alt">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <span class="badge">Why Choose Us</span>
        <div class="glow-line mx-auto my-4"></div>
        <h2 class="section-title">Built for Kisumu. <br><span class="gradient-text">Built to Last.</span></h2>
        <p class="section-subtitle">We're not just an ISP — we're your connectivity partner.</p>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(feature, i) in features"
          :key="feature.title"
          class="card-glass p-6 group"
          :data-aos="'fade-up'"
          :data-aos-delay="i * 100"
        >
          <div class="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-gradient transition-all duration-300">
            <component :is="feature.icon" class="w-6 h-6 text-orange-400 group-hover:text-white transition-colors duration-300" />
          </div>
          <h3 class="font-heading font-semibold text-lg text-white mb-2">{{ feature.title }}</h3>
          <p class="text-gray-400 text-sm leading-relaxed">{{ feature.description }}</p>
        </div>
      </div>

      <!-- Bottom CTA banner -->
      <div
        class="mt-16 bg-brand-gradient rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        data-aos="fade-up"
      >
        <div>
          <h3 class="font-heading font-bold text-2xl text-white mb-2">Ready to make the switch?</h3>
          <p class="text-orange-100/80">Get connected in as little as 24 hours.</p>
        </div>
        <a href="#contact" class="bg-white text-orange-600 font-bold px-8 py-4 rounded-xl hover:bg-orange-50 transition-colors duration-300 whitespace-nowrap flex items-center gap-2">
          Start Now
          <ArrowRight class="w-5 h-5" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Zap, Shield, Headphones, MapPin, RefreshCw, Wifi, ArrowRight } from '@lucide/vue'

const features = [
  {
    icon: Zap,
    title: 'Blazing Fast Speeds',
    description: 'Experience internet up to 100 Mbps with our fibre-backed wireless infrastructure across Kisumu.',
  },
  {
    icon: Shield,
    title: 'Rock-Solid Reliability',
    description: '99.9% uptime guaranteed. Our redundant network means you stay connected even during peak hours.',
  },
  {
    icon: Headphones,
    title: '24/7 Local Support',
    description: 'Real humans, based in Kisumu. Reach us on WhatsApp, phone, or email any time of day.',
  },
  {
    icon: MapPin,
    title: 'Local Coverage',
    description: 'Covering Kisumu CBD, Milimani, Mamboleo, Nyalenda, and beyond. Expanding every month.',
  },
  {
    icon: RefreshCw,
    title: 'No Throttling',
    description: 'Your speed is your speed — all day, every day. No hidden throttling, ever.',
  },
  {
    icon: Wifi,
    title: 'Easy Self-Setup',
    description: 'Our technicians handle everything. We deliver, install, and configure your router in one visit.',
  },
]
</script>
