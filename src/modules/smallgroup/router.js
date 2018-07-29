// SmallGroup Containers
import SmallGroupList from './views/list'
import SmallGroupNew from './views/new'

// TODO - must be authenticated
const SmallGroupListRoute = {
  path: '/smallgroups',
  name: 'smallgroup_list',
  component: SmallGroupList
}

// TODO - must be mentor or admin
const SmallGroupNewRoute = {
  path: '/smallgroups/new',
  name: 'smallgroup_new',
  component: SmallGroupNew
}

export default [
  SmallGroupListRoute,
  SmallGroupNewRoute
]
