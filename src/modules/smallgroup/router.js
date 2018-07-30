// SmallGroup Containers
import SmallGroupList from './views/list'
import SmallGroupShow from './views/show'
import SmallGroupNew from './views/new'

// TODO - must be authenticated
const SmallGroupListRoute = {
  path: '/small_groups',
  component: SmallGroupList
}

// TODO - must be authenticated
const SmallGroupShowRoute = {
  path: '/small_groups/:id',
  component: SmallGroupShow,
  props: true
}

// TODO - must be mentor or admin
const SmallGroupNewRoute = {
  path: '/small_groups/new',
  component: SmallGroupNew
}

export default [
  SmallGroupListRoute,
  SmallGroupShowRoute,
  SmallGroupNewRoute
]
