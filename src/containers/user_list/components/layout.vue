
<template>
  <div class="container pt-3">
  	<h3>RCOS Developers</h3>
    <Search :collection="collection"/>
    <Pagination :collection="collection"/>
    <List :collection="collection"/>
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


