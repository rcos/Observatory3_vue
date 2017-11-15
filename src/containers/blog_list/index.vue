
<template>
  	<LayoutView :collection="collection"/>
</template>

<!-- // // // //  -->

<script>
import LayoutView from './components/layout.vue'
import store from '@/store'

export default {
  components: {
    LayoutView
  },
  metaInfo: {
    title: 'Blog - List'
  },
  computed: {
    collection () {
      return store.getters['post/collection']
    }
  },
  mounted () {
    return store.dispatch('post/fetchCollection')
  }
}
</script>


