import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import Seance1Vue from './views/Seance1.vue'
import Seance2Vue from './views/Seance2.vue'
import Seance3Vue from './views/Seance3.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Seance1Vue,
    name: 'Séance 1'
  },
  {
    path: '/seance2',
    component: Seance2Vue,
    name: 'Séance 2'
  },
  {
    path: '/seance3',
    component: Seance3Vue,
    name: 'Séance 3'
  }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router