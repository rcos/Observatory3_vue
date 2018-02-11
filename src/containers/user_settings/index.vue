
<template>
  	<LayoutView :currentUser="currentUser"/>
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
    title: 'User - Settings'
  },
  computed: mapGetters({
    currentUser: 'auth/current_user'
  })
}
</script>


