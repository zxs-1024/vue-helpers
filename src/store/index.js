import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import config from './modules/config'
import permission from './modules/permission'

import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    user,
    config,
    permission
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
