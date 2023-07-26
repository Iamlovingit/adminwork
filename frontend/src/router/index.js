import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/Layout/index.vue'
import Login from '../views/Login/index.vue'

const routes = [
    {
    path: '/',
    component: Layout,
    children:[

    ]
    },
    {
    path: '/login',
    name: 'login',
    component: Login
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router