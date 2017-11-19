
<template>
  <div class="container">
    <h3>{{model.name}}</h3>
    <hr>
    <div class="row">

      <div class="col-lg-3">
        <Sidebar :model="model"/>
      </div>

      <div class="col-lg-9">
        <Bio :model="model"/>
        <Projects :model="model"/>
      </div>

    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import Sidebar from './sidebar'
import Bio from './bio'
import Projects from './projects'

export default {
  props: ['model'],
  components: { Sidebar, Projects, Bio }
}
</script>
