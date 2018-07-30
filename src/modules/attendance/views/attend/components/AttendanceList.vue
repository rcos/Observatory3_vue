<template>
  <table class="table table-hover">
    <thead>
      <th class="col-md-3">Date</th>
      <th class="col-md-2">Type</th>
      <th class="col-md-2">Group</th>
      <th class="col-md-2">Verified</th>
      <th class="col-md-3">Attendance</th>
    </thead>
    <tbody>
      <AttendanceChild v-for="m in collection" :key="m.date" :model="m"/>
    </tbody>
  </table>
</template>

<script>
  import AttendanceChild from './AttendanceChild.vue'
  export default {
    name: 'AttendanceList',
    props: ['collection'],
    components: {
      AttendanceChild
    }
  }
</script>
