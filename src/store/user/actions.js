import UserFactory from './factory'

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

  fetchModel: (abc, id) => UserFactory.fetchModel(abc, id),

  create: ({ commit }, attributes) => UserFactory.create({ commit }, attributes),

  update: ({ commit }, attributes) => UserFactory.update({ commit }, attributes),

  destroy: ({ commit }, id) => UserFactory.destroy({ commit }, id)
}

// // // //

export default actions
