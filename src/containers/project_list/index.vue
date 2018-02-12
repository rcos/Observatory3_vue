<template>
  <Loading :loading="fetching">
    <LayoutView :collection="collection"/>
  </Loading>
</template>

<!-- // // // //  -->

<script>
import Loading from '@/components/Loading'
import LayoutView from './components/layout.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    Loading,
    LayoutView
  },
  metaInfo: {
    title: 'Projects' // title is now "RCOS - Projects"
  },
  computed: mapGetters({
    fetching: 'project/fetching',
    collection: 'project/filteredCollection'
  }),
  created () {
    return this.$store.dispatch('project/fetchCollection')
  }
}
</script>


