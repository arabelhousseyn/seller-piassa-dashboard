

require('./bootstrap');

window.Vue = require('vue').default;

import router from './router/index'
import store from './store/index'

import MasterView from './views/Master'

import vuetify from '../plugins/vuetify'

const app = new Vue({
    el: '#app',
    vuetify,
    components :{
        MasterView
    },
    router : router,
    store : store
});
