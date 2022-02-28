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
                secondary: '#304156',
                third : '#eee',
                white : '#FFF',
                black : '#000'
            },
        },
    },
    icons: {
        iconfont: 'mdi',
    },
})
