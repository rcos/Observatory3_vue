import _ from 'lodash'
import { COLLECTION_GETTERS, MODEL_GETTERS, FILTER_GETTERS } from '@/store/lib/mixins'

// Project Module Getters
export default {
  ...COLLECTION_GETTERS,
  ...MODEL_GETTERS,
  ...FILTER_GETTERS,
  filteredCollection: state => {
    return _.chain(state.collection)
    .filter(u => {
      return u.name.toLowerCase().indexOf(state.filter.toLowerCase()) !== -1
    })
    .orderBy(['name'], [state.orderBy])
    // .drop(state.start)
    // .take(state.pageSize)
    .value()
  },
  newModel: state => {
    return state.newModel
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
  contributors: state => {
    return state.contributors
  },
  fetchingContributors: state => {
    return state.fetchingContributors
  }
}
