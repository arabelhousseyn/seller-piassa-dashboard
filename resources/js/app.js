

require('./bootstrap');

window.Vue = require('vue').default;

import router from './router/index'
import store from './store/index'
import VueToast from 'vue-toast-notification'

import MasterView from './views/Master'

import vuetify from '../plugins/vuetify'

import * as VueGoogleMaps from 'vue2-google-maps'

window.Vue.use(VueToast)

window.Vue.use(VueGoogleMaps, {
    load: {
        key: "AIzaSyDGy4IaSCDzTFd9eW7H1Iovy7xEc5sNOSE",
        libraries: 'places',
    },
})

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
