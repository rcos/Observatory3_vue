<template>
  <div class="row pt-3 pb-2">
    <div class="col-lg-9">
      <form class="form-inline pb-3">
        <input v-model="filter" class="form-control form-control-lg w-100" type="search" placeholder="Search">
      </form>
    </div>
    <div class="col-lg-3 text-right">

      <div class="btn-group w-100">

        <a href='/#/projects/new' class="btn btn-lg btn-primary btn-block">
          <i class="fa fa-fw fa-plus mr-1"></i>
          Add Project
        </a>

      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'search',
  methods: {
    toggleOrder (orderBy) {
      this.$store.commit('project/orderBy', orderBy)
    },
    toggleInactive (showingInactive) {
      this.$store.commit('project/showingInactive', showingInactive)
      return this.$store.dispatch('project/fetchCollection')
    }
  },
  computed: {
    ...mapGetters({
      orderBy: 'project/orderBy',
      showingInactive: 'project/showingInactive'
    }),
    filter: {
      get () {
        return this.$store.getters['project/filter']
      },
      set (value) {
        return this.$store.commit('project/filter', value)
      }
    }
  }
}
</script>
