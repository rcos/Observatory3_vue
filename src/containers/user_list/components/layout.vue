
<template>
  <div class="container">
    <PageHeader title="Developers" />
    <Search module="user" />
    <Loading :loading="fetching">
      <List :collection="collection"/>
    </Loading>
  </div>
</template>

<!-- // // // //  -->

<script>
import Loading from '@/components/Loading'
import Search from '@/components/Search'
import List from './list.vue'

export default {
  props: ['fetching', 'collection'],
  components: {
    Loading,
    Search,
    List
  }
}
</script>


