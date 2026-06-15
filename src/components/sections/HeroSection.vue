<template>
  <section id="hero" class="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

    <!-- ═══ LAYERED BACKGROUND ═══ -->
    <!-- Base dark -->
    <div class="absolute inset-0 bg-[#0A0A0A]"></div>

    <!-- Subtle grid -->
    <div class="absolute inset-0 grid-bg opacity-60"></div>

    <!-- Central radial glow — very subtle -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
      style="background: radial-gradient(circle, rgba(249,115,22,0.07) 0%, rgba(234,88,12,0.03) 40%, transparent 70%);">
    </div>

    <!-- Top-left amber accent -->
    <div class="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
      style="background: radial-gradient(circle, rgba(251,146,60,0.12) 0%, transparent 60%);">
    </div>

    <!-- Bottom-right warm glow -->
    <div class="absolute -bottom-40 -right-20 w-[600px] h-[600px] rounded-full pointer-events-none"
      style="background: radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 60%);">
    </div>

    <!-- Floating orbs -->
    <div class="absolute top-24 right-16 w-3 h-3 bg-orange-400 rounded-full opacity-60 animate-float blur-[1px]"></div>
    <div class="absolute top-40 right-40 w-1.5 h-1.5 bg-orange-300 rounded-full opacity-40 animate-float" style="animation-delay:1.5s"></div>
    <div class="absolute bottom-32 left-20 w-2 h-2 bg-orange-500 rounded-full opacity-50 animate-float" style="animation-delay:2s"></div>
    <div class="absolute bottom-48 left-48 w-1 h-1 bg-amber-400 rounded-full opacity-40 animate-float" style="animation-delay:0.8s"></div>
    <div class="absolute top-1/3 left-12 w-2.5 h-2.5 bg-orange-400 rounded-full opacity-30 animate-float" style="animation-delay:3s"></div>
    <div class="absolute top-1/4 right-24 w-1 h-1 bg-amber-300 rounded-full opacity-50 animate-float" style="animation-delay:1s"></div>
    <div class="absolute bottom-1/4 right-16 w-2 h-2 bg-orange-300 rounded-full opacity-35 animate-float" style="animation-delay:2.5s"></div>



    <!-- ═══ MAIN CONTENT — centred column ═══ -->
    <div class="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto pt-8">

      <!-- SEO: Primary h1 — screen-reader only, does not affect design -->
      <h1 class="sr-only">Zyra Net — Internet Service Provider in Kisumu, Kenya. Fast, reliable and affordable home WiFi, business broadband, hotspot and school internet. Pay via M-Pesa.</h1>


      <!-- ═══ LOGO — centred hero element ═══ -->
      <div class="relative mb-0" data-aos="zoom-in" data-aos-delay="100">
        <!-- Logo image -->
        <img
          src="/zyranet_logo.png"
          alt="Zyra Net Logo"
          class="relative z-10 h-48 md:h-56 lg:h-64 w-auto object-contain drop-shadow-[0_0_20px_rgba(249,115,22,0.25)] select-none"
          draggable="false"
        />
      </div>

      <!-- Tagline -->
      <p
        class="text-gray-400 text-base md:text-lg font-medium tracking-widest uppercase mb-4"
        data-aos="fade-up" data-aos-delay="180"
      >
        Fast &nbsp;·&nbsp; Reliable &nbsp;·&nbsp; Connected
      </p>

      <!-- Headline -->
      <h1
        class="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6"
        data-aos="fade-up" data-aos-delay="220"
      >
        Internet That
        <span class="block" style="background: linear-gradient(135deg, #FB923C 0%, #F97316 40%, #EA580C 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
          Just Works.
        </span>
      </h1>

      <!-- Sub-headline -->
      <p
        class="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
        data-aos="fade-up" data-aos-delay="280"
      >
        Blazing-fast WiFi for homes and businesses across Kisumu.<br class="hidden md:block">
        No buffering. No excuses. No surprises.
      </p>

      <!-- CTA Buttons -->
      <div
        class="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16"
        data-aos="fade-up" data-aos-delay="340"
      >
        <a href="#plans" class="btn-primary text-base px-9 py-4 text-base shadow-[0_0_30px_rgba(249,115,22,0.35)]">
          <Zap class="w-5 h-5" />
          View Plans
        </a>
        <a href="#contact" class="btn-secondary text-base px-9 py-4">
          <Phone class="w-5 h-5" />
          Talk to Us
        </a>
      </div>

      <!-- Trust pills row -->
      <div
        class="flex flex-wrap items-center justify-center gap-3"
        data-aos="fade-up" data-aos-delay="400"
      >
        <div
          v-for="trust in trustItems"
          :key="trust.label"
          class="flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-medium text-gray-300 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_16px_rgba(249,115,22,0.15)]"
          style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); backdrop-filter: blur(8px);"
        >
          <component :is="trust.icon" class="w-4 h-4 text-orange-400 shrink-0" />
          {{ trust.label }}
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600 text-xs animate-bounce">
      <ChevronDown class="w-5 h-5" />
    </div>
  </section>
</template>

<script setup>
import { Zap, Phone, ChevronDown, Shield, Clock, Headphones } from '@lucide/vue'
import { useSeo } from '@/composables/useSeo.js'

// ── Page-level SEO meta (highest-priority keywords) ───────────────────────
useSeo({
  title: 'Fast WiFi Internet Provider in Kisumu, Kenya',
  description:
    'Zyra Net provides fast, reliable and affordable internet in Kisumu, Kenya. Home WiFi, business broadband, hotspot and school internet packages. Pay via M-Pesa. Get connected today.',
  keywords:
    'internet provider Kisumu, WiFi Kisumu, ISP Kisumu Kenya, fast internet Kisumu, Zyra Net, home internet Kisumu, business broadband Kisumu, hotspot WiFi Kisumu, school internet Kenya, affordable WiFi Kisumu, wireless internet Kisumu, internet packages Kisumu, fiber internet Kisumu, reliable internet Kisumu',
  url: 'https://zyranet.co.ke',
  type: 'website',
})

const trustItems = [
  { icon: Shield, label: 'No hidden fees' },
  { icon: Clock, label: 'Setup in 24 hours' },
  { icon: Headphones, label: '24/7 support' },
]
</script>
