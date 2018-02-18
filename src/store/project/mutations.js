import { COLLECTION_MUTATIONS, PAGINATION_MUTATIONS, FILTER_MUTATIONS } from '@/store/lib/mixins'

// Project Module mutations
export default {
  ...COLLECTION_MUTATIONS,
  ...PAGINATION_MUTATIONS,
  ...FILTER_MUTATIONS,
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
