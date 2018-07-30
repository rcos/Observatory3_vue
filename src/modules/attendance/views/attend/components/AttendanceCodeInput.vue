<template>
  <div class="input-group pt-3 pb-4">
    <input type="text" class="form-control" v-model="dayCode" placeholder="Day Code" aria-describedby="basic-addon2">
    <span class="input-group-addon" id="basic-addon2" @click="submitCode(dayCode)">Submit Attendance Code</span>
  </div>
</template>

<!-- // // // //  -->

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AttendanceCodeInput',
  data () {
    return {
      dayCode: ''
    }
  },
  methods: mapActions({
    submitCode: 'attendance/create'
  })
}
</script>
