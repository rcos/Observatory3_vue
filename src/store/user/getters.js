
// Project Module Getters
const getters = {
  collection: state => {
    return state.collection
  },
  filteredCollection: state => {
    return state.collection.filter(u => { return u.name.indexOf(state.filter) !== -1 })
  },
  current: state => {
    return state.current
  },
  fetching: state => {
    return state.fetching
  }
}

export default getters
