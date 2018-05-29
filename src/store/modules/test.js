// initial state
// msg: 'welcome'
const state = {
  msg: 'welcome'
}

const getters = {
  getMsg: state => state.msg
}

const actions = {}

const mutations = {
  say (state, { msg }) {
    state.msg = msg
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
