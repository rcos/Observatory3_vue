import Vue from 'vue'
import Router from 'vue-router'

// Router Middleware
// import Middleware from './middleware'

// Main Containers
import MainHome from '@/containers/main_home'

// Project Containers
import ProjectList from '@/containers/project_list'
import ProjectNew from '@/containers/project_new'
import ProjectShow from '@/containers/project_show'
import ProjectEdit from '@/containers/project_edit'

// Auth Containers
import AuthLogin from '@/containers/auth_login'
import AuthRegister from '@/containers/auth_register'

// User Containers
import UserList from '@/containers/user_list'

// TODO - Achievements
// TODO - User List
// TODO - User Show
// TODO - Developer Edit (Profile?)
// TODO - Developer Edit (Profile?)

Vue.use(Router)

// TODO - can we use multiple routers?
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: MainHome
    },
    {
      path: '/projects',
      name: 'Project List',
      component: ProjectList
    },
    {
      path: '/projects/new',
      name: 'Project New',
      component: ProjectNew
      // beforeEnter: Middleware.requireAuth
    },
    {
      path: '/projects/:id',
      name: 'Project List',
      component: ProjectShow
    },
    {
      path: '/projects/:id/edit',
      name: 'Project Edit',
      component: ProjectEdit
      // beforeEnter: Middleware.requireAuth
    },
    {
      path: '/auth/login',
      name: 'Login',
      component: AuthLogin
    },
    {
      path: '/auth/register',
      name: 'Login',
      component: AuthRegister
    },
    {
      path: '/users',
      name: 'User List',
      component: UserList
    }
  ]
})
