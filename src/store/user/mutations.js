
// Project Module mutations
const mutations = {
  fetching (state, isFetching) {
    state.fetching = isFetching
  },
  filter (state, filter) {
    state.filter = filter
  },
  sync (state, collection) {
    state.collection = collection
  },
  current (state, attributes) {
    state.current = attributes
  }
}

export default mutations
