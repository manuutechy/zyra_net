<template>
  <section id="contact" aria-labelledby="contact-heading" class="bg-night">
    <div class="hairline" aria-hidden="true"></div>

    <div class="mx-auto grid max-w-content gap-x-16 gap-y-12 px-6 pb-24 pt-16 lg:grid-cols-12 lg:px-8 lg:pb-36 lg:pt-24">
      <div class="lg:col-span-5">
        <h2 id="contact-heading" data-reveal-lines class="display text-[clamp(2.25rem,4.6vw,3.75rem)]">
          Get connected today.
        </h2>
        <p class="mt-6 max-w-[40ch] text-[1.1875rem] leading-[1.7] text-dim">
          Send us your details and we will confirm coverage at your hostel, estate or building and book your
          installation. We reply within the hour on business days.
        </p>
        <dl class="mt-10 space-y-6">
          <div>
            <dt class="tag">Email</dt>
            <dd class="mt-1">
              <a :href="`mailto:${email}`" class="text-[1.25rem] font-semibold underline underline-offset-[6px] decoration-1 hover:decoration-2">{{ email }}</a>
            </dd>
          </div>
          <div>
            <dt class="tag">Support</dt>
            <dd class="mt-1 text-[1.0625rem] text-dim">24/7 online support for every customer</dd>
          </div>
        </dl>
      </div>

      <form class="lg:col-span-7" @submit.prevent="handleSubmit">
        <div class="grid gap-5 sm:grid-cols-2">
          <label class="block">
            <span class="field-label">Full name</span>
            <input v-model="form.name" type="text" required autocomplete="name" class="field" />
          </label>
          <label class="block">
            <span class="field-label">Phone number</span>
            <input v-model="form.phone" type="tel" required autocomplete="tel" placeholder="+254" class="field" />
          </label>
        </div>

        <label class="mt-5 block">
          <span class="field-label">Hostel, estate or building in Maseno</span>
          <input v-model="lead.location" type="text" required placeholder="e.g. name of your hostel" class="field" />
        </label>

        <label class="mt-5 block">
          <span class="field-label">What are you after?</span>
          <select v-model="lead.plan" class="field">
            <option value="">Select an option</option>
            <option value="students">Student or hostel WiFi (prepaid)</option>
            <option v-for="plan in plans" :key="plan.id" :value="plan.id">
              {{ plan.name }}: KSh {{ plan.monthly }}/mo
            </option>
          </select>
        </label>

        <label class="mt-5 block">
          <span class="field-label">Message (optional)</span>
          <textarea v-model="form.message" rows="3" class="field resize-none"></textarea>
        </label>

        <button type="submit" class="btn-zyra mt-8 w-full sm:w-auto" data-magnetic>Send request by email</button>

        <p v-if="sent" role="status" class="mt-5 max-w-[60ch] text-[1rem] text-dim">
          Your email app should now be open with your request ready to send. If it didn’t open, write to
          <a :href="`mailto:${email}`" class="text-fg underline underline-offset-4">{{ email }}</a>
          with your name, phone number and location and we will reply within the hour.
        </p>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { email, plans } from '@/data/site.js'
import { lead } from '@/composables/useLead.js'

const form = ref({ name: '', phone: '', message: '' })
const sent = ref(false)

const planLabel = () => {
  if (!lead.plan) return 'Not specified'
  if (lead.plan === 'students') return 'Student or hostel WiFi (prepaid)'
  const plan = plans.find((item) => item.id === lead.plan)
  return plan ? `${plan.name} (KSh ${plan.monthly}/mo)` : lead.plan
}

const handleSubmit = () => {
  const body = [
    `Name: ${form.value.name}`,
    `Phone: ${form.value.phone}`,
    `Location in Maseno: ${lead.location}`,
    `Interested in: ${planLabel()}`,
    form.value.message ? `Message: ${form.value.message}` : '',
  ]
    .filter(Boolean)
    .join('\n')

  const subject = `WiFi request from ${form.value.name || 'a new customer'} (Maseno)`
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  sent.value = true
}
</script>

<style scoped>
.field-label {
  @apply mb-2 block text-[0.875rem] font-medium text-dim;
}

.field {
  @apply w-full rounded-2xl border border-line bg-transparent px-4 py-3.5 text-[1rem] text-fg placeholder-[#6f6f76] transition-colors duration-200 focus:border-zyra focus:outline-none;
}

select.field option {
  background: #07070a;
  color: #f3f3f5;
}
</style>
