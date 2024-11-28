import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [





        
        {path: '/MOMENTO', component: () => import('../components/Ev-Info.vue')},
        {path: '/QRCD', component: () => import('../components/QRCode.vue')},
        {path: '/BRCD', component: () => import('../components/CodigoBarras.vue')}
    ]
})

export default router
