
// Project Module mutations
const mutations = {
  fetching (state, isFetching) {
    state.fetching = isFetching
  },
  token (state, token) {
    state.token = token
  },
  session (state, session) {
    state.session = session
  }
}

export default mutations
