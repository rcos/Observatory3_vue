
<template>
  <div class="container">
    <PageHeader title="Small Groups" />
    <div class="row">
      <div class="col-lg-12">
        <Loading :loading="fetching">
          <SmallGroupChild v-for="model in collection" :key="model._id" :model="model" />
        </Loading>
      </div>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import Loading from '@/components/Loading'
import PageHeader from '@/components/PageHeader'
import SmallGroupChild from './components/SmallGroupChild'
import { mapActions, mapGetters } from 'vuex'

export default {
  metaInfo: {
    title: 'Small Groups'
  },
  components: {
    Loading,
    PageHeader,
    SmallGroupChild
  },
  created () {
    this.fetch()
  },
  methods: mapActions({
    fetch: 'smallgroup/fetchCollection'
  }),
  computed: mapGetters({
    fetching: 'smallgroup/fetching',
    collection: 'smallgroup/collection'
  })
}
</script>


