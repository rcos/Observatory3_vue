import { COLLECTION_STATE, FILTER_STATE } from '@/store/lib/mixins'

// Project Module State
export default {
  ...COLLECTION_STATE,
  ...FILTER_STATE,
  myProjects: [],
  menteeProjects: [],
  favoriteProjects: [],
  current: {}
}
