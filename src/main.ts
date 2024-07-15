import { createApp } from 'vue'
import router from './router/router'
import App from './App.vue'
import AOS from 'aos';
import 'normalize.css/normalize.css';
import  '@styles/global.scss';

import 'element-plus/dist/index.css'

AOS.init({duration:1200})

 createApp(App).use(router).mount('#app')
