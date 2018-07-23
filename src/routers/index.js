import Router from 'vue-router'
import Middleware from './middleware'

// Import routes
import AdminRoutes from '@/modules/admin/router'
import AuthRoutes from '@/modules/auth/router'
import HomeRoutes from '@/modules/home/router'
import MentorRoutes from './mentor'
import ProjectRoutes from '@/modules/project/router'
import UserRoutes from '@/modules/user/router'
import SmallGroupRoutes from '@/modules/smallgroup/router'

// Instantiates new Vue-Router instance
let router = new Router({
  routes: [
    ...AdminRoutes,
    ...AuthRoutes,
    ...HomeRoutes,
    ...MentorRoutes,
    ...ProjectRoutes,
    ...UserRoutes,
    ...SmallGroupRoutes
  ]
})

// Ensures user authentication before each route
router.beforeEach(Middleware.ensureAuthenticated)

export default router
