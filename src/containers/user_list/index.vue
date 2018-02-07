
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
    title: 'Users' // title is now "RCOS - Users"
  },
  computed: mapGetters({
    collection: 'user/filteredCollection'
  }),
  mounted () {
    return this.$store.dispatch('user/fetchCollection')
  }
}
</script>
