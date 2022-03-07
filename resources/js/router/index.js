import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

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
                component : () => import('../pages/UsersPage'),
                children : [
                    {
                        path : '/',
                        component : () => import('../components/User/MainUserComponent'),
                    },
                    {
                        path : 'vehicles/:id',
                        name : 'vehicles',
                        props : true,
                        component : () => import('../components/User/UserVehiclesComponent'),
                    }
                ]
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

