import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "../store";

Vue.use(VueRouter)
//component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
const routes = [
    {
        path : '/',
        component: () => import('../pages/LoginPage')
    },
    {
        path : '/home',
        component: () => import('../pages/DashboardPage'),
        children : [
            {
                path : '/',
                component : () => import('../components/MainComponent')
            },
            {
                path : 'users',
                component : () => import('../pages/UsersPage')
            },
            {
                path : 'sellers',
                component : () => import('../pages/SellersPage')
            },
            {
                path : 'shippers',
                component : () => import('../pages/ShippersPage')
            },
            {
                path : '*',
                component: () => import('../pages/NotFoundPage'),
            }
        ]
    }

]

export default new VueRouter({
    mode: 'history',
    routes
})

