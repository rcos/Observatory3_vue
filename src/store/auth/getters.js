
// Project Module Getters
const getters = {
  session: state => {
    return state.session
  },
  token: state => {
    return state.token
  },
  fetching: state => {
    return state.fetching
  }
}

export default getters
