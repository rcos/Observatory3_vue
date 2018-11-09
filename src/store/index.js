import Vue from 'vue'
import Vuex from 'vuex'

// import event from '@/modules/event/store'
// import blog from '@/modules/blog/store'
import auth from '@/modules/auth/store'
import project from '@/modules/project/store'
import user from '@/modules/user/store'
import smallgroup from '@/modules/smallgroup/store'
import notification from '@/modules/notification/store'
import attendance from '@/modules/attendance/store'
import classyear from '@/modules/classyear/store'
import urp from '@/modules/urp/store'

Vue.use(Vuex)

// Exports new Vuex Store instance
export default new Vuex.Store({
  modules: {
    auth,
    project,
    user,
    smallgroup,
    notification,
    attendance,
    classyear,
    urp
  }
})
