<template>
  <Loading :loading="fetching">
    <LayoutView :model="model"/>
  </Loading>
</template>

<!-- // // // //  -->

<script>
import Loading from '@/components/Loading'
import LayoutView from './components/layout.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  props: ['id'],
  components: {
    Loading,
    LayoutView
  },
  metaInfo: {
    title: 'User Show'
  },
  created () {
    this.fetch(this.id)
  },
  methods: mapActions({
    fetch: 'smallgroup/fetchModel'
  }),
  computed: mapGetters({
    model: 'smallgroup/model',
    fetching: 'smallgroup/fetching'
  })
}
</script>

