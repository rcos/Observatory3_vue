import AbstractFactory from '../lib/factory'

// // // //

// Creates new AbstractFactory instance
const AchievementFactory = new AbstractFactory({
  API_ROOT: '/api/achievements',
  REDIRECT_SUCCESS: '/#/achievements',
  messages: {
    CREATE_SUCCESS: 'Created Achievement.',
    UPDATE_SUCCESS: 'Updated Achievement.',
    DESTROY_SUCCESS: 'Destroyed Achievement.'
  }
})

// // // //

export default AchievementFactory
