import { getPermissions } from '../../api/getPermissions'

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
    commit('clearPermissions')
    getPermissions().then(permissions => commit('setPermissions', permissions))
  }
}

// mutations
const mutations = {
  setPermissions (state, permissions) {
    state.permissions = permissions
  },
  clearPermissions () {
    // 这里是为了展示更新效果，不要这样子做哦
    state.permissions = '更新中...'
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
