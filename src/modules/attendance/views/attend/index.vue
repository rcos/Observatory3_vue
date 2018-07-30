<template>
  <div class="container">
    <PageHeader title="Attendance" />

    <AttendanceCodeInput/>

    <button class="btn btn-outline-success" @click="fetchCollection">
      Refresh
    </button>

    <h4>Attendance History:</h4>
    <AttendanceList :collection="collection"/>
  </div>
</template>

<!-- // // // //  -->

<script>
import AttendanceCodeInput from './components/input.vue'
import AttendanceList from './components/AttendanceList'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AttendanceView',
  components: {
    AttendanceCodeInput,
    AttendanceList
  },
  created () {
    this.fetchCollection()
  },
  methods: mapActions({
    fetchCollection: 'attendance/fetchCollection'
  }),
  computed: mapGetters({
    collection: 'attendance/collection'
  })
}
</script>
