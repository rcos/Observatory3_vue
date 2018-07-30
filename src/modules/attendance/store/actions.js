import { API_ROOT } from './constants'
import { $GET, $POST } from '@/store/lib/helpers'
import { FILTER_ACTIONS, PAGINATION_ACTIONS } from '@/store/lib/mixins'

// // // //

// Attendance module actions
// functions that causes side effects and can involve asynchronous operations.
export default {
  ...PAGINATION_ACTIONS,
  ...FILTER_ACTIONS,
  // Fetches the attendance collection for this user
  fetchCollection: ({ commit, rootGetters }) => {
    commit('fetching', true)

    let api = API_ROOT + '/present/me'

    $GET(api, { token: rootGetters['auth/token'] })
    .then((json) => {
      commit('collection', json)
      commit('fetching', false)
    })
    .catch((err) => {
      commit('fetching', false)
      throw err
    })
  },

  // create Attendance
  create ({ commit, rootGetters }, dayCode) {
    $POST(API_ROOT + '/attend', { token: rootGetters['auth/token'], body: { dayCode } })
    .then((json) => {
      console.log(json)
      // commit('collection', json)
      // commit('fetching', false)
    })
    .catch((err) => {
      // commit('fetching', false)
      throw err
    })
  },

  // update Attendance
  update ({ commit }, attributes) {
  },

  // destroy Attendance
  destroy ({ commit }, id) {
  }
}
