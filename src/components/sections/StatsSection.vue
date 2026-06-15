<template>
  <section class="py-16 border-y border-dark-border section-alt">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div
          v-for="(stat, i) in stats"
          :key="stat.label"
          class="text-center"
          :data-aos="'fade-up'"
          :data-aos-delay="i * 100"
        >
          <div class="font-heading font-bold text-4xl md:text-5xl gradient-text mb-2">
            {{ stat.value }}
          </div>
          <div class="text-gray-400 text-sm">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: '2,500+', label: 'Active Subscribers' },
  { value: '100Mbps', label: 'Max Speed' },
  { value: '99.9%', label: 'Network Uptime' },
  { value: '24/7', label: 'Customer Support' },
]
</script>
