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
  let token = store.getters['auth/token']
  let currentUser = store.getters['auth/current_user']

  // Jumps to the next route if the user is _definitely_ not authenticated
  if (!token) {
    return next()
  } else if (currentUser._id) {
    // Routes if the currentUser exists
    next()
  } else {
    // Requests currentUser and redirects upon Promise resolution
    store.dispatch('auth/fetchUserProfile')
    .then(() => { next() })
    .catch(() => { next() })
  }
}

export default {
  requireAuth,
  ensureAuthenticated
}
