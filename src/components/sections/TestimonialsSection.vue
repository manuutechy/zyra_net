<template>
  <section class="py-24 section-alt">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <span class="badge">Testimonials</span>
        <div class="glow-line mx-auto my-4"></div>
        <h2 class="section-title">Loved by Kisumu</h2>
        <p class="section-subtitle">Don't just take our word for it.</p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(testimonial, i) in testimonials"
          :key="testimonial.name"
          class="card-glass p-6 flex flex-col"
          :data-aos="'fade-up'"
          :data-aos-delay="i * 100"
        >
          <!-- Stars -->
          <div class="flex gap-1 mb-4">
            <Star v-for="n in 5" :key="n" class="w-4 h-4 text-orange-500 fill-orange-500" />
          </div>

          <!-- Quote -->
          <p class="text-gray-300 text-sm leading-relaxed flex-1 mb-6">
            "{{ testimonial.quote }}"
          </p>

          <!-- Author -->
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-brand-gradient rounded-full flex items-center justify-center text-white font-bold text-sm">
              {{ testimonial.name.charAt(0) }}
            </div>
            <div>
              <div class="text-white font-semibold text-sm">{{ testimonial.name }}</div>
              <div class="text-gray-500 text-xs">{{ testimonial.role }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Star } from '@lucide/vue'

const testimonials = [
  {
    name: 'Achieng Otieno',
    role: 'Home User, Milimani',
    quote: "Switched from a mobile data bundle and I'm never going back. Zyra Net is lightning fast and hasn't gone down once in 6 months.",
  },
  {
    name: 'Brian Omondi',
    role: 'Business Owner, CBD',
    quote: "My shop runs on Zyra Net's business plan. The uptime is incredible and whenever I have an issue, their team picks up the phone immediately.",
  },
  {
    name: 'Lillian Adhiambo',
    role: 'Student, Mamboleo',
    quote: "As a student, the Home Basic plan is perfect for my budget. Fast enough for video calls, assignments, and Netflix. Totally worth it.",
  },
  {
    name: 'Kevin Ochieng',
    role: 'Developer, Kondele',
    quote: "I upload large files daily for work. The Business plan gives me consistent 100 Mbps — no throttling, no nonsense. Love it.",
  },
  {
    name: 'Faith Akelo',
    role: 'Nurse, Nyalenda',
    quote: "Very reliable internet at home. I can video call my family abroad clearly. The support team is also super helpful and friendly.",
  },
  {
    name: 'James Owino',
    role: 'Café Owner, Kibuye',
    quote: "My cyber café customers love the speed. Switched all 15 computers to Zyra Net and they've never complained since. Great value.",
  },
]
</script>
