
<template>
  <div class="container">
  	<h2>Achievements List</h2>
  	<hr>
  	<p class="lead">TODO</p>
  </div>
</template>

<!-- // // // //  -->

<script>
export default {
  name: 'layout'
}
</script>

<template>
  <div class="container pt-4">

    <h3>Achievements</h3>


  	<div class="row">
      <div class="col-lg-9">

  			<ListView :collection="collection"/>

  		</div>

      <ProjectPinned/>

  	</div>
  </div>
</template>

<!-- // // // //  -->

<script>
import store from '@/store'
import ListView from './list.vue'
import AboutPinned from './pinned.vue'

export default {
  props: ['collection'],
  computed: {
    fetching () {
      return store.getters['achievement/fetching']
    }
  },
  components: {
    ListView,
    AboutPinned
  }
}
</script>

