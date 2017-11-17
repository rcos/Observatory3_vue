
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
    title: 'Users' // title is now "RCOS - Users"
  },
  computed: {
    collection () {
      return store.getters['user/collection']
    }
  },
  mounted () {
    return store.dispatch('user/fetchCollection')
  }
}
</script>
