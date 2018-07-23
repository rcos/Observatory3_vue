// Auth Containers
import AuthLogin from './views/login'
import AuthRegister from './views/register'

const AuthLoginRoute = {
  path: '/auth/login',
  name: 'auth_login',
  component: AuthLogin
}

const AuthRegisterRoute = {
  path: '/auth/register',
  name: 'auth_register',
  component: AuthRegister
}

export default [
  AuthLoginRoute,
  AuthRegisterRoute
]
