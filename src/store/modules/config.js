import { getOptions } from '../../api/getOptions'

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
    commit('clearOptions')
    getOptions().then(options => commit('setOptions', options))
  }
}

// mutations
const mutations = {
  setOptions(state, options) {
    state.options = {...options}
  },
  clearOptions() {
    // 这里是为了展示更新效果，不要这样子做哦
    state.options = { STATE: '更新中...', JOB: '更新中...' }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
