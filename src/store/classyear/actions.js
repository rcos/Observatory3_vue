import { API_ROOT } from './constants'
import { $POST } from '@/store/lib/helpers'
import { FILTER_ACTIONS, PAGINATION_ACTIONS } from '@/store/lib/mixins'

// // // //

// ClassYear module actions
// functions that causes side effects and can involve asynchronous operations.
export default {
  ...PAGINATION_ACTIONS,
  ...FILTER_ACTIONS,
  // POSTs a new attendance code
  generateAttendanceCode ({ state, commit, rootGetters }) {
    // Assembles body for new ClassYear API request
    // var reqBody = { bonusDay: true }
    let api = API_ROOT + '/daycode'

    commit('fetching', true)
    $POST(api, {
      token: rootGetters['auth/token'],
      body: {
        bonusDay: true
      }
    })
    .then((res) => {
      // console.log(res)
      console.log(res.code)
      // state.daycode = res.code
      commit('daycode', res.code)
      commit('fetching', false)
    })
    .catch((err) => {
      commit('fetching', false)
      throw err // TODO - better error handling
    })
  }
}
