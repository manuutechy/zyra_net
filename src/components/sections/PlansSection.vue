<template>
  <section id="plans" class="py-24 relative">
    <div class="absolute inset-0 hero-glow opacity-50 pointer-events-none"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <span class="badge">Internet Packages Kisumu</span>
        <div class="glow-line mx-auto my-4"></div>
        <h2 class="section-title">Plans Built for <span class="gradient-text">Every Need</span></h2>
        <p class="section-subtitle">Affordable internet packages in Kisumu with no contracts and no surprises. Pay via M-Pesa.</p>
      </div>

      <!-- Toggle -->
      <div class="flex justify-center mb-12" data-aos="fade-up" data-aos-delay="100">
        <div class="bg-dark-card border border-dark-border rounded-xl p-1 flex gap-1">
          <button
            v-for="period in ['Monthly', 'Annual']"
            :key="period"
            @click="billingPeriod = period"
            :class="[
              'px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300',
              billingPeriod === period
                ? 'bg-brand-gradient text-white shadow-lg'
                : 'text-gray-400 hover:text-white'
            ]"
          >
            {{ period }}
            <span v-if="period === 'Annual'" class="ml-1 text-xs text-orange-300">-20%</span>
          </button>
        </div>
      </div>

      <!-- Plans Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(plan, i) in plans"
          :key="plan.name"
          :class="[
            'card-glass p-8 relative overflow-hidden flex flex-col',
            plan.popular ? 'border-orange-500/50 shadow-[0_0_40px_rgba(249,115,22,0.15)]' : ''
          ]"
          :data-aos="'fade-up'"
          :data-aos-delay="i * 150"
        >
          <!-- Popular badge -->
          <div v-if="plan.popular" class="absolute top-0 right-0">
            <div class="bg-brand-gradient text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl">
              Most Popular
            </div>
          </div>

          <!-- Plan icon -->
          <div
            :class="[
              'w-12 h-12 rounded-xl flex items-center justify-center mb-6',
              plan.popular ? 'bg-brand-gradient' : 'bg-dark-border'
            ]"
          >
            <component :is="plan.icon" class="w-6 h-6 text-white" />
          </div>

          <!-- Plan info -->
          <h3 class="font-heading font-bold text-xl text-white mb-2">{{ plan.name }}</h3>
          <p class="text-gray-400 text-sm mb-6">{{ plan.description }}</p>

          <!-- Price -->
          <div class="mb-6">
            <span class="font-heading font-bold text-5xl text-white">
              KSh {{ billingPeriod === 'Annual' ? plan.annualPrice : plan.monthlyPrice }}
            </span>
            <span class="text-gray-400 text-sm ml-1">/mo</span>
          </div>

          <!-- Speed highlight -->
          <div class="flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-lg px-4 py-2 mb-6">
            <Zap class="w-4 h-4 text-orange-400" />
            <span class="text-orange-400 font-semibold text-sm">{{ plan.speed }}</span>
          </div>

          <!-- Features -->
          <ul class="space-y-3 mb-8 flex-1">
            <li v-for="feature in plan.features" :key="feature" class="flex items-center gap-3 text-sm text-gray-300">
              <Check class="w-4 h-4 text-orange-500 shrink-0" />
              {{ feature }}
            </li>
            <li v-for="miss in plan.missing" :key="miss" class="flex items-center gap-3 text-sm text-gray-600">
              <X class="w-4 h-4 text-gray-700 shrink-0" />
              {{ miss }}
            </li>
          </ul>

          <!-- CTA -->
          <a
            href="#contact"
            :class="plan.popular ? 'btn-primary justify-center' : 'btn-secondary justify-center'"
          >
            Get Started
            <ArrowRight class="w-4 h-4" />
          </a>
        </div>
      </div>

      <!-- Footer note -->
      <p class="text-center text-gray-500 text-sm mt-10" data-aos="fade-up">
        All plans include free installation within Kisumu. <a href="#contact" class="text-orange-400 hover:underline">Contact us</a> to check coverage in your area. Prices subject to M-Pesa convenience.
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Zap, Check, X, ArrowRight, Home, Building2, Rocket } from '@lucide/vue'

const billingPeriod = ref('Monthly')

const plans = [
  {
    name: 'Home Basic',
    description: 'Perfect for light browsing, streaming, and social media. Reliable home WiFi in Kisumu starting at just KSh 1,500.',
    icon: Home,
    speed: '10 Mbps',
    monthlyPrice: '1,500',
    annualPrice: '1,200',
    popular: false,
    features: [
      'Up to 10 Mbps',
      'Unlimited data',
      'Free router',
      'Email support',
    ],
    missing: ['Priority traffic', 'Dedicated IP'],
  },
  {
    name: 'Home Plus',
    description: 'Great for families with multiple devices and 4K streaming. Our most popular home internet package in Kisumu.',
    icon: Rocket,
    speed: '30 Mbps',
    monthlyPrice: '2,500',
    annualPrice: '2,000',
    popular: true,
    features: [
      'Up to 30 Mbps',
      'Unlimited data',
      'Free router + setup',
      '24/7 WhatsApp support',
      'Priority traffic',
    ],
    missing: ['Dedicated IP'],
  },
  {
    name: 'Business Broadband',
    description: 'Enterprise-grade business internet for offices, schools and institutions in Kisumu. Dedicated PPPoE connection.',
    icon: Building2,
    speed: '100 Mbps',
    monthlyPrice: '6,000',
    annualPrice: '4,800',
    popular: false,
    features: [
      'Up to 100 Mbps',
      'Unlimited data',
      'Free router + setup',
      '24/7 phone support',
      'Priority traffic',
      'Dedicated IP',
    ],
    missing: [],
  },
]
</script>
