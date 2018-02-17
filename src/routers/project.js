// Project Containers
import ProjectList from '@/containers/project_list'
import ProjectNew from '@/containers/project_new'
import ProjectShow from '@/containers/project_show'
import ProjectEdit from '@/containers/project_edit'

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
