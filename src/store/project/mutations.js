// Project Module mutations
const mutations = {
  fetching (state, isFetching) {
    state.fetching = isFetching
  },
  filter (state, filter) {
    state.filter = filter
  },
  showingInactive (state, show) {
    state.showingInactive = show
  },
  orderBy (state, orderBy) {
    state.orderBy = orderBy
  },
  sync (state, collection) {
    state.collection = collection
  },
  current (state, attributes) {
    state.current = attributes
  },
  myProjects (state, projects) {
    state.myProjects = projects
  },
  menteeProjects (state, projects) {
    state.menteeProjects = projects
  },
  favoriteProjects (state, projects) {
    state.favoriteProjects = projects
  }
}

export default mutations
