import { COLLECTION_STATE, MODEL_STATE, FILTER_STATE } from '@/store/lib/mixins'

// Project Module State
export default {
  ...COLLECTION_STATE,
  ...MODEL_STATE,
  ...FILTER_STATE,
  newModel: {},
  myProjects: [],
  menteeProjects: [],
  favoriteProjects: []
}
