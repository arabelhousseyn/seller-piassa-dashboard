

require('./bootstrap');

window.Vue = require('vue').default;

import router from './router/index'
import store from './store/index'
import VueToast from 'vue-toast-notification'

import MasterView from './views/Master'

import vuetify from '../plugins/vuetify'

window.Vue.use(VueToast)

import 'vue-toast-notification/dist/theme-sugar.css'

const app = new Vue({
    el: '#app',
    vuetify,
    components :{
        MasterView
    },
    router : router,
    store : store
});
