import UserFactory from './factory'

// // // //

// actions
// functions that causes side effects and can involve asynchronous operations.
const actions = {
  fetchCollection: ({ commit }) => UserFactory.fetchCollection({ commit }),

  fetchModel: (abc, id) => UserFactory.fetchModel(abc, id),

  create: ({ commit }, attributes) => UserFactory.create({ commit }, attributes),

  update: ({ commit }, attributes) => UserFactory.update({ commit }, attributes),

  destroy: ({ commit }, id) => UserFactory.destroy({ commit }, id)
}

// // // //

export default actions
