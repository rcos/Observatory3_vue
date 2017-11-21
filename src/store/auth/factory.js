import AbstractFactory from '../lib/factory'

// // // //

// Creates new AbstractFactory instance
const AuthFactory = new AbstractFactory({
  API_ROOT: '/api/users',
  REDIRECT_SUCCESS: '/#/',
  messages: {
    CREATE_SUCCESS: 'Successfully Registered.'
  }
})

// // // //

export default AuthFactory
