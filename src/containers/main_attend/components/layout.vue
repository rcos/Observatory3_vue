
<template>
  <div class="container">
    <PageHeader title="Attendance" />

    <CodeInput/>
    <h4>Previous Attendance:</h4>
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


