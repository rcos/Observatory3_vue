import ProjectFactory from './factory'

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
