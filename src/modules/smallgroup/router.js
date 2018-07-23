// SmallGroup Containers
import SmallGroupList from './views/list'
import SmallGroupNew from './views/new'

const SmallGroupListRoute = {
  path: '/smallgroups',
  name: 'smallgroup_list',
  component: SmallGroupList
}

const SmallGroupNewRoute = {
  path: '/smallgroups/new',
  name: 'smallgroup_new',
  component: SmallGroupNew
}

export default [
  SmallGroupListRoute,
  SmallGroupNewRoute
]
