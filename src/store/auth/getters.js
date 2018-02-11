
// Auth Module Getters
const getters = {
  login_user: state => {
    return state.login_user
  },
  register_user: state => {
    return state.register_user
  },
  is_authenticated: state => {
    if (state.current_user._id) {
      return true
    } else {
      return false
    }
  },
  current_user: state => {
    return state.current_user
  },
  logging_in: state => {
    return state.logging_in
  },
  token: state => {
    return state.token
  },
  fetching: state => {
    return state.fetching
  }
}

export default getters
