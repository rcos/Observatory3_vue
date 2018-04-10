import { $POST, $DEL, $PUT } from '@/store/lib/helpers'
const API_ROOT = '/api/achievements'
// Achievement actions
export default {
  fetchCollection ({ commit }) {
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
      console.log('Error in create:\n' + err)
      throw err
    })
  },
  update ({ commit, rootGetters }, achievementId) {
    $PUT(API_ROOT + '/' + achievementId, {
      token: rootGetters['auth/token'],
      body: {
        title: 'achievement update',
        description: 'sample achievement update'
      }
    })
    .then((json) => {
      console.log('Successfully updated achievement ID: ' + achievementId)
      console.log( json )
    })
    .catch((err) => {
      console.log('Error in updating achievement ID: ' + achievementId)
      console.log( err )
      throw err
    })
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
