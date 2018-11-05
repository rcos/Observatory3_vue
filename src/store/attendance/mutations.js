import { COLLECTION_MUTATIONS } from '@/store/lib/mixins'

// Attendance Module mutations
export default {
  ...COLLECTION_MUTATIONS,
  unverified (state, unverified) {
    state.unverified = unverified
  }
}
