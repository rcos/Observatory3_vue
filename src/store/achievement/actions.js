import { $GET, $POST, $DEL } from '@/store/lib/helpers'
const API_ROOT = '/api/achievements'
// Achievement actions
export default {
  fetchCollection ({ commit }) {
    commit('fetching', true)

    // Fetches Collection from the server
    $GET(API_ROOT)
    .then((json) => {
      commit('collection', json)
      commit('fetching', false)
    })
    .catch((err) => {
      commit('fetching', false)
      throw err // TODO - better error handling
    })
  },
  fetchModel ({ commit }) {
  },
  create ({ commit, rootGetters }) {
    $POST(API_ROOT, {
      token: rootGetters['auth/token'],
      body: {
        title: 'sample-achievement',
        description: 'test123',
        date: new Date()
      }
    })
    .then((json) => {
      console.log('Create Post [Done]')
      console.log(json)
    })
    .catch((err) => {
      console.log('Create in create:\n' + err)
      throw err
    })
  },
  update ({ commit }) {
  },
  destroy ({ commit, rootGetters }, achievementId) {
    $DEL(API_ROOT + '/' + achievementId, {
      token: rootGetters['auth/token']
    })
    .then((json) => {
      console.log('Successfully deleted.')
      console.log(json)
    })
    .catch((err) => {
      console.log('Error in delete:\n' + err)
      throw err
    })
  }
}
