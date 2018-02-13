import UserFactory from './factory'
import { $GET } from '@/store/lib/helpers'

const API_ROOT = '/api/users'

// // // //

// actions
// functions that causes side effects and can involve asynchronous operations.
const actions = {
  fetchCollection: ({ commit, state }) => {
    // State.fetching = true
    commit('fetching', true)

    // Users API endpoint
    let apiRoute = API_ROOT

    // Fetches either active or inactive users
    if (state.showingInactive) {
      apiRoute += '/past'
    }

    // Fetches Collection from the server
    fetch(apiRoute)
    // Parses response into JSON
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      // State.fetching = false
      commit('fetching', false)

      // Sets state.collection
      commit('sync', json)
    })
    .catch((err) => {
      // State.fetching = false
      commit('fetching', false)

      // TODO - better error handling
      throw err
    })
  },

  // fetchUser
  // Fetches an individual user from the server
  fetchUser ({ store, commit, rootGetters }, userID) {
    commit('fetching', true)
    $GET(`/api/users/${userID}`, { token: rootGetters['auth/token'] })
    .then((user) => {
      commit('current', user)
      commit('fetching', false)
    }) // TODO - error handling
  },

  create: ({ commit }, attributes) => UserFactory.create({ commit }, attributes),

  update: ({ commit }, attributes) => UserFactory.update({ commit }, attributes),

  destroy: ({ commit }, id) => UserFactory.destroy({ commit }, id),

  toggleOrderBy ({ state, commit }) {
    const ORDER_ASC = 'asc'
    const ORDER_DESC = 'desc'
    if (state.orderBy === ORDER_ASC) {
      commit('orderBy', ORDER_DESC)
    } else {
      commit('orderBy', ORDER_ASC)
    }
  },

  toggleInactive ({ state, commit, dispatch }) {
    if (state.showingInactive) {
      commit('showingInactive', false)
    } else {
      commit('showingInactive', true)
    }
    // Re-fetches the collection
    dispatch('fetchCollection')
  }
}

// // // //

export default actions
