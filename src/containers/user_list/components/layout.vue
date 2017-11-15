
<template>
  <div class="container pt-3">
  	<h3>RCOS Developers</h3>
    <Search/>
    <Pages/>
    <Explore/>
  </div>
</template>

<!-- // // // //  -->

<script>

import Search from './search.vue'
import Pages from './pages.vue'
import Explore from './explore.vue'

export default {
  name: 'layout',
  components: {
    Search,
    Pages,
    Explore
  }
}
</script>


