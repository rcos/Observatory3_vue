
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