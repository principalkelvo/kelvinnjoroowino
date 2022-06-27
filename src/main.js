import { createApp } from 'vue'
import App from './App.vue'

import router from '@/router'


import VueTestimonials from "vue-testimonials"
import 'vue-testimonials/dist/style.css'

import store from '@/store'

createApp(App)
.use(store)
.use(router)
.use(VueTestimonials)
.mount('#app')
