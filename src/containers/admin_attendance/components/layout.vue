
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

export default {
  name: 'layout',
  components: {
    List
  }
}
</script>

