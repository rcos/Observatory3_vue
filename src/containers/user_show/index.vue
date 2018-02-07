
<template>
  <LayoutView :model="model"/>
</template>

<!-- // // // //  -->

<script>
import LayoutView from './components/layout.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  props: ['id'],
  components: {
    LayoutView
  },
  metaInfo: {
    title: 'User Show'
  },
  created () {
    this.fetch()
  },
  methods: mapActions({
    fetch: 'user/fetchModel'
  }),
  computed: mapGetters({
    model: 'user/current'
  })
}
</script>


