import _ from 'lodash'
import { $GET, $PUT, $DEL } from '@/store/lib/helpers'
import { FILTER_ACTIONS } from '@/store/lib/mixins'

const API_ROOT = '/api/projects'

// // // //

// Project module actions
// functions that causes side effects and can involve asynchronous operations.
export default {
  ...FILTER_ACTIONS,
  fetchCollection: ({ state, commit, rootGetters }) => {
    commit('fetching', true)

    // Fetches either active or inactive users
    let apiRoute = API_ROOT
    if (state.showingInactive) {
      apiRoute += '/past'
    }

    // Fetches Collection from the server
    $GET(apiRoute, { token: rootGetters['auth/token'] })
    .then((json) => {
      commit('fetching', false)
      commit('collection', json)
    })
    .catch((err) => {
      commit('fetching', false)
      throw err // TODO - better error handling
    })
  },

  // fetchModel
  // Fetches an individual model from the server
  fetchModel ({ commit, rootGetters }, projectId) {
    commit('fetching', true)
    $GET(`/api/projects/${projectId}`, { token: rootGetters['auth/token'] })
    .then((project) => {
      commit('current', project)
      commit('fetching', false)
    })
    .catch((err) => {
      commit('fetching', false)
      throw err // TODO - better error handling
    })
  },

  // createProject
  create ({ commit }, attributes) {
    // Vuex - Project Action - POST /api/projects
  },

  // updateProject
  update ({ commit }, attributes) {
    // Vuex - Project Action - PUT /api/projects/:id
  },

  // destroyProject
  destroy ({ commit }, id) {
    // Vuex - Project Action - DELETE /api/projects/:id
  },

  // fetchMyProjects
  fetchMyProjects ({ commit, rootGetters }) {
    $GET('/api/projects/mine', { token: rootGetters['auth/token'] })
    .then((response) => {
      commit('myProjects', response)
    })
    .catch((err) => {
      // commit('fetching', false)
      throw err // TODO - better error handling
    })
  },

  // fetchMenteeProjects
  fetchMenteeProjects ({ commit, rootGetters }) {
    $GET('/api/projects/mentees', { token: rootGetters['auth/token'] })
    .then((response) => {
      commit('menteeProjects', response)
    })
    .catch((err) => {
      // commit('fetching', false)
      throw err // TODO - better error handling
    })
  },

  // fetchFavoriteProjects
  // TODO - this should be a user action
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
  }
}
