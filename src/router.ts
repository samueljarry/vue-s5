import { createRouter, createWebHistory } from 'vue-router'
import HelloWorldVue from './components/HelloWorld.vue'
import Seance2Vue from './components/Seance2.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: HelloWorldVue
        },
        {
            path: '/seance2',
            component: Seance2Vue
        }
    ]
})

export default router