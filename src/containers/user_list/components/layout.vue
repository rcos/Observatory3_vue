
<template>
  <div class="container pt-2">

    <div class="row">
      <div class="col-lg-12">
        <h3>Developers</h3>
        <hr>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <Search/>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <Pagination :collection="collection"/>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <List :collection="collection"/>
      </div>
    </div>


  </div>
</template>

<!-- // // // //  -->

<script>

import Search from './search.vue'
import Pagination from './pagination.vue'
import List from './list.vue'

export default {
  props: ['collection'],
  components: {
    Search,
    Pagination,
    List
  }
}
</script>


