import { getUserInfo } from '../../api/getUserInfo'

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
    commit('clearUserInfo')
    getUserInfo().then(userInfo => commit('setUserInfo', userInfo))
  }
}

// mutations
const mutations = {
  setUserInfo (state, userInfo) {
    state.userInfo = userInfo
  },
  clearUserInfo () {
    // 这里是为了展示更新效果，不要这样子做哦
    state.userInfo = '更新中...'
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
