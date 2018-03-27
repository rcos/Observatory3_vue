<template>
  <div class="container">
    <PageHeader title="Attendance" />

    <CodeInput/>

    <button class="btn btn-outline-success" @click="fetchCollection">
      Refresh
    </button>

    <h4>Previous Attendance:</h4>
    <TableHeader/>
    <Explore :collection="collection"/>
  </div>
</template>

<!-- // // // //  -->

<script>
import CodeInput from './input.vue'
import TableHeader from './table_header'
import Explore from './explore.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'layout',
  components: {
    CodeInput,
    TableHeader,
    Explore
  },
  methods: mapActions({
    fetchCollection: 'attendance/fetchCollection'
  }),
  computed: {
    ...mapGetters({
      collection: 'attendance/collection'
    })
  }
}
</script>
