import { createApp } from 'vue'
import { createUnhead } from 'unhead'
import { headSymbol } from '@unhead/vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

// Router
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: () => import('./App.vue') },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  },
})

// Init AOS animations
AOS.init({
  duration: 700,
  easing: 'ease-out-cubic',
  once: true,
  offset: 80,
})

// Create @unhead/vue head manager (v3 API)
const head = createUnhead()

const app = createApp(App)
app.use(router)

// Provide head instance to Vue's DI system for useHead() composables
app.provide(headSymbol, head)

app.mount('#app')
