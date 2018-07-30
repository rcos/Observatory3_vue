
<template>
  <div class="card mt-3">

    <div class="card-body">
      <h4 class="card-title mb-0">
        Projects
      </h4>
    </div>

    <ul class="list-group list-group-flush" v-if="fetching">
        <li class='list-group-item text-center'>
          <i class="fa fa-3x fa-spin fa-spinner"></i>
        </li>
    </ul>

    <ul class="list-group list-group-flush" v-else>
      <a class='list-group-item' :href="'/#/projects/' + project._id" v-for="project in projects" :key="project._id">
        {{ project.name }}
      </a>
    </ul>

  </div>
</template>

<!-- // // // //  -->

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: ['model'],
  created () {
    this.fetchProjects(this.model._id)
  },
  methods: mapActions({
    fetchProjects: 'user/fetchUserProjects'
  }),
  computed: mapGetters({
    projects: 'user/userProjects',
    fetching: 'user/fetchingUserProjects'
  })
}
</script>
