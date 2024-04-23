import './assets/styles/main.scss'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import { autoSetToken } from '@/utils/auth.js'
autoSetToken()

const app = createApp(App)

app.use(router)

app.mount('#app')
