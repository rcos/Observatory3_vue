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
export default {
  name: 'search',
  computed: {
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
