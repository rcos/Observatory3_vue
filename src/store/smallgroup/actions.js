import { API_ROOT } from './constants'
import { $GET } from '@/store/lib/helpers'

// // // //

// SmallGroup module actions
// functions that causes side effects and can involve asynchronous operations.
export default {
  fetchCollection: ({ state, commit, dispatch, rootGetters }) => {
    commit('fetching', true)

    // Fetches Collection from the server
    $GET(API_ROOT, { token: rootGetters['auth/token'] })
    .then((json) => {
      commit('collection', json)
      commit('fetching', false)
    })
    .catch((err) => {
      commit('fetching', false)
      throw err // TODO - better error handling
    })
  },

  // create SmallGroup
  create ({ commit }) {
  },

  // update SmallGroup
  update ({ commit }, attributes) {
  },

  // destroy SmallGroup
  destroy ({ commit }, id) {
  }
}
