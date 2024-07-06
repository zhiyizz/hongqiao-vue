import { createApp } from 'vue'
import router from './router/router'
import App from './App.vue'
import AOS from 'aos';
import 'normalize.css/normalize.css';
import  '@styles/global.scss';
import 'aos/dist/aos.css';

const  appAos = new AOS.init({ duration: 1200 })



createApp(App).use(appAos!).use(router).mount('#app')
