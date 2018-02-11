import ProjectFactory from './factory'
import _ from 'lodash'
import { $GET, $PUT, $DEL } from '@/store/lib/helpers'
const API_ROOT = '/api/projects'

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

  fetchModel: ({ commit }, id) => ProjectFactory.fetchModel({ commit }, id),

  create: ({ commit }, attributes) => ProjectFactory.create({ commit }, attributes),

  update: ({ commit }, attributes) => ProjectFactory.update({ commit }, attributes),

  destroy: ({ commit }, id) => ProjectFactory.destroy({ commit }, id),

  // fetchMyProjects
  fetchMyProjects ({ commit, rootGetters }) {
    $GET('/api/projects/mine', { token: rootGetters['auth/token'] })
    .then((response) => {
      commit('myProjects', response)
    })
    .catch((err) => {
      // TODO - improve error handling
      throw err
    })
  },

  // fetchMenteeProjects
  fetchMenteeProjects ({ commit, rootGetters }) {
    $GET('/api/projects/mentees', { token: rootGetters['auth/token'] })
    .then((response) => {
      commit('menteeProjects', response)
    })
    .catch((err) => {
      // TODO - improve error handling
      throw err
    })
  },

  // fetchFavoriteProjects
  fetchFavoriteProjects ({ commit, rootGetters }) {
    let currentUser = rootGetters['auth/current_user']

    $GET(`/api/users/${currentUser._id}/favoriteProjects`, { token: rootGetters['auth/token'] })
    .then((response) => {
      commit('favoriteProjects', response)
    })
    .catch((err) => {
      // TODO - improve error handling
      throw err
    })
  },

  // toggleFavorite
  toggleFavorite ({ state, commit, rootGetters }, project) {
    console.log('TOGGLE FAVORITE')

    function isFavorite () {
      return !!_.find(state.favoriteProjects, { _id: project._id })
    }

    let currentUser = rootGetters['auth/current_user']

    // ADD favorite
    if (isFavorite()) {
      $PUT(`/api/users/${currentUser._id}/favorite/${project._id}`, { token: rootGetters['auth/token'] })
      .then((response) => {
        console.log('ADDED FAVORITE')
      })
      .catch((err) => {
        // TODO - improve error handling
        throw err
      })
    // REMOVE favorite
    } else {
      $DEL(`/api/users/${currentUser._id}/favorite/${project._id}`, { token: rootGetters['auth/token'] })
      .then((response) => {
        console.log('REMOVED FAVORITE')
      })
      .catch((err) => {
        // TODO - improve error handling
        throw err
      })
    }
  },

  // isFavorite
  // Returns boolean indicating whether or not the
  // project has been 'favorited' by the current user
  isFavorite ({ state }, project) {
    let isFavorite = _.find(state.favoriteProjects, { _id: project._id })
    project.isFavorite = isFavorite
  },

  toggleOrderBy ({ state, commit }) {
    // TODO - abstract into project/constants.js
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
