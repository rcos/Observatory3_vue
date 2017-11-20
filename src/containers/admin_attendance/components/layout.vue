
<template>
  <div class="container">
    <h2>Full Group Attendance</h2>
    <hr>
    <h3>Attendance Days:</h3>
    <List/>
  </div>
</template>

<!-- // // // //  -->

<script>

import List from './list.vue'
import GenerateAttendance from './generate_attendance.vue'

export default {
  name: 'layout',
  components: {
    List,
    GenerateAttendance
  }
}
</script>

