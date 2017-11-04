import Vue from 'vue'
import Vuex from 'vuex'
import project from './project_module'

Vue.use(Vuex)

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  modules: {
    project
  }
})
