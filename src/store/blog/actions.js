import { $PUT } from '@/store/lib/helpers'

const API_ROOT = '/api/posts'

// Blog actions
export default {
  fetchCollection ({ commit }) {

  },
  fetchModel ({ commit }) {

  },
  create ({ commit }) {

  },
  update ({ commit, rootGetters }, blogModel) {
    console.log('UPDATE BLOG POST')

    $PUT(API_ROOT + '/' + blogModel._id, {
      body: blogModel,
      token: rootGetters['auth/token']
    })
    .then((response) => {
      console.log('RESPONSE')
    })
    .catch((err) => {
      console.log('ERR!')
      throw err
    })
  },
  destroy ({ commit }) {

  }
}
