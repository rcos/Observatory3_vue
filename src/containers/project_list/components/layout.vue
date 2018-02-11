
<template>
  <div class="container">

    <!-- TODO - abstract into common header component -->
    <div class="row">
      <div class="col-sm-12">
        <h3>Projects</h3>
        <hr>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <ProjectSearch/>
      </div>
    </div>

  	<div class="row">
      <div class="col-lg-9">
  			<ListView :collection="collection"/>
  		</div>

      <div class="col-lg-3">
        <ProjectPinned/>
      </div>

  	</div>
  </div>
</template>

<!-- // // // //  -->

<script>
import ListView from './list.vue'
import ProjectSearch from './search.vue'
import ProjectPinned from './pinned.vue'
import { mapGetters } from 'vuex'

export default {
  props: ['collection'],
  computed: mapGetters({
    fetching: 'project/fetching'
  }),
  components: {
    ListView,
    ProjectSearch,
    ProjectPinned
  }
}
</script>


