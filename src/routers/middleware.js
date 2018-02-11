// import Auth from '../services/auth.js'
import store from '@/store'

const requireAuth = (route, redirect, next) => {
  if (store.getters['auth/token']) {
    redirect({
      path: '/auth/login',
      query: { redirect: route.fullPath }
    })
  } else {
    next()
  }
}

const ensureAuthenticated = (route, redirect, next) => {
  // Pulls currentUser from Auth module store
  let currentUser = store.getters['auth/current_user']

  // Routes if the currentUser exists
  if (currentUser._id) {
    next()
  } else {
    // TODO - loading spinner
    // Requests currentUser and redirects upon Promise resolution
    store.dispatch('auth/fetchUserProfile').then(() => { next() })
  }
}

export default {
  requireAuth,
  ensureAuthenticated
}
