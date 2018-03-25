<template>
  <div class="container">
    <h2>RCOS Developers</h2>
    <Search module="user"/>
    <div class="row">
      <div class="col-lg-12">
        <List/>
      </div>
    </div>
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
