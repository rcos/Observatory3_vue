import { API_ROOT } from './constants'
import { $POST } from '@/store/lib/helpers'
import { FILTER_ACTIONS, PAGINATION_ACTIONS } from '@/store/lib/mixins'
import Router from '@/routers'

// // // //

// ClassYear module actions
// functions that causes side effects and can involve asynchronous operations.
export default {
  ...PAGINATION_ACTIONS,
  ...FILTER_ACTIONS,
  // POSTs a new attendance code
  create ({ state, commit, rootGetters }) {
    // Assembles body for new ClassYear API request
    let { name, description, githubUsername, githubProjectName, tech, active, repositories, repositoryType, photos } = state.newModel
    let body = { name, description, githubUsername, githubProjectName, tech, active, repositories, repositoryType, photos }

    commit('fetching', true)
    $POST(API_ROOT, { token: rootGetters['auth/token'], body: body })
    .then((project) => {
      commit('fetching', false)
      Router.push('/projects')
    })
    .catch((err) => {
      commit('fetching', false)
      console.log(err) // TODO - update state.newModel with errors: {}
      throw err // TODO - better error handling
    })
  }
}
