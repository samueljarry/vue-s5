import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import Seance1Vue from './views/Seance1.vue'
import Seance2Vue from './views/Seance2.vue'
import Seance3Vue from './views/Seance3.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Seance1Vue,
    name: 'Accueil'
  },
  {
    path: '/seance2',
    component: Seance2Vue,
    name: 'Boucles'
  },
  {
    path: '/seance3',
    component: Seance3Vue,
    name: 'API'
  }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router