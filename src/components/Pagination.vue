<template>
  <div class="row" v-if="hasPrevPage || hasNextPage">
    <div class="col-lg-9">
      <ul class="pagination">

        <!-- First Page -->
        <li class="page-item" v-if='hasPrevPage'>
          <a class="page-link" @click="firstPage()">
            <i class="fa fa-fw fa-angle-double-left"></i>
          </a>
        </li>
        <li class="page-item disabled" v-else>
          <a class='page-link'>
            <i class="fa fa-fw fa-angle-double-left"></i>
          </a>
        </li>

        <!-- Prev Page -->
        <li class="page-item" v-if='hasPrevPage'>
          <a class="page-link" @click="prevPage()">
            <i class="fa fa-fw fa-angle-left"></i>
          </a>
        </li>
        <li class="page-item disabled" v-else>
          <a class='page-link'>
            <i class="fa fa-fw fa-angle-left"></i>
          </a>
        </li>

        <!-- Numbered Pages -->
        <li :class="p.current ? 'page-item active' : 'page-item'" v-for="p in pages">
          <a class="page-link" @click="goToPage(p.page)">{{ p.page }}</a>
        </li>

        <!-- Next Page -->
        <li class="page-item disabled" v-if='!hasNextPage'>
          <a class='page-link'>
            <i class="fa fa-fw fa-angle-right"></i>
          </a>
        </li>
        <li class="page-item" v-else>
          <a class="page-link" @click="nextPage()">
            <i class="fa fa-fw fa-angle-right"></i>
          </a>
        </li>

        <!-- Last Page -->
        <li class="page-item disabled" v-if='!hasNextPage'>
          <a class='page-link'>
            <i class="fa fa-fw fa-angle-double-right"></i>
          </a>
        </li>
        <li class="page-item" v-else>
          <a class="page-link" @click="lastPage()">
            <i class="fa fa-fw fa-angle-double-right"></i>
          </a>
        </li>

      </ul>
    </div>

    <div class="col-lg-3">

    </div>
  </div>
</template>

<!-- // // // // -->

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'pagination',
  props: ['module'],
  beforeCreate () {
    // Isolates the 'module' prop
    let module = this.$options.propsData.module

    // Defines Vue.component.computed
    this.$options.computed = mapGetters({
      pages: `${module}/pages`,
      currentPage: `${module}/currentPage`,
      totalPages: `${module}/totalPages`,
      hasPrevPage: `${module}/prevPage`,
      hasNextPage: `${module}/nextPage`
    })

    // Defines Vue.component.methods
    this.$options.methods = mapActions({
      firstPage: `${module}/firstPage`,
      prevPage: `${module}/prevPage`,
      goToPage: `${module}/goToPage`,
      nextPage: `${module}/nextPage`,
      lastPage: `${module}/lastPage`
    })
  }
}
</script>
