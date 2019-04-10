import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'
import { Select, Option, Button } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'highlight.js'
import 'highlight.js/styles/solarized-light.css'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(VueHighlightJS)
Vue.use(Select)
Vue.use(Option)
Vue.use(Button)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
