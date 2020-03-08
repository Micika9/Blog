import axios from 'axios'

const state = {
  posts: []
}

const actions = {
  async getPosts ({ commit }) {
    const { data } = await axios.get('http://localhost:3000/posts?_expand=user')
    commit('setPosts', data)
  },

  async createPost ({ commit }, payload) {
    const { data } = await axios.post('http://localhost:3000/posts?_expand=user', payload)
    commit('addPost', data)
    return data
  }
}

const mutations = {
  setPosts (state, data) {
    state.posts = data
  },

  addPost (state, data) {
    state.posts.push(data)
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
