import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
Vue.use(Vuetify)

export default new Vuetify({
    theme: { dark: (window.localStorage.getItem('darkMode') == null) ? false : true,
        themes: {
            light: {
                primary: '#e85810',
                secondary: '#3665f3',
                accent: '#8c9eff',
                error: '#b71c1c',
                white : '#FFF'
            },
        },
    },
    icons: {
        iconfont: 'mdi',
    },
})
