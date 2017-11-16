<template>
  <div class="container pt-3">
  	<h4>Attendance</h4>
      <div class="col-lg-8">
        <CodeInput/>
      </div>
    <h4>Previoud Attendance:</h4>
    <TableHeader/>
    <Explore/>
  </div>
</template>

<!-- // // // //  -->

<script>
import CodeInput from './input.vue'
import TableHeader from './table_header'
import Explore from './explore.vue'

export default {
  name: 'layout',
  components: {
    CodeInput,
    TableHeader,
    Explore
  }
}
</script>


