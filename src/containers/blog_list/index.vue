
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
    title: 'Blog - List'
  },
  computed: mapGetters({
    collection: 'post/collection'
  }),
  mounted () {
    return this.$store.dispatch('post/fetchCollection')
  }
}
</script>


