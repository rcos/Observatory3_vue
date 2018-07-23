import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import project from '@/modules/project/store'
import user from './user'
import smallgroup from './smallgroup'
import notification from './notification'
import attendance from '@/modules/attendance/store'
import classyear from './classyear'

Vue.use(Vuex)

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  modules: {
    auth,
    project,
    user,
    smallgroup,
    notification,
    attendance,
    classyear
  }
})
