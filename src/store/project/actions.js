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

  destroy: ({ commit }, id) => ProjectFactory.destroy({ commit }, id)
}

// // // //

export default actions
