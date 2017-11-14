
<template>
  <div class="container pt-3">
  	<h3>RCOS Developers</h3>
    <Search/>
    <Pages/>
    <List/>
  </div>
</template>

<!-- // // // //  -->

<script>

import Search from './search.vue'
import Pages from './pages.vue'
import List from './list.vue'

export default {
  name: 'layout',
  components: {
    Search,
    Pages,
    List
  }
}
</script>


