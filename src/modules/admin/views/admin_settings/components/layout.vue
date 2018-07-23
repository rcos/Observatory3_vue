
<template>
  <div class="container">
    <Semester/>
    <hr>
    <div class="row">
      <Buttons/>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>

import Buttons from './buttons.vue'
import Semester from './semester'

export default {
  name: 'layout',
  components: {
    Buttons,
    Semester
  }
}
</script>


