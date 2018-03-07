import { COLLECTION_GETTERS } from '@/store/lib/mixins'

// Blog Module Getters
export default {
  ...COLLECTION_GETTERS,
  destroying: state => {
    return state.destroying
  }
}
