import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(
  Vuetify, {
    theme: {
      secondary: '#0e71a3',
      primary: '#52c2b8',
      accent: '#e95e29'
    }
  }
)

new Vue({
  el: '#app',
  render: h => h(App)
})
