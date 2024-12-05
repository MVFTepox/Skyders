import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Admin',
            component: () => import('../Admin.vue')
        },
        {
            path: '/pago',
            name: 'pago',
            component: () => import('../pago.vue')
        },
        {
            path: '/estadistica',
            name: 'estadistica',
            component: () => import('../estadistica.vue')
        },
        {
            path: '/postal',
            name: 'postal',
            component: () => import('../postal.vue')

        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../login.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('../register.vue')
        }
    ]
})

export default router