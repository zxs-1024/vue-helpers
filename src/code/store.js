const treeCode = 
`src/store
├── index.js
└── modules
    ├── config.js
    ├── permission.js
    └── user.js`

const storeCode = `import Vue from 'vue'
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
})`

const userCode = 
`import { getUserInfo } from '../../api/getUserInfo'

// initial state
const state = {
  userInfo: {}
}

// getters
const getters = {
  userInfo: state => state.userInfo
}

// actions
const actions = {
  updateUserInfo ({ commit }) {
    getUserInfo().then(userInfo => commit('setUserInfo', userInfo))
  }
}

// mutations
const mutations = {
  setUserInfo (state, userInfo) {
    state.userInfo = userInfo
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}`

const configCode = 
`import { getOptions } from '../../api/getOptions'

// initial state
const state = {
  options: {}
}

// getters
const getters = {
  options: state => state.options
}

// actions
const actions = {
  updateOptions({ commit }) {
    getOptions().then(options => commit('setOptions', options))
  }
}

// mutations
const mutations = {
  setOptions(state, options) {
    state.options = { ...options }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}`

const permissionCode = 
`import { getPermissions } from '../../api/getPermissions'

// initial state
const state = {
  permissions: {}
}

// getters
const getters = {
  permissions: state => state.permissions
}

// actions
const actions = {
  updatePermissions ({ commit }) {
    getPermissions().then(permissions => commit('setPermissions', permissions))
  }
}

// mutations
const mutations = {
  setPermissions (state, permissions) {
    state.permissions = permissions
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}`

export {
  treeCode,
  storeCode,
  userCode,
  configCode,
  permissionCode
}