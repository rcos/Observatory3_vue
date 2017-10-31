<template>
  <div class="container">

    <MissionStatement/>
    <Explore/>

    <hr/>

    <div class="row">
      <div class="col-lg-8">
        <p class="lead">
          Main Text component here
        </p>
      </div>
      <div class="col-lg-4">
        <p class="lead">
          Sidebar components here
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import MissionStatement from './missionStatement.vue'
  import Explore from './explore.vue'

  export default {
    name: 'main_home',
    components: {
      MissionStatement,
      Explore
    }

  }
</script>
