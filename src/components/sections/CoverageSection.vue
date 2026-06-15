<template>
  <section id="coverage" class="py-24 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Left: Text -->
        <div data-aos="fade-right">
          <span class="badge">Coverage</span>
          <div class="glow-line my-4"></div>
          <h2 class="section-title mb-6">We Cover <span class="gradient-text">All of Kisumu</span></h2>
          <p class="text-gray-400 leading-relaxed mb-8">
            Our wireless network spans across Kisumu County, with continuous expansion underway. 
            If you're not in our coverage zone yet, we want to hear from you!
          </p>

          <!-- Areas list -->
          <div class="grid grid-cols-2 gap-3 mb-8">
            <div
              v-for="area in areas"
              :key="area"
              class="flex items-center gap-3 bg-dark-card border border-dark-border rounded-lg px-4 py-3 text-sm text-gray-300 hover:border-orange-500/40 transition-colors"
            >
              <MapPin class="w-4 h-4 text-orange-500 shrink-0" />
              {{ area }}
            </div>
          </div>

          <a href="#contact" class="btn-primary">
            Check My Location
            <ArrowRight class="w-4 h-4" />
          </a>
        </div>

        <!-- Right: Map Visual -->
        <div class="relative flex justify-center" data-aos="fade-left">
          <div class="relative w-full max-w-md">
            <!-- Stylized map card -->
            <div class="bg-dark-card border border-dark-border rounded-3xl overflow-hidden aspect-square flex items-center justify-center relative">
              <!-- Grid overlay -->
              <div class="absolute inset-0 grid-bg opacity-50"></div>

              <!-- Pulsing coverage circles -->
              <div class="relative z-10 flex flex-col items-center">
                <div class="relative">
                  <div class="w-24 h-24 bg-orange-500/20 rounded-full flex items-center justify-center">
                    <div class="w-16 h-16 bg-orange-500/30 rounded-full flex items-center justify-center">
                      <div class="w-10 h-10 bg-brand-gradient rounded-full flex items-center justify-center">
                        <MapPin class="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <!-- Pulse rings -->
                  <div class="absolute inset-0 rounded-full border border-orange-500/30 animate-ping" style="animation-duration: 2s;"></div>
                  <div class="absolute -inset-8 rounded-full border border-orange-500/15 animate-ping" style="animation-duration: 3s; animation-delay: 0.5s;"></div>
                  <div class="absolute -inset-16 rounded-full border border-orange-500/10 animate-ping" style="animation-duration: 4s; animation-delay: 1s;"></div>
                </div>
                <div class="mt-6 text-center">
                  <div class="font-heading font-bold text-2xl text-white">Kisumu, Kenya</div>
                  <div class="text-gray-400 text-sm mt-1">Active Coverage Zone</div>
                </div>
              </div>

              <!-- Coverage stats overlay -->
              <div class="absolute bottom-6 left-6 right-6 bg-dark/80 backdrop-blur border border-dark-border rounded-xl px-4 py-3 flex justify-between">
                <div class="text-center">
                  <div class="font-bold text-orange-500">15+</div>
                  <div class="text-gray-400 text-xs">Areas Covered</div>
                </div>
                <div class="w-px bg-dark-border"></div>
                <div class="text-center">
                  <div class="font-bold text-orange-500">50km²</div>
                  <div class="text-gray-400 text-xs">Coverage Radius</div>
                </div>
                <div class="w-px bg-dark-border"></div>
                <div class="text-center">
                  <div class="font-bold text-orange-500">Growing</div>
                  <div class="text-gray-400 text-xs">Every Month</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { MapPin, ArrowRight } from '@lucide/vue'

const areas = [
  'Kisumu CBD',
  'Milimani',
  'Mamboleo',
  'Nyalenda',
  'Kondele',
  'Kaloleni',
  'Manyatta',
  'Migosi',
  'Kibuye',
  'Riat',
  'Tom Mboya',
  'Obunga',
]
</script>
