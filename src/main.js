import Vue from 'vue'
import App from './App.vue'
import router from './routes'

import BootstrapVue from "bootstrap-vue"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import feather from 'vue-icon'

import Buttons from './components/UI/Buttons.vue'

Vue.use(feather, 'v-icon')
Vue.use(BootstrapVue)
Vue.component('app-button', Buttons)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')