import { COLLECTION_STATE, MODEL_STATE, FILTER_STATE } from '@/store/lib/mixins'

// Project Module State
export default {
  ...COLLECTION_STATE,
  ...MODEL_STATE,
  ...FILTER_STATE,
  newModel: {},
  contributors: [],
  fetchingContributors: false,
  myProjects: [],
  menteeProjects: [],
  favoriteProjects: []
}
