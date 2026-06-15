<template>
  <div class="site-wrapper">

    <!-- ═══ GLOBAL AMBIENT BACKGROUND — fixed, covers entire page ═══ -->
    <div class="global-bg" aria-hidden="true">
      <!-- Base noise texture -->
      <div class="noise-overlay"></div>

      <!-- Large drifting blobs -->
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
      <div class="blob blob-3"></div>
      <div class="blob blob-4"></div>

      <!-- Crisp line grid -->
      <div class="line-grid"></div>

      <!-- Faint horizontal scan line sweep -->
      <div class="scan-line"></div>
    </div>

    <!-- Navbar -->
    <Navbar />

    <!-- Sections -->
    <main class="relative z-10">
      <HeroSection />
      <StatsSection />
      <PlansSection />
      <WhyUsSection />
      <CoverageSection />
      <TestimonialsSection />
      <ContactSection />
    </main>

    <!-- Footer -->
    <Footer class="relative z-10" />
  </div>
</template>

<script setup>
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'
import HeroSection from './components/sections/HeroSection.vue'
import StatsSection from './components/sections/StatsSection.vue'
import PlansSection from './components/sections/PlansSection.vue'
import WhyUsSection from './components/sections/WhyUsSection.vue'
import CoverageSection from './components/sections/CoverageSection.vue'
import TestimonialsSection from './components/sections/TestimonialsSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
</script>

<style scoped>
.site-wrapper {
  position: relative;
  min-height: 100vh;
  background: #0A0A0A;
  overflow-x: hidden;
}

/* ── Fixed ambient canvas behind everything ── */
.global-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

/* Noise grain overlay for premium texture */
.noise-overlay {
  position: absolute;
  inset: 0;
  opacity: 0.035;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  background-size: 200px 200px;
}

/* Crisp line grid */
.line-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(249,115,22,0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(249,115,22,0.06) 1px, transparent 1px);
  background-size: 60px 60px;
  /* Vignette — fades grid at edges so it doesn't feel harsh */
  mask-image: radial-gradient(ellipse 85% 85% at 50% 50%, black 40%, transparent 100%);
  -webkit-mask-image: radial-gradient(ellipse 85% 85% at 50% 50%, black 40%, transparent 100%);
}

/* Slow drifting blobs */
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  animation: drift linear infinite;
}

.blob-1 {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(249,115,22,0.13), transparent 70%);
  top: -10%;
  left: -10%;
  animation-duration: 40s;
  animation-delay: 0s;
}

.blob-2 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(234,88,12,0.09), transparent 70%);
  top: 30%;
  right: -15%;
  animation-duration: 55s;
  animation-delay: -15s;
}

.blob-3 {
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, rgba(251,146,60,0.07), transparent 70%);
  bottom: 10%;
  left: 20%;
  animation-duration: 48s;
  animation-delay: -25s;
}

.blob-4 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(249,115,22,0.08), transparent 70%);
  top: 60%;
  left: -5%;
  animation-duration: 35s;
  animation-delay: -8s;
}

/* Horizontal scan sweep */
.scan-line {
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(249,115,22,0.15), rgba(249,115,22,0.3), rgba(249,115,22,0.15), transparent);
  animation: scan 12s ease-in-out infinite;
  top: 0;
}

@keyframes drift {
  0%   { transform: translate(0, 0) scale(1); }
  25%  { transform: translate(4%, 6%) scale(1.05); }
  50%  { transform: translate(-3%, 10%) scale(0.97); }
  75%  { transform: translate(6%, 3%) scale(1.03); }
  100% { transform: translate(0, 0) scale(1); }
}

@keyframes scan {
  0%   { top: -2px; opacity: 0; }
  5%   { opacity: 1; }
  95%  { opacity: 0.6; }
  100% { top: 100vh; opacity: 0; }
}
</style>
