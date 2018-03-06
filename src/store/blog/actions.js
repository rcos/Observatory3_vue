import { $DEL } from '@/store/lib/helpers'

const API_ROOT = '/api/posts'

// Blog actions
export default {
  fetchCollection ({ commit }) {

  },
  fetchModel ({ commit }) {

  },
  create ({ commit }) {

  },
  Update ({ commit }) {

  },
  destroy ({ commit, rootGetters }, postID) {
    commit('destroying', true)
    $DEL(`${API_ROOT}/${postID}`, { token: rootGetters['auth/token'] })
    .then((project) => {
      commit('destroying', false)
    })
    .catch((err) => {
      commit('destroying', false)
      throw err // TODO - better error handling
    })
  }
}
