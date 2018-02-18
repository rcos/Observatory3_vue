<template>
  <LayoutView :collection="collection"/>
</template>

<!-- // // // //  -->

<script>
import LayoutView from './components/layout.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    LayoutView
  },
  metaInfo: {
    title: 'Projects'
  },
  created () {
    return this.fetch()
  },
  methods: mapActions({
    fetch: 'project/fetchCollection'
  }),
  computed: mapGetters({
    collection: 'project/filteredCollection'
  })
}
</script>
