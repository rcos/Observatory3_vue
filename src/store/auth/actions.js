import Factory from './factory'

// // // //

// actions
// functions that causes side effects and can involve asynchronous operations.
const actions = {
  register: ({ commit }, attributes) => Factory.create({ commit }, attributes)
}

// // // //

export default actions
