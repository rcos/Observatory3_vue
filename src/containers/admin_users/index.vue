<template>
  <div class="container">
    <h2>RCOS Developers</h2>
    <Search module="user"/>
    <List/>
  </div>
</template>

<!-- // // // //  -->

<script>
import { mapActions } from 'vuex'
import List from './components/list'
import Search from '@/components/Search'

export default {
  components: {
    List,
    Search
  },
  created () {
    this.fetch()
  },
  methods: mapActions({
    fetch: 'user/fetchAdminCollection'
  })
}
</script>
