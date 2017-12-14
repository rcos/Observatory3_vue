
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
    <button type="button" class="btn btn-primary">Generate Attendance Code</button>
    <button type="button" class="btn btn-primary">Generate Bonus Attendance Code</button>
    <p v-if="error">Code Was Not Generated</p>
    <p v-else class="error">Attedance Code Succesfully Generated!</p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        error: false
      }
    }
  }
</script>