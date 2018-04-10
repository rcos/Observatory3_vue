// SmallGroup Containers
import SmallGroupList from '@/containers/smallgroup_list'
import SmallGroupNew from '@/containers/smallgroup_new'

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
