import { createApp } from 'vue'
import './style.css'
import Admin from './Admin.vue'
import App from './App.vue'
import router from './Router/Router'
import { createPinia } from 'pinia'
import pago from './pago.vue'
import estadistica from './estadistica.vue'
import postal from './postal.vue'
import login from './login.vue'
import register from './register.vue'
const pinia = createPinia()
createApp(App).use(pinia).use(router).mount('#app')



