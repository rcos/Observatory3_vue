
<template>
  <div class="container">

    <!-- TODO - abstract into common header component -->
    <div class="row">
      <div class="col-sm-12">
        <h3>{{ headerText }}</h3>
        <hr>
      </div>
    </div>

    <ProjectSearch/>

  	<div class="row">
      <div :class="listCss">
  			<ListView :collection="collection"/>
  		</div>

      <div class="col-lg-3" v-if="isAuthenticated">
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
  computed: {
    ...mapGetters({
      fetching: 'project/fetching',
      isAuthenticated: 'auth/is_authenticated'
    }),
    headerText () {
      if (this.$store.getters['project/showingInactive']) return 'Past Projects'
      return 'Current Projects'
    },
    listCss () {
      if (this.$store.getters['auth/is_authenticated']) return 'col-lg-9'
      return 'col-lg-12'
    }
  },
  components: {
    ListView,
    ProjectSearch,
    ProjectPinned
  }
}
</script>


