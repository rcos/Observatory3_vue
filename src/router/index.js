import Vue from 'vue'
import Router from 'vue-router'
import Middleware from './middleware'

// Import routes
import AdminRoutes from '@/modules/admin/router'
import AuthRoutes from '@/modules/auth/router'
import AttendanceRoutes from '@/modules/attendance/router'
import HomeRoutes from '@/modules/home/router'
import MentorRoutes from '@/modules/mentor/router'
import ProjectRoutes from '@/modules/project/router'
import UserRoutes from '@/modules/user/router'
import SmallGroupRoutes from '@/modules/smallgroup/router'
import UrpFormRoutes from '@/modules/urp/router'

// vue-router
// Router library
Vue.use(Router)

// Instantiates new Vue-Router instance
let router = new Router({
  routes: [
    ...AdminRoutes,
    ...AuthRoutes,
    ...AttendanceRoutes,
    ...HomeRoutes,
    ...MentorRoutes,
    ...ProjectRoutes,
    ...UserRoutes,
    ...SmallGroupRoutes,
    ...UrpFormRoutes
  ]
})

// Ensures user authentication before each route
router.beforeEach(Middleware.ensureAuthenticated)

export default router
