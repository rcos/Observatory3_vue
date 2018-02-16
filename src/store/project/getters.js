import _ from 'lodash'
import { COLLECTION_GETTERS, FILTER_GETTERS } from '@/store/lib/mixins'

// Project Module Getters
const getters = {
  ...COLLECTION_GETTERS,
  ...FILTER_GETTERS,
  filteredCollection: state => {
    return _.chain(state.collection)
    .filter(u => {
      return u.name.toLowerCase().indexOf(state.filter.toLowerCase()) !== -1
    })
    .orderBy(['name'], [state.orderBy])
    .value()
  },
  myProjects: state => {
    return state.myProjects
  },
  menteeProjects: state => {
    return state.menteeProjects
  },
  favoriteProjects: state => {
    return state.favoriteProjects
  },
  current: state => {
    return state.current
  }
}

export default getters
