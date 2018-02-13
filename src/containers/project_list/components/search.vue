<template>
  <div class="row pt-3 pb-2">
    <div class="col-lg-9">
      <form class="form-inline pb-3">
        <input v-model="filter" class="form-control form-control-lg w-100" type="search" placeholder="Search">
      </form>
    </div>
    <div class="col-lg-3 text-right">

      <div class="btn-group w-100">
        <button class="btn btn-lg btn-outline-secondary w-100" @click="toggleOrder()" v-if="orderBy === 'asc'">
          <i class="fa fa-fw fa-sort-alpha-asc"></i>
          Sort
        </button>

        <button class="btn btn-lg btn-outline-secondary w-100" @click="toggleOrder()" v-else>
          <i class="fa fa-fw fa-sort-alpha-desc"></i>
          Sort
        </button>

        <button class="btn btn-lg btn-outline-secondary w-100" @click="toggleInactive()" v-if="!showingInactive">
          <i class="fa fa-fw fa-backward mr-1"></i>
          Past
        </button>

        <button class="btn btn-lg btn-outline-secondary w-100" @click="toggleInactive()" v-else>
          <i class="fa fa-fw fa-forward mr-1"></i>
          Current
        </button>
      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'search',
  methods: {
    ...mapActions({
      toggleOrder: 'project/toggleOrderBy',
      toggleInactive: 'project/toggleInactive'
    })
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
