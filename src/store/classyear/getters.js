import { COLLECTION_GETTERS } from '@/store/lib/mixins'

// ClassYear Module Getters
export default {
  ...COLLECTION_GETTERS,
  daycode: state => {
    return state.daycode
  }
}
