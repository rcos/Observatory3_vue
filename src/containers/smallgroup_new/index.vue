
<template>
  <div class="container">
    <PageHeader title="Small Groups" />
    <div class="row">
      <div class="col-lg-12">
        <Loading :loading="fetching">
          <div class="card-deck">
            <SmallGroupChild v-for="model in collection" :key="model._id" :model="model" />
          </div>
        </Loading>
      </div>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import PageHeader from '@/components/PageHeader'
import { mapActions, mapGetters } from 'vuex'

export default {
  metaInfo: {
    title: 'Small Groups'
  },
  components: {
    PageHeader
  },
  created () {
    this.fetch()
  },
  methods: mapActions({
    create: 'smallgroup/create'
  }),
  computed: mapGetters({
    model: 'smallgroup/newModel'
  })
}
</script>


