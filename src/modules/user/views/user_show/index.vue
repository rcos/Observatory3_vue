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
    title: 'User Profile'
  },
  created () {
    this.fetch(this.id)
  },
  methods: mapActions({
    fetch: 'user/fetchUser'
  }),
  computed: mapGetters({
    model: 'user/model',
    fetching: 'user/fetching'
  })
}
</script>
