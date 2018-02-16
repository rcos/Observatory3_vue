<template>
    <LayoutView :collection="collection"/>
</template>

<!-- // // // //  -->

<script>

import LayoutView from './components/layout.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'achievement_list',
  components: {
    LayoutView
  },
  metaInfo: {
    title: 'Achievement - Home' // title is now "RCOS - Achievement"
  },
  computed: mapGetters({
    collection: 'achievement/collection'
  }),
  mounted () {
    return this.$store.dispatch('achievement/fetchCollection')
  }
}
</script>
