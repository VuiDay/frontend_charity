import { createApp } from 'vue'
import './style.css'
import App from './App.vue'     
import router from './router'
import PrimeVue from 'primevue/config';
import Lara from './presets/lara';
import { createPinia } from 'pinia'
const pinia = createPinia()

createApp(App).use(router).use(pinia).use(PrimeVue, {
    unstyled: true,
    pt: Lara
}).mount('#app')
