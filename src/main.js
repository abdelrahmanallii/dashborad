import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@keenthemes/ktui/dist/ktui.js'
import './assets/metronic/core/index'
import './assets/metronic/app/layouts/demo1'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
