import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

import router from './routes'
import store from './Store/store'

import BootstrapVue from "bootstrap-vue"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vuelidate from 'vuelidate'

import feather from 'vue-icon'

import Buttons from './components/UI/Buttons.vue'

// Material Design
Vue.use(feather, 'v-icon')
Vue.use(BootstrapVue)
Vue.component('app-button', Buttons)

// MISC
Vue.use(vuelidate)

// Resource
Vue.use(VueResource)
Vue.http.options.root = ''

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')