<template>
  <div class="container">
    <PageHeader :title="model.name" />

    <div class="row">
      <div class="col-sm-12 col-lg-3">
        <Sidebar :model="model"/>

        <a class="btn btn-block btn-warning mt-3" :href=" '#/users/' + model._id + '/edit' " v-if="showEditButton">
          <i class="fa fa-pencil mr-2"></i>
          Edit Profile
        </a>
      </div>

      <div class="col-sm-12 col-lg-9 pl-lg-0 mt-3 mt-lg-0">
        <Tech :model="model"/>
        <Bio :model="model"/>
        <Projects :model="model"/>
      </div>

    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import Sidebar from './sidebar'
import Tech from './tech'
import Bio from './bio'
import Projects from './projects'
import { mapGetters } from 'vuex'

export default {
  props: ['model'],
  components: {
    Sidebar,
    Tech,
    Bio,
    Projects
  },
  computed: {
    ...mapGetters({
      isAuthenticated: 'auth/is_authenticated',
      currentUser: 'auth/current_user'
    }),
    showEditButton () {
      if (this.isAuthenticated && this.currentUser._id === this.model._id) return true
      return false
    }
  }
}
</script>
