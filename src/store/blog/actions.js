import { $GET, $POST, $PUT } from '@/store/lib/helpers'

const API_ROOT = '/api/posts'

// Blog actions
export default {
  // Fetches Collection from the server
  fetchCollection: ({ commit }) => {
    commit('fetching', true)

    $GET(API_ROOT)
    .then((json) => {
      commit('fetching', false)
      commit('collection', json)
    })
    .catch((err) => {
      commit('fetching', false)
      throw err
    })
  },
  // Fetches Model from the server
  fetchModel ({ commit }, blogId) {
    commit('fetching', true)

    $GET(`${API_ROOT}/${blogId}`)
    .then((blog) => {
      commit('current', blog)
      commit('fetching', false)
    })
    .catch((err) => {
      commit('fetching', false)
      throw err
    })
  },
  create ({ commit, rootGetters }) {
    $POST(API_ROOT, {
      token: rootGetters['auth/token'],
      body: {
        title: 'sample-blog-create',
        description: 'sample123',
        date: new Date ()
      }
    })
    .then((json) => {
      console.log('Blog Create [Done]')
      console.log(json)
    })
    .catch((err) => {
      console.log("Error in blog create:\n" + err)
    })
  },
  update ({ commit, rootGetters }, blogId) {
    $PUT(API_ROOT + '/' + blogId, {
      token: rootGetters['auth/token'],
      body: {
        title: 'blog update',
        description: 'sample blog update'
      }
    })
    .then((json) => {
      console.log('Successfully updated blog ID: ' + blogId)
      console.log( json )
    })
    .catch((err) => {
      console.log('Error in updating blog ID: ' + blogId)
      console.log( err )
      throw err
    })
  },
  destroy ({ commit }) {
  }
}
