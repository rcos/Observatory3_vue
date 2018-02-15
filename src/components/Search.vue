<template>
  <div class="row pt-2 pb-3 pb-sm-3 pb-lg-0">
    <div class="col-lg-9">
      <form class="form-inline pb-3">
        <input @input="setFilter($event.target.value)" class="form-control form-control-lg w-100" type="search" placeholder="Search">
      </form>
    </div>
    <div class="col-lg-3 pl-lg-0 text-right">

      <div class="btn-group w-100">
        <button class="btn btn-lg btn-outline-secondary w-100" @click="toggleOrder()">
          <i class="fa fa-fw fa-sort-alpha-asc" v-if="orderBy === 'asc'"></i>
          <i class="fa fa-fw fa-sort-alpha-desc" v-else></i>
          Sort
        </button>

        <button class="btn btn-lg btn-outline-secondary w-100" @click="toggleInactive()">
          <i class="fa fa-fw fa-forward mr-1" v-if="showingInactive"></i>
          <i class="fa fa-fw fa-backward mr-1" v-else></i>
          {{ showingInactive ? 'Current' : 'Past' }}
        </button>
      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'search',
  props: ['module'],
  beforeCreate () {
    // Isolates the 'module' prop
    let module = this.$options.propsData.module

    // Defines Vue.component.computed
    this.$options.computed = mapGetters({
      orderBy: `${module}/orderBy`,
      showingInactive: `${module}/showingInactive`,
      filter: `${module}/filter`
    })

    // Defines Vue.component.methods
    this.$options.methods = mapActions({
      toggleOrder: `${module}/toggleOrderBy`,
      toggleInactive: `${module}/toggleInactive`,
      setFilter: `${module}/setFilter`
    })
  }
}
</script>
