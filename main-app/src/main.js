// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import microApp from '@micro-zoe/micro-app'

const app = createApp(App)


microApp.start()

app.use(router)

app.mount('#app')
