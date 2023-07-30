import { createApp } from 'vue'
import router from './router'
import VueTheMask from 'vue-the-mask'
import './assets/css/style.css'
import App from './App.vue'
import store from "./store/index.js";

createApp(App)
    .use(VueTheMask)
    .use(router)
    .use(store)
    .mount('#app')
