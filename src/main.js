import { createApp } from 'vue'
import Vuex from 'vuex'
import router from './router'
import './style.css'
import App from './App.vue'

createApp(App).use(Vuex).use(router).mount('#app')
