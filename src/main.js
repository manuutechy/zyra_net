import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './style.css'
import App from './App.vue'

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
  }
})

// Init AOS
AOS.init({
  duration: 700,
  easing: 'ease-out-cubic',
  once: true,
  offset: 80,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
