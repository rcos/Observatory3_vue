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
    title: 'Users' // title is now "RCOS - Users"
  },
  computed: mapGetters({
    fetching: 'user/fetching',
    collection: 'user/filteredCollection'
  }),
  created () {
    return this.$store.dispatch('user/fetchCollection')
  }
}
</script>
