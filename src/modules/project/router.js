// Project Containers
import ProjectList from './views/list'
import ProjectNew from './views/new'
import ProjectShow from './views/show'
import ProjectEdit from './views/edit'

const ProjectListRoute = {
  path: '/projects',
  name: 'Project List',
  component: ProjectList
  // beforeEnter: Middleware.ensureAuthenticated
}

const ProjectNewRoute = {
  path: '/projects/new',
  name: 'Project New',
  component: ProjectNew
  // beforeEnter: Middleware.requireAuth
}

const ProjectShowRoute = {
  path: '/projects/:id',
  name: 'Project Show',
  component: ProjectShow,
  props: true
}

const ProjectEditRoute = {
  path: '/projects/:id/edit',
  name: 'Project Edit',
  component: ProjectEdit,
  props: true
  // beforeEnter: Middleware.requireAuth
}

export default [
  ProjectListRoute,
  ProjectNewRoute,
  ProjectShowRoute,
  ProjectEditRoute
]
