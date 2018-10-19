// Urp Containers
import UrpNew from '@/containers/urp_new'
import UrpShow from '@/containers/urp_show'

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
