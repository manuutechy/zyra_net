<template>
  <section id="contact" class="py-24 relative">
    <div class="absolute inset-0 hero-glow opacity-30 pointer-events-none"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <span class="badge">Get Connected</span>
        <div class="glow-line mx-auto my-4"></div>
        <h2 class="section-title">Start Your Connection <span class="gradient-text">Today</span></h2>
        <p class="section-subtitle">Fill in the form below and our team will reach out within 2 hours.</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Form -->
        <div class="card-glass p-8" data-aos="fade-right">
          <form @submit.prevent="handleSubmit" class="space-y-5">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label class="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                <input
                  v-model="form.name"
                  type="text"
                  placeholder="e.g. Achieng Otieno"
                  required
                  class="input-field"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                <input
                  v-model="form.phone"
                  type="tel"
                  placeholder="+254 700 000 000"
                  required
                  class="input-field"
                />
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
              <input
                v-model="form.email"
                type="email"
                placeholder="you@example.com"
                class="input-field"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">Location / Area</label>
              <input
                v-model="form.location"
                type="text"
                placeholder="e.g. Milimani, Kisumu"
                required
                class="input-field"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">Plan of Interest</label>
              <select v-model="form.plan" class="input-field">
                <option value="">Select a plan...</option>
                <option value="home_basic">Home Basic — KSh 1,500/mo</option>
                <option value="home_plus">Home Plus — KSh 2,500/mo</option>
                <option value="business">Business — KSh 6,000/mo</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">Message (Optional)</label>
              <textarea
                v-model="form.message"
                rows="3"
                placeholder="Any specific requirements or questions?"
                class="input-field resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="submitting"
              class="btn-primary w-full justify-center text-base py-4"
            >
              <span v-if="!submitting">
                <Send class="w-5 h-5" />
                Send Request
              </span>
              <span v-else class="flex items-center gap-2">
                <svg class="animate-spin w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                </svg>
                Sending...
              </span>
            </button>

            <!-- Success message -->
            <Transition name="fade">
              <div v-if="submitted" class="bg-green-500/10 border border-green-500/30 text-green-400 rounded-xl px-4 py-3 text-sm flex items-center gap-2">
                <CheckCircle class="w-5 h-5" />
                Thank you! We'll contact you within 2 hours.
              </div>
            </Transition>
          </form>
        </div>

        <!-- Contact info -->
        <div class="flex flex-col gap-6" data-aos="fade-left">
          <!-- Info cards -->
          <div class="card-glass p-6 flex gap-4 items-start">
            <div class="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center shrink-0">
              <Phone class="w-6 h-6 text-orange-500" />
            </div>
            <div>
              <h4 class="font-semibold text-white mb-1">Call or WhatsApp</h4>
              <a href="tel:+254700000000" class="text-gray-400 hover:text-orange-400 transition-colors text-sm">+254 700 000 000</a>
              <p class="text-gray-500 text-xs mt-1">Mon–Sat: 8am–8pm | Sun: 10am–5pm</p>
            </div>
          </div>

          <div class="card-glass p-6 flex gap-4 items-start">
            <div class="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center shrink-0">
              <Mail class="w-6 h-6 text-orange-500" />
            </div>
            <div>
              <h4 class="font-semibold text-white mb-1">Email Us</h4>
              <a href="mailto:info@zyranet.co.ke" class="text-gray-400 hover:text-orange-400 transition-colors text-sm">info@zyranet.co.ke</a>
              <p class="text-gray-500 text-xs mt-1">We reply within 1 business hour</p>
            </div>
          </div>

          <div class="card-glass p-6 flex gap-4 items-start">
            <div class="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center shrink-0">
              <MapPin class="w-6 h-6 text-orange-500" />
            </div>
            <div>
              <h4 class="font-semibold text-white mb-1">Visit Our Office</h4>
              <p class="text-gray-400 text-sm">Oginga Odinga Street, Kisumu CBD</p>
              <p class="text-gray-500 text-xs mt-1">Open Mon–Fri: 8am–6pm</p>
            </div>
          </div>

          <!-- Why connect CTA card -->
          <div class="bg-brand-gradient rounded-2xl p-6">
            <h4 class="font-heading font-bold text-white text-xl mb-3">Fast. Reliable. Connected.</h4>
            <ul class="space-y-2 text-orange-100/90 text-sm">
              <li class="flex items-center gap-2"><Check class="w-4 h-4" /> Same-day or next-day installation</li>
              <li class="flex items-center gap-2"><Check class="w-4 h-4" /> Month-to-month, no lock-in</li>
              <li class="flex items-center gap-2"><Check class="w-4 h-4" /> M-Pesa payments accepted</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Send, Phone, Mail, MapPin, CheckCircle, Check } from '@lucide/vue'

const form = ref({
  name: '',
  phone: '',
  email: '',
  location: '',
  plan: '',
  message: '',
})

const submitting = ref(false)
const submitted = ref(false)

const handleSubmit = async () => {
  submitting.value = true
  await new Promise(resolve => setTimeout(resolve, 1500))
  submitting.value = false
  submitted.value = true
  form.value = { name: '', phone: '', email: '', location: '', plan: '', message: '' }
  setTimeout(() => { submitted.value = false }, 6000)
}
</script>

<style scoped>
.input-field {
  @apply w-full bg-dark border border-dark-border rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30 transition-all duration-200;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
