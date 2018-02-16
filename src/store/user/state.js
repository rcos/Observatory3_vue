import { COLLECTION_STATE, FILTER_STATE } from '@/store/lib/mixins'

// User Module State
const state = {
  ...COLLECTION_STATE,
  ...FILTER_STATE,
  current: {}
}

export default state
