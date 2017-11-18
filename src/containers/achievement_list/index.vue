<template>
    <LayoutView :collection="collection"/>
</template>

<!-- // // // //  -->

<script>

import LayoutView from './components/layout.vue'
import store from '@/store'

export default {
  name: 'achievement_list',
  components: {
    LayoutView
  },
  metaInfo: {
    title: 'Achievement - Home' // title is now "RCOS - Achievement"
  },
  computed: {
    collection () {
      return store.getters['achievement/collection']
    }
  },
  mounted () {
    return store.dispatch('achievement/fetchCollection')
  }
}
</script>
