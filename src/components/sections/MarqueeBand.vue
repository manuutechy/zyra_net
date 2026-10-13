<template>
  <div aria-hidden="true" class="marquee select-none overflow-hidden border-y border-line py-7">
    <div data-marquee-track class="flex w-max">
      <div v-for="copy in 2" :key="copy" class="flex shrink-0 items-center">
        <span
          v-for="word in words"
          :key="word"
          class="display flex items-center whitespace-nowrap px-8 text-[clamp(2.5rem,6vw,5rem)] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.3)]"
        >
          {{ word }}
          <span class="ml-16 inline-block h-2 w-2 rounded-full bg-[rgba(255,255,255,0.3)]"></span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
const words = ['Fast', 'Reliable', 'No throttling', 'Maseno', 'Pay with M-Pesa', '24/7 support']
</script>
