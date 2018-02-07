
<template>
  <LayoutView :model="model"/>
</template>

<!-- // // // //  -->

<script>
import LayoutView from './components/layout.vue'
import { mapGetters } from 'vuex'

export default {
  props: ['id'],
  components: {
    LayoutView
  },
  metaInfo: {
    title: 'User Show' // title is now "RCOS - User Show..."
  },
  created () {
    this.fetch()
  },
  methods: {
    fetch () {
      return this.$store.dispatch('user/fetchModel', this.id)
    }
  },
  computed: mapGetters({
    model: 'user/current'
  })
}
</script>


