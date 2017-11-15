<template>
  <div class="container pt-3">
  	<h4>Attendance</h4>
      <div class="col-lg-8">
        <CodeInput/>
      </div>
    <h4>Previoud Attendance:</h4>
    <AttendanceList/>
  </div>
</template>

<!-- // // // //  -->

<script>
import CodeInput from './input.vue'
import AttendanceList from './main_list'

export default {
  name: 'layout',
  components: {
    CodeInput,
    AttendanceList
  }
}
</script>


