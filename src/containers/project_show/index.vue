<template>
  <Loading :loading="fetching">
    <LayoutView :project="model"/>
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
    title: 'Project Show'
  },
  created () {
    this.fetch(this.id)
  },
  methods: mapActions({
    fetch: 'project/fetchModel'
  }),
  computed: mapGetters({
    model: 'project/current',
    fetching: 'project/fetching'
  })
}
</script>


