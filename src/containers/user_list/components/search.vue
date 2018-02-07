<template>
  <div class="row pt-3 pb-2">
    <div class="col-lg-9">
      <form class="form-inline pb-3">
        <input v-model="filter" class="form-control form-control-lg w-100" type="search" placeholder="Search">
      </form>
    </div>
    <div class="col-lg-3 text-right">

      <div class="btn-group w-100">

        <button class="btn btn-lg btn-outline-secondary w-100">
          <i class="fa fa-fw fa-sort-alpha-asc"></i>
          Sort
        </button>

        <button class="btn btn-lg btn-outline-secondary w-100" @click="toggleInactive(true)" v-if="!showingInactive">
          <i class="fa fa-fw fa-backward mr-1"></i>
          Past
        </button>

        <button class="btn btn-lg btn-outline-secondary w-100" @click="toggleInactive(false)" v-else>
          <i class="fa fa-fw fa-forward mr-1"></i>
          Current
        </button>

      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'search',
  methods: {
    toggleInactive (showingInactive) {
      this.$store.commit('user/showingInactive', showingInactive)
      return this.$store.dispatch('user/fetchCollection')
    }
  },
  computed: {
    ...mapGetters({
      showingInactive: 'user/showingInactive'
    }),
    filter: {
      get () {
        return this.$store.state['user/filter']
      },
      set (value) {
        return this.$store.commit('user/filter', value)
      }
    }
  }
}
</script>
