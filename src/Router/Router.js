import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {path: '/MOMENTO', component: () => import('../components/Ev-Info.vue')},
        {path: '/QRCD', component: () => import('../components/QRCode.vue')},
        {path: '/BRCD', component: () => import('../components/CodigoBarras.vue')}
    ]
}) 

export default router