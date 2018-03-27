import { COLLECTION_GETTERS, MODEL_GETTERS } from '@/store/lib/mixins'

// Blog Module Getters
export default {
  ...COLLECTION_GETTERS,
  ...MODEL_GETTERS,
  newModel: state => {
    return state.newModel
  },
  destroying: state => {
    return state.destroying
  }
}
