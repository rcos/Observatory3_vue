
<template>
  <div class="container">
    <PageHeader :title="headerText" />
    <Search module="project" />

  	<div class="row">
      <div :class="listCss">
        <Loading :loading="fetching">
    			<ListView :collection="collection"/>
        </Loading>
  		</div>

      <div class="col-lg-3 pl-lg-0" v-if="isAuthenticated">
        <ProjectPinned/>
      </div>

  	</div>
  </div>
</template>

<!-- // // // //  -->

<script>
import ListView from './list.vue'
import Loading from '@/components/Loading'
import Search from '@/components/Search'
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
    Search,
    Loading,
    ProjectPinned
  }
}
</script>


