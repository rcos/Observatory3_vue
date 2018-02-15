import _ from 'lodash'

// User Module Getters
const getters = {
  collection: state => {
    return state.collection
  },
  filteredCollection: state => {
    // TASK - filter users by `tech` tags
    // https://github.com/rcos/observatory-client/issues/31
    return _.chain(state.collection)
    .filter(u => {
      return u.name.toLowerCase().indexOf(state.filter.toLowerCase()) !== -1
    })
    .orderBy(['name'], [state.orderBy])
    .value()
  },
  filter: state => {
    return state.filter
  },
  showingInactive: state => {
    return state.showingInactive
  },
  orderBy: state => {
    return state.orderBy
  },
  current: state => {
    return state.current
  },
  fetching: state => {
    return state.fetching
  }
}

export default getters
