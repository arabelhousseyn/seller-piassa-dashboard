import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
//component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
const routes = [
    {
        path : '/',
        component: () => import('../pages/LoginPage')
    }

]

export default new VueRouter({
    mode: 'history',
    routes
})

