import Router from 'vue-router'
import Middleware from './middleware'

// Import routes
import AdminRoutes from './admin'
import AuthRoutes from './auth'
import BlogRoutes from './blog'
import MainRoutes from './main'
import MentorRoutes from './mentor'
import ProjectRoutes from './project'
import UserRoutes from './user'
import SmallGroupRoutes from './smallgroup'

// Instantiates new Vue-Router instance
let router = new Router({
  routes: [
    ...AdminRoutes,
    ...AuthRoutes,
    ...BlogRoutes,
    ...MainRoutes,
    ...MentorRoutes,
    ...ProjectRoutes,
    ...UserRoutes,
    ...SmallGroupRoutes
  ]
})

// Ensures user authentication before each route
router.beforeEach(Middleware.ensureAuthenticated)

export default router
