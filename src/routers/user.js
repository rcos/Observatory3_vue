// User Containers
import UserList from '@/containers/user_list'
import UserShow from '@/containers/user_show'
import UserSettings from '@/containers/user_settings'

const UserListRoute = {
  path: '/users',
  name: 'user_list',
  component: UserList
}

const UserShowRoute = {
  path: '/users/:id',
  name: 'user_show',
  component: UserShow,
  props: true
}

const UserSettingsRoute = {
  path: '/settings',
  name: 'user_settings',
  component: UserSettings
}

export default [
  UserListRoute,
  UserShowRoute,
  UserSettingsRoute
]
