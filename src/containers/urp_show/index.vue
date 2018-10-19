<template>
  <div class="container">
    <PageHeader title="URP Form Submission" />
    Uh oh, looks like you haven't submitted your URP form yet! Click below to do so:

    <b-button href="#/urp/new" block="true" size="lg" variant="outline-success">
      Create URP Form
    </b-button>

  </div>
</template>

<!-- // // // //  -->

<script>
import PageHeader from '@/components/PageHeader'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'urp_show',
  components: {
    PageHeader
  },
  metaInfo: {
    title: 'New Project'
  },
  created () {
    return this.resetNewModel()
  },
  methods: mapActions({
    create: 'project/create',
    resetNewModel: 'project/resetNewModel'
  }),
  computed: mapGetters({
    model: 'project/newModel'
  })
}
</script>
