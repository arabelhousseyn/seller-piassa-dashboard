import Vue from 'vue'
import VueRouter from 'vue-router'
import {next} from "lodash/seq";

Vue.use(VueRouter)

const routes = [
    {
        path : '/',
        component: () => import('../pages/LoginPage'),
        beforeEnter: (to, from,next) => {
            if(localStorage.getItem('isAuth') == undefined)
            {
                next()
            }else{
                next('/home')
            }
        },
    },
    {
        path : '/home',
        component: () => import('../pages/DashboardPage'),
        beforeEnter: (to, from,next) => {
            if(localStorage.getItem('isAuth'))
            {
                next()
            }else{
                next('/')
            }
        },
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
                    },
                    {
                        path: 'orders/:id',
                        name : 'orders',
                        props: true,
                        component : () => import('../components/User/Order/UserOrderComponent')
                    }

                ]
            },
            {
                path : 'sellers',
                component : () => import('../pages/SellersPage'),
                children: [
                    {
                        path : '/',
                        component : () => import('../components/Seller/MainSellerComponent')
                    },
                    {
                        path: 'phones/:id',
                        name: 'sellerPhones',
                        props: true,
                        component : () => import('../components/Seller/SellerPhonesComponent')
                    },
                    {
                        path : 'jobs/:id',
                        name : "sellerJobs",
                        props: true,
                        component : () => import('../components/Seller/SellerJobsComponent')
                    }
                ]
            },
            {
                path : 'shippers',
                component : () => import('../pages/ShippersPage'),
                children: [
                    {
                        path : '/',
                        component : () => import('../components/Shipper/MainShipperComponent')
                    },
                    {
                        path: 'commission/:id',
                        name : 'commission',
                        props: true,
                        component : () => import('../components/Shipper/ShipperCommissionComponent')
                    }
                ]
            },
            {
              path: 'provinces',
              component : ()=> import('../pages/ProvincePage')
            },
            {
              path: 'signs',
              component : ()=> import('../pages/SingsPage')
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

