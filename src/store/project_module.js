import ProjectService from '../services/project'

// // // //

// state
const state = {
  count: 0,
  todos: [
    {
      id: 1,
      task: 'Code',
      completed: true
    },
    {
      id: 2,
      task: 'Sleep',
      completed: false
    },
    {
      id: 3,
      task: 'Eat',
      completed: false
    }
  ]
}

// mutations
const mutations = {
  decrement (state) {
    state.count--
  },
  increment (state) {
    state.count++
  }
}

// actions
// functions that causes side effects and can involve asynchronous operations.
const actions = {
  fetch: ({ commit }) => {
    ProjectService.getCollection()
    .then((projects) => {
      commit('projects', projects)
    })
    .catch(() => {
      commit('projects', [{ id: 'err', name: 'error' }])
    })
  },
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit('increment')
    }, 1000)
  }
}

// Getters
const getters = {
  todos: state => {
    return state.todos
  },
  count: state => {
    return state.count
  }
}

// // // //

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
