
<template>
  <div class="container">
    <PageHeader title="Developers" />
    <Search module="user" />
    <Pagination module="user" />
    <List :collection="collection"/>
  </div>
</template>

<!-- // // // //  -->

<script>

import Search from '@/components/Search'
import Pagination from '@/components/Pagination'
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


