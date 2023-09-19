import { createRouter, createWebHistory } from 'vue-router'
import Seance1Vue from './views/Seance1.vue'
import Seance2Vue from './views/Seance2.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Seance1Vue
        },
        {
            path: '/seance2',
            component: Seance2Vue
        }
    ]
})

export default router