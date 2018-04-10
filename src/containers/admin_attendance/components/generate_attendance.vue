
<!--
<template>
  <div>
    <button v-on:click='console.log("Succesfully Generated Attendance Code")'type="button" class="btn btn-primary">Generate Attendance Code</button>
    <button type="button" class="btn btn-primary">Generate Bonus Attendance Code</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        message: ''
      }
    },
    template: '<div>{{ message }}</div>'
  }
</script>
-->

<template>
  <div>
    <button type="button" class="btn btn-primary" @click="generateAttendanceCode">Generate Attendance Code</button>
    <!-- TODO - add action to this button -->
    <button type="button" class="btn btn-primary">Generate Bonus Attendance Code</button>
    <p v-if="daycode"> Attedance Code Succesfully Generated: {{ daycode }} </p>
    <p v-else> Code Was Not Generated </p>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    data () {
      return {
        error: false
      }
    },
    methods: mapActions({
      generateAttendanceCode: 'classyear/generateAttendanceCode'
    }),
    computed: {
      ...mapGetters({
        daycode: 'classyear/daycode'
      })
    }
  }
</script>
