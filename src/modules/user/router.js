// User Containers
import UserList from './views/user_list'
import UserShow from './views/user_show'
import UserSettings from './views/user_settings'

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

// TODO - must be authenticated
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
