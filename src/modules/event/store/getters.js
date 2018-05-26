import { TYPE_DROPDOWN } from './constants'

// Event Module Getters
export default {
  typeDropdown: state => {
    return TYPE_DROPDOWN
  },
  newModel: state => {
    return state.newModel
  },
  newLargeGroupModel: state => {
    return state.newLargeGroupModel
  }
}
