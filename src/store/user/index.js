import axios from 'axios'

const state = {
  user: null
}

const actions = {
  async login ({ commit }, payload) {
    const { data } = await axios.get('http://localhost:3000/users', {
      params: payload
    })
    if (data.length) {
      const user = data[0]
      commit('setUser', user)
      localStorage.setItem('user', JSON.stringify(user))
      return user
    }

    return null
  },

  checkIfLoggedIn ({ commit }) {
    let user = localStorage.getItem('user')
    if (user) {
      user = JSON.parse(user)
      commit('setUser', user)
      return user
    }
    return null
  },

  logout ({ commit }) {
    localStorage.removeItem('user')
    commit('setUser', null)
  }
}

const mutations = {
  setUser (state, data) {
    state.user = data
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
