<template>
  <div class="form-group">
    <label>Project</label>
    <select class="form-control" id="blogFormControlSelect">
      <option :value="project._id" v-for="project in projectCollection">
        {{ project.name }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ProjectSelect',
  created () {
    return this.fetch()
  },
  methods: mapActions({
    fetch: 'project/fetchCollection'
  }),
  computed: mapGetters({
    projectCollection: 'project/collection'
  })
}
</script>
