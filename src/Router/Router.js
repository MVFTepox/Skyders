import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import login from '../login.vue'
import register from '../register.vue'
import pago from '../pago.vue'
import admin from '../admin.vue'
import postal from '../postal.vue'
import estadistica from '../estadistica.vue'
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
        {path: '/BRCD', component: () => import('../components/CodigoBarras.vue')},
        {
            path: '/iniciar-sesion',
            name: 'iniciar-sesion',
            component: login
        },
        {
            path: '/iniciar-sesion/postal',
            name: 'iniciar-sesion',
            component: postal
        },
        {
            path: '/registro',
            name: 'registro',
            component: register
        },
        {
            path: '/pago',
            name: 'pago',
            component: pago
        },
        {
            path: '/admin',
            name: 'admin',
            component: admin
        },
        {
            path: '/organizador',
            name: 'organizador',
            component: estadistica
        },

    ]
}) 

export default router
