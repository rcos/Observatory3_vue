import { API_ROOT, NEW_SMALL_GROUP } from './constants'
import { $GET, $POST, $PUT } from '@/store/lib/helpers'

// // // //

// SmallGroup module actions
// functions that causes side effects and can involve asynchronous operations.
export default {
  resetNewModel: ({ commit }) => {
    return commit('newModel', NEW_SMALL_GROUP)
  },
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

  // fetchSmallGroup
  // Fetch a single SmallGroup from the server
  fetchSmallGroup ({ commit, rootGetters }, smallGroupId) {
    commit('fetching', true)

    // Fetches Collection from the server
    $GET(API_ROOT + '/' + smallGroupId, { token: rootGetters['auth/token'] })
    .then((json) => {
      commit('model', json)
      commit('fetching', false)
    })
    .catch((err) => {
      commit('fetching', false)
      throw err // TODO - better error handling
    })
  },

  // fetchSmallGroupMembers
  // Fetch all members in a single SmallGroup
  fetchSmallGroupMembers ({ commit, rootGetters }, smallGroupId) {
    // commit('fetchingSmallGroupMembers', true)

    // Fetches Collection from the server
    $GET(API_ROOT + '/' + smallGroupId + '/members', { token: rootGetters['auth/token'] })
    .then((response) => {
      commit('smallGroupMembers', response)
      // commit('fetchingSmallGroupMembers', false)
    })
    .catch((err) => {
      // commit('fetchingSmallGroupMembers', false)
      throw err // TODO - better error handling
    })
  },

  // addSmallGroupMember
  // Add a user to a small group
  addSmallGroupMember ({ commit, dispatch, rootGetters }, { smallGroupId, userId }) {
    commit('fetching', true)

    // Fetches Collection from the server
    $PUT(API_ROOT + '/' + smallGroupId + '/member', {
      token: rootGetters['auth/token'],
      body: { memberId: userId }
    })
    .then((response) => {
      dispatch('fetchSmallGroupMembers', smallGroupId)
      commit('fetching', false)
    })
    .catch((err) => {
      commit('fetching', false)
      throw err // TODO - better error handling
    })
  },

  // Access / Manipulate the members of a smallgroup
  // router.get('/:id/members', auth.isAuthenticated(), controller.getSmallGroupMembers);
  // router.put('/:id/member', auth.hasRole('mentor'), controller.addMember);
  // router.delete('/:id/member/:memberId', auth.isAuthenticated(), controller.deleteMember);

  // create SmallGroup
  create ({ commit, state, rootGetters }) {
    commit('fetching', true)

    // Fetches Collection from the server
    $POST(API_ROOT, {
      token: rootGetters['auth/token'],
      body: state.newModel
    })
    .then((json) => {
      // TODO - route to SmallGroup list
      console.log('CREATED NEW SmallGroup')
      console.log(json)
      commit('fetching', false)
    })
    .catch((err) => {
      commit('fetching', false)
      throw err // TODO - better error handling
    })
  },

  // update SmallGroup
  update ({ commit }, attributes) {
  },

  // destroy SmallGroup
  destroy ({ commit }, id) {
  }
}
