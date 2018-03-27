import { API_ROOT } from './constants'
import { $GET } from '@/store/lib/helpers'
import { FILTER_ACTIONS, PAGINATION_ACTIONS } from '@/store/lib/mixins'

// // // //

// Attendance module actions
// functions that causes side effects and can involve asynchronous operations.
export default {
  ...PAGINATION_ACTIONS,
  ...FILTER_ACTIONS,
  // Fetches the attendance collection for this user
  fetchCollection: ({ commit, rootGetters }) => {
    console.log('test!')
    commit('fetching', true)

    let api = API_ROOT + '/present/me'

    // TODO - remove
    console.log(api)

    $GET(api, { token: rootGetters['auth/token'] })
    .then((json) => {
      console.log(json)
      commit('collection', json)
      commit('fetching', false)
    })
    .catch((err) => {
      commit('fetching', false)
      throw err
    })
  },

  // create Attendance
  create ({ commit }) {
  },

  // update Attendance
  update ({ commit }, attributes) {
  },

  // destroy Attendance
  destroy ({ commit }, id) {
  }
}
