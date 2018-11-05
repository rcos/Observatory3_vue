import { COLLECTION_GETTERS } from '@/store/lib/mixins'

// Attendance Module Getters
export default {
  ...COLLECTION_GETTERS,
  unverified: state => {
    return state.unverified
  }
}
