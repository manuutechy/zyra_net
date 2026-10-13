import { createApp } from 'vue'
import { createUnhead } from 'unhead'
import { headSymbol } from '@unhead/vue'
import './style.css'
import App from './App.vue'

const head = createUnhead()
const app = createApp(App)
app.provide(headSymbol, head)
app.mount('#app')
