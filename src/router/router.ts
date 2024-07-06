import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@pages/home.vue'

import Life from '@pages/life/index.vue'
import LifeServer from '@pages/life/server.vue'
import LifeActive from '@pages/life/activity.vue';
import LifeEducate from '@pages/life/educate.vue';
import LifeStart from '@pages/life/start.vue';
const routes = [
  { path: '/', component: HomeView },
  { path: '/life', component: Life },
  { path: '/life_server', component: LifeServer,meta:{back:true}},
  { path: '/life_active', component: LifeActive,meta:{back:true} },
  { path: '/life_educate', component: LifeEducate,meta:{back:true,educate:true} },
  { path: '/life_start', component: LifeStart,meta:{back:true} },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router