<template>
  <div class="row">

    <!-- TODO - abstract into separate component -->
    <div class="col-sm-12">
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

    <div class="col-sm-12 mt-3">

      <!-- TODO - abstract into separate component -->
      <div class="card">
        <h6 class="card-header">
          <i class="fa fa-fw fa-folder-open-o"></i>
          My Projects
        </h6>
        <div class="card-body pt-1 pb-1">
          <p class="card-text">
            <dl class="dl-horizontal">
              <dd>
                <a href="/#/">Observatory</a>
              </dd>
              <dd>
                <a href="/#/">YACS</a>
              </dd>
            </dl>
          </p>
        </div>
      </div>

      <!-- TODO - abstract into separate component -->
      <div class="card mt-3">
        <h6 class="card-header">
          <i class="fa fa-fw fa-star-o"></i>
          Starred
        </h6>
        <div class="card-body pt-1 pb-1">
          <p class="card-text">
            <dl class="dl-horizontal">
              <dd>
                <a href="/#/">Observatory</a>
              </dd>
            </dl>
          </p>
        </div>
      </div>

      <button type="button" class='btn btn-outline-secondary btn-block mt-3'>
        <i class="fa fa-fw fa-backward mr-1"></i>
        Past Projects
      </button>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions({
      toggleOrder: 'project/toggleOrderBy',
      toggleInactive: 'project/toggleInactive'
    })
  },
  computed: mapGetters({
    orderBy: 'project/orderBy',
    showingInactive: 'project/showingInactive'
  })
}
</script>

