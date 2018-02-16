<template>
  <LayoutView :collection="collection"/>
</template>

<!-- // // // //  -->

<script>
import LayoutView from './components/layout.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
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


