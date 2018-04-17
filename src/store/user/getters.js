import { COLLECTION_GETTERS, MODEL_GETTERS, FILTER_GETTERS } from '../lib/mixins'

// User Module Getters
const getters = {
  ...COLLECTION_GETTERS,
  ...MODEL_GETTERS,
  ...FILTER_GETTERS,
  filteredCollection: state => {
    return state.filteredCollection
  }
}

export default getters
