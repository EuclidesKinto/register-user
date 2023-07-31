import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('./pages/Home.vue')
    },
    {
        path: '/cadastro',
        name: 'register',
        component: () => import('./pages/Register.vue')
    },
    {
        path: '/show/user/:id',
        name: 'show',
        component: () => import('./pages/Show.vue')
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;