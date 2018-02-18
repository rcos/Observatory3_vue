import _ from 'lodash'
import { NEW_PROJECT } from './constants'
import { COLLECTION_MUTATIONS, MODEL_MUTATIONS, FILTER_MUTATIONS } from '@/store/lib/mixins'

// Project Module mutations
export default {
  ...COLLECTION_MUTATIONS,
  ...MODEL_MUTATIONS,
  ...FILTER_MUTATIONS,
  newModel (state) {
    state.newModel = _.cloneDeep(NEW_PROJECT)
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
