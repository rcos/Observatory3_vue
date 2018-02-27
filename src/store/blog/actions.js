import { $GET } from '@/store/lib/helpers'

const API_ROOT = '/api/posts'

// Blog actions
export default {
  // Fetches Collection from the server
  fetchCollection: ({ commit }) => {
    commit('fetching', true)

    $GET(API_ROOT)
    .then((json) => {
      commit('fetching', false)
      commit('collection', json)
    })
    .catch((err) => {
      commit('fetching', false)
      throw err
    })
  },
  // Fetches Model from the server
  fetchModel ({ commit }, projectId) {
    commit('fetching', true)

    $GET(`/api/projects/${projectId}`)
    .then((project) => {
      commit('current', project)
      commit('fetching', false)
    })
    .catch((err) => {
      commit('fetching', false)
      throw err
    })
  },
  create ({ commit }) {

  },
  update ({ commit }) {

  },
  destroy ({ commit }) {

  }
}
