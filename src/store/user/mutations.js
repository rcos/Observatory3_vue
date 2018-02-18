import { COLLECTION_MUTATIONS, FILTER_MUTATIONS } from '@/store/lib/mixins'

// User Module mutations
export default {
  ...COLLECTION_MUTATIONS,
  ...FILTER_MUTATIONS,
  current (state, attributes) {
    state.current = attributes
  }
}
