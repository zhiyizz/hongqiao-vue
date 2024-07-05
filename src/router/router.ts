import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@pages/home.vue'

import Life from '@pages/life/index.vue'

const routes = [
  { path: '/', component: HomeView, meta: { transition: 'slide-left' }, },
  { path: '/life', component: Life, meta: { transition: 'slide-left' }, },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router