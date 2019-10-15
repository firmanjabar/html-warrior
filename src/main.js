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

import VueTrumbowyg from 'vue-trumbowyg'
import 'trumbowyg/dist/ui/trumbowyg.css'
// plugin VueTrumbowyg
import "trumbowyg/dist/plugins/colors/ui/trumbowyg.colors.css";
import "trumbowyg/dist/plugins/colors/trumbowyg.colors.min.js";
import "trumbowyg/dist/plugins/emoji/ui/trumbowyg.emoji.css";
import "trumbowyg/dist/plugins/emoji/trumbowyg.emoji.min.js";
import "trumbowyg/dist/plugins/fontfamily/trumbowyg.fontfamily.min.js";
import "trumbowyg/dist/plugins/giphy/ui/trumbowyg.giphy.css";
import "trumbowyg/dist/plugins/giphy/trumbowyg.giphy.min.js";
import "trumbowyg/dist/plugins/lineheight/trumbowyg.lineheight.min.js";
import "trumbowyg/dist/plugins/pasteembed/trumbowyg.pasteembed.min.js";
import "trumbowyg/dist/plugins/pasteimage/trumbowyg.pasteimage.min.js";
import "trumbowyg/dist/plugins/preformatted/trumbowyg.preformatted.min.js";
import "trumbowyg/dist/trumbowyg.js";
import "trumbowyg/dist/plugins/upload/trumbowyg.upload.js";
import "trumbowyg/dist/plugins/highlight/ui/trumbowyg.highlight.css";
import "trumbowyg/dist/plugins/highlight/trumbowyg.highlight.js";

// Material Design
Vue.use(feather, 'v-icon')
Vue.use(BootstrapVue)
Vue.component('app-button', Buttons)

// MISC
Vue.use(vuelidate)
Vue.use(VueTrumbowyg)

// Resource
Vue.use(VueResource)
Vue.http.options.root = 'https://htmlwarrior-8d75e.firebaseio.com'

//truncate
var filter = function (text, length, clamp) {
  clamp = clamp || '...';
  var node = document.createElement('div');
  node.innerHTML = text;
  var content = node.textContent;
  return content.length > length ? content.slice(0, length) + clamp : content;
};

Vue.filter('truncate', filter);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')