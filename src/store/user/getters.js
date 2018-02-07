
// Project Module Getters
const getters = {
  collection: state => {
    return state.collection
  },
  filteredCollection: state => {
    return state.collection.filter(u => {
      return u.name.toLowerCase().indexOf(state.filter.toLowerCase()) !== -1
    })
  },
  showingInactive: state => {
    return state.showingInactive
  },
  current: state => {
    return state.current
  },
  fetching: state => {
    return state.fetching
  }
}

export default getters
