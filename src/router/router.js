import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Map from "../components/Map"

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        name: 'Home',
        component: Home
    },
    {
        path: '/seek',
        name: 'Seek',
        component: () => import('../views/Seek.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import( '../views/Login.vue')
    },
    {
        path: '/admin',
        name: 'Admin',
        redirect: '/admin/user',
        component: () => import('../components/layout/Index'),
        children: [
            {
                path: 'transnode/list',
                name: 'ListNode',
                component: () => import('../views/admin/ListNode')
            },
            {
                path: 'transnode/add',
                name: 'AddNode',
                component: () => import('../views/admin/AddNode')
            },
            {
                path: 'package',
                name: 'Package',
                component: () => import('../views/admin/Package')
            },
            {
                path: 'user',
                name: 'User',
                component: () => import('../views/admin/ListUser')
            },
            {
                path: 'employee/list',
                name: 'ListEmployee',
                component: () => import('../views/admin/ListEmployee')
            },
            {
                path: 'employee/add',
                name: 'AddEmployee',
                component: () => import('../views/admin/AddEmployee')
            },
            {
                path: 'express',
                name: 'Express',
                component: () => import('../views/admin/Express')
            },
            {
                path: 'order',
                name: 'Order',
                component: () => import('../views/admin/Order')
            }]
    },
    {
        path: '/map',
        name: 'Map',
        component: Map
    },
    {
        path: '/layout',
        name: 'Layout',
        component: () => import('../components/layout/Index')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
