// Urp Containers
import UrpNew from '@/modules/urp/pages/new'
import UrpShow from '@/modules/urp/pages/show'

const UrpNewRoute = {
  path: '/urp/new',
  name: 'urp_new',
  component: UrpNew
}

const UrpShowRoute = {
  path: '/urp',
  name: 'urp_show',
  component: UrpShow
}

export default [
  UrpNewRoute,
  UrpShowRoute
]
